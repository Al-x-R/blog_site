import sanityClient from '@sanity/client';

// const options = {
//     dataset: process.env.SANITY_DATASET_NAME,
//     projectId: process.env.SANITY_PROJECT_ID,
//     useCdn: process.env.NODE_ENV === 'production'
// };

const options = {
  projectId: 'rzyvmrf2',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false, // `false` if you want to ensure fresh data
}

export default sanityClient(options);