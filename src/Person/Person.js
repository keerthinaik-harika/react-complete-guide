import React from 'react';
import styled from 'styled-components';
// import './Person.css'

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid orangered;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
            width: 450px;
    }
`;

const person = (props) => {

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and {props.age} years old.</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
        // </div>
    )
};

export default person;