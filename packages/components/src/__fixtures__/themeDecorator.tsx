import React, { FC } from 'react';
import MosTheme from '../../src/themes/MosTheme';
import MosCorporateTheme from '../themes/MosCorporateTheme';
import CustomTheme from '../themes/CustomTheme';
import { generateTheme } from '..';

type ContextType = {
    globals: {
        theme: 'MyOnlineStore' | 'MyOnlineStore (Corporate)' | 'Game Store' | 'Concept Store';
    };
};

const [conceptTheme] = generateTheme({
    colors: {
        primary: '#EA5F47',
        secondary: '#95B7B8',
        textLight: '#fff',
        textDark: '#4D6173',
        background: '#fff',
    },
    roundness: 3,
});

const [gameTheme] = generateTheme({
    colors: {
        primary: '#E05712',
        textLight: '#fff',
        textDark: '#051629',
        background: '#fff',
    },
    roundness: 100,
});

const themeDecorator = (Story: FC<ContextType>, context: ContextType) => {
    if (context.globals.theme === 'MyOnlineStore') {
        return (
            <MosTheme>
                <Story {...context} />
            </MosTheme>
        );
    }

    if (context.globals.theme === 'MyOnlineStore (Corporate)') {
        return (
            <MosCorporateTheme>
                <Story {...context} />
            </MosCorporateTheme>
        );
    }

    if (context.globals.theme === 'Game Store') {
        return (
            <CustomTheme theme={gameTheme}>
                <Story {...context} />
            </CustomTheme>
        );
    }

    if (context.globals.theme === 'Concept Store') {
        return (
            <CustomTheme theme={conceptTheme}>
                <Story {...context} />
            </CustomTheme>
        );
    }

    return (
        <MosTheme>
            <Story {...context} />
        </MosTheme>
    );
};

export default themeDecorator;
