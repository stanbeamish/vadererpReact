import React from 'react';
import { Primary } from '../Button/Button.stories';
import { Large } from '../Input/Input.stories';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Form/Predesigned/Subscription',    
}

export const PrimarySubscription = () => (    
    <>
        <Large/>&nbsp;
        <Primary />
    </>
);
