import React from 'react';

class User extends React.Component {
    state = { 
        username: 'Tyler'
     }
    render() { 
        return ( 
        <p>
            Username: {this.state.username}
        </p>);
    }
}
 
export default User;