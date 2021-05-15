import React from 'react';
import ReactDOM from 'react-dom';

const elem = React.createElement('div', {}, `Hello World`);
ReactDOM.render(elem, document.body);