import React from 'react'

import { makeStyles, Container, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(5),
    }
}))

const RightBar = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Typography>Online Friends</Typography>
        </Container>
    )
}

export default RightBar
