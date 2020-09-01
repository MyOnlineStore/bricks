import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

const theme = create({
    base: 'dark',
    brandTitle: 'Bricks',
    brandUrl: 'https://myonlinestore.github.io/bricks',
    brandImage: '/logo_en_white.svg',
});

addons.setConfig({
    theme,
});
