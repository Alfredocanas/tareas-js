import { Todo, TodoList } from "../classes";
import { todoList } from "../index";

// Referencias HTML
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltors     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

// Crear HTML

export const crearTodoHtml = ( todo ) => {

    // String a ocupar 
    const htmlTodo = `
    <li class="${ (todo.completado)? 'completed' : '' }" data-id=${ todo.id }>
		<div class="view">
			<input class="toggle" type="checkbox" ${ (todo.completado)? 'checked' : '' }>
			<label>${ todo.tarea }</label>
			<button class="destroy"></button>
		</div>
		    <input class="edit" value="Create a TodoMVC template">
	</li>
    `

    // Crear elemento HTML
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}

// Crear Eventos

txtInput.addEventListener('keyup', (event) => {
    
    if( event.keyCode === 13 && txtInput.value.length > 0 ){

        console.log(txtInput.value);

        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
        
    }


})


divTodoList.addEventListener( 'click', ( event ) => {

    
    const nombreElemento    = event.target.localName; //input, label, button
    const todoElemento      = event.target.parentElement.parentElement; // obtiene elemento HTML <li
    const todoId            = todoElemento.getAttribute('data-id');

    if( nombreElemento.includes('input') ){ //click en el check
        
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');

    } else if( nombreElemento.includes('button') ){ // Borrar el Todo

        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );

    }
    
    // console.log( nombreElemento );
    // console.log( todoElemento );
    // console.log( todoId );
    // console.log( todoList );


});

btnBorrar.addEventListener('click', ()=>{

    // Accion Borrar
    todoList.eliminarCompletados();

    for( let i=divTodoList.children.length-1; i >= 0 ; i-- ){

        const elemento = divTodoList.children[i];

        if( elemento.classList.contains( 'completed' ) ){
            divTodoList.removeChild( elemento );
        }

        // console.log( elemento );



    }

})


ulFiltors.addEventListener('click', (event) => {

    const filtro = event.target.text;

    if( !filtro ){ return; }

    anchorFiltros.forEach( elem => elem.classList.remove('selected'));
    
    event.target.classList.add('selected');
    
    

    for( const elemento of divTodoList.children ){

        elemento.classList.remove('hidden');

        const completado = elemento.classList.contains( 'completed' );

        switch( filtro ){

            case 'Pendientes':
                if( completado ){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completado ){
                    elemento.classList.add('hidden');
                }
            break;

        }

    }


});