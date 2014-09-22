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
	  	  
	  $scope.winner = {idx:0, name:'', id: []};
	  
	  var _baseURI = "http://c0040065.itcs.hp.com:8080";
	  
	  var _speed = 40;
	  
	  var _stopPromise00;
      var _stopPromise01;
      var _stopPromise02;
      var _stopPromise03;
      var _stopPromise04;
      var _stopPromise05;
      var _stopPromise06;
      var _stopPromise07;
      var _allStopPromise;
      
      var _counterPromise00 = 50;
      var _counterPromise01 = 100;
      var _counterPromise02 = 150;
      var _counterPromise03 = 200;
      var _counterPromise04 = 250;
      var _counterPromise05 = 300;
      var _counterPromise06 = 350;
      var _counterPromise07 = 400;
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

      $scope.disableGo = false;
      
      $scope.startShuffle = function() {
    	  
    	  $http({method: 'GET', url: _baseURI+'/LuckyDraw/getRandomEmployeeId'}).
	  	    success(function(data, status, headers, config) {
	  	    	//alert(JSON.stringify(data));

	  	    	$scope.disableGo = true;

	  	    	 var resJson = {};
	  	    	  resJson.idx = 1;
	  	    	  resJson.name = data.employeeName;
	  	    	  resJson.id = data.employeeId.split('');
	  	    	  $scope.winner = resJson;
	  	    	  
	  	    	for(var x = 0; x < 8; x++) {   
	  	    	  $scope.ids[x].oval = $scope.winner.id[x];  
	  	    	}
	  	    	
	  	    	if ( angular.isDefined(_stopPromise00) ) return;
	  	    	if ( angular.isDefined(_stopPromise01) ) return;
	  	    	if ( angular.isDefined(_stopPromise02) ) return;
	  	    	if ( angular.isDefined(_stopPromise03) ) return;
	  	    	if ( angular.isDefined(_stopPromise04) ) return;
	  	    	if ( angular.isDefined(_stopPromise05) ) return;
	  	    	if ( angular.isDefined(_stopPromise06) ) return;
	  	    	if ( angular.isDefined(_stopPromise07) ) return;
	  	        
	  	        _stopPromise00 = $interval(function() {
	  	            $scope.ids[0].sval = _randInterval(1,9); 
	  	            _counterPromise00--;
	  	            if(_counterPromise00===0) {
	  	            	$scope.ids[0].bgcolor = '#F7BE81';
	  	            	$scope.ids[0].sval = $scope.ids[0].oval;
	  	            	_stopIndividualShuffle(0);            	
	  	            	$scope.message = 'Who\'s employee ID is this?';
	  	            }
	  	        }, _speed);
	  	        _stopPromise01 = $interval(function() {
	  	            $scope.ids[1].sval = _randInterval(1,9); 
	  	            _counterPromise01--;
	  	            if(_counterPromise01===0) {
	  	            	$scope.ids[1].bgcolor = '#F7BE81';
	  	            	$scope.ids[1].sval = $scope.ids[1].oval;
	  	            	_stopIndividualShuffle(1);  
	  	            }
	  	        }, _speed);
	  	        _stopPromise02 = $interval(function() {
	  	            $scope.ids[2].sval = _randInterval(1,9);
	  	            _counterPromise02--;
	  	            if(_counterPromise02===0) {
	  	            	$scope.ids[2].bgcolor = '#F7BE81';
	  	            	$scope.ids[2].sval = $scope.ids[2].oval;
	  	            	_stopIndividualShuffle(2);            	
	  	            	$scope.message = 'Wait for it ....';
	  	            }
	  	        }, _speed);
	  	        _stopPromise03 = $interval(function() {
	  	            $scope.ids[3].sval = _randInterval(1,9);
	  	            _counterPromise03--;
	  	            if(_counterPromise03===0) {
	  	            	$scope.ids[3].bgcolor = '#F7BE81';
	  	            	$scope.ids[3].sval = $scope.ids[3].oval;
	  	            	_stopIndividualShuffle(3);            	
	  	            	
	  	            }
	  	        }, _speed);
	  	        _stopPromise04 = $interval(function() {
	  	            $scope.ids[4].sval = _randInterval(1,9);
	  	            _counterPromise04--;
	  	            if(_counterPromise04===0) {
	  	            	$scope.ids[4].bgcolor = '#F7BE81';
	  	            	$scope.ids[4].sval = $scope.ids[4].oval;
	  	            	_stopIndividualShuffle(4);   
	  	            	$scope.message = 'Almost there ....';
	  	            }
	  	        }, _speed);
	  	        _stopPromise05 = $interval(function() {
	  	            $scope.ids[5].sval = _randInterval(1,9);
	  	            _counterPromise05--;
	  	            if(_counterPromise05===0) {
	  	            	$scope.ids[5].bgcolor = '#F7BE81';
	  	            	$scope.ids[5].sval = $scope.ids[5].oval;
	  	            	_stopIndividualShuffle(5);
	  	            	
	  	            }
	  	        }, _speed);
	  	        _stopPromise06 = $interval(function() {
	  	            $scope.ids[6].sval = _randInterval(1,9);
	  	            _counterPromise06--;
	  	            if(_counterPromise06===0) {
	  	            	$scope.ids[6].bgcolor = '#F7BE81';
	  	            	$scope.ids[6].sval = $scope.ids[6].oval;
	  	            	_stopIndividualShuffle(6);            	
	  	            	$scope.message = 'And the winner is ... ';
	  	            }
	  	        }, _speed);
	  	        _stopPromise07 = $interval(function() {
	  	            $scope.ids[7].sval = _randInterval(1,9);
	  	            _counterPromise07--;
	  	            if(_counterPromise07===0) {
	  	            	$scope.ids[7].bgcolor = '#F7BE81';
	  	            	$scope.ids[7].sval = $scope.ids[7].oval;
	  	            	_stopIndividualShuffle(7); 
	  	            }
	  	        }, _speed);
	  	        _allStopPromise = $interval(function() {
	  	      	  _counterAllStopPromise--;
	  	      	  if(_counterAllStopPromise===0) {
	  	      		$scope.validateWinner = true;
	  	      	  }
	  	        }, _speed);
	  	    }).
	  	    error(function(data, status, headers, config) {
	  	    	$scope.disableGo = false;
	  	    	$scope.resetShuffle();
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
    	  if (idx===0 && angular.isDefined(_stopPromise00)) {
              $interval.cancel(_stopPromise00);
              _stopPromise00 = undefined;
          }
          if (idx===1 && angular.isDefined(_stopPromise01)) {
            $interval.cancel(_stopPromise01);
            _stopPromise01 = undefined;
          }
          if (idx===2 && angular.isDefined(_stopPromise02)) {
              $interval.cancel(_stopPromise02);
             _stopPromise02 = undefined;
          }
          if (idx===3 && angular.isDefined(_stopPromise03)) {
              $interval.cancel(_stopPromise03);
              _stopPromise03 = undefined;
          }
          if (idx===4 && angular.isDefined(_stopPromise04)) {
              $interval.cancel(_stopPromise04);
              _stopPromise04 = undefined;
          }
          if (idx===5 && angular.isDefined(_stopPromise05)) {
              $interval.cancel(_stopPromise05);
              _stopPromise05 = undefined;
          }
          if (idx===6 && angular.isDefined(_stopPromise06)) {
              $interval.cancel(_stopPromise06);
              _stopPromise06 = undefined;
          }
          if (idx===7 && angular.isDefined(_stopPromise07)) {
              $interval.cancel(_stopPromise07);
              _stopPromise07 = undefined;
          }
      };

      $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          $scope.stopShuffle();
      });
      
      $scope.resetShuffle = function() {
    	  $route.reload();
      };
      
	  $scope.message = 'Who\'s the lucky person today?';
	  $scope.ids = _initDigits();
	  
	  $scope.getEventName = function() {
    	  
    	  $http({method: 'GET', url: _baseURI+'/LuckyDraw/getEventName'}).
	  	    success(function(data, status, headers, config) {
	  	    	var fixedData = data.substring(1, data.length-1);
	  	    	$scope.eventName = fixedData;
	  	    }).
	  	    error(function(data, status, headers, config) {
	  	    	$scope.eventName = "Could not connect to host";
	  	    });
    	
      };
      
      $scope.eventName = "HP Lucky Draw";
      
      $scope.getEventName();
  }]);
