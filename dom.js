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

//Task 5


var items = document.getElementsByClassName('list-group-item');
items[1].style.backgroundcolor = 'green';
for(let i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}



var li = document.getElementsByTagName('li');
li[1].textContent = 'Hello 2';

for(var i=0; i<li.length; i++){
    li[i].style.backgroundcolor = '#f4f4f4';
}