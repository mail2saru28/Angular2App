import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Netlist } from '../models/Netlist';
@Component({
    selector: 'Scrum-Master',
    templateUrl: './scrummaster.component.html',
    styleUrls: ['./scrummaster.component.css']
})
export class ScrumMasterComponent implements OnInit {
    fileUrl: any;
    responsibilities: any;
    url: any = '/src/assets/documents';

    constructor(private authService: AuthService, private sanitizer: DomSanitizer) {

    }
    ngOnInit() {
        const data = 'some text';
        const blob = new Blob([data], { type: 'application/octet-stream' });

        //this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

        this.authService.getScrumMasterResponsibilities('getAllScrumMasterResponsibilities')
            .subscribe(responsibilities => {

                this.responsibilities = responsibilities.collection;
                console.log(this.responsibilities);
            });
    }
}

    //getProductOwnerResponsibilities(): void {
    //    this.authService.getProductOwnerResponsibilities('getAllProductOwnerResponsibilities')
    //        .subscribe(responsibilities => {

    //            this.responsibilities = responsibilities.collection;
    //            console.log(this.responsibilities);
    //        });
    //}

//}