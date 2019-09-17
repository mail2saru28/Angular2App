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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var RoleCategoriesComponent = /** @class */ (function () {
    function RoleCategoriesComponent(router) {
        this.router = router;
        this.authService = authService;
        this.isHidden = true;
    }
    RoleCategoriesComponent.prototype.ngOnInit = function () { this.getRoles(); this.getLinks(); };
    RoleCategoriesComponent.prototype.onSelect = function (role) {
        this.selectedRole = role;
    };
    RoleCategoriesComponent.prototype.OnSelectCategory = function (roleCategory) {
        this.selectedCategory = roleCategory;
    };
    //getRoles() {
    //    this.roles = this.authService.getRoles();
    //    console.log(this.roles);
    //}
    RoleCategoriesComponent.prototype.getRoles = function () {
        var _this = this;
        this.authService.getRoles('getAllRoles')
            .subscribe(function (roles) {
            _this.roles = roles.collection;
            console.log(_this.roles);
        });
    };
    RoleCategoriesComponent.prototype.getLinks = function () {
        var _this = this;
        this.authService.getLinks('getAllLinks').subscribe(function (links) { _this.links = links.collection; });
    };
    RoleCategoriesComponent = __decorate([
        core_1.Component({
            selector: 'role-categories',
            templateUrl: './role-categories.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], RoleCategoriesComponent);
    return RoleCategoriesComponent;
}());
exports.RoleCategoriesComponent = RoleCategoriesComponent;
//export class RoleCategoriesComponent implements OnInit {
//    constructor(private router: Router, private authService: AuthService) {
//    }
//    ngOnInit() { this.getRoles();}
//    //roles: Role[];
//    //roles = Roles;
//    selectedRole: Role;
//    roles: Observable<Netlist>;
//    roleCategoryTypes = RoleCategoryTypes;
//    selectedCategory: Role;
//    isHidden: boolean = true;
//    onSelect(role: Role): void {
//        this.isHidden = false;
//        this.selectedRole = role;
//    }
//    OnSelectCategory(roleCategory: Role): void {
//        this.selectedCategory = roleCategory;
//        //this.router.navigate(['/roleCategoryList']);
//        // this.router.navigateByUrl('/list');
//    }
//    //getRoles() {
//    //    this.roles = this.authService.getRoles();
//    //    console.log(this.roles);
//    //}
//    getRoles() {
//        this.authService.getRoles().subscribe(response => {
//            //window.location.href = response.url;
//        }), (error:any) => console.log('Error in Roles'),
//            () => console.info('Error in Roles');
//    }
//}
//# sourceMappingURL=role-categories.component.js.map