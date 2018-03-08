import * as DateUtil from '../utils/DateUtil';
describe('DateUtil 테스트', () => {
    test('dateYYYYMMDD호출시, Date를 입력하면 YYYY-MM-DD형식의 날짜가 출력된다.', () => {
        const result = DateUtil.dateYYYYMMDD(new Date('2018-02-22'));
        expect(result).toEqual('2018-02-22');
    });

    test('dateYYYYMMDDHHMMSS호출시, Date를 입력하면 YYYY-MM-DD HH:MM:SS형식의 날짜가 출력된다.', () => {
        const result = DateUtil.dateYYYYMMDDHHMMSS(new Date('2018-02-22 10:00:00'));
        expect(result).toEqual('2018-02-22 10:00:00');
    });
});