import React, {useContext, useState} from 'react';
import {ApiContext} from "../context/ApiContext";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {withCookies} from 'react-cookie'
import Header from "../organisms/Header";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary
    },
    table: {
        minWidth: 650,
    },
    container: {
        margin: "auto",
    }
}));

const ProfilePage = (props) => {
    const classes = useStyles()
    const [isEditMode, setIsEditMode] = useState(false)
    const {myProfile, editedProfile, setEditedProfile, createProfile, editProfile} = useContext(ApiContext)
    const handleInputChange = () => event => {
        const value = event.target.value
        const name = event.target.name
        setEditedProfile({...editedProfile, [name]: value})
    }
    return (
        <div>
            <Header/>
            <Container maxWidth="xs">
                <div className={classes.paper}>

                    <Avatar className={classes.avatar}>
                        <AccountBoxIcon/>
                    </Avatar>

                    <Typography variant="h5">
                        My Profile
                    </Typography>

                    {/*インプットフォーム*/}
                    {/*{myProfile.id !== '' ?*/}
                    {myProfile.id ?
                        (isEditMode ?
                                // update
                                <div>
                                    <TextField
                                        variant="standard" margin="normal"
                                        fullWidth label="Name"
                                        name='name'
                                        onChange={handleInputChange()}
                                        defaultValue={myProfile.name}
                                    />
                                    <TextField
                                        variant="standard" margin="normal"
                                        fullWidth label="Address"
                                        name='address'
                                        onChange={handleInputChange()}
                                        defaultValue={myProfile.address}
                                    />
                                    <TextField
                                        variant="standard" margin="normal"
                                        fullWidth label='Phone Number'
                                        name='phone_number'
                                        onChange={handleInputChange()}
                                        defaultValue={myProfile.phone_number}
                                    />
                                </div>
                                :
                                // TODO: label overlap
                                <div>
                                    <TextField
                                        variant="outlined" margin="normal"
                                        fullWidth
                                        // label="Name"
                                        value={myProfile.name}
                                        InputProps={{readOnly: true,}}
                                    />
                                    <TextField
                                        variant="outlined" margin="normal"
                                        fullWidth
                                        // label="Address"
                                        value={myProfile.address}
                                        InputProps={{readOnly: true,}}
                                    />
                                    <TextField
                                        variant="outlined" margin="normal"
                                        fullWidth
                                        // label="Phone Number"
                                        value={myProfile.phone_number}
                                        InputProps={{readOnly: true,}}
                                    />
                                </div>
                        )
                        :
                        <div>
                            <TextField
                                variant="outlined" margin="normal"
                                fullWidth
                                name='name'
                                label='Name'
                                onChange={handleInputChange()}
                            />
                            <TextField
                                variant="outlined" margin="normal"
                                fullWidth
                                name='address'
                                label='Address'
                                onChange={handleInputChange()}
                            />
                            <TextField
                                variant="outlined" margin="normal"
                                fullWidth
                                name='phone_number'
                                label='Phone Number'
                                onChange={handleInputChange()}
                            />
                        </div>

                    }

                    {/*{myProfile.id !== '' ?*/}
                    {myProfile.id ?
                        (isEditMode ?
                                < Button className={classes.submit}
                                         // onClick={() => editProfile()}
                                         onClick={() => (editProfile(),
                                             window.location.href='/profile')}
                                         type="submit"
                                         fullWidth
                                         variant="contained"
                                         color="primary">update
                                </Button>
                                :
                                <Button className={classes.submit}
                                        onClick={() => setIsEditMode(!isEditMode)}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary">Edit
                                </Button>
                        )
                        :
                        < Button className={classes.submit}
                                 onClick={() => createProfile()}
                                 type="submit"
                                 fullWidth
                                 variant="contained"
                                 color="primary">Create
                        </Button>
                    }
                </div>
            </Container>
        </div>
    )
}

export default withCookies(ProfilePage)