var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function init() 
{
    var storeTodos= JSON.parse(localStorage.getItem('todos'));
    if (storedTodos)
    {
        todos = storedTodos
    }
    renderTodos()
}

function updateTodos()
{
    localStorage.setItem('todos', JSON.stringify(todos))
}
function renderTodos()
{
    todoList.textContent = ''
    todoCountSpan.textContent = todos.length;
    for (var i=0; i < todos.length; i++)
    {
        var todo = todos[i];
        var li = document.createElement('li');
        li.textContent = todo;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent="Complete";

        li.appendChild(button);
        todoList.appendChild(li);
    }

}

renderTodos()

todoForm.addEventListener('submit', function(event)
{
    event.preventDefault();

    var todoText = todoInput.value.trim();
    todos.push(todoInput.value);
    todoInput.value = "";

    if (todoText === "")
    {
        return;
    }
    
    updateTodos();
    renderTodos();
});

todoList.addEventListener('click', function(event)
{
    if (event.target.matches('button'))
    {
        var index = event.target.parentElement.getAttribute('data-index');
        todos.splice(index, 1);
        updateTodos();
        renderTodos();
    }
});
