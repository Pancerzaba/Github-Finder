import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
state={
    users:[
        {id: '1',
        login:'mojombo',
        awatar_url: 'https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-cute-duck-avatar-with-a-yellow-background-png-image_1770346.jpg',
        html_url: 'https://github.com/mojombo' 
        },
        {id: '2',
        login:'defunk',
        awatar_url: 'https://avatars2.githubusercontent.com/u/443150?s=400&v=4',
        html_url: 'https://github.com/defunk' 
        },
        {id: '3',
        login:'lovell',
        awatar_url: 'https://avatars1.githubusercontent.com/u/210965?s=400&v=4',
        html_url: 'https://github.com/lovell' 
        },
        {id: '4',
        login:'lemonpaul',
        awatar_url: 'https://avatars1.githubusercontent.com/u/26084945?s=400&u=8240325ed2dd35da6ce26ee112ec64d96cc4de71&v=4',
        html_url: 'https://github.com/lemonpaul' 
        }


    ]
}

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap:'1rem'
}

export default Users;
