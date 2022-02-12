import { FC } from 'react';
import { Box, BoxProps, Heading, Text, useColorModeValue as mode } from '@chakra-ui/react';

import { BlogAuthor } from './BlogAuthor';
import { BlogMedia } from './BlogMedia';
// import { BlogMeta } from './BlogMeta';
import { PostData } from './BlogWithTile';
import { formatDate } from '../../utils/helpers';

export interface BlogData {
    type: 'article' | 'webinar' | 'video';
    tags: string[];
    title: string;
    description: string;
    image: string;
    href?: string;
    author?: {
        name: string
        image: string
        title: string
    };
}

interface BlogCardProps extends BoxProps {
    data: BlogData;
}

export const BlogCard: FC<PostData> = ({data}: PostData) => {
    const {author, title, excerpt, mainImage, publishedAt, slug} = data;

    const dateString = formatDate(publishedAt);

    return (
        <Box>
            <BlogMedia src={mainImage} alt={title}/>
            <Box mt="6">
                {/*<BlogMeta tags={tags} type={type} />*/}
                <Box mb="6" as='a' href={`posts/${slug}`}>
                    <Box>
                        <Heading size="md" mt="6" mb="4">
                            {title}
                        </Heading>
                    </Box>
                    <Text color={mode('gray.600', 'gray.400')} lineHeight="tall">
                        {excerpt}
                    </Text>
                </Box>
                <Box mt="4">
                    {author && <BlogAuthor name={author.name} image={author.image} role={author.title}/>}
                </Box>
                <Box mt="4">
                    {`Published: ${dateString}`}
                </Box>
            </Box>
        </Box>
    );
};
