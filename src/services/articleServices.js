import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = (setArticles) => {
	axiosWithAuth().get('/articles')
		.then(response => {
			setArticles(response.data)
		})
		.catch(error => {
			console.log(error);
		});
}

export default articleService;
