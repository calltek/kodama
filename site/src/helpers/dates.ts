/**
 * Check if range dates overlap with other range date
 * @param d1 Array of dates
 * @param d2  Array of dates
 * @returns boolean
 */
export const overlapRange = function (d1: [Date, Date], d2: [Date, Date]): boolean {
    if (d1[0] <= d2[1] && d1[1] >= d2[0]) return true

    return false
}
