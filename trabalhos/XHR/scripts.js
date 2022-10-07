let item = 0; 
const max = 9; 
const updateRate = 2000; 

function proxImagem( img ){ 
    fetch('./img/'+img+".jpg")
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob); 
            console.log(imageObjectURL); 
            const proxImagem = document.createElement("img");
            proxImg.src = imageObjectURL;
            document.getElementById("placeholder").appendChild(proxImagem);
        })
};                                                                                  

window.onload = setInterval( ()=>{
    if(item <= max){
        proxImagem(item++ % (max+1));
        let scrollPoint = window.scrollY + window.innerHeight;
        window.scrollTo({top: scrollPoint, behavior: 'smooth'});
    } else{
        item = 0;
    }
}, updateRate);
