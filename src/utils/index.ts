import dayjs from 'dayjs';

// 格式化时间
export const formatDate = (date) => {
    return dayjs(date).format('YYYY-MM-DD hh:mm')
}
