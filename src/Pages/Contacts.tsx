import React, { ChangeEvent, useEffect, useState } from 'react'
import { Main } from '../Components/Main'
import { contactAPI } from '../services/contactService'
import {ContactCard} from '../Components/Card'
import { Alert, AlertTitle, CircularProgress, TextField } from '@mui/material'
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
          <TextField 
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
          {contacts && contacts.map(contact => 
              <ContactCard key={contact.id}
                           contact={contact}
                           remove={handleRemove}
                           update={updateContact}
              />
          )}
          {isLoading && <CircularProgress/>}
          {error && <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                          Произошла ошибка при загрузке
                    </Alert>
          }
          <SpeedDialComponent/>
        </Main>
    </>
  )
}