import axios from "../axios";
import qs from 'qs'

class LoginService{
     postLogin=async (data)=>{
        const promise = new Promise((resolve, reject) => {
            axios.post('auth/login',data).then((res)=>{
                return resolve(res)
            }).catch((err)=>{
                return resolve(err)
            })
        })
        return await promise;
    }

}
export default new LoginService();