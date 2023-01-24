
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

 function ButtonBasic(props) {
  return (
    <Stack spacing={2} direction="row">
 
      <Button variant="outlined">{props.text}</Button>
    </Stack>
  );
}

export default ButtonBasic