type SeverityType = 'error' | 'warning' | 'success' | 'info';

// tslint:disable
enum SeverityIcons {
    error = require('../../assets/icons/danger-circle.svg'),
    warning = require('../../assets/icons/danger-circle.svg'),
    info = require('../../assets/icons/info-circle.svg'),
    success = require('../../assets/icons/checkmark-circle.svg'),
}
// tslint:enable

export default SeverityType;
export { SeverityIcons };
