const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1025/600/400",
    "https://picsum.photos/id/1035/600/400",
    "https://picsum.photos/id/1041/600/400",
    "https://picsum.photos/id/1050/600/400"
];

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

// Open lightbox
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        currentIndex = img.getAttribute("data-index");
        showImage();
        lightbox.style.display = "flex";
    });
});

function showImage() {
    lightboxImg.src = images[currentIndex];
}

// Close
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Next
nextBtn.addEventListener("click", () => {
    currentIndex = (parseInt(currentIndex) + 1) % images.length;
    showImage();
});

// Previous
prevBtn.addEventListener("click", () => {
    currentIndex = (parseInt(currentIndex) - 1 + images.length) % images.length;
    showImage();
});
