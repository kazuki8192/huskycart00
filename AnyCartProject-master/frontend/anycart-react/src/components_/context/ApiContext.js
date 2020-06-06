import React, {createContext, useEffect, useState} from 'react'
import {withCookies} from "react-cookie";
import axios from 'axios'

export const ApiContext = createContext()

const ApiContextProvider = (props) => {
    const token = props.cookies.get('current-token')
    const [myProfile, setMyProfile] = useState([])
    const [editedProfile, setEditedProfile] = useState({
        id: '',
        name: '',
        address: '',
        phone_number: ''
    })

    useEffect(() => {
        const getMyProfile = async () => {
            try {
                const resmy = await axios.get('http://localhost:8000/api/user/myprofile/', {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                })

                resmy.data[0] && setMyProfile(resmy.data[0])
                resmy.data[0] && setEditedProfile({
                    id: resmy.data[0].id,
                    name: resmy.data[0].name,
                    address: resmy.data[0].address,
                    phone_number: resmy.data[0].phone_number
                })
            } catch (e) {
                console.log("error from getMyProfile", e)
            }
        }
        getMyProfile()
    }, [token, myProfile.id])

    const createProfile = async () => {
        const createData = new FormData()
        createData.append("name", editedProfile.name)
        createData.append("address", editedProfile.address)
        createData.append("phone_number", editedProfile.phone_number)

        try {
            const res = await axios.post('http://localhost:8000/api/user/profile/', createData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            })
            setMyProfile(res.data)
            setEditedProfile({
                id: res.data.id,
                name: res.data.name,
                address: res.data.address,
                phone_number: res.data.phone_number,
            })
        } catch (e) {
            console.log("error from createProfile", e)
        }
    }

    const editProfile = async () => {
        const editData = new FormData()
        editData.append("name", editedProfile.name)
        editData.append("address", editedProfile.address)
        editData.append("phone_number", editedProfile.phone_number)
        try {
            const res = await axios.put(`http://localhost:8000/api/user/profile/${myProfile.id}/`, editData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            })
            setMyProfile(res.data)
        } catch (e) {
            console.log("error from editProfile", e)
        }
    }

    return (
        <ApiContext.Provider value={{
            myProfile,
            editedProfile,
            setEditedProfile,
            createProfile,
            editProfile,
        }}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default withCookies(ApiContextProvider)