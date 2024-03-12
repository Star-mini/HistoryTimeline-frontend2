// 연도 리스트 상수
const years = [];
for (let i = 1300; i <= 1900; i += 100) {
    years.push({
        key: years.length,
        name: i
    });
}
for (let i = 1900; i <= 2020; i += 10) {
    years.push({
        key: years.length,
        name: i
    });
}

export { years };