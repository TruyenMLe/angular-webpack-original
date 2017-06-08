import { Component, Input } from '@angular/core';

@Component({
    selector: 'ar-additional-attachment',
    templateUrl: './additional-attachment.component.html'
})
export class AdditionalAttachmentComponent {
    @Input() newRequest: any;
    filePath: any;

    constructor() {
        this.filePath = {};
    }
}