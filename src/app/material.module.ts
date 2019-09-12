import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatListModule
    ]
})

export class MaterialModule { }