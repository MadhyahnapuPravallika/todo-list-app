// Define the AngularJS app
var app = angular.module("todoApp", []);

// Define the controller
app.controller("TodoController", function ($scope) {

  // List of tasks
  $scope.tasks = [];

  // Error message (for validation)
  $scope.errorMsg = "";

  // Add new task
  $scope.addTask = function () {
    if (!$scope.newTask || $scope.newTask.trim() === "") {
      $scope.errorMsg = " Please enter a task!";
      return;
    }

    // Check for duplicate task
    let exists = $scope.tasks.some(t => t.name.toLowerCase() === $scope.newTask.toLowerCase());
    if (exists) {
      $scope.errorMsg = " Task already exists!";
      return;
    }

    // Add the new task
    $scope.tasks.push({ name: $scope.newTask, done: false, editing: false });
    $scope.newTask = "";
    $scope.errorMsg = ""; // Clear error
  };

  // Mark task as done
  $scope.markDone = function (task) {
    task.done = !task.done;
  };

  // Edit a task
  $scope.editTask = function (task) {
    task.editing = true;
  };

  // Save the edited task
  $scope.saveTask = function (task) {
    if (!task.name || task.name.trim() === "") {
      $scope.errorMsg = " Task name cannot be empty!";
      return;
    }
    task.editing = false;
    $scope.errorMsg = "";
  };

  // Delete a task
  $scope.deleteTask = function (index) {
    $scope.tasks.splice(index, 1);
  };

});
