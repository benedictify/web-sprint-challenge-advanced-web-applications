import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from '@testing-library/react';

const initialArticle = {
	id: "",
	headline: "",
	author: "",
	summary: "",
	body: ""
};

test('renders component without errors', () => {
	render(<Article article={initialArticle} handleDelete={() => { }} handleEditSelect={() => { }} />);
});

test('renders headline, author from the article when passed in through props', ()=> {
	const testArticle = {
		id: "abc",
		headline: "headline",
		author: "author",
		summary: "summary",
		body: "article body"
	}

	render(<Article article={testArticle} />)

	const headline = screen.queryByText(/headline/i);
	const author = screen.queryByText(/author/i);
	const summary = screen.queryByText(/summary/i);
	const body = screen.queryByText(/article body/i);

	expect(headline).toBeInTheDocument();
	expect(author).toBeInTheDocument();
	expect(summary).toBeInTheDocument();
	expect(body).toBeInTheDocument();
});

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });
