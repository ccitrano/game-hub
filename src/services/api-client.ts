import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fe159d9967f044798a2a37577423de92'
    }
})