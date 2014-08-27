'use strict';

/**
 * @ngdoc function
 * @name angularuiplayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularuiplayApp
 */
angular.module('angularuiplayApp')
  .controller('MainCtrl', ['$scope', '$interval', '$route', '$http', function ($scope, $interval, $route, $http) {
	  	  
	  $scope.winner = {idx:0, name:"", id: []};
	  
	  var _speed = 40;
	  
	  var _stopPromise_00;
      var _stopPromise_01;
      var _stopPromise_02;
      var _stopPromise_03;
      var _stopPromise_04;
      var _stopPromise_05;
      var _stopPromise_06;
      var _stopPromise_07;
      var _allStopPromise;
      
      var _counterPromise_00 = 50;
      var _counterPromise_01 = 100;
      var _counterPromise_02 = 150;
      var _counterPromise_03 = 200;
      var _counterPromise_04 = 250;
      var _counterPromise_05 = 300;
      var _counterPromise_06 = 350;
      var _counterPromise_07 = 400;
      var _counterAllStopPromise = 500;
      
      var _counterAllPromiseComplete = [];
      
      var _randomizer = function(arr) {
    	for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    	return arr;
      };
      
      var _randInterval = function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	  };
      
      var _initDigits = function() {
    	var _windigits = [];
	    for(var a = 0; a < 8; a++) {
    	  var ijson = {};  
    	  ijson.idx = a;
    	  ijson.sval = 0;
    	  ijson.oval = 0;
    	  ijson.bgcolor = '#fff';
    	  _windigits[a] = ijson;
        }
	    return _windigits;
      };
      
      $scope.revealWinner = function() {
    	  $scope.message = $scope.winner.name;
      };
      
      $scope.startShuffle = function() {
    	  
    	  $http({method: 'GET', url: 'http://localhost:9000/employees/random'}).
	  	    success(function(data, status, headers, config) {
	  	    	//alert(JSON.stringify(data));
	  	    	 var resJson = {};
	  	    	  resJson.idx = 1;
	  	    	  resJson.name = data.employeeName;
	  	    	  resJson.id = data.employeeId.split("");
	  	    	  $scope.winner = resJson;
	  	    	  
	  	    	for(var x = 0; x < 8; x++) {   
	  	    	  $scope.ids[x].oval = $scope.winner.id[x];  
	  	    	}
	  	    	
	  	    	if ( angular.isDefined(_stopPromise_00) ) return;
	  	    	if ( angular.isDefined(_stopPromise_01) ) return;
	  	    	if ( angular.isDefined(_stopPromise_02) ) return;
	  	    	if ( angular.isDefined(_stopPromise_03) ) return;
	  	    	if ( angular.isDefined(_stopPromise_04) ) return;
	  	    	if ( angular.isDefined(_stopPromise_05) ) return;
	  	    	if ( angular.isDefined(_stopPromise_06) ) return;
	  	    	if ( angular.isDefined(_stopPromise_07) ) return;
	  	        
	  	        _stopPromise_00 = $interval(function() {
	  	            $scope.ids[0].sval = _randInterval(1,9); 
	  	            _counterPromise_00--;
	  	            if(_counterPromise_00==0) {
	  	            	$scope.ids[0].bgcolor = '#F7BE81';
	  	            	$scope.ids[0].sval = $scope.ids[0].oval;
	  	            	_stopIndividualShuffle(0);            	
	  	            	$scope.message = 'Who\'s employee ID is this?';
	  	            }
	  	        }, _speed);
	  	        _stopPromise_01 = $interval(function() {
	  	            $scope.ids[1].sval = _randInterval(1,9); 
	  	            _counterPromise_01--;
	  	            if(_counterPromise_01==0) {
	  	            	$scope.ids[1].bgcolor = '#F7BE81';
	  	            	$scope.ids[1].sval = $scope.ids[1].oval;
	  	            	_stopIndividualShuffle(1);  
	  	            }
	  	        }, _speed);
	  	        _stopPromise_02 = $interval(function() {
	  	            $scope.ids[2].sval = _randInterval(1,9);
	  	            _counterPromise_02--;
	  	            if(_counterPromise_02==0) {
	  	            	$scope.ids[2].bgcolor = '#F7BE81';
	  	            	$scope.ids[2].sval = $scope.ids[2].oval;
	  	            	_stopIndividualShuffle(2);            	
	  	            	$scope.message = 'Wait for it ....';
	  	            }
	  	        }, _speed);
	  	        _stopPromise_03 = $interval(function() {
	  	            $scope.ids[3].sval = _randInterval(1,9);
	  	            _counterPromise_03--;
	  	            if(_counterPromise_03==0) {
	  	            	$scope.ids[3].bgcolor = '#F7BE81';
	  	            	$scope.ids[3].sval = $scope.ids[3].oval;
	  	            	_stopIndividualShuffle(3);            	
	  	            	
	  	            }
	  	        }, _speed);
	  	        _stopPromise_04 = $interval(function() {
	  	            $scope.ids[4].sval = _randInterval(1,9);
	  	            _counterPromise_04--;
	  	            if(_counterPromise_04==0) {
	  	            	$scope.ids[4].bgcolor = '#F7BE81';
	  	            	$scope.ids[4].sval = $scope.ids[4].oval;
	  	            	_stopIndividualShuffle(4);   
	  	            	$scope.message = 'Almost there ....';
	  	            }
	  	        }, _speed);
	  	        _stopPromise_05 = $interval(function() {
	  	            $scope.ids[5].sval = _randInterval(1,9);
	  	            _counterPromise_05--;
	  	            if(_counterPromise_05==0) {
	  	            	$scope.ids[5].bgcolor = '#F7BE81';
	  	            	$scope.ids[5].sval = $scope.ids[5].oval;
	  	            	_stopIndividualShuffle(5);
	  	            	
	  	            }
	  	        }, _speed);
	  	        _stopPromise_06 = $interval(function() {
	  	            $scope.ids[6].sval = _randInterval(1,9);
	  	            _counterPromise_06--;
	  	            if(_counterPromise_06==0) {
	  	            	$scope.ids[6].bgcolor = '#F7BE81';
	  	            	$scope.ids[6].sval = $scope.ids[6].oval;
	  	            	_stopIndividualShuffle(6);            	
	  	            	$scope.message = 'And the winner is ... ';
	  	            }
	  	        }, _speed);
	  	        _stopPromise_07 = $interval(function() {
	  	            $scope.ids[7].sval = _randInterval(1,9);
	  	            _counterPromise_07--;
	  	            if(_counterPromise_07==0) {
	  	            	$scope.ids[7].bgcolor = '#F7BE81';
	  	            	$scope.ids[7].sval = $scope.ids[7].oval;
	  	            	_stopIndividualShuffle(7); 
	  	            }
	  	        }, _speed);
	  	        _allStopPromise = $interval(function() {
	  	      	  _counterAllStopPromise--;
	  	      	  if(_counterAllStopPromise==0) {
	  	      		$scope.validateWinner = true;
	  	      	  }
	  	        }, _speed);
	  	    }).
	  	    error(function(data, status, headers, config) {
	  	    });
    	    	
    	
      };
      
      $scope.stopShuffle = function() {
    	for(var a = 0; a < 8; a++) {
    	  _stopIndividualShuffle(a);
    	}
    	$interval.cancel(_allStopPromise);
    	_allStopPromise = undefined;
      };
      
      var _stopIndividualShuffle = function(idx) {
    	  if (idx==0 && angular.isDefined(_stopPromise_00)) {
              $interval.cancel(_stopPromise_00);
              _stopPromise_00 = undefined;
          }
          if (idx==1 && angular.isDefined(_stopPromise_01)) {
            $interval.cancel(_stopPromise_01);
            _stopPromise_01 = undefined;
          }
          if (idx==2 && angular.isDefined(_stopPromise_02)) {
              $interval.cancel(_stopPromise_02);
             _stopPromise_02 = undefined;
          }
          if (idx==3 && angular.isDefined(_stopPromise_03)) {
              $interval.cancel(_stopPromise_03);
              _stopPromise_03 = undefined;
          }
          if (idx==4 && angular.isDefined(_stopPromise_04)) {
              $interval.cancel(_stopPromise_04);
              _stopPromise_04 = undefined;
          }
          if (idx==5 && angular.isDefined(_stopPromise_05)) {
              $interval.cancel(_stopPromise_05);
              _stopPromise_05 = undefined;
          }
          if (idx==6 && angular.isDefined(_stopPromise_06)) {
              $interval.cancel(_stopPromise_06);
              _stopPromise_06 = undefined;
          }
          if (idx==7 && angular.isDefined(_stopPromise_07)) {
              $interval.cancel(_stopPromise_07);
              _stopPromise_07 = undefined;
          }
      }

      $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          $scope.stopShuffle();
      });
      
      $scope.resetShuffle = function() {
    	  $route.reload();
      }
      
	  $scope.message = 'Who\'s the lucky person today?';
	  $scope.ids = _initDigits();
  }]);
