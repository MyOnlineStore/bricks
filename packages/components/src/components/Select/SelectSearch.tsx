import React, { FC, ChangeEvent, RefObject, useContext } from 'react';
import Box from '../Box';
import Icon from '../Icon';
import styled, { withTheme } from 'styled-components';
import { SearchIcon, CaretUpIcon } from '@myonlinestore/bricks-assets';
import colors from '../../themes/MosTheme/colors';
import { SelectContext } from '.';
import ThemeType from '../../types/ThemeType';
import { INNER_OFFSET, StyledCaret } from './style';

const SelectSearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    background: ${({ theme }) => theme.Select.searchWrapper.background};
    line-height: 1.6; // results in 24px with 15px fontSize

    input {
        flex-grow: 1;
        appearance: none;
        outline: none;
        border: none;
        padding: 0;
        background: transparent;
        font-size: ${({ theme }) => theme.Select.common.fontSize};
        font-family: ${({ theme }) => theme.Select.common.fontFamily};
        color: ${({ theme }) => theme.Select.select.idle.color};
        line-height: 1.6; // results in 24px with 15px fontSize
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::placeholder {
            font-style: italic;
            color: ${({ theme }) => theme.Select.select.focus.placeholderColor};
            opacity: 1;
        }
    }
`;

type SearchPropsType = {
    open: boolean;
    focus: boolean;
    disabled?: boolean;
};

const SelectSearchInner = styled.div<SearchPropsType>`
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin: ${INNER_OFFSET - 1}px;
    padding: 5px 11px;
    transition: border-color 150ms;
    box-sizing: border-box;
    background: ${({ theme }) => theme.Select.common.background};
    border-radius: ${({ theme }) => theme.Select.common.borderRadius};

    ${({ theme, focus, open, disabled }) => {
        if (focus && !open && !disabled) {
            return `
                border: solid 1px ${theme.Select.select.focus.borderColor};
            `;
        } else if (disabled) {
            return `
                border: solid 1px ${theme.Select.select.disabled.borderColor};
                cursor: not-allowed;
            `;
        } else {
            return `
                border: solid 1px ${theme.Select.common.borderColor};
            `;
        }
    }}
`;

type PropsType = {
    inputRef: RefObject<HTMLInputElement>;
    placeholder: string;
    theme: ThemeType;
    'data-testid'?: string;
};

const SelectSearch: FC<PropsType> = props => {
    const { filter, setFilter, isOpen, setOpen, isDisabled, hasFocus } = useContext(SelectContext);

    return (
        <SelectSearchContainer
            role="searchbox"
            aria-autocomplete="list"
            aria-controls={isOpen ? 'select-window' : undefined}
            data-testid={props['data-testid'] ? `${props['data-testid']}-input` : undefined}
            onClick={() => {
                if (!isOpen) {
                    setOpen(true);
                }
            }}
        >
            {isOpen && !isDisabled && (
                <>
                    <SelectSearchInner open={isOpen} focus={hasFocus} disabled={isDisabled}>
                        <Box alignItems="center" margin={[0, 6, 0, 0]}>
                            <Icon icon={<SearchIcon />} size="small" color={colors.grey400} />
                        </Box>
                        <input
                            ref={props.inputRef}
                            type="text"
                            placeholder={props.placeholder}
                            value={filter}
                            data-testid={props['data-testid'] ? `${props['data-testid']}-input-field` : undefined}
                            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                                event.stopPropagation();
                                setFilter(event.target.value);
                            }}
                        />
                    </SelectSearchInner>
                    <StyledCaret inner>
                        <Icon
                            title={'close'}
                            icon={<CaretUpIcon />}
                            size="medium"
                            color={props.theme.Select.select.idle.caretColor}
                        />
                    </StyledCaret>
                </>
            )}
        </SelectSearchContainer>
    );
};

export default withTheme(SelectSearch);
