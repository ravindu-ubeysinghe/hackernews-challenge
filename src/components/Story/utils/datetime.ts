import { differenceInHours, differenceInMinutes, fromUnixTime } from 'date-fns';

export const getTimeDifference = (timestamp: number): string => {
    const convertedDate = fromUnixTime(timestamp);
    const diffInHours = differenceInHours(new Date(), convertedDate);

    if (diffInHours === 0) {
        return `${differenceInMinutes(new Date(), convertedDate)} minutes ago`;
    }

    return diffInHours > 1 ? `${diffInHours} hours ago` : `${diffInHours} hour ago`;
};
