
import  React, { Component } from 'react';
import './addItems.css'


class addItems extends Component  {
  state={
        name:"",
        age:""
  }

  handleChange=(e)=>{
     this.setState({
         [e.target.id] : e.target.value
     })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(e.target.name.value !== ""){
        this.props.addItem(this.state)
        this.setState({
            name:"",
            age:""
        })
    }
  }
  render(){
    return (
        <div> 
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Ener Name...." id="name" value={this.state.name}  onChange={this.handleChange}/>
                <input type="number" placeholder="Ener age...." id="age" value={this.state.age} onChange={this.handleChange} />
                <input type="submit" value="Add"/>
            </form>

        </div>
    )
  }
}
export default addItems;