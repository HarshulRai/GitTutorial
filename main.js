function store() {
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    var name = localStorage.setItem("username", username);
    var emailID = localStorage.setItem("email", email);


}



