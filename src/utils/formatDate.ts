
const appendZeroes = (n: number) => {
    return (n < 10 ? '0' + n : n)
};

const formatDate = (date: AnyObject) => {
    return `${ date.getFullYear() }-${ appendZeroes(date.getMonth() +1) }-${ appendZeroes(date.getDate()) } ${ appendZeroes(date.getHours()) }:${ appendZeroes(date.getMinutes()) }:${ appendZeroes(date.getSeconds()) }`
};

export default formatDate;
