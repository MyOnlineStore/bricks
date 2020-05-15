import React, { FC, createContext, useContext } from 'react';

export const SelectOptionGroupContext = createContext({
    level: 1,
});

const SelectOptionGroup: FC = props => {
    const { level, ...context } = useContext(SelectOptionGroupContext);

    return (
        <SelectOptionGroupContext.Provider value={{ ...context, level: level + 1 }}>
            {props.children}
        </SelectOptionGroupContext.Provider>
    );
};

export default SelectOptionGroup;
