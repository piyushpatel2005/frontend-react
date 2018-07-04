# Front End App Development with React

React is a JS library for building user interfaces. It is declarative in nature and it has component based design. It is technology agnostic. React was developed at Facebook for newsfeed in 2011.

## Requirements:

- Node v8.11.1
- npm v5.6.0
- yarn v1.7.0

```shell
npm install -g create-react-app@1.5.2
create-react-app --help
mkdir react
cd react
create-react-app confusion
cd confusion
yarn start
```

The component is React is actually a class that extends Component class from react module. This class contains `render()` method which actually returns the html that is displayed on the UI.

**JSX** is actually similar to JavaScript. So, we have to use *className* rather than *class* to specify class attribute for html element. 

`ReactDOM.render(<App/>, document.getElementById('root'));` 
This statement specifies where the App component will be rendered.


