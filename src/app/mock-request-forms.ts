export const REQUEST_FORM = {
    "_id" : "592dc2ea59e86c0c72bacf06",
    "formLayout" : "twoColumn",
    "formButtons" : [
        {
            "callbackFunc" : "onSubmit",
            "value" : "Submit",
            "type" : "Primary"
        }
    ],
    "formName" : "Create New Request",
    "description" : "List of request fields for making request",
    "formType" : "wizard",
    "steps" : [
        {
            "value" : 1,
            "name" : "One"
        },
        {
            "value" : 2,
            "name" : "Two"
        }
    ],
    "formTitle" : "Create New Request",
    "createdDate" : "2017-05-30T19:07:22.655Z",
    "updatedDate" : "2017-05-30T19:07:22.655Z",
    "formBody" : [
        {
            "colSpan" : "one",
            "step" : 1,
            "hasHelperText" : false,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "header",
            "order" : 1,
            "label" : "Created By",
            "key" : "createdByLabel",
            "value" : null
        },
        {
            "colSpan" : "one",
            "step" : 1,
            "hasHelperText" : false,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "header",
            "order" : 2,
            "label" : "Product",
            "key" : "productLabel",
            "value" : null
        },
        {
            "placeholderText" : "",
            "hasPlaceholderText" : false,
            "type" : "text",
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "textbox",
            "order" : 3,
            "label" : "Submitter",
            "key" : "submitter",
            "value" : null
        },
        {
            "options" : [
                {
                    "value" : "LENOVO",
                    "key" : "lenovo"
                },
                {
                    "value" : "VMWARE",
                    "key" : "vmware"
                }
            ],
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "dropdown",
            "order" : 4,
            "label" : "Line",
            "key" : "lineDropdown",
            "value" : null
        },
        {
            "colSpan" : "one",
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "header",
            "order" : 5,
            "label" : "Reseller",
            "key" : "resellerLabel",
            "value" : null
        },
        {
            "colSpan" : "one",
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "header",
            "order" : 6,
            "label" : "Additional Details",
            "key" : "additionalDetailsLabel",
            "value" : null
        },
        {
            "openLookupModal" : "",
            "lookupFunction" : "",
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "combobox",
            "order" : 7,
            "label" : "Name",
            "key" : "nameCombobox",
            "value" : null
        },
        {
            "stacked" : false,
            "options" : [
                {
                    "value" : "Yes",
                    "key" : "Y"
                },
                {
                    "value" : "No",
                    "key" : "N"
                }
            ],
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : "N",
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "radio",
            "order" : 8,
            "label" : "Require Engineering Services Review",
            "key" : "resrRadio",
            "value" : null
        },
        {
            "colSpan" : "two",
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "header",
            "order" : 9,
            "label" : "Contact Information",
            "key" : "contactInfoLabel",
            "value" : null
        },
        {
            "placeholderText" : "",
            "hasPlaceholderText" : false,
            "type" : "text",
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "textbox",
            "order" : 10,
            "label" : "Supplier Quote Number",
            "key" : "supplierQuoteNumber",
            "value" : null
        },
        {
            "openLookupModal" : "",
            "lookupFunction" : "",
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "combobox",
            "order" : 11,
            "label" : "Email",
            "key" : "emailContactInfo",
            "value" : null
        },
        {
            "placeholderText" : "",
            "hasPlaceholderText" : false,
            "type" : "text",
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "textbox",
            "order" : 12,
            "label" : "Quote Name",
            "key" : "quoteNameContactInfo",
            "value" : null
        },
        {
            "colSpan" : "two",
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "header",
            "order" : 13,
            "label" : "Assigned To",
            "key" : "assignedTo",
            "value" : null
        },
        {
            "options" : [],
            "step" : 1,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "dropdown",
            "order" : 14,
            "label" : "Name",
            "key" : "asisgnedToList",
            "value" : null
        },
        {
            "colSpan" : "one",
            "step" : 2,
            "hasHelperText" : false,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "header",
            "order" : 15,
            "label" : "End User",
            "key" : "endUserLabel",
            "value" : null
        },
        {
            "colSpan" : "one",
            "step" : 2,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "header",
            "order" : 16,
            "label" : "Contact Information",
            "key" : "contactInfoStepTwo",
            "value" : null
        },
        {
            "openLookupModal" : "",
            "lookupFunction" : "",
            "step" : 2,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "combobox",
            "order" : 17,
            "label" : "Name",
            "key" : "endUserName",
            "value" : null
        },
        {
            "placeholderText" : "e.g. John Doe",
            "hasPlaceholderText" : true,
            "type" : "text",
            "step" : 2,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "textbox",
            "order" : 18,
            "label" : "Name",
            "key" : "nameContactInfoStepTwo",
            "value" : null
        },
        {
            "step" : 2,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "blank",
            "order" : 19,
            "label" : "",
            "key" : "",
            "value" : null
        },
        {
            "placeholderText" : "",
            "hasPlaceholderText" : false,
            "type" : "text",
            "step" : 2,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "textbox",
            "order" : 20,
            "label" : "Phone",
            "key" : "phoneContactInfo",
            "value" : null
        },
        {
            "step" : 2,
            "hasHelperText" : false,
            "helperText" : null,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "blank",
            "order" : 21,
            "label" : "",
            "key" : "",
            "value" : null
        },
        {
            "placeholderText" : "",
            "hasPlaceholderText" : false,
            "type" : "text",
            "step" : 2,
            "hasHelperText" : false,
            "position" : "L",
            "onModelChange" : "onModelChange",
            "model" : null,
            "hidden" : false,
            "formControls" : [],
            "source" : null,
            "controlType" : "textbox",
            "order" : 22,
            "label" : "Email",
            "key" : "emailContactInfo",
            "value" : null
        }
    ],
    "__v" : 0
};