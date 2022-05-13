import React, { useEffect } from 'react'
import { Main } from '../Components/Main'
import { contactAPI } from '../services/contactService'
import {ContactCard} from '../Components/Card'
import { Alert, AlertTitle, CircularProgress } from '@mui/material'
import SpeedDialComponent from '../Components/SpeedDialComponent'

export const Contacts = () => {
  const {data: contacts, error, isLoading} = contactAPI.useGetAllContactsQuery(100) 

  return (
    <>
        <Main>
          {contacts && contacts.map(contact => 
              <ContactCard key={contact.id}
                           contact={contact}
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