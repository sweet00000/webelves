// ── SCROLL TO SECTION ─────────────────────────────────────────────────────────
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navH = document.querySelector('nav')?.offsetHeight || 60;
  const top = el.getBoundingClientRect().top + window.scrollY - navH - 16;
  window.scrollTo({ top, behavior: 'smooth' });
  if (history.replaceState) history.replaceState(null, '', '#' + id);
}

document.querySelectorAll('.tab-btn[data-section]').forEach(btn => {
  btn.addEventListener('click', () => scrollToId(btn.dataset.section));
});

// ── SCROLL SPY ────────────────────────────────────────────────────────────────
function setupScrollSpy() {
  const sections = ['products', 'pricing', 'notebookelf', 'codelves', 'webelves', 'forge'];

  function updateActive() {
    const navH = document.querySelector('nav')?.offsetHeight || 60;
    const threshold = navH + 40;
    let active = null;
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= threshold) active = id;
    }
    document.querySelectorAll('.tab-btn[data-section]').forEach(b => {
      b.classList.toggle('active', b.dataset.section === active);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

// ── INIT ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  setupScrollSpy();
  const hash = location.hash.replace('#', '');
  const valid = ['products', 'pricing', 'notebookelf', 'codelves', 'webelves', 'forge'];
  if (valid.includes(hash)) setTimeout(() => scrollToId(hash), 120);
});

// ── SCROLL TO PRICING / FORGE WAITLIST ───────────────────────────────────────
function goToPricing() {
  scrollToId('pricing');
}

function goToForgeWaitlist() {
  scrollToId('forge');
  setTimeout(() => {
    const el = document.getElementById('emailInput');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 400);
}

// ── TOAST ─────────────────────────────────────────────────────────────────────
function showToast(msg, accent) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.borderColor = accent || 'var(--teal)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2600);
}

// ── WAITLIST ──────────────────────────────────────────────────────────────────
function joinWaitlist(inputId, tier) {
  inputId = inputId || 'emailInput';
  tier = tier || 'foundry';
  const email = document.getElementById(inputId).value.trim();
  if (!email || !email.includes('@')) { showToast('Enter a valid email', 'var(--rose)'); return; }
  const key = 'elf.waitlist.' + tier;
  const list = JSON.parse(localStorage.getItem(key) || '[]');
  if (!list.includes(email)) list.push(email);
  localStorage.setItem(key, JSON.stringify(list));
  document.getElementById(inputId).value = '';
  showToast("You're on the list. We'll be in touch.", 'var(--teal)');
}
