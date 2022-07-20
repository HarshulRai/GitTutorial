
    function store(event) {
        event.preventDefault();
        const username = event.target.name.value;
        const email = event.target.email.value;
        
        // var name = localStorage.setItem("username", username);
        // var emailID = localStorage.setItem("email", email);
    
        const obj = {
            username: username,
            email: email
    
        }
    
        
        // localStorage.setItem('userDetails', obj_string);
    
         localStorage.setItem(obj.email, JSON.stringify(obj));
         userOnScreen(obj)   
    
    }

    window.addEventListener("DOMContentLoaded", () => {
        const localStorageObj = localStorage;
        const localstoragekeys  = Object.keys(localStorageObj)

        for(var i =0; i< localstoragekeys.length; i++){
            const key = localstoragekeys[i]
            const userDetailsString = localStorageObj[key];
            const userDetailsObj = JSON.parse(userDetailsString);
            userOnScreen(userDetailsObj)
        }
    })

    



function userOnScreen(user) {
    
    const parentNode = document.getElementById('listofusers');
    const childHTML = `<li id=${user.email}> ${user.username} -${user.email}
    <button onlclick ="deleteUser('${user.email})" > Delete User </button>
    <button onclick=editUserDetails('${user.email}','${user.name}')>Edit User </button>
    </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserDetails(email, name) {
    document.getElementById('email').value = email;
    document.getElementById('name').value = name;

    deleteUser(email);
}

function deleteUser(email) {
    localStorage.removeItem(email);
    removeFromScreen(email);
}

function removeFromScreen(email) {
    const parentNode = document.getElementById('listofusers');
    const childNodeToBeDeleted = document.getElementById(email);
    if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted);
    }
}







