// animação do nome na tela de apresentação

function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );

}

typeWriter(animacao_nome);


/* =======================================================*/


// Fazendo o menu lateral surgir

var btn = document.getElementById("menu_direita");


btn.addEventListener("click", function () {
    var menu = document.getElementById("menu_lateral")


    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "block";
    }



});


$(document).scroll(function () {
    var y = $(this).scrollTop();

    if (y > 800 && y < 10000)
        $('#menu_lateral').fadeIn();
    else
        $('#menu_lateral').fadeOut();
});