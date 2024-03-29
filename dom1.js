var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit Event
form.addEventListener('submit', additem);

itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function additem(e) {
    e.preventDefault();

   var newItem = document.getElementById('item').value;
   
   var li = document.createElement('li');
   li.className = 'list-group-item';
   
   li.appendChild(document.createTextNode(newItem));

   var deleteBtn = document.createElement('button');

   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

   deleteBtn.appendChild(document.createTextNode('X'));

   li.appendChild(deleteBtn);

   itemList.appendChild(li);

   var editBtn = document.createElement('button');
   editBtn.className = 'btn btn-sm float-right edit';

   editBtn.appendChild(document.createTextNode('Edit'));
   li.appendChild(editbtn);
   itemList.appendChild(li);
    
}



function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    
    var destext = itemList.getElementsByTagName('textarea');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            Array.from(destext).forEach(function(item){
                var newName = item.firstChild.textContent;
                if(itemName.toLowerCase().indexOf(text) != -1){
                    item.style.display = 'block';
                }
                else{
                    item.style.display = 'none;'
                }
            })
        }
            
        
    });
}