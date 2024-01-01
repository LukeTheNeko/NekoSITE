document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("decisaoCookies")) {
        document.getElementById("cookie-banner").style.display = "none";
    } else {
        document.getElementById("cookie-banner").style.display = "block";
    }

    document.getElementById("aceitar-cookies").addEventListener("click", function() {
        tomarDecisaoCookies("aceitar");
    });

    document.getElementById("rejeitar-cookies").addEventListener("click", function() {
        tomarDecisaoCookies("rejeitar");
    });
});

function tomarDecisaoCookies(decisao) {
    document.getElementById("cookie-banner").style.display = "none";

    localStorage.setItem("decisaoCookies", decisao);
}