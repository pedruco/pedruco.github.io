let item = 0; 
let item2 = 0;
const max = 1; 

function conteudo(){	
	fetch('https://pedruco.github.io/trabalhos.html')
		.then(function (response) {
		    return response.text();
		})
		.then(function (result) {
		    console.log(result);
			if(item < max){			
				const newRow = document.createElement('div')
				newRow.innerHTML = `
				<div>${result}</div>
			`
			document.getElementById('placeholder-Trabalhos').appendChild(newRow)
			item++
			}
		})

		fetch('https://pedruco.github.io/creditos.html')
		.then(function (response) {
		    return response.text();
		})
		.then(function (result) {
		    console.log(result);
			if(item2 < max){			
				const newRow = document.createElement('div')
				newRow.innerHTML = `
				<div>${result}</div>
			`
			document.getElementById('placeholder-Creditos').appendChild(newRow)
			item2++
			}
		});
	
}


