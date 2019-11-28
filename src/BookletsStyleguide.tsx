import * as React from 'react';
import {Page, Text, Rectangle} from "react-figma";

export const BookletsStyleguide = () => {
    return (
        <Page name="Booklets Styleguide">
            <Text characters="Hello, react-figma!"/>
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#0ddd25' }} />
            <Rectangle style={{ width: 200, height: 100, backgroundColor: '#a6dd00' }} />
        </Page>
    );
};
