import React from "react";

class MyComponents extends React.Component {
    state = {
        name: "" // khai báo state ban đầu
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.name} 
                    type="text" 
                    onChange={this.handleOnChangeName} 
                />
                <h1>Hello, my name is {this.state.name}!</h1>
            </div>
        );
    }
}

export default MyComponents;