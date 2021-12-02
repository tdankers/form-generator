import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { exampleForm } from '../form-generator/example-form';
import { FormElement } from '../form-generator/form-element';

@Component({
  selector: 'app-master-form',
  templateUrl: './master-form.component.html',
  styleUrls: ['./master-form.component.css']
})
export class MasterFormComponent implements OnInit {
  
  formGroup : FormGroup = new FormGroup({});
  formElementArray : Array<FormElement> = [];
  result ="";
  
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() : void{
    exampleForm.forEach(element =>{
      this.formElementArray.push({
        id: element.id,
        type: element.type,
        label: element.label,
        placeholder: element.placeholder,
        errorMessage: element.errorMessage,
        error : false,
        formGroup: this.formGroup
      });
      this.formGroup.addControl(element.id, new FormControl('',[Validators.required]))
    })
  }
  onFormSubmit() : void{
    const item :{[key:string]:string} = {};
    this.formElementArray.forEach(element=>{
      if(this.formGroup.get(element.id)?.invalid)
      {
        element.error = true;
      }
      else{
        item[element.id] =this.formGroup.get(element.id)?.value;
      }

    });
    this.result = JSON.stringify(item);
  }
}
