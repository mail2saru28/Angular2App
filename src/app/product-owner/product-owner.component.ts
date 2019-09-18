import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Netlist } from '../models/Netlist';
@Component({
    selector: 'product-owner',
    templateUrl: './product-owner.component.html',
    styleUrls: ['./product-owner.component.css']
})
export class ProductOwnerComponent implements OnInit  {
    fileUrl: any;
    responsibilities: any;
    imageUrl: any;
    Productimages: any = [];
    url: any ='D:\newproject\src\assets\documents';

    constructor(private authService: AuthService, private sanitizer: DomSanitizer) {
        this.imageUrl = '/src/assets/img/';
        this.Productimages = ['1.jpg', '2.jpg'];
        
    }
    ngOnInit() {
        const data = 'some text';
        const blob = new Blob([data], { type: 'application/octet-stream' });

        //this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        
            this.authService.getProductOwnerResponsibilities('getAllProductOwnerResponsibilities')
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