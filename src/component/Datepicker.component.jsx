import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


const DatePicker = () => {
    const [value, setValue] = React.useState();
    const handleChange = (newValue) => {
        setValue(newValue);
      };
    return (
        <DateTimePicker
          label="Date picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    )
}

export default DatePicker