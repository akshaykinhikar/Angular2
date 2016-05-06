System.register(['angular2/core', './service'], function(exports_1, context_1) {
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
    var core_1, service_1;
    var ExperimentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            ExperimentsComponent = (function () {
                function ExperimentsComponent(_StateService) {
                    this._StateService = _StateService;
                    this.title = 'Experiment Page';
                    this.body = 'This is the about home body';
                }
                ExperimentsComponent.prototype.ngOnInit = function () {
                    this.message = this._StateService.getMessage();
                };
                ExperimentsComponent.prototype.updateMessage = function (m) {
                    this._StateService.setMessage(m);
                };
                ExperimentsComponent = __decorate([
                    core_1.Component({
                        template: '<div class="container"><div class="row"><div class="col s12"><div><h3>ExperimentsComponent Page</h3><p>{{message}}</p></div></div></div></div>',
                        styles: ["\n\t\th3 {\n\t\t\tcolor:#545454;\n\t\t\tbackground:gray;\n\t\t\tpadding:15px;\n\t\t\tbox-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);\n\t\t\tmargin: 0px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [service_1.StateService])
                ], ExperimentsComponent);
                return ExperimentsComponent;
            }());
            exports_1("ExperimentsComponent", ExperimentsComponent);
        }
    }
});
//# sourceMappingURL=experiment.js.map