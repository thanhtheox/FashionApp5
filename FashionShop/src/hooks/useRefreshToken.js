
import { axiosPrivate } from "../apis/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const { auth,setAuth } = useAuth();
    const refresh = async () => {
        const response = await axiosPrivate.get(
            '/refresh', 
            {
                withCredentials: true
            }
        );
        setAuth({
            ...auth, accessToken: response.data.accessToken
        });
    }
    return refresh;
};

export default useRefreshToken;