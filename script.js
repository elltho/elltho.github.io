/* --- 1. HERO IMAGE SWAP (Home Page) --- */
const images = [
  'assets/hero-1.jpg',
  'assets/hero-2.jpg',
  'assets/hero-3.jpg',
  'assets/hero-4.jpg'
];

let currentIndex = 0;
const imgElement = document.getElementById('hero-img');

if (imgElement) {
  function changeImage() {
    imgElement.style.opacity = 0;
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      imgElement.src = images[currentIndex];
      imgElement.style.opacity = 1;
    }, 400);
  }
  setInterval(changeImage, 4000);
}

/* --- 2. MULTI-SLIDER LOGIC (Cases Page) --- */
function scrollSlider(sliderId) {
  const slider = document.getElementById(sliderId);

  if (slider) {
    const scrollAmount = slider.clientWidth;

    if (slider.scrollLeft + scrollAmount >= slider.scrollWidth - 10) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}

/* --- 3. DATA LAYER CLICK TRACKING (All Pages) --- */
window.dataLayer = window.dataLayer || [];

function cleanText(t) {
  return (t || '').replace(/\s+/g, ' ').trim();
}

document.addEventListener('click', function (e) {
  // Track ALL links
  const link = e.target.closest('a');
  if (link) {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    window.dataLayer.push({
      event: 'link_click',
      link_text: cleanText(link.textContent),
      link_url: link.href,
      click_timestamp: new Date().getTime()
    });
    return;
  }

  // Track arrow clicks (your slider arrows)
  const arrow = e.target.closest('.buddy-arrow');
  if (arrow) {
    const onclickText = arrow.getAttribute('onclick') || '';
    const match = onclickText.match(/scrollSlider\('([^']+)'\)/);
    const sliderId = match ? match[1] : '';

    window.dataLayer.push({
      event: 'arrow_click',
      arrow_slider_id: sliderId,
      click_timestamp: new Date().getTime()
    });
    return;
  }
});