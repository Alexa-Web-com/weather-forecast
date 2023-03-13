export const GET_DATE_MONTH = (dateTime) => {
    const getDateTime = new Date(dateTime)
    const date = getDateTime.getDate() < 10 ? `0${getDateTime.getDate()}` : getDateTime.getDate()
    const month = getDateTime.getMonth() + 1 < 10 ? `0${getDateTime.getMonth() + 1}` : getDateTime.getMonth() + 1

    return `${date}.${month}`
}