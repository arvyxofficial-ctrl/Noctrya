// Generator Kunang-Kunang / Fireflies yang Banyak dan Lembut
const ambientLayer = document.getElementById('ambientLayer');
const fireflyCount = 45; // Jumlah kunang-kunang

for (let i = 0; i < fireflyCount; i++) {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';
    firefly.style.left = Math.random() * 100 + 'vw';
    firefly.style.animationDuration = (6 + Math.random() * 8) + 's';
    firefly.style.animationDelay = (Math.random() * 7) + 's';
    
    // Variasi ukuran kecil agar rapi
    const size = (2 + Math.random() * 3) + 'px';
    firefly.style.width = size;
    firefly.style.height = size;
    
    ambientLayer.appendChild(firefly);
}

// Navigasi Page Switcher
function switchPage(pageId, event) {
    document.querySelectorAll('.grimoire-page').forEach(page => {
        page.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
    event.currentTarget.classList.add('active');

    const status = document.getElementById('statusText');
    status.innerText = `Status: Browsing Tome of ${pageId.toUpperCase()}`;
}

// Modal Handler
function openLoreModal(title, text) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = text;
    document.getElementById('loreModal').classList.add('open');
}

function closeModalDirect() {
    document.getElementById('loreModal').classList.remove('open');
}

function closeLoreModal(event) {
    if (event.target === document.getElementById('loreModal')) {
        closeModalDirect();
    }
}

// Tombol Sigil
function triggerSigilBlessing() {
    const status = document.getElementById('statusText');
    const flame = document.querySelector('.purple-flame');
    status.innerText = "Status: ✨ Ancient Sigil Activated! Sanctuary Wards Strengthened.";
    flame.style.boxShadow = "0 0 50px #d4af37, 0 0 90px rgba(212, 175, 55, 0.6)";
    setTimeout(() => {
        flame.style.boxShadow = "0 0 30px #9333ea, 0 0 60px rgba(147, 51, 234, 0.4)";
        status.innerText = "Status: Grimoire Active & Stable";
    }, 3000);
}

function igniteMoreFlames() {
    const status = document.getElementById('statusText');
    status.innerText = "Status: 🔥 The Sacred Flame Pulses with Ancient Energy!";
}
