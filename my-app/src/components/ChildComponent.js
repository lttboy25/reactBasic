import React from "react";
//class component
 class ChildComponent extends React.Component {

    state = {
        showScore: false
    }

    handleShowHide = () => {
    this.setState({
        showScore: !this.state.showScore
    });
}
    render() {
        console.log(">>> check prop", this.props)
        let {name, age, arrStudent} = this.props;
        let {showScore} = this.state;
        let check = this.state.showScore;
        return( 
            <>
                {showScore === false ?
                    <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                            
                        <div className="student-list">
                            {
                                
                                arrStudent.map((item, index) => {
                                    return(
                                        <div key={item._id}>
                                            {item._id} - {item.nameStudent} - {item.score}
                                        </div>
                                    )
                                })
                                    
                                
                            }
                        </div>
                
                    </>
            
                }
                {/* {showScore === false &&
                    <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                
                }
                {showScore === true && 
                    <>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                            
                        <div className="student-list">
                            {
                                
                                arrStudent.map((item, index) => {
                                    return(
                                        <div key={item._id}>
                                            {item._id} - {item.nameStudent} - {item.score}
                                        </div>
                                    )
                                })
                                    
                                
                            }
                        </div>
                
                    </>
                } */}
                

            </>
        );
    };
    
}


//function component

// const ChildComponent = (props) => {
//     const handleClick = () => {
//         let a = 1;
//         a++;
//         alert(a);
//     }
    
//        console.log('>>>check prop', props);
//         let {name, age, arrStudent} = props;
//        return(
//             <>
//                 <div className="student-list">
//                     {
//                         arrStudent.map((items, index) => {
//                             if (items.score >= 8) {
//                                 return(
                                    
//                                     <div key={items._id}>
//                                         {items.nameStudent} - {items.score}
//                                     </div>
//                                 );
                                    
//                                 }
//                         })

//                     }
//                     <button id="btn" onClick={() => handleClick()}>
//                         click me
//                     </button>
                    
//                 </div>
//             </>

//        )
   
// }
export default ChildComponent;