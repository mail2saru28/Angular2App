import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RoleCategoriesComponent } from './role-categories/role-categories.component';
import { RoleCategoriesListComponent } from './role-categories-list/role-categories-list.component';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot([
        { path: '', component: RoleCategoriesComponent },
        { path: 'list', component: RoleCategoriesListComponent },
    ]),],
    declarations: [AppComponent, RoleCategoriesComponent, RoleCategoriesListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
