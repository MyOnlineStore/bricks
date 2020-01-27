
    import React, { FC } from 'react';
        import Document from '/Users/henk/Documents/Development/bricks/docs/markdown/design/layout.mdx';
        import componentMap from '../../../lib/componentMap';
        import GeneratedPage from '../../../components/GeneratedPage';

        const Components: FC = () => {
            return (
                <GeneratedPage dirName={'design'}>
                    <Document components={componentMap} />
                </GeneratedPage>
            );
        };

        export default Components;
    