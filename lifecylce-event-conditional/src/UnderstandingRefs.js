import React from 'react';

class UnderstandingRefs extends React.Component {
    constructor(props)
    {
        super(props);
        this.inputRef = React.createRef();
    }
    componentDidMount()
    {
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }
    handleClick=()=>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

export default UnderstandingRefs;