export const NAME = "Module number 1";

export const reg = /[a-z]/;

export const exactMatch = function(str, regEx){
    let match = str.match(regEx);
    return match && str === match[0];
}