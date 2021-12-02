import { Component, Input } from '@angular/core';
import { FormElement } from '../form-generator/form-element';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent  {

  @Input() formElement: FormElement = new FormElement();
}
