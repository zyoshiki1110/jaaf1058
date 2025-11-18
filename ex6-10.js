function changeimage(){const container = document.getElementBYId('imageContainer');}
const img1 = 'kaiei_small.jpg';
const img2 = '20240721.jpg';
if (container) return;
if (container.innerHTML.includes(img1))
{container.innerHTML = '<img src="${img2}" alt="変更後の画像">';}
else{container.innerHTML = '<img src="${img1}" alt="最初の画像">';}
