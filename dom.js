// // console.log(document.URL);
// // console.log(document.title);
// // document.title = '123';
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.all);

// // console.log(document.forms);
// // console.log(document.images);

// // console.log(document.getElementById('header-title'));
// // var headertitle = document.getElementById('header-title');
// // console.log(headertitle);

// // headertitle.textContent = 'Hello';
// // headertitle.innerText = 'Goodbye';
// // headertitle.style.borderBottom = 'solid 3px #000';

// // var additems = document.getElementById('add-items');
// // additems.style.color = 'green';
// // additems.style.fontWeight = 'bold';

// // //Task 5


// // var items = document.getElementsByClassName('list-group-item');
// // items[1].style.backgroundcolor = 'green';
// // for(let i=0; i<items.length; i++){
// //     items[i].style.fontWeight = 'bold';
// // }



// // var li = document.getElementsByTagName('li');
// // li[1].textContent = 'Hello 2';

// // for(var i=0; i<li.length; i++){
// //     li[i].style.backgroundcolor = '#f4f4f4';
// // }

// //Task 6

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastitem = document.querySelector('.list-group-item:last-child');
// item.style.color = 'blue';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color = 'green';

// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.visibility = 'hidden';

// var new = document.querySelectorAll('li:nth=child(2)');
// new.style.color = 'green';

// var odd = document.querySelectorAll('li:nth=child(odd)');

// for(var i=0; i<odd.length; i++){
//     odd.style.backgroundcolor = 'green';
// }

var itemList = document.querySelector('#items');

console.log(itemList.parentNode);

itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#c4fcf4';
console.log(itemList.parentElement.parentElement);


console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

console.log(itemlist.firstChild);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 4';

console.log(itemList.lastChild);
itemList.lastElementChild.textContent = 'Hello 7';

console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);
console.log(itemList.nextSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'purple';

var newDiv = document.createElement('div');
console.log(newDiv);

newDiv.className = 'hello';
newDiv.id = 'hello2';
newDiv.setAttribute('title', 'hello div');\

var newDivText = document.createTextNode('Hello Jai');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.lof(newDiv);
newDiv.style.fontSize = '34px';

container.insertBefore(newDiv, h1);