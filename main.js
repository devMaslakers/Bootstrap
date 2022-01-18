const przyciski = document.querySelectorAll(".przyciski button");
przyciski.forEach( przycisk => {
    przycisk.addEventListener('click', wykonajSprawdzenie);
})

function wykonajSprawdzenie() {
    
    const input = document.querySelector(".input");
    const output = document.querySelector(".output");
    const parametr = document.querySelector(".parametr");

    const wybor = this.innerHTML;

    let wynik = input.value;
    let param = parametr.value;

    switch(wybor) {
        case "length": output.value = wynik.length; parametr.value = "";
        break;

        case "charAt": output.value = wynik.charAt(param - 1);  
        break;

        case "charCodeAt": output.value = wynik.charCodeAt(param - 1);
        break;
        
        case "toUpperCase": output.value = wynik.toUpperCase(); parametr.value = "";
        break;

        case "indexOf": output.value = wynik.indexOf(param);
        break;

        case "lastIndexOf": output.value = wynik.lastIndexOf(param);
        break;

        case "substr": {
            let newParam = param.split(',');
            for(let i = 0; i < newParam.length; i++)
                if(isNaN(newParam[i]) )
                    newParam[i] = parseInt( wynik.indexOf(newParam[i]) );
                else
                    newParam[i] -= 1;

             output.value = wynik.substr(newParam[0], newParam[1]);

        }break;

        case "substring": {
            let newParam = param.split(',');
            for(let i = 0; i < newParam.length; i++)
                if(isNaN(newParam[i]) )
                    newParam[i] = parseInt( wynik.indexOf(newParam[i]) );
                else
                    newParam[i] -= 1;

            output.value = wynik.substring(newParam[0], newParam[1]);
        }break;

        case "slice": {
            let newParam = param.split(',');
            for(let i = 0; i < newParam.length; i++)
                if(isNaN(newParam[i]) )
                    newParam[i] = parseInt( wynik.indexOf(newParam[i]) );
                else
                    newParam[i] -= 1;

            output.value = wynik.substring(newParam[0], newParam[1]);
        }break;

        case "replace": {
            let newParam = param.split(',');

            output.value = wynik.replace(newParam[0], newParam[1])
        }break; 
    }
}