import { Component,OnInit } from '@angular/core';
import { Role } from './role-component';
import { Roles, RoleCategoryTypes } from './role-category-constants';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Netlist } from '../models/Netlist';
import { HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
    selector: 'role-categories',
    templateUrl: './role-categories.html'
})
export class RoleCategoriesComponent implements OnInit {
    constructor(private router: Router, private authService: AuthService) {
       
    }
    ngOnInit() { this.getRoles();}
    //roles: Role[];
    //roles = Roles;
    selectedRole: Role;
    roles: Observable<Netlist>;
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
    
    //getRoles() {
    //    this.roles = this.authService.getRoles();
    //    console.log(this.roles);
    //}
    getRoles() {
        this.authService.getRoles().subscribe(response => {
          
            //window.location.href = response.url;
            
        }), (error:any) => console.log('Error in Roles'),
            () => console.info('Error in Roles');
    }
}