import React, { FC, useState } from 'react';
import { Box, Contrast, NativeSelect, Heading } from '@myonlinestore/bricks';
import styled from 'styled-components';

type PropsType = {};

const StyledContrast = styled(Contrast)`
    border-radius: 9px;
`;

const options = [
    {
        value: '0',
        label: 'hoi',
    },
    {
        value: '1',
        label: 'poep',
    },
];

const components = [<div key={0}>WAJOOOO</div>, <div key={1}>POEP</div>];

const PreviewPane: FC<PropsType> = props => {
    const [selectedComponent, setSelectedComponent] = useState(0);

    return (
        <StyledContrast>
            <Box padding={[36]} direction="column" width="100%">
                <Box>
                    <Box padding={[12, 12, 48, 0]}>
                        <Heading hierarchy={5} as="h5">
                            Examples
                        </Heading>
                        <NativeSelect
                            value={selectedComponent.toString()}
                            onChange={value => setSelectedComponent(parseInt(value, 2))}
                            options={options}
                        />
                    </Box>
                </Box>

                <Box style={{ backgroundColor: 'white' }} padding={[48]}>
                    {components[selectedComponent]}
                </Box>
            </Box>
        </StyledContrast>
    );
};

export default PreviewPane;
