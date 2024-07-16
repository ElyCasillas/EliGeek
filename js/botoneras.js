const btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click", (event)=>{
    event.preventDefault();
    location.href = "editar_productos.html"
});

const btnHogwarts = document.querySelector("#btnHogwarts");
btnHogwarts.addEventListener("click", (event)=>{
    event.preventDefault();
    document.getElementById("hogwarts_section").scrollIntoView();
});

