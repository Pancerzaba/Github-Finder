import React, { Component } from 'react'

class UserItem extends Component {
    state ={
            id: 'id',
            login:'mojombo',
            awatar_url: 'https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-cute-duck-avatar-with-a-yellow-background-png-image_1770346.jpg',
            html_url: 'https://github.com/mojombo'
        };
    
    render() {
        const{login, awatar_url, html_url}=this.state;
        return (
            <div className= 'card text-center'>
                <img src={awatar_url} 
                alt=''
                className='round-img'
                style={{width: '60px'}}/>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className='btn btn-dark btn-sm my-1'>More..</a>
                </div>
            </div>
        )
    }
}

export default UserItem
