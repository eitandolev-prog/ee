console.log("JS IS RUNNING");

let level = 1;
let lastClickTime = 0;

let startTime = 0;
let currentTime = 0;
let bestTime = localStorage.getItem("bestTime") || null;

function startTimer() {
    startTime = Date.now();
}

function updateTimer() {
    currentTime = ((Date.now() - startTime) / 1000).toFixed(1);
}

function saveBestTime() {
    if (!bestTime || Number(currentTime) < Number(bestTime)) {
        bestTime = currentTime;
        localStorage.setItem("bestTime", bestTime);
        return true;
    }
    return false;
}

function handleClick(x, y) {
    if (!gameActive) return;

    const distToBear = Math.hypot(x - match.bx, y - match.by);

    if (!playerProfile.hasBazooka && distToBear < 80) {
        const now = Date.now();

        if (now - lastClickTime < 350) {
            playerProfile.hasBazooka = true;
            alert("🔫 BAZOOKA UNLOCKED!");
        }

        lastClickTime = now;
        return;
    }

    if (playerProfile.hasBazooka) {
        let angle = Math.atan2(y - match.py, x - match.px);
        match.missiles.push({
            x: match.px,
            y: match.py,
            vx: Math.cos(angle) * 12,
            vy: Math.sin(angle) * 12
        });
    }
}

canvas.addEventListener("mousedown", (e) => {
    handleClick(e.clientX, e.clientY);
});

canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleClick(touch.clientX, touch.clientY);
}, { passive: false });
