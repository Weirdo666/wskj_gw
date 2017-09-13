/**
 * Created by Administrator on 2017/9/13.
 */
!function e(t, n, r) {
    function i(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var f = "function" == typeof require && require;
                if (!u && f)return f(o, !0);
                if (s)return s(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = n[o] = {exports: {}};
            t[o][0].call(c.exports, function (e) {
                var n = t[o][1][e];
                return i(n ? n : e)
            }, c, c.exports, e, t, n, r)
        }
        return n[o].exports
    }

    for (var s = "function" == typeof require && require, o = 0; o < r.length; o++)i(r[o]);
    return i
}({
    1: [function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e) {
            if (e && e.__esModule)return e;
            var t = {};
            if (null != e)for (var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function s() {
            var e = new u.HandlebarsEnvironment;
            return p.extend(e, u), e.SafeString = f["default"], e.Exception = c["default"], e.Utils = p, e.escapeExpression = p.escapeExpression, e.VM = v, e.template = function (t) {
                return v.template(t, e)
            }, e
        }

        n.__esModule = !0;
        var o = e("./handlebars/base"), u = i(o), a = e("./handlebars/safe-string"), f = r(a), l = e("./handlebars/exception"), c = r(l), h = e("./handlebars/utils"), p = i(h), d = e("./handlebars/runtime"), v = i(d), m = e("./handlebars/no-conflict"), g = r(m), y = s();
        y.create = s, g["default"](y), y["default"] = y, n["default"] = y, t.exports = n["default"]
    }, {
        "./handlebars/base": 2,
        "./handlebars/exception": 5,
        "./handlebars/no-conflict": 15,
        "./handlebars/runtime": 16,
        "./handlebars/safe-string": 17,
        "./handlebars/utils": 18
    }],
    2: [function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e, t, n) {
            this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, a.registerDefaultHelpers(this), f.registerDefaultDecorators(this)
        }

        n.__esModule = !0, n.HandlebarsEnvironment = i;
        var s = e("./utils"), o = e("./exception"), u = r(o), a = e("./helpers"), f = e("./decorators"), l = e("./logger"), c = r(l), h = "4.0.8";
        n.VERSION = h;
        var p = 7;
        n.COMPILER_REVISION = p;
        var d = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0"
        };
        n.REVISION_CHANGES = d;
        var v = "[object Object]";
        i.prototype = {
            constructor: i, logger: c["default"], log: c["default"].log, registerHelper: function (e, t) {
                if (s.toString.call(e) === v) {
                    if (t)throw new u["default"]("Arg not supported with multiple helpers");
                    s.extend(this.helpers, e)
                } else this.helpers[e] = t
            }, unregisterHelper: function (e) {
                delete this.helpers[e]
            }, registerPartial: function (e, t) {
                if (s.toString.call(e) === v)s.extend(this.partials, e); else {
                    if ("undefined" == typeof t)throw new u["default"]('Attempting to register a partial called "' + e + '" as undefined');
                    this.partials[e] = t
                }
            }, unregisterPartial: function (e) {
                delete this.partials[e]
            }, registerDecorator: function (e, t) {
                if (s.toString.call(e) === v) {
                    if (t)throw new u["default"]("Arg not supported with multiple decorators");
                    s.extend(this.decorators, e)
                } else this.decorators[e] = t
            }, unregisterDecorator: function (e) {
                delete this.decorators[e]
            }
        };
        var m = c["default"].log;
        n.log = m, n.createFrame = s.createFrame, n.logger = c["default"]
    }, {"./decorators": 3, "./exception": 5, "./helpers": 6, "./logger": 14, "./utils": 18}],
    3: [function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e) {
            o["default"](e)
        }

        n.__esModule = !0, n.registerDefaultDecorators = i;
        var s = e("./decorators/inline"), o = r(s)
    }, {"./decorators/inline": 4}],
    4: [function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var r = e("../utils");
        n["default"] = function (e) {
            e.registerDecorator("inline", function (e, t, n, i) {
                var s = e;
                return t.partials || (t.partials = {}, s = function (i, s) {
                    var o = n.partials;
                    n.partials = r.extend({}, o, t.partials);
                    var u = e(i, s);
                    return n.partials = o, u
                }), t.partials[i.args[0]] = i.fn, s
            })
        }, t.exports = n["default"]
    }, {"../utils": 18}],
    5: [function (e, t, n) {
        "use strict";
        function r(e, t) {
            var n = t && t.loc, s = void 0, u = void 0;
            n && (s = n.start.line, u = n.start.column, e += " - " + s + ":" + u);
            for (var f = Error.prototype.constructor.call(this, e), l = 0; l < i.length; l++)this[i[l]] = f[i[l]];
            Error.captureStackTrace && Error.captureStackTrace(this, r);
            try {
                n && (this.lineNumber = s, Object.defineProperty ? Object.defineProperty(this, "column", {
                    value: u,
                    enumerable: !0
                }) : this.column = u)
            } catch (c) {
            }
        }

        n.__esModule = !0;
        var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        r.prototype = new Error, n["default"] = r, t.exports = n["default"]
    }, {}],
    6: [function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e) {
            o["default"](e), a["default"](e), l["default"](e), h["default"](e), d["default"](e), m["default"](e), y["default"](e)
        }

        n.__esModule = !0, n.registerDefaultHelpers = i;
        var s = e("./helpers/block-helper-missing"), o = r(s), u = e("./helpers/each"), a = r(u), f = e("./helpers/helper-missing"), l = r(f), c = e("./helpers/if"), h = r(c), p = e("./helpers/log"), d = r(p), v = e("./helpers/lookup"), m = r(v), g = e("./helpers/with"), y = r(g)
    }, {
        "./helpers/block-helper-missing": 7,
        "./helpers/each": 8,
        "./helpers/helper-missing": 9,
        "./helpers/if": 10,
        "./helpers/log": 11,
        "./helpers/lookup": 12,
        "./helpers/with": 13
    }],
    7: [function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var r = e("../utils");
        n["default"] = function (e) {
            e.registerHelper("blockHelperMissing", function (t, n) {
                var i = n.inverse, s = n.fn;
                if (t === !0)return s(this);
                if (t === !1 || null == t)return i(this);
                if (r.isArray(t))return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : i(this);
                if (n.data && n.ids) {
                    var o = r.createFrame(n.data);
                    o.contextPath = r.appendContextPath(n.data.contextPath, n.name), n = {data: o}
                }
                return s(t, n)
            })
        }, t.exports = n["default"]
    }, {"../utils": 18}],
    8: [function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        n.__esModule = !0;
        var i = e("../utils"), s = e("../exception"), o = r(s);
        n["default"] = function (e) {
            e.registerHelper("each", function (e, t) {
                function n(t, n, s) {
                    f && (f.key = t, f.index = n, f.first = 0 === n, f.last = !!s, c && (f.contextPath = c + t)), a += r(e[t], {
                        data: f,
                        blockParams: i.blockParams([e[t], t], [c + t, null])
                    })
                }

                if (!t)throw new o["default"]("Must pass iterator to #each");
                var r = t.fn, s = t.inverse, u = 0, a = "", f = void 0, c = void 0;
                if (t.data && t.ids && (c = i.appendContextPath(t.data.contextPath, t.ids[0]) + "."), i.isFunction(e) && (e = e.call(this)), t.data && (f = i.createFrame(t.data)), e && "object" == typeof e)if (i.isArray(e))for (var h = e.length; u < h; u++)u in e && n(u, u, u === e.length - 1); else {
                    var p = void 0;
                    for (var d in e)e.hasOwnProperty(d) && (void 0 !== p && n(p, u - 1), p = d, u++);
                    void 0 !== p && n(p, u - 1, !0)
                }
                return 0 === u && (a = s(this)), a
            })
        }, t.exports = n["default"]
    }, {"../exception": 5, "../utils": 18}],
    9: [function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        n.__esModule = !0;
        var i = e("../exception"), s = r(i);
        n["default"] = function (e) {
            e.registerHelper("helperMissing", function () {
                if (1 !== arguments.length)throw new s["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            })
        }, t.exports = n["default"]
    }, {"../exception": 5}],
    10: [function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var r = e("../utils");
        n["default"] = function (e) {
            e.registerHelper("if", function (e, t) {
                return r.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this)
            }), e.registerHelper("unless", function (t, n) {
                return e.helpers["if"].call(this, t, {fn: n.inverse, inverse: n.fn, hash: n.hash})
            })
        }, t.exports = n["default"]
    }, {"../utils": 18}],
    11: [function (e, t, n) {
        "use strict";
        n.__esModule = !0, n["default"] = function (e) {
            e.registerHelper("log", function () {
                for (var t = [void 0], n = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++)t.push(arguments[r]);
                var i = 1;
                null != n.hash.level ? i = n.hash.level : n.data && null != n.data.level && (i = n.data.level), t[0] = i, e.log.apply(e, t)
            })
        }, t.exports = n["default"]
    }, {}],
    12: [function (e, t, n) {
        "use strict";
        n.__esModule = !0, n["default"] = function (e) {
            e.registerHelper("lookup", function (e, t) {
                return e && e[t]
            })
        }, t.exports = n["default"]
    }, {}],
    13: [function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var r = e("../utils");
        n["default"] = function (e) {
            e.registerHelper("with", function (e, t) {
                r.isFunction(e) && (e = e.call(this));
                var n = t.fn;
                if (r.isEmpty(e))return t.inverse(this);
                var i = t.data;
                return t.data && t.ids && (i = r.createFrame(t.data), i.contextPath = r.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
                    data: i,
                    blockParams: r.blockParams([e], [i && i.contextPath])
                })
            })
        }, t.exports = n["default"]
    }, {"../utils": 18}],
    14: [function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var r = e("./utils"), i = {
            methodMap: ["debug", "info", "warn", "error"],
            level: "info",
            lookupLevel: function (e) {
                if ("string" == typeof e) {
                    var t = r.indexOf(i.methodMap, e.toLowerCase());
                    e = t >= 0 ? t : parseInt(e, 10)
                }
                return e
            },
            log: function (e) {
                if (e = i.lookupLevel(e), "undefined" != typeof console && i.lookupLevel(i.level) <= e) {
                    var t = i.methodMap[e];
                    console[t] || (t = "log");
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)r[s - 1] = arguments[s];
                    console[t].apply(console, r)
                }
            }
        };
        n["default"] = i, t.exports = n["default"]
    }, {"./utils": 18}],
    15: [function (e, t, n) {
        (function (e) {
            "use strict";
            n.__esModule = !0, n["default"] = function (t) {
                var n = "undefined" != typeof e ? e : window, r = n.Handlebars;
                t.noConflict = function () {
                    return n.Handlebars === t && (n.Handlebars = r), t
                }
            }, t.exports = n["default"]
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    16: [function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e) {
            if (e && e.__esModule)return e;
            var t = {};
            if (null != e)for (var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function s(e) {
            var t = e && e[0] || 1, n = g.COMPILER_REVISION;
            if (t !== n) {
                if (t < n) {
                    var r = g.REVISION_CHANGES[n], i = g.REVISION_CHANGES[t];
                    throw new m["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
                }
                throw new m["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
            }
        }

        function o(e, t) {
            function n(n, r, i) {
                i.hash && (r = d.extend({}, r, i.hash), i.ids && (i.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, r, i);
                var s = t.VM.invokePartial.call(this, n, r, i);
                if (null == s && t.compile && (i.partials[i.name] = t.compile(n, e.compilerOptions, t), s = i.partials[i.name](r, i)), null != s) {
                    if (i.indent) {
                        for (var o = s.split("\n"), u = 0, a = o.length; u < a && (o[u] || u + 1 !== a); u++)o[u] = i.indent + o[u];
                        s = o.join("\n")
                    }
                    return s
                }
                throw new m["default"]("The partial " + i.name + " could not be compiled when running in runtime-only mode")
            }

            function r(t) {
                function n(t) {
                    return "" + e.main(i, t, i.helpers, i.partials, o, a, u)
                }

                var s = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], o = s.data;
                r._setup(s), !s.partial && e.useData && (o = c(t, o));
                var u = void 0, a = e.useBlockParams ? [] : void 0;
                return e.useDepths && (u = s.depths ? t != s.depths[0] ? [t].concat(s.depths) : s.depths : [t]), (n = h(e.main, n, i, s.depths || [], o, a))(t, s)
            }

            if (!t)throw new m["default"]("No environment passed to template");
            if (!e || !e.main)throw new m["default"]("Unknown template object: " + typeof e);
            e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
            var i = {
                strict: function (e, t) {
                    if (t in e)return e[t];
                    throw new m["default"]('"' + t + '" not defined in ' + e)
                }, lookup: function (e, t) {
                    for (var n = e.length, r = 0; r < n; r++)if (e[r] && null != e[r][t])return e[r][t]
                }, lambda: function (e, t) {
                    return "function" == typeof e ? e.call(t) : e
                }, escapeExpression: d.escapeExpression, invokePartial: n, fn: function (t) {
                    var n = e[t];
                    return n.decorator = e[t + "_d"], n
                }, programs: [], program: function (e, t, n, r, i) {
                    var s = this.programs[e], o = this.fn(e);
                    return t || i || r || n ? s = u(this, e, o, t, n, r, i) : s || (s = this.programs[e] = u(this, e, o)), s
                }, data: function (e, t) {
                    for (; e && t--;)e = e._parent;
                    return e
                }, merge: function (e, t) {
                    var n = e || t;
                    return e && t && e !== t && (n = d.extend({}, t, e)), n
                }, nullContext: Object.seal({}), noop: t.VM.noop, compilerInfo: e.compiler
            };
            return r.isTop = !0, r._setup = function (n) {
                n.partial ? (i.helpers = n.helpers, i.partials = n.partials, i.decorators = n.decorators) : (i.helpers = i.merge(n.helpers, t.helpers), e.usePartial && (i.partials = i.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (i.decorators = i.merge(n.decorators, t.decorators)))
            }, r._child = function (t, n, r, s) {
                if (e.useBlockParams && !r)throw new m["default"]("must pass block params");
                if (e.useDepths && !s)throw new m["default"]("must pass parent depths");
                return u(i, t, e[t], n, 0, r, s)
            }, r
        }

        function u(e, t, n, r, i, s, o) {
            function u(t) {
                var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], u = o;
                return !o || t == o[0] || t === e.nullContext && null === o[0] || (u = [t].concat(o)), n(e, t, e.helpers, e.partials, i.data || r, s && [i.blockParams].concat(s), u)
            }

            return u = h(n, u, e, o, r, s), u.program = t, u.depth = o ? o.length : 0, u.blockParams = i || 0, u
        }

        function a(e, t, n) {
            return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name], e
        }

        function f(e, t, n) {
            var r = n.data && n.data["partial-block"];
            n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
            var i = void 0;
            if (n.fn && n.fn !== l && !function () {
                    n.data = g.createFrame(n.data);
                    var e = n.fn;
                    i = n.data["partial-block"] = function (t) {
                        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return n.data = g.createFrame(n.data), n.data["partial-block"] = r, e(t, n)
                    }, e.partials && (n.partials = d.extend({}, n.partials, e.partials))
                }(), void 0 === e && i && (e = i), void 0 === e)throw new m["default"]("The partial " + n.name + " could not be found");
            if (e instanceof Function)return e(t, n)
        }

        function l() {
            return ""
        }

        function c(e, t) {
            return t && "root" in t || (t = t ? g.createFrame(t) : {}, t.root = e), t
        }

        function h(e, t, n, r, i, s) {
            if (e.decorator) {
                var o = {};
                t = e.decorator(t, o, n, r && r[0], i, s, r), d.extend(t, o)
            }
            return t
        }

        n.__esModule = !0, n.checkRevision = s, n.template = o, n.wrapProgram = u, n.resolvePartial = a, n.invokePartial = f, n.noop = l;
        var p = e("./utils"), d = i(p), v = e("./exception"), m = r(v), g = e("./base")
    }, {"./base": 2, "./exception": 5, "./utils": 18}],
    17: [function (e, t, n) {
        "use strict";
        function r(e) {
            this.string = e
        }

        n.__esModule = !0, r.prototype.toString = r.prototype.toHTML = function () {
            return "" + this.string
        }, n["default"] = r, t.exports = n["default"]
    }, {}],
    18: [function (e, t, n) {
        "use strict";
        function r(e) {
            return c[e]
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++)for (var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
            return e
        }

        function s(e, t) {
            for (var n = 0, r = e.length; n < r; n++)if (e[n] === t)return n;
            return -1
        }

        function o(e) {
            if ("string" != typeof e) {
                if (e && e.toHTML)return e.toHTML();
                if (null == e)return "";
                if (!e)return e + "";
                e = "" + e
            }
            return p.test(e) ? e.replace(h, r) : e
        }

        function u(e) {
            return !e && 0 !== e || !!m(e) && 0 === e.length
        }

        function a(e) {
            var t = i({}, e);
            return t._parent = e, t
        }

        function f(e, t) {
            return e.path = t, e
        }

        function l(e, t) {
            return (e ? e + "." : "") + t
        }

        n.__esModule = !0, n.extend = i, n.indexOf = s, n.escapeExpression = o, n.isEmpty = u, n.createFrame = a, n.blockParams = f, n.appendContextPath = l;
        var c = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }, h = /[&<>"'`=]/g, p = /[&<>"'`=]/, d = Object.prototype.toString;
        n.toString = d;
        var v = function (e) {
            return "function" == typeof e
        };
        v(/x/) && (n.isFunction = v = function (e) {
            return "function" == typeof e && "[object Function]" === d.call(e)
        }), n.isFunction = v;
        var m = Array.isArray || function (e) {
                return !!e && "object" == typeof e && "[object Array]" === d.call(e)
            };
        n.isArray = m
    }, {}],
    19: [function (e, t, n) {
        t.exports = e("./dist/cjs/handlebars.runtime")["default"]
    }, {"./dist/cjs/handlebars.runtime": 1}],
    20: [function (e, t, n) {
        t.exports = e("handlebars/runtime")["default"]
    }, {"handlebars/runtime": 19}],
    21: [function (e, t, n) {
        var r = e("business/public/const"), i = {LIVESTATUS: {LIVE: 2, NOLIVE: 3, ALLNOLIVE: 4}};
        t.exports = $.extend(!0, {}, r, i)
    }, {"business/public/const": 47}],
    22: [function (e, t, n) {
        (function (t) {
            var n = ("undefined" != typeof window ? window.jQuery : "undefined" != typeof t ? t.jQuery : null, "undefined" != typeof window ? window.Q : "undefined" != typeof t ? t.Q : null, e("./const"), e("business/public/modules/header"));
            n.setup();
            var r = e("business/public/services/login-pop");
            r.setup();
            var i = e("./modules/ad-pop");
            i.setup();
            var s = e("./modules/login-info");
            s.setup();
            var o = e("./modules/slider");
            o.setup();
            var u = e("./modules/couple");
            u.setup();
            var a = e("./modules/notice");
            a.setup();
            var f = e("./modules/browser-pop");
            f.setup();
            var l = e("business/public/services/tgStat");
            l.setup();
            var c = e("./modules/respond");
            c.setup();
            var h = e("./modules/logics");
            h.setup();
            var p = e("./modules/scroll-top");
            p.setup();
            var d = e("./modules/tiger-slot");
            d.setup();
            var v = e("./modules/ad-tear");
            v.setup();
            var m = e("./modules/lucky-2.0");
            m()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./const": 21,
        "./modules/ad-pop": 23,
        "./modules/ad-tear": 25,
        "./modules/browser-pop": 29,
        "./modules/couple": 31,
        "./modules/logics": 32,
        "./modules/login-info": 35,
        "./modules/lucky-2.0": 39,
        "./modules/notice": 40,
        "./modules/respond": 41,
        "./modules/scroll-top": 42,
        "./modules/slider": 43,
        "./modules/tiger-slot": 44,
        "business/public/modules/header": 48,
        "business/public/services/login-pop": 54,
        "business/public/services/tgStat": 57
    }],
    23: [function (e, t, n) {
        (function (n) {
            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, i = (e("../../const"), e("business/public/services/utils")), s = e("common/components/winbox"), o = e("./pop.hbs"), u = 9, a = null, f = (new Date).getDate(), l = App.adPop, c = App.redictJson, h = function () {
                r("body").on("click", "#adPopHref", function () {
                    App.qid ? r("#adPopClose").click() : (clearInterval(a), r("#adCountDown").hide())
                })
            }, p = function () {
                r("#countNum").text(u), u--, u < 0 && (clearInterval(a), r("#adPopClose").click())
            }, d = function () {
                h();
                var e = window.location.href, t = i.getUrlParam(e, "src"), n = !0;
                for (var u in c) {
                    var d = c[u], v = i.getUrlParam(d.target, "src");
                    if (v && t == v) {
                        n = !1;
                        break
                    }
                }
                n && l && f != r.cookie("mtnh") && "3" != l.isopen && ("2" != l.isopen || i.testValidDate(l.startTime, l.endTime)) && (r.cookie("mtnh", f, {expires: 1}), (new s(o(l))).showMessage(), a = setInterval(p, 1e3), monitor_qdas.log({cId: "bk:wan-tanchuang720-1-pop"}, "click"))
            };
            t.exports = {setup: d}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../const": 21,
        "./pop.hbs": 24,
        "business/public/services/utils": 59,
        "common/components/winbox": "common/components/winbox"
    }],
    24: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s, o = null != t ? t : e.nullContext || {}, u = n.helperMissing, a = "function", f = e.escapeExpression;
                return '<div class="browser-pop ad-pop" data-channel="' + f((s = null != (s = n.channel || (null != t ? t.channel : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "channel",
                        hash: {},
                        data: i
                    }) : s)) + '" data-src="' + f((s = null != (s = n.src || (null != t ? t.src : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "src",
                        hash: {},
                        data: i
                    }) : s)) + '">\n    <a href="javascript:void(0);" data-bk="wan-tanchuang720-1-guanbi" id="adPopClose" class="browser-close cancel"></a>\n    <p class="count-down" id="adCountDown">\u5173\u95ed\u5012\u8ba1\u65f6\uff1a<span id="countNum">10</span>\u79d2</p>\n    <a href="' + f((s = null != (s = n.url || (null != t ? t.url : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "url",
                        hash: {},
                        data: i
                    }) : s)) + '" id="adPopHref" target="_blank" data-bk="wan-tanchuang720-1-pic">\n        <img src="' + f((s = null != (s = n.img || (null != t ? t.img : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "img",
                        hash: {},
                        data: i
                    }) : s)) + '" width="740" height="420" alt="' + f((s = null != (s = n.title || (null != t ? t.title : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "title",
                        hash: {},
                        data: i
                    }) : s)) + '"/>\n    </a>\n</div>'
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    25: [function (e, t, n) {
        var r = e("business/public/services/utils"), i = (e("common/components/winbox"), e("./tear.hbs")), s = App.adTear, o = function () {
            $(".nav").append(i(s)), setTimeout(function () {
                $(".tear-close").fadeIn()
            }, 1e3), $(".tear-close").click(function () {
                $(".tear-ad").hide()
            }), $.cookie("ad_tear_" + App.qid, "1", {expires: 1}), monitor.log({
                cId: "tearAd-show",
                c: "\u6495\u9875\u5e7f\u544a\u5c55\u793a"
            })
        }, u = function () {
            if (!$.cookie("ad_tear_" + App.qid)) {
                if ("3" == s.isopen)return !1;
                if ("2" == s.isopen) {
                    var e = r.testValidDate(s.startTime, s.endTime);
                    if (!e)return
                }
                o()
            }
        };
        t.exports = {setup: u}
    }, {
        "./tear.hbs": 26,
        "business/public/services/utils": 59,
        "common/components/winbox": "common/components/winbox"
    }],
    26: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s = e.lambda, o = e.escapeExpression;
                return '<div class="tear-ad">\n    <div class="tear-main">\n        <a href="' + o(s(null != t ? t.url : t, t)) + '" target="_blank" data-bk="tearAd-img">\n            <img src="' + o(s(null != t ? t.img : t, t)) + '" width="265" height="265" alt="' + o(s(null != t ? t.title : t, t)) + '"/>\n            <span class="tear-side"></span>\n        </a>\n    </div>\n    <a href="javascript:void(0);" class="tear-close" data-bk="tearAd-close"></a>\n</div>'
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    27: [function (e, t, n) {
        (function (n) {
            function r() {
                var e = i.cookie("bigplayer-first-poped") || 0, t = i.cookie("bigplayer-second-poped");
                e ? !t && e < f && (u.$bigplayerTips().append(o({first: !1})), i.cookie("bigplayer-second-poped", !0, {expires: 9999})) : u.$bigplayerTips().append(o({first: !0})), l(u.$bigplayerTips())
            }

            var i = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, s = ("undefined" != typeof window ? window.Q : "undefined" != typeof n ? n.Q : null, e("../../const"), e("business/public/services/utils")), o = (e("common/components/qtool"), e("./pop.hbs")), u = {$bigplayerTips: s.jQueryDomFactory("#login-container")}, a = 86400, f = Math.round((new Date).getTime() / 1e3), l = function (e) {
                e.on("click", "a.bigplayer-get", function () {
                    i(this).closest(".bigplayer-tip").hide(), i.cookie("bigplayer-first-poped", f + a, {expires: 9999})
                }), e.on("click", "a.bigplayer-get, .bigplayer-tip-close, .bigplayer-task", function () {
                    i(this).closest(".bigplayer-tip").hide()
                })
            };
            t.exports = {setup: r}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../const": 21,
        "./pop.hbs": 28,
        "business/public/services/utils": 59,
        "common/components/qtool": "common/components/qtool"
    }],
    28: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            1: function (e, t, n, r, i) {
                return '<div class="bigplayer-tip" style="background-image:url(http://p7.yx-s.com/d/inn/dab28ade/bigplayer-first.png);">\n    <a class="bigplayer-icon bigplayer-get" target="_blank" href="http://dawanjia.wan.360.cn/privilege">\n    </a>\n</div>\n'
            }, 3: function (e, t, n, r, i) {
                return '<div class="bigplayer-tip bigplayer-tip-task" style="background-image:url(http://p8.yx-s.com/d/inn/45785c98/bigplayer-second.png)">\n    <a class="bigplayer-icon bigplayer-tip-close" data-bk="wan-index-Slayer-popclose" href="javascript:void(0);"></a>\n    <a class="bigplayer-icon bigplayer-task" data-bk="wan-index-Splayer-poptask" target="_blank" href="http://dawanjia.wan.360.cn/myplayer#growTask">\n    </a>\n</div>\n'
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s;
                return null != (s = n["if"].call(null != t ? t : e.nullContext || {}, null != t ? t.first : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, i, 0),
                    inverse: e.program(3, i, 0),
                    data: i
                })) ? s : ""
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    29: [function (e, t, n) {
        (function (n) {
            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, i = ("undefined" != typeof window ? window.Q : "undefined" != typeof n ? n.Q : null, e("../../const")), s = e("business/public/services/utils"), o = (e("hbsfy/runtime"), e("common/components/winbox")), u = e("common/services/api")(i.API_ID.READ), a = e("./pop.hbs"), f = App.redictJson, l = function () {
                r(".browser-li a").on("click", function () {
                    return r(".wan-login-btn").trigger("click"), !1
                })
            }, c = function () {
                u.get("browser/tg").then(function (e) {
                    (new o(a(e))).showMessage(), App.qid || l(), resolve(e)
                }, function (e) {
                    reject(e)
                })
            }, h = function () {
                var e = window.location.href, t = s.getUrlParam(e, "src");
                for (var n in f) {
                    var r = f[n], i = s.getUrlParam(r.target, "src");
                    if (i && t == i) {
                        c(), monitor_qdas.log({cId: t}, "click");
                        break
                    }
                }
            };
            t.exports = {setup: h}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../const": 21,
        "./pop.hbs": 30,
        "business/public/services/utils": 59,
        "common/components/winbox": "common/components/winbox",
        "common/services/api": "common/services/api",
        "hbsfy/runtime": 20
    }],
    30: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            1: function (e, t, n, r, i) {
                var s, o, u = null != t ? t : e.nullContext || {}, a = n.helperMissing, f = "function", l = e.escapeExpression;
                return '        <li class="browser-li" data-src="' + l((o = null != (o = n.src || (null != t ? t.src : t)) ? o : a, typeof o === f ? o.call(u, {
                        name: "src",
                        hash: {},
                        data: i
                    }) : o)) + '" data-channel="' + l((o = null != (o = n.channel || (null != t ? t.channel : t)) ? o : a, typeof o === f ? o.call(u, {
                        name: "channel",
                        hash: {},
                        data: i
                    }) : o)) + '">\n            <a href="' + l((o = null != (o = n.url || (null != t ? t.url : t)) ? o : a, typeof o === f ? o.call(u, {
                        name: "url",
                        hash: {},
                        data: i
                    }) : o)) + '" data-bk="newwan-zmtc-game' + l((o = null != (o = n.index || i && i.index) ? o : a, typeof o === f ? o.call(u, {
                        name: "index",
                        hash: {},
                        data: i
                    }) : o)) + '" target="_blank">\n' + (null != (s = n["if"].call(u, null != t ? t.played : t, {
                        name: "if",
                        hash: {},
                        fn: e.program(2, i, 0),
                        inverse: e.noop,
                        data: i
                    })) ? s : "") + '                <img src="' + l((o = null != (o = n.img || (null != t ? t.img : t)) ? o : a, typeof o === f ? o.call(u, {
                        name: "img",
                        hash: {},
                        data: i
                    }) : o)) + '" alt="' + l((o = null != (o = n.name || (null != t ? t.name : t)) ? o : a, typeof o === f ? o.call(u, {
                        name: "name",
                        hash: {},
                        data: i
                    }) : o)) + '" width="250" height="380" />\n' + (null != (s = n.unless.call(u, null != t ? t.played : t, {
                        name: "unless",
                        hash: {},
                        fn: e.program(4, i, 0),
                        inverse: e.noop,
                        data: i
                    })) ? s : "") + '                <div class="browser-btn">\u5f00\u59cb\u6e38\u620f<i class="bp-icon icon-browser-add"></i></div>\n            </a>\n        </li>\n'
            }, 2: function (e, t, n, r, i) {
                return '                    <i class="browser-played"></i>\n'
            }, 4: function (e, t, n, r, i) {
                var s;
                return '                    <p class="browser-des">' + e.escapeExpression((s = null != (s = n.des || (null != t ? t.des : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : e.nullContext || {}, {
                        name: "des",
                        hash: {},
                        data: i
                    }) : s)) + "</p>\n"
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s;
                return '<div class="browser-pop">\n    <a href="javascript:void(0)" data-bk="newwan-zmtc-close" class="browser-close cancel"></a>\n    <ul>\n' + (null != (s = n.each.call(null != t ? t : e.nullContext || {}, t, {
                        name: "each",
                        hash: {},
                        fn: e.program(1, i, 0),
                        inverse: e.noop,
                        data: i
                    })) ? s : "") + "    </ul>\n</div>"
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    31: [function (e, t, n) {
        (function (e) {
            function n(e) {
                if (!e || 2 != e.length)return !1;
                var t, n, r, i, o, u, a = 1368, f = 1280, l = s(".j-couplet").length;
                r = [e[0].pic_url, e[1].pic_url], i = [e[0].name, e[1].name], o = [e[0].pos_id, e[1].pos_id], u = [e[0].ad_id, e[1].ad_id], window.innerWidth ? t = window.innerWidth : document.documentElement && document.documentElement.clientWidth ? t = document.documentElement.clientWidth : document.body && document.body.clientWidth && (t = document.body.clientWidth), n = parseInt((t - a) / 2) - 7, t > f ? (s(".j-couplet").eq(0).css({
                    position: "absolute",
                    display: "block",
                    left: "0",
                    top: "937px",
                    height: "370px",
                    width: n + "px",
                    "z-index": 1e3,
                    background: "url(" + r[0] + ") no-repeat right 0px"
                }).attr({
                    title: i[0],
                    "data-bid": "wan-index-couplet-left",
                    "data-bk": "wan-index-couplet-left"
                }), s(".j-couplet").eq(1).css({
                    position: "absolute",
                    display: "block",
                    right: "0",
                    top: "937px",
                    height: "370px",
                    width: n + "px",
                    "z-index": 1e3,
                    background: "url(" + r[1] + ") no-repeat left 0px"
                }).attr({
                    title: i[1],
                    "data-bid": "wan-index-couplet-right",
                    "data-bk": "wan-index-couplet-right"
                })) : l && s(".j-couplet").hide()
            }

            function r() {
                var e = s(".ad-bottom"), t = s(".ad-bottom span.ad-bottom-close");
                t.length && t.on("click", function () {
                    return e.fadeOut(), !1
                })
            }

            function i() {
                var e = [];
                e.push(App.couplet_ads), e.push(App.couplet_ads2), n(e), s(window).resize(function () {
                    n(e)
                }), r()
            }

            var s = "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null;
            t.exports = {setup: i}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    32: [function (e, t, n) {
        (function (e) {
            function n(e, t, n) {
                e.on("mouseover", function () {
                    var e = i(this), r = e.find(t);
                    r.css("bottom", n)
                }).on("mouseout", function () {
                    var e = i(this), n = e.find(t), r = -n.height();
                    n.css("bottom", r)
                })
            }

            function r() {
                var e = i("#recommend-focus li");
                n(e, ".recommend-mask", "0px");
                var t = i("#new-game-focus li");
                n(t, ".recommend-mask", "0px");
                var r = i("#hot-games-focus li");
                n(r, ".hot-mask", "0px"), i(".hotrank-div .list li").on("mouseover", function () {
                    i(".hotrank-div .list li a").removeClass("list-rank-cur"), i(this).find("a").addClass("list-rank-cur")
                }), i(".servers-div .tab li").on("click", function () {
                    var e = i(this).index();
                    i(".servers-div .tab li").removeClass("cur"), i(this).addClass("cur"), i(".servers-div .list").css("display", "none"), i(".servers-div .newgame-list").css("display", "none"), e < 2 ? i(".servers-div .list").eq(e).css("display", "block") : i(".servers-div .newgame-list").css("display", "block")
                });
                var s = i("#new_zones").find("li");
                s.on("mouseover", function () {
                    var e = i(this), t = e.siblings();
                    e.hasClass("all_contFirst") || (e.addClass("all_contFirst"), t.removeClass("all_contFirst"))
                })
            }

            var i = "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null;
            t.exports = {setup: r}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    33: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s = e.lambda, o = e.escapeExpression;
                return '<div class="DWJgrow--tips">\r\n    <p>\u5927\u73a9\u5bb6\u7b49\u7ea7\uff1a<b>SV' + o(s(null != t ? t.userLevel : t, t)) + "</b>\uff08" + o(s(null != t ? t.growthValue : t, t)) + "/" + o(s(null != t ? t.total : t, t)) + "\uff09<br>\r\n    \u518d\u83b7\u5f97<span> " + o(s(null != t ? t.diff : t, t)) + ' </span>\u6210\u957f\u503c\u5373\u53ef\u5347\u7ea7  <a href="http://dawanjia.wan.360.cn/" target="_blank" data-bk="homepage\u2014chakantequan">\u67e5\u770b\u7279\u6743</a></p>\r\n</div>'
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    34: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            1: function (e, t, n, r, i) {
                var s, o = null != t ? t : e.nullContext || {}, u = n.helperMissing, a = "function", f = e.escapeExpression;
                return '        <li>\n            <a data-bk="wan-index-guess' + f((s = null != (s = n.index || i && i.index) ? s : u, typeof s === a ? s.call(o, {
                        name: "index",
                        hash: {},
                        data: i
                    }) : s)) + '" href="' + f((s = null != (s = n.url || (null != t ? t.url : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "url",
                        hash: {},
                        data: i
                    }) : s)) + '?>" target="_blank">\n                <img width="16" height="16" alt="" src="' + f((s = null != (s = n.img || (null != t ? t.img : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "img",
                        hash: {},
                        data: i
                    }) : s)) + '?>">\n                <span class="name">' + f((s = null != (s = n.name || (null != t ? t.name : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "name",
                        hash: {},
                        data: i
                    }) : s)) + '</span>\n                <a data-bk="wan-index-guess' + f((s = null != (s = n.index || i && i.index) ? s : u, typeof s === a ? s.call(o, {
                        name: "index",
                        hash: {},
                        data: i
                    }) : s)) + '-card" href="' + f((s = null != (s = n.gift || (null != t ? t.gift : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "gift",
                        hash: {},
                        data: i
                    }) : s)) + '" target="_blank" class="area">\u9886\u65b0\u624b\u5361</a>\n            </a>\n        </li>\n'
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s;
                return '<div class="login-like" data-src="newwan-cnxh" data-channel="521260053" style="display: none;">\n    <div class="login-tit">\n        <h4>\u731c\u4f60\u559c\u6b22</h4>\n        <a href="http://wan.360.cn/u" target="_blank" data-bk="wan-index-guess-more">MORE ></a>\n    </div>\n    <ul class="login-list">\n' + (null != (s = n.each.call(null != t ? t : e.nullContext || {}, t, {
                        name: "each",
                        hash: {},
                        fn: e.program(1, i, 0),
                        inverse: e.noop,
                        data: i
                    })) ? s : "") + "    </ul>\n</div>\n"
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    35: [function (e, t, n) {
        (function (n) {
            function r() {
                parseInt(App.guideData.ifguide) && u("a[href*='game_login.php']").on("click", p.signIn)
            }

            function i() {
                S.$dwjGrow().hover(function () {
                    S.$dwjGrowTips().show()
                }, function () {
                    S.$dwjGrowTips().hide()
                })
            }

            function s() {
                App.ifBigplayer && (S.$dwjGrow().css({visibility: "visible"}), h.getBigplayer(S.$bigplayer()).then(function (e) {
                    e.total = e.growthValue + e.diff, e.percent = e.growthValue / (e.diff + e.growthValue) * 100, S.$dwjGrowPercent().css({width: e.percent}), S.$dwjGrow().append(w(e)), E.setup()
                }))
            }

            function o() {
                h.getUserScore().then(function (e) {
                    e && S.$score().html(e)
                })
            }

            var u = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, a = "undefined" != typeof window ? window.Q : "undefined" != typeof n ? n.Q : null, f = e("../../const"), l = f.LOGIN_NO, c = e("business/public/services/utils"), h = e("business/public/services/user"), p = e("business/public/modules/popup"), d = e("common/services/api")(f.API_ID.READ), v = "get/guessulike?_t=" + +(new Date), m = e("./loginUI.hbs"), g = e("./guessU.hbs"), y = e("./played.hbs"), b = e("./userinfo.hbs"), w = e("./dwjGrowTips.hbs"), E = (e("../vplantips"), e("../bigplayer-tips")), S = {
                $loginContainer: c.jQueryDomFactory("#login-container"),
                $loginUser: c.jQueryDomFactory("div.login-user"),
                $score: c.jQueryDomFactory(".login-user-info span.org-color"),
                $vplan: c.jQueryDomFactory("a.icon_lv"),
                $bigplayer: c.jQueryDomFactory(".bigplayer-icon"),
                $dwjGrow: c.jQueryDomFactory(".DWJgrow"),
                $dwjGrowPercent: c.jQueryDomFactory(".DWJgrow--percent"),
                $dwjGrowTips: c.jQueryDomFactory(".DWJgrow--tips")
            }, x = function (e, t) {
                e.append(t)
            }, T = function (e, t) {
                u(t).insertAfter(e)
            };
            t.exports = {
                setup: function () {
                    return a.promise(function (e, t) {
                        h.getUserInfo().then(function (e) {
                            if (e && e.errno == l.LOGINED && (e.uname = e.nickname ? e.nickname : e.userName, App.loginfoAd && "1" == App.loginfoAd.show && (e.loginfoAd = App.loginfoAd), h.checkinStatus().then(function (t) {
                                    t && t.checkIn && (e.checkIn = t.checkIn), x(S.$loginContainer(), b(e)), s(), h.getUserPlayed().then(function (e) {
                                        e.total > 0 ? (e.newZones = App.newZones.slice(0, 2), T("div.login-user", y(e)), S.$loginContainer().find("div.login-played").show
                                        ()) : d.get(v).then(function (e) {
                                            T("div.login-user", g(e)), S.$loginContainer().find("div.login-like").show()
                                        })
                                    }), i(), o()
                                })), e && e.errno == l.UNLOGINED) {
                                var t = !1;
                                App.online && "dev" == App.online && (t = !0), x(S.$loginContainer(), m(t)), r()
                            }
                        })
                    })
                }, teardown: function () {
                    return a.promise(function (e, t) {
                        e()
                    })
                }, updateBigPlayerInfo: s, updateUserScore: o
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../const": 21,
        "../bigplayer-tips": 27,
        "../vplantips": 45,
        "./dwjGrowTips.hbs": 33,
        "./guessU.hbs": 34,
        "./loginUI.hbs": 36,
        "./played.hbs": 37,
        "./userinfo.hbs": 38,
        "business/public/modules/popup": 52,
        "business/public/services/user": 58,
        "business/public/services/utils": 59,
        "common/services/api": "common/services/api"
    }],
    36: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            1: function (e, t, n, r, i) {
                return '    <iframe src="/login.html?login_src=index" width="100%" height="300px" scrolling="no" frameborder="0"></iframe>\n'
            }, 3: function (e, t, n, r, i) {
                return '    <iframe src="http://wan.360.cn/login.html?login_src=index" width="100%" height="300px" scrolling="no" frameborder="0"></iframe>\n'
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s;
                return '<h3 class="login-h3">360\u8d26\u53f7\u767b\u5f55</h3>\n' + (null != (s = n["if"].call(null != t ? t : e.nullContext || {}, t, {
                        name: "if",
                        hash: {},
                        fn: e.program(1, i, 0),
                        inverse: e.program(3, i, 0),
                        data: i
                    })) ? s : "")
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    37: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            1: function (e, t, n, r, i) {
                var s, o = null != t ? t : e.nullContext || {}, u = n.helperMissing, a = "function", f = e.escapeExpression;
                return '        <li>\n          <a href="' + f((s = null != (s = n.zurl || (null != t ? t.zurl : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "zurl",
                        hash: {},
                        data: i
                    }) : s)) + '" target="_blank" data-bk="wan-index-Played' + f((s = null != (s = n.index || (null != t ? t.index : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "index",
                        hash: {},
                        data: i
                    }) : s)) + '-qufu">\n            <img width="16" height="16" alt="' + f((s = null != (s = n.gname || (null != t ? t.gname : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "gname",
                        hash: {},
                        data: i
                    }) : s)) + '" src="' + f((s = null != (s = n.icon || (null != t ? t.icon : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "icon",
                        hash: {},
                        data: i
                    }) : s)) + '">\n            <span class="name">' + f((s = null != (s = n.gname || (null != t ? t.gname : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "gname",
                        hash: {},
                        data: i
                    }) : s)) + '</span>\n            <span class="area">>' + f((s = null != (s = n.zname || (null != t ? t.zname : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "zname",
                        hash: {},
                        data: i
                    }) : s)) + "</span>\n          </a>\n        </li>\n"
            }, 3: function (e, t, n, r, i) {
                var s, o = null != t ? t : e.nullContext || {}, u = n.helperMissing, a = "function", f = e.escapeExpression;
                return '        <li data-src="newwan-xytjnew-' + f((s = null != (s = n.gkey || (null != t ? t.gkey : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "gkey",
                        hash: {},
                        data: i
                    }) : s)) + '">\n          <a href="' + f((s = null != (s = n.loginurl || (null != t ? t.loginurl : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "loginurl",
                        hash: {},
                        data: i
                    }) : s)) + '" target="_blank">\n            <img width="16" height="16" alt="' + f((s = null != (s = n.vname || (null != t ? t.vname : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "vname",
                        hash: {},
                        data: i
                    }) : s)) + '" src="' + f((s = null != (s = n.logo || (null != t ? t.logo : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "logo",
                        hash: {},
                        data: i
                    }) : s)) + '">\n            <span class="name">' + f((s = null != (s = n.vname || (null != t ? t.vname : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "vname",
                        hash: {},
                        data: i
                    }) : s)) + '</span>\n            <span class="zone-enter"></span>\n          </a>\n        </li>\n'
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s, o = null != t ? t : e.nullContext || {};
                return '<!-- played start-->\n<div class="login-played" style="display: none;">\n    <div class="login-tit">\n        <h4>\u6211\u73a9\u8fc7\u7684</h4>\n        <a href="http://wan.360.cn/u" target="_blank" data-bk="wan-index-Played-more">MORE ></a>\n    </div>\n    <ul class="login-list">\n' + (null != (s = n.each.call(o, null != t ? t.items : t, {
                        name: "each",
                        hash: {},
                        fn: e.program(1, i, 0),
                        inverse: e.noop,
                        data: i
                    })) ? s : "") + (null != (s = n.each.call(o, null != t ? t.newZones : t, {
                        name: "each",
                        hash: {},
                        fn: e.program(3, i, 0),
                        inverse: e.noop,
                        data: i
                    })) ? s : "") + "    </ul>\n</div>\n<!-- played end-->\n"
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    38: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            1: function (e, t, n, r, i) {
                var s, o = e.lambda, u = e.escapeExpression;
                return '            <a class="loginfo-ad" href="' + u(o(null != (s = null != t ? t.loginfoAd : t) ? s.url : s, t)) + '" data-bk="wan-index-ADposition" target="_blank"><img src="' + u(o(null != (s = null != t ? t.loginfoAd : t) ? s.img : s, t)) + '" width="56" height="19"></a>\n'
            }, 3: function (e, t, n, r, i) {
                return '        <a class="lottery-btn lottery-btn-ok" data-bk="homepage\u2014qdwc">\n            <span class="i-lottery"></span>\n            <span class="text">\u4eca\u65e5\u5df2\u6253\u5361</span>\n        </a>\n'
            }, 5: function (e, t, n, r, i) {
                return '        <a class="lottery-btn" data-bk="homepage\u2014qiandao">\n            <span class="i-lottery"></span>\n            <span class="text">\u6253\u5361\u8d62\u62bd\u5956</span>\n        </a>\n'
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s, o, u = null != t ? t : e.nullContext || {}, a = n.helperMissing, f = "function", l = e.escapeExpression;
                return '<div class="login-user">\n    <!-- \u7528\u6237\u4fe1\u606f -->\n    <div class="login-user-info">\n        <a href="http://wan.360.cn/u/" target="_blank" data-bk="wan-index-userinfo" class="user_info_avatar">\n            <img class="img" src="' + l((o = null != (o = n.img_url || (null != t ? t.img_url : t)) ? o : a, typeof o === f ? o.call(u, {
                        name: "img_url",
                        hash: {},
                        data: i
                    }) : o)) + '" alt="\u6211\u7684\u5934\u50cf">\n        </a>\n        <div class="name-out">\n            <div class="name">\n                <a href="http://wan.360.cn/u/" target="_blank" data-bk="wan-index-userinfo" class="name-text" title="' + l((o = null != (o = n.uname || (null != t ? t.uname : t)) ? o : a, typeof o === f ? o.call(u, {
                        name: "uname",
                        hash: {},
                        data: i
                    }) : o)) + '">' + l((o = null != (o = n.uname || (null != t ? t.uname : t)) ? o : a, typeof o === f ? o.call(u, {
                        name: "uname",
                        hash: {},
                        data: i
                    }) : o)) + '</a>\n            </div>\n            <a class="out wan-logout-btn" data-bk="wan-index-userexit"><span class="i-logOut" style="display:none"></span>\u9000\u51fa</a>\n        </div>\n        <div class="core">\n            <span class="i-jifen"></span>\n            <a class="org-color" style="margin: 0px;" href="http://jifen.360.cn/" target="_blank"><span class="org-color">0</span></a>|<a class="org-color" href="http://jifen.360.cn/index/exchange.html" target="_blank" data-bk="wan-index-userjifen">\u8d5a\u79ef\u5206</a>\n            \n' + (null != (s = n["if"].call(u, null != t ? t.loginfoAd : t, {
                        name: "if",
                        hash: {},
                        fn: e.program(1, i, 0),
                        inverse: e.noop,
                        data: i
                    })) ? s : "") + '        </div>\n    </div>\n    <!-- \u5927\u73a9\u5bb6\u6210\u957f\u503c start -->\n    <div class="DWJgrow">\n        <a data-bk="wan-index-uservplay" href="http://dawanjia.wan.360.cn/" target="_blank" class="bigplayer-icon"></a>\n        <div class="DWJgrow--container">\n            <span class="DWJgrow--percent"></span>\n        </div>\n    </div>\n    <!-- \u5927\u73a9\u5bb6\u6210\u957f\u503c end -->\n    <!-- \u6bcf\u65e5\u62bd\u5956 -->\n    <div id="usercheck" class="login-user-sign clearfix">\n        <!-- \u7b7e\u5230\u6309\u94ae -->\n' + (null != (s = n["if"].call(u, null != t ? t.checkIn : t, {
                        name: "if",
                        hash: {},
                        fn: e.program(3, i, 0),
                        inverse: e.program(5, i, 0),
                        data: i
                    })) ? s : "") + "    </div>\n</div>\n\n\n"
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    39: [function (e, t, n) {
        (function (n) {
            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, i = ("undefined" != typeof window ? window.Q : "undefined" != typeof n ? n.Q : null, e("business/public/services/utils")), s = e("../login-info"), o = {
                $lotteryBtn: i.jQueryDomFactory(".login .login-user-sign .lottery-btn"),
                $lotteryBtnText: i.jQueryDomFactory(".login .login-user-sign .lottery-btn .text")
            };
            t.exports = function () {
                r("body").on("click", "#usercheck", function () {
                    checkinPopSDK.pop(App.qid, function () {
                        o.$lotteryBtn().addClass("lottery-btn-ok"), o.$lotteryBtnText().html("\u4eca\u65e5\u5df2\u6253\u5361"), s.updateUserScore(), s.updateBigPlayerInfo()
                    }, function () {
                    }, "", {game1: "homepage\u2014game1", game2: "homepage\u2014game2"})
                })
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"../login-info": 35, "business/public/services/utils": 59}],
    40: [function (e, t, n) {
        (function (e) {
            function n() {
                f++, f < a ? i.animate({top: o - f * u + "px"}, 100) : (i.animate({top: o + "px"}, 100), f = 0)
            }

            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null, i = r(".news ul"), s = i.find("li"), o = parseInt(i.css("top")), u = parseInt(s.eq(0).css("height")), a = s.length, f = 0;
            t.exports = {
                setup: function () {
                    var e = setInterval(n, 3e3);
                    s.on("mouseover", function () {
                        clearInterval(e)
                    }).on("mouseout", function () {
                        e = setInterval(n, 3e3)
                    })
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    41: [function (e, t, n) {
        (function (n) {
            function r() {
                var e = i(window).width();
                i("#top-slider li.c-focus-cell").css("width", e + "px")
            }

            var i = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null;
            e("../../const"), t.exports = {
                setup: function () {
                    r(), i(window).on("resize", function () {
                        r()
                    })
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"../../const": 21}],
    42: [function (e, t, n) {
        (function (e) {
            function n(e, t, n) {
                var i = n || 300;
                r(e).click(function (e) {
                    r("html, body").animate({scrollTop: t}, i), e.preventDefault()
                })
            }

            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null;
            t.exports = {
                setup: function () {
                    r(window).on("scroll", function () {
                        r(window).scrollTop() > 1e3 ? r(".fixed-tools").css("display", "block") : r(".fixed-tools").css("display", "none")
                    }), n(".toTop", 0)
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    43: [function (e, t, n) {
        (function (n) {
            function r() {
                var e = s(document).width();
                return e < o.SCREEN.SCREEN_DIVIDING_LINE ? o.SCREEN.THINSCREEN : o.SCREEN.WIDESCREEN
            }

            function i() {
                var e = r();
                a = 4, f = l = h = c = e == o.SCREEN.WIDESCREEN ? 5 : 4, s(window).on("resize", function () {
                    var e = r();
                    e == o.SCREEN.WIDESCREEN ? t.config.step = n.config.step = i.config.step = v.config.step = 5 : t.config.step = n.config.step = i.config.step = v.config.step = 4
                });
                var t = (new u({
                    container: "#top-slider",
                    picBox: ".top-slider-imgs",
                    picListView: a,
                    autoRun: !0,
                    nav: !0,
                    navContainer: ".c-focus-num"
                }), new u({
                    container: "#recommend-focus",
                    picBox: ".c-focus-area",
                    autoRun: !1,
                    step: f
                })), n = new u({
                    container: "#new-game-focus",
                    picBox: ".c-focus-area",
                    autoRun: !1,
                    step: l
                }), i = new u({
                    container: "#activities-focus",
                    picBox: ".c-focus-area",
                    autoRun: !1,
                    step: c
                }), v = new u({container: "#vplan-focus", picBox: ".c-focus-area", autoRun: !1, step: h})
            }

            var s = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, o = e("../../const"), u = e("common/components/slider"), a = 0, f = 0, l = 0, c = 0, h = 0;
            t.exports = {setup: i}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"../../const": 21, "common/components/slider": "common/components/slider"}],
    44: [function (e, t, n) {
        var r = e("business/public/services/utils"), i = e("common/components/winbox"), s = App.tigerConfig, o = App.tigerStatus;
        s ? window.tigerConfig = s : window.tigerConfig = {
            slogan: "http://p7.qhimg.com/t01125c54403ed140a9.png",
            ad1: {
                img: "http://p0.qhimg.com/t0190a2d7f1248cd6e3.png",
                url: "http://dev.tg.wan.360.cn/?channel=517133010&placeid=",
                gkey: "cqry"
            },
            ad2: {
                img: "http://p1.qhimg.com/t01bd82ab6df3ffd4f1.png",
                url: "http://dev.tg.wan.360.cn/?channel=517133012&placeid=",
                gkey: "gcd"
            }
        };
        var u, a = '<div class="tigerlucky">  <div class="tigerlucky--slogan" style="background:url(' + window.tigerConfig.slogan + ') 50% 50% no-repeat;"></div>  <div class="tigerlucky--base"></div>  <div class="tigerlucky--bundle tigerlucky--bundle-off"></div>  <div class="tigerlucky--gifts"></div>  <div class="tigerlucky--giftsmask"></div>  <div class="tigerlucky--games">    <ul>      <li>        <a data-bk="Lhj\u2014tj1" data-text="\u8001\u864e\u673a\u2014\u63a8\u83501" data-gkey="' + window.tigerConfig.ad1.gkey + '" target="_blank" href="' + window.tigerConfig.ad1.url + '">          <img src="' + window.tigerConfig.ad1.img + '" alt="">          <span></span>        </a>      </li>      <li>        <a data-bk="Lhj\u2014tj2" data-text="\u8001\u864e\u673a\u2014\u63a8\u83502" data-gkey="' + window.tigerConfig.ad2.gkey + '" target="_blank" href="' + window.tigerConfig.ad2.url + '">          <img src="' + window.tigerConfig.ad2.img + '" alt="">          <span></span>        </a>      </li>    </ul>  </div>  <a class="tigerlucky--close cancel">\u5173\u95ed</a></div>', f = function () {
            u = (new i(a, {
                width: "489px",
                height: "474px"
            })).showMessage(), $(".tigerlucky--bundle").on("mousedown", function () {
                return $(this).addClass("tigerlucky--bundle-on"), !1
            }).on("mouseup", function () {
                return $(this).removeClass("tigerlucky--bundle-on"), !1
            });
            try {
                var e = new luckySDK({
                    appId: 3659,
                    appGkey: "wan",
                    appType: "tiger",
                    container: ".tigerlucky--gifts",
                    startBtn: ".tigerlucky--bundle",
                    effect: {time: 50},
                    tokenOkCb: function () {
                        e.addLuckyNum(["login"]).then(function (e) {
                        }, function (e) {
                        })
                    },
                    beforeRenderCb: function () {
                    },
                    afterRenderCb: function () {
                        $(".tigerlucky--bundle").on("click", function () {
                            return App.qid ? void monitor.log({
                                cId: "Lhj\u2014button",
                                c: "\u8001\u864e\u673a-\u62bd\u5956"
                            }) : ($(".wan-login-btn").trigger("click"), monitor.log({
                                cId: "Lhj\u2014denglu",
                                c: "\u8001\u864e\u673a\u2014\u767b\u5f55"
                            }), !1)
                        }), monitor.log({cId: "Lhj-show", c: "\u8001\u864e\u673a-\u5c55\u793a"})
                    },
                    luckyDrawSuccCb: function (t) {
                        e.defaultPop(t, {
                            width: 378,
                            height: 260,
                            className: "tigger-slot-pop"
                        }), $(".j-box-main .btnbox a").eq(1).attr("data-bk", "Lhj\u2014ljsy")
                    },
                    afterCopyCb: function () {
                        monitor.log({cId: "Lhj\u2014copy", c: "\u8001\u864e\u673a\u2014\u590d\u5236"})
                    },
                    luckyDrawErrCb: function (t) {
                        e.defaultPop(t, {width: 378, height: 260, className: "tigger-slot-pop"})
                    }
                })
            } catch (t) {
            }
            $.cookie("slot_interval_" + App.qid, "1", {expires: 1})
        }, l = function () {
            if (!$.cookie("slot_interval_" + App.qid)) {
                if ("3" == o.isopen)return !1;
                if ("2" == o.isopen) {
                    var e = r.testValidDate(o.startTime, o.endTime);
                    if (!e)return
                }
                f()
            }
        }, c = function () {
            u.close()
        };
        t.exports = {setup: l, closeTiger: c}
    }, {"business/public/services/utils": 59, "common/components/winbox": "common/components/winbox"}],
    45: [function (e, t, n) {
        (function (n) {
            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, i = "undefined" != typeof window ? window.Q : "undefined" != typeof n ? n.Q : null, s = e("../../const"), o = "get/vplanmessage?_t=" + +(new Date), u = e("common/services/api")(s.API_ID.READ), a = e("business/public/services/utils"), f = e("common/components/qtool"), l = e("./vplantips.hbs"), c = {$vplantips: a.jQueryDomFactory("#login-container")}, h = "", p = 864e5, d = function (e, t) {
                e.on("click", "a.j-vplan-goto, .vplan-tip-close", function () {
                    r(this).closest(".vplan-tip").hide(), r.cookie("vplan-tip-forever", t, {expires: 9999})
                })
            };
            t.exports = {
                setup: function (e) {
                    return i.promise(function (e, t) {
                        u.get(o).then(function (t) {
                            t = t && t[0];
                            var n = r.cookie("vplan-tip-forever"), i = parseInt(+(new Date)), s = r.cookie("vplan-tip-showtime") || 0;
                            h = t.img, null != n && n != h && (s = 0, r.cookie("vplan-tip-showtime", 0, {expires: 9999}), r.cookie("vplan-tip-forever", null, {expires: 9999}));
                            var o = t.link, u = f.getQueryString("src") || "360wan-vplanpop";
                            o = o.indexOf("?") != -1 ? o + "&src=" + u : o + "?src=" + u, n == h || s > i || (c.$vplantips().append(l(t)), d(c.$vplantips(), h), 0 != s && s < i ? r.cookie("vplan-tip-showtime", Number.MAX_VALUE, {expires: 9999}) : r.cookie("vplan-tip-showtime", i + p, {expires: 9999}), e())
                        }, function (e) {
                            console.log("vplantip failed"), t(e)
                        })
                    })
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../const": 21,
        "./vplantips.hbs": 46,
        "business/public/services/utils": 59,
        "common/components/qtool": "common/components/qtool",
        "common/services/api": "common/services/api"
    }],
    46: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s, o = null != t ? t : e.nullContext || {}, u = n.helperMissing, a = "function", f = e.escapeExpression;
                return '<div class="vplan-tip pngfix" style="background-image:url(' + f((s = null != (s = n.img || (null != t ? t.img : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "img",
                        hash: {},
                        data: i
                    }) : s)) + ')">\n    <a class="j-vplan-goto" target="_blank" href="' + f((s = null != (s = n.link || (null != t ? t.link : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "link",
                        hash: {},
                        data: i
                    }) : s)) + '" data-bk="wan-index-vplan-pop">\n        <p class="vplan-tip-content">' + f((s = null != (s = n.content || (null != t ? t.content : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "content",
                        hash: {},
                        data: i
                    }) : s)) + '</p>\n    </a>\n    <a class="vplan-tip-close" data-bk="wan-index-vplan-pop-close"></a>\n</div>\n'
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    47: [function (e, t, n) {
        t.exports = {
            SCREEN: {WIDESCREEN: "wide", THINSCREEN: "thin", SCREEN_DIVIDING_LINE: 1377},
            API_ID: {WTRTE: "write", READ: "read"},
            LOGIN_NO: {UNLOGINED: "no user has logined", LOGINED: "user hase logined"},
            VPLAN: {EVIP_CLS: "elevel", VIP_CLS: "level", YVIP_CLS: "ylevel"},
            BIGPLAYER: {LEVEL: "bigplayer-lv"},
            ERROR: {CHECKED: 1}
        }
    }, {}],
    48: [function (e, t, n) {
        (function (n) {
            function r() {
                var e = i(".nav li");
                e.each(function (e, t) {
                    i(t).hasClass("active") && (u = e)
                }), e.on("mouseover", function () {
                    var t = i(this);
                    t.addClass("active").siblings().removeClass("active"), e.eq(u).addClass("active")
                }).on("mouseout", function () {
                    i(this), e.eq(u).addClass("active").siblings().removeClass("active")
                });
                var t = i(".top_tool .savehome");
                t.on("click", function () {
                    s.setHomePage()
                })
            }

            var i = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, s = e("common/services/sethome"), o = e("../../modules/nav"), u = 0;
            t.exports = {
                setup: function () {
                    r(), o.setup()
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"../../modules/nav": 49, "common/services/sethome": "common/services/sethome"}],
    49: [function (e, t, n) {
        (function (n) {
            function r() {
                function e(e) {
                    var n, r, s = /[a-zA-Z]/, o = "searchname";
                    n = t.val(), r = n[0], s.test(r) && (o = "firstchar", n = r);
                    var u = "_target", a = i, f = decodeURI(window.location.href);
                    /wan.360.cn\/game/.test(f) && (u = "_self"), n ? a = i + "?" + o + "=" + n + "#search-control" : NavData.searchStatus.openSingle && (a = NavData.searchStatus.url, monitor.log({cId: "bk:So-button"})), f == a ? window.location.reload() : window.open(a, u), e.stopPropagation()
                }

                var t = c.$suggestInput(), n = c.$suggestBtn(), r = 13, i = "http://wan.360.cn/game";
                window.location.href, t.on("keydown", function (t) {
                    t.keyCode == r && e(t)
                }), n.click(e)
            }

            function i() {
                0 == c.$suggestInput().val().length ? (monitor.log({cId: "bk:So-tuijian"}), o(".search_custom").show()) : o(".search_custom").hide()
            }

            function s() {
                var e = o("#search-input"), t = e.attr("placeholder");
                o("#search-input").after('<span id="search-placeholder">' + t + "</span>"), e.focus(function () {
                    o("#search-placeholder").hide()
                }).blur(function () {
                    o(this).val() || o("#search-placeholder").show()
                }), o("#search-placeholder").on("click", function () {
                    o(this).hide(), e.focus()
                })
            }

            var o = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, u = ("undefined" != typeof window ? window.Q : "undefined" != typeof n ? n.Q : null, e("../../const"), e("../../services/utils")), a = e("../../services/suggest"), f = e("./suggest.hbs"), l = "http://wan.360.cn/api/listgames/blur?search_value=%QUERY", c = {
                $suggestInput: u.jQueryDomFactory("#search-input"),
                $suggestBtn: u.jQueryDomFactory("#search-trigger")
            };
            t.exports = {
                setup: function () {
                    NavData.searchStatus.openList && (c.$suggestInput().on("input propertychange", function () {
                        c.$suggestInput().is(":focus") && i()
                    }), o(".search_custom").on("click", "a", function (e) {
                        o(this), o(".search_custom").hide()
                    }), o("body").on("click", function (e) {
                        var t = o(".search_custom_ul");
                        t.is(e.target) || 0 !== t.has(e.target).length || c.$suggestInput().is(e.target) || o(".search_custom").hide()
                    })), a.setup({
                        suggestInput: c.$suggestInput(),
                        suggestBtn: c.$suggestBtn(),
                        url: l,
                        crossdomain: !0,
                        tplCallback: function (e) {
                            return e.siteurl = "http://wan.360.cn/game/" + e.gkey, f(e)
                        },
                        selectedCallback: function (e) {
                            window.open(e.siteurl, "_target")
                        },
                        cursorchangedCallback: function (e) {
                        },
                        openedCallback: function () {
                            o(".nav_search .tt-suggestions").addClass("searchList"), o(".nav_search .tt-dropdown-menu").addClass("searchLayer").css({
                                right: "-30px",
                                left: "auto"
                            }), NavData.searchStatus.openList && i()
                        }
                    }), r(), window.GamelistSDK && new GamelistSDK(".menu-container"), window.AntiLostSDK && new AntiLostSDK, document.all && !window.atob && s()
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"../../const": 47, "../../services/suggest": 56, "../../services/utils": 59, "./suggest.hbs": 50}],
    50: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s, o = null != t ? t : e.nullContext || {}, u = n.helperMissing, a = "function", f = e.escapeExpression;
                return '<div data-channel="521260051" data-src="newwan-ssk">\n    <a href="' + f((s = null != (s = n.siteurl || (null != t ? t.siteurl : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "siteurl",
                        hash: {},
                        data: i
                    }) : s)) + "?src=360wan-so-" + f((s = null != (s = n.gkey || (null != t ? t.gkey : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "gkey",
                        hash: {},
                        data: i
                    }) : s)) + '" class="img" target="_blank"><img width="77" height="56" src="' + f((s = null != (s = n.img_v4_new || (null != t ? t.img_v4_new : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "img_v4_new",
                        hash: {},
                        data: i
                    }) : s)) + '"></a>\n    <div class="gameInfro">\n        <p class="infroName"><a href="' + f((s = null != (s = n.siteurl || (null != t ? t.siteurl : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "siteurl",
                        hash: {},
                        data: i
                    }) : s)) + "?src=360wan-so-" + f((s = null != (s = n.gkey || (null != t ? t.gkey : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "gkey",
                        hash: {},
                        data: i
                    }) : s)) + '" target="_blank">' + f((s = null != (s = n.name || (null != t ? t.name : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "name",
                        hash: {},
                        data: i
                    }) : s)) + '</a></p>\n        <div class="sebotTxt">\n            <span class="infroRole">' + f((s = null != (s = n.theme_desc || (null != t ? t.theme_desc : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "theme_desc",
                        hash: {},
                        data: i
                    }) : s)) + '</span>\n            <a class="webLink" href="' + f((s = null != (s = n.siteurl || (null != t ? t.siteurl : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "siteurl",
                        hash: {},
                        data: i
                    }) : s)) + "?src=360wan-so-" + f((s = null != (s = n.gkey || (null != t ? t.gkey : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "gkey",
                        hash: {},
                        data: i
                    }) : s)) + '" target="_blank">\u5b98\u7f51</a>\n            <a class="gameLink" href="//wan.360.cn/enternewzone?gkey=' + f((s = null != (s = n.gkey || (null != t ? t.gkey : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "gkey",
                        hash: {},
                        data: i
                    }) : s)) + "&src=360wan-so-" + f((s = null != (s = n.gkey || (null != t ? t.gkey : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "gkey",
                        hash: {},
                        data: i
                    }) : s)) + '" target="_blank">\u8fdb\u5165\u6e38\u620f</a>\n        </div>\n    </div>\n</div>\n'
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    51: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s, o = null != t ? t : e.nullContext || {}, u = n.helperMissing, a = "function", f = e.escapeExpression;
                return '<div class="wan_360layer">\n    <iframe scrolling="no" frameborder="0" style="z-index:-1;position: absolute;width:458px;height:437px;left:8px;top:10px;"></iframe>\n    <div class="wrap_top">\n        <div class="wrap_top_r"></div>\n    </div>\n    <div class="wrap_conn">\n        <div class="wrap_conn_bor">\n            <a title="\u5173\u95ed" class="wan_360layer_close cancel" href="javascript:void(0);"><em></em></a>\n            <div class="wrap_tt">\n                <span class="tab_login ' + f((s = null != (s = n.login || (null != t ? t.login : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "login",
                        hash: {},
                        data: i
                    }) : s)) + '"><em>\u767b  \u5f55</em></span>\n                <span class="tab_reg ' + f((s = null != (s = n.reg || (null != t ? t.reg : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "reg",
                        hash: {},
                        data: i
                    }) : s)) + '"><em>\u514d\u8d39\u6ce8\u518c</em></span>\n                <div class="custom_ad" style="background-image:url(' + f((s = null != (s = n.adImg || (null != t ? t.adImg : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "adImg",
                        hash: {},
                        data: i
                    }) : s)) + ')"></div>\n            </div>\n            <div class="wrap_conn_bg">\n                <iframe style="' + f((s = null != (s = n.loginCont || (null != t ? t.loginCont : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "loginCont",
                        hash: {},
                        data: i
                    }) : s)) + '" class="iframe_login" width="100%" scrolling="no" frameborder="0" name="iframeSignin" id="iframeSignin" height="410"  src="/signin_custom.html?params=' + f((s = null != (s = n.params || (null != t ? t.params : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "params",
                        hash: {},
                        data: i
                    }) : s)) + '"></iframe>\n                <iframe style="' + f((s = null != (s = n.regCont || (null != t ? t.regCont : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "regCont",
                        hash: {},
                        data: i
                    }) : s)) + '" class="iframe_reg" width="100%" scrolling="no" frameborder="0" name="iframeSignup" id="iframeSignup" height="470"  src="/signup_custom.html?params=' + f((s = null != (s = n.params || (null != t ? t.params : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "params",
                        hash: {},
                        data: i
                    }) : s)) + '"></iframe>\n            </div>\n        </div>\n    </div>\n    <div class="wrap_bot"><div class="wrap_bot_r"></div></div>\n</div>\n'
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    52: [function (e, t, n) {
        (function (n) {
            function r(e) {
                var t, n;
                d.location = encodeURIComponent(location.href), d.refer = location.host, v.method = e ? e : "login", "login" == v.method ? (t = "login", n = "reg") : (t = "reg", n = "login"), v[t] = "cur", v[t + "Cont"] = "", v[n] = "", v[n + "Cont"] = "display:none;", v.params = encodeURIComponent(JSON.stringify(d)), App && App.guideData && (v.adSignin = App.guideData.img || "", v.adSignup = App.guideData.imgsignup || "", v.adImg = "login" == v.method ? v.adSignin : v.adSignup), "undefined" != typeof h && i()
            }

            function i() {
                (new l(p(v), {width: "474px"})).showMessage();
                var e = f(".wan_360layer .wrap_tt span"), t = f(".wan_360layer .iframe_reg"), n = f(".wan_360layer .iframe_login"), r = f(".wan_360layer .custom_ad");
                f(".wan_360layer .tab_login").on("click", function () {
                    e.removeClass("cur"), f(this).addClass("cur"), t.hide(), n.show(), r.css("background-image", "url(" + v.adSignin + ")")
                }), f(".wan_360layer .tab_reg").on("click", function () {
                    e.removeClass("cur"), f(this).addClass("cur"), n.hide(), t.show(), r.css("background-image", "url(" + v.adSignup + ")")
                })
            }

            function s(e) {
                var t = e.attr("href") || "";
                t ? d.link = encodeURIComponent(t) : ""
            }

            function o(e) {
                var t = f(this);
                m && s(t), r("login"), e.preventDefault()
            }

            function u() {
                return r("reg"), !1
            }

            function a() {
                return c.signOut().then(function () {
                    window.location.reload()
                }), !1
            }

            var f = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, l = ("undefined" != typeof window ? window.Q : "undefined" != typeof n ? n.Q : null, e("common/components/winbox")), c = e("../../services/quc"), h = e("common/components/qtool"), p = (e("./popup.hbs"), e("./custom.hbs")), d = {}, v = {}, m = !1;
            App.guideData && (m = parseInt(App.guideData.ifguide)), t.exports = {signIn: o, signUp: u, signOut: a}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../services/quc": 55,
        "./custom.hbs": 51,
        "./popup.hbs": 53,
        "common/components/qtool": "common/components/qtool",
        "common/components/winbox": "common/components/winbox"
    }],
    53: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                var s, o = null != t ? t : e.nullContext || {}, u = n.helperMissing, a = "function", f = e.escapeExpression;
                return '<div class="wan_360layer">\n    <iframe scrolling="no" frameborder="0" style="z-index:-1;position: absolute;width:594px;height:437px;left:6px;top:6px;"></iframe>\n    <div class="wrap_top">\n        <div class="wrap_top_r"></div>\n    </div>\n    <div class="wrap_conn">\n        <div class="wrap_conn_bor">\n            <a title="\u5173\u95ed" class="wan_360layer_close cancel" href="javascript:void(0);"><em></em></a>\n            <div class="wrap_tt">\n                <span class="tab_login ' + f((s = null != (s = n.login || (null != t ? t.login : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "login",
                        hash: {},
                        data: i
                    }) : s)) + '"><em>\u767b  \u5f55</em></span>\n                <span class="tab_reg ' + f((s = null != (s = n.reg || (null != t ? t.reg : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "reg",
                        hash: {},
                        data: i
                    }) : s)) + '"><em>\u514d\u8d39\u6ce8\u518c</em></span>\n            </div>\n            <div class="wrap_conn_bg">\n                <iframe style="' + f((s = null != (s = n.loginCont || (null != t ? t.loginCont : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "loginCont",
                        hash: {},
                        data: i
                    }) : s)) + '" class="iframe_login" width="100%" scrolling="no" frameborder="0" height="383" src="/signin_pop.html?params=' + f((s = null != (s = n.params || (null != t ? t.params : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "params",
                        hash: {},
                        data: i
                    }) : s)) + '"></iframe>\n                <iframe style="' + f((s = null != (s = n.regCont || (null != t ? t.regCont : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "regCont",
                        hash: {},
                        data: i
                    }) : s)) + '" class="iframe_reg" width="100%" scrolling="no" frameborder="0" height="383" src="/signup_pop.html?params=' + f((s = null != (s = n.params || (null != t ? t.params : t)) ? s : u, typeof s === a ? s.call(o, {
                        name: "params",
                        hash: {},
                        data: i
                    }) : s)) + '"></iframe>\n            </div>\n        </div>\n    </div>\n    <div class="wrap_bot"><div class="wrap_bot_r"></div></div>\n</div>\n'
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}],
    54: [function (e, t, n) {
        (function (n) {
            function r() {
                window.reg = s.signUp, i(".wan-login-btn").on("click", s.signIn), i(".wan-register-btn").on("click", s.signUp), i("body").on("click", ".wan-logout-btn", s.signOut)
            }

            var i = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, s = e("business/public/modules/popup");
            t.exports = {setup: r}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"business/public/modules/popup": 52}],
    55: [function (e, t, n) {
        (function (e) {
            var n = "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null, r = "undefined" != typeof window ? window.Q : "undefined" != typeof e ? e.Q : null, i = {
                src: "pcw_wan",
                domainlist: ["360.cn", "pay.360.cn", "so.com"],
                supportHttps: []
            };
            t.exports = {
                signIn: function (e, t) {
                    return r.Promise(function (r, s) {
                        if (window.QHPass) {
                            var u = n.extend(!0, {}, i, {signIn: {types: ["normal"]}});
                            QHPass.init(u), QHPass.setConfig("signIn.thirdPart.providers", ["sina", "renren", "fetion", "telecom"]), QHPass.events.one("afterShow.signIn", function () {
                                t()
                            }), e.length ? QHPass.signIn(e[0], function (e) {
                                r(e)
                            }) : QHPass.signIn(function (e) {
                                r(e)
                            })
                        } else console.log("You Need QUC JS-SDK"), s()
                    })
                }, signUp: function (e) {
                    return r.promise(function (t, r) {
                        if (window.QHPass) {
                            var s = n.extend(!0, {}, i, {signUp: {types: ["username"]}});
                            QHPass.init(s), QHPass.utils.defineError("213", "\u7528\u6237\u540d\u5df2\u7ecf\u88ab\u4f7f\u7528,\u8bf7\u91cd\u65b0\u8f93\u5165"), e.length ? QHPass.signUp(e[0], function (e) {
                                t(e)
                            }) : QHPass.signUp(function (e) {
                                t(e)
                            })
                        } else console.log("You Need QUC JS-SDK"), r()
                    })
                }, signOut: function () {
                    return r.promise(function (e, t) {
                        if (window.QHPass) {
                            var n = {supportHttps: []};
                            QHPass.init(n), QHPass.signOut(function () {
                                e()
                            })
                        } else console.log("You Need QUC JS-SDK"), t()
                    })
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    56: [function (e, t, n) {
        (function (e) {
            var n = "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null, r = ("undefined" != typeof window ? window.Q : "undefined" != typeof e ? e.Q : null, {
                enableAutocomplete: function (e) {
                    function t() {
                        n(".tt-dropdown-menu").on("click.tt", "a", function (e) {
                            e.stopPropagation()
                        })
                    }

                    var r = e.suggestInput, i = (e.suggestBtn, {
                        url: e.url, filter: function (e) {
                            return e.data
                        }
                    });
                    e.crossdomain && (i = n.extend(i, {ajax: {dataType: "jsonp"}}));
                    var s = new Bloodhound({
                        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
                        queryTokenizer: Bloodhound.tokenizers.whitespace,
                        limit: 5,
                        name: "games",
                        remote: i
                    });
                    s.initialize(), r.typeahead({hint: !1}, {
                        name: "game",
                        displayKey: "name",
                        source: s.ttAdapter(),
                        templates: {
                            suggestion: function (t) {
                                return e.tplCallback(t)
                            }
                        }
                    }), t(), r.on({
                        "typeahead:selected": function (t, n) {
                            return e.selectedCallback(n), !1
                        }, "typeahead:cursorchanged": function (t, n) {
                            return e.cursorchangedCallback(n), !1
                        }, "typeahead:opened": function (t) {
                            return e.openedCallback(), !1
                        }
                    })
                }
            });
            t.exports = {
                setup: function (e) {
                    r.enableAutocomplete(e)
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    57: [function (e, t, n) {
        (function (e) {
            var n = "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null, r = {
                getCookie: function (e) {
                    var t = null;
                    if (document.cookie && "" !== document.cookie)for (var n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                        var i = jQuery.trim(n[r]);
                        if (i.substring(0, e.length + 1) == e + "=") {
                            t = decodeURIComponent(i.substring(e.length + 1));
                            break
                        }
                    }
                    return t
                }, paramsToObj: function (e) {
                    var t = {};
                    if (!e)return t;
                    var r = e.split("&");
                    return n.each(r, function (e, n) {
                        var r = n.split("=");
                        t[r[0]] = r[1]
                    }), t
                }, parseLink: function (e) {
                    var t, n = {
                        hash: "",
                        host: "",
                        hostname: "",
                        href: "",
                        origin: "",
                        pathname: "",
                        port: "",
                        protocol: "",
                        search: ""
                    }, r = document.createElement("a");
                    r.href = e ? e : document.URL;
                    for (var i in n)n[i] = r[i];
                    return n.params = {}, t = r.search, t && (t = t.substr(1), n.params = this.paramsToObj(t)), n
                }, spliceLink: function (e, t) {
                    var r = this.parseLink(e), i = r.params;
                    n.extend(t, i);
                    var s = document.createElement("a");
                    return s.href = e, s.search = "?" + n.param(t), s.href
                }
            };
            t.exports = {
                setup: function () {
                    n(document).on("click", "[data-tg]", function (e) {
                        for (var t = e.target; t;) {
                            if (t == this)return;
                            if ("a" == t.nodeName.toLocaleLowerCase())break;
                            t = t.parentNode
                        }
                        if (t) {
                            var i = n(this).data("tg"), s = "_" + +(new Date), o = window[s] = new Image;
                            o.onload =
                                o.onerror = o.onabort = function () {
                                    o.onload = o.onerror = o.onabort = null, o = null
                                }, o.src = "http://r.yx-s.net/b/eye/s/wan/?setp_id=2&round=101&" + i + "&mid=" + (r.getCookie("__huid") || r.getCookie("__guid")) + "&_t=" + s
                        }
                    })
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    58: [function (e, t, n) {
        (function (n) {
            var r = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, i = "undefined" != typeof window ? window.Q : "undefined" != typeof n ? n.Q : null, s = e("../const"), o = s.LOGIN_NO, u = s.VPLAN, a = s.BIGPLAYER, f = {
                played: "http://gate.wan.360.cn/me/played",
                score: "http://gate.wan.360.cn/me/score",
                csurm: "http://service.wan.360.cn/cs/getGroupUrm.html",
                vplan: "http://api.v.wan.360.cn/plat/get",
                bigplayer: "http://dawanjia.wan.360.cn/api/user/getlevelInfo",
                checkinStatus: "http://dawanjia.wan.360.cn/api/CheckIn/getDetail"
            }, l = e("common/services/api")("user", {
                dataType: "jsonp",
                jsonp: "_jp"
            }), c = e("common/services/api")("dwj", {
                dataType: "jsonp",
                jsonp: "callback"
            }), h = {
                getUserScore: function () {
                    return i.promise(function (e, t) {
                        l.get(f.score).then(function (t) {
                            e(t)
                        }, function (e) {
                            console.log("getUserScore failed"), t(e)
                        })
                    })
                }, getUserVplan: function (e) {
                    return i.promise(function (t, n) {
                        l.get(f.vplan, {_token: App.token}).then(function (n) {
                            if (n) {
                                var r = n.type, i = n.level;
                                "Y" === r && e.removeClass("notvip").addClass(u.YVIP_CLS + i), "M" === r && e.removeClass("notvip").addClass(u.VIP_CLS + i), "E" === r && e.removeClass("notvip").addClass(u.EVIP_CLS + i)
                            } else n = {message: "not vip"};
                            t(n)
                        }, function (e) {
                            console.log("getUserVplan failed"), n(e)
                        })
                    })
                }, getBigplayer: function (e) {
                    return i.promise(function (t, n) {
                        l.get(f.bigplayer).then(function (n) {
                            var r = n.userLevel;
                            e.addClass(a.LEVEL + r), t(n)
                        }, function (e) {
                            console.log("getBigplayer failed"), n(e)
                        })
                    })
                }, checkinStatus: function () {
                    return i.promise(function (e, t) {
                        c.get(f.checkinStatus).then(function (t) {
                            e(t)
                        }, function (e) {
                            console.log("checkinStatus failed"), t(e)
                        })
                    })
                }, getUserPlayed: function () {
                    return i.promise(function (e, t) {
                        l.get(f.played, {start: 0, size: 3, cate: "", gkey: ""}).then(function (t) {
                            e(t)
                        }, function (e) {
                            console.log("getUserPlayed failed"), t(e)
                        })
                    })
                }, getUserInfo: function () {
                    return i.promise(function (e, t) {
                        window.QHPass ? QHPass.getUserInfo(function (t) {
                            e(r.extend({}, t, {errno: o.LOGINED}))
                        }, function () {
                            e(r.extend({}, {errno: o.UNLOGINED}))
                        }) : (console.log("You Need QUC JS-SDK"), t({error: "no JS-SDK"}))
                    })
                }
            };
            t.exports = h
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"../const": 47, "common/services/api": "common/services/api"}],
    59: [function (e, t, n) {
        var r = {}, i = function (e, t) {
            "undefined" != typeof r[e] && $.isFunction(t) && (r[e].deferreds.forEach(function (e) {
                t(e)
            }), delete r[e])
        };
        t.exports = {
            comboMultiResolver: function (e, t) {
                var n = Q.defer();
                return "undefined" == typeof r[e] && (r[e] = {deferreds: []}, Q.Promise(t).then(function (t) {
                    i(e, function (e) {
                        e.resolve(t)
                    })
                }, function (t) {
                    i(e, function (e) {
                        e.reject(t)
                    })
                })), r[e].deferreds.push(n), n.promise
            }, jQueryDomFactory: function (e) {
                var t = null;
                return function () {
                    return null == t && (t = $(e), "undefined" == typeof t[0] && (t = null)), t || $(e)
                }
            }, getByteLength: function (e) {
                return e.replace(/[^\x00-\xff]/g, "--").length
            }, getViewLength: function (e) {
                return Math.ceil(this.getByteLength(e) / 2)
            }, cleanStaticDomain: function (e, t, n) {
                return n = n || "", t.replace(/^http:\/\/(s|p)[\d]\.(qhimg|yx-s)\.com/g, "http://$1" + e + ".qhimg.com" + n)
            }, getUrlParam: function (e, t) {
                for (var n, r = new RegExp("(?:\\?|&)" + t + "=([^&#]+)", "g"), i = []; n = r.exec(e);)i.push(decodeURIComponent(n[1]));
                return i.length > 1 ? i : 1 === i.length ? i[0] : ""
            }, htmlEncode: function (e) {
                var t = document.createElement("div"), n = document.createTextNode(e);
                return t.appendChild(n), t.innerHTML
            }, htmlDecode: function (e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.innerText || t.textContent
            }, testValidDate: function (e, t) {
                var n, r, i, s = new Date, o = s.getFullYear().toString(), u = s.getMonth() + 1 < 10 ? "0" + (s.getMonth() + 1) : s.getMonth() + 1, a = s.getDate() < 10 ? "0" + s.getDate() : s.getDate();
                return n = parseInt(o + u + a), e = e.replace(/\-/g, ""), t = t.replace(/\-/g, ""), r = parseInt(e), i = parseInt(t), !(n < r || n > i)
            }
        }
    }, {}]
}, {}, [22]);