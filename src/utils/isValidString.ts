const isValidString = (str: string) => (
    (str && (/^[a-z0-9!"#$%&'()*+,.\/:;<=>?@\[\]^_`{|}~-]*$/i).test(str))
);

export default isValidString;
