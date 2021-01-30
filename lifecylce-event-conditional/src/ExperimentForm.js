import React from 'react';

class ExperimentForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            country:'',
            flavour:'mango'
        }
        this.submissionExecute=this.submissionExecute.bind(this);
        this.nameChangeHandler=this.nameChangeHandler.bind(this);
        this.countryChangeHandler=this.countryChangeHandler.bind(this); 
        this.flavorChangeHandler=this.flavorChangeHandler.bind(this);     
    }
    submissionExecute(e)
    {
        // this will be executed only on submission
        console.log(this.state);
        e.preventDefault();
    }
    nameChangeHandler(event)
    {
        //this will excecute on changing the name or input
        this.setState({name:event.target.value}); 
    }
    countryChangeHandler(event)
    {
        // this will also be a handler just like nameChangeHandler
        this.setState({country:event.target.value});
    }
    flavorChangeHandler(event)
    {
        // to control state of selection
        this.setState({flavour:event.target.value})
    }
    render()
    {
        return(
            <form onSubmit={this.submissionExecute}>
                <label>
                    what's your name?<input type="text" value={this.state.name} onChange={this.nameChangeHandler} />
                </label>
                <label>
                    which country do you live in?<input type ="text" value={this.state.country} onChange={this.countryChangeHandler} />
                </label>
                <label>
                Pick your favorite flavor:
                <select value={this.state.flavour} onChange={this.flavorChangeHandler}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label>
                <input type="submit" value ="submit"/>
            </form>
        )
    }

}

export default ExperimentForm;