# FormGenerator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

Author: Taco Dankers
Inquiry forms and questionnaires change often, depending on the business requirement. With a form generator a form can easily be adjusted or extended without the help of a programmer.
Form-generator is a simple example that implements a generator and creates a form from a json array. This simple example generator has only two input types, a check-box and a text-field. 
The steps 
1.	Generate the application with “ng new form-generator”
2.	Create a json array with the form elements, we use a constant array, but you can also provide the json array through an api-call from a backen.
3.	Create an Angular class, that is called “FormElement”, this class represent the individual form element. 
4.	Create a parent component “master-form” that contains the top Form element and the logic to create the form and return the response.
5.	Create the child components that represents the individual input fields. These components only need a property FormElement. We can remove the constructor and ngOnInit. The html template contains the input fields. The containing <div> element has a reference to the “master” formGroup and the <input> field contains a “formControlName”. The formGroup and formControlname ties the elements to the reactive master form. 
a.	Component “master-form”
b.	Component: “text-box”
c.	Component: “check-box”
6.	Use a json array to populate an array with the FormElement classes and add for every FormElement a FormControl to the FormGroup. The json object, FormElement and FormControl are tied together by a unique “id”


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
