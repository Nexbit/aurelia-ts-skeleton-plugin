System.register(['aurelia-templating'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var aurelia_templating_1;
    var MyComponent;
    return {
        setters:[
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            }],
        execute: function() {
            MyComponent = (function () {
                function MyComponent() {
                    this.greeting = 'World';
                }
                __decorate([
                    aurelia_templating_1.bindable
                ], MyComponent.prototype, "greeting", void 0);
                MyComponent = __decorate([
                    aurelia_templating_1.customElement('my-component'),
                    aurelia_templating_1.inlineView('<template>Hello ${greeting}!</template>')
                ], MyComponent);
                return MyComponent;
            }());
            exports_1("MyComponent", MyComponent);
        }
    }
});
