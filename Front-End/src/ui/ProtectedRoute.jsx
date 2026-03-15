

import { useNavigate } from "react-router-dom";
import {useUser} from "../Features/Authentication/useUser";
import { useEffect } from "react";
import Spinner from "./Spinner";

function ProtectedRoute({children}){
    

    const navigate = useNavigate();

    const {isLoading , isAuthenticated} = useUser();


    useEffect(
      function(){
        if(!isAuthenticated && !isLoading){
            navigate('/');
        }
      },
      [isAuthenticated , isLoading , navigate]
    );



    if(isLoading){

        return (
               <div className="h-[100vh] bg-grey-100 flex items-center justify-center">

            <Spinner />

        </div>
        )
         
    }

    if(isAuthenticated) return children;
}


export default ProtectedRoute;