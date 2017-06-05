import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ar-enter-parts',
    templateUrl: './enter-parts.component.html'
})
export class EnterPartsComponent implements OnInit {
    @Input() newRequest: any;
    filePath: any;

    constructor() {
        this.filePath = {};
    }

    /**
     * Lifecycle hook for when the component is initialized.
     */
    ngOnInit() {}
}
