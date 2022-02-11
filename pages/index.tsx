import React from 'react';
import type { NextPage } from 'next';

import PageLayout from '../components/PageLayout';
import { BlogWithTile } from '../components/BlogWithTile/BlogWithTile';
import { getAllPosts } from '../lib/api';


const Home: NextPage = (posts) => {
    console.log('posts', posts);
    return (
        <>
            <PageLayout>
                <BlogWithTile/>
            </PageLayout>
        </>

    );
};

export async function getStaticProps() {
    const data = await getAllPosts()
    const posts = JSON.stringify(data)

    return {
        props: {
            posts
        }
    };
}

export default Home;
