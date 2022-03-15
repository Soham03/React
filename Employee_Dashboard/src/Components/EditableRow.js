import React from 'react';
const EditableRow=({editFormData,handleEditFormChange,handleCancelClick})=>{
    return(<tr>
        <td> <input type="text" name="firstName" required="required" placeholder="Enter a first name" value={editFormData.firstName} onChange={handleEditFormChange}/></td>
        <td> <input type="text" name="lastName" required="required" placeholder="Enter a last name " value={editFormData.lastName} onChange={handleEditFormChange}/></td>
        <td> <input type="text" name="phoneNumber" required="required" placeholder="Enter a contact number" value={editFormData.phoneNumber} onChange={handleEditFormChange}/></td>
        <td> <input type="text" name="email" required="required" placeholder="Enter an email id" value={editFormData.email} onChange={handleEditFormChange}/></td>
        <td> <button type="submit">Save</button></td>
        <td><button type="button" onClick={handleCancelClick}>Cancel</button></td>
        </tr>  
    )
}
export default EditableRow;