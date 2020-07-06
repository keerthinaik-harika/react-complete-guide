import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

    const [ personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ],
        otherState: 'Some other value'
    });

    console.log(personsState);

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: 'Maxmilian', age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ],
            otherState: 'Some other value'
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React app</h1>
            <p>This is really working!</p>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
};

// class App extends Component {
//     state = {
//         persons: [
//             {name: 'Max', age: 28},
//             {name: 'Manu', age: 29},
//             {name: 'Stephanie', age: 26}
//         ],
//         otherState: 'Some other value'
//     };
//
//     switchNameHandler = () => {
//         // console.log("Was Clicked!");
//         // DON'T DO THIS: this.state.persons[0].name = 'Maxmilian'
//         this.setState({
//             persons: [
//                 {name: 'Maxmilian', age: 28},
//                 {name: 'Manu', age: 29},
//                 {name: 'Stephanie', age: 27}
//             ]
//         })
//     };
//
//     render() {
//         return (
//             <div className="App">
//                 <h1>Hi, I'm a React app</h1>
//                 <p>This is really working!</p>
//                 <button onClick={this.switchNameHandler}>Switch name</button>
//                 <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//                 <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
//                 <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//             </div>
//         );
//         // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'HI I\'m React app'));
//     }
// }

export default app;
