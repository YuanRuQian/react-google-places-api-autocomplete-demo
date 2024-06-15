import { Typography } from "@mui/material";
import AddressFormWithAutoComplete from "./components/AddressFormWithAutoComplete";
import AutoComplete from "./components/AddressAutoComplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4">The Default AutoComplete</Typography>
      <AutoComplete />
      <Typography variant="h4">
        Customized Address Form with AutoComplete
      </Typography>
      <AddressFormWithAutoComplete />
    </ThemeProvider>
  );
}

export default App;
