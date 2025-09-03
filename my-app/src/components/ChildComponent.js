import React from "react";

class ChildComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

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
        console.log('>>>check prop', this.props);
        let {name, age} = this.props;
        return (
             <>
                <div>Child component {name} {age}</div>
                
            </> 

        );
    }
}

export default ChildComponent;