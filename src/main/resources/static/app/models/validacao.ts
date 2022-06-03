export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}



const validadores = {
   // TestaCPF:input => TestaCPF(input),
    Required:input => Required(input)
}

function Required (input) {

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(event) {
   let valido = true

    const inputsObrigatorios = document.querySelectorAll('input[required]');
    inputsObrigatorios.forEach((inputObrigatorio:HTMLInputElement) => {
        if(!inputObrigatorio.value ) {
            inputObrigatorio.classList.add('is-invalid')
            valido = false;
        }
    });

    if(!valido) { 
        event.preventDefault();
    }
   
});

const inputsObrigatorios = document.querySelectorAll('input[required]');
inputsObrigatorios.forEach((inputObrigatorio:HTMLInputElement)  => {
    inputObrigatorio.addEventListener('blur', function() {
        if(!inputObrigatorio.value) {
            inputObrigatorio.classList.add('is-invalid');
            inputObrigatorio.classList.remove('is-valid');
        } else {
            inputObrigatorio.classList.remove('is-invalid');
            inputObrigatorio.classList.add('is-valid');
        }
    });
});

}

/*

function TestaCPF(input) {
    let mensagem = ''
if (!Cpf(input)) 
    {mensagem = 'CPF Inválidado'}

input.setCustomValidity(mensagem)

}

function Cpf (input) {
    var Soma;
    var Resto;
    Soma = 0;
    let mensagem = ''
    let i
  if (input == "00000000000") return false

  for (i=1; i<=9; i++) Soma = Soma + parseInt(input.toString().substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(input.toString().substring(9, 10)) ) return true

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(input.toString().substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(input.toString().substring(10, 11) ) ) return true
    return true
    
}

*/