import React, { ComponentProps, useState } from 'react';
import ColorField from '.';

export default {
    title: 'ColorField',
    component: ColorField,
    args: {
        resetButtonTitle: 'Undo',
        transparentPlaceholder: 'transparent',
    },
};

const validHexcode = (hexcode: string) => {
    return !(hexcode.replace('#', '').length !== 3 && hexcode.replace('#', '').length !== 6);
};

export const Default = (args: ComponentProps<typeof ColorField>) => {
    const [value, setValue] = useState('#6bde78');
    const [value2, setValue2] = useState('#e3b00b');
    const [value3, setValue3] = useState('#ed2157');
    const [hasHexError, setHasHexError] = useState(!validHexcode(value));

    return (
        <>
            <ColorField
                {...args}
                emptyIsTransparent
                value={value}
                initialValue="#6bde78"
                feedback={
                    hasHexError
                        ? {
                              severity: 'error',
                              message: 'That is not a valid hex code!',
                          }
                        : undefined
                }
                onBlur={() => {
                    setHasHexError(!validHexcode(value) && value !== 'transparent');
                }}
                onChange={(val: string) => {
                    if (validHexcode(val)) {
                        setHasHexError(false);
                    }

                    setValue(val);
                }}
            />
            <ColorField
                {...args}
                emptyIsTransparent
                value={value2}
                initialValue="#e3b00b"
                onChange={(val: string) => {
                    setValue2(val);
                }}
                $margin={[24, 0]}
            />
            <ColorField
                {...args}
                emptyIsTransparent
                value={value3}
                initialValue="#ed2157"
                onChange={(val: string) => {
                    setValue3(val);
                }}
            />
        </>
    );
};

export const NoTransparency = (args: ComponentProps<typeof ColorField>) => {
    const [value, setValue] = useState('#6bde78');
    const [hasHexError, setHasHexError] = useState(!validHexcode(value));

    return (
        <ColorField
            {...args}
            value={value}
            initialValue="#6bde78"
            feedback={
                hasHexError
                    ? {
                          severity: 'error',
                          message: 'That is not a valid hex code!',
                      }
                    : undefined
            }
            onBlur={() => {
                setHasHexError(!validHexcode(value) && value !== 'transparent');
            }}
            onChange={(val: string) => {
                if (validHexcode(val)) {
                    setHasHexError(false);
                }

                setValue(val);
            }}
        />
    );
};

export const Disabled = (args: ComponentProps<typeof ColorField>) => {
    return <ColorField {...args} value="#6bde78" initialValue="#6bde78" disabled />;
};
