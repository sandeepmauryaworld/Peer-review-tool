

// import React from 'react'

// function Listing() {
//   return (
//     <div>
//     <h2 style={{color:"red"}}>
//         Feedback Listing
//     <button style={{marginleft:"50%" , position:"relative", color: "white", backgroundColor: "blue" }}>Create Feedback</button></h2>
// {/* </h2> */}
// <table className="content-table" style={{display: "contents"}}>

//     <thead>
//       <tr>
//         <th>Id</th>
//         <th>Candidate</th>
//         <th>Status</th>
//         <th>Assignee</th>
//         <th>Action</th>
//       </tr>
//     </thead>
//     <tbody/>
//       <tr>
//         <td>1</td>
//         <td>Vaishnavi</td>
//         <td>Pending</td>
//         <td>Nilesh@gmail,Test@gmail.com,</td>

//         <td>
//             <button>Edit</button>
//             <button>View</button>
//             <button>Delete</button>

//         </td>
//       </tr>

//       <tr className="active-row">
//         <td>2</td>
//         <td>Sandeep</td>
//         <td>Completed</td>
//         <td>Nilesh@gmail,Test@gmail.com,</td>


// delcontrols(i)
// {
//   this.state.addTextbox.splice(i,1),
//   this.setState({})
// };
//         <td>
//             <button>Edit</button>
//             <button>View</button>
//             <button onClick={()=>this.delcontrols(index)}>Delete</button>
// :null
//         </td>
//       </tr>


//       <tr>
//         <td>3</td>
//         <td>Yash</td>
//         <td>Pending</td>
//         <td>Sagar@gmail,mail@gmail.com,</td>

//         <td>
//             <button>Edit</button>
//             <button>View</button>
//             <button>Delete</button>

//         </td>
//       </tr>

//       <tr className="active-row">
//         <td>4</td>
//         <td>Rohan</td>
//         <td>Completed</td>
//         <td>Nilesh@gmail,Test@gmail.com</td>

//         <td>
//             <button>Edit</button>
//             <button>View</button>
//             <button>Delete</button>

//         </td>
//       </tr>
//       <tr>
//         <td>5</td>
//         <td>Mohan</td>
//         <td>Pending</td>
//         <td>Nilesh@gmail,Test@gmail.com,</td>

//         <td>
//             <button>Edit</button>
//             <button>View</button>
//             <button>Delete</button>

//         </td>
//       </tr>  <tr>
//         <td>6</td>
//         <td>Sohan</td>
//         <td>Pending</td>
//         <td>Nilesh@gmail,Test@gmail.com,</td>

//         <td>
//             <button>Edit</button>
//             <button>View</button>
//             <button>Delete</button>

//         </td>
//       </tr>

//       <td>7</td>
//       <td>mohan</td>
//       <td>Pending</td>
//       <td>Nilesh@gmail,Test@gmail.com,</td>

//       <td>
//           <button>Edit</button>
//           <button>View</button>
//           <button>Delete</button>

//       </td>
//     <tr/>
//     <td>8</td>
//     <td>rohan</td>
//     <td>Pending</td>
//     <td>Nilesh@gmail,Test@gmail.com,</td>

//     <td>
//         <button>Edit</button>
//         <button>View</button>
//         <button>Delete</button>


//     </td>
//   <tr/>
//     <tbody/>
//   </table>

//   </div>
//   )
// }

// export default Listing


import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
// import "./App.css";
import data from "../mock-data.json";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";

const Listing = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    address: "",
    phoneN: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
            
              {/* <th>Name</th> */}
              <th>Candidate</th>
              <th>status</th>
              <th>Assignee</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      {/* <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        /> */}
        {/* <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        /> */}
        <button type="submit">Create  feedback</button>
      {/* </form> */}
    </div>
  );
};

export default Listing;

