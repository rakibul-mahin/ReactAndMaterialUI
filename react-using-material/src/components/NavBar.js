import React, { useState } from 'react'

import { makeStyles, AppBar, Toolbar, Typography, InputBase, alpha, Badge, Avatar } from '@material-ui/core'
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {display: 'block'}
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {display: 'none'}
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]: {display: (props) => props.click ? 'flex' : 'none'},
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(2),
    },
    icons: {
        display: 'flex',
        alignItems: 'center',
        display: (props) => props.click ? 'none' : 'flex',
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {display: 'none'}
    },
    cancelButton: {
        [theme.breakpoints.up('md')]: {display: 'none'}
    }
}))

const NavBar = () => {
    const [click, setClick] = useState(false)
    const classes = useStyles({click})
    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>Game News</Typography>
                <Typography variant="h6" className={classes.logoSm}>GameNews</Typography>

                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="Search..." className={classes.input}/>
                    <Cancel className={classes.cancelButton} onClick={()=>setClick(!click)}/>
                </div>

                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={()=>setClick(!click)}/>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar alt="Tom Holland" src="https://img.search.brave.com/tS4WHciX5_aPJDvJy5mOeqSEfCoXn0RtU8IzxNxOn2E/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly90dnNv/YXB2aWRlb3MuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzAzL1RvbS1Ib2xs/YW5kLmpwZw"/>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
