import React from 'react';

class Clock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {date :new Date()}
    }
    changeTime()
    {
        console.log('changing time');
        this.setState({date: new Date});
    }
    componentWillMount()
    {   
        //this will be removed in future as react team says this legacy component lifecycles tend to encourage unsafe coding practices
        console.log("component will mount")
    }
    componentWillUnmount()
    {
        console.log('component will unmount');
        clearInterval(this.timerId);
    }
    componentDidMount()
    {
        console.log("component did mount");
        
        this.timerId=setInterval(()=>{this.changeTime()},1000);

    }
    render()
    {
        return(
            <h1>{this.props.name}{this.state.date.toTimeString()}</h1>
        )
    }
}

export default Clock;