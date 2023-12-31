import { Box, Typography, } from "@mui/material"
import  image  from '../images/Microsites-bro.png'
import image1 from '../images/Microsites-pana.png'
import image2 from '../images/Microsites-rafiki.png'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {Link} from 'wouter'
import {Link as LinkS} from 'react-scroll'
import { useTranslation } from "react-i18next";


const Services = ({theme}) => {

    const {t} = useTranslation()
    return (
        <Box id='services' sx={{
            display: 'flex', 
            justifyContent:'center', 
            alignItems: 'center', 
            flexDirection: 'column',
            position:'relative',
            overflow: 'hidden',}}>
        <svg style={{transform: 'scale(1.15)', position:'absolute', top:'0%', left:'0', zIndex: '0', overflow:'hidden', opacity: '50%'}}xmlns="http://www.w3.org/2000/svg" width="90%" height="100%">
          <image   xlinkHref="/sssplatter.svg" width="100vw" height="100%" />
        </svg>

            <Typography sx={{fontSize: '2.5rem', fontWeight: '600', zIndex: '1'}}>{t("Services")}</Typography>
        <Box sx={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin: '0 1vw 0 ',
            flexWrap:'wrap'
            , 
                zIndex: '2',}}>
             <LinkS activeClass="active" to="form" spy={true} smooth={true} offset={-300} duration={1000}><Link href='/contact'><Box sx={{
                width: '14vw' , 
                margin: '2vw', 
                height: '50vh', 
                backgroundColor: theme ? 'rgba(222, 222, 222, 0.6)': 'rgba(46, 46, 46, .7)', 
                display: 'flex', 
                alignItems: 'center', 
                minWidth:'200px',
                minHeight:'320px',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: '.3s',
                cursor:'pointer', 
                zIndex: '2',
                '&:hover': {
                    width:'16vw',
                    height: '54vh',
                    margin:'1vw',
                    boxShadow:'0px 12px 12px rgba(0, 0, 0, 0.2)'
                }}}>
                <div style={{display:'flex', alignItems: 'center', flexDirection: 'column'}}>
                <img style={{width: '10vw', height: '9vw',minWidth:'140px',minHeight:'140px'}} src={image} alt=""></img>
                <Typography sx={{fontSize: '1.5rem', fontWeight: '600', marginTop: '-2vh', color: 'inherit'}}>Basic</Typography>
                <div style={{textAlign:'left'}}>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("Bussines website")}</Typography>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("pages.1")}</Typography>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("Modern design")}</Typography>
                            <Typography sx={{display:'flex'}}><ClearIcon sx={{color: '#d32f2f'}}/>{t("Setup hosting")}</Typography>
                            <Typography sx={{display:'flex'}}><ClearIcon sx={{color: '#d32f2f'}}/>{t("support")}</Typography>
                            <br/>
                        </div>

                </div>
                <Typography sx={{fontSize: '1rem', fontWeight: '600', marginTop: '-2vh', color: 'inherit', textAlign:' center'}}>{t("DM")}</Typography>
            </Box></Link></LinkS>
            <LinkS activeClass="active" to="form" spy={true} smooth={true} offset={-300} duration={1000}><Link href='/contact'><Box sx={{width: '17vw' , 
            margin: '4vw', 
            display: 'flex', 
            alignItems: 'center', 
            height: '57vh', 
            backgroundColor: 'rgba(235, 119, 119, .6)', 
            minWidth:'250px',
            minHeight:'360px',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: '.3s',
            cursor:'pointer', 
            zIndex: '1',
            '&:hover': {
                width:'19vw',
                height: '61vh',
                margin:'3vw',
                boxShadow:'0px 12px 12px rgba(0, 0, 0, 0.3)'
            }}}>

                <div style={{display:'flex', 
                alignItems: 'center', 
                flexDirection: 'column', 
                justifyContent:'center'}}>
                    <div style={{      display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',}}>
                    {/* <StarIcon sx={{}}/> */}
                        <img style={{
                            width: '12vw', 
                        height: '12vw', minWidth:'180px',minHeight:'180px'}} src={image1} alt="">
                            </img>
                            
                    </div>
                    <Typography sx={{display:'flex', 
                    alignItems:'center',
                    gap:'.5vw', 
                    fontSize: '1.5rem', 
                    fontWeight: '600', 
                    marginTop: '-2vh', 
                    color: 'inherit', 
                    textAlign:'center'}}>
                        Premium 
                        </Typography>
                        <div style={{textAlign:'left'}}>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("Bussines website")}</Typography>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("pages.3")}</Typography>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("Modern design")}</Typography>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("Setup hosting")}</Typography>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("support")}</Typography>
                            <br/>
                        </div>
                    
                </div>
                <Typography sx={{fontSize: '1rem', fontWeight: '600', marginTop: '-2vh', color: 'inherit', textAlign:' center'}}>{t("DM")}</Typography>
            </Box></Link></LinkS>
            <LinkS activeClass="active" to="form" spy={true} smooth={true} offset={-300} duration={1000}><Link href='/contact'><Box sx={{
                width: '14vw' , 
                margin: '2vw', 
                height: '50vh', 
                backgroundColor: theme ? 'rgba(222, 222, 222, 0.6)': 'rgba(46, 46, 46, .9)', 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-between', 
                minWidth:'200px',
                minHeight:'320px',
                flexDirection: 'column',
                transition: '.3s',
                position: 'relative',
                cursor:'pointer', 
                zIndex: '10',
                '&:hover': {
                    width:'16vw',
                    height: '54vh',
                    margin:'1vw',
                    boxShadow:'0px 12px 12px rgba(0, 0, 0, 0.2)'
                }}}>
                <div style={{display:'flex', alignItems: 'center', flexDirection: 'column'}}>
                <img style={{width: '10vw', height: '9vw', minWidth:'140px',minHeight:'140px'}} src={image2} alt=""></img>
                <Typography sx={{fontSize: '1.5rem', fontWeight: '600', marginTop: '-2vh', color: 'inherit'}}>Standard</Typography>
                <div style={{textAlign:'left'}}>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("Bussines website")}</Typography>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("pages.2")}</Typography>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("Modern design")}</Typography>
                            <Typography sx={{display:'flex'}}><CheckIcon sx={{color:'#388e3c'}}/>{t("Setup hosting")}</Typography>
                            <Typography sx={{display:'flex'}}><ClearIcon sx={{color: '#d32f2f'}}/>{t("support")}</Typography>
                            <br/>
                        </div>


                </div>
                <Typography sx={{fontSize: '1rem', fontWeight: '600', marginTop: '-2vh', color: 'inherit', textAlign:' center'}}>{t("DM")}</Typography>
            </Box></Link></LinkS>
            
        </Box>
            <Typography sx={{fontSize: '1.2rem', textAlign:'center'}}>{t("custom")}</Typography>
        </Box>
    )
}

export default Services