declare type SeverityType = 'error' | 'warning' | 'success' | 'info';
declare enum SeverityIcons {
    error = "dangerCircle",
    warning = "dangerCircle",
    info = "infoCircle",
    success = "checkmarkCircle"
}
export default SeverityType;
export { SeverityIcons };
