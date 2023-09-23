 // ドキュメント要素取得して各変数に割り当て
 const timeElement = document.getElementById('time');
 const startButton = document.getElementById('start');
 const stopButton = document.getElementById('stop');
 const resetButton = document.getElementById('reset');

 // 開始時間
 let startTime;
 // 停止時間
 let stopTime = 0;
 // タイムアウトID（時間停止時に使用）
 let timeoutID;
 
 // 画面の表示の仕方を設定
 function displayTime() {
     // 現在の時間
     const currentTime = new Date(Date.now() - startTime + stopTime);
     // 時間、分、秒、小数点秒を頭に0をつけて表示
     const hour = String(currentTime.getHours() - 1).padStart(2, '0');
     const min = String(currentTime.getMinutes()).padStart(2, '0');
     const sec = String(currentTime.getSeconds()).padStart(2, '0');
     const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

     time.textContent = `${hour}:${min}:${sec}.${ms}`;
     timeoutID = setTimeout(displayTime, 10);
 }

 // スタートボタンクリック時、時間進行
 startButton.addEventListener('click', () => {
     // ストップボタンのみクリック可能
     startButton.disabled = true;
     stopButton.disabled = false;
     resetButton.disabled = true;
     startTime = Date.now();
     displayTime();
 });

 // ストップボタンクリック時、時間停止
 stopButton.addEventListener('click', function () {
     // スタートボタン、リセットボタンのみクリック可能
     startButton.disabled = false;
     stopButton.disabled = true;
     resetButton.disabled = false;
     // カウント停止
     clearTimeout(timeoutID);
     // スタートボタンクリック時刻-ストップボタンクリック時刻で経過時間を表示
     stopTime += (Date.now() - startTime);
 });

 // リセットボタンクリック時、時間リセット（0に戻す）
 resetButton.addEventListener('click', function () {
     // スタートボタンのみクリック可能
     startButton.disabled = false;
     stopButton.disabled = true;
     resetButton.disabled = true;
     // カウント時間をリセット
     time.textContent = '00:00:00.000';
     // 停止時間0
     stopTime = 0;
 });