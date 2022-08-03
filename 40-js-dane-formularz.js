function pobierz_dane()
{

document.getElementById("button").onclick = function ()
{

    let imie = document.getElementById("imie");
    let nazwisko = document.getElementById("nazwisko");
    let telefon = document.getElementById("telefon");

    imie.textContent = document.getElementById("name").value;
    nazwisko.textContent = document.getElementById("surname").value;
    telefon.textContent = document.getElementById("phone").value;
    
}
};
pobierz_dane();