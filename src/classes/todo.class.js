export class Todo {

   constructor( tarea ) {
       this.tarea   = tarea;
       
       // cuando cree una tarea automaticamente me va crear lo siguiente:
       this.id          = new Date().getTime(); // 3226626262
       this.completado  = false;
       this.creado      = new Date();
   }
}