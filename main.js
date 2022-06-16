
//zadanie 23
let firstName = 'Slawek';
let lastName = 'Tocki';

//zadanie 24
let zmienna = "Uwielbiam Java Script";
console.log(zmienna);

//zadanie 25

let tablica = [1,3,5,7,9];
console.log(tablica);

//zadanie 26
let zmienna_1 = 20;
let zmienna_2 = 30;
let zmienna_3 = 40;

let tablica_2 = [zmienna_1, zmienna_2, zmienna_3];
console.log(tablica_2);

//zadanie 27
alert('Skrypt działa prawidłowo');

//zadanie 28

let dowolna_zmienna = 12;

if (dowolna_zmienna > 10) {
    console.log('Podana liczba jest większa niż 10')
} else {
    console.log('Podana liczba nie jest większa niż 10')
}

//zadanie 29

let firstNumber = 15;
let secondNumber = 25;

function dodawanie(skladnik_1, skladnik_2)
{
    let suma = skladnik_1 + skladnik_2;
    return suma;
}

console.log(dodawanie(firstNumber, secondNumber));

//zadanie 30

let paragraf_text = document.querySelector('p');
paragraf_text.textContent ='dowolny tekst umieszczony w paragrafie';

//zadanie 31

let button = document.querySelector('button');
document.querySelector('button').onclick = function ()
{
    alert('Klik działa');
}

//zadanie 32

let num1 = 2;
let num2 = 5;

function wieksza_liczba(parametr_1, parametr_2)
{
    parametr_1 = num1;
    parametr_2 = num2;
    let suma = num1 + num2;
    let wieksza = suma + 10;
    return wieksza;
}

console.log(wieksza_liczba());

//zadanie 33 

let zmienna_paragraf = document.getElementById("opis");

document.getElementById('button2').onclick = function ()
{
    zmienna_paragraf.textContent = 'jakiś tekst umieszczony w paragrafie o id = opis'
}

//zadanie 34

let string_1 = "Uwielbiam JavaScript";
let string_2 = " Jestem świetnym programistą";

function dluzszy_string(string1, string2)
{
    let tekst_stringa = string1 + string2 + ' i napisałem funkcję';
    console.log(tekst_stringa);
    return tekst_stringa;
    
}

dluzszy_string(string_1, string_2);

//zadanie 35

function liczba_n(n)
{
    if (n>=100 && n<=200)
    {
    console.log('Liczba znajduje się w przedziale');
    }
    else
    console.log('Liczba nie znajduje się w przedziale');
    
}

liczba_n(202);

//zadanie 36

function dwie_liczby(liczba1, liczba2)
{
    let warunek = false;
    if  ((liczba1 == 20) || (liczba1 + liczba2 <= 20)  || (liczba2 == 20))
    
    {
     warunek = true;
    }
    console.log(warunek);
    return warunek;
    
}

dwie_liczby(22,2);


//zadanie 38

function kalkulator(a,b)
{
    let sumaa = a + b;
    let roznica = a - b;
    let iloczyn = a * b;

    if (sumaa >= 0)
    {
    console.log("Wynik dodawania wynosi", sumaa);
    }
    else
    {
    console.log("Wynik jest nieprawidłowy");
    }

    if (roznica >= 0)
    {
    console.log("Wynik dodawania wynosi", roznica);
    }
    else
    {
    console.log("Wynik jest nieprawidłowy");
    }

    if (iloczyn >= 0)
    {
    console.log("Wynik dodawania wynosi", iloczyn);
    }
    else
    {
    console.log("Wynik jest nieprawidłowy");
    }
}

kalkulator(-7,5);

//zadanie 39

let zmienna_tablica = [20,3,4,5,6];

function element_tablicy(tab)
{
    console.log(tab[0]);
    return tab[0];
}

element_tablicy(zmienna_tablica);

