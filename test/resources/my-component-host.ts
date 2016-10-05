import { inlineView } from 'aurelia-templating';

@inlineView(`
<template>
  <my-component id="helloWorld" greeting.bind="name"></my-component>
</template>`)
export class MyComponentHost {
    name: string = 'World';
}
