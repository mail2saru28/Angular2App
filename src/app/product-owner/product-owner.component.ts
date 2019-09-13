import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    selector: 'product-owner',
    templateUrl: './product-owner.component.html',
    styleUrls: ['./product-owner.component.css']
})
export class ProductOwnerComponent implements OnInit  {
    fileUrl: any;
    constructor(private authService: AuthService, private sanitizer: DomSanitizer) {

    }
    ngOnInit() {
        const data = 'some text';
        const blob = new Blob([data], { type: 'application/octet-stream' });

        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    }
  
 
}