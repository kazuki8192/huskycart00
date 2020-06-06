import React, {useEffect, useState} from "react";
import axios from 'axios'
import {withCookies} from 'react-cookie'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


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

const Profile = (props) => {
    // console.log('profilehere')
    const classes = useStyles();
    const token = props.cookies.get('current-token')
    const [isEditMode, setIsEditMode] = useState(false)
    const [myProfile, setMyProfile] = useState({
        id: '',
        name: '',
        address: '',
        phone_number: '',
    })

    const getMyProfile = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/user/myprofile/', {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            res.data[0] && setMyProfile(res.data[0])

        } catch {
            console.log('fail get profile')
        }
    }
    useEffect(() => {
        // console.log('use effect here')
        getMyProfile()
        console.log(myProfile)
    }, [])

    const createProfile = async () => {
        // 新しく作るプロフィールのデータ
        const data = {
            'name': myProfile.name,
            'address': myProfile.address,
            'phone_number': myProfile.phone_number
        }
        console.log(data)
        try {
            const res = await axios.post('http://localhost:8000/api/user/profile/', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            })
            setMyProfile(res.data)
            console.log(setMyProfile)

        } catch {
            console.log("error")
        }
    }

    const editProfile = async () => {
        const data = {
            'name': myProfile.name,
            'address': myProfile.address,
            'phone_number': myProfile.phone_number
        }
        try {
            const res = await axios.put(`http://localhost:8000/api/user/profile/${myProfile.id}/`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            })
            setMyProfile(res.data)
            setIsEditMode(!isEditMode)
        } catch (e) {
            console.log("error", e)
        }
    }

    const handleInputChange = () => event => {
        const value = event.target.value
        const name = event.target.name
        setMyProfile({...myProfile, [name]: value})
    }

    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <AccountBoxIcon/>
                </Avatar>

                <Typography variant="h5">
                    My Profile
                </Typography>

                {/*インプットフォーム*/}
                {myProfile.id !== '' ?
                    (isEditMode ?
                            // update
                            <div>
                                <TextField
                                    variant="outlined" margin="normal"
                                    fullWidth label="Name"
                                    name='name'
                                    onChange={handleInputChange()}
                                    defaultValue={myProfile.name}
                                />
                                <TextField
                                    variant="outlined" margin="normal"
                                    fullWidth
                                    name='address'
                                    onChange={handleInputChange()}
                                    defaultValue={myProfile.address}
                                />
                                <TextField
                                    variant="outlined" margin="normal"
                                    fullWidth
                                    name='phone_number'
                                    onChange={handleInputChange()}
                                    defaultValue={myProfile.phone_number}
                                />
                            </div>
                            :
                            <div>
                                <TextField
                                    variant="outlined" margin="normal"
                                    fullWidth label="Name"
                                    value={myProfile.name}
                                    InputProps={{readOnly: true,}}
                                />
                                <TextField
                                    variant="outlined" margin="normal"
                                    fullWidth label="Address"
                                    value={myProfile.address}
                                    InputProps={{readOnly: true,}}
                                />
                                <TextField
                                    variant="outlined" margin="normal"
                                    fullWidth label="Phone Number"
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


                {myProfile.id !== '' ?
                    (isEditMode ?
                            < Button className={classes.submit}
                                     onClick={() => editProfile()}
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
    )
}

export default withCookies(Profile)