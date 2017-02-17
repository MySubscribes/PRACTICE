	  //МОДЕЛЬ
		let model = {
			user: 'User1',
			courses: [{subject: 'HTML , CSS', passed: true },
				{subject: 'JavaScript Essential', passed: true },
				{subject: 'JavaScript Advanced', passed: false },
				{subject: 'HTML5 &amp; CSS3', passed: false },
				{subject: 'AngularJS', passed: false }]
		};

			//МОДУЛЬ
		let courseListApp = angular.module('courseListApp', []);

			//КОНТРОЛЛЕР
		courseListApp.controller('courseListCtrl', function($scope){
			$scope.data = model;
			$scope.addNewCourse = function(){
				$scope.data.courses.push({
					subject: $scope.newSubject,
					passed: false
				})
				$scope.newSubject = '';1
			}

			$scope.showText = function (passed) {
				return passed ? 'Yes' : 'No';
			}

			$scope.setStyle = function (passed) {
				return passed ? 'color: green' : 'color: red; font-weight: bold';
			}
		})
