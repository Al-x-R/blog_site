import client from './sanity';

const postFields = `
    title,
    excerpt,
    'slug': slug.current,
    'author': author->{name, 'image': image.asset->url},
    'mainImage': mainImage.asset->url,
    publishedAt,
    body[]{..., asset->}
`;
export const getAllPosts = async () => {
    return await client.fetch(`*[_type == "post"]{${postFields}}`);
};

export const getPostBySlug = async (slug) => {
    return await client.fetch(`
    *[_type == "post" && slug.current == $slug]{${postFields}}
  `, { slug }).then(res => res[0]);
};