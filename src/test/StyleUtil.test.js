import * as StyleUtil from '../utils/StyleUtil';
describe('StyleUtil 테스트', () => {
    test('rgbToHexa호출시 해당 rgb값을 hexa값으로 변환한다.', () => {
        const result = StyleUtil.rgbToHexa('rgb(0, 0, 0)');
        expect(result).toEqual('#000000');
    })
});