import client from './sanity';

const postFields = `
    title,
    excerpt,
    'slug': slug.current,
    'author': author->{name, 'image': image.asset->url},
    'mainImage': mainImage.asset->url,
    publishedAt,
`
export const getAllPosts = async () => {
    return await client.fetch(`*[_type == "post"]{${postFields}}`);
};

export const getPostBySlag = async (slug) => {
    return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug });
};