var mod = angular.module("todoApp", []);
mod.controller("TodoCtrl", todoCtrl);

function todoCtrl(){
    this.editMode = false;
    this.Todos = [        
            "Learn JavaScript",
            "Learn AngularJS",
            "Learn Restful Web Services",
            "Learn Spring"    
    ];
// This change is just for exploring Git Hub
    this.addNewTodo = function(){
        this.Todos.push(this.newTodo);
        this.newTodo = "";
    }

this.triggerEditMode = function(){
    this.editMode = !this.editMode;
}

this.deleteTodo = function(index){
    this.Todos.splice(index, 1);
}

}

