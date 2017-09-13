/**
 * Created by Administrator on 2017/9/12.
 */
/*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */
(function (e) {
    var t = function () {
        "use strict";
        return {
            isMsie: function () {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
            }, isBlankString: function (e) {
                return !e || /^\s*$/.test(e)
            }, escapeRegExChars: function (e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }, isString: function (e) {
                return typeof e == "string"
            }, isNumber: function (e) {
                return typeof e == "number"
            }, isArray: e.isArray, isFunction: e.isFunction, isObject: e.isPlainObject, isUndefined: function (e) {
                return typeof e == "undefined"
            }, toStr: function (n) {
                return t.isUndefined(n) || n === null ? "" : n + ""
            }, bind: e.proxy, each: function (t, n) {
                function r(e, t) {
                    return n(t, e)
                }

                e.each(t, r)
            }, map: e.map, filter: e.grep, every: function (t, n) {
                var r = !0;
                return t ? (e.each(t, function (e, i) {
                    if (!(r = n.call(null, i, e, t)))return !1
                }), !!r) : r
            }, some: function (t, n) {
                var r = !1;
                return t ? (e.each(t, function (e, i) {
                    if (r = n.call(null, i, e, t))return !1
                }), !!r) : r
            }, mixin: e.extend, getUniqueId: function () {
                var e = 0;
                return function () {
                    return e++
                }
            }(), templatify: function (n) {
                function r() {
                    return String(n)
                }

                return e.isFunction(n) ? n : r
            }, defer: function (e) {
                setTimeout(e, 0)
            }, debounce: function (e, t, n) {
                var r, i;
                return function () {
                    var s = this, o = arguments, u, a;
                    return u = function () {
                        r = null, n || (i = e.apply(s, o))
                    }, a = n && !r, clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
                }
            }, throttle: function (e, t) {
                var n, r, i, s, o, u;
                return o = 0, u = function () {
                    o = new Date, i = null, s = e.apply(n, r)
                }, function () {
                    var a = new Date, f = t - (a - o);
                    return n = this, r = arguments, f <= 0 ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s
                }
            }, noop: function () {
            }
        }
    }(), n = "0.10.5", r = function () {
        "use strict";
        function e(e) {
            return e = t.toStr(e), e ? e.split(/\s+/) : []
        }

        function n(e) {
            return e = t.toStr(e), e ? e.split(/\W+/) : []
        }

        function r(e) {
            return function () {
                var r = [].slice.call(arguments, 0);
                return function (i) {
                    var s = [];
                    return t.each(r, function (n) {
                        s = s.concat(e(t.toStr(i[n])))
                    }), s
                }
            }
        }

        return {nonword: n, whitespace: e, obj: {nonword: r(n), whitespace: r(e)}}
    }(), i = function () {
        "use strict";
        function n(n) {
            this.maxSize = t.isNumber(n) ? n : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = e.noop)
        }

        function r() {
            this.head = this.tail = null
        }

        function i(e, t) {
            this.key = e, this.val = t, this.prev = this.next = null
        }

        return t.mixin(n.prototype, {
            set: function (t, n) {
                var r = this.list.tail, s;
                this.size >= this.maxSize && (this.list.remove(r), delete this.hash[r.key]), (s = this.hash[t]) ? (s.val = n, this.list.moveToFront(s)) : (s = new i(t, n), this.list.add(s), this.hash[t] = s, this.size++)
            }, get: function (t) {
                var n = this.hash[t];
                if (n)return this.list.moveToFront(n), n.val
            }, reset: function () {
                this.size = 0, this.hash = {}, this.list = new r
            }
        }), t.mixin(r.prototype, {
            add: function (t) {
                this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
            }, remove: function (t) {
                t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
            }, moveToFront: function (e) {
                this.remove(e), this.add(e)
            }
        }), n
    }(), s = function () {
        "use strict";
        function i(e) {
            this.prefix = ["__", e, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + t.escapeRegExChars(this.prefix))
        }

        function s() {
            return (new Date).getTime()
        }

        function o(e) {
            return JSON.stringify(t.isUndefined(e) ? null : e)
        }

        function u(e) {
            return JSON.parse(e)
        }

        var e, n;
        try {
            e = window.localStorage, e.setItem("~~~", "!"), e.removeItem("~~~")
        } catch (r) {
            e = null
        }
        return e && window.JSON ? n = {
            _prefix: function (e) {
                return this.prefix + e
            }, _ttlKey: function (e) {
                return this._prefix(e) + this.ttlKey
            }, get: function (t) {
                return this.isExpired(t) && this.remove(t), u(e.getItem(this._prefix(t)))
            }, set: function (n, r, i) {
                return t.isNumber(i) ? e.setItem(this._ttlKey(n), o(s() + i)) : e.removeItem(this._ttlKey(n)), e.setItem(this._prefix(n), o(r))
            }, remove: function (t) {
                return e.removeItem(this._ttlKey(t)), e.removeItem(this._prefix(t)), this
            }, clear: function () {
                var t, n, r = [], i = e.length;
                for (t = 0; t < i; t++)(n = e.key(t)).match(this.keyMatcher) && r.push(n.replace(this.keyMatcher, ""));
                for (t = r.length; t--;)this.remove(r[t]);
                return this
            }, isExpired: function (n) {
                var r = u(e.getItem(this._ttlKey(n)));
                return t.isNumber(r) && s() > r ? !0 : !1
            }
        } : n = {get: t.noop, set: t.noop, remove: t.noop, clear: t.noop, isExpired: t.noop}, t.mixin(i.prototype, n), i
    }(), o = function () {
        "use strict";
        function u(t) {
            t = t || {}, this.cancelled = !1, this.lastUrl = null, this._send = t.transport ? a(t.transport) : e.ajax, this._get = t.rateLimiter ? t.rateLimiter(this._get) : this._get, this._cache = t.cache === !1 ? new i(0) : o
        }

        function a(n) {
            return function (i, s) {
                function u(e) {
                    t.defer(function () {
                        o.resolve(e)
                    })
                }

                function a(e) {
                    t.defer(function () {
                        o.reject(e)
                    })
                }

                var o = e.Deferred();
                return n(i, s, u, a), o
            }
        }

        var n = 0, r = {}, s = 6, o = new i(10);
        return u.setMaxPendingRequests = function (t) {
            s = t
        }, u.resetCache = function () {
            o.reset()
        }, t.mixin(u.prototype, {
            _get: function (e, t, i) {
                function a(t) {
                    i && i(null, t), o._cache.set(e, t)
                }

                function f() {
                    i && i(!0)
                }

                function l() {
                    n--, delete r[e], o.onDeckRequestArgs && (o._get.apply(o, o.onDeckRequestArgs), o.onDeckRequestArgs = null)
                }

                var o = this, u;
                if (this.cancelled || e !== this.lastUrl)return;
                (u = r[e]) ? u.done(a).fail(f) : n < s ? (n++, r[e] = this._send(e, t).done(a).fail(f).always(l)) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
            }, get: function (e, n, r) {
                var i;
                return t.isFunction(n) && (r = n, n = {}), this.cancelled = !1, this.lastUrl = e, (i = this._cache.get(e)) ? t.defer(function () {
                    r && r(null, i)
                }) : this._get(e, n, r), !!i
            }, cancel: function () {
                this.cancelled = !0
            }
        }), u
    }(), u = function () {
        "use strict";
        function n(t) {
            t = t || {}, (!t.datumTokenizer || !t.queryTokenizer) && e.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = t.datumTokenizer, this.queryTokenizer = t.queryTokenizer, this.reset()
        }

        function r(e) {
            return e = t.filter(e, function (e) {
                return !!e
            }), e = t.map(e, function (e) {
                return e.toLowerCase()
            }), e
        }

        function i() {
            return {ids: [], children: {}}
        }

        function s(e) {
            var t = {}, n = [];
            for (var r = 0, i = e.length; r < i; r++)t[e[r]] || (t[e[r]] = !0, n.push(e[r]));
            return n
        }

        function o(e, t) {
            function u(e, t) {
                return e - t
            }

            var n = 0, r = 0, i = [];
            e = e.sort(u), t = t.sort(u);
            var s = e.length, o = t.length;
            while (n < s && r < o)e[n] < t[r] ? n++ : e[n] > t[r] ? r++ : (i.push(e[n]), n++, r++);
            return i
        }

        return t.mixin(n.prototype, {
            bootstrap: function (t) {
                this.datums = t.datums, this.trie = t.trie
            }, add: function (e) {
                var n = this;
                e = t.isArray(e) ? e : [e], t.each(e, function (e) {
                    var s, o;
                    s = n.datums.push(e) - 1, o = r(n.datumTokenizer(e)), t.each(o, function (e) {
                        var t, r, o;
                        t = n.trie, r = e.split("");
                        while (o = r.shift())t = t.children[o] || (t.children[o] = i()), t.ids.push(s)
                    })
                })
            }, get: function (n) {
                var i = this, u, a;
                return u = r(this.queryTokenizer(n)), t.each(u, function (e) {
                    var t, n, r, s;
                    if (a && a.length === 0)return !1;
                    t = i.trie, n = e.split("");
                    while (t && (r = n.shift()))t = t.children[r];
                    if (!t || n.length !== 0)return a = [], !1;
                    s = t.ids.slice(0), a = a ? o(a, s) : s
                }), a ? t.map(s(a), function (e) {
                    return i.datums[e]
                }) : []
            }, reset: function () {
                this.datums = [], this.trie = i()
            }, serialize: function () {
                return {datums: this.datums, trie: this.trie}
            }
        }), n
    }(), a = function () {
        "use strict";
        function r(e) {
            return e.local || null
        }

        function i(r) {
            var i, s;
            s = {url: null, thumbprint: "", ttl: 864e5, filter: null, ajax: {}};
            if (i = r.prefetch || null)i = t.isString(i) ? {url: i} : i, i = t.mixin(s, i), i.thumbprint = n + i.thumbprint, i.ajax.type = i.ajax.type || "GET", i.ajax.dataType = i.ajax.dataType || "json", !i.url && e.error("prefetch requires url to be set");
            return i
        }

        function s(n) {
            function s(e) {
                return function (n) {
                    return t.debounce(n, e)
                }
            }

            function o(e) {
                return function (n) {
                    return t.throttle(n, e)
                }
            }

            var r, i;
            i = {
                url: null,
                cache: !0,
                wildcard: "%QUERY",
                replace: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                send: null,
                filter: null,
                ajax: {}
            };
            if (r = n.remote || null)r = t.isString(r) ? {url: r} : r, r = t.mixin(i, r), r.rateLimiter = /^throttle$/i.test(r.rateLimitBy) ? o(r.rateLimitWait) : s(r.rateLimitWait), r.ajax.type = r.ajax.type || "GET", r.ajax.dataType = r.ajax.dataType || "json", delete r.rateLimitBy, delete r.rateLimitWait, !r.url && e.error("remote requires url to be set");
            return r
        }

        return {local: r, prefetch: i, remote: s}
    }();
    (function (n) {
        "use strict";
        function l(t) {
            (!t || !t.local && !t.prefetch && !t.remote) && e.error("one of local, prefetch, or remote is required"), this.limit = t.limit || 5, this.sorter = c(t.sorter), this.dupDetector = t.dupDetector || h, this.local = a.local(t), this.prefetch = a.prefetch(t), this.remote = a.remote(t), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new u({
                datumTokenizer: t.datumTokenizer,
                queryTokenizer: t.queryTokenizer
            }), this.storage = this.cacheKey ? new s(this.cacheKey) : null
        }

        function c(e) {
            function n(t) {
                return t.sort(e)
            }

            function r(e) {
                return e
            }

            return t.isFunction(e) ? n : r
        }

        function h() {
            return !1
        }

        var i, f;
        return i = n.Bloodhound, f = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        }, n.Bloodhound = l, l.noConflict = function () {
            return n.Bloodhound = i, l
        }, l.tokenizers = r, t.mixin(l.prototype, {
            _loadPrefetch: function (n) {
                function o(e) {
                    r.clear(), r.add(n.filter ? n.filter(e) : e), r._saveToStorage(r.index.serialize(), n.thumbprint, n.ttl)
                }

                var r = this, i, s;
                return (i = this._readFromStorage(n.thumbprint)) ? (this.index.bootstrap(i), s = e.Deferred().resolve()) : s = e.ajax(n.url, n.ajax).done(o), s
            }, _getFromRemote: function (t, n) {
                function o(e, t) {
                    e ? n([]) : n(r.remote.filter ? r.remote.filter(t) : t)
                }

                var r = this, i, s;
                if (!this.transport)return;
                return t = t || "", s = encodeURIComponent(t), i = this.remote.replace ? this.remote.replace(this.remote.url, t) : this.remote.url.replace(this.remote.wildcard, s), this.transport.get(i, this.remote.ajax, o)
            }, _cancelLastRemoteRequest: function () {
                this.transport && this.transport.cancel()
            }, _saveToStorage: function (t, n, r) {
                this.storage && (this.storage.set(f.data, t, r), this.storage.set(f.protocol, location.protocol, r), this.storage.set(f.thumbprint, n, r))
            }, _readFromStorage: function (t) {
                var n = {}, r;
                return this.storage && (n.data = this.storage.get(f.data), n.protocol = this.storage.get(f.protocol), n.thumbprint = this.storage.get(f.thumbprint)), r = n.thumbprint !== t || n.protocol !== location.protocol, n.data && !r ? n.data : null
            }, _initialize: function () {
                function u() {
                    r.add(t.isFunction(i) ? i() : i)
                }

                var r = this, i = this.local, s;
                return s = this.prefetch ? this._loadPrefetch(this.prefetch) : e.Deferred().resolve(), i && s.done(u), this.transport = this.remote ? new o(this.remote) : null, this.initPromise = s.promise()
            }, initialize: function (t) {
                return !this.initPromise || t ? this._initialize() : this.initPromise
            }, add: function (t) {
                this.index.add(t)
            }, get: function (n, r) {
                function u(e) {
                    var n = s.slice(0);
                    t.each(e, function (e) {
                        var r;
                        return r = t.some(n, function (t) {
                            return i.dupDetector(e, t)
                        }), !r && n.push(e), n.length < i.limit
                    }), r && r(i.sorter(n))
                }

                var i = this, s = [], o = !1;
                s = this.index.get(n), s = this.sorter(s).slice(0, this.limit), s.length < this.limit ? o = this._getFromRemote(n, u) : this._cancelLastRemoteRequest(), o || (s.length > 0 || !this.transport) && r && r(s)
            }, clear: function () {
                this.index.reset()
            }, clearPrefetchCache: function () {
                this.storage && this.storage.clear()
            }, clearRemoteCache: function () {
                this.transport && o.resetCache()
            }, ttAdapter: function () {
                return t.bind(this.get, this)
            }
        }), l
    })(this);
    var f = function () {
        return {
            wrapper: '<span class="twitter-typeahead"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>',
            dataset: '<div class="tt-dataset-%CLASS%"></div>',
            suggestions: '<span class="tt-suggestions searchList"></span>',
            suggestion: '<div class="tt-suggestion"></div>'
        }
    }(), l = function () {
        "use strict";
        var e = {
            wrapper: {position: "relative", display: "inline-block"},
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none",
                opacity: "1"
            },
            input: {position: "relative", verticalAlign: "top", backgroundColor: "transparent"},
            inputWithNoHint: {position: "relative", verticalAlign: "top"},
            dropdown: {position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none"},
            suggestions: {display: "block"},
            suggestion: {whiteSpace: "nowrap", cursor: "pointer"},
            suggestionChild: {whiteSpace: "normal"},
            ltr: {left: "0", right: "auto"},
            rtl: {left: "auto", right: " 0"}
        };
        return t.isMsie() && t.mixin(e.input, {backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}), t.isMsie() && t.isMsie() <= 7 && t.mixin(e.input, {marginTop: "-1px"}), e
    }(), c = function () {
        "use strict";
        function r(t) {
            (!t || !t.el) && e.error("EventBus initialized without el"), this.$el = e(t.el)
        }

        var n = "typeahead:";
        return t.mixin(r.prototype, {
            trigger: function (e) {
                var t = [].slice.call(arguments, 1);
                this.$el.trigger(n + e, t)
            }
        }), r
    }(), h = function () {
        "use strict";
        function n(t, n, r, i) {
            var s;
            if (!r)return this;
            n = n.split(e), r = i ? f(r, i) : r, this._callbacks = this._callbacks || {};
            while (s = n.shift())this._callbacks[s] = this._callbacks[s] || {
                    sync: [],
                    async: []
                }, this._callbacks[s][t].push(r);
            return this
        }

        function r(e, t, r) {
            return n.call(this, "async", e, t, r)
        }

        function i(e, t, r) {
            return n.call(this, "sync", e, t, r)
        }

        function s(t) {
            var n;
            if (!this._callbacks)return this;
            t = t.split(e);
            while (n = t.shift())delete this._callbacks[n];
            return this
        }

        function o(n) {
            var r, i, s, o, a;
            if (!this._callbacks)return this;
            n = n.split(e), s = [].slice.call(arguments, 1);
            while ((r = n.shift()) && (i = this._callbacks[r]))o = u(i.sync, this, [r].concat(s)), a = u(i.async, this, [r].concat(s)), o() && t(a);
            return this
        }

        function u(e, t, n) {
            function r() {
                var r;
                for (var i = 0, s = e.length; !r && i < s; i += 1)r = e[i].apply(t, n) === !1;
                return !r
            }

            return r
        }

        function a() {
            var e;
            return window.setImmediate ? e = function (t) {
                setImmediate(function () {
                    t()
                })
            } : e = function (t) {
                setTimeout(function () {
                    t()
                }, 0)
            }, e
        }

        function f(e, t) {
            return e.bind ? e.bind(t) : function () {
                e.apply(t, [].slice.call(arguments, 0))
            }
        }

        var e = /\s+/, t = a();
        return {onSync: i, onAsync: r, off: s, trigger: o}
    }(), p = function (e) {
        "use strict";
        function r(e, n, r) {
            var i = [], s;
            for (var o = 0, u = e.length; o < u; o++)i.push(t.escapeRegExChars(e[o]));
            return s = r ? "\\b(" + i.join("|") + ")\\b" : "(" + i.join("|") + ")", n ? new RegExp(s) : new RegExp(s, "i")
        }

        var n = {node: null, pattern: null, tagName: "strong", className: null, wordsOnly: !1, caseSensitive: !1};
        return function (s) {
            function u(t) {
                var n, r, i;
                if (n = o.exec(t.data))i = e.createElement(s.tagName), s.className && (i.className = s.className), r = t.splitText(n.index), r.splitText(n[0].length), i.appendChild(r.cloneNode(!0)), t.parentNode.replaceChild(i, r);
                return !!n
            }

            function a(e, t) {
                var n, r = 3;
                for (var i = 0; i < e.childNodes.length; i++)n = e.childNodes[i], n.nodeType === r ? i += t(n) ? 1 : 0 : a(n, t)
            }

            var o;
            s = t.mixin({}, n, s);
            if (!s.node || !s.pattern)return;
            s.pattern = t.isArray(s.pattern) ? s.pattern : [s.pattern], o = r(s.pattern, s.caseSensitive, s.wordsOnly), a(s.node, u)
        }
    }(window.document), d = function () {
        "use strict";
        function r(r) {
            var s = this, o, u, a, f;
            r = r || {}, r.input || e.error("input is missing"), o = t.bind(this._onBlur, this), u = t.bind(this._onFocus, this), a = t.bind(this._onKeydown, this), f = t.bind(this._onInput, this), this.$hint = e(r.hint), this.$input = e(r.input).on("blur.tt", o).on("focus.tt", u).on("keydown.tt", a), this.$hint.length === 0 && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = t.noop), t.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (e) {
                if (n[e.which || e.keyCode])return;
                t.defer(t.bind(s._onInput, s, e))
            }) : this.$input.on("input.tt", f), this.query = this.$input.val(), this.$overflowHelper = i(this.$input)
        }

        function i(t) {
            return e('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: t.css("font-family"),
                fontSize: t.css("font-size"),
                fontStyle: t.css("font-style"),
                fontVariant: t.css("font-variant"),
                fontWeight: t.css("font-weight"),
                wordSpacing: t.css("word-spacing"),
                letterSpacing: t.css("letter-spacing"),
                textIndent: t.css("text-indent"),
                textRendering: t.css("text-rendering"),
                textTransform: t.css("text-transform")
            }).insertAfter(t)
        }

        function s(e, t) {
            return r.normalizeQuery(e) === r.normalizeQuery(t)
        }

        function o(e) {
            return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
        }

        var n;
        return n = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        }, r.normalizeQuery = function (e) {
            return (e || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        }, t.mixin(r.prototype, h, {
            _onBlur: function () {
                this.resetInputValue(), this.trigger("blurred")
            }, _onFocus: function () {
                this.trigger("focused")
            }, _onKeydown: function (t) {
                var r = n[t.which || t.keyCode];
                this._managePreventDefault(r, t), r && this._shouldTrigger(r, t) && this.trigger(r + "Keyed", t)
            }, _onInput: function () {
                this._checkInputValue()
            }, _managePreventDefault: function (t, n) {
                var r, i, s;
                switch (t) {
                    case"tab":
                        i = this.getHint(), s = this.getInputValue(), r = i && i !== s && !o(n);
                        break;
                    case"up":
                    case"down":
                        r = !o(n);
                        break;
                    default:
                        r = !1
                }
                r && n.preventDefault()
            }, _shouldTrigger: function (t, n) {
                var r;
                switch (t) {
                    case"tab":
                        r = !o(n);
                        break;
                    default:
                        r = !0
                }
                return r
            }, _checkInputValue: function () {
                var t, n, r;
                t = this.getInputValue(), n = s(t, this.query), r = n ? this.query.length !== t.length : !1, this.query = t, n ? r && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
            }, focus: function () {
                this.$input.focus()
            }, blur: function () {
                this.$input.blur()
            }, getQuery: function () {
                return this.query
            }, setQuery: function (t) {
                this.query = t
            }, getInputValue: function () {
                return this.$input.val()
            }, setInputValue: function (t, n) {
                this.$input.val(t), n ? this.clearHint() : this._checkInputValue()
            }, resetInputValue: function () {
                this.setInputValue(this.query, !0)
            }, getHint: function () {
                return this.$hint.val()
            }, setHint: function (t) {
                this.$hint.val(t)
            }, clearHint: function () {
                this.setHint("")
            }, clearHintIfInvalid: function () {
                var t, n, r, i;
                t = this.getInputValue(), n = this.getHint(), r = t !== n && n.indexOf(t) === 0, i = t !== "" && r && !this.hasOverflow(), !i && this.clearHint()
            }, getLanguageDirection: function () {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            }, hasOverflow: function () {
                var t = this.$input.width() - 2;
                return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
            }, isCursorAtEnd: function () {
                var e, n, r;
                return e = this.$input.val().length, n = this.$input[0].selectionStart, t.isNumber(n) ? n === e : document.selection ? (r = document.selection.createRange(), r.moveStart("character", -e), e === r.text.length) : !0
            }, destroy: function () {
                this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
            }
        }), r
    }(), v = function () {
        "use strict";
        function s(n) {
            n = n || {}, n.templates = n.templates || {}, n.source || e.error("missing source"), n.name && !a(n.name) && e.error("invalid dataset name: " + n.name), this.query = null, this.highlight = !!n.highlight, this.name = n.name || t.getUniqueId(), this.source = n.source, this.displayFn = o(n.display || n.displayKey), this.templates = u(n.templates, this.displayFn), this.$el = e(f.dataset.replace("%CLASS%", this.name))
        }

        function o(e) {
            function n(t) {
                return t[e]
            }

            return e = e || "value", t.isFunction(e) ? e : n
        }

        function u(e, n) {
            function r(e) {
                return "<p>" + n(e) + "</p>"
            }

            return {
                empty: e.empty && t.templatify(e.empty),
                header: e.header && t.templatify(e.header),
                footer: e.footer && t.templatify(e.footer),
                suggestion: e.suggestion || r
            }
        }

        function a(e) {
            return /^[_a-zA-Z0-9-]+$/.test(e)
        }

        var n = "ttDataset", r = "ttValue", i = "ttDatum";
        return s.extractDatasetName = function (r) {
            return e(r).data(n)
        }, s.extractValue = function (n) {
            return e(n).data(r)
        }, s.extractDatum = function (n) {
            return e(n).data(i)
        }, t.mixin(s.prototype, h, {
            _render: function (o, u) {
                function h() {
                    return a.templates.empty({query: o, isEmpty: !0})
                }

                function d() {
                    function h(t) {
                        var s;
                        return s = e(f.suggestion).append(a.templates.suggestion(t)).data(n, a.name).data(r, a.displayFn(t)).data(i, t), s.children().each(function () {
                            e(this).css(l.suggestionChild)
                        }), s
                    }

                    var s, c;
                    return s = e(f.suggestions).css(l.suggestions), c = t.map(u, h), s.append.apply(s, c), a.highlight && p({
                        className: "tt-highlight",
                        node: s[0],
                        pattern: o
                    }), s
                }

                function v() {
                    return a.templates.header({query: o, isEmpty: !c})
                }

                function m() {
                    return a.templates.footer({query: o, isEmpty: !c})
                }

                if (!this.$el)return;
                var a = this, c;
                this.$el.empty(), c = u && u.length, !c && this.templates.empty ? this.$el.html(h()).prepend(a.templates.header ? v() : null).append(a.templates.footer ? m() : null) : c && this.$el.html(d()).prepend(a.templates.header ? v() : null).append(a.templates.footer ? m() : null), this.trigger("rendered")
            }, getRoot: function () {
                return this.$el
            }, update: function (t) {
                function r(e) {
                    !n.canceled && t === n.query && n._render(t, e)
                }

                var n = this;
                this.query = t, this.canceled = !1, this.source(t, r)
            }, cancel: function () {
                this.canceled = !0
            }, clear: function () {
                this.cancel(), this.$el.empty(), this.trigger("rendered")
            }, isEmpty: function () {
                return this.$el.is(":empty")
            }, destroy: function () {
                this.$el = null
            }
        }), s
    }(), m = function () {
        "use strict";
        function n(n) {
            var i = this, s, o, u;
            n = n || {}, n.menu || e.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = t.map(n.datasets, r), s = t.bind(this._onSuggestionClick, this), o = t.bind(this._onSuggestionMouseEnter, this), u = t.bind(this._onSuggestionMouseLeave, this), this.$menu = e(n.menu).on("click.tt", ".tt-suggestion", s).on("mouseenter.tt", ".tt-suggestion", o).on("mouseleave.tt", ".tt-suggestion", u), t.each(this.datasets, function (e) {
                i.$menu.append(e.getRoot()), e.onSync("rendered", i._onRendered, i)
            })
        }

        function r(e) {
            return new v(e)
        }

        return t.mixin(n.prototype, h, {
            _onSuggestionClick: function (n) {
                this.trigger("suggestionClicked", e(n.currentTarget))
            }, _onSuggestionMouseEnter: function (n) {
                this._removeCursor(), this._setCursor(e(n.currentTarget), !0)
            }, _onSuggestionMouseLeave: function () {
                this._removeCursor()
            }, _onRendered: function () {
                function n(e) {
                    return e.isEmpty()
                }

                this.isEmpty = t.every(this.datasets, n), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
            }, _hide: function () {
                this.$menu.hide()
            }, _show: function () {
                this.$menu.css("display", "block")
            }, _getSuggestions: function () {
                return this.$menu.find(".tt-suggestion")
            }, _getCursor: function () {
                return this.$menu.find(".tt-cursor").first()
            }, _setCursor: function (t, n) {
                t.first().addClass("tt-cursor"), !n && this.trigger("cursorMoved")
            }, _removeCursor: function () {
                this._getCursor().removeClass("tt-cursor")
            }, _moveCursor: function (t) {
                var n, r, i, s;
                if (!this.isOpen)return;
                r = this._getCursor(), n = this._getSuggestions(), this._removeCursor(), i = n.index(r) + t, i = (i + 1) % (n.length + 1) - 1;
                if (i === -1) {
                    this.trigger("cursorRemoved");
                    return
                }
                i < -1 && (i = n.length - 1), this._setCursor(s = n.eq(i)), this._ensureVisible(s)
            }, _ensureVisible: function (t) {
                var n, r, i, s;
                n = t.position().top, r = n + t.outerHeight(!0), i = this.$menu.scrollTop(), s = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), n < 0 ? this.$menu.scrollTop(i + n) : s < r && this.$menu.scrollTop(i + (r - s))
            }, close: function () {
                this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
            }, open: function () {
                this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
            }, setLanguageDirection: function (t) {
                this.$menu.css(t === "ltr" ? l.ltr : l.rtl)
            }, moveCursorUp: function () {
                this._moveCursor(-1)
            }, moveCursorDown: function () {
                this._moveCursor(1)
            }, getDatumForSuggestion: function (t) {
                var n = null;
                return t.length && (n = {
                    raw: v.extractDatum(t),
                    value: v.extractValue(t),
                    datasetName: v.extractDatasetName(t)
                }), n
            }, getDatumForCursor: function () {
                return this.getDatumForSuggestion(this._getCursor().first())
            }, getDatumForTopSuggestion: function () {
                return this.getDatumForSuggestion(this._getSuggestions().first())
            }, update: function (n) {
                function r(e) {
                    e.update(n)
                }

                t.each(this.datasets, r)
            }, empty: function () {
                function n(e) {
                    e.clear()
                }

                t.each(this.datasets, n), this.isEmpty = !0
            }, isVisible: function () {
                return this.isOpen && !this.isEmpty
            }, destroy: function () {
                function n(e) {
                    e.destroy()
                }

                this.$menu.off(".tt"), this.$menu = null, t.each(this.datasets, n)
            }
        }), n
    }(), g = function () {
        "use strict";
        function r(n) {
            var r, s, o;
            n = n || {}, n.input || e.error("missing input"), this.isActivated = !1, this.autoselect = !!n.autoselect, this.minLength = t.isNumber(n.minLength) ? n.minLength : 1, this.$node = i(n.input, n.withHint), r = this.$node.find(".tt-dropdown-menu"), s = this.$node.find(".tt-input"), o = this.$node.find(".tt-hint"), s.on("blur.tt", function (e) {
                var n, i, o;
                n = document.activeElement, i = r.is(n), o = r.has(n).length > 0, t.isMsie() && (i || o) && (e.preventDefault(), e.stopImmediatePropagation(), t.defer(function () {
                    s.focus()
                }))
            }), r.on("mousedown.tt", function (e) {
                e.preventDefault()
            }), this.eventBus = n.eventBus || new c({el: s}), this.dropdown = (new m({
                menu: r,
                datasets: n.datasets
            })).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = (new d({
                input: s,
                hint: o
            })).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
        }

        function i(t, r) {
            var i, o, u, a;
            i = e(t), o = e(f.wrapper).css(l.wrapper), u = e(f.dropdown).css(l.dropdown), a = i.clone().css(l.hint).css(s(i)), a.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            }), i.data(n, {
                dir: i.attr("dir"),
                autocomplete: i.attr("autocomplete"),
                spellcheck: i.attr("spellcheck"),
                style: i.attr("style")
            }), i.addClass("tt-input").attr({autocomplete: "off", spellcheck: !1}).css(r ? l.input : l.inputWithNoHint);
            try {
                !i.attr("dir") && i.attr("dir", "auto")
            } catch (c) {
            }
            return i.wrap(o).parent().prepend(r ? a : null).append(u)
        }

        function s(e) {
            return {
                backgroundAttachment: e.css("background-attachment"),
                backgroundClip: e.css("background-clip"),
                backgroundColor: e.css("background-color"),
                backgroundImage: e.css("background-image"),
                backgroundOrigin: e.css("background-origin"),
                backgroundPosition: e.css("background-position"),
                backgroundRepeat: e.css("background-repeat"),
                backgroundSize: e.css("background-size")
            }
        }

        function o(e) {
            var r = e.find(".tt-input");
            t.each(r.data(n), function (e, n) {
                t.isUndefined(e) ? r.removeAttr(n) : r.attr(n, e)
            }), r.detach().removeData(n).removeClass("tt-input").insertAfter(e), e.remove()
        }

        var n = "ttAttrs";
        return t.mixin(r.prototype, {
            _onSuggestionClicked: function (t, n) {
                var r;
                (r = this.dropdown.getDatumForSuggestion(n)) && this._select(r)
            }, _onCursorMoved: function () {
                var t = this.dropdown.getDatumForCursor();
                this.input.setInputValue(t.value, !0), this.eventBus.trigger("cursorchanged", t.raw, t.datasetName)
            }, _onCursorRemoved: function () {
                this.input.resetInputValue(), this._updateHint()
            }, _onDatasetRendered: function () {
                this._updateHint()
            }, _onOpened: function () {
                this._updateHint(), this.eventBus.trigger("opened")
            }, _onClosed: function () {
                this.input.clearHint(), this.eventBus.trigger("closed")
            }, _onFocused: function () {
                this.isActivated = !0, this.dropdown.open()
            }, _onBlurred: function () {
                this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()
            }, _onEnterKeyed: function (t, n) {
                var r, i;
                r = this.dropdown.getDatumForCursor(), i = this.dropdown.getDatumForTopSuggestion(), r ? (this._select(r), n.preventDefault()) : this.autoselect && i && (this._select(i), n.preventDefault())
            }, _onTabKeyed: function (t, n) {
                this._autocomplete(!0)
            }, _onEscKeyed: function () {
                this.dropdown.close(), this.input.resetInputValue()
            }, _onUpKeyed: function () {
                var t = this.input.getQuery();
                this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open()
            }, _onDownKeyed: function () {
                var t = this.input.getQuery();
                this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open()
            }, _onLeftKeyed: function () {
                this.dir === "rtl" && this._autocomplete()
            }, _onRightKeyed: function () {
                this.dir === "ltr" && this._autocomplete()
            }, _onQueryChanged: function (t, n) {
                this.input.clearHintIfInvalid(), n.length >= this.minLength ? this.dropdown.update(n) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
            }, _onWhitespaceChanged: function () {
                this._updateHint(), this.dropdown.open()
            }, _setLanguageDirection: function () {
                var t;
                this.dir !== (t = this.input.getLanguageDirection()) && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t))
            }, _updateHint: function () {
                var n, r, i, s, o, u;
                n = this.dropdown.getDatumForTopSuggestion(), n && this.dropdown.isVisible() && !this.input.hasOverflow() ? (r = this.input.getInputValue(), i = d.normalizeQuery(r), s = t.escapeRegExChars(i), o = new RegExp("^(?:" + s + ")(.+$)", "i"), u = o.exec(n.value), u ? this.input.setHint(r + u[1]) : this.input.clearHint()) : this.input.clearHint()
            }, _autocomplete: function (t) {
                var n, r, i, s;
                n = this.input.getHint(), r = this.input.getQuery(), i = t || this.input.isCursorAtEnd(), n && r !== n && i && (s = this.dropdown.getDatumForTopSuggestion(), s && this.input.setInputValue(s.value), this.eventBus.trigger("autocompleted", s.raw, s.datasetName))
            }, _select: function (n) {
                this.input.setQuery(n.value), this.input.setInputValue(n.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", n.raw, n.datasetName), this.dropdown.close(), t.defer(t.bind(this.dropdown.empty, this.dropdown))
            }, open: function () {
                this.dropdown.open()
            }, close: function () {
                this.dropdown.close()
            }, setVal: function (n) {
                n = t.toStr(n), this.isActivated ? this.input.setInputValue(n) : (this.input.setQuery(n), this.input.setInputValue(n, !0)), this._setLanguageDirection()
            }, getVal: function () {
                return this.input.getQuery()
            }, destroy: function () {
                this.input.destroy(), this.dropdown.destroy(), o(this.$node), this.$node = null
            }
        }), r
    }();
    (function () {
        "use strict";
        var n, r, i;
        n = e.fn.typeahead, r = "ttTypeahead", i = {
            initialize: function (i, s) {
                function o() {
                    var n = e(this), o, u;
                    t.each(s, function (e) {
                        e.highlight = !!i.highlight
                    }), u = new g({
                        input: n,
                        eventBus: o = new c({el: n}),
                        withHint: t.isUndefined(i.hint) ? !0 : !!i.hint,
                        minLength: i.minLength,
                        autoselect: i.autoselect,
                        datasets: s
                    }), n.data(r, u)
                }

                return s = t.isArray(s) ? s : [].slice.call(arguments, 1), i = i || {}, this.each(o)
            }, open: function () {
                function n() {
                    var t = e(this), n;
                    (n = t.data(r)) && n.open()
                }

                return this.each(n)
            }, close: function () {
                function n() {
                    var t = e(this), n;
                    (n = t.data(r)) && n.close()
                }

                return this.each(n)
            }, val: function (n) {
                function i() {
                    var t = e(this), i;
                    (i = t.data(r)) && i.setVal(n)
                }

                function s(e) {
                    var t, n;
                    if (t = e.data(r))n = t.getVal();
                    return n
                }

                return arguments.length ? this.each(i) : s(this.first())
            }, destroy: function () {
                function n() {
                    var t = e(this), n;
                    if (n = t.data(r))n.destroy(), t.removeData(r)
                }

                return this.each(n)
            }
        }, e.fn.typeahead = function (t) {
            var n;
            return i[t] && t !== "initialize" ? (n = this.filter(function () {
                return !!e(this).data(r)
            }), i[t].apply(n, [].slice.call(arguments, 1))) : i.initialize.apply(this, arguments)
        }, e.fn.typeahead.noConflict = function () {
            return e.fn.typeahead = n, this
        }
    })()
})(window.jQuery);