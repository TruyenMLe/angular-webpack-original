import { Component, OnInit, Input } from '@angular/core';
import { FormService, FieldControlService, FieldService } from 'form-builder';
import { BroadcastService } from 'snap/src/snap/feedback/spinner/broadcaster.service';
import { SnapLightboxService } from 'snap';

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
        private broadcastService: BroadcastService,
        private formService: FormService,
        private fieldControlService: FieldControlService,
        private fieldService: FieldService,
        private snapLightboxService: SnapLightboxService
    ) {}

    ngOnInit() {
        this.callbackFunc = {
            onSubmit: () => {
                this.submitted = true;

                this.broadcastService.broadcast('FORM_BUILDER::FORM_SUBMITTED', true);

                if (this.form.valid) {
                    this.snapLightboxService.close(this.modalId);
                }

                console.log('Dynamic form data: ');
                console.log(this.form.value);
                console.log('New request data: ');
                console.log(this.newRequest);
            }
        };
        this.customSteps = ['enter-parts-step', 'additional-attachment-step'];
        this.newRequest = {
            additionalFileList: []
        };
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
        this.formService.getDynamicFormById(this.formId)
            .then(
                data => {
                    this.existingForm = data;

                    if (this.existingForm.formType === 'wizard') {
                        this.currentStep = 1;
                    }

                    this.generateButtonCallbacks(data.formButtons);
                    this.generateCallbacks(data.formBody);
                },
                err => this.fields = []
            );
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
     * Move step to specific one that has selected field
     * @param form
     * @param name
     */
    fieldFocus(form, name) {
        let match = this.fields.filter((field) => {
            return field.key === name;
        });

        if (match && match[0]) {
            this.currentStep = match[0].step;
        }
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