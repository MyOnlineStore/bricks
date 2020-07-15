import React, { FC, ReactNode, useContext } from 'react';
import Box from '../Box';
import { StyledPlaceholder, StyledSelection, StyledCaret } from './style';
import Icon from '../Icon';
import styled, { withTheme } from 'styled-components';
import ThemeType from '../../types/ThemeType';
import { CaretDownIcon, CaretUpIcon } from '@myonlinestore/bricks-assets';
import { OffsetType } from '../../types/OffsetType';
import { SelectContext, OptionBaseType } from '.';

type SelectedOptionPropsType = {
    focus: boolean;
    open: boolean;
    disabled?: boolean;
};

const SelectedOptionContainer = styled.div<SelectedOptionPropsType>`
    display: flex;
    align-items: stretch;
    transition: border-color 150ms, box-shadow 150ms, background 150ms;
    box-sizing: border-box;
    width: 100%;
    border-radius: ${({ theme }) => theme.Select.common.borderRadius};
    line-height: 1.6; // results in 24px with 15px fontSize
    user-select: none;

    ${({ theme, focus, open, disabled }) => {
        if ((focus || open) && !disabled) {
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
`;

type PropsType = {
    placeholder: string;
    selected?: ReactNode;
    theme: ThemeType;
    selectedOption: OptionBaseType;
    'data-testid'?: string;
};

const SelectedOption: FC<PropsType> = props => {
    const { isOpen, setOpen, isDisabled, hasFocus } = useContext(SelectContext);

    return (
        <SelectedOptionContainer
            focus={hasFocus}
            open={isOpen}
            disabled={isDisabled}
            role="searchbox"
            aria-autocomplete="list"
            aria-controls={isOpen ? 'select-window' : undefined}
            data-testid={props['data-testid'] ? `${props['data-testid']}-field` : undefined}
            onClick={() => {
                if (!isOpen) {
                    setOpen(true);
                }
            }}
        >
            {(props.selected !== undefined && props.selectedOption.value !== '' && (
                // 1px less padding to compensate for the border
                <Box padding={[5 as OffsetType, 11 as OffsetType]} alignItems="center" grow={1}>
                    {props.selected}
                </Box>
            )) || (
                // 1px less padding to compensate for the border
                <Box alignItems="center" padding={[5 as OffsetType, 11 as OffsetType]} grow={1}>
                    {(props.selectedOption.value !== '' && (
                        <StyledSelection
                            data-testid={props['data-testid'] ? `${props['data-testid']}-input-selection` : undefined}
                            disabled={isDisabled}
                        >
                            {props.selectedOption.label}
                        </StyledSelection>
                    )) || (
                        <StyledPlaceholder
                            disabled={isDisabled}
                            data-testid={props['data-testid'] ? `${props['data-testid']}-placeholder` : undefined}
                        >
                            {props.placeholder}
                        </StyledPlaceholder>
                    )}
                </Box>
            )}
            <StyledCaret>
                <Icon
                    title={isOpen ? 'close' : 'open'}
                    icon={isOpen ? <CaretUpIcon /> : <CaretDownIcon />}
                    size="medium"
                    color={
                        isDisabled
                            ? props.theme.Select.select.disabled.caretColor
                            : props.theme.Select.select.idle.caretColor
                    }
                />
            </StyledCaret>
        </SelectedOptionContainer>
    );
};

export default withTheme(SelectedOption);
