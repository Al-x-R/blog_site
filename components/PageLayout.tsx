import React, { FC, ReactNode } from 'react';
import { NavbarWithRightCta } from './NavbarWithRightCta/NavbarWithRightCta';
import { SimpleFooter } from './SimpleFooter/SimpleFooter';

type Props = {
    children: ReactNode | HTMLDivElement;
};


const PageLayout: FC<Props> = ({children}: Props): JSX.Element => {

    return (
        <>
            <NavbarWithRightCta/>
            {children}
            <SimpleFooter/>
        </>
    );
};

export default PageLayout;