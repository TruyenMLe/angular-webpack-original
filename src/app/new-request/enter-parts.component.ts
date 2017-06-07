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
    ngOnInit() {
        this.handleTabEvent();
    }

    /**
     * Sets up a handler for the TAB key press in the textarea.
     * @private
     */
    private handleTabEvent() {
        let partNumbersField: any = document.getElementById('partNumbersField');

        let keyHandler = (e: any) => {
            // if TAB key is pressed...
            if (e.keyCode === 9) {
                partNumbersField.value += '\t';

                if (e.preventDefault) {
                    e.preventDefault();
                }
                return false;
            }
        };

        if (partNumbersField.addEventListener) {
            partNumbersField.addEventListener('keydown', keyHandler, false);
        } else if (partNumbersField.attachEvent) {
            partNumbersField.attachEvent('onkeydown', keyHandler);
        }
    }
}
