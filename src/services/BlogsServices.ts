import requests from './axios/index'
const BlogServices = {
	getBlog: async () => {
		return requests.get(`/public/blogs`)
	},
}
export default BlogServices
