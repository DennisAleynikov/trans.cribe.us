angular.module('transcribe.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicActionSheet, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.meetings = [
      {title: 'Yearly Review', time: 'Yesterday', id: "I83N"},
      {title: 'Daily Lunch', time: 'Tomorrow', id: "B3NE"},
      {title: 'Idea Brainstorm', time: 'Last night', id: "7hhC"},
      {title: 'Random Meeting', time: 'Random time', id: "X4f2"}];

    $scope.record = function () {
      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b> This' },
          { text: 'Move' }],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function () {
          console.log('cancel');
        },
        buttonClicked: function (index) {
          console.log(index);
          return true;
        }
      });

      // For example's sake, hide the sheet after two seconds
      $timeout(function () {
        hideSheet();
      }, 2000);
    };
  })

  .controller('RecordCtrl', function ($scope) {
    var apiKey = 45199562;
    var sessionId = '2_MX40NTE5OTU2Mn5-MTQyODE5NDA2NTIyMX5ZRElTb2UvaEp6b3JrZUFHbUMwYmxNY29-fg';
    var session = OT.initSession(apiKey, sessionId);
    var token = 'T1==cGFydG5lcl9pZD00NTE5OTU2MiZzaWc9MDEyZWZkZmIwNGY4NGE3ODFlY2Q1NDY2MjhhZTZhYTg0ZTAxN2E0Mzpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5URTVPVFUyTW41LU1UUXlPREU1TkRBMk5USXlNWDVaUkVsVGIyVXZhRXA2YjNKclpVRkhiVU13WW14TlkyOS1mZyZjcmVhdGVfdGltZT0xNDI4MTk0MTI4Jm5vbmNlPTAuOTg5OTk3NDMyMDU0MjAyNyZleHBpcmVfdGltZT0xNDI4MjgwNTI4';
    session.connect(token, function(error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('connected to session');
      }
    });
  })

  .controller('MeetingCtrl', function ($scope, $stateParams) {
    $scope.title = $stateParams.meetingId;
    $scope.user = {name: 'dennis', pic: 'http://i.imgur.com/N0HqWH0.jpg'};
    $scope.transcript = [{m: "Maecenas sed diam eget risus varius blandit sit amet non magna.", u: 'dennis'}, {m: "Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.", u: 'ray'}, {m: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue.", u: 'anne'}];
  });
