
var btn=document.getElementById('bouton');


btn.addEventListener('click', function (e) {
    
    var ed=document.getElementById('lvalue');
    const valeur =ed.value*ed.value;
        alert(valeur);
     

    })

btn.addEventListener('error', function (e) {
        alert('Une erreur est survenue dans votre calcul : ' + e.message);
    })