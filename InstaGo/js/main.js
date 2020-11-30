function comentario(name, text){
	this.nombre = name;
	this.texto=text;
}


const listaComentarios = [];

function agregarComentarioLista(comentario1){
	
	if(listaComentarios.length>3){
		listaComentarios.shift();
		listaComentarios.push(comentario1);
		// document.write("Primer if");
	}else{
		listaComentarios.push(comentario1);
		// document.write("Else");
	}
}


function mostrarComentarios(arregloComentarios, contador){
	// for(let step = 0; step < arregloComentarios.length; step++){
		
		var c1 = arregloComentarios[arregloComentarios.length-1];

		

		var parent=document.getElementById('divComentarios');

		var divC1 = document.createElement('div');
		divC1.setAttribute('id', 'comentario'+contador);

		var el_nombre=document.createElement('h5');
		var el_comentario=document.createElement('p');
		var separador=document.createElement('hr');

		var txt_name=document.createTextNode(c1.nombre);
		var txt_message=document.createTextNode(c1.texto );

		el_nombre.appendChild(txt_name);
		el_comentario.appendChild(txt_message);
		separador.style.border='1px solid #000';

		divC1.appendChild(el_nombre);
		divC1.appendChild(el_comentario);
		divC1.appendChild(separador);

		parent.appendChild(divC1);
		
		
		const arregloAuxiliar = [];
		arregloAuxiliar.push(divC1);

		
		if(contador>2){
			// parent.removeChild(document.getElementById('comentario'+(contador-cn)));
			
			parent.removeChild(parent.firstChild);
		}

		// for(let step = 0; step < arregloAuxiliar.length; step++){
		// 	if(step>4){
		// 		parent.removeChild(document.getElementById('comentario0'));
		// 	}
			

		// }

		


		// parent.appendChild(el_nombre);
		// parent.appendChild(el_comentario);
		// parent.appendChild(separador);
		// parent.setAttribute('class', 'pane');

		//document.write(" Posición: ", 0, " Nombre: ", arregloComentarios[0].nombre, " Comentario: ", arregloComentarios[0].texto);
	// }
	
	// document.write("Termino for");
	// document.write(arregloComentarios[2].nombre);
		
}


var contador = 0;

function agregarComentario(){
	
	var nombre=document.getElementById('name').value;
	var texto=document.getElementById('comment').value;
	
	
	const c1 = new comentario(nombre, texto);
	// document.getElementById('divComentarios').innerHTML=' '+c1.nombre;

	


	// // document.write(c1.nombre,c1.texto);
	agregarComentarioLista(c1);
	mostrarComentarios(listaComentarios, contador);
	contador++;

}

