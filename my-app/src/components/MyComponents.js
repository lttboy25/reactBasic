import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponents extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

    /*
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleClickSubmitButton = () => {
        alert("you clicked submit button");
    } */

    handleOnchangeFirstName = (event)=> {
        this.setState({
            firstName: event.target.value
        });
    }
    handleOnchangeLastName = (event)=> {
        this.setState({
            lastName: event.target.value
        });
    }

    handleSubmitButton = (event) => {
        event.preventDefault();
        console.log("check data input after click submit: ", this.state);
    }
    
    render() {
        console.log(">>>check state", this.state);
        return (
             <>
                <form>
                    <label>Input first name</label> <br />
                    
                    <input
                        type="text" 
                        value={this.state.firstName}
                        onChange={(event) => this.handleOnchangeFirstName(event)}
                    /> 
                    <br />
    
                    <label>Input last name</label> <br />
                    <input
                        type="text" 
                        value={this.state.lastName}
                        onChange={(event) => this.handleOnchangeLastName(event)}
                    /> 
                    
                    <br />
    
                    <input 
                    
                        type="submit" 
                        value="Submit" 
                        onClick={(event) => this.handleSubmitButton(event)}
                    />
                </form>
                {/*                 
                    <input 
                        value={this.state.name} 
                        type="text" 
                        onChange={this.handleOnChangeInput} 
                    />
                    <div className="submit-button" >
                        <button onClick={ () => this.handleClickSubmitButton()} >Submit</button>
                    </div>
                 */}

                 <ChildComponent
                    name = {'tung'}
                    age = {'25'}
                 />
            </>

        );
    }
}

export default MyComponents;