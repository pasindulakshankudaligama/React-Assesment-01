import axios from '../axios';
import qs from 'qs';

class ProductsService {
    postProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('products', qs.stringify(data))
        .then((res) => {
                return resolve(res)
            }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    deleteProduct = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('products',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
    updateProduct = async (data) =>{
        const promise = new Promise((resolve, reject) => {
            axios.put('products',data)
                .then((res)=>{
                    return resolve(res)
                }).catch((err)=>{
                return resolve(err)
            })
        });
        return await promise;
    }
    fetchProduct = async (id) =>{
        const promise = new Promise((resolve, reject) => {
            axios.get('products/id',{params:{id:id}})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        })
        return await promise;
    }
    fetchProducts = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    fetchProductsLimit = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    fetchProductsSort = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products',{params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    fetchCategory=async ()=>{
        const promise = new Promise((resolve, reject) => {
            axios.get('products/categories').then((res)=>{
                return resolve(res)
            }).catch((err)=>{
                return resolve(err)
            })
        })
        return await promise;
    }
}
export default new ProductsService();