import axios from 'axios';
import https from 'https';
import {baseURL} from "../config";

export default axios.create({
    baseURL: baseURL,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    }),
});
