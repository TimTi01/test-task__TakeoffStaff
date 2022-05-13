import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, SpeedDial, SpeedDialIcon, TextField, Tooltip } from '@mui/material';
import { contactAPI } from '../services/contactService';
import { IContacts } from '../Types/ContactsTypes';

export default function SpeedDialComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [createContact, {}] = contactAPI.useCreateContactMutation()
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = async () => {
        await createContact({name, email} as IContacts)
        handleClose()
    };

    return (
      <Box>
          <Tooltip title="Add new contact" arrow>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                onClick={handleClickOpen}
            >
            </SpeedDial>
          </Tooltip>
          <Dialog onClose={handleClose} open={open}>
          <DialogTitle>Subscribe</DialogTitle>
          <Divider/>
            <DialogContent>
                <TextField
                    autoFocus
                    fullWidth
                    margin="dense"
                    id="name"
                    label="Name"
                    name='name'
                    type="text"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    autoFocus
                    fullWidth
                    margin="dense"
                    id="email"
                    label="Email"
                    name='email'
                    type="email"
                    value={email}
                    variant="standard"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </DialogContent>
            <Divider/>
            <DialogActions>
                <Button 
                        variant='contained' 
                        onClick={handleCreate}
                >
                    Create
                </Button>
            </DialogActions>
          </Dialog>
      </Box>
    );
}
