import React from 'react';
import PropTypes from 'prop-types';

class ListContacts extends React.Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(()=> ({
      query: query.trim()
    }))
  }
  clearQuery = () => {
    this.updateQuery('');
  }
  
  render(){
    const { contacts, onDelete }  = this.props;
    const { query } = this.state;
    const showingContacts = query === '' ? contacts : contacts.filter( c => (
      c.name.toLowerCase().includes(query.toLowerCase())
    ))
      return (
        <div className='list-contacts'>
          
          <div className='list-contacts-top'>
            <input className='search-contacts'
            type='text'
            placeholder='Search Contacts' 
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
          {showingContacts.length !== contacts.length && (
            <div className='showing-contacts'>
              <span>Now showing {showingContacts.length} of {contacts.length}</span>
              <button onClick={this.clearQuery}>Show all</button>
            </div>
          )}
          <ol>
       {showingContacts.map(contact => (
         <li key={contact.id} className='contact-list-item'>
           <div className='contact-avatar'
           style={{
            backgroundImage: `url(${contact.avatarURL})`
          }}>
           </div>
           <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
           </div>
           <button className='contact-remove'
           onClick={() => onDelete(contact)}>
             Remove
           </button>
         </li>
       ))}
      </ol>
        </div>
      
      );
    }
  }

 ListContacts.propTypes = {
   contacts: PropTypes.array.isRequired,
   onDelete: PropTypes.func.isRequired
 }
  export default ListContacts
;