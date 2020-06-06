import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const MapImage = 'mapsample_resize.png'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    mapImage: {
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    setMargin: {
      margin: '2rem',
    },
    blue: {
        background: 'blue'
    },
    red: {
        background: 'red'
    },
}));

const LowerTop = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant='h4' align='center' className={classes.setMargin}>【現在配達対応中エリア】</Typography>
            <Typography variant='h5' align='center' className={classes.setMargin}>
                ・港区全域 ・渋谷区（一部） ・目黒区（一部） ・川崎区（一部）
            </Typography>
            <Grid container alignItems='center' justify='center'>
                <Grid item className={classes.mapImage}>
                    <img src={MapImage} alt='map'/>
                </Grid>
            </Grid>
        </div>
    )
}
export default LowerTop