import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person'
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Manu', age: 29},
            {id: '3', name: 'Stephanie', age: 26}
        ],
        otherState: 'Some other value',
        showPersons: false
    };


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });

    };

    deletePersonHandler = (personIndex) => {
        // vanilla syntax slice() will create a copy of array
        // const persons = this.state.persons.slice();
        // ES6 syntax
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({
            persons: persons
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        });
    };

    render() {

        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <ErrorBoundary key={person.id}>
                                <Person
                                    click={() => this.deletePersonHandler(index)}
                                    changed={(event) => this.nameChangedHandler(event, person.id)}
                                    name={person.name}
                                    age={person.age}
                                />
                            </ErrorBoundary>
                        })
                    }
                </div>
            );

            btnClass = classes.Red
        }

        let assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React app</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button
                    className={btnClass}
                    onClick={() => this.togglePersonsHandler('Maxmilian!!')}>Toggle Names
                </button>
                {persons}
            </div>
        );
    }
}

export default App;