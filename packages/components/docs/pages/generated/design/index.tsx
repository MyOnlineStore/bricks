
    import React, { FC } from 'react';
        import Document from '/Volumes/dev/bricks/packages/components/docs/markdown/design/index.mdx';
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
    