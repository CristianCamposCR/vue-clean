import { AxiosRequestConfig } from 'axios';
import AxiosClient from './axios'

export default {
    doGet(endPoint: string){
        return AxiosClient.get(endPoint);
    },

    doPost(endPoint: string, object: object, config?: AxiosRequestConfig){
        return AxiosClient.post(endPoint, object, config);
    }
}