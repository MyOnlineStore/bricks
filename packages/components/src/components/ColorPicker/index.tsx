import React, { FC } from 'react';
import Box from '../Box';
import { CustomPicker, ColorResult, HSLColor } from 'react-color';
import { Hue, Saturation } from 'react-color/lib/components/common';
import styled from 'styled-components';
import Popover from '../Popover';
import ColorDrop from '../ColorDrop';

type PropsType = {
    show: boolean;
    transparentSwatch?: boolean;
    color: string;
    hex?: string;
    hsl?: HSLColor;
    onChange(value: ColorResult): void;
    onClickOutside(): void;
};

const CustomHuePointer = styled.div`
    display: flex;
    width: 18px;
    height: 18px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
    background: white;
    border-radius: 100%;
    margin-top: -3px;
    margin-left: -9px;
`;

const CustomSaturationPointer = styled.div`
    display: flex;
    width: 12px;
    height: 12px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
    background: transparent;
    border: 2px solid white;
    border-radius: 100%;
    margin-top: -6px;
    margin-left: -6px;
`;
const HiddenSaturationPointer = styled.div`
    width: 0;
    height: 0;
`;

const ColorPicker: FC<PropsType> = props => {
    const { children, ...propsWithoutChildren } = { ...props };

    return (
        <Popover
            stretch
            show={props.show}
            placement={'bottom-start'}
            arrowStyle={{
                left: '5px',
            }}
            onClickOutside={() => {
                props.onClickOutside();
            }}
            renderContent={() => (
                <Box direction="column" padding={[12]} width="230px">
                    <Box height="130px" width="100%" style={{ position: 'relative' }}>
                        <Saturation
                            {...propsWithoutChildren}
                            pointer={props.color === 'transparent' ? HiddenSaturationPointer : CustomSaturationPointer}
                            onChange={props.onChange}
                        />
                    </Box>
                    <Box margin={[12, 0, 0, 0]} direction="row" alignItems="center">
                        {props.transparentSwatch && (
                            <Box margin={[0, 9, 0, 0]}>
                                <ColorDrop
                                    color="transparent"
                                    onClick={() => {
                                        props.onChange({
                                            hex: 'transparent',
                                            hsl: { a: 0, h: 0, l: 0, s: 0 },
                                            rgb: { a: 0, r: 0, g: 0, b: 0 },
                                        });
                                    }}
                                />
                            </Box>
                        )}
                        <Box height="12px" width="100%" style={{ position: 'relative' }}>
                            <Hue
                                {...propsWithoutChildren}
                                direction="horizontal"
                                pointer={CustomHuePointer}
                                onChange={props.onChange}
                            />
                        </Box>
                    </Box>
                </Box>
            )}
        >
            {props.children}
        </Popover>
    );
};

export default CustomPicker(ColorPicker);
