const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");

let w = 0;
let h = 0;
let stars = [];

function resizeCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

    stars = [];
    const count = Math.floor((w * h) / 20000);

    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.2 + 0.2,
            a: Math.random() * 0.35 + 0.08,
            drift: Math.random() * 0.25 + 0.05
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        s.y += s.drift;
        if (s.y > h) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(35, 40, 55, " + s.a + ")";
        ctx.fill();
    }

    requestAnimationFrame(drawStars);
}

window.addEventListener("resize", resizeCanvas);

function githubRedirect() {
    globalThis.location.href = "https://github.com/Euliia";
}

function linkedinRedirect() {
    globalThis.location.href = "https://www.linkedin.com/in/júlía-gunnlaugsdóttir";
}

resizeCanvas();
drawStars();
