import Axios from 'axios';
import { DEFAULT_URL } from "@/config/index"

const axios = Axios.create({
	baseURL: DEFAULT_URL,
})

export default axios;