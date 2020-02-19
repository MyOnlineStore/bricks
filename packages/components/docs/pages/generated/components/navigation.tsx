
    import React, { FC } from 'react';
        import Document from '/Volumes/dev/bricks/packages/components/docs/markdown/components/navigation.mdx';
        import componentMap from '../../../lib/componentMap';
        import GeneratedPage from '../../../components/GeneratedPage';

        const Components: FC = () => {
            return (
                <GeneratedPage dirName={'components'}>
                    <Document components={componentMap} />
                </GeneratedPage>
            );
        };

        export default Components;
    