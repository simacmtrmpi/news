import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const GetContext = () => {

      const all = useContext(AuthContext)
      return all
};

export default GetContext;