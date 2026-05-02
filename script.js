console.log("JS IS RUNNING");

let level = 1;
let lastClickTime = 0;

function handleClick(x, y) {
    if (!gameActive) return;

    const distToBear = Math.hypot(x - match.bx, y - match.by);

    // Double click/tap on bear unlocks bazooka
    if (!playerProfile.hasBazooka && distToBear < 80) {
        const now = Date.now();

        if (now - lastClickTime < 350) {
            playerProfile.hasBazooka = true;
            alert("🔫 BAZOOKA UNLOCKED!");
        }

        lastClickTime = now;
        return;
    }

    // Shoot bazooka
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

// Computer
canvas.addEventListener("mousedown", (e) => {
    handleClick(e.clientX, e.clientY);
});

// Phone
canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleClick(touch.clientX, touch.clientY);
}, { passive: false });
