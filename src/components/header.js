import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
    render() {
        return <AppBar style={{flexGrow: 1,}}position="static">
            <Toolbar>
                <Typography style ={{flexGrow: 1,}}variant="h5" >
                    {this.props.title}
                </Typography>
                <Typography style ={{flexGrow: 1,}} variant="h7" >
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/portfolio">Portfolio</Link>
                </Typography>
                <Typography style ={{flexGrow: 1,}} variant="h7" >
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/transactions">Transactions</Link>
                </Typography>
                <Typography style ={{flexGrow: 1,}} variant="h7" >
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Log Out</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    }
}
export default Header;