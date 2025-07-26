var app = angular.module('freelanceApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/home.html",
      controller: "MainCtrl"
    })
    .when("/about", {
      templateUrl: "views/about.html"
    })
    .when("/services", {
      templateUrl: "views/services.html"
    })
    .when("/portfolio", {
      templateUrl: "views/portfolio.html"
    })
    .when("/contact", {
      templateUrl: "views/contact.html"
    })
    .otherwise({ redirectTo: "/" });
});
