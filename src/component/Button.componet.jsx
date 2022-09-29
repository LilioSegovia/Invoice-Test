import { TextField, Grid } from "@mui/material";

const defaultFormFields = {
    clientName: "",
    billTo: "",
    shipTo: "",
  };

 const TestTextField = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { clientName
    } = formFields
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };
  return (
    <Grid>
      <TextField
      label="clientName"
              type="text"
              onChange={handleChange}
              name="clientName"
              value={clientName}
              variant="outlined" />
    </Grid>
  );
};

export default TestTextField