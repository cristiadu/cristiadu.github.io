var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('skillsController',['$scope','$http',function($scope,$http){
	$http.get('json/skills.json').success(function(data){
		$scope.skills = data;
	});
}]);

portfolioApp.controller('projectsController',['$scope','$http','$sce',function($scope,$http,$sce){
	$http.get('json/projects.json').success(function(data){
		$scope.projects = data;
	});

	$scope.renderHtml = function(html_code)
	{
	    return $sce.trustAsHtml(html_code);
	};

}]);