var controllers = angular.module('myapp.controllers',[]);

controllers.controller('IndexController', ['$scope', function($scope){
	$scope.message = 'Marsette M. Thomas';
}]);

controllers.controller('AboutController', ['$scope', function($scope){
	$scope.message = 'Hello, I am the about page';
}]);

controllers.controller('NeedsController', ['$scope', function($scope){
	$scope.message = 'Is this working';
	$scope.needs=[];
}]);

controllers.controller('ProfessionalController', ['$scope', function($scope){
	$scope.message = 'come on';
	$scope.needs=[];
}]);

controllers.controller('PortfolioController', ['$scope', function($scope){
	$scope.message = 'does it work';
	$scope.needs=[];

	$scope.addNeeds=function(thingy){
		$scope.needs.push(thingy);
		$scope.newNeed="";
	};

}]);