function button_dodaj()
{
let zmienna_paragraf = document.getElementById("tekst");
document.getElementById("dodaj").onclick = function ()
{
    zmienna_paragraf.textContent = 'tekst ktory wyswietli sie po kliknieciu przycisku dodaj';
}

}


button_dodaj(document.getElementById("dodaj").onclick);



function button_usun()
{
let zmienna_paragraf = document.getElementById("tekst");
document.getElementById("usun").onclick = function ()
{
    zmienna_paragraf.textContent = ' ';
}

}


button_usun(document.getElementById("usun").onclick);