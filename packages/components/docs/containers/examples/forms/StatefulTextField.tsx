import React, { FC, useState } from 'react';
import { TextField } from '@myonlinestore/bricks';

const StatefulTextField: FC = () => {
    const [value, setValue] = useState('');

    return <TextField name="formfield" value={value} onChange={setValue} />;
};

export default StatefulTextField;
