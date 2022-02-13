import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Box, Container, Heading, Text, useColorModeValue as mode } from '@chakra-ui/react';

import PageLayout from '../../components/PageLayout';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import { PostData } from '../../components/BlogWithTile/BlogWithTile';
import { BlogAuthor } from '../../components/BlogWithTile/BlogAuthor';
import { formatDate } from '../../utils/helpers';
import { BlogMedia } from '../../components/BlogWithTile/BlogMedia';


interface TypeProps extends Record<string, unknown> {
    // menu: Post[];
    // firstCategory: number;
}

const Post = ({post}) => {
    const router = useRouter();
    console.log('post', post);
    const postDate = formatDate(post.publishedAt);

    if (router.isFallback) {
        return (
            <PageLayout>
                Loading...
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <Container>
                <BlogAuthor image={post.author.image} name={post.author.name}/>
                <Heading size="2xl" fontWeight="extrabold" letterSpacing="tight">
                    {post.title}
                </Heading>
                <Text mt="2" fontSize="lg" color={mode('gray.600', 'gray.400')}>
                    {postDate}
                </Text>
                <BlogMedia src={post.mainImage} alt={post.title}/>
                <Text>
                    {post.body[0].children[0].text}
                </Text>
            </Container>
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