import {TruncateValueConverter} from "../../src/truncate";

describe('truncate value converter', () => {

    let converter = new TruncateValueConverter();

    it('test truncate', () => {

        let result = converter.toView('abc def ghi jkl', 10);

        expect(result).toEqual('abc def...');
    });

    it('test other more', () => {

        let result = converter.toView('abc def ghi jkl', 10, '..');

        expect(result).toEqual('abc def..');
    });

    it('test no boundary', () => {

        let result = converter.toView('abc def ghi jkl', 10, '...', false);

        expect(result).toEqual('abc def g...');
    });
});
