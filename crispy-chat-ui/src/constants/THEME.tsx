import { createMuiTheme } from "@material-ui/core/styles";
import { STYLE_COLOR } from "./STYLE_COLOR";

const THEME = createMuiTheme({
  palette: {
    primary: {
      main: STYLE_COLOR.PRIMARY_COLOR
    },
    secondary: {
      main: STYLE_COLOR.SECONDARY_COLOR
    }
  },
});

export { THEME };