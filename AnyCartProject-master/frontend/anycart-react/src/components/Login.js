import React, {useReducer} from 'react';
import {withCookies} from 'react-cookie';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from "@material-ui/core/CircularProgress";
import {ERROR_CATCHED, FETCH_SUCCESS, INPUT_EDIT, START_FETCH, TOGGLE_MODE} from '../components_/actionTypes';
import Navbar from "./Navbar";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    span: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'teal',
    },
    spanError: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'fuchsia',
        marginTop: 10,
    }
}));

const initialState = {
    isLoading: false,
    isLoginView: true,
    error: '',
    credentialsLog: {
        username: '',
        password: ''
    },
    credentialsReg: {
        email: '',
        password: ''
    }
};

const loginReducer = (state, action) => {
    switch (action.type) {
        case START_FETCH: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                isLoading: false
            }
        }
        case ERROR_CATCHED: {
            return {
                ...state,
                error: 'Email or password is not correct!',
                isLoading: false
            }
        }
        case INPUT_EDIT: {
            return {
                ...state,
                [action.inputName]: action.payload,
                error: '',
            }
        }
        case TOGGLE_MODE: {
            return {
                ...state,
                isLoginView: !state.isLoginView,
            }
        }
        default:
            return state;
    }
}

const Login = (props) => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(loginReducer, initialState);

    const inputChangedLog = () => event => {
        const cred = state.credentialsLog;
        cred[event.target.name] = event.target.value;
        dispatch({
            type: INPUT_EDIT,
            inputName: 'state.credentialLog',
            payload: cred,
        })
    }

    const login = async (event) => {
        event.preventDefault()
        try {
            dispatch({type: START_FETCH})
            const res = await axios.post('http://127.0.0.1:8000/authen/', state.credentialsLog, {
                headers: {'Content-Type': 'application/json'}
            })
            console.log(state.credentialsLog)
            console.log(res.data.token)
            props.cookies.set('current-token', res.data.token)
            res.data.token ? window.location.href = "/" : window.location.href = "/login"
            dispatch({type: FETCH_SUCCESS})
        } catch (e) {
            console.log(e)
            dispatch({type: ERROR_CATCHED})

        }
    }

    return (
        <div>
            <Navbar/>
            <Container maxWidth="xs">
                <form onSubmit={login}>
                    <div className={classes.paper}>
                        {state.isLoading && <CircularProgress/>}

                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography variant="h5">
                            Login
                        </Typography>
                        <TextField
                            variant="outlined" margin="normal"
                            fullWidth label="Email"
                            name="username"
                            value={state.credentialsLog.username}
                            onChange={inputChangedLog()}
                            autoFocus/>

                        <TextField
                            variant="outlined" margin="normal"
                            fullWidth label="Password"
                            name="password"
                            type="password"
                            value={state.credentialsLog.password}
                            onChange={inputChangedLog()}/>

                        <span className={classes.spanError}>{state.error}</span>

                        {!state.credentialsLog.password || !state.credentialsLog.username ?
                            <Button className={classes.submit} type="submit" fullWidth disabled variant="contained"
                                    color="primary">Login</Button>
                            : <Button className={classes.submit} type="submit" fullWidth variant="contained"
                                      color="primary">Login</Button>}
                    </div>
                </form>
            </Container>
        </div>

    )
}

export default withCookies(Login)
