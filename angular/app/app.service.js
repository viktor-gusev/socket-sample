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
var Observable_1 = require("rxjs/Observable");
var io = require("socket.io-client");
var AppService = (function () {
    function AppService() {
        // Server url
        this.url = "http://localhost:8080/";
    }
    AppService.prototype.getSocket = function () {
        if (!this.socket) {
            this.socket = io(this.url);
        }
        return this.socket;
    };
    // Observable for event 'message'
    AppService.prototype.getMessages = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.getSocket().on('new message', function (data) {
                observer.next(data);
            });
            return function () { return _this.socket.disconnect(); };
        });
        return observable;
    };
    // Send message to server
    AppService.prototype.sendMessage = function (message) {
        this.getSocket().emit('add-message', message);
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map