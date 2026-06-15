// COUNTDOWN
    (function() {
    const target = new Date('2026-06-14T16:00:00+07:00').getTime();
    function pad(n) { return String(n).padStart(2,'0'); }
    function tick() {
        const now = Date.now();
        const diff = target - now;
        if (diff <= 0) {
        document.getElementById('cdGrid').innerHTML = '<p class="event-passed">✦ Pertunjukan Sedang / Telah Berlangsung ✦</p>';
        return;
        }
        const hari   = Math.floor(diff / 86400000);
        const jam    = Math.floor((diff % 86400000) / 3600000);
        const menit  = Math.floor((diff % 3600000) / 60000);
        const detik  = Math.floor((diff % 60000) / 1000);
        document.getElementById('cd-hari').textContent  = pad(hari);
        document.getElementById('cd-jam').textContent   = pad(jam);
        document.getElementById('cd-menit').textContent = pad(menit);
        document.getElementById('cd-detik').textContent = pad(detik);
        }
        tick();
        setInterval(tick, 1000);
    })();

// SCROLL REVEAL
    (function() {
        const els = document.querySelectorAll('.reveal');
        const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
        }, { threshold: 0.12 });
        els.forEach(el => obs.observe(el));
    })();

// HAMBURGER

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            hamburger.innerHTML = '✕';
        } else {
            hamburger.innerHTML = '☰';
        }
    });
});

// audio

const music = document.getElementById('bgMusic');

document.addEventListener('click', () => {
    music.play();
}, { once: true });

const galleries = {
    pertunjukan: [],
    latihan: [],
    bts: []
};

for(let i = 5117; i <= 5316; i++){
    galleries.pertunjukan.push(
        `asset/gallery/pertunjukan/P139${i}.JPG`
    );
}

galleries.latihan = [
"asset/gallery/latihan/DSC02398.JPG",
"asset/gallery/latihan/DSC02399.JPG",
"asset/gallery/latihan/DSC02400.JPG",
"asset/gallery/latihan/DSC02401.JPG",
"asset/gallery/latihan/DSC02402.JPG",
"asset/gallery/latihan/DSC02403.JPG",
"asset/gallery/latihan/DSC02404.JPG",
"asset/gallery/latihan/DSC02405.JPG",
"asset/gallery/latihan/DSC02406.JPG",
"asset/gallery/latihan/DSC02407.JPG",
"asset/gallery/latihan/DSC02408.JPG",
"asset/gallery/latihan/DSC02410.JPG",
"asset/gallery/latihan/DSC02411.JPG",
"asset/gallery/latihan/DSC02413.JPG",
"asset/gallery/latihan/DSC02414.JPG",
"asset/gallery/latihan/DSC02415.JPG",
"asset/gallery/latihan/DSC02416.JPG",
"asset/gallery/latihan/DSC02417.JPG",
"asset/gallery/latihan/DSC02418.JPG",
"asset/gallery/latihan/DSC02419.JPG",
"asset/gallery/latihan/DSC02420.JPG",
"asset/gallery/latihan/DSC02421.JPG",
"asset/gallery/latihan/DSC02423.JPG",
"asset/gallery/latihan/DSC02424.JPG",
"asset/gallery/latihan/DSC02425.JPG",
"asset/gallery/latihan/DSC02426.JPG",
"asset/gallery/latihan/DSC02427.JPG",
"asset/gallery/latihan/DSC02428.JPG",
"asset/gallery/latihan/DSC02429.JPG",
"asset/gallery/latihan/DSC02430.JPG",
"asset/gallery/latihan/DSC02431.JPG",
"asset/gallery/latihan/DSC02432.JPG",
"asset/gallery/latihan/DSC02433.JPG",
"asset/gallery/latihan/DSC02434.JPG",
"asset/gallery/latihan/DSC02435.JPG",
"asset/gallery/latihan/DSC02436.JPG",
"asset/gallery/latihan/DSC02437.JPG",
"asset/gallery/latihan/DSC02438.JPG",
"asset/gallery/latihan/DSC02439.JPG",
"asset/gallery/latihan/DSC03957.JPG",
"asset/gallery/latihan/DSC03958.JPG",
"asset/gallery/latihan/DSC03959.JPG",
"asset/gallery/latihan/DSC03960.JPG",
"asset/gallery/latihan/DSC03961.JPG",
"asset/gallery/latihan/DSC03962.JPG",
"asset/gallery/latihan/DSC03963.JPG",
"asset/gallery/latihan/DSC03964.JPG",
"asset/gallery/latihan/DSC03965.JPG",
"asset/gallery/latihan/DSC03971.JPG",
"asset/gallery/latihan/DSC03972.JPG"
];

