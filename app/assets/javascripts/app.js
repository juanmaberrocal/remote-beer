angular.module("remote-beer", [
    // set dependencies
    "ui.router",
    "ng-token-auth",
    "templates"
    ])
    // configure router
    .config([
        "$stateProvider",
        "$urlRouterProvider",
        "$locationProvider",
        "$authProvider",
        function($stateProvider, $urlRouterProvider, $locationProvider, $authProvider){
            // define states
            $stateProvider
                .state("root", {
                    abstract: true,
                    templateUrl: "layouts/root.html" // root view wrapper
                })
                .state("root.home", {
                    url: "/",
                    templateUrl: "root/home.html", // home view
                    controller: "rootHome"
                })
                .state("root.beer", {
                    url: "/beer"
                })
                .state("root.cities", {
                    url: "/cities"
                });

            // redirect home
            $urlRouterProvider.otherwise("/");

            // html5 pretty urls
            if (window.history && window.history.pushState){
                $locationProvider.html5Mode(true);
            }
        }
    ]);