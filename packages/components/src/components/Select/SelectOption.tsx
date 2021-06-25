import React, { FunctionComponent, useRef, useContext, Children } from 'react';
import Box from '../Box';
import Text from '../Text';
import Icon from '../Icon';
import { SelectContext } from '.';
import styled from 'styled-components';
import { SelectOptionGroupContext } from './SelectOptionGroup';
import { OffsetShorthandType } from '../../types/OffsetType';

type ContainerPropsType = {
    isTargeted: boolean;
};

export const SelectOptionContainer = styled.div<ContainerPropsType>`
    cursor: pointer;
    background: ${({ theme, isTargeted }): string =>
        isTargeted ? theme.Select.option.hover.background : 'transparent'};
`;

type PropsType = {
    value: string;
    label: string;
    'data-testid'?: string;
};

type StateType = {
    hovering: boolean;
};

const SelectOption: FunctionComponent<PropsType> = props => {
    const { selectedOption, filter, addOption, targeted, setTarget, setValue } = useContext(SelectContext);
    const { level } = useContext(SelectOptionGroupContext);
    const ref = useRef<HTMLDivElement | null>(null);
    const isSelected = selectedOption.value === props.value;
    const isTargeted = targeted === props.value;

    /** Render or not, based on the active filter */
    if (props.label.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
        return null;
    }

    /**
     * This should be called every render cycle and does not require a useEffect
     * because the rendering order of the options is important. Since we store the
     * targets in a ref and not in state, this is safe.
     */
    addOption({
        value: props.value,
        label: props.label,
    });

    return (
        <SelectOptionContainer
            ref={ref}
            isTargeted={isTargeted}
            onClick={() => {
                setValue(props.value);
            }}
            onMouseEnter={() => {
                setTarget(props.value);
            }}
            aria-selected={isSelected}
            data-testid={props['data-testid']}
        >
            <Box padding={[6, 18]}>
                {(Children.count(props.children) > 0 && props.children) || (
                    <Box alignItems="center" padding={[0, 0, 0, level * 18] as OffsetShorthandType} inline>
                        {isSelected && (
                            <Box margin={[0, 6, 0, isSelected ? -18 : 0] as OffsetShorthandType} inline>
                                <Text strong={isSelected}>
                                    <Icon size="small" icon="checkmark-small" />
                                </Text>
                            </Box>
                        )}
                        <Text strong={isSelected}>{props.label}</Text>
                    </Box>
                )}
            </Box>
        </SelectOptionContainer>
    );
};

export default SelectOption;
export { PropsType, StateType };
