import React from 'react';

const ReadOnlyRow=({contact,handleEditClick,deleteClick})=>{
    return (<tr>
           <td>{contact.firstName}</td>
           <td>{contact.lastName}</td>
           <td>{contact.phoneNumber}</td>
           <td>{contact.email}</td>
           <td>
               <button type="button" onClick={(event)=>{handleEditClick(event,contact)}}>Edit</button>
               <button type="button" onClick={()=>{deleteClick(contact.id)}}>Delete</button>     
           </td>
           </tr>
    );
};

export default ReadOnlyRow;


