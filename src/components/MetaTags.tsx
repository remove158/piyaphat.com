import Head from "next/head";
import React from "react";

//-------------------------------------------------------------------------//
// summary :  component types section
//-------------------------------------------------------------------------//
interface Props {}

//-------------------------------------------------------------------------//
// summary : component function section
//-------------------------------------------------------------------------//
const MetaTags: React.FC<Props> = (props) => {
	return (
		<Head>
			<title>Piyaphat.com</title>
			<meta name="description" content="personal website" />
			<meta name="theme-color" content="#082424" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default MetaTags;
