import { Component, OnInit, Input } from '@angular/core';
import { FormService, FieldControlService, FieldService } from 'form-builder';

import { REQUEST_FORM } from '../mock-request-forms';

@Component({
    selector: 'new-request',
    templateUrl: './new-request.component.html'
})
export class NewRequestComponent implements OnInit {
    @Input() modalId: string;
    @Input() formId: string;
    existingForm: any;
    currentStep: number;
    fields: any[];
    callbackFunc: any;
    form: any;
    submitted: boolean;
    customSteps: any[];
    newRequest: any;

    constructor(
        private formService: FormService,
        private fieldControlService: FieldControlService,
        private fieldService: FieldService
    ) {}

    ngOnInit() {
        this.callbackFunc = {
            onSubmit: () => {
                console.log('Dynamic form data: ');
                console.log(this.form.value);
                console.log('New request data: ');
                console.log(this.newRequest);
            }
        };
        this.customSteps = ['enter-parts-step'];
        this.newRequest = {};
        this.getFormMetaData();
    }

    getButtonClass(type) {
        switch (type) {
            case 'Primary': return 'primary-button';
            case 'Secondary': return 'secondary-button';
            case 'Cancel': return 'cancel-button';
            case 'Tertiary': return 'tertiary-button';
            default: return '';
        }
    }

    getFormMetaData() {
        this.existingForm = REQUEST_FORM;

        if (this.existingForm.formType === 'wizard') {
            this.currentStep = 1;
        }

        this.generateButtonCallbacks(this.existingForm.formButtons);
        this.generateCallbacks(this.existingForm.formBody);

        // this.formService.getDynamicFormById(this.formId)
        //     .then(
        //         data => {
        //             this.existingForm = data;
        //
        //             if (this.existingForm.formType === 'wizard') {
        //                 this.currentStep = 1;
        //             }
        //
        //             this.generateButtonCallbacks(data.formButtons);
        //             this.generateCallbacks(data.formBody);
        //         },
        //         err => this.fields = []
        //     );
    }

    /**
     * Go to previous page of create request modal
     */
    previousPage() {
        this.currentStep = this.currentStep - 1;
    }

    /**
     * Go to next page of create request modal
     */
    nextPage() {
        this.currentStep = this.currentStep + 1;
    }

    /**
     * Generate functions object for handling button callbacks
     * @param data
     */
    private generateButtonCallbacks(data) {
        this.fieldControlService.generateButtonCallbacks(data, this.callbackFunc, this.modalId);
    }

    /**
     * Generate functions object for handling field callbacks
     * @param data
     */
    private generateCallbacks(data) {
        this.fieldControlService.generateCallbacks(data, this.callbackFunc);
        this.buildFields(data);
    }

    /**
     * Build fields using field service
     * @param data
     */
    private buildFields(data) {
        this.fields = this.fieldService.buildFields(data);
        this.form = this.fieldControlService.toFormGroup(this.fields, this.callbackFunc);
    }
}