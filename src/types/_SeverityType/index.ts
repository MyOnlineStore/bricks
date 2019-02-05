type SeverityType = 'error' | 'warning' | 'success' | 'info';

// tslint:disable
enum SeverityIcons {
    error = require('../../assets/icons/dangerCircle.svg'),
    warning = require('../../assets/icons/dangerCircle.svg'),
    info = require('../../assets/icons/infoCircle.svg'),
    success = require('../../assets/icons/checkmarkCircle.svg'),
}
// tslint:enable

export default SeverityType;
export { SeverityIcons };
