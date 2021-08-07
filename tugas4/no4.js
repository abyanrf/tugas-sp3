

function goHome(){
    console.log("Halaman Home");
}
function backLogin(){
    console.log("Halaman Login");
}
const loginform = document.getElementById("loginForm");
const buttonLogin = document.getElementById("login-button");

buttonLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const emailForm = loginform.email.value;
    const passForm = loginform.password.value;
    if(emailForm == "admin@gmail.com" && passForm == "admin"){
        goHome();
    }else{
        backLogin()
    }
})