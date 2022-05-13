import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField } from '@mui/material'
import React, { FC, useState } from 'react'
import { IContacts } from '../Types/ContactsTypes';

interface IDialogComponentProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    update: (contact: IContacts) => void,
    contact: IContacts,
}

export const UpdateDialogComponent:FC<IDialogComponentProps> = ({open, setOpen, update, contact}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleUpdate = (e: React.MouseEvent) => {
        e.stopPropagation()
        update({...contact, name, email})
        handleClose()
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
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
                        onClick={handleUpdate}
                >
                    Create
                </Button>
            </DialogActions>
    </Dialog>
    )
}
