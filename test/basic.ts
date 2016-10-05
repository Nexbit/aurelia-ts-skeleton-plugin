import { StageComponent, ComponentTester } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';
import { MyComponentHost } from './resources/my-component-host';
import { configure } from './shared';

describe('end to end', () => {
    it('basic scenarios', (done: () => void) => {
        const component: ComponentTester = StageComponent
            .withResources()
            .inView('<my-component-host></my-component-host>')
            .boundTo({});
        component.bootstrap(configure);

        let myComponentElement: HTMLElement;

        let viewModel: MyComponentHost;

        (component.create(bootstrap as any))
            // grab some references.
            .then(() => {
                viewModel = component.viewModel;
                myComponentElement = component.element.querySelector('#helloWorld') as HTMLElement;
            })
            // the content of the element should be equal to "Hello World!"
            .then(() => expect(myComponentElement.innerText).toBe('Hello World!'))
            // make a model change to the name field.
            .then(() => viewModel.name = 'Aurelia')
            // the content of the element should be equal to "Hello Aurelia!"
            .then(() => expect(myComponentElement.innerText).toBe('Hello Aurelia!'))

            // cleanup and finish.
            .then(() => component.dispose())
            .then(done);
    });
});
