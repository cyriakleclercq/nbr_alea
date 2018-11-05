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


    choixOrdi = Math.round((Math.random() * 100) + 1);

    return choixOrdi;
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

function reset () {
    incrementation = 10;
    text.value = " ";
    nbr_vie.innerHTML = 10;


}



restart.addEventListener('click', function () {
    reset();

});


choixOrdi = calc_ordi();

bouton.addEventListener('click', function() {

    mon_choix = text.value;


    if (mon_choix == choixOrdi) {
        result.innerHTML= "you win";
        a ++;
        win.innerHTML = a;
        reset();

    }

    if (mon_choix < choixOrdi) {
        result.innerHTML="votre nombre est trop petit";
        decrem ();
    }

    if (mon_choix > choixOrdi) {
        result.innerHTML="votre nombre est trop grand";
        decrem ();
    }
    if ( nbr_vie == 0) {
        nbr_vie.innerHTML = 0;
    }

});
