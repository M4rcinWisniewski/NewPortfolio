import PhoneIcon from '@mui/icons-material/Phone';
const Footer =() => {
    return (
        <footer style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems:'center', 
            height: 'auto', 
            margin:'10vw',
            marginBottom:'-5vw',
            
            }}>

            <p style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems:'center',  
                marginBottom: '0',
                flexDirection: 'column'}}>
                    &copy; 2023 Marcin Wiśniewski Development 
                    <a style={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems:'center',
                        gap: '.5vw',
                        color: 'inherit',
                        textDecoration: 'underline'
                    }} 
                        href="https://storyset.com/work">
                            Work illustrations designed by Storyset
                    </a>
                    <a style={{color: 'inherit',}} href="https://storyset.com/online">Online illustrations designed by Storyset</a>
                    <a style={{color: 'inherit',}}href="https://storyset.com/profile">Profile illustrations designed by Storyset</a>
                    <p style={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems:'center',
                        gap: '.5vw'}}>
                            <PhoneIcon /> +48 516 648 667
                    </p>

            </p>
        </footer>
    )
}

export default Footer