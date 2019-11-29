
    import React, { FC } from 'react';
        import Document from '/Users/henk/Documents/Development/bricks/docs/design-docs/content/index.mdx';
        import componentMap from '../../../lib/componentMap';
        import GeneratedPage from '../../../components/GeneratedPage';

        const Components: FC = () => {
            return (
                <GeneratedPage dirName={'content'}>
                    <Document components={componentMap} />
                </GeneratedPage>
            );
        };

        export default Components;
    