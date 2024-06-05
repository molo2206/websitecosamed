import requests from './Instance'
const SettingsServices = {
    getSettings: async () => {
		return requests.get(`/settings`)
	}
}

export default SettingsServices