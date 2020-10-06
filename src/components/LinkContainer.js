import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    
    state={
        linkData:[]
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */

        // remove item form the state.
        this.state.linkData.splice(index,1);

        //set new state

        this.setState([...this.state.linkData])


    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */

        console.log(favLink)
        this.setState((prev,current)=>(
               {linkData:prev.linkData.concat(favLink)}
            ))
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
               <Table linkData={this.state.linkData} removeLink={this.removeCharacter.bind(this)}/>
                
                <br/>

                <h3>Add New</h3>
                <Form  addNew={this.handleSubmit.bind(this)}/>
            </div>
        );
    }
}

export default LinkContainer;