/**
 * Created by Administrator on 2017/9/12.
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
    }], 2: [function (e, t, n) {
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
    }, {"./decorators": 3, "./exception": 5, "./helpers": 6, "./logger": 14, "./utils": 18}], 3: [function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e) {
            o["default"](e)
        }

        n.__esModule = !0, n.registerDefaultDecorators = i;
        var s = e("./decorators/inline"), o = r(s)
    }, {"./decorators/inline": 4}], 4: [function (e, t, n) {
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
    }, {"../utils": 18}], 5: [function (e, t, n) {
        "use strict";
        function r(e, t) {
            var n = t && t.loc, s = void 0, o = void 0;
            n && (s = n.start.line, o = n.start.column, e += " - " + s + ":" + o);
            for (var u = Error.prototype.constructor.call(this, e), f = 0; f < i.length; f++)this[i[f]] = u[i[f]];
            Error.captureStackTrace && Error.captureStackTrace(this, r);
            try {
                n && (this.lineNumber = s, Object.defineProperty ? Object.defineProperty(this, "column", {
                    value: o,
                    enumerable: !0
                }) : this.column = o)
            } catch (l) {
            }
        }

        n.__esModule = !0;
        var i = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        r.prototype = new Error, n["default"] = r, t.exports = n["default"]
    }, {}], 6: [function (e, t, n) {
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
    }], 7: [function (e, t, n) {
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
    }, {"../utils": 18}], 8: [function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        n.__esModule = !0;
        var i = e("../utils"), s = e("../exception"), o = r(s);
        n["default"] = function (e) {
            e.registerHelper("each", function (e, t) {
                function n(t, n, s) {
                    l && (l.key = t, l.index = n, l.first = 0 === n, l.last = !!s, c && (l.contextPath = c + t)), f += r(e[t], {
                        data: l,
                        blockParams: i.blockParams([e[t], t], [c + t, null])
                    })
                }

                if (!t)throw new o["default"]("Must pass iterator to #each");
                var r = t.fn, s = t.inverse, u = 0, f = "", l = void 0, c = void 0;
                if (t.data && t.ids && (c = i.appendContextPath(t.data.contextPath, t.ids[0]) + "."), i.isFunction(e) && (e = e.call(this)), t.data && (l = i.createFrame(t.data)), e && "object" == typeof e)if (i.isArray(e))for (var h = e.length; u < h; u++)u in e && n(u, u, u === e.length - 1); else {
                    var p = void 0;
                    for (var d in e)e.hasOwnProperty(d) && (void 0 !== p && n(p, u - 1), p = d, u++);
                    void 0 !== p && n(p, u - 1, !0)
                }
                return 0 === u && (f = s(this)), f
            })
        }, t.exports = n["default"]
    }, {"../exception": 5, "../utils": 18}], 9: [function (e, t, n) {
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
    }, {"../exception": 5}], 10: [function (e, t, n) {
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
    }, {"../utils": 18}], 11: [function (e, t, n) {
        "use strict";
        n.__esModule = !0, n["default"] = function (e) {
            e.registerHelper("log", function () {
                for (var t = [void 0], n = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++)t.push(arguments[r]);
                var i = 1;
                null != n.hash.level ? i = n.hash.level : n.data && null != n.data.level && (i = n.data.level), t[0] = i, e.log.apply(e, t)
            })
        }, t.exports = n["default"]
    }, {}], 12: [function (e, t, n) {
        "use strict";
        n.__esModule = !0, n["default"] = function (e) {
            e.registerHelper("lookup", function (e, t) {
                return e && e[t]
            })
        }, t.exports = n["default"]
    }, {}], 13: [function (e, t, n) {
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
    }, {"../utils": 18}], 14: [function (e, t, n) {
        "use strict";
        n.__esModule = !0;
        var r = e("./utils"), i = {
            methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function (e) {
                if ("string" == typeof e) {
                    var t = r.indexOf(i.methodMap, e.toLowerCase());
                    e = t >= 0 ? t : parseInt(e, 10)
                }
                return e
            }, log: function (e) {
                if (e = i.lookupLevel(e), "undefined" != typeof console && i.lookupLevel(i.level) <= e) {
                    var t = i.methodMap[e];
                    console[t] || (t = "log");
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)r[s - 1] = arguments[s];
                    console[t].apply(console, r)
                }
            }
        };
        n["default"] = i, t.exports = n["default"]
    }, {"./utils": 18}], 15: [function (e, t, n) {
        (function (e) {
            "use strict";
            n.__esModule = !0, n["default"] = function (t) {
                var n = "undefined" != typeof e ? e : window, r = n.Handlebars;
                t.noConflict = function () {
                    return n.Handlebars === t && (n.Handlebars = r), t
                }
            }, t.exports = n["default"]
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}], 16: [function (e, t, n) {
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
    }, {"./base": 2, "./exception": 5, "./utils": 18}], 17: [function (e, t, n) {
        "use strict";
        function r(e) {
            this.string = e
        }

        n.__esModule = !0, r.prototype.toString = r.prototype.toHTML = function () {
            return "" + this.string
        }, n["default"] = r, t.exports = n["default"]
    }, {}], 18: [function (e, t, n) {
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
    }, {}], 19: [function (e, t, n) {
        t.exports = e("./dist/cjs/handlebars.runtime")["default"]
    }, {"./dist/cjs/handlebars.runtime": 1}], 20: [function (e, t, n) {
        t.exports = e("handlebars/runtime")["default"]
    }, {"handlebars/runtime": 19}], 21: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            1: function (e, t, n, r, i, s, o) {
                var u, a = e.lambda, f = e.escapeExpression, l = null != t ? t : e.nullContext || {}, c = n.helperMissing, h = "function";
                return '    <a href="' + f(a(null != t ? t.url : t, t)) + '" target="_blank" data-bk=' + f(a(null != o[1] ? o[1].dot : o[1], t)) + ">\n        <li>" + f((u = null != (u = n.title || (null != t ? t.title : t)) ? u : c, typeof u === h ? u.call(l, {
                        name: "title",
                        hash: {},
                        data: i
                    }) : u)) + "</li>\n        " + f((u = null != (u = n.type || (null != t ? t.type : t)) ? u : c, typeof u === h ? u.call(l, {
                        name: "type",
                        hash: {},
                        data: i
                    }) : u)) + "\n    </a>\n"
            }, compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i, s, o) {
                var u, a = e.lambda, f = e.escapeExpression;
                return (null != (u = n.each.call(null != t ? t : e.nullContext || {}, null != t ? t.arr : t, {
                        name: "each",
                        hash: {},
                        fn: e.program(1, i, 0, s, o),
                        inverse: e.noop,
                        data: i
                    })) ? u : "") + '\n<a class="more" href="' + f(a(null != t ? t.more : t, t)) + '" data-bk="' + f(a(null != t ? t.dot : t, t)) + 'more" target="_blank">\u66f4\u591a\u6e38\u620f></a>'
            }, useData: !0, useDepths: !0
        })
    }, {"hbsfy/runtime": 20}], 22: [function (e, t, n) {
        var r = e("hbsfy/runtime");
        t.exports = r.template({
            compiler: [7, ">= 4.0.0"], main: function (e, t, n, r, i) {
                return '<a class="menu-button" href="javascript:void(0)" data-bk="public-games">\n    <div class="icon-gamelist gamelist-button">\n        <span class="text">\u6e38\u620f\u76ee\u5f55</span>\n    </div>    \n</a>\n\n<div class="menu-games-div">\n    <h2>\n        <span class="menu-web"><i class="icon-gamelist gamelist-bar"></i>\u7f51\u9875\u6e38\u620f</span>\n        <span class="menu-client"><i class="icon-gamelist gamelist-bar"></i>\u5ba2\u6237\u7aef\u6e38\u620f</span>\n        <span class="menu-mobile"><i class="icon-gamelist gamelist-bar"></i>\u624b\u673a\u6e38\u620f</span>\n        <span class="menu-signs">\n            <i class="icon-gamelist gamelist-hot"></i>\u70ed\u6e38\n            <i class="icon-gamelist gamelist-new"></i>\u65b0\u6e38\n            <i class="icon-gamelist gamelist-test"></i>\u6d4b\u8bd5\n        </span>\n    </h2>\n    <div class="menu-games">\n        <ul class="content-web"></ul>\n        <ul class="content-client"></ul>\n        <ul class="content-mobile"></ul>\n    </div>\n</div>'
            }, useData: !0
        })
    }, {"hbsfy/runtime": 20}], 23: [function (e, t, n) {
        (function (t) {
            var n = "undefined" != typeof window ? window.jQuery : "undefined" != typeof t ? t.jQuery : null, r = e("hbsfy/runtime"), i = e("./index.hbs"), s = e("./game.hbs"), o = {
                Jajax: function (e, t, r) {
                    n.ajax({
                        type: "GET",
                        url: e,
                        cache: !1,
                        data: t,
                        dataType: "jsonp",
                        jsonp: "_jp",
                        success: function (e) {
                            r(e.data)
                        },
                        error: function () {
                            r(0)
                        }
                    })
                }
            }, u = "http://wan.360.cn/api/gamelist/allplat", a = function (e) {
                var e = n("" + e);
                this.conDom = e, this.initUi(), this.initEvent()
            };
            a.prototype = {
                initUi: function () {
                    this.conDom.html(i)
                }, initEvent: function () {
                    var e = this;
                    n(".menu-button").on("click", function () {
                        0 == n(".menu-games-div:animated").length && (e.conDom.toggleClass("active"), n(".menu-games-div").slideToggle())
                    }), o.Jajax(u, {}, function (t) {
                        t && e.renderGame(t)
                    })
                }, renderGame: function (e) {
                    e.web.dot = "public-games-web", e.client.dot = "public-games-client", e.mobile.dot = "public-games-mobile", n(".content-web").prepend(s(e.web)), n(".content-client").prepend(s(e.client)), n(".content-mobile").prepend(s(e.mobile))
                }
            }, r.registerHelper("type", function () {
                return "1" == this.type ? new r.SafeString('<i class="icon-gamelist gamelist-hot"></i>') : "2" == this.type ? new r.SafeString('<i class="icon-gamelist gamelist-new"></i>') : "3" == this.type ? new r.SafeString('<i class="icon-gamelist gamelist-test"></i>') : void 0
            }), window.GamelistSDK = a
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./game.hbs": 21, "./index.hbs": 22, "hbsfy/runtime": 20}]
}, {}, [23]);