var bouton = document.getElementById('bouton');
var result = document.getElementById('result');
var text = document.getElementById('text');
var win = document.getElementById('nbr_win');
var lose = document.getElementById('nbr_lose');
var restart = document.getElementById('restart');
var nbr_vie = document.getElementById('nbr_vie');
var incrementation = 10;
var mon_choix = 0;
var choixOrdi = 0;


a = 0;
b = 0;


function calc_ordi () {
    choixOrdi = Math.round((Math.random() * 99) + 1);
    return choixOrdi;
}


function reset () {
    incrementation = 10;
    text.value = " ";
    nbr_vie.innerHTML = 10;
}


function decrem () {
    incrementation--;
    nbr_vie.innerHTML = incrementation;
    if (incrementation === 0) {
        result.innerHTML = "LOSER";
        b++;
        lose.innerHTML = b;
    }
}



choixOrdi = calc_ordi();

bouton.addEventListener('click', function() {

    mon_choix = text.value;
    console.log(choixOrdi);

    if (mon_choix == choixOrdi) {
        result.innerHTML= "you win";
        result.style.color = "gold";
        a ++;
        win.innerHTML = a;
        reset();

    }

    if (mon_choix < choixOrdi) {
        result.innerHTML="votre nombre est trop petit";
        result.style.color = "orange";
        decrem ();
    }

    if (mon_choix > choixOrdi) {
        result.innerHTML="votre nombre est trop grand";
        result.style.color = "green";
        decrem ();
    }
    if ( nbr_vie == 0) {
        nbr_vie.innerHTML = 0;
    }

});

restart.addEventListener('click', function () {
    choixOrdi = calc_ordi();
    reset();
});