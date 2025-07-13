import { createSlice } from "@reduxjs/toolkit"

// Initial state structure
const INITIAL_STATE = {
  alljobs: [],        // Original list of all jobs
  filterjobs: [],
  favouritejob:[]    // Filtered list to display based on price/search
};

const jobslice = createSlice({
  name: 'product',
  initialState: INITIAL_STATE,

  reducers: {

    // 🔄 Set the full list of jobs 
    setjoblists: (state, action) => {
      state.alljobs = action.payload;
      console.log(action.payload)
    },



    // 💰 Filter jobs by salary
    pricefilter: (state,action) => {
        if(action.payload==="lowtohigh"){
       state.filterjobs=state.alljobs.sort((a,b)=>a.salary-b.salary)
        }
        else{
            state.filterjobs=state.alljobs.sort((a,b)=>b.salary-a.salary)
        }
    },

    // 🔎 Search products by jobtitle
    searchjobstitle: (state, action) => {
      state.filterjobs = state.alljobs.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },

     // 🔎 Search products by joblocation
     searchjobslocation: (state, action) => {
      state.filterjobs = state.alljobs.filter((item) =>
       item.location.toLowerCase().includes(action.payload.trim().toLowerCase())
      );
    },

  


  
   
  }
  
});

// Export actions and reducer
export const {
  setjoblists,pricefilter,searchjobslocation,searchjobstitle
  
} = jobslice.actions;

export default jobslice.reducer;
