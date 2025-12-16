
// タイマーIDを格納する変数。停止（clearInterval）のために必須。
let timerId17 = null; 

function hyoji17(){
    // 表示する文字
    var str = "一文字ずつ表示します。";
    // テキストボックスの文字数
    var cnt17 = document.timer17.moji17.value.length;
    
    // 文字が全部表示されているか確認 (str.lengthと比較)
    if(cnt17 < str.length){
        // 現在より１文字多く切り出して表示 (str17 ではなく str を使用)
        document.timer17.moji17.value = str.substr(0, cnt17 + 1);
    } else {
        // 【追加】全て表示されたら、タイマーを停止
        clearInterval(timerId17);
        timerId17 = null; // IDをリセット
        
        // 1秒待ってからテキストボックスを空に戻す
        setTimeout(() => {
             document.timer17.moji17.value = "";
        }, 1000);
    }
    // 【削除】setTimeoutの再帰呼び出しは不要
}

// 【追加】ボタンが呼び出すスタート関数
function startfnc17(){
    // 二重起動防止
    if (timerId17 !== null) {
        return;
    }
    // 【変更】1秒ごとに hyoji17 を実行するタイマーを開始し、IDを保存
    timerId17 = setInterval(hyoji17, 1000); 
}
