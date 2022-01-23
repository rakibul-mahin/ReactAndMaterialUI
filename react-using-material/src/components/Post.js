import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(5),
    },
    media: {
        height: '550px',
        [theme.breakpoints.down('sm')]: {height: '150px'},
    },
    card: {
        marginBottom: theme.spacing(5),
    }
}))

const Post = () => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media} image="https://img.search.brave.com/-vSkWZnKNofILXHCLEWAvvdtnB3pQz7H8Kx08E_hGPk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIxMjU4/MzUuanBn" title="R6"/>
            <CardContent>
                <Typography variant="h5">Title For Post</Typography>
                <Typography variant="body2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Details</Button>
        </CardActions>
    </Card>
  )
};

export default Post;
