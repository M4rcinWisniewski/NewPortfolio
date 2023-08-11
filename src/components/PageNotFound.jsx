import { Typography, Box,  Button } from "@mui/material"
import { useTranslation } from "react-i18next"
import {Link} from 'wouter'


const PageNotFound =()=> {
    const {t} = useTranslation()
    return (
        <>
          <div
            style={{
              height: '100vh',
              width: 'auto',
              overflow: 'hidden',
              display: 'flex',
              justifyContent:'center',
              alignItems: 'center'
            }}
          >
            {/* Conditionally create cloned h1 elements for smaller screens */}
            {window.innerWidth <= 768 &&
              [...Array(5)].map((_, index) => (
                <h1
                  key={index}
                  style={{
                    position: 'fixed',
                    top: `${index * 20}vh`,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '47vw',
                    opacity: '15%',
                  }}
                >
                  404
                </h1>
              ))}
    
            {/* Single h1 element for desktop screens */}
            {window.innerWidth > 768 && (
              <h1
                style={{
                  position: 'fixed',
                  top: '-10%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '47vw',
                  opacity: '15%',
                }}
              >
                404
              </h1>
            )}
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '3vh'}}>
            <Typography sx={{color:'inherit', fontSize: '3rem', fontWeight:'600', fontFamily: 'Work Sans, sans-serif', textAlign: 'center'}}>{t("Hide & Seek Time!.1")}</Typography>
            <Typography sx={{color:'inherit', fontSize: '1.5rem', fontWeight:'500', fontFamily: 'Work Sans, sans-serif', textAlign: 'center'}}>{t("Sorry")}</Typography>
            <Link href='/'><Button color='error' variant="contained" sx={{width: '250px'}}>{t("Go back to homepage.1")}</Button></Link>
        </Box>
        </div>
        </>
    )
}

export default PageNotFound