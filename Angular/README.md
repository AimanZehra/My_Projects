## Environment setup

1. Install latest version of nodejs

2. Install angular CLI->
* 'npm install -global @angular/cli@latest'

3. To create an angular project->
* 'ng new Project-name'

4. To compile and run an Angular project we use->
* 'ng serve' or 'npx ng serve'

* When we run angular app, index.html file gets rendered in the webpage. This is the main HTML filewhose content will change when we navigate around or do some other stuffs on webpage.

* An angular app consist of component and by default angular CLI provides us with one App Component.

* Each component has four important files component.ts, component.html, component.css & component.spec.ts file. component.ts is the main component file.

### Component
1. A Class -> It ontains the code required for the view template.
2. A ViewTemplate -> It defines the user interface. It contains the HTML, directives & data binding.
3. A Decorator -> It adds meta data to the class, making it a component.
4. In order to use the component class, we need to export component class and register it in the modules file.
