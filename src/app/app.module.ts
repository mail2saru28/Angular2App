import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RoleCategoriesComponent } from './role-categories/role-categories.component';
import { RoleCategoriesListComponent } from './role-categories-list/role-categories-list.component';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { AuthService } from './auth.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule,AppRoutingModule, RouterModule.forRoot([
        { path: '', component: RoleCategoriesComponent },
        { path: 'list', component: RoleCategoriesListComponent },
    ]), MatExpansionModule,
        MatListModule, HttpModule, HttpClientModule],
    declarations: [AppComponent, RoleCategoriesComponent, RoleCategoriesListComponent],
    bootstrap: [AppComponent],
    providers: [AuthService],
})
export class AppModule { }
