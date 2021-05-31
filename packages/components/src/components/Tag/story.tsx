import React from 'react';
import Tag from '.';

export default {
    title: 'Tag',
    component: Tag,
};

export const Default = () => {
    return <Tag label="Short Label" />;
};

export const WithCloseButton = () => {
    return (
        <Tag
            label="With close button"
            onClick={() => {
                alert('Delete');
            }}
        />
    );
};

export const LongLabel = () => {
    return (
        <Tag label="Fire up your browser focus on the customer journey code. Products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved. Quick win." />
    );
};

export const LongLabelWithCloseButton = () => {
    return (
        <Tag
            label="Fire up your browser focus on the customer journey code. Products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved. Quick win."
            onClick={() => {
                alert('Delete');
            }}
        />
    );
};
