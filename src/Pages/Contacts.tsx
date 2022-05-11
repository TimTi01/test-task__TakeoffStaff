import React, { useEffect } from 'react'
import { Main } from '../Components/Main'
import { contactAPI } from '../services/contactService'
import {ContactCard} from '../Components/Card'
import { Alert, AlertTitle, CircularProgress } from '@mui/material'

export const Contacts = () => {
  const {data: contacts, error, isLoading} = contactAPI.useGetAllContactsQuery(10) 

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
        </Main>
    </>
  )
}


// export const Contacts = () => {

//   const dispatch = useAppDispatch()
//   const {contacts, isLoading, error} = useAppSelector(state => state.contactsReducer)

//   useEffect(() => {
//     dispatch(fetchContacts())
//   }, [])

//   return (
//     <>
//         <Main>
//             {!isLoading 
//               ? contacts.map(contact => (
//                 <Box key={contact.id} m={1}>
//                   <Card sx={{display: 'flex'}} elevation={6}>
//                       <CardMedia 
//                         component="img"
//                         sx={{width: 151}}
//                         image={`https://i.pravatar.cc/200/${contact.id}`}
//                         alt={`avatar ${contact.name}`}
//                       />
//                       <Grid container 
//                             direction='column'
//                       >
//                         <Grid item>
//                           <CardContent>
//                             <Typography variant='subtitle1'>
//                               Name: {contact.name}
//                             </Typography>
//                             <Typography variant='subtitle1'>
//                               Email: {contact.email}
//                             </Typography>
//                           </CardContent>
//                         </Grid>
//                         <Grid item>
//                           <CardActions>
//                             <Button size="small" variant='contained'>Edit</Button>
//                             <Button size="small" variant='contained' color='error'>Delete</Button>
//                           </CardActions>
//                         </Grid>
//                       </Grid>
//                   </Card>
//                 </Box>
//               ))
//               : <CircularProgress />
//             }
//             {error && <h1>{error}</h1>}
//         </Main>
//     </>
//   )
// }
