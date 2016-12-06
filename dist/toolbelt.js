"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            var json = this._json,
                keys = this.keys(json),
                values = keys.map(function (key) {
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

var ArrayList = function (_Array) {
    _inherits(ArrayList, _Array);

    function ArrayList() {
        _classCallCheck(this, ArrayList);

        for (var _len2 = arguments.length, array = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            array[_key2] = arguments[_key2];
        }

        var _this2 = _possibleConstructorReturn(this, (ArrayList.__proto__ || Object.getPrototypeOf(ArrayList)).call(this, array));

        _this2._array = [];
        _this2._array = _this2._array.concat(array);
        return _this2;
    }

    _createClass(ArrayList, [{
        key: "get",
        value: function get(index) {
            return index ? this._array[index] : this._array;
        }
    }, {
        key: "add",
        value: function add() {
            for (var _len3 = arguments.length, items = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                items[_key3] = arguments[_key3];
            }

            this._array = this._array.concat(items);
        }
    }, {
        key: "addAt",
        value: function addAt(index) {
            var _array;

            for (var _len4 = arguments.length, items = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                items[_key4 - 1] = arguments[_key4];
            }

            (_array = this._array).splice.apply(_array, [index, 0].concat(items));
        }
    }, {
        key: "remove",
        value: function remove() {
            var _this3 = this;

            for (var _len5 = arguments.length, items = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                items[_key5] = arguments[_key5];
            }

            items.forEach(function (item) {
                _this3._array.splice(_this3._array.indexOf(item), 1);
            });
        }
    }]);

    return ArrayList;
}(Array);

var StringContent = function () {
    function StringContent() {
        var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        _classCallCheck(this, StringContent);

        this._string = content;
    }

    _createClass(StringContent, [{
        key: "startsWith",
        value: function startsWith(pattern, isCaseSensitive) {
            var str = this._string;
            if (!isCaseSensitive) {
                str = str.toLowerCase();
                pattern = pattern.toLowerCase();
            }
            return str.startsWith(pattern);
        }
    }, {
        key: "endsWith",
        value: function endsWith(pattern, isCaseSensitive) {
            var str = this._string;
            if (!isCaseSensitive) {
                str = str.toLowerCase();
                pattern = pattern.toLowerCase();
            }
            return str.endsWith(pattern);
        }
    }, {
        key: "contains",
        value: function contains(pattern, isCaseSensitive) {
            var str = this._string;
            if (!isCaseSensitive) {
                str = str.toLowerCase();
                pattern = pattern.toLowerCase();
            }

            return str.search(pattern) >= 0;
        }
    }, {
        key: "replaceAll",
        value: function replaceAll(oldString, newString, isCaseSensitive) {
            var regExp = new RegExp(oldString, isCaseSensitive ? 'g' : 'gi');
            return this._string.replace(regExp, newString);
        }
    }], [{
        key: "format",
        value: function format(content) {
            for (var _len6 = arguments.length, params = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
                params[_key6 - 1] = arguments[_key6];
            }

            for (var i = 0, length = params.length; i < length; i++) {
                content = content.replace("{" + i + "}", params[i]);
            }
            return content;
        }
    }]);

    return StringContent;
}();

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
                    var pair = _qs[i].split('=');
                    if (pair[0] == key.toLowerCase()) {
                        return pair[1];
                    }
                }
            }
            return undefined;
        }
    }, {
        key: "toJson",
        value: function toJson() {
            if (this._querystring !== '') {
                var json = {},
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