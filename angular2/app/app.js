System.register(['angular2/core', 'angular2/router', './home', './about', './experiment', './my_app', './service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, about_1, experiment_1, my_app_1, service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (experiment_1_1) {
                experiment_1 = experiment_1_1;
            },
            function (my_app_1_1) {
                my_app_1 = my_app_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            // import {ExperimentsService} from './common/experiments.service';
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                    $(".button-collapse").sideNav({
                        menuWidth: 300,
                        edge: 'right',
                        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
                    });
                    function toogleSideNav() {
                        $('.button-collapse').sideNav('show');
                    }
                    // this.router.navigate(['/home']);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: './app/app.html',
                        styles: ["\n\t\th1 {\n\t\t\tcolor:#545454;\n\t\t\tbackground:#02A8F4;\n\t\t\tpadding:15px;\n\t\t\tbox-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);\n\t\t\tmargin: 0px;\n\t\t}\n\t"],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [service_1.StateService]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_1.HomeComponent },
                        { path: '/about', name: 'About', component: about_1.AboutComponent },
                        { path: '/experiments', name: 'Experiments', component: experiment_1.ExperimentsComponent },
                        { path: '/myapp', name: 'Myapp', component: my_app_1.MyappComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map