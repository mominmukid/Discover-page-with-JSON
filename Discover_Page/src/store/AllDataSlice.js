import  {createSlice} from '@reduxjs/toolkit'
import topdata  from '../../API/TopNewsData.json'

const initialstate={
   alldata:topdata
}

const AllDataSlice= createSlice(
   {
      name: 'datas',
      initialState: initialstate,
         reducers:{
            setAllData:(state,action)=>{
               state.alldata=action.payload
            }
         }
   }
)

export const{setAllData}=AllDataSlice.actions;
export default AllDataSlice.reducer;