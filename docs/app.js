const menuButton = document.querySelector('[data-menu]');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  navigation?.classList.remove('is-open');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
navigation?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });

const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-work]')];
const galleryCount = document.querySelector('[data-gallery-count]');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
  const count = cards.filter(card => !card.hidden).length;
  if (galleryCount) galleryCount.textContent = `${count} ${count === 1 ? 'photograph' : 'photographs'}`;
}));
const lightbox = document.querySelector('#lightbox');
let currentImage = 0;
let opener;
const visibleCards = () => cards.filter(card => !card.hidden);
function showImage(index) {
  const visible = visibleCards();
  currentImage = (index + visible.length) % visible.length;
  const card = visible[currentImage];
  const source = card.querySelector('img');
  const image = lightbox.querySelector('img');
  image.src = source.dataset.full || source.src;
  image.alt = source.alt;
  lightbox.querySelector('[data-caption]').textContent = [...card.querySelector('figcaption').children].map(part => part.textContent.trim()).join(' · ');
  lightbox.querySelector('[data-position]').textContent = `${currentImage + 1} / ${visible.length}`;
}
cards.forEach(card => card.querySelector('button')?.addEventListener('click', event => {
  opener = event.currentTarget;
  showImage(visibleCards().indexOf(card));
  lightbox.showModal();
  document.body.classList.add('modal-open');
}));
lightbox?.querySelector('[data-close]')?.addEventListener('click', () => lightbox.close());
lightbox?.querySelector('[data-prev]')?.addEventListener('click', () => showImage(currentImage - 1));
lightbox?.querySelector('[data-next]')?.addEventListener('click', () => showImage(currentImage + 1));
lightbox?.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
lightbox?.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') { event.preventDefault(); showImage(currentImage + 1); }
  if (event.key === 'ArrowLeft') { event.preventDefault(); showImage(currentImage - 1); }
});
lightbox?.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  opener?.focus();
});

// A real SMS handoff: this does not pretend that a request has been sent.
const textForm = document.querySelector('[data-text-form]');
textForm?.addEventListener('input', () => {
  document.querySelector('[data-sms-ready]').hidden = true;
  document.querySelector('[data-sms-instruction]').hidden = true;
});
textForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (!textForm.reportValidity()) return;
  const data = new FormData(textForm);
  const message = `Hi Madan! I'd like an estimate for ${data.get('service')}. Vehicle: ${data.get('vehicle')}. Location: ${data.get('city')}. ${data.get('notes') || ''}`.trim();
  const link = document.querySelector('[data-sms-ready]');
  link.href = `sms:+13059045114?body=${encodeURIComponent(message)}`;
  link.hidden = false;
  document.querySelector('[data-sms-instruction]').hidden = false;
  link.focus();
});
