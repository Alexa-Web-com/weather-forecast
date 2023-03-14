export const getHour = (dateTime) => {
    const getDateTime = new Date(dateTime)
    const hour = getDateTime.getHours()
    return hour
}