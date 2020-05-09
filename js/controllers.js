angular.module('classicGold')

.controller('MenuController', ['$scope', function($scope) {
    
 $scope.MenuEffect = function() { 
     jQuery('.menu ul').removeClass('remove-effect');
     jQuery('.menu ul').addClass('menu-effect');
 };
    
$scope.RemoveMenuEffect = function() {
    jQuery('.menu ul').addClass('remove-effect');
    jQuery('.menu ul').removeClass('menu-effect');
};
    
$scope.showMenuText = function(event) {
       var className = $(event.target);
       jQuery(className).next().addClass('show-menu-text animated fadeInLeft');
   };
    
$scope.hideMenuText = function(event) {
       var className = $(event.target);
       jQuery(className).next().removeClass('show-menu-text animated fadeInLeft');
   };
    
}])

.controller('NewsAPI', ['$scope', '$http', function($scope, $http) {
        $http.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a4010e4b77384d91acd53b3fd75aefa8').then(function(res) {
        $scope.news = res.data;
   });
    
    
}])

.controller('TopBar', ['$scope', function($scope){
    jQuery(window).on('scroll', function() {
        if(jQuery(window).scrollTop() > 50) {
            jQuery(".top-bar").addClass('top-bar-effect');
        } else {
           jQuery(".top-bar").removeClass('top-bar-effect', 1000);
        }
        
    })
    
    
    
}])

.controller('SongsAPI', ['$scope', '$http', function($scope, $http) {
        $http.get("http://184.75.223.178:2199/recentfeed/fycpkrmw/json/")
          .then(function (response) {
              $scope.songs = response.data;
               
            
                jQuery('#spinner').fadeOut(1000);
          });
    
    
    
}])


.controller('WeatherAPI', ['$scope', '$http', function($scope, $http) {
        $http.get('http://api.openweathermap.org/data/2.5/weather?id=6167865&units=imperial&APPID=7bd038c713a43503399fe8b1cf907575').then(function(res) {
        $scope.weatherdata = res.data;
   });
    
    
}])

.controller('NowPlayingAPI', ['$scope', '$http', function($scope, $http) {
        $http.get("http://184.75.223.178:2199/rpc/fycpkrmw/streaminfo.get")
          .then(function (response) {
              $scope.playing = response.data;
          });
    
    
    
}])


.controller('ProducersPage', ['$scope', '$http', function($scope, $http) {
        $http.get("js/producers.js")
          .then(function (response) {
              $scope.producers = response.data;
            
            for (var m=0; m < $scope.producers.length; m++) {
                var bioText = $scope.producers[m].bio;
                bioText = bioText.replace(/(\r\n|\n\r|\r|\n)/gm, "<br />");
                $scope.producers[m].bio = bioText;
 
            }
            
          });
    
    
    
}])

.controller('popUpWindow', ['$compile', '$scope','$window', function($compile, $scope, $window) {
    $scope.openWindow = function() {
        $window.open('http://classicgold.torontocast.stream', 'TorontoCast', 'width=650,height=650');
    };}])



.filter('unsafe', function ($sce) {
   return function (val) {
      if( (typeof val == 'string' || val instanceof String) ) {
         return $sce.trustAsHtml(val);
      }
   };
})

;