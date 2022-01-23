import React from 'react'

import { Container, makeStyles, Typography } from '@material-ui/core'
import { Apps, Camera, ExitToApp, Home, List, Person, Settings, Shop, Videocam } from '@material-ui/icons'

const useStyle = makeStyles((theme)=>({
    container: {
        paddingTop: theme.spacing(5),
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        color: 'white',
        position: 'sticky',
        top: 0,
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'white',
            color: '#555',
            border: '1px solid #ece7e7',
        }
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(5),
            curson: 'pointer',
        }
    },
    text: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {display: 'block', fontSize: '15px'},
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {fontSize: '18px'},
    }
}))

const LeftBar = () => {
    const classes = useStyle()
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>Home</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon}/>
                <Typography className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon}/>
                <Typography className={classes.text}>Lists</Typography>
            </div>
            <div className={classes.item}>
                <Camera className={classes.icon}/>
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <Videocam className={classes.icon}/>
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <Apps className={classes.icon}/>
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Shop className={classes.icon}/>
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon}/>
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon}/>
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    )
}

export default LeftBar
