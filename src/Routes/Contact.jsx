// import { Typography } from "@mui/material"
import Form from "../components/Form"
import img1 from '../images/Files sent.gif'
import img2 from '../images/Files sent (1).gif'
import { Box } from "@mui/material"

const Contact = ({theme}) => {
    return (
        <Box id='contact' sx={{display:'flex', justifyContent: 'center', alignItems: 'center', margin: '0 3vw 0', columnGap: '0', height:'90vh'}}>
            <img id="img" src={theme ? img1 : img2} style={{width:'30vw', minWidth:'300px', marginRight:'10vw'}} alt="" />
            <Form/>
        </Box>
    )
}

export default Contact 