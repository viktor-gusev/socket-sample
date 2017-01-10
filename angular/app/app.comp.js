"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var AppComp = (function () {
    function AppComp(service) {
        this.service = service;
        this.messages = [];
    }
    AppComp.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.service.getMessages().subscribe(function (msg) {
            _this.messages.push(msg);
        });
    };
    AppComp.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    AppComp.prototype.btnClick = function () {
        this.service.sendMessage("New message from client!");
    };
    return AppComp;
}());
AppComp = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        templateUrl: 'app.comp.html'
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppComp);
exports.AppComp = AppComp;
//# sourceMappingURL=app.comp.js.map