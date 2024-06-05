document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // event form tareas
    todoForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const tarea = todoInput.value.trim();
        if (tarea !== '') {
            agregarTarea(tarea);
            todoInput.value = '';
        }
    });
    function agregarTarea(tareaTexto) {
        const tareaItem = document.createElement('li');
        tareaItem.textContent = tareaTexto;
        tareaItem.addEventListener('click', function () {
            tareaItem.classList.toggle('completed');
            actualizarTareasLocalStorage();
        });
        tareaItem.addEventListener('contextmenu', function (event) {
            event.preventDefault(); 
            tareaItem.remove();
            actualizarTareasLocalStorage();
        });
        todoList.appendChild(tareaItem);
        actualizarTareasLocalStorage();
    }


    // actu
    function actualizarTareasLocalStorage() {
        const tareas = [];
        document.querySelectorAll('li').forEach(function (tareaItem) {
            tareas.push(tareaItem.textContent);
        });
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }
});