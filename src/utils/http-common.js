import axios from 'axios';
import https from 'https';
import {baseURL} from "../config";

console.log(process.en);
export default axios.create({
    baseURL: baseURL,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    }),
});
