import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Box } from '@chakra-ui/react';

import PageLayout from '../../components/PageLayout';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import { PostData } from '../../components/BlogWithTile/BlogWithTile';


interface TypeProps extends Record<string, unknown> {
    // menu: Post[];
    // firstCategory: number;
}

const Post = ({post}) => {
    const router = useRouter();
    console.log(post);

    if (router.isFallback) {
    return (
      <PageLayout>
        Loading...
      </PageLayout>
    )
  }

    return (
        <PageLayout>
            <Box h="100%" w="100%" d="flex" alignItems="center" justifyContent="center">
                hello
            </Box>
        </PageLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();
    const paths = posts?.map((p: { slug: any; }) => ({params: {slug: p.slug}}));

    return {
        paths,
        fallback: true
    };
};


export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    try {
        if (!params) {
            return {
                notFound: true
            };
        }

        const post = await getPostBySlug(params.slug);

        return {
            props: {post},
            // unstable_revalidate: 1
        };
    } catch {
        return {
            notFound: true
        };
    }

};

export default Post;