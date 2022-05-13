import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IContacts } from '../Types/ContactsTypes'

export const contactAPI = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    tagTypes: ['Create'],
    endpoints: (build) => ({
        getAllContacts: build.query<IContacts[], number>({
            query: (limit: number = 10) => ({
                url: `contacts`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Create']
        }),
        createContact: build.mutation<IContacts, IContacts>({
            query: (contact) => ({
                url: `contacts`,
                method: 'POST',
                body: contact
            }),
            invalidatesTags: ['Create']
        }),
        updateContact: build.mutation<IContacts, IContacts>({
            query: (contact) => ({
                url: `contacts/${contact.id}`,
                method: 'PUT',
                body: contact
            }),
            invalidatesTags: ['Create']
        }),
        deleteContact: build.mutation<IContacts, IContacts>({
            query: (contact) => ({
                url: `contacts/${contact.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Create']
        }),
    }),
});