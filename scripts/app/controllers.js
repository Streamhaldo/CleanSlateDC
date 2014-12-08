var cleanSlateApp = angular.module('cleanSlateApp', []);

cleanSlateApp.controller('QuestionCtrl', function ($scope) {
    $scope.questions =
        [
            { id: 1, question: 'Are you under 18?', answers: [{ id: 1, text: 'Yes' }, { id: 2, text: 'No' }] },
            { id: 2, question: 'Are you currenlty living in DC?', answers: [{ id: 3, text: 'Yes' }, { id: 4, text: 'No' }] },
            { id: 3, question: 'Were you convicted as a juvenile?', answers: [{ id: 5, text: 'Yes' }, { id: 6, text: 'No' }] },
            { id: 4, question: 'Do you have any pending charges?', answers: [{ id: 7, text: 'Yes' }, { id: 8, text: 'No' }] }
        ];

    var x = 0;
    $scope.selectedQuestion = $scope.questions[x];

    $scope.submitAnswer = function(answer){
        x = x + 1;
        $scope.selectedQuestion = $scope.questions[x];
    };
});