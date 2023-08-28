import { Box, TextField, Button, Typography, Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { getRandomColor } from "./Landing";
import { useState, useEffect } from "react";
import '../App.css'
import ReCAPTCHA from "react-google-recaptcha";

import { useTranslation } from "react-i18next";

const width = {
    width: '15vw',
    minWidth: '170px'
}


const Form = ({theme}) => {
    const [color, setColor] = useState(getRandomColor());
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [sent, setSent] = useState(null)
    const [open, setOpen] = useState(true);

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
          const newColor = getRandomColor();
          setColor(newColor);
        }, 3000);
        return () => clearInterval(intervalId);
      }, []);
    const sendEmail = (e) => {
        e.preventDefault();
        if (!recaptchaValue) {
            // Display an error message or take appropriate action
            return;
        }

        const serviceId = 'service_ax6rjre';
        const templateId = 'template_wb2k7cm';
        const userId = 'ajYgf-wmRFz9yN0Z0';

        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then(() => {
               setSent(true)
            }, () => {
                setSent(false)
            });
    };
    const {t} = useTranslation();

    return (
        <Box id='form'sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
                    {/* <svg style={{transform: 'scale(.8)', position:'absolute', top:'5%', left:'15%', zIndex: '0', overflow:'hidden', opacity: '30%'}}xmlns="http://www.w3.org/2000/svg" width="90%" height="100%">
          <image   xlinkHref="/blob.svg" width="125%" height="100%" />
        </svg> */}
            
            <Typography className='fade-in' variant='h1' style={{ margin: '10vh', fontSize: '2rem', fontWeight: '600', marginBottom: '2vh', textAlign: 'center'}}>{t("Send me a .1")}<mark style={{backgroundColor: color, transition: '1s'}}>{t("message!.1")}</mark></Typography>
            <Typography className='fade-in-p' sx={{marginBottom: '10vh', color: 'gray', textAlign: 'center'}} variant="h6">{t("If you want to ask a question or hire me fill the form below!.1")}</Typography>
            <form className='fade-in-p' style={{display: 'flex', justifyContent: 'center', alignItems: 'center',gap: '5vh', flexDirection: 'column',}}onSubmit={sendEmail}>
                <Box sx={{ display: 'flex', gap: '5vw', flexWrap:'wrap'}}>
                    <TextField name="name" variant="outlined" label={t("Your name.1")} sx={width} color="info" />
                    <TextField name="email" variant="outlined" label={t("Your email.1")} sx={width} color="info" />
                </Box>
                <TextField name="message" variant="outlined" label={t("Your message.1")} sx={{ width: '35vw', minWidth: '370px' }} color="info" multiline />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
                {theme ? <ReCAPTCHA
                    sitekey="6LdmgsYnAAAAAM1iCVauGdm85Hg3XgDuphpABjNq"
                    onChange={handleRecaptchaChange}
                    size="normal"
                    theme= 'light'
                />: <ReCAPTCHA
                sitekey="6LdmgsYnAAAAAM1iCVauGdm85Hg3XgDuphpABjNq"
                onChange={handleRecaptchaChange}
                size="normal"
                theme= 'dark'
            />}
                
                    <Button type="submit" variant="" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5vw' }}>
                        {t("Send.1")} <SendIcon sx={{ fontSize: '1.1rem', marginBottom: '2px' }} />
                    </Button>
                    {sent === true ? (
                        <Collapse in={open}>
                        <Alert
                          action={
                            <IconButton
                              aria-label="close"
                              color="inherit"

                              onClick={() => {
                                setOpen(false);
                              }}
                            >
                              <CloseIcon fontSize="inherit" />
                            </IconButton>
                          }
                          sx={{ mb: 2 }}
                        >
                          Email has been set Successfuly
                        </Alert>
                      </Collapse>
                    ) : sent === false ? (
                        <Alert severity="error">Email has not been sent</Alert>
                    ) : null}
                </Box>
            </form>
        </Box>
    )
}
export default Form;

