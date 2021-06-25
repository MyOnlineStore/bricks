import React, { FC, ChangeEvent, useContext, useRef, useEffect } from 'react';
import Box from '../Box';
import Icon from '../Icon';
import styled, { withTheme } from 'styled-components';
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
        margin: 0;
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

        &::ms-clear {
            display: none;
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
    border: solid 1px ${({ theme }) => theme.Select.common.borderColor};
    border-radius: ${({ theme }) => theme.Select.common.borderRadius};
`;

type PropsType = {
    placeholder: string;
    theme: ThemeType;
    'data-testid'?: string;
};

const SelectSearch: FC<PropsType> = props => {
    const { filter, setFilter, isOpen, setOpen, isDisabled, hasFocus } = useContext(SelectContext);
    const ref = useRef<HTMLInputElement>();

    /** Focus the input field when the field gets opened */
    useEffect(() => {
        if (isOpen) {
            ref.current?.focus();
        }
    }, [isOpen]);

    return (
        <SelectSearchContainer
            role="searchbox"
            aria-autocomplete="list"
            aria-controls={isOpen ? 'select-window' : undefined}
            data-testid={props['data-testid']}
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
                            <Icon icon="search" size="small" color={colors.grey400} />
                        </Box>
                        <input
                            ref={inputRef => {
                                if (inputRef) {
                                    ref.current = inputRef;
                                }
                            }}
                            type="text"
                            placeholder={props.placeholder}
                            value={filter}
                            data-testid={props['data-testid'] ? `${props['data-testid']}-input` : undefined}
                            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                                event.stopPropagation();
                                setFilter(event.target.value);
                            }}
                        />
                    </SelectSearchInner>
                    <StyledCaret inner>
                        <Icon
                            title="close"
                            icon="caret-up"
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
