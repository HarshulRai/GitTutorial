windows.onload = function() {
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

    function userOnScreen(user) {
        const parentNode = document.getElementById('listofusers');
        const childHTML = `<li> ${user.username} -${user.email} </li>`
    
        parentNode.innerHTML = childHTML;
    }
}


function userOnScreen(user) {
    const parentNode = document.getElementById('listofusers');
    const childHTML = `<li> ${user.username} -${user.email} </li>`

    parentNode.innerHTML = childHTML;
}

window.onbeforeunload = function() {
    localStorage.setItem('username', $('#name').val());
    localStorage.setItem('email', $('#email').val());
}





