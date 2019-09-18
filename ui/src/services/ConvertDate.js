export const convertDate = () => {
    let current_datetime = new Date();
    return current_datetime.getFullYear()
        + "-" + (current_datetime.getMonth() + 1)
        + "-" + current_datetime.getDate()
        + " " + current_datetime.getHours()
        + ":" + current_datetime.getMinutes()
        + ":" + current_datetime.getSeconds()
        + ":" + current_datetime.getMilliseconds();
};