import { MediumPropsType } from '../Icon';
import IconButton from './icon';
import Button from './default';

type PropsType = {
    className?: string;
    compact?: boolean;
    loading?: boolean;
    title: string;
    variant: 'primary' | 'destructive' | 'warning' | 'secondary' | 'plain';
    target?: HTMLAnchorElement['target'];
    href?: string;
    disabled?: boolean;
    icon?: MediumPropsType['icon'];
    iconAlign?: 'right' | 'left';
    id?: string;
    onClick?(): void;
};

export default Button;
export { PropsType, IconButton };
