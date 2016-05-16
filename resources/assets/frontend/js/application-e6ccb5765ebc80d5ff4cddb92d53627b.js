! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = Q.type(e);
        return "function" === n || Q.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (Q.isFunction(t)) return Q.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return Q.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (se.test(t)) return Q.filter(t, e, n);
            t = Q.filter(t, e)
        }
        return Q.grep(e, function(e) {
            return G.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = he[e] = {};
        return Q.each(e.match(pe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        X.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Q.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Q.expando + s.uid++
    }

    function d(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Ne, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ae.test(n) ? Q.parseJSON(n) : n
                } catch (i) {}
                ve.set(e, t, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function u() {
        return !1
    }

    function c() {
        try {
            return X.activeElement
        } catch (e) {}
    }

    function f(e, t) {
        return Q.nodeName(e, "table") && Q.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = De.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++) $e.set(e[n], "globalEval", !t || $e.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, a, s, d, l;
        if (1 === t.nodeType) {
            if ($e.hasData(e) && (o = $e.access(e), a = $e.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) Q.event.add(t, i, l[i][n])
            }
            ve.hasData(e) && (s = ve.access(e), d = Q.extend({}, s), ve.set(t, d))
        }
    }

    function $(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Q.nodeName(e, t) ? Q.merge([e], n) : n
    }

    function v(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && xe.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function A(t, n) {
        var r, i = Q(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Q.css(i[0], "display");
        return i.detach(), o
    }

    function N(e) {
        var t = X,
            n = qe[e];
        return n || (n = A(e, t), "none" !== n && n || (je = (je || Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = je[0].contentDocument, t.write(), t.close(), n = A(e, t), je.detach()), qe[e] = n), n
    }

    function y(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ze(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Q.contains(e.ownerDocument, e) || (a = Q.style(e, t)), Be.test(a) && Ue.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function b(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function w(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ye.length; i--;)
            if (t = Ye[i] + n, t in e) return t;
        return r
    }

    function x(e, t, n) {
        var r = Ve.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function C(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += Q.css(e, n + be[o], !0, i)), r ? ("content" === n && (a -= Q.css(e, "padding" + be[o], !0, i)), "margin" !== n && (a -= Q.css(e, "border" + be[o] + "Width", !0, i))) : (a += Q.css(e, "padding" + be[o], !0, i), "padding" !== n && (a += Q.css(e, "border" + be[o] + "Width", !0, i)));
        return a
    }

    function S(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ze(e),
            a = "border-box" === Q.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = y(e, t, o), (0 > i || null == i) && (i = e.style[t]), Be.test(i)) return i;
            r = a && (Z.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + C(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function E(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = $e.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && we(r) && (o[a] = $e.access(r, "olddisplay", N(r.nodeName)))) : (i = we(r), "none" === n && i || $e.set(r, "olddisplay", i ? n : Q.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function _(e, t, n, r, i) {
        return new _.prototype.init(e, t, n, r, i)
    }

    function k() {
        return setTimeout(function() {
            Ze = void 0
        }), Ze = Q.now()
    }

    function T(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = be[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function I(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function P(e, t, n) {
        var r, i, o, a, s, d, l, u, c = this,
            f = {},
            p = e.style,
            h = e.nodeType && we(e),
            g = $e.get(e, "fxshow");
        n.queue || (s = Q._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, d = s.empty.fire, s.empty.fire = function() {
            s.unqueued || d()
        }), s.unqueued++, c.always(function() {
            c.always(function() {
                s.unqueued--, Q.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = Q.css(e, "display"), u = "none" === l ? $e.get(e, "olddisplay") || N(e.nodeName) : l, "inline" === u && "none" === Q.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], Je.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0
                }
                f[r] = g && g[r] || Q.style(e, r)
            } else l = void 0;
        if (Q.isEmptyObject(f)) "inline" === ("none" === l ? N(e.nodeName) : l) && (p.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = $e.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Q(e).show() : c.done(function() {
                Q(e).hide()
            }), c.done(function() {
                var t;
                $e.remove(e, "fxshow");
                for (t in f) Q.style(e, t, f[t])
            });
            for (r in f) a = I(h ? g[r] : 0, r, c), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function F(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = Q.camelCase(n), i = t[r], o = e[n], Q.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = Q.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function M(e, t, n) {
        var r, i, o = 0,
            a = tt.length,
            s = Q.Deferred().always(function() {
                delete d.elem
            }),
            d = function() {
                if (i) return !1;
                for (var t = Ze || k(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, d = l.tweens.length; d > a; a++) l.tweens[a].run(o);
                return s.notifyWith(e, [l, o, n]), 1 > o && d ? n : (s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: Q.extend({}, t),
                opts: Q.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ze || k(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Q.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                }
            }),
            u = l.props;
        for (F(u, l.opts.specialEasing); a > o; o++)
            if (r = tt[o].call(l, e, u, l.opts)) return r;
        return Q.map(u, I, l), Q.isFunction(l.opts.start) && l.opts.start.call(e, l), Q.fx.timer(Q.extend(d, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function O(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(pe) || [];
            if (Q.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function D(e, t, n, r) {
        function i(s) {
            var d;
            return o[s] = !0, Q.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(d = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), d
        }
        var o = {},
            a = e === At;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function R(e, t) {
        var n, r, i = Q.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Q.extend(!0, e, r), e
    }

    function L(e, t, n) {
        for (var r, i, o, a, s = e.contents, d = e.dataTypes;
            "*" === d[0];) d.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    d.unshift(i);
                    break
                }
        if (d[0] in n) o = d[0];
        else {
            for (i in n) {
                if (!d[0] || e.converters[i + " " + d[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== d[0] && d.unshift(o), n[o]) : void 0
    }

    function j(e, t, n, r) {
        var i, o, a, s, d, l = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !d && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), d = o, o = u.shift())
                if ("*" === o) o = d;
                else if ("*" !== d && d !== o) {
            if (a = l[d + " " + o] || l["* " + o], !a)
                for (i in l)
                    if (s = i.split(" "), s[1] === o && (a = l[d + " " + s[0]] || l["* " + s[0]])) {
                        a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], u.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: a ? c : "No conversion from " + d + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function q(e, t, n, r) {
        var i;
        if (Q.isArray(t)) Q.each(t, function(t, i) {
            n || xt.test(e) ? r(e, i) : q(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== Q.type(t)) r(e, t);
        else
            for (i in t) q(e + "[" + i + "]", t[i], n, r)
    }

    function U(e) {
        return Q.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var B = [],
        z = B.slice,
        H = B.concat,
        V = B.push,
        G = B.indexOf,
        W = {},
        K = W.toString,
        Y = W.hasOwnProperty,
        Z = {},
        X = e.document,
        J = "2.1.4",
        Q = function(e, t) {
            return new Q.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(e, t) {
            return t.toUpperCase()
        };
    Q.fn = Q.prototype = {
        jquery: J,
        constructor: Q,
        selector: "",
        length: 0,
        toArray: function() {
            return z.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
        },
        pushStack: function(e) {
            var t = Q.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return Q.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Q.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(z.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: V,
        sort: B.sort,
        splice: B.splice
    }, Q.extend = Q.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            d = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || Q.isFunction(a) || (a = {}), s === d && (a = this, s--); d > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], r = e[t], a !== r && (l && r && (Q.isPlainObject(r) || (i = Q.isArray(r))) ? (i ? (i = !1, o = n && Q.isArray(n) ? n : []) : o = n && Q.isPlainObject(n) ? n : {}, a[t] = Q.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, Q.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Q.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Q.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== Q.type(e) || e.nodeType || Q.isWindow(e) ? !1 : e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? W[K.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Q.trim(e), e && (1 === e.indexOf("use strict") ? (t = X.createElement("script"), t.text = e, X.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Q.merge(r, "string" == typeof e ? [e] : e) : V.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : G.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                d = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && d.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && d.push(i);
            return H.apply([], d)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Q.isFunction(e) ? (r = z.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(z.call(arguments)))
            }, i.guid = e.guid = e.guid || Q.guid++, i) : void 0
        },
        now: Date.now,
        support: Z
    }), Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        W["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, d, l, c, p, h, g;
            if ((t ? t.ownerDocument || t : q) !== P && I(t), t = t || P, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && M) {
                if (11 !== s && (i = ve.exec(e)))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && L(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && y.getElementsByClassName) return J.apply(n, t.getElementsByClassName(a)), n
                    }
                if (y.qsa && (!O || !O.test(e))) {
                    if (p = c = j, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = C(e), (c = t.getAttribute("id")) ? p = c.replace(Ne, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", d = l.length; d--;) l[d] = p + f(l[d]);
                        h = Ae.test(e) && u(t.parentNode) || t, g = l.join(",")
                    }
                    if (g) try {
                        return J.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(de, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[j] = !0, e
        }

        function i(e) {
            var t = P.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) b.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function d(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function c() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = B++;
            return t.first ? function(t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function(t, n, a) {
                var s, d, l = [U, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (d = t[j] || (t[j] = {}), (s = d[r]) && s[0] === U && s[1] === o) return l[2] = s[2];
                            if (d[r] = l, l[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, d = e.length, l = null != t; d > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function $(e, t, n, i, o, a) {
            return i && !i[j] && (i = $(i)), o && !o[j] && (o = $(o, a)), r(function(r, a, s, d) {
                var l, u, c, f = [],
                    p = [],
                    h = a.length,
                    $ = r || g(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !r && t ? $ : m($, f, e, s, d),
                    A = n ? o || (r ? e : h || i) ? [] : a : v;
                if (n && n(v, A, s, d), i)
                    for (l = m(A, p), i(l, [], s, d), u = l.length; u--;)(c = l[u]) && (A[p[u]] = !(v[p[u]] = c));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], u = A.length; u--;)(c = A[u]) && l.push(v[u] = c);
                            o(null, A = [], l, d)
                        }
                        for (u = A.length; u--;)(c = A[u]) && (l = o ? ee(r, c) : f[u]) > -1 && (r[l] = !(a[l] = c))
                    }
                } else A = m(A === a ? A.splice(h, A.length) : A), o ? o(null, a, A, d) : J.apply(a, A)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, d = p(function(e) {
                    return e === t
                }, a, !0), l = p(function(e) {
                    return ee(t, e) > -1
                }, a, !0), u = [function(e, n, r) {
                    var i = !o && (r || n !== _) || ((t = n).nodeType ? d(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = b.relative[e[s].type]) u = [p(h(u), n)];
                else {
                    if (n = b.filter[e[s].type].apply(null, e[s].matches), n[j]) {
                        for (r = ++s; i > r && !b.relative[e[r].type]; r++);
                        return $(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(de, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && f(e))
                    }
                    u.push(n)
                }
            return h(u)
        }

        function A(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, s, d, l) {
                    var u, c, f, p = 0,
                        h = "0",
                        g = r && [],
                        $ = [],
                        v = _,
                        A = r || o && b.find.TAG("*", l),
                        N = U += null == v ? 1 : Math.random() || .1,
                        y = A.length;
                    for (l && (_ = a !== P && a); h !== y && null != (u = A[h]); h++) {
                        if (o && u) {
                            for (c = 0; f = e[c++];)
                                if (f(u, a, s)) {
                                    d.push(u);
                                    break
                                }
                            l && (U = N)
                        }
                        i && ((u = !f && u) && p--, r && g.push(u))
                    }
                    if (p += h, i && h !== p) {
                        for (c = 0; f = n[c++];) f(g, $, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) g[h] || $[h] || ($[h] = Z.call(d));
                            $ = m($)
                        }
                        J.apply(d, $), l && !r && $.length > 0 && p + n.length > 1 && t.uniqueSort(d)
                    }
                    return l && (U = N, _ = v), g
                };
            return i ? r(a) : a
        }
        var N, y, b, w, x, C, S, E, _, k, T, I, P, F, M, O, D, R, L, j = "sizzle" + 1 * new Date,
            q = e.document,
            U = 0,
            B = 0,
            z = n(),
            H = n(),
            V = n(),
            G = function(e, t) {
                return e === t && (T = !0), 0
            },
            W = 1 << 31,
            K = {}.hasOwnProperty,
            Y = [],
            Z = Y.pop,
            X = Y.push,
            J = Y.push,
            Q = Y.slice,
            ee = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = re.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            de = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ae),
            pe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            $e = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Ae = /[+~]/,
            Ne = /'|\\/g,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            be = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            we = function() {
                I()
            };
        try {
            J.apply(Y = Q.call(q.childNodes), q.childNodes), Y[q.childNodes.length].nodeType
        } catch (xe) {
            J = {
                apply: Y.length ? function(e, t) {
                    X.apply(e, Q.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        y = t.support = {}, x = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, I = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : q;
            return r !== P && 9 === r.nodeType && r.documentElement ? (P = r, F = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), M = !x(r), y.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), y.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), y.getElementsByClassName = $e.test(r.getElementsByClassName), y.getById = i(function(e) {
                return F.appendChild(e).id = j, !r.getElementsByName || !r.getElementsByName(j).length
            }), y.getById ? (b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, b.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete b.find.ID, b.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), b.find.TAG = y.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, b.find.CLASS = y.getElementsByClassName && function(e, t) {
                return M ? t.getElementsByClassName(e) : void 0
            }, D = [], O = [], (y.qsa = $e.test(r.querySelectorAll)) && (i(function(e) {
                F.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + j + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + j + "+*").length || O.push(".#.+[+~]")
            }), i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (y.matchesSelector = $e.test(R = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && i(function(e) {
                y.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), D.push("!=", ae)
            }), O = O.length && new RegExp(O.join("|")), D = D.length && new RegExp(D.join("|")), t = $e.test(F.compareDocumentPosition), L = t || $e.test(F.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, G = t ? function(e, t) {
                if (e === t) return T = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === q && L(q, e) ? -1 : t === r || t.ownerDocument === q && L(q, t) ? 1 : k ? ee(k, e) - ee(k, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return T = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    d = [e],
                    l = [t];
                if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : k ? ee(k, e) - ee(k, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) d.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; d[i] === l[i];) i++;
                return i ? a(d[i], l[i]) : d[i] === q ? -1 : l[i] === q ? 1 : 0
            }, r) : P
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== P && I(e), n = n.replace(ce, "='$1']"), y.matchesSelector && M && (!D || !D.test(n)) && (!O || !O.test(n))) try {
                var r = R.call(e, n);
                if (r || y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, P, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== P && I(e), L(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== P && I(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && K.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
            return void 0 !== r ? r : y.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (T = !y.detectDuplicates, k = !y.sortStable && e.slice(0), e.sort(G), T) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return k = null, e
        }, w = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += w(t);
            return n
        }, b = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, d) {
                        var l, u, c, f, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            $ = s && t.nodeName.toLowerCase(),
                            v = !d && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (c = t; c = c[g];)
                                        if (s ? c.nodeName.toLowerCase() === $ : 1 === c.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                for (u = m[j] || (m[j] = {}), l = u[e] || [], p = l[0] === U && l[1], f = l[0] === U && l[2], c = p && m.childNodes[p]; c = ++p && c && c[g] || (f = p = 0) || h.pop();)
                                    if (1 === c.nodeType && ++f && c === t) {
                                        u[e] = [U, p, f];
                                        break
                                    }
                            } else if (v && (l = (t[j] || (t[j] = {}))[e]) && l[0] === U) f = l[1];
                            else
                                for (;
                                    (c = ++p && c && c[g] || (f = p = 0) || h.pop()) && ((s ? c.nodeName.toLowerCase() !== $ : 1 !== c.nodeType) || !++f || (v && ((c[j] || (c[j] = {}))[e] = [U, f]), c !== t)););
                            return f -= i, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[j] ? o(n) : o.length > 1 ? (i = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = S(e.replace(de, "$1"));
                    return i[j] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(ye, be),
                        function(t) {
                            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === F
                },
                focus: function(e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (N in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[N] = s(N);
        for (N in {
                submit: !0,
                reset: !0
            }) b.pseudos[N] = d(N);
        return c.prototype = b.filters = b.pseudos, b.setFilters = new c, C = t.tokenize = function(e, n) {
            var r, i, o, a, s, d, l, u = H[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, d = [], l = b.preFilter; s;) {
                (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), d.push(o = [])), r = !1, (i = ue.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(de, " ")
                }), s = s.slice(r.length));
                for (a in b.filter) !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : H(e, d).slice(0)
        }, S = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = V[e + " "];
            if (!o) {
                for (t || (t = C(e)), n = t.length; n--;) o = v(t[n]), o[j] ? r.push(o) : i.push(o);
                o = V(e, A(i, r)), o.selector = e
            }
            return o
        }, E = t.select = function(e, t, n, r) {
            var i, o, a, s, d, l = "function" == typeof e && e,
                c = !r && C(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && y.getById && 9 === t.nodeType && M && b.relative[o[1].type]) {
                    if (t = (b.find.ID(a.matches[0].replace(ye, be), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
                    if ((d = b.find[s]) && (r = d(a.matches[0].replace(ye, be), Ae.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && f(o), !e) return J.apply(n, r), n;
                        break
                    }
            }
            return (l || S(e, c))(r, t, !M, n, Ae.test(e) && u(t.parentNode) || t), n
        }, y.sortStable = j.split("").sort(G).join("") === j, y.detectDuplicates = !!T, I(), y.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(P.createElement("div"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), y.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Q.find = ie, Q.expr = ie.selectors, Q.expr[":"] = Q.expr.pseudos, Q.unique = ie.uniqueSort, Q.text = ie.getText, Q.isXMLDoc = ie.isXML, Q.contains = ie.contains;
    var oe = Q.expr.match.needsContext,
        ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
    Q.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Q.find.matchesSelector(r, e) ? [r] : [] : Q.find.matches(e, Q.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Q.fn.extend({
        find: function(e) {
            var t, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof e) return this.pushStack(Q(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (Q.contains(i[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Q.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Q.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? Q(e) : e || [], !1).length
        }
    });
    var de, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ue = Q.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || de).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof Q ? t[0] : t, Q.merge(this, Q.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : X, !0)),
                        ae.test(n[1]) && Q.isPlainObject(t))
                        for (n in t) Q.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return r = X.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = X, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Q.isFunction(e) ? "undefined" != typeof de.ready ? de.ready(e) : e(Q) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Q.makeArray(e, this))
        };
    ue.prototype = Q.fn, de = Q(X);
    var ce = /^(?:parents|prev(?:Until|All))/,
        fe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Q.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Q(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Q.fn.extend({
        has: function(e) {
            var t = Q(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (Q.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? Q(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Q.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Q.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? G.call(Q(e), this[0]) : G.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Q.unique(Q.merge(this.get(), Q(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Q.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Q.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Q.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Q.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Q.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Q.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Q.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Q.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Q.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Q.merge([], e.childNodes)
        }
    }, function(e, t) {
        Q.fn[e] = function(n, r) {
            var i = Q.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Q.filter(r, i)), this.length > 1 && (fe[e] || Q.unique(i), ce.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var pe = /\S+/g,
        he = {};
    Q.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || o(e) : Q.extend({}, e);
        var t, n, r, i, a, s, d = [],
            l = !e.once && [],
            u = function(o) {
                for (t = e.memory && o, n = !0, s = i || 0, i = 0, a = d.length, r = !0; d && a > s; s++)
                    if (d[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                r = !1, d && (l ? l.length && u(l.shift()) : t ? d = [] : c.disable())
            },
            c = {
                add: function() {
                    if (d) {
                        var n = d.length;
                        ! function o(t) {
                            Q.each(t, function(t, n) {
                                var r = Q.type(n);
                                "function" === r ? e.unique && c.has(n) || d.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? a = d.length : t && (i = n, u(t))
                    }
                    return this
                },
                remove: function() {
                    return d && Q.each(arguments, function(e, t) {
                        for (var n;
                            (n = Q.inArray(t, d, n)) > -1;) d.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                    }), this
                },
                has: function(e) {
                    return e ? Q.inArray(e, d) > -1 : !(!d || !d.length)
                },
                empty: function() {
                    return d = [], a = 0, this
                },
                disable: function() {
                    return d = l = t = void 0, this
                },
                disabled: function() {
                    return !d
                },
                lock: function() {
                    return l = void 0, t || c.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(e, t) {
                    return !d || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : u(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return c
    }, Q.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", Q.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Q.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Q.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return Q.Deferred(function(n) {
                            Q.each(t, function(t, o) {
                                var a = Q.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && Q.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Q.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Q.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = z.call(arguments),
                a = o.length,
                s = 1 !== a || e && Q.isFunction(e.promise) ? a : 0,
                d = 1 === s ? e : Q.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? z.call(arguments) : i, r === t ? d.notifyWith(n, r) : --s || d.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && Q.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(d.reject).progress(l(i, n, t)) : --s;
            return s || d.resolveWith(r, o), d.promise()
        }
    });
    var ge;
    Q.fn.ready = function(e) {
        return Q.ready.promise().done(e), this
    }, Q.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Q.readyWait++ : Q.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Q.readyWait : Q.isReady) || (Q.isReady = !0, e !== !0 && --Q.readyWait > 0 || (ge.resolveWith(X, [Q]), Q.fn.triggerHandler && (Q(X).triggerHandler("ready"), Q(X).off("ready"))))
        }
    }), Q.ready.promise = function(t) {
        return ge || (ge = Q.Deferred(), "complete" === X.readyState ? setTimeout(Q.ready) : (X.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), ge.promise(t)
    }, Q.ready.promise();
    var me = Q.access = function(e, t, n, r, i, o, a) {
        var s = 0,
            d = e.length,
            l = null == n;
        if ("object" === Q.type(n)) {
            i = !0;
            for (s in n) Q.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, Q.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(Q(e), n)
            })), t))
            for (; d > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : d ? t(e[0], n) : o
    };
    Q.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Q.acceptData, s.prototype = {
        key: function(e) {
            if (!s.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Q.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var r, i = this.key(e),
                o = this.cache[i];
            if ("string" == typeof t) o[t] = n;
            else if (Q.isEmptyObject(o)) Q.extend(this.cache[i], t);
            else
                for (r in t) o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Q.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e),
                a = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                Q.isArray(t) ? r = t.concat(t.map(Q.camelCase)) : (i = Q.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(pe) || [])), n = r.length;
                for (; n--;) delete a[r[n]]
            }
        },
        hasData: function(e) {
            return !Q.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var $e = new s,
        ve = new s,
        Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ne = /([A-Z])/g;
    Q.extend({
        hasData: function(e) {
            return ve.hasData(e) || $e.hasData(e)
        },
        data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        removeData: function(e, t) {
            ve.remove(e, t)
        },
        _data: function(e, t, n) {
            return $e.access(e, t, n)
        },
        _removeData: function(e, t) {
            $e.remove(e, t)
        }
    }), Q.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ve.get(o), 1 === o.nodeType && !$e.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Q.camelCase(r.slice(5)), d(o, r, i[r])));
                    $e.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ve.set(this, e)
            }) : me(this, function(t) {
                var n, r = Q.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ve.get(o, e), void 0 !== n) return n;
                    if (n = ve.get(o, r), void 0 !== n) return n;
                    if (n = d(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ve.get(this, r);
                    ve.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ve.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ve.remove(this, e)
            })
        }
    }), Q.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = $e.get(e, t), n && (!r || Q.isArray(n) ? r = $e.access(e, t, Q.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Q.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Q._queueHooks(e, t),
                a = function() {
                    Q.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return $e.get(e, n) || $e.access(e, n, {
                empty: Q.Callbacks("once memory").add(function() {
                    $e.remove(e, [t + "queue", n])
                })
            })
        }
    }), Q.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Q.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Q.queue(this, e, t);
                Q._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Q.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Q.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = Q.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = $e.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        be = ["Top", "Right", "Bottom", "Left"],
        we = function(e, t) {
            return e = t || e, "none" === Q.css(e, "display") || !Q.contains(e.ownerDocument, e)
        },
        xe = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = X.createDocumentFragment(),
            t = e.appendChild(X.createElement("div")),
            n = X.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Z.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ce = "undefined";
    Z.focusinBubbles = "onfocusin" in e;
    var Se = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu)|click/,
        _e = /^(?:focusinfocus|focusoutblur)$/,
        ke = /^([^.]*)(?:\.(.+)|)$/;
    Q.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, d, l, u, c, f, p, h, g, m = $e.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Q.guid++), (d = m.events) || (d = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return typeof Q !== Ce && Q.event.triggered !== t.type ? Q.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(pe) || [""], l = t.length; l--;) s = ke.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (c = Q.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, c = Q.event.special[p] || {}, u = Q.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Q.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (f = d[p]) || (f = d[p] = [], f.delegateCount = 0, c.setup && c.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), Q.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, d, l, u, c, f, p, h, g, m = $e.hasData(e) && $e.get(e);
            if (m && (d = m.events)) {
                for (t = (t || "").match(pe) || [""], l = t.length; l--;)
                    if (s = ke.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (c = Q.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, f = d[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !i && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, c.remove && c.remove.call(e, u));
                        a && !f.length && (c.teardown && c.teardown.call(e, h, m.handle) !== !1 || Q.removeEvent(e, p, m.handle), delete d[p])
                    } else
                        for (p in d) Q.event.remove(e, p + t[l], n, r, !0);
                Q.isEmptyObject(d) && (delete m.handle, $e.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, d, l, u, c, f = [r || X],
                p = Y.call(t, "type") ? t.type : t,
                h = Y.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || X, 3 !== r.nodeType && 8 !== r.nodeType && !_e.test(p + Q.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[Q.expando] ? t : new Q.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Q.makeArray(n, [t]), c = Q.event.special[p] || {}, i || !c.trigger || c.trigger.apply(r, n) !== !1)) {
                if (!i && !c.noBubble && !Q.isWindow(r)) {
                    for (d = c.delegateType || p, _e.test(d + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                    s === (r.ownerDocument || X) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? d : c.bindType || p, u = ($e.get(a, "events") || {})[t.type] && $e.get(a, "handle"), u && u.apply(a, n), u = l && a[l], u && u.apply && Q.acceptData(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || c._default && c._default.apply(f.pop(), n) !== !1 || !Q.acceptData(r) || l && Q.isFunction(r[p]) && !Q.isWindow(r) && (s = r[l], s && (r[l] = null), Q.event.triggered = p, r[p](), Q.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        dispatch: function(e) {
            e = Q.event.fix(e);
            var t, n, r, i, o, a = [],
                s = z.call(arguments),
                d = ($e.get(this, "events") || {})[e.type] || [],
                l = Q.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (a = Q.event.handlers.call(this, e, d), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Q.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                d = e.target;
            if (s && d.nodeType && (!e.button || "click" !== e.type))
                for (; d !== this; d = d.parentNode || this)
                    if (d.disabled !== !0 || "click" !== e.type) {
                        for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Q(i, this).index(d) >= 0 : Q.find(i, this, null, [d]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: d,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || X, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[Q.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ee.test(i) ? this.mouseHooks : Se.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Q.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = X), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== c() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Q.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Q.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Q.extend(new Q.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Q.event.trigger(i, null, t) : Q.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Q.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Q.Event = function(e, t) {
        return this instanceof Q.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : u) : this.type = e, t && Q.extend(this, t), this.timeStamp = e && e.timeStamp || Q.now(), void(this[Q.expando] = !0)) : new Q.Event(e, t)
    }, Q.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Q.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Q.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !Q.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Z.focusinBubbles || Q.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Q.event.simulate(t, e.target, Q.event.fix(e), !0)
        };
        Q.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = $e.access(r, t);
                i || r.addEventListener(e, n, !0), $e.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = $e.access(r, t) - 1;
                i ? $e.access(r, t, i) : (r.removeEventListener(e, n, !0), $e.remove(r, t))
            }
        }
    }), Q.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = u;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return Q().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Q.guid++)), this.each(function() {
                Q.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Q(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = u), this.each(function() {
                Q.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Q.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Q.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ie = /<([\w:]+)/,
        Pe = /<|&#?\w+;/,
        Fe = /<(?:script|style|link)/i,
        Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^$|\/(?:java|ecma)script/i,
        De = /^true\/(.*)/,
        Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Le.optgroup = Le.option, Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead, Le.th = Le.td, Q.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                d = Q.contains(e.ownerDocument, e);
            if (!(Z.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Q.isXMLDoc(e)))
                for (a = $(s), o = $(e), r = 0, i = o.length; i > r; r++) v(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || $(e), a = a || $(s), r = 0, i = o.length; i > r; r++) m(o[r], a[r]);
                else m(e, s);
            return a = $(s, "script"), a.length > 0 && g(a, !d && $(e, "script")), s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, d, l, u = t.createDocumentFragment(), c = [], f = 0, p = e.length; p > f; f++)
                if (i = e[f], i || 0 === i)
                    if ("object" === Q.type(i)) Q.merge(c, i.nodeType ? [i] : i);
                    else if (Pe.test(i)) {
                for (o = o || u.appendChild(t.createElement("div")), a = (Ie.exec(i) || ["", ""])[1].toLowerCase(), s = Le[a] || Le._default, o.innerHTML = s[1] + i.replace(Te, "<$1></$2>") + s[2], l = s[0]; l--;) o = o.lastChild;
                Q.merge(c, o.childNodes), o = u.firstChild, o.textContent = ""
            } else c.push(t.createTextNode(i));
            for (u.textContent = "", f = 0; i = c[f++];)
                if ((!r || -1 === Q.inArray(i, r)) && (d = Q.contains(i.ownerDocument, i), o = $(u.appendChild(i), "script"), d && g(o), n))
                    for (l = 0; i = o[l++];) Oe.test(i.type || "") && n.push(i);
            return u
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Q.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (Q.acceptData(n) && (i = n[$e.expando], i && (t = $e.cache[i]))) {
                    if (t.events)
                        for (r in t.events) o[r] ? Q.event.remove(n, r) : Q.removeEvent(n, r, t.handle);
                    $e.cache[i] && delete $e.cache[i]
                }
                delete ve.cache[n[ve.expando]]
            }
        }
    }), Q.fn.extend({
        text: function(e) {
            return me(this, function(e) {
                return void 0 === e ? Q.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Q.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Q.cleanData($(n)), n.parentNode && (t && Q.contains(n.ownerDocument, n) && g($(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Q.cleanData($(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return Q.clone(this, e, t)
            })
        },
        html: function(e) {
            return me(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Fe.test(e) && !Le[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Te, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Q.cleanData($(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Q.cleanData($(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = H.apply([], e);
            var n, r, i, o, a, s, d = 0,
                l = this.length,
                u = this,
                c = l - 1,
                f = e[0],
                g = Q.isFunction(f);
            if (g || l > 1 && "string" == typeof f && !Z.checkClone && Me.test(f)) return this.each(function(n) {
                var r = u.eq(n);
                g && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Q.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Q.map($(n, "script"), p), o = i.length; l > d; d++) a = n, d !== c && (a = Q.clone(a, !0, !0), o && Q.merge(i, $(a, "script"))), t.call(this[d], a, d);
                if (o)
                    for (s = i[i.length - 1].ownerDocument, Q.map(i, h), d = 0; o > d; d++) a = i[d], Oe.test(a.type || "") && !$e.access(a, "globalEval") && Q.contains(s, a) && (a.src ? Q._evalUrl && Q._evalUrl(a.src) : Q.globalEval(a.textContent.replace(Re, "")))
            }
            return this
        }
    }), Q.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Q.fn[e] = function(e) {
            for (var n, r = [], i = Q(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Q(i[a])[t](n), V.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var je, qe = {},
        Ue = /^margin/,
        Be = new RegExp("^(" + ye + ")(?!px)[a-z%]+$", "i"),
        ze = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }
        var n, r, i = X.documentElement,
            o = X.createElement("div"),
            a = X.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Q.extend(Z, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == r && t(), r
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(X.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), t
            }
        }))
    }(), Q.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    };
    var He = /^(none|table(?!-c[ea]).+)/,
        Ve = new RegExp("^(" + ye + ")(.*)$", "i"),
        Ge = new RegExp("^([+-])=(" + ye + ")", "i"),
        We = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ye = ["Webkit", "O", "Moz", "ms"];
    Q.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = y(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = Q.camelCase(t),
                    d = e.style;
                return t = Q.cssProps[s] || (Q.cssProps[s] = w(d, s)), a = Q.cssHooks[t] || Q.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : d[t] : (o = typeof n, "string" === o && (i = Ge.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Q.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Q.cssNumber[s] || (n += "px"), Z.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (d[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = Q.camelCase(t);
            return t = Q.cssProps[s] || (Q.cssProps[s] = w(e.style, s)), a = Q.cssHooks[t] || Q.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = y(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Q.isNumeric(o) ? o || 0 : i) : i
        }
    }), Q.each(["height", "width"], function(e, t) {
        Q.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? He.test(Q.css(e, "display")) && 0 === e.offsetWidth ? Q.swap(e, We, function() {
                    return S(e, t, r)
                }) : S(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && ze(e);
                return x(e, n, r ? C(e, t, r, "border-box" === Q.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Q.cssHooks.marginRight = b(Z.reliableMarginRight, function(e, t) {
        return t ? Q.swap(e, {
            display: "inline-block"
        }, y, [e, "marginRight"]) : void 0
    }), Q.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Q.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + be[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ue.test(e) || (Q.cssHooks[e + t].set = x)
    }), Q.fn.extend({
        css: function(e, t) {
            return me(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Q.isArray(t)) {
                    for (r = ze(e), i = t.length; i > a; a++) o[t[a]] = Q.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? Q.style(e, t, n) : Q.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                we(this) ? Q(this).show() : Q(this).hide()
            })
        }
    }), Q.Tween = _, _.prototype = {
        constructor: _,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Q.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = _.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
        }
    }, _.prototype.init.prototype = _.prototype, _.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Q.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Q.cssProps[e.prop]] || Q.cssHooks[e.prop]) ? Q.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Q.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Q.fx = _.prototype.init, Q.fx.step = {};
    var Ze, Xe, Je = /^(?:toggle|show|hide)$/,
        Qe = new RegExp("^(?:([+-])=|)(" + ye + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [P],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Qe.exec(t),
                    o = i && i[3] || (Q.cssNumber[e] ? "" : "px"),
                    a = (Q.cssNumber[e] || "px" !== o && +r) && Qe.exec(Q.css(n.elem, e)),
                    s = 1,
                    d = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, Q.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --d)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Q.Animation = Q.extend(M, {
            tweener: function(e, t) {
                Q.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), Q.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Q.extend({}, e) : {
                complete: n || !n && t || Q.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Q.isFunction(t) && t
            };
            return r.duration = Q.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Q.fx.speeds ? Q.fx.speeds[r.duration] : Q.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                Q.isFunction(r.old) && r.old.call(this), r.queue && Q.dequeue(this, r.queue)
            }, r
        }, Q.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(we).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Q.isEmptyObject(e),
                    o = Q.speed(t, n, r),
                    a = function() {
                        var t = M(this, Q.extend({}, e), o);
                        (i || $e.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Q.timers,
                        a = $e.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && et.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && Q.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = $e.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Q.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, Q.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Q.each(["toggle", "show", "hide"], function(e, t) {
            var n = Q.fn[t];
            Q.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(T(t, !0), e, r, i)
            }
        }), Q.each({
            slideDown: T("show"),
            slideUp: T("hide"),
            slideToggle: T("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Q.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Q.timers = [], Q.fx.tick = function() {
            var e, t = 0,
                n = Q.timers;
            for (Ze = Q.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || Q.fx.stop(), Ze = void 0
        }, Q.fx.timer = function(e) {
            Q.timers.push(e), e() ? Q.fx.start() : Q.timers.pop()
        }, Q.fx.interval = 13, Q.fx.start = function() {
            Xe || (Xe = setInterval(Q.fx.tick, Q.fx.interval))
        }, Q.fx.stop = function() {
            clearInterval(Xe), Xe = null
        }, Q.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Q.fn.delay = function(e, t) {
            return e = Q.fx ? Q.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = X.createElement("input"),
                t = X.createElement("select"),
                n = t.appendChild(X.createElement("option"));
            e.type = "checkbox", Z.checkOn = "" !== e.value, Z.optSelected = n.selected, t.disabled = !0, Z.optDisabled = !n.disabled, e = X.createElement("input"), e.value = "t", e.type = "radio", Z.radioValue = "t" === e.value
        }();
    var rt, it, ot = Q.expr.attrHandle;
    Q.fn.extend({
        attr: function(e, t) {
            return me(this, Q.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Q.removeAttr(this, e)
            })
        }
    }), Q.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ce ? Q.prop(e, t, n) : (1 === o && Q.isXMLDoc(e) || (t = t.toLowerCase(), r = Q.attrHooks[t] || (Q.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Q.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Q.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(pe);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = Q.propFix[n] || n, Q.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Z.radioValue && "radio" === t && Q.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), it = {
        set: function(e, t, n) {
            return t === !1 ? Q.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Q.each(Q.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ot[t] || Q.find.attr;
        ot[t] = function(e, t, r) {
            var i, o;
            return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
        }
    });
    var at = /^(?:input|select|textarea|button)$/i;
    Q.fn.extend({
        prop: function(e, t) {
            return me(this, Q.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Q.propFix[e] || e]
            })
        }
    }), Q.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Q.isXMLDoc(e), o && (t = Q.propFix[t] || t, i = Q.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Z.optSelected || (Q.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Q.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Q.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    Q.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = "string" == typeof e && e,
                d = 0,
                l = this.length;
            if (Q.isFunction(e)) return this.each(function(t) {
                Q(this).addClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(pe) || []; l > d; d++)
                    if (n = this[d], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = Q.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e,
                d = 0,
                l = this.length;
            if (Q.isFunction(e)) return this.each(function(t) {
                Q(this).removeClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(pe) || []; l > d; d++)
                    if (n = this[d], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? Q.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Q.isFunction(e) ? this.each(function(n) {
                Q(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = Q(this), o = e.match(pe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Ce || "boolean" === n) && (this.className && $e.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : $e.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var dt = /\r/g;
    Q.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = Q.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Q(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Q.isArray(i) && (i = Q.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = Q.valHooks[i.type] || Q.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n)
            }
        }
    }), Q.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Q.find.attr(e, "value");
                    return null != t ? t : Q.trim(Q.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, d = 0 > i ? s : o ? i : 0; s > d; d++)
                        if (n = r[d], (n.selected || d === i) && (Z.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Q.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Q(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Q.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Q.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Q.each(["radio", "checkbox"], function() {
        Q.valHooks[this] = {
            set: function(e, t) {
                return Q.isArray(t) ? e.checked = Q.inArray(Q(e).val(), t) >= 0 : void 0
            }
        }, Z.checkOn || (Q.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Q.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Q.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var lt = Q.now(),
        ut = /\?/;
    Q.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, Q.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Q.error("Invalid XML: " + e), t
    };
    var ct = /#.*$/,
        ft = /([?&])_=[^&]*/,
        pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        gt = /^(?:GET|HEAD)$/,
        mt = /^\/\//,
        $t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        vt = {},
        At = {},
        Nt = "*/".concat("*"),
        yt = e.location.href,
        bt = $t.exec(yt.toLowerCase()) || [];
    Q.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yt,
            type: "GET",
            isLocal: ht.test(bt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Nt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Q.parseJSON,
                "text xml": Q.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, Q.ajaxSettings), t) : R(Q.ajaxSettings, e)
        },
        ajaxPrefilter: O(vt),
        ajaxTransport: O(At),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var d, u, $, v, N, b = t;
                2 !== A && (A = 2, s && clearTimeout(s), r = void 0, o = a || "", y.readyState = e > 0 ? 4 : 0, d = e >= 200 && 300 > e || 304 === e, n && (v = L(c, y, n)), v = j(c, v, y, d), d ? (c.ifModified && (N = y.getResponseHeader("Last-Modified"), N && (Q.lastModified[i] = N), N = y.getResponseHeader("etag"), N && (Q.etag[i] = N)), 204 === e || "HEAD" === c.type ? b = "nocontent" : 304 === e ? b = "notmodified" : (b = v.state, u = v.data, $ = v.error, d = !$)) : ($ = b, (e || !b) && (b = "error", 0 > e && (e = 0))), y.status = e, y.statusText = (t || b) + "", d ? h.resolveWith(f, [u, b, y]) : h.rejectWith(f, [y, b, $]), y.statusCode(m), m = void 0, l && p.trigger(d ? "ajaxSuccess" : "ajaxError", [y, c, d ? u : $]), g.fireWith(f, [y, b]), l && (p.trigger("ajaxComplete", [y, c]), --Q.active || Q.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, d, l, u, c = Q.ajaxSetup({}, t),
                f = c.context || c,
                p = c.context && (f.nodeType || f.jquery) ? Q(f) : Q.event,
                h = Q.Deferred(),
                g = Q.Callbacks("once memory"),
                m = c.statusCode || {},
                $ = {},
                v = {},
                A = 0,
                N = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === A) {
                            if (!a)
                                for (a = {}; t = pt.exec(o);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === A ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return A || (e = v[n] = v[n] || e, $[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return A || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > A)
                                for (t in e) m[t] = [m[t], e[t]];
                            else y.always(e[y.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || N;
                        return r && r.abort(t), n(0, t), this
                    }
                };
            if (h.promise(y).complete = g.add, y.success = y.done, y.error = y.fail, c.url = ((e || c.url || yt) + "").replace(ct, "").replace(mt, bt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = Q.trim(c.dataType || "*").toLowerCase().match(pe) || [""], null == c.crossDomain && (d = $t.exec(c.url.toLowerCase()), c.crossDomain = !(!d || d[1] === bt[1] && d[2] === bt[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (bt[3] || ("http:" === bt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = Q.param(c.data, c.traditional)), D(vt, c, t, y), 2 === A) return y;
            l = Q.event && c.global, l && 0 === Q.active++ && Q.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !gt.test(c.type), i = c.url, c.hasContent || (c.data && (i = c.url += (ut.test(i) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = ft.test(i) ? i.replace(ft, "$1_=" + lt++) : i + (ut.test(i) ? "&" : "?") + "_=" + lt++)), c.ifModified && (Q.lastModified[i] && y.setRequestHeader("If-Modified-Since", Q.lastModified[i]), Q.etag[i] && y.setRequestHeader("If-None-Match", Q.etag[i])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && y.setRequestHeader("Content-Type", c.contentType), y.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : c.accepts["*"]);
            for (u in c.headers) y.setRequestHeader(u, c.headers[u]);
            if (c.beforeSend && (c.beforeSend.call(f, y, c) === !1 || 2 === A)) return y.abort();
            N = "abort";
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) y[u](c[u]);
            if (r = D(At, c, t, y)) {
                y.readyState = 1, l && p.trigger("ajaxSend", [y, c]), c.async && c.timeout > 0 && (s = setTimeout(function() {
                    y.abort("timeout")
                }, c.timeout));
                try {
                    A = 1, r.send($, n)
                } catch (b) {
                    if (!(2 > A)) throw b;
                    n(-1, b)
                }
            } else n(-1, "No Transport");
            return y
        },
        getJSON: function(e, t, n) {
            return Q.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Q.get(e, void 0, t, "script")
        }
    }), Q.each(["get", "post"], function(e, t) {
        Q[t] = function(e, n, r, i) {
            return Q.isFunction(n) && (i = i || r, r = n, n = void 0), Q.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Q._evalUrl = function(e) {
        return Q.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Q.fn.extend({
        wrapAll: function(e) {
            var t;
            return Q.isFunction(e) ? this.each(function(t) {
                Q(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Q(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return Q.isFunction(e) ? this.each(function(t) {
                Q(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = Q(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Q.isFunction(e);
            return this.each(function(n) {
                Q(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Q.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Q.expr.filters.visible = function(e) {
        return !Q.expr.filters.hidden(e)
    };
    var wt = /%20/g,
        xt = /\[\]$/,
        Ct = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;
    Q.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = Q.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(e) || e.jquery && !Q.isPlainObject(e)) Q.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) q(n, e[n], t, i);
        return r.join("&").replace(wt, "+")
    }, Q.fn.extend({
        serialize: function() {
            return Q.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Q.prop(this, "elements");
                return e ? Q.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Q(this).is(":disabled") && Et.test(this.nodeName) && !St.test(e) && (this.checked || !xe.test(e))
            }).map(function(e, t) {
                var n = Q(this).val();
                return null == n ? null : Q.isArray(n) ? Q.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            }).get()
        }
    }), Q.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var _t = 0,
        kt = {},
        Tt = {
            0: 200,
            1223: 204
        },
        It = Q.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in kt) kt[e]()
    }), Z.cors = !!It && "withCredentials" in It, Z.ajax = It = !!It, Q.ajaxTransport(function(e) {
        var t;
        return Z.cors || It && !e.crossDomain ? {
            send: function(n, r) {
                var i, o = e.xhr(),
                    a = ++_t;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete kt[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Tt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = kt[a] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t) throw s
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), Q.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Q.globalEval(e), e
            }
        }
    }), Q.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Q.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Q("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), X.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Pt = [],
        Ft = /(=)\?(?=&|$)|\?\?/;
    Q.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Pt.pop() || Q.expando + "_" + lt++;
            return this[e] = !0, e
        }
    }), Q.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (Ft.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ft.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Q.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ft, "$1" + i) : t.jsonp !== !1 && (t.url += (ut.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || Q.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Pt.push(i)), a && Q.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), Q.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || X;
        var r = ae.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Q.buildFragment([e], t, i), i && i.length && Q(i).remove(), Q.merge([], r.childNodes))
    };
    var Mt = Q.fn.load;
    Q.fn.load = function(e, t, n) {
        if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = Q.trim(e.slice(s)), e = e.slice(0, s)), Q.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Q.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? Q("<div>").append(Q.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, Q.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Q.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Q.expr.filters.animated = function(e) {
        return Q.grep(Q.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Ot = e.document.documentElement;
    Q.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, d, l, u = Q.css(e, "position"),
                c = Q(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = Q.css(e, "top"), d = Q.css(e, "left"), l = ("absolute" === u || "fixed" === u) && (o + d).indexOf("auto") > -1, l ? (r = c.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(d) || 0), Q.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, Q.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Q.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, Q.contains(t, r) ? (typeof r.getBoundingClientRect !== Ce && (i = r.getBoundingClientRect()), n = U(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Q.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Q.nodeName(e[0], "html") || (r = e.offset()), r.top += Q.css(e[0], "borderTopWidth", !0), r.left += Q.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Q.css(n, "marginTop", !0),
                    left: t.left - r.left - Q.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Ot; e && !Q.nodeName(e, "html") && "static" === Q.css(e, "position");) e = e.offsetParent;
                return e || Ot
            })
        }
    }), Q.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Q.fn[t] = function(i) {
            return me(this, function(t, i, o) {
                var a = U(t);
                return void 0 === o ? a ? a[n] : t[i] : void(a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Q.each(["top", "left"], function(e, t) {
        Q.cssHooks[t] = b(Z.pixelPosition, function(e, n) {
            return n ? (n = y(e, t), Be.test(n) ? Q(e).position()[t] + "px" : n) : void 0
        })
    }), Q.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Q.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Q.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return me(this, function(t, n, r) {
                    var i;
                    return Q.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Q.css(t, n, a) : Q.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Q.fn.size = function() {
        return this.length
    }, Q.fn.andSelf = Q.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Q
    });
    var Dt = e.jQuery,
        Rt = e.$;
    return Q.noConflict = function(t) {
        return e.$ === Q && (e.$ = Rt), t && e.jQuery === Q && (e.jQuery = Dt), Q
    }, typeof t === Ce && (e.jQuery = e.$ = Q), Q
}),
function(e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, r = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== t && e.data("remote") !== !1
        },
        handleRemote: function(r) {
            var i, o, a, s, d, l;
            if (n.fire(r, "ajax:before")) {
                if (s = r.data("with-credentials") || null, d = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, r.is("form")) {
                    i = r.attr("method"), o = r.attr("action"), a = r.serializeArray();
                    var u = r.data("ujs:submit-button");
                    u && (a.push(u), r.data("ujs:submit-button", null))
                } else r.is(n.inputChangeSelector) ? (i = r.data("method"), o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : (i = r.data("method"), o = n.href(r), a = r.data("params") || null);
                return l = {
                    type: i || "GET",
                    data: a,
                    dataType: d,
                    beforeSend: function(e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), n.fire(r, "ajax:beforeSend", [e, i]) ? void r.trigger("ajax:send", e) : !1
                    },
                    success: function(e, t, n) {
                        r.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        r.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        r.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, s && (l.xhrFields = {
                    withCredentials: s
                }), o && (l.url = o), n.ajax(l)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (r) {
                return !0
            }
        },
        handleMethod: function(r) {
            var i = n.href(r),
                o = r.data("method"),
                a = r.attr("target"),
                s = n.csrfToken(),
                d = n.csrfParam(),
                l = e('<form method="post" action="' + i + '"></form>'),
                u = '<input name="_method" value="' + o + '" type="hidden" />';
            d === t || s === t || n.isCrossDomain(i) || (u += '<input name="' + d + '" value="' + s + '" type="hidden" />'), a && l.attr("target", a), l.hide().append(u).appendTo("body"), l.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each(function() {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var n, r;
            n = e.is("button") ? "html" : "val", r = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), r !== t && e[n](r), e.prop("disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each(function() {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var t = e.is("button") ? "html" : "val";
            "undefined" != typeof e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
        },
        allowAction: function(e) {
            var t, r = e.data("confirm"),
                i = !1;
            if (!r) return !0;
            if (n.fire(e, "confirm")) {
                try {
                    i = n.confirm(r)
                } catch (o) {
                    (console.error || console.log).call(console, o.stack || o)
                }
                t = n.fire(e, "confirm:complete", [i])
            }
            return i && t
        },
        blankInputs: function(t, n, r) {
            var i, o, a = e(),
                s = n || "input,textarea",
                d = t.find(s);
            return d.each(function() {
                if (i = e(this), o = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val(), o === r) {
                    if (i.is("input[type=radio]") && d.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length) return !0;
                    a = a.add(i)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            var r = e.data("disable-with");
            e.data("ujs:enable-with", e.html()), r !== t && e.html(r), e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, n.fire(r, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, r) {
        e.crossDomain || n.CSRFProtection(r)
    }), e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableElement(t)
        })
    }), r.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(e(this))
    }), r.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(e(this))
    }), r.delegate(n.linkClickSelector, "click.rails", function(t) {
        var r = e(this),
            i = r.data("method"),
            o = r.data("params"),
            a = t.metaKey || t.ctrlKey;
        if (!n.allowAction(r)) return n.stopEverything(t);
        if (!a && r.is(n.linkDisableSelector) && n.disableElement(r), n.isRemote(r)) {
            if (a && (!i || "GET" === i) && !o) return !0;
            var s = n.handleRemote(r);
            return s === !1 ? n.enableElement(r) : s.fail(function() {
                n.enableElement(r)
            }), !1
        }
        return i ? (n.handleMethod(r), !1) : void 0
    }), r.delegate(n.buttonClickSelector, "click.rails", function(t) {
        var r = e(this);
        if (!n.allowAction(r) || !n.isRemote(r)) return n.stopEverything(t);
        r.is(n.buttonDisableSelector) && n.disableFormElement(r);
        var i = n.handleRemote(r);
        return i === !1 ? n.enableFormElement(r) : i.fail(function() {
            n.enableFormElement(r)
        }), !1
    }), r.delegate(n.inputChangeSelector, "change.rails", function(t) {
        var r = e(this);
        return n.allowAction(r) && n.isRemote(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), r.delegate(n.formSubmitSelector, "submit.rails", function(r) {
        var i, o, a = e(this),
            s = n.isRemote(a);
        if (!n.allowAction(a)) return n.stopEverything(r);
        if (a.attr("novalidate") === t && (i = n.blankInputs(a, n.requiredInputSelector, !1), i && n.fire(a, "ajax:aborted:required", [i]))) return n.stopEverything(r);
        if (s) {
            if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(a)
                }, 13);
                var d = n.fire(a, "ajax:aborted:file", [o]);
                return d || setTimeout(function() {
                    n.enableFormElements(a)
                }, 13), d
            }
            return n.handleRemote(a), !1
        }
        setTimeout(function() {
            n.disableFormElements(a)
        }, 13)
    }), r.delegate(n.formInputClickSelector, "click.rails", function(t) {
        var r = e(this);
        if (!n.allowAction(r)) return n.stopEverything(t);
        var i = r.attr("name"),
            o = i ? {
                name: i,
                value: r.val()
            } : null;
        r.closest("form").data("ujs:submit-button", o)
    }), r.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
        this === t.target && n.disableFormElements(e(this))
    }), r.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
        this === t.target && n.enableFormElements(e(this))
    }), e(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var t, n, r, i, o, a, s, d = "Close",
        l = "BeforeClose",
        u = "AfterClose",
        c = "BeforeAppend",
        f = "MarkupParse",
        p = "Open",
        h = "Change",
        g = "mfp",
        m = "." + g,
        $ = "mfp-ready",
        v = "mfp-removing",
        A = "mfp-prevent-close",
        N = function() {},
        y = !!window.jQuery,
        b = e(window),
        w = function(e, n) {
            t.ev.on(g + e + m, n)
        },
        x = function(t, n, r, i) {
            var o = document.createElement("div");
            return o.className = "mfp-" + t, r && (o.innerHTML = r), i ? n && n.appendChild(o) : (o = e(o), n && o.appendTo(n)), o
        },
        C = function(n, r) {
            t.ev.triggerHandler(g + n, r), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(r) ? r : [r]))
        },
        S = function(n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
        },
        E = function() {
            e.magnificPopup.instance || (t = new N, t.init(), e.magnificPopup.instance = t)
        },
        _ = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    N.prototype = {
        constructor: N,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = _(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}
        },
        open: function(n) {
            r || (r = e(document.body));
            var o;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var s, d = n.items;
                for (o = 0; o < d.length; o++)
                    if (s = d[o], s.parsed && (s = s.el[0]), s === n.el[0]) {
                        t.index = o;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], a = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = x("bg").on("click" + m, function() {
                t.close()
            }), t.wrap = x("wrap").attr("tabindex", -1).on("click" + m, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = x("container", t.wrap)), t.contentContainer = x("content"), t.st.preloader && (t.preloader = x("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var u = l[o];
                u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t)
            }
            C("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (w(f, function(e, t, n, r) {
                n.close_replaceWith = S(r.type)
            }), a += " mfp-close-btn-in") : t.wrap.append(S())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: b.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: i.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && i.on("keyup" + m, function(e) {
                27 === e.keyCode && t.close()
            }), b.on("resize" + m, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
            var c = t.wH = b.height(),
                h = {};
            if (t.fixedContentPos && t._hasScrollBar(c)) {
                var g = t._getScrollbarSize();
                g && (h.marginRight = g)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : h.overflow = "hidden");
            var v = t.st.mainClass;
            return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), C("BuildControls"), e("html").css(h), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || r), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP($), t._setFocus()) : t.bgOverlay.addClass($), i.on("focusin" + m, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(c), C(p), n
        },
        close: function() {
            t.isOpen && (C(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            C(d);
            var n = v + " " + $ + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var r = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r)
            }
            i.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, C(u)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    r = window.innerHeight * n;
                t.wrap.css("height", r), t.wH = r
            } else t.wH = e || b.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), C("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var r = n.type;
            if (C("BeforeChange", [t.currItem ? t.currItem.type : "", r]), t.currItem = n, !t.currTemplate[r]) {
                var i = t.st[r] ? t.st[r].markup : !1;
                C("FirstMarkupParse", i), i ? t.currTemplate[r] = e(i) : t.currTemplate[r] = !0
            }
            o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
            var a = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](n, t.currTemplate[r]);
            t.appendContent(a, r), n.preloaded = !0, C(h, n), o = n.type, t.container.prepend(t.contentContainer), C("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(S()) : t.content = e : t.content = "", C(c), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var r, i = t.items[n];
            if (i.tagName ? i = {
                    el: e(i)
                } : (r = i.type, i = {
                    data: i,
                    src: i.src
                }), i.el) {
                for (var o = t.types, a = 0; a < o.length; a++)
                    if (i.el.hasClass("mfp-" + o[a])) {
                        r = o[a];
                        break
                    }
                i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
            }
            return i.type = r || t.st.type || "inline", i.index = n, i.parsed = !0, t.items[n] = i, C("ElementParse", i), t.items[n]
        },
        addGroup: function(e, n) {
            var r = function(r) {
                r.mfpEl = this, t._openClick(r, e, n)
            };
            n || (n = {});
            var i = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(i).on(i, r)) : (n.isObj = !1, n.delegate ? e.off(i).on(i, n.delegate, r) : (n.items = e, e.off(i).on(i, r)))
        },
        _openClick: function(n, r, i) {
            var o = void 0 !== i.midClick ? i.midClick : e.magnificPopup.defaults.midClick;
            if (o || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== i.disableOn ? i.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (b.width() < a) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), i.el = e(n.mfpEl), i.delegate && (i.items = r.find(i.delegate)), t.open(i)
            }
        },
        updateStatus: function(e, r) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), r || "loading" !== e || (r = t.st.tLoading);
                var i = {
                    status: e,
                    text: r
                };
                C("UpdateStatus", i), e = i.status, r = i.text, t.preloader.html(r), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(A)) {
                var r = t.st.closeOnContentClick,
                    i = t.st.closeOnBgClick;
                if (r && i) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (r) return !0
                } else if (i && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || b.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, r) {
            var i;
            r.data && (n = e.extend(r.data, n)), C(f, [t, n, r]), e.each(n, function(e, n) {
                if (void 0 === n || n === !1) return !0;
                if (i = e.split("_"), i.length > 1) {
                    var r = t.find(m + "-" + i[0]);
                    if (r.length > 0) {
                        var o = i[1];
                        "replaceWith" === o ? r[0] !== n[0] && r.replaceWith(n) : "img" === o ? r.is("img") ? r.attr("src", n) : r.replaceWith('<img src="' + n + '" class="' + r.attr("class") + '" />') : r.attr(i[1], n)
                    }
                } else t.find(m + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: N.prototype,
        modules: [],
        open: function(t, n) {
            return E(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function(n) {
        E();
        var r = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var i, o = y ? r.data("magnificPopup") : r[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                o.items ? i = o.items[a] : (i = r, o.delegate && (i = i.find(o.delegate)), i = i.eq(a)), t._openClick({
                    mfpEl: i
                }, r, o)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), y ? r.data("magnificPopup", n) : r[0].magnificPopup = n, t.addGroup(r, n);
        return r
    };
    var k, T, I, P = "inline",
        F = function() {
            I && (T.after(I.addClass(k)).detach(), I = null)
        };
    e.magnificPopup.registerModule(P, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(P), w(d + "." + P, function() {
                    F()
                })
            },
            getInline: function(n, r) {
                if (F(), n.src) {
                    var i = t.st.inline,
                        o = e(n.src);
                    if (o.length) {
                        var a = o[0].parentNode;
                        a && a.tagName && (T || (k = i.hiddenClass, T = x(k), k = "mfp-" + k), I = o.after(T).detach().removeClass(k)), t.updateStatus("ready")
                    } else t.updateStatus("error", i.tNotFound), o = e("<div>");
                    return n.inlineElement = o, o
                }
                return t.updateStatus("ready"), t._parseMarkup(r, {}, n), r
            }
        }
    });
    var M, O = "ajax",
        D = function() {
            M && r.removeClass(M)
        },
        R = function() {
            D(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(O, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(O), M = t.st.ajax.cursor, w(d + "." + O, R), w("BeforeChange." + O, R)
            },
            getAjax: function(n) {
                M && r.addClass(M), t.updateStatus("loading");
                var i = e.extend({
                    url: n.src,
                    success: function(r, i, o) {
                        var a = {
                            data: r,
                            xhr: o
                        };
                        C("ParseAjax", a), t.appendContent(e(a.data), O), n.finished = !0, D(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass($)
                        }, 16), t.updateStatus("ready"), C("AjaxContentAdded")
                    },
                    error: function() {
                        D(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(i), ""
            }
        }
    });
    var L, j = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var r = t.st.image.titleSrc;
        if (r) {
            if (e.isFunction(r)) return r.call(t, n);
            if (n.el) return n.el.attr(r) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image,
                    n = ".image";
                t.types.push("image"), w(p + n, function() {
                    "image" === t.currItem.type && e.cursor && r.addClass(e.cursor)
                }), w(d + n, function() {
                    e.cursor && r.removeClass(e.cursor), b.off("resize" + m)
                }), w("Resize" + n, t.resizeImage), t.isLowIE && w("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, L && clearInterval(L), e.isCheckingImgSize = !1, C("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    r = e.img[0],
                    i = function(o) {
                        L && clearInterval(L), L = setInterval(function() {
                            return r.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(L), n++, void(3 === n ? i(10) : 40 === n ? i(50) : 100 === n && i(500)))
                        }, o)
                    };
                i(1)
            },
            getImage: function(n, r) {
                var i = 0,
                    o = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, C("ImageLoadComplete")) : (i++, 200 > i ? setTimeout(o, 100) : a()))
                    },
                    a = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    d = r.find(".mfp-img");
                if (d.length) {
                    var l = document.createElement("img");
                    l.className = "mfp-img", n.el && n.el.find("img").length && (l.alt = n.el.find("img").attr("alt")), n.img = e(l).on("load.mfploader", o).on("error.mfploader", a), l.src = n.src, d.is("img") && (n.img = n.img.clone()), l = n.img[0], l.naturalWidth > 0 ? n.hasSize = !0 : l.width || (n.hasSize = !1)
                }
                return t._parseMarkup(r, {
                    title: j(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (L && clearInterval(L), n.loadError ? (r.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (r.removeClass("mfp-loading"), t.updateStatus("ready")), r) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, r.addClass("mfp-loading"), t.findImageSize(n)), r)
            }
        }
    });
    var q, U = function() {
        return void 0 === q && (q = void 0 !== document.createElement("p").style.MozTransform), q
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    r = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var i, o, a = n.duration,
                        s = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                r = "all " + n.duration / 1e3 + "s " + n.easing,
                                i = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                o = "transition";
                            return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = r, t.css(i), t
                        },
                        u = function() {
                            t.content.css("visibility", "visible")
                        };
                    w("BuildControls" + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(i), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void u();
                            o = s(e), o.css(t._getOffset()), t.wrap.append(o), i = setTimeout(function() {
                                o.css(t._getOffset(!0)), i = setTimeout(function() {
                                    u(), setTimeout(function() {
                                        o.remove(), e = o = null, C("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), w(l + r, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(i), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                o = s(e)
                            }
                            o.css(t._getOffset(!0)), t.wrap.append(o), t.content.css("visibility", "hidden"), setTimeout(function() {
                                o.css(t._getOffset())
                            }, 16)
                        }
                    }), w(d + r, function() {
                        t._allowZoom() && (u(), o && o.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var r;
                r = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var i = r.offset(),
                    o = parseInt(r.css("padding-top"), 10),
                    a = parseInt(r.css("padding-bottom"), 10);
                i.top -= e(window).scrollTop() - o;
                var s = {
                    width: r.width(),
                    height: (y ? r.innerHeight() : r[0].offsetHeight) - a - o
                };
                return U() ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s
            }
        }
    });
    var B = "iframe",
        z = "//about:blank",
        H = function(e) {
            if (t.currTemplate[B]) {
                var n = t.currTemplate[B].find("iframe");
                n.length && (e || (n[0].src = z), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(B, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(B), w("BeforeChange", function(e, t, n) {
                    t !== n && (t === B ? H() : n === B && H(!0))
                }), w(d + "." + B, function() {
                    H()
                })
            },
            getIframe: function(n, r) {
                var i = n.src,
                    o = t.st.iframe;
                e.each(o.patterns, function() {
                    return i.indexOf(this.index) > -1 ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
                });
                var a = {};
                return o.srcAction && (a[o.srcAction] = i), t._parseMarkup(r, a, n), t.updateStatus("ready"), r
            }
        }
    });
    var V = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        G = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    r = ".mfp-gallery",
                    o = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", w(p + r, function() {
                    n.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), i.on("keydown" + r, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), w("UpdateStatus" + r, function(e, n) {
                    n.text && (n.text = G(n.text, t.currItem.index, t.items.length))
                }), w(f + r, function(e, r, i, o) {
                    var a = t.items.length;
                    i.counter = a > 1 ? G(n.tCounter, o.index, a) : ""
                }), w("BuildControls" + r, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var r = n.arrowMarkup,
                            i = t.arrowLeft = e(r.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(A),
                            a = t.arrowRight = e(r.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(A),
                            s = o ? "mfpFastClick" : "click";
                        i[s](function() {
                            t.prev()
                        }), a[s](function() {
                            t.next()
                        }), t.isIE7 && (x("b", i[0], !1, !0), x("a", i[0], !1, !0), x("b", a[0], !1, !0), x("a", a[0], !1, !0)), t.container.append(i.add(a))
                    }
                }), w(h + r, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void w(d + r, function() {
                    i.off(r), t.wrap.off("click" + r), t.arrowLeft && o && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                })) : !1
            },
            next: function() {
                t.direction = !0, t.index = V(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = V(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    r = Math.min(n[0], t.items.length),
                    i = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? i : r); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? r : i); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = V(n), !t.items[n].preloaded) {
                    var r = t.items[n];
                    r.parsed || (r = t.parseEl(n)), C("LazyLoad", r), "image" === r.type && (r.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        r.hasSize = !0
                    }).on("error.mfploader", function() {
                        r.hasSize = !0, r.loadError = !0, C("LazyLoadError", r)
                    }).attr("src", r.src)), r.preloaded = !0
                }
            }
        }
    });
    var W = "retina";
    e.magnificPopup.registerModule(W, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            n = e.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (w("ImageHasSize." + W, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), w("ElementParse." + W, function(t, r) {
                            r.src = e.replaceSrc(r, n)
                        }))
                    }
                }
            }
        }),
        function() {
            var t = 1e3,
                n = "ontouchstart" in window,
                r = function() {
                    b.off("touchmove" + o + " touchend" + o)
                },
                i = "mfpFastClick",
                o = "." + i;
            e.fn.mfpFastClick = function(i) {
                return e(this).each(function() {
                    var a, s = e(this);
                    if (n) {
                        var d, l, u, c, f, p;
                        s.on("touchstart" + o, function(e) {
                            c = !1, p = 1, f = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], l = f.clientX, u = f.clientY, b.on("touchmove" + o, function(e) {
                                f = e.originalEvent ? e.originalEvent.touches : e.touches, p = f.length, f = f[0], (Math.abs(f.clientX - l) > 10 || Math.abs(f.clientY - u) > 10) && (c = !0, r())
                            }).on("touchend" + o, function(e) {
                                r(), c || p > 1 || (a = !0, e.preventDefault(), clearTimeout(d), d = setTimeout(function() {
                                    a = !1
                                }, t), i())
                            })
                        })
                    }
                    s.on("click" + o, function() {
                        a || i()
                    })
                })
            }, e.fn.destroyMfpFastClick = function() {
                e(this).off("touchstart" + o + " click" + o), n && b.off("touchmove" + o + " touchend" + o)
            }
        }(), E()
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var n = e.data(this[0], "validator");
            return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
            }), this.submit(function(t) {
                function r() {
                    var r;
                    return n.settings.submitHandler ? (n.submitButton && (r = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && r.remove(), !1) : !0
                }
                return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, r()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : r() : (n.focusInvalid(), !1)
            })), n)
        },
        valid: function() {
            var t, n;
            return e(this[0]).is("form") ? t = this.validate().form() : (t = !0, n = e(this[0].form).validate(), this.each(function() {
                t = n.element(this) && t
            })), t
        },
        removeAttrs: function(t) {
            var n = {},
                r = this;
            return e.each(t.split(/\s/), function(e, t) {
                n[t] = r.attr(t), r.removeAttr(t)
            }), n
        },
        rules: function(t, n) {
            var r, i, o, a, s, d, l = this[0];
            if (t) switch (r = e.data(l.form, "validator").settings, i = r.rules, o = e.validator.staticRules(l), t) {
                case "add":
                    e.extend(o, e.validator.normalizeRule(n)), delete o.messages, i[l.name] = o, n.messages && (r.messages[l.name] = e.extend(r.messages[l.name], n.messages));
                    break;
                case "remove":
                    return n ? (d = {}, e.each(n.split(/\s/), function(t, n) {
                        d[n] = o[n], delete o[n], "required" === n && e(l).removeAttr("aria-required")
                    }), d) : (delete i[l.name], o)
            }
            return a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(l), e.validator.attributeRules(l), e.validator.dataRules(l), e.validator.staticRules(l)), l), a.required && (s = a.required, delete a.required, a = e.extend({
                required: s
            }, a), e(l).attr("aria-required", "true")), a.remote && (s = a.remote, delete a.remote, a = e.extend(a, {
                remote: s
            })), a
        }
    }), e.extend(e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + e(t).val())
        },
        filled: function(t) {
            return !!e.trim("" + e(t).val())
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }), e.validator = function(t, n) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
    }, e.validator.format = function(t, n) {
        return 1 === arguments.length ? function() {
            var n = e.makeArray(arguments);
            return n.unshift(t), e.validator.format.apply(this, n)
        } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return n
            })
        }), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(e, t) {
                (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, n, r) {
                "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(r) : e(t).addClass(n).removeClass(r)
            },
            unhighlight: function(t, n, r) {
                "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(r) : e(t).removeClass(n).addClass(r)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var n = e.data(this[0].form, "validator"),
                        r = "on" + t.type.replace(/^validate/, ""),
                        i = n.settings;
                    i[r] && !this.is(i.ignore) && i[r].call(n, this[0], t)
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, r = this.groups = {};
                e.each(this.settings.groups, function(t, n) {
                    "string" == typeof n && (n = n.split(/\s/)), e.each(n, function(e, n) {
                        r[n] = t
                    })
                }), n = this.settings.rules, e.each(n, function(t, r) {
                    n[t] = e.validator.normalizeRule(r)
                }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", t).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                var n = this.clean(t),
                    r = this.validationTargetFor(n),
                    i = !0;
                return this.lastElement = r, void 0 === r ? delete this.invalid[n.name] : (this.prepareElement(r), this.currentElements = e(r), i = this.check(r) !== !1, i ? delete this.invalid[r.name] : this.invalid[r.name] = !0), e(t).attr("aria-invalid", !i), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function(t) {
                if (t) {
                    e.extend(this.errorMap, t), this.errorList = [];
                    for (var n in t) this.errorList.push({
                        message: t[n],
                        element: this.findByName(n)[0]
                    });
                    this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, n = 0;
                for (t in e) n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this,
                    n = {};
                return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0)
                })
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var n, r = e(t),
                    i = t.type;
                return "radio" === i || "checkbox" === i ? e("input[name='" + t.name + "']:checked").val() : "number" === i && "undefined" != typeof t.validity ? t.validity.badInput ? !1 : r.val() : (n = r.val(), "string" == typeof n ? n.replace(/\r/g, "") : n)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var n, r, i, o = e(t).rules(),
                    a = e.map(o, function(e, t) {
                        return t
                    }).length,
                    s = !1,
                    d = this.elementValue(t);
                for (r in o) {
                    i = {
                        method: r,
                        parameters: o[r]
                    };
                    try {
                        if (n = e.validator.methods[r].call(this, d, t, i.parameters), "dependency-mismatch" === n && 1 === a) {
                            s = !0;
                            continue
                        }
                        if (s = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!n) return this.formatAndAdd(t, i), !1
                    } catch (l) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", l), l
                    }
                }
                if (!s) return this.objectLength(o) && this.successList.push(t), !0
            },
            customDataMessage: function(t, n) {
                return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e];
                return void 0
            },
            defaultMessage: function(t, n) {
                return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
            },
            formatAndAdd: function(t, n) {
                var r = this.defaultMessage(t, n.method),
                    i = /\$?\{(\d+)\}/g;
                "function" == typeof r ? r = r.call(this, n.parameters, t) : i.test(r) && (r = e.validator.format(r.replace(i, "{$1}"), n.parameters)), this.errorList.push({
                    message: r,
                    element: t,
                    method: n.method
                }), this.errorMap[t.name] = r, this.submitted[t.name] = r
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, n) {
                var r, i, o, a = this.errorsFor(t),
                    s = this.idOrName(t),
                    d = e(t).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(n || ""), r = a, this.settings.wrapper && (r = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(r) : this.settings.errorPlacement ? this.settings.errorPlacement(r, e(t)) : r.insertAfter(t), a.is("label") ? a.attr("for", s) : 0 === a.parents("label[for='" + s + "']").length && (o = a.attr("id"), d ? d.match(new RegExp("\b" + o + "\b")) || (d += " " + o) : d = o, e(t).attr("aria-describedby", d), i = this.groups[t.name], i && e.each(this.groups, function(t, n) {
                    n === i && e("[name='" + t + "']", this.currentForm).attr("aria-describedby", a.attr("id"))
                }))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
            },
            errorsFor: function(t) {
                var n = this.idOrName(t),
                    r = e(t).attr("aria-describedby"),
                    i = "label[for='" + n + "'], label[for='" + n + "'] *";
                return r && (i = i + ", #" + r.replace(/\s+/g, ", #")), this.errors().filter(i)
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, n) {
                switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
            },
            dependTypes: {
                "boolean": function(e) {
                    return e
                },
                string: function(t, n) {
                    return !!e(t, n.form).length
                },
                "function": function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var n = this.elementValue(t);
                return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
            },
            stopRequest: function(t, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, n) {
            t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var n = {},
                r = e(t).attr("class");
            return r && e.each(r.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
            }), n
        },
        attributeRules: function(t) {
            var n, r, i = {},
                o = e(t),
                a = t.getAttribute("type");
            for (n in e.validator.methods) "required" === n ? (r = t.getAttribute(n), "" === r && (r = !0), r = !!r) : r = o.attr(n), /min|max/.test(n) && (null === a || /number|range|text/.test(a)) && (r = Number(r)), r || 0 === r ? i[n] = r : a === n && "range" !== a && (i[n] = !0);
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        dataRules: function(t) {
            var n, r, i = {},
                o = e(t);
            for (n in e.validator.methods) r = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), void 0 !== r && (i[n] = r);
            return i
        },
        staticRules: function(t) {
            var n = {},
                r = e.data(t.form, "validator");
            return r.settings.rules && (n = e.validator.normalizeRule(r.settings.rules[t.name]) || {}), n
        },
        normalizeRules: function(t, n) {
            return e.each(t, function(r, i) {
                if (i === !1) return void delete t[r];
                if (i.param || i.depends) {
                    var o = !0;
                    switch (typeof i.depends) {
                        case "string":
                            o = !!e(i.depends, n.form).length;
                            break;
                        case "function":
                            o = i.depends.call(n, n)
                    }
                    o ? t[r] = void 0 !== i.param ? i.param : !0 : delete t[r]
                }
            }), e.each(t, function(r, i) {
                t[r] = e.isFunction(i) ? i(n) : i
            }), e.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function() {
                var n;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
            }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), function() {
                    n[this] = !0
                }), t = n
            }
            return t
        },
        addMethod: function(t, n, r) {
            e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== r ? r : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, n, r) {
                if (!this.depend(r, n)) return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var i = e(n).val();
                    return i && i.length > 0
                }
                return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e);
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            creditcard: function(e, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(e)) return !1;
                var n, r, i = 0,
                    o = 0,
                    a = !1;
                if (e = e.replace(/\D/g, ""), e.length < 13 || e.length > 19) return !1;
                for (n = e.length - 1; n >= 0; n--) r = e.charAt(n), o = parseInt(r, 10), a && (o *= 2) > 9 && (o -= 9), i += o, a = !a;
                return i % 10 === 0
            },
            minlength: function(t, n, r) {
                var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                return this.optional(n) || i >= r
            },
            maxlength: function(t, n, r) {
                var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                return this.optional(n) || r >= i
            },
            rangelength: function(t, n, r) {
                var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                return this.optional(n) || i >= r[0] && i <= r[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || e >= n
            },
            max: function(e, t, n) {
                return this.optional(t) || n >= e
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            equalTo: function(t, n, r) {
                var i = e(r);
                return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    e(n).valid()
                }), t === i.val()
            },
            remote: function(t, n, r) {
                if (this.optional(n)) return "dependency-mismatch";
                var i, o, a = this.previousValue(n);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), a.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = a.message, r = "string" == typeof r && {
                    url: r
                } || r, a.old === t ? a.valid : (a.old = t, i = this, this.startRequest(n), o = {}, o[n.name] = t, e.ajax(e.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: o,
                    context: i.currentForm,
                    success: function(r) {
                        var o, s, d, l = r === !0 || "true" === r;
                        i.settings.messages[n.name].remote = a.originalMessage, l ? (d = i.formSubmitted, i.prepareElement(n), i.formSubmitted = d, i.successList.push(n), delete i.invalid[n.name], i.showErrors()) : (o = {}, s = r || i.defaultMessage(n, "remote"), o[n.name] = a.message = e.isFunction(s) ? s(t) : s, i.invalid[n.name] = !0, i.showErrors(o)), a.valid = l, i.stopRequest(n, l)
                    }
                }, r)), "pending")
            }
        }
    }), e.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    };
    var t, n = {};
    e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, r) {
        var i = e.port;
        "abort" === e.mode && (n[i] && n[i].abort(), n[i] = r)
    }) : (t = e.ajax, e.ajax = function(r) {
        var i = ("mode" in r ? r : e.ajaxSettings).mode,
            o = ("port" in r ? r : e.ajaxSettings).port;
        return "abort" === i ? (n[o] && n[o].abort(), n[o] = t.apply(this, arguments), n[o]) : t.apply(this, arguments)
    }), e.extend(e.fn, {
        validateDelegate: function(t, n, r) {
            return this.bind(n, function(n) {
                var i = e(n.target);
                return i.is(t) ? r.apply(i, arguments) : void 0
            })
        }
    })
}),
function() {
    var e, t, n, r, i;
    $(document).on("submit", ".sign-in-user", function(t) {
        var n;
        return r(), n = $(this).serialize(), $.ajax({
            url: $(this).attr("action") + ".json",
            type: "POST",
            data: n,
            dataType: "json",
            success: function(e) {
                return window.location.href = e.redirect
            },
            error: function(t) {
                return e(t)
            }
        }), !1
    }), e = function(e) {
        return $(".invalid-account-credentials").show()
    }, $(document).on("submit", ".sign-up-user", function(e) {
        var i;
        return r(), t(), $(this).valid() && ($(this).removeClass("invalid-form-sign-up"), i = $(this).serialize(), $.ajax({
            url: $(this).attr("action") + ".json",
            type: "POST",
            data: i,
            dataType: "json",
            success: function(e) {
                return window.location.replace("/dashboard")
            },
            error: function(e) {
                return n(e)
            }
        })), !1
    }), t = function() {
        var e, t, n;
        return t = $("#user_email"), i($("#email"), "Email is required", t.valid()), n = $("#user_password"), i($("#password"), "Password is required", n.valid()), e = $("#user_password_confirmation"), i($("#password_confirmation"), "Password Confirmation is required", e.valid())
    }, n = function(e) {
        var t, n, r, i;
        r = e.responseJSON.errors, i = [];
        for (n in r) t = $("#" + n), i.push(t.find(".error-message").html(r[n]).show());
        return i
    }, r = function() {
        return $(".invalid-account-credentials").hide()
    }, i = function(e, t, n) {
        return n ? e.find(".error-message").hide() : e.find(".error-message").html(t).show()
    }
}.call(this),
    function() {
        var e, t, n, r;
        $(document).on("submit", ".password-reset-js", function(e) {
            var i;
            return e.preventDefault(), r(), i = $(this).serialize(), $(this).valid() ? $.ajax({
                url: $(this).attr("action") + ".json",
                type: "POST",
                data: i,
                dataType: "json",
                success: function(e) {
                    return n()
                },
                error: function(e) {
                    return t()
                }
            }) : t(), !1
        }), n = function() {
            var t, n, r, i, o;
            return i = $(".password-reset-js"), o = "You will receive an email with instructions on how to reset your password in a few minutes.", n = i.find("label"), n.html(o), r = i.find(".email-password-fields"), r.remove(), t = i.find(".button-bordered"), t.attr("disabled", "disabled"), setTimeout(e, 4e3)
        }, e = function() {
            $.magnificPopup.close()
        }, t = function() {
            return $(".invalid-account-credentials").show()
        }, r = function() {
            return $(".invalid-account-credentials").hide()
        }
    }.call(this),
    function() {
        $(document).ready(function() {
            return $(".open-popup-link").length && $(".open-popup-link").magnificPopup({
                type: "inline",
                midClick: !0,
                fixedContentPos: !0,
                callbacks: Utils.magnificPopupConfiguration()
            }), $(".validate-form").length && $(".validate-form").validate(), $("body").stellar({
                horizontalScrolling: !1,
                responsive: !0
            })
        })
    }.call(this),
    function() {
        $(function() {
            function e() {
                r = window.pageYOffset, t()
            }

            function t() {
                i || window.requestAnimationFrame(n), i = !0
            }

            function n() {
                i = !1;
                var e = r;
                e >= o ? $header.addClass("sticky-menu") : $header.removeClass("sticky-menu")
            }
            var r = 0,
                i = !1,
                o = 90;
            $header = $("#header__container"), $(window).on("scroll", e)
        })
    }.call(this),
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return t = t || Error,
                function() {
                    var n, r, i = 2,
                        o = arguments,
                        a = o[0],
                        s = "[" + (e ? e + ":" : "") + a + "] ",
                        d = o[1];
                    for (s += d.replace(/\{\d+\}/g, function(e) {
                            var t = +e.slice(1, -1),
                                n = t + i;
                            return n < o.length ? Ae(o[n]) : e
                        }), s += "\nhttp://errors.angularjs.org/1.4.7/" + (e ? e + "/" : "") + a, r = i, n = "?"; r < o.length; r++, n = "&") s += n + "p" + (r - i) + "=" + encodeURIComponent(Ae(o[r]));
                    return new t(s)
                }
        }

        function i(e) {
            if (null == e || _(e)) return !1;
            var t = "length" in Object(e) && e.length;
            return e.nodeType === Wr && t ? !0 : w(e) || Lr(e) || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function o(e, t, n) {
            var r, a;
            if (e)
                if (S(e))
                    for (r in e) "prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r, e);
                else if (Lr(e) || i(e)) {
                var s = "object" != typeof e;
                for (r = 0, a = e.length; a > r; r++)(s || r in e) && t.call(n, e[r], r, e)
            } else if (e.forEach && e.forEach !== o) e.forEach(t, n, e);
            else if (b(e))
                for (r in e) t.call(n, e[r], r, e);
            else if ("function" == typeof e.hasOwnProperty)
                for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
            else
                for (r in e) yr.call(e, r) && t.call(n, e[r], r, e);
            return e
        }

        function a(e, t, n) {
            for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
            return r
        }

        function s(e) {
            return function(t, n) {
                e(n, t)
            }
        }

        function d() {
            return ++Dr
        }

        function l(e, t) {
            t ? e.$$hashKey = t : delete e.$$hashKey
        }

        function u(e, t, n) {
            for (var r = e.$$hashKey, i = 0, o = t.length; o > i; ++i) {
                var a = t[i];
                if (y(a) || S(a))
                    for (var s = Object.keys(a), d = 0, c = s.length; c > d; d++) {
                        var f = s[d],
                            p = a[f];
                        n && y(p) ? C(p) ? e[f] = new Date(p.valueOf()) : E(p) ? e[f] = new RegExp(p) : (y(e[f]) || (e[f] = Lr(p) ? [] : {}), u(e[f], [p], !0)) : e[f] = p
                    }
            }
            return l(e, r), e
        }

        function c(e) {
            return u(e, kr.call(arguments, 1), !1)
        }

        function f(e) {
            return u(e, kr.call(arguments, 1), !0)
        }

        function p(e) {
            return parseInt(e, 10)
        }

        function h(e, t) {
            return c(Object.create(e), t)
        }

        function g() {}

        function m(e) {
            return e
        }

        function $(e) {
            return function() {
                return e
            }
        }

        function v(e) {
            return S(e.toString) && e.toString !== Object.prototype.toString
        }

        function A(e) {
            return "undefined" == typeof e
        }

        function N(e) {
            return "undefined" != typeof e
        }

        function y(e) {
            return null !== e && "object" == typeof e
        }

        function b(e) {
            return null !== e && "object" == typeof e && !Fr(e)
        }

        function w(e) {
            return "string" == typeof e
        }

        function x(e) {
            return "number" == typeof e
        }

        function C(e) {
            return "[object Date]" === Pr.call(e)
        }

        function S(e) {
            return "function" == typeof e
        }

        function E(e) {
            return "[object RegExp]" === Pr.call(e)
        }

        function _(e) {
            return e && e.window === e
        }

        function k(e) {
            return e && e.$evalAsync && e.$watch
        }

        function T(e) {
            return "[object File]" === Pr.call(e)
        }

        function I(e) {
            return "[object FormData]" === Pr.call(e)
        }

        function P(e) {
            return "[object Blob]" === Pr.call(e)
        }

        function F(e) {
            return "boolean" == typeof e
        }

        function M(e) {
            return e && S(e.then)
        }

        function O(e) {
            return jr.test(Pr.call(e))
        }

        function D(e) {
            return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
        }

        function R(e) {
            var t, n = {},
                r = e.split(",");
            for (t = 0; t < r.length; t++) n[r[t]] = !0;
            return n
        }

        function L(e) {
            return Nr(e.nodeName || e[0] && e[0].nodeName)
        }

        function j(e, t) {
            var n = e.indexOf(t);
            return n >= 0 && e.splice(n, 1), n
        }

        function q(e, t, n, r) {
            if (_(e) || k(e)) throw Mr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            if (O(t)) throw Mr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
            if (t) {
                if (e === t) throw Mr("cpi", "Can't copy! Source and destination are identical.");
                n = n || [], r = r || [], y(e) && (n.push(e), r.push(t));
                var i;
                if (Lr(e)) {
                    t.length = 0;
                    for (var a = 0; a < e.length; a++) t.push(q(e[a], null, n, r))
                } else {
                    var s = t.$$hashKey;
                    if (Lr(t) ? t.length = 0 : o(t, function(e, n) {
                            delete t[n]
                        }), b(e))
                        for (i in e) t[i] = q(e[i], null, n, r);
                    else if (e && "function" == typeof e.hasOwnProperty)
                        for (i in e) e.hasOwnProperty(i) && (t[i] = q(e[i], null, n, r));
                    else
                        for (i in e) yr.call(e, i) && (t[i] = q(e[i], null, n, r));
                    l(t, s)
                }
            } else if (t = e, y(e)) {
                var d;
                if (n && -1 !== (d = n.indexOf(e))) return r[d];
                if (Lr(e)) return q(e, [], n, r);
                if (O(e)) t = new e.constructor(e);
                else if (C(e)) t = new Date(e.getTime());
                else if (E(e)) t = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex;
                else {
                    if (!S(e.cloneNode)) {
                        var u = Object.create(Fr(e));
                        return q(e, u, n, r)
                    }
                    t = e.cloneNode(!0)
                }
                r && (n.push(e), r.push(t))
            }
            return t
        }

        function U(e, t) {
            if (Lr(e)) {
                t = t || [];
                for (var n = 0, r = e.length; r > n; n++) t[n] = e[n]
            } else if (y(e)) {
                t = t || {};
                for (var i in e)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (t[i] = e[i])
            }
            return t || e
        }

        function B(e, t) {
            if (e === t) return !0;
            if (null === e || null === t) return !1;
            if (e !== e && t !== t) return !0;
            var n, r, i, o = typeof e,
                a = typeof t;
            if (o == a && "object" == o) {
                if (!Lr(e)) {
                    if (C(e)) return C(t) ? B(e.getTime(), t.getTime()) : !1;
                    if (E(e)) return E(t) ? e.toString() == t.toString() : !1;
                    if (k(e) || k(t) || _(e) || _(t) || Lr(t) || C(t) || E(t)) return !1;
                    i = me();
                    for (r in e)
                        if ("$" !== r.charAt(0) && !S(e[r])) {
                            if (!B(e[r], t[r])) return !1;
                            i[r] = !0
                        }
                    for (r in t)
                        if (!(r in i) && "$" !== r.charAt(0) && N(t[r]) && !S(t[r])) return !1;
                    return !0
                }
                if (!Lr(t)) return !1;
                if ((n = e.length) == t.length) {
                    for (r = 0; n > r; r++)
                        if (!B(e[r], t[r])) return !1;
                    return !0
                }
            }
            return !1
        }

        function z(e, t, n) {
            return e.concat(kr.call(t, n))
        }

        function H(e, t) {
            return kr.call(e, t || 0)
        }

        function V(e, t) {
            var n = arguments.length > 2 ? H(arguments, 2) : [];
            return !S(t) || t instanceof RegExp ? t : n.length ? function() {
                return arguments.length ? t.apply(e, z(n, arguments, 0)) : t.apply(e, n)
            } : function() {
                return arguments.length ? t.apply(e, arguments) : t.call(e)
            }
        }

        function G(e, r) {
            var i = r;
            return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? i = n : _(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : k(r) && (i = "$SCOPE"), i
        }

        function W(e, t) {
            return "undefined" == typeof e ? n : (x(t) || (t = t ? 2 : null), JSON.stringify(e, G, t))
        }

        function K(e) {
            return w(e) ? JSON.parse(e) : e
        }

        function Y(e, t) {
            var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
            return isNaN(n) ? t : n
        }

        function Z(e, t) {
            return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
        }

        function X(e, t, n) {
            n = n ? -1 : 1;
            var r = Y(t, e.getTimezoneOffset());
            return Z(e, n * (r - e.getTimezoneOffset()))
        }

        function J(e) {
            e = Sr(e).clone();
            try {
                e.empty()
            } catch (t) {}
            var n = Sr("<div>").append(e).html();
            try {
                return e[0].nodeType === Yr ? Nr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
                    return "<" + Nr(t)
                })
            } catch (t) {
                return Nr(n)
            }
        }

        function Q(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {}
        }

        function ee(e) {
            var t = {};
            return o((e || "").split("&"), function(e) {
                var n, r, i;
                e && (r = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), -1 !== n && (r = e.substring(0, n), i = e.substring(n + 1)), r = Q(r), N(r) && (i = N(i) ? Q(i) : !0, yr.call(t, r) ? Lr(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
            }), t
        }

        function te(e) {
            var t = [];
            return o(e, function(e, n) {
                Lr(e) ? o(e, function(e) {
                    t.push(re(n, !0) + (e === !0 ? "" : "=" + re(e, !0)))
                }) : t.push(re(n, !0) + (e === !0 ? "" : "=" + re(e, !0)))
            }), t.length ? t.join("&") : ""
        }

        function ne(e) {
            return re(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function re(e, t) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
        }

        function ie(e, t) {
            var n, r, i = Hr.length;
            for (r = 0; i > r; ++r)
                if (n = Hr[r] + t, w(n = e.getAttribute(n))) return n;
            return null
        }

        function oe(e, t) {
            var n, r, i = {};
            o(Hr, function(t) {
                var i = t + "app";
                !n && e.hasAttribute && e.hasAttribute(i) && (n = e, r = e.getAttribute(i))
            }), o(Hr, function(t) {
                var i, o = t + "app";
                !n && (i = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
            }), n && (i.strictDi = null !== ie(n, "strict-di"), t(n, r ? [r] : [], i))
        }

        function ae(n, r, i) {
            y(i) || (i = {});
            var a = {
                strictDi: !1
            };
            i = c(a, i);
            var s = function() {
                    if (n = Sr(n), n.injector()) {
                        var e = n[0] === t ? "document" : J(n);
                        throw Mr("btstrpd", "App Already Bootstrapped with this Element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
                    }
                    r = r || [], r.unshift(["$provide", function(e) {
                        e.value("$rootElement", n)
                    }]), i.debugInfoEnabled && r.push(["$compileProvider", function(e) {
                        e.debugInfoEnabled(!0)
                    }]), r.unshift("ng");
                    var o = Je(r, i.strictDi);
                    return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                        e.$apply(function() {
                            t.data("$injector", r), n(t)(e)
                        })
                    }]), o
                },
                d = /^NG_ENABLE_DEBUG_INFO!/,
                l = /^NG_DEFER_BOOTSTRAP!/;
            return e && d.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(d, "")), e && !l.test(e.name) ? s() : (e.name = e.name.replace(l, ""), Or.resumeBootstrap = function(e) {
                return o(e, function(e) {
                    r.push(e)
                }), s()
            }, void(S(Or.resumeDeferredBootstrap) && Or.resumeDeferredBootstrap()))
        }

        function se() {
            e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
        }

        function de(e) {
            var t = Or.element(e).injector();
            if (!t) throw Mr("test", "no injector found for element argument to getTestability");
            return t.get("$$testability")
        }

        function le(e, t) {
            return t = t || "_", e.replace(Vr, function(e, n) {
                return (n ? t : "") + e.toLowerCase()
            })
        }

        function ue() {
            var t;
            if (!Gr) {
                var r = zr();
                Er = A(r) ? e.jQuery : r ? e[r] : n, Er && Er.fn.on ? (Sr = Er, c(Er.fn, {
                    scope: pi.scope,
                    isolateScope: pi.isolateScope,
                    controller: pi.controller,
                    injector: pi.injector,
                    inheritedData: pi.inheritedData
                }), t = Er.cleanData, Er.cleanData = function(e) {
                    var n;
                    if (Rr) Rr = !1;
                    else
                        for (var r, i = 0; null != (r = e[i]); i++) n = Er._data(r, "events"), n && n.$destroy && Er(r).triggerHandler("$destroy");
                    t(e)
                }) : Sr = _e, Or.element = Sr, Gr = !0
            }
        }

        function ce(e, t, n) {
            if (!e) throw Mr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
            return e
        }

        function fe(e, t, n) {
            return n && Lr(e) && (e = e[e.length - 1]), ce(S(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
        }

        function pe(e, t) {
            if ("hasOwnProperty" === e) throw Mr("badname", "hasOwnProperty is not a valid {0} name", t)
        }

        function he(e, t, n) {
            if (!t) return e;
            for (var r, i = t.split("."), o = e, a = i.length, s = 0; a > s; s++) r = i[s], e && (e = (o = e)[r]);
            return !n && S(e) ? V(o, e) : e
        }

        function ge(e) {
            for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(t || e[i] !== n) && (t || (t = Sr(kr.call(e, 0, i))), t.push(n));
            return t || e
        }

        function me() {
            return Object.create(null)
        }

        function $e(e) {
            function t(e, t, n) {
                return e[t] || (e[t] = n())
            }
            var n = r("$injector"),
                i = r("ng"),
                o = t(e, "angular", Object);
            return o.$$minErr = o.$$minErr || r, t(o, "module", function() {
                var e = {};
                return function(r, o, a) {
                    var s = function(e, t) {
                        if ("hasOwnProperty" === e) throw i("badname", "hasOwnProperty is not a valid {0} name", t)
                    };
                    return s(r, "module"), o && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function() {
                        function e(e, t, n, r) {
                            return r || (r = i),
                                function() {
                                    return r[n || "push"]([e, t, arguments]), u
                                }
                        }

                        function t(e, t) {
                            return function(n, o) {
                                return o && S(o) && (o.$$moduleName = r), i.push([e, t, arguments]), u
                            }
                        }
                        if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                        var i = [],
                            s = [],
                            d = [],
                            l = e("$injector", "invoke", "push", s),
                            u = {
                                _invokeQueue: i,
                                _configBlocks: s,
                                _runBlocks: d,
                                requires: o,
                                name: r,
                                provider: t("$provide", "provider"),
                                factory: t("$provide", "factory"),
                                service: t("$provide", "service"),
                                value: e("$provide", "value"),
                                constant: e("$provide", "constant", "unshift"),
                                decorator: t("$provide", "decorator"),
                                animation: t("$animateProvider", "register"),
                                filter: t("$filterProvider", "register"),
                                controller: t("$controllerProvider", "register"),
                                directive: t("$compileProvider", "directive"),
                                config: l,
                                run: function(e) {
                                    return d.push(e), this
                                }
                            };
                        return a && l(a), u
                    })
                }
            })
        }

        function ve(e) {
            var t = [];
            return JSON.stringify(e, function(e, n) {
                if (n = G(e, n), y(n)) {
                    if (t.indexOf(n) >= 0) return "...";
                    t.push(n)
                }
                return n
            })
        }

        function Ae(e) {
            return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : A(e) ? "undefined" : "string" != typeof e ? ve(e) : e
        }

        function Ne(t) {
            c(t, {
                bootstrap: ae,
                copy: q,
                extend: c,
                merge: f,
                equals: B,
                element: Sr,
                forEach: o,
                injector: Je,
                noop: g,
                bind: V,
                toJson: W,
                fromJson: K,
                identity: m,
                isUndefined: A,
                isDefined: N,
                isString: w,
                isFunction: S,
                isObject: y,
                isNumber: x,
                isElement: D,
                isArray: Lr,
                version: Qr,
                isDate: C,
                lowercase: Nr,
                uppercase: br,
                callbacks: {
                    counter: 0
                },
                getTestability: de,
                $$minErr: r,
                $$csp: Br,
                reloadWithDebugInfo: se
            }), (_r = $e(e))("ng", ["ngLocale"], ["$provide", function(e) {
                e.provider({
                    $$sanitizeUri: $n
                }), e.provider("$compile", dt).directive({
                    a: ho,
                    input: Io,
                    textarea: Io,
                    form: Ao,
                    script: wa,
                    select: Sa,
                    style: _a,
                    option: Ea,
                    ngBind: Mo,
                    ngBindHtml: Do,
                    ngBindTemplate: Oo,
                    ngClass: Lo,
                    ngClassEven: qo,
                    ngClassOdd: jo,
                    ngCloak: Uo,
                    ngController: Bo,
                    ngForm: No,
                    ngHide: $a,
                    ngIf: Vo,
                    ngInclude: Go,
                    ngInit: Ko,
                    ngNonBindable: da,
                    ngPluralize: fa,
                    ngRepeat: pa,
                    ngShow: ma,
                    ngStyle: va,
                    ngSwitch: Aa,
                    ngSwitchWhen: Na,
                    ngSwitchDefault: ya,
                    ngOptions: ca,
                    ngTransclude: ba,
                    ngModel: oa,
                    ngList: Yo,
                    ngChange: Ro,
                    pattern: Ta,
                    ngPattern: Ta,
                    required: ka,
                    ngRequired: ka,
                    minlength: Pa,
                    ngMinlength: Pa,
                    maxlength: Ia,
                    ngMaxlength: Ia,
                    ngValue: Fo,
                    ngModelOptions: sa
                }).directive({
                    ngInclude: Wo
                }).directive(go).directive(zo), e.provider({
                    $anchorScroll: Qe,
                    $animate: _i,
                    $animateCss: ki,
                    $$animateQueue: Ei,
                    $$AnimateRunner: Si,
                    $browser: ot,
                    $cacheFactory: at,
                    $controller: pt,
                    $document: ht,
                    $exceptionHandler: gt,
                    $filter: In,
                    $$forceReflow: Mi,
                    $interpolate: kt,
                    $interval: Tt,
                    $http: Ct,
                    $httpParamSerializer: $t,
                    $httpParamSerializerJQLike: vt,
                    $httpBackend: Et,
                    $xhrFactory: St,
                    $location: Ht,
                    $log: Vt,
                    $parse: cn,
                    $rootScope: mn,
                    $q: fn,
                    $$q: pn,
                    $sce: yn,
                    $sceDelegate: Nn,
                    $sniffer: bn,
                    $templateCache: st,
                    $templateRequest: wn,
                    $$testability: xn,
                    $timeout: Cn,
                    $window: _n,
                    $$rAF: gn,
                    $$jqLite: We,
                    $$HashMap: $i,
                    $$cookieReader: Tn
                })
            }])
        }

        function ye() {
            return ++ti
        }

        function be(e) {
            return e.replace(ii, function(e, t, n, r) {
                return r ? n.toUpperCase() : n
            }).replace(oi, "Moz$1")
        }

        function we(e) {
            return !li.test(e)
        }

        function xe(e) {
            var t = e.nodeType;
            return t === Wr || !t || t === Xr
        }

        function Ce(e) {
            for (var t in ei[e.ng339]) return !0;
            return !1
        }

        function Se(e, t) {
            var n, r, i, a, s = t.createDocumentFragment(),
                d = [];
            if (we(e)) d.push(t.createTextNode(e));
            else {
                for (n = n || s.appendChild(t.createElement("div")), r = (ui.exec(e) || ["", ""])[1].toLowerCase(), i = fi[r] || fi._default, n.innerHTML = i[1] + e.replace(ci, "<$1></$2>") + i[2], a = i[0]; a--;) n = n.lastChild;
                d = z(d, n.childNodes), n = s.firstChild, n.textContent = ""
            }
            return s.textContent = "", s.innerHTML = "", o(d, function(e) {
                s.appendChild(e)
            }), s
        }

        function Ee(e, n) {
            n = n || t;
            var r;
            return (r = di.exec(e)) ? [n.createElement(r[1])] : (r = Se(e, n)) ? r.childNodes : []
        }

        function _e(e) {
            if (e instanceof _e) return e;
            var t;
            if (w(e) && (e = qr(e), t = !0), !(this instanceof _e)) {
                if (t && "<" != e.charAt(0)) throw si("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new _e(e)
            }
            t ? Le(this, Ee(e)) : Le(this, e)
        }

        function ke(e) {
            return e.cloneNode(!0)
        }

        function Te(e, t) {
            if (t || Pe(e), e.querySelectorAll)
                for (var n = e.querySelectorAll("*"), r = 0, i = n.length; i > r; r++) Pe(n[r])
        }

        function Ie(e, t, n, r) {
            if (N(r)) throw si("offargs", "jqLite#off() does not support the `selector` argument");
            var i = Fe(e),
                a = i && i.events,
                s = i && i.handle;
            if (s)
                if (t) o(t.split(" "), function(t) {
                    if (N(n)) {
                        var r = a[t];
                        if (j(r || [], n), r && r.length > 0) return
                    }
                    ri(e, t, s), delete a[t]
                });
                else
                    for (t in a) "$destroy" !== t && ri(e, t, s), delete a[t]
        }

        function Pe(e, t) {
            var r = e.ng339,
                i = r && ei[r];
            if (i) {
                if (t) return void delete i.data[t];
                i.handle && (i.events.$destroy && i.handle({}, "$destroy"), Ie(e)), delete ei[r], e.ng339 = n
            }
        }

        function Fe(e, t) {
            var r = e.ng339,
                i = r && ei[r];
            return t && !i && (e.ng339 = r = ye(), i = ei[r] = {
                events: {},
                data: {},
                handle: n
            }), i
        }

        function Me(e, t, n) {
            if (xe(e)) {
                var r = N(n),
                    i = !r && t && !y(t),
                    o = !t,
                    a = Fe(e, !i),
                    s = a && a.data;
                if (r) s[t] = n;
                else {
                    if (o) return s;
                    if (i) return s && s[t];
                    c(s, t)
                }
            }
        }

        function Oe(e, t) {
            return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
        }

        function De(e, t) {
            t && e.setAttribute && o(t.split(" "), function(t) {
                e.setAttribute("class", qr((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + qr(t) + " ", " ")))
            })
        }

        function Re(e, t) {
            if (t && e.setAttribute) {
                var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                o(t.split(" "), function(e) {
                    e = qr(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
                }), e.setAttribute("class", qr(n))
            }
        }

        function Le(e, t) {
            if (t)
                if (t.nodeType) e[e.length++] = t;
                else {
                    var n = t.length;
                    if ("number" == typeof n && t.window !== t) {
                        if (n)
                            for (var r = 0; n > r; r++) e[e.length++] = t[r]
                    } else e[e.length++] = t
                }
        }

        function je(e, t) {
            return qe(e, "$" + (t || "ngController") + "Controller")
        }

        function qe(e, t, n) {
            e.nodeType == Xr && (e = e.documentElement);
            for (var r = Lr(t) ? t : [t]; e;) {
                for (var i = 0, o = r.length; o > i; i++)
                    if (N(n = Sr.data(e, r[i]))) return n;
                e = e.parentNode || e.nodeType === Jr && e.host
            }
        }

        function Ue(e) {
            for (Te(e, !0); e.firstChild;) e.removeChild(e.firstChild)
        }

        function Be(e, t) {
            t || Te(e);
            var n = e.parentNode;
            n && n.removeChild(e)
        }

        function ze(t, n) {
            n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : Sr(n).on("load", t)
        }

        function He(e, t) {
            var n = hi[t.toLowerCase()];
            return n && gi[L(e)] && n
        }

        function Ve(e) {
            return mi[e]
        }

        function Ge(e, t) {
            var n = function(n, r) {
                n.isDefaultPrevented = function() {
                    return n.defaultPrevented
                };
                var i = t[r || n.type],
                    o = i ? i.length : 0;
                if (o) {
                    if (A(n.immediatePropagationStopped)) {
                        var a = n.stopImmediatePropagation;
                        n.stopImmediatePropagation = function() {
                            n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                        }
                    }
                    n.isImmediatePropagationStopped = function() {
                        return n.immediatePropagationStopped === !0
                    }, o > 1 && (i = U(i));
                    for (var s = 0; o > s; s++) n.isImmediatePropagationStopped() || i[s].call(e, n)
                }
            };
            return n.elem = e, n
        }

        function We() {
            this.$get = function() {
                return c(_e, {
                    hasClass: function(e, t) {
                        return e.attr && (e = e[0]), Oe(e, t)
                    },
                    addClass: function(e, t) {
                        return e.attr && (e = e[0]), Re(e, t)
                    },
                    removeClass: function(e, t) {
                        return e.attr && (e = e[0]), De(e, t)
                    }
                })
            }
        }

        function Ke(e, t) {
            var n = e && e.$$hashKey;
            if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
            var r = typeof e;
            return n = "function" == r || "object" == r && null !== e ? e.$$hashKey = r + ":" + (t || d)() : r + ":" + e
        }

        function Ye(e, t) {
            if (t) {
                var n = 0;
                this.nextUid = function() {
                    return ++n
                }
            }
            o(e, this.put, this)
        }

        function Ze(e) {
            var t = e.toString().replace(yi, ""),
                n = t.match(vi);
            return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
        }

        function Xe(e, t, n) {
            var r, i, a, s;
            if ("function" == typeof e) {
                if (!(r = e.$inject)) {
                    if (r = [], e.length) {
                        if (t) throw w(n) && n || (n = e.name || Ze(e)), bi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                        i = e.toString().replace(yi, ""), a = i.match(vi), o(a[1].split(Ai), function(e) {
                            e.replace(Ni, function(e, t, n) {
                                r.push(n)
                            })
                        })
                    }
                    e.$inject = r
                }
            } else Lr(e) ? (s = e.length - 1, fe(e[s], "fn"), r = e.slice(0, s)) : fe(e, "fn", !0);
            return r
        }

        function Je(e, t) {
            function r(e) {
                return function(t, n) {
                    return y(t) ? void o(t, s(e)) : e(t, n)
                }
            }

            function i(e, t) {
                if (pe(e, "service"), (S(t) || Lr(t)) && (t = x.instantiate(t)), !t.$get) throw bi("pget", "Provider '{0}' must define $get factory method.", e);
                return b[e + m] = t
            }

            function a(e, t) {
                return function() {
                    var n = E.invoke(t, this);
                    if (A(n)) throw bi("undef", "Provider '{0}' must return a value from $get factory method.", e);
                    return n
                }
            }

            function d(e, t, n) {
                return i(e, {
                    $get: n !== !1 ? a(e, t) : t
                })
            }

            function l(e, t) {
                return d(e, ["$injector", function(e) {
                    return e.instantiate(t)
                }])
            }

            function u(e, t) {
                return d(e, $(t), !1)
            }

            function c(e, t) {
                pe(e, "constant"), b[e] = t, C[e] = t
            }

            function f(e, t) {
                var n = x.get(e + m),
                    r = n.$get;
                n.$get = function() {
                    var e = E.invoke(r, n);
                    return E.invoke(t, null, {
                        $delegate: e
                    })
                }
            }

            function p(e) {
                ce(A(e) || Lr(e), "modulesToLoad", "not an array");
                var t, n = [];
                return o(e, function(e) {
                    function r(e) {
                        var t, n;
                        for (t = 0, n = e.length; n > t; t++) {
                            var r = e[t],
                                i = x.get(r[0]);
                            i[r[1]].apply(i, r[2])
                        }
                    }
                    if (!N.get(e)) {
                        N.put(e, !0);
                        try {
                            w(e) ? (t = _r(e), n = n.concat(p(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : S(e) ? n.push(x.invoke(e)) : Lr(e) ? n.push(x.invoke(e)) : fe(e, "module")
                        } catch (i) {
                            throw Lr(e) && (e = e[e.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), bi("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, i.stack || i.message || i)
                        }
                    }
                }), n
            }

            function h(e, n) {
                function r(t, r) {
                    if (e.hasOwnProperty(t)) {
                        if (e[t] === g) throw bi("cdep", "Circular dependency found: {0}", t + " <- " + v.join(" <- "));
                        return e[t]
                    }
                    try {
                        return v.unshift(t), e[t] = g, e[t] = n(t, r)
                    } catch (i) {
                        throw e[t] === g && delete e[t], i
                    } finally {
                        v.shift()
                    }
                }

                function i(e, n, i, o) {
                    "string" == typeof i && (o = i, i = null);
                    var a, s, d, l = [],
                        u = Je.$$annotate(e, t, o);
                    for (s = 0, a = u.length; a > s; s++) {
                        if (d = u[s], "string" != typeof d) throw bi("itkn", "Incorrect injection token! Expected service name as string, got {0}", d);
                        l.push(i && i.hasOwnProperty(d) ? i[d] : r(d, o))
                    }
                    return Lr(e) && (e = e[a]), e.apply(n, l)
                }

                function o(e, t, n) {
                    var r = Object.create((Lr(e) ? e[e.length - 1] : e).prototype || null),
                        o = i(e, r, t, n);
                    return y(o) || S(o) ? o : r
                }
                return {
                    invoke: i,
                    instantiate: o,
                    get: r,
                    annotate: Je.$$annotate,
                    has: function(t) {
                        return b.hasOwnProperty(t + m) || e.hasOwnProperty(t)
                    }
                }
            }
            t = t === !0;
            var g = {},
                m = "Provider",
                v = [],
                N = new Ye([], !0),
                b = {
                    $provide: {
                        provider: r(i),
                        factory: r(d),
                        service: r(l),
                        value: r(u),
                        constant: r(c),
                        decorator: f
                    }
                },
                x = b.$injector = h(b, function(e, t) {
                    throw Or.isString(t) && v.push(t), bi("unpr", "Unknown provider: {0}", v.join(" <- "))
                }),
                C = {},
                E = C.$injector = h(C, function(e, t) {
                    var r = x.get(e + m, t);
                    return E.invoke(r.$get, r, n, e)
                });
            return o(p(e), function(e) {
                e && E.invoke(e)
            }), E
        }

        function Qe() {
            var e = !0;
            this.disableAutoScrolling = function() {
                e = !1
            }, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
                function i(e) {
                    var t = null;
                    return Array.prototype.some.call(e, function(e) {
                        return "a" === L(e) ? (t = e, !0) : void 0
                    }), t
                }

                function o() {
                    var e = s.yOffset;
                    if (S(e)) e = e();
                    else if (D(e)) {
                        var n = e[0],
                            r = t.getComputedStyle(n);
                        e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                    } else x(e) || (e = 0);
                    return e
                }

                function a(e) {
                    if (e) {
                        e.scrollIntoView();
                        var n = o();
                        if (n) {
                            var r = e.getBoundingClientRect().top;
                            t.scrollBy(0, r - n)
                        }
                    } else t.scrollTo(0, 0)
                }

                function s(e) {
                    e = w(e) ? e : n.hash();
                    var t;
                    e ? (t = d.getElementById(e)) ? a(t) : (t = i(d.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
                }
                var d = t.document;
                return e && r.$watch(function() {
                    return n.hash()
                }, function(e, t) {
                    (e !== t || "" !== e) && ze(function() {
                        r.$evalAsync(s)
                    })
                }), s
            }]
        }

        function et(e, t) {
            return e || t ? e ? t ? (Lr(e) && (e = e.join(" ")), Lr(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
        }

        function tt(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (n.nodeType === xi) return n
            }
        }

        function nt(e) {
            w(e) && (e = e.split(" "));
            var t = me();
            return o(e, function(e) {
                e.length && (t[e] = !0)
            }), t
        }

        function rt(e) {
            return y(e) ? e : {}
        }

        function it(e, t, n, r) {
            function i(e) {
                try {
                    e.apply(null, H(arguments, 1))
                } finally {
                    if (v--, 0 === v)
                        for (; N.length;) try {
                            N.pop()()
                        } catch (t) {
                            n.error(t)
                        }
                }
            }

            function a(e) {
                var t = e.indexOf("#");
                return -1 === t ? "" : e.substr(t)
            }

            function s() {
                C = null, l(), u()
            }

            function d() {
                try {
                    return p.state
                } catch (e) {}
            }

            function l() {
                y = d(), y = A(y) ? null : y, B(y, _) && (y = _), _ = y
            }

            function u() {
                (w !== c.url() || b !== y) && (w = c.url(), b = y, o(S, function(e) {
                    e(c.url(), y)
                }))
            }
            var c = this,
                f = (t[0], e.location),
                p = e.history,
                h = e.setTimeout,
                m = e.clearTimeout,
                $ = {};
            c.isMock = !1;
            var v = 0,
                N = [];
            c.$$completeOutstandingRequest = i, c.$$incOutstandingRequestCount = function() {
                v++
            }, c.notifyWhenNoOutstandingRequests = function(e) {
                0 === v ? e() : N.push(e)
            };
            var y, b, w = f.href,
                x = t.find("base"),
                C = null;
            l(), b = y, c.url = function(t, n, i) {
                if (A(i) && (i = null), f !== e.location && (f = e.location), p !== e.history && (p = e.history), t) {
                    var o = b === i;
                    if (w === t && (!r.history || o)) return c;
                    var s = w && Ot(w) === Ot(t);
                    return w = t, b = i, !r.history || s && o ? ((!s || C) && (C = t), n ? f.replace(t) : s ? f.hash = a(t) : f.href = t, f.href !== t && (C = t)) : (p[n ? "replaceState" : "pushState"](i, "", t), l(), b = y), c
                }
                return C || f.href.replace(/%27/g, "'")
            }, c.state = function() {
                return y
            };
            var S = [],
                E = !1,
                _ = null;
            c.onUrlChange = function(t) {
                return E || (r.history && Sr(e).on("popstate", s), Sr(e).on("hashchange", s), E = !0), S.push(t), t
            }, c.$$applicationDestroyed = function() {
                Sr(e).off("hashchange popstate", s)
            }, c.$$checkUrlChange = u, c.baseHref = function() {
                var e = x.attr("href");
                return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            }, c.defer = function(e, t) {
                var n;
                return v++, n = h(function() {
                    delete $[n], i(e)
                }, t || 0), $[n] = !0, n
            }, c.defer.cancel = function(e) {
                return $[e] ? (delete $[e], m(e), i(g), !0) : !1
            }
        }

        function ot() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
                return new it(e, r, t, n)
            }]
        }

        function at() {
            this.$get = function() {
                function e(e, n) {
                    function i(e) {
                        e != f && (p ? p == e && (p = e.n) : p = e, o(e.n, e.p), o(e, f), f = e, f.n = null)
                    }

                    function o(e, t) {
                        e != t && (e && (e.p = t), t && (t.n = e))
                    }
                    if (e in t) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
                    var a = 0,
                        s = c({}, n, {
                            id: e
                        }),
                        d = {},
                        l = n && n.capacity || Number.MAX_VALUE,
                        u = {},
                        f = null,
                        p = null;
                    return t[e] = {
                        put: function(e, t) {
                            if (!A(t)) {
                                if (l < Number.MAX_VALUE) {
                                    var n = u[e] || (u[e] = {
                                        key: e
                                    });
                                    i(n)
                                }
                                return e in d || a++, d[e] = t, a > l && this.remove(p.key), t
                            }
                        },
                        get: function(e) {
                            if (l < Number.MAX_VALUE) {
                                var t = u[e];
                                if (!t) return;
                                i(t)
                            }
                            return d[e]
                        },
                        remove: function(e) {
                            if (l < Number.MAX_VALUE) {
                                var t = u[e];
                                if (!t) return;
                                t == f && (f = t.p), t == p && (p = t.n), o(t.n, t.p), delete u[e]
                            }
                            delete d[e], a--
                        },
                        removeAll: function() {
                            d = {}, a = 0, u = {}, f = p = null
                        },
                        destroy: function() {
                            d = null, s = null, u = null, delete t[e]
                        },
                        info: function() {
                            return c({}, s, {
                                size: a
                            })
                        }
                    }
                }
                var t = {};
                return e.info = function() {
                    var e = {};
                    return o(t, function(t, n) {
                        e[n] = t.info()
                    }), e
                }, e.get = function(e) {
                    return t[e]
                }, e
            }
        }

        function st() {
            this.$get = ["$cacheFactory", function(e) {
                return e("templates")
            }]
        }

        function dt(e, r) {
            function i(e, t, n) {
                var r = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                    i = {};
                return o(e, function(e, o) {
                    var a = e.match(r);
                    if (!a) throw Ti("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, o, e, n ? "controller bindings definition" : "isolate scope definition");
                    i[o] = {
                        mode: a[1][0],
                        collection: "*" === a[2],
                        optional: "?" === a[3],
                        attrName: a[4] || o
                    }
                }), i
            }

            function a(e, t) {
                var n = {
                    isolateScope: null,
                    bindToController: null
                };
                if (y(e.scope) && (e.bindToController === !0 ? (n.bindToController = i(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = i(e.scope, t, !1)), y(e.bindToController) && (n.bindToController = i(e.bindToController, t, !0)), y(n.bindToController)) {
                    var r = e.controller,
                        o = e.controllerAs;
                    if (!r) throw Ti("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
                    if (!ft(r, o)) throw Ti("noident", "Cannot bind to controller without identifier for directive '{0}'.", t)
                }
                return n
            }

            function d(e) {
                var t = e.charAt(0);
                if (!t || t !== Nr(t)) throw Ti("baddir", "Directive name '{0}' is invalid. The first character must be a lowercase letter", e);
                if (e !== e.trim()) throw Ti("baddir", "Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
            }
            var l = {},
                u = "Directive",
                f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
                p = /(([\w\-]+)(?:\:([^;]+))?;?)/,
                v = R("ngSrc,ngSrcset,src,srcset"),
                b = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
                x = /^(on[a-z]+|formaction)$/;
            this.directive = function E(t, n) {
                return pe(t, "directive"), w(t) ? (d(t), ce(n, "directiveFactory"), l.hasOwnProperty(t) || (l[t] = [], e.factory(t + u, ["$injector", "$exceptionHandler", function(e, n) {
                    var r = [];
                    return o(l[t], function(i, o) {
                        try {
                            var s = e.invoke(i);
                            S(s) ? s = {
                                compile: $(s)
                            } : !s.compile && s.link && (s.compile = $(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || t, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA";
                            var d = s.$$bindings = a(s, s.name);
                            y(d.isolateScope) && (s.$$isolateBindings = d.isolateScope), s.$$moduleName = i.$$moduleName, r.push(s)
                        } catch (l) {
                            n(l)
                        }
                    }), r
                }])), l[t].push(n)) : o(t, s(E)), this
            }, this.aHrefSanitizationWhitelist = function(e) {
                return N(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
            }, this.imgSrcSanitizationWhitelist = function(e) {
                return N(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
            };
            var C = !0;
            this.debugInfoEnabled = function(e) {
                return N(e) ? (C = e, this) : C
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(e, r, i, a, s, d, $, N, E, _, T) {
                function I(e, t) {
                    try {
                        e.addClass(t)
                    } catch (n) {}
                }

                function P(e, t, n, r, i) {
                    e instanceof Sr || (e = Sr(e)), o(e, function(t, n) {
                        t.nodeType == Yr && t.nodeValue.match(/\S+/) && (e[n] = Sr(t).wrap("<span></span>").parent()[0])
                    });
                    var a = M(e, t, e, n, r, i);
                    P.$$addScopeClass(e);
                    var s = null;
                    return function(t, n, r) {
                        ce(t, "scope"), r = r || {};
                        var i = r.parentBoundTranscludeFn,
                            o = r.transcludeControllers,
                            d = r.futureParentElement;
                        i && i.$$boundTransclude && (i = i.$$boundTransclude), s || (s = F(d));
                        var l;
                        if (l = "html" !== s ? Sr(Q(s, Sr("<div>").append(e).html())) : n ? pi.clone.call(e) : e, o)
                            for (var u in o) l.data("$" + u + "Controller", o[u].instance);
                        return P.$$addScopeInfo(l, t), n && n(l, t), a && a(t, l, l, i), l
                    }
                }

                function F(e) {
                    var t = e && e[0];
                    return t && "foreignobject" !== L(t) && t.toString().match(/SVG/) ? "svg" : "html"
                }

                function M(e, t, r, i, o, a) {
                    function s(e, r, i, o) {
                        var a, s, d, l, u, c, f, p, m;
                        if (h) {
                            var $ = r.length;
                            for (m = new Array($), u = 0; u < g.length; u += 3) f = g[u], m[f] = r[f]
                        } else m = r;
                        for (u = 0, c = g.length; c > u;)
                            if (d = m[g[u++]], a = g[u++],
                                s = g[u++], a) {
                                if (a.scope) {
                                    l = e.$new(), P.$$addScopeInfo(Sr(d), l);
                                    var v = a.$$destroyBindings;
                                    v && (a.$$destroyBindings = null, l.$on("$destroyed", v))
                                } else l = e;
                                p = a.transcludeOnThisElement ? O(e, a.transclude, o) : !a.templateOnThisElement && o ? o : !o && t ? O(e, t) : null, a(s, l, d, i, p, a)
                            } else s && s(e, d.childNodes, n, o)
                    }
                    for (var d, l, u, c, f, p, h, g = [], m = 0; m < e.length; m++) d = new ae, l = D(e[m], [], d, 0 === m ? i : n, o), u = l.length ? U(l, e[m], d, t, r, null, [], [], a) : null, u && u.scope && P.$$addScopeClass(d.$$element), f = u && u.terminal || !(c = e[m].childNodes) || !c.length ? null : M(c, u ? (u.transcludeOnThisElement || !u.templateOnThisElement) && u.transclude : t), (u || f) && (g.push(m, u, f), p = !0, h = h || u), a = null;
                    return p ? s : null
                }

                function O(e, t, n) {
                    var r = function(r, i, o, a, s) {
                        return r || (r = e.$new(!1, s), r.$$transcluded = !0), t(r, i, {
                            parentBoundTranscludeFn: n,
                            transcludeControllers: o,
                            futureParentElement: a
                        })
                    };
                    return r
                }

                function D(e, t, n, r, i) {
                    var o, a, s = e.nodeType,
                        d = n.$attr;
                    switch (s) {
                        case Wr:
                            V(t, lt(L(e)), "E", r, i);
                            for (var l, u, c, h, g, m, $ = e.attributes, v = 0, A = $ && $.length; A > v; v++) {
                                var N = !1,
                                    b = !1;
                                l = $[v], u = l.name, g = qr(l.value), h = lt(u), (m = fe.test(h)) && (u = u.replace(Ii, "").substr(8).replace(/_(.)/g, function(e, t) {
                                    return t.toUpperCase()
                                }));
                                var x = h.replace(/(Start|End)$/, "");
                                G(x) && h === x + "Start" && (N = u, b = u.substr(0, u.length - 5) + "end", u = u.substr(0, u.length - 6)), c = lt(u.toLowerCase()), d[c] = u, (m || !n.hasOwnProperty(c)) && (n[c] = g, He(e, c) && (n[c] = !0)), te(e, t, g, c, m), V(t, c, "A", r, i, N, b)
                            }
                            if (a = e.className, y(a) && (a = a.animVal), w(a) && "" !== a)
                                for (; o = p.exec(a);) c = lt(o[2]), V(t, c, "C", r, i) && (n[c] = qr(o[3])), a = a.substr(o.index + o[0].length);
                            break;
                        case Yr:
                            if (11 === Cr)
                                for (; e.parentNode && e.nextSibling && e.nextSibling.nodeType === Yr;) e.nodeValue = e.nodeValue + e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling);
                            X(t, e.nodeValue);
                            break;
                        case Zr:
                            try {
                                o = f.exec(e.nodeValue), o && (c = lt(o[1]), V(t, c, "M", r, i) && (n[c] = qr(o[2])))
                            } catch (C) {}
                    }
                    return t.sort(Y), t
                }

                function R(e, t, n) {
                    var r = [],
                        i = 0;
                    if (t && e.hasAttribute && e.hasAttribute(t)) {
                        do {
                            if (!e) throw Ti("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                            e.nodeType == Wr && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                        } while (i > 0)
                    } else r.push(e);
                    return Sr(r)
                }

                function q(e, t, n) {
                    return function(r, i, o, a, s) {
                        return i = R(i[0], t, n), e(r, i, o, a, s)
                    }
                }

                function U(e, r, o, a, s, l, u, c, f) {
                    function p(e, t, n, r) {
                        e && (n && (e = q(e, n, r)), e.require = $.require, e.directiveName = v, (T === $ || $.$$isolateScope) && (e = re(e, {
                            isolateScope: !0
                        })), u.push(e)), t && (n && (t = q(t, n, r)), t.require = $.require, t.directiveName = v, (T === $ || $.$$isolateScope) && (t = re(t, {
                            isolateScope: !0
                        })), c.push(t))
                    }

                    function h(e, t, n, r) {
                        var i;
                        if (w(t)) {
                            var o = t.match(b),
                                a = t.substring(o[0].length),
                                s = o[1] || o[3],
                                d = "?" === o[2];
                            if ("^^" === s ? n = n.parent() : (i = r && r[a], i = i && i.instance), !i) {
                                var l = "$" + a + "Controller";
                                i = s ? n.inheritedData(l) : n.data(l)
                            }
                            if (!i && !d) throw Ti("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, e)
                        } else if (Lr(t)) {
                            i = [];
                            for (var u = 0, c = t.length; c > u; u++) i[u] = h(e, t[u], n, r)
                        }
                        return i || null
                    }

                    function g(e, t, n, r, i, o) {
                        var a = me();
                        for (var s in r) {
                            var l = r[s],
                                u = {
                                    $scope: l === T || l.$$isolateScope ? i : o,
                                    $element: e,
                                    $attrs: t,
                                    $transclude: n
                                },
                                c = l.controller;
                            "@" == c && (c = t[l.name]);
                            var f = d(c, u, !0, l.controllerAs);
                            a[l.name] = f, L || e.data("$" + l.name + "Controller", f.instance)
                        }
                        return a
                    }

                    function m(e, t, i, a, s, d) {
                        function l(e, t, r) {
                            var i;
                            return k(e) || (r = t, t = e, e = n), L && (i = A), r || (r = L ? y.parent() : y), s(e, t, i, r, F)
                        }
                        var f, p, m, $, v, A, N, y, b;
                        if (r === i ? (b = o, y = o.$$element) : (y = Sr(i), b = new ae(y, o)), T && (v = t.$new(!0)), s && (N = l, N.$$boundTransclude = s), _ && (A = g(y, b, N, _, v, t)), T && (P.$$addScopeInfo(y, v, !0, !(I && (I === T || I === T.$$originalDirective))), P.$$addScopeClass(y, !0), v.$$isolateBindings = T.$$isolateBindings, oe(t, b, v, v.$$isolateBindings, T, v)), A) {
                            var w, x, C = T || E;
                            C && A[C.name] && (w = C.$$bindings.bindToController, $ = A[C.name], $ && $.identifier && w && (x = $, d.$$destroyBindings = oe(t, b, $.instance, w, C)));
                            for (f in A) {
                                $ = A[f];
                                var S = $();
                                S !== $.instance && ($.instance = S, y.data("$" + f + "Controller", S), $ === x && (d.$$destroyBindings(), d.$$destroyBindings = oe(t, b, S, w, C)))
                            }
                        }
                        for (f = 0, p = u.length; p > f; f++) m = u[f], ie(m, m.isolateScope ? v : t, y, b, m.require && h(m.directiveName, m.require, y, A), N);
                        var F = t;
                        for (T && (T.template || null === T.templateUrl) && (F = v), e && e(F, i.childNodes, n, s), f = c.length - 1; f >= 0; f--) m = c[f], ie(m, m.isolateScope ? v : t, y, b, m.require && h(m.directiveName, m.require, y, A), N)
                    }
                    f = f || {};
                    for (var $, v, A, N, x, C = -Number.MAX_VALUE, E = f.newScopeDirective, _ = f.controllerDirectives, T = f.newIsolateScopeDirective, I = f.templateDirective, F = f.nonTlbTranscludeDirective, M = !1, O = !1, L = f.hasElementTranscludeDirective, j = o.$$element = Sr(r), U = l, B = a, V = 0, G = e.length; G > V; V++) {
                        $ = e[V];
                        var Y = $.$$start,
                            X = $.$$end;
                        if (Y && (j = R(r, Y, X)), A = n, C > $.priority) break;
                        if ((x = $.scope) && ($.templateUrl || (y(x) ? (Z("new/isolated scope", T || E, $, j), T = $) : Z("new/isolated scope", T, $, j)), E = E || $), v = $.name, !$.templateUrl && $.controller && (x = $.controller, _ = _ || me(), Z("'" + v + "' controller", _[v], $, j), _[v] = $), (x = $.transclude) && (M = !0, $.$$tlb || (Z("transclusion", F, $, j), F = $), "element" == x ? (L = !0, C = $.priority, A = j, j = o.$$element = Sr(t.createComment(" " + v + ": " + o[v] + " ")), r = j[0], ne(s, H(A), r), B = P(A, a, C, U && U.name, {
                                nonTlbTranscludeDirective: F
                            })) : (A = Sr(ke(r)).contents(), j.empty(), B = P(A, a))), $.template)
                            if (O = !0, Z("template", I, $, j), I = $, x = S($.template) ? $.template(j, o) : $.template, x = ue(x), $.replace) {
                                if (U = $, A = we(x) ? [] : ct(Q($.templateNamespace, qr(x))), r = A[0], 1 != A.length || r.nodeType !== Wr) throw Ti("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", v, "");
                                ne(s, j, r);
                                var ee = {
                                        $attr: {}
                                    },
                                    te = D(r, [], ee),
                                    se = e.splice(V + 1, e.length - (V + 1));
                                T && z(te), e = e.concat(te).concat(se), W(o, ee), G = e.length
                            } else j.html(x);
                        if ($.templateUrl) O = !0, Z("template", I, $, j), I = $, $.replace && (U = $), m = K(e.splice(V, e.length - V), j, o, s, M && B, u, c, {
                            controllerDirectives: _,
                            newScopeDirective: E !== $ && E,
                            newIsolateScopeDirective: T,
                            templateDirective: I,
                            nonTlbTranscludeDirective: F
                        }), G = e.length;
                        else if ($.compile) try {
                            N = $.compile(j, o, B), S(N) ? p(null, N, Y, X) : N && p(N.pre, N.post, Y, X)
                        } catch (de) {
                            i(de, J(j))
                        }
                        $.terminal && (m.terminal = !0, C = Math.max(C, $.priority))
                    }
                    return m.scope = E && E.scope === !0, m.transcludeOnThisElement = M, m.templateOnThisElement = O, m.transclude = B, f.hasElementTranscludeDirective = L, m
                }

                function z(e) {
                    for (var t = 0, n = e.length; n > t; t++) e[t] = h(e[t], {
                        $$isolateScope: !0
                    })
                }

                function V(t, n, r, o, a, s, d) {
                    if (n === a) return null;
                    var c = null;
                    if (l.hasOwnProperty(n))
                        for (var f, p = e.get(n + u), g = 0, m = p.length; m > g; g++) try {
                            f = p[g], (A(o) || o > f.priority) && -1 != f.restrict.indexOf(r) && (s && (f = h(f, {
                                $$start: s,
                                $$end: d
                            })), t.push(f), c = f)
                        } catch ($) {
                            i($)
                        }
                    return c
                }

                function G(t) {
                    if (l.hasOwnProperty(t))
                        for (var n, r = e.get(t + u), i = 0, o = r.length; o > i; i++)
                            if (n = r[i], n.multiElement) return !0;
                    return !1
                }

                function W(e, t) {
                    var n = t.$attr,
                        r = e.$attr,
                        i = e.$$element;
                    o(e, function(r, i) {
                        "$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
                    }), o(t, function(t, o) {
                        "class" == o ? (I(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == o ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t, r[o] = n[o])
                    })
                }

                function K(e, t, n, r, i, s, d, l) {
                    var u, c, f = [],
                        p = t[0],
                        g = e.shift(),
                        m = h(g, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: g
                        }),
                        $ = S(g.templateUrl) ? g.templateUrl(t, n) : g.templateUrl,
                        v = g.templateNamespace;
                    return t.empty(), a($).then(function(a) {
                            var h, A, N, b;
                            if (a = ue(a), g.replace) {
                                if (N = we(a) ? [] : ct(Q(v, qr(a))), h = N[0], 1 != N.length || h.nodeType !== Wr) throw Ti("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, $);
                                A = {
                                    $attr: {}
                                }, ne(r, t, h);
                                var w = D(h, [], A);
                                y(g.scope) && z(w), e = w.concat(e), W(n, A)
                            } else h = p, t.html(a);
                            for (e.unshift(m), u = U(e, h, n, i, t, g, s, d, l), o(r, function(e, n) {
                                    e == h && (r[n] = t[0])
                                }), c = M(t[0].childNodes, i); f.length;) {
                                var x = f.shift(),
                                    C = f.shift(),
                                    S = f.shift(),
                                    E = f.shift(),
                                    _ = t[0];
                                if (!x.$$destroyed) {
                                    if (C !== p) {
                                        var k = C.className;
                                        l.hasElementTranscludeDirective && g.replace || (_ = ke(h)), ne(S, Sr(C), _), I(Sr(_), k)
                                    }
                                    b = u.transcludeOnThisElement ? O(x, u.transclude, E) : E, u(c, x, _, r, b, u)
                                }
                            }
                            f = null
                        }),
                        function(e, t, n, r, i) {
                            var o = i;
                            t.$$destroyed || (f ? f.push(t, n, r, o) : (u.transcludeOnThisElement && (o = O(t, u.transclude, i)), u(c, t, n, r, o, u)))
                        }
                }

                function Y(e, t) {
                    var n = t.priority - e.priority;
                    return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
                }

                function Z(e, t, n, r) {
                    function i(e) {
                        return e ? " (module: " + e + ")" : ""
                    }
                    if (t) throw Ti("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, J(r))
                }

                function X(e, t) {
                    var n = r(t, !0);
                    n && e.push({
                        priority: 0,
                        compile: function(e) {
                            var t = e.parent(),
                                r = !!t.length;
                            return r && P.$$addBindingClass(t),
                                function(e, t) {
                                    var i = t.parent();
                                    r || P.$$addBindingClass(i), P.$$addBindingInfo(i, n.expressions), e.$watch(n, function(e) {
                                        t[0].nodeValue = e
                                    })
                                }
                        }
                    })
                }

                function Q(e, n) {
                    switch (e = Nr(e || "html")) {
                        case "svg":
                        case "math":
                            var r = t.createElement("div");
                            return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                        default:
                            return n
                    }
                }

                function ee(e, t) {
                    if ("srcdoc" == t) return E.HTML;
                    var n = L(e);
                    return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? E.RESOURCE_URL : void 0
                }

                function te(e, t, n, i, o) {
                    var a = ee(e, i);
                    o = v[i] || o;
                    var s = r(n, !0, a, o);
                    if (s) {
                        if ("multiple" === i && "select" === L(e)) throw Ti("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", J(e));
                        t.push({
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function(e, t, d) {
                                        var l = d.$$observers || (d.$$observers = me());
                                        if (x.test(i)) throw Ti("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        var u = d[i];
                                        u !== n && (s = u && r(u, !0, a, o), n = u), s && (d[i] = s(e), (l[i] || (l[i] = [])).$$inter = !0, (d.$$observers && d.$$observers[i].$$scope || e).$watch(s, function(e, t) {
                                            "class" === i && e != t ? d.$updateClass(e, t) : d.$set(i, e)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function ne(e, n, r) {
                    var i, o, a = n[0],
                        s = n.length,
                        d = a.parentNode;
                    if (e)
                        for (i = 0, o = e.length; o > i; i++)
                            if (e[i] == a) {
                                e[i++] = r;
                                for (var l = i, u = l + s - 1, c = e.length; c > l; l++, u++) c > u ? e[l] = e[u] : delete e[l];
                                e.length -= s - 1, e.context === a && (e.context = r);
                                break
                            }
                    d && d.replaceChild(r, a);
                    var f = t.createDocumentFragment();
                    f.appendChild(a), Sr.hasData(a) && (Sr(r).data(Sr(a).data()), Er ? (Rr = !0, Er.cleanData([a])) : delete Sr.cache[a[Sr.expando]]);
                    for (var p = 1, h = n.length; h > p; p++) {
                        var g = n[p];
                        Sr(g).remove(), f.appendChild(g), delete n[p]
                    }
                    n[0] = r, n.length = 1
                }

                function re(e, t) {
                    return c(function() {
                        return e.apply(null, arguments)
                    }, e, t)
                }

                function ie(e, t, n, r, o, a) {
                    try {
                        e(t, n, r, o, a)
                    } catch (s) {
                        i(s, J(n))
                    }
                }

                function oe(e, t, n, i, a, d) {
                    var l;
                    o(i, function(i, o) {
                        var d, u, c, f, p = i.attrName,
                            h = i.optional,
                            m = i.mode;
                        switch (m) {
                            case "@":
                                h || yr.call(t, p) || (n[o] = t[p] = void 0), t.$observe(p, function(e) {
                                    w(e) && (n[o] = e)
                                }), t.$$observers[p].$$scope = e, w(t[p]) && (n[o] = r(t[p])(e));
                                break;
                            case "=":
                                if (!yr.call(t, p)) {
                                    if (h) break;
                                    t[p] = void 0
                                }
                                if (h && !t[p]) break;
                                u = s(t[p]), f = u.literal ? B : function(e, t) {
                                    return e === t || e !== e && t !== t
                                }, c = u.assign || function() {
                                    throw d = n[o] = u(e), Ti("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", t[p], a.name)
                                }, d = n[o] = u(e);
                                var $ = function(t) {
                                    return f(t, n[o]) || (f(t, d) ? c(e, t = n[o]) : n[o] = t), d = t
                                };
                                $.$stateful = !0;
                                var v;
                                v = i.collection ? e.$watchCollection(t[p], $) : e.$watch(s(t[p], $), null, u.literal), l = l || [], l.push(v);
                                break;
                            case "&":
                                if (u = t.hasOwnProperty(p) ? s(t[p]) : g, u === g && h) break;
                                n[o] = function(t) {
                                    return u(e, t)
                                }
                        }
                    });
                    var u = l ? function() {
                        for (var e = 0, t = l.length; t > e; ++e) l[e]()
                    } : g;
                    return d && u !== g ? (d.$on("$destroy", u), g) : u
                }
                var ae = function(e, t) {
                    if (t) {
                        var n, r, i, o = Object.keys(t);
                        for (n = 0, r = o.length; r > n; n++) i = o[n], this[i] = t[i]
                    } else this.$attr = {};
                    this.$$element = e
                };
                ae.prototype = {
                    $normalize: lt,
                    $addClass: function(e) {
                        e && e.length > 0 && _.addClass(this.$$element, e)
                    },
                    $removeClass: function(e) {
                        e && e.length > 0 && _.removeClass(this.$$element, e)
                    },
                    $updateClass: function(e, t) {
                        var n = ut(e, t);
                        n && n.length && _.addClass(this.$$element, n);
                        var r = ut(t, e);
                        r && r.length && _.removeClass(this.$$element, r)
                    },
                    $set: function(e, t, n, r) {
                        var a, s = this.$$element[0],
                            d = He(s, e),
                            l = Ve(e),
                            u = e;
                        if (d ? (this.$$element.prop(e, t), r = d) : l && (this[l] = t, u = l), this[e] = t, r ? this.$attr[e] = r : (r = this.$attr[e], r || (this.$attr[e] = r = le(e, "-"))), a = L(this.$$element), "a" === a && "href" === e || "img" === a && "src" === e) this[e] = t = T(t, "src" === e);
                        else if ("img" === a && "srcset" === e) {
                            for (var c = "", f = qr(t), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, h = /\s/.test(f) ? p : /(,)/, g = f.split(h), m = Math.floor(g.length / 2), $ = 0; m > $; $++) {
                                var v = 2 * $;
                                c += T(qr(g[v]), !0), c += " " + qr(g[v + 1])
                            }
                            var N = qr(g[2 * $]).split(/\s/);
                            c += T(qr(N[0]), !0), 2 === N.length && (c += " " + qr(N[1])), this[e] = t = c
                        }
                        n !== !1 && (null === t || A(t) ? this.$$element.removeAttr(r) : this.$$element.attr(r, t));
                        var y = this.$$observers;
                        y && o(y[u], function(e) {
                            try {
                                e(t)
                            } catch (n) {
                                i(n)
                            }
                        })
                    },
                    $observe: function(e, t) {
                        var n = this,
                            r = n.$$observers || (n.$$observers = me()),
                            i = r[e] || (r[e] = []);
                        return i.push(t), $.$evalAsync(function() {
                                i.$$inter || !n.hasOwnProperty(e) || A(n[e]) || t(n[e])
                            }),
                            function() {
                                j(i, t)
                            }
                    }
                };
                var se = r.startSymbol(),
                    de = r.endSymbol(),
                    ue = "{{" == se || "}}" == de ? m : function(e) {
                        return e.replace(/\{\{/g, se).replace(/}}/g, de)
                    },
                    fe = /^ngAttr[A-Z]/;
                return P.$$addBindingInfo = C ? function(e, t) {
                    var n = e.data("$binding") || [];
                    Lr(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
                } : g, P.$$addBindingClass = C ? function(e) {
                    I(e, "ng-binding")
                } : g, P.$$addScopeInfo = C ? function(e, t, n, r) {
                    var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                    e.data(i, t)
                } : g, P.$$addScopeClass = C ? function(e, t) {
                    I(e, t ? "ng-isolate-scope" : "ng-scope")
                } : g, P
            }]
        }

        function lt(e) {
            return be(e.replace(Ii, ""))
        }

        function ut(e, t) {
            var n = "",
                r = e.split(/\s+/),
                i = t.split(/\s+/);
            e: for (var o = 0; o < r.length; o++) {
                for (var a = r[o], s = 0; s < i.length; s++)
                    if (a == i[s]) continue e;
                n += (n.length > 0 ? " " : "") + a
            }
            return n
        }

        function ct(e) {
            e = Sr(e);
            var t = e.length;
            if (1 >= t) return e;
            for (; t--;) {
                var n = e[t];
                n.nodeType === Zr && Tr.call(e, t, 1)
            }
            return e
        }

        function ft(e, t) {
            if (t && w(t)) return t;
            if (w(e)) {
                var n = Fi.exec(e);
                if (n) return n[3]
            }
        }

        function pt() {
            var e = {},
                t = !1;
            this.register = function(t, n) {
                pe(t, "controller"), y(t) ? c(e, t) : e[t] = n
            }, this.allowGlobals = function() {
                t = !0
            }, this.$get = ["$injector", "$window", function(i, o) {
                function a(e, t, n, i) {
                    if (!e || !y(e.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
                    e.$scope[t] = n
                }
                return function(r, s, d, l) {
                    var u, f, p, h;
                    if (d = d === !0, l && w(l) && (h = l), w(r)) {
                        if (f = r.match(Fi), !f) throw Pi("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                        p = f[1], h = h || f[3], r = e.hasOwnProperty(p) ? e[p] : he(s.$scope, p, !0) || (t ? he(o, p, !0) : n), fe(r, p, !0)
                    }
                    if (d) {
                        var g = (Lr(r) ? r[r.length - 1] : r).prototype;
                        u = Object.create(g || null), h && a(s, h, u, p || r.name);
                        var m;
                        return m = c(function() {
                            var e = i.invoke(r, u, s, p);
                            return e !== u && (y(e) || S(e)) && (u = e, h && a(s, h, u, p || r.name)), u
                        }, {
                            instance: u,
                            identifier: h
                        })
                    }
                    return u = i.instantiate(r, s, p), h && a(s, h, u, p || r.name), u
                }
            }]
        }

        function ht() {
            this.$get = ["$window", function(e) {
                return Sr(e.document)
            }]
        }

        function gt() {
            this.$get = ["$log", function(e) {
                return function(t, n) {
                    e.error.apply(e, arguments)
                }
            }]
        }

        function mt(e) {
            return y(e) ? C(e) ? e.toISOString() : W(e) : e
        }

        function $t() {
            this.$get = function() {
                return function(e) {
                    if (!e) return "";
                    var t = [];
                    return a(e, function(e, n) {
                        null === e || A(e) || (Lr(e) ? o(e, function(e, r) {
                            t.push(re(n) + "=" + re(mt(e)))
                        }) : t.push(re(n) + "=" + re(mt(e))))
                    }), t.join("&")
                }
            }
        }

        function vt() {
            this.$get = function() {
                return function(e) {
                    function t(e, r, i) {
                        null === e || A(e) || (Lr(e) ? o(e, function(e, n) {
                            t(e, r + "[" + (y(e) ? n : "") + "]")
                        }) : y(e) && !C(e) ? a(e, function(e, n) {
                            t(e, r + (i ? "" : "[") + n + (i ? "" : "]"))
                        }) : n.push(re(r) + "=" + re(mt(e))))
                    }
                    if (!e) return "";
                    var n = [];
                    return t(e, "", !0), n.join("&")
                }
            }
        }

        function At(e, t) {
            if (w(e)) {
                var n = e.replace(ji, "").trim();
                if (n) {
                    var r = t("Content-Type");
                    (r && 0 === r.indexOf(Oi) || Nt(n)) && (e = K(n))
                }
            }
            return e
        }

        function Nt(e) {
            var t = e.match(Ri);
            return t && Li[t[0]].test(e)
        }

        function yt(e) {
            function t(e, t) {
                e && (r[e] = r[e] ? r[e] + ", " + t : t)
            }
            var n, r = me();
            return w(e) ? o(e.split("\n"), function(e) {
                n = e.indexOf(":"), t(Nr(qr(e.substr(0, n))), qr(e.substr(n + 1)))
            }) : y(e) && o(e, function(e, n) {
                t(Nr(n), qr(e))
            }), r
        }

        function bt(e) {
            var t;
            return function(n) {
                if (t || (t = yt(e)), n) {
                    var r = t[Nr(n)];
                    return void 0 === r && (r = null), r
                }
                return t
            }
        }

        function wt(e, t, n, r) {
            return S(r) ? r(e, t, n) : (o(r, function(r) {
                e = r(e, t, n)
            }), e)
        }

        function xt(e) {
            return e >= 200 && 300 > e
        }

        function Ct() {
            var e = this.defaults = {
                    transformResponse: [At],
                    transformRequest: [function(e) {
                        return !y(e) || T(e) || P(e) || I(e) ? e : W(e)
                    }],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        post: U(Di),
                        put: U(Di),
                        patch: U(Di)
                    },
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    paramSerializer: "$httpParamSerializer"
                },
                t = !1;
            this.useApplyAsync = function(e) {
                return N(e) ? (t = !!e, this) : t
            };
            var i = !0;
            this.useLegacyPromiseExtensions = function(e) {
                return N(e) ? (i = !!e, this) : i
            };
            var a = this.interceptors = [];
            this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(s, d, l, u, f, p) {
                function h(t) {
                    function a(e) {
                        var t = c({}, e);
                        return e.data ? t.data = wt(e.data, e.headers, e.status, l.transformResponse) : t.data = e.data, xt(e.status) ? t : f.reject(t)
                    }

                    function s(e, t) {
                        var n, r = {};
                        return o(e, function(e, i) {
                            S(e) ? (n = e(t), null != n && (r[i] = n)) : r[i] = e
                        }), r
                    }

                    function d(t) {
                        var n, r, i, o = e.headers,
                            a = c({}, t.headers);
                        o = c({}, o.common, o[Nr(t.method)]);
                        e: for (n in o) {
                            r = Nr(n);
                            for (i in a)
                                if (Nr(i) === r) continue e;
                            a[n] = o[n]
                        }
                        return s(a, U(t))
                    }
                    if (!Or.isObject(t)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
                    var l = c({
                        method: "get",
                        transformRequest: e.transformRequest,
                        transformResponse: e.transformResponse,
                        paramSerializer: e.paramSerializer
                    }, t);
                    l.headers = d(t), l.method = br(l.method), l.paramSerializer = w(l.paramSerializer) ? p.get(l.paramSerializer) : l.paramSerializer;
                    var u = function(t) {
                            var r = t.headers,
                                i = wt(t.data, bt(r), n, t.transformRequest);
                            return A(i) && o(r, function(e, t) {
                                "content-type" === Nr(t) && delete r[t]
                            }), A(t.withCredentials) && !A(e.withCredentials) && (t.withCredentials = e.withCredentials), $(t, i).then(a, a)
                        },
                        h = [u, n],
                        g = f.when(l);
                    for (o(x, function(e) {
                            (e.request || e.requestError) && h.unshift(e.request, e.requestError), (e.response || e.responseError) && h.push(e.response, e.responseError)
                        }); h.length;) {
                        var m = h.shift(),
                            v = h.shift();
                        g = g.then(m, v)
                    }
                    return i ? (g.success = function(e) {
                        return fe(e, "fn"), g.then(function(t) {
                            e(t.data, t.status, t.headers, l)
                        }), g
                    }, g.error = function(e) {
                        return fe(e, "fn"), g.then(null, function(t) {
                            e(t.data, t.status, t.headers, l)
                        }), g
                    }) : (g.success = Ui("success"), g.error = Ui("error")), g
                }

                function g(e) {
                    o(arguments, function(e) {
                        h[e] = function(t, n) {
                            return h(c({}, n || {}, {
                                method: e,
                                url: t
                            }))
                        }
                    })
                }

                function m(e) {
                    o(arguments, function(e) {
                        h[e] = function(t, n, r) {
                            return h(c({}, r || {}, {
                                method: e,
                                url: t,
                                data: n
                            }))
                        }
                    })
                }

                function $(r, i) {
                    function o(e, n, r, i) {
                        function o() {
                            a(n, e, r, i)
                        }
                        p && (xt(e) ? p.put(x, [e, n, yt(r), i]) : p.remove(x)), t ? u.$applyAsync(o) : (o(), u.$$phase || u.$apply())
                    }

                    function a(e, t, n, i) {
                        t = t >= -1 ? t : 0, (xt(t) ? m.resolve : m.reject)({
                            data: e,
                            status: t,
                            headers: bt(n),
                            config: r,
                            statusText: i
                        })
                    }

                    function l(e) {
                        a(e.data, e.status, U(e.headers()), e.statusText)
                    }

                    function c() {
                        var e = h.pendingRequests.indexOf(r); - 1 !== e && h.pendingRequests.splice(e, 1)
                    }
                    var p, g, m = f.defer(),
                        $ = m.promise,
                        w = r.headers,
                        x = v(r.url, r.paramSerializer(r.params));
                    if (h.pendingRequests.push(r), $.then(c, c), !r.cache && !e.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (p = y(r.cache) ? r.cache : y(e.cache) ? e.cache : b), p && (g = p.get(x), N(g) ? M(g) ? g.then(l, l) : Lr(g) ? a(g[1], g[0], U(g[2]), g[3]) : a(g, 200, {}, "OK") : p.put(x, $)), A(g)) {
                        var C = En(r.url) ? d()[r.xsrfCookieName || e.xsrfCookieName] : n;
                        C && (w[r.xsrfHeaderName || e.xsrfHeaderName] = C), s(r.method, x, i, o, w, r.timeout, r.withCredentials, r.responseType)
                    }
                    return $
                }

                function v(e, t) {
                    return t.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + t), e
                }
                var b = l("$http");
                e.paramSerializer = w(e.paramSerializer) ? p.get(e.paramSerializer) : e.paramSerializer;
                var x = [];
                return o(a, function(e) {
                    x.unshift(w(e) ? p.get(e) : p.invoke(e))
                }), h.pendingRequests = [], g("get", "delete", "head", "jsonp"), m("post", "put", "patch"), h.defaults = e, h
            }]
        }

        function St() {
            this.$get = function() {
                return function() {
                    return new e.XMLHttpRequest
                }
            }
        }

        function Et() {
            this.$get = ["$browser", "$window", "$document", "$xhrFactory", function(e, t, n, r) {
                return _t(e, r, e.defer, t.angular.callbacks, n[0])
            }]
        }

        function _t(e, t, n, r, i) {
            function a(e, t, n) {
                var o = i.createElement("script"),
                    a = null;
                return o.type = "text/javascript", o.src = e, o.async = !0, a = function(e) {
                    ri(o, "load", a), ri(o, "error", a), i.body.removeChild(o), o = null;
                    var s = -1,
                        d = "unknown";
                    e && ("load" !== e.type || r[t].called || (e = {
                        type: "error"
                    }), d = e.type, s = "error" === e.type ? 404 : 200), n && n(s, d)
                }, ni(o, "load", a), ni(o, "error", a), i.body.appendChild(o), a
            }
            return function(i, s, d, l, u, c, f, p) {
                function h() {
                    v && v(), y && y.abort()
                }

                function m(t, r, i, o, a) {
                    N(x) && n.cancel(x), v = y = null, t(r, i, o, a), e.$$completeOutstandingRequest(g)
                }
                if (e.$$incOutstandingRequestCount(), s = s || e.url(), "jsonp" == Nr(i)) {
                    var $ = "_" + (r.counter++).toString(36);
                    r[$] = function(e) {
                        r[$].data = e, r[$].called = !0
                    };
                    var v = a(s.replace("JSON_CALLBACK", "angular.callbacks." + $), $, function(e, t) {
                        m(l, e, r[$].data, "", t), r[$] = g
                    })
                } else {
                    var y = t(i, s);
                    y.open(i, s, !0), o(u, function(e, t) {
                        N(e) && y.setRequestHeader(t, e)
                    }), y.onload = function() {
                        var e = y.statusText || "",
                            t = "response" in y ? y.response : y.responseText,
                            n = 1223 === y.status ? 204 : y.status;
                        0 === n && (n = t ? 200 : "file" == Sn(s).protocol ? 404 : 0), m(l, n, t, y.getAllResponseHeaders(), e)
                    };
                    var b = function() {
                        m(l, -1, null, null, "")
                    };
                    if (y.onerror = b, y.onabort = b, f && (y.withCredentials = !0), p) try {
                        y.responseType = p
                    } catch (w) {
                        if ("json" !== p) throw w
                    }
                    y.send(A(d) ? null : d)
                }
                if (c > 0) var x = n(h, c);
                else M(c) && c.then(h)
            }
        }

        function kt() {
            var e = "{{",
                t = "}}";
            this.startSymbol = function(t) {
                return t ? (e = t, this) : e
            }, this.endSymbol = function(e) {
                return e ? (t = e, this) : t
            }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
                function o(e) {
                    return "\\\\\\" + e
                }

                function a(n) {
                    return n.replace(f, e).replace(p, t)
                }

                function s(e) {
                    if (null == e) return "";
                    switch (typeof e) {
                        case "string":
                            break;
                        case "number":
                            e = "" + e;
                            break;
                        default:
                            e = W(e)
                    }
                    return e
                }

                function d(o, d, f, p) {
                    function h(e) {
                        try {
                            return e = _(e), p && !N(e) ? e : s(e)
                        } catch (t) {
                            r(Bi.interr(o, t))
                        }
                    }
                    p = !!p;
                    for (var g, m, $, v = 0, y = [], b = [], w = o.length, x = [], C = []; w > v;) {
                        if (-1 == (g = o.indexOf(e, v)) || -1 == (m = o.indexOf(t, g + l))) {
                            v !== w && x.push(a(o.substring(v)));
                            break
                        }
                        v !== g && x.push(a(o.substring(v, g))), $ = o.substring(g + l, m), y.push($), b.push(n($, h)), v = m + u, C.push(x.length), x.push("")
                    }
                    if (f && x.length > 1 && Bi.throwNoconcat(o), !d || y.length) {
                        var E = function(e) {
                                for (var t = 0, n = y.length; n > t; t++) {
                                    if (p && A(e[t])) return;
                                    x[C[t]] = e[t]
                                }
                                return x.join("")
                            },
                            _ = function(e) {
                                return f ? i.getTrusted(f, e) : i.valueOf(e)
                            };
                        return c(function(e) {
                            var t = 0,
                                n = y.length,
                                i = new Array(n);
                            try {
                                for (; n > t; t++) i[t] = b[t](e);
                                return E(i)
                            } catch (a) {
                                r(Bi.interr(o, a))
                            }
                        }, {
                            exp: o,
                            expressions: y,
                            $$watchDelegate: function(e, t) {
                                var n;
                                return e.$watchGroup(b, function(r, i) {
                                    var o = E(r);
                                    S(t) && t.call(this, o, r !== i ? n : o, e), n = o
                                })
                            }
                        })
                    }
                }
                var l = e.length,
                    u = t.length,
                    f = new RegExp(e.replace(/./g, o), "g"),
                    p = new RegExp(t.replace(/./g, o), "g");
                return d.startSymbol = function() {
                    return e
                }, d.endSymbol = function() {
                    return t
                }, d
            }]
        }

        function Tt() {
            this.$get = ["$rootScope", "$window", "$q", "$$q", function(e, t, n, r) {
                function i(i, a, s, d) {
                    var l = arguments.length > 4,
                        u = l ? H(arguments, 4) : [],
                        c = t.setInterval,
                        f = t.clearInterval,
                        p = 0,
                        h = N(d) && !d,
                        g = (h ? r : n).defer(),
                        m = g.promise;
                    return s = N(s) ? s : 0, m.then(null, null, l ? function() {
                        i.apply(null, u)
                    } : i), m.$$intervalId = c(function() {
                        g.notify(p++), s > 0 && p >= s && (g.resolve(p), f(m.$$intervalId), delete o[m.$$intervalId]), h || e.$apply()
                    }, a), o[m.$$intervalId] = g, m
                }
                var o = {};
                return i.cancel = function(e) {
                    return e && e.$$intervalId in o ? (o[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete o[e.$$intervalId], !0) : !1
                }, i
            }]
        }

        function It(e) {
            for (var t = e.split("/"), n = t.length; n--;) t[n] = ne(t[n]);
            return t.join("/")
        }

        function Pt(e, t) {
            var n = Sn(e);
            t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = p(n.port) || Hi[n.protocol] || null
        }

        function Ft(e, t) {
            var n = "/" !== e.charAt(0);
            n && (e = "/" + e);
            var r = Sn(e);
            t.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), t.$$search = ee(r.search), t.$$hash = decodeURIComponent(r.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
        }

        function Mt(e, t) {
            return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
        }

        function Ot(e) {
            var t = e.indexOf("#");
            return -1 == t ? e : e.substr(0, t)
        }

        function Dt(e) {
            return e.replace(/(#.+)|#$/, "$1")
        }

        function Rt(e) {
            return e.substr(0, Ot(e).lastIndexOf("/") + 1)
        }

        function Lt(e) {
            return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
        }

        function jt(e, t, n) {
            this.$$html5 = !0, n = n || "", Pt(e, this), this.$$parse = function(e) {
                var n = Mt(t, e);
                if (!w(n)) throw Vi("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
                Ft(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
            }, this.$$compose = function() {
                var e = te(this.$$search),
                    n = this.$$hash ? "#" + ne(this.$$hash) : "";
                this.$$url = It(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1)
            }, this.$$parseLinkUrl = function(r, i) {
                if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
                var o, a, s;
                return N(o = Mt(e, r)) ? (a = o, s = N(o = Mt(n, o)) ? t + (Mt("/", o) || o) : e + a) : N(o = Mt(t, r)) ? s = t + o : t == r + "/" && (s = t), s && this.$$parse(s), !!s
            }
        }

        function qt(e, t, n) {
            Pt(e, this), this.$$parse = function(r) {
                function i(e, t, n) {
                    var r, i = /^\/[A-Z]:(\/.*)/;
                    return 0 === t.indexOf(n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
                }
                var o, a = Mt(e, r) || Mt(t, r);
                A(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", A(a) && (e = r, this.replace())) : (o = Mt(n, a), A(o) && (o = a)), Ft(o, this), this.$$path = i(this.$$path, o, e), this.$$compose()
            }, this.$$compose = function() {
                var t = te(this.$$search),
                    r = this.$$hash ? "#" + ne(this.$$hash) : "";
                this.$$url = It(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + (this.$$url ? n + this.$$url : "")
            }, this.$$parseLinkUrl = function(t, n) {
                return Ot(e) == Ot(t) ? (this.$$parse(t), !0) : !1
            }
        }

        function Ut(e, t, n) {
            this.$$html5 = !0, qt.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
                if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
                var o, a;
                return e == Ot(r) ? o = r : (a = Mt(t, r)) ? o = e + n + a : t === r + "/" && (o = t), o && this.$$parse(o), !!o
            }, this.$$compose = function() {
                var t = te(this.$$search),
                    r = this.$$hash ? "#" + ne(this.$$hash) : "";
                this.$$url = It(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + n + this.$$url
            }
        }

        function Bt(e) {
            return function() {
                return this[e]
            }
        }

        function zt(e, t) {
            return function(n) {
                return A(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
            }
        }

        function Ht() {
            var e = "",
                t = {
                    enabled: !1,
                    requireBase: !0,
                    rewriteLinks: !0
                };
            this.hashPrefix = function(t) {
                return N(t) ? (e = t, this) : e
            }, this.html5Mode = function(e) {
                return F(e) ? (t.enabled = e, this) : y(e) ? (F(e.enabled) && (t.enabled = e.enabled), F(e.requireBase) && (t.requireBase = e.requireBase), F(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
                function s(e, t, n) {
                    var i = l.url(),
                        o = l.$$state;
                    try {
                        r.url(e, t, n), l.$$state = r.state()
                    } catch (a) {
                        throw l.url(i), l.$$state = o, a
                    }
                }

                function d(e, t) {
                    n.$broadcast("$locationChangeSuccess", l.absUrl(), e, l.$$state, t)
                }
                var l, u, c, f = r.baseHref(),
                    p = r.url();
                if (t.enabled) {
                    if (!f && t.requireBase) throw Vi("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                    c = Lt(p) + (f || "/"), u = i.history ? jt : Ut
                } else c = Ot(p), u = qt;
                var h = Rt(c);
                l = new u(c, h, "#" + e), l.$$parseLinkUrl(p, p), l.$$state = r.state();
                var g = /^\s*(javascript|mailto):/i;
                o.on("click", function(e) {
                    if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
                        for (var i = Sr(e.target);
                            "a" !== L(i[0]);)
                            if (i[0] === o[0] || !(i = i.parent())[0]) return;
                        var s = i.prop("href"),
                            d = i.attr("href") || i.attr("xlink:href");
                        y(s) && "[object SVGAnimatedString]" === s.toString() && (s = Sn(s.animVal).href), g.test(s) || !s || i.attr("target") || e.isDefaultPrevented() || l.$$parseLinkUrl(s, d) && (e.preventDefault(), l.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                    }
                }), Dt(l.absUrl()) != Dt(p) && r.url(l.absUrl(), !0);
                var m = !0;
                return r.onUrlChange(function(e, t) {
                    return A(Mt(h, e)) ? void(a.location.href = e) : (n.$evalAsync(function() {
                        var r, i = l.absUrl(),
                            o = l.$$state;
                        l.$$parse(e), l.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented, l.absUrl() === e && (r ? (l.$$parse(i), l.$$state = o, s(i, !1, o)) : (m = !1, d(i, o)))
                    }), void(n.$$phase || n.$digest()))
                }), n.$watch(function() {
                    var e = Dt(r.url()),
                        t = Dt(l.absUrl()),
                        o = r.state(),
                        a = l.$$replace,
                        u = e !== t || l.$$html5 && i.history && o !== l.$$state;
                    (m || u) && (m = !1, n.$evalAsync(function() {
                        var t = l.absUrl(),
                            r = n.$broadcast("$locationChangeStart", t, e, l.$$state, o).defaultPrevented;
                        l.absUrl() === t && (r ? (l.$$parse(e), l.$$state = o) : (u && s(t, a, o === l.$$state ? null : l.$$state), d(e, o)))
                    })), l.$$replace = !1
                }), l
            }]
        }

        function Vt() {
            var e = !0,
                t = this;
            this.debugEnabled = function(t) {
                return N(t) ? (e = t, this) : e
            }, this.$get = ["$window", function(n) {
                function r(e) {
                    return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
                }

                function i(e) {
                    var t = n.console || {},
                        i = t[e] || t.log || g,
                        a = !1;
                    try {
                        a = !!i.apply
                    } catch (s) {}
                    return a ? function() {
                        var e = [];
                        return o(arguments, function(t) {
                            e.push(r(t))
                        }), i.apply(t, e)
                    } : function(e, t) {
                        i(e, null == t ? "" : t)
                    }
                }
                return {
                    log: i("log"),
                    info: i("info"),
                    warn: i("warn"),
                    error: i("error"),
                    debug: function() {
                        var n = i("debug");
                        return function() {
                            e && n.apply(t, arguments)
                        }
                    }()
                }
            }]
        }

        function Gt(e, t) {
            if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e) throw Wi("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
            return e
        }

        function Wt(e, t) {
            if (e += "", !w(e)) throw Wi("iseccst", "Cannot convert object to primitive value! Expression: {0}", t);
            return e
        }

        function Kt(e, t) {
            if (e) {
                if (e.constructor === e) throw Wi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
                if (e.window === e) throw Wi("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
                if (e.children && (e.nodeName || e.prop && e.attr && e.find)) throw Wi("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
                if (e === Object) throw Wi("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
            }
            return e
        }

        function Yt(e, t) {
            if (e) {
                if (e.constructor === e) throw Wi("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
                if (e === Ki || e === Yi || e === Zi) throw Wi("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
            }
        }

        function Zt(e, t) {
            if (e && (e === 0..constructor || e === (!1).constructor || e === "".constructor || e === {}.constructor || e === [].constructor || e === Function.constructor)) throw Wi("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", t)
        }

        function Xt(e, t) {
            return "undefined" != typeof e ? e : t
        }

        function Jt(e, t) {
            return "undefined" == typeof e ? t : "undefined" == typeof t ? e : e + t
        }

        function Qt(e, t) {
            var n = e(t);
            return !n.$stateful
        }

        function en(e, t) {
            var n, r;
            switch (e.type) {
                case eo.Program:
                    n = !0, o(e.body, function(e) {
                        en(e.expression, t), n = n && e.expression.constant
                    }), e.constant = n;
                    break;
                case eo.Literal:
                    e.constant = !0, e.toWatch = [];
                    break;
                case eo.UnaryExpression:
                    en(e.argument, t), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
                    break;
                case eo.BinaryExpression:
                    en(e.left, t), en(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                    break;
                case eo.LogicalExpression:
                    en(e.left, t), en(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
                    break;
                case eo.ConditionalExpression:
                    en(e.test, t), en(e.alternate, t), en(e.consequent, t), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
                    break;
                case eo.Identifier:
                    e.constant = !1, e.toWatch = [e];
                    break;
                case eo.MemberExpression:
                    en(e.object, t), e.computed && en(e.property, t), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = [e];
                    break;
                case eo.CallExpression:
                    n = e.filter ? Qt(t, e.callee.name) : !1, r = [], o(e.arguments, function(e) {
                        en(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                    }), e.constant = n, e.toWatch = e.filter && Qt(t, e.callee.name) ? r : [e];
                    break;
                case eo.AssignmentExpression:
                    en(e.left, t), en(e.right, t), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
                    break;
                case eo.ArrayExpression:
                    n = !0, r = [], o(e.elements, function(e) {
                        en(e, t), n = n && e.constant, e.constant || r.push.apply(r, e.toWatch)
                    }), e.constant = n, e.toWatch = r;
                    break;
                case eo.ObjectExpression:
                    n = !0, r = [], o(e.properties, function(e) {
                        en(e.value, t), n = n && e.value.constant, e.value.constant || r.push.apply(r, e.value.toWatch)
                    }), e.constant = n, e.toWatch = r;
                    break;
                case eo.ThisExpression:
                    e.constant = !1, e.toWatch = []
            }
        }

        function tn(e) {
            if (1 == e.length) {
                var t = e[0].expression,
                    r = t.toWatch;
                return 1 !== r.length ? r : r[0] !== t ? r : n
            }
        }

        function nn(e) {
            return e.type === eo.Identifier || e.type === eo.MemberExpression
        }

        function rn(e) {
            return 1 === e.body.length && nn(e.body[0].expression) ? {
                type: eo.AssignmentExpression,
                left: e.body[0].expression,
                right: {
                    type: eo.NGValueParameter
                },
                operator: "="
            } : void 0
        }

        function on(e) {
            return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === eo.Literal || e.body[0].expression.type === eo.ArrayExpression || e.body[0].expression.type === eo.ObjectExpression)
        }

        function an(e) {
            return e.constant
        }

        function sn(e, t) {
            this.astBuilder = e, this.$filter = t
        }

        function dn(e, t) {
            this.astBuilder = e, this.$filter = t
        }

        function ln(e) {
            return "constructor" == e
        }

        function un(e) {
            return S(e.valueOf) ? e.valueOf() : no.call(e)
        }

        function cn() {
            var e = me(),
                t = me();
            this.$get = ["$filter", function(r) {
                function i(e, t) {
                    return null == e || null == t ? e === t : "object" == typeof e && (e = un(e), "object" == typeof e) ? !1 : e === t || e !== e && t !== t
                }

                function a(e, t, r, o, a) {
                    var s, d = o.inputs;
                    if (1 === d.length) {
                        var l = i;
                        return d = d[0], e.$watch(function(e) {
                            var t = d(e);
                            return i(t, l) || (s = o(e, n, n, [t]), l = t && un(t)), s
                        }, t, r, a)
                    }
                    for (var u = [], c = [], f = 0, p = d.length; p > f; f++) u[f] = i, c[f] = null;
                    return e.$watch(function(e) {
                        for (var t = !1, r = 0, a = d.length; a > r; r++) {
                            var l = d[r](e);
                            (t || (t = !i(l, u[r]))) && (c[r] = l, u[r] = l && un(l))
                        }
                        return t && (s = o(e, n, n, c)), s
                    }, t, r, a)
                }

                function s(e, t, n, r) {
                    var i, o;
                    return i = e.$watch(function(e) {
                        return r(e)
                    }, function(e, n, r) {
                        o = e, S(t) && t.apply(this, arguments), N(e) && r.$$postDigest(function() {
                            N(o) && i()
                        })
                    }, n)
                }

                function d(e, t, n, r) {
                    function i(e) {
                        var t = !0;
                        return o(e, function(e) {
                            N(e) || (t = !1)
                        }), t
                    }
                    var a, s;
                    return a = e.$watch(function(e) {
                        return r(e)
                    }, function(e, n, r) {
                        s = e, S(t) && t.call(this, e, n, r), i(e) && r.$$postDigest(function() {
                            i(s) && a()
                        })
                    }, n)
                }

                function l(e, t, n, r) {
                    var i;
                    return i = e.$watch(function(e) {
                        return r(e)
                    }, function(e, n, r) {
                        S(t) && t.apply(this, arguments), i()
                    }, n)
                }

                function u(e, t) {
                    if (!t) return e;
                    var n = e.$$watchDelegate,
                        r = n !== d && n !== s,
                        i = r ? function(n, r, i, o) {
                            var a = e(n, r, i, o);
                            return t(a, n, r)
                        } : function(n, r, i, o) {
                            var a = e(n, r, i, o),
                                s = t(a, n, r);
                            return N(a) ? s : a
                        };
                    return e.$$watchDelegate && e.$$watchDelegate !== a ? i.$$watchDelegate = e.$$watchDelegate : t.$stateful || (i.$$watchDelegate = a, i.inputs = e.inputs ? e.inputs : [e]), i
                }
                var c = Br().noUnsafeEval,
                    f = {
                        csp: c,
                        expensiveChecks: !1
                    },
                    p = {
                        csp: c,
                        expensiveChecks: !0
                    };
                return function(n, i, o) {
                    var c, h, m;
                    switch (typeof n) {
                        case "string":
                            n = n.trim(), m = n;
                            var $ = o ? t : e;
                            if (c = $[m], !c) {
                                ":" === n.charAt(0) && ":" === n.charAt(1) && (h = !0, n = n.substring(2));
                                var v = o ? p : f,
                                    A = new Qi(v),
                                    N = new to(A, r, v);
                                c = N.parse(n), c.constant ? c.$$watchDelegate = l : h ? c.$$watchDelegate = c.literal ? d : s : c.inputs && (c.$$watchDelegate = a), $[m] = c
                            }
                            return u(c, i);
                        case "function":
                            return u(n, i);
                        default:
                            return g
                    }
                }
            }]
        }

        function fn() {
            this.$get = ["$rootScope", "$exceptionHandler", function(e, t) {
                return hn(function(t) {
                    e.$evalAsync(t)
                }, t)
            }]
        }

        function pn() {
            this.$get = ["$browser", "$exceptionHandler", function(e, t) {
                return hn(function(t) {
                    e.defer(t)
                }, t)
            }]
        }

        function hn(e, t) {
            function i(e, t, n) {
                function r(t) {
                    return function(n) {
                        i || (i = !0, t.call(e, n))
                    }
                }
                var i = !1;
                return [r(t), r(n)]
            }

            function a() {
                this.$$state = {
                    status: 0
                }
            }

            function s(e, t) {
                return function(n) {
                    t.call(e, n)
                }
            }

            function d(e) {
                var r, i, o;
                o = e.pending, e.processScheduled = !1, e.pending = n;
                for (var a = 0, s = o.length; s > a; ++a) {
                    i = o[a][0], r = o[a][e.status];
                    try {
                        S(r) ? i.resolve(r(e.value)) : 1 === e.status ? i.resolve(e.value) : i.reject(e.value)
                    } catch (d) {
                        i.reject(d), t(d)
                    }
                }
            }

            function l(t) {
                !t.processScheduled && t.pending && (t.processScheduled = !0, e(function() {
                    d(t)
                }))
            }

            function u() {
                this.promise = new a, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
            }

            function f(e) {
                var t = new u,
                    n = 0,
                    r = Lr(e) ? [] : {};
                return o(e, function(e, i) {
                    n++, v(e).then(function(e) {
                        r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
                    }, function(e) {
                        r.hasOwnProperty(i) || t.reject(e)
                    })
                }), 0 === n && t.resolve(r), t.promise
            }
            var p = r("$q", TypeError),
                h = function() {
                    return new u
                };
            c(a.prototype, {
                then: function(e, t, n) {
                    if (A(e) && A(t) && A(n)) return this;
                    var r = new u;
                    return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && l(this.$$state), r.promise
                },
                "catch": function(e) {
                    return this.then(null, e)
                },
                "finally": function(e, t) {
                    return this.then(function(t) {
                        return $(t, !0, e)
                    }, function(t) {
                        return $(t, !1, e)
                    }, t)
                }
            }), c(u.prototype, {
                resolve: function(e) {
                    this.promise.$$state.status || (e === this.promise ? this.$$reject(p("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
                },
                $$resolve: function(e) {
                    var n, r;
                    r = i(this, this.$$resolve, this.$$reject);
                    try {
                        (y(e) || S(e)) && (n = e && e.then), S(n) ? (this.promise.$$state.status = -1, n.call(e, r[0], r[1], this.notify)) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, l(this.promise.$$state))
                    } catch (o) {
                        r[1](o), t(o)
                    }
                },
                reject: function(e) {
                    this.promise.$$state.status || this.$$reject(e)
                },
                $$reject: function(e) {
                    this.promise.$$state.value = e, this.promise.$$state.status = 2, l(this.promise.$$state)
                },
                notify: function(n) {
                    var r = this.promise.$$state.pending;
                    this.promise.$$state.status <= 0 && r && r.length && e(function() {
                        for (var e, i, o = 0, a = r.length; a > o; o++) {
                            i = r[o][0], e = r[o][3];
                            try {
                                i.notify(S(e) ? e(n) : n)
                            } catch (s) {
                                t(s)
                            }
                        }
                    })
                }
            });
            var g = function(e) {
                    var t = new u;
                    return t.reject(e), t.promise
                },
                m = function(e, t) {
                    var n = new u;
                    return t ? n.resolve(e) : n.reject(e), n.promise
                },
                $ = function(e, t, n) {
                    var r = null;
                    try {
                        S(n) && (r = n())
                    } catch (i) {
                        return m(i, !1)
                    }
                    return M(r) ? r.then(function() {
                        return m(e, t)
                    }, function(e) {
                        return m(e, !1)
                    }) : m(e, t)
                },
                v = function(e, t, n, r) {
                    var i = new u;
                    return i.resolve(e), i.promise.then(t, n, r)
                },
                N = v,
                b = function w(e) {
                    function t(e) {
                        r.resolve(e)
                    }

                    function n(e) {
                        r.reject(e)
                    }
                    if (!S(e)) throw p("norslvr", "Expected resolverFn, got '{0}'", e);
                    if (!(this instanceof w)) return new w(e);
                    var r = new u;
                    return e(t, n), r.promise
                };
            return b.defer = h, b.reject = g, b.when = v, b.resolve = N, b.all = f, b
        }

        function gn() {
            this.$get = ["$window", "$timeout", function(e, t) {
                var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                    r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                    i = !!n,
                    o = i ? function(e) {
                        var t = n(e);
                        return function() {
                            r(t)
                        }
                    } : function(e) {
                        var n = t(e, 16.66, !1);
                        return function() {
                            t.cancel(n)
                        }
                    };
                return o.supported = i, o
            }]
        }

        function mn() {
            function e(e) {
                function t() {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = d(), this.$$ChildScope = null
                }
                return t.prototype = e, t
            }
            var t = 10,
                n = r("$rootScope"),
                a = null,
                s = null;
            this.digestTtl = function(e) {
                return arguments.length && (t = e), t
            }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(r, l, u, c) {
                function f(e) {
                    e.currentScope.$$destroyed = !0
                }

                function p() {
                    this.$id = d(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
                }

                function h(e) {
                    if (x.$$phase) throw n("inprog", "{0} already in progress", x.$$phase);
                    x.$$phase = e
                }

                function m() {
                    x.$$phase = null
                }

                function $(e, t) {
                    do e.$$watchersCount += t; while (e = e.$parent)
                }

                function v(e, t, n) {
                    do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
                }

                function N() {}

                function b() {
                    for (; _.length;) try {
                        _.shift()()
                    } catch (e) {
                        l(e)
                    }
                    s = null
                }

                function w() {
                    null === s && (s = c.defer(function() {
                        x.$apply(b)
                    }))
                }
                p.prototype = {
                    constructor: p,
                    $new: function(t, n) {
                        var r;
                        return n = n || this, t ? (r = new p, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (t || n != this) && r.$on("$destroy", f), r
                    },
                    $watch: function(e, t, n, r) {
                        var i = u(e);
                        if (i.$$watchDelegate) return i.$$watchDelegate(this, t, n, i, e);
                        var o = this,
                            s = o.$$watchers,
                            d = {
                                fn: t,
                                last: N,
                                get: i,
                                exp: r || e,
                                eq: !!n
                            };
                        return a = null, S(t) || (d.fn = g), s || (s = o.$$watchers = []), s.unshift(d), $(this, 1),
                            function() {
                                j(s, d) >= 0 && $(o, -1), a = null
                            }
                    },
                    $watchGroup: function(e, t) {
                        function n() {
                            d = !1, l ? (l = !1, t(i, i, s)) : t(i, r, s)
                        }
                        var r = new Array(e.length),
                            i = new Array(e.length),
                            a = [],
                            s = this,
                            d = !1,
                            l = !0;
                        if (!e.length) {
                            var u = !0;
                            return s.$evalAsync(function() {
                                    u && t(i, i, s)
                                }),
                                function() {
                                    u = !1
                                }
                        }
                        return 1 === e.length ? this.$watch(e[0], function(e, n, o) {
                            i[0] = e, r[0] = n, t(i, e === n ? i : r, o)
                        }) : (o(e, function(e, t) {
                            var o = s.$watch(e, function(e, o) {
                                i[t] = e, r[t] = o, d || (d = !0, s.$evalAsync(n))
                            });
                            a.push(o)
                        }), function() {
                            for (; a.length;) a.shift()()
                        })
                    },
                    $watchCollection: function(e, t) {
                        function n(e) {
                            o = e;
                            var t, n, r, s, d;
                            if (!A(o)) {
                                if (y(o))
                                    if (i(o)) {
                                        a !== p && (a = p, m = a.length = 0, c++), t = o.length, m !== t && (c++, a.length = m = t);
                                        for (var l = 0; t > l; l++) d = a[l], s = o[l], r = d !== d && s !== s, r || d === s || (c++, a[l] = s)
                                    } else {
                                        a !== h && (a = h = {}, m = 0, c++), t = 0;
                                        for (n in o) yr.call(o, n) && (t++, s = o[n], d = a[n], n in a ? (r = d !== d && s !== s, r || d === s || (c++, a[n] = s)) : (m++, a[n] = s, c++));
                                        if (m > t) {
                                            c++;
                                            for (n in a) yr.call(o, n) || (m--, delete a[n])
                                        }
                                    }
                                else a !== o && (a = o, c++);
                                return c
                            }
                        }

                        function r() {
                            if (g ? (g = !1, t(o, o, d)) : t(o, s, d), l)
                                if (y(o))
                                    if (i(o)) {
                                        s = new Array(o.length);
                                        for (var e = 0; e < o.length; e++) s[e] = o[e]
                                    } else {
                                        s = {};
                                        for (var n in o) yr.call(o, n) && (s[n] = o[n])
                                    }
                            else s = o
                        }
                        n.$stateful = !0;
                        var o, a, s, d = this,
                            l = t.length > 1,
                            c = 0,
                            f = u(e, n),
                            p = [],
                            h = {},
                            g = !0,
                            m = 0;
                        return this.$watch(f, r)
                    },
                    $digest: function() {
                        var e, r, i, o, d, u, f, p, g, $, v = t,
                            A = this,
                            y = [];
                        h("$digest"), c.$$checkUrlChange(), this === x && null !== s && (c.defer.cancel(s), b()), a = null;
                        do {
                            for (u = !1, p = A; C.length;) {
                                try {
                                    $ = C.shift(), $.scope.$eval($.expression, $.locals)
                                } catch (w) {
                                    l(w)
                                }
                                a = null
                            }
                            e: do {
                                if (o = p.$$watchers)
                                    for (d = o.length; d--;) try {
                                        if (e = o[d])
                                            if ((r = e.get(p)) === (i = e.last) || (e.eq ? B(r, i) : "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i))) {
                                                if (e === a) {
                                                    u = !1;
                                                    break e
                                                }
                                            } else u = !0, a = e, e.last = e.eq ? q(r, null) : r, e.fn(r, i === N ? r : i, p), 5 > v && (g = 4 - v, y[g] || (y[g] = []), y[g].push({
                                                msg: S(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                                newVal: r,
                                                oldVal: i
                                            }))
                                    } catch (w) {
                                        l(w)
                                    }
                                if (!(f = p.$$watchersCount && p.$$childHead || p !== A && p.$$nextSibling))
                                    for (; p !== A && !(f = p.$$nextSibling);) p = p.$parent
                            } while (p = f);
                            if ((u || C.length) && !v--) throw m(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, y)
                        } while (u || C.length);
                        for (m(); E.length;) try {
                            E.shift()()
                        } catch (w) {
                            l(w)
                        }
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var e = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, this === x && c.$$applicationDestroyed(), $(this, -this.$$watchersCount);
                            for (var t in this.$$listenerCount) v(this, this.$$listenerCount[t], t);
                            e && e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = g, this.$on = this.$watch = this.$watchGroup = function() {
                                return g
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    },
                    $eval: function(e, t) {
                        return u(e)(this, t)
                    },
                    $evalAsync: function(e, t) {
                        x.$$phase || C.length || c.defer(function() {
                            C.length && x.$digest()
                        }), C.push({
                            scope: this,
                            expression: e,
                            locals: t
                        })
                    },
                    $$postDigest: function(e) {
                        E.push(e)
                    },
                    $apply: function(e) {
                        try {
                            h("$apply");
                            try {
                                return this.$eval(e)
                            } finally {
                                m()
                            }
                        } catch (t) {
                            l(t)
                        } finally {
                            try {
                                x.$digest()
                            } catch (t) {
                                throw l(t), t
                            }
                        }
                    },
                    $applyAsync: function(e) {
                        function t() {
                            n.$eval(e)
                        }
                        var n = this;
                        e && _.push(t), w()
                    },
                    $on: function(e, t) {
                        var n = this.$$listeners[e];
                        n || (this.$$listeners[e] = n = []), n.push(t);
                        var r = this;
                        do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
                        var i = this;
                        return function() {
                            var r = n.indexOf(t); - 1 !== r && (n[r] = null, v(i, 1, e))
                        }
                    },
                    $emit: function(e, t) {
                        var n, r, i, o = [],
                            a = this,
                            s = !1,
                            d = {
                                name: e,
                                targetScope: a,
                                stopPropagation: function() {
                                    s = !0
                                },
                                preventDefault: function() {
                                    d.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            u = z([d], arguments, 1);
                        do {
                            for (n = a.$$listeners[e] || o, d.currentScope = a, r = 0, i = n.length; i > r; r++)
                                if (n[r]) try {
                                    n[r].apply(null, u)
                                } catch (c) {
                                    l(c)
                                } else n.splice(r, 1), r--, i--;
                            if (s) return d.currentScope = null, d;
                            a = a.$parent
                        } while (a);
                        return d.currentScope = null, d
                    },
                    $broadcast: function(e, t) {
                        var n = this,
                            r = n,
                            i = n,
                            o = {
                                name: e,
                                targetScope: n,
                                preventDefault: function() {
                                    o.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            };
                        if (!n.$$listenerCount[e]) return o;
                        for (var a, s, d, u = z([o], arguments, 1); r = i;) {
                            for (o.currentScope = r, a = r.$$listeners[e] || [], s = 0, d = a.length; d > s; s++)
                                if (a[s]) try {
                                    a[s].apply(null, u)
                                } catch (c) {
                                    l(c)
                                } else a.splice(s, 1), s--, d--;
                            if (!(i = r.$$listenerCount[e] && r.$$childHead || r !== n && r.$$nextSibling))
                                for (; r !== n && !(i = r.$$nextSibling);) r = r.$parent
                        }
                        return o.currentScope = null, o
                    }
                };
                var x = new p,
                    C = x.$$asyncQueue = [],
                    E = x.$$postDigestQueue = [],
                    _ = x.$$applyAsyncQueue = [];
                return x
            }]
        }

        function $n() {
            var e = /^\s*(https?|ftp|mailto|tel|file):/,
                t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function(t) {
                return N(t) ? (e = t, this) : e
            }, this.imgSrcSanitizationWhitelist = function(e) {
                return N(e) ? (t = e, this) : t
            }, this.$get = function() {
                return function(n, r) {
                    var i, o = r ? t : e;
                    return i = Sn(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
                }
            }
        }

        function vn(e) {
            if ("self" === e) return e;
            if (w(e)) {
                if (e.indexOf("***") > -1) throw ro("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
                return e = Ur(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
            }
            if (E(e)) return new RegExp("^" + e.source + "$");
            throw ro("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
        }

        function An(e) {
            var t = [];
            return N(e) && o(e, function(e) {
                t.push(vn(e))
            }), t
        }

        function Nn() {
            this.SCE_CONTEXTS = io;
            var e = ["self"],
                t = [];
            this.resourceUrlWhitelist = function(t) {
                return arguments.length && (e = An(t)), e
            }, this.resourceUrlBlacklist = function(e) {
                return arguments.length && (t = An(e)), t
            }, this.$get = ["$injector", function(n) {
                function r(e, t) {
                    return "self" === e ? En(t) : !!e.exec(t.href)
                }

                function i(n) {
                    var i, o, a = Sn(n.toString()),
                        s = !1;
                    for (i = 0, o = e.length; o > i; i++)
                        if (r(e[i], a)) {
                            s = !0;
                            break
                        }
                    if (s)
                        for (i = 0, o = t.length; o > i; i++)
                            if (r(t[i], a)) {
                                s = !1;
                                break
                            }
                    return s
                }

                function o(e) {
                    var t = function(e) {
                        this.$$unwrapTrustedValue = function() {
                            return e
                        }
                    };
                    return e && (t.prototype = new e), t.prototype.valueOf = function() {
                        return this.$$unwrapTrustedValue()
                    }, t.prototype.toString = function() {
                        return this.$$unwrapTrustedValue().toString()
                    }, t
                }

                function a(e, t) {
                    var n = c.hasOwnProperty(e) ? c[e] : null;
                    if (!n) throw ro("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                    if (null === t || A(t) || "" === t) return t;
                    if ("string" != typeof t) throw ro("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                    return new n(t)
                }

                function s(e) {
                    return e instanceof u ? e.$$unwrapTrustedValue() : e
                }

                function d(e, t) {
                    if (null === t || A(t) || "" === t) return t;
                    var n = c.hasOwnProperty(e) ? c[e] : null;
                    if (n && t instanceof n) return t.$$unwrapTrustedValue();
                    if (e === io.RESOURCE_URL) {
                        if (i(t)) return t;
                        throw ro("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                    }
                    if (e === io.HTML) return l(t);
                    throw ro("unsafe", "Attempting to use an unsafe value in a safe context.")
                }
                var l = function(e) {
                    throw ro("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                n.has("$sanitize") && (l = n.get("$sanitize"));
                var u = o(),
                    c = {};
                return c[io.HTML] = o(u), c[io.CSS] = o(u), c[io.URL] = o(u), c[io.JS] = o(u), c[io.RESOURCE_URL] = o(c[io.URL]), {
                    trustAs: a,
                    getTrusted: d,
                    valueOf: s
                }
            }]
        }

        function yn() {
            var e = !0;
            this.enabled = function(t) {
                return arguments.length && (e = !!t), e
            }, this.$get = ["$parse", "$sceDelegate", function(t, n) {
                if (e && 8 > Cr) throw ro("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var r = U(io);
                r.isEnabled = function() {
                    return e
                }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
                    return t
                }, r.valueOf = m), r.parseAs = function(e, n) {
                    var i = t(n);
                    return i.literal && i.constant ? i : t(n, function(t) {
                        return r.getTrusted(e, t)
                    })
                };
                var i = r.parseAs,
                    a = r.getTrusted,
                    s = r.trustAs;
                return o(io, function(e, t) {
                    var n = Nr(t);
                    r[be("parse_as_" + n)] = function(t) {
                        return i(e, t)
                    }, r[be("get_trusted_" + n)] = function(t) {
                        return a(e, t)
                    }, r[be("trust_as_" + n)] = function(t) {
                        return s(e, t)
                    }
                }), r
            }]
        }

        function bn() {
            this.$get = ["$window", "$document", function(e, t) {
                var n, r, i = {},
                    o = p((/android (\d+)/.exec(Nr((e.navigator || {}).userAgent)) || [])[1]),
                    a = /Boxee/i.test((e.navigator || {}).userAgent),
                    s = t[0] || {},
                    d = /^(Moz|webkit|ms)(?=[A-Z])/,
                    l = s.body && s.body.style,
                    u = !1,
                    c = !1;
                if (l) {
                    for (var f in l)
                        if (r = d.exec(f)) {
                            n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                            break
                        }
                    n || (n = "WebkitOpacity" in l && "webkit"), u = !!("transition" in l || n + "Transition" in l), c = !!("animation" in l || n + "Animation" in l), !o || u && c || (u = w(l.webkitTransition), c = w(l.webkitAnimation))
                }
                return {
                    history: !(!e.history || !e.history.pushState || 4 > o || a),
                    hasEvent: function(e) {
                        if ("input" === e && 11 >= Cr) return !1;
                        if (A(i[e])) {
                            var t = s.createElement("div");
                            i[e] = "on" + e in t
                        }
                        return i[e]
                    },
                    csp: Br(),
                    vendorPrefix: n,
                    transitions: u,
                    animations: c,
                    android: o
                }
            }]
        }

        function wn() {
            this.$get = ["$templateCache", "$http", "$q", "$sce", function(e, t, n, r) {
                function i(o, a) {
                    function s(e) {
                        if (!a) throw Ti("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", o, e.status, e.statusText);
                        return n.reject(e)
                    }
                    i.totalPendingRequests++, w(o) && e.get(o) || (o = r.getTrustedResourceUrl(o));
                    var d = t.defaults && t.defaults.transformResponse;
                    Lr(d) ? d = d.filter(function(e) {
                        return e !== At
                    }) : d === At && (d = null);
                    var l = {
                        cache: e,
                        transformResponse: d
                    };
                    return t.get(o, l)["finally"](function() {
                        i.totalPendingRequests--
                    }).then(function(t) {
                        return e.put(o, t.data), t.data
                    }, s)
                }
                return i.totalPendingRequests = 0, i
            }]
        }

        function xn() {
            this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
                var r = {};
                return r.findBindings = function(e, t, n) {
                    var r = e.getElementsByClassName("ng-binding"),
                        i = [];
                    return o(r, function(e) {
                        var r = Or.element(e).data("$binding");
                        r && o(r, function(r) {
                            if (n) {
                                var o = new RegExp("(^|\\s)" + Ur(t) + "(\\s|\\||$)");
                                o.test(r) && i.push(e)
                            } else -1 != r.indexOf(t) && i.push(e)
                        })
                    }), i
                }, r.findModels = function(e, t, n) {
                    for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                        var o = n ? "=" : "*=",
                            a = "[" + r[i] + "model" + o + '"' + t + '"]',
                            s = e.querySelectorAll(a);
                        if (s.length) return s
                    }
                }, r.getLocation = function() {
                    return n.url()
                }, r.setLocation = function(t) {
                    t !== n.url() && (n.url(t), e.$digest())
                }, r.whenStable = function(e) {
                    t.notifyWhenNoOutstandingRequests(e)
                }, r
            }]
        }

        function Cn() {
            this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
                function o(o, s, d) {
                    S(o) || (d = s, s = o, o = g);
                    var l, u = H(arguments, 3),
                        c = N(d) && !d,
                        f = (c ? r : n).defer(),
                        p = f.promise;
                    return l = t.defer(function() {
                        try {
                            f.resolve(o.apply(null, u))
                        } catch (t) {
                            f.reject(t), i(t)
                        } finally {
                            delete a[p.$$timeoutId]
                        }
                        c || e.$apply()
                    }, s), p.$$timeoutId = l, a[l] = f, p
                }
                var a = {};
                return o.cancel = function(e) {
                    return e && e.$$timeoutId in a ? (a[e.$$timeoutId].reject("canceled"), delete a[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
                }, o
            }]
        }

        function Sn(e) {
            var t = e;
            return Cr && (oo.setAttribute("href", t), t = oo.href), oo.setAttribute("href", t), {
                href: oo.href,
                protocol: oo.protocol ? oo.protocol.replace(/:$/, "") : "",
                host: oo.host,
                search: oo.search ? oo.search.replace(/^\?/, "") : "",
                hash: oo.hash ? oo.hash.replace(/^#/, "") : "",
                hostname: oo.hostname,
                port: oo.port,
                pathname: "/" === oo.pathname.charAt(0) ? oo.pathname : "/" + oo.pathname
            }
        }

        function En(e) {
            var t = w(e) ? Sn(e) : e;
            return t.protocol === ao.protocol && t.host === ao.host
        }

        function _n() {
            this.$get = $(e)
        }

        function kn(e) {
            function t(e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return e
                }
            }
            var n = e[0] || {},
                r = {},
                i = "";
            return function() {
                var e, o, a, s, d, l = n.cookie || "";
                if (l !== i)
                    for (i = l, e = i.split("; "), r = {}, a = 0; a < e.length; a++) o = e[a], s = o.indexOf("="), s > 0 && (d = t(o.substring(0, s)), A(r[d]) && (r[d] = t(o.substring(s + 1))));
                return r
            }
        }

        function Tn() {
            this.$get = kn
        }

        function In(e) {
            function t(r, i) {
                if (y(r)) {
                    var a = {};
                    return o(r, function(e, n) {
                        a[n] = t(n, e)
                    }), a
                }
                return e.factory(r + n, i)
            }
            var n = "Filter";
            this.register = t, this.$get = ["$injector", function(e) {
                return function(t) {
                    return e.get(t + n)
                }
            }], t("currency", Dn), t("date", Yn), t("filter", Pn), t("json", Zn), t("limitTo", Xn), t("lowercase", fo), t("number", Rn), t("orderBy", Jn), t("uppercase", po)
        }

        function Pn() {
            return function(e, t, n) {
                if (!i(e)) {
                    if (null == e) return e;
                    throw r("filter")("notarray", "Expected array but received: {0}", e)
                }
                var o, a, s = On(t);
                switch (s) {
                    case "function":
                        o = t;
                        break;
                    case "boolean":
                    case "null":
                    case "number":
                    case "string":
                        a = !0;
                    case "object":
                        o = Fn(t, n, a);
                        break;
                    default:
                        return e
                }
                return Array.prototype.filter.call(e, o)
            }
        }

        function Fn(e, t, n) {
            var r, i = y(e) && "$" in e;
            return t === !0 ? t = B : S(t) || (t = function(e, t) {
                return A(e) ? !1 : null === e || null === t ? e === t : y(t) || y(e) && !v(e) ? !1 : (e = Nr("" + e), t = Nr("" + t), -1 !== e.indexOf(t))
            }), r = function(r) {
                return i && !y(r) ? Mn(r, e.$, t, !1) : Mn(r, e, t, n)
            }
        }

        function Mn(e, t, n, r, i) {
            var o = On(e),
                a = On(t);
            if ("string" === a && "!" === t.charAt(0)) return !Mn(e, t.substring(1), n, r);
            if (Lr(e)) return e.some(function(e) {
                return Mn(e, t, n, r)
            });
            switch (o) {
                case "object":
                    var s;
                    if (r) {
                        for (s in e)
                            if ("$" !== s.charAt(0) && Mn(e[s], t, n, !0)) return !0;
                        return i ? !1 : Mn(e, t, n, !1)
                    }
                    if ("object" === a) {
                        for (s in t) {
                            var d = t[s];
                            if (!S(d) && !A(d)) {
                                var l = "$" === s,
                                    u = l ? e : e[s];
                                if (!Mn(u, d, n, l, l)) return !1
                            }
                        }
                        return !0
                    }
                    return n(e, t);
                case "function":
                    return !1;
                default:
                    return n(e, t)
            }
        }

        function On(e) {
            return null === e ? "null" : typeof e
        }

        function Dn(e) {
            var t = e.NUMBER_FORMATS;
            return function(e, n, r) {
                return A(n) && (n = t.CURRENCY_SYM), A(r) && (r = t.PATTERNS[1].maxFrac), null == e ? e : Ln(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
            }
        }

        function Rn(e) {
            var t = e.NUMBER_FORMATS;
            return function(e, n) {
                return null == e ? e : Ln(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
            }
        }

        function Ln(e, t, n, r, i) {
            if (y(e)) return "";
            var o = 0 > e;
            e = Math.abs(e);
            var a = e === 1 / 0;
            if (!a && !isFinite(e)) return "";
            var s = e + "",
                d = "",
                l = !1,
                u = [];
            if (a && (d = "\u221e"), !a && -1 !== s.indexOf("e")) {
                var c = s.match(/([\d\.]+)e(-?)(\d+)/);
                c && "-" == c[2] && c[3] > i + 1 ? e = 0 : (d = s, l = !0)
            }
            if (a || l) i > 0 && 1 > e && (d = e.toFixed(i), e = parseFloat(d), d = d.replace(so, r));
            else {
                var f = (s.split(so)[1] || "").length;
                A(i) && (i = Math.min(Math.max(t.minFrac, f), t.maxFrac)), e = +(Math.round(+(e.toString() + "e" + i)).toString() + "e" + -i);
                var p = ("" + e).split(so),
                    h = p[0];
                p = p[1] || "";
                var g, m = 0,
                    $ = t.lgSize,
                    v = t.gSize;
                if (h.length >= $ + v)
                    for (m = h.length - $, g = 0; m > g; g++)(m - g) % v === 0 && 0 !== g && (d += n), d += h.charAt(g);
                for (g = m; g < h.length; g++)(h.length - g) % $ === 0 && 0 !== g && (d += n), d += h.charAt(g);
                for (; p.length < i;) p += "0";
                i && "0" !== i && (d += r + p.substr(0, i))
            }
            return 0 === e && (o = !1), u.push(o ? t.negPre : t.posPre, d, o ? t.negSuf : t.posSuf), u.join("")
        }

        function jn(e, t, n) {
            var r = "";
            for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
            return n && (e = e.substr(e.length - t)), r + e
        }

        function qn(e, t, n, r) {
            return n = n || 0,
                function(i) {
                    var o = i["get" + e]();
                    return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), jn(o, t, r)
                }
        }

        function Un(e, t) {
            return function(n, r) {
                var i = n["get" + e](),
                    o = br(t ? "SHORT" + e : e);
                return r[o][i]
            }
        }

        function Bn(e, t, n) {
            var r = -1 * n,
                i = r >= 0 ? "+" : "";
            return i += jn(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + jn(Math.abs(r % 60), 2)
        }

        function zn(e) {
            var t = new Date(e, 0, 1).getDay();
            return new Date(e, 0, (4 >= t ? 5 : 12) - t)
        }

        function Hn(e) {
            return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
        }

        function Vn(e) {
            return function(t) {
                var n = zn(t.getFullYear()),
                    r = Hn(t),
                    i = +r - +n,
                    o = 1 + Math.round(i / 6048e5);
                return jn(o, e)
            }
        }

        function Gn(e, t) {
            return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
        }

        function Wn(e, t) {
            return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
        }

        function Kn(e, t) {
            return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
        }

        function Yn(e) {
            function t(e) {
                var t;
                if (t = e.match(n)) {
                    var r = new Date(0),
                        i = 0,
                        o = 0,
                        a = t[8] ? r.setUTCFullYear : r.setFullYear,
                        s = t[8] ? r.setUTCHours : r.setHours;
                    t[9] && (i = p(t[9] + t[10]), o = p(t[9] + t[11])), a.call(r, p(t[1]), p(t[2]) - 1, p(t[3]));
                    var d = p(t[4] || 0) - i,
                        l = p(t[5] || 0) - o,
                        u = p(t[6] || 0),
                        c = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                    return s.call(r, d, l, u, c), r
                }
                return e
            }
            var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(n, r, i) {
                var a, s, d = "",
                    l = [];
                if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, w(n) && (n = co.test(n) ? p(n) : t(n)), x(n) && (n = new Date(n)), !C(n) || !isFinite(n.getTime())) return n;
                for (; r;) s = uo.exec(r), s ? (l = z(l, s, 1), r = l.pop()) : (l.push(r), r = null);
                var u = n.getTimezoneOffset();
                return i && (u = Y(i, n.getTimezoneOffset()), n = X(n, i, !0)), o(l, function(t) {
                    a = lo[t], d += a ? a(n, e.DATETIME_FORMATS, u) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), d
            }
        }

        function Zn() {
            return function(e, t) {
                return A(t) && (t = 2), W(e, t)
            }
        }

        function Xn() {
            return function(e, t, n) {
                return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : p(t), isNaN(t) ? e : (x(e) && (e = e.toString()), Lr(e) || w(e) ? (n = !n || isNaN(n) ? 0 : p(n), n = 0 > n && n >= -e.length ? e.length + n : n, t >= 0 ? e.slice(n, n + t) : 0 === n ? e.slice(t, e.length) : e.slice(Math.max(0, n + t), n)) : e)
            }
        }

        function Jn(e) {
            function t(t, n) {
                return n = n ? -1 : 1, t.map(function(t) {
                    var r = 1,
                        i = m;
                    if (S(t)) i = t;
                    else if (w(t) && (("+" == t.charAt(0) || "-" == t.charAt(0)) && (r = "-" == t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (i = e(t), i.constant))) {
                        var o = i();
                        i = function(e) {
                            return e[o]
                        }
                    }
                    return {
                        get: i,
                        descending: r * n
                    }
                })
            }

            function n(e) {
                switch (typeof e) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function r(e, t) {
                return "function" == typeof e.valueOf && (e = e.valueOf(), n(e)) ? e : v(e) && (e = e.toString(), n(e)) ? e : t
            }

            function o(e, t) {
                var n = typeof e;
                return null === e ? (n = "string", e = "null") : "string" === n ? e = e.toLowerCase() : "object" === n && (e = r(e, t)), {
                    value: e,
                    type: n
                }
            }

            function a(e, t) {
                var n = 0;
                return e.type === t.type ? e.value !== t.value && (n = e.value < t.value ? -1 : 1) : n = e.type < t.type ? -1 : 1, n
            }
            return function(e, n, r) {
                function s(e, t) {
                    return {
                        value: e,
                        predicateValues: l.map(function(n) {
                            return o(n.get(e), t)
                        })
                    }
                }

                function d(e, t) {
                    for (var n = 0, r = 0, i = l.length; i > r && !(n = a(e.predicateValues[r], t.predicateValues[r]) * l[r].descending); ++r);
                    return n
                }
                if (!i(e)) return e;
                Lr(n) || (n = [n]), 0 === n.length && (n = ["+"]);
                var l = t(n, r);
                l.push({
                    get: function() {
                        return {}
                    },
                    descending: r ? -1 : 1
                });
                var u = Array.prototype.map.call(e, s);
                return u.sort(d), e = u.map(function(e) {
                    return e.value
                })
            }
        }

        function Qn(e) {
            return S(e) && (e = {
                link: e
            }), e.restrict = e.restrict || "AC", $(e)
        }

        function er(e, t) {
            e.$name = t
        }

        function tr(e, t, r, i, a) {
            var s = this,
                d = [];
            s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = a(t.name || t.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, s.$$parentForm = mo, s.$rollbackViewValue = function() {
                o(d, function(e) {
                    e.$rollbackViewValue()
                })
            }, s.$commitViewValue = function() {
                o(d, function(e) {
                    e.$commitViewValue()
                })
            }, s.$addControl = function(e) {
                pe(e.$name, "input"), d.push(e), e.$name && (s[e.$name] = e), e.$$parentForm = s
            }, s.$$renameControl = function(e, t) {
                var n = e.$name;
                s[n] === e && delete s[n], s[t] = e, e.$name = t
            }, s.$removeControl = function(e) {
                e.$name && s[e.$name] === e && delete s[e.$name], o(s.$pending, function(t, n) {
                    s.$setValidity(n, null, e)
                }), o(s.$error, function(t, n) {
                    s.$setValidity(n, null, e)
                }), o(s.$$success, function(t, n) {
                    s.$setValidity(n, null, e)
                }), j(d, e), e.$$parentForm = mo
            }, mr({
                ctrl: this,
                $element: e,
                set: function(e, t, n) {
                    var r = e[t];
                    if (r) {
                        var i = r.indexOf(n); - 1 === i && r.push(n)
                    } else e[t] = [n]
                },
                unset: function(e, t, n) {
                    var r = e[t];
                    r && (j(r, n), 0 === r.length && delete e[t])
                },
                $animate: i
            }), s.$setDirty = function() {
                i.removeClass(e, Jo), i.addClass(e, Qo), s.$dirty = !0, s.$pristine = !1, s.$$parentForm.$setDirty()
            }, s.$setPristine = function() {
                i.setClass(e, Jo, Qo + " " + $o), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, o(d, function(e) {
                    e.$setPristine()
                })
            }, s.$setUntouched = function() {
                o(d, function(e) {
                    e.$setUntouched()
                })
            }, s.$setSubmitted = function() {
                i.addClass(e, $o), s.$submitted = !0, s.$$parentForm.$setSubmitted()
            }
        }

        function nr(e) {
            e.$formatters.push(function(t) {
                return e.$isEmpty(t) ? t : t.toString()
            })
        }

        function rr(e, t, n, r, i, o) {
            ir(e, t, n, r, i, o), nr(r)
        }

        function ir(e, t, n, r, i, o) {
            var a = Nr(t[0].type);
            if (!i.android) {
                var s = !1;
                t.on("compositionstart", function(e) {
                    s = !0
                }), t.on("compositionend", function() {
                    s = !1, d()
                })
            }
            var d = function(e) {
                if (l && (o.defer.cancel(l), l = null), !s) {
                    var i = t.val(),
                        d = e && e.type;
                    "password" === a || n.ngTrim && "false" === n.ngTrim || (i = qr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, d)
                }
            };
            if (i.hasEvent("input")) t.on("input", d);
            else {
                var l, u = function(e, t, n) {
                    l || (l = o.defer(function() {
                        l = null, t && t.value === n || d(e)
                    }))
                };
                t.on("keydown", function(e) {
                    var t = e.keyCode;
                    91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || u(e, this, this.value)
                }), i.hasEvent("paste") && t.on("paste cut", u)
            }
            t.on("change", d), r.$render = function() {
                var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
                t.val() !== e && t.val(e)
            }
        }

        function or(e, t) {
            if (C(e)) return e;
            if (w(e)) {
                Eo.lastIndex = 0;
                var n = Eo.exec(e);
                if (n) {
                    var r = +n[1],
                        i = +n[2],
                        o = 0,
                        a = 0,
                        s = 0,
                        d = 0,
                        l = zn(r),
                        u = 7 * (i - 1);
                    return t && (o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), d = t.getMilliseconds()), new Date(r, 0, l.getDate() + u, o, a, s, d)
                }
            }
            return NaN
        }

        function ar(e, t) {
            return function(n, r) {
                var i, a;
                if (C(n)) return n;
                if (w(n)) {
                    if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), yo.test(n)) return new Date(n);
                    if (e.lastIndex = 0, i = e.exec(n)) return i.shift(), a = r ? {
                        yyyy: r.getFullYear(),
                        MM: r.getMonth() + 1,
                        dd: r.getDate(),
                        HH: r.getHours(),
                        mm: r.getMinutes(),
                        ss: r.getSeconds(),
                        sss: r.getMilliseconds() / 1e3
                    } : {
                        yyyy: 1970,
                        MM: 1,
                        dd: 1,
                        HH: 0,
                        mm: 0,
                        ss: 0,
                        sss: 0
                    }, o(i, function(e, n) {
                        n < t.length && (a[t[n]] = +e)
                    }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
                }
                return NaN
            }
        }

        function sr(e, t, r, i) {
            return function(o, a, s, d, l, u, c) {
                function f(e) {
                    return e && !(e.getTime && e.getTime() !== e.getTime())
                }

                function p(e) {
                    return N(e) && !C(e) ? r(e) || n : e
                }
                dr(o, a, s, d), ir(o, a, s, d, l, u);
                var h, g = d && d.$options && d.$options.timezone;
                if (d.$$parserName = e, d.$parsers.push(function(e) {
                        if (d.$isEmpty(e)) return null;
                        if (t.test(e)) {
                            var i = r(e, h);
                            return g && (i = X(i, g)), i
                        }
                        return n
                    }), d.$formatters.push(function(e) {
                        if (e && !C(e)) throw ra("datefmt", "Expected `{0}` to be a date", e);
                        return f(e) ? (h = e, h && g && (h = X(h, g, !0)), c("date")(e, i, g)) : (h = null, "")
                    }), N(s.min) || s.ngMin) {
                    var m;
                    d.$validators.min = function(e) {
                        return !f(e) || A(m) || r(e) >= m
                    }, s.$observe("min", function(e) {
                        m = p(e), d.$validate()
                    })
                }
                if (N(s.max) || s.ngMax) {
                    var $;
                    d.$validators.max = function(e) {
                        return !f(e) || A($) || r(e) <= $
                    }, s.$observe("max", function(e) {
                        $ = p(e), d.$validate()
                    })
                }
            }
        }

        function dr(e, t, r, i) {
            var o = t[0],
                a = i.$$hasNativeValidators = y(o.validity);
            a && i.$parsers.push(function(e) {
                var r = t.prop(Ar) || {};
                return r.badInput && !r.typeMismatch ? n : e
            })
        }

        function lr(e, t, r, i, o, a) {
            if (dr(e, t, r, i), ir(e, t, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function(e) {
                    return i.$isEmpty(e) ? null : xo.test(e) ? parseFloat(e) : n
                }), i.$formatters.push(function(e) {
                    if (!i.$isEmpty(e)) {
                        if (!x(e)) throw ra("numfmt", "Expected `{0}` to be a number", e);
                        e = e.toString()
                    }
                    return e
                }), N(r.min) || r.ngMin) {
                var s;
                i.$validators.min = function(e) {
                    return i.$isEmpty(e) || A(s) || e >= s
                }, r.$observe("min", function(e) {
                    N(e) && !x(e) && (e = parseFloat(e, 10)), s = x(e) && !isNaN(e) ? e : n, i.$validate()
                })
            }
            if (N(r.max) || r.ngMax) {
                var d;
                i.$validators.max = function(e) {
                    return i.$isEmpty(e) || A(d) || d >= e
                }, r.$observe("max", function(e) {
                    N(e) && !x(e) && (e = parseFloat(e, 10)), d = x(e) && !isNaN(e) ? e : n, i.$validate()
                })
            }
        }

        function ur(e, t, n, r, i, o) {
            ir(e, t, n, r, i, o), nr(r), r.$$parserName = "url", r.$validators.url = function(e, t) {
                var n = e || t;
                return r.$isEmpty(n) || bo.test(n)
            }
        }

        function cr(e, t, n, r, i, o) {
            ir(e, t, n, r, i, o), nr(r), r.$$parserName = "email", r.$validators.email = function(e, t) {
                var n = e || t;
                return r.$isEmpty(n) || wo.test(n)
            }
        }

        function fr(e, t, n, r) {
            A(n.name) && t.attr("name", d());
            var i = function(e) {
                t[0].checked && r.$setViewValue(n.value, e && e.type)
            };
            t.on("click", i), r.$render = function() {
                var e = n.value;
                t[0].checked = e == r.$viewValue
            }, n.$observe("value", r.$render)
        }

        function pr(e, t, n, r, i) {
            var o;
            if (N(r)) {
                if (o = e(r), !o.constant) throw ra("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
                return o(t)
            }
            return i
        }

        function hr(e, t, n, r, i, o, a, s) {
            var d = pr(s, e, "ngTrueValue", n.ngTrueValue, !0),
                l = pr(s, e, "ngFalseValue", n.ngFalseValue, !1),
                u = function(e) {
                    r.$setViewValue(t[0].checked, e && e.type)
                };
            t.on("click", u), r.$render = function() {
                t[0].checked = r.$viewValue
            }, r.$isEmpty = function(e) {
                return e === !1
            }, r.$formatters.push(function(e) {
                return B(e, d)
            }), r.$parsers.push(function(e) {
                return e ? d : l
            })
        }

        function gr(e, t) {
            return e = "ngClass" + e, ["$animate", function(n) {
                function r(e, t) {
                    var n = [];
                    e: for (var r = 0; r < e.length; r++) {
                        for (var i = e[r], o = 0; o < t.length; o++)
                            if (i == t[o]) continue e;
                        n.push(i)
                    }
                    return n
                }

                function i(e) {
                    var t = [];
                    return Lr(e) ? (o(e, function(e) {
                        t = t.concat(i(e))
                    }), t) : w(e) ? e.split(" ") : y(e) ? (o(e, function(e, n) {
                        e && (t = t.concat(n.split(" ")))
                    }), t) : e
                }
                return {
                    restrict: "AC",
                    link: function(a, s, d) {
                        function l(e) {
                            var t = c(e, 1);
                            d.$addClass(t)
                        }

                        function u(e) {
                            var t = c(e, -1);
                            d.$removeClass(t)
                        }

                        function c(e, t) {
                            var n = s.data("$classCounts") || me(),
                                r = [];
                            return o(e, function(e) {
                                (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
                            }), s.data("$classCounts", n), r.join(" ")
                        }

                        function f(e, t) {
                            var i = r(t, e),
                                o = r(e, t);
                            i = c(i, 1), o = c(o, -1), i && i.length && n.addClass(s, i), o && o.length && n.removeClass(s, o)
                        }

                        function p(e) {
                            if (t === !0 || a.$index % 2 === t) {
                                var n = i(e || []);
                                if (h) {
                                    if (!B(e, h)) {
                                        var r = i(h);
                                        f(r, n)
                                    }
                                } else l(n)
                            }
                            h = U(e)
                        }
                        var h;
                        a.$watch(d[e], p, !0), d.$observe("class", function(t) {
                            p(a.$eval(d[e]))
                        }), "ngClass" !== e && a.$watch("$index", function(n, r) {
                            var o = 1 & n;
                            if (o !== (1 & r)) {
                                var s = i(a.$eval(d[e]));
                                o === t ? l(s) : u(s)
                            }
                        })
                    }
                }
            }]
        }

        function mr(e) {
            function t(e, t, d) {
                A(t) ? r("$pending", e, d) : i("$pending", e, d), F(t) ? t ? (c(s.$error, e, d), u(s.$$success, e, d)) : (u(s.$error, e, d), c(s.$$success, e, d)) : (c(s.$error, e, d), c(s.$$success, e, d)), s.$pending ? (o(na, !0), s.$valid = s.$invalid = n, a("", null)) : (o(na, !1), s.$valid = $r(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
                var l;
                l = s.$pending && s.$pending[e] ? n : s.$error[e] ? !1 : s.$$success[e] ? !0 : null, a(e, l), s.$$parentForm.$setValidity(e, l, s)
            }

            function r(e, t, n) {
                s[e] || (s[e] = {}), u(s[e], t, n)
            }

            function i(e, t, r) {
                s[e] && c(s[e], t, r), $r(s[e]) && (s[e] = n)
            }

            function o(e, t) {
                t && !l[e] ? (f.addClass(d, e), l[e] = !0) : !t && l[e] && (f.removeClass(d, e), l[e] = !1)
            }

            function a(e, t) {
                e = e ? "-" + le(e, "-") : "", o(Zo + e, t === !0), o(Xo + e, t === !1)
            }
            var s = e.ctrl,
                d = e.$element,
                l = {},
                u = e.set,
                c = e.unset,
                f = e.$animate;
            l[Xo] = !(l[Zo] = d.hasClass(Zo)), s.$setValidity = t
        }

        function $r(e) {
            if (e)
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
            return !0
        }
        var vr = /^\/(.+)\/([a-z]*)$/,
            Ar = "validity",
            Nr = function(e) {
                return w(e) ? e.toLowerCase() : e
            },
            yr = Object.prototype.hasOwnProperty,
            br = function(e) {
                return w(e) ? e.toUpperCase() : e
            },
            wr = function(e) {
                return w(e) ? e.replace(/[A-Z]/g, function(e) {
                    return String.fromCharCode(32 | e.charCodeAt(0))
                }) : e
            },
            xr = function(e) {
                return w(e) ? e.replace(/[a-z]/g, function(e) {
                    return String.fromCharCode(-33 & e.charCodeAt(0))
                }) : e
            };
        "i" !== "I".toLowerCase() && (Nr = wr, br = xr);
        var Cr, Sr, Er, _r, kr = [].slice,
            Tr = [].splice,
            Ir = [].push,
            Pr = Object.prototype.toString,
            Fr = Object.getPrototypeOf,
            Mr = r("ng"),
            Or = e.angular || (e.angular = {}),
            Dr = 0;
        Cr = t.documentMode, g.$inject = [], m.$inject = [];
        var Rr, Lr = Array.isArray,
            jr = /^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,
            qr = function(e) {
                return w(e) ? e.trim() : e
            },
            Ur = function(e) {
                return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            },
            Br = function() {
                function e() {
                    try {
                        return new Function(""), !1
                    } catch (e) {
                        return !0
                    }
                }
                if (!N(Br.rules)) {
                    var n = t.querySelector("[ng-csp]") || t.querySelector("[data-ng-csp]");
                    if (n) {
                        var r = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
                        Br.rules = {
                            noUnsafeEval: !r || -1 !== r.indexOf("no-unsafe-eval"),
                            noInlineStyle: !r || -1 !== r.indexOf("no-inline-style")
                        }
                    } else Br.rules = {
                        noUnsafeEval: e(),
                        noInlineStyle: !1
                    }
                }
                return Br.rules
            },
            zr = function() {
                if (N(zr.name_)) return zr.name_;
                var e, n, r, i, o = Hr.length;
                for (n = 0; o > n; ++n)
                    if (r = Hr[n], e = t.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                        i = e.getAttribute(r + "jq");
                        break
                    }
                return zr.name_ = i
            },
            Hr = ["ng-", "data-ng-", "ng:", "x-ng-"],
            Vr = /[A-Z]/g,
            Gr = !1,
            Wr = 1,
            Kr = 2,
            Yr = 3,
            Zr = 8,
            Xr = 9,
            Jr = 11,
            Qr = {
                full: "1.4.7",
                major: 1,
                minor: 4,
                dot: 7,
                codeName: "dark-luminescence"
            };
        _e.expando = "ng339";
        var ei = _e.cache = {},
            ti = 1,
            ni = function(e, t, n) {
                e.addEventListener(t, n, !1)
            },
            ri = function(e, t, n) {
                e.removeEventListener(t, n, !1)
            };
        _e._data = function(e) {
            return this.cache[e[this.expando]] || {}
        };
        var ii = /([\:\-\_]+(.))/g,
            oi = /^moz([A-Z])/,
            ai = {
                mouseleave: "mouseout",
                mouseenter: "mouseover"
            },
            si = r("jqLite"),
            di = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            li = /<|&#?\w+;/,
            ui = /<([\w:-]+)/,
            ci = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            fi = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        fi.optgroup = fi.option, fi.tbody = fi.tfoot = fi.colgroup = fi.caption = fi.thead, fi.th = fi.td;
        var pi = _e.prototype = {
                ready: function(n) {
                    function r() {
                        i || (i = !0, n())
                    }
                    var i = !1;
                    "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), _e(e).on("load", r))
                },
                toString: function() {
                    var e = [];
                    return o(this, function(t) {
                        e.push("" + t)
                    }), "[" + e.join(", ") + "]"
                },
                eq: function(e) {
                    return Sr(e >= 0 ? this[e] : this[this.length + e])
                },
                length: 0,
                push: Ir,
                sort: [].sort,
                splice: [].splice
            },
            hi = {};
        o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
            hi[Nr(e)] = e
        });
        var gi = {};
        o("input,select,option,textarea,button,form,details".split(","), function(e) {
            gi[e] = !0
        });
        var mi = {
            ngMinlength: "minlength",
            ngMaxlength: "maxlength",
            ngMin: "min",
            ngMax: "max",
            ngPattern: "pattern"
        };
        o({
            data: Me,
            removeData: Pe,
            hasData: Ce
        }, function(e, t) {
            _e[t] = e
        }), o({
            data: Me,
            inheritedData: qe,
            scope: function(e) {
                return Sr.data(e, "$scope") || qe(e.parentNode || e, ["$isolateScope", "$scope"])
            },
            isolateScope: function(e) {
                return Sr.data(e, "$isolateScope") || Sr.data(e, "$isolateScopeNoTemplate")
            },
            controller: je,
            injector: function(e) {
                return qe(e, "$injector")
            },
            removeAttr: function(e, t) {
                e.removeAttribute(t)
            },
            hasClass: Oe,
            css: function(e, t, n) {
                return t = be(t), N(n) ? void(e.style[t] = n) : e.style[t]
            },
            attr: function(e, t, r) {
                var i = e.nodeType;
                if (i !== Yr && i !== Kr && i !== Zr) {
                    var o = Nr(t);
                    if (hi[o]) {
                        if (!N(r)) return e[t] || (e.attributes.getNamedItem(t) || g).specified ? o : n;
                        r ? (e[t] = !0, e.setAttribute(t, o)) : (e[t] = !1, e.removeAttribute(o))
                    } else if (N(r)) e.setAttribute(t, r);
                    else if (e.getAttribute) {
                        var a = e.getAttribute(t, 2);
                        return null === a ? n : a
                    }
                }
            },
            prop: function(e, t, n) {
                return N(n) ? void(e[t] = n) : e[t]
            },
            text: function() {
                function e(e, t) {
                    if (A(t)) {
                        var n = e.nodeType;
                        return n === Wr || n === Yr ? e.textContent : ""
                    }
                    e.textContent = t
                }
                return e.$dv = "", e
            }(),
            val: function(e, t) {
                if (A(t)) {
                    if (e.multiple && "select" === L(e)) {
                        var n = [];
                        return o(e.options, function(e) {
                            e.selected && n.push(e.value || e.text)
                        }), 0 === n.length ? null : n
                    }
                    return e.value
                }
                e.value = t
            },
            html: function(e, t) {
                return A(t) ? e.innerHTML : (Te(e, !0), void(e.innerHTML = t))
            },
            empty: Ue
        }, function(e, t) {
            _e.prototype[t] = function(t, n) {
                var r, i, o = this.length;
                if (e !== Ue && A(2 == e.length && e !== Oe && e !== je ? t : n)) {
                    if (y(t)) {
                        for (r = 0; o > r; r++)
                            if (e === Me) e(this[r], t);
                            else
                                for (i in t) e(this[r], i, t[i]);
                        return this
                    }
                    for (var a = e.$dv, s = A(a) ? Math.min(o, 1) : o, d = 0; s > d; d++) {
                        var l = e(this[d], t, n);
                        a = a ? a + l : l
                    }
                    return a
                }
                for (r = 0; o > r; r++) e(this[r], t, n);
                return this
            }
        }), o({
            removeData: Pe,
            on: function Fa(e, t, n, r) {
                if (N(r)) throw si("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                if (xe(e)) {
                    var i = Fe(e, !0),
                        o = i.events,
                        a = i.handle;
                    a || (a = i.handle = Ge(e, o));
                    for (var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t], d = s.length; d--;) {
                        t = s[d];
                        var l = o[t];
                        l || (o[t] = [], "mouseenter" === t || "mouseleave" === t ? Fa(e, ai[t], function(e) {
                            var n = this,
                                r = e.relatedTarget;
                            (!r || r !== n && !n.contains(r)) && a(e, t)
                        }) : "$destroy" !== t && ni(e, t, a), l = o[t]), l.push(n)
                    }
                }
            },
            off: Ie,
            one: function(e, t, n) {
                e = Sr(e), e.on(t, function r() {
                    e.off(t, n), e.off(t, r)
                }), e.on(t, n)
            },
            replaceWith: function(e, t) {
                var n, r = e.parentNode;
                Te(e), o(new _e(t), function(t) {
                    n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
                })
            },
            children: function(e) {
                var t = [];
                return o(e.childNodes, function(e) {
                    e.nodeType === Wr && t.push(e)
                }), t
            },
            contents: function(e) {
                return e.contentDocument || e.childNodes || []
            },
            append: function(e, t) {
                var n = e.nodeType;
                if (n === Wr || n === Jr) {
                    t = new _e(t);
                    for (var r = 0, i = t.length; i > r; r++) {
                        var o = t[r];
                        e.appendChild(o)
                    }
                }
            },
            prepend: function(e, t) {
                if (e.nodeType === Wr) {
                    var n = e.firstChild;
                    o(new _e(t), function(t) {
                        e.insertBefore(t, n)
                    })
                }
            },
            wrap: function(e, t) {
                t = Sr(t).eq(0).clone()[0];
                var n = e.parentNode;
                n && n.replaceChild(t, e), t.appendChild(e)
            },
            remove: Be,
            detach: function(e) {
                Be(e, !0)
            },
            after: function(e, t) {
                var n = e,
                    r = e.parentNode;
                t = new _e(t);
                for (var i = 0, o = t.length; o > i; i++) {
                    var a = t[i];
                    r.insertBefore(a, n.nextSibling), n = a
                }
            },
            addClass: Re,
            removeClass: De,
            toggleClass: function(e, t, n) {
                t && o(t.split(" "), function(t) {
                    var r = n;
                    A(r) && (r = !Oe(e, t)), (r ? Re : De)(e, t)
                })
            },
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== Jr ? t : null
            },
            next: function(e) {
                return e.nextElementSibling
            },
            find: function(e, t) {
                return e.getElementsByTagName ? e.getElementsByTagName(t) : []
            },
            clone: ke,
            triggerHandler: function(e, t, n) {
                var r, i, a, s = t.type || t,
                    d = Fe(e),
                    l = d && d.events,
                    u = l && l[s];
                u && (r = {
                    preventDefault: function() {
                        this.defaultPrevented = !0
                    },
                    isDefaultPrevented: function() {
                        return this.defaultPrevented === !0
                    },
                    stopImmediatePropagation: function() {
                        this.immediatePropagationStopped = !0
                    },
                    isImmediatePropagationStopped: function() {
                        return this.immediatePropagationStopped === !0
                    },
                    stopPropagation: g,
                    type: s,
                    target: e
                }, t.type && (r = c(r, t)), i = U(u), a = n ? [r].concat(n) : [r], o(i, function(t) {
                    r.isImmediatePropagationStopped() || t.apply(e, a)
                }))
            }
        }, function(e, t) {
            _e.prototype[t] = function(t, n, r) {
                for (var i, o = 0, a = this.length; a > o; o++) A(i) ? (i = e(this[o], t, n, r), N(i) && (i = Sr(i))) : Le(i, e(this[o], t, n, r));
                return N(i) ? i : this
            }, _e.prototype.bind = _e.prototype.on, _e.prototype.unbind = _e.prototype.off
        }), Ye.prototype = {
            put: function(e, t) {
                this[Ke(e, this.nextUid)] = t
            },
            get: function(e) {
                return this[Ke(e, this.nextUid)]
            },
            remove: function(e) {
                var t = this[e = Ke(e, this.nextUid)];
                return delete this[e], t
            }
        };
        var $i = [function() {
                this.$get = [function() {
                    return Ye
                }]
            }],
            vi = /^[^\(]*\(\s*([^\)]*)\)/m,
            Ai = /,/,
            Ni = /^\s*(_?)(\S+?)\1\s*$/,
            yi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            bi = r("$injector");
        Je.$$annotate = Xe;
        var wi = r("$animate"),
            xi = 1,
            Ci = "ng-animate",
            Si = function() {
                this.$get = ["$q", "$$rAF", function(e, t) {
                    function n() {}
                    return n.all = g, n.chain = g, n.prototype = {
                        end: g,
                        cancel: g,
                        resume: g,
                        pause: g,
                        complete: g,
                        then: function(n, r) {
                            return e(function(e) {
                                t(function() {
                                    e()
                                })
                            }).then(n, r)
                        }
                    }, n
                }]
            },
            Ei = function() {
                var e = new Ye,
                    t = [];
                this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
                    function i(e, t, n) {
                        var r = !1;
                        return t && (t = w(t) ? t.split(" ") : Lr(t) ? t : [], o(t, function(t) {
                            t && (r = !0, e[t] = n)
                        })), r
                    }

                    function a() {
                        o(t, function(t) {
                            var n = e.get(t);
                            if (n) {
                                var r = nt(t.attr("class")),
                                    i = "",
                                    a = "";
                                o(n, function(e, t) {
                                    var n = !!r[t];
                                    e !== n && (e ? i += (i.length ? " " : "") + t : a += (a.length ? " " : "") + t)
                                }), o(t, function(e) {
                                    i && Re(e, i), a && De(e, a)
                                }), e.remove(t)
                            }
                        }), t.length = 0
                    }

                    function s(n, o, s) {
                        var d = e.get(n) || {},
                            l = i(d, o, !0),
                            u = i(d, s, !1);
                        (l || u) && (e.put(n, d), t.push(n), 1 === t.length && r.$$postDigest(a))
                    }
                    return {
                        enabled: g,
                        on: g,
                        off: g,
                        pin: g,
                        push: function(e, t, r, i) {
                            return i && i(), r = r || {}, r.from && e.css(r.from), r.to && e.css(r.to), (r.addClass || r.removeClass) && s(e, r.addClass, r.removeClass), new n
                        }
                    }
                }]
            },
            _i = ["$provide", function(e) {
                var t = this;
                this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
                    if (n && "." !== n.charAt(0)) throw wi("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                    var i = n + "-animation";
                    t.$$registeredAnimations[n.substr(1)] = i, e.factory(i, r)
                }, this.classNameFilter = function(e) {
                    if (1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null, this.$$classNameFilter)) {
                        var t = new RegExp("(\\s+|\\/)" + Ci + "(\\s+|\\/)");
                        if (t.test(this.$$classNameFilter.toString())) throw wi("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Ci)
                    }
                    return this.$$classNameFilter
                }, this.$get = ["$$animateQueue", function(e) {
                    function t(e, t, n) {
                        if (n) {
                            var r = tt(n);
                            !r || r.parentNode || r.previousElementSibling || (n = null)
                        }
                        n ? n.after(e) : t.prepend(e)
                    }
                    return {
                        on: e.on,
                        off: e.off,
                        pin: e.pin,
                        enabled: e.enabled,
                        cancel: function(e) {
                            e.end && e.end()
                        },
                        enter: function(n, r, i, o) {
                            return r = r && Sr(r), i = i && Sr(i), r = r || i.parent(), t(n, r, i), e.push(n, "enter", rt(o))
                        },
                        move: function(n, r, i, o) {
                            return r = r && Sr(r), i = i && Sr(i), r = r || i.parent(), t(n, r, i), e.push(n, "move", rt(o))
                        },
                        leave: function(t, n) {
                            return e.push(t, "leave", rt(n), function() {
                                t.remove()
                            })
                        },
                        addClass: function(t, n, r) {
                            return r = rt(r), r.addClass = et(r.addclass, n), e.push(t, "addClass", r)
                        },
                        removeClass: function(t, n, r) {
                            return r = rt(r), r.removeClass = et(r.removeClass, n), e.push(t, "removeClass", r)
                        },
                        setClass: function(t, n, r, i) {
                            return i = rt(i), i.addClass = et(i.addClass, n), i.removeClass = et(i.removeClass, r), e.push(t, "setClass", i)
                        },
                        animate: function(t, n, r, i, o) {
                            return o = rt(o), o.from = o.from ? c(o.from, n) : n, o.to = o.to ? c(o.to, r) : r, i = i || "ng-inline-animate", o.tempClasses = et(o.tempClasses, i), e.push(t, "animate", o)
                        }
                    }
                }]
            }],
            ki = function() {
                this.$get = ["$$rAF", "$q", function(e, t) {
                    var n = function() {};
                    return n.prototype = {
                            done: function(e) {
                                this.defer && this.defer[e === !0 ? "reject" : "resolve"]()
                            },
                            end: function() {
                                this.done()
                            },
                            cancel: function() {
                                this.done(!0)
                            },
                            getPromise: function() {
                                return this.defer || (this.defer = t.defer()), this.defer.promise
                            },
                            then: function(e, t) {
                                return this.getPromise().then(e, t)
                            },
                            "catch": function(e) {
                                return this.getPromise()["catch"](e)
                            },
                            "finally": function(e) {
                                return this.getPromise()["finally"](e)
                            }
                        },
                        function(t, r) {
                            function i() {
                                return e(function() {
                                    o(), a || s.done(), a = !0
                                }), s
                            }

                            function o() {
                                r.addClass && (t.addClass(r.addClass), r.addClass = null), r.removeClass && (t.removeClass(r.removeClass), r.removeClass = null), r.to && (t.css(r.to), r.to = null)
                            }
                            r.cleanupStyles && (r.from = r.to = null), r.from && (t.css(r.from), r.from = null);
                            var a, s = new n;
                            return {
                                start: i,
                                end: i
                            }
                        }
                }]
            },
            Ti = r("$compile");
        dt.$inject = ["$provide", "$$sanitizeUriProvider"];
        var Ii = /^((?:x|data)[\:\-_])/i,
            Pi = r("$controller"),
            Fi = /^(\S+)(\s+as\s+(\w+))?$/,
            Mi = function() {
                this.$get = ["$document", function(e) {
                    return function(t) {
                        return t ? !t.nodeType && t instanceof Sr && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
                    }
                }]
            },
            Oi = "application/json",
            Di = {
                "Content-Type": Oi + ";charset=utf-8"
            },
            Ri = /^\[|^\{(?!\{)/,
            Li = {
                "[": /]$/,
                "{": /}$/
            },
            ji = /^\)\]\}',?\n/,
            qi = r("$http"),
            Ui = function(e) {
                return function() {
                    throw qi("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", e)
                }
            },
            Bi = Or.$interpolateMinErr = r("$interpolate");
        Bi.throwNoconcat = function(e) {
            throw Bi("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
        }, Bi.interr = function(e, t) {
            return Bi("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
        };
        var zi = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
            Hi = {
                http: 80,
                https: 443,
                ftp: 21
            },
            Vi = r("$location"),
            Gi = {
                $$html5: !1,
                $$replace: !1,
                absUrl: Bt("$$absUrl"),
                url: function(e) {
                    if (A(e)) return this.$$url;
                    var t = zi.exec(e);
                    return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
                },
                protocol: Bt("$$protocol"),
                host: Bt("$$host"),
                port: Bt("$$port"),
                path: zt("$$path", function(e) {
                    return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
                }),
                search: function(e, t) {
                    switch (arguments.length) {
                        case 0:
                            return this.$$search;
                        case 1:
                            if (w(e) || x(e)) e = e.toString(), this.$$search = ee(e);
                            else {
                                if (!y(e)) throw Vi("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                                e = q(e, {}), o(e, function(t, n) {
                                    null == t && delete e[n]
                                }), this.$$search = e
                            }
                            break;
                        default:
                            A(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                    }
                    return this.$$compose(), this
                },
                hash: zt("$$hash", function(e) {
                    return null !== e ? e.toString() : ""
                }),
                replace: function() {
                    return this.$$replace = !0, this
                }
            };
        o([Ut, qt, jt], function(e) {
            e.prototype = Object.create(Gi), e.prototype.state = function(t) {
                if (!arguments.length) return this.$$state;
                if (e !== jt || !this.$$html5) throw Vi("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                return this.$$state = A(t) ? null : t, this
            }
        });
        var Wi = r("$parse"),
            Ki = Function.prototype.call,
            Yi = Function.prototype.apply,
            Zi = Function.prototype.bind,
            Xi = me();
        o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
            Xi[e] = !0
        });
        var Ji = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "	",
                v: "",
                "'": "'",
                '"': '"'
            },
            Qi = function(e) {
                this.options = e
            };
        Qi.prototype = {
            constructor: Qi,
            lex: function(e) {
                for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                    var t = this.text.charAt(this.index);
                    if ('"' === t || "'" === t) this.readString(t);
                    else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdent(t)) this.readIdent();
                    else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: t
                    }), this.index++;
                    else if (this.isWhitespace(t)) this.index++;
                    else {
                        var n = t + this.peek(),
                            r = n + this.peek(2),
                            i = Xi[t],
                            o = Xi[n],
                            a = Xi[r];
                        if (i || o || a) {
                            var s = a ? r : o ? n : t;
                            this.tokens.push({
                                index: this.index,
                                text: s,
                                operator: !0
                            }), this.index += s.length
                        } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                }
                return this.tokens
            },
            is: function(e, t) {
                return -1 !== t.indexOf(e)
            },
            peek: function(e) {
                var t = e || 1;
                return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
            },
            isNumber: function(e) {
                return e >= "0" && "9" >= e && "string" == typeof e
            },
            isWhitespace: function(e) {
                return " " === e || "\r" === e || "	" === e || "\n" === e || "" === e || "\xa0" === e
            },
            isIdent: function(e) {
                return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
            },
            isExpOperator: function(e) {
                return "-" === e || "+" === e || this.isNumber(e)
            },
            throwError: function(e, t, n) {
                n = n || this.index;
                var r = N(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
                throw Wi("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
            },
            readNumber: function() {
                for (var e = "", t = this.index; this.index < this.text.length;) {
                    var n = Nr(this.text.charAt(this.index));
                    if ("." == n || this.isNumber(n)) e += n;
                    else {
                        var r = this.peek();
                        if ("e" == n && this.isExpOperator(r)) e += n;
                        else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1)) e += n;
                        else {
                            if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1)) break;
                            this.throwError("Invalid exponent")
                        }
                    }
                    this.index++
                }
                this.tokens.push({
                    index: t,
                    text: e,
                    constant: !0,
                    value: Number(e)
                })
            },
            readIdent: function() {
                for (var e = this.index; this.index < this.text.length;) {
                    var t = this.text.charAt(this.index);
                    if (!this.isIdent(t) && !this.isNumber(t)) break;
                    this.index++
                }
                this.tokens.push({
                    index: e,
                    text: this.text.slice(e, this.index),
                    identifier: !0
                })
            },
            readString: function(e) {
                var t = this.index;
                this.index++;
                for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                    var o = this.text.charAt(this.index);
                    if (r += o, i) {
                        if ("u" === o) {
                            var a = this.text.substring(this.index + 1, this.index + 5);
                            a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                        } else {
                            var s = Ji[o];
                            n += s || o
                        }
                        i = !1
                    } else if ("\\" === o) i = !0;
                    else {
                        if (o === e) return this.index++, void this.tokens.push({
                            index: t,
                            text: r,
                            constant: !0,
                            value: n
                        });
                        n += o
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", t)
            }
        };
        var eo = function(e, t) {
            this.lexer = e, this.options = t
        };
        eo.Program = "Program", eo.ExpressionStatement = "ExpressionStatement", eo.AssignmentExpression = "AssignmentExpression", eo.ConditionalExpression = "ConditionalExpression", eo.LogicalExpression = "LogicalExpression", eo.BinaryExpression = "BinaryExpression", eo.UnaryExpression = "UnaryExpression", eo.CallExpression = "CallExpression", eo.MemberExpression = "MemberExpression", eo.Identifier = "Identifier", eo.Literal = "Literal", eo.ArrayExpression = "ArrayExpression", eo.Property = "Property", eo.ObjectExpression = "ObjectExpression", eo.ThisExpression = "ThisExpression", eo.NGValueParameter = "NGValueParameter", eo.prototype = {
            ast: function(e) {
                this.text = e, this.tokens = this.lexer.lex(e);
                var t = this.program();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
            },
            program: function() {
                for (var e = [];;)
                    if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
                        type: eo.Program,
                        body: e
                    }
            },
            expressionStatement: function() {
                return {
                    type: eo.ExpressionStatement,
                    expression: this.filterChain()
                }
            },
            filterChain: function() {
                for (var e, t = this.expression(); e = this.expect("|");) t = this.filter(t);
                return t
            },
            expression: function() {
                return this.assignment()
            },
            assignment: function() {
                var e = this.ternary();
                return this.expect("=") && (e = {
                    type: eo.AssignmentExpression,
                    left: e,
                    right: this.assignment(),
                    operator: "="
                }), e
            },
            ternary: function() {
                var e, t, n = this.logicalOR();
                return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
                    type: eo.ConditionalExpression,
                    test: n,
                    alternate: e,
                    consequent: t
                }) : n
            },
            logicalOR: function() {
                for (var e = this.logicalAND(); this.expect("||");) e = {
                    type: eo.LogicalExpression,
                    operator: "||",
                    left: e,
                    right: this.logicalAND()
                };
                return e
            },
            logicalAND: function() {
                for (var e = this.equality(); this.expect("&&");) e = {
                    type: eo.LogicalExpression,
                    operator: "&&",
                    left: e,
                    right: this.equality()
                };
                return e
            },
            equality: function() {
                for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
                    type: eo.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.relational()
                };
                return t
            },
            relational: function() {
                for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
                    type: eo.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.additive()
                };
                return t
            },
            additive: function() {
                for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
                    type: eo.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.multiplicative()
                };
                return t
            },
            multiplicative: function() {
                for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
                    type: eo.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.unary()
                };
                return t
            },
            unary: function() {
                var e;
                return (e = this.expect("+", "-", "!")) ? {
                    type: eo.UnaryExpression,
                    operator: e.text,
                    prefix: !0,
                    argument: this.unary()
                } : this.primary()
            },
            primary: function() {
                var e;
                this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.constants.hasOwnProperty(this.peek().text) ? e = q(this.constants[this.consume().text]) : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
                for (var t; t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
                    type: eo.CallExpression,
                    callee: e,
                    arguments: this.parseArguments()
                }, this.consume(")")) : "[" === t.text ? (e = {
                    type: eo.MemberExpression,
                    object: e,
                    property: this.expression(),
                    computed: !0
                }, this.consume("]")) : "." === t.text ? e = {
                    type: eo.MemberExpression,
                    object: e,
                    property: this.identifier(),
                    computed: !1
                } : this.throwError("IMPOSSIBLE");
                return e
            },
            filter: function(e) {
                for (var t = [e], n = {
                        type: eo.CallExpression,
                        callee: this.identifier(),
                        arguments: t,
                        filter: !0
                    }; this.expect(":");) t.push(this.expression());
                return n
            },
            parseArguments: function() {
                var e = [];
                if (")" !== this.peekToken().text)
                    do e.push(this.expression()); while (this.expect(","));
                return e
            },
            identifier: function() {
                var e = this.consume();
                return e.identifier || this.throwError("is not a valid identifier", e), {
                    type: eo.Identifier,
                    name: e.text
                }
            },
            constant: function() {
                return {
                    type: eo.Literal,
                    value: this.consume().value
                }
            },
            arrayDeclaration: function() {
                var e = [];
                if ("]" !== this.peekToken().text)
                    do {
                        if (this.peek("]")) break;
                        e.push(this.expression())
                    } while (this.expect(","));
                return this.consume("]"), {
                    type: eo.ArrayExpression,
                    elements: e
                }
            },
            object: function() {
                var e, t = [];
                if ("}" !== this.peekToken().text)
                    do {
                        if (this.peek("}")) break;
                        e = {
                            type: eo.Property,
                            kind: "init"
                        }, this.peek().constant ? e.key = this.constant() : this.peek().identifier ? e.key = this.identifier() : this.throwError("invalid key", this.peek()), this.consume(":"), e.value = this.expression(), t.push(e)
                    } while (this.expect(","));
                return this.consume("}"), {
                    type: eo.ObjectExpression,
                    properties: t
                }
            },
            throwError: function(e, t) {
                throw Wi("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
            },
            consume: function(e) {
                if (0 === this.tokens.length) throw Wi("ueoe", "Unexpected end of expression: {0}", this.text);
                var t = this.expect(e);
                return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
            },
            peekToken: function() {
                if (0 === this.tokens.length) throw Wi("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0]
            },
            peek: function(e, t, n, r) {
                return this.peekAhead(0, e, t, n, r)
            },
            peekAhead: function(e, t, n, r, i) {
                if (this.tokens.length > e) {
                    var o = this.tokens[e],
                        a = o.text;
                    if (a === t || a === n || a === r || a === i || !t && !n && !r && !i) return o
                }
                return !1
            },
            expect: function(e, t, n, r) {
                var i = this.peek(e, t, n, r);
                return i ? (this.tokens.shift(), i) : !1
            },
            constants: {
                "true": {
                    type: eo.Literal,
                    value: !0
                },
                "false": {
                    type: eo.Literal,
                    value: !1
                },
                "null": {
                    type: eo.Literal,
                    value: null
                },
                undefined: {
                    type: eo.Literal,
                    value: n
                },
                "this": {
                    type: eo.ThisExpression
                }
            }
        }, sn.prototype = {
            compile: function(e, t) {
                var r = this,
                    i = this.astBuilder.ast(e);
                this.state = {
                    nextId: 0,
                    filters: {},
                    expensiveChecks: t,
                    fn: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    assign: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    inputs: []
                }, en(i, r.$filter);
                var a, s = "";
                if (this.stage = "assign", a = rn(i)) {
                    this.state.computing = "assign";
                    var d = this.nextId();
                    this.recurse(a, d), this.return_(d), s = "fn.assign=" + this.generateFunction("assign", "s,v,l")
                }
                var l = tn(i.body);
                r.stage = "inputs", o(l, function(e, t) {
                    var n = "fn" + t;
                    r.state[n] = {
                        vars: [],
                        body: [],
                        own: {}
                    }, r.state.computing = n;
                    var i = r.nextId();
                    r.recurse(e, i), r.return_(i), r.state.inputs.push(n), e.watchId = t
                }), this.state.computing = "fn", this.stage = "main", this.recurse(i);
                var u = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + s + this.watchFns() + "return fn;",
                    c = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", u)(this.$filter, Gt, Kt, Yt, Wt, Zt, Xt, Jt, e);
                return this.state = this.stage = n, c.literal = on(i), c.constant = an(i), c
            },
            USE: "use",
            STRICT: "strict",
            watchFns: function() {
                var e = [],
                    t = this.state.inputs,
                    n = this;
                return o(t, function(t) {
                    e.push("var " + t + "=" + n.generateFunction(t, "s"))
                }), t.length && e.push("fn.inputs=[" + t.join(",") + "];"), e.join("")
            },
            generateFunction: function(e, t) {
                return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
            },
            filterPrefix: function() {
                var e = [],
                    t = this;
                return o(this.state.filters, function(n, r) {
                    e.push(n + "=$filter(" + t.escape(r) + ")")
                }), e.length ? "var " + e.join(",") + ";" : ""
            },
            varsPrefix: function(e) {
                return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
            },
            body: function(e) {
                return this.state[e].body.join("")
            },
            recurse: function(e, t, r, i, a, s) {
                var d, l, u, c, f = this;
                if (i = i || g, !s && N(e.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, r, i, a, !0));
                switch (e.type) {
                    case eo.Program:
                        o(e.body, function(t, r) {
                            f.recurse(t.expression, n, n, function(e) {
                                l = e
                            }), r !== e.body.length - 1 ? f.current().body.push(l, ";") : f.return_(l)
                        });
                        break;
                    case eo.Literal:
                        c = this.escape(e.value), this.assign(t, c), i(c);
                        break;
                    case eo.UnaryExpression:
                        this.recurse(e.argument, n, n, function(e) {
                            l = e
                        }), c = e.operator + "(" + this.ifDefined(l, 0) + ")", this.assign(t, c), i(c);
                        break;
                    case eo.BinaryExpression:
                        this.recurse(e.left, n, n, function(e) {
                            d = e
                        }), this.recurse(e.right, n, n, function(e) {
                            l = e
                        }), c = "+" === e.operator ? this.plus(d, l) : "-" === e.operator ? this.ifDefined(d, 0) + e.operator + this.ifDefined(l, 0) : "(" + d + ")" + e.operator + "(" + l + ")", this.assign(t, c), i(c);
                        break;
                    case eo.LogicalExpression:
                        t = t || this.nextId(), f.recurse(e.left, t), f.if_("&&" === e.operator ? t : f.not(t), f.lazyRecurse(e.right, t)), i(t);
                        break;
                    case eo.ConditionalExpression:
                        t = t || this.nextId(), f.recurse(e.test, t), f.if_(t, f.lazyRecurse(e.alternate, t), f.lazyRecurse(e.consequent, t)), i(t);
                        break;
                    case eo.Identifier:
                        t = t || this.nextId(), r && (r.context = "inputs" === f.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), r.computed = !1, r.name = e.name), Gt(e.name), f.if_("inputs" === f.stage || f.not(f.getHasOwnProperty("l", e.name)), function() {
                            f.if_("inputs" === f.stage || "s", function() {
                                a && 1 !== a && f.if_(f.not(f.nonComputedMember("s", e.name)), f.lazyAssign(f.nonComputedMember("s", e.name), "{}")), f.assign(t, f.nonComputedMember("s", e.name))
                            })
                        }, t && f.lazyAssign(t, f.nonComputedMember("l", e.name))), (f.state.expensiveChecks || ln(e.name)) && f.addEnsureSafeObject(t), i(t);
                        break;
                    case eo.MemberExpression:
                        d = r && (r.context = this.nextId()) || this.nextId(), t = t || this.nextId(), f.recurse(e.object, d, n, function() {
                            f.if_(f.notNull(d), function() {
                                e.computed ? (l = f.nextId(), f.recurse(e.property, l), f.getStringValue(l), f.addEnsureSafeMemberName(l), a && 1 !== a && f.if_(f.not(f.computedMember(d, l)), f.lazyAssign(f.computedMember(d, l), "{}")), c = f.ensureSafeObject(f.computedMember(d, l)), f.assign(t, c), r && (r.computed = !0, r.name = l)) : (Gt(e.property.name), a && 1 !== a && f.if_(f.not(f.nonComputedMember(d, e.property.name)), f.lazyAssign(f.nonComputedMember(d, e.property.name), "{}")), c = f.nonComputedMember(d, e.property.name), (f.state.expensiveChecks || ln(e.property.name)) && (c = f.ensureSafeObject(c)), f.assign(t, c), r && (r.computed = !1, r.name = e.property.name))
                            }, function() {
                                f.assign(t, "undefined")
                            }), i(t)
                        }, !!a);
                        break;
                    case eo.CallExpression:
                        t = t || this.nextId(), e.filter ? (l = f.filter(e.callee.name), u = [], o(e.arguments, function(e) {
                            var t = f.nextId();
                            f.recurse(e, t), u.push(t)
                        }), c = l + "(" + u.join(",") + ")", f.assign(t, c), i(t)) : (l = f.nextId(), d = {}, u = [], f.recurse(e.callee, l, d, function() {
                            f.if_(f.notNull(l), function() {
                                f.addEnsureSafeFunction(l), o(e.arguments, function(e) {
                                    f.recurse(e, f.nextId(), n, function(e) {
                                        u.push(f.ensureSafeObject(e))
                                    })
                                }), d.name ? (f.state.expensiveChecks || f.addEnsureSafeObject(d.context), c = f.member(d.context, d.name, d.computed) + "(" + u.join(",") + ")") : c = l + "(" + u.join(",") + ")", c = f.ensureSafeObject(c), f.assign(t, c)
                            }, function() {
                                f.assign(t, "undefined")
                            }), i(t)
                        }));
                        break;
                    case eo.AssignmentExpression:
                        if (l = this.nextId(), d = {}, !nn(e.left)) throw Wi("lval", "Trying to assing a value to a non l-value");
                        this.recurse(e.left, n, d, function() {
                            f.if_(f.notNull(d.context), function() {
                                f.recurse(e.right, l), f.addEnsureSafeObject(f.member(d.context, d.name, d.computed)), f.addEnsureSafeAssignContext(d.context), c = f.member(d.context, d.name, d.computed) + e.operator + l, f.assign(t, c), i(t || c)
                            })
                        }, 1);
                        break;
                    case eo.ArrayExpression:
                        u = [], o(e.elements, function(e) {
                            f.recurse(e, f.nextId(), n, function(e) {
                                u.push(e)
                            })
                        }), c = "[" + u.join(",") + "]", this.assign(t, c), i(c);
                        break;
                    case eo.ObjectExpression:
                        u = [], o(e.properties, function(e) {
                            f.recurse(e.value, f.nextId(), n, function(t) {
                                u.push(f.escape(e.key.type === eo.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
                            })
                        }), c = "{" + u.join(",") + "}", this.assign(t, c), i(c);
                        break;
                    case eo.ThisExpression:
                        this.assign(t, "s"), i("s");
                        break;
                    case eo.NGValueParameter:
                        this.assign(t, "v"), i("v")
                }
            },
            getHasOwnProperty: function(e, t) {
                var n = e + "." + t,
                    r = this.current().own;
                return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
            },
            assign: function(e, t) {
                return e ? (this.current().body.push(e, "=", t, ";"), e) : void 0
            },
            filter: function(e) {
                return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
            },
            ifDefined: function(e, t) {
                return "ifDefined(" + e + "," + this.escape(t) + ")"
            },
            plus: function(e, t) {
                return "plus(" + e + "," + t + ")"
            },
            return_: function(e) {
                this.current().body.push("return ", e, ";")
            },
            if_: function(e, t, n) {
                if (e === !0) t();
                else {
                    var r = this.current().body;
                    r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
                }
            },
            not: function(e) {
                return "!(" + e + ")"
            },
            notNull: function(e) {
                return e + "!=null"
            },
            nonComputedMember: function(e, t) {
                return e + "." + t
            },
            computedMember: function(e, t) {
                return e + "[" + t + "]"
            },
            member: function(e, t, n) {
                return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
            },
            addEnsureSafeObject: function(e) {
                this.current().body.push(this.ensureSafeObject(e), ";")
            },
            addEnsureSafeMemberName: function(e) {
                this.current().body.push(this.ensureSafeMemberName(e), ";")
            },
            addEnsureSafeFunction: function(e) {
                this.current().body.push(this.ensureSafeFunction(e), ";")
            },
            addEnsureSafeAssignContext: function(e) {
                this.current().body.push(this.ensureSafeAssignContext(e), ";")
            },
            ensureSafeObject: function(e) {
                return "ensureSafeObject(" + e + ",text)"
            },
            ensureSafeMemberName: function(e) {
                return "ensureSafeMemberName(" + e + ",text)"
            },
            ensureSafeFunction: function(e) {
                return "ensureSafeFunction(" + e + ",text)"
            },
            getStringValue: function(e) {
                this.assign(e, "getStringValue(" + e + ",text)")
            },
            ensureSafeAssignContext: function(e) {
                return "ensureSafeAssignContext(" + e + ",text)"
            },
            lazyRecurse: function(e, t, n, r, i, o) {
                var a = this;
                return function() {
                    a.recurse(e, t, n, r, i, o)
                }
            },
            lazyAssign: function(e, t) {
                var n = this;
                return function() {
                    n.assign(e, t)
                }
            },
            stringEscapeRegex: /[^ a-zA-Z0-9]/g,
            stringEscapeFn: function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            },
            escape: function(e) {
                if (w(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                if (x(e)) return e.toString();
                if (e === !0) return "true";
                if (e === !1) return "false";
                if (null === e) return "null";
                if ("undefined" == typeof e) return "undefined";
                throw Wi("esc", "IMPOSSIBLE")
            },
            nextId: function(e, t) {
                var n = "v" + this.state.nextId++;
                return e || this.current().vars.push(n + (t ? "=" + t : "")), n
            },
            current: function() {
                return this.state[this.state.computing]
            }
        }, dn.prototype = {
            compile: function(e, t) {
                var n = this,
                    r = this.astBuilder.ast(e);
                this.expression = e, this.expensiveChecks = t, en(r, n.$filter);
                var i, a;
                (i = rn(r)) && (a = this.recurse(i));
                var s, d = tn(r.body);
                d && (s = [], o(d, function(e, t) {
                    var r = n.recurse(e);
                    e.input = r, s.push(r), e.watchId = t
                }));
                var l = [];
                o(r.body, function(e) {
                    l.push(n.recurse(e.expression))
                });
                var u = 0 === r.body.length ? function() {} : 1 === r.body.length ? l[0] : function(e, t) {
                    var n;
                    return o(l, function(r) {
                        n = r(e, t)
                    }), n
                };
                return a && (u.assign = function(e, t, n) {
                    return a(e, n, t)
                }), s && (u.inputs = s), u.literal = on(r), u.constant = an(r), u
            },
            recurse: function(e, t, r) {
                var i, a, s, d = this;
                if (e.input) return this.inputs(e.input, e.watchId);
                switch (e.type) {
                    case eo.Literal:
                        return this.value(e.value, t);
                    case eo.UnaryExpression:
                        return a = this.recurse(e.argument), this["unary" + e.operator](a, t);
                    case eo.BinaryExpression:
                        return i = this.recurse(e.left), a = this.recurse(e.right), this["binary" + e.operator](i, a, t);
                    case eo.LogicalExpression:
                        return i = this.recurse(e.left), a = this.recurse(e.right), this["binary" + e.operator](i, a, t);
                    case eo.ConditionalExpression:
                        return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                    case eo.Identifier:
                        return Gt(e.name, d.expression), d.identifier(e.name, d.expensiveChecks || ln(e.name), t, r, d.expression);
                    case eo.MemberExpression:
                        return i = this.recurse(e.object, !1, !!r), e.computed || (Gt(e.property.name, d.expression), a = e.property.name), e.computed && (a = this.recurse(e.property)), e.computed ? this.computedMember(i, a, t, r, d.expression) : this.nonComputedMember(i, a, d.expensiveChecks, t, r, d.expression);
                    case eo.CallExpression:
                        return s = [], o(e.arguments, function(e) {
                            s.push(d.recurse(e))
                        }), e.filter && (a = this.$filter(e.callee.name)), e.filter || (a = this.recurse(e.callee, !0)), e.filter ? function(e, r, i, o) {
                            for (var d = [], l = 0; l < s.length; ++l) d.push(s[l](e, r, i, o));
                            var u = a.apply(n, d, o);
                            return t ? {
                                context: n,
                                name: n,
                                value: u
                            } : u
                        } : function(e, n, r, i) {
                            var o, l = a(e, n, r, i);
                            if (null != l.value) {
                                Kt(l.context, d.expression), Yt(l.value, d.expression);
                                for (var u = [], c = 0; c < s.length; ++c) u.push(Kt(s[c](e, n, r, i), d.expression));
                                o = Kt(l.value.apply(l.context, u), d.expression)
                            }
                            return t ? {
                                value: o
                            } : o
                        };
                    case eo.AssignmentExpression:
                        return i = this.recurse(e.left, !0, 1), a = this.recurse(e.right),
                            function(e, n, r, o) {
                                var s = i(e, n, r, o),
                                    l = a(e, n, r, o);
                                return Kt(s.value, d.expression), Zt(s.context), s.context[s.name] = l, t ? {
                                    value: l
                                } : l
                            };
                    case eo.ArrayExpression:
                        return s = [], o(e.elements, function(e) {
                                s.push(d.recurse(e))
                            }),
                            function(e, n, r, i) {
                                for (var o = [], a = 0; a < s.length; ++a) o.push(s[a](e, n, r, i));
                                return t ? {
                                    value: o
                                } : o
                            };
                    case eo.ObjectExpression:
                        return s = [], o(e.properties, function(e) {
                                s.push({
                                    key: e.key.type === eo.Identifier ? e.key.name : "" + e.key.value,
                                    value: d.recurse(e.value)
                                })
                            }),
                            function(e, n, r, i) {
                                for (var o = {}, a = 0; a < s.length; ++a) o[s[a].key] = s[a].value(e, n, r, i);
                                return t ? {
                                    value: o
                                } : o
                            };
                    case eo.ThisExpression:
                        return function(e) {
                            return t ? {
                                value: e
                            } : e
                        };
                    case eo.NGValueParameter:
                        return function(e, n, r, i) {
                            return t ? {
                                value: r
                            } : r
                        }
                }
            },
            "unary+": function(e, t) {
                return function(n, r, i, o) {
                    var a = e(n, r, i, o);
                    return a = N(a) ? +a : 0, t ? {
                        value: a
                    } : a
                }
            },
            "unary-": function(e, t) {
                return function(n, r, i, o) {
                    var a = e(n, r, i, o);
                    return a = N(a) ? -a : 0, t ? {
                        value: a
                    } : a
                }
            },
            "unary!": function(e, t) {
                return function(n, r, i, o) {
                    var a = !e(n, r, i, o);
                    return t ? {
                        value: a
                    } : a
                }
            },
            "binary+": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a),
                        d = t(r, i, o, a),
                        l = Jt(s, d);
                    return n ? {
                        value: l
                    } : l
                }
            },
            "binary-": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a),
                        d = t(r, i, o, a),
                        l = (N(s) ? s : 0) - (N(d) ? d : 0);
                    return n ? {
                        value: l
                    } : l
                }
            },
            "binary*": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) * t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary/": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) / t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary%": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) % t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary===": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) === t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary!==": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) !== t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary==": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) == t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary!=": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) != t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary<": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) < t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary>": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) > t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary<=": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) <= t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary>=": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) >= t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary&&": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) && t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary||": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) || t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "ternary?:": function(e, t, n, r) {
                return function(i, o, a, s) {
                    var d = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s);
                    return r ? {
                        value: d
                    } : d
                }
            },
            value: function(e, t) {
                return function() {
                    return t ? {
                        context: n,
                        name: n,
                        value: e
                    } : e
                }
            },
            identifier: function(e, t, r, i, o) {
                return function(a, s, d, l) {
                    var u = s && e in s ? s : a;
                    i && 1 !== i && u && !u[e] && (u[e] = {});
                    var c = u ? u[e] : n;
                    return t && Kt(c, o), r ? {
                        context: u,
                        name: e,
                        value: c
                    } : c
                }
            },
            computedMember: function(e, t, n, r, i) {
                return function(o, a, s, d) {
                    var l, u, c = e(o, a, s, d);
                    return null != c && (l = t(o, a, s, d), l = Wt(l), Gt(l, i), r && 1 !== r && c && !c[l] && (c[l] = {}), u = c[l], Kt(u, i)), n ? {
                        context: c,
                        name: l,
                        value: u
                    } : u
                }
            },
            nonComputedMember: function(e, t, r, i, o, a) {
                return function(s, d, l, u) {
                    var c = e(s, d, l, u);
                    o && 1 !== o && c && !c[t] && (c[t] = {});
                    var f = null != c ? c[t] : n;
                    return (r || ln(t)) && Kt(f, a), i ? {
                        context: c,
                        name: t,
                        value: f
                    } : f
                }
            },
            inputs: function(e, t) {
                return function(n, r, i, o) {
                    return o ? o[t] : e(n, r, i)
                }
            }
        };
        var to = function(e, t, n) {
            this.lexer = e, this.$filter = t, this.options = n, this.ast = new eo(this.lexer), this.astCompiler = n.csp ? new dn(this.ast, t) : new sn(this.ast, t)
        };
        to.prototype = {
            constructor: to,
            parse: function(e) {
                return this.astCompiler.compile(e, this.options.expensiveChecks)
            }
        };
        var no = (me(), me(), Object.prototype.valueOf),
            ro = r("$sce"),
            io = {
                HTML: "html",
                CSS: "css",
                URL: "url",
                RESOURCE_URL: "resourceUrl",
                JS: "js"
            },
            Ti = r("$compile"),
            oo = t.createElement("a"),
            ao = Sn(e.location.href);
        kn.$inject = ["$document"], In.$inject = ["$provide"], Dn.$inject = ["$locale"], Rn.$inject = ["$locale"];
        var so = ".",
            lo = {
                yyyy: qn("FullYear", 4),
                yy: qn("FullYear", 2, 0, !0),
                y: qn("FullYear", 1),
                MMMM: Un("Month"),
                MMM: Un("Month", !0),
                MM: qn("Month", 2, 1),
                M: qn("Month", 1, 1),
                dd: qn("Date", 2),
                d: qn("Date", 1),
                HH: qn("Hours", 2),
                H: qn("Hours", 1),
                hh: qn("Hours", 2, -12),
                h: qn("Hours", 1, -12),
                mm: qn("Minutes", 2),
                m: qn("Minutes", 1),
                ss: qn("Seconds", 2),
                s: qn("Seconds", 1),
                sss: qn("Milliseconds", 3),
                EEEE: Un("Day"),
                EEE: Un("Day", !0),
                a: Gn,
                Z: Bn,
                ww: Vn(2),
                w: Vn(1),
                G: Wn,
                GG: Wn,
                GGG: Wn,
                GGGG: Kn
            },
            uo = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
            co = /^\-?\d+$/;
        Yn.$inject = ["$locale"];
        var fo = $(Nr),
            po = $(br);
        Jn.$inject = ["$parse"];
        var ho = $({
                restrict: "E",
                compile: function(e, t) {
                    return t.href || t.xlinkHref ? void 0 : function(e, t) {
                        if ("a" === t[0].nodeName.toLowerCase()) {
                            var n = "[object SVGAnimatedString]" === Pr.call(t.prop("href")) ? "xlink:href" : "href";
                            t.on("click", function(e) {
                                t.attr(n) || e.preventDefault()
                            })
                        }
                    }
                }
            }),
            go = {};
        o(hi, function(e, t) {
            function n(e, n, i) {
                e.$watch(i[r], function(e) {
                    i.$set(t, !!e)
                })
            }
            if ("multiple" != e) {
                var r = lt("ng-" + t),
                    i = n;
                "checked" === e && (i = function(e, t, i) {
                    i.ngModel !== i[r] && n(e, t, i)
                }), go[r] = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        link: i
                    }
                }
            }
        }), o(mi, function(e, t) {
            go[t] = function() {
                return {
                    priority: 100,
                    link: function(e, n, r) {
                        if ("ngPattern" === t && "/" == r.ngPattern.charAt(0)) {
                            var i = r.ngPattern.match(vr);
                            if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                        }
                        e.$watch(r[t], function(e) {
                            r.$set(t, e)
                        })
                    }
                }
            }
        }), o(["src", "srcset", "href"], function(e) {
            var t = lt("ng-" + e);
            go[t] = function() {
                return {
                    priority: 99,
                    link: function(n, r, i) {
                        var o = e,
                            a = e;
                        "href" === e && "[object SVGAnimatedString]" === Pr.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function(t) {
                            return t ? (i.$set(a, t), void(Cr && o && r.prop(o, i[a]))) : void("href" === e && i.$set(a, null))
                        })
                    }
                }
            }
        });
        var mo = {
                $addControl: g,
                $$renameControl: er,
                $removeControl: g,
                $setValidity: g,
                $setDirty: g,
                $setPristine: g,
                $setSubmitted: g
            },
            $o = "ng-submitted";
        tr.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
        var vo = function(e) {
                return ["$timeout", "$parse", function(t, r) {
                    function i(e) {
                        return "" === e ? r('this[""]').assign : r(e).assign || g
                    }
                    var o = {
                        name: "form",
                        restrict: e ? "EAC" : "E",
                        require: ["form", "^^?form"],
                        controller: tr,
                        compile: function(r, o) {
                            r.addClass(Jo).addClass(Zo);
                            var a = o.name ? "name" : e && o.ngForm ? "ngForm" : !1;
                            return {
                                pre: function(e, r, o, s) {
                                    var d = s[0];
                                    if (!("action" in o)) {
                                        var l = function(t) {
                                            e.$apply(function() {
                                                d.$commitViewValue(), d.$setSubmitted()
                                            }), t.preventDefault()
                                        };
                                        ni(r[0], "submit", l), r.on("$destroy", function() {
                                            t(function() {
                                                ri(r[0], "submit", l)
                                            }, 0, !1)
                                        })
                                    }
                                    var u = s[1] || d.$$parentForm;
                                    u.$addControl(d);
                                    var f = a ? i(d.$name) : g;
                                    a && (f(e, d), o.$observe(a, function(t) {
                                        d.$name !== t && (f(e, n), d.$$parentForm.$$renameControl(d, t), (f = i(d.$name))(e, d))
                                    })), r.on("$destroy", function() {
                                        d.$$parentForm.$removeControl(d), f(e, n), c(d, mo)
                                    })
                                }
                            }
                        }
                    };
                    return o
                }]
            },
            Ao = vo(),
            No = vo(!0),
            yo = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
            bo = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            wo = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
            xo = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
            Co = /^(\d{4})-(\d{2})-(\d{2})$/,
            So = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            Eo = /^(\d{4})-W(\d\d)$/,
            _o = /^(\d{4})-(\d\d)$/,
            ko = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            To = {
                text: rr,
                date: sr("date", Co, ar(Co, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
                "datetime-local": sr("datetimelocal", So, ar(So, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
                time: sr("time", ko, ar(ko, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
                week: sr("week", Eo, or, "yyyy-Www"),
                month: sr("month", _o, ar(_o, ["yyyy", "MM"]), "yyyy-MM"),
                number: lr,
                url: ur,
                email: cr,
                radio: fr,
                checkbox: hr,
                hidden: g,
                button: g,
                submit: g,
                reset: g,
                file: g
            },
            Io = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
                return {
                    restrict: "E",
                    require: ["?ngModel"],
                    link: {
                        pre: function(i, o, a, s) {
                            s[0] && (To[Nr(a.type)] || To.text)(i, o, a, s[0], t, e, n, r)
                        }
                    }
                }
            }],
            Po = /^(true|false|\d+)$/,
            Fo = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    compile: function(e, t) {
                        return Po.test(t.ngValue) ? function(e, t, n) {
                            n.$set("value", e.$eval(n.ngValue))
                        } : function(e, t, n) {
                            e.$watch(n.ngValue, function(e) {
                                n.$set("value", e)
                            })
                        }
                    }
                }
            },
            Mo = ["$compile", function(e) {
                return {
                    restrict: "AC",
                    compile: function(t) {
                        return e.$$addBindingClass(t),
                            function(t, n, r) {
                                e.$$addBindingInfo(n, r.ngBind), n = n[0], t.$watch(r.ngBind, function(e) {
                                    n.textContent = A(e) ? "" : e
                                })
                            }
                    }
                }
            }],
            Oo = ["$interpolate", "$compile", function(e, t) {
                return {
                    compile: function(n) {
                        return t.$$addBindingClass(n),
                            function(n, r, i) {
                                var o = e(r.attr(i.$attr.ngBindTemplate));
                                t.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", function(e) {
                                    r.textContent = A(e) ? "" : e
                                })
                            }
                    }
                }
            }],
            Do = ["$sce", "$parse", "$compile", function(e, t, n) {
                return {
                    restrict: "A",
                    compile: function(r, i) {
                        var o = t(i.ngBindHtml),
                            a = t(i.ngBindHtml, function(e) {
                                return (e || "").toString()
                            });
                        return n.$$addBindingClass(r),
                            function(t, r, i) {
                                n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, function() {
                                    r.html(e.getTrustedHtml(o(t)) || "")
                                })
                            }
                    }
                }
            }],
            Ro = $({
                restrict: "A",
                require: "ngModel",
                link: function(e, t, n, r) {
                    r.$viewChangeListeners.push(function() {
                        e.$eval(n.ngChange)
                    })
                }
            }),
            Lo = gr("", !0),
            jo = gr("Odd", 0),
            qo = gr("Even", 1),
            Uo = Qn({
                compile: function(e, t) {
                    t.$set("ngCloak", n), e.removeClass("ng-cloak")
                }
            }),
            Bo = [function() {
                return {
                    restrict: "A",
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }],
            zo = {},
            Ho = {
                blur: !0,
                focus: !0
            };
        o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
            var t = lt("ng-" + e);
            zo[t] = ["$parse", "$rootScope", function(n, r) {
                return {
                    restrict: "A",
                    compile: function(i, o) {
                        var a = n(o[t], null, !0);
                        return function(t, n) {
                            n.on(e, function(n) {
                                var i = function() {
                                    a(t, {
                                        $event: n
                                    })
                                };
                                Ho[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                            })
                        }
                    }
                }
            }]
        });
        var Vo = ["$animate", function(e) {
                return {
                    multiElement: !0,
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function(n, r, i, o, a) {
                        var s, d, l;
                        n.$watch(i.ngIf, function(n) {
                            n ? d || a(function(n, o) {
                                d = o, n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), s = {
                                    clone: n
                                }, e.enter(n, r.parent(), r)
                            }) : (l && (l.remove(), l = null), d && (d.$destroy(), d = null), s && (l = ge(s.clone), e.leave(l).then(function() {
                                l = null
                            }), s = null))
                        })
                    }
                }
            }],
            Go = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: Or.noop,
                    compile: function(r, i) {
                        var o = i.ngInclude || i.src,
                            a = i.onload || "",
                            s = i.autoscroll;
                        return function(r, i, d, l, u) {
                            var c, f, p, h = 0,
                                g = function() {
                                    f && (f.remove(), f = null), c && (c.$destroy(), c = null), p && (n.leave(p).then(function() {
                                        f = null
                                    }), f = p, p = null)
                                };
                            r.$watch(o, function(o) {
                                var d = function() {
                                        !N(s) || s && !r.$eval(s) || t()
                                    },
                                    f = ++h;
                                o ? (e(o, !0).then(function(e) {
                                    if (f === h) {
                                        var t = r.$new();
                                        l.template = e;
                                        var s = u(t, function(e) {
                                            g(), n.enter(e, null, i).then(d)
                                        });
                                        c = t, p = s, c.$emit("$includeContentLoaded", o), r.$eval(a)
                                    }
                                }, function() {
                                    f === h && (g(), r.$emit("$includeContentError", o))
                                }), r.$emit("$includeContentRequested", o)) : (g(), l.template = null)
                            })
                        }
                    }
                }
            }],
            Wo = ["$compile", function(e) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function(n, r, i, o) {
                        return /SVG/.test(r[0].toString()) ? (r.empty(), void e(Se(o.template, t).childNodes)(n, function(e) {
                            r.append(e)
                        }, {
                            futureParentElement: r
                        })) : (r.html(o.template), void e(r.contents())(n))
                    }
                }
            }],
            Ko = Qn({
                priority: 450,
                compile: function() {
                    return {
                        pre: function(e, t, n) {
                            e.$eval(n.ngInit)
                        }
                    }
                }
            }),
            Yo = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    require: "ngModel",
                    link: function(e, t, r, i) {
                        var a = t.attr(r.$attr.ngList) || ", ",
                            s = "false" !== r.ngTrim,
                            d = s ? qr(a) : a,
                            l = function(e) {
                                if (!A(e)) {
                                    var t = [];
                                    return e && o(e.split(d), function(e) {
                                        e && t.push(s ? qr(e) : e)
                                    }), t
                                }
                            };
                        i.$parsers.push(l), i.$formatters.push(function(e) {
                            return Lr(e) ? e.join(a) : n
                        }), i.$isEmpty = function(e) {
                            return !e || !e.length
                        }
                    }
                }
            },
            Zo = "ng-valid",
            Xo = "ng-invalid",
            Jo = "ng-pristine",
            Qo = "ng-dirty",
            ea = "ng-untouched",
            ta = "ng-touched",
            na = "ng-pending",
            ra = r("ngModel"),
            ia = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(e, t, r, i, a, s, d, l, u, c) {
                this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = c(r.name || "", !1)(e), this.$$parentForm = mo;
                var f, p = a(r.ngModel),
                    h = p.assign,
                    m = p,
                    $ = h,
                    v = null,
                    y = this;
                this.$$setOptions = function(e) {
                    if (y.$options = e, e && e.getterSetter) {
                        var t = a(r.ngModel + "()"),
                            n = a(r.ngModel + "($$$p)");
                        m = function(e) {
                            var n = p(e);
                            return S(n) && (n = t(e)), n
                        }, $ = function(e, t) {
                            S(p(e)) ? n(e, {
                                $$$p: y.$modelValue
                            }) : h(e, y.$modelValue)
                        }
                    } else if (!p.assign) throw ra("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, J(i))
                }, this.$render = g, this.$isEmpty = function(e) {
                    return A(e) || "" === e || null === e || e !== e
                };
                var b = 0;
                mr({
                    ctrl: this,
                    $element: i,
                    set: function(e, t) {
                        e[t] = !0
                    },
                    unset: function(e, t) {
                        delete e[t]
                    },
                    $animate: s
                }), this.$setPristine = function() {
                    y.$dirty = !1, y.$pristine = !0, s.removeClass(i, Qo), s.addClass(i, Jo)
                }, this.$setDirty = function() {
                    y.$dirty = !0, y.$pristine = !1, s.removeClass(i, Jo), s.addClass(i, Qo), y.$$parentForm.$setDirty()
                }, this.$setUntouched = function() {
                    y.$touched = !1, y.$untouched = !0, s.setClass(i, ea, ta)
                }, this.$setTouched = function() {
                    y.$touched = !0, y.$untouched = !1, s.setClass(i, ta, ea)
                }, this.$rollbackViewValue = function() {
                    d.cancel(v), y.$viewValue = y.$$lastCommittedViewValue, y.$render()
                }, this.$validate = function() {
                    if (!x(y.$modelValue) || !isNaN(y.$modelValue)) {
                        var e = y.$$lastCommittedViewValue,
                            t = y.$$rawModelValue,
                            r = y.$valid,
                            i = y.$modelValue,
                            o = y.$options && y.$options.allowInvalid;
                        y.$$runValidators(t, e, function(e) {
                            o || r === e || (y.$modelValue = e ? t : n, y.$modelValue !== i && y.$$writeModelToScope())
                        })
                    }
                }, this.$$runValidators = function(e, t, r) {
                    function i() {
                        var e = y.$$parserName || "parse";
                        return A(f) ? (d(e, null), !0) : (f || (o(y.$validators, function(e, t) {
                            d(t, null)
                        }), o(y.$asyncValidators, function(e, t) {
                            d(t, null)
                        })), d(e, f), f)
                    }

                    function a() {
                        var n = !0;
                        return o(y.$validators, function(r, i) {
                            var o = r(e, t);
                            n = n && o, d(i, o)
                        }), n ? !0 : (o(y.$asyncValidators, function(e, t) {
                            d(t, null)
                        }), !1)
                    }

                    function s() {
                        var r = [],
                            i = !0;
                        o(y.$asyncValidators, function(o, a) {
                            var s = o(e, t);
                            if (!M(s)) throw ra("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                            d(a, n), r.push(s.then(function() {
                                d(a, !0)
                            }, function(e) {
                                i = !1, d(a, !1)
                            }))
                        }), r.length ? u.all(r).then(function() {
                            l(i)
                        }, g) : l(!0)
                    }

                    function d(e, t) {
                        c === b && y.$setValidity(e, t)
                    }

                    function l(e) {
                        c === b && r(e)
                    }
                    b++;
                    var c = b;
                    return i() && a() ? void s() : void l(!1)
                }, this.$commitViewValue = function() {
                    var e = y.$viewValue;
                    d.cancel(v), (y.$$lastCommittedViewValue !== e || "" === e && y.$$hasNativeValidators) && (y.$$lastCommittedViewValue = e, y.$pristine && this.$setDirty(), this.$$parseAndValidate())
                }, this.$$parseAndValidate = function() {
                    function t() {
                        y.$modelValue !== a && y.$$writeModelToScope()
                    }
                    var r = y.$$lastCommittedViewValue,
                        i = r;
                    if (f = A(i) ? n : !0)
                        for (var o = 0; o < y.$parsers.length; o++)
                            if (i = y.$parsers[o](i), A(i)) {
                                f = !1;
                                break
                            }
                    x(y.$modelValue) && isNaN(y.$modelValue) && (y.$modelValue = m(e));
                    var a = y.$modelValue,
                        s = y.$options && y.$options.allowInvalid;
                    y.$$rawModelValue = i, s && (y.$modelValue = i, t()), y.$$runValidators(i, y.$$lastCommittedViewValue, function(e) {
                        s || (y.$modelValue = e ? i : n, t())
                    })
                }, this.$$writeModelToScope = function() {
                    $(e, y.$modelValue), o(y.$viewChangeListeners, function(e) {
                        try {
                            e()
                        } catch (n) {
                            t(n)
                        }
                    })
                }, this.$setViewValue = function(e, t) {
                    y.$viewValue = e, (!y.$options || y.$options.updateOnDefault) && y.$$debounceViewValueCommit(t)
                }, this.$$debounceViewValueCommit = function(t) {
                    var n, r = 0,
                        i = y.$options;
                    i && N(i.debounce) && (n = i.debounce, x(n) ? r = n : x(n[t]) ? r = n[t] : x(n["default"]) && (r = n["default"])), d.cancel(v), r ? v = d(function() {
                        y.$commitViewValue()
                    }, r) : l.$$phase ? y.$commitViewValue() : e.$apply(function() {
                        y.$commitViewValue()
                    })
                }, e.$watch(function() {
                    var t = m(e);
                    if (t !== y.$modelValue && (y.$modelValue === y.$modelValue || t === t)) {
                        y.$modelValue = y.$$rawModelValue = t, f = n;
                        for (var r = y.$formatters, i = r.length, o = t; i--;) o = r[i](o);
                        y.$viewValue !== o && (y.$viewValue = y.$$lastCommittedViewValue = o, y.$render(), y.$$runValidators(t, o, g))
                    }
                    return t
                })
            }],
            oa = ["$rootScope", function(e) {
                return {
                    restrict: "A",
                    require: ["ngModel", "^?form", "^?ngModelOptions"],
                    controller: ia,
                    priority: 1,
                    compile: function(t) {
                        return t.addClass(Jo).addClass(ea).addClass(Zo), {
                            pre: function(e, t, n, r) {
                                var i = r[0],
                                    o = r[1] || i.$$parentForm;
                                i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function(e) {
                                    i.$name !== e && i.$$parentForm.$$renameControl(i, e)
                                }), e.$on("$destroy", function() {
                                    i.$$parentForm.$removeControl(i)
                                })
                            },
                            post: function(t, n, r, i) {
                                var o = i[0];
                                o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(e) {
                                    o.$$debounceViewValueCommit(e && e.type)
                                }), n.on("blur", function(n) {
                                    o.$touched || (e.$$phase ? t.$evalAsync(o.$setTouched) : t.$apply(o.$setTouched))
                                })
                            }
                        }
                    }
                }
            }],
            aa = /(\s+|^)default(\s+|$)/,
            sa = function() {
                return {
                    restrict: "A",
                    controller: ["$scope", "$attrs", function(e, t) {
                        var n = this;
                        this.$options = q(e.$eval(t.ngModelOptions)), N(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = qr(this.$options.updateOn.replace(aa, function() {
                            return n.$options.updateOnDefault = !0, " "
                        }))) : this.$options.updateOnDefault = !0
                    }]
                }
            },
            da = Qn({
                terminal: !0,
                priority: 1e3
            }),
            la = r("ngOptions"),
            ua = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            ca = ["$compile", "$parse", function(e, n) {
                function r(e, t, r) {
                    function o(e, t, n, r, i) {
                        this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = i
                    }

                    function a(e) {
                        var t;
                        if (!l && i(e)) t = e;
                        else {
                            t = [];
                            for (var n in e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n)
                        }
                        return t
                    }
                    var s = e.match(ua);
                    if (!s) throw la("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, J(t));
                    var d = s[5] || s[7],
                        l = s[6],
                        u = / as /.test(s[0]) && s[1],
                        c = s[9],
                        f = n(s[2] ? s[1] : d),
                        p = u && n(u),
                        h = p || f,
                        g = c && n(c),
                        m = c ? function(e, t) {
                            return g(r, t)
                        } : function(e) {
                            return Ke(e)
                        },
                        $ = function(e, t) {
                            return m(e, w(e, t))
                        },
                        v = n(s[2] || s[1]),
                        A = n(s[3] || ""),
                        N = n(s[4] || ""),
                        y = n(s[8]),
                        b = {},
                        w = l ? function(e, t) {
                            return b[l] = t, b[d] = e, b
                        } : function(e) {
                            return b[d] = e, b
                        };
                    return {
                        trackBy: c,
                        getTrackByValue: $,
                        getWatchables: n(y, function(e) {
                            var t = [];
                            e = e || [];
                            for (var n = a(e), i = n.length, o = 0; i > o; o++) {
                                var d = e === n ? o : n[o],
                                    l = (e[d], w(e[d], d)),
                                    u = m(e[d], l);
                                if (t.push(u), s[2] || s[1]) {
                                    var c = v(r, l);
                                    t.push(c)
                                }
                                if (s[4]) {
                                    var f = N(r, l);
                                    t.push(f)
                                }
                            }
                            return t
                        }),
                        getOptions: function() {
                            for (var e = [], t = {}, n = y(r) || [], i = a(n), s = i.length, d = 0; s > d; d++) {
                                var l = n === i ? d : i[d],
                                    u = n[l],
                                    f = w(u, l),
                                    p = h(r, f),
                                    g = m(p, f),
                                    b = v(r, f),
                                    x = A(r, f),
                                    C = N(r, f),
                                    S = new o(g, p, b, x, C);
                                e.push(S), t[g] = S
                            }
                            return {
                                items: e,
                                selectValueMap: t,
                                getOptionFromViewValue: function(e) {
                                    return t[$(e)]
                                },
                                getViewValueFromOption: function(e) {
                                    return c ? Or.copy(e.viewValue) : e.viewValue
                                }
                            }
                        }
                    }
                }
                var a = t.createElement("option"),
                    s = t.createElement("optgroup");
                return {
                    restrict: "A",
                    terminal: !0,
                    require: ["select", "?ngModel"],
                    link: function(t, n, i, d) {
                        function l(e, t) {
                            e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), e.value !== t.value && (t.value = e.selectValue)
                        }

                        function u(e, t, n, r) {
                            var i;
                            return t && Nr(t.nodeName) === n ? i = t : (i = r.cloneNode(!1), t ? e.insertBefore(i, t) : e.appendChild(i)), i
                        }

                        function c(e) {
                            for (var t; e;) t = e.nextSibling, Be(e), e = t
                        }

                        function f(e) {
                            var t = g && g[0],
                                n = b && b[0];
                            if (t || n)
                                for (; e && (e === t || e === n || t && t.nodeType === Zr);) e = e.nextSibling;
                            return e
                        }

                        function p() {
                            var e = w && m.readValue();
                            w = x.getOptions();
                            var t = {},
                                r = n[0].firstChild;
                            if (y && n.prepend(g), r = f(r), w.items.forEach(function(e) {
                                    var i, o, d;
                                    e.group ? (i = t[e.group], i || (o = u(n[0], r, "optgroup", s), r = o.nextSibling, o.label = e.group, i = t[e.group] = {
                                        groupElement: o,
                                        currentOptionElement: o.firstChild
                                    }), d = u(i.groupElement, i.currentOptionElement, "option", a), l(e, d), i.currentOptionElement = d.nextSibling) : (d = u(n[0], r, "option", a), l(e, d), r = d.nextSibling)
                                }), Object.keys(t).forEach(function(e) {
                                    c(t[e].currentOptionElement)
                                }), c(r), h.$render(), !h.$isEmpty(e)) {
                                var i = m.readValue();
                                (x.trackBy ? B(e, i) : e === i) || (h.$setViewValue(i), h.$render())
                            }
                        }
                        var h = d[1];
                        if (h) {
                            for (var g, m = d[0], $ = i.multiple, v = 0, A = n.children(), N = A.length; N > v; v++)
                                if ("" === A[v].value) {
                                    g = A.eq(v);
                                    break
                                }
                            var y = !!g,
                                b = Sr(a.cloneNode(!1));
                            b.val("?");
                            var w, x = r(i.ngOptions, n, t),
                                C = function() {
                                    y || n.prepend(g), n.val(""), g.prop("selected", !0), g.attr("selected", !0)
                                },
                                S = function() {
                                    y || g.remove()
                                },
                                E = function() {
                                    n.prepend(b), n.val("?"), b.prop("selected", !0), b.attr("selected", !0)
                                },
                                _ = function() {
                                    b.remove()
                                };
                            $ ? (h.$isEmpty = function(e) {
                                return !e || 0 === e.length
                            }, m.writeValue = function(e) {
                                w.items.forEach(function(e) {
                                    e.element.selected = !1
                                }), e && e.forEach(function(e) {
                                    var t = w.getOptionFromViewValue(e);
                                    t && !t.disabled && (t.element.selected = !0)
                                })
                            }, m.readValue = function() {
                                var e = n.val() || [],
                                    t = [];
                                return o(e, function(e) {
                                    var n = w.selectValueMap[e];
                                    n && !n.disabled && t.push(w.getViewValueFromOption(n))
                                }), t
                            }, x.trackBy && t.$watchCollection(function() {
                                return Lr(h.$viewValue) ? h.$viewValue.map(function(e) {
                                    return x.getTrackByValue(e)
                                }) : void 0
                            }, function() {
                                h.$render()
                            })) : (m.writeValue = function(e) {
                                var t = w.getOptionFromViewValue(e);
                                t && !t.disabled ? n[0].value !== t.selectValue && (_(), S(), n[0].value = t.selectValue, t.element.selected = !0, t.element.setAttribute("selected", "selected")) : null === e || y ? (_(), C()) : (S(), E())
                            }, m.readValue = function() {
                                var e = w.selectValueMap[n.val()];
                                return e && !e.disabled ? (S(), _(), w.getViewValueFromOption(e)) : null
                            }, x.trackBy && t.$watch(function() {
                                return x.getTrackByValue(h.$viewValue)
                            }, function() {
                                h.$render()
                            })), y ? (g.remove(), e(g)(t), g.removeClass("ng-scope")) : g = Sr(a.cloneNode(!1)), p(), t.$watchCollection(x.getWatchables, p)
                        }
                    }
                }
            }],
            fa = ["$locale", "$interpolate", "$log", function(e, t, n) {
                var r = /{}/g,
                    i = /^when(Minus)?(.+)$/;
                return {
                    link: function(a, s, d) {
                        function l(e) {
                            s.text(e || "")
                        }
                        var u, c = d.count,
                            f = d.$attr.when && s.attr(d.$attr.when),
                            p = d.offset || 0,
                            h = a.$eval(f) || {},
                            m = {},
                            $ = t.startSymbol(),
                            v = t.endSymbol(),
                            N = $ + c + "-" + p + v,
                            y = Or.noop;
                        o(d, function(e, t) {
                            var n = i.exec(t);
                            if (n) {
                                var r = (n[1] ? "-" : "") + Nr(n[2]);
                                h[r] = s.attr(d.$attr[t])
                            }
                        }), o(h, function(e, n) {
                            m[n] = t(e.replace(r, N))
                        }), a.$watch(c, function(t) {
                            var r = parseFloat(t),
                                i = isNaN(r);
                            if (i || r in h || (r = e.pluralCat(r - p)), r !== u && !(i && x(u) && isNaN(u))) {
                                y();
                                var o = m[r];
                                A(o) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + f), y = g, l()) : y = a.$watch(o, l), u = r
                            }
                        })
                    }
                }
            }],
            pa = ["$parse", "$animate", function(e, a) {
                var s = "$$NG_REMOVED",
                    d = r("ngRepeat"),
                    l = function(e, t, n, r, i, o, a) {
                        e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
                    },
                    u = function(e) {
                        return e.clone[0]
                    },
                    c = function(e) {
                        return e.clone[e.clone.length - 1]
                    };
                return {
                    restrict: "A",
                    multiElement: !0,
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    compile: function(r, f) {
                        var p = f.ngRepeat,
                            h = t.createComment(" end ngRepeat: " + p + " "),
                            g = p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                        if (!g) throw d("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", p);
                        var m = g[1],
                            $ = g[2],
                            v = g[3],
                            A = g[4];
                        if (g = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !g) throw d("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", m);
                        var N = g[3] || g[1],
                            y = g[2];
                        if (v && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(v) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(v))) throw d("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", v);
                        var b, w, x, C, S = {
                            $id: Ke
                        };
                        return A ? b = e(A) : (x = function(e, t) {
                                return Ke(t)
                            }, C = function(e) {
                                return e
                            }),
                            function(e, t, r, f, g) {
                                b && (w = function(t, n, r) {
                                    return y && (S[y] = t), S[N] = n, S.$index = r, b(e, S)
                                });
                                var m = me();
                                e.$watchCollection($, function(r) {
                                    var f, $, A, b, S, E, _, k, T, I, P, F, M = t[0],
                                        O = me();
                                    if (v && (e[v] = r), i(r)) T = r, k = w || x;
                                    else {
                                        k = w || C, T = [];
                                        for (var D in r) yr.call(r, D) && "$" !== D.charAt(0) && T.push(D)
                                    }
                                    for (b = T.length, P = new Array(b), f = 0; b > f; f++)
                                        if (S = r === T ? f : T[f], E = r[S], _ = k(S, E, f), m[_]) I = m[_], delete m[_], O[_] = I, P[f] = I;
                                        else {
                                            if (O[_]) throw o(P, function(e) {
                                                e && e.scope && (m[e.id] = e)
                                            }), d("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", p, _, E);
                                            P[f] = {
                                                id: _,
                                                scope: n,
                                                clone: n
                                            }, O[_] = !0
                                        }
                                    for (var R in m) {
                                        if (I = m[R], F = ge(I.clone), a.leave(F), F[0].parentNode)
                                            for (f = 0, $ = F.length; $ > f; f++) F[f][s] = !0;
                                        I.scope.$destroy()
                                    }
                                    for (f = 0; b > f; f++)
                                        if (S = r === T ? f : T[f], E = r[S], I = P[f], I.scope) {
                                            A = M;
                                            do A = A.nextSibling; while (A && A[s]);
                                            u(I) != A && a.move(ge(I.clone), null, Sr(M)), M = c(I), l(I.scope, f, N, E, y, S, b)
                                        } else g(function(e, t) {
                                            I.scope = t;
                                            var n = h.cloneNode(!1);
                                            e[e.length++] = n, a.enter(e, null, Sr(M)), M = n, I.clone = e, O[I.id] = I, l(I.scope, f, N, E, y, S, b)
                                        });
                                    m = O
                                })
                            }
                    }
                }
            }],
            ha = "ng-hide",
            ga = "ng-hide-animate",
            ma = ["$animate", function(e) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(t, n, r) {
                        t.$watch(r.ngShow, function(t) {
                            e[t ? "removeClass" : "addClass"](n, ha, {
                                tempClasses: ga
                            })
                        })
                    }
                }
            }],
            $a = ["$animate", function(e) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(t, n, r) {
                        t.$watch(r.ngHide, function(t) {
                            e[t ? "addClass" : "removeClass"](n, ha, {
                                tempClasses: ga
                            })
                        })
                    }
                }
            }],
            va = Qn(function(e, t, n) {
                e.$watch(n.ngStyle, function(e, n) {
                    n && e !== n && o(n, function(e, n) {
                        t.css(n, "")
                    }), e && t.css(e)
                }, !0)
            }),
            Aa = ["$animate", function(e) {
                return {
                    require: "ngSwitch",
                    controller: ["$scope", function() {
                        this.cases = {}
                    }],
                    link: function(n, r, i, a) {
                        var s = i.ngSwitch || i.on,
                            d = [],
                            l = [],
                            u = [],
                            c = [],
                            f = function(e, t) {
                                return function() {
                                    e.splice(t, 1)
                                }
                            };
                        n.$watch(s, function(n) {
                            var r, i;
                            for (r = 0, i = u.length; i > r; ++r) e.cancel(u[r]);
                            for (u.length = 0, r = 0, i = c.length; i > r; ++r) {
                                var s = ge(l[r].clone);
                                c[r].$destroy();
                                var p = u[r] = e.leave(s);
                                p.then(f(u, r))
                            }
                            l.length = 0, c.length = 0, (d = a.cases["!" + n] || a.cases["?"]) && o(d, function(n) {
                                n.transclude(function(r, i) {
                                    c.push(i);
                                    var o = n.element;
                                    r[r.length++] = t.createComment(" end ngSwitchWhen: ");
                                    var a = {
                                        clone: r
                                    };
                                    l.push(a), e.enter(r, o.parent(), o)
                                })
                            })
                        })
                    }
                }
            }],
            Na = Qn({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(e, t, n, r, i) {
                    r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                        transclude: i,
                        element: t
                    })
                }
            }),
            ya = Qn({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(e, t, n, r, i) {
                    r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                        transclude: i,
                        element: t
                    })
                }
            }),
            ba = Qn({
                restrict: "EAC",
                link: function(e, t, n, i, o) {
                    if (!o) throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", J(t));
                    o(function(e) {
                        t.empty(), t.append(e)
                    })
                }
            }),
            wa = ["$templateCache", function(e) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(t, n) {
                        if ("text/ng-template" == n.type) {
                            var r = n.id,
                                i = t[0].text;
                            e.put(r, i)
                        }
                    }
                }
            }],
            xa = {
                $setViewValue: g,
                $render: g
            },
            Ca = ["$element", "$scope", "$attrs", function(e, r, i) {
                var o = this,
                    a = new Ye;
                o.ngModelCtrl = xa, o.unknownOption = Sr(t.createElement("option")), o.renderUnknownOption = function(t) {
                    var n = "? " + Ke(t) + " ?";
                    o.unknownOption.val(n), e.prepend(o.unknownOption), e.val(n)
                }, r.$on("$destroy", function() {
                    o.renderUnknownOption = g
                }), o.removeUnknownOption = function() {
                    o.unknownOption.parent() && o.unknownOption.remove()
                }, o.readValue = function() {
                    return o.removeUnknownOption(), e.val()
                }, o.writeValue = function(t) {
                    o.hasOption(t) ? (o.removeUnknownOption(), e.val(t), "" === t && o.emptyOption.prop("selected", !0)) : null == t && o.emptyOption ? (o.removeUnknownOption(), e.val("")) : o.renderUnknownOption(t)
                }, o.addOption = function(e, t) {
                    pe(e, '"option value"'), "" === e && (o.emptyOption = t);
                    var n = a.get(e) || 0;
                    a.put(e, n + 1)
                }, o.removeOption = function(e) {
                    var t = a.get(e);
                    t && (1 === t ? (a.remove(e), "" === e && (o.emptyOption = n)) : a.put(e, t - 1))
                }, o.hasOption = function(e) {
                    return !!a.get(e)
                }
            }],
            Sa = function() {
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: Ca,
                    link: function(e, t, n, r) {
                        var i = r[1];
                        if (i) {
                            var a = r[0];
                            if (a.ngModelCtrl = i, i.$render = function() {
                                    a.writeValue(i.$viewValue)
                                }, t.on("change", function() {
                                    e.$apply(function() {
                                        i.$setViewValue(a.readValue())
                                    })
                                }), n.multiple) {
                                a.readValue = function() {
                                    var e = [];
                                    return o(t.find("option"), function(t) {
                                        t.selected && e.push(t.value)
                                    }), e
                                }, a.writeValue = function(e) {
                                    var n = new Ye(e);
                                    o(t.find("option"), function(e) {
                                        e.selected = N(n.get(e.value))
                                    })
                                };
                                var s, d = NaN;
                                e.$watch(function() {
                                    d !== i.$viewValue || B(s, i.$viewValue) || (s = U(i.$viewValue), i.$render()), d = i.$viewValue
                                }), i.$isEmpty = function(e) {
                                    return !e || 0 === e.length
                                }
                            }
                        }
                    }
                }
            },
            Ea = ["$interpolate", function(e) {
                function t(e) {
                    e[0].hasAttribute("selected") && (e[0].selected = !0)
                }
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(n, r) {
                        if (N(r.value)) var i = e(r.value, !0);
                        else {
                            var o = e(n.text(), !0);
                            o || r.$set("value", n.text())
                        }
                        return function(e, n, r) {
                            function a(e) {
                                l.addOption(e, n), l.ngModelCtrl.$render(), t(n)
                            }
                            var s = "$selectController",
                                d = n.parent(),
                                l = d.data(s) || d.parent().data(s);
                            if (l && l.ngModelCtrl) {
                                if (i) {
                                    var u;
                                    r.$observe("value", function(e) {
                                        N(u) && l.removeOption(u), u = e, a(e)
                                    })
                                } else o ? e.$watch(o, function(e, t) {
                                    r.$set("value", e), t !== e && l.removeOption(t), a(e)
                                }) : a(r.value);
                                n.on("$destroy", function() {
                                    l.removeOption(r.value), l.ngModelCtrl.$render()
                                })
                            }
                        }
                    }
                }
            }],
            _a = $({
                restrict: "E",
                terminal: !1
            }),
            ka = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        r && (n.required = !0, r.$validators.required = function(e, t) {
                            return !n.required || !r.$isEmpty(t)
                        }, n.$observe("required", function() {
                            r.$validate()
                        }))
                    }
                }
            },
            Ta = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, i, o) {
                        if (o) {
                            var a, s = i.ngPattern || i.pattern;
                            i.$observe("pattern", function(e) {
                                if (w(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, e, J(t));
                                a = e || n, o.$validate()
                            }), o.$validators.pattern = function(e, t) {
                                return o.$isEmpty(t) || A(a) || a.test(t)
                            }
                        }
                    }
                }
            },
            Ia = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        if (r) {
                            var i = -1;
                            n.$observe("maxlength", function(e) {
                                var t = p(e);
                                i = isNaN(t) ? -1 : t, r.$validate()
                            }), r.$validators.maxlength = function(e, t) {
                                return 0 > i || r.$isEmpty(t) || t.length <= i
                            }
                        }
                    }
                }
            },
            Pa = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        if (r) {
                            var i = 0;
                            n.$observe("minlength", function(e) {
                                i = p(e) || 0, r.$validate()
                            }), r.$validators.minlength = function(e, t) {
                                return r.$isEmpty(t) || t.length >= i
                            }
                        }
                    }
                }
            };
        return e.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (ue(), Ne(Or), Or.module("ngLocale", [], ["$provide", function(e) {
            function t(e) {
                e += "";
                var t = e.indexOf(".");
                return -1 == t ? 0 : e.length - t - 1
            }

            function r(e, r) {
                var i = r;
                n === i && (i = Math.min(t(e), 3));
                var o = Math.pow(10, i),
                    a = (e * o | 0) % o;
                return {
                    v: i,
                    f: a
                }
            }
            var i = {
                ZERO: "zero",
                ONE: "one",
                TWO: "two",
                FEW: "few",
                MANY: "many",
                OTHER: "other"
            };
            e.value("$locale", {
                DATETIME_FORMATS: {
                    AMPMS: ["AM", "PM"],
                    DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"],
                    FIRSTDAYOFWEEK: 6,
                    MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    WEEKENDRANGE: [5, 6],
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    medium: "MMM d, y h:mm:ss a",
                    mediumDate: "MMM d, y",
                    mediumTime: "h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    shortDate: "M/d/yy",
                    shortTime: "h:mm a"
                },
                NUMBER_FORMATS: {
                    CURRENCY_SYM: "$",
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: "-",
                        negSuf: "",
                        posPre: "",
                        posSuf: ""
                    }, {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 2,
                        minFrac: 2,
                        minInt: 1,
                        negPre: "-\xa4",
                        negSuf: "",
                        posPre: "\xa4",
                        posSuf: ""
                    }]
                },
                id: "en-us",
                pluralCat: function(e, t) {
                    var n = 0 | e,
                        o = r(e, t);
                    return 1 == n && 0 == o.v ? i.ONE : i.OTHER
                }
            })
        }]), void Sr(t).ready(function() {
            oe(t, ae)
        }))
    }(window, document), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
    function() {
        function e(e) {
            function t(t, n, r, i, o, a) {
                for (; o >= 0 && a > o; o += e) {
                    var s = i ? i[o] : o;
                    r = n(r, t[s], s, t)
                }
                return r
            }
            return function(n, r, i, o) {
                r = A(r, o, 4);
                var a = !S(n) && v.keys(n),
                    s = (a || n).length,
                    d = e > 0 ? 0 : s - 1;
                return arguments.length < 3 && (i = n[a ? a[d] : d], d += e), t(n, r, i, a, d, s)
            }
        }

        function t(e) {
            return function(t, n, r) {
                n = N(n, r);
                for (var i = C(t), o = e > 0 ? 0 : i - 1; o >= 0 && i > o; o += e)
                    if (n(t[o], o, t)) return o;
                return -1
            }
        }

        function n(e, t, n) {
            return function(r, i, o) {
                var a = 0,
                    s = C(r);
                if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
                else if (n && o && s) return o = n(r, i), r[o] === i ? o : -1;
                if (i !== i) return o = t(u.call(r, a, s), v.isNaN), o >= 0 ? o + a : -1;
                for (o = e > 0 ? a : s - 1; o >= 0 && s > o; o += e)
                    if (r[o] === i) return o;
                return -1
            }
        }

        function r(e, t) {
            var n = I.length,
                r = e.constructor,
                i = v.isFunction(r) && r.prototype || s,
                o = "constructor";
            for (v.has(e, o) && !v.contains(t, o) && t.push(o); n--;) o = I[n], o in e && e[o] !== i[o] && !v.contains(t, o) && t.push(o)
        }
        var i = this,
            o = i._,
            a = Array.prototype,
            s = Object.prototype,
            d = Function.prototype,
            l = a.push,
            u = a.slice,
            c = s.toString,
            f = s.hasOwnProperty,
            p = Array.isArray,
            h = Object.keys,
            g = d.bind,
            m = Object.create,
            $ = function() {},
            v = function(e) {
                return e instanceof v ? e : this instanceof v ? void(this._wrapped = e) : new v(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : i._ = v, v.VERSION = "1.8.3";
        var A = function(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function(n, r, i) {
                            return e.call(t, n, r, i)
                        };
                    case 4:
                        return function(n, r, i, o) {
                            return e.call(t, n, r, i, o)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            },
            N = function(e, t, n) {
                return null == e ? v.identity : v.isFunction(e) ? A(e, t, n) : v.isObject(e) ? v.matcher(e) : v.property(e)
            };
        v.iteratee = function(e, t) {
            return N(e, t, 1 / 0)
        };
        var y = function(e, t) {
                return function(n) {
                    var r = arguments.length;
                    if (2 > r || null == n) return n;
                    for (var i = 1; r > i; i++)
                        for (var o = arguments[i], a = e(o), s = a.length, d = 0; s > d; d++) {
                            var l = a[d];
                            t && void 0 !== n[l] || (n[l] = o[l])
                        }
                    return n
                }
            },
            b = function(e) {
                if (!v.isObject(e)) return {};
                if (m) return m(e);
                $.prototype = e;
                var t = new $;
                return $.prototype = null, t
            },
            w = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            },
            x = Math.pow(2, 53) - 1,
            C = w("length"),
            S = function(e) {
                var t = C(e);
                return "number" == typeof t && t >= 0 && x >= t
            };
        v.each = v.forEach = function(e, t, n) {
            t = A(t, n);
            var r, i;
            if (S(e))
                for (r = 0,
                    i = e.length; i > r; r++) t(e[r], r, e);
            else {
                var o = v.keys(e);
                for (r = 0, i = o.length; i > r; r++) t(e[o[r]], o[r], e)
            }
            return e
        }, v.map = v.collect = function(e, t, n) {
            t = N(t, n);
            for (var r = !S(e) && v.keys(e), i = (r || e).length, o = Array(i), a = 0; i > a; a++) {
                var s = r ? r[a] : a;
                o[a] = t(e[s], s, e)
            }
            return o
        }, v.reduce = v.foldl = v.inject = e(1), v.reduceRight = v.foldr = e(-1), v.find = v.detect = function(e, t, n) {
            var r;
            return r = S(e) ? v.findIndex(e, t, n) : v.findKey(e, t, n), void 0 !== r && -1 !== r ? e[r] : void 0
        }, v.filter = v.select = function(e, t, n) {
            var r = [];
            return t = N(t, n), v.each(e, function(e, n, i) {
                t(e, n, i) && r.push(e)
            }), r
        }, v.reject = function(e, t, n) {
            return v.filter(e, v.negate(N(t)), n)
        }, v.every = v.all = function(e, t, n) {
            t = N(t, n);
            for (var r = !S(e) && v.keys(e), i = (r || e).length, o = 0; i > o; o++) {
                var a = r ? r[o] : o;
                if (!t(e[a], a, e)) return !1
            }
            return !0
        }, v.some = v.any = function(e, t, n) {
            t = N(t, n);
            for (var r = !S(e) && v.keys(e), i = (r || e).length, o = 0; i > o; o++) {
                var a = r ? r[o] : o;
                if (t(e[a], a, e)) return !0
            }
            return !1
        }, v.contains = v.includes = v.include = function(e, t, n, r) {
            return S(e) || (e = v.values(e)), ("number" != typeof n || r) && (n = 0), v.indexOf(e, t, n) >= 0
        }, v.invoke = function(e, t) {
            var n = u.call(arguments, 2),
                r = v.isFunction(t);
            return v.map(e, function(e) {
                var i = r ? t : e[t];
                return null == i ? i : i.apply(e, n)
            })
        }, v.pluck = function(e, t) {
            return v.map(e, v.property(t))
        }, v.where = function(e, t) {
            return v.filter(e, v.matcher(t))
        }, v.findWhere = function(e, t) {
            return v.find(e, v.matcher(t))
        }, v.max = function(e, t, n) {
            var r, i, o = -(1 / 0),
                a = -(1 / 0);
            if (null == t && null != e) {
                e = S(e) ? e : v.values(e);
                for (var s = 0, d = e.length; d > s; s++) r = e[s], r > o && (o = r)
            } else t = N(t, n), v.each(e, function(e, n, r) {
                i = t(e, n, r), (i > a || i === -(1 / 0) && o === -(1 / 0)) && (o = e, a = i)
            });
            return o
        }, v.min = function(e, t, n) {
            var r, i, o = 1 / 0,
                a = 1 / 0;
            if (null == t && null != e) {
                e = S(e) ? e : v.values(e);
                for (var s = 0, d = e.length; d > s; s++) r = e[s], o > r && (o = r)
            } else t = N(t, n), v.each(e, function(e, n, r) {
                i = t(e, n, r), (a > i || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
            });
            return o
        }, v.shuffle = function(e) {
            for (var t, n = S(e) ? e : v.values(e), r = n.length, i = Array(r), o = 0; r > o; o++) t = v.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
            return i
        }, v.sample = function(e, t, n) {
            return null == t || n ? (S(e) || (e = v.values(e)), e[v.random(e.length - 1)]) : v.shuffle(e).slice(0, Math.max(0, t))
        }, v.sortBy = function(e, t, n) {
            return t = N(t, n), v.pluck(v.map(e, function(e, n, r) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, r)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    r = t.criteria;
                if (n !== r) {
                    if (n > r || void 0 === n) return 1;
                    if (r > n || void 0 === r) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var E = function(e) {
            return function(t, n, r) {
                var i = {};
                return n = N(n, r), v.each(t, function(r, o) {
                    var a = n(r, o, t);
                    e(i, r, a)
                }), i
            }
        };
        v.groupBy = E(function(e, t, n) {
            v.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), v.indexBy = E(function(e, t, n) {
            e[n] = t
        }), v.countBy = E(function(e, t, n) {
            v.has(e, n) ? e[n]++ : e[n] = 1
        }), v.toArray = function(e) {
            return e ? v.isArray(e) ? u.call(e) : S(e) ? v.map(e, v.identity) : v.values(e) : []
        }, v.size = function(e) {
            return null == e ? 0 : S(e) ? e.length : v.keys(e).length
        }, v.partition = function(e, t, n) {
            t = N(t, n);
            var r = [],
                i = [];
            return v.each(e, function(e, n, o) {
                (t(e, n, o) ? r : i).push(e)
            }), [r, i]
        }, v.first = v.head = v.take = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : v.initial(e, e.length - t)
        }, v.initial = function(e, t, n) {
            return u.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, v.last = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[e.length - 1] : v.rest(e, Math.max(0, e.length - t))
        }, v.rest = v.tail = v.drop = function(e, t, n) {
            return u.call(e, null == t || n ? 1 : t)
        }, v.compact = function(e) {
            return v.filter(e, v.identity)
        };
        var _ = function(e, t, n, r) {
            for (var i = [], o = 0, a = r || 0, s = C(e); s > a; a++) {
                var d = e[a];
                if (S(d) && (v.isArray(d) || v.isArguments(d))) {
                    t || (d = _(d, t, n));
                    var l = 0,
                        u = d.length;
                    for (i.length += u; u > l;) i[o++] = d[l++]
                } else n || (i[o++] = d)
            }
            return i
        };
        v.flatten = function(e, t) {
            return _(e, t, !1)
        }, v.without = function(e) {
            return v.difference(e, u.call(arguments, 1))
        }, v.uniq = v.unique = function(e, t, n, r) {
            v.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = N(n, r));
            for (var i = [], o = [], a = 0, s = C(e); s > a; a++) {
                var d = e[a],
                    l = n ? n(d, a, e) : d;
                t ? (a && o === l || i.push(d), o = l) : n ? v.contains(o, l) || (o.push(l), i.push(d)) : v.contains(i, d) || i.push(d)
            }
            return i
        }, v.union = function() {
            return v.uniq(_(arguments, !0, !0))
        }, v.intersection = function(e) {
            for (var t = [], n = arguments.length, r = 0, i = C(e); i > r; r++) {
                var o = e[r];
                if (!v.contains(t, o)) {
                    for (var a = 1; n > a && v.contains(arguments[a], o); a++);
                    a === n && t.push(o)
                }
            }
            return t
        }, v.difference = function(e) {
            var t = _(arguments, !0, !0, 1);
            return v.filter(e, function(e) {
                return !v.contains(t, e)
            })
        }, v.zip = function() {
            return v.unzip(arguments)
        }, v.unzip = function(e) {
            for (var t = e && v.max(e, C).length || 0, n = Array(t), r = 0; t > r; r++) n[r] = v.pluck(e, r);
            return n
        }, v.object = function(e, t) {
            for (var n = {}, r = 0, i = C(e); i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }, v.findIndex = t(1), v.findLastIndex = t(-1), v.sortedIndex = function(e, t, n, r) {
            n = N(n, r, 1);
            for (var i = n(t), o = 0, a = C(e); a > o;) {
                var s = Math.floor((o + a) / 2);
                n(e[s]) < i ? o = s + 1 : a = s
            }
            return o
        }, v.indexOf = n(1, v.findIndex, v.sortedIndex), v.lastIndexOf = n(-1, v.findLastIndex), v.range = function(e, t, n) {
            null == t && (t = e || 0, e = 0), n = n || 1;
            for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; r > o; o++, e += n) i[o] = e;
            return i
        };
        var k = function(e, t, n, r, i) {
            if (!(r instanceof t)) return e.apply(n, i);
            var o = b(e.prototype),
                a = e.apply(o, i);
            return v.isObject(a) ? a : o
        };
        v.bind = function(e, t) {
            if (g && e.bind === g) return g.apply(e, u.call(arguments, 1));
            if (!v.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var n = u.call(arguments, 2),
                r = function() {
                    return k(e, r, t, this, n.concat(u.call(arguments)))
                };
            return r
        }, v.partial = function(e) {
            var t = u.call(arguments, 1),
                n = function() {
                    for (var r = 0, i = t.length, o = Array(i), a = 0; i > a; a++) o[a] = t[a] === v ? arguments[r++] : t[a];
                    for (; r < arguments.length;) o.push(arguments[r++]);
                    return k(e, n, this, this, o)
                };
            return n
        }, v.bindAll = function(e) {
            var t, n, r = arguments.length;
            if (1 >= r) throw new Error("bindAll must be passed function names");
            for (t = 1; r > t; t++) n = arguments[t], e[n] = v.bind(e[n], e);
            return e
        }, v.memoize = function(e, t) {
            var n = function(r) {
                var i = n.cache,
                    o = "" + (t ? t.apply(this, arguments) : r);
                return v.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
            };
            return n.cache = {}, n
        }, v.delay = function(e, t) {
            var n = u.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(e, t, n) {
            var r, i, o, a = null,
                s = 0;
            n || (n = {});
            var d = function() {
                s = n.leading === !1 ? 0 : v.now(), a = null, o = e.apply(r, i), a || (r = i = null)
            };
            return function() {
                var l = v.now();
                s || n.leading !== !1 || (s = l);
                var u = t - (l - s);
                return r = this, i = arguments, 0 >= u || u > t ? (a && (clearTimeout(a), a = null), s = l, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(d, u)), o
            }
        }, v.debounce = function(e, t, n) {
            var r, i, o, a, s, d = function() {
                var l = v.now() - a;
                t > l && l >= 0 ? r = setTimeout(d, t - l) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
            };
            return function() {
                o = this, i = arguments, a = v.now();
                var l = n && !r;
                return r || (r = setTimeout(d, t)), l && (s = e.apply(o, i), o = i = null), s
            }
        }, v.wrap = function(e, t) {
            return v.partial(t, e)
        }, v.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }, v.compose = function() {
            var e = arguments,
                t = e.length - 1;
            return function() {
                for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
                return r
            }
        }, v.after = function(e, t) {
            return function() {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, v.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
            }
        }, v.once = v.partial(v.before, 2);
        var T = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        v.keys = function(e) {
            if (!v.isObject(e)) return [];
            if (h) return h(e);
            var t = [];
            for (var n in e) v.has(e, n) && t.push(n);
            return T && r(e, t), t
        }, v.allKeys = function(e) {
            if (!v.isObject(e)) return [];
            var t = [];
            for (var n in e) t.push(n);
            return T && r(e, t), t
        }, v.values = function(e) {
            for (var t = v.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
            return r
        }, v.mapObject = function(e, t, n) {
            t = N(t, n);
            for (var r, i = v.keys(e), o = i.length, a = {}, s = 0; o > s; s++) r = i[s], a[r] = t(e[r], r, e);
            return a
        }, v.pairs = function(e) {
            for (var t = v.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
            return r
        }, v.invert = function(e) {
            for (var t = {}, n = v.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
            return t
        }, v.functions = v.methods = function(e) {
            var t = [];
            for (var n in e) v.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, v.extend = y(v.allKeys), v.extendOwn = v.assign = y(v.keys), v.findKey = function(e, t, n) {
            t = N(t, n);
            for (var r, i = v.keys(e), o = 0, a = i.length; a > o; o++)
                if (r = i[o], t(e[r], r, e)) return r
        }, v.pick = function(e, t, n) {
            var r, i, o = {},
                a = e;
            if (null == a) return o;
            v.isFunction(t) ? (i = v.allKeys(a), r = A(t, n)) : (i = _(arguments, !1, !1, 1), r = function(e, t, n) {
                return t in n
            }, a = Object(a));
            for (var s = 0, d = i.length; d > s; s++) {
                var l = i[s],
                    u = a[l];
                r(u, l, a) && (o[l] = u)
            }
            return o
        }, v.omit = function(e, t, n) {
            if (v.isFunction(t)) t = v.negate(t);
            else {
                var r = v.map(_(arguments, !1, !1, 1), String);
                t = function(e, t) {
                    return !v.contains(r, t)
                }
            }
            return v.pick(e, t, n)
        }, v.defaults = y(v.allKeys, !0), v.create = function(e, t) {
            var n = b(e);
            return t && v.extendOwn(n, t), n
        }, v.clone = function(e) {
            return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
        }, v.tap = function(e, t) {
            return t(e), e
        }, v.isMatch = function(e, t) {
            var n = v.keys(t),
                r = n.length;
            if (null == e) return !r;
            for (var i = Object(e), o = 0; r > o; o++) {
                var a = n[o];
                if (t[a] !== i[a] || !(a in i)) return !1
            }
            return !0
        };
        var P = function(e, t, n, r) {
            if (e === t) return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof v && (e = e._wrapped), t instanceof v && (t = t._wrapped);
            var i = c.call(e);
            if (i !== c.call(t)) return !1;
            switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
            }
            var o = "[object Array]" === i;
            if (!o) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var a = e.constructor,
                    s = t.constructor;
                if (a !== s && !(v.isFunction(a) && a instanceof a && v.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1
            }
            n = n || [], r = r || [];
            for (var d = n.length; d--;)
                if (n[d] === e) return r[d] === t;
            if (n.push(e), r.push(t), o) {
                if (d = e.length, d !== t.length) return !1;
                for (; d--;)
                    if (!P(e[d], t[d], n, r)) return !1
            } else {
                var l, u = v.keys(e);
                if (d = u.length, v.keys(t).length !== d) return !1;
                for (; d--;)
                    if (l = u[d], !v.has(t, l) || !P(e[l], t[l], n, r)) return !1
            }
            return n.pop(), r.pop(), !0
        };
        v.isEqual = function(e, t) {
            return P(e, t)
        }, v.isEmpty = function(e) {
            return null == e ? !0 : S(e) && (v.isArray(e) || v.isString(e) || v.isArguments(e)) ? 0 === e.length : 0 === v.keys(e).length
        }, v.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, v.isArray = p || function(e) {
            return "[object Array]" === c.call(e)
        }, v.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
            v["is" + e] = function(t) {
                return c.call(t) === "[object " + e + "]"
            }
        }), v.isArguments(arguments) || (v.isArguments = function(e) {
            return v.has(e, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function(e) {
            return "function" == typeof e || !1
        }), v.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, v.isNaN = function(e) {
            return v.isNumber(e) && e !== +e
        }, v.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" === c.call(e)
        }, v.isNull = function(e) {
            return null === e
        }, v.isUndefined = function(e) {
            return void 0 === e
        }, v.has = function(e, t) {
            return null != e && f.call(e, t)
        }, v.noConflict = function() {
            return i._ = o, this
        }, v.identity = function(e) {
            return e
        }, v.constant = function(e) {
            return function() {
                return e
            }
        }, v.noop = function() {}, v.property = w, v.propertyOf = function(e) {
            return null == e ? function() {} : function(t) {
                return e[t]
            }
        }, v.matcher = v.matches = function(e) {
            return e = v.extendOwn({}, e),
                function(t) {
                    return v.isMatch(t, e)
                }
        }, v.times = function(e, t, n) {
            var r = Array(Math.max(0, e));
            t = A(t, n, 1);
            for (var i = 0; e > i; i++) r[i] = t(i);
            return r
        }, v.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, v.now = Date.now || function() {
            return (new Date).getTime()
        };
        var F = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            M = v.invert(F),
            O = function(e) {
                var t = function(t) {
                        return e[t]
                    },
                    n = "(?:" + v.keys(e).join("|") + ")",
                    r = RegExp(n),
                    i = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
                }
            };
        v.escape = O(F), v.unescape = O(M), v.result = function(e, t, n) {
            var r = null == e ? void 0 : e[t];
            return void 0 === r && (r = n), v.isFunction(r) ? r.call(e) : r
        };
        var D = 0;
        v.uniqueId = function(e) {
            var t = ++D + "";
            return e ? e + t : t
        }, v.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var R = /(.)^/,
            L = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            j = /\\|'|\r|\n|\u2028|\u2029/g,
            q = function(e) {
                return "\\" + L[e]
            };
        v.template = function(e, t, n) {
            !t && n && (t = n), t = v.defaults({}, t, v.templateSettings);
            var r = RegExp([(t.escape || R).source, (t.interpolate || R).source, (t.evaluate || R).source].join("|") + "|$", "g"),
                i = 0,
                o = "__p+='";
            e.replace(r, function(t, n, r, a, s) {
                return o += e.slice(i, s).replace(j, q), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
            }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var a = new Function(t.variable || "obj", "_", o)
            } catch (s) {
                throw s.source = o, s
            }
            var d = function(e) {
                    return a.call(this, e, v)
                },
                l = t.variable || "obj";
            return d.source = "function(" + l + "){\n" + o + "}", d
        }, v.chain = function(e) {
            var t = v(e);
            return t._chain = !0, t
        };
        var U = function(e, t) {
            return e._chain ? v(t).chain() : t
        };
        v.mixin = function(e) {
            v.each(v.functions(e), function(t) {
                var n = v[t] = e[t];
                v.prototype[t] = function() {
                    var e = [this._wrapped];
                    return l.apply(e, arguments), U(this, n.apply(v, e))
                }
            })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = a[e];
            v.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], U(this, n)
            }
        }), v.each(["concat", "join", "slice"], function(e) {
            var t = a[e];
            v.prototype[e] = function() {
                return U(this, t.apply(this._wrapped, arguments))
            }
        }), v.prototype.value = function() {
            return this._wrapped
        }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return v
        })
    }.call(this), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            return j(new(j(function() {}, {
                prototype: e
            })), t)
        }

        function i(e) {
            return L(arguments, function(t) {
                t !== e && L(t, function(t, n) {
                    e.hasOwnProperty(n) || (e[n] = t)
                })
            }), e
        }

        function o(e, t) {
            var n = [];
            for (var r in e.path) {
                if (e.path[r] !== t.path[r]) break;
                n.push(e.path[r])
            }
            return n
        }

        function a(e) {
            if (Object.keys) return Object.keys(e);
            var t = [];
            return L(e, function(e, n) {
                t.push(n)
            }), t
        }

        function s(e, t) {
            if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
            var n = e.length >>> 0,
                r = Number(arguments[2]) || 0;
            for (r = 0 > r ? Math.ceil(r) : Math.floor(r), 0 > r && (r += n); n > r; r++)
                if (r in e && e[r] === t) return r;
            return -1
        }

        function d(e, t, n, r) {
            var i, d = o(n, r),
                l = {},
                u = [];
            for (var c in d)
                if (d[c].params && (i = a(d[c].params), i.length))
                    for (var f in i) s(u, i[f]) >= 0 || (u.push(i[f]), l[i[f]] = e[i[f]]);
            return j({}, l, t)
        }

        function l(e, t, n) {
            if (!n) {
                n = [];
                for (var r in e) n.push(r)
            }
            for (var i = 0; i < n.length; i++) {
                var o = n[i];
                if (e[o] != t[o]) return !1
            }
            return !0
        }

        function u(e, t) {
            var n = {};
            return L(e, function(e) {
                n[e] = t[e]
            }), n
        }

        function c(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            return L(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }

        function f(e) {
            var t = {},
                n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var r in e) - 1 == s(n, r) && (t[r] = e[r]);
            return t
        }

        function p(e, t) {
            var n = R(e),
                r = n ? [] : {};
            return L(e, function(e, i) {
                t(e, i) && (r[n ? r.length : i] = e)
            }), r
        }

        function h(e, t) {
            var n = R(e) ? [] : {};
            return L(e, function(e, r) {
                n[r] = t(e, r)
            }), n
        }

        function g(e, t) {
            var r = 1,
                o = 2,
                d = {},
                l = [],
                u = d,
                c = j(e.when(d), {
                    $$promises: d,
                    $$values: d
                });
            this.study = function(d) {
                function p(e, n) {
                    if (v[n] !== o) {
                        if ($.push(n), v[n] === r) throw $.splice(0, s($, n)), new Error("Cyclic dependency: " + $.join(" -> "));
                        if (v[n] = r, O(e)) m.push(n, [function() {
                            return t.get(e)
                        }], l);
                        else {
                            var i = t.annotate(e);
                            L(i, function(e) {
                                e !== n && d.hasOwnProperty(e) && p(d[e], e)
                            }), m.push(n, e, i)
                        }
                        $.pop(), v[n] = o
                    }
                }

                function h(e) {
                    return D(e) && e.then && e.$$promises
                }
                if (!D(d)) throw new Error("'invocables' must be an object");
                var g = a(d || {}),
                    m = [],
                    $ = [],
                    v = {};
                return L(d, p), d = $ = v = null,
                    function(r, o, a) {
                        function s() {
                            --N || (y || i(A, o.$$values), $.$$values = A, $.$$promises = $.$$promises || !0, delete $.$$inheritedValues, p.resolve(A))
                        }

                        function d(e) {
                            $.$$failure = e, p.reject(e)
                        }

                        function l(n, i, o) {
                            function l(e) {
                                c.reject(e), d(e)
                            }

                            function u() {
                                if (!F($.$$failure)) try {
                                    c.resolve(t.invoke(i, a, A)), c.promise.then(function(e) {
                                        A[n] = e, s()
                                    }, l)
                                } catch (e) {
                                    l(e)
                                }
                            }
                            var c = e.defer(),
                                f = 0;
                            L(o, function(e) {
                                v.hasOwnProperty(e) && !r.hasOwnProperty(e) && (f++, v[e].then(function(t) {
                                    A[e] = t, --f || u()
                                }, l))
                            }), f || u(), v[n] = c.promise
                        }
                        if (h(r) && a === n && (a = o, o = r, r = null), r) {
                            if (!D(r)) throw new Error("'locals' must be an object")
                        } else r = u;
                        if (o) {
                            if (!h(o)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else o = c;
                        var p = e.defer(),
                            $ = p.promise,
                            v = $.$$promises = {},
                            A = j({}, r),
                            N = 1 + m.length / 3,
                            y = !1;
                        if (F(o.$$failure)) return d(o.$$failure), $;
                        o.$$inheritedValues && i(A, f(o.$$inheritedValues, g)), j(v, o.$$promises), o.$$values ? (y = i(A, f(o.$$values, g)), $.$$inheritedValues = f(o.$$values, g), s()) : (o.$$inheritedValues && ($.$$inheritedValues = f(o.$$inheritedValues, g)), o.then(s, d));
                        for (var b = 0, w = m.length; w > b; b += 3) r.hasOwnProperty(m[b]) ? s() : l(m[b], m[b + 1], m[b + 2]);
                        return $
                    }
            }, this.resolve = function(e, t, n, r) {
                return this.study(e)(t, n, r)
            }
        }

        function m(e, t, n) {
            this.fromConfig = function(e, t, n) {
                return F(e.template) ? this.fromString(e.template, t) : F(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : F(e.templateProvider) ? this.fromProvider(e.templateProvider, t, n) : null
            }, this.fromString = function(e, t) {
                return M(e) ? e(t) : e
            }, this.fromUrl = function(n, r) {
                return M(n) && (n = n(r)), null == n ? null : e.get(n, {
                    cache: t,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function(e) {
                    return e.data
                })
            }, this.fromProvider = function(e, t, r) {
                return n.invoke(e, null, r || {
                    params: t
                })
            }
        }

        function $(e, t, i) {
            function o(t, n, r, i) {
                if (m.push(t), h[t]) return h[t];
                if (!/^\w+(-+\w+)*(?:\[\])?$/.test(t)) throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
                if (g[t]) throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
                return g[t] = new U.Param(t, n, r, i), g[t]
            }

            function a(e, t, n, r) {
                var i = ["", ""],
                    o = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!t) return o;
                switch (n) {
                    case !1:
                        i = ["(", ")" + (r ? "?" : "")];
                        break;
                    case !0:
                        i = ["?(", ")?"];
                        break;
                    default:
                        i = ["(" + n + "|", ")?"]
                }
                return o + i[0] + t + i[1]
            }

            function s(i, o) {
                var a, s, d, l, u;
                return a = i[2] || i[3], u = t.params[a], d = e.substring(f, i.index), s = o ? i[4] : i[4] || ("*" == i[1] ? ".*" : null), l = U.type(s || "string") || r(U.type("string"), {
                    pattern: new RegExp(s, t.caseInsensitive ? "i" : n)
                }), {
                    id: a,
                    regexp: s,
                    segment: d,
                    type: l,
                    cfg: u
                }
            }
            t = j({
                params: {}
            }, D(t) ? t : {});
            var d, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                u = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                c = "^",
                f = 0,
                p = this.segments = [],
                h = i ? i.params : {},
                g = this.params = i ? i.params.$$new() : new U.ParamSet,
                m = [];
            this.source = e;
            for (var $, v, A;
                (d = l.exec(e)) && ($ = s(d, !1), !($.segment.indexOf("?") >= 0));) v = o($.id, $.type, $.cfg, "path"), c += a($.segment, v.type.pattern.source, v.squash, v.isOptional), p.push($.segment), f = l.lastIndex;
            A = e.substring(f);
            var N = A.indexOf("?");
            if (N >= 0) {
                var y = this.sourceSearch = A.substring(N);
                if (A = A.substring(0, N), this.sourcePath = e.substring(0, f + N), y.length > 0)
                    for (f = 0; d = u.exec(y);) $ = s(d, !0), v = o($.id, $.type, $.cfg, "search"), f = l.lastIndex
            } else this.sourcePath = e, this.sourceSearch = "";
            c += a(A) + (t.strict === !1 ? "/?" : "") + "$", p.push(A), this.regexp = new RegExp(c, t.caseInsensitive ? "i" : n), this.prefix = p[0], this.$$paramNames = m
        }

        function v(e) {
            j(this, e)
        }

        function A() {
            function e(e) {
                return null != e ? e.toString().replace(/\//g, "%2F") : e
            }

            function i(e) {
                return null != e ? e.toString().replace(/%2F/g, "/") : e
            }

            function o() {
                return {
                    strict: g,
                    caseInsensitive: f
                }
            }

            function d(e) {
                return M(e) || R(e) && M(e[e.length - 1])
            }

            function l() {
                for (; b.length;) {
                    var e = b.shift();
                    if (e.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    t.extend(N[e.name], c.invoke(e.def))
                }
            }

            function u(e) {
                j(this, e || {})
            }
            U = this;
            var c, f = !1,
                g = !0,
                m = !1,
                N = {},
                y = !0,
                b = [],
                w = {
                    string: {
                        encode: e,
                        decode: i,
                        is: function(e) {
                            return null == e || !F(e) || "string" == typeof e
                        },
                        pattern: /[^/]*/
                    },
                    "int": {
                        encode: e,
                        decode: function(e) {
                            return parseInt(e, 10)
                        },
                        is: function(e) {
                            return F(e) && this.decode(e.toString()) === e
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function(e) {
                            return e ? 1 : 0
                        },
                        decode: function(e) {
                            return 0 !== parseInt(e, 10)
                        },
                        is: function(e) {
                            return e === !0 || e === !1
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function(e) {
                            return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : n
                        },
                        decode: function(e) {
                            if (this.is(e)) return e;
                            var t = this.capture.exec(e);
                            return t ? new Date(t[1], t[2] - 1, t[3]) : n
                        },
                        is: function(e) {
                            return e instanceof Date && !isNaN(e.valueOf())
                        },
                        equals: function(e, t) {
                            return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: t.toJson,
                        decode: t.fromJson,
                        is: t.isObject,
                        equals: t.equals,
                        pattern: /[^/]*/
                    },
                    any: {
                        encode: t.identity,
                        decode: t.identity,
                        equals: t.equals,
                        pattern: /.*/
                    }
                };
            A.$$getDefaultValue = function(e) {
                if (!d(e.value)) return e.value;
                if (!c) throw new Error("Injectable functions cannot be called at configuration time");
                return c.invoke(e.value)
            }, this.caseInsensitive = function(e) {
                return F(e) && (f = e), f
            }, this.strictMode = function(e) {
                return F(e) && (g = e), g
            }, this.defaultSquashPolicy = function(e) {
                if (!F(e)) return m;
                if (e !== !0 && e !== !1 && !O(e)) throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
                return m = e, e
            }, this.compile = function(e, t) {
                return new $(e, j(o(), t))
            }, this.isMatcher = function(e) {
                if (!D(e)) return !1;
                var t = !0;
                return L($.prototype, function(n, r) {
                    M(n) && (t = t && F(e[r]) && M(e[r]))
                }), t
            }, this.type = function(e, t, n) {
                if (!F(t)) return N[e];
                if (N.hasOwnProperty(e)) throw new Error("A type named '" + e + "' has already been defined.");
                return N[e] = new v(j({
                    name: e
                }, t)), n && (b.push({
                    name: e,
                    def: n
                }), y || l()), this
            }, L(w, function(e, t) {
                N[t] = new v(j({
                    name: t
                }, e))
            }), N = r(N, {}), this.$get = ["$injector", function(e) {
                return c = e, y = !1, l(), L(w, function(e, t) {
                    N[t] || (N[t] = new v(e))
                }), this
            }], this.Param = function(e, t, r, i) {
                function o(e) {
                    var t = D(e) ? a(e) : [],
                        n = -1 === s(t, "value") && -1 === s(t, "type") && -1 === s(t, "squash") && -1 === s(t, "array");
                    return n && (e = {
                        value: e
                    }), e.$$fn = d(e.value) ? e.value : function() {
                        return e.value
                    }, e
                }

                function l(t, n, r) {
                    if (t.type && n) throw new Error("Param '" + e + "' has two type configurations.");
                    return n ? n : t.type ? t.type instanceof v ? t.type : new v(t.type) : "config" === r ? N.any : N.string
                }

                function u() {
                    var t = {
                            array: "search" === i ? "auto" : !1
                        },
                        n = e.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return j(t, n, r).array
                }

                function f(e, t) {
                    var n = e.squash;
                    if (!t || n === !1) return !1;
                    if (!F(n) || null == n) return m;
                    if (n === !0 || O(n)) return n;
                    throw new Error("Invalid squash policy: '" + n + "'. Valid policies: false, true, or arbitrary string")
                }

                function g(e, t, r, i) {
                    var o, a, d = [{
                        from: "",
                        to: r || t ? n : ""
                    }, {
                        from: null,
                        to: r || t ? n : ""
                    }];
                    return o = R(e.replace) ? e.replace : [], O(i) && o.push({
                        from: i,
                        to: n
                    }), a = h(o, function(e) {
                        return e.from
                    }), p(d, function(e) {
                        return -1 === s(a, e.from)
                    }).concat(o)
                }

                function $() {
                    if (!c) throw new Error("Injectable functions cannot be called at configuration time");
                    var e = c.invoke(r.$$fn);
                    if (null !== e && e !== n && !b.type.is(e)) throw new Error("Default value (" + e + ") for parameter '" + b.id + "' is not an instance of Type (" + b.type.name + ")");
                    return e
                }

                function A(e) {
                    function t(e) {
                        return function(t) {
                            return t.from === e
                        }
                    }

                    function n(e) {
                        var n = h(p(b.replace, t(e)), function(e) {
                            return e.to
                        });
                        return n.length ? n[0] : e
                    }
                    return e = n(e), F(e) ? b.type.$normalize(e) : $()
                }

                function y() {
                    return "{Param:" + e + " " + t + " squash: '" + C + "' optional: " + x + "}"
                }
                var b = this;
                r = o(r), t = l(r, t, i);
                var w = u();
                t = w ? t.$asArray(w, "search" === i) : t, "string" !== t.name || w || "path" !== i || r.value !== n || (r.value = "");
                var x = r.value !== n,
                    C = f(r, x),
                    S = g(r, w, x, C);
                j(this, {
                    id: e,
                    type: t,
                    location: i,
                    array: w,
                    squash: C,
                    replace: S,
                    isOptional: x,
                    value: A,
                    dynamic: n,
                    config: r,
                    toString: y
                })
            }, u.prototype = {
                $$new: function() {
                    return r(this, j(new u, {
                        $$parent: this
                    }))
                },
                $$keys: function() {
                    for (var e = [], t = [], n = this, r = a(u.prototype); n;) t.push(n), n = n.$$parent;
                    return t.reverse(), L(t, function(t) {
                        L(a(t), function(t) {
                            -1 === s(e, t) && -1 === s(r, t) && e.push(t)
                        })
                    }), e
                },
                $$values: function(e) {
                    var t = {},
                        n = this;
                    return L(n.$$keys(), function(r) {
                        t[r] = n[r].value(e && e[r])
                    }), t
                },
                $$equals: function(e, t) {
                    var n = !0,
                        r = this;
                    return L(r.$$keys(), function(i) {
                        var o = e && e[i],
                            a = t && t[i];
                        r[i].type.equals(o, a) || (n = !1)
                    }), n
                },
                $$validates: function(e) {
                    var r, i, o, a, s, d = this.$$keys();
                    for (r = 0; r < d.length && (i = this[d[r]], o = e[d[r]], o !== n && null !== o || !i.isOptional); r++) {
                        if (a = i.type.$normalize(o), !i.type.is(a)) return !1;
                        if (s = i.type.encode(a), t.isString(s) && !i.type.pattern.exec(s)) return !1
                    }
                    return !0
                },
                $$parent: n
            }, this.ParamSet = u
        }

        function N(e, r) {
            function i(e) {
                var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
                return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
            }

            function o(e, t) {
                return e.replace(/\$(\$|\d{1,2})/, function(e, n) {
                    return t["$" === n ? 0 : Number(n)]
                })
            }

            function a(e, t, n) {
                if (!n) return !1;
                var r = e.invoke(t, t, {
                    $match: n
                });
                return F(r) ? r : !0
            }

            function s(r, i, o, a) {
                function s(e, t, n) {
                    return "/" === g ? e : t ? g.slice(0, -1) + e : n ? g.slice(1) + e : e
                }

                function f(e) {
                    function t(e) {
                        var t = e(o, r);
                        return t ? (O(t) && r.replace().url(t), !0) : !1
                    }
                    if (!e || !e.defaultPrevented) {
                        h && r.url() === h;
                        h = n;
                        var i, a = l.length;
                        for (i = 0; a > i; i++)
                            if (t(l[i])) return;
                        u && t(u)
                    }
                }

                function p() {
                    return d = d || i.$on("$locationChangeSuccess", f)
                }
                var h, g = a.baseHref(),
                    m = r.url();
                return c || p(), {
                    sync: function() {
                        f()
                    },
                    listen: function() {
                        return p()
                    },
                    update: function(e) {
                        return e ? void(m = r.url()) : void(r.url() !== m && (r.url(m), r.replace()))
                    },
                    push: function(e, t, i) {
                        var o = e.format(t || {});
                        null !== o && t && t["#"] && (o += "#" + t["#"]), r.url(o), h = i && i.$$avoidResync ? r.url() : n, i && i.replace && r.replace()
                    },
                    href: function(n, i, o) {
                        if (!n.validates(i)) return null;
                        var a = e.html5Mode();
                        t.isObject(a) && (a = a.enabled);
                        var d = n.format(i);
                        if (o = o || {}, a || null === d || (d = "#" + e.hashPrefix() + d), null !== d && i && i["#"] && (d += "#" + i["#"]), d = s(d, a, o.absolute), !o.absolute || !d) return d;
                        var l = !a && d ? "/" : "",
                            u = r.port();
                        return u = 80 === u || 443 === u ? "" : ":" + u, [r.protocol(), "://", r.host(), u, l, d].join("")
                    }
                }
            }
            var d, l = [],
                u = null,
                c = !1;
            this.rule = function(e) {
                if (!M(e)) throw new Error("'rule' must be a function");
                return l.push(e), this
            }, this.otherwise = function(e) {
                if (O(e)) {
                    var t = e;
                    e = function() {
                        return t
                    }
                } else if (!M(e)) throw new Error("'rule' must be a function");
                return u = e, this
            }, this.when = function(e, t) {
                var n, s = O(t);
                if (O(e) && (e = r.compile(e)), !s && !M(t) && !R(t)) throw new Error("invalid 'handler' in when()");
                var d = {
                        matcher: function(e, t) {
                            return s && (n = r.compile(t), t = ["$match", function(e) {
                                return n.format(e)
                            }]), j(function(n, r) {
                                return a(n, t, e.exec(r.path(), r.search()))
                            }, {
                                prefix: O(e.prefix) ? e.prefix : ""
                            })
                        },
                        regex: function(e, t) {
                            if (e.global || e.sticky) throw new Error("when() RegExp must not be global or sticky");
                            return s && (n = t, t = ["$match", function(e) {
                                return o(n, e)
                            }]), j(function(n, r) {
                                return a(n, t, e.exec(r.path()))
                            }, {
                                prefix: i(e)
                            })
                        }
                    },
                    l = {
                        matcher: r.isMatcher(e),
                        regex: e instanceof RegExp
                    };
                for (var u in l)
                    if (l[u]) return this.rule(d[u](e, t));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function(e) {
                e === n && (e = !0), c = e
            }, this.$get = s, s.$inject = ["$location", "$rootScope", "$injector", "$browser"]
        }

        function y(e, i) {
            function o(e) {
                return 0 === e.indexOf(".") || 0 === e.indexOf("^")
            }

            function f(e, t) {
                if (!e) return n;
                var r = O(e),
                    i = r ? e : e.name,
                    a = o(i);
                if (a) {
                    if (!t) throw new Error("No reference point given for path '" + i + "'");
                    t = f(t);
                    for (var s = i.split("."), d = 0, l = s.length, u = t; l > d; d++)
                        if ("" !== s[d] || 0 !== d) {
                            if ("^" !== s[d]) break;
                            if (!u.parent) throw new Error("Path '" + i + "' not valid for state '" + t.name + "'");
                            u = u.parent
                        } else u = t;
                    s = s.slice(d).join("."), i = u.name + (u.name && s ? "." : "") + s
                }
                var c = C[i];
                return !c || !r && (r || c !== e && c.self !== e) ? n : c
            }

            function p(e, t) {
                S[e] || (S[e] = []), S[e].push(t)
            }

            function g(e) {
                for (var t = S[e] || []; t.length;) m(t.shift())
            }

            function m(t) {
                t = r(t, {
                    self: t,
                    resolve: t.resolve || {},
                    toString: function() {
                        return this.name
                    }
                });
                var n = t.name;
                if (!O(n) || n.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (C.hasOwnProperty(n)) throw new Error("State '" + n + "'' is already defined");
                var i = -1 !== n.indexOf(".") ? n.substring(0, n.lastIndexOf(".")) : O(t.parent) ? t.parent : D(t.parent) && O(t.parent.name) ? t.parent.name : "";
                if (i && !C[i]) return p(i, t.self);
                for (var o in _) M(_[o]) && (t[o] = _[o](t, _.$delegates[o]));
                return C[n] = t, !t[E] && t.url && e.when(t.url, ["$match", "$stateParams", function(e, n) {
                    x.$current.navigable == t && l(e, n) || x.transitionTo(t, e, {
                        inherit: !0,
                        location: !1
                    })
                }]), g(n), t
            }

            function $(e) {
                return e.indexOf("*") > -1
            }

            function v(e) {
                for (var t = e.split("."), n = x.$current.name.split("."), r = 0, i = t.length; i > r; r++) "*" === t[r] && (n[r] = "*");
                return "**" === t[0] && (n = n.slice(s(n, t[1])), n.unshift("**")), "**" === t[t.length - 1] && (n.splice(s(n, t[t.length - 2]) + 1, Number.MAX_VALUE), n.push("**")), t.length != n.length ? !1 : n.join("") === t.join("")
            }

            function A(e, t) {
                return O(e) && !F(t) ? _[e] : M(t) && O(e) ? (_[e] && !_.$delegates[e] && (_.$delegates[e] = _[e]), _[e] = t, this) : this
            }

            function N(e, t) {
                return D(e) ? t = e : t.name = e, m(t), this
            }

            function y(e, i, o, s, c, p, g, m, A) {
                function N(t, n, r, o) {
                    var a = e.$broadcast("$stateNotFound", t, n, r);
                    if (a.defaultPrevented) return g.update(), k;
                    if (!a.retry) return null;
                    if (o.$retry) return g.update(), T;
                    var s = x.transition = i.when(a.retry);
                    return s.then(function() {
                        return s !== x.transition ? S : (t.options.$retry = !0, x.transitionTo(t.to, t.toParams, t.options))
                    }, function() {
                        return k
                    }), g.update(), s
                }

                function y(e, n, r, a, d, l) {
                    function f() {
                        var n = [];
                        return L(e.views, function(r, i) {
                            var a = r.resolve && r.resolve !== e.resolve ? r.resolve : {};
                            a.$template = [function() {
                                return o.load(i, {
                                    view: r,
                                    locals: d.globals,
                                    params: p,
                                    notify: l.notify
                                }) || ""
                            }], n.push(c.resolve(a, d.globals, d.resolve, e).then(function(n) {
                                if (M(r.controllerProvider) || R(r.controllerProvider)) {
                                    var o = t.extend({}, a, d.globals);
                                    n.$$controller = s.invoke(r.controllerProvider, null, o)
                                } else n.$$controller = r.controller;
                                n.$$state = e, n.$$controllerAs = r.controllerAs, d[i] = n
                            }))
                        }), i.all(n).then(function() {
                            return d.globals
                        })
                    }
                    var p = r ? n : u(e.params.$$keys(), n),
                        h = {
                            $stateParams: p
                        };
                    d.resolve = c.resolve(e.resolve, h, d.resolve, e);
                    var g = [d.resolve.then(function(e) {
                        d.globals = e
                    })];
                    return a && g.push(a), i.all(g).then(f).then(function(e) {
                        return d
                    })
                }
                var S = i.reject(new Error("transition superseded")),
                    _ = i.reject(new Error("transition prevented")),
                    k = i.reject(new Error("transition aborted")),
                    T = i.reject(new Error("transition failed"));
                return w.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, x = {
                    params: {},
                    current: w.self,
                    $current: w,
                    transition: null
                }, x.reload = function(e) {
                    return x.transitionTo(x.current, p, {
                        reload: e || !0,
                        inherit: !1,
                        notify: !0
                    })
                }, x.go = function(e, t, n) {
                    return x.transitionTo(e, t, j({
                        inherit: !0,
                        relative: x.$current
                    }, n))
                }, x.transitionTo = function(t, n, o) {
                    n = n || {}, o = j({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, o || {});
                    var a, l = x.$current,
                        c = x.params,
                        h = l.path,
                        m = f(t, o.relative),
                        $ = n["#"];
                    if (!F(m)) {
                        var v = {
                                to: t,
                                toParams: n,
                                options: o
                            },
                            A = N(v, l.self, c, o);
                        if (A) return A;
                        if (t = v.to, n = v.toParams, o = v.options, m = f(t, o.relative), !F(m)) {
                            if (!o.relative) throw new Error("No such state '" + t + "'");
                            throw new Error("Could not resolve '" + t + "' from state '" + o.relative + "'")
                        }
                    }
                    if (m[E]) throw new Error("Cannot transition to abstract state '" + t + "'");
                    if (o.inherit && (n = d(p, n || {}, x.$current, m)), !m.params.$$validates(n)) return T;
                    n = m.params.$$values(n), t = m;
                    var C = t.path,
                        k = 0,
                        I = C[k],
                        P = w.locals,
                        M = [];
                    if (o.reload) {
                        if (O(o.reload) || D(o.reload)) {
                            if (D(o.reload) && !o.reload.name) throw new Error("Invalid reload state object");
                            var R = o.reload === !0 ? h[0] : f(o.reload);
                            if (o.reload && !R) throw new Error("No such reload state '" + (O(o.reload) ? o.reload : o.reload.name) + "'");
                            for (; I && I === h[k] && I !== R;) P = M[k] = I.locals, k++, I = C[k]
                        }
                    } else
                        for (; I && I === h[k] && I.ownParams.$$equals(n, c);) P = M[k] = I.locals, k++, I = C[k];
                    if (b(t, n, l, c, P, o)) return $ && (n["#"] = $), x.params = n, q(x.params, p), o.location && t.navigable && t.navigable.url && (g.push(t.navigable.url, n, {
                        $$avoidResync: !0,
                        replace: "replace" === o.location
                    }), g.update(!0)), x.transition = null, i.when(x.current);
                    if (n = u(t.params.$$keys(), n || {}), o.notify && e.$broadcast("$stateChangeStart", t.self, n, l.self, c).defaultPrevented) return e.$broadcast("$stateChangeCancel", t.self, n, l.self, c), g.update(), _;
                    for (var L = i.when(P), U = k; U < C.length; U++, I = C[U]) P = M[U] = r(P), L = y(I, n, I === t, L, P, o);
                    var B = x.transition = L.then(function() {
                        var r, i, a;
                        if (x.transition !== B) return S;
                        for (r = h.length - 1; r >= k; r--) a = h[r], a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals), a.locals = null;
                        for (r = k; r < C.length; r++) i = C[r], i.locals = M[r], i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
                        return $ && (n["#"] = $), x.transition !== B ? S : (x.$current = t, x.current = t.self, x.params = n, q(x.params, p), x.transition = null, o.location && t.navigable && g.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: "replace" === o.location
                        }), o.notify && e.$broadcast("$stateChangeSuccess", t.self, n, l.self, c), g.update(!0), x.current)
                    }, function(r) {
                        return x.transition !== B ? S : (x.transition = null, a = e.$broadcast("$stateChangeError", t.self, n, l.self, c, r), a.defaultPrevented || g.update(), i.reject(r))
                    });
                    return B
                }, x.is = function(e, t, r) {
                    r = j({
                        relative: x.$current
                    }, r || {});
                    var i = f(e, r.relative);
                    return F(i) ? x.$current !== i ? !1 : t ? l(i.params.$$values(t), p) : !0 : n;
                }, x.includes = function(e, t, r) {
                    if (r = j({
                            relative: x.$current
                        }, r || {}), O(e) && $(e)) {
                        if (!v(e)) return !1;
                        e = x.$current.name
                    }
                    var i = f(e, r.relative);
                    return F(i) ? F(x.$current.includes[i.name]) ? t ? l(i.params.$$values(t), p, a(t)) : !0 : !1 : n
                }, x.href = function(e, t, r) {
                    r = j({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: x.$current
                    }, r || {});
                    var i = f(e, r.relative);
                    if (!F(i)) return null;
                    r.inherit && (t = d(p, t || {}, x.$current, i));
                    var o = i && r.lossy ? i.navigable : i;
                    return o && o.url !== n && null !== o.url ? g.href(o.url, u(i.params.$$keys().concat("#"), t || {}), {
                        absolute: r.absolute
                    }) : null
                }, x.get = function(e, t) {
                    if (0 === arguments.length) return h(a(C), function(e) {
                        return C[e].self
                    });
                    var n = f(e, t || x.$current);
                    return n && n.self ? n.self : null
                }, x
            }

            function b(e, t, n, r, i, o) {
                function a(e, t, n) {
                    function r(t) {
                        return "search" != e.params[t].location
                    }
                    var i = e.params.$$keys().filter(r),
                        o = c.apply({}, [e.params].concat(i)),
                        a = new U.ParamSet(o);
                    return a.$$equals(t, n)
                }
                return !o.reload && e === n && (i === n.locals || e.self.reloadOnSearch === !1 && a(n, r, t)) ? !0 : void 0
            }
            var w, x, C = {},
                S = {},
                E = "abstract",
                _ = {
                    parent: function(e) {
                        if (F(e.parent) && e.parent) return f(e.parent);
                        var t = /^(.+)\.[^.]+$/.exec(e.name);
                        return t ? f(t[1]) : w
                    },
                    data: function(e) {
                        return e.parent && e.parent.data && (e.data = e.self.data = j({}, e.parent.data, e.data)), e.data
                    },
                    url: function(e) {
                        var t = e.url,
                            n = {
                                params: e.params || {}
                            };
                        if (O(t)) return "^" == t.charAt(0) ? i.compile(t.substring(1), n) : (e.parent.navigable || w).url.concat(t, n);
                        if (!t || i.isMatcher(t)) return t;
                        throw new Error("Invalid url '" + t + "' in state '" + e + "'")
                    },
                    navigable: function(e) {
                        return e.url ? e : e.parent ? e.parent.navigable : null
                    },
                    ownParams: function(e) {
                        var t = e.url && e.url.params || new U.ParamSet;
                        return L(e.params || {}, function(e, n) {
                            t[n] || (t[n] = new U.Param(n, null, e, "config"))
                        }), t
                    },
                    params: function(e) {
                        return e.parent && e.parent.params ? j(e.parent.params.$$new(), e.ownParams) : new U.ParamSet
                    },
                    views: function(e) {
                        var t = {};
                        return L(F(e.views) ? e.views : {
                            "": e
                        }, function(n, r) {
                            r.indexOf("@") < 0 && (r += "@" + e.parent.name), t[r] = n
                        }), t
                    },
                    path: function(e) {
                        return e.parent ? e.parent.path.concat(e) : []
                    },
                    includes: function(e) {
                        var t = e.parent ? j({}, e.parent.includes) : {};
                        return t[e.name] = !0, t
                    },
                    $delegates: {}
                };
            w = m({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), w.navigable = null, this.decorator = A, this.state = N, this.$get = y, y.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function b() {
            function e(e, t) {
                return {
                    load: function(n, r) {
                        var i, o = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return r = j(o, r), r.view && (i = t.fromConfig(r.view, r.params, r.locals)), i && r.notify && e.$broadcast("$viewContentLoading", r), i
                    }
                }
            }
            this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
        }

        function w() {
            var e = !1;
            this.useAnchorScroll = function() {
                e = !0
            }, this.$get = ["$anchorScroll", "$timeout", function(t, n) {
                return e ? t : function(e) {
                    return n(function() {
                        e[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
        }

        function x(e, n, r, i) {
            function o() {
                return n.has ? function(e) {
                    return n.has(e) ? n.get(e) : null
                } : function(e) {
                    try {
                        return n.get(e)
                    } catch (t) {
                        return null
                    }
                }
            }

            function a(e, t) {
                var n = function() {
                    return {
                        enter: function(e, t, n) {
                            t.after(e), n()
                        },
                        leave: function(e, t) {
                            e.remove(), t()
                        }
                    }
                };
                if (l) return {
                    enter: function(e, t, n) {
                        var r = l.enter(e, null, t, n);
                        r && r.then && r.then(n)
                    },
                    leave: function(e, t) {
                        var n = l.leave(e, t);
                        n && n.then && n.then(t)
                    }
                };
                if (d) {
                    var r = d && d(t, e);
                    return {
                        enter: function(e, t, n) {
                            r.enter(e, null, t), n()
                        },
                        leave: function(e, t) {
                            r.leave(e), t()
                        }
                    }
                }
                return n()
            }
            var s = o(),
                d = s("$animator"),
                l = s("$animate"),
                u = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function(n, o, s) {
                        return function(n, o, d) {
                            function l() {
                                c && (c.remove(), c = null), p && (p.$destroy(), p = null), f && ($.leave(f, function() {
                                    c = null
                                }), c = f, f = null)
                            }

                            function u(a) {
                                var u, c = S(n, d, o, i),
                                    v = c && e.$current && e.$current.locals[c];
                                if (a || v !== h) {
                                    u = n.$new(), h = e.$current.locals[c];
                                    var A = s(u, function(e) {
                                        $.enter(e, o, function() {
                                            p && p.$emit("$viewContentAnimationEnded"), (t.isDefined(m) && !m || n.$eval(m)) && r(e)
                                        }), l()
                                    });
                                    f = A, p = u, p.$emit("$viewContentLoaded"), p.$eval(g)
                                }
                            }
                            var c, f, p, h, g = d.onload || "",
                                m = d.autoscroll,
                                $ = a(d, n);
                            n.$on("$stateChangeSuccess", function() {
                                u(!1)
                            }), n.$on("$viewContentLoading", function() {
                                u(!1)
                            }), u(!0)
                        }
                    }
                };
            return u
        }

        function C(e, t, n, r) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(i) {
                    var o = i.html();
                    return function(i, a, s) {
                        var d = n.$current,
                            l = S(i, s, a, r),
                            u = d && d.locals[l];
                        if (u) {
                            a.data("$uiView", {
                                name: l,
                                state: u.$$state
                            }), a.html(u.$template ? u.$template : o);
                            var c = e(a.contents());
                            if (u.$$controller) {
                                u.$scope = i, u.$element = a;
                                var f = t(u.$$controller, u);
                                u.$$controllerAs && (i[u.$$controllerAs] = f), a.data("$ngControllerController", f), a.children().data("$ngControllerController", f)
                            }
                            c(i)
                        }
                    }
                }
            }
        }

        function S(e, t, n, r) {
            var i = r(t.uiView || t.name || "")(e),
                o = n.inheritedData("$uiView");
            return i.indexOf("@") >= 0 ? i : i + "@" + (o ? o.state.name : "")
        }

        function E(e, t) {
            var n, r = e.match(/^\s*({[^}]*})\s*$/);
            if (r && (e = t + "(" + r[1] + ")"), n = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error("Invalid state ref '" + e + "'");
            return {
                state: n[1],
                paramExpr: n[3] || null
            }
        }

        function _(e) {
            var t = e.parent().inheritedData("$uiView");
            return t && t.state && t.state.name ? t.state : void 0
        }

        function k(e, n) {
            var r = ["location", "inherit", "reload", "absolute"];
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(i, o, a, s) {
                    var d = E(a.uiSref, e.current.name),
                        l = null,
                        u = _(o) || e.$current,
                        c = "[object SVGAnimatedString]" === Object.prototype.toString.call(o.prop("href")) ? "xlink:href" : "href",
                        f = null,
                        p = "A" === o.prop("tagName").toUpperCase(),
                        h = "FORM" === o[0].nodeName,
                        g = h ? "action" : c,
                        m = !0,
                        $ = {
                            relative: u,
                            inherit: !0
                        },
                        v = i.$eval(a.uiSrefOpts) || {};
                    t.forEach(r, function(e) {
                        e in v && ($[e] = v[e])
                    });
                    var A = function(n) {
                        if (n && (l = t.copy(n)), m) {
                            f = e.href(d.state, l, $);
                            var r = s[1] || s[0];
                            return r && r.$$addStateInfo(d.state, l), null === f ? (m = !1, !1) : void a.$set(g, f)
                        }
                    };
                    d.paramExpr && (i.$watch(d.paramExpr, function(e, t) {
                        e !== l && A(e)
                    }, !0), l = t.copy(i.$eval(d.paramExpr))), A(), h || o.bind("click", function(t) {
                        var r = t.which || t.button;
                        if (!(r > 1 || t.ctrlKey || t.metaKey || t.shiftKey || o.attr("target"))) {
                            var i = n(function() {
                                e.go(d.state, l, $)
                            });
                            t.preventDefault();
                            var a = p && !f ? 1 : 0;
                            t.preventDefault = function() {
                                a-- <= 0 && n.cancel(i)
                            }
                        }
                    })
                }
            }
        }

        function T(e, t, n) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", function(t, r, i) {
                    function o() {
                        a() ? r.addClass(d) : r.removeClass(d)
                    }

                    function a() {
                        for (var e = 0; e < l.length; e++)
                            if (s(l[e].state, l[e].params)) return !0;
                        return !1
                    }

                    function s(t, n) {
                        return "undefined" != typeof i.uiSrefActiveEq ? e.is(t.name, n) : e.includes(t.name, n)
                    }
                    var d, l = [];
                    d = n(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(t), this.$$addStateInfo = function(t, n) {
                        var i = e.get(t, _(r));
                        l.push({
                            state: i || {
                                name: t
                            },
                            params: n
                        }), o()
                    }, t.$on("$stateChangeSuccess", o)
                }]
            }
        }

        function I(e) {
            var t = function(t) {
                return e.is(t)
            };
            return t.$stateful = !0, t
        }

        function P(e) {
            var t = function(t) {
                return e.includes(t)
            };
            return t.$stateful = !0, t
        }
        var F = t.isDefined,
            M = t.isFunction,
            O = t.isString,
            D = t.isObject,
            R = t.isArray,
            L = t.forEach,
            j = t.extend,
            q = t.copy;
        t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), g.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", g), m.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", m);
        var U;
        $.prototype.concat = function(e, t) {
            var n = {
                caseInsensitive: U.caseInsensitive(),
                strict: U.strictMode(),
                squash: U.defaultSquashPolicy()
            };
            return new $(this.sourcePath + e + this.sourceSearch, j(n, t), this)
        }, $.prototype.toString = function() {
            return this.source
        }, $.prototype.exec = function(e, t) {
            function n(e) {
                function t(e) {
                    return e.split("").reverse().join("")
                }

                function n(e) {
                    return e.replace(/\\-/g, "-")
                }
                var r = t(e).split(/-(?!\\)/),
                    i = h(r, t);
                return h(i, n).reverse()
            }
            var r = this.regexp.exec(e);
            if (!r) return null;
            t = t || {};
            var i, o, a, s = this.parameters(),
                d = s.length,
                l = this.segments.length - 1,
                u = {};
            if (l !== r.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            for (i = 0; l > i; i++) {
                a = s[i];
                var c = this.params[a],
                    f = r[i + 1];
                for (o = 0; o < c.replace; o++) c.replace[o].from === f && (f = c.replace[o].to);
                f && c.array === !0 && (f = n(f)), u[a] = c.value(f)
            }
            for (; d > i; i++) a = s[i], u[a] = this.params[a].value(t[a]);
            return u
        }, $.prototype.parameters = function(e) {
            return F(e) ? this.params[e] || null : this.$$paramNames
        }, $.prototype.validates = function(e) {
            return this.params.$$validates(e)
        }, $.prototype.format = function(e) {
            function t(e) {
                return encodeURIComponent(e).replace(/-/g, function(e) {
                    return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            e = e || {};
            var n = this.segments,
                r = this.parameters(),
                i = this.params;
            if (!this.validates(e)) return null;
            var o, a = !1,
                s = n.length - 1,
                d = r.length,
                l = n[0];
            for (o = 0; d > o; o++) {
                var u = s > o,
                    c = r[o],
                    f = i[c],
                    p = f.value(e[c]),
                    g = f.isOptional && f.type.equals(f.value(), p),
                    m = g ? f.squash : !1,
                    $ = f.type.encode(p);
                if (u) {
                    var v = n[o + 1];
                    if (m === !1) null != $ && (l += R($) ? h($, t).join("-") : encodeURIComponent($)), l += v;
                    else if (m === !0) {
                        var A = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        l += v.match(A)[1]
                    } else O(m) && (l += m + v)
                } else {
                    if (null == $ || g && m !== !1) continue;
                    R($) || ($ = [$]), $ = h($, encodeURIComponent).join("&" + c + "="), l += (a ? "&" : "?") + (c + "=" + $), a = !0
                }
            }
            return l
        }, v.prototype.is = function(e, t) {
            return !0
        }, v.prototype.encode = function(e, t) {
            return e
        }, v.prototype.decode = function(e, t) {
            return e
        }, v.prototype.equals = function(e, t) {
            return e == t
        }, v.prototype.$subPattern = function() {
            var e = this.pattern.toString();
            return e.substr(1, e.length - 2)
        }, v.prototype.pattern = /.*/, v.prototype.toString = function() {
            return "{Type:" + this.name + "}"
        }, v.prototype.$normalize = function(e) {
            return this.is(e) ? e : this.decode(e)
        }, v.prototype.$asArray = function(e, t) {
            function r(e, t) {
                function r(e, t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }

                function i(e) {
                    return R(e) ? e : F(e) ? [e] : []
                }

                function o(e) {
                    switch (e.length) {
                        case 0:
                            return n;
                        case 1:
                            return "auto" === t ? e[0] : e;
                        default:
                            return e
                    }
                }

                function a(e) {
                    return !e
                }

                function s(e, t) {
                    return function(n) {
                        n = i(n);
                        var r = h(n, e);
                        return t === !0 ? 0 === p(r, a).length : o(r)
                    }
                }

                function d(e) {
                    return function(t, n) {
                        var r = i(t),
                            o = i(n);
                        if (r.length !== o.length) return !1;
                        for (var a = 0; a < r.length; a++)
                            if (!e(r[a], o[a])) return !1;
                        return !0
                    }
                }
                this.encode = s(r(e, "encode")), this.decode = s(r(e, "decode")), this.is = s(r(e, "is"), !0), this.equals = d(r(e, "equals")), this.pattern = e.pattern, this.$normalize = s(r(e, "$normalize")), this.name = e.name, this.$arrayMode = t
            }
            if (!e) return this;
            if ("auto" === e && !t) throw new Error("'auto' array mode is for query parameters only");
            return new r(this, e)
        }, t.module("ui.router.util").provider("$urlMatcherFactory", A), t.module("ui.router.util").run(["$urlMatcherFactory", function(e) {}]), N.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", N), y.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").value("$stateParams", {}).provider("$state", y), b.$inject = [], t.module("ui.router.state").provider("$view", b), t.module("ui.router.state").provider("$uiViewScroll", w), x.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], C.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", x), t.module("ui.router.state").directive("uiView", C), k.$inject = ["$state", "$timeout"], T.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", k).directive("uiSrefActive", T).directive("uiSrefActiveEq", T), I.$inject = ["$state"], P.$inject = ["$state"], t.module("ui.router.state").filter("isState", I).filter("includedByState", P)
    }(window, window.angular),
    function() {
        var e = angular.module("restangular", []);
        e.provider("Restangular", function() {
            var e = {};
            e.init = function(e, t) {
                function n(e, t, n, r) {
                    var i = {};
                    return _.each(_.keys(r), function(o) {
                        var a = r[o];
                        a.params = _.extend({}, a.params, e.defaultRequestParams[a.method.toLowerCase()]), _.isEmpty(a.params) && delete a.params, e.isSafe(a.method) ? i[o] = function() {
                            return t(_.extend(a, {
                                url: n
                            }))
                        } : i[o] = function(e) {
                            return t(_.extend(a, {
                                url: n,
                                data: e
                            }))
                        }
                    }), i
                }
                e.configuration = t;
                var r = ["get", "head", "options", "trace", "getlist"];
                t.isSafe = function(e) {
                    return _.contains(r, e.toLowerCase())
                };
                var i = /^https?:\/\//i;
                t.isAbsoluteUrl = function(e) {
                    return _.isUndefined(t.absoluteUrl) || _.isNull(t.absoluteUrl) ? e && i.test(e) : t.absoluteUrl
                }, t.absoluteUrl = _.isUndefined(t.absoluteUrl) ? !0 : t.absoluteUrl, e.setSelfLinkAbsoluteUrl = function(e) {
                    t.absoluteUrl = e
                }, t.baseUrl = _.isUndefined(t.baseUrl) ? "" : t.baseUrl, e.setBaseUrl = function(e) {
                    return t.baseUrl = /\/$/.test(e) ? e.substring(0, e.length - 1) : e, this
                }, t.extraFields = t.extraFields || [], e.setExtraFields = function(e) {
                    return t.extraFields = e, this
                }, t.defaultHttpFields = t.defaultHttpFields || {}, e.setDefaultHttpFields = function(e) {
                    return t.defaultHttpFields = e, this
                }, t.withHttpValues = function(e, n) {
                    return _.defaults(n, e, t.defaultHttpFields)
                }, t.encodeIds = _.isUndefined(t.encodeIds) ? !0 : t.encodeIds, e.setEncodeIds = function(e) {
                    t.encodeIds = e
                }, t.defaultRequestParams = t.defaultRequestParams || {
                    get: {},
                    post: {},
                    put: {},
                    remove: {},
                    common: {}
                }, e.setDefaultRequestParams = function(e, n) {
                    var r = [],
                        i = n || e;
                    return _.isUndefined(n) ? r.push("common") : _.isArray(e) ? r = e : r.push(e), _.each(r, function(e) {
                        t.defaultRequestParams[e] = i
                    }), this
                }, e.requestParams = t.defaultRequestParams, t.defaultHeaders = t.defaultHeaders || {}, e.setDefaultHeaders = function(n) {
                    return t.defaultHeaders = n, e.defaultHeaders = t.defaultHeaders, this
                }, e.defaultHeaders = t.defaultHeaders, t.methodOverriders = t.methodOverriders || [], e.setMethodOverriders = function(e) {
                    var n = _.extend([], e);
                    return t.isOverridenMethod("delete", n) && n.push("remove"), t.methodOverriders = n, this
                }, t.jsonp = _.isUndefined(t.jsonp) ? !1 : t.jsonp, e.setJsonp = function(e) {
                    t.jsonp = e
                }, t.isOverridenMethod = function(e, n) {
                    var r = n || t.methodOverriders;
                    return !_.isUndefined(_.find(r, function(t) {
                        return t.toLowerCase() === e.toLowerCase()
                    }))
                }, t.urlCreator = t.urlCreator || "path", e.setUrlCreator = function(e) {
                    if (!_.has(t.urlCreatorFactory, e)) throw new Error("URL Path selected isn't valid");
                    return t.urlCreator = e, this
                }, t.restangularFields = t.restangularFields || {
                    id: "id",
                    route: "route",
                    parentResource: "parentResource",
                    restangularCollection: "restangularCollection",
                    cannonicalId: "__cannonicalId",
                    etag: "restangularEtag",
                    selfLink: "href",
                    get: "get",
                    getList: "getList",
                    put: "put",
                    post: "post",
                    remove: "remove",
                    head: "head",
                    trace: "trace",
                    options: "options",
                    patch: "patch",
                    getRestangularUrl: "getRestangularUrl",
                    getRequestedUrl: "getRequestedUrl",
                    putElement: "putElement",
                    addRestangularMethod: "addRestangularMethod",
                    getParentList: "getParentList",
                    clone: "clone",
                    ids: "ids",
                    httpConfig: "_$httpConfig",
                    reqParams: "reqParams",
                    one: "one",
                    all: "all",
                    several: "several",
                    oneUrl: "oneUrl",
                    allUrl: "allUrl",
                    customPUT: "customPUT",
                    customPOST: "customPOST",
                    customDELETE: "customDELETE",
                    customGET: "customGET",
                    customGETLIST: "customGETLIST",
                    customOperation: "customOperation",
                    doPUT: "doPUT",
                    doPOST: "doPOST",
                    doDELETE: "doDELETE",
                    doGET: "doGET",
                    doGETLIST: "doGETLIST",
                    fromServer: "fromServer",
                    withConfig: "withConfig",
                    withHttpConfig: "withHttpConfig",
                    singleOne: "singleOne",
                    plain: "plain",
                    save: "save",
                    restangularized: "restangularized"
                }, e.setRestangularFields = function(e) {
                    return t.restangularFields = _.extend(t.restangularFields, e), this
                }, t.isRestangularized = function(e) {
                    return !!e[t.restangularFields.restangularized]
                }, t.setFieldToElem = function(e, t, n) {
                    var r = e.split("."),
                        i = t;
                    return _.each(_.initial(r), function(e) {
                        i[e] = {}, i = i[e]
                    }), i[_.last(r)] = n, this
                }, t.getFieldFromElem = function(e, t) {
                    var n = e.split("."),
                        r = t;
                    return _.each(n, function(e) {
                        r && (r = r[e])
                    }), angular.copy(r)
                }, t.setIdToElem = function(e, n) {
                    return t.setFieldToElem(t.restangularFields.id, e, n), this
                }, t.getIdFromElem = function(e) {
                    return t.getFieldFromElem(t.restangularFields.id, e)
                }, t.isValidId = function(e) {
                    return "" !== e && !_.isUndefined(e) && !_.isNull(e)
                }, t.setUrlToElem = function(e, n) {
                    return t.setFieldToElem(t.restangularFields.selfLink, e, n), this
                }, t.getUrlFromElem = function(e) {
                    return t.getFieldFromElem(t.restangularFields.selfLink, e)
                }, t.useCannonicalId = _.isUndefined(t.useCannonicalId) ? !1 : t.useCannonicalId, e.setUseCannonicalId = function(e) {
                    return t.useCannonicalId = e, this
                }, t.getCannonicalIdFromElem = function(e) {
                    var n = e[t.restangularFields.cannonicalId],
                        r = t.isValidId(n) ? n : t.getIdFromElem(e);
                    return r
                }, t.responseInterceptors = t.responseInterceptors || [], t.defaultResponseInterceptor = function(e) {
                    return e
                }, t.responseExtractor = function(e, n, r, i, o, a) {
                    var s = angular.copy(t.responseInterceptors);
                    s.push(t.defaultResponseInterceptor);
                    var d = e;
                    return _.each(s, function(e) {
                        d = e(d, n, r, i, o, a)
                    }), d
                }, e.addResponseInterceptor = function(e) {
                    return t.responseInterceptors.push(e), this
                }, t.errorInterceptors = t.errorInterceptors || [], e.addErrorInterceptor = function(e) {
                    return t.errorInterceptors.push(e), this
                }, e.setResponseInterceptor = e.addResponseInterceptor, e.setResponseExtractor = e.addResponseInterceptor, e.setErrorInterceptor = e.addErrorInterceptor, t.requestInterceptors = t.requestInterceptors || [], t.defaultInterceptor = function(e, t, n, r, i, o, a) {
                    return {
                        element: e,
                        headers: i,
                        params: o,
                        httpConfig: a
                    }
                }, t.fullRequestInterceptor = function(e, n, r, i, o, a, s) {
                    var d = angular.copy(t.requestInterceptors),
                        l = t.defaultInterceptor(e, n, r, i, o, a, s);
                    return _.reduce(d, function(e, t) {
                        return _.extend(e, t(e.element, n, r, i, e.headers, e.params, e.httpConfig))
                    }, l)
                }, e.addRequestInterceptor = function(e) {
                    return t.requestInterceptors.push(function(t, n, r, i, o, a, s) {
                        return {
                            headers: o,
                            params: a,
                            element: e(t, n, r, i),
                            httpConfig: s
                        }
                    }), this
                }, e.setRequestInterceptor = e.addRequestInterceptor, e.addFullRequestInterceptor = function(e) {
                    return t.requestInterceptors.push(e), this
                }, e.setFullRequestInterceptor = e.addFullRequestInterceptor, t.onBeforeElemRestangularized = t.onBeforeElemRestangularized || function(e) {
                    return e
                }, e.setOnBeforeElemRestangularized = function(e) {
                    return t.onBeforeElemRestangularized = e, this
                }, e.setRestangularizePromiseInterceptor = function(e) {
                    return t.restangularizePromiseInterceptor = e, this
                }, t.onElemRestangularized = t.onElemRestangularized || function(e) {
                    return e
                }, e.setOnElemRestangularized = function(e) {
                    return t.onElemRestangularized = e, this
                }, t.shouldSaveParent = t.shouldSaveParent || function() {
                    return !0
                }, e.setParentless = function(e) {
                    return _.isArray(e) ? t.shouldSaveParent = function(t) {
                        return !_.contains(e, t)
                    } : _.isBoolean(e) && (t.shouldSaveParent = function() {
                        return !e
                    }), this
                }, t.suffix = _.isUndefined(t.suffix) ? null : t.suffix, e.setRequestSuffix = function(e) {
                    return t.suffix = e, this
                }, t.transformers = t.transformers || {}, e.addElementTransformer = function(n, r, i) {
                    var o = null,
                        a = null;
                    2 === arguments.length ? a = r : (a = i, o = r);
                    var s = t.transformers[n];
                    return s || (s = t.transformers[n] = []), s.push(function(e, t) {
                        return _.isNull(o) || e === o ? a(t) : t
                    }), e
                }, e.extendCollection = function(t, n) {
                    return e.addElementTransformer(t, !0, n)
                }, e.extendModel = function(t, n) {
                    return e.addElementTransformer(t, !1, n)
                }, t.transformElem = function(e, n, r, i, o) {
                    if (!o && !t.transformLocalElements && !e[t.restangularFields.fromServer]) return e;
                    var a = t.transformers[r],
                        s = e;
                    return a && _.each(a, function(e) {
                        s = e(n, s)
                    }), t.onElemRestangularized(s, n, r, i)
                }, t.transformLocalElements = _.isUndefined(t.transformLocalElements) ? !1 : t.transformLocalElements, e.setTransformOnlyServerElements = function(e) {
                    t.transformLocalElements = !e
                }, t.fullResponse = _.isUndefined(t.fullResponse) ? !1 : t.fullResponse, e.setFullResponse = function(e) {
                    return t.fullResponse = e, this
                }, t.urlCreatorFactory = {};
                var o = function() {};
                o.prototype.setConfig = function(e) {
                    return this.config = e, this
                }, o.prototype.parentsArray = function(e) {
                    for (var t = []; e;) t.push(e), e = e[this.config.restangularFields.parentResource];
                    return t.reverse()
                }, o.prototype.resource = function(e, r, i, o, a, s, d, l) {
                    var u = _.defaults(a || {}, this.config.defaultRequestParams.common),
                        c = _.defaults(o || {}, this.config.defaultHeaders);
                    d && (t.isSafe(l) ? c["If-None-Match"] = d : c["If-Match"] = d);
                    var f = this.base(e);
                    if (s) {
                        var p = "";
                        /\/$/.test(f) || (p += "/"), p += s, f += p
                    }
                    return this.config.suffix && -1 === f.indexOf(this.config.suffix, f.length - this.config.suffix.length) && !this.config.getUrlFromElem(e) && (f += this.config.suffix), e[this.config.restangularFields.httpConfig] = void 0, n(this.config, r, f, {
                        getList: this.config.withHttpValues(i, {
                            method: "GET",
                            params: u,
                            headers: c
                        }),
                        get: this.config.withHttpValues(i, {
                            method: "GET",
                            params: u,
                            headers: c
                        }),
                        jsonp: this.config.withHttpValues(i, {
                            method: "jsonp",
                            params: u,
                            headers: c
                        }),
                        put: this.config.withHttpValues(i, {
                            method: "PUT",
                            params: u,
                            headers: c
                        }),
                        post: this.config.withHttpValues(i, {
                            method: "POST",
                            params: u,
                            headers: c
                        }),
                        remove: this.config.withHttpValues(i, {
                            method: "DELETE",
                            params: u,
                            headers: c
                        }),
                        head: this.config.withHttpValues(i, {
                            method: "HEAD",
                            params: u,
                            headers: c
                        }),
                        trace: this.config.withHttpValues(i, {
                            method: "TRACE",
                            params: u,
                            headers: c
                        }),
                        options: this.config.withHttpValues(i, {
                            method: "OPTIONS",
                            params: u,
                            headers: c
                        }),
                        patch: this.config.withHttpValues(i, {
                            method: "PATCH",
                            params: u,
                            headers: c
                        })
                    })
                };
                var a = function() {};
                a.prototype = new o, a.prototype.normalizeUrl = function(e) {
                    var t = /(http[s]?:\/\/)?(.*)?/.exec(e);
                    return t[2] = t[2].replace(/[\\\/]+/g, "/"), "undefined" != typeof t[1] ? t[1] + t[2] : t[2]
                }, a.prototype.base = function(e) {
                    var n = this;
                    return _.reduce(this.parentsArray(e), function(e, r) {
                        var i, o = n.config.getUrlFromElem(r);
                        if (o) {
                            if (n.config.isAbsoluteUrl(o)) return o;
                            i = o
                        } else if (i = r[n.config.restangularFields.route], r[n.config.restangularFields.restangularCollection]) {
                            var a = r[n.config.restangularFields.ids];
                            a && (i += "/" + a.join(","))
                        } else {
                            var s;
                            s = n.config.useCannonicalId ? n.config.getCannonicalIdFromElem(r) : n.config.getIdFromElem(r), t.isValidId(s) && !r.singleOne && (i += "/" + (n.config.encodeIds ? encodeURIComponent(s) : s))
                        }
                        return e = e.replace(/\/$/, "") + "/" + i, n.normalizeUrl(e)
                    }, this.config.baseUrl)
                }, a.prototype.fetchUrl = function(e, t) {
                    var n = this.base(e);
                    return t && (n += "/" + t), n
                }, a.prototype.fetchRequestedUrl = function(e, n) {
                    function r(e) {
                        var t = [];
                        for (var n in e) e.hasOwnProperty(n) && t.push(n);
                        return t.sort()
                    }

                    function i(e, t, n) {
                        for (var i = r(e), o = 0; o < i.length; o++) t.call(n, e[i[o]], i[o]);
                        return i
                    }

                    function o(e, t) {
                        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
                    }
                    var a = this.fetchUrl(e, n),
                        s = e[t.restangularFields.reqParams];
                    if (!s) return a + (this.config.suffix || "");
                    var d = [];
                    return i(s, function(e, t) {
                        null !== e && void 0 !== e && (angular.isArray(e) || (e = [e]), angular.forEach(e, function(e) {
                            angular.isObject(e) && (e = angular.toJson(e)), d.push(o(t) + "=" + o(e))
                        }))
                    }), a + (this.config.suffix || "") + (-1 === a.indexOf("?") ? "?" : "&") + d.join("&")
                }, t.urlCreatorFactory.path = a
            };
            var t = {};
            e.init(this, t), this.$get = ["$http", "$q", function(n, r) {
                function i(t) {
                    function o(e, n, r, i, o) {
                        if (n[t.restangularFields.route] = r, n[t.restangularFields.getRestangularUrl] = _.bind(B.fetchUrl, B, n), n[t.restangularFields.getRequestedUrl] = _.bind(B.fetchRequestedUrl, B, n), n[t.restangularFields.addRestangularMethod] = _.bind(L, n), n[t.restangularFields.clone] = _.bind($, n, n), n[t.restangularFields.reqParams] = _.isEmpty(i) ? null : i, n[t.restangularFields.withHttpConfig] = _.bind(C, n), n[t.restangularFields.plain] = _.bind(g, n, n), n[t.restangularFields.restangularized] = !0, n[t.restangularFields.one] = _.bind(a, n, n), n[t.restangularFields.all] = _.bind(s, n, n), n[t.restangularFields.several] = _.bind(d, n, n), n[t.restangularFields.oneUrl] = _.bind(l, n, n), n[t.restangularFields.allUrl] = _.bind(u, n, n), n[t.restangularFields.fromServer] = !!o, e && t.shouldSaveParent(r)) {
                            var c = t.getIdFromElem(e),
                                f = t.getUrlFromElem(e),
                                p = _.union(_.values(_.pick(t.restangularFields, ["route", "singleOne", "parentResource"])), t.extraFields),
                                h = _.pick(e, p);
                            t.isValidId(c) && t.setIdToElem(h, c, r), t.isValidId(f) && t.setUrlToElem(h, f, r), n[t.restangularFields.parentResource] = h
                        } else n[t.restangularFields.parentResource] = null;
                        return n
                    }

                    function a(e, n, r, i) {
                        var o;
                        if (_.isNumber(n) || _.isNumber(e)) throw o = "You're creating a Restangular entity with the number ", o += "instead of the route or the parent. For example, you can't call .one(12).", new Error(o);
                        if (_.isUndefined(n)) throw o = "You're creating a Restangular entity either without the path. ", o += "For example you can't call .one(). Please check if your arguments are valid.", new Error(o);
                        var a = {};
                        return t.setIdToElem(a, r, n), t.setFieldToElem(t.restangularFields.singleOne, a, i), v(e, a, n, !1)
                    }

                    function s(e, t) {
                        return A(e, [], t, !1)
                    }

                    function d(e, n) {
                        var r = [];
                        return r[t.restangularFields.ids] = Array.prototype.splice.call(arguments, 2), A(e, r, n, !1)
                    }

                    function l(e, n, r) {
                        if (!n) throw new Error("Route is mandatory when creating new Restangular objects.");
                        var i = {};
                        return t.setUrlToElem(i, r, n), v(e, i, n, !1)
                    }

                    function u(e, n, r) {
                        if (!n) throw new Error("Route is mandatory when creating new Restangular objects.");
                        var i = {};
                        return t.setUrlToElem(i, r, n), A(e, i, n, !1)
                    }

                    function c(e, n, r) {
                        return e.call = _.bind(f, e), e.get = _.bind(p, e), e[t.restangularFields.restangularCollection] = n, n && (e.push = _.bind(f, e, "push")), e.$object = r, t.restangularizePromiseInterceptor && t.restangularizePromiseInterceptor(e), e
                    }

                    function f(e) {
                        var n = r.defer(),
                            i = arguments,
                            o = {};
                        return this.then(function(t) {
                            var r = Array.prototype.slice.call(i, 1),
                                a = t[e];
                            a.apply(t, r), o = t, n.resolve(t)
                        }), c(n.promise, this[t.restangularFields.restangularCollection], o)
                    }

                    function p(e) {
                        var n = r.defer(),
                            i = {};
                        return this.then(function(t) {
                            i = t[e], n.resolve(i)
                        }), c(n.promise, this[t.restangularFields.restangularCollection], i)
                    }

                    function h(e, n, r, i) {
                        return _.extend(i, r), t.fullResponse ? e.resolve(_.extend(n, {
                            data: r
                        })) : void e.resolve(r)
                    }

                    function g(e) {
                        if (_.isArray(e)) {
                            var n = [];
                            return _.each(e, function(e) {
                                n.push(t.isRestangularized(e) ? g(e) : e)
                            }), n
                        }
                        return _.omit(e, _.values(_.omit(t.restangularFields, "id")))
                    }

                    function m(e) {
                        e[t.restangularFields.customOperation] = _.bind(R, e), _.each(["put", "post", "get", "delete"], function(t) {
                            _.each(["do", "custom"], function(n) {
                                var r, i = "delete" === t ? "remove" : t,
                                    o = n + t.toUpperCase();
                                r = "put" !== i && "post" !== i ? R : function(e, t, n, r, i) {
                                    return _.bind(R, this)(e, n, r, i, t)
                                }, e[o] = _.bind(r, e, i)
                            })
                        }), e[t.restangularFields.customGETLIST] = _.bind(x, e), e[t.restangularFields.doGETLIST] = e[t.restangularFields.customGETLIST]
                    }

                    function $(e, n) {
                        var r = angular.copy(e, n);
                        return v(r[t.restangularFields.parentResource], r, r[t.restangularFields.route], !0)
                    }

                    function v(e, n, r, i, a, s) {
                        var d = t.onBeforeElemRestangularized(n, !1, r),
                            l = o(e, d, r, s, i);
                        return t.useCannonicalId && (l[t.restangularFields.cannonicalId] = t.getIdFromElem(l)), a && (l[t.restangularFields.getParentList] = function() {
                            return a
                        }), l[t.restangularFields.restangularCollection] = !1, l[t.restangularFields.get] = _.bind(k, l), l[t.restangularFields.getList] = _.bind(x, l), l[t.restangularFields.put] = _.bind(I, l), l[t.restangularFields.post] = _.bind(P, l), l[t.restangularFields.remove] = _.bind(T, l), l[t.restangularFields.head] = _.bind(F, l), l[t.restangularFields.trace] = _.bind(M, l), l[t.restangularFields.options] = _.bind(O, l), l[t.restangularFields.patch] = _.bind(D, l), l[t.restangularFields.save] = _.bind(S, l), m(l), t.transformElem(l, !1, r, U, !0)
                    }

                    function A(e, n, r, i, a) {
                        var s = t.onBeforeElemRestangularized(n, !0, r),
                            d = o(e, s, r, a, i);
                        return d[t.restangularFields.restangularCollection] = !0, d[t.restangularFields.post] = _.bind(P, d, null), d[t.restangularFields.remove] = _.bind(T, d), d[t.restangularFields.head] = _.bind(F, d), d[t.restangularFields.trace] = _.bind(M, d), d[t.restangularFields.putElement] = _.bind(b, d), d[t.restangularFields.options] = _.bind(O, d), d[t.restangularFields.patch] = _.bind(D, d), d[t.restangularFields.get] = _.bind(y, d), d[t.restangularFields.getList] = _.bind(x, d, null), m(d), t.transformElem(d, !0, r, U, !0)
                    }

                    function N(e, t, n) {
                        var r = A(e, t, n, !1);
                        return _.each(r, function(t) {
                            v(e, t, n, !1)
                        }), r
                    }

                    function y(e, t, n) {
                        return this.customGET(e.toString(), t, n)
                    }

                    function b(e, n, i) {
                        var o = this,
                            a = this[e],
                            s = r.defer(),
                            d = [];
                        return d = t.transformElem(d, !0, a[t.restangularFields.route], U), a.put(n, i).then(function(t) {
                            var n = $(o);
                            n[e] = t, d = n, s.resolve(n)
                        }, function(e) {
                            s.reject(e)
                        }), c(s.promise, !0, d)
                    }

                    function w(e, n, r, i, o, a) {
                        var s = t.responseExtractor(e, n, r, i, o, a),
                            d = o.headers("ETag");
                        return s && d && (s[t.restangularFields.etag] = d), s
                    }

                    function x(e, i, o) {
                        var a = this,
                            s = r.defer(),
                            d = "getList",
                            l = B.fetchUrl(this, e),
                            u = e || a[t.restangularFields.route],
                            f = t.fullRequestInterceptor(null, d, u, l, o || {}, i || {}, this[t.restangularFields.httpConfig] || {}),
                            p = [];
                        p = t.transformElem(p, !0, u, U);
                        var g = "getList";
                        t.jsonp && (g = "jsonp");
                        var m = function(n) {
                            var r = n.data,
                                i = n.config.params,
                                o = w(r, d, u, l, n, s);
                            if ((_.isUndefined(o) || "" === o) && (o = []), !_.isArray(o)) throw new Error("Response for getList SHOULD be an array and not an object or something else");
                            var c = _.map(o, function(n) {
                                return a[t.restangularFields.restangularCollection] ? v(a[t.restangularFields.parentResource], n, a[t.restangularFields.route], !0, o) : v(a, n, e, !0, o)
                            });
                            c = _.extend(o, c), a[t.restangularFields.restangularCollection] ? h(s, n, A(a[t.restangularFields.parentResource], c, a[t.restangularFields.route], !0, i), p) : h(s, n, A(a, c, e, !0, i), p)
                        };
                        return B.resource(this, n, f.httpConfig, f.headers, f.params, e, this[t.restangularFields.etag], d)[g]().then(m, function(e) {
                            304 === e.status && a[t.restangularFields.restangularCollection] ? h(s, e, a, p) : _.every(t.errorInterceptors, function(t) {
                                return t(e, s, m) !== !1
                            }) && s.reject(e)
                        }), c(s.promise, !0, p)
                    }

                    function C(e) {
                        return this[t.restangularFields.httpConfig] = e, this
                    }

                    function S(e, n) {
                        return this[t.restangularFields.fromServer] ? this[t.restangularFields.put](e, n) : _.bind(E, this)("post", void 0, e, void 0, n)
                    }

                    function E(e, i, o, a, s) {
                        var d = this,
                            l = r.defer(),
                            u = o || {},
                            f = i || this[t.restangularFields.route],
                            p = B.fetchUrl(this, i),
                            m = a || this,
                            $ = m[t.restangularFields.etag] || ("post" !== e ? this[t.restangularFields.etag] : null);
                        _.isObject(m) && t.isRestangularized(m) && (m = g(m));
                        var A = t.fullRequestInterceptor(m, e, f, p, s || {}, u || {}, this[t.restangularFields.httpConfig] || {}),
                            N = {};
                        N = t.transformElem(N, !1, f, U);
                        var y = function(n) {
                                var r = n.data,
                                    i = n.config.params,
                                    o = w(r, e, f, p, n, l);
                                if (o)
                                    if ("post" !== e || d[t.restangularFields.restangularCollection]) {
                                        var a = v(d[t.restangularFields.parentResource], o, d[t.restangularFields.route], !0, null, i);
                                        a[t.restangularFields.singleOne] = d[t.restangularFields.singleOne], h(l, n, a, N)
                                    } else {
                                        var a = v(d[t.restangularFields.parentResource], o, f, !0, null, i);
                                        h(l, n, a, N)
                                    }
                                else h(l, n, void 0, N)
                            },
                            b = function(n) {
                                304 === n.status && t.isSafe(e) ? h(l, n, d, N) : _.every(t.errorInterceptors, function(e) {
                                    return e(n, l, y) !== !1
                                }) && l.reject(n)
                            },
                            x = e,
                            C = _.extend({}, A.headers),
                            S = t.isOverridenMethod(e);
                        return S ? (x = "post", C = _.extend(C, {
                            "X-HTTP-Method-Override": "remove" === e ? "DELETE" : e.toUpperCase()
                        })) : t.jsonp && "get" === x && (x = "jsonp"), t.isSafe(e) ? S ? B.resource(this, n, A.httpConfig, C, A.params, i, $, x)[x]({}).then(y, b) : B.resource(this, n, A.httpConfig, C, A.params, i, $, x)[x]().then(y, b) : B.resource(this, n, A.httpConfig, C, A.params, i, $, x)[x](A.element).then(y, b), c(l.promise, !1, N)
                    }

                    function k(e, t) {
                        return _.bind(E, this)("get", void 0, e, void 0, t)
                    }

                    function T(e, t) {
                        return _.bind(E, this)("remove", void 0, e, void 0, t)
                    }

                    function I(e, t) {
                        return _.bind(E, this)("put", void 0, e, void 0, t)
                    }

                    function P(e, t, n, r) {
                        return _.bind(E, this)("post", e, n, t, r)
                    }

                    function F(e, t) {
                        return _.bind(E, this)("head", void 0, e, void 0, t)
                    }

                    function M(e, t) {
                        return _.bind(E, this)("trace", void 0, e, void 0, t)
                    }

                    function O(e, t) {
                        return _.bind(E, this)("options", void 0, e, void 0, t)
                    }

                    function D(e, t, n) {
                        return _.bind(E, this)("patch", void 0, t, e, n)
                    }

                    function R(e, t, n, r, i) {
                        return _.bind(E, this)(e, t, n, i, r)
                    }

                    function L(e, n, r, i, o, a) {
                        var s;
                        s = "getList" === n ? _.bind(x, this, r) : _.bind(R, this, n, r);
                        var d = function(e, t, n) {
                            var r = _.defaults({
                                params: e,
                                headers: t,
                                elem: n
                            }, {
                                params: i,
                                headers: o,
                                elem: a
                            });
                            return s(r.params, r.headers, r.elem)
                        };
                        t.isSafe(n) ? this[e] = d : this[e] = function(e, t, n) {
                            return d(t, n, e)
                        }
                    }

                    function j(n) {
                        var r = angular.copy(_.omit(t, "configuration"));
                        return e.init(r, r), n(r), i(r)
                    }

                    function q(e, n) {
                        var r = _.values(t.restangularFields),
                            i = {},
                            o = (n || U).all(e);
                        i.one = _.bind(a, n || U, n, e), i.post = _.bind(o.post, o), i.getList = _.bind(o.getList, o);
                        for (var s in o) o.hasOwnProperty(s) && _.isFunction(o[s]) && !_.contains(r, s) && (i[s] = _.bind(o[s], o));
                        return i
                    }
                    var U = {},
                        B = new t.urlCreatorFactory[t.urlCreator];
                    return B.setConfig(t), e.init(U, t), U.copy = _.bind($, U), U.service = _.bind(q, U), U.withConfig = _.bind(j, U), U.one = _.bind(a, U, null), U.all = _.bind(s, U, null), U.several = _.bind(d, U, null), U.oneUrl = _.bind(l, U, null), U.allUrl = _.bind(u, U, null), U.stripRestangular = _.bind(g, U), U.restangularizeElement = _.bind(v, U), U.restangularizeCollection = _.bind(N, U), U
                }
                return i(t)
            }]
        })
    }(), angular.module("templates", []),
    function() {
        "use strict";
        var e = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            HOME: 36,
            END: 35,
            BACKSPACE: 8,
            DELETE: 46,
            COMMAND: 91,
            MAP: {
                91: "COMMAND",
                8: "BACKSPACE",
                9: "TAB",
                13: "ENTER",
                16: "SHIFT",
                17: "CTRL",
                18: "ALT",
                19: "PAUSEBREAK",
                20: "CAPSLOCK",
                27: "ESC",
                32: "SPACE",
                33: "PAGE_UP",
                34: "PAGE_DOWN",
                35: "END",
                36: "HOME",
                37: "LEFT",
                38: "UP",
                39: "RIGHT",
                40: "DOWN",
                43: "+",
                44: "PRINTSCREEN",
                45: "INSERT",
                46: "DELETE",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                61: "=",
                65: "A",
                66: "B",
                67: "C",
                68: "D",
                69: "E",
                70: "F",
                71: "G",
                72: "H",
                73: "I",
                74: "J",
                75: "K",
                76: "L",
                77: "M",
                78: "N",
                79: "O",
                80: "P",
                81: "Q",
                82: "R",
                83: "S",
                84: "T",
                85: "U",
                86: "V",
                87: "W",
                88: "X",
                89: "Y",
                90: "Z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NUMLOCK",
                145: "SCROLLLOCK",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            },
            isControl: function(t) {
                var n = t.which;
                switch (n) {
                    case e.COMMAND:
                    case e.SHIFT:
                    case e.CTRL:
                    case e.ALT:
                        return !0
                }
                return t.metaKey ? !0 : !1
            },
            isFunctionKey: function(e) {
                return e = e.which ? e.which : e, e >= 112 && 123 >= e;
            },
            isVerticalMovement: function(t) {
                return ~[e.UP, e.DOWN].indexOf(t)
            },
            isHorizontalMovement: function(t) {
                return ~[e.LEFT, e.RIGHT, e.BACKSPACE, e.DELETE].indexOf(t)
            }
        };
        void 0 === angular.element.prototype.querySelectorAll && (angular.element.prototype.querySelectorAll = function(e) {
            return angular.element(this[0].querySelectorAll(e))
        }), void 0 === angular.element.prototype.closest && (angular.element.prototype.closest = function(e) {
            for (var t = this[0], n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector; t;) {
                if (n.bind(t)(e)) return t;
                t = t.parentElement
            }
            return !1
        });
        var t = 0,
            n = angular.module("ui.select", []).constant("uiSelectConfig", {
                theme: "bootstrap",
                searchEnabled: !0,
                sortable: !1,
                placeholder: "",
                refreshDelay: 1e3,
                closeOnSelect: !0,
                dropdownPosition: "auto",
                generateId: function() {
                    return t++
                },
                appendToBody: !1
            }).service("uiSelectMinErr", function() {
                var e = angular.$$minErr("ui.select");
                return function() {
                    var t = e.apply(this, arguments),
                        n = t.message.replace(new RegExp("\nhttp://errors.angularjs.org/.*"), "");
                    return new Error(n)
                }
            }).directive("uisTranscludeAppend", function() {
                return {
                    link: function(e, t, n, r, i) {
                        i(e, function(e) {
                            t.append(e)
                        })
                    }
                }
            }).filter("highlight", function() {
                function e(e) {
                    return e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
                }
                return function(t, n) {
                    return n && t ? t.replace(new RegExp(e(n), "gi"), '<span class="ui-select-highlight">$&</span>') : t
                }
            }).factory("uisOffset", ["$document", "$window", function(e, t) {
                return function(n) {
                    var r = n[0].getBoundingClientRect();
                    return {
                        width: r.width || n.prop("offsetWidth"),
                        height: r.height || n.prop("offsetHeight"),
                        top: r.top + (t.pageYOffset || e[0].documentElement.scrollTop),
                        left: r.left + (t.pageXOffset || e[0].documentElement.scrollLeft)
                    }
                }
            }]);
        n.directive("uiSelectChoices", ["uiSelectConfig", "uisRepeatParser", "uiSelectMinErr", "$compile", function(e, t, n, r) {
            return {
                restrict: "EA",
                require: "^uiSelect",
                replace: !0,
                transclude: !0,
                templateUrl: function(t) {
                    var n = t.parent().attr("theme") || e.theme;
                    return n + "/choices.tpl.html"
                },
                compile: function(i, o) {
                    if (!o.repeat) throw n("repeat", "Expected 'repeat' expression.");
                    return function(i, o, a, s, d) {
                        var l = a.groupBy,
                            u = a.groupFilter;
                        if (s.parseRepeatAttr(a.repeat, l, u), s.disableChoiceExpression = a.uiDisableChoice, s.onHighlightCallback = a.onHighlight, s.dropdownPosition = a.position ? a.position.toLowerCase() : e.dropdownPosition, l) {
                            var c = o.querySelectorAll(".ui-select-choices-group");
                            if (1 !== c.length) throw n("rows", "Expected 1 .ui-select-choices-group but got '{0}'.", c.length);
                            c.attr("ng-repeat", t.getGroupNgRepeatExpression())
                        }
                        var f = o.querySelectorAll(".ui-select-choices-row");
                        if (1 !== f.length) throw n("rows", "Expected 1 .ui-select-choices-row but got '{0}'.", f.length);
                        f.attr("ng-repeat", s.parserResult.repeatExpression(l)).attr("ng-if", "$select.open").attr("ng-click", "$select.select(" + s.parserResult.itemName + ",false,$event)");
                        var p = o.querySelectorAll(".ui-select-choices-row-inner");
                        if (1 !== p.length) throw n("rows", "Expected 1 .ui-select-choices-row-inner but got '{0}'.", p.length);
                        p.attr("uis-transclude-append", ""), r(o, d)(i), i.$watch("$select.search", function(e) {
                            e && !s.open && s.multiple && s.activate(!1, !0), s.activeIndex = s.tagging.isActivated ? -1 : 0, s.refresh(a.refresh)
                        }), a.$observe("refreshDelay", function() {
                            var t = i.$eval(a.refreshDelay);
                            s.refreshDelay = void 0 !== t ? t : e.refreshDelay
                        })
                    }
                }
            }
        }]), n.controller("uiSelectCtrl", ["$scope", "$element", "$timeout", "$filter", "uisRepeatParser", "uiSelectMinErr", "uiSelectConfig", "$parse", function(t, n, r, i, o, a, s, d) {
            function l() {
                (p.resetSearchInput || void 0 === p.resetSearchInput && s.resetSearchInput) && (p.search = h, p.selected && p.items.length && !p.multiple && (p.activeIndex = p.items.indexOf(p.selected)))
            }

            function u(e, t) {
                var n, r, i = [];
                for (n = 0; n < t.length; n++)
                    for (r = 0; r < e.length; r++) e[r].name == [t[n]] && i.push(e[r]);
                return i
            }

            function c(t) {
                var n = !0;
                switch (t) {
                    case e.DOWN:
                        !p.open && p.multiple ? p.activate(!1, !0) : p.activeIndex < p.items.length - 1 && p.activeIndex++;
                        break;
                    case e.UP:
                        !p.open && p.multiple ? p.activate(!1, !0) : (p.activeIndex > 0 || 0 === p.search.length && p.tagging.isActivated && p.activeIndex > -1) && p.activeIndex--;
                        break;
                    case e.TAB:
                        (!p.multiple || p.open) && p.select(p.items[p.activeIndex], !0);
                        break;
                    case e.ENTER:
                        p.open && (p.tagging.isActivated || p.activeIndex >= 0) ? p.select(p.items[p.activeIndex]) : p.activate(!1, !0);
                        break;
                    case e.ESC:
                        p.close();
                        break;
                    default:
                        n = !1
                }
                return n
            }

            function f() {
                var e = n.querySelectorAll(".ui-select-choices-content"),
                    t = e.querySelectorAll(".ui-select-choices-row");
                if (t.length < 1) throw a("choices", "Expected multiple .ui-select-choices-row but got '{0}'.", t.length);
                if (!(p.activeIndex < 0)) {
                    var r = t[p.activeIndex],
                        i = r.offsetTop + r.clientHeight - e[0].scrollTop,
                        o = e[0].offsetHeight;
                    i > o ? e[0].scrollTop += i - o : i < r.clientHeight && (p.isGrouped && 0 === p.activeIndex ? e[0].scrollTop = 0 : e[0].scrollTop -= r.clientHeight - i)
                }
            }
            var p = this,
                h = "";
            if (p.placeholder = s.placeholder, p.searchEnabled = s.searchEnabled, p.sortable = s.sortable, p.refreshDelay = s.refreshDelay, p.removeSelected = !1, p.closeOnSelect = !0, p.search = h, p.activeIndex = 0, p.items = [], p.open = !1, p.focus = !1, p.disabled = !1, p.selected = void 0, p.dropdownPosition = "auto", p.focusser = void 0, p.resetSearchInput = !0, p.multiple = void 0, p.disableChoiceExpression = void 0, p.tagging = {
                    isActivated: !1,
                    fct: void 0
                }, p.taggingTokens = {
                    isActivated: !1,
                    tokens: void 0
                }, p.lockChoiceExpression = void 0, p.clickTriggeredSelect = !1, p.$filter = i, p.searchInput = n.querySelectorAll("input.ui-select-search"), 1 !== p.searchInput.length) throw a("searchInput", "Expected 1 input.ui-select-search but got '{0}'.", p.searchInput.length);
            p.isEmpty = function() {
                return angular.isUndefined(p.selected) || null === p.selected || "" === p.selected
            }, p.activate = function(e, n) {
                p.disabled || p.open || (n || l(), t.$broadcast("uis:activate"), p.open = !0, p.activeIndex = p.activeIndex >= p.items.length ? 0 : p.activeIndex, -1 === p.activeIndex && p.taggingLabel !== !1 && (p.activeIndex = 0), r(function() {
                    p.search = e || p.search, p.searchInput[0].focus(), !p.tagging.isActivated && p.items.length > 1 && f()
                }))
            }, p.findGroupByName = function(e) {
                return p.groups && p.groups.filter(function(t) {
                    return t.name === e
                })[0]
            }, p.parseRepeatAttr = function(e, n, r) {
                function i(e) {
                    var i = t.$eval(n);
                    if (p.groups = [], angular.forEach(e, function(e) {
                            var t = angular.isFunction(i) ? i(e) : e[i],
                                n = p.findGroupByName(t);
                            n ? n.items.push(e) : p.groups.push({
                                name: t,
                                items: [e]
                            })
                        }), r) {
                        var o = t.$eval(r);
                        angular.isFunction(o) ? p.groups = o(p.groups) : angular.isArray(o) && (p.groups = u(p.groups, o))
                    }
                    p.items = [], p.groups.forEach(function(e) {
                        p.items = p.items.concat(e.items)
                    })
                }

                function s(e) {
                    p.items = e
                }
                p.setItemsFn = n ? i : s, p.parserResult = o.parse(e), p.isGrouped = !!n, p.itemProperty = p.parserResult.itemName;
                var l = p.parserResult.source,
                    c = function() {
                        var e = l(t);
                        t.$uisSource = Object.keys(e).map(function(t) {
                            var n = {};
                            return n[p.parserResult.keyName] = t, n.value = e[t], n
                        })
                    };
                p.parserResult.keyName && (c(), p.parserResult.source = d("$uisSource" + p.parserResult.filters), t.$watch(l, function(e, t) {
                    e !== t && c()
                }, !0)), p.refreshItems = function(e) {
                    e = e || p.parserResult.source(t);
                    var n = p.selected;
                    if (p.isEmpty() || angular.isArray(n) && !n.length || !p.removeSelected) p.setItemsFn(e);
                    else if (void 0 !== e) {
                        var r = e.filter(function(e) {
                            return n && n.indexOf(e) < 0
                        });
                        p.setItemsFn(r)
                    }("auto" === p.dropdownPosition || "up" === p.dropdownPosition) && t.calculateDropdownPos()
                }, t.$watchCollection(p.parserResult.source, function(e) {
                    if (void 0 === e || null === e) p.items = [];
                    else {
                        if (!angular.isArray(e)) throw a("items", "Expected an array but got '{0}'.", e);
                        p.refreshItems(e), p.ngModel.$modelValue = null
                    }
                })
            };
            var g;
            p.refresh = function(e) {
                void 0 !== e && (g && r.cancel(g), g = r(function() {
                    t.$eval(e)
                }, p.refreshDelay))
            }, p.isActive = function(e) {
                if (!p.open) return !1;
                var t = p.items.indexOf(e[p.itemProperty]),
                    n = t === p.activeIndex;
                return !n || 0 > t && p.taggingLabel !== !1 || 0 > t && p.taggingLabel === !1 ? !1 : (n && !angular.isUndefined(p.onHighlightCallback) && e.$eval(p.onHighlightCallback), n)
            }, p.isDisabled = function(e) {
                if (p.open) {
                    var t, n = p.items.indexOf(e[p.itemProperty]),
                        r = !1;
                    return n >= 0 && !angular.isUndefined(p.disableChoiceExpression) && (t = p.items[n], r = !!e.$eval(p.disableChoiceExpression), t._uiSelectChoiceDisabled = r), r
                }
            }, p.select = function(e, n, i) {
                if (void 0 === e || !e._uiSelectChoiceDisabled) {
                    if (!p.items && !p.search) return;
                    if (!e || !e._uiSelectChoiceDisabled) {
                        if (p.tagging.isActivated) {
                            if (p.taggingLabel === !1)
                                if (p.activeIndex < 0) {
                                    if (e = void 0 !== p.tagging.fct ? p.tagging.fct(p.search) : p.search, !e || angular.equals(p.items[0], e)) return
                                } else e = p.items[p.activeIndex];
                            else if (0 === p.activeIndex) {
                                if (void 0 === e) return;
                                if (void 0 !== p.tagging.fct && "string" == typeof e) {
                                    if (e = p.tagging.fct(p.search), !e) return
                                } else "string" == typeof e && (e = e.replace(p.taggingLabel, "").trim())
                            }
                            if (p.selected && angular.isArray(p.selected) && p.selected.filter(function(t) {
                                    return angular.equals(t, e)
                                }).length > 0) return void p.close(n)
                        }
                        t.$broadcast("uis:select", e);
                        var o = {};
                        o[p.parserResult.itemName] = e, r(function() {
                            p.onSelectCallback(t, {
                                $item: e,
                                $model: p.parserResult.modelMapper(t, o)
                            })
                        }), p.closeOnSelect && p.close(n), i && "click" === i.type && (p.clickTriggeredSelect = !0)
                    }
                }
            }, p.close = function(e) {
                p.open && (p.ngModel && p.ngModel.$setTouched && p.ngModel.$setTouched(), l(), p.open = !1, t.$broadcast("uis:close", e))
            }, p.setFocus = function() {
                p.focus || p.focusInput[0].focus()
            }, p.clear = function(e) {
                p.select(void 0), e.stopPropagation(), r(function() {
                    p.focusser[0].focus()
                }, 0, !1)
            }, p.toggle = function(e) {
                p.open ? (p.close(), e.preventDefault(), e.stopPropagation()) : p.activate()
            }, p.isLocked = function(e, t) {
                var n, r = p.selected[t];
                return r && !angular.isUndefined(p.lockChoiceExpression) && (n = !!e.$eval(p.lockChoiceExpression), r._uiSelectChoiceLocked = n), n
            };
            var m = null;
            p.sizeSearchInput = function() {
                var e = p.searchInput[0],
                    n = p.searchInput.parent().parent()[0],
                    i = function() {
                        return n.clientWidth * !!e.offsetParent
                    },
                    o = function(t) {
                        if (0 === t) return !1;
                        var n = t - e.offsetLeft - 10;
                        return 50 > n && (n = t), p.searchInput.css("width", n + "px"), !0
                    };
                p.searchInput.css("width", "10px"), r(function() {
                    null !== m || o(i()) || (m = t.$watch(i, function(e) {
                        o(e) && (m(), m = null)
                    }))
                })
            }, p.searchInput.on("keydown", function(n) {
                var i = n.which;
                t.$apply(function() {
                    var t = !1;
                    if ((p.items.length > 0 || p.tagging.isActivated) && (c(i), p.taggingTokens.isActivated)) {
                        for (var o = 0; o < p.taggingTokens.tokens.length; o++) p.taggingTokens.tokens[o] === e.MAP[n.keyCode] && p.search.length > 0 && (t = !0);
                        t && r(function() {
                            p.searchInput.triggerHandler("tagged");
                            var t = p.search.replace(e.MAP[n.keyCode], "").trim();
                            p.tagging.fct && (t = p.tagging.fct(t)), t && p.select(t, !0)
                        })
                    }
                }), e.isVerticalMovement(i) && p.items.length > 0 && f(), (i === e.ENTER || i === e.ESC) && (n.preventDefault(), n.stopPropagation())
            }), p.searchInput.on("paste", function(e) {
                var t = e.originalEvent.clipboardData.getData("text/plain");
                if (t && t.length > 0 && p.taggingTokens.isActivated && p.tagging.fct) {
                    var n = t.split(p.taggingTokens.tokens[0]);
                    n && n.length > 0 && (angular.forEach(n, function(e) {
                        var t = p.tagging.fct(e);
                        t && p.select(t, !0)
                    }), e.preventDefault(), e.stopPropagation())
                }
            }), p.searchInput.on("tagged", function() {
                r(function() {
                    l()
                })
            }), t.$on("$destroy", function() {
                p.searchInput.off("keyup keydown tagged blur paste")
            })
        }]), n.directive("uiSelect", ["$document", "uiSelectConfig", "uiSelectMinErr", "uisOffset", "$compile", "$parse", "$timeout", function(e, t, n, r, i, o, a) {
            return {
                restrict: "EA",
                templateUrl: function(e, n) {
                    var r = n.theme || t.theme;
                    return r + (angular.isDefined(n.multiple) ? "/select-multiple.tpl.html" : "/select.tpl.html")
                },
                replace: !0,
                transclude: !0,
                require: ["uiSelect", "^ngModel"],
                scope: !0,
                controller: "uiSelectCtrl",
                controllerAs: "$select",
                compile: function(i, s) {
                    return angular.isDefined(s.multiple) ? i.append("<ui-select-multiple/>").removeAttr("multiple") : i.append("<ui-select-single/>"), s.inputId && (i.querySelectorAll("input.ui-select-search")[0].id = s.inputId),
                        function(i, s, d, l, u) {
                            function c(e) {
                                if (h.open) {
                                    var t = !1;
                                    if (t = window.jQuery ? window.jQuery.contains(s[0], e.target) : s[0].contains(e.target), !t && !h.clickTriggeredSelect) {
                                        var n = ["input", "button", "textarea"],
                                            r = angular.element(e.target).controller("uiSelect"),
                                            o = r && r !== h;
                                        o || (o = ~n.indexOf(e.target.tagName.toLowerCase())), h.close(o), i.$digest()
                                    }
                                    h.clickTriggeredSelect = !1
                                }
                            }

                            function f() {
                                var t = r(s);
                                $ = angular.element('<div class="ui-select-placeholder"></div>'), $[0].style.width = t.width + "px", $[0].style.height = t.height + "px", s.after($), v = s[0].style.width, e.find("body").append(s), s[0].style.position = "absolute", s[0].style.left = t.left + "px", s[0].style.top = t.top + "px", s[0].style.width = t.width + "px"
                            }

                            function p() {
                                null !== $ && ($.replaceWith(s), $ = null, s[0].style.position = "", s[0].style.left = "", s[0].style.top = "", s[0].style.width = v)
                            }
                            var h = l[0],
                                g = l[1];
                            h.generatedId = t.generateId(), h.baseTitle = d.title || "Select box", h.focusserTitle = h.baseTitle + " focus", h.focusserId = "focusser-" + h.generatedId, h.closeOnSelect = function() {
                                return angular.isDefined(d.closeOnSelect) ? o(d.closeOnSelect)() : t.closeOnSelect
                            }(), h.onSelectCallback = o(d.onSelect), h.onRemoveCallback = o(d.onRemove), h.limit = angular.isDefined(d.limit) ? parseInt(d.limit, 10) : void 0, h.ngModel = g, h.choiceGrouped = function(e) {
                                return h.isGrouped && e && e.name
                            }, d.tabindex && d.$observe("tabindex", function(e) {
                                h.focusInput.attr("tabindex", e), s.removeAttr("tabindex")
                            }), i.$watch("searchEnabled", function() {
                                var e = i.$eval(d.searchEnabled);
                                h.searchEnabled = void 0 !== e ? e : t.searchEnabled
                            }), i.$watch("sortable", function() {
                                var e = i.$eval(d.sortable);
                                h.sortable = void 0 !== e ? e : t.sortable
                            }), d.$observe("disabled", function() {
                                h.disabled = void 0 !== d.disabled ? d.disabled : !1
                            }), d.$observe("resetSearchInput", function() {
                                var e = i.$eval(d.resetSearchInput);
                                h.resetSearchInput = void 0 !== e ? e : !0
                            }), d.$observe("tagging", function() {
                                if (void 0 !== d.tagging) {
                                    var e = i.$eval(d.tagging);
                                    h.tagging = {
                                        isActivated: !0,
                                        fct: e !== !0 ? e : void 0
                                    }
                                } else h.tagging = {
                                    isActivated: !1,
                                    fct: void 0
                                }
                            }), d.$observe("taggingLabel", function() {
                                void 0 !== d.tagging && ("false" === d.taggingLabel ? h.taggingLabel = !1 : h.taggingLabel = void 0 !== d.taggingLabel ? d.taggingLabel : "(new)")
                            }), d.$observe("taggingTokens", function() {
                                if (void 0 !== d.tagging) {
                                    var e = void 0 !== d.taggingTokens ? d.taggingTokens.split("|") : [",", "ENTER"];
                                    h.taggingTokens = {
                                        isActivated: !0,
                                        tokens: e
                                    }
                                }
                            }), angular.isDefined(d.autofocus) && a(function() {
                                h.setFocus()
                            }), angular.isDefined(d.focusOn) && i.$on(d.focusOn, function() {
                                a(function() {
                                    h.setFocus()
                                })
                            }), e.on("click", c), i.$on("$destroy", function() {
                                e.off("click", c)
                            }), u(i, function(e) {
                                var t = angular.element("<div>").append(e),
                                    r = t.querySelectorAll(".ui-select-match");
                                if (r.removeAttr("ui-select-match"), r.removeAttr("data-ui-select-match"), 1 !== r.length) throw n("transcluded", "Expected 1 .ui-select-match but got '{0}'.", r.length);
                                s.querySelectorAll(".ui-select-match").replaceWith(r);
                                var i = t.querySelectorAll(".ui-select-choices");
                                if (i.removeAttr("ui-select-choices"), i.removeAttr("data-ui-select-choices"), 1 !== i.length) throw n("transcluded", "Expected 1 .ui-select-choices but got '{0}'.", i.length);
                                s.querySelectorAll(".ui-select-choices").replaceWith(i)
                            });
                            var m = i.$eval(d.appendToBody);
                            (void 0 !== m ? m : t.appendToBody) && (i.$watch("$select.open", function(e) {
                                e ? f() : p()
                            }), i.$on("$destroy", function() {
                                p()
                            }));
                            var $ = null,
                                v = "",
                                A = null,
                                N = "direction-up";
                            i.$watch("$select.open", function() {
                                ("auto" === h.dropdownPosition || "up" === h.dropdownPosition) && i.calculateDropdownPos()
                            });
                            var y = function(e, t) {
                                    e = e || r(s), t = t || r(A), A[0].style.position = "absolute", A[0].style.top = -1 * t.height + "px", s.addClass(N)
                                },
                                b = function(e, t) {
                                    s.removeClass(N), e = e || r(s), t = t || r(A), A[0].style.position = "", A[0].style.top = ""
                                };
                            i.calculateDropdownPos = function() {
                                if (h.open) {
                                    if (A = angular.element(s).querySelectorAll(".ui-select-dropdown"), 0 === A.length) return;
                                    A[0].style.opacity = 0, a(function() {
                                        if ("up" === h.dropdownPosition) y(t, n);
                                        else {
                                            s.removeClass(N);
                                            var t = r(s),
                                                n = r(A),
                                                i = e[0].documentElement.scrollTop || e[0].body.scrollTop;
                                            t.top + t.height + n.height > i + e[0].documentElement.clientHeight ? y(t, n) : b(t, n)
                                        }
                                        A[0].style.opacity = 1
                                    })
                                } else {
                                    if (null === A || 0 === A.length) return;
                                    A[0].style.position = "", A[0].style.top = "", s.removeClass(N)
                                }
                            }
                        }
                }
            }
        }]), n.directive("uiSelectMatch", ["uiSelectConfig", function(e) {
            return {
                restrict: "EA",
                require: "^uiSelect",
                replace: !0,
                transclude: !0,
                templateUrl: function(t) {
                    var n = t.parent().attr("theme") || e.theme,
                        r = t.parent().attr("multiple");
                    return n + (r ? "/match-multiple.tpl.html" : "/match.tpl.html")
                },
                link: function(t, n, r, i) {
                    function o(e) {
                        i.allowClear = angular.isDefined(e) ? "" === e ? !0 : "true" === e.toLowerCase() : !1
                    }
                    i.lockChoiceExpression = r.uiLockChoice, r.$observe("placeholder", function(t) {
                        i.placeholder = void 0 !== t ? t : e.placeholder
                    }), r.$observe("allowClear", o), o(r.allowClear), i.multiple && i.sizeSearchInput()
                }
            }
        }]), n.directive("uiSelectMultiple", ["uiSelectMinErr", "$timeout", function(t, n) {
            return {
                restrict: "EA",
                require: ["^uiSelect", "^ngModel"],
                controller: ["$scope", "$timeout", function(e, t) {
                    var n, r = this,
                        i = e.$select;
                    e.$evalAsync(function() {
                        n = e.ngModel
                    }), r.activeMatchIndex = -1, r.updateModel = function() {
                        n.$setViewValue(Date.now()), r.refreshComponent()
                    }, r.refreshComponent = function() {
                        i.refreshItems(), i.sizeSearchInput()
                    }, r.removeChoice = function(n) {
                        var o = i.selected[n];
                        if (!o._uiSelectChoiceLocked) {
                            var a = {};
                            a[i.parserResult.itemName] = o, i.selected.splice(n, 1), r.activeMatchIndex = -1, i.sizeSearchInput(), t(function() {
                                i.onRemoveCallback(e, {
                                    $item: o,
                                    $model: i.parserResult.modelMapper(e, a)
                                })
                            }), r.updateModel()
                        }
                    }, r.getPlaceholder = function() {
                        return i.selected && i.selected.length ? void 0 : i.placeholder
                    }
                }],
                controllerAs: "$selectMultiple",
                link: function(r, i, o, a) {
                    function s(e) {
                        return angular.isNumber(e.selectionStart) ? e.selectionStart : e.value.length
                    }

                    function d(t) {
                        function n() {
                            switch (t) {
                                case e.LEFT:
                                    return ~p.activeMatchIndex ? u : a;
                                case e.RIGHT:
                                    return ~p.activeMatchIndex && d !== a ? l : (c.activate(), !1);
                                case e.BACKSPACE:
                                    return ~p.activeMatchIndex ? (p.removeChoice(d), u) : a;
                                case e.DELETE:
                                    return ~p.activeMatchIndex ? (p.removeChoice(p.activeMatchIndex), d) : !1
                            }
                        }
                        var r = s(c.searchInput[0]),
                            i = c.selected.length,
                            o = 0,
                            a = i - 1,
                            d = p.activeMatchIndex,
                            l = p.activeMatchIndex + 1,
                            u = p.activeMatchIndex - 1,
                            f = d;
                        return r > 0 || c.search.length && t == e.RIGHT ? !1 : (c.close(), f = n(), c.selected.length && f !== !1 ? p.activeMatchIndex = Math.min(a, Math.max(o, f)) : p.activeMatchIndex = -1, !0)
                    }

                    function l(e) {
                        if (void 0 === e || void 0 === c.search) return !1;
                        var t = e.filter(function(e) {
                            return void 0 === c.search.toUpperCase() || void 0 === e ? !1 : e.toUpperCase() === c.search.toUpperCase()
                        }).length > 0;
                        return t
                    }

                    function u(e, t) {
                        var n = -1;
                        if (angular.isArray(e))
                            for (var r = angular.copy(e), i = 0; i < r.length; i++)
                                if (void 0 === c.tagging.fct) r[i] + " " + c.taggingLabel === t && (n = i);
                                else {
                                    var o = r[i];
                                    o.isTag = !0, angular.equals(o, t) && (n = i)
                                }
                        return n
                    }
                    var c = a[0],
                        f = r.ngModel = a[1],
                        p = r.$selectMultiple;
                    c.multiple = !0, c.removeSelected = !0, c.focusInput = c.searchInput, f.$parsers.unshift(function() {
                        for (var e, t = {}, n = [], i = c.selected.length - 1; i >= 0; i--) t = {}, t[c.parserResult.itemName] = c.selected[i], e = c.parserResult.modelMapper(r, t), n.unshift(e);
                        return n
                    }), f.$formatters.unshift(function(e) {
                        var t, n = c.parserResult.source(r, {
                                $select: {
                                    search: ""
                                }
                            }),
                            i = {};
                        if (!n) return e;
                        var o = [],
                            a = function(e, n) {
                                if (e && e.length) {
                                    for (var a = e.length - 1; a >= 0; a--) {
                                        if (i[c.parserResult.itemName] = e[a], t = c.parserResult.modelMapper(r, i), c.parserResult.trackByExp) {
                                            var s = /\.(.+)/.exec(c.parserResult.trackByExp);
                                            if (s.length > 0 && t[s[1]] == n[s[1]]) return o.unshift(e[a]), !0
                                        }
                                        if (angular.equals(t, n)) return o.unshift(e[a]), !0
                                    }
                                    return !1
                                }
                            };
                        if (!e) return o;
                        for (var s = e.length - 1; s >= 0; s--) a(c.selected, e[s]) || a(n, e[s]) || o.unshift(e[s]);
                        return o
                    }), r.$watchCollection(function() {
                        return f.$modelValue
                    }, function(e, t) {
                        t != e && (f.$modelValue = null, p.refreshComponent())
                    }), f.$render = function() {
                        if (!angular.isArray(f.$viewValue)) {
                            if (!angular.isUndefined(f.$viewValue) && null !== f.$viewValue) throw t("multiarr", "Expected model value to be array but got '{0}'", f.$viewValue);
                            c.selected = []
                        }
                        c.selected = f.$viewValue, r.$evalAsync()
                    }, r.$on("uis:select", function(e, t) {
                        c.selected.length >= c.limit || (c.selected.push(t), p.updateModel())
                    }), r.$on("uis:activate", function() {
                        p.activeMatchIndex = -1
                    }), r.$watch("$select.disabled", function(e, t) {
                        t && !e && c.sizeSearchInput()
                    }), c.searchInput.on("keydown", function(t) {
                        var n = t.which;
                        r.$apply(function() {
                            var r = !1;
                            e.isHorizontalMovement(n) && (r = d(n)), r && n != e.TAB && (t.preventDefault(), t.stopPropagation())
                        })
                    }), c.searchInput.on("keyup", function(t) {
                        if (e.isVerticalMovement(t.which) || r.$evalAsync(function() {
                                c.activeIndex = c.taggingLabel === !1 ? -1 : 0
                            }), c.tagging.isActivated && c.search.length > 0) {
                            if (t.which === e.TAB || e.isControl(t) || e.isFunctionKey(t) || t.which === e.ESC || e.isVerticalMovement(t.which)) return;
                            if (c.activeIndex = c.taggingLabel === !1 ? -1 : 0, c.taggingLabel === !1) return;
                            var n, i, o, a, s = angular.copy(c.items),
                                d = angular.copy(c.items),
                                f = !1,
                                p = -1;
                            if (void 0 !== c.tagging.fct) {
                                if (o = c.$filter("filter")(s, {
                                        isTag: !0
                                    }), o.length > 0 && (a = o[0]), s.length > 0 && a && (f = !0, s = s.slice(1, s.length), d = d.slice(1, d.length)), n = c.tagging.fct(c.search), n.isTag = !0, d.filter(function(e) {
                                        return angular.equals(e, c.tagging.fct(c.search))
                                    }).length > 0) return;
                                n.isTag = !0
                            } else {
                                if (o = c.$filter("filter")(s, function(e) {
                                        return e.match(c.taggingLabel)
                                    }), o.length > 0 && (a = o[0]), i = s[0], void 0 !== i && s.length > 0 && a && (f = !0, s = s.slice(1, s.length), d = d.slice(1, d.length)), n = c.search + " " + c.taggingLabel, u(c.selected, c.search) > -1) return;
                                if (l(d.concat(c.selected))) return void(f && (s = d, r.$evalAsync(function() {
                                    c.activeIndex = 0, c.items = s
                                })));
                                if (l(d)) return void(f && (c.items = d.slice(1, d.length)))
                            }
                            f && (p = u(c.selected, n)), p > -1 ? s = s.slice(p + 1, s.length - 1) : (s = [], s.push(n), s = s.concat(d)), r.$evalAsync(function() {
                                c.activeIndex = 0, c.items = s
                            })
                        }
                    }), c.searchInput.on("blur", function() {
                        n(function() {
                            p.activeMatchIndex = -1
                        })
                    })
                }
            }
        }]), n.directive("uiSelectSingle", ["$timeout", "$compile", function(t, n) {
            return {
                restrict: "EA",
                require: ["^uiSelect", "^ngModel"],
                link: function(r, i, o, a) {
                    var s = a[0],
                        d = a[1];
                    d.$parsers.unshift(function(e) {
                        var t, n = {};
                        return n[s.parserResult.itemName] = e, t = s.parserResult.modelMapper(r, n)
                    }), d.$formatters.unshift(function(e) {
                        var t, n = s.parserResult.source(r, {
                                $select: {
                                    search: ""
                                }
                            }),
                            i = {};
                        if (n) {
                            var o = function(n) {
                                return i[s.parserResult.itemName] = n, t = s.parserResult.modelMapper(r, i), t == e
                            };
                            if (s.selected && o(s.selected)) return s.selected;
                            for (var a = n.length - 1; a >= 0; a--)
                                if (o(n[a])) return n[a]
                        }
                        return e
                    }), r.$watch("$select.selected", function(e) {
                        d.$viewValue !== e && d.$setViewValue(e)
                    }), d.$render = function() {
                        s.selected = d.$viewValue
                    }, r.$on("uis:select", function(e, t) {
                        s.selected = t
                    }), r.$on("uis:close", function(e, n) {
                        t(function() {
                            s.focusser.prop("disabled", !1), n || s.focusser[0].focus()
                        }, 0, !1)
                    }), r.$on("uis:activate", function() {
                        l.prop("disabled", !0)
                    });
                    var l = angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");
                    n(l)(r), s.focusser = l, s.focusInput = l, i.parent().append(l), l.bind("focus", function() {
                        r.$evalAsync(function() {
                            s.focus = !0
                        })
                    }), l.bind("blur", function() {
                        r.$evalAsync(function() {
                            s.focus = !1
                        })
                    }), l.bind("keydown", function(t) {
                        return t.which === e.BACKSPACE ? (t.preventDefault(), t.stopPropagation(), s.select(void 0), void r.$apply()) : void(t.which === e.TAB || e.isControl(t) || e.isFunctionKey(t) || t.which === e.ESC || ((t.which == e.DOWN || t.which == e.UP || t.which == e.ENTER || t.which == e.SPACE) && (t.preventDefault(), t.stopPropagation(), s.activate()), r.$digest()))
                    }), l.bind("keyup input", function(t) {
                        t.which === e.TAB || e.isControl(t) || e.isFunctionKey(t) || t.which === e.ESC || t.which == e.ENTER || t.which === e.BACKSPACE || (s.activate(l.val()), l.val(""), r.$digest())
                    })
                }
            }
        }]), n.directive("uiSelectSort", ["$timeout", "uiSelectConfig", "uiSelectMinErr", function(e, t, n) {
            return {
                require: "^uiSelect",
                link: function(t, r, i, o) {
                    if (null === t[i.uiSelectSort]) throw n("sort", "Expected a list to sort");
                    var a = angular.extend({
                            axis: "horizontal"
                        }, t.$eval(i.uiSelectSortOptions)),
                        s = a.axis,
                        d = "dragging",
                        l = "dropping",
                        u = "dropping-before",
                        c = "dropping-after";
                    t.$watch(function() {
                        return o.sortable
                    }, function(e) {
                        e ? r.attr("draggable", !0) : r.removeAttr("draggable")
                    }), r.on("dragstart", function(e) {
                        r.addClass(d), (e.dataTransfer || e.originalEvent.dataTransfer).setData("text/plain", t.$index)
                    }), r.on("dragend", function() {
                        r.removeClass(d)
                    });
                    var f, p = function(e, t) {
                            this.splice(t, 0, this.splice(e, 1)[0])
                        },
                        h = function(e) {
                            e.preventDefault();
                            var t = "vertical" === s ? e.offsetY || e.layerY || (e.originalEvent ? e.originalEvent.offsetY : 0) : e.offsetX || e.layerX || (e.originalEvent ? e.originalEvent.offsetX : 0);
                            t < this["vertical" === s ? "offsetHeight" : "offsetWidth"] / 2 ? (r.removeClass(c), r.addClass(u)) : (r.removeClass(u), r.addClass(c))
                        },
                        g = function(t) {
                            t.preventDefault();
                            var n = parseInt((t.dataTransfer || t.originalEvent.dataTransfer).getData("text/plain"), 10);
                            e.cancel(f), f = e(function() {
                                m(n)
                            }, 20)
                        },
                        m = function(e) {
                            var n = t.$eval(i.uiSelectSort),
                                o = n[e],
                                a = null;
                            a = r.hasClass(u) ? e < t.$index ? t.$index - 1 : t.$index : e < t.$index ? t.$index : t.$index + 1, p.apply(n, [e, a]), t.$apply(function() {
                                t.$emit("uiSelectSort:change", {
                                    array: n,
                                    item: o,
                                    from: e,
                                    to: a
                                })
                            }), r.removeClass(l), r.removeClass(u), r.removeClass(c), r.off("drop", g)
                        };
                    r.on("dragenter", function() {
                        r.hasClass(d) || (r.addClass(l), r.on("dragover", h), r.on("drop", g))
                    }), r.on("dragleave", function(e) {
                        e.target == r && (r.removeClass(l), r.removeClass(u), r.removeClass(c), r.off("dragover", h), r.off("drop", g))
                    })
                }
            }
        }]), n.service("uisRepeatParser", ["uiSelectMinErr", "$parse", function(e, t) {
            var n = this;
            n.parse = function(n) {
                var r, i = /\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)/.test(n);
                if (r = n.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(([\w\.]+)?\s*(|\s*[\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), !r) throw e("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                if (!r[6] && i) throw e("iexp", "Expected expression in form of '_item_ as (_key_, _item_) in _ObjCollection_ [ track by _id_]' but got '{0}'.", n);
                return {
                    itemName: r[4] || r[2],
                    keyName: r[3],
                    source: t(r[3] ? r[6] : r[5]),
                    sourceName: r[6],
                    filters: r[7],
                    trackByExp: r[8],
                    modelMapper: t(r[1] || r[4] || r[2]),
                    repeatExpression: function(e) {
                        var t = this.itemName + " in " + (e ? "$group.items" : "$select.items");
                        return this.trackByExp && (t += " track by " + this.trackByExp), t
                    }
                }
            }, n.getGroupNgRepeatExpression = function() {
                return "$group in $select.groups"
            }
        }])
    }(), angular.module("ui.select").run(["$templateCache", function(e) {
        e.put("bootstrap/choices.tpl.html", '<ul class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu" role="listbox" ng-show="$select.items.length > 0"><li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div><div id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option"><a href="javascript:void(0)" class="ui-select-choices-row-inner"></a></div></li></ul>'), e.put("bootstrap/match-multiple.tpl.html", '<span class="ui-select-match"><span ng-repeat="$item in $select.selected"><span class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>'), e.put("bootstrap/match.tpl.html", '<div class="ui-select-match" ng-hide="$select.open" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><span tabindex="-1" class="btn btn-default form-control ui-select-toggle" aria-label="{{ $select.baseTitle }} activate" ng-disabled="$select.disabled" ng-click="$select.activate()" style="outline: 0;"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i> <a ng-show="$select.allowClear && !$select.isEmpty()" aria-label="{{ $select.baseTitle }} clear" style="margin-right: 10px" ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>'), e.put("bootstrap/select-multiple.tpl.html", '<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="text" autocomplete="false" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" role="combobox" aria-label="{{ $select.baseTitle }}" ondrop="return false;"></div><div class="ui-select-choices"></div></div>'), e.put("bootstrap/select.tpl.html", '<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><input type="text" autocomplete="false" tabindex="-1" aria-expanded="true" aria-label="{{ $select.baseTitle }}" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="form-control ui-select-search" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.searchEnabled && $select.open"><div class="ui-select-choices"></div></div>'), e.put("selectize/choices.tpl.html", '<div ng-show="$select.open" class="ui-select-choices ui-select-dropdown selectize-dropdown single"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup" role="listbox"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind="$group.name"></div><div role="option" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>'), e.put("selectize/match.tpl.html", '<div ng-hide="($select.open || $select.isEmpty())" class="ui-select-match" ng-transclude=""></div>'), e.put("selectize/select.tpl.html", '<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.activate()"><div class="ui-select-match"></div><input type="text" autocomplete="false" tabindex="-1" class="ui-select-search ui-select-toggle" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.searchEnabled || ($select.selected && !$select.open)" ng-disabled="$select.disabled" aria-label="{{ $select.baseTitle }}"></div><div class="ui-select-choices"></div></div>'), e.put("select2/choices.tpl.html", '<ul class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind="$group.name"></div><ul role="listbox" id="ui-select-choices-{{ $select.generatedId }}" ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li role="option" id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>'), e.put("select2/match-multiple.tpl.html", '<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected" ng-class="{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$selectMultiple.removeChoice($index)" tabindex="-1"></a></li></span>'), e.put("select2/match.tpl.html", '<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.toggle($event)" aria-label="{{ $select.baseTitle }} select"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.clear($event)"></abbr> <span class="select2-arrow ui-select-toggle"><b></b></span></a>'), e.put("select2/select-multiple.tpl.html", '<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="text" autocomplete="false" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="select2-input ui-select-search" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;" ondrop="return false;"></li></ul><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="ui-select-choices"></div></div></div>'),
            e.put("select2/select.tpl.html", '<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="select2-search" ng-show="$select.searchEnabled"><input type="text" autocomplete="false" autocorrect="false" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div></div></div>')
    }]),
     !window.XMLHttpRequest || window.FileAPI && FileAPI.shouldLoad || (window.XMLHttpRequest.prototype.setRequestHeader = function(e) {
        return function(t, n) {
            if ("__setXHR_" === t) {
                var r = n(this);
                r instanceof Function && r(this)
            } else e.apply(this, arguments)
        }
    }(window.XMLHttpRequest.prototype.setRequestHeader));
var ngFileUpload = angular.module("ngFileUpload", []);
ngFileUpload.version = "9.1.2", ngFileUpload.service("UploadBase", ["$http", "$q", "$timeout", function(e, t, n) {
        function r(r) {
            function a(e) {
                l.notify && l.notify(e), u.progressFunc && n(function() {
                    u.progressFunc(e)
                })
            }

            function s(e) {
                return null != r._start && o ? {
                    loaded: e.loaded + r._start,
                    total: r._file.size,
                    type: e.type,
                    config: r,
                    lengthComputable: !0,
                    target: e.target
                } : e
            }

            function d() {
                e(r).then(function(e) {
                    o && r._chunkSize && !r._finished ? (a({
                        loaded: r._end,
                        total: r._file.size,
                        config: r,
                        type: "progress"
                    }), i.upload(r)) : (r._finished && delete r._finished, l.resolve(e))
                }, function(e) {
                    l.reject(e)
                }, function(e) {
                    l.notify(e)
                })
            }
            r.method = r.method || "POST", r.headers = r.headers || {};
            var l = r._deferred = r._deferred || t.defer(),
                u = l.promise;
            return r.disableProgress || (r.headers.__setXHR_ = function() {
                return function(e) {
                    e && e instanceof XMLHttpRequest && (r.__XHR = e, r.xhrFn && r.xhrFn(e), e.upload.addEventListener("progress", function(e) {
                        e.config = r, a(s(e))
                    }, !1), e.upload.addEventListener("load", function(e) {
                        e.lengthComputable && (e.config = r, a(s(e)))
                    }, !1))
                }
            }), o ? r._chunkSize && r._end && !r._finished ? (r._start = r._end, r._end += r._chunkSize, d()) : r.resumeSizeUrl ? e.get(r.resumeSizeUrl).then(function(e) {
                r.resumeSizeResponseReader ? r._start = r.resumeSizeResponseReader(e.data) : r._start = parseInt((null == e.data.size ? e.data : e.data.size).toString()), r._chunkSize && (r._end = r._start + r._chunkSize), d()
            }, function(e) {
                throw e
            }) : r.resumeSize ? r.resumeSize().then(function(e) {
                r._start = e, d()
            }, function(e) {
                throw e
            }) : d() : d(), u.success = function(e) {
                return u.then(function(t) {
                    e(t.data, t.status, t.headers, r)
                }), u
            }, u.error = function(e) {
                return u.then(null, function(t) {
                    e(t.data, t.status, t.headers, r)
                }), u
            }, u.progress = function(e) {
                return u.progressFunc = e, u.then(null, null, function(t) {
                    e(t)
                }), u
            }, u.abort = u.pause = function() {
                return r.__XHR && n(function() {
                    r.__XHR.abort()
                }), u
            }, u.xhr = function(e) {
                return r.xhrFn = function(t) {
                    return function() {
                        t && t.apply(u, arguments), e.apply(u, arguments)
                    }
                }(r.xhrFn), u
            }, u
        }
        var i = this;
        this.isResumeSupported = function() {
            return window.Blob && Blob instanceof Function && (new Blob).slice
        };
        var o = this.isResumeSupported();
        this.rename = function(e, t) {
            return e.ngfName = t, e
        }, this.jsonBlob = function(e) {
            null == e || angular.isString(e) || (e = JSON.stringify(e));
            var t = new Blob([e], {
                type: "application/json"
            });
            return t._ngfBlob = !0, t
        }, this.json = function(e) {
            return angular.toJson(e)
        }, this.upload = function(e) {
            function t(e) {
                return null != e && (e instanceof Blob || e.flashId && e.name && e.size)
            }

            function n(t, n) {
                if (t._ngfBlob) return t;
                if (e._file = e._file || t, null != e._start && o) {
                    e._end && e._end >= t.size && (e._finished = !0, e._end = t.size);
                    var r = t.slice(e._start, e._end || t.size);
                    return r.name = t.name, r.ngfName = t.ngfName, e._chunkSize && (n.append("_chunkSize", e._end - e._start), n.append("_chunkNumber", Math.floor(e._start / e._chunkSize)), n.append("_totalSize", e._file.size)), r
                }
                return t
            }

            function a(r, i, o) {
                if (void 0 !== i)
                    if (angular.isDate(i) && (i = i.toISOString()), angular.isString(i)) r.append(o, i);
                    else if (t(i)) {
                    var s = n(i, r),
                        d = o.split(",");
                    d[1] && (s.ngfName = d[1].replace(/^\s+|\s+$/g, ""), o = d[0]), e._fileKey = e._fileKey || o, r.append(o, s, s.ngfName || s.name)
                } else if (angular.isObject(i)) {
                    if (i.$$ngfCircularDetection) throw "ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: " + o;
                    i.$$ngfCircularDetection = !0;
                    try {
                        for (var l in i)
                            if (i.hasOwnProperty(l) && "$$ngfCircularDetection" !== l) {
                                var u = null == e.objectKey ? "[i]" : e.objectKey;
                                i.length && parseInt(l) > -1 && (u = null == e.arrayKey ? u : e.arrayKey), a(r, i[l], o + u.replace(/[ik]/g, l))
                            }
                    } finally {
                        delete i.$$ngfCircularDetection
                    }
                } else r.append(o, i)
            }

            function s() {
                e._chunkSize = i.translateScalars(e.resumeChunkSize), e._chunkSize = e._chunkSize ? parseInt(e._chunkSize.toString()) : null, e.headers = e.headers || {}, e.headers["Content-Type"] = void 0, e.transformRequest = e.transformRequest ? angular.isArray(e.transformRequest) ? e.transformRequest : [e.transformRequest] : [], e.transformRequest.push(function(t) {
                    var n, r = new FormData;
                    t = t || e.fields || {}, e.file && (t.file = e.file);
                    for (n in t)
                        if (t.hasOwnProperty(n)) {
                            var i = t[n];
                            e.formDataAppender ? e.formDataAppender(r, n, i) : a(r, i, n)
                        }
                    return r
                })
            }
            return e._isDigested || (e._isDigested = !0, s()), r(e)
        }, this.http = function(t) {
            return t.transformRequest = t.transformRequest || function(t) {
                return window.ArrayBuffer && t instanceof window.ArrayBuffer || t instanceof Blob ? t : e.defaults.transformRequest[0].apply(this, arguments)
            }, t._chunkSize = i.translateScalars(t.resumeChunkSize), t._chunkSize = t._chunkSize ? parseInt(t._chunkSize.toString()) : null, r(t)
        }, this.translateScalars = function(e) {
            if (angular.isString(e)) {
                if (e.search(/kb/i) === e.length - 2) return parseFloat(1e3 * e.substring(0, e.length - 2));
                if (e.search(/mb/i) === e.length - 2) return parseFloat(1e6 * e.substring(0, e.length - 2));
                if (e.search(/gb/i) === e.length - 2) return parseFloat(1e9 * e.substring(0, e.length - 2));
                if (e.search(/b/i) === e.length - 1) return parseFloat(e.substring(0, e.length - 1));
                if (e.search(/s/i) === e.length - 1) return parseFloat(e.substring(0, e.length - 1));
                if (e.search(/m/i) === e.length - 1) return parseFloat(60 * e.substring(0, e.length - 1));
                if (e.search(/h/i) === e.length - 1) return parseFloat(3600 * e.substring(0, e.length - 1))
            }
            return e
        }, this.setDefaults = function(e) {
            this.defaults = e || {}
        }, this.defaults = {}, this.version = ngFileUpload.version
    }]), ngFileUpload.service("Upload", ["$parse", "$timeout", "$compile", "$q", "UploadExif", function(e, t, n, r, i) {
        function o(e) {
            var t = [d.emptyPromise()];
            return angular.forEach(e, function(n, r) {
                0 === n.type.indexOf("image/jpeg") && t.push(d.happyPromise(d.applyExifRotation(n), n).then(function(t) {
                    e.splice(r, 1, t)
                }))
            }), r.all(t)
        }

        function a(e, t, n) {
            var i = d.attrGetter("ngfResize", t, n);
            if (!i || !d.isResizeSupported() || !e.length) return d.emptyPromise();
            if (!i.width || !i.height) throw "width and height are mandatory for ngf-resize";
            var o = [d.emptyPromise()];
            return angular.forEach(e, function(t, n) {
                if (0 === t.type.indexOf("image")) {
                    var r = d.resize(t, i.width, i.height, i.quality);
                    o.push(r), r.then(function(t) {
                        e.splice(n, 1, t)
                    }, function(e) {
                        t.$error = "resize", t.$errorParam = (e ? (e.message ? e.message : e) + ": " : "") + (t && t.name)
                    })
                }
            }), r.all(o)
        }

        function s(e, t, n, r) {
            var i = [],
                o = d.attrGetter("ngfKeep", n, r);
            if (o) {
                var a = !1;
                if ("distinct" === o || d.attrGetter("ngfKeepDistinct", n, r) === !0) {
                    var s = t.length;
                    if (e)
                        for (var l = 0; l < e.length; l++) {
                            for (var u = 0; s > u; u++)
                                if (e[l].name === t[u].name) {
                                    i.push(e[l]);
                                    break
                                }
                            u === s && (t.push(e[l]), a = !0)
                        }
                    e = t
                } else e = t.concat(e || [])
            }
            return {
                files: e,
                dupFiles: i,
                keep: o
            }
        }
        var d = i;
        return d.getAttrWithDefaults = function(e, t) {
            if (null != e[t]) return e[t];
            var n = d.defaults[t];
            return null == n ? n : angular.isString(n) ? n : JSON.stringify(n)
        }, d.attrGetter = function(t, n, r, i) {
            var o = this.getAttrWithDefaults(n, t);
            if (!r) return o;
            try {
                return i ? e(o)(r, i) : e(o)(r)
            } catch (a) {
                if (t.search(/min|max|pattern/i)) return o;
                throw a
            }
        }, d.shouldUpdateOn = function(e, t, n) {
            var r = d.attrGetter("ngModelOptions", t, n);
            return r && r.updateOn ? r.updateOn.split(" ").indexOf(e) > -1 : !0
        }, d.emptyPromise = function() {
            var e = r.defer(),
                n = arguments;
            return t(function() {
                e.resolve.apply(e, n)
            }), e.promise
        }, d.happyPromise = function(e, n) {
            var i = r.defer();
            return e.then(function(e) {
                i.resolve(e)
            }, function(e) {
                t(function() {
                    throw e
                }), i.resolve(n)
            }), i.promise
        }, d.updateModel = function(n, r, i, l, u, c, f) {
            function p(o, a, s, u, f) {
                var p = o && o.length ? o[0] : null;
                n && (d.applyModelValidation(n, o), n.$ngfModelChange = !0, n.$setViewValue(f ? p : o)), l && e(l)(i, {
                    $files: o,
                    $file: p,
                    $newFiles: s,
                    $duplicateFiles: u,
                    $invalidFiles: a,
                    $event: c
                });
                var h = d.attrGetter("ngfModelInvalid", r);
                h && t(function() {
                    e(h).assign(i, a)
                }), t(function() {})
            }
            var h = u,
                g = (n && n.$modelValue || r.$$ngfPrevFiles || []).slice(0),
                m = s(u, g, r, i);
            u = m.files;
            var $ = m.dupFiles,
                v = !d.attrGetter("ngfMultiple", r, i) && !d.attrGetter("multiple", r) && !m.keep;
            if (r.$$ngfPrevFiles = u, !m.keep || h && h.length) {
                d.validate(h, n, r, i).then(function() {
                    if (f) p(u, [], h, $, v);
                    else {
                        var e = d.attrGetter("ngModelOptions", r, i);
                        if (!e || !e.allowInvalid) {
                            var n = [],
                                s = [];
                            angular.forEach(u, function(e) {
                                e.$error ? s.push(e) : n.push(e)
                            }), u = n
                        }
                        var l = d.emptyPromise(u);
                        d.attrGetter("ngfFixOrientation", r, i) !== !1 && d.isExifSupported() && (l = o(u)), l.then(function() {
                            a(u, r, i).then(function() {
                                t(function() {
                                    p(u, s, h, $, v)
                                }, e && e.debounce ? e.debounce.change || e.debounce : 0)
                            }, function(e) {
                                throw "Could not resize files " + e
                            })
                        })
                    }
                });
                for (var A = g.length; A--;) {
                    var N = g[A];
                    window.URL && N.blobUrl && (URL.revokeObjectURL(N.blobUrl), delete N.blobUrl)
                }
            }
        }, d
    }]), ngFileUpload.directive("ngfSelect", ["$parse", "$timeout", "$compile", "Upload", function(e, t, n, r) {
        function i(e) {
            var t = e.match(/Android[^\d]*(\d+)\.(\d+)/);
            if (t && t.length > 2) {
                var n = r.defaults.androidFixMinorVersion || 4;
                return parseInt(t[1]) < 4 || parseInt(t[1]) === n && parseInt(t[2]) < n
            }
            return -1 === e.indexOf("Chrome") && /.*Windows.*Safari.*/.test(e)
        }

        function o(e, t, n, r, o, s, d, l) {
            function u() {
                return "input" === t[0].tagName.toLowerCase() && n.type && "file" === n.type.toLowerCase()
            }

            function c() {
                return A("ngfChange") || A("ngfSelect")
            }

            function f(t) {
                if (l.shouldUpdateOn("change", n, e)) {
                    for (var i = t.__files_ || t.target && t.target.files, o = [], a = 0; a < i.length; a++) o.push(i[a]);
                    l.updateModel(r, n, e, c(), o.length ? o : null, t)
                }
            }

            function p(e) {
                if (t !== e)
                    for (var n = 0; n < t[0].attributes.length; n++) {
                        var r = t[0].attributes[n];
                        "type" !== r.name && "class" !== r.name && "id" !== r.name && "style" !== r.name && ((null == r.value || "" === r.value) && ("required" === r.name && (r.value = "required"), "multiple" === r.name && (r.value = "multiple")), e.attr(r.name, r.value))
                    }
            }

            function h() {
                if (u()) return t;
                var e = angular.element('<input type="file">');
                return p(e), e.css("visibility", "hidden").css("position", "absolute").css("overflow", "hidden").css("width", "0px").css("height", "0px").css("border", "none").css("margin", "0px").css("padding", "0px").attr("tabindex", "-1"), a.push({
                    el: t,
                    ref: e
                }), document.body.appendChild(e[0]), e
            }

            function g(n) {
                if (t.attr("disabled") || A("ngfSelectDisabled", e)) return !1;
                var r = m(n);
                if (null != r) return r;
                $(n);
                try {
                    u() || document.body.contains(b[0]) || (a.push({
                        el: t,
                        ref: b
                    }), document.body.appendChild(b[0]), b.bind("change", f))
                } catch (o) {}
                return i(navigator.userAgent) ? setTimeout(function() {
                    b[0].click()
                }, 0) : b[0].click(), !1
            }

            function m(e) {
                var t = e.changedTouches || e.originalEvent && e.originalEvent.changedTouches;
                if ("touchstart" === e.type) return y = t ? t[0].clientY : 0, !0;
                if (e.stopPropagation(), e.preventDefault(), "touchend" === e.type) {
                    var n = t ? t[0].clientY : 0;
                    if (Math.abs(n - y) > 20) return !1
                }
            }

            function $(t) {
                l.shouldUpdateOn("click", n, e) && b.val() && (b.val(null), l.updateModel(r, n, e, c(), null, t, !0))
            }

            function v(e) {
                if (b && !b.attr("__ngf_ie10_Fix_")) {
                    if (!b[0].parentNode) return void(b = null);
                    e.preventDefault(), e.stopPropagation(), b.unbind("click");
                    var t = b.clone();
                    return b.replaceWith(t), b = t, b.attr("__ngf_ie10_Fix_", "true"), b.bind("change", f), b.bind("click", v), b[0].click(), !1
                }
                b.removeAttr("__ngf_ie10_Fix_")
            }
            var A = function(e, t) {
                return l.attrGetter(e, n, t)
            };
            l.registerModelChangeValidator(r, n, e);
            var N = [];
            N.push(e.$watch(A("ngfMultiple"), function() {
                b.attr("multiple", A("ngfMultiple", e))
            })), N.push(e.$watch(A("ngfCapture"), function() {
                b.attr("capture", A("ngfCapture", e))
            })), n.$observe("accept", function() {
                b.attr("accept", A("accept"))
            }), N.push(function() {
                n.$$observers && delete n.$$observers.accept
            });
            var y = 0,
                b = t;
            u() || (b = h()), b.bind("change", f), u() ? t.bind("click", $) : t.bind("click touchstart touchend", g), -1 !== navigator.appVersion.indexOf("MSIE 10") && b.bind("click", v), r && r.$formatters.push(function(e) {
                return (null == e || 0 === e.length) && b.val() && b.val(null), e
            }), e.$on("$destroy", function() {
                u() || b.remove(), angular.forEach(N, function(e) {
                    e()
                })
            }), s(function() {
                for (var e = 0; e < a.length; e++) {
                    var t = a[e];
                    document.body.contains(t.el[0]) || (a.splice(e, 1), t.ref.remove())
                }
            }), window.FileAPI && window.FileAPI.ngfFixIE && window.FileAPI.ngfFixIE(t, b, f)
        }
        var a = [];
        return {
            restrict: "AEC",
            require: "?ngModel",
            link: function(i, a, s, d) {
                o(i, a, s, d, e, t, n, r)
            }
        }
    }]),
    function() {
        function e(e) {
            return "img" === e.tagName.toLowerCase() ? "image" : "audio" === e.tagName.toLowerCase() ? "audio" : "video" === e.tagName.toLowerCase() ? "video" : /./
        }

        function t(t, n, r, i, o, a, s, d) {
            function l(e) {
                var a = t.attrGetter("ngfNoObjectUrl", o, r);
                t.dataUrl(e, a)["finally"](function() {
                    n(function() {
                        var t = (a ? e.$ngfDataUrl : e.$ngfBlobUrl) || e.$ngfDataUrl;
                        d ? i.css("background-image", "url('" + (t || "") + "')") : i.attr("src", t), t ? i.removeClass("ngf-hide") : i.addClass("ngf-hide")
                    })
                })
            }
            n(function() {
                var n = r.$watch(o[a], function(n) {
                    var r = s;
                    if ("ngfThumbnail" === a && (r || (r = {
                            width: i[0].clientWidth,
                            height: i[0].clientHeight
                        }), 0 === r.width && window.getComputedStyle)) {
                        var o = getComputedStyle(i[0]);
                        r = {
                            width: parseInt(o.width.slice(0, -2)),
                            height: parseInt(o.height.slice(0, -2))
                        }
                    }
                    return angular.isString(n) ? (i.removeClass("ngf-hide"), d ? i.css("background-image", "url('" + n + "')") : i.attr("src", n)) : void(!n || !n.type || 0 !== n.type.search(e(i[0])) || d && 0 !== n.type.indexOf("image") ? i.addClass("ngf-hide") : r && t.isResizeSupported() ? t.resize(n, r.width, r.height, r.quality).then(function(e) {
                        l(e)
                    }, function(e) {
                        throw e
                    }) : l(n))
                });
                r.$on("$destroy", function() {
                    n()
                })
            })
        }
        ngFileUpload.service("UploadDataUrl", ["UploadBase", "$timeout", "$q", function(e, t, n) {
            var r = e;
            return r.base64DataUrl = function(e) {
                if (angular.isArray(e)) {
                    var t = n.defer(),
                        i = 0;
                    return angular.forEach(e, function(n) {
                        r.dataUrl(n, !0)["finally"](function() {
                            if (i++, i === e.length) {
                                var n = [];
                                angular.forEach(e, function(e) {
                                    n.push(e.$ngfDataUrl)
                                }), t.resolve(n, e)
                            }
                        })
                    }), t.promise
                }
                return r.dataUrl(e, !0)
            }, r.dataUrl = function(e, i) {
                if (!e) return r.emptyPromise(e, e);
                if (i && null != e.$ngfDataUrl || !i && null != e.$ngfBlobUrl) return r.emptyPromise(i ? e.$ngfDataUrl : e.$ngfBlobUrl, e);
                var o = i ? e.$$ngfDataUrlPromise : e.$$ngfBlobUrlPromise;
                if (o) return o;
                var a = n.defer();
                return t(function() {
                    if (window.FileReader && e && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 8") || e.size < 2e4) && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 9") || e.size < 4e6)) {
                        var n = window.URL || window.webkitURL;
                        if (n && n.createObjectURL && !i) {
                            var r;
                            try {
                                r = n.createObjectURL(e)
                            } catch (o) {
                                return void t(function() {
                                    e.$ngfBlobUrl = "", a.reject()
                                })
                            }
                            t(function() {
                                e.$ngfBlobUrl = r, r && a.resolve(r, e)
                            })
                        } else {
                            var s = new FileReader;
                            s.onload = function(n) {
                                t(function() {
                                    e.$ngfDataUrl = n.target.result, a.resolve(n.target.result, e)
                                })
                            }, s.onerror = function() {
                                t(function() {
                                    e.$ngfDataUrl = "", a.reject()
                                })
                            }, s.readAsDataURL(e)
                        }
                    } else t(function() {
                        e[i ? "dataUrl" : "blobUrl"] = "", a.reject()
                    })
                }), o = i ? e.$$ngfDataUrlPromise = a.promise : e.$$ngfBlobUrlPromise = a.promise, o["finally"](function() {
                    delete e[i ? "$$ngfDataUrlPromise" : "$$ngfBlobUrlPromise"]
                }), o
            }, r
        }]);
        var n = angular.element("<style>.ngf-hide{display:none !important}</style>");
        document.getElementsByTagName("head")[0].appendChild(n[0]), ngFileUpload.directive("ngfSrc", ["Upload", "$timeout", function(e, n) {
            return {
                restrict: "AE",
                link: function(r, i, o) {
                    t(e, n, r, i, o, "ngfSrc", e.attrGetter("ngfResize", o, r), !1)
                }
            }
        }]), ngFileUpload.directive("ngfBackground", ["Upload", "$timeout", function(e, n) {
            return {
                restrict: "AE",
                link: function(r, i, o) {
                    t(e, n, r, i, o, "ngfBackground", e.attrGetter("ngfResize", o, r), !0)
                }
            }
        }]), ngFileUpload.directive("ngfThumbnail", ["Upload", "$timeout", function(e, n) {
            return {
                restrict: "AE",
                link: function(r, i, o) {
                    var a = e.attrGetter("ngfSize", o, r);
                    t(e, n, r, i, o, "ngfThumbnail", a, e.attrGetter("ngfAsBackground", o, r))
                }
            }
        }]), ngFileUpload.config(["$compileProvider", function(e) {
            e.imgSrcSanitizationWhitelist && e.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/), e.aHrefSanitizationWhitelist && e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|local|file|data|blob):/)
        }]), ngFileUpload.filter("ngfDataUrl", ["UploadDataUrl", "$sce", function(e, t) {
            return function(n, r, i) {
                if (angular.isString(n)) return t.trustAsResourceUrl(n);
                var o = n && ((r ? n.$ngfDataUrl : n.$ngfBlobUrl) || n.$ngfDataUrl);
                return n && !o ? (!n.$ngfDataUrlFilterInProgress && angular.isObject(n) && (n.$ngfDataUrlFilterInProgress = !0, e.dataUrl(n, r)), "") : (n && delete n.$ngfDataUrlFilterInProgress, (n && o ? i ? t.trustAsResourceUrl(o) : o : n) || "")
            }
        }])
    }(), ngFileUpload.service("UploadValidate", ["UploadDataUrl", "$q", "$timeout", function(e, t, n) {
        function r(e) {
            var t = "",
                n = [];
            if (e.length > 2 && "/" === e[0] && "/" === e[e.length - 1]) t = e.substring(1, e.length - 1);
            else {
                var i = e.split(",");
                if (i.length > 1)
                    for (var o = 0; o < i.length; o++) {
                        var a = r(i[o]);
                        a.regexp ? (t += "(" + a.regexp + ")", o < i.length - 1 && (t += "|")) : n = n.concat(a.excludes)
                    } else 0 === e.indexOf("!") ? n.push("^((?!" + r(e.substring(1)).regexp + ").)*$") : (0 === e.indexOf(".") && (e = "*" + e), t = "^" + e.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$", t = t.replace(/\\\*/g, ".*").replace(/\\\?/g, "."))
            }
            return {
                regexp: t,
                excludes: n
            }
        }

        function i(e, t) {
            null == t || e.$dirty || (e.$setDirty ? e.$setDirty() : e.$dirty = !0)
        }
        var o = e;
        return o.validatePattern = function(e, t) {
            if (!t) return !0;
            var n = r(t),
                i = !0;
            if (n.regexp && n.regexp.length) {
                var o = new RegExp(n.regexp, "i");
                i = null != e.type && o.test(e.type) || null != e.name && o.test(e.name)
            }
            for (var a = n.excludes.length; a--;) {
                var s = new RegExp(n.excludes[a], "i");
                i = i && (null == e.type || s.test(e.type)) && (null == e.name || s.test(e.name))
            }
            return i
        }, o.registerModelChangeValidator = function(e, t, n) {
            e && e.$formatters.push(function(r) {
                e.$ngfModelChange ? e.$ngfModelChange = !1 : o.validate(r, e, t, n, function() {
                    o.applyModelValidation(e, r)
                })
            })
        }, o.applyModelValidation = function(e, t) {
            i(e, t), angular.forEach(e.$ngfValidations, function(t) {
                e.$setValidity(t.name, t.valid)
            })
        }, o.validate = function(e, n, r, i) {
            function a(t, r, i) {
                if (e) {
                    for (var o = "ngf" + t[0].toUpperCase() + t.substr(1), a = e.length, s = null; a--;) {
                        var l = e[a],
                            u = d(o, {
                                $file: l
                            });
                        null == u && (u = r(d("ngfValidate") || {}), s = null == s ? !0 : s), null != u && (i(l, u) || (l.$error = t, l.$errorParam = u, e.splice(a, 1), s = !1))
                    }
                    null !== s && n.$ngfValidations.push({
                        name: t,
                        valid: s
                    })
                }
            }

            function s(r, i, a, s, l) {
                var u = [o.emptyPromise()];
                if (e) {
                    var c = "ngf" + r[0].toUpperCase() + r.substr(1);
                    return e = void 0 === e.length ? [e] : e, angular.forEach(e, function(e) {
                        if (a && (null == e.type || 0 !== e.type.search(a))) return !0;
                        var t = d(c, {
                            $file: e
                        }) || i(d("ngfValidate", {
                            $file: e
                        }) || {});
                        if (t) {
                            var n = s(e, t);
                            u.push(n), n.then(function(n) {
                                l(n, t) || (e.$error = r, e.$errorParam = t)
                            }, function() {
                                d("ngfValidateForce", {
                                    $file: e
                                }) && (e.$error = r, e.$errorParam = t)
                            })
                        }
                    }), t.all(u).then(function() {
                        n.$ngfValidations.push({
                            name: r,
                            valid: !0
                        })
                    }, function() {
                        n.$ngfValidations.push({
                            name: r,
                            valid: !1
                        })
                    })
                }
            }
            n = n || {}, n.$ngfValidations = n.$ngfValidations || [], angular.forEach(n.$ngfValidations, function(e) {
                e.valid = !0
            });
            var d = function(e, t) {
                return o.attrGetter(e, r, i, t)
            };
            if (null == e || 0 === e.length) return o.emptyPromise(n);
            if (e = void 0 === e.length ? [e] : e.slice(0), a("pattern", function(e) {
                    return e.pattern
                }, o.validatePattern), a("minSize", function(e) {
                    return e.size && e.size.min
                }, function(e, t) {
                    return e.size >= o.translateScalars(t)
                }), a("maxSize", function(e) {
                    return e.size && e.size.max
                }, function(e, t) {
                    return e.size <= o.translateScalars(t)
                }), a("validateFn", function() {
                    return null
                }, function(e, t) {
                    return t === !0 || null === t || "" === t
                }), !e.length) return o.emptyPromise(n, n.$ngfValidations);
            var l = t.defer(),
                u = [o.emptyPromise()];
            return u.push(o.happyPromise(s("maxHeight", function(e) {
                return e.height && e.height.max
            }, /image/, this.imageDimensions, function(e, t) {
                return e.height <= t
            }))), u.push(o.happyPromise(s("minHeight", function(e) {
                return e.height && e.height.min
            }, /image/, this.imageDimensions, function(e, t) {
                return e.height >= t
            }))), u.push(o.happyPromise(s("maxWidth", function(e) {
                return e.width && e.width.max
            }, /image/, this.imageDimensions, function(e, t) {
                return e.width <= t
            }))), u.push(o.happyPromise(s("minWidth", function(e) {
                return e.width && e.width.min
            }, /image/, this.imageDimensions, function(e, t) {
                return e.width >= t
            }))), u.push(o.happyPromise(s("ratio", function(e) {
                return e.ratio
            }, /image/, this.imageDimensions, function(e, t) {
                for (var n = t.toString().split(","), r = !1, i = 0; i < n.length; i++) {
                    var o = n[i],
                        a = o.search(/x/i);
                    o = a > -1 ? parseFloat(o.substring(0, a)) / parseFloat(o.substring(a + 1)) : parseFloat(o), Math.abs(e.width / e.height - o) < 1e-4 && (r = !0)
                }
                return r
            }))), u.push(o.happyPromise(s("maxDuration", function(e) {
                return e.duration && e.duration.max
            }, /audio|video/, this.mediaDuration, function(e, t) {
                return e <= o.translateScalars(t)
            }))), u.push(o.happyPromise(s("minDuration", function(e) {
                return e.duration && e.duration.min
            }, /audio|video/, this.mediaDuration, function(e, t) {
                return e >= o.translateScalars(t)
            }))), u.push(o.happyPromise(s("validateAsyncFn", function() {
                return null
            }, null, function(e, t) {
                return t
            }, function(e) {
                return e === !0 || null === e || "" === e
            }))), t.all(u).then(function() {
                l.resolve(n, n.$ngfValidations)
            })
        }, o.imageDimensions = function(e) {
            if (e.$ngfWidth && e.$ngfHeight) {
                var r = t.defer();
                return n(function() {
                    r.resolve({
                        width: e.$ngfWidth,
                        height: e.$ngfHeight
                    })
                }), r.promise
            }
            if (e.$ngfDimensionPromise) return e.$ngfDimensionPromise;
            var i = t.defer();
            return n(function() {
                return 0 !== e.type.indexOf("image") ? void i.reject("not image") : void o.dataUrl(e).then(function(t) {
                    function r() {
                        var t = s[0].clientWidth,
                            n = s[0].clientHeight;
                        s.remove(), e.$ngfWidth = t, e.$ngfHeight = n, i.resolve({
                            width: t,
                            height: n
                        })
                    }

                    function o() {
                        s.remove(), i.reject("load error")
                    }

                    function a() {
                        n(function() {
                            s[0].parentNode && (s[0].clientWidth ? r() : d > 10 ? o() : a())
                        }, 1e3)
                    }
                    var s = angular.element("<img>").attr("src", t).css("visibility", "hidden").css("position", "fixed");
                    s.on("load", r), s.on("error", o);
                    var d = 0;
                    a(), angular.element(document.getElementsByTagName("body")[0]).append(s)
                }, function() {
                    i.reject("load error")
                })
            }), e.$ngfDimensionPromise = i.promise, e.$ngfDimensionPromise["finally"](function() {
                delete e.$ngfDimensionPromise
            }), e.$ngfDimensionPromise
        }, o.mediaDuration = function(e) {
            if (e.$ngfDuration) {
                var r = t.defer();
                return n(function() {
                    r.resolve(e.$ngfDuration)
                }), r.promise
            }
            if (e.$ngfDurationPromise) return e.$ngfDurationPromise;
            var i = t.defer();
            return n(function() {
                return 0 !== e.type.indexOf("audio") && 0 !== e.type.indexOf("video") ? void i.reject("not media") : void o.dataUrl(e).then(function(t) {
                    function r() {
                        var t = s[0].duration;
                        e.$ngfDuration = t, s.remove(), i.resolve(t)
                    }

                    function o() {
                        s.remove(), i.reject("load error")
                    }

                    function a() {
                        n(function() {
                            s[0].parentNode && (s[0].duration ? r() : d > 10 ? o() : a())
                        }, 1e3)
                    }
                    var s = angular.element(0 === e.type.indexOf("audio") ? "<audio>" : "<video>").attr("src", t).css("visibility", "none").css("position", "fixed");
                    s.on("loadedmetadata", r), s.on("error", o);
                    var d = 0;
                    a(), angular.element(document.body).append(s)
                }, function() {
                    i.reject("load error")
                })
            }), e.$ngfDurationPromise = i.promise, e.$ngfDurationPromise["finally"](function() {
                delete e.$ngfDurationPromise
            }), e.$ngfDurationPromise
        }, o
    }]), ngFileUpload.service("UploadResize", ["UploadValidate", "$q", function(e, t) {
        var n = e,
            r = function(e, t, n, r) {
                var i = Math.min(n / e, r / t);
                return {
                    width: e * i,
                    height: t * i
                }
            },
            i = function(e, n, i, o, a) {
                var s = t.defer(),
                    d = document.createElement("canvas"),
                    l = document.createElement("img");
                return l.onload = function() {
                    try {
                        n || (n = l.width, i = l.height);
                        var e = r(l.width, l.height, n, i);
                        d.width = e.width, d.height = e.height;
                        var t = d.getContext("2d");
                        t.drawImage(l, 0, 0, e.width, e.height), s.resolve(d.toDataURL(a || "image/WebP", o || 1))
                    } catch (u) {
                        s.reject(u)
                    }
                }, l.onerror = function() {
                    s.reject()
                }, l.src = e, s.promise
            };
        return n.dataUrltoBlob = function(e, t) {
            for (var n = e.split(","), r = n[0].match(/:(.*?);/)[1], i = atob(n[1]), o = i.length, a = new Uint8Array(o); o--;) a[o] = i.charCodeAt(o);
            var s = new Blob([a], {
                type: r
            });
            return s.name = t, s
        }, n.isResizeSupported = function() {
            var e = document.createElement("canvas");
            return window.atob && e.getContext && e.getContext("2d")
        }, n.isResizeSupported() && Object.defineProperty(Blob.prototype, "name", {
            get: function() {
                return this.$ngfName
            },
            set: function(e) {
                this.$ngfName = e
            },
            configurable: !0
        }), n.resize = function(e, r, o, a) {
            if (0 !== e.type.indexOf("image")) return n.emptyPromise(e);
            var s = t.defer();
            return n.dataUrl(e, !0).then(function(t) {
                i(t, r, o, a, e.type).then(function(t) {
                    s.resolve(n.dataUrltoBlob(t, e.name))
                }, function() {
                    s.reject()
                })
            }, function() {
                s.reject()
            }), s.promise
        }, n
    }]),
    function() {
        function e(e, n, r, i, o, a, s, d, l) {
            function u() {
                return n.attr("disabled") || h("ngfDropDisabled", e)
            }

            function c(e, t, n, r) {
                var i = h("ngfDragOverClass", e, {
                        $event: n
                    }),
                    o = "dragover";
                if (angular.isString(i)) o = i;
                else if (i && (i.delay && (v = i.delay), i.accept || i.reject)) {
                    var a = n.dataTransfer.items;
                    if (null != a && a.length)
                        for (var s = i.pattern || h("ngfPattern", e, {
                                $event: n
                            }), l = a.length; l--;) {
                            if (!d.validatePattern(a[l], s)) {
                                o = i.reject;
                                break
                            }
                            o = i.accept
                        } else o = i.accept
                }
                r(o)
            }

            function f(e, t, n, r) {
                function i(e, t, n) {
                    if (null != t)
                        if (t.isDirectory) {
                            var r = (n || "") + t.name;
                            e.push({
                                name: t.name,
                                type: "directory",
                                path: r
                            });
                            var o = t.createReader(),
                                a = [];
                            d++;
                            var s = function() {
                                o.readEntries(function(r) {
                                    try {
                                        if (r.length) a = a.concat(Array.prototype.slice.call(r || [], 0)), s();
                                        else {
                                            for (var o = 0; o < a.length; o++) i(e, a[o], (n ? n : "") + t.name + "/");
                                            d--
                                        }
                                    } catch (l) {
                                        d--, console.error(l)
                                    }
                                }, function() {
                                    d--
                                })
                            };
                            s()
                        } else d++, t.file(function(t) {
                            try {
                                d--, t.path = (n ? n : "") + t.name, e.push(t)
                            } catch (r) {
                                d--, console.error(r)
                            }
                        }, function() {
                            d--
                        })
                }
                var o = [],
                    d = 0,
                    l = e.dataTransfer.items;
                if (l && l.length > 0 && "file" !== s.protocol())
                    for (var u = 0; u < l.length; u++) {
                        if (l[u].webkitGetAsEntry && l[u].webkitGetAsEntry() && l[u].webkitGetAsEntry().isDirectory) {
                            var c = l[u].webkitGetAsEntry();
                            if (c.isDirectory && !n) continue;
                            null != c && i(o, c)
                        } else {
                            var f = l[u].getAsFile();
                            null != f && o.push(f)
                        }
                        if (!r && o.length > 0) break
                    } else {
                        var p = e.dataTransfer.files;
                        if (null != p)
                            for (var h = 0; h < p.length && (o.push(p.item(h)), r || !(o.length > 0)); h++);
                    }
                var g = 0;
                ! function m(e) {
                    a(function() {
                        if (d) 10 * g++ < 2e4 && m(10);
                        else {
                            if (!r && o.length > 1) {
                                for (u = 0;
                                    "directory" === o[u].type;) u++;
                                o = [o[u]]
                            }
                            t(o)
                        }
                    }, e || 0)
                }()
            }
            var p = t(),
                h = function(e, t, n) {
                    return d.attrGetter(e, r, t, n)
                };
            if (h("dropAvailable") && a(function() {
                    e[h("dropAvailable")] ? e[h("dropAvailable")].value = p : e[h("dropAvailable")] = p
                }), !p) return void(h("ngfHideOnDropNotAvailable", e) === !0 && n.css("display", "none"));
            null == h("ngfSelect") && d.registerModelChangeValidator(i, r, e);
            var g, m = null,
                $ = o(h("ngfStopPropagation")),
                v = 1;
            n[0].addEventListener("dragover", function(t) {
                if (!u()) {
                    if (t.preventDefault(), $(e) && t.stopPropagation(), navigator.userAgent.indexOf("Chrome") > -1) {
                        var i = t.dataTransfer.effectAllowed;
                        t.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy"
                    }
                    a.cancel(m), g || (g = "C", c(e, r, t, function(r) {
                        g = r, n.addClass(g), h("ngfDrag", e, {
                            $isDragging: !0,
                            $class: g,
                            $event: t
                        })
                    }))
                }
            }, !1), n[0].addEventListener("dragenter", function(t) {
                u() || (t.preventDefault(), $(e) && t.stopPropagation())
            }, !1), n[0].addEventListener("dragleave", function(t) {
                u() || (t.preventDefault(), $(e) && t.stopPropagation(), m = a(function() {
                    g && n.removeClass(g), g = null, h("ngfDrag", e, {
                        $isDragging: !1,
                        $event: t
                    })
                }, v || 100))
            }, !1), n[0].addEventListener("drop", function(t) {
                if (!u() && d.shouldUpdateOn("drop", r, e)) {
                    t.preventDefault(), $(e) && t.stopPropagation(), g && n.removeClass(g), g = null;
                    var o;
                    try {
                        o = t.dataTransfer && t.dataTransfer.getData && t.dataTransfer.getData("text/html")
                    } catch (a) {}
                    if (o) {
                        var s;
                        o.replace(/<img .*src *=\"([^\"]*)\"/, function(e, t) {
                            s = t
                        }), s && l({
                            url: s,
                            method: "get",
                            responseType: "arraybuffer"
                        }).then(function(n) {
                            var o = new Uint8Array(n.data),
                                a = n.headers("content-type") || "image/WebP",
                                s = new Blob([o], {
                                    type: a
                                });
                            d.updateModel(i, r, e, h("ngfChange") || h("ngfDrop"), [s], t)
                        })
                    } else f(t, function(n) {
                        d.updateModel(i, r, e, h("ngfChange") || h("ngfDrop"), n, t)
                    }, h("ngfAllowDir", e) !== !1, h("multiple") || h("ngfMultiple", e))
                }
            }, !1), n[0].addEventListener("paste", function(t) {
                if (!u() && d.shouldUpdateOn("paste", r, e)) {
                    var n = [],
                        o = t.clipboardData || t.originalEvent.clipboardData;
                    if (o && o.items) {
                        for (var a = 0; a < o.items.length; a++) - 1 !== o.items[a].type.indexOf("image") && n.push(o.items[a].getAsFile());
                        d.updateModel(i, r, e, h("ngfChange") || h("ngfDrop"), n, t)
                    }
                }
            }, !1)
        }

        function t() {
            var e = document.createElement("div");
            return "draggable" in e && "ondrop" in e && !/Edge\/12./i.test(navigator.userAgent)
        }
        ngFileUpload.directive("ngfDrop", ["$parse", "$timeout", "$location", "Upload", "$http", function(t, n, r, i, o) {
            return {
                restrict: "AEC",
                require: "?ngModel",
                link: function(a, s, d, l) {
                    e(a, s, d, l, t, n, r, i, o)
                }
            }
        }]), ngFileUpload.directive("ngfNoFileDrop", function() {
            return function(e, n) {
                t() && n.css("display", "none")
            }
        }), ngFileUpload.directive("ngfDropAvailable", ["$parse", "$timeout", "Upload", function(e, n, r) {
            return function(i, o, a) {
                if (t()) {
                    var s = e(r.attrGetter("ngfDropAvailable", a));
                    n(function() {
                        s(i), s.assign && s.assign(i, !0)
                    })
                }
            }
        }])
    }(), ngFileUpload.service("UploadExif", ["UploadResize", "$q", function(e, t) {
        function n(e) {
            var t = new DataView(e);
            if (255 !== t.getUint8(0) || 216 !== t.getUint8(1)) return "Not a valid JPEG";
            for (var n, r = 2, i = e.byteLength; i > r;) {
                if (255 !== t.getUint8(r)) return "Not a valid marker at offset " + r + ", found: " + t.getUint8(r);
                if (n = t.getUint8(r + 1), 225 === n) return a(t, r + 4, t.getUint16(r + 2) - 2);
                r += 2 + t.getUint16(r + 2)
            }
        }

        function r(e, t, n, r) {
            var o, a, s = e.getUint16(n, !r);
            for (a = 0; s > a; a++) {
                o = n + 12 * a + 2;
                var d = e.getUint16(o, !r);
                if (274 === d) return i(e, o, t, r)
            }
            return null
        }

        function i(e, t, n, r) {
            var i, o, a, s = e.getUint32(t + 4, !r),
                d = e.getUint32(t + 8, !r) + n;
            if (1 === s) return e.getUint16(t + 8, !r);
            for (i = s > 2 ? d : t + 8, o = [], a = 0; s > a; a++) o[a] = e.getUint16(i + 2 * a, !r);
            return o
        }

        function o(e, t, n) {
            for (var r = "", i = t; t + n > i; i++) r += String.fromCharCode(e.getUint8(i));
            return r
        }

        function a(e, t) {
            if ("Exif" !== o(e, t, 4)) return "Not valid EXIF data! " + o(e, t, 4);
            var n, i = t + 6;
            if (18761 === e.getUint16(i)) n = !1;
            else {
                if (19789 !== e.getUint16(i)) return "Not valid TIFF data! (no 0x4949 or 0x4D4D)";
                n = !0
            }
            if (42 !== e.getUint16(i + 2, !n)) return "Not valid TIFF data! (no 0x002A)";
            var a = e.getUint32(i + 4, !n);
            return 8 > a ? e.getUint32(i + 4, !n) : r(e, i, i + a, n)
        }

        function s(e, t, n, r) {
            switch (t) {
                case 2:
                    return e.transform(-1, 0, 0, 1, n, 0);
                case 3:
                    return e.transform(-1, 0, 0, -1, n, r);
                case 4:
                    return e.transform(1, 0, 0, -1, 0, r);
                case 5:
                    return e.transform(0, 1, 1, 0, 0, 0);
                case 6:
                    return e.transform(0, 1, -1, 0, r, 0);
                case 7:
                    return e.transform(0, -1, -1, 0, r, n);
                case 8:
                    return e.transform(0, -1, 1, 0, 0, n)
            }
        }
        var d = e;
        return d.isExifSupported = function() {
            return window.FileReader && (new FileReader).readAsArrayBuffer && d.isResizeSupported()
        }, d.orientation = function(e) {
            if (null != e.$ngfOrientation) return d.emptyPromise(e.$ngfOrientation);
            var r = t.defer(),
                i = new FileReader;
            return i.onload = function(t) {
                var i = n(t.target.result);
                angular.isString(i) ? r.reject(i) : (e.$ngfOrientation = i, r.resolve(i))
            }, i.onerror = function(e) {
                r.reject(e)
            }, i.readAsArrayBuffer(e), r.promise
        }, d.applyExifRotation = function(e) {
            if (0 !== e.type.indexOf("image/jpeg")) return d.emptyPromise(e);
            var n = t.defer();
            return d.orientation(e).then(function(t) {
                (!t || 2 > t || t > 8) && n.resolve(e), d.dataUrl(e, !0).then(function(r) {
                    var i = document.createElement("canvas"),
                        o = document.createElement("img");
                    o.onload = function() {
                        try {
                            i.width = t > 4 ? o.height : o.width, i.height = t > 4 ? o.width : o.height;
                            var r = i.getContext("2d");
                            s(r, t, o.width, o.height), r.drawImage(o, 0, 0);
                            var a = i.toDataURL(e.type || "image/WebP", 1),
                                l = d.dataUrltoBlob(a, e.name);
                            n.resolve(l)
                        } catch (u) {
                            n.reject(u)
                        }
                    }, o.onerror = function() {
                        n.reject()
                    }, o.src = r
                }, function(e) {
                    n.reject(e)
                })
            }, function(e) {
                n.reject(e)
            }), n.promise
        }, d
    }]),
    function(e, t) {
        "use strict";
        var n = "tooltips",
            r = function() {
                var e = [],
                    n = 0,
                    r = function(r) {
                        r - n >= 15 ? (e.forEach(function(e) {
                            e()
                        }), n = r) : t.console.log("Skipped!")
                    },
                    i = function() {
                        t.requestAnimationFrame(r)
                    },
                    o = function(t) {
                        t && e.push(t)
                    };
                return {
                    add: function(n) {
                        e.length || t.addEventListener("resize", i), o(n)
                    }
                }
            }(),
            i = function(e) {
                var t = {};
                return e.removeAttr(n), void 0 !== e.attr("tooltip-template") && (t["tooltip-template"] = e.attr("tooltip-template"), e.removeAttr("tooltip-template")), void 0 !== e.attr("tooltip-template-url") && (t["tooltip-template-url"] = e.attr("tooltip-template-url"), e.removeAttr("tooltip-template-url")), void 0 !== e.attr("tooltip-controller") && (t["tooltip-controller"] = e.attr("tooltip-controller"), e.removeAttr("tooltip-controller")), void 0 !== e.attr("tooltip-side") && (t["tooltip-side"] = e.attr("tooltip-side"), e.removeAttr("tooltip-side")), void 0 !== e.attr("tooltip-show-trigger") && (t["tooltip-show-trigger"] = e.attr("tooltip-show-trigger"), e.removeAttr("tooltip-show-trigger")), void 0 !== e.attr("tooltip-hide-trigger") && (t["tooltip-hide-trigger"] = e.attr("tooltip-hide-trigger"), e.removeAttr("tooltip-hide-trigger")), void 0 !== e.attr("tooltip-smart") && (t["tooltip-smart"] = e.attr("tooltip-smart"), e.removeAttr("tooltip-smart")), void 0 !== e.attr("tooltip-class") && (t["tooltip-class"] = e.attr("tooltip-class"), e.removeAttr("tooltip-class")), void 0 !== e.attr("tooltip-close-button") && (t["tooltip-close-button"] = e.attr("tooltip-close-button"), e.removeAttr("tooltip-close-button")), void 0 !== e.attr("tooltip-size") && (t["tooltip-size"] = e.attr("tooltip-size"), e.removeAttr("tooltip-size")), void 0 !== e.attr("tooltip-speed") && (t["tooltip-speed"] = e.attr("tooltip-speed"), e.removeAttr("tooltip-speed")), t
            },
            o = function(e) {
                return t.getComputedStyle ? t.getComputedStyle(e, "") : e.currentStyle ? e.currentStyle : void 0
            },
            a = function(n) {
                for (var r, i, o = t.document.querySelectorAll("._exradicated-tooltip"), a = 0, s = o.length; s > a; a += 1)
                    if (r = o.item(a), r && (i = e.element(r), i.data("_tooltip-parent") && i.data("_tooltip-parent") === n)) return i
            },
            s = function(e) {
                var t = a(e);
                t && t.remove()
            },
            d = function(e) {
                if (e) {
                    var n = e[0].getBoundingClientRect();
                    return n.top < 0 || n.top > t.document.body.offsetHeight || n.left < 0 || n.left > t.document.body.offsetWidth || n.bottom < 0 || n.bottom > t.document.body.offsetHeight || n.right < 0 || n.right > t.document.body.offsetWidth ? (e.css({
                        top: "",
                        left: "",
                        bottom: "",
                        right: ""
                    }), !0) : !1
                }
                throw new Error("You must provide a position")
            },
            l = function() {
                var e = {
                    side: "top",
                    showTrigger: "mouseover",
                    hideTrigger: "mouseleave",
                    "class": "",
                    smart: !1,
                    closeButton: !1,
                    size: "",
                    speed: "steady"
                };
                return {
                    configure: function(t) {
                        var n, r = Object.keys(e),
                            i = 0;
                        if (t)
                            for (; i < r.length; i += 1) n = r[i], n && t[n] && (e[n] = t[n])
                    },
                    $get: function() {
                        return e
                    }
                }
            },
            u = ["$log", "$http", "$compile", "$timeout", "$controller", "$injector", "tooltipsConf", function(n, l, u, c, f, p, h) {
                var g = function(n, p, g, m, $) {
                    if (g.tooltipTemplate && g.tooltipTemplateUrl) throw new Error("You can not define tooltip-template and tooltip-url together");
                    if (!g.tooltipTemplateUrl && !g.tooltipTemplate && g.tooltipController) throw new Error("You can not have a controller without a template or templateUrl defined");
                    var v, A = "_" + h.side,
                        N = h.showTrigger,
                        y = h.hideTrigger,
                        b = h.size,
                        w = "_" + h.speed;
                    g.tooltipSide = g.tooltipSide || h.side, g.tooltipShowTrigger = g.tooltipShowTrigger || h.showTrigger, g.tooltipHideTrigger = g.tooltipHideTrigger || h.hideTrigger, g.tooltipClass = g.tooltipClass || h["class"], g.tooltipSmart = "true" === g.tooltipSmart || h.smart, g.tooltipCloseButton = g.tooltipCloseButton || h.closeButton.toString(), g.tooltipSize = g.tooltipSize || h.size, g.tooltipSpeed = g.tooltipSpeed || h.speed, g.tooltipAppendToBody = "true" === g.tooltipAppendToBody, $(n, function(n, h) {
                        var m = i(n),
                            $ = e.element(t.document.createElement("tooltip")),
                            x = e.element(t.document.createElement("tip-cont")),
                            C = e.element(t.document.createElement("tip")),
                            S = e.element(t.document.createElement("tip-tip")),
                            E = e.element(t.document.createElement("span")),
                            _ = e.element(t.document.createElement("tip-arrow")),
                            k = function() {
                                return x.html()
                            },
                            T = function(e) {
                                void 0 !== e && x[0].getClientRects().length > 1 ? $.addClass("_multiline") : $.removeClass("_multiline")
                            },
                            I = function(n) {
                                if (C.addClass("_hidden"), g.tooltipSmart) switch (g.tooltipSide) {
                                    case "top":
                                        d(C) && ($.removeClass("_top"), $.addClass("_left"), d(C) && ($.removeClass("_left"), $.addClass("_bottom"), d(C) && ($.removeClass("_bottom"), $.addClass("_right"), d(C) && ($.removeClass("_right"), $.addClass("_top")))));
                                        break;
                                    case "left":
                                        d(C) && ($.removeClass("_left"), $.addClass("_bottom"), d(C) && ($.removeClass("_bottom"), $.addClass("_right"), d(C) && ($.removeClass("_right"), $.addClass("_top"), d(C) && ($.removeClass("_top"), $.addClass("_left")))));
                                        break;
                                    case "bottom":
                                        d(C) && ($.removeClass("_bottom"), $.addClass("_left"), d(C) && ($.removeClass("_left"), $.addClass("_top"), d(C) && ($.removeClass("_top"), $.addClass("_right"), d(C) && ($.removeClass("_right"), $.addClass("_bottom")))));
                                        break;
                                    case "right":
                                        d(C) && ($.removeClass("_right"), $.addClass("_top"), d(C) && ($.removeClass("_top"), $.addClass("_left"), d(C) && ($.removeClass("_left"), $.addClass("_bottom"), d(C) && ($.removeClass("_bottom"), $.addClass("_right")))));
                                        break;
                                    default:
                                        throw new Error("Position not supported")
                                }
                                if (g.tooltipAppendToBody) {
                                    var r, i, a, l, u, c = o(S[0]),
                                        f = o(_[0]),
                                        p = o(C[0]),
                                        h = C[0].getBoundingClientRect(),
                                        m = e.copy(C),
                                        v = 0,
                                        A = c.length,
                                        N = 0,
                                        y = f.length,
                                        b = 0,
                                        w = p.length,
                                        x = {},
                                        E = {},
                                        k = {};
                                    for (C.removeClass("_hidden"), m.removeClass("_hidden"), m.data("_tooltip-parent", $), s($); A > v; v += 1) r = c[v], r && c.getPropertyValue(r) && (x[r] = c.getPropertyValue(r));
                                    for (; y > N; N += 1) r = f[N], r && f.getPropertyValue(r) && (k[r] = f.getPropertyValue(r));
                                    for (; w > b; b += 1) r = p[b], r && "position" !== r && "display" !== r && "opacity" !== r && "z-index" !== r && "bottom" !== r && "height" !== r && "left" !== r && "right" !== r && "top" !== r && "width" !== r && p.getPropertyValue(r) && (E[r] = p.getPropertyValue(r));
                                    i = t.parseInt(p.getPropertyValue("padding-top"), 10), a = t.parseInt(p.getPropertyValue("padding-bottom"), 10), l = t.parseInt(p.getPropertyValue("padding-left"), 10), u = t.parseInt(p.getPropertyValue("padding-right"), 10), E.top = h.top + t.scrollY + "px", E.left = h.left + t.scrollX + "px", E.height = h.height - (i + a) + "px", E.width = h.width - (l + u) + "px", m.css(E), m.children().css(x), m.children().next().css(k), n && "true" !== g.tooltipHidden && (m.addClass("_exradicated-tooltip"), e.element(t.document.body).append(m))
                                } else C.removeClass("_hidden"), n && "true" !== g.tooltipHidden && $.addClass("active")
                            },
                            P = function() {
                                g.tooltipAppendToBody ? s($) : $.removeClass("active")
                            },
                            F = function re(e) {
                                var t, n = e.parent();
                                e[0] && (e[0].scrollHeight > e[0].clientHeight || e[0].scrollWidth > e[0].clientWidth) && e.on("scroll", function() {
                                    var e = this;
                                    t && c.cancel(t), t = c(function() {
                                        var t = a($),
                                            n = $[0].getBoundingClientRect(),
                                            r = e.getBoundingClientRect();
                                        n.top < r.top || n.bottom > r.bottom || n.left < r.left || n.right > r.right ? s($) : t && I(!0)
                                    })
                                }), n && n.length && re(n)
                            },
                            M = function(e) {
                                e && (S.empty(), S.append(E), S.append(e), c(function() {
                                    I()
                                }))
                            },
                            O = function(e) {
                                e && l.get(e).then(function(e) {
                                    e && e.data && (S.empty(), S.append(E), S.append(u(e.data)(h)), c(function() {
                                        I()
                                    }))
                                })
                            },
                            D = function(e) {
                                e && (A && $.removeAttr("_" + A), $.addClass("_" + e), A = e)
                            },
                            R = function(e) {
                                e && (N && $.off(N), $.on(e, I), N = e)
                            },
                            L = function(e) {
                                e && (y && $.off(y), $.on(e, P), y = e)
                            },
                            j = function(e) {
                                e && (v && C.removeClass(v), C.addClass(e), v = e)
                            },
                            q = function() {
                                "boolean" != typeof g.tooltipSmart && (g.tooltipSmart = "true" === g.tooltipSmart)
                            },
                            U = function(e) {
                                var t = "true" === e;
                                t ? (E.on("click", P), E.css("display", "block")) : (E.off("click"), E.css("display", "none"))
                            },
                            B = function(t) {
                                if (t) {
                                    var n, r = f(t, {
                                            $scope: h
                                        }),
                                        i = h.$new(!1, h),
                                        o = t.indexOf("as");
                                    o >= 0 ? (n = t.substr(o + 3), i[n] = r) : e.extend(i, r), S.replaceWith(u(S)(i)), Q()
                                }
                            },
                            z = function(e) {
                                e && (b && S.removeClass("_" + b), S.addClass("_" + e), b = e)
                            },
                            H = function(e) {
                                e && (w && $.removeClass("_" + w), $.addClass("_" + e), w = e)
                            },
                            V = g.$observe("tooltipTemplate", M),
                            G = g.$observe("tooltipTemplateUrl", O),
                            W = g.$observe("tooltipSide", D),
                            K = g.$observe("tooltipShowTrigger", R),
                            Y = g.$observe("tooltipHideTrigger", L),
                            Z = g.$observe("tooltipClass", j),
                            X = g.$observe("tooltipSmart", q),
                            J = g.$observe("tooltipCloseButton", U),
                            Q = g.$observe("tooltipController", B),
                            ee = g.$observe("tooltipSize", z),
                            te = g.$observe("tooltipSpeed", H),
                            ne = h.$watch(k, T);
                        E.attr({
                            id: "close-button"
                        }), E.html("&times;"), C.addClass("_hidden"), S.append(E), S.append(g.tooltipTemplate), C.append(S), C.append(_), x.append(n), $.attr(m), $.addClass("tooltips"), $.append(x), $.append(C), p.after($), g.tooltipAppendToBody && (r.add(function() {
                            F($)
                        }), F($)), r.add(function() {
                            T(), I()
                        }), c(function() {
                            I(), C.removeClass("_hidden"), $.addClass("_ready")
                        }), h.$on("$destroy", function() {
                            V(), G(), W(), K(), Y(), Z(), X(), J(), ee(), te(), ne(), n.off(g.tooltipShowTrigger + " " + g.tooltipHideTrigger)
                        })
                    })
                };
                return {
                    restrict: "A",
                    transclude: "element",
                    priority: 1,
                    terminal: !0,
                    link: g
                }
            }];
        e.module("720kb.tooltips", []).provider(n + "Conf", l).directive(n, u)
    }(angular, window),
    function(e) {
        function t(e, t, i) {
            var o = e[0],
                a = /er/.test(i) ? _indeterminate : /bl/.test(i) ? p : c,
                s = i == _update ? {
                    checked: o[c],
                    disabled: o[p],
                    indeterminate: "true" == e.attr(_indeterminate) || "false" == e.attr(_determinate)
                } : o[a];
            if (/^(ch|di|in)/.test(i) && !s) n(e, a);
            else if (/^(un|en|de)/.test(i) && s) r(e, a);
            else if (i == _update)
                for (var d in s) s[d] ? n(e, d, !0) : r(e, d, !0);
            else t && "toggle" != i || (t || e[_callback]("ifClicked"), s ? o[_type] !== u && r(e, a) : n(e, a))
        }

        function n(t, n, i) {
            var h = t[0],
                g = t.parent(),
                m = n == c,
                $ = n == _indeterminate,
                v = n == p,
                A = $ ? _determinate : m ? f : "enabled",
                N = o(t, A + a(h[_type])),
                y = o(t, n + a(h[_type]));
            if (!0 !== h[n]) {
                if (!i && n == c && h[_type] == u && h.name) {
                    var b = t.closest("form"),
                        w = 'input[name="' + h.name + '"]',
                        w = b.length ? b.find(w) : e(w);
                    w.each(function() {
                        this !== h && e(this).data(d) && r(e(this), n)
                    })
                }
                $ ? (h[n] = !0, h[c] && r(t, c, "force")) : (i || (h[n] = !0), m && h[_indeterminate] && r(t, _indeterminate, !1)), s(t, m, n, i)
            }
            h[p] && o(t, _cursor, !0) && g.find("." + l).css(_cursor, "default"), g[_add](y || o(t, n) || ""), g.attr("role") && !$ && g.attr("aria-" + (v ? p : c), "true"), g[_remove](N || o(t, A) || "")
        }

        function r(e, t, n) {
            var r = e[0],
                i = e.parent(),
                d = t == c,
                u = t == _indeterminate,
                h = t == p,
                g = u ? _determinate : d ? f : "enabled",
                m = o(e, g + a(r[_type])),
                $ = o(e, t + a(r[_type]));
            !1 !== r[t] && ((u || !n || "force" == n) && (r[t] = !1), s(e, d, g, n)), !r[p] && o(e, _cursor, !0) && i.find("." + l).css(_cursor, "pointer"), i[_remove]($ || o(e, t) || ""), i.attr("role") && !u && i.attr("aria-" + (h ? p : c), "false"), i[_add](m || o(e, g) || "")
        }

        function i(t, n) {
            t.data(d) && (t.parent().html(t.attr("style", t.data(d).s || "")), n && t[_callback](n), t.off(".i").unwrap(), e(_label + '[for="' + t[0].id + '"]').add(t.closest(_label)).off(".i"))
        }

        function o(e, t, n) {
            return e.data(d) ? e.data(d).o[t + (n ? "" : "Class")] : void 0
        }

        function a(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }

        function s(e, t, n, r) {
            r || (t && e[_callback]("ifToggled"), e[_callback]("ifChanged")[_callback]("if" + a(n)))
        }
        var d = "iCheck",
            l = d + "-helper",
            u = "radio",
            c = "checked",
            f = "un" + c,
            p = "disabled";
        _determinate = "determinate", _indeterminate = "in" + _determinate, _update = "update", _type = "type", _click = "click", _touch = "touchbegin.i touchend.i", _add = "addClass", _remove = "removeClass", _callback = "trigger", _label = "label", _cursor = "cursor", _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent), e.fn[d] = function(o, a) {
            var s = 'input[type="checkbox"], input[type="' + u + '"]',
                f = e(),
                h = function(t) {
                    t.each(function() {
                        var t = e(this);
                        f = t.is(s) ? f.add(t) : f.add(t.find(s))
                    })
                };
            if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(o)) return o = o.toLowerCase(), h(this), f.each(function() {
                var n = e(this);
                "destroy" == o ? i(n, "ifDestroyed") : t(n, !0, o), e.isFunction(a) && a()
            });
            if ("object" != typeof o && o) return this;
            var g = e.extend({
                    checkedClass: c,
                    disabledClass: p,
                    indeterminateClass: _indeterminate,
                    labelHover: !0
                }, o),
                m = g.handle,
                $ = g.hoverClass || "hover",
                v = g.focusClass || "focus",
                A = g.activeClass || "active",
                N = !!g.labelHover,
                y = g.labelHoverClass || "hover",
                b = 0 | ("" + g.increaseArea).replace("%", "");
            return ("checkbox" == m || m == u) && (s = 'input[type="' + m + '"]'), -50 > b && (b = -50), h(this), f.each(function() {
                var o = e(this);
                i(o);
                var a = this,
                    s = a.id,
                    f = -b + "%",
                    h = 100 + 2 * b + "%",
                    h = {
                        position: "absolute",
                        top: f,
                        left: f,
                        display: "block",
                        width: h,
                        height: h,
                        margin: 0,
                        padding: 0,
                        background: "#fff",
                        border: 0,
                        opacity: 0
                    },
                    f = _mobile ? {
                        position: "absolute",
                        visibility: "hidden"
                    } : b ? h : {
                        position: "absolute",
                        opacity: 0
                    },
                    m = "checkbox" == a[_type] ? g.checkboxClass || "icheckbox" : g.radioClass || "i" + u,
                    w = e(_label + '[for="' + s + '"]').add(o.closest(_label)),
                    x = !!g.aria,
                    C = d + "-" + Math.random().toString(36).substr(2, 6),
                    S = '<div class="' + m + '" ' + (x ? 'role="' + a[_type] + '" ' : "");
                x && w.each(function() {
                    S += 'aria-labelledby="', this.id ? S += this.id : (this.id = C, S += C), S += '"'
                }), S = o.wrap(S + "/>")[_callback]("ifCreated").parent().append(g.insert), h = e('<ins class="' + l + '"/>').css(h).appendTo(S), o.data(d, {
                    o: g,
                    s: o.attr("style")
                }).css(f), g.inheritClass && S[_add](a.className || ""), g.inheritID && s && S.attr("id", d + "-" + s), "static" == S.css("position") && S.css("position", "relative"), t(o, !0, _update), w.length && w.on(_click + ".i mouseover.i mouseout.i " + _touch, function(n) {
                    var r = n[_type],
                        i = e(this);
                    if (!a[p]) {
                        if (r == _click) {
                            if (e(n.target).is("a")) return;
                            t(o, !1, !0)
                        } else N && (/ut|nd/.test(r) ? (S[_remove]($), i[_remove](y)) : (S[_add]($), i[_add](y)));
                        if (!_mobile) return !1;
                        n.stopPropagation()
                    }
                }), o.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(e) {
                    var t = e[_type];
                    return e = e.keyCode, t == _click ? !1 : "keydown" == t && 32 == e ? (a[_type] == u && a[c] || (a[c] ? r(o, c) : n(o, c)), !1) : void("keyup" == t && a[_type] == u ? !a[c] && n(o, c) : /us|ur/.test(t) && S["blur" == t ? _remove : _add](v))
                }), h.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function(e) {
                    var n = e[_type],
                        r = /wn|up/.test(n) ? A : $;
                    if (!a[p]) {
                        if (n == _click ? t(o, !1, !0) : (/wn|er|in/.test(n) ? S[_add](r) : S[_remove](r + " " + A), w.length && N && r == $ && w[/ut|nd/.test(n) ? _remove : _add](y)), !_mobile) return !1;
                        e.stopPropagation()
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function(e, t, n, r) {
        function i(t, n) {
            this.element = t, this.options = e.extend({}, a, n), this._defaults = a, this._name = o, this.init()
        }
        var o = "stellar",
            a = {
                scrollProperty: "scroll",
                positionProperty: "position",
                horizontalScrolling: !0,
                verticalScrolling: !0,
                horizontalOffset: 0,
                verticalOffset: 0,
                responsive: !1,
                parallaxBackgrounds: !0,
                parallaxElements: !0,
                hideDistantElements: !0,
                hideElement: function(e) {
                    e.hide()
                },
                showElement: function(e) {
                    e.show()
                }
            },
            s = {
                scroll: {
                    getLeft: function(e) {
                        return e.scrollLeft()
                    },
                    setLeft: function(e, t) {
                        e.scrollLeft(t)
                    },
                    getTop: function(e) {
                        return e.scrollTop()
                    },
                    setTop: function(e, t) {
                        e.scrollTop(t)
                    }
                },
                position: {
                    getLeft: function(e) {
                        return -1 * parseInt(e.css("left"), 10)
                    },
                    getTop: function(e) {
                        return -1 * parseInt(e.css("top"), 10)
                    }
                },
                margin: {
                    getLeft: function(e) {
                        return -1 * parseInt(e.css("margin-left"), 10)
                    },
                    getTop: function(e) {
                        return -1 * parseInt(e.css("margin-top"), 10)
                    }
                },
                transform: {
                    getLeft: function(e) {
                        var t = getComputedStyle(e[0])[u];
                        return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[4], 10) : 0
                    },
                    getTop: function(e) {
                        var t = getComputedStyle(e[0])[u];
                        return "none" !== t ? -1 * parseInt(t.match(/(-?[0-9]+)/g)[5], 10) : 0
                    }
                }
            },
            d = {
                position: {
                    setLeft: function(e, t) {
                        e.css("left", t)
                    },
                    setTop: function(e, t) {
                        e.css("top", t)
                    }
                },
                transform: {
                    setPosition: function(e, t, n, r, i) {
                        e[0].style[u] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)"
                    }
                }
            },
            l = function() {
                var t, n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                    r = e("script")[0].style,
                    i = "";
                for (t in r)
                    if (n.test(t)) {
                        i = t.match(n)[0];
                        break
                    }
                return "WebkitOpacity" in r && (i = "Webkit"), "KhtmlOpacity" in r && (i = "Khtml"),
                    function(e) {
                        return i + (i.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
                    }
            }(),
            u = l("transform"),
            c = e("<div />", {
                style: "background:#fff"
            }).css("background-position-x") !== r,
            f = c ? function(e, t, n) {
                e.css({
                    "background-position-x": t,
                    "background-position-y": n
                })
            } : function(e, t, n) {
                e.css("background-position", t + " " + n)
            },
            p = c ? function(e) {
                return [e.css("background-position-x"), e.css("background-position-y")]
            } : function(e) {
                return e.css("background-position").split(" ")
            },
            h = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                setTimeout(e, 1e3 / 60)
            };
        i.prototype = {
            init: function() {
                this.options.name = o + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                    firstLoad: !0
                }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
            },
            _defineElements: function() {
                this.element === n.body && (this.element = t), this.$scrollElement = e(this.element), this.$element = this.element === t ? e("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
            },
            _defineGetters: function() {
                var e = this,
                    t = s[e.options.scrollProperty];
                this._getScrollLeft = function() {
                    return t.getLeft(e.$scrollElement)
                }, this._getScrollTop = function() {
                    return t.getTop(e.$scrollElement)
                }
            },
            _defineSetters: function() {
                var t = this,
                    n = s[t.options.scrollProperty],
                    r = d[t.options.positionProperty],
                    i = n.setLeft,
                    o = n.setTop;
                this._setScrollLeft = "function" == typeof i ? function(e) {
                    i(t.$scrollElement, e)
                } : e.noop, this._setScrollTop = "function" == typeof o ? function(e) {
                    o(t.$scrollElement, e)
                } : e.noop, this._setPosition = r.setPosition || function(e, n, i, o, a) {
                    t.options.horizontalScrolling && r.setLeft(e, n, i), t.options.verticalScrolling && r.setTop(e, o, a)
                }
            },
            _handleWindowLoadAndResize: function() {
                var n = this,
                    r = e(t);
                n.options.responsive && r.bind("load." + this.name, function() {
                    n.refresh()
                }), r.bind("resize." + this.name, function() {
                    n._detectViewport(), n.options.responsive && n.refresh()
                })
            },
            refresh: function(n) {
                var r = this,
                    i = r._getScrollLeft(),
                    o = r._getScrollTop();
                n && n.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function() {
                    var e = r._getScrollLeft(),
                        t = r._getScrollTop();
                    r._setScrollLeft(e + 1), r._setScrollTop(t + 1), r._setScrollLeft(e), r._setScrollTop(t)
                }), this._setScrollLeft(i), this._setScrollTop(o)
            },
            _detectViewport: function() {
                var e = this.$viewportElement.offset(),
                    t = null !== e && e !== r;
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0
            },
            _findParticles: function() {
                var t = this;
                this._getScrollLeft(), this._getScrollTop();
                if (this.particles !== r)
                    for (var n = this.particles.length - 1; n >= 0; n--) this.particles[n].$element.data("stellar-elementIsActive", r);
                this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function(n) {
                    var i, o, a, s, d, l, u, c, f, p = e(this),
                        h = 0,
                        g = 0,
                        m = 0,
                        $ = 0;
                    if (p.data("stellar-elementIsActive")) {
                        if (p.data("stellar-elementIsActive") !== this) return
                    } else p.data("stellar-elementIsActive", this);
                    t.options.showElement(p), p.data("stellar-startingLeft") ? (p.css("left", p.data("stellar-startingLeft")), p.css("top", p.data("stellar-startingTop"))) : (p.data("stellar-startingLeft", p.css("left")), p.data("stellar-startingTop", p.css("top"))), a = p.position().left, s = p.position().top, d = "auto" === p.css("margin-left") ? 0 : parseInt(p.css("margin-left"), 10), l = "auto" === p.css("margin-top") ? 0 : parseInt(p.css("margin-top"), 10), c = p.offset().left - d, f = p.offset().top - l, p.parents().each(function() {
                        var t = e(this);
                        return t.data("stellar-offset-parent") === !0 ? (h = m, g = $, u = t, !1) : (m += t.position().left, void($ += t.position().top))
                    }), i = p.data("stellar-horizontal-offset") !== r ? p.data("stellar-horizontal-offset") : u !== r && u.data("stellar-horizontal-offset") !== r ? u.data("stellar-horizontal-offset") : t.horizontalOffset, o = p.data("stellar-vertical-offset") !== r ? p.data("stellar-vertical-offset") : u !== r && u.data("stellar-vertical-offset") !== r ? u.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({
                        $element: p,
                        $offsetParent: u,
                        isFixed: "fixed" === p.css("position"),
                        horizontalOffset: i,
                        verticalOffset: o,
                        startingPositionLeft: a,
                        startingPositionTop: s,
                        startingOffsetLeft: c,
                        startingOffsetTop: f,
                        parentOffsetLeft: h,
                        parentOffsetTop: g,
                        stellarRatio: p.data("stellar-ratio") !== r ? p.data("stellar-ratio") : 1,
                        width: p.outerWidth(!0),
                        height: p.outerHeight(!0),
                        isHidden: !1
                    })
                })
            },
            _findBackgrounds: function() {
                var t, n = this,
                    i = this._getScrollLeft(),
                    o = this._getScrollTop();
                this.backgrounds = [], this.options.parallaxBackgrounds && (t = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (t = t.add(this.$element)), t.each(function() {
                    var t, a, s, d, l, u, c, h = e(this),
                        g = p(h),
                        m = 0,
                        $ = 0,
                        v = 0,
                        A = 0;
                    if (h.data("stellar-backgroundIsActive")) {
                        if (h.data("stellar-backgroundIsActive") !== this) return
                    } else h.data("stellar-backgroundIsActive", this);
                    h.data("stellar-backgroundStartingLeft") ? f(h, h.data("stellar-backgroundStartingLeft"), h.data("stellar-backgroundStartingTop")) : (h.data("stellar-backgroundStartingLeft", g[0]), h.data("stellar-backgroundStartingTop", g[1])), s = "auto" === h.css("margin-left") ? 0 : parseInt(h.css("margin-left"), 10), d = "auto" === h.css("margin-top") ? 0 : parseInt(h.css("margin-top"), 10), l = h.offset().left - s - i, u = h.offset().top - d - o, h.parents().each(function() {
                        var t = e(this);
                        return t.data("stellar-offset-parent") === !0 ? (m = v, $ = A, c = t, !1) : (v += t.position().left, void(A += t.position().top))
                    }), t = h.data("stellar-horizontal-offset") !== r ? h.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : n.horizontalOffset, a = h.data("stellar-vertical-offset") !== r ? h.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : n.verticalOffset, n.backgrounds.push({
                        $element: h,
                        $offsetParent: c,
                        isFixed: "fixed" === h.css("background-attachment"),
                        horizontalOffset: t,
                        verticalOffset: a,
                        startingValueLeft: g[0],
                        startingValueTop: g[1],
                        startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
                        startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
                        startingPositionLeft: h.position().left,
                        startingPositionTop: h.position().top,
                        startingOffsetLeft: l,
                        startingOffsetTop: u,
                        parentOffsetLeft: m,
                        parentOffsetTop: $,
                        stellarRatio: h.data("stellar-background-ratio") === r ? 1 : h.data("stellar-background-ratio")
                    })
                }))
            },
            _reset: function() {
                var e, t, n, r, i;
                for (i = this.particles.length - 1; i >= 0; i--) e = this.particles[i], t = e.$element.data("stellar-startingLeft"), n = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, n, n), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
                for (i = this.backgrounds.length - 1; i >= 0; i--) r = this.backgrounds[i], r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), f(r.$element, r.startingValueLeft, r.startingValueTop)
            },
            destroy: function() {
                this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = e.noop, e(t).unbind("load." + this.name).unbind("resize." + this.name)
            },
            _setOffsets: function() {
                var n = this,
                    r = e(t);
                r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), r.bind("resize.horizontal-" + this.name, function() {
                    n.horizontalOffset = n.options.horizontalOffset()
                })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), r.bind("resize.vertical-" + this.name, function() {
                    n.verticalOffset = n.options.verticalOffset()
                })) : this.verticalOffset = this.options.verticalOffset
            },
            _repositionElements: function() {
                var e, t, n, r, i, o, a, s, d, l, u = this._getScrollLeft(),
                    c = this._getScrollTop(),
                    p = !0,
                    h = !0;
                if (this.currentScrollLeft !== u || this.currentScrollTop !== c || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                    for (this.currentScrollLeft = u, this.currentScrollTop = c, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, l = this.particles.length - 1; l >= 0; l--) e = this.particles[l], t = e.isFixed ? 1 : 0, this.options.horizontalScrolling ? (o = (u + e.horizontalOffset + this.viewportOffsetLeft + e.startingPositionLeft - e.startingOffsetLeft + e.parentOffsetLeft) * -(e.stellarRatio + t - 1) + e.startingPositionLeft, s = o - e.startingPositionLeft + e.startingOffsetLeft) : (o = e.startingPositionLeft, s = e.startingOffsetLeft), this.options.verticalScrolling ? (a = (c + e.verticalOffset + this.viewportOffsetTop + e.startingPositionTop - e.startingOffsetTop + e.parentOffsetTop) * -(e.stellarRatio + t - 1) + e.startingPositionTop, d = a - e.startingPositionTop + e.startingOffsetTop) : (a = e.startingPositionTop, d = e.startingOffsetTop), this.options.hideDistantElements && (h = !this.options.horizontalScrolling || s + e.width > (e.isFixed ? 0 : u) && s < (e.isFixed ? 0 : u) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || d + e.height > (e.isFixed ? 0 : c) && d < (e.isFixed ? 0 : c) + this.viewportHeight + this.viewportOffsetTop), h && p ? (e.isHidden && (this.options.showElement(e.$element), e.isHidden = !1), this._setPosition(e.$element, o, e.startingPositionLeft, a, e.startingPositionTop)) : e.isHidden || (this.options.hideElement(e.$element), e.isHidden = !0);
                    for (l = this.backgrounds.length - 1; l >= 0; l--) n = this.backgrounds[l], t = n.isFixed ? 0 : 1, r = this.options.horizontalScrolling ? (u + n.horizontalOffset - this.viewportOffsetLeft - n.startingOffsetLeft + n.parentOffsetLeft - n.startingBackgroundPositionLeft) * (t - n.stellarRatio) + "px" : n.startingValueLeft, i = this.options.verticalScrolling ? (c + n.verticalOffset - this.viewportOffsetTop - n.startingOffsetTop + n.parentOffsetTop - n.startingBackgroundPositionTop) * (t - n.stellarRatio) + "px" : n.startingValueTop, f(n.$element, r, i)
                }
            },
            _handleScrollEvent: function() {
                var e = this,
                    t = !1,
                    n = function() {
                        e._repositionElements(), t = !1
                    },
                    r = function() {
                        t || (h(n), t = !0)
                    };
                this.$scrollElement.bind("scroll." + this.name, r), r()
            },
            _startAnimationLoop: function() {
                var e = this;
                this._animationLoop = function() {
                    h(e._animationLoop), e._repositionElements()
                }, this._animationLoop()
            }
        }, e.fn[o] = function(t) {
            var n = arguments;
            return t === r || "object" == typeof t ? this.each(function() {
                e.data(this, "plugin_" + o) || e.data(this, "plugin_" + o, new i(this, t))
            }) : "string" == typeof t && "_" !== t[0] && "init" !== t ? this.each(function() {
                var r = e.data(this, "plugin_" + o);
                r instanceof i && "function" == typeof r[t] && r[t].apply(r, Array.prototype.slice.call(n, 1)), "destroy" === t && e.data(this, "plugin_" + o, null)
            }) : void 0
        }, e[o] = function(n) {
            var r = e(t);
            return r.stellar.apply(r, Array.prototype.slice.call(arguments, 0))
        }, e[o].scrollProperty = s, e[o].positionProperty = d, t.Stellar = i
    }(jQuery, this, document), ! function(e) {
        function t() {
            e[n].glbl || (s = {
                $wndw: e(window),
                $html: e("html"),
                $body: e("body")
            }, i = {}, o = {}, a = {}, e.each([i, o, a], function(e, t) {
                t.add = function(e) {
                    e = e.split(" ");
                    for (var n = 0, r = e.length; r > n; n++) t[e[n]] = t.mm(e[n])
                }
            }), i.mm = function(e) {
                return "mm-" + e
            }, i.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), i.umm = function(e) {
                return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
            }, o.mm = function(e) {
                return "mm-" + e
            }, o.add("parent sub"), a.mm = function(e) {
                return e + ".mm"
            }, a.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend click keydown"), e[n]._c = i, e[n]._d = o, e[n]._e = a, e[n].glbl = s)
        }
        var n = "mmenu",
            r = "5.5.3";
        if (!(e[n] && e[n].version > r)) {
            e[n] = function(e, t, n) {
                this.$menu = e, this._api = ["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = t, this.conf = n, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
                var r = this.$pnls.children();
                return this._initAddons(), this.init(r), "function" == typeof this.___debug && this.___debug(), this
            }, e[n].version = r, e[n].addons = {}, e[n].uniqueId = 0, e[n].defaults = {
                extensions: [],
                navbar: {
                    add: !0,
                    title: "Menu",
                    titleLink: "panel"
                },
                onClick: {
                    setSelected: !0
                },
                slidingSubmenus: !0
            }, e[n].configuration = {
                classNames: {
                    divider: "Divider",
                    inset: "Inset",
                    panel: "Panel",
                    selected: "Selected",
                    spacer: "Spacer",
                    vertical: "Vertical"
                },
                clone: !1,
                openingInterval: 25,
                panelNodetype: "ul, ol, div",
                transitionDuration: 400
            }, e[n].prototype = {
                init: function(e) {
                    e = e.not("." + i.nopanel), e = this._initPanels(e), this.trigger("init", e), this.trigger("update")
                },
                update: function() {
                    this.trigger("update")
                },
                setSelected: function(e) {
                    this.$menu.find("." + i.listview).children().removeClass(i.selected), e.addClass(i.selected), this.trigger("setSelected", e)
                },
                openPanel: function(t) {
                    var r = t.parent();
                    if (r.hasClass(i.vertical)) {
                        var o = r.parents("." + i.subopened);
                        if (o.length) return this.openPanel(o.first());
                        r.addClass(i.opened)
                    } else {
                        if (t.hasClass(i.current)) return;
                        var a = this.$pnls.children("." + i.panel),
                            s = a.filter("." + i.current);
                        a.removeClass(i.highest).removeClass(i.current).not(t).not(s).not("." + i.vertical).addClass(i.hidden), e[n].support.csstransitions || s.addClass(i.hidden), t.hasClass(i.opened) ? t.nextAll("." + i.opened).addClass(i.highest).removeClass(i.opened).removeClass(i.subopened) : (t.addClass(i.highest), s.addClass(i.subopened)), t.removeClass(i.hidden).addClass(i.current), setTimeout(function() {
                            t.removeClass(i.subopened).addClass(i.opened)
                        }, this.conf.openingInterval)
                    }
                    this.trigger("openPanel", t)
                },
                closePanel: function(e) {
                    var t = e.parent();
                    t.hasClass(i.vertical) && (t.removeClass(i.opened), this.trigger("closePanel", e))
                },
                closeAllPanels: function() {
                    this.$menu.find("." + i.listview).children().removeClass(i.selected).filter("." + i.vertical).removeClass(i.opened);
                    var e = this.$pnls.children("." + i.panel),
                        t = e.first();
                    this.$pnls.children("." + i.panel).not(t).removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden), this.openPanel(t)
                },
                togglePanel: function(e) {
                    var t = e.parent();
                    t.hasClass(i.vertical) && this[t.hasClass(i.opened) ? "closePanel" : "openPanel"](e)
                },
                getInstance: function() {
                    return this
                },
                bind: function(e, t) {
                    this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t)
                },
                trigger: function() {
                    var e = this,
                        t = Array.prototype.slice.call(arguments),
                        n = t.shift();
                    if (this.cbck[n])
                        for (var r = 0, i = this.cbck[n].length; i > r; r++) this.cbck[n][r].apply(e, t)
                },
                _initMenu: function() {
                    this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
                        e(this).attr("id", i.mm(e(this).attr("id")))
                    })), this.$menu.contents().each(function() {
                        3 == e(this)[0].nodeType && e(this).remove()
                    }), this.$pnls = e('<div class="' + i.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu), this.$menu.parent().addClass(i.wrapper);
                    var t = [i.menu];
                    this.opts.slidingSubmenus || t.push(i.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && t.push(this.opts.extensions), this.$menu.addClass(t.join(" "))
                },
                _initPanels: function(t) {
                    var n = this,
                        r = this.__findAddBack(t, "ul, ol");
                    this.__refactorClass(r, this.conf.classNames.inset, "inset").addClass(i.nolistview + " " + i.nopanel), r.not("." + i.nolistview).addClass(i.listview);
                    var a = this.__findAddBack(t, "." + i.listview).children();
                    this.__refactorClass(a, this.conf.classNames.selected, "selected"), this.__refactorClass(a, this.conf.classNames.divider, "divider"), this.__refactorClass(a, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(t, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
                    var s = e(),
                        d = t.add(t.find("." + i.panel)).add(this.__findAddBack(t, "." + i.listview).children().children(this.conf.panelNodetype)).not("." + i.nopanel);
                    this.__refactorClass(d, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || d.addClass(i.vertical), d.each(function() {
                        var t = e(this),
                            r = t;
                        t.is("ul, ol") ? (t.wrap('<div class="' + i.panel + '" />'), r = t.parent()) : r.addClass(i.panel);
                        var o = t.attr("id");
                        t.removeAttr("id"), r.attr("id", o || n.__getUniqueId()), t.hasClass(i.vertical) && (t.removeClass(n.conf.classNames.vertical), r.add(r.parent()).addClass(i.vertical)), s = s.add(r)
                    });
                    var l = e("." + i.panel, this.$menu);
                    s.each(function() {
                        var t = e(this),
                            r = t.parent(),
                            a = r.children("a, span").first();
                        if (r.is("." + i.panels) || (r.data(o.sub, t), t.data(o.parent, r)), !r.children("." + i.next).length && r.parent().is("." + i.listview)) {
                            var s = t.attr("id"),
                                d = e('<a class="' + i.next + '" href="#' + s + '" data-target="#' + s + '" />').insertBefore(a);
                            a.is("span") && d.addClass(i.fullsubopen)
                        }
                        if (!t.children("." + i.navbar).length && !r.hasClass(i.vertical)) {
                            if (r.parent().is("." + i.listview)) var r = r.closest("." + i.panel);
                            else var a = r.closest("." + i.panel).find('a[href="#' + t.attr("id") + '"]').first(),
                                r = a.closest("." + i.panel);
                            var l = e('<div class="' + i.navbar + '" />');
                            if (r.length) {
                                var s = r.attr("id");
                                switch (n.opts.navbar.titleLink) {
                                    case "anchor":
                                        _url = a.attr("href");
                                        break;
                                    case "panel":
                                    case "parent":
                                        _url = "#" + s;
                                        break;
                                    case "none":
                                    default:
                                        _url = !1
                                }
                                l.append('<a class="' + i.btn + " " + i.prev + '" href="#' + s + '" data-target="#' + s + '" />').append(e('<a class="' + i.title + '"' + (_url ? ' href="' + _url + '"' : "") + " />").text(a.text())).prependTo(t), n.opts.navbar.add && t.addClass(i.hasnavbar)
                            } else n.opts.navbar.title && (l.append('<a class="' + i.title + '">' + n.opts.navbar.title + "</a>").prependTo(t), n.opts.navbar.add && t.addClass(i.hasnavbar))
                        }
                    });
                    var u = this.__findAddBack(t, "." + i.listview).children("." + i.selected).removeClass(i.selected).last().addClass(i.selected);
                    u.add(u.parentsUntil("." + i.menu, "li")).filter("." + i.vertical).addClass(i.opened).end().not("." + i.vertical).each(function() {
                        e(this).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).addClass(i.subopened)
                    }), u.children("." + i.panel).not("." + i.vertical).addClass(i.opened).parentsUntil("." + i.menu, "." + i.panel).not("." + i.vertical).first().addClass(i.opened).addClass(i.subopened);
                    var c = l.filter("." + i.opened);
                    return c.length || (c = s.first()), c.addClass(i.opened).last().addClass(i.current), s.not("." + i.vertical).not(c.last()).addClass(i.hidden).end().appendTo(this.$pnls), s
                },
                _initAnchors: function() {
                    var t = this;
                    s.$body.on(a.click + "-oncanvas", "a[href]", function(r) {
                        var o = e(this),
                            a = !1,
                            s = t.$menu.find(o).length;
                        for (var d in e[n].addons)
                            if (a = e[n].addons[d].clickAnchor.call(t, o, s)) break;
                        if (!a && s) {
                            var l = o.attr("href");
                            if (l.length > 1 && "#" == l.slice(0, 1)) try {
                                var u = e(l, t.$menu);
                                u.is("." + i.panel) && (a = !0, t[o.parent().hasClass(i.vertical) ? "togglePanel" : "openPanel"](u))
                            } catch (c) {}
                        }
                        if (a && r.preventDefault(), !a && s && o.is("." + i.listview + " > li > a") && !o.is('[rel="external"]') && !o.is('[target="_blank"]')) {
                            t.__valueOrFn(t.opts.onClick.setSelected, o) && t.setSelected(e(r.target).parent());
                            var f = t.__valueOrFn(t.opts.onClick.preventDefault, o, "#" == l.slice(0, 1));
                            f && r.preventDefault(), t.__valueOrFn(t.opts.onClick.close, o, f) && t.close()
                        }
                    })
                },
                _initAddons: function() {
                    for (var t in e[n].addons) e[n].addons[t].add.call(this), e[n].addons[t].add = function() {};
                    for (var t in e[n].addons) e[n].addons[t].setup.call(this)
                },
                __api: function() {
                    var t = this,
                        n = {};
                    return e.each(this._api, function() {
                        var e = this;
                        n[e] = function() {
                            var r = t[e].apply(t, arguments);
                            return "undefined" == typeof r ? n : r
                        }
                    }), n
                },
                __valueOrFn: function(e, t, n) {
                    return "function" == typeof e ? e.call(t[0]) : "undefined" == typeof e && "undefined" != typeof n ? n : e
                },
                __refactorClass: function(e, t, n) {
                    return e.filter("." + t).removeClass(t).addClass(i[n])
                },
                __findAddBack: function(e, t) {
                    return e.find(t).add(e.filter(t))
                },
                __filterListItems: function(e) {
                    return e.not("." + i.divider).not("." + i.hidden)
                },
                __transitionend: function(e, t, n) {
                    var r = !1,
                        i = function() {
                            r || t.call(e[0]), r = !0
                        };
                    e.one(a.transitionend, i), e.one(a.webkitTransitionEnd, i), setTimeout(i, 1.1 * n)
                },
                __getUniqueId: function() {
                    return i.mm(e[n].uniqueId++)
                }
            }, e.fn[n] = function(r, i) {
                return t(), r = e.extend(!0, {}, e[n].defaults, r), i = e.extend(!0, {}, e[n].configuration, i), this.each(function() {
                    var t = e(this);
                    if (!t.data(n)) {
                        var o = new e[n](t, r, i);
                        t.data(n, o.__api())
                    }
                })
            }, e[n].support = {
                touch: "ontouchstart" in window || navigator.msMaxTouchPoints,
                csstransitions: function() {
                    if ("undefined" != typeof Modernizr && "undefined" != typeof Modernizr.csstransitions) return Modernizr.csstransitions;
                    var e = document.body || document.documentElement,
                        t = e.style,
                        n = "transition";
                    if ("string" == typeof t[n]) return !0;
                    var r = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                    n = n.charAt(0).toUpperCase() + n.substr(1);
                    for (var i = 0; i < r.length; i++)
                        if ("string" == typeof t[r[i] + n]) return !0;
                    return !1
                }()
            };
            var i, o, a, s
        }
    }(jQuery), ! function(e) {
        var t = "mmenu",
            n = "offCanvas";
        e[t].addons[n] = {
            setup: function() {
                if (this.opts[n]) {
                    var i = this.opts[n],
                        o = this.conf[n];
                    a = e[t].glbl, this._api = e.merge(this._api, ["open", "close", "setPage"]), ("top" == i.position || "bottom" == i.position) && (i.zposition = "front"), "string" != typeof o.pageSelector && (o.pageSelector = "> " + o.pageNodetype), a.$allMenus = (a.$allMenus || e()).add(this.$menu), this.vars.opened = !1;
                    var s = [r.offcanvas];
                    "left" != i.position && s.push(r.mm(i.position)), "back" != i.zposition && s.push(r.mm(i.zposition)), this.$menu.addClass(s.join(" ")).parent().removeClass(r.wrapper), this.setPage(a.$page), this._initBlocker(), this["_initWindow_" + n](), this.$menu[o.menuInjectMethod + "To"](o.menuWrapperSelector)
                }
            },
            add: function() {
                r = e[t]._c, i = e[t]._d, o = e[t]._e, r.add("offcanvas slideout blocking modal background opening blocker page"), i.add("style"), o.add("resize")
            },
            clickAnchor: function(e) {
                if (!this.opts[n]) return !1;
                var t = this.$menu.attr("id");
                if (t && t.length && (this.conf.clone && (t = r.umm(t)), e.is('[href="#' + t + '"]'))) return this.open(), !0;
                if (a.$page) {
                    var t = a.$page.first().attr("id");
                    return t && t.length && e.is('[href="#' + t + '"]') ? (this.close(), !0) : !1
                }
            }
        }, e[t].defaults[n] = {
            position: "left",
            zposition: "back",
            blockUI: !0,
            moveBackground: !0
        }, e[t].configuration[n] = {
            pageNodetype: "div",
            pageSelector: null,
            noPageSelector: [],
            wrapPageIfNeeded: !0,
            menuWrapperSelector: "body",
            menuInjectMethod: "prepend"
        }, e[t].prototype.open = function() {
            if (!this.vars.opened) {
                var e = this;
                this._openSetup(), setTimeout(function() {
                    e._openFinish()
                }, this.conf.openingInterval), this.trigger("open")
            }
        }, e[t].prototype._openSetup = function() {
            var t = this,
                s = this.opts[n];
            this.closeAllOthers(), a.$page.each(function() {
                e(this).data(i.style, e(this).attr("style") || "")
            }), a.$wndw.trigger(o.resize + "-" + n, [!0]);
            var d = [r.opened];
            s.blockUI && d.push(r.blocking), "modal" == s.blockUI && d.push(r.modal), s.moveBackground && d.push(r.background), "left" != s.position && d.push(r.mm(this.opts[n].position)), "back" != s.zposition && d.push(r.mm(this.opts[n].zposition)), this.opts.extensions && d.push(this.opts.extensions), a.$html.addClass(d.join(" ")), setTimeout(function() {
                t.vars.opened = !0
            }, this.conf.openingInterval), this.$menu.addClass(r.current + " " + r.opened)
        }, e[t].prototype._openFinish = function() {
            var e = this;
            this.__transitionend(a.$page.first(), function() {
                e.trigger("opened")
            }, this.conf.transitionDuration), a.$html.addClass(r.opening), this.trigger("opening")
        }, e[t].prototype.close = function() {
            if (this.vars.opened) {
                var t = this;
                this.__transitionend(a.$page.first(), function() {
                    t.$menu.removeClass(r.current).removeClass(r.opened), a.$html.removeClass(r.opened).removeClass(r.blocking).removeClass(r.modal).removeClass(r.background).removeClass(r.mm(t.opts[n].position)).removeClass(r.mm(t.opts[n].zposition)), t.opts.extensions && a.$html.removeClass(t.opts.extensions), a.$page.each(function() {
                        e(this).attr("style", e(this).data(i.style))
                    }), t.vars.opened = !1, t.trigger("closed")
                }, this.conf.transitionDuration), a.$html.removeClass(r.opening), this.trigger("close"), this.trigger("closing")
            }
        }, e[t].prototype.closeAllOthers = function() {
            a.$allMenus.not(this.$menu).each(function() {
                var n = e(this).data(t);
                n && n.close && n.close()
            })
        }, e[t].prototype.setPage = function(t) {
            var i = this,
                o = this.conf[n];
            t && t.length || (t = a.$body.find(o.pageSelector), o.noPageSelector.length && (t = t.not(o.noPageSelector.join(", "))), t.length > 1 && o.wrapPageIfNeeded && (t = t.wrapAll("<" + this.conf[n].pageNodetype + " />").parent())), t.each(function() {
                e(this).attr("id", e(this).attr("id") || i.__getUniqueId())
            }), t.addClass(r.page + " " + r.slideout), a.$page = t, this.trigger("setPage", t)
        }, e[t].prototype["_initWindow_" + n] = function() {
            a.$wndw.off(o.keydown + "-" + n).on(o.keydown + "-" + n, function(e) {
                return a.$html.hasClass(r.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
            });
            var e = 0;
            a.$wndw.off(o.resize + "-" + n).on(o.resize + "-" + n, function(t, n) {
                if (1 == a.$page.length && (n || a.$html.hasClass(r.opened))) {
                    var i = a.$wndw.height();
                    (n || i != e) && (e = i, a.$page.css("minHeight", i))
                }
            })
        }, e[t].prototype._initBlocker = function() {
            var t = this;
            this.opts[n].blockUI && (a.$blck || (a.$blck = e('<div id="' + r.blocker + '" class="' + r.slideout + '" />')), a.$blck.appendTo(a.$body).off(o.touchstart + "-" + n + " " + o.touchmove + "-" + n).on(o.touchstart + "-" + n + " " + o.touchmove + "-" + n, function(e) {
                e.preventDefault(), e.stopPropagation(), a.$blck.trigger(o.mousedown + "-" + n)
            }).off(o.mousedown + "-" + n).on(o.mousedown + "-" + n, function(e) {
                e.preventDefault(), a.$html.hasClass(r.modal) || (t.closeAllOthers(), t.close())
            }))
        };
        var r, i, o, a
    }(jQuery), ! function(e) {
        var t = "mmenu",
            n = "autoHeight";
        e[t].addons[n] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    switch (this.opts.offCanvas.position) {
                        case "left":
                        case "right":
                            return
                    }
                    var i = this,
                        s = this.opts[n];
                    if (this.conf[n], a = e[t].glbl, "boolean" == typeof s && s && (s = {
                            height: "auto"
                        }), "object" != typeof s && (s = {}), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), "auto" == s.height) {
                        this.$menu.addClass(r.autoheight);
                        var d = function(e) {
                            var t = parseInt(this.$pnls.css("top"), 10) || 0;
                            _bot = parseInt(this.$pnls.css("bottom"), 10) || 0, this.$menu.addClass(r.measureheight), e = e || this.$pnls.children("." + r.current), e.is("." + r.vertical) && (e = e.parents("." + r.panel).not("." + r.vertical).first()), this.$menu.height(e.outerHeight() + t + _bot).removeClass(r.measureheight)
                        };
                        this.bind("update", d), this.bind("openPanel", d), this.bind("closePanel", d), this.bind("open", d), a.$wndw.off(o.resize + "-autoheight").on(o.resize + "-autoheight", function() {
                            d.call(i)
                        })
                    }
                }
            },
            add: function() {
                r = e[t]._c, i = e[t]._d, o = e[t]._e, r.add("autoheight measureheight"), o.add("resize")
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            height: "default"
        };
        var r, i, o, a
    }(jQuery), ! function(e) {
        var t = "mmenu",
            n = "backButton";
        e[t].addons[n] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var i = this,
                        o = this.opts[n];
                    if (this.conf[n], a = e[t].glbl, "boolean" == typeof o && (o = {
                            close: o
                        }), "object" != typeof o && (o = {}), o = e.extend(!0, {}, e[t].defaults[n], o), o.close) {
                        var s = "#" + i.$menu.attr("id");
                        this.bind("opened", function() {
                            location.hash != s && history.pushState(null, document.title, s)
                        }), e(window).on("popstate", function(e) {
                            a.$html.hasClass(r.opened) ? (e.stopPropagation(), i.close()) : location.hash == s && (e.stopPropagation(), i.open())
                        })
                    }
                }
            },
            add: function() {
                return window.history && window.history.pushState ? (r = e[t]._c, i = e[t]._d, void(o = e[t]._e)) : void(e[t].addons[n].setup = function() {})
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            close: !1
        };
        var r, i, o, a
    }(jQuery), ! function(e) {
        var t = "mmenu",
            n = "counters";
        e[t].addons[n] = {
            setup: function() {
                var o = this,
                    s = this.opts[n];
                this.conf[n], a = e[t].glbl, "boolean" == typeof s && (s = {
                    add: s,
                    update: s
                }), "object" != typeof s && (s = {}), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), this.bind("init", function(t) {
                    this.__refactorClass(e("em", t), this.conf.classNames[n].counter, "counter")
                }), s.add && this.bind("init", function(t) {
                    t.each(function() {
                        var t = e(this).data(i.parent);
                        t && (t.children("em." + r.counter).length || t.prepend(e('<em class="' + r.counter + '" />')))
                    })
                }), s.update && this.bind("update", function() {
                    this.$pnls.find("." + r.panel).each(function() {
                        var t = e(this),
                            n = t.data(i.parent);
                        if (n) {
                            var a = n.children("em." + r.counter);
                            a.length && (t = t.children("." + r.listview), t.length && a.html(o.__filterListItems(t.children()).length))
                        }
                    })
                })
            },
            add: function() {
                r = e[t]._c, i = e[t]._d, o = e[t]._e, r.add("counter search noresultsmsg")
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            add: !1,
            update: !1
        }, e[t].configuration.classNames[n] = {
            counter: "Counter"
        };
        var r, i, o, a
    }(jQuery), ! function(e) {
        var t = "mmenu",
            n = "dividers";
        e[t].addons[n] = {
            setup: function() {
                var i = this,
                    s = this.opts[n];
                if (this.conf[n], a = e[t].glbl, "boolean" == typeof s && (s = {
                        add: s,
                        fixed: s
                    }), "object" != typeof s && (s = {}), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), this.bind("init", function() {
                        this.__refactorClass(e("li", this.$menu), this.conf.classNames[n].collapsed, "collapsed")
                    }), s.add && this.bind("init", function(t) {
                        switch (s.addTo) {
                            case "panels":
                                var n = t;
                                break;
                            default:
                                var n = e(s.addTo, this.$pnls).filter("." + r.panel)
                        }
                        e("." + r.divider, n).remove(), n.find("." + r.listview).not("." + r.vertical).each(function() {
                            var t = "";
                            i.__filterListItems(e(this).children()).each(function() {
                                var n = e.trim(e(this).children("a, span").text()).slice(0, 1).toLowerCase();
                                n != t && n.length && (t = n, e('<li class="' + r.divider + '">' + n + "</li>").insertBefore(this))
                            })
                        })
                    }), s.collapse && this.bind("init", function(t) {
                        e("." + r.divider, t).each(function() {
                            var t = e(this),
                                n = t.nextUntil("." + r.divider, "." + r.collapsed);
                            n.length && (t.children("." + r.subopen).length || (t.wrapInner("<span />"), t.prepend('<a href="#" class="' + r.subopen + " " + r.fullsubopen + '" />')))
                        })
                    }), s.fixed) {
                    var d = function(t) {
                        t = t || this.$pnls.children("." + r.current);
                        var n = t.find("." + r.divider).not("." + r.hidden);
                        if (n.length) {
                            this.$menu.addClass(r.hasdividers);
                            var i = t.scrollTop() || 0,
                                o = "";
                            t.is(":visible") && t.find("." + r.divider).not("." + r.hidden).each(function() {
                                e(this).position().top + i < i + 1 && (o = e(this).text())
                            }), this.$fixeddivider.text(o)
                        } else this.$menu.removeClass(r.hasdividers)
                    };
                    this.$fixeddivider = e('<ul class="' + r.listview + " " + r.fixeddivider + '"><li class="' + r.divider + '"></li></ul>').prependTo(this.$pnls).children(), this.bind("openPanel", d), this.bind("init", function(t) {
                        t.off(o.scroll + "-dividers " + o.touchmove + "-dividers").on(o.scroll + "-dividers " + o.touchmove + "-dividers", function() {
                            d.call(i, e(this))
                        })
                    })
                }
            },
            add: function() {
                r = e[t]._c, i = e[t]._d, o = e[t]._e, r.add("collapsed uncollapsed fixeddivider hasdividers"), o.add("scroll")
            },
            clickAnchor: function(e, t) {
                if (this.opts[n].collapse && t) {
                    var i = e.parent();
                    if (i.is("." + r.divider)) {
                        var o = i.nextUntil("." + r.divider, "." + r.collapsed);
                        return i.toggleClass(r.opened), o[i.hasClass(r.opened) ? "addClass" : "removeClass"](r.uncollapsed), !0
                    }
                }
                return !1
            }
        }, e[t].defaults[n] = {
            add: !1,
            addTo: "panels",
            fixed: !1,
            collapse: !1
        }, e[t].configuration.classNames[n] = {
            collapsed: "Collapsed"
        };
        var r, i, o, a
    }(jQuery), ! function(e) {
        function t(e, t, n) {
            return t > e && (e = t), e > n && (e = n), e
        }
        var n = "mmenu",
            r = "dragOpen";
        e[n].addons[r] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var o = this,
                        a = this.opts[r],
                        d = this.conf[r];
                    if (s = e[n].glbl, "boolean" == typeof a && (a = {
                            open: a
                        }), "object" != typeof a && (a = {}), a = this.opts[r] = e.extend(!0, {}, e[n].defaults[r], a), a.open) {
                        var l, u, c, f, p, h = {},
                            g = 0,
                            m = !1,
                            $ = !1,
                            v = 0,
                            A = 0;
                        switch (this.opts.offCanvas.position) {
                            case "left":
                            case "right":
                                h.events = "panleft panright", h.typeLower = "x", h.typeUpper = "X", $ = "width";
                                break;
                            case "top":
                            case "bottom":
                                h.events = "panup pandown", h.typeLower = "y", h.typeUpper = "Y", $ = "height"
                        }
                        switch (this.opts.offCanvas.position) {
                            case "right":
                            case "bottom":
                                h.negative = !0, f = function(e) {
                                    e >= s.$wndw[$]() - a.maxStartPos && (g = 1)
                                };
                                break;
                            default:
                                h.negative = !1, f = function(e) {
                                    e <= a.maxStartPos && (g = 1)
                                }
                        }
                        switch (this.opts.offCanvas.position) {
                            case "left":
                                h.open_dir = "right", h.close_dir = "left";
                                break;
                            case "right":
                                h.open_dir = "left", h.close_dir = "right";
                                break;
                            case "top":
                                h.open_dir = "down", h.close_dir = "up";
                                break;
                            case "bottom":
                                h.open_dir = "up", h.close_dir = "down"
                        }
                        switch (this.opts.offCanvas.zposition) {
                            case "front":
                                p = function() {
                                    return this.$menu
                                };
                                break;
                            default:
                                p = function() {
                                    return e("." + i.slideout)
                                }
                        }
                        var N = this.__valueOrFn(a.pageNode, this.$menu, s.$page);
                        "string" == typeof N && (N = e(N));
                        var y = new Hammer(N[0], a.vendors.hammer);
                        y.on("panstart", function(e) {
                            f(e.center[h.typeLower]), s.$slideOutNodes = p(), m = h.open_dir
                        }).on(h.events + " panend", function(e) {
                            g > 0 && e.preventDefault()
                        }).on(h.events, function(e) {
                            if (l = e["delta" + h.typeUpper], h.negative && (l = -l), l != v && (m = l >= v ? h.open_dir : h.close_dir), v = l, v > a.threshold && 1 == g) {
                                if (s.$html.hasClass(i.opened)) return;
                                g = 2, o._openSetup(), o.trigger("opening"), s.$html.addClass(i.dragging), A = t(s.$wndw[$]() * d[$].perc, d[$].min, d[$].max)
                            }
                            2 == g && (u = t(v, 10, A) - ("front" == o.opts.offCanvas.zposition ? A : 0), h.negative && (u = -u), c = "translate" + h.typeUpper + "(" + u + "px )", s.$slideOutNodes.css({
                                "-webkit-transform": "-webkit-" + c,
                                transform: c
                            }))
                        }).on("panend", function() {
                            2 == g && (s.$html.removeClass(i.dragging), s.$slideOutNodes.css("transform", ""), o[m == h.open_dir ? "_openFinish" : "close"]()), g = 0
                        })
                    }
                }
            },
            add: function() {
                return "function" != typeof Hammer || Hammer.VERSION < 2 ? void(e[n].addons[r].setup = function() {}) : (i = e[n]._c, o = e[n]._d, a = e[n]._e, void i.add("dragging"))
            },
            clickAnchor: function() {}
        }, e[n].defaults[r] = {
            open: !1,
            maxStartPos: 100,
            threshold: 50,
            vendors: {
                hammer: {}
            }
        }, e[n].configuration[r] = {
            width: {
                perc: .8,
                min: 140,
                max: 440
            },
            height: {
                perc: .8,
                min: 140,
                max: 880
            }
        };
        var i, o, a, s
    }(jQuery), ! function(e) {
        var t = "mmenu",
            n = "fixedElements";
        e[t].addons[n] = {
            setup: function() {
                if (this.opts.offCanvas) {
                    var r = this.opts[n];
                    this.conf[n], a = e[t].glbl, r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r);
                    var i = function(e) {
                        var t = this.conf.classNames[n].fixed;
                        this.__refactorClass(e.find("." + t), t, "slideout").appendTo(a.$body)
                    };
                    i.call(this, a.$page), this.bind("setPage", i)
                }
            },
            add: function() {
                r = e[t]._c, i = e[t]._d, o = e[t]._e, r.add("fixed")
            },
            clickAnchor: function() {}
        }, e[t].configuration.classNames[n] = {
            fixed: "Fixed"
        };
        var r, i, o, a
    }(jQuery), ! function(e) {
        var t = "mmenu",
            n = "iconPanels";
        e[t].addons[n] = {
            setup: function() {
                var i = this,
                    o = this.opts[n];
                if (this.conf[n], a = e[t].glbl, "boolean" == typeof o && (o = {
                        add: o
                    }), "number" == typeof o && (o = {
                        add: !0,
                        visible: o
                    }), "object" != typeof o && (o = {}), o = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], o), o.visible++, o.add) {
                    this.$menu.addClass(r.iconpanel);
                    for (var s = [], d = 0; d <= o.visible; d++) s.push(r.iconpanel + "-" + d);
                    s = s.join(" ");
                    var l = function(t) {
                        var n = i.$pnls.children("." + r.panel).removeClass(s),
                            a = n.filter("." + r.subopened);
                        a.removeClass(r.hidden).add(t).slice(-o.visible).each(function(t) {
                            e(this).addClass(r.iconpanel + "-" + t)
                        })
                    };
                    this.bind("openPanel", l), this.bind("init", function(t) {
                        l.call(i, i.$pnls.children("." + r.current)), o.hideNavbars && t.removeClass(r.hasnavbar), t.each(function() {
                            e(this).children("." + r.subblocker).length || e(this).prepend('<a href="#' + e(this).closest("." + r.panel).attr("id") + '" class="' + r.subblocker + '" />')
                        })
                    })
                }
            },
            add: function() {
                r = e[t]._c, i = e[t]._d, o = e[t]._e, r.add("iconpanel subblocker")
            },
            clickAnchor: function() {}
        }, e[t].defaults[n] = {
            add: !1,
            visible: 3,
            hideNavbars: !1
        };
        var r, i, o, a
    }(jQuery), ! function(e) {
        var t = "mmenu",
            n = "navbars";
        e[t].addons[n] = {
            setup: function() {
                var i = this,
                    o = this.opts[n],
                    s = this.conf[n];
                if (a = e[t].glbl, "undefined" != typeof o) {
                    o instanceof Array || (o = [o]);
                    var d = {};
                    e.each(o, function(a) {
                        var l = o[a];
                        "boolean" == typeof l && l && (l = {}), "object" != typeof l && (l = {}), "undefined" == typeof l.content && (l.content = ["prev", "title"]), l.content instanceof Array || (l.content = [l.content]), l = e.extend(!0, {}, i.opts.navbar, l);
                        var u = l.position,
                            c = l.height;
                        "number" != typeof c && (c = 1), c = Math.min(4, Math.max(1, c)), "bottom" != u && (u = "top"), d[u] || (d[u] = 0), d[u]++;
                        var f = e("<div />").addClass(r.navbar + " " + r.navbar + "-" + u + " " + r.navbar + "-" + u + "-" + d[u] + " " + r.navbar + "-size-" + c);
                        d[u] += c - 1;
                        for (var p = 0, h = l.content.length; h > p; p++) {
                            var g = e[t].addons[n][l.content[p]] || !1;
                            g ? g.call(i, f, l, s) : (g = l.content[p], g instanceof e || (g = e(l.content[p])), g.each(function() {
                                f.append(e(this))
                            }))
                        }
                        var m = Math.ceil(f.children().not("." + r.btn).length / c);
                        m > 1 && f.addClass(r.navbar + "-content-" + m), f.children("." + r.btn).length && f.addClass(r.hasbtns), f.prependTo(i.$menu)
                    });
                    for (var l in d) i.$menu.addClass(r.hasnavbar + "-" + l + "-" + d[l])
                }
            },
            add: function() {
                r = e[t]._c, i = e[t]._d, o = e[t]._e, r.add("close hasbtns")
            },
            clickAnchor: function() {}
        }, e[t].configuration[n] = {
            breadcrumbSeparator: "/"
        }, e[t].configuration.classNames[n] = {
            panelTitle: "Title",
            panelNext: "Next",
            panelPrev: "Prev"
        };
        var r, i, o, a
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            r = "breadcrumbs";
        e[t].addons[n][r] = function(n, r, i) {
            var o = e[t]._c,
                a = e[t]._d;
            o.add("breadcrumbs separator"), n.append('<span class="' + o.breadcrumbs + '"></span>'), this.bind("init", function(t) {
                t.removeClass(o.hasnavbar).each(function() {
                    for (var t = [], n = e(this), r = e('<span class="' + o.breadcrumbs + '"></span>'), s = e(this).children().first(), d = !0; s && s.length;) {
                        s.is("." + o.panel) || (s = s.closest("." + o.panel));
                        var l = s.children("." + o.navbar).children("." + o.title).text();
                        t.unshift(d ? "<span>" + l + "</span>" : '<a href="#' + s.attr("id") + '">' + l + "</a>"), d = !1, s = s.data(a.parent)
                    }
                    r.append(t.join('<span class="' + o.separator + '">' + i.breadcrumbSeparator + "</span>")).appendTo(n.children("." + o.navbar))
                })
            });
            var s = function() {
                var e = this.$pnls.children("." + o.current),
                    t = n.find("." + o.breadcrumbs),
                    r = e.children("." + o.navbar).children("." + o.breadcrumbs);
                t.html(r.html())
            };
            this.bind("openPanel", s), this.bind("init", s)
        }
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            r = "close";
        e[t].addons[n][r] = function(n) {
            var r = e[t]._c,
                i = e[t].glbl;
            n.append('<a class="' + r.close + " " + r.btn + '" href="#"></a>');
            var o = function(e) {
                n.find("." + r.close).attr("href", "#" + e.attr("id"))
            };
            o.call(this, i.$page), this.bind("setPage", o)
        }
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            r = "next";
        e[t].addons[n][r] = function(r) {
            var i = e[t]._c;
            r.append('<a class="' + i.next + " " + i.btn + '" href="#"></a>');
            var o = function(e) {
                e = e || this.$pnls.children("." + i.current);
                var t = r.find("." + i.next),
                    o = e.find("." + this.conf.classNames[n].panelNext),
                    a = o.attr("href"),
                    s = o.html();
                t[a ? "attr" : "removeAttr"]("href", a), t[a || s ? "removeClass" : "addClass"](i.hidden), t.html(s)
            };
            this.bind("openPanel", o), this.bind("init", function() {
                o.call(this)
            })
        }
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            r = "prev";
        e[t].addons[n][r] = function(r) {
            var i = e[t]._c;
            r.append('<a class="' + i.prev + " " + i.btn + '" href="#"></a>'), this.bind("init", function(e) {
                e.removeClass(i.hasnavbar)
            });
            var o = function() {
                var e = this.$pnls.children("." + i.current),
                    t = r.find("." + i.prev),
                    o = e.find("." + this.conf.classNames[n].panelPrev);
                o.length || (o = e.children("." + i.navbar).children("." + i.prev));
                var a = o.attr("href"),
                    s = o.html();
                t[a ? "attr" : "removeAttr"]("href", a), t[a || s ? "removeClass" : "addClass"](i.hidden), t.html(s)
            };
            this.bind("openPanel", o), this.bind("init", o)
        }
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            r = "searchfield";
        e[t].addons[n][r] = function(n) {
            var r = e[t]._c,
                i = e('<div class="' + r.search + '" />').appendTo(n);
            "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = i
        }
    }(jQuery),
    function(e) {
        var t = "mmenu",
            n = "navbars",
            r = "title";
        e[t].addons[n][r] = function(r, i) {
            var o = e[t]._c;
            r.append('<a class="' + o.title + '"></a>');
            var a = function(e) {
                e = e || this.$pnls.children("." + o.current);
                var t = r.find("." + o.title),
                    a = e.find("." + this.conf.classNames[n].panelTitle);
                a.length || (a = e.children("." + o.navbar).children("." + o.title));
                var s = a.attr("href"),
                    d = a.html() || i.title;
                t[s ? "attr" : "removeAttr"]("href", s), t[s || d ? "removeClass" : "addClass"](o.hidden), t.html(d)
            };
            this.bind("openPanel", a), this.bind("init", function() {
                a.call(this)
            })
        }
    }(jQuery), ! function(e) {
        function t(e) {
            switch (e) {
                case 9:
                case 16:
                case 17:
                case 18:
                case 37:
                case 38:
                case 39:
                case 40:
                    return !0
            }
            return !1
        }
        var n = "mmenu",
            r = "searchfield";
        e[n].addons[r] = {
            setup: function() {
                var d = this,
                    l = this.opts[r],
                    u = this.conf[r];
                s = e[n].glbl, "boolean" == typeof l && (l = {
                    add: l
                }), "object" != typeof l && (l = {}), l = this.opts[r] = e.extend(!0, {}, e[n].defaults[r], l), this.bind("close", function() {
                    this.$menu.find("." + i.search).find("input").blur()
                }), this.bind("init", function(n) {
                    if (l.add) {
                        switch (l.addTo) {
                            case "panels":
                                var r = n;
                                break;
                            default:
                                var r = e(l.addTo, this.$menu)
                        }
                        r.each(function() {
                            var t = e(this);
                            if (!t.is("." + i.panel) || !t.is("." + i.vertical)) {
                                if (!t.children("." + i.search).length) {
                                    var n = u.form ? "form" : "div",
                                        r = e("<" + n + ' class="' + i.search + '" />');
                                    if (u.form && "object" == typeof u.form)
                                        for (var o in u.form) r.attr(o, u.form[o]);
                                    r.append('<input placeholder="' + l.placeholder + '" type="text" autocomplete="off" />'), t.hasClass(i.search) ? t.replaceWith(r) : t.prepend(r).addClass(i.hassearch)
                                }
                                if (l.noResults) {
                                    var a = t.closest("." + i.panel).length;
                                    if (a || (t = d.$pnls.children("." + i.panel).first()), !t.children("." + i.noresultsmsg).length) {
                                        var s = t.children("." + i.listview).first();
                                        e('<div class="' + i.noresultsmsg + '" />').append(l.noResults)[s.length ? "insertAfter" : "prependTo"](s.length ? s : t)
                                    }
                                }
                            }
                        }), l.search && e("." + i.search, this.$menu).each(function() {
                            var n = e(this),
                                r = n.closest("." + i.panel).length;
                            if (r) var s = n.closest("." + i.panel),
                                u = s;
                            else var s = e("." + i.panel, d.$menu),
                                u = d.$menu;
                            var c = n.children("input"),
                                f = d.__findAddBack(s, "." + i.listview).children("li"),
                                p = f.filter("." + i.divider),
                                h = d.__filterListItems(f),
                                g = "> a",
                                m = g + ", > span",
                                $ = function() {
                                    var t = c.val().toLowerCase();
                                    s.scrollTop(0), h.add(p).addClass(i.hidden).find("." + i.fullsubopensearch).removeClass(i.fullsubopen).removeClass(i.fullsubopensearch), h.each(function() {
                                        var n = e(this),
                                            r = g;
                                        (l.showTextItems || l.showSubPanels && n.find("." + i.next)) && (r = m), e(r, n).text().toLowerCase().indexOf(t) > -1 && n.add(n.prevAll("." + i.divider).first()).removeClass(i.hidden)
                                    }), l.showSubPanels && s.each(function() {
                                        var t = e(this);
                                        d.__filterListItems(t.find("." + i.listview).children()).each(function() {
                                            var t = e(this),
                                                n = t.data(o.sub);
                                            t.removeClass(i.nosubresults), n && n.find("." + i.listview).children().removeClass(i.hidden)
                                        })
                                    }), e(s.get().reverse()).each(function(t) {
                                        var n = e(this),
                                            a = n.data(o.parent);
                                        a && (d.__filterListItems(n.find("." + i.listview).children()).length ? (a.hasClass(i.hidden) && a.children("." + i.next).not("." + i.fullsubopen).addClass(i.fullsubopen).addClass(i.fullsubopensearch), a.removeClass(i.hidden).removeClass(i.nosubresults).prevAll("." + i.divider).first().removeClass(i.hidden)) : r || (n.hasClass(i.opened) && setTimeout(function() {
                                            d.openPanel(a.closest("." + i.panel))
                                        }, 1.5 * (t + 1) * d.conf.openingInterval), a.addClass(i.nosubresults)))
                                    }), u[h.not("." + i.hidden).length ? "removeClass" : "addClass"](i.noresults), this.update()
                                };
                            c.off(a.keyup + "-searchfield " + a.change + "-searchfield").on(a.keyup + "-searchfield", function(e) {
                                t(e.keyCode) || $.call(d)
                            }).on(a.change + "-searchfield", function() {
                                $.call(d)
                            })
                        })
                    }
                })
            },
            add: function() {
                i = e[n]._c, o = e[n]._d, a = e[n]._e, i.add("search hassearch noresultsmsg noresults nosubresults fullsubopensearch"), a.add("change keyup")
            },
            clickAnchor: function() {}
        }, e[n].defaults[r] = {
            add: !1,
            addTo: "panels",
            search: !0,
            placeholder: "Search",
            noResults: "No results found.",
            showTextItems: !1,
            showSubPanels: !0
        }, e[n].configuration[r] = {
            form: !1
        };
        var i, o, a, s
    }(jQuery), ! function(e) {
        var t = "mmenu",
            n = "sectionIndexer";
        e[t].addons[n] = {
            setup: function() {
                var i = this,
                    s = this.opts[n];
                this.conf[n], a = e[t].glbl, "boolean" == typeof s && (s = {
                    add: s
                }), "object" != typeof s && (s = {}), s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s), this.bind("init", function(t) {
                    if (s.add) {
                        switch (s.addTo) {
                            case "panels":
                                var n = t;
                                break;
                            default:
                                var n = e(s.addTo, this.$menu).filter("." + r.panel)
                        }
                        n.find("." + r.divider).closest("." + r.panel).addClass(r.hasindexer)
                    }
                    if (!this.$indexer && this.$pnls.children("." + r.hasindexer).length) {
                        this.$indexer = e('<div class="' + r.indexer + '" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(o.mouseover + "-sectionindexer " + r.touchstart + "-sectionindexer", function() {
                            var t = e(this).attr("href").slice(1),
                                n = i.$pnls.children("." + r.current),
                                o = n.find("." + r.listview),
                                a = !1,
                                s = n.scrollTop(),
                                d = o.position().top + parseInt(o.css("margin-top"), 10) + parseInt(o.css("padding-top"), 10) + s;
                            n.scrollTop(0), o.children("." + r.divider).not("." + r.hidden).each(function() {
                                a === !1 && t == e(this).text().slice(0, 1).toLowerCase() && (a = e(this).position().top + d)
                            }), n.scrollTop(a !== !1 ? a : s)
                        });
                        var a = function(e) {
                            i.$menu[(e.hasClass(r.hasindexer) ? "add" : "remove") + "Class"](r.hasindexer)
                        };
                        this.bind("openPanel", a), a.call(this, this.$pnls.children("." + r.current))
                    }
                })
            },
            add: function() {
                r = e[t]._c, i = e[t]._d, o = e[t]._e, r.add("indexer hasindexer"), o.add("mouseover touchstart")
            },
            clickAnchor: function(e) {
                return e.parent().is("." + r.indexer) ? !0 : void 0
            }
        }, e[t].defaults[n] = {
            add: !1,
            addTo: "panels"
        };
        var r, i, o, a
    }(jQuery), ! function(e) {
        var t = "mmenu",
            n = "toggles";
        e[t].addons[n] = {
            setup: function() {
                var i = this;
                this.opts[n], this.conf[n], a = e[t].glbl, this.bind("init", function(t) {
                    this.__refactorClass(e("input", t), this.conf.classNames[n].toggle, "toggle"), this.__refactorClass(e("input", t), this.conf.classNames[n].check, "check"), e("input." + r.toggle + ", input." + r.check, t).each(function() {
                        var t = e(this),
                            n = t.closest("li"),
                            o = t.hasClass(r.toggle) ? "toggle" : "check",
                            a = t.attr("id") || i.__getUniqueId();
                        n.children('label[for="' + a + '"]').length || (t.attr("id", a), n.prepend(t), e('<label for="' + a + '" class="' + r[o] + '"></label>').insertBefore(n.children("a, span").last()))
                    })
                })
            },
            add: function() {
                r = e[t]._c, i = e[t]._d, o = e[t]._e, r.add("toggle check")
            },
            clickAnchor: function() {}
        }, e[t].configuration.classNames[n] = {
            toggle: "Toggle",
            check: "Check"
        };
        var r, i, o, a
    }(jQuery), ! function(e, t, n) {
        function r(e, t) {
            return typeof e === t
        }

        function i() {
            var e, t, n, i, o, a, s;
            for (var d in A)
                if (A.hasOwnProperty(d)) {
                    if (e = [], t = A[d], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                    for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) a = e[o], s = a.split("."), 1 === s.length ? y[s[0]] = i : (!y[s[0]] || y[s[0]] instanceof Boolean || (y[s[0]] = new Boolean(y[s[0]])), y[s[0]][s[1]] = i), v.push((i ? "" : "no-") + s.join("-"))
                }
        }

        function o(e) {
            var t = x.className,
                n = y._config.classPrefix || "";
            if (C && (t = t.baseVal), y._config.enableJSClass) {
                var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(r, "$1" + n + "js$2")
            }
            y._config.enableClasses && (t += " " + n + e.join(" " + n), C ? x.className.baseVal = t : x.className = t)
        }

        function a() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : C ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
        }

        function s() {
            var e = t.body;
            return e || (e = a(C ? "svg" : "body"), e.fake = !0), e
        }

        function d(e, n, r, i) {
            var o, d, l, u, c = "modernizr",
                f = a("div"),
                p = s();
            if (parseInt(r, 10))
                for (; r--;) l = a("div"), l.id = i ? i[r] : c + (r + 1), f.appendChild(l);
            return o = a("style"), o.type = "text/css", o.id = "s" + c, (p.fake ? p : f).appendChild(o), p.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), f.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), d = n(f, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = u, x.offsetHeight) : f.parentNode.removeChild(f), !!d
        }

        function l(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function u(e) {
            return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                return t + n.toUpperCase()
            }).replace(/^-/, "")
        }

        function c(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function f(e, t, n) {
            var i;
            for (var o in e)
                if (e[o] in t) return n === !1 ? e[o] : (i = t[e[o]], r(i, "function") ? c(i, n || t) : i);
            return !1
        }

        function p(e) {
            return e.replace(/([A-Z])/g, function(e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function h(t, r) {
            var i = t.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (; i--;)
                    if (e.CSS.supports(p(t[i]), r)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in e) {
                for (var o = []; i--;) o.push("(" + p(t[i]) + ":" + r + ")");
                return o = o.join(" or "), d("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                    return "absolute" == getComputedStyle(e, null).position
                })
            }
            return n
        }

        function g(e, t, i, o) {
            function s() {
                c && (delete P.style, delete P.modElem)
            }
            if (o = r(o, "undefined") ? !1 : o, !r(i, "undefined")) {
                var d = h(e, i);
                if (!r(d, "undefined")) return d
            }
            for (var c, f, p, g, m, $ = ["modernizr", "tspan"]; !P.style;) c = !0, P.modElem = a($.shift()), P.style = P.modElem.style;
            for (p = e.length, f = 0; p > f; f++)
                if (g = e[f], m = P.style[g], l(g, "-") && (g = u(g)), P.style[g] !== n) {
                    if (o || r(i, "undefined")) return s(), "pfx" == t ? g : !0;
                    try {
                        P.style[g] = i
                    } catch (v) {}
                    if (P.style[g] != m) return s(), "pfx" == t ? g : !0
                }
            return s(), !1
        }

        function m(e, t, n, i, o) {
            var a = e.charAt(0).toUpperCase() + e.slice(1),
                s = (e + " " + k.join(a + " ") + a).split(" ");
            return r(t, "string") || r(t, "undefined") ? g(s, t, i, o) : (s = (e + " " + T.join(a + " ") + a).split(" "), f(s, t, n))
        }

        function $(e, t, r) {
            return m(e, n, n, t, r)
        }
        var v = [],
            A = [],
            N = {
                _version: "3.2.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(e, t) {
                    var n = this;
                    setTimeout(function() {
                        t(n[e])
                    }, 0)
                },
                addTest: function(e, t, n) {
                    A.push({
                        name: e,
                        fn: t,
                        options: n
                    })
                },
                addAsyncTest: function(e) {
                    A.push({
                        name: null,
                        fn: e
                    })
                }
            },
            y = function() {};
        y.prototype = N, y = new y, y.addTest("ie8compat", !e.addEventListener && !!t.documentMode && 7 === t.documentMode);
        var b = "CSS" in e && "supports" in e.CSS,
            w = "supportsCSS" in e;
        y.addTest("supports", b || w);
        var x = t.documentElement,
            C = "svg" === x.nodeName.toLowerCase(),
            S = N.testStyles = d;
        S("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function(e) {
            y.addTest("lastchild", e.lastChild.offsetWidth > e.firstChild.offsetWidth)
        }, 2), y.addTest("cssvalid", function() {
            return S("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}", function(e) {
                var t = a("input");
                return e.appendChild(t), t.clientWidth > 10
            })
        });
        var E = function() {
            var t = e.matchMedia || e.msMatchMedia;
            return t ? function(e) {
                var n = t(e);
                return n && n.matches || !1
            } : function(t) {
                var n = !1;
                return d("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                    n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
                }), n
            }
        }();
        N.mq = E, y.addTest("mediaqueries", E("only all"));
        var _ = "Moz O ms Webkit",
            k = N._config.usePrefixes ? _.split(" ") : [];
        N._cssomPrefixes = k;
        var T = N._config.usePrefixes ? _.toLowerCase().split(" ") : [];
        N._domPrefixes = T;
        var I = {
            elem: a("modernizr")
        };
        y._q.push(function() {
            delete I.elem
        });
        var P = {
            style: I.elem.style
        };
        y._q.unshift(function() {
            delete P.style
        });
        var F = N.testProp = function(e, t, r) {
            return g([e], n, t, r)
        };
        y.addTest("textshadow", F("textShadow", "1px 1px")), N.testAllProps = m, N.testAllProps = $, y.addTest("bgpositionxy", function() {
            return $("backgroundPositionX", "3px", !0) && $("backgroundPositionY", "5px", !0)
        }), y.addTest("bgsizecover", $("backgroundSize", "cover")), y.addTest("boxshadow", $("boxShadow", "1px 1px", !0)), y.addTest("csstransforms", function() {
            return -1 === navigator.userAgent.indexOf("Android 2.") && $("transform", "scale(1)", !0)
        }), y.addTest("preserve3d", $("transformStyle", "preserve-3d")), y.addTest("csstransitions", $("transition", "all", !0));
        var M = N._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
        N._prefixes = M, y.addTest("touchevents", function() {
            var n;
            if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
            else {
                var r = ["@media (", M.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                S(r, function(e) {
                    n = 9 === e.offsetTop
                })
            }
            return n
        }), i(), o(v), delete N.addTest, delete N.addAsyncTest;
        for (var O = 0; O < y._q.length; O++) y._q[O]();
        e.Modernizr = y
    }(window, document),
    function(e) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
    }(navigator.userAgent || navigator.vendor || window.opera),
    function(e) {
        "use strict";

        function t(t) {
            return {
                restrict: "E",
                transclude: !0,
                controller: n,
                scope: {
                    control: "=?",
                    allowMultiple: "=?multiple",
                    expandCb: "&?onexpand",
                    collapseCb: "&?oncollapse",
                    id: "@?"
                },
                link: function(n, r, i, o, a) {
                    function s() {
                        e.forEach(d, function(e) {
                            if (n.control[e]) throw new Error("The `" + e + "` method can not be overwritten")
                        })
                    }
                    a(n.$parent.$new(), function(e, t) {
                        t.$accordion = n.internalControl, r.append(e)
                    });
                    var d = ["toggle", "expand", "collapse", "expandAll", "collapseAll", "hasExpandedPane"];
                    if (e.isDefined(n.allowMultiple) || (n.allowMultiple = e.isDefined(i.multiple)), i.$set("role", "tablist"), n.allowMultiple && i.$set("aria-multiselectable", "true"), e.isDefined(n.control)) {
                        s();
                        var l = e.extend({}, n.internalControl, n.control);
                        n.control = n.internalControl = l
                    } else n.control = n.internalControl;
                    t(function() {
                        var t = e.isDefined(o.getAccordionId()) ? o.getAccordionId() + ":onReady" : "vAccordion:onReady";
                        n.$emit(t)
                    }, 0)
                }
            }
        }

        function n(t) {
            var n = this,
                r = !1;
            t.panes = [], t.expandCb = e.isFunction(t.expandCb) ? t.expandCb : e.noop, t.collapseCb = e.isFunction(t.collapseCb) ? t.collapseCb : e.noop, n.hasExpandedPane = function() {
                for (var e = !1, n = 0, r = t.panes.length; r > n; n++) {
                    var i = t.panes[n];
                    if (i.isExpanded) {
                        e = !0;
                        break
                    }
                }
                return e
            }, n.getPaneByIndex = function(n) {
                var r;
                return e.forEach(t.panes, function(t) {
                    t.$parent && e.isDefined(t.$parent.$index) && t.$parent.$index === n && (r = t)
                }), r ? r : t.panes[n]
            }, n.getPaneIndex = function(n) {
                var r;
                return e.forEach(t.panes, function(t) {
                    t.$parent && e.isDefined(t.$parent.$index) && t === n && (r = t.$parent.$index)
                }), e.isDefined(r) ? r : t.panes.indexOf(n)
            }, n.getPaneById = function(n) {
                var r;
                return e.forEach(t.panes, function(e) {
                    e.id && e.id === n && (r = e)
                }), r
            }, n.getPaneId = function(e) {
                return e.id
            }, n.getAccordionId = function() {
                return t.id
            }, n.disable = function() {
                r = !0
            }, n.enable = function() {
                r = !1
            }, n.addPane = function(e) {
                if (!t.allowMultiple && n.hasExpandedPane() && e.isExpanded) throw new Error("The `multiple` attribute can't be found");
                t.panes.push(e), e.isExpanded && t.expandCb({
                    index: n.getPaneIndex(e),
                    id: e.id,
                    pane: e
                })
            }, n.focusNext = function() {
                for (var e = t.panes.length, n = 0; e > n; n++) {
                    var r = t.panes[n];
                    if (r.isFocused) {
                        var i = n + 1;
                        i > t.panes.length - 1 && (i = 0);
                        var o = t.panes[i];
                        o.paneElement.find("v-pane-header")[0].focus();
                        break
                    }
                }
            }, n.focusPrevious = function() {
                for (var e = t.panes.length, n = 0; e > n; n++) {
                    var r = t.panes[n];
                    if (r.isFocused) {
                        var i = n - 1;
                        0 > i && (i = t.panes.length - 1);
                        var o = t.panes[i];
                        o.paneElement.find("v-pane-header")[0].focus();
                        break
                    }
                }
            }, n.toggle = function(e) {
                !r && e && (t.allowMultiple || n.collapseAll(e), e.isExpanded = !e.isExpanded, e.isExpanded ? t.expandCb({
                    index: n.getPaneIndex(e),
                    id: e.id,
                    pane: e
                }) : t.collapseCb({
                    index: n.getPaneIndex(e),
                    id: e.id,
                    pane: e
                }))
            }, n.expand = function(e) {
                !r && e && (t.allowMultiple || n.collapseAll(e), e.isExpanded || (e.isExpanded = !0, t.expandCb({
                    index: n.getPaneIndex(e),
                    id: e.id,
                    pane: e
                })))
            }, n.collapse = function(e) {
                !r && e && e.isExpanded && (e.isExpanded = !1, t.collapseCb({
                    index: n.getPaneIndex(e),
                    id: e.id,
                    pane: e
                }))
            }, n.expandAll = function() {
                if (!r) {
                    if (!t.allowMultiple) throw new Error("The `multiple` attribute can't be found");
                    e.forEach(t.panes, function(e) {
                        n.expand(e)
                    })
                }
            }, n.collapseAll = function(i) {
                r || e.forEach(t.panes, function(e) {
                    e !== i && n.collapse(e)
                })
            }, t.internalControl = {
                toggle: function(t) {
                    e.isString(t) ? n.toggle(n.getPaneById(t)) : n.toggle(n.getPaneByIndex(t))
                },
                expand: function(t) {
                    e.isString(t) ? n.expand(n.getPaneById(t)) : n.expand(n.getPaneByIndex(t))
                },
                collapse: function(t) {
                    e.isString(t) ? n.collapse(n.getPaneById(t)) : n.collapse(n.getPaneByIndex(t))
                },
                expandAll: n.expandAll,
                collapseAll: n.collapseAll,
                hasExpandedPane: n.hasExpandedPane
            }
        }

        function r() {
            return {
                restrict: "E",
                require: "^vPane",
                transclude: !0,
                template: "<div ng-transclude></div>",
                scope: {},
                link: function(e, t, n) {
                    n.$set("role", "tabpanel")
                }
            }
        }

        function i() {
            return {
                restrict: "E",
                require: ["^vPane", "^vAccordion"],
                transclude: !0,
                template: "<div ng-transclude></div>",
                scope: {},
                link: function(t, n, r, i) {
                    function o() {
                        return l ? !1 : void t.$apply(function() {
                            s.toggle()
                        })
                    }

                    function a(e) {
                        32 === e.keyCode || 13 === e.keyCode ? (t.$apply(function() {
                            s.toggle()
                        }), e.preventDefault()) : 39 === e.keyCode ? (t.$apply(function() {
                            d.focusNext()
                        }), e.preventDefault()) : 37 === e.keyCode && (t.$apply(function() {
                            d.focusPrevious()
                        }), e.preventDefault())
                    }
                    r.$set("role", "tab");
                    var s = i[0],
                        d = i[1],
                        l = e.isDefined(r.inactive);
                    n[0].onfocus = function() {
                        s.focusPane()
                    }, n[0].onblur = function() {
                        s.blurPane()
                    }, n.bind("click", o), n.bind("keydown", a), t.$on("$destroy", function() {
                        n.unbind("click", o), n.unbind("keydown", a), n[0].onfocus = null, n[0].onblur = null
                    })
                }
            }
        }

        function o(t, n, r) {
            return {
                restrict: "E",
                require: "^vAccordion",
                transclude: !0,
                controller: a,
                scope: {
                    isExpanded: "=?expanded",
                    isDisabled: "=?ngDisabled",
                    id: "@?"
                },
                link: function(i, o, a, s, d) {
                    function l(t) {
                        t = e.isDefined(m) ? m + ":" + t : "vAccordion:" + t, i.$emit(t)
                    }

                    function u() {
                        s.disable(), h[0].style.maxHeight = "0px", p.attr({
                            "aria-selected": "true",
                            tabindex: "0"
                        }), l("onExpand"), t(function() {
                            n.addClass(o, f.expanded).then(function() {
                                s.enable(), h[0].style.maxHeight = "none", l("onExpandAnimationEnd")
                            }), setTimeout(function() {
                                h[0].style.maxHeight = g[0].offsetHeight + "px"
                            }, 0)
                        }, 0)
                    }

                    function c() {
                        s.disable(), h[0].style.maxHeight = g[0].offsetHeight + "px", p.attr({
                            "aria-selected": "false",
                            tabindex: "-1"
                        }), l("onCollapse"), t(function() {
                            n.removeClass(o, f.expanded).then(function() {
                                s.enable(), l("onCollapseAnimationEnd")
                            }), setTimeout(function() {
                                h[0].style.maxHeight = "0px"
                            }, 0)
                        }, 0)
                    }
                    d(i.$parent.$new(), function(e, t) {
                        t.$pane = i.internalControl, i.id && (t.$pane.id = i.id), o.append(e)
                    }), e.isDefined(i.isExpanded) || (i.isExpanded = e.isDefined(a.expanded)), e.isDefined(a.disabled) && (i.isDisabled = !0);
                    var f = r.states,
                        p = o.find("v-pane-header"),
                        h = o.find("v-pane-content"),
                        g = h.find("div"),
                        m = s.getAccordionId();
                    if (!p[0]) throw new Error("The `v-pane-header` directive can't be found");
                    if (!h[0]) throw new Error("The `v-pane-content` directive can't be found");
                    i.paneElement = o, i.paneContentElement = h, i.paneInnerElement = g, i.accordionCtrl = s, s.addPane(i), i.isExpanded ? (o.addClass(f.expanded), h[0].style.maxHeight = "none", p.attr({
                        "aria-selected": "true",
                        tabindex: "0"
                    })) : (h[0].style.maxHeight = "0px", p.attr({
                        "aria-selected": "false",
                        tabindex: "-1"
                    })), i.$watch("isExpanded", function(e, t) {
                        return e === t ? !0 : void(e ? u() : c())
                    })
                }
            }
        }

        function a(e) {
            var t = this;
            t.isExpanded = function() {
                return e.isExpanded
            }, t.toggle = function() {
                e.isAnimating || e.isDisabled || e.accordionCtrl.toggle(e)
            }, t.expand = function() {
                e.isAnimating || e.isDisabled || e.accordionCtrl.expand(e)
            }, t.collapse = function() {
                e.isAnimating || e.isDisabled || e.accordionCtrl.collapse(e)
            }, t.focusPane = function() {
                e.isFocused = !0
            }, t.blurPane = function() {
                e.isFocused = !1
            }, e.internalControl = {
                toggle: t.toggle,
                expand: t.expand,
                collapse: t.collapse,
                isExpanded: t.isExpanded
            }
        }
        e.module("vAccordion.config", []).constant("accordionConfig", {
            states: {
                expanded: "is-expanded"
            }
        }), e.module("vAccordion.directives", []), e.module("vAccordion", ["vAccordion.config", "vAccordion.directives"]), e.module("vAccordion.directives").directive("vAccordion", t), t.$inject = ["$timeout"], n.$inject = ["$scope"], e.module("vAccordion.directives").directive("vPaneContent", r), e.module("vAccordion.directives").directive("vPaneHeader", i), e.module("vAccordion.directives").directive("vPane", o), o.$inject = ["$timeout", "$animate", "accordionConfig"], a.$inject = ["$scope"]
    }(angular), window.Utils = {
        magnificPopupConfiguration: function() {
            var e = 0;
            return {
                beforeOpen: function() {
                    jQuery.browser.mobile && (e = $(window).scrollTop(), $("html").addClass("mfp-helper"))
                },
                close: function() {
                    jQuery.browser.mobile && ($("html").removeClass("mfp-helper"), setTimeout(function() {
                        $("body").animate({
                            scrollTop: e
                        }, 0)
                    }, 0))
                }
            }
        }
    };
var PhocusApp = angular.module("PhocusApp", ["templates", "ui.router", "ui.select", "ngFileUpload", "720kb.tooltips", "vAccordion", "restangular"]);
PhocusApp.run(["$rootScope", "$state", "$stateParams", function(e, t, n) {
    e.$state = t, e.$stateParams = n, e.appVer = "v1"
}]), PhocusApp.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", function(e, t, n) {
    var r = jQuery("meta[name=csrf-token]").attr("content");
    return n.defaults.headers.common["X-CSRF-Token"] = r, e.state("dashboard", {
        url: "/",
        controller: "dashboardCtrl",
        templateUrl: "phocus/components/dashboard/dashboard.html",
        resolve: {
            findCurrentUser: ["userService", function(e) {
                return PhocusApp.isNotlandingPage ? e.findCurrent() : void 0
            }],
            loadS3Credentials: ["userService", function(e) {
                return PhocusApp.isNotlandingPage ? e.generateS3Policy() : void 0
            }]
        }
    }).state("test", {
        url: "/test",
        controller: "testCtrl",
        templateUrl: "phocus/components/dashboard/test.html"
    }), t.otherwise(function(e, t) {
        var n = t.hash(),
            r = ["frequently-asked-questions"];
        return _.contains(r, n) ? "#" + n : "/"
    }), n.interceptors.push("httpLoaderInterceptor")
}]), jquery_magnific_popup = {
    initialize: function() {
        $.magnificPopup.open({
            fixedContentPos: !0,
            callbacks: Utils.magnificPopupConfiguration,
            closeOnBgClick: !1,
            enableEscapeKey: !1,
            showCloseBtn: !1,
            items: {
                src: "#user-update-profile"
            },
            type: "inline",
            midClick: !0
        }, 0)
    }
}, PhocusApp.directive("scrollOnClick", ["$location", "$anchorScroll", function(e, t) {
    return {
        restrict: "A",
        link: function(n, r) {
            r.on("click", function() {
                "step-two" !== e.hash() ? e.hash("step-two") : t()
            })
        }
    }
}]).directive("ngIcheck", ["$timeout", "$parse", function(e, t) {
    return {
        require: "ngModel",
        link: function(t, n, r, i) {
            return e(function() {
                var e;
                return e = r.value, t.$watch(r.ngModel, function(e) {
                    $(n).iCheck("update")
                }), t.$watch(r.ngDisabled, function(e) {
                    $(n).iCheck(e ? "disable" : "enable"), $(n).iCheck("update")
                }), $(n).iCheck({
                    checkboxClass: "icheckbox_minimal-blue",
                    radioClass: "iradio_square-blue"
                }).on("ifChanged", function(e) {
                    "checkbox" === $(n).attr("type") && r.ngModel && t.$apply(function() {
                        return i.$setViewValue(e.target.checked)
                    })
                }).on("ifClicked", function(o) {
                    return "radio" === $(n).attr("type") && r.ngModel ? t.$apply(function() {
                        return i.$viewValue != e ? i.$setViewValue(e) : (i.$setViewValue(null), void i.$render())
                    }) : void 0
                })
            })
        }
    }
}]).directive("clickDisableAndLoading", function() {
    return {
        link: function(e, t, n) {
            t.bind("click", function() {
                e.updateProfile.$invalid || t.addClass("button-with-loader")
            })
        }
    }
}).directive("visitTo", ["$window", function(e) {
    return {
        link: function(t, n, r) {
            var i = r.visitTo;
            n.bind("click", function() {
                e.location = i
            })
        }
    }
}]).directive("closeMagnificPopup", function() {
    return {
        link: function(e, t, n) {
            t.bind("click", function() {
                $.magnificPopup.close()
            })
        }
    }
}).directive("clickOnce", ["$timeout", function(e) {
    return {
        restrict: "A",
        link: function(t, n, r) {
            var i = r.clickOnce,
                o = r.ngFormName,
                a = r.originalButtonText;
            n.bind("click", function() {
                t[o].$invalid || e(function() {
                    i && n.html(i), n.addClass("button-with-loader"), n.attr("disabled", !0)
                }, 0)
            }), t.$on("form:enableButton", function(e, t, r) {
                n.removeClass("button-with-loader"), n.attr("disabled", !1), a && n.html(a)
            })
        }
    }
}]).directive("validNumber", function() {
    return {
        require: "?ngModel",
        link: function(e, t, n, r) {
            r && (r.$parsers.push(function(e) {
                if (angular.isUndefined(e)) var e = "";
                else e = e.toString();
                var t = e.replace(/[^0-9]+/g, "");
                return e !== t && (r.$setViewValue(t), r.$render()), t
            }), t.bind("keypress", function(e) {
                32 === e.keyCode && e.preventDefault()
            }))
        }
    }
}).directive("numberMask", function() {
    return function(e, t, n) {
        function r(e, t, n) {
            return e >= t && n >= e
        }
        var i = parseInt(n.min, 10) || 0,
            o = parseInt(n.max, 10) || 10,
            a = t.val();
        t.on("keyup", function(e) {
            r(t.val(), i, o) ? a = t.val() : t.val(a)
        })
    }
}).directive("pwCheck", [function() {
    return {
        require: "ngModel",
        link: function(e, t, n, r) {
            var i = "#" + n.pwCheck;
            t.add(i).on("keyup", function() {
                e.$apply(function() {
                    var e = t.val() === $(i).val();
                    r.$setValidity("pwmatch", e)
                })
            })
        }
    }
}]), PhocusApp.factory("httpLoaderInterceptor", ["$q", "$rootScope", "$location", "$window", function(e, t, n, r) {
    var i = 0,
        o = function() {
            0 == i && t.$broadcast("httpLoaderStart"), i++
        },
        a = function() {
            i--, 0 == i && t.$broadcast("httpLoaderEnd")
        };
    return {
        request: function(t) {
            return o(), t || e.when(t)
        },
        response: function(t) {
            return a(), t || e.when(t)
        },
        responseError: function(r) {
            return 401 === r.status && n.path("/401"), 403 === r.status && (t.forbiddenActionName = r.data.action_name, n.path("/403")), 404 === r.status && n.path("/404"), 405 === r.status && n.path("/405"), a(), e.reject(r)
        }
    }
}]), PhocusApp.factory("Render", [function() {
    return {
        showErrors: function(e, t) {
            return $("." + t + " .error_backend").remove(), $("." + t + " .show-field-error-js").html(""), _.each(e.data, function(e, t) {
                var n = $("." + t);
                n.removeClass("ng-hide"), $("#" + t).addClass("ng-invalid"), _.each(e, function(e) {
                    var t = '<span class="error error_backend">' + e + "</span>";
                    n.append(t)
                })
            })
        },
        resetErrors: function(e) {
            $("." + e + " .error_backend").remove()
        },
        showErrorsDom: function(e) {
            return _.each(e, function(e, t) {
                return _.each(e, function(e) {
                    var n = "<li><strong>" + t + "</strong>: " + e + "</li>";
                    $(".error-messages").append(n)
                })
            })
        },
        magnificPopup: function(e) {
            $.magnificPopup.open({
                fixedContentPos: !0,
                callbacks: Utils.magnificPopupConfiguration(),
                closeOnBgClick: !1,
                enableEscapeKey: !1,
                showCloseBtn: !1,
                items: {
                    src: e
                },
                type: "inline",
                midClick: !0
            }, 0)
        }
    }
}]), PhocusApp.controller("baseCtrl", ["$scope", function(e) {
    e.hasError = function(t, n, r) {
        return n ? e.submitted && e[r][t].$dirty && e[r][t].$error[n] || e.submitted && e[r][t].$error[n] : e.submitted && e[r][t].$dirty && e[r][t].$invalid || e.submitted && e[r][t].$invalid
    }
}]), angular.module("templates").run(["$templateCache", function(e) {
    e.put("phocus/components/dashboard/_home_dashboard.html", "<section id='profile-dashboard'>\n  <div class='profile-dashboard__container'>\n    <h1>\n      Welcome\n      {{user.name}}!\n    </h1>\n    <br>\n    <div class='profile-dashboard__avatar-section'>\n      <div class='avatar-selection avatar-rounded' ng-style='avatarImage'></div>\n      <br>\n      <span id='name'>{{user.name}}</span>\n      <span id='email'>{{user.email}}</span>\n    </div>\n    <p class='notes'>\n      This is your dashboard, soon you will be able to see all the tasks asigned to you and much more!\n    </p>\n  </div>\n</section>\n<section id='step-instructions-profile'>\n  <hr class='separator'>\n  <div class='profile-dashboard__container'>\n    <br>\n    <a class='link' href='/independent-contractor' target='_blank'>\n      INDEPENDENT CONTRACTOR AGREEMENT\n    </a>\n    <br>\n    <br>\n    <p class='notes'>\n      Please follow these\xa0instructions\xa0so we can properly pay you when you perform a task:\n    </p>\n    <br>\n    <p class='notes instruction-steps'>\n      1. Download the document from:\n      <a class='link' href='https://www.irs.gov/pub/irs-pdf/fw9.pdf' target='_blank'>https://www.irs.gov/pub/irs-pdf/fw9.pdf</a>\n    </p>\n    <p class='notes instruction-steps'>\n      2. \u2013 Fill out the form\n    </p>\n    <p class='notes instruction-steps reduce-margin-bottom-last'>\n      3.- Upload your filled form to Phocus.io.\n      <span class='last-instruction' ng-hide='user.w9_form_url'>\n        Do so by clicking here:\n      </span>\n    </p>\n    <p class='notes instruction-steps last-element-margin-bottom' ng-show='user.w9_form_url'>\n      Your form was uploaded:\n      <span class='last-instruction'>\n        <a class='link' ng-href='{{ user.w9_form_url }}' target='_blank'>Here</a>\n      </span>\n    </p>\n    <p class='notes instruction-steps last-element-margin-bottom' ng-show='processingForm'>\n      Your form is being processed...\n    </p>\n    <div accept='application/pdf' class='upload-container' ng-controller='s3UploaderCtrl' ng-hide='user.w9_form_url || processingForm' ngf-pattern=\"'application/pdf'\" ngf-select='upload($file)'>\n      <div class='w9-form-selection'>\n        <div class='progress' style='width:100%'>\n          <div aria-valuemax='100' aria-valuemin='0' aria-valuenow='' class='progress-bar' ng-show='file.progress &gt;= 0 &amp;&amp; !file.completed' role='progressbar' style='width: 100%'>\n            {{file.progress}}%\n          </div>\n        </div>\n      </div>\n      <p class='last-element-margin-bottom'>\n        Upload form\n      </p>\n    </div>\n  </div>\n</section>")
}]), angular.module("templates").run(["$templateCache", function(e) {
    e.put("phocus/components/dashboard/_step_one.html", "<h2 class='title-step title-profile'>\n  Profile Information\n</h2>\n<div accept='image/*' class='upload-container' ng-controller='s3UploaderCtrl' ngf-pattern=\"'image/*'\" ngf-select='upload($file)'><input name='avatar_key_name' ng-model='user.avatar_key_name' ng-show='false' required='' type='text'><div class='avatar-selection' ng-class=\"{ 'avatar-required': hasError('avatar_key_name', 'required', 'step_one') }\">\n    <div class='progress' style='width:100%'>\n      <div aria-valuemax='100' aria-valuemin='0' aria-valuenow='' class='progress-bar' ng-show='file.progress &gt;= 0 &amp;&amp; !file.completed' role='progressbar' style='width: 100%'>\n        {{file.progress}}%\n      </div>\n    </div>\n  </div>\n  <p class='upload-container__message-upload'>\n    Upload profile picture\n  </p>\n</div>\n<div class='form-fields-container'>\n  <div class='form-field floated-form-row'>\n    <label class='floated-left label-element' for='name'>\n      Name\n    </label><input class='user-registration__input form-field__input-text' id='name' name='name' ng-class=\"{'error-border-validation': hasError('name', 'required', 'step_one')}\" ng-model='user.name' required='' type='text'><span class='error-message error-message-validation' ng-show=\"hasError('name', 'required', 'step_one')\">\n      This field is required\n    </span>\n  </div>\n  <div class='form-field floated-form-row'>\n    <label class='floated-left' for='country'>Country</label>\n    <select class='user-registration__select' name='country' ng-class=\"{'error-border-validation': hasError('country', 'required', 'step_one') }\" ng-model='user.country' required=''>\n      <option value=''>Select country</option>\n      <option ng-repeat='country in countries' ng-selected='user.country == country.name' value='{{country.name}}'>\n        {{country.name}}\n      </option>\n    </select>\n    <span class='error-message error-message-validation' ng-show=\"hasError('country', 'required', 'step_one')\">\n      This field is required\n    </span>\n  </div>\n  <div class='form-field floated-form-row'>\n    <label class='floated-left' for='work_area_radio'>Work radius area:</label>\n    <a class='more-info-work-area-radio' href='#' title='How many miles are you able to travel for a job?' tooltip-template='How many miles are you able to travel for a job?' tooltips=''>?</a>\n    <select class='user-registration__select' name='work_area_radio' ng-class=\"{'error-border-validation': hasError('work_area_radio', 'required', 'step_one') }\" ng-model='user.work_area_radio' required=''>\n      <option value=''>Select work radius area</option>\n      <option value='5'>5</option>\n      <option value='10'>10</option>\n      <option value='15'>15</option>\n      <option value='20'>20</option>\n      <option value='25'>25</option>\n      <option value='30'>30</option>\n      <option value='60'>60</option>\n      <option value='120'>120</option>\n      <option value='240'>240</option>\n    </select>\n    <span class='error-message error-message-validation' ng-show=\"hasError('work_area_radio', 'required', 'step_one')\">\n      This field is required\n    </span>\n  </div>\n  <div class='form-field floated-form-row'>\n    <label class='floated-left label-element' for='zipcode'>Zip code</label><input class='user-registration__input form-field__input-text' id='zipcode' name='zipcode' ng-class=\"{'error-border-validation': hasError('zipcode', 'required', 'step_one') }\" ng-model='user.zipcode' required='' type='text'><span class='error-message error-message-validation' ng-show=\"hasError('zipcode', 'required', 'step_one')\">\n      This field is required\n    </span>\n  </div>\n  <div class='form-field floated-form-row'>\n    <label class='floated-left label-element' for='years_experience'>Experience in years</label><input class='user-registration__input form-field__input-text' id='years_experience' max='99' min='0' name='years_experience' ng-class=\"{'error-border-validation': hasError('years_experience', 'required', 'step_one') }\" ng-model='user.years_experience' number-mask='' required='' type='text'><span class='error-message error-message-validation' ng-show=\"hasError('years_experience', 'required', 'step_one')\">\n      This field is required\n    </span>\n  </div>\n  <div class='form-field floated-form-row'>\n    <label class='floated-left label-element' for='phone_number'>Phone number</label><input class='user-registration__input form-field__input-text user-registration__phone_number' id='phone_number' international-phone-number name='phone_number' ng-class=\"{'error-border-validation': hasError('phone_number', 'required', 'step_one')}\" ng-model='user.phone_number' required='' type='text'><span class='error-message error-message-validation' ng-show=\"hasError('phone_number', 'required', 'step_one')\">\n      This field is required\n    </span>\n  </div>\n</div>\n<div class='clearfix'></div>\n<div class='actions'>\n  <button class='button-bordered' ng-click='goToStep(2)' type='button'>\n    Continue\n  </button>\n</div>")
}]), angular.module("templates").run(["$templateCache", function(e) {
    e.put("phocus/components/dashboard/_step_two.html", "<div class='form-fields-container skills-container'>\n  <h2 class='title-step' id='title-skills'>\n    Skills\n  </h2>\n  <div class='form-field' id='image-tags-js'>\n    <label class='floated-left'>What types of images do you make? (select all that apply)</label>\n    <ui-select multiple='' name='type_image' ng-model='user.type_image' style='width: 100%;' theme='select2' ui-select-required=''>\n      <ui-select-match>\n        {{$item.name}}\n      </ui-select-match>\n      <ui-select-choices repeat='tag in image_tags | propsFilter: {name: $select.search}'>\n        <small>\n          {{tag.name}}\n        </small>\n      </ui-select-choices>\n    </ui-select>\n    <span class='error-message error-message-validation' ng-show=\"validaUiSelect('type_image')\">\n      This field is required\n    </span>\n  </div>\n  <div class='form-field' id='gear-tags-js'>\n    <label class='floated-left'>What kind of gear do you use? (select all that apply)</label>\n    <ui-select multiple='' name='type_gear' ng-model='user.type_gear' style='width: 100%;' theme='select2' ui-select-required=''>\n      <ui-select-match>\n        {{$item.name}}\n      </ui-select-match>\n      <ui-select-choices repeat='tag in gear_tags | propsFilter: {name: $select.search}'>\n        <small>\n          {{tag.name}}\n        </small>\n      </ui-select-choices>\n    </ui-select>\n    <span class='error-message error-message-validation' ng-show=\"validaUiSelect('type_gear')\">\n      This field is required\n    </span>\n  </div>\n  <div class='form-field'>\n    <label class='floated-left' for='portfolio' id='portfolio-label'>Provide a link with samples of your work</label><input class='user-registration__input form-field__input-text' id='portfolio' name='portfolio' ng-model='user.portfolio' required='' type='text'><span class='error-message error-message-validation' ng-show=\"hasError('portfolio', 'required', 'step_two')\">\n      This field is required\n    </span>\n  </div>\n  <div class='form-field'><input class='user-registration__input form-field__input-text' id='terms_conditions' name='terms_conditions' ng-icheck='' ng-model='user.terms_conditions' required='' type='checkbox'><label class='white-popup__terms-conditions-label' for='terms_conditions' ng-class=\"{'error-message-validation': hasError('terms_conditions', 'required', 'step_two')}\">\n      I accept the\n      <a class='link' href='/independent-contractor' target='_blank'>\n        Independent Contractor Agreement\n      </a>\n    </label>\n    <div class='error-message error-message-validation' ng-show=\"hasError('terms_conditions', 'required', 'step_two')\">\n      Please Review and accept the Independent Contractor Agreement\n    </div>\n  </div>\n</div>\n<div class='clearfix'></div>\n<div class='actions'>\n  <button class='button-bordered' click-disable-and-loading=''>\n    finish Registration\n  </button>\n  <a class='go-back-mobile' href='' ng-click='goToPreviousStep()' ng-hide='currentStep == 1'>\n    <span class='arrow-left'></span>\n    Back\n  </a>\n</div>")
}]), angular.module("templates").run(["$templateCache", function(e) {
    e.put("phocus/components/dashboard/dashboard.html", "<ng-include src=\"'phocus/components/dashboard/_home_dashboard.html'\"></ng-include>\n<div class='user-update-profile white-popup' id='user-update-profile' ng-show='user.incomplete_profile'>\n  <form name='updateProfile' ng-submit='updateUserProfile()' novalidate=''>\n    <section class='{{ leftImageClass() }}' id='white-popup__slider'>\n      <div class='step-description-dashboard'>\n        <div ng-show='getCurrentStep(1)'>\n          <h4>\n            Tell us a bit more about yourself\n            <br>\n            so we can assign the best jobs for\n            <br>\n            you based on your location and\n            <br>\n            experience.\n          </h4>\n        </div>\n        <div ng-show='getCurrentStep(2)'>\n          <h4>\n            Last step!\n            <br>\n            Your skills and gear are very important\n            <br>\n            for us to assign the best jobs for you!\n          </h4>\n        </div>\n      </div>\n      <div class='image-bullets'>\n        <label></label>\n        <label ng-class=\"{'label-selected':  getCurrentStep(1)}\"></label>\n        <label ng-class=\"{'label-selected':  getCurrentStep(2)}\"></label>\n      </div>\n      <a class='go-back-link' href='' ng-click='goToPreviousStep()' ng-hide='currentStep == 1'>\n        <span></span>\n        Back\n      </a>\n    </section>\n    <section class='white-popup__form' id='provider-signup-step-two' ng-show='getCurrentStep(1)' scroll-on-click=''>\n      <ng-include src=\"'phocus/components/dashboard/_step_one.html'\"></ng-include>\n    </section>\n    <section class='white-popup__form' id='provider-signup-step-three' ng-show='getCurrentStep(2)' scroll-on-click=''>\n      <ng-include src=\"'phocus/components/dashboard/_step_two.html'\"></ng-include>\n    </section>\n  </form>\n</div>")
}]), PhocusApp.controller("dashboardCtrl", ["$scope", "$location", "findCurrentUser", "loadS3Credentials", "geographicService", "Render", "$timeout", "TagService", "userService", "$anchorScroll", function(e, t, n, r, i, o, a, s, d, l) {
    e.s3Credentials = r.plain();
    var u = function() {
            return i.findAllCountries().then(function(t) {
                e.countries = t.plain()
            })
        },
        c = function() {
            var t = {
                type: "gears"
            };
            return s.findAll(t).then(function(t) {
                e.gear_tags = t.plain()
            })
        },
        f = function() {
            var t = {
                type: "images"
            };
            return s.findAll(t).then(function(t) {
                e.image_tags = t.plain()
            })
        };
    e.user = n.plain();
    var p = function() {
        e.buttons = {
            step_one: !1,
            step_two: !1
        }, e.isProcessing = !1, e.avatarImage = {
            "background-image": "url(" + e.user.avatar_url + ")"
        }, e.processingForm = !1, e.user.incomplete_profile && (u(), c(), f()), e.currentStep = 1
    };
    p();
    var h = function() {
        e.user.incomplete_profile && a(function() {
            jquery_magnific_popup.initialize()
        })
    };
    e.$on("$stateChangeSuccess", function() {
        h()
    }), e.updateUserProfile = function() {
        if (e.buttons.step_two = !0, !e.isProcessing && !e.updateProfile.$invalid) {
            e.isProcessing = !0;
            var t;
            t = {}, t.user = e.user, e.user.taggings_attributes = [], m(e.user.type_gear), m(e.user.type_image), d.updateInfo(t).then(function(t) {
                e.user = t.plain(), g(), $.magnificPopup.close(), o.resetErrors("user-update-profile")
            }, function(e) {
                o.showErrors(e, "user-update-profile")
            })
        }
    };
    var g = function() {
            fbq("init", "1978465019046240"), fbq("track", "PageView")
        },
        m = function(t) {
            _.each(t, function(t) {
                e.user.taggings_attributes.push(t)
            })
        };
    e.getCurrentStep = function(t) {
        return e.currentStep == t
    }, e.leftImageClass = function() {
        return "user-update-profile__slider-step" + e.currentStep
    }, e.goToStep = function(t) {
        return e.submitted = !0, v() ? void 0 : e.currentStep = t
    }, e.goToPreviousStep = function() {
        e.currentStep > 1 && e.goToStep(e.currentStep - 1)
    };
    var v = function() {
            var t;
            switch (e.currentStep) {
                case 1:
                    e.buttons.step_one = !0, t = A();
                    break;
                default:
                    t = !1
            }
            return t
        },
        A = function() {
            var t = e.updateProfile;
            return t.avatar_key_name.$invalid || t.name.$invalid || t.phone_number.$invalid || t.years_experience.$invalid || t.zipcode.$invalid || t.work_area_radio.$invalid || t.country.$invalid
        };
    e.hasError = function(t, n, r) {
        return n ? e.updateProfile[t].$dirty && e.updateProfile[t].$error[n] || e.buttons[r] && e.updateProfile[t].$error[n] : e.updateProfile[t].$dirty && e.updateProfile[t].$invalid || e.buttons[r] && e.updateProfile[t].$invalid
    }, e.validaUiSelect = function(t) {
        return e.buttons.step_two && e.updateProfile[t].$invalid
    }
}]), PhocusApp.factory("geographicService", ["Restangular", function(e) {
    var t, n;
    return t = "/api/v1/countries", n = "/api/v1/states", {
        findAllCountries: function() {
            return e.all(t).getList()
        },
        findAllStates: function(t) {
            return e.all(n).getList(t)
        }
    }
}]), PhocusApp.directive("internationalPhoneNumber", function() {
    return {
        restrict: "A",
        link: function(e, t, n, r) {
            t.intlTelInput()
        }
    }
}), PhocusApp.filter("propsFilter", function() {
    return function(e, t) {
        var n = [];
        return angular.isArray(e) ? e.forEach(function(e) {
            for (var r = !1, i = Object.keys(t), o = 0; o < i.length; o++) {
                var a = i[o],
                    s = t[a].toLowerCase();
                if (-1 !== e[a].toString().toLowerCase().indexOf(s)) {
                    r = !0;
                    break
                }
            }
            r && n.push(e)
        }) : n = e, n
    }
}), PhocusApp.controller("s3UploaderCtrl", ["$scope", "userService", "Upload", function(e, t, n) {
    e.s3Policy = e.$parent.s3Credentials.data, e.upload = function(t) {
        e.file = t, e.file && n.upload({
            url: "https://" + e.s3Policy.bucket_name + ".s3.amazonaws.com/",
            method: "POST",
            data: {
                key: e.s3Policy.key,
                AWSAccessKeyId: e.s3Policy.AWSAccessKeyId,
                success_action_status: e.s3Policy.success_action_status,
                acl: e.s3Policy.acl,
                policy: e.s3Policy.policy,
                signature: e.s3Policy.signature,
                filename: t.name,
                "Content-Type": t.type,
                file: t
            }
        }).then(function(e, n, r) {
            var o = $(e.data).find("key").text(),
                a = $(e.data).find("Location").text();
            t.completed = !0, i(a, o)
        }, function(e) {
            alert("An error occurred when uploading the image")
        }, function(e) {
            t.progress = Math.min(100, parseInt(100 * e.loaded / e.total))
        })
    };
    var r = function(t, n) {
            e.$parent.user.avatar_key_name = n, $(".avatar-selection").css("background", "url(" + t + ") no-repeat").addClass("avatar-rounded")
        },
        i = function(t, n) {
            var i = e.file.type,
                a = /(gif|jpg|jpeg|tiff|png)$/i.test(i);
            a ? r(t, n) : o(n)
        },
        o = function(n) {
            var r;
            r = {}, r.user = {
                form_key_name: n
            }, e.$parent.processingForm = !0, t.updateW9Form(r).then(function(t) {
                e.$parent.user = t.plain(), e.$parent.processingForm = !1
            }, function(e) {
                alert("An error occurred when uploading the pdf to the server")
            })
        }
}]), PhocusApp.directive("ngStateSelect", ["geographicService", function(e) {
    return {
        restrict: "C",
        scope: !0,
        link: function(t, n, r, i) {
            t.$watch("user.country", function(n, r) {
                t.user.state = "";
                var i = {
                    country: n
                };
                e.findAllStates(i).then(function(e) {
                    t.states = e
                })
            })
        }
    }
}]), PhocusApp.factory("TagService", ["Restangular", function(e) {
    var t;
    return t = "api/v1/tags", {
        findAll: function(n) {
            return e.several(t).getList(n)
        }
    }
}]), angular.module("templates").run(["$templateCache", function(e) {
    e.put("phocus/components/dashboard/test.html", "<h3>Array of strings</h3>\n<ui-select multiple='' ng-model='years_experience' style='width: 300px;' theme='select2'>\n  <ui-select-match placeholder='Select colors'>\n    {{$item}}\n  </ui-select-match>\n  <ui-select-choices repeat='color in availableColors | filter:$select.search'>\n    {{color}}\n  </ui-select-choices>\n  <p>Selected:</p>\n  {{multipleDemo.colors}}\n</ui-select>\n<hr>\n<div>\n  <div>\n    <a href='#' title='How many miles are you able to travel for a job?' tooltip-template='How many miles are you able to travel for a job?' tooltips=''>Tooltip me</a>\n  </div>\n</div>")
}]), PhocusApp.controller("testCtrl", ["$scope", "Render", function(e, t) {
    e.availableColors = ["Red", "Green", "Blue", "Yellow", "Magenta", "Maroon", "Umbra", "Turquoise"]
}]), PhocusApp.factory("userService", ["Restangular", function(e) {
    var t;
    return t = "/api/v1/profile", {
        findCurrent: function(n) {
            return e.all(t).customGET("show")
        },
        updateInfo: function(n) {
            return e.one(t, "update").customPUT(n)
        },
        updateW9Form: function(n) {
            return e.one(t, "update_aws_w9_form").customPUT(n)
        },
        generateS3Policy: function() {
            return e.all(t).customGET("generate_s3_credentials")
        },
        resetPassword: function(t) {
            var n = "/users/password";
            return e.one(n).customPUT(t)
        }
    }
}]), PhocusApp.directive("uiSelectRequired", function() {
    return {
        require: "ngModel",
        link: function(e, t, n, r) {
            r.$validators.uiSelectRequired = function(e, t) {
                return e && e.length > 0 ? !0 : !1
            }
        }
    }
}), angular.module("templates").run(["$templateCache", function(e) {
    e.put("phocus/components/dashboard/wizard_profile.html", "<h2>\n  please update your profile before continuing\n</h2>\n<form name='updateProfile' ng-submit='updateUserProfile()' novalidate=''></form>\n<ui-view></ui-view>")
}]), PhocusApp.controller("contactPageCtrl", ["$scope", "$anchorScroll", "contactRequestService", "Render", function(e, t, n, r) {
    var i = function() {
        e.request = {}, e.submitted = !1
    };
    i(), e.hasError = function(t, n) {
        return n ? e.submitted && e.contactRequestForm[t].$dirty && e.contactRequestForm[t].$error[n] || e.submitted && e.contactRequestForm[t].$error[n] : e.submitted && e.contactRequestForm[t].$dirty && e.contactRequestForm[t].$invalid || e.submitted && e.contactRequestForm[t].$invalid
    }, e.createContactRequest = function() {
        if (e.submitted = !0, !e.contactRequestForm.$invalid) {
            var t;
            t = {}, t.contact_request = e.request, n.create(t).then(function(t) {
                e.submitted = !1, e.request = {}, r.magnificPopup("#contact-request-success"), e.$emit("form:enableButton")
            }, function(t) {
                e.$emit("form:enableButton"), alert("An error ocurred when sending the request")
            })
        }
    }
}]), PhocusApp.factory("contactRequestService", ["Restangular", function(e) {
    var t;
    return t = "/api/v1/contact_requests", {
        create: function(n) {
            return e.all(t).post(n)
        }
    }
}]), PhocusApp.controller("leadCtrl", ["$scope", "leadService", "$controller", "Render", function(e, t, n, r) {
    var i = function() {
        e.lead = {}, e.submitted = !1, n("baseCtrl", {
            $scope: e
        })
    };
    i(), e.createLead = function() {
        if (e.submitted = !0, !e.addLeadForm.$invalid) {
            var n;
            n = {}, n.lead = e.lead, t.create(n).then(function(t) {
                e.submitted = !1, e.lead = {}, r.magnificPopup("#create-lead-request"), e.$emit("form:enableButton")
            }, function(e) {
                alert("An error ocurred when sending the request")
            })
        }
    }
}]), PhocusApp.factory("leadService", ["Restangular", function(e) {
    var t;
    return t = "/api/v1/leads", {
        create: function(n) {
            return e.all(t).post(n)
        }
    }
}]), PhocusApp.controller("resetPasswordCtrl", ["$scope", "userService", "$controller", "Render", function(e, t, n, r) {
    e.init = function(t) {
        i(), e.user.reset_password_token = t
    };
    var i = function() {
        e.user = {}, e.submitted = !1, n("baseCtrl", {
            $scope: e
        })
    };
    e.resetPassword = function() {
        if (e.submitted = !0, !e.resetPasswordForm.$invalid) {
            var n;
            n = {}, n.user = e.user, t.resetPassword(n).then(function(t) {
                e.submitted = !1, e.$emit("form:enableButton"), window.location.replace("/")
            }, function(e) {
                alert("An error ocurred when updating the password")
            })
        }
    }
}]);