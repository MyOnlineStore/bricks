type ThemeType = {
    buttonDestructiveBackgroundColor:string;
    buttonDestructiveBorderColor:string;
    buttonDestructiveBorderRadius:string;
    buttonDestructiveBorderWidth:string;
    buttonDestructiveColor:string;
    buttonPrimaryBackgroundColor:string;
    buttonPrimaryBorderColor:string;
    buttonPrimaryBorderRadius:string;
    buttonPrimaryBorderWidth:string;
    buttonPrimaryColor:string;
    buttonSecondaryBackgroundColor:string;
    buttonSecondaryBorderColor:string;
    buttonSecondaryBorderRadius:string;
    buttonSecondaryBorderWidth:string;
    buttonSecondaryColor:string;
    buttonWarningBackgroundColor:string;
    buttonWarningBorderColor:string;
    buttonWarningBorderRadius:string;
    buttonWarningBorderWidth:string;
    buttonWarningColor:string;
    fontFamily:string;
    fontSize:string;
    iconFill:string;
};

const adminTheme:ThemeType = {
    buttonDestructiveBackgroundColor: '#ED2157',
    buttonDestructiveBorderColor: '#ED2157',
    buttonDestructiveBorderRadius: '0',
    buttonDestructiveBorderWidth: '1px',
    buttonDestructiveColor: '#fff',
    buttonPrimaryBackgroundColor: '#5BD16A',
    buttonPrimaryBorderColor: '#5BD16A',
    buttonPrimaryBorderRadius: '0',
    buttonPrimaryBorderWidth: '1px',
    buttonPrimaryColor: '#fff',
    buttonSecondaryBackgroundColor: '#EDEFF2',
    buttonSecondaryBorderColor: '#d2d7e0',
    buttonSecondaryBorderRadius: '0',
    buttonSecondaryBorderWidth: '1px',
    buttonSecondaryColor: '#333740',
    buttonWarningBackgroundColor: '#FCC200',
    buttonWarningBorderColor: '#FCC200',
    buttonWarningBorderRadius: '0',
    buttonWarningBorderWidth: '1px',
    buttonWarningColor: '#fff',
    fontFamily: 'Arial',
    fontSize: '16px',
    iconFill: '#5BD16A',
};

export { ThemeType, adminTheme };
