import ThemeType from '../../types/ThemeType';
import RecursivePartialType from '../../types/RecursivePartialType';

const roundness = {
    base: '19px',
};

const theme: RecursivePartialType<ThemeType> = {
    Button: {
        common: {
            borderRadius: roundness.base,
        },
    },
};

export default theme;
