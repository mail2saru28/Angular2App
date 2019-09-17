import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Netlist } from '../models/Netlist';
@Component({
    selector: 'architect',
    templateUrl: './architect.component.html',
    styleUrls: ['./architect.component.css']
})
export class ArchitectComponent implements OnInit {
    fileUrl: any;
    responsibilities: any;
    constructor(private authService: AuthService, private sanitizer: DomSanitizer) {
        
    }
    ngOnInit() {
        this.authService.getArchitectResponsibilities('getArchitectResponsibilities')
            .subscribe(responsibilities => {

                this.responsibilities = responsibilities.collection;
                console.log(this.responsibilities);
            });
    }
}