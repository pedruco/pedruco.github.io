function calctab(ntab){
    let tabuada = '<table>';
    for(let multi = 1; multi <=9;  multi++){
        tabuada = tabuada + ('<tr><td>'+ntab+'</td><td>x</td><td>'+multi+'</td><td>=</td><td>'+ntab*multi+'</td></tr>');

    }
    return tabuada + '</table>';

}

function divtab(ntab){
    let tabdiv = document.createElement('div');
    tabdiv.className = 'result-tab';
    tabdiv.id = 'result-tab-'+ntab;
    tabdiv.innerHTML = calctab(ntab);

    document.getElementById('result-wrapper').appendChild(tabdiv); 

}

function cria1tab(){
    document.getElementById('result-wrapper').innerHTML ="";
    let ntab = document.getElementById('valor-tabuada').value;
    divtab(ntab);

}

document.getElementById('cria-tab').addEventListener('click', cria1tab)


function seleciona( aba ){
    let lista = document.getElementsByClassName('wrapper');
    for (let i = 0; i < lista.length ; i++){
        document.getElementById('wrapper-' + i).style.display ='none';
        //document.getElementById('btn-' + i).style.background ='#transparent';
        document.getElementById('btn-' + i).classList.remove('ativa');
    }
    document.getElementById('wrapper-' + aba).style.display ='grid';
    //document.getElementById('btn-' + aba).style.background ='#eee';
    document.getElementById('btn-' + aba).classList.add('ativa');
}

window.onload = seleciona(0);

document.getElementById('btn-0').addEventListener('click', function(){seleciona(0)});
document.getElementById('btn-1').addEventListener('click', function(){seleciona(1)});
document.getElementById('btn-2').addEventListener('click', function(){seleciona(2)});

const typeEl = document.querySelector('#type');



const calcular_bissexto = (ano) =>
(ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0
? 'É bissexto'
: 'Não é bissexto';

function calcularBissexto() {
  let date_full = new Date(document.form_main.date.value);
  let date_year = date_full.getFullYear();

  typeEl.innerText = calcular_bissexto(date_year);
 
}