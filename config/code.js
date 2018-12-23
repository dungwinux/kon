/**
 * Limit accept file type
 * Google "MIME" for correct MIME string
 */
export const acceptMIME = [
    "text/x-c",
    "text/x-pascal"
    // More will be availaable
];

/**
 * Limit code size
 * This will make sure server can easily handle code without many problems
 */
export const codeSizeLimit = 2000;