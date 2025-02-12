const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const formatElement = document.getElementById('format');

let is24HourFormat = true; // 24時間制がデフォルト

// 時間を更新する関数
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = '';

  // 12時間制の場合
  if (!is24HourFormat) {
    if (hours >= 12) {
      ampm = 'PM';
      if (hours > 12) hours -= 12;  // 12時を過ぎたら12時間制に変換
    } else {
      ampm = 'AM';
      if (hours === 0) hours = 12;  // 0時は12時に変換
    }
  }

  // 2桁表示にするための処理
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // 24時間制とAM/PMのフォーマットを切り替え
  if (is24HourFormat) {
    hoursElement.textContent = `${hours}`;
    minutesElement.textContent = `${minutes}`;
    secondsElement.textContent = `${seconds}`;
    formatElement.textContent = '24HOURS';
  } else {
    hoursElement.textContent = `${hours}`;
    minutesElement.textContent = `${minutes}`;
    secondsElement.textContent = `${seconds}`;
    formatElement.textContent = `${ampm}`;
  }
}

// 1秒ごとに時刻を更新
setInterval(updateTime, 1000);

// 時計をクリックしたときにフォーマットを切り替える
document.getElementById('clock').addEventListener('click', () => {
  is24HourFormat = !is24HourFormat;
  updateTime(); // 表示を更新
});

// 初回の更新
updateTime();
