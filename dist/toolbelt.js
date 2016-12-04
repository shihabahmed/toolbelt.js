"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Json = function () {
    function Json() {
        var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Json);

        this._json = json;
    }

    _createClass(Json, [{
        key: "get",
        value: function get(key) {
            return key ? this._json[key] : this._json;
        }
    }, {
        key: "set",
        value: function set(key, value) {
            if (typeof key === "string" && value) {
                this._json[key] = value;
            }
        }
    }, {
        key: "keys",
        value: function keys() {
            return Object.keys(this._json);
        }
    }, {
        key: "values",
        value: function values() {
            var json = this._json;
            var keys = this.keys(json);
            var values = keys.map(function (key) {
                return json[key];
            });
            return values;
        }
    }, {
        key: "add",
        value: function add(key) {
            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (typeof key === "string") {
                this._json[key] = value;
                return this._json;
            } else {
                return Object.assign(this._json, key);
            }
        }
    }, {
        key: "remove",
        value: function remove() {
            var _this = this;

            for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
                keys[_key] = arguments[_key];
            }

            keys.forEach(function (key) {
                return delete _this._json[key];
            });
            return this._json;
        }
    }]);

    return Json;
}();

var ArrayList = function () {
    function ArrayList() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, ArrayList);

        this._array = array;
    }

    _createClass(ArrayList, [{
        key: "get",
        value: function get(index) {
            return index ? this._array[index] : this._array;
        }
    }, {
        key: "add",
        value: function add() {
            for (var _len2 = arguments.length, items = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                items[_key2] = arguments[_key2];
            }

            this._array.concat(items);
        }
    }, {
        key: "addAt",
        value: function addAt(index) {
            for (var _len3 = arguments.length, items = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                items[_key3 - 1] = arguments[_key3];
            }

            this._array.splice(index, 0, items);
        }
    }, {
        key: "remove",
        value: function remove() {
            var _this2 = this;

            for (var _len4 = arguments.length, items = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                items[_key4] = arguments[_key4];
            }

            items.forEach(function (item) {
                _this2._array.splice(_this2._array.indexOf(item), 1);
            });
        }
    }]);

    return ArrayList;
}();

var StringContent = function StringContent() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, StringContent);

    this._string = content;
};

var QueryString = function () {
    function QueryString() {
        var querystring = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        _classCallCheck(this, QueryString);

        var _qs = querystring.toLowerCase();
        this._querystring = _qs.lastIndexOf('?') >= 0 ? _qs.substring(_qs.lastIndexOf('?') + 1) : '';
    }

    _createClass(QueryString, [{
        key: "get",
        value: function get(key) {
            if (this._querystring !== '') {
                var _qs = this._querystring.split('&');
                for (var i = 0; i < _qs.length; i++) {
                    var _kv = _qs[i].split('=');
                    if (_kv[0] == key.toLowerCase()) {
                        return _kv[1];
                    }
                }
            } else {
                return undefined;
            }
        }
    }, {
        key: "count",
        get: function get() {
            var arr = this._querystring.split('&');
            arr = arr.filter(function (item) {
                return item.length > 0;
            });
            return arr.length;
        }
    }]);

    return QueryString;
}();