import {useQuery} from "@tanstack/react-query";


const getCurrentUser = async () => {

    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve({
                id : "123",
                name:"Vijay",
                email:"chauhanvijay090@gmail.com",
                role:"authenticated",
            })
        } , 500)
    })
}
export function useUser(){
   const {isLoading , data : user } = useQuery({
      queryKey :["user"],
      queryFn : getCurrentUser,
   });

    return {
        isLoading , user,isAuthenticated : user?.role === 'authenticated'
    };
}