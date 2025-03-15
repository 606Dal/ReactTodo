
export const formatKoreanDate = (date?: string): string => {
    if (!date) return "날짜 없음"; // 기본값 설정

    return new Date(date + "Z").toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
};
