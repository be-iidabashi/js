const character = document.getElementById('character');
const container = document.getElementById('container');

// コンテナのサイズを取得
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

// キャラクターの初期位置を中央に設定
let charX = containerWidth / 2 - character.offsetWidth / 2;
let charY = containerHeight / 2 - character.offsetHeight / 2;

// キャラクターを中央に配置
character.style.left = `${charX}px`;
character.style.top = `${charY}px`;

// 進行方向の初期設定
let directionX = Math.random() * 2 - 1;  // -1 から 1 のランダムな方向
let directionY = Math.random() * 2 - 1;  // -1 から 1 のランダムな方向
let speed = 5;  // キャラクターの移動速度

// 効果音の準備
const hoverSound = document.getElementById('hover-sound');

// マウスホバーの処理
container.addEventListener('mouseover', () => {
  // 進行方向をランダムに更新
  directionX = Math.random() * 2 - 1;  // 新しい方向に設定
  directionY = Math.random() * 2 - 1;  // 新しい方向に設定

  // 効果音の再生
  hoverSound.currentTime = 0;  // 音がリセットされるように
  hoverSound.play();  // 効果音を再生
});

// キャラクターを動かす関数
function moveCharacter() {
  // キャラクターがコンテナの範囲内で動き続けるように調整
  charX += directionX * speed;
  charY += directionY * speed;

  // もしキャラクターがコンテナの範囲外に出たら、反対方向に進む
  if (charX < 0 || charX > containerWidth - character.offsetWidth) {
    directionX = -directionX;
  }
  if (charY < 0 || charY > containerHeight - character.offsetHeight) {
    directionY = -directionY;
  }

  // キャラクターの位置を更新
  character.style.left = `${charX}px`;
  character.style.top = `${charY}px`;

  // 毎フレーム呼び出して動かし続ける
  requestAnimationFrame(moveCharacter);
}

// アニメーション開始
moveCharacter();
