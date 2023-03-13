export const GET_HOURS_MINUTES = (dateTime) => {
    const getDateTime = new Date(dateTime)
    const hours = getDateTime.getHours()
    const minutes = getDateTime.getMinutes() < 10 ? `0${getDateTime.getMinutes()}` : getDateTime.getMinutes()

    return `${hours}:${minutes}`
}