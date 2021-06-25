import { IconType } from '../../components/Icon/IconType';

type SeverityType = 'error' | 'warning' | 'success' | 'info';

const SeverityIcons: { [key: string]: IconType } = {
    error: 'danger-circle',
    warning: 'danger-circle',
    info: 'info-circle',
    success: 'checkmark-circle',
};

export default SeverityType;
export { SeverityIcons };
