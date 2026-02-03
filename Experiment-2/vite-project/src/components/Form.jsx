import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Form() {
  return (
    <>
      <style>
        {`
          .form-container {
            width: 350px;
            margin: 60px auto;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
          }

          .form-container h4 {
            margin-bottom: 15px;
            font-weight: 600;
          }
        `}
      </style>

      <Paper elevation={4} className="form-container">
        <h4>Contact Form</h4>
        <TextField label="Name" fullWidth margin="normal" required />
        <TextField label="Email" type="email" fullWidth margin="normal" required />
        <Button variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Paper>
    </>
  );
}

export default Form;
