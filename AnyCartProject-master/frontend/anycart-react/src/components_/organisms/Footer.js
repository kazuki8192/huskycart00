import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Grid from "@material-ui/core/Grid";

const instagram = 'instagram_icon.png'
const twitter = 'twitter_icon.png'
const facebook = 'facebook_icon.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    links: {
        marginTop: '1rem',
        textAlign: "center"
    },
    menu: {
        textAlign: "center",
    },
    menuItem: {
        display: "inline",

    },
    logo: {},
    copyright: {},
    facebook: {
        color: "skyblue",
    },
    twitter: {
        color: "skyblue"
    }

}));
const Footer = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid sm={12} className={classes.links}>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>

                </Grid>
            </Grid>

            <ul className={classes.menu}>
                <li className={classes.menuItem}>使い方 |</li>
                <li className={classes.menuItem}>よくある質問 |</li>
                <li className={classes.menuItem}>お問い合わせ |</li>
                <li className={classes.menuItem}>プライバシーポリシー |</li>
            </ul>
        </div>
    )
}

export default Footer