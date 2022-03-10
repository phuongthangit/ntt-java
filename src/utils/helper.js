import moment from "moment";
/**
 * replace string
 * @param {*} message 
 * @param {*} newValue 
 * @returns 
 */
export function replaceString(message, newValue = []) {

    const matchSubstrings = message.match(/{[0-9]+}/g);

    for (let i = 0; i < matchSubstrings.length; i++) {
        message = message.replace(matchSubstrings[i], newValue[i]);
    }

    return message;
}

/**
 * format date
 * @param {*} dateString 
 * @returns 
 */
export function formatDate(dateString) {
    let dateFormat = '';
    if (dateString) {
        dateFormat = moment(dateString).format("YYYY年MM月DD日");
    }

    return dateFormat;
}

export function sortUserList(userList, column, order) {
    userList.sort((a, b) => {
        if(order === 'asc'){
            if (typeof a[column] === 'string') {
                return (a[column]).localeCompare(b[column]);
            } else {
                return a[column] - b[column];
            }
        }else{
            if (typeof a[column] === 'string') {
                return (b[column]).localeCompare(a[column]);
            } else {
                return b[column] - a[column];
            }
        }
    });
    return userList;
}

export function activeIcon(parameter, column, order) {
    let result = false;
    if(parameter.column === column && parameter.order === order){
        result = true;
    }
    return result;
}