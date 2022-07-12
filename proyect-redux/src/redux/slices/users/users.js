import { createSlice } from '@reduxjs/toolkit'


export const usersSlice = createSlice({

    name: 'users',
    
    initialState: {
        list: []
    },

    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload;
        }
    }

})

export const { setUserList } = usersSlice.actions


export default usersSlice.reducer


export const getAllUsers =  () => async (dispatch) => {

    const url = 'https://reqres.in/api/users?page=1'

    const res = await fetch(url)
    const {data} = await res.json()

    dispatch( setUserList(data))
        
}