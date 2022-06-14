import React , { useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from '../redux/actions';


const AddUser = () => {
    const [state, setSate] = useState(
        {
            name: '',
            email: '',
            contact: '',
            address: '',
        }
    );

    const [error, setError] = useState("");



    let history = useHistory();
    let dispatch = useDispatch();
    const {name,email,contact,address} = state ;

    const handleInputChange =(e) => {
        let { name, value } = e.target;
        setSate({...state, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !email || !contact){
            setError('All fields are required');
        } else {
            dispatch(addUser(state))
            history.push("/");
            setError("");
        }
    }
  return (
    <div>
        <h1>Add User</h1>
        {error && <h3>{error}</h3>}
        <button onClick={()=>history.push("/")}>Go Back</button>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
        
      <TextField id="filled-basic" label="name" name="name" variant="filled" value={name} type="text" onChange={handleInputChange}/>
      <br></br>
      <TextField id="filled-basic" label="email" name="email" variant="filled" value={email} type="email" onChange={handleInputChange} />
      <br></br>
      <TextField id="filled-basic" label="contact" name="contact" variant="filled" value={contact} type="number"  onChange={handleInputChange}/>
        <br></br>
      <TextField id="filled-basic" label="address" name="address" variant="filled" value={address} type="text" onChange={handleInputChange} />
      <br></br>
      <button type="submit">Submit</button>
    </Box>
    </div>
  )
}

export default AddUser