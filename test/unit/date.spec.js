import {DateValueConverter} from "../../src/date";
import moment from "moment";
import 'moment/locale/de';
//Import of locale does also change default locale
moment.locale('en');

describe('date value converter', () => {

    let dateValueConverter;

    beforeEach(() => {
        dateValueConverter = new DateValueConverter();
    });

    it('default date format', () => {

        let result = dateValueConverter.toView('1995-12-25 17:00');

        expect(result).toEqual('12/25/1995 5:00 PM');
    });

    it('default date format, changed global locale', () => {

        moment.locale('de');

        let result = dateValueConverter.toView('1995-12-25 17:00');

        expect(result).toEqual('25.12.1995 17:00');
    });

    it('changed date format, changed global locale', () => {

        moment.locale('de');

        let result = dateValueConverter.toView('1995-12-25 17:00', 'LT');

        expect(result).toEqual('17:00');
    });
});
