
export const getDay = (dateTime: string): number => {
    const getDateTime: Date = new Date(dateTime)
    const day: number = getDateTime.getDay()
    return day
}

export const getDateMonth = (dateTime: string): string => {
    const getDateTime: Date = new Date(dateTime)
    const date: string | number = getDateTime.getDate() < 10 ? `0${getDateTime.getDate()}` : getDateTime.getDate()
    const month: string | number = getDateTime.getMonth() + 1 < 10 ? `0${getDateTime.getMonth() + 1}` : getDateTime.getMonth() + 1
    return `${!date ? '.' : date}.${!month ? '.' : month}`
}

export const getHour = (dateTime: string): number => {
    const getDateTime: Date = new Date(dateTime)
    const hour: number = getDateTime.getHours()
    return hour
}

export const getHourMinutes = (dateTime: string): string => {
    const getDateTime: Date = new Date(dateTime)
    const hours: number = getDateTime.getHours()
    const minutes: string | number = getDateTime.getMinutes() < 10 ? `0${getDateTime.getMinutes()}` : getDateTime.getMinutes()
    return `${hours}:${minutes}`
}