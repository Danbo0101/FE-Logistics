import axios from "../utils/axiosCustomize";

const getAllProduct = () => {
    return axios.get('sanpham');
}


// const getAllUser = () => {
//     return axios.get('api/v1/participant/all');
// }hook class

export {
    getAllProduct,
    // getAllUser

}
