export const isValid = (phone) => {
    let pattern = /^(0|91)?[7-9][0-9]{9}$/
    return pattern.test(phone)   
}
