function checkLeapYear() {var year = Number(document.getElementById('year711').value);
                          var result = "";
if (year % 4 == 0) {if (year % 100 == 0) {if (year % 400 == 0) {result = year + "年は「閏年」です。";} else {result = year + "年は「平年」です。";}
                 } else {result = year + "年は「閏年」です。";}} else {result = year + "年は「平年」です。";}
document.getElementById('result711').innerText = result;}
