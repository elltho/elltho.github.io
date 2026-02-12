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
// We now pass 'sliderId' so the function knows which box to scroll
function scrollSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    
    if (slider) {
        const scrollAmount = slider.clientWidth;
        
        // If we're at the end, loop back to the start
        if (slider.scrollLeft + scrollAmount >= slider.scrollWidth - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Otherwise, scroll by one full box width
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
}