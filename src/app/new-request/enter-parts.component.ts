import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ar-enter-parts',
    templateUrl: './enter-parts.component.html'
})
export class EnterPartsComponent implements OnInit {
    newRequest: any;
    filePath: any;

    constructor() {
        this.newRequest = {};
        this.filePath = {};
    }

    /**
     * Lifecycle hook for when the component is initialized.
     */
    ngOnInit() {}
}
