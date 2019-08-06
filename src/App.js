import React from 'react';
import './App.css';
import ListContacts from './components/ListContacts'

class App extends React.Component{
  state = {
    contacts : [	
      {	
        id: 'tyler',	
        name: 'Tyler McGinnis',	
        handle: '@tylermcginnis',	
        avatarURL: 'http://localhost:5001/tyler.jpg'	
      },	
      {	
        id: 'karen',	
        name: 'Karen Isgrigg',	
        handle: '@karen_isgrigg',	
        avatarURL: 'http://localhost:5001/karen.jpg'	
      },	
      {	
        id: 'richard',	
        name: 'Richard Kalehoff',	
        handle: '@richardkalehoff',	
        avatarURL: 'http://localhost:5001/richard.jpg'	
      },	
    ]
  }

  removeContact = (contact) => {
    this.setState( (currentState) => ({
      contacts: currentState.contacts.filter(c => c.id !== contact.id)
    }))
  }

  render(){
    return(
        <div className="App">
          <ListContacts contacts={this.state.contacts}
          onDelete={this.removeContact}/>
        </div>
    )
  }
}



export default App;
