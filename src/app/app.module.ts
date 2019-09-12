import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RoleCategoriesComponent } from './role-categories/role-categories.component';
import { RoleCategoriesListComponent } from './role-categories-list/role-categories-list.component';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatExpansionModule } from '@angular/material';
//import { MatListModule } from '@angular/material/list';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { MaterialModule } from './material.module';
import { ProductOwnerComponent } from '../app/product-owner/product-owner.component';


@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule,AppRoutingModule, RouterModule.forRoot([
        { path: '', component: RoleCategoriesComponent },
        { path: 'jump-start/:id', component: RoleCategoriesListComponent },
        { path: 'product-owner', component: ProductOwnerComponent },
    ]),
        MaterialModule, HttpModule, HttpClientModule],
    declarations: [AppComponent, RoleCategoriesComponent, RoleCategoriesListComponent, ProductOwnerComponent],
    bootstrap: [AppComponent],
    providers: [AuthService],
})
export class AppModule { }
