import React, { useEffect } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material'
import { Main } from '../Components/Main'
import { fetchContacts } from '../features/ActionCreators'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Box } from '@mui/system'

export const Contacts = () => {
  const dispatch = useAppDispatch()
  const {contacts, isLoading, error} = useAppSelector(state => state.contactsReducer)
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [])

  return (
    <>
        <Main>
            {!isLoading 
              ? contacts.map(contact => (
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
              ))
              : <Skeleton variant='rectangular' 
                          width={200} 
                          height={110}
                />
            }
            {/* {isLoading && <h1>Идёт загрузка...</h1>} */}
            {error && <h1>{error}</h1>}
        </Main>
    </>
  )
}
