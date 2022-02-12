import { FC, ReactNode } from 'react';
import { Box, Heading, SimpleGrid, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { jsx } from '@emotion/react';
import IntrinsicAttributes = jsx.JSX.IntrinsicAttributes;

import { BlogCard } from './BlogCard';

export interface PostData {
    title: string;
    excerpt: string;
    slug: string;
    authorId: string;
    mainImage: string;
    publishedAt: Date;
}

export const BlogWithTile: FC<PostData> = (
    {data}: IntrinsicAttributes & PostData & { children?: ReactNode }
): JSX.Element => {
    return (
        <Box bg={mode('gray.50', 'inherit')} as="section" py="24">
            <Box maxW={{base: 'xl', md: '2xl', lg: '7xl'}} mx="auto" px={{base: '6', md: '8'}}>
                <Box textAlign="center" maxW="md" mx="auto">
                    <Heading size="2xl" fontWeight="extrabold" letterSpacing="tight">
                        Blog
                    </Heading>
                    <Text mt="4" fontSize="lg" color={mode('gray.600', 'gray.400')}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus
                        atque, ducimus sed.
                    </Text>
                </Box>
                <SimpleGrid mt="14" columns={{base: 1, lg: 3}} spacing="14">
                    {data.map((item: PostData) => (
                        <BlogCard key={item.slug} data={item}/>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
};
