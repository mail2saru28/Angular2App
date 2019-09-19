import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Netlist } from '../models/Netlist';
@Component({
    selector: 'app-qa',
    templateUrl: './qa.component.html'
})
export class QAComponent implements OnInit {
    fileUrl: any;
    responsibilities: any;
    constructor(private authService: AuthService, private sanitizer: DomSanitizer) {

    }
    ngOnInit() {

        this.authService.getQAResponsibilities('getAllQAResponsibilities')
            .subscribe(responsibilities => {

                this.responsibilities = responsibilities.collection;
                console.log(this.responsibilities);
            });
    }
}