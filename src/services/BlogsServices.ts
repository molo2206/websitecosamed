import requests from './Instance'
const BlogServices = {
	getBlog: async () => {
		return requests.get(`/public/blogs`)
	},
	oneBlog: async (id: any) => {
		return requests.get(`/public/blogs/detail/${id}`)
	},
	getBlogHome: async()=>{
		return requests.get('/public/bloghome')
	}
}
export default BlogServices
