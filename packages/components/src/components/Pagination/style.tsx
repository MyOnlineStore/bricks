import colors from '../../themes/MosTheme/colors';
import styled from '../../utility/styled';
import Text from '../Text';
import StyledIcon from '../Icon/style';

const StyledPageButton = styled.button<{ current?: boolean }>`
    border-radius: 3px;
    box-sizing: border-box;
    height: 36px;
    min-width: 36px;
    padding: 0 9px;
    line-height: 1;
    margin: 3px;
    cursor: pointer;

    ${Text}${StyledIcon} {
        color: inherit;
    }

    ${({ current, theme }) => {
        if (current) {
            return `
                background: ${theme.Button.primary.idle.backgroundColor};
                color: ${theme.Button.primary.idle.color};
                border: 1px solid ${colors.green600};
                cursor: default;

                &:hover,
                &:focus,
                &:active {
                    background: ${theme.Button.primary.idle.backgroundColor};
                    color: ${theme.Button.primary.idle.color};
                    border: 1px solid ${colors.green600};
                    cursor: default;
                    outline: 0;
                }
            `;
        }

        return `
            background: ${colors.white};
            border: 1px solid ${colors.grey300};
            color: ${colors.grey500};

            &:hover {
                background: ${theme.Button.plain.hover.backgroundColor};
                box-shadow: ${theme.Button.plain.hover.boxShadow};
                color: ${theme.Button.plain.hover.color};
                border: ${theme.Button.plain.idle.border};
            }

            &:focus {
                background: ${theme.Button.plain.focus.backgroundColor};
                box-shadow: ${theme.Button.plain.focus.boxShadow};
                color: ${theme.Button.plain.focus.color};
                border: ${theme.Button.plain.idle.border};
                outline: 0;
            }

            &:active {
                background: ${theme.Button.plain.active.backgroundColor};
                box-shadow: ${theme.Button.plain.active.boxShadow};
                color: ${theme.Button.plain.active.color};
                border: ${theme.Button.plain.idle.border};
            }
        `;
    }}
`;

const StyledEllipsis = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    margin: 3px 6px;

    ${Text} {
        color: ${colors.grey500};
    }
`;

export { StyledPageButton, StyledEllipsis };
