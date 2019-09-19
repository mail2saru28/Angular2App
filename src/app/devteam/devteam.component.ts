import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Netlist } from '../models/Netlist';
@Component({
    selector: 'app-devteam',
    templateUrl: './devteam.component.html'
})
export class DevTeamComponent implements OnInit {
    fileUrl: any;
    responsibilities: any;
    constructor(private authService: AuthService, private sanitizer: DomSanitizer) {

    }
    ngOnInit() {

        this.authService.getDevTeamResponsibilities('getDevTeamResponsibilities')
            .subscribe(responsibilities => {

                this.responsibilities = responsibilities.collection;
                console.log(this.responsibilities);
            });
    }
}