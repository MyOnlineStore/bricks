const deprecationWarning = (message: string, issueLink: string) => {
    if (process.env.NODE_ENV !== 'production') {
        console.warn(`⚠️ ${message}\nFor more info, please refer to the github issue: "${issueLink}"`);
    }
};

export default deprecationWarning;
