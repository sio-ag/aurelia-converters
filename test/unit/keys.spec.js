import {KeysValueConverter} from "../../src/keys";

describe('keys value converter', () => {

    it('test keys', () => {

        let obj = {
          keys: 'value'
        };

        let keysValueConverter = new KeysValueConverter();

        let result = keysValueConverter.toView(obj);

        expect(result).toEqual(['keys']);
    });

});
