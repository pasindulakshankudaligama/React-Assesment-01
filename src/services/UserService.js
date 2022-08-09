import axios from "../axios";
import qs from 'qs'

class UserService{
    postUser = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('users', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    deleteUser = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('users',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
    updateUser = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.put('users',data)
                .then((res)=>{
                    return resolve(res)
                }).catch((err)=>{
                return resolve(err)
            })
        });
        return await promise;
    }
    fetchUser = async (id) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('users/id',{params:{id:id}})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
    fetchUsers = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('users')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
}
export default new UserService();