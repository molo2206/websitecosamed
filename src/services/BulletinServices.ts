import requests from './Instance'

const BulletinServices = {
    getBulletin: async () => {
        return requests.get(`/public/bulletins`)
    },
}

export default BulletinServices