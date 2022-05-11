import React, { FC } from 'react'
import {Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Grid, Skeleton, Typography } from '@mui/material'
import { IContacts } from '../Types/ContactsTypes'


interface ContactsItemProps {
    contact: IContacts,
}

export const ContactCard:FC<ContactsItemProps> = ({contact}) => {
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
                <Button size="small" variant='contained'>Edit</Button>
                <Button size="small" variant='contained' color='error'>Delete</Button>
                </CardActions>
            </Grid>
            </Grid>
        </Card>
    </Box>
  )
}
