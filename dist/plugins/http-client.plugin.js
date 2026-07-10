import axios from "axios";
export const buildHttpClient = (headers) => {
    return {
        get: async (url) => {
            const { data } = await axios.get(url, { headers });
            return data;
            //const response = await fetch(url);
            //return await response.json();
        },
        post: async (url, data) => {
            throw new Error('Not implemented');
        },
        put: async (url, data) => {
            throw new Error('Not implemented');
        },
        delete: async (url) => {
            throw new Error('Not implemented');
        },
    };
};
const http = buildHttpClient({});
