/**
 * Created by Administrator on 2017/9/12.
 */
require = function e(t, n, r) {
    function i(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = "function" == typeof require && require;
                if (!u && a)return a(o, !0);
                if (s)return s(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {exports: {}};
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return i(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }

    for (var s = "function" == typeof require && require, o = 0; o < r.length; o++)i(r[o]);
    return i
}({
    "common/components/qtool": [function (e, t, n) {
        var r = r || {};
        r.xdomain = r.xdomain || function () {
                function e(e, t) {
                    if (r || o(), "object" == typeof e)for (n in e)t || p(n), h(n, e[n]); else"function" == typeof e && (n = "xdomainDefaultKey", h(n, e))
                }

                function t(e, t, n) {
                    var r = "";
                    r = n ? n + "||" + t : t, window.postMessage ? e.postMessage(r, "*") : e.name = r
                }

                var n = "", r = !1, i = 0, s = 0, o = function () {
                }, u = [], a = function () {
                }, f = function () {
                }, l = function (e) {
                }, c = {}, h = function (e, t) {
                }, p = function (e) {
                }, d = function (e) {
                    l(e.data)
                };
                return o = function () {
                    r = !0, u = [], c = {}, window.postMessage ? window.addEventListener ? (window.removeEventListener("message", d, !1), window.addEventListener("message", d, !1)) : window.attachEvent && (window.detachEvent("onmessage", d), window.attachEvent("onmessage", d)) : (window.name = "", i && clearTimeout(i), i = setTimeout(function () {
                        a()
                    }, 0), s && clearTimeout(s), s = setTimeout(function () {
                        f()
                    }, 0))
                }, a = function () {
                    "" !== window.name && (u.push(window.name), window.name = ""), i = setTimeout(function () {
                        a()
                    }, 100)
                }, f = function () {
                    u.length && l(u.shift()), s = setTimeout(function () {
                        f()
                    }, 100)
                }, l = function (e) {
                    var t = e.split("||"), n = "", r = "";
                    t[1] ? (n = t[0], r = t[1]) : (n = "xdomainDefaultKey", r = t[0]), c[n] && $.each(c[n], function (e, t) {
                        t(r)
                    })
                }, h = function (e, t) {
                    c[e] ? c[e].push(t) : c[e] = [t]
                }, p = function (e) {
                    delete c[e]
                }, {init: o, listen: e, sendMessage: t}
            }(), $.extend(!0, r, {
            getQueryString: function (e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), n = window.location.search.substr(1).match(t);
                return null !== n ? unescape(n[2]) : null
            }, htmlEncode: function (e) {
                var t = document.createElement("div"), n = document.createTextNode(e);
                return t.appendChild(n), t.innerHTML
            }, htmlDecode: function (e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.innerText || t.textContent
            }, subString: function (e, t) {
                return e.length <= t ? e : e.substr(0, t) + "..."
            }, setTextMaxLen: function (e, t) {
                t = $.extend({
                    maxlength: 0, onkeypress: function () {
                    }, onkeydown: function () {
                    }, onkeyup: function () {
                    }, showlimit: function () {
                    }, unchkkeys: /(8)|(13)|(16)|(17)|(18)/
                }, t), e.each(function () {
                    var e = $(this), n = t.maxlength || parseInt(e.attr("maxlength"));
                    e.data("maxsize", n), e.off("keypress.restrict").on("keypress.restrict", function (n) {
                        var r = n.keyCode || n.charCode, i = parseInt(e.val().length), s = e.data("maxsize");
                        return !t.unchkkeys.test(r) && i >= s ? (n.preventDefault && n.preventDefault(), !1) : (t.onkeypress.call(e, n), void t.showlimit.call(e, s - i))
                    }), e.off("keyup.restrict").on("keyup.restrict", function (n) {
                        var r = e.val(), i = parseInt(r.length), s = e.data("maxsize");
                        if (i > s) {
                            var o = r.substring(0, s);
                            e.val(o), i = s
                        }
                        t.onkeyup.call(e, n), t.showlimit.call(e, s - i)
                    })
                })
            }, locationhash: function (e) {
                return e ? (location.hash = e) && !1 : location.hash.replace("#", "")
            }, ns: function (e, t) {
                if (e && t) {
                    var n, r, i = String(e).split("."), s = window;
                    if (i.length > 0)for (var o = 0; o < i.length; o++)r = i[o], s = !(r in s) && (s[r] = {}) || s[r], !o && (n = s);
                    return $.isPlainObject(t) && $.extend(s, t), n
                }
            }, template: function () {
                var e = Array.prototype.shift.call(arguments);
                return "object" != typeof arguments[0] || $.isFunction(arguments[0]) ? $.each(arguments, function () {
                    e = e.replace(/{.*?}/, this)
                }) && e.replace(/{.*?}/g, "") : $.each(arguments[0], function (t, n) {
                    e = e.replace(new RegExp("{" + t + "}", "g"), this)
                }) && e.replace(/{.*?}/g, "")
            }, trim: $.trim, extend: function () {
                $.extend.apply(this, arguments)
            }, cursorPosition: {
                get: function (e) {
                    e = e[0];
                    var t = {text: "", start: 0, end: 0};
                    if (e.setSelectionRange)e.focus(), t.start = e.selectionStart, t.end = e.selectionEnd, t.text = t.start != t.end ? e.value.substring(t.start, t.end) : ""; else if (document.selection) {
                        e.focus();
                        var n, r = document.selection.createRange(), i = document.body.createTextRange();
                        for (i.moveToElementText(e), t.text = r.text, t.bookmark = r.getBookmark(), n = 0; i.compareEndPoints("StartToStart", r) < 0 && 0 !== r.moveStart("character", -1); n++)"\r" == e.value.charAt(n) && n++;
                        t.start = n, t.end = t.text.length + t.start
                    }
                    return t
                }, set: function (e, t) {
                    e = e.nodeType ? e : e[0];
                    var n;
                    t || alert("You must get cursor position first."), e.focus(), e.setSelectionRange ? e.setSelectionRange(t.start, t.end) : e.createTextRange && (n = e.createTextRange(), e.value.length === t.start ? (n.collapse(!1), n.select()) : (n.moveToBookmark(t.bookmark), n.select()))
                }, add: function (e, t, n) {
                    e = e[0];
                    var r, i, s, o, u, a;
                    this.set(e, t), e.setSelectionRange ? (r = e.value, i = r.substring(0, t.start) + n + r.substring(t.end), o = u = t.start + n.length, a = e.scrollTop, e.value = i, e.scrollTop != a && (e.scrollTop = a), e.setSelectionRange(o, u)) : e.createTextRange && (s = document.selection.createRange(), s.text = n, s.setEndPoint("StartToEnd", s), s.select())
                }
            }, throttle: function (e, t) {
                var n = null;
                return function () {
                    var r = this, i = arguments;
                    clearTimeout(n), n = setTimeout(function () {
                        e.apply(r, i)
                    }, t)
                }
            }, setWinboxFlex: function () {
                r.flexCallback = r.throttle(function () {
                    $.each(r.winbox.fn.window_list, function (e, t) {
                        this.resizeMask(), this.reposBox(e)
                    })
                }, 200), $(window).on("scroll resize", r.flexCallback)
            }, unsetWinboxFlex: function () {
                $(window).off("scroll resize", r.flexCallback), r.flexCallback = $.noop
            }
        }), t.exports = r
    }, {}], "common/components/slider": [function (e, t, n) {
        var r = null, i = function (e) {
            this._setConfig(e), this._initElements(), this._bindEvents()
        };
        i.prototype = {
            constructor: i,
            _index: 0,
            config: {
                container: "#slider",
                picBox: "",
                picList: "",
                nav: !1,
                navContainer: "",
                autoRun: !1,
                autoRunTime: 3e3,
                picListView: 1,
                step: 1,
                prevTopBtn: ".prevTop",
                nextTopBtn: ".nextTop",
                prevBtn: ".prev",
                nextBtn: ".next",
                delay: 30,
                sliderBefore: function () {
                },
                sliderAfter: function () {
                }
            },
            _setConfig: function (e) {
                var e = $.extend({}, this.config, e);
                this.config = e
            },
            _initElements: function () {
                var e = this.config;
                this.container = $(e.container), this._initPanels(), this._initBtns()
            },
            _initPanels: function () {
                var e = this.config;
                this.picBox = this.container.find(e.picBox), this.picList = this.container.find(e.picList)
            },
            _initBtns: function () {
                var e = this.config;
                this.prevTopBtn = this.container.find(e.prevTopBtn), this.nextTopBtn = this.container.find(e.nextTopBtn), this.prevBtn = this.container.find(e.prevBtn), this.nextBtn = this.container.find(e.nextBtn)
            },
            _bindEvents: function () {
                var e = this;
                e.picBox_ul = e.picBox.find("ul"), e.picList_ul = e.picList.find("ul"), e.picBox_lis = e.picBox.find("li"), e.picList_lis = e.picList.find("li"), e.len1 = e.picBox_lis.length, e.len2 = e.picList_lis.length, "function" == typeof this.config.sliderBefore && this.config.sliderBefore(), e._createNavList(), e.nextTopBtn.on("click", function () {
                    e._moveLeft()
                }), e.prevTopBtn.on("click", function () {
                    e._moveRight()
                }), e._autoRun(), e._clickChangeNavList(), e.picBox_lis.find("a.slider-link").hover(function () {
                    e._clearTimer()
                }, function () {
                    e._autoRun()
                })
            },
            _moveLeft: function () {
                this._index++, 1 == this.config.step ? this._index = this._index == this.len1 ? 0 : this._index : this._index = this._index == Math.ceil(this.len1 / this.config.step) ? 0 : this._index, this._change(), this._changeNavList()
            },
            _moveRight: function () {
                this._index--, 1 == this.config.step ? this._index = this._index == -1 ? this.len1 - 1 : this._index : this._index = this._index == -1 ? Math.floor((this.len1 - 1) / this.config.step) : this._index, this._change(), this._changeNavList()
            },
            _change: function () {
                var e = this.picBox_lis.first().outerWidth(!0);
                this.picBox_ul.css("width", e * this.len1 + "px"), this.picList_lis && this.picList_lis.get && this.picList_lis.get(0) && this.picList_lis.get(0).offsetWidth, this.picList.length && (parseInt(this.picList.get(0).offsetWidth / this.config.picListView), this.picList_ul.css("width", e * this.len1 + "px"));
                if (this._animate(this.picBox_ul, {left: -this._index * e * this.config.step}), "function" == typeof this.config.sliderAfter) {
                    var t = this._index - 1, n = this._index;
                    this.config.sliderAfter(t, n)
                }
            },
            _animate: function (e, t) {
                var n = this;
                e.timer && clearInterval(e.timer), e.timer = setInterval(function () {
                    for (var r in t) {
                        var i = parseInt(e.css(r));
                        i = i ? i : 0;
                        var s = (t[r] - i) / n.config.picListView;
                        s = s > 0 ? Math.ceil(s) : Math.floor(s), e.css(r, i + s + "px"), i == t[r] && clearInterval(e.timer)
                    }
                }, n.config.delay)
            },
            _clearTimer: function () {
                clearInterval(r)
            },
            _autoRun: function () {
                var e = this;
                e.config.autoRun && (e._clearTimer(), r = setInterval(function () {
                    e._moveLeft()
                }, e.config.autoRunTime))
            },
            _createNavList: function () {
                if (this.config.nav) {
                    for (var e = this.container.find(this.config.navContainer), t = "", n = 0; n < this.len1; n++)t += 0 == n ? '<span class="cur"></span>' : "<span></span>";
                    e.html(t)
                }
            },
            _changeNavList: function () {
                if (this.config.nav) {
                    var e = this.container.find(this.config.navContainer);
                    e.find("span").eq(this._index).addClass("cur").siblings().removeClass("cur")
                }
            },
            _clickChangeNavList: function () {
                var e = this;
                e.config.nav && e.container.find(e.config.navContainer).find("span").on("click", function () {
                    e._clearTimer();
                    var t = $(this), n = t.index();
                    e._index = n, e._changeNavList(), e._change()
                })
            }
        }, t.exports = i
    }, {}], "common/components/winbox": [function (e, t, n) {
        !function (e, r) {
            "object" == typeof n ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : e.eventUtil = r()
        }(this, function () {
            "use strict";
            var e = this || window, t = function (e) {
                function t(t, r) {
                    r = r || {}, this.tpl = t, this.prefix = r.prefix || "_wm_", this.suffix = r.suffix || "_message_", this.width = r.width, this.height = r.height, this.top = r.top, this.left = r.left, this.needmask = null == r.needmask || r.needmask, this.events = e.extend({}, {
                        "click|.cancel": "close",
                        "click|.confirm": "close"
                    }, r.events), this.id = n.push(this) - 1
                }

                var n = [], r = 1e4, i = '<div style="width:100%;height:100%;position:fixed;left:0;top:0;background:#000;opacity:0.4;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=40);z-index:100;"><iframe src="about:blank" style="z-index:-1;width:100%;height:100%;opacity:0;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);" allowtransparency="true" frameborder=0></iframe></div>';
                t.prototype = {
                    showMessage: function () {
                        return this._open(), this
                    }, close: function () {
                        return this._close(), !1
                    }, closeAllBox: function () {
                        return this._close(!0), !1
                    }, _open: function () {
                        r++;
                        var e = this.getMask(this.needmask);
                        this.dom = this._create(e), this.bindEvents(this.events)
                    }, _close: function () {
                        r--;
                        var e = 0;
                        e = n[this.id], e.dom && e.dom.hide(), e.dom && setTimeout(function () {
                            e.dom.remove()
                        }, 500)
                    }, getMask: function (e) {
                        return e ? i : ""
                    }, bindEvents: function (t) {
                        var n = this, r = n.dom;
                        e.each(t, function (t, i) {
                            var s = t.split("|"), o = s[0], u = s[1];
                            r.on(o, u, function () {
                                e.isFunction(i) ? i.apply(n, arguments) : e.isFunction(n[i]) && n[i].apply(n, arguments)
                            })
                        })
                    }, _create: function (t) {
                        var n, i = e('<div style="position:fixed;">'), s = e(this.tpl);
                        return s.length || (s = e("<div>" + this.tpl + "</div>")), i.css({
                            position: "fixed",
                            zIndex: r
                        }).attr("id", this.prefix + r), s.css({
                            position: "fixed",
                            zIndex: 200,
                            width: this.width || "auto",
                            height: this.height || "auto"
                        }).attr("id", this.suffix + this.id).addClass("j-winbox-content"), t && (n = e(t), i.append(n)), i.append(s).appendTo(e("body")), s.css({
                            "margin-left": void 0 !== this.left ? 0 : -parseInt(s.outerWidth()) / 2,
                            "margin-top": void 0 !== this.top ? 0 : -parseInt(s.outerHeight()) / 2,
                            left: void 0 !== this.left ? this.left : "50%",
                            top: void 0 !== this.top ? this.top : "50%"
                        }), i
                    }
                };
                var s = function (e, n) {
                    return new t(e, n)
                };
                return s
            }(e.$);
            return t
        })
    }, {}], "common/services/api": [function (e, t, n) {
        (function (n) {
            var r = "undefined" != typeof window ? window.Q : "undefined" != typeof n ? n.Q : null, i = "undefined" != typeof window ? window.jQuery : "undefined" != typeof n ? n.jQuery : null, s = 0 != e("./sniffer").msie, o = {}, u = {}, a = 1, f = {uriPrefix: "/api/"}, l = function (e, t) {
                return e = e || "IDISUNDEFINED", this instanceof l ? (this.id = e, this._fn_before = [], this._fn_afterSuccess = [], this._fn_afterFail = [], void (this.opts = t ? i.extend({}, f, t) : f)) : (o[e] || (o[e] = new l(e, t)), o[e])
            };
            l.ERROR_TYPE = {
                APP: "appbiz",
                NETWORK: "network",
                TIMEOUT: "timeout",
                ABORT: "abort",
                PARSERERROR: "parsererror"
            };
            var c = function (e, t) {
                return "undefined" == typeof t && "undefined" != typeof e && (t = e, e = l.ERROR_TYPE.APP), t = t || {}, {
                    type: e || l.ERROR_TYPE.APP,
                    code: t.code || t.errno,
                    message: t.message || t.errmsg || "Nonexistent errmsg"
                }
            }, h = function (e, t) {
                "undefined" != typeof u[e] && i.isFunction(t) && (u[e].deferred.forEach(function (e) {
                    t(e)
                }), delete u[e])
            };
            l.prototype.reset = function () {
                this._fn_before = [], this._fn_afterSuccess = [], this._fn_afterFail = []
            };
            var p = function (e, t, n, o) {
                var f = r.defer();
                return this._fn_before.reduce(r.when, r("")).then(function () {
                    /^https?:\/\//.test(t) || ("/" == t.charAt(0) && (t = t.substr(1)), o.uriPrefix && (t = o.uriPrefix + t));
                    var r = "json", p = {
                        url: t,
                        dataType: r,
                        method: "post" == e ? "post" : "get",
                        data: n,
                        timeout: 5e3,
                        xhrFields: {withCredentials: !0}
                    };
                    i.extend(p, o), "get" == p.method && "undefined" == typeof p.cache && s && (p.cache = !1);
                    var v = JSON.stringify(p);
                    o.requestCombine || (v = "uniq_" + a++), "undefined" == typeof u[v] ? (u[v] = {deferred: []}, u[v].deferred.push(f), i.ajax(p).then(function (e, t) {
                        e && 0 === e.errno ? h(v, function (t) {
                            t.resolve(e.data)
                        }) : e && !e.hasOwnProperty("errno") ? h(v, function (t) {
                            t.resolve(e)
                        }) : h(v, function (t) {
                            t.reject(c(e))
                        })
                    }, function (e, t, n) {
                        var r, i = {errno: e.status, errmsg: e.statusText};
                        switch (t) {
                            case"timeout":
                                r = l.ERROR_TYPE.TIMEOUT;
                                break;
                            case"abort":
                                r = l.ERROR_TYPE.ABORT;
                                break;
                            case"parsererror":
                                r = l.ERROR_TYPE.PARSERERROR;
                                break;
                            default:
                                r = l.ERROR_TYPE.NETWORK
                        }
                        h(v, function (e) {
                            e.reject(c(r, i))
                        })
                    })) : u[v].deferred.push(f)
                }, function (e) {
                    f.reject(c(e))
                }).fail(function (e) {
                    console.warn("Exception:", e)
                }), f.promise
            };
            ["before", "afterSuccess", "afterFail"].forEach(function (e) {
                l.prototype[e] = function (t) {
                    t && i.isFunction(t) && this["_fn_" + e].push(t)
                }
            }), ["get", "post"].forEach(function (e) {
                l.prototype[e] = function (t, n, s) {
                    var o = {requestCombine: "get" == e}, u = {};
                    s = i.extend({}, o, this.opts, s || {}), n = i.extend({}, u, n || {});
                    var a = r.defer(), f = this;
                    return p.bind(this)(e, t, n, s).then(function (e) {
                        f._fn_afterSuccess.reduce(r.when, r(e)).then(function (e) {
                            a.resolve(e)
                        }, function (e) {
                            a.reject(e)
                        })
                    }, function (e) {
                        f._fn_afterFail.reduce(r.when, r(e)).then(function (e) {
                            a.reject(e)
                        }, function (e) {
                        })
                    }).fail(function (e) {
                        console.error(e)
                    }), a.promise
                }
            }), t.exports = l
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./sniffer": "common/services/sniffer"}], "common/services/event": [function (e, t, n) {
        (function (e) {
            var n = "undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null, r = {};
            t.exports = {
                on: n(r).on.bind(n(r)),
                off: n(r).off.bind(n(r)),
                trigger: n(r).trigger.bind(n(r)),
                one: n(r).one.bind(n(r))
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}], "common/services/sethome": [function (e, t, n) {
        (function (e) {
            var n = ("undefined" != typeof window ? window.jQuery : "undefined" != typeof e ? e.jQuery : null, function (e, t) {
                e = e || "http://wan.360.cn", t = t || "360\u6e38\u620f\u4e2d\u5fc3";
                var n = navigator.userAgent.toLowerCase().indexOf("mac") != -1 ? "Command/Cmd" : "Ctrl", r = "\u8bf7\u5c1d\u8bd5\u540c\u65f6\u6309\u4e0b\u952e\u76d8" + n + "\u952e\u548c\u201cd\u201d\u952e\u6536\u85cf\u5f53\u524d\u9875\u3002";
                try {
                    if (document.all)try {
                        window.external.toString(), window.alert(r)
                    } catch (i) {
                        try {
                            window.external.addFavorite(e, t)
                        } catch (i) {
                            window.external.addToFavoritesBar(e, t)
                        }
                    } else window.sidebar ? window.sidebar.addPanel(t, e, "") : alert(r)
                } catch (i) {
                    alert(r)
                }
            }), r = function (e) {
                if (document.all)document.body.style.behavior = "url(#default#homepage)", document.body.setHomePage(e || "http://wan.360.cn"); else if (window.sidebar) {
                    if (window.netscape) {
                        try {
                            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                        } catch (t) {
                            alert("\u6b64\u64cd\u4f5c\u88ab\u6d4f\u89c8\u5668\u62d2\u7edd\uff01\n\u8bf7\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165\u201cabout:config\u201d\u5e76\u56de\u8f66\n\u7136\u540e\u5c06 [signed.applets.codebase_principal_support]\u7684\u503c\u8bbe\u7f6e\u4e3a\u2019true\u2019,\u53cc\u51fb\u5373\u53ef\u3002")
                        }
                        var n = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
                        n.setCharPref("browser.startup.homepage", e || "http://wan.360.cn")
                    }
                } else alert("\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5f53\u524d\u64cd\u4f5c\u3002\uff08\u8bf7\u624b\u52a8\u8fdb\u884c\u201c\u8bbe\u4e3a\u9996\u9875\u201d\uff09")
            };
            t.exports = {addFavorite: n, setHomePage: r}
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}], "common/services/sniffer": [function (e, t, n) {
        var r, i, s = {}, o = window.chrome && window.chrome.app && window.chrome.app.runtime, u = !o && window.history && window.history.pushState, a = function () {
            if ("number" == typeof window.document.documentMode)return window.document.documentMode;
            for (var e = function (e) {
                if (e >= 10)return !1;
                var t = window.document.createElement("b");
                return t.innerHTML = "<!--[if IE " + (e || "") + "]><i></i><![endif]-->", 1 === t.getElementsByTagName("i").length
            }, t = !1, n = 9; n > 5; n--)if (e(n)) {
                t = n;
                break
            }
            return t
        }(), f = parseInt((/android (\d+)/.exec((window.navigator || {}).userAgent.toLowerCase()) || [])[1], 10), l = /Boxee/i.test((window.navigator || {}).userAgent), c = window.document || {}, h = /^(Moz|webkit|ms)(?=[A-Z])/, p = c.body && c.body.style, d = !1, v = !1;
        if (p) {
            for (var m in p)if (i = h.exec(m)) {
                r = i[0], r = r.substr(0, 1).toUpperCase() + r.substr(1);
                break
            }
            r || (r = "WebkitOpacity" in p && "webkit"), d = "transition" in p || r + "Transition" in p, v = "animation" in p || r + "Animation" in p, !f || d && v || (d = isString(p.webkitTransition), v = isString(p.webkitAnimation))
        }
        t.exports = {
            history: !(!u || f < 4 || l), hasEvent: function (e) {
                if ("input" === e && a <= 11)return !1;
                if ("undefined" == typeof s[e]) {
                    var t = c.createElement("div");
                    s[e] = "on" + e in t
                }
                return s[e]
            }, vendorPrefix: r, transitions: d, animations: v, android: f, msie: a
        }
    }, {}]
}, {}, []);