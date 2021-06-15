import React, { useState } from 'react';
import ColorPicker from './index';
import Button from '../Button';

export default {
    title: 'ColorPicker',
    component: ColorPicker,
};

export const Default = () => {
    const [color, setColor] = useState('#EEBE2E');
    const [show, setShow] = useState(true);

    return (
        <ColorPicker
            transparentSwatch
            show={show}
            color={color}
            onClickOutside={() => {
                setShow(false);
            }}
            onChange={color => {
                setColor(color.hex);
            }}
        >
            <Button
                variant="primary"
                title={`Change color ${color.toUpperCase()}`}
                onClick={() => {
                    setShow(!show);
                }}
            />
        </ColorPicker>
    );
};
