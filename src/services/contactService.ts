import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IContacts } from '../Types/ContactsTypes'

export const contactAPI = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    endpoints: (build) => ({
        getAllContacts: build.query<IContacts[], number>({
            query: (limit: number = 10) => ({
                url: `contacts`,
                params: {
                    _limit: limit
                }
            }),
        }),
    }),
});