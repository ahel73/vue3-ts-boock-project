import axios, {
    AxiosRequestConfig,
    AxiosResponse
} from 'axios'

import { HttpRequestParamsInterface } from './HttpRequestParams.interface'
import { HttpClientInterface } from './HttpClient.interface'

/**
* @name HttpClientModel
* @description
* Обёртка для функциональности HTTP-клиента позволяет избежать прямого использовани\
я стороннего npm-пакета (например, axios)
* и упростить его замену в будущем, если данный npm-пакет перестанет поддерживаться\
, либо в силу других причин.
*/
export class HttpClientModel implements HttpClientInterface { 
    private getToken(): string {
        const TOKEN_KEY = process.env && process.env.VUE_APP_TOKEN_KEY
                        ? process.env.VUE_APP_TOKEN_KEY : 'myapp-token'
        const token = localStorage.getItem(TOKEN_KEY) || ''
        return token
    }

    constructor() {
    // НЕОБЯЗАТЕЛЬНО на данный момент: добавить перехватчик запросов для обработки ошибок.
    }

    get<T, D>(parameters: HttpRequestParamsInterface<D>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const { url, requiresToken } = parameters
            // Опции axios
            const options: AxiosRequestConfig = {
                headers: {}
            }
            if (requiresToken) {
                const token = this.getToken();
                if (typeof options.headers !== 'undefined') {
                    options.headers.RequestVerificationToken = token
                }                
            }
            axios
            .get(url, options)
            .then((response: AxiosResponse) => {
                resolve(response.data as T)
            })
            .catch((response: AxiosResponse) => {
                console.info('------ rejecting ----')
                reject(response)
            })
        })
    }

    post<T, D>(parameters: HttpRequestParamsInterface<D>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const { url, requiresToken, payload } = parameters
            // Опции axios
            const options: AxiosRequestConfig = {
            headers: {}
            }
            if (requiresToken) {
                const token = this.getToken()
                if (typeof options.headers !== 'undefined') { 
                    options.headers.RequestVerificationToken = token
                }            
            }

            axios
            .post(url, payload, options)
            .then((response: AxiosResponse) => {
                resolve(response.data as T)
            })
            .catch((response: AxiosResponse) => {
                reject(response)
            })
        })
    }
}