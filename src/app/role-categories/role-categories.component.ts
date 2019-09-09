import { Component } from '@angular/core';
import { Role } from './role-component';
import { Roles, RoleCategoryTypes } from './role-category-constants';
import { Router } from '@angular/router';
@Component({
    selector: 'role-categories',
    templateUrl: './role-categories.html'
})
export class RoleCategoriesComponent {
    constructor(private router: Router) {

    }

    roles = Roles;
    selectedRole: Role;

    roleCategoryTypes = RoleCategoryTypes;
    selectedCategory: Role;

    isHidden: boolean = true;

    onSelect(role: Role): void {
        this.isHidden = false;
        this.selectedRole = role;

    }
    OnSelectCategory(roleCategory: Role): void {
        this.selectedCategory = roleCategory;
        //this.router.navigate(['/roleCategoryList']);
       // this.router.navigateByUrl('/list');
    }
}