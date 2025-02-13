export const {


    //application
    REQUIRED_ENV_MISSING = 'Missing required environment variable',
    ENV_ACKNOWLEDGE = 'Please ensure it is defined in your .env file or set in the environment',
    VALIDATION_FAILED = 'InValid Request',
    REQUEST_FAILED = "Oops, the request failed!",
    CLIENT_SIDE_REQUEST_FAILED = "An error occurred while processing the request on the client side.",
    SERVER_ISSUE = "An error occurred at the server. Please try again later.",
    NO_USER_ID_IN_PAYLOAD = "No user ID found in payload.",
    ACCESSTOKEN_MISSING = "Access token is missing from the header after authentication middleware.",
    FAILED_TO_SEND_OTP_EMAIL = "Failed to send OTP email. Please try again.",
    USER_EXISTANCE_FAILURE = "Failed to ensure user existance on syatem",
    UNWANTED_DATE_UPDATE = "Date update is not allowed without a valid update body.",

    // zod validation
    INVALID_USERNAME = "Username is Required, and should be string",
    INVALID_USERNAME_LENGTH = "Username atleast have 3 characters",
    EMAIL_REQUIRED = "Email is Required, and should be in format",
    INVALID_EMAIL = "InValid Email id!",
    INVALID_PHONE = 'Phone number should start with + and contain only digits',
    PASSWORD_REQUIRED = "Password is required.",
    INVALID_PASSWORD_FORMAT = "Password must be at least 8 characters long and include at least one letter, one number, and one special character.",
    INVALID_ROLE = "Role should be 'admin' or 'user'",
    INVALID_SECRET_KEY = "Invalid secret key.",
    SECRET_KEY_MIN_LENGTH = "Secret key must be at least 16 characters long.",
    SECRET_KEY_MAX_LENGTH = "Secret key can be up to 64 characters long.",
    SECRET_KEY_ALPHANUMERIC = "Secret key must be a combination of alphabets and integers.",
    MUST_BE_NUMERIC_STRING = "Must be a numeric string (e.g., '123').",
    INVALID_EXPRATION_STRING = "Must be a number followed immediately by a valid unit (e.g., '123Year').",
    INVALID_TOKEN = "Invalid token",
    INVALID_REQUEST_BODY = "Invalid Request Body :",
    INVALID_REQUEST_QUERY = "Invalid Request Query :",
    INVALID_OTP_FORMAT = "OTP must be a 6-digit number.",
    PASSWORDS_MUST_MATCH = "Passwords do not match with the confirm password field.",
    AT_LEAST_ONE_FIELD_REQUIRED_FOR_UPDATE = "At least one field is required for update.",
    PAGE_NUMBER_REQUIRED = "Page number is required.",
    PAGE_LIMIT_REQUIRED = "Page limit is required.",
    INVALID_SORT_KEY = "Invalid sort key.",
    PAGE_NUMBER_MUST_BE_DIGITS = "Page number must be provided in digits.",
    PAGE_LIMIT_MUST_BE_DIGITS = "Page limit must be provided in digits.",
    INVALID_ID = "Invalid Unique Id",
    INVALID_DUE_TIME = "Time is in Invalid  Format, should be as HH:MM",
    INVALID_DATE_FORMAT = "Date is in Invalid Formay, should be in YYYY-MM-DD format.",
    INVALID_DATE = "Invalid date",


    // User
    EMAIL_ALREADY_EXISTS = "User Already Exists with given Email ID",
    PHONE_ALREADY_EXISTS = "User Already Exists with given Phone no",
    USER_NOT_FOUND = "No User Found with given data",
    EMAIL_ALREADY_IN_USE = "The email address you entered is already associated with your account.",
    USER_DATA_NOT_FOUND = "No User data found to show",

    // Auth
    TOKEN_SIGN_FAILED = "Failed to sign the token. Please check your secret key and expiration time.",
    TOKEN_SIGN_ERROR = "Unexpected error occurred while signing the token.",
    JWT_SIGNING_FAILED = "JWT signing failed.",
    INVALID_PASSWORD = "Invalid Password, Not match with the user",
    AUTHORIZATION_FAILED = "Authorization procedure failed at the server.",
    EMAIL_VALIDATION_FAILED = "Email validation failed.",
    INVALID_OTP = "Email verification failed. Invalid OTP.",
    INSUFFICIENT_PRIVILEGES = "Forbidden: Insufficient role privileges.",


} = {} as const

