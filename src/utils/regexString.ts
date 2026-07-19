export const REGEX = {
    NAME: /^[A-Za-z][A-Za-z -']{1,50}$/,
    EMAIL: /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
    PHONE: /^\+?1?[. -]?\(?\d{3}\)?[. -]?\d{3}[. -]?\d{4}$/,
    PROJECTTYPE: /^[A-Za-z]{1,15}$/,
    MESSAGE: /^[A-Za-z0-9 \(\)\?.]{1,300}$/
}
