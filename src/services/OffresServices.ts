import requests from './Instance'
const OffresServices = {
    getOffres: async () => {
        return requests.get(`/getOffres`)
    },
    oneOffres: async (id: any) => {
        return requests.get(`/getOffres/detail/${id}`)
    },
    getOffresHome: async () => {
        return requests.get('/public/bloghome')
    }
}
export default OffresServices
