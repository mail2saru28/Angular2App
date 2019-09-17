import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Netlist } from '../models/Netlist';
@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
    fileUrl: any;
    responsibilities: any;
    constructor(private authService: AuthService, private sanitizer: DomSanitizer) {

    }
    ngOnInit() {

        this.authService.getManagerResponsibilities('getAllManagerResponsibilities')
            .subscribe(responsibilities => {

                this.responsibilities = responsibilities.collection;
                console.log(this.responsibilities);
            });
    }
}