 
 
 export class TodoList {
 
    constructor() {

        // this.todos = [];
        this.cargarLocalStorage();
    }

    // Crear tarea pendiente
    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    // eliminar tarea
    eliminarTodo( id ){

        this.todos = this.todos.filter( todo => todo.id != id ) //callback => Genera un nuevo arreglo
        this.guardarLocalStorage(); // Guardar Memoria
    }

    // completar tarea
    marcarCompletado( id ){
 
        for( const todo of this.todos ){

            console.log( id, todo.id );

            if( todo.id == id ){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }


        }


    }

    // eliminar completado
    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos ) ); //String

    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todo') ) 
                        ? JSON.parse( localStorage.getItem('todo') )
                        : [];

    }

 }