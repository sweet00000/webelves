// Site-wide account system: Firebase auth + tier tracking + Stripe checkout via
// the existing Lambda. Self-injecting — include this module on any page and it
// adds the nav account widget + sign-in modal, tracks the user, and exposes
// window.elfAccount. The Firebase WEB config is public by design; no server
// secret is in the frontend (Stripe keys live on the Lambda).
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
  getAuth, onAuthStateChanged,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut,
  GoogleAuthProvider, signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyA5mSM-SmQWs2dSbN60wEIi7W3fEyhli3o",
  authDomain: "elvescode.firebaseapp.com",
  projectId: "elvescode",
  storageBucket: "elvescode.firebasestorage.app",
  messagingSenderId: "275757941364",
  appId: "1:275757941364:web:b9bbecb24321c789f00721",
  measurementId: "G-ZYSJFW00G9",
};
const BACKEND = 'https://zq52asec3gspp2sregscamgbja0pqgae.lambda-url.us-east-1.on.aws';
const TIER_RANK = { open: 0, pro: 1, ultra: 2, enterprise: 3 };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let mode = 'login', pendingPkg = null, tier = 'open';

// ---- inject markup ----
const widget = document.createElement('div');
widget.className = 'acct';
widget.innerHTML = `
  <button class="acct-signin" data-a="signin">Sign in</button>
  <div class="acct-menu" data-a="menu" hidden>
    <button class="acct-btn" data-a="toggle">
      <span class="acct-avatar" data-a="avatar">?</span>
      <span class="acct-email" data-a="email"></span>
      <span class="acct-tier" data-a="tier" hidden></span>
    </button>
    <div class="acct-drop" data-a="drop" hidden>
      <div class="acct-row">Plan: <b data-a="plan">open</b></div>
      <button class="acct-link up" data-a="upgrade">Get Pro →</button>
      <button class="acct-link" data-a="logout">Sign out</button>
    </div>
  </div>`;

const modal = document.createElement('div');
modal.className = 'acctm-bg';
modal.innerHTML = `
  <div class="acctm">
    <button class="acctm-x" data-a="close" aria-label="Close">×</button>
    <h3 data-a="title">Sign in</h3>
    <p>Sign in to subscribe to Pro. Free tools need no account.</p>
    <input data-a="email-in" type="email" placeholder="you@example.com" autocomplete="email">
    <input data-a="pw" type="password" placeholder="Password" autocomplete="current-password">
    <button class="primary" data-a="submit">Sign in →</button>
    <button class="ghost" data-a="google">Continue with Google</button>
    <div class="acctm-err" data-a="err"></div>
    <div class="acctm-foot"><span data-a="toggletext">No account?</span> <a data-a="switch">Create one</a></div>
  </div>`;

const $ = sel => widget.querySelector(`[data-a="${sel}"]`);
const $m = sel => modal.querySelector(`[data-a="${sel}"]`);

function mount() {
  const slot = document.querySelector('.nav-actions') || document.querySelector('nav .nav-tabs') || document.querySelector('nav');
  if (slot) slot.appendChild(widget); else document.body.appendChild(widget);
  document.body.appendChild(modal);
  wire();
}

// ---- modal ----
function open(pkg) { pendingPkg = pkg || null; $m('err').textContent = ''; modal.classList.add('open'); $m('email-in').focus(); }
function close() { modal.classList.remove('open'); }
function switchMode() {
  mode = mode === 'login' ? 'register' : 'login';
  $m('title').textContent = mode === 'login' ? 'Sign in' : 'Create account';
  $m('submit').textContent = mode === 'login' ? 'Sign in →' : 'Create account →';
  $m('toggletext').textContent = mode === 'login' ? 'No account?' : 'Have an account?';
  $m('switch').textContent = mode === 'login' ? 'Create one' : 'Sign in';
}
async function submit() {
  const email = $m('email-in').value.trim(), pw = $m('pw').value;
  $m('err').textContent = '';
  try {
    await (mode === 'login' ? signInWithEmailAndPassword(auth, email, pw) : createUserWithEmailAndPassword(auth, email, pw));
    close(); if (pendingPkg) checkout(pendingPkg);
  } catch (e) { $m('err').textContent = (e.message || 'Auth failed').replace('Firebase:', '').trim(); }
}
async function google() {
  $m('err').textContent = '';
  try { await signInWithPopup(auth, new GoogleAuthProvider()); close(); if (pendingPkg) checkout(pendingPkg); }
  catch (e) { $m('err').textContent = e.message || 'Sign-in failed'; }
}

// ---- checkout via Lambda ----
async function checkout(pkg) {
  const u = auth.currentUser;
  if (!u) { open(pkg); return; }
  try {
    const token = await u.getIdToken();
    const res = await fetch(`${BACKEND}/api/checkout/create-session`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ package_id: pkg }),
    });
    if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e.detail || 'Checkout failed'); }
    const data = await res.json();
    if (data.url) location.href = data.url;
  } catch (e) { toast(e.message || 'Checkout failed'); }
}

// ---- tier ----
async function loadTier(uid) {
  try { const snap = await getDoc(doc(db, 'users', uid)); tier = (snap.exists() && snap.data().plan) || 'open'; }
  catch { tier = 'open'; }
  return tier;
}
function requireTier(min) { return (TIER_RANK[tier] ?? 0) >= (TIER_RANK[min] ?? 99); }

function toast(msg) {
  if (typeof window.showToast === 'function') return window.showToast(msg, '#e87a8a');
  alert(msg);
}

// ---- ui state ----
function renderUser(user) {
  if (user) {
    $('signin').hidden = true; $('menu').hidden = false;
    $('avatar').textContent = (user.email || '?')[0].toUpperCase();
    $('email').textContent = user.email || 'account';
  } else {
    $('signin').hidden = false; $('menu').hidden = true; $('drop').hidden = true;
    tier = 'open';
  }
}
function renderTier() {
  $('plan').textContent = tier;
  const t = $('tier');
  if (tier !== 'open') { t.hidden = false; t.textContent = tier; } else { t.hidden = true; }
  $('upgrade').hidden = requireTier('pro'); // hide upgrade once they have a paid tier
}

function wire() {
  $('signin').addEventListener('click', () => open());
  $('toggle').addEventListener('click', () => { $('drop').hidden = !$('drop').hidden; });
  $('upgrade').addEventListener('click', () => { $('drop').hidden = true; checkout('pro'); });
  $('logout').addEventListener('click', () => { $('drop').hidden = true; signOut(auth); });
  $m('close').addEventListener('click', close);
  $m('submit').addEventListener('click', submit);
  $m('google').addEventListener('click', google);
  $m('switch').addEventListener('click', switchMode);
  $m('pw').addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('click', e => { if (!widget.contains(e.target)) $('drop').hidden = true; });

  onAuthStateChanged(auth, async (user) => {
    renderUser(user);
    if (user) { await loadTier(user.uid); renderTier(); }
  });
}

window.elfAccount = {
  open, goPro: () => checkout('pro'), checkout,
  getTier: () => tier, requireTier, logout: () => signOut(auth),
  onUser: cb => onAuthStateChanged(auth, cb),
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
else mount();
