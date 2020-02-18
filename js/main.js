var numeroChilometri = prompt('Inserire Km da percorrere');
var etaPasseggero = prompt('Inserire età');

var prezzoKm = numeroChilometri * 0.21;
var prezzoVentiPerc = prezzoKm * 0.2;
var prezzoQuarantaPerc = prezzoKm * 0.4;
if (etaPasseggero < 18){
    document.getElementById('price').innerHTML = prezzoVentiPerc.toFixed(2);
} else if (etaPasseggero >=  65){
    document.getElementById('price').innerHTML = prezzoQuarantaPerc.toFixed(2);
} else {
    document.getElementById('price').innerHTML = prezzoKm;
}
