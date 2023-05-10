import '../../App.css';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux";

import InputAdornment from '@mui/material/InputAdornment';
import Button from '../buton/Button';
import { createUserAction } from '../../Redux/Actions/usersAction';

function CreateForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [userName,setUsername] = useState('')
    const [userPass,setUserPass] = useState('')
    const [userPhone,setUserPhone] = useState(0)
    const dispatch = useDispatch()

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  
    function getUserName(e){    
      setUsername(e.target.value)
    }
     function getUserPass(e){
      setUserPass(e.target.value)
    }
    function getUserPhone(e){
      setUserPhone(e.target.value)
    }

    function createUser(){
    dispatch(createUserAction({username:userName,pass:userPass,phone:userPhone}))
    }
  
  return (
    <div className="create_user  flexcol center drtl">
<div className="max-width500 grid-form">


   <TextField onChange={getUserName} id="standard-basic" label="שם" variant="standard" />
  
   <TextField onChange={getUserPass} id="standard-basic" label="Password" variant="standard" />

  
   <FormControl fullWidth >
          <InputLabel htmlFor="outlined-adornment-amount">מייל</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">israelisraeli@gmail.com</InputAdornment>}
            label="Amount"
          />
        </FormControl>




   <TextField onChange={getUserPhone} id="standard-basic" type={'number'} InputLabelProps={{ shrink: true }} label="טלפון" variant="outlined" />
   <div className="flexrow">
<TextField id="standard-basic" label="Standard" variant="outlined" />
<TextField id="standard-basic" label="date" variant="outlined" />
</div>
   <TextField id="standard-basic" label="Standard" variant="outlined" />

 
  
       

<button onClick={createUser}>הירשם</button>
   {/* <Button  text={'הירשם'}/> */}
</div>
    </div>
  );
}

export default CreateForm;
