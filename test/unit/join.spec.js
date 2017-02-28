import {JoinValueConverter} from "../../src/join";

describe('join value converter', () => {

    let array = [
        'abc',
        'def'
    ];

    let converter = new JoinValueConverter();

    it('test join', () => {

        let result = converter.toView(array);

        expect(result).toEqual('abc, def');
    });

    it('test join, custom separator', () => {

        let result = converter.toView(array, ' & ');

        expect(result).toEqual('abc & def');
    });
});
