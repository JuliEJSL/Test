// Array to hold task
var tasks = []

// Task status 'enum
var taskStatus = {
    active:'active',
    completed:'completed'
};

// Task constructor function
function Task(id, name,status){
    this.id = id;
    this.name = name;
    this.status = status;
}

// Creates new task element and adds it to the DOM
function addTaskElement (task) {
    // creates elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var  textEl = document.createTextNode(task.name);

// set attributes
 taskEl.setAttribute('id',task.id);

 //add text to task element
 taskEl.appendChild(textEl);

 //add task element to list
 listEl.appendChild(taskEl);

}

// Click handler to add a new task

function addTask(event){
    var inputEl = document.getElementById('input-task');
    if(inputEl.value != ''){
        var id = 'item' + tasks.length;
    //Create a new task
    var task = new Task(id,inputEl.value, taskStatus.active);
    tasks.push(task);

    // Add task to DOM
    addTaskElement(task);

    // Reset input
    inputEl.value = ''
    }
}

//Click handler to complete task
function completeTask (event){
    // Get the task element
    var taskEl = event.target;
    var id = taskEl.id;
// Find corresponding task in the array and update status
for (var i =0, i< tasks.length; i++) {
    if(tasks[i].id === id){
        tasks[i].status = taskStatus.completed;
        break;
    }
}

// Move task element from active list to complete list
taskEl.remove();
document.getElementById('completed-list').appendChild(taskEl);
}

// Handler to automatically add task to list
function clickButton(event){
    if(event.keyCode === 13){
        document.getElementById('add-task').click();

    }
}

// Initializes app

function init (){
    document.getElementById('add-task').onclick = addTask;

    document.getElementById('active-list').onclick = completeTask;

    document.getElementById('input-task').onkeypress = clickButton;
}
init();
