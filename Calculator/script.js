// Todo: Make M+ M- and MC functional
let str = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == '='){
            str = eval(str)
        }
        else if(e.target.innerHTML == 'AC'){
            str = ''
        }
        else if(e.target.innerHTML == 'C'){
            str.toString()
            str = str.slice(0,str.length - 1)
        }
        else{
            console. log(e.target)
            str = str + e.target.innerHTML;
        }
        document.querySelector('input').value = str;
    });
});
