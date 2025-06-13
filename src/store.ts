import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getToken = () => typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;

export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:4000',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    login: build.mutation<{ token: string }, { email: string; password: string }>({
      query: (body) => ({ url: 'admin/login', method: 'POST', body }),
    }),
    getBookings: build.query<any[], void>({
      query: () => 'admin/bookings',
    }),
  }),
});

export const { useLoginMutation, useGetBookingsQuery } = bookingApi;

export const store = configureStore({
  reducer: {
    [bookingApi.reducerPath]: bookingApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(bookingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
