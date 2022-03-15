import { nanoid } from "nanoid";
import React,{useState,Fragment} from "react";
import  "./App.css"
import EditableRow from "./Components/EditableRow";
import ReadOnlyRow from "./Components/ReadOnlyRow";
import data from "./mock-data.json";
const App=()=>{
 

  const [contacts,setContacts]=useState(data);
  const [addFormData,setFormData]=useState({
    firstName:"",
    lastName:"",
    phoneNumber:"",
    email:""
  })

  const [editFormData,setEditFormData]=useState({
    firstName:"",
    lastName:"",
    phoneNumber:"",
    email:""
  });

  const [editContactId,setEditContactId]=useState(null);

  const handleFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute('name');
    const fieldValue=event.target.value;
    const newFormData={...addFormData};
    newFormData[fieldName]=fieldValue;
    setFormData(newFormData);
  }

  const handleEditFormChange=(event)=>{
    event.preventDefault();
    const fieldName=event.target.getAttribute("name");
    const fieldValue=event.target.value;

    const newFormData={...editFormData};
    newFormData[fieldName]=fieldValue;
    setEditFormData(newFormData);
  }

  const handleFormSubmit=(event)=>{
    event.preventDefault();
    const newContact={
      id:nanoid(),
      firstName:addFormData.firstName,
      lastName:addFormData.lastName,
      address:addFormData.address,
      phoneNumber:addFormData.phoneNumber,
      email:addFormData.email
    }

    const newContacts=[...contacts,newContact];
    setContacts(newContacts);
  }

  const handleEditFormSubmit=(event)=>{
    event.preventDefault();
    const editedContact={
      id:editContactId,
      firstName:editFormData.firstName,
      lastName:editFormData.lastName,
      phoneNumber:editFormData.phoneNumber,
      email:editFormData.email
    }
    const newContact=[...contacts];
    const index=contacts.findIndex((contact)=>contact.id===editContactId)
    newContact[index]=editedContact;
    setContacts(newContact);
    setEditContactId(null);
  }

    const handleEditClick=(event,contact)=>{
      event.preventDefault();
      setEditContactId(contact.id);

      const formValues={
        firstName:contact.firstName,
        lastName:contact.lastName,
        phoneNumber:contact.phoneNumber,
        email:contact.email
      }
      setEditFormData(formValues);
    }

    const handleCancelClick=()=>{
      setEditContactId(null);
    }

    const deleteClick=(contactId)=>{
      const newContacts=[...contacts];
      const index=contacts.findIndex((contact)=>contact.id===contactId)
      newContacts.splice(index,1);
      setContacts(newContacts);
    }

    //  onClick={}
  return <div className="app-container">
    <h1 id="heading">Employee Dashboard</h1>
    <h2 id="heading2">Add Employee details:</h2>
    <form onSubmit={handleFormSubmit}>
      <input id="input" type="text" name="firstName" required="required" placeholder="Enter a first name" onChange={handleFormChange}/>
      <input id="input" type="text" name="lastName" required="required" placeholder="Enter a last name "onChange={handleFormChange}/>
      <input id="input" type="text" name="phoneNumber" required="required" placeholder="Enter a contact number "onChange={handleFormChange}/>
      <input id="input" type="text" name="email" required="required" placeholder="Enter an email id" onChange={handleFormChange}/>
      <button id="input" type="submit">Add</button>
      </form>

   <form onSubmit={handleEditFormSubmit}>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        
          <th>Contact Number</th>
          
          <th>Email</th>
          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact=>{
          return (<Fragment>
                 {editContactId===contact.id?<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> : <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} deleteClick={deleteClick}/> }
                </Fragment>
         
          );
        })}
       
      </tbody>
    </table> 
    </form>

   
    
  </div>;
};

export default App;
