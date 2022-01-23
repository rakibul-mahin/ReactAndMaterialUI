import React from 'react'

import { makeStyles, Container, Tooltip, Fab, Modal, TextField, Button } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: 15,
        right: 15,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]:{
            width: '100vw',
            height: '100vh',
        }
    }
}))

const Add = () => {

    const [open, setOpen] = React.useState(false)

    const classes = useStyles()

    return (
        <>
            <Tooltip title="Add" aria-label="add" onClick={()=> setOpen(true)}>
                <Fab color="secondary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField id="standard-basic" label="Title" size="small" style={{width: "100%", marginBottom: "20px"}} />
                            <TextField id="outlined-multilined-static" multiline rows={4} defaultValue="Write your Description" variant="outlined" label="Description" size="small" style={{width: "100%"}} />
                            <Button variant="outlined" color="secondary">Submit</Button>
                            <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
        </>
    )
}

export default Add
