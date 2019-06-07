import React from 'react'
import Typography from '@material-ui/core/Typography';

function Header(){

    return(
        <div align='center'>
           <Typography style={{color: 'coral', padding: '35px 0 15px 0'}}>
                <span style={{fontSize: '35px'}}>[</span>
                Making your Life Easier
                <span style={{fontSize: '35px'}}>]</span>
            </Typography> 
            <Typography variant="h4" style={{fontWeight: 'bold', padding: '0 0 30px 0'}}>
            Discovering the World
            </Typography>
        </div>
    );
}

export default Header;