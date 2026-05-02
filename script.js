console.log("JS IS RUNNING");
let level = 1;
function handleClick(x, y) {
    if (!gameActive) return;

    const distToBear = Math.hypot(x - match.bx, y - match.by);

    // פתיחת בזוקה
    if (!playerProfile.hasBazooka && distToBear < 80) {
        playerProfile.bearClicks++;

        if (playerProfile.bearClicks >= 2) {
            playerProfile.hasBazooka = true;
            alert("🔫 BAZOOKA UNLOCKED!");
        }
        return;
    }

    // ירי
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

// מחשב
canvas.addEventListener("mousedown", (e) => {
    handleClick(e.clientX, e.clientY);
});

// טלפון
canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleClick(touch.clientX, touch.clientY);
}, { passive: false });
function handleClick(x, y) { 
    if(!gameActive) return;

    const dx = x - match.bx;
    const dy = y - match.by;
    const dist = Math.hypot(dx, dy);

    if(playerProfile.hasBazooka){
        let angle = Math.atan2(y - match.py, x - match.px);
        match.missiles.push({
            x: match.px,
            y: match.py,
            vx: Math.cos(angle)*12,
            vy: Math.sin(angle)*12
        });
        return;
    }

    if(dist < 80){
        playerProfile.bearClicks++;
        console.log("click:", playerProfile.bearClicks);

        if(playerProfile.bearClicks === 2){
            playerProfile.hasBazooka = true;
            alert("🔫 BAZOOKA UNLOCKED!");
        }
    }
}

// מחשב
canvas.addEventListener('mousedown', (e) => {
    handleClick(e.clientX, e.clientY);
});

// טלפון 📱
canvas.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    handleClick(touch.clientX, touch.clientY);
});s
    if(!gameActive) return;

    const dx = e.clientX - match.bx;
    const dy = e.clientY - match.by;

    const dist = Math.hypot(dx, dy);

    if(dist < 80){
        playerProfile.bearClicks++;

        console.log("click:", playerProfile.bearClicks);

        if(playerProfile.bearClicks === 2){
            playerProfile.hasBazooka = true;
            alert("🔫 BAZOOKA UNLOCKED!");
 document.body.style.background = "#ff4757";

setTimeout(() => {
    document.body.style.background = "";
}, 200);
        }
    }
});
