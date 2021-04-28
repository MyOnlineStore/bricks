import React, { FC } from 'react';
import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';
import { CloudUploadIcon } from '@myonlinestore/bricks-assets';

export type InputSeverityType = 'error';

export type PropsType = {
    dragging: boolean;
};

const UploadPlaceholder: FC<PropsType> = props => {
    return (
        <Box>
            <Box direction="column" justifyContent="center" alignItems="center">
                <Icon icon={<CloudUploadIcon />} size="large" />
                <Text textAlign="center">
                    {props.dragging ? (
                        <>Drop your file here</>
                    ) : (
                        <>
                            Drag and drop here
                            <br />
                            or <u>browse</u>
                        </>
                    )}
                </Text>
            </Box>
        </Box>
    );
};

export default UploadPlaceholder;
