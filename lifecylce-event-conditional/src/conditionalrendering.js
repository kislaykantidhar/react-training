import React from 'react';

class ShowPosts extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={posts:""}

    }
    getPosts=()=>{
        this.setState({posts:"your daily posts"});
    }
    render(){
        return(
        <div>
            <button onClick={this.getPosts}>Show posts</button>
            {this.state.posts}
        </div>
        )
    }
}
function ShowContent(props){
    if(props.loggedIn) return <ShowPosts/>
    return <p>you must loggin to see posts</p>
}
class IsLoggedIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={isLogged:false};
        this.loggedStatus = this.loggedStatus.bind(this);
    }
    
    loggedStatus(){
        this.setState({isLogged:!this.state.isLogged});
    }
    render()
    {
        return (
            <div>
                {this.state.isLogged?'you are logged':'you are not logged'}
                <button onClick={this.loggedStatus}>{!this.state.isLogged?'login':'signout'}</button>
                <ShowContent loggedIn={this.state.isLogged}/>
            </div>  
            
        )
    }
}

class ConRender extends React.Component
{
    render()
    {
        return(
            <IsLoggedIn/>
        )
    }
}

export default ConRender