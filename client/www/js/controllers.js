angular.module('transcribe.controllers', [])

  .controller('AppCtrl', function ($scope) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.meetings = [
      {title: 'Yearly Review', time: 'Yesterday', id: "I83N"},
      {title: 'Daily Lunch', time: 'Tomorrow', id: "B3NE"},
      {title: 'Idea Brainstorm', time: 'Last night', id: "7hhC"},
      {title: 'Random Meeting', time: 'Random time', id: "X4f2"}];
  })

  .controller('RecordCtrl', function ($scope, $cordovaCapture, $ionicActionSheet) {

    $scope.captureAudio = function () {
      var options = { limit: 3, duration: 10 };

      $cordovaCapture.captureAudio(options).then(function (audioData) {
        // Success! Audio data is here
        $ionicActionSheet.show({buttonLabels: ['Success!']})
          .then(function (btnIndex) {
            var index = btnIndex;
            console.log(index);
          });
        audioData.size();
      }, function (err) {
        // An error occurred. Show a message to the user
        $ionicActionSheet.show({buttonLabels: [err]})
          .then(function (btnIndex) {
            var index = btnIndex;
            console.log(index);
          });
      });
    };
  })

  .controller('MeetingCtrl', function ($scope, $stateParams) {
    $scope.title = $stateParams.meetingId;
    $scope.user = {name: 'dennis', pic: 'http://i.imgur.com/N0HqWH0.jpg'};
    $scope.transcript = [{m: "Maecenas sed diam eget risus varius blandit sit amet non magna.", u: 'dennis'}, {m: "Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.", u: 'ray'}, {m: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue.", u: 'anne'}];
  });
