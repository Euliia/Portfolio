const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");

let stars = [];
let w = 0;
let h = 0;

function resizeCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

    const count = Math.floor((w * h) / 14000);
    stars = [];

    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.6 + 0.2,
            a: Math.random() * 0.6 + 0.2,
            tw: Math.random() * 0.015 + 0.005
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        s.a += s.tw * (Math.random() > 0.5 ? 1 : -1);
        if (s.a < 0.15) s.a = 0.15;
        if (s.a > 0.9) s.a = 0.9;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255," + s.a + ")";
        ctx.fill();
    }

    requestAnimationFrame(drawStars);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
drawStars();
