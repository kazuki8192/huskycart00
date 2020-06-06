import React, {useContext, useState} from 'react';
import {ApiContext} from "../context/ApiContext";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {CookiesProvider, withCookies} from 'react-cookie'
import Header from "../organisms/Header";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary
    },
    table: {
        minWidth: 650,
    },
    container: {
        margin: "auto",
    }
}));

const AnyCartPage = (props) => {
    const classes = useStyles()

    return (
        <div>
            <Header/>
            <Container maxWidth='xs'>
                <form onSubmit>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <ShoppingCartOutlinedIcon/>
                        </Avatar>
                        <Typography variant="h5">
                            Any Cart
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Product Name"
                            name="product_name"
                            autoFocus/>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Budged"
                            name="budged"
                            autoFocus/>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Extra Detail"
                            name="extra_detail"
                            multiline
                            autoFocus/>
                        <Button className={classes.submit} type="submit"
                                fullWidth variant="contained"
                                color="primary">Send</Button>
                    </div>
                </form>
            </Container>
        </div>

    )
}

export default withCookies(AnyCartPage)