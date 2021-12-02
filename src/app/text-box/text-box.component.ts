import { Component, Input } from '@angular/core';
import { FormElement } from '../form-generator/form-element';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent {

  @Input() formElement: FormElement = new FormElement();

}
