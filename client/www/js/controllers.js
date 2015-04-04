angular.module('transcribe.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.meetings = [
    {title: 'Yearly Review', time: 'Yesterday', id:"I83N"},
    {title: 'Daily Lunch', time: 'Tomorrow', id:"B3NE"},
    {title: 'Idea Brainstorm', time: 'Last night', id:"7hhC"},
    {title: 'Random Meeting', time: 'Random time', id:"X4f2"}];

  $scope.record = function() {

  }
})

.controller('RecordCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('MeetingCtrl', function($scope, $stateParams) {
    $scope.title = $stateParams.meetingId;
    $scope.user = {name: 'dennis', pic: 'http://i.imgur.com/N0HqWH0.jpg'};
    $scope.transcript = [{m:"Maecenas sed diam eget risus varius blandit sit amet non magna.",u:'dennis'},{m:"Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.", u:'ray'},{m:"Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue.", u:'anne'}];
});
