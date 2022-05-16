import React, { ChangeEvent, useState } from 'react'
import { Main } from '../Components/Main'
import { contactAPI } from '../services/contactService'
import {ContactCard} from '../Components/Card'
import { Alert, AlertTitle, CircularProgress, Grid, TextField } from '@mui/material'
import SpeedDialComponent from '../Components/SpeedDialComponent'
import { IContacts } from '../Types/ContactsTypes'
import SearchIcon from '@mui/icons-material/Search';

export const Contacts = () => {
  const [search, setSearch] = useState('')
  const {data: contacts, error, isLoading} = contactAPI.useGetAllContactsQuery(search)
  const [deleteContact, {}] = contactAPI.useDeleteContactMutation() 
  const [updateContact, {}] = contactAPI.useUpdateContactMutation() 

  const handleRemove = (contact: IContacts) => {
    deleteContact(contact)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <>
        <Main>
          <Grid container>
            <Grid item 
                  width={'100%'}
                  mt={2}
            >
              <TextField 
                fullWidth
                id="search" 
                label="Search.." 
                variant="outlined" 
                value={search}
                size='small'
                InputProps={{
                  startAdornment: <SearchIcon/>
                }}
                sx={{margin: '0 10px'}}
                onChange={onChange}    
              />
            </Grid>

            <Grid item 
                  container
                  justifyContent='center'
                  mt={2}
            >
              {contacts && contacts.map(contact => 
                <Grid item key={contact.id}>
                  <ContactCard contact={contact}
                              remove={handleRemove}
                              update={updateContact}
                  />
                </Grid>
              )}
              
              <Grid item>
                {isLoading && <CircularProgress/>}
              </Grid>

              <Grid item>
                {error && <Alert severity="error">
                              <AlertTitle>Error</AlertTitle>
                                Произошла ошибка при загрузке
                          </Alert>
                }
              </Grid>
            </Grid>
          </Grid>
          <SpeedDialComponent/>
        </Main>
    </>
  )
}