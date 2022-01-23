import { createTheme } from "@material-ui/core"
import { purple, blue } from "@material-ui/core/colors"

export const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        }
    },
    textColor: {
        primary: purple[500],
    },
    roundCorner: {
        borderRadius: "100px",
    }
})