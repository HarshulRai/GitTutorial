function store() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    var name = localStorage.setItem("username", username);
    var emailID = localStorage.setItem("email", email);

    const obj = {
        username: username,
        email: email

    }

    let obj_string = JSON.stringify(obj);
    localStorage.setItem('userDetails', obj_string);

    console.log(JSON.parse(obj_string));

}




