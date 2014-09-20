var checkdomain = angular.module('checkdomain.controllers', [])

checkdomain.controller('HomeCtrl', function($scope, $ionicPopup, $http) {
    $scope.dataDomain = {
        domain: "",
        extension: "com.br"
    };

    $scope.showResult = false;
    $scope.showRegister = false;

    $scope.searchDomain = function() {
        if ($scope.dataDomain.domain == "") {
            $ionicPopup.alert({
                title: 'Aviso',
                content: 'Informe um domínio!'
            });
        } else {
            $http
                .post('http://cryptic-peak-3065.herokuapp.com', $scope.dataDomain)
                .success(function(response) {
                    if (response.message != "" && response.message != null) {
                    	$scope.showRegister = false;

                    	if(response.data.status == 0 || response.data.status == 1)
                    		$scope.showRegister = true;

                        $scope.fulldomain = response.data.fqdn;
                        $scope.message = response.message;
                        $scope.showResult = true;
                    } else {
                        $ionicPopup.alert({
                            title: 'Aviso',
                            content: 'Erro ao pesquisar domínio, tente novamente mais tarde!'
                        });
                    }
                });
        }
    }

    $scope.registerDomain = function(fulldomain)
    {
    	window.open('https://registro.br/cgi-bin/nicbr/documento?fqdn='+ fulldomain, '_blank', 'location=no');
    }
});

checkdomain.controller('AboutCtrl', function($scope) {
	$scope.openSite = function()
    {
    	window.open('http://www.devria.com.br', '_blank', 'location=no');
    }
});