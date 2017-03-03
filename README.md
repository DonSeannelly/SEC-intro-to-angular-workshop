# SEC Intro To Angular Workshop

In this workshop, you will learn the basics of Angular, and walk away with a functioning web app. This workshop was put together for a presentation to Towson University's Software Engineering Club on March 3, 2017. This repository contains all source code, as well as supporting documentation for the workshop.

## Getting Started

This workshop assumes no prior experience, and will introduce a variety of new concepts and subjects. The hope is that all participants can complete the workshop, and the contents of the workshop will serve as a springboard for further study into the concepts and subjects included.

### Installatioon Instructions

Participants must install Node.js for use in this workshop. We will also use npm, the package manager included in Node.js.

To install node, visit the [download page](https://nodejs.org/en/download/) and follow the install instructions for your system.

Once node is installed, we need to install the [Angular CLI](https://github.com/angular/angular-cli) as a global module (this allows you to use it for any project, not just the directory you are currently in).

Note we need to make sure that we have Node 6.9.0 or higher and npm 3 or higher, as they are a prerequisite for the Angular CLI. The following is an example of the commands I ran, and the resulting output:

```bash
> node -v
v6.9.0
> npm -v
v3.10.0
```
Once you have verified you have the correct versions of node and npm, it's time to install the Angular CLI:
```bash
npm install -g @angular/cli
```
Now let's generate and serve a new project using the Angular CLI we installed:
```bash
ng new PROJECT_NAME
cd PROJECT_NAME
ng serve
```
Now navigate to `http://localhost:4200/` to see the base of your web app!

## Templates

####Render a value to the view:
This value must correspond to a value in the controller. 

```javascript
My name is {{name}}
```
####Bind a variable to a component:
Again, this value must correspond to a value in the controller.
```html
<my-component [someProperty]="myValue"></my-component>
```
#### Listen for events on a component
```html
<my-component (click)="onClick($event)"></my-component>
```
#### Using a component as a template
The ```*``` as a property indicates that this component will be used as a template. ```*ngFor``` and ```*ngIf``` are two popular properties that angular provides for component templates.
```html
<my-component *ngFor="item of items"></my-component>
```