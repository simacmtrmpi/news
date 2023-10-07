import { Navigate, useLocation } from "react-router-dom";
import GetContext from "../../🟢 Provider/GetContext";


const Gurd = ({children}) => {
      
      const {user,loading} = GetContext()
      const location = useLocation()


      if(loading){
            return <p>Loading...</p>
      }

      if(user){
            return children
      }
      return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Gurd;