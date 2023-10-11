import React from "react";
import HomeIcon from '@mui/icons-material/Home';
const Header= (props) => {
    console.log(props)
    return(
        <div>
            <HomeIcon style={{fontSize:'30',color:'Highlight'}}/>    
        </div>
    )
}
export default Header;