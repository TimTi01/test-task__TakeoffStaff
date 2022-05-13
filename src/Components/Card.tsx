import React, { FC, useState } from 'react'
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { UpdateDialogComponent } from './UpdateDialogComponent';
import { IContacts } from '../Types/ContactsTypes'

interface ContactsItemProps {
    contact: IContacts,
    remove: (contact: IContacts) => void,
    update: (contact: IContacts) => void,
}

export const ContactCard:FC<ContactsItemProps> = ({contact, remove, update}) => {
    const [open, setOpen] = useState(false);
    
    const handleClickOpenUpdateDialog = () => {
        setOpen(true);
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation()
        remove(contact)
    }

    return (
    <Box key={contact.id} m={1}>
        <Card sx={{display: 'flex'}} elevation={6}>
            <CardMedia 
            component="img"
            sx={{width: 151}}
            image={`https://i.pravatar.cc/200/${contact.id}`}
            alt={`avatar ${contact.name}`}
            />
            <Grid container 
                direction='column'
            >
                <Grid item>
                    <CardContent>
                        <Typography variant='subtitle1'>
                            Name: {contact.name}
                        </Typography>
                        <Typography variant='subtitle1'>
                            Email: {contact.email}
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item>
                    <CardActions>
                        <Button size="small" 
                                variant='contained'
                                onClick={handleClickOpenUpdateDialog}
                        >
                            Edit
                        </Button>
                        <Button size="small" 
                                variant='contained' 
                                color='error'
                                onClick={handleRemove}
                        >
                            Delete
                        </Button>
                        <UpdateDialogComponent open={open}
                                               setOpen={setOpen}
                                               update={update}
                                               contact={contact}
                        />
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    </Box>
    )
}
