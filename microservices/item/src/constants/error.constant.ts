export const {


    //application
    REQUIRED_ENV_MISSING = 'Missing required environment variable',
    ENV_ACKNOWLEDGE = 'Please ensure it is defined in your .env file or set in the environment',
    VALIDATION_FAILED = 'InValid Request',
    REQUEST_FAILED = "Oops, the request failed!",
    CLIENT_SIDE_REQUEST_FAILED = "An error occurred while processing the request on the client side.",
    SERVER_ISSUE = "An error occurred at the server. Please try again later.",
  

    // zod validation
    INVALID_ITEMNAME = "Item name is Required, and should be string",
    INVALID_ITEMNAME_LENGTH = "Item name atleast have 1 characters",
    INVALID_REQUEST_BODY = "Invalid Request Body :",
    INVALID_REQUEST_QUERY = "Invalid Request Query :",
    AT_LEAST_ONE_FIELD_REQUIRED_FOR_UPDATE = "At least one field is required for update.",
    PAGE_NUMBER_REQUIRED = "Page number is required.",
    PAGE_LIMIT_REQUIRED = "Page limit is required.",
    INVALID_SORT_KEY = "Invalid sort key.",
    PAGE_NUMBER_MUST_BE_DIGITS = "Page number must be provided in digits.",
    PAGE_LIMIT_MUST_BE_DIGITS = "Page limit must be provided in digits.",
    INVALID_ID = "Invalid Unique Id",
    INVALID_PRICE = 'Price must be a positive number',
    INVALID_COUNT = 'Count must be a non-negative integer',


} = {} as const

