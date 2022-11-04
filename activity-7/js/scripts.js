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

