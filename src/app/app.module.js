"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var role_categories_component_1 = require("./role-categories/role-categories.component");
var role_categories_list_component_1 = require("./role-categories-list/role-categories-list.component");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, router_1.RouterModule.forRoot([
                    { path: '', component: role_categories_component_1.RoleCategoriesComponent },
                    { path: 'list', component: role_categories_list_component_1.RoleCategoriesListComponent },
                ]),],
            declarations: [app_component_1.AppComponent, role_categories_component_1.RoleCategoriesComponent, role_categories_list_component_1.RoleCategoriesListComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map