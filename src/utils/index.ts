import dayjs from 'dayjs';

// 格式化时间
export const formatDate = (date) => {
    return dayjs(date).format('YYYY年MM月DD号 hh点mm分')
}
