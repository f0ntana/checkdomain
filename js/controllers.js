var checkdomain = angular.module('checkdomain.controllers', [])

checkdomain.controller('HomeCtrl', function($scope, $ionicPopup, $http) {
    $scope.dataDomain = {
        domain: "",
        extension: "com.br"
    };

    $scope.showResult = false;

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
                    console.log(response);
                    if (response.message != "" && response.message != null) {
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
});

checkdomain.controller('AboutCtrl', function($scope) {});