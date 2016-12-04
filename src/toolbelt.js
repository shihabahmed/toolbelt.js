"use strict";

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
        let json = this._json;
        let keys = this.keys(json);
        let values = keys.map(key => json[key]);
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

class ArrayList {
    constructor(array = []) {
        this._array = array;
    }

    get(index) {
        return index ? this._array[index] : this._array;
    }

    add(...items) {
        this._array.concat(items);
    }

    addAt(index, ...items) {
        this._array.splice(index, 0, items);
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
}

class QueryString {
    constructor(querystring = '') {
        let _qs = querystring.toLowerCase();
        if (_qs.lastIndexOf('?') >= 0) {
            _qs = _qs.substring(_qs.lastIndexOf('?') + 1);
        }
        this._querystring = _qs;
    }

    get(key) {
        if (this._querystring !== '') {
            let _qs = this._querystring.split('&');
            for (let i = 0; i < _qs.length; i++) {
                let _kv = _qs[i].split('=');
                if (_kv[0] == key.toLowerCase()) {
                    return _kv[1];
                }
            }
        } else {
            return undefined;
        }
    }

    get count() {
        return this._querystring !== '' ? this._querystring.split('&').length : 0;
    }
}

module.exports = { Json, ArrayList, StringContent, QueryString };