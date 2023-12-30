// cookie.js

document.addEventListener("DOMContentLoaded", function() {
    // Verifique se o usuário já tomou uma decisão sobre os cookies
    if (localStorage.getItem("decisaoCookies")) {
        document.getElementById("cookie-banner").style.display = "none";
    } else {
        document.getElementById("cookie-banner").style.display = "block";
    }

    // Adicione event listeners aos botões "Aceitar" e "Rejeitar"
    document.getElementById("aceitar-cookies").addEventListener("click", function() {
        tomarDecisaoCookies("aceitar");
    });

    document.getElementById("rejeitar-cookies").addEventListener("click", function() {
        tomarDecisaoCookies("rejeitar");
    });
});

function tomarDecisaoCookies(decisao) {
    document.getElementById("cookie-banner").style.display = "none";

    // Adicione código aqui para definir um valor no localStorage indicando a decisão do usuário sobre os cookies
    localStorage.setItem("decisaoCookies", decisao);
}
