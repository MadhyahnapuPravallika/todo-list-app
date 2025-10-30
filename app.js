var app = angular.module('todoApp', []);

app.controller('TodoController', function($scope) {
  $scope.tasks = [];

  $scope.addTask = function() {
    if ($scope.newTask) {
      $scope.tasks.push({ name: $scope.newTask, done: false });
      $scope.newTask = '';
    }
  };

  $scope.markDone = function(task) {
    task.done = !task.done;
  };

  $scope.deleteTask = function(index) {
    $scope.tasks.splice(index, 1);
  };
});
