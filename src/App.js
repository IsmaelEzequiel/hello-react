import React, { Component } from 'react';

import Header from './components/header';
import Todo from './components/todo';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
		        <Todo />
            </div>
        );
    }
};

export default App;
