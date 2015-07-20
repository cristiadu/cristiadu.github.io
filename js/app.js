var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('skillsController',['$scope','$http',function($scope,$http){
	$http.get('json/skills.json').success(function(data){
		$scope.skills = data;
	});
}]);

portfolioApp.controller('projectsController',['$scope','$http',function($scope,$http){
	$http.get('json/projects.json').success(function(data){
		$scope.projects = data;
		$scope.projects.descriptionHTML = $sce.trustAsHtml($scope.projects.descriptionHTML);
	});
}]);