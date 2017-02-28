import {NumberValueConverter} from "../../src/number";
import {PercentageValueConverter} from "../../src/percentage";
import {IntegerValueConverter} from "../../src/integer";
import {FilesizeValueConverter} from "../../src/filesize";
import {TimeValueConverter} from "../../src/time";
import numeral from "numeral";
import 'numeral/locales/de';

describe('number value converter', () => {

    it('default number format', () => {

        let converter = new NumberValueConverter();

        let result = converter.toView(1000);

        expect(result).toEqual('1,000.00');
    });

    it('default percentage format', () => {

        let converter = new PercentageValueConverter();

        let result = converter.toView(0.22);

        expect(result).toEqual('22.00%');
    });

    it('default integer format', () => {

        let converter = new IntegerValueConverter();

        let result = converter.toView(10.6);

        expect(result).toEqual('11');
    });

    it('default filesize format', () => {

        let converter = new FilesizeValueConverter();

        let result = converter.toView(127000);

        expect(result).toEqual('127.00 KB');
    });

    it('default time format', () => {

        let converter = new TimeValueConverter();

        let result = converter.toView(3687);

        expect(result).toEqual('1:01:27');
    });

    it('default number format, changed locale', () => {

        numeral.locale('de');

        let converter = new NumberValueConverter();

        let result = converter.toView(10.6);

        expect(result).toEqual('10,60');
    });
});
