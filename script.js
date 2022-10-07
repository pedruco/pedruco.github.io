let img = 0; 
const max = 80; 
const uptadeRate = 2000; 

function proxImagem( img ){ 
    fetch('img/'+img+".jpg")
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob); 
            console.log(imageObjectURL); 
            const proxImg = document.createElement("img");
            proxImg.src = imageObjectURL;
            document.getElementById("placeholder").appendChild(proxImg);
        })
};                                                                                  
window.onload = setInterval(function(){
    proxImagem( img++ % (max + 1));
    let  scrolloint = window.scrollY + window.innerHeight;
    window.scrollTo({top: scrollPoint, behavior: 'smooth'});
}, uptadeRate);

window.onload = function(){
	for(img = 0; img < 5; img++){
		proxImagem( img );
	}
};