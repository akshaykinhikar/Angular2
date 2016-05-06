System.register(['angular2/core', './my_app', './service'], function(exports_1, context_1) {
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
    var core_1, my_app_1, service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_app_1_1) {
                my_app_1 = my_app_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                // title: string = 'Home Page';
                // body:  string = 'This is the about home body';
                // message: string;
                function HomeComponent(_StateService) {
                    this._StateService = _StateService;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.message = this._StateService.getMessage();
                };
                HomeComponent.prototype.updateMessage = function (m) {
                    this._StateService.setMessage(m);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        directives: [my_app_1.MyappComponent],
                        template: "\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<h3>Home Page</h3><p>{{message}}</p>\n\t\t\t\t<div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s4\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-image waves-effect waves-block waves-light\">\n\t\t\t\t\t\t\t<img class=\"activator\" src=\"../image/sky.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t\t\t<span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n\t\t\t\t\t\t\t<p><a href=\"#\">This is a link</a></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-reveal\">\n\t\t\t\t\t\t\t<span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n\t\t\t\t\t\t\t<p>Here is some more information about this product that is only revealed once clicked on.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<my-app></my-app>\n\t",
                        styles: ["\n\t\th3 {\n\t\t\tcolor:#545454;\n\t\t\tbackground:red;\n\t\t\tpadding:15px;\n\t\t\tbox-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);\n\t\t\tmargin-top: 0px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [service_1.StateService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.js.map