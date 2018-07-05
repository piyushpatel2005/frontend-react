# Front End App Development with React

React is a JS library for building user interfaces. It is declarative in nature and it has component based design. It is technology agnostic. React was developed at Facebook for newsfeed in 2011.

## Requirements:

- Node v8.11.1
- npm v5.6.0
- yarn v1.7.0
- React 16.3

```shell
npm install -g create-react-app@1.5.2
create-react-app --help
mkdir react
cd react
create-react-app confusion
cd confusion
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

The component is React is actually a class that extends Component class from react module. This class contains `render()` method which actually returns the html that is displayed on the UI.

**JSX** is actually similar to JavaScript. So, we have to use *className* rather than *class* to specify class attribute for html element. 

`ReactDOM.render(<App/>, document.getElementById('root'));` 
This statement specifies where the App component will be rendered.

Each React component should be named with uppercase letter. Each react component extends `Component` class and it has to implement `render()` method. Each component is a class and its state defines its properties. The state of the component cannot be changed directly, but it has to be changed through `this.setState()` method.
In JSX, attributes are passed into a component as a single object. If we have attribute `dishes` in parent component, the same can be accessed through child component as `this.props.dishes`.

To handle event, we create event handler functions as `<Card onClick={() => this.onDishSelect(dish)}>`
We need to pass the state to parent component so that all siblings have same state. This can be done on an event by passing the property to the parent.

Every class component has lifecycle associated with it. React component goes through following lifecycle stages
- mounting
- updating
- unmounting

There are lifecycle methods available in each stage.
In the mounting stage, constructor, getDerivedStateFromProps, render, componentDidMount methods are called.
In the updating 