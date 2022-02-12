import React, { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import { NavbarWithRightCta } from './NavbarWithRightCta/NavbarWithRightCta';
import { SimpleFooter } from './SimpleFooter/SimpleFooter';

type Props = {
    children: ReactNode | HTMLDivElement;
};


const PageLayout: FC<Props> = ({children}: Props): JSX.Element => {

    return (
        <>
            <NavbarWithRightCta/>
            <Box minH="calc(100vh - 245px)">
               {children}
            </Box>
            <SimpleFooter/>
        </>
    );
};

export default PageLayout;