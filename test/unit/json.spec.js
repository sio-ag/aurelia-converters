import {JsonValueConverter} from "../../src/json";

describe('join value converter', () => {

    let array = {
        abc: 'def',
        123: '456'
    };

    let converter = new JsonValueConverter();

    it('test json', () => {

        let result = converter.toView(array);

        expect(result).toEqual('{\n  "123": "456",\n  "abc": "def"\n}');
    });
});
