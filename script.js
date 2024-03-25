let nav_continer = document.querySelector(".nav-all-list-conainer");
let toggle_btn = document.querySelector(".main-toggle-btn");
let toggle_icon = document.querySelector(".fa-bars");
// email validation
let User_name = document.querySelector(".name");
let email = document.querySelector(".email");
let subject = document.querySelector(".subject");

toggle_btn.addEventListener("click",()=>{
    nav_continer.classList.toggle("open_nav");
    toggle_icon.classList.toggle("fa-xmark");
});



// send email 
function sendemail(){
    Email.send({
        SecureToken: "185beda0-d645-48fa-95a9-5eb1def71580",
        To : 'mdnazmulhasan22323@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New email from my website",
        Body : "Name"+ document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Subject: " + document.getElementById("subject").value
                + "<br> Comment: " + document.getElementById("comment").value
                
    }).then(
      message => alert("Massage send successfuly")
    );
};
