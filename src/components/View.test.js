import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleService from '../services/articleServices';

test("renders zero articles without errors", async () => {
	render(<View />);
});

const threeArticles = [
	{
		id: "abc",
		headline: "headline",
		author: "author",
		summary: "summary",
		body: "article body"
	},
	{
		id: "abc",
		headline: "headline",
		author: "author",
		summary: "summary",
		body: "article body"
	},
	{
		id: "abc",
		headline: "headline",
		author: "author",
		summary: "summary",
		body: "article body"
	}
]

test("renders three articles without errors", async ()=> {
	jest.mock(articleService())
	
	render(<View />);
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.