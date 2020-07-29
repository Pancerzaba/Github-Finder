import React, { Component } from 'react'

export class Search extends Component {
    state={
        text: ''
    };

    onChange = (e) => 
        this.setState({ [e.target.name]: e.target.value});
    

    render() {
        return (
            <div>
                <form onSubmit ={this.onSubmitlassName='form'>
                    <input type='text' name='text' placeholder='Serch Users...' />
                    <input type='submit' value='Search' className='btn btn-dark btn-block'/>
                    onChange={this.onChange}
                </form>
            </div>
        )
    }
}

export default Search
