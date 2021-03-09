﻿/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */ ! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.4",
        n = function (a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function (a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function () {
            return d.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return n.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () { },
        isFunction: function (a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ea = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    } if (c.qsa && (!q || !q.test(a))) {
                        if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                            while (l--) o[l] = s + ra(o[l]);
                            w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                        }
                        if (x) try {
                            return H.apply(d, w.querySelectorAll(x)), d
                        } catch (y) { } finally {
                                r || b.removeAttribute("id")
                            }
                    }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) { }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
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
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function (a) {
                    return a = a.replace(ca, da),
                        function (b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return Z.test(a.nodeName)
                },
                input: function (a) {
                    return Y.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function () {
                    return [0]
                }),
                last: oa(function (a, b) {
                    return [b - 1]
                }),
                eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);

        function qa() { }
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                } return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                } k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function (a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                } return d
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function (a) {
            return D(a, "nextSibling")
        },
        prev: function (a) {
            return D(a, "previousSibling")
        },
        nextAll: function (a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return n.sibling(a.firstChild)
        },
        contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function (l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    } d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function () {
                    if (h) {
                        var c = h.length;
                        ! function g(b) {
                            n.each(b, function (b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments), d ? f = h.length : b && (e = c, j(b))
                    }
                    return this
                },
                remove: function () {
                    return h && n.each(arguments, function (a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                    }), this
                },
                has: function (a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function () {
                    return h = [], f = 0, this
                },
                disable: function () {
                    return h = i = b = void 0, this
                },
                disabled: function () {
                    return !h
                },
                lock: function () {
                    return i = void 0, b || k.disable(), this
                },
                locked: function () {
                    return !i
                },
                fireWith: function (a, b) {
                    return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                },
                fire: function () {
                    return k.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!c
                }
            };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [
                ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                ["notify", "progress", n.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }
    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(n(a), c)
        })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function (a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function (a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        },
        hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) { }
                M.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function (a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function (a, b) {
            M.remove(a, b)
        },
        _data: function (a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function () {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function () {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function (a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        T = /^(?:checkbox|radio)$/i;
    ! function () {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement("div")),
            c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) { }
    }
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    } return h < b.length && g.push({
                        elem: this,
                        handlers: b.slice(h)
                    }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
            else if (!d) return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/,
        da = /<(?:script|style|link)/i,
        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i,
        ga = /^true\/(.*)/,
        ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
                else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                    else if (ca.test(e)) {
                        f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                        while (j--) f = f.lastChild;
                        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                    j = 0;
                    while (e = f[j++]) fa.test(e.type || "") && c.push(e)
                } return k
        },
        cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        },
        html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) { }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                m = this,
                o = l - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l,
            c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }
    var ua = /^margin/,
        va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wa = function (b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    } ! function () {
        var b, c, d = l.documentElement,
            e = l.createElement("div"),
            f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                },
                boxSizingReliable: function () {
                    return null == c && g(), c
                },
                reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/,
        Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Da = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Ea.length;
        while (e--)
            if (b = Ea[e] + c, b in a) return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wa(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
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
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return Ja(this, !0)
        },
        hide: function () {
            return Ja(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ka, Ka.prototype = {
        constructor: Ka,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/,
        Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/,
        Qa = [Va],
        Ra = {
            "*": [function (a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Oa.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sa() {
        return setTimeout(function () {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Na.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0,
            g = Qa.length,
            h = n.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: La || Sa(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)
            if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xa, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? Qa.unshift(a) : Qa.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function () {
                    var b = Xa(this, n.extend({}, a), f);
                    (e || L.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0,
            c = n.timers;
        for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    },
        function () {
            var a = l.createElement("input"),
                b = l.createElement("select"),
                c = b.appendChild(l.createElement("option"));
            a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
        }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function (a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    } return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    } return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(),
        db = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/,
        fb = /([?&])_=[^&]*/,
        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ib = /^(?:GET|HEAD)$/,
        jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lb = {},
        mb = {},
        nb = "*/".concat("*"),
        ob = a.location.href,
        pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        var e = {},
            f = a === mb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                } if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            } if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
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
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function (a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g,
        wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                        name: b.name,
                        value: c.replace(xb, "\r\n")
                    }
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) { }
    };
    var Bb = 0,
        Cb = {},
        Db = {
            0: 200,
            1223: 204
        },
        Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cb) Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(),
                    g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function () {
                    c && c()
                }
            }
        }
    });
    var Fb = [],
        Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function (b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.5", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function (b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
        }))
    }

    function d(b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function (b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.5", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
    "use strict";

    function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
            top: 0,
            left: 0
        } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
                        top: b.top + b.height / 2 - d / 2,
                        left: b.left + b.width
                    }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.5", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
            d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery); //! moment.js
//! version : 2.2.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function (a) {
    function b(a, b) {
        return function (c) {
            return i(a.call(this, c), b)
        }
    }

    function c(a, b) {
        return function (c) {
            return this.lang().ordinal(a.call(this, c), b)
        }
    }

    function d() { }

    function e(a) {
        g(this, a)
    }

    function f(a) {
        var b = a.years || a.year || a.y || 0,
            c = a.months || a.month || a.M || 0,
            d = a.weeks || a.week || a.w || 0,
            e = a.days || a.day || a.d || 0,
            f = a.hours || a.hour || a.h || 0,
            g = a.minutes || a.minute || a.m || 0,
            h = a.seconds || a.second || a.s || 0,
            i = a.milliseconds || a.millisecond || a.ms || 0;
        this._input = a, this._milliseconds = +i + 1e3 * h + 6e4 * g + 36e5 * f, this._days = +e + 7 * d, this._months = +c + 12 * b, this._data = {}, this._bubble()
    }

    function g(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }

    function h(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function i(a, b) {
        for (var c = a + ""; c.length < b;) c = "0" + c;
        return c
    }

    function j(a, b, c, d) {
        var e, f, g = b._milliseconds,
            h = b._days,
            i = b._months;
        g && a._d.setTime(+a._d + g * c), (h || i) && (e = a.minute(), f = a.hour()), h && a.date(a.date() + h * c), i && a.month(a.month() + i * c), g && !d && L.updateOffset(a), (h || i) && (a.minute(e), a.hour(f))
    }

    function k(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function l(a, b) {
        var c, d = Math.min(a.length, b.length),
            e = Math.abs(a.length - b.length),
            f = 0;
        for (c = 0; d > c; c++) ~~a[c] !== ~~b[c] && f++;
        return f + e
    }

    function m(a) {
        return a ? ib[a] || a.toLowerCase().replace(/(.)s$/, "$1") : a
    }

    function n(a, b) {
        return b.abbr = a, P[a] || (P[a] = new d), P[a].set(b), P[a]
    }

    function o(a) {
        delete P[a]
    }

    function p(a) {
        if (!a) return L.fn._lang;
        if (!P[a] && Q) try {
            require("./lang/" + a)
        } catch (b) {
            return L.fn._lang
        }
        return P[a] || L.fn._lang
    }

    function q(a) {
        return a.match(/\[.*\]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function r(a) {
        var b, c, d = a.match(T);
        for (b = 0, c = d.length; c > b; b++) d[b] = mb[d[b]] ? mb[d[b]] : q(d[b]);
        return function (e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function s(a, b) {
        return b = t(b, a.lang()), jb[b] || (jb[b] = r(b)), jb[b](a)
    }

    function t(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        for (var d = 5; d-- && (U.lastIndex = 0, U.test(a));) a = a.replace(U, c);
        return a
    }

    function u(a, b) {
        switch (a) {
            case "DDDD":
                return X;
            case "YYYY":
                return Y;
            case "YYYYY":
                return Z;
            case "S":
            case "SS":
            case "SSS":
            case "DDD":
                return W;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return $;
            case "a":
            case "A":
                return p(b._l)._meridiemParse;
            case "X":
                return bb;
            case "Z":
            case "ZZ":
                return _;
            case "T":
                return ab;
            case "MM":
            case "DD":
            case "YY":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
                return V;
            default:
                return new RegExp(a.replace("\\", ""))
        }
    }

    function v(a) {
        var b = (_.exec(a) || [])[0],
            c = (b + "").match(fb) || ["-", 0, 0],
            d = +(60 * c[1]) + ~~c[2];
        return "+" === c[0] ? -d : d
    }

    function w(a, b, c) {
        var d, e = c._a;
        switch (a) {
            case "M":
            case "MM":
                null != b && (e[1] = ~~b - 1);
                break;
            case "MMM":
            case "MMMM":
                d = p(c._l).monthsParse(b), null != d ? e[1] = d : c._isValid = !1;
                break;
            case "D":
            case "DD":
                null != b && (e[2] = ~~b);
                break;
            case "DDD":
            case "DDDD":
                null != b && (e[1] = 0, e[2] = ~~b);
                break;
            case "YY":
                e[0] = ~~b + (~~b > 68 ? 1900 : 2e3);
                break;
            case "YYYY":
            case "YYYYY":
                e[0] = ~~b;
                break;
            case "a":
            case "A":
                c._isPm = p(c._l).isPM(b);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                e[3] = ~~b;
                break;
            case "m":
            case "mm":
                e[4] = ~~b;
                break;
            case "s":
            case "ss":
                e[5] = ~~b;
                break;
            case "S":
            case "SS":
            case "SSS":
                e[6] = ~~(1e3 * ("0." + b));
                break;
            case "X":
                c._d = new Date(1e3 * parseFloat(b));
                break;
            case "Z":
            case "ZZ":
                c._useUTC = !0, c._tzm = v(b)
        }
        null == b && (c._isValid = !1)
    }

    function x(a) {
        var b, c, d, e = [];
        if (!a._d) {
            for (d = z(a), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = e[b] = d[b];
            for (; 7 > b; b++) a._a[b] = e[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            e[3] += ~~((a._tzm || 0) / 60), e[4] += ~~((a._tzm || 0) % 60), c = new Date(0), a._useUTC ? (c.setUTCFullYear(e[0], e[1], e[2]), c.setUTCHours(e[3], e[4], e[5], e[6])) : (c.setFullYear(e[0], e[1], e[2]), c.setHours(e[3], e[4], e[5], e[6])), a._d = c
        }
    }

    function y(a) {
        var b = a._i;
        a._d || (a._a = [b.years || b.year || b.y, b.months || b.month || b.M, b.days || b.day || b.d, b.hours || b.hour || b.h, b.minutes || b.minute || b.m, b.seconds || b.second || b.s, b.milliseconds || b.millisecond || b.ms], x(a))
    }

    function z(a) {
        var b = new Date;
        return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function A(a) {
        var b, c, d, e = p(a._l),
            f = "" + a._i;
        for (d = t(a._f, e).match(T), a._a = [], b = 0; b < d.length; b++) c = (u(d[b], a).exec(f) || [])[0], c && (f = f.slice(f.indexOf(c) + c.length)), mb[d[b]] && w(d[b], c, a);
        f && (a._il = f), a._isPm && a._a[3] < 12 && (a._a[3] += 12), a._isPm === !1 && 12 === a._a[3] && (a._a[3] = 0), x(a)
    }

    function B(a) {
        var b, c, d, f, h, i = 99;
        for (f = 0; f < a._f.length; f++) b = g({}, a), b._f = a._f[f], A(b), c = new e(b), h = l(b._a, c.toArray()), c._il && (h += c._il.length), i > h && (i = h, d = c);
        g(a, d)
    }

    function C(a) {
        var b, c = a._i,
            d = cb.exec(c);
        if (d) {
            for (a._f = "YYYY-MM-DD" + (d[2] || " "), b = 0; 4 > b; b++)
                if (eb[b][1].exec(c)) {
                    a._f += eb[b][0];
                    break
                } _.exec(c) && (a._f += " Z"), A(a)
        } else a._d = new Date(c)
    }

    function D(b) {
        var c = b._i,
            d = R.exec(c);
        c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? C(b) : k(c) ? (b._a = c.slice(0), x(b)) : c instanceof Date ? b._d = new Date(+c) : "object" == typeof c ? y(b) : b._d = new Date(c)
    }

    function E(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function F(a, b, c) {
        var d = O(Math.abs(a) / 1e3),
            e = O(d / 60),
            f = O(e / 60),
            g = O(f / 24),
            h = O(g / 365),
            i = 45 > d && ["s", d] || 1 === e && ["m"] || 45 > e && ["mm", e] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === g && ["d"] || 25 >= g && ["dd", g] || 45 >= g && ["M"] || 345 > g && ["MM", O(g / 30)] || 1 === h && ["y"] || ["yy", h];
        return i[2] = b, i[3] = a > 0, i[4] = c, E.apply({}, i)
    }

    function G(a, b, c) {
        var d, e = c - b,
            f = c - a.day();
        return f > e && (f -= 7), e - 7 > f && (f += 7), d = L(a).add("d", f), {
            week: Math.ceil(d.dayOfYear() / 7),
            year: d.year()
        }
    }

    function H(a) {
        var b = a._i,
            c = a._f;
        return null === b || "" === b ? null : ("string" == typeof b && (a._i = b = p().preparse(b)), L.isMoment(b) ? (a = g({}, b), a._d = new Date(+b._d)) : c ? k(c) ? B(a) : A(a) : D(a), new e(a))
    }

    function I(a, b) {
        L.fn[a] = L.fn[a + "s"] = function (a) {
            var c = this._isUTC ? "UTC" : "";
            return null != a ? (this._d["set" + c + b](a), L.updateOffset(this), this) : this._d["get" + c + b]()
        }
    }

    function J(a) {
        L.duration.fn[a] = function () {
            return this._data[a]
        }
    }

    function K(a, b) {
        L.duration.fn["as" + a] = function () {
            return +this / b
        }
    }
    for (var L, M, N = "2.2.1", O = Math.round, P = {}, Q = "undefined" != typeof module && module.exports, R = /^\/?Date\((\-?\d+)/i, S = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, T = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, U = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, V = /\d\d?/, W = /\d{1,3}/, X = /\d{3}/, Y = /\d{1,4}/, Z = /[+\-]?\d{1,6}/, $ = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, _ = /Z|[\+\-]\d\d:?\d\d/i, ab = /T/i, bb = /[\+\-]?\d+(\.\d{1,3})?/, cb = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, db = "YYYY-MM-DDTHH:mm:ssZ", eb = [
        ["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
    ], fb = /([\+\-]|\d\d)/gi, gb = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), hb = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
    }, ib = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        w: "week",
        W: "isoweek",
        M: "month",
        y: "year"
    }, jb = {}, kb = "DDD w W M D d".split(" "), lb = "M D H h m s w W".split(" "), mb = {
        M: function () {
            return this.month() + 1
        },
        MMM: function (a) {
            return this.lang().monthsShort(this, a)
        },
        MMMM: function (a) {
            return this.lang().months(this, a)
        },
        D: function () {
            return this.date()
        },
        DDD: function () {
            return this.dayOfYear()
        },
        d: function () {
            return this.day()
        },
        dd: function (a) {
            return this.lang().weekdaysMin(this, a)
        },
        ddd: function (a) {
            return this.lang().weekdaysShort(this, a)
        },
        dddd: function (a) {
            return this.lang().weekdays(this, a)
        },
        w: function () {
            return this.week()
        },
        W: function () {
            return this.isoWeek()
        },
        YY: function () {
            return i(this.year() % 100, 2)
        },
        YYYY: function () {
            return i(this.year(), 4)
        },
        YYYYY: function () {
            return i(this.year(), 5)
        },
        gg: function () {
            return i(this.weekYear() % 100, 2)
        },
        gggg: function () {
            return this.weekYear()
        },
        ggggg: function () {
            return i(this.weekYear(), 5)
        },
        GG: function () {
            return i(this.isoWeekYear() % 100, 2)
        },
        GGGG: function () {
            return this.isoWeekYear()
        },
        GGGGG: function () {
            return i(this.isoWeekYear(), 5)
        },
        e: function () {
            return this.weekday()
        },
        E: function () {
            return this.isoWeekday()
        },
        a: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function () {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function () {
            return this.hours()
        },
        h: function () {
            return this.hours() % 12 || 12
        },
        m: function () {
            return this.minutes()
        },
        s: function () {
            return this.seconds()
        },
        S: function () {
            return ~~(this.milliseconds() / 100)
        },
        SS: function () {
            return i(~~(this.milliseconds() / 10), 2)
        },
        SSS: function () {
            return i(this.milliseconds(), 3)
        },
        Z: function () {
            var a = -this.zone(),
                b = "+";
            return 0 > a && (a = -a, b = "-"), b + i(~~(a / 60), 2) + ":" + i(~~a % 60, 2)
        },
        ZZ: function () {
            var a = -this.zone(),
                b = "+";
            return 0 > a && (a = -a, b = "-"), b + i(~~(10 * a / 6), 4)
        },
        z: function () {
            return this.zoneAbbr()
        },
        zz: function () {
            return this.zoneName()
        },
        X: function () {
            return this.unix()
        }
    }; kb.length;) M = kb.pop(), mb[M + "o"] = c(mb[M], M);
    for (; lb.length;) M = lb.pop(), mb[M + M] = b(mb[M], 2);
    for (mb.DDDD = b(mb.DDD, 3), g(d.prototype, {
        set: function (a) {
            var b, c;
            for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function (a) {
            return this._months[a.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function (a) {
            return this._monthsShort[a.month()]
        },
        monthsParse: function (a) {
            var b, c, d;
            for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)
                if (this._monthsParse[b] || (c = L.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function (a) {
            return this._weekdays[a.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function (a) {
            return this._weekdaysShort[a.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function (a) {
            return this._weekdaysMin[a.day()]
        },
        weekdaysParse: function (a) {
            var b, c, d;
            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
                if (this._weekdaysParse[b] || (c = L([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
        },
        _longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function (a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
                return a.slice(1)
            }), this._longDateFormat[a] = b), b
        },
        isPM: function (a) {
            return "p" === (a + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function (a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },
        _calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        calendar: function (a, b) {
            var c = this._calendar[a];
            return "function" == typeof c ? c.apply(b) : c
        },
        _relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        relativeTime: function (a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
        },
        pastFuture: function (a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
        },
        ordinal: function (a) {
            return this._ordinal.replace("%d", a)
        },
        _ordinal: "%d",
        preparse: function (a) {
            return a
        },
        postformat: function (a) {
            return a
        },
        week: function (a) {
            return G(a, this._week.dow, this._week.doy).week
        },
        _week: {
            dow: 0,
            doy: 6
        }
    }), L = function (a, b, c) {
        return H({
            _i: a,
            _f: b,
            _l: c,
            _isUTC: !1
        })
    }, L.utc = function (a, b, c) {
        return H({
            _useUTC: !0,
            _isUTC: !0,
            _l: c,
            _i: a,
            _f: b
        }).utc()
    }, L.unix = function (a) {
        return L(1e3 * a)
    }, L.duration = function (a, b) {
        var c, d, e = L.isDuration(a),
            g = "number" == typeof a,
            h = e ? a._input : g ? {} : a,
            i = S.exec(a);
        return g ? b ? h[b] = a : h.milliseconds = a : i && (c = "-" === i[1] ? -1 : 1, h = {
            y: 0,
            d: ~~i[2] * c,
            h: ~~i[3] * c,
            m: ~~i[4] * c,
            s: ~~i[5] * c,
            ms: ~~i[6] * c
        }), d = new f(h), e && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
    }, L.version = N, L.defaultFormat = db, L.updateOffset = function () { }, L.lang = function (a, b) {
        return a ? (a = a.toLowerCase(), a = a.replace("_", "-"), b ? n(a, b) : null === b ? (o(a), a = "en") : P[a] || p(a), L.duration.fn._lang = L.fn._lang = p(a), void 0) : L.fn._lang._abbr
    }, L.langData = function (a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr), p(a)
    }, L.isMoment = function (a) {
        return a instanceof e
    }, L.isDuration = function (a) {
        return a instanceof f
    }, g(L.fn = e.prototype, {
        clone: function () {
            return L(this)
        },
        valueOf: function () {
            return +this._d + 6e4 * (this._offset || 0)
        },
        unix: function () {
            return Math.floor(+this / 1e3)
        },
        toString: function () {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function () {
            return this._offset ? new Date(+this) : this._d
        },
        toISOString: function () {
            return s(L(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function () {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        },
        isValid: function () {
            return null == this._isValid && (this._isValid = this._a ? !l(this._a, (this._isUTC ? L.utc(this._a) : L(this._a)).toArray()) : !isNaN(this._d.getTime())), !!this._isValid
        },
        invalidAt: function () {
            var a, b = this._a,
                c = (this._isUTC ? L.utc(this._a) : L(this._a)).toArray();
            for (a = 6; a >= 0 && b[a] === c[a]; --a);
            return a
        },
        utc: function () {
            return this.zone(0)
        },
        local: function () {
            return this.zone(0), this._isUTC = !1, this
        },
        format: function (a) {
            var b = s(this, a || L.defaultFormat);
            return this.lang().postformat(b)
        },
        add: function (a, b) {
            var c;
            return c = "string" == typeof a ? L.duration(+b, a) : L.duration(a, b), j(this, c, 1), this
        },
        subtract: function (a, b) {
            var c;
            return c = "string" == typeof a ? L.duration(+b, a) : L.duration(a, b), j(this, c, -1), this
        },
        diff: function (a, b, c) {
            var d, e, f = this._isUTC ? L(a).zone(this._offset || 0) : L(a).local(),
                g = 6e4 * (this.zone() - f.zone());
            return b = m(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - L(this).startOf("month") - (f - L(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - L(this).startOf("month").zone() - (f.zone() - L(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : h(e)
        },
        from: function (a, b) {
            return L.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
        },
        fromNow: function (a) {
            return this.from(L(), a)
        },
        calendar: function () {
            var a = this.diff(L().zone(this.zone()).startOf("day"), "days", !0),
                b = -6 > a ? "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(b, this))
        },
        isLeapYear: function () {
            var a = this.year();
            return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
        },
        isDST: function () {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function (a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? "string" == typeof a && (a = this.lang().weekdaysParse(a), "number" != typeof a) ? this : this.add({
                d: a - b
            }) : b
        },
        month: function (a) {
            var b, c = this._isUTC ? "UTC" : "";
            return null != a ? "string" == typeof a && (a = this.lang().monthsParse(a), "number" != typeof a) ? this : (b = this.date(), this.date(1), this._d["set" + c + "Month"](a), this.date(Math.min(b, this.daysInMonth())), L.updateOffset(this), this) : this._d["get" + c + "Month"]()
        },
        startOf: function (a) {
            switch (a = m(a)) {
                case "year":
                    this.month(0);
                case "month":
                    this.date(1);
                case "week":
                case "isoweek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === a ? this.weekday(0) : "isoweek" === a && this.isoWeekday(1), this
        },
        endOf: function (a) {
            return a = m(a), this.startOf(a).add("isoweek" === a ? "week" : a, 1).subtract("ms", 1)
        },
        isAfter: function (a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +L(a).startOf(b)
        },
        isBefore: function (a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +L(a).startOf(b)
        },
        isSame: function (a, b) {
            return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) === +L(a).startOf(b)
        },
        min: function (a) {
            return a = L.apply(null, arguments), this > a ? this : a
        },
        max: function (a) {
            return a = L.apply(null, arguments), a > this ? this : a
        },
        zone: function (a) {
            var b = this._offset || 0;
            return null == a ? this._isUTC ? b : this._d.getTimezoneOffset() : ("string" == typeof a && (a = v(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, b !== a && j(this, L.duration(b - a, "m"), 1, !0), this)
        },
        zoneAbbr: function () {
            return this._isUTC ? "UTC" : ""
        },
        zoneName: function () {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },
        hasAlignedHourOffset: function (a) {
            return a = a ? L(a).zone() : 0, 0 === (this.zone() - a) % 60
        },
        daysInMonth: function () {
            return L.utc([this.year(), this.month() + 1, 0]).date()
        },
        dayOfYear: function (a) {
            var b = O((L(this).startOf("day") - L(this).startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add("d", a - b)
        },
        weekYear: function (a) {
            var b = G(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return null == a ? b : this.add("y", a - b)
        },
        isoWeekYear: function (a) {
            var b = G(this, 1, 4).year;
            return null == a ? b : this.add("y", a - b)
        },
        week: function (a) {
            var b = this.lang().week(this);
            return null == a ? b : this.add("d", 7 * (a - b))
        },
        isoWeek: function (a) {
            var b = G(this, 1, 4).week;
            return null == a ? b : this.add("d", 7 * (a - b))
        },
        weekday: function (a) {
            var b = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
            return null == a ? b : this.add("d", a - b)
        },
        isoWeekday: function (a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
        },
        get: function (a) {
            return a = m(a), this[a.toLowerCase()]()
        },
        set: function (a, b) {
            a = m(a), this[a.toLowerCase()](b)
        },
        lang: function (b) {
            return b === a ? this._lang : (this._lang = p(b), this)
        }
    }), M = 0; M < gb.length; M++) I(gb[M].toLowerCase().replace(/s$/, ""), gb[M]);
    I("year", "FullYear"), L.fn.days = L.fn.day, L.fn.months = L.fn.month, L.fn.weeks = L.fn.week, L.fn.isoWeeks = L.fn.isoWeek, L.fn.toJSON = L.fn.toISOString, g(L.duration.fn = f.prototype, {
        _bubble: function () {
            var a, b, c, d, e = this._milliseconds,
                f = this._days,
                g = this._months,
                i = this._data;
            i.milliseconds = e % 1e3, a = h(e / 1e3), i.seconds = a % 60, b = h(a / 60), i.minutes = b % 60, c = h(b / 60), i.hours = c % 24, f += h(c / 24), i.days = f % 30, g += h(f / 30), i.months = g % 12, d = h(g / 12), i.years = d
        },
        weeks: function () {
            return h(this.days() / 7)
        },
        valueOf: function () {
            return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * ~~(this._months / 12)
        },
        humanize: function (a) {
            var b = +this,
                c = F(b, !a, this.lang());
            return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
        },
        add: function (a, b) {
            var c = L.duration(a, b);
            return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
        },
        subtract: function (a, b) {
            var c = L.duration(a, b);
            return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
        },
        get: function (a) {
            return a = m(a), this[a.toLowerCase() + "s"]()
        },
        as: function (a) {
            return a = m(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
        },
        lang: L.fn.lang
    });
    for (M in hb) hb.hasOwnProperty(M) && (K(M, hb[M]), J(M.toLowerCase()));
    K("Weeks", 6048e5), L.duration.fn.asMonths = function () {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
    }, L.lang("en", {
        ordinal: function (a) {
            var b = a % 10,
                c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), Q && (module.exports = L), "undefined" == typeof ender && (this.moment = L), "function" == typeof define && define.amd && define("moment", [], function () {
        return L
    })
}).call(this);
! function (a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function () {
    "use strict";

    function a() {
        return Rd.apply(null, arguments)
    }

    function b(a) {
        Rd = a
    }

    function c(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }

    function d(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    }

    function e(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d
    }

    function f(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function g(a, b) {
        for (var c in b) f(b, c) && (a[c] = b[c]);
        return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function h(a, b, c, d) {
        return Da(a, b, c, d, !0).utc()
    }

    function i() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function j(a) {
        return null == a._pf && (a._pf = i()), a._pf
    }

    function k(a) {
        if (null == a._isValid) {
            var b = j(a);
            a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
        }
        return a._isValid
    }

    function l(a) {
        var b = h(NaN);
        return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
    }

    function m(a) {
        return void 0 === a
    }

    function n(a, b) {
        var c, d, e;
        if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), m(b._i) || (a._i = b._i), m(b._f) || (a._f = b._f), m(b._l) || (a._l = b._l), m(b._strict) || (a._strict = b._strict), m(b._tzm) || (a._tzm = b._tzm), m(b._isUTC) || (a._isUTC = b._isUTC), m(b._offset) || (a._offset = b._offset), m(b._pf) || (a._pf = j(b)), m(b._locale) || (a._locale = b._locale), Td.length > 0)
            for (c in Td) d = Td[c], e = b[d], m(e) || (a[d] = e);
        return a
    }

    function o(b) {
        n(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Ud === !1 && (Ud = !0, a.updateOffset(this), Ud = !1)
    }

    function p(a) {
        return a instanceof o || null != a && null != a._isAMomentObject
    }

    function q(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function r(a) {
        var b = +a,
            c = 0;
        return 0 !== b && isFinite(b) && (c = q(b)), c
    }

    function s(a, b, c) {
        var d, e = Math.min(a.length, b.length),
            f = Math.abs(a.length - b.length),
            g = 0;
        for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;
        return g + f
    }

    function t() { }

    function u(a) {
        return a ? a.toLowerCase().replace("_", "-") : a
    }

    function v(a) {
        for (var b, c, d, e, f = 0; f < a.length;) {
            for (e = u(a[f]).split("-"), b = e.length, c = u(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                if (d = w(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
                b--
            }
            f++
        }
        return null
    }

    function w(a) {
        var b = null;
        if (!Vd[a] && "undefined" != typeof module && module && module.exports) try {
            b = Sd._abbr, require("./locale/" + a), x(b)
        } catch (c) { }
        return Vd[a]
    }

    function x(a, b) {
        var c;
        return a && (c = m(b) ? z(a) : y(a, b), c && (Sd = c)), Sd._abbr
    }

    function y(a, b) {
        return null !== b ? (b.abbr = a, Vd[a] = Vd[a] || new t, Vd[a].set(b), x(a), Vd[a]) : (delete Vd[a], null)
    }

    function z(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Sd;
        if (!c(a)) {
            if (b = w(a)) return b;
            a = [a]
        }
        return v(a)
    }

    function A(a, b) {
        var c = a.toLowerCase();
        Wd[c] = Wd[c + "s"] = Wd[b] = a
    }

    function B(a) {
        return "string" == typeof a ? Wd[a] || Wd[a.toLowerCase()] : void 0
    }

    function C(a) {
        var b, c, d = {};
        for (c in a) f(a, c) && (b = B(c), b && (d[b] = a[c]));
        return d
    }

    function D(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
    }

    function E(b, c) {
        return function (d) {
            return null != d ? (G(this, b, d), a.updateOffset(this, c), this) : F(this, b)
        }
    }

    function F(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
    }

    function G(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
    }

    function H(a, b) {
        var c;
        if ("object" == typeof a)
            for (c in a) this.set(c, a[c]);
        else if (a = B(a), D(this[a])) return this[a](b);
        return this
    }

    function I(a, b, c) {
        var d = "" + Math.abs(a),
            e = b - d.length,
            f = a >= 0;
        return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
    }

    function J(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function () {
            return this[d]()
        }), a && ($d[a] = e), b && ($d[b[0]] = function () {
            return I(e.apply(this, arguments), b[1], b[2])
        }), c && ($d[c] = function () {
            return this.localeData().ordinal(e.apply(this, arguments), a)
        })
    }

    function K(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function L(a) {
        var b, c, d = a.match(Xd);
        for (b = 0, c = d.length; c > b; b++) $d[d[b]] ? d[b] = $d[d[b]] : d[b] = K(d[b]);
        return function (e) {
            var f = "";
            for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
            return f
        }
    }

    function M(a, b) {
        return a.isValid() ? (b = N(b, a.localeData()), Zd[b] = Zd[b] || L(b), Zd[b](a)) : a.localeData().invalidDate()
    }

    function N(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a
        }
        var d = 5;
        for (Yd.lastIndex = 0; d >= 0 && Yd.test(a);) a = a.replace(Yd, c), Yd.lastIndex = 0, d -= 1;
        return a
    }

    function O(a, b, c) {
        qe[a] = D(b) ? b : function (a, d) {
            return a && c ? c : b
        }
    }

    function P(a, b) {
        return f(qe, a) ? qe[a](b._strict, b._locale) : new RegExp(Q(a))
    }

    function Q(a) {
        return R(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
            return b || c || d || e
        }))
    }

    function R(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function S(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
            c[b] = r(a)
        }), c = 0; c < a.length; c++) re[a[c]] = d
    }

    function T(a, b) {
        S(a, function (a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e)
        })
    }

    function U(a, b, c) {
        null != b && f(re, a) && re[a](b, c._a, c, a)
    }

    function V(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function W(a, b) {
        return c(this._months) ? this._months[a.month()] : this._months[Be.test(b) ? "format" : "standalone"][a.month()]
    }

    function X(a, b) {
        return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Be.test(b) ? "format" : "standalone"][a.month()]
    }

    function Y(a, b, c) {
        var d, e, f;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
            if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d
        }
    }

    function Z(a, b) {
        var c;
        return a.isValid() ? "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), V(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a) : a
    }

    function $(b) {
        return null != b ? (Z(this, b), a.updateOffset(this, !0), this) : F(this, "Month")
    }

    function _() {
        return V(this.year(), this.month())
    }

    function aa(a) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || ca.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex
    }

    function ba(a) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || ca.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex
    }

    function ca() {
        function a(a, b) {
            return b.length - a.length
        }
        var b, c, d = [],
            e = [],
            f = [];
        for (b = 0; 12 > b; b++) c = h([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) d[b] = R(d[b]), e[b] = R(e[b]), f[b] = R(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")$", "i")
    }

    function da(a) {
        var b, c = a._a;
        return c && -2 === j(a).overflow && (b = c[te] < 0 || c[te] > 11 ? te : c[ue] < 1 || c[ue] > V(c[se], c[te]) ? ue : c[ve] < 0 || c[ve] > 24 || 24 === c[ve] && (0 !== c[we] || 0 !== c[xe] || 0 !== c[ye]) ? ve : c[we] < 0 || c[we] > 59 ? we : c[xe] < 0 || c[xe] > 59 ? xe : c[ye] < 0 || c[ye] > 999 ? ye : -1, j(a)._overflowDayOfYear && (se > b || b > ue) && (b = ue), j(a)._overflowWeeks && -1 === b && (b = ze), j(a)._overflowWeekday && -1 === b && (b = Ae), j(a).overflow = b), a
    }

    function ea(b) {
        a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
    }

    function fa(a, b) {
        var c = !0;
        return g(function () {
            return c && (ea(a + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
        }, b)
    }

    function ga(a, b) {
        Ge[a] || (ea(b), Ge[a] = !0)
    }

    function ha(a) {
        var b, c, d, e, f, g, h = a._i,
            i = He.exec(h) || Ie.exec(h);
        if (i) {
            for (j(a).iso = !0, b = 0, c = Ke.length; c > b; b++)
                if (Ke[b][1].exec(i[1])) {
                    e = Ke[b][0], d = Ke[b][2] !== !1;
                    break
                } if (null == e) return void (a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Le.length; c > b; b++)
                    if (Le[b][1].exec(i[3])) {
                        f = (i[2] || " ") + Le[b][0];
                        break
                    } if (null == f) return void (a._isValid = !1)
            }
            if (!d && null != f) return void (a._isValid = !1);
            if (i[4]) {
                if (!Je.exec(i[4])) return void (a._isValid = !1);
                g = "Z"
            }
            a._f = e + (f || "") + (g || ""), wa(a)
        } else a._isValid = !1
    }

    function ia(b) {
        var c = Me.exec(b._i);
        return null !== c ? void (b._d = new Date(+c[1])) : (ha(b), void (b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
    }

    function ja(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    }

    function ka(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
    }

    function la(a) {
        return ma(a) ? 366 : 365
    }

    function ma(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }

    function na() {
        return ma(this.year())
    }

    function oa(a, b, c) {
        var d = 7 + b - c,
            e = (7 + ka(a, 0, d).getUTCDay() - b) % 7;
        return -e + d - 1
    }

    function pa(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7,
            i = oa(a, d, e),
            j = 1 + 7 * (b - 1) + h + i;
        return 0 >= j ? (f = a - 1, g = la(f) + j) : j > la(a) ? (f = a + 1, g = j - la(a)) : (f = a, g = j), {
            year: f,
            dayOfYear: g
        }
    }

    function qa(a, b, c) {
        var d, e, f = oa(a.year(), b, c),
            g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return 1 > g ? (e = a.year() - 1, d = g + ra(e, b, c)) : g > ra(a.year(), b, c) ? (d = g - ra(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        }
    }

    function ra(a, b, c) {
        var d = oa(a, b, c),
            e = oa(a + 1, b, c);
        return (la(a) - d + e) / 7
    }

    function sa(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function ta(b) {
        var c = new Date(a.now());
        return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
    }

    function ua(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = ta(a), a._w && null == a._a[ue] && null == a._a[te] && va(a), a._dayOfYear && (e = sa(a._a[se], d[se]), a._dayOfYear > la(e) && (j(a)._overflowDayOfYear = !0), c = ka(e, 0, a._dayOfYear), a._a[te] = c.getUTCMonth(), a._a[ue] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[ve] && 0 === a._a[we] && 0 === a._a[xe] && 0 === a._a[ye] && (a._nextDay = !0, a._a[ve] = 0), a._d = (a._useUTC ? ka : ja).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[ve] = 24)
        }
    }

    function va(a) {
        var b, c, d, e, f, g, h, i;
        b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = sa(b.GG, a._a[se], qa(Ea(), 1, 4).year), d = sa(b.W, 1), e = sa(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = sa(b.gg, a._a[se], qa(Ea(), f, g).year), d = sa(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > ra(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = pa(c, d, e, f, g), a._a[se] = h.year, a._dayOfYear = h.dayOfYear)
    }

    function wa(b) {
        if (b._f === a.ISO_8601) return void ha(b);
        b._a = [], j(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i,
            i = h.length,
            k = 0;
        for (e = N(b._f, b._locale).match(Xd) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(P(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), $d[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), U(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
        j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[ve] <= 12 && b._a[ve] > 0 && (j(b).bigHour = void 0), b._a[ve] = xa(b._locale, b._a[ve], b._meridiem), ua(b), da(b)
    }

    function xa(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
    }

    function ya(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return j(a).invalidFormat = !0, void (a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], wa(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
        g(a, c || b)
    }

    function za(a) {
        if (!a._d) {
            var b = C(a._i);
            a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
                return a && parseInt(a, 10)
            }), ua(a)
        }
    }

    function Aa(a) {
        var b = new o(da(Ba(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
    }

    function Ba(a) {
        var b = a._i,
            e = a._f;
        return a._locale = a._locale || z(a._l), null === b || void 0 === e && "" === b ? l({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(da(b)) : (c(e) ? ya(a) : e ? wa(a) : d(b) ? a._d = b : Ca(a), k(a) || (a._d = null), a))
    }

    function Ca(b) {
        var f = b._i;
        void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(+f) : "string" == typeof f ? ia(b) : c(f) ? (b._a = e(f.slice(0), function (a) {
            return parseInt(a, 10)
        }), ua(b)) : "object" == typeof f ? za(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
    }

    function Da(a, b, c, d, e) {
        var f = {};
        return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, Aa(f)
    }

    function Ea(a, b, c, d) {
        return Da(a, b, c, d, !1)
    }

    function Fa(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Ea();
        for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
        return d
    }

    function Ga() {
        var a = [].slice.call(arguments, 0);
        return Fa("isBefore", a)
    }

    function Ha() {
        var a = [].slice.call(arguments, 0);
        return Fa("isAfter", a)
    }

    function Ia(a) {
        var b = C(a),
            c = b.year || 0,
            d = b.quarter || 0,
            e = b.month || 0,
            f = b.week || 0,
            g = b.day || 0,
            h = b.hour || 0,
            i = b.minute || 0,
            j = b.second || 0,
            k = b.millisecond || 0;
        this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = z(), this._bubble()
    }

    function Ja(a) {
        return a instanceof Ia
    }

    function Ka(a, b) {
        J(a, 0, 0, function () {
            var a = this.utcOffset(),
                c = "+";
            return 0 > a && (a = -a, c = "-"), c + I(~~(a / 60), 2) + b + I(~~a % 60, 2)
        })
    }

    function La(a, b) {
        var c = (b || "").match(a) || [],
            d = c[c.length - 1] || [],
            e = (d + "").match(Re) || ["-", 0, 0],
            f = +(60 * e[1]) + r(e[2]);
        return "+" === e[0] ? f : -f
    }

    function Ma(b, c) {
        var e, f;
        return c._isUTC ? (e = c.clone(), f = (p(b) || d(b) ? +b : +Ea(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Ea(b).local()
    }

    function Na(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
    }

    function Oa(b, c) {
        var d, e = this._offset || 0;
        return this.isValid() ? null != b ? ("string" == typeof b ? b = La(ne, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Na(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? cb(this, Za(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Na(this) : null != b ? this : NaN
    }

    function Pa(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
    }

    function Qa(a) {
        return this.utcOffset(0, a)
    }

    function Ra(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Na(this), "m")), this
    }

    function Sa() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(La(me, this._i)), this
    }

    function Ta(a) {
        return this.isValid() ? (a = a ? Ea(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
    }

    function Ua() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Va() {
        if (!m(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (n(a, this), a = Ba(a), a._a) {
            var b = a._isUTC ? h(a._a) : Ea(a._a);
            this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Wa() {
        return this.isValid() ? !this._isUTC : !1
    }

    function Xa() {
        return this.isValid() ? this._isUTC : !1
    }

    function Ya() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1
    }

    function Za(a, b) {
        var c, d, e, g = a,
            h = null;
        return Ja(a) ? g = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = Se.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: 0,
            d: r(h[ue]) * c,
            h: r(h[ve]) * c,
            m: r(h[we]) * c,
            s: r(h[xe]) * c,
            ms: r(h[ye]) * c
        }) : (h = Te.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
            y: $a(h[2], c),
            M: $a(h[3], c),
            d: $a(h[4], c),
            h: $a(h[5], c),
            m: $a(h[6], c),
            s: $a(h[7], c),
            w: $a(h[8], c)
        }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = ab(Ea(g.from), Ea(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ia(g), Ja(a) && f(a, "_locale") && (d._locale = a._locale), d
    }

    function $a(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b
    }

    function _a(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
    }

    function ab(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Ma(b, a), a.isBefore(b) ? c = _a(a, b) : (c = _a(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        }
    }

    function bb(a, b) {
        return function (c, d) {
            var e, f;
            return null === d || isNaN(+d) || (ga(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Za(c, d), cb(this, e, a), this
        }
    }

    function cb(b, c, d, e) {
        var f = c._milliseconds,
            g = c._days,
            h = c._months;
        b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && G(b, "Date", F(b, "Date") + g * d), h && Z(b, F(b, "Month") + h * d), e && a.updateOffset(b, g || h))
    }

    function db(a, b) {
        var c = a || Ea(),
            d = Ma(c, this).startOf("day"),
            e = this.diff(d, "days", !0),
            f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse",
            g = b && (D(b[f]) ? b[f]() : b[f]);
        return this.format(g || this.localeData().calendar(f, this, Ea(c)))
    }

    function eb() {
        return new o(this)
    }

    function fb(a, b) {
        var c = p(a) ? a : Ea(a);
        return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b)) : !1
    }

    function gb(a, b) {
        var c = p(a) ? a : Ea(a);
        return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +c > +this : +this.clone().endOf(b) < +c) : !1
    }

    function hb(a, b, c) {
        return this.isAfter(a, c) && this.isBefore(b, c)
    }

    function ib(a, b) {
        var c, d = p(a) ? a : Ea(a);
        return this.isValid() && d.isValid() ? (b = B(b || "millisecond"), "millisecond" === b ? +this === +d : (c = +d, +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1
    }

    function jb(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b)
    }

    function kb(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b)
    }

    function lb(a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Ma(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = B(b), "year" === b || "month" === b || "quarter" === b ? (g = mb(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : q(g)) : NaN) : NaN
    }

    function mb(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            f = a.clone().add(e, "months");
        return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
    }

    function nb() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function ob() {
        var a = this.clone().utc();
        return 0 < a.year() && a.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : M(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function pb(b) {
        var c = M(this, b || a.defaultFormat);
        return this.localeData().postformat(c)
    }

    function qb(a, b) {
        return this.isValid() && (p(a) && a.isValid() || Ea(a).isValid()) ? Za({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function rb(a) {
        return this.from(Ea(), a)
    }

    function sb(a, b) {
        return this.isValid() && (p(a) && a.isValid() || Ea(a).isValid()) ? Za({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
    }

    function tb(a) {
        return this.to(Ea(), a)
    }

    function ub(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = z(a), null != b && (this._locale = b), this)
    }

    function vb() {
        return this._locale
    }

    function wb(a) {
        switch (a = B(a)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function xb(a) {
        return a = B(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
    }

    function yb() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function zb() {
        return Math.floor(+this / 1e3)
    }

    function Ab() {
        return this._offset ? new Date(+this) : this._d
    }

    function Bb() {
        var a = this;
        return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
    }

    function Cb() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        }
    }

    function Db() {
        return this.isValid() ? this.toISOString() : "null"
    }

    function Eb() {
        return k(this)
    }

    function Fb() {
        return g({}, j(this))
    }

    function Gb() {
        return j(this).overflow
    }

    function Hb() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function Ib(a, b) {
        J(0, [a, a.length], 0, b)
    }

    function Jb(a) {
        return Nb.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Kb(a) {
        return Nb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Lb() {
        return ra(this.year(), 1, 4)
    }

    function Mb() {
        var a = this.localeData()._week;
        return ra(this.year(), a.dow, a.doy)
    }

    function Nb(a, b, c, d, e) {
        var f;
        return null == a ? qa(this, d, e).year : (f = ra(a, d, e), b > f && (b = f), Ob.call(this, a, b, c, d, e))
    }

    function Ob(a, b, c, d, e) {
        var f = pa(a, b, c, d, e),
            g = ka(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
    }

    function Pb(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
    }

    function Qb(a) {
        return qa(a, this._week.dow, this._week.doy).week
    }

    function Rb() {
        return this._week.dow
    }

    function Sb() {
        return this._week.doy
    }

    function Tb(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Ub(a) {
        var b = qa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d")
    }

    function Vb(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
    }

    function Wb(a, b) {
        return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
    }

    function Xb(a) {
        return this._weekdaysShort[a.day()]
    }

    function Yb(a) {
        return this._weekdaysMin[a.day()]
    }

    function Zb(a, b, c) {
        var d, e, f;
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
            if (e = Ea([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d
        }
    }

    function $b(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Vb(a, this.localeData()), this.add(a - b, "d")) : b
    }

    function _b(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d")
    }

    function ac(a) {
        return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : NaN
    }

    function bc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d")
    }

    function cc() {
        return this.hours() % 12 || 12
    }

    function dc(a, b) {
        J(a, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), b)
        })
    }

    function ec(a, b) {
        return b._meridiemParse
    }

    function fc(a) {
        return "p" === (a + "").toLowerCase().charAt(0)
    }

    function gc(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
    }

    function hc(a, b) {
        b[ye] = r(1e3 * ("0." + a))
    }

    function ic() {
        return this._isUTC ? "UTC" : ""
    }

    function jc() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function kc(a) {
        return Ea(1e3 * a)
    }

    function lc() {
        return Ea.apply(null, arguments).parseZone()
    }

    function mc(a, b, c) {
        var d = this._calendar[a];
        return D(d) ? d.call(b, c) : d
    }

    function nc(a) {
        var b = this._longDateFormat[a],
            c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
            return a.slice(1)
        }), this._longDateFormat[a])
    }

    function oc() {
        return this._invalidDate
    }

    function pc(a) {
        return this._ordinal.replace("%d", a)
    }

    function qc(a) {
        return a
    }

    function rc(a, b, c, d) {
        var e = this._relativeTime[c];
        return D(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
    }

    function sc(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return D(c) ? c(b) : c.replace(/%s/i, b)
    }

    function tc(a) {
        var b, c;
        for (c in a) b = a[c], D(b) ? this[c] = b : this["_" + c] = b;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function uc(a, b, c, d) {
        var e = z(),
            f = h().set(d, b);
        return e[c](f, a)
    }

    function vc(a, b, c, d, e) {
        if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return uc(a, b, c, e);
        var f, g = [];
        for (f = 0; d > f; f++) g[f] = uc(a, f, c, e);
        return g
    }

    function wc(a, b) {
        return vc(a, b, "months", 12, "month")
    }

    function xc(a, b) {
        return vc(a, b, "monthsShort", 12, "month")
    }

    function yc(a, b) {
        return vc(a, b, "weekdays", 7, "day")
    }

    function zc(a, b) {
        return vc(a, b, "weekdaysShort", 7, "day")
    }

    function Ac(a, b) {
        return vc(a, b, "weekdaysMin", 7, "day")
    }

    function Bc() {
        var a = this._data;
        return this._milliseconds = qf(this._milliseconds), this._days = qf(this._days), this._months = qf(this._months), a.milliseconds = qf(a.milliseconds), a.seconds = qf(a.seconds), a.minutes = qf(a.minutes), a.hours = qf(a.hours), a.months = qf(a.months), a.years = qf(a.years), this
    }

    function Cc(a, b, c, d) {
        var e = Za(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
    }

    function Dc(a, b) {
        return Cc(this, a, b, 1)
    }

    function Ec(a, b) {
        return Cc(this, a, b, -1)
    }

    function Fc(a) {
        return 0 > a ? Math.floor(a) : Math.ceil(a)
    }

    function Gc() {
        var a, b, c, d, e, f = this._milliseconds,
            g = this._days,
            h = this._months,
            i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Fc(Ic(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = q(f / 1e3), i.seconds = a % 60, b = q(a / 60), i.minutes = b % 60, c = q(b / 60), i.hours = c % 24, g += q(c / 24), e = q(Hc(g)), h += e, g -= Fc(Ic(e)), d = q(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
    }

    function Hc(a) {
        return 4800 * a / 146097
    }

    function Ic(a) {
        return 146097 * a / 4800
    }

    function Jc(a) {
        var b, c, d = this._milliseconds;
        if (a = B(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + Hc(b), "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(Ic(this._months)), a) {
            case "week":
                return b / 7 + d / 6048e5;
            case "day":
                return b + d / 864e5;
            case "hour":
                return 24 * b + d / 36e5;
            case "minute":
                return 1440 * b + d / 6e4;
            case "second":
                return 86400 * b + d / 1e3;
            case "millisecond":
                return Math.floor(864e5 * b) + d;
            default:
                throw new Error("Unknown unit " + a)
        }
    }

    function Kc() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12)
    }

    function Lc(a) {
        return function () {
            return this.as(a)
        }
    }

    function Mc(a) {
        return a = B(a), this[a + "s"]()
    }

    function Nc(a) {
        return function () {
            return this._data[a]
        }
    }

    function Oc() {
        return q(this.days() / 7)
    }

    function Pc(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }

    function Qc(a, b, c) {
        var d = Za(a).abs(),
            e = Gf(d.as("s")),
            f = Gf(d.as("m")),
            g = Gf(d.as("h")),
            h = Gf(d.as("d")),
            i = Gf(d.as("M")),
            j = Gf(d.as("y")),
            k = e < Hf.s && ["s", e] || 1 >= f && ["m"] || f < Hf.m && ["mm", f] || 1 >= g && ["h"] || g < Hf.h && ["hh", g] || 1 >= h && ["d"] || h < Hf.d && ["dd", h] || 1 >= i && ["M"] || i < Hf.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
        return k[2] = b, k[3] = +a > 0, k[4] = c, Pc.apply(null, k)
    }

    function Rc(a, b) {
        return void 0 === Hf[a] ? !1 : void 0 === b ? Hf[a] : (Hf[a] = b, !0)
    }

    function Sc(a) {
        var b = this.localeData(),
            c = Qc(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c)
    }

    function Tc() {
        var a, b, c, d = If(this._milliseconds) / 1e3,
            e = If(this._days),
            f = If(this._months);
        a = q(d / 60), b = q(a / 60), d %= 60, a %= 60, c = q(f / 12), f %= 12;
        var g = c,
            h = f,
            i = e,
            j = b,
            k = a,
            l = d,
            m = this.asSeconds();
        return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
    }
    //! moment.js locale configuration
    //! locale : belarusian (be)
    //! author : Dmitry Demidov : https://github.com/demidov91
    //! author: Praleska: http://praleska.pro/
    //! Author : Menelion ElensÃºle : https://github.com/Oire
    function Uc(a, b) {
        var c = a.split("_");
        return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
    }

    function Vc(a, b, c) {
        var d = {
            mm: b ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½",
            hh: b ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½",
            dd: "Ð´Ð·ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð·Ñ‘Ð½",
            MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ñ‹_Ð¼ÐµÑÑÑ†Ð°Ñž",
            yy: "Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ‹_Ð³Ð°Ð´Ð¾Ñž"
        };
        return "m" === c ? b ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ" : "h" === c ? b ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ" : a + " " + Uc(d[c], +a)
    }
    //! moment.js locale configuration
    //! locale : breton (br)
    //! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
    function Wc(a, b, c) {
        var d = {
            mm: "munutenn",
            MM: "miz",
            dd: "devezh"
        };
        return a + " " + Zc(d[c], a)
    }

    function Xc(a) {
        switch (Yc(a)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return a + " bloaz";
            default:
                return a + " vloaz"
        }
    }

    function Yc(a) {
        return a > 9 ? Yc(a % 10) : a
    }

    function Zc(a, b) {
        return 2 === b ? $c(a) : a
    }

    function $c(a) {
        var b = {
            m: "v",
            b: "v",
            d: "z"
        };
        return void 0 === b[a.charAt(0)] ? a : b[a.charAt(0)] + a.substring(1)
    }
    //! moment.js locale configuration
    //! locale : bosnian (bs)
    //! author : Nedim Cholich : https://github.com/frontyard
    //! based on (hr) translation by Bojan MarkoviÄ‡
    function _c(a, b, c) {
        var d = a + " ";
        switch (c) {
            case "m":
                return b ? "jedna minuta" : "jedne minute";
            case "mm":
                return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
            case "h":
                return b ? "jedan sat" : "jednog sata";
            case "hh":
                return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
            case "dd":
                return d += 1 === a ? "dan" : "dana";
            case "MM":
                return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
            case "yy":
                return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
        }
    }

    function ad(a) {
        return a > 1 && 5 > a && 1 !== ~~(a / 10)
    }

    function bd(a, b, c, d) {
        var e = a + " ";
        switch (c) {
            case "s":
                return b || d ? "pÃ¡r sekund" : "pÃ¡r sekundami";
            case "m":
                return b ? "minuta" : d ? "minutu" : "minutou";
            case "mm":
                return b || d ? e + (ad(a) ? "minuty" : "minut") : e + "minutami";
                break;
            case "h":
                return b ? "hodina" : d ? "hodinu" : "hodinou";
            case "hh":
                return b || d ? e + (ad(a) ? "hodiny" : "hodin") : e + "hodinami";
                break;
            case "d":
                return b || d ? "den" : "dnem";
            case "dd":
                return b || d ? e + (ad(a) ? "dny" : "dnÃ­") : e + "dny";
                break;
            case "M":
                return b || d ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
            case "MM":
                return b || d ? e + (ad(a) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : e + "mÄ›sÃ­ci";
                break;
            case "y":
                return b || d ? "rok" : "rokem";
            case "yy":
                return b || d ? e + (ad(a) ? "roky" : "let") : e + "lety"
        }
    }
    //! moment.js locale configuration
    //! locale : austrian german (de-at)
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion ElensÃºle: https://github.com/Oire
    //! author : Martin Groller : https://github.com/MadMG
    //! author : Mikolaj Dadela : https://github.com/mik01aj
    function cd(a, b, c, d) {
        var e = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [a + " Tage", a + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [a + " Monate", a + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [a + " Jahre", a + " Jahren"]
        };
        return b ? e[c][0] : e[c][1]
    }
    //! moment.js locale configuration
    //! locale : german (de)
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion ElensÃºle: https://github.com/Oire
    //! author : Mikolaj Dadela : https://github.com/mik01aj
    function dd(a, b, c, d) {
        var e = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [a + " Tage", a + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [a + " Monate", a + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [a + " Jahre", a + " Jahren"]
        };
        return b ? e[c][0] : e[c][1]
    }
    //! moment.js locale configuration
    //! locale : estonian (et)
    //! author : Henry Kehlmann : https://github.com/madhenry
    //! improvements : Illimar Tambek : https://github.com/ragulka
    function ed(a, b, c, d) {
        var e = {
            s: ["mÃµne sekundi", "mÃµni sekund", "paar sekundit"],
            m: ["Ã¼he minuti", "Ã¼ks minut"],
            mm: [a + " minuti", a + " minutit"],
            h: ["Ã¼he tunni", "tund aega", "Ã¼ks tund"],
            hh: [a + " tunni", a + " tundi"],
            d: ["Ã¼he pÃ¤eva", "Ã¼ks pÃ¤ev"],
            M: ["kuu aja", "kuu aega", "Ã¼ks kuu"],
            MM: [a + " kuu", a + " kuud"],
            y: ["Ã¼he aasta", "aasta", "Ã¼ks aasta"],
            yy: [a + " aasta", a + " aastat"]
        };
        return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1]
    }

    function fd(a, b, c, d) {
        var e = "";
        switch (c) {
            case "s":
                return d ? "muutaman sekunnin" : "muutama sekunti";
            case "m":
                return d ? "minuutin" : "minuutti";
            case "mm":
                e = d ? "minuutin" : "minuuttia";
                break;
            case "h":
                return d ? "tunnin" : "tunti";
            case "hh":
                e = d ? "tunnin" : "tuntia";
                break;
            case "d":
                return d ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
            case "dd":
                e = d ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
                break;
            case "M":
                return d ? "kuukauden" : "kuukausi";
            case "MM":
                e = d ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return d ? "vuoden" : "vuosi";
            case "yy":
                e = d ? "vuoden" : "vuotta"
        }
        return e = gd(a, d) + " " + e
    }

    function gd(a, b) {
        return 10 > a ? b ? fg[a] : eg[a] : a
    }
    //! moment.js locale configuration
    //! locale : hrvatski (hr)
    //! author : Bojan MarkoviÄ‡ : https://github.com/bmarkovic
    function hd(a, b, c) {
        var d = a + " ";
        switch (c) {
            case "m":
                return b ? "jedna minuta" : "jedne minute";
            case "mm":
                return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
            case "h":
                return b ? "jedan sat" : "jednog sata";
            case "hh":
                return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
            case "dd":
                return d += 1 === a ? "dan" : "dana";
            case "MM":
                return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
            case "yy":
                return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
        }
    }

    function id(a, b, c, d) {
        var e = a;
        switch (c) {
            case "s":
                return d || b ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
            case "m":
                return "egy" + (d || b ? " perc" : " perce");
            case "mm":
                return e + (d || b ? " perc" : " perce");
            case "h":
                return "egy" + (d || b ? " Ã³ra" : " Ã³rÃ¡ja");
            case "hh":
                return e + (d || b ? " Ã³ra" : " Ã³rÃ¡ja");
            case "d":
                return "egy" + (d || b ? " nap" : " napja");
            case "dd":
                return e + (d || b ? " nap" : " napja");
            case "M":
                return "egy" + (d || b ? " hÃ³nap" : " hÃ³napja");
            case "MM":
                return e + (d || b ? " hÃ³nap" : " hÃ³napja");
            case "y":
                return "egy" + (d || b ? " Ã©v" : " Ã©ve");
            case "yy":
                return e + (d || b ? " Ã©v" : " Ã©ve")
        }
        return ""
    }

    function jd(a) {
        return (a ? "" : "[mÃºlt] ") + "[" + pg[this.day()] + "] LT[-kor]"
    }
    //! moment.js locale configuration
    //! locale : icelandic (is)
    //! author : Hinrik Ã–rn SigurÃ°sson : https://github.com/hinrik
    function kd(a) {
        return a % 100 === 11 ? !0 : a % 10 === 1 ? !1 : !0
    }

    function ld(a, b, c, d) {
        var e = a + " ";
        switch (c) {
            case "s":
                return b || d ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
            case "m":
                return b ? "mÃ­nÃºta" : "mÃ­nÃºtu";
            case "mm":
                return kd(a) ? e + (b || d ? "mÃ­nÃºtur" : "mÃ­nÃºtum") : b ? e + "mÃ­nÃºta" : e + "mÃ­nÃºtu";
            case "hh":
                return kd(a) ? e + (b || d ? "klukkustundir" : "klukkustundum") : e + "klukkustund";
            case "d":
                return b ? "dagur" : d ? "dag" : "degi";
            case "dd":
                return kd(a) ? b ? e + "dagar" : e + (d ? "daga" : "dÃ¶gum") : b ? e + "dagur" : e + (d ? "dag" : "degi");
            case "M":
                return b ? "mÃ¡nuÃ°ur" : d ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
            case "MM":
                return kd(a) ? b ? e + "mÃ¡nuÃ°ir" : e + (d ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um") : b ? e + "mÃ¡nuÃ°ur" : e + (d ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
            case "y":
                return b || d ? "Ã¡r" : "Ã¡ri";
            case "yy":
                return kd(a) ? e + (b || d ? "Ã¡r" : "Ã¡rum") : e + (b || d ? "Ã¡r" : "Ã¡ri")
        }
    }
    //! moment.js locale configuration
    //! locale : Luxembourgish (lb)
    //! author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz
    function md(a, b, c, d) {
        var e = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"]
        };
        return b ? e[c][0] : e[c][1]
    }

    function nd(a) {
        var b = a.substr(0, a.indexOf(" "));
        return pd(b) ? "a " + a : "an " + a
    }

    function od(a) {
        var b = a.substr(0, a.indexOf(" "));
        return pd(b) ? "viru " + a : "virun " + a
    }

    function pd(a) {
        if (a = parseInt(a, 10), isNaN(a)) return !1;
        if (0 > a) return !0;
        if (10 > a) return a >= 4 && 7 >= a ? !0 : !1;
        if (100 > a) {
            var b = a % 10,
                c = a / 10;
            return pd(0 === b ? c : b)
        }
        if (1e4 > a) {
            for (; a >= 10;) a /= 10;
            return pd(a)
        }
        return a /= 1e3, pd(a)
    }

    function qd(a, b, c, d) {
        return b ? "kelios sekundÄ—s" : d ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes"
    }

    function rd(a, b, c, d) {
        return b ? td(c)[0] : d ? td(c)[1] : td(c)[2]
    }

    function sd(a) {
        return a % 10 === 0 || a > 10 && 20 > a
    }

    function td(a) {
        return rg[a].split("_")
    }

    function ud(a, b, c, d) {
        var e = a + " ";
        return 1 === a ? e + rd(a, b, c[0], d) : b ? e + (sd(a) ? td(c)[1] : td(c)[0]) : d ? e + td(c)[1] : e + (sd(a) ? td(c)[1] : td(c)[2])
    }

    function vd(a, b, c) {
        return c ? b % 10 === 1 && 11 !== b ? a[2] : a[3] : b % 10 === 1 && 11 !== b ? a[0] : a[1]
    }

    function wd(a, b, c) {
        return a + " " + vd(sg[c], a, b)
    }

    function xd(a, b, c) {
        return vd(sg[c], a, b)
    }

    function yd(a, b) {
        return b ? "daÅ¾as sekundes" : "daÅ¾Äm sekundÄ“m"
    }

    function zd(a, b, c, d) {
        var e = "";
        if (b) switch (c) {
            case "s":
                e = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦";
                break;
            case "m":
                e = "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ";
                break;
            case "mm":
                e = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡";
                break;
            case "h":
                e = "à¤à¤• à¤¤à¤¾à¤¸";
                break;
            case "hh":
                e = "%d à¤¤à¤¾à¤¸";
                break;
            case "d":
                e = "à¤à¤• à¤¦à¤¿à¤µà¤¸";
                break;
            case "dd":
                e = "%d à¤¦à¤¿à¤µà¤¸";
                break;
            case "M":
                e = "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾";
                break;
            case "MM":
                e = "%d à¤®à¤¹à¤¿à¤¨à¥‡";
                break;
            case "y":
                e = "à¤à¤• à¤µà¤°à¥à¤·";
                break;
            case "yy":
                e = "%d à¤µà¤°à¥à¤·à¥‡"
        } else switch (c) {
            case "s":
                e = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
                break;
            case "m":
                e = "à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾";
                break;
            case "mm":
                e = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚";
                break;
            case "h":
                e = "à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾";
                break;
            case "hh":
                e = "%d à¤¤à¤¾à¤¸à¤¾à¤‚";
                break;
            case "d":
                e = "à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾";
                break;
            case "dd":
                e = "%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚";
                break;
            case "M":
                e = "à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾";
                break;
            case "MM":
                e = "%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚";
                break;
            case "y":
                e = "à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾";
                break;
            case "yy":
                e = "%d à¤µà¤°à¥à¤·à¤¾à¤‚"
        }
        return e.replace(/%d/i, a)
    }

    function Ad(a) {
        return 5 > a % 10 && a % 10 > 1 && ~~(a / 10) % 10 !== 1
    }

    function Bd(a, b, c) {
        var d = a + " ";
        switch (c) {
            case "m":
                return b ? "minuta" : "minutÄ™";
            case "mm":
                return d + (Ad(a) ? "minuty" : "minut");
            case "h":
                return b ? "godzina" : "godzinÄ™";
            case "hh":
                return d + (Ad(a) ? "godziny" : "godzin");
            case "MM":
                return d + (Ad(a) ? "miesiÄ…ce" : "miesiÄ™cy");
            case "yy":
                return d + (Ad(a) ? "lata" : "lat")
        }
    }
    //! moment.js locale configuration
    //! locale : romanian (ro)
    //! author : Vlad Gurdiga : https://github.com/gurdiga
    //! author : Valentin Agachi : https://github.com/avaly
    function Cd(a, b, c) {
        var d = {
            mm: "minute",
            hh: "ore",
            dd: "zile",
            MM: "luni",
            yy: "ani"
        },
            e = " ";
        return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c]
    }
    //! moment.js locale configuration
    //! locale : russian (ru)
    //! author : Viktorminator : https://github.com/Viktorminator
    //! Author : Menelion ElensÃºle : https://github.com/Oire
    function Dd(a, b) {
        var c = a.split("_");
        return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
    }

    function Ed(a, b, c) {
        var d = {
            mm: b ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",
            hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",
            dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",
            MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",
            yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"
        };
        return "m" === c ? b ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : a + " " + Dd(d[c], +a)
    }

    function Fd(a) {
        return a > 1 && 5 > a
    }

    function Gd(a, b, c, d) {
        var e = a + " ";
        switch (c) {
            case "s":
                return b || d ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
            case "m":
                return b ? "minÃºta" : d ? "minÃºtu" : "minÃºtou";
            case "mm":
                return b || d ? e + (Fd(a) ? "minÃºty" : "minÃºt") : e + "minÃºtami";
                break;
            case "h":
                return b ? "hodina" : d ? "hodinu" : "hodinou";
            case "hh":
                return b || d ? e + (Fd(a) ? "hodiny" : "hodÃ­n") : e + "hodinami";
                break;
            case "d":
                return b || d ? "deÅˆ" : "dÅˆom";
            case "dd":
                return b || d ? e + (Fd(a) ? "dni" : "dnÃ­") : e + "dÅˆami";
                break;
            case "M":
                return b || d ? "mesiac" : "mesiacom";
            case "MM":
                return b || d ? e + (Fd(a) ? "mesiace" : "mesiacov") : e + "mesiacmi";
                break;
            case "y":
                return b || d ? "rok" : "rokom";
            case "yy":
                return b || d ? e + (Fd(a) ? "roky" : "rokov") : e + "rokmi"
        }
    }
    //! moment.js locale configuration
    //! locale : slovenian (sl)
    //! author : Robert SedovÅ¡ek : https://github.com/sedovsek
    function Hd(a, b, c, d) {
        var e = a + " ";
        switch (c) {
            case "s":
                return b || d ? "nekaj sekund" : "nekaj sekundami";
            case "m":
                return b ? "ena minuta" : "eno minuto";
            case "mm":
                return e += 1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || d ? "minuti" : "minutama" : 5 > a ? b || d ? "minute" : "minutami" : b || d ? "minut" : "minutami";
            case "h":
                return b ? "ena ura" : "eno uro";
            case "hh":
                return e += 1 === a ? b ? "ura" : "uro" : 2 === a ? b || d ? "uri" : "urama" : 5 > a ? b || d ? "ure" : "urami" : b || d ? "ur" : "urami";
            case "d":
                return b || d ? "en dan" : "enim dnem";
            case "dd":
                return e += 1 === a ? b || d ? "dan" : "dnem" : 2 === a ? b || d ? "dni" : "dnevoma" : b || d ? "dni" : "dnevi";
            case "M":
                return b || d ? "en mesec" : "enim mesecem";
            case "MM":
                return e += 1 === a ? b || d ? "mesec" : "mesecem" : 2 === a ? b || d ? "meseca" : "mesecema" : 5 > a ? b || d ? "mesece" : "meseci" : b || d ? "mesecev" : "meseci";
            case "y":
                return b || d ? "eno leto" : "enim letom";
            case "yy":
                return e += 1 === a ? b || d ? "leto" : "letom" : 2 === a ? b || d ? "leti" : "letoma" : 5 > a ? b || d ? "leta" : "leti" : b || d ? "let" : "leti"
        }
    }

    function Id(a) {
        var b = a;
        return b = -1 !== a.indexOf("jaj") ? b.slice(0, -3) + "leS" : -1 !== a.indexOf("jar") ? b.slice(0, -3) + "waQ" : -1 !== a.indexOf("DIS") ? b.slice(0, -3) + "nem" : b + " pIq"
    }

    function Jd(a) {
        var b = a;
        return b = -1 !== a.indexOf("jaj") ? b.slice(0, -3) + "Huâ€™" : -1 !== a.indexOf("jar") ? b.slice(0, -3) + "wen" : -1 !== a.indexOf("DIS") ? b.slice(0, -3) + "ben" : b + " ret"
    }

    function Kd(a, b, c, d) {
        var e = Ld(a);
        switch (c) {
            case "mm":
                return e + " tup";
            case "hh":
                return e + " rep";
            case "dd":
                return e + " jaj";
            case "MM":
                return e + " jar";
            case "yy":
                return e + " DIS"
        }
    }

    function Ld(a) {
        var b = Math.floor(a % 1e3 / 100),
            c = Math.floor(a % 100 / 10),
            d = a % 10,
            e = "";
        return b > 0 && (e += Lg[b] + "vatlh"), c > 0 && (e += ("" !== e ? " " : "") + Lg[c] + "maH"), d > 0 && (e += ("" !== e ? " " : "") + Lg[d]), "" === e ? "pagh" : e
    }

    function Md(a, b, c, d) {
        var e = {
            s: ["viensas secunds", "'iensas secunds"],
            m: ["'n mÃ­ut", "'iens mÃ­ut"],
            mm: [a + " mÃ­uts", "" + a + " mÃ­uts"],
            h: ["'n Ã¾ora", "'iensa Ã¾ora"],
            hh: [a + " Ã¾oras", "" + a + " Ã¾oras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [a + " ziuas", "" + a + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [a + " mesen", "" + a + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [a + " ars", "" + a + " ars"]
        };
        return d ? e[c][0] : b ? e[c][0] : e[c][1]
    }
    //! moment.js locale configuration
    //! locale : ukrainian (uk)
    //! author : zemlanin : https://github.com/zemlanin
    //! Author : Menelion ElensÃºle : https://github.com/Oire
    function Nd(a, b) {
        var c = a.split("_");
        return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
    }

    function Od(a, b, c) {
        var d = {
            mm: b ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",
            hh: b ? "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",
            dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",
            MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",
            yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"
        };
        return "m" === c ? b ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === c ? b ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : a + " " + Nd(d[c], +a)
    }

    function Pd(a, b) {
        var c = {
            nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
            accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
            genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")
        },
            d = /(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";
        return c[d][a.day()]
    }

    function Qd(a) {
        return function () {
            return a + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT"
        }
    }
    var Rd, Sd, Td = a.momentProperties = [],
        Ud = !1,
        Vd = {},
        Wd = {},
        Xd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        Yd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        Zd = {},
        $d = {},
        _d = /\d/,
        ae = /\d\d/,
        be = /\d{3}/,
        ce = /\d{4}/,
        de = /[+-]?\d{6}/,
        ee = /\d\d?/,
        fe = /\d\d\d\d?/,
        ge = /\d\d\d\d\d\d?/,
        he = /\d{1,3}/,
        ie = /\d{1,4}/,
        je = /[+-]?\d{1,6}/,
        ke = /\d+/,
        le = /[+-]?\d+/,
        me = /Z|[+-]\d\d:?\d\d/gi,
        ne = /Z|[+-]\d\d(?::?\d\d)?/gi,
        oe = /[+-]?\d+(\.\d{1,3})?/,
        pe = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        qe = {},
        re = {},
        se = 0,
        te = 1,
        ue = 2,
        ve = 3,
        we = 4,
        xe = 5,
        ye = 6,
        ze = 7,
        Ae = 8;
    J("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), J("MMM", 0, 0, function (a) {
        return this.localeData().monthsShort(this, a)
    }), J("MMMM", 0, 0, function (a) {
        return this.localeData().months(this, a)
    }), A("month", "M"), O("M", ee), O("MM", ee, ae), O("MMM", function (a, b) {
        return b.monthsShortRegex(a)
    }), O("MMMM", function (a, b) {
        return b.monthsRegex(a)
    }), S(["M", "MM"], function (a, b) {
        b[te] = r(a) - 1
    }), S(["MMM", "MMMM"], function (a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[te] = e : j(c).invalidMonth = a
    });
    var Be = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
        Ce = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        De = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        Ee = pe,
        Fe = pe,
        Ge = {};
    a.suppressDeprecationWarnings = !1;
    var He = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Ie = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        Je = /Z|[+-]\d\d(?::?\d\d)?/,
        Ke = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        Le = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        Me = /^\/?Date\((\-?\d+)/i;
    a.createFromInputFallback = fa("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
    }), J("Y", 0, 0, function () {
        var a = this.year();
        return 9999 >= a ? "" + a : "+" + a
    }), J(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), J(0, ["YYYY", 4], 0, "year"), J(0, ["YYYYY", 5], 0, "year"), J(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), O("Y", le), O("YY", ee, ae), O("YYYY", ie, ce), O("YYYYY", je, de), O("YYYYYY", je, de), S(["YYYYY", "YYYYYY"], se), S("YYYY", function (b, c) {
        c[se] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b)
    }), S("YY", function (b, c) {
        c[se] = a.parseTwoDigitYear(b)
    }), S("Y", function (a, b) {
        b[se] = parseInt(a, 10)
    }), a.parseTwoDigitYear = function (a) {
        return r(a) + (r(a) > 68 ? 1900 : 2e3)
    };
    var Ne = E("FullYear", !1);
    a.ISO_8601 = function () { };
    var Oe = fa("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
        var a = Ea.apply(null, arguments);
        return this.isValid() && a.isValid() ? this > a ? this : a : l()
    }),
        Pe = fa("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
            var a = Ea.apply(null, arguments);
            return this.isValid() && a.isValid() ? a > this ? this : a : l()
        }),
        Qe = function () {
            return Date.now ? Date.now() : +new Date
        };
    Ka("Z", ":"), Ka("ZZ", ""), O("Z", ne), O("ZZ", ne), S(["Z", "ZZ"], function (a, b, c) {
        c._useUTC = !0, c._tzm = La(ne, a)
    });
    var Re = /([\+\-]|\d\d)/gi;
    a.updateOffset = function () { };
    var Se = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
        Te = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Za.fn = Ia.prototype;
    var Ue = bb(1, "add"),
        Ve = bb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var We = fa("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
        return void 0 === a ? this.localeData() : this.locale(a)
    });
    J(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), J(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), Ib("gggg", "weekYear"), Ib("ggggg", "weekYear"), Ib("GGGG", "isoWeekYear"), Ib("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), O("G", le), O("g", le), O("GG", ee, ae), O("gg", ee, ae), O("GGGG", ie, ce), O("gggg", ie, ce), O("GGGGG", je, de), O("ggggg", je, de), T(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
        b[d.substr(0, 2)] = r(a)
    }), T(["gg", "GG"], function (b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b)
    }), J("Q", 0, "Qo", "quarter"), A("quarter", "Q"), O("Q", _d), S("Q", function (a, b) {
        b[te] = 3 * (r(a) - 1)
    }), J("w", ["ww", 2], "wo", "week"), J("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), O("w", ee), O("ww", ee, ae), O("W", ee), O("WW", ee, ae), T(["w", "ww", "W", "WW"], function (a, b, c, d) {
        b[d.substr(0, 1)] = r(a)
    });
    var Xe = {
        dow: 0,
        doy: 6
    };
    J("D", ["DD", 2], "Do", "date"), A("date", "D"), O("D", ee), O("DD", ee, ae), O("Do", function (a, b) {
        return a ? b._ordinalParse : b._ordinalParseLenient
    }), S(["D", "DD"], ue), S("Do", function (a, b) {
        b[ue] = r(a.match(ee)[0], 10)
    });
    var Ye = E("Date", !0);
    J("d", 0, "do", "day"), J("dd", 0, 0, function (a) {
        return this.localeData().weekdaysMin(this, a)
    }), J("ddd", 0, 0, function (a) {
        return this.localeData().weekdaysShort(this, a)
    }), J("dddd", 0, 0, function (a) {
        return this.localeData().weekdays(this, a)
    }), J("e", 0, 0, "weekday"), J("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), O("d", ee), O("e", ee), O("E", ee), O("dd", pe), O("ddd", pe), O("dddd", pe), T(["dd", "ddd", "dddd"], function (a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? b.d = e : j(c).invalidWeekday = a
    }), T(["d", "e", "E"], function (a, b, c, d) {
        b[d] = r(a)
    });
    var Ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        $e = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        _e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), O("DDD", he), O("DDDD", be), S(["DDD", "DDDD"], function (a, b, c) {
        c._dayOfYear = r(a)
    }), J("H", ["HH", 2], 0, "hour"), J("h", ["hh", 2], 0, cc), J("hmm", 0, 0, function () {
        return "" + cc.apply(this) + I(this.minutes(), 2)
    }), J("hmmss", 0, 0, function () {
        return "" + cc.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
    }), J("Hmm", 0, 0, function () {
        return "" + this.hours() + I(this.minutes(), 2)
    }), J("Hmmss", 0, 0, function () {
        return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2)
    }), dc("a", !0), dc("A", !1), A("hour", "h"), O("a", ec), O("A", ec), O("H", ee), O("h", ee), O("HH", ee, ae), O("hh", ee, ae), O("hmm", fe), O("hmmss", ge), O("Hmm", fe), O("Hmmss", ge), S(["H", "HH"], ve), S(["a", "A"], function (a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a
    }), S(["h", "hh"], function (a, b, c) {
        b[ve] = r(a), j(c).bigHour = !0
    }), S("hmm", function (a, b, c) {
        var d = a.length - 2;
        b[ve] = r(a.substr(0, d)), b[we] = r(a.substr(d)), j(c).bigHour = !0
    }), S("hmmss", function (a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[ve] = r(a.substr(0, d)), b[we] = r(a.substr(d, 2)), b[xe] = r(a.substr(e)), j(c).bigHour = !0
    }), S("Hmm", function (a, b, c) {
        var d = a.length - 2;
        b[ve] = r(a.substr(0, d)), b[we] = r(a.substr(d))
    }), S("Hmmss", function (a, b, c) {
        var d = a.length - 4,
            e = a.length - 2;
        b[ve] = r(a.substr(0, d)), b[we] = r(a.substr(d, 2)), b[xe] = r(a.substr(e))
    });
    var af = /[ap]\.?m?\.?/i,
        bf = E("Hours", !0);
    J("m", ["mm", 2], 0, "minute"), A("minute", "m"), O("m", ee), O("mm", ee, ae), S(["m", "mm"], we);
    var cf = E("Minutes", !1);
    J("s", ["ss", 2], 0, "second"), A("second", "s"), O("s", ee), O("ss", ee, ae), S(["s", "ss"], xe);
    var df = E("Seconds", !1);
    J("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), J(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), J(0, ["SSS", 3], 0, "millisecond"), J(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), J(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), J(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), J(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), J(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), J(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), A("millisecond", "ms"), O("S", he, _d), O("SS", he, ae), O("SSS", he, be);
    var ef;
    for (ef = "SSSS"; ef.length <= 9; ef += "S") O(ef, ke);
    for (ef = "S"; ef.length <= 9; ef += "S") S(ef, hc);
    var ff = E("Milliseconds", !1);
    J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
    var gf = o.prototype;
    gf.add = Ue, gf.calendar = db, gf.clone = eb, gf.diff = lb, gf.endOf = xb, gf.format = pb, gf.from = qb, gf.fromNow = rb, gf.to = sb, gf.toNow = tb, gf.get = H, gf.invalidAt = Gb, gf.isAfter = fb, gf.isBefore = gb, gf.isBetween = hb, gf.isSame = ib, gf.isSameOrAfter = jb, gf.isSameOrBefore = kb, gf.isValid = Eb, gf.lang = We, gf.locale = ub, gf.localeData = vb, gf.max = Pe, gf.min = Oe, gf.parsingFlags = Fb, gf.set = H, gf.startOf = wb, gf.subtract = Ve, gf.toArray = Bb, gf.toObject = Cb, gf.toDate = Ab, gf.toISOString = ob, gf.toJSON = Db, gf.toString = nb, gf.unix = zb, gf.valueOf = yb, gf.creationData = Hb, gf.year = Ne, gf.isLeapYear = na, gf.weekYear = Jb, gf.isoWeekYear = Kb, gf.quarter = gf.quarters = Pb, gf.month = $, gf.daysInMonth = _, gf.week = gf.weeks = Tb, gf.isoWeek = gf.isoWeeks = Ub, gf.weeksInYear = Mb, gf.isoWeeksInYear = Lb, gf.date = Ye, gf.day = gf.days = $b, gf.weekday = _b, gf.isoWeekday = ac, gf.dayOfYear = bc, gf.hour = gf.hours = bf, gf.minute = gf.minutes = cf, gf.second = gf.seconds = df, gf.millisecond = gf.milliseconds = ff, gf.utcOffset = Oa, gf.utc = Qa, gf.local = Ra, gf.parseZone = Sa, gf.hasAlignedHourOffset = Ta, gf.isDST = Ua, gf.isDSTShifted = Va, gf.isLocal = Wa, gf.isUtcOffset = Xa, gf.isUtc = Ya, gf.isUTC = Ya, gf.zoneAbbr = ic, gf.zoneName = jc, gf.dates = fa("dates accessor is deprecated. Use date instead.", Ye), gf.months = fa("months accessor is deprecated. Use month instead", $), gf.years = fa("years accessor is deprecated. Use year instead", Ne), gf.zone = fa("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Pa);
    var hf = gf,
        jf = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        kf = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        lf = "Invalid date",
        mf = "%d",
        nf = /\d{1,2}/,
        of = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        pf = t.prototype;
    pf._calendar = jf, pf.calendar = mc, pf._longDateFormat = kf, pf.longDateFormat = nc, pf._invalidDate = lf, pf.invalidDate = oc, pf._ordinal = mf, pf.ordinal = pc, pf._ordinalParse = nf, pf.preparse = qc, pf.postformat = qc, pf._relativeTime = of, pf.relativeTime = rc, pf.pastFuture = sc, pf.set = tc, pf.months = W, pf._months = Ce, pf.monthsShort = X, pf._monthsShort = De, pf.monthsParse = Y, pf._monthsRegex = Fe, pf.monthsRegex = ba, pf._monthsShortRegex = Ee, pf.monthsShortRegex = aa, pf.week = Qb, pf._week = Xe, pf.firstDayOfYear = Sb, pf.firstDayOfWeek = Rb, pf.weekdays = Wb, pf._weekdays = Ze, pf.weekdaysMin = Yb, pf._weekdaysMin = _e, pf.weekdaysShort = Xb, pf._weekdaysShort = $e, pf.weekdaysParse = Zb, pf.isPM = fc, pf._meridiemParse = af, pf.meridiem = gc, x("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (a) {
            var b = a % 10,
                c = 1 === r(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
        }
    }), a.lang = fa("moment.lang is deprecated. Use moment.locale instead.", x), a.langData = fa("moment.langData is deprecated. Use moment.localeData instead.", z);
    var qf = Math.abs,
        rf = Lc("ms"),
        sf = Lc("s"),
        tf = Lc("m"),
        uf = Lc("h"),
        vf = Lc("d"),
        wf = Lc("w"),
        xf = Lc("M"),
        yf = Lc("y"),
        zf = Nc("milliseconds"),
        Af = Nc("seconds"),
        Bf = Nc("minutes"),
        Cf = Nc("hours"),
        Df = Nc("days"),
        Ef = Nc("months"),
        Ff = Nc("years"),
        Gf = Math.round,
        Hf = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        If = Math.abs,
        Jf = Ia.prototype;
    Jf.abs = Bc, Jf.add = Dc, Jf.subtract = Ec, Jf.as = Jc, Jf.asMilliseconds = rf, Jf.asSeconds = sf, Jf.asMinutes = tf, Jf.asHours = uf, Jf.asDays = vf, Jf.asWeeks = wf, Jf.asMonths = xf, Jf.asYears = yf, Jf.valueOf = Kc, Jf._bubble = Gc, Jf.get = Mc, Jf.milliseconds = zf, Jf.seconds = Af, Jf.minutes = Bf, Jf.hours = Cf, Jf.days = Df, Jf.weeks = Oc, Jf.months = Ef, Jf.years = Ff, Jf.humanize = Sc, Jf.toISOString = Tc, Jf.toString = Tc, Jf.toJSON = Tc, Jf.locale = ub, Jf.localeData = vb, Jf.toIsoString = fa("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Tc), Jf.lang = We, J("X", 0, 0, "unix"), J("x", 0, 0, "valueOf"), O("x", le), O("X", oe), S("X", function (a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10))
    }), S("x", function (a, b, c) {
        c._d = new Date(r(a))
    }),
        //! moment.js
        //! version : 2.11.2
        //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
        //! license : MIT
        //! momentjs.com
        a.version = "2.11.2", b(Ea), a.fn = hf, a.min = Ga, a.max = Ha, a.now = Qe, a.utc = h, a.unix = kc, a.months = wc, a.isDate = d, a.locale = x, a.invalid = l, a.duration = Za, a.isMoment = p, a.weekdays = yc, a.parseZone = lc, a.localeData = z, a.isDuration = Ja, a.monthsShort = xc, a.weekdaysMin = Ac, a.defineLocale = y, a.weekdaysShort = zc, a.normalizeUnits = B, a.relativeTimeThreshold = Rc, a.prototype = hf;
    var Kf = a,
        Lf = (Kf.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (a) {
                return /^nm$/i.test(a)
            },
            meridiem: function (a, b, c) {
                return 12 > a ? c ? "vm" : "VM" : c ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[MÃ´re om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (a) {
                return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("ar-ma", {
            months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), {
            1: "Ù¡",
            2: "Ù¢",
            3: "Ù£",
            4: "Ù¤",
            5: "Ù¥",
            6: "Ù¦",
            7: "Ù§",
            8: "Ù¨",
            9: "Ù©",
            0: "Ù "
        }),
        Mf = {
            "Ù¡": "1",
            "Ù¢": "2",
            "Ù£": "3",
            "Ù¤": "4",
            "Ù¥": "5",
            "Ù¦": "6",
            "Ù§": "7",
            "Ù¨": "8",
            "Ù©": "9",
            "Ù ": "0"
        },
        Nf = (Kf.defineLocale("ar-sa", {
            months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function (a) {
                return "Ù…" === a
            },
            meridiem: function (a, b, c) {
                return 12 > a ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            preparse: function (a) {
                return a.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function (a) {
                    return Mf[a]
                }).replace(/ØŒ/g, ",")
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return Lf[a]
                }).replace(/,/g, "ØŒ")
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), Kf.defineLocale("ar-tn", {
            months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÙÙŠ %s",
                past: "Ù…Ù†Ø° %s",
                s: "Ø«ÙˆØ§Ù†",
                m: "Ø¯Ù‚ÙŠÙ‚Ø©",
                mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
                h: "Ø³Ø§Ø¹Ø©",
                hh: "%d Ø³Ø§Ø¹Ø§Øª",
                d: "ÙŠÙˆÙ…",
                dd: "%d Ø£ÙŠØ§Ù…",
                M: "Ø´Ù‡Ø±",
                MM: "%d Ø£Ø´Ù‡Ø±",
                y: "Ø³Ù†Ø©",
                yy: "%d Ø³Ù†ÙˆØ§Øª"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            1: "Ù¡",
            2: "Ù¢",
            3: "Ù£",
            4: "Ù¤",
            5: "Ù¥",
            6: "Ù¦",
            7: "Ù§",
            8: "Ù¨",
            9: "Ù©",
            0: "Ù "
        }),
        Of = {
            "Ù¡": "1",
            "Ù¢": "2",
            "Ù£": "3",
            "Ù¤": "4",
            "Ù¥": "5",
            "Ù¦": "6",
            "Ù§": "7",
            "Ù¨": "8",
            "Ù©": "9",
            "Ù ": "0"
        },
        Pf = function (a) {
            return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && 10 >= a % 100 ? 3 : a % 100 >= 11 ? 4 : 5
        },
        Qf = {
            s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
            m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
            h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
            d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
            M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
            y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
        },
        Rf = function (a) {
            return function (b, c, d, e) {
                var f = Pf(b),
                    g = Qf[a][Pf(b)];
                return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b)
            }
        },
        Sf = ["ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ ÙŠÙ†Ø§ÙŠØ±", "Ø´Ø¨Ø§Ø· ÙØ¨Ø±Ø§ÙŠØ±", "Ø¢Ø°Ø§Ø± Ù…Ø§Ø±Ø³", "Ù†ÙŠØ³Ø§Ù† Ø£Ø¨Ø±ÙŠÙ„", "Ø£ÙŠØ§Ø± Ù…Ø§ÙŠÙˆ", "Ø­Ø²ÙŠØ±Ø§Ù† ÙŠÙˆÙ†ÙŠÙˆ", "ØªÙ…ÙˆØ² ÙŠÙˆÙ„ÙŠÙˆ", "Ø¢Ø¨ Ø£ØºØ³Ø·Ø³", "Ø£ÙŠÙ„ÙˆÙ„ Ø³Ø¨ØªÙ…Ø¨Ø±", "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„ Ø£ÙƒØªÙˆØ¨Ø±", "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ Ù†ÙˆÙÙ…Ø¨Ø±", "ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„ Ø¯ÙŠØ³Ù…Ø¨Ø±"],
        Tf = (Kf.defineLocale("ar", {
            months: Sf,
            monthsShort: Sf,
            weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
            weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
            weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/â€M/â€YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Øµ|Ù…/,
            isPM: function (a) {
                return "Ù…" === a
            },
            meridiem: function (a, b, c) {
                return 12 > a ? "Øµ" : "Ù…"
            },
            calendar: {
                sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¨Ø¹Ø¯ %s",
                past: "Ù…Ù†Ø° %s",
                s: Rf("s"),
                m: Rf("m"),
                mm: Rf("m"),
                h: Rf("h"),
                hh: Rf("h"),
                d: Rf("d"),
                dd: Rf("d"),
                M: Rf("M"),
                MM: Rf("M"),
                y: Rf("y"),
                yy: Rf("y")
            },
            preparse: function (a) {
                return a.replace(/\u200f/g, "").replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function (a) {
                    return Of[a]
                }).replace(/ØŒ/g, ",")
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return Nf[a]
                }).replace(/,/g, "ØŒ")
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-Ã¼ncÃ¼",
            4: "-Ã¼ncÃ¼",
            100: "-Ã¼ncÃ¼",
            6: "-ncÄ±",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-Ä±ncÄ±",
            90: "-Ä±ncÄ±"
        }),
        Uf = (Kf.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™".split("_"),
            weekdaysShort: "Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n".split("_"),
            weekdaysMin: "Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugÃ¼n saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT",
                lastDay: "[dÃ¼nÉ™n] LT",
                lastWeek: "[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s É™vvÉ™l",
                s: "birneÃ§É™ saniyyÉ™",
                m: "bir dÉ™qiqÉ™",
                mm: "%d dÉ™qiqÉ™",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gÃ¼n",
                dd: "%d gÃ¼n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,
            isPM: function (a) {
                return /^(gÃ¼ndÃ¼z|axÅŸam)$/.test(a)
            },
            meridiem: function (a, b, c) {
                return 4 > a ? "gecÉ™" : 12 > a ? "sÉ™hÉ™r" : 17 > a ? "gÃ¼ndÃ¼z" : "axÅŸam"
            },
            ordinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
            ordinal: function (a) {
                if (0 === a) return a + "-Ä±ncÄ±";
                var b = a % 10,
                    c = a % 100 - b,
                    d = a >= 100 ? 100 : null;
                return a + (Tf[b] || Tf[c] || Tf[d])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("be", {
            months: {
                format: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½Ñ_Ð»ÑŽÑ‚Ð°Ð³Ð°_ÑÐ°ÐºÐ°Ð²Ñ–ÐºÐ°_ÐºÑ€Ð°ÑÐ°Ð²Ñ–ÐºÐ°_Ñ‚Ñ€Ð°ÑžÐ½Ñ_Ñ‡ÑÑ€Ð²ÐµÐ½Ñ_Ð»Ñ–Ð¿ÐµÐ½Ñ_Ð¶Ð½Ñ–ÑžÐ½Ñ_Ð²ÐµÑ€Ð°ÑÐ½Ñ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–ÐºÐ°_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ".split("_"),
                standalone: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ñ‹_ÑÐ°ÐºÐ°Ð²Ñ–Ðº_ÐºÑ€Ð°ÑÐ°Ð²Ñ–Ðº_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÑÑ€Ð²ÐµÐ½ÑŒ_Ð»Ñ–Ð¿ÐµÐ½ÑŒ_Ð¶Ð½Ñ–Ð²ÐµÐ½ÑŒ_Ð²ÐµÑ€Ð°ÑÐµÐ½ÑŒ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–Ðº_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½ÑŒ".split("_")
            },
            monthsShort: "ÑÑ‚ÑƒÐ´_Ð»ÑŽÑ‚_ÑÐ°Ðº_ÐºÑ€Ð°Ñ_Ñ‚Ñ€Ð°Ð²_Ñ‡ÑÑ€Ð²_Ð»Ñ–Ð¿_Ð¶Ð½Ñ–Ð²_Ð²ÐµÑ€_ÐºÐ°ÑÑ‚_Ð»Ñ–ÑÑ‚_ÑÐ½ÐµÐ¶".split("_"),
            weekdays: {
                format: "Ð½ÑÐ´Ð·ÐµÐ»ÑŽ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ñƒ_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ñƒ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
                standalone: "Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ð°_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ð°_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
                isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½ÑƒÑŽ)? ?\] ?dddd/
            },
            weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ð³.",
                LLL: "D MMMM YYYY Ð³., HH:mm",
                LLLL: "dddd, D MMMM YYYY Ð³., HH:mm"
            },
            calendar: {
                sameDay: "[Ð¡Ñ‘Ð½Ð½Ñ Ñž] LT",
                nextDay: "[Ð—Ð°ÑžÑ‚Ñ€Ð° Ñž] LT",
                lastDay: "[Ð£Ñ‡Ð¾Ñ€Ð° Ñž] LT",
                nextWeek: function () {
                    return "[Ð£] dddd [Ñž] LT"
                },
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ] dddd [Ñž] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»Ñ‹] dddd [Ñž] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð¿Ñ€Ð°Ð· %s",
                past: "%s Ñ‚Ð°Ð¼Ñƒ",
                s: "Ð½ÐµÐºÐ°Ð»ÑŒÐºÑ– ÑÐµÐºÑƒÐ½Ð´",
                m: Vc,
                mm: Vc,
                h: Vc,
                hh: Vc,
                d: "Ð´Ð·ÐµÐ½ÑŒ",
                dd: Vc,
                M: "Ð¼ÐµÑÑÑ†",
                MM: Vc,
                y: "Ð³Ð¾Ð´",
                yy: Vc
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ñ‹|Ñ€Ð°Ð½Ñ–Ñ†Ñ‹|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°/,
            isPM: function (a) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°)$/.test(a)
            },
            meridiem: function (a, b, c) {
                return 4 > a ? "Ð½Ð¾Ñ‡Ñ‹" : 12 > a ? "Ñ€Ð°Ð½Ñ–Ñ†Ñ‹" : 17 > a ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð°Ñ€Ð°"
            },
            ordinalParse: /\d{1,2}-(Ñ–|Ñ‹|Ð³Ð°)/,
            ordinal: function (a, b) {
                switch (b) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return a % 10 !== 2 && a % 10 !== 3 || a % 100 === 12 || a % 100 === 13 ? a + "-Ñ‹" : a + "-Ñ–";
                    case "D":
                        return a + "-Ð³Ð°";
                    default:
                        return a
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("bg", {
            months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
            monthsShort: "ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Ð”Ð½ÐµÑ Ð²] LT",
                nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT",
                nextWeek: "dddd [Ð²] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "ÑÐ»ÐµÐ´ %s",
                past: "Ð¿Ñ€ÐµÐ´Ð¸ %s",
                s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
                h: "Ñ‡Ð°Ñ",
                hh: "%d Ñ‡Ð°ÑÐ°",
                d: "Ð´ÐµÐ½",
                dd: "%d Ð´Ð½Ð¸",
                M: "Ð¼ÐµÑÐµÑ†",
                MM: "%d Ð¼ÐµÑÐµÑ†Ð°",
                y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
                yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
            },
            ordinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = a % 100;
                return 0 === a ? a + "-ÐµÐ²" : 0 === c ? a + "-ÐµÐ½" : c > 10 && 20 > c ? a + "-Ñ‚Ð¸" : 1 === b ? a + "-Ð²Ð¸" : 2 === b ? a + "-Ñ€Ð¸" : 7 === b || 8 === b ? a + "-Ð¼Ð¸" : a + "-Ñ‚Ð¸"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), {
            1: "à§§",
            2: "à§¨",
            3: "à§©",
            4: "à§ª",
            5: "à§«",
            6: "à§¬",
            7: "à§­",
            8: "à§®",
            9: "à§¯",
            0: "à§¦"
        }),
        Vf = {
            "à§§": "1",
            "à§¨": "2",
            "à§©": "3",
            "à§ª": "4",
            "à§«": "5",
            "à§¬": "6",
            "à§­": "7",
            "à§®": "8",
            "à§¯": "9",
            "à§¦": "0"
        },
        Wf = (Kf.defineLocale("bn", {
            months: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à§€_à¦«à§‡à¦¬à§à§Ÿà¦¾à¦°à§€_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦…à¦—à¦¾à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),
            monthsShort: "à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà¦°_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²_à¦…à¦—_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­_à¦¡à¦¿à¦¸à§‡à¦®à§".split("_"),
            weekdays: "à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à§à¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),
            weekdaysShort: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à§à¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
            weekdaysMin: "à¦°à¦¬_à¦¸à¦®_à¦®à¦™à§à¦—_à¦¬à§_à¦¬à§à¦°à¦¿à¦¹_à¦¶à§_à¦¶à¦¨à¦¿".split("_"),
            longDateFormat: {
                LT: "A h:mm à¦¸à¦®à§Ÿ",
                LTS: "A h:mm:ss à¦¸à¦®à§Ÿ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ"
            },
            calendar: {
                sameDay: "[à¦†à¦œ] LT",
                nextDay: "[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¦—à¦¤à¦•à¦¾à¦²] LT",
                lastWeek: "[à¦—à¦¤] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¦ªà¦°à§‡",
                past: "%s à¦†à¦—à§‡",
                s: "à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
                m: "à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                mm: "%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",
                h: "à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",
                hh: "%d à¦˜à¦¨à§à¦Ÿà¦¾",
                d: "à¦à¦• à¦¦à¦¿à¦¨",
                dd: "%d à¦¦à¦¿à¦¨",
                M: "à¦à¦• à¦®à¦¾à¦¸",
                MM: "%d à¦®à¦¾à¦¸",
                y: "à¦à¦• à¦¬à¦›à¦°",
                yy: "%d à¦¬à¦›à¦°"
            },
            preparse: function (a) {
                return a.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, function (a) {
                    return Vf[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return Uf[a]
                })
            },
            meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤/,
            isPM: function (a) {
                return /^(à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤)$/.test(a)
            },
            meridiem: function (a, b, c) {
                return 4 > a ? "à¦°à¦¾à¦¤" : 10 > a ? "à¦¸à¦•à¦¾à¦²" : 17 > a ? "à¦¦à§à¦ªà§à¦°" : 20 > a ? "à¦¬à¦¿à¦•à¦¾à¦²" : "à¦°à¦¾à¦¤"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), {
            1: "à¼¡",
            2: "à¼¢",
            3: "à¼£",
            4: "à¼¤",
            5: "à¼¥",
            6: "à¼¦",
            7: "à¼§",
            8: "à¼¨",
            9: "à¼©",
            0: "à¼ "
        }),
        Xf = {
            "à¼¡": "1",
            "à¼¢": "2",
            "à¼£": "3",
            "à¼¤": "4",
            "à¼¥": "5",
            "à¼¦": "6",
            "à¼§": "7",
            "à¼¨": "8",
            "à¼©": "9",
            "à¼ ": "0"
        },
        Yf = (Kf.defineLocale("bo", {
            months: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
            monthsShort: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
            weekdays: "à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
            weekdaysShort: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
            weekdaysMin: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[à½‘à½²à¼‹à½¢à½²à½„] LT",
                nextDay: "[à½¦à½„à¼‹à½‰à½²à½“] LT",
                nextWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT",
                lastDay: "[à½à¼‹à½¦à½„] LT",
                lastWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à½£à¼‹",
                past: "%s à½¦à¾”à½“à¼‹à½£",
                s: "à½£à½˜à¼‹à½¦à½„",
                m: "à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚",
                mm: "%d à½¦à¾à½¢à¼‹à½˜",
                h: "à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚",
                hh: "%d à½†à½´à¼‹à½šà½¼à½‘",
                d: "à½‰à½²à½“à¼‹à½‚à½…à½²à½‚",
                dd: "%d à½‰à½²à½“à¼‹",
                M: "à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚",
                MM: "%d à½Ÿà¾³à¼‹à½–",
                y: "à½£à½¼à¼‹à½‚à½…à½²à½‚",
                yy: "%d à½£à½¼"
            },
            preparse: function (a) {
                return a.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g, function (a) {
                    return Xf[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return Wf[a]
                })
            },
            meridiemParse: /à½˜à½šà½“à¼‹à½˜à½¼|à½žà½¼à½‚à½¦à¼‹à½€à½¦|à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼/,
            isPM: function (a) {
                return /^(à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼)$/.test(a)
            },
            meridiem: function (a, b, c) {
                return 4 > a ? "à½˜à½šà½“à¼‹à½˜à½¼" : 10 > a ? "à½žà½¼à½‚à½¦à¼‹à½€à½¦" : 17 > a ? "à½‰à½²à½“à¼‹à½‚à½´à½„" : 20 > a ? "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" : "à½˜à½šà½“à¼‹à½˜à½¼"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), Kf.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoÃ¹",
                m: "ur vunutenn",
                mm: Wc,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: Wc,
                M: "ur miz",
                MM: Wc,
                y: "ur bloaz",
                yy: Xc
            },
            ordinalParse: /\d{1,2}(aÃ±|vet)/,
            ordinal: function (a) {
                var b = 1 === a ? "aÃ±" : "vet";
                return a + b
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄer u] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[proÅ¡lu] dddd [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: _c,
                mm: _c,
                h: _c,
                hh: _c,
                d: "dan",
                dd: _c,
                M: "mjesec",
                MM: _c,
                y: "godinu",
                yy: _c
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("ca", {
            months: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function () {
                    return "[demÃ  a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function () {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "fa %s",
                s: "uns segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            ordinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
            ordinal: function (a, b) {
                var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "Ã¨";
                return ("w" === b || "W" === b) && (c = "a"), a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_")),
        Zf = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),
        $f = (Kf.defineLocale("cs", {
            months: Yf,
            monthsShort: Zf,
            monthsParse: function (a, b) {
                var c, d = [];
                for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
                return d
            }(Yf, Zf),
            shortMonthsParse: function (a) {
                var b, c = [];
                for (b = 0; 12 > b; b++) c[b] = new RegExp("^" + a[b] + "$", "i");
                return c
            }(Zf),
            longMonthsParse: function (a) {
                var b, c = [];
                for (b = 0; 12 > b; b++) c[b] = new RegExp("^" + a[b] + "$", "i");
                return c
            }(Yf),
            weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
            weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
            weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zÃ­tra v] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve stÅ™edu v] LT";
                        case 4:
                            return "[ve Ätvrtek v] LT";
                        case 5:
                            return "[v pÃ¡tek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[vÄera v] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou nedÄ›li v] LT";
                        case 1:
                        case 2:
                            return "[minulÃ©] dddd [v] LT";
                        case 3:
                            return "[minulou stÅ™edu v] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pÅ™ed %s",
                s: bd,
                m: bd,
                mm: bd,
                h: bd,
                hh: bd,
                d: bd,
                dd: bd,
                M: bd,
                MM: bd,
                y: bd,
                yy: bd
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("cv", {
            months: "ÐºÓ‘Ñ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€Ó‘Ñ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€Ð»Ð°_Ð°Ð²Ó‘Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"),
            monthsShort: "ÐºÓ‘Ñ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€_Ð°Ð²Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"),
            weekdays: "Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÓ—Ò«Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÓ‘Ð¼Ð°Ñ‚ÐºÑƒÐ½".split("_"),
            weekdaysShort: "Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÓ—Ò«_ÑÑ€Ð½_ÑˆÓ‘Ð¼".split("_"),
            weekdaysMin: "Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÒ«_ÑÑ€_ÑˆÐ¼".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—]",
                LLL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm",
                LLLL: "dddd, YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm"
            },
            calendar: {
                sameDay: "[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                nextDay: "[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                lastDay: "[Ó–Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                nextWeek: "[ÒªÐ¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                lastWeek: "[Ð˜Ñ€Ñ‚Ð½Ó—] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
                sameElse: "L"
            },
            relativeTime: {
                future: function (a) {
                    var b = /ÑÐµÑ…ÐµÑ‚$/i.exec(a) ? "Ñ€ÐµÐ½" : /Ò«ÑƒÐ»$/i.exec(a) ? "Ñ‚Ð°Ð½" : "Ñ€Ð°Ð½";
                    return a + b
                },
                past: "%s ÐºÐ°ÑÐ»Ð»Ð°",
                s: "Ð¿Ó—Ñ€-Ð¸Ðº Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
                m: "Ð¿Ó—Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
                h: "Ð¿Ó—Ñ€ ÑÐµÑ…ÐµÑ‚",
                hh: "%d ÑÐµÑ…ÐµÑ‚",
                d: "Ð¿Ó—Ñ€ ÐºÑƒÐ½",
                dd: "%d ÐºÑƒÐ½",
                M: "Ð¿Ó—Ñ€ ÑƒÐ¹Ó‘Ñ…",
                MM: "%d ÑƒÐ¹Ó‘Ñ…",
                y: "Ð¿Ó—Ñ€ Ò«ÑƒÐ»",
                yy: "%d Ò«ÑƒÐ»"
            },
            ordinalParse: /\d{1,2}-Ð¼Ó—Ñˆ/,
            ordinal: "%d-Ð¼Ó—Ñˆ",
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn Ã´l",
                s: "ychydig eiliadau",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (a) {
                var b = a,
                    c = "",
                    d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
            weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),
            weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[I dag kl.] LT",
                nextDay: "[I morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[I gÃ¥r kl.] LT",
                lastWeek: "[sidste] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "fÃ¥ sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en mÃ¥ned",
                MM: "%d mÃ¥neder",
                y: "et Ã¥r",
                yy: "%d Ã¥r"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("de-at", {
            months: "JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "JÃ¤n._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: cd,
                mm: "%d Minuten",
                h: cd,
                hh: "%d Stunden",
                d: cd,
                dd: cd,
                M: cd,
                MM: cd,
                y: cd,
                yy: cd
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("de", {
            months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: dd,
                mm: "%d Minuten",
                h: dd,
                hh: "%d Stunden",
                d: dd,
                dd: dd,
                M: dd,
                MM: dd,
                y: dd,
                yy: dd
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), ["Þ–Þ¬Þ‚ÞªÞ‡Þ¦ÞƒÞ©", "ÞŠÞ¬Þ„Þ°ÞƒÞªÞ‡Þ¦ÞƒÞ©", "Þ‰Þ§ÞƒÞ¨Þ—Þª", "Þ‡Þ­Þ•Þ°ÞƒÞ©ÞÞª", "Þ‰Þ­", "Þ–Þ«Þ‚Þ°", "Þ–ÞªÞÞ¦Þ‡Þ¨", "Þ‡Þ¯ÞŽÞ¦ÞÞ°Þ“Þª", "ÞÞ¬Þ•Þ°Þ“Þ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‡Þ®Þ†Þ°Þ“Þ¯Þ„Þ¦ÞƒÞª", "Þ‚Þ®ÞˆÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‘Þ¨ÞÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª"]),
        _f = ["Þ‡Þ§Þ‹Þ¨Þ‡Þ°ÞŒÞ¦", "Þ€Þ¯Þ‰Þ¦", "Þ‡Þ¦Þ‚Þ°ÞŽÞ§ÞƒÞ¦", "Þ„ÞªÞ‹Þ¦", "Þ„ÞªÞƒÞ§ÞÞ°ÞŠÞ¦ÞŒÞ¨", "Þ€ÞªÞ†ÞªÞƒÞª", "Þ€Þ®Þ‚Þ¨Þ€Þ¨ÞƒÞª"],
        ag = (Kf.defineLocale("dv", {
            months: $f,
            monthsShort: $f,
            weekdays: _f,
            weekdaysShort: _f,
            weekdaysMin: "Þ‡Þ§Þ‹Þ¨_Þ€Þ¯Þ‰Þ¦_Þ‡Þ¦Þ‚Þ°_Þ„ÞªÞ‹Þ¦_Þ„ÞªÞƒÞ§_Þ€ÞªÞ†Þª_Þ€Þ®Þ‚Þ¨".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /Þ‰Þ†|Þ‰ÞŠ/,
            isPM: function (a) {
                return "" === a
            },
            meridiem: function (a, b, c) {
                return 12 > a ? "Þ‰Þ†" : "Þ‰ÞŠ"
            },
            calendar: {
                sameDay: "[Þ‰Þ¨Þ‡Þ¦Þ‹Þª] LT",
                nextDay: "[Þ‰Þ§Þ‹Þ¦Þ‰Þ§] LT",
                nextWeek: "dddd LT",
                lastDay: "[Þ‡Þ¨Þ‡Þ°Þ”Þ¬] LT",
                lastWeek: "[ÞŠÞ§Þ‡Þ¨ÞŒÞªÞˆÞ¨] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ÞŒÞ¬ÞƒÞ­ÞŽÞ¦Þ‡Þ¨ %s",
                past: "Þ†ÞªÞƒÞ¨Þ‚Þ° %s",
                s: "ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞªÞ†Þ®Þ…Þ¬Þ‡Þ°",
                m: "Þ‰Þ¨Þ‚Þ¨Þ“Þ¬Þ‡Þ°",
                mm: "Þ‰Þ¨Þ‚Þ¨Þ“Þª %d",
                h: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞ¬Þ‡Þ°",
                hh: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞª %d",
                d: "Þ‹ÞªÞˆÞ¦Þ€Þ¬Þ‡Þ°",
                dd: "Þ‹ÞªÞˆÞ¦ÞÞ° %d",
                M: "Þ‰Þ¦Þ€Þ¬Þ‡Þ°",
                MM: "Þ‰Þ¦ÞÞ° %d",
                y: "Þ‡Þ¦Þ€Þ¦ÞƒÞ¬Þ‡Þ°",
                yy: "Þ‡Þ¦Þ€Þ¦ÞƒÞª %d"
            },
            preparse: function (a) {
                return a.replace(/ØŒ/g, ",")
            },
            postformat: function (a) {
                return a.replace(/,/g, "ØŒ")
            },
            week: {
                dow: 7,
                doy: 12
            }
        }), Kf.defineLocale("el", {
            monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"),
            monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),
            months: function (a, b) {
                return /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()]
            },
            monthsShort: "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),
            weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),
            weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),
            weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),
            meridiem: function (a, b, c) {
                return a > 11 ? c ? "Î¼Î¼" : "ÎœÎœ" : c ? "Ï€Î¼" : "Î Îœ"
            },
            isPM: function (a) {
                return "Î¼" === (a + "").toLowerCase()[0]
            },
            meridiemParse: /[Î Îœ]\.?Îœ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT",
                nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Î§Î¸ÎµÏ‚ {}] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 6:
                            return "[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT";
                        default:
                            return "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function (a, b) {
                var c = this._calendarEl[a],
                    d = b && b.hours();
                return D(c) && (c = c.apply(b)), c.replace("{}", d % 12 === 1 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚")
            },
            relativeTime: {
                future: "ÏƒÎµ %s",
                past: "%s Ï€ÏÎ¹Î½",
                s: "Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
                m: "Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",
                mm: "%d Î»ÎµÏ€Ï„Î¬",
                h: "Î¼Î¯Î± ÏŽÏÎ±",
                hh: "%d ÏŽÏÎµÏ‚",
                d: "Î¼Î¯Î± Î¼Î­ÏÎ±",
                dd: "%d Î¼Î­ÏÎµÏ‚",
                M: "Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚",
                MM: "%d Î¼Î®Î½ÎµÏ‚",
                y: "Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚",
                yy: "%d Ï‡ÏÏŒÎ½Î¹Î±"
            },
            ordinalParse: /\d{1,2}Î·/,
            ordinal: "%dÎ·",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "D MMMM, YYYY",
                LLL: "D MMMM, YYYY h:mm A",
                LLLL: "dddd, D MMMM, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        }), Kf.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aÅ­g_sep_okt_nov_dec".split("_"),
            weekdays: "DimanÄ‰o_Lundo_Mardo_Merkredo_Ä´aÅ­do_Vendredo_Sabato".split("_"),
            weekdaysShort: "Dim_Lun_Mard_Merk_Ä´aÅ­_Ven_Sab".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Ä´a_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-an de] MMMM, YYYY",
                LLL: "D[-an de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (a) {
                return "p" === a.charAt(0).toLowerCase()
            },
            meridiem: function (a, b, c) {
                return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[HodiaÅ­ je] LT",
                nextDay: "[MorgaÅ­ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[HieraÅ­ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "je %s",
                past: "antaÅ­ %s",
                s: "sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            ordinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {
                dow: 1,
                doy: 7
            }
        }), "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),
        bg = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        cg = (Kf.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (a, b) {
                return /-MMM-/.test(b) ? bg[a.month()] : ag[a.month()]
            },
            weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
            weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function () {
                    return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                M: "un mes",
                MM: "%d meses",
                y: "un aÃ±o",
                yy: "%d aÃ±os"
            },
            ordinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("et", {
            months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[TÃ¤na,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[JÃ¤rgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pÃ¤rast",
                past: "%s tagasi",
                s: ed,
                m: ed,
                mm: ed,
                h: ed,
                hh: ed,
                d: ed,
                dd: "%d pÃ¤eva",
                M: ed,
                MM: ed,
                y: ed,
                yy: ed
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), {
            1: "Û±",
            2: "Û²",
            3: "Û³",
            4: "Û´",
            5: "Ûµ",
            6: "Û¶",
            7: "Û·",
            8: "Û¸",
            9: "Û¹",
            0: "Û°"
        }),
        dg = {
            "Û±": "1",
            "Û²": "2",
            "Û³": "3",
            "Û´": "4",
            "Ûµ": "5",
            "Û¶": "6",
            "Û·": "7",
            "Û¸": "8",
            "Û¹": "9",
            "Û°": "0"
        },
        eg = (Kf.defineLocale("fa", {
            months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
            monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
            weekdays: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
            weekdaysShort: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
            weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/,
            isPM: function (a) {
                return /Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/.test(a)
            },
            meridiem: function (a, b, c) {
                return 12 > a ? "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±" : "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"
            },
            calendar: {
                sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT",
                nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT",
                lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
                lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ø¯Ø± %s",
                past: "%s Ù¾ÛŒØ´",
                s: "Ú†Ù†Ø¯ÛŒÙ† Ø«Ø§Ù†ÛŒÙ‡",
                m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡",
                mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡",
                h: "ÛŒÚ© Ø³Ø§Ø¹Øª",
                hh: "%d Ø³Ø§Ø¹Øª",
                d: "ÛŒÚ© Ø±ÙˆØ²",
                dd: "%d Ø±ÙˆØ²",
                M: "ÛŒÚ© Ù…Ø§Ù‡",
                MM: "%d Ù…Ø§Ù‡",
                y: "ÛŒÚ© Ø³Ø§Ù„",
                yy: "%d Ø³Ø§Ù„"
            },
            preparse: function (a) {
                return a.replace(/[Û°-Û¹]/g, function (a) {
                    return dg[a]
                }).replace(/ØŒ/g, ",")
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return cg[a]
                }).replace(/,/g, "ØŒ")
            },
            ordinalParse: /\d{1,2}Ù…/,
            ordinal: "%dÙ…",
            week: {
                dow: 6,
                doy: 12
            }
        }), "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" ")),
        fg = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", eg[7], eg[8], eg[9]],
        gg = (Kf.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pÃ¤Ã¤stÃ¤",
                past: "%s sitten",
                s: fd,
                m: fd,
                mm: fd,
                h: fd,
                hh: fd,
                d: fd,
                dd: fd,
                M: fd,
                MM: fd,
                y: fd,
                yy: fd
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("fo", {
            months: "januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"),
            weekdaysMin: "su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ã dag kl.] LT",
                nextDay: "[Ã morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Ã gjÃ¡r kl.] LT",
                lastWeek: "[sÃ­Ã°stu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s sÃ­Ã°ani",
                s: "fÃ¡ sekund",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tÃ­mi",
                hh: "%d tÃ­mar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mÃ¡naÃ°i",
                MM: "%d mÃ¡naÃ°ir",
                y: "eitt Ã¡r",
                yy: "%d Ã¡r"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("fr-ca", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function (a) {
                return a + (1 === a ? "er" : "e")
            }
        }), Kf.defineLocale("fr-ch", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|e)/,
            ordinal: function (a) {
                return a + (1 === a ? "er" : "e")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("fr", {
            months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
            monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd'hui Ã ] LT",
                nextDay: "[Demain Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[Hier Ã ] LT",
                lastWeek: "dddd [dernier Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|)/,
            ordinal: function (a) {
                return a + (1 === a ? "er" : "")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),
        hg = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        ig = (Kf.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function (a, b) {
                return /-MMM-/.test(b) ? hg[a.month()] : gg[a.month()]
            },
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[Ã´frÃ»ne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                m: "ien minÃºt",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (a) {
                return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), ["Am Faoilleach", "An Gearran", "Am MÃ rt", "An Giblean", "An CÃ¨itean", "An t-Ã’gmhios", "An t-Iuchar", "An LÃ¹nastal", "An t-Sultain", "An DÃ mhair", "An t-Samhain", "An DÃ¹bhlachd"]),
        jg = ["Faoi", "Gear", "MÃ rt", "Gibl", "CÃ¨it", "Ã’gmh", "Iuch", "LÃ¹n", "Sult", "DÃ mh", "Samh", "DÃ¹bh"],
        kg = ["DidÃ²mhnaich", "Diluain", "DimÃ irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
        lg = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
        mg = ["DÃ²", "Lu", "MÃ ", "Ci", "Ar", "Ha", "Sa"],
        ng = (Kf.defineLocale("gd", {
            months: ig,
            monthsShort: jg,
            monthsParseExact: !0,
            weekdays: kg,
            weekdaysShort: lg,
            weekdaysMin: mg,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-mÃ ireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dÃ¨ aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mÃ¬os",
                MM: "%d mÃ¬osan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            ordinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (a) {
                var b = 1 === a ? "d" : a % 10 === 2 ? "na" : "mh";
                return a + b
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("gl", {
            months: "Xaneiro_Febreiro_Marzo_Abril_Maio_XuÃ±o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
            monthsShort: "Xan._Feb._Mar._Abr._Mai._XuÃ±._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
            weekdays: "Domingo_Luns_Martes_MÃ©rcores_Xoves_Venres_SÃ¡bado".split("_"),
            weekdaysShort: "Dom._Lun._Mar._MÃ©r._Xov._Ven._SÃ¡b.".split("_"),
            weekdaysMin: "Do_Lu_Ma_MÃ©_Xo_Ve_SÃ¡".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoxe " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
                },
                nextDay: function () {
                    return "[maÃ±Ã¡ " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [" + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
                },
                lastDay: function () {
                    return "[onte " + (1 !== this.hours() ? "Ã¡" : "a") + "] LT"
                },
                lastWeek: function () {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (a) {
                    return "uns segundos" === a ? "nuns segundos" : "en " + a
                },
                past: "hai %s",
                s: "uns segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un dÃ­a",
                dd: "%d dÃ­as",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("he", {
            months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"),
            monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"),
            weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"),
            weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"),
            weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [×‘]MMMM YYYY",
                LLL: "D [×‘]MMMM YYYY HH:mm",
                LLLL: "dddd, D [×‘]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[×”×™×•× ×‘Ö¾]LT",
                nextDay: "[×ž×—×¨ ×‘Ö¾]LT",
                nextWeek: "dddd [×‘×©×¢×”] LT",
                lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT",
                lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "×‘×¢×•×“ %s",
                past: "×œ×¤× ×™ %s",
                s: "×ž×¡×¤×¨ ×©× ×™×•×ª",
                m: "×“×§×”",
                mm: "%d ×“×§×•×ª",
                h: "×©×¢×”",
                hh: function (a) {
                    return 2 === a ? "×©×¢×ª×™×™×" : a + " ×©×¢×•×ª"
                },
                d: "×™×•×",
                dd: function (a) {
                    return 2 === a ? "×™×•×ž×™×™×" : a + " ×™×ž×™×"
                },
                M: "×—×•×“×©",
                MM: function (a) {
                    return 2 === a ? "×—×•×“×©×™×™×" : a + " ×—×•×“×©×™×"
                },
                y: "×©× ×”",
                yy: function (a) {
                    return 2 === a ? "×©× ×ª×™×™×" : a % 10 === 0 && 10 !== a ? a + " ×©× ×”" : a + " ×©× ×™×"
                }
            }
        }), {
            1: "à¥§",
            2: "à¥¨",
            3: "à¥©",
            4: "à¥ª",
            5: "à¥«",
            6: "à¥¬",
            7: "à¥­",
            8: "à¥®",
            9: "à¥¯",
            0: "à¥¦"
        }),
        og = {
            "à¥§": "1",
            "à¥¨": "2",
            "à¥©": "3",
            "à¥ª": "4",
            "à¥«": "5",
            "à¥¬": "6",
            "à¥­": "7",
            "à¥®": "8",
            "à¥¯": "9",
            "à¥¦": "0"
        },
        pg = (Kf.defineLocale("hi", {
            months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),
            monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),
            weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
            weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
            weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
            longDateFormat: {
                LT: "A h:mm à¤¬à¤œà¥‡",
                LTS: "A h:mm:ss à¤¬à¤œà¥‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¤¬à¤œà¥‡",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡"
            },
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤•à¤²] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¤•à¤²] LT",
                lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à¤®à¥‡à¤‚",
                past: "%s à¤ªà¤¹à¤²à¥‡",
                s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",
                m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",
                mm: "%d à¤®à¤¿à¤¨à¤Ÿ",
                h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",
                hh: "%d à¤˜à¤‚à¤Ÿà¥‡",
                d: "à¤à¤• à¤¦à¤¿à¤¨",
                dd: "%d à¤¦à¤¿à¤¨",
                M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",
                MM: "%d à¤®à¤¹à¥€à¤¨à¥‡",
                y: "à¤à¤• à¤µà¤°à¥à¤·",
                yy: "%d à¤µà¤°à¥à¤·"
            },
            preparse: function (a) {
                return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (a) {
                    return og[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return ng[a]
                })
            },
            meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "à¤°à¤¾à¤¤" === b ? 4 > a ? a : a + 12 : "à¤¸à¥à¤¬à¤¹" === b ? a : "à¤¦à¥‹à¤ªà¤¹à¤°" === b ? a >= 10 ? a : a + 12 : "à¤¶à¤¾à¤®" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return 4 > a ? "à¤°à¤¾à¤¤" : 10 > a ? "à¤¸à¥à¤¬à¤¹" : 17 > a ? "à¤¦à¥‹à¤ªà¤¹à¤°" : 20 > a ? "à¤¶à¤¾à¤®" : "à¤°à¤¾à¤¤"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), Kf.defineLocale("hr", {
            months: {
                format: "sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄer u] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[proÅ¡lu] dddd [u] LT";
                        case 6:
                            return "[proÅ¡le] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[proÅ¡li] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: hd,
                mm: hd,
                h: hd,
                hh: hd,
                d: "dan",
                dd: hd,
                M: "mjesec",
                MM: hd,
                y: "godinu",
                yy: hd
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" ")),
        qg = (Kf.defineLocale("hu", {
            months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"),
            monthsShort: "jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"),
            weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function (a) {
                return "u" === a.charAt(1).toLowerCase()
            },
            meridiem: function (a, b, c) {
                return 12 > a ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function () {
                    return jd.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function () {
                    return jd.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s mÃºlva",
                past: "%s",
                s: id,
                m: id,
                mm: id,
                h: id,
                hh: id,
                d: id,
                dd: id,
                M: id,
                MM: id,
                y: id,
                yy: id
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("hy-am", {
            months: {
                format: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_"),
                standalone: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_")
            },
            monthsShort: "Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_"),
            weekdays: "Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_"),
            weekdaysShort: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
            weekdaysMin: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Õ©.",
                LLL: "D MMMM YYYY Õ©., HH:mm",
                LLLL: "dddd, D MMMM YYYY Õ©., HH:mm"
            },
            calendar: {
                sameDay: "[Õ¡ÕµÕ½Ö…Ö€] LT",
                nextDay: "[Õ¾Õ¡Õ²Õ¨] LT",
                lastDay: "[Õ¥Ö€Õ¥Õ¯] LT",
                nextWeek: function () {
                    return "dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                },
                lastWeek: function () {
                    return "[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Õ°Õ¥Õ¿Õ¸",
                past: "%s Õ¡Õ¼Õ¡Õ»",
                s: "Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
                m: "Ö€Õ¸ÕºÕ¥",
                mm: "%d Ö€Õ¸ÕºÕ¥",
                h: "ÕªÕ¡Õ´",
                hh: "%d ÕªÕ¡Õ´",
                d: "Ö…Ö€",
                dd: "%d Ö…Ö€",
                M: "Õ¡Õ´Õ«Õ½",
                MM: "%d Õ¡Õ´Õ«Õ½",
                y: "Õ¿Õ¡Ö€Õ«",
                yy: "%d Õ¿Õ¡Ö€Õ«"
            },
            meridiemParse: /Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶/,
            isPM: function (a) {
                return /^(ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(a)
            },
            meridiem: function (a) {
                return 4 > a ? "Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡" : 12 > a ? "Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡" : 17 > a ? "ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡" : "Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶"
            },
            ordinalParse: /\d{1,2}|\d{1,2}-(Õ«Õ¶|Ö€Õ¤)/,
            ordinal: function (a, b) {
                switch (b) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === a ? a + "-Õ«Õ¶" : a + "-Ö€Õ¤";
                    default:
                        return a
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("is", {
            months: "janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"),
            weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"),
            weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"),
            weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[Ã­ dag kl.] LT",
                nextDay: "[Ã¡ morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Ã­ gÃ¦r kl.] LT",
                lastWeek: "[sÃ­Ã°asta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s sÃ­Ã°an",
                s: ld,
                m: ld,
                mm: ld,
                h: "klukkustund",
                hh: ld,
                d: ld,
                dd: ld,
                M: ld,
                MM: ld,
                y: ld,
                yy: ld
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "Domenica_LunedÃ¬_MartedÃ¬_MercoledÃ¬_GiovedÃ¬_VenerdÃ¬_Sabato".split("_"),
            weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (a) {
                    return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a
                },
                past: "%s fa",
                s: "alcuni secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            ordinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("ja", {
            months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),
            weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
            longDateFormat: {
                LT: "Ahæ™‚måˆ†",
                LTS: "Ahæ™‚måˆ†sç§’",
                L: "YYYY/MM/DD",
                LL: "YYYYå¹´MæœˆDæ—¥",
                LLL: "YYYYå¹´MæœˆDæ—¥Ahæ™‚måˆ†",
                LLLL: "YYYYå¹´MæœˆDæ—¥Ahæ™‚måˆ† dddd"
            },
            meridiemParse: /åˆå‰|åˆå¾Œ/i,
            isPM: function (a) {
                return "åˆå¾Œ" === a
            },
            meridiem: function (a, b, c) {
                return 12 > a ? "åˆå‰" : "åˆå¾Œ"
            },
            calendar: {
                sameDay: "[ä»Šæ—¥] LT",
                nextDay: "[æ˜Žæ—¥] LT",
                nextWeek: "[æ¥é€±]dddd LT",
                lastDay: "[æ˜¨æ—¥] LT",
                lastWeek: "[å‰é€±]dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%så¾Œ",
                past: "%så‰",
                s: "æ•°ç§’",
                m: "1åˆ†",
                mm: "%dåˆ†",
                h: "1æ™‚é–“",
                hh: "%dæ™‚é–“",
                d: "1æ—¥",
                dd: "%dæ—¥",
                M: "1ãƒ¶æœˆ",
                MM: "%dãƒ¶æœˆ",
                y: "1å¹´",
                yy: "%då¹´"
            }
        }), Kf.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "enjing" === b ? a : "siyang" === b ? a >= 11 ? a : a + 12 : "sonten" === b || "ndalu" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return 11 > a ? "enjing" : 15 > a ? "siyang" : 19 > a ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("ka", {
            months: {
                standalone: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"),
                format: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ¡_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ¡_áƒ›áƒáƒ áƒ¢áƒ¡_áƒáƒžáƒ áƒ˜áƒšáƒ˜áƒ¡_áƒ›áƒáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ¡_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ¡_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ¡_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡".split("_")
            },
            monthsShort: "áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"),
            weekdays: {
                standalone: "áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"),
                format: "áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_"),
                isFormat: /(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/
            },
            weekdaysShort: "áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"),
            weekdaysMin: "áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]",
                nextDay: "[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]",
                lastDay: "[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]",
                nextWeek: "[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]",
                lastWeek: "[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”",
                sameElse: "L"
            },
            relativeTime: {
                future: function (a) {
                    return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ¬áƒ”áƒšáƒ˜)/.test(a) ? a.replace(/áƒ˜$/, "áƒ¨áƒ˜") : a + "áƒ¨áƒ˜"
                },
                past: function (a) {
                    return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(a) ? a.replace(/(áƒ˜|áƒ”)$/, "áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : /áƒ¬áƒ”áƒšáƒ˜/.test(a) ? a.replace(/áƒ¬áƒ”áƒšáƒ˜$/, "áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : void 0
                },
                s: "áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜",
                m: "áƒ¬áƒ£áƒ—áƒ˜",
                mm: "%d áƒ¬áƒ£áƒ—áƒ˜",
                h: "áƒ¡áƒáƒáƒ—áƒ˜",
                hh: "%d áƒ¡áƒáƒáƒ—áƒ˜",
                d: "áƒ“áƒ¦áƒ”",
                dd: "%d áƒ“áƒ¦áƒ”",
                M: "áƒ—áƒ•áƒ”",
                MM: "%d áƒ—áƒ•áƒ”",
                y: "áƒ¬áƒ”áƒšáƒ˜",
                yy: "%d áƒ¬áƒ”áƒšáƒ˜"
            },
            ordinalParse: /0|1-áƒšáƒ˜|áƒ›áƒ”-\d{1,2}|\d{1,2}-áƒ”/,
            ordinal: function (a) {
                return 0 === a ? a : 1 === a ? a + "-áƒšáƒ˜" : 20 > a || 100 >= a && a % 20 === 0 || a % 100 === 0 ? "áƒ›áƒ”-" + a : a + "-áƒ”"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), {
            0: "-ÑˆÑ–",
            1: "-ÑˆÑ–",
            2: "-ÑˆÑ–",
            3: "-ÑˆÑ–",
            4: "-ÑˆÑ–",
            5: "-ÑˆÑ–",
            6: "-ÑˆÑ‹",
            7: "-ÑˆÑ–",
            8: "-ÑˆÑ–",
            9: "-ÑˆÑ‹",
            10: "-ÑˆÑ‹",
            20: "-ÑˆÑ‹",
            30: "-ÑˆÑ‹",
            40: "-ÑˆÑ‹",
            50: "-ÑˆÑ–",
            60: "-ÑˆÑ‹",
            70: "-ÑˆÑ–",
            80: "-ÑˆÑ–",
            90: "-ÑˆÑ‹",
            100: "-ÑˆÑ–"
        }),
        rg = (Kf.defineLocale("kk", {
            months: "ÒšÐ°Ò£Ñ‚Ð°Ñ€_ÐÒ›Ð¿Ð°Ð½_ÐÐ°ÑƒÑ€Ñ‹Ð·_Ð¡Ó™ÑƒÑ–Ñ€_ÐœÐ°Ð¼Ñ‹Ñ€_ÐœÐ°ÑƒÑÑ‹Ð¼_Ð¨Ñ–Ð»Ð´Ðµ_Ð¢Ð°Ð¼Ñ‹Ð·_ÒšÑ‹Ñ€ÐºÒ¯Ð¹ÐµÐº_ÒšÐ°Ð·Ð°Ð½_ÒšÐ°Ñ€Ð°ÑˆÐ°_Ð–ÐµÐ»Ñ‚Ð¾Ò›ÑÐ°Ð½".split("_"),
            monthsShort: "ÒšÐ°Ò£_ÐÒ›Ð¿_ÐÐ°Ñƒ_Ð¡Ó™Ñƒ_ÐœÐ°Ð¼_ÐœÐ°Ñƒ_Ð¨Ñ–Ð»_Ð¢Ð°Ð¼_ÒšÑ‹Ñ€_ÒšÐ°Ð·_ÒšÐ°Ñ€_Ð–ÐµÐ»".split("_"),
            weekdays: "Ð–ÐµÐºÑÐµÐ½Ð±Ñ–_Ð”Ò¯Ð¹ÑÐµÐ½Ð±Ñ–_Ð¡ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð¡Ó™Ñ€ÑÐµÐ½Ð±Ñ–_Ð‘ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð–Ò±Ð¼Ð°_Ð¡ÐµÐ½Ð±Ñ–".split("_"),
            weekdaysShort: "Ð–ÐµÐº_Ð”Ò¯Ð¹_Ð¡ÐµÐ¹_Ð¡Ó™Ñ€_Ð‘ÐµÐ¹_Ð–Ò±Ð¼_Ð¡ÐµÐ½".split("_"),
            weekdaysMin: "Ð–Ðº_Ð”Ð¹_Ð¡Ð¹_Ð¡Ñ€_Ð‘Ð¹_Ð–Ð¼_Ð¡Ð½".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ð‘Ò¯Ð³Ñ–Ð½ ÑÐ°Ò“Ð°Ñ‚] LT",
                nextDay: "[Ð•Ñ€Ñ‚ÐµÒ£ ÑÐ°Ò“Ð°Ñ‚] LT",
                nextWeek: "dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
                lastDay: "[ÐšÐµÑˆÐµ ÑÐ°Ò“Ð°Ñ‚] LT",
                lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ò£] dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s Ñ–ÑˆÑ–Ð½Ð´Ðµ",
                past: "%s Ð±Ò±Ñ€Ñ‹Ð½",
                s: "Ð±Ñ–Ñ€Ð½ÐµÑˆÐµ ÑÐµÐºÑƒÐ½Ð´",
                m: "Ð±Ñ–Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
                h: "Ð±Ñ–Ñ€ ÑÐ°Ò“Ð°Ñ‚",
                hh: "%d ÑÐ°Ò“Ð°Ñ‚",
                d: "Ð±Ñ–Ñ€ ÐºÒ¯Ð½",
                dd: "%d ÐºÒ¯Ð½",
                M: "Ð±Ñ–Ñ€ Ð°Ð¹",
                MM: "%d Ð°Ð¹",
                y: "Ð±Ñ–Ñ€ Ð¶Ñ‹Ð»",
                yy: "%d Ð¶Ñ‹Ð»"
            },
            ordinalParse: /\d{1,2}-(ÑˆÑ–|ÑˆÑ‹)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = a >= 100 ? 100 : null;
                return a + (qg[a] || qg[b] || qg[c])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("km", {
            months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž·áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
            monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž·áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
            weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
            weekdaysShort: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
            weekdaysMin: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT",
                nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",
                nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT",
                lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",
                lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sáž‘áŸ€áž",
                past: "%sáž˜áž»áž“",
                s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",
                m: "áž˜áž½áž™áž“áž¶áž‘áž¸",
                mm: "%d áž“áž¶áž‘áž¸",
                h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„",
                hh: "%d áž˜áŸ‰áŸ„áž„",
                d: "áž˜áž½áž™ážáŸ’áž„áŸƒ",
                dd: "%d ážáŸ’áž„áŸƒ",
                M: "áž˜áž½áž™ážáŸ‚",
                MM: "%d ážáŸ‚",
                y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",
                yy: "%d áž†áŸ’áž“áž¶áŸ†"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("ko", {
            months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
            monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
            weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),
            weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
            weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
            longDateFormat: {
                LT: "A hì‹œ më¶„",
                LTS: "A hì‹œ më¶„ sì´ˆ",
                L: "YYYY.MM.DD",
                LL: "YYYYë…„ MMMM Dì¼",
                LLL: "YYYYë…„ MMMM Dì¼ A hì‹œ më¶„",
                LLLL: "YYYYë…„ MMMM Dì¼ dddd A hì‹œ më¶„"
            },
            calendar: {
                sameDay: "ì˜¤ëŠ˜ LT",
                nextDay: "ë‚´ì¼ LT",
                nextWeek: "dddd LT",
                lastDay: "ì–´ì œ LT",
                lastWeek: "ì§€ë‚œì£¼ dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s í›„",
                past: "%s ì „",
                s: "ëª‡ì´ˆ",
                ss: "%dì´ˆ",
                m: "ì¼ë¶„",
                mm: "%dë¶„",
                h: "í•œì‹œê°„",
                hh: "%dì‹œê°„",
                d: "í•˜ë£¨",
                dd: "%dì¼",
                M: "í•œë‹¬",
                MM: "%dë‹¬",
                y: "ì¼ë…„",
                yy: "%dë…„"
            },
            ordinalParse: /\d{1,2}ì¼/,
            ordinal: "%dì¼",
            meridiemParse: /ì˜¤ì „|ì˜¤í›„/,
            isPM: function (a) {
                return "ì˜¤í›„" === a
            },
            meridiem: function (a, b, c) {
                return 12 > a ? "ì˜¤ì „" : "ì˜¤í›„"
            }
        }), Kf.defineLocale("lb", {
            months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[GÃ«schter um] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: nd,
                past: od,
                s: "e puer Sekonnen",
                m: md,
                mm: "%d Minutten",
                h: md,
                hh: "%d Stonnen",
                d: md,
                dd: "%d Deeg",
                M: md,
                MM: "%d MÃ©int",
                y: md,
                yy: "%d Joer"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("lo", {
            months: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
            monthsShort: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
            weekdays: "àº­àº²àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
            weekdaysShort: "àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
            weekdaysMin: "àº—_àºˆ_àº­àº„_àºž_àºžàº«_àºªàº_àºª".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "àº§àº±àº™dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /àº•àº­àº™à»€àºŠàº»à»‰àº²|àº•àº­àº™à»àº¥àº‡/,
            isPM: function (a) {
                return "àº•àº­àº™à»àº¥àº‡" === a
            },
            meridiem: function (a, b, c) {
                return 12 > a ? "àº•àº­àº™à»€àºŠàº»à»‰àº²" : "àº•àº­àº™à»àº¥àº‡"
            },
            calendar: {
                sameDay: "[àº¡àº·à»‰àº™àºµà»‰à»€àº§àº¥àº²] LT",
                nextDay: "[àº¡àº·à»‰àº­àº·à»ˆàº™à»€àº§àº¥àº²] LT",
                nextWeek: "[àº§àº±àº™]dddd[à»œà»‰àº²à»€àº§àº¥àº²] LT",
                lastDay: "[àº¡àº·à»‰àº§àº²àº™àº™àºµà»‰à»€àº§àº¥àº²] LT",
                lastWeek: "[àº§àº±àº™]dddd[à»àº¥à»‰àº§àº™àºµà»‰à»€àº§àº¥àº²] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "àº­àºµàº %s",
                past: "%sàºœà»ˆàº²àº™àº¡àº²",
                s: "àºšà»à»ˆà»€àº—àº»à»ˆàº²à»ƒàº”àº§àº´àº™àº²àº—àºµ",
                m: "1 àº™àº²àº—àºµ",
                mm: "%d àº™àº²àº—àºµ",
                h: "1 àºŠàº»à»ˆàº§à»‚àº¡àº‡",
                hh: "%d àºŠàº»à»ˆàº§à»‚àº¡àº‡",
                d: "1 àº¡àº·à»‰",
                dd: "%d àº¡àº·à»‰",
                M: "1 à»€àº”àº·àº­àº™",
                MM: "%d à»€àº”àº·àº­àº™",
                y: "1 àº›àºµ",
                yy: "%d àº›àºµ"
            },
            ordinalParse: /(àº—àºµà»ˆ)\d{1,2}/,
            ordinal: function (a) {
                return "àº—àºµà»ˆ" + a
            }
        }), {
            m: "minutÄ—_minutÄ—s_minutÄ™",
            mm: "minutÄ—s_minuÄiÅ³_minutes",
            h: "valanda_valandos_valandÄ…",
            hh: "valandos_valandÅ³_valandas",
            d: "diena_dienos_dienÄ…",
            dd: "dienos_dienÅ³_dienas",
            M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯",
            MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius",
            y: "metai_metÅ³_metus",
            yy: "metai_metÅ³_metus"
        }),
        sg = (Kf.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_geguÅ¾Ä—_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄ—jis_spalis_lapkritis_gruodis".split("_")
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Å iandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[PraÄ—jusÄ¯] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieÅ¡ %s",
                s: qd,
                m: rd,
                mm: ud,
                h: rd,
                hh: ud,
                d: rd,
                dd: ud,
                M: rd,
                MM: ud,
                y: rd,
                yy: ud
            },
            ordinalParse: /\d{1,2}-oji/,
            ordinal: function (a) {
                return a + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            m: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
            mm: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
            h: "stundas_stundÄm_stunda_stundas".split("_"),
            hh: "stundas_stundÄm_stunda_stundas".split("_"),
            d: "dienas_dienÄm_diena_dienas".split("_"),
            dd: "dienas_dienÄm_diena_dienas".split("_"),
            M: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
            MM: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        }),
        tg = (Kf.defineLocale("lv", {
            months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Å odien pulksten] LT",
                nextDay: "[RÄ«t pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pÄ“c %s",
                past: "pirms %s",
                s: yd,
                m: xd,
                mm: wd,
                h: xd,
                hh: wd,
                d: xd,
                dd: wd,
                M: xd,
                MM: wd,
                y: xd,
                yy: wd
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            words: {
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function (a, b) {
                return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
            },
            translate: function (a, b, c) {
                var d = tg.words[c];
                return 1 === c.length ? b ? d[0] : d[1] : a + " " + tg.correctGrammaticalCase(a, d)
            }
        }),
        ug = (Kf.defineLocale("me", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            weekdays: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "Äetvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sri.", "Äet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "Äe", "pe", "su"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sjutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄe u] LT",
                lastWeek: function () {
                    var a = ["[proÅ¡le] [nedjelje] [u] LT", "[proÅ¡log] [ponedjeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srijede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"];
                    return a[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                m: tg.translate,
                mm: tg.translate,
                h: tg.translate,
                hh: tg.translate,
                d: "dan",
                dd: tg.translate,
                M: "mjesec",
                MM: tg.translate,
                y: "godinu",
                yy: tg.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("mk", {
            months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
            monthsShort: "Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),
            weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),
            weekdaysMin: "Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",
                nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",
                nextWeek: "[Ð’Ð¾] dddd [Ð²Ð¾] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð¿Ð¾ÑÐ»Ðµ %s",
                past: "Ð¿Ñ€ÐµÐ´ %s",
                s: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
                mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
                h: "Ñ‡Ð°Ñ",
                hh: "%d Ñ‡Ð°ÑÐ°",
                d: "Ð´ÐµÐ½",
                dd: "%d Ð´ÐµÐ½Ð°",
                M: "Ð¼ÐµÑÐµÑ†",
                MM: "%d Ð¼ÐµÑÐµÑ†Ð¸",
                y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
                yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
            },
            ordinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = a % 100;
                return 0 === a ? a + "-ÐµÐ²" : 0 === c ? a + "-ÐµÐ½" : c > 10 && 20 > c ? a + "-Ñ‚Ð¸" : 1 === b ? a + "-Ð²Ð¸" : 2 === b ? a + "-Ñ€Ð¸" : 7 === b || 8 === b ? a + "-Ð¼Ð¸" : a + "-Ñ‚Ð¸"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("ml", {
            months: "à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"),
            monthsShort: "à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"),
            weekdays: "à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"),
            weekdaysShort: "à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"),
            weekdaysMin: "à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"),
            longDateFormat: {
                LT: "A h:mm -à´¨àµ",
                LTS: "A h:mm:ss -à´¨àµ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -à´¨àµ",
                LLLL: "dddd, D MMMM YYYY, A h:mm -à´¨àµ"
            },
            calendar: {
                sameDay: "[à´‡à´¨àµà´¨àµ] LT",
                nextDay: "[à´¨à´¾à´³àµ†] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à´‡à´¨àµà´¨à´²àµ†] LT",
                lastWeek: "[à´•à´´à´¿à´žàµà´ž] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à´•à´´à´¿à´žàµà´žàµ",
                past: "%s à´®àµàµ»à´ªàµ",
                s: "à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾",
                m: "à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ",
                mm: "%d à´®à´¿à´¨à´¿à´±àµà´±àµ",
                h: "à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
                hh: "%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
                d: "à´’à´°àµ à´¦à´¿à´µà´¸à´‚",
                dd: "%d à´¦à´¿à´µà´¸à´‚",
                M: "à´’à´°àµ à´®à´¾à´¸à´‚",
                MM: "%d à´®à´¾à´¸à´‚",
                y: "à´’à´°àµ à´µàµ¼à´·à´‚",
                yy: "%d à´µàµ¼à´·à´‚"
            },
            meridiemParse: /à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ†|à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿/i,
            isPM: function (a) {
                return /^(à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿)$/.test(a)
            },
            meridiem: function (a, b, c) {
                return 4 > a ? "à´°à´¾à´¤àµà´°à´¿" : 12 > a ? "à´°à´¾à´µà´¿à´²àµ†" : 17 > a ? "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" : 20 > a ? "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" : "à´°à´¾à´¤àµà´°à´¿"
            }
        }), {
            1: "à¥§",
            2: "à¥¨",
            3: "à¥©",
            4: "à¥ª",
            5: "à¥«",
            6: "à¥¬",
            7: "à¥­",
            8: "à¥®",
            9: "à¥¯",
            0: "à¥¦"
        }),
        vg = {
            "à¥§": "1",
            "à¥¨": "2",
            "à¥©": "3",
            "à¥ª": "4",
            "à¥«": "5",
            "à¥¬": "6",
            "à¥­": "7",
            "à¥®": "8",
            "à¥¯": "9",
            "à¥¦": "0"
        },
        wg = (Kf.defineLocale("mr", {
            months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
            monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
            weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
            weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
            weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
            longDateFormat: {
                LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
                LTS: "A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
                LLLL: "dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾"
            },
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à¤•à¤¾à¤²] LT",
                lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¤®à¤§à¥à¤¯à¥‡",
                past: "%sà¤ªà¥‚à¤°à¥à¤µà¥€",
                s: zd,
                m: zd,
                mm: zd,
                h: zd,
                hh: zd,
                d: zd,
                dd: zd,
                M: zd,
                MM: zd,
                y: zd,
                yy: zd
            },
            preparse: function (a) {
                return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (a) {
                    return vg[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return ug[a]
                })
            },
            meridiemParse: /à¤°à¤¾à¤¤à¥à¤°à¥€|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "à¤°à¤¾à¤¤à¥à¤°à¥€" === b ? 4 > a ? a : a + 12 : "à¤¸à¤•à¤¾à¤³à¥€" === b ? a : "à¤¦à¥à¤ªà¤¾à¤°à¥€" === b ? a >= 10 ? a : a + 12 : "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return 4 > a ? "à¤°à¤¾à¤¤à¥à¤°à¥€" : 10 > a ? "à¤¸à¤•à¤¾à¤³à¥€" : 17 > a ? "à¤¦à¥à¤ªà¤¾à¤°à¥€" : 20 > a ? "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" : "à¤°à¤¾à¤¤à¥à¤°à¥€"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), Kf.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), {
            1: "á",
            2: "á‚",
            3: "áƒ",
            4: "á„",
            5: "á…",
            6: "á†",
            7: "á‡",
            8: "áˆ",
            9: "á‰",
            0: "á€"
        }),
        xg = {
            "á": "1",
            "á‚": "2",
            "áƒ": "3",
            "á„": "4",
            "á…": "5",
            "á†": "6",
            "á‡": "7",
            "áˆ": "8",
            "á‰": "9",
            "á€": "0"
        },
        yg = (Kf.defineLocale("my", {
            months: "á€‡á€”á€ºá€”á€á€«á€›á€®_á€–á€±á€–á€±á€¬á€ºá€á€«á€›á€®_á€™á€á€º_á€§á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€‡á€°á€œá€­á€¯á€„á€º_á€žá€¼á€‚á€¯á€á€º_á€…á€€á€ºá€á€„á€ºá€˜á€¬_á€¡á€±á€¬á€€á€ºá€á€­á€¯á€˜á€¬_á€”á€­á€¯á€á€„á€ºá€˜á€¬_á€’á€®á€‡á€„á€ºá€˜á€¬".split("_"),
            monthsShort: "á€‡á€”á€º_á€–á€±_á€™á€á€º_á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€œá€­á€¯á€„á€º_á€žá€¼_á€…á€€á€º_á€¡á€±á€¬á€€á€º_á€”á€­á€¯_á€’á€®".split("_"),
            weekdays: "á€á€”á€„á€ºá€¹á€‚á€”á€½á€±_á€á€”á€„á€ºá€¹á€œá€¬_á€¡á€„á€ºá€¹á€‚á€«_á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸_á€€á€¼á€¬á€žá€•á€á€±á€¸_á€žá€±á€¬á€€á€¼á€¬_á€…á€”á€±".split("_"),
            weekdaysShort: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
            weekdaysMin: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[á€šá€”á€±.] LT [á€™á€¾á€¬]",
                nextDay: "[á€™á€”á€€á€ºá€–á€¼á€”á€º] LT [á€™á€¾á€¬]",
                nextWeek: "dddd LT [á€™á€¾á€¬]",
                lastDay: "[á€™á€”á€±.á€€] LT [á€™á€¾á€¬]",
                lastWeek: "[á€•á€¼á€®á€¸á€á€²á€·á€žá€±á€¬] dddd LT [á€™á€¾á€¬]",
                sameElse: "L"
            },
            relativeTime: {
                future: "á€œá€¬á€™á€Šá€ºá€· %s á€™á€¾á€¬",
                past: "á€œá€½á€”á€ºá€á€²á€·á€žá€±á€¬ %s á€€",
                s: "á€…á€€á€¹á€€á€”á€º.á€¡á€”á€Šá€ºá€¸á€„á€šá€º",
                m: "á€á€…á€ºá€™á€­á€”á€…á€º",
                mm: "%d á€™á€­á€”á€…á€º",
                h: "á€á€…á€ºá€”á€¬á€›á€®",
                hh: "%d á€”á€¬á€›á€®",
                d: "á€á€…á€ºá€›á€€á€º",
                dd: "%d á€›á€€á€º",
                M: "á€á€…á€ºá€œ",
                MM: "%d á€œ",
                y: "á€á€…á€ºá€”á€¾á€…á€º",
                yy: "%d á€”á€¾á€…á€º"
            },
            preparse: function (a) {
                return a.replace(/[áá‚áƒá„á…á†á‡áˆá‰á€]/g, function (a) {
                    return xg[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return wg[a]
                })
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
            weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),
            weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i gÃ¥r kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en mÃ¥ned",
                MM: "%d mÃ¥neder",
                y: "ett Ã¥r",
                yy: "%d Ã¥r"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            1: "à¥§",
            2: "à¥¨",
            3: "à¥©",
            4: "à¥ª",
            5: "à¥«",
            6: "à¥¬",
            7: "à¥­",
            8: "à¥®",
            9: "à¥¯",
            0: "à¥¦"
        }),
        zg = {
            "à¥§": "1",
            "à¥¨": "2",
            "à¥©": "3",
            "à¥ª": "4",
            "à¥«": "5",
            "à¥¬": "6",
            "à¥­": "7",
            "à¥®": "8",
            "à¥¯": "9",
            "à¥¦": "0"
        },
        Ag = (Kf.defineLocale("ne", {
            months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),
            monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),
            weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),
            weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),
            weekdaysMin: "à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),
            longDateFormat: {
                LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
                LTS: "Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
                LLLL: "dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡"
            },
            preparse: function (a) {
                return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (a) {
                    return zg[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return yg[a]
                })
            },
            meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "à¤°à¤¾à¤¤à¤¿" === b ? 4 > a ? a : a + 12 : "à¤¬à¤¿à¤¹à¤¾à¤¨" === b ? a : "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" === b ? a >= 10 ? a : a + 12 : "à¤¸à¤¾à¤à¤" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return 3 > a ? "à¤°à¤¾à¤¤à¤¿" : 12 > a ? "à¤¬à¤¿à¤¹à¤¾à¤¨" : 16 > a ? "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" : 20 > a ? "à¤¸à¤¾à¤à¤" : "à¤°à¤¾à¤¤à¤¿"
            },
            calendar: {
                sameDay: "[à¤†à¤œ] LT",
                nextDay: "[à¤­à¥‹à¤²à¤¿] LT",
                nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",
                lastDay: "[à¤¹à¤¿à¤œà¥‹] LT",
                lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¤®à¤¾",
                past: "%s à¤…à¤—à¤¾à¤¡à¤¿",
                s: "à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£",
                m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",
                mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",
                h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",
                hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾",
                d: "à¤à¤• à¤¦à¤¿à¤¨",
                dd: "%d à¤¦à¤¿à¤¨",
                M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",
                MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾",
                y: "à¤à¤• à¤¬à¤°à¥à¤·",
                yy: "%d à¤¬à¤°à¥à¤·"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),
        Bg = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        Cg = (Kf.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (a, b) {
                return /-MMM-/.test(b) ? Bg[a.month()] : Ag[a.month()]
            },
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "Ã©Ã©n minuut",
                mm: "%d minuten",
                h: "Ã©Ã©n uur",
                hh: "%d uur",
                d: "Ã©Ã©n dag",
                dd: "%d dagen",
                M: "Ã©Ã©n maand",
                MM: "%d maanden",
                y: "Ã©Ã©n jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (a) {
                return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mÃ¥n_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_mÃ¥_ty_on_to_fr_lÃ¸".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I gÃ¥r klokka] LT",
                lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s sidan",
                s: "nokre sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein mÃ¥nad",
                MM: "%d mÃ¥nader",
                y: "eit Ã¥r",
                yy: "%d Ã¥r"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_")),
        Dg = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_"),
        Eg = (Kf.defineLocale("pl", {
            months: function (a, b) {
                return "" === b ? "(" + Dg[a.month()] + "|" + Cg[a.month()] + ")" : /D MMMM/.test(b) ? Dg[a.month()] : Cg[a.month()]
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),
            weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),
            weekdaysShort: "nie_pon_wt_Å›r_czw_pt_sb".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Åšr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DziÅ› o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: "[W] dddd [o] LT",
                lastDay: "[Wczoraj o] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszÅ‚Ä… niedzielÄ™ o] LT";
                        case 3:
                            return "[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
                        case 6:
                            return "[W zeszÅ‚Ä… sobotÄ™ o] LT";
                        default:
                            return "[W zeszÅ‚y] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                m: Bd,
                mm: Bd,
                h: Bd,
                hh: Bd,
                d: "1 dzieÅ„",
                dd: "%d dni",
                M: "miesiÄ…c",
                MM: Bd,
                y: "rok",
                yy: Bd
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("pt-br", {
            months: "Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-Feira_TerÃ§a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_SÃ¡bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
            weekdaysMin: "Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [Ã s] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje Ã s] LT",
                nextDay: "[AmanhÃ£ Ã s] LT",
                nextWeek: "dddd [Ã s] LT",
                lastDay: "[Ontem Ã s] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrÃ¡s",
                s: "poucos segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mÃªs",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº"
        }), Kf.defineLocale("pt", {
            months: "Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingo_Segunda-Feira_TerÃ§a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_SÃ¡bado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
            weekdaysMin: "Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje Ã s] LT",
                nextDay: "[AmanhÃ£ Ã s] LT",
                nextWeek: "dddd [Ã s] LT",
                lastDay: "[Ontem Ã s] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "hÃ¡ %s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mÃªs",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}Âº/,
            ordinal: "%dÂº",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mÃ¢ine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s Ã®n urmÄƒ",
                s: "cÃ¢teva secunde",
                m: "un minut",
                mm: Cd,
                h: "o orÄƒ",
                hh: Cd,
                d: "o zi",
                dd: Cd,
                M: "o lunÄƒ",
                MM: Cd,
                y: "un an",
                yy: Cd
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹|Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i]),
        Fg = (Kf.defineLocale("ru", {
            months: {
                format: "Ð¯Ð½Ð²Ð°Ñ€Ñ_Ð¤ÐµÐ²Ñ€Ð°Ð»Ñ_ÐœÐ°Ñ€Ñ‚Ð°_ÐÐ¿Ñ€ÐµÐ»Ñ_ÐœÐ°Ñ_Ð˜ÑŽÐ½Ñ_Ð˜ÑŽÐ»Ñ_ÐÐ²Ð³ÑƒÑÑ‚Ð°_Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_ÐžÐºÑ‚ÑÐ±Ñ€Ñ_ÐÐ¾ÑÐ±Ñ€Ñ_Ð”ÐµÐºÐ°Ð±Ñ€Ñ".split("_"),
                standalone: "Ð¯Ð½Ð²Ð°Ñ€ÑŒ_Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ_ÐœÐ°Ñ€Ñ‚_ÐÐ¿Ñ€ÐµÐ»ÑŒ_ÐœÐ°Ð¹_Ð˜ÑŽÐ½ÑŒ_Ð˜ÑŽÐ»ÑŒ_ÐÐ²Ð³ÑƒÑÑ‚_Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ_ÐÐ¾ÑÐ±Ñ€ÑŒ_Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_")
            },
            monthsShort: {
                format: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
                standalone: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_")
            },
            weekdays: {
                standalone: "Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_Ð¡Ñ€ÐµÐ´Ð°_Ð§ÐµÑ‚Ð²ÐµÑ€Ð³_ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°_Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),
                format: "Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_Ð¡Ñ€ÐµÐ´Ñƒ_Ð§ÐµÑ‚Ð²ÐµÑ€Ð³_ÐŸÑÑ‚Ð½Ð¸Ñ†Ñƒ_Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"),
                isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?\] ?dddd/
            },
            weekdaysShort: "Ð’Ñ_ÐŸÐ½_Ð’Ñ‚_Ð¡Ñ€_Ð§Ñ‚_ÐŸÑ‚_Ð¡Ð±".split("_"),
            weekdaysMin: "Ð’Ñ_ÐŸÐ½_Ð’Ñ‚_Ð¡Ñ€_Ð§Ñ‚_ÐŸÑ‚_Ð¡Ð±".split("_"),
            monthsParse: Eg,
            longMonthsParse: Eg,
            shortMonthsParse: Eg,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ð³.",
                LLL: "D MMMM YYYY Ð³., HH:mm",
                LLLL: "dddd, D MMMM YYYY Ð³., HH:mm"
            },
            calendar: {
                sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ Ð²] LT",
                nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð° Ð²] LT",
                lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
                nextWeek: function (a) {
                    if (a.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd [Ð²] LT" : "[Ð’] dddd [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd [Ð²] LT"
                    }
                },
                lastWeek: function (a) {
                    if (a.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd [Ð²] LT" : "[Ð’] dddd [Ð²] LT";
                    switch (this.day()) {
                        case 0:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd [Ð²] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd [Ð²] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd [Ð²] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ñ‡ÐµÑ€ÐµÐ· %s",
                past: "%s Ð½Ð°Ð·Ð°Ð´",
                s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
                m: Ed,
                mm: Ed,
                h: "Ñ‡Ð°Ñ",
                hh: Ed,
                d: "Ð´ÐµÐ½ÑŒ",
                dd: Ed,
                M: "Ð¼ÐµÑÑÑ†",
                MM: Ed,
                y: "Ð³Ð¾Ð´",
                yy: Ed
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
            isPM: function (a) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(a)
            },
            meridiem: function (a, b, c) {
                return 4 > a ? "Ð½Ð¾Ñ‡Ð¸" : 12 > a ? "ÑƒÑ‚Ñ€Ð°" : 17 > a ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°"
            },
            ordinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
            ordinal: function (a, b) {
                switch (b) {
                    case "M":
                    case "d":
                    case "DDD":
                        return a + "-Ð¹";
                    case "D":
                        return a + "-Ð³Ð¾";
                    case "w":
                    case "W":
                        return a + "-Ñ";
                    default:
                        return a
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("se", {
            months: "oÄ‘Ä‘ajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅ‹omÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu".split("_"),
            monthsShort: "oÄ‘Ä‘j_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov".split("_"),
            weekdays: "sotnabeaivi_vuossÃ¡rga_maÅ‹Å‹ebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat".split("_"),
            weekdaysShort: "sotn_vuos_maÅ‹_gask_duor_bear_lÃ¡v".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geaÅ¾es",
                past: "maÅ‹it %s",
                s: "moadde sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mÃ¡nnu",
                MM: "%d mÃ¡nut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("si", {
            months: "à¶¢à¶±à·€à·à¶»à·’_à¶´à·™à¶¶à¶»à·€à·à¶»à·’_à¶¸à·à¶»à·Šà¶­à·”_à¶…à¶´à·Šâ€à¶»à·šà¶½à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·à·ƒà·Šà¶­à·”_à·ƒà·à¶´à·Šà¶­à·à¶¸à·Šà¶¶à¶»à·Š_à¶”à¶šà·Šà¶­à·à¶¶à¶»à·Š_à¶±à·œà·€à·à¶¸à·Šà¶¶à¶»à·Š_à¶¯à·™à·ƒà·à¶¸à·Šà¶¶à¶»à·Š".split("_"),
            monthsShort: "à¶¢à¶±_à¶´à·™à¶¶_à¶¸à·à¶»à·Š_à¶…à¶´à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·_à·ƒà·à¶´à·Š_à¶”à¶šà·Š_à¶±à·œà·€à·_à¶¯à·™à·ƒà·".split("_"),
            weekdays: "à¶‰à¶»à·’à¶¯à·_à·ƒà¶³à·”à¶¯à·_à¶…à¶Ÿà·„à¶»à·”à·€à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·Šâ€à¶»à·„à·ƒà·Šà¶´à¶­à·’à¶±à·Šà¶¯à·_à·ƒà·’à¶šà·”à¶»à·à¶¯à·_à·ƒà·™à¶±à·ƒà·”à¶»à·à¶¯à·".split("_"),
            weekdaysShort: "à¶‰à¶»à·’_à·ƒà¶³à·”_à¶…à¶Ÿ_à¶¶à¶¯à·_à¶¶à·Šâ€à¶»à·„_à·ƒà·’à¶šà·”_à·ƒà·™à¶±".split("_"),
            weekdaysMin: "à¶‰_à·ƒ_à¶…_à¶¶_à¶¶à·Šâ€à¶»_à·ƒà·’_à·ƒà·™".split("_"),
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [à·€à·à¶±à·’] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[à¶…à¶¯] LT[à¶§]",
                nextDay: "[à·„à·™à¶§] LT[à¶§]",
                nextWeek: "dddd LT[à¶§]",
                lastDay: "[à¶Šà¶ºà·š] LT[à¶§]",
                lastWeek: "[à¶´à·ƒà·”à¶œà·’à¶º] dddd LT[à¶§]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sà¶šà·’à¶±à·Š",
                past: "%sà¶šà¶§ à¶´à·™à¶»",
                s: "à¶­à¶­à·Šà¶´à¶» à¶šà·’à·„à·’à¶´à¶º",
                m: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·”à·€",
                mm: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·” %d",
                h: "à¶´à·à¶º",
                hh: "à¶´à·à¶º %d",
                d: "à¶¯à·’à¶±à¶º",
                dd: "à¶¯à·’à¶± %d",
                M: "à¶¸à·à·ƒà¶º",
                MM: "à¶¸à·à·ƒ %d",
                y: "à·€à·ƒà¶»",
                yy: "à·€à·ƒà¶» %d"
            },
            ordinalParse: /\d{1,2} à·€à·à¶±à·’/,
            ordinal: function (a) {
                return a + " à·€à·à¶±à·’"
            },
            meridiem: function (a, b, c) {
                return a > 11 ? c ? "à¶´.à·€." : "à¶´à·ƒà·Š à·€à¶»à·”" : c ? "à¶´à·™.à·€." : "à¶´à·™à¶» à·€à¶»à·”"
            }
        }), "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_")),
        Gg = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_"),
        Hg = (Kf.defineLocale("sk", {
            months: Fg,
            monthsShort: Gg,
            weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo Å¡tvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[vÄera o] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulÃº nedeÄ¾u o] LT";
                        case 1:
                        case 2:
                            return "[minulÃ½] dddd [o] LT";
                        case 3:
                            return "[minulÃº stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulÃ½] dddd [o] LT";
                        case 6:
                            return "[minulÃº sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: Gd,
                m: Gd,
                mm: Gd,
                h: Gd,
                hh: Gd,
                d: Gd,
                dd: Gd,
                M: Gd,
                MM: Gd,
                y: Gd,
                yy: Gd
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[vÄeraj ob] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prejÅ¡njo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejÅ¡njo] [sredo] [ob] LT";
                        case 6:
                            return "[prejÅ¡njo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejÅ¡nji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Äez %s",
                past: "pred %s",
                s: Hd,
                m: Hd,
                mm: Hd,
                h: Hd,
                hh: Hd,
                d: Hd,
                dd: Hd,
                M: Hd,
                MM: Hd,
                y: Hd,
                yy: Hd
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"),
            weekdays: "E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"),
            weekdaysShort: "Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_MÃ«_E_P_Sh".split("_"),
            meridiemParse: /PD|MD/,
            isPM: function (a) {
                return "M" === a.charAt(0)
            },
            meridiem: function (a, b, c) {
                return 12 > a ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot nÃ«] LT",
                nextDay: "[NesÃ«r nÃ«] LT",
                nextWeek: "dddd [nÃ«] LT",
                lastDay: "[Dje nÃ«] LT",
                lastWeek: "dddd [e kaluar nÃ«] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nÃ« %s",
                past: "%s mÃ« parÃ«",
                s: "disa sekonda",
                m: "njÃ« minutÃ«",
                mm: "%d minuta",
                h: "njÃ« orÃ«",
                hh: "%d orÃ«",
                d: "njÃ« ditÃ«",
                dd: "%d ditÃ«",
                M: "njÃ« muaj",
                MM: "%d muaj",
                y: "njÃ« vit",
                yy: "%d vite"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            words: {
                m: ["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚", "Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"],
                mm: ["Ð¼Ð¸Ð½ÑƒÑ‚", "Ð¼Ð¸Ð½ÑƒÑ‚Ðµ", "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"],
                h: ["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚", "Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"],
                hh: ["ÑÐ°Ñ‚", "ÑÐ°Ñ‚Ð°", "ÑÐ°Ñ‚Ð¸"],
                dd: ["Ð´Ð°Ð½", "Ð´Ð°Ð½Ð°", "Ð´Ð°Ð½Ð°"],
                MM: ["Ð¼ÐµÑÐµÑ†", "Ð¼ÐµÑÐµÑ†Ð°", "Ð¼ÐµÑÐµÑ†Ð¸"],
                yy: ["Ð³Ð¾Ð´Ð¸Ð½Ð°", "Ð³Ð¾Ð´Ð¸Ð½Ðµ", "Ð³Ð¾Ð´Ð¸Ð½Ð°"]
            },
            correctGrammaticalCase: function (a, b) {
                return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
            },
            translate: function (a, b, c) {
                var d = Hg.words[c];
                return 1 === c.length ? b ? d[0] : d[1] : a + " " + Hg.correctGrammaticalCase(a, d)
            }
        }),
        Ig = (Kf.defineLocale("sr-cyrl", {
            months: ["Ñ˜Ð°Ð½ÑƒÐ°Ñ€", "Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€", "Ð¼Ð°Ñ€Ñ‚", "Ð°Ð¿Ñ€Ð¸Ð»", "Ð¼Ð°Ñ˜", "Ñ˜ÑƒÐ½", "Ñ˜ÑƒÐ»", "Ð°Ð²Ð³ÑƒÑÑ‚", "ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€", "Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€", "Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€", "Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€"],
            monthsShort: ["Ñ˜Ð°Ð½.", "Ñ„ÐµÐ±.", "Ð¼Ð°Ñ€.", "Ð°Ð¿Ñ€.", "Ð¼Ð°Ñ˜", "Ñ˜ÑƒÐ½", "Ñ˜ÑƒÐ»", "Ð°Ð²Ð³.", "ÑÐµÐ¿.", "Ð¾ÐºÑ‚.", "Ð½Ð¾Ð².", "Ð´ÐµÑ†."],
            weekdays: ["Ð½ÐµÐ´ÐµÑ™Ð°", "Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº", "ÑƒÑ‚Ð¾Ñ€Ð°Ðº", "ÑÑ€ÐµÐ´Ð°", "Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº", "Ð¿ÐµÑ‚Ð°Ðº", "ÑÑƒÐ±Ð¾Ñ‚Ð°"],
            weekdaysShort: ["Ð½ÐµÐ´.", "Ð¿Ð¾Ð½.", "ÑƒÑ‚Ð¾.", "ÑÑ€Ðµ.", "Ñ‡ÐµÑ‚.", "Ð¿ÐµÑ‚.", "ÑÑƒÐ±."],
            weekdaysMin: ["Ð½Ðµ", "Ð¿Ð¾", "ÑƒÑ‚", "ÑÑ€", "Ñ‡Ðµ", "Ð¿Ðµ", "ÑÑƒ"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT",
                nextDay: "[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";
                        case 3:
                            return "[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";
                        case 6:
                            return "[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Ñƒ] dddd [Ñƒ] LT"
                    }
                },
                lastDay: "[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT",
                lastWeek: function () {
                    var a = ["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"];
                    return a[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð·Ð° %s",
                past: "Ð¿Ñ€Ðµ %s",
                s: "Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
                m: Hg.translate,
                mm: Hg.translate,
                h: Hg.translate,
                hh: Hg.translate,
                d: "Ð´Ð°Ð½",
                dd: Hg.translate,
                M: "Ð¼ÐµÑÐµÑ†",
                MM: Hg.translate,
                y: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                yy: Hg.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), {
            words: {
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function (a, b) {
                return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
            },
            translate: function (a, b, c) {
                var d = Ig.words[c];
                return 1 === c.length ? b ? d[0] : d[1] : a + " " + Ig.correctGrammaticalCase(a, d)
            }
        }),
        Jg = (Kf.defineLocale("sr", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "Äetvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "Äet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "Äe", "pe", "su"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juÄe u] LT",
                lastWeek: function () {
                    var a = ["[proÅ¡le] [nedelje] [u] LT", "[proÅ¡log] [ponedeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"];
                    return a[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                m: Ig.translate,
                mm: Ig.translate,
                h: Ig.translate,
                hh: Ig.translate,
                d: "dan",
                dd: Ig.translate,
                M: "mesec",
                MM: Ig.translate,
                y: "godinu",
                yy: Ig.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),
            weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),
            weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[IgÃ¥r] LT",
                nextWeek: "[PÃ¥] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "fÃ¶r %s sedan",
                s: "nÃ¥gra sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en mÃ¥nad",
                MM: "%d mÃ¥nader",
                y: "ett Ã¥r",
                yy: "%d Ã¥r"
            },
            ordinalParse: /\d{1,2}(e|a)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";
                return a + c
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), {
            1: "à¯§",
            2: "à¯¨",
            3: "à¯©",
            4: "à¯ª",
            5: "à¯«",
            6: "à¯¬",
            7: "à¯­",
            8: "à¯®",
            9: "à¯¯",
            0: "à¯¦"
        }),
        Kg = {
            "à¯§": "1",
            "à¯¨": "2",
            "à¯©": "3",
            "à¯ª": "4",
            "à¯«": "5",
            "à¯¬": "6",
            "à¯­": "7",
            "à¯®": "8",
            "à¯¯": "9",
            "à¯¦": "0"
        },
        Lg = (Kf.defineLocale("ta", {
            months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
            monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
            weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),
            weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),
            weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[à®‡à®©à¯à®±à¯] LT",
                nextDay: "[à®¨à®¾à®³à¯ˆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT",
                lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à®‡à®²à¯",
                past: "%s à®®à¯à®©à¯",
                s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
                m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",
                mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",
                h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
                hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
                d: "à®’à®°à¯ à®¨à®¾à®³à¯",
                dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯",
                M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯",
                MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯",
                y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",
                yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"
            },
            ordinalParse: /\d{1,2}à®µà®¤à¯/,
            ordinal: function (a) {
                return a + "à®µà®¤à¯"
            },
            preparse: function (a) {
                return a.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, function (a) {
                    return Kg[a]
                })
            },
            postformat: function (a) {
                return a.replace(/\d/g, function (a) {
                    return Jg[a]
                })
            },
            meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯ˆà®•à®±à¯ˆ|à®•à®¾à®²à¯ˆ|à®¨à®£à¯à®ªà®•à®²à¯|à®Žà®±à¯à®ªà®¾à®Ÿà¯|à®®à®¾à®²à¯ˆ/,
            meridiem: function (a, b, c) {
                return 2 > a ? " à®¯à®¾à®®à®®à¯" : 6 > a ? " à®µà¯ˆà®•à®±à¯ˆ" : 10 > a ? " à®•à®¾à®²à¯ˆ" : 14 > a ? " à®¨à®£à¯à®ªà®•à®²à¯" : 18 > a ? " à®Žà®±à¯à®ªà®¾à®Ÿà¯" : 22 > a ? " à®®à®¾à®²à¯ˆ" : " à®¯à®¾à®®à®®à¯"
            },
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "à®¯à®¾à®®à®®à¯" === b ? 2 > a ? a : a + 12 : "à®µà¯ˆà®•à®±à¯ˆ" === b || "à®•à®¾à®²à¯ˆ" === b ? a : "à®¨à®£à¯à®ªà®•à®²à¯" === b && a >= 10 ? a : a + 12
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), Kf.defineLocale("te", {
            months: "à°œà°¨à°µà°°à°¿_à°«à°¿à°¬à±à°°à°µà°°à°¿_à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿à°²à±_à°®à±‡_à°œà±‚à°¨à±_à°œà±‚à°²à±†à±–_à°†à°—à°¸à±à°Ÿà±_à°¸à±†à°ªà±à°Ÿà±†à°‚à°¬à°°à±_à°…à°•à±à°Ÿà±‹à°¬à°°à±_à°¨à°µà°‚à°¬à°°à±_à°¡à°¿à°¸à±†à°‚à°¬à°°à±".split("_"),
            monthsShort: "à°œà°¨._à°«à°¿à°¬à±à°°._à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿._à°®à±‡_à°œà±‚à°¨à±_à°œà±‚à°²à±†à±–_à°†à°—._à°¸à±†à°ªà±._à°…à°•à±à°Ÿà±‹._à°¨à°µ._à°¡à°¿à°¸à±†.".split("_"),
            weekdays: "à°†à°¦à°¿à°µà°¾à°°à°‚_à°¸à±‹à°®à°µà°¾à°°à°‚_à°®à°‚à°—à°³à°µà°¾à°°à°‚_à°¬à±à°§à°µà°¾à°°à°‚_à°—à±à°°à±à°µà°¾à°°à°‚_à°¶à±à°•à±à°°à°µà°¾à°°à°‚_à°¶à°¨à°¿à°µà°¾à°°à°‚".split("_"),
            weekdaysShort: "à°†à°¦à°¿_à°¸à±‹à°®_à°®à°‚à°—à°³_à°¬à±à°§_à°—à±à°°à±_à°¶à±à°•à±à°°_à°¶à°¨à°¿".split("_"),
            weekdaysMin: "à°†_à°¸à±‹_à°®à°‚_à°¬à±_à°—à±_à°¶à±_à°¶".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[à°¨à±‡à°¡à±] LT",
                nextDay: "[à°°à±‡à°ªà±] LT",
                nextWeek: "dddd, LT",
                lastDay: "[à°¨à°¿à°¨à±à°¨] LT",
                lastWeek: "[à°—à°¤] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s à°²à±‹",
                past: "%s à°•à±à°°à°¿à°¤à°‚",
                s: "à°•à±Šà°¨à±à°¨à°¿ à°•à±à°·à°£à°¾à°²à±",
                m: "à°’à°• à°¨à°¿à°®à°¿à°·à°‚",
                mm: "%d à°¨à°¿à°®à°¿à°·à°¾à°²à±",
                h: "à°’à°• à°—à°‚à°Ÿ",
                hh: "%d à°—à°‚à°Ÿà°²à±",
                d: "à°’à°• à°°à±‹à°œà±",
                dd: "%d à°°à±‹à°œà±à°²à±",
                M: "à°’à°• à°¨à±†à°²",
                MM: "%d à°¨à±†à°²à°²à±",
                y: "à°’à°• à°¸à°‚à°µà°¤à±à°¸à°°à°‚",
                yy: "%d à°¸à°‚à°µà°¤à±à°¸à°°à°¾à°²à±"
            },
            ordinalParse: /\d{1,2}à°µ/,
            ordinal: "%dà°µ",
            meridiemParse: /à°°à°¾à°¤à±à°°à°¿|à°‰à°¦à°¯à°‚|à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚|à°¸à°¾à°¯à°‚à°¤à±à°°à°‚/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "à°°à°¾à°¤à±à°°à°¿" === b ? 4 > a ? a : a + 12 : "à°‰à°¦à°¯à°‚" === b ? a : "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" === b ? a >= 10 ? a : a + 12 : "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                return 4 > a ? "à°°à°¾à°¤à±à°°à°¿" : 10 > a ? "à°‰à°¦à°¯à°‚" : 17 > a ? "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" : 20 > a ? "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" : "à°°à°¾à°¤à±à°°à°¿"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), Kf.defineLocale("th", {
            months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"),
            monthsShort: "à¸¡à¸à¸£à¸²_à¸à¸¸à¸¡à¸ à¸²_à¸¡à¸µà¸™à¸²_à¹€à¸¡à¸©à¸²_à¸žà¸¤à¸©à¸ à¸²_à¸¡à¸´à¸–à¸¸à¸™à¸²_à¸à¸£à¸à¸Žà¸²_à¸ªà¸´à¸‡à¸«à¸²_à¸à¸±à¸™à¸¢à¸²_à¸•à¸¸à¸¥à¸²_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²_à¸˜à¸±à¸™à¸§à¸²".split("_"),
            weekdays: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
            weekdaysShort: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
            weekdaysMin: "à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"),
            longDateFormat: {
                LT: "H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ",
                LTS: "H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ s à¸§à¸´à¸™à¸²à¸—à¸µ",
                L: "YYYY/MM/DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ",
                LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ"
            },
            meridiemParse: /à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡|à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡/,
            isPM: function (a) {
                return "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡" === a
            },
            meridiem: function (a, b, c) {
                return 12 > a ? "à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡" : "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
            },
            calendar: {
                sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT",
                lastDay: "[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
                lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "à¸­à¸µà¸ %s",
                past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§",
                s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ",
                m: "1 à¸™à¸²à¸—à¸µ",
                mm: "%d à¸™à¸²à¸—à¸µ",
                h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
                d: "1 à¸§à¸±à¸™",
                dd: "%d à¸§à¸±à¸™",
                M: "1 à¹€à¸”à¸·à¸­à¸™",
                MM: "%d à¹€à¸”à¸·à¸­à¸™",
                y: "1 à¸›à¸µ",
                yy: "%d à¸›à¸µ"
            }
        }), Kf.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ngayon sa] LT",
                nextDay: "[Bukas sa] LT",
                nextWeek: "dddd [sa] LT",
                lastDay: "[Kahapon sa] LT",
                lastWeek: "dddd [huling linggo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function (a) {
                return a
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), "pagh_waâ€™_chaâ€™_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")),
        Mg = (Kf.defineLocale("tlh", {
            months: "teraâ€™ jar waâ€™_teraâ€™ jar chaâ€™_teraâ€™ jar wej_teraâ€™ jar loS_teraâ€™ jar vagh_teraâ€™ jar jav_teraâ€™ jar Soch_teraâ€™ jar chorgh_teraâ€™ jar Hut_teraâ€™ jar waâ€™maH_teraâ€™ jar waâ€™maH waâ€™_teraâ€™ jar waâ€™maH chaâ€™".split("_"),
            monthsShort: "jar waâ€™_jar chaâ€™_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar waâ€™maH_jar waâ€™maH waâ€™_jar waâ€™maH chaâ€™".split("_"),
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[waâ€™leS] LT",
                nextWeek: "LLL",
                lastDay: "[waâ€™Huâ€™] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: Id,
                past: Jd,
                s: "puS lup",
                m: "waâ€™ tup",
                mm: Kd,
                h: "waâ€™ rep",
                hh: Kd,
                d: "waâ€™ jaj",
                dd: Kd,
                M: "waâ€™ jar",
                MM: Kd,
                y: "waâ€™ DIS",
                yy: Kd
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'Ã¼ncÃ¼",
            4: "'Ã¼ncÃ¼",
            100: "'Ã¼ncÃ¼",
            6: "'ncÄ±",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'Ä±ncÄ±",
            90: "'Ä±ncÄ±"
        }),
        Ng = (Kf.defineLocale("tr", {
            months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),
            monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugÃ¼n saat] LT",
                nextDay: "[yarÄ±n saat] LT",
                nextWeek: "[haftaya] dddd [saat] LT",
                lastDay: "[dÃ¼n] LT",
                lastWeek: "[geÃ§en hafta] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s Ã¶nce",
                s: "birkaÃ§ saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gÃ¼n",
                dd: "%d gÃ¼n",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yÄ±l",
                yy: "%d yÄ±l"
            },
            ordinalParse: /\d{1,2}'(inci|nci|Ã¼ncÃ¼|ncÄ±|uncu|Ä±ncÄ±)/,
            ordinal: function (a) {
                if (0 === a) return a + "'Ä±ncÄ±";
                var b = a % 10,
                    c = a % 100 - b,
                    d = a >= 100 ? 100 : null;
                return a + (Mg[b] || Mg[c] || Mg[d])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("tzl", {
            months: "Januar_Fevraglh_MarÃ§_AvrÃ¯u_Mai_GÃ¼n_Julia_Guscht_Setemvar_ListopÃ¤ts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_GÃ¼n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "SÃºladi_LÃºneÃ§i_Maitzi_MÃ¡rcuri_XhÃºadi_ViÃ©nerÃ§i_SÃ¡turi".split("_"),
            weekdaysShort: "SÃºl_LÃºn_Mai_MÃ¡r_XhÃº_ViÃ©_SÃ¡t".split("_"),
            weekdaysMin: "SÃº_LÃº_Ma_MÃ¡_Xh_Vi_SÃ¡".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiem: function (a, b, c) {
                return a > 11 ? c ? "d'o" : "D'O" : c ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi Ã ] LT",
                nextDay: "[demÃ  Ã ] LT",
                nextWeek: "dddd [Ã ] LT",
                lastDay: "[ieiri Ã ] LT",
                lastWeek: "[sÃ¼r el] dddd [lasteu Ã ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: Md,
                m: Md,
                mm: Md,
                h: Md,
                hh: Md,
                d: Md,
                dd: Md,
                M: Md,
                MM: Md,
                y: Md,
                yy: Md
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("tzm-latn", {
            months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                m: "minuá¸",
                mm: "%d minuá¸",
                h: "saÉ›a",
                hh: "%d tassaÉ›in",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), Kf.defineLocale("tzm", {
            months: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
            monthsShort: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
            weekdays: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            weekdaysShort: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            weekdaysMin: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[â´°âµ™â´·âµ… â´´] LT",
                nextDay: "[â´°âµ™â´½â´° â´´] LT",
                nextWeek: "dddd [â´´] LT",
                lastDay: "[â´°âµšâ´°âµâµœ â´´] LT",
                lastWeek: "dddd [â´´] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s",
                past: "âµ¢â´°âµ %s",
                s: "âµ‰âµŽâµ‰â´½",
                m: "âµŽâµ‰âµâµ“â´º",
                mm: "%d âµŽâµ‰âµâµ“â´º",
                h: "âµ™â´°âµ„â´°",
                hh: "%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ",
                d: "â´°âµ™âµ™",
                dd: "%d oâµ™âµ™â´°âµ",
                M: "â´°âµ¢oâµ“âµ”",
                MM: "%d âµ‰âµ¢âµ¢âµ‰âµ”âµ",
                y: "â´°âµ™â´³â´°âµ™",
                yy: "%d âµ‰âµ™â´³â´°âµ™âµ"
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), Kf.defineLocale("uk", {
            months: {
                format: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"),
                standalone: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_")
            },
            monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),
            weekdays: Pd,
            weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY Ñ€.",
                LLL: "D MMMM YYYY Ñ€., HH:mm",
                LLLL: "dddd, D MMMM YYYY Ñ€., HH:mm"
            },
            calendar: {
                sameDay: Qd("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),
                nextDay: Qd("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),
                lastDay: Qd("[Ð’Ñ‡Ð¾Ñ€Ð° "),
                nextWeek: Qd("[Ð£] dddd ["),
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return Qd("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return Qd("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð·Ð° %s",
                past: "%s Ñ‚Ð¾Ð¼Ñƒ",
                s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",
                m: Od,
                mm: Od,
                h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
                hh: Od,
                d: "Ð´ÐµÐ½ÑŒ",
                dd: Od,
                M: "Ð¼Ñ–ÑÑÑ†ÑŒ",
                MM: Od,
                y: "Ñ€Ñ–Ðº",
                yy: Od
            },
            meridiemParse: /Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,
            isPM: function (a) {
                return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(a)
            },
            meridiem: function (a, b, c) {
                return 4 > a ? "Ð½Ð¾Ñ‡Ñ–" : 12 > a ? "Ñ€Ð°Ð½ÐºÑƒ" : 17 > a ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°"
            },
            ordinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
            ordinal: function (a, b) {
                switch (b) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return a + "-Ð¹";
                    case "D":
                        return a + "-Ð³Ð¾";
                    default:
                        return a
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("uz", {
            months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
            monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
            weekdays: "Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"),
            weekdaysShort: "Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"),
            weekdaysMin: "Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                nextDay: "[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]",
                nextWeek: "dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                lastDay: "[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                lastWeek: "[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°",
                past: "Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½",
                s: "Ñ„ÑƒÑ€ÑÐ°Ñ‚",
                m: "Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°",
                mm: "%d Ð´Ð°ÐºÐ¸ÐºÐ°",
                h: "Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚",
                hh: "%d ÑÐ¾Ð°Ñ‚",
                d: "Ð±Ð¸Ñ€ ÐºÑƒÐ½",
                dd: "%d ÐºÑƒÐ½",
                M: "Ð±Ð¸Ñ€ Ð¾Ð¹",
                MM: "%d Ð¾Ð¹",
                y: "Ð±Ð¸Ñ€ Ð¹Ð¸Ð»",
                yy: "%d Ð¹Ð¸Ð»"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), Kf.defineLocale("vi", {
            months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            weekdays: "chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [nÄƒm] YYYY",
                LLL: "D MMMM [nÄƒm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [nÄƒm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[HÃ´m nay lÃºc] LT",
                nextDay: "[NgÃ y mai lÃºc] LT",
                nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT",
                lastDay: "[HÃ´m qua lÃºc] LT",
                lastWeek: "dddd [tuáº§n rá»“i lÃºc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tá»›i",
                past: "%s trÆ°á»›c",
                s: "vÃ i giÃ¢y",
                m: "má»™t phÃºt",
                mm: "%d phÃºt",
                h: "má»™t giá»",
                hh: "%d giá»",
                d: "má»™t ngÃ y",
                dd: "%d ngÃ y",
                M: "má»™t thÃ¡ng",
                MM: "%d thÃ¡ng",
                y: "má»™t nÄƒm",
                yy: "%d nÄƒm"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function (a) {
                return a
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("zh-cn", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "Ahç‚¹mmåˆ†",
                LTS: "Ahç‚¹måˆ†sç§’",
                L: "YYYY-MM-DD",
                LL: "YYYYå¹´MMMDæ—¥",
                LLL: "YYYYå¹´MMMDæ—¥Ahç‚¹mmåˆ†",
                LLLL: "YYYYå¹´MMMDæ—¥ddddAhç‚¹mmåˆ†",
                l: "YYYY-MM-DD",
                ll: "YYYYå¹´MMMDæ—¥",
                lll: "YYYYå¹´MMMDæ—¥Ahç‚¹mmåˆ†",
                llll: "YYYYå¹´MMMDæ—¥ddddAhç‚¹mmåˆ†"
            },
            meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "å‡Œæ™¨" === b || "æ—©ä¸Š" === b || "ä¸Šåˆ" === b ? a : "ä¸‹åˆ" === b || "æ™šä¸Š" === b ? a + 12 : a >= 11 ? a : a + 12
            },
            meridiem: function (a, b, c) {
                var d = 100 * a + b;
                return 600 > d ? "å‡Œæ™¨" : 900 > d ? "æ—©ä¸Š" : 1130 > d ? "ä¸Šåˆ" : 1230 > d ? "ä¸­åˆ" : 1800 > d ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: function () {
                    return 0 === this.minutes() ? "[ä»Šå¤©]Ah[ç‚¹æ•´]" : "[ä»Šå¤©]LT"
                },
                nextDay: function () {
                    return 0 === this.minutes() ? "[æ˜Žå¤©]Ah[ç‚¹æ•´]" : "[æ˜Žå¤©]LT"
                },
                lastDay: function () {
                    return 0 === this.minutes() ? "[æ˜¨å¤©]Ah[ç‚¹æ•´]" : "[æ˜¨å¤©]LT"
                },
                nextWeek: function () {
                    var a, b;
                    return a = Kf().startOf("week"), b = this.unix() - a.unix() >= 604800 ? "[ä¸‹]" : "[æœ¬]", 0 === this.minutes() ? b + "dddAhç‚¹æ•´" : b + "dddAhç‚¹mm"
                },
                lastWeek: function () {
                    var a, b;
                    return a = Kf().startOf("week"), b = this.unix() < a.unix() ? "[ä¸Š]" : "[æœ¬]", 0 === this.minutes() ? b + "dddAhç‚¹æ•´" : b + "dddAhç‚¹mm"
                },
                sameElse: "LL"
            },
            ordinalParse: /\d{1,2}(æ—¥|æœˆ|å‘¨)/,
            ordinal: function (a, b) {
                switch (b) {
                    case "d":
                    case "D":
                    case "DDD":
                        return a + "æ—¥";
                    case "M":
                        return a + "æœˆ";
                    case "w":
                    case "W":
                        return a + "å‘¨";
                    default:
                        return a
                }
            },
            relativeTime: {
                future: "%så†…",
                past: "%så‰",
                s: "å‡ ç§’",
                m: "1 åˆ†é’Ÿ",
                mm: "%d åˆ†é’Ÿ",
                h: "1 å°æ—¶",
                hh: "%d å°æ—¶",
                d: "1 å¤©",
                dd: "%d å¤©",
                M: "1 ä¸ªæœˆ",
                MM: "%d ä¸ªæœˆ",
                y: "1 å¹´",
                yy: "%d å¹´"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), Kf.defineLocale("zh-tw", {
            months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
            monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
            weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
            weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
            weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
            longDateFormat: {
                LT: "Ahé»žmmåˆ†",
                LTS: "Ahé»žmåˆ†sç§’",
                L: "YYYYå¹´MMMDæ—¥",
                LL: "YYYYå¹´MMMDæ—¥",
                LLL: "YYYYå¹´MMMDæ—¥Ahé»žmmåˆ†",
                LLLL: "YYYYå¹´MMMDæ—¥ddddAhé»žmmåˆ†",
                l: "YYYYå¹´MMMDæ—¥",
                ll: "YYYYå¹´MMMDæ—¥",
                lll: "YYYYå¹´MMMDæ—¥Ahé»žmmåˆ†",
                llll: "YYYYå¹´MMMDæ—¥ddddAhé»žmmåˆ†"
            },
            meridiemParse: /æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
            meridiemHour: function (a, b) {
                return 12 === a && (a = 0), "æ—©ä¸Š" === b || "ä¸Šåˆ" === b ? a : "ä¸­åˆ" === b ? a >= 11 ? a : a + 12 : "ä¸‹åˆ" === b || "æ™šä¸Š" === b ? a + 12 : void 0
            },
            meridiem: function (a, b, c) {
                var d = 100 * a + b;
                return 900 > d ? "æ—©ä¸Š" : 1130 > d ? "ä¸Šåˆ" : 1230 > d ? "ä¸­åˆ" : 1800 > d ? "ä¸‹åˆ" : "æ™šä¸Š"
            },
            calendar: {
                sameDay: "[ä»Šå¤©]LT",
                nextDay: "[æ˜Žå¤©]LT",
                nextWeek: "[ä¸‹]ddddLT",
                lastDay: "[æ˜¨å¤©]LT",
                lastWeek: "[ä¸Š]ddddLT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
            ordinal: function (a, b) {
                switch (b) {
                    case "d":
                    case "D":
                    case "DDD":
                        return a + "æ—¥";
                    case "M":
                        return a + "æœˆ";
                    case "w":
                    case "W":
                        return a + "é€±";
                    default:
                        return a
                }
            },
            relativeTime: {
                future: "%så…§",
                past: "%så‰",
                s: "å¹¾ç§’",
                m: "ä¸€åˆ†é˜",
                mm: "%dåˆ†é˜",
                h: "ä¸€å°æ™‚",
                hh: "%då°æ™‚",
                d: "ä¸€å¤©",
                dd: "%då¤©",
                M: "ä¸€å€‹æœˆ",
                MM: "%då€‹æœˆ",
                y: "ä¸€å¹´",
                yy: "%då¹´"
            }
        }), Kf);
    return Ng.locale("en"), Ng
});
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.3
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
! function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
    }
}(function () {
    return function o(r, s, l) {
        function u(e, t) {
            if (!s[e]) {
                if (!r[e]) {
                    var i = "function" == typeof require && require;
                    if (!t && i) return i(e, !0);
                    if (d) return d(e, !0);
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                var a = s[e] = {
                    exports: {}
                };
                r[e][0].call(a.exports, function (t) {
                    return u(r[e][1][t] || t)
                }, a, a.exports, o, r, s, l)
            }
            return s[e].exports
        }
        for (var d = "function" == typeof require && require, t = 0; t < l.length; t++) u(l[t]);
        return u
    }({
        1: [function (t, e, i) { }, {}],
        2: [function (t, e, i) {
            var o = t(6);

            function n(t) {
                if (t) {
                    var e = [0, 0, 0],
                        i = 1,
                        n = t.match(/^#([a-fA-F0-9]{3})$/i);
                    if (n) {
                        n = n[1];
                        for (var a = 0; a < e.length; a++) e[a] = parseInt(n[a] + n[a], 16)
                    } else if (n = t.match(/^#([a-fA-F0-9]{6})$/i)) {
                        n = n[1];
                        for (a = 0; a < e.length; a++) e[a] = parseInt(n.slice(2 * a, 2 * a + 2), 16)
                    } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (a = 0; a < e.length; a++) e[a] = parseInt(n[a + 1]);
                        i = parseFloat(n[4])
                    } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (a = 0; a < e.length; a++) e[a] = Math.round(2.55 * parseFloat(n[a + 1]));
                        i = parseFloat(n[4])
                    } else if (n = t.match(/(\w+)/)) {
                        if ("transparent" == n[1]) return [0, 0, 0, 0];
                        if (!(e = o[n[1]])) return
                    }
                    for (a = 0; a < e.length; a++) e[a] = d(e[a], 0, 255);
                    return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e
                }
            }

            function a(t) {
                if (t) {
                    var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var i = parseFloat(e[4]);
                        return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function r(t) {
                if (t) {
                    var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var i = parseFloat(e[4]);
                        return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function s(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function l(t, e) {
                return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
            }

            function u(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function d(t, e, i) {
                return Math.min(Math.max(e, t), i)
            }

            function c(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            e.exports = {
                getRgba: n,
                getHsla: a,
                getRgb: function (t) {
                    var e = n(t);
                    return e && e.slice(0, 3)
                },
                getHsl: function (t) {
                    var e = a(t);
                    return e && e.slice(0, 3)
                },
                getHwb: r,
                getAlpha: function (t) {
                    var e = n(t); {
                        if (e) return e[3];
                        if (e = a(t)) return e[3];
                        if (e = r(t)) return e[3]
                    }
                },
                hexString: function (t) {
                    return "#" + c(t[0]) + c(t[1]) + c(t[2])
                },
                rgbString: function (t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return s(t, e);
                    return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                },
                rgbaString: s,
                percentString: function (t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return l(t, e);
                    var i = Math.round(t[0] / 255 * 100),
                        n = Math.round(t[1] / 255 * 100),
                        a = Math.round(t[2] / 255 * 100);
                    return "rgb(" + i + "%, " + n + "%, " + a + "%)"
                },
                percentaString: l,
                hslString: function (t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return u(t, e);
                    return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                },
                hslaString: u,
                hwbString: function (t, e) {
                    void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                    return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                },
                keyword: function (t) {
                    return h[t.slice(0, 3)]
                }
            };
            var h = {};
            for (var f in o) h[o[f]] = f
        }, {
            6: 6
        }],
        3: [function (t, e, i) {
            var d = t(5),
                n = t(2),
                r = function (t) {
                    return t instanceof r ? t : this instanceof r ? (this.valid = !1, this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    }, void ("string" == typeof t ? (e = n.getRgba(t)) ? this.setValues("rgb", e) : (e = n.getHsla(t)) ? this.setValues("hsl", e) : (e = n.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new r(t);
                    var e
                };
            r.prototype = {
                isValid: function () {
                    return this.valid
                },
                rgb: function () {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function () {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function () {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function () {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function () {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function () {
                    return this.values.rgb
                },
                hslArray: function () {
                    return this.values.hsl
                },
                hsvArray: function () {
                    return this.values.hsv
                },
                hwbArray: function () {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function () {
                    return this.values.cmyk
                },
                rgbaArray: function () {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function () {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function (t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                },
                red: function (t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function (t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function (t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function (t) {
                    return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                },
                saturation: function (t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function (t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function (t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function (t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function (t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function (t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function (t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function (t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function (t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function (t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function () {
                    return n.hexString(this.values.rgb)
                },
                rgbString: function () {
                    return n.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function () {
                    return n.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function () {
                    return n.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function () {
                    return n.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function () {
                    return n.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function () {
                    return n.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function () {
                    return n.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function () {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function () {
                    for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                        var n = t[i] / 255;
                        e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function (t) {
                    var e = this.luminosity(),
                        i = t.luminosity();
                    return i < e ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
                },
                level: function (t) {
                    var e = this.contrast(t);
                    return 7.1 <= e ? "AAA" : 4.5 <= e ? "AA" : ""
                },
                dark: function () {
                    var t = this.values.rgb;
                    return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                },
                light: function () {
                    return !this.dark()
                },
                negate: function () {
                    for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                },
                lighten: function (t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                },
                darken: function (t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                },
                saturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                },
                desaturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                },
                whiten: function (t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                },
                blacken: function (t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                },
                greyscale: function () {
                    var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                },
                clearer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                },
                opaquer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                },
                rotate: function (t) {
                    var e = this.values.hsl,
                        i = (e[0] + t) % 360;
                    return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
                },
                mix: function (t, e) {
                    var i = this,
                        n = t,
                        a = void 0 === e ? .5 : e,
                        o = 2 * a - 1,
                        r = i.alpha() - n.alpha(),
                        s = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
                        l = 1 - s;
                    return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * a + n.alpha() * (1 - a))
                },
                toJSON: function () {
                    return this.rgb()
                },
                clone: function () {
                    var t, e, i = new r,
                        n = this.values,
                        a = i.values;
                    for (var o in n) n.hasOwnProperty(o) && (t = n[o], "[object Array]" === (e = {}.toString.call(t)) ? a[o] = t.slice(0) : "[object Number]" === e ? a[o] = t : console.error("unexpected color value:", t));
                    return i
                }
            }, r.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, r.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, r.prototype.getValues = function (t) {
                for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                return 1 !== e.alpha && (i.a = e.alpha), i
            }, r.prototype.setValues = function (t, e) {
                var i, n, a = this.values,
                    o = this.spaces,
                    r = this.maxes,
                    s = 1;
                if (this.valid = !0, "alpha" === t) s = e;
                else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
                    s = e.a
                } else if (void 0 !== e[o[t][0]]) {
                    var l = o[t];
                    for (i = 0; i < t.length; i++) a[t][i] = e[l[i]];
                    s = e.alpha
                }
                if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;
                for (i = 0; i < t.length; i++) n = Math.max(0, Math.min(r[t][i], a[t][i])), a[t][i] = Math.round(n);
                for (var u in o) u !== t && (a[u] = d[t][u](a[t]));
                return !0
            }, r.prototype.setSpace = function (t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
            }, r.prototype.setChannel = function (t, e, i) {
                var n = this.values[t];
                return void 0 === i ? n[e] : (i === n[e] || (n[e] = i, this.setValues(t, n)), this)
            }, "undefined" != typeof window && (window.Color = r), e.exports = r
        }, {
            2: 2,
            5: 5
        }],
        4: [function (t, e, i) {
            function a(t) {
                var e, i, n = t[0] / 255,
                    a = t[1] / 255,
                    o = t[2] / 255,
                    r = Math.min(n, a, o),
                    s = Math.max(n, a, o),
                    l = s - r;
                return s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i]
            }

            function n(t) {
                var e, i, n = t[0],
                    a = t[1],
                    o = t[2],
                    r = Math.min(n, a, o),
                    s = Math.max(n, a, o),
                    l = s - r;
                return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
            }

            function o(t) {
                var e = t[0],
                    i = t[1],
                    n = t[2];
                return [a(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, n))), 100 * (n = 1 - 1 / 255 * Math.max(e, Math.max(i, n)))]
            }

            function s(t) {
                var e, i = t[0] / 255,
                    n = t[1] / 255,
                    a = t[2] / 255;
                return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
            }

            function l(t) {
                return S[JSON.stringify(t)]
            }

            function u(t) {
                var e = t[0] / 255,
                    i = t[1] / 255,
                    n = t[2] / 255;
                return [100 * (.4124 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = .04045 < i ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = .04045 < n ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
            }

            function d(t) {
                var e = u(t),
                    i = e[0],
                    n = e[1],
                    a = e[2];
                return n /= 100, a /= 108.883, i = .008856 < (i /= 95.047) ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = .008856 < a ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
            }

            function c(t) {
                var e, i, n, a, o, r = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100;
                if (0 == s) return [o = 255 * l, o, o];
                e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
                for (var u = 0; u < 3; u++)(n = r + 1 / 3 * -(u - 1)) < 0 && n++, 1 < n && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * o;
                return a
            }

            function h(t) {
                var e = t[0] / 60,
                    i = t[1] / 100,
                    n = t[2] / 100,
                    a = Math.floor(e) % 6,
                    o = e - Math.floor(e),
                    r = 255 * n * (1 - i),
                    s = 255 * n * (1 - i * o),
                    l = 255 * n * (1 - i * (1 - o));
                n *= 255;
                switch (a) {
                    case 0:
                        return [n, l, r];
                    case 1:
                        return [s, n, r];
                    case 2:
                        return [r, n, l];
                    case 3:
                        return [r, s, n];
                    case 4:
                        return [l, r, n];
                    case 5:
                        return [n, r, s]
                }
            }

            function f(t) {
                var e, i, n, a, o = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100,
                    u = s + l;
                switch (1 < u && (s /= u, l /= u), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
                    default:
                    case 6:
                    case 0:
                        r = i, g = a, b = s;
                        break;
                    case 1:
                        r = a, g = i, b = s;
                        break;
                    case 2:
                        r = s, g = i, b = a;
                        break;
                    case 3:
                        r = s, g = a, b = i;
                        break;
                    case 4:
                        r = a, g = s, b = i;
                        break;
                    case 5:
                        r = i, g = s, b = a
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function p(t) {
                var e = t[0] / 100,
                    i = t[1] / 100,
                    n = t[2] / 100,
                    a = t[3] / 100;
                return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))]
            }

            function m(t) {
                var e, i, n, a = t[0] / 100,
                    o = t[1] / 100,
                    r = t[2] / 100;
                return i = -.9689 * a + 1.8758 * o + .0415 * r, n = .0557 * a + -.204 * o + 1.057 * r, e = .0031308 < (e = 3.2406 * a + -1.5372 * o + -.4986 * r) ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = .0031308 < i ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
            }

            function v(t) {
                var e = t[0],
                    i = t[1],
                    n = t[2];
                return i /= 100, n /= 108.883, e = .008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
            }

            function x(t) {
                var e, i, n, a, o = t[0],
                    r = t[1],
                    s = t[2];
                return a = o <= 8 ? (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)]
            }

            function y(t) {
                var e, i = t[0],
                    n = t[1],
                    a = t[2];
                return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e]
            }

            function k(t) {
                return m(x(t))
            }

            function M(t) {
                var e, i = t[0],
                    n = t[1];
                return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
            }

            function w(t) {
                return C[t]
            }
            e.exports = {
                rgb2hsl: a,
                rgb2hsv: n,
                rgb2hwb: o,
                rgb2cmyk: s,
                rgb2keyword: l,
                rgb2xyz: u,
                rgb2lab: d,
                rgb2lch: function (t) {
                    return y(d(t))
                },
                hsl2rgb: c,
                hsl2hsv: function (t) {
                    var e = t[0],
                        i = t[1] / 100,
                        n = t[2] / 100;
                    return 0 !== n ? [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)] : [0, 0, 0]
                },
                hsl2hwb: function (t) {
                    return o(c(t))
                },
                hsl2cmyk: function (t) {
                    return s(c(t))
                },
                hsl2keyword: function (t) {
                    return l(c(t))
                },
                hsv2rgb: h,
                hsv2hsl: function (t) {
                    var e, i, n = t[0],
                        a = t[1] / 100,
                        o = t[2] / 100;
                    return e = a * o, [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
                },
                hsv2hwb: function (t) {
                    return o(h(t))
                },
                hsv2cmyk: function (t) {
                    return s(h(t))
                },
                hsv2keyword: function (t) {
                    return l(h(t))
                },
                hwb2rgb: f,
                hwb2hsl: function (t) {
                    return a(f(t))
                },
                hwb2hsv: function (t) {
                    return n(f(t))
                },
                hwb2cmyk: function (t) {
                    return s(f(t))
                },
                hwb2keyword: function (t) {
                    return l(f(t))
                },
                cmyk2rgb: p,
                cmyk2hsl: function (t) {
                    return a(p(t))
                },
                cmyk2hsv: function (t) {
                    return n(p(t))
                },
                cmyk2hwb: function (t) {
                    return o(p(t))
                },
                cmyk2keyword: function (t) {
                    return l(p(t))
                },
                keyword2rgb: w,
                keyword2hsl: function (t) {
                    return a(w(t))
                },
                keyword2hsv: function (t) {
                    return n(w(t))
                },
                keyword2hwb: function (t) {
                    return o(w(t))
                },
                keyword2cmyk: function (t) {
                    return s(w(t))
                },
                keyword2lab: function (t) {
                    return d(w(t))
                },
                keyword2xyz: function (t) {
                    return u(w(t))
                },
                xyz2rgb: m,
                xyz2lab: v,
                xyz2lch: function (t) {
                    return y(v(t))
                },
                lab2xyz: x,
                lab2rgb: k,
                lab2lch: y,
                lch2lab: M,
                lch2xyz: function (t) {
                    return x(M(t))
                },
                lch2rgb: function (t) {
                    return k(M(t))
                }
            };
            var C = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            },
                S = {};
            for (var _ in C) S[JSON.stringify(C[_])] = _
        }, {}],
        5: [function (t, e, i) {
            var a = t(4),
                o = function () {
                    return new u
                };
            for (var n in a) {
                o[n + "Raw"] = function (e) {
                    return function (t) {
                        return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), a[e](t)
                    }
                }(n);
                var r = /(\w+)2(\w+)/.exec(n),
                    s = r[1],
                    l = r[2];
                (o[s] = o[s] || {})[l] = o[n] = function (n) {
                    return function (t) {
                        "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                        var e = a[n](t);
                        if ("string" == typeof e || void 0 === e) return e;
                        for (var i = 0; i < e.length; i++) e[i] = Math.round(e[i]);
                        return e
                    }
                }(n)
            }
            var u = function () {
                this.convs = {}
            };
            u.prototype.routeSpace = function (t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
            }, u.prototype.setValues = function (t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, u.prototype.getValues = function (t) {
                var e = this.convs[t];
                if (!e) {
                    var i = this.space,
                        n = this.convs[i];
                    e = o[i][t](n), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (e) {
                u.prototype[e] = function (t) {
                    return this.routeSpace(e, arguments)
                }
            }), e.exports = o
        }, {
            4: 4
        }],
        6: [function (t, e, i) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}],
        7: [function (t, e, i) {
            var n = t(30)();
            n.helpers = t(46), t(28)(n), n.Animation = t(22), n.animationService = t(23), n.defaults = t(26), n.Element = t(27), n.elements = t(41), n.Interaction = t(29), n.layouts = t(31), n.platform = t(49), n.plugins = t(32), n.Scale = t(33), n.scaleService = t(34), n.Ticks = t(35), n.Tooltip = t(36), t(24)(n), t(25)(n), t(56)(n), t(54)(n), t(55)(n), t(57)(n), t(58)(n), t(59)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
            var a = t(50);
            for (var o in a) a.hasOwnProperty(o) && n.plugins.register(a[o]);
            n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = a.legend._element, n.Title = a.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            41: 41,
            46: 46,
            49: 49,
            50: 50,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            58: 58,
            59: 59,
            8: 8,
            9: 9
        }],
        8: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Bar = function (t, e) {
                    return e.type = "bar", new i(t, e)
                }
            }
        }, {}],
        9: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Bubble = function (t, e) {
                    return e.type = "bubble", new i(t, e)
                }
            }
        }, {}],
        10: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Doughnut = function (t, e) {
                    return e.type = "doughnut", new i(t, e)
                }
            }
        }, {}],
        11: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Line = function (t, e) {
                    return e.type = "line", new i(t, e)
                }
            }
        }, {}],
        12: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.PolarArea = function (t, e) {
                    return e.type = "polarArea", new i(t, e)
                }
            }
        }, {}],
        13: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Radar = function (t, e) {
                    return e.type = "radar", new i(t, e)
                }
            }
        }, {}],
        14: [function (t, e, i) {
            "use strict";
            e.exports = function (i) {
                i.Scatter = function (t, e) {
                    return e.type = "scatter", new i(t, e)
                }
            }
        }, {}],
        15: [function (t, e, i) {
            "use strict";
            var n = t(26),
                a = t(41),
                S = t(46);
            n._set("bar", {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }), n._set("horizontalBar", {
                hover: {
                    mode: "index",
                    axis: "y"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function (t, e) {
                            var i = "";
                            return 0 < t.length && (t[0].yLabel ? i = t[0].yLabel : 0 < e.labels.length && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                        },
                        label: function (t, e) {
                            return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                        }
                    },
                    mode: "index",
                    axis: "y"
                }
            }), e.exports = function (e) {
                e.controllers.bar = e.DatasetController.extend({
                    dataElementType: a.Rectangle,
                    initialize: function () {
                        var t;
                        e.DatasetController.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
                    },
                    update: function (t) {
                        var e, i, n = this.getMeta().data;
                        for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
                    },
                    updateElement: function (t, e, i) {
                        var n = this,
                            a = n.chart,
                            o = n.getMeta(),
                            r = n.getDataset(),
                            s = t.custom || {},
                            l = a.options.elements.rectangle;
                        t._xScale = n.getScaleForId(o.xAxisID), t._yScale = n.getScaleForId(o.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                            datasetLabel: r.label,
                            label: a.data.labels[e],
                            borderSkipped: s.borderSkipped ? s.borderSkipped : l.borderSkipped,
                            backgroundColor: s.backgroundColor ? s.backgroundColor : S.valueAtIndexOrDefault(r.backgroundColor, e, l.backgroundColor),
                            borderColor: s.borderColor ? s.borderColor : S.valueAtIndexOrDefault(r.borderColor, e, l.borderColor),
                            borderWidth: s.borderWidth ? s.borderWidth : S.valueAtIndexOrDefault(r.borderWidth, e, l.borderWidth)
                        }, n.updateElementGeometry(t, e, i), t.pivot()
                    },
                    updateElementGeometry: function (t, e, i) {
                        var n = this,
                            a = t._model,
                            o = n.getValueScale(),
                            r = o.getBasePixel(),
                            s = o.isHorizontal(),
                            l = n._ruler || n.getRuler(),
                            u = n.calculateBarValuePixels(n.index, e),
                            d = n.calculateBarIndexPixels(n.index, e, l);
                        a.horizontal = s, a.base = i ? r : u.base, a.x = s ? i ? r : u.head : d.center, a.y = s ? d.center : i ? r : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size
                    },
                    getValueScaleId: function () {
                        return this.getMeta().yAxisID
                    },
                    getIndexScaleId: function () {
                        return this.getMeta().xAxisID
                    },
                    getValueScale: function () {
                        return this.getScaleForId(this.getValueScaleId())
                    },
                    getIndexScale: function () {
                        return this.getScaleForId(this.getIndexScaleId())
                    },
                    _getStacks: function (t) {
                        var e, i, n = this.chart,
                            a = this.getIndexScale().options.stacked,
                            o = void 0 === t ? n.data.datasets.length : t + 1,
                            r = [];
                        for (e = 0; e < o; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === r.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);
                        return r
                    },
                    getStackCount: function () {
                        return this._getStacks().length
                    },
                    getStackIndex: function (t, e) {
                        var i = this._getStacks(t),
                            n = void 0 !== e ? i.indexOf(e) : -1;
                        return -1 === n ? i.length - 1 : n
                    },
                    getRuler: function () {
                        var t, e, i = this.getIndexScale(),
                            n = this.getStackCount(),
                            a = this.index,
                            o = i.isHorizontal(),
                            r = o ? i.left : i.top,
                            s = r + (o ? i.width : i.height),
                            l = [];
                        for (t = 0, e = this.getMeta().data.length; t < e; ++t) l.push(i.getPixelForValue(null, t, a));
                        return {
                            min: S.isNullOrUndef(i.options.barThickness) ? function (t, e) {
                                var i, n, a, o, r = t.isHorizontal() ? t.width : t.height,
                                    s = t.getTicks();
                                for (a = 1, o = e.length; a < o; ++a) r = Math.min(r, e[a] - e[a - 1]);
                                for (a = 0, o = s.length; a < o; ++a) n = t.getPixelForTick(a), r = 0 < a ? Math.min(r, n - i) : r, i = n;
                                return r
                            }(i, l) : -1,
                            pixels: l,
                            start: r,
                            end: s,
                            stackCount: n,
                            scale: i
                        }
                    },
                    calculateBarValuePixels: function (t, e) {
                        var i, n, a, o, r, s, l = this.chart,
                            u = this.getMeta(),
                            d = this.getValueScale(),
                            c = l.data.datasets,
                            h = d.getRightValue(c[t].data[e]),
                            f = d.options.stacked,
                            g = u.stack,
                            p = 0;
                        if (f || void 0 === f && void 0 !== g)
                            for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === g && n.controller.getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = d.getRightValue(c[i].data[e]), (h < 0 && a < 0 || 0 <= h && 0 < a) && (p += a));
                        return o = d.getPixelForValue(p), {
                            size: s = ((r = d.getPixelForValue(p + h)) - o) / 2,
                            base: o,
                            head: r,
                            center: r + s / 2
                        }
                    },
                    calculateBarIndexPixels: function (t, e, i) {
                        var n, a, o, r, s, l, u, d, c, h, f, g, p, m, v, b, x, y = i.scale.options,
                            k = "flex" === y.barThickness ? (c = e, f = y, p = (h = i).pixels, m = p[c], v = 0 < c ? p[c - 1] : null, b = c < p.length - 1 ? p[c + 1] : null, x = f.categoryPercentage, null === v && (v = m - (null === b ? h.end - m : b - m)), null === b && (b = m + m - v), g = m - (m - v) / 2 * x, {
                                chunk: (b - v) / 2 * x / h.stackCount,
                                ratio: f.barPercentage,
                                start: g
                            }) : (n = e, a = i, l = (o = y).barThickness, u = a.stackCount, d = a.pixels[n], s = S.isNullOrUndef(l) ? (r = a.min * o.categoryPercentage, o.barPercentage) : (r = l * u, 1), {
                                chunk: r / u,
                                ratio: s,
                                start: d - r / 2
                            }),
                            M = this.getStackIndex(t, this.getMeta().stack),
                            w = k.start + k.chunk * M + k.chunk / 2,
                            C = Math.min(S.valueOrDefault(y.maxBarThickness, 1 / 0), k.chunk * k.ratio);
                        return {
                            base: w - C / 2,
                            head: w + C / 2,
                            center: w,
                            size: C
                        }
                    },
                    draw: function () {
                        var t = this.chart,
                            e = this.getValueScale(),
                            i = this.getMeta().data,
                            n = this.getDataset(),
                            a = i.length,
                            o = 0;
                        for (S.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) isNaN(e.getRightValue(n.data[o])) || i[o].draw();
                        S.canvas.unclipArea(t.ctx)
                    }
                }), e.controllers.horizontalBar = e.controllers.bar.extend({
                    getValueScaleId: function () {
                        return this.getMeta().xAxisID
                    },
                    getIndexScaleId: function () {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        16: [function (t, e, i) {
            "use strict";
            var n = t(26),
                a = t(41),
                g = t(46);
            n._set("bubble", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t, e) {
                            var i = e.datasets[t.datasetIndex].label || "",
                                n = e.datasets[t.datasetIndex].data[t.index];
                            return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                        }
                    }
                }
            }), e.exports = function (t) {
                t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: a.Point,
                    update: function (i) {
                        var n = this,
                            t = n.getMeta().data;
                        g.each(t, function (t, e) {
                            n.updateElement(t, e, i)
                        })
                    },
                    updateElement: function (t, e, i) {
                        var n = this,
                            a = n.getMeta(),
                            o = t.custom || {},
                            r = n.getScaleForId(a.xAxisID),
                            s = n.getScaleForId(a.yAxisID),
                            l = n._resolveElementOptions(t, e),
                            u = n.getDataset().data[e],
                            d = n.index,
                            c = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                            h = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                        t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            rotation: l.rotation,
                            radius: i ? 0 : l.radius,
                            skip: o.skip || isNaN(c) || isNaN(h),
                            x: c,
                            y: h
                        }, t.pivot()
                    },
                    setHoverStyle: function (t) {
                        var e = t._model,
                            i = t._options;
                        t.$previousStyle = {
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth,
                            radius: e.radius
                        }, e.backgroundColor = g.valueOrDefault(i.hoverBackgroundColor, g.getHoverColor(i.backgroundColor)), e.borderColor = g.valueOrDefault(i.hoverBorderColor, g.getHoverColor(i.borderColor)), e.borderWidth = g.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
                    },
                    _resolveElementOptions: function (t, e) {
                        var i, n, a, o = this.chart,
                            r = o.data.datasets[this.index],
                            s = t.custom || {},
                            l = o.options.elements.point,
                            u = g.options.resolve,
                            d = r.data[e],
                            c = {},
                            h = {
                                chart: o,
                                dataIndex: e,
                                dataset: r,
                                datasetIndex: this.index
                            },
                            f = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                        for (i = 0, n = f.length; i < n; ++i) c[a = f[i]] = u([s[a], r[a], l[a]], h, e);
                        return c.radius = u([s.radius, d ? d.r : void 0, r.radius, l.radius], h, e), c
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        17: [function (t, e, i) {
            "use strict";
            var n = t(26),
                a = t(41),
                A = t(46);
            n._set("doughnut", {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                hover: {
                    mode: "single"
                },
                legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data,
                        n = i.datasets,
                        a = i.labels;
                    if (n.length)
                        for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (l) {
                            var u = l.data;
                            return u.labels.length && u.datasets.length ? u.labels.map(function (t, e) {
                                var i = l.getDatasetMeta(0),
                                    n = u.datasets[0],
                                    a = i.data[e],
                                    o = a && a.custom || {},
                                    r = A.valueAtIndexOrDefault,
                                    s = l.options.elements.arc;
                                return {
                                    text: t,
                                    fillStyle: o.backgroundColor ? o.backgroundColor : r(n.backgroundColor, e, s.backgroundColor),
                                    strokeStyle: o.borderColor ? o.borderColor : r(n.borderColor, e, s.borderColor),
                                    lineWidth: o.borderWidth ? o.borderWidth : r(n.borderWidth, e, s.borderWidth),
                                    hidden: isNaN(n.data[e]) || i.data[e].hidden,
                                    index: e
                                }
                            }) : []
                        }
                    },
                    onClick: function (t, e) {
                        var i, n, a, o = e.index,
                            r = this.chart;
                        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
                        r.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -.5 * Math.PI,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t, e) {
                            var i = e.labels[t.index],
                                n = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return A.isArray(i) ? (i = i.slice())[0] += n : i += n, i
                        }
                    }
                }
            }), n._set("pie", A.clone(n.doughnut)), n._set("pie", {
                cutoutPercentage: 0
            }), e.exports = function (t) {
                t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: a.Arc,
                    linkScales: A.noop,
                    getRingIndex: function (t) {
                        for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                        return e
                    },
                    update: function (i) {
                        var n = this,
                            t = n.chart,
                            e = t.chartArea,
                            a = t.options,
                            o = a.elements.arc,
                            r = e.right - e.left - o.borderWidth,
                            s = e.bottom - e.top - o.borderWidth,
                            l = Math.min(r, s),
                            u = {
                                x: 0,
                                y: 0
                            },
                            d = n.getMeta(),
                            c = a.cutoutPercentage,
                            h = a.circumference;
                        if (h < 2 * Math.PI) {
                            var f = a.rotation % (2 * Math.PI),
                                g = (f += 2 * Math.PI * (f >= Math.PI ? -1 : f < -Math.PI ? 1 : 0)) + h,
                                p = Math.cos(f),
                                m = Math.sin(f),
                                v = Math.cos(g),
                                b = Math.sin(g),
                                x = f <= 0 && 0 <= g || f <= 2 * Math.PI && 2 * Math.PI <= g,
                                y = f <= .5 * Math.PI && .5 * Math.PI <= g || f <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                k = f <= -Math.PI && -Math.PI <= g || f <= Math.PI && Math.PI <= g,
                                M = f <= .5 * -Math.PI && .5 * -Math.PI <= g || f <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                w = c / 100,
                                C = k ? -1 : Math.min(p * (p < 0 ? 1 : w), v * (v < 0 ? 1 : w)),
                                S = M ? -1 : Math.min(m * (m < 0 ? 1 : w), b * (b < 0 ? 1 : w)),
                                _ = x ? 1 : Math.max(p * (0 < p ? 1 : w), v * (0 < v ? 1 : w)),
                                D = y ? 1 : Math.max(m * (0 < m ? 1 : w), b * (0 < b ? 1 : w)),
                                P = .5 * (_ - C),
                                I = .5 * (D - S);
                            l = Math.min(r / P, s / I), u = {
                                x: -.5 * (_ + C),
                                y: -.5 * (D + S)
                            }
                        }
                        t.borderWidth = n.getMaxBorderWidth(d.data), t.outerRadius = Math.max((l - t.borderWidth) / 2, 0), t.innerRadius = Math.max(c ? t.outerRadius / 100 * c : 0, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), t.offsetX = u.x * t.outerRadius, t.offsetY = u.y * t.outerRadius, d.total = n.calculateTotal(), n.outerRadius = t.outerRadius - t.radiusLength * n.getRingIndex(n.index), n.innerRadius = Math.max(n.outerRadius - t.radiusLength, 0), A.each(d.data, function (t, e) {
                            n.updateElement(t, e, i)
                        })
                    },
                    updateElement: function (t, e, i) {
                        var n = this,
                            a = n.chart,
                            o = a.chartArea,
                            r = a.options,
                            s = r.animation,
                            l = (o.left + o.right) / 2,
                            u = (o.top + o.bottom) / 2,
                            d = r.rotation,
                            c = r.rotation,
                            h = n.getDataset(),
                            f = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(h.data[e]) * (r.circumference / (2 * Math.PI)),
                            g = i && s.animateScale ? 0 : n.innerRadius,
                            p = i && s.animateScale ? 0 : n.outerRadius,
                            m = A.valueAtIndexOrDefault;
                        A.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _model: {
                                x: l + a.offsetX,
                                y: u + a.offsetY,
                                startAngle: d,
                                endAngle: c,
                                circumference: f,
                                outerRadius: p,
                                innerRadius: g,
                                label: m(h.label, e, a.data.labels[e])
                            }
                        });
                        var v = t._model,
                            b = t.custom || {},
                            x = A.valueAtIndexOrDefault,
                            y = this.chart.options.elements.arc;
                        v.backgroundColor = b.backgroundColor ? b.backgroundColor : x(h.backgroundColor, e, y.backgroundColor), v.borderColor = b.borderColor ? b.borderColor : x(h.borderColor, e, y.borderColor), v.borderWidth = b.borderWidth ? b.borderWidth : x(h.borderWidth, e, y.borderWidth), i && s.animateRotate || (v.startAngle = 0 === e ? r.rotation : n.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
                    },
                    calculateTotal: function () {
                        var i, n = this.getDataset(),
                            t = this.getMeta(),
                            a = 0;
                        return A.each(t.data, function (t, e) {
                            i = n.data[e], isNaN(i) || t.hidden || (a += Math.abs(i))
                        }), a
                    },
                    calculateCircumference: function (t) {
                        var e = this.getMeta().total;
                        return 0 < e && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
                    },
                    getMaxBorderWidth: function (t) {
                        for (var e, i, n = 0, a = this.index, o = t.length, r = 0; r < o; r++) n = (n = n < (e = t[r]._model ? t[r]._model.borderWidth : 0) ? e : n) < (i = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) ? i : n;
                        return n
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        18: [function (t, e, i) {
            "use strict";
            var n = t(26),
                a = t(41),
                g = t(46);
            n._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            }), e.exports = function (t) {
                function f(t, e) {
                    return g.valueOrDefault(t.showLine, e.showLines)
                }
                t.controllers.line = t.DatasetController.extend({
                    datasetElementType: a.Line,
                    dataElementType: a.Point,
                    update: function (t) {
                        var e, i, n, a = this,
                            o = a.getMeta(),
                            r = o.dataset,
                            s = o.data || [],
                            l = a.chart.options,
                            u = l.elements.line,
                            d = a.getScaleForId(o.yAxisID),
                            c = a.getDataset(),
                            h = f(c, l);
                        for (h && (n = r.custom || {}, void 0 !== c.tension && void 0 === c.lineTension && (c.lineTension = c.tension), r._scale = d, r._datasetIndex = a.index, r._children = s, r._model = {
                            spanGaps: c.spanGaps ? c.spanGaps : l.spanGaps,
                            tension: n.tension ? n.tension : g.valueOrDefault(c.lineTension, u.tension),
                            backgroundColor: n.backgroundColor ? n.backgroundColor : c.backgroundColor || u.backgroundColor,
                            borderWidth: n.borderWidth ? n.borderWidth : c.borderWidth || u.borderWidth,
                            borderColor: n.borderColor ? n.borderColor : c.borderColor || u.borderColor,
                            borderCapStyle: n.borderCapStyle ? n.borderCapStyle : c.borderCapStyle || u.borderCapStyle,
                            borderDash: n.borderDash ? n.borderDash : c.borderDash || u.borderDash,
                            borderDashOffset: n.borderDashOffset ? n.borderDashOffset : c.borderDashOffset || u.borderDashOffset,
                            borderJoinStyle: n.borderJoinStyle ? n.borderJoinStyle : c.borderJoinStyle || u.borderJoinStyle,
                            fill: n.fill ? n.fill : void 0 !== c.fill ? c.fill : u.fill,
                            steppedLine: n.steppedLine ? n.steppedLine : g.valueOrDefault(c.steppedLine, u.stepped),
                            cubicInterpolationMode: n.cubicInterpolationMode ? n.cubicInterpolationMode : g.valueOrDefault(c.cubicInterpolationMode, u.cubicInterpolationMode)
                        }, r.pivot()), e = 0, i = s.length; e < i; ++e) a.updateElement(s[e], e, t);
                        for (h && 0 !== r._model.tension && a.updateBezierControlPoints(), e = 0, i = s.length; e < i; ++e) s[e].pivot()
                    },
                    getPointBackgroundColor: function (t, e) {
                        var i = this.chart.options.elements.point.backgroundColor,
                            n = this.getDataset(),
                            a = t.custom || {};
                        return a.backgroundColor ? i = a.backgroundColor : n.pointBackgroundColor ? i = g.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i
                    },
                    getPointBorderColor: function (t, e) {
                        var i = this.chart.options.elements.point.borderColor,
                            n = this.getDataset(),
                            a = t.custom || {};
                        return a.borderColor ? i = a.borderColor : n.pointBorderColor ? i = g.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i
                    },
                    getPointBorderWidth: function (t, e) {
                        var i = this.chart.options.elements.point.borderWidth,
                            n = this.getDataset(),
                            a = t.custom || {};
                        return isNaN(a.borderWidth) ? !isNaN(n.pointBorderWidth) || g.isArray(n.pointBorderWidth) ? i = g.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = a.borderWidth, i
                    },
                    getPointRotation: function (t, e) {
                        var i = this.chart.options.elements.point.rotation,
                            n = this.getDataset(),
                            a = t.custom || {};
                        return isNaN(a.rotation) ? isNaN(n.pointRotation) && !g.isArray(n.pointRotation) || (i = g.valueAtIndexOrDefault(n.pointRotation, e, i)) : i = a.rotation, i
                    },
                    updateElement: function (t, e, i) {
                        var n, a, o = this,
                            r = o.getMeta(),
                            s = t.custom || {},
                            l = o.getDataset(),
                            u = o.index,
                            d = l.data[e],
                            c = o.getScaleForId(r.yAxisID),
                            h = o.getScaleForId(r.xAxisID),
                            f = o.chart.options.elements.point;
                        void 0 !== l.radius && void 0 === l.pointRadius && (l.pointRadius = l.radius), void 0 !== l.hitRadius && void 0 === l.pointHitRadius && (l.pointHitRadius = l.hitRadius), n = h.getPixelForValue("object" == typeof d ? d : NaN, e, u), a = i ? c.getBasePixel() : o.calculatePointY(d, e, u), t._xScale = h, t._yScale = c, t._datasetIndex = u, t._index = e, t._model = {
                            x: n,
                            y: a,
                            skip: s.skip || isNaN(n) || isNaN(a),
                            radius: s.radius || g.valueAtIndexOrDefault(l.pointRadius, e, f.radius),
                            pointStyle: s.pointStyle || g.valueAtIndexOrDefault(l.pointStyle, e, f.pointStyle),
                            rotation: o.getPointRotation(t, e),
                            backgroundColor: o.getPointBackgroundColor(t, e),
                            borderColor: o.getPointBorderColor(t, e),
                            borderWidth: o.getPointBorderWidth(t, e),
                            tension: r.dataset._model ? r.dataset._model.tension : 0,
                            steppedLine: !!r.dataset._model && r.dataset._model.steppedLine,
                            hitRadius: s.hitRadius || g.valueAtIndexOrDefault(l.pointHitRadius, e, f.hitRadius)
                        }
                    },
                    calculatePointY: function (t, e, i) {
                        var n, a, o, r = this.chart,
                            s = this.getMeta(),
                            l = this.getScaleForId(s.yAxisID),
                            u = 0,
                            d = 0;
                        if (l.options.stacked) {
                            for (n = 0; n < i; n++)
                                if (a = r.data.datasets[n], "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n)) {
                                    var c = Number(l.getRightValue(a.data[e]));
                                    c < 0 ? d += c || 0 : u += c || 0
                                } var h = Number(l.getRightValue(t));
                            return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h)
                        }
                        return l.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function () {
                        var t, e, i, n, a = this.getMeta(),
                            o = this.chart.chartArea,
                            r = a.data || [];

                        function s(t, e, i) {
                            return Math.max(Math.min(t, i), e)
                        }
                        if (a.dataset._model.spanGaps && (r = r.filter(function (t) {
                            return !t._model.skip
                        })), "monotone" === a.dataset._model.cubicInterpolationMode) g.splineCurveMonotone(r);
                        else
                            for (t = 0, e = r.length; t < e; ++t) i = r[t]._model, n = g.splineCurve(g.previousItem(r, t)._model, i, g.nextItem(r, t)._model, a.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                        if (this.chart.options.elements.line.capBezierPoints)
                            for (t = 0, e = r.length; t < e; ++t)(i = r[t]._model).controlPointPreviousX = s(i.controlPointPreviousX, o.left, o.right), i.controlPointPreviousY = s(i.controlPointPreviousY, o.top, o.bottom), i.controlPointNextX = s(i.controlPointNextX, o.left, o.right), i.controlPointNextY = s(i.controlPointNextY, o.top, o.bottom)
                    },
                    draw: function () {
                        var t, e = this.chart,
                            i = this.getMeta(),
                            n = i.data || [],
                            a = e.chartArea,
                            o = n.length,
                            r = 0;
                        for (f(this.getDataset(), e.options) && (t = (i.dataset._model.borderWidth || 0) / 2, g.canvas.clipArea(e.ctx, {
                            left: a.left,
                            right: a.right,
                            top: a.top - t,
                            bottom: a.bottom + t
                        }), i.dataset.draw(), g.canvas.unclipArea(e.ctx)); r < o; ++r) n[r].draw(a)
                    },
                    setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = t._model;
                        t.$previousStyle = {
                            backgroundColor: a.backgroundColor,
                            borderColor: a.borderColor,
                            borderWidth: a.borderWidth,
                            radius: a.radius
                        }, a.backgroundColor = n.hoverBackgroundColor || g.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, g.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor || g.valueAtIndexOrDefault(e.pointHoverBorderColor, i, g.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth || g.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth), a.radius = n.hoverRadius || g.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius)
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        19: [function (t, e, i) {
            "use strict";
            var n = t(26),
                a = t(41),
                k = t(46);
            n._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    gridLines: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data,
                        n = i.datasets,
                        a = i.labels;
                    if (n.length)
                        for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (s) {
                            var l = s.data;
                            return l.labels.length && l.datasets.length ? l.labels.map(function (t, e) {
                                var i = s.getDatasetMeta(0),
                                    n = l.datasets[0],
                                    a = i.data[e].custom || {},
                                    o = k.valueAtIndexOrDefault,
                                    r = s.options.elements.arc;
                                return {
                                    text: t,
                                    fillStyle: a.backgroundColor ? a.backgroundColor : o(n.backgroundColor, e, r.backgroundColor),
                                    strokeStyle: a.borderColor ? a.borderColor : o(n.borderColor, e, r.borderColor),
                                    lineWidth: a.borderWidth ? a.borderWidth : o(n.borderWidth, e, r.borderWidth),
                                    hidden: isNaN(n.data[e]) || i.data[e].hidden,
                                    index: e
                                }
                            }) : []
                        }
                    },
                    onClick: function (t, e) {
                        var i, n, a, o = e.index,
                            r = this.chart;
                        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
                        r.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }), e.exports = function (t) {
                t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: a.Arc,
                    linkScales: k.noop,
                    update: function (i) {
                        var t, e, n, a = this,
                            o = a.getDataset(),
                            r = a.getMeta(),
                            s = a.chart.options.startAngle || 0,
                            l = a._starts = [],
                            u = a._angles = [];
                        for (a._updateRadius(), r.count = a.countVisibleElements(), t = 0, e = o.data.length; t < e; t++) l[t] = s, n = a._computeAngle(t), s += u[t] = n;
                        k.each(r.data, function (t, e) {
                            a.updateElement(t, e, i)
                        })
                    },
                    _updateRadius: function () {
                        var t = this,
                            e = t.chart,
                            i = e.chartArea,
                            n = e.options,
                            a = n.elements.arc,
                            o = Math.min(i.right - i.left, i.bottom - i.top);
                        e.outerRadius = Math.max((o - a.borderWidth / 2) / 2, 0), e.innerRadius = Math.max(n.cutoutPercentage ? e.outerRadius / 100 * n.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength
                    },
                    updateElement: function (t, e, i) {
                        var n = this,
                            a = n.chart,
                            o = n.getDataset(),
                            r = a.options,
                            s = r.animation,
                            l = a.scale,
                            u = a.data.labels,
                            d = l.xCenter,
                            c = l.yCenter,
                            h = r.startAngle,
                            f = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
                            g = n._starts[e],
                            p = g + (t.hidden ? 0 : n._angles[e]),
                            m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]);
                        k.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: l,
                            _model: {
                                x: d,
                                y: c,
                                innerRadius: 0,
                                outerRadius: i ? m : f,
                                startAngle: i && s.animateRotate ? h : g,
                                endAngle: i && s.animateRotate ? h : p,
                                label: k.valueAtIndexOrDefault(u, e, u[e])
                            }
                        });
                        var v = this.chart.options.elements.arc,
                            b = t.custom || {},
                            x = k.valueAtIndexOrDefault,
                            y = t._model;
                        y.backgroundColor = b.backgroundColor ? b.backgroundColor : x(o.backgroundColor, e, v.backgroundColor), y.borderColor = b.borderColor ? b.borderColor : x(o.borderColor, e, v.borderColor), y.borderWidth = b.borderWidth ? b.borderWidth : x(o.borderWidth, e, v.borderWidth), t.pivot()
                    },
                    countVisibleElements: function () {
                        var i = this.getDataset(),
                            t = this.getMeta(),
                            n = 0;
                        return k.each(t.data, function (t, e) {
                            isNaN(i.data[e]) || t.hidden || n++
                        }), n
                    },
                    _computeAngle: function (t) {
                        var e = this,
                            i = this.getMeta().count,
                            n = e.getDataset(),
                            a = e.getMeta();
                        if (isNaN(n.data[t]) || a.data[t].hidden) return 0;
                        var o = {
                            chart: e.chart,
                            dataIndex: t,
                            dataset: n,
                            datasetIndex: e.index
                        };
                        return k.options.resolve([e.chart.options.elements.arc.angle, 2 * Math.PI / i], o, t)
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        20: [function (t, e, i) {
            "use strict";
            var n = t(26),
                a = t(41),
                u = t(46);
            n._set("radar", {
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }), e.exports = function (t) {
                t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: a.Line,
                    dataElementType: a.Point,
                    linkScales: u.noop,
                    update: function (i) {
                        var n = this,
                            t = n.getMeta(),
                            e = t.dataset,
                            a = t.data,
                            o = e.custom || {},
                            r = n.getDataset(),
                            s = n.chart.options.elements.line,
                            l = n.chart.scale;
                        void 0 !== r.tension && void 0 === r.lineTension && (r.lineTension = r.tension), u.extend(t.dataset, {
                            _datasetIndex: n.index,
                            _scale: l,
                            _children: a,
                            _loop: !0,
                            _model: {
                                tension: o.tension ? o.tension : u.valueOrDefault(r.lineTension, s.tension),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : r.backgroundColor || s.backgroundColor,
                                borderWidth: o.borderWidth ? o.borderWidth : r.borderWidth || s.borderWidth,
                                borderColor: o.borderColor ? o.borderColor : r.borderColor || s.borderColor,
                                fill: o.fill ? o.fill : void 0 !== r.fill ? r.fill : s.fill,
                                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : r.borderCapStyle || s.borderCapStyle,
                                borderDash: o.borderDash ? o.borderDash : r.borderDash || s.borderDash,
                                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : r.borderDashOffset || s.borderDashOffset,
                                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : r.borderJoinStyle || s.borderJoinStyle
                            }
                        }), t.dataset.pivot(), u.each(a, function (t, e) {
                            n.updateElement(t, e, i)
                        }, n), n.updateBezierControlPoints()
                    },
                    updateElement: function (t, e, i) {
                        var n = this,
                            a = t.custom || {},
                            o = n.getDataset(),
                            r = n.chart.scale,
                            s = n.chart.options.elements.point,
                            l = r.getPointPositionForValue(e, o.data[e]);
                        void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), u.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: r,
                            _model: {
                                x: i ? r.xCenter : l.x,
                                y: i ? r.yCenter : l.y,
                                tension: a.tension ? a.tension : u.valueOrDefault(o.lineTension, n.chart.options.elements.line.tension),
                                radius: a.radius ? a.radius : u.valueAtIndexOrDefault(o.pointRadius, e, s.radius),
                                backgroundColor: a.backgroundColor ? a.backgroundColor : u.valueAtIndexOrDefault(o.pointBackgroundColor, e, s.backgroundColor),
                                borderColor: a.borderColor ? a.borderColor : u.valueAtIndexOrDefault(o.pointBorderColor, e, s.borderColor),
                                borderWidth: a.borderWidth ? a.borderWidth : u.valueAtIndexOrDefault(o.pointBorderWidth, e, s.borderWidth),
                                pointStyle: a.pointStyle ? a.pointStyle : u.valueAtIndexOrDefault(o.pointStyle, e, s.pointStyle),
                                rotation: a.rotation ? a.rotation : u.valueAtIndexOrDefault(o.pointRotation, e, s.rotation),
                                hitRadius: a.hitRadius ? a.hitRadius : u.valueAtIndexOrDefault(o.pointHitRadius, e, s.hitRadius)
                            }
                        }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function () {
                        var a = this.chart.chartArea,
                            o = this.getMeta();
                        u.each(o.data, function (t, e) {
                            var i = t._model,
                                n = u.splineCurve(u.previousItem(o.data, e, !0)._model, i, u.nextItem(o.data, e, !0)._model, i.tension);
                            i.controlPointPreviousX = Math.max(Math.min(n.previous.x, a.right), a.left), i.controlPointPreviousY = Math.max(Math.min(n.previous.y, a.bottom), a.top), i.controlPointNextX = Math.max(Math.min(n.next.x, a.right), a.left), i.controlPointNextY = Math.max(Math.min(n.next.y, a.bottom), a.top), t.pivot()
                        })
                    },
                    setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t.custom || {},
                            n = t._index,
                            a = t._model;
                        t.$previousStyle = {
                            backgroundColor: a.backgroundColor,
                            borderColor: a.borderColor,
                            borderWidth: a.borderWidth,
                            radius: a.radius
                        }, a.radius = i.hoverRadius ? i.hoverRadius : u.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : u.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, u.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : u.valueAtIndexOrDefault(e.pointHoverBorderColor, n, u.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : u.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth)
                    }
                })
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        21: [function (t, e, i) {
            "use strict";
            t(26)._set("scatter", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        id: "x-axis-1",
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        id: "y-axis-1",
                        type: "linear",
                        position: "left"
                    }]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        },
                        label: function (t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }), e.exports = function (t) {
                t.controllers.scatter = t.controllers.line
            }
        }, {
            26: 26
        }],
        22: [function (t, e, i) {
            "use strict";
            var n = t(27);
            i = e.exports = n.extend({
                chart: null,
                currentStep: 0,
                numSteps: 60,
                easing: "",
                render: null,
                onAnimationProgress: null,
                onAnimationComplete: null
            });
            Object.defineProperty(i.prototype, "animationObject", {
                get: function () {
                    return this
                }
            }), Object.defineProperty(i.prototype, "chartInstance", {
                get: function () {
                    return this.chart
                },
                set: function (t) {
                    this.chart = t
                }
            })
        }, {
            27: 27
        }],
        23: [function (t, e, i) {
            "use strict";
            var n = t(26),
                o = t(46);
            n._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: o.noop,
                    onComplete: o.noop
                }
            }), e.exports = {
                frameDuration: 17,
                animations: [],
                dropFrames: 0,
                request: null,
                addAnimation: function (t, e, i, n) {
                    var a, o, r = this.animations;
                    for (e.chart = t, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a)
                        if (r[a].chart === t) return void (r[a] = e);
                    r.push(e), 1 === r.length && this.requestAnimationFrame()
                },
                cancelAnimation: function (e) {
                    var t = o.findIndex(this.animations, function (t) {
                        return t.chart === e
                    }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
                },
                requestAnimationFrame: function () {
                    var t = this;
                    null === t.request && (t.request = o.requestAnimFrame.call(window, function () {
                        t.request = null, t.startDigest()
                    }))
                },
                startDigest: function () {
                    var t = this,
                        e = Date.now(),
                        i = 0;
                    1 < t.dropFrames && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
                    var n = Date.now();
                    t.dropFrames += (n - e) / t.frameDuration, 0 < t.animations.length && t.requestAnimationFrame()
                },
                advance: function (t) {
                    for (var e, i, n = this.animations, a = 0; a < n.length;) i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [i, e], i), o.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a
                }
            }
        }, {
            26: 26,
            46: 46
        }],
        24: [function (t, e, i) {
            "use strict";
            var s = t(22),
                l = t(23),
                c = t(26),
                h = t(46),
                a = t(29),
                o = t(31),
                f = t(49),
                g = t(32),
                p = t(34),
                n = t(36);
            e.exports = function (u) {
                function d(t) {
                    return "top" === t || "bottom" === t
                }
                u.types = {}, u.instances = {}, u.controllers = {}, h.extend(u.prototype, {
                    construct: function (t, e) {
                        var i, n, a = this;
                        (n = (i = (i = e) || {}).data = i.data || {}).datasets = n.datasets || [], n.labels = n.labels || [], i.options = h.configMerge(c.global, c[i.type], i.options || {}), e = i;
                        var o = f.acquireContext(t, e),
                            r = o && o.canvas,
                            s = r && r.height,
                            l = r && r.width;
                        a.id = h.uid(), a.ctx = o, a.canvas = r, a.config = e, a.width = l, a.height = s, a.aspectRatio = s ? l / s : null, a.options = e.options, a._bufferedRender = !1, (a.chart = a).controller = a, u.instances[a.id] = a, Object.defineProperty(a, "data", {
                            get: function () {
                                return a.config.data
                            },
                            set: function (t) {
                                a.config.data = t
                            }
                        }), o && r ? (a.initialize(), a.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    },
                    initialize: function () {
                        var t = this;
                        return g.notify(t, "beforeInit"), h.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), g.notify(t, "afterInit"), t
                    },
                    clear: function () {
                        return h.canvas.clear(this), this
                    },
                    stop: function () {
                        return l.cancelAnimation(this), this
                    },
                    resize: function (t) {
                        var e = this,
                            i = e.options,
                            n = e.canvas,
                            a = i.maintainAspectRatio && e.aspectRatio || null,
                            o = Math.max(0, Math.floor(h.getMaximumWidth(n))),
                            r = Math.max(0, Math.floor(a ? o / a : h.getMaximumHeight(n)));
                        if ((e.width !== o || e.height !== r) && (n.width = e.width = o, n.height = e.height = r, n.style.width = o + "px", n.style.height = r + "px", h.retinaScale(e, i.devicePixelRatio), !t)) {
                            var s = {
                                width: o,
                                height: r
                            };
                            g.notify(e, "resize", [s]), e.options.onResize && e.options.onResize(e, s), e.stop(), e.update({
                                duration: e.options.responsiveAnimationDuration
                            })
                        }
                    },
                    ensureScalesHaveIDs: function () {
                        var t = this.options,
                            e = t.scales || {},
                            i = t.scale;
                        h.each(e.xAxes, function (t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), h.each(e.yAxes, function (t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), i && (i.id = i.id || "scale")
                    },
                    buildOrUpdateScales: function () {
                        var r = this,
                            t = r.options,
                            s = r.scales || {},
                            e = [],
                            l = Object.keys(s).reduce(function (t, e) {
                                return t[e] = !1, t
                            }, {});
                        t.scales && (e = e.concat((t.scales.xAxes || []).map(function (t) {
                            return {
                                options: t,
                                dtype: "category",
                                dposition: "bottom"
                            }
                        }), (t.scales.yAxes || []).map(function (t) {
                            return {
                                options: t,
                                dtype: "linear",
                                dposition: "left"
                            }
                        }))), t.scale && e.push({
                            options: t.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), h.each(e, function (t) {
                            var e = t.options,
                                i = e.id,
                                n = h.valueOrDefault(e.type, t.dtype);
                            d(e.position) !== d(t.dposition) && (e.position = t.dposition), l[i] = !0;
                            var a = null;
                            if (i in s && s[i].type === n) (a = s[i]).options = e, a.ctx = r.ctx, a.chart = r;
                            else {
                                var o = p.getScaleConstructor(n);
                                if (!o) return;
                                a = new o({
                                    id: i,
                                    type: n,
                                    options: e,
                                    ctx: r.ctx,
                                    chart: r
                                }), s[a.id] = a
                            }
                            a.mergeTicksOptions(), t.isDefault && (r.scale = a)
                        }), h.each(l, function (t, e) {
                            t || delete s[e]
                        }), r.scales = s, p.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function () {
                        var o = this,
                            r = [],
                            s = [];
                        return h.each(o.data.datasets, function (t, e) {
                            var i = o.getDatasetMeta(e),
                                n = t.type || o.config.type;
                            if (i.type && i.type !== n && (o.destroyDatasetMeta(e), i = o.getDatasetMeta(e)), i.type = n, r.push(i.type), i.controller) i.controller.updateIndex(e), i.controller.linkScales();
                            else {
                                var a = u.controllers[i.type];
                                if (void 0 === a) throw new Error('"' + i.type + '" is not a chart type.');
                                i.controller = new a(o, e), s.push(i.controller)
                            }
                        }, o), s
                    },
                    resetElements: function () {
                        var i = this;
                        h.each(i.data.datasets, function (t, e) {
                            i.getDatasetMeta(e).controller.reset()
                        }, i)
                    },
                    reset: function () {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function (t) {
                        var e, i, n = this;
                        if (t && "object" == typeof t || (t = {
                            duration: t,
                            lazy: arguments[1]
                        }), i = (e = n).options, h.each(e.scales, function (t) {
                            o.removeBox(e, t)
                        }), i = h.configMerge(u.defaults.global, u.defaults[e.config.type], i), e.options = e.config.options = i, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = i.tooltips, e.tooltip.initialize(), g._invalidate(n), !1 !== g.notify(n, "beforeUpdate")) {
                            n.tooltip._data = n.data;
                            var a = n.buildOrUpdateControllers();
                            h.each(n.data.datasets, function (t, e) {
                                n.getDatasetMeta(e).controller.buildOrUpdateElements()
                            }, n), n.updateLayout(), n.options.animation && n.options.animation.duration && h.each(a, function (t) {
                                t.reset()
                            }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], g.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
                                duration: t.duration,
                                easing: t.easing,
                                lazy: t.lazy
                            } : n.render(t)
                        }
                    },
                    updateLayout: function () {
                        !1 !== g.notify(this, "beforeLayout") && (o.update(this, this.width, this.height), g.notify(this, "afterScaleUpdate"), g.notify(this, "afterLayout"))
                    },
                    updateDatasets: function () {
                        if (!1 !== g.notify(this, "beforeDatasetsUpdate")) {
                            for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                            g.notify(this, "afterDatasetsUpdate")
                        }
                    },
                    updateDataset: function (t) {
                        var e = this.getDatasetMeta(t),
                            i = {
                                meta: e,
                                index: t
                            };
                        !1 !== g.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), g.notify(this, "afterDatasetUpdate", [i]))
                    },
                    render: function (t) {
                        var e = this;
                        t && "object" == typeof t || (t = {
                            duration: t,
                            lazy: arguments[1]
                        });
                        var i = t.duration,
                            n = t.lazy;
                        if (!1 !== g.notify(e, "beforeRender")) {
                            var a = e.options.animation,
                                o = function (t) {
                                    g.notify(e, "afterRender"), h.callback(a && a.onComplete, [t], e)
                                };
                            if (a && (void 0 !== i && 0 !== i || void 0 === i && 0 !== a.duration)) {
                                var r = new s({
                                    numSteps: (i || a.duration) / 16.66,
                                    easing: t.easing || a.easing,
                                    render: function (t, e) {
                                        var i = h.easing.effects[e.easing],
                                            n = e.currentStep,
                                            a = n / e.numSteps;
                                        t.draw(i(a), a, n)
                                    },
                                    onAnimationProgress: a.onProgress,
                                    onAnimationComplete: o
                                });
                                l.addAnimation(e, r, i, n)
                            } else e.draw(), o(new s({
                                numSteps: 0,
                                chart: e
                            }));
                            return e
                        }
                    },
                    draw: function (t) {
                        var e = this;
                        e.clear(), h.isNullOrUndef(t) && (t = 1), e.transition(t), e.width <= 0 || e.height <= 0 || !1 !== g.notify(e, "beforeDraw", [t]) && (h.each(e.boxes, function (t) {
                            t.draw(e.chartArea)
                        }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), g.notify(e, "afterDraw", [t]))
                    },
                    transition: function (t) {
                        for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                        this.tooltip.transition(t)
                    },
                    drawDatasets: function (t) {
                        var e = this;
                        if (!1 !== g.notify(e, "beforeDatasetsDraw", [t])) {
                            for (var i = (e.data.datasets || []).length - 1; 0 <= i; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
                            g.notify(e, "afterDatasetsDraw", [t])
                        }
                    },
                    drawDataset: function (t, e) {
                        var i = this.getDatasetMeta(t),
                            n = {
                                meta: i,
                                index: t,
                                easingValue: e
                            };
                        !1 !== g.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), g.notify(this, "afterDatasetDraw", [n]))
                    },
                    _drawTooltip: function (t) {
                        var e = this.tooltip,
                            i = {
                                tooltip: e,
                                easingValue: t
                            };
                        !1 !== g.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), g.notify(this, "afterTooltipDraw", [i]))
                    },
                    getElementAtEvent: function (t) {
                        return a.modes.single(this, t)
                    },
                    getElementsAtEvent: function (t) {
                        return a.modes.label(this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function (t) {
                        return a.modes["x-axis"](this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function (t, e, i) {
                        var n = a.modes[e];
                        return "function" == typeof n ? n(this, t, i) : []
                    },
                    getDatasetAtEvent: function (t) {
                        return a.modes.dataset(this, t, {
                            intersect: !0
                        })
                    },
                    getDatasetMeta: function (t) {
                        var e = this.data.datasets[t];
                        e._meta || (e._meta = {});
                        var i = e._meta[this.id];
                        return i || (i = e._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), i
                    },
                    getVisibleDatasetCount: function () {
                        for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function (t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function () {
                        return this.options.legendCallback(this)
                    },
                    destroyDatasetMeta: function (t) {
                        var e = this.id,
                            i = this.data.datasets[t],
                            n = i._meta && i._meta[e];
                        n && (n.controller.destroy(), delete i._meta[e])
                    },
                    destroy: function () {
                        var t, e, i = this,
                            n = i.canvas;
                        for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
                        n && (i.unbindEvents(), h.canvas.clear(i), f.releaseContext(i.ctx), i.canvas = null, i.ctx = null), g.notify(i, "destroy"), delete u.instances[i.id]
                    },
                    toBase64Image: function () {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip: function () {
                        var t = this;
                        t.tooltip = new n({
                            _chart: t,
                            _chartInstance: t,
                            _data: t.data,
                            _options: t.options.tooltips
                        }, t)
                    },
                    bindEvents: function () {
                        var e = this,
                            i = e._listeners = {},
                            n = function () {
                                e.eventHandler.apply(e, arguments)
                            };
                        h.each(e.options.events, function (t) {
                            f.addEventListener(e, t, n), i[t] = n
                        }), e.options.responsive && (n = function () {
                            e.resize()
                        }, f.addEventListener(e, "resize", n), i.resize = n)
                    },
                    unbindEvents: function () {
                        var i = this,
                            t = i._listeners;
                        t && (delete i._listeners, h.each(t, function (t, e) {
                            f.removeEventListener(i, e, t)
                        }))
                    },
                    updateHoverStyle: function (t, e, i) {
                        var n, a, o, r = i ? "setHoverStyle" : "removeHoverStyle";
                        for (a = 0, o = t.length; a < o; ++a)(n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n)
                    },
                    eventHandler: function (t) {
                        var e = this,
                            i = e.tooltip;
                        if (!1 !== g.notify(e, "beforeEvent", [t])) {
                            e._bufferedRender = !0, e._bufferedRequest = null;
                            var n = e.handleEvent(t);
                            i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), g.notify(e, "afterEvent", [t]);
                            var a = e._bufferedRequest;
                            return a ? e.render(a) : n && !e.animating && (e.stop(), e.render({
                                duration: e.options.hover.animationDuration,
                                lazy: !0
                            })), e._bufferedRender = !1, e._bufferedRequest = null, e
                        }
                    },
                    handleEvent: function (t) {
                        var e, i = this,
                            n = i.options || {},
                            a = n.hover;
                        return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, a.mode, a), h.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, a.mode, !1), i.active.length && a.mode && i.updateHoverStyle(i.active, a.mode, !0), e = !h.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
                    }
                }), u.Controller = u
            }
        }, {
            22: 22,
            23: 23,
            26: 26,
            29: 29,
            31: 31,
            32: 32,
            34: 34,
            36: 36,
            46: 46,
            49: 49
        }],
        25: [function (t, e, i) {
            "use strict";
            var s = t(46);
            e.exports = function (t) {
                var o = ["push", "pop", "shift", "splice", "unshift"];

                function r(e, t) {
                    var i = e._chartjs;
                    if (i) {
                        var n = i.listeners,
                            a = n.indexOf(t); - 1 !== a && n.splice(a, 1), 0 < n.length || (o.forEach(function (t) {
                                delete e[t]
                            }), delete e._chartjs)
                    }
                }
                t.DatasetController = function (t, e) {
                    this.initialize(t, e)
                }, s.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function (t, e) {
                        this.chart = t, this.index = e, this.linkScales(), this.addElements()
                    },
                    updateIndex: function (t) {
                        this.index = t
                    },
                    linkScales: function () {
                        var t = this,
                            e = t.getMeta(),
                            i = t.getDataset();
                        null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function () {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function () {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function (t) {
                        return this.chart.scales[t]
                    },
                    reset: function () {
                        this.update(!0)
                    },
                    destroy: function () {
                        this._data && r(this._data, this)
                    },
                    createMetaDataset: function () {
                        var t = this.datasetElementType;
                        return t && new t({
                            _chart: this.chart,
                            _datasetIndex: this.index
                        })
                    },
                    createMetaData: function (t) {
                        var e = this.dataElementType;
                        return e && new e({
                            _chart: this.chart,
                            _datasetIndex: this.index,
                            _index: t
                        })
                    },
                    addElements: function () {
                        var t, e, i = this.getMeta(),
                            n = this.getDataset().data || [],
                            a = i.data;
                        for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
                        i.dataset = i.dataset || this.createMetaDataset()
                    },
                    addElementAndReset: function (t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function () {
                        var a, t, e = this,
                            i = e.getDataset(),
                            n = i.data || (i.data = []);
                        e._data !== n && (e._data && r(e._data, e), t = e, (a = n)._chartjs ? a._chartjs.listeners.push(t) : (Object.defineProperty(a, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [t]
                            }
                        }), o.forEach(function (t) {
                            var i = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                                n = a[t];
                            Object.defineProperty(a, t, {
                                configurable: !0,
                                enumerable: !1,
                                value: function () {
                                    var e = Array.prototype.slice.call(arguments),
                                        t = n.apply(this, e);
                                    return s.each(a._chartjs.listeners, function (t) {
                                        "function" == typeof t[i] && t[i].apply(t, e)
                                    }), t
                                }
                            })
                        })), e._data = n), e.resyncElements()
                    },
                    update: s.noop,
                    transition: function (t) {
                        for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
                        e.dataset && e.dataset.transition(t)
                    },
                    draw: function () {
                        var t = this.getMeta(),
                            e = t.data || [],
                            i = e.length,
                            n = 0;
                        for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
                    },
                    removeHoverStyle: function (t) {
                        s.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle
                    },
                    setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = s.valueAtIndexOrDefault,
                            o = s.getHoverColor,
                            r = t._model;
                        t.$previousStyle = {
                            backgroundColor: r.backgroundColor,
                            borderColor: r.borderColor,
                            borderWidth: r.borderWidth
                        }, r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : a(e.hoverBackgroundColor, i, o(r.backgroundColor)), r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : a(e.hoverBorderColor, i, o(r.borderColor)), r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : a(e.hoverBorderWidth, i, r.borderWidth)
                    },
                    resyncElements: function () {
                        var t = this.getMeta(),
                            e = this.getDataset().data,
                            i = t.data.length,
                            n = e.length;
                        n < i ? t.data.splice(n, i - n) : i < n && this.insertElements(i, n - i)
                    },
                    insertElements: function (t, e) {
                        for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
                    },
                    onDataPush: function () {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function () {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function () {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function (t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function () {
                        this.insertElements(0, arguments.length)
                    }
                }), t.DatasetController.extend = s.inherits
            }
        }, {
            46: 46
        }],
        26: [function (t, e, i) {
            "use strict";
            var n = t(46);
            e.exports = {
                _set: function (t, e) {
                    return n.merge(this[t] || (this[t] = {}), e)
                }
            }
        }, {
            46: 46
        }],
        27: [function (t, e, i) {
            "use strict";
            var g = t(3),
                n = t(46);
            var a = function (t) {
                n.extend(this, t), this.initialize.apply(this, arguments)
            };
            n.extend(a.prototype, {
                initialize: function () {
                    this.hidden = !1
                },
                pivot: function () {
                    var t = this;
                    return t._view || (t._view = n.clone(t._model)), t._start = {}, t
                },
                transition: function (t) {
                    var e = this,
                        i = e._model,
                        n = e._start,
                        a = e._view;
                    return i && 1 !== t ? (a || (a = e._view = {}), n || (n = e._start = {}), function (t, e, i, n) {
                        var a, o, r, s, l, u, d, c, h, f = Object.keys(i);
                        for (a = 0, o = f.length; a < o; ++a)
                            if (u = i[r = f[a]], e.hasOwnProperty(r) || (e[r] = u), (s = e[r]) !== u && "_" !== r[0]) {
                                if (t.hasOwnProperty(r) || (t[r] = s), (d = typeof u) == typeof (l = t[r]))
                                    if ("string" === d) {
                                        if ((c = g(l)).valid && (h = g(u)).valid) {
                                            e[r] = h.mix(c, n).rgbString();
                                            continue
                                        }
                                    } else if ("number" === d && isFinite(l) && isFinite(u)) {
                                        e[r] = l + (u - l) * n;
                                        continue
                                    }
                                e[r] = u
                            }
                    }(n, a, i, t)) : (e._view = i, e._start = null), e
                },
                tooltipPosition: function () {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function () {
                    return n.isNumber(this._model.x) && n.isNumber(this._model.y)
                }
            }), a.extend = n.inherits, e.exports = a
        }, {
            3: 3,
            46: 46
        }],
        28: [function (t, e, i) {
            "use strict";
            var n = t(3),
                a = t(26),
                g = t(46),
                l = t(34);
            e.exports = function () {
                function d(t, e, i) {
                    var n;
                    return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                }

                function c(t) {
                    return null != t && "none" !== t
                }

                function e(t, e, i) {
                    var n = document.defaultView,
                        a = g._getParentNode(t),
                        o = n.getComputedStyle(t)[e],
                        r = n.getComputedStyle(a)[e],
                        s = c(o),
                        l = c(r),
                        u = Number.POSITIVE_INFINITY;
                    return s || l ? Math.min(s ? d(o, t, i) : u, l ? d(r, a, i) : u) : "none"
                }
                g.configMerge = function () {
                    return g.merge(g.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (t, e, i, n) {
                            var a = e[t] || {},
                                o = i[t];
                            "scales" === t ? e[t] = g.scaleMerge(a, o) : "scale" === t ? e[t] = g.merge(a, [l.getScaleDefaults(o.type), o]) : g._merger(t, e, i, n)
                        }
                    })
                }, g.scaleMerge = function () {
                    return g.merge(g.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (t, e, i, n) {
                            if ("xAxes" === t || "yAxes" === t) {
                                var a, o, r, s = i[t].length;
                                for (e[t] || (e[t] = []), a = 0; a < s; ++a) r = i[t][a], o = g.valueOrDefault(r.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || r.type && r.type !== e[t][a].type ? g.merge(e[t][a], [l.getScaleDefaults(o), r]) : g.merge(e[t][a], r)
                            } else g._merger(t, e, i, n)
                        }
                    })
                }, g.where = function (t, e) {
                    if (g.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var i = [];
                    return g.each(t, function (t) {
                        e(t) && i.push(t)
                    }), i
                }, g.findIndex = Array.prototype.findIndex ? function (t, e, i) {
                    return t.findIndex(e, i)
                } : function (t, e, i) {
                    i = void 0 === i ? t : i;
                    for (var n = 0, a = t.length; n < a; ++n)
                        if (e.call(i, t[n], n, t)) return n;
                    return -1
                }, g.findNextWhere = function (t, e, i) {
                    g.isNullOrUndef(i) && (i = -1);
                    for (var n = i + 1; n < t.length; n++) {
                        var a = t[n];
                        if (e(a)) return a
                    }
                }, g.findPreviousWhere = function (t, e, i) {
                    g.isNullOrUndef(i) && (i = t.length);
                    for (var n = i - 1; 0 <= n; n--) {
                        var a = t[n];
                        if (e(a)) return a
                    }
                }, g.isNumber = function (t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, g.almostEquals = function (t, e, i) {
                    return Math.abs(t - e) < i
                }, g.almostWhole = function (t, e) {
                    var i = Math.round(t);
                    return i - e < t && t < i + e
                }, g.max = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, g.min = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, g.sign = Math.sign ? function (t) {
                    return Math.sign(t)
                } : function (t) {
                    return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
                }, g.log10 = Math.log10 ? function (t) {
                    return Math.log10(t)
                } : function (t) {
                    var e = Math.log(t) * Math.LOG10E,
                        i = Math.round(e);
                    return t === Math.pow(10, i) ? i : e
                }, g.toRadians = function (t) {
                    return t * (Math.PI / 180)
                }, g.toDegrees = function (t) {
                    return t * (180 / Math.PI)
                }, g.getAngleFromPoint = function (t, e) {
                    var i = e.x - t.x,
                        n = e.y - t.y,
                        a = Math.sqrt(i * i + n * n),
                        o = Math.atan2(n, i);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                        angle: o,
                        distance: a
                    }
                }, g.distanceBetweenPoints = function (t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, g.aliasPixel = function (t) {
                    return t % 2 == 0 ? 0 : .5
                }, g.splineCurve = function (t, e, i, n) {
                    var a = t.skip ? e : t,
                        o = e,
                        r = i.skip ? e : i,
                        s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                        l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                        u = s / (s + l),
                        d = l / (s + l),
                        c = n * (u = isNaN(u) ? 0 : u),
                        h = n * (d = isNaN(d) ? 0 : d);
                    return {
                        previous: {
                            x: o.x - c * (r.x - a.x),
                            y: o.y - c * (r.y - a.y)
                        },
                        next: {
                            x: o.x + h * (r.x - a.x),
                            y: o.y + h * (r.y - a.y)
                        }
                    }
                }, g.EPSILON = Number.EPSILON || 1e-14, g.splineCurveMonotone = function (t) {
                    var e, i, n, a, o, r, s, l, u, d = (t || []).map(function (t) {
                        return {
                            model: t._model,
                            deltaK: 0,
                            mK: 0
                        }
                    }),
                        c = d.length;
                    for (e = 0; e < c; ++e)
                        if (!(n = d[e]).model.skip) {
                            if (i = 0 < e ? d[e - 1] : null, (a = e < c - 1 ? d[e + 1] : null) && !a.model.skip) {
                                var h = a.model.x - n.model.x;
                                n.deltaK = 0 !== h ? (a.model.y - n.model.y) / h : 0
                            } !i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
                        } for (e = 0; e < c - 1; ++e) n = d[e], a = d[e + 1], n.model.skip || a.model.skip || (g.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (o = n.mK / n.deltaK, r = a.mK / n.deltaK, (l = Math.pow(o, 2) + Math.pow(r, 2)) <= 9 || (s = 3 / Math.sqrt(l), n.mK = o * s * n.deltaK, a.mK = r * s * n.deltaK)));
                    for (e = 0; e < c; ++e)(n = d[e]).model.skip || (i = 0 < e ? d[e - 1] : null, a = e < c - 1 ? d[e + 1] : null, i && !i.model.skip && (u = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - u, n.model.controlPointPreviousY = n.model.y - u * n.mK), a && !a.model.skip && (u = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + u, n.model.controlPointNextY = n.model.y + u * n.mK))
                }, g.nextItem = function (t, e, i) {
                    return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, g.previousItem = function (t, e, i) {
                    return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, g.niceNum = function (t, e) {
                    var i = Math.floor(g.log10(t)),
                        n = t / Math.pow(10, i);
                    return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
                }, g.requestAnimFrame = "undefined" == typeof window ? function (t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, g.getRelativePosition = function (t, e) {
                    var i, n, a = t.originalEvent || t,
                        o = t.target || t.srcElement,
                        r = o.getBoundingClientRect(),
                        s = a.touches;
                    n = s && 0 < s.length ? (i = s[0].clientX, s[0].clientY) : (i = a.clientX, a.clientY);
                    var l = parseFloat(g.getStyle(o, "padding-left")),
                        u = parseFloat(g.getStyle(o, "padding-top")),
                        d = parseFloat(g.getStyle(o, "padding-right")),
                        c = parseFloat(g.getStyle(o, "padding-bottom")),
                        h = r.right - r.left - l - d,
                        f = r.bottom - r.top - u - c;
                    return {
                        x: i = Math.round((i - r.left - l) / h * o.width / e.currentDevicePixelRatio),
                        y: n = Math.round((n - r.top - u) / f * o.height / e.currentDevicePixelRatio)
                    }
                }, g.getConstraintWidth = function (t) {
                    return e(t, "max-width", "clientWidth")
                }, g.getConstraintHeight = function (t) {
                    return e(t, "max-height", "clientHeight")
                }, g._calculatePadding = function (t, e, i) {
                    return -1 < (e = g.getStyle(t, e)).indexOf("%") ? i / parseInt(e, 10) : parseInt(e, 10)
                }, g._getParentNode = function (t) {
                    var e = t.parentNode;
                    return e && e.host && (e = e.host), e
                }, g.getMaximumWidth = function (t) {
                    var e = g._getParentNode(t);
                    if (!e) return t.clientWidth;
                    var i = e.clientWidth,
                        n = i - g._calculatePadding(e, "padding-left", i) - g._calculatePadding(e, "padding-right", i),
                        a = g.getConstraintWidth(t);
                    return isNaN(a) ? n : Math.min(n, a)
                }, g.getMaximumHeight = function (t) {
                    var e = g._getParentNode(t);
                    if (!e) return t.clientHeight;
                    var i = e.clientHeight,
                        n = i - g._calculatePadding(e, "padding-top", i) - g._calculatePadding(e, "padding-bottom", i),
                        a = g.getConstraintHeight(t);
                    return isNaN(a) ? n : Math.min(n, a)
                }, g.getStyle = function (t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, g.retinaScale = function (t, e) {
                    var i = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
                    if (1 !== i) {
                        var n = t.canvas,
                            a = t.height,
                            o = t.width;
                        n.height = a * i, n.width = o * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = o + "px")
                    }
                }, g.fontString = function (t, e, i) {
                    return e + " " + t + "px " + i
                }, g.longestText = function (e, t, i, n) {
                    var a = (n = n || {}).data = n.data || {},
                        o = n.garbageCollect = n.garbageCollect || [];
                    n.font !== t && (a = n.data = {}, o = n.garbageCollect = [], n.font = t), e.font = t;
                    var r = 0;
                    g.each(i, function (t) {
                        null != t && !0 !== g.isArray(t) ? r = g.measureText(e, a, o, r, t) : g.isArray(t) && g.each(t, function (t) {
                            null == t || g.isArray(t) || (r = g.measureText(e, a, o, r, t))
                        })
                    });
                    var s = o.length / 2;
                    if (s > i.length) {
                        for (var l = 0; l < s; l++) delete a[o[l]];
                        o.splice(0, s)
                    }
                    return r
                }, g.measureText = function (t, e, i, n, a) {
                    var o = e[a];
                    return o || (o = e[a] = t.measureText(a).width, i.push(a)), n < o && (n = o), n
                }, g.numberOfLabelLines = function (t) {
                    var e = 1;
                    return g.each(t, function (t) {
                        g.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, g.color = n ? function (t) {
                    return t instanceof CanvasGradient && (t = a.global.defaultColor), n(t)
                } : function (t) {
                    return console.error("Color.js not found!"), t
                }, g.getHoverColor = function (t) {
                    return t instanceof CanvasPattern ? t : g.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {
            26: 26,
            3: 3,
            34: 34,
            46: 46
        }],
        29: [function (t, e, i) {
            "use strict";
            var n = t(46);

            function s(t, e) {
                return t.native ? {
                    x: t.x,
                    y: t.y
                } : n.getRelativePosition(t, e)
            }

            function l(t, e) {
                var i, n, a, o, r;
                for (n = 0, o = t.data.datasets.length; n < o; ++n)
                    if (t.isDatasetVisible(n))
                        for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
                            var s = i.data[a];
                            s._view.skip || e(s)
                        }
            }

            function u(t, e) {
                var i = [];
                return l(t, function (t) {
                    t.inRange(e.x, e.y) && i.push(t)
                }), i
            }

            function d(t, n, a, o) {
                var r = Number.POSITIVE_INFINITY,
                    s = [];
                return l(t, function (t) {
                    if (!a || t.inRange(n.x, n.y)) {
                        var e = t.getCenterPoint(),
                            i = o(n, e);
                        i < r ? (s = [t], r = i) : i === r && s.push(t)
                    }
                }), s
            }

            function c(t) {
                var a = -1 !== t.indexOf("x"),
                    o = -1 !== t.indexOf("y");
                return function (t, e) {
                    var i = a ? Math.abs(t.x - e.x) : 0,
                        n = o ? Math.abs(t.y - e.y) : 0;
                    return Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2))
                }
            }

            function a(n, t, e) {
                var i = s(t, n);
                e.axis = e.axis || "x";
                var a = c(e.axis),
                    o = e.intersect ? u(n, i) : d(n, i, !1, a),
                    r = [];
                return o.length ? (n.data.datasets.forEach(function (t, e) {
                    if (n.isDatasetVisible(e)) {
                        var i = n.getDatasetMeta(e).data[o[0]._index];
                        i && !i._view.skip && r.push(i)
                    }
                }), r) : []
            }
            e.exports = {
                modes: {
                    single: function (t, e) {
                        var i = s(e, t),
                            n = [];
                        return l(t, function (t) {
                            if (t.inRange(i.x, i.y)) return n.push(t), n
                        }), n.slice(0, 1)
                    },
                    label: a,
                    index: a,
                    dataset: function (t, e, i) {
                        var n = s(e, t);
                        i.axis = i.axis || "xy";
                        var a = c(i.axis),
                            o = i.intersect ? u(t, n) : d(t, n, !1, a);
                        return 0 < o.length && (o = t.getDatasetMeta(o[0]._datasetIndex).data), o
                    },
                    "x-axis": function (t, e) {
                        return a(t, e, {
                            intersect: !1
                        })
                    },
                    point: function (t, e) {
                        return u(t, s(e, t))
                    },
                    nearest: function (t, e, i) {
                        var n = s(e, t);
                        i.axis = i.axis || "xy";
                        var a = c(i.axis),
                            o = d(t, n, i.intersect, a);
                        return 1 < o.length && o.sort(function (t, e) {
                            var i = t.getArea() - e.getArea();
                            return 0 === i && (i = t._datasetIndex - e._datasetIndex), i
                        }), o.slice(0, 1)
                    },
                    x: function (t, e, i) {
                        var n = s(e, t),
                            a = [],
                            o = !1;
                        return l(t, function (t) {
                            t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (o = !0)
                        }), i.intersect && !o && (a = []), a
                    },
                    y: function (t, e, i) {
                        var n = s(e, t),
                            a = [],
                            o = !1;
                        return l(t, function (t) {
                            t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (o = !0)
                        }), i.intersect && !o && (a = []), a
                    }
                }
            }
        }, {
            46: 46
        }],
        30: [function (t, e, i) {
            "use strict";
            t(26)._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: "nearest",
                    intersect: !0,
                    animationDuration: 400
                },
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            }), e.exports = function () {
                var t = function (t, e) {
                    return this.construct(t, e), this
                };
                return t.Chart = t
            }
        }, {
            26: 26
        }],
        31: [function (t, e, i) {
            "use strict";
            var B = t(46);

            function W(t, e) {
                return B.where(t, function (t) {
                    return t.position === e
                })
            }

            function V(t, a) {
                t.forEach(function (t, e) {
                    return t._tmpIndex_ = e, t
                }), t.sort(function (t, e) {
                    var i = a ? e : t,
                        n = a ? t : e;
                    return i.weight === n.weight ? i._tmpIndex_ - n._tmpIndex_ : i.weight - n.weight
                }), t.forEach(function (t) {
                    delete t._tmpIndex_
                })
            }
            e.exports = {
                defaults: {},
                addBox: function (t, e) {
                    t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                },
                removeBox: function (t, e) {
                    var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
                },
                configure: function (t, e, i) {
                    for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) n = a[r], i.hasOwnProperty(n) && (e[n] = i[n])
                },
                update: function (e, i, t) {
                    if (e) {
                        var n = e.options.layout || {},
                            a = B.options.toPadding(n.padding),
                            o = a.left,
                            r = a.right,
                            s = a.top,
                            l = a.bottom,
                            u = W(e.boxes, "left"),
                            d = W(e.boxes, "right"),
                            c = W(e.boxes, "top"),
                            h = W(e.boxes, "bottom"),
                            f = W(e.boxes, "chartArea");
                        V(u, !0), V(d, !1), V(c, !0), V(h, !1);
                        var g = i - o - r,
                            p = t - s - l,
                            m = p / 2,
                            v = (i - g / 2) / (u.length + d.length),
                            b = (t - m) / (c.length + h.length),
                            x = g,
                            y = p,
                            k = [];
                        B.each(u.concat(d, c, h), function (t) {
                            var e, i = t.isHorizontal();
                            i ? (e = t.update(t.fullWidth ? g : x, b), y -= e.height) : (e = t.update(v, y), x -= e.width), k.push({
                                horizontal: i,
                                minSize: e,
                                box: t
                            })
                        });
                        var M = 0,
                            w = 0,
                            C = 0,
                            S = 0;
                        B.each(c.concat(h), function (t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                M = Math.max(M, e.left), w = Math.max(w, e.right)
                            }
                        }), B.each(u.concat(d), function (t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                C = Math.max(C, e.top), S = Math.max(S, e.bottom)
                            }
                        });
                        var _ = o,
                            D = r,
                            P = s,
                            I = l;
                        B.each(u.concat(d), z), B.each(u, function (t) {
                            _ += t.width
                        }), B.each(d, function (t) {
                            D += t.width
                        }), B.each(c.concat(h), z), B.each(c, function (t) {
                            P += t.height
                        }), B.each(h, function (t) {
                            I += t.height
                        }), B.each(u.concat(d), function (e) {
                            var t = B.findNextWhere(k, function (t) {
                                return t.box === e
                            }),
                                i = {
                                    left: 0,
                                    right: 0,
                                    top: P,
                                    bottom: I
                                };
                            t && e.update(t.minSize.width, y, i)
                        }), _ = o, D = r, P = s, I = l, B.each(u, function (t) {
                            _ += t.width
                        }), B.each(d, function (t) {
                            D += t.width
                        }), B.each(c, function (t) {
                            P += t.height
                        }), B.each(h, function (t) {
                            I += t.height
                        });
                        var A = Math.max(M - _, 0);
                        _ += A, D += Math.max(w - D, 0);
                        var T = Math.max(C - P, 0);
                        P += T, I += Math.max(S - I, 0);
                        var F = t - P - I,
                            O = i - _ - D;
                        O === x && F === y || (B.each(u, function (t) {
                            t.height = F
                        }), B.each(d, function (t) {
                            t.height = F
                        }), B.each(c, function (t) {
                            t.fullWidth || (t.width = O)
                        }), B.each(h, function (t) {
                            t.fullWidth || (t.width = O)
                        }), y = F, x = O);
                        var R = o + A,
                            L = s + T;
                        B.each(u.concat(c), N), R += x, L += y, B.each(d, N), B.each(h, N), e.chartArea = {
                            left: _,
                            top: P,
                            right: _ + x,
                            bottom: P + y
                        }, B.each(f, function (t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(x, y)
                        })
                    }

                    function z(e) {
                        var t = B.findNextWhere(k, function (t) {
                            return t.box === e
                        });
                        if (t)
                            if (e.isHorizontal()) {
                                var i = {
                                    left: Math.max(_, M),
                                    right: Math.max(D, w),
                                    top: 0,
                                    bottom: 0
                                };
                                e.update(e.fullWidth ? g : x, p / 2, i)
                            } else e.update(t.minSize.width, y)
                    }

                    function N(t) {
                        t.isHorizontal() ? (t.left = t.fullWidth ? o : _, t.right = t.fullWidth ? i - r : _ + x, t.top = L, t.bottom = L + t.height, L = t.bottom) : (t.left = R, t.right = R + t.width, t.top = P, t.bottom = P + y, R = t.right)
                    }
                }
            }
        }, {
            46: 46
        }],
        32: [function (t, e, i) {
            "use strict";
            var r = t(26),
                s = t(46);
            r._set("global", {
                plugins: {}
            }), e.exports = {
                _plugins: [],
                _cacheId: 0,
                register: function (t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function (t) {
                        -1 === e.indexOf(t) && e.push(t)
                    }), this._cacheId++
                },
                unregister: function (t) {
                    var i = this._plugins;
                    [].concat(t).forEach(function (t) {
                        var e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
                    }), this._cacheId++
                },
                clear: function () {
                    this._plugins = [], this._cacheId++
                },
                count: function () {
                    return this._plugins.length
                },
                getAll: function () {
                    return this._plugins
                },
                notify: function (t, e, i) {
                    var n, a, o, r, s, l = this.descriptors(t),
                        u = l.length;
                    for (n = 0; n < u; ++n)
                        if ("function" == typeof (s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;
                    return !0
                },
                descriptors: function (t) {
                    var e = t.$plugins || (t.$plugins = {});
                    if (e.id === this._cacheId) return e.descriptors;
                    var n = [],
                        a = [],
                        i = t && t.config || {},
                        o = i.options && i.options.plugins || {};
                    return this._plugins.concat(i.plugins || []).forEach(function (t) {
                        if (-1 === n.indexOf(t)) {
                            var e = t.id,
                                i = o[e];
                            !1 !== i && (!0 === i && (i = s.clone(r.global.plugins[e])), n.push(t), a.push({
                                plugin: t,
                                options: i || {}
                            }))
                        }
                    }), e.descriptors = a, e.id = this._cacheId, a
                },
                _invalidate: function (t) {
                    delete t.$plugins
                }
            }
        }, {
            26: 26,
            46: 46
        }],
        33: [function (t, e, i) {
            "use strict";
            var y = t(26),
                n = t(27),
                H = t(46),
                a = t(35);

            function k(t) {
                var e, i, n = [];
                for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
                return n
            }

            function j(t, e, i) {
                var n = t.getPixelForTick(e);
                return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
            }

            function M(t, e, i) {
                return H.isArray(e) ? H.longestText(t, i, e) : t.measureText(e).width
            }

            function w(t) {
                var e = H.valueOrDefault,
                    i = y.global,
                    n = e(t.fontSize, i.defaultFontSize),
                    a = e(t.fontStyle, i.defaultFontStyle),
                    o = e(t.fontFamily, i.defaultFontFamily);
                return {
                    size: n,
                    style: a,
                    family: o,
                    font: H.fontString(n, a, o)
                }
            }

            function C(t) {
                return H.options.toLineHeight(H.valueOrDefault(t.lineHeight, 1.2), H.valueOrDefault(t.fontSize, y.global.defaultFontSize))
            }
            y._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    display: !1,
                    labelString: "",
                    lineHeight: 1.2,
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: a.formatters.values,
                    minor: {},
                    major: {}
                }
            }), e.exports = n.extend({
                getPadding: function () {
                    return {
                        left: this.paddingLeft || 0,
                        top: this.paddingTop || 0,
                        right: this.paddingRight || 0,
                        bottom: this.paddingBottom || 0
                    }
                },
                getTicks: function () {
                    return this._ticks
                },
                mergeTicksOptions: function () {
                    var t = this.options.ticks;
                    for (var e in !1 === t.minor && (t.minor = {
                        display: !1
                    }), !1 === t.major && (t.major = {
                        display: !1
                    }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
                },
                beforeUpdate: function () {
                    H.callback(this.options.beforeUpdate, [this])
                },
                update: function (t, e, i) {
                    var n, a, o, r, s, l, u = this;
                    for (u.beforeUpdate(), u.maxWidth = t, u.maxHeight = e, u.margins = H.extend({
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }, i), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), s = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), o = u.convertTicksToLabels(s) || u.ticks, u.afterTickToLabelConversion(), n = 0, a = (u.ticks = o).length; n < a; ++n) r = o[n], (l = s[n]) ? l.label = r : s.push(l = {
                        label: r,
                        major: !1
                    });
                    return u._ticks = s, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                },
                afterUpdate: function () {
                    H.callback(this.options.afterUpdate, [this])
                },
                beforeSetDimensions: function () {
                    H.callback(this.options.beforeSetDimensions, [this])
                },
                setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                },
                afterSetDimensions: function () {
                    H.callback(this.options.afterSetDimensions, [this])
                },
                beforeDataLimits: function () {
                    H.callback(this.options.beforeDataLimits, [this])
                },
                determineDataLimits: H.noop,
                afterDataLimits: function () {
                    H.callback(this.options.afterDataLimits, [this])
                },
                beforeBuildTicks: function () {
                    H.callback(this.options.beforeBuildTicks, [this])
                },
                buildTicks: H.noop,
                afterBuildTicks: function () {
                    H.callback(this.options.afterBuildTicks, [this])
                },
                beforeTickToLabelConversion: function () {
                    H.callback(this.options.beforeTickToLabelConversion, [this])
                },
                convertTicksToLabels: function () {
                    var t = this.options.ticks;
                    this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                },
                afterTickToLabelConversion: function () {
                    H.callback(this.options.afterTickToLabelConversion, [this])
                },
                beforeCalculateTickRotation: function () {
                    H.callback(this.options.beforeCalculateTickRotation, [this])
                },
                calculateTickRotation: function () {
                    var t = this,
                        e = t.ctx,
                        i = t.options.ticks,
                        n = k(t._ticks),
                        a = w(i);
                    e.font = a.font;
                    var o = i.minRotation || 0;
                    if (n.length && t.options.display && t.isHorizontal())
                        for (var r, s = H.longestText(e, a.font, n, t.longestTextCache), l = s, u = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; u < l && o < i.maxRotation;) {
                            var d = H.toRadians(o);
                            if (r = Math.cos(d), Math.sin(d) * s > t.maxHeight) {
                                o--;
                                break
                            }
                            o++, l = r * s
                        }
                    t.labelRotation = o
                },
                afterCalculateTickRotation: function () {
                    H.callback(this.options.afterCalculateTickRotation, [this])
                },
                beforeFit: function () {
                    H.callback(this.options.beforeFit, [this])
                },
                fit: function () {
                    var t = this,
                        e = t.minSize = {
                            width: 0,
                            height: 0
                        },
                        i = k(t._ticks),
                        n = t.options,
                        a = n.ticks,
                        o = n.scaleLabel,
                        r = n.gridLines,
                        s = n.display,
                        l = t.isHorizontal(),
                        u = w(a),
                        d = n.gridLines.tickMarkLength;
                    if (e.width = l ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && r.drawTicks ? d : 0, e.height = l ? s && r.drawTicks ? d : 0 : t.maxHeight, o.display && s) {
                        var c = C(o) + H.options.toPadding(o.padding).height;
                        l ? e.height += c : e.width += c
                    }
                    if (a.display && s) {
                        var h = H.longestText(t.ctx, u.font, i, t.longestTextCache),
                            f = H.numberOfLabelLines(i),
                            g = .5 * u.size,
                            p = t.options.ticks.padding;
                        if (l) {
                            t.longestLabelWidth = h;
                            var m = H.toRadians(t.labelRotation),
                                v = Math.cos(m),
                                b = Math.sin(m) * h + u.size * f + g * (f - 1) + g;
                            e.height = Math.min(t.maxHeight, e.height + b + p), t.ctx.font = u.font;
                            var x = M(t.ctx, i[0], u.font),
                                y = M(t.ctx, i[i.length - 1], u.font);
                            0 !== t.labelRotation ? (t.paddingLeft = "bottom" === n.position ? v * x + 3 : v * g + 3, t.paddingRight = "bottom" === n.position ? v * g + 3 : v * y + 3) : (t.paddingLeft = x / 2 + 3, t.paddingRight = y / 2 + 3)
                        } else a.mirror ? h = 0 : h += p + g, e.width = Math.min(t.maxWidth, e.width + h), t.paddingTop = u.size / 2, t.paddingBottom = u.size / 2
                    }
                    t.handleMargins(), t.width = e.width, t.height = e.height
                },
                handleMargins: function () {
                    var t = this;
                    t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                },
                afterFit: function () {
                    H.callback(this.options.afterFit, [this])
                },
                isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                isFullWidth: function () {
                    return this.options.fullWidth
                },
                getRightValue: function (t) {
                    if (H.isNullOrUndef(t)) return NaN;
                    if ("number" == typeof t && !isFinite(t)) return NaN;
                    if (t)
                        if (this.isHorizontal()) {
                            if (void 0 !== t.x) return this.getRightValue(t.x)
                        } else if (void 0 !== t.y) return this.getRightValue(t.y);
                    return t
                },
                getLabelForIndex: H.noop,
                getPixelForValue: H.noop,
                getValueForPixel: H.noop,
                getPixelForTick: function (t) {
                    var e = this,
                        i = e.options.offset;
                    if (e.isHorizontal()) {
                        var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                            a = n * t + e.paddingLeft;
                        i && (a += n / 2);
                        var o = e.left + Math.round(a);
                        return o += e.isFullWidth() ? e.margins.left : 0
                    }
                    var r = e.height - (e.paddingTop + e.paddingBottom);
                    return e.top + t * (r / (e._ticks.length - 1))
                },
                getPixelForDecimal: function (t) {
                    var e = this;
                    if (e.isHorizontal()) {
                        var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                            n = e.left + Math.round(i);
                        return n += e.isFullWidth() ? e.margins.left : 0
                    }
                    return e.top + t * e.height
                },
                getBasePixel: function () {
                    return this.getPixelForValue(this.getBaseValue())
                },
                getBaseValue: function () {
                    var t = this.min,
                        e = this.max;
                    return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0
                },
                _autoSkip: function (t) {
                    var e, i, n, a, o = this,
                        r = o.isHorizontal(),
                        s = o.options.ticks.minor,
                        l = t.length,
                        u = H.toRadians(o.labelRotation),
                        d = Math.cos(u),
                        c = o.longestLabelWidth * d,
                        h = [];
                    for (s.maxTicksLimit && (a = s.maxTicksLimit), r && (e = !1, (c + s.autoSkipPadding) * l > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor((c + s.autoSkipPadding) * l / (o.width - (o.paddingLeft + o.paddingRight)))), a && a < l && (e = Math.max(e, Math.floor(l / a)))), i = 0; i < l; i++) n = t[i], (1 < e && 0 < i % e || i % e == 0 && l <= i + e) && i !== l - 1 && delete n.label, h.push(n);
                    return h
                },
                draw: function (S) {
                    var _ = this,
                        D = _.options;
                    if (D.display) {
                        var r = _.ctx,
                            P = y.global,
                            I = D.ticks.minor,
                            t = D.ticks.major || I,
                            A = D.gridLines,
                            e = D.scaleLabel,
                            T = 0 !== _.labelRotation,
                            F = _.isHorizontal(),
                            O = I.autoSkip ? _._autoSkip(_.getTicks()) : _.getTicks(),
                            s = H.valueOrDefault(I.fontColor, P.defaultFontColor),
                            l = w(I),
                            u = H.valueOrDefault(t.fontColor, P.defaultFontColor),
                            d = w(t),
                            R = A.drawTicks ? A.tickMarkLength : 0,
                            i = H.valueOrDefault(e.fontColor, P.defaultFontColor),
                            n = w(e),
                            a = H.options.toPadding(e.padding),
                            L = H.toRadians(_.labelRotation),
                            z = [],
                            N = _.options.gridLines.lineWidth,
                            B = "right" === D.position ? _.left : _.right - N - R,
                            W = "right" === D.position ? _.left + R : _.right,
                            V = "bottom" === D.position ? _.top + N : _.bottom - R - N,
                            E = "bottom" === D.position ? _.top + N + R : _.bottom + N;
                        if (H.each(O, function (t, e) {
                            if (!H.isNullOrUndef(t.label)) {
                                var i, n, a, o, r, s, l, u, d, c, h, f, g, p, m = t.label;
                                o = e === _.zeroLineIndex && D.offset === A.offsetGridLines ? (i = A.zeroLineWidth, n = A.zeroLineColor, a = A.zeroLineBorderDash, A.zeroLineBorderDashOffset) : (i = H.valueAtIndexOrDefault(A.lineWidth, e), n = H.valueAtIndexOrDefault(A.color, e), a = H.valueOrDefault(A.borderDash, P.borderDash), H.valueOrDefault(A.borderDashOffset, P.borderDashOffset));
                                var v = "middle",
                                    b = "middle",
                                    x = I.padding;
                                if (F) {
                                    var y = R + x;
                                    p = "bottom" === D.position ? (b = T ? "middle" : "top", v = T ? "right" : "center", _.top + y) : (b = T ? "middle" : "bottom", v = T ? "left" : "center", _.bottom - y);
                                    var k = j(_, e, A.offsetGridLines && 1 < O.length);
                                    k < _.left && (n = "rgba(0,0,0,0)"), k += H.aliasPixel(i), g = _.getPixelForTick(e) + I.labelOffset, r = l = d = h = k, s = V, u = E, c = S.top, f = S.bottom + N
                                } else {
                                    var M, w = "left" === D.position;
                                    M = I.mirror ? (v = w ? "left" : "right", x) : (v = w ? "right" : "left", R + x), g = w ? _.right - M : _.left + M;
                                    var C = j(_, e, A.offsetGridLines && 1 < O.length);
                                    C < _.top && (n = "rgba(0,0,0,0)"), C += H.aliasPixel(i), p = _.getPixelForTick(e) + I.labelOffset, r = B, l = W, d = S.left, h = S.right + N, s = u = c = f = C
                                }
                                z.push({
                                    tx1: r,
                                    ty1: s,
                                    tx2: l,
                                    ty2: u,
                                    x1: d,
                                    y1: c,
                                    x2: h,
                                    y2: f,
                                    labelX: g,
                                    labelY: p,
                                    glWidth: i,
                                    glColor: n,
                                    glBorderDash: a,
                                    glBorderDashOffset: o,
                                    rotation: -1 * L,
                                    label: m,
                                    major: t.major,
                                    textBaseline: b,
                                    textAlign: v
                                })
                            }
                        }), H.each(z, function (t) {
                            if (A.display && (r.save(), r.lineWidth = t.glWidth, r.strokeStyle = t.glColor, r.setLineDash && (r.setLineDash(t.glBorderDash), r.lineDashOffset = t.glBorderDashOffset), r.beginPath(), A.drawTicks && (r.moveTo(t.tx1, t.ty1), r.lineTo(t.tx2, t.ty2)), A.drawOnChartArea && (r.moveTo(t.x1, t.y1), r.lineTo(t.x2, t.y2)), r.stroke(), r.restore()), I.display) {
                                r.save(), r.translate(t.labelX, t.labelY), r.rotate(t.rotation), r.font = t.major ? d.font : l.font, r.fillStyle = t.major ? u : s, r.textBaseline = t.textBaseline, r.textAlign = t.textAlign;
                                var e = t.label;
                                if (H.isArray(e))
                                    for (var i = e.length, n = 1.5 * l.size, a = _.isHorizontal() ? 0 : -n * (i - 1) / 2, o = 0; o < i; ++o) r.fillText("" + e[o], 0, a), a += n;
                                else r.fillText(e, 0, 0);
                                r.restore()
                            }
                        }), e.display) {
                            var o, c, h = 0,
                                f = C(e) / 2;
                            if (F) o = _.left + (_.right - _.left) / 2, c = "bottom" === D.position ? _.bottom - f - a.bottom : _.top + f + a.top;
                            else {
                                var g = "left" === D.position;
                                o = g ? _.left + f + a.top : _.right - f - a.top, c = _.top + (_.bottom - _.top) / 2, h = g ? -.5 * Math.PI : .5 * Math.PI
                            }
                            r.save(), r.translate(o, c), r.rotate(h), r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = i, r.font = n.font, r.fillText(e.labelString, 0, 0), r.restore()
                        }
                        if (A.drawBorder) {
                            r.lineWidth = H.valueAtIndexOrDefault(A.lineWidth, 0), r.strokeStyle = H.valueAtIndexOrDefault(A.color, 0);
                            var p = _.left,
                                m = _.right + N,
                                v = _.top,
                                b = _.bottom + N,
                                x = H.aliasPixel(r.lineWidth);
                            F ? (v = b = "top" === D.position ? _.bottom : _.top, v += x, b += x) : (p = m = "left" === D.position ? _.right : _.left, p += x, m += x), r.beginPath(), r.moveTo(p, v), r.lineTo(m, b), r.stroke()
                        }
                    }
                }
            })
        }, {
            26: 26,
            27: 27,
            35: 35,
            46: 46
        }],
        34: [function (t, e, i) {
            "use strict";
            var n = t(26),
                a = t(46),
                o = t(31);
            e.exports = {
                constructors: {},
                defaults: {},
                registerScaleType: function (t, e, i) {
                    this.constructors[t] = e, this.defaults[t] = a.clone(i)
                },
                getScaleConstructor: function (t) {
                    return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                },
                getScaleDefaults: function (t) {
                    return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {}
                },
                updateScaleDefaults: function (t, e) {
                    this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e))
                },
                addScalesToLayout: function (e) {
                    a.each(e.scales, function (t) {
                        t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, o.addBox(e, t)
                    })
                }
            }
        }, {
            26: 26,
            31: 31,
            46: 46
        }],
        35: [function (t, e, i) {
            "use strict";
            var l = t(46);
            e.exports = {
                formatters: {
                    values: function (t) {
                        return l.isArray(t) ? t : "" + t
                    },
                    linear: function (t, e, i) {
                        var n = 3 < i.length ? i[2] - i[1] : i[1] - i[0];
                        1 < Math.abs(n) && t !== Math.floor(t) && (n = t - Math.floor(t));
                        var a = l.log10(Math.abs(n)),
                            o = "";
                        if (0 !== t)
                            if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
                                var r = l.log10(Math.abs(t));
                                o = t.toExponential(Math.floor(r) - Math.floor(a))
                            } else {
                                var s = -1 * Math.floor(a);
                                s = Math.max(Math.min(s, 20), 0), o = t.toFixed(s)
                            }
                        else o = "0";
                        return o
                    },
                    logarithmic: function (t, e, i) {
                        var n = t / Math.pow(10, Math.floor(l.log10(t)));
                        return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                    }
                }
            }
        }, {
            46: 46
        }],
        36: [function (t, e, i) {
            "use strict";
            var n = t(26),
                a = t(27),
                R = t(46);
            n._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: R.noop,
                        title: function (t, e) {
                            var i = "",
                                n = e.labels,
                                a = n ? n.length : 0;
                            if (0 < t.length) {
                                var o = t[0];
                                o.xLabel ? i = o.xLabel : 0 < a && o.index < a && (i = n[o.index])
                            }
                            return i
                        },
                        afterTitle: R.noop,
                        beforeBody: R.noop,
                        beforeLabel: R.noop,
                        label: function (t, e) {
                            var i = e.datasets[t.datasetIndex].label || "";
                            return i && (i += ": "), i += t.yLabel
                        },
                        labelColor: function (t, e) {
                            var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                            return {
                                borderColor: i.borderColor,
                                backgroundColor: i.backgroundColor
                            }
                        },
                        labelTextColor: function () {
                            return this._options.bodyFontColor
                        },
                        afterLabel: R.noop,
                        afterBody: R.noop,
                        beforeFooter: R.noop,
                        footer: R.noop,
                        afterFooter: R.noop
                    }
                }
            });
            var L = {
                average: function (t) {
                    if (!t.length) return !1;
                    var e, i, n = 0,
                        a = 0,
                        o = 0;
                    for (e = 0, i = t.length; e < i; ++e) {
                        var r = t[e];
                        if (r && r.hasValue()) {
                            var s = r.tooltipPosition();
                            n += s.x, a += s.y, ++o
                        }
                    }
                    return {
                        x: Math.round(n / o),
                        y: Math.round(a / o)
                    }
                },
                nearest: function (t, e) {
                    var i, n, a, o = e.x,
                        r = e.y,
                        s = Number.POSITIVE_INFINITY;
                    for (i = 0, n = t.length; i < n; ++i) {
                        var l = t[i];
                        if (l && l.hasValue()) {
                            var u = l.getCenterPoint(),
                                d = R.distanceBetweenPoints(e, u);
                            d < s && (s = d, a = l)
                        }
                    }
                    if (a) {
                        var c = a.tooltipPosition();
                        o = c.x, r = c.y
                    }
                    return {
                        x: o,
                        y: r
                    }
                }
            };

            function h(t, e) {
                var i = R.color(t);
                return i.alpha(e * i.alpha()).rgbaString()
            }

            function r(t, e) {
                return e && (R.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
            }

            function s(t) {
                return ("string" == typeof t || t instanceof String) && -1 < t.indexOf("\n") ? t.split("\n") : t
            }

            function z(t) {
                var e = n.global,
                    i = R.valueOrDefault;
                return {
                    xPadding: t.xPadding,
                    yPadding: t.yPadding,
                    xAlign: t.xAlign,
                    yAlign: t.yAlign,
                    bodyFontColor: t.bodyFontColor,
                    _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
                    _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
                    _bodyAlign: t.bodyAlign,
                    bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
                    bodySpacing: t.bodySpacing,
                    titleFontColor: t.titleFontColor,
                    _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
                    _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
                    titleFontSize: i(t.titleFontSize, e.defaultFontSize),
                    _titleAlign: t.titleAlign,
                    titleSpacing: t.titleSpacing,
                    titleMarginBottom: t.titleMarginBottom,
                    footerFontColor: t.footerFontColor,
                    _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
                    _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
                    footerFontSize: i(t.footerFontSize, e.defaultFontSize),
                    _footerAlign: t.footerAlign,
                    footerSpacing: t.footerSpacing,
                    footerMarginTop: t.footerMarginTop,
                    caretSize: t.caretSize,
                    cornerRadius: t.cornerRadius,
                    backgroundColor: t.backgroundColor,
                    opacity: 0,
                    legendColorBackground: t.multiKeyBackground,
                    displayColors: t.displayColors,
                    borderColor: t.borderColor,
                    borderWidth: t.borderWidth
                }
            }

            function o(t) {
                return r([], s(t))
            } (e.exports = a.extend({
                initialize: function () {
                    this._model = z(this._options), this._lastActive = []
                },
                getTitle: function () {
                    var t = this._options.callbacks,
                        e = t.beforeTitle.apply(this, arguments),
                        i = t.title.apply(this, arguments),
                        n = t.afterTitle.apply(this, arguments),
                        a = [];
                    return a = r(a = r(a = r(a, s(e)), s(i)), s(n))
                },
                getBeforeBody: function () {
                    return o(this._options.callbacks.beforeBody.apply(this, arguments))
                },
                getBody: function (t, i) {
                    var n = this,
                        a = n._options.callbacks,
                        o = [];
                    return R.each(t, function (t) {
                        var e = {
                            before: [],
                            lines: [],
                            after: []
                        };
                        r(e.before, s(a.beforeLabel.call(n, t, i))), r(e.lines, a.label.call(n, t, i)), r(e.after, s(a.afterLabel.call(n, t, i))), o.push(e)
                    }), o
                },
                getAfterBody: function () {
                    return o(this._options.callbacks.afterBody.apply(this, arguments))
                },
                getFooter: function () {
                    var t = this._options.callbacks,
                        e = t.beforeFooter.apply(this, arguments),
                        i = t.footer.apply(this, arguments),
                        n = t.afterFooter.apply(this, arguments),
                        a = [];
                    return a = r(a = r(a = r(a, s(e)), s(i)), s(n))
                },
                update: function (t) {
                    var e, i, n, a, o, r, s, l, u, d, c, h, f, g, p, m, v, b, x, y, k = this,
                        M = k._options,
                        w = k._model,
                        C = k._model = z(M),
                        S = k._active,
                        _ = k._data,
                        D = {
                            xAlign: w.xAlign,
                            yAlign: w.yAlign
                        },
                        P = {
                            x: w.x,
                            y: w.y
                        },
                        I = {
                            width: w.width,
                            height: w.height
                        },
                        A = {
                            x: w.caretX,
                            y: w.caretY
                        };
                    if (S.length) {
                        C.opacity = 1;
                        var T = [],
                            F = [];
                        A = L[M.position].call(k, S, k._eventPosition);
                        var O = [];
                        for (e = 0, i = S.length; e < i; ++e) O.push((m = S[e], b = v = void 0, v = m._xScale, b = m._yScale || m._scale, x = m._index, y = m._datasetIndex, {
                            xLabel: v ? v.getLabelForIndex(x, y) : "",
                            yLabel: b ? b.getLabelForIndex(x, y) : "",
                            index: x,
                            datasetIndex: y,
                            x: m._model.x,
                            y: m._model.y
                        }));
                        M.filter && (O = O.filter(function (t) {
                            return M.filter(t, _)
                        })), M.itemSort && (O = O.sort(function (t, e) {
                            return M.itemSort(t, e, _)
                        })), R.each(O, function (t) {
                            T.push(M.callbacks.labelColor.call(k, t, k._chart)), F.push(M.callbacks.labelTextColor.call(k, t, k._chart))
                        }), C.title = k.getTitle(O, _), C.beforeBody = k.getBeforeBody(O, _), C.body = k.getBody(O, _), C.afterBody = k.getAfterBody(O, _), C.footer = k.getFooter(O, _), C.x = Math.round(A.x), C.y = Math.round(A.y), C.caretPadding = M.caretPadding, C.labelColors = T, C.labelTextColors = F, C.dataPoints = O, D = function (t, e) {
                            var i, n, a, o, r, s = t._model,
                                l = t._chart,
                                u = t._chart.chartArea,
                                d = "center",
                                c = "center";
                            s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");
                            var h = (u.left + u.right) / 2,
                                f = (u.top + u.bottom) / 2;
                            n = "center" === c ? (i = function (t) {
                                return t <= h
                            }, function (t) {
                                return h < t
                            }) : (i = function (t) {
                                return t <= e.width / 2
                            }, function (t) {
                                return t >= l.width - e.width / 2
                            }), a = function (t) {
                                return t + e.width + s.caretSize + s.caretPadding > l.width
                            }, o = function (t) {
                                return t - e.width - s.caretSize - s.caretPadding < 0
                            }, r = function (t) {
                                return t <= f ? "top" : "bottom"
                            }, i(s.x) ? (d = "left", a(s.x) && (d = "center", c = r(s.y))) : n(s.x) && (d = "right", o(s.x) && (d = "center", c = r(s.y)));
                            var g = t._options;
                            return {
                                xAlign: g.xAlign ? g.xAlign : d,
                                yAlign: g.yAlign ? g.yAlign : c
                            }
                        }(this, I = function (t, e) {
                            var i = t._chart.ctx,
                                n = 2 * e.yPadding,
                                a = 0,
                                o = e.body,
                                r = o.reduce(function (t, e) {
                                    return t + e.before.length + e.lines.length + e.after.length
                                }, 0);
                            r += e.beforeBody.length + e.afterBody.length;
                            var s = e.title.length,
                                l = e.footer.length,
                                u = e.titleFontSize,
                                d = e.bodyFontSize,
                                c = e.footerFontSize;
                            n += s * u, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += r * d, n += r ? (r - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * c, n += l ? (l - 1) * e.footerSpacing : 0;
                            var h = 0,
                                f = function (t) {
                                    a = Math.max(a, i.measureText(t).width + h)
                                };
                            return i.font = R.fontString(u, e._titleFontStyle, e._titleFontFamily), R.each(e.title, f), i.font = R.fontString(d, e._bodyFontStyle, e._bodyFontFamily), R.each(e.beforeBody.concat(e.afterBody), f), h = e.displayColors ? d + 2 : 0, R.each(o, function (t) {
                                R.each(t.before, f), R.each(t.lines, f), R.each(t.after, f)
                            }), h = 0, i.font = R.fontString(c, e._footerFontStyle, e._footerFontFamily), R.each(e.footer, f), {
                                width: a += 2 * e.xPadding,
                                height: n
                            }
                        }(this, C)), n = C, a = I, o = D, r = k._chart, s = n.x, l = n.y, u = n.caretSize, d = n.caretPadding, c = n.cornerRadius, h = o.xAlign, f = o.yAlign, g = u + d, p = c + d, "right" === h ? s -= a.width : "center" === h && ((s -= a.width / 2) + a.width > r.width && (s = r.width - a.width), s < 0 && (s = 0)), "top" === f ? l += g : l -= "bottom" === f ? a.height + g : a.height / 2, "center" === f ? "left" === h ? s += g : "right" === h && (s -= g) : "left" === h ? s -= p : "right" === h && (s += p), P = {
                            x: s,
                            y: l
                        }
                    } else C.opacity = 0;
                    return C.xAlign = D.xAlign, C.yAlign = D.yAlign, C.x = P.x, C.y = P.y, C.width = I.width, C.height = I.height, C.caretX = A.x, C.caretY = A.y, k._model = C, t && M.custom && M.custom.call(k, C), k
                },
                drawCaret: function (t, e) {
                    var i = this._chart.ctx,
                        n = this._view,
                        a = this.getCaretPosition(t, e, n);
                    i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3)
                },
                getCaretPosition: function (t, e, i) {
                    var n, a, o, r, s, l, u = i.caretSize,
                        d = i.cornerRadius,
                        c = i.xAlign,
                        h = i.yAlign,
                        f = t.x,
                        g = t.y,
                        p = e.width,
                        m = e.height;
                    if ("center" === h) s = g + m / 2, l = "left" === c ? (a = (n = f) - u, o = n, r = s + u, s - u) : (a = (n = f + p) + u, o = n, r = s - u, s + u);
                    else if (o = (n = "left" === c ? (a = f + d + u) - u : "right" === c ? (a = f + p - d - u) - u : (a = i.caretX) - u, a + u), "top" === h) s = (r = g) - u, l = r;
                    else {
                        s = (r = g + m) + u, l = r;
                        var v = o;
                        o = n, n = v
                    }
                    return {
                        x1: n,
                        x2: a,
                        x3: o,
                        y1: r,
                        y2: s,
                        y3: l
                    }
                },
                drawTitle: function (t, e, i, n) {
                    var a = e.title;
                    if (a.length) {
                        i.textAlign = e._titleAlign, i.textBaseline = "top";
                        var o, r, s = e.titleFontSize,
                            l = e.titleSpacing;
                        for (i.fillStyle = h(e.titleFontColor, n), i.font = R.fontString(s, e._titleFontStyle, e._titleFontFamily), o = 0, r = a.length; o < r; ++o) i.fillText(a[o], t.x, t.y), t.y += s + l, o + 1 === a.length && (t.y += e.titleMarginBottom - l)
                    }
                },
                drawBody: function (n, a, o, r) {
                    var s = a.bodyFontSize,
                        e = a.bodySpacing,
                        t = a.body;
                    o.textAlign = a._bodyAlign, o.textBaseline = "top", o.font = R.fontString(s, a._bodyFontStyle, a._bodyFontFamily);
                    var i = 0,
                        l = function (t) {
                            o.fillText(t, n.x + i, n.y), n.y += s + e
                        };
                    o.fillStyle = h(a.bodyFontColor, r), R.each(a.beforeBody, l);
                    var u = a.displayColors;
                    i = u ? s + 2 : 0, R.each(t, function (t, e) {
                        var i = h(a.labelTextColors[e], r);
                        o.fillStyle = i, R.each(t.before, l), R.each(t.lines, function (t) {
                            u && (o.fillStyle = h(a.legendColorBackground, r), o.fillRect(n.x, n.y, s, s), o.lineWidth = 1, o.strokeStyle = h(a.labelColors[e].borderColor, r), o.strokeRect(n.x, n.y, s, s), o.fillStyle = h(a.labelColors[e].backgroundColor, r), o.fillRect(n.x + 1, n.y + 1, s - 2, s - 2), o.fillStyle = i), l(t)
                        }), R.each(t.after, l)
                    }), i = 0, R.each(a.afterBody, l), n.y -= e
                },
                drawFooter: function (e, i, n, t) {
                    var a = i.footer;
                    a.length && (e.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = h(i.footerFontColor, t), n.font = R.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), R.each(a, function (t) {
                        n.fillText(t, e.x, e.y), e.y += i.footerFontSize + i.footerSpacing
                    }))
                },
                drawBackground: function (t, e, i, n, a) {
                    i.fillStyle = h(e.backgroundColor, a), i.strokeStyle = h(e.borderColor, a), i.lineWidth = e.borderWidth;
                    var o = e.xAlign,
                        r = e.yAlign,
                        s = t.x,
                        l = t.y,
                        u = n.width,
                        d = n.height,
                        c = e.cornerRadius;
                    i.beginPath(), i.moveTo(s + c, l), "top" === r && this.drawCaret(t, n), i.lineTo(s + u - c, l), i.quadraticCurveTo(s + u, l, s + u, l + c), "center" === r && "right" === o && this.drawCaret(t, n), i.lineTo(s + u, l + d - c), i.quadraticCurveTo(s + u, l + d, s + u - c, l + d), "bottom" === r && this.drawCaret(t, n), i.lineTo(s + c, l + d), i.quadraticCurveTo(s, l + d, s, l + d - c), "center" === r && "left" === o && this.drawCaret(t, n), i.lineTo(s, l + c), i.quadraticCurveTo(s, l, s + c, l), i.closePath(), i.fill(), 0 < e.borderWidth && i.stroke()
                },
                draw: function () {
                    var t = this._chart.ctx,
                        e = this._view;
                    if (0 !== e.opacity) {
                        var i = {
                            width: e.width,
                            height: e.height
                        },
                            n = {
                                x: e.x,
                                y: e.y
                            },
                            a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                            o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                        this._options.enabled && o && (this.drawBackground(n, e, t, i, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a))
                    }
                },
                handleEvent: function (t) {
                    var e, i = this,
                        n = i._options;
                    return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !R.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
                        x: t.x,
                        y: t.y
                    }, i.update(!0), i.pivot())), e
                }
            })).positioners = L
        }, {
            26: 26,
            27: 27,
            46: 46
        }],
        37: [function (t, e, i) {
            "use strict";
            var n = t(26),
                a = t(27),
                d = t(46);
            n._set("global", {
                elements: {
                    arc: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), e.exports = a.extend({
                inLabelRange: function (t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                },
                inRange: function (t, e) {
                    var i = this._view;
                    if (i) {
                        for (var n = d.getAngleFromPoint(i, {
                            x: t,
                            y: e
                        }), a = n.angle, o = n.distance, r = i.startAngle, s = i.endAngle; s < r;) s += 2 * Math.PI;
                        for (; s < a;) a -= 2 * Math.PI;
                        for (; a < r;) a += 2 * Math.PI;
                        var l = r <= a && a <= s,
                            u = o >= i.innerRadius && o <= i.outerRadius;
                        return l && u
                    }
                    return !1
                },
                getCenterPoint: function () {
                    var t = this._view,
                        e = (t.startAngle + t.endAngle) / 2,
                        i = (t.innerRadius + t.outerRadius) / 2;
                    return {
                        x: t.x + Math.cos(e) * i,
                        y: t.y + Math.sin(e) * i
                    }
                },
                getArea: function () {
                    var t = this._view;
                    return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                },
                tooltipPosition: function () {
                    var t = this._view,
                        e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {
                        x: t.x + Math.cos(e) * i,
                        y: t.y + Math.sin(e) * i
                    }
                },
                draw: function () {
                    var t = this._chart.ctx,
                        e = this._view,
                        i = e.startAngle,
                        n = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }, {
            26: 26,
            27: 27,
            46: 46
        }],
        38: [function (t, e, i) {
            "use strict";
            var n = t(26),
                a = t(27),
                d = t(46),
                c = n.global;
            n._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: c.defaultColor,
                        borderWidth: 3,
                        borderColor: c.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), e.exports = a.extend({
                draw: function () {
                    var t, e, i, n, a = this._view,
                        o = this._chart.ctx,
                        r = a.spanGaps,
                        s = this._children.slice(),
                        l = c.elements.line,
                        u = -1;
                    for (this._loop && s.length && s.push(s[0]), o.save(), o.lineCap = a.borderCapStyle || l.borderCapStyle, o.setLineDash && o.setLineDash(a.borderDash || l.borderDash), o.lineDashOffset = a.borderDashOffset || l.borderDashOffset, o.lineJoin = a.borderJoinStyle || l.borderJoinStyle, o.lineWidth = a.borderWidth || l.borderWidth, o.strokeStyle = a.borderColor || c.defaultColor, o.beginPath(), u = -1, t = 0; t < s.length; ++t) e = s[t], i = d.previousItem(s, t), n = e._view, 0 === t ? n.skip || (o.moveTo(n.x, n.y), u = t) : (i = -1 === u ? i : s[u], n.skip || (u !== t - 1 && !r || -1 === u ? o.moveTo(n.x, n.y) : d.canvas.lineTo(o, i._view, e._view), u = t));
                    o.stroke(), o.restore()
                }
            })
        }, {
            26: 26,
            27: 27,
            46: 46
        }],
        39: [function (t, e, i) {
            "use strict";
            var u = t(26),
                n = t(27),
                d = t(46),
                c = u.global.defaultColor;

            function a(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
            }
            u._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: c,
                        borderColor: c,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), e.exports = n.extend({
                inRange: function (t, e) {
                    var i = this._view;
                    return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                },
                inLabelRange: a,
                inXRange: a,
                inYRange: function (t) {
                    var e = this._view;
                    return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                },
                getCenterPoint: function () {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                },
                getArea: function () {
                    return Math.PI * Math.pow(this._view.radius, 2)
                },
                tooltipPosition: function () {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y,
                        padding: t.radius + t.borderWidth
                    }
                },
                draw: function (t) {
                    var e = this._view,
                        i = this._model,
                        n = this._chart.ctx,
                        a = e.pointStyle,
                        o = e.rotation,
                        r = e.radius,
                        s = e.x,
                        l = e.y;
                    e.skip || (void 0 === t || i.x >= t.left && 1.01 * t.right >= i.x && i.y >= t.top && 1.01 * t.bottom >= i.y) && (n.strokeStyle = e.borderColor || c, n.lineWidth = d.valueOrDefault(e.borderWidth, u.global.elements.point.borderWidth), n.fillStyle = e.backgroundColor || c, d.canvas.drawPoint(n, a, r, s, l, o))
                }
            })
        }, {
            26: 26,
            27: 27,
            46: 46
        }],
        40: [function (t, e, i) {
            "use strict";
            var n = t(26),
                a = t(27);

            function l(t) {
                return void 0 !== t._view.width
            }

            function o(t) {
                var e, i, n, a, o = t._view;
                if (l(t)) {
                    var r = o.width / 2;
                    e = o.x - r, i = o.x + r, n = Math.min(o.y, o.base), a = Math.max(o.y, o.base)
                } else {
                    var s = o.height / 2;
                    e = Math.min(o.x, o.base), i = Math.max(o.x, o.base), n = o.y - s, a = o.y + s
                }
                return {
                    left: e,
                    top: n,
                    right: i,
                    bottom: a
                }
            }
            n._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: n.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), e.exports = a.extend({
                draw: function () {
                    var t, e, i, n, a, o, r, s = this._chart.ctx,
                        l = this._view,
                        u = l.borderWidth;
                    if (r = l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, a = t < e ? 1 : -1, o = 1, l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, a = 1, o = (i = l.y) < (n = l.base) ? 1 : -1, l.borderSkipped || "bottom"), u) {
                        var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
                            c = (u = d < u ? d : u) / 2,
                            h = t + ("left" !== r ? c * a : 0),
                            f = e + ("right" !== r ? -c * a : 0),
                            g = i + ("top" !== r ? c * o : 0),
                            p = n + ("bottom" !== r ? -c * o : 0);
                        h !== f && (i = g, n = p), g !== p && (t = h, e = f)
                    }
                    s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
                    var m = [
                        [t, n],
                        [t, i],
                        [e, i],
                        [e, n]
                    ],
                        v = ["bottom", "left", "top", "right"].indexOf(r, 0);

                    function b(t) {
                        return m[(v + t) % 4]
                    } - 1 === v && (v = 0);
                    var x = b(0);
                    s.moveTo(x[0], x[1]);
                    for (var y = 1; y < 4; y++) x = b(y), s.lineTo(x[0], x[1]);
                    s.fill(), u && s.stroke()
                },
                height: function () {
                    var t = this._view;
                    return t.base - t.y
                },
                inRange: function (t, e) {
                    var i = !1;
                    if (this._view) {
                        var n = o(this);
                        i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom
                    }
                    return i
                },
                inLabelRange: function (t, e) {
                    if (!this._view) return !1;
                    var i = o(this);
                    return l(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
                },
                inXRange: function (t) {
                    var e = o(this);
                    return t >= e.left && t <= e.right
                },
                inYRange: function (t) {
                    var e = o(this);
                    return t >= e.top && t <= e.bottom
                },
                getCenterPoint: function () {
                    var t, e, i = this._view;
                    return e = l(this) ? (t = i.x, (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, i.y), {
                        x: t,
                        y: e
                    }
                },
                getArea: function () {
                    var t = this._view;
                    return t.width * Math.abs(t.y - t.base)
                },
                tooltipPosition: function () {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
            })
        }, {
            26: 26,
            27: 27
        }],
        41: [function (t, e, i) {
            "use strict";
            e.exports = {}, e.exports.Arc = t(37), e.exports.Line = t(38), e.exports.Point = t(39), e.exports.Rectangle = t(40)
        }, {
            37: 37,
            38: 38,
            39: 39,
            40: 40
        }],
        42: [function (t, e, i) {
            "use strict";
            var n = t(43);
            i = e.exports = {
                clear: function (t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                },
                roundedRect: function (t, e, i, n, a, o) {
                    if (o) {
                        var r = Math.min(o, a / 2 - 1e-7, n / 2 - 1e-7);
                        t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.arcTo(e + n, i, e + n, i + r, r), t.lineTo(e + n, i + a - r), t.arcTo(e + n, i + a, e + n - r, i + a, r), t.lineTo(e + r, i + a), t.arcTo(e, i + a, e, i + a - r, r), t.lineTo(e, i + r), t.arcTo(e, i, e + r, i, r), t.closePath(), t.moveTo(e, i)
                    } else t.rect(e, i, n, a)
                },
                drawPoint: function (t, e, i, n, a, o) {
                    var r, s, l, u, d, c;
                    if (o = o || 0, !e || "object" != typeof e || "[object HTMLImageElement]" !== (r = e.toString()) && "[object HTMLCanvasElement]" !== r) {
                        if (!(isNaN(i) || i <= 0)) {
                            switch (t.save(), t.translate(n, a), t.rotate(o * Math.PI / 180), t.beginPath(), e) {
                                default:
                                    t.arc(0, 0, i, 0, 2 * Math.PI), t.closePath();
                                    break;
                                case "triangle":
                                    d = (s = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(-s / 2, d / 3), t.lineTo(s / 2, d / 3), t.lineTo(0, -2 * d / 3), t.closePath();
                                    break;
                                case "rect":
                                    c = 1 / Math.SQRT2 * i, t.rect(-c, -c, 2 * c, 2 * c);
                                    break;
                                case "rectRounded":
                                    var h = i / Math.SQRT2,
                                        f = -h,
                                        g = -h,
                                        p = Math.SQRT2 * i;
                                    this.roundedRect(t, f, g, p, p, .425 * i);
                                    break;
                                case "rectRot":
                                    c = 1 / Math.SQRT2 * i, t.moveTo(-c, 0), t.lineTo(0, c), t.lineTo(c, 0), t.lineTo(0, -c), t.closePath();
                                    break;
                                case "cross":
                                    t.moveTo(0, i), t.lineTo(0, -i), t.moveTo(-i, 0), t.lineTo(i, 0);
                                    break;
                                case "crossRot":
                                    l = Math.cos(Math.PI / 4) * i, u = Math.sin(Math.PI / 4) * i, t.moveTo(-l, -u), t.lineTo(l, u), t.moveTo(-l, u), t.lineTo(l, -u);
                                    break;
                                case "star":
                                    t.moveTo(0, i), t.lineTo(0, -i), t.moveTo(-i, 0), t.lineTo(i, 0), l = Math.cos(Math.PI / 4) * i, u = Math.sin(Math.PI / 4) * i, t.moveTo(-l, -u), t.lineTo(l, u), t.moveTo(-l, u), t.lineTo(l, -u);
                                    break;
                                case "line":
                                    t.moveTo(-i, 0), t.lineTo(i, 0);
                                    break;
                                case "dash":
                                    t.moveTo(0, 0), t.lineTo(i, 0)
                            }
                            t.fill(), t.stroke(), t.restore()
                        }
                    } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height)
                },
                clipArea: function (t, e) {
                    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                },
                unclipArea: function (t) {
                    t.restore()
                },
                lineTo: function (t, e, i, n) {
                    if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
                    i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
                }
            };
            n.clear = i.clear, n.drawRoundedRectangle = function (t) {
                t.beginPath(), i.roundedRect.apply(i, arguments)
            }
        }, {
            43: 43
        }],
        43: [function (t, e, i) {
            "use strict";
            var n, d = {
                noop: function () { },
                uid: (n = 0, function () {
                    return n++
                }),
                isNullOrUndef: function (t) {
                    return null == t
                },
                isArray: Array.isArray ? Array.isArray : function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                isObject: function (t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                },
                valueOrDefault: function (t, e) {
                    return void 0 === t ? e : t
                },
                valueAtIndexOrDefault: function (t, e, i) {
                    return d.valueOrDefault(d.isArray(t) ? t[e] : t, i)
                },
                callback: function (t, e, i) {
                    if (t && "function" == typeof t.call) return t.apply(i, e)
                },
                each: function (t, e, i, n) {
                    var a, o, r;
                    if (d.isArray(t))
                        if (o = t.length, n)
                            for (a = o - 1; 0 <= a; a--) e.call(i, t[a], a);
                        else
                            for (a = 0; a < o; a++) e.call(i, t[a], a);
                    else if (d.isObject(t))
                        for (o = (r = Object.keys(t)).length, a = 0; a < o; a++) e.call(i, t[r[a]], r[a])
                },
                arrayEquals: function (t, e) {
                    var i, n, a, o;
                    if (!t || !e || t.length !== e.length) return !1;
                    for (i = 0, n = t.length; i < n; ++i)
                        if (a = t[i], o = e[i], a instanceof Array && o instanceof Array) {
                            if (!d.arrayEquals(a, o)) return !1
                        } else if (a !== o) return !1;
                    return !0
                },
                clone: function (t) {
                    if (d.isArray(t)) return t.map(d.clone);
                    if (d.isObject(t)) {
                        for (var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) e[i[a]] = d.clone(t[i[a]]);
                        return e
                    }
                    return t
                },
                _merger: function (t, e, i, n) {
                    var a = e[t],
                        o = i[t];
                    d.isObject(a) && d.isObject(o) ? d.merge(a, o, n) : e[t] = d.clone(o)
                },
                _mergerIf: function (t, e, i) {
                    var n = e[t],
                        a = i[t];
                    d.isObject(n) && d.isObject(a) ? d.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = d.clone(a))
                },
                merge: function (t, e, i) {
                    var n, a, o, r, s, l = d.isArray(e) ? e : [e],
                        u = l.length;
                    if (!d.isObject(t)) return t;
                    for (n = (i = i || {}).merger || d._merger, a = 0; a < u; ++a)
                        if (e = l[a], d.isObject(e))
                            for (s = 0, r = (o = Object.keys(e)).length; s < r; ++s) n(o[s], t, e, i);
                    return t
                },
                mergeIf: function (t, e) {
                    return d.merge(t, e, {
                        merger: d._mergerIf
                    })
                },
                extend: function (i) {
                    for (var t = function (t, e) {
                        i[e] = t
                    }, e = 1, n = arguments.length; e < n; ++e) d.each(arguments[e], t);
                    return i
                },
                inherits: function (t) {
                    var e = this,
                        i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                            return e.apply(this, arguments)
                        },
                        n = function () {
                            this.constructor = i
                        };
                    return n.prototype = e.prototype, i.prototype = new n, i.extend = d.inherits, t && d.extend(i.prototype, t), i.__super__ = e.prototype, i
                }
            };
            (e.exports = d).callCallback = d.callback, d.indexOf = function (t, e, i) {
                return Array.prototype.indexOf.call(t, e, i)
            }, d.getValueOrDefault = d.valueOrDefault, d.getValueAtIndexOrDefault = d.valueAtIndexOrDefault
        }, {}],
        44: [function (t, e, i) {
            "use strict";
            var n = t(43),
                a = {
                    linear: function (t) {
                        return t
                    },
                    easeInQuad: function (t) {
                        return t * t
                    },
                    easeOutQuad: function (t) {
                        return -t * (t - 2)
                    },
                    easeInOutQuad: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function (t) {
                        return t * t * t
                    },
                    easeOutCubic: function (t) {
                        return (t -= 1) * t * t + 1
                    },
                    easeInOutCubic: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function (t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function (t) {
                        return -((t -= 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function (t) {
                        return t * t * t * t * t
                    },
                    easeOutQuint: function (t) {
                        return (t -= 1) * t * t * t * t + 1
                    },
                    easeInOutQuint: function (t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function (t) {
                        return 1 - Math.cos(t * (Math.PI / 2))
                    },
                    easeOutSine: function (t) {
                        return Math.sin(t * (Math.PI / 2))
                    },
                    easeInOutSine: function (t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    },
                    easeInExpo: function (t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function (t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    easeInOutExpo: function (t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                    },
                    easeInCirc: function (t) {
                        return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)
                    },
                    easeOutCirc: function (t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    },
                    easeInOutCirc: function (t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function (t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
                    },
                    easeOutElastic: function (t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
                    },
                    easeInOutElastic: function (t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), e = n < 1 ? (n = 1, i / 4) : i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
                    },
                    easeInBack: function (t) {
                        return t * t * (2.70158 * t - 1.70158)
                    },
                    easeOutBack: function (t) {
                        return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                    },
                    easeInOutBack: function (t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    easeInBounce: function (t) {
                        return 1 - a.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function (t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    easeInOutBounce: function (t) {
                        return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5
                    }
                };
            e.exports = {
                effects: a
            }, n.easingEffects = a
        }, {
            43: 43
        }],
        45: [function (t, e, i) {
            "use strict";
            var r = t(43);
            e.exports = {
                toLineHeight: function (t, e) {
                    var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!i || "normal" === i[1]) return 1.2 * e;
                    switch (t = +i[2], i[3]) {
                        case "px":
                            return t;
                        case "%":
                            t /= 100
                    }
                    return e * t
                },
                toPadding: function (t) {
                    var e, i, n, a;
                    return r.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, a = +t.left || 0) : e = i = n = a = +t || 0, {
                        top: e,
                        right: i,
                        bottom: n,
                        left: a,
                        height: e + n,
                        width: a + i
                    }
                },
                resolve: function (t, e, i) {
                    var n, a, o;
                    for (n = 0, a = t.length; n < a; ++n)
                        if (void 0 !== (o = t[n]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== i && r.isArray(o) && (o = o[i]), void 0 !== o)) return o
                }
            }
        }, {
            43: 43
        }],
        46: [function (t, e, i) {
            "use strict";
            e.exports = t(43), e.exports.easing = t(44), e.exports.canvas = t(42), e.exports.options = t(45)
        }, {
            42: 42,
            43: 43,
            44: 44,
            45: 45
        }],
        47: [function (t, e, i) {
            e.exports = {
                acquireContext: function (t) {
                    return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                }
            }
        }, {}],
        48: [function (t, e, i) {
            "use strict";
            var f = t(46),
                g = "$chartjs",
                p = "chartjs-",
                m = p + "render-monitor",
                v = p + "render-animation",
                b = ["animationstart", "webkitAnimationStart"],
                s = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };

            function l(t, e) {
                var i = f.getStyle(t, e),
                    n = i && i.match(/^(\d+)(\.\d+)?px$/);
                return n ? Number(n[1]) : void 0
            }
            var n = !! function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    window.addEventListener("e", null, e)
                } catch (t) { }
                return t
            }() && {
                passive: !0
            };

            function x(t, e, i) {
                t.addEventListener(e, i, n)
            }

            function r(t, e, i) {
                t.removeEventListener(e, i, n)
            }

            function y(t, e, i, n, a) {
                return {
                    type: t,
                    chart: e,
                    native: a || null,
                    x: void 0 !== i ? i : null,
                    y: void 0 !== n ? n : null
                }
            }

            function a(e, t, i) {
                var n, a, o, r, s, l, u, d, c = e[g] || (e[g] = {}),
                    h = c.resizer = function (t) {
                        var e = document.createElement("div"),
                            i = p + "size-monitor",
                            n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                        e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                        var a = e.childNodes[0],
                            o = e.childNodes[1];
                        e._reset = function () {
                            a.scrollLeft = 1e6, a.scrollTop = 1e6, o.scrollLeft = 1e6, o.scrollTop = 1e6
                        };
                        var r = function () {
                            e._reset(), t()
                        };
                        return x(a, "scroll", r.bind(a, "expand")), x(o, "scroll", r.bind(o, "shrink")), e
                    }((o = !(n = function () {
                        if (c.resizer) return t(y("resize", i))
                    }), r = [], function () {
                        r = Array.prototype.slice.call(arguments), a = a || this, o || (o = !0, f.requestAnimFrame.call(window, function () {
                            o = !1, n.apply(a, r)
                        }))
                    }));
                l = function () {
                    if (c.resizer) {
                        var t = e.parentNode;
                        t && t !== h.parentNode && t.insertBefore(h, t.firstChild), h._reset()
                    }
                }, u = (s = e)[g] || (s[g] = {}), d = u.renderProxy = function (t) {
                    t.animationName === v && l()
                }, f.each(b, function (t) {
                    x(s, t, d)
                }), u.reflow = !!s.offsetParent, s.classList.add(m)
            }

            function o(t) {
                var e, i, n, a = t[g] || {},
                    o = a.resizer;
                delete a.resizer, i = (e = t)[g] || {}, (n = i.renderProxy) && (f.each(b, function (t) {
                    r(e, t, n)
                }), delete i.renderProxy), e.classList.remove(m), o && o.parentNode && o.parentNode.removeChild(o)
            }
            e.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                initialize: function () {
                    var t, e, i, n = "from{opacity:0.99}to{opacity:1}";
                    e = "@-webkit-keyframes " + v + "{" + n + "}@keyframes " + v + "{" + n + "}." + m + "{-webkit-animation:" + v + " 0.001s;animation:" + v + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (e = "/* Chart.js */\n" + e, (t._style = i).setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))
                },
                acquireContext: function (t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                    var i = t && t.getContext && t.getContext("2d");
                    return i && i.canvas === t ? (function (t, e) {
                        var i = t.style,
                            n = t.getAttribute("height"),
                            a = t.getAttribute("width");
                        if (t[g] = {
                            initial: {
                                height: n,
                                width: a,
                                style: {
                                    display: i.display,
                                    height: i.height,
                                    width: i.width
                                }
                            }
                        }, i.display = i.display || "block", null === a || "" === a) {
                            var o = l(t, "width");
                            void 0 !== o && (t.width = o)
                        }
                        if (null === n || "" === n)
                            if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                            else {
                                var r = l(t, "height");
                                void 0 !== o && (t.height = r)
                            }
                    }(t, e), i) : null
                },
                releaseContext: function (t) {
                    var i = t.canvas;
                    if (i[g]) {
                        var n = i[g].initial;
                        ["height", "width"].forEach(function (t) {
                            var e = n[t];
                            f.isNullOrUndef(e) ? i.removeAttribute(t) : i.setAttribute(t, e)
                        }), f.each(n.style || {}, function (t, e) {
                            i.style[e] = t
                        }), i.width = i.width, delete i[g]
                    }
                },
                addEventListener: function (o, t, r) {
                    var e = o.canvas;
                    if ("resize" !== t) {
                        var i = r[g] || (r[g] = {});
                        x(e, t, (i.proxies || (i.proxies = {}))[o.id + "_" + t] = function (t) {
                            var e, i, n, a;
                            r((i = o, n = s[(e = t).type] || e.type, a = f.getRelativePosition(e, i), y(n, i, a.x, a.y, e)))
                        })
                    } else a(e, r, o)
                },
                removeEventListener: function (t, e, i) {
                    var n = t.canvas;
                    if ("resize" !== e) {
                        var a = ((i[g] || {}).proxies || {})[t.id + "_" + e];
                        a && r(n, e, a)
                    } else o(n)
                }
            }, f.addEvent = x, f.removeEvent = r
        }, {
            46: 46
        }],
        49: [function (t, e, i) {
            "use strict";
            var n = t(46),
                a = t(47),
                o = t(48),
                r = o._enabled ? o : a;
            e.exports = n.extend({
                initialize: function () { },
                acquireContext: function () { },
                releaseContext: function () { },
                addEventListener: function () { },
                removeEventListener: function () { }
            }, r)
        }, {
            46: 46,
            47: 47,
            48: 48
        }],
        50: [function (t, e, i) {
            "use strict";
            e.exports = {}, e.exports.filler = t(51), e.exports.legend = t(52), e.exports.title = t(53)
        }, {
            51: 51,
            52: 52,
            53: 53
        }],
        51: [function (t, e, i) {
            "use strict";
            var u = t(26),
                h = t(41),
                d = t(46);
            u._set("global", {
                plugins: {
                    filler: {
                        propagate: !0
                    }
                }
            });
            var f = {
                dataset: function (t) {
                    var e = t.fill,
                        i = t.chart,
                        n = i.getDatasetMeta(e),
                        a = n && i.isDatasetVisible(e) && n.dataset._children || [],
                        o = a.length || 0;
                    return o ? function (t, e) {
                        return e < o && a[e]._view || null
                    } : null
                },
                boundary: function (t) {
                    var e = t.boundary,
                        i = e ? e.x : null,
                        n = e ? e.y : null;
                    return function (t) {
                        return {
                            x: null === i ? t.x : i,
                            y: null === n ? t.y : n
                        }
                    }
                }
            };

            function g(t, e, i) {
                var n, a = t._model || {},
                    o = a.fill;
                if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1;
                if (!0 === o) return "origin";
                if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || i <= n) && n;
                switch (o) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return o;
                    default:
                        return !1
                }
            }

            function p(t) {
                var e, i = t.el._model || {},
                    n = t.el._scale || {},
                    a = t.fill,
                    o = null;
                if (isFinite(a)) return null;
                if ("start" === a ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), null != o) {
                    if (void 0 !== o.x && void 0 !== o.y) return o;
                    if ("number" == typeof o && isFinite(o)) return {
                        x: (e = n.isHorizontal()) ? o : null,
                        y: e ? null : o
                    }
                }
                return null
            }

            function m(t, e, i) {
                var n, a = t[e].fill,
                    o = [e];
                if (!i) return a;
                for (; !1 !== a && -1 === o.indexOf(a);) {
                    if (!isFinite(a)) return a;
                    if (!(n = t[a])) return !1;
                    if (n.visible) return a;
                    o.push(a), a = n.fill
                }
                return !1
            }

            function x(t) {
                return t && !t.skip
            }

            function y(t, e, i, n, a) {
                var o;
                if (n && a) {
                    for (t.moveTo(e[0].x, e[0].y), o = 1; o < n; ++o) d.canvas.lineTo(t, e[o - 1], e[o]);
                    for (t.lineTo(i[a - 1].x, i[a - 1].y), o = a - 1; 0 < o; --o) d.canvas.lineTo(t, i[o], i[o - 1], !0)
                }
            }
            e.exports = {
                id: "filler",
                afterDatasetsUpdate: function (t, e) {
                    var i, n, a, o, r, s, l, u = (t.data.datasets || []).length,
                        d = e.propagate,
                        c = [];
                    for (n = 0; n < u; ++n) o = null, (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof h.Line && (o = {
                        visible: t.isDatasetVisible(n),
                        fill: g(a, n, u),
                        chart: t,
                        el: a
                    }), i.$filler = o, c.push(o);
                    for (n = 0; n < u; ++n)(o = c[n]) && (o.fill = m(c, n, d), o.boundary = p(o), o.mapper = (l = void 0, s = (r = o).fill, !(l = "dataset") === s ? null : (isFinite(s) || (l = "boundary"), f[l](r))))
                },
                beforeDatasetDraw: function (t, e) {
                    var i = e.meta.$filler;
                    if (i) {
                        var n = t.ctx,
                            a = i.el,
                            o = a._view,
                            r = a._children || [],
                            s = i.mapper,
                            l = o.backgroundColor || u.global.defaultColor;
                        s && l && r.length && (d.canvas.clipArea(n, t.chartArea), function (t, e, i, n, a, o) {
                            var r, s, l, u, d, c, h, f = e.length,
                                g = n.spanGaps,
                                p = [],
                                m = [],
                                v = 0,
                                b = 0;
                            for (t.beginPath(), r = 0, s = f + !!o; r < s; ++r) d = i(u = e[l = r % f]._view, l, n), c = x(u), h = x(d), c && h ? (v = p.push(u), b = m.push(d)) : v && b && (g ? (c && p.push(u), h && m.push(d)) : (y(t, p, m, v, b), v = b = 0, p = [], m = []));
                            y(t, p, m, v, b), t.closePath(), t.fillStyle = a, t.fill()
                        }(n, r, s, o, l, a._loop), d.canvas.unclipArea(n))
                    }
                }
            }
        }, {
            26: 26,
            41: 41,
            46: 46
        }],
        52: [function (t, e, i) {
            "use strict";
            var _ = t(26),
                n = t(27),
                D = t(46),
                a = t(31),
                o = D.noop;

            function P(t, e) {
                return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
            }
            _._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function (t, e) {
                        var i = e.datasetIndex,
                            n = this.chart,
                            a = n.getDatasetMeta(i);
                        a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function (i) {
                            var t = i.data;
                            return D.isArray(t.datasets) ? t.datasets.map(function (t, e) {
                                return {
                                    text: t.label,
                                    fillStyle: D.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                    hidden: !i.isDatasetVisible(e),
                                    lineCap: t.borderCapStyle,
                                    lineDash: t.borderDash,
                                    lineDashOffset: t.borderDashOffset,
                                    lineJoin: t.borderJoinStyle,
                                    lineWidth: t.borderWidth,
                                    strokeStyle: t.borderColor,
                                    pointStyle: t.pointStyle,
                                    datasetIndex: e
                                }
                            }, this) : []
                        }
                    }
                },
                legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                }
            });
            var r = n.extend({
                initialize: function (t) {
                    D.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: o,
                update: function (t, e, i) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                },
                afterUpdate: o,
                beforeSetDimensions: o,
                setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: o,
                beforeBuildLabels: o,
                buildLabels: function () {
                    var e = this,
                        i = e.options.labels || {},
                        t = D.callback(i.generateLabels, [e.chart], e) || [];
                    i.filter && (t = t.filter(function (t) {
                        return i.filter(t, e.chart.data)
                    })), e.options.reverse && t.reverse(), e.legendItems = t
                },
                afterBuildLabels: o,
                beforeFit: o,
                fit: function () {
                    var n = this,
                        t = n.options,
                        a = t.labels,
                        e = t.display,
                        o = n.ctx,
                        i = _.global,
                        r = D.valueOrDefault,
                        s = r(a.fontSize, i.defaultFontSize),
                        l = r(a.fontStyle, i.defaultFontStyle),
                        u = r(a.fontFamily, i.defaultFontFamily),
                        d = D.fontString(s, l, u),
                        c = n.legendHitBoxes = [],
                        h = n.minSize,
                        f = n.isHorizontal();
                    if (h.height = f ? (h.width = n.maxWidth, e ? 10 : 0) : (h.width = e ? 10 : 0, n.maxHeight), e)
                        if (o.font = d, f) {
                            var g = n.lineWidths = [0],
                                p = n.legendItems.length ? s + a.padding : 0;
                            o.textAlign = "left", o.textBaseline = "top", D.each(n.legendItems, function (t, e) {
                                var i = P(a, s) + s / 2 + o.measureText(t.text).width;
                                g[g.length - 1] + i + a.padding >= n.width && (p += s + a.padding, g[g.length] = n.left), c[e] = {
                                    left: 0,
                                    top: 0,
                                    width: i,
                                    height: s
                                }, g[g.length - 1] += i + a.padding
                            }), h.height += p
                        } else {
                            var m = a.padding,
                                v = n.columnWidths = [],
                                b = a.padding,
                                x = 0,
                                y = 0,
                                k = s + m;
                            D.each(n.legendItems, function (t, e) {
                                var i = P(a, s) + s / 2 + o.measureText(t.text).width;
                                y + k > h.height && (b += x + a.padding, v.push(x), y = x = 0), x = Math.max(x, i), y += k, c[e] = {
                                    left: 0,
                                    top: 0,
                                    width: i,
                                    height: s
                                }
                            }), b += x, v.push(x), h.width += b
                        } n.width = h.width, n.height = h.height
                },
                afterFit: o,
                isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function () {
                    var c = this,
                        h = c.options,
                        f = h.labels,
                        g = _.global,
                        p = g.elements.line,
                        m = c.width,
                        v = c.lineWidths;
                    if (h.display) {
                        var b, x = c.ctx,
                            y = D.valueOrDefault,
                            t = y(f.fontColor, g.defaultFontColor),
                            k = y(f.fontSize, g.defaultFontSize),
                            e = y(f.fontStyle, g.defaultFontStyle),
                            i = y(f.fontFamily, g.defaultFontFamily),
                            n = D.fontString(k, e, i);
                        x.textAlign = "left", x.textBaseline = "middle", x.lineWidth = .5, x.strokeStyle = t, x.fillStyle = t, x.font = n;
                        var M = P(f, k),
                            w = c.legendHitBoxes,
                            C = c.isHorizontal();
                        b = C ? {
                            x: c.left + (m - v[0]) / 2,
                            y: c.top + f.padding,
                            line: 0
                        } : {
                                x: c.left + f.padding,
                                y: c.top + f.padding,
                                line: 0
                            };
                        var S = k + f.padding;
                        D.each(c.legendItems, function (t, e) {
                            var i, n, a, o, r, s = x.measureText(t.text).width,
                                l = M + k / 2 + s,
                                u = b.x,
                                d = b.y;
                            C ? m <= u + l && (d = b.y += S, b.line++, u = b.x = c.left + (m - v[b.line]) / 2) : d + S > c.bottom && (u = b.x = u + c.columnWidths[b.line] + f.padding, d = b.y = c.top + f.padding, b.line++),
                                function (t, e, i) {
                                    if (!(isNaN(M) || M <= 0)) {
                                        x.save(), x.fillStyle = y(i.fillStyle, g.defaultColor), x.lineCap = y(i.lineCap, p.borderCapStyle), x.lineDashOffset = y(i.lineDashOffset, p.borderDashOffset), x.lineJoin = y(i.lineJoin, p.borderJoinStyle), x.lineWidth = y(i.lineWidth, p.borderWidth), x.strokeStyle = y(i.strokeStyle, g.defaultColor);
                                        var n = 0 === y(i.lineWidth, p.borderWidth);
                                        if (x.setLineDash && x.setLineDash(y(i.lineDash, p.borderDash)), h.labels && h.labels.usePointStyle) {
                                            var a = k * Math.SQRT2 / 2,
                                                o = a / Math.SQRT2,
                                                r = t + o,
                                                s = e + o;
                                            D.canvas.drawPoint(x, i.pointStyle, a, r, s)
                                        } else n || x.strokeRect(t, e, M, k), x.fillRect(t, e, M, k);
                                        x.restore()
                                    }
                                }(u, d, t), w[e].left = u, w[e].top = d, i = t, n = s, o = M + (a = k / 2) + u, r = d + a, x.fillText(i.text, o, r), i.hidden && (x.beginPath(), x.lineWidth = 2, x.moveTo(o, r), x.lineTo(o + n, r), x.stroke()), C ? b.x += l + f.padding : b.y += S
                        })
                    }
                },
                handleEvent: function (t) {
                    var e = this,
                        i = e.options,
                        n = "mouseup" === t.type ? "click" : t.type,
                        a = !1;
                    if ("mousemove" === n) {
                        if (!i.onHover) return
                    } else {
                        if ("click" !== n) return;
                        if (!i.onClick) return
                    }
                    var o = t.x,
                        r = t.y;
                    if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom)
                        for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                            var u = s[l];
                            if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
                                if ("click" === n) {
                                    i.onClick.call(e, t.native, e.legendItems[l]), a = !0;
                                    break
                                }
                                if ("mousemove" === n) {
                                    i.onHover.call(e, t.native, e.legendItems[l]), a = !0;
                                    break
                                }
                            }
                        }
                    return a
                }
            });

            function s(t, e) {
                var i = new r({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                a.configure(t, i, e), a.addBox(t, i), t.legend = i
            }
            e.exports = {
                id: "legend",
                _element: r,
                beforeInit: function (t) {
                    var e = t.options.legend;
                    e && s(t, e)
                },
                beforeUpdate: function (t) {
                    var e = t.options.legend,
                        i = t.legend;
                    e ? (D.mergeIf(e, _.global.legend), i ? (a.configure(t, i, e), i.options = e) : s(t, e)) : i && (a.removeBox(t, i), delete t.legend)
                },
                afterEvent: function (t, e) {
                    var i = t.legend;
                    i && i.handleEvent(e)
                }
            }
        }, {
            26: 26,
            27: 27,
            31: 31,
            46: 46
        }],
        53: [function (t, e, i) {
            "use strict";
            var M = t(26),
                n = t(27),
                w = t(46),
                a = t(31),
                o = w.noop;
            M._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var r = n.extend({
                initialize: function (t) {
                    w.extend(this, t), this.legendHitBoxes = []
                },
                beforeUpdate: o,
                update: function (t, e, i) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                },
                afterUpdate: o,
                beforeSetDimensions: o,
                setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: o,
                beforeBuildLabels: o,
                buildLabels: o,
                afterBuildLabels: o,
                beforeFit: o,
                fit: function () {
                    var t = this,
                        e = w.valueOrDefault,
                        i = t.options,
                        n = i.display,
                        a = e(i.fontSize, M.global.defaultFontSize),
                        o = t.minSize,
                        r = w.isArray(i.text) ? i.text.length : 1,
                        s = w.options.toLineHeight(i.lineHeight, a),
                        l = n ? r * s + 2 * i.padding : 0;
                    t.isHorizontal() ? (o.width = t.maxWidth, o.height = l) : (o.width = l, o.height = t.maxHeight), t.width = o.width, t.height = o.height
                },
                afterFit: o,
                isHorizontal: function () {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                },
                draw: function () {
                    var t = this,
                        e = t.ctx,
                        i = w.valueOrDefault,
                        n = t.options,
                        a = M.global;
                    if (n.display) {
                        var o, r, s, l = i(n.fontSize, a.defaultFontSize),
                            u = i(n.fontStyle, a.defaultFontStyle),
                            d = i(n.fontFamily, a.defaultFontFamily),
                            c = w.fontString(l, u, d),
                            h = w.options.toLineHeight(n.lineHeight, l),
                            f = h / 2 + n.padding,
                            g = 0,
                            p = t.top,
                            m = t.left,
                            v = t.bottom,
                            b = t.right;
                        e.fillStyle = i(n.fontColor, a.defaultFontColor), e.font = c, t.isHorizontal() ? (r = m + (b - m) / 2, s = p + f, o = b - m) : (r = "left" === n.position ? m + f : b - f, s = p + (v - p) / 2, o = v - p, g = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(r, s), e.rotate(g), e.textAlign = "center", e.textBaseline = "middle";
                        var x = n.text;
                        if (w.isArray(x))
                            for (var y = 0, k = 0; k < x.length; ++k) e.fillText(x[k], 0, y, o), y += h;
                        else e.fillText(x, 0, 0, o);
                        e.restore()
                    }
                }
            });

            function s(t, e) {
                var i = new r({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                a.configure(t, i, e), a.addBox(t, i), t.titleBlock = i
            }
            e.exports = {
                id: "title",
                _element: r,
                beforeInit: function (t) {
                    var e = t.options.title;
                    e && s(t, e)
                },
                beforeUpdate: function (t) {
                    var e = t.options.title,
                        i = t.titleBlock;
                    e ? (w.mergeIf(e, M.global.title), i ? (a.configure(t, i, e), i.options = e) : s(t, e)) : i && (a.removeBox(t, i), delete t.titleBlock)
                }
            }
        }, {
            26: 26,
            27: 27,
            31: 31,
            46: 46
        }],
        54: [function (t, e, i) {
            "use strict";
            var n = t(33),
                a = t(34);
            e.exports = function () {
                var t = n.extend({
                    getLabels: function () {
                        var t = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                    },
                    determineDataLimits: function () {
                        var t, e = this,
                            i = e.getLabels();
                        e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
                    },
                    buildTicks: function () {
                        var t = this,
                            e = t.getLabels();
                        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                    },
                    getLabelForIndex: function (t, e) {
                        var i = this,
                            n = i.chart.data,
                            a = i.isHorizontal();
                        return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex]
                    },
                    getPixelForValue: function (t, e) {
                        var i, n = this,
                            a = n.options.offset,
                            o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
                        if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
                            t = i || t;
                            var r = n.getLabels().indexOf(t);
                            e = -1 !== r ? r : e
                        }
                        if (n.isHorizontal()) {
                            var s = n.width / o,
                                l = s * (e - n.minIndex);
                            return a && (l += s / 2), n.left + Math.round(l)
                        }
                        var u = n.height / o,
                            d = u * (e - n.minIndex);
                        return a && (d += u / 2), n.top + Math.round(d)
                    },
                    getPixelForTick: function (t) {
                        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                    },
                    getValueForPixel: function (t) {
                        var e = this,
                            i = e.options.offset,
                            n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                            a = e.isHorizontal(),
                            o = (a ? e.width : e.height) / n;
                        return t -= a ? e.left : e.top, i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex
                    },
                    getBasePixel: function () {
                        return this.bottom
                    }
                });
                a.registerScaleType("category", t, {
                    position: "bottom"
                })
            }
        }, {
            33: 33,
            34: 34
        }],
        55: [function (t, e, i) {
            "use strict";
            var n = t(26),
                c = t(46),
                a = t(34),
                o = t(35);
            e.exports = function (t) {
                var e = {
                    position: "left",
                    ticks: {
                        callback: o.formatters.linear
                    }
                },
                    i = t.LinearScaleBase.extend({
                        determineDataLimits: function () {
                            var r = this,
                                s = r.options,
                                l = r.chart,
                                t = l.data.datasets,
                                e = r.isHorizontal();

                            function u(t) {
                                return e ? t.xAxisID === r.id : t.yAxisID === r.id
                            }
                            r.min = null, r.max = null;
                            var n = s.stacked;
                            if (void 0 === n && c.each(t, function (t, e) {
                                if (!n) {
                                    var i = l.getDatasetMeta(e);
                                    l.isDatasetVisible(e) && u(i) && void 0 !== i.stack && (n = !0)
                                }
                            }), s.stacked || n) {
                                var d = {};
                                c.each(t, function (t, e) {
                                    var n = l.getDatasetMeta(e),
                                        i = [n.type, void 0 === s.stacked && void 0 === n.stack ? e : "", n.stack].join(".");
                                    void 0 === d[i] && (d[i] = {
                                        positiveValues: [],
                                        negativeValues: []
                                    });
                                    var a = d[i].positiveValues,
                                        o = d[i].negativeValues;
                                    l.isDatasetVisible(e) && u(n) && c.each(t.data, function (t, e) {
                                        var i = +r.getRightValue(t);
                                        isNaN(i) || n.data[e].hidden || (a[e] = a[e] || 0, o[e] = o[e] || 0, s.relativePoints ? a[e] = 100 : i < 0 ? o[e] += i : a[e] += i)
                                    })
                                }), c.each(d, function (t) {
                                    var e = t.positiveValues.concat(t.negativeValues),
                                        i = c.min(e),
                                        n = c.max(e);
                                    r.min = null === r.min ? i : Math.min(r.min, i), r.max = null === r.max ? n : Math.max(r.max, n)
                                })
                            } else c.each(t, function (t, e) {
                                var n = l.getDatasetMeta(e);
                                l.isDatasetVisible(e) && u(n) && c.each(t.data, function (t, e) {
                                    var i = +r.getRightValue(t);
                                    isNaN(i) || n.data[e].hidden || (null === r.min ? r.min = i : i < r.min && (r.min = i), null === r.max ? r.max = i : i > r.max && (r.max = i))
                                })
                            });
                            r.min = isFinite(r.min) && !isNaN(r.min) ? r.min : 0, r.max = isFinite(r.max) && !isNaN(r.max) ? r.max : 1, this.handleTickRangeOptions()
                        },
                        getTickLimit: function () {
                            var t, e = this.options.ticks;
                            if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                            else {
                                var i = c.valueOrDefault(e.fontSize, n.global.defaultFontSize);
                                t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)))
                            }
                            return t
                        },
                        handleDirectionalChanges: function () {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function (t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForValue: function (t) {
                            var e = this,
                                i = e.start,
                                n = +e.getRightValue(t),
                                a = e.end - i;
                            return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i)
                        },
                        getValueForPixel: function (t) {
                            var e = this,
                                i = e.isHorizontal(),
                                n = i ? e.width : e.height,
                                a = (i ? t - e.left : e.bottom - t) / n;
                            return e.start + (e.end - e.start) * a
                        },
                        getPixelForTick: function (t) {
                            return this.getPixelForValue(this.ticksAsNumbers[t])
                        }
                    });
                a.registerScaleType("linear", i, e)
            }
        }, {
            26: 26,
            34: 34,
            35: 35,
            46: 46
        }],
        56: [function (t, e, i) {
            "use strict";
            var c = t(46),
                n = t(33);
            e.exports = function (t) {
                var e = c.noop;
                t.LinearScaleBase = n.extend({
                    getRightValue: function (t) {
                        return "string" == typeof t ? +t : n.prototype.getRightValue.call(this, t)
                    },
                    handleTickRangeOptions: function () {
                        var t = this,
                            e = t.options.ticks;
                        if (e.beginAtZero) {
                            var i = c.sign(t.min),
                                n = c.sign(t.max);
                            i < 0 && n < 0 ? t.max = 0 : 0 < i && 0 < n && (t.min = 0)
                        }
                        var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                            o = void 0 !== e.max || void 0 !== e.suggestedMax;
                        void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== o && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                    },
                    getTickLimit: e,
                    handleDirectionalChanges: e,
                    buildTicks: function () {
                        var t = this,
                            e = t.options.ticks,
                            i = t.getTickLimit(),
                            n = {
                                maxTicks: i = Math.max(2, i),
                                min: e.min,
                                max: e.max,
                                precision: e.precision,
                                stepSize: c.valueOrDefault(e.fixedStepSize, e.stepSize)
                            },
                            a = t.ticks = function (t, e) {
                                var i, n, a, o = [];
                                if (t.stepSize && 0 < t.stepSize) a = t.stepSize;
                                else {
                                    var r = c.niceNum(e.max - e.min, !1);
                                    a = c.niceNum(r / (t.maxTicks - 1), !0), void 0 !== (n = t.precision) && (i = Math.pow(10, n), a = Math.ceil(a * i) / i)
                                }
                                var s = Math.floor(e.min / a) * a,
                                    l = Math.ceil(e.max / a) * a;
                                c.isNullOrUndef(t.min) || c.isNullOrUndef(t.max) || !t.stepSize || c.almostWhole((t.max - t.min) / t.stepSize, a / 1e3) && (s = t.min, l = t.max);
                                var u = (l - s) / a;
                                u = c.almostEquals(u, Math.round(u), a / 1e3) ? Math.round(u) : Math.ceil(u), a < (n = 1) && (n = Math.pow(10, 1 - Math.floor(c.log10(a))), s = Math.round(s * n) / n, l = Math.round(l * n) / n), o.push(void 0 !== t.min ? t.min : s);
                                for (var d = 1; d < u; ++d) o.push(Math.round((s + d * a) * n) / n);
                                return o.push(void 0 !== t.max ? t.max : l), o
                            }(n, t);
                        t.handleDirectionalChanges(), t.max = c.max(a), t.min = c.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    },
                    convertTicksToLabels: function () {
                        var t = this;
                        t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), n.prototype.convertTicksToLabels.call(t)
                    }
                })
            }
        }, {
            33: 33,
            46: 46
        }],
        57: [function (t, e, i) {
            "use strict";
            var h = t(46),
                n = t(33),
                a = t(34),
                o = t(35);
            e.exports = function (c) {
                var t = {
                    position: "left",
                    ticks: {
                        callback: o.formatters.logarithmic
                    }
                },
                    e = n.extend({
                        determineDataLimits: function () {
                            var r = this,
                                i = r.options,
                                s = r.chart,
                                t = s.data.datasets,
                                e = r.isHorizontal();

                            function l(t) {
                                return e ? t.xAxisID === r.id : t.yAxisID === r.id
                            }
                            r.min = null, r.max = null, r.minNotZero = null;
                            var n = i.stacked;
                            if (void 0 === n && h.each(t, function (t, e) {
                                if (!n) {
                                    var i = s.getDatasetMeta(e);
                                    s.isDatasetVisible(e) && l(i) && void 0 !== i.stack && (n = !0)
                                }
                            }), i.stacked || n) {
                                var u = {};
                                h.each(t, function (t, e) {
                                    var a = s.getDatasetMeta(e),
                                        o = [a.type, void 0 === i.stacked && void 0 === a.stack ? e : "", a.stack].join(".");
                                    s.isDatasetVisible(e) && l(a) && (void 0 === u[o] && (u[o] = []), h.each(t.data, function (t, e) {
                                        var i = u[o],
                                            n = +r.getRightValue(t);
                                        isNaN(n) || a.data[e].hidden || n < 0 || (i[e] = i[e] || 0, i[e] += n)
                                    }))
                                }), h.each(u, function (t) {
                                    if (0 < t.length) {
                                        var e = h.min(t),
                                            i = h.max(t);
                                        r.min = null === r.min ? e : Math.min(r.min, e), r.max = null === r.max ? i : Math.max(r.max, i)
                                    }
                                })
                            } else h.each(t, function (t, e) {
                                var n = s.getDatasetMeta(e);
                                s.isDatasetVisible(e) && l(n) && h.each(t.data, function (t, e) {
                                    var i = +r.getRightValue(t);
                                    isNaN(i) || n.data[e].hidden || i < 0 || (null === r.min ? r.min = i : i < r.min && (r.min = i), null === r.max ? r.max = i : i > r.max && (r.max = i), 0 !== i && (null === r.minNotZero || i < r.minNotZero) && (r.minNotZero = i))
                                })
                            });
                            this.handleTickRangeOptions()
                        },
                        handleTickRangeOptions: function () {
                            var t = this,
                                e = t.options.ticks,
                                i = h.valueOrDefault;
                            t.min = i(e.min, t.min), t.max = i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(h.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(h.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(h.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(h.log10(t.min)) + 1) : 10), null === t.minNotZero && (0 < t.min ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(h.log10(t.max))) : t.minNotZero = 1)
                        },
                        buildTicks: function () {
                            var t = this,
                                e = t.options.ticks,
                                i = !t.isHorizontal(),
                                n = {
                                    min: e.min,
                                    max: e.max
                                },
                                a = t.ticks = function (t, e) {
                                    var i, n, a = [],
                                        o = h.valueOrDefault,
                                        r = o(t.min, Math.pow(10, Math.floor(h.log10(e.min)))),
                                        s = Math.floor(h.log10(e.max)),
                                        l = Math.ceil(e.max / Math.pow(10, s));
                                    0 === r ? (i = Math.floor(h.log10(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), a.push(r), r = n * Math.pow(10, i)) : (i = Math.floor(h.log10(r)), n = Math.floor(r / Math.pow(10, i)));
                                    for (var u = i < 0 ? Math.pow(10, Math.abs(i)) : 1; a.push(r), 10 == ++n && (n = 1, u = 0 <= ++i ? 1 : u), r = Math.round(n * Math.pow(10, i) * u) / u, i < s || i === s && n < l;);
                                    var d = o(t.max, r);
                                    return a.push(d), a
                                }(n, t);
                            t.max = h.max(a), t.min = h.min(a), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && a.reverse()
                        },
                        convertTicksToLabels: function () {
                            this.tickValues = this.ticks.slice(), n.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function (t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function (t) {
                            return this.getPixelForValue(this.tickValues[t])
                        },
                        _getFirstTickValue: function (t) {
                            var e = Math.floor(h.log10(t));
                            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                        },
                        getPixelForValue: function (t) {
                            var e, i, n, a, o, r = this,
                                s = r.options.ticks.reverse,
                                l = h.log10,
                                u = r._getFirstTickValue(r.minNotZero),
                                d = 0;
                            return t = +r.getRightValue(t), o = s ? (n = r.end, a = r.start, -1) : (n = r.start, a = r.end, 1), i = r.isHorizontal() ? (e = r.width, s ? r.right : r.left) : (e = r.height, o *= -1, s ? r.top : r.bottom), t !== n && (0 === n && (e -= d = h.getValueOrDefault(r.options.ticks.fontSize, c.defaults.global.defaultFontSize), n = u), 0 !== t && (d += e / (l(a) - l(n)) * (l(t) - l(n))), i += o * d), i
                        },
                        getValueForPixel: function (t) {
                            var e, i, n, a, o = this,
                                r = o.options.ticks.reverse,
                                s = h.log10,
                                l = o._getFirstTickValue(o.minNotZero);
                            if (n = r ? (i = o.end, o.start) : (i = o.start, o.end), (a = o.isHorizontal() ? (e = o.width, r ? o.right - t : t - o.left) : (e = o.height, r ? t - o.top : o.bottom - t)) !== i) {
                                if (0 === i) {
                                    var u = h.getValueOrDefault(o.options.ticks.fontSize, c.defaults.global.defaultFontSize);
                                    a -= u, e -= u, i = l
                                }
                                a *= s(n) - s(i), a /= e, a = Math.pow(10, s(i) + a)
                            }
                            return a
                        }
                    });
                a.registerScaleType("logarithmic", e, t)
            }
        }, {
            33: 33,
            34: 34,
            35: 35,
            46: 46
        }],
        58: [function (t, e, i) {
            "use strict";
            var n = t(26),
                k = t(46),
                a = t(34),
                o = t(35);
            e.exports = function (e) {
                var v = n.global,
                    t = {
                        display: !0,
                        animate: !0,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1
                        },
                        gridLines: {
                            circular: !1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: o.formatters.linear
                        },
                        pointLabels: {
                            display: !0,
                            fontSize: 10,
                            callback: function (t) {
                                return t
                            }
                        }
                    };

                function b(t) {
                    var e = t.options;
                    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                }

                function x(t) {
                    var e = t.options.pointLabels,
                        i = k.valueOrDefault(e.fontSize, v.defaultFontSize),
                        n = k.valueOrDefault(e.fontStyle, v.defaultFontStyle),
                        a = k.valueOrDefault(e.fontFamily, v.defaultFontFamily);
                    return {
                        size: i,
                        style: n,
                        family: a,
                        font: k.fontString(i, n, a)
                    }
                }

                function m(t, e, i, n, a) {
                    return t === n || t === a ? {
                        start: e - i / 2,
                        end: e + i / 2
                    } : t < n || a < t ? {
                        start: e - i - 5,
                        end: e
                    } : {
                                start: e,
                                end: e + i + 5
                            }
                }

                function y(t, e, i, n) {
                    if (k.isArray(e))
                        for (var a = i.y, o = 1.5 * n, r = 0; r < e.length; ++r) t.fillText(e[r], i.x, a), a += o;
                    else t.fillText(e, i.x, i.y)
                }

                function s(t) {
                    return k.isNumber(t) ? t : 0
                }
                var i = e.LinearScaleBase.extend({
                    setDimensions: function () {
                        var t = this,
                            e = t.options,
                            i = e.ticks;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                        var n = k.min([t.height, t.width]),
                            a = k.valueOrDefault(i.fontSize, v.defaultFontSize);
                        t.drawingArea = e.display ? n / 2 - (a / 2 + i.backdropPaddingY) : n / 2
                    },
                    determineDataLimits: function () {
                        var a = this,
                            i = a.chart,
                            o = Number.POSITIVE_INFINITY,
                            r = Number.NEGATIVE_INFINITY;
                        k.each(i.data.datasets, function (t, e) {
                            if (i.isDatasetVisible(e)) {
                                var n = i.getDatasetMeta(e);
                                k.each(t.data, function (t, e) {
                                    var i = +a.getRightValue(t);
                                    isNaN(i) || n.data[e].hidden || (o = Math.min(i, o), r = Math.max(i, r))
                                })
                            }
                        }), a.min = o === Number.POSITIVE_INFINITY ? 0 : o, a.max = r === Number.NEGATIVE_INFINITY ? 0 : r, a.handleTickRangeOptions()
                    },
                    getTickLimit: function () {
                        var t = this.options.ticks,
                            e = k.valueOrDefault(t.fontSize, v.defaultFontSize);
                        return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)))
                    },
                    convertTicksToLabels: function () {
                        var t = this;
                        e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                    },
                    getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    fit: function () {
                        var t, e;
                        this.options.pointLabels.display ? function (t) {
                            var e, i, n, a = x(t),
                                o = Math.min(t.height / 2, t.width / 2),
                                r = {
                                    r: t.width,
                                    l: 0,
                                    t: t.height,
                                    b: 0
                                },
                                s = {};
                            t.ctx.font = a.font, t._pointLabelSizes = [];
                            var l, u, d, c = b(t);
                            for (e = 0; e < c; e++) {
                                n = t.getPointPosition(e, o), l = t.ctx, u = a.size, d = t.pointLabels[e] || "", i = k.isArray(d) ? {
                                    w: k.longestText(l, l.font, d),
                                    h: d.length * u + 1.5 * (d.length - 1) * u
                                } : {
                                        w: l.measureText(d).width,
                                        h: u
                                    }, t._pointLabelSizes[e] = i;
                                var h = t.getIndexAngle(e),
                                    f = k.toDegrees(h) % 360,
                                    g = m(f, n.x, i.w, 0, 180),
                                    p = m(f, n.y, i.h, 90, 270);
                                g.start < r.l && (r.l = g.start, s.l = h), g.end > r.r && (r.r = g.end, s.r = h), p.start < r.t && (r.t = p.start, s.t = h), p.end > r.b && (r.b = p.end, s.b = h)
                            }
                            t.setReductions(o, r, s)
                        }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
                    },
                    setReductions: function (t, e, i) {
                        var n = e.l / Math.sin(i.l),
                            a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                            o = -e.t / Math.cos(i.t),
                            r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
                        n = s(n), a = s(a), o = s(o), r = s(r), this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (o + r) / 2)), this.setCenterPoint(n, a, o, r)
                    },
                    setCenterPoint: function (t, e, i, n) {
                        var a = this,
                            o = a.width - e - a.drawingArea,
                            r = t + a.drawingArea,
                            s = i + a.drawingArea,
                            l = a.height - n - a.drawingArea;
                        a.xCenter = Math.round((r + o) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top)
                    },
                    getIndexAngle: function (t) {
                        return t * (2 * Math.PI / b(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    },
                    getDistanceFromCenterForValue: function (t) {
                        var e = this;
                        if (null === t) return 0;
                        var i = e.drawingArea / (e.max - e.min);
                        return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
                    },
                    getPointPosition: function (t, e) {
                        var i = this.getIndexAngle(t) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(i) * e) + this.xCenter,
                            y: Math.round(Math.sin(i) * e) + this.yCenter
                        }
                    },
                    getPointPositionForValue: function (t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    },
                    getBasePosition: function () {
                        var t = this.min,
                            e = this.max;
                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0)
                    },
                    draw: function () {
                        var o = this,
                            t = o.options,
                            r = t.gridLines,
                            s = t.ticks,
                            l = k.valueOrDefault;
                        if (t.display) {
                            var u = o.ctx,
                                d = this.getIndexAngle(0),
                                c = l(s.fontSize, v.defaultFontSize),
                                e = l(s.fontStyle, v.defaultFontStyle),
                                i = l(s.fontFamily, v.defaultFontFamily),
                                h = k.fontString(c, e, i);
                            k.each(o.ticks, function (t, e) {
                                if (0 < e || s.reverse) {
                                    var i = o.getDistanceFromCenterForValue(o.ticksAsNumbers[e]);
                                    if (r.display && 0 !== e && function (t, e, i, n) {
                                        var a = t.ctx;
                                        if (a.strokeStyle = k.valueAtIndexOrDefault(e.color, n - 1), a.lineWidth = k.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) a.beginPath(), a.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), a.closePath(), a.stroke();
                                        else {
                                            var o = b(t);
                                            if (0 === o) return;
                                            a.beginPath();
                                            var r = t.getPointPosition(0, i);
                                            a.moveTo(r.x, r.y);
                                            for (var s = 1; s < o; s++) r = t.getPointPosition(s, i), a.lineTo(r.x, r.y);
                                            a.closePath(), a.stroke()
                                        }
                                    }(o, r, i, e), s.display) {
                                        var n = l(s.fontColor, v.defaultFontColor);
                                        if (u.font = h, u.save(), u.translate(o.xCenter, o.yCenter), u.rotate(d), s.showLabelBackdrop) {
                                            var a = u.measureText(t).width;
                                            u.fillStyle = s.backdropColor, u.fillRect(-a / 2 - s.backdropPaddingX, -i - c / 2 - s.backdropPaddingY, a + 2 * s.backdropPaddingX, c + 2 * s.backdropPaddingY)
                                        }
                                        u.textAlign = "center", u.textBaseline = "middle", u.fillStyle = n, u.fillText(t, 0, -i), u.restore()
                                    }
                                }
                            }), (t.angleLines.display || t.pointLabels.display) && function (t) {
                                var e = t.ctx,
                                    i = t.options,
                                    n = i.angleLines,
                                    a = i.pointLabels;
                                e.lineWidth = n.lineWidth, e.strokeStyle = n.color;
                                var o, r, s, l, u = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                                    d = x(t);
                                e.textBaseline = "top";
                                for (var c = b(t) - 1; 0 <= c; c--) {
                                    if (n.display) {
                                        var h = t.getPointPosition(c, u);
                                        e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(h.x, h.y), e.stroke(), e.closePath()
                                    }
                                    if (a.display) {
                                        var f = t.getPointPosition(c, u + 5),
                                            g = k.valueAtIndexOrDefault(a.fontColor, c, v.defaultFontColor);
                                        e.font = d.font, e.fillStyle = g;
                                        var p = t.getIndexAngle(c),
                                            m = k.toDegrees(p);
                                        e.textAlign = 0 === (l = m) || 180 === l ? "center" : l < 180 ? "left" : "right", o = m, r = t._pointLabelSizes[c], s = f, 90 === o || 270 === o ? s.y -= r.h / 2 : (270 < o || o < 90) && (s.y -= r.h), y(e, t.pointLabels[c] || "", f, d.size)
                                    }
                                }
                            }(o)
                        }
                    }
                });
                a.registerScaleType("radialLinear", i, t)
            }
        }, {
            26: 26,
            34: 34,
            35: 35,
            46: 46
        }],
        59: [function (t, e, i) {
            "use strict";
            var x = t(1);
            x = "function" == typeof x ? x : window.moment;
            var r = t(26),
                m = t(46),
                n = t(33),
                a = t(34),
                p = Number.MIN_SAFE_INTEGER || -9007199254740991,
                v = Number.MAX_SAFE_INTEGER || 9007199254740991,
                y = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: [1, 2, 5, 10, 15, 30]
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: [1, 2, 5, 10, 15, 30]
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: [1, 2, 3, 6, 12]
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: [1, 2, 5]
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: [1, 2, 3, 4]
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: [1, 2, 3]
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: [1, 2, 3, 4]
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                k = Object.keys(y);

            function b(t, e) {
                return t - e
            }

            function M(t) {
                var e, i, n, a = {},
                    o = [];
                for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, o.push(n));
                return o
            }

            function w(t, e, i, n) {
                var a = function (t, e, i) {
                    for (var n, a, o, r = 0, s = t.length - 1; 0 <= r && r <= s;) {
                        if (a = t[(n = r + s >> 1) - 1] || null, o = t[n], !a) return {
                            lo: null,
                            hi: o
                        };
                        if (o[e] < i) r = n + 1;
                        else {
                            if (!(a[e] > i)) return {
                                lo: a,
                                hi: o
                            };
                            s = n - 1
                        }
                    }
                    return {
                        lo: o,
                        hi: null
                    }
                }(t, e, i),
                    o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
                    r = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
                    s = r[e] - o[e],
                    l = s ? (i - o[e]) / s : 0,
                    u = (r[n] - o[n]) * l;
                return o[n] + u
            }

            function C(t, e) {
                var i = e.parser,
                    n = e.parser || e.format;
                return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof n ? x(t, n) : (t instanceof x || (t = x(t)), t.isValid() ? t : "function" == typeof n ? n(t) : t)
            }

            function S(t, e) {
                if (m.isNullOrUndef(t)) return null;
                var i = e.options.time,
                    n = C(e.getRightValue(t), i);
                return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null
            }

            function _(t) {
                for (var e = k.indexOf(t) + 1, i = k.length; e < i; ++e)
                    if (y[k[e]].common) return k[e]
            }

            function D(t, e, i, n) {
                var a, o = n.time,
                    r = o.unit || function (t, e, i, n) {
                        var a, o, r, s = k.length;
                        for (a = k.indexOf(t); a < s - 1; ++a)
                            if (r = (o = y[k[a]]).steps ? o.steps[o.steps.length - 1] : v, o.common && Math.ceil((i - e) / (r * o.size)) <= n) return k[a];
                        return k[s - 1]
                    }(o.minUnit, t, e, i),
                    s = _(r),
                    l = m.valueOrDefault(o.stepSize, o.unitStepSize),
                    u = "week" === r && o.isoWeekday,
                    d = n.ticks.major.enabled,
                    c = y[r],
                    h = x(t),
                    f = x(e),
                    g = [];
                for (l || (l = function (t, e, i, n) {
                    var a, o, r, s = e - t,
                        l = y[i],
                        u = l.size,
                        d = l.steps;
                    if (!d) return Math.ceil(s / (n * u));
                    for (a = 0, o = d.length; a < o && (r = d[a], !(Math.ceil(s / (u * r)) <= n)); ++a);
                    return r
                }(t, e, r, i)), u && (h = h.isoWeekday(u), f = f.isoWeekday(u)), h = h.startOf(u ? "day" : r), (f = f.startOf(u ? "day" : r)) < e && f.add(1, r), a = x(h), d && s && !u && !o.round && (a.startOf(s), a.add(~~((h - a) / (c.size * l)) * l, r)); a < f; a.add(l, r)) g.push(+a);
                return g.push(+a), g
            }
            e.exports = function () {
                var t = n.extend({
                    initialize: function () {
                        if (!x) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), n.prototype.initialize.call(this)
                    },
                    update: function () {
                        var t = this.options;
                        return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), n.prototype.update.apply(this, arguments)
                    },
                    getRightValue: function (t) {
                        return t && void 0 !== t.t && (t = t.t), n.prototype.getRightValue.call(this, t)
                    },
                    determineDataLimits: function () {
                        var t, e, i, n, a, o, r = this,
                            s = r.chart,
                            l = r.options.time,
                            u = l.unit || "day",
                            d = v,
                            c = p,
                            h = [],
                            f = [],
                            g = [];
                        for (t = 0, i = s.data.labels.length; t < i; ++t) g.push(S(s.data.labels[t], r));
                        for (t = 0, i = (s.data.datasets || []).length; t < i; ++t)
                            if (s.isDatasetVisible(t))
                                if (a = s.data.datasets[t].data, m.isObject(a[0]))
                                    for (f[t] = [], e = 0, n = a.length; e < n; ++e) o = S(a[e], r), h.push(o), f[t][e] = o;
                                else h.push.apply(h, g), f[t] = g.slice(0);
                            else f[t] = [];
                        g.length && (g = M(g).sort(b), d = Math.min(d, g[0]), c = Math.max(c, g[g.length - 1])), h.length && (h = M(h).sort(b), d = Math.min(d, h[0]), c = Math.max(c, h[h.length - 1])), d = S(l.min, r) || d, c = S(l.max, r) || c, d = d === v ? +x().startOf(u) : d, c = c === p ? +x().endOf(u) + 1 : c, r.min = Math.min(d, c), r.max = Math.max(d + 1, c), r._horizontal = r.isHorizontal(), r._table = [], r._timestamps = {
                            data: h,
                            datasets: f,
                            labels: g
                        }
                    },
                    buildTicks: function () {
                        var t, e, i, n, a, o, r, s, l, u, d, c, h = this,
                            f = h.min,
                            g = h.max,
                            p = h.options,
                            m = p.time,
                            v = [],
                            b = [];
                        switch (p.ticks.source) {
                            case "data":
                                v = h._timestamps.data;
                                break;
                            case "labels":
                                v = h._timestamps.labels;
                                break;
                            case "auto":
                            default:
                                v = D(f, g, h.getLabelCapacity(f), p)
                        }
                        for ("ticks" === p.bounds && v.length && (f = v[0], g = v[v.length - 1]), f = S(m.min, h) || f, g = S(m.max, h) || g, t = 0, e = v.length; t < e; ++t) f <= (i = v[t]) && i <= g && b.push(i);
                        return h.min = f, h.max = g, h._unit = m.unit || function (t, e, i, n) {
                            var a, o, r = x.duration(x(n).diff(x(i)));
                            for (a = k.length - 1; a >= k.indexOf(e); a--)
                                if (o = k[a], y[o].common && r.as(o) >= t.length) return o;
                            return k[e ? k.indexOf(e) : 0]
                        }(b, m.minUnit, h.min, h.max), h._majorUnit = _(h._unit), h._table = function (t, e, i, n) {
                            if ("linear" === n || !t.length) return [{
                                time: e,
                                pos: 0
                            }, {
                                time: i,
                                pos: 1
                            }];
                            var a, o, r, s, l, u = [],
                                d = [e];
                            for (a = 0, o = t.length; a < o; ++a) e < (s = t[a]) && s < i && d.push(s);
                            for (d.push(i), a = 0, o = d.length; a < o; ++a) l = d[a + 1], r = d[a - 1], s = d[a], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || u.push({
                                time: s,
                                pos: a / (o - 1)
                            });
                            return u
                        }(h._timestamps.data, f, g, p.distribution), h._offsets = (n = h._table, a = b, o = f, r = g, c = d = 0, (s = p).offset && a.length && (s.time.min || (l = 1 < a.length ? a[1] : r, u = a[0], d = (w(n, "time", l, "pos") - w(n, "time", u, "pos")) / 2), s.time.max || (l = a[a.length - 1], u = 1 < a.length ? a[a.length - 2] : o, c = (w(n, "time", l, "pos") - w(n, "time", u, "pos")) / 2)), {
                            left: d,
                            right: c
                        }), h._labelFormat = function (t, e) {
                            var i, n, a, o = t.length;
                            for (i = 0; i < o; i++) {
                                if (0 !== (n = C(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                0 === n.second() && 0 === n.minute() && 0 === n.hour() || (a = !0)
                            }
                            return a ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                        }(h._timestamps.data, m),
                            function (t, e) {
                                var i, n, a, o, r = [];
                                for (i = 0, n = t.length; i < n; ++i) a = t[i], o = !!e && a === +x(a).startOf(e), r.push({
                                    value: a,
                                    major: o
                                });
                                return r
                            }(b, h._majorUnit)
                    },
                    getLabelForIndex: function (t, e) {
                        var i = this.chart.data,
                            n = this.options.time,
                            a = i.labels && t < i.labels.length ? i.labels[t] : "",
                            o = i.datasets[e].data[t];
                        return m.isObject(o) && (a = this.getRightValue(o)), n.tooltipFormat ? C(a, n).format(n.tooltipFormat) : "string" == typeof a ? a : C(a, n).format(this._labelFormat)
                    },
                    tickFormatFunction: function (t, e, i, n) {
                        var a = this.options,
                            o = t.valueOf(),
                            r = a.time.displayFormats,
                            s = r[this._unit],
                            l = this._majorUnit,
                            u = r[l],
                            d = t.clone().startOf(l).valueOf(),
                            c = a.ticks.major,
                            h = c.enabled && l && u && o === d,
                            f = t.format(n || (h ? u : s)),
                            g = h ? c : a.ticks.minor,
                            p = m.valueOrDefault(g.callback, g.userCallback);
                        return p ? p(f, e, i) : f
                    },
                    convertTicksToLabels: function (t) {
                        var e, i, n = [];
                        for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(x(t[e].value), e, t));
                        return n
                    },
                    getPixelForOffset: function (t) {
                        var e = this,
                            i = e._horizontal ? e.width : e.height,
                            n = e._horizontal ? e.left : e.top,
                            a = w(e._table, "time", t, "pos");
                        return n + i * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right)
                    },
                    getPixelForValue: function (t, e, i) {
                        var n = null;
                        if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = S(t, this)), null !== n) return this.getPixelForOffset(n)
                    },
                    getPixelForTick: function (t) {
                        var e = this.getTicks();
                        return 0 <= t && t < e.length ? this.getPixelForOffset(e[t].value) : null
                    },
                    getValueForPixel: function (t) {
                        var e = this,
                            i = e._horizontal ? e.width : e.height,
                            n = e._horizontal ? e.left : e.top,
                            a = (i ? (t - n) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                            o = w(e._table, "pos", a, "time");
                        return x(o)
                    },
                    getLabelWidth: function (t) {
                        var e = this.options.ticks,
                            i = this.ctx.measureText(t).width,
                            n = m.toRadians(e.maxRotation),
                            a = Math.cos(n),
                            o = Math.sin(n);
                        return i * a + m.valueOrDefault(e.fontSize, r.global.defaultFontSize) * o
                    },
                    getLabelCapacity: function (t) {
                        var e = this.options.time.displayFormats.millisecond,
                            i = this.tickFormatFunction(x(t), 0, [], e),
                            n = this.getLabelWidth(i),
                            a = this.isHorizontal() ? this.width : this.height,
                            o = Math.floor(a / n);
                        return 0 < o ? o : 1
                    }
                });
                a.registerScaleType("time", t, {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {
                        autoSkip: !1,
                        source: "auto",
                        major: {
                            enabled: !1
                        }
                    }
                })
            }
        }, {
            1: 1,
            26: 26,
            33: 33,
            34: 34,
            46: 46
        }]
    }, {}, [7])(7)
});
/*
 * @license
 * chartjs-plugin-streaming
 * https://github.com/nagix/chartjs-plugin-streaming/
 * Version: 1.7.1
 *
 * Copyright 2018 Akihiko Kusanagi
 * Released under the MIT license
 * https://github.com/nagix/chartjs-plugin-streaming/blob/master/LICENSE.md
 */
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("chart.js"), require("moment")) : "function" == typeof define && define.amd ? define(["chart.js", "moment"], t) : e["chartjs-plugin-streaming"] = t(e.Chart, e.moment)
}(this, function (r, h) {
    "use strict";
    r = r && r.hasOwnProperty("default") ? r.default : r, h = h && h.hasOwnProperty("default") ? h.default : h;
    var w = r.helpers;
    w.cancelAnimFrame = function () {
        if ("undefined" != typeof window) return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (e) {
            return window.clearTimeout(e)
        }
    }(), w.startFrameRefreshTimer = function (e, t) {
        if (!e.frameRequestID) {
            var a = function () {
                t(), e.frameRequestID = w.requestAnimFrame.call(window, a)
            };
            e.frameRequestID = w.requestAnimFrame.call(window, a)
        }
    }, w.stopFrameRefreshTimer = function (e) {
        var t = e.frameRequestID;
        t && (w.cancelAnimFrame.call(window, t), delete e.frameRequestID)
    };
    var e = r.scaleService,
        u = e.getScaleConstructor("time");
    e.getScaleConstructor = function (e) {
        return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
    };
    var v = Number.MAX_SAFE_INTEGER || 9007199254740991,
        g = {
            millisecond: {
                common: !0,
                size: 1,
                steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
            },
            second: {
                common: !0,
                size: 1e3,
                steps: [1, 2, 5, 10, 15, 30]
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: [1, 2, 5, 10, 15, 30]
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: [1, 2, 3, 6, 12]
            },
            day: {
                common: !0,
                size: 864e5,
                steps: [1, 2, 5]
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: [1, 2, 3, 4]
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: [1, 2, 3]
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: [1, 2, 3, 4]
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        y = Object.keys(g);

    function m(e, t) {
        var a = t.parser,
            n = t.parser || t.format;
        return "function" == typeof a ? a(e) : "string" == typeof e && "string" == typeof n ? h(e, n) : (e instanceof h || (e = h(e)), e.isValid() ? e : "function" == typeof n ? n(e) : e)
    }

    function o(e, t) {
        if (w.isNullOrUndef(e)) return null;
        var a = t.options.time,
            n = m(t.getRightValue(e), a);
        return n.isValid() ? (a.round && n.startOf(a.round), n.valueOf()) : null
    }

    function x(e) {
        for (var t = y.indexOf(e) + 1, a = y.length; t < a; ++t)
            if (g[y[t]].common) return y[t]
    }

    function c(e, t, a, n, i) {
        var r, o = n.time,
            s = o.unit || function (e, t, a, n) {
                var i, r, o, s = y.length;
                for (i = y.indexOf(e); i < s - 1; ++i)
                    if (o = (r = g[y[i]]).steps ? r.steps[r.steps.length - 1] : v, r.common && Math.ceil((a - t) / (o * r.size)) <= n) return y[i];
                return y[s - 1]
            }(o.minUnit, e, t, a),
            l = x(s),
            u = w.valueOrDefault(o.stepSize, o.unitStepSize),
            m = "week" === s && o.isoWeekday,
            c = g[s],
            d = h(e),
            p = h(t + i),
            f = [];
        for (u || (u = function (e, t, a, n) {
            var i, r, o, s = t - e,
                l = g[a],
                u = l.size,
                m = l.steps;
            if (!m) return Math.ceil(s / (n * u));
            for (i = 0, r = m.length; i < r && (o = m[i], !(Math.ceil(s / (u * o)) <= n)); ++i);
            return o
        }(e, t, s, a)), m && (d = d.isoWeekday(m), p = p.isoWeekday(m)), d = d.startOf(m ? "day" : s), (p = p.startOf(m ? "day" : s)) < t + i && p.add(1, s), r = h(d), !l || m || o.round || (r.startOf(l), r.add(~~((d - r) / (c.size * u)) * u, s)); r < p; r.add(u, s)) f.push(+r);
        return f.push(+r), f
    }

    function b(e, t) {
        var a = e.options.realtime,
            n = e.chart.options.plugins.streaming;
        return w.valueOrDefault(a[t], n[t])
    }
    var D = ["pointBackgroundColor", "pointBorderColor", "pointBorderWidth", "pointRadius", "pointStyle", "pointHitRadius", "pointHoverBackgroundColor", "pointHoverBorderColor", "pointHoverBorderWidth", "pointHoverRadius", "backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "radius"];

    function M(e) {
        var t = e.realtime,
            a = t.refreshTimerID;
        a && (clearInterval(a), delete t.refreshTimerID, delete t.refreshInterval)
    }

    function O(y) {
        var x = y.realtime,
            e = b(y, "refresh");
        x.refreshTimerID = setInterval(function () {
            var a, n, i, r, o, s, l, u, m, c, e, t, d, p, f, h, v, g = b(y, "refresh");
            m = (a = y).chart, c = a.id, e = b(a, "duration"), t = b(a, "delay"), d = b(a, "ttl"), p = b(a, "pause"), f = b(a, "onRefresh"), h = a.max, v = Date.now() - (isNaN(d) ? e + t : d), f && f(m), m.data.datasets.forEach(function (t, e) {
                if (n = m.getDatasetMeta(e), c === n.xAxisID || c === n.yAxisID) {
                    if (i = t.data, r = i.length, p) {
                        for (o = 0; o < r && a._getTimeForIndex(o, e) < h; ++o);
                        s = o + 2
                    } else s = 0;
                    for (o = s; o < r && a._getTimeForIndex(o, e) <= v; ++o);
                    l = o - s, isNaN(d) && (l = Math.max(l - 2, 0)), i.splice(s, l), D.forEach(function (e) {
                        t.hasOwnProperty(e) && w.isArray(t[e]) && t[e].splice(s, l)
                    }), "object" != typeof i[0] && (u = {
                        start: s,
                        count: l
                    })
                }
            }), u && m.data.labels.splice(u.start, u.count), m.update({
                preservation: !0
            }), x.refreshInterval === g || isNaN(g) || (M(y), O(y))
        }, e), x.refreshInterval = e
    }
    var A = {
        data: ["x", "controlPointPreviousX", "controlPointNextX"],
        dataset: ["x"],
        tooltip: ["x", "caretX"]
    },
        F = {
            data: ["y", "controlPointPreviousY", "controlPointNextY"],
            dataset: ["y"],
            tooltip: ["y", "caretY"]
        };

    function I(e, t, a) {
        var n, i, r = e._start || {},
            o = e._view || {},
            s = e._model || {};
        for (n = 0, i = t.length; n < i; ++n) {
            var l = t[n];
            r.hasOwnProperty(l) && (r[l] -= a), o.hasOwnProperty(l) && o !== r && (o[l] -= a), s.hasOwnProperty(l) && s !== o && (s[l] -= a)
        }
    }
    var s = u.extend({
        initialize: function () {
            var e = this;
            u.prototype.initialize.apply(e, arguments), ("time" !== e.options.type || e.chart.options.plugins.streaming) && (e.realtime = e.realtime || {}, O(e))
        },
        update: function () {
            var v = this,
                e = v.realtime;
            return ("time" !== v.options.type || v.chart.options.plugins.streaming) && (b(v, "pause") ? w.stopFrameRefreshTimer(e) : (w.startFrameRefreshTimer(e, function () {
                var e, t, a, n, i, r, o, s, l, u, m, c, d, p, f, h;
                l = (e = v).chart, u = e.realtime, m = b(e, "duration"), c = b(e, "delay"), d = e.id, p = l.tooltip, f = p._active, h = Date.now(), a = e.isHorizontal() ? (t = e.width, A) : (t = e.height, F), n = t * (h - u.head) / m, w.each(l.data.datasets, function (e, t) {
                    if (i = l.getDatasetMeta(t), d === i.xAxisID || d === i.yAxisID) {
                        for (r = i.data || [], o = 0, s = r.length; o < s; ++o) I(r[o], a.data, n);
                        i.dataset && I(i.dataset, a.dataset, n)
                    }
                }), f && f[0] && (i = l.getDatasetMeta(f[0]._datasetIndex), d !== i.xAxisID && d !== i.yAxisID || I(p, a.tooltip, n)), e.max = e._table[1].time = h - c, e.min = e._table[0].time = e.max - m, u.head = h
            }), e.head = Date.now())), u.prototype.update.apply(v, arguments)
        },
        buildTicks: function () {
            var e = this,
                t = e.options;
            if ("time" === t.type && !e.chart.options.plugins.streaming) return u.prototype.buildTicks.apply(e, arguments);
            var a = t.time,
                n = b(e, "duration"),
                i = b(e, "delay"),
                r = b(e, "refresh"),
                o = e.realtime.head - i,
                s = o - n,
                l = [];
            switch (t.ticks.source) {
                case "data":
                    l = e._timestamps.data;
                    break;
                case "labels":
                    l = e._timestamps.labels;
                    break;
                case "auto":
                default:
                    l = c(s, o, e.getLabelCapacity(s), t, r)
            }
            return e.min = s, e.max = o, e._unit = a.unit || function (e, t, a, n) {
                var i, r, o = h.duration(h(n).diff(h(a)));
                for (i = y.length - 1; i >= y.indexOf(t); i--)
                    if (r = y[i], g[r].common && o.as(r) >= e.length) return r;
                return y[t ? y.indexOf(t) : 0]
            }(l, a.minUnit, e.min, e.max), e._majorUnit = x(e._unit), e._table = [{
                time: s,
                pos: 0
            }, {
                time: o,
                pos: 1
            }], e._offsets = {
                left: 0,
                right: 0
            }, e._labelFormat = function (e, t) {
                var a, n, i, r = e.length;
                for (a = 0; a < r; a++) {
                    if (0 !== (n = m(e[a], t)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                    0 === n.second() && 0 === n.minute() && 0 === n.hour() || (i = !0)
                }
                return i ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
            }(e._timestamps.data, a),
                function (e, t) {
                    var a, n, i, r, o = [];
                    for (a = 0, n = e.length; a < n; ++a) i = e[a], r = !!t && i === +h(i).startOf(t), o.push({
                        value: i,
                        major: r
                    });
                    return o
                }(l, e._majorUnit)
        },
        fit: function () {
            var e = this,
                t = e.options;
            u.prototype.fit.apply(e, arguments), ("time" !== t.type || e.chart.options.plugins.streaming) && t.ticks.display && t.display && e.isHorizontal() && (e.paddingLeft = 3, e.paddingRight = 3, e.handleMargins())
        },
        draw: function (e) {
            var t = this,
                a = t.chart;
            if ("time" !== t.options.type || a.options.plugins.streaming) {
                var n = t.ctx,
                    i = t.isHorizontal() ? {
                        left: e.left,
                        top: 0,
                        right: e.right,
                        bottom: a.height
                    } : {
                            left: 0,
                            top: e.top,
                            right: a.width,
                            bottom: e.bottom
                        };
                w.canvas.clipArea(n, i), u.prototype.draw.apply(t, arguments), w.canvas.unclipArea(n)
            } else u.prototype.draw.apply(t, arguments)
        },
        destroy: function () {
            ("time" !== this.options.type || this.chart.options.plugins.streaming) && (w.stopFrameRefreshTimer(this.realtime), M(this))
        },
        _getTimeForIndex: function (e, t) {
            var a, n = this,
                i = n._timestamps,
                r = i.datasets[t][e];
            return w.isNullOrUndef(r) && (a = n.chart.data.datasets[t].data[e], r = w.isObject(a) ? o(n.getRightValue(a), n) : o(i.labels[e], n)), r
        }
    });

    function l(e) {
        var t, a = e.streaming.lastMouseEvent;
        a && ("function" == typeof MouseEvent ? t = new MouseEvent("mousemove", a) : (t = document.createEvent("MouseEvents")).initMouseEvent("mousemove", a.bubbles, a.cancelable, a.view, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, a.button, a.relatedTarget), e.canvas.dispatchEvent(t))
    }
    e.registerScaleType("realtime", s, {
        position: "bottom",
        distribution: "linear",
        bounds: "data",
        time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
                millisecond: "h:mm:ss.SSS a",
                second: "h:mm:ss a",
                minute: "h:mm a",
                hour: "hA",
                day: "MMM D",
                week: "ll",
                month: "MMM YYYY",
                quarter: "[Q]Q - YYYY",
                year: "YYYY"
            }
        },
        realtime: {},
        ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
                enabled: !0
            }
        }
    }), r.defaults.global.plugins.streaming = {
        duration: 1e4,
        delay: 0,
        frameRate: 30,
        refresh: 1e3,
        onRefresh: null,
        pause: !1,
        ttl: void 0
    };
    var d = r.prototype.update;
    r.prototype.update = function (e) {
        var a, t, n, i;
        e && e.preservation ? (t = (a = this).options.animation, n = a.data.datasets, i = a.buildOrUpdateControllers(), n.forEach(function (e, t) {
            a.getDatasetMeta(t).controller.buildOrUpdateElements()
        }), a.updateLayout(), t && t.duration && w.each(i, function (e) {
            e.reset()
        }), a.updateDatasets(), a.animating ? r.animationService.animations.forEach(function (e) {
            e.chart === a && a.render({
                duration: 16.66 * (e.numSteps - e.currentStep)
            })
        }) : n.forEach(function (e, t) {
            a.getDatasetMeta(t).controller.transition(1)
        }), a.tooltip._active && a.tooltip.update(!0), l(a)) : d.apply(this, arguments)
    };
    var t = {
        id: "streaming",
        beforeInit: function (e) {
            var t = e.streaming = e.streaming || {},
                a = t.canvas = e.canvas,
                n = t.mouseEventListener = function (e) {
                    t.lastMouseEvent = e
                };
            a.addEventListener("mousedown", n), a.addEventListener("mouseup", n)
        },
        afterInit: function (e) {
            e.resetZoom && r.Zoom.updateResetZoom(e)
        },
        beforeUpdate: function (e) {
            var t = e.options,
                a = t.scales;
            return a && a.xAxes.concat(a.yAxes).forEach(function (e) {
                "realtime" !== e.type && "time" !== e.type || (t.elements.line.capBezierPoints = !1)
            }), !0
        },
        afterUpdate: function (o, t) {
            var e = o.streaming,
                a = !0;
            w.each(o.scales, function (e) {
                e instanceof s && (a &= w.valueOrDefault(e.options.realtime.pause, t.pause))
            }), a ? w.stopFrameRefreshTimer(e) : w.startFrameRefreshTimer(e, function () {
                var e, t, a, n, i, r;
                t = (e = o).streaming, a = e.options.plugins.streaming.frameRate, n = 1e3 / (Math.max(a, 0) || 30), i = t.lastDrawn + n || 0, r = Date.now(), i <= r && (e.animating || e.tooltip._start || e.draw(), l(e), t.lastDrawn = r < i + n ? i : r)
            })
        },
        beforeDatasetDraw: function (e, t) {
            var a = t.meta,
                n = e.chartArea,
                i = {
                    left: 0,
                    top: 0,
                    right: e.width,
                    bottom: e.height
                };
            return a.xAxisID && a.controller.getScaleForId(a.xAxisID) instanceof s && (i.left = n.left, i.right = n.right), a.yAxisID && a.controller.getScaleForId(a.yAxisID) instanceof s && (i.top = n.top, i.bottom = n.bottom), w.canvas.clipArea(e.ctx, i), !0
        },
        afterDatasetDraw: function (e) {
            w.canvas.unclipArea(e.ctx)
        },
        beforeEvent: function (e, t) {
            var a = e.streaming;
            return "mousemove" === t.type ? a.lastMouseEvent = t.native : "mouseout" === t.type && delete a.lastMouseEvent, !0
        },
        destroy: function (e) {
            var t = e.streaming,
                a = t.canvas,
                n = t.mouseEventListener;
            w.stopFrameRefreshTimer(t), a.removeEventListener("mousedown", n), a.removeEventListener("mouseup", n), w.each(e.scales, function (e) {
                e instanceof s && e.destroy()
            })
        }
    },
        a = r.Zoom = r.Zoom || {};

    function p(e, t) {
        if (e.scaleAxes && e.rangeMax && !w.isNullOrUndef(e.rangeMax[e.scaleAxes])) {
            var a = e.rangeMax[e.scaleAxes];
            a < t && (t = a)
        }
        return t
    }

    function f(e, t) {
        if (e.scaleAxes && e.rangeMin && !w.isNullOrUndef(e.rangeMin[e.scaleAxes])) {
            var a = e.rangeMin[e.scaleAxes];
            t < a && (t = a)
        }
        return t
    }
    return a.zoomFunctions = a.zoomFunctions || {}, a.panFunctions = a.panFunctions || {}, a.zoomFunctions.realtime = function (e, t, a, n) {
        var i, r, o = e.options.realtime,
            s = e.chart.options.plugins.streaming,
            l = w.valueOrDefault(o.duration, s.duration),
            u = w.valueOrDefault(o.delay, s.delay),
            m = l * (2 - t);
        i = e.isHorizontal() ? (e.right - a.x) / (e.right - e.left) : (e.bottom - a.y) / (e.bottom - e.top), r = t < 1 ? p(n, m) : f(n, m), o.duration = r, o.delay = u + i * (l - r)
    }, a.panFunctions.realtime = function (e, t, a) {
        var n = e.options.realtime,
            i = e.chart.options.plugins.streaming,
            r = w.valueOrDefault(n.delay, i.delay) + (e.getValueForPixel(t) - e.getValueForPixel(0));
        n.delay = 0 < t ? p(a, r) : f(a, r)
    }, a.updateResetZoom = function (e) {
        e.resetZoom = function () {
            w.each(e.scales, function (e) {
                var t = e.options.time,
                    a = e.options.realtime,
                    n = e.options.ticks;
                t && (t.min = e.originalOptions.time.min, t.max = e.originalOptions.time.max), a && (a.duration = e.originalOptions.realtime.duration, a.delay = e.originalOptions.realtime.delay), n && (n.min = e.originalOptions.ticks.min, n.max = e.originalOptions.ticks.max)
            }), e.update({
                duration: 0
            })
        }
    }, r.plugins.register(t), t
});
(function (hangfire) {
    hangfire.config = {
        pollInterval: $("#hangfireConfig").data("pollinterval"),
        pollUrl: $("#hangfireConfig").data("pollurl"),
        locale: document.documentElement.lang
    };

    hangfire.ErrorAlert = (function () {
        function ErrorAlert(title, message) {
            this._errorAlert = $('#errorAlert');
            this._errorAlertTitle = $('#errorAlertTitle');
            this._errorAlertMessage = $('#errorAlertMessage');
            this._title = title;
            this._message = message;
        }

        ErrorAlert.prototype.show = function () {
            this._errorAlertTitle.html(this._title);
            this._errorAlertMessage.html(this._message);
            $('#errorAlert').slideDown('fast');
        };

        return ErrorAlert;
    })();

    hangfire.Metrics = (function () {
        function Metrics() {
            this._metrics = {};
        }

        Metrics.prototype.addElement = function (name, element) {
            if (!(name in this._metrics)) {
                this._metrics[name] = [];
            }

            this._metrics[name].push(element);
        };

        Metrics.prototype.getElements = function (name) {
            if (!(name in this._metrics)) {
                return [];
            }

            return this._metrics[name];
        };

        Metrics.prototype.getNames = function () {
            var result = [];
            var metrics = this._metrics;

            for (var name in metrics) {
                if (metrics.hasOwnProperty(name)) {
                    result.push(name);
                }
            }

            return result;
        };

        return Metrics;
    })();

    hangfire.RealtimeGraph = (function () {
        function RealtimeGraph(element, succeeded, failed, succeededStr, failedStr, pollInterval) {
            this._succeeded = succeeded;
            this._failed = failed;
            this._last = Date.now();
            this._pollInterval = pollInterval;

            this._chart = new Chart(element, {
                type: 'line',
                data: {
                    datasets: [{
                        label: succeededStr,
                        borderColor: '#62B35F',
                        backgroundColor: '#6FCD6D'
                    },
                    {
                        label: failedStr,
                        borderColor: '#BB4847',
                        backgroundColor: '#D55251'
                    }
                    ]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'realtime',
                            realtime: {
                                duration: 60 * 1000,
                                delay: pollInterval
                            },
                            time: {
                                unit: 'second',
                                tooltipFormat: 'LL LTS',
                                displayFormats: {
                                    second: 'LTS',
                                    minute: 'LTS'
                                }
                            },
                            ticks: {
                                maxRotation: 0
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                precision: 0,
                                min: 0,
                                maxTicksLimit: 6,
                                suggestedMax: 10
                            },
                            stacked: true
                        }]
                    },
                    elements: {
                        line: {
                            tension: 0
                        },
                        point: {
                            radius: 0
                        }
                    },
                    animation: {
                        duration: 0
                    },
                    hover: {
                        animationDuration: 0
                    },
                    responsiveAnimationDuration: 0,
                    legend: {
                        display: false
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    }
                }
            });
        }

        RealtimeGraph.prototype.appendHistory = function (statistics) {
            var newSucceeded = parseInt(statistics["succeeded:count"].intValue);
            var newFailed = parseInt(statistics["failed:count"].intValue);
            var now = Date.now();

            if (this._succeeded !== null && this._failed !== null && (now - this._last < this._pollInterval * 2)) {
                var succeeded = Math.max(newSucceeded - this._succeeded, 0);
                var failed = Math.max(newFailed - this._failed, 0);

                this._chart.data.datasets[0].data.push({
                    x: new Date(),
                    y: succeeded
                });
                this._chart.data.datasets[1].data.push({
                    x: new Date(),
                    y: failed
                });

                this._chart.update();
            }

            this._succeeded = newSucceeded;
            this._failed = newFailed;
            this._last = now;
        };

        return RealtimeGraph;
    })();

    hangfire.HistoryGraph = (function () {
        function HistoryGraph(element, succeeded, failed, succeededStr, failedStr) {
            var timeOptions = $(element).data('period') === 'week' ?
                {
                    unit: 'day',
                    tooltipFormat: 'LL',
                    displayFormats: {
                        day: 'll'
                    }
                } :
                {
                    unit: 'hour',
                    tooltipFormat: 'LLL',
                    displayFormats: {
                        hour: 'LT',
                        day: 'll'
                    }
                };

            this._chart = new Chart(element, {
                type: 'line',
                data: {
                    datasets: [{
                        label: succeededStr,
                        borderColor: '#62B35F',
                        backgroundColor: '#6FCD6D',
                        data: succeeded
                    },
                    {
                        label: failedStr,
                        borderColor: '#BB4847',
                        backgroundColor: '#D55251',
                        data: failed
                    }
                    ]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            time: timeOptions,
                            ticks: {
                                maxRotation: 0
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                precision: 0,
                                maxTicksLimit: 6
                            },
                            stacked: true
                        }]
                    },
                    elements: {
                        line: {
                            tension: 0
                        },
                        point: {
                            radius: 0
                        }
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    }
                }
            });
        }

        return HistoryGraph;
    })();

    hangfire.StatisticsPoller = (function () {
        function StatisticsPoller(metricsCallback, statisticsUrl, pollInterval) {
            this._metricsCallback = metricsCallback;
            this._listeners = [];
            this._statisticsUrl = statisticsUrl;
            this._pollInterval = pollInterval;
            this._timeoutId = null;
        }

        StatisticsPoller.prototype.start = function () {
            var self = this;

            var intervalFunc = function () {
                try {
                    $.post(self._statisticsUrl, {
                        metrics: self._metricsCallback()
                    })
                        .done(function (data) {
                            self._notifyListeners(data);
                            if (self._timeoutId !== null) {
                                self._timeoutId = setTimeout(intervalFunc, self._pollInterval);
                            }
                        })
                        .fail(function (xhr) {
                            var errorAlert = new Hangfire.ErrorAlert(
                                'Unable to refresh the statistics:',
                                'the server responded with ' + xhr.status + ' (' + xhr.statusText +
                                '). Try reloading the page manually, or wait for automatic reload that will happen in a minute.');

                            errorAlert.show();
                            self._timeoutId = null;
                            setTimeout(function () {
                                window.location.reload();
                            }, 60 * 1000);
                        });
                } catch (e) {
                    console.log(e);
                }
            };

            this._timeoutId = setTimeout(intervalFunc, this._pollInterval);
        };

        StatisticsPoller.prototype.stop = function () {
            if (this._timeoutId !== null) {
                clearTimeout(this._timeoutId);
                this._timeoutId = null;
            }
        };

        StatisticsPoller.prototype.addListener = function (listener) {
            this._listeners.push(listener);
        };

        StatisticsPoller.prototype._notifyListeners = function (statistics) {
            var length = this._listeners.length;
            var i;

            for (i = 0; i < length; i++) {
                this._listeners[i](statistics);
            }
        };

        return StatisticsPoller;
    })();

    hangfire.Page = (function () {
        function Page(config) {
            this._metrics = new Hangfire.Metrics();

            var self = this;
            this._poller = new Hangfire.StatisticsPoller(
                function () {
                    return self._metrics.getNames();
                },
                config.pollUrl,
                config.pollInterval);

            this._initialize(config.locale);

            this.realtimeGraph = this._createRealtimeGraph('realtimeGraph', config.pollInterval);
            this.historyGraph = this._createHistoryGraph('historyGraph');

            this._poller.start();
        };

        Page.prototype._createRealtimeGraph = function (elementId, pollInterval) {
            var realtimeElement = document.getElementById(elementId);
            if (realtimeElement) {
                var succeeded = parseInt($(realtimeElement).data('succeeded'));
                var failed = parseInt($(realtimeElement).data('failed'));

                var succeededStr = $(realtimeElement).data('succeeded-string');
                var failedStr = $(realtimeElement).data('failed-string');
                var realtimeGraph = new Hangfire.RealtimeGraph(realtimeElement, succeeded, failed, succeededStr, failedStr, pollInterval);

                this._poller.addListener(function (data) {
                    realtimeGraph.appendHistory(data);
                });

                return realtimeGraph;
            }

            return null;
        };

        Page.prototype._createHistoryGraph = function (elementId) {
            var historyElement = document.getElementById(elementId);
            if (historyElement) {
                var createSeries = function (obj) {
                    var series = [];
                    for (var date in obj) {
                        if (obj.hasOwnProperty(date)) {
                            var value = obj[date];
                            var point = {
                                x: Date.parse(date),
                                y: value
                            };
                            series.unshift(point);
                        }
                    }
                    return series;
                };

                var succeeded = createSeries($(historyElement).data("succeeded"));
                var failed = createSeries($(historyElement).data("failed"));

                var succeededStr = $(historyElement).data('succeeded-string');
                var failedStr = $(historyElement).data('failed-string');

                return new Hangfire.HistoryGraph(historyElement, succeeded, failed, succeededStr, failedStr);
            }

            return null;
        };

        Page.prototype._initialize = function (locale) {
            moment.locale(locale);
            var updateRelativeDates = function () {
                $('*[data-moment]').each(function () {
                    var $this = $(this);
                    var timestamp = $this.data('moment');

                    if (timestamp) {
                        var time = moment(timestamp, 'X');
                        $this.html(time.fromNow())
                            .attr('title', time.format('llll'))
                            .attr('data-container', 'body');
                    }
                });

                $('*[data-moment-title]').each(function () {
                    var $this = $(this);
                    var timestamp = $this.data('moment-title');

                    if (timestamp) {
                        var time = moment(timestamp, 'X');
                        $this.prop('title', time.format('llll'))
                            .attr('data-container', 'body');
                    }
                });

                $('*[data-moment-local]').each(function () {
                    var $this = $(this);
                    var timestamp = $this.data('moment-local');

                    if (timestamp) {
                        var time = moment(timestamp, 'X');
                        $this.html(time.format('l LTS'));
                    }
                });
            };

            updateRelativeDates();
            setInterval(updateRelativeDates, 30 * 1000);

            $('*[title]').tooltip();

            var self = this;
            $('*[data-metric]').each(function () {
                var name = $(this).data('metric');
                self._metrics.addElement(name, this);
            });

            this._poller.addListener(function (metrics) {
                for (var name in metrics) {
                    var elements = self._metrics.getElements(name);
                    for (var i = 0; i < elements.length; i++) {
                        var metric = metrics[name];
                        var metricClass = metric ? "metric-" + metric.style : "metric-null";
                        var highlighted = metric && metric.highlighted ? "highlighted" : null;
                        var value = metric ? metric.value : null;

                        $(elements[i])
                            .text(value)
                            .closest('.metric')
                            .removeClass()
                            .addClass(["metric", metricClass, highlighted].join(' '));
                    }
                }
            });

            var csrfHeader = $('meta[name="csrf-header"]').attr('content');
            var csrfToken = $('meta[name="csrf-token"]').attr('content');

            if (csrfToken && csrfHeader) {
                var headers = {};
                headers[csrfHeader] = csrfToken;

                $.ajaxSetup({
                    headers: headers
                });
            }

            $(document).on('click', '*[data-ajax]', function (e) {
                var $this = $(this);
                var confirmText = $this.data('confirm');

                if (!confirmText || confirm(confirmText)) {
                    $this.prop('disabled');
                    var loadingDelay = setTimeout(function () {
                        $this.button('loading');
                    }, 100);

                    $.post($this.data('ajax'), function () {
                        clearTimeout(loadingDelay);
                        window.location.reload();
                    });
                }

                e.preventDefault();
            });

            $(document).on('click', '.expander', function (e) {
                var $expander = $(this),
                    $expandable = $expander.closest('tr').next().find('.expandable');

                if (!$expandable.is(':visible')) {
                    $expander.text('Fewer details...');
                }

                $expandable.slideToggle(
                    150,
                    function () {
                        if (!$expandable.is(':visible')) {
                            $expander.text('More details...');
                        }
                    });
                e.preventDefault();
            });

            $('.js-jobs-list').each(function () {
                var container = this;

                var selectRow = function (row, isSelected) {
                    var $checkbox = $('.js-jobs-list-checkbox', row);
                    if ($checkbox.length > 0) {
                        $checkbox.prop('checked', isSelected);
                        $(row).toggleClass('highlight', isSelected);
                    }
                };

                var toggleRowSelection = function (row) {
                    var $checkbox = $('.js-jobs-list-checkbox', row);
                    if ($checkbox.length > 0) {
                        var isSelected = $checkbox.is(':checked');
                        selectRow(row, !isSelected);
                    }
                };

                var setListState = function (state) {
                    $('.js-jobs-list-select-all', container)
                        .prop('checked', state === 'all-selected')
                        .prop('indeterminate', state === 'some-selected');

                    $('.js-jobs-list-command', container)
                        .prop('disabled', state === 'none-selected');
                };

                var updateListState = function () {
                    var selectedRows = $('.js-jobs-list-checkbox', container).map(function () {
                        return $(this).prop('checked');
                    }).get();

                    var state = 'none-selected';

                    if (selectedRows.length > 0) {
                        state = 'some-selected';

                        if ($.inArray(false, selectedRows) === -1) {
                            state = 'all-selected';
                        } else if ($.inArray(true, selectedRows) === -1) {
                            state = 'none-selected';
                        }
                    }

                    setListState(state);
                };

                $(this).on('click', '.js-jobs-list-checkbox', function (e) {
                    selectRow(
                        $(this).closest('.js-jobs-list-row').first(),
                        $(this).is(':checked'));

                    updateListState();

                    e.stopPropagation();
                });

                $(this).on('click', '.js-jobs-list-row', function (e) {
                    if ($(e.target).is('a')) return;

                    toggleRowSelection(this);
                    updateListState();
                });

                $(this).on('click', '.js-jobs-list-select-all', function () {
                    var selectRows = $(this).is(':checked');

                    $('.js-jobs-list-row', container).each(function () {
                        selectRow(this, selectRows);
                    });

                    updateListState();
                });

                $(this).on('click', '.js-jobs-list-command', function (e) {
                    var $this = $(this);
                    var confirmText = $this.data('confirm');

                    var jobs = $("input[name='jobs[]']:checked", container).map(function () {
                        return $(this).val();
                    }).get();

                    if (!confirmText || confirm(confirmText)) {
                        $this.prop('disabled');
                        var loadingDelay = setTimeout(function () {
                            $this.button('loading');
                        }, 100);

                        $.post($this.data('url'), {
                            'jobs[]': jobs
                        }, function () {
                            clearTimeout(loadingDelay);
                            window.location.reload();
                        });
                    }

                    e.preventDefault();
                });

                updateListState();
            });
        };

        return Page;
    })();
})(window.Hangfire = window.Hangfire || {});

$(function () {
    Hangfire.page = new Hangfire.Page(Hangfire.config);
});
ï»¿
var zhcnlocale = moment.localeData('zh-cn');
moment.locale('zh', {
    months: zhcnlocale._months,
    monthsShort: zhcnlocale._monthsShort,
    weekdays: zhcnlocale._weekdays,
    weekdaysShort: zhcnlocale._weekdaysShort,
    weekdaysMin: zhcnlocale._weekdaysMin,
    longDateFormat: zhcnlocale._longDateFormat,
    meridiemParse: zhcnlocale._meridiemParse,
    meridiemHour: zhcnlocale.meridiemHour,
    meridiem: zhcnlocale.meridiem,
    calendar: zhcnlocale._calendar,
    dayOfMonthOrdinalParse: zhcnlocale._dayOfMonthOrdinalParse,
    ordinal: zhcnlocale.ordinal,
    relativeTime: zhcnlocale._relativeTime,
    week: zhcnlocale._week
});
ï»¿(function (hangfire) {
    hangfire.Management = (function () {
        function Management() {
            this._initialize();
        }
        Management.prototype._initialize = function () {
            $('.js-management').each(function () {
                var container = this;

                var showCommandsPanelOptions = function (commandsType) {

                    $(".commands-panel", container).hide();
                    $(".commands-panel." + commandsType, container).show();

                    $(".commands-options", container).hide();
                    $(".commands-options." + commandsType, container).show();
                    //data-commands-type="Enqueue" data-id="@(id)"
                    $(".commandsType." + id).html($("a[data-commands-type='" + commandsType + "']", container).html());
                };

                var $this = $(this);
                var id = $this.data("id");
                showCommandsPanelOptions("Enqueue");

                $(this).on('click', '.commands-type',
                    function (e) {
                        var $this = $(this);
                        var commandsType = $this.data('commands-type');
                        showCommandsPanelOptions(commandsType);
                        e.preventDefault();
                    });

                $(this).on('click', '.js-management-input-CronModal',
                    function (e) {
                        var $this = $(this);
                        var id = $this.attr("input-id");
                        var cron = $("#" + id + "_sys_cron").val();
                        $("#result").val(cron || "* * * * *").data("cronId", id);
                        $('#analysis').click()
                        $('#cronModal').modal("show")
                        e.preventDefault();
                    });
                $("#connExpressionOk").click(function () {

                    var id = $("#result").data("cronId");
                    var cron = $("#result").val();
                    $("#" + id + "_sys_cron").val(cron);
                    $('#cronModal').modal("hide")
                })
                $(this).on('click', '.js-management-input-commands',
                    function (e) {
                        var $this = $(this);
                        var confirmText = $this.data('confirm');

                        var id = $this.attr("input-id");
                        var type = $this.attr("input-type");
                        var send = {
                            id: id,
                            type: type
                        };

                        $("input[id^='" + id + "']", container).each(function () {
                            send[$(this).attr('id')] = $(this).val();
                        });
                        $("textarea[id^='" + id + "']", container).each(function () {
                            send[$(this).attr('id')] = $(this).val();
                        });
                        $("select[id^='" + id + "']", container).each(function () {
                            send[$(this).attr('id')] = $(this).val();
                        });
                        $("div[id^='" + id + "']", container).each(function () {
                            send[$(this).attr('id')] = $(this).data('date');
                        });

                        if (!!$this.attr('schedule')) {
                            send['schedule'] = $this.attr("schedule");
                        }

                        if (!confirmText || confirm(confirmText)) {
                            $this.prop('disabled');
                            var loadingDelay = setTimeout(function () {
                                $this.button('loading');
                            }, 100);

                            $.post($this.data('url'), send, function () {
                                clearTimeout(loadingDelay);
                                $this.removeProp('disabled');
                                $this.button('reset');
                                window.location.reload();
                            }).fail(function (xhr, status, error) {
                                var errorMsg = xhr.getResponseHeader("errorMsg");
                                Hangfire.Management.alert(id, errorMsg || "There was an error. " + error);
                                $this.removeProp('disabled');
                                $this.button('reset');
                            });
                        }

                        e.preventDefault();
                    });
            });
        };

        Management.alert = function (id, message) {
            $('#' + id + '_error')
                .html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">Ã—</a><strong>Error! </strong><span>' +
                    message +
                    '</span></div>');
        }

        return Management;

    })();
})(window.Hangfire = window.Hangfire || {});

function loadManagement() {
    Hangfire.management = new Hangfire.Management();

    var link = document.createElement('link');
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/3.1.4/css/bootstrap-datetimepicker.min.css');
    document.getElementsByTagName("head")[0].appendChild(link);
    var url = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/3.1.4/js/bootstrap-datetimepicker.min.js";
    $.getScript(url,
        function () {
            $(function () {
                $("div[id$='_datetimepicker']").datetimepicker({
                    format: "YYYY-MM-DD HH:mm:ss"
                });
                $("input.date").datetimepicker({
                    format: "YYYY-MM-DD HH:mm:ss"
                });
                //$('input.time').datetimepicker({ pickDate: false });
            });
        });


    //var link2 = document.createElement('link');
    //link2.setAttribute("rel", "stylesheet");
    //link2.setAttribute("type", "text/css");
    //link2.setAttribute("href", 'https://cdn.bootcss.com/bootstrap-timepicker/0.5.2/css/bootstrap-timepicker.min.css');
    //document.getElementsByTagName("head")[0].appendChild(link2);
    //var url2 = "https://cdn.bootcss.com/bootstrap-timepicker/0.5.2/js/bootstrap-timepicker.min.js";
    //$.getScript(url2,
    //    function () {
    //        $(function () {
    //            //$("div[id$='_datetimepicker']").datepicker();
    //            //$('input.date').datepicker();
    //            $('input.time').timepicker();
    //        });
    //    });

    var link2 = document.createElement('link');
    link2.setAttribute("rel", "stylesheet");
    link2.setAttribute("type", "text/css");
    link2.setAttribute("href", 'https://cdn.bootcss.com/jquery.inputmask/3.3.4/css/inputmask.min.css');
    document.getElementsByTagName("head")[0].appendChild(link2);
    var url2 = "https://cdn.bootcss.com/jquery.inputmask/3.3.4/jquery.inputmask.bundle.min.js";
    $.getScript(url2,
        function () {
            $(function () {
                //$("div[id$='_datetimepicker']").datepicker();
                //$('input.date').datepicker();
                $('input.time').inputmask();
            });
        });


    //var link3 = document.createElement('link');
    //link3.setAttribute("rel", "stylesheet");
    //link3.setAttribute("type", "text/css");
    //link3.setAttribute("href", 'https://cdn.bootcss.com/fuelux/3.16.3/css/fuelux.css');
    //document.getElementsByTagName("head")[0].appendChild(link3);
    //var url3 = "https://cdn.bootcss.com/fuelux/3.16.3/js/fuelux.js";
    //$.getScript(url3,
    //    function () {
    //        $(function () {
    //            $('input[type=number]').addClass("spinbox-input").spinbox();
    //        });
    //    });
    var link3 = document.createElement('link');
    link3.setAttribute("rel", "stylesheet");
    link3.setAttribute("type", "text/css");
    link3.setAttribute("href", 'https://cdn.bootcss.com/chosen/1.8.2/chosen.css');
    document.getElementsByTagName("head")[0].appendChild(link3);
    var url3 = "https://cdn.bootcss.com/chosen/1.8.2/chosen.jquery.js";
    $.getScript(url3,
        function () {
            $(function () {
                $('select').chosen({
                    no_results_text: "æœªæ‰¾åˆ°æ­¤é€‰é¡¹",
                    width: "100%"
                });
            });
        });
}

if (window.attachEvent) {
    window.attachEvent('onload', loadManagement);
} else {
    if (window.onload) {
        var curronload = window.onload;
        var newonload = function (evt) {
            curronload(evt);
            loadManagement(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = loadManagement;
    }
}
ï»¿
/**
 * å¯é…ç½®çš„æ•°æ®ç±»åž‹å†…å®¹å°è£…
 */
var Type = {

    /**
     * åŒ¹é… *
     */
    "All": {
        "name": "All",
        "keyword": "*",
        "set": function (name, value) {
            var b = (value === this.keyword);
            if (b) {
                setChecked(name, this.name);
            }
            return b;
        },
        "get": function (name) {
            return this.keyword;
        }
    },
    /**
     * å‘¨æœŸæ€§ x-x
     */
    "Cyclic": {
        "name": "Cyclic",
        "keyword": "-",
        "set": function (name, value) {

            var vr = value.split(this.keyword);
            var b = vr.length === 2;

            if (b) {
                setChecked(name, this.name);
                var id_1 = name + this.name + "_1";
                var id_2 = name + this.name + "_2";
                $("#" + id_1).val(vr[0]);
                $("#" + id_2).val(vr[1]);
            }
            return b;
        },
        "get": function (name) {
            var id_1 = name + this.name + "_1";
            var id_2 = name + this.name + "_2";
            var val1 = $("#" + id_1).val();
            var val2 = $("#" + id_2).val();
            return (val1 && val2) && (val1 + this.keyword + val2);
        }
    },
    /**
     * ä»Ž x å¼€å§‹ ,æ¯ x æ‰§è¡Œä¸€æ¬¡
     */
    "Interval": {
        "name": "Interval",
        "keyword": "/",
        "set": function (name, value) {
            var vr = value.split(this.keyword);
            var b = vr.length === 2;

            if (b) {
                setChecked(name, this.name);
                var id_1 = name + this.name + "_1";
                var id_2 = name + this.name + "_2";
                $("#" + id_1).val(vr[0]);
                $("#" + id_2).val(vr[1]);
            }
            return b;
        },
        "get": function (name) {
            var id_1 = name + this.name + "_1";
            var id_2 = name + this.name + "_2";
            var val1 = $("#" + id_1).val();
            var val2 = $("#" + id_2).val();
            return (val1 && val2) && (val1 + this.keyword + val2);
        }
    },
    /**
     * ä¸æŒ‡å®š
     */
    "NotAssigned": {
        "name": "NotAssigned",
        "keyword": "?",
        "set": function (name, value) {
            var b = value === this.keyword;
            if (b) {
                setChecked(name, this.name);
            }
            return b;
        },
        "get": function (name) {
            return this.keyword;
        }
    },
    /**
     * æœ¬æœˆæœ€åŽä¸€å¤©
     */
    "LastDayOfMonth": {
        "name": "LastDayOfMonth",
        "keyword": "L",
        "set": function (name, value) {
            var b = value === this.keyword;
            if (b) {
                setChecked(name, this.name);
            }

            return b;
        },
        "get": function (name) {
            return this.keyword;
        }
    },
    /**
     * æ¯æœˆ x å·æœ€è¿‘çš„é‚£ä¸ªå·¥ä½œæ—¥
     */
    "RecentDays": {
        "name": "RecentDays",
        "keyword": "W",
        "set": function (name, value) {
            var b = value[value.length - 1] === this.keyword;
            if (b) {
                setChecked(name, this.name);
                $("#" + name + this.name + "_1").val(value.substring(0, value.length - 1));
            }
            return b;
        },
        "get": function (name) {
            var id_1 = name + this.name + "_1";
            var val = $("#" + id_1).val();
            return val && (val + this.keyword);
        }
    },
    /**
     * æœ¬æœˆæœ€åŽä¸€ä¸ªå·¥ä½œæ—¥
     */
    "LastDayOfMonthRecentDays": {
        "name": "LastDayOfMonthRecentDays",
        "keyword": "LW",
        "set": function (name, value) {
            var b = value === this.keyword;
            if (b) {
                setChecked(name, this.name);
            }
            return b;
        },
        "get": function (name) {
            return this.keyword;
        }
    },
    /**
     * ç¬¬ x å‘¨çš„æ˜ŸæœŸ x
     */
    "WeeksOfWeek": {
        "name": "WeeksOfWeek",
        "keyword": "#",
        "set": function (name, value) {
            var vr = value.split(this.keyword);
            var b = vr.length === 2;

            if (b) {
                setChecked(name, this.name);
                var id_1 = name + this.name + "_1";
                var id_2 = name + this.name + "_2";
                $("#" + id_1).val(vr[0]);
                $("#" + id_2).val(vr[1]);
            }
            return b;
        },
        "get": function (name) {
            var id_1 = name + this.name + "_1";
            var id_2 = name + this.name + "_2";
            var val1 = $("#" + id_1).val();
            var val2 = $("#" + id_2).val();
            return (val1 && val2) && (val1 + this.keyword + val2);
        }
    },
    /**
     * æœ¬æœˆæœ€åŽä¸€ä¸ªæ˜ŸæœŸ x
     */
    "LastWeekOfMonth": {
        "name": "LastWeekOfMonth",
        "keyword": "L",
        "set": function (name, value) {
            var length = value.length;
            var b = length > 1 && value[length - 1] === this.keyword;
            if (b) {
                setChecked(name, this.name);
                $("#" + name + this.name + "_1").val(value.substring(0, length - 1));
            }
            return b;
        },
        "get": function (name) {
            var id_1 = name + this.name + "_1";
            var val = $("#" + id_1).val();
            return val && (val + this.keyword);
        }
    },
    /**
     * æŒ‡å®š
     */
    "Assigned": {
        "name": "Assigned",
        "keyword": ",",
        "set": function (name, value) {
            var b = value || undefined;

            if (value) {
                value = (value.indexOf(",") === -1) ? value : value.split(",");

                setChecked(name, this.name);
                var id_1 = name + this.name + "_1";
                var $2 = $("#" + id_1);
                $2.val(value);
                $2.trigger("chosen:updated");
            }
            return b;
        },
        "get": function (name) {
            var id_1 = name + this.name + "_1";
            var val1 = $("#" + id_1).val();
            return val1 || undefined;
        }
    }
};

/**
 * @type {*[]} ç§’-å¹´å¯¹è±¡
 */
var TimeObject = [

    //{
    //    radioName: "secondType",
    //    min: 0,
    //    max: 59
    //},
    {
        radioName: "minuteType",
        min: 0,
        max: 59
    },
    {
        radioName: "hourType",
        min: 0,
        max: 23
    },
    {
        radioName: "dayType",
        min: 1,
        max: 31
    },
    {
        radioName: "monthType",
        min: 1,
        max: 12
    },
    {
        radioName: "weekType",
        min: 1,
        max: 7
    },
    //{
    //    radioName: "yearType",
    //    min: 2015,
    //    max: 2100
    //}
];

/**
 * @type {*[]} å‘¨è‹±æ–‡æè¿°æ­£åˆ™-æ•°å­—æè¿°
 */
var WEEK_DESCRIBE = [{
    RegExp: new RegExp("MON", "g"),
    WeekNum: 1
}, {
    RegExp: new RegExp("THU", "g"),
    WeekNum: 2
}, {
    RegExp: new RegExp("WED", "g"),
    WeekNum: 3
}, {
    RegExp: new RegExp("THU", "g"),
    WeekNum: 4
}, {
    RegExp: new RegExp("FRI", "g"),
    WeekNum: 5
}, {
    RegExp: new RegExp("SAT", "g"),
    WeekNum: 6
}, {
    RegExp: new RegExp("SUN", "g"),
    WeekNum: 7
}];
/**
 * @param name å•é€‰æ¡†æŒ‰é’® name
 * @returns {String}
 */
var getChecked = function (name) {
    return $("input[name='" + name + "']:checked").val();
};

/**
 * @param name å•é€‰æ¡†æŒ‰é’® name
 * @param value å•é€‰æ¡† å¾…è®¾ç½®çš„å€¼
 * @returns {String}
 */
var setChecked = function (name, value) {
    $("input[name='" + name + "'][value='" + value + "']").prop("checked", true);
};


//init
$(function () {
    var $result = $("#result");
    /**
     * é‡ç½® cron ä¸²å†…å®¹
     */
    var reset = function () {
        var r = '';
        TimeObject.forEach(function (v) {
            var radioName = v.radioName;
            var value = getChecked(radioName) && Type[getChecked(radioName)].get(radioName);
            value = value || "*";
            r += value + " ";
        });

        if (r) {
            $result.val(r.trim());
        }

    };

    /**
     * åè§£æž
     */
    var analysis = function () {
        var r = $result.val().trim().replace(/ï¼Œ/g, ',').replace(/\s+/g, ' ').toLocaleUpperCase();
        WEEK_DESCRIBE.forEach(function (v) {
            r = r.replace(v.RegExp, v.WeekNum);
        });
        $result.val(r);
        var vr = r.split(' ');
        //if (vr.length === 6) {
        //    vr.push("?");
        //}
        vr.forEach(function (v, i) {
            var timeObject = TimeObject[i];
            var radioName = timeObject.radioName;
            for (var o in Type) {
                var b = Type[o].set(radioName, v);
                if (b) {
                    break;
                }
            }
        });
    };


    /**
     * ä¸‹æ‹‰æ¡†å¡«å……
     */
    TimeObject.forEach(function (v) {
        var radioName = v.radioName;
        var min = v.min;
        var max = v.max;
        var idAssigned = radioName + Type.Assigned.name + "_1";
        var $currChosen = $("#" + idAssigned);
        if ($currChosen) {
            for (; min <= max; min++) {
                var option = "<option value='" + min + "'>" + min + "</option>";
                $currChosen.append(option);
            }
            $currChosen.change(function () {
                try {
                    reset();
                } catch (e) {

                }
            });
            //$currChosen.chosen({
            //    no_results_text: "æœªæ‰¾åˆ°æ­¤é€‰é¡¹",
            //    width: "42%"
            //});
        }
    });


    //ç»‘å®šäº‹ä»¶


    var $tabContentInput = $(".tab-content");

    $tabContentInput.find("input[type=radio]").change(function () {
        try {
            reset();
        } catch (e) {

        }
    });
    $tabContentInput.find("input[type=number]").keyup(function () {
        try {
            reset();
        } catch (e) {

        }
    });

    $result.mouseenter(function () {
        this.select();
    });

    $("#analysis").click(function () {
        analysis()
    });

    try {
        reset();
    } catch (e) {

    }
});