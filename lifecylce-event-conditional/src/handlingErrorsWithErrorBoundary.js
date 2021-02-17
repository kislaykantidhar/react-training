import React from 'react'
class ErrorBoundary extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            error:'',
            errorInfo:''
        }
    }
    componentDidCatch(error,errorInfo)
    {
        this.setState({error,errorInfo})
    }
    render()
    {
        if(this.state.error)
        {
            return(
               <div>
                   <p>there is a problem</p>
               </div> 
            )
        }
        return (
            <div>
                <p>everything fine</p>
                {this.props.children}
            </div>
            
        )
    }
}

class Experiment extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={counter:0}
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {
        let c=this.state.counter;
        c++;
        this.setState({counter:c})
    }
    render() {
        if (this.state.counter === 10) {
          // Simulate a JS error
          throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
      }

}
function HandleErrorsWithErrorBoundary()
{
    return (
        <ErrorBoundary>
            <Experiment/>
        </ErrorBoundary>
    )
}
export default HandleErrorsWithErrorBoundary;