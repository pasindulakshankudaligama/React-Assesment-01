import axios from "../axios";
import qs from 'qs'

class CartService{
    postCartNewProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('carts', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    deleteCartProduct = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('carts',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
    updateCartProduct = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.put('carts',data)
                .then((res)=>{
                    return resolve(res)
                }).catch((err)=>{
                return resolve(err)
            })
        });
        return await promise;
    }
    fetchCartProduct = async (id) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('carts/id',{params:{id:id}})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
    fetchCartProducts = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('carts')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    fetchCartProductsLimit = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('carts',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    fetchCartProductsSort = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('carts',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
}
export default new CartService();