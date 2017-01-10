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
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
/* Angular Materials */
var material_1 = require("@angular/material");
/* PrimeNG */
var primeng_1 = require("primeng/primeng");
/* Components */
var app_comp_1 = require("./app.comp");
/* Services */
var app_service_1 = require("./app.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            // Angular Materials
            material_1.MaterialModule.forRoot(),
            // PrimeNG
            primeng_1.GalleriaModule,
            primeng_1.DropdownModule,
            primeng_1.ButtonModule,
            primeng_1.TooltipModule,
            primeng_1.DialogModule,
            primeng_1.PasswordModule,
            primeng_1.InputTextModule,
            primeng_1.CheckboxModule,
            primeng_1.InputMaskModule,
            primeng_1.AutoCompleteModule,
            primeng_1.SliderModule
        ],
        declarations: [app_comp_1.AppComp],
        bootstrap: [app_comp_1.AppComp],
        providers: [app_service_1.AppService]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map