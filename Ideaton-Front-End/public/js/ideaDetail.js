
var app = angular.module('ideaton', [ "ngResource", 'ngSanitize' ]);
var apiUrl = 'http://200.29.32.194:8282/ideaton/idea';
//Cabecera por default a enviar a la API
var jsonHeader = {headers: {'Content-Type': 'application/json'}};

app.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
});

app.controller('IdeaDetailController', [ '$scope', '$http', '$location', '$sce',
 function($scope, $http, $location, $sce) {
   $scope.getIdeaDetail = function() {
	//console.log("ID_http -> "+$http.search().id);
	console.log("ID -> "+$location.search().id);
	var url = apiUrl+"/"+$location.search().id;
	$http.get(url).success(function(data) {
		$scope.msg = 'Idea encontrada';
		console.log("Success: ");
		console.log(data);
		if(null != data.video){
			if(null != data.video.link){
				var url = data.video.link;
				url = url.replace("watch?v=", "embed/");
				data.video.link = url;
			}
		}
		$scope.detalleIdea = data;
     	}).error(function(data) {
       		console.log("Error: ");
		console.log(data);
	       $scope.msg = 'Se ha producido un error o idea no encontrada';
	});
   }
   
   $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

} ]);
