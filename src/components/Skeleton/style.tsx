import { StyledComponentClass as _S } from 'styled-components';
import _T from '../../types/ThemeType';
import { ThemeType } from '../../index';

type SkeletonThemeType = {
    common: {
        backgroundColor: string;
        borderRadius: string;
    };
    Text: {
        fontSize: string;
    };
};

/* tslint:disable */
const getSkeletonStyles = (theme: ThemeType): string => `
    @keyframes wipe {
        0% {
            background-position: top left -200px;
        }

        100% {
            background-position: top right -200px;
        }
    }

    color: transparent;
    background-color: ${theme.Skeleton.common.backgroundColor};
    background-image: linear-gradient(100deg, transparent, rgba(0, 0, 0, 0.02), transparent);
    background-repeat: no-repeat;
    background-size: 200px 100%;
    animation: 3s infinite wipe;
    border-radius: ${theme.Skeleton.common.borderRadius};
`;

/* tslint:enable */

export default getSkeletonStyles;
export { SkeletonThemeType };
