var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, inlineView, bindable } from 'aurelia-templating';
export let MyComponent = class MyComponent {
    constructor() {
        this.greeting = 'World';
    }
};
__decorate([
    bindable
], MyComponent.prototype, "greeting", void 0);
MyComponent = __decorate([
    customElement('my-component'),
    inlineView('<template>Hello ${greeting}!</template>')
], MyComponent);
