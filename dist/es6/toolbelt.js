

class Json {
    constructor(json = {}) {
        this._json = json;
    }

    get(key) {
        return key ? this._json[key] : this._json;
    }

    set(key, value) {
        if (typeof key === "string" && value) {
            this._json[key] = value;
        }
    }

    keys() {
        return Object.keys(this._json);
    }

    values() {
        let json = this._json,
            keys = this.keys(json),
            values = keys.map(key => json[key]);
        return values;
    }

    add(key, value = null) {
        if (typeof key === "string") {
            this._json[key] = value;
            return this._json;
        } else {
            return Object.assign(this._json, key);
        }
    }

    remove(...keys) {
        keys.forEach(key => delete this._json[key]);
        return this._json;
    }
}

class ArrayList extends Array {
    constructor(...array) {
        super(array);
        this._array = [];
        this._array = this._array.concat(array);
    }

    get(index) {
        return index ? this._array[index] : this._array;
    }

    add(...items) {
        this._array = this._array.concat(items);
    }

    addAt(index, ...items) {
        this._array.splice(index, 0, ...items);
    }

    remove(...items) {
        items.forEach(item => {
            this._array.splice(this._array.indexOf(item), 1);
        });
    }
}

class StringContent {
    constructor(content = '') {
        this._string = content;
    }

    static format(content, ...params) {
        for (let i = 0, length = params.length; i < length; i++) {
            content = content.replace(`{${i}}`, params[i]);
        }
        return content;
    }

    startsWith(pattern, isCaseSensitive) {
        let str = this._string;
        if (!isCaseSensitive) {
            str = str.toLowerCase();
            pattern = pattern.toLowerCase();
        }
        return str.startsWith(pattern);
    }

    endsWith(pattern, isCaseSensitive) {
        let str = this._string;
        if (!isCaseSensitive) {
            str = str.toLowerCase();
            pattern = pattern.toLowerCase();
        }
        return str.endsWith(pattern);
    }

    contains(pattern, isCaseSensitive) {
        let str = this._string;
        if (!isCaseSensitive) {
            str = str.toLowerCase();
            pattern = pattern.toLowerCase();
        }

        return str.search(pattern) >= 0;
    }

    replaceAll(oldString, newString, isCaseSensitive) {
        let regExp = new RegExp(oldString, (isCaseSensitive ? 'g' : 'gi'));
        return this._string.replace(regExp, newString);
    }
}

class QueryString {
    constructor(querystring = '') {
        let _qs = querystring.toLowerCase();
        this._querystring = _qs.lastIndexOf('?') >= 0 ? _qs.substring(_qs.lastIndexOf('?') + 1) : '';
    }

    get count() {
        let arr = this._querystring.split('&');
        arr = arr.filter(item => item.length > 0);
        return arr.length;
    }

    get(key) {
        if (this._querystring !== '') {
            let _qs = this._querystring.split('&');
            for (let i = 0; i < _qs.length; i++) {
                let pair = _qs[i].split('=');
                if (pair[0] == key.toLowerCase()) {
                    return pair[1];
                }
            }
        }
        return undefined;
    }

    toJson() {
        if (this._querystring !== '') {
            let json = {},
                pair = [],
                _qs = this._querystring.split('&');
            for (var i = 0; i < _qs.length; i++) {
                pair = _qs[i].split('=');
                json[pair[0]] = pair[1];
            }

            return json;
        }
        return undefined;
    }
}