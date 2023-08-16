import { Box, TextField, Button, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import { getRandomColor } from "./Landing";
import { useState, useEffect } from "react";
import '../App.css'
import { useTranslation } from "react-i18next";

const width = {
    width: '15vw',
    minWidth: '200px'
}

const Form = () => {
    const [color, setColor] = useState(getRandomColor());
    useEffect(() => {
        const intervalId = setInterval(() => {
          const newColor = getRandomColor();
          setColor(newColor);
        }, 3000);
        return () => clearInterval(intervalId);
      }, []);
    const sendEmail = (e) => {
        e.preventDefault();

        // Replace these values with your actual emailjs service configuration
        const serviceId = 'service_onbemwv';
        const templateId = 'template_hvmxiz9';
        const userId = 'ajYgf-wmRFz9yN0Z0';

        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((result) => {
                alert('Email sent successfully:', result.text);
            }, (error) => {
                alert('Failed to send email:', error.text);
            });
    };
    const {t} = useTranslation();

    return (
        <Box id='form'sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
            <Typography className='fade-in' variant='h1' style={{ margin: '10vh', fontSize: '2rem', fontWeight: '600', marginBottom: '2vh', textAlign: 'center'}}>{t("Send me a .1")}<mark style={{backgroundColor: color, transition: '1s'}}>{t("message!.1")}</mark></Typography>
            <Typography className='fade-in-p' sx={{marginBottom: '10vh', color: 'gray', textAlign: 'center'}} variant="h6">{t("If you want to ask a question or hire me fill the form below!.1")}</Typography>
            <form className='fade-in-p' style={{display: 'flex', justifyContent: 'center', alignItems: 'center',gap: '5vh', flexDirection: 'column',}}onSubmit={sendEmail}>
                <Box sx={{ display: 'flex', gap: '5vw' }}>
                    <TextField name="name" variant="outlined" label={t("Your name.1")} sx={width} color="info" />
                    <TextField name="email" variant="outlined" label={t("Your email.1")} sx={width} color="info" />
                </Box>
                <TextField name="message" variant="outlined" label={t("Your message.1")} sx={{ width: '35vw', minWidth: '425px' }} color="info" multiline />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button type="submit" variant="" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5vw' }}>
                        {t("Send.1")} <SendIcon sx={{ fontSize: '1.1rem', marginBottom: '2px' }} />
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default Form;

