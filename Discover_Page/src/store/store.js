import  {configureStore} from '@reduxjs/toolkit'
import AllDataSlice from './AllDataSlice'

const store=configureStore({
   reducer:{
      Alldata:AllDataSlice
   }
})

export default store;