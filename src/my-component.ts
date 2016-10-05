import { customElement, inlineView, bindable } from 'aurelia-templating';

@customElement('my-component')
@inlineView('<template>Hello ${greeting}!</template>')
export class MyComponent {
    @bindable
    greeting: string = 'World';
}
