import React, { FC, ChangeEvent, ReactNode, RefObject } from 'react';
import Box from '../Box';
import { StyledPlaceholder, StyledSelection, StyledCaret } from './style';
import Icon from '../Icon';
import styled, { withTheme } from 'styled-components';
import ThemeType from '../../types/ThemeType';
import { SearchIcon, CaretDownIcon, CaretUpIcon } from '@myonlinestore/bricks-assets';
import colors from '../../themes/MosTheme/colors';
import { OffsetType } from '../../types/OffsetType';
import { OptionBaseType } from '.';

type InputPropsType = {
    open: boolean;
    focus: boolean;
    disabled?: boolean;
};

const SelectInputContainer = styled.div<InputPropsType>`
    transition: border-color 150ms, box-shadow 150ms, background 150ms;
    box-sizing: border-box;
    width: 100%;
    border-radius: ${({ theme }) => theme.Select.common.borderRadius};
    line-height: 1.6; // results in 24px with 15px fontSize

    ${({ theme, focus, open, disabled }) => {
        if (focus && !open && !disabled) {
            return `
                background: ${theme.Select.common.background};
                border: solid 1px ${theme.Select.select.focus.borderColor};
                box-shadow: ${theme.Select.select.focus.boxShadow};
            `;
        } else if (disabled) {
            return `
                background: ${theme.Select.select.disabled.background};
                border: solid 1px ${theme.Select.select.disabled.borderColor};
                box-shadow: none;
                cursor: not-allowed;
            `;
        } else {
            return `
                background: ${theme.Select.common.background};
                border: solid 1px ${theme.Select.common.borderColor};
                box-shadow: none;
            `;
        }
    }}

    input {
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

type PropsType = {
    isOpen: boolean;
    hasFocus: boolean;
    disabled: boolean;
    input: string;
    inputWrapperRef: RefObject<HTMLDivElement>;
    inputRef: RefObject<HTMLInputElement>;
    'data-testid'?: string;
    placeholder: string;
    selected?: ReactNode;
    theme: ThemeType;
    selectedOption: OptionBaseType;
    onChange(value: string): void;
    onOpen(): void;
};

const SelectInput: FC<PropsType> = props => {
    return (
        <SelectInputContainer
            open={props.isOpen}
            focus={props.hasFocus}
            disabled={props.disabled}
            ref={props.inputWrapperRef}
            role="searchbox"
            aria-autocomplete="list"
            aria-controls={props.isOpen ? 'select-window' : undefined}
            data-testid={props['data-testid'] ? `${props['data-testid']}-input` : undefined}
            onClick={!props.isOpen ? props.onOpen : undefined}
        >
            <Box alignItems="stretch">
                {(props.isOpen && !props.disabled && (
                    // 1px less padding to compensate for the border
                    <Box alignItems="center" padding={[5 as OffsetType, 11 as OffsetType]} grow={1}>
                        <Box alignItems="center" margin={[0, 6, 0, 0]}>
                            <Icon icon={<SearchIcon />} size="small" color={colors.grey400} />
                        </Box>
                        <input
                            ref={props.inputRef}
                            type="text"
                            placeholder={props.placeholder}
                            value={props.input}
                            data-testid={props['data-testid'] ? `${props['data-testid']}-input-field` : undefined}
                            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                                event.stopPropagation();
                                props.onChange(event.target.value);
                            }}
                        />
                    </Box>
                )) ||
                    (props.selected !== undefined && props.selectedOption.value !== '' && (
                        // 1px less padding to compensate for the border
                        <Box padding={[5 as OffsetType, 11 as OffsetType]} alignItems="center" grow={1}>
                            {props.selected}
                        </Box>
                    )) || (
                        // 1px less padding to compensate for the border
                        <Box alignItems="center" padding={[5 as OffsetType, 11 as OffsetType]} grow={1}>
                            {(props.selectedOption.value !== '' && (
                                <StyledSelection
                                    data-testid={
                                        props['data-testid'] ? `${props['data-testid']}-input-selection` : undefined
                                    }
                                    disabled={props.disabled}
                                >
                                    {props.selectedOption.label}
                                </StyledSelection>
                            )) || (
                                <StyledPlaceholder
                                    disabled={props.disabled}
                                    data-testid={
                                        props['data-testid'] ? `${props['data-testid']}-placeholder` : undefined
                                    }
                                >
                                    {props.placeholder}
                                </StyledPlaceholder>
                            )}
                        </Box>
                    )}
                <StyledCaret>
                    <Icon
                        icon={props.isOpen ? <CaretUpIcon /> : <CaretDownIcon />}
                        size="medium"
                        color={
                            props.disabled
                                ? props.theme.Select.select.disabled.caretColor
                                : props.theme.Select.select.idle.caretColor
                        }
                        title={props.isOpen ? 'close' : 'open'}
                    />
                </StyledCaret>
            </Box>
        </SelectInputContainer>
    );
};

export default withTheme(SelectInput);
