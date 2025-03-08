document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();

    // Düşen kalpler oluştur
    for (let i = 0; i < 30; i++) {
        createRoses();
    }
});

function createRoses() {
    const rose = document.createElement("div");
    rose.innerHTML = "🌹";
    rose.style.position = "fixed";
    rose.style.fontSize = Math.random() * 2 + 1 + "rem";
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.top = "-20px";
    rose.style.opacity = Math.random() * 0.5 + 0.5;
    rose.style.zIndex = "1000";
    rose.style.pointerEvents = "none";
    document.body.appendChild(rose);

    const duration = Math.random() * 3 + 2;
    rose.style.animation = `fall ${duration}s linear forwards`;

    // Düşme animasyonu için keyframes ekle
    if (!document.querySelector("#heart-fall-animation")) {
        const style = document.createElement("style");
        style.id = "heart-fall-animation";
        style.innerHTML = `
                    @keyframes fall {
                        to {
                            transform: translateY(100vh) rotate(${
                                Math.random() * 360
                            }deg);
                            opacity: 0;
                        }
                    }
                `;
        document.head.appendChild(style);
    }

    // Animasyon sonrası kalpleri kaldır
    setTimeout(() => {
        rose.remove();
    }, duration * 1000);
}
