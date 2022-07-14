let input = document.querySelector('#fnun')
let num = document.querySelector('#fnun')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores  = []

document.addEventListener('keypress', function(e) {
    if(e.key == 'Enter') {
        let btn = document.querySelector('#submit');

        btn.click();
    }
});

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }

}

function adcionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado.`
        lista.appendChild(item)
        res.innerHTML =  ' '
    }else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus();
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adcione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        for(let i in valores){
            if(valores[i] > maior){
                maior = valores[i]
            }
            if(valores[i] < menor){
                menor = valores[i]
            }
        }

        res.innerHTML = ' '
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    }
}

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({ target }) => {
    
    if(target.value == ''){
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }

}

input.addEventListener('focus', handleFocus);
input.addEventListener('focusout', handleFocusOut);


 