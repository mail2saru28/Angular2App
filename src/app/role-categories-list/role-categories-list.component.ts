import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'role-categories-list',
    templateUrl: './role-categories-list.html'
})
export class RoleCategoriesListComponent implements OnInit {
    public isCollapsed = false;
    id: number;
    paramsSub: any;
    constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
        private router: Router) {

    }
    linkData: any[];
    ngOnInit() {
        this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
        this.getLinkData();
    }

    getLinkData(): void {
        this.authService.getLinkData('getLinksByLinkId', this.id).subscribe(linkInfo => { let data = linkInfo.collection; console.log(data) });
    }
}