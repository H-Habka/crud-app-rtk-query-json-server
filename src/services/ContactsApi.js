import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
    reducerPath: "contacts",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes : ['contacts'],
    endpoints: (builder) => ({
        contacts: builder.query({
            query: () => "/contacts",
            providesTags : ["contacts"]
        }),

        addContact: builder.mutation({
            query: (contactDetails) => ({
                url: "/contacts",
                method: "POST",
                body: contactDetails,
            }),
            invalidatesTags : ['contacts']
        }),

        singleContact: builder.query({
            query: (id) => `/contacts/${id}`,
            providesTags : ["contacts"]
        }),
        
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags : ['contacts']
        }),

        updateContact: builder.mutation({
            query: ({id,...body}) => ({
                url: `/contacts/${id}`,
                method: "PUT",
                body
            }),
            invalidatesTags : ['contacts']
        }),
    }),
});

export const {
    useContactsQuery,
    useAddContactMutation,
    useSingleContactQuery,
    useDeleteContactMutation,
    useUpdateContactMutation
} = contactsApi;
