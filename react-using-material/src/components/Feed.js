import React from 'react'

import { makeStyles, Container } from '@material-ui/core'
import Post from './Post'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(5),
    }
}))

const Feed = () => {

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Post />
            <Post />
        </Container>
    )
}

export default Feed
