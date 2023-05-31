import type { ReactElement } from 'react';
// import Layout from '../components/layout';
// import NestedLayout from '../components/nested-layout';
import type { NextPageWithLayout } from './_app';
import HomePage from './home';

const Page: NextPageWithLayout = () => {
    return <>
        <HomePage />
    </>;
};

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <main>
            {/* <Layout> */}
            {/* <NestedLayout> */}
            {page}
            {/* </NestedLayout> */}
            {/* </Layout> */}
        </main>
    );
};

export default Page;