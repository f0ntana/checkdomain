var checkdomain = angular.module('checkdomain.controllers', [])

checkdomain.controller('HomeCtrl', function($scope, $ionicPopup) {
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

        }
    }
});

checkdomain.controller('AboutCtrl', function($scope) {
});