let currentGallery = [];
let currentIndex = 0;

function getThumbnail(src){

    return src
        .replace(
            "asset/gallery/pertunjukan/",
            "asset/gallery/pertunjukan-thumb/"
        )
        .replace(
            "asset/gallery/latihan/",
            "asset/gallery/latihan-thumb/"
        )
        .replace(
            "asset/gallery/bts/",
            "asset/gallery/bts-thumb/"
        )
        .replace(".JPG", ".jpg");
}

function openGallery(type){

    currentGallery = galleries[type];

    const titles = {
    pertunjukan: "FOTO PERTUNJUKAN",
    latihan: "LATIHAN & GLADI",
    bts: "BEHIND THE SCENE",
    video: "CUPLIKAN VIDEO"
};

document.getElementById("galleryTitle").textContent =
    titles[type] || "GALERI";

    galleryModal.classList.add("active");

    const grid =
        document.getElementById("galleryPhotoGrid");

    grid.innerHTML = "";

    currentGallery.forEach((src,index)=>{

    const img = document.createElement("img");
    console.log(getThumbnail(src));
    img.src = getThumbnail(src);

    img.loading = "lazy";
    img.decoding = "async";

    img.onclick = ()=>{
        openLightbox(index);
    };

    grid.appendChild(img);

});
}

function closeGallery(){
    galleryModal.classList.remove("active");
}

function openLightbox(index){

    currentIndex = index;

    lightbox.classList.add("active");

    updateImage();
}

function updateImage(){

    lightboxImage.src =
        currentGallery[currentIndex];

    photoCounter.innerHTML =
        `${currentIndex + 1} / ${currentGallery.length}`;
}

function nextImage(){

    currentIndex =
    (currentIndex + 1)
    % currentGallery.length;

    updateImage();
}

function prevImage(){

    currentIndex =
    (currentIndex - 1 +
    currentGallery.length)
    % currentGallery.length;

    updateImage();
}

function closeLightbox(){

    lightbox.classList.remove("active");
}

function comingSoon(){

    document.getElementById("galleryTitle").textContent =
        "COMING SOON";

    const grid =
        document.getElementById("galleryPhotoGrid");

    grid.innerHTML = `
        <div class="coming-soon">
            <h2>🎬 Coming Soon</h2>
            <p>Dokumentasi sedang dalam proses pengumpulan dan kurasi.</p>
        </div>
    `;

    galleryModal.classList.add("active");
}

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart", (e)=>{
    touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener("touchend", (e)=>{
    touchEndX = e.changedTouches[0].screenX;

    if(touchEndX < touchStartX - 50){
        nextImage(); // swipe kiri
    }

    if(touchEndX > touchStartX + 50){
        prevImage(); // swipe kanan
    }
});

function updateImage(){

    const loader =
        document.getElementById("lightboxLoader");

    loader.style.display = "flex";

    lightboxImage.style.opacity = "0";

    const img = new Image();

    img.onload = () => {

        lightboxImage.src = img.src;

        loader.style.display = "none";

        lightboxImage.style.opacity = "1";

        const next =
            currentGallery[(currentIndex + 1) % currentGallery.length];

        new Image().src = next;
    };

    img.onerror = () => {

        loader.style.display = "none";

        console.error("Gagal memuat gambar:", currentGallery[currentIndex]);
    };

    img.src = currentGallery[currentIndex];

    photoCounter.innerHTML =
        `${currentIndex + 1} / ${currentGallery.length}`;
}