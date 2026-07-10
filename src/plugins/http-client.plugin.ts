import axios from "axios";


export const buildHttpClient = (headers: Record<string, string>)=>{
    return{
            get: async (url: string) => {
        const {data} = await axios.get(url, {headers});
        return data;
        //const response = await fetch(url);
        //return await response.json();
    },

    post: async (url: string, data: any) => {
        throw new Error('Not implemented');
    },

    put: async (url: string, data: any) => {
        throw new Error('Not implemented');
    },

    delete: async (url: string) => {
        throw new Error('Not implemented');
    },
    }
}
const http = buildHttpClient({});
