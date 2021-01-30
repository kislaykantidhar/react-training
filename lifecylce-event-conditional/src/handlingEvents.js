import React from "react";

function ALink() {
    function hClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <a href="www.google.com" onClick={hClick}>
        Click me
      </a>
    );
}
// I do think that binding is a bit confusing
class WithBind extends React.Component{
    constructor(props){
        super(props);
        this.state={toggleOn:true}
        this.toggle=this.toggle.bind(this)
    }
    toggle(){
        this.setState(state=>({toggleOn:!state.toggleOn}))
    }
    render()
    {
        return (
            <button onClick={this.toggle}>{this.state.toggleOn?'ON':'OFF'}</button>
        )
    }
}
//liked this aproach more
class WithOutBind extends React.Component{
    constructor(props){
        super(props);
        this.state={toggleOn:true}
        // this.toggle=this.toggle.bind(this)
    }
    toggle=()=>{
        this.setState(state=>({toggleOn:!state.toggleOn}))
    }
    render()
    {
        return (
            <button onClick={this.toggle}>{this.state.toggleOn?'ON':'OFF'}</button>
        )
    }
}
//another way is using callbacks with arrow functions - however this way is not good as it generates multile call backs and may hamper te performance
class LoggingButton extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
      );
    }
  }
class handlingEvent extends React.Component
{
    render()
    {
        return(
            <div>
                <ALink/>
                <WithBind/>
                <WithOutBind/>
                <LoggingButton/>
            </div>
            
        );
    }
}

export default handlingEvent;