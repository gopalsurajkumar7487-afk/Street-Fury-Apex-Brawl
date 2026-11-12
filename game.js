const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player = { x: 50, y: 180, width: 40, height: 70, color: '#ff3333', state: 'IDLE', health: 100 };
let enemy = { x: 300, y: 180, width: 40, height: 70, color: '#3333ff', state: 'IDLE', health: 100 };
let battleLog = "FIGHT START!";

document.getElementById('btnPunch').addEventListener('touchstart', () => {
    player.state = 'PUNCH';
    battleLog = "Player PUNCH!";
    setTimeout(() => { player.state = 'IDLE'; }, 300);
});

document.getElementById('btnKick').addEventListener('touchstart', () => {
    player.state = 'KICK';
    battleLog = "Player KICK!";
    setTimeout(() => { player.state = 'IDLE'; }, 300);
});

document.getElementById('btnGrab').addEventListener('touchstart', () => {
    player.state = 'GRAB';
    battleLog = "Player GRAB!";
    setTimeout(() => { player.state = 'IDLE'; }, 400);
});

document.getElementById('btnSuper').addEventListener('touchstart', () => {
    player.state = 'SUPER';
    battleLog = "APEX SUPER MOVE!";
    setTimeout(() => { player.state = 'IDLE'; }, 500);
});

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#1a1a1a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#444";
    ctx.fillRect(0, 250, canvas.width, 50);

    ctx.fillStyle = "#ffcc00";
    ctx.font = "bold 14px sans-serif";
    ctx.fillText("STREET FURY: APEX BRAWL", 70, 30);

    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);

    ctx.fillStyle = "#fff";
    ctx.font = "14px sans-serif";
    ctx.fillText(battleLog, 120, 80);
}
setInterval(update, 1000 / 60);

