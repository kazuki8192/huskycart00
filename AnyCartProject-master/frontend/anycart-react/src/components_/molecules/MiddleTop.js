import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const defaultProps = {
    bgcolor: '#607d8b',
    borderColor: 'text.primary',
    m: 1,
    border: 0,
    style: {width: '15rem', height: '15rem'},
    textAlign: 'center',
    lineHeight: '15rem',
    color: 'white',
    fontSize: '30px',
};


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        margin: '2rem'
    },
    boxContainer: {
        marginTop: "3rem",
        marginBottom: "3rem",
    },
    detail: {
        textAlign: "center",
    },
    blue: {
        background: 'blue'
    },
    centerBox: {
        margin: 'auto',
        cursor: 'pointer',
    }
}));

const MiddleTop = () => {
    const classes = useStyles()
    return (
        <Box borderBottom={5}>
            <Box borderBottom={5}>
                <Typography
                    className={classes.title}
                    variant='h4'
                    align='center'
                >【ストア一覧】
                </Typography>
            </Box>

            <Grid container className={classes.boxContainer}>
                <Grid item xs={12} sm={4}>
                    <Box display="flex" justifyContent="center">
                        <Box>
                            <Box borderRadius="50%" {...defaultProps} className={classes.centerBox}>Costco</Box>
                            <Typography className={classes.detail}>
                                アメリカ大手スーパーマーケット商品がど迫力！！
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box display="flex" justifyContent="center">
                        <Box>
                            <Box borderRadius="50%" {...defaultProps}
                                 className={classes.centerBox}
                                 onClick={()=> window.location.href='/anycart'}
                            >Any Cart</Box>
                            <Typography className={classes.detail}>欲しいもの予算などから提案いたします！何でもカゴ</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box display="flex" justifyContent="center">
                        <Box>
                            <Box borderRadius="50%" {...defaultProps} className={classes.centerBox}>Coming soon</Box>
                            <Typography className={classes.detail}>店舗概要</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className={classes.boxContainer}>
                <Grid item xs={12} sm={4}>
                    <Box display="flex" justifyContent="center">
                        <Box>
                            <Box borderRadius="50%" {...defaultProps} className={classes.centerBox}>Coming soon</Box>
                            <Typography className={classes.detail}>
                               店舗概要
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box display="flex" justifyContent="center">
                        <Box>
                            <Box borderRadius="50%" {...defaultProps} className={classes.centerBox}>Coming soon</Box>
                            <Typography className={classes.detail}>店舗概要</Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box display="flex" justifyContent="center">
                        <Box>
                            <Box borderRadius="50%" {...defaultProps} className={classes.centerBox}>Coming soon</Box>
                            <Typography className={classes.detail}>店舗概要</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}
export default MiddleTop