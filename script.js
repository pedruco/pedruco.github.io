let item = 0; 
const max = 15; 
const updateRate = 2000;

function proxImg(img){ 
    fetch('../imagens/'+img+'.jpg')
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob); 
            const proxImagem = document.createElement('img');
            proxImagem.src = imageObjectURL;
            document.getElementById('placeholder').appendChild(proxImagem);
        })
}

window.onload = setInterval( ()=>{
    if(item <= max){
        proxImg(item++ % (max+1));
        let scrollPoint = window.scrollY + window.innerHeight;
        window.scrollTo({top: scrollPoint, behavior: 'smooth'});
    } else{
        item = 0;
    }
}, updateRate);
