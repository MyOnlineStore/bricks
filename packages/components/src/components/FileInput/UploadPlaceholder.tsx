import React, { FC } from 'react';
import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import { PropsType as FileInputPropsType } from './';
import { CloudUploadIcon } from '@myonlinestore/bricks-assets';

export type PropsType = {
    dragging: boolean;
    translations: FileInputPropsType['translations'];
};

const UploadPlaceholder: FC<PropsType> = props => {
    return (
        <Box>
            <Box direction="column" justifyContent="center" alignItems="center">
                <Icon icon={<CloudUploadIcon />} size="large" />
                <Text textAlign="center">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: props.dragging ? props.translations.dropHere : props.translations.placeholder,
                        }}
                    />
                </Text>
            </Box>
        </Box>
    );
};

export default UploadPlaceholder;
