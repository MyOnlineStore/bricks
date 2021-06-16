import React, { ComponentProps, useState } from 'react';
import ImageRadio from './index';
import Box from '../Box';

export default {
    title: 'ImageRadio',
    component: ImageRadio,
};

export const Default = (props: ComponentProps<typeof ImageRadio>) => {
    const [checked, setChecked] = useState([true, false]);

    return (
        <Box justifyContent="flex-start">
            <Box grow={0} margin={[0, 24, 0, 0]}>
                <ImageRadio
                    {...props}
                    image={
                        <svg
                            width="181"
                            height="63"
                            viewBox="0 0 181 63"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect x="0.5" y="0.5" width="180" height="62" stroke="#D3D5D9" stroke-dasharray="3 2" />
                            <path d="M31 0H151V63H31V0Z" fill="#E6E7EB" />
                            <rect y="21" width="181" height="21" fill="currentColor" />
                        </svg>
                    }
                    checked={checked[0]}
                    name="demo1"
                    label="Pick this image..."
                    value="demo1"
                    onChange={() => setChecked([true, false])}
                />
            </Box>
            <Box grow={0}>
                <ImageRadio
                    {...props}
                    image={
                        <svg
                            width="181"
                            height="63"
                            viewBox="0 0 181 63"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect x="0.5" y="0.5" width="180" height="62" stroke="#D3D5D9" stroke-dasharray="3 2" />
                            <path d="M31 0H151V63H31V0Z" fill="#E6E7EB" />
                            <rect x="31" y="21" width="120" height="21" fill="currentColor" />
                        </svg>
                    }
                    checked={checked[1]}
                    name="demo2"
                    label="...or pick this one"
                    value="demo2"
                    onChange={() => setChecked([false, true])}
                />
            </Box>
        </Box>
    );
};
