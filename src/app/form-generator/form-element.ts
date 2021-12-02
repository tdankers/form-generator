import { FormGroup } from "@angular/forms";

export class FormElement{
    id = '';
    type ='';
    label = '';
    placeholder = '';
    errorMessage = '';
    error = false;
    formGroup: FormGroup = new FormGroup({});
}