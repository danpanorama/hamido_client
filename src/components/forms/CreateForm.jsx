import '../../App.css';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";

import InputAdornment from '@mui/material/InputAdornment';
import Button from '../buton/Button';

function CreateForm() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  
  
  return (
    <div className="create_user  flexcol center drtl">
<div className="max-width500 grid-form">


   <TextField id="standard-basic" label="שם" variant="standard" />
  
   <TextField id="standard-basic" label="Password" variant="standard" />

  
   <FormControl fullWidth >
          <InputLabel htmlFor="outlined-adornment-amount">מייל</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">israelisraeli@gmail.com</InputAdornment>}
            label="Amount"
          />
        </FormControl>




   <TextField id="standard-basic" type={'number'} InputLabelProps={{ shrink: true }} label="טלפון" variant="outlined" />
   <div className="flexrow">
<TextField id="standard-basic" label="Standard" variant="outlined" />
<TextField id="standard-basic" label="date" variant="outlined" />
</div>
   <TextField id="standard-basic" label="Standard" variant="outlined" />

 
  
       


   <Button text={'הירשם'}/>
</div>
    </div>
  );
}

export default CreateForm;
