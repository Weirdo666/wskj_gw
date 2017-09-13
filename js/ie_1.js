/**
 * Created by Administrator on 2017/9/11.
 */
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */
(function (e, t) {
    "use strict";
    typeof define == "function" && define.amd ? define(t) : typeof exports == "object" ? module.exports = t() : e.returnExports = t()
})(this, function () {
    var e = Array, t = e.prototype, n = Object, r = n.prototype, i = Function, s = i.prototype, o = String, u = o.prototype, a = Number, f = a.prototype, l = t.slice, c = t.splice, h = t.push, p = t.unshift, d = t.concat, v = t.join, m = s.call, g = s.apply, y = Math.max, b = Math.min, w = r.toString, E = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", S, x = Function.prototype.toString, T = /^\s*class /, N = function (t) {
        try {
            var n = x.call(t), r = n.replace(/\/\/.*\n/g, ""), i = r.replace(/\/\*[.\s\S]*\*\//g, ""), s = i.replace(/\n/mg, " ").replace(/ {2}/g, " ");
            return T.test(s)
        } catch (o) {
            return !1
        }
    }, C = function (t) {
        try {
            return N(t) ? !1 : (x.call(t), !0)
        } catch (n) {
            return !1
        }
    }, k = "[object Function]", L = "[object GeneratorFunction]", S = function (t) {
        if (!t)return !1;
        if (typeof t != "function" && typeof t != "object")return !1;
        if (E)return C(t);
        if (N(t))return !1;
        var n = w.call(t);
        return n === k || n === L
    }, A, O = RegExp.prototype.exec, M = function (t) {
        try {
            return O.call(t), !0
        } catch (n) {
            return !1
        }
    }, _ = "[object RegExp]";
    A = function (t) {
        return typeof t != "object" ? !1 : E ? M(t) : w.call(t) === _
    };
    var D, P = String.prototype.valueOf, H = function (t) {
        try {
            return P.call(t), !0
        } catch (n) {
            return !1
        }
    }, B = "[object String]";
    D = function (t) {
        return typeof t == "string" ? !0 : typeof t != "object" ? !1 : E ? H(t) : w.call(t) === B
    };
    var j = n.defineProperty && function () {
            try {
                var e = {};
                n.defineProperty(e, "x", {enumerable: !1, value: e});
                for (var t in e)return !1;
                return e.x === e
            } catch (r) {
                return !1
            }
        }(), F = function (e) {
        var t;
        return j ? t = function (e, t, r, i) {
            if (!i && t in e)return;
            n.defineProperty(e, t, {configurable: !0, enumerable: !1, writable: !0, value: r})
        } : t = function (e, t, n, r) {
            if (!r && t in e)return;
            e[t] = n
        }, function (r, i, s) {
            for (var o in i)e.call(i, o) && t(r, o, i[o], s)
        }
    }(r.hasOwnProperty), I = function (t) {
        var n = typeof t;
        return t === null || n !== "object" && n !== "function"
    }, q = a.isNaN || function (e) {
            return e !== e
        }, R = {
        ToInteger: function (t) {
            var n = +t;
            return q(n) ? n = 0 : n !== 0 && n !== 1 / 0 && n !== -1 / 0 && (n = (n > 0 || -1) * Math.floor(Math.abs(n))), n
        }, ToPrimitive: function (t) {
            var n, r, i;
            if (I(t))return t;
            r = t.valueOf;
            if (S(r)) {
                n = r.call(t);
                if (I(n))return n
            }
            i = t.toString;
            if (S(i)) {
                n = i.call(t);
                if (I(n))return n
            }
            throw new TypeError
        }, ToObject: function (e) {
            if (e == null)throw new TypeError("can't convert " + e + " to object");
            return n(e)
        }, ToUint32: function (t) {
            return t >>> 0
        }
    }, U = function () {
    };
    F(s, {
        bind: function (t) {
            var r = this;
            if (!S(r))throw new TypeError("Function.prototype.bind called on incompatible " + r);
            var s = l.call(arguments, 1), o, u = function () {
                if (this instanceof o) {
                    var e = g.call(r, this, d.call(s, l.call(arguments)));
                    return n(e) === e ? e : this
                }
                return g.call(r, t, d.call(s, l.call(arguments)))
            }, a = y(0, r.length - s.length), f = [];
            for (var c = 0; c < a; c++)h.call(f, "$" + c);
            return o = i("binder", "return function (" + v.call(f, ",") + "){ return binder.apply(this, arguments); }")(u), r.prototype && (U.prototype = r.prototype, o.prototype = new U, U.prototype = null), o
        }
    });
    var z = m.bind(r.hasOwnProperty), W = m.bind(r.toString), X = m.bind(l), V = g.bind(l), $ = m.bind(u.slice), J = m.bind(u.split), K = m.bind(u.indexOf), Q = m.bind(h), G = m.bind(r.propertyIsEnumerable), Y = m.bind(t.sort), Z = e.isArray || function (t) {
            return W(t) === "[object Array]"
        }, et = [].unshift(0) !== 1;
    F(t, {
        unshift: function () {
            return p.apply(this, arguments), this.length
        }
    }, et), F(e, {isArray: Z});
    var tt = n("a"), nt = tt[0] !== "a" || !(0 in tt), rt = function (t) {
        var n = !0, r = !0, i = !1;
        if (t)try {
            t.call("foo", function (e, t, r) {
                typeof r != "object" && (n = !1)
            }), t.call([1], function () {
                "use strict";
                r = typeof this == "string"
            }, "x")
        } catch (s) {
            i = !0
        }
        return !!t && !i && n && r
    };
    F(t, {
        forEach: function (t) {
            var n = R.ToObject(this), r = nt && D(this) ? J(this, "") : n, i = -1, s = R.ToUint32(r.length), o;
            arguments.length > 1 && (o = arguments[1]);
            if (!S(t))throw new TypeError("Array.prototype.forEach callback must be a function");
            while (++i < s)i in r && (typeof o == "undefined" ? t(r[i], i, n) : t.call(o, r[i], i, n))
        }
    }, !rt(t.forEach)), F(t, {
        map: function (n) {
            var r = R.ToObject(this), i = nt && D(this) ? J(this, "") : r, s = R.ToUint32(i.length), o = e(s), u;
            arguments.length > 1 && (u = arguments[1]);
            if (!S(n))throw new TypeError("Array.prototype.map callback must be a function");
            for (var a = 0; a < s; a++)a in i && (typeof u == "undefined" ? o[a] = n(i[a], a, r) : o[a] = n.call(u, i[a], a, r));
            return o
        }
    }, !rt(t.map)), F(t, {
        filter: function (t) {
            var n = R.ToObject(this), r = nt && D(this) ? J(this, "") : n, i = R.ToUint32(r.length), s = [], o, u;
            arguments.length > 1 && (u = arguments[1]);
            if (!S(t))throw new TypeError("Array.prototype.filter callback must be a function");
            for (var a = 0; a < i; a++)a in r && (o = r[a], (typeof u == "undefined" ? t(o, a, n) : t.call(u, o, a, n)) && Q(s, o));
            return s
        }
    }, !rt(t.filter)), F(t, {
        every: function (t) {
            var n = R.ToObject(this), r = nt && D(this) ? J(this, "") : n, i = R.ToUint32(r.length), s;
            arguments.length > 1 && (s = arguments[1]);
            if (!S(t))throw new TypeError("Array.prototype.every callback must be a function");
            for (var o = 0; o < i; o++)if (o in r && (typeof s == "undefined" ? !t(r[o], o, n) : !t.call(s, r[o], o, n)))return !1;
            return !0
        }
    }, !rt(t.every)), F(t, {
        some: function (t) {
            var n = R.ToObject(this), r = nt && D(this) ? J(this, "") : n, i = R.ToUint32(r.length), s;
            arguments.length > 1 && (s = arguments[1]);
            if (!S(t))throw new TypeError("Array.prototype.some callback must be a function");
            for (var o = 0; o < i; o++)if (o in r && (typeof s == "undefined" ? t(r[o], o, n) : t.call(s, r[o], o, n)))return !0;
            return !1
        }
    }, !rt(t.some));
    var it = !1;
    t.reduce && (it = typeof t.reduce.call("es5", function (e, t, n, r) {
            return r
        }) == "object"), F(t, {
        reduce: function (t) {
            var n = R.ToObject(this), r = nt && D(this) ? J(this, "") : n, i = R.ToUint32(r.length);
            if (!S(t))throw new TypeError("Array.prototype.reduce callback must be a function");
            if (i === 0 && arguments.length === 1)throw new TypeError("reduce of empty array with no initial value");
            var s = 0, o;
            if (arguments.length >= 2)o = arguments[1]; else do {
                if (s in r) {
                    o = r[s++];
                    break
                }
                if (++s >= i)throw new TypeError("reduce of empty array with no initial value")
            } while (!0);
            for (; s < i; s++)s in r && (o = t(o, r[s], s, n));
            return o
        }
    }, !it);
    var st = !1;
    t.reduceRight && (st = typeof t.reduceRight.call("es5", function (e, t, n, r) {
            return r
        }) == "object"), F(t, {
        reduceRight: function (t) {
            var n = R.ToObject(this), r = nt && D(this) ? J(this, "") : n, i = R.ToUint32(r.length);
            if (!S(t))throw new TypeError("Array.prototype.reduceRight callback must be a function");
            if (i === 0 && arguments.length === 1)throw new TypeError("reduceRight of empty array with no initial value");
            var s, o = i - 1;
            if (arguments.length >= 2)s = arguments[1]; else do {
                if (o in r) {
                    s = r[o--];
                    break
                }
                if (--o < 0)throw new TypeError("reduceRight of empty array with no initial value")
            } while (!0);
            if (o < 0)return s;
            do o in r && (s = t(s, r[o], o, n)); while (o--);
            return s
        }
    }, !st);
    var ot = t.indexOf && [0, 1].indexOf(1, 2) !== -1;
    F(t, {
        indexOf: function (t) {
            var n = nt && D(this) ? J(this, "") : R.ToObject(this), r = R.ToUint32(n.length);
            if (r === 0)return -1;
            var i = 0;
            arguments.length > 1 && (i = R.ToInteger(arguments[1])), i = i >= 0 ? i : y(0, r + i);
            for (; i < r; i++)if (i in n && n[i] === t)return i;
            return -1
        }
    }, ot);
    var ut = t.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
    F(t, {
        lastIndexOf: function (t) {
            var n = nt && D(this) ? J(this, "") : R.ToObject(this), r = R.ToUint32(n.length);
            if (r === 0)return -1;
            var i = r - 1;
            arguments.length > 1 && (i = b(i, R.ToInteger(arguments[1]))), i = i >= 0 ? i : r - Math.abs(i);
            for (; i >= 0; i--)if (i in n && t === n[i])return i;
            return -1
        }
    }, ut);
    var at = function () {
        var e = [1, 2], t = e.splice();
        return e.length === 2 && Z(t) && t.length === 0
    }();
    F(t, {
        splice: function (t, n) {
            return arguments.length === 0 ? [] : c.apply(this, arguments)
        }
    }, !at);
    var ft = function () {
        var e = {};
        return t.splice.call(e, 0, 0, 1), e.length === 1
    }();
    F(t, {
        splice: function (t, n) {
            if (arguments.length === 0)return [];
            var r = arguments;
            return this.length = y(R.ToInteger(this.length), 0), arguments.length > 0 && typeof n != "number" && (r = X(arguments), r.length < 2 ? Q(r, this.length - t) : r[1] = R.ToInteger(n)), c.apply(this, r)
        }
    }, !ft);
    var lt = function () {
        var t = new e(1e5);
        return t[8] = "x", t.splice(1, 1), t.indexOf("x") === 7
    }(), ct = function () {
        var e = 256, t = [];
        return t[e] = "a", t.splice(e + 1, 0, "b"), t[e] === "a"
    }();
    F(t, {
        splice: function (t, n) {
            var r = R.ToObject(this), i = [], s = R.ToUint32(r.length), u = R.ToInteger(t), a = u < 0 ? y(s + u, 0) : b(u, s), f = b(y(R.ToInteger(n), 0), s - a), l = 0, c;
            while (l < f)c = o(a + l), z(r, c) && (i[l] = r[c]), l += 1;
            var h = X(arguments, 2), p = h.length, d;
            if (p < f) {
                l = a;
                var v = s - f;
                while (l < v)c = o(l + f), d = o(l + p), z(r, c) ? r[d] = r[c] : delete r[d], l += 1;
                l = s;
                var m = s - f + p;
                while (l > m)delete r[l - 1], l -= 1
            } else if (p > f) {
                l = s - f;
                while (l > a)c = o(l + f - 1), d = o(l + p - 1), z(r, c) ? r[d] = r[c] : delete r[d], l -= 1
            }
            l = a;
            for (var g = 0; g < h.length; ++g)r[l] = h[g], l += 1;
            return r.length = s - f + p, i
        }
    }, !lt || !ct);
    var ht = t.join, pt;
    try {
        pt = Array.prototype.join.call("123", ",") !== "1,2,3"
    } catch (dt) {
        pt = !0
    }
    pt && F(t, {
        join: function (t) {
            var n = typeof t == "undefined" ? "," : t;
            return ht.call(D(this) ? J(this, "") : this, n)
        }
    }, pt);
    var vt = [1, 2].join(undefined) !== "1,2";
    vt && F(t, {
        join: function (t) {
            var n = typeof t == "undefined" ? "," : t;
            return ht.call(this, n)
        }
    }, vt);
    var mt = function (t) {
        var n = R.ToObject(this), r = R.ToUint32(n.length), i = 0;
        while (i < arguments.length)n[r + i] = arguments[i], i += 1;
        return n.length = r + i, r + i
    }, gt = function () {
        var e = {}, t = Array.prototype.push.call(e, undefined);
        return t !== 1 || e.length !== 1 || typeof e[0] != "undefined" || !z(e, 0)
    }();
    F(t, {
        push: function (t) {
            return Z(this) ? h.apply(this, arguments) : mt.apply(this, arguments)
        }
    }, gt);
    var yt = function () {
        var e = [], t = e.push(undefined);
        return t !== 1 || e.length !== 1 || typeof e[0] != "undefined" || !z(e, 0)
    }();
    F(t, {push: mt}, yt), F(t, {
        slice: function (e, t) {
            var n = D(this) ? J(this, "") : this;
            return V(n, arguments)
        }
    }, nt);
    var bt = function () {
        try {
            return [1, 2].sort(null), [1, 2].sort({}), !0
        } catch (e) {
        }
        return !1
    }(), wt = function () {
        try {
            return [1, 2].sort(/a/), !1
        } catch (e) {
        }
        return !0
    }(), Et = function () {
        try {
            return [1, 2].sort(undefined), !0
        } catch (e) {
        }
        return !1
    }();
    F(t, {
        sort: function (t) {
            if (typeof t == "undefined")return Y(this);
            if (!S(t))throw new TypeError("Array.prototype.sort callback must be a function");
            return Y(this, t)
        }
    }, bt || !Et || !wt);
    var St = !{toString: null}.propertyIsEnumerable("toString"), xt = function () {
    }.propertyIsEnumerable("prototype"), Tt = !z("x", "0"), Nt = function (e) {
        var t = e.constructor;
        return t && t.prototype === e
    }, Ct = {
        $window: !0,
        $console: !0,
        $parent: !0,
        $self: !0,
        $frame: !0,
        $frames: !0,
        $frameElement: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $external: !0
    }, kt = function () {
        if (typeof window == "undefined")return !1;
        for (var e in window)try {
            !Ct["$" + e] && z(window, e) && window[e] !== null && typeof window[e] == "object" && Nt(window[e])
        } catch (t) {
            return !0
        }
        return !1
    }(), Lt = function (e) {
        if (typeof window == "undefined" || !kt)return Nt(e);
        try {
            return Nt(e)
        } catch (t) {
            return !1
        }
    }, At = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], Ot = At.length, Mt = function (t) {
        return W(t) === "[object Arguments]"
    }, _t = function (t) {
        return t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && !Z(t) && S(t.callee)
    }, Dt = Mt(arguments) ? Mt : _t;
    F(n, {
        keys: function (t) {
            var n = S(t), r = Dt(t), i = t !== null && typeof t == "object", s = i && D(t);
            if (!i && !n && !r)throw new TypeError("Object.keys called on a non-object");
            var u = [], a = xt && n;
            if (s && Tt || r)for (var f = 0; f < t.length; ++f)Q(u, o(f));
            if (!r)for (var l in t)(!a || l !== "prototype") && z(t, l) && Q(u, o(l));
            if (St) {
                var c = Lt(t);
                for (var h = 0; h < Ot; h++) {
                    var p = At[h];
                    (!c || p !== "constructor") && z(t, p) && Q(u, p)
                }
            }
            return u
        }
    });
    var Pt = n.keys && function () {
            return n.keys(arguments).length === 2
        }(1, 2), Ht = n.keys && function () {
            var e = n.keys(arguments);
            return arguments.length !== 1 || e.length !== 1 || e[0] !== 1
        }(1), Bt = n.keys;
    F(n, {
        keys: function (t) {
            return Dt(t) ? Bt(X(t)) : Bt(t)
        }
    }, !Pt || Ht);
    var jt = (new Date(-0xc782b5b342b24)).getUTCMonth() !== 0, Ft = new Date(-0x55d318d56a724), It = new Date(14496624e5), qt = Ft.toUTCString() !== "Mon, 01 Jan -45875 11:59:59 GMT", Rt, Ut, zt = Ft.getTimezoneOffset();
    zt < -720 ? (Rt = Ft.toDateString() !== "Tue Jan 02 -45875", Ut = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(It.toString())) : (Rt = Ft.toDateString() !== "Mon Jan 01 -45875", Ut = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(It.toString()));
    var Wt = m.bind(Date.prototype.getFullYear), Xt = m.bind(Date.prototype.getMonth), Vt = m.bind(Date.prototype.getDate), $t = m.bind(Date.prototype.getUTCFullYear), Jt = m.bind(Date.prototype.getUTCMonth), Kt = m.bind(Date.prototype.getUTCDate), Qt = m.bind(Date.prototype.getUTCDay), Gt = m.bind(Date.prototype.getUTCHours), Yt = m.bind(Date.prototype.getUTCMinutes), Zt = m.bind(Date.prototype.getUTCSeconds), en = m.bind(Date.prototype.getUTCMilliseconds), tn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], nn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], rn = function (t, n) {
        return Vt(new Date(n, t, 0))
    };
    F(Date.prototype, {
        getFullYear: function () {
            if (!!this && this instanceof Date) {
                var t = Wt(this);
                return t < 0 && Xt(this) > 11 ? t + 1 : t
            }
            throw new TypeError("this is not a Date object.")
        }, getMonth: function () {
            if (!!this && this instanceof Date) {
                var t = Wt(this), n = Xt(this);
                return t < 0 && n > 11 ? 0 : n
            }
            throw new TypeError("this is not a Date object.")
        }, getDate: function () {
            if (!!this && this instanceof Date) {
                var t = Wt(this), n = Xt(this), r = Vt(this);
                if (t < 0 && n > 11) {
                    if (n === 12)return r;
                    var i = rn(0, t + 1);
                    return i - r + 1
                }
                return r
            }
            throw new TypeError("this is not a Date object.")
        }, getUTCFullYear: function () {
            if (!!this && this instanceof Date) {
                var t = $t(this);
                return t < 0 && Jt(this) > 11 ? t + 1 : t
            }
            throw new TypeError("this is not a Date object.")
        }, getUTCMonth: function () {
            if (!!this && this instanceof Date) {
                var t = $t(this), n = Jt(this);
                return t < 0 && n > 11 ? 0 : n
            }
            throw new TypeError("this is not a Date object.")
        }, getUTCDate: function () {
            if (!!this && this instanceof Date) {
                var t = $t(this), n = Jt(this), r = Kt(this);
                if (t < 0 && n > 11) {
                    if (n === 12)return r;
                    var i = rn(0, t + 1);
                    return i - r + 1
                }
                return r
            }
            throw new TypeError("this is not a Date object.")
        }
    }, jt), F(Date.prototype, {
        toUTCString: function () {
            if (!!this && this instanceof Date) {
                var t = Qt(this), n = Kt(this), r = Jt(this), i = $t(this), s = Gt(this), o = Yt(this), u = Zt(this);
                return tn[t] + ", " + (n < 10 ? "0" + n : n) + " " + nn[r] + " " + i + " " + (s < 10 ? "0" + s : s) + ":" + (o < 10 ? "0" + o : o) + ":" + (u < 10 ? "0" + u : u) + " GMT"
            }
            throw new TypeError("this is not a Date object.")
        }
    }, jt || qt), F(Date.prototype, {
        toDateString: function () {
            if (!!this && this instanceof Date) {
                var t = this.getDay(), n = this.getDate(), r = this.getMonth(), i = this.getFullYear();
                return tn[t] + " " + nn[r] + " " + (n < 10 ? "0" + n : n) + " " + i
            }
            throw new TypeError("this is not a Date object.")
        }
    }, jt || Rt);
    if (jt || Ut)Date.prototype.toString = function jn() {
        if (!!this && this instanceof Date) {
            var e = this.getDay(), t = this.getDate(), n = this.getMonth(), r = this.getFullYear(), i = this.getHours(), s = this.getMinutes(), o = this.getSeconds(), u = this.getTimezoneOffset(), a = Math.floor(Math.abs(u) / 60), f = Math.floor(Math.abs(u) % 60);
            return tn[e] + " " + nn[n] + " " + (t < 10 ? "0" + t : t) + " " + r + " " + (i < 10 ? "0" + i : i) + ":" + (s < 10 ? "0" + s : s) + ":" + (o < 10 ? "0" + o : o) + " GMT" + (u > 0 ? "-" : "+") + (a < 10 ? "0" + a : a) + (f < 10 ? "0" + f : f)
        }
        throw new TypeError("this is not a Date object.")
    }, j && n.defineProperty(Date.prototype, "toString", {configurable: !0, enumerable: !1, writable: !0});
    var sn = -621987552e5, on = "-000001", un = Date.prototype.toISOString && (new Date(sn)).toISOString().indexOf(on) === -1, an = Date.prototype.toISOString && (new Date(-1)).toISOString() !== "1969-12-31T23:59:59.999Z", fn = m.bind(Date.prototype.getTime);
    F(Date.prototype, {
        toISOString: function () {
            if (!isFinite(this) || !isFinite(fn(this)))throw new RangeError("Date.prototype.toISOString called on non-finite value.");
            var t = $t(this), n = Jt(this);
            t += Math.floor(n / 12), n = (n % 12 + 12) % 12;
            var r = [n + 1, Kt(this), Gt(this), Yt(this), Zt(this)];
            t = (t < 0 ? "-" : t > 9999 ? "+" : "") + $("00000" + Math.abs(t), 0 <= t && t <= 9999 ? -4 : -6);
            for (var i = 0; i < r.length; ++i)r[i] = $("00" + r[i], -2);
            return t + "-" + X(r, 0, 2).join("-") + "T" + X(r, 2).join(":") + "." + $("000" + en(this), -3) + "Z"
        }
    }, un || an);
    var ln = function () {
        try {
            return Date.prototype.toJSON && (new Date(NaN)).toJSON() === null && (new Date(sn)).toJSON().indexOf(on) !== -1 && Date.prototype.toJSON.call({
                    toISOString: function () {
                        return !0
                    }
                })
        } catch (e) {
            return !1
        }
    }();
    ln || (Date.prototype.toJSON = function (t) {
        var r = n(this), i = R.ToPrimitive(r);
        if (typeof i == "number" && !isFinite(i))return null;
        var s = r.toISOString;
        if (!S(s))throw new TypeError("toISOString property is not callable");
        return s.call(r)
    });
    var cn = Date.parse("+033658-09-27T01:46:40.000Z") === 1e15, hn = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z")), pn = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
    if (pn || hn || !cn) {
        var dn = Math.pow(2, 31) - 1, vn = q((new Date(1970, 0, 1, 0, 0, 0, dn + 1)).getTime());
        Date = function (e) {
            var t = function (r, i, s, u, a, f, l) {
                var c = arguments.length, h;
                if (this instanceof e) {
                    var p = f, d = l;
                    if (vn && c >= 7 && l > dn) {
                        var v = Math.floor(l / dn) * dn, m = Math.floor(v / 1e3);
                        p += m, d -= m * 1e3
                    }
                    h = c === 1 && o(r) === r ? new e(t.parse(r)) : c >= 7 ? new e(r, i, s, u, a, p, d) : c >= 6 ? new e(r, i, s, u, a, p) : c >= 5 ? new e(r, i, s, u, a) : c >= 4 ? new e(r, i, s, u) : c >= 3 ? new e(r, i, s) : c >= 2 ? new e(r, i) : c >= 1 ? new e(r instanceof e ? +r : r) : new e
                } else h = e.apply(this, arguments);
                return I(h) || F(h, {constructor: t}, !0), h
            }, n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"), r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], i = function (t, n) {
                var i = n > 1 ? 1 : 0;
                return r[n] + Math.floor((t - 1969 + i) / 4) - Math.floor((t - 1901 + i) / 100) + Math.floor((t - 1601 + i) / 400) + 365 * (t - 1970)
            }, s = function (n) {
                var r = 0, i = n;
                if (vn && i > dn) {
                    var s = Math.floor(i / dn) * dn, o = Math.floor(s / 1e3);
                    r += o, i -= o * 1e3
                }
                return a(new e(1970, 0, 1, 0, 0, r, i))
            };
            for (var u in e)z(e, u) && (t[u] = e[u]);
            F(t, {now: e.now, UTC: e.UTC}, !0), t.prototype = e.prototype, F(t.prototype, {constructor: t}, !0);
            var f = function (r) {
                var o = n.exec(r);
                if (o) {
                    var u = a(o[1]), f = a(o[2] || 1) - 1, l = a(o[3] || 1) - 1, c = a(o[4] || 0), h = a(o[5] || 0), p = a(o[6] || 0), d = Math.floor(a(o[7] || 0) * 1e3), v = Boolean(o[4] && !o[8]), m = o[9] === "-" ? 1 : -1, g = a(o[10] || 0), y = a(o[11] || 0), b, w = h > 0 || p > 0 || d > 0;
                    if (c < (w ? 24 : 25) && h < 60 && p < 60 && d < 1e3 && f > -1 && f < 12 && g < 24 && y < 60 && l > -1 && l < i(u, f + 1) - i(u, f)) {
                        b = ((i(u, f) + l) * 24 + c + g * m) * 60, b = ((b + h + y * m) * 60 + p) * 1e3 + d, v && (b = s(b));
                        if (-864e13 <= b && b <= 864e13)return b
                    }
                    return NaN
                }
                return e.parse.apply(this, arguments)
            };
            return F(t, {parse: f}), t
        }(Date)
    }
    Date.now || (Date.now = function () {
        return (new Date).getTime()
    });
    var mn = f.toFixed && (8e-5.toFixed(3) !== "0.000" || .9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 0xde0b6b3a7640080.toFixed(0) !== "1000000000000000128"), gn = {
        base: 1e7,
        size: 6,
        data: [0, 0, 0, 0, 0, 0],
        multiply: function (t, n) {
            var r = -1, i = n;
            while (++r < gn.size)i += t * gn.data[r], gn.data[r] = i % gn.base, i = Math.floor(i / gn.base)
        },
        divide: function (t) {
            var n = gn.size, r = 0;
            while (--n >= 0)r += gn.data[n], gn.data[n] = Math.floor(r / t), r = r % t * gn.base
        },
        numToString: function () {
            var t = gn.size, n = "";
            while (--t >= 0)if (n !== "" || t === 0 || gn.data[t] !== 0) {
                var r = o(gn.data[t]);
                n === "" ? n = r : n += $("0000000", 0, 7 - r.length) + r
            }
            return n
        },
        pow: function Fn(e, t, n) {
            return t === 0 ? n : t % 2 === 1 ? Fn(e, t - 1, n * e) : Fn(e * e, t / 2, n)
        },
        log: function (t) {
            var n = 0, r = t;
            while (r >= 4096)n += 12, r /= 4096;
            while (r >= 2)n += 1, r /= 2;
            return n
        }
    }, yn = function (t) {
        var n, r, i, s, u, f, l, c;
        n = a(t), n = q(n) ? 0 : Math.floor(n);
        if (n < 0 || n > 20)throw new RangeError("Number.toFixed called with invalid number of decimals");
        r = a(this);
        if (q(r))return "NaN";
        if (r <= -1e21 || r >= 1e21)return o(r);
        i = "", r < 0 && (i = "-", r = -r), s = "0";
        if (r > 1e-21) {
            u = gn.log(r * gn.pow(2, 69, 1)) - 69, f = u < 0 ? r * gn.pow(2, -u, 1) : r / gn.pow(2, u, 1), f *= 4503599627370496, u = 52 - u;
            if (u > 0) {
                gn.multiply(0, f), l = n;
                while (l >= 7)gn.multiply(1e7, 0), l -= 7;
                gn.multiply(gn.pow(10, l, 1), 0), l = u - 1;
                while (l >= 23)gn.divide(1 << 23), l -= 23;
                gn.divide(1 << l), gn.multiply(1, 1), gn.divide(2), s = gn.numToString()
            } else gn.multiply(0, f), gn.multiply(1 << -u, 0), s = gn.numToString() + $("0.00000000000000000000", 2, 2 + n)
        }
        return n > 0 ? (c = s.length, c <= n ? s = i + $("0.0000000000000000000", 0, n - c + 2) + s : s = i + $(s, 0, c - n) + "." + $(s, c - n)) : s = i + s, s
    };
    F(f, {toFixed: yn}, mn);
    var bn = function () {
        try {
            return 1..toPrecision(undefined) === "1"
        } catch (e) {
            return !0
        }
    }(), wn = f.toPrecision;
    F(f, {
        toPrecision: function (t) {
            return typeof t == "undefined" ? wn.call(this) : wn.call(this, t)
        }
    }, bn), "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function () {
        var e = typeof /()??/.exec("")[1] == "undefined", t = Math.pow(2, 32) - 1;
        u.split = function (n, r) {
            var i = String(this);
            if (typeof n == "undefined" && r === 0)return [];
            if (!A(n))return J(this, n, r);
            var s = [], o = (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.unicode ? "u" : "") + (n.sticky ? "y" : ""), u = 0, a, f, l, c, p = new RegExp(n.source, o + "g");
            e || (a = new RegExp("^" + p.source + "$(?!\\s)", o));
            var d = typeof r == "undefined" ? t : R.ToUint32(r);
            f = p.exec(i);
            while (f) {
                l = f.index + f[0].length;
                if (l > u) {
                    Q(s, $(i, u, f.index)), !e && f.length > 1 && f[0].replace(a, function () {
                        for (var e = 1; e < arguments.length - 2; e++)typeof arguments[e] == "undefined" && (f[e] = void 0)
                    }), f.length > 1 && f.index < i.length && h.apply(s, X(f, 1)), c = f[0].length, u = l;
                    if (s.length >= d)break
                }
                p.lastIndex === f.index && p.lastIndex++, f = p.exec(i)
            }
            return u === i.length ? (c || !p.test("")) && Q(s, "") : Q(s, $(i, u)), s.length > d ? X(s, 0, d) : s
        }
    }() : "0".split(void 0, 0).length && (u.split = function (t, n) {
        return typeof t == "undefined" && n === 0 ? [] : J(this, t, n)
    });
    var En = u.replace, Sn = function () {
        var e = [];
        return "x".replace(/x(.)?/g, function (t, n) {
            Q(e, n)
        }), e.length === 1 && typeof e[0] == "undefined"
    }();
    Sn || (u.replace = function (t, n) {
        var r = S(n), i = A(t) && /\)[*?]/.test(t.source);
        if (!r || !i)return En.call(this, t, n);
        var s = function (e) {
            var r = arguments.length, i = t.lastIndex;
            t.lastIndex = 0;
            var s = t.exec(e) || [];
            return t.lastIndex = i, Q(s, arguments[r - 2], arguments[r - 1]), n.apply(this, s)
        };
        return En.call(this, t, s)
    });
    var xn = u.substr, Tn = "".substr && "0b".substr(-1) !== "b";
    F(u, {
        substr: function (t, n) {
            var r = t;
            return t < 0 && (r = y(this.length + t, 0)), xn.call(this, r, n)
        }
    }, Tn);
    var Nn = "	\n\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff", Cn = "\u200b", kn = "[" + Nn + "]", Ln = new RegExp("^" + kn + kn + "*"), An = new RegExp(kn + kn + "*$"), On = u.trim && (Nn.trim() || !Cn.trim());
    F(u, {
        trim: function () {
            if (typeof this == "undefined" || this === null)throw new TypeError("can't convert " + this + " to object");
            return o(this).replace(Ln, "").replace(An, "")
        }
    }, On);
    var Mn = m.bind(String.prototype.trim), _n = u.lastIndexOf && "abc\u3042\u3044".lastIndexOf("\u3042\u3044", 2) !== -1;
    F(u, {
        lastIndexOf: function (t) {
            if (typeof this == "undefined" || this === null)throw new TypeError("can't convert " + this + " to object");
            var n = o(this), r = o(t), i = arguments.length > 1 ? a(arguments[1]) : NaN, s = q(i) ? Infinity : R.ToInteger(i), u = b(y(s, 0), n.length), f = r.length, l = u + f;
            while (l > 0) {
                l = y(0, l - f);
                var c = K($(n, l, u + f), r);
                if (c !== -1)return l + c
            }
            return -1
        }
    }, _n);
    var Dn = u.lastIndexOf;
    F(u, {
        lastIndexOf: function (t) {
            return Dn.apply(this, arguments)
        }
    }, u.lastIndexOf.length !== 1);
    if (parseInt(Nn + "08") !== 8 || parseInt(Nn + "0x16") !== 22)parseInt = function (e) {
        var t = /^[\-+]?0[xX]/;
        return function (r, i) {
            var s = Mn(r), o = a(i) || (t.test(s) ? 16 : 10);
            return e(s, o)
        }
    }(parseInt);
    1 / parseFloat("-0") !== -Infinity && (parseFloat = function (e) {
        return function (n) {
            var r = Mn(n), i = e(r);
            return i === 0 && $(r, 0, 1) === "-" ? 0 : i
        }
    }(parseFloat));
    if (String(new RangeError("test")) !== "RangeError: test") {
        var Pn = function In() {
            if (typeof this == "undefined" || this === null)throw new TypeError("can't convert " + this + " to object");
            var e = this.name;
            typeof e == "undefined" ? e = "Error" : typeof e != "string" && (e = o(e));
            var t = this.message;
            return typeof t == "undefined" ? t = "" : typeof t != "string" && (t = o(t)), e ? t ? e + ": " + t : e : t
        };
        Error.prototype.toString = Pn
    }
    if (j) {
        var Hn = function (e, t) {
            if (G(e, t)) {
                var n = Object.getOwnPropertyDescriptor(e, t);
                n.enumerable = !1, Object.defineProperty(e, t, n)
            }
        };
        Hn(Error.prototype, "message"), Error.prototype.message !== "" && (Error.prototype.message = ""), Hn(Error.prototype, "name")
    }
    if (String(/a/mig) !== "/a/gim") {
        var Bn = function qn() {
            var e = "/" + this.source + "/";
            return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), e
        };
        RegExp.prototype.toString = Bn
    }
});