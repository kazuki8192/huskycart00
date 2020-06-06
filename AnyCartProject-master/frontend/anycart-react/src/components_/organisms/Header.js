import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import {FiLogOut} from 'react-icons/fi'
import AccountCircle from '@material-ui/icons/AccountCircle';
import {withCookies} from 'react-cookie';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    langSwitchButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        marginLeft: theme.spacing(2),
    },
    loginButton: {
        fontWeight: "bolder",
        marginLeft: theme.spacing(4),
    }
}));
const Header = (props) => {
    const classes = useStyles()
    const Logout = () => event => {
        props.cookies.remove('current-token')
        window.location.href = '/'
    }
    const token = props.cookies.get('current-token')

    return (
        <AppBar position='static'>
            <Toolbar>
                {/*<IconButton lassName={classes.langSwitchButton} color="inherit">*/}
                {/*    <GTranslateIcon/>*/}
                {/*</IconButton>*/}
                <Typography variant='h4' className={classes.title}
                            onClick={() => window.location.href='/'}
                >
                    AnyCart
                </Typography>
                {token ?
                    // ログイン中の表示
                    <div>
                        <IconButton
                            size='medium'
                            color="inherit"
                            onClick={()=> window.location.href='/profile'}
                        >
                            <AccountCircle/>
                        </IconButton>

                        <IconButton
                            size='medium'
                            color="inherit"
                            onClick={Logout()}
                        >
                            <FiLogOut/>
                        </IconButton>
                    </div>
                    :
                    // ログインしていないときの表示
                    <div>
                        <Button color="inherit"
                                href='/login'
                                className={classes.loginButton}
                                >Login</Button>

                        <Button color="inherit"
                                href='/register'
                                className={classes.loginButton}
                                >Register</Button>
                    </div>

                }

            </Toolbar>

        </AppBar>
    )
}

export default withCookies(Header)


