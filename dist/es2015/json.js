
export let JsonValueConverter = class JsonValueConverter {

    toView(obj) {
        return JSON.stringify(obj, null, 2);
    }
};