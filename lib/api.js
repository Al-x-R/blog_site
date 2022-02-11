import client from './sanity';

export const getAllPosts = async () => {
    return await client.fetch(`*[_type == "post"]`);
};

export const getPostBySlag = async (slug) => {
    return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug });
};