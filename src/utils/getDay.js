export const GET_DAY = (dateTime) => {
    const getDateTime = new Date(dateTime)
    const day = getDateTime.getDay()
    return day
}