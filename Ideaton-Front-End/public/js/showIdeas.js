
var app = angular.module('ideaton', [ "ngResource" ]);
var apiUrl = 'http://200.29.32.194:8282/ideaton/idea';
//Cabecera por default a enviar a la API
var jsonHeader = {headers: {'Content-Type': 'application/json'}};

app.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
});

app.controller('ShowIdeasController', [ '$scope', '$http',

 function($scope, $http) {
   $scope.getIdeas = function() {
     $http.get(apiUrl).success(function(data) {
       $scope.ideas = data;
     });
   }
/*
   $scope.addIdea = function() {
     var timeStamp = new Date().getTime();

     //estructura para crear la idea Base
     idea = {
       category: $scope.category,
       title: $scope.title,
       description: $scope.description
     }

     console.log(idea);

     $http.post(apiUrl, idea, jsonHeader).success(function(data) {
       //agregar el video a la idea
       var videoURL = apiUrl + "/video/"+data.id; //data.id almacena el identificador de la idea recién almacenada.
       var video = {link: $scope.video}; //variable que almacena la estructura de video

       $http.post(videoURL, video, jsonHeader).success(function(data) {
         console.log("Video agregado correctamente a idea " + data.id);
       });

       $scope.msg = 'Idea creada correctamente';
     }).error(function(data) {
       $scope.msg = 'Se ha producido un error';
     });
   }*/
} ]);
