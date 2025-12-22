function hyoji17(){
  var str17 = "一文字ずつ表示します。";
  var cnt17 = document.timer17.moji17.value.length;
 if(cnt17 < 11){ document.timer17.moji17.value = str17.substr(0, cnt17 + 1); } 
 else {document.timer17.moji17.value = ""; }
  setTimeout("hyoji17()", 1000);}
