import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/usersApi";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async () => {
    const data = await fetchUsers();
    return data.users; 
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    search: "",
    loading: false
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  }
});

export const { setSearch } = usersSlice.actions;
export default usersSlice.reducer;

