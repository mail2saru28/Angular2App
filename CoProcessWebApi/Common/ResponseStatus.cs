namespace CoProcessWebApi.Common
{
    public enum ResponseStatus
    {
        Loggedin = 0,
        Failed = 1,
        Deactivated = 2,
        ForcetoChangePassword = 3,
        Succeed = 4,
        AccessDenied = 5,
        SessionExpired = 6,
        ConcurrencyIssue = 7,
        Invalid = 8,
        Corrupted = 9,
        InitialPasswordChange = 10,
        ResetPasswordProcedure = 11,
        CurrentPasswordisIncorrect = 12,
        PasswrordDoesNotMeeCriteria = 13,
        SecurityQuestionAnswerIncorrect = 14,
        InvalidUserName = 15,
        UsernameOrPasswordWrong = 16,
        ForgottenPasswordMode = 17,
        ExceededtheLoginAttemp = 18,
        AlertAboutExpire = 19,
        ExpiredPassword = 20,
        UsernameTaken = 21,
        PasswordInHistory = 22,
        IpLocked = 23,
        NotInitialised = 24,
        ValidationError = 25,
        NoDataFound = 26,
        AccountVerified = 27,
        TokenExpired = 28,
        NotificationFailed = 29,
        AccountLocked = 30,
        //Active Campaign Status
        NoContactAvailable = 31,
        NoDealAvailable = 32,
        MultipleDealDetected = 33,
        EmailAddressExistsOnActiveCampaign = 34
    }
}