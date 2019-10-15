import React from 'react';
import ReactDOM from "react-dom";
console.log("hello");
const element = <h1>Hello Woeld!</h1>;
ReactDOM.render(element, document.getElementById('root'));
class Hello extends React.Component {
    render() {
      return <h1>Hello World!</h1>
    }
  }
