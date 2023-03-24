
export const getDay = (dateTime) => {
    const getDateTime = new Date(dateTime)
    const day = getDateTime.getDay()
    return day
}

export const getDateMonth = (dateTime) => {
    const getDateTime = new Date(dateTime)
    const date = getDateTime.getDate() < 10 ? `0${getDateTime.getDate()}` : getDateTime.getDate()
    const month = getDateTime.getMonth() + 1 < 10 ? `0${getDateTime.getMonth() + 1}` : getDateTime.getMonth() + 1
    return `${!date ? '.' : date}.${!month ? '.' : month}`
}

export const getHour = (dateTime) => {
    const getDateTime = new Date(dateTime)
    const hour = getDateTime.getHours()
    return hour
}

export const getHourMinutes = (dateTime) => {
    const getDateTime = new Date(dateTime)
    const hours = getDateTime.getHours()
    const minutes = getDateTime.getMinutes() < 10 ? `0${getDateTime.getMinutes()}` : getDateTime.getMinutes()
    return `${hours}:${minutes}`
}