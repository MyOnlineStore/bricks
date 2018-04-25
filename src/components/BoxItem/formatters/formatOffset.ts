import { OffsetType } from '../../../types/OffsetType';

const formatOffset = (offset:Array<OffsetType>):string => {
    const offsetValues = offset.map((value:OffsetType):string => {
        if (value === 'auto') {
            return value;
        }

        return `${value}px`;
    });

    return offsetValues.join(' ');
};

export default formatOffset;
