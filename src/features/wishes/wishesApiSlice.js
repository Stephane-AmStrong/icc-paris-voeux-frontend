import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const wishesAdapter = createEntityAdapter({
  sortComparer: (a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1,
});

const initialState = wishesAdapter.getInitialState();

export const wishesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWishes: builder.query({
      query: () => ({
        url: "/wishes",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const loadedWishes = responseData.map((wish) => {
          wish.id = wish._id;
          return wish;
        });
        return wishesAdapter.setAll(initialState, loadedWishes);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Wish", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Wish", id })),
          ];
        } else return [{ type: "Wish", id: "LIST" }];
      },
    }),
    createWish: builder.mutation({
      query: (initialWish) => ({
        url: "/wishes",
        method: "POST",
        body: {
          ...initialWish,
        },
      }),
      invalidatesTags: [{ type: "Wish", id: "LIST" }],
    }),
    updateWish: builder.mutation({
      query: (initialWish) => ({
        url: "/wishes",
        method: "PATCH",
        body: {
          ...initialWish,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Wish", id: arg.id }],
    }),
    deleteWish: builder.mutation({
      query: ({ id }) => ({
        url: `/wishes`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Wish", id: arg.id }],
    }),
  }),
});

export const {
  useGetWishesQuery,
  useCreateWishMutation,
  useUpdateWishMutation,
  useDeleteWishMutation,
} = wishesApiSlice;

// returns the query result object
export const selectWishesResult = wishesApiSlice.endpoints.getWishes.select();

// creates memoized selector
const selectWishesData = createSelector(
  selectWishesResult,
  (wishesResult) => wishesResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllWishes,
  selectById: selectWishById,
  selectIds: selectWishIds,
  // Pass in a selector that returns the wishes slice of state
} = wishesAdapter.getSelectors(
  (state) => selectWishesData(state) ?? initialState
);
