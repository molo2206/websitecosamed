import requests from './Instance'
const BlogServices = {
	getBlog: async () => {
		return requests.get(`/public/blogs`)
	},
	oneBlog: async (id: any) => {
		return requests.get(`/blogs/${id}`)
	},
}
export default BlogServices
