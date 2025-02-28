
import axios from "axios"

export default {
    addCategory:(args)=>{

        return axios.post( process.env.NEXT_PUBLIC_MERI_WEBSITE + '/api/category/addCategory', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    getCategories:(args)=>{

       return axios.post( process.env.NEXT_PUBLIC_MERI_WEBSITE + '/api/category/getCategories', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    deleteCategory:(args)=>{

       return axios.post( process.env.NEXT_PUBLIC_MERI_WEBSITE + '/api/category/deleteCategory', {  
            ...args,
            token:localStorage.getItem('token')
        });
        
    },

    // deleteBankAccount:(args)=>{

    //     return axios.post('/api/bank/deleteBankAccount', {  
    //          ...args,
    //          token:localStorage.getItem('token')
    //      });
         
    //  },





}