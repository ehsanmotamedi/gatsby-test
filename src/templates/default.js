import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data}) {
	const page = data.markdownRemark;
	return(
		<div>
		<h1>{page.frontmatter.title}</h1>
		<p dangerouslySetInnerHTML={{__html: page.html}} />
		</div>
		);
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!){
		markdownRemark(frontmatter: { path: { eq: $path } }){
			html
			frontmatter{
				path
				title
			}
		}
	}
`