import React from 'react';
import type { NextPage } from 'next';

import PageLayout from '../components/PageLayout';
import { BlogWithTile } from '../components/BlogWithTile/BlogWithTile';
import { getAllPosts } from '../lib/api';


const Home: NextPage = (posts) => {
    const data = posts.posts

    return (
        <>
            <PageLayout>
                <BlogWithTile data={data} />
            </PageLayout>
        </>

    );
};

export async function getStaticProps() {
    const posts = await getAllPosts()
    // const posts = JSON.stringify(data)

    return {
        props: {
            posts
        }
    };
}

export default Home;
