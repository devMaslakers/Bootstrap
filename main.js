class stringi {
    constructor(i) {
        this.index = i;
    }
    zmienIndex(i) {
        this.index = i;
    }


    length(input) { return input.length; }
    charAt(input, param) { return input.charAt(param) }
    charCodeAt(input, param) { return input.charCodeAt(param) }
    upperCase(input) { return input.toUpperCase() }
    lowerCase(input) { return input.toLowerCase() }
    indexOf(input, param) { return input.indexOf(param) }
    lastIndexOf(input, param) { return input.lastIndexOf(param) }
    substr(input, param1, param2) { return input.substr(param1, param2) } 
    substring(input, param1, param2) { return input.substring(param1, param2) }
    slice(input, param1, param2) { return input.slice(param1, param2) }
    replace(input, param1, param2) { return input.replace(param1, param2) }

}

const tablicaOpisow = new Array(
    "Wyświetla długosc stringa/ &lt;output&gt; = text.length;",
    "Wyświetla jaki znak znajduje sie w wybranym indeksie Do parametru należy wpisać liczbę/ &lt;output&gt; = text.charAt(index);",
    "Wyświetla (liczbowo v ASCII) jaki znak znajduje się w wybranym indeksie Do parametru należy wpisać liczbę/ &lt;output&gt; = text.charCodeAt(index);",
    "Zmienia wszystkie litery w kapitały/ &lt;output&gt; = text.toUpperCase();",
    "Zmienia wszystkie litery w małe/ &lt;output&gt; = text.toLowerCase();",
    "Pokazuje indeks wskazanej litery lub wyrazu (pierwszej od lewej)/ &lt;output&gt; = text.indexOf(index);",
    "Pokazuje indeks wskazanej litery lub wyrazu (ostatniej od lewej). Bez parametru ukazuje długość/ &lt;output&gt; = text.lastIndexOf(index);",
    "Wyświetla wyraz. Wyznaczany on jest za pomocą start (indeks startowy) i length (dlugość tego wyrazu)/ &lt;output&gt; = text.substr(start[, length])",
    "Wyświetla wyraz. Wyznaczony on jest za pomocą start (indexA) i end (indexB)/ &lt;output&gt; = text.substring(indexA[, indexB])",
    "Rozdziela tekst na 2 części, jeśli endSlice jest dodatni, bierze wycinek, jeśli ujemny, wycina wyznaczony obszar i bierze reszte./ &lt;output&gt; = text.slice(beginSlice[, endSlice]) ",
    "Podmienia wybrany indeks lub część wyrazu, na wskazaną przez użytkownika/ &lt;output&gt; = text.replace( TEXT_1, TEXT_2) "
) 

const menedzer = new stringi(0);
const input = document.querySelector("#userInput");
const parameter = document.querySelector("#userParameters");
const info = document.querySelector("#userInformator");
const output = document.querySelector("#userOutput");
const code = document.querySelector("#userCode");


const wybor = document.querySelectorAll("select");
wybor.addEventListener('change', wykonajZmiane);


input.addEventListener('keydown', wyswietlWartosc);
parameter.addEventListener('keydown', wyswietlWartosc);

window.onload = function() {
     wykonajZmiane();
}


function wykonajZmiane() {
    console.log("test");
    const wybor = parseInt(wybory[0].parentElement.selectedIndex);
    menedzer.zmienIndex(wybor);

    const codeText = tablicaOpisow[wybor].split('/')[0];
    const infoText = tablicaOpisow[wybor].split('/')[1];

    switch(wybor) {
        case 0:
        case 3:
        case 4:
        parameter.parentElement.style.display = "none"; break;
        default: parameter.parentElement.style.display = "flex"; break;   
    }

    info.innerHTML = codeText;
    code.innerHTML = infoText;

    wyswietlWartosc();
}

function wyswietlWartosc() {
    const x = setTimeout(()=> {
        const inputText = input.value;
        const parameterText = parameter.value;

        const textZwrotny = wytworzTekst(inputText, parameterText);
        
        output.value = textZwrotny;

    },10);
}

function wytworzTekst(inputText, parameterText) {
    const param1 = parameterText.split(',')[0];
    const param2 = parameterText.split(',')[1];

    switch(menedzer.index) {
        case 0: return menedzer.length(inputText);
        case 1: return menedzer.charAt(inputText, parameterText);
        case 2: return menedzer.charCodeAt(inputText, parameterText);
        case 3: return menedzer.upperCase(inputText);
        case 4: return menedzer.lowerCase(inputText);
        case 5: return menedzer.indexOf(inputText, parameterText);
        case 6: return menedzer.lastIndexOf(inputText, parameterText);
        case 7: return menedzer.substr(inputText, param1, param2);
        case 8: return menedzer.substring(inputText, param1, param2);
        case 9: return menedzer.slice(inputText, param1, param2);
        case 10: return menedzer.replace(inputText, param1, param2);
    }
}
