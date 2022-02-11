import type { NextPage } from 'next';

import PageLayout from '../components/PageLayout';
import { BlogWithTile } from '../components/BlogWithTile/BlogWithTile';


const Home: NextPage = () => {
    return (
        <PageLayout>
            <BlogWithTile/>
        </PageLayout>
    );
};

export default Home;
