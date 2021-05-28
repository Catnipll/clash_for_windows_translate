module.exports = function(e) {
    function t(e) {
        var t = j[e];
        if (!t) return d;
        var n = function(n) {
                return t.hot.active ? (j[n] ? -1 === j[n].parents.indexOf(e) && j[n].parents.push(e) : (x = [e], u = n), -1 === t.children.indexOf(n) && t.children.push(n)) : (console.warn("[HMR] unexpected require(" + n + ") from disposed module " + e), x = []), d(n)
            },
            i = function(e) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d[e]
                    },
                    set: function(t) {
                        d[e] = t
                    }
                }
            };
        for (var a in d) Object.prototype.hasOwnProperty.call(d, a) && "e" != a && "t" != a && Object.defineProperty(n, a, i(a));
        return n.e = function(e) {
            function t() {
                O--, "prepare" === k && (!S[e] && o(e), 0 === O && 0 === _ && s())
            }
            return "ready" === k && r("prepare"), O++, d.e(e).then(t, (function(e) {
                throw t(), e
            }))
        }, n.t = function(e, t) {
            return 1 & t && (e = n(e)), d.t(e, -2 & t)
        }, n
    }

    function n(e) {
        var t = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _disposeHandlers: [],
            _main: u !== e,
            active: !0,
            accept: function(e, n) {
                if (void 0 === e) t._selfAccepted = !0;
                else if ("function" == typeof e) t._selfAccepted = e;
                else if ("object" == typeof e)
                    for (var r = 0; r < e.length; r++) t._acceptedDependencies[e[r]] = n || function() {};
                else t._acceptedDependencies[e] = n || function() {}
            },
            decline: function(e) {
                if (void 0 === e) t._selfDeclined = !0;
                else if ("object" == typeof e)
                    for (var n = 0; n < e.length; n++) t._declinedDependencies[e[n]] = !0;
                else t._declinedDependencies[e] = !0
            },
            dispose: function(e) {
                t._disposeHandlers.push(e)
            },
            addDisposeHandler: function(e) {
                t._disposeHandlers.push(e)
            },
            removeDisposeHandler: function(e) {
                var n = t._disposeHandlers.indexOf(e);
                0 <= n && t._disposeHandlers.splice(n, 1)
            },
            check: a,
            apply: c,
            status: function(e) {
                return e ? void w.push(e) : k
            },
            addStatusHandler: function(e) {
                w.push(e)
            },
            removeStatusHandler: function(e) {
                var t = w.indexOf(e);
                0 <= t && w.splice(t, 1)
            },
            data: b[e]
        };
        return u = void 0, t
    }

    function r(e) {
        k = e;
        for (var t = 0; t < w.length; t++) w[t].call(null, e)
    }

    function i(e) {
        return +e + "" === e ? +e : e
    }

    function a(e) {
        if ("idle" !== k) throw new Error("check() is only allowed in idle status");
        return v = e, r("check"),
            function(e) {
                return e = e || 1e4, new Promise((function(t, n) {
                    if ("undefined" == typeof XMLHttpRequest) return n(new Error("No browser support"));
                    try {
                        var r = new XMLHttpRequest,
                            i = d.p + "" + m + ".hot-update.json";
                        r.open("GET", i, !0), r.timeout = e, r.send(null)
                    } catch (e) {
                        return n(e)
                    }
                    r.onreadystatechange = function() {
                        if (4 === r.readyState)
                            if (0 === r.status) n(new Error("Manifest request to " + i + " timed out."));
                            else if (404 === r.status) t();
                        else if (200 !== r.status && 304 !== r.status) n(new Error("Manifest request to " + i + " failed."));
                        else {
                            try {
                                var e = JSON.parse(r.responseText)
                            } catch (e) {
                                return void n(e)
                            }
                            t(e)
                        }
                    }
                }))
            }(g).then((function(e) {
                if (!e) return r("idle"), null;
                C = {}, S = {}, P = e.c, h = e.h, r("prepare");
                var t = new Promise((function(e, t) {
                    p = {
                        resolve: e,
                        reject: t
                    }
                }));
                return f = {}, o(0), "prepare" === k && 0 === O && 0 == _ && s(), t
            }))
    }

    function o(e) {
        P[e] ? (C[e] = !0, _++, function(e) {
            var t = document.createElement("script");
            t.charset = "utf-8", t.src = d.p + "" + e + "." + m + ".hot-update.js", document.head.appendChild(t)
        }(e)) : S[e] = !0
    }

    function s() {
        r("ready");
        var e = p;
        if (p = null, e)
            if (v) Promise.resolve().then((function() {
                return c(v)
            })).then((function(t) {
                e.resolve(t)
            }), (function(t) {
                e.reject(t)
            }));
            else {
                var t = [];
                for (var n in f) Object.prototype.hasOwnProperty.call(f, n) && t.push(i(n));
                e.resolve(t)
            }
    }

    function c(t) {
        function n(e) {
            for (var t = [e], n = {}, r = t.map((function(e) {
                    return {
                        chain: [e],
                        id: e
                    }
                })); 0 < r.length;) {
                var i = r.pop(),
                    o = i.id,
                    s = i.chain;
                if ((l = j[o]) && !l.hot._selfAccepted) {
                    if (l.hot._selfDeclined) return {
                        type: "self-declined",
                        chain: s,
                        moduleId: o
                    };
                    if (l.hot._main) return {
                        type: "unaccepted",
                        chain: s,
                        moduleId: o
                    };
                    for (var c = 0; c < l.parents.length; c++) {
                        var d = l.parents[c],
                            u = j[d];
                        if (u) {
                            if (u.hot._declinedDependencies[o]) return {
                                type: "declined",
                                chain: s.concat([d]),
                                moduleId: o,
                                parentId: d
                            };
                            if (-1 === t.indexOf(d)) {
                                if (u.hot._acceptedDependencies[o]) {
                                    n[d] || (n[d] = []), a(n[d], [o]);
                                    continue
                                }
                                delete n[d], t.push(d), r.push({
                                    chain: s.concat([d]),
                                    id: d
                                })
                            }
                        }
                    }
                }
            }
            return {
                type: "accepted",
                moduleId: e,
                outdatedModules: t,
                outdatedDependencies: n
            }
        }

        function a(e, t) {
            for (var n, r = 0; r < t.length; r++) n = t[r], -1 === e.indexOf(n) && e.push(n)
        }
        if ("ready" !== k) throw new Error("apply() is only allowed in ready status");
        t = t || {};
        var o, s, c, l, u, p = {},
            v = [],
            g = {},
            y = function() {
                console.warn("[HMR] unexpected require(" + _.moduleId + ") to disposed module")
            };
        for (var w in f)
            if (Object.prototype.hasOwnProperty.call(f, w)) {
                u = i(w);
                var _ = f[w] ? n(u) : {
                        type: "disposed",
                        moduleId: w
                    },
                    O = !1,
                    S = !1,
                    C = !1,
                    E = "";
                switch (_.chain && (E = "\nUpdate propagation: " + _.chain.join(" -> ")), _.type) {
                    case "self-declined":
                        t.onDeclined && t.onDeclined(_), t.ignoreDeclined || (O = new Error("Aborted because of self decline: " + _.moduleId + E));
                        break;
                    case "declined":
                        t.onDeclined && t.onDeclined(_), t.ignoreDeclined || (O = new Error("Aborted because of declined dependency: " + _.moduleId + " in " + _.parentId + E));
                        break;
                    case "unaccepted":
                        t.onUnaccepted && t.onUnaccepted(_), t.ignoreUnaccepted || (O = new Error("Aborted because " + u + " is not accepted" + E));
                        break;
                    case "accepted":
                        t.onAccepted && t.onAccepted(_), S = !0;
                        break;
                    case "disposed":
                        t.onDisposed && t.onDisposed(_), C = !0;
                        break;
                    default:
                        throw new Error("Unexception type " + _.type)
                }
                if (O) return r("abort"), Promise.reject(O);
                if (S)
                    for (u in g[u] = f[u], a(v, _.outdatedModules), _.outdatedDependencies) Object.prototype.hasOwnProperty.call(_.outdatedDependencies, u) && (p[u] || (p[u] = []), a(p[u], _.outdatedDependencies[u]));
                C && (a(v, [_.moduleId]), g[u] = y)
            } var T, D, I = [];
        for (s = 0; s < v.length; s++) u = v[s], j[u] && j[u].hot._selfAccepted && g[u] !== y && I.push({
            module: u,
            errorHandler: j[u].hot._selfAccepted
        });
        r("dispose"), Object.keys(P).forEach((function(e) {
            !1 === P[e] && function(e) {
                delete installedChunks[e]
            }(e)
        }));
        for (var A, $ = v.slice(); 0 < $.length;)
            if (u = $.pop(), l = j[u]) {
                var M = {},
                    L = l.hot._disposeHandlers;
                for (c = 0; c < L.length; c++)(o = L[c])(M);
                for (b[u] = M, l.hot.active = !1, delete j[u], delete p[u], c = 0; c < l.children.length; c++) {
                    var N = j[l.children[c]];
                    N && (0 <= (A = N.parents.indexOf(u)) && N.parents.splice(A, 1))
                }
            } for (u in p)
            if (Object.prototype.hasOwnProperty.call(p, u) && (l = j[u]))
                for (D = p[u], c = 0; c < D.length; c++) T = D[c], 0 <= (A = l.children.indexOf(T)) && l.children.splice(A, 1);
        for (u in r("apply"), m = h, g) Object.prototype.hasOwnProperty.call(g, u) && (e[u] = g[u]);
        var R = null;
        for (u in p)
            if (Object.prototype.hasOwnProperty.call(p, u) && (l = j[u])) {
                D = p[u];
                var z = [];
                for (s = 0; s < D.length; s++)
                    if (T = D[s], o = l.hot._acceptedDependencies[T]) {
                        if (-1 !== z.indexOf(o)) continue;
                        z.push(o)
                    } for (s = 0; s < z.length; s++) {
                    o = z[s];
                    try {
                        o(D)
                    } catch (e) {
                        t.onErrored && t.onErrored({
                            type: "accept-errored",
                            moduleId: u,
                            dependencyId: D[s],
                            error: e
                        }), t.ignoreErrored || R || (R = e)
                    }
                }
            } for (s = 0; s < I.length; s++) {
            var F = I[s];
            u = F.module, x = [u];
            try {
                d(u)
            } catch (e) {
                if ("function" == typeof F.errorHandler) try {
                    F.errorHandler(e)
                } catch (n) {
                    t.onErrored && t.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: u,
                        error: n,
                        originalError: e
                    }), t.ignoreErrored || R || (R = n), R || (R = e)
                } else t.onErrored && t.onErrored({
                    type: "self-accept-errored",
                    moduleId: u,
                    error: e
                }), t.ignoreErrored || R || (R = e)
            }
        }
        return R ? (r("fail"), Promise.reject(R)) : (r("idle"), new Promise((function(e) {
            e(v)
        })))
    }

    function d(r) {
        if (j[r]) return j[r].exports;
        var i = j[r] = {
            i: r,
            l: !1,
            exports: {},
            hot: n(r),
            parents: (y = x, x = [], y),
            children: []
        };
        return e[r].call(i.exports, i, i.exports, t(r)), i.l = !0, i.exports
    }
    var l = window.webpackHotUpdate;
    window.webpackHotUpdate = function(e, t) {
        (function(e, t) {
            if (P[e] && C[e]) {
                for (var n in C[e] = !1, t) Object.prototype.hasOwnProperty.call(t, n) && (f[n] = t[n]);
                0 == --_ && 0 === O && s()
            }
        })(e, t), l && l(e, t)
    };
    var u, p, f, h, v = !0,
        m = "31af6074a6722e8ef939",
        g = 1e4,
        b = {},
        x = [],
        y = [],
        w = [],
        k = "idle",
        _ = 0,
        O = 0,
        S = {},
        C = {},
        P = {},
        j = {};
    return d.m = e, d.c = j, d.d = function(e, t, n) {
        d.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, d.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, d.t = function(e, t) {
        if (1 & t && (e = d(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (d.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) d.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, d.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return d.d(t, "a", t), t
    }, d.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, d.p = "", d.h = function() {
        return m
    }, t(231)(d.s = 231)
}([function(e, t, n) {
    e.exports = n(120)
}, function(e) {
    function t(e, t, n, r, i, a, o) {
        try {
            var s = e[a](o),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    e.exports = function(e) {
        return function() {
            var n = this,
                r = arguments;
            return new Promise((function(i, a) {
                function o(e) {
                    t(c, i, a, o, s, "next", e)
                }

                function s(e) {
                    t(c, i, a, o, s, "throw", e)
                }
                var c = e.apply(n, r);
                o(void 0)
            }))
        }
    }
}, function(e) {
    e.exports = require("path")
}, function(e) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function(e) {
    e.exports = require("fs")
}, function(e) {
    e.exports = require("vuex")
}, function(e, t, n) {
    "use strict";
    n.d(t, "d", (function() {
        return r
    })), n.d(t, "c", (function() {
        return i
    })), n.d(t, "b", (function() {
        return s
    })), n.d(t, "a", (function() {
        return c
    })), n.d(t, "f", (function() {
        return l
    })), n.d(t, "e", (function() {
        return u
    })), n.d(t, "h", (function() {
        return p
    })), n.d(t, "g", (function() {
        return f
    }));
    var r = Symbol(),
        i = Symbol(),
        a = Symbol(),
        o = Symbol(),
        s = Symbol(),
        c = Symbol(),
        d = Symbol(),
        l = function() {
            if ("win32" === process.platform) {
                if ("x64" === process.arch) return r;
                if ("ia32" === process.arch) return i;
                if ("arm" === process.arch) return a;
                if ("arm64" === process.arch) return o
            }
            if ("darwin" === process.platform) {
                if ("x64" === process.arch) return s;
                if ("arm64" === process.arch) return c
            }
            return d
        },
        u = function() {
            var e = l();
            return [i, a, o].includes(e) ? i : e
        },
        p = function() {
            return [a, o, i, r].includes(l())
        },
        f = function() {
            return [s, c].includes(l())
        }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r, i, a, o, s) {
        var c, d = "function" == typeof e ? e.options : e;
        if (t && (d.render = t, d.staticRenderFns = n, d._compiled = !0), r && (d.functional = !0), a && (d._scopeId = "data-v-" + a), o ? (c = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o)
            }, d._ssrRegister = c) : i && (c = s ? function() {
                i.call(this, this.$root.$options.shadowRoot)
            } : i), c)
            if (d.functional) {
                d._injectStyles = c;
                var l = d.render;
                d.render = function(e, t) {
                    return c.call(t), l(e, t)
                }
            } else {
                var u = d.beforeCreate;
                d.beforeCreate = u ? [].concat(u, c) : [c]
            } return {
            exports: e,
            options: d
        }
    }
    n.d(t, "a", (function() {
        return r
    }))
}, function(e) {
    function t(e, t) {
        var n = e[1] || "",
            r = e[3];
        if (!r) return n;
        if (t && "function" == typeof btoa) {
            var i = function(e) {
                    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                }(r),
                a = r.sources.map((function(e) {
                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                }));
            return [n].concat(a).concat([i]).join("\n")
        }
        return [n].join("\n")
    }
    e.exports = function(e) {
        var n = [];
        return n.toString = function() {
            return this.map((function(n) {
                var r = t(n, e);
                return n[2] ? "@media " + n[2] + "{" + r + "}" : r
            })).join("")
        }, n.i = function(e, t) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r, i = {}, a = 0; a < this.length; a++) "number" == typeof(r = this[a][0]) && (i[r] = !0);
            for (a = 0; a < e.length; a++) {
                var o = e[a];
                "number" == typeof o[0] && i[o[0]] || (t && !o[2] ? o[2] = t : t && (o[2] = "(" + o[2] + ") and (" + t + ")"), n.push(o))
            }
        }, n
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = [], r = {}, i = 0; i < t.length; i++) {
            var a = t[i],
                o = a[0],
                s = {
                    id: e + ":" + i,
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                };
            r[o] ? r[o].parts.push(s) : n.push(r[o] = {
                id: o,
                parts: [s]
            })
        }
        return n
    }

    function i(e, t, n, i) {
        v = n, g = i || {};
        var o = r(e, t);
        return a(o),
            function(t) {
                for (var n = [], i = 0; i < o.length; i++) {
                    var s = o[i];
                    (c = u[s.id]).refs--, n.push(c)
                }
                t ? a(o = r(e, t)) : o = [];
                var c;
                for (i = 0; i < n.length; i++)
                    if (0 === (c = n[i]).refs) {
                        for (var d = 0; d < c.parts.length; d++) c.parts[d]();
                        delete u[c.id]
                    }
            }
    }

    function a(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t],
                r = u[n.id];
            if (r) {
                r.refs++;
                for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
                for (; i < n.parts.length; i++) r.parts.push(s(n.parts[i]));
                r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
            } else {
                var a = [];
                for (i = 0; i < n.parts.length; i++) a.push(s(n.parts[i]));
                u[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }

    function o() {
        var e = document.createElement("style");
        return e.type = "text/css", p.appendChild(e), e
    }

    function s(e) {
        var t, n, r = document.querySelector("style[" + b + '~="' + e.id + '"]');
        if (r) {
            if (v) return m;
            r.parentNode.removeChild(r)
        }
        if (x) {
            var i = h++;
            r = f || (f = o()), t = c.bind(null, r, i, !1), n = c.bind(null, r, i, !0)
        } else r = o(), t = d.bind(null, r), n = function() {
            r.parentNode.removeChild(r)
        };
        return t(e),
            function(r) {
                if (r) {
                    if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                    t(e = r)
                } else n()
            }
    }

    function c(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, i);
        else {
            var a = document.createTextNode(i),
                o = e.childNodes;
            o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a)
        }
    }

    function d(e, t) {
        var n = t.css,
            r = t.media,
            i = t.sourceMap;
        if (r && e.setAttribute("media", r), g.ssrId && e.setAttribute(b, t.id), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    n.r(t), n.d(t, "default", (function() {
        return i
    }));
    var l = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !l) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var u = {},
        p = l && (document.head || document.getElementsByTagName("head")[0]),
        f = null,
        h = 0,
        v = !1,
        m = function() {},
        g = null,
        b = "data-vue-ssr-id",
        x = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),
        y = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
}, function(e, t) {
    "use strict";
    t.a = {
        put: function(e, t) {
            window.localStorage.setItem(e, JSON.stringify(t))
        },
        get: function(e) {
            var t = window.localStorage.getItem(e);
            if ("" !== t) try {
                var n;
                return JSON.parse(t)
            } catch (n) {
                console.error("get [".concat(e, "] from cache failed with error:"), n)
            }
        }
    }
}, function(e, t) {
    "use strict";
    t.a = {
        SYSTEM_PROXY: "systemProxy",
        LAST_CLASH_PID: "lastClashPID",
        LAST_USER_EXE_PIDS: "lastUserExePids",
        LAST_LOG_FILE_PATH: "lastLogFilePath",
        AD_IMAGES: "adImages",
        CONNECTION_ORDER_INDEX: "connectionOrderIndex",
        CONNECTION_ORDER_REVERSE: "connectionOrderReverse",
        AUTO_LAUNCH: "autoLaunch",
        GEOIP_URL: "geoipDownloadRawURL",
        GEOIP_TOKEN: "geoipDownloadToken",
        TAP_INFO: "tapInfo",
        PROXY_SHOW_SEC_IDXS: "proxyShowSecIdxs",
        IS_PIN_ENABLED: "isPinEnabled",
        MENU_ITEM_ORDER: "menuItemOrder",
        CURRENT_ROUTE_PATH: "currentRoutePath",
        DETECTED_INTERFACE_NAME: "detectedInterfaceName",
        IS_LIGHTWEIGHT_MODE_CLOSE: "isLightweightModeClose",
        IS_MIXIN: "isProfileMixin"
    }
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(5),
        a = n.n(i),
        o = n(93);
    r.a.use(a.a), t.a = new a.a.Store({
        modules: o.default,
        strict: !1,
        plugins: [function(e) {
            e.subscribe((function(t) {
                ["CHANGE_PROFILES", "CHANGE_PROFILES_INDEX", "CHANGE_PROFILE", "APPEND_PROFILE", "DELETE_PROFILE"].includes(t.type) && e.commit("SAVE_PROFILES")
            }))
        }]
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return i
    }));
    var r = {
            INIT: Symbol(),
            DEFAULT: Symbol(),
            SYSTEM_PROXY: Symbol()
        },
        i = {
            CONNECTED: Symbol(),
            DISCONNECTED: Symbol()
        }
}, function(e) {
    e.exports = require("yaml")
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
            c()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }
    n.d(t, "b", (function() {
        return k
    })), n.d(t, "a", (function() {
        return _
    })), n.d(t, "e", (function() {
        return O
    })), n.d(t, "c", (function() {
        return S
    })), n.d(t, "d", (function() {
        return C
    })), n.d(t, "f", (function() {
        return P
    }));
    var a = n(21),
        o = n.n(a),
        s = n(3),
        c = n.n(s),
        d = n(0),
        l = n.n(d),
        u = n(1),
        p = n.n(u),
        f = n(104),
        h = (n.n(f), n(4)),
        v = (n.n(h), n(2)),
        m = (n.n(v), n(105)),
        g = (n.n(m), n(14)),
        b = n.n(g),
        x = n(12),
        y = n(24),
        w = (n.n(y), function(e) {
            return new Promise((function(t) {
                return setTimeout(t, e)
            }))
        }),
        k = function(e) {
            return Object(f.createHash)("md5").update(e).digest("hex")
        },
        _ = function e(t) {
            h.existsSync(t) && (h.readdirSync(t).forEach((function(n) {
                var r = v.join(t, n);
                h.lstatSync(r).isDirectory() ? e(r) : h.unlinkSync(r)
            })), h.rmdirSync(t))
        },
        O = function() {
            var e = p()(l.a.mark((function e(t, n, r) {
                var i, a;
                return l.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            i = h.readFileSync(t).toString(), (a = b.a.parseDocument(i)).set(n, r), h.writeFileSync(t, a.toString());
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        S = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                a = x.a.state.app.settings.showNotifications;
            void 0 !== a && a && y.ipcRenderer.send("show-notification", i({
                title: e,
                body: t,
                silent: n
            }, r))
        },
        C = function(e) {
            for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2, n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2], r = ["B", "KB", "MB", "GB", "TB"], i = 0; ~~(e / 1024) && i < r.length;) e /= 1024, i++;
            return "".concat(0 == i ? e : e.toFixed(t)).concat(n ? " " : "").concat(r[i])
        },
        P = function() {
            var e = p()(l.a.mark((function e(t) {
                var n, r, i, a, s, c, d;
                return l.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            n = t.method, r = t.target, i = t.checkTimes, a = void 0 === i ? 10 : i, s = t.ags, c = void 0 === s ? [] : s, d = 0;
                        case 2:
                            return e.next = 5, n.apply(void 0, o()(c));
                        case 5:
                            if (e.t0 = e.sent, e.t1 = r, e.t0 !== e.t1) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return");
                        case 9:
                            return e.next = 11, w(1e3);
                        case 11:
                            if (!((d += 1) >= a)) {
                                e.next = 14;
                                break
                            }
                            return e.abrupt("return");
                        case 14:
                            e.next = 2;
                            break;
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }()
}, function(e) {
    e.exports = require("moment/min/moment-with-locales")
}, function(e) {
    e.exports = require("electron-log")
}, function(e) {
    e.exports = require("axios")
}, function(e) {
    e.exports = require("child_process")
}, function(e) {
    e.exports = require("lodash")
}, function(e, t, n) {
    var r = n(117),
        i = n(118),
        a = n(98),
        o = n(119);
    e.exports = function(e) {
        return r(e) || i(e) || a(e) || o()
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        return null == e
    }

    function r(e) {
        return null != e
    }

    function i(e) {
        return !0 === e
    }

    function a(e) {
        return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
    }

    function o(e) {
        return null !== e && "object" == typeof e
    }

    function s(e) {
        return "[object Object]" === dr.call(e)
    }

    function c(e) {
        var t = parseFloat(e + "");
        return 0 <= t && Math.floor(t) === t && isFinite(e)
    }

    function d(e) {
        return r(e) && "function" == typeof e.then && "function" == typeof e.catch
    }

    function l(e) {
        return null == e ? "" : Array.isArray(e) || s(e) && e.toString === dr ? JSON.stringify(e, null, 2) : e + ""
    }

    function u(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t
    }

    function p(e, t) {
        for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
        return t ? function(e) {
            return n[e.toLowerCase()]
        } : function(e) {
            return n[e]
        }
    }

    function f(e, t) {
        if (e.length) {
            var n = e.indexOf(t);
            if (-1 < n) return e.splice(n, 1)
        }
    }

    function h(e, t) {
        return pr.call(e, t)
    }

    function v(e) {
        var t = Object.create(null);
        return function(n) {
            return t[n] || (t[n] = e(n))
        }
    }

    function m(e, t) {
        t = t || 0;
        for (var n = e.length - t, r = Array(n); n--;) r[n] = e[n + t];
        return r
    }

    function g(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function b(e) {
        for (var t = {}, n = 0; n < e.length; n++) e[n] && g(t, e[n]);
        return t
    }

    function x() {}

    function y(e, t) {
        if (e === t) return !0;
        var n = o(e),
            r = o(t);
        if (!n || !r) return !n && !r && e + "" == t + "";
        try {
            var i = Array.isArray(e),
                a = Array.isArray(t);
            if (i && a) return e.length === t.length && e.every((function(e, n) {
                return y(e, t[n])
            }));
            if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
            if (!i && !a) {
                var s = Object.keys(e),
                    c = Object.keys(t);
                return s.length === c.length && s.every((function(n) {
                    return y(e[n], t[n])
                }))
            }
            return !1
        } catch (t) {
            return !1
        }
    }

    function w(e, t) {
        for (var n = 0; n < e.length; n++)
            if (y(e[n], t)) return n;
        return -1
    }

    function k(e) {
        var t = !1;
        return function() {
            t || (t = !0, e.apply(this, arguments))
        }
    }

    function _(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t
    }

    function O(e, t, n, r) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !!r,
            writable: !0,
            configurable: !0
        })
    }

    function S(e) {
        return "function" == typeof e && /native code/.test(e.toString())
    }

    function C(e) {
        Kr.push(e), qr.target = e
    }

    function P() {
        Kr.pop(), qr.target = Kr[Kr.length - 1]
    }

    function j(e) {
        return new Yr(void 0, void 0, void 0, e + "")
    }

    function E(e) {
        var t = new Yr(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
        return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
    }

    function T(e) {
        ti = e
    }

    function D(e, t) {
        var n;
        if (o(e) && !(e instanceof Yr)) return h(e, "__ob__") && e.__ob__ instanceof ni ? n = e.__ob__ : ti && !Hr() && (Array.isArray(e) || s(e)) && Object.isExtensible(e) && !e._isVue && (n = new ni(e)), t && n && n.vmCount++, n
    }

    function I(e, t, n, r, i) {
        var a = new qr,
            o = Object.getOwnPropertyDescriptor(e, t);
        if (!o || !1 !== o.configurable) {
            var s = o && o.get,
                c = o && o.set;
            (!s || c) && 2 === arguments.length && (n = e[t]);
            var d = !i && D(n);
            Object.defineProperty(e, t, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    var t = s ? s.call(e) : n;
                    return qr.target && (a.depend(), d && (d.dep.depend(), Array.isArray(t) && M(t))), t
                },
                set: function(t) {
                    var r = s ? s.call(e) : n;
                    t !== r && (t == t || r == r) && (s && !c || (c ? c.call(e, t) : n = t, d = !i && D(t), a.notify()))
                }
            })
        }
    }

    function A(e, t, n) {
        if (Array.isArray(e) && c(t)) return e.length = sr(e.length, t), e.splice(t, 1, n), n;
        if (t in e && !(t in Object.prototype)) return e[t] = n, n;
        var r = e.__ob__;
        return e._isVue || r && r.vmCount ? n : r ? (I(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n)
    }

    function $(e, t) {
        if (Array.isArray(e) && c(t)) e.splice(t, 1);
        else {
            var n = e.__ob__;
            e._isVue || n && n.vmCount || h(e, t) && (delete e[t], n && n.dep.notify())
        }
    }

    function M(e) {
        for (var t = void 0, n = 0, r = e.length; n < r; n++)(t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && M(t)
    }

    function L(e, t) {
        if (!t) return e;
        for (var n, r, i, a = Br ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < a.length; o++) "__ob__" !== (n = a[o]) && (r = e[n], i = t[n], h(e, n) ? r !== i && s(r) && s(i) && L(r, i) : A(e, n, i));
        return e
    }

    function N(e, t, n) {
        return n ? function() {
            var r = "function" == typeof t ? t.call(n, n) : t,
                i = "function" == typeof e ? e.call(n, n) : e;
            return r ? L(r, i) : i
        } : t ? e ? function() {
            return L("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
        } : t : e
    }

    function R(e, t) {
        var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
        return n ? function(e) {
            for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(n) : n
    }

    function z(e, t) {
        var n = Object.create(e || null);
        return t ? g(n, t) : n
    }

    function F(e, t, n) {
        function r(r) {
            var i = ri[r] || ai;
            c[r] = i(e[r], t[r], n, r)
        }
        if ("function" == typeof t && (t = t.options), function(e) {
                var t = e.props;
                if (t) {
                    var n, r, i = {};
                    if (Array.isArray(t))
                        for (n = t.length; n--;) "string" != typeof(r = t[n]) || (i[hr(r)] = {
                            type: null
                        });
                    else if (s(t))
                        for (var a in t) r = t[a], i[hr(a)] = s(r) ? r : {
                            type: r
                        };
                    e.props = i
                }
            }(t), function(e) {
                var t = e.inject;
                if (t) {
                    var n = e.inject = {};
                    if (Array.isArray(t))
                        for (var r = 0; r < t.length; r++) n[t[r]] = {
                            from: t[r]
                        };
                    else if (s(t))
                        for (var i in t) {
                            var a = t[i];
                            n[i] = s(a) ? g({
                                from: i
                            }, a) : {
                                from: a
                            }
                        }
                }
            }(t), function(e) {
                var t = e.directives;
                if (t)
                    for (var n in t) {
                        var r = t[n];
                        "function" == typeof r && (t[n] = {
                            bind: r,
                            update: r
                        })
                    }
            }(t), !t._base && (t.extends && (e = F(e, t.extends, n)), t.mixins))
            for (var i = 0, a = t.mixins.length; i < a; i++) e = F(e, t.mixins[i], n);
        var o, c = {};
        for (o in e) r(o);
        for (o in t) h(e, o) || r(o);
        return c
    }

    function U(e, t, n) {
        if ("string" == typeof n) {
            var r = e[t];
            if (h(r, n)) return r[n];
            var i = hr(n);
            if (h(r, i)) return r[i];
            var a = vr(i);
            return h(r, a) ? r[a] : r[n] || r[i] || r[a]
        }
    }

    function H(e, t, n, r) {
        var i = t[e],
            a = !h(n, e),
            o = n[e],
            s = W(Boolean, i.type);
        if (-1 < s)
            if (a && !h(i, "default")) o = !1;
            else if ("" === o || o === gr(e)) {
            var c = W(String, i.type);
            (0 > c || s < c) && (o = !0)
        }
        if (void 0 === o) {
            o = function(e, t, n) {
                if (h(t, "default")) {
                    var r = t.default;
                    return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== V(t.type) ? r.call(e) : r
                }
            }(r, i, e);
            var d = ti;
            T(!0), D(o), T(d)
        }
        return o
    }

    function V(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : ""
    }

    function B(e, t) {
        return V(e) === V(t)
    }

    function W(e, t) {
        if (!Array.isArray(t)) return B(t, e) ? 0 : -1;
        for (var n = 0, r = t.length; n < r; n++)
            if (B(t[n], e)) return n;
        return -1
    }

    function G(e, t, n) {
        C();
        try {
            if (t)
                for (var r, i = t; i = i.$parent;)
                    if (r = i.$options.errorCaptured)
                        for (var a = 0; a < r.length; a++) try {
                            if (!1 === r[a].call(i, e, t, n)) return
                        } catch (t) {
                            K(t, i, "errorCaptured hook")
                        }
            K(e, t, n)
        } finally {
            P()
        }
    }

    function q(e, t, n, r, i) {
        var a;
        try {
            (a = n ? e.apply(t, n) : e.call(t)) && !a._isVue && d(a) && !a._handled && (a.catch((function(e) {
                return G(e, r, i + " (Promise/async)")
            })), a._handled = !0)
        } catch (t) {
            G(t, r, i)
        }
        return a
    }

    function K(e, t, n) {
        if (Or.errorHandler) try {
            return Or.errorHandler.call(null, e, t, n)
        } catch (n) {
            n !== e && Y(n)
        }
        Y(e)
    }

    function Y(e) {
        if (!jr && !Er || "undefined" == typeof console) throw e;
        console.error(e)
    }

    function X() {
        ci = !1;
        var e = si.slice(0);
        si.length = 0;
        for (var t = 0; t < e.length; t++) e[t]()
    }

    function J(e, t) {
        var n;
        if (si.push((function() {
                if (e) try {
                    e.call(t)
                } catch (e) {
                    G(e, t, "nextTick")
                } else n && n(t)
            })), ci || (ci = !0, ii()), !e && "undefined" != typeof Promise) return new Promise((function(e) {
            n = e
        }))
    }

    function Q(e) {
        (function e(t, n) {
            var r, i, a = Array.isArray(t);
            if ((a || o(t)) && !Object.isFrozen(t) && !(t instanceof Yr)) {
                if (t.__ob__) {
                    var s = t.__ob__.dep.id;
                    if (n.has(s)) return;
                    n.add(s)
                }
                if (a)
                    for (r = t.length; r--;) e(t[r], n);
                else
                    for (i = Object.keys(t), r = i.length; r--;) e(t[i[r]], n)
            }
        })(e, fi), fi.clear()
    }

    function Z(e, t) {
        function n() {
            var e = arguments,
                r = n.fns;
            if (!Array.isArray(r)) return q(r, null, arguments, t, "v-on handler");
            for (var i = r.slice(), a = 0; a < i.length; a++) q(i[a], null, e, t, "v-on handler")
        }
        return n.fns = e, n
    }

    function ee(e, t, r, a, o, s) {
        var c, d, l, u;
        for (c in e) d = e[c], l = t[c], u = hi(c), n(d) || (n(l) ? (n(d.fns) && (d = e[c] = Z(d, s)), i(u.once) && (d = e[c] = o(u.name, d, u.capture)), r(u.name, d, u.capture, u.passive, u.params)) : d !== l && (l.fns = d, e[c] = l));
        for (c in t) n(e[c]) && a((u = hi(c)).name, t[c], u.capture)
    }

    function te(e, t, a) {
        function o() {
            a.apply(this, arguments), f(s.fns, o)
        }
        e instanceof Yr && (e = e.data.hook || (e.data.hook = {}));
        var s, c = e[t];
        n(c) ? s = Z([o]) : r(c.fns) && i(c.merged) ? (s = c).fns.push(o) : s = Z([c, o]), s.merged = !0, e[t] = s
    }

    function ne(e, t, n, i, a) {
        if (r(t)) {
            if (h(t, n)) return e[n] = t[n], a || delete t[n], !0;
            if (h(t, i)) return e[n] = t[i], a || delete t[i], !0
        }
        return !1
    }

    function re(e) {
        return a(e) ? [j(e)] : Array.isArray(e) ? function e(t, o) {
            var s, c, d, l, u = [];
            for (s = 0; s < t.length; s++) !n(c = t[s]) && "boolean" != typeof c && (d = u.length - 1, l = u[d], Array.isArray(c) ? 0 < c.length && (ie((c = e(c, (o || "") + "_" + s))[0]) && ie(l) && (u[d] = j(l.text + c[0].text), c.shift()), u.push.apply(u, c)) : a(c) ? ie(l) ? u[d] = j(l.text + c) : "" !== c && u.push(j(c)) : ie(c) && ie(l) ? u[d] = j(l.text + c.text) : (i(t._isVList) && r(c.tag) && n(c.key) && r(o) && (c.key = "__vlist" + o + "_" + s + "__"), u.push(c)));
            return u
        }(e) : void 0
    }

    function ie(e) {
        return r(e) && r(e.text) && function(e) {
            return !1 === e
        }(e.isComment)
    }

    function ae(e, t) {
        if (e) {
            for (var n, r = Object.create(null), i = Br ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < i.length; a++)
                if ("__ob__" !== (n = i[a])) {
                    for (var o = e[n].from, s = t; s;) {
                        if (s._provided && h(s._provided, o)) {
                            r[n] = s._provided[o];
                            break
                        }
                        s = s.$parent
                    }
                    if (!s && "default" in e[n]) {
                        var c = e[n].default;
                        r[n] = "function" == typeof c ? c.call(t) : c
                    }
                } return r
        }
    }

    function oe(e, t) {
        if (!e || !e.length) return {};
        for (var n = {}, r = 0, i = e.length; r < i; r++) {
            var a = e[r],
                o = a.data;
            if (o && o.attrs && o.attrs.slot && delete o.attrs.slot, a.context !== t && a.fnContext !== t || !o || null == o.slot)(n.default || (n.default = [])).push(a);
            else {
                var s = o.slot,
                    c = n[s] || (n[s] = []);
                "template" === a.tag ? c.push.apply(c, a.children || []) : c.push(a)
            }
        }
        for (var d in n) n[d].every(se) && delete n[d];
        return n
    }

    function se(e) {
        return e.isComment && !e.asyncFactory || " " === e.text
    }

    function ce(e, t, n) {
        var r, i = 0 < Object.keys(t).length,
            a = e ? !!e.$stable : !i,
            o = e && e.$key;
        if (e) {
            if (e._normalized) return e._normalized;
            if (a && n && n !== cr && o === n.$key && !i && !n.$hasNormal) return n;
            for (var s in r = {}, e) e[s] && "$" !== s[0] && (r[s] = de(t, s, e[s]))
        } else r = {};
        for (var c in t) c in r || (r[c] = le(t, c));
        return e && Object.isExtensible(e) && (e._normalized = r), O(r, "$stable", a), O(r, "$key", o), O(r, "$hasNormal", i), r
    }

    function de(e, t, n) {
        var r = function() {
            var e = arguments.length ? n.apply(null, arguments) : n({});
            return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : re(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
        };
        return n.proxy && Object.defineProperty(e, t, {
            get: r,
            enumerable: !0,
            configurable: !0
        }), r
    }

    function le(e, t) {
        return function() {
            return e[t]
        }
    }

    function ue(e, t) {
        var n, i, a, s, c;
        if (Array.isArray(e) || "string" == typeof e)
            for (n = Array(e.length), i = 0, a = e.length; i < a; i++) n[i] = t(e[i], i);
        else if ("number" == typeof e)
            for (n = Array(e), i = 0; i < e; i++) n[i] = t(i + 1, i);
        else if (o(e))
            if (Br && e[Symbol.iterator]) {
                n = [];
                for (var d = e[Symbol.iterator](), l = d.next(); !l.done;) n.push(t(l.value, n.length)), l = d.next()
            } else
                for (s = Object.keys(e), n = Array(s.length), i = 0, a = s.length; i < a; i++) c = s[i], n[i] = t(e[c], c, i);
        return r(n) || (n = []), n._isVList = !0, n
    }

    function pe(e, t, n, r) {
        var i, a = this.$scopedSlots[e];
        a ? (n = n || {}, r && (n = g(g({}, r), n)), i = a(n) || t) : i = this.$slots[e] || t;
        var o = n && n.slot;
        return o ? this.$createElement("template", {
            slot: o
        }, i) : i
    }

    function fe(e) {
        return U(this.$options, "filters", e) || yr
    }

    function he(e, t) {
        return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
    }

    function ve(e, t, n, r, i) {
        var a = Or.keyCodes[t] || n;
        return i && r && !Or.keyCodes[t] ? he(i, r) : a ? he(a, e) : r ? gr(r) !== t : void 0
    }

    function me(e, t, n, r, i) {
        if (n)
            if (o(n)) {
                Array.isArray(n) && (n = b(n));
                var a, s = function(o) {
                    if ("class" === o || "style" === o || ur(o)) a = e;
                    else {
                        var s = e.attrs && e.attrs.type;
                        a = r || Or.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                    }
                    var c = hr(o),
                        d = gr(o);
                    c in a || d in a || (a[o] = n[o], !i) || ((e.on || (e.on = {}))["update:" + o] = function(e) {
                        n[o] = e
                    })
                };
                for (var c in n) s(c)
            } else;
        return e
    }

    function ge(e, t) {
        var n = this._staticTrees || (this._staticTrees = []),
            r = n[e];
        return r && !t ? r : (xe(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r)
    }

    function be(e, t, n) {
        return xe(e, "__once__" + t + (n ? "_" + n : ""), !0), e
    }

    function xe(e, t, n) {
        if (Array.isArray(e))
            for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && ye(e[r], t + "_" + r, n);
        else ye(e, t, n)
    }

    function ye(e, t, n) {
        e.isStatic = !0, e.key = t, e.isOnce = n
    }

    function we(e, t) {
        if (t)
            if (s(t)) {
                var n = e.on = e.on ? g({}, e.on) : {};
                for (var r in t) {
                    var i = n[r],
                        a = t[r];
                    n[r] = i ? [].concat(i, a) : a
                }
            } else;
        return e
    }

    function ke(e, t, n, r) {
        t = t || {
            $stable: !n
        };
        for (var i, a = 0; a < e.length; a++) i = e[a], Array.isArray(i) ? ke(i, t, n) : i && (i.proxy && (i.fn.proxy = !0), t[i.key] = i.fn);
        return r && (t.$key = r), t
    }

    function _e(e, t) {
        for (var n, r = 0; r < t.length; r += 2) "string" == typeof(n = t[r]) && n && (e[t[r]] = t[r + 1]);
        return e
    }

    function Oe(e, t) {
        return "string" == typeof e ? t + e : e
    }

    function Se(e) {
        e._o = be, e._n = u, e._s = l, e._l = ue, e._t = pe, e._q = y, e._i = w, e._m = ge, e._f = fe, e._k = ve, e._b = me, e._v = j, e._e = Jr, e._u = ke, e._g = we, e._d = _e, e._p = Oe
    }

    function Ce(e, t, n, r, a) {
        var o, s = this,
            c = a.options;
        h(r, "_uid") ? (o = Object.create(r))._original = r : (o = r, r = r._original);
        var d = i(c._compiled),
            l = !d;
        this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || cr, this.injections = ae(c.inject, r), this.slots = function() {
            return s.$slots || ce(e.scopedSlots, s.$slots = oe(n, r)), s.$slots
        }, Object.defineProperty(this, "scopedSlots", {
            enumerable: !0,
            get: function() {
                return ce(e.scopedSlots, this.slots())
            }
        }), d && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = ce(e.scopedSlots, this.$slots)), this._c = c._scopeId ? function(e, t, n, i) {
            var a = De(o, e, t, n, i, l);
            return a && !Array.isArray(a) && (a.fnScopeId = c._scopeId, a.fnContext = r), a
        } : function(e, t, n, r) {
            return De(o, e, t, n, r, l)
        }
    }

    function Pe(e, t, n, r) {
        var i = E(e);
        return i.fnContext = n, i.fnOptions = r, t.slot && ((i.data || (i.data = {})).slot = t.slot), i
    }

    function je(e, t) {
        for (var n in t) e[hr(n)] = t[n]
    }

    function Ee(e, t, a, s, c) {
        if (!n(e)) {
            var d = a.$options._base;
            if (o(e) && (e = d.extend(e)), "function" == typeof e) {
                var l;
                if (n(e.cid) && void 0 === (e = Le(l = e, d))) return function(e, t, n, r, i) {
                    var a = Jr();
                    return a.asyncFactory = e, a.asyncMeta = {
                        data: t,
                        context: n,
                        children: r,
                        tag: i
                    }, a
                }(l, t, a, s, c);
                t = t || {}, et(e), r(t.model) && function(e, t) {
                    var n = e.model && e.model.prop || "value",
                        i = e.model && e.model.event || "input";
                    (t.attrs || (t.attrs = {}))[n] = t.model.value;
                    var a = t.on || (t.on = {}),
                        o = a[i],
                        s = t.model.callback;
                    r(o) ? (Array.isArray(o) ? -1 === o.indexOf(s) : o !== s) && (a[i] = [s].concat(o)) : a[i] = s
                }(e.options, t);
                var u = function(e, t) {
                    var i = t.options.props;
                    if (!n(i)) {
                        var a = {},
                            o = e.attrs,
                            s = e.props;
                        if (r(o) || r(s))
                            for (var c in i) {
                                var d = gr(c);
                                ne(a, s, c, d, !0) || ne(a, o, c, d, !1)
                            }
                        return a
                    }
                }(t, e);
                if (i(e.options.functional)) return function(e, t, n, i, a) {
                    var o = e.options,
                        s = {},
                        c = o.props;
                    if (r(c))
                        for (var d in c) s[d] = H(d, c, t || cr);
                    else r(n.attrs) && je(s, n.attrs), r(n.props) && je(s, n.props);
                    var l = new Ce(n, s, a, i, e),
                        u = o.render.call(null, l._c, l);
                    if (u instanceof Yr) return Pe(u, n, l.parent, o);
                    if (Array.isArray(u)) {
                        for (var p = re(u) || [], f = Array(p.length), h = 0; h < p.length; h++) f[h] = Pe(p[h], n, l.parent, o);
                        return f
                    }
                }(e, u, t, a, s);
                var p = t.on;
                if (t.on = t.nativeOn, i(e.options.abstract)) {
                    var f = t.slot;
                    t = {}, f && (t.slot = f)
                }! function(e) {
                    for (var t = e.hook || (e.hook = {}), n = 0; n < gi.length; n++) {
                        var r = gi[n],
                            i = t[r],
                            a = mi[r];
                        i === a || i && i._merged || (t[r] = i ? Te(a, i) : a)
                    }
                }(t);
                var h = e.options.name || c;
                return new Yr("vue-component-" + e.cid + (h ? "-" + h : ""), t, void 0, void 0, void 0, a, {
                    Ctor: e,
                    propsData: u,
                    listeners: p,
                    tag: c,
                    children: s
                }, l)
            }
        }
    }

    function Te(e, t) {
        var n = function(n, r) {
            e(n, r), t(n, r)
        };
        return n._merged = !0, n
    }

    function De(e, t, n, r, o, s) {
        return (Array.isArray(n) || a(n)) && (o = r, r = n, n = void 0), i(s) && (o = xi), Ie(e, t, n, r, o)
    }

    function Ie(e, t, n, i, a) {
        if (r(n) && r(n.__ob__)) return Jr();
        if (r(n) && r(n.is) && (t = n.is), !t) return Jr();
        var o, s, c;
        (Array.isArray(i) && "function" == typeof i[0] && ((n = n || {}).scopedSlots = {
            default: i[0]
        }, i.length = 0), a === xi ? i = re(i) : a === bi && (i = function(e) {
            for (var t = 0; t < e.length; t++)
                if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
            return e
        }(i)), "string" == typeof t) ? (s = e.$vnode && e.$vnode.ns || Or.getTagNamespace(t), o = Or.isReservedTag(t) ? new Yr(Or.parsePlatformTagName(t), n, i, void 0, void 0, e) : n && n.pre || !r(c = U(e.$options, "components", t)) ? new Yr(t, n, i, void 0, void 0, e) : Ee(c, n, e, i, t)) : o = Ee(t, n, e, i);
        return Array.isArray(o) ? o : r(o) ? (r(s) && Ae(o, s), r(n) && $e(n), o) : Jr()
    }

    function Ae(e, t, a) {
        if (e.ns = t, "foreignObject" === e.tag && (t = void 0, a = !0), r(e.children))
            for (var o, s = 0, c = e.children.length; s < c; s++) r((o = e.children[s]).tag) && (n(o.ns) || i(a) && "svg" !== o.tag) && Ae(o, t, a)
    }

    function $e(e) {
        o(e.style) && Q(e.style), o(e.class) && Q(e.class)
    }

    function Me(e, t) {
        return (e.__esModule || Br && "Module" === e[Symbol.toStringTag]) && (e = e.default), o(e) ? t.extend(e) : e
    }

    function Le(e, t) {
        if (i(e.error) && r(e.errorComp)) return e.errorComp;
        if (r(e.resolved)) return e.resolved;
        var a = yi;
        if (a && r(e.owners) && -1 === e.owners.indexOf(a) && e.owners.push(a), i(e.loading) && r(e.loadingComp)) return e.loadingComp;
        if (a && !r(e.owners)) {
            var s = e.owners = [a],
                c = !0,
                l = null,
                u = null;
            a.$on("hook:destroyed", (function() {
                return f(s, a)
            }));
            var p = function(e) {
                    for (var t = 0, n = s.length; t < n; t++) s[t].$forceUpdate();
                    e && (s.length = 0, null != l && (clearTimeout(l), l = null), null != u && (clearTimeout(u), u = null))
                },
                h = k((function(n) {
                    e.resolved = Me(n, t), c ? s.length = 0 : p(!0)
                })),
                v = k((function() {
                    r(e.errorComp) && (e.error = !0, p(!0))
                })),
                m = e(h, v);
            return o(m) && (d(m) ? n(e.resolved) && m.then(h, v) : d(m.component) && (m.component.then(h, v), r(m.error) && (e.errorComp = Me(m.error, t)), r(m.loading) && (e.loadingComp = Me(m.loading, t), 0 === m.delay ? e.loading = !0 : l = setTimeout((function() {
                l = null, n(e.resolved) && n(e.error) && (e.loading = !0, p(!1))
            }), m.delay || 200)), r(m.timeout) && (u = setTimeout((function() {
                u = null, n(e.resolved) && v(null)
            }), m.timeout)))), c = !1, e.loading ? e.loadingComp : e.resolved
        }
    }

    function Ne(e) {
        return e.isComment && e.asyncFactory
    }

    function Re(e) {
        if (Array.isArray(e))
            for (var t, n = 0; n < e.length; n++)
                if (r(t = e[n]) && (r(t.componentOptions) || Ne(t))) return t
    }

    function ze(e, t) {
        vi.$on(e, t)
    }

    function Fe(e, t) {
        vi.$off(e, t)
    }

    function Ue(e, t) {
        var n = vi;
        return function r() {
            var i = t.apply(null, arguments);
            null !== i && n.$off(e, r)
        }
    }

    function He(e, t, n) {
        vi = e, ee(t, n || {}, ze, Fe, Ue, e), vi = void 0
    }

    function Ve(e) {
        var t = wi;
        return wi = e,
            function() {
                wi = t
            }
    }

    function Be(e) {
        for (; e && (e = e.$parent);)
            if (e._inactive) return !0;
        return !1
    }

    function We(e, t) {
        if (t) {
            if (e._directInactive = !1, Be(e)) return
        } else if (e._directInactive) return;
        if (e._inactive || null === e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++) We(e.$children[n]);
            Ge(e, "activated")
        }
    }

    function Ge(e, t) {
        C();
        var n = e.$options[t];
        if (n)
            for (var r = 0, i = n.length; r < i; r++) q(n[r], e, null, e, t + " hook");
        e._hasHookEvent && e.$emit("hook:" + t), P()
    }

    function qe() {
        var e, t;
        for (ji = Ei(), Ci = !0, ki.sort((function(e, t) {
                return e.id - t.id
            })), Pi = 0; Pi < ki.length; Pi++)(e = ki[Pi]).before && e.before(), t = e.id, Oi[t] = null, e.run();
        var n = _i.slice(),
            r = ki.slice();
        Pi = ki.length = _i.length = 0, Oi = {}, Si = Ci = !1,
            function(e) {
                for (var t = 0; t < e.length; t++) e[t]._inactive = !0, We(e[t], !0)
            }(n),
            function(e) {
                for (var t = e.length; t--;) {
                    var n = e[t],
                        r = n.vm;
                    r._watcher === n && r._isMounted && !r._isDestroyed && Ge(r, "updated")
                }
            }(r), Vr && Or.devtools && Vr.emit("flush")
    }

    function Ke(e, t, n) {
        Ai.get = function() {
            return this[t][n]
        }, Ai.set = function(e) {
            this[t][n] = e
        }, Object.defineProperty(e, n, Ai)
    }

    function Ye(e) {
        e._watchers = [];
        var t = e.$options;
        t.props && function(e, t) {
            var n = e.$options.propsData || {},
                r = e._props = {},
                i = e.$options._propKeys = [];
            !e.$parent || T(!1);
            var a = function(a) {
                i.push(a);
                var o = H(a, t, n, e);
                I(r, a, o), a in e || Ke(e, "_props", a)
            };
            for (var o in t) a(o);
            T(!0)
        }(e, t.props), t.methods && function(e, t) {
            for (var n in e.$options.props, t) e[n] = "function" == typeof t[n] ? br(t[n], e) : x
        }(e, t.methods), t.data ? function(e) {
            var t = e.$options.data;
            s(t = e._data = "function" == typeof t ? function(e, t) {
                C();
                try {
                    return e.call(t, t)
                } catch (e) {
                    return G(e, t, "data()"), {}
                } finally {
                    P()
                }
            }(t, e) : t || {}) || (t = {});
            for (var n = Object.keys(t), r = e.$options.props, i = (e.$options.methods, n.length); i--;) {
                var a = n[i];
                (!r || !h(r, a)) && (!_(a) && Ke(e, "_data", a))
            }
            D(t, !0)
        }(e) : D(e._data = {}, !0), t.computed && function(e, t) {
            var n = e._computedWatchers = Object.create(null),
                r = Hr();
            for (var i in t) {
                var a = t[i],
                    o = "function" == typeof a ? a : a.get;
                r || (n[i] = new Ii(e, o || x, x, $i)), i in e || Xe(e, i, a)
            }
        }(e, t.computed), t.watch && t.watch !== Nr && function(e, t) {
            for (var n in t) {
                var r = t[n];
                if (Array.isArray(r))
                    for (var i = 0; i < r.length; i++) Ze(e, n, r[i]);
                else Ze(e, n, r)
            }
        }(e, t.watch)
    }

    function Xe(e, t, n) {
        var r = !Hr();
        "function" == typeof n ? (Ai.get = r ? Je(t) : Qe(n), Ai.set = x) : (Ai.get = n.get ? r && !1 !== n.cache ? Je(t) : Qe(n.get) : x, Ai.set = n.set || x), Object.defineProperty(e, t, Ai)
    }

    function Je(e) {
        return function() {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t) return t.dirty && t.evaluate(), qr.target && t.depend(), t.value
        }
    }

    function Qe(e) {
        return function() {
            return e.call(this, this)
        }
    }

    function Ze(e, t, n, r) {
        return s(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r)
    }

    function et(e) {
        var t = e.options;
        if (e.super) {
            var n = et(e.super);
            if (n !== e.superOptions) {
                e.superOptions = n;
                var r = function(e) {
                    var t, n = e.options,
                        r = e.sealedOptions;
                    for (var i in n) n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
                    return t
                }(e);
                r && g(e.extendOptions, r), (t = e.options = F(n, e.extendOptions)).name && (t.components[t.name] = e)
            }
        }
        return t
    }

    function tt(e) {
        this._init(e)
    }

    function nt(e) {
        e.cid = 0;
        var t = 1;
        e.extend = function(e) {
            e = e || {};
            var n = this,
                r = n.cid,
                i = e._Ctor || (e._Ctor = {});
            if (i[r]) return i[r];
            var a = e.name || n.options.name,
                o = function(e) {
                    this._init(e)
                };
            return (o.prototype = Object.create(n.prototype)).constructor = o, o.cid = t++, o.options = F(n.options, e), o.super = n, o.options.props && function(e) {
                var t = e.options.props;
                for (var n in t) Ke(e.prototype, "_props", n)
            }(o), o.options.computed && function(e) {
                var t = e.options.computed;
                for (var n in t) Xe(e.prototype, n, t[n])
            }(o), o.extend = n.extend, o.mixin = n.mixin, o.use = n.use, kr.forEach((function(e) {
                o[e] = n[e]
            })), a && (o.options.components[a] = o), o.superOptions = n.options, o.extendOptions = e, o.sealedOptions = g({}, o.options), i[r] = o, o
        }
    }

    function rt(e) {
        return e && (e.Ctor.options.name || e.tag)
    }

    function it(e, t) {
        return Array.isArray(e) ? -1 < e.indexOf(t) : "string" == typeof e ? -1 < e.split(",").indexOf(t) : !! function(e) {
            return "[object RegExp]" === dr.call(e)
        }(e) && e.test(t)
    }

    function at(e, t) {
        var n = e.cache,
            r = e.keys,
            i = e._vnode;
        for (var a in n) {
            var o = n[a];
            if (o) {
                var s = rt(o.componentOptions);
                s && !t(s) && ot(n, a, r, i)
            }
        }
    }

    function ot(e, t, n, r) {
        var i = e[t];
        i && (!r || i.tag !== r.tag) && i.componentInstance.$destroy(), e[t] = null, f(n, t)
    }

    function st(e) {
        for (var t = e.data, n = e, i = e; r(i.componentInstance);)(i = i.componentInstance._vnode) && i.data && (t = ct(i.data, t));
        for (; r(n = n.parent);) n && n.data && (t = ct(t, n.data));
        return function(e, t) {
            return r(e) || r(t) ? dt(e, lt(t)) : ""
        }(t.staticClass, t.class)
    }

    function ct(e, t) {
        return {
            staticClass: dt(e.staticClass, t.staticClass),
            class: r(e.class) ? [e.class, t.class] : t.class
        }
    }

    function dt(e, t) {
        return e ? t ? e + " " + t : e : t || ""
    }

    function lt(e) {
        return Array.isArray(e) ? function(e) {
            for (var t, n = "", i = 0, a = e.length; i < a; i++) r(t = lt(e[i])) && "" !== t && (n && (n += " "), n += t);
            return n
        }(e) : o(e) ? function(e) {
            var t = "";
            for (var n in e) e[n] && (t && (t += " "), t += n);
            return t
        }(e) : "string" == typeof e ? e : ""
    }

    function ut(e) {
        return oa(e) ? "svg" : "math" === e ? "math" : void 0
    }

    function pt(e) {
        if ("string" == typeof e) {
            var t = document.querySelector(e);
            return t || document.createElement("div")
        }
        return e
    }

    function ft(e, t) {
        var n = e.data.ref;
        if (r(n)) {
            var i = e.context,
                a = e.componentInstance || e.elm,
                o = i.$refs;
            t ? Array.isArray(o[n]) ? f(o[n], a) : o[n] === a && (o[n] = void 0) : e.data.refInFor ? Array.isArray(o[n]) ? 0 > o[n].indexOf(a) && o[n].push(a) : o[n] = [a] : o[n] = a
        }
    }

    function ht(e, t) {
        return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && r(e.data) === r(t.data) && function(e, t) {
            if ("input" !== e.tag) return !0;
            var n, i = r(n = e.data) && r(n = n.attrs) && n.type,
                a = r(n = t.data) && r(n = n.attrs) && n.type;
            return i === a || da(i) && da(a)
        }(e, t) || i(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && n(t.asyncFactory.error))
    }

    function vt(e, t, n) {
        var i, a, o = {};
        for (i = t; i <= n; ++i) r(a = e[i].key) && (o[a] = i);
        return o
    }

    function mt(e, t) {
        (e.data.directives || t.data.directives) && function(e, t) {
            var n, r, i, a = e === ua,
                o = gt(e.data.directives, e.context),
                s = gt(t.data.directives, t.context),
                c = [],
                d = [];
            for (n in s) r = o[n], i = s[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, xt(i, "update", t, e), i.def && i.def.componentUpdated && d.push(i)) : (xt(i, "bind", t, e), i.def && i.def.inserted && c.push(i));
            if (c.length) {
                var l = function() {
                    for (var n = 0; n < c.length; n++) xt(c[n], "inserted", t, e)
                };
                a ? te(t, "insert", l) : l()
            }
            if (d.length && te(t, "postpatch", (function() {
                    for (var n = 0; n < d.length; n++) xt(d[n], "componentUpdated", t, e)
                })), !a)
                for (n in o) s[n] || xt(o[n], "unbind", e, e, t === ua)
        }(e, t)
    }

    function gt(e, t) {
        var n, r, i = Object.create(null);
        if (!e) return i;
        for (n = 0; n < e.length; n++)(r = e[n]).modifiers || (r.modifiers = fa), i[bt(r)] = r, r.def = U(t.$options, "directives", r.name);
        return i
    }

    function bt(e) {
        return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
    }

    function xt(e, t, n, r, i) {
        var a = e.def && e.def[t];
        if (a) try {
            a(n.elm, e, n, r, i)
        } catch (i) {
            G(i, n.context, "directive " + e.name + " " + t + " hook")
        }
    }

    function yt(e, t) {
        var i = t.componentOptions;
        if (!(r(i) && !1 === i.Ctor.options.inheritAttrs || n(e.data.attrs) && n(t.data.attrs))) {
            var a, o, s = t.elm,
                c = e.data.attrs || {},
                d = t.data.attrs || {};
            for (a in r(d.__ob__) && (d = t.data.attrs = g({}, d)), d) o = d[a], c[a] !== o && wt(s, a, o);
            for (a in (Ir || $r) && d.value !== c.value && wt(s, "value", d.value), c) n(d[a]) && (ta(a) ? s.removeAttributeNS(ea, na(a)) : !Xi(a) && s.removeAttribute(a))
        }
    }

    function wt(e, t, n) {
        -1 < e.tagName.indexOf("-") ? kt(e, t, n) : Zi(t) ? ra(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Xi(t) ? e.setAttribute(t, Qi(t, n)) : ta(t) ? ra(n) ? e.removeAttributeNS(ea, na(t)) : e.setAttributeNS(ea, t, n) : kt(e, t, n)
    }

    function kt(e, t, n) {
        if (ra(n)) e.removeAttribute(t);
        else {
            if (Ir && !Ar && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                var r = function(t) {
                    t.stopImmediatePropagation(), e.removeEventListener("input", r)
                };
                e.addEventListener("input", r), e.__ieph = !0
            }
            e.setAttribute(t, n)
        }
    }

    function _t(e, t) {
        var i = t.elm,
            a = t.data,
            o = e.data;
        if (!(n(a.staticClass) && n(a.class) && (n(o) || n(o.staticClass) && n(o.class)))) {
            var s = st(t),
                c = i._transitionClasses;
            r(c) && (s = dt(s, lt(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s)
        }
    }

    function Ot(e) {
        function t() {
            (o || (o = [])).push(e.slice(h, i).trim()), h = i + 1
        }
        var n, r, i, a, o, s = !1,
            c = !1,
            d = !1,
            l = !1,
            u = 0,
            p = 0,
            f = 0,
            h = 0;
        for (i = 0; i < e.length; i++)
            if (r = n, n = e.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);
            else if (c) 34 === n && 92 !== r && (c = !1);
        else if (d) 96 === n && 92 !== r && (d = !1);
        else if (l) 47 === n && 92 !== r && (l = !1);
        else if (124 !== n || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || u || p || f) {
            if (34 === n ? c = !0 : 39 === n ? s = !0 : 96 === n ? d = !0 : 40 === n ? f++ : 41 === n ? f-- : 91 === n ? p++ : 93 === n ? p-- : 123 === n ? u++ : 125 === n && u--, 47 === n) {
                for (var v = i - 1, m = void 0; 0 <= v && " " === (m = e.charAt(v)); v--);
                m && ha.test(m) || (l = !0)
            }
        } else null == a ? (h = i + 1, a = e.slice(0, i).trim()) : t();
        if (void 0 === a ? a = e.slice(0, i).trim() : 0 !== h && t(), o)
            for (i = 0; i < o.length; i++) a = St(a, o[i]);
        return a
    }

    function St(e, t) {
        var n = t.indexOf("(");
        if (0 > n) return '_f("' + t + '")(' + e + ")";
        var r = t.slice(0, n),
            i = t.slice(n + 1);
        return '_f("' + r + '")(' + e + (")" === i ? i : "," + i)
    }

    function Ct(e) {
        console.error("[Vue compiler]: " + e)
    }

    function Pt(e, t) {
        return e ? e.map((function(e) {
            return e[t]
        })).filter((function(e) {
            return e
        })) : []
    }

    function jt(e, t, n, r, i) {
        (e.props || (e.props = [])).push(Nt({
            name: t,
            value: n,
            dynamic: i
        }, r)), e.plain = !1
    }

    function Et(e, t, n, r, i) {
        (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Nt({
            name: t,
            value: n,
            dynamic: i
        }, r)), e.plain = !1
    }

    function Tt(e, t, n, r) {
        e.attrsMap[t] = n, e.attrsList.push(Nt({
            name: t,
            value: n
        }, r))
    }

    function Dt(e, t, n, r, i, a, o, s) {
        (e.directives || (e.directives = [])).push(Nt({
            name: t,
            rawName: n,
            value: r,
            arg: i,
            isDynamicArg: a,
            modifiers: o
        }, s)), e.plain = !1
    }

    function It(e, t, n) {
        return n ? "_p(" + t + ',"' + e + '")' : e + t
    }

    function At(e, t, n, r, i, a, o, s) {
        var c;
        (r = r || cr).right ? s ? t = "(" + t + ")==='click'?'contextmenu':(" + t + ")" : "click" === t && (t = "contextmenu", delete r.right) : r.middle && (s ? t = "(" + t + ")==='click'?'mouseup':(" + t + ")" : "click" === t && (t = "mouseup")), r.capture && (delete r.capture, t = It("!", t, s)), r.once && (delete r.once, t = It("~", t, s)), r.passive && (delete r.passive, t = It("&", t, s)), r.native ? (delete r.native, c = e.nativeEvents || (e.nativeEvents = {})) : c = e.events || (e.events = {});
        var d = Nt({
            value: n.trim(),
            dynamic: s
        }, o);
        r !== cr && (d.modifiers = r);
        var l = c[t];
        Array.isArray(l) ? i ? l.unshift(d) : l.push(d) : c[t] = l ? i ? [d, l] : [l, d] : d, e.plain = !1
    }

    function $t(e, t, n) {
        var r = Mt(e, ":" + t) || Mt(e, "v-bind:" + t);
        if (null != r) return Ot(r);
        if (!1 !== n) {
            var i = Mt(e, t);
            if (null != i) return JSON.stringify(i)
        }
    }

    function Mt(e, t, n) {
        var r;
        if (null != (r = e.attrsMap[t]))
            for (var i = e.attrsList, a = 0, o = i.length; a < o; a++)
                if (i[a].name === t) {
                    i.splice(a, 1);
                    break
                } return n && delete e.attrsMap[t], r
    }

    function Lt(e, t) {
        for (var n, r = e.attrsList, i = 0, a = r.length; i < a; i++)
            if (n = r[i], t.test(n.name)) return r.splice(i, 1), n
    }

    function Nt(e, t) {
        return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e
    }

    function Rt(e, t, n) {
        var r = n || {},
            i = r.number,
            a = "$$v",
            o = a;
        r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");
        var s = zt(t, o);
        e.model = {
            value: "(" + t + ")",
            expression: JSON.stringify(t),
            callback: "function ($$v) {" + s + "}"
        }
    }

    function zt(e, t) {
        var n = function(e) {
            if (e = e.trim(), Ri = e.length, 0 > e.indexOf("[") || e.lastIndexOf("]") < Ri - 1) return -1 < (Ui = e.lastIndexOf(".")) ? {
                exp: e.slice(0, Ui),
                key: '"' + e.slice(Ui + 1) + '"'
            } : {
                exp: e,
                key: null
            };
            for (zi = e, Ui = Hi = Vi = 0; !Ut();) Ht(Fi = Ft()) ? Bt(Fi) : 91 === Fi && Vt(Fi);
            return {
                exp: e.slice(0, Hi),
                key: e.slice(Hi + 1, Vi)
            }
        }(e);
        return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
    }

    function Ft() {
        return zi.charCodeAt(++Ui)
    }

    function Ut() {
        return Ui >= Ri
    }

    function Ht(e) {
        return 34 === e || 39 === e
    }

    function Vt(e) {
        var t = 1;
        for (Hi = Ui; !Ut();)
            if (Ht(e = Ft())) Bt(e);
            else if (91 === e && t++, 93 === e && t--, 0 == t) {
            Vi = Ui;
            break
        }
    }

    function Bt(e) {
        for (var t = e; !Ut() && (e = Ft()) !== t;);
    }

    function Wt(e, t, n) {
        var r = Bi;
        return function i() {
            var a = t.apply(null, arguments);
            null !== a && qt(e, i, n, r)
        }
    }

    function Gt(e, t, n, r) {
        if (ga) {
            var i = ji,
                a = t;
            t = a._wrapper = function(e) {
                if (e.target === e.currentTarget || e.timeStamp >= i || 0 >= e.timeStamp || e.target.ownerDocument !== document) return a.apply(this, arguments)
            }
        }
        Bi.addEventListener(e, t, Rr ? {
            capture: n,
            passive: r
        } : n)
    }

    function qt(e, t, n, r) {
        (r || Bi).removeEventListener(e, t._wrapper || t, n)
    }

    function Kt(e, t) {
        if (!n(e.data.on) || !n(t.data.on)) {
            var i = t.data.on || {},
                a = e.data.on || {};
            Bi = t.elm,
                function(e) {
                    if (r(e[va])) {
                        var t = Ir ? "change" : "input";
                        e[t] = [].concat(e[va], e[t] || []), delete e[va]
                    }
                    r(e[ma]) && (e.change = [].concat(e[ma], e.change || []), delete e[ma])
                }(i), ee(i, a, Gt, qt, Wt, t.context), Bi = void 0
        }
    }

    function Yt(e, t) {
        if (!n(e.data.domProps) || !n(t.data.domProps)) {
            var i, a, o = t.elm,
                s = e.data.domProps || {},
                c = t.data.domProps || {};
            for (i in r(c.__ob__) && (c = t.data.domProps = g({}, c)), s) i in c || (o[i] = "");
            for (i in c) {
                if (a = c[i], "textContent" === i || "innerHTML" === i) {
                    if (t.children && (t.children.length = 0), a === s[i]) continue;
                    1 === o.childNodes.length && o.removeChild(o.childNodes[0])
                }
                if ("value" === i && "PROGRESS" !== o.tagName) {
                    o._value = a;
                    var d = n(a) ? "" : a + "";
                    Xt(o, d) && (o.value = d)
                } else if ("innerHTML" === i && oa(o.tagName) && n(o.innerHTML)) {
                    (Wi = Wi || document.createElement("div")).innerHTML = "<svg>" + a + "</svg>";
                    for (var l = Wi.firstChild; o.firstChild;) o.removeChild(o.firstChild);
                    for (; l.firstChild;) o.appendChild(l.firstChild)
                } else if (a !== s[i]) try {
                    o[i] = a
                } catch (t) {}
            }
        }
    }

    function Xt(e, t) {
        return !e.composing && ("OPTION" === e.tagName || function(e, t) {
            var n = !0;
            try {
                n = document.activeElement !== e
            } catch (t) {}
            return n && e.value !== t
        }(e, t) || function(e, t) {
            var n = e.value,
                i = e._vModifiers;
            if (r(i)) {
                if (i.number) return u(n) !== u(t);
                if (i.trim) return n.trim() !== t.trim()
            }
            return n !== t
        }(e, t))
    }

    function Jt(e) {
        var t = Qt(e.style);
        return e.staticStyle ? g(e.staticStyle, t) : t
    }

    function Qt(e) {
        return Array.isArray(e) ? b(e) : "string" == typeof e ? ba(e) : e
    }

    function Zt(e, t) {
        var i = t.data,
            a = e.data;
        if (!(n(i.staticStyle) && n(i.style) && n(a.staticStyle) && n(a.style))) {
            var o, s, c = t.elm,
                d = a.staticStyle,
                l = a.normalizedStyle || a.style || {},
                u = d || l,
                p = Qt(t.data.style) || {};
            t.data.normalizedStyle = r(p.__ob__) ? g({}, p) : p;
            var f = function(e, t) {
                var n, r = {};
                if (t)
                    for (var i = e; i.componentInstance;)(i = i.componentInstance._vnode) && i.data && (n = Jt(i.data)) && g(r, n);
                (n = Jt(e.data)) && g(r, n);
                for (var a = e; a = a.parent;) a.data && (n = Jt(a.data)) && g(r, n);
                return r
            }(t, !0);
            for (s in u) n(f[s]) && wa(c, s, "");
            for (s in f)(o = f[s]) !== u[s] && wa(c, s, null == o ? "" : o)
        }
    }

    function en(e, t) {
        if (t && (t = t.trim()))
            if (e.classList) - 1 < t.indexOf(" ") ? t.split(Oa).forEach((function(t) {
                return e.classList.add(t)
            })) : e.classList.add(t);
            else {
                var n = " " + (e.getAttribute("class") || "") + " ";
                0 > n.indexOf(" " + t + " ") && e.setAttribute("class", (n + t).trim())
            }
    }

    function tn(e, t) {
        if (t && (t = t.trim()))
            if (e.classList) - 1 < t.indexOf(" ") ? t.split(Oa).forEach((function(t) {
                return e.classList.remove(t)
            })) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
            else {
                for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; 0 <= n.indexOf(r);) n = n.replace(r, " ");
                (n = n.trim()) ? e.setAttribute("class", n): e.removeAttribute("class")
            }
    }

    function nn(e) {
        if (e) {
            if ("object" == typeof e) {
                var t = {};
                return !1 !== e.css && g(t, Sa(e.name || "v")), g(t, e), t
            }
            return "string" == typeof e ? Sa(e) : void 0
        }
    }

    function rn(e) {
        Aa((function() {
            Aa(e)
        }))
    }

    function an(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        0 > n.indexOf(t) && (n.push(t), en(e, t))
    }

    function on(e, t) {
        e._transitionClasses && f(e._transitionClasses, t), tn(e, t)
    }

    function sn(e, t, n) {
        var r = cn(e, t),
            i = r.type,
            a = r.timeout,
            o = r.propCount;
        if (!i) return n();
        var s = i === Pa ? Ta : Ia,
            c = 0,
            d = function() {
                e.removeEventListener(s, l), n()
            },
            l = function(t) {
                t.target === e && ++c >= o && d()
            };
        setTimeout((function() {
            c < o && d()
        }), a + 1), e.addEventListener(s, l)
    }

    function cn(e, t) {
        var n, r = window.getComputedStyle(e),
            i = (r[Ea + "Delay"] || "").split(", "),
            a = (r[Ea + "Duration"] || "").split(", "),
            o = dn(i, a),
            s = (r[Da + "Delay"] || "").split(", "),
            c = (r[Da + "Duration"] || "").split(", "),
            d = dn(s, c),
            l = 0,
            u = 0;
        return t === Pa ? 0 < o && (n = Pa, l = o, u = a.length) : t === ja ? 0 < d && (n = ja, l = d, u = c.length) : u = (n = 0 < (l = sr(o, d)) ? o > d ? Pa : ja : null) ? n === Pa ? a.length : c.length : 0, {
            type: n,
            timeout: l,
            propCount: u,
            hasTransform: n === Pa && $a.test(r[Ea + "Property"])
        }
    }

    function dn(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return sr.apply(null, t.map((function(t, n) {
            return ln(t) + ln(e[n])
        })))
    }

    function ln(e) {
        return 1e3 * +e.slice(0, -1).replace(",", ".")
    }

    function un(e, t) {
        var i = e.elm;
        r(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
        var a = nn(e.data.transition);
        if (!n(a) && !r(i._enterCb) && 1 === i.nodeType) {
            for (var s = a.css, c = a.type, d = a.enterClass, l = a.enterToClass, p = a.enterActiveClass, f = a.appearClass, h = a.appearToClass, v = a.appearActiveClass, m = a.beforeEnter, g = a.enter, b = a.afterEnter, x = a.enterCancelled, y = a.beforeAppear, w = a.appear, _ = a.afterAppear, O = a.appearCancelled, S = a.duration, C = wi, P = wi.$vnode; P && P.parent;) C = P.context, P = P.parent;
            var j = !C._isMounted || !e.isRootInsert;
            if (!j || w || "" === w) {
                var E = j && f ? f : d,
                    T = j && v ? v : p,
                    D = j && h ? h : l,
                    I = j && y || m,
                    A = j && "function" == typeof w ? w : g,
                    $ = j && _ || b,
                    M = j && O || x,
                    L = u(o(S) ? S.enter : S),
                    N = !1 !== s && !Ar,
                    R = hn(A),
                    z = i._enterCb = k((function() {
                        N && (on(i, D), on(i, T)), z.cancelled ? (N && on(i, E), M && M(i)) : $ && $(i), i._enterCb = null
                    }));
                e.data.show || te(e, "insert", (function() {
                    var t = i.parentNode,
                        n = t && t._pending && t._pending[e.key];
                    n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(), A && A(i, z)
                })), I && I(i), N && (an(i, E), an(i, T), rn((function() {
                    on(i, E), z.cancelled || (an(i, D), !R && (fn(L) ? setTimeout(z, L) : sn(i, c, z)))
                }))), e.data.show && (t && t(), A && A(i, z)), N || R || z()
            }
        }
    }

    function pn(e, t) {
        function i() {
            O.cancelled || (!e.data.show && a.parentNode && ((a.parentNode._pending || (a.parentNode._pending = {}))[e.key] = e), h && h(a), y && (an(a, l), an(a, f), rn((function() {
                on(a, l), O.cancelled || (an(a, p), !w && (fn(_) ? setTimeout(O, _) : sn(a, d, O)))
            }))), v && v(a, O), !y && !w && O())
        }
        var a = e.elm;
        r(a._enterCb) && (a._enterCb.cancelled = !0, a._enterCb());
        var s = nn(e.data.transition);
        if (n(s) || 1 !== a.nodeType) return t();
        if (!r(a._leaveCb)) {
            var c = s.css,
                d = s.type,
                l = s.leaveClass,
                p = s.leaveToClass,
                f = s.leaveActiveClass,
                h = s.beforeLeave,
                v = s.leave,
                m = s.afterLeave,
                g = s.leaveCancelled,
                b = s.delayLeave,
                x = s.duration,
                y = !1 !== c && !Ar,
                w = hn(v),
                _ = u(o(x) ? x.leave : x),
                O = a._leaveCb = k((function() {
                    a.parentNode && a.parentNode._pending && (a.parentNode._pending[e.key] = null), y && (on(a, p), on(a, f)), O.cancelled ? (y && on(a, l), g && g(a)) : (t(), m && m(a)), a._leaveCb = null
                }));
            b ? b(i) : i()
        }
    }

    function fn(e) {
        return "number" == typeof e && !isNaN(e)
    }

    function hn(e) {
        if (n(e)) return !1;
        var t = e.fns;
        return r(t) ? hn(Array.isArray(t) ? t[0] : t) : 1 < (e._length || e.length)
    }

    function vn(e, t) {
        !0 !== t.data.show && un(t)
    }

    function mn(e, t, n) {
        gn(e, t), (Ir || $r) && setTimeout((function() {
            gn(e, t)
        }), 0)
    }

    function gn(e, t) {
        var n = t.value,
            r = e.multiple;
        if (!r || Array.isArray(n)) {
            for (var i, a, o = 0, s = e.options.length; o < s; o++)
                if (a = e.options[o], r) i = -1 < w(n, xn(a)), a.selected !== i && (a.selected = i);
                else if (y(xn(a), n)) return void(e.selectedIndex !== o && (e.selectedIndex = o));
            r || (e.selectedIndex = -1)
        }
    }

    function bn(e, t) {
        return t.every((function(t) {
            return !y(t, e)
        }))
    }

    function xn(e) {
        return "_value" in e ? e._value : e.value
    }

    function yn(e) {
        e.target.composing = !0
    }

    function wn(e) {
        e.target.composing && (e.target.composing = !1, kn(e.target, "input"))
    }

    function kn(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n)
    }

    function _n(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : _n(e.componentInstance._vnode)
    }

    function On(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? On(Re(t.children)) : e
    }

    function Sn(e) {
        var t = {},
            n = e.$options;
        for (var r in n.propsData) t[r] = e[r];
        var i = n._parentListeners;
        for (var a in i) t[hr(a)] = i[a];
        return t
    }

    function Cn(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
            props: t.componentOptions.propsData
        })
    }

    function Pn(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
    }

    function jn(e) {
        e.data.newPos = e.elm.getBoundingClientRect()
    }

    function En(e) {
        var t = e.data.pos,
            n = e.data.newPos,
            r = t.left - n.left,
            i = t.top - n.top;
        if (r || i) {
            e.data.moved = !0;
            var a = e.elm.style;
            a.transform = a.WebkitTransform = "translate(" + r + "px," + i + "px)", a.transitionDuration = "0s"
        }
    }

    function Tn(e, t) {
        var n = t ? yo : xo;
        return e.replace(n, (function(e) {
            return bo[e]
        }))
    }

    function Dn(e, t, n) {
        return {
            type: 1,
            tag: e,
            attrsList: t,
            attrsMap: Rn(t),
            rawAttrsMap: {},
            parent: n,
            children: []
        }
    }

    function In(e, t) {
        function n(e) {
            if (r(e), l || e.processed || (e = An(e, t)), s.length || e === a || a.if && (e.elseif || e.else) && Mn(a, {
                    exp: e.elseif,
                    block: e
                }), o && !e.forbidden)
                if (e.elseif || e.else) ! function(e, t) {
                    var n = function(e) {
                        for (var t = e.length; t--;) {
                            if (1 === e[t].type) return e[t];
                            e.pop()
                        }
                    }(t.children);
                    n && n.if && Mn(n, {
                        exp: e.elseif,
                        block: e
                    })
                }(e, o);
                else {
                    if (e.slotScope) {
                        var n = e.slotTarget || '"default"';
                        (o.scopedSlots || (o.scopedSlots = {}))[n] = e
                    }
                    o.children.push(e), e.parent = o
                } e.children = e.children.filter((function(e) {
                return !e.slotScope
            })), r(e), e.pre && (l = !1), qa(e.tag) && (u = !1);
            for (var i = 0; i < Ga.length; i++) Ga[i](e, t)
        }

        function r(e) {
            if (!u)
                for (var t;
                    (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) e.children.pop()
        }
        Ha = t.warn || Ct, qa = t.isPreTag || xr, Ka = t.mustUseProp || xr, Ya = t.getTagNamespace || xr;
        var i = t.isReservedTag || xr;
        (function(e) {
            return !!e.component || !i(e.tag)
        }), Ba = Pt(t.modules, "transformNode"), Wa = Pt(t.modules, "preTransformNode"), Ga = Pt(t.modules, "postTransformNode"), Va = t.delimiters;
        var a, o, s = [],
            c = !1 !== t.preserveWhitespace,
            d = t.whitespace,
            l = !1,
            u = !1;
        return function(e, t) {
            function n(t) {
                p += t, e = e.substring(t)
            }

            function r() {
                var t = e.match(lo);
                if (t) {
                    var r, i, a = {
                        tagName: t[1],
                        attrs: [],
                        start: p
                    };
                    for (n(t[0].length); !(r = e.match(uo)) && (i = e.match(oo) || e.match(ao));) i.start = p, n(i[0].length), i.end = p, a.attrs.push(i);
                    if (r) return a.unarySlash = r[1], n(r[0].length), a.end = p, a
                }
            }

            function i(e) {
                var n = e.tagName,
                    r = e.unarySlash;
                d && ("p" === s && io(n) && a(s), u(n) && s === n && a(n));
                for (var i = l(n) || !!r, o = e.attrs.length, p = Array(o), f = 0; f < o; f++) {
                    var h = e.attrs[f],
                        v = h[3] || h[4] || h[5] || "",
                        m = "a" === n && "href" === h[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                    p[f] = {
                        name: h[1],
                        value: Tn(v, m)
                    }
                }
                i || (c.push({
                    tag: n,
                    lowerCasedTag: n.toLowerCase(),
                    attrs: p,
                    start: e.start,
                    end: e.end
                }), s = n), t.start && t.start(n, p, i, e.start, e.end)
            }

            function a(e, n, r) {
                var i, a;
                if (null == n && (n = p), null == r && (r = p), e)
                    for (a = e.toLowerCase(), i = c.length - 1; 0 <= i && c[i].lowerCasedTag !== a; i--);
                else i = 0;
                if (0 <= i) {
                    for (var o = c.length - 1; o >= i; o--) t.end && t.end(c[o].tag, n, r);
                    c.length = i, s = i && c[i - 1].tag
                } else "br" === a ? t.start && t.start(e, [], !0, n, r) : "p" === a && (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r))
            }
            for (var o, s, c = [], d = t.expectHTML, l = t.isUnaryTag || xr, u = t.canBeLeftOpenTag || xr, p = 0; e;) {
                if (o = e, s && mo(s)) {
                    var f = 0,
                        h = s.toLowerCase(),
                        v = go[h] || (go[h] = new RegExp("([\\s\\S]*?)(</" + h + "[^>]*>)", "i")),
                        m = e.replace(v, (function(e, n, r) {
                            return f = r.length, mo(h) || "noscript" === h || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), ko(h, n) && (n = n.slice(1)), t.chars && t.chars(n), ""
                        }));
                    p += e.length - m.length, e = m, a(h, p - f, p)
                } else {
                    var g = e.indexOf("<");
                    if (0 === g) {
                        if (ho.test(e)) {
                            var b = e.indexOf("--\x3e");
                            if (0 <= b) {
                                t.shouldKeepComment && t.comment(e.substring(4, b), p, p + b + 3), n(b + 3);
                                continue
                            }
                        }
                        if (vo.test(e)) {
                            var x = e.indexOf("]>");
                            if (0 <= x) {
                                n(x + 2);
                                continue
                            }
                        }
                        var y = e.match(fo);
                        if (y) {
                            n(y[0].length);
                            continue
                        }
                        var w = e.match(po);
                        if (w) {
                            var k = p;
                            n(w[0].length), a(w[1], k, p);
                            continue
                        }
                        var _ = r();
                        if (_) {
                            i(_), ko(_.tagName, e) && n(1);
                            continue
                        }
                    }
                    var O = void 0,
                        S = void 0,
                        C = void 0;
                    if (0 <= g) {
                        for (S = e.slice(g); !(po.test(S) || lo.test(S) || ho.test(S) || vo.test(S) || (C = S.indexOf("<", 1), 0 > C));) g += C, S = e.slice(g);
                        O = e.substring(0, g)
                    }
                    0 > g && (O = e), O && n(O.length), t.chars && O && t.chars(O, p - O.length, p)
                }
                if (e === o) {
                    t.chars && t.chars(e);
                    break
                }
            }
            a()
        }(e, {
            warn: Ha,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function(e, r, i) {
                var c = o && o.ns || Ya(e);
                Ir && "svg" === c && (r = function(e) {
                    for (var t, n = [], r = 0; r < e.length; r++) t = e[r], No.test(t.name) || (t.name = t.name.replace(Ro, ""), n.push(t));
                    return n
                }(r));
                var d = Dn(e, r, o);
                c && (d.ns = c),
                    function(e) {
                        return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type)
                    }(d) && !Hr() && (d.forbidden = !0);
                for (var p = 0; p < Wa.length; p++) d = Wa[p](d, t) || d;
                l || (function(e) {
                    null != Mt(e, "v-pre") && (e.pre = !0)
                }(d), d.pre && (l = !0)), qa(d.tag) && (u = !0), l ? function(e) {
                    var t = e.attrsList,
                        n = t.length;
                    if (n)
                        for (var r = e.attrs = Array(n), i = 0; i < n; i++) r[i] = {
                            name: t[i].name,
                            value: JSON.stringify(t[i].value)
                        }, null != t[i].start && (r[i].start = t[i].start, r[i].end = t[i].end);
                    else e.pre || (e.plain = !0)
                }(d) : !d.processed && ($n(d), function(e) {
                    var t = Mt(e, "v-if");
                    if (t) e.if = t, Mn(e, {
                        exp: t,
                        block: e
                    });
                    else {
                        null != Mt(e, "v-else") && (e.else = !0);
                        var n = Mt(e, "v-else-if");
                        n && (e.elseif = n)
                    }
                }(d), function(e) {
                    null != Mt(e, "v-once") && (e.once = !0)
                }(d)), a || (a = d), i ? n(d) : (o = d, s.push(d))
            },
            end: function() {
                var e = s[s.length - 1];
                s.length -= 1, o = s[s.length - 1], n(e)
            },
            chars: function(e) {
                if (o && (!Ir || "textarea" !== o.tag || o.attrsMap.placeholder !== e)) {
                    var t, n, r = o.children;
                    if (e = u || e.trim() ? function(e) {
                            return "script" === e.tag || "style" === e.tag
                        }(o) ? e : Mo(e) : r.length ? d ? "condense" === d && Ao.test(e) ? "" : " " : c ? " " : "" : "") u || "condense" !== d || (e = e.replace($o, " ")), !l && " " !== e && (t = function(e, t) {
                        var n = t ? to(t) : Za;
                        if (n.test(e)) {
                            for (var r, i, a, o = [], s = [], c = n.lastIndex = 0; r = n.exec(e);) {
                                (i = r.index) > c && (s.push(a = e.slice(c, i)), o.push(JSON.stringify(a)));
                                var d = Ot(r[1].trim());
                                o.push("_s(" + d + ")"), s.push({
                                    "@binding": d
                                }), c = i + r[0].length
                            }
                            return c < e.length && (s.push(a = e.slice(c)), o.push(JSON.stringify(a))), {
                                expression: o.join("+"),
                                tokens: s
                            }
                        }
                    }(e, Va)) ? n = {
                        type: 2,
                        expression: t.expression,
                        tokens: t.tokens,
                        text: e
                    } : (" " !== e || !r.length || " " !== r[r.length - 1].text) && (n = {
                        type: 3,
                        text: e
                    }), n && r.push(n)
                }
            },
            comment: function(e) {
                o && o.children.push({
                    type: 3,
                    text: e,
                    isComment: !0
                })
            }
        }), a
    }

    function An(e, t) {
        (function(e) {
            var t = $t(e, "key");
            t && (e.key = t)
        })(e), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length,
            function(e) {
                var t = $t(e, "ref");
                t && (e.ref = t, e.refInFor = function(e) {
                    for (var t = e; t;) {
                        if (void 0 !== t.for) return !0;
                        t = t.parent
                    }
                    return !1
                }(e))
            }(e),
            function(e) {
                var t;
                "template" === e.tag ? (t = Mt(e, "scope"), e.slotScope = t || Mt(e, "slot-scope")) : (t = Mt(e, "slot-scope")) && (e.slotScope = t);
                var n = $t(e, "slot");
                if (n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" !== e.tag && !e.slotScope && Et(e, "slot", n, function(e, t) {
                        return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t]
                    }(e, "slot"))), "template" === e.tag) {
                    var r = Lt(e, Io);
                    if (r) {
                        var i = Ln(r),
                            a = i.name,
                            o = i.dynamic;
                        e.slotTarget = a, e.slotTargetDynamic = o, e.slotScope = r.value || Lo
                    }
                } else {
                    var s = Lt(e, Io);
                    if (s) {
                        var c = e.scopedSlots || (e.scopedSlots = {}),
                            d = Ln(s),
                            l = d.name,
                            u = d.dynamic,
                            p = c[l] = Dn("template", [], e);
                        p.slotTarget = l, p.slotTargetDynamic = u, p.children = e.children.filter((function(e) {
                            if (!e.slotScope) return e.parent = p, !0
                        })), p.slotScope = s.value || Lo, e.children = [], e.plain = !1
                    }
                }
            }(e),
            function(e) {
                "slot" === e.tag && (e.slotName = $t(e, "name"))
            }(e),
            function(e) {
                var t;
                (t = $t(e, "is")) && (e.component = t), null != Mt(e, "inline-template") && (e.inlineTemplate = !0)
            }(e);
        for (var n = 0; n < Ba.length; n++) e = Ba[n](e, t) || e;
        return function(e) {
            var t, n, r, i, a, o, s, c, d = e.attrsList;
            for (t = 0, n = d.length; t < n; t++)
                if (r = i = d[t].name, a = d[t].value, Oo.test(r))
                    if (e.hasBindings = !0, (o = Nn(r.replace(Oo, ""))) && (r = r.replace(Do, "")), To.test(r)) r = r.replace(To, ""), a = Ot(a), (c = jo.test(r)) && (r = r.slice(1, -1)), o && (o.prop && !c && "innerHtml" === (r = hr(r)) && (r = "innerHTML"), o.camel && !c && (r = hr(r)), o.sync && (s = zt(a, "$event"), c ? At(e, '"update:"+(' + r + ")", s, null, !1, 0, d[t], !0) : (At(e, "update:" + hr(r), s, null, !1, 0, d[t]), gr(r) !== hr(r) && At(e, "update:" + gr(r), s, null, !1, 0, d[t])))), o && o.prop || !e.component && Ka(e.tag, e.attrsMap.type, r) ? jt(e, r, a, d[t], c) : Et(e, r, a, d[t], c);
                    else if (_o.test(r)) r = r.replace(_o, ""), (c = jo.test(r)) && (r = r.slice(1, -1)), At(e, r, a, o, !1, 0, d[t], c);
            else {
                var l = (r = r.replace(Oo, "")).match(Eo),
                    u = l && l[1];
                c = !1, u && (r = r.slice(0, -(u.length + 1)), jo.test(u) && (u = u.slice(1, -1), c = !0)), Dt(e, r, i, a, u, c, o, d[t])
            } else Et(e, r, JSON.stringify(a), d[t]), !e.component && "muted" === r && Ka(e.tag, e.attrsMap.type, r) && jt(e, r, "true", d[t])
        }(e), e
    }

    function $n(e) {
        var t;
        if (t = Mt(e, "v-for")) {
            var n = function(e) {
                var t = e.match(So);
                if (t) {
                    var n = {
                            for: t[2].trim()
                        },
                        r = t[1].trim().replace(Po, ""),
                        i = r.match(Co);
                    return i ? (n.alias = r.replace(Co, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r, n
                }
            }(t);
            !n || g(e, n)
        }
    }

    function Mn(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t)
    }

    function Ln(e) {
        var t = e.name.replace(Io, "");
        return t || "#" !== e.name[0] && (t = "default"), jo.test(t) ? {
            name: t.slice(1, -1),
            dynamic: !0
        } : {
            name: '"' + t + '"',
            dynamic: !1
        }
    }

    function Nn(e) {
        var t = e.match(Do);
        if (t) {
            var n = {};
            return t.forEach((function(e) {
                n[e.slice(1)] = !0
            })), n
        }
    }

    function Rn(e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n].name] = e[n].value;
        return t
    }

    function zn(e) {
        return Dn(e.tag, e.attrsList.slice(), e.parent)
    }

    function Fn(e, t) {
        e && (Xa = Uo(t.staticKeys || ""), Ja = t.isReservedTag || xr, function e(t) {
            if (t.static = function(e) {
                    return !(2 === e.type || 3 !== e.type && !e.pre && (e.hasBindings || e.if || e.for || lr(e.tag) || !Ja(e.tag) || function(e) {
                        for (; e.parent;) {
                            if ("template" !== (e = e.parent).tag) return !1;
                            if (e.for) return !0
                        }
                        return !1
                    }(e) || !Object.keys(e).every(Xa)))
                }(t), 1 === t.type) {
                if (!Ja(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;
                for (var n, r = 0, i = t.children.length; r < i; r++) n = t.children[r], e(n), n.static || (t.static = !1);
                if (t.ifConditions)
                    for (var a, o = 1, s = t.ifConditions.length; o < s; o++) a = t.ifConditions[o].block, e(a), a.static || (t.static = !1)
            }
        }(e), function e(t, n) {
            if (1 === t.type) {
                if ((t.static || t.once) && (t.staticInFor = n), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void(t.staticRoot = !0);
                if (t.staticRoot = !1, t.children)
                    for (var r = 0, i = t.children.length; r < i; r++) e(t.children[r], n || !!t.for);
                if (t.ifConditions)
                    for (var a = 1, o = t.ifConditions.length; a < o; a++) e(t.ifConditions[a].block, n)
            }
        }(e, !1))
    }

    function Un(e, t) {
        var n = t ? "nativeOn:" : "on:",
            r = "",
            i = "";
        for (var a in e) {
            var o = Hn(e[a]);
            e[a] && e[a].dynamic ? i += a + "," + o + "," : r += '"' + a + '":' + o + ","
        }
        return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r
    }

    function Hn(e) {
        if (!e) return "function(){}";
        if (Array.isArray(e)) return "[" + e.map((function(e) {
            return Hn(e)
        })).join(",") + "]";
        var t = Bo.test(e.value),
            n = Ho.test(e.value),
            r = Bo.test(e.value.replace(Vo, ""));
        if (!e.modifiers) return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}";
        var i = "",
            a = "",
            o = [];
        for (var s in e.modifiers)
            if (Ko[s]) a += Ko[s], Wo[s] && o.push(s);
            else if ("exact" == s) {
            var c = e.modifiers;
            a += qo(["ctrl", "shift", "alt", "meta"].filter((function(e) {
                return !c[e]
            })).map((function(e) {
                return "$event." + e + "Key"
            })).join("||"))
        } else o.push(s);
        return o.length && (i += function(e) {
            return "if(!$event.type.indexOf('key')&&" + e.map(Vn).join("&&") + ")return null;"
        }(o)), a && (i += a), "function($event){" + i + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}"
    }

    function Vn(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==" + t;
        var n = Wo[e],
            r = Go[e];
        return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
    }

    function Bn(e, t) {
        var n = new Xo(t);
        return {
            render: "with(this){return " + (e ? Wn(e, n) : '_c("div")') + "}",
            staticRenderFns: n.staticRenderFns
        }
    }

    function Wn(e, t) {
        if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Gn(e, t);
        if (e.once && !e.onceProcessed) return qn(e, t);
        if (e.for && !e.forProcessed) return Yn(e, t);
        if (e.if && !e.ifProcessed) return Kn(e, t);
        if ("template" === e.tag && !e.slotTarget && !t.pre) return Zn(e, t) || "void 0";
        if ("slot" === e.tag) return function(e, t) {
            var n = e.slotName || '"default"',
                r = Zn(e, t),
                i = "_t(" + n + (r ? "," + r : ""),
                a = e.attrs || e.dynamicAttrs ? nr((e.attrs || []).concat(e.dynamicAttrs || []).map((function(e) {
                    return {
                        name: hr(e.name),
                        value: e.value,
                        dynamic: e.dynamic
                    }
                }))) : null,
                o = e.attrsMap["v-bind"];
            return (a || o) && !r && (i += ",null"), a && (i += "," + a), o && (i += (a ? "" : ",null") + "," + o), i + ")"
        }(e, t);
        var n;
        if (e.component) n = function(e, t, n) {
            var r = t.inlineTemplate ? null : Zn(t, n, !0);
            return "_c(" + e + "," + Xn(t, n) + (r ? "," + r : "") + ")"
        }(e.component, e, t);
        else {
            var r;
            (!e.plain || e.pre && t.maybeComponent(e)) && (r = Xn(e, t));
            var i = e.inlineTemplate ? null : Zn(e, t, !0);
            n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")"
        }
        for (var a = 0; a < t.transforms.length; a++) n = t.transforms[a](e, n);
        return n
    }

    function Gn(e, t) {
        e.staticProcessed = !0;
        var n = t.pre;
        return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Wn(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
    }

    function qn(e, t) {
        if (e.onceProcessed = !0, e.if && !e.ifProcessed) return Kn(e, t);
        if (e.staticInFor) {
            for (var n = "", r = e.parent; r;) {
                if (r.for) {
                    n = r.key;
                    break
                }
                r = r.parent
            }
            return n ? "_o(" + Wn(e, t) + "," + t.onceId++ + "," + n + ")" : Wn(e, t)
        }
        return Gn(e, t)
    }

    function Kn(e, t, n, r) {
        return e.ifProcessed = !0,
            function e(t, n, r, i) {
                function a(e) {
                    return r ? r(e, n) : e.once ? qn(e, n) : Wn(e, n)
                }
                if (!t.length) return i || "_e()";
                var o = t.shift();
                return o.exp ? "(" + o.exp + ")?" + a(o.block) + ":" + e(t, n, r, i) : "" + a(o.block)
            }(e.ifConditions.slice(), t, n, r)
    }

    function Yn(e, t, n, r) {
        var i = e.for,
            a = e.alias,
            o = e.iterator1 ? "," + e.iterator1 : "",
            s = e.iterator2 ? "," + e.iterator2 : "";
        return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + a + o + s + "){return " + (n || Wn)(e, t) + "})"
    }

    function Xn(e, t) {
        var n = "{",
            r = function(e, t) {
                var n = e.directives;
                if (n) {
                    var r, i, a, o, s = "directives:[",
                        c = !1;
                    for (r = 0, i = n.length; r < i; r++) {
                        a = n[r], o = !0;
                        var d = t.directives[a.name];
                        d && (o = !!d(e, a, t.warn)), o && (c = !0, s += '{name:"' + a.name + '",rawName:"' + a.rawName + '"' + (a.value ? ",value:(" + a.value + "),expression:" + JSON.stringify(a.value) : "") + (a.arg ? ",arg:" + (a.isDynamicArg ? a.arg : '"' + a.arg + '"') : "") + (a.modifiers ? ",modifiers:" + JSON.stringify(a.modifiers) : "") + "},")
                    }
                    if (c) return s.slice(0, -1) + "]"
                }
            }(e, t);
        r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
        for (var i = 0; i < t.dataGenFns.length; i++) n += t.dataGenFns[i](e);
        if (e.attrs && (n += "attrs:" + nr(e.attrs) + ","), e.props && (n += "domProps:" + nr(e.props) + ","), e.events && (n += Un(e.events, !1) + ","), e.nativeEvents && (n += Un(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function(e, t, n) {
                var r = e.for || Object.keys(t).some((function(e) {
                        var n = t[e];
                        return n.slotTargetDynamic || n.if || n.for || Jn(n)
                    })),
                    i = !!e.if;
                if (!r)
                    for (var a = e.parent; a;) {
                        if (a.slotScope && a.slotScope !== Lo || a.for) {
                            r = !0;
                            break
                        }
                        a.if && (i = !0), a = a.parent
                    }
                var o = Object.keys(t).map((function(e) {
                    return Qn(t[e], n)
                })).join(",");
                return "scopedSlots:_u([" + o + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + function(e) {
                    for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
                    return t >>> 0
                }(o) : "") + ")"
            }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
            var a = function(e, t) {
                var n = e.children[0];
                if (n && 1 === n.type) {
                    var r = Bn(n, t.options);
                    return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map((function(e) {
                        return "function(){" + e + "}"
                    })).join(",") + "]}"
                }
            }(e, t);
            a && (n += a + ",")
        }
        return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + nr(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n
    }

    function Jn(e) {
        return !(1 !== e.type) && ("slot" === e.tag || e.children.some(Jn))
    }

    function Qn(e, t) {
        var n = e.attrsMap["slot-scope"];
        if (e.if && !e.ifProcessed && !n) return Kn(e, t, Qn, "null");
        if (e.for && !e.forProcessed) return Yn(e, t, Qn);
        var r = e.slotScope === Lo ? "" : e.slotScope + "",
            i = "function(" + r + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if+")?" + (Zn(e, t) || "undefined") + ":undefined" : Zn(e, t) || "undefined" : Wn(e, t)) + "}",
            a = r ? "" : ",proxy:true";
        return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + a + "}"
    }

    function Zn(e, t, n, r, i) {
        var a = e.children;
        if (a.length) {
            var o = a[0];
            if (1 === a.length && o.for && "template" !== o.tag && "slot" !== o.tag) {
                var s = n ? t.maybeComponent(o) ? ",1" : ",0" : "";
                return "" + (r || Wn)(o, t) + s
            }
            var c = n ? function(e, t) {
                for (var n, r = 0, i = 0; i < e.length; i++)
                    if (1 === (n = e[i]).type) {
                        if (er(n) || n.ifConditions && n.ifConditions.some((function(e) {
                                return er(e.block)
                            }))) {
                            r = 2;
                            break
                        }(t(n) || n.ifConditions && n.ifConditions.some((function(e) {
                            return t(e.block)
                        }))) && (r = 1)
                    } return r
            }(a, t.maybeComponent) : 0;
            return "[" + a.map((function(e) {
                return (i || tr)(e, t)
            })).join(",") + "]" + (c ? "," + c : "")
        }
    }

    function er(e) {
        return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
    }

    function tr(e, t) {
        return 1 === e.type ? Wn(e, t) : 3 === e.type && e.isComment ? function(e) {
            return "_e(" + JSON.stringify(e.text) + ")"
        }(e) : function(e) {
            return "_v(" + (2 === e.type ? e.expression : rr(JSON.stringify(e.text))) + ")"
        }(e)
    }

    function nr(e) {
        for (var t = "", n = "", r = 0; r < e.length; r++) {
            var i = e[r],
                a = rr(i.value);
            i.dynamic ? n += i.name + "," + a + "," : t += '"' + i.name + '":' + a + ","
        }
        return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
    }

    function rr(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }

    function ir(e, t) {
        try {
            return new Function(e)
        } catch (n) {
            return t.push({
                err: n,
                code: e
            }), x
        }
    }

    function ar(e) {
        var t = Object.create(null);
        return function(n, r) {
            (r = g({}, r)).warn, delete r.warn;
            var i = r.delimiters ? r.delimiters + "" + n : n;
            if (t[i]) return t[i];
            var a = e(n, r),
                o = {},
                s = [];
            return o.render = ir(a.render, s), o.staticRenderFns = a.staticRenderFns.map((function(e) {
                return ir(e, s)
            })), t[i] = o
        }
    }

    function or(e) {
        return (Qa = Qa || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', 0 < Qa.innerHTML.indexOf("&#10;")
    }
    var sr = Math.max,
        cr = Object.freeze({}),
        dr = Object.prototype.toString,
        lr = p("slot,component", !0),
        ur = p("key,ref,slot,slot-scope,is"),
        pr = Object.prototype.hasOwnProperty,
        fr = /-(\w)/g,
        hr = v((function(e) {
            return e.replace(fr, (function(e, t) {
                return t ? t.toUpperCase() : ""
            }))
        })),
        vr = v((function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        })),
        mr = /\B([A-Z])/g,
        gr = v((function(e) {
            return e.replace(mr, "-$1").toLowerCase()
        })),
        br = Function.prototype.bind ? function(e, t) {
            return e.bind(t)
        } : function(e, t) {
            function n(n) {
                var r = arguments.length;
                return r ? 1 < r ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
            }
            return n._length = e.length, n
        },
        xr = function() {
            return !1
        },
        yr = function(e) {
            return e
        },
        wr = "data-server-rendered",
        kr = ["component", "directive", "filter"],
        _r = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
        Or = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: xr,
            isReservedAttr: xr,
            isUnknownElement: xr,
            getTagNamespace: x,
            parsePlatformTagName: yr,
            mustUseProp: xr,
            async: !0,
            _lifecycleHooks: _r
        },
        Sr = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/,
        Cr = new RegExp("[^" + Sr.source + ".$_\\d]"),
        Pr = "__proto__" in {},
        jr = "undefined" != typeof window,
        Er = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        Tr = Er && WXEnvironment.platform.toLowerCase(),
        Dr = jr && window.navigator.userAgent.toLowerCase(),
        Ir = Dr && /msie|trident/.test(Dr),
        Ar = Dr && 0 < Dr.indexOf("msie 9.0"),
        $r = Dr && 0 < Dr.indexOf("edge/"),
        Mr = (Dr && Dr.indexOf("android"), Dr && /iphone|ipad|ipod|ios/.test(Dr) || "ios" === Tr),
        Lr = (Dr && /chrome\/\d+/.test(Dr), Dr && /phantomjs/.test(Dr), Dr && Dr.match(/firefox\/(\d+)/)),
        Nr = {}.watch,
        Rr = !1;
    if (jr) try {
        var zr = {};
        Object.defineProperty(zr, "passive", {
            get: function() {
                Rr = !0
            }
        }), window.addEventListener("test-passive", null, zr)
    } catch (t) {}
    var Fr, Ur, Hr = function() {
            return null == Fr && (Fr = !jr && !Er && "undefined" != typeof global && (global.process && "server" === global.process.env.VUE_ENV)), Fr
        },
        Vr = jr && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        Br = "undefined" != typeof Symbol && S(Symbol) && "undefined" != typeof Reflect && S(Reflect.ownKeys);
    Ur = "undefined" != typeof Set && S(Set) ? Set : function() {
        function e() {
            this.set = Object.create(null)
        }
        return e.prototype.has = function(e) {
            return !0 === this.set[e]
        }, e.prototype.add = function(e) {
            this.set[e] = !0
        }, e.prototype.clear = function() {
            this.set = Object.create(null)
        }, e
    }();
    var Wr = x,
        Gr = 0,
        qr = function() {
            this.id = Gr++, this.subs = []
        };
    qr.prototype.addSub = function(e) {
        this.subs.push(e)
    }, qr.prototype.removeSub = function(e) {
        f(this.subs, e)
    }, qr.prototype.depend = function() {
        qr.target && qr.target.addDep(this)
    }, qr.prototype.notify = function() {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update()
    }, qr.target = null;
    var Kr = [],
        Yr = function(e, t, n, r, i, a, o, s) {
            this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = a, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = o, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
        },
        Xr = {
            child: {
                configurable: !0
            }
        };
    Xr.child.get = function() {
        return this.componentInstance
    }, Object.defineProperties(Yr.prototype, Xr);
    var Jr = function(e) {
            void 0 === e && (e = "");
            var t = new Yr;
            return t.text = e, t.isComment = !0, t
        },
        Qr = Array.prototype,
        Zr = Object.create(Qr);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function(e) {
        var t = Qr[e];
        O(Zr, e, (function() {
            for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
            var i, a = t.apply(this, n),
                o = this.__ob__;
            return "push" === e || "unshift" === e ? i = n : "splice" === e && (i = n.slice(2)), i && o.observeArray(i), o.dep.notify(), a
        }))
    }));
    var ei = Object.getOwnPropertyNames(Zr),
        ti = !0,
        ni = function(e) {
            this.value = e, this.dep = new qr, this.vmCount = 0, O(e, "__ob__", this), Array.isArray(e) ? (Pr ? function(e, t) {
                e.__proto__ = t
            }(e, Zr) : function(e, t, n) {
                for (var r, i = 0, a = n.length; i < a; i++) O(e, r = n[i], t[r])
            }(e, Zr, ei), this.observeArray(e)) : this.walk(e)
        };
    ni.prototype.walk = function(e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) I(e, t[n])
    }, ni.prototype.observeArray = function(e) {
        for (var t = 0, n = e.length; t < n; t++) D(e[t])
    };
    var ri = Or.optionMergeStrategies;
    ri.data = function(e, t, n) {
        return n ? N(e, t, n) : t && "function" != typeof t ? e : N(e, t)
    }, _r.forEach((function(e) {
        ri[e] = R
    })), kr.forEach((function(e) {
        ri[e + "s"] = z
    })), ri.watch = function(e, t) {
        if (e === Nr && (e = void 0), t === Nr && (t = void 0), !t) return Object.create(e || null);
        if (!e) return t;
        var n = {};
        for (var r in g(n, e), t) {
            var i = n[r],
                a = t[r];
            i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(a) : Array.isArray(a) ? a : [a]
        }
        return n
    }, ri.props = ri.methods = ri.inject = ri.computed = function(e, t) {
        if (!e) return t;
        var n = Object.create(null);
        return g(n, e), t && g(n, t), n
    }, ri.provide = N;
    var ii, ai = function(e, t) {
            return void 0 === t ? e : t
        },
        oi = !1,
        si = [],
        ci = !1;
    if ("undefined" != typeof Promise && S(Promise)) {
        var di = Promise.resolve();
        ii = function() {
            di.then(X), Mr && setTimeout(x)
        }, oi = !0
    } else if (Ir || "undefined" == typeof MutationObserver || !S(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ii = "undefined" != typeof setImmediate && S(setImmediate) ? function() {
        setImmediate(X)
    } : function() {
        setTimeout(X, 0)
    };
    else {
        var li = 1,
            ui = new MutationObserver(X),
            pi = document.createTextNode(li + "");
        ui.observe(pi, {
            characterData: !0
        }), ii = function() {
            li = (li + 1) % 2, pi.data = li + ""
        }, oi = !0
    }
    var fi = new Ur,
        hi = v((function(e) {
            var t = "&" === e.charAt(0),
                n = "~" === (e = t ? e.slice(1) : e).charAt(0),
                r = "!" === (e = n ? e.slice(1) : e).charAt(0);
            return {
                name: e = r ? e.slice(1) : e,
                once: n,
                capture: r,
                passive: t
            }
        }));
    Se(Ce.prototype);
    var vi, mi = {
            init: function(e, t) {
                if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                    var n = e;
                    mi.prepatch(n, n)
                } else {
                    (e.componentInstance = function(e, t) {
                        var n = {
                                _isComponent: !0,
                                _parentVnode: e,
                                parent: t
                            },
                            i = e.data.inlineTemplate;
                        return r(i) && (n.render = i.render, n.staticRenderFns = i.staticRenderFns), new e.componentOptions.Ctor(n)
                    }(e, wi)).$mount(t ? e.elm : void 0, t)
                }
            },
            prepatch: function(e, t) {
                var n = t.componentOptions;
                ! function(e, t, n, r, i) {
                    var a = r.data.scopedSlots,
                        o = e.$scopedSlots,
                        s = a && !a.$stable || o !== cr && !o.$stable || a && e.$scopedSlots.$key !== a.$key,
                        c = !!(i || e.$options._renderChildren || s);
                    if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i, e.$attrs = r.data.attrs || cr, e.$listeners = n || cr, t && e.$options.props) {
                        T(!1);
                        for (var d = e._props, l = e.$options._propKeys || [], u = 0; u < l.length; u++) {
                            var p = l[u],
                                f = e.$options.props;
                            d[p] = H(p, f, t, e)
                        }
                        T(!0), e.$options.propsData = t
                    }
                    n = n || cr;
                    var h = e.$options._parentListeners;
                    e.$options._parentListeners = n, He(e, n, h), c && (e.$slots = oe(i, r.context), e.$forceUpdate())
                }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children)
            },
            insert: function(e) {
                var t = e.context,
                    n = e.componentInstance;
                n._isMounted || (n._isMounted = !0, Ge(n, "mounted")), e.data.keepAlive && (t._isMounted ? function(e) {
                    e._inactive = !1, _i.push(e)
                }(n) : We(n, !0))
            },
            destroy: function(e) {
                var t = e.componentInstance;
                t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
                    if (!(n && (t._directInactive = !0, Be(t)) || t._inactive)) {
                        t._inactive = !0;
                        for (var r = 0; r < t.$children.length; r++) e(t.$children[r]);
                        Ge(t, "deactivated")
                    }
                }(t, !0) : t.$destroy())
            }
        },
        gi = Object.keys(mi),
        bi = 1,
        xi = 2,
        yi = null,
        wi = null,
        ki = [],
        _i = [],
        Oi = {},
        Si = !1,
        Ci = !1,
        Pi = 0,
        ji = 0,
        Ei = Date.now;
    if (jr && !Ir) {
        var Ti = window.performance;
        Ti && "function" == typeof Ti.now && Ei() > document.createEvent("Event").timeStamp && (Ei = function() {
            return Ti.now()
        })
    }
    var Di = 0,
        Ii = function(e, t, n, r, i) {
            this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++Di, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Ur, this.newDepIds = new Ur, this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function(e) {
                if (!Cr.test(e)) {
                    var t = e.split(".");
                    return function(e) {
                        for (var n = 0; n < t.length; n++) {
                            if (!e) return;
                            e = e[t[n]]
                        }
                        return e
                    }
                }
            }(t), !this.getter && (this.getter = x)), this.value = this.lazy ? void 0 : this.get()
        };
    Ii.prototype.get = function() {
        C(this);
        var e, t = this.vm;
        try {
            e = this.getter.call(t, t)
        } catch (e) {
            if (!this.user) throw e;
            G(e, t, 'getter for watcher "' + this.expression + '"')
        } finally {
            this.deep && Q(e), P(), this.cleanupDeps()
        }
        return e
    }, Ii.prototype.addDep = function(e) {
        var t = e.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), !this.depIds.has(t) && e.addSub(this))
    }, Ii.prototype.cleanupDeps = function() {
        for (var e = this.deps.length; e--;) {
            var t = this.deps[e];
            this.newDepIds.has(t.id) || t.removeSub(this)
        }
        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
    }, Ii.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
            var t = e.id;
            if (null == Oi[t]) {
                if (Oi[t] = !0, Ci) {
                    for (var n = ki.length - 1; n > Pi && ki[n].id > e.id;) n--;
                    ki.splice(n + 1, 0, e)
                } else ki.push(e);
                Si || (Si = !0, J(qe))
            }
        }(this)
    }, Ii.prototype.run = function() {
        if (this.active) {
            var e = this.get();
            if (e !== this.value || o(e) || this.deep) {
                var t = this.value;
                if (this.value = e, this.user) try {
                    this.cb.call(this.vm, e, t)
                } catch (t) {
                    G(t, this.vm, 'callback for watcher "' + this.expression + '"')
                } else this.cb.call(this.vm, e, t)
            }
        }
    }, Ii.prototype.evaluate = function() {
        this.value = this.get(), this.dirty = !1
    }, Ii.prototype.depend = function() {
        for (var e = this.deps.length; e--;) this.deps[e].depend()
    }, Ii.prototype.teardown = function() {
        if (this.active) {
            this.vm._isBeingDestroyed || f(this.vm._watchers, this);
            for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
            this.active = !1
        }
    };
    var Ai = {
            enumerable: !0,
            configurable: !0,
            get: x,
            set: x
        },
        $i = {
            lazy: !0
        },
        Mi = 0;
    (function(e) {
        e.prototype._init = function(e) {
            var t = this;
            t._uid = Mi++, t._isVue = !0, e && e._isComponent ? function(e, t) {
                    var n = e.$options = Object.create(e.constructor.options),
                        r = t._parentVnode;
                    n.parent = t.parent, n._parentVnode = r;
                    var i = r.componentOptions;
                    n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
                }(t, e) : t.$options = F(et(t.constructor), e || {}, t), t._renderProxy = t, t._self = t,
                function(e) {
                    var t = e.$options,
                        n = t.parent;
                    if (n && !t.abstract) {
                        for (; n.$options.abstract && n.$parent;) n = n.$parent;
                        n.$children.push(e)
                    }
                    e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
                }(t),
                function(e) {
                    e._events = Object.create(null), e._hasHookEvent = !1;
                    var t = e.$options._parentListeners;
                    t && He(e, t)
                }(t),
                function(e) {
                    e._vnode = null, e._staticTrees = null;
                    var t = e.$options,
                        n = e.$vnode = t._parentVnode,
                        r = n && n.context;
                    e.$slots = oe(t._renderChildren, r), e.$scopedSlots = cr, e._c = function(t, n, r, i) {
                        return De(e, t, n, r, i, !1)
                    }, e.$createElement = function(t, n, r, i) {
                        return De(e, t, n, r, i, !0)
                    };
                    var i = n && n.data;
                    I(e, "$attrs", i && i.attrs || cr, null, !0), I(e, "$listeners", t._parentListeners || cr, null, !0)
                }(t), Ge(t, "beforeCreate"),
                function(e) {
                    var t = ae(e.$options.inject, e);
                    t && (T(!1), Object.keys(t).forEach((function(n) {
                        I(e, n, t[n])
                    })), T(!0))
                }(t), Ye(t),
                function(e) {
                    var t = e.$options.provide;
                    t && (e._provided = "function" == typeof t ? t.call(e) : t)
                }(t), Ge(t, "created"), t.$options.el && t.$mount(t.$options.el)
        }
    })(tt),
    function(e) {
        var t = {
            get: function() {
                return this._props
            }
        };
        Object.defineProperty(e.prototype, "$data", {
            get: function() {
                return this._data
            }
        }), Object.defineProperty(e.prototype, "$props", t), e.prototype.$set = A, e.prototype.$delete = $, e.prototype.$watch = function(e, t, n) {
            var r = this;
            if (s(t)) return Ze(r, e, t, n);
            (n = n || {}).user = !0;
            var i = new Ii(r, e, t, n);
            if (n.immediate) try {
                t.call(r, i.value)
            } catch (e) {
                G(e, r, 'callback for immediate watcher "' + i.expression + '"')
            }
            return function() {
                i.teardown()
            }
        }
    }(tt),
    function(e) {
        var t = /^hook:/;
        e.prototype.$on = function(e, n) {
            var r = this;
            if (Array.isArray(e))
                for (var i = 0, a = e.length; i < a; i++) r.$on(e[i], n);
            else(r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
            return r
        }, e.prototype.$once = function(e, t) {
            function n() {
                r.$off(e, n), t.apply(r, arguments)
            }
            var r = this;
            return n.fn = t, r.$on(e, n), r
        }, e.prototype.$off = function(e, t) {
            var n = this;
            if (!arguments.length) return n._events = Object.create(null), n;
            if (Array.isArray(e)) {
                for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
                return n
            }
            var a = n._events[e];
            if (!a) return n;
            if (!t) return n._events[e] = null, n;
            for (var o, s = a.length; s--;)
                if ((o = a[s]) === t || o.fn === t) {
                    a.splice(s, 1);
                    break
                } return n
        }, e.prototype.$emit = function(e) {
            var t = this,
                n = t._events[e];
            if (n) {
                n = 1 < n.length ? m(n) : n;
                for (var r = m(arguments, 1), i = 0, a = n.length; i < a; i++) q(n[i], t, r, t, 'event handler for "' + e + '"')
            }
            return t
        }
    }(tt),
    function(e) {
        e.prototype._update = function(e, t) {
            var n = this,
                r = n.$el,
                i = n._vnode,
                a = Ve(n);
            n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), a(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
        }, e.prototype.$forceUpdate = function() {
            this._watcher && this._watcher.update()
        }, e.prototype.$destroy = function() {
            var e = this;
            if (!e._isBeingDestroyed) {
                Ge(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                var t = e.$parent;
                !t || t._isBeingDestroyed || e.$options.abstract || f(t.$children, e), e._watcher && e._watcher.teardown();
                for (var n = e._watchers.length; n--;) e._watchers[n].teardown();
                e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Ge(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
            }
        }
    }(tt),
    function(e) {
        Se(e.prototype), e.prototype.$nextTick = function(e) {
            return J(e, this)
        }, e.prototype._render = function() {
            var e, t = this,
                n = t.$options,
                r = n.render,
                i = n._parentVnode;
            i && (t.$scopedSlots = ce(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;
            try {
                yi = t, e = r.call(t._renderProxy, t.$createElement)
            } catch (r) {
                G(r, t, "render"), e = t._vnode
            } finally {
                yi = null
            }
            return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof Yr || (e = Jr()), e.parent = i, e
        }
    }(tt);
    var Li = [String, RegExp, Array],
        Ni = {
            KeepAlive: {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: Li,
                    exclude: Li,
                    max: [String, Number]
                },
                created: function() {
                    this.cache = Object.create(null), this.keys = []
                },
                destroyed: function() {
                    for (var e in this.cache) ot(this.cache, e, this.keys)
                },
                mounted: function() {
                    var e = this;
                    this.$watch("include", (function(t) {
                        at(e, (function(e) {
                            return it(t, e)
                        }))
                    })), this.$watch("exclude", (function(t) {
                        at(e, (function(e) {
                            return !it(t, e)
                        }))
                    }))
                },
                render: function() {
                    var e = this.$slots.default,
                        t = Re(e),
                        n = t && t.componentOptions;
                    if (n) {
                        var r = rt(n),
                            i = this.include,
                            a = this.exclude;
                        if (i && (!r || !it(i, r)) || a && r && it(a, r)) return t;
                        var o = this.cache,
                            s = this.keys,
                            c = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                        o[c] ? (t.componentInstance = o[c].componentInstance, f(s, c), s.push(c)) : (o[c] = t, s.push(c), this.max && s.length > parseInt(this.max) && ot(o, s[0], s, this._vnode)), t.data.keepAlive = !0
                    }
                    return t || e && e[0]
                }
            }
        };
    (function(e) {
        var t = {
            get: function() {
                return Or
            }
        };
        Object.defineProperty(e, "config", t), e.util = {
                warn: Wr,
                extend: g,
                mergeOptions: F,
                defineReactive: I
            }, e.set = A, e.delete = $, e.nextTick = J, e.observable = function(e) {
                return D(e), e
            }, e.options = Object.create(null), kr.forEach((function(t) {
                e.options[t + "s"] = Object.create(null)
            })), e.options._base = e, g(e.options.components, Ni),
            function(e) {
                e.use = function(e) {
                    var t = this._installedPlugins || (this._installedPlugins = []);
                    if (-1 < t.indexOf(e)) return this;
                    var n = m(arguments, 1);
                    return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this
                }
            }(e),
            function(e) {
                e.mixin = function(e) {
                    return this.options = F(this.options, e), this
                }
            }(e), nt(e),
            function(e) {
                kr.forEach((function(t) {
                    e[t] = function(e, n) {
                        return n ? ("component" === t && s(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                    }
                }))
            }(e)
    })(tt), Object.defineProperty(tt.prototype, "$isServer", {
        get: Hr
    }), Object.defineProperty(tt.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode && this.$vnode.ssrContext
        }
    }), Object.defineProperty(tt, "FunctionalRenderContext", {
        value: Ce
    }), tt.version = "2.6.10";
    var Ri, zi, Fi, Ui, Hi, Vi, Bi, Wi, Gi, qi = p("style,class"),
        Ki = p("input,textarea,option,select,progress"),
        Yi = function(e, t, n) {
            return "value" === n && Ki(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
        },
        Xi = p("contenteditable,draggable,spellcheck"),
        Ji = p("events,caret,typing,plaintext-only"),
        Qi = function(e, t) {
            return ra(t) || "false" === t ? "false" : "contenteditable" === e && Ji(t) ? t : "true"
        },
        Zi = p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
        ea = "http://www.w3.org/1999/xlink",
        ta = function(e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
        },
        na = function(e) {
            return ta(e) ? e.slice(6, e.length) : ""
        },
        ra = function(e) {
            return null == e || !1 === e
        },
        ia = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        },
        aa = p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
        oa = p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
        sa = function(e) {
            return aa(e) || oa(e)
        },
        ca = Object.create(null),
        da = p("text,number,password,search,email,tel,url"),
        la = Object.freeze({
            createElement: function(e, t) {
                var n = document.createElement(e);
                return "select" === e ? (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n) : n
            },
            createElementNS: function(e, t) {
                return document.createElementNS(ia[e], t)
            },
            createTextNode: function(e) {
                return document.createTextNode(e)
            },
            createComment: function(e) {
                return document.createComment(e)
            },
            insertBefore: function(e, t, n) {
                e.insertBefore(t, n)
            },
            removeChild: function(e, t) {
                e.removeChild(t)
            },
            appendChild: function(e, t) {
                e.appendChild(t)
            },
            parentNode: function(e) {
                return e.parentNode
            },
            nextSibling: function(e) {
                return e.nextSibling
            },
            tagName: function(e) {
                return e.tagName
            },
            setTextContent: function(e, t) {
                e.textContent = t
            },
            setStyleScope: function(e, t) {
                e.setAttribute(t, "")
            }
        }),
        ua = new Yr("", {}, []),
        pa = ["create", "activate", "update", "remove", "destroy"],
        fa = Object.create(null),
        ha = /[\w).+\-_$\]]/,
        va = "__r",
        ma = "__c",
        ga = oi && !(Lr && 53 >= +Lr[1]),
        ba = v((function(e) {
            var t = {},
                n = /:(.+)/;
            return e.split(/;(?![^(]*\))/g).forEach((function(e) {
                if (e) {
                    var r = e.split(n);
                    1 < r.length && (t[r[0].trim()] = r[1].trim())
                }
            })), t
        })),
        xa = /^--/,
        ya = /\s*!important$/,
        wa = function(e, t, n) {
            if (xa.test(t)) e.style.setProperty(t, n);
            else if (ya.test(n)) e.style.setProperty(gr(t), n.replace(ya, ""), "important");
            else {
                var r = _a(t);
                if (Array.isArray(n))
                    for (var i = 0, a = n.length; i < a; i++) e.style[r] = n[i];
                else e.style[r] = n
            }
        },
        ka = ["Webkit", "Moz", "ms"],
        _a = v((function(e) {
            if (Gi = Gi || document.createElement("div").style, "filter" !== (e = hr(e)) && e in Gi) return e;
            for (var t, n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < ka.length; r++)
                if ((t = ka[r] + n) in Gi) return t
        })),
        Oa = /\s+/,
        Sa = v((function(e) {
            return {
                enterClass: e + "-enter",
                enterToClass: e + "-enter-to",
                enterActiveClass: e + "-enter-active",
                leaveClass: e + "-leave",
                leaveToClass: e + "-leave-to",
                leaveActiveClass: e + "-leave-active"
            }
        })),
        Ca = jr && !Ar,
        Pa = "transition",
        ja = "animation",
        Ea = "transition",
        Ta = "transitionend",
        Da = "animation",
        Ia = "animationend";
    Ca && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ea = "WebkitTransition", Ta = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Da = "WebkitAnimation", Ia = "webkitAnimationEnd"));
    var Aa = jr ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
            return e()
        },
        $a = /\b(transform|all)(,|$)/,
        Ma = function(e) {
            function t(e) {
                var t = j.parentNode(e);
                r(t) && j.removeChild(t, e)
            }

            function o(e, t, n, a, o, c, u) {
                if (r(e.elm) && r(c) && (e = c[u] = E(e)), e.isRootInsert = !o, !s(e, t, n, a)) {
                    var p = e.data,
                        v = e.children,
                        m = e.tag;
                    r(m) ? (e.elm = e.ns ? j.createElementNS(e.ns, m) : j.createElement(m, e), h(e), l(e, v, t), r(p) && f(e, t), d(n, e.elm, a)) : i(e.isComment) ? (e.elm = j.createComment(e.text), d(n, e.elm, a)) : (e.elm = j.createTextNode(e.text), d(n, e.elm, a))
                }
            }

            function s(e, t, n, a) {
                var o = e.data;
                if (r(o)) {
                    var s = r(e.componentInstance) && o.keepAlive;
                    if (r(o = o.hook) && r(o = o.init) && o(e, !1), r(e.componentInstance)) return c(e, t), d(n, e.elm, a), i(s) && function(e, t, n, i) {
                        for (var a, o = e; o.componentInstance;)
                            if (o = o.componentInstance._vnode, r(a = o.data) && r(a = a.transition)) {
                                for (a = 0; a < C.activate.length; ++a) C.activate[a](ua, o);
                                t.push(o);
                                break
                            } d(n, e.elm, i)
                    }(e, t, n, a), !0
                }
            }

            function c(e, t) {
                r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, u(e) ? (f(e, t), h(e)) : (ft(e), t.push(e))
            }

            function d(e, t, n) {
                r(e) && (r(n) ? j.parentNode(n) === e && j.insertBefore(e, t, n) : j.appendChild(e, t))
            }

            function l(e, t, n) {
                if (Array.isArray(t))
                    for (var r = 0; r < t.length; ++r) o(t[r], n, e.elm, null, !0, t, r);
                else a(e.text) && j.appendChild(e.elm, j.createTextNode(e.text + ""))
            }

            function u(e) {
                for (; e.componentInstance;) e = e.componentInstance._vnode;
                return r(e.tag)
            }

            function f(e, t) {
                for (var n = 0; n < C.create.length; ++n) C.create[n](ua, e);
                r(O = e.data.hook) && (r(O.create) && O.create(ua, e), r(O.insert) && t.push(e))
            }

            function h(e) {
                var t;
                if (r(t = e.fnScopeId)) j.setStyleScope(e.elm, t);
                else
                    for (var n = e; n;) r(t = n.context) && r(t = t.$options._scopeId) && j.setStyleScope(e.elm, t), n = n.parent;
                r(t = wi) && t !== e.context && t !== e.fnContext && r(t = t.$options._scopeId) && j.setStyleScope(e.elm, t)
            }

            function v(e, t, n, r, i, a) {
                for (; r <= i; ++r) o(n[r], a, e, t, !1, n, r)
            }

            function m(e) {
                var t, n, i = e.data;
                if (r(i))
                    for (r(t = i.hook) && r(t = t.destroy) && t(e), t = 0; t < C.destroy.length; ++t) C.destroy[t](e);
                if (r(t = e.children))
                    for (n = 0; n < e.children.length; ++n) m(e.children[n])
            }

            function g(e, n, i, a) {
                for (; i <= a; ++i) {
                    var o = n[i];
                    r(o) && (r(o.tag) ? (b(o), m(o)) : t(o.elm))
                }
            }

            function b(e, n) {
                if (r(n) || r(e.data)) {
                    var i, a = C.remove.length + 1;
                    for (r(n) ? n.listeners += a : n = function(e, n) {
                            function r() {
                                0 == --r.listeners && t(e)
                            }
                            return r.listeners = n, r
                        }(e.elm, a), r(i = e.componentInstance) && r(i = i._vnode) && r(i.data) && b(i, n), i = 0; i < C.remove.length; ++i) C.remove[i](e, n);
                    r(i = e.data.hook) && r(i = i.remove) ? i(e, n) : n()
                } else t(e.elm)
            }

            function x(e, t, i, a, s) {
                for (var c, d, l, u = 0, p = 0, f = t.length - 1, h = t[0], m = t[f], b = i.length - 1, x = i[0], k = i[b], _ = !s; u <= f && p <= b;) n(h) ? h = t[++u] : n(m) ? m = t[--f] : ht(h, x) ? (w(h, x, a, i, p), h = t[++u], x = i[++p]) : ht(m, k) ? (w(m, k, a, i, b), m = t[--f], k = i[--b]) : ht(h, k) ? (w(h, k, a, i, b), _ && j.insertBefore(e, h.elm, j.nextSibling(m.elm)), h = t[++u], k = i[--b]) : ht(m, x) ? (w(m, x, a, i, p), _ && j.insertBefore(e, m.elm, h.elm), m = t[--f], x = i[++p]) : (n(c) && (c = vt(t, u, f)), n(d = r(x.key) ? c[x.key] : y(x, t, u, f)) ? o(x, a, e, h.elm, !1, i, p) : ht(l = t[d], x) ? (w(l, x, a, i, p), t[d] = void 0, _ && j.insertBefore(e, l.elm, h.elm)) : o(x, a, e, h.elm, !1, i, p), x = i[++p]);
                u > f ? v(e, n(i[b + 1]) ? null : i[b + 1].elm, i, p, b, a) : p > b && g(0, t, u, f)
            }

            function y(e, t, n, i) {
                for (var a, o = n; o < i; o++)
                    if (r(a = t[o]) && ht(e, a)) return o
            }

            function w(e, t, a, o, s, c) {
                if (e !== t) {
                    r(t.elm) && r(o) && (t = o[s] = E(t));
                    var d = t.elm = e.elm;
                    if (i(e.isAsyncPlaceholder)) return void(r(t.asyncFactory.resolved) ? _(e.elm, t, a) : t.isAsyncPlaceholder = !0);
                    if (i(t.isStatic) && i(e.isStatic) && t.key === e.key && (i(t.isCloned) || i(t.isOnce))) return void(t.componentInstance = e.componentInstance);
                    var l, p = t.data;
                    r(p) && r(l = p.hook) && r(l = l.prepatch) && l(e, t);
                    var f = e.children,
                        h = t.children;
                    if (r(p) && u(t)) {
                        for (l = 0; l < C.update.length; ++l) C.update[l](e, t);
                        r(l = p.hook) && r(l = l.update) && l(e, t)
                    }
                    n(t.text) ? r(f) && r(h) ? f !== h && x(d, f, h, a, c) : r(h) ? (r(e.text) && j.setTextContent(d, ""), v(d, null, h, 0, h.length - 1, a)) : r(f) ? g(0, f, 0, f.length - 1) : r(e.text) && j.setTextContent(d, "") : e.text !== t.text && j.setTextContent(d, t.text), r(p) && r(l = p.hook) && r(l = l.postpatch) && l(e, t)
                }
            }

            function k(e, t, n) {
                if (i(n) && r(e.parent)) e.parent.data.pendingInsert = t;
                else
                    for (var a = 0; a < t.length; ++a) t[a].data.hook.insert(t[a])
            }

            function _(e, t, n, a) {
                var o, s = t.tag,
                    d = t.data,
                    u = t.children;
                if (a = a || d && d.pre, t.elm = e, i(t.isComment) && r(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
                if (r(d) && (r(o = d.hook) && r(o = o.init) && o(t, !0), r(o = t.componentInstance))) return c(t, n), !0;
                if (r(s)) {
                    if (r(u))
                        if (e.hasChildNodes())
                            if (r(o = d) && r(o = o.domProps) && r(o = o.innerHTML)) {
                                if (o !== e.innerHTML) return !1
                            } else {
                                for (var p = !0, h = e.firstChild, v = 0; v < u.length; v++) {
                                    if (!h || !_(h, u[v], n, a)) {
                                        p = !1;
                                        break
                                    }
                                    h = h.nextSibling
                                }
                                if (!p || h) return !1
                            }
                    else l(t, u, n);
                    if (r(d)) {
                        var m = !1;
                        for (var g in d)
                            if (!T(g)) {
                                m = !0, f(t, n);
                                break
                            }! m && d.class && Q(d.class)
                    }
                } else e.data !== t.text && (e.data = t.text);
                return !0
            }
            var O, S, C = {},
                P = e.modules,
                j = e.nodeOps;
            for (O = 0; O < pa.length; ++O)
                for (C[pa[O]] = [], S = 0; S < P.length; ++S) r(P[S][pa[O]]) && C[pa[O]].push(P[S][pa[O]]);
            var T = p("attrs,class,staticClass,staticStyle,key");
            return function(e, t, a, s) {
                if (!n(t)) {
                    var c = !1,
                        d = [];
                    if (n(e)) c = !0, o(t, d);
                    else {
                        var l = r(e.nodeType);
                        if (!l && ht(e, t)) w(e, t, d, null, null, s);
                        else {
                            if (l) {
                                if (1 === e.nodeType && e.hasAttribute(wr) && (e.removeAttribute(wr), a = !0), i(a) && _(e, t, d)) return k(t, d, !0), e;
                                e = function(e) {
                                    return new Yr(j.tagName(e).toLowerCase(), {}, [], void 0, e)
                                }(e)
                            }
                            var p = e.elm,
                                f = j.parentNode(p);
                            if (o(t, d, p._leaveCb ? null : f, j.nextSibling(p)), r(t.parent))
                                for (var h = t.parent, v = u(t); h;) {
                                    for (var b = 0; b < C.destroy.length; ++b) C.destroy[b](h);
                                    if (h.elm = t.elm, v) {
                                        for (var x = 0; x < C.create.length; ++x) C.create[x](ua, h);
                                        var y = h.data.hook.insert;
                                        if (y.merged)
                                            for (var O = 1; O < y.fns.length; O++) y.fns[O]()
                                    } else ft(h);
                                    h = h.parent
                                }
                            r(f) ? g(0, [e], 0, 0) : r(e.tag) && m(e)
                        }
                    }
                    return k(t, d, c), t.elm
                }
                r(e) && m(e)
            }
        }({
            nodeOps: la,
            modules: [{
                create: yt,
                update: yt
            }, {
                create: _t,
                update: _t
            }, {
                create: Kt,
                update: Kt
            }, {
                create: Yt,
                update: Yt
            }, {
                create: Zt,
                update: Zt
            }, jr ? {
                create: vn,
                activate: vn,
                remove: function(e, t) {
                    !0 === e.data.show ? t() : pn(e, t)
                }
            } : {}].concat([{
                create: function(e, t) {
                    ft(t)
                },
                update: function(e, t) {
                    e.data.ref !== t.data.ref && (ft(e, !0), ft(t))
                },
                destroy: function(e) {
                    ft(e, !0)
                }
            }, {
                create: mt,
                update: mt,
                destroy: function(e) {
                    mt(e, ua)
                }
            }])
        });
    Ar && document.addEventListener("selectionchange", (function() {
        var e = document.activeElement;
        e && e.vmodel && kn(e, "input")
    }));
    var La = {
            inserted: function(e, t, n, r) {
                "select" === n.tag ? (r.elm && !r.elm._vOptions ? te(n, "postpatch", (function() {
                    La.componentUpdated(e, t, n)
                })) : mn(e, t, n.context), e._vOptions = [].map.call(e.options, xn)) : ("textarea" === n.tag || da(e.type)) && (e._vModifiers = t.modifiers, !t.modifiers.lazy && (e.addEventListener("compositionstart", yn), e.addEventListener("compositionend", wn), e.addEventListener("change", wn), Ar && (e.vmodel = !0)))
            },
            componentUpdated: function(e, t, n) {
                if ("select" === n.tag) {
                    mn(e, t, n.context);
                    var r = e._vOptions,
                        i = e._vOptions = [].map.call(e.options, xn);
                    if (i.some((function(e, t) {
                            return !y(e, r[t])
                        })))(e.multiple ? t.value.some((function(e) {
                        return bn(e, i)
                    })) : t.value !== t.oldValue && bn(t.value, i)) && kn(e, "change")
                }
            }
        },
        Na = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object]
        },
        Ra = function(e) {
            return e.tag || Ne(e)
        },
        za = function(e) {
            return "show" === e.name
        },
        Fa = g({
            tag: String,
            moveClass: String
        }, Na);
    delete Fa.mode, tt.config.mustUseProp = Yi, tt.config.isReservedTag = sa, tt.config.isReservedAttr = qi, tt.config.getTagNamespace = ut, tt.config.isUnknownElement = function(e) {
        if (!jr) return !0;
        if (sa(e)) return !1;
        if (e = e.toLowerCase(), null != ca[e]) return ca[e];
        var t = document.createElement(e);
        return -1 < e.indexOf("-") ? ca[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : ca[e] = /HTMLUnknownElement/.test(t.toString())
    }, g(tt.options.directives, {
        model: La,
        show: {
            bind: function(e, t, n) {
                var r = t.value,
                    i = (n = _n(n)).data && n.data.transition,
                    a = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                r && i ? (n.data.show = !0, un(n, (function() {
                    e.style.display = a
                }))) : e.style.display = r ? a : "none"
            },
            update: function(e, t, n) {
                var r = t.value;
                !r != !t.oldValue && ((n = _n(n)).data && n.data.transition ? (n.data.show = !0, r ? un(n, (function() {
                    e.style.display = e.__vOriginalDisplay
                })) : pn(n, (function() {
                    e.style.display = "none"
                }))) : e.style.display = r ? e.__vOriginalDisplay : "none")
            },
            unbind: function(e, t, n, r, i) {
                i || (e.style.display = e.__vOriginalDisplay)
            }
        }
    }), g(tt.options.components, {
        Transition: {
            name: "transition",
            props: Na,
            abstract: !0,
            render: function(e) {
                var t = this,
                    n = this.$slots.default;
                if (n && (n = n.filter(Ra)).length) {
                    var r = this.mode,
                        i = n[0];
                    if (function(e) {
                            for (; e = e.parent;)
                                if (e.data.transition) return !0
                        }(this.$vnode)) return i;
                    var o = On(i);
                    if (!o) return i;
                    if (this._leaving) return Cn(e, i);
                    var s = "__transition-" + this._uid + "-";
                    o.key = null == o.key ? o.isComment ? s + "comment" : s + o.tag : a(o.key) ? 0 === (o.key + "").indexOf(s) ? o.key : s + o.key : o.key;
                    var c = (o.data || (o.data = {})).transition = Sn(this),
                        d = this._vnode,
                        l = On(d);
                    if (o.data.directives && o.data.directives.some(za) && (o.data.show = !0), l && l.data && ! function(e, t) {
                            return t.key === e.key && t.tag === e.tag
                        }(o, l) && !Ne(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                        var u = l.data.transition = g({}, c);
                        if ("out-in" === r) return this._leaving = !0, te(u, "afterLeave", (function() {
                            t._leaving = !1, t.$forceUpdate()
                        })), Cn(e, i);
                        if ("in-out" === r) {
                            if (Ne(o)) return d;
                            var p, f = function() {
                                p()
                            };
                            te(c, "afterEnter", f), te(c, "enterCancelled", f), te(u, "delayLeave", (function(e) {
                                p = e
                            }))
                        }
                    }
                    return i
                }
            }
        },
        TransitionGroup: {
            props: Fa,
            beforeMount: function() {
                var e = this,
                    t = this._update;
                this._update = function(n, r) {
                    var i = Ve(e);
                    e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r)
                }
            },
            render: function(e) {
                for (var t, n = this.tag || this.$vnode.data.tag || "span", r = Object.create(null), i = this.prevChildren = this.children, a = this.$slots.default || [], o = this.children = [], s = Sn(this), c = 0; c < a.length; c++)(t = a[c]).tag && null != t.key && 0 !== (t.key + "").indexOf("__vlist") && (o.push(t), r[t.key] = t, (t.data || (t.data = {})).transition = s);
                if (i) {
                    for (var d, l = [], u = [], p = 0; p < i.length; p++)(d = i[p]).data.transition = s, d.data.pos = d.elm.getBoundingClientRect(), r[d.key] ? l.push(d) : u.push(d);
                    this.kept = e(n, null, l), this.removed = u
                }
                return e(n, null, o)
            },
            updated: function() {
                var e = this.prevChildren,
                    t = this.moveClass || (this.name || "v") + "-move";
                e.length && this.hasMove(e[0].elm, t) && (e.forEach(Pn), e.forEach(jn), e.forEach(En), this._reflow = document.body.offsetHeight, e.forEach((function(e) {
                    if (e.data.moved) {
                        var n = e.elm,
                            r = n.style;
                        an(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Ta, n._moveCb = function e(r) {
                            r && r.target !== n || (!r || /transform$/.test(r.propertyName)) && (n.removeEventListener(Ta, e), n._moveCb = null, on(n, t))
                        })
                    }
                })))
            },
            methods: {
                hasMove: function(e, t) {
                    if (!Ca) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = e.cloneNode();
                    e._transitionClasses && e._transitionClasses.forEach((function(e) {
                        tn(n, e)
                    })), en(n, t), n.style.display = "none", this.$el.appendChild(n);
                    var r = cn(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform
                }
            }
        }
    }), tt.prototype.__patch__ = jr ? Ma : x, tt.prototype.$mount = function(e, t) {
        return function(e, t, n) {
            var r;
            return e.$el = t, e.$options.render || (e.$options.render = Jr), Ge(e, "beforeMount"), r = function() {
                e._update(e._render(), n)
            }, new Ii(e, r, x, {
                before: function() {
                    e._isMounted && !e._isDestroyed && Ge(e, "beforeUpdate")
                }
            }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, Ge(e, "mounted")), e
        }(this, e = e && jr ? pt(e) : void 0, t)
    }, jr && setTimeout((function() {
        Or.devtools && !!Vr && Vr.emit("init", tt)
    }), 0);
    var Ua, Ha, Va, Ba, Wa, Ga, qa, Ka, Ya, Xa, Ja, Qa, Za = /\{\{((?:.|\r?\n)+?)\}\}/g,
        eo = /[-.*+?^${}()|[\]\/\\]/g,
        to = v((function(e) {
            var t = e[0].replace(eo, "\\$&"),
                n = e[1].replace(eo, "\\$&");
            return new RegExp(t + "((?:.|\\n)+?)" + n, "g")
        })),
        no = p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
        ro = p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        io = p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
        ao = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        oo = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        so = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + Sr.source + "]*",
        co = "((?:" + so + "\\:)?" + so + ")",
        lo = new RegExp("^<" + co),
        uo = /^\s*(\/?)>/,
        po = new RegExp("^<\\/" + co + "[^>]*>"),
        fo = /^<!DOCTYPE [^>]+>/i,
        ho = /^<!\--/,
        vo = /^<!\[/,
        mo = p("script,style,textarea", !0),
        go = {},
        bo = {
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&amp;": "&",
            "&#10;": "\n",
            "&#9;": "\t",
            "&#39;": "'"
        },
        xo = /&(?:lt|gt|quot|amp|#39);/g,
        yo = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        wo = p("pre,textarea", !0),
        ko = function(e, t) {
            return e && wo(e) && "\n" === t[0]
        },
        _o = /^@|^v-on:/,
        Oo = /^v-|^@|^:/,
        So = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        Co = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        Po = /^\(|\)$/g,
        jo = /^\[.*\]$/,
        Eo = /:(.*)$/,
        To = /^:|^\.|^v-bind:/,
        Do = /\.[^.\]]+(?=[^\]]*$)/g,
        Io = /^v-slot(:|$)|^#/,
        Ao = /[\r\n]/,
        $o = /\s+/g,
        Mo = v((function(e) {
            return (Ua = Ua || document.createElement("div")).innerHTML = e, Ua.textContent
        })),
        Lo = "_empty_",
        No = /^xmlns:NS\d+/,
        Ro = /^NS\d+:/,
        zo = [{
            staticKeys: ["staticClass"],
            transformNode: function(e, t) {
                t.warn;
                var n = Mt(e, "class");
                n && (e.staticClass = JSON.stringify(n));
                var r = $t(e, "class", !1);
                r && (e.classBinding = r)
            },
            genData: function(e) {
                var t = "";
                return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t
            }
        }, {
            staticKeys: ["staticStyle"],
            transformNode: function(e, t) {
                t.warn;
                var n = Mt(e, "style");
                n && (e.staticStyle = JSON.stringify(ba(n)));
                var r = $t(e, "style", !1);
                r && (e.styleBinding = r)
            },
            genData: function(e) {
                var t = "";
                return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t
            }
        }, {
            preTransformNode: function(e, t) {
                if ("input" === e.tag) {
                    var n, r = e.attrsMap;
                    if (!r["v-model"]) return;
                    if ((r[":type"] || r["v-bind:type"]) && (n = $t(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
                        var i = Mt(e, "v-if", !0),
                            a = i ? "&&(" + i + ")" : "",
                            o = null != Mt(e, "v-else", !0),
                            s = Mt(e, "v-else-if", !0),
                            c = zn(e);
                        $n(c), Tt(c, "type", "checkbox"), An(c, t), c.processed = !0, c.if = "(" + n + ")==='checkbox'" + a, Mn(c, {
                            exp: c.if,
                            block: c
                        });
                        var d = zn(e);
                        Mt(d, "v-for", !0), Tt(d, "type", "radio"), An(d, t), Mn(c, {
                            exp: "(" + n + ")==='radio'" + a,
                            block: d
                        });
                        var l = zn(e);
                        return Mt(l, "v-for", !0), Tt(l, ":type", n), An(l, t), Mn(c, {
                            exp: i,
                            block: l
                        }), o ? c.else = !0 : s && (c.elseif = s), c
                    }
                }
            }
        }],
        Fo = {
            expectHTML: !0,
            modules: zo,
            directives: {
                model: function(e, t, n) {
                    var r = t.value,
                        i = t.modifiers,
                        a = e.tag,
                        o = e.attrsMap.type;
                    if (e.component) return Rt(e, r, i), !1;
                    if ("select" === a) ! function(e, t, n) {
                        var r = "var $$selectedVal = " + ('Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "})") + ";";
                        At(e, "change", r = r + " " + zt(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0)
                    }(e, r, i);
                    else if ("input" === a && "checkbox" === o) ! function(e, t, n) {
                        var r = n && n.number,
                            i = $t(e, "value") || "null",
                            a = $t(e, "true-value") || "true",
                            o = $t(e, "false-value") || "false";
                        jt(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === a ? ":(" + t + ")" : ":_q(" + t + "," + a + ")")), At(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + a + "):(" + o + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + zt(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + zt(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + zt(t, "$$c") + "}", null, !0)
                    }(e, r, i);
                    else if ("input" === a && "radio" === o) ! function(e, t, n) {
                        var r = n && n.number,
                            i = $t(e, "value") || "null";
                        jt(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), At(e, "change", zt(t, i), null, !0)
                    }(e, r, i);
                    else if ("input" === a || "textarea" === a) ! function(e, t, n) {
                        var r = e.attrsMap.type,
                            i = n || {},
                            a = i.lazy,
                            o = i.number,
                            s = i.trim,
                            c = a ? "change" : "range" === r ? va : "input",
                            d = "$event.target.value";
                        s && (d = "$event.target.value.trim()"), o && (d = "_n(" + d + ")");
                        var l = zt(t, d);
                        !a && "range" !== r && (l = "if($event.target.composing)return;" + l), jt(e, "value", "(" + t + ")"), At(e, c, l, null, !0), (s || o) && At(e, "blur", "$forceUpdate()")
                    }(e, r, i);
                    else if (!Or.isReservedTag(a)) return Rt(e, r, i), !1;
                    return !0
                },
                text: function(e, t) {
                    t.value && jt(e, "textContent", "_s(" + t.value + ")", t)
                },
                html: function(e, t) {
                    t.value && jt(e, "innerHTML", "_s(" + t.value + ")", t)
                }
            },
            isPreTag: function(e) {
                return "pre" === e
            },
            isUnaryTag: no,
            mustUseProp: Yi,
            canBeLeftOpenTag: ro,
            isReservedTag: sa,
            getTagNamespace: ut,
            staticKeys: function(e) {
                return e.reduce((function(e, t) {
                    return e.concat(t.staticKeys || [])
                }), []).join(",")
            }(zo)
        },
        Uo = v((function(e) {
            return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""))
        })),
        Ho = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/,
        Vo = /\([^)]*?\);*$/,
        Bo = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        Wo = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            up: 38,
            left: 37,
            right: 39,
            down: 40,
            delete: [8, 46]
        },
        Go = {
            esc: ["Esc", "Escape"],
            tab: "Tab",
            enter: "Enter",
            space: [" ", "Spacebar"],
            up: ["Up", "ArrowUp"],
            left: ["Left", "ArrowLeft"],
            right: ["Right", "ArrowRight"],
            down: ["Down", "ArrowDown"],
            delete: ["Backspace", "Delete", "Del"]
        },
        qo = function(e) {
            return "if(" + e + ")return null;"
        },
        Ko = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: qo("$event.target !== $event.currentTarget"),
            ctrl: qo("!$event.ctrlKey"),
            shift: qo("!$event.shiftKey"),
            alt: qo("!$event.altKey"),
            meta: qo("!$event.metaKey"),
            left: qo("'button' in $event && $event.button !== 0"),
            middle: qo("'button' in $event && $event.button !== 1"),
            right: qo("'button' in $event && $event.button !== 2")
        },
        Yo = {
            on: function(e, t) {
                e.wrapListeners = function(e) {
                    return "_g(" + e + "," + t.value + ")"
                }
            },
            bind: function(e, t) {
                e.wrapData = function(n) {
                    return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
                }
            },
            cloak: x
        },
        Xo = function(e) {
            this.options = e, this.warn = e.warn || Ct, this.transforms = Pt(e.modules, "transformCode"), this.dataGenFns = Pt(e.modules, "genData"), this.directives = g(g({}, Yo), e.directives);
            var t = e.isReservedTag || xr;
            this.maybeComponent = function(e) {
                return !!e.component || !t(e.tag)
            }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1
        },
        Jo = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), new RegExp("\\b" + ["delete", "typeof", "void"].join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"), function(e) {
            function t(t, n) {
                var r = Object.create(e),
                    i = [],
                    a = [];
                if (n)
                    for (var o in n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = g(Object.create(e.directives || null), n.directives)), n) "modules" != o && "directives" != o && (r[o] = n[o]);
                r.warn = function(e, t, n) {
                    (n ? a : i).push(e)
                };
                var s = function(e, t) {
                    var n = In(e.trim(), t);
                    !1 !== t.optimize && Fn(n, t);
                    var r = Bn(n, t);
                    return {
                        ast: n,
                        render: r.render,
                        staticRenderFns: r.staticRenderFns
                    }
                }(t.trim(), r);
                return s.errors = i, s.tips = a, s
            }
            return {
                compile: t,
                compileToFunctions: ar(t)
            }
        }(Fo)),
        Qo = (Jo.compile, Jo.compileToFunctions),
        Zo = !!jr && or(!1),
        es = !!jr && or(!0),
        ts = v((function(e) {
            var t = pt(e);
            return t && t.innerHTML
        })),
        ns = tt.prototype.$mount;
    tt.prototype.$mount = function(e, t) {
        if ((e = e && pt(e)) === document.body || e === document.documentElement) return this;
        var n = this.$options;
        if (!n.render) {
            var r = n.template;
            if (r)
                if ("string" == typeof r) "#" === r.charAt(0) && (r = ts(r));
                else {
                    if (!r.nodeType) return this;
                    r = r.innerHTML
                }
            else e && (r = function(e) {
                if (e.outerHTML) return e.outerHTML;
                var t = document.createElement("div");
                return t.appendChild(e.cloneNode(!0)), t.innerHTML
            }(e));
            if (r) {
                var i = Qo(r, {
                        outputSourceRange: !1,
                        shouldDecodeNewlines: Zo,
                        shouldDecodeNewlinesForHref: es,
                        delimiters: n.delimiters,
                        comments: n.comments
                    }, this),
                    a = i.render,
                    o = i.staticRenderFns;
                n.render = a, n.staticRenderFns = o
            }
        }
        return ns.call(this, e, t)
    }, tt.compile = Qo, t.a = tt
}, function(e, t, n) {
    var r = n(114),
        i = n(115),
        a = n(98),
        o = n(116);
    e.exports = function(e, t) {
        return r(e) || i(e, t) || a(e, t) || o()
    }
}, function(e) {
    e.exports = require("electron")
}, function(e) {
    e.exports = require("got")
}, function(e) {
    e.exports = require("sudo-prompt")
}, function(e) {
    e.exports = require("vuedraggable")
}, function(e) {
    e.exports = require("electron-is-dev")
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = i(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    a = function() {};
                return {
                    s: a,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s = !0,
            c = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return s = e.done, e
            },
            e: function(e) {
                c = !0, o = e
            },
            f: function() {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (c) throw o
                }
            }
        }
    }

    function i(e, t) {
        if (e) {
            if ("string" == typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
        }
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.d(t, "b", (function() {
        return p
    }));
    var o = n(85),
        s = n.n(o),
        c = n(19),
        d = (n.n(c), n(32)),
        l = (n.n(d), n(33)),
        u = (n.n(l), n(6)),
        p = function() {
            var e = [],
                t = Object(d.networkInterfaces)();
            return Object.keys(t).forEach((function(n) {
                t[n].forEach((function(t) {
                    !0 === t.internal || "IPv6" === t.family || e.push({
                        name: n,
                        address: t.address
                    })
                }))
            })), e
        };
    t.a = function() {
        if (Object(u.g)()) {
            var e, t = Object(c.execSync)("netstat -nr | grep default ").toString().split("\n").map((function(e) {
                    return e.split(/\s+/).filter((function(e) {
                        return e
                    }))
                })).filter((function(e) {
                    return 4 === e.length && Object(l.isIPv4)(e[1])
                })),
                n = Object(d.networkInterfaces)();
            if (0 < t.length) {
                var i, a = r(t);
                try {
                    for (a.s(); !(i = a.n()).done;) {
                        var o = i.value[3];
                        if (Object.keys(n).includes(o)) return o
                    }
                } catch (e) {
                    a.e(e)
                } finally {
                    a.f()
                }
            }
            if (Object.keys(n).includes("en0")) return "en0"
        } else if (Object(u.h)()) {
            var p = Object(c.execSync)("route print 0.0.0.0 mask 0.0.0.0").toString().split("\n").map((function(e) {
                    return e.split(/\s+/).filter((function(e) {
                        return e
                    }))
                })).filter((function(e) {
                    return 5 === e.length && e.slice(0, 4).every((function(e) {
                        return Object(l.isIP)(e)
                    })) && NaN !== parseInt(e[4])
                })),
                f = Object(d.networkInterfaces)();
            if (delete f["cfw-tap"], 0 < p.length) {
                var h, v = r(p.sort((function(e, t) {
                    return parseInt(e[4]) - parseInt(t[4])
                })));
                try {
                    var m = function() {
                        for (var e = h.value[3], t = 0, n = Object.keys(f); t < n.length; t++) {
                            var r = n[t];
                            if (f[r].find((function(t) {
                                    return t.address === e
                                }))) return {
                                v: r
                            }
                        }
                    };
                    for (v.s(); !(h = v.n()).done;) {
                        var g = m();
                        if ("object" === s()(g)) return g.v
                    }
                } catch (e) {
                    v.e(e)
                } finally {
                    v.f()
                }
            }
            if (Object.keys(f).includes("以太网")) return "以太网";
            if (Object.keys(f).includes("WLAN")) return "WLAN"
        }
        return null
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return m
    }));
    var r = n(0),
        i = n.n(r),
        a = n(3),
        o = n.n(a),
        s = n(1),
        c = n.n(s),
        d = n(12),
        l = n(6),
        u = n(18),
        p = n.n(u),
        f = n(2),
        h = (n.n(f), n(28)),
        v = n.n(h),
        m = function() {
            var e = c()(i.a.mark((function e() {
                var t, n, r, a, s, c, u, h, m = arguments;
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = 0 < m.length && void 0 !== m[0] ? m[0] : [], Object(l.g)()) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 3:
                            return r = v.a ? Object(f.join)(Object(f.resolve)("./"), "/static/files") : d.a.getters.filesPath, a = (t = {}, o()(t, l.a, "arm64"), o()(t, l.b, "x64"), t)[Object(l.f)()], s = Object(f.join)(r, "darwin", a), e.prev = 6, e.next = 9, p.a.post("http://127.0.0.1:53000/command", {
                                path: Object(f.join)(s, "sysproxy"),
                                args: n
                            });
                        case 9:
                            return c = e.sent, u = c.status, h = c.data, e.abrupt("return", {
                                success: 200 === u,
                                output: h
                            });
                        case 15:
                            e.prev = 15, e.t0 = e.catch(6);
                        case 17:
                            return e.abrupt("return", {
                                success: !1,
                                data: ""
                            });
                        case 18:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [6, 15]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }()
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = i(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    a = function() {};
                return {
                    s: a,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s = !0,
            c = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return s = e.done, e
            },
            e: function(e) {
                c = !0, o = e
            },
            f: function() {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (c) throw o
                }
            }
        }
    }

    function i(e, t) {
        if (e) {
            if ("string" == typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
        }
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function s(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? o(Object(t), !0).forEach((function(n) {
            f()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }
    var c = n(0),
        d = n.n(c),
        l = n(1),
        u = n.n(l),
        p = n(3),
        f = n.n(p),
        h = n(12),
        v = n(18),
        m = n(4),
        g = n.n(m),
        b = n(2),
        x = n.n(b),
        y = n(106),
        w = n(14),
        k = n.n(w),
        _ = n(20),
        O = n.n(_),
        S = n(21),
        C = n.n(S),
        P = n(85),
        j = n.n(P),
        E = n(20),
        T = Symbol(),
        D = Symbol(),
        I = Symbol(),
        A = function(e, t) {
            var n = function(e) {
                var t = [],
                    n = T,
                    r = "",
                    i = !1,
                    a = "";
                e: for (var o, s = 0; s < e.length; s++) {
                    if ("-" === (o = e[s]) && s === e.length - 1) {
                        n = I, t.push(a);
                        break e
                    }
                    if ("(" !== o)
                        if (")" !== o)
                            if (i) a += o;
                            else switch (o) {
                                case ".":
                                    t.push(a), a = "";
                                    break;
                                case "+":
                                    n = D;
                                case "=":
                                    t.push(a), r = e.slice(s + 1);
                                    break e;
                                default:
                                    a += o
                            } else i = !1;
                    else i = !0
                }
                return {
                    path: t,
                    opertation: n,
                    value: r
                }
            }(t);
            ! function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : T,
                    i = e.proxies,
                    a = void 0 === i ? [] : i,
                    o = e["proxy-groups"],
                    s = void 0 === o ? [] : o,
                    c = t.slice(0, -1),
                    d = t[t.length - 1],
                    l = n;
                try {
                    l = JSON.parse(n)
                } catch (t) {}
                var u = E.reduce(c, (function(e, n, r) {
                    var i = e[n];
                    if (void 0 !== i) return i;
                    if (Array.isArray(e)) {
                        var a = e.find((function(e) {
                            return e.name === n
                        }));
                        if (a) return a
                    }
                    if (t.length > r + 1) {
                        var o = t[r + 1];
                        e[n] = 0 <= parseInt(o) ? [] : {}
                    } else e[n] = {};
                    return e[n]
                }), e);
                /(.*)/.test("") && RegExp.$1;
                var p = Array.isArray(u),
                    f = function(e) {
                        if (/^\[\](shuffledProxyNames|proxyNames|groupNames)\|?(.+)$/.test(e)) {
                            var t = RegExp.$1,
                                n = RegExp.$2,
                                r = [];
                            return "proxyNames" === t && (r = a), "groupNames" === t && (r = s), "shuffledProxyNames" === t && (r = E.shuffle(a)), r.map((function(e) {
                                return e.name
                            })).filter((function(e) {
                                return new RegExp(n).test(e)
                            }))
                        }
                        return null
                    }(l);
                switch (r) {
                    case T:
                        if (f) u[d] = f;
                        else {
                            var h = j()(u[d]);
                            u[d] = "number" === h ? 1 * l : "boolean" === h ? "true" === l : l
                        }
                        break;
                    case D:
                        p ? u.splice.apply(u, [d, 0].concat(C()(f || [l]))) : u[d] = f || l;
                        break;
                    case I:
                        p ? u.splice(d, 1) : delete u[d]
                }
            }(e, n.path, n.value, n.opertation)
        },
        $ = n(15);
    n.d(t, "a", (function() {
        return L
    })), n.d(t, "c", (function() {
        return R
    })), n.d(t, "b", (function() {
        return z
    }));
    var M = n(91),
        L = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                n = h.a.state.app.settings.headersText,
                r = {};
            if (n) try {
                var i = k.a.parse(n),
                    a = i.headers,
                    o = void 0 === a ? {} : a;
                r = o
            } catch (t) {}
            return Object(v.get)(e, s(s({
                validateStatus: function() {
                    return !0
                }
            }, t), {}, {
                headers: s({
                    pragma: "no-cache"
                }, r),
                responseType: "text",
                transformResponse: [function(e) {
                    return e
                }]
            }))
        },
        N = function(e) {
            var t = {};
            return /upload=(.+?)(;|$)/.test(e) && (t.upload = parseInt(RegExp.$1.trim())), /download=(.+?)(;|$)/.test(e) && (t.download = parseInt(RegExp.$1.trim())), /total=(.+?)(;|$)/.test(e) && (t.total = parseInt(RegExp.$1.trim())), /expire=(.+?)(;|$)/.test(e) && (t.expire = parseInt(RegExp.$1.trim())), t
        },
        R = function() {
            var e = u()(d.a.mark((function e(t) {
                var n, r, i, a, o, c, l, u, p, f, v, m, b, y, w, k, _, O, S, C, P, j, E, T, D, I, A;
                return d.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.url, r = t.cancelToken, i = void 0 === r ? null : r, e.prev = 1, e.next = 4, L(n, {
                                cancelToken: i
                            });
                        case 4:
                            a = e.sent, o = a.status, c = a.headers, l = void 0 === c ? {} : c, u = a.data, p = "config.yaml", f = (new Date).getTime() + ".yml";
                            try {
                                p = x.a.basename(n)
                            } catch (e) {
                                console.error(e.stack)
                            }
                            if (/([^\/]*?)(?:$|\?)/.test(n) && (p = decodeURIComponent(RegExp.$1.trim())), v = l["profile-update-interval"], m = void 0 === v ? 0 : v, b = l["content-disposition"], y = l["subscription-userinfo"], w = void 0 === y ? "" : y, b && /filename="*(.*?)(?:$|;|")/.test(b) && (p = decodeURIComponent(RegExp.$1.trim())), k = parseInt(m) || 0, _ = h.a.state.app.profilesPath, O = x.a.join(_, f), S = -1, 200 !== o) {
                                e.next = 30;
                                break
                            }
                            return e.next = 22, z(n, u, !0);
                        case 22:
                            return C = e.sent, P = h.a.state.app.profiles.files, -1 < (E = (j = void 0 === P ? [] : P).findIndex((function(e) {
                                return e.url === n
                            }))) ? (T = j[E], D = s({}, T), I = D.time, O = x.a.join(_, I), h.a.commit("CHANGE_PROFILE", {
                                index: E,
                                profile: s(s({}, T), {}, {
                                    subInfo: N(w)
                                })
                            }), S = E) : (A = {
                                time: f,
                                name: p,
                                url: n,
                                selected: [],
                                interval: k,
                                subInfo: N(w)
                            }, h.a.commit("APPEND_PROFILE", {
                                profile: A
                            }), S = j.length), g.a.writeFileSync(O, C), e.abrupt("return", {
                                success: !0,
                                targetIndex: S
                            });
                        case 30:
                            return e.abrupt("return", {
                                success: !1,
                                message: "下载配置文件 (".concat(n, ") 失败, 错误: HTTP 请求状态代码 (").concat(o, ")")
                            });
                        case 31:
                            e.next = 39;
                            break;
                        case 33:
                            if (e.prev = 33, e.t0 = e.catch(1), console.error(e.t0), !e.t0.message) {
                                e.next = 39;
                                break
                            }
                            return e.abrupt("return", {
                                success: !1,
                                message: "下载配置文件 (".concat(n, ") 失败, 错误: ").concat(
                                    // Oh no this might be a shit from Node.js
                                    // IDK for now lets just do the dirty hack(xdd
                                    (e.t0.message == "Network Error") ? "网络错误" :
                                    e.t0.message
                                )
                            });
                        case 39:
                            return e.abrupt("return", {
                                success: !1,
                                message: "unknow error"
                            });
                        case 40:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 33]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        z = function() {
            var e = u()(d.a.mark((function e(t, i) {
                var a, o, c, l, u, p, f, v, m, b, x, w, _, O, S, C, P, j, E, T, D, I, A = arguments;
                return d.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (a = 2 < A.length && void 0 !== A[2] && A[2], e.prev = 1, c = h.a.state.app.profiles.files, l = null !== (o = (void 0 === c ? [] : c).find((function(e) {
                                    return e.url === t
                                }))) && void 0 !== o ? o : {}, u = new y.Console(g.a.createWriteStream(h.a.getters.parserLogPath)), p = {
                                    axios: n(18),
                                    yaml: n(14),
                                    homeDir: h.a.state.app.clashPath,
                                    console: a ? u : console,
                                    notify: function(e) {
                                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                                            n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                                        Object($.c)(e, t, n)
                                    }
                                }, f = h.a.state.app.settings.profileParsersText, v = [], f) try {
                                m = k.a.parse(f), b = m.parsers, v = (void 0 === b ? [] : b) || []
                            } catch (e) {}
                            x = v.filter((function(e) {
                                var n = e.url,
                                    r = e.reg;
                                return n ? n === t : r ? new RegExp(r).test(t) : void 0
                            })), w = i, _ = r(x), e.prev = 12, _.s();
                        case 14:
                            if ((O = _.n()).done) {
                                e.next = 37;
                                break
                            }
                            if (S = O.value, C = S.code, P = S.file, j = S.yaml, !C) {
                                e.next = 22;
                                break
                            }
                            return E = M("'use strict';\n".concat(C)), e.next = 21, E.parse(w, p, l);
                        case 21:
                            w = e.sent;
                        case 22:
                            if (!P) {
                                e.next = 34;
                                break
                            }
                            if (T = g.a.readFileSync(P, "utf-8"), !/\.ya?ml$/.test(P)) {
                                e.next = 29;
                                break
                            }
                            D = k.a.parse(T), w = F(w, D), e.next = 34;
                            break;
                        case 29:
                            if (!/\.js$/.test(P)) {
                                e.next = 34;
                                break
                            }
                            return I = M("'use strict';\n".concat(T), P), e.next = 33, I.parse(w, p, l);
                        case 33:
                            w = e.sent;
                        case 34:
                            j && (w = F(w, j));
                        case 35:
                            e.next = 14;
                            break;
                        case 37:
                            e.next = 42;
                            break;
                        case 39:
                            e.prev = 39, e.t0 = e.catch(12), _.e(e.t0);
                        case 42:
                            return e.prev = 42, _.f(), e.finish(42);
                        case 45:
                            return e.abrupt("return", w);
                        case 48:
                            throw e.prev = 48, e.t1 = e.catch(1), s(s({}, e.t1), {}, {
                                message: "[Parser Error] " + e.t1.message
                            });
                        case 51:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [1, 48],
                    [12, 39, 42, 45]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        F = function(e, t) {
            var n = {},
                i = t["append-rules"],
                a = void 0 === i ? [] : i,
                o = t["prepend-rules"],
                c = void 0 === o ? [] : o,
                d = t["append-proxies"],
                l = void 0 === d ? [] : d,
                u = t["prepend-proxies"],
                p = void 0 === u ? [] : u,
                f = t["append-proxy-groups"],
                h = void 0 === f ? [] : f,
                v = t["prepend-proxy-groups"],
                m = void 0 === v ? [] : v,
                g = t["mix-proxy-providers"],
                b = void 0 === g ? {} : g,
                x = t["mix-rule-providers"],
                y = void 0 === x ? {} : x,
                w = t["mix-object"],
                _ = void 0 === w ? {} : w,
                S = t.commands,
                C = void 0 === S ? [] : S,
                P = t["key-orders"],
                j = void 0 === P ? [] : P,
                E = k.a.parse(e),
                T = O.a.cloneDeep(E),
                D = E.rules,
                I = void 0 === D ? [] : D,
                $ = E.proxies,
                M = void 0 === $ ? [] : $,
                L = E["proxy-groups"],
                N = void 0 === L ? [] : L,
                R = E["proxy-providers"],
                z = void 0 === R ? {} : R,
                F = E["rule-providers"],
                U = void 0 === F ? {} : F;
            (c || a) && (T.rules = c.concat(null != I ? I : []).concat(a)), (p || l) && (T.proxies = p.concat(null != M ? M : []).concat(l)), (m || h) && (T["proxy-groups"] = m.concat(null != N ? N : []).concat(h)), b && (T["proxy-providers"] = s(s({}, z), b)), y && (T["rule-providers"] = s(s({}, U), y));
            var H, V = r(C);
            try {
                for (V.s(); !(H = V.n()).done;) {
                    var B = H.value;
                    A(T, B)
                }
            } catch (e) {
                V.e(e)
            } finally {
                V.f()
            }
            return 0 < j.length && (n.sortMapEntries = function(e, t) {
                var n = e.key,
                    r = t.key,
                    i = j.findIndex((function(e) {
                        return e === n.value
                    })),
                    a = j.findIndex((function(e) {
                        return e === r.value
                    }));
                return (-1 === i ? 1 / 0 : i) - (-1 === a ? 1 / 0 : a)
            }), k.a.stringify(s(s({}, T), _), n)
        }
}, function(e) {
    e.exports = require("os")
}, function(e) {
    e.exports = require("net")
}, function(e, t, n) {
    var r = n(113);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("2a49b59d", r, !0, {})
}, function(e, t, n) {
    var r = n(122);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("6c6ba3a5", r, !0, {})
}, function(e, t, n) {
    var r = n(124);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("7995ba9b", r, !0, {})
}, function(e, t, n) {
    var r = n(126);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("b37178ba", r, !0, {})
}, function(e, t, n) {
    var r = n(128);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("fffa1f0a", r, !0, {})
}, function(e, t, n) {
    var r = n(130);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("755b086a", r, !0, {})
}, function(e, t, n) {
    var r = n(132);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("4b5a8f12", r, !0, {})
}, function(e, t, n) {
    var r = n(137);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("7dca3a4a", r, !0, {})
}, function(e, t, n) {
    var r = n(139);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("11fc696c", r, !0, {})
}, function(e, t, n) {
    var r = n(141);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("12aa6dd6", r, !0, {})
}, function(e, t, n) {
    var r = n(143);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("6c952a0f", r, !0, {})
}, function(e, t, n) {
    var r = n(145);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("07bb1c07", r, !0, {})
}, function(e, t, n) {
    var r = n(147);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("e947b408", r, !0, {})
}, function(e, t, n) {
    var r = n(149);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("ddeb08e8", r, !0, {})
}, function(e, t, n) {
    var r = n(151);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("10499ea4", r, !0, {})
}, function(e, t, n) {
    var r = n(153);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("0575e8b6", r, !0, {})
}, function(e, t, n) {
    var r = n(155);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("63058d7e", r, !0, {})
}, function(e, t, n) {
    var r = n(157);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("e1cadc66", r, !0, {})
}, function(e, t, n) {
    var r = n(159);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("a7c8a482", r, !0, {})
}, function(e, t, n) {
    var r = n(162);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("9ce43260", r, !0, {})
}, function(e, t, n) {
    var r = n(164);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("9e9713a2", r, !0, {})
}, function(e, t, n) {
    var r = n(166);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("b0c2518a", r, !0, {})
}, function(e, t, n) {
    var r = n(168);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("df488b4c", r, !0, {})
}, function(e, t, n) {
    var r = n(170);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("674c59c0", r, !0, {})
}, function(e, t, n) {
    var r = n(172);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("d7577662", r, !0, {})
}, function(e, t, n) {
    var r = n(174);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("4be73663", r, !0, {})
}, function(e, t, n) {
    var r = n(176);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("07aa29ca", r, !0, {})
}, function(e, t, n) {
    var r = n(178);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("de2d3d5c", r, !0, {})
}, function(e, t, n) {
    var r = n(180);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("146fb75c", r, !0, {})
}, function(e, t, n) {
    var r = n(182);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("60a317e8", r, !0, {})
}, function(e, t, n) {
    var r = n(184);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("ccf33d7e", r, !0, {})
}, function(e, t, n) {
    var r = n(186);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("d885aace", r, !0, {})
}, function(e, t, n) {
    var r = n(188);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("45cc035f", r, !0, {})
}, function(e, t, n) {
    var r = n(190);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("76c2108c", r, !0, {})
}, function(e, t, n) {
    var r = n(192);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("58486344", r, !0, {})
}, function(e, t, n) {
    var r = n(194);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("8e585f72", r, !0, {})
}, function(e, t, n) {
    var r = n(196);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("ff8da1c2", r, !0, {})
}, function(e, t, n) {
    var r = n(198);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("3afb0156", r, !0, {})
}, function(e, t, n) {
    var r = n(200);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("f947024a", r, !0, {})
}, function(e, t, n) {
    var r = n(202);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("dffc9844", r, !0, {})
}, function(e, t, n) {
    var r = n(204);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("0ff5b084", r, !0, {})
}, function(e, t, n) {
    var r = n(206);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("73a6363d", r, !0, {})
}, function(e, t, n) {
    var r = n(208);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("5402fb86", r, !0, {})
}, function(e, t, n) {
    var r = n(210);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("7fd02cac", r, !0, {})
}, function(e, t, n) {
    var r = n(212);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("44231178", r, !0, {})
}, function(e, t, n) {
    var r = n(214);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("6accc4ae", r, !0, {})
}, function(e, t, n) {
    var r = n(216);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("4d99ac92", r, !0, {})
}, function(e, t, n) {
    var r = n(218);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("cb0694d6", r, !0, {})
}, function(e, t, n) {
    var r = n(220);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("57c4a2e3", r, !0, {})
}, function(e, t, n) {
    var r = n(222);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("83e4a8a6", r, !0, {})
}, function(e, t, n) {
    var r = n(229);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("4858f6b9", r, !0, {})
}, function(e) {
    function t(n) {
        return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, t(n)
    }
    e.exports = t
}, function(e, t) {
    "use strict";
    t.a = 'function FindProxyForURL(url, host) {\n  return "PROXY 127.0.0.1:%mixed-port%; SOCKS5 127.0.0.1:%mixed-port%; DIRECT;"\n}'
}, function(e, t, n) {
    "use strict";
    var r = n(6),
        i = Object(r.g)() ? ["127.0.0.1", "192.168.0.0/16", "10.0.0.0/8", "172.16.0.0/12", "100.64.0.0/10", "17.0.0.0/8", "localhost", "*.local", "169.254.0.0/16", "224.0.0.0/4", "240.0.0.0/4"] : ["localhost", "127.*", "10.*", "172.16.*", "172.17.*", "172.18.*", "172.19.*", "172.20.*", "172.21.*", "172.22.*", "172.23.*", "172.24.*", "172.25.*", "172.26.*", "172.27.*", "172.28.*", "172.29.*", "172.30.*", "172.31.*", "192.168.*", "<local>"];
    t.a = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }
    var i = n(3),
        a = n.n(i),
        o = n(5),
        s = {
            props: ["on"],
            model: {
                prop: "on",
                event: "change"
            },
            data: function() {
                return {}
            },
            watch: {},
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
                    a()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(o.mapState)({})),
            methods: {
                handleClick: function() {
                    this.$emit("change", !this.on)
                }
            },
            mounted: function() {}
        },
        c = (n(146), n(7)),
        d = Object(c.a)(s, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-" + e.theme],
                on: {
                    click: e.handleClick
                }
            }, [n("transition", {
                attrs: {
                    name: "move-right"
                }
            }, [e.on ? e._e() : n("div", {
                staticClass: "text"
            }, [n("div", {
                staticClass: "base tint-right"
            }), e._v(" "), n("div", {
                staticClass: "base text-font text-off"
            })])]), e._v(" "), n("transition", {
                attrs: {
                    name: "move-left"
                }
            }, [e.on ? n("div", {
                staticClass: "text"
            }, [n("div", {
                staticClass: "base text-font text-on"
            }), e._v(" "), n("div", {
                staticClass: "base tint-left"
            })]) : e._e()])], 1)
        }), [], !1, null, "e6ab4ba2", null);
    d.options.__file = "SwitchView.vue", t.a = d.exports
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }
    var i = n(3),
        a = n.n(i),
        o = n(5),
        s = {
            name: "SelectView",
            props: {
                items: Array,
                index: {
                    type: Number,
                    default: function() {
                        return 0
                    }
                }
            },
            model: {
                prop: "index",
                event: "select"
            },
            data: function() {
                return {}
            },
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
                    a()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(o.mapState)({})),
            methods: {
                handleItemClick: function(e) {
                    this.$emit("select", e)
                },
                itemClass: function(e) {
                    var t = ["item-".concat(this.theme), "item-".concat(0 == e % 2 ? "double" : "single", "-").concat(this.theme)];
                    return e === this.index && t.push("item-selected-".concat(this.theme)), 0 === e ? t.push("item-first") : e === this.items.length - 1 && t.push("item-last"), t
                }
            }
        },
        c = (n(148), n(7)),
        d = Object(c.a)(s, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-select-view"]
            }, e._l(e.items, (function(t, r) {
                return n("div", {
                    key: r,
                    class: e.itemClass(r),
                    domProps: {
                        innerHTML: e._s(t)
                    },
                    on: {
                        click: function() {
                            return e.handleItemClick(r)
                        }
                    }
                })
            })), 0)
        }), [], !1, null, "38b9c85e", null);
    d.options.__file = "SelectView.vue", t.a = d.exports
}, function(e) {
    e.exports = require("prismjs")
}, function(e) {
    e.exports = require("require-from-string")
}, function(e) {
    e.exports = require("util")
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(133),
        i = {};
    r.keys().forEach((function(e) {
        "./index.js" === e || (i[e.replace(/(\.\/|\.js)/g, "")] = r(e).default)
    })), t.default = i
}, function(e) {
    e.exports = require("ws")
}, function(e) {
    e.exports = require("regedit")
}, function(e) {
    e.exports = require("vue-router")
}, function(e) {
    e.exports = require("velocity-animate")
}, function(e, t, n) {
    var r = n(99);
    e.exports = function(e, t) {
        if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
    }
}, function(e) {
    e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
}, function(e) {
    e.exports = require("get-port")
}, function(e, t, n) {
    function r(e) {
        var t = i(e);
        return n(t)
    }

    function i(e) {
        if (!n.o(a, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return a[e]
    }
    var a = {
        "./service_darwin": 102,
        "./service_darwin.js": 102,
        "./service_win32": 103,
        "./service_win32.js": 103
    };
    r.keys = function() {
        return Object.keys(a)
    }, r.resolve = i, e.exports = r, r.id = 101
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "status", (function() {
        return x
    })), n.d(t, "statusService", (function() {
        return k
    })), n.d(t, "installService", (function() {
        return _
    })), n.d(t, "uninstallService", (function() {
        return O
    })), n.d(t, "needUpdate", (function() {
        return S
    })), n.d(t, "updateService", (function() {
        return C
    }));
    var r = n(0),
        i = n.n(r),
        a = n(1),
        o = n.n(a),
        s = n(3),
        c = n.n(s),
        d = n(6),
        l = n(12),
        u = n(19),
        p = (n.n(u), n(26)),
        f = (n.n(p), n(2)),
        h = (n.n(f), n(4)),
        v = (n.n(h), n(15)),
        m = n(14),
        g = (n.n(m), n(18)),
        b = (n.n(g), '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n    <dict>\n        <key>Label</key>\n        <string>com.lbyczf.cfw.helper</string>\n        <key>Program</key>\n        <string>helperPath</string>\n        <key>RunAtLoad</key>\n        <true/>\n        <key>KeepAlive</key>\n        <true/>\n    </dict>\n</plist>'),
        x = {
            Active: Symbol(),
            Inactive: Symbol(),
            NonExistent: Symbol(),
            Unknown: Symbol()
        },
        y = function(e) {
            return new Promise((function(t, n) {
                Object(p.exec)(e, {
                    name: "Clash for Windows"
                }, (function(e, r, i) {
                    e && n(e), i && n(i), r && t(r.toString()), t("")
                }))
            }))
        },
        w = function() {
            var e, t = l.a.getters.filesPath,
                n = (e = {}, c()(e, d.b, "darwin/x64/service"), c()(e, d.a, "darwin/arm64/service"), e)[Object(d.e)()];
            return Object(f.join)(t, n)
        },
        k = function() {
            var e = o()(i.a.mark((function e() {
                var t, n, r, a;
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, t = l.a.state.app.clashPath, "" === (n = void 0 === t ? "" : t) || Object(h.existsSync)(Object(f.join)(n, "service"))) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return", x.Inactive);
                        case 4:
                            return e.next = 6, g.get("http://127.0.0.1:53000/ping", {
                                timeout: 5e3
                            });
                        case 6:
                            return r = e.sent, a = r.status, e.abrupt("return", 200 === a ? x.Active : x.Inactive);
                        case 11:
                            e.prev = 11, e.t0 = e.catch(0);
                        case 13:
                            return e.abrupt("return", x.Unknown);
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 11]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        _ = function() {
            var e = o()(i.a.mark((function e() {
                var t, n, r, a;
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, t = l.a.state.app.clashPath, n = Object(f.join)(t, "service"), Object(h.existsSync)(n) || Object(h.mkdirSync)(n), r = Object(f.join)(t, "service", "clash-core-service"), Object(h.copyFileSync)(Object(f.join)(w(), "clash-core-service"), Object(f.join)(r)), a = "/Library/LaunchDaemons/com.lbyczf.cfw.helper.plist", e.next = 9, y('echo "'.concat(b.replace("helperPath", r), '" > ').concat(a, " ; launchctl load ").concat(a));
                        case 9:
                            return e.abrupt("return", !0);
                        case 12:
                            return e.prev = 12, e.t0 = e.catch(0), e.abrupt("return", !1);
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 12]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        O = function() {
            var e = o()(i.a.mark((function e() {
                var t, n, r;
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, t = "/Library/LaunchDaemons/com.lbyczf.cfw.helper.plist", e.next = 4, y("launchctl unload ".concat(t, " ; rm ").concat(t));
                        case 4:
                            return n = l.a.state.app.clashPath, r = Object(f.join)(n, "service"), Object(h.existsSync)(r) && Object(v.a)(r), e.abrupt("return", !0);
                        case 10:
                            return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", !1);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 10]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        S = function() {
            var e = l.a.state.app.clashPath,
                t = Object(f.join)(e, "service");
            if (!Object(h.existsSync)(t)) return !1;
            var n = Object(f.join)(e, "service", "clash-core-service");
            if (!Object(h.existsSync)(n)) return !1;
            var r = Object(f.join)(w(), "clash-core-service"),
                i = function(e) {
                    return Object(v.b)(Object(h.readFileSync)(e))
                };
            return i(n) !== i(r)
        },
        C = function() {
            var e = o()(i.a.mark((function e() {
                var t, n, r, a;
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, t = l.a.state.app.clashPath, n = Object(f.join)(t, "service"), Object(h.existsSync)(n) || Object(h.mkdirSync)(n), r = Object(f.join)(t, "service", "clash-core-service"), Object(h.copyFileSync)(Object(f.join)(w(), "clash-core-service"), Object(f.join)(r)), a = "/Library/LaunchDaemons/com.lbyczf.cfw.helper.plist", e.next = 9, y("launchctl unload ".concat(a, ' ; echo "').concat(b.replace("helperPath", r), '" > ').concat(a, " ; launchctl load ").concat(a));
                        case 9:
                            return e.abrupt("return", !0);
                        case 12:
                            return e.prev = 12, e.t0 = e.catch(0), e.abrupt("return", !1);
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 12]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }()
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "status", (function() {
        return x
    })), n.d(t, "statusService", (function() {
        return S
    })), n.d(t, "installService", (function() {
        return C
    })), n.d(t, "uninstallService", (function() {
        return P
    })), n.d(t, "needUpdate", (function() {
        return j
    })), n.d(t, "updateService", (function() {
        return E
    }));
    var r = n(0),
        i = n.n(r),
        a = n(1),
        o = n.n(a),
        s = n(3),
        c = n.n(s),
        d = n(6),
        l = n(12),
        u = n(19),
        p = (n.n(u), n(18)),
        f = n.n(p),
        h = n(26),
        v = (n.n(h), n(2)),
        m = (n.n(v), n(4)),
        g = (n.n(m), n(15)),
        b = n(14),
        x = (n.n(b), {
            Active: Symbol(),
            Inactive: Symbol(),
            NonExistent: Symbol(),
            Unknown: Symbol()
        }),
        y = function() {
            var e = l.a.state.app.clashPath,
                t = Object(v.join)(e, "service");
            Object(m.existsSync)(t) || Object(m.mkdirSync)(t);
            var n = Object(v.join)(e, "service", "clash-core-service.exe");
            Object(m.copyFileSync)(Object(v.join)(_(), "clash-core-service.exe"), Object(v.join)(n));
            var r = Object(v.join)(e, "service", "service.exe");
            Object(m.copyFileSync)(Object(v.join)(_(), "service.exe"), Object(v.join)(r));
            var i = Object(v.join)(e, "service", "service.yml");
            Object(m.writeFileSync)(i, Object(b.stringify)({
                id: "Clash Core Service",
                name: "Clash 核心服务",
                description: "由 Clash for Windows 启动的 Clash 核心服务",
                executable: "clash-core-service",
                log: {
                    mode: "none"
                }
            }))
        },
        w = function() {
            var e = l.a.state.app.clashPath,
                t = Object(v.join)(e, "service");
            Object(m.existsSync)(t) && Object(g.a)(t)
        },
        k = function(e) {
            return new Promise((function(t, n) {
                Object(h.exec)(e, (function(e, r, i) {
                    e && n(e), i && n(i), r && t(r.toString()), t("")
                }))
            }))
        },
        _ = function() {
            var e, t = l.a.getters.filesPath,
                n = (e = {}, c()(e, d.c, "win/ia32/service"), c()(e, d.d, "win/x64/service"), e)[Object(d.e)()];
            return Object(v.join)(t, n)
        },
        O = function() {
            var e = o()(i.a.mark((function e() {
                var t, n, r, a, o, s = arguments;
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (t = 0 < s.length && void 0 !== s[0] ? s[0] : [], !Object(d.h)()) {
                                e.next = 9;
                                break
                            }
                            return n = l.a.state.app.clashPath, r = Object(v.join)(n, "service"), a = t.map((function(e) {
                                var t = e.cmd,
                                    n = e.options,
                                    i = void 0 === n ? [] : n;
                                return '"'.concat(Object(v.join)(r, "service.exe"), '" ').concat(t, " ").concat(i.join(" "))
                            })).join(" & "), e.next = 7, k(a);
                        case 7:
                            return o = e.sent, e.abrupt("return", o);
                        case 9:
                            return e.abrupt("return", "");
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        S = function() {
            var e = o()(i.a.mark((function e() {
                var t, n, r, a;
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, t = l.a.state.app.clashPath, "" === (n = void 0 === t ? "" : t) || Object(m.existsSync)(Object(v.join)(n, "service"))) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return", x.Inactive);
                        case 4:
                            return e.next = 6, f.a.get("http://127.0.0.1:53000/ping", {
                                timeout: 5e3
                            });
                        case 6:
                            return r = e.sent, a = r.status, e.abrupt("return", 200 === a ? x.Active : x.Inactive);
                        case 11:
                            e.prev = 11, e.t0 = e.catch(0);
                        case 13:
                            return e.abrupt("return", x.Unknown);
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 11]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        C = function() {
            var e = o()(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, y(), e.next = 4, O([{
                                cmd: "install"
                            }, {
                                cmd: "start"
                            }]);
                        case 4:
                            return e.abrupt("return", !0);
                        case 7:
                            return e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), e.abrupt("return", !1);
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 7]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        P = function() {
            var e = o()(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, O([{
                                cmd: "stop"
                            }, {
                                cmd: "uninstall"
                            }]);
                        case 3:
                            return w(), e.abrupt("return", !0);
                        case 7:
                            return e.prev = 7, e.t0 = e.catch(0), console.error(e.t0), e.abrupt("return", !1);
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 7]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        j = function() {
            var e = l.a.state.app.clashPath,
                t = Object(v.join)(e, "service");
            if (!Object(m.existsSync)(t)) return !1;
            var n = Object(v.join)(e, "service", "clash-core-service.exe");
            if (!Object(m.existsSync)(n)) return !1;
            var r = Object(v.join)(_(), "clash-core-service.exe"),
                i = function(e) {
                    return Object(g.b)(Object(m.readFileSync)(e))
                };
            return i(n) !== i(r)
        },
        E = function() {
            var e = o()(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, P();
                        case 3:
                            if (!e.sent) {
                                e.next = 7;
                                break
                            }
                            return e.next = 6, C();
                        case 6:
                            return e.abrupt("return", e.sent);
                        case 7:
                            e.next = 12;
                            break;
                        case 9:
                            return e.prev = 9, e.t0 = e.catch(0), e.abrupt("return", !1);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 9]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }()
}, function(e) {
    e.exports = require("crypto")
}, function(e) {
    e.exports = require("http")
}, function(e) {
    e.exports = require("console")
}, function(e) {
    e.exports = require("stream")
}, function(e) {
    e.exports = require("tunnel")
}, function(e) {
    e.exports = require("zlib")
}, function(e) {
    e.exports = require("tar-stream")
}, function(e) {
    e.exports = require("qrcode")
}, function(e, t, n) {
    "use strict";
    var r = n(34);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".clickable,.clickable *{cursor:pointer}", ""])
}, function(e) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }
}, function(e) {
    e.exports = function(e, t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
            var n = [],
                r = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }
    }
}, function(e) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function(e, t, n) {
    var r = n(99);
    e.exports = function(e) {
        if (Array.isArray(e)) return r(e)
    }
}, function(e) {
    e.exports = function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }
}, function(e) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function(e) {
    var t = function(e) {
        "use strict";

        function t(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t]
        }

        function n(e, t, n, r) {
            var a = t && t.prototype instanceof i ? t : i,
                o = Object.create(a.prototype),
                s = new f(r || []);
            return o._invoke = d(e, n, s), o
        }

        function r(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }

        function i() {}

        function a() {}

        function o() {}

        function s(e) {
            ["next", "throw", "return"].forEach((function(n) {
                t(e, n, (function(e) {
                    return this._invoke(n, e)
                }))
            }))
        }

        function c(e, t) {
            function n(i, a, o, s) {
                var c = r(e[i], e, a);
                if ("throw" !== c.type) {
                    var d = c.arg,
                        l = d.value;
                    return l && "object" == typeof l && g.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                        n("next", e, o, s)
                    }), (function(e) {
                        n("throw", e, o, s)
                    })) : t.resolve(l).then((function(e) {
                        d.value = e, o(d)
                    }), (function(e) {
                        return n("throw", e, o, s)
                    }))
                }
                s(c.arg)
            }
            var i;
            this._invoke = function(e, r) {
                function a() {
                    return new t((function(t, i) {
                        n(e, r, t, i)
                    }))
                }
                return i = i ? i.then(a, a) : a()
            }
        }

        function d(e, t, n) {
            var i = k;
            return function(a, o) {
                if (i == O) throw new Error("Generator is already running");
                if (i == S) {
                    if ("throw" === a) throw o;
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                for (n.method = a, n.arg = o;;) {
                    var s = n.delegate;
                    if (s) {
                        var c = l(s, n);
                        if (c) {
                            if (c === C) continue;
                            return c
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                        if (i == k) throw i = S, n.arg;
                        n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    i = O;
                    var d = r(e, t, n);
                    if ("normal" === d.type) {
                        if (i = n.done ? S : _, d.arg === C) continue;
                        return {
                            value: d.arg,
                            done: n.done
                        }
                    }
                    "throw" === d.type && (i = S, n.method = "throw", n.arg = d.arg)
                }
            }
        }

        function l(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = void 0, l(e, t), "throw" === t.method)) return C;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return C
            }
            var i = r(n, e.iterator, t.arg);
            if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, C;
            var a = i.arg;
            return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, C) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, C)
        }

        function u(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function p(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function f(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(u, this), this.reset(!0)
        }

        function h(e) {
            if (e) {
                var t = e[x];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        r = function t() {
                            for (; ++n < e.length;)
                                if (g.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                    return r.next = r
                }
            }
            return {
                next: v
            }
        }

        function v() {
            return {
                value: void 0,
                done: !0
            }
        }
        var m = Object.prototype,
            g = m.hasOwnProperty,
            b = "function" == typeof Symbol ? Symbol : {},
            x = b.iterator || "@@iterator",
            y = b.asyncIterator || "@@asyncIterator",
            w = b.toStringTag || "@@toStringTag";
        try {
            t({}, "")
        } catch (e) {
            t = function(e, t, n) {
                return e[t] = n
            }
        }
        e.wrap = n;
        var k = "suspendedStart",
            _ = "suspendedYield",
            O = "executing",
            S = "completed",
            C = {},
            P = {};
        P[x] = function() {
            return this
        };
        var j = Object.getPrototypeOf,
            E = j && j(j(h([])));
        E && E !== m && g.call(E, x) && (P = E);
        var T = o.prototype = i.prototype = Object.create(P);
        return a.prototype = T.constructor = o, o.constructor = a, a.displayName = t(o, w, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === a || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : (e.__proto__ = o, t(e, w, "GeneratorFunction")), e.prototype = Object.create(T), e
        }, e.awrap = function(e) {
            return {
                __await: e
            }
        }, s(c.prototype), c.prototype[y] = function() {
            return this
        }, e.AsyncIterator = c, e.async = function(t, r, i, a, o) {
            void 0 === o && (o = Promise);
            var s = new c(n(t, r, i, a), o);
            return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                return e.done ? e.value : s.next()
            }))
        }, s(T), t(T, w, "Generator"), T[x] = function() {
            return this
        }, T.toString = function() {
            return "[object Generator]"
        }, e.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, e.values = h, f.prototype = {
            constructor: f,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(p), !e)
                    for (var t in this) "t" === t.charAt(0) && g.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                function t(t, r) {
                    return a.type = "throw", a.arg = e, n.next = t, r && (n.method = "next", n.arg = void 0), !!r
                }
                if (this.done) throw e;
                for (var n = this, r = this.tryEntries.length - 1; 0 <= r; --r) {
                    var i = this.tryEntries[r],
                        a = i.completion;
                    if ("root" === i.tryLoc) return t("end");
                    if (i.tryLoc <= this.prev) {
                        var o = g.call(i, "catchLoc"),
                            s = g.call(i, "finallyLoc");
                        if (o && s) {
                            if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                        } else if (o) {
                            if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n, r = this.tryEntries.length - 1; 0 <= r; --r)
                    if ((n = this.tryEntries[r]).tryLoc <= this.prev && g.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var i = n;
                        break
                    } i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, C) : this.complete(a)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), C
            },
            finish: function(e) {
                for (var t, n = this.tryEntries.length - 1; 0 <= n; --n)
                    if ((t = this.tryEntries[n]).finallyLoc === e) return this.complete(t.completion, t.afterLoc), p(t), C
            },
            catch: function(e) {
                for (var t, n = this.tryEntries.length - 1; 0 <= n; --n)
                    if ((t = this.tryEntries[n]).tryLoc === e) {
                        var r = t.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            p(t)
                        }
                        return i
                    } throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, n) {
                return this.delegate = {
                    iterator: h(e),
                    resultName: t,
                    nextLoc: n
                }, "next" === this.method && (this.arg = void 0), C
            }
        }, e
    }(e.exports);
    try {
        regeneratorRuntime = t
    } catch (e) {
        Function("r", "regeneratorRuntime = r")(t)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(35);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".grid-light[data-v-6f4bdf08]{background-color:#f5f5f5}.grid-dark[data-v-6f4bdf08],.grid-light[data-v-6f4bdf08]{padding:10.5px 40px;text-align:center;flex:1;display:flex;align-items:baseline;justify-content:space-between;font-size:.8em;letter-spacing:.5px;height:40px}.grid-dark[data-v-6f4bdf08]{background-color:#42424e}.grid-red[data-v-6f4bdf08]{background-color:#ffc76d}.grid-2077[data-v-6f4bdf08],.grid-red[data-v-6f4bdf08]{padding:10.5px 40px;text-align:center;flex:1;display:flex;align-items:baseline;justify-content:space-between;font-size:.8em;letter-spacing:.5px;height:40px}.grid-2077[data-v-6f4bdf08]{background-color:#084a5a}.main-clash-traffic-view-light[data-v-6f4bdf08]{height:80px;display:flex;flex-direction:column;border-bottom:1px solid #dcdcdc}.main-clash-traffic-view-dark[data-v-6f4bdf08]{height:80px;display:flex;flex-direction:column;border-bottom:1px solid #554f4f}.main-clash-traffic-view-red[data-v-6f4bdf08]{height:80px;display:flex;flex-direction:column;border-bottom:1px solid rgba(218,20,30,.247059)}.main-clash-traffic-view-2077[data-v-6f4bdf08]{height:80px;display:flex;flex-direction:column;border-bottom:1px solid rgba(6,145,180,.521569)}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(36);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".hint[data-v-6f4bdf08]{font-size:.8em;color:#000;letter-spacing:1px;text-align:left}.bold-icon[data-v-6f4bdf08]{font-size:.75em;letter-spacing:1px;padding:0 1px}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(37);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "#main-run-time-view[data-v-03fdb0b2]{display:flex;align-items:flex-end;padding-bottom:40px}.timer-text[data-v-03fdb0b2]{text-align:center;width:100%}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(38);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".menu-light[data-v-197ffb3e]{background-color:#fff;color:#000;list-style-type:none;border-bottom:1px solid #dcdcdc;position:relative;display:flex;flex-direction:column;height:400px;justify-content:space-between}.menu-light .item[data-v-197ffb3e]{flex-grow:1}.menu-dark[data-v-197ffb3e]{background-color:#2c2a38;color:#fff;list-style-type:none;border-bottom:1px solid #554f4f;position:relative;display:flex;flex-direction:column;height:400px;justify-content:space-between}.menu-dark .item[data-v-197ffb3e]{flex-grow:1}.menu-red[data-v-197ffb3e]{background-color:#f8b74f;color:#d33928;list-style-type:none;border-bottom:1px solid rgba(218,20,30,.247059);position:relative;display:flex;flex-direction:column;height:400px;justify-content:space-between}.menu-red .item[data-v-197ffb3e]{flex-grow:1}.menu-2077[data-v-197ffb3e]{background-color:#136377;color:#fcec0c;list-style-type:none;border-bottom:1px solid rgba(6,145,180,.521569);position:relative;display:flex;flex-direction:column;height:400px;justify-content:space-between}.menu-2077 .item[data-v-197ffb3e]{flex-grow:1}.item-draggable .item[data-v-197ffb3e]{-webkit-user-drag:element}.item-none-light[data-v-197ffb3e]{background-color:#f5f5f5;color:#747d88}.item-none-dark[data-v-197ffb3e]{background-color:#42424e;color:#d4d4d4}.item-none-red[data-v-197ffb3e]{background-color:#ffc76d;color:rgba(218,20,30,.796078)}.item-none-2077[data-v-197ffb3e]{background-color:#084a5a;color:#c79707}.running-time-light[data-v-197ffb3e]{flex-grow:1;color:#000}.running-time-dark[data-v-197ffb3e]{flex-grow:1;color:#fff}.running-time-red[data-v-197ffb3e]{flex-grow:1;color:#d33928}.running-time-2077[data-v-197ffb3e]{flex-grow:1;color:#fcec0c}.traffic-light[data-v-197ffb3e]{margin-top:0;color:#000}.traffic-dark[data-v-197ffb3e]{margin-top:0;color:#fff}.traffic-red[data-v-197ffb3e]{margin-top:0;color:#d33928}.traffic-2077[data-v-197ffb3e]{margin-top:0;color:#fcec0c}.main-main-menu[data-v-197ffb3e]{z-index:2;height:100%;display:flex;flex-direction:column}.main-main-menu .stop-btn[data-v-197ffb3e]{cursor:pointer;position:absolute;top:515px;left:20px;border-radius:20px;color:#fff;height:30px;width:130px;line-height:30px;text-align:center;font-size:14px;font-weight:400;background-color:#d14444;box-shadow:0 0 15px 1px rgba(49,49,49,.3);transform:all .3s}.drag-item[data-v-197ffb3e]{background-color:#41b883;color:#fff}.ghost-item[data-v-197ffb3e]{opacity:0}.shaking1[data-v-197ffb3e],.shaking2[data-v-197ffb3e]{margin:2px 0;transform-origin:center;animation:shake-rotate-data-v-197ffb3e .4s infinite}.shaking2[data-v-197ffb3e]{animation-delay:.1s}.shaking3[data-v-197ffb3e]{margin:2px 0;transform-origin:center;animation:shake-rotate-data-v-197ffb3e .4s infinite;animation-delay:.2s}@keyframes shake-rotate-data-v-197ffb3e{0%{transform:rotate(0deg)}12.5%{transform:rotate(.5deg)}25%{-webkit-transform:rotate(1.2deg)}37.5%{transform:rotate(.5deg)}50%{transform:rotate(0deg)}62.5%{transform:rotate(-.5deg)}75%{transform:rotate(-1.2deg)}87.5%{transform:rotate(-.5deg)}to{transform:rotate(0deg)}}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(39);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".icon[data-v-197ffb3e]{width:25px;height:25px}.item[data-v-197ffb3e]{font-size:1em;cursor:pointer;display:flex;align-items:center}.selected-top[data-v-197ffb3e]{border-bottom-right-radius:10px}.selected-bottom[data-v-197ffb3e]{border-top-right-radius:10px}.clickable[data-v-197ffb3e]{cursor:pointer;text-align:center;width:100%}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(40);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-light[data-v-c9342d68]{height:25px;width:100vw;background-color:#ebebeb;color:#000;display:flex;justify-content:space-between;align-items:center}.main-light .empty[data-v-c9342d68]{flex-grow:1;height:100%;display:flex;flex-direction:column}.main-light .empty .top[data-v-c9342d68]{height:5px}.main-light .empty .top .left[data-v-c9342d68]{height:100%;background-color:#41b883}.main-light .empty .bottom[data-v-c9342d68]{flex-grow:1;-webkit-app-region:drag}.main-dark[data-v-c9342d68]{height:25px;width:100vw;background-color:#343442;color:#fff;display:flex;justify-content:space-between;align-items:center}.main-dark .empty[data-v-c9342d68]{flex-grow:1;height:100%;display:flex;flex-direction:column}.main-dark .empty .top[data-v-c9342d68]{height:5px}.main-dark .empty .top .left[data-v-c9342d68]{height:100%;background-color:#00b300}.main-dark .empty .bottom[data-v-c9342d68]{flex-grow:1;-webkit-app-region:drag}.main-red[data-v-c9342d68]{height:25px;width:100vw;background-color:#e8a84a;color:#d33928;display:flex;justify-content:space-between;align-items:center}.main-red .empty[data-v-c9342d68]{flex-grow:1;height:100%;display:flex;flex-direction:column}.main-red .empty .top[data-v-c9342d68]{height:5px}.main-red .empty .top .left[data-v-c9342d68]{height:100%;background-color:#16a716}.main-red .empty .bottom[data-v-c9342d68]{flex-grow:1;-webkit-app-region:drag}.main-2077[data-v-c9342d68]{height:25px;width:100vw;background-color:#fcec0c;color:#fcec0c;display:flex;justify-content:space-between;align-items:center}.main-2077 .empty[data-v-c9342d68]{flex-grow:1;height:100%;display:flex;flex-direction:column}.main-2077 .empty .top[data-v-c9342d68]{height:5px}.main-2077 .empty .top .left[data-v-c9342d68]{height:100%;background-color:#44c444}.main-2077 .empty .bottom[data-v-c9342d68]{flex-grow:1;-webkit-app-region:drag}.title[data-v-c9342d68]{font-size:.75em;font-weight:100;letter-spacing:1px}.close-light[data-v-c9342d68]{-webkit-app-region:no-drag;cursor:pointer;padding:0 7px;height:100%;display:flex;align-items:center}.close-light>img[data-v-c9342d68]{cursor:pointer;height:20px;width:20px}.close-light[data-v-c9342d68]:hover{background-color:rgba(50,50,50,.2)}.close-dark[data-v-c9342d68]{-webkit-app-region:no-drag;cursor:pointer;padding:0 7px;height:100%;display:flex;align-items:center}.close-dark>img[data-v-c9342d68]{cursor:pointer;height:20px;width:20px}.close-dark[data-v-c9342d68]:hover{background-color:hsla(0,0%,98%,.2)}.close-red[data-v-c9342d68]{-webkit-app-region:no-drag;cursor:pointer;padding:0 7px;height:100%;display:flex;align-items:center}.close-red>img[data-v-c9342d68]{cursor:pointer;height:20px;width:20px}.close-red[data-v-c9342d68]:hover{background-color:hsla(0,0%,98%,.2)}.close-2077[data-v-c9342d68]{-webkit-app-region:no-drag;cursor:pointer;padding:0 7px;height:100%;display:flex;align-items:center}.close-2077>img[data-v-c9342d68]{cursor:pointer;height:20px;width:20px}.close-2077[data-v-c9342d68]:hover{background-color:hsla(0,0%,98%,.2)}.icon[data-v-c9342d68]{padding:0;margin-left:10px;background-color:#f3f3f3;width:20px;height:20px;border-radius:1px}.icon>img[data-v-c9342d68]{width:20px;height:20px}", ""])
}, function(e, t, n) {
    function r(e) {
        var t = i(e);
        return n(t)
    }

    function i(e) {
        if (!n.o(a, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return a[e]
    }
    var a = {
        "./app.js": 241,
        "./index.js": 93
    };
    r.keys = function() {
        return Object.keys(a)
    }, r.resolve = i, e.exports = r, r.id = 133
}, function(e) {
    e.exports = require("koa")
}, function(e) {
    e.exports = require("mousetrap")
}, function(e, t, n) {
    "use strict";
    var r = n(41);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".theme-light[data-v-ffb5a7b2]{background-color:#fff;color:#000}.theme-dark[data-v-ffb5a7b2]{background-color:#2c2a38;color:#fff}.theme-red[data-v-ffb5a7b2]{background-color:#f8b74f;color:#d33928}.theme-2077[data-v-ffb5a7b2]{background-color:#136377;color:#fcec0c}.wrapper[data-v-ffb5a7b2]{height:100vh;width:100vw;overflow:hidden}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(42);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "*,:after,:before{-webkit-user-drag:none}*,:after,:before{user-select:none;cursor:default}*{box-sizing:border-box;margin:0;padding:0}body{font-family:Noto Sans CJK,sans-serif;font-weight:500;overflow:hidden}input{font-family:inherit}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(43);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "main[data-v-ffb5a7b2]{display:flex;justify-content:space-between}.left-side[data-v-ffb5a7b2]{display:flex;flex-direction:column;width:170px;height:calc(100vh - 25px)}.right-side[data-v-ffb5a7b2]{z-index:1;flex-grow:1;width:calc(100vw - 170px);height:calc(100vh - 25px)}.welcome[data-v-ffb5a7b2]{color:#555;font-size:23px;margin-bottom:10px}.title[data-v-ffb5a7b2]{color:#2c3e50;font-size:20px;font-weight:700;margin-bottom:6px}.title.alt[data-v-ffb5a7b2]{font-size:18px;margin-bottom:10px}.doc p[data-v-ffb5a7b2]{color:#000;margin-bottom:10px}.doc button[data-v-ffb5a7b2]{font-size:.8em;cursor:pointer;outline:none;padding:.75em 2em;border-radius:2em;display:inline-block;color:#fff;background-color:#4fc08d;transition:all .15s ease;box-sizing:border-box;border:1px solid #4fc08d}.doc button.alt[data-v-ffb5a7b2]{color:#42b983;background-color:transparent}.clash-status-main[data-v-ffb5a7b2]{display:flex;align-items:center;position:absolute;height:40px;bottom:0;width:170px;left:0;justify-content:center;z-index:2}.clash-status-hint[data-v-ffb5a7b2]{margin-left:6px;font-size:.75em;letter-spacing:0;cursor:pointer}.clash-status-icon[data-v-ffb5a7b2]{width:12px;height:12px;border-radius:10px}.clash-running[data-v-ffb5a7b2]{background-color:#41b883}.clash-set-dns[data-v-ffb5a7b2]{background-color:#e7d91a}.clash-stopped[data-v-ffb5a7b2]{background-color:red}.cloud[data-v-ffb5a7b2]{position:fixed;bottom:110px;left:calc(50% + 80px);transform:translateX(-50%);width:40%;pointer-events:none}.opacicy[data-v-ffb5a7b2]{opacity:.2}.latern[data-v-ffb5a7b2]{position:fixed;opacity:.7;top:30px;left:125px;width:50px;pointer-events:none}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(44);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".error-hint-light[data-v-df69c500]{font-size:14px;cursor:pointer;background-color:#fff;color:#000;border:1px solid #dcdcdc;border-radius:3px;box-shadow:0 0 2px 1px rgba(50,50,50,.1);padding:6px 15px}.error-hint-dark[data-v-df69c500]{background-color:#2c2a38;color:#fff;border:1px solid #554f4f;border-radius:3px}.error-hint-dark[data-v-df69c500],.error-hint-red[data-v-df69c500]{font-size:14px;cursor:pointer;box-shadow:0 0 2px 1px hsla(0,0%,84%,.1);padding:6px 15px}.error-hint-red[data-v-df69c500]{background-color:#f8b74f;color:#d33928;border:1px solid rgba(218,20,30,.247059);border-radius:3px}.error-hint-2077[data-v-df69c500]{font-size:14px;cursor:pointer;background-color:#136377;color:#fcec0c;border:1px solid rgba(6,145,180,.521569);border-radius:3px;box-shadow:0 0 2px 1px hsla(0,0%,84%,.1);padding:6px 15px}#error-view-main[data-v-df69c500]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex-grow:1;padding-bottom:60px}#error-view-main .error-content-light[data-v-df69c500]{font-size:15px;border:1px solid hsla(0,0%,69%,.178);padding:10px;max-height:100px;overflow-y:scroll;margin-top:10px;margin-left:40px;margin-right:40px;color:#e74949}#error-view-main .error-content-light[data-v-df69c500]::-webkit-scrollbar{width:16px}#error-view-main .error-content-light[data-v-df69c500]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}#error-view-main .error-content-dark[data-v-df69c500]{font-size:15px;border:1px solid hsla(0,0%,69%,.178);padding:10px;max-height:100px;overflow-y:scroll;margin-top:10px;margin-left:40px;margin-right:40px;color:#e74949}#error-view-main .error-content-dark[data-v-df69c500]::-webkit-scrollbar{width:16px}#error-view-main .error-content-dark[data-v-df69c500]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}#error-view-main .error-content-red[data-v-df69c500]{font-size:15px;border:1px solid hsla(0,0%,69%,.178);padding:10px;max-height:100px;overflow-y:scroll;margin-top:10px;margin-left:40px;margin-right:40px;color:#e74949}#error-view-main .error-content-red[data-v-df69c500]::-webkit-scrollbar{width:16px}#error-view-main .error-content-red[data-v-df69c500]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}#error-view-main .error-content-2077[data-v-df69c500]{font-size:15px;border:1px solid hsla(0,0%,69%,.178);padding:10px;max-height:100px;overflow-y:scroll;margin-top:10px;margin-left:40px;margin-right:40px;color:#e74949}#error-view-main .error-content-2077[data-v-df69c500]::-webkit-scrollbar{width:16px}#error-view-main .error-content-2077[data-v-df69c500]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}.error-hints[data-v-df69c500]{display:flex;flex-direction:column;align-items:center}.loading-hint[data-v-df69c500]{font-size:22px;margin-bottom:40px}.error-btns[data-v-df69c500]{display:flex;margin-top:30px}.error-btns div[data-v-df69c500]{width:fit-content;margin:0 20px}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(45);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "#error-title[data-v-df69c500]{font-size:1.1em}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(46);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-light[data-v-e6ab4ba2]{border:2px solid #c7bfbf;background-color:#c7bfbf;border-radius:40px;width:34px;height:20px;box-shadow:0 0 5px 1px rgba(50,50,50,0);display:flex;padding:0 2px;align-items:center}.main-light [data-v-e6ab4ba2]{cursor:pointer}.main-dark[data-v-e6ab4ba2]{border:2px solid #413c3c;background-color:#413c3c;border-radius:40px;width:34px;height:20px;box-shadow:0 0 5px 1px rgba(50,50,50,0);display:flex;padding:0 2px;align-items:center}.main-dark [data-v-e6ab4ba2]{cursor:pointer}.main-red[data-v-e6ab4ba2]{border:2px solid #d39126;background-color:#d39126;border-radius:40px;width:34px;height:20px;box-shadow:0 0 5px 1px rgba(50,50,50,0);display:flex;padding:0 2px;align-items:center}.main-red [data-v-e6ab4ba2]{cursor:pointer}.main-2077[data-v-e6ab4ba2]{border:2px solid #837a00;background-color:#837a00;border-radius:40px;width:34px;height:20px;box-shadow:0 0 5px 1px rgba(50,50,50,0);display:flex;padding:0 2px;align-items:center}.main-2077 [data-v-e6ab4ba2]{cursor:pointer}.text[data-v-e6ab4ba2]{display:flex;justify-content:space-between;align-items:center;width:calc(100% - 0px);height:calc(100% - 4px)}.base[data-v-e6ab4ba2]{width:calc(100% - 17px);height:100%}.text-font[data-v-e6ab4ba2]{letter-spacing:0;text-align:center;font-size:12px;margin-bottom:8px;color:#fff}.tint-right[data-v-e6ab4ba2]{background-color:#d44545;border-radius:20px;width:12px}.tint-left[data-v-e6ab4ba2]{background-color:#13af42;border-radius:20px;width:12px}.move-left-enter-active[data-v-e6ab4ba2]{transition:all .2s ease}.move-left-leave-active[data-v-e6ab4ba2]{transition:all .1s ease-out}.move-left-enter[data-v-e6ab4ba2],.move-left-leave-to[data-v-e6ab4ba2]{transform:translateX(-10px);opacity:0}.move-right-enter-active[data-v-e6ab4ba2]{transition:all .2s ease}.move-right-leave-active[data-v-e6ab4ba2]{transition:all .1s ease-out}.move-right-enter[data-v-e6ab4ba2],.move-right-leave-to[data-v-e6ab4ba2]{transform:translateX(10px);opacity:0}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(47);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-select-view[data-v-38b9c85e]{display:flex;align-items:center}.item-2077[data-v-38b9c85e],.item-dark[data-v-38b9c85e],.item-light[data-v-38b9c85e],.item-red[data-v-38b9c85e]{color:#fff;height:26px;font-size:.8em;line-height:25px;padding:0 6px;text-align:center;cursor:pointer;min-width:50px}.item-single-light[data-v-38b9c85e]{background-color:#c7bfbf}.item-single-dark[data-v-38b9c85e]{background-color:#413c3c}.item-single-red[data-v-38b9c85e]{background-color:#d39126}.item-single-2077[data-v-38b9c85e]{background-color:#837a00}.item-double-light[data-v-38b9c85e]{background-color:#bdb3b3}.item-double-dark[data-v-38b9c85e]{background-color:#332f2f}.item-double-red[data-v-38b9c85e]{background-color:#be8222}.item-double-2077[data-v-38b9c85e]{background-color:#968c03}.item-first[data-v-38b9c85e]{border-top-left-radius:6px;border-bottom-left-radius:6px}.item-last[data-v-38b9c85e]{border-top-right-radius:6px;border-bottom-right-radius:6px}.item-selected-2077[data-v-38b9c85e],.item-selected-dark[data-v-38b9c85e],.item-selected-light[data-v-38b9c85e],.item-selected-red[data-v-38b9c85e]{background-color:#179bbb}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(48);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".content-light[data-v-22abe9c1]{min-width:200px;position:absolute;top:14px;transform:translateY(-100%);left:17px;background-color:#fff;color:#17224f;padding:10px 15px;border-radius:3px;z-index:1000;font-size:14px;box-shadow:0 0 5px 2px rgba(0,0,0,.1)}.content-light a[data-v-22abe9c1]{color:#8abdf8;text-decoration:none;cursor:pointer}.content-dark[data-v-22abe9c1]{min-width:200px;position:absolute;top:14px;transform:translateY(-100%);left:17px;background-color:#686675;color:#fff;padding:10px 15px;border-radius:3px;z-index:1000;font-size:14px;box-shadow:0 0 5px 2px rgba(0,0,0,.1)}.content-dark a[data-v-22abe9c1]{color:#8abdf8;text-decoration:none;cursor:pointer}.content-red[data-v-22abe9c1]{min-width:200px;position:absolute;top:14px;transform:translateY(-100%);left:17px;background-color:#ca2b33;color:#fff;padding:10px 15px;border-radius:3px;z-index:1000;font-size:14px;box-shadow:0 0 5px 2px rgba(0,0,0,.1)}.content-red a[data-v-22abe9c1]{color:#8abdf8;text-decoration:none;cursor:pointer}.content-2077[data-v-22abe9c1]{min-width:200px;position:absolute;top:14px;transform:translateY(-100%);left:17px;background-color:#064453;color:#fff;padding:10px 15px;border-radius:3px;z-index:1000;font-size:14px;box-shadow:0 0 5px 2px rgba(0,0,0,.1)}.content-2077 a[data-v-22abe9c1]{color:#8abdf8;text-decoration:none;cursor:pointer}svg[data-v-22abe9c1]{opacity:.7}.info-icon-main[data-v-22abe9c1]{position:relative;display:flex;align-items:center;margin-left:4px}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(49);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".content[data-v-ab2e11d4]{padding:5px;flex-grow:1;overflow:hidden;display:flex;justify-content:space-between;flex-direction:column;margin:0 auto;width:70vw;height:80vh;max-height:600px;max-width:650px}.item-light[data-v-ab2e11d4]{position:relative;padding:4px 20px;font-size:1.1em;display:flex;align-items:center;justify-content:space-between;border-radius:3px;height:100%;transition:background-color .3s}.item-light[data-v-ab2e11d4]:hover{background-color:#f1f1f1}.item-dark[data-v-ab2e11d4]{position:relative;padding:4px 20px;font-size:1.1em;display:flex;align-items:center;justify-content:space-between;border-radius:3px;height:100%;transition:background-color .3s}.item-dark[data-v-ab2e11d4]:hover{background-color:#606068}.item-red[data-v-ab2e11d4]{position:relative;padding:4px 20px;font-size:1.1em;display:flex;align-items:center;justify-content:space-between;border-radius:3px;height:100%;transition:background-color .3s}.item-red[data-v-ab2e11d4]:hover{background-color:#eda94c}.item-2077[data-v-ab2e11d4]{position:relative;padding:4px 20px;font-size:1.1em;display:flex;align-items:center;justify-content:space-between;border-radius:3px;height:100%;transition:background-color .3s}.item-2077[data-v-ab2e11d4]:hover{background-color:#084a5a}.title-light[data-v-ab2e11d4]{color:#2c3e50}.title-dark[data-v-ab2e11d4],.title-light[data-v-ab2e11d4]{font-size:2em;font-weight:500;cursor:pointer;display:flex;align-items:center}.title-dark[data-v-ab2e11d4]{color:#e9e9e9}.title-red[data-v-ab2e11d4]{color:#b72d29}.title-2077[data-v-ab2e11d4],.title-red[data-v-ab2e11d4]{font-size:2em;font-weight:500;cursor:pointer;display:flex;align-items:center}.title-2077[data-v-ab2e11d4]{color:#f8ed53}.clickable-light[data-v-ab2e11d4]{cursor:pointer;border-bottom-style:dashed;border-bottom-width:1px;border-bottom-color:rgba(50,50,50,.2)}.clickable-dark[data-v-ab2e11d4]{border-bottom-color:#959595}.clickable-dark[data-v-ab2e11d4],.clickable-red[data-v-ab2e11d4]{cursor:pointer;border-bottom-style:dashed;border-bottom-width:1px}.clickable-red[data-v-ab2e11d4]{border-bottom-color:rgba(218,20,30,.247059)}.clickable-2077[data-v-ab2e11d4]{cursor:pointer;border-bottom-style:dashed;border-bottom-width:1px;border-bottom-color:rgba(221,233,55,.247059)}.interfaces-card-light[data-v-ab2e11d4]{position:fixed;left:calc(170px + (100vw - 170px) / 2);transform:translate(-50%);bottom:20px;background-color:#fff;padding:10px 30px;border-radius:5px;max-height:50vh;overflow-y:scroll;box-shadow:1px 1px 10px 2px rgba(50,50,50,.3);z-index:2000}.interfaces-card-light[data-v-ab2e11d4]::-webkit-scrollbar{width:16px}.interfaces-card-light[data-v-ab2e11d4]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.interfaces-card-dark[data-v-ab2e11d4]{position:fixed;left:calc(170px + (100vw - 170px) / 2);transform:translate(-50%);bottom:20px;background-color:#686675;padding:10px 30px;border-radius:5px;max-height:50vh;overflow-y:scroll;box-shadow:1px 1px 10px 2px rgba(50,50,50,.3);z-index:2000}.interfaces-card-dark[data-v-ab2e11d4]::-webkit-scrollbar{width:16px}.interfaces-card-dark[data-v-ab2e11d4]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}.interfaces-card-red[data-v-ab2e11d4]{position:fixed;left:calc(170px + (100vw - 170px) / 2);transform:translate(-50%);bottom:20px;background-color:#ca2b33;padding:10px 30px;border-radius:5px;max-height:50vh;overflow-y:scroll;box-shadow:1px 1px 10px 2px rgba(50,50,50,.3);z-index:2000}.interfaces-card-red[data-v-ab2e11d4]::-webkit-scrollbar{width:16px}.interfaces-card-red[data-v-ab2e11d4]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}.interfaces-card-2077[data-v-ab2e11d4]{position:fixed;left:calc(170px + (100vw - 170px) / 2);transform:translate(-50%);bottom:20px;background-color:#064453;padding:10px 30px;border-radius:5px;max-height:50vh;overflow-y:scroll;box-shadow:1px 1px 10px 2px rgba(50,50,50,.3);z-index:2000}.interfaces-card-2077[data-v-ab2e11d4]::-webkit-scrollbar{width:16px}.interfaces-card-2077[data-v-ab2e11d4]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}.interfaces-content-light[data-v-ab2e11d4]{color:#17224f;display:flex;align-items:flex-end;margin:10px 0;align-items:center}.interfaces-content-2077[data-v-ab2e11d4],.interfaces-content-dark[data-v-ab2e11d4],.interfaces-content-red[data-v-ab2e11d4]{color:#fff;display:flex;align-items:flex-end;margin:10px 0;align-items:center}.copy-icon[data-v-ab2e11d4]{margin-right:10px;margin-top:2px;cursor:pointer}.copy-icon [data-v-ab2e11d4]{cursor:pointer}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(50);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, '#main-general-view[data-v-ab2e11d4]{display:flex;flex-direction:column;justify-content:space-between;height:calc(100vh - 25px)}.header[data-v-ab2e11d4]{margin-top:10px;display:flex;height:100px;width:calc(100vw - 170px);justify-content:center;align-items:center}.icon[data-v-ab2e11d4]{width:90px;height:90px;margin-right:20px}.title-name[data-v-ab2e11d4]{display:inline-block;cursor:pointer}.new-version-tag[data-v-ab2e11d4]{display:inline-block;color:#fff;padding:2px 4px;background-color:rgba(170,38,38,.8);border-radius:3px;font-size:.65em;position:relative;top:-8px;left:2px}.item-left[data-v-ab2e11d4]{display:flex;font-weight:500;font-size:1em;align-items:center}.item-right[data-v-ab2e11d4]{font-size:15px;font-weight:400;display:flex;align-items:center}.control-icon[data-v-ab2e11d4]{width:20px;height:20px;margin-right:10px;margin-top:2px;cursor:pointer}.systemCheckbox[data-v-ab2e11d4]{width:20px;height:20px}.systemCheckbox[data-v-ab2e11d4]:checked{background-color:#233376;border:none}.hiddenInput[data-v-ab2e11d4]{width:1px;height:1px;opacity:0}.version[data-v-ab2e11d4]{font-size:.5em;margin-left:10px;font-weight:400;cursor:pointer;margin-top:15px}.checkmark-container[data-v-ab2e11d4]{display:block;position:relative;padding-left:22px;margin-bottom:22px;cursor:pointer;font-size:22px}.checkmark-container input[data-v-ab2e11d4]{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.system-checkmark[data-v-ab2e11d4]{cursor:pointer;position:absolute;top:0;border-radius:20px;left:0;height:25px;width:25px;background-color:#fff;box-shadow:0 0 5px 1px rgba(50,50,50,.5)}.checkmark-container:hover input~.system-checkmark[data-v-ab2e11d4]{background-color:#fff}.checkmark-container input:checked~.system-checkmark[data-v-ab2e11d4]{background-color:#464646}.system-checkmark-unknown[data-v-ab2e11d4]{background-color:#beb9b9}.system-checkmark[data-v-ab2e11d4]:after{content:"";position:absolute;display:none}.checkmark-container input:checked~.system-checkmark[data-v-ab2e11d4]:after{display:block}.checkmark-container .system-checkmark[data-v-ab2e11d4]:after{left:8px;top:5px;width:6px;height:9px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.interface-address[data-v-ab2e11d4]{font-size:1em}.interface-name[data-v-ab2e11d4]{font-size:.8em;margin-left:15px}.edit-btn[data-v-ab2e11d4]{width:25px;height:25px;border-radius:4px;cursor:pointer;background-color:#464646;box-shadow:0 0 5px 1px rgba(50,50,50,.3)}.edit-btn>img[data-v-ab2e11d4]{width:17px;height:17px;margin:5px;cursor:pointer}.empty-div[data-v-ab2e11d4]{height:50px}', ""])
}, function(e, t, n) {
    "use strict";
    var r = n(51);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".selected-light[data-v-3cb6848a]{color:#fff;background-color:#4c4b4b}.selected-dark[data-v-3cb6848a]{color:#fff;background-color:#3aa1cc}.selected-red[data-v-3cb6848a]{color:#fff;background-color:rgba(183,46,41,.788235)}.selected-2077[data-v-3cb6848a]{color:#000;background-color:#dfd43f}.normal-light[data-v-3cb6848a]{color:#000;background-color:#fff}.normal-dark[data-v-3cb6848a]{color:#fff;background-color:#42424e}.normal-red[data-v-3cb6848a]{color:#fff;background-color:#c28f3d}.normal-2077[data-v-3cb6848a]{color:#fff;background-color:#58482c}.main-light[data-v-3cb6848a]{border-bottom:1px solid #dcdcdc}.main-dark[data-v-3cb6848a]{border-bottom:1px solid #554f4f}.main-red[data-v-3cb6848a]{border-bottom:1px solid rgba(218,20,30,.247059)}.main-2077[data-v-3cb6848a]{border-bottom:1px solid rgba(6,145,180,.521569)}#main-mode-switcher[data-v-3cb6848a]{padding:auto 20px;width:calc(100vw - 170px);height:80px}#main-mode-switcher .btns[data-v-3cb6848a]{height:100%;align-items:center;margin:0 auto;display:flex;max-width:600px;justify-content:space-between}#main-mode-switcher .btns .btn[data-v-3cb6848a]{margin:0;font-weight:500;font-size:1.2em;width:120px;height:40px;text-align:center;line-height:40px;border-radius:6px;box-shadow:1px 1px 5px 2px rgba(70,70,70,.1);cursor:pointer}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(52);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "", ""])
}, function(e) {
    e.exports = require("dns")
}, function(e, t, n) {
    "use strict";
    var r = n(53);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".fake-item-light[data-v-906102ce]{height:45px;background-color:#e3e3e3;box-shadow:none}.fake-item-dark[data-v-906102ce]{height:45px;background-color:#32323f;box-shadow:none}.fake-item-red[data-v-906102ce]{height:45px;background-color:#c28f3d;box-shadow:none}.fake-item-2077[data-v-906102ce]{height:45px;background-color:#043441;box-shadow:none}.fake-section-light[data-v-906102ce]{background-color:#e3e3e3;height:50px;width:300px;margin-top:20px;margin-left:40px}.fake-section-dark[data-v-906102ce]{background-color:#32323f;height:50px;width:300px;margin-top:20px;margin-left:40px}.fake-section-red[data-v-906102ce]{background-color:#c28f3d;height:50px;width:300px;margin-top:20px;margin-left:40px}.fake-section-2077[data-v-906102ce]{background-color:#043441;height:50px;width:300px;margin-top:20px;margin-left:40px}#main-proxy-view[data-v-906102ce]{height:100%;display:flex;flex-direction:column;overflow:hidden}.scroll-view-light[data-v-906102ce]{margin-top:8px;padding-bottom:70px;flex-grow:1;overflow-y:scroll}.scroll-view-light[data-v-906102ce]::-webkit-scrollbar{width:16px}.scroll-view-light[data-v-906102ce]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.scroll-view-light .proxy-item[data-v-906102ce]{margin:4px 6px;display:flex;align-items:center;flex-grow:1}.scroll-view-light .proxy-item .indicator[data-v-906102ce]{width:4px;min-width:4px;background-color:rgba(75,75,75,.185);height:calc(100% - 2px);border-radius:10px;margin-right:4px}.scroll-view-light .proxy-item .info[data-v-906102ce]{height:100%;padding:7px 0;background:rgba(41,41,41,.05);flex-grow:1;display:flex;border-radius:3px;justify-content:space-between;align-items:center}.scroll-view-light .proxy-item .info .left[data-v-906102ce]{flex-grow:1;margin-left:10px}.scroll-view-light .proxy-item .info .left .item-hint[data-v-906102ce]{font-size:12px;margin-top:2px;color:gray}.scroll-view-light .proxy-item .info .time[data-v-906102ce]{min-width:70px;text-align:right;font-size:12px;padding:12px 14px 12px 12px;cursor:pointer}.scroll-view-light .proxy-item .info .offline[data-v-906102ce]{color:#ec0505;font-weight:400}.scroll-view-light .proxy-item .info .online[data-v-906102ce]{color:#41b883}.scroll-view-light .selected .indicator[data-v-906102ce]{background-color:#41b883}.scroll-view-dark[data-v-906102ce]{margin-top:8px;padding-bottom:70px;flex-grow:1;overflow-y:scroll}.scroll-view-dark[data-v-906102ce]::-webkit-scrollbar{width:16px}.scroll-view-dark[data-v-906102ce]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}.scroll-view-dark .proxy-item[data-v-906102ce]{margin:4px 6px;display:flex;align-items:center;flex-grow:1}.scroll-view-dark .proxy-item .indicator[data-v-906102ce]{width:4px;min-width:4px;background-color:hsla(0,0%,78%,.185);height:calc(100% - 2px);border-radius:10px;margin-right:4px}.scroll-view-dark .proxy-item .info[data-v-906102ce]{height:100%;padding:7px 0;background:hsla(0,0%,100%,.05);flex-grow:1;display:flex;border-radius:3px;justify-content:space-between;align-items:center}.scroll-view-dark .proxy-item .info .left[data-v-906102ce]{flex-grow:1;margin-left:10px}.scroll-view-dark .proxy-item .info .left .item-hint[data-v-906102ce]{font-size:12px;margin-top:2px;color:#a7a7a7}.scroll-view-dark .proxy-item .info .time[data-v-906102ce]{min-width:70px;text-align:right;font-size:12px;padding:12px 14px 12px 12px;cursor:pointer}.scroll-view-dark .proxy-item .info .offline[data-v-906102ce]{color:#e70000;font-weight:400}.scroll-view-dark .proxy-item .info .online[data-v-906102ce]{color:#00b300}.scroll-view-dark .selected .indicator[data-v-906102ce]{background-color:#0a0}.scroll-view-red[data-v-906102ce]{margin-top:8px;padding-bottom:70px;flex-grow:1;overflow-y:scroll}.scroll-view-red[data-v-906102ce]::-webkit-scrollbar{width:16px}.scroll-view-red[data-v-906102ce]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}.scroll-view-red .proxy-item[data-v-906102ce]{margin:4px 6px;display:flex;align-items:center;flex-grow:1}.scroll-view-red .proxy-item .indicator[data-v-906102ce]{width:4px;min-width:4px;background-color:#f39908;height:calc(100% - 2px);border-radius:10px;margin-right:4px}.scroll-view-red .proxy-item .info[data-v-906102ce]{height:100%;padding:7px 0;background:#fdc975;flex-grow:1;display:flex;border-radius:3px;justify-content:space-between;align-items:center}.scroll-view-red .proxy-item .info .left[data-v-906102ce]{flex-grow:1;margin-left:10px}.scroll-view-red .proxy-item .info .left .item-hint[data-v-906102ce]{font-size:12px;margin-top:2px;color:#995e00}.scroll-view-red .proxy-item .info .time[data-v-906102ce]{min-width:70px;text-align:right;font-size:12px;padding:12px 14px 12px 12px;cursor:pointer}.scroll-view-red .proxy-item .info .offline[data-v-906102ce]{color:#df0909;font-weight:400}.scroll-view-red .proxy-item .info .online[data-v-906102ce]{color:#16a716}.scroll-view-red .selected .indicator[data-v-906102ce]{background-color:rgba(27,180,6,.788235)}.scroll-view-2077[data-v-906102ce]{margin-top:8px;padding-bottom:70px;flex-grow:1;overflow-y:scroll}.scroll-view-2077[data-v-906102ce]::-webkit-scrollbar{width:16px}.scroll-view-2077[data-v-906102ce]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}.scroll-view-2077 .proxy-item[data-v-906102ce]{margin:4px 6px;display:flex;align-items:center;flex-grow:1}.scroll-view-2077 .proxy-item .indicator[data-v-906102ce]{width:4px;min-width:4px;background-color:rgba(6,49,70,.411);height:calc(100% - 2px);border-radius:10px;margin-right:4px}.scroll-view-2077 .proxy-item .info[data-v-906102ce]{height:100%;padding:7px 0;background:rgba(9,115,141,.917647);flex-grow:1;display:flex;border-radius:3px;justify-content:space-between;align-items:center}.scroll-view-2077 .proxy-item .info .left[data-v-906102ce]{flex-grow:1;margin-left:10px}.scroll-view-2077 .proxy-item .info .left .item-hint[data-v-906102ce]{font-size:12px;margin-top:2px;color:#bbb33f}.scroll-view-2077 .proxy-item .info .time[data-v-906102ce]{min-width:70px;text-align:right;font-size:12px;padding:12px 14px 12px 12px;cursor:pointer}.scroll-view-2077 .proxy-item .info .offline[data-v-906102ce]{color:#ff6565;font-weight:400}.scroll-view-2077 .proxy-item .info .online[data-v-906102ce]{color:#44c444}.scroll-view-2077 .selected .indicator[data-v-906102ce]{background-color:#f8ed53}.proxy-section-light[data-v-906102ce]{font-size:1.2em;font-weight:400;padding:10px;display:flex;align-items:flex-end;justify-content:space-between;cursor:pointer;position:sticky;top:-1px;background-color:#fff}.proxy-section-light[data-v-906102ce]:hover{border-radius:5px;background-color:#f1f1f1;cursor:pointer}.proxy-section-light .proxy-section-right[data-v-906102ce]{display:flex;align-items:flex-end;height:100%;fill:#000}.proxy-section-dark[data-v-906102ce]{font-size:1.2em;font-weight:400;padding:10px;display:flex;align-items:flex-end;justify-content:space-between;cursor:pointer;position:sticky;top:-1px;background-color:#2c2a38}.proxy-section-dark[data-v-906102ce]:hover{border-radius:5px;background-color:#606068;cursor:pointer}.proxy-section-dark .proxy-section-right[data-v-906102ce]{display:flex;align-items:flex-end;height:100%;fill:#fff}.proxy-section-red[data-v-906102ce]{font-size:1.2em;font-weight:400;padding:10px;display:flex;align-items:flex-end;justify-content:space-between;cursor:pointer;position:sticky;top:-1px;background-color:#f8b74f}.proxy-section-red[data-v-906102ce]:hover{border-radius:5px;background-color:#eda94c;cursor:pointer}.proxy-section-red .proxy-section-right[data-v-906102ce]{display:flex;align-items:flex-end;height:100%;fill:#d33928}.proxy-section-2077[data-v-906102ce]{font-size:1.2em;font-weight:400;padding:10px;display:flex;align-items:flex-end;justify-content:space-between;cursor:pointer;position:sticky;top:-1px;background-color:#136377}.proxy-section-2077[data-v-906102ce]:hover{border-radius:5px;background-color:#084a5a;cursor:pointer}.proxy-section-2077 .proxy-section-right[data-v-906102ce]{display:flex;align-items:flex-end;height:100%;fill:#fcec0c}.empty-hint[data-v-906102ce]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;color:hsla(0,0%,56%,.795)}.empty-hint div[data-v-906102ce]:first-child{font-size:22px}.empty-hint div[data-v-906102ce]:last-child{font-size:14px;margin-top:10px}.empty-hint div:last-child span[data-v-906102ce]{color:#008cff}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(54);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".proxy-list[data-v-906102ce]{margin:0 20px 0 30px}.proxy-items[data-v-906102ce]{display:flex;flex-wrap:wrap;justify-content:space-around}.proxy-items>i[data-v-906102ce]{margin:0 6px;flex-grow:1;height:0}.item-name[data-v-906102ce]{font-size:14px;display:flex;align-items:center;overflow:hidden}.proxy-hint[data-v-906102ce]{display:inline;text-overflow:ellipsis;white-space:nowrap}.proxy-hint-loadbalance[data-v-906102ce],.proxy-hint[data-v-906102ce]{font-size:.7em;margin-left:5px;overflow:hidden;padding-bottom:2px}.proxy-item[data-v-906102ce] div,span[data-v-906102ce]{cursor:pointer}.proxy-section-name[data-v-906102ce]{font-size:1.05em;display:flex;align-items:flex-end;max-width:500px}.proxy-section-name-left[data-v-906102ce]{display:flex;align-items:flex-end;flex-shrink:0;height:27px}.proxy-section-test-btn[data-v-906102ce]{cursor:pointer;height:40px;width:30px}.icon[data-v-906102ce]{height:30px;width:30px;padding:5px}.icon[data-v-906102ce]:hover{border-radius:5px;background-color:hsla(0,0%,73%,.5);cursor:pointer}.filter-keyword[data-v-906102ce]{position:fixed;bottom:10px;right:45px;width:150px;height:30px}.filter-keyword input[data-v-906102ce]{width:150px;padding:0 10px;border:none;background-color:#494949;border-radius:5px;height:30px;color:#fff;top:0;right:5px;position:absolute}.filter-keyword input[data-v-906102ce]:focus{outline:none}.filter-keyword div[data-v-906102ce]{width:30px;height:30px;position:absolute;right:0;top:0;display:flex;align-items:center;justify-content:center;background-color:#494949;border-radius:5px}.filter-keyword div img[data-v-906102ce]{height:20px;width:20px}.fall-fade-enter-active[data-v-906102ce]{transition:all .2s ease-in-out}.fall-fade-enter[data-v-906102ce],.fall-fade-leave-to[data-v-906102ce]{transform:translateY(-10px);opacity:0}.move-right-enter-active[data-v-906102ce]{transition:all .2s ease}.move-right-enter[data-v-906102ce],.move-right-leave-to[data-v-906102ce]{transform:scaleX(.1);transform-origin:right}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(55);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-button-view[data-v-f3b3ccf8]{height:26px;width:90px;text-align:center;line-height:26px;background-color:#6777ef;border-radius:1500px;color:#fff;font-size:.78em;display:flex;align-items:center;justify-content:center;cursor:pointer}.main-button-view [data-v-f3b3ccf8]{cursor:pointer}.main-button-view .line[data-v-f3b3ccf8]{display:flex;height:100%;width:100%;justify-content:center;align-items:center}.main-button-view .line .box[data-v-f3b3ccf8]{border-radius:20px;transform:scale(.5);background-color:#b3b3b3}.main-button-view .line .large[data-v-f3b3ccf8]{height:8px;width:8px;margin-left:2px;margin-right:2px}.main-button-view .line .small[data-v-f3b3ccf8]{height:5px;width:5px;margin-left:1px;margin-right:1px}.animation-delay1[data-v-f3b3ccf8]{animation:wave-data-v-f3b3ccf8 1s linear 0s infinite}.animation-delay2[data-v-f3b3ccf8]{animation:wave-data-v-f3b3ccf8 1s linear .2s infinite}.animation-delay3[data-v-f3b3ccf8]{animation:wave-data-v-f3b3ccf8 1s linear .4s infinite}.animation-delay4[data-v-f3b3ccf8]{animation:wave-data-v-f3b3ccf8 1s linear .6s infinite}.animation-delay5[data-v-f3b3ccf8]{animation:wave-data-v-f3b3ccf8 1s linear .8s infinite}@keyframes wave-data-v-f3b3ccf8{0%{background-color:#f8f8f8;transform:scale(1.1)}to{background-color:#adadad;transform:scale(.5)}}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(56);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-provider-view-light[data-v-cabfc7f4]{width:calc(100% - 170px);height:calc(100% - 25px);position:absolute;top:25px;right:0;display:flex;justify-content:center;align-items:center;z-index:10;font-size:16px}.main-provider-view-light .card[data-v-cabfc7f4]{display:flex;flex-direction:column;height:100%;width:100%}.main-provider-view-light .card .header[data-v-cabfc7f4]{min-height:80px;height:80px;border-bottom:1px solid #dcdcdc;background-color:#fff;width:100%}.main-provider-view-light .card .header .buttons[data-v-cabfc7f4]{height:100%;width:100%;display:flex;align-items:center;justify-content:center}.main-provider-view-light .card .header .buttons .btn[data-v-cabfc7f4]{font-size:16px;color:#fff;background-color:#4c4b4b;border-radius:3px;height:35px;padding:0 20px;width:fit-content}.main-provider-view-light .card .header .buttons .btn[data-v-cabfc7f4]:first-child{margin-right:30px}.main-provider-view-light .content[data-v-cabfc7f4]{padding:5px 0;flex-grow:1;display:flex;flex-direction:column;height:100%;width:100%;overflow-y:scroll}.main-provider-view-light .content[data-v-cabfc7f4]::-webkit-scrollbar{width:16px}.main-provider-view-light .content[data-v-cabfc7f4]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.main-provider-view-light .content .title[data-v-cabfc7f4]{margin-top:10px;font-size:16px;text-align:center;padding-bottom:10px;border-bottom:1px solid #dcdcdc}.main-provider-view-light .content .items .provider-item[data-v-cabfc7f4]{padding:7px 35px 7px 45px;border-bottom:1px solid #dcdcdc}.main-provider-view-light .content .items .provider-item .provider-item-main .name-type[data-v-cabfc7f4],.main-provider-view-light .content .items .provider-item .provider-item-main[data-v-cabfc7f4]{display:flex;align-items:center}.main-provider-view-light .content .items .provider-item .provider-item-main .name-type .name[data-v-cabfc7f4]{font-size:16px;max-width:180px;overflow:clip;white-space:nowrap;text-overflow:ellipsis}.main-provider-view-light .content .items .provider-item .provider-item-main .update-hint[data-v-cabfc7f4]{font-size:14px;color:gray}.main-provider-view-light .content .items .provider-item .provider-item-main .error-hint[data-v-cabfc7f4]{color:#ec0505;font-size:12px;max-width:500px;text-overflow:ellipsis;white-space:normal;overflow:hidden}.main-provider-view-light .content .items .provider-item .provider-item-main .empty[data-v-cabfc7f4]{flex-grow:1}.main-provider-view-light .content .items .provider-item .provider-item-main .icon-btn[data-v-cabfc7f4]{width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:3px}.main-provider-view-light .content .items .provider-item .provider-item-main .icon-btn[data-v-cabfc7f4]:hover{background-color:rgba(0,0,0,.123)}.main-provider-view-light .content .items .provider-item .provider-item-main .icon-btn:hover [data-v-cabfc7f4]{cursor:pointer}.main-provider-view-light .content .items .provider-item .provider-item-main .icon-btn .rotating[data-v-cabfc7f4]{animation:downloading-data-v-cabfc7f4 1s infinite;animation-timing-function:linear}.main-provider-view-light .content .items .provider-item .provider-item-main .icon-btn svg[data-v-cabfc7f4]{width:20px;height:20px;fill:#000}.main-provider-view-light .content .items .provider-item .time[data-v-cabfc7f4]{font-size:14px}.main-provider-view-light .content .items .provider-item .proxies[data-v-cabfc7f4]{display:grid;grid-template-columns:repeat(auto-fill,130px);font-size:14px}.main-provider-view-light .content .items .provider-item .proxies .proxy-item[data-v-cabfc7f4]{height:80px}.main-provider-view-dark[data-v-cabfc7f4]{width:calc(100% - 170px);height:calc(100% - 25px);position:absolute;top:25px;right:0;display:flex;justify-content:center;align-items:center;z-index:10;font-size:16px}.main-provider-view-dark .card[data-v-cabfc7f4]{display:flex;flex-direction:column;height:100%;width:100%}.main-provider-view-dark .card .header[data-v-cabfc7f4]{min-height:80px;height:80px;border-bottom:1px solid #554f4f;background-color:#2c2a38;width:100%}.main-provider-view-dark .card .header .buttons[data-v-cabfc7f4]{height:100%;width:100%;display:flex;align-items:center;justify-content:center}.main-provider-view-dark .card .header .buttons .btn[data-v-cabfc7f4]{font-size:16px;color:#fff;background-color:#3aa1cc;border-radius:3px;height:35px;padding:0 20px;width:fit-content}.main-provider-view-dark .card .header .buttons .btn[data-v-cabfc7f4]:first-child{margin-right:30px}.main-provider-view-dark .content[data-v-cabfc7f4]{padding:5px 0;flex-grow:1;display:flex;flex-direction:column;height:100%;width:100%;overflow-y:scroll}.main-provider-view-dark .content[data-v-cabfc7f4]::-webkit-scrollbar{width:16px}.main-provider-view-dark .content[data-v-cabfc7f4]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}.main-provider-view-dark .content .title[data-v-cabfc7f4]{margin-top:10px;font-size:16px;text-align:center;padding-bottom:10px;border-bottom:1px solid #554f4f}.main-provider-view-dark .content .items .provider-item[data-v-cabfc7f4]{padding:7px 35px 7px 45px;border-bottom:1px solid #554f4f}.main-provider-view-dark .content .items .provider-item .provider-item-main .name-type[data-v-cabfc7f4],.main-provider-view-dark .content .items .provider-item .provider-item-main[data-v-cabfc7f4]{display:flex;align-items:center}.main-provider-view-dark .content .items .provider-item .provider-item-main .name-type .name[data-v-cabfc7f4]{font-size:16px;max-width:180px;overflow:clip;white-space:nowrap;text-overflow:ellipsis}.main-provider-view-dark .content .items .provider-item .provider-item-main .update-hint[data-v-cabfc7f4]{font-size:14px;color:#a7a7a7}.main-provider-view-dark .content .items .provider-item .provider-item-main .error-hint[data-v-cabfc7f4]{color:#e70000;font-size:12px;max-width:500px;text-overflow:ellipsis;white-space:normal;overflow:hidden}.main-provider-view-dark .content .items .provider-item .provider-item-main .empty[data-v-cabfc7f4]{flex-grow:1}.main-provider-view-dark .content .items .provider-item .provider-item-main .icon-btn[data-v-cabfc7f4]{width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:3px}.main-provider-view-dark .content .items .provider-item .provider-item-main .icon-btn[data-v-cabfc7f4]:hover{background-color:rgba(0,0,0,.123)}.main-provider-view-dark .content .items .provider-item .provider-item-main .icon-btn:hover [data-v-cabfc7f4]{cursor:pointer}.main-provider-view-dark .content .items .provider-item .provider-item-main .icon-btn .rotating[data-v-cabfc7f4]{animation:downloading-data-v-cabfc7f4 1s infinite;animation-timing-function:linear}.main-provider-view-dark .content .items .provider-item .provider-item-main .icon-btn svg[data-v-cabfc7f4]{width:20px;height:20px;fill:#fff}.main-provider-view-dark .content .items .provider-item .time[data-v-cabfc7f4]{font-size:14px}.main-provider-view-dark .content .items .provider-item .proxies[data-v-cabfc7f4]{display:grid;grid-template-columns:repeat(auto-fill,130px);font-size:14px}.main-provider-view-dark .content .items .provider-item .proxies .proxy-item[data-v-cabfc7f4]{height:80px}.main-provider-view-red[data-v-cabfc7f4]{width:calc(100% - 170px);height:calc(100% - 25px);position:absolute;top:25px;right:0;display:flex;justify-content:center;align-items:center;z-index:10;font-size:16px}.main-provider-view-red .card[data-v-cabfc7f4]{display:flex;flex-direction:column;height:100%;width:100%}.main-provider-view-red .card .header[data-v-cabfc7f4]{min-height:80px;height:80px;border-bottom:1px solid rgba(218,20,30,.247059);background-color:#f8b74f;width:100%}.main-provider-view-red .card .header .buttons[data-v-cabfc7f4]{height:100%;width:100%;display:flex;align-items:center;justify-content:center}.main-provider-view-red .card .header .buttons .btn[data-v-cabfc7f4]{font-size:16px;color:#fff;background-color:rgba(183,46,41,.788235);border-radius:3px;height:35px;padding:0 20px;width:fit-content}.main-provider-view-red .card .header .buttons .btn[data-v-cabfc7f4]:first-child{margin-right:30px}.main-provider-view-red .content[data-v-cabfc7f4]{padding:5px 0;flex-grow:1;display:flex;flex-direction:column;height:100%;width:100%;overflow-y:scroll}.main-provider-view-red .content[data-v-cabfc7f4]::-webkit-scrollbar{width:16px}.main-provider-view-red .content[data-v-cabfc7f4]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}.main-provider-view-red .content .title[data-v-cabfc7f4]{margin-top:10px;font-size:16px;text-align:center;padding-bottom:10px;border-bottom:1px solid rgba(218,20,30,.247059)}.main-provider-view-red .content .items .provider-item[data-v-cabfc7f4]{padding:7px 35px 7px 45px;border-bottom:1px solid rgba(218,20,30,.247059)}.main-provider-view-red .content .items .provider-item .provider-item-main .name-type[data-v-cabfc7f4],.main-provider-view-red .content .items .provider-item .provider-item-main[data-v-cabfc7f4]{display:flex;align-items:center}.main-provider-view-red .content .items .provider-item .provider-item-main .name-type .name[data-v-cabfc7f4]{font-size:16px;max-width:180px;overflow:clip;white-space:nowrap;text-overflow:ellipsis}.main-provider-view-red .content .items .provider-item .provider-item-main .update-hint[data-v-cabfc7f4]{font-size:14px;color:#995e00}.main-provider-view-red .content .items .provider-item .provider-item-main .error-hint[data-v-cabfc7f4]{color:#df0909;font-size:12px;max-width:500px;text-overflow:ellipsis;white-space:normal;overflow:hidden}.main-provider-view-red .content .items .provider-item .provider-item-main .empty[data-v-cabfc7f4]{flex-grow:1}.main-provider-view-red .content .items .provider-item .provider-item-main .icon-btn[data-v-cabfc7f4]{width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:3px}.main-provider-view-red .content .items .provider-item .provider-item-main .icon-btn[data-v-cabfc7f4]:hover{background-color:rgba(0,0,0,.123)}.main-provider-view-red .content .items .provider-item .provider-item-main .icon-btn:hover [data-v-cabfc7f4]{cursor:pointer}.main-provider-view-red .content .items .provider-item .provider-item-main .icon-btn .rotating[data-v-cabfc7f4]{animation:downloading-data-v-cabfc7f4 1s infinite;animation-timing-function:linear}.main-provider-view-red .content .items .provider-item .provider-item-main .icon-btn svg[data-v-cabfc7f4]{width:20px;height:20px;fill:#d33928}.main-provider-view-red .content .items .provider-item .time[data-v-cabfc7f4]{font-size:14px}.main-provider-view-red .content .items .provider-item .proxies[data-v-cabfc7f4]{display:grid;grid-template-columns:repeat(auto-fill,130px);font-size:14px}.main-provider-view-red .content .items .provider-item .proxies .proxy-item[data-v-cabfc7f4]{height:80px}.main-provider-view-2077[data-v-cabfc7f4]{width:calc(100% - 170px);height:calc(100% - 25px);position:absolute;top:25px;right:0;display:flex;justify-content:center;align-items:center;z-index:10;font-size:16px}.main-provider-view-2077 .card[data-v-cabfc7f4]{display:flex;flex-direction:column;height:100%;width:100%}.main-provider-view-2077 .card .header[data-v-cabfc7f4]{min-height:80px;height:80px;border-bottom:1px solid rgba(6,145,180,.521569);background-color:#136377;width:100%}.main-provider-view-2077 .card .header .buttons[data-v-cabfc7f4]{height:100%;width:100%;display:flex;align-items:center;justify-content:center}.main-provider-view-2077 .card .header .buttons .btn[data-v-cabfc7f4]{font-size:16px;color:#000;background-color:#dfd43f;border-radius:3px;height:35px;padding:0 20px;width:fit-content}.main-provider-view-2077 .card .header .buttons .btn[data-v-cabfc7f4]:first-child{margin-right:30px}.main-provider-view-2077 .content[data-v-cabfc7f4]{padding:5px 0;flex-grow:1;display:flex;flex-direction:column;height:100%;width:100%;overflow-y:scroll}.main-provider-view-2077 .content[data-v-cabfc7f4]::-webkit-scrollbar{width:16px}.main-provider-view-2077 .content[data-v-cabfc7f4]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}.main-provider-view-2077 .content .title[data-v-cabfc7f4]{margin-top:10px;font-size:16px;text-align:center;padding-bottom:10px;border-bottom:1px solid rgba(6,145,180,.521569)}.main-provider-view-2077 .content .items .provider-item[data-v-cabfc7f4]{padding:7px 35px 7px 45px;border-bottom:1px solid rgba(6,145,180,.521569)}.main-provider-view-2077 .content .items .provider-item .provider-item-main .name-type[data-v-cabfc7f4],.main-provider-view-2077 .content .items .provider-item .provider-item-main[data-v-cabfc7f4]{display:flex;align-items:center}.main-provider-view-2077 .content .items .provider-item .provider-item-main .name-type .name[data-v-cabfc7f4]{font-size:16px;max-width:180px;overflow:clip;white-space:nowrap;text-overflow:ellipsis}.main-provider-view-2077 .content .items .provider-item .provider-item-main .update-hint[data-v-cabfc7f4]{font-size:14px;color:#bbb33f}.main-provider-view-2077 .content .items .provider-item .provider-item-main .error-hint[data-v-cabfc7f4]{color:#ff6565;font-size:12px;max-width:500px;text-overflow:ellipsis;white-space:normal;overflow:hidden}.main-provider-view-2077 .content .items .provider-item .provider-item-main .empty[data-v-cabfc7f4]{flex-grow:1}.main-provider-view-2077 .content .items .provider-item .provider-item-main .icon-btn[data-v-cabfc7f4]{width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:3px}.main-provider-view-2077 .content .items .provider-item .provider-item-main .icon-btn[data-v-cabfc7f4]:hover{background-color:rgba(0,0,0,.123)}.main-provider-view-2077 .content .items .provider-item .provider-item-main .icon-btn:hover [data-v-cabfc7f4]{cursor:pointer}.main-provider-view-2077 .content .items .provider-item .provider-item-main .icon-btn .rotating[data-v-cabfc7f4]{animation:downloading-data-v-cabfc7f4 1s infinite;animation-timing-function:linear}@keyframes downloading-data-v-cabfc7f4{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.main-provider-view-2077 .content .items .provider-item .provider-item-main .icon-btn svg[data-v-cabfc7f4]{width:20px;height:20px;fill:#fcec0c}.main-provider-view-2077 .content .items .provider-item .time[data-v-cabfc7f4]{font-size:14px}.main-provider-view-2077 .content .items .provider-item .proxies[data-v-cabfc7f4]{display:grid;grid-template-columns:repeat(auto-fill,130px);font-size:14px}.main-provider-view-2077 .content .items .provider-item .proxies .proxy-item[data-v-cabfc7f4]{height:80px}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(57);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-log-view-light[data-v-a16b8bd0]{height:100%;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between}.main-log-view-light .title[data-v-a16b8bd0]{padding:0 20px;font-size:20px;height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #dcdcdc}.main-log-view-light .title .text .hint[data-v-a16b8bd0]{font-size:16px;font-weight:400}.main-log-view-dark[data-v-a16b8bd0]{height:100%;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between}.main-log-view-dark .title[data-v-a16b8bd0]{padding:0 20px;font-size:20px;height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #554f4f}.main-log-view-dark .title .text .hint[data-v-a16b8bd0]{font-size:16px;font-weight:400}.main-log-view-red[data-v-a16b8bd0]{height:100%;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between}.main-log-view-red .title[data-v-a16b8bd0]{padding:0 20px;font-size:20px;height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(218,20,30,.247059)}.main-log-view-red .title .text .hint[data-v-a16b8bd0]{font-size:16px;font-weight:400}.main-log-view-2077[data-v-a16b8bd0]{height:100%;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between}.main-log-view-2077 .title[data-v-a16b8bd0]{padding:0 20px;font-size:20px;height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(6,145,180,.521569)}.main-log-view-2077 .title .text .hint[data-v-a16b8bd0]{font-size:16px;font-weight:400}.log-item-light[data-v-a16b8bd0]{border-bottom:1px solid rgba(50,50,50,.1)}.log-item-dark[data-v-a16b8bd0],.log-item-light[data-v-a16b8bd0]{display:flex;justify-content:space-between;flex-direction:column;padding:5px 20px}.log-item-dark[data-v-a16b8bd0]{border-bottom:1px solid #494242}.log-item-red[data-v-a16b8bd0]{border-bottom:1px solid rgba(218,20,30,.247059)}.log-item-2077[data-v-a16b8bd0],.log-item-red[data-v-a16b8bd0]{display:flex;justify-content:space-between;flex-direction:column;padding:5px 20px}.log-item-2077[data-v-a16b8bd0]{border-bottom:1px solid #494242}.rule-light[data-v-a16b8bd0]{font-size:14px;color:rgba(50,50,50,.7);display:flex;align-items:center;flex-wrap:wrap}.rule-light div[data-v-a16b8bd0]{margin-right:5px}.rule-light .payload[data-v-a16b8bd0]{color:#045c85}.rule-dark[data-v-a16b8bd0]{font-size:14px;color:hsla(0,0%,88%,.712);display:flex;align-items:center;flex-wrap:wrap}.rule-dark div[data-v-a16b8bd0]{margin-right:5px}.rule-dark .payload[data-v-a16b8bd0]{color:#5fbeca}.rule-red[data-v-a16b8bd0]{font-size:14px;color:#3f3f3f;display:flex;align-items:center;flex-wrap:wrap}.rule-red div[data-v-a16b8bd0]{margin-right:5px}.rule-red .payload[data-v-a16b8bd0]{color:#0d508f}.rule-2077[data-v-a16b8bd0]{font-size:14px;color:hsla(0,0%,88%,.712);display:flex;align-items:center;flex-wrap:wrap}.rule-2077 div[data-v-a16b8bd0]{margin-right:5px}.rule-2077 .payload[data-v-a16b8bd0]{color:#5fbeca}.log-list-light[data-v-a16b8bd0]{width:calc(100% - 0px);height:calc(100% - 80px);overflow-y:scroll}.log-list-light[data-v-a16b8bd0]::-webkit-scrollbar{width:16px}.log-list-light[data-v-a16b8bd0]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.log-list-light .empty-list[data-v-a16b8bd0]{font-size:18px;color:gray;width:100%;height:100%;display:flex;align-items:center;flex-direction:column;justify-content:center}.log-list-light .empty-list div[data-v-a16b8bd0]:last-child{font-size:14px}.log-list-dark[data-v-a16b8bd0]{width:calc(100% - 0px);height:calc(100% - 80px);overflow-y:scroll}.log-list-dark[data-v-a16b8bd0]::-webkit-scrollbar{width:16px}.log-list-dark[data-v-a16b8bd0]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}.log-list-dark .empty-list[data-v-a16b8bd0]{font-size:18px;color:gray;width:100%;height:100%;display:flex;align-items:center;flex-direction:column;justify-content:center}.log-list-dark .empty-list div[data-v-a16b8bd0]:last-child{font-size:14px}.log-list-red[data-v-a16b8bd0]{width:calc(100% - 0px);height:calc(100% - 80px);overflow-y:scroll}.log-list-red[data-v-a16b8bd0]::-webkit-scrollbar{width:16px}.log-list-red[data-v-a16b8bd0]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}.log-list-red .empty-list[data-v-a16b8bd0]{font-size:18px;color:gray;width:100%;height:100%;display:flex;align-items:center;flex-direction:column;justify-content:center}.log-list-red .empty-list div[data-v-a16b8bd0]:last-child{font-size:14px}.log-list-2077[data-v-a16b8bd0]{width:calc(100% - 0px);height:calc(100% - 80px);overflow-y:scroll}.log-list-2077[data-v-a16b8bd0]::-webkit-scrollbar{width:16px}.log-list-2077[data-v-a16b8bd0]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}.log-list-2077 .empty-list[data-v-a16b8bd0]{font-size:18px;color:gray;width:100%;height:100%;display:flex;align-items:center;flex-direction:column;justify-content:center}.log-list-2077 .empty-list div[data-v-a16b8bd0]:last-child{font-size:14px}.url[data-v-a16b8bd0]{word-break:break-all;white-space:normal;display:flex;flex-direction:column;flex-grow:1}.url .name[data-v-a16b8bd0]{font-size:16px}.url div[data-v-a16b8bd0]{margin-right:5px}.proxy-name[data-v-a16b8bd0]{font-size:16px;margin:auto 0 auto 20px;min-width:50%;text-align:right}.left[data-v-a16b8bd0]{display:flex}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(58);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".warning[data-v-a16b8bd0]{color:red}.btns[data-v-a16b8bd0]{display:flex;width:150px;justify-content:space-between}.button[data-v-a16b8bd0]{font-size:.8em;height:30px;line-height:30px;color:#fff;width:70px;text-align:center;border-radius:3px;cursor:pointer}.button-on[data-v-a16b8bd0]{background-color:rgba(14,151,185,.959)}.button-off[data-v-a16b8bd0]{background-color:rgba(243,61,61,.801)}.button-clear[data-v-a16b8bd0]{background-color:rgba(23,156,6,.904)}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(59);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-light[data-v-8a057c1e]{position:fixed;left:170px;top:30px;width:calc(100vw - 170px);height:100%;background-color:#fff;padding:10px 30px;overflow-y:scroll}.main-light[data-v-8a057c1e]::-webkit-scrollbar{width:16px}.main-light[data-v-8a057c1e]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.main-light input[data-v-8a057c1e]{color:#000;background-color:#fff}.main-dark[data-v-8a057c1e]{position:fixed;left:170px;top:30px;width:calc(100vw - 170px);height:100%;background-color:#2c2a38;padding:10px 30px;overflow-y:scroll}.main-dark[data-v-8a057c1e]::-webkit-scrollbar{width:16px}.main-dark[data-v-8a057c1e]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}.main-dark input[data-v-8a057c1e]{color:#fff;background-color:#2c2a38}.main-red[data-v-8a057c1e]{position:fixed;left:170px;top:30px;width:calc(100vw - 170px);height:100%;background-color:#f8b74f;padding:10px 30px;overflow-y:scroll}.main-red[data-v-8a057c1e]::-webkit-scrollbar{width:16px}.main-red[data-v-8a057c1e]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}.main-red input[data-v-8a057c1e]{color:#d33928;background-color:#f8b74f}.main-2077[data-v-8a057c1e]{position:fixed;left:170px;top:30px;width:calc(100vw - 170px);height:100%;background-color:#136377;padding:10px 30px;overflow-y:scroll}.main-2077[data-v-8a057c1e]::-webkit-scrollbar{width:16px}.main-2077[data-v-8a057c1e]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}.main-2077 input[data-v-8a057c1e]{color:#fcec0c;background-color:#136377}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(60);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "input[data-v-8a057c1e]{margin:5px 0;border:none;font-size:1.1em;border-bottom:2px solid rgba(61,182,164,.3)}input[type=checkbox][data-v-8a057c1e],input[type=radio][data-v-8a057c1e]{height:20px;width:20px;vertical-align:middle;margin-right:5px}label[data-v-8a057c1e]{font-size:1.1em;vertical-align:middle}input[data-v-8a057c1e]:focus{outline:none}.input-view[data-v-8a057c1e]{display:flex;flex-direction:column;justify-content:space-between}.cipher-list[data-v-8a057c1e]{display:grid;grid-template-columns:repeat(2,1fr)}.ss-list[data-v-8a057c1e],.vmess-list[data-v-8a057c1e]{display:flex;flex-direction:column}.group-type-list[data-v-8a057c1e],.proxy-type-list[data-v-8a057c1e]{display:flex;justify-content:flex-start}.group-type-list>div[data-v-8a057c1e],.proxy-type-list>div[data-v-8a057c1e]{margin-right:30px}.btns[data-v-8a057c1e]{margin-top:20px;display:flex;justify-content:space-around}.btn[data-v-8a057c1e]{padding:5px 10px;font-size:1.1em;text-align:center;width:100px;border-radius:4px}.cancel[data-v-8a057c1e]{background-color:#c0c0c0c0}.confirm[data-v-8a057c1e]{background-color:#375df3;color:#fff}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(61);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-config-view-light[data-v-b5438d0a]{height:100%;position:fixed}.main-config-view-light .proxy-group[data-v-b5438d0a]{flex:1;overflow-y:scroll;padding:0 20px 20px 15px}.main-config-view-light .proxy-group[data-v-b5438d0a]::-webkit-scrollbar{width:16px}.main-config-view-light .proxy-group[data-v-b5438d0a]::-webkit-scrollbar-thumb{background-color:rgba(101,81,122,.7);border-radius:100px;border:3px solid #fff}.main-config-view-light .proxy[data-v-b5438d0a]{flex:1;overflow-y:scroll;direction:rtl;padding:0 15px 20px 20px}.main-config-view-light .proxy[data-v-b5438d0a]::-webkit-scrollbar{width:16px}.main-config-view-light .proxy[data-v-b5438d0a]::-webkit-scrollbar-thumb{background-color:rgba(55,57,72,.7);border-radius:100px;border:3px solid #fff}.main-config-view-dark[data-v-b5438d0a]{height:100%;position:fixed}.main-config-view-dark .proxy-group[data-v-b5438d0a]{flex:1;overflow-y:scroll;padding:0 20px 20px 15px}.main-config-view-dark .proxy-group[data-v-b5438d0a]::-webkit-scrollbar{width:16px}.main-config-view-dark .proxy-group[data-v-b5438d0a]::-webkit-scrollbar-thumb{background-color:rgba(101,81,122,.7);border-radius:100px;border:3px solid #2c2a38}.main-config-view-dark .proxy[data-v-b5438d0a]{flex:1;overflow-y:scroll;direction:rtl;padding:0 15px 20px 20px}.main-config-view-dark .proxy[data-v-b5438d0a]::-webkit-scrollbar{width:16px}.main-config-view-dark .proxy[data-v-b5438d0a]::-webkit-scrollbar-thumb{background-color:rgba(55,57,72,.7);border-radius:100px;border:3px solid #2c2a38}.main-config-view-red[data-v-b5438d0a]{height:100%;position:fixed}.main-config-view-red .proxy-group[data-v-b5438d0a]{flex:1;overflow-y:scroll;padding:0 20px 20px 15px}.main-config-view-red .proxy-group[data-v-b5438d0a]::-webkit-scrollbar{width:16px}.main-config-view-red .proxy-group[data-v-b5438d0a]::-webkit-scrollbar-thumb{background-color:rgba(101,81,122,.7);border-radius:100px;border:3px solid #f8b74f}.main-config-view-red .proxy[data-v-b5438d0a]{flex:1;overflow-y:scroll;direction:rtl;padding:0 15px 20px 20px}.main-config-view-red .proxy[data-v-b5438d0a]::-webkit-scrollbar{width:16px}.main-config-view-red .proxy[data-v-b5438d0a]::-webkit-scrollbar-thumb{background-color:rgba(55,57,72,.7);border-radius:100px;border:3px solid #f8b74f}.main-config-view-2077[data-v-b5438d0a]{height:100%;position:fixed}.main-config-view-2077 .proxy-group[data-v-b5438d0a]{flex:1;overflow-y:scroll;padding:0 20px 20px 15px}.main-config-view-2077 .proxy-group[data-v-b5438d0a]::-webkit-scrollbar{width:16px}.main-config-view-2077 .proxy-group[data-v-b5438d0a]::-webkit-scrollbar-thumb{background-color:rgba(101,81,122,.7);border-radius:100px;border:3px solid #136377}.main-config-view-2077 .proxy[data-v-b5438d0a]{flex:1;overflow-y:scroll;direction:rtl;padding:0 15px 20px 20px}.main-config-view-2077 .proxy[data-v-b5438d0a]::-webkit-scrollbar{width:16px}.main-config-view-2077 .proxy[data-v-b5438d0a]::-webkit-scrollbar-thumb{background-color:rgba(55,57,72,.7);border-radius:100px;border:3px solid #136377}.dragArea[data-v-b5438d0a]{min-height:1px}.dragArea>[data-v-b5438d0a]{-webkit-user-drag:element}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(62);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".floating[data-v-b5438d0a]{position:fixed;left:170px;height:60px;width:calc(100vw - 170px);display:flex;justify-content:space-between;padding:0 50px 0 40px;align-items:center;box-shadow:2px 2px 4px 1px rgba(50,50,50,.2)}.floating-right[data-v-b5438d0a]{display:flex;justify-content:flex-end}.hint[data-v-b5438d0a]{font-size:1.1em}.main-btn[data-v-b5438d0a]{cursor:pointer;margin-left:20px;box-shadow:0 0 4px 1px rgba(50,50,50,.2);text-align:center;padding:5px 0;width:80px;border-radius:5px;color:#fff}.reload[data-v-b5438d0a]{background-color:#c7ca10}.save[data-v-b5438d0a]{background-color:#31a7e3}.drag[data-v-b5438d0a]{display:flex;padding:0 0 20px;margin-top:60px;left:20vw;height:calc(100% - 70px);width:calc(100vw - 170px);max-width:900px}.proxy>div[data-v-b5438d0a],.proxy>draggable[data-v-b5438d0a]{direction:ltr}.section-title[data-v-b5438d0a]{display:flex;justify-content:space-between;align-items:center;margin:20px 0 0;font-size:.8em}img[data-v-b5438d0a]{width:20px;height:20px;margin-left:10px;cursor:pointer}.add-icon[data-v-b5438d0a]{background-color:#677a94;border-radius:5px;color:#fff;font-size:.9em;letter-spacing:1px;padding:3px 10px;cursor:pointer;box-shadow:0 0 4px 1px rgba(50,50,50,.2)}.left-item[data-v-b5438d0a]{background-color:#373948}.right-item[data-v-b5438d0a]{background-color:#65517a}.group-type[data-v-b5438d0a]{font-size:.7em}.proxy-item[data-v-b5438d0a]{opacity:.8;cursor:pointer;font-size:1em;padding:5px 10px;margin:10px 0;display:flex;color:#fff;border-radius:5px;justify-content:space-between;align-items:center;box-shadow:0 0 4px 1px rgba(50,50,50,.2)}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(63);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".model-title-2077[data-v-3efdfdda],.model-title-dark[data-v-3efdfdda],.model-title-light[data-v-3efdfdda],.model-title-red[data-v-3efdfdda]{display:flex;font-size:1.2em;justify-content:space-between}.modal-container-light[data-v-3efdfdda]{width:500px;margin:0 auto;padding:20px 30px;background-color:#fff;border-radius:2px;box-shadow:0 2px 8px rgba(0,0,0,.33);transition:all .3s ease}.modal-container-light input[data-v-3efdfdda]{color:#000;background-color:#fff}.modal-container-dark[data-v-3efdfdda]{width:500px;margin:0 auto;padding:20px 30px;background-color:#2c2a38;border-radius:2px;box-shadow:0 2px 8px rgba(0,0,0,.33);transition:all .3s ease}.modal-container-dark input[data-v-3efdfdda]{color:#fff;background-color:#2c2a38}.modal-container-red[data-v-3efdfdda]{width:500px;margin:0 auto;padding:20px 30px;background-color:#f8b74f;border-radius:2px;box-shadow:0 2px 8px rgba(0,0,0,.33);transition:all .3s ease}.modal-container-red input[data-v-3efdfdda]{color:#d33928;background-color:#f8b74f}.modal-container-2077[data-v-3efdfdda]{width:500px;margin:0 auto;padding:20px 30px;background-color:#136377;border-radius:2px;box-shadow:0 2px 8px rgba(0,0,0,.33);transition:all .3s ease}.modal-container-2077 input[data-v-3efdfdda]{color:#fcec0c;background-color:#136377}.scroll-view-light[data-v-3efdfdda]{margin-top:20px;max-height:400px;padding:0 10px;overflow-y:scroll}.scroll-view-light[data-v-3efdfdda]::-webkit-scrollbar{width:16px}.scroll-view-light[data-v-3efdfdda]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.scroll-view-dark[data-v-3efdfdda]{margin-top:20px;max-height:400px;padding:0 10px;overflow-y:scroll}.scroll-view-dark[data-v-3efdfdda]::-webkit-scrollbar{width:16px}.scroll-view-dark[data-v-3efdfdda]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}.scroll-view-red[data-v-3efdfdda]{margin-top:20px;max-height:400px;padding:0 10px;overflow-y:scroll}.scroll-view-red[data-v-3efdfdda]::-webkit-scrollbar{width:16px}.scroll-view-red[data-v-3efdfdda]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}.scroll-view-2077[data-v-3efdfdda]{margin-top:20px;max-height:400px;padding:0 10px;overflow-y:scroll}.scroll-view-2077[data-v-3efdfdda]::-webkit-scrollbar{width:16px}.scroll-view-2077[data-v-3efdfdda]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(64);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".modal-mask[data-v-3efdfdda]{position:fixed;z-index:9998;top:0;left:170px;width:calc(100vw - 170px);height:100vh;background-color:rgba(0,0,0,.5);display:table;transition:opacity .3s ease}.modal-wrapper[data-v-3efdfdda]{display:table-cell;vertical-align:middle}.modal-header h3[data-v-3efdfdda]{margin-top:0;color:#42b983}.modal-body[data-v-3efdfdda]{margin:20px 0}.modal-default-button[data-v-3efdfdda]{float:right}.modal-enter[data-v-3efdfdda],.modal-leave-active[data-v-3efdfdda]{opacity:0}.modal-enter .modal-container[data-v-3efdfdda],.modal-leave-active .modal-container[data-v-3efdfdda]{-webkit-transform:scale(1.1);transform:scale(1.1)}input[data-v-3efdfdda]:focus{outline:none}input[data-v-3efdfdda]{height:30px;border:none;width:100%;font-size:1.3em;border-bottom:2px solid rgba(61,182,164,.3)}.rule-type-group[data-v-3efdfdda]{display:grid;grid-template-columns:repeat(2,1fr);grid-row-gap:10px;grid-column-gap:10px;grid-auto-rows:minmax(30px,auto)}.rule-type-item[data-v-3efdfdda]{text-align:center;line-height:30px;border-radius:5px;color:#fff;padding:5px 10px;background-color:rgba(101,81,122,.6)}.rule-type-selected[data-v-3efdfdda]{background-color:#65517a}.rule-proxy-group[data-v-3efdfdda]{margin-bottom:60px;display:grid;grid-template-columns:repeat(1,1fr);grid-row-gap:10px;grid-column-gap:10px;grid-auto-rows:minmax(30px,auto)}.rule-proxy-item[data-v-3efdfdda]{text-align:center;line-height:30px;border-radius:5px;color:#fff;padding:5px 10px;background-color:rgba(55,57,72,.6)}.rule-proxy-selected[data-v-3efdfdda]{background-color:#373948}.rule-section-title[data-v-3efdfdda]{font-size:1em;color:#a6a5a4;margin-top:10px;margin-bottom:5px}.rule-floating-btns[data-v-3efdfdda]{right:calc(80vw - 585px);bottom:calc(100vh - 450px);display:flex}.rule-floating-btns>div[data-v-3efdfdda]{font-size:.8em;width:80px;height:35px;margin-left:10px;line-height:50px;text-align:center;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:3px;color:#fff}.rule-floating-cancel[data-v-3efdfdda]{background-color:#41b883}.rule-floating-ok[data-v-3efdfdda]{background-color:#3a56c5}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(65);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".rule-light[data-v-40ae76fc]{font-size:13px;color:rgba(50,50,50,.7)}.rule-dark[data-v-40ae76fc]{font-size:13px;color:hsla(0,0%,88%,.712)}.rule-red[data-v-40ae76fc]{font-size:13px;color:#3f3f3f}.rule-2077[data-v-40ae76fc]{font-size:13px;color:hsla(0,0%,88%,.712)}.log-item-light[data-v-40ae76fc]{border-bottom:1px solid rgba(50,50,50,.1)}.log-item-dark[data-v-40ae76fc],.log-item-light[data-v-40ae76fc]{display:flex;justify-content:space-between;align-items:center;padding:5px 20px}.log-item-dark[data-v-40ae76fc]{border-bottom:1px solid #494242}.log-item-red[data-v-40ae76fc]{border-bottom:1px solid rgba(218,20,30,.247059)}.log-item-2077[data-v-40ae76fc],.log-item-red[data-v-40ae76fc]{display:flex;justify-content:space-between;align-items:center;padding:5px 20px}.log-item-2077[data-v-40ae76fc]{border-bottom:1px solid #494242}.log-list-light[data-v-40ae76fc]{width:calc(100% - 0px);border:0 solid rgba(50,50,50,.2);height:calc(100% - 100px);border-style:dashed;padding:10px 20px;overflow-y:scroll}.log-list-light[data-v-40ae76fc]::-webkit-scrollbar{width:16px}.log-list-light[data-v-40ae76fc]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.log-list-dark[data-v-40ae76fc]{width:calc(100% - 0px);border:0 solid rgba(50,50,50,.2);height:calc(100% - 100px);border-style:dashed;padding:10px 20px;overflow-y:scroll}.log-list-dark[data-v-40ae76fc]::-webkit-scrollbar{width:16px}.log-list-dark[data-v-40ae76fc]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}.log-list-red[data-v-40ae76fc]{width:calc(100% - 0px);border:0 solid rgba(50,50,50,.2);height:calc(100% - 100px);border-style:dashed;padding:10px 20px;overflow-y:scroll}.log-list-red[data-v-40ae76fc]::-webkit-scrollbar{width:16px}.log-list-red[data-v-40ae76fc]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}.log-list-2077[data-v-40ae76fc]{width:calc(100% - 0px);border:0 solid rgba(50,50,50,.2);height:calc(100% - 100px);border-style:dashed;padding:10px 20px;overflow-y:scroll}.log-list-2077[data-v-40ae76fc]::-webkit-scrollbar{width:16px}.log-list-2077[data-v-40ae76fc]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(66);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "#main-log-view[data-v-40ae76fc]{height:100%;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between}.icon[data-v-40ae76fc]{width:22px;height:22px;cursor:pointer;margin-left:10px}.emoji-name[data-v-40ae76fc],.header[data-v-40ae76fc]{display:flex;align-items:center}.header[data-v-40ae76fc]{justify-content:space-between;padding:0 50px 0 40px;height:60px}.header-btns[data-v-40ae76fc]{display:flex;justify-content:flex-end}.filter-view[data-v-40ae76fc]{width:calc(100vw - 170px);height:50px}.filter-view input[data-v-40ae76fc]{margin:0 40px 10px;cursor:text;width:calc(100vw - 250px);height:40px;padding:0 20px;border:none;background-color:#eee;border-radius:5px;font-size:1.1em}.filter-view input[data-v-40ae76fc]:focus{outline:none}.btn[data-v-40ae76fc]{cursor:pointer;box-shadow:0 0 4px 1px rgba(50,50,50,.2);margin-left:20px;width:80px;text-align:center;padding:5px 10px;border-radius:5px;color:#fff}.btn-add[data-v-40ae76fc]{background-color:#31a7e3}.btn-save[data-v-40ae76fc]{background-color:#41b883}.btn-back[data-v-40ae76fc]{background-color:#e0dd22}.title[data-v-40ae76fc]{font-size:1.1em;margin-bottom:0}.log-item[data-v-40ae76fc]{display:flex;justify-content:space-between;align-items:center;padding:5px 20px;width:100%;border-bottom:1px solid rgba(50,50,50,.1)}.left[data-v-40ae76fc]{flex-grow:1;padding-right:40px;overflow:hidden}.right-main[data-v-40ae76fc]{display:flex;align-items:center}img[data-v-40ae76fc]{margin-left:10px;width:25px;height:25px}.url[data-v-40ae76fc]{font-size:18px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.rule-set[data-v-40ae76fc]{color:#ff5e00}.right[data-v-40ae76fc]{font-size:1em;padding:5px 10px;border-radius:4px;color:#fff;opacity:.8;box-shadow:0 0 4px 1px rgba(50,50,50,.2)}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(67);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".qrcode-view-main[data-v-7ba0992e]{position:fixed;left:170px;top:25px;height:100%;width:calc(100vw - 170px);display:flex;justify-content:center;align-items:center;background-color:rgba(50,50,50,.6)}.qrcode-view-main .content[data-v-7ba0992e]{width:250px;background-color:#fff;box-shadow:0 0 10px 3px hsla(0,0%,5%,.164);border-radius:2px;padding:10px 10px 20px;display:flex;flex-direction:column;justify-content:space-between;align-items:center}.qrcode-view-main .content img[data-v-7ba0992e]{width:230px;height:230px}.qrcode-view-main .content .url[data-v-7ba0992e]{font-size:12px;width:200px;overflow-wrap:anywhere;text-decoration:underline;cursor:pointer;color:#0f7bd3}.qrcode-view-main .content .btn[data-v-7ba0992e]{margin-top:10px;height:45px;color:#fff;cursor:pointer;line-height:45px;text-align:center;background-color:#7e7b7b;border-radius:3px;padding-left:10px;padding-right:10px;font-size:.85em;box-shadow:0 2px 20px 2px rgba(50,50,50,.1);width:200px}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(68);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".card-light[data-v-4ae55cfc]{background-color:#fff;border-bottom:1px solid #dcdcdc}.card-dark[data-v-4ae55cfc],.card-light[data-v-4ae55cfc]{position:fixed;padding:0 35px;height:80px;width:calc(100vw - 170px);display:flex;justify-content:space-between}.card-dark[data-v-4ae55cfc]{background-color:#2c2a38;border-bottom:1px solid #554f4f}.card-red[data-v-4ae55cfc]{background-color:#f8b74f;border-bottom:1px solid rgba(218,20,30,.247059)}.card-2077[data-v-4ae55cfc],.card-red[data-v-4ae55cfc]{position:fixed;padding:0 35px;height:80px;width:calc(100vw - 170px);display:flex;justify-content:space-between}.card-2077[data-v-4ae55cfc]{background-color:#136377;border-bottom:1px solid rgba(6,145,180,.521569)}.list-item-light[data-v-4ae55cfc]{background-color:#fff;margin:4px 6px;display:flex;justify-content:space-between;position:relative;align-items:center;width:550px;flex-grow:1}.list-item-light .item-subinfo[data-v-4ae55cfc]{font-size:12px;color:gray}.list-item-light .indicator[data-v-4ae55cfc]{margin-right:4px;width:4px;height:calc(100% - 4px);border-radius:10px;background-color:rgba(75,75,75,.185)}.list-item-light .item-info[data-v-4ae55cfc]{padding:6px 10px;background-color:rgba(41,41,41,.05);display:flex;justify-content:space-between;align-items:center;flex-grow:1;max-width:calc(100% - 8px);border-radius:3px;height:100%}.list-item-light .item-info .item-name[data-v-4ae55cfc]{cursor:pointer;margin-left:5px;flex-grow:1;width:calc(100% - 290px)}.list-item-light .item-info .item-name .item-name-bottom[data-v-4ae55cfc]{font-size:14px;cursor:pointer;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:gray}.list-item-light .item-info .item-edit-zone[data-v-4ae55cfc]{width:270px;display:flex;justify-content:space-between}.list-item-light .item-icon[data-v-4ae55cfc]{width:30px;height:30px;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:background-color .3s;cursor:pointer}.list-item-light .item-icon [data-v-4ae55cfc]{cursor:pointer}.list-item-light .item-icon[data-v-4ae55cfc]:hover{background-color:hsla(0,0%,74%,.534)}.list-item-light .item-icon>svg[data-v-4ae55cfc]{width:18px;height:18px;fill:#000}.list-item-light .item-disabled[data-v-4ae55cfc]{cursor:not-allowed}.list-item-light .item-disabled>svg[data-v-4ae55cfc]{fill:gray}.list-item-dark[data-v-4ae55cfc]{background-color:#2c2a38;margin:4px 6px;display:flex;justify-content:space-between;position:relative;align-items:center;width:550px;flex-grow:1}.list-item-dark .item-subinfo[data-v-4ae55cfc]{font-size:12px;color:#a7a7a7}.list-item-dark .indicator[data-v-4ae55cfc]{margin-right:4px;width:4px;height:calc(100% - 4px);border-radius:10px;background-color:hsla(0,0%,78%,.185)}.list-item-dark .item-info[data-v-4ae55cfc]{padding:6px 10px;background-color:hsla(0,0%,100%,.05);display:flex;justify-content:space-between;align-items:center;flex-grow:1;max-width:calc(100% - 8px);border-radius:3px;height:100%}.list-item-dark .item-info .item-name[data-v-4ae55cfc]{cursor:pointer;margin-left:5px;flex-grow:1;width:calc(100% - 290px)}.list-item-dark .item-info .item-name .item-name-bottom[data-v-4ae55cfc]{font-size:14px;cursor:pointer;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:#a7a7a7}.list-item-dark .item-info .item-edit-zone[data-v-4ae55cfc]{width:270px;display:flex;justify-content:space-between}.list-item-dark .item-icon[data-v-4ae55cfc]{width:30px;height:30px;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:background-color .3s;cursor:pointer}.list-item-dark .item-icon [data-v-4ae55cfc]{cursor:pointer}.list-item-dark .item-icon[data-v-4ae55cfc]:hover{background-color:hsla(0,0%,74%,.534)}.list-item-dark .item-icon>svg[data-v-4ae55cfc]{width:18px;height:18px;fill:#fff}.list-item-dark .item-disabled[data-v-4ae55cfc]{cursor:not-allowed}.list-item-dark .item-disabled>svg[data-v-4ae55cfc]{fill:gray}.list-item-red[data-v-4ae55cfc]{background-color:#f8b74f;margin:4px 6px;display:flex;justify-content:space-between;position:relative;align-items:center;width:550px;flex-grow:1}.list-item-red .item-subinfo[data-v-4ae55cfc]{font-size:12px;color:#995e00}.list-item-red .indicator[data-v-4ae55cfc]{margin-right:4px;width:4px;height:calc(100% - 4px);border-radius:10px;background-color:#f39908}.list-item-red .item-info[data-v-4ae55cfc]{padding:6px 10px;background-color:#fdc975;display:flex;justify-content:space-between;align-items:center;flex-grow:1;max-width:calc(100% - 8px);border-radius:3px;height:100%}.list-item-red .item-info .item-name[data-v-4ae55cfc]{cursor:pointer;margin-left:5px;flex-grow:1;width:calc(100% - 290px)}.list-item-red .item-info .item-name .item-name-bottom[data-v-4ae55cfc]{font-size:14px;cursor:pointer;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:#995e00}.list-item-red .item-info .item-edit-zone[data-v-4ae55cfc]{width:270px;display:flex;justify-content:space-between}.list-item-red .item-icon[data-v-4ae55cfc]{width:30px;height:30px;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:background-color .3s;cursor:pointer}.list-item-red .item-icon [data-v-4ae55cfc]{cursor:pointer}.list-item-red .item-icon[data-v-4ae55cfc]:hover{background-color:hsla(0,0%,74%,.534)}.list-item-red .item-icon>svg[data-v-4ae55cfc]{width:18px;height:18px;fill:#d33928}.list-item-red .item-disabled[data-v-4ae55cfc]{cursor:not-allowed}.list-item-red .item-disabled>svg[data-v-4ae55cfc]{fill:gray}.list-item-2077[data-v-4ae55cfc]{background-color:#136377;margin:4px 6px;display:flex;justify-content:space-between;position:relative;align-items:center;width:550px;flex-grow:1}.list-item-2077 .item-subinfo[data-v-4ae55cfc]{font-size:12px;color:#bbb33f}.list-item-2077 .indicator[data-v-4ae55cfc]{margin-right:4px;width:4px;height:calc(100% - 4px);border-radius:10px;background-color:rgba(6,49,70,.411)}.list-item-2077 .item-info[data-v-4ae55cfc]{padding:6px 10px;background-color:rgba(9,115,141,.917647);display:flex;justify-content:space-between;align-items:center;flex-grow:1;max-width:calc(100% - 8px);border-radius:3px;height:100%}.list-item-2077 .item-info .item-name[data-v-4ae55cfc]{cursor:pointer;margin-left:5px;flex-grow:1;width:calc(100% - 290px)}.list-item-2077 .item-info .item-name .item-name-bottom[data-v-4ae55cfc]{font-size:14px;cursor:pointer;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:#bbb33f}.list-item-2077 .item-info .item-edit-zone[data-v-4ae55cfc]{width:270px;display:flex;justify-content:space-between}.list-item-2077 .item-icon[data-v-4ae55cfc]{width:30px;height:30px;border-radius:5px;display:flex;align-items:center;justify-content:center;transition:background-color .3s;cursor:pointer}.list-item-2077 .item-icon [data-v-4ae55cfc]{cursor:pointer}.list-item-2077 .item-icon[data-v-4ae55cfc]:hover{background-color:hsla(0,0%,74%,.534)}.list-item-2077 .item-icon>svg[data-v-4ae55cfc]{width:18px;height:18px;fill:#fcec0c}.list-item-2077 .item-disabled[data-v-4ae55cfc]{cursor:not-allowed}.list-item-2077 .item-disabled>svg[data-v-4ae55cfc]{fill:gray}.item-cur-light .indicator[data-v-4ae55cfc]{background-color:#41b883}.item-cur-dark .indicator[data-v-4ae55cfc]{background-color:#0a0}.item-cur-red .indicator[data-v-4ae55cfc]{background-color:rgba(27,180,6,.788235)}.item-cur-2077 .indicator[data-v-4ae55cfc]{background-color:#f8ed53}.main[data-v-4ae55cfc]{display:flex;flex-direction:column;height:100%}#main-server-view[data-v-4ae55cfc]{height:100%}.list-view-light[data-v-4ae55cfc]{margin-top:80px;height:calc(100% - 80px);width:100%;overflow-y:scroll;display:flex;flex-wrap:wrap;padding:10px 20px 20px 30px;align-content:flex-start}.list-view-light[data-v-4ae55cfc]::-webkit-scrollbar{width:16px}.list-view-light[data-v-4ae55cfc]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.list-view-light>[data-v-4ae55cfc]{-webkit-user-drag:element}.list-view-light i[data-v-4ae55cfc]{width:550px;margin:0 6px;flex-grow:1;height:0}.list-view-dark[data-v-4ae55cfc]{margin-top:80px;height:calc(100% - 80px);width:100%;overflow-y:scroll;display:flex;flex-wrap:wrap;padding:10px 20px 20px 30px;align-content:flex-start}.list-view-dark[data-v-4ae55cfc]::-webkit-scrollbar{width:16px}.list-view-dark[data-v-4ae55cfc]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}.list-view-dark>[data-v-4ae55cfc]{-webkit-user-drag:element}.list-view-dark i[data-v-4ae55cfc]{width:550px;margin:0 6px;flex-grow:1;height:0}.list-view-red[data-v-4ae55cfc]{margin-top:80px;height:calc(100% - 80px);width:100%;overflow-y:scroll;display:flex;flex-wrap:wrap;padding:10px 20px 20px 30px;align-content:flex-start}.list-view-red[data-v-4ae55cfc]::-webkit-scrollbar{width:16px}.list-view-red[data-v-4ae55cfc]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}.list-view-red>[data-v-4ae55cfc]{-webkit-user-drag:element}.list-view-red i[data-v-4ae55cfc]{width:550px;margin:0 6px;flex-grow:1;height:0}.list-view-2077[data-v-4ae55cfc]{margin-top:80px;height:calc(100% - 80px);width:100%;overflow-y:scroll;display:flex;flex-wrap:wrap;padding:10px 20px 20px 30px;align-content:flex-start}.list-view-2077[data-v-4ae55cfc]::-webkit-scrollbar{width:16px}.list-view-2077[data-v-4ae55cfc]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}.list-view-2077>[data-v-4ae55cfc]{-webkit-user-drag:element}.list-view-2077 i[data-v-4ae55cfc]{width:550px;margin:0 6px;flex-grow:1;height:0}.input-container[data-v-4ae55cfc]{display:flex;flex-grow:1;overflow:hidden;padding-right:5px;justify-content:space-between}.input-container input[data-v-4ae55cfc]{border-top-left-radius:3px;border-bottom-left-radius:3px}.input-container svg[data-v-4ae55cfc]{border-top-right-radius:3px;border-bottom-right-radius:3px}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(69);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "input[data-v-4ae55cfc]{cursor:text;width:calc(100vw - 230px);height:45px;font-size:1em;border:1px solid rgba(50,50,50,.2);padding:0 10px}input[data-v-4ae55cfc]:focus{outline:none;box-shadow:0 0 2px 1px rgba(50,50,50,.2)}.remote-view[data-v-4ae55cfc]{display:flex;align-items:center;justify-content:space-around}.local-view[data-v-4ae55cfc]{right:0;margin:0 2vw 20px 1vw}.list-view[data-v-4ae55cfc]>:last-child{margin-bottom:25px}.item-name-top[data-v-4ae55cfc]{display:flex;justify-content:space-between;align-items:center;cursor:pointer;font-size:16px}.item-name-top>div[data-v-4ae55cfc]{max-width:calc((80vw - 80px) / 2 - 65px);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.item-time[data-v-4ae55cfc]{font-size:14px;cursor:pointer}.item-expired[data-v-4ae55cfc]{color:#fa4949}.item-parser[data-v-4ae55cfc]{font-size:.8em}.item-time-now[data-v-4ae55cfc]{color:#9eff71}.btns-container[data-v-4ae55cfc]{display:flex;align-items:center;width:fit-content;justify-content:space-between}.confirm[data-v-4ae55cfc]{height:45px;color:#fff;cursor:pointer;line-height:45px;text-align:center;background-color:#7e7b7b;border-radius:3px;padding-left:10px;padding-right:10px;font-size:.85em;box-shadow:0 2px 20px 2px rgba(50,50,50,.1);width:fit-content;white-space:nowrap}.confirm-left[data-v-4ae55cfc]{padding:auto 30px}.confirm-right[data-v-4ae55cfc]{margin-left:10px}.confirm-copy[data-v-4ae55cfc]{border-radius:5px}.btn-error[data-v-4ae55cfc]{background-color:#ec2658}.btn-success[data-v-4ae55cfc]{background-color:#8ade4e}.btn-loading[data-v-4ae55cfc]{box-shadow:2px 2px 5px 1px rgba(50,50,50,.1)}.hint-normal[data-v-4ae55cfc]{text-align:center;font-size:1em;font-weight:500}.hint-error[data-v-4ae55cfc]{color:#ec2658}.copy-icon[data-v-4ae55cfc]{flex-shrink:0;height:45px;width:45px;padding:10px;background-color:#5e798b;cursor:pointer;box-shadow:0 0 2px 1px rgba(50,50,50,.2)}.rotating[data-v-4ae55cfc]{animation:downloading-data-v-4ae55cfc 1s infinite;animation-timing-function:linear}@keyframes downloading-data-v-4ae55cfc{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(70);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-connection-view-light[data-v-de777708]{overflow:hidden;display:flex;justify-content:space-between;flex-direction:column;height:100%}.main-connection-view-light .header[data-v-de777708]{height:40px;display:flex;justify-content:space-between;align-items:center;margin:auto 20px}.main-connection-view-light .header .search-area[data-v-de777708]{position:relative;flex-grow:1;margin:0 10px}.main-connection-view-light .header .search-area .search-box[data-v-de777708]{color:#000;padding:0 32px 0 12px;background-color:#f1f1f1;border:none;outline:none;height:25px;border-radius:50px;line-height:25px;font-size:14px;width:100%}.main-connection-view-light .header .search-area svg[data-v-de777708]{position:absolute;right:0;height:100%;cursor:pointer;width:40px;padding:0 10px 0 15px}.main-connection-view-light .header .search-area svg [data-v-de777708]{cursor:pointer}.main-connection-view-light .control-view[data-v-de777708]{display:flex;padding:0 20px 10px 16px;justify-content:space-between;height:40px;border-bottom:1px solid #dcdcdc}.main-connection-view-light .control-view .labels[data-v-de777708]{display:flex;align-items:center;color:#fff}.main-connection-view-light .control-view .labels .label[data-v-de777708]{height:25px;font-size:14px;font-weight:400;margin:0 5px 0 0;padding:0 5px;line-height:25px;cursor:pointer;background-color:hsla(0,0%,39%,.5);border-radius:3px}.main-connection-view-light .control-view .labels .label-selected[data-v-de777708]{background-color:rgba(14,184,65,.932)}.main-connection-view-dark[data-v-de777708]{overflow:hidden;display:flex;justify-content:space-between;flex-direction:column;height:100%}.main-connection-view-dark .header[data-v-de777708]{height:40px;display:flex;justify-content:space-between;align-items:center;margin:auto 20px}.main-connection-view-dark .header .search-area[data-v-de777708]{position:relative;flex-grow:1;margin:0 10px}.main-connection-view-dark .header .search-area .search-box[data-v-de777708]{color:#fff;padding:0 32px 0 12px;background-color:#606068;border:none;outline:none;height:25px;border-radius:50px;line-height:25px;font-size:14px;width:100%}.main-connection-view-dark .header .search-area svg[data-v-de777708]{position:absolute;right:0;height:100%;cursor:pointer;width:40px;padding:0 10px 0 15px}.main-connection-view-dark .header .search-area svg [data-v-de777708]{cursor:pointer}.main-connection-view-dark .control-view[data-v-de777708]{display:flex;padding:0 20px 10px 16px;justify-content:space-between;height:40px;border-bottom:1px solid #554f4f}.main-connection-view-dark .control-view .labels[data-v-de777708]{display:flex;align-items:center;color:#fff}.main-connection-view-dark .control-view .labels .label[data-v-de777708]{height:25px;font-size:14px;font-weight:400;margin:0 5px 0 0;padding:0 5px;line-height:25px;cursor:pointer;background-color:hsla(0,0%,39%,.5);border-radius:3px}.main-connection-view-dark .control-view .labels .label-selected[data-v-de777708]{background-color:rgba(14,184,65,.932)}.main-connection-view-red[data-v-de777708]{overflow:hidden;display:flex;justify-content:space-between;flex-direction:column;height:100%}.main-connection-view-red .header[data-v-de777708]{height:40px;display:flex;justify-content:space-between;align-items:center;margin:auto 20px}.main-connection-view-red .header .search-area[data-v-de777708]{position:relative;flex-grow:1;margin:0 10px}.main-connection-view-red .header .search-area .search-box[data-v-de777708]{color:#d33928;padding:0 32px 0 12px;background-color:#eda94c;border:none;outline:none;height:25px;border-radius:50px;line-height:25px;font-size:14px;width:100%}.main-connection-view-red .header .search-area svg[data-v-de777708]{position:absolute;right:0;height:100%;cursor:pointer;width:40px;padding:0 10px 0 15px}.main-connection-view-red .header .search-area svg [data-v-de777708]{cursor:pointer}.main-connection-view-red .control-view[data-v-de777708]{display:flex;padding:0 20px 10px 16px;justify-content:space-between;height:40px;border-bottom:1px solid rgba(218,20,30,.247059)}.main-connection-view-red .control-view .labels[data-v-de777708]{display:flex;align-items:center;color:#fff}.main-connection-view-red .control-view .labels .label[data-v-de777708]{height:25px;font-size:14px;font-weight:400;margin:0 5px 0 0;padding:0 5px;line-height:25px;cursor:pointer;background-color:hsla(0,0%,39%,.5);border-radius:3px}.main-connection-view-red .control-view .labels .label-selected[data-v-de777708]{background-color:rgba(14,184,65,.932)}.main-connection-view-2077[data-v-de777708]{overflow:hidden;display:flex;justify-content:space-between;flex-direction:column;height:100%}.main-connection-view-2077 .header[data-v-de777708]{height:40px;display:flex;justify-content:space-between;align-items:center;margin:auto 20px}.main-connection-view-2077 .header .search-area[data-v-de777708]{position:relative;flex-grow:1;margin:0 10px}.main-connection-view-2077 .header .search-area .search-box[data-v-de777708]{color:#fcec0c;padding:0 32px 0 12px;background-color:#084a5a;border:none;outline:none;height:25px;border-radius:50px;line-height:25px;font-size:14px;width:100%}.main-connection-view-2077 .header .search-area svg[data-v-de777708]{position:absolute;right:0;height:100%;cursor:pointer;width:40px;padding:0 10px 0 15px}.main-connection-view-2077 .header .search-area svg [data-v-de777708]{cursor:pointer}.main-connection-view-2077 .control-view[data-v-de777708]{display:flex;padding:0 20px 10px 16px;justify-content:space-between;height:40px;border-bottom:1px solid rgba(6,145,180,.521569)}.main-connection-view-2077 .control-view .labels[data-v-de777708]{display:flex;align-items:center;color:#fff}.main-connection-view-2077 .control-view .labels .label[data-v-de777708]{height:25px;font-size:14px;font-weight:400;margin:0 5px 0 0;padding:0 5px;line-height:25px;cursor:pointer;background-color:hsla(0,0%,39%,.5);border-radius:3px}.main-connection-view-2077 .control-view .labels .label-selected[data-v-de777708]{background-color:rgba(14,184,65,.932)}.title[data-v-de777708]{height:40px;display:flex;align-items:center}.title div[data-v-de777708]:first-child{font-size:20px;display:flex;align-items:baseline}.title div:first-child span[data-v-de777708]{font-size:12px;margin-left:6px}.title div[data-v-de777708]:last-child{height:30px;margin-left:5px;border-radius:20px}.title div:last-child svg[data-v-de777708]{margin:5px;height:20px;width:20px;cursor:pointer}.title div[data-v-de777708]:last-child:hover{background-color:hsla(0,0%,83%,.295)}.header-right[data-v-de777708]{display:flex;align-items:center}.total-hint[data-v-de777708]{font-size:15px;white-space:nowrap}.scroll-view-light[data-v-de777708]{height:calc(100% - 60px);width:calc(100% - 0px);overflow-y:scroll}.scroll-view-light[data-v-de777708]::-webkit-scrollbar{width:16px}.scroll-view-light[data-v-de777708]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.scroll-view-dark[data-v-de777708]{height:calc(100% - 60px);width:calc(100% - 0px);overflow-y:scroll}.scroll-view-dark[data-v-de777708]::-webkit-scrollbar{width:16px}.scroll-view-dark[data-v-de777708]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}.scroll-view-red[data-v-de777708]{height:calc(100% - 60px);width:calc(100% - 0px);overflow-y:scroll}.scroll-view-red[data-v-de777708]::-webkit-scrollbar{width:16px}.scroll-view-red[data-v-de777708]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}.scroll-view-2077[data-v-de777708]{height:calc(100% - 60px);width:calc(100% - 0px);overflow-y:scroll}.scroll-view-2077[data-v-de777708]::-webkit-scrollbar{width:16px}.scroll-view-2077[data-v-de777708]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}.conn-item-light[data-v-de777708]{border-bottom:1px solid hsla(0,0%,79%,.342)}.conn-item-dark[data-v-de777708],.conn-item-light[data-v-de777708]{padding:1px 20px;display:flex;justify-content:space-between;align-items:center}.conn-item-dark[data-v-de777708]{border-bottom:1px solid #626262}.conn-item-red[data-v-de777708]{border-bottom:1px solid rgba(218,20,30,.247059)}.conn-item-2077[data-v-de777708],.conn-item-red[data-v-de777708]{padding:1px 20px;display:flex;justify-content:space-between;align-items:center}.conn-item-2077[data-v-de777708]{border-bottom:1px solid #626262}.conn-item-closed[data-v-de777708]{opacity:.7}.conn-item-top[data-v-de777708]{display:flex;justify-content:space-between}.conn-host[data-v-de777708]{font-size:1em;font-weight:500}.close-btn[data-v-de777708]{width:23px;height:23px;border-radius:15px;cursor:pointer;background-color:rgba(223,51,51,.876);color:#fff;opacity:.8}.close-btn [data-v-de777708]{cursor:pointer}.close-btn[data-v-de777708]:hover{opacity:1}.item-icon[data-v-de777708]{width:19px;margin:2px;height:19px}.close-all-btn[data-v-de777708]{padding:0 10px;margin-left:10px;text-align:center;height:30px;line-height:30px;cursor:pointer;background-color:rgba(243,61,61,.801);border-radius:3px;color:#fff}.conn-labels[data-v-de777708]{font-size:14px;display:flex;margin-bottom:5px;flex-wrap:wrap}.conn-labels>div[data-v-de777708]{margin-right:5px;margin-top:4px;padding:3px 5px;color:#fff;border-radius:3px}.conn1[data-v-de777708]{background-color:#c26819cc}.conn2[data-v-de777708]{background-color:#c18310c5}.conn4[data-v-de777708]{background-color:#559834ce}.conn3[data-v-de777708]{background-color:#00864cc9}.conn5[data-v-de777708]{background-color:#428ee4}.conn6[data-v-de777708]{background-color:#4c10ae}.button-control[data-v-de777708]{padding:0 10px;margin-right:10px;text-align:center;height:25px;font-weight:400;line-height:25px;cursor:pointer;border-radius:3px;color:#fff}.button-resume[data-v-de777708]{background-color:rgba(14,151,185,.959)}.button-pause[data-v-de777708]{background-color:rgba(243,61,61,.801)}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(71);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-setting-section-light[data-v-f0b72b92]{margin:0 2% 10px;font-size:15px;width:96%}.main-setting-section-light .title[data-v-f0b72b92]{font-size:16px;height:34px;line-height:34px}.main-setting-section-light .content[data-v-f0b72b92]{background-color:#f1f1f1;padding:5px 15px;border-radius:3px}.main-setting-section-dark[data-v-f0b72b92]{margin:0 2% 10px;font-size:15px;width:96%}.main-setting-section-dark .title[data-v-f0b72b92]{font-size:16px;height:34px;line-height:34px}.main-setting-section-dark .content[data-v-f0b72b92]{background-color:#606068;padding:5px 15px;border-radius:3px}.main-setting-section-red[data-v-f0b72b92]{margin:0 2% 10px;font-size:15px;width:96%}.main-setting-section-red .title[data-v-f0b72b92]{font-size:16px;height:34px;line-height:34px}.main-setting-section-red .content[data-v-f0b72b92]{background-color:#eda94c;padding:5px 15px;border-radius:3px}.main-setting-section-2077[data-v-f0b72b92]{margin:0 2% 10px;font-size:15px;width:96%}.main-setting-section-2077 .title[data-v-f0b72b92]{font-size:16px;height:34px;line-height:34px}.main-setting-section-2077 .content[data-v-f0b72b92]{background-color:#084a5a;padding:5px 15px;border-radius:3px}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(72);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "input[data-v-7f6c1bea]::-webkit-inner-spin-button,input[data-v-7f6c1bea]::-webkit-outer-spin-button{-webkit-appearance:none}.main-simple-input-light[data-v-7f6c1bea]{position:relative;width:250px}.main-simple-input-light input[data-v-7f6c1bea]{width:100%;text-align:center;border:none;outline-style:none;background-color:#fff;color:#000;height:25px;box-shadow:1px 1px 4px 1px rgba(50,50,50,.04);border-radius:2px}.main-simple-input-light .suffix[data-v-7f6c1bea]{position:absolute;right:10px;top:0;height:25px;line-height:25px;color:#747d88;font-size:13px}.main-simple-input-dark[data-v-7f6c1bea]{position:relative;width:250px}.main-simple-input-dark input[data-v-7f6c1bea]{width:100%;text-align:center;border:none;outline-style:none;background-color:rgba(46,46,46,.822);color:#fff;height:25px;box-shadow:1px 1px 4px 1px rgba(50,50,50,.04);border-radius:2px}.main-simple-input-dark .suffix[data-v-7f6c1bea]{position:absolute;right:10px;top:0;height:25px;line-height:25px;color:#d4d4d4;font-size:13px}.main-simple-input-red[data-v-7f6c1bea]{position:relative;width:250px}.main-simple-input-red input[data-v-7f6c1bea]{width:100%;text-align:center;border:none;outline-style:none;background-color:#d39126;color:#d33928;height:25px;box-shadow:1px 1px 4px 1px rgba(50,50,50,.04);border-radius:2px}.main-simple-input-red .suffix[data-v-7f6c1bea]{position:absolute;right:10px;top:0;height:25px;line-height:25px;color:rgba(218,20,30,.796078);font-size:13px}.main-simple-input-2077[data-v-7f6c1bea]{position:relative;width:250px}.main-simple-input-2077 input[data-v-7f6c1bea]{width:100%;text-align:center;border:none;outline-style:none;background-color:rgba(2,45,53,.822);color:#fcec0c;height:25px;box-shadow:1px 1px 4px 1px rgba(50,50,50,.04);border-radius:2px}.main-simple-input-2077 .suffix[data-v-7f6c1bea]{position:absolute;right:10px;top:0;height:25px;line-height:25px;color:#c79707;font-size:13px}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(73);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "input[data-v-4b964f25]::-webkit-inner-spin-button,input[data-v-4b964f25]::-webkit-outer-spin-button{-webkit-appearance:none}.main-key-capture-light[data-v-4b964f25]{position:relative;width:200px}.main-key-capture-light input[data-v-4b964f25]{width:100%;text-align:center;border:none;outline-style:none;background-color:#fff;color:#000;height:26px;box-shadow:1px 1px 4px 1px rgba(50,50,50,.04);border-radius:2px}.main-key-capture-light input[data-v-4b964f25]::placeholder{color:#a3a3a3}.main-key-capture-light .suffix[data-v-4b964f25]{position:absolute;right:10px;top:0;height:25px;line-height:25px;color:#747d88;font-size:13px}.main-key-capture-light .hint[data-v-4b964f25]{position:absolute;font-size:12px;top:0;padding:0 10px;border-radius:13px;height:26px;line-height:26px;text-align:center;color:#fff;background-color:#535353;opacity:1;transform:translateX(calc(-100% - 10px));transition:all .3s}.main-key-capture-light .hint-hide[data-v-4b964f25]{opacity:0}.main-key-capture-dark[data-v-4b964f25]{position:relative;width:200px}.main-key-capture-dark input[data-v-4b964f25]{width:100%;text-align:center;border:none;outline-style:none;background-color:rgba(46,46,46,.822);color:#fff;height:26px;box-shadow:1px 1px 4px 1px rgba(50,50,50,.04);border-radius:2px}.main-key-capture-dark input[data-v-4b964f25]::placeholder{color:#a3a3a3}.main-key-capture-dark .suffix[data-v-4b964f25]{position:absolute;right:10px;top:0;height:25px;line-height:25px;color:#d4d4d4;font-size:13px}.main-key-capture-dark .hint[data-v-4b964f25]{position:absolute;font-size:12px;top:0;padding:0 10px;border-radius:13px;height:26px;line-height:26px;text-align:center;color:#fff;background-color:#535353;opacity:1;transform:translateX(calc(-100% - 10px));transition:all .3s}.main-key-capture-dark .hint-hide[data-v-4b964f25]{opacity:0}.main-key-capture-red[data-v-4b964f25]{position:relative;width:200px}.main-key-capture-red input[data-v-4b964f25]{width:100%;text-align:center;border:none;outline-style:none;background-color:#d39126;color:#d33928;height:26px;box-shadow:1px 1px 4px 1px rgba(50,50,50,.04);border-radius:2px}.main-key-capture-red input[data-v-4b964f25]::placeholder{color:#cfcfcf}.main-key-capture-red .suffix[data-v-4b964f25]{position:absolute;right:10px;top:0;height:25px;line-height:25px;color:rgba(218,20,30,.796078);font-size:13px}.main-key-capture-red .hint[data-v-4b964f25]{position:absolute;font-size:12px;top:0;padding:0 10px;border-radius:13px;height:26px;line-height:26px;text-align:center;color:#fff;background-color:#535353;opacity:1;transform:translateX(calc(-100% - 10px));transition:all .3s}.main-key-capture-red .hint-hide[data-v-4b964f25]{opacity:0}.main-key-capture-2077[data-v-4b964f25]{position:relative;width:200px}.main-key-capture-2077 input[data-v-4b964f25]{width:100%;text-align:center;border:none;outline-style:none;background-color:rgba(2,45,53,.822);color:#fcec0c;height:26px;box-shadow:1px 1px 4px 1px rgba(50,50,50,.04);border-radius:2px}.main-key-capture-2077 input[data-v-4b964f25]::placeholder{color:#a3a3a3}.main-key-capture-2077 .suffix[data-v-4b964f25]{position:absolute;right:10px;top:0;height:25px;line-height:25px;color:#c79707;font-size:13px}.main-key-capture-2077 .hint[data-v-4b964f25]{position:absolute;font-size:12px;top:0;padding:0 10px;border-radius:13px;height:26px;line-height:26px;text-align:center;color:#fff;background-color:#535353;opacity:1;transform:translateX(calc(-100% - 10px));transition:all .3s}.main-key-capture-2077 .hint-hide[data-v-4b964f25]{opacity:0}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(74);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-more-hint-light[data-v-3ddd8481]{display:flex;align-items:center}.main-more-hint-light .text[data-v-3ddd8481]{color:#747d88;font-size:13px}.main-more-hint-light .tirangle[data-v-3ddd8481]{width:0;height:0;margin-left:5px;margin-top:2px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:6px solid #747d88}.main-more-hint-dark[data-v-3ddd8481]{display:flex;align-items:center}.main-more-hint-dark .text[data-v-3ddd8481]{color:#d4d4d4;font-size:13px}.main-more-hint-dark .tirangle[data-v-3ddd8481]{width:0;height:0;margin-left:5px;margin-top:2px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:6px solid #d4d4d4}.main-more-hint-red[data-v-3ddd8481]{display:flex;align-items:center}.main-more-hint-red .text[data-v-3ddd8481]{color:rgba(218,20,30,.796078);font-size:13px}.main-more-hint-red .tirangle[data-v-3ddd8481]{width:0;height:0;margin-left:5px;margin-top:2px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:6px solid rgba(218,20,30,.796078)}.main-more-hint-2077[data-v-3ddd8481]{display:flex;align-items:center}.main-more-hint-2077 .text[data-v-3ddd8481]{color:#c79707;font-size:13px}.main-more-hint-2077 .tirangle[data-v-3ddd8481]{width:0;height:0;margin-left:5px;margin-top:2px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:6px solid #c79707}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(75);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-settings-separator-light[data-v-0d6d5378]{height:1px;width:100%;opacity:.5;background-color:#cac8c6;margin:5px auto}.main-settings-separator-dark[data-v-0d6d5378]{height:1px;width:100%;opacity:.5;background-color:#4d4d5a;margin:5px auto}.main-settings-separator-red[data-v-0d6d5378]{height:1px;width:100%;opacity:.5;background-color:rgba(183,46,41,.643137);margin:5px auto}.main-settings-separator-2077[data-v-0d6d5378]{height:1px;width:100%;opacity:.5;background-color:rgba(238,222,0,.796078);margin:5px auto}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(76);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-setting-view-light[data-v-4fe34613]{height:100%}.main-setting-view-light .blur[data-v-4fe34613]{filter:blur(15px)}.main-setting-view-light .title[data-v-4fe34613]{height:80px;border-bottom:1px solid #dcdcdc;font-size:20px;background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 20px}.main-setting-view-light .title .btns[data-v-4fe34613]{height:100%;display:flex;align-items:center}.main-setting-view-light .title .btns .btn[data-v-4fe34613]{cursor:pointer;font-size:14px;color:#fa1313;font-weight:400;padding:5px 15px;border-radius:3px;background-color:#f1f1f1}.main-setting-view-light .content[data-v-4fe34613]{overflow-y:scroll;padding:10px 10px 20px;height:calc(100% - 80px)}.main-setting-view-light .content[data-v-4fe34613]::-webkit-scrollbar{width:16px}.main-setting-view-light .content[data-v-4fe34613]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.main-setting-view-light .quit-btns[data-v-4fe34613]{display:flex;align-items:center;justify-content:center;margin-top:30px}.main-setting-view-light .quit-btns .btn[data-v-4fe34613]{background-color:rgba(255,30,0,.8);margin:0 7px;padding:5px 20px;color:#fff;border-radius:3px;font-size:14px;width:120px;text-align:center}.main-setting-view-light .item[data-v-4fe34613]{font-weight:400;display:flex;justify-content:space-between;align-items:center;height:35px}.main-setting-view-light .item .short-input[data-v-4fe34613]{width:190px}.main-setting-view-light .item .shorter-input[data-v-4fe34613]{width:156px}.main-setting-view-light .item .hint[data-v-4fe34613]{margin-left:10px}.main-setting-view-light .item .interface-hint[data-v-4fe34613]{margin-right:10px}.main-setting-view-light .edit-hint[data-v-4fe34613]{background-color:rgba(0,0,0,.4);position:fixed;top:25px;width:calc(100% - 170px);height:calc(100vh - 25px);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}.main-setting-view-light .edit-hint div[data-v-4fe34613]:first-child{font-size:20px}.main-setting-view-light .edit-hint div[data-v-4fe34613]:nth-child(2){font-size:16px;margin-top:20px}.main-setting-view-light .edit-hint .btn[data-v-4fe34613]{font-size:18px;margin-top:40px;background-color:rgba(26,26,26,.7);padding:4px 12px;border-radius:3px;cursor:pointer}.main-setting-view-dark[data-v-4fe34613]{height:100%}.main-setting-view-dark .blur[data-v-4fe34613]{filter:blur(15px)}.main-setting-view-dark .title[data-v-4fe34613]{height:80px;border-bottom:1px solid #554f4f;font-size:20px;background-color:#2c2a38;display:flex;justify-content:space-between;align-items:center;padding:0 20px}.main-setting-view-dark .title .btns[data-v-4fe34613]{height:100%;display:flex;align-items:center}.main-setting-view-dark .title .btns .btn[data-v-4fe34613]{cursor:pointer;font-size:14px;color:#ff5f5f;font-weight:400;padding:5px 15px;border-radius:3px;background-color:#606068}.main-setting-view-dark .content[data-v-4fe34613]{overflow-y:scroll;padding:10px 10px 20px;height:calc(100% - 80px)}.main-setting-view-dark .content[data-v-4fe34613]::-webkit-scrollbar{width:16px}.main-setting-view-dark .content[data-v-4fe34613]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}.main-setting-view-dark .quit-btns[data-v-4fe34613]{display:flex;align-items:center;justify-content:center;margin-top:30px}.main-setting-view-dark .quit-btns .btn[data-v-4fe34613]{background-color:rgba(255,30,0,.8);margin:0 7px;padding:5px 20px;color:#fff;border-radius:3px;font-size:14px;width:120px;text-align:center}.main-setting-view-dark .item[data-v-4fe34613]{font-weight:400;display:flex;justify-content:space-between;align-items:center;height:35px}.main-setting-view-dark .item .short-input[data-v-4fe34613]{width:190px}.main-setting-view-dark .item .shorter-input[data-v-4fe34613]{width:156px}.main-setting-view-dark .item .hint[data-v-4fe34613]{margin-left:10px}.main-setting-view-dark .item .interface-hint[data-v-4fe34613]{margin-right:10px}.main-setting-view-dark .edit-hint[data-v-4fe34613]{background-color:rgba(0,0,0,.4);position:fixed;top:25px;width:calc(100% - 170px);height:calc(100vh - 25px);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}.main-setting-view-dark .edit-hint div[data-v-4fe34613]:first-child{font-size:20px}.main-setting-view-dark .edit-hint div[data-v-4fe34613]:nth-child(2){font-size:16px;margin-top:20px}.main-setting-view-dark .edit-hint .btn[data-v-4fe34613]{font-size:18px;margin-top:40px;background-color:rgba(26,26,26,.7);padding:4px 12px;border-radius:3px;cursor:pointer}.main-setting-view-red[data-v-4fe34613]{height:100%}.main-setting-view-red .blur[data-v-4fe34613]{filter:blur(15px)}.main-setting-view-red .title[data-v-4fe34613]{height:80px;border-bottom:1px solid rgba(218,20,30,.247059);font-size:20px;background-color:#f8b74f;display:flex;justify-content:space-between;align-items:center;padding:0 20px}.main-setting-view-red .title .btns[data-v-4fe34613]{height:100%;display:flex;align-items:center}.main-setting-view-red .title .btns .btn[data-v-4fe34613]{cursor:pointer;font-size:14px;color:red;font-weight:400;padding:5px 15px;border-radius:3px;background-color:#eda94c}.main-setting-view-red .content[data-v-4fe34613]{overflow-y:scroll;padding:10px 10px 20px;height:calc(100% - 80px)}.main-setting-view-red .content[data-v-4fe34613]::-webkit-scrollbar{width:16px}.main-setting-view-red .content[data-v-4fe34613]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}.main-setting-view-red .quit-btns[data-v-4fe34613]{display:flex;align-items:center;justify-content:center;margin-top:30px}.main-setting-view-red .quit-btns .btn[data-v-4fe34613]{background-color:rgba(255,30,0,.8);margin:0 7px;padding:5px 20px;color:#fff;border-radius:3px;font-size:14px;width:120px;text-align:center}.main-setting-view-red .item[data-v-4fe34613]{font-weight:400;display:flex;justify-content:space-between;align-items:center;height:35px}.main-setting-view-red .item .short-input[data-v-4fe34613]{width:190px}.main-setting-view-red .item .shorter-input[data-v-4fe34613]{width:156px}.main-setting-view-red .item .hint[data-v-4fe34613]{margin-left:10px}.main-setting-view-red .item .interface-hint[data-v-4fe34613]{margin-right:10px}.main-setting-view-red .edit-hint[data-v-4fe34613]{background-color:rgba(0,0,0,.4);position:fixed;top:25px;width:calc(100% - 170px);height:calc(100vh - 25px);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}.main-setting-view-red .edit-hint div[data-v-4fe34613]:first-child{font-size:20px}.main-setting-view-red .edit-hint div[data-v-4fe34613]:nth-child(2){font-size:16px;margin-top:20px}.main-setting-view-red .edit-hint .btn[data-v-4fe34613]{font-size:18px;margin-top:40px;background-color:rgba(26,26,26,.7);padding:4px 12px;border-radius:3px;cursor:pointer}.main-setting-view-2077[data-v-4fe34613]{height:100%}.main-setting-view-2077 .blur[data-v-4fe34613]{filter:blur(15px)}.main-setting-view-2077 .title[data-v-4fe34613]{height:80px;border-bottom:1px solid rgba(6,145,180,.521569);font-size:20px;background-color:#136377;display:flex;justify-content:space-between;align-items:center;padding:0 20px}.main-setting-view-2077 .title .btns[data-v-4fe34613]{height:100%;display:flex;align-items:center}.main-setting-view-2077 .title .btns .btn[data-v-4fe34613]{cursor:pointer;font-size:14px;color:#ff5f5f;font-weight:400;padding:5px 15px;border-radius:3px;background-color:#084a5a}.main-setting-view-2077 .content[data-v-4fe34613]{overflow-y:scroll;padding:10px 10px 20px;height:calc(100% - 80px)}.main-setting-view-2077 .content[data-v-4fe34613]::-webkit-scrollbar{width:16px}.main-setting-view-2077 .content[data-v-4fe34613]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}.main-setting-view-2077 .quit-btns[data-v-4fe34613]{display:flex;align-items:center;justify-content:center;margin-top:30px}.main-setting-view-2077 .quit-btns .btn[data-v-4fe34613]{background-color:rgba(255,30,0,.8);margin:0 7px;padding:5px 20px;color:#fff;border-radius:3px;font-size:14px;width:120px;text-align:center}.main-setting-view-2077 .item[data-v-4fe34613]{font-weight:400;display:flex;justify-content:space-between;align-items:center;height:35px}.main-setting-view-2077 .item .short-input[data-v-4fe34613]{width:190px}.main-setting-view-2077 .item .shorter-input[data-v-4fe34613]{width:156px}.main-setting-view-2077 .item .hint[data-v-4fe34613]{margin-left:10px}.main-setting-view-2077 .item .interface-hint[data-v-4fe34613]{margin-right:10px}.main-setting-view-2077 .edit-hint[data-v-4fe34613]{background-color:rgba(0,0,0,.4);position:fixed;top:25px;width:calc(100% - 170px);height:calc(100vh - 25px);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}.main-setting-view-2077 .edit-hint div[data-v-4fe34613]:first-child{font-size:20px}.main-setting-view-2077 .edit-hint div[data-v-4fe34613]:nth-child(2){font-size:16px;margin-top:20px}.main-setting-view-2077 .edit-hint .btn[data-v-4fe34613]{font-size:18px;margin-top:40px;background-color:rgba(26,26,26,.7);padding:4px 12px;border-radius:3px;cursor:pointer}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(77);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".ad-img[data-v-65724216]{max-width:630px;height:150px;border-radius:3px}.placeholder[data-v-65724216]{line-height:150px;color:#fff;width:630px;background-color:#e2e2e2;display:flex;align-items:center;justify-content:center}.placeholder div[data-v-65724216]{margin-right:10px;color:#fff}.placeholder img[data-v-65724216]{width:30px}.error-img[data-v-65724216]{display:flex;width:630px;height:150px;background-color:#e2e2e2;align-items:center;justify-content:center}.error-img div[data-v-65724216]{margin-right:10px;color:#858585}.error-img img[data-v-65724216]{width:30px}.twinkling[data-v-65724216]{animation:twinkling-data-v-65724216 2s infinite;animation-timing-function:ease-in-out}@keyframes twinkling-data-v-65724216{0%{background-color:#e9e9e9}50%{background-color:#d4d4d4}to{background-color:#e9e9e9}}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(78);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".chat-item-light[data-v-7422cd3a]{cursor:pointer;margin-right:15px;color:#019ff5}.chat-item-dark[data-v-7422cd3a]{cursor:pointer;margin-right:15px;color:#1788c5}.chat-item-red[data-v-7422cd3a]{cursor:pointer;margin-right:15px;color:#b72d29}.chat-item-2077[data-v-7422cd3a]{cursor:pointer;margin-right:15px;color:#a5dbe9}.chat-list[data-v-7422cd3a]{display:flex;justify-content:left;flex-wrap:wrap}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(79);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "#main-about-view[data-v-7422cd3a]{padding:0 30px}.section[data-v-7422cd3a]{margin:10px 0}.ad-section[data-v-7422cd3a]{margin:13px 0 0}.title[data-v-7422cd3a]{margin-bottom:0;font-size:1.1em}.ad-img-list[data-v-7422cd3a]{display:flex;flex-direction:column;justify-content:space-between;margin-top:10px;height:315px}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(80);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-input-view-plugin[data-v-7f87e16f]{width:100%;height:calc(100% - 25px);position:fixed;top:25px;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(50,50,50,.6);color:#000;z-index:1000}.card-main[data-v-7f87e16f]{border-radius:2px;background-color:#fff;display:flex;flex-direction:column;justify-content:space-around;max-width:390px}.card-content[data-v-7f87e16f]{padding:15px 20px}.content-title[data-v-7f87e16f]{font-size:1.2em;margin-bottom:15px}.content-hint[data-v-7f87e16f]{font-size:.9em;margin-bottom:5px;margin-top:-5px;color:#179bbb}.content-item[data-v-7f87e16f]{display:flex;margin:0 0 10px;align-items:baseline;flex-direction:column;justify-content:space-between}.item-key[data-v-7f87e16f]{margin-bottom:5px;font-size:16px}.error-hint[data-v-7f87e16f]{font-size:.9em;color:red}.card-btns[data-v-7f87e16f]{margin-top:20px;display:flex;justify-content:space-around}.btn[data-v-7f87e16f]{cursor:pointer;color:#fff;width:100px;height:40px;text-align:center;line-height:40px;border-radius:1px}.btn-cancel[data-v-7f87e16f]{background-color:#676475}.btn-ok[data-v-7f87e16f]{background-color:#3e3c4d}span[data-v-7f87e16f]{color:red}textarea[data-v-7f87e16f]{cursor:pointer;font-size:14px;outline:none;padding:10px 5px;border:1px solid #c6c6cf;width:350px;resize:none;font-family:inherit;max-height:200px;overflow-y:auto}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(81);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main[data-v-17a7800b]{width:100%;height:calc(100% - 25px);position:fixed;top:25px;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(50,50,50,.6);color:#000;z-index:10}.main [data-v-17a7800b]{user-select:text}.card-main[data-v-17a7800b]{border-radius:2px;background-color:#fff;min-width:300px;display:flex;flex-direction:column;justify-content:space-around;box-shadow:0 0 10px 3px hsla(0,0%,5%,.164)}.card-content[data-v-17a7800b]{padding:15px 20px}.content-title[data-v-17a7800b]{font-size:20px;margin-bottom:15px}.content-item[data-v-17a7800b]{border-top:1px solid rgba(50,50,50,.1);display:flex;height:55px;align-items:baseline;flex-direction:column;justify-content:center}.item-key[data-v-17a7800b]{font-size:17px}.item-value[data-v-17a7800b]{font-size:14px;color:rgba(40,44,52,.897)}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(82);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-alert-view-plugin[data-v-0b92fb6c]{width:100%;height:calc(100% - 25px);position:fixed;top:25px;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(50,50,50,.6);color:#000;z-index:10}.main-alert-view-plugin .card-main[data-v-0b92fb6c]{border-radius:2px;background-color:#fff;display:flex;flex-direction:column;justify-content:space-around;width:50%}.main-alert-view-plugin .card-main .card-content[data-v-0b92fb6c]{padding:15px 20px}.main-alert-view-plugin .card-main .card-content .content-title[data-v-0b92fb6c]{font-size:1.2em;margin-bottom:15px}.main-alert-view-plugin .card-main .card-content .content-content-light[data-v-0b92fb6c]{font-size:15px;text-overflow:inherit;word-wrap:break-word;max-height:200px;overflow-y:scroll}.main-alert-view-plugin .card-main .card-content .content-content-light[data-v-0b92fb6c]::-webkit-scrollbar{width:16px}.main-alert-view-plugin .card-main .card-content .content-content-light[data-v-0b92fb6c]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.main-alert-view-plugin .card-main .card-content .content-content-dark[data-v-0b92fb6c]{font-size:15px;text-overflow:inherit;word-wrap:break-word;max-height:200px;overflow-y:scroll}.main-alert-view-plugin .card-main .card-content .content-content-dark[data-v-0b92fb6c]::-webkit-scrollbar{width:16px}.main-alert-view-plugin .card-main .card-content .content-content-dark[data-v-0b92fb6c]::-webkit-scrollbar-thumb{background-color:#4d4d5a;border-radius:100px;border:3px solid #2c2a38}.main-alert-view-plugin .card-main .card-content .content-content-red[data-v-0b92fb6c]{font-size:15px;text-overflow:inherit;word-wrap:break-word;max-height:200px;overflow-y:scroll}.main-alert-view-plugin .card-main .card-content .content-content-red[data-v-0b92fb6c]::-webkit-scrollbar{width:16px}.main-alert-view-plugin .card-main .card-content .content-content-red[data-v-0b92fb6c]::-webkit-scrollbar-thumb{background-color:rgba(183,46,41,.643137);border-radius:100px;border:3px solid #f8b74f}.main-alert-view-plugin .card-main .card-content .content-content-2077[data-v-0b92fb6c]{font-size:15px;text-overflow:inherit;word-wrap:break-word;max-height:200px;overflow-y:scroll}.main-alert-view-plugin .card-main .card-content .content-content-2077[data-v-0b92fb6c]::-webkit-scrollbar{width:16px}.main-alert-view-plugin .card-main .card-content .content-content-2077[data-v-0b92fb6c]::-webkit-scrollbar-thumb{background-color:rgba(238,222,0,.796078);border-radius:100px;border:3px solid #136377}.main-alert-view-plugin .card-main .card-content .card-btns[data-v-0b92fb6c]{margin-top:20px;display:flex;justify-content:space-around}.main-alert-view-plugin .card-main .card-content .card-btns .btn[data-v-0b92fb6c]{cursor:pointer;color:#fff;width:100px;height:40px;text-align:center;line-height:40px;border-radius:1px}.main-alert-view-plugin .card-main .card-content .card-btns .btn-cancel[data-v-0b92fb6c]{background-color:#676475}.main-alert-view-plugin .card-main .card-content .card-btns .btn-ok[data-v-0b92fb6c]{background-color:#3e3c4d}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(83);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-select-view-plugin[data-v-31115f43]{width:100%;height:calc(100% - 25px);position:fixed;top:25px;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(50,50,50,.6);color:#000;z-index:10}.main-select-view-plugin .card-main[data-v-31115f43]{border-radius:2px;background-color:#fff;display:flex;flex-direction:column;justify-content:space-around;width:50%}.main-select-view-plugin .card-main .card-content[data-v-31115f43]{padding:15px 20px}.main-select-view-plugin .card-main .card-content .content-title[data-v-31115f43]{font-size:1.2em;margin-bottom:10px}.main-select-view-plugin .card-main .card-content .content-message[data-v-31115f43]{margin:5px 0 10px;max-height:60vh;overflow-x:hidden;word-break:break-word;overflow-y:scroll}.main-select-view-plugin .card-main .card-content .content-message[data-v-31115f43]::-webkit-scrollbar{width:16px}.main-select-view-plugin .card-main .card-content .content-message[data-v-31115f43]::-webkit-scrollbar-thumb{background-color:#cac8c6;border-radius:100px;border:3px solid #fff}.main-select-view-plugin .card-main .card-content .btns[data-v-31115f43]{display:flex;justify-content:flex-start;flex-wrap:wrap}.main-select-view-plugin .card-main .card-content .btns .btn[data-v-31115f43]{border-radius:3px;text-align:center;height:35px;line-height:35px;flex-shrink:1;color:#fff;background-color:#3e3c4d;border-radius:5px;cursor:pointer;margin:5px}.main-select-view-plugin .card-main .card-content .btns .btn [data-v-31115f43]:hover{cursor:pointer}.main-select-view-plugin .card-main .card-content .btns .btn span[data-v-31115f43]{padding:0 10px}", ""])
}, function() {
    ! function(e) {
        function t(e, t) {
            t = (t || "").replace(/m/g, "") + "m";
            var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|\s*#))/.source.replace(/<<prop>>/g, (function() {
                return i
            })).replace(/<<value>>/g, (function() {
                return e
            }));
            return RegExp(n, t)
        }
        var n = /[*&][^\s[\]{},]+/,
            r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            i = "(?:" + r.source + "(?:[ \t]+" + n.source + ")?|" + n.source + "(?:[ \t]+" + r.source + ")?)";
        e.languages.yaml = {
            scalar: {
                pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, (function() {
                    return i
                }))),
                lookbehind: !0,
                alias: "string"
            },
            comment: /#.*/,
            key: {
                pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)[^\r\n{[\]},#\s]+?(?=\s*:\s)/.source.replace(/<<prop>>/g, (function() {
                    return i
                }))),
                lookbehind: !0,
                alias: "atrule"
            },
            directive: {
                pattern: /(^[ \t]*)%.+/m,
                lookbehind: !0,
                alias: "important"
            },
            datetime: {
                pattern: t(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                lookbehind: !0,
                alias: "number"
            },
            boolean: {
                pattern: t(/true|false/.source, "i"),
                lookbehind: !0,
                alias: "important"
            },
            null: {
                pattern: t(/null|~/.source, "i"),
                lookbehind: !0,
                alias: "important"
            },
            string: {
                pattern: t(/("|')(?:(?!\2)[^\\\r\n]|\\.)*\2/.source),
                lookbehind: !0,
                greedy: !0
            },
            number: {
                pattern: t(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
                lookbehind: !0
            },
            tag: r,
            important: n,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
        }, e.languages.yml = e.languages.yaml
    }(Prism)
}, function() {
    Prism.languages.javascript = Prism.languages.extend("clike", {
        "class-name": [Prism.languages.clike["class-name"], {
            pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
            lookbehind: !0
        }],
        keyword: [{
            pattern: /((?:^|})\s*)(?:catch|finally)\b/,
            lookbehind: !0
        }, {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }],
        number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
        function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0
        },
        "function-variable": {
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: "function"
        },
        parameter: [{
            pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
            inside: Prism.languages.javascript
        }, {
            pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), Prism.languages.insertBefore("javascript", "string", {
        "template-string": {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\${|}$/,
                            alias: "punctuation"
                        },
                        rest: Prism.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        }
    }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript
}, function() {
    ! function() {
        if ("undefined" != typeof self && self.Prism && self.document) {
            var e = "line-numbers",
                t = /\n(?!$)/g,
                n = function(e) {
                    var n = r(e)["white-space"];
                    if ("pre-wrap" === n || "pre-line" === n) {
                        var i = e.querySelector("code"),
                            a = e.querySelector(".line-numbers-rows"),
                            o = e.querySelector(".line-numbers-sizer"),
                            s = i.textContent.split(t);
                        o || ((o = document.createElement("span")).className = "line-numbers-sizer", i.appendChild(o)), o.style.display = "block", s.forEach((function(e, t) {
                            o.textContent = e || "\n";
                            var n = o.getBoundingClientRect().height;
                            a.children[t].style.height = n + "px"
                        })), o.textContent = "", o.style.display = "none"
                    }
                },
                r = function(e) {
                    return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
                };
            window.addEventListener("resize", (function() {
                Array.prototype.forEach.call(document.querySelectorAll("pre." + e), n)
            })), Prism.hooks.add("complete", (function(e) {
                if (e.code) {
                    var r = e.element,
                        i = r.parentNode;
                    if (i && /pre/i.test(i.nodeName) && !r.querySelector(".line-numbers-rows")) {
                        for (var a = !1, o = /(?:^|\s)line-numbers(?:\s|$)/, s = r; s; s = s.parentNode)
                            if (o.test(s.className)) {
                                a = !0;
                                break
                            } if (a) {
                            r.className = r.className.replace(o, " "), o.test(i.className) || (i.className += " line-numbers");
                            var c, d = e.code.match(t),
                                l = d ? d.length + 1 : 1,
                                u = Array(l + 1).join("<span></span>");
                            (c = document.createElement("span")).setAttribute("aria-hidden", "true"), c.className = "line-numbers-rows", c.innerHTML = u, i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)), e.element.appendChild(c), n(i), Prism.hooks.run("line-numbers", e)
                        }
                    }
                }
            })), Prism.hooks.add("line-numbers", (function(e) {
                e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
            })), Prism.plugins.lineNumbers = {
                getLine: function(t, n) {
                    if ("PRE" === t.tagName && t.classList.contains(e)) {
                        var r = t.querySelector(".line-numbers-rows"),
                            i = parseInt(t.getAttribute("data-start"), 10) || 1,
                            a = i + (r.children.length - 1);
                        n < i && (n = i), n > a && (n = a);
                        var o = n - i;
                        return r.children[o]
                    }
                }
            }
        }
    }()
}, function(e, t, n) {
    var r = n(227);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]), r.locals && (e.exports = r.locals);
    (0, n(9).default)("763d7db8", r, !0, {})
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, "code[class*=language-],pre[class*=language-]{color:#f8f8f2;background:none;text-shadow:0 1px rgba(0,0,0,.3);font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#272822}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#f8f8f2}.token.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#f92672}.token.boolean,.token.number{color:#ae81ff}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#a6e22e}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.class-name,.token.function{color:#e6db74}.token.keyword{color:#66d9ef}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}", ""])
}, function(e, t, n) {
    "use strict";
    var r = n(84);
    n.n(r).a
}, function(e, t, n) {
    (e.exports = n(8)(!1)).push([e.i, ".main-code-view-light[data-v-1c7f46d4]{width:100%;height:calc(100% - 25px);position:fixed;top:25px;left:0;background-color:hsla(0,0%,48%,.726);display:flex;align-items:center;justify-content:center;z-index:100}.main-code-view-light .content[data-v-1c7f46d4]{border-radius:3px;background-color:#23241f;width:80%;height:80%;position:relative;box-shadow:2px 2px 10px 4px rgba(0,0,0,.219)}.main-code-view-light .content .base[data-v-1c7f46d4]{padding:10px 10px 100px;position:absolute;top:0;left:0;height:100%;width:100%;font-size:14px;font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;overflow:scroll}.main-code-view-light .content .base[data-v-1c7f46d4]::-webkit-scrollbar{width:10px;height:10px}.main-code-view-light .content .base[data-v-1c7f46d4]::-webkit-scrollbar-thumb{background-color:#616161}.main-code-view-light .content .base[data-v-1c7f46d4]::-webkit-scrollbar-corner{background-color:#3d3d3d00}.main-code-view-light .content .editor[data-v-1c7f46d4]{padding:10px 10px 120px;color:#fff}.main-code-view-light .content .editor .token[data-v-1c7f46d4]{word-break:break-word}.main-code-view-light .content .editor[data-v-1c7f46d4] .space{opacity:.2}.main-code-view-light .content .hidden-input[data-v-1c7f46d4]{white-space:nowrap;border:none;outline-style:none;color:transparent;caret-color:#b8b8b8;background-color:transparent;resize:none}.main-code-view-light .content .btn[data-v-1c7f46d4]{position:absolute;right:40px;bottom:40px;width:30px;height:30px;border-radius:15px;background-color:#fff;cursor:pointer}.main-code-view-light .content .btn svg[data-v-1c7f46d4]{width:20px;height:20px;margin:5px;cursor:pointer}.main-code-view-light .content .error-hint[data-v-1c7f46d4]{position:absolute;bottom:0;left:0;background-color:#da2626;color:#fff;padding:4px 5px;width:100%;font-size:14px;text-align:center}.main-code-view-dark[data-v-1c7f46d4]{width:100%;height:calc(100% - 25px);position:fixed;top:25px;left:0;background-color:hsla(0,0%,48%,.726);display:flex;align-items:center;justify-content:center;z-index:100}.main-code-view-dark .content[data-v-1c7f46d4]{border-radius:3px;background-color:#23241f;width:80%;height:80%;position:relative;box-shadow:2px 2px 10px 4px rgba(0,0,0,.219)}.main-code-view-dark .content .base[data-v-1c7f46d4]{padding:10px 10px 100px;position:absolute;top:0;left:0;height:100%;width:100%;font-size:14px;font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;overflow:scroll}.main-code-view-dark .content .base[data-v-1c7f46d4]::-webkit-scrollbar{width:10px;height:10px}.main-code-view-dark .content .base[data-v-1c7f46d4]::-webkit-scrollbar-thumb{background-color:#616161}.main-code-view-dark .content .base[data-v-1c7f46d4]::-webkit-scrollbar-corner{background-color:#3d3d3d00}.main-code-view-dark .content .editor[data-v-1c7f46d4]{padding:10px 10px 120px;color:#fff}.main-code-view-dark .content .editor .token[data-v-1c7f46d4]{word-break:break-word}.main-code-view-dark .content .editor[data-v-1c7f46d4] .space{opacity:.2}.main-code-view-dark .content .hidden-input[data-v-1c7f46d4]{white-space:nowrap;border:none;outline-style:none;color:transparent;caret-color:#b8b8b8;background-color:transparent;resize:none}.main-code-view-dark .content .btn[data-v-1c7f46d4]{position:absolute;right:40px;bottom:40px;width:30px;height:30px;border-radius:15px;background-color:#fff;cursor:pointer}.main-code-view-dark .content .btn svg[data-v-1c7f46d4]{width:20px;height:20px;margin:5px;cursor:pointer}.main-code-view-dark .content .error-hint[data-v-1c7f46d4]{position:absolute;bottom:0;left:0;background-color:#da2626;color:#fff;padding:4px 5px;width:100%;font-size:14px;text-align:center}.main-code-view-red[data-v-1c7f46d4]{width:100%;height:calc(100% - 25px);position:fixed;top:25px;left:0;background-color:hsla(0,0%,48%,.726);display:flex;align-items:center;justify-content:center;z-index:100}.main-code-view-red .content[data-v-1c7f46d4]{border-radius:3px;background-color:#23241f;width:80%;height:80%;position:relative;box-shadow:2px 2px 10px 4px rgba(0,0,0,.219)}.main-code-view-red .content .base[data-v-1c7f46d4]{padding:10px 10px 100px;position:absolute;top:0;left:0;height:100%;width:100%;font-size:14px;font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;overflow:scroll}.main-code-view-red .content .base[data-v-1c7f46d4]::-webkit-scrollbar{width:10px;height:10px}.main-code-view-red .content .base[data-v-1c7f46d4]::-webkit-scrollbar-thumb{background-color:#616161}.main-code-view-red .content .base[data-v-1c7f46d4]::-webkit-scrollbar-corner{background-color:#3d3d3d00}.main-code-view-red .content .editor[data-v-1c7f46d4]{padding:10px 10px 120px;color:#fff}.main-code-view-red .content .editor .token[data-v-1c7f46d4]{word-break:break-word}.main-code-view-red .content .editor[data-v-1c7f46d4] .space{opacity:.2}.main-code-view-red .content .hidden-input[data-v-1c7f46d4]{white-space:nowrap;border:none;outline-style:none;color:transparent;caret-color:#b8b8b8;background-color:transparent;resize:none}.main-code-view-red .content .btn[data-v-1c7f46d4]{position:absolute;right:40px;bottom:40px;width:30px;height:30px;border-radius:15px;background-color:#fff;cursor:pointer}.main-code-view-red .content .btn svg[data-v-1c7f46d4]{width:20px;height:20px;margin:5px;cursor:pointer}.main-code-view-red .content .error-hint[data-v-1c7f46d4]{position:absolute;bottom:0;left:0;background-color:#da2626;color:#fff;padding:4px 5px;width:100%;font-size:14px;text-align:center}.main-code-view-2077[data-v-1c7f46d4]{width:100%;height:calc(100% - 25px);position:fixed;top:25px;left:0;background-color:hsla(0,0%,48%,.726);display:flex;align-items:center;justify-content:center;z-index:100}.main-code-view-2077 .content[data-v-1c7f46d4]{border-radius:3px;background-color:#23241f;width:80%;height:80%;position:relative;box-shadow:2px 2px 10px 4px rgba(0,0,0,.219)}.main-code-view-2077 .content .base[data-v-1c7f46d4]{padding:10px 10px 100px;position:absolute;top:0;left:0;height:100%;width:100%;font-size:14px;font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;overflow:scroll}.main-code-view-2077 .content .base[data-v-1c7f46d4]::-webkit-scrollbar{width:10px;height:10px}.main-code-view-2077 .content .base[data-v-1c7f46d4]::-webkit-scrollbar-thumb{background-color:#616161}.main-code-view-2077 .content .base[data-v-1c7f46d4]::-webkit-scrollbar-corner{background-color:#3d3d3d00}.main-code-view-2077 .content .editor[data-v-1c7f46d4]{padding:10px 10px 120px;color:#fff}.main-code-view-2077 .content .editor .token[data-v-1c7f46d4]{word-break:break-word}.main-code-view-2077 .content .editor[data-v-1c7f46d4] .space{opacity:.2}.main-code-view-2077 .content .hidden-input[data-v-1c7f46d4]{white-space:nowrap;border:none;outline-style:none;color:transparent;caret-color:#b8b8b8;background-color:transparent;resize:none}.main-code-view-2077 .content .btn[data-v-1c7f46d4]{position:absolute;right:40px;bottom:40px;width:30px;height:30px;border-radius:15px;background-color:#fff;cursor:pointer}.main-code-view-2077 .content .btn svg[data-v-1c7f46d4]{width:20px;height:20px;margin:5px;cursor:pointer}.main-code-view-2077 .content .error-hint[data-v-1c7f46d4]{position:absolute;bottom:0;left:0;background-color:#da2626;color:#fff;padding:4px 5px;width:100%;font-size:14px;text-align:center}", ""])
}, function(e) {
    e.exports = require("vue-electron")
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return function(e, t) {
            for (var n = [], r = 0, i = 0, a = 0; a < e.length;) r = e.charCodeAt(a++), i ? (n.push((65536 + (i - 55296 << 10) + (r - 56320)).toString(16)), i = 0) : 55296 <= r && 56319 >= r ? i = r : n.push(r.toString(16));
            return n.join(t || "-")
        }(0 > e.indexOf(ee) ? e.replace(Z, "") : e)
    }

    function i(e) {
        e.prototype.$parseEmoji = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 22,
                n = (2 < arguments.length && void 0 !== arguments[2] && arguments[2], 3 < arguments.length && void 0 !== arguments[3] && arguments[3], e.replace(Q, (function(e) {
                    var n = r(e);
                    return -1 < J.indexOf("".concat(n, ".svg")) ? '<img src="static/svg/'.concat(n, '.svg" style="width: ').concat(t, "px; height: ").concat(t, 'px;vertical-align: text-bottom;"/>') : e
                })));
            return '<span style="cursor: inherit; word-break: break-all;" ">'.concat(n, "</span>")
        }
    }

    function a(e, t) {
        var n = t.store;
        e.prototype.$setSystemProxy = function() {
            var e = ie()(ne.a.mark((function e(t) {
                var r, i, a, o, s, c, d, l, u, p, f, h, v, m, g, b, x, y, w = arguments;
                return ne.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (1 < w.length && void 0 !== w[1] ? w[1] : {}, r = n.state.app.settings.bypassText, i = [], r) try {
                                a = oe.parse(r), o = a.bypass, i = (void 0 === o ? [] : o) || []
                            } catch (e) {} else i = se.a;
                            if (e.prev = 4, s = !1, !Object(ce.g)()) {
                                e.next = 21;
                                break
                            }
                            return c = n.getters.mixedPort, d = t ? ["-http", "127.0.0.1:".concat(c), "-https", "127.0.0.1:".concat(c), "-socks", "127.0.0.1:".concat(c)] : ["-stop"], e.next = 11, Object(de.a)(d);
                        case 11:
                            if (l = e.sent, !l.success) {
                                e.next = 19;
                                break
                            }
                            return e.next = 16, Object(de.a)(["-bypass", i.join(",")]);
                        case 16:
                            u = e.sent, u.success && (s = !0, n.commit("CHANGE_STATUS", {
                                status: t ? ae.b.SYSTEM_PROXY : ae.b.DEFAULT
                            }));
                        case 19:
                            e.next = 42;
                            break;
                        case 21:
                            if (!Object(ce.h)()) {
                                e.next = 42;
                                break
                            }
                            if (p = n.state.app.settings, f = p.systemProxyTypeIndex, h = void 0 === f ? 0 : f, v = p.specifyHttpProxyProtocol, m = void 0 !== v && v, g = n.getters.mixedPort, b = ue.join(n.getters.filesPath, "win", "common"), x = ["set", "1"], !t) {
                                e.next = 40;
                                break
                            }
                            if (0 !== h) {
                                e.next = 32;
                                break
                            }(x = ["global", "".concat(m ? "http://" : "", "127.0.0.1:").concat(g)]).push(i.join(";")), e.next = 40;
                            break;
                        case 32:
                            e.prev = 32, y = "http://127.0.0.1:".concat(n.state.app.innerServerPort, "/pac?t=").concat((new Date).getTime()), x = ["pac", y], e.next = 40;
                            break;
                        case 37:
                            return e.prev = 37, e.t0 = e.catch(32), e.abrupt("return", !1);
                        case 40:
                            0 === le.spawnSync("sysproxy.exe", x, {
                                cwd: b,
                                windowsHide: !0
                            }).status && (s = !0, n.commit("CHANGE_STATUS", {
                                status: t ? ae.b.SYSTEM_PROXY : ae.b.DEFAULT
                            }));
                        case 42:
                            return e.abrupt("return", s);
                        case 45:
                            e.prev = 45, e.t1 = e.catch(4), console.error(e.t1.stack);
                        case 48:
                            return e.abrupt("return", !1);
                        case 49:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [4, 45],
                    [32, 37]
                ])
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(), e.prototype.$getSystemProxyStatus = function() {
            var e = !1;
            if (Object(ce.g)()) {
                var t = n.state.app.clashPath,
                    r = le.spawnSync("./sysproxy", ["-show"], {
                        cwd: t,
                        windowsHide: !0
                    }),
                    i = r.error,
                    a = r.output;
                if (i) return !1;
                if (a) {
                    var o = a.toString();
                    /socks=/.test(o) && (e = !0)
                }
                return n.commit("CHANGE_STATUS", {
                    status: e ? ae.b.SYSTEM_PROXY : ae.b.DEFAULT
                }), e
            }
            var s = ue.join(n.getters.filesPath, "win", "common"),
                c = le.spawnSync("sysproxy.exe", ["query"], {
                    cwd: s,
                    windowsHide: !0
                });
            return c.error && (e = !1), 0 === c.status && c.stdout && (e = 51 === c.stdout[0] || 53 === c.stdout[0]), n.commit("CHANGE_STATUS", {
                status: e ? ae.b.SYSTEM_PROXY : ae.b.DEFAULT
            }), e
        }, e.prototype.$getTrayIcon = function(e) {
            var t = n.state.app,
                r = t.clashPath,
                i = void 0 === r ? "" : r,
                a = t.settings,
                o = void 0 === a ? {} : a,
                s = o.iconSystemProxy,
                c = o.iconDefault,
                d = [ue.join(__static, "tray_normal.ico"), ue.join(__static, "tray_reverse.ico")];
            return c && (d[0] = ue.isAbsolute(c) ? c : ue.join(i, c)), s && (d[1] = ue.isAbsolute(s) ? s : ue.join(i, s)), d[e]
        }
    }

    function o() {
        return s.apply(this, arguments)
    }

    function s() {
        return (s = ie()(ne.a.mark((function e(t) {
            return ne.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (this.$electron.remote.app.setLoginItemSettings({
                                openAtLogin: t
                            }), !Object(ce.h)()) {
                            e.next = 10;
                            break
                        }
                        return e.prev = 2, e.next = 5, c(this);
                    case 5:
                        e.next = 10;
                        break;
                    case 7:
                        e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
                    case 10:
                    case "end":
                        return e.stop()
                }
            }), e, this, [
                [2, 7]
            ])
        })))).apply(this, arguments)
    }

    function c() {
        return d.apply(this, arguments)
    }

    function d() {
        return (d = ie()(ne.a.mark((function e(t) {
            var n, r, i, a, o, s;
            return ne.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return n = "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run", r = "Clash for Windows", i = L()({}, n, L()({}, r, {
                            type: "REG_SZ",
                            value: ""
                        })), a = function() {
                            return new Promise((function(e, r) {
                                t.$regedit.list(n, (function(t, i) {
                                    if (t) r(t);
                                    else {
                                        var a = i[n];
                                        e((void 0 === a ? {
                                            values: {}
                                        } : a).values)
                                    }
                                }))
                            }))
                        }, o = function() {
                            return new Promise((function(e) {
                                t.$regedit.putValue(i, (function(t) {
                                    e(void 0 === t)
                                }))
                            }))
                        }, e.prev = 5, e.next = 8, a();
                    case 8:
                        if (s = e.sent, !Object.keys(s).includes(r)) {
                            e.next = 12;
                            break
                        }
                        return e.next = 12, o(this);
                    case 12:
                        e.next = 17;
                        break;
                    case 14:
                        e.prev = 14, e.t0 = e.catch(5), console.error(e.t0.stack);
                    case 17:
                    case "end":
                        return e.stop()
                }
            }), e, this, [
                [5, 14]
            ])
        })))).apply(this, arguments)
    }

    function l(e) {
        e.prototype.$setAutoLaunch = o
    }

    function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function p(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? u(Object(t), !0).forEach((function(n) {
            L()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function f(e, t) {
        t.store, e.prototype.$wait = pe, e.prototype.$showDialog = function() {
            var e = ie()(ne.a.mark((function e(t) {
                var n;
                return ne.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = this.$electron.remote.dialog, e.next = 3, n.showMessageBox(p({
                                title: "Clash for Windows"
                            }, t));
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }), e, this)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }()
    }

    function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function v(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? h(Object(t), !0).forEach((function(n) {
            L()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function g(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? m(Object(t), !0).forEach((function(n) {
            L()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function x(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? b(Object(t), !0).forEach((function(n) {
            L()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function w(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? y(Object(t), !0).forEach((function(n) {
            L()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function _(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? k(Object(t), !0).forEach((function(n) {
            L()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function O(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function S(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? O(Object(t), !0).forEach((function(n) {
            L()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function P(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? C(Object(t), !0).forEach((function(n) {
            L()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function j(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function E(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? j(Object(t), !0).forEach((function(n) {
            L()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function T(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }
    n.r(t);
    var D = {};
    n.r(D), n.d(D, "install", (function() {
        return i
    }));
    var I = {};
    n.r(I), n.d(I, "install", (function() {
        return a
    }));
    var A = {};
    n.r(A), n.d(A, "install", (function() {
        return l
    }));
    var $ = {};
    n.r($), n.d($, "install", (function() {
        return f
    }));
    var M = n(3),
        L = n.n(M),
        N = n(22),
        R = n(2),
        z = n.n(R),
        F = n(95),
        U = n.n(F),
        H = (n(112), n(7)),
        V = Object(H.a)({
            name: "Clash"
        }, (function() {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", {
                attrs: {
                    id: "app"
                }
            }, [t("router-view")], 1)
        }), [], !1, null, null, null);
    V.options.__file = "App.vue";
    var B = V.exports,
        W = n(96),
        G = n.n(W);
    N.a.use(G.a);
    var q = new G.a({
            routes: [{
                path: "/home",
                name: "landing-page",
                component: n(234).default,
                children: [{
                    path: "general",
                    component: n(235).default,
                    meta: {
                        keepAlive: !0
                    }
                }, {
                    path: "proxy",
                    component: n(236).default,
                    meta: {
                        keepAlive: !0
                    }
                }, {
                    path: "provider",
                    component: n(237).default,
                    meta: {
                        keepAlive: !0
                    }
                }, {
                    path: "log",
                    component: n(239).default
                }, {
                    path: "server",
                    component: n(233).default
                }, {
                    path: "connection",
                    component: n(240).default,
                    meta: {
                        keepAlive: !0
                    }
                }, {
                    path: "setting",
                    component: n(232).default,
                    meta: {
                        keepAlive: !0
                    }
                }, {
                    path: "about",
                    component: n(238).default,
                    meta: {
                        keepAlive: !0
                    }
                }]
            }, {
                path: "*",
                redirect: "/home/general"
            }],
            saveScrollPosition: !0
        }),
        K = n(12),
        Y = n(4),
        X = n(2),
        J = Y.readdirSync(X.join(__static, "svg")),
        Q = /(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
        Z = /\uFE0F/g,
        ee = "‍",
        te = n(0),
        ne = n.n(te),
        re = n(1),
        ie = n.n(re),
        ae = n(13),
        oe = (n(18), n(14)),
        se = n(87),
        ce = n(6),
        de = n(30),
        le = n(19),
        ue = n(2),
        pe = (n(20), function(e) {
            return new Promise((function(t) {
                return setTimeout(t, e)
            }))
        }),
        fe = n(5),
        he = {
            name: "InputView",
            props: [],
            data: function() {
                return {
                    data: [],
                    isShow: !1,
                    error: "",
                    title: "",
                    hint: "",
                    resolve: null,
                    reject: null
                }
            },
            watch: {
                isShow: function(e) {
                    var t = this;
                    e ? this.setIsSubViewShow({
                        isShow: !0
                    }) : setTimeout((function() {
                        t.setIsSubViewShow({
                            isShow: !1
                        })
                    }), 500)
                }
            },
            methods: v(v({}, Object(fe.mapMutations)({
                setIsSubViewShow: "SET_IS_SUB_VIEW_SHOW"
            })), {}, {
                show: function(e) {
                    var t = this,
                        n = e.data,
                        r = void 0 === n ? [] : n,
                        i = e.title,
                        a = void 0 === i ? "" : i,
                        o = e.hint,
                        s = void 0 === o ? "" : o;
                    return this.error = "", this.isShow = !0, this.data = r, this.title = a, this.hint = s, this.$nextTick((function() {
                        for (var e in r) {
                            var n = t.$refs["ta".concat(e)][0];
                            n.style.height = n.scrollHeight + 2 + "px"
                        }
                    })), new Promise((function(e, n) {
                        t.resolve = e, t.reject = n
                    }))
                },
                handleTextareaInput: function(e) {
                    var t = e.target;
                    t && (t.style.height = "", t.style.height = t.scrollHeight + 2 + "px")
                },
                handleKeyDown: function(e) {
                    27 === e.keyCode && (this.isShow = !1, this.reject())
                },
                handleCancel: function() {
                    this.isShow = !1, this.reject()
                },
                handleDone: function() {
                    if (0 < this.data.filter((function(e) {
                            return e.required && "" === e.value
                        })).length) this.error = "所需的键 (*) 必须有一个值";
                    else {
                        var e = this.data.find((function(e) {
                            return e.hasOwnProperty("validate") && "" !== e.validate(e.value)
                        }));
                        if (e) this.error = e.validate(e.value);
                        else {
                            this.isShow = !1;
                            var t = {};
                            this.data.forEach((function(e) {
                                var n = e.value;
                                "" !== n && (t[e.key] = n)
                            })), this.resolve(t)
                        }
                    }
                }
            })
        },
        ve = (n(215), Object(H.a)(he, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return e.isShow ? n("div", {
                staticClass: "main-input-view-plugin",
                on: {
                    mousedown: e.handleCancel,
                    keydown: e.handleKeyDown
                }
            }, [n("div", {
                staticClass: "card-main",
                on: {
                    mousedown: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [n("div", {
                staticClass: "card-content"
            }, [n("div", {
                staticClass: "content-title"
            }, [e._v(e._s(e.title))]), e._v(" "), e.hint ? n("div", {
                staticClass: "content-hint"
            }, [e._v(e._s(e.hint))]) : e._e(), e._v(" "), e._l(e.data, (function(t, r) {
                return n("div", {
                    key: r,
                    staticClass: "content-item"
                }, [n("div", {
                    staticClass: "item-key"
                }, [e._v("\n          " + e._s(t.name) + "\n          "), t.required ? n("span", [e._v("*")]) : e._e()]), e._v(" "), n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.value,
                        expression: "item.value"
                    }],
                    ref: "ta" + r,
                    refInFor: !0,
                    attrs: {
                        type: "text",
                        rows: "1",
                        spellcheck: "false",
                        placeholder: t.placeholder
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        input: [function(n) {
                            n.target.composing || e.$set(t, "value", n.target.value)
                        }, e.handleTextareaInput]
                    }
                })])
            })), e._v(" "), e.error ? n("div", {
                staticClass: "error-hint"
            }, [e._v(e._s(e.error))]) : e._e(), e._v(" "), n("div", {
                staticClass: "card-btns"
            }, [n("div", {
                staticClass: "btn btn-cancel",
                on: {
                    click: e.handleCancel
                }
            }, [e._v("取消")]), e._v(" "), n("div", {
                staticClass: "btn btn-ok",
                on: {
                    click: e.handleDone
                }
            }, [e._v("确认")])])], 2)])]) : e._e()
        }), [], !1, null, "7f87e16f", null));
    ve.options.__file = "InputView.vue";
    var me = ve.exports,
        ge = {
            install: function(e, t) {
                var n = t.store,
                    r = new(e.extend(g(g({}, me), {}, {
                        store: n
                    }))),
                    i = r.$mount().$el;
                document.body.appendChild(i), e.prototype.$input = r.show
            }
        },
        be = (n(217), Object(H.a)({
            name: "PreviewView",
            props: [],
            data: function() {
                return {
                    data: {},
                    isShow: !1,
                    title: "",
                    onExit: function() {}
                }
            },
            methods: {
                show: function(e) {
                    this.isShow = !0;
                    var t = e.data,
                        n = void 0 === t ? {} : t;
                    this.data = n;
                    var r = e.title,
                        i = void 0 === r ? "" : r;
                    this.title = i;
                    var a = e.onExit,
                        o = void 0 === a ? function() {} : a;
                    this.onExit = o
                },
                handleExit: function() {
                    this.isShow = !1, this.onExit()
                }
            }
        }, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return e.isShow ? n("div", {
                staticClass: "main",
                on: {
                    mousedown: e.handleExit
                }
            }, [n("div", {
                staticClass: "card-main",
                on: {
                    mousedown: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [n("div", {
                staticClass: "card-content"
            }, [n("div", {
                staticClass: "content-title"
            }, [e._v(e._s(e.title))]), e._v(" "), e._l(Object.keys(e.data), (function(t, r) {
                return n("div", {
                    key: r,
                    staticClass: "content-item"
                }, [n("div", {
                    staticClass: "item-key"
                }, [e._v(e._s(t))]), e._v(" "), n("div", {
                    staticClass: "item-value"
                }, [e._v(e._s(e.data[t] || "--"))])])
            }))], 2)])]) : e._e()
        }), [], !1, null, "17a7800b", null));
    be.options.__file = "PreviewView.vue";
    var xe = be.exports,
        ye = {
            install: function(e) {
                var t = new(e.extend(xe)),
                    n = t.$mount().$el;
                document.body.appendChild(n), e.prototype.$preview = t.show
            }
        },
        we = {
            name: "AlertView",
            props: [],
            data: function() {
                return {
                    isShow: !1,
                    content: "",
                    title: "错误",
                    isShowErrorBtn: !1,
                    resolve: null,
                    reject: null
                }
            },
            watch: {
                isShow: function(e) {
                    var t = this;
                    e ? this.setIsSubViewShow({
                        isShow: !0
                    }) : setTimeout((function() {
                        t.setIsSubViewShow({
                            isShow: !1
                        })
                    }), 500)
                }
            },
            computed: x(x({}, Object(fe.mapState)({})), Object(fe.mapGetters)(["theme"])),
            methods: x(x({}, Object(fe.mapMutations)({
                setIsSubViewShow: "SET_IS_SUB_VIEW_SHOW"
            })), {}, {
                show: function(e) {
                    var t = this,
                        n = e.title,
                        r = void 0 === n ? "错误" : n,
                        i = e.content,
                        a = void 0 === i ? "" : i,
                        o = e.isShowErrorBtn;
                    return this.isShow = !0, this.title = r, this.content = a, this.isShowErrorBtn = void 0 !== o && o, new Promise((function(e, n) {
                        t.resolve = e, t.reject = n
                    }))
                },
                handleKeyDown: function(e) {
                    27 === e.keyCode && (this.isShow = !1, this.reject())
                },
                handleCancel: function() {
                    this.isShow = !1, this.reject()
                },
                handleDone: function() {
                    this.isShow = !1, this.resolve({})
                }
            })
        },
        ke = (n(219), Object(H.a)(we, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return e.isShow ? n("div", {
                staticClass: "main-alert-view-plugin",
                on: {
                    mousedown: e.handleCancel,
                    keydown: e.handleKeyDown
                }
            }, [n("div", {
                staticClass: "card-main",
                on: {
                    mousedown: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [n("div", {
                staticClass: "card-content"
            }, [n("div", {
                staticClass: "content-title"
            }, [e._v(e._s(e.title))]), e._v(" "), n("div", {
                class: ["content-content-" + e.theme],
                domProps: {
                    innerHTML: e._s(e.content)
                }
            }), e._v(" "), n("div", {
                staticClass: "card-btns"
            }, [e.isShowErrorBtn ? n("div", {
                staticClass: "btn btn-cancel",
                on: {
                    click: e.handleCancel
                }
            }, [e._v("\n          取消\n        ")]) : e._e(), e._v(" "), n("div", {
                staticClass: "btn btn-ok",
                on: {
                    click: e.handleDone
                }
            }, [e._v("确认")])])])])]) : e._e()
        }), [], !1, null, "0b92fb6c", null));
    ke.options.__file = "AlertView.vue";
    var _e = ke.exports,
        Oe = {
            install: function(e, t) {
                var n = t.store,
                    r = new(e.extend(w(w({}, _e), {}, {
                        store: n
                    }))),
                    i = r.$mount().$el;
                document.body.appendChild(i), e.prototype.$alert = r.show
            }
        },
        Se = {
            name: "SelectView",
            props: [],
            data: function() {
                return {
                    isShow: !1,
                    title: "",
                    message: "",
                    items: [],
                    resolve: null,
                    reject: null
                }
            },
            watch: {
                isShow: function(e) {
                    var t = this;
                    e ? this.setIsSubViewShow({
                        isShow: !0
                    }) : setTimeout((function() {
                        t.setIsSubViewShow({
                            isShow: !1
                        })
                    }), 500)
                }
            },
            computed: _({}, Object(fe.mapState)({})),
            methods: _(_({}, Object(fe.mapMutations)({
                setIsSubViewShow: "SET_IS_SUB_VIEW_SHOW"
            })), {}, {
                show: function(e) {
                    var t = this,
                        n = e.items,
                        r = void 0 === n ? [] : n,
                        i = e.title,
                        a = void 0 === i ? "Select" : i,
                        o = e.message,
                        s = void 0 === o ? "" : o;
                    return this.isShow = !0, this.title = a, this.items = r, this.message = s, new Promise((function(e, n) {
                        t.resolve = e, t.reject = n
                    }))
                },
                handleKeyDown: function(e) {
                    27 === e.keyCode && (this.isShow = !1, this.reject())
                },
                handleCancel: function() {
                    this.isShow = !1, this.reject()
                },
                handleDone: function() {
                    this.isShow = !1, this.resolve({})
                },
                handleItemSelect: function(e) {
                    this.isShow = !1, this.resolve(e)
                }
            })
        },
        Ce = (n(221), Object(H.a)(Se, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return e.isShow ? n("div", {
                staticClass: "main-select-view-plugin",
                on: {
                    mousedown: e.handleCancel,
                    keydown: e.handleKeyDown
                }
            }, [n("div", {
                staticClass: "card-main",
                on: {
                    mousedown: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [n("div", {
                staticClass: "card-content"
            }, [n("div", {
                staticClass: "content-title"
            }, [e._v(e._s(e.title))]), e._v(" "), n("div", {
                staticClass: "content-message",
                domProps: {
                    innerHTML: e._s(e.message)
                }
            }), e._v(" "), n("div", {
                staticClass: "btns"
            }, e._l(e.items, (function(t, r) {
                return n("div", {
                    key: r,
                    staticClass: "btn",
                    on: {
                        click: function() {
                            return e.handleItemSelect(r)
                        }
                    }
                }, [t ? n("span", [e._v(e._s(t))]) : e._e()])
            })), 0)])])]) : e._e()
        }), [], !1, null, "31115f43", null));
    Ce.options.__file = "SelectView.vue";
    var Pe = Ce.exports,
        je = {
            install: function(e, t) {
                var n = t.store,
                    r = new(e.extend(S(S({}, Pe), {}, {
                        store: n
                    }))),
                    i = r.$mount().$el;
                document.body.appendChild(i), e.prototype.$select = r.show
            }
        },
        Ee = n(21),
        Te = n.n(Ee),
        De = n(90),
        Ie = (n(223), n(224), n(225), n(226), {
            name: "CodeView",
            props: [],
            components: {},
            data: function() {
                return {
                    isShow: !1,
                    rawCode: "",
                    resolve: null,
                    reject: null,
                    language: "yaml",
                    error: null,
                    history: [],
                    reverseCount: 0
                }
            },
            watch: {
                isShow: function(e) {
                    var t = this;
                    e ? this.setIsSubViewShow({
                        isShow: !0
                    }) : setTimeout((function() {
                        t.setIsSubViewShow({
                            isShow: !1
                        })
                    }), 500)
                },
                rawCode: function(e, t) {
                    "" === t || (0 === this.reverseCount ? this.history = [].concat(Te()(this.history), [t]) : this.reverseCount -= 1)
                }
            },
            computed: P(P(P({}, Object(fe.mapState)({})), Object(fe.mapGetters)(["theme"])), {}, {
                code: function() {
                    var e = Object(De.highlight)(this.rawCode, "js" === this.language ? De.languages.javascript : De.languages.yaml, this.language);
                    return console.log(), e.split("\n").map((function(e) {
                        return e.replace(/^( +)/, (function(e, t) {
                            return Array(t.length).fill("").map((function(e, t) {
                                var n = 0 == t % 2 ? "→" : " ",
                                    r = (16 * (0 == t % 2 ? t : t - 1) % 192 + 64).toString(16);
                                return '<span style="background-color: #'.concat(r).concat(r, '44" class="space">').concat(n, "</span>")
                            })).join("")
                        }))
                    })).join("\n")
                }
            }),
            methods: P(P({}, Object(fe.mapMutations)({
                setIsSubViewShow: "SET_IS_SUB_VIEW_SHOW"
            })), {}, {
                show: function(e) {
                    var t = this,
                        n = e.code,
                        r = e.language,
                        i = void 0 === r ? "yaml" : r;
                    return this.rawCode = n, this.isShow = !0, this.language = i, this.error = "", this.history = [], new Promise((function(e, n) {
                        t.resolve = e, t.reject = n
                    }))
                },
                handleSave: function() {
                    var e = this;
                    if (this.resolve) try {
                        "yaml" === this.language && oe.parse(this.rawCode, {
                            prettyErrors: !0
                        }), this.resolve({
                            code: this.rawCode
                        }), this.isShow = !1
                    } catch (a) {
                        var t = "",
                            n = a.range;
                        if (n) {
                            var r = n.start,
                                i = n.end;
                            void 0 !== r && void 0 !== i && (t = ', at "'.concat(this.rawCode.slice(r, i), '"'))
                        }
                        this.error = "错误: ".concat(a.message).concat(t), setTimeout((function() {
                            e.error = ""
                        }), 3e3)
                    }
                },
                handleKeyDown: function(e) {
                    27 === e.keyCode && (this.isShow = !1, this.reject())
                },
                handleCancel: function() {
                    this.isShow = !1, this.reject()
                },
                handleTabInsert: function() {
                    var e = this.$refs.ta,
                        t = e.selectionStart,
                        n = e.selectionEnd;
                    if (t !== n) {
                        var r = this.rawCode.split("\n"),
                            i = 0;
                        return this.rawCode = r.reduce((function(e, r, a) {
                            if (0 === a) return r;
                            var o = e.length + 1,
                                s = e.length + r.length + 1;
                            return o <= t && s >= t || o <= n && s >= n || o >= t && s <= n ? (i += 1, e + "\n  " + r) : e + "\n" + r
                        }), ""), void this.$nextTick((function() {
                            e.selectionStart = t + 2, e.selectionEnd = n + 2 * i
                        }))
                    }
                    this.rawCode = this.rawCode.slice(0, t) + "  " + this.rawCode.slice(t), this.$nextTick((function() {
                        e.selectionStart = t + 2, e.selectionEnd = t + 2
                    }))
                },
                handleReverse: function() {
                    0 < this.history.length && (this.reverseCount += 1, this.rawCode = this.history.pop())
                },
                handleScroll: function(e) {
                    var t = this.$refs.da,
                        n = e.target;
                    n && (t.scrollTop = n.scrollTop, t.scrollLeft = n.scrollLeft)
                }
            }),
            mounted: function() {},
            beforeDestroy: function() {}
        }),
        Ae = (n(228), Object(H.a)(Ie, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return e.isShow ? n("div", {
                class: ["main-code-view-" + e.theme, "line-numbers"],
                on: {
                    mousedown: e.handleCancel,
                    keydown: e.handleKeyDown
                }
            }, [n("div", {
                staticClass: "content",
                on: {
                    mousedown: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [n("pre", {
                ref: "da",
                staticClass: "base editor",
                domProps: {
                    innerHTML: e._s(e.code)
                }
            }), e._v(" "), n("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.rawCode,
                    expression: "rawCode"
                }],
                ref: "ta",
                staticClass: "base hidden-input",
                attrs: {
                    type: "text",
                    spellcheck: "false"
                },
                domProps: {
                    value: e.rawCode
                },
                on: {
                    scroll: e.handleScroll,
                    keydown: [function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "tab", 9, t.key, "Tab") ? null : (t.preventDefault(), t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : e.handleTabInsert(t))
                    }, function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "tab", 9, t.key, "Tab") ? null : t.shiftKey ? (t.preventDefault(), t.ctrlKey || t.altKey || t.metaKey ? null : e.handleTabReverse(t)) : null
                    }, function(t) {
                        return (t.type.indexOf("key") || 90 === t.keyCode) && t.ctrlKey ? (t.preventDefault(), t.shiftKey || t.altKey || t.metaKey ? null : e.handleReverse(t)) : null
                    }, function(t) {
                        return (t.type.indexOf("key") || 90 === t.keyCode) && t.metaKey ? (t.preventDefault(), t.ctrlKey || t.shiftKey || t.altKey ? null : e.handleReverse(t)) : null
                    }, function(t) {
                        return (t.type.indexOf("key") || 83 === t.keyCode) && t.ctrlKey ? (t.preventDefault(), t.shiftKey || t.altKey || t.metaKey ? null : e.handleSave(t)) : null
                    }, function(t) {
                        return (t.type.indexOf("key") || 83 === t.keyCode) && t.metaKey ? (t.preventDefault(), t.ctrlKey || t.shiftKey || t.altKey ? null : e.handleSave(t)) : null
                    }],
                    input: function(t) {
                        t.target.composing || (e.rawCode = t.target.value)
                    }
                }
            }), e._v(" "), n("div", {
                staticClass: "btn",
                on: {
                    click: e.handleSave
                }
            }, [n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "black"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M17.59 3.59c-.38-.38-.89-.59-1.42-.59H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41l-2.82-2.83zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2z"
                }
            })])]), e._v(" "), e.error ? n("div", {
                staticClass: "error-hint"
            }, [e._v(e._s(e.error))]) : e._e()])]) : e._e()
        }), [], !1, null, "1c7f46d4", null));
    Ae.options.__file = "CodeView.vue";
    var $e = Ae.exports,
        Me = {
            install: function(e, t) {
                var n = t.store,
                    r = new(e.extend(E(E({}, $e), {}, {
                        store: n
                    }))),
                    i = r.$mount().$el;
                document.body.appendChild(i), e.prototype.$code = r.show
            }
        };
    process.env.IS_WEB || N.a.use(n(230)), N.a.use(D), N.a.use(I, {
        store: K.a
    }), N.a.use(A), N.a.use($, {
        store: K.a
    }), N.a.use(ge, {
        store: K.a
    }), N.a.use(ye), N.a.use(Oe, {
        store: K.a
    }), N.a.use(je, {
        store: K.a
    }), N.a.use(Me, {
        store: K.a
    }), N.a.config.productionTip = !1;
    var Le = z.a.join(z.a.dirname(N.a.prototype.$electron.remote.app.getPath("exe")), "./resources/node_modules/regedit/vbs");
    U.a.setExternalVBSLocation(Le), N.a.prototype.$regedit = U.a, N.a.mixin({
        data: function() {
            return {
                mixinScrollTop: 0
            }
        },
        computed: function(e) {
            for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? T(Object(t), !0).forEach((function(n) {
                L()(e, n, t[n])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }));
            return e
        }({
            isWindows: function() {
                return Object(ce.h)()
            }
        }, Object(fe.mapGetters)({
            theme: "theme"
        })),
        beforeRouteEnter: function(e, t, n) {
            n((function(e) {
                var t = e.$refs["mixin-scroll-content"];
                t && (t.scrollTop = e.mixinScrollTop)
            }))
        },
        beforeRouteLeave: function(e, t, n) {
            var r = this.$refs["mixin-scroll-content"];
            r && (this.mixinScrollTop = r.scrollTop), n()
        }
    }), new N.a({
        components: {
            App: B
        },
        router: q,
        store: K.a,
        template: "<App/>"
    }).$mount("#app")
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function o(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? a(Object(t), !0).forEach((function(n) {
            g()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function d(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? c(Object(t), !0).forEach((function(n) {
            g()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }
    n.r(t);
    var l = n(21),
        u = n.n(l),
        p = n(0),
        f = n.n(p),
        h = n(1),
        v = n.n(h),
        m = n(3),
        g = n.n(m),
        b = (n(10), n(14)),
        x = n(20),
        y = n(4),
        w = n(5),
        k = {
            name: "setting-section",
            props: {
                title: String
            },
            data: function() {
                return {}
            },
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
                    g()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(w.mapState)({}))
        },
        _ = (n(197), n(7)),
        O = Object(_.a)(k, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-setting-section-" + e.theme]
            }, [n("div", {
                staticClass: "title"
            }, [e._v(e._s(e.title))]), e._v(" "), n("div", {
                staticClass: "content"
            }, [e._t("default")], 2)])
        }), [], !1, null, "f0b72b92", null);
    O.options.__file = "Section.vue";
    var S = O.exports,
        C = {
            name: "simple-input",
            props: {
                value: [String, Number],
                placeholder: String,
                suffix: String,
                type: {
                    type: String,
                    default: function() {
                        return "text"
                    }
                }
            },
            model: {
                prop: "value",
                event: "change"
            },
            data: function() {
                return {
                    suffixWidth: 0,
                    ref: ""
                }
            },
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? i(Object(t), !0).forEach((function(n) {
                    g()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(w.mapState)({})),
            methods: {
                handleTextChange: x.debounce((function(e) {
                    var t = e.target,
                        n = (t = void 0 === t ? {} : t).value;
                    void 0 !== n && ("number" === this.type ? this.$emit("change", parseInt(n)) : this.$emit("change", n))
                }), 500)
            },
            mounted: function() {
                var e = this;
                this.ref = Object(x.uniqueId)("simple-input"), this.$nextTick((function() {
                    e.suffixWidth = e.$refs[e.ref].clientWidth
                }))
            }
        },
        P = (n(199), Object(_.a)(C, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-simple-input-" + e.theme]
            }, [n("input", {
                style: {
                    paddingLeft: "10px",
                    paddingRight: e.suffixWidth + 10 + "px"
                },
                attrs: {
                    spellcheck: "false",
                    type: e.type,
                    placeholder: e.placeholder
                },
                domProps: {
                    value: e.value
                },
                on: {
                    input: e.handleTextChange
                }
            }), e._v(" "), n("div", {
                ref: e.ref,
                staticClass: "suffix"
            }, [e._v(e._s(e.suffix))])])
        }), [], !1, null, "7f6c1bea", null));
    P.options.__file = "SimpleInput.vue";
    var j = P.exports,
        E = {
            name: "key-capture",
            props: {
                value: {
                    type: String,
                    default: ""
                },
                placeholder: String
            },
            model: {
                prop: "value",
                event: "change"
            },
            data: function() {
                return {
                    isRecording: !1,
                    keyChain: []
                }
            },
            watch: {
                isRecording: function(e) {
                    e || this.$emit("change", this.shortcut)
                }
            },
            computed: o(o({}, Object(w.mapState)({})), {}, {
                shortcut: function() {
                    return this.keyChain.join("+")
                },
                hint: function() {
                    return this.isRecording ? "正在录制..." : this.placeholder
                }
            }),
            methods: {
                handleKeyDown: function(e) {
                    if (this.isRecording) {
                        var t = e.key;
                        return 13 === e.keyCode ? void(this.isRecording = !1) : void(t && this.keyChain.push(t))
                    }
                },
                handleClick: function() {
                    this.keyChain = [], this.isRecording = !0, this.$emit("change", "")
                },
                handleBlur: function() {
                    this.isRecording = !1
                },
                mounted: function() {}
            },
            mounted: function() {
                this.keyChain = this.value.split("+")
            }
        },
        T = (n(201), Object(_.a)(E, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-key-capture-" + e.theme]
            }, [n("input", {
                class: [e.isRecording ? "recording" : ""],
                style: {
                    padding: "10px"
                },
                attrs: {
                    placeholder: e.hint,
                    readonly: ""
                },
                domProps: {
                    value: e.shortcut
                },
                on: {
                    click: e.handleClick,
                    keydown: e.handleKeyDown,
                    blur: e.handleBlur
                }
            }), e._v(" "), n("div", {
                staticClass: "hint",
                class: [e.isRecording ? "" : "hint-hide"]
            }, [e._v("\n    Press Enter to stop\n  ")])])
        }), [], !1, null, "4b964f25", null));
    T.options.__file = "KeyCapture.vue";
    var D = T.exports,
        I = n(89),
        A = n(88),
        $ = {
            name: "more-hint",
            props: {
                text: String,
                clickable: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? s(Object(t), !0).forEach((function(n) {
                    g()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(w.mapState)({}))
        },
        M = (n(203), Object(_.a)($, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-more-hint-" + e.theme, e.clickable ? "clickable" : ""],
                on: {
                    click: function() {
                        return e.$emit("click")
                    }
                }
            }, [n("div", {
                staticClass: "text"
            }, [e._v(e._s(e.text))]), e._v(" "), e.clickable ? n("div", {
                staticClass: "tirangle"
            }) : e._e()])
        }), [], !1, null, "3ddd8481", null));
    M.options.__file = "MoreHint.vue";
    var L = M.exports,
        N = (n(205), Object(_.a)({
            name: "separator"
        }, (function() {
            var e = this,
                t = e.$createElement;
            return (e._self._c || t)("div", {
                class: ["main-settings-separator-" + e.theme]
            })
        }), [], !1, null, "0d6d5378", null));
    N.options.__file = "Separator.vue";
    var R = N.exports,
        z = n(87),
        F = n(86),
        U = n(29),
        H = n(24),
        V = n(2),
        B = n(19),
        W = null,
        G = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "code";
            return new Promise((function(r, i) {
                W = i;
                var a = H.remote.app.getPath("temp"),
                    o = Object(V.join)(a, "close-to-save.".concat(e));
                Object(y.writeFileSync)(o, t), Object(B.exec)("".concat(n, " ").concat(o, " --wait"), (function(e) {
                    e && i(e)
                })).on("exit", (function() {
                    r(Object(y.readFileSync)(o).toString())
                }))
            }))
        },
        q = n(6),
        K = n(17),
        Y = n.n(K),
        X = {
            components: {
                Section: S,
                SimpleInput: j,
                KeyCapture: D,
                MoreHint: L,
                SelectView: I.a,
                SwitchView: A.a,
                Separator: R
            },
            data: function() {
                return {
                    scrollTop: 0,
                    fontFamilyPlaceholder: Object(q.g)() ? "PingFang SC" : "Microsoft Yahei",
                    isEditingExternal: !1
                }
            },
            computed: d(d(d({}, Object(w.mapState)({
                sts: function(e) {
                    return e.app.settings
                },
                detectedInterfaceName: function(e) {
                    return e.app.detectedInterfaceName
                }
            })), Object(w.mapGetters)(["parserLogPath"])), {}, {
                settings: function() {
                    var e = this;
                    return this.sts ? new Proxy(x.cloneDeep(this.sts), {
                        get: function(e, t) {
                            return e[t]
                        },
                        set: function(t, n, r) {
                            return t[n] = r, e.saveSettings({
                                obj: x.cloneDeep(t)
                            }), !0
                        }
                    }) : void 0
                }
            }),
            watch: {
                "sts.iconDefault": function() {
                    this.$parent.updateTrayIcon()
                },
                "sts.iconSystemProxy": function() {
                    this.$parent.updateTrayIcon()
                },
                "sts.mixinType": function() {
                    this.$parent.refreshProfile()
                },
                "sts.profilePath": function() {
                    this.refreshCore()
                }
            },
            methods: d(d({}, Object(w.mapMutations)({
                saveSettings: "SAVE_SETTINGS_OBJECT"
            })), {}, {
                refreshCore: function() {
                    var e = this;
                    return v()(f.a.mark((function t() {
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.$parent.handlerRestartClash();
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                cancelExternalEdit: function() {
                    W && W()
                },
                edit: function(e) {
                    var t = arguments,
                        n = this;
                    return v()(f.a.mark((function r() {
                        var i, a, o, s, c, d, l, u, p, h, v, m;
                        return f.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (i = 1 < t.length && void 0 !== t[1] ? t[1] : "", a = 2 < t.length && void 0 !== t[2] ? t[2] : "yaml", o = !1, r.prev = 3, s = n.settings, c = s[e], d = s.editor, c || (c = i), 0 !== (l = void 0 === d ? 0 : d)) {
                                        r.next = 16;
                                        break
                                    }
                                    return r.next = 9, n.$code({
                                        code: c,
                                        language: a
                                    });
                                case 9:
                                    u = r.sent, p = u.code, h = void 0 === p ? "" : p, n.settings[e] = h, o = h !== c, r.next = 32;
                                    break;
                                case 16:
                                    if (1 !== l) {
                                        r.next = 25;
                                        break
                                    }
                                    return n.isEditingExternal = !0, r.next = 20, G(a, c);
                                case 20:
                                    v = r.sent, n.settings[e] = v, o = v !== c, r.next = 32;
                                    break;
                                case 25:
                                    if (2 !== l) {
                                        r.next = 32;
                                        break
                                    }
                                    return n.isEditingExternal = !0, r.next = 29, G(a, c, "subl");
                                case 29:
                                    m = r.sent, n.settings[e] = m, o = m !== c;
                                case 32:
                                    r.next = 36;
                                    break;
                                case 34:
                                    r.prev = 34, r.t0 = r.catch(3);
                                case 36:
                                    return n.isEditingExternal = !1, r.abrupt("return", o);
                                case 38:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [3, 34]
                        ])
                    })))()
                },
                handleEditBypass: function() {
                    var e = this;
                    return v()(f.a.mark((function t() {
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.edit("bypassText", b.stringify({
                                        bypass: z.a
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleEditPACContent: function() {
                    var e = this;
                    return v()(f.a.mark((function t() {
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.edit("pacContentText", F.a, "js");
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleEditMixinYAML: function() {
                    var e = this;
                    return v()(f.a.mark((function t() {
                        var n;
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.settings.mixinType, t.next = 3, e.edit("mixinText", "mixin: # object\n");
                                case 3:
                                    if (t.t0 = t.sent, !t.t0) {
                                        t.next = 6;
                                        break
                                    }
                                    t.t0 = 0 === n;
                                case 6:
                                    if (!t.t0) {
                                        t.next = 8;
                                        break
                                    }
                                    e.$parent.refreshProfile();
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleEditMixinJS: function() {
                    var e = this;
                    return v()(f.a.mark((function t() {
                        var n;
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.settings.mixinType, "module.exports.parse = ({ content, name, url }, { yaml, axios, notify }) => {\n  return content\n}", t.next = 4, e.edit("mixinCode", "module.exports.parse = ({ content, name, url }, { yaml, axios, notify }) => {\n  return content\n}", "js");
                                case 4:
                                    if (t.t0 = t.sent, !t.t0) {
                                        t.next = 7;
                                        break
                                    }
                                    t.t0 = 1 === n;
                                case 7:
                                    if (!t.t0) {
                                        t.next = 9;
                                        break
                                    }
                                    e.$parent.refreshProfile();
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleEditHeaders: function() {
                    var e = this;
                    return v()(f.a.mark((function t() {
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.edit("headersText", "headers: # object\n");
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleEditChildProcess: function() {
                    var e = this;
                    return v()(f.a.mark((function t() {
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.edit("childProcessText", "processes: # array\n");
                                case 2:
                                    if (!t.sent) {
                                        t.next = 4;
                                        break
                                    }
                                    e.refreshCore();
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleSelectInterface: function() {
                    var e = this;
                    return v()(f.a.mark((function t() {
                        var n, r;
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, n = Object(U.b)().map((function(e) {
                                        return e.name
                                    })), t.next = 4, e.$select({
                                        title: "选择出站接口",
                                        message: "仅在 TAP 模式启用时工作",
                                        items: [].concat(u()(n), ["[ 重置 ]"])
                                    });
                                case 4:
                                    r = t.sent, e.settings.interfaceName = r === n.length ? "" : n[r], t.next = 10;
                                    break;
                                case 8:
                                    t.prev = 8, t.t0 = t.catch(0);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 8]
                        ])
                    })))()
                },
                handleEditProfileParsers: function() {
                    var e = this;
                    return v()(f.a.mark((function t() {
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.edit("profileParsersText", "parsers: # array\n");
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleOpenConsoleFile: function() {
                    Object(y.existsSync)(this.parserLogPath) || Object(y.writeFileSync)(this.parserLogPath, ""), this.$electron.shell.openPath(this.parserLogPath)
                },
                handleChooseDefaultIcon: function() {
                    var e = this.chooseFileOrPath();
                    e && (this.settings.iconDefault = e)
                },
                handleChooseSystemProxytOnIcon: function() {
                    var e = this.chooseFileOrPath();
                    e && (this.settings.iconSystemProxy = e)
                },
                handleChooseProfilePath: function() {
                    var e = this.chooseFileOrPath(!1);
                    e && (this.settings.profilePath = e)
                },
                handleSelectTrayScriptPath: function() {
                    var e = this.chooseFileOrPath();
                    e && (this.settings.trayScriptPath = e)
                },
                handleTrayScriptManualRun: function() {
                    this.settings.trayScriptManualRunTime = (new Date).getTime()
                },
                chooseFileOrPath: function() {
                    var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                        t = this.$electron.remote.dialog;
                    if (t) {
                        var n = t.showOpenDialogSync({
                            properties: [e ? "openFile" : "openDirectory"]
                        });
                        if (n && 0 < n.length) return n[0]
                    }
                },
                handleReset: function() {
                    var e = this;
                    return v()(f.a.mark((function t() {
                        return f.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.$alert({
                                        title: "警告",
                                        content: "确定要重置全部设置?",
                                        isShowErrorBtn: !0
                                    });
                                case 3:
                                    e.saveSettings({
                                        obj: {}
                                    }), t.next = 8;
                                    break;
                                case 6:
                                    t.prev = 6, t.t0 = t.catch(0);
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 6]
                        ])
                    })))()
                },
                handleOpenGUILog: function() {
                    this.$electron.shell.openPath(Object(V.dirname)(Y.a.transports.file.getFile().path))
                },
                handleQuit: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    e ? this.$electron.ipcRenderer.send("cleanup-done") : this.$electron.remote.getCurrentWindow().webContents.send("app-exit")
                }
            }),
            beforeMount: function() {},
            beforeRouteEnter: function(e, t, n) {
                n((function(t) {
                    var n = e.query.action;
                    "edit-parsers" === (void 0 === n ? "" : n) && t.handleEditProfileParsers()
                }))
            },
            beforeRouteLeave: function(e, t, n) {
                n()
            }
        },
        J = (n(207), Object(_.a)(X, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-setting-view-" + e.theme]
            }, [n("div", {
                class: ["title", e.isEditingExternal ? "blur" : ""]
            }, [n("div", [e._v("设置")]), e._v(" "), n("div", {
                staticClass: "btns"
            }, [n("div", {
                staticClass: "btn",
                on: {
                    click: e.handleReset
                }
            }, [e._v("重置全部设置")])])]), e._v(" "), e.settings ? n("div", {
                ref: "mixin-scroll-content",
                class: ["content", , e.isEditingExternal ? "blur" : ""]
            }, [n("Section", {
                attrs: {
                    title: "通用"
                }
            }, [n("div", {
                staticClass: "item"
            }, [n("div", [e._v("设置编辑器")]), e._v(" "), n("SelectView", {
                attrs: {
                    items: ["CFW", "Visual Studio Code", "Sublime Text"]
                },
                model: {
                    value: e.settings.editor,
                    callback: function(t) {
                        e.$set(e.settings, "editor", t)
                    },
                    expression: "settings.editor"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("通知")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.showNotifications,
                    callback: function(t) {
                        e.$set(e.settings, "showNotifications", t)
                    },
                    expression: "settings.showNotifications"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("静默启动")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.hideAfterStartup,
                    callback: function(t) {
                        e.$set(e.settings, "hideAfterStartup", t)
                    },
                    expression: "settings.hideAfterStartup"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("随机控制器端口")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.randomControllerPort,
                    callback: function(t) {
                        e.$set(e.settings, "randomControllerPort", t)
                    },
                    expression: "settings.randomControllerPort"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("精简模式")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.lightweightMode,
                    callback: function(t) {
                        e.$set(e.settings, "lightweightMode", t)
                    },
                    expression: "settings.lightweightMode"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("运行时长格式")]), e._v(" "), n("SimpleInput", {
                staticClass: "input",
                attrs: {
                    placeholder: "hh : mm : ss"
                },
                model: {
                    value: e.settings.runTimeFormat,
                    callback: function(t) {
                        e.$set(e.settings, "runTimeFormat", t)
                    },
                    expression: "settings.runTimeFormat"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("GUI 日志文件夹")]), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "打开"
                },
                on: {
                    click: e.handleOpenGUILog
                }
            })], 1)]), e._v(" "), n("Section", {
                attrs: {
                    title: "外观"
                }
            }, [e.settings.systemTheme ? e._e() : n("div", {
                staticClass: "item"
            }, [n("div", [e._v("主题")]), e._v(" "), n("SelectView", {
                attrs: {
                    items: ["明亮", "黑暗", "国庆中秋", "Cyberpunk"]
                },
                model: {
                    value: e.settings.theme,
                    callback: function(t) {
                        e.$set(e.settings, "theme", t)
                    },
                    expression: "settings.theme"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("跟随系统主题")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.systemTheme,
                    callback: function(t) {
                        e.$set(e.settings, "systemTheme", t)
                    },
                    expression: "settings.systemTheme"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("字体样式")]), e._v(" "), n("SimpleInput", {
                attrs: {
                    placeholder: e.fontFamilyPlaceholder
                },
                model: {
                    value: e.settings.fontFamily,
                    callback: function(t) {
                        e.$set(e.settings, "fontFamily", t)
                    },
                    expression: "settings.fontFamily"
                }
            })], 1), e._v(" "), e.isWindows ? n("div", {
                staticClass: "item"
            }, [n("div", [e._v("默认图标路径")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("SimpleInput", {
                staticClass: "short-input",
                attrs: {
                    placeholder: "图标 (.ico) 资源路径"
                },
                model: {
                    value: e.settings.iconDefault,
                    callback: function(t) {
                        e.$set(e.settings, "iconDefault", t)
                    },
                    expression: "settings.iconDefault"
                }
            }), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "选择"
                },
                on: {
                    click: e.handleChooseDefaultIcon
                }
            })], 1)]) : e._e(), e._v(" "), e.isWindows ? n("div", {
                staticClass: "item"
            }, [n("div", [e._v("已开启系统代理时的图标路径")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("SimpleInput", {
                staticClass: "short-input",
                attrs: {
                    placeholder: "图标 (.ico) 资源路径"
                },
                model: {
                    value: e.settings.iconSystemProxy,
                    callback: function(t) {
                        e.$set(e.settings, "iconSystemProxy", t)
                    },
                    expression: "settings.iconSystemProxy"
                }
            }), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "选择"
                },
                on: {
                    click: e.handleChooseSystemProxytOnIcon
                }
            })], 1)]) : e._e(), e._v(" "), n("separator"), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("增强型托盘")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.iconSpeed,
                    callback: function(t) {
                        e.$set(e.settings, "iconSpeed", t)
                    },
                    expression: "settings.iconSpeed"
                }
            })], 1), e._v(" "), e.settings.iconSpeed ? n("div", {
                staticClass: "item"
            }, [n("div", [e._v("文字")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("SimpleInput", {
                attrs: {
                    placeholder: "在托盘上显示的文本"
                },
                model: {
                    value: e.settings.trayText,
                    callback: function(t) {
                        e.$set(e.settings, "trayText", t)
                    },
                    expression: "settings.trayText"
                }
            })], 1)]) : e._e(), e._v(" "), !e.settings.trayText && e.settings.iconSpeed ? n("div", {
                staticClass: "item"
            }, [n("div", [e._v("脚本")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("SimpleInput", {
                staticClass: "short-input",
                attrs: {
                    placeholder: "要运行的脚本"
                },
                model: {
                    value: e.settings.trayScriptPath,
                    callback: function(t) {
                        e.$set(e.settings, "trayScriptPath", t)
                    },
                    expression: "settings.trayScriptPath"
                }
            }), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "选择"
                },
                on: {
                    click: e.handleSelectTrayScriptPath
                }
            })], 1)]) : e._e(), e._v(" "), !e.settings.trayText && e.settings.iconSpeed && e.settings.trayScriptPath ? n("div", {
                staticClass: "item"
            }, [n("div", [e._v("脚本间隔时间")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("SimpleInput", {
                staticClass: "shorter-input",
                attrs: {
                    placeholder: "秒",
                    suffix: "s",
                    type: "number"
                },
                model: {
                    value: e.settings.trayScriptInterval,
                    callback: function(t) {
                        e.$set(e.settings, "trayScriptInterval", t)
                    },
                    expression: "settings.trayScriptInterval"
                }
            }), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "手动运行"
                },
                on: {
                    click: e.handleTrayScriptManualRun
                }
            })], 1)]) : e._e(), e._v(" "), e.isWindows && e.settings.iconSpeed ? n("div", {
                staticClass: "item"
            }, [n("div", [e._v("透明")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("SimpleInput", {
                staticClass: "shorter-input",
                staticStyle: {
                    "margin-right": "10px"
                },
                attrs: {
                    placeholder: "前景色"
                },
                model: {
                    value: e.settings.trayColorForeground,
                    callback: function(t) {
                        e.$set(e.settings, "trayColorForeground", t)
                    },
                    expression: "settings.trayColorForeground"
                }
            }), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.trayColorTransparent,
                    callback: function(t) {
                        e.$set(e.settings, "trayColorTransparent", t)
                    },
                    expression: "settings.trayColorTransparent"
                }
            })], 1)]) : e._e(), e._v(" "), n("separator"), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("展示新版本图标")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.showNewVersionIcon,
                    callback: function(t) {
                        e.$set(e.settings, "showNewVersionIcon", t)
                    },
                    expression: "settings.showNewVersionIcon"
                }
            })], 1)], 1), e._v(" "), n("Section", {
                attrs: {
                    title: "系统代理"
                }
            }, [e.isWindows ? n("div", {
                staticClass: "item"
            }, [n("div", [e._v("类型")]), e._v(" "), n("SelectView", {
                attrs: {
                    items: ["HTTP", "PAC"]
                },
                model: {
                    value: e.settings.systemProxyTypeIndex,
                    callback: function(t) {
                        e.$set(e.settings, "systemProxyTypeIndex", t)
                    },
                    expression: "settings.systemProxyTypeIndex"
                }
            })], 1) : e._e(), e._v(" "), e.isWindows && 1 === e.settings.systemProxyTypeIndex ? n("div", {
                staticClass: "item"
            }, [n("div", [e._v("PAC 内容")]), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "编辑"
                },
                on: {
                    click: e.handleEditPACContent
                }
            })], 1) : e._e(), e._v(" "), 1 === e.settings.systemProxyTypeIndex ? e._e() : n("div", {
                staticClass: "item"
            }, [n("div", [e._v("绕过域名/IPNet")]), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "编辑"
                },
                on: {
                    click: e.handleEditBypass
                }
            })], 1), e._v(" "), e.isWindows && 1 !== e.settings.systemProxyTypeIndex ? n("div", {
                staticClass: "item"
            }, [n("div", [e._v("指定协议")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.specifyHttpProxyProtocol,
                    callback: function(t) {
                        e.$set(e.settings, "specifyHttpProxyProtocol", t)
                    },
                    expression: "settings.specifyHttpProxyProtocol"
                }
            })], 1) : e._e()]), e._v(" "), n("Section", {
                attrs: {
                    title: "混合配置文件"
                }
            }, [n("div", {
                staticClass: "item"
            }, [n("div", [e._v("类型")]), e._v(" "), n("SelectView", {
                attrs: {
                    items: ["YAML", "JavaScript"]
                },
                model: {
                    value: e.settings.mixinType,
                    callback: function(t) {
                        e.$set(e.settings, "mixinType", t)
                    },
                    expression: "settings.mixinType"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("YAML")]), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "编辑"
                },
                on: {
                    click: e.handleEditMixinYAML
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("JavaScript")]), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "编辑"
                },
                on: {
                    click: e.handleEditMixinJS
                }
            })], 1)]), e._v(" "), n("Section", {
                attrs: {
                    title: "代理"
                }
            }, [n("div", {
                staticClass: "item"
            }, [n("div", [e._v("代理项目宽度")]), e._v(" "), n("SimpleInput", {
                attrs: {
                    placeholder: "290",
                    suffix: "px"
                },
                model: {
                    value: e.settings.proxyItemWidth,
                    callback: function(t) {
                        e.$set(e.settings, "proxyItemWidth", t)
                    },
                    expression: "settings.proxyItemWidth"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("排序")]), e._v(" "), n("SelectView", {
                attrs: {
                    items: ["默认", "按延迟", "按字母表"]
                },
                model: {
                    value: e.settings.proxyOrder,
                    callback: function(t) {
                        e.$set(e.settings, "proxyOrder", t)
                    },
                    expression: "settings.proxyOrder"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("延迟测试 URL")]), e._v(" "), n("SimpleInput", {
                attrs: {
                    placeholder: "http://www.gstatic.com/generate_204"
                },
                model: {
                    value: e.settings.latencyUrl,
                    callback: function(t) {
                        e.$set(e.settings, "latencyUrl", t)
                    },
                    expression: "settings.latencyUrl"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("延迟测试超时")]), e._v(" "), n("SimpleInput", {
                attrs: {
                    type: "number",
                    placeholder: "3000",
                    suffix: "ms"
                },
                model: {
                    value: e.settings.latencyTimeout,
                    callback: function(t) {
                        e.$set(e.settings, "latencyTimeout", t)
                    },
                    expression: "settings.latencyTimeout"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("显示过滤器")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.showProxyFilter,
                    callback: function(t) {
                        e.$set(e.settings, "showProxyFilter", t)
                    },
                    expression: "settings.showProxyFilter"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("隐藏不可选择的组")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.hideUnselectableGroup,
                    callback: function(t) {
                        e.$set(e.settings, "hideUnselectableGroup", t)
                    },
                    expression: "settings.hideUnselectableGroup"
                }
            })], 1)]), e._v(" "), n("Section", {
                attrs: {
                    title: "连接"
                }
            }, [n("div", {
                staticClass: "item"
            }, [n("div", [e._v("当代理变更时断开")]), e._v(" "), n("SelectView", {
                attrs: {
                    items: ["无", "连锁", "全部"]
                },
                model: {
                    value: e.settings.connProxy,
                    callback: function(t) {
                        e.$set(e.settings, "connProxy", t)
                    },
                    expression: "settings.connProxy"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("当配置文件变更时断开")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.connProfile,
                    callback: function(t) {
                        e.$set(e.settings, "connProfile", t)
                    },
                    expression: "settings.connProfile"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("当模式变更时断开")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.connMode,
                    callback: function(t) {
                        e.$set(e.settings, "connMode", t)
                    },
                    expression: "settings.connMode"
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("显示连锁类型")]), e._v(" "), n("SelectView", {
                attrs: {
                    items: ["代理", "组", "两者"]
                },
                model: {
                    value: e.settings.connChainType,
                    callback: function(t) {
                        e.$set(e.settings, "connChainType", t)
                    },
                    expression: "settings.connChainType"
                }
            })], 1)]), e._v(" "), n("Section", {
                attrs: {
                    title: "出站"
                }
            }, [n("div", {
                staticClass: "item"
            }, [n("div", [e._v("接口名称")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [e.detectedInterfaceName ? n("MoreHint", {
                staticClass: "interface-hint",
                attrs: {
                    text: "已检测: " + e.detectedInterfaceName,
                    clickable: !1
                }
            }) : e._e(), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: e.settings.interfaceName || "选择"
                },
                on: {
                    click: e.handleSelectInterface
                }
            })], 1)])]), e._v(" "), n("Section", {
                attrs: {
                    title: "子进程"
                }
            }, [n("div", {
                staticClass: "item"
            }, [n("div", [e._v("进程")]), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "编辑"
                },
                on: {
                    click: e.handleEditChildProcess
                }
            })], 1)]), e._v(" "), n("Section", {
                attrs: {
                    title: "配置文件"
                }
            }, [n("div", {
                staticClass: "item"
            }, [n("div", [e._v("解析器")]), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "编辑"
                },
                on: {
                    click: e.handleEditProfileParsers
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("控制台输出")]), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "打开文件"
                },
                on: {
                    click: e.handleOpenConsoleFile
                }
            })], 1), e._v(" "), n("separator"), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("文件夹路径")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("SimpleInput", {
                staticClass: "short-input",
                attrs: {
                    placeholder: "配置文件文件夹路径"
                },
                model: {
                    value: e.settings.profilePath,
                    callback: function(t) {
                        e.$set(e.settings, "profilePath", t)
                    },
                    expression: "settings.profilePath"
                }
            }), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "选择"
                },
                on: {
                    click: e.handleChooseProfilePath
                }
            })], 1)]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("请求头")]), e._v(" "), n("MoreHint", {
                staticClass: "hint",
                attrs: {
                    text: "修改"
                },
                on: {
                    click: e.handleEditHeaders
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("更新后选择")]), e._v(" "), n("SwitchView", {
                model: {
                    value: e.settings.selectAfterUpdated,
                    callback: function(t) {
                        e.$set(e.settings, "selectAfterUpdated", t)
                    },
                    expression: "settings.selectAfterUpdated"
                }
            })], 1)], 1), e._v(" "), n("Section", {
                attrs: {
                    title: "快捷键"
                }
            }, [n("div", {
                staticClass: "item"
            }, [n("div", [e._v("系统代理")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("KeyCapture", {
                staticClass: "input",
                attrs: {
                    placeholder: "录制"
                },
                model: {
                    value: e.settings.shortcutSystemProxy,
                    callback: function(t) {
                        e.$set(e.settings, "shortcutSystemProxy", t)
                    },
                    expression: "settings.shortcutSystemProxy"
                }
            })], 1)]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("混合")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("KeyCapture", {
                staticClass: "input",
                attrs: {
                    placeholder: "录制"
                },
                model: {
                    value: e.settings.shortcutMixin,
                    callback: function(t) {
                        e.$set(e.settings, "shortcutMixin", t)
                    },
                    expression: "settings.shortcutMixin"
                }
            })], 1)]), e._v(" "), n("separator"), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("全局模式")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("KeyCapture", {
                staticClass: "input",
                attrs: {
                    placeholder: "录制"
                },
                model: {
                    value: e.settings.shortcutGlobalMode,
                    callback: function(t) {
                        e.$set(e.settings, "shortcutGlobalMode", t)
                    },
                    expression: "settings.shortcutGlobalMode"
                }
            })], 1)]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("规则模式")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("KeyCapture", {
                staticClass: "input",
                attrs: {
                    placeholder: "录制"
                },
                model: {
                    value: e.settings.shortcutRuleMode,
                    callback: function(t) {
                        e.$set(e.settings, "shortcutRuleMode", t)
                    },
                    expression: "settings.shortcutRuleMode"
                }
            })], 1)]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("直连模式")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("KeyCapture", {
                staticClass: "input",
                attrs: {
                    placeholder: "录制"
                },
                model: {
                    value: e.settings.shortcutDirectMode,
                    callback: function(t) {
                        e.$set(e.settings, "shortcutDirectMode", t)
                    },
                    expression: "settings.shortcutDirectMode"
                }
            })], 1)]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("脚本模式")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("KeyCapture", {
                staticClass: "input",
                attrs: {
                    placeholder: "录制"
                },
                model: {
                    value: e.settings.shortcutScriptMode,
                    callback: function(t) {
                        e.$set(e.settings, "shortcutScriptMode", t)
                    },
                    expression: "settings.shortcutScriptMode"
                }
            })], 1)]), e._v(" "), n("separator"), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("展示/隐藏仪表盘")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("KeyCapture", {
                staticClass: "input",
                attrs: {
                    placeholder: "录制"
                },
                model: {
                    value: e.settings.shortcutShowHideDashboard,
                    callback: function(t) {
                        e.$set(e.settings, "shortcutShowHideDashboard", t)
                    },
                    expression: "settings.shortcutShowHideDashboard"
                }
            })], 1)]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("div", [e._v("运行托盘脚本")]), e._v(" "), n("div", {
                staticClass: "item"
            }, [n("KeyCapture", {
                staticClass: "input",
                attrs: {
                    placeholder: "录制"
                },
                model: {
                    value: e.settings.shortcutRunTrayScript,
                    callback: function(t) {
                        e.$set(e.settings, "shortcutRunTrayScript", t)
                    },
                    expression: "settings.shortcutRunTrayScript"
                }
            })], 1)])], 1), e._v(" "), n("div", {
                staticClass: "quit-btns"
            }, [n("div", {
                staticClass: "btn clickable btn-quit",
                on: {
                    click: function() {
                        return e.handleQuit()
                    }
                }
            }, [e._v("退出")]), e._v(" "), n("div", {
                staticClass: "btn clickable btn-force-quit",
                on: {
                    click: function() {
                        return e.handleQuit(!0)
                    }
                }
            }, [e._v("\n        强制退出\n      ")])])], 1) : e._e(), e._v(" "), e.isEditingExternal ? n("div", {
                staticClass: "edit-hint"
            }, [n("div", [e._v("\n      " + e._s(["", "Visual Studio Code", "Sublime Text"][e.settings.editor]) + " 正在\n      启动以编辑.\n    ")]), e._v(" "), n("div", [e._v("关闭正在编辑的文件以保存.")]), e._v(" "), n("div", {
                staticClass: "btn",
                on: {
                    click: e.cancelExternalEdit
                }
            }, [e._v("取消")])]) : e._e()])
        }), [], !1, null, "4fe34613", null));
    J.options.__file = "SettingView.vue", t.default = J.exports
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function o(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? a(Object(t), !0).forEach((function(n) {
            x()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function c(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? s(Object(t), !0).forEach((function(n) {
            x()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function d(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0,
            s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return o = e.done, e
            },
            e: function(e) {
                s = !0, a = e
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function p(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? u(Object(t), !0).forEach((function(n) {
            x()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }
    var f = Math.floor;
    n.r(t);
    var h = n(0),
        v = n.n(h),
        m = n(1),
        g = n.n(m),
        b = n(3),
        x = n.n(b),
        y = n(16),
        w = n.n(y),
        k = n(14),
        _ = n.n(k),
        O = n(31),
        S = n(15),
        C = n(5),
        P = n(27),
        j = n.n(P),
        E = {
            props: ["type", "data"],
            data: function() {
                return {
                    ssCipher: ["aes-128-gcm", "aes-192-gcm", "aes-256-gcm", "chacha20-ietf-poly1305", "aes-128-ctr", "aes-192-ctr", "aes-256-ctr", "aes-128-cfb", "aes-192-cfb", "aes-256-cfb", "chacha20-ietf", "xchacha20", "rc4-md5", "xchacha20-ietf-poly1305"],
                    vmessCipher: ["none", "auto", "aes-128-gcm", "chacha20-poly1305"],
                    pType: ["ss", "vmess", "socks5", "http"],
                    gType: ["url-test", "fallback", "select", "load-balance"],
                    vmessType: ["tcp", "ws"],
                    groupName: "",
                    groupType: "select",
                    groupUrl: "http://www.gstatic.com/generate_204",
                    groupInterval: 600,
                    proxyType: "ss",
                    proxyName: "",
                    proxyServer: "",
                    proxyPort: "",
                    proxyChipher: "",
                    proxyPassword: "",
                    proxyUuid: "",
                    proxyAlterid: "",
                    proxyObfs: "",
                    proxyObfshost: "",
                    proxyTls: !1,
                    proxyUsername: "",
                    alterIdx: -1,
                    proxySkipCertVerify: !1,
                    proxyNetwork: "tcp",
                    proxyWsPath: "",
                    proxyWsHeaders: ""
                }
            },
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
                    x()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(C.mapState)({})),
            methods: {
                confirmInput: function() {
                    if (0 === this.type) {
                        var e = {
                            name: this.groupName,
                            proxies: [],
                            type: this.groupType
                        };
                        ("url-test" === this.groupType || "fallback" === this.groupType || "load-balance" === this.groupType) && (e.url = this.groupUrl, e.interval = this.groupInterval), this.$emit("inputDone", {
                            type: 0,
                            content: e,
                            index: this.alterIdx
                        })
                    } else if (1 === this.type) {
                        var t = {
                            name: this.proxyName,
                            type: this.proxyType,
                            server: this.proxyServer,
                            port: this.proxyPort
                        };
                        if ("ss" === this.proxyType) t.cipher = this.proxyChipher, t.password = this.proxyPassword, this.proxyObfs && (t.plugin = "obfs", t["plugin-opts"] = {
                            mode: this.proxyObfs,
                            host: this.proxyObfshost || "bing.com"
                        });
                        else if ("vmess" !== this.proxyType)("socks5" === this.proxyType || "http" === this.proxyType) && (this.proxyUsername && this.proxyPassword && (t.username = this.proxyUsername, t.password = this.proxyPassword), this.proxyTls && (t.tls = !0), this.proxySkipCertVerify && (t["skip-cert-verify"] = !0));
                        else if (t.uuid = this.proxyUuid, t.alterId = this.proxyAlterid, t.cipher = this.proxyChipher, this.proxyTls && (t.tls = !0), this.proxySkipCertVerify && (t["skip-cert-verify"] = !0), "ws" === this.proxyNetwork) {
                            t.network = "ws", t["ws-path"] = this.proxyWsPath;
                            try {
                                t["ws-headers"] = JSON.parse(this.proxyWsHeaders)
                            } catch (t) {}
                        }
                        this.$emit("inputDone", {
                            type: 1,
                            content: t,
                            index: this.alterIdx
                        })
                    }
                }
            },
            mounted: function() {
                if (this.data) {
                    if (0 === this.type) this.groupName = this.data.name, this.groupType = this.data.type, "url" in this.data && (this.groupUrl = this.data.url), "interval" in this.data && (this.groupInterval = this.data.interval);
                    else if (1 === this.type) {
                        if (this.proxyName = this.data.name, this.proxyPort = this.data.port, this.proxyServer = this.data.server, this.proxyType = this.data.type, "password" in this.data && (this.proxyPassword = this.data.password), "plugin" in this.data) {
                            var e = this.data["plugin-opts"],
                                t = void 0 === e ? {} : e,
                                n = t.mode,
                                r = t.host;
                            this.proxyObfs = n, this.proxyObfshost = r
                        }
                        "obfs-host" in this.data && (this.proxyObfshost = this.data["obfs-host"]), "tls" in this.data && (this.proxyTls = this.data.tls), "cipher" in this.data && (this.proxyChipher = this.data.cipher), "uuid" in this.data && (this.proxyUuid = this.data.uuid), "alterId" in this.data && (this.proxyAlterid = this.data.alterId), "skip-cert-verify" in this.data && (this.proxySkipCertVerify = this.data["skip-cert-verify"]), "network" in this.data && (this.proxyNetwork = this.data.network), "ws-path" in this.data && (this.proxyWsPath = this.data["ws-path"]);
                        try {
                            "ws-headers" in this.data && (this.proxyWsHeaders = JSON.stringify(this.data["ws-headers"]))
                        } catch (t) {}
                        "username" in this.data && (this.proxyUsername = this.data.username)
                    }
                    this.alterIdx = this.data._index
                }
            }
        },
        T = (n(173), n(175), n(7)),
        D = Object(T.a)(E, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-" + e.theme],
                attrs: {
                    id: "main-append-proxy-view"
                }
            }, [0 === e.type ? n("div", {
                staticClass: "input-view"
            }, [n("div", {
                staticClass: "title"
            }, [e._v(e._s(e.data ? "编辑" : "新建") + " 代理组")]), e._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.groupName,
                    expression: "groupName"
                }],
                attrs: {
                    type: "text",
                    placeholder: "组名称"
                },
                domProps: {
                    value: e.groupName
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.groupName = t.target.value)
                    }
                }
            }), e._v(" "), n("div", {
                staticClass: "group-type-list"
            }, e._l(e.gType, (function(t, r) {
                return n("div", {
                    key: r
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.groupType,
                        expression: "groupType"
                    }],
                    attrs: {
                        type: "radio",
                        id: t
                    },
                    domProps: {
                        value: t,
                        checked: e._q(e.groupType, t)
                    },
                    on: {
                        change: function() {
                            e.groupType = t
                        }
                    }
                }), e._v(" "), n("label", {
                    attrs: {
                        for: t
                    }
                }, [e._v(e._s(
                    (t == "url-test") ? "url 测试" :
                    (t == "fallback") ? "回退" :
                    (t == "select") ? "选择" :
                    (t == "load-balance") ? "负载均衡" :
                    t
                ))])])
            })), 0), e._v(" "), "select" === e.groupType ? e._e() : n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.groupUrl,
                    expression: "groupUrl"
                }],
                attrs: {
                    type: "text",
                    placeholder: "URL"
                },
                domProps: {
                    value: e.groupUrl
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.groupUrl = t.target.value)
                    }
                }
            }), e._v(" "), "select" === e.groupType ? e._e() : n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.groupInterval,
                    expression: "groupInterval"
                }],
                attrs: {
                    type: "text",
                    placeholder: "间隔时间 (秒)"
                },
                domProps: {
                    value: e.groupInterval
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.groupInterval = t.target.value)
                    }
                }
            })]) : 1 === e.type ? n("div", {
                staticClass: "input-view"
            }, [n("div", {
                staticClass: "title"
            }, [e._v(e._s(e.data ? "编辑" : "新建") + " 代理")]), e._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyName,
                    expression: "proxyName"
                }],
                attrs: {
                    type: "text",
                    placeholder: "代理名称"
                },
                domProps: {
                    value: e.proxyName
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyName = t.target.value)
                    }
                }
            }), e._v(" "), n("div", {
                staticClass: "proxy-type-list"
            }, e._l(e.pType, (function(t, r) {
                return n("div", {
                    key: r
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.proxyType,
                        expression: "proxyType"
                    }],
                    attrs: {
                        type: "radio",
                        id: t
                    },
                    domProps: {
                        value: t,
                        checked: e._q(e.proxyType, t)
                    },
                    on: {
                        change: function() {
                            e.proxyType = t
                        }
                    }
                }), e._v(" "), n("label", {
                    attrs: {
                        for: t
                    }
                }, [e._v(e._s(t))])])
            })), 0), e._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyServer,
                    expression: "proxyServer"
                }],
                attrs: {
                    type: "text",
                    placeholder: "服务器"
                },
                domProps: {
                    value: e.proxyServer
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyServer = t.target.value)
                    }
                }
            }), e._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyPort,
                    expression: "proxyPort"
                }],
                attrs: {
                    type: "text",
                    placeholder: "端口"
                },
                domProps: {
                    value: e.proxyPort
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyPort = t.target.value)
                    }
                }
            }), e._v(" "), "ss" === e.proxyType ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyPassword,
                    expression: "proxyPassword"
                }],
                attrs: {
                    type: "text",
                    placeholder: "密码"
                },
                domProps: {
                    value: e.proxyPassword
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyPassword = t.target.value)
                    }
                }
            }) : e._e(), e._v(" "), "vmess" === e.proxyType ? n("div", {
                staticClass: "cipher-list"
            }, e._l(e.vmessCipher, (function(t, r) {
                return n("div", {
                    key: r
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.proxyChipher,
                        expression: "proxyChipher"
                    }],
                    attrs: {
                        type: "radio",
                        id: t
                    },
                    domProps: {
                        value: t,
                        checked: e._q(e.proxyChipher, t)
                    },
                    on: {
                        change: function() {
                            e.proxyChipher = t
                        }
                    }
                }), e._v(" "), n("label", {
                    attrs: {
                        for: t
                    }
                }, [e._v(e._s(t))])])
            })), 0) : "ss" === e.proxyType ? n("div", {
                staticClass: "cipher-list"
            }, e._l(e.ssCipher, (function(t, r) {
                return n("div", {
                    key: r
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.proxyChipher,
                        expression: "proxyChipher"
                    }],
                    attrs: {
                        type: "radio",
                        id: t
                    },
                    domProps: {
                        value: t,
                        checked: e._q(e.proxyChipher, t)
                    },
                    on: {
                        change: function() {
                            e.proxyChipher = t
                        }
                    }
                }), e._v(" "), n("label", {
                    attrs: {
                        for: t
                    }
                }, [e._v(e._s(t))])])
            })), 0) : e._e(), e._v(" "), "ss" === e.proxyType ? n("div", {
                staticClass: "ss-list"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyObfs,
                    expression: "proxyObfs"
                }],
                attrs: {
                    type: "text",
                    placeholder: "Obfs (可选, tls 或者 http)"
                },
                domProps: {
                    value: e.proxyObfs
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyObfs = t.target.value)
                    }
                }
            }), e._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyObfshost,
                    expression: "proxyObfshost"
                }],
                attrs: {
                    type: "text",
                    placeholder: "Obfs-host (可选)"
                },
                domProps: {
                    value: e.proxyObfshost
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyObfshost = t.target.value)
                    }
                }
            })]) : e._e(), e._v(" "), "vmess" === e.proxyType ? n("div", {
                staticClass: "vmess-list"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyUuid,
                    expression: "proxyUuid"
                }],
                attrs: {
                    type: "text",
                    placeholder: "UUID"
                },
                domProps: {
                    value: e.proxyUuid
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyUuid = t.target.value)
                    }
                }
            }), e._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyAlterid,
                    expression: "proxyAlterid"
                }],
                attrs: {
                    type: "text",
                    placeholder: "AlterId"
                },
                domProps: {
                    value: e.proxyAlterid
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyAlterid = t.target.value)
                    }
                }
            }), e._v(" "), "vmess" === e.proxyType ? n("div", {
                staticClass: "cipher-list"
            }, e._l(e.vmessType, (function(t, r) {
                return n("div", {
                    key: r
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.proxyNetwork,
                        expression: "proxyNetwork"
                    }],
                    attrs: {
                        type: "radio",
                        id: t
                    },
                    domProps: {
                        value: t,
                        checked: e._q(e.proxyNetwork, t)
                    },
                    on: {
                        change: function() {
                            e.proxyNetwork = t
                        }
                    }
                }), e._v(" "), n("label", {
                    attrs: {
                        for: t
                    }
                }, [e._v(e._s(t))])])
            })), 0) : e._e()]) : e._e(), e._v(" "), "http" === e.proxyType || "socks5" === e.proxyType ? n("div", {
                staticClass: "input-view"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyUsername,
                    expression: "proxyUsername"
                }],
                attrs: {
                    type: "text",
                    placeholder: "用户名 (可选)"
                },
                domProps: {
                    value: e.proxyUsername
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyUsername = t.target.value)
                    }
                }
            }), e._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyPassword,
                    expression: "proxyPassword"
                }],
                attrs: {
                    type: "text",
                    placeholder: "密码 (可选)"
                },
                domProps: {
                    value: e.proxyPassword
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyPassword = t.target.value)
                    }
                }
            })]) : e._e(), e._v(" "), "vmess" === e.proxyType && "ws" === e.proxyNetwork ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyWsPath,
                    expression: "proxyWsPath"
                }],
                attrs: {
                    type: "text",
                    placeholder: "ws 路径"
                },
                domProps: {
                    value: e.proxyWsPath
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyWsPath = t.target.value)
                    }
                }
            }) : e._e(), e._v(" "), "vmess" === e.proxyType && "ws" === e.proxyNetwork ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyWsHeaders,
                    expression: "proxyWsHeaders"
                }],
                attrs: {
                    type: "text",
                    placeholder: "ws 头 (JSON)"
                },
                domProps: {
                    value: e.proxyWsHeaders
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.proxyWsHeaders = t.target.value)
                    }
                }
            }) : e._e(), e._v(" "), "vmess" === e.proxyType || "socks5" === e.proxyType || "http" === e.proxyType ? n("div", [n("div", [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxyTls,
                    expression: "proxyTls"
                }],
                attrs: {
                    type: "checkbox",
                    id: "vmess-tls"
                },
                domProps: {
                    checked: Array.isArray(e.proxyTls) ? -1 < e._i(e.proxyTls, null) : e.proxyTls
                },
                on: {
                    change: function(t) {
                        var n = e.proxyTls,
                            r = t.target,
                            i = !!r.checked;
                        if (Array.isArray(n)) {
                            var a = e._i(n, null);
                            r.checked ? 0 > a && (e.proxyTls = n.concat([null])) : -1 < a && (e.proxyTls = n.slice(0, a).concat(n.slice(a + 1)))
                        } else e.proxyTls = i
                    }
                }
            }), e._v(" "), n("label", {
                attrs: {
                    for: "vmess-tls"
                }
            }, [e._v("TLS")])]), e._v(" "), n("div", [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.proxySkipCertVerify,
                    expression: "proxySkipCertVerify"
                }],
                attrs: {
                    type: "checkbox",
                    id: "vmess-skip-cert-verify"
                },
                domProps: {
                    checked: Array.isArray(e.proxySkipCertVerify) ? -1 < e._i(e.proxySkipCertVerify, null) : e.proxySkipCertVerify
                },
                on: {
                    change: function(t) {
                        var n = e.proxySkipCertVerify,
                            r = t.target,
                            i = !!r.checked;
                        if (Array.isArray(n)) {
                            var a = e._i(n, null);
                            r.checked ? 0 > a && (e.proxySkipCertVerify = n.concat([null])) : -1 < a && (e.proxySkipCertVerify = n.slice(0, a).concat(n.slice(a + 1)))
                        } else e.proxySkipCertVerify = i
                    }
                }
            }), e._v(" "), n("label", {
                attrs: {
                    for: "vmess-skip-cert-verify"
                }
            }, [e._v("跳过证书验证")])])]) : e._e()]) : e._e(), e._v(" "), n("div", {
                staticClass: "btns"
            }, [n("div", {
                staticClass: "btn cancel",
                on: {
                    click: function() {
                        return e.$emit("inputCancel")
                    }
                }
            }, [e._v("取消")]), e._v(" "), n("div", {
                staticClass: "btn confirm",
                on: {
                    click: e.confirmInput
                }
            }, [e._v("确认")])])])
        }), [], !1, null, "8a057c1e", null);
    D.options.__file = "AppendProxyView.vue";
    var I = D.exports,
        A = n(4),
        $ = n.n(A),
        M = n(2),
        L = n.n(M),
        N = "proxy-groups",
        R = "proxies",
        z = "rules",
        F = {
            props: ["profileName"],
            components: {
                draggable: j.a,
                AppendProxyView: I
            },
            data: function() {
                return {
                    conf: null,
                    specialProxies: [{
                        name: "DIRECT"
                    }, {
                        name: "REJECT"
                    }],
                    addType: -1,
                    addData: null,
                    saveBtn: "保存"
                }
            },
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? i(Object(t), !0).forEach((function(n) {
                    x()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(C.mapState)({
                clashPath: function(e) {
                    return e.app.clashPath
                },
                profilesPath: function(e) {
                    return e.app.profilesPath
                }
            })),
            methods: {
                proxy2group: function(e) {
                    return e.name
                },
                removeFromGroup: function(e, t) {
                    this.conf[N][e].proxies.splice(t, 1)
                },
                removeFromProxies: function(e, t) {
                    e.stopPropagation();
                    var n = this.conf[R][t].name;
                    this.conf[R].splice(t, 1), this.conf[N].forEach((function(e) {
                        e.proxies = e.proxies.filter((function(e) {
                            return e !== n
                        }))
                    }))
                },
                removeGroup: function(e, t) {
                    e.stopPropagation();
                    var n = this.conf[N][t].name;
                    this.conf[N].splice(t, 1), this.conf[N].forEach((function(e) {
                        e.proxies = e.proxies.filter((function(e) {
                            return e !== n
                        }))
                    }))
                },
                renameGroup: function(e, t) {
                    this.conf[N].forEach((function(n) {
                        n.proxies = n.proxies.map((function(n) {
                            return n === e ? t : n
                        }))
                    }))
                },
                renameRule: function(e, t) {
                    this.conf[z] = this.conf[z].map((function(n) {
                        if (/\s*MATCH\s*,([^,]*)($|,*|\/\/|#)/.test(n)) {
                            if (RegExp.$1.trim() === e.trim()) return "MATCH,".concat(t).concat(RegExp.$2)
                        } else if (/([^,]*?),([^,]*?),([^,]*)($|,*|\/\/|#)/.test(n) && RegExp.$3.trim() === e.trim()) return "".concat(RegExp.$1, ",").concat(RegExp.$2, ",").concat(t).concat(RegExp.$4);
                        return n
                    }))
                },
                handleInputDone: function(e) {
                    if (this.addType = -1, 0 === e.type)
                        if (-1 === e.index) this.conf[N].push(e.content);
                        else {
                            var t = this.conf[N][e.index].proxies,
                                n = e.content,
                                r = this.conf[N][e.index].name,
                                i = e.content.name;
                            n.proxies = t, this.conf[N][e.index] = n, this.renameGroup(r, i), this.renameRule(r, i)
                        }
                    else if (1 === e.type)
                        if (-1 === e.index) this.conf[R].push(e.content);
                        else {
                            var a = e.content.name,
                                o = this.conf[R][e.index].name;
                            this.conf[R][e.index] = e.content, this.renameGroup(o, a), this.renameRule(o, a)
                        }
                },
                newGroup: function() {
                    this.addType = 0, this.addData = null
                },
                editGroup: function(e, t) {
                    var n = e.type;
                    return ["url-test", "fallback", "select", "load-balance"].includes(n) ? (this.addType = 0, e._index = t, void(this.addData = e)) : void this.$alert({
                        content: "无法编辑代理组类型 [".concat(n, "].")
                    })
                },
                newProxy: function() {
                    this.addType = 1, this.addData = null
                },
                editProxy: function(e, t) {
                    var n = e.type;
                    return ["ss", "vmess", "http", "socks"].includes(n) ? (this.addType = 1, e._index = t, void(this.addData = e)) : void this.$alert({
                        content: "无法编辑代理类型 [".concat(n, "].")
                    })
                },
                loadData: function() {
                    var e = L.a.join(this.profilesPath, this.profileName),
                        t = $.a.readFileSync(e, "utf8");
                    try {
                        this.conf = _.a.parse(t)
                    } catch (t) {}
                },
                saveData: function() {
                    if ("保存" === this.saveBtn) try {
                        var e = L.a.join(this.profilesPath, this.profileName);
                        $.a.writeFileSync(e, _.a.stringify(this.conf)), this.$emit("done")
                    } catch (e) {
                        this.$emit("error")
                    }
                }
            },
            mounted: function() {
                this.loadData()
            }
        },
        U = (n(177), n(179), Object(T.a)(F, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-config-view-" + e.theme]
            }, [n("div", {
                staticClass: "floating"
            }, [n("div", {
                staticClass: "hint"
            }, [e._v("\n" +
                "拖动以排序或者添加到右侧的列表中.")]), e._v(" "), n("div", {
                staticClass: "floating-right"
            }, [n("div", {
                staticClass: "main-btn save",
                on: {
                    click: e.saveData
                }
            }, [e._v(e._s(e.saveBtn))]), e._v(" "), n("div", {
                staticClass: "main-btn reload",
                on: {
                    click: function() {
                        return e.$emit("cancel")
                    }
                }
            }, [e._v("取消")])])]), e._v(" "), e.conf ? n("div", {
                staticClass: "drag"
            }, [n("div", {
                staticClass: "proxy"
            }, [e._m(0), e._v(" "), n("draggable", {
                staticClass: "dragArea",
                attrs: {
                    group: {
                        name: "people",
                        pull: "clone",
                        put: !1,
                        revertClone: !0
                    },
                    clone: e.proxy2group,
                    delay: 300,
                    animation: 200,
                    "delay-on-touch-only": !0
                },
                model: {
                    value: e.specialProxies,
                    callback: function(t) {
                        e.specialProxies = t
                    },
                    expression: "specialProxies"
                }
            }, e._l(e.specialProxies, (function(t, r) {
                return n("div", {
                    key: r,
                    staticClass: "proxy-item left-item"
                }, [e._v("\n          " + e._s(
                    (t.name == "DIRECT") ? "☆ 直连 ☆" :
                    (t.name == "REJECT") ? "☆ 拒绝 ☆" :
                    t.name
                ) + "\n        ")])
            })), 0), e._v(" "), n("div", {
                staticClass: "section-title"
            }, [n("h2", [e._v("代理组")]), e._v(" "), n("div", {
                staticClass: "add-icon",
                on: {
                    click: e.newGroup
                }
            }, [e._v("新建")])]), e._v(" "), n("draggable", {
                staticClass: "dragArea",
                attrs: {
                    group: {
                        name: "people",
                        pull: "clone",
                        put: !1,
                        revertClone: !0
                    },
                    clone: e.proxy2group,
                    delay: 300,
                    animation: 200,
                    "delay-on-touch-only": !0
                },
                model: {
                    value: e.conf["proxy-groups"],
                    callback: function(t) {
                        e.$set(e.conf, "proxy-groups", t)
                    },
                    expression: "conf['proxy-groups']"
                }
            }, e._l(e.conf["proxy-groups"], (function(t, r) {
                return n("div", {
                    key: r,
                    staticClass: "proxy-item left-item",
                    on: {
                        click: function() {
                            return e.editGroup(t, r)
                        }
                    }
                }, [n("div", {
                    domProps: {
                        innerHTML: e._s(e.$parseEmoji(t.name, 20, 0))
                    }
                }), e._v(" "), n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "white",
                        width: "18px",
                        height: "18px"
                    },
                    on: {
                        click: function(t) {
                            return e.removeGroup(t, r)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    }
                })])])
            })), 0), e._v(" "), n("div", {
                staticClass: "section-title"
            }, [n("h2", [e._v("代理")]), e._v(" "), n("div", {
                staticClass: "add-icon",
                on: {
                    click: e.newProxy
                }
            }, [e._v("新建")])]), e._v(" "), n("draggable", {
                staticClass: "dragArea",
                attrs: {
                    group: {
                        name: "people",
                        pull: "clone",
                        put: !1,
                        revertClone: !0
                    },
                    clone: e.proxy2group,
                    delay: 300,
                    animation: 200,
                    "delay-on-touch-only": !0
                },
                model: {
                    value: e.conf.proxies,
                    callback: function(t) {
                        e.$set(e.conf, "proxies", t)
                    },
                    expression: "conf['proxies']"
                }
            }, e._l(e.conf.proxies, (function(t, r) {
                return n("div", {
                    key: r,
                    staticClass: "proxy-item left-item",
                    on: {
                        click: function() {
                            return e.editProxy(t, r)
                        }
                    }
                }, [n("div", {
                    domProps: {
                        innerHTML: e._s(e.$parseEmoji(t.name, 20, 0))
                    }
                }), e._v(" "), n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "white",
                        width: "18px",
                        height: "18px"
                    },
                    on: {
                        click: function(t) {
                            return e.removeFromProxies(t, r)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    }
                })])])
            })), 0)], 1), e._v(" "), n("div", {
                staticClass: "proxy-group"
            }, e._l(e.conf["proxy-groups"], (function(t, r) {
                return n("div", {
                    key: r
                }, [n("div", {
                    staticClass: "section-title"
                }, [n("h2", {
                    domProps: {
                        innerHTML: e._s(e.$parseEmoji(t.name, 27, 0))
                    }
                }), e._v(" "), n("div", {
                    staticClass: "type-icon"
                }, [e._v("( " + e._s(
                    (t.type == "url-test") ? "url 测试" :
                    (t.type == "fallback") ? "回退" :
                    (t.type == "select") ? "选择" :
                    (t.type == "load-balance") ? "负载均衡" :
                    t.type
                ) + " )")])]), e._v(" "), n("draggable", {
                    staticClass: "dragArea",
                    attrs: {
                        group: {
                            name: "people"
                        },
                        scroll: !0,
                        scrollSensitivity: 100,
                        scrollSpeed: 50,
                        delay: 300,
                        animation: 200,
                        "delay-on-touch-only": !0
                    },
                    model: {
                        value: t.proxies,
                        callback: function(n) {
                            e.$set(t, "proxies", n)
                        },
                        expression: "group.proxies"
                    }
                }, e._l(t.proxies, (function(t, i) {
                    return n("div", {
                        key: i,
                        staticClass: "proxy-item right-item"
                    }, [n("div", {
                        domProps: {
                            innerHTML: e._s(e.$parseEmoji(t, 20, 0))
                        }
                    }), e._v(" "), n("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "white",
                            width: "18px",
                            height: "18px"
                        },
                        on: {
                            click: function() {
                                return e.removeFromGroup(r, i)
                            }
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }), e._v(" "), n("path", {
                        attrs: {
                            d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                        }
                    })])])
                })), 0)], 1)
            })), 0)]) : e._e(), e._v(" "), -1 === e.addType ? e._e() : n("append-proxy-view", {
                attrs: {
                    data: e.addData,
                    type: e.addType
                },
                on: {
                    inputDone: e.handleInputDone,
                    inputCancel: function() {
                        e.addType = -1
                    }
                }
            })], 1)
        }), [function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "section-title"
            }, [n("h2", [e._v("特殊代理")])])
        }], !1, null, "b5438d0a", null));
    U.options.__file = "ConfigView.vue";
    var H = U.exports,
        V = n(23),
        B = n.n(V),
        W = n(21),
        G = n.n(W),
        q = {
            props: ["profileName"],
            data: function() {
                return {
                    ruleTypes: ["DOMAIN-SUFFIX", "DOMAIN", "DOMAIN-KEYWORD", "IP-CIDR", "SRC-IP-CIDR", "GEOIP", "PROCESS-NAME", "DST-PORT", "SRC-PORT", "MATCH"],
                    selectedType: "",
                    proxyGroups: [],
                    selectedGroup: "",
                    content: ""
                }
            },
            computed: o(o({}, Object(C.mapState)({
                profilesPath: function(e) {
                    return e.app.profilesPath
                }
            })), Object(C.mapGetters)(["clashAxiosClient"])),
            methods: {
                inputDone: function() {
                    var e = null;
                    "MATCH" === this.selectedType && this.selectedGroup ? e = {
                        type: this.selectedType,
                        payload: "",
                        proxy: this.selectedGroup
                    } : this.content && this.selectedType && this.selectedGroup && (e = {
                        type: this.selectedType,
                        payload: this.content,
                        proxy: this.selectedGroup
                    }), this.$emit("done", e)
                },
                handleMaskClick: function() {
                    this.$emit("close")
                }
            },
            mounted: function() {
                try {
                    var e = _.a.parse($.a.readFileSync(L.a.join(this.profilesPath, this.profileName)).toString()),
                        t = e.proxies,
                        n = void 0 === t ? [] : t,
                        r = e["proxy-groups"],
                        i = void 0 === r ? [] : r,
                        a = n.map((function(e) {
                            return e.name
                        })),
                        o = i.map((function(e) {
                            return e.name
                        }));
                    this.proxyGroups = ["DIRECT", "REJECT"].concat(G()(o), G()(a))
                } catch (t) {}
            }
        },
        K = (n(181), n(183), Object(T.a)(q, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    type: "text/x-template",
                    id: "modal-template"
                }
            }, [n("transition", {
                attrs: {
                    name: "modal"
                }
            }, [n("div", {
                staticClass: "modal-mask",
                on: {
                    mousedown: e.handleMaskClick
                }
            }, [n("div", {
                staticClass: "modal-wrapper"
            }, [n("div", {
                class: ["modal-container-" + e.theme],
                on: {
                    mousedown: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [n("div", {
                class: ["model-title-" + e.theme]
            }, [n("div", [e._v("创建一个新的规则")]), e._v(" "), n("div", {
                staticClass: "rule-floating-btns"
            }, [n("div", {
                staticClass: "rule-floating-ok",
                on: {
                    click: e.inputDone
                }
            }, [e._v("新建")]), e._v(" "), n("div", {
                staticClass: "rule-floating-cancel",
                on: {
                    click: function() {
                        return e.$emit("close")
                    }
                }
            }, [e._v("\n                取消\n              ")])])]), e._v(" "), n("div", {
                class: ["scroll-view-" + e.theme]
            }, ["MATCH" === e.selectedType ? e._e() : n("div", {
                staticClass: "rule-section-title"
            }, [e._v("\n              内容\n            ")]), e._v(" "), n("div", ["MATCH" === e.selectedType ? e._e() : n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.content,
                    expression: "content"
                }],
                attrs: {
                    placeholder: "例: google.com",
                    id: "rule-content",
                    type: "text"
                },
                domProps: {
                    value: e.content
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.content = t.target.value)
                    }
                }
            })]), e._v(" "), n("div", {
                staticClass: "rule-section-title"
            }, [e._v("类型")]), e._v(" "), n("div", {
                staticClass: "rule-type-group"
            }, e._l(e.ruleTypes, (function(t, r) {
                return n("div", {
                    key: r,
                    class: {
                        "rule-type-item": !0, "rule-type-selected": t === e.selectedType
                    },
                    on: {
                        click: function() {
                            e.selectedType = t
                        }
                    }
                }, [e._v("\n                " + e._s(
                    (t == "DOMAIN-SUFFIX") ? "域名后缀" :
                    (t == "DOMAIN") ? "域名" :
                    (t == "DOMAIN-KEYWORD") ? "域名关键字" :
                    (t == "IP-CIDR") ? "IP CIDR" :
                    (t == "SRC-IP-CIDR") ? "源 IP CIDR" :
                    (t == "GEOIP") ? "GeoIP" :
                    (t == "PROCESS-NAME") ? "进程名称" :
                    (t == "DST-PORT") ? "DST 端口" :
                    (t == "SRC-PORT") ? "源端口" :
                    (t == "MATCH") ? "匹配" :
                    t
                ) + "\n              ")])
            })), 0), e._v(" "), n("div", {
                staticClass: "rule-section-title"
            }, [e._v("代理或者策略")]), e._v(" "), n("div", {
                staticClass: "rule-proxy-group"
            }, e._l(e.proxyGroups, (function(t, r) {
                return n("div", {
                    key: r,
                    class: {
                        "rule-proxy-item": !0, "rule-proxy-selected": t === e.selectedGroup
                    },
                    domProps: {
                        innerHTML: e._s(e.$parseEmoji((
                            (t == "DIRECT") ? "☆ 直连 ☆" :
                            (t == "REJECT") ? "☆ 拒绝 ☆" :
                            t
                        ), 20))
                    },
                    on: {
                        click: function() {
                            e.selectedGroup = t
                        }
                    }
                }, [e._v("\n                " + e._s(t) + "\n              ")])
            })), 0)])])])])])], 1)
        }), [], !1, null, "3efdfdda", null));
    K.options.__file = "RuleAlterView.vue";
    var Y = K.exports,
        X = n(20),
        J = [],
        Q = {
            props: ["profileName"],
            data: function() {
                return {
                    listData: [],
                    memoryData: [],
                    showAlterModel: !1,
                    saveBtnText: "保存",
                    axiosSource: null,
                    filterKeywords: "",
                    providers: {}
                }
            },
            components: {
                RuleAlterView: Y
            },
            watch: {},
            computed: c(c({}, Object(C.mapState)({
                clashPath: function(e) {
                    return e.app.clashPath
                },
                profiles: function(e) {
                    return e.app.profiles
                },
                profilesPath: function(e) {
                    return e.app.profilesPath
                }
            })), Object(C.mapGetters)(["clashAxiosClient"])),
            methods: {
                handleRuleClick: function(e) {
                    var t = this;
                    return g()(v.a.mark((function n() {
                        var r, i, a;
                        return v.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (r = e.type, i = e.payload, "RULE-SET" !== r) {
                                        n.next = 13;
                                        break
                                    }
                                    return n.prev = 2, n.next = 5, t.clashAxiosClient.put("/providers/rules/".concat(encodeURIComponent(i)));
                                case 5:
                                    a = n.sent, 204 === a.status ? (t.loadData(), Object(S.c)("成功", "RULE-SET [".concat(i, "] 已被更新!"))) : Object(S.c)("失败", "RULE-SET [".concat(i, "] 更新失败 (服务器错误)!")), n.next = 13;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n.catch(2), Object(S.c)("失败", "RULE-SET [".concat(i, "] 更新失败 (网络错误)!"));
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [2, 10]
                        ])
                    })))()
                },
                fromNow: function(e) {
                    return w()(e).locale('zh-cn').fromNow();
                },
                providerOfPayload: function(e) {
                    var t = this.providers[e];
                    return t || null
                },
                moveItem: function(e, t, n) {
                    this.removeItem(t, n), e ? this.memoryData.unshift(t) : this.memoryData.push(t), this.listData = this.memoryData.slice(0, 100)
                },
                randomBGC: function(e) {
                    var t = J.find((function(t) {
                        return t.type === e
                    }));
                    if (t) return {
                        "background-color": "rgb(".concat(t.r, ",").concat(t.g, ",").concat(t.b, ")")
                    };
                    var n = f(100 * Math.random() + 10),
                        r = f(100 * Math.random() + 10),
                        i = f(100 * Math.random() + 10);
                    return J.push({
                        type: e,
                        r: n,
                        g: r,
                        b: i
                    }), {
                        "background-color": "rgb(".concat(n, ",").concat(r, ",").concat(i, ")")
                    }
                },
                inputDone: function(e) {
                    this.showAlterModel = !1, e && (this.memoryData.unshift(e), this.listData.unshift(e))
                },
                handleFilterKeywordInput: X.debounce((function(e) {
                    var t = e.target;
                    if (t) {
                        var n = t.value;
                        this.filterKeywords = n, this.loadData()
                    }
                }), 500),
                applyRules: function() {
                    var e = this;
                    return g()(v.a.mark((function t() {
                        var n, r, i, a, o;
                        return v.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    try {
                                        n = JSON.parse(JSON.stringify(e.memoryData)), r = n.map((function(e) {
                                            var t = e.type,
                                                n = e.payload,
                                                r = e.proxy,
                                                i = e.params,
                                                a = void 0 === i ? "" : i;
                                            return n ? "".concat(t, ",").concat(n, ",").concat(r).concat(a) : "".concat(t, ",").concat(r)
                                        })), i = L.a.join(e.profilesPath, e.profileName), a = $.a.readFileSync(i, "utf8"), (o = _.a.parse(a)).rules = r, $.a.writeFileSync(i, _.a.stringify(o)), e.$emit("done"), e.saveBtnText = "完成"
                                    } catch (t) {
                                        e.$emit("error"), e.saveBtnText = "失败"
                                    }
                                    setTimeout((function() {
                                        e.saveBtnText = "保存"
                                    }), 3e3);
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                removeItem: function(e, t) {
                    var n = this.memoryData.findIndex((function(t) {
                        return t.payload === e.payload && t.proxy === e.proxy && t.type === e.type
                    })); - 1 < n && (this.memoryData.splice(n, 1), this.listData.splice(t, 1))
                },
                loadData: function() {
                    var e = this;
                    return g()(v.a.mark((function t() {
                        var n, r, i, a, o, s, c, d, l, u, p, f;
                        return v.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = L.a.join(e.profilesPath, e.profileName), r = $.a.readFileSync(n, "utf8"), t.prev = 2, t.next = 5, Promise.all([e.clashAxiosClient.get("/rules"), e.clashAxiosClient.get("/providers/rules")]);
                                case 5:
                                    i = t.sent, a = B()(i, 2), o = a[0].data, s = void 0 === o ? {} : o, c = a[1].data, d = (c = void 0 === c ? {} : c).providers, e.providers = d, l = s.rules, void 0 === l ? [] : l, u = _.a.parse(r), e.memoryData = u.rules.map((function(e) {
                                        var t = e.split(",");
                                        return 2 === t.length ? {
                                            type: t[0].trim(),
                                            payload: "",
                                            proxy: t[1].trim(),
                                            params: ""
                                        } : 3 === t.length ? {
                                            payload: t[1].trim(),
                                            proxy: t[2].trim(),
                                            type: t[0].trim(),
                                            params: ""
                                        } : 4 === t.length ? {
                                            payload: t[1].trim(),
                                            proxy: t[2].trim(),
                                            type: t[0].trim(),
                                            params: ",".concat(t[3])
                                        } : null
                                    })).filter((function(e) {
                                        return e
                                    })), "" === e.filterKeywords ? e.listData = e.memoryData.slice(0, 100) : (p = e.filterKeywords.trim().split(/\s+/).join("|"), f = new RegExp(p, "i"), e.listData = e.memoryData.filter((function(e) {
                                        return f.test(e.proxy) || f.test(e.payload) || f.test(e.type)
                                    })).slice(0, 100)), t.next = 21;
                                    break;
                                case 19:
                                    t.prev = 19, t.t0 = t.catch(2);
                                case 21:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 19]
                        ])
                    })))()
                }
            },
            mounted: function() {
                this.loadData()
            },
            destroyed: function() {}
        },
        Z = (n(185), n(187), Object(T.a)(Q, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "main-log-view"
                }
            }, [n("div", {
                staticClass: "header"
            }, [n("div", {
                staticClass: "title"
            }, [e._v("前 100 个匹配的规则 (共 " + e._s(e.memoryData.length) + " 个).")]), e._v(" "), n("div", {
                staticClass: "header-btns"
            }, [n("div", {
                staticClass: "btn btn-add md-button",
                on: {
                    click: function() {
                        e.showAlterModel = !0
                    }
                }
            }, [e._v("\n        新建\n      ")]), e._v(" "), n("div", {
                staticClass: "btn btn-save md-button",
                on: {
                    click: e.applyRules
                }
            }, [e._v("\n        " + e._s(e.saveBtnText) + "\n      ")]), e._v(" "), n("div", {
                staticClass: "btn btn-back md-button",
                on: {
                    click: function() {
                        return e.$emit("cancel")
                    }
                }
            }, [e._v("\n        取消\n      ")])])]), e._v(" "), n("div", {
                staticClass: "filter-view"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.filterKeywords,
                    expression: "filterKeywords"
                }],
                attrs: {
                    type: "text",
                    placeholder: "按关键字筛选"
                },
                domProps: {
                    value: e.filterKeywords
                },
                on: {
                    input: [function(t) {
                        t.target.composing || (e.filterKeywords = t.target.value)
                    }, function(t) {
                        return e.handleFilterKeywordInput(t)
                    }]
                }
            })]), e._v(" "), n("div", {
                class: ["log-list-" + e.theme]
            }, e._l(e.listData, (function(t, r) {
                return n("div", {
                    key: r,
                    class: ["log-item-" + e.theme],
                    attrs: {
                        title: t.payload
                    },
                    on: {
                        click: function() {
                            return e.handleRuleClick(t)
                        }
                    }
                }, [n("div", {
                    staticClass: "left"
                }, [n("div", {
                    class: ["url", e.providerOfPayload(t.payload) ? "rule-set" : ""]
                }, [e._v("\n          " + e._s(t.payload) + "\n        ")]), e._v(" "), n("div", {
                    class: ["rule-" + e.theme]
                }, [e._v("\n          " + e._s(
                    (t.type == "DOMAIN-SUFFIX") ? "域名后缀" :
                    (t.type == "DOMAIN") ? "域名" :
                    (t.type == "DOMAIN-KEYWORD") ? "域名关键字" :
                    (t.type == "IP-CIDR") ? "IP CIDR" :
                    (t.type == "IP-CIDR6") ? "IPv6 CIDR" :
                    (t.type == "SRC-IP-CIDR") ? "源 IP CIDR" :
                    (t.type == "GEOIP") ? "GeoIP" :
                    (t.type == "PROCESS-NAME") ? "进程名称" :
                    (t.type == "DST-PORT") ? "DST 端口" :
                    (t.type == "SRC-PORT") ? "源端口" :
                    (t.type == "MATCH") ? "匹配" :
                    t.type
                ) + "\n          "), e.providerOfPayload(t.payload) ? n("div", [e._v("\n            规则: " + e._s(e.providerOfPayload(t.payload).ruleCount) + "\n          ")]) : e._e(), e._v(" "), e.providerOfPayload(t.payload) ? n("div", [e._v("\n            最后更新:\n            " + e._s(e.fromNow(e.providerOfPayload(t.payload).updatedAt)) + "\n          ")]) : e._e(), e._v(" "), e.providerOfPayload(t.payload) ? n("div", [e._v("\n            " + e._s(e.providerOfPayload(t.payload).vehicleType) + "\n            " + e._s(e.providerOfPayload(t.payload).behavior) + "\n          ")]) : e._e()])]), e._v(" "), n("div", {
                    staticClass: "right-main"
                }, [n("div", {
                    staticClass: "right",
                    style: e.randomBGC(t.proxy),
                    domProps: {
                        innerHTML: e._s(e.$parseEmoji((
                            (t.proxy == "DIRECT") ? "☆ 直连 ☆" :
                            (t.proxy == "REJECT") ? "☆ 拒绝 ☆" :
                            t.proxy
                        ), 22, 0, 0))
                    }
                }, [e._v("\n          " + e._s(t.proxy) + "\n        ")]), e._v(" "), n("svg", {
                    staticClass: "icon",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "enable-background": "new 0 0 24 24",
                        viewBox: "0 0 24 24",
                        fill: "dark" === e.theme ? "white" : "black"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), e.moveItem(!0, t, r)
                        }
                    }
                }, [n("rect", {
                    attrs: {
                        fill: "none",
                        height: "24",
                        width: "24"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M5.71,9.7L5.71,9.7c0.39,0.39,1.02,0.39,1.41,0L11,5.83V21c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1V5.83l3.88,3.88 c0.39,0.39,1.02,0.39,1.41,0l0,0c0.39-0.39,0.39-1.02,0-1.41L12.7,2.7c-0.39-0.39-1.02-0.39-1.41,0L5.71,8.29 C5.32,8.68,5.32,9.32,5.71,9.7z"
                    }
                })]), e._v(" "), n("svg", {
                    staticClass: "icon",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "enable-background": "new 0 0 24 24",
                        viewBox: "0 0 24 24",
                        fill: "dark" === e.theme ? "white" : "black"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), e.moveItem(!1, t, r)
                        }
                    }
                }, [n("rect", {
                    attrs: {
                        fill: "none",
                        height: "24",
                        width: "24"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M18.3,14.29L18.3,14.29c-0.39-0.39-1.02-0.39-1.41,0L13,18.17V3c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v15.18l-3.88-3.88 c-0.39-0.39-1.02-0.39-1.41,0l0,0c-0.39,0.39-0.39,1.02,0,1.41l5.59,5.59c0.39,0.39,1.02,0.39,1.41,0l5.59-5.59 C18.68,15.32,18.68,14.68,18.3,14.29z"
                    }
                })]), e._v(" "), n("svg", {
                    staticClass: "icon",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "dark" === e.theme ? "white" : "black"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), e.removeItem(t, r)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zm3.17-7.83c.39-.39 1.02-.39 1.41 0L12 12.59l1.42-1.42c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 14l1.42 1.42c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L12 15.41l-1.42 1.42c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 14l-1.42-1.42c-.39-.38-.39-1.02 0-1.41zM15.5 4l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"
                    }
                })])])])
            })), 0), e._v(" "), e.showAlterModel ? n("rule-alter-view", {
                attrs: {
                    "profile-name": e.profileName
                },
                on: {
                    close: function() {
                        e.showAlterModel = !1
                    },
                    done: e.inputDone
                }
            }) : e._e()], 1)
        }), [], !1, null, "40ae76fc", null));
    Z.options.__file = "RuleView.vue";
    var ee = Z.exports,
        te = n(111),
        ne = n.n(te),
        re = {
            name: "QRCodeView",
            components: {},
            props: {
                url: String
            },
            data: function() {
                return {
                    src: "",
                    isWithSheme: !0
                }
            },
            watch: {
                isWithSheme: function() {
                    this.updateQrcode()
                }
            },
            computed: {
                finalURL: function() {
                    return this.isWithSheme ? "clash://install-config?url=".concat(encodeURIComponent(this.url)) : this.url
                }
            },
            methods: {
                handleGoToURL: function() {
                    this.$electron.shell.openExternal(this.url)
                },
                updateQrcode: function() {
                    var e = this;
                    return g()(v.a.mark((function t() {
                        return v.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, ne.a.toDataURL(e.finalURL);
                                case 3:
                                    e.src = t.sent, t.next = 8;
                                    break;
                                case 6:
                                    t.prev = 6, t.t0 = t.catch(0);
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 6]
                        ])
                    })))()
                }
            },
            mounted: function() {
                this.updateQrcode()
            }
        },
        ie = (n(189), Object(T.a)(re, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "qrcode-view-main",
                on: {
                    click: function() {
                        return e.$emit("hide")
                    }
                }
            }, [n("div", {
                staticClass: "content",
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [n("img", {
                attrs: {
                    src: e.src,
                    alt: ""
                }
            }), e._v(" "), n("div", {
                staticClass: "url",
                on: {
                    click: e.handleGoToURL
                }
            }, [e._v(e._s(e.finalURL))]), e._v(" "), n("div", {
                staticClass: "btn",
                on: {
                    click: function() {
                        e.isWithSheme = !e.isWithSheme
                    }
                }
            }, [e._v("\n      " + e._s(e.isWithSheme ? "Remove" : "Include") + " Scheme\n    ")])])])
        }), [], !1, null, "7ba0992e", null));
    ie.options.__file = "QRCodeView.vue";
    var ae = ie.exports,
        oe = n(4),
        se = n(2),
        ce = n(18),
        de = n(20),
        le = ce.CancelToken,
        ue = "manual-stop",
        pe = {
            data: function() {
                return {
                    btnType: 0,
                    resultHint: "从一个 URL 下载",
                    editProfileName: "",
                    editProfileType: -1,
                    fileWatcher: null,
                    inputFocus: !1,
                    subUrl: "",
                    downlodingUrls: {},
                    dragSelectedName: "",
                    qrcodeURL: ""
                }
            },
            components: {
                draggable: j.a,
                ConfigView: H,
                RuleView: ee,
                QRCodeView: ae
            },
            directives: {
                focus: {
                    update: function(e, t) {
                        t.value && e.focus()
                    }
                }
            },
            computed: p(p(p({}, Object(C.mapState)({
                clashPath: function(e) {
                    return e.app.clashPath
                },
                pfs: function(e) {
                    return e.app.profiles
                },
                confData: function(e) {
                    return e.app.confData
                },
                profilesPath: function(e) {
                    return e.app.profilesPath
                },
                settings: function(e) {
                    return e.app.settings
                }
            })), Object(C.mapGetters)(["clashAxiosClient"])), {}, {
                profiles: {
                    get: function() {
                        var e = this.pfs.files;
                        return void 0 === e ? [] : e
                    },
                    set: function(e) {
                        this.changeProfiles({
                            profiles: e
                        })
                    }
                },
                getBtnText: function() {
                    return 3 === this.btnType ? "正在下载" : 1 === this.btnType ? "错误!" : 2 === this.btnType ? "成功!" : "下载"
                },
                getRightBtnText: function() {
                    return "直连模式"
                },
                getRightBtnClass: function() {
                    return {
                        confirm: !0,
                        "confirm-right": !0,
                        "btn-error": 1 === this.btnType,
                        "btn-success": 2 === this.btnType,
                        "btn-loading": 3 === this.btnType
                    }
                },
                getBtnClass: function() {
                    return {
                        confirm: !0,
                        "confirm-left": !0,
                        "btn-error": 1 === this.btnType,
                        "btn-success": 2 === this.btnType,
                        "btn-loading": 3 === this.btnType
                    }
                }
            }),
            methods: p(p({}, Object(C.mapMutations)({
                changeProfiles: "CHANGE_PROFILES",
                changeProfilesIndex: "CHANGE_PROFILES_INDEX",
                changeProfile: "CHANGE_PROFILE",
                appendProfile: "APPEND_PROFILE",
                deleteProfile: "DELETE_PROFILE"
            })), {}, {
                isProifleExpired: function(e) {
                    var t = e.time,
                        n = e.interval;
                    if (0 < n && t) try {
                        var r = oe.statSync(se.join(this.profilesPath, t)).mtime;
                        if (r) return w()(r).isBefore(w()().subtract(n, "hours"))
                    } catch (t) {}
                    return !1
                },
                parserHint: function(e) {
                    var t = e.url,
                        n = e.reg;
                    return t ? "url (".concat(t.slice(0, 8), "...").concat(t.slice(-20), ")") : n ? "reg (".concat(n, ")") : ""
                },
                matchingParserCount: function(e) {
                    var t = this.settings.profileParsersText,
                        n = [];
                    if (t) try {
                        var r = _.a.parse(t).parsers;
                        n = (void 0 === r ? [] : r) || []
                    } catch (t) {}
                    var i = e.url;
                    return i ? n.filter((function(e) {
                        var t = e.url,
                            n = e.reg;
                        return t ? t === i : n ? new RegExp(n).test(i) : void 0
                    })) : []
                },
                handleUpdateAllProfiles: function() {
                    var e, t = d(this.profiles);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = e.value;
                            this.refreshProfile(n)
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                },
                handleParserInfoShow: function(e) {
                    var t = this;
                    return g()(v.a.mark((function n() {
                        var r, i;
                        return v.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = t.matchingParserCount(e), i = r.map((function(e, n) {
                                        return "".concat(n + 1, ". ").concat(t.parserHint(e))
                                    })).join("<br />"), n.next = 4, t.$select({
                                        title: "找到 ".concat(r.length, " 个匹配的解析器"),
                                        message: "".concat(i),
                                        items: ["编辑解析器", "确认"]
                                    });
                                case 4:
                                    0 === n.sent && t.$router.replace({
                                        path: "/home/setting",
                                        query: {
                                            action: "edit-parsers"
                                        }
                                    });
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                handleQrcodeOpen: function(e, t) {
                    e.stopPropagation();
                    var n = t.url;
                    n && (this.qrcodeURL = n)
                },
                handleDragStart: function() {
                    var e = this.pfs.index;
                    0 > (void 0 === e ? -1 : e) || (this.dragSelectedName = this.pfs.files[this.pfs.index].time)
                },
                handleDragEnd: function() {
                    var e = this;
                    if ("" !== this.dragSelectedName) {
                        var t = this.pfs.files.findIndex((function(t) {
                            return t.time === e.dragSelectedName
                        }));
                        this.changeProfilesIndex({
                            index: t
                        })
                    }
                },
                handleCopyProfile: function(e) {
                    var t = this;
                    return g()(v.a.mark((function n() {
                        var r, i, a, o;
                        return v.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = [{
                                        name: "名称",
                                        key: "filename",
                                        placeholder: "输入一个新的文件名",
                                        required: !0
                                    }], n.prev = 1, n.next = 4, t.$input({
                                        title: "复制配置文件",
                                        data: r
                                    });
                                case 4:
                                    i = n.sent, a = i.filename, o = void 0 === a ? "" : a, t.localCopy(o, se.join(t.profilesPath, e.time)), n.next = 12;
                                    break;
                                case 10:
                                    n.prev = 10, n.t0 = n.catch(1);
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [1, 10]
                        ])
                    })))()
                },
                handleEditItem: function(e) {
                    var t = this;
                    return g()(v.a.mark((function n() {
                        var r, i, a, o, s, c, d, l, u, f, h;
                        return v.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = p({}, t.pfs.files[e]), "编辑配置文件信息", i = r.interval, a = void 0 === i ? 0 : i, o = [{
                                        key: "name",
                                        name: "名称",
                                        required: !0,
                                        value: r.name
                                    }, {
                                        key: "url",
                                        name: "URL",
                                        value: r.url
                                    }, {
                                        key: "interval",
                                        name: "更新间隔时间 (小时)",
                                        validate: function(e) {
                                            return /^\d+$/.test(e) ? "" : "更新间隔时间必须是一个整数"
                                        },
                                        value: a
                                    }], n.prev = 4, n.next = 7, t.$input({
                                        title: "编辑配置文件信息",
                                        data: o
                                    });
                                case 7:
                                    s = n.sent, c = s.name, d = void 0 === c ? "" : c, l = s.url, u = void 0 === l ? "" : l, f = s.interval, h = void 0 === f ? 0 : f, r.name = d, r.url = u, r.interval = 1 * h, t.changeProfile({
                                        index: e,
                                        profile: r
                                    }), n.next = 22;
                                    break;
                                case 20:
                                    n.prev = 20, n.t0 = n.catch(4);
                                case 22:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [4, 20]
                        ])
                    })))()
                },
                listItemClassNames: function(e) {
                    var t = ["list-item-".concat(this.theme)];
                    "" === this.pfs.files[e].url && t.push("item-local");
                    var n = this.pfs.index;
                    return e === (void 0 === n ? -1 : n) && t.push("item-cur-".concat(this.theme)), t
                },
                handleURLConfirm: function(e) {
                    var t = this;
                    return g()(v.a.mark((function n() {
                        return v.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (13 !== e.keyCode) {
                                        n.next = 3;
                                        break
                                    }
                                    return n.next = 3, t.handleDownload();
                                case 3:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                handleDownload: function() {
                    var e = this;
                    return g()(v.a.mark((function t() {
                        var n;
                        return v.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("" !== e.subUrl) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (3 !== e.btnType) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 4:
                                    return t.prev = 4, e.btnType = 3, t.next = 8, e.updateConfig({
                                        url: e.subUrl,
                                        selectAfterUpdated: !0
                                    });
                                case 8:
                                    n = t.sent, e.btnType = n ? 2 : 1, t.next = 15;
                                    break;
                                case 12:
                                    t.prev = 12, t.t0 = t.catch(4), e.btnType = 1;
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [4, 12]
                        ])
                    })))()
                },
                handleImport: function() {
                    var e = this;
                    return g()(v.a.mark((function t() {
                        var n, r, i;
                        return v.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    (n = e.$electron.remote.dialog) && ((r = n.showOpenDialogSync({
                                        properties: ["openFile"]
                                    })) && 0 < r.length && (i = r[0], e.localCopy(se.basename(i), se.resolve(i))));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                dropProfile: function(e) {
                    e.preventDefault(), e.stopPropagation();
                    var t, n = d(e.dataTransfer.files);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var r = t.value;
                            this.localCopy(se.basename(r.path), se.resolve(r.path))
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                },
                dragOverProfile: function(e) {
                    e.preventDefault(), e.stopPropagation()
                },
                editDone: function() {
                    var e = this,
                        t = this.pfs.files.findIndex((function(t) {
                            return t.time === e.editProfileName
                        }));
                    t === this.pfs.index && this.switchProfile(t), this.editProfileName = "", this.editProfileType = -1
                },
                localCopy: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                    if ("" !== e) {
                        var n = (new Date).getTime() + ".yml",
                            r = p({}, this.pfs),
                            i = r.files.findIndex((function(t) {
                                return t.name === e && "" === t.url
                            }));
                        if (-1 < i && i < r.files.length) return void this.$alert({
                            content: "本地文件已经存在.",
                            title: "错误"
                        });
                        this.appendProfile({
                            profile: {
                                url: "",
                                time: n,
                                name: e,
                                selected: []
                            }
                        });
                        var a = se.join(this.clashPath, "config.yaml"),
                            o = r.files,
                            s = r.index,
                            c = void 0 === s ? -1 : s;
                        if (0 <= c && c < o.length) {
                            var d = se.join(this.profilesPath, o[c].time);
                            oe.existsSync(d) && (a = d)
                        }
                        "" !== t && (a = t), oe.copyFileSync(a, se.join(this.profilesPath, n))
                    }
                },
                handleDeleteProfile: function(e) {
                    var t = this;
                    return g()(v.a.mark((function n() {
                        var r, i, a, o, s, c, d;
                        return v.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = t.pfs.files[e], i = r.name, r.url, n.next = 3, t.$showDialog({
                                        type: "warning",
                                        message: '确认要删除 "'.concat(i, '"?'),
                                        buttons: ["是", "否"]
                                    });
                                case 3:
                                    if (a = n.sent, 0 === a.response) {
                                        try {
                                            o = t.pfs.files, s = (void 0 === o ? [] : o)[e].time, oe.unlinkSync(se.join(t.profilesPath, s))
                                        } catch (e) {}
                                        t.deleteProfile({
                                            index: e
                                        }), c = t.pfs.index, e === (d = void 0 === c ? -1 : c) ? t.changeProfilesIndex({
                                            index: -1
                                        }) : e < d && t.changeProfilesIndex({
                                            index: d - 1
                                        })
                                    }
                                    case 6:
                                    case "end":
                                        return n.stop()
                            }
                        }), n)
                    })))()
                },
                openProfile: function(e) {
                    this.$electron.shell.openPath(se.join(this.profilesPath, e.time))
                },
                switchProfile: function(e) {
                    var t = this;
                    return g()(v.a.mark((function n() {
                        var r, i, a, o, s;
                        return v.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (-1 !== e) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 2:
                                    return t.changeProfilesIndex({
                                        index: e
                                    }), n.next = 5, t.$parent.refreshProfile();
                                case 5:
                                    if (r = n.sent, i = r.success, a = r.message, i) {
                                        n.next = 17;
                                        break
                                    }
                                    return n.next = 11, t.$showDialog({
                                        type: "error",
                                        message: "无法切换到这个配置文件!",
                                        detail: a || "",
                                        buttons: ["确认", "在文本模式下编辑"]
                                    });
                                case 11:
                                    o = n.sent, 1 === o.response && t.openProfile(t.pfs.files[e]), t.changeProfilesIndex({
                                        index: -1
                                    }), n.next = 21;
                                    break;
                                case 17:
                                    if (s = t.settings.connProfile, !(void 0 !== s && s)) {
                                        n.next = 21;
                                        break
                                    }
                                    return n.next = 21, t.clashAxiosClient.delete("connections");
                                case 21:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                refreshProfile: function(e) {
                    var t = this;
                    return g()(v.a.mark((function n() {
                        var r, i, a, o;
                        return v.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (r = e.url, "" !== (i = void 0 === r ? "" : r)) {
                                        n.next = 3;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 3:
                                    if (!(a = t.downlodingUrls[i])) {
                                        n.next = 8;
                                        break
                                    }
                                    return a(ue), t.$delete(t.downlodingUrls, i), n.abrupt("return");
                                case 8:
                                    return n.prev = 8, o = new le((function(e) {
                                        t.downlodingUrls = p(p({}, t.downlodingUrls), {}, x()({}, i, e))
                                    })), n.next = 12, t.updateConfig({
                                        url: i,
                                        cancelToken: o
                                    });
                                case 12:
                                    n.next = 16;
                                    break;
                                case 14:
                                    n.prev = 14, n.t0 = n.catch(8);
                                case 16:
                                    return n.prev = 16, t.$delete(t.downlodingUrls, i), n.finish(16);
                                case 19:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [8, 14, 16, 19]
                        ])
                    })))()
                },
                editProfile: function(e) {
                    this.editProfileName = e.time, this.editProfileType = 0
                },
                editProfileRule: function(e) {
                    this.editProfileName = e.time, this.editProfileType = 1
                },
                parseDomain: function(e) {
                    var t = "本地文件";
                    try {
                        var n = new URL(e),
                            r = n.host;
                        return "文件:" === n.protocol ? t : r || "空的主机"
                    } catch (t) {}
                    return t
                },
                parseDate: function(e) {
                    var t = e.time;
                    try {
                        var n = oe.statSync(se.join(this.profilesPath, t)).mtime;
                        return w()(n).locale('zh-cn').fromNow()
                    } catch (t) {
                        return "无法获取变更时间"
                    }
                },
                updateConfig: function(e) {
                    var t = this;
                    return g()(v.a.mark((function n() {
                        var r, i, a, o, s, c, d, l, u;
                        return v.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = e.url, i = e.cancelToken, a = void 0 === i ? null : i, o = e.selectAfterUpdated, s = void 0 !== o && o, n.next = 3, Object(O.c)({
                                        url: r,
                                        cancelToken: a
                                    }).catch((function() {}));
                                case 3:
                                    if (c = n.sent, d = c.success, l = c.message, u = c.targetIndex, !d) {
                                        n.next = 13;
                                        break
                                    }
                                    if (!s) {
                                        n.next = 11;
                                        break
                                    }
                                    return n.next = 11, t.switchProfile(u).catch((function() {}));
                                case 11:
                                    n.next = 14;
                                    break;
                                case 13:
                                    l.endsWith(ue) || t.$alert({
                                        content: l
                                    });
                                case 14:
                                    return n.abrupt("return", d);
                                case 15:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                formatSubInfo: function(e) {
                    var t = e.upload,
                        n = void 0 === t ? 0 : t,
                        r = e.download,
                        i = void 0 === r ? 0 : r,
                        a = e.total,
                        o = void 0 === a ? 0 : a,
                        s = e.expire,
                        c = void 0 === s ? 0 : s;
                    if (n && i && o) {
                        var d = Object(S.d)(n + i, 1),
                            l = Object(S.d)(o, 1),
                            u = "".concat(d, " | ").concat(l);
                        return c ? "".concat(u, " | ").concat(w()(1e3 * c).format("YYYY-MM-DD")) : u
                    }
                    return ""
                },
                pasteURL: function() {
                    this.inputFocus = !1, this.subUrl = this.$electron.clipboard.readText(), this.inputFocus = !0
                },
                setupWatcher: function() {
                    var e = this,
                        t = de.debounce((function(t, n) {
                            if (/^\d+(?:\.yml)$/.test(n)) {
                                var r = e.pfs.files.findIndex((function(e) {
                                    return e.time === n
                                })); - 1 < r && r === e.pfs.index && e.switchProfile(r)
                            }
                        }), 2e3);
                    this.fileWatcher = oe.watch(se.join(this.profilesPath), {}, t)
                },
                removeWatcher: function() {
                    this.fileWatcher && this.fileWatcher.close()
                }
            }),
            beforeRouteEnter: function(e, t, n) {
                n(function() {
                    var e = g()(v.a.mark((function e(t) {
                        var n;
                        return v.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.setupWatcher(), 0 !== (null === (n = t.pfs.files) || void 0 === n ? void 0 : n.length)) {
                                        e.next = 5;
                                        break
                                    }
                                    return t.localCopy("config.yaml"), e.next = 5, t.switchProfile(0);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }())
            },
            beforeRouteLeave: function(e, t, n) {
                for (var r in this.removeWatcher(), this.downlodingUrls) {
                    (0, this.downlodingUrls[r])(ue)
                }
                n()
            }
        },
        fe = (n(191), n(193), Object(T.a)(pe, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "main-server-view"
                },
                on: {
                    drop: e.dropProfile,
                    dragover: e.dragOverProfile
                }
            }, [e.editProfileName && 0 === e.editProfileType ? n("config-view", {
                attrs: {
                    "clash-path": e.clashPath,
                    "profile-name": e.editProfileName
                },
                on: {
                    cancel: function() {
                        e.editProfileName = "", e.editProfileType = -1
                    },
                    done: e.editDone,
                    error: function() {
                        e.editProfileName = "", e.editProfileType = -1
                    }
                }
            }) : e.editProfileName && 1 === e.editProfileType ? n("rule-view", {
                attrs: {
                    "clash-path": e.clashPath,
                    "profile-name": e.editProfileName
                },
                on: {
                    cancel: function() {
                        e.editProfileName = "", e.editProfileType = -1
                    },
                    done: e.editDone,
                    error: function() {
                        e.editProfileName = "", e.editProfileType = -1
                    }
                }
            }) : n("div", {
                staticClass: "main"
            }, [n("div", {
                class: ["card-" + e.theme, "remote-view"]
            }, [n("div", {
                staticClass: "input-container"
            }, [n("input", {
                directives: [{
                    name: "focus",
                    rawName: "v-focus",
                    value: e.inputFocus,
                    expression: "inputFocus"
                }, {
                    name: "model",
                    rawName: "v-model",
                    value: e.subUrl,
                    expression: "subUrl"
                }],
                attrs: {
                    spellcheck: "false",
                    type: "text",
                    placeholder: "从一个 URL 下载"
                },
                domProps: {
                    value: e.subUrl
                },
                on: {
                    keydown: e.handleURLConfirm,
                    input: function(t) {
                        t.target.composing || (e.subUrl = t.target.value)
                    }
                }
            }), e._v(" "), n("svg", {
                staticClass: "copy-icon",
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "white"
                },
                on: {
                    click: e.pasteURL
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1zm.59 4.59l4.83 4.83c.37.37.58.88.58 1.41V21c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h6.17c.53 0 1.04.21 1.42.59zM15 12h4.5L14 6.5V11c0 .55.45 1 1 1z"
                }
            })])]), e._v(" "), n("div", {
                staticClass: "btns-container"
            }, [n("div", {
                class: e.getBtnClass,
                on: {
                    click: e.handleDownload
                }
            }, [e._v("\n          " + e._s(e.getBtnText) + "\n        ")]), e._v(" "), n("div", {
                staticClass: "confirm confirm-right update-all-btn",
                on: {
                    click: e.handleUpdateAllProfiles
                }
            }, [e._v("\n          更新全部\n        ")]), e._v(" "), n("div", {
                staticClass: "confirm confirm-right",
                on: {
                    click: e.handleImport
                }
            }, [e._v("导入")])])]), e._v(" "), n("draggable", {
                class: ["list-view-" + e.theme],
                attrs: {
                    delay: 300,
                    animation: 200,
                    "delay-on-touch-only": !0
                },
                on: {
                    start: e.handleDragStart,
                    end: e.handleDragEnd
                },
                model: {
                    value: e.profiles,
                    callback: function(t) {
                        e.profiles = t
                    },
                    expression: "profiles"
                }
            }, [e._l(e.profiles, (function(t, r) {
                return n("div", {
                    key: r,
                    class: ["list-item-" + e.theme, r === e.pfs.index ? "item-cur-" + e.theme : ""],
                    on: {
                        click: function() {
                            return e.switchProfile(r)
                        }
                    }
                }, [n("div", {
                    staticClass: "indicator"
                }), e._v(" "), n("div", {
                    staticClass: "item-info"
                }, [n("div", {
                    staticClass: "item-name"
                }, [n("div", {
                    staticClass: "item-name-top"
                }, [n("div", [e._v(e._s(t.name))])]), e._v(" "), n("div", {
                    staticClass: "item-name-bottom",
                    attrs: {
                        title: t.url
                    },
                    on: {
                        click: [function(n) {
                            return n.ctrlKey ? e.handleQrcodeOpen(n, t) : null
                        }, function(n) {
                            return n.metaKey ? e.handleQrcodeOpen(n, t) : null
                        }]
                    }
                }, [e._v("\n              ➥ " + e._s(e.parseDomain(t.url)) + "\n              "), n("span", {
                    class: {
                        "item-time": !0, "item-expired": e.isProifleExpired(t)
                    }
                }, [e._v("\n                " + e._s("(" + e.parseDate(t) + ")") + "\n              ")])]), e._v(" "), n("div", {
                    staticClass: "item-subinfo"
                }, [e._v("\n              " + e._s(e.formatSubInfo(t.subInfo || {})) + "\n            ")])]), e._v(" "), n("div", {
                    staticClass: "item-edit-zone",
                    on: {
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }
                }, [n("div", {
                    staticClass: "item-icon",
                    on: {
                        click: function() {
                            return e.openProfile(t)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [n("title", [e._v("在文本模式下编辑")]), e._v(" "), n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M8.7 15.9L4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0l3.9-3.9-3.9-3.9c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0-.39-.39-.39-1.01 0-1.4z"
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "item-icon",
                    on: {
                        click: function() {
                            return e.editProfile(t)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [n("title", [e._v("编辑策略")]), e._v(" "), n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "item-icon",
                    on: {
                        click: function() {
                            return e.editProfileRule(t)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [n("title", [e._v("编辑规则")]), e._v(" "), n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M12 9h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20 3H4c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 16H5V5h14v14z"
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "item-icon",
                    on: {
                        click: function() {
                            return e.handleCopyProfile(t)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [n("title", [e._v("克隆配置文件")]), e._v(" "), n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1zm4 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "item-icon",
                    class: {
                        "item-disabled": "" === t.url
                    },
                    on: {
                        click: function(n) {
                            return e.handleQrcodeOpen(n, t)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "enable-background": "new 0 0 24 24",
                        height: "24px",
                        viewBox: "0 0 24 24",
                        width: "24px",
                        fill: "none"
                    }
                }, [n("title", [e._v("Go to URL")]), e._v(" "), n("g", [n("rect", {
                    attrs: {
                        fill: "none",
                        height: "24",
                        width: "24"
                    }
                }), e._v(" "), n("rect", {
                    attrs: {
                        fill: "none",
                        height: "24",
                        width: "24"
                    }
                })]), e._v(" "), n("g", [n("g", [n("path", {
                    attrs: {
                        d: "M5,11h4c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5v4C3,10.1,3.9,11,5,11z M5,5h4v4H5V5z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M5,21h4c1.1,0,2-0.9,2-2v-4c0-1.1-0.9-2-2-2H5c-1.1,0-2,0.9-2,2v4C3,20.1,3.9,21,5,21z M5,15h4v4H5V15z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M13,5v4c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-4C13.9,3,13,3.9,13,5z M19,9h-4V5h4V9z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M21,20.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28,0-0.5,0.22-0.5,0.5v1c0,0.28,0.22,0.5,0.5,0.5h1C20.78,21,21,20.78,21,20.5 z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M13,13.5v1c0,0.28,0.22,0.5,0.5,0.5h1c0.28,0,0.5-0.22,0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1C13.22,13,13,13.22,13,13.5z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M16.5,15h-1c-0.28,0-0.5,0.22-0.5,0.5v1c0,0.28,0.22,0.5,0.5,0.5h1c0.28,0,0.5-0.22,0.5-0.5v-1C17,15.22,16.78,15,16.5,15 z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M13,17.5v1c0,0.28,0.22,0.5,0.5,0.5h1c0.28,0,0.5-0.22,0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1C13.22,17,13,17.22,13,17.5z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M15.5,21h1c0.28,0,0.5-0.22,0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28,0-0.5,0.22-0.5,0.5v1C15,20.78,15.22,21,15.5,21 z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M17.5,19h1c0.28,0,0.5-0.22,0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28,0-0.5,0.22-0.5,0.5v1C17,18.78,17.22,19,17.5,19 z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M18.5,13h-1c-0.28,0-0.5,0.22-0.5,0.5v1c0,0.28,0.22,0.5,0.5,0.5h1c0.28,0,0.5-0.22,0.5-0.5v-1C19,13.22,18.78,13,18.5,13 z"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M19.5,17h1c0.28,0,0.5-0.22,0.5-0.5v-1c0-0.28-0.22-0.5-0.5-0.5h-1c-0.28,0-0.5,0.22-0.5,0.5v1C19,16.78,19.22,17,19.5,17 z"
                    }
                })])])])]), e._v(" "), n("div", {
                    staticClass: "item-icon",
                    on: {
                        click: function() {
                            return e.handleParserInfoShow(t)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [n("title", [e._v("解析器信息")]), e._v(" "), n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1zm0 15H5l5-6v6zm9-15h-5v2h4c.55 0 1 .45 1 1v12l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "item-icon",
                    on: {
                        click: function() {
                            return e.handleEditItem(r)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [n("title", [e._v("修改信息")]), e._v(" "), n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "item-icon",
                    class: {
                        "item-disabled": "" === t.url
                    },
                    on: {
                        click: function() {
                            return e.refreshProfile(t)
                        }
                    }
                }, [n("svg", {
                    class: {
                        rotating: e.downlodingUrls[t.url], "item-icon-larger": !0
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [n("title", [e._v("更新这个配置文件")]), e._v(" "), n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M17.65 6.35c-1.63-1.63-3.94-2.57-6.48-2.31-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20c3.19 0 5.93-1.87 7.21-4.56.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53-1.13 2.43-3.84 3.97-6.8 3.31-2.22-.49-4.01-2.3-4.48-4.52C5.31 9.44 8.26 6 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z"
                    }
                })])]), e._v(" "), n("div", {
                    staticClass: "item-icon",
                    on: {
                        click: [function() {
                            return e.handleDeleteProfile(r)
                        }, function(e) {
                            e.stopPropagation()
                        }]
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    }
                })])])])])])
            })), e._v(" "), e._l(Array(20), (function(e, t) {
                return n("i", {
                    key: "hidden" + t
                })
            }))], 2)], 1), e._v(" "), e.qrcodeURL ? n("QRCodeView", {
                attrs: {
                    url: e.qrcodeURL
                },
                on: {
                    hide: function() {
                        e.qrcodeURL = ""
                    }
                }
            }) : e._e()], 1)
        }), [], !1, null, "4ae55cfc", null));
    fe.options.__file = "ServerView.vue", t.default = fe.exports
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
            k()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function s(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? o(Object(t), !0).forEach((function(n) {
            k()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function d(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? c(Object(t), !0).forEach((function(n) {
            k()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }

    function l() {
        return u.apply(this, arguments)
    }

    function u() {
        return (u = C()(O.a.mark((function e() {
            var t, n;
            return O.a.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, ve();
                    case 2:
                        t = e.sent, (n = new he).use(function() {
                            var e = C()(O.a.mark((function e(t) {
                                var n, r, i;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            /\/pac$/.test(t.path) ? (n = pe.a.state.app.settings.pacContentText, r = void 0 === n ? fe.a : n, (i = pe.a.getters.mixedPort) && (t.set("content-type", "application/x-ns-proxy-autoconfig"), t.body = r.replace(/%mixed-port%/g, i))) : t.res.statusCode = 404;
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()), n.listen(t, "127.0.0.1"), pe.a.commit("SET_INNER_SERVER_PORT", {
                            port: t
                        });
                    case 7:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function p(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return f(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0,
            s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return o = e.done, e
            },
            e: function(e) {
                s = !0, a = e
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function v(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? h(Object(t), !0).forEach((function(n) {
            k()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }
    var m = Math.floor;
    n.r(t);
    var g = n(23),
        b = n.n(g),
        x = n(21),
        y = n.n(x),
        w = n(3),
        k = n.n(w),
        _ = n(0),
        O = n.n(_),
        S = n(1),
        C = n.n(S),
        P = n(5),
        j = (n(20), n(27)),
        E = n.n(j),
        T = n(10),
        D = n(13),
        I = n(6),
        A = n(91),
        $ = n(2),
        M = n(4),
        L = {
            props: [],
            data: function() {
                return {
                    speed: {
                        up: 0,
                        down: 0
                    },
                    client: null,
                    scriptResult: "",
                    intervalID: null
                }
            },
            watch: {
                clashStatus: function(e) {
                    e === D.a.CONNECTED && (this.setupRequest(), this.updateInterval())
                },
                isWindowShow: function(e) {
                    e && this.setupRequest()
                },
                isAppSuspend: function(e) {
                    e || this.setupRequest()
                },
                "settings.trayText": function() {
                    this.updateInterval()
                },
                "settings.trayScriptPath": function() {
                    this.updateInterval()
                },
                "settings.trayScriptInterval": function() {
                    this.updateInterval()
                },
                "settings.trayScriptManualRunTime": function() {
                    this.updateInterval()
                }
            },
            computed: i(i(i({}, Object(P.mapState)(k()({
                confData: function(e) {
                    return e.app.confData
                },
                clashStatus: function(e) {
                    return e.app.clashStatus
                },
                status: function(e) {
                    return e.app.status
                },
                settings: function(e) {
                    return e.app.settings
                },
                shouldUseDarkTheme: function(e) {
                    return e.app.shouldUseDarkTheme
                },
                isWindowShow: function(e) {
                    return e.app.isWindowShow
                },
                isAppSuspend: function(e) {
                    return e.app.isAppSuspend
                },
                isSystemProxyOn: function(e) {
                    return e.app.isSystemProxyOn
                },
                mode: function(e) {
                    return e.app.mode
                }
            }, "clashStatus", (function(e) {
                return e.app.clashStatus
            })))), Object(P.mapGetters)(["resourcesPath", "clashWSClient"])), {}, {
                finalText: function() {
                    var e = this.settings.trayText;
                    return (void 0 === e ? "" : e) || this.scriptResult
                },
                colors: function() {
                    return {
                        light: ["#fff", "#000"],
                        dark: ["#2c2a38", "rgb(255, 255, 255)"],
                        red: ["#f8b74f", "#d33928"],
                        2077: ["#136377", "#fcec0c"]
                    } [this.theme]
                }
            }),
            methods: {
                iconImage: function(e) {
                    var t = new Image(69, 69);
                    return t.src = e, t
                },
                withUnit: function(e) {
                    for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2, n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], r = ["B/s", "KB/s", "MB/s", "GB/s", "TB/s"], i = 0; ~~(e / 1024) && i < r.length;) e /= 1024, i++;
                    return n && 999 < e && (i++, e /= 1024), {
                        speed: 0 == i ? e : e.toFixed(t),
                        unit: r[i]
                    }
                },
                setupRequest: function() {
                    var e = this;
                    this.client && this.client.readyState !== WebSocket.CLOSED && this.client.readyState !== WebSocket.CONNECTING && this.client.terminate();
                    var t = this.clashWSClient("traffic"),
                        n = this.iconImage($.join(this.resourcesPath, "static/imgs/logo_64_eyes.png"));
                    t ? (t.on("message", (function(t) {
                        e.speed = JSON.parse(t);
                        var r = e.settings,
                            i = r.iconSpeed,
                            a = r.trayColorTransparent,
                            o = r.trayColorForeground,
                            s = void 0 === o ? "#fff" : o,
                            c = e.withUnit(e.speed.up, 1, !0),
                            d = e.withUnit(e.speed.down, 1, !0),
                            l = document.createElement("canvas");
                        l.width = 2500;
                        var u = l.getContext("2d"),
                            p = a ? s : e.colors[1];
                        u.drawImage(n, 0, 0, 69, 69), u.globalCompositeOperation = "source-in", u.fillStyle = p, u.fillRect(0, 0, 69, 69), u.globalCompositeOperation = "source-over", u.textAlign = "right", u.fillStyle = p, u.font = "26px sans-serif", u.lineWidth = 2, u.strokeStyle = p, u.fillText("".concat(c.speed, " ").concat(c.unit), 270, 30), u.fillText("".concat(d.speed, " ").concat(d.unit), 270, 58), u.textAlign = "left", u.fillText(e.mode[0].toUpperCase(), 63, 58), e.isSystemProxyOn && u.fillText("S", 63, 30);
                        var f = e.finalText,
                            h = 0;
                        if (Array.isArray(f) && 2 <= f.length) {
                            u.font = "26px sans-serif";
                            var v = u.measureText(f[0]).width,
                                m = u.measureText(f[1]).width;
                            h = v > m ? v : m, u.fillText(f[0], 300, 30), u.fillText(f[1], 300, 58)
                        } else {
                            u.font = "40px sans-serif", h = u.measureText(f).width, u.fillText(f, 300, 50)
                        }
                        u.beginPath(), u.moveTo(93, 31), u.lineTo(100, 22), u.lineTo(107, 31), e.speed.up > e.speed.down && u.fill(), u.stroke(), u.beginPath(), u.moveTo(107, 38), u.lineTo(100, 47), u.lineTo(93, 38), e.speed.up < e.speed.down && u.fill(), u.stroke(), e.$electron.ipcRenderer.send("speed-update", l.toDataURL(), void 0 !== i && i ? 280 + (0 < h ? 20 + parseInt(h, 0) : 0) : 60, a ? "" : e.colors[0])
                    })), this.client = t) : setTimeout((function() {
                        e.setupRequest()
                    }), 2e3)
                },
                updateInterval: function() {
                    var e = this;
                    this.intervalID && (clearInterval(this.intervalID), this.scriptResult = "");
                    var t = this.settings,
                        n = t.trayText,
                        r = void 0 === n ? "" : n,
                        i = t.trayScriptInterval,
                        a = t.trayScriptPath;
                    if ("" === r && a) {
                        var o = function() {
                            var t = C()(O.a.mark((function t() {
                                var n, r;
                                return O.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = M.readFileSync(a, "utf8"), r = A("'use strict';\n".concat(n), a), t.next = 4, r.run();
                                        case 4:
                                            e.scriptResult = t.sent;
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        o(), 0 < i && (this.intervalID = setInterval(o, 1e3 * i))
                    }
                    return null
                }
            },
            mounted: function() {
                this.setupRequest(), this.updateInterval()
            }
        },
        N = (n(121), n(123), n(7)),
        R = Object(N.a)(L, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-clash-traffic-view-" + e.theme]
            }, [n("div", {
                class: ["grid-" + e.theme]
            }, [n("span", {
                staticClass: "bold-icon"
            }, [e._v("↑")]), e._v("\n    " + e._s(e.withUnit(e.speed.up).speed) + "\n    "), n("span", {
                staticClass: "bold-icon"
            }, [e._v(e._s(e.withUnit(e.speed.up).unit))])]), e._v(" "), n("div", {
                class: ["grid-" + e.theme]
            }, [n("span", {
                staticClass: "bold-icon"
            }, [e._v("↓")]), e._v("\n    " + e._s(e.withUnit(e.speed.down).speed) + "\n    "), n("span", {
                staticClass: "bold-icon"
            }, [e._v("\n      " + e._s(e.withUnit(e.speed.down).unit) + "\n    ")])])])
        }), [], !1, null, "6f4bdf08", null);
    R.options.__file = "ClashTrafficView.vue";
    var z = R.exports,
        F = n(16),
        U = n.n(F),
        H = {
            props: ["startTime"],
            data: function() {
                return {
                    runningTime: "00 : 00 : 00",
                    intervalId: null
                }
            },
            watch: {
                isWindowShow: function(e) {
                    this.refreshTimeTicking(e)
                }
            },
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? a(Object(t), !0).forEach((function(n) {
                    k()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(P.mapState)({
                isWindowShow: function(e) {
                    return e.app.isWindowShow
                },
                settings: function(e) {
                    return e.app.settings
                }
            })),
            methods: {
                calcRunTime: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "hh : mm : ss",
                        t = e.includes("hh"),
                        n = e.includes("mm"),
                        r = (new Date).getTime(),
                        i = m((r - this.startTime) / 1e3),
                        a = t || n ? i % 60 : i,
                        o = t ? m(i / 60) % 60 : m(i / 60),
                        s = m(i / 3600),
                        c = function(e) {
                            return 10 > e ? "0".concat(e) : "".concat(e)
                        };
                    return e.replace("hh", c(s)).replace("mm", c(o)).replace("ss", c(a))
                },
                refreshTimeTicking: function() {
                    var e = this,
                        t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    this.intervalId && clearInterval(this.intervalId), t && (this.intervalId = setInterval((function() {
                        var t = e.settings.runTimeFormat,
                            n = void 0 === t ? "hh : mm : ss" : t;
                        e.runningTime = e.calcRunTime(n)
                    }), 1e3))
                }
            },
            mounted: function() {
                this.refreshTimeTicking(!0)
            }
        },
        V = (n(125), Object(N.a)(H, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "main-run-time-view"
                }
            }, [n("div", {
                staticClass: "timer-text"
            }, [e._v(e._s(e.runningTime))])])
        }), [], !1, null, "03fdb0b2", null));
    V.options.__file = "RunTimeView.vue";
    var B = V.exports,
        W = n(11),
        G = {
            props: ["startTime"],
            data: function() {
                return {
                    mouseTimeout: null,
                    isAllowSort: !1
                }
            },
            components: {
                ClashTrafficView: z,
                RunTimeView: B,
                draggable: E.a
            },
            watch: {},
            computed: s(s({}, Object(P.mapGetters)(["menuItemsWithOrder", "clashGotClient"])), {}, {
                menuTheme: function() {
                    return "menu-".concat(this.theme)
                },
                selectedIdx: function() {
                    var e = this;
                    return this.tabs.findIndex((function(t) {
                        return t.path === e.$route.path
                    }))
                },
                tabs: {
                    get: function() {
                        return this.menuItemsWithOrder
                    },
                    set: function(e) {
                        T.a.put(W.a.MENU_ITEM_ORDER, e.map((function(e) {
                            return e.title
                        }))), this.setMenuItems({
                            items: e
                        })
                    }
                }
            }),
            methods: s(s({}, Object(P.mapMutations)({
                setMenuItems: "SET_MENU_ITEMS"
            })), {}, {
                handleMouseDown: function() {
                    var e = this;
                    this.isAllowSort || (this.mouseTimeout = setTimeout((function() {
                        e.isAllowSort = !0
                    }), 500))
                },
                handleMouseUp: function() {
                    !this.isAllowSort && this.mouseTimeout && clearTimeout(this.mouseTimeout)
                },
                itemStyle: function(e) {
                    var t = [];
                    return this.isAllowSort && t.push("shaking".concat(e % 3 + 1)), this.selectedIdx === e && t.push("selected"), this.selectedIdx !== e && (t.push("selected-none"), t.push("item-none-".concat(this.theme))), this.selectedIdx === e + 1 && t.push("selected-top"), this.selectedIdx === e - 1 && t.push("selected-bottom"), t
                },
                itemClick: function(e) {
                    var t = e.path;
                    this.$router.replace({
                        path: t
                    })
                }
            }),
            mounted: function() {}
        },
        q = (n(127), n(129), Object(N.a)(G, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-main-menu", "item-none-" + e.theme, e.isAllowSort ? "item-draggable" : ""],
                on: {
                    mousedown: e.handleMouseDown,
                    mouseup: e.handleMouseUp,
                    mousemove: e.handleMouseUp
                }
            }, [n("clash-traffic-view", {
                class: ["traffic-" + e.theme]
            }), e._v(" "), n("draggable", {
                ref: "list",
                class: e.menuTheme,
                attrs: {
                    animation: 200,
                    "delay-on-touch-only": !0,
                    disabled: !e.isAllowSort,
                    "drag-class": "drag-item",
                    "ghost-class": "ghost-item"
                },
                model: {
                    value: e.tabs,
                    callback: function(t) {
                        e.tabs = t
                    },
                    expression: "tabs"
                }
            }, e._l(e.tabs, (function(t, r) {
                return n("li", {
                    key: r,
                    staticClass: "item",
                    class: e.itemStyle(r),
                    on: {
                        click: function() {
                            return e.itemClick(t)
                        }
                    }
                }, [n("div", {
                    staticClass: "clickable"
                }, [e._v(e._s(t.title))])])
            })), 0), e._v(" "), n("run-time-view", {
                class: ["running-time-" + e.theme],
                attrs: {
                    "start-time": e.startTime
                }
            }), e._v(" "), e.isAllowSort ? n("div", {
                staticClass: "stop-btn",
                on: {
                    click: function() {
                        e.isAllowSort = !1
                    }
                }
            }, [e._v("\n    Stop Sorting\n  ")]) : e._e()], 1)
        }), [], !1, null, "197ffb3e", null));
    q.options.__file = "MainMenu.vue";
    var K = q.exports,
        Y = {
            props: [],
            data: function() {
                return {
                    app: this.$electron.remote.app,
                    win: this.$electron.remote.getCurrentWindow(),
                    isWinMax: !1,
                    isPinned: !1
                }
            },
            computed: d(d({}, Object(P.mapState)({
                updateDownloadProgress: function(e) {
                    return e.app.updateDownloadProgress
                }
            })), {}, {
                percent: function() {
                    return this.updateDownloadProgress ? 100 * this.updateDownloadProgress.percent : 0
                }
            }),
            methods: {
                closeApp: function() {
                    this.app.quit()
                },
                miniApp: function() {
                    this.win.minimize()
                },
                maxApp: function() {
                    this.isWinMax ? this.win.unmaximize() : this.win.maximize()
                },
                pinApp: function() {
                    this.isPinned = !this.isPinned, this.$electron.remote.getCurrentWindow().setAlwaysOnTop(this.isPinned), T.a.put(W.a.IS_PIN_ENABLED, this.isPinned)
                }
            },
            mounted: function() {
                var e = this;
                this.win.on("maximize", (function() {
                    e.isWinMax = !0
                })), this.win.on("unmaximize", (function() {
                    e.isWinMax = !1
                })), this.isPinned = T.a.get(W.a.IS_PIN_ENABLED) || !1, this.$electron.remote.getCurrentWindow().setAlwaysOnTop(this.isPinned)
            }
        },
        X = (n(131), Object(N.a)(Y, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-" + e.theme]
            }, [n("div", {
                staticClass: "empty"
            }, [n("div", {
                staticClass: "top"
            }, [n("div", {
                staticClass: "left",
                style: {
                    width: e.percent + "%"
                }
            }), e._v(" "), n("div", {
                staticClass: "right"
            })]), e._v(" "), n("div", {
                staticClass: "bottom"
            })]), e._v(" "), e.isWindows ? n("div", {
                class: ["close-" + e.theme],
                on: {
                    click: e.pinApp
                }
            }, [n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "enable-background": "new 0 0 24 24",
                    viewBox: "0 0 24 24",
                    fill: e.isPinned ? [].includes(e.theme) ? "#d8bc66" : "#0C7D9D" : ["dark"].includes(e.theme) ? "white" : "black",
                    width: "14px",
                    height: "14px"
                }
            }, [n("g", [n("rect", {
                attrs: {
                    fill: "none",
                    height: "24",
                    width: "24"
                }
            }), e._v(" "), n("rect", {
                attrs: {
                    fill: "none",
                    height: "24",
                    width: "24"
                }
            })]), e._v(" "), n("g", [n("path", {
                attrs: {
                    d: "M19,12.87c0-0.47-0.34-0.85-0.8-0.98C16.93,11.54,16,10.38,16,9V4l1,0 c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1l1,0v5c0,1.38-0.93,2.54-2.2,2.89 C5.34,12.02,5,12.4,5,12.87V13c0,0.55,0.45,1,1,1h4.98L11,21c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1l-0.02-7H18c0.55,0,1-0.45,1-1 V12.87z",
                    "fill-rule": "evenodd"
                }
            })])])]) : e._e(), e._v(" "), e.isWindows ? n("div", {
                class: ["close-" + e.theme],
                on: {
                    click: e.miniApp
                }
            }, [n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: ["dark"].includes(e.theme) ? "white" : "black",
                    width: "18px",
                    height: "18px"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"
                }
            })])]) : e._e(), e._v(" "), e.isWindows ? n("div", {
                class: ["close-" + e.theme],
                on: {
                    click: e.maxApp
                }
            }, [e.isWinMax ? n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: ["dark"].includes(e.theme) ? "white" : "black",
                    width: "18px",
                    height: "18px"
                }
            }, [n("path", {
                attrs: {
                    d: "M24 0v24H0V0h24z",
                    fill: "none",
                    opacity: ".87"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M8.12 19.3c.39.39 1.02.39 1.41 0L12 16.83l2.47 2.47c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.17-3.17c-.39-.39-1.02-.39-1.41 0l-3.17 3.17c-.4.38-.4 1.02-.01 1.41zm7.76-14.6c-.39-.39-1.02-.39-1.41 0L12 7.17 9.53 4.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.03 0 1.42l3.17 3.17c.39.39 1.02.39 1.41 0l3.17-3.17c.4-.39.4-1.03.01-1.42z"
                }
            })]) : n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: ["dark"].includes(e.theme) ? "white" : "black",
                    width: "14px",
                    height: "14px"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                }
            })])]) : e._e(), e._v(" "), e.isWindows ? n("div", {
                class: ["close-" + e.theme],
                on: {
                    click: e.closeApp
                }
            }, [n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: ["dark"].includes(e.theme) ? "white" : "black",
                    width: "18px",
                    height: "18px"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                }
            })])]) : e._e()])
        }), [], !1, null, "c9342d68", null));
    X.options.__file = "StatusBar.vue";
    var J = X.exports,
        Q = n(19),
        Z = n.n(Q),
        ee = n(17),
        te = (n(32), n(4)),
        ne = n.n(te),
        re = n(2),
        ie = n.n(re),
        ae = n(18),
        oe = n.n(ae),
        se = (n(25), n(14)),
        ce = n.n(se),
        de = (n(92), n(26)),
        le = n(15),
        ue = n(29),
        pe = n(12),
        fe = n(86),
        he = n(134),
        ve = n(100),
        me = n(31),
        ge = n(33),
        be = n.n(ge),
        xe = n(30),
        ye = function() {
            var e = C()(O.a.mark((function e(t) {
                var n, r, i;
                return O.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = ["-dns", 0 < t.length ? t.join(",") : "reset"], e.next = 3, Object(xe.a)(n);
                        case 3:
                            return r = e.sent, i = r.success, e.abrupt("return", i);
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        we = function() {
            var e = C()(O.a.mark((function e() {
                var t, n, r, i;
                return O.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t = ["-dns", "query"], e.next = 3, Object(xe.a)(t);
                        case 3:
                            if (n = e.sent, r = n.success, i = n.output, !r) {
                                e.next = 9;
                                break
                            }
                            if (!/.+?=(.+?);/.test(i)) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return", RegExp.$1.split(",").filter((function(e) {
                                return be.a.isIP(e)
                            })));
                        case 9:
                            return e.abrupt("return", []);
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        ke = (n(20), n(94), n(28)),
        _e = n(91),
        Oe = n(135),
        Se = n(100),
        Ce = n(101)("./service_".concat(process.platform)),
        Pe = Ce.statusService,
        je = Ce.status;
    ee.transports.console.format = function(e) {
        return e.data
    }, ee.transports.file.format = function(e) {
        return 'time="'.concat(e.date, '" level=').concat(e.level, ' msg="').concat(e.data, '"')
    };
    var Ee = {
            name: "landing-page",
            components: {
                MainMenu: K,
                StatusBar: J
            },
            data: function() {
                return {
                    clash: null,
                    userPath: "",
                    clashRestfulPort: null,
                    clashRestfulSecret: "",
                    newVersionInfo: {},
                    shwoError: !1,
                    showStartup: !1,
                    portableMode: !1,
                    devMode: !1,
                    startTime: null,
                    tun2socks: null,
                    pkgDownloadProgress: 0,
                    networkInterfaces: [],
                    configFileWatcher: null,
                    profileUpdateFailed: {},
                    userDNS: null
                }
            },
            watch: {
                $route: function(e) {
                    var t = e.path;
                    void 0 !== t && this.setCurrentRoutePath({
                        path: t
                    })
                },
                mixedPort: function() {
                    ee.info("mixed-port changed"), this.resetSystemProxySettings()
                },
                controllerPort: function() {
                    ee.info("external controller port changed")
                },
                finalInterfaceName: function(e) {
                    ee.info("new outbound interface: ".concat(e)), this.refreshProfile()
                },
                clashStatus: function() {
                    var e = C()(O.a.mark((function e(t) {
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (ee.info("clash status change to [".concat(t === D.a.CONNECTED ? "connected" : "disconnected", "]")), this.$electron.ipcRenderer.send("clash-core-status-change", t === D.a.CONNECTED ? 0 : 1), t !== D.a.CONNECTED) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 5, this.refreshProfile().catch((function() {}));
                                case 5:
                                    this.addProfileRefreshTimes({
                                        times: 1
                                    }), this.setIsLaunching({
                                        isLaunching: !1
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                clashAxiosClient: function(e) {
                    var t = this;
                    ee.info("clash axios client changed"), e.interceptors.request.use((function(e) {
                        return t.addClashAxiosFlyingRequestCount({
                            count: 1
                        }), e
                    }), (function(e) {
                        return Promise.reject(e)
                    })), e.interceptors.response.use((function(e) {
                        return t.addClashAxiosFlyingRequestCount({
                            count: -1
                        }), e
                    }), (function(e) {
                        return t.addClashAxiosFlyingRequestCount({
                            count: -1
                        }), Promise.reject(e)
                    }))
                },
                clashPath: function() {
                    this.updateTrayIcon()
                },
                status: {
                    immediate: !0,
                    handler: function(e) {
                        this.updateTrayIcon(), this.$electron.ipcRenderer.send("system-proxy-changed", e === D.b.SYSTEM_PROXY)
                    }
                },
                "settings.fontFamily": function(e) {
                    this.setFont(e)
                },
                "settings.shortcutSystemProxy": function(e, t) {
                    var n = this;
                    this.rebindShortcut(e, t, C()(O.a.mark((function e() {
                        var t;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = !n.isSystemProxyOn, e.next = 3, n.$setSystemProxy(t, n.confData);
                                case 3:
                                    if (!e.sent) {
                                        e.next = 5;
                                        break
                                    }
                                    n.setIsSystemProxyOn({
                                        isOn: t
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))))
                },
                "settings.shortcutMixin": function(e, t) {
                    var n = this;
                    this.rebindShortcut(e, t, (function() {
                        var e = !n.isMixinEnable;
                        n.changeIsMixinEnable({
                            isMixin: e
                        }), n.refreshProfile(), Object(le.c)("Shortcut", "Mixin: ".concat(e ? "On" : "Off"))
                    }))
                },
                "settings.shortcutGlobalMode": function(e, t) {
                    var n = this;
                    this.rebindShortcut(e, t, C()(O.a.mark((function e() {
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.switchMode("global");
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))))
                },
                "settings.shortcutRuleMode": function(e, t) {
                    var n = this;
                    this.rebindShortcut(e, t, C()(O.a.mark((function e() {
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.switchMode("rule");
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))))
                },
                "settings.shortcutDirectMode": function(e, t) {
                    var n = this;
                    this.rebindShortcut(e, t, C()(O.a.mark((function e() {
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.switchMode("direct");
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))))
                },
                "settings.shortcutScriptMode": function(e, t) {
                    var n = this;
                    this.rebindShortcut(e, t, C()(O.a.mark((function e() {
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n.switchMode("script");
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))))
                },
                "settings.shortcutRunTrayScript": function(e, t) {
                    this.rebindShortcut(e, t, this.runTrayScript)
                },
                "settings.shortcutShowHideDashboard": function(e, t) {
                    var n = this;
                    this.rebindShortcut(e, t, (function() {
                        var e = n.$electron.remote.getCurrentWindow();
                        e.isVisible() ? n.$electron.remote.app.quit() : e.show()
                    }))
                },
                "settings.systemProxyTypeIndex": function() {
                    this.resetSystemProxySettings()
                },
                "settings.pacContentText": function() {
                    this.resetSystemProxySettings()
                },
                "settings.bypassText": function() {
                    this.resetSystemProxySettings()
                },
                "settings.specifyHttpProxyProtocol": function() {
                    this.resetSystemProxySettings()
                },
                isMixinEnable: function(e) {
                    this.$electron.ipcRenderer.send("mixin-changed", e)
                },
                isAppSuspend: function(e) {
                    e || (this.tun2socks && (ee.info("system resume, restart tun2socks"), this.killSpawned(this.tun2socks), this.tun2socks = null, this.spawnTun2socks()), this.refreshProfile().then((function() {})).catch((function() {})))
                },
                innerServerPort: function(e) {
                    console.log("inner port:", e), this.resetSystemProxySettings()
                },
                mode: {
                    handler: function() {
                        var e = C()(O.a.mark((function e(t) {
                            var n, r, i, a, o, s;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.$electron.ipcRenderer.send("mode-changed", t), n = this.settings.connMode, !(void 0 !== n && n)) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 5, this.clashAxiosClient.delete("connections");
                                    case 5:
                                        r = this.profiles, i = r.files, a = void 0 === i ? [] : i, o = r.index, 0 <= (s = void 0 === o ? -1 : o) && a.length > s && this.changeProfile({
                                            index: s,
                                            profile: v(v({}, a[s]), {}, {
                                                mode: t
                                            })
                                        });
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    immediate: !0
                }
            },
            computed: v(v(v({}, Object(P.mapState)({
                profiles: function(e) {
                    return e.app.profiles
                },
                clashPath: function(e) {
                    return e.app.clashPath
                },
                clashStatus: function(e) {
                    return e.app.clashStatus
                },
                confData: function(e) {
                    return e.app.confData
                },
                profilesPath: function(e) {
                    return e.app.profilesPath
                },
                isMixinEnable: function(e) {
                    return e.app.isMixinEnable
                },
                status: function(e) {
                    return e.app.status
                },
                clashAxiosFlyingRequestCount: function(e) {
                    return e.app.clashAxiosFlyingRequestCount
                },
                logFilePath: function(e) {
                    return e.app.logFilePath
                },
                settings: function(e) {
                    return e.app.settings
                },
                shouldUseDarkTheme: function(e) {
                    return e.app.shouldUseDarkTheme
                },
                detectedInterfaceName: function(e) {
                    return e.app.detectedInterfaceName
                },
                isAppSuspend: function(e) {
                    return e.app.isAppSuspend
                },
                innerServerPort: function(e) {
                    return e.app.innerServerPort
                },
                isLocalMode: function(e) {
                    return e.app.isLocalMode
                },
                isWindowShow: function(e) {
                    return e.app.isWindowShow
                },
                menuItems: function(e) {
                    return e.app.menuItems
                },
                isSystemProxyOn: function(e) {
                    return e.app.isSystemProxyOn
                },
                isSubViewShow: function(e) {
                    return e.app.isSubViewShow
                },
                currentRoutePath: function(e) {
                    return e.app.currentRoutePath
                },
                mode: function(e) {
                    return e.app.mode
                }
            })), Object(P.mapGetters)(["resourcesPath", "filesPath", "mixedPort", "controllerPort", "secret", "clashAxiosClient", "clashGotClient"])), {}, {
                themeClass: function() {
                    return "theme-".concat(this.theme)
                },
                finalInterfaceName: function() {
                    var e = this.settings.interfaceName;
                    return (void 0 === e ? "" : e) || this.detectedInterfaceName
                },
                statusHint: function() {
                    return 0 < this.pkgDownloadProgress && 1 > this.pkgDownloadProgress ? "下载进度: ".concat((100 * this.pkgDownloadProgress).toFixed(2), "%") : this.clashStatus === D.a.CONNECTED ? "已连接" : this.clashStatus === D.a.DISCONNECTED ? "未连接" : void 0
                },
                statusIcon: function() {
                    return {
                        "clash-status-icon": !0,
                        "clash-running": this.clashStatus === D.a.CONNECTED,
                        "clash-stopped": this.clashStatus === D.a.DISCONNECTED
                    }
                }
            }),
            methods: v(v(v({}, Object(P.mapMutations)({
                setConfData: "SET_CONF_DATA",
                changeProfile: "CHANGE_PROFILE",
                changeProfileIndex: "CHANGE_PROFILES_INDEX",
                setClashPath: "SET_CLASH_PATH",
                setClashStatus: "SET_CLASH_STATUS",
                loadProfiles: "LOAD_PROFILES",
                setProfilesPath: "SET_PROFILES_PATH",
                setLogFilePath: "SET_LOG_FILE_PATH",
                changeIsMixinEnable: "CHANGE_IS_MIXIN_ENABLE",
                setExePath: "SET_EXE_PATH",
                appendError: "APPEND_ERROR",
                addClashAxiosFlyingRequestCount: "ADD_AXIOS_FLYING_REQUEST_COUNT",
                setSettingsObject: "SET_SETTINGS_OBJECT",
                saveSettingsObject: "SAVE_SETTINGS_OBJECT",
                setShouldUseDarkTheme: "SET_SHOULD_USE_DARK_THEME",
                setDetectedInterfaceName: "SET_DETECTED_INTERFACE_NAME",
                setIsWindowShow: "SET_IS_WINDOW_SHOW",
                setIsAppSuspend: "SET_IS_APP_SUSPEND",
                setIsLocalMode: "SET_IS_LOCAL_MODE",
                setIsLaunching: "SET_IS_LAUNCHING",
                setMenuItems: "SET_MENU_ITEMS",
                setIsSystemProxyOn: "SET_IS_SYSTEM_PROXY_ON",
                setCurrentRoutePath: "SET_CURRENT_ROUTE_PATH",
                addProfileRefreshTimes: "ADD_PROFILE_REFRESH_TIMES"
            })), Object(P.mapActions)(["setMode"])), {}, {
                runTrayScript: function() {
                    this.saveSettingsObject({
                        obj: v(v({}, this.settings), {}, {
                            trayScriptManualRunTime: (new Date).getTime()
                        })
                    })
                },
                resetSystemProxySettings: function() {
                    var e = this;
                    return C()(O.a.mark((function t() {
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!e.isSystemProxyOn) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3, e.$setSystemProxy(!0, e.confData);
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                updateTrayIcon: function() {
                    Object(I.h)() && this.$electron.ipcRenderer.send("status-changed", this.$getTrayIcon(this.status === D.b.SYSTEM_PROXY ? 1 : 0))
                },
                setFont: function(e) {
                    document.body.style.fontFamily = e || '"Microsoft Yahei", "PingFang SC", 微软雅黑'
                },
                refreshProfile: function() {
                    var e = this;
                    return C()(O.a.mark((function t() {
                        var r, i, a, o, s, c, d, l, u, p, f, h, m, g, b, x, w, k, _, S, C, P, j, E, T, D, A, $, M, L, N, R, z, F, U, H, V, B, W, G, q, K, Y, X, J, Q, te, re, ae, oe, se, de, ue, pe, fe, he;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = !1, i = null, "", o = e.profiles.index, c = !1, !(-1 < (s = void 0 === o ? -1 : o))) {
                                        t.next = 86;
                                        break
                                    }
                                    if (ee.info("restore at index: ".concat(s)), d = e.profiles.files[s], a = ie.a.join(e.profilesPath, d.time), t.prev = 9, l = ce.a.parse(ne.a.readFileSync(a, "utf8"), {
                                            prettyErrors: !0
                                        }), u = e.settings, p = u.mixinType, f = void 0 === p ? 0 : p, h = u.mixinText, m = u.mixinCode, g = l, !e.isMixinEnable) {
                                        t.next = 26;
                                        break
                                    }
                                    t.t0 = f, t.next = 0 === t.t0 ? 17 : 1 === t.t0 ? 19 : 26;
                                    break;
                                case 17:
                                    if (h) try {
                                        b = ce.a.parse(h), x = b.mixin, g = v(v({}, l), x)
                                    } catch (t) {}
                                    return t.abrupt("break", 26);
                                case 19:
                                    if (!m) {
                                        t.next = 25;
                                        break
                                    }
                                    return w = _e(m), k = d.url, _ = void 0 === k ? "" : k, S = d.name, t.next = 24, w.parse({
                                        content: g,
                                        url: _,
                                        name: S
                                    }, {
                                        axios: n(18),
                                        yaml: n(14),
                                        notify: function(e) {
                                            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                                                n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                                            Object(le.c)(e, t, n)
                                        }
                                    });
                                case 24:
                                    g = t.sent;
                                case 25:
                                    return t.abrupt("break", 26);
                                case 26:
                                    if (P = (C = g).dns, j = void 0 === P ? {} : P, E = C["interface-name"], T = C.tun, D = void 0 === T ? {} : T, A = j.enable, $ = void 0 !== A && A, M = j.listen, L = D.enable, N = void 0 !== L && L, R = D["macOS-auto-detect-interface"], z = void 0 !== R && R, F = D["dns-hijack"], U = void 0 === F ? [] : F, !N || z) {
                                        t.next = 37;
                                        break
                                    }
                                    if (E) {
                                        t.next = 37;
                                        break
                                    }
                                    if (e.detectInterfaceName(), "" === e.finalInterfaceName) {
                                        t.next = 36;
                                        break
                                    }
                                    g = v(v({}, g), {}, {
                                        "interface-name": e.finalInterfaceName
                                    }), t.next = 37;
                                    break;
                                case 36:
                                    return t.abrupt("return", {
                                        success: !1,
                                        message: "TUN 模式已启用, 但是在这个 YAML 中没有接口名称"
                                    });
                                case 37:
                                    if (!Object(I.h)()) {
                                        t.next = 57;
                                        break
                                    }
                                    if (!N) {
                                        t.next = 42;
                                        break
                                    }
                                    ne.a.access(ie.a.join(e.clashPath, "wintun.dll"), ne.a.constants.F_OK, (function(e) {
                                        e && Object(le.c)("TUN 模式已启用, 但是缺少 wintun.dll!", "点击以打开文档", !1, {
                                            url: "https://docs.cfw.lbyczf.com/contents/tun.html"
                                        })
                                    })), t.next = 57;
                                    break;
                                case 42:
                                    H = !0;
                                    try {
                                        H = Z.a.execSync("netsh interface show interface").toString().includes("cfw-tap")
                                    } catch (t) {}
                                    if (!(H && j && $ && M)) {
                                        t.next = 57;
                                        break
                                    }
                                    if (V = M.split(":")[0].trim(), B = M.split(":")[1].trim(), !["", "0.0.0.0"].includes(V) || "53" !== B) {
                                        t.next = 57;
                                        break
                                    }
                                    if (c = !0, E || z) {
                                        t.next = 57;
                                        break
                                    }
                                    if (e.detectInterfaceName(), "" === e.finalInterfaceName) {
                                        t.next = 56;
                                        break
                                    }
                                    g = v(v({}, g), {}, {
                                        "interface-name": e.finalInterfaceName
                                    }), t.next = 57;
                                    break;
                                case 56:
                                    return t.abrupt("return", {
                                        success: !1,
                                        message: "TAP 模式已启用, 但是在这个 YAML 中没有接口名称"
                                    });
                                case 57:
                                    return G = (W = g)["proxy-providers"], q = W["rule-providers"], K = 0 < Object.keys(null != G ? G : {}).length || 0 < Object.keys(null != q ? q : {}).length, Y = e.confData, X = Y["log-level"], J = Y.ipv6, t.next = 62, e.clashAxiosClient.put("/configs", {
                                        payload: ce.a.stringify(v(v({}, g), {}, {
                                            ipv6: J,
                                            "log-level": X
                                        }))
                                    }, {
                                        validateStatus: function() {
                                            return !0
                                        },
                                        timeout: K ? 0 : 1e4
                                    });
                                case 62:
                                    if (Q = t.sent, te = Q.status, re = Q.data, r = 204 === te, ae = re.message, i = ae || "切换配置文件失败, 状态: ".concat(te), r && (K ? !e.menuItems.find((function(e) {
                                            return "提供器" === e.title
                                        })) && e.setMenuItems({
                                            items: [].concat(y()(e.menuItems), [{
                                                title: "提供器",
                                                path: "/home/provider"
                                            }])
                                        }) : e.setMenuItems({
                                            items: e.menuItems.filter((function(e) {
                                                return "提供器" !== e.title
                                            }))
                                        })), r)
                                        if (N) {
                                            if (0 < U.length) try {
                                                ye(U)
                                            } catch (t) {}
                                        } else if (null !== e.userDNS) try {
                                        ye(e.userDNS)
                                    } catch (t) {}
                                    t.next = 79;
                                    break;
                                case 72:
                                    t.prev = 72, t.t1 = t.catch(9), oe = "", (se = t.t1.linePos) && ((de = se.start) && (ue = de.line, pe = de.col, oe = ", on line: ".concat(ue, ", at column: ").concat(pe))), i = "错误: ".concat(t.t1.message).concat(oe), ee.warn("fail to restore last profile with error: ".concat(t.t1));
                                case 79:
                                    if (fe = d.selected, he = d.mode, !r || !fe) {
                                        t.next = 85;
                                        break
                                    }
                                    return ee.info("restore proxy settings"), t.next = 84, Promise.allSettled(fe.map((function(t) {
                                        var n = t.name,
                                            r = t.now;
                                        return e.clashAxiosClient.put("/proxies/" + encodeURIComponent(n), {
                                            name: r
                                        })
                                    })));
                                case 84:
                                    t.sent.forEach((function(e, t) {
                                        var n = e.status,
                                            r = e.reason;
                                        "rejected" === n && ee.info("restore proxy group ".concat(fe[t].name, " to ").concat(fe[t].now, " failed with reason: ").concat(r))
                                    }));
                                case 85:
                                    r && he && e.switchMode(he, !1);
                                case 86:
                                    return c ? e.spawnTun2socks() : (e.killSpawned(e.tun2socks), e.tun2socks = null), t.abrupt("return", {
                                        success: r,
                                        message: i
                                    });
                                case 88:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [9, 72]
                        ])
                    })))()
                },
                switchMode: function(e) {
                    var t = this;
                    return C()(O.a.mark((function n() {
                        return O.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, t.setMode({
                                        mode: e
                                    });
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                showLogsFolder: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    console.log(e), this.clashPath && /\.log$/.test(this.logFilePath) && (e ? this.$electron.shell.openPath(ie.a.join(this.logFilePath, "..")) : this.$electron.shell.openPath(this.logFilePath))
                },
                open: function(e) {
                    this.$electron.shell.openExternal(e)
                },
                killClashCore: function() {
                    var e = this;
                    return C()(O.a.mark((function t() {
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.killSpawned(e.clash), e.clash = null, T.a.get(W.a.IS_LIGHTWEIGHT_MODE_CLOSE) || !1) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 6, oe.a.get("http://127.0.0.1:53000/stop", {
                                        timeout: 1e3
                                    }).catch((function() {}));
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handlerRestartClash: function() {
                    var e = this;
                    return C()(O.a.mark((function t() {
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.killClashCore().catch((function() {}));
                                case 2:
                                    return e.setClashStatus({
                                        status: D.a.DISCONNECTED
                                    }), e.shwoError = !1, t.next = 6, e.spawnClash().catch((function() {}));
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                spawnClash: function() {
                    var e = this;
                    return C()(O.a.mark((function t() {
                        var n, r, i, a, o, s, c, d, l, u, p, f;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (ee.info("restarting clash core..."), i = ie.a.join(e.clashPath, "logs", "".concat(U()().format("YYYY-MM-DD-HHmmss"), ".log")), ne.a.readdir(ie.a.join(e.clashPath, "logs"), (function(t, n) {
                                            !t && 0 < n.length && n.forEach((function(t) {
                                                /^(.*?)\.log$/.test(t) && (U()(RegExp.$1, "YYYY-MM-DD-HHmmss").isBefore(U()().subtract(7, "days")) && ne.a.unlink(ie.a.join(e.clashPath, "logs", t), (function() {})))
                                            }))
                                        })), a = T.a.get(W.a.IS_LIGHTWEIGHT_MODE_CLOSE) || !1, t.t0 = a, !t.t0) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.next = 8, e.getClashStatus();
                                case 8:
                                    t.t1 = t.sent, t.t2 = D.a.CONNECTED, t.t0 = t.t1 === t.t2;
                                case 11:
                                    if (!t.t0) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 13:
                                    if (o = (n = {}, k()(n, I.c, ie.a.join(e.filesPath, "win", "ia32")), k()(n, I.d, ie.a.join(e.filesPath, "win", "x64")), k()(n, I.b, ie.a.join(e.filesPath, "darwin", "x64")), k()(n, I.a, ie.a.join(e.filesPath, "darwin", "arm64")), n)[Object(I.e)()], s = (r = {}, k()(r, I.c, "clash-win32.exe"), k()(r, I.d, "clash-win64.exe"), k()(r, I.b, "./clash-darwin"), k()(r, I.a, "./clash-darwin"), r)[Object(I.e)()], c = e.confData["log-level"], e.isLocalMode) {
                                        t.next = 25;
                                        break
                                    }
                                    return t.next = 19, oe.a.post("http://127.0.0.1:53000/start", {
                                        path: e.devMode ? Object(re.join)(process.cwd(), o, s) : Object(re.join)(o, s),
                                        cwd: e.clashPath,
                                        silent: "silent" === c
                                    }, {
                                        validateStatus: function() {
                                            return !0
                                        }
                                    });
                                case 19:
                                    d = t.sent, l = d.data, 200 === d.status && e.setLogFilePath({
                                        path: l
                                    }), t.next = 33;
                                    break;
                                case 25:
                                    u = [], e.portableMode && (u = ["-d", e.clashPath]), (p = Z.a.spawn(s, u, {
                                        cwd: o
                                    })).stdout.on("data", function() {
                                        var t = C()(O.a.mark((function t(n) {
                                            return O.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (!/level=info msg="RESTful API listening at:/.test(n.toString())) {
                                                            t.next = 8;
                                                            break
                                                        }
                                                        return ee.info("clash core startup success!"), t.t0 = e, t.next = 5, e.getClashStatus();
                                                    case 5:
                                                        t.t1 = t.sent, t.t2 = {
                                                            status: t.t1
                                                        }, t.t0.setClashStatus.call(t.t0, t.t2);
                                                    case 8:
                                                        /level=fatal/.test(n.toString()) && ee.error("clash core startup failed!!!");
                                                    case 9:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }()), p.on("exit", (function() {})), "silent" !== c && (f = ne.a.createWriteStream(i, {
                                        flags: "a"
                                    }), p.stdout.pipe(f), p.stderr.pipe(f), e.setLogFilePath({
                                        path: i
                                    })), e.clash = p, T.a.put(W.a.LAST_CLASH_PID, e.clash.pid);
                                case 33:
                                    return t.abrupt("return");
                                case 34:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                sudoRunBAT: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        n = function() {
                            try {
                                return Z.a.execSync("net session"), !0
                            } catch (e) {}
                            return !1
                        };
                    return new Promise((function(r) {
                        n() ? Z.a.exec(e, (function(e) {
                            t && t(void 0 === e), r(void 0 === e)
                        })) : Object(de.exec)(e, {
                            name: "Clash for Windows"
                        }, (function(e) {
                            t && t(void 0 === e), r(void 0 === e)
                        }))
                    }))
                },
                setupTapDevice: function() {
                    var e, t, n = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                        r = ie.a.join(this.filesPath, "win", "common", "tun2socks"),
                        i = (e = {}, k()(e, I.d, "amd64"), k()(e, I.c, "i386"), e)[Object(I.e)()],
                        a = null !== (t = T.a.get(W.a.TAP_INFO)) && void 0 !== t ? t : {},
                        o = a.ip,
                        s = void 0 === o ? "10.0.0.1" : o,
                        c = a.subnet,
                        d = void 0 === c ? "255.255.255.0" : c,
                        l = a.gateway,
                        u = void 0 === l ? "10.0.0.0" : l,
                        p = ie.a.join(r, "".concat(n ? "add" : "remove", "_tap_device.bat")),
                        f = '"'.concat(p, '" ').concat(i, " ").concat(s, " ").concat(d, " ").concat(u);
                    return this.sudoRunBAT(f)
                },
                spawnTun2socks: function() {
                    var e = this;
                    return C()(O.a.mark((function t() {
                        var n, r, i, a, o, s, c, d, l, u, p, f, h, v, m;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!Object(I.g)()) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (ee.info("Spawn go-tun2socks"), e.tun2socks && (e.killSpawned(e.tun2socks), e.tun2socks = null), i = e.mixedPort) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 7:
                                    a = null !== (n = T.a.get(W.a.TAP_INFO)) && void 0 !== n ? n : {}, o = a.ip, s = void 0 === o ? "10.0.0.1" : o, c = a.subnet, d = void 0 === c ? "255.255.255.0" : c, l = a.gateway, p = ["-tunName", "cfw-tap", "-tunDns", s, "-tunAddr", s, "-tunMask", d, "-tunGw", u = void 0 === l ? "10.0.0.0" : l, "-proxyServer", "127.0.0.1:" + i, "-loglevel", "none"], f = (r = {}, k()(r, I.d, ie.a.join(e.filesPath, "win", "x64")), k()(r, I.c, ie.a.join(e.filesPath, "win", "ia32")), r)[Object(I.e)()], e.tun2socks = Z.a.spawn("go-tun2socks.exe", p, {
                                        cwd: f
                                    }), h = 10;
                                case 12:
                                    if (!h--) {
                                        t.next = 27;
                                        break
                                    }
                                    if (t.prev = 13, v = Z.a.execSync("route print ".concat(u, " mask ").concat(d)).toString(), m = function(e) {
                                            return e.replace(/\./g, "\\.")
                                        }, !new RegExp("".concat(m(u), "\\s+?").concat(m(d), "[\\s\\S]+").concat(m(s))).test(v)) {
                                        t.next = 19;
                                        break
                                    }
                                    return Z.a.execSync("route add 0.0.0.0 mask 0.0.0.0 ".concat(u, " metric 1")), t.abrupt("break", 27);
                                case 19:
                                    t.next = 23;
                                    break;
                                case 21:
                                    t.prev = 21, t.t0 = t.catch(13);
                                case 23:
                                    return t.next = 25, e.$wait(1e3);
                                case 25:
                                    t.next = 12;
                                    break;
                                case 27:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [13, 21]
                        ])
                    })))()
                },
                killSpawned: function(e) {
                    if (e) {
                        var t = e.pid;
                        if (t) try {
                            Z.a.execSync(Object(I.g)() ? "kill -9 ".concat(t) : "taskkill /F /PID ".concat(t))
                        } catch (t) {}
                    }
                },
                setRoutes: function() {
                    var e = this;
                    return C()(O.a.mark((function t() {
                        var n, r;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = ie.a.join(e.filesPath, "tun2socks"), r = ie.a.join(n, "set_routes.bat"), t.abrupt("return", e.sudoRunBAT('"'.concat(r, '"')));
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                getClashStatus: function() {
                    var e = this;
                    return C()(O.a.mark((function t() {
                        var n, r;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.clashAxiosClient.get("script", {
                                        validateStatus: function() {
                                            return !0
                                        },
                                        timeout: 1e3
                                    });
                                case 3:
                                    return n = t.sent, r = n.status, t.abrupt("return", 405 === r ? D.a.CONNECTED : D.a.DISCONNECTED);
                                case 8:
                                    return t.prev = 8, t.t0 = t.catch(0), t.abrupt("return", D.a.DISCONNECTED);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 8]
                        ])
                    })))()
                },
                checkForUpdate: function() {
                    var e = this;
                    return C()(O.a.mark((function t() {
                        var n, r, i, a, o, s, c, d, l, u, f, h, v, m, g;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.$electron.remote.app.getVersion(), ee.info("check for app update, current: ".concat(n)), t.next = 4, oe.a.get("https://api.github.com/repos/Fndroid/clash_for_windows_pkg/releases/latest");
                                case 4:
                                    if (200 === (r = t.sent).status && (i = r.data.tag_name, (a = function(e) {
                                            var t = 1;
                                            return e.split(".").reverse().reduce((function(e, n) {
                                                var r = 1 * e + n * t;
                                                return t *= 1e3, r
                                            }), 0)
                                        })(i) > a(n))) {
                                        "https://github.com/Fndroid/clash_for_windows_pkg/releases", c = Symbol(), d = Symbol(), l = Symbol(), o = {}, k()(o, c, {}), k()(o, d, {}), k()(o, l, {}), u = o, f = p(r.data.assets);
                                        try {
                                            for (f.s(); !(h = f.n()).done;) v = h.value, (m = v.name) && (/\d+?\.\d+?\.\d+?-win\.7z/.test(m) ? u[c][I.d] = v : /\d+?\.\d+?\.\d+?-ia32\-win\.7z/.test(m) ? u[c][I.c] = v : /\d+?\.\d+?\.\d+?-arm64-mac\.7z/.test(m) ? u[c][I.a] = v : /\d+?\.\d+?\.\d+?-mac\.7z/.test(m) ? u[c][I.b] = v : /\d+?\.\d+?\.\d+?\.ia32\.exe/.test(m) ? u[d][I.c] = v : /\d+?\.\d+?\.\d+?\.exe/.test(m) ? u[d][I.d] = v : /arm64\.dmg/.test(m) ? u[l][I.a] = v : /\.dmg/.test(m) && (u[l][I.b] = v))
                                        } catch (e) {
                                            f.e(e)
                                        } finally {
                                            f.f()
                                        }
                                        g = function(e) {
                                            var t, n;
                                            return null == u || null === (t = u[e]) || void 0 === t || null === (n = t[Object(I.e)()]) || void 0 === n ? void 0 : n.browser_download_url
                                        }, s = e.portableMode ? g(c) : Object(I.g)() ? g(l) : g(d), e.newVersionInfo = {
                                            version: i,
                                            log: r.data.body,
                                            url: s || "https://github.com/Fndroid/clash_for_windows_pkg/releases",
                                            isPortable: e.portableMode
                                        }
                                    }
                                    case 6:
                                    case "end":
                                        return t.stop()
                            }
                        }), t)
                    })))()
                },
                loadConfData: function() {
                    ee.info("load data from general config.yaml");
                    var e = ie.a.join(this.clashPath, "config.yaml");
                    try {
                        var t = ne.a.readFileSync(e, "utf8").toString(),
                            n = ce.a.parse(t, {
                                prettyErrors: !0
                            });
                        this.setConfData({
                            data: n
                        })
                    } catch (t) {
                        var r = "",
                            i = t.linePos;
                        if (i) {
                            var a = i.start;
                            if (a) {
                                var o = a.line,
                                    s = a.col;
                                r = ", on line: ".concat(o, ", at column: ").concat(s)
                            }
                        }
                        this.appendError({
                            error: "错误: ".concat(t).concat(r)
                        }), ee.warn("fail to load general config.yaml with error: ".concat(t))
                    }
                },
                mkdirPathSync: function(e) {
                    return e !== ie.a.dirname(e) && (!!ne.a.existsSync(e) || (this.mkdirPathSync(ie.a.dirname(e)) ? (ne.a.mkdirSync(e), !0) : void 0))
                },
                initConfigFolder: function() {
                    this.mkdirPathSync(this.clashPath);
                    var e = ie.a.join(this.filesPath, "default/config.yaml"),
                        t = ie.a.join(this.clashPath, "config.yaml"),
                        n = ie.a.join(this.clashPath, "config.yml");
                    if (ne.a.existsSync(n)) {
                        try {
                            ne.a.unlinkSync(t)
                        } catch (t) {}
                        ne.a.renameSync(n, t)
                    }
                    if (ne.a.existsSync(t) && "" !== ne.a.readFileSync(t, {
                            encoding: "utf8"
                        })) try {
                        var r = ce.a.parseDocument(ne.a.readFileSync(t, "utf8"));
                        if (!r.get("mixed-port")) {
                            var i = r.get("port"),
                                a = r.get("socks-port");
                            r.delete("port"), r.delete("socks-port"), ne.a.writeFileSync(t, "mixed-port: ".concat(i || a || 7890, "\n").concat(r.toString()))
                        }
                    } catch (t) {} else ee.info("first luanch, creating config.yaml..."), ne.a.copyFileSync(e, t);
                    var o = ie.a.join(this.filesPath, "default/Country.mmdb"),
                        s = ie.a.join(this.clashPath, "Country.mmdb");
                    ne.a.existsSync(s) || ne.a.copyFileSync(o, s);
                    var c = ie.a.join(this.clashPath, "logs");
                    ne.a.existsSync(c) || ne.a.mkdirSync(c)
                },
                initProfilesFolder: function() {
                    var e = this.profilesPath;
                    ne.a.existsSync(e) || ne.a.mkdirSync(e);
                    var t = ie.a.join(this.profilesPath, "list.yml");
                    ne.a.existsSync(t) || ne.a.writeFileSync(t, "files: []\nindex: -1", {
                        flag: "ax"
                    })
                },
                startChild: function(e) {
                    if (!e || !e.hasOwnProperty("command")) return null;
                    var t = e.args,
                        n = void 0 === t ? [] : t,
                        r = e.options,
                        i = void 0 === r ? {} : r;
                    return Z.a.spawn(e.command, n, i)
                },
                spawnUserDefindExes: function() {
                    if (this.confData) {
                        var e = [],
                            t = this.settings.childProcessText,
                            n = void 0 === t ? "" : t;
                        try {
                            e = ce.a.parse(n).processes || []
                        } catch (t) {}
                        var r = [];
                        for (var i in e) {
                            var a = this.startChild(e[i]).pid;
                            r.push(a)
                        }
                        T.a.put(W.a.LAST_USER_EXE_PIDS, r)
                    }
                },
                preDownloadAds: function() {
                    return C()(O.a.mark((function e() {
                        var t, n, r, i, a;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, oe.a.get("https://raw.githubusercontent.com/Fndroid/ads/master/ads_v2.json?t=" + (new Date).getTime());
                                case 2:
                                    t = e.sent, n = t.status, r = t.data, 200 === n && ((i = r.feedback) && (a = i, T.a.put(W.a.AD_IMAGES, a)));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                profileUpdater: function() {
                    var e = this;
                    return C()(O.a.mark((function t() {
                        var n, r, i, a, o, s, c, d, l, u, f, h, v, m, g, x, y, w;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.profiles && !e.isAppSuspend) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return 36e5, n = function() {
                                        return (new Date).getTime()
                                    }, r = e.profiles, i = r.files, a = void 0 === i ? [] : i, o = r.index, s = void 0 === o ? 0 : o, c = a.filter((function(t) {
                                        var n = t.interval,
                                            r = t.url,
                                            i = t.time;
                                        try {
                                            var a = ne.a.statSync(ie.a.join(e.profilesPath, i)).mtime;
                                            if (0 < n && r && a) {
                                                var o = e.profileUpdateFailed[r];
                                                if (void 0 !== o) {
                                                    if (!U()(o).add(n, "hours").isBefore(U()())) return !1;
                                                    delete e.profileUpdateFailed[r]
                                                }
                                                return U()(a).add(n, "hours").isBefore(U()())
                                            }
                                        } catch (t) {}
                                        return !1
                                    })), t.next = 8, Promise.all(c.map((function(e) {
                                        return Object(me.a)(e.url, {
                                            timeout: 2e4
                                        })
                                    })));
                                case 8:
                                    d = t.sent, l = p(c.entries()), t.prev = 10, l.s();
                                case 12:
                                    if ((u = l.n()).done) {
                                        t.next = 30;
                                        break
                                    }
                                    if (f = b()(u.value, 2), h = f[0], v = f[1], 200 === d[h].status) {
                                        t.next = 20;
                                        break
                                    }
                                    return m = c[h].url, ee.warn("fail to update profile with url: ".concat(m)), Object(le.c)("Profile update failed", m), e.profileUpdateFailed.hasOwnProperty(m) || (e.profileUpdateFailed[m] = n()), t.abrupt("continue", 28);
                                case 20:
                                    return g = ie.a.join(e.profilesPath, v.time), t.next = 23, Object(me.b)(v.url, d[h].data);
                                case 23:
                                    if (x = t.sent, ne.a.writeFileSync(g, x), v.time !== a[s].time) {
                                        t.next = 28;
                                        break
                                    }
                                    return t.next = 28, e.refreshProfile();
                                case 28:
                                    t.next = 12;
                                    break;
                                case 30:
                                    t.next = 35;
                                    break;
                                case 32:
                                    t.prev = 32, t.t0 = t.catch(10), l.e(t.t0);
                                case 35:
                                    return t.prev = 35, l.f(), t.finish(35);
                                case 38:
                                    y = e.profiles.files, w = (void 0 === y ? [] : y).map((function(e) {
                                        return e.time
                                    })), ne.a.readdir(ie.a.join(e.profilesPath), (function(t, n) {
                                        !t && 0 < n.length && n.forEach((function(t) {
                                            if (/^\d+\.yml$/.test(t)) {
                                                var n = !1,
                                                    r = ne.a.statSync(ie.a.join(e.profilesPath, t)).mtimeMs;
                                                r && (n = U()(r).isBefore(U()().subtract(1, "month"))), n && !w.includes(t) && ne.a.unlinkSync(ie.a.join(e.profilesPath, t))
                                            }
                                        }))
                                    }));
                                case 41:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [10, 32, 35, 38]
                        ])
                    })))()
                },
                rebindShortcut: function(e, t, n) {
                    var r = this.$electron.remote.globalShortcut;
                    if (t) try {
                        r.unregister(t)
                    } catch (t) {}
                    if (e) try {
                        return r.register(e, n), r.isRegistered(e)
                    } catch (t) {} else try {
                        r.unregister(e)
                    } catch (t) {}
                    return !1
                },
                detectInterfaceName: function() {
                    var e = Object(ue.a)();
                    e && e !== this.detectedInterfaceName && this.setDetectedInterfaceName({
                        interfaceName: e
                    })
                }
            }),
            mounted: function() {
                window.addEventListener("online", this.detectInterfaceName)
            },
            beforeDestroy: function() {},
            beforeMount: function() {
                var e = this;
                return C()(O.a.mark((function t() {
                    var n, r, i, a, o, s, c, d, u, f, h, m, g, b, x, w, _, S, P, j, E, A, $, M, L, N, R, z, F, U, H, V, B;
                    return O.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                e.startTime = (new Date).getTime(), e.devMode = ke, ee.info("app start with mode: ".concat(ke ? "dev" : "production")), e.$router.replace({
                                    path: e.currentRoutePath
                                }), Object(I.h)() && l().then((function() {
                                    ee.info("http server started at: ".concat(e.innerServerPort))
                                })).catch((function(e) {
                                    ee.info("http server failed to start with error: ".concat(e))
                                })), n = e.devMode ? "" : e.$electron.remote.app.getPath("exe"), e.setExePath({
                                    path: n
                                }), (r = T.a.get(W.a.LAST_CLASH_PID)) && e.killSpawned({
                                    pid: r
                                }), i = T.a.get(W.a.LAST_USER_EXE_PIDS) || [], a = p(i);
                                try {
                                    for (a.s(); !(o = a.n()).done;) s = o.value, e.killSpawned({
                                        pid: s
                                    })
                                } catch (e) {
                                    a.e(e)
                                } finally {
                                    a.f()
                                }(c = e.$electron.remote.nativeTheme) && (e.setShouldUseDarkTheme({
                                    shouldUseDarkTheme: c.shouldUseDarkColors
                                }), c.on("updated", (function() {
                                    e.setShouldUseDarkTheme({
                                        shouldUseDarkTheme: c.shouldUseDarkColors
                                    })
                                }))), e.$electron.ipcRenderer.send("clash-core-status-change", 0), d = function() {
                                    var t = C()(O.a.mark((function t() {
                                        return O.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return ee.info("app exiting, turn off system proxy"), t.next = 3, e.killClashCore();
                                                case 3:
                                                    if (null !== e.userDNS) try {
                                                        ye(e.userDNS)
                                                    } catch (t) {}
                                                    if (t.prev = 4, !e.isSystemProxyOn) {
                                                        t.next = 8;
                                                        break
                                                    }
                                                    return t.next = 8, e.$setSystemProxy(!1);
                                                case 8:
                                                    t.next = 12;
                                                    break;
                                                case 10:
                                                    t.prev = 10, t.t0 = t.catch(4);
                                                case 12:
                                                    return t.prev = 12, e.$electron.ipcRenderer.send("cleanup-done"), t.finish(12);
                                                case 15:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [4, 10, 12, 15]
                                        ])
                                    })));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }(), e.$electron.ipcRenderer.on("app-exit", d), e.$electron.ipcRenderer.on("power-event", (function(t, n) {
                                    e.setIsAppSuspend({
                                        isSuspend: "suspend" === n
                                    })
                                })), e.$electron.ipcRenderer.on("system-proxy-changed", function() {
                                    var t = C()(O.a.mark((function t(n, r) {
                                        return O.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, e.$setSystemProxy(r, e.confData);
                                                case 2:
                                                    if (!t.sent) {
                                                        t.next = 4;
                                                        break
                                                    }
                                                    e.setIsSystemProxyOn({
                                                        isOn: r
                                                    });
                                                case 4:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }()), e.$electron.ipcRenderer.send("mixin-changed", e.isMixinEnable), e.$electron.ipcRenderer.on("mixin-changed", (function(t, n) {
                                    e.changeIsMixinEnable({
                                        isMixin: n
                                    }), e.refreshProfile()
                                })), e.$electron.ipcRenderer.on("run-tray-script", e.runTrayScript), e.$electron.ipcRenderer.on("mode-changed", (function(t, n) {
                                    e.switchMode(n)
                                })), e.$electron.ipcRenderer.on("app-open", function() {
                                    var t = C()(O.a.mark((function t(n, r) {
                                        var i, a, o, s, c;
                                        return O.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    if (!r.find((function(e) {
                                                            return /clash:\/\/install-config\/?\?url=(.+?)(?=$|&)/.test(e)
                                                        }))) {
                                                        t.next = 11;
                                                        break
                                                    }
                                                    if (i = decodeURIComponent(RegExp.$1.trim()), !/^https?:\/\//.test(i)) {
                                                        t.next = 11;
                                                        break
                                                    }
                                                    return t.next = 5, Object(me.c)({
                                                        url: i
                                                    });
                                                case 5:
                                                    a = t.sent, o = a.success, s = a.message, c = a.targetIndex, Object(le.c)("配置文件", o ? "配置文件已成功下载." : s), o && (e.changeProfileIndex({
                                                        index: c
                                                    }), e.refreshProfile());
                                                case 11:
                                                    if (!r.find((function(e) {
                                                            return /clash:\/\/quit/.test(e)
                                                        }))) {
                                                        t.next = 14;
                                                        break
                                                    }
                                                    return t.next = 14, d();
                                                case 14:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }()), e.$electron.ipcRenderer.on("menu-item-change", (function(t, n) {
                                    e.$router.replace({
                                        path: "/home/".concat(n)
                                    })
                                })), e.$electron.ipcRenderer.on("window-event", (function(t, n) {
                                    if (["show", "hide"].includes(n)) e.setIsWindowShow({
                                        isShow: "show" === n
                                    });
                                    else if ("close" === n) {
                                        var r = e.settings.lightweightMode;
                                        void 0 !== r && r && !e.isLocalMode && (T.a.put(W.a.IS_LIGHTWEIGHT_MODE_CLOSE, !0), e.$electron.ipcRenderer.send("cleanup-done"))
                                    }
                                })), u = e.$electron.remote.app.getPath("home"), f = ie.a.join(n, "../data"), h = ie.a.join(u, "/.config/clash"), ne.a.existsSync(f) && (h = f, e.portableMode = !0), e.userPath = u, e.setClashPath({
                                    path: h
                                }), e.initConfigFolder(), e.loadConfData(), Object(I.g)() && we().then((function(t) {
                                    e.userDNS = t
                                })).catch((function(e) {
                                    ee.info("faile to get user dns setting with error: ".concat(e))
                                })), m = T.a.get(W.a.IS_LIGHTWEIGHT_MODE_CLOSE) || !1, g = {};
                                try {
                                    b = ne.a.readFileSync(ie.a.join(e.clashPath, "cfw-settings.yaml")).toString(), g = ce.a.parse(b)
                                } catch (t) {}
                                if (w = (x = g).showNewVersionIcon, _ = void 0 === w || w, S = x.hideAfterStartup, P = void 0 === S || S, j = x.randomControllerPort, E = void 0 === j || j, A = x.runTimeFormat, $ = void 0 === A ? "hh : mm : ss" : A, e.setSettingsObject({
                                        obj: v(v({}, g), {}, {
                                            showNewVersionIcon: _,
                                            hideAfterStartup: P,
                                            randomControllerPort: E,
                                            runTimeFormat: $
                                        })
                                    }), (m || !P) && e.$electron.remote.getCurrentWindow().show(), M = e.settings.fontFamily, e.setFont(M), L = e.settings.profilePath, e.setProfilesPath({
                                        path: L || ie.a.join(e.clashPath, "profiles")
                                    }), e.initProfilesFolder(), e.loadProfiles(), N = e.settings.randomControllerPort, R = void 0 === N || N, ke || m || !R) {
                                    t.next = 62;
                                    break
                                }
                                return t.prev = 49, t.next = 52, Se();
                            case 52:
                                return z = t.sent, F = "external-controller", U = "127.0.0.1:".concat(z), t.next = 57, Object(le.e)(ie.a.join(e.clashPath, "config.yaml"), F, U);
                            case 57:
                                e.setConfData({
                                    data: v(v({}, e.confData), {}, k()({}, F, U))
                                }), t.next = 62;
                                break;
                            case 60:
                                t.prev = 60, t.t0 = t.catch(49);
                            case 62:
                                return t.next = 64, Pe();
                            case 64:
                                return H = t.sent, e.setIsLocalMode({
                                    isLocal: H !== je.Active
                                }), V = 0, (B = function() {
                                    var t = C()(O.a.mark((function t() {
                                        var n;
                                        return O.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    if (e.clashStatus === D.a.CONNECTED && !e.isWindowShow || !(5 > e.clashAxiosFlyingRequestCount)) {
                                                        t.next = 12;
                                                        break
                                                    }
                                                    return t.next = 3, e.getClashStatus();
                                                case 3:
                                                    n = t.sent, t.t0 = n, t.next = t.t0 === D.a.CONNECTED ? 7 : t.t0 === D.a.DISCONNECTED ? 9 : 11;
                                                    break;
                                                case 7:
                                                    return V = 0, t.abrupt("break", 11);
                                                case 9:
                                                    return V += 1, t.abrupt("break", 11);
                                                case 11:
                                                    V >= (n === D.a.CONNECTED ? 0 : 5) && (V = 0, e.setClashStatus({
                                                        status: n
                                                    }));
                                                case 12:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }())(), y()([, , , , , ]).forEach((function(e, t) {
                                    setTimeout(B, 500 + 500 * t)
                                })), setInterval(B, 3e3), t.next = 73, e.handlerRestartClash();
                            case 73:
                                T.a.put(W.a.IS_LIGHTWEIGHT_MODE_CLOSE, !1), e.showStartup || (e.showStartup = !0, Object(le.c)("Clash 正在后台运行", "享受你的自由时间!")), e.detectInterfaceName(), e.spawnUserDefindExes(), e.checkForUpdate().then((function() {})).catch((function(e) {
                                    return console.error(e)
                                })), setInterval(e.checkForUpdate, 216e5), e.preDownloadAds().then((function() {})).catch((function(e) {
                                    return console.error(e)
                                })), setInterval(e.profileUpdater, 6e4), e.profileUpdater(), Oe.bind(["command+f12", "ctrl+f12"], (function() {
                                    return e.$electron.remote.getCurrentWindow().webContents.toggleDevTools(), !1
                                })), Oe.bind("esc", (function() {
                                    return e.isSubViewShow || e.$electron.remote.getCurrentWindow().close(), !1
                                }), "keyup");
                            case 84:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [49, 60]
                    ])
                })))()
            }
        },
        Te = (n(136), n(138), n(140), Object(N.a)(Ee, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "wrapper",
                class: e.themeClass
            }, ["2077" === e.theme ? n("img", {
                staticClass: "cloud opacicy",
                attrs: {
                    src: "static/imgs/2077.png"
                }
            }) : e._e(), e._v(" "), "red" === e.theme ? n("img", {
                staticClass: "cloud opacicy",
                attrs: {
                    src: "static/imgs/national_day.png"
                }
            }) : e._e(), e._v(" "), n("StatusBar"), e._v(" "), n("main", [n("div", {
                staticClass: "left-side"
            }, [n("main-menu", {
                attrs: {
                    "download-progress": e.pkgDownloadProgress,
                    "start-time": e.startTime
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "right-side"
            }, [n("keep-alive", [e.$route.meta.keepAlive ? n("router-view", {
                on: {
                    refreshProfile: e.refreshProfile
                }
            }) : e._e()], 1), e._v(" "), e.$route.meta.keepAlive ? e._e() : n("router-view", {
                on: {
                    refreshProfile: e.refreshProfile
                }
            })], 1), e._v(" "), n("div", {
                staticClass: "clash-status-main"
            }, [n("div", {
                class: e.statusIcon
            }), e._v(" "), n("div", {
                staticClass: "clash-status-hint",
                on: {
                    click: function() {
                        return e.showLogsFolder()
                    }
                }
            }, [e._v("\n        " + e._s(e.statusHint) + "\n      ")])])])], 1)
        }), [], !1, null, "ffb5a7b2", null));
    Te.options.__file = "LandingPage.vue", t.default = Te.exports
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function o(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? a(Object(t), !0).forEach((function(n) {
            h()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }
    n.r(t);
    var s = n(23),
        c = n.n(s),
        d = n(0),
        l = n.n(d),
        u = n(1),
        p = n.n(u),
        f = n(3),
        h = n.n(f),
        v = n(5),
        m = n(2),
        g = n.n(m),
        b = n(4),
        x = n.n(b),
        y = n(16),
        w = n.n(y),
        k = n(25),
        _ = n.n(k),
        O = n(24),
        S = n(6),
        C = n(19),
        P = n(107),
        j = n.n(P),
        E = n(92),
        T = n(12),
        D = (n(20), n(108)),
        I = n.n(D),
        A = Object(E.promisify)(j.a.pipeline),
        $ = "cfw-update".concat(Object(S.g)() ? ".dmg" : ".exe"),
        M = function() {
            var e = p()(l.a.mark((function e(t) {
                var n, r, i, a;
                return l.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = O.remote.app.getPath("temp"), r = Object(m.join)(n, $), i = 0 < T.a.getters.mixedPort ? {
                                https: I.a.httpsOverHttp({
                                    proxy: {
                                        host: "127.0.0.1",
                                        port: T.a.getters.mixedPort
                                    }
                                })
                            } : null, (a = _.a.stream(t, {
                                agent: i
                            })).on("downloadProgress", (function(e) {
                                T.a.commit("SET_UPDATE_DOWNLOAD_PROGRESS", {
                                    progress: e
                                })
                            })), a.on("close", (function() {
                                T.a.commit("SET_UPDATE_DOWNLOAD_PROGRESS", {
                                    progress: null
                                })
                            })), e.next = 8, A(a, Object(b.createWriteStream)(r)).catch((function() {
                                T.a.commit("SET_UPDATE_DOWNLOAD_PROGRESS", {
                                    progress: null
                                })
                            }));
                        case 8:
                            return T.a.commit("SET_UPDATE_DOWNLOAD_PROGRESS", {
                                progress: null
                            }), e.abrupt("return", r);
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        L = function() {
            var e = p()(l.a.mark((function e(t, n) {
                var r, i;
                return l.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, M(t);
                        case 2:
                            if (r = e.sent) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return");
                        case 5:
                            return i = O.remote.app.getName(), Object(S.g)() && (Object(C.execSync)("hdiutil attach '".concat(r, "' -nobrowse"), {
                                stdio: ["ignore", "ignore", "ignore"]
                            }), Object(C.execSync)("rm -rf '/Applications/".concat(i, ".app' && cp -R '/Volumes/").concat(i, " ").concat(n, "/").concat(i, ".app' '/Applications/").concat(i, ".app'")), Object(C.execSync)("hdiutil eject '/Volumes/".concat(i, " ").concat(n, "'"), {
                                stdio: ["ignore", "ignore", "ignore"]
                            })), e.abrupt("return", r);
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        N = n(17),
        R = n.n(N),
        z = n(109),
        F = n.n(z),
        U = n(110),
        H = n.n(U),
        V = n(13),
        B = n(11),
        W = n(10),
        G = n(29),
        q = {
            props: [],
            data: function() {
                return {
                    logs: "",
                    intervalID: null
                }
            },
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
                    h()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(v.mapState)({
                clashPath: function(e) {
                    return e.app.clashPath
                },
                logFilePath: function(e) {
                    return e.app.logFilePath
                },
                errors: function(e) {
                    return e.app.errors
                }
            })),
            methods: {
                openLogsFolder: function() {
                    this.$parent.$parent.showLogsFolder(!0)
                },
                openHomeDir: function() {
                    this.clashPath && this.$electron.shell.openPath(this.clashPath)
                },
                autoFix: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.$showDialog({
                                        title: "Clash for Windows",
                                        type: "warning",
                                        message: "请确认",
                                        detail: "config.yaml 和 country.mmdb 将被移除.",
                                        buttons: ["是", "否"]
                                    });
                                case 2:
                                    n = t.sent, 0 === n.response && e.$parent.autoFix();
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            },
            mounted: function() {
                var e = this,
                    t = function() {
                        if (e.clashPath && e.logFilePath) try {
                            var t = function(e) {
                                return e.split("\n").filter((function(e) {
                                    return /level=fatal/.test(e)
                                })).join("<br /><br />")
                            }(Object(b.readFileSync)(e.logFilePath).toString());
                            t ? e.logs = t : 0 < e.errors.length && (e.logs = e.errors.join("<br /><br />"))
                        } catch (e) {}
                    };
                this.intervalID = setInterval(t, 2e3), t()
            },
            beforeDestroy: function() {
                this.intervalID && (clearInterval(this.intervalID), this.intervalID = null)
            }
        },
        K = (n(142), n(144), n(7)),
        Y = Object(K.a)(q, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "error-view-main"
                }
            }, [e.logs ? n("div", {
                staticClass: "error-hints"
            }, [n("div", {
                attrs: {
                    id: "error-title"
                }
            }, [e._v("错误")]), e._v(" "), n("div", {
                class: ["error-content-" + e.theme],
                domProps: {
                    innerHTML: e._s(e.logs)
                }
            }, [e._v("{{}}")]), e._v(" "), n("div", {
                staticClass: "error-btns"
            }, [n("div", {
                class: ["error-hint-" + e.theme],
                on: {
                    click: e.openHomeDir
                }
            }, [e._v("\n        主目录\n      ")]), e._v(" "), n("div", {
                class: ["error-hint-" + e.theme],
                on: {
                    click: e.openLogsFolder
                }
            }, [e._v("\n        日志文件夹\n      ")]), e._v(" "), n("div", {
                class: ["error-hint-" + e.theme],
                on: {
                    click: e.autoFix
                }
            }, [e._v("\n        尝试修复\n      ")])])]) : n("div", {
                staticClass: "loading-hint"
            }, [e._v("正在载入...")])])
        }), [], !1, null, "df69c500", null);
    Y.options.__file = "ErrorView.vue";
    var X = Y.exports,
        J = n(88),
        Q = n(89),
        Z = {
            name: "info-icon",
            data: function() {
                return {
                    isShowContent: !1
                }
            },
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? i(Object(t), !0).forEach((function(n) {
                    h()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(v.mapState)({})),
            methods: {
                handleContentClick: function(e) {
                    var t = e.target;
                    if (t) {
                        var n = t.href;
                        n && this.$electron.shell.openExternal(n)
                    }
                }
            }
        },
        ee = (n(150), Object(K.a)(Z, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "info-icon-main",
                on: {
                    mouseenter: function() {
                        e.isShowContent = !0
                    },
                    mouseleave: function() {
                        e.isShowContent = !1
                    }
                }
            }, [e.isShowContent ? n("div", {
                class: ["content-" + e.theme],
                on: {
                    click: e.handleContentClick
                }
            }, [e._t("default")], 2) : e._e(), e._v(" "), n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "dark" === e.theme ? "white" : "black",
                    width: "16px",
                    height: "16px"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"
                }
            })])])
        }), [], !1, null, "22abe9c1", null));
    ee.options.__file = "Info.vue";
    var te = ee.exports,
        ne = n(15),
        re = n(101)("./service_".concat(process.platform)),
        ie = (re.status, re.statusService, re.needUpdate),
        ae = re.updateService,
        oe = re.installService,
        se = re.uninstallService,
        ce = {
            components: {
                ErrorView: X,
                SwitchView: J.a,
                SelectView: Q.a,
                InfoIcon: te
            },
            props: [],
            data: function() {
                return {
                    iconPath: "static/imgs/logo2.png",
                    title: "Clash for Windows",
                    isAllowLan: !1,
                    port: 0,
                    logLevel: "unknow",
                    isIPV6: !1,
                    geoipUpdateTime: "",
                    systemProxyLoading: !0,
                    autoLaunch: W.a.get(B.a.AUTO_LAUNCH) || !1,
                    autoLaunchLoading: !0,
                    protableMode: !1,
                    version: "",
                    showInterfaces: !1,
                    networkInterfaces: [],
                    clashCoreVersion: "",
                    serviceNeedUpdate: !1
                }
            },
            watch: {
                status: function() {
                    this.setupSwitches()
                },
                isWindowShow: function(e) {
                    e && (this.setupComponent(), this.setupSwitches())
                },
                isLaunching: function(e) {
                    e || this.setupComponent()
                },
                clashStatus: function(e) {
                    e === V.a.CONNECTED && this.setupComponent()
                }
            },
            computed: o(o(o({}, Object(v.mapState)({
                clashPath: function(e) {
                    return e.app.clashPath
                },
                clashStatus: function(e) {
                    return e.app.clashStatus
                },
                confData: function(e) {
                    return e.app.confData
                },
                isMixinEnable: function(e) {
                    return e.app.isMixinEnable
                },
                settings: function(e) {
                    return e.app.settings
                },
                status: function(e) {
                    return e.app.status
                },
                isWindowShow: function(e) {
                    return e.app.isWindowShow
                },
                isLocalMode: function(e) {
                    return e.app.isLocalMode
                },
                isLaunching: function(e) {
                    return e.app.isLaunching
                },
                isSystemProxyOn: function(e) {
                    return e.app.isSystemProxyOn
                }
            })), Object(v.mapGetters)(["resourcesPath", "filesPath", "mixedPort", "clashAxiosClient", "controllerPort"])), {}, {
                autoLaunchHint: function() {
                    return Object(S.g)() ? "跟随 macOS 启动" : Object(S.h)() ? "跟随 Windows 启动" : void 0
                },
                isShowNewIcon: function() {
                    var e = this.settings.showNewVersionIcon,
                        t = this.$parent.newVersionInfo.url;
                    return (!(void 0 !== e) || e) && t
                }
            }),
            methods: o(o({}, Object(v.mapMutations)({
                changeIsMixinEnable: "CHANGE_IS_MIXIN_ENABLE",
                setIsLocalMode: "SET_IS_LOCAL_MODE",
                setConfData: "SET_CONF_DATA",
                setIsSystemProxyOn: "SET_IS_SYSTEM_PROXY_ON"
            })), {}, {
                installService: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n, r;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, n = ["安装", "卸载"], e.serviceNeedUpdate && n.push("Update"), t.next = 5, e.$select({
                                        title: "服务管理",
                                        message: "可能需要一些时间.<br/>应用程序将自动重新启动.<br/><br/>当前状态: ".concat(e.isLocalMode ? "未激活" : "已激活"),
                                        items: n
                                    });
                                case 5:
                                    if (0 !== (r = t.sent)) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.next = 9, oe();
                                case 9:
                                    if (!t.sent) {
                                        t.next = 11;
                                        break
                                    }
                                    e.$parent.devMode || e.reloadElectron();
                                case 11:
                                    if (1 !== r) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 14, se();
                                case 14:
                                    if (!t.sent) {
                                        t.next = 16;
                                        break
                                    }
                                    e.$parent.devMode || e.reloadElectron();
                                case 16:
                                    if (2 !== r) {
                                        t.next = 21;
                                        break
                                    }
                                    return t.next = 19, ae();
                                case 19:
                                    if (!t.sent) {
                                        t.next = 21;
                                        break
                                    }
                                    e.$parent.devMode || e.reloadElectron();
                                case 21:
                                    console.log("service done"), t.next = 26;
                                    break;
                                case 24:
                                    t.prev = 24, t.t0 = t.catch(0);
                                case 26:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 24]
                        ])
                    })))()
                },
                handleAllowLANChange: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = !e.isAllowLan, t.next = 3, e.clashAxiosClient.patch("/configs", {
                                        "allow-lan": n
                                    });
                                case 3:
                                    if (204 !== t.sent.status) {
                                        t.next = 9;
                                        break
                                    }
                                    return e.isAllowLan = n, t.next = 8, Object(ne.e)(g.a.join(e.clashPath, "config.yaml"), "allow-lan", n);
                                case 8:
                                    e.setConfData({
                                        data: o(o({}, e.confData), {}, {
                                            "allow-lan": n
                                        })
                                    });
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleIPV6Change: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n, r;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = !e.isIPV6, t.next = 3, e.clashAxiosClient.patch("/configs", {
                                        ipv6: n
                                    });
                                case 3:
                                    if (r = t.sent, 204 !== r.status) {
                                        t.next = 10;
                                        break
                                    }
                                    return e.isIPV6 = n, t.next = 9, Object(ne.e)(g.a.join(e.clashPath, "config.yaml"), "ipv6", n);
                                case 9:
                                    e.setConfData({
                                        data: o(o({}, e.confData), {}, {
                                            ipv6: n
                                        })
                                    });
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleEditLogLevel: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n, r, i, a;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, n = ["silent", "error", "warning", "info", "debug"], t.next = 4, e.$select({
                                        title: "更换日志等级",
                                        message: "静默会阻止在下次启动时生成 .log 文件",
                                        items: ["静默", "错误", "警告", "信息", "调试"]
                                    });
                                case 4:
                                    return r = t.sent, i = n[r], t.next = 8, e.clashAxiosClient.patch("/configs", {
                                        "log-level": i
                                    });
                                case 8:
                                    if (a = t.sent, 204 !== a.status) {
                                        t.next = 15;
                                        break
                                    }
                                    return e.logLevel = i, t.next = 14, Object(ne.e)(g.a.join(e.clashPath, "config.yaml"), "log-level", i);
                                case 14:
                                    e.setConfData({
                                        data: o(o({}, e.confData), {}, {
                                            "log-level": i
                                        })
                                    });
                                case 15:
                                    t.next = 19;
                                    break;
                                case 17:
                                    t.prev = 17, t.t0 = t.catch(0);
                                case 19:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 17]
                        ])
                    })))()
                },
                handleMixinSwitchClick: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e.changeIsMixinEnable({
                                        isMixin: !e.isMixinEnable
                                    }), e.$parent.refreshProfile();
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleSystemProxySwitchClick: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n, r;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!e.systemProxyLoading) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return e.systemProxyLoading = !0, n = !e.isSystemProxyOn, t.next = 6, e.$setSystemProxy(n, e.confData);
                                case 6:
                                    if (!t.sent) {
                                        t.next = 11;
                                        break
                                    }
                                    e.setIsSystemProxyOn({
                                        isOn: n
                                    }), t.next = 29;
                                    break;
                                case 11:
                                    if (!Object(S.g)() || !e.isLocalMode) {
                                        t.next = 29;
                                        break
                                    }
                                    return t.next = 14, e.$showDialog({
                                        type: "error",
                                        message: "确保你".concat(e.serviceNeedUpdate ? "已更新" : "已安装", "服务模式以控制系统代理."),
                                        buttons: ["".concat(e.serviceNeedUpdate ? "新更" : "装安", "在现"), "后稍"]
                                    });
                                case 14:
                                    if (r = t.sent, 0 !== r.response) {
                                        t.next = 29;
                                        break
                                    }
                                    if (!e.serviceNeedUpdate) {
                                        t.next = 24;
                                        break
                                    }
                                    return t.next = 20, ae();
                                case 20:
                                    if (!t.sent) {
                                        t.next = 22;
                                        break
                                    }
                                    e.$parent.devMode || e.reloadElectron();
                                case 22:
                                    t.next = 28;
                                    break;
                                case 24:
                                    return t.next = 26, oe();
                                case 26:
                                    if (!t.sent) {
                                        t.next = 28;
                                        break
                                    }
                                    e.$parent.devMode || e.reloadElectron();
                                case 28:
                                    console.log("service done");
                                case 29:
                                    e.systemProxyLoading = !1;
                                case 30:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleAutoLaunchSwitchClick: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = !e.autoLaunch, !e.autoLaunchLoading) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    e.autoLaunchLoading = !0, e.$setAutoLaunch(n), e.autoLaunch = n, W.a.put(B.a.AUTO_LAUNCH, n), e.autoLaunchLoading = !1;
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                installTapDevice: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n, r, i, a, o, s, c, d;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!Object(S.h)()) {
                                        t.next = 47;
                                        break
                                    }
                                    return t.prev = 1, t.next = 4, e.$select({
                                        title: "TAP 设备管理",
                                        message: '一个名为 "cfw-tap" 的适配器将把流量路由至 clash.<br /><br />若安装窗口弹出, 点击 "下一步" 直到安装完成.',
                                        items: ["安装", "移除", "自定义"]
                                    });
                                case 4:
                                    if (0 !== (n = t.sent)) {
                                        t.next = 18;
                                        break
                                    }
                                    return t.prev = 6, t.next = 9, e.$parent.setupTapDevice(!0);
                                case 9:
                                    Object(ne.c)("成功", "cfw-tap 设备已被安装", !0), e.isMixinEnable && e.$parent.refreshProfile(), t.next = 16;
                                    break;
                                case 13:
                                    t.prev = 13, t.t0 = t.catch(6), Object(ne.c)("失败", "无法安装 cfw-tap 设备.", !0);
                                case 16:
                                    t.next = 43;
                                    break;
                                case 18:
                                    if (1 !== n) {
                                        t.next = 30;
                                        break
                                    }
                                    return t.prev = 19, t.next = 22, e.$parent.setupTapDevice(!1);
                                case 22:
                                    Object(ne.c)("成功", "cfw-tap设备已被移除", !0), t.next = 28;
                                    break;
                                case 25:
                                    t.prev = 25, t.t1 = t.catch(19), Object(ne.c)("失败", "无法删除 cfw-tap 设备.", !0);
                                case 28:
                                    t.next = 43;
                                    break;
                                case 30:
                                    if (2 !== n) {
                                        t.next = 43;
                                        break
                                    }
                                    return i = null !== (r = W.a.get(B.a.TAP_INFO)) && void 0 !== r ? r : {}, a = i.ip, o = i.subnet, s = i.gateway, c = [{
                                        name: "IP 地址",
                                        key: "ip",
                                        placeholder: "10.0.0.1",
                                        value: null != a ? a : ""
                                    }, {
                                        name: "子网掩码",
                                        key: "subnet",
                                        placeholder: "255.255.255.0",
                                        value: null != o ? o : ""
                                    }, {
                                        name: "默认网关",
                                        key: "gateway",
                                        placeholder: "10.0.0.0",
                                        value: null != s ? s : ""
                                    }], t.prev = 33, t.next = 36, e.$input({
                                        title: "TAP 设备",
                                        data: c,
                                        hint: "在这些字段变更以后, 你需要重新安装 TAP 设备!"
                                    });
                                case 36:
                                    d = t.sent, W.a.put(B.a.TAP_INFO, d), t.next = 42;
                                    break;
                                case 40:
                                    t.prev = 40, t.t2 = t.catch(33);
                                case 42:
                                    e.installTapDevice();
                                case 43:
                                    t.next = 47;
                                    break;
                                case 45:
                                    t.prev = 45, t.t3 = t.catch(1);
                                case 47:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 45],
                            [6, 13],
                            [19, 25],
                            [33, 40]
                        ])
                    })))()
                },
                openCmdWithProxy: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n, r;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0, !Object(S.g)()) {
                                        t.next = 5;
                                        break
                                    }
                                    e.handlePortClick(), t.next = 10;
                                    break;
                                case 5:
                                    if (!Object(S.h)()) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.next = 8, e.$select({
                                        title: "打开已设置好代理的终端",
                                        message: "选择一个终端",
                                        items: ["CMD", "Powershell", "Windows Terminal", "仅复制指令"]
                                    });
                                case 8:
                                    3 === (n = t.sent) ? e.handlePortClick() : (r = ["cmd", "powershell", "wt"], Object(C.exec)("start ".concat(r[n]), {
                                        cwd: e.$parent.userPath,
                                        env: {
                                            http_proxy: "http://127.0.0.1:".concat(e.port),
                                            https_proxy: "http://127.0.0.1:".concat(e.port)
                                        }
                                    }));
                                case 10:
                                    t.next = 14;
                                    break;
                                case 12:
                                    t.prev = 12, t.t0 = t.catch(0);
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 12]
                        ])
                    })))()
                },
                handleEditMixedPort: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n, r, i;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = [{
                                        name: "新的端口",
                                        key: "port",
                                        placeholder: e.port,
                                        value: "",
                                        validate: function(e) {
                                            return /^\d+$/.test(e) && 0 <= 1 * e && 65353 >= 1 * e ? "" : "端口必须是 0 到 65353 之间的整数"
                                        }
                                    }], t.prev = 1, t.next = 4, e.$input({
                                        title: "更换混合端口",
                                        data: n,
                                        hint: "混合 = http + socks"
                                    });
                                case 4:
                                    if (r = t.sent, !(i = r.port)) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.next = 9, e.clashAxiosClient.patch("/configs", {
                                        "mixed-port": 1 * i
                                    });
                                case 9:
                                    if (204 !== t.sent.status) {
                                        t.next = 15;
                                        break
                                    }
                                    return e.port = 1 * i, t.next = 14, Object(ne.e)(g.a.join(e.clashPath, "config.yaml"), "mixed-port", 1 * i);
                                case 14:
                                    e.setConfData({
                                        data: o(o({}, e.confData), {}, {
                                            "mixed-port": 1 * i
                                        })
                                    });
                                case 15:
                                    t.next = 19;
                                    break;
                                case 17:
                                    t.prev = 17, t.t0 = t.catch(1);
                                case 19:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 17]
                        ])
                    })))()
                },
                handleCopyControllerURL: function() {
                    this.$electron.shell.openExternal("http://127.0.0.1:".concat(this.controllerPort))
                },
                spawnLoopback: function() {
                    if (Object(S.h)()) {
                        var e = g.a.join(this.filesPath, "win", "common");
                        this.$electron.shell.openPath(g.a.join(e, "EnableLoopback.exe"))
                    }
                },
                reloadElectron: function() {
                    this.$electron.remote.app.relaunch(), this.$electron.remote.app.exit(0)
                },
                openGithubRelease: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var r;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = function() {
                                        var t = p()(l.a.mark((function t() {
                                            var r, i, a, o, s, c, d, u, f, h, v, m;
                                            return l.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (r = e.$parent.newVersionInfo, i = r.url, a = r.version, o = r.log, s = r.isPortable, c = void 0 !== s && s, d = e.$electron.remote.app.getAppPath().startsWith("C:\\Program Files\\"), !i) {
                                                            t.next = 33;
                                                            break
                                                        }
                                                        return t.next = 5, e.$select({
                                                            title: "".concat(a, " 已发布"),
                                                            message: o.replace(/\n/g, "<br />"),
                                                            items: [c ? "" : "更新", "下载", "复制 URL", "取消"]
                                                        });
                                                    case 5:
                                                        if (0 !== (u = t.sent)) {
                                                            t.next = 30;
                                                            break
                                                        }
                                                        return t.next = 9, L(i, a).catch((function(e) {
                                                            R.a.info("upgrade app failed with error: ".concat(e))
                                                        }));
                                                    case 9:
                                                        if (f = t.sent, R.a.info("upgrade asset path: ".concat(f)), !Object(S.g)()) {
                                                            t.next = 17;
                                                            break
                                                        }
                                                        return t.next = 14, e.$showDialog({
                                                            type: "info",
                                                            message: "更新安装成功, 要重新启动应用程序吗?",
                                                            buttons: ["是", "否"]
                                                        });
                                                    case 14:
                                                        h = t.sent, 0 === h.response && e.reloadElectron();
                                                    case 17:
                                                        if (!Object(S.h)()) {
                                                            t.next = 28;
                                                            break
                                                        }
                                                        return t.next = 20, e.$showDialog({
                                                            type: "info",
                                                            message: "安装包下载成功，要执行它吗?",
                                                            buttons: ["是", "否"]
                                                        });
                                                    case 20:
                                                        if (v = t.sent, 0 !== v.response) {
                                                            t.next = 28;
                                                            break
                                                        }
                                                        return t.next = 25, e.$parent.killClashCore();
                                                    case 25:
                                                        return t.next = 27, Object(ne.f)({
                                                            method: function() {
                                                                var t = p()(l.a.mark((function t() {
                                                                    return l.a.wrap((function(t) {
                                                                        for (;;) switch (t.prev = t.next) {
                                                                            case 0:
                                                                                return console.log("shit"), t.prev = 1, t.next = 4, e.clashAxiosClient.get("/configs", {
                                                                                    timeout: 1e3
                                                                                });
                                                                            case 4:
                                                                                return t.abrupt("return", !1);
                                                                            case 7:
                                                                                return t.prev = 7, t.t0 = t.catch(1), t.abrupt("return", !0);
                                                                            case 10:
                                                                            case "end":
                                                                                return t.stop()
                                                                        }
                                                                    }), t, null, [
                                                                        [1, 7]
                                                                    ])
                                                                })));
                                                                return function() {
                                                                    return t.apply(this, arguments)
                                                                }
                                                            }(),
                                                            target: !0
                                                        });
                                                    case 27:
                                                        d ? n(26).exec("".concat(f, " /S")) : ((m = function() {
                                                            try {
                                                                Object(C.spawnSync)(f, ["/S"], {
                                                                    detached: !0
                                                                })
                                                            } catch (e) {}
                                                        })(), setInterval(m, 2e3));
                                                    case 28:
                                                        t.next = 31;
                                                        break;
                                                    case 30:
                                                        1 === u ? e.$electron.shell.openExternal(i) : 2 === u && e.$electron.clipboard.writeText(i);
                                                    case 31:
                                                        t.next = 34;
                                                        break;
                                                    case 33:
                                                        e.$alert({
                                                            title: "太棒了",
                                                            content: "当前版本是最新的."
                                                        });
                                                    case 34:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }(), t.next = 3, e.$parent.checkForUpdate();
                                case 3:
                                    return t.next = 5, r();
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleHomeDirectoryOpen: function() {
                    this.$electron.shell.openPath(g.a.resolve(this.clashPath))
                },
                handleGeoipDatabaseUpdate: function() {
                    this.updateGeoipDB()
                },
                handlePortClick: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n, r;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!Object(S.g)()) {
                                        t.next = 4;
                                        break
                                    }
                                    n = "export https_proxy=http://127.0.0.1:".concat(e.port, ";export http_proxy=http://127.0.0.1:").concat(e.port, ";export all_proxy=socks5://127.0.0.1:").concat(e.port), t.next = 14;
                                    break;
                                case 4:
                                    if (!Object(S.h)()) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.prev = 5, t.next = 8, e.$select({
                                        title: "复制代理设置命令",
                                        message: "选择一个终端",
                                        items: ["CMD", "Powershell"]
                                    });
                                case 8:
                                    r = t.sent, n = 0 === r ? "set http_proxy=http://127.0.0.1:".concat(e.port, " & set https_proxy=http://127.0.0.1:").concat(e.port) : '$Env:http_proxy="http://127.0.0.1:'.concat(e.port, '";$Env:https_proxy="http://127.0.0.1:').concat(e.port, '"'), t.next = 14;
                                    break;
                                case 12:
                                    t.prev = 12, t.t0 = t.catch(5);
                                case 14:
                                    n && (e.$electron.clipboard.writeText(n), Object(ne.c)("命令已被复制到剪贴板!", n, !0));
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [5, 12]
                        ])
                    })))()
                },
                autoFix: function() {
                    try {
                        x.a.unlinkSync(g.a.join(this.clashPath, "config.yaml"))
                    } catch (e) {}
                    try {
                        x.a.unlinkSync(g.a.join(this.clashPath, "country.mmdb"))
                    } catch (e) {}
                    this.reloadElectron()
                },
                updateGeoipDB: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n, r, i, a, o, s, c, d, u, p, f, h, v, m, b, y, w;
                        return l.a.wrap((function(t) {
                            for (var l = Math.round;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!Object(S.h)()) {
                                        t.next = 3;
                                        break
                                    }
                                    return e.$alert({
                                        content: "不允许在 CFW 中更新 GeoIP 数据库, 请手动操作.",
                                        title: "注意"
                                    }), t.abrupt("return");
                                case 3:
                                    if (n = e.geoipUpdateTime, !/^Updating/.test(e.geoipUpdateTime)) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 6:
                                    return r = [{
                                        name: "MaxMind 用户许可证密钥",
                                        key: "token",
                                        placeholder: "",
                                        value: W.a.get(B.a.GEOIP_TOKEN) || ""
                                    }, {
                                        name: "URL",
                                        key: "url",
                                        placeholder: "",
                                        value: W.a.get(B.a.GEOIP_URL) || "https://github.com/Dreamacro/maxmind-geoip/releases/latest/download/Country.mmdb"
                                    }], t.prev = 7, t.next = 10, e.$input({
                                        title: "更新 GeoIP 数据库",
                                        data: r,
                                        hint: "输入字段是可选的"
                                    });
                                case 10:
                                    if (i = t.sent, a = i.url, o = void 0 === a ? "" : a, s = i.token, c = void 0 === s ? "" : s, W.a.put(B.a.GEOIP_TOKEN, c), W.a.put(B.a.GEOIP_URL, o), e.clashPath) {
                                        t.next = 19;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 19:
                                    d = function(t, n) {
                                        x.a.ftruncateSync(x.a.openSync(t, "r+"), n), e.$parent.handlerRestartClash()
                                    }, c ? (e.geoipUpdateTime = "Updating... (0%)", u = g.a.join(e.$electron.remote.app.getPath("temp")), g.a.join(u, "cfw_geoip.tag.gz"), (p = _.a.stream("https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-Country&license_key=".concat(c, "&suffix=tar.gz"))).on("downloadProgress", (function(t) {
                                        var n;
                                        n = 1 === t.percent ? "正在重新启动核心..." : "正在更新... (".concat(l(100 * t.percent), "%)"), e.geoipUpdateTime = n
                                    })), p.on("error", (function(t) {
                                        e.$alert({
                                            content: "下载 GeoIP 数据库失败, 错误: ".concat(t.name)
                                        }), e.geoipUpdateTime = n
                                    })), f = g.a.join(e.clashPath, "Country.mmdb"), h = H.a.extract(), v = 0, h.on("entry", (function(e, t, n) {
                                        t.on("end", (function() {
                                            n()
                                        })), /GeoLite2-Country\.mmdb$/.test(e.name) ? (v = e.size, t.pipe(x.a.createWriteStream(f, {
                                            flags: "r+"
                                        }))) : t.resume()
                                    })), h.on("finish", (function() {
                                        d(f, v)
                                    })), p.pipe(F.a.createGunzip()).pipe(h)) : o && (e.geoipUpdateTime = "Updating... (0%)", m = _.a.stream(o), b = 0, m.on("downloadProgress", (function(t) {
                                        var n = "",
                                            r = t.percent,
                                            i = t.total;
                                        1 === r ? (b = i, n = "正在重新启动核心...") : n = "正在更新... (".concat(l(100 * t.percent), "%)"), e.geoipUpdateTime = n
                                    })), m.on("error", (function(t) {
                                        e.$alert({
                                            content: "下载 GeoIP 数据库失败, 错误: ".concat(t.name)
                                        }), e.geoipUpdateTime = n
                                    })), y = g.a.join(e.clashPath, "Country.mmdb"), (w = x.a.createWriteStream(y, {
                                        flags: "r+"
                                    })).on("finish", (function() {
                                        d(y, b)
                                    })), m.pipe(w)), t.next = 25;
                                    break;
                                case 23:
                                    t.prev = 23, t.t0 = t.catch(7);
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [7, 23]
                        ])
                    })))()
                },
                setupSwitches: function() {
                    this.autoLaunchLoading = !1, this.systemProxyLoading = !1
                },
                setupComponent: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n, r, i, a, o, s, d, u, p, f;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!(n = e).clashAxiosClient) {
                                        t.next = 18;
                                        break
                                    }
                                    return t.prev = 2, t.next = 5, Promise.all([n.clashAxiosClient.get("/configs"), n.fetchCoreVersion()]);
                                case 5:
                                    r = t.sent, i = c()(r, 1), a = i[0], o = a.status, s = a.data, 200 === o && (d = s["mixed-port"], u = s["allow-lan"], p = s["log-level"], f = s.ipv6, e.port = d, e.isAllowLan = u, e.logLevel = p, e.isIPV6 = f, e.geoipUpdateTime = w()(x.a.statSync(g.a.join(e.clashPath, "Country.mmdb")).mtimeMs).format("YYYY-MM-DD HH:mm")), t.next = 16;
                                    break;
                                case 13:
                                    t.prev = 13, t.t0 = t.catch(2), console.error(t.t0.stack);
                                case 16:
                                    t.next = 18;
                                    break;
                                case 18:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [2, 13]
                        ])
                    })))()
                },
                fetchCoreVersion: function() {
                    var e = this;
                    return p()(l.a.mark((function t() {
                        var n, r, i, a;
                        return l.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!e.clashAxiosClient) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 3, e.clashAxiosClient.get("/version");
                                case 3:
                                    n = t.sent, (r = n.data) ? (i = r.premium, a = r.version, e.clashCoreVersion = void 0 !== i && void 0 !== a ? "".concat(a, " ").concat(i ? "高级版" : "") : "未知版本") : e.clashCoreVersion = "未知版本";
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }),
            mounted: function() {
                return p()(l.a.mark((function e() {
                    return l.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))()
            },
            beforeRouteEnter: function(e, t, n) {
                n((function(e) {
                    e.version = "v ".concat(e.$electron.remote.app.getVersion()), e.networkInterfaces = Object(G.b)(), e.serviceNeedUpdate = ie(), e.setupComponent(), setTimeout(e.setupSwitches, 1)
                }))
            },
            beforeRouteLeave: function(e, t, n) {
                n()
            }
        },
        de = (n(152), n(154), Object(K.a)(ce, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "main-general-view"
                }
            }, [n("div", {
                staticClass: "header"
            }, [n("img", {
                staticClass: "icon",
                attrs: {
                    src: e.iconPath
                }
            }), e._v(" "), n("div", {
                class: ["title-" + e.theme]
            }, [n("div", {
                staticClass: "title-name",
                on: {
                    click: e.reloadElectron
                }
            }, [e._v("Clash for Windows")]), e._v(" "), n("div", {
                staticClass: "version",
                on: {
                    click: e.openGithubRelease
                }
            }, [e._v("\n        " + e._s(e.version) + "\n        "), e.isShowNewIcon ? n("div", {
                staticClass: "new-version-tag"
            }, [e._v("新")]) : e._e()])])]), e._v(" "), e.isLaunching ? e._e() : n("div", {
                staticClass: "content"
            }, [n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v("端口")]), e._v(" "), n("div", {
                staticClass: "item-right"
            }, [n("img", {
                staticClass: "control-icon",
                attrs: {
                    title: "CMD with proxy",
                    src: "static/imgs/terminal.svg",
                    alt: ""
                },
                on: {
                    click: function(t) {
                        return t.stopPropagation(), e.openCmdWithProxy()
                    }
                }
            }), e._v(" "), n("div", {
                class: "clickable-" + e.theme,
                on: {
                    click: e.handleEditMixedPort
                }
            }, [e._v("\n          " + e._s(e.port) + "\n        ")])])]), e._v(" "), n("div", {
                class: ["item-" + e.theme],
                on: {
                    mouseenter: function() {
                        e.showInterfaces = !0
                    },
                    mouseleave: function() {
                        e.showInterfaces = !1
                    }
                }
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v("允许局域网")]), e._v(" "), n("div", {
                staticClass: "item-right"
            }, [n("switch-view", {
                attrs: {
                    on: e.isAllowLan
                },
                on: {
                    change: function() {
                        return e.handleAllowLANChange(e.isAllowLan)
                    }
                }
            })], 1)]), e._v(" "), n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v("日志等级")]), e._v(" "), n("div", {
                staticClass: "item-right"
            }, [n("div", {
                class: "clickable-" + e.theme,
                on: {
                    click: e.handleEditLogLevel
                }
            }, [e._v("\n          " + e._s(
                (e.logLevel == "silent") ? "静默" :
                (e.logLevel == "error") ? "错误" :
                (e.logLevel == "warning") ? "警告" :
                (e.logLevel == "info") ? "信息" :
                (e.logLevel == "debug") ? "调试" :
                e.logLevel
            ) + "\n        ")])])]), e._v(" "), n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v("IPv6")]), e._v(" "), n("div", {
                staticClass: "item-right"
            }, [n("switch-view", {
                attrs: {
                    on: e.isIPV6
                },
                on: {
                    change: function() {
                        return e.handleIPV6Change(e.isIPV6)
                    }
                }
            })], 1)]), e._v(" "), n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v("Clash 核心")]), e._v(" "), n("div", {
                staticClass: "item-right",
                class: "clickable-" + e.theme,
                on: {
                    click: e.handleCopyControllerURL
                }
            }, [e._v("\n        " + e._s(e.clashCoreVersion) + " (" + e._s(e.controllerPort) + ")\n      ")])]), e._v(" "), n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v("主目录")]), e._v(" "), n("div", {
                staticClass: "item-right",
                class: "clickable-" + e.theme,
                on: {
                    click: e.handleHomeDirectoryOpen
                }
            }, [e._v("\n        打开文件夹\n      ")])]), e._v(" "), e.isWindows ? e._e() : n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v("GeoIP Database")]), e._v(" "), n("div", {
                staticClass: "item-right",
                class: "clickable-" + e.theme,
                on: {
                    click: e.handleGeoipDatabaseUpdate
                }
            }, [e._v("\n        " + e._s(e.geoipUpdateTime) + "\n      ")])]), e._v(" "), e.showInterfaces && e.isAllowLan ? n("div", {
                class: ["interfaces-card-" + e.theme]
            }, e._l(e.networkInterfaces, (function(t, r) {
                return n("div", {
                    key: r,
                    class: ["interfaces-content-" + e.theme]
                }, [n("div", {
                    staticClass: "interface-address"
                }, [e._v(e._s(t.address))]), e._v(" "), n("div", {
                    staticClass: "interface-name"
                }, [e._v(e._s(t.name))])])
            })), 0) : e._e(), e._v(" "), e.isWindows ? n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v("UWP 回环")]), e._v(" "), n("div", {
                class: ["item-right", "clickable-" + e.theme],
                on: {
                    click: function(t) {
                        return e.spawnLoopback(t)
                    }
                }
            }, [e._v("\n        启动助手\n      ")])]) : e._e(), e._v(" "), e.isWindows ? n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v("TAP 设备")]), e._v(" "), n("div", {
                class: ["item-right", "clickable-" + e.theme],
                on: {
                    click: function(t) {
                        return e.installTapDevice(t)
                    }
                }
            }, [e._v("\n        管理\n      ")])]) : e._e(), e._v(" "), n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v("服务模式")]), e._v(" "), n("svg", {
                staticStyle: {
                    "margin-left": "5px",
                    "margin-top": "2px"
                },
                attrs: {
                    fill: e.isLocalMode ? "#b3b3b3" : e.serviceNeedUpdate ? "#DE5034" : "#41b883",
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "18",
                    viewBox: "0 0 24 24",
                    width: "18"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                }
            })]), e._v(" "), n("div", {
                staticStyle: {
                    "flex-grow": "1"
                }
            }), e._v(" "), n("div", {
                class: ["item-right", "clickable-" + e.theme],
                on: {
                    click: e.installService
                }
            }, [e._v("\n        管理\n      ")])]), e._v(" "), n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [n("div", [e._v("混合")]), e._v(" "), n("info-icon", [e._v("\n          混合允许你覆盖原始配置文件.\n          "), n("a", {
                attrs: {
                    href: "https://docs.cfw.lbyczf.com/contents/mixin.html"
                }
            }, [e._v("文档")])])], 1), e._v(" "), n("switch-view", {
                attrs: {
                    on: e.isMixinEnable
                },
                on: {
                    change: e.handleMixinSwitchClick
                }
            })], 1), e._v(" "), n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v("系统代理")]), e._v(" "), n("switch-view", {
                attrs: {
                    on: e.isSystemProxyOn
                },
                on: {
                    change: e.handleSystemProxySwitchClick
                }
            })], 1), e._v(" "), n("div", {
                class: ["item-" + e.theme]
            }, [n("div", {
                staticClass: "item-left"
            }, [e._v(e._s(e.autoLaunchHint))]), e._v(" "), n("switch-view", {
                attrs: {
                    on: e.autoLaunch
                },
                on: {
                    change: e.handleAutoLaunchSwitchClick
                }
            })], 1)]), e._v(" "), e.isLaunching ? n("error-view") : e._e(), e._v(" "), n("div", {
                staticClass: "empty-div"
            })], 1)
        }), [], !1, null, "ab2e11d4", null));
    de.options.__file = "GeneralView.vue", t.default = de.exports
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = a(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s = !0,
            c = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return s = e.done, e
            },
            e: function(e) {
                c = !0, o = e
            },
            f: function() {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (c) throw o
                }
            }
        }
    }

    function a(e, t) {
        if (e) {
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
        }
    }

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function c(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? s(Object(t), !0).forEach((function(n) {
            b()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }
    n.r(t);
    var d = n(23),
        l = n.n(d),
        u = n(21),
        p = n.n(u),
        f = n(0),
        h = n.n(f),
        v = n(1),
        m = n.n(v),
        g = n(3),
        b = n.n(g),
        x = n(5),
        y = {
            props: ["mode"],
            data: function() {
                return {
                    modes: ["global", "rule", "direct", "script"]
                }
            },
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
                    b()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(x.mapState)({})),
            methods: {
                upperCaseFirstLetter: function(e) {
                    return e[0].toUpperCase() + e.slice(1)
                },
                btnTheme: function(e) {
                    var t = ["btn"];
                    return this.mode === e.toLowerCase() ? t.push("selected-".concat(this.theme)) : t.push("normal-".concat(this.theme)), t
                },
                switchMode: function(e) {
                    var t = this;
                    return m()(h.a.mark((function n() {
                        return h.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    t.$parent.cancelLatencyTest(), t.$emit("switch", e);
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                }
            }
        },
        w = (n(156), n(158), n(7)),
        k = Object(w.a)(y, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-" + e.theme],
                attrs: {
                    id: "main-mode-switcher"
                }
            }, [n("div", {
                staticClass: "btns"
            }, e._l(e.modes, (function(t, r) {
                return n("div", {
                    key: r,
                    class: e.btnTheme(t),
                    on: {
                        click: function() {
                            return e.switchMode(t)
                        }
                    }
                }, [e._v("\n      " + e._s(
                    (t == "global") ? "全局" :
                    (t == "rule") ? "规则" :
                    (t == "direct") ? "直连" :
                    (t == "script") ? "脚本" :
                    e.upperCaseFirstLetter(t)
                ) + "\n    ")])
            })), 0)])
        }), [], !1, null, "3cb6848a", null);
    k.options.__file = "ProxyModeSwitcher.vue";
    var _ = k.exports,
        O = (n(2), n(18)),
        S = n.n(O),
        C = (n(4), n(10)),
        P = n(11),
        j = n(20),
        E = n.n(j),
        T = (n(16), n(13)),
        D = n(97),
        I = n.n(D),
        A = (n(160), S.a.CancelToken),
        $ = {
            props: [],
            data: function() {
                return {
                    proxies: [],
                    axiosCancelTokens: [],
                    showSecIdxs: [],
                    infoItemName: "",
                    intervalID: null,
                    filterKeyword: "",
                    isShowFilter: !1,
                    isScrolling: !1
                }
            },
            components: {
                ProxyModeSwitcher: _
            },
            watch: {
                clashStatus: function(e) {
                    e === T.a.CONNECTED && this.fetchData()
                },
                profileRefreshTimes: function() {
                    this.fetchData()
                }
            },
            computed: c(c(c({}, Object(x.mapState)({
                clashPath: function(e) {
                    return e.app.clashPath
                },
                pfs: function(e) {
                    return e.app.profiles
                },
                clashStatus: function(e) {
                    return e.app.clashStatus
                },
                confData: function(e) {
                    return e.app.confData
                },
                settings: function(e) {
                    return e.app.settings
                },
                isWindowShow: function(e) {
                    return e.app.isWindowShow
                },
                clashAxiosFlyingRequestCount: function(e) {
                    return e.app.clashAxiosFlyingRequestCount
                },
                profileRefreshTimes: function(e) {
                    return e.app.profileRefreshTimes
                },
                currentMode: function(e) {
                    return e.app.mode
                }
            })), Object(x.mapGetters)(["clashAxiosClient"])), {}, {
                proxyItemWidth: function() {
                    var e = this.settings.proxyItemWidth;
                    return 150 <= parseInt(e) ? "".concat(e, "px") : "290px"
                },
                proxyInMode: function() {
                    var e = this.currentMode;
                    if ("global" === e) return this.proxies.filter((function(e) {
                        return "GLOBAL" === e.name
                    }));
                    if ("direct" === e) return [];
                    var t = this.settings.hideUnselectableGroup,
                        n = void 0 !== t && t ? ["Selector"] : ["Selector", "Fallback", "URLTest", "LoadBalance", "Relay"];
                    return this.proxies.filter((function(e) {
                        return "GLOBAL" !== e.name && n.includes(e.data.type)
                    }))
                }
            }),
            methods: c(c(c({}, Object(x.mapMutations)({
                changeProfile: "CHANGE_PROFILE"
            })), Object(x.mapActions)(["getMode", "setMode"])), {}, {
                debounceScroll: E.a.debounce((function() {
                    this.isScrolling = !1
                }), 1e3),
                handleListScroll: function() {
                    return this.isScrolling = !0, this.debounceScroll()
                },
                handleFilterIconClick: function() {
                    var e = this;
                    this.isShowFilter = !this.isShowFilter, this.isShowFilter || (this.filterKeyword = ""), this.$nextTick((function() {
                        var t = e.$refs.filterKeyword;
                        t && t.focus()
                    }))
                },
                checkBtnText: function(e) {
                    var t = e.provider,
                        n = e.latency;
                    return t ? n || "" : n || "Check"
                },
                handleSingleSpeedtest: function(e, t) {
                    var n = this;
                    return m()(h.a.mark((function r() {
                        var i, a, o, s, c, d, l, u;
                        return h.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (i = e.name, a = t.name, null === t.provider) {
                                        r.next = 4;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 4:
                                    return n.cancelLatencyTest(), o = "", r.prev = 6, s = n.settings, c = s.latencyTimeout, d = s.latencyUrl, r.next = 10, n.speedtest(a, c || 3e3, d || "http://www.gstatic.com/generate_204");
                                case 10:
                                    o = r.sent, r.next = 15;
                                    break;
                                case 13:
                                    r.prev = 13, r.t0 = r.catch(6);
                                case 15:
                                    (l = n.proxyInMode.find((function(e) {
                                        return e.name === i
                                    }))) && ((u = l.data.all.find((function(e) {
                                        return e.name === a
                                    }))) && (u.latency = o + (/\d/.test(o) ? " ms" : "Timeout")));
                                case 17:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [6, 13]
                        ])
                    })))()
                },
                proxyItemsBeforeAnimate: function(e) {
                    e.style.opacity = 0
                },
                animateDone: function() {},
                proxyItemsShowAnimate: function(e, t) {
                    I()(e, {
                        opacity: 1
                    }, {
                        duration: 150,
                        easing: "ease-in",
                        complete: t
                    })
                },
                proxyItemsHideAnimate: function(e, t) {
                    I()(e, {
                        opacity: 0,
                        height: 0
                    }, {
                        complete: t,
                        easing: "ease-out",
                        duration: 100
                    })
                },
                saveShowSecIdxs: function() {
                    C.a.put(P.a.PROXY_SHOW_SEC_IDXS, this.showSecIdxs)
                },
                switchVisiable: function(e) {
                    var t = this;
                    return m()(h.a.mark((function n() {
                        var r, i, a, o, s, c;
                        return h.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    i = t.$refs.list, a = t.$refs["mixin-scroll-content"], o = null === (r = i[e]) || void 0 === r ? void 0 : r.childNodes[0], s = null == o ? void 0 : o.childNodes[0], c = null == o ? void 0 : o.childNodes[2], t.showSecIdxs.includes(e) ? (t.showSecIdxs = t.showSecIdxs.filter((function(t) {
                                        return t !== e
                                    })), t.$nextTick((function() {
                                        s.offsetTop > c.offsetTop && (a.scrollTop = o.offsetTop - 112)
                                    }))) : t.showSecIdxs.push(e), t.saveShowSecIdxs();
                                case 7:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                nodeHint: function(e) {
                    var t = this.proxies.find((function(t) {
                        return t.name === e.name
                    }));
                    if (!t) return "";
                    var n = t.data.type;
                    return "Selector" === n || "Fallback" === n || "URLTest" === n ? this.$parseEmoji("".concat((
                        (n == "Selector") ? "选择器" :
                        (n == "Fallback") ? "回退" :
                        (n == "URLTest") ? "URL 测试" :
                        n
                    ), " · ").concat(
                        (t.data.now == "DIRECT") ? "☆ 直连 ☆" :
                        (t.data.now == "REJECT") ? "☆ 拒绝 ☆" :
                        t.data.now
                    ), 16) : "LoadBalance" === n ? "".concat((
                        (n == "LoadBalance") ? "负载均衡" :
                        n
                    ), " · ").concat(t.data.all.length, " 个服务器").concat(1 < t.data.all.length ? "" : "") : (
                        (n == "Relay") ? "中继" :
                        n
                    )
                },
                cancelLatencyTest: function() {
                    0 < this.axiosCancelTokens.length && (this.axiosCancelTokens.forEach((function(e) {
                        e()
                    })), this.axiosCancelTokens = [])
                },
                switchProxy: function(e, t) {
                    var n = arguments,
                        r = this;
                    return m()(h.a.mark((function a() {
                        var o, s, d, l, u, f, v, m, g, b, x, y, w;
                        return h.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (!(2 < n.length && void 0 !== n[2] && n[2])) {
                                        a.next = 3;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 3:
                                    return r.cancelLatencyTest(), a.next = 6, r.clashAxiosClient.put("/proxies/".concat(encodeURIComponent(e)), {
                                        name: t
                                    });
                                case 6:
                                    if (204 !== a.sent.status) {
                                        a.next = 45;
                                        break
                                    }
                                    if ((o = p()(r.proxies)).find((function(t) {
                                            return t.name === e
                                        })).data.now = t, r.proxies = o.length > 500 ? Object.freeze(o) : o, s = r.proxies.filter((function(e) {
                                            return "Selector" === e.data.type
                                        })).map((function(e) {
                                            return {
                                                name: e.name,
                                                now: e.data.now
                                            }
                                        })), -1 < r.pfs.index && (d = r.pfs.files[r.pfs.index], r.changeProfile({
                                            index: r.pfs.index,
                                            profile: c(c({}, d), {}, {
                                                selected: s
                                            })
                                        })), l = r.settings.connProxy, 1 !== (u = void 0 === l ? 0 : l)) {
                                        a.next = 42;
                                        break
                                    }
                                    return a.next = 17, r.clashAxiosClient.get("connections");
                                case 17:
                                    if (f = a.sent, v = f.status, m = f.data, 200 !== v) {
                                        a.next = 40;
                                        break
                                    }
                                    g = m.connections, b = i(void 0 === g ? [] : g), a.prev = 23, b.s();
                                case 25:
                                    if ((x = b.n()).done) {
                                        a.next = 32;
                                        break
                                    }
                                    if (y = x.value, w = y.id, !y.chains.includes(e)) {
                                        a.next = 30;
                                        break
                                    }
                                    return a.next = 30, r.clashAxiosClient.delete("connections/".concat(w));
                                case 30:
                                    a.next = 25;
                                    break;
                                case 32:
                                    a.next = 37;
                                    break;
                                case 34:
                                    a.prev = 34, a.t0 = a.catch(23), b.e(a.t0);
                                case 37:
                                    return a.prev = 37, b.f(), a.finish(37);
                                case 40:
                                    a.next = 45;
                                    break;
                                case 42:
                                    if (2 !== u) {
                                        a.next = 45;
                                        break
                                    }
                                    return a.next = 45, r.clashAxiosClient.delete("connections");
                                case 45:
                                case "end":
                                    return a.stop()
                            }
                        }), a, null, [
                            [23, 34, 37, 40]
                        ])
                    })))()
                },
                startLatencyTest: function(e, t) {
                    var n = this;
                    return m()(h.a.mark((function r() {
                        var i, a, o, s, c;
                        return h.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    n.cancelLatencyTest(), n.showSecIdxs.find((function(e) {
                                        return e === t
                                    })) || n.showSecIdxs.push(t), i = n.proxies.find((function(t) {
                                        return t.name === e
                                    })), a = n.settings, o = a.latencyTimeout, s = a.latencyUrl, c = [], i.data.all.forEach(function() {
                                        var e = m()(h.a.mark((function e(t) {
                                            var r;
                                            return h.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!t.provider) {
                                                            e.next = 3;
                                                            break
                                                        }
                                                        return c.find((function(e) {
                                                            return e.name === t.provider.name
                                                        })) || c.push(t.provider), e.abrupt("return");
                                                    case 3:
                                                        return t.latency = null, e.prev = 4, e.next = 7, n.speedtest(t.name, o || 3e3, s || "http://www.gstatic.com/generate_204");
                                                    case 7:
                                                        r = e.sent, t.latency = 0 < r ? r + " ms" : "Timeout", e.next = 14;
                                                        break;
                                                    case 11:
                                                        e.prev = 11, e.t0 = e.catch(4), t.latency = "Timeout";
                                                    case 14:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [4, 11]
                                            ])
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }()), c.forEach(function() {
                                        var e = m()(h.a.mark((function e(t) {
                                            return h.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, n.clashAxiosClient.get("/providers/proxies/".concat(encodeURIComponent(t.name), "/healthcheck"), {
                                                            timeout: 0,
                                                            cancelToken: new A((function(e) {
                                                                n.axiosCancelTokens.push(e)
                                                            }))
                                                        });
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }());
                                case 7:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                },
                speedtest: function(e) {
                    var t = arguments,
                        n = this;
                    return m()(h.a.mark((function r() {
                        var i, a, o, s, c;
                        return h.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return i = 1 < t.length && void 0 !== t[1] ? t[1] : 1e3, a = 2 < t.length && void 0 !== t[2] ? t[2] : "http://www.gstatic.com/generate_204", r.next = 4, n.clashAxiosClient("/proxies/".concat(encodeURIComponent(e), "/delay?timeout=").concat(i, "&url=").concat(encodeURIComponent(a)), {
                                        cancelToken: new A((function(e) {
                                            n.axiosCancelTokens.push(e)
                                        })),
                                        timeout: 0
                                    });
                                case 4:
                                    if (o = r.sent, !(s = o.data)) {
                                        r.next = 9;
                                        break
                                    }
                                    return c = s.delay, r.abrupt("return", c || 0);
                                case 9:
                                    return r.abrupt("return", 0);
                                case 10:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                },
                handleModeSwitch: function(e) {
                    var t = this;
                    return m()(h.a.mark((function n() {
                        return h.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, t.setMode({
                                        mode: e
                                    });
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                findProvider: function(e, t) {
                    for (var n in e) {
                        var r = e[n],
                            i = r.proxies,
                            a = (void 0 === i ? [] : i).find((function(e) {
                                return e.name === t
                            }));
                        if (a) return [r, a.history]
                    }
                    return [null, []]
                },
                fetchData: function() {
                    var e = this;
                    return m()(h.a.mark((function t() {
                        var n, r, i, a, o, s, c, d, u, p, f;
                        return h.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = Number.MAX_SAFE_INTEGER, e.clashAxiosClient) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return t.next = 5, Promise.all([e.clashAxiosClient.get("/proxies"), e.clashAxiosClient.get("/providers/proxies", {
                                        validateStatus: function() {
                                            return !0
                                        }
                                    })]);
                                case 5:
                                    r = t.sent, i = l()(r, 2), a = i[0], o = i[1], s = o.data, c = (void 0 === s ? {} : s).providers, d = void 0 === c ? {} : c, u = a.data.proxies, p = u.GLOBAL.all, e.viewData = u, f = Object.keys(u).map((function(t) {
                                        return u[t].hasOwnProperty("all") || (u[t].all = [u[t].now]), u[t].type, u[t].all = u[t].all.map((function(t) {
                                            var r = null,
                                                i = u[t];
                                            if (void 0 === i) {
                                                var a = e.findProvider(d, t),
                                                    o = l()(a, 2),
                                                    s = o[0],
                                                    c = o[1],
                                                    p = 0;
                                                return 0 < c.length ? r = 0 === (p = c[c.length - 1].delay) ? "Timeout" : "".concat(p, " ms") : r = "", {
                                                    name: t,
                                                    provider: s,
                                                    latency: r,
                                                    delay: p || n
                                                }
                                            }
                                            var f = 0;
                                            return i && 0 < i.history.length && (r = 0 === (f = i.history[i.history.length - 1].delay) ? "Timeout" : "".concat(f, " ms")), {
                                                name: t,
                                                provider: null,
                                                latency: r,
                                                delay: f || n
                                            }
                                        })).filter((function(t) {
                                            return "" === e.filterKeyword || new RegExp(e.filterKeyword, "i").test(t.name)
                                        })).sort((function(t, r) {
                                            var i = e.settings.proxyOrder,
                                                a = void 0 === i ? 0 : i;
                                            if (1 === a) {
                                                var o = t.delay,
                                                    s = void 0 === o ? n : o,
                                                    c = r.delay;
                                                return s - (void 0 === c ? n : c)
                                            }
                                            if (2 === a) {
                                                var d = t.name,
                                                    l = r.name;
                                                return d.localeCompare(l)
                                            }
                                            return !0
                                        })), {
                                            name: t,
                                            data: u[t]
                                        }
                                    })).sort((function(e, t) {
                                        return p.indexOf(e.name) - p.indexOf(t.name)
                                    })), e.proxies = f.length > 500 ? Object.freeze(f) : f;
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            }),
            beforeRouteEnter: function(e, t, n) {
                n(function() {
                    var e = m()(h.a.mark((function e(t) {
                        return h.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.getMode(), t.showSecIdxs = C.a.get(P.a.PROXY_SHOW_SEC_IDXS) || [], t.intervalID = setInterval(m()(h.a.mark((function e() {
                                        return h.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!(t.isWindowShow && !t.isScrolling && 5 > t.clashAxiosFlyingRequestCount)) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return e.next = 3, Promise.allSettled([t.getMode(), t.fetchData()]).catch((function() {}));
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), 5e3), e.next = 5, t.fetchData().catch((function() {}));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }())
            },
            beforeRouteLeave: function(e, t, n) {
                this.intervalID && clearInterval(this.intervalID), this.cancelLatencyTest(), n()
            }
        },
        M = (n(161), n(163), Object(w.a)($, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "main-proxy-view"
                }
            }, [n("proxy-mode-switcher", {
                attrs: {
                    mode: e.currentMode
                },
                on: {
                    switch: e.handleModeSwitch
                }
            }), e._v(" "), n("div", {
                ref: "mixin-scroll-content",
                class: ["scroll-view-" + e.theme],
                on: {
                    scroll: function() {
                        return e.handleListScroll()
                    }
                }
            }, [e._l(e.proxyInMode, (function(t, r) {
                return n("div", {
                    key: t.name,
                    ref: "list",
                    refInFor: !0
                }, [n("div", {
                    staticClass: "proxy-list"
                }, [n("div", {
                    class: ["proxy-section-" + e.theme],
                    on: {
                        click: function() {
                            return e.switchVisiable(r)
                        }
                    }
                }, [n("div", {
                    staticClass: "proxy-section-name"
                }, [n("div", {
                    staticClass: "proxy-section-name-left",
                    domProps: {
                        innerHTML: e._s(e.$parseEmoji(
                            (t.name == "GLOBAL") ? "☆ 全局 ☆" :
                            t.name
                            , 26))
                    }
                }), e._v(" "), t.data.now ? n("div", {
                    staticClass: "proxy-hint",
                    domProps: {
                        innerHTML: e._s(e.$parseEmoji(" · " + (
                            (t.data.now == "DIRECT") ? "☆ 直连 ☆" :
                            (t.data.now == "REJECT") ? "☆ 拒绝 ☆" :
                            t.data.now
                        ), 20, 2, 0))
                    }
                }) : n("div", {
                    staticClass: "proxy-hint-loadbalance"
                }, [e._v("\n              (" + e._s(
                    (t.data.type == "LoadBalance") ? "负载均衡" :
                    t.data.type
                ) + ")\n            ")])]), e._v(" "), n("div", {
                    staticClass: "proxy-section-right"
                }, [n("svg", {
                    staticClass: "icon clickable",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), e.startLatencyTest(t.name, r)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM2.06 10.06c.51.51 1.33.55 1.89.09 2.76-2.26 6.24-3.18 9.58-2.76l1.19-2.68c-4.35-.78-8.96.3-12.57 3.25-.64.53-.68 1.51-.09 2.1zm19.88 0c.59-.59.55-1.57-.1-2.1-1.36-1.11-2.86-1.95-4.44-2.53l-.53 2.82c1.13.47 2.19 1.09 3.17 1.89.58.46 1.39.43 1.9-.08zm-4.03 4.03c.6-.6.56-1.63-.14-2.12-.46-.33-.94-.61-1.44-.86l-.55 2.92c.11.07.22.14.32.22.57.4 1.33.32 1.81-.16zm-11.83-.01c.5.5 1.27.54 1.85.13.94-.66 2.01-1.06 3.1-1.22l1.28-2.88c-2.13-.06-4.28.54-6.09 1.84-.69.51-.74 1.53-.14 2.13z"
                    }
                })]), e._v(" "), ["rule", "script"].includes(e.currentMode) && e.showSecIdxs.includes(r) ? n("svg", {
                    staticClass: "icon clickable",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.switchVisiable(r)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z"
                    }
                })]) : e._e(), e._v(" "), ["rule", "script"].includes(e.currentMode) && !e.showSecIdxs.includes(r) ? n("svg", {
                    staticClass: "icon",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    },
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.switchVisiable(r)
                        }
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                    }
                })]) : e._e()])]), e._v(" "), n("transition", {
                    attrs: {
                        name: "fall-fade"
                    }
                }, [!["rule", "script"].includes(e.currentMode) || e.showSecIdxs.includes(r) ? n("div", {
                    staticClass: "proxy-items"
                }, [e._l(t.data.all, (function(r, i) {
                    return n("div", {
                        key: r.name + t.name + i,
                        staticClass: "proxy-item",
                        class: {
                            selected: r.name === t.data.now, clickable: "Selector" === t.data.type
                        },
                        style: [{
                            width: e.proxyItemWidth
                        }],
                        on: {
                            click: function() {
                                return e.switchProxy(t.name, r.name, "Selector" !== t.data.type)
                            }
                        }
                    }, [n("div", {
                        staticClass: "indicator"
                    }), e._v(" "), n("div", {
                        staticClass: "info"
                    }, [n("div", {
                        staticClass: "left"
                    }, [n("div", {
                        staticClass: "item-name",
                        domProps: {
                            innerHTML: e._s(e.$parseEmoji(
                                (r.name == "DIRECT") ? "☆ 直连 ☆" :
                                (r.name == "REJECT") ? "☆ 拒绝 ☆" :
                                r.name
                                , 19, 0, 5))
                        }
                    }), e._v(" "), n("div", {
                        staticClass: "item-hint",
                        domProps: {
                            innerHTML: e._s(r.provider ? "提供器: " + r.provider.name : (
                                (e.nodeHint(r) == "Direct") ? "直连" :
                                (e.nodeHint(r) == "Reject") ? "拒绝" :
                                (e.nodeHint(r) == "LoadBalance") ? "负载均衡" :
                                e.nodeHint(r)
                            ))
                        }
                    })]), e._v(" "), n("div", {
                        class: {
                            offline: "Timeout" === r.latency, online: !["Timeout", null, void 0, ""].includes(r.latency), time: !0
                        },
                        on: {
                            click: [function() {
                                return e.handleSingleSpeedtest(t, r)
                            }, function(e) {
                                e.stopPropagation()
                            }]
                        }
                    }, [e._v("\n                  " + e._s(
                        (e.checkBtnText(r) == "Check") ? "正在检测" :
                        (e.checkBtnText(r) == "Timeout") ? "超时" :
                        e.checkBtnText(r)
                    ) + "\n                ")])])])
                })), e._v(" "), e._l(Array(20), (function(t, r) {
                    return n("i", {
                        key: r,
                        style: {
                            width: e.proxyItemWidth
                        }
                    })
                }))], 2) : e._e()])], 1)])
            })), e._v(" "), null === e.proxyInMode && "direct" !== this.currentMode ? n("div", [n("div", {
                class: ["fake-section-" + e.theme]
            }), e._v(" "), n("div", {
                staticClass: "proxy-items proxy-list"
            }, e._l(Array(12), (function(t, r) {
                return n("div", {
                    key: r,
                    class: ["fake-item-" + e.theme]
                }, [n("div")])
            })), 0)]) : e._e(), e._v(" "), 0 === e.proxyInMode.length && "direct" !== this.currentMode ? n("div", {
                staticClass: "empty-hint"
            }, [n("div", [e._v("这个配置文件中没有代理组")]), e._v(" "), n("div", [e._v("\n        到\n        "), n("span", {
                on: {
                    click: function() {
                        return e.$router.replace({
                            path: "/home/server"
                        })
                    }
                }
            }, [e._v("配置文件")]), e._v("\n        中导入/切换一个配置文件\n      ")])]) : e._e()], 2), e._v(" "), e.settings.showProxyFilter ? n("div", {
                staticClass: "filter-keyword"
            }, [n("transition", {
                attrs: {
                    name: "move-right"
                }
            }, [e.isShowFilter ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.filterKeyword,
                    expression: "filterKeyword"
                }],
                ref: "filterKeyword",
                attrs: {
                    spellcheck: "false",
                    type: "text"
                },
                domProps: {
                    value: e.filterKeyword
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.filterKeyword = t.target.value)
                    }
                }
            }) : e._e()]), e._v(" "), n("div", {
                on: {
                    click: e.handleFilterIconClick
                }
            }, [e.isShowFilter ? n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "white",
                    width: "20px",
                    height: "20px"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                }
            })]) : n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "white",
                    width: "20px",
                    height: "20px"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z"
                }
            })])])], 1) : e._e()], 1)
        }), [], !1, null, "906102ce", null));
    M.options.__file = "ProxyView.vue", t.default = M.exports
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
            p()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }
    n.r(t);
    var a = n(23),
        o = n.n(a),
        s = n(0),
        c = n.n(s),
        d = n(1),
        l = n.n(d),
        u = n(3),
        p = n.n(u),
        f = n(5),
        h = n(16),
        v = n.n(h),
        m = n(13),
        g = {
            props: {
                text: String,
                size: String,
                isLoading: Boolean
            },
            methods: {
                handleClick: function() {
                    this.isLoading || this.$emit("click")
                }
            }
        },
        b = (n(165), n(7)),
        x = Object(b.a)(g, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "main-button-view",
                on: {
                    click: e.handleClick
                }
            }, [e.isLoading ? n("div", {
                staticClass: "line"
            }, [n("div", {
                class: ["box", "animation-delay1", "large" === e.size ? "large" : "small"]
            }), e._v(" "), n("div", {
                class: ["box", "animation-delay2", "large" === e.size ? "large" : "small"]
            }), e._v(" "), n("div", {
                class: ["box", "animation-delay3", "large" === e.size ? "large" : "small"]
            }), e._v(" "), n("div", {
                class: ["box", "animation-delay4", "large" === e.size ? "large" : "small"]
            }), e._v(" "), n("div", {
                class: ["box", "animation-delay5", "large" === e.size ? "large" : "small"]
            })]) : n("div", [e._v(e._s(e.text))])])
        }), [], !1, null, "f3b3ccf8", null);
    x.options.__file = "Button.vue";
    var y = {
            components: {
                Button: x.exports
            },
            props: [],
            data: function() {
                return {
                    providers: [],
                    ruleProviders: []
                }
            },
            watch: {
                clashStatus: function(e) {
                    e === m.a.CONNECTED && this.fetchData()
                },
                profileRefreshTimes: function() {
                    this.fetchData()
                }
            },
            computed: i(i({}, Object(f.mapState)({
                clashStatus: function(e) {
                    return e.app.clashStatus
                },
                profileRefreshTimes: function(e) {
                    return e.app.profileRefreshTimes
                }
            })), Object(f.mapGetters)(["clashAxiosClient"])),
            methods: {
                fromNowString: function(e) {
                    return v()(e).fromNow()
                },
                handleAllProvidersUpdate: function() {
                    for (var e in this.providers) this.handleProviderUpdate(e);
                    for (var t in this.ruleProviders) this.handleRuleProviderUpdate(t)
                },
                handleAllProvidersHealthCheck: function() {
                    for (var e in this.providers) this.handleHealthCheck(e)
                },
                handleHealthCheck: function(e) {
                    var t = this;
                    return l()(c.a.mark((function n() {
                        var r, a;
                        return c.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (r = t.providers[e], !(a = r.name)) {
                                        n.next = 12;
                                        break
                                    }
                                    return t.$set(t.providers, e, i(i({}, r), {}, {
                                        isChecking: !0
                                    })), n.prev = 4, n.next = 7, t.clashAxiosClient.get("/providers/proxies/".concat(encodeURIComponent(a), "/healthcheck"), {
                                        timeout: 0
                                    });
                                case 7:
                                    n.next = 11;
                                    break;
                                case 9:
                                    n.prev = 9, n.t0 = n.catch(4);
                                case 11:
                                    t.$set(t.providers, e, i(i({}, r), {}, {
                                        isChecking: !1
                                    }));
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [4, 9]
                        ])
                    })))()
                },
                handleProviderUpdate: function(e) {
                    var t = this;
                    return l()(c.a.mark((function n() {
                        var r, a, o, s, d, l, u, p, f;
                        return c.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (r = t.providers[e], a = r.name, "HTTP" !== r.vehicleType || !a) {
                                        n.next = 33;
                                        break
                                    }
                                    return t.$set(t.providers, e, i(i({}, r), {}, {
                                        isUpdating: !0,
                                        message: ""
                                    })), n.prev = 4, n.next = 7, t.clashAxiosClient.put("/providers/proxies/".concat(encodeURIComponent(a)), {}, {
                                        validateStatus: function() {
                                            return !0
                                        },
                                        timeout: 0
                                    });
                                case 7:
                                    if (o = n.sent, s = o.status, d = o.data, 204 !== s) {
                                        n.next = 26;
                                        break
                                    }
                                    return n.next = 13, t.fetchSingleData("proxies", a);
                                case 13:
                                    if (n.t1 = l = n.sent, n.t0 = null !== n.t1, !n.t0) {
                                        n.next = 17;
                                        break
                                    }
                                    n.t0 = void 0 !== l;
                                case 17:
                                    if (!n.t0) {
                                        n.next = 21;
                                        break
                                    }
                                    n.t2 = l, n.next = 22;
                                    break;
                                case 21:
                                    n.t2 = r;
                                case 22:
                                    u = n.t2, t.$set(t.providers, e, i(i({}, u), {}, {
                                        isUpdating: !1,
                                        message: ""
                                    })), n.next = 28;
                                    break;
                                case 26:
                                    p = d.message, f = void 0 === p ? "could not update provider" : p, t.$set(t.providers, e, i(i({}, r), {}, {
                                        isUpdating: !1,
                                        message: f
                                    }));
                                case 28:
                                    n.next = 33;
                                    break;
                                case 30:
                                    n.prev = 30, n.t3 = n.catch(4), t.$set(t.providers, e, i(i({}, r), {}, {
                                        isUpdating: !1,
                                        message: n.t3
                                    }));
                                case 33:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [4, 30]
                        ])
                    })))()
                },
                handleRuleProviderUpdate: function(e) {
                    var t = this;
                    return l()(c.a.mark((function n() {
                        var r, a, o, s, d, l, u, p, f;
                        return c.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (r = t.ruleProviders[e], a = r.name, "HTTP" !== r.vehicleType || !a) {
                                        n.next = 33;
                                        break
                                    }
                                    return t.$set(t.ruleProviders, e, i(i({}, r), {}, {
                                        isUpdating: !0,
                                        message: ""
                                    })), n.prev = 4, n.next = 7, t.clashAxiosClient.put("/providers/rules/".concat(encodeURIComponent(a)), {}, {
                                        validateStatus: function() {
                                            return !0
                                        },
                                        timeout: 0
                                    });
                                case 7:
                                    if (o = n.sent, s = o.status, d = o.data, 204 !== s) {
                                        n.next = 26;
                                        break
                                    }
                                    return n.next = 13, t.fetchSingleData("rules", a);
                                case 13:
                                    if (n.t1 = l = n.sent, n.t0 = null !== n.t1, !n.t0) {
                                        n.next = 17;
                                        break
                                    }
                                    n.t0 = void 0 !== l;
                                case 17:
                                    if (!n.t0) {
                                        n.next = 21;
                                        break
                                    }
                                    n.t2 = l, n.next = 22;
                                    break;
                                case 21:
                                    n.t2 = r;
                                case 22:
                                    u = n.t2, t.$set(t.ruleProviders, e, i(i({}, u), {}, {
                                        isUpdating: !1,
                                        message: ""
                                    })), n.next = 28;
                                    break;
                                case 26:
                                    p = d.message, f = void 0 === p ? "could not update provider" : p, t.$set(t.ruleProviders, e, i(i({}, r), {}, {
                                        isUpdating: !1,
                                        message: f
                                    }));
                                case 28:
                                    n.next = 33;
                                    break;
                                case 30:
                                    n.prev = 30, n.t3 = n.catch(4), t.$set(t.ruleProviders, e, i(i({}, r), {}, {
                                        isUpdating: !1,
                                        message: n.t3
                                    }));
                                case 33:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [4, 30]
                        ])
                    })))()
                },
                fetchSingleData: function(e, t) {
                    var n = this;
                    return l()(c.a.mark((function r() {
                        var i, a, o, s;
                        return c.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return i = "/providers/".concat(e, "/").concat(encodeURIComponent(t)), r.next = 3, n.clashAxiosClient.get(i, {
                                        validateStatus: function() {
                                            return !0
                                        }
                                    });
                                case 3:
                                    return a = r.sent, o = a.status, s = a.data, r.abrupt("return", 200 === o ? s : null);
                                case 7:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                },
                fetchData: function() {
                    var e = this;
                    return l()(c.a.mark((function t() {
                        var n, r, a, s, d, l, u, p, f, h, v, m, g, b, x, y, w, k, _, O, S, C, P;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Promise.all([e.clashAxiosClient.get("/providers/proxies"), e.clashAxiosClient.get("/providers/rules")]);
                                case 2:
                                    if (n = t.sent, r = o()(n, 2), a = r[0], s = a.status, d = a.data, l = void 0 === d ? {} : d, u = r[1], p = u.status, f = u.data, 200 === s) {
                                        for (h = l.providers, v = void 0 === h ? {} : h, m = [], g = 0, b = Object.entries(v); g < b.length; g++) x = o()(b[g], 2), x[0], y = x[1], m.push(i(i({}, y), {}, {
                                            isChecking: !1,
                                            isUpdating: !1,
                                            message: ""
                                        }));
                                        e.providers = m.filter((function(e) {
                                            return ["HTTP", "FILE"].includes(e.vehicleType)
                                        }))
                                    } else e.providers = [];
                                    if (200 === p) {
                                        for (w = f.providers, k = void 0 === w ? {} : w, _ = [], O = 0, S = Object.entries(k); O < S.length; O++) C = o()(S[O], 2), C[0], P = C[1], _.push(i(i({}, P), {}, {
                                            isUpdating: !1,
                                            message: ""
                                        }));
                                        e.ruleProviders = _.filter((function(e) {
                                            return ["HTTP", "FILE"].includes(e.vehicleType)
                                        }))
                                    } else e.ruleProviders = [];
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                }
            },
            beforeRouteEnter: function(e, t, n) {
                n((function(e) {
                    e.fetchData()
                }))
            }
        },
        w = (n(167), Object(b.a)(y, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-provider-view-" + e.theme]
            }, [n("div", {
                class: ["card"]
            }, [n("div", {
                staticClass: "header"
            }, [n("div", {
                staticClass: "buttons"
            }, [n("Button", {
                staticClass: "btn",
                attrs: {
                    text: "更新全部",
                    isLoading: !1
                },
                on: {
                    click: e.handleAllProvidersUpdate
                }
            }), e._v(" "), n("Button", {
                staticClass: "btn",
                attrs: {
                    text: "全部健康检查",
                    isLoading: !1
                },
                on: {
                    click: e.handleAllProvidersHealthCheck
                }
            })], 1)]), e._v(" "), n("div", {
                ref: "mixin-scroll-content",
                staticClass: "content"
            }, [0 < e.providers.length ? [n("div", {
                staticClass: "title"
            }, [e._v("代理提供器")]), e._v(" "), n("div", {
                staticClass: "items"
            }, e._l(e.providers, (function(t, r) {
                return n("div", {
                    key: t.name,
                    staticClass: "provider-item"
                }, [n("div", {
                    staticClass: "provider-item-main"
                }, [n("div", [n("div", {
                    staticClass: "name-type"
                }, [n("div", {
                    staticClass: "name"
                }, [e._v(e._s(t.name))])]), e._v(" "), n("div", {
                    staticClass: "update-hint"
                }, [n("div", {
                    staticClass: "type"
                }, [e._v("\n                    " + e._s(t.vehicleType) + " (" + e._s(t.proxies.length) + "\n                    个代理) (" + e._s(e.fromNowString(t.updatedAt)) + ")\n                  ")])]), e._v(" "), n("div", {
                    staticClass: "error-hint"
                }, [e._v(e._s(t.message))])]), e._v(" "), n("div", {
                    staticClass: "empty"
                }), e._v(" "), n("div", {
                    staticClass: "icon-btn",
                    on: {
                        click: function() {
                            return e.handleHealthCheck(r)
                        }
                    }
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM2.06 10.06c.51.51 1.33.55 1.89.09 2.76-2.26 6.24-3.18 9.58-2.76l1.19-2.68c-4.35-.78-8.96.3-12.57 3.25-.64.53-.68 1.51-.09 2.1zm19.88 0c.59-.59.55-1.57-.1-2.1-1.36-1.11-2.86-1.95-4.44-2.53l-.53 2.82c1.13.47 2.19 1.09 3.17 1.89.58.46 1.39.43 1.9-.08zm-4.03 4.03c.6-.6.56-1.63-.14-2.12-.46-.33-.94-.61-1.44-.86l-.55 2.92c.11.07.22.14.32.22.57.4 1.33.32 1.81-.16zm-11.83-.01c.5.5 1.27.54 1.85.13.94-.66 2.01-1.06 3.1-1.22l1.28-2.88c-2.13-.06-4.28.54-6.09 1.84-.69.51-.74 1.53-.14 2.13z"
                    }
                })])]), e._v(" "), "HTTP" === t.vehicleType ? n("div", {
                    staticClass: "icon-btn",
                    on: {
                        click: function() {
                            return e.handleProviderUpdate(r)
                        }
                    }
                }, [n("svg", {
                    class: {
                        rotating: t.isUpdating
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [n("title", [e._v("Update provider")]), e._v(" "), n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M17.65 6.35c-1.63-1.63-3.94-2.57-6.48-2.31-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20c3.19 0 5.93-1.87 7.21-4.56.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53-1.13 2.43-3.84 3.97-6.8 3.31-2.22-.49-4.01-2.3-4.48-4.52C5.31 9.44 8.26 6 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z"
                    }
                })])]) : e._e()])])
            })), 0)] : e._e(), e._v(" "), 0 < e.ruleProviders.length ? [n("div", {
                staticClass: "title"
            }, [e._v("规则提供器")]), e._v(" "), n("div", {
                staticClass: "items"
            }, e._l(e.ruleProviders, (function(t, r) {
                return n("div", {
                    key: t.name,
                    staticClass: "provider-item"
                }, [n("div", {
                    staticClass: "provider-item-main"
                }, [n("div", [n("div", {
                    staticClass: "name-type"
                }, [n("div", {
                    staticClass: "name"
                }, [e._v("\n                    " + e._s(t.name) + "\n                  ")])]), e._v(" "), n("div", {
                    staticClass: "update-hint"
                }, [n("div", {
                    staticClass: "type"
                }, [e._v("\n                    " + e._s(t.vehicleType) + "\n                    " + e._s(t.behavior) + " (" + e._s(t.ruleCount) + " 个规则)\n                    (" + e._s(e.fromNowString(t.updatedAt)) + ")\n                  ")])]), e._v(" "), n("div", {
                    staticClass: "error-hint"
                }, [e._v(e._s(t.message))])]), e._v(" "), n("div", {
                    staticClass: "empty"
                }), e._v(" "), n("div", {
                    staticClass: "icon-btn",
                    on: {
                        click: function() {
                            return e.handleRuleProviderUpdate(r)
                        }
                    }
                }, [n("svg", {
                    class: {
                        rotating: t.isUpdating
                    },
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                    }
                }, [n("title", [e._v("Update provider")]), e._v(" "), n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M17.65 6.35c-1.63-1.63-3.94-2.57-6.48-2.31-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20c3.19 0 5.93-1.87 7.21-4.56.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53-1.13 2.43-3.84 3.97-6.8 3.31-2.22-.49-4.01-2.3-4.48-4.52C5.31 9.44 8.26 6 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z"
                    }
                })])])])])
            })), 0)] : e._e()], 2)])])
        }), [], !1, null, "cabfc7f4", null));
    w.options.__file = "ProviderView.vue", t.default = w.exports
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }
    n.r(t);
    var i = n(0),
        a = n.n(i),
        o = n(1),
        s = n.n(o),
        c = n(3),
        d = n.n(c),
        l = n(10),
        u = n(11),
        p = n(18),
        f = n.n(p),
        h = Symbol(),
        v = Symbol(),
        m = Symbol(),
        g = (n(209), n(7)),
        b = Object(g.a)({
            props: ["src", "clickalbe"],
            data: function() {
                return {
                    status: h
                }
            },
            computed: {
                isDefault: function() {
                    return this.status === h
                },
                isLoaded: function() {
                    return this.status === v
                },
                isFailed: function() {
                    return this.status === m
                }
            },
            methods: {
                imgLoaded: function() {
                    this.status = v
                },
                imgFailed: function() {
                    this.status = m
                }
            }
        }, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "lazy-image-view"
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isDefault,
                    expression: "isDefault"
                }],
                staticClass: "placeholder ad-img twinkling"
            }, [n("div", [e._v("图片正在路上")])]), e._v(" "), n("img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isLoaded,
                    expression: "isLoaded"
                }],
                class: {
                    "ad-img": !0, clickable: e.clickalbe
                },
                attrs: {
                    src: e.src
                },
                on: {
                    load: e.imgLoaded,
                    error: e.imgFailed,
                    click: function() {
                        return e.$emit("click")
                    }
                }
            }), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isFailed,
                    expression: "isFailed"
                }],
                staticClass: "ad-img error-img"
            }, [n("div", [e._v("Image not found")]), e._v(" "), n("img", {
                attrs: {
                    src: "static/svg/1f996.svg",
                    alt: ""
                }
            })])])
        }), [], !1, null, "65724216", null);
    b.options.__file = "LazyImageView.vue";
    var x = b.exports,
        y = n(5),
        w = {
            props: [],
            components: {
                LazyImageView: x
            },
            data: function() {
                return {
                    adImages: []
                }
            },
            computed: function(e) {
                for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
                    d()(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }({}, Object(y.mapState)({})),
            methods: {
                select: function(e) {
                    this.$electron.shell.openExternal(["https://t.me/Rules_lhie1", "https://t.me/Fndroids", "https://github.com/Fndroid/clash_for_windows_pkg", "https://github.com/Dreamacro/clash", "https://github.com/yichengchen/clashX", "https://docs.cfw.lbyczf.com/", "https://fndroid.github.io/clash-config-builder/", "https://github.com/tiagonmas/Windows-Loopback-Exemption-Manager", "https://github.com/Noisyfox/sysproxy", "https://github.com/eycorsican/go-tun2socks", "https://dev.maxmind.com/geoip/geoip2/geolite2/", "https://github.com/twitter/twemoji", "https://github.com/Jigsaw-Code/outline-client", "https://github.com/microsoft/terminal/", "https://www.wintun.net/", "https://github.com/winsw/winsw", "https://apps.apple.com/us/app-bundle/quantumult-x-upgrade/id1482985563"][e])
                },
                adClick: function(e) {
                    this.$electron.shell.openExternal(this.adImages[e].click)
                }
            },
            beforeRouteEnter: function(e, t, n) {
                n(function() {
                    var e = s()(a.a.mark((function e(t) {
                        var n, r, i, o, s;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.adImages = l.a.get(u.a.AD_IMAGES) || [], e.next = 3, f.a.get("https://raw.githubusercontent.com/Fndroid/ads/master/ads_v2.json?t=" + (new Date).getTime());
                                case 3:
                                    n = e.sent, r = n.status, i = n.data, 200 === r && ((o = i.feedback) && (s = o, l.a.put(u.a.AD_IMAGES, s), t.adImages = s));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }())
            }
        },
        k = (n(211), n(213), Object(g.a)(w, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "main-about-view"
                }
            }, [e._m(0), e._v(" "), n("div", {
                staticClass: "section"
            }, [n("div", {
                staticClass: "title"
            }, [e._v("相关链接")]), e._v(" "), n("div", {
                staticClass: "chat-list"
            }, [n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(2)
                    }
                }
            }, [e._v("GitHub")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(5)
                    }
                }
            }, [e._v("文档")])])]), e._v(" "), n("div", {
                staticClass: "section"
            }, [n("div", {
                staticClass: "title"
            }, [e._v("鸣谢")]), e._v(" "), n("div", {
                staticClass: "chat-list"
            }, [n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(3)
                    }
                }
            }, [e._v("Clash")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(4)
                    }
                }
            }, [e._v("ClashX")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(16)
                    }
                }
            }, [e._v("\n        Quantumult(X)\n      ")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(10)
                    }
                }
            }, [e._v("GeoLite2")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(11)
                    }
                }
            }, [e._v("twemoji")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(7)
                    }
                }
            }, [e._v("\n        EnableLoopback\n      ")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(8)
                    }
                }
            }, [e._v("sysproxy")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(9)
                    }
                }
            }, [e._v("\n        go-tun2socks\n      ")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(12)
                    }
                }
            }, [e._v("\n        outline-client\n      ")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(13)
                    }
                }
            }, [e._v("terminal")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(14)
                    }
                }
            }, [e._v("Wintun")]), e._v(" "), n("div", {
                class: ["chat-item-" + e.theme],
                on: {
                    click: function() {
                        return e.select(15)
                    }
                }
            }, [e._v("winsw")])])]), e._v(" "), n("div", {
                staticClass: "section ad-section"
            }, [n("div", {
                staticClass: "title"
            }, [e._v("汉化版 v0.15.7.1.1 · 译者: ImFatF1sh")]), e._v(" "), n("div", {
                staticClass: "ad-img-list"
            }, e._l(e.adImages, (function(t, r) {
                return n("div", {
                    key: r,
                    staticClass: "ad-img"
                }, [n("lazy-image-view", {
                    attrs: {
                        clickalbe: t.click,
                        src: t.img
                    },
                    on: {
                        click: function() {
                            return e.adClick(r)
                        }
                    }
                })], 1)
            })), 0)])])
        }), [function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                staticClass: "section"
            }, [n("div", {
                staticClass: "title"
            }, [e._v("开发者")]), e._v(" "), n("div", {
                staticClass: "content"
            }, [e._v("404 Frror")])])
        }], !1, null, "7422cd3a", null));
    k.options.__file = "AboutView.vue", t.default = k.exports
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
            u()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }
    var a = Math.floor;
    n.r(t);
    var o = n(0),
        s = n.n(o),
        c = n(1),
        d = n.n(c),
        l = n(3),
        u = n.n(l),
        p = n(16),
        f = n.n(p),
        h = n(15),
        v = n(5),
        m = n(20),
        g = n(13),
        b = {
            props: [],
            data: function() {
                return {
                    listData: [],
                    randomColor: [],
                    client: null,
                    isAutoScroll: !0,
                    dnsRecords: {}
                }
            },
            watch: {
                isWindowShow: function(e) {
                    this.handleWindwEvent(e)
                },
                clashStatus: function(e) {
                    this.closeLogStream(), e === g.a.CONNECTED && this.openLogStream()
                }
            },
            computed: i(i(i({}, Object(v.mapState)({
                isWindowShow: function(e) {
                    return e.app.isWindowShow
                },
                clashStatus: function(e) {
                    return e.app.clashStatus
                },
                mode: function(e) {
                    return e.app.mode
                }
            })), Object(v.mapGetters)(["clashWSClient"])), {}, {
                buttonText: function() {
                    return this.client && 1 === this.client.readyState ? "停止" : "开始"
                },
                buttonStyle: function() {
                    var e = ["button"];
                    return this.client && 1 === this.client.readyState ? e.push("button-off") : e.push("button-on"), e
                }
            }),
            methods: i(i({}, Object(v.mapActions)(["getMode"])), {}, {
                copyPayload: function(e) {
                    this.$electron.clipboard.writeText(e.url), Object(h.c)("已复制到剪切板!", e.url)
                },
                randomBGC: function(e) {
                    if ("light" === this.theme) {
                        var t = this.randomColor.find((function(t) {
                            return t.type === e
                        }));
                        if (t) return {
                            color: "rgb(".concat(t.r, ",").concat(t.g, ",").concat(t.b, ")")
                        };
                        var n = a(150 * Math.random() + 10),
                            r = a(150 * Math.random() + 10),
                            i = a(150 * Math.random() + 10);
                        return this.randomColor.push({
                            type: e,
                            r: n,
                            g: r,
                            b: i
                        }), {
                            color: "rgb(".concat(n, ",").concat(r, ",").concat(i, ")")
                        }
                    }
                },
                openLogStream: function() {
                    var e = this,
                        t = this.clashWSClient("logs", ["level=debug"]);
                    t && (t.on("message", (function(t) {
                        var n = JSON.parse(t),
                            r = null,
                            a = Object(m.uniqueId)();
                        /^\[(.+?)\](.*?)-->(.*?) doesn't match any rule using (.*)$/.test(n.payload) ? r = {
                            type: n.type,
                            protocol: RegExp.$1.trim(),
                            url: RegExp.$3.trim(),
                            rule: "NoMatch",
                            proxy: "DIRECT",
                            from: RegExp.$2.trim(),
                            time: f()(),
                            id: a
                        } : /^\[(.+?)\](.*?)-->(.*?) match (.*?) using (.*)$/.test(n.payload) ? r = {
                            type: n.type,
                            protocol: RegExp.$1.trim(),
                            url: RegExp.$3.trim(),
                            rule: RegExp.$4.trim(),
                            from: RegExp.$2.trim(),
                            proxy: RegExp.$5.trim(),
                            time: f()(),
                            id: a
                        } : /^\[(.+?)\](.+?)-->(.+?) using (.+?) by Script$/.test(n.payload) ? r = {
                            type: n.type,
                            protocol: RegExp.$1.trim(),
                            url: RegExp.$3.trim(),
                            rule: "Script",
                            from: RegExp.$2.trim(),
                            proxy: RegExp.$4.trim(),
                            time: f()(),
                            id: a
                        } : /^\[(.+?)\](.+?)-->(.+?) using (.+?)$/.test(n.payload) ? r = {
                            type: n.type,
                            protocol: RegExp.$1.trim(),
                            url: RegExp.$3.trim(),
                            rule: RegExp.$4.trim(),
                            from: RegExp.$2.trim(),
                            proxy: RegExp.$4.trim(),
                            time: f()()
                        } : /dial (.+?) to (.+?) error: (.+)/.test(n.payload) ? r = {
                            type: n.type,
                            url: RegExp.$2.trim(),
                            rule: "",
                            from: "".concat(RegExp.$3.trim()),
                            proxy: RegExp.$1.trim(),
                            time: f()(),
                            id: a
                        } : /\[DNS\] (.+?) --> (.+?)$/.test(n.payload) && (e.dnsRecords[RegExp.$1.trim()] = RegExp.$2.trim()), r && ("info" === r.type && r.url in e.dnsRecords && (r = i(i({}, r), {}, {
                            ip: e.dnsRecords[r.url]
                        }), delete e.dnsRecords[r.url]), e.listData.push(r))
                    })), this.client = t)
                },
                closeLogStream: function() {
                    this.client && this.client.terminate(), this.client = null
                },
                handleBtnClick: function() {
                    this.client ? this.closeLogStream() : this.openLogStream()
                },
                handleClear: function() {
                    this.listData = []
                },
                handleWindwEvent: function(e) {
                    e ? this.openLogStream() : this.closeLogStream()
                },
                handleScroll: function(e) {
                    var t = e.target;
                    if (t) {
                        var n = t.scrollTop,
                            r = t.scrollHeight,
                            i = t.clientHeight;
                        this.isAutoScroll = 1 > Math.abs(r - n - i)
                    }
                }
            }),
            beforeRouteEnter: function(e, t, n) {
                n(function() {
                    var e = d()(s.a.mark((function e(t) {
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.getMode(), t.openLogStream(), t.$refs.list.addEventListener("scroll", t.handleScroll);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }())
            },
            beforeRouteLeave: function(e, t, n) {
                this.closeLogStream(), this.$refs.list.removeEventListener("scroll", this.handleScroll), n()
            },
            updated: function() {
                this.$nextTick((function() {
                    var e = this.$refs.list;
                    e && this.isAutoScroll && (e.scrollTop = e.scrollHeight)
                }))
            }
        },
        x = (n(169), n(171), n(7)),
        y = Object(x.a)(b, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-log-view-" + e.theme]
            }, [n("div", {
                staticClass: "title"
            }, [n("div", {
                staticClass: "text"
            }, [n("div", [e._v("请求日志")]), e._v(" "), n("div", {
                staticClass: "hint"
            }, [e._v("模式: " + e._s(
                (e.mode == "global") ? "全局" :
                (e.mode == "rule") ? "规则" :
                (e.mode == "direct") ? "直连" :
                (e.mode == "script") ? "脚本" :
                e.mode[0].toUpperCase() + e.mode.slice(1)
            ))])]), e._v(" "), n("div", {
                staticClass: "btns"
            }, [n("div", {
                staticClass: "button button-clear",
                on: {
                    click: e.handleClear
                }
            }, [e._v("清空")]), e._v(" "), n("div", {
                class: e.buttonStyle,
                on: {
                    click: e.handleBtnClick
                }
            }, [e._v(e._s(e.buttonText))])])]), e._v(" "), n("div", {
                ref: "list",
                class: ["log-list-" + e.theme]
            }, [0 === e.listData.length ? n("div", {
                staticClass: "empty-list"
            }, [n("div", [e._v("空的日志列表")]), e._v(" "), n("div", [e._v("刷新你的浏览器以制造请求.")])]) : e._l(e.listData.slice(-200), (function(t) {
                return n("div", {
                    key: t.id,
                    class: ["log-item-" + e.theme],
                    on: {
                        click: function() {
                            return e.copyPayload(t)
                        }
                    }
                }, [n("div", {
                    class: {
                        left: !0, warning: "warning" === t.type
                    }
                }, [n("div", {
                    staticClass: "url"
                }, [n("div", {
                    staticClass: "name"
                }, [e._v(e._s(t.url))]), e._v(" "), n("div", {
                    class: ["rule-" + e.theme]
                }, [t.protocol ? n("div", [e._v(e._s(t.protocol))]) : e._e(), e._v(" "), t.ip ? n("div", [e._v(e._s(t.ip))]) : e._e(), e._v(" "), t.rule ? n("div", {
                    staticClass: "payload"
                }, [e._v(e._s(t.rule))]) : e._e(), e._v(" "), t.from ? n("div", [e._v(e._s(t.from))]) : e._e(), e._v(" "), n("div", [e._v(e._s(t.time.format("HH:mm:ss.SSS")))])])]), e._v(" "), t.proxy ? n("div", {
                    staticClass: "proxy-name",
                    style: e.randomBGC(t.proxy),
                    domProps: {
                        innerHTML: e._s(e.$parseEmoji(t.proxy))
                    }
                }) : e._e()])])
            }))], 2)])
        }), [], !1, null, "a16b8bd0", null);
    y.options.__file = "LogView.vue", t.default = y.exports
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
            p()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }
    n.r(t);
    var a = n(0),
        o = n.n(a),
        s = n(1),
        c = n.n(s),
        d = n(21),
        l = n.n(d),
        u = n(3),
        p = n.n(u),
        f = n(10),
        h = n(11),
        v = n(16),
        m = n.n(v),
        g = n(5),
        b = n(13),
        x = {
            props: [],
            data: function() {
                return {
                    isPause: !1,
                    searchText: "",
                    client: null,
                    lastData: {
                        uploadTotal: 0,
                        downloadTotal: 0,
                        connections: []
                    },
                    data: {
                        uploadTotal: 0,
                        downloadTotal: 0,
                        connections: []
                    },
                    labels: ["按上传速度", "按下载速度", "按上传流量", "按下载流量", "按时间"],
                    labelSelected: 4,
                    isReverse: !1
                }
            },
            watch: {
                clashStatus: function(e) {
                    this.client && this.client.terminate(), e === b.a.CONNECTED && this.setupComponent()
                }
            },
            computed: i(i(i({}, Object(g.mapState)({
                settings: function(e) {
                    return e.app.settings
                },
                clashStatus: function(e) {
                    return e.app.clashStatus
                }
            })), Object(g.mapGetters)(["clashAxiosClient", "clashWSClient"])), {}, {
                searchTextReg: function() {
                    return new RegExp(this.searchText, "i")
                },
                orderedConnections: function() {
                    var e = this;
                    if (!this.data) return [];
                    var t = function(e) {
                            return new Date(e).getTime()
                        },
                        n = l()(this.data.connections).map((function(t) {
                            var n = t.id,
                                r = e.lastData.connections.find((function(e) {
                                    return e.id === n
                                }));
                            return t.speed = r ? {
                                upload: t.upload - r.upload,
                                download: t.download - r.download
                            } : {
                                upload: 0,
                                download: 0
                            }, t
                        })).sort((function(n, r) {
                            return 4 === e.labelSelected ? t(n.start) - t(r.start) : 3 === e.labelSelected ? r.download - n.download : 2 === e.labelSelected ? r.upload - n.upload : 1 === e.labelSelected ? r.speed.download - n.speed.download : 0 === e.labelSelected ? r.speed.upload - n.speed.upload : 0
                        })),
                        r = this.isReverse ? n.reverse() : n;
                    return "" === this.searchText ? r : r.filter((function(t) {
                        return e.searchTextReg.test(JSON.stringify(Object.values(t)))
                    }))
                }
            }),
            methods: {
                connectionEndpoint: function(e) {
                    var t = e.chains,
                        n = void 0 === t ? [] : t,
                        r = this.settings.connChainType,
                        i = void 0 === r ? 0 : r,
                        a = n.length;
                    return [0, 2].includes(i) && 1 <= a ? this.$parseEmoji(n[0], 18) : ""
                },
                connectionGroup: function(e) {
                    var t = e.chains,
                        n = void 0 === t ? [] : t,
                        r = this.settings.connChainType,
                        i = void 0 === r ? 0 : r,
                        a = n.length;
                    return 2 === i && 1 === a ? "" : [1, 2].includes(i) && 1 <= a ? this.$parseEmoji(n[a - 1], 18) : ""
                },
                handleReverseChange: function() {
                    this.isReverse = !this.isReverse, f.a.put(h.a.CONNECTION_ORDER_REVERSE, this.isReverse)
                },
                handleLableSelect: function(e) {
                    this.labelSelected = e, f.a.put(h.a.CONNECTION_ORDER_INDEX, e)
                },
                calcLabelClasses: function(e) {
                    var t = ["label"];
                    return this.labelSelected === e && t.push("label-selected"), t
                },
                calcSpeedText: function(e) {
                    var t = [];
                    if (!e.speed) return "";
                    var n = e.speed,
                        r = n.upload,
                        i = void 0 === r ? 0 : r,
                        a = n.download,
                        o = void 0 === a ? 0 : a;
                    return 0 !== i && t.push("↑".concat(this.traffic(i), "/s")), 0 !== o && t.push("↓".concat(this.traffic(o), "/s")), t.join(" ")
                },
                fromNow: function(e) {
                    return m()(e).fromNow()
                },
                traffic: function(e) {
                    for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2, n = ["B", "KB", "MB", "GB", "TB"], r = 0; ~~(e / 1024) && r < n.length;) e /= 1024, r++;
                    return "".concat(0 == r ? e : e.toFixed(t), " ").concat(n[r])
                },
                upperCaseFirst: function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                handleCloseConnection: function(e) {
                    var t = this;
                    return c()(o.a.mark((function n() {
                        return o.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, t.clashAxiosClient.delete("connections/".concat(e));
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                handleCloseAllConnections: function() {
                    var e = this;
                    return c()(o.a.mark((function t() {
                        return o.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.clashAxiosClient.delete("connections");
                                case 2:
                                    e.data = i(i({}, e.data), {}, {
                                        connections: []
                                    });
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                handleItemSelected: function(e) {
                    var t = e.metadata,
                        n = "DIRECT" === e.chains[0];
                    this.$preview({
                        data: {
                            Host: t.host,
                            Network: e.metadata.network.toUpperCase(),
                            Traffic: "↑".concat(this.traffic(e.upload), " ↓").concat(this.traffic(e.download)),
                            Source: "".concat(t.sourceIP, ":").concat(t.sourcePort, " (").concat(e.metadata.type, ")"),
                            Destination: (n ? t.destinationIP : t.host || t.destinationIP) + ":" + t.destinationPort,
                            Rule: "".concat(e.rule, " (").concat(e.rulePayload, ")"),
                            Chains: e.chains.slice().reverse().join(" - "),
                            "开始时间": m()(e.start).format("MM-DD HH:mm:ss")
                        },
                        title: "连接信息"
                    })
                },
                handleSwitchPauseStatus: function() {
                    this.isPause = !this.isPause, this.isPause ? this.closeStream() : this.openStream()
                },
                closeStream: function() {
                    this.client && this.client.terminate(), this.client = null
                },
                openStream: function() {
                    var e = this,
                        t = this.clashWSClient("connections");
                    t && (t.on("message", (function(t) {
                        var n = JSON.parse(t);
                        e.lastData = e.data, e.data = n
                    })), this.client = t)
                },
                setupComponent: function() {
                    var e, t;
                    this.labelSelected = null !== (e = f.a.get(h.a.CONNECTION_ORDER_INDEX)) && void 0 !== e ? e : 4, this.isReverse = null !== (t = f.a.get(h.a.CONNECTION_ORDER_REVERSE)) && void 0 !== t && t, this.isPause || this.openStream()
                }
            },
            beforeRouteEnter: function(e, t, n) {
                n(function() {
                    var e = c()(o.a.mark((function e(t) {
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.setupComponent();
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }())
            },
            beforeRouteLeave: function(e, t, n) {
                this.closeStream(), n()
            }
        },
        y = (n(195), n(7)),
        w = Object(y.a)(x, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: ["main-connection-view-" + e.theme]
            }, [n("div", {
                staticClass: "header"
            }, [n("div", {
                staticClass: "title"
            }, [n("div", [e._v("\n        连接\n        "), n("span", [e._v("(共 " + e._s(e.orderedConnections.length) + " 个)")])]), e._v(" "), n("div", {
                on: {
                    click: e.handleReverseChange
                }
            }, [n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "light" === e.theme ? "black" : "white",
                    width: "18px",
                    height: "18px"
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16zM8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35c-.19-.19-.51-.19-.7 0z"
                }
            })])])]), e._v(" "), n("div", {
                staticClass: "search-area"
            }, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.searchText,
                    expression: "searchText"
                }],
                ref: "search-text-input",
                staticClass: "search-box",
                attrs: {
                    type: "text",
                    placeholder: "搜索"
                },
                domProps: {
                    value: e.searchText
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.searchText = t.target.value)
                    }
                }
            }), e._v(" "), n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: ["dark"].includes(e.theme) ? "white" : "black",
                    width: "18px",
                    height: "18px"
                },
                on: {
                    click: function() {
                        e.searchText = "", e.$refs["search-text-input"].focus()
                    }
                }
            }, [n("path", {
                attrs: {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }
            }), e._v(" "), n("path", {
                attrs: {
                    d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                }
            })])]), e._v(" "), n("div", {
                staticClass: "header-right"
            }, [n("div", {
                class: ["button-control", e.isPause ? "button-resume" : "button-pause"],
                on: {
                    click: e.handleSwitchPauseStatus
                }
            }, [e._v("\n        " + e._s(e.isPause ? "继续" : "暂停") + "\n      ")]), e._v(" "), n("div", {
                staticClass: "total-hint"
            }, [e._v("\n        " + e._s("总计: ↑" + e.traffic(e.data.uploadTotal, 1) + " ↓" + e.traffic(e.data.downloadTotal, 1)) + "\n      ")])])]), e._v(" "), n("div", {
                staticClass: "control-view"
            }, [n("div", {
                staticClass: "labels"
            }, e._l(e.labels, (function(t, r) {
                return n("div", {
                    key: t,
                    class: e.calcLabelClasses(r),
                    on: {
                        click: function() {
                            return e.handleLableSelect(r)
                        }
                    }
                }, [e._v("\n        " + e._s(t) + "\n      ")])
            })), 0), e._v(" "), n("div", {
                staticClass: "close-all-btn",
                on: {
                    click: e.handleCloseAllConnections
                }
            }, [e._v("\n      关闭全部\n    ")])]), e._v(" "), n("div", {
                class: ["scroll-view-" + e.theme]
            }, e._l(e.orderedConnections, (function(t) {
                return n("div", {
                    key: t.id,
                    class: ["conn-item-" + e.theme, t.closed ? "conn-item-closed" : ""],
                    on: {
                        click: function() {
                            return e.handleItemSelected(t)
                        }
                    }
                }, [n("div", [n("div", {
                    staticClass: "conn-item-top"
                }, [n("div", {
                    staticClass: "conn-host"
                }, [e._v("\n            " + e._s(t.metadata.host || t.metadata.destinationIP) + ":" + e._s(t.metadata.destinationPort) + "\n          ")])]), e._v(" "), n("div", {
                    staticClass: "conn-labels"
                }, [n("div", {
                    staticClass: "conn1"
                }, [e._v("\n            " + e._s(t.metadata.network.toUpperCase()) + "\n          ")]), e._v(" "), n("div", {
                    staticClass: "conn2"
                }, [e._v(e._s(t.metadata.type))]), e._v(" "), e.connectionGroup(t) ? n("div", {
                    staticClass: "conn3",
                    domProps: {
                        innerHTML: e._s(e.connectionGroup(t))
                    }
                }) : e._e(), e._v(" "), e.connectionEndpoint(t) ? n("div", {
                    staticClass: "conn4",
                    domProps: {
                        innerHTML: e._s(e.connectionEndpoint(t))
                    }
                }) : e._e(), e._v(" "), n("div", {
                    staticClass: "conn5"
                }, [e._v("\n            " + e._s(e.upperCaseFirst(e.fromNow(t.start))) + "\n          ")]), e._v(" "), t.speed.upload || t.speed.download ? n("div", {
                    staticClass: "conn6"
                }, [e._v("\n            " + e._s(e.calcSpeedText(t)) + "\n          ")]) : e._e()])]), e._v(" "), t.closed || e.isPause ? e._e() : n("div", {
                    staticClass: "close-btn",
                    on: {
                        click: function(n) {
                            return n.stopPropagation(), e.handleCloseConnection(t.id)
                        }
                    }
                }, [n("svg", {
                    staticClass: "item-icon",
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "white"
                    }
                }, [n("path", {
                    attrs: {
                        d: "M0 0h24v24H0V0z",
                        fill: "none"
                    }
                }), e._v(" "), n("path", {
                    attrs: {
                        d: "M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                    }
                })])])])
            })), 0)])
        }), [], !1, null, "de777708", null);
    w.options.__file = "ConnectionView.vue", t.default = w.exports
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function i(e) {
        for (var t, n = 1; n < arguments.length; n++) t = null == arguments[n] ? {} : arguments[n], n % 2 ? r(Object(t), !0).forEach((function(n) {
            l()(e, n, t[n])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach((function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }));
        return e
    }
    n.r(t);
    var a = n(0),
        o = n.n(a),
        s = n(1),
        c = n.n(s),
        d = n(3),
        l = n.n(d),
        u = n(21),
        p = n.n(u),
        f = n(23),
        h = n.n(f),
        v = n(4),
        m = n.n(v),
        g = n(14),
        b = n.n(g),
        x = n(2),
        y = n.n(x),
        w = n(18),
        k = n.n(w),
        _ = n(25),
        O = n.n(_),
        S = n(94),
        C = n(13),
        P = n(28),
        j = n.n(P),
        E = n(10),
        T = n(11),
        D = n(6),
        I = function(e, t) {
            var n, r, i, a = null !== (n = E.a.get(T.a.MENU_ITEM_ORDER)) && void 0 !== n ? n : [];
            return (null !== (r = a.findIndex((function(t) {
                return t === e.title
            }))) && void 0 !== r ? r : -1) - (null !== (i = a.findIndex((function(e) {
                return e === t.title
            }))) && void 0 !== i ? i : -1)
        },
        A = n(24),
        $ = {
            clashPath: "",
            clashStatus: C.a.DISCONNECTED,
            profilesPath: "",
            profiles: {},
            confData: {},
            logFilePath: E.a.get(T.a.LAST_LOG_FILE_PATH) || "",
            isMixinEnable: E.a.get(T.a.IS_MIXIN) || !1,
            exePath: "",
            errors: [],
            status: C.b.INIT,
            clashAxiosFlyingRequestCount: 0,
            settings: {},
            shouldUseDarkTheme: !1,
            detectedInterfaceName: E.a.get(T.a.DETECTED_INTERFACE_NAME) || "",
            tempPath: A.remote.app.getPath("temp"),
            isWindowShow: j.a,
            isAppSuspend: !1,
            innerServerPort: 0,
            isLocalMode: !0,
            isLaunching: !0,
            menuItems: [{
                title: "通用",
                path: "/home/general"
            }, {
                title: "代理",
                path: "/home/proxy"
            }, {
                title: "配置",
                path: "/home/server"
            }, {
                title: "日志",
                path: "/home/log"
            }, {
                title: "连接",
                path: "/home/connection"
            }, {
                title: "设置",
                path: "/home/setting"
            }, {
                title: "反馈",
                path: "/home/about"
            }],
            updateDownloadProgress: null,
            isSystemProxyOn: E.a.get(T.a.SYSTEM_PROXY) || !1,
            isSubViewShow: !1,
            currentRoutePath: E.a.get(T.a.CURRENT_ROUTE_PATH) || "/home/general",
            profileRefreshTimes: 0,
            mode: "rule"
        };
    t.default = {
        state: $,
        getters: {
            mixedPort: function(e) {
                return e.confData["mixed-port"] || 0
            },
            controllerPort: function(e) {
                var t = e.confData["external-controller"];
                if (t) {
                    var n = t.split(":"),
                        r = h()(n, 2),
                        i = (r[0], r[1]);
                    return parseInt(i.trim()) || 0
                }
                return 0
            },
            secret: function(e) {
                var t = e.confData.secret;
                return void 0 === t ? "" : t
            },
            clashAxiosClient: function(e, t) {
                var n = t.controllerPort,
                    r = t.secret;
                return 0 < n ? k.a.create({
                    baseURL: "http://127.0.0.1:".concat(n, "/"),
                    timeout: 5e3,
                    headers: {
                        Authorization: "Bearer ".concat(r)
                    }
                }) : null
            },
            clashGotClient: function(e, t) {
                var n = t.controllerPort,
                    r = t.secret;
                return 0 < n ? O.a.extend({
                    baseUrl: "http://127.0.0.1:".concat(n),
                    headers: {
                        Authorization: "Bearer ".concat(r)
                    }
                }) : null
            },
            clashWSClient: function(e, t) {
                return function(e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                        r = t.controllerPort,
                        i = t.secret;
                    if (0 < r) {
                        /^\//.test(e) || (e = "/" + e);
                        var a = "ws://127.0.0.1:".concat(r).concat(e, "?token=").concat(i).concat(0 < n.length ? "&".concat(n.join("&")) : "");
                        return new S(a)
                    }
                    return null
                }
            },
            resourcesPath: function(e) {
                return j.a ? "" : "" === e.exePath ? "" : y.a.join(y.a.dirname(e.exePath), Object(D.g)() ? "../Resources" : "./resources")
            },
            filesPath: function(e, t) {
                return "" === t.resourcesPath ? "static/files" : y.a.join(t.resourcesPath, "static/files")
            },
            theme: function(e) {
                if (e.settings) {
                    var t = e.settings,
                        n = t.theme,
                        r = void 0 === n ? 0 : n,
                        i = t.systemTheme;
                    return void 0 !== i && i ? e.shouldUseDarkTheme ? "dark" : "light" : ["light", "dark", "red", "2077"][r]
                }
                return "light"
            },
            parserLogPath: function(e) {
                return y.a.join(e.tempPath, "cfw-parser.log")
            },
            menuItemsWithOrder: function(e) {
                return p()(e.menuItems).sort(I)
            }
        },
        mutations: {
            CHANGE_IS_MIXIN_ENABLE: function(e, t) {
                var n = t.isMixin;
                e.isMixinEnable = n, E.a.put(T.a.IS_MIXIN, n)
            },
            SET_CLASH_PATH: function(e, t) {
                var n = t.path;
                e.clashPath = n
            },
            SET_CLASH_STATUS: function(e, t) {
                var n = t.status;
                (n === C.a.CONNECTED || n === C.a.DISCONNECTED) && (e.clashStatus = n)
            },
            SET_PROFILES_PATH: function(e, t) {
                var n = t.path;
                e.profilesPath = n
            },
            SET_CONF_DATA: function(e, t) {
                var n = t.data;
                e.confData = n
            },
            LOAD_PROFILES: function(e) {
                var t = m.a.readFileSync(y.a.join(e.profilesPath, "list.yml"), "utf8"),
                    n = b.a.parse(t, {
                        merge: !0,
                        schema: "yaml-1.1"
                    }),
                    r = n.files,
                    i = n.index;
                e.profiles = {
                    files: r,
                    index: i
                }
            },
            SAVE_PROFILES: function(e) {
                m.a.writeFileSync(y.a.join(e.profilesPath, "list.yml"), b.a.stringify(e.profiles))
            },
            CHANGE_PROFILES: function(e, t) {
                var n = t.profiles;
                e.profiles = i(i({}, e.profiles), {}, {
                    files: n
                })
            },
            CHANGE_PROFILES_INDEX: function(e, t) {
                var n = t.index;
                e.profiles = i(i({}, e.profiles), {}, {
                    index: n
                })
            },
            CHANGE_PROFILE: function(e, t) {
                var n = t.index,
                    r = t.profile;
                if (r) {
                    var a = e.profiles.files.slice();
                    a[n] = r, e.profiles = i(i({}, e.profiles), {}, {
                        files: a
                    })
                }
            },
            DELETE_PROFILE: function(e, t) {
                var n = t.index,
                    r = e.profiles.files.slice();
                r.splice(n, 1), e.profiles = i(i({}, e.profiles), {}, {
                    files: r
                })
            },
            APPEND_PROFILE: function(e, t) {
                var n = t.profile,
                    r = e.profiles.files,
                    a = void 0 === r ? [] : r;
                n && (e.profiles = i(i({}, e.profiles), {}, {
                    files: [].concat(p()(a), [n])
                }))
            },
            SET_LOG_FILE_PATH: function(e, t) {
                var n = t.path;
                e.logFilePath = n, E.a.put(T.a.LAST_LOG_FILE_PATH, n)
            },
            SET_EXE_PATH: function(e, t) {
                var n = t.path;
                e.exePath = n
            },
            APPEND_ERROR: function(e, t) {
                var n = t.error;
                e.errors = [].concat(p()(e.errors), [n])
            },
            CHANGE_STATUS: function(e, t) {
                var n = t.status;
                e.status = n
            },
            ADD_AXIOS_FLYING_REQUEST_COUNT: function(e, t) {
                var n = t.count;
                e.clashAxiosFlyingRequestCount += n
            },
            SET_SETTINGS_OBJECT: function(e, t) {
                var n = t.obj;
                e.settings = n
            },
            SAVE_SETTINGS_OBJECT: function(e, t) {
                var n = t.obj;
                e.settings = n, m.a.writeFileSync(y.a.join(e.clashPath, "cfw-settings.yaml"), b.a.stringify(n))
            },
            SET_SHOULD_USE_DARK_THEME: function(e, t) {
                var n = t.shouldUseDarkTheme;
                e.shouldUseDarkTheme = n
            },
            SET_DETECTED_INTERFACE_NAME: function(e, t) {
                var n = t.interfaceName;
                e.detectedInterfaceName = n, E.a.put(T.a.DETECTED_INTERFACE_NAME, n)
            },
            SET_IS_WINDOW_SHOW: function(e, t) {
                var n = t.isShow;
                e.isWindowShow = n
            },
            SET_IS_APP_SUSPEND: function(e, t) {
                var n = t.isSuspend;
                e.isAppSuspend = n
            },
            SET_INNER_SERVER_PORT: function(e, t) {
                var n = t.port;
                e.innerServerPort = n
            },
            SET_IS_LOCAL_MODE: function(e, t) {
                var n = t.isLocal;
                e.isLocalMode = n
            },
            SET_IS_LAUNCHING: function(e, t) {
                var n = t.isLaunching;
                e.isLaunching = n
            },
            SET_MENU_ITEMS: function(e, t) {
                var n = t.items;
                e.menuItems = n
            },
            SET_UPDATE_DOWNLOAD_PROGRESS: function(e, t) {
                var n = t.progress;
                e.updateDownloadProgress = n
            },
            SET_IS_SYSTEM_PROXY_ON: function(e, t) {
                var n = t.isOn;
                e.isSystemProxyOn = n, E.a.put(T.a.SYSTEM_PROXY, n)
            },
            SET_IS_SUB_VIEW_SHOW: function(e, t) {
                var n = t.isShow;
                e.isSubViewShow = n
            },
            SET_CURRENT_ROUTE_PATH: function(e, t) {
                var n = t.path;
                e.currentRoutePath = n, E.a.put(T.a.CURRENT_ROUTE_PATH, n)
            },
            ADD_PROFILE_REFRESH_TIMES: function(e, t) {
                var n = t.times,
                    r = void 0 === n ? 1 : n;
                e.profileRefreshTimes += r
            },
            CHANGE_MODE: function(e, t) {
                var n = t.mode;
                ["direct", "rule", "global", "script"].includes(n) && (e.mode = n)
            }
        },
        actions: {
            getMode: function(e) {
                return c()(o.a.mark((function t() {
                    var n, r, i, a, s, c, d;
                    return o.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.commit, r = e.getters, !(i = r.clashAxiosClient)) {
                                    t.next = 9;
                                    break
                                }
                                return t.next = 5, i.get("/configs").catch((function() {}));
                            case 5:
                                a = t.sent, s = a.status, c = a.data, 200 === s && (d = c.mode, n("CHANGE_MODE", {
                                    mode: d
                                }));
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))()
            },
            setMode: function(e, t) {
                return c()(o.a.mark((function n() {
                    var r, i, a, s, c;
                    return o.a.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (r = e.commit, i = e.getters, a = t.mode, !(s = i.clashAxiosClient)) {
                                    n.next = 9;
                                    break
                                }
                                return n.next = 6, s.patch("/configs", {
                                    mode: a
                                }).catch((function() {}));
                            case 6:
                                c = n.sent, 204 === c.status && r("CHANGE_MODE", {
                                    mode: a
                                });
                            case 9:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))()
            }
        }
    }
}]);