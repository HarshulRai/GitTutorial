console.log(document.URL);
console.log(document.title);
document.title = '123';
console.log(document.doctype);
console.log(document.head);
console.log(document.all);

console.log(document.forms);
console.log(document.images);

console.log(document.getElementById('header-title'));
var headertitle = document.getElementById('header-title');
console.log(headertitle);

headertitle.textContent = 'Hello';
headertitle.innerText = 'Goodbye';
headertitle.style.borderBottom = 'solid 3px #000';

var additems = document.getElementById('add-items');
additems.style.color = 'green';
additems.style.fontWeight = 'bold';



