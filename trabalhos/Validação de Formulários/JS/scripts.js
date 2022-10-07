const nome = document.getElementById ('nome');
const nasc = document.getElementById ('nasc');
const cpf = document.getElementById ('cpf');
const tel = document.getElementById ('tel');
const email = document.getElementById ('email');
const senha = document.getElementById ('senha');
const term = document.getElementById('termos');

function validate(item){
    item.setCustomValidity('');     
    item.checkValidity();              

    if(item == cpf){ 
        let numcpf = cpf.value.replace(/[^0-9]/g, ""); 
        if(validateCPF(numcpf)) {
            item.setCustomValidity(''); 
        }else{
            item.setCustomValidity('CPF inválido.');
        }
    }

    if (item == nasc){
        let hoje = new Date();      
        let dnasc = new Date(nasc.value);
        let idade = hoje.getFullYear() - dnasc.getFullYear();
        let m = hoje.getMonth() - dnasc.getMonth();
        
        if (m < 0 || (m == 0 && hoje.getDate() < dnasc.getDate() )){
            idade--;
        }
        if(idade >= 0){
            if(idade < 18){
                item.setCustomValidity('Você precisa ser de maior.');
            }else if(idade > 130){
                item.setCustomValidity('Você não deve exagerar na sua idade.');
            }
        }else{
            item.setCustomValidity('Você ainda não nasceu.');
        }

    }
}

function validateCPF(cpf){  
    let number, digits, sum, i, result, equal_digits;
    equal_digits = 1;

    if (cpf.length < 11)
        return false;

    for (i = 0; i < cpf.length - 1; i++)

        if (cpf.charAt(i) != cpf.charAt(i + 1)){
            equal_digits = 0;
            break;
        }

    if (!equal_digits){
        number = cpf.substring(0,9);
        digits = cpf.substring(9);
        sum = 0;

        for (i = 10; i > 1; i--)
            sum += number.charAt(10 - i) * i;
            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
                                    
        if (result != digits.charAt(0))
            return false;
            number = cpf.substring(0,10);
            sum = 0;

        for (i = 11; i > 1; i--)
            sum += number.charAt(11 - i) * i;
            result = sum % 11 < 2 ? 0 : 11 - sum % 11;

        if (result != digits.charAt(1))
            return false;
        return true;
    }else
        return false;
}

function maskCPF(){
    let strCPF = cpf.value;
    if(strCPF.length == 3 || strCPF.length == 7) cpf.value += '.';
    if(strCPF.length == 11) cpf.value += '-';
    validate(cpf);
}

function maskTEL(){
    let strTEL = tel.value;
    if(strTEL.length == 2) tel.value = '(' + tel.value + ') ';
    if(strTEL.length == 9) tel.value += '-';
    if(strTEL.length == 15 && strTEL[9] == "-"){
        tel.value = strTEL.substring(0,9)+strTEL[10]+"-"+strTEL.substring(11);
}
}

nome.addEventListener   ('input', function(){validate(nome) });
nasc.addEventListener   ('input', function(){validate(nasc) }); 
term.addEventListener('load', function(){validate(term)});
senha.addEventListener('input', function(){validate(senha)});
cpf.addEventListener    ('input', maskCPF);
tel.addEventListener    ('input', maskTEL);

nome.addEventListener    ('invalid',  function(){
    if(nome.value === ''){
        nome.setCustomValidity("Seu nome não pode estar em branco.");
    }else{
        nome.setCustomValidity("Seu nome deve conter apenas letras e espaços.");  
    }
});

nasc.addEventListener('invalid', function(){
    if(nasc.value === ''){
        nasc.setCustomValidity('Insira sua data de nascimento.');
    }
});

cpf.addEventListener('invalid', function(){
    if(cpf.value === ''){
        cpf.setCustomValidity('Insira seu número de CPF.');
    }
});

tel.addEventListener    ('invalid', function(){
    if(tel.value === ''){
        tel.setCustomValidity("Insira seu número de telefone.");
    }else if(tel.value.length < 14){
        tel.setCustomValidity("Seu número de telefone deve conter pelo menos 10 dígitos com DDD.");
    }else{
        tel.setCustomValidity("");
    }
});

email.addEventListener('invalid', function(){
    if(email.value === ''){
        email.setCustomValidity("Insira seu endereço de email.");
    }else{
        email.setCustomValidity("");
    }
});

senha.addEventListener('invalid', function(){
    if(senha.value === ''){
        senha.setCustomValidity('Crie uma senha.');
    }else{
        senha.setCustomValidity('Sua senha deve conter no mínimo 8 caracteres, no máximo 12 caracteres, pelos menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (!@#$%^&*_=+-).');
    }
});

term.addEventListener('invalid', function(){
    term.setCustomValidity('Aceite os termos para concluir o cadastro.');
});

term.addEventListener('click', function(){
    term.setCustomValidity('');
});