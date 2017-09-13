/**
 * Created by Administrator on 2017/9/12.
 */
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function (e) {
    "use strict";
    if (typeof bootstrap == "function")bootstrap("promise", e); else if (typeof exports == "object" && typeof module == "object")module.exports = e(); else if (typeof define == "function" && define.amd)define(e); else if (typeof ses != "undefined") {
        if (!ses.ok())return;
        ses.makeQ = e
    } else {
        if (typeof window == "undefined" && typeof self == "undefined")throw new Error("This environment was not anticipated by Q. Please file a bug.");
        var t = typeof window != "undefined" ? window : self, n = t.Q;
        t.Q = e(), t.Q.noConflict = function () {
            return t.Q = n, this
        }
    }
})(function () {
    "use strict";
    function u(e) {
        return function () {
            return o.apply(e, arguments)
        }
    }

    function m(e) {
        return e === Object(e)
    }

    function g(e) {
        return v(e) === "[object StopIteration]" || e instanceof y
    }

    function w(t, n) {
        if (e && n.stack && typeof t == "object" && t !== null && t.stack && t.stack.indexOf(b) === -1) {
            var r = [];
            for (var i = n; !!i; i = i.source)i.stack && r.unshift(i.stack);
            r.unshift(t.stack);
            var s = r.join("\n" + b + "\n");
            t.stack = E(s)
        }
    }

    function E(e) {
        var t = e.split("\n"), n = [];
        for (var r = 0; r < t.length; ++r) {
            var i = t[r];
            !T(i) && !S(i) && i && n.push(i)
        }
        return n.join("\n")
    }

    function S(e) {
        return e.indexOf("(module.js:") !== -1 || e.indexOf("(node.js:") !== -1
    }

    function x(e) {
        var t = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);
        if (t)return [t[1], Number(t[2])];
        var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);
        if (n)return [n[1], Number(n[2])];
        var r = /.*@(.+):(\d+)$/.exec(e);
        if (r)return [r[1], Number(r[2])]
    }

    function T(e) {
        var t = x(e);
        if (!t)return !1;
        var i = t[0], s = t[1];
        return i === r && s >= n && s <= at
    }

    function N() {
        if (!e)return;
        try {
            throw new Error
        } catch (t) {
            var n = t.stack.split("\n"), i = n[0].indexOf("@") > 0 ? n[1] : n[2], s = x(i);
            if (!s)return;
            return r = s[0], s[1]
        }
    }

    function C(e, t, n) {
        return function () {
            return typeof console != "undefined" && typeof console.warn == "function" && console.warn(t + " is deprecated, use " + n + " instead.", (new Error("")).stack), e.apply(e, arguments)
        }
    }

    function k(e) {
        return e instanceof M ? e : H(e) ? J(e) : $(e)
    }

    function L() {
        function u(e) {
            r = e, s.source = e, f(t, function (t, n) {
                k.nextTick(function () {
                    e.promiseDispatch.apply(e, n)
                })
            }, void 0), t = void 0, n = void 0
        }

        var t = [], n = [], r, i = h(L.prototype), s = h(M.prototype);
        s.promiseDispatch = function (e, i, s) {
            var o = a(arguments);
            t ? (t.push(o), i === "when" && s[1] && n.push(s[1])) : k.nextTick(function () {
                r.promiseDispatch.apply(r, o)
            })
        }, s.valueOf = function () {
            if (t)return s;
            var e = D(r);
            return P(e) && (r = e), e
        }, s.inspect = function () {
            return r ? r.inspect() : {state: "pending"}
        };
        if (k.longStackSupport && e)try {
            throw new Error
        } catch (o) {
            s.stack = o.stack.substring(o.stack.indexOf("\n") + 1)
        }
        return i.promise = s, i.resolve = function (e) {
            if (r)return;
            u(k(e))
        }, i.fulfill = function (e) {
            if (r)return;
            u($(e))
        }, i.reject = function (e) {
            if (r)return;
            u(V(e))
        }, i.notify = function (e) {
            if (r)return;
            f(n, function (t, n) {
                k.nextTick(function () {
                    n(e)
                })
            }, void 0)
        }, i
    }

    function A(e) {
        if (typeof e != "function")throw new TypeError("resolver must be a function.");
        var t = L();
        try {
            e(t.resolve, t.reject, t.notify)
        } catch (n) {
            t.reject(n)
        }
        return t.promise
    }

    function O(e) {
        return A(function (t, n) {
            for (var r = 0, i = e.length; r < i; r++)k(e[r]).then(t, n)
        })
    }

    function M(e, t, n) {
        t === void 0 && (t = function (e) {
            return V(new Error("Promise does not support operation: " + e))
        }), n === void 0 && (n = function () {
            return {state: "unknown"}
        });
        var r = h(M.prototype);
        r.promiseDispatch = function (n, i, s) {
            var o;
            try {
                e[i] ? o = e[i].apply(r, s) : o = t.call(r, i, s)
            } catch (u) {
                o = V(u)
            }
            n && n(o)
        }, r.inspect = n;
        if (n) {
            var i = n();
            i.state === "rejected" && (r.exception = i.reason), r.valueOf = function () {
                var e = n();
                return e.state === "pending" || e.state === "rejected" ? r : e.value
            }
        }
        return r
    }

    function _(e, t, n, r) {
        return k(e).then(t, n, r)
    }

    function D(e) {
        if (P(e)) {
            var t = e.inspect();
            if (t.state === "fulfilled")return t.value
        }
        return e
    }

    function P(e) {
        return e instanceof M
    }

    function H(e) {
        return m(e) && typeof e.then == "function"
    }

    function B(e) {
        return P(e) && e.inspect().state === "pending"
    }

    function j(e) {
        return !P(e) || e.inspect().state === "fulfilled"
    }

    function F(e) {
        return P(e) && e.inspect().state === "rejected"
    }

    function z() {
        I.length = 0, q.length = 0, U || (U = !0)
    }

    function W(e, t) {
        if (!U)return;
        typeof process == "object" && typeof process.emit == "function" && k.nextTick.runAfter(function () {
            l(q, e) !== -1 && (process.emit("unhandledRejection", t, e), R.push(e))
        }), q.push(e), t && typeof t.stack != "undefined" ? I.push(t.stack) : I.push("(no stack) " + t)
    }

    function X(e) {
        if (!U)return;
        var t = l(q, e);
        t !== -1 && (typeof process == "object" && typeof process.emit == "function" && k.nextTick.runAfter(function () {
            var n = l(R, e);
            n !== -1 && (process.emit("rejectionHandled", I[t], e), R.splice(n, 1))
        }), q.splice(t, 1), I.splice(t, 1))
    }

    function V(e) {
        var t = M({
            when: function (t) {
                return t && X(this), t ? t(e) : this
            }
        }, function () {
            return this
        }, function () {
            return {state: "rejected", reason: e}
        });
        return W(t, e), t
    }

    function $(e) {
        return M({
            when: function () {
                return e
            }, get: function (t) {
                return e[t]
            }, set: function (t, n) {
                e[t] = n
            }, "delete": function (t) {
                delete e[t]
            }, post: function (t, n) {
                return t === null || t === void 0 ? e.apply(void 0, n) : e[t].apply(e, n)
            }, apply: function (t, n) {
                return e.apply(t, n)
            }, keys: function () {
                return d(e)
            }
        }, void 0, function () {
            return {state: "fulfilled", value: e}
        })
    }

    function J(e) {
        var t = L();
        return k.nextTick(function () {
            try {
                e.then(t.resolve, t.reject, t.notify)
            } catch (n) {
                t.reject(n)
            }
        }), t.promise
    }

    function K(e) {
        return M({
            isDef: function () {
            }
        }, function (n, r) {
            return tt(e, n, r)
        }, function () {
            return k(e).inspect()
        })
    }

    function Q(e, t, n) {
        return k(e).spread(t, n)
    }

    function G(e) {
        return function () {
            function t(e, t) {
                var s;
                if (typeof StopIteration == "undefined") {
                    try {
                        s = n[e](t)
                    } catch (o) {
                        return V(o)
                    }
                    return s.done ? k(s.value) : _(s.value, r, i)
                }
                try {
                    s = n[e](t)
                } catch (o) {
                    return g(o) ? k(o.value) : V(o)
                }
                return _(s, r, i)
            }

            var n = e.apply(this, arguments), r = t.bind(t, "next"), i = t.bind(t, "throw");
            return r()
        }
    }

    function Y(e) {
        k.done(k.async(e)())
    }

    function Z(e) {
        throw new y(e)
    }

    function et(e) {
        return function () {
            return Q([this, nt(arguments)], function (t, n) {
                return e.apply(t, n)
            })
        }
    }

    function tt(e, t, n) {
        return k(e).dispatch(t, n)
    }

    function nt(e) {
        return _(e, function (e) {
            var t = 0, n = L();
            return f(e, function (r, i, s) {
                var o;
                P(i) && (o = i.inspect()).state === "fulfilled" ? e[s] = o.value : (++t, _(i, function (r) {
                    e[s] = r, --t === 0 && n.resolve(e)
                }, n.reject, function (e) {
                    n.notify({index: s, value: e})
                }))
            }, void 0), t === 0 && n.resolve(e), n.promise
        })
    }

    function rt(e) {
        if (e.length === 0)return k.resolve();
        var t = k.defer(), n = 0;
        return f(e, function (r, i, s) {
            function u(e) {
                t.resolve(e)
            }

            function a() {
                n--, n === 0 && t.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))
            }

            function f(e) {
                t.notify({index: s, value: e})
            }

            var o = e[s];
            n++, _(o, u, a, f)
        }, undefined), t.promise
    }

    function it(e) {
        return _(e, function (e) {
            return e = c(e, k), _(nt(c(e, function (e) {
                return _(e, i, i)
            })), function () {
                return e
            })
        })
    }

    function st(e) {
        return k(e).allSettled()
    }

    function ot(e, t) {
        return k(e).then(void 0, void 0, t)
    }

    function ut(e, t) {
        return k(e).nodeify(t)
    }

    var e = !1;
    try {
        throw new Error
    } catch (t) {
        e = !!t.stack
    }
    var n = N(), r, i = function () {
    }, s = function () {
        function u() {
            var t, r;
            while (e.next)e = e.next, t = e.task, e.task = void 0, r = e.domain, r && (e.domain = void 0, r.enter()), a(t, r);
            while (o.length)t = o.pop(), a(t);
            n = !1
        }

        function a(e, t) {
            try {
                e()
            } catch (n) {
                if (i)throw t && t.exit(), setTimeout(u, 0), t && t.enter(), n;
                setTimeout(function () {
                    throw n
                }, 0)
            }
            t && t.exit()
        }

        var e = {task: void 0, next: null}, t = e, n = !1, r = void 0, i = !1, o = [];
        s = function (e) {
            t = t.next = {task: e, domain: i && process.domain, next: null}, n || (n = !0, r())
        };
        if (typeof process == "object" && process.toString() === "[object process]" && process.nextTick)i = !0, r = function () {
            process.nextTick(u)
        }; else if (typeof setImmediate == "function")typeof window != "undefined" ? r = setImmediate.bind(window, u) : r = function () {
            setImmediate(u)
        }; else if (typeof MessageChannel != "undefined") {
            var f = new MessageChannel;
            f.port1.onmessage = function () {
                r = l, f.port1.onmessage = u, u()
            };
            var l = function () {
                f.port2.postMessage(0)
            };
            r = function () {
                setTimeout(u, 0), l()
            }
        } else r = function () {
            setTimeout(u, 0)
        };
        return s.runAfter = function (e) {
            o.push(e), n || (n = !0, r())
        }, s
    }(), o = Function.call, a = u(Array.prototype.slice), f = u(Array.prototype.reduce || function (e, t) {
            var n = 0, r = this.length;
            if (arguments.length === 1)do {
                if (n in this) {
                    t = this[n++];
                    break
                }
                if (++n >= r)throw new TypeError
            } while (1);
            for (; n < r; n++)n in this && (t = e(t, this[n], n));
            return t
        }), l = u(Array.prototype.indexOf || function (e) {
            for (var t = 0; t < this.length; t++)if (this[t] === e)return t;
            return -1
        }), c = u(Array.prototype.map || function (e, t) {
            var n = this, r = [];
            return f(n, function (i, s, o) {
                r.push(e.call(t, s, o, n))
            }, void 0), r
        }), h = Object.create || function (e) {
            function t() {
            }

            return t.prototype = e, new t
        }, p = u(Object.prototype.hasOwnProperty), d = Object.keys || function (e) {
            var t = [];
            for (var n in e)p(e, n) && t.push(n);
            return t
        }, v = u(Object.prototype.toString), y;
    typeof ReturnValue != "undefined" ? y = ReturnValue : y = function (e) {
        this.value = e
    };
    var b = "From previous event:";
    k.resolve = k, k.nextTick = s, k.longStackSupport = !1, typeof process == "object" && process && process.env && process.env.Q_DEBUG && (k.longStackSupport = !0), k.defer = L, L.prototype.makeNodeResolver = function () {
        var e = this;
        return function (t, n) {
            t ? e.reject(t) : arguments.length > 2 ? e.resolve(a(arguments, 1)) : e.resolve(n)
        }
    }, k.Promise = A, k.promise = A, A.race = O, A.all = nt, A.reject = V, A.resolve = k, k.passByCopy = function (e) {
        return e
    }, M.prototype.passByCopy = function () {
        return this
    }, k.join = function (e, t) {
        return k(e).join(t)
    }, M.prototype.join = function (e) {
        return k([this, e]).spread(function (e, t) {
            if (e === t)return e;
            throw new Error("Can't join: not the same: " + e + " " + t)
        })
    }, k.race = O, M.prototype.race = function () {
        return this.then(k.race)
    }, k.makePromise = M, M.prototype.toString = function () {
        return "[object Promise]"
    }, M.prototype.then = function (e, t, n) {
        function o(t) {
            try {
                return typeof e == "function" ? e(t) : t
            } catch (n) {
                return V(n)
            }
        }

        function u(e) {
            if (typeof t == "function") {
                w(e, r);
                try {
                    return t(e)
                } catch (n) {
                    return V(n)
                }
            }
            return V(e)
        }

        function a(e) {
            return typeof n == "function" ? n(e) : e
        }

        var r = this, i = L(), s = !1;
        return k.nextTick(function () {
            r.promiseDispatch(function (e) {
                if (s)return;
                s = !0, i.resolve(o(e))
            }, "when", [function (e) {
                if (s)return;
                s = !0, i.resolve(u(e))
            }])
        }), r.promiseDispatch(void 0, "when", [void 0, function (e) {
            var t, n = !1;
            try {
                t = a(e)
            } catch (r) {
                n = !0;
                if (!k.onerror)throw r;
                k.onerror(r)
            }
            n || i.notify(t)
        }]), i.promise
    }, k.tap = function (e, t) {
        return k(e).tap(t)
    }, M.prototype.tap = function (e) {
        return e = k(e), this.then(function (t) {
            return e.fcall(t).thenResolve(t)
        })
    }, k.when = _, M.prototype.thenResolve = function (e) {
        return this.then(function () {
            return e
        })
    }, k.thenResolve = function (e, t) {
        return k(e).thenResolve(t)
    }, M.prototype.thenReject = function (e) {
        return this.then(function () {
            throw e
        })
    }, k.thenReject = function (e, t) {
        return k(e).thenReject(t)
    }, k.nearer = D, k.isPromise = P, k.isPromiseAlike = H, k.isPending = B, M.prototype.isPending = function () {
        return this.inspect().state === "pending"
    }, k.isFulfilled = j, M.prototype.isFulfilled = function () {
        return this.inspect().state === "fulfilled"
    }, k.isRejected = F, M.prototype.isRejected = function () {
        return this.inspect().state === "rejected"
    };
    var I = [], q = [], R = [], U = !0;
    k.resetUnhandledRejections = z, k.getUnhandledReasons = function () {
        return I.slice()
    }, k.stopUnhandledRejectionTracking = function () {
        z(), U = !1
    }, z(), k.reject = V, k.fulfill = $, k.master = K, k.spread = Q, M.prototype.spread = function (e, t) {
        return this.all().then(function (t) {
            return e.apply(void 0, t)
        }, t)
    }, k.async = G, k.spawn = Y, k["return"] = Z, k.promised = et, k.dispatch = tt, M.prototype.dispatch = function (e, t) {
        var n = this, r = L();
        return k.nextTick(function () {
            n.promiseDispatch(r.resolve, e, t)
        }), r.promise
    }, k.get = function (e, t) {
        return k(e).dispatch("get", [t])
    }, M.prototype.get = function (e) {
        return this.dispatch("get", [e])
    }, k.set = function (e, t, n) {
        return k(e).dispatch("set", [t, n])
    }, M.prototype.set = function (e, t) {
        return this.dispatch("set", [e, t])
    }, k.del = k["delete"] = function (e, t) {
        return k(e).dispatch("delete", [t])
    }, M.prototype.del = M.prototype["delete"] = function (e) {
        return this.dispatch("delete", [e])
    }, k.mapply = k.post = function (e, t, n) {
        return k(e).dispatch("post", [t, n])
    }, M.prototype.mapply = M.prototype.post = function (e, t) {
        return this.dispatch("post", [e, t])
    }, k.send = k.mcall = k.invoke = function (e, t) {
        return k(e).dispatch("post", [t, a(arguments, 2)])
    }, M.prototype.send = M.prototype.mcall = M.prototype.invoke = function (e) {
        return this.dispatch("post", [e, a(arguments, 1)])
    }, k.fapply = function (e, t) {
        return k(e).dispatch("apply", [void 0, t])
    }, M.prototype.fapply = function (e) {
        return this.dispatch("apply", [void 0, e])
    }, k["try"] = k.fcall = function (e) {
        return k(e).dispatch("apply", [void 0, a(arguments, 1)])
    }, M.prototype.fcall = function () {
        return this.dispatch("apply", [void 0, a(arguments)])
    }, k.fbind = function (e) {
        var t = k(e), n = a(arguments, 1);
        return function () {
            return t.dispatch("apply", [this, n.concat(a(arguments))])
        }
    }, M.prototype.fbind = function () {
        var e = this, t = a(arguments);
        return function () {
            return e.dispatch("apply", [this, t.concat(a(arguments))])
        }
    }, k.keys = function (e) {
        return k(e).dispatch("keys", [])
    }, M.prototype.keys = function () {
        return this.dispatch("keys", [])
    }, k.all = nt, M.prototype.all = function () {
        return nt(this)
    }, k.any = rt, M.prototype.any = function () {
        return rt(this)
    }, k.allResolved = C(it, "allResolved", "allSettled"), M.prototype.allResolved = function () {
        return it(this)
    }, k.allSettled = st, M.prototype.allSettled = function () {
        return this.then(function (e) {
            return nt(c(e, function (e) {
                function t() {
                    return e.inspect()
                }

                return e = k(e), e.then(t, t)
            }))
        })
    }, k.fail = k["catch"] = function (e, t) {
        return k(e).then(void 0, t)
    }, M.prototype.fail = M.prototype["catch"] = function (e) {
        return this.then(void 0, e)
    }, k.progress = ot, M.prototype.progress = function (e) {
        return this.then(void 0, void 0, e)
    }, k.fin = k["finally"] = function (e, t) {
        return k(e)["finally"](t)
    }, M.prototype.fin = M.prototype["finally"] = function (e) {
        return e = k(e), this.then(function (t) {
            return e.fcall().then(function () {
                return t
            })
        }, function (t) {
            return e.fcall().then(function () {
                throw t
            })
        })
    }, k.done = function (e, t, n, r) {
        return k(e).done(t, n, r)
    }, M.prototype.done = function (e, t, n) {
        var r = function (e) {
            k.nextTick(function () {
                w(e, i);
                if (!k.onerror)throw e;
                k.onerror(e)
            })
        }, i = e || t || n ? this.then(e, t, n) : this;
        typeof process == "object" && process && process.domain && (r = process.domain.bind(r)), i.then(void 0, r)
    }, k.timeout = function (e, t, n) {
        return k(e).timeout(t, n)
    }, M.prototype.timeout = function (e, t) {
        var n = L(), r = setTimeout(function () {
            if (!t || "string" == typeof t)t = new Error(t || "Timed out after " + e + " ms"), t.code = "ETIMEDOUT";
            n.reject(t)
        }, e);
        return this.then(function (e) {
            clearTimeout(r), n.resolve(e)
        }, function (e) {
            clearTimeout(r), n.reject(e)
        }, n.notify), n.promise
    }, k.delay = function (e, t) {
        return t === void 0 && (t = e, e = void 0), k(e).delay(t)
    }, M.prototype.delay = function (e) {
        return this.then(function (t) {
            var n = L();
            return setTimeout(function () {
                n.resolve(t)
            }, e), n.promise
        })
    }, k.nfapply = function (e, t) {
        return k(e).nfapply(t)
    }, M.prototype.nfapply = function (e) {
        var t = L(), n = a(e);
        return n.push(t.makeNodeResolver()), this.fapply(n).fail(t.reject), t.promise
    }, k.nfcall = function (e) {
        var t = a(arguments, 1);
        return k(e).nfapply(t)
    }, M.prototype.nfcall = function () {
        var e = a(arguments), t = L();
        return e.push(t.makeNodeResolver()), this.fapply(e).fail(t.reject), t.promise
    }, k.nfbind = k.denodeify = function (e) {
        var t = a(arguments, 1);
        return function () {
            var n = t.concat(a(arguments)), r = L();
            return n.push(r.makeNodeResolver()), k(e).fapply(n).fail(r.reject), r.promise
        }
    }, M.prototype.nfbind = M.prototype.denodeify = function () {
        var e = a(arguments);
        return e.unshift(this), k.denodeify.apply(void 0, e)
    }, k.nbind = function (e, t) {
        var n = a(arguments, 2);
        return function () {
            function s() {
                return e.apply(t, arguments)
            }

            var r = n.concat(a(arguments)), i = L();
            return r.push(i.makeNodeResolver()), k(s).fapply(r).fail(i.reject), i.promise
        }
    }, M.prototype.nbind = function () {
        var e = a(arguments, 0);
        return e.unshift(this), k.nbind.apply(void 0, e)
    }, k.nmapply = k.npost = function (e, t, n) {
        return k(e).npost(t, n)
    }, M.prototype.nmapply = M.prototype.npost = function (e, t) {
        var n = a(t || []), r = L();
        return n.push(r.makeNodeResolver()), this.dispatch("post", [e, n]).fail(r.reject), r.promise
    }, k.nsend = k.nmcall = k.ninvoke = function (e, t) {
        var n = a(arguments, 2), r = L();
        return n.push(r.makeNodeResolver()), k(e).dispatch("post", [t, n]).fail(r.reject), r.promise
    }, M.prototype.nsend = M.prototype.nmcall = M.prototype.ninvoke = function (e) {
        var t = a(arguments, 1), n = L();
        return t.push(n.makeNodeResolver()), this.dispatch("post", [e, t]).fail(n.reject), n.promise
    }, k.nodeify = ut, M.prototype.nodeify = function (e) {
        if (!e)return this;
        this.then(function (t) {
            k.nextTick(function () {
                e(null, t)
            })
        }, function (t) {
            k.nextTick(function () {
                e(t)
            })
        })
    }, k.noConflict = function () {
        throw new Error("Q.noConflict only works when Q is used as a global")
    };
    var at = N();
    return k
});