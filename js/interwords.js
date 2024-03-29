var interwords = {
    confirm: "确认",
    cancel: "取消",
    close: "关闭",
    def: "缺省",
    again: "请重新尝试操作！",
    norecord: "没有数据记录",
    addrecord: "请先在网站后台添加数据记录",
    nodata: "没有数据",
    specialChar: '不能含有“;/?:@=&<>"#%{}|\\^~[]`”特殊字符。',
    loading: "加载中...",
    error: "出错啦",
    antistop: "请输入关键词",
    keyword: "请输入关键字",
    beijing: "北京市",
    myriad: "万",
    prompt: "温馨提示：",
    auth: {}
};
interwords.auth.operationNoPer = "对不起，您无权限做此操作！", interwords.auth.viewNoPer = "对不起，您无权限访问该页面！", interwords.auth.bakHome = "返回首页";
var isStaticedDemo = window.isStaticedDemo || !1;
window._isLoaded = !1, window.sendLevel = /(.+\.make\..+)|(.+\.oper\..+)|(.+\..*site\.yun300\.cn)/;
var getParentWindow = function () {
    try {
        return parent.zqceparentaaaa || parent
    } catch (e) {
        return window
    }
};

function getStaticHost() {
    var origin = window.location.origin;
    var pathname = window.location.pathname;
    var index = pathname.indexOf('/mobile-h5')
    if (index > -1) {
        pathname = pathname.slice(0, index)
    }
    var e = "static.",
        t = origin == 'file://' ? pathname : window.location.hostname;
    return null == window.tenant ? t : sendLevel.test(t) || "1" != tenant.cdnFlag ? t : t.startWith("www.") ? t.replace("www.", e) : e + t
}

function getHost() {
    var e = window.location.hostname;
    return sendLevel.test(e) ? e : e.startWith("www.") ? e.replace("www.", "") : e
}

function getImgRepositoryHost() {
    var e = window.globalObj.getProtocol(),
        t = "img01.",
        n = window.location.hostname;
    return null == tenant ? e + n : sendLevel.test(n) || "1" != tenant.cdnFlag ? e + n : n.startWith("www.") ? e + n.replace("www.", t) : e + t + n
}

function injectScript(e, t, n, i) {
    if (void 0 === i && (i = 0), i >= t.length) n();
    else {
        var r = e.createElement("script");
        r.type = "text/javascript", r.src = t[i], r.onload = r.onreadystatechange = function () {
            r.readyState && "loaded" != r.readyState && "complete" != r.readyState || t[i] && (t[i] = null, injectScript(e, t, n, i + 1))
        }, e.getElementsByTagName("head")[0].appendChild(r)
    }
}

function isFrontEnv() {
    return !(null != getParentWindow().$LAB && "object" == typeof getParentWindow().$LAB)
}

window.globalObj = window.globalObj || {},
    function () {
        var e, t;
        t = "", window.globalObj.getProtocol = function () {
            return t || (t = "//"), t
        }, window.globalObj.getProtocolHead = function () {
            return e || (e = location.protocol.substring(0, location.protocol.length - 1)), e
        }
    }(), String.prototype.endWith = function (e) {
    return !(null == e || "" == e || 0 == this.length || e.length > this.length) && this.substring(this.length - e.length) == e
}, String.prototype.startWith = function (e) {
    return !(null == e || "" == e || 0 == this.length || e.length > this.length) && this.substr(0, e.length) == e
};
var $define = function (e, t, n) {
        $control.isArray(e) && e.unshift("jquery"), $control.isArray(t) && t.unshift("jquery"), define(e, t, n)
    },
    $compCl = function () {
        var n = {},
            t = [];
        return {
            addComp: function (e, t) {
                t.init && (n[e] = t.init)
            }, initAll: function (e) {
                e({requireJsAry: t, initFuncs: n})
            }, getAllInitFunc: function () {
                return n
            }, getAllRequire: function () {
                return t
            }, getScope: function (e) {
                return 1 <= $("#c_" + e).length ? $("#c_" + e) : $("#comp_" + e)
            }
        }
    }(),
    $control = {
        refreshAll: function () {
            $compCl.initAll(function (e) {
                var n = e.initFuncs;
                e.requireJsAry;
                !function () {
                    for (var t in n) try {
                        n[t].init()
                    } catch (e) {
                        window.console && window.console.log("exec-comp name:" + t)
                    }
                }()
            })
        },
        refreshById: function (t) {
            var e, n = $compCl.getAllInitFunc()[t];
            try {
                e = n.init
            } catch (e) {
                console.log("error function key not find" + t)
            }
            return e instanceof Function && n.init(), n
        },
        isArray: function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    },
    _compIndex = 0,
    $comp = function (e) {
        var o = e;
        void 0 === o.noDataFlag || "true" !== o.noDataFlag.toString() ? (_compIndex++, require(["utils"], function (e) {
            require(o.lib, function (e) {
                var t, n, i = $compCl.getScope(o.id),
                    r = !1;
                i.is(":hidden") && isFrontEnv() && (t = i.closest(".p_box003")).length && (t.css("visibility", "hidden"), r = !0, t.hasClass("active") ? n = !0 : t.addClass("active")), e._params = o, e.scope = i, e.init(), r && (t.css("visibility", "visible"), n || t.removeClass("active")), i.attr("loaded", "true"), $compCl.addComp(o.id, {init: e}), sendLevel.test(window.location.hostname) || i.find("[domain-src]").each(function () {
                    -1 == $(this).attr("src").indexOf(window.globalObj.getProtocol()) && $(this).attr("src", getImgRepositoryHost() + $(this).attr("domain-src")), $(this).removeAttr("domain-src")
                }), window.onmessage = function (e) {
                    var t = (e = e || event).data;
                    if (t.name = "dialogIframe") {
                        var n = $("div[id^='c_']");
                        "singleRow" == t.htmlType && (n.width("100%"), n.css("top", "0px"), n.css("left", "0px")), $("body").addClass("js-dialogIframe")
                    }
                }, _compIndex--, e._params.complete && e._params.complete(), 0 == _compIndex && $.allComplete && $.allComplete(), _isLoaded && 0 == _compIndex && require(["wgt_readyload"], function (e) {
                    e.lazyImg({defObj: "body"}), e.setCompPostion()
                })
            })
        })) : $compCl.getScope(o.id).attr("loaded", "true")
    },
    $compDebug = -1 != document.location.search.indexOf("DEBUGJS=TRUE"),
    requirejs, require, define;
!function (global) {
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = "2.1.11",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;

    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
        var n;
        if (e)
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1) ;
    }

    function eachReverse(e, t) {
        var n;
        if (e)
            for (n = e.length - 1; -1 < n && (!e[n] || !t(e[n], n, e)); n -= 1) ;
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var n;
        for (n in e)
            if (hasProp(e, n) && t(e[n], n)) break
    }

    function mixin(n, e, i, r) {
        return e && eachProp(e, function (e, t) {
            !i && hasProp(n, t) || (!r || "object" != typeof e || !e || isArray(e) || isFunction(e) || e instanceof RegExp ? n[t] = e : (n[t] || (n[t] = {}), mixin(n[t], e, i, r)))
        }), n
    }

    function bind(e, t) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(e) {
        throw e
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function (e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, n, i) {
        var r = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return r.requireType = e, r.requireModules = i, n && (r.originalError = n), r
    }

    if (void 0 === define) {
        if (void 0 !== requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        void 0 === require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function (e, t, n, i) {
            var r, o, a = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = n, n = i) : e = []), o && o.context && (a = o.context), (r = getOwn(contexts, a)) || (r = contexts[a] = req.s.newContext(a)), o && r.configure(o), r.require(e, t, n)
        }, req.config = function (e) {
            return req(e)
        }, req.nextTick = "undefined" != typeof setTimeout ? function (e) {
            setTimeout(e, 4)
        } : function (e) {
            e()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function (t) {
            req[t] = function () {
                var e = contexts[defContextName];
                return e.require[t].apply(e, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function (e, t, n) {
            var i = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return i.type = e.scriptType || "text/javascript", i.charset = "utf-8", i.async = !0, i
        }, req.collectionAllRequireSJs = [], req.load = function (t, n, i) {
            var sliceIndex = i.indexOf('m/wgt/frontPlugin')
            if(sliceIndex > -1) {
                i = i.slice(0, sliceIndex) + 'js/paging.js'
            }
            var e, r = t && t.config || {};
            if (isBrowser) return (e = req.createNode(r, n, i)).setAttribute("data-requirecontext", t.contextName), e.setAttribute("data-requiremodule", n), !e.attachEvent || e.attachEvent.toString && e.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (e.addEventListener("load", t.onScriptLoad, !1), e.addEventListener("error", t.onScriptError, !1)) : (useInteractive = !0, e.attachEvent("onreadystatechange", t.onScriptLoad)), $compDebug || -1 == i.indexOf("jquery.datePicker.js") && -1 == i.indexOf("ckeditor.js") && (i = i.replace(/.{1}js$/, ".min.js")), -1 != i.indexOf("v=") || isStaticedDemo || (-1 != i.indexOf("?") && "0" != upgradeVersion ? i += "&v=" + upgradeVersion : i += "?v=" + upgradeVersion), e.src = i, currentlyAddingScript = e, baseElement ? head.insertBefore(e, baseElement) : head.appendChild(e), currentlyAddingScript = null, e;
            if (isWebWorker) try {
                importScripts(i), t.completeLoad(n)
            } catch (e) {
                t.onError(makeError("importscripts", "importScripts failed for " + n + " at " + i, e, [n]))
            }
        }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function (e) {
            if (head || (head = e.parentNode), dataMain = e.getAttribute("data-main")) return mainScript = dataMain, cfg.baseUrl || (mainScript = (src = mainScript.split("/")).pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
        }), define = function (e, n, t) {
            var i, r;
            "string" != typeof e && (t = n, n = e, e = null), isArray(n) || (t = n, n = null), !n && isFunction(t) && (n = [], t.length && (t.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function (e, t) {
                n.push(t)
            }), n = (1 === t.length ? ["require"] : ["require", "exports", "module"]).concat(n))), useInteractive && (i = currentlyAddingScript || getInteractiveScript()) && (e || (e = i.getAttribute("data-requiremodule")), r = contexts[i.getAttribute("data-requirecontext")]), (r ? r.defQueue : globalDefQueue).push([e, n, t])
        }, define.amd = !1, define.zqamd = !0, req.exec = function (text) {
            return eval(text)
        }, req(cfg)
    }

    function newContext(l) {
        var n, e, p, c, u, v = {waitSeconds: 7, baseUrl: "./", paths: {}, bundles: {}, pkgs: {}, shim: {}, config: {}},
            d = {},
            f = {},
            i = {},
            h = [],
            m = {},
            r = {},
            g = {},
            y = 1,
            b = 1;

        function w(e, t, n) {
            var i, r, o, a, s, l, c, u, d, f, p = t && t.split("/"),
                h = p,
                m = v.map,
                g = m && m["*"];
            if (e && "." === e.charAt(0) && (t ? (h = p.slice(0, p.length - 1), l = (e = e.split("/")).length - 1, v.nodeIdCompat && jsSuffixRegExp.test(e[l]) && (e[l] = e[l].replace(jsSuffixRegExp, "")), function (e) {
                var t, n, i = e.length;
                for (t = 0; t < i; t++)
                    if ("." === (n = e[t])) e.splice(t, 1), t -= 1;
                    else if (".." === n) {
                        if (1 === t && (".." === e[2] || ".." === e[0])) break;
                        0 < t && (e.splice(t - 1, 2), t -= 2)
                    }
            }(e = h.concat(e)), e = e.join("/")) : 0 === e.indexOf("./") && (e = e.substring(2))), n && m && (p || g)) {
                e: for (o = (r = e.split("/")).length; 0 < o; o -= 1) {
                    if (s = r.slice(0, o).join("/"), p)
                        for (a = p.length; 0 < a; a -= 1)
                            if ((i = getOwn(m, p.slice(0, a).join("/"))) && (i = getOwn(i, s))) {
                                c = i, u = o;
                                break e
                            }
                    !d && g && getOwn(g, s) && (d = getOwn(g, s), f = o)
                }
                !c && d && (c = d, u = f),
                c && (r.splice(0, u, c), e = r.join("/"))
            }
            return getOwn(v.pkgs, e) || e
        }

        function x(t) {
            isBrowser && each(scripts(), function (e) {
                if (e.getAttribute("data-requiremodule") === t && e.getAttribute("data-requirecontext") === p.contextName) return e.parentNode.removeChild(e), !0
            })
        }

        function C(e) {
            var t = getOwn(v.paths, e);
            if (t && isArray(t) && 1 < t.length) return t.shift(), p.require.undef(e), p.require([e]), !0
        }

        function T(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function E(e, t, n, i) {
            var r, o, a, s, l = null,
                c = t ? t.name : null,
                u = e,
                d = !0,
                f = "";
            return e || (d = !1, e = "_@r" + (y += 1)), l = (s = T(e))[0], e = s[1], l && (l = w(l, c, i), o = getOwn(m, l)), e && (l ? f = o && o.normalize ? o.normalize(e, function (e) {
                return w(e, c, i)
            }) : w(e, c, i) : (l = (s = T(f = w(e, c, i)))[0], f = s[1], n = !0, r = p.nameToUrl(f))), {
                prefix: l,
                name: f,
                parentMap: t,
                unnormalized: !!(a = !l || o || n ? "" : "_unnormalized" + (b += 1)),
                url: r,
                originalName: u,
                isDefine: d,
                id: (l ? l + "!" + f : f) + a
            }
        }

        function k(e) {
            var t = e.id,
                n = getOwn(d, t);
            return n || (n = d[t] = new p.Module(e)), n
        }

        function _(e, t, n) {
            var i = e.id,
                r = getOwn(d, i);
            !hasProp(m, i) || r && !r.defineEmitComplete ? (r = k(e)).error && "error" === t ? n(r.error) : r.on(t, n) : "defined" === t && n(m[i])
        }

        function j(n, e) {
            var t = n.requireModules,
                i = !1;
            e ? e(n) : (each(t, function (e) {
                var t = getOwn(d, e);
                t && (t.error = n, t.events.error && (i = !0, t.emit("error", n)))
            }), i || req.onError(n))
        }

        function S() {
            globalDefQueue.length && (apsp.apply(h, [h.length, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function q(e) {
            delete d[e], delete f[e]
        }

        function N() {
            var e, i, t = 1e3 * v.waitSeconds,
                r = t && p.startTime + t < (new Date).getTime(),
                o = [],
                a = [],
                s = !1,
                l = !0;
            if (!n) {
                if (n = !0, eachProp(f, function (e) {
                    var t = e.map,
                        n = t.id;
                    if (e.enabled && (t.isDefine || a.push(e), !e.error))
                        if (!e.inited && r) C(n) ? s = i = !0 : (o.push(n), x(n));
                        else if (!e.inited && e.fetched && t.isDefine && (s = !0, !t.prefix)) return l = !1
                }), r && o.length) return (e = makeError("timeout", "Load timeout for modules: " + o, null, o)).contextName = p.contextName, j(e);
                l && each(a, function (e) {
                    !function r(o, a, s) {
                        var e = o.map.id;
                        o.error ? o.emit("error", o.error) : (a[e] = !0, each(o.depMaps, function (e, t) {
                            var n = e.id,
                                i = getOwn(d, n);
                            !i || o.depMatched[t] || s[n] || (getOwn(a, n) ? (o.defineDep(t, m[n]), o.check()) : r(i, a, s))
                        }), s[e] = !0)
                    }(e, {}, {})
                }), r && !i || !s || !isBrowser && !isWebWorker || u || (u = setTimeout(function () {
                    u = 0, N()
                }, 50)), n = !1
            }
        }

        function a(e) {
            hasProp(m, e[0]) || k(E(e[0], null, !0)).init(e[1], e[2])
        }

        function o(e, t, n, i) {
            e.detachEvent && !isOpera ? i && e.detachEvent(i, t) : e.removeEventListener(n, t, !1)
        }

        function s(e) {
            var t = e.currentTarget || e.srcElement;
            return o(t, p.onScriptLoad, "load", "onreadystatechange"), o(t, p.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function A() {
            var e;
            for (S(); h.length;) {
                if (null === (e = h.shift())[0]) return j(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                a(e)
            }
        }

        return c = {
            require: function (e) {
                return e.require ? e.require : e.require = p.makeRequire(e.map)
            }, exports: function (e) {
                if (e.usingExports = !0, e.map.isDefine) return e.exports ? m[e.map.id] = e.exports : e.exports = m[e.map.id] = {}
            }, module: function (e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id, uri: e.map.url, config: function () {
                        return getOwn(v.config, e.map.id) || {}
                    }, exports: e.exports || (e.exports = {})
                }
            }
        }, (e = function (e) {
            this.events = getOwn(i, e.id) || {}, this.map = e, this.shim = getOwn(v.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }).prototype = {
            init: function (e, t, n, i) {
                i = i || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function (e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function (e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function () {
                if (!this.fetched) {
                    this.fetched = !0, p.startTime = (new Date).getTime();
                    var e = this.map;
                    if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                    p.makeRequire(this.map, {enableBuildCallback: !0})(this.shim.deps || [], bind(this, function () {
                        return e.prefix ? this.callPlugin() : this.load()
                    }))
                }
            },
            load: function () {
                var e = this.map.url;
                r[e] || (r[e] = !0, p.load(this.map.id, e))
            },
            check: function () {
                if (this.enabled && !this.enabling) {
                    var t, e, n = this.map.id,
                        i = this.depExports,
                        r = this.exports,
                        o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        r = p.execCb(n, o, i, r)
                                    } catch (e) {
                                        t = e
                                    } else r = p.execCb(n, o, i, r);
                                    if (this.map.isDefine && void 0 === r && ((e = this.module) ? r = e.exports : this.usingExports && (r = this.exports)), t) return t.requireMap = this.map, t.requireModules = this.map.isDefine ? [this.map.id] : null, t.requireType = this.map.isDefine ? "define" : "require", j(this.error = t)
                                } else r = o;
                                this.exports = r, this.map.isDefine && !this.ignore && (m[n] = r, req.onResourceLoad && req.onResourceLoad(p, this.map, this.depMaps)), q(n), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function () {
                var l = this.map,
                    c = l.id,
                    e = E(l.prefix);
                this.depMaps.push(e), _(e, "defined", bind(this, function (e) {
                    var o, t, n, i = getOwn(g, this.map.id),
                        r = this.map.name,
                        a = this.map.parentMap ? this.map.parentMap.name : null,
                        s = p.makeRequire(l.parentMap, {enableBuildCallback: !0});
                    return this.map.unnormalized ? (e.normalize && (r = e.normalize(r, function (e) {
                        return w(e, a, !0)
                    }) || ""), _(t = E(l.prefix + "!" + r, this.map.parentMap), "defined", bind(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {enabled: !0, ignore: !0})
                    })), void ((n = getOwn(d, t.id)) && (this.depMaps.push(t), this.events.error && n.on("error", bind(this, function (e) {
                        this.emit("error", e)
                    })), n.enable()))) : i ? (this.map.url = p.nameToUrl(i), void this.load()) : ((o = bind(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {enabled: !0})
                    })).error = bind(this, function (e) {
                        this.inited = !0, (this.error = e).requireModules = [c], eachProp(d, function (e) {
                            0 === e.map.id.indexOf(c + "_unnormalized") && q(e.map.id)
                        }), j(e)
                    }), o.fromText = bind(this, function (e, t) {
                        var n = l.name,
                            i = E(n),
                            r = useInteractive;
                        t && (e = t), r && (useInteractive = !1), k(i), hasProp(v.config, c) && (v.config[n] = v.config[c]);
                        try {
                            req.exec(e)
                        } catch (e) {
                            return j(makeError("fromtexteval", "fromText eval for " + c + " failed: " + e, e, [c]))
                        }
                        r && (useInteractive = !0), this.depMaps.push(i), p.completeLoad(n), s([n], o)
                    }), void e.load(l.name, s, o, v))
                })), p.enable(e, this), this.pluginMaps[e.id] = e
            },
            enable: function () {
                (f[this.map.id] = this).enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function (e, t) {
                    var n, i, r;
                    if ("string" == typeof e) {
                        if (e = E(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, r = getOwn(c, e.id)) return void (this.depExports[t] = r(this));
                        this.depCount += 1, _(e, "defined", bind(this, function (e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback && _(e, "error", bind(this, this.errback))
                    }
                    n = e.id, i = d[n], hasProp(c, n) || !i || i.enabled || p.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function (e) {
                    var t = getOwn(d, e.id);
                    t && !t.enabled && p.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function (e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function (e, t) {
                each(this.events[e], function (e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, (p = {
            config: v,
            contextName: l,
            registry: d,
            defined: m,
            urlFetched: r,
            defQueue: h,
            Module: e,
            makeModuleMap: E,
            nextTick: req.nextTick,
            onError: j,
            configure: function (e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var n = v.shim,
                    i = {paths: !0, bundles: !0, config: !0, map: !0};
                eachProp(e, function (e, t) {
                    i[t] ? (v[t] || (v[t] = {}), mixin(v[t], e, !0, !0)) : v[t] = e
                }), e.bundles && eachProp(e.bundles, function (e, t) {
                    each(e, function (e) {
                        e !== t && (g[e] = t)
                    })
                }), e.shim && (eachProp(e.shim, function (e, t) {
                    isArray(e) && (e = {deps: e}), !e.exports && !e.init || e.exportsFn || (e.exportsFn = p.makeShimExports(e)), n[t] = e
                }), v.shim = n), e.packages && each(e.packages, function (e) {
                    var t;
                    t = (e = "string" == typeof e ? {name: e} : e).name, e.location && (v.paths[t] = e.location), v.pkgs[t] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(d, function (e, t) {
                    e.inited || e.map.unnormalized || (e.map = E(t))
                }), (e.deps || e.callback) && p.require(e.deps || [], e.callback)
            },
            makeShimExports: function (t) {
                return function () {
                    var e;
                    return t.init && (e = t.init.apply(global, arguments)), e || t.exports && getGlobal(t.exports)
                }
            },
            makeRequire: function (o, a) {
                function s(e, t, n) {
                    var i, r;
                    return a.enableBuildCallback && t && isFunction(t) && (t.__requireJsBuild = !0), "string" == typeof e ? isFunction(t) ? j(makeError("requireargs", "Invalid require call"), n) : o && hasProp(c, e) ? c[e](d[o.id]) : req.get ? req.get(p, e, o, s) : (i = E(e, o, !1, !0).id, hasProp(m, i) ? m[i] : j(makeError("notloaded", 'Module name "' + i + '" has not been loaded yet for context: ' + l + (o ? "" : ". Use require([])")))) : (A(), p.nextTick(function () {
                        A(), (r = k(E(null, o))).skipMap = a.skipMap, r.init(e, t, n, {enabled: !0}), N()
                    }), s)
                }

                return a = a || {}, mixin(s, {
                    isBrowser: isBrowser,
                    toUrl: function (e) {
                        var t, n = e.lastIndexOf("."),
                            i = e.split("/")[0];
                        return -1 !== n && (!("." === i || ".." === i) || 1 < n) && (t = e.substring(n, e.length), e = e.substring(0, n)), p.nameToUrl(w(e, o && o.id, !0), t, !0)
                    },
                    defined: function (e) {
                        return hasProp(m, E(e, o, !1, !0).id)
                    },
                    specified: function (e) {
                        return e = E(e, o, !1, !0).id, hasProp(m, e) || hasProp(d, e)
                    }
                }), o || (s.undef = function (n) {
                    S();
                    var e = E(n, o, !0),
                        t = getOwn(d, n);
                    x(n), delete m[n], delete r[e.url], delete i[n], eachReverse(h, function (e, t) {
                        e[0] === n && h.splice(t, 1)
                    }), t && (t.events.defined && (i[n] = t.events), q(n))
                }), s
            },
            enable: function (e) {
                getOwn(d, e.id) && k(e).enable()
            },
            completeLoad: function (e) {
                var t, n, i, r = getOwn(v.shim, e) || {},
                    o = r.exports;
                for (S(); h.length;) {
                    if (null === (n = h.shift())[0]) {
                        if (n[0] = e, t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    a(n)
                }
                if (i = getOwn(d, e), !t && !hasProp(m, e) && i && !i.inited) {
                    if (!(!v.enforceDefine || o && getGlobal(o))) return C(e) ? void 0 : j(makeError("nodefine", "No define call for " + e, null, [e]));
                    a([e, r.deps || [], r.exportsFn])
                }
                N()
            },
            nameToUrl: function (e, t, n) {
                var i, r, o, a, s, l, c = getOwn(v.pkgs, e);
                if (c && (e = c), l = getOwn(g, e)) return p.nameToUrl(l, t, n);
                if (req.jsExtRegExp.test(e)) a = e + (t || "");
                else {
                    for (i = v.paths, o = (r = e.split("/")).length; 0 < o; o -= 1)
                        if (s = getOwn(i, r.slice(0, o).join("/"))) {
                            isArray(s) && (s = s[0]), r.splice(0, o, s);
                            break
                        }
                    a = r.join("/"), a = ("/" === (a += t || (/^data\:|\?/.test(a) || n ? "" : ".js")).charAt(0) || a.match(/^[\w\+\.\-]+:/) ? "" : v.baseUrl) + a
                }
                return v.urlArgs ? a + (-1 === a.indexOf("?") ? "?" : "&") + v.urlArgs : a
            },
            load: function (e, t) {
                req.load(p, e, t)
            },
            execCb: function (e, t, n, i) {
                return t.apply(i, n)
            },
            onScriptLoad: function (e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = s(e);
                    p.completeLoad(t.id)
                }
            },
            onScriptError: function (e) {
                var t = s(e);
                if (!C(t.id)) return j(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        }).require = p.makeRequire(), p
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState || eachReverse(scripts(), function (e) {
            if ("interactive" === e.readyState) return interactiveScript = e
        }), interactiveScript
    }
}(this);
var FOP = {},
    wgtCommonPath = "js/",
    wgtlib = "js/";
require.config({
    baseUrl: window.isStaticedDemo ? "js/" : window.globalObj.getProtocol() + getStaticHost() + "/mobile-h5",
    waitSeconds: 8e3,
    shim: {bMap: {exports: "bMap"}},
    paths: {
        utils: wgtlib + "utils",
        wgt_util: wgtCommonPath + "wgt_util",
        wgt_etree: wgtCommonPath + "wgt_etree",
        wgt_etree_cross: wgtCommonPath + "wgt_etree_cross",
        wgt_lazyload: wgtCommonPath + "wgt_lazyload",
        wgt_readyload: wgtCommonPath + "wgt_readyload",
        "jquery.adFocus": wgtCommonPath + "jquery.adFocus",
        "jquery.carouselPic": wgtCommonPath + "jquery.carouselPic",
        "jquery.mobileAdFocus": wgtCommonPath + "jquery.mobileAdFocus",
        swiper: wgtCommonPath + "swiper",
        velocity: wgtCommonPath + "velocity",
        "jquery.overEllipsis": wgtCommonPath + "jquery.overEllipsis",
        "jquery.easyZoom": wgtCommonPath + "jquery.easyZoom",
        "jquery.dialogMgr": wgtCommonPath + "jquery.dialogMgr",
        "jquery.formValidate": wgtCommonPath + "jquery.formValidate",
        ckeditor: wgtCommonPath + "ckeditor/ckeditor",
        "jquery.datePicker": wgtCommonPath + "DatePicker-LQ/js/jquery.datePicker",
        "jquery.searchList": wgtCommonPath + "jqueryFn/jquery.searchList",
        third_baiduMap: window.globalObj.getProtocol() + "api.map.baidu.com/getscript?v=1.4",
        third_baiduMap_2: window.globalObj.getProtocol() + "api.map.baidu.com/getscript?v=2.0&ak=6lNan2DV0rYwYRwqOW6rDhLHMw0KddKK&services=&t=20170912191900",
        bMap: window.globalObj.getProtocol() + "api.map.baidu.com/api?v=2.0&ak=6lNan2DV0rYwYRwqOW6rDhLHMw0KddKK&s=1&services=&t=20170912191900",
        async: wgtCommonPath + "async",
        "jquery.baidumap": wgtCommonPath + "jquery.baidumap",
        "jquery.qrcode": wgtCommonPath + "jquery.qrcode",
        paging: wgtCommonPath + "paging",
        frontPaging: wgtCommonPath + "jquery.frontPaging",
        "jquery.fileDownload": wgtCommonPath + "jquery.fileDownload",
        dotdotdot: wgtCommonPath + "jquery.dotdotdot",
        tmpl: wgtCommonPath + "jquery.tmpl",
        etreeCrossApart: wgtCommonPath + "jquery.etreeCrossApart",
        etreeApart: wgtCommonPath + "jquery.etreeApart",
        ks3jssdk: wgtCommonPath + "ks3jssdk",
        "jquery.region": wgtCommonPath + "jquery.region",
        regionJsonData: wgtCommonPath + "regionJsonData",
        "jquery.marquee": wgtCommonPath + "jquery.marquee",
        "jquery.regionNew": wgtCommonPath + "jquery.regionNew",
        regionJsonDataNew: "js/common/metaCountryData",
        foreignRegionJsonData: "js/common/foreignMetaCountryData",
        afterLoad: wgtCommonPath + "afterLoad",
        md5: wgtCommonPath + "jquery.md5",
        xadFocus: wgtCommonPath + "xadFocus",
        xcategory: wgtCommonPath + "xcategory",
        "jquery.counter": wgtCommonPath + "jquery.counter",
        "jquery.message": wgtCommonPath + "jquery.message",
        "jquery.confirm": wgtCommonPath + "jquery.confirm",
        "jquery.mediaQuery": wgtCommonPath + "jquery.mediaQuery",
        "swiper4.4.2": wgtCommonPath + "swiper4.4.2",
        bootstrap: wgtCommonPath + "bootstrap",
        adFocus: "m/wgt/frontPlugin/jquery.adFocus",
        "jquery.share": wgtCommonPath + "iShare",
        audio: wgtCommonPath + "audio",
        clipboard: wgtCommonPath + "clipboard",
        "jquery.regionTreeSelect": wgtCommonPath + "jquery.regionTreeSelect",
        leftTime: wgtCommonPath + "leftTime",
        mobiscroll: "m/wgt/frontPlugin/mobiscroll",
        multipleSelect: wgtCommonPath + "multipleSelect/multipleSelect",
        laydate: wgtCommonPath + "laydate/laydate"
    }
}), window.crosswiseMalposition = function () {
    if (!window.isCWMP && isFrontEnv()) {
        window.isCWMP = !0;
        var t = $(),
            e = $(".pagebox").children("div[id^='w_wbox']").children(".w_wbox").children("div[id^='content_box']").children("div[id^='c_'],div[id^='w_']");
        t = t.add(e);
        var n = $("div[data-animation]", "div[id^='c_'],div[id^='w_']").filter("div[animated='true']");
        t = t.add(n);
        var i = $("div[id^='w_fbox']").children(".w_fbox").children("div").children("div[id^='content_box']").children("div[id^='c_'],div[id^='w_']").not("div[animated]").not("div[id*='ads_banner']");
        t = t.add(i);
        var r = $("div[id^='w_sfbox']>div>.e_fbox>.e_box>div[id^='content_box']").children("div[id^='c_'],div[id^='w_']").not("div[animated]").not("div[id*='ads_banner']");
        t = t.add(r);
        var o = $("div[id^='w_sfbox']>div>.e_fbox>div[id$='footer']").filter(".p_footer").filter("div[id^='content_box']").children("div[id^='c_'],div[id^='w_']").not("div[animated]").not("div[id*='ads_banner']");
        t = t.add(o);
        var a = $("div[id^='w_cbox']").children(".w_cbox").children("div").children("div[id^='content_box']").children("div[id^='c_'],div[id^='w_']").not("div[animated]");
        t = t.add(a);
        var s = $("div[id^='w_bbox']").children(".w_bbox").children("div[id^='content_box']").children("div[id^='c_'],div[id^='w_']");
        t = t.add(s), $(window).resize(function (e) {
            isFrontEnv() && h(t)
        });
        var l = 1920;
        if (1 <= $("div[id^='w_wbox'],div[id^='w_bbox']").length || 1 <= $("div[id^='w_fbox'],div[id^='w_sfbox']").length || 1 <= $("div[id^='w_cbox']").length) {
            var c = $("div[id^='w_wbox'],div[id^='w_bbox']").eq(0),
                u = $("div[id^='w_cbox']").eq(0),
                d = $("div[id^='w_fbox'],div[id^='w_sfbox']").eq(0),
                f = 1 <= c.length ? c : 1 <= u.length ? u : d,
                p = f[0].style.width;
            f[0].style.width = null, (l = f.outerWidth(!0) || $("div[id^='w_fbox']").outerWidth(!0) || $("div[id^='w_sfbox']").outerWidth(!0)) < f.width() && (l = f.width()), f.css("width", p)
        }
        h(t), t.filter("div[data-animation]", "div[id^='c_'],div[id^='w_']").on("FR_ANIMATED", function () {
            var e, t = $(this);
            setTimeout((e = t, function () {
                h(e)
            }), 500)
        })
    }

    function h(o) {
        document.documentElement.clientWidth;
        o.each(function (e) {
            var t = o.eq(e);
            if (t.closest("div[id^='w_wbox'],div[id^='w_bbox']").length < 1 && t.closest("div[id^='w_fbox'],div[id^='w_sfbox']").length < 1 && t.closest("div[id^='w_cbox']").length < 1) return !0;
            var n = document.documentElement.clientWidth;
            null == t.attr("originaled") && (t.attr("compOrinalWidth", t.outerWidth(!0)), t.attr("compOrinalLeft", parseInt(t.css("left"))), t.attr("originaled", "true"));
            var i = (l - n) / 2,
                r = (null == t.attr("compOrinalLeft") ? parseInt(t.css("left")) || t.offset().left : parseInt(t.attr("compOrinalLeft"))) - i;
            r = Math.floor(r), t.css("left", r)
        })
    }
};
var readyFun = function () {
    _isLoaded = !0, jQuery.fn.__ceverPC || console.info("注意：禁止单独引用jquery"), 2 <= $(".main").length && console.info("注意：禁止使用类名 main"), 0 == $(".main").length && console.info("注意：页面没有类名 main"), 2 <= $(".pagebox").length && console.info("注意：禁止使用类名 pagebox"), 0 == $(".pagebox").length && console.info("注意：页面没有类名 pagebox"), require(["wgt_readyload"], function (n) {
        n.ready(function (e) {
            var t = $("div[id^='c_']");
            isFrontEnv() && t.css({overflow: "visible"}), n.removeCache(e), n.setCompPostion(), $(window).trigger("resize.fullPageResize"), n.lazyImg({defObj: "body"}), $("body").trigger("FR_LOADED"), n.ainimate({defObj: "body"}), window.compLoaded = !0
        })
    }), $("div[id^='w_'],div[id^='c_']").on("scroll", function (e) {
        require(["wgt_readyload"], function (t) {
            t.ready(function (e) {
                t.lazyImg({defObj: "body"})
            })
        })
    }), $("body").on("ND_RefreshComp", function (e) {
        require(["wgt_readyload"], function (t) {
            t.ready(function (e) {
                t.lazyImg({defObj: "body"})
            })
        })
    }), $("body").on("ND_RefreshCompNew", function (e, t) {
        require(["wgt_readyload"], function (e) {
            e.ready(function () {
                e.lazyImg(t)
            })
        })
    }), $("body").on("DESIGN_TRANK", function (e, n) {
        require(["wgt_readyload"], function (t) {
            t.ready(function (e) {
                t.removeCache(e), t.setCompPostion(), t.lazyImg({defObj: "body"}), t.ainimate(n)
            })
        })
    }), $("a[href^='#'][target='_self']").click(function (e) {
        var t = $(this).attr("href");
        if (-1 != t.indexOf("$$1")) {
            var n = t.substring(0, t.length - 3);
            $("body").animate({scrollTop: $(n).offset().top}), e.preventDefault()
        }
    });
    var e = window.location.hostname;
    sendLevel.test(e) || isStaticedDemo || (injectScript(document, [], function () {
    }), "true" != isxinnet && injectScript(document, [], function () {
        try {
            VisitTrack && VisitTrack.visittrack_log && VisitTrack.visittrack_log(visittrack_siteId, visittrack_url)
        } catch (e) {
        }
    })), window.isStaticedDemo || require(["afterLoad"], function (e) {
        e.init()
    })
};

function getCookie(e) {
    var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
    return (t = document.cookie.match(n)) ? unescape(t[2]) : null
}

function setCookie(e, t, n, i) {
    var r = new Date;
    r.setDate(r.getDate() + n), document.cookie = e + "=" + escape(t) + (null == n ? "" : ";expires=" + r.toGMTString()) + (i ? ";path=" + i : "")
}

function mobileFoward(e) {
    window.location.href = e
}

function getSettingMobileUrl() {
    for (var e = document.getElementsByTagName("link"), t = 0; t < e.length; t++) {
        var n = e[t];
        if ("alternate" == n.rel) return "" == n.href ? null : n.href
    }
    return null
}

function rand(e) {
    var t = "0123456789abcdef",
        n = "",
        i = 0;
    for (e = e || 32; i < e; i++) n += t.charAt(Math.ceil(1e8 * Math.random()) % t.length);
    return n
}

function writeBFP() {
    getCookie("bfp") || setCookie("bfp", tenant.id + "_xgw_" + rand(), 360)
}

if (window.addEventListener ? window.addEventListener("load", readyFun) : window.attachEvent && window.attachEvent("onload", readyFun), function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (h, e) {
    var d = [],
        u = d.slice,
        m = d.concat,
        s = d.push,
        r = d.indexOf,
        n = {},
        t = n.toString,
        g = n.hasOwnProperty,
        v = {},
        T = function (e, t) {
            return new T.fn.init(e, t)
        },
        i = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        a = /-([\da-z])/gi,
        l = function (e, t) {
            return t.toUpperCase()
        };

    function c(e) {
        var t = e.length,
            n = T.type(e);
        return "function" !== n && !T.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }

    T.fn = T.prototype = {
        jquery: "1.11.1",
        __ceverPC: !0,
        constructor: T,
        selector: "",
        length: 0,
        toArray: function () {
            return u.call(this)
        },
        get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
        },
        pushStack: function (e) {
            var t = T.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return T.each(this, e, t)
        },
        map: function (n) {
            return this.pushStack(T.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(u.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: d.sort,
        splice: d.splice
    }, T.extend = T.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || T.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (r = arguments[s]))
                for (i in r) e = a[i], a !== (n = r[i]) && (c && n && (T.isPlainObject(n) || (t = T.isArray(n))) ? (o = t ? (t = !1, e && T.isArray(e) ? e : []) : e && T.isPlainObject(e) ? e : {}, a[i] = T.extend(c, o, n)) : void 0 !== n && (a[i] = n));
        return a
    }, T.extend({
        expando: "jQuery" + ("1.11.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {
        },
        isFunction: function (e) {
            return "function" === T.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === T.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !T.isArray(e) && 0 <= e - parseFloat(e)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== T.type(e) || e.nodeType || T.isWindow(e)) return !1;
            try {
                if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (v.ownLast)
                for (t in e) return g.call(e, t);
            for (t in e) ;
            return void 0 === t || g.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[t.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            e && T.trim(e) && (h.execScript || function (e) {
                h.eval.call(h, e)
            })(e)
        },
        camelCase: function (e) {
            return e.replace(o, "ms-").replace(a, l)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var i = 0,
                r = e.length,
                o = c(e);
            if (n) {
                if (o)
                    for (; i < r && !1 !== t.apply(e[i], n); i++) ;
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n)) break
            } else if (o)
                for (; i < r && !1 !== t.call(e[i], i, e[i]); i++) ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(i, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (c(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var i;
            if (t) {
                if (r) return r.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
            if (n != n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        },
        map: function (e, t, n) {
            var i, r = 0,
                o = e.length,
                a = [];
            if (c(e))
                for (; r < o; r++) null != (i = t(e[r], r, n)) && a.push(i);
            else
                for (r in e) null != (i = t(e[r], r, n)) && a.push(i);
            return m.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, r;
            if ("string" == typeof t && (r = e[t], t = e, e = r), T.isFunction(e)) return n = u.call(arguments, 2), (i = function () {
                return e.apply(t || this, n.concat(u.call(arguments)))
            }).guid = e.guid = e.guid || T.guid++, i
        },
        now: function () {
            return +new Date
        },
        support: v
    }), T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var f = function (n) {
        var e, h, w, o, i, m, d, g, x, c, u, v, C, r, y, b, a, s, T, E = "sizzle" + -new Date,
            k = n.document,
            _ = 0,
            f = 0,
            l = re(),
            p = re(),
            j = re(),
            S = function (e, t) {
                return e === t && (u = !0), 0
            },
            q = "undefined",
            N = {}.hasOwnProperty,
            t = [],
            A = t.pop,
            $ = t.push,
            D = t.push,
            P = t.slice,
            L = t.indexOf || function (e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = H.replace("w", "w#"),
            R = "\\[" + M + "*(" + H + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + M + "*\\]",
            B = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            W = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            I = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(B),
            G = new RegExp("^" + F + "$"),
            V = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            ee = /'|\\/g,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            D.apply(t = P.call(k.childNodes), k.childNodes), t[k.childNodes.length].nodeType
        } catch (e) {
            D = {
                apply: t.length ? function (e, t) {
                    $.apply(e, P.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, n, i) {
            var r, o, a, s, l, c, u, d, f, p;
            if ((t ? t.ownerDocument || t : k) !== C && v(t), n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = (t = t || C).nodeType) && 9 !== s) return [];
            if (y && !i) {
                if (r = K.exec(e))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && T(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (r[2]) return D.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = r[3]) && h.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(a)), n
                    }
                if (h.qsa && (!b || !b.test(e))) {
                    if (d = u = E, f = t, p = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = m(e), (u = t.getAttribute("id")) ? d = u.replace(ee, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + he(c[l]);
                        f = Z.test(e) && fe(t.parentNode) || t, p = c.join(",")
                    }
                    if (p) try {
                        return D.apply(n, f.querySelectorAll(p)), n
                    } catch (e) {
                    } finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(W, "$1"), t, n, i)
        }

        function re() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function oe(e) {
            return e[E] = !0, e
        }

        function ae(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function se(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) w.attrHandle[n[i]] = t
        }

        function le(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ue(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function de(a) {
            return oe(function (o) {
                return o = +o, oe(function (e, t) {
                    for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function fe(e) {
            return e && typeof e.getElementsByTagName !== q && e
        }

        for (e in h = ie.support = {}, i = ie.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, v = ie.setDocument = function (e) {
            var t, l = e ? e.ownerDocument || e : k,
                n = l.defaultView;
            return l !== C && 9 === l.nodeType && l.documentElement ? (r = (C = l).documentElement, y = !i(l), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function () {
                v()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                v()
            })), h.attributes = ae(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), h.getElementsByTagName = ae(function (e) {
                return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
            }), h.getElementsByClassName = Y.test(l.getElementsByClassName) && ae(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), h.getById = ae(function (e) {
                return r.appendChild(e).id = E, !l.getElementsByName || !l.getElementsByName(E).length
            }), h.getById ? (w.find.ID = function (e, t) {
                if (typeof t.getElementById !== q && y) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, w.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function (e) {
                var n = e.replace(te, ne);
                return function (e) {
                    var t = typeof e.getAttributeNode !== q && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }), w.find.TAG = h.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== q) return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                return i
            }, w.find.CLASS = h.getElementsByClassName && function (e, t) {
                if (typeof t.getElementsByClassName !== q && y) return t.getElementsByClassName(e)
            }, a = [], b = [], (h.qsa = Y.test(l.querySelectorAll)) && (ae(function (e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && b.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || b.push("\\[" + M + "*(?:value|" + O + ")"), e.querySelectorAll(":checked").length || b.push(":checked")
            }), ae(function (e) {
                var t = l.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && b.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || b.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), b.push(",.*:")
            })), (h.matchesSelector = Y.test(s = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && ae(function (e) {
                h.disconnectedMatch = s.call(e, "div"), s.call(e, "[s!='']:x"), a.push("!=", B)
            }), b = b.length && new RegExp(b.join("|")), a = a.length && new RegExp(a.join("|")), t = Y.test(r.compareDocumentPosition), T = t || Y.test(r.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, S = t ? function (e, t) {
                if (e === t) return u = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === k && T(k, e) ? -1 : t === l || t.ownerDocument === k && T(k, t) ? 1 : c ? L.call(c, e) - L.call(c, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return u = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!r || !o) return e === l ? -1 : t === l ? 1 : r ? -1 : o ? 1 : c ? L.call(c, e) - L.call(c, t) : 0;
                if (r === o) return le(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[i] === s[i];) i++;
                return i ? le(a[i], s[i]) : a[i] === k ? -1 : s[i] === k ? 1 : 0
            }, l) : C
        }, ie.matches = function (e, t) {
            return ie(e, null, null, t)
        }, ie.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== C && v(e), t = t.replace(U, "='$1']"), h.matchesSelector && y && (!a || !a.test(t)) && (!b || !b.test(t))) try {
                var n = s.call(e, t);
                if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return 0 < ie(t, C, null, [e]).length
        }, ie.contains = function (e, t) {
            return (e.ownerDocument || e) !== C && v(e), T(e, t)
        }, ie.attr = function (e, t) {
            (e.ownerDocument || e) !== C && v(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && N.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0;
            return void 0 !== i ? i : h.attributes || !y ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, ie.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ie.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (u = !h.detectDuplicates, c = !h.sortStable && e.slice(0), e.sort(S), u) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return c = null, e
        }, o = ie.getText = function (e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += o(t);
            return n
        }, (w = ie.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = l[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && l(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== q && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (n, i, r) {
                    return function (e) {
                        var t = ie.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (p, e, t, h, m) {
                    var g = "nth" !== p.slice(0, 3),
                        v = "last" !== p.slice(-4),
                        y = "of-type" === e;
                    return 1 === h && 0 === m ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var i, r, o, a, s, l, c = g !== v ? "nextSibling" : "previousSibling",
                            u = e.parentNode,
                            d = y && e.nodeName.toLowerCase(),
                            f = !n && !y;
                        if (u) {
                            if (g) {
                                for (; c;) {
                                    for (o = e; o = o[c];)
                                        if (y ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
                                    l = c = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? u.firstChild : u.lastChild], v && f) {
                                for (s = (i = (r = u[E] || (u[E] = {}))[p] || [])[0] === _ && i[1], a = i[0] === _ && i[2], o = s && u.childNodes[s]; o = ++s && o && o[c] || (a = s = 0) || l.pop();)
                                    if (1 === o.nodeType && ++a && o === e) {
                                        r[p] = [_, s, a];
                                        break
                                    }
                            } else if (f && (i = (e[E] || (e[E] = {}))[p]) && i[0] === _) a = i[1];
                            else
                                for (;
                                    (o = ++s && o && o[c] || (a = s = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++a || (f && ((o[E] || (o[E] = {}))[p] = [_, a]), o !== e));) ;
                            return (a -= m) === h || a % h == 0 && 0 <= a / h
                        }
                    }
                },
                PSEUDO: function (e, o) {
                    var t, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                    return a[E] ? a(o) : 1 < a.length ? (t = [e, e, "", o], w.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
                        for (var n, i = a(e, o), r = i.length; r--;) e[n = L.call(e, i[r])] = !(t[n] = i[r])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: oe(function (e) {
                    var i = [],
                        r = [],
                        s = d(e.replace(W, "$1"));
                    return s[E] ? oe(function (e, t, n, i) {
                        for (var r, o = s(e, null, i, []), a = e.length; a--;) (r = o[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, t, n) {
                        return i[0] = e, s(i, null, n, r), !r.pop()
                    }
                }),
                has: oe(function (t) {
                    return function (e) {
                        return 0 < ie(t, e).length
                    }
                }),
                contains: oe(function (t) {
                    return function (e) {
                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                    }
                }),
                lang: oe(function (n) {
                    return G.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                        function (e) {
                            var t;
                            do {
                                if (t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function (e) {
                    return e === r
                },
                focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return !1 === e.disabled
                },
                disabled: function (e) {
                    return !0 === e.disabled
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !w.pseudos.empty(e)
                },
                header: function (e) {
                    return Q.test(e.nodeName)
                },
                input: function (e) {
                    return J.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: de(function () {
                    return [0]
                }),
                last: de(function (e, t) {
                    return [t - 1]
                }),
                eq: de(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: de(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: de(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: de(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                    return e
                }),
                gt: de(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[e] = ce(e);
        for (e in {submit: !0, reset: !0}) w.pseudos[e] = ue(e);

        function pe() {
        }

        function he(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function me(a, e, t) {
            var s = e.dir,
                l = t && "parentNode" === s,
                c = f++;
            return e.first ? function (e, t, n) {
                for (; e = e[s];)
                    if (1 === e.nodeType || l) return a(e, t, n)
            } : function (e, t, n) {
                var i, r, o = [_, c];
                if (n) {
                    for (; e = e[s];)
                        if ((1 === e.nodeType || l) && a(e, t, n)) return !0
                } else
                    for (; e = e[s];)
                        if (1 === e.nodeType || l) {
                            if ((i = (r = e[E] || (e[E] = {}))[s]) && i[0] === _ && i[1] === c) return o[2] = i[2];
                            if ((r[s] = o)[2] = a(e, t, n)) return !0
                        }
            }
        }

        function ge(r) {
            return 1 < r.length ? function (e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function ve(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++) (o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function ye(p, h, m, g, v, e) {
            return g && !g[E] && (g = ye(g)), v && !v[E] && (v = ye(v, e)), oe(function (e, t, n, i) {
                var r, o, a, s = [],
                    l = [],
                    c = t.length,
                    u = e || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ie(e, t[i], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    d = !p || !e && h ? u : ve(u, s, p, n, i),
                    f = m ? v || (e ? p : c || g) ? [] : t : d;
                if (m && m(d, f, n, i), g)
                    for (r = ve(f, l), g(r, [], n, i), o = r.length; o--;) (a = r[o]) && (f[l[o]] = !(d[l[o]] = a));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (r = [], o = f.length; o--;) (a = f[o]) && r.push(d[o] = a);
                            v(null, f = [], r, i)
                        }
                        for (o = f.length; o--;) (a = f[o]) && -1 < (r = v ? L.call(e, a) : s[o]) && (e[r] = !(t[r] = a))
                    }
                } else f = ve(f === t ? f.splice(c, f.length) : f), v ? v(null, t, f, i) : D.apply(t, f)
            })
        }

        function be(e) {
            for (var i, t, n, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = me(function (e) {
                return e === i
            }, a, !0), c = me(function (e) {
                return -1 < L.call(i, e)
            }, a, !0), u = [function (e, t, n) {
                return !o && (n || t !== x) || ((i = t).nodeType ? l(e, t, n) : c(e, t, n))
            }]; s < r; s++)
                if (t = w.relative[e[s].type]) u = [me(ge(u), t)];
                else {
                    if ((t = w.filter[e[s].type].apply(null, e[s].matches))[E]) {
                        for (n = ++s; n < r && !w.relative[e[n].type]; n++) ;
                        return ye(1 < s && ge(u), 1 < s && he(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(W, "$1"), t, s < n && be(e.slice(s, n)), n < r && be(e = e.slice(n)), n < r && he(e))
                    }
                    u.push(t)
                }
            return ge(u)
        }

        return pe.prototype = w.filters = w.pseudos, w.setFilters = new pe, m = ie.tokenize = function (e, t) {
            var n, i, r, o, a, s, l, c = p[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, s = [], l = w.preFilter; a;) {
                for (o in n && !(i = I.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = z.exec(a)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(W, " ")
                }), a = a.slice(n.length)), w.filter) !(i = V[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ie.error(e) : p(e, s).slice(0)
        }, d = ie.compile = function (e, t) {
            var n, g, v, y, b, i, r = [],
                o = [],
                a = j[e + " "];
            if (!a) {
                for (t || (t = m(e)), n = t.length; n--;) (a = be(t[n]))[E] ? r.push(a) : o.push(a);
                (a = j(e, (g = o, y = 0 < (v = r).length, b = 0 < g.length, i = function (e, t, n, i, r) {
                    var o, a, s, l = 0,
                        c = "0",
                        u = e && [],
                        d = [],
                        f = x,
                        p = e || b && w.find.TAG("*", r),
                        h = _ += null == f ? 1 : Math.random() || .1,
                        m = p.length;
                    for (r && (x = t !== C && t); c !== m && null != (o = p[c]); c++) {
                        if (b && o) {
                            for (a = 0; s = g[a++];)
                                if (s(o, t, n)) {
                                    i.push(o);
                                    break
                                }
                            r && (_ = h)
                        }
                        y && ((o = !s && o) && l--, e && u.push(o))
                    }
                    if (l += c, y && c !== l) {
                        for (a = 0; s = v[a++];) s(u, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = A.call(i));
                            d = ve(d)
                        }
                        D.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && ie.uniqueSort(i)
                    }
                    return r && (_ = h, x = f), u
                }, y ? oe(i) : i))).selector = e
            }
            return a
        }, g = ie.select = function (e, t, n, i) {
            var r, o, a, s, l, c = "function" == typeof e && e,
                u = !i && m(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && h.getById && 9 === t.nodeType && y && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = V.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);)
                    if ((l = w.find[s]) && (i = l(a.matches[0].replace(te, ne), Z.test(o[0].type) && fe(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && he(o))) return D.apply(n, i), n;
                        break
                    }
            }
            return (c || d(e, u))(i, t, !y, n, Z.test(e) && fe(t.parentNode) || t), n
        }, h.sortStable = E.split("").sort(S).join("") === E, h.detectDuplicates = !!u, v(), h.sortDetached = ae(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
        }), ae(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || se("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && ae(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || se("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ae(function (e) {
            return null == e.getAttribute("disabled")
        }) || se(O, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ie
    }(h);
    T.find = f, T.expr = f.selectors, T.expr[":"] = T.expr.pseudos, T.unique = f.uniqueSort, T.text = f.getText, T.isXMLDoc = f.isXML, T.contains = f.contains;
    var p = T.expr.match.needsContext,
        y = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        b = /^.[^:#\[\.,]*$/;

    function w(e, n, i) {
        if (T.isFunction(n)) return T.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return T.grep(e, function (e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (b.test(n)) return T.filter(n, e, i);
            n = T.filter(n, e)
        }
        return T.grep(e, function (e) {
            return 0 <= T.inArray(e, n) !== i
        })
    }

    T.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, T.fn.extend({
        find: function (e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (T.contains(i[t], this)) return !0
            }));
            for (t = 0; t < r; t++) T.find(e, i[t], n);
            return (n = this.pushStack(1 < r ? T.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(w(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(w(this, e || [], !0))
        },
        is: function (e) {
            return !!w(this, "string" == typeof e && p.test(e) ? T(e) : e || [], !1).length
        }
    });
    var x, C = h.document,
        E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (T.fn.init = function (e, t) {
        var n, i;
        if (!e) return this;
        if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : T.isFunction(e) ? void 0 !== x.ready ? x.ready(e) : e(T) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), T.makeArray(e, this));
        if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : E.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || x).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), y.test(n[1]) && T.isPlainObject(t))
                for (n in t) T.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        if ((i = C.getElementById(n[2])) && i.parentNode) {
            if (i.id !== n[2]) return x.find(e);
            this.length = 1, this[0] = i
        }
        return this.context = C, this.selector = e, this
    }).prototype = T.fn, x = T(C);
    var k = /^(?:parents|prev(?:Until|All))/,
        _ = {children: !0, contents: !0, next: !0, prev: !0};

    function j(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    T.extend({
        dir: function (e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !T(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), T.fn.extend({
        has: function (e) {
            var t, n = T(e, this),
                i = n.length;
            return this.filter(function () {
                for (t = 0; t < i; t++)
                    if (T.contains(this, n[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], a = p.test(e) || "string" != typeof e ? T(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(1 < o.length ? T.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? T.inArray(this[0], T(e)) : T.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(T.unique(T.merge(this.get(), T(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), T.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return T.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return T.dir(e, "parentNode", n)
        }, next: function (e) {
            return j(e, "nextSibling")
        }, prev: function (e) {
            return j(e, "previousSibling")
        }, nextAll: function (e) {
            return T.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return T.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return T.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return T.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return T.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return T.sibling(e.firstChild)
        }, contents: function (e) {
            return T.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : T.merge([], e.childNodes)
        }
    }, function (i, r) {
        T.fn[i] = function (e, t) {
            var n = T.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (_[i] || (n = T.unique(n)), k.test(i) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var S, q = /\S+/g,
        N = {};

    function A() {
        C.addEventListener ? (C.removeEventListener("DOMContentLoaded", $, !1), h.removeEventListener("load", $, !1)) : (C.detachEvent("onreadystatechange", $), h.detachEvent("onload", $))
    }

    function $() {
        (C.addEventListener || "load" === event.type || "complete" === C.readyState) && (A(), T.ready())
    }

    T.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? N[r] || (n = N[e = r] = {}, T.each(e.match(q) || [], function (e, t) {
            n[t] = !0
        }), n) : T.extend({}, r);
        var i, t, o, a, s, l, c = [],
            u = !r.once && [],
            d = function (e) {
                for (t = r.memory && e, o = !0, s = l || 0, l = 0, a = c.length, i = !0; c && s < a; s++)
                    if (!1 === c[s].apply(e[0], e[1]) && r.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, c && (u ? u.length && d(u.shift()) : t ? c = [] : f.disable())
            },
            f = {
                add: function () {
                    if (c) {
                        var e = c.length;
                        !function i(e) {
                            T.each(e, function (e, t) {
                                var n = T.type(t);
                                "function" === n ? r.unique && f.has(t) || c.push(t) : t && t.length && "string" !== n && i(t)
                            })
                        }(arguments), i ? a = c.length : t && (l = e, d(t))
                    }
                    return this
                }, remove: function () {
                    return c && T.each(arguments, function (e, t) {
                        for (var n; -1 < (n = T.inArray(t, c, n));) c.splice(n, 1), i && (n <= a && a--, n <= s && s--)
                    }), this
                }, has: function (e) {
                    return e ? -1 < T.inArray(e, c) : !(!c || !c.length)
                }, empty: function () {
                    return c = [], a = 0, this
                }, disable: function () {
                    return c = u = t = void 0, this
                }, disabled: function () {
                    return !c
                }, lock: function () {
                    return u = void 0, t || f.disable(), this
                }, locked: function () {
                    return !u
                }, fireWith: function (e, t) {
                    return !c || o && !u || (t = [e, (t = t || []).slice ? t.slice() : t], i ? u.push(t) : d(t)), this
                }, fire: function () {
                    return f.fireWith(this, arguments), this
                }, fired: function () {
                    return !!o
                }
            };
        return f
    }, T.extend({
        Deferred: function (e) {
            var o = [
                    ["resolve", "done", T.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", T.Callbacks("memory")]
                ],
                r = "pending",
                a = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var r = arguments;
                        return T.Deferred(function (i) {
                            T.each(o, function (e, t) {
                                var n = T.isFunction(r[e]) && r[e];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && T.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? T.extend(e, a) : a
                    }
                },
                s = {};
            return a.pipe = a.then, T.each(o, function (e, t) {
                var n = t[2],
                    i = t[3];
                a[t[1]] = n.add, i && n.add(function () {
                    r = i
                }, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? a : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
            var r, t, n, i = 0,
                o = u.call(arguments),
                a = o.length,
                s = 1 !== a || e && T.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : T.Deferred(),
                c = function (t, n, i) {
                    return function (e) {
                        n[t] = this, i[t] = 1 < arguments.length ? u.call(arguments) : e, i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (1 < a)
                for (r = new Array(a), t = new Array(a), n = new Array(a); i < a; i++) o[i] && T.isFunction(o[i].promise) ? o[i].promise().done(c(i, n, o)).fail(l.reject).progress(c(i, t, r)) : --s;
            return s || l.resolveWith(n, o), l.promise()
        }
    }), T.fn.ready = function (e) {
        return T.ready.promise().done(e), this
    }, T.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? T.readyWait++ : T.ready(!0)
        },
        ready: function (e) {
            if (!0 === e ? !--T.readyWait : !T.isReady) {
                if (!C.body) return setTimeout(T.ready);
                (T.isReady = !0) !== e && 0 < --T.readyWait || (S.resolveWith(C, [T]), T.fn.triggerHandler && (T(C).triggerHandler("ready"), T(C).off("ready")))
            }
        }
    }), T.ready.promise = function (e) {
        if (!S)
            if (S = T.Deferred(), "complete" === C.readyState) setTimeout(T.ready);
            else if (C.addEventListener) C.addEventListener("DOMContentLoaded", $, !1), h.addEventListener("load", $, !1);
            else {
                C.attachEvent("onreadystatechange", $), h.attachEvent("onload", $);
                var n = !1;
                try {
                    n = null == h.frameElement && C.documentElement
                } catch (e) {
                }
                n && n.doScroll && function t() {
                    if (!T.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        A(), T.ready()
                    }
                }()
            }
        return S.promise(e)
    };
    var D, P = "undefined";
    for (D in T(v)) break;
    v.ownLast = "0" !== D, v.inlineBlockNeedsLayout = !1, T(function () {
        var e, t, n, i;
        (n = C.getElementsByTagName("body")[0]) && n.style && (t = C.createElement("div"), (i = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== P && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", v.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
    }),
        function () {
            var e = C.createElement("div");
            if (null == v.deleteExpando) {
                v.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    v.deleteExpando = !1
                }
            }
            e = null
        }(), T.acceptData = function (e) {
        var t = T.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    };
    var L = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function M(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(O, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : L.test(n) ? T.parseJSON(n) : n)
                } catch (e) {
                }
                T.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function H(e) {
        var t;
        for (t in e)
            if (("data" !== t || !T.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function F(e, t, n, i) {
        if (T.acceptData(e)) {
            var r, o, a = T.expando,
                s = e.nodeType,
                l = s ? T.cache : e,
                c = s ? e[a] : e[a] && a;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = d.pop() || T.guid++ : a), l[c] || (l[c] = s ? {} : {toJSON: T.noop}), "object" != typeof t && "function" != typeof t || (i ? l[c] = T.extend(l[c], t) : l[c].data = T.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[T.camelCase(t)] = n), "string" == typeof t ? null == (r = o[t]) && (r = o[T.camelCase(t)]) : r = o, r
        }
    }

    function R(e, t, n) {
        if (T.acceptData(e)) {
            var i, r, o = e.nodeType,
                a = o ? T.cache : e,
                s = o ? e[T.expando] : T.expando;
            if (a[s]) {
                if (t && (i = n ? a[s] : a[s].data)) {
                    r = (t = T.isArray(t) ? t.concat(T.map(t, T.camelCase)) : t in i ? [t] : (t = T.camelCase(t)) in i ? [t] : t.split(" ")).length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !H(i) : !T.isEmptyObject(i)) return
                }
                (n || (delete a[s].data, H(a[s]))) && (o ? T.cleanData([e], !0) : v.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    T.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return !!(e = e.nodeType ? T.cache[e[T.expando]] : e[T.expando]) && !H(e)
        },
        data: function (e, t, n) {
            return F(e, t, n)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, n) {
            return F(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        }
    }), T.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 !== e) return "object" == typeof e ? this.each(function () {
                T.data(this, e)
            }) : 1 < arguments.length ? this.each(function () {
                T.data(this, e, t)
            }) : o ? M(o, e, T.data(o, e)) : void 0;
            if (this.length && (r = T.data(o), 1 === o.nodeType && !T._data(o, "parsedAttrs"))) {
                for (n = a.length; n--;) a[n] && 0 === (i = a[n].name).indexOf("data-") && M(o, i = T.camelCase(i.slice(5)), r[i]);
                T._data(o, "parsedAttrs", !0)
            }
            return r
        },
        removeData: function (e) {
            return this.each(function () {
                T.removeData(this, e)
            })
        }
    }), T.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = T._data(e, t), n && (!i || T.isArray(n) ? i = T._data(e, t, T.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = T._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                T.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return T._data(e, n) || T._data(e, n, {
                empty: T.Callbacks("once memory").add(function () {
                    T._removeData(e, t + "queue"), T._removeData(e, n)
                })
            })
        }
    }), T.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = T.queue(this, t, n);
                T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                T.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                r = T.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = T._data(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        W = ["Top", "Right", "Bottom", "Left"],
        I = function (e, t) {
            return e = t || e, "none" === T.css(e, "display") || !T.contains(e.ownerDocument, e)
        },
        z = T.access = function (e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === T.type(n))
                for (s in r = !0, n) T.access(e, t, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0, T.isFunction(i) || (a = !0), c && (t = a ? (t.call(e, i), null) : (c = t, function (e, t, n) {
                return c.call(T(e), n)
            })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        U = /^(?:checkbox|radio)$/i;
    !function () {
        var e = C.createElement("input"),
            t = C.createElement("div"),
            n = C.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", v.leadingWhitespace = 3 === t.firstChild.nodeType, v.tbody = !t.getElementsByTagName("tbody").length, v.htmlSerialize = !!t.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), v.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
            v.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == v.deleteExpando) {
            v.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                v.deleteExpando = !1
            }
        }
    }(),
        function () {
            var e, t, n = C.createElement("div");
            for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e, (v[e + "Bubbles"] = t in h) || (n.setAttribute(t, "t"), v[e + "Bubbles"] = !1 === n.attributes[t].expando);
            n = null
        }();
    var X = /^(?:input|select|textarea)$/i,
        G = /^key/,
        V = /^(?:mouse|pointer|contextmenu)|click/,
        J = /^(?:focusinfocus|focusoutblur)$/,
        Q = /^([^.]*)(?:\.(.+)|)$/;

    function Y() {
        return !0
    }

    function K() {
        return !1
    }

    function Z() {
        try {
            return C.activeElement
        } catch (e) {
        }
    }

    function ee(e) {
        var t = te.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    T.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, p, h, m, g = T._data(e);
            if (g) {
                for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = T.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || ((u = g.handle = function (e) {
                    return typeof T === P || e && T.event.triggered === e.type ? void 0 : T.event.dispatch.apply(u.elem, arguments)
                }).elem = e), s = (t = (t || "").match(q) || [""]).length; s--;) p = m = (o = Q.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), p && (c = T.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = T.event.special[p] || {}, d = T.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && T.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, l), (f = a[p]) || ((f = a[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, h, u) || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), T.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, p, h, m, g = T.hasData(e) && T._data(e);
            if (g && (u = g.events)) {
                for (c = (t = (t || "").match(q) || [""]).length; c--;)
                    if (p = m = (s = Q.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = T.event.special[p] || {}, f = u[p = (i ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || T.removeEvent(e, p, g.handle), delete u[p])
                    } else
                        for (p in u) T.event.remove(e, p + t[c], n, i, !0);
                T.isEmptyObject(u) && (delete g.handle, T._removeData(e, "events"))
            }
        },
        trigger: function (e, t, n, i) {
            var r, o, a, s, l, c, u, d = [n || C],
                f = g.call(e, "type") ? e.type : e,
                p = g.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !J.test(f + T.event.triggered) && (0 <= f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), o = f.indexOf(":") < 0 && "on" + f, (e = e[T.expando] ? e : new T.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), l = T.event.special[f] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !T.isWindow(n)) {
                    for (s = l.delegateType || f, J.test(s + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), c = a;
                    c === (n.ownerDocument || C) && d.push(c.defaultView || c.parentWindow || h)
                }
                for (u = 0;
                     (a = d[u++]) && !e.isPropagationStopped();) e.type = 1 < u ? s : l.bindType || f, (r = (T._data(a, "events") || {})[e.type] && T._data(a, "handle")) && r.apply(a, t), (r = o && a[o]) && r.apply && T.acceptData(a) && (e.result = r.apply(a, t), !1 === e.result && e.preventDefault());
                if (e.type = f, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && T.acceptData(n) && o && n[f] && !T.isWindow(n)) {
                    (c = n[o]) && (n[o] = null), T.event.triggered = f;
                    try {
                        n[f]()
                    } catch (e) {
                    }
                    T.event.triggered = void 0, c && (n[o] = c)
                }
                return e.result
            }
        },
        dispatch: function (e) {
            e = T.event.fix(e);
            var t, n, i, r, o, a, s = u.call(arguments),
                l = (T._data(this, "events") || {})[e.type] || [],
                c = T.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = T.event.handlers.call(this, e, l), t = 0;
                     (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, o = 0;
                         (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, void 0 !== (n = ((T.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (r = [], o = 0; o < s; o++) void 0 === r[n = (i = t[o]).selector + " "] && (r[n] = i.needsContext ? 0 <= T(n, this).index(l) : T.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && a.push({elem: l, handlers: r})
                    }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        fix: function (e) {
            if (e[T.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = V.test(r) ? this.mouseHooks : G.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new T.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
            return e.target || (e.target = o.srcElement || C), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || C).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Z() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Z() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (T.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                }, _default: function (e) {
                    return T.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = T.extend(new T.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            i ? T.event.trigger(r, null, t) : T.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, T.removeEvent = C.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === P && (e[i] = null), e.detachEvent(i, n))
    }, T.Event = function (e, t) {
        if (!(this instanceof T.Event)) return new T.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Y : K) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || T.now(), this[T.expando] = !0
    }, T.Event.prototype = {
        isDefaultPrevented: K,
        isPropagationStopped: K,
        isImmediatePropagationStopped: K,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Y, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, r) {
        T.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || T.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), v.submitBubbles || (T.event.special.submit = {
        setup: function () {
            if (T.nodeName(this, "form")) return !1;
            T.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    n = T.nodeName(t, "input") || T.nodeName(t, "button") ? t.form : void 0;
                n && !T._data(n, "submitBubbles") && (T.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), T._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && T.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            if (T.nodeName(this, "form")) return !1;
            T.event.remove(this, "._submit")
        }
    }), v.changeBubbles || (T.event.special.change = {
        setup: function () {
            if (X.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (T.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), T.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), T.event.simulate("change", this, e, !0)
            })), !1;
            T.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                X.test(t.nodeName) && !T._data(t, "changeBubbles") && (T.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || T.event.simulate("change", this.parentNode, e, !0)
                }), T._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return T.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), v.focusinBubbles || T.each({focus: "focusin", blur: "focusout"}, function (n, i) {
        var r = function (e) {
            T.event.simulate(i, e.target, T.event.fix(e), !0)
        };
        T.event.special[i] = {
            setup: function () {
                var e = this.ownerDocument || this,
                    t = T._data(e, i);
                t || e.addEventListener(n, r, !0), T._data(e, i, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this,
                    t = T._data(e, i) - 1;
                t ? T._data(e, i, t) : (e.removeEventListener(n, r, !0), T._removeData(e, i))
            }
        }
    }), T.fn.extend({
        on: function (e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                for (o in "string" != typeof t && (n = n || t, t = void 0), e) this.on(o, t, n, e[o], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = K;
            else if (!i) return this;
            return 1 === r && (a = i, (i = function (e) {
                return T().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = T.guid++)), this.each(function () {
                T.event.add(this, e, i, n, t)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = K), this.each(function () {
                T.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        },
        trigger: function (e, t) {
            return this.each(function () {
                T.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0)
        }
    });
    var te = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ne = / jQuery\d+="(?:null|\d+)"/g,
        ie = new RegExp("<(?:" + te + ")[\\s/>]", "i"),
        re = /^\s+/,
        oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ae = /<([\w:]+)/,
        se = /<tbody/i,
        le = /<|&#?\w+;/,
        ce = /<(?:script|style|link)/i,
        ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^$|\/(?:java|ecma)script/i,
        fe = /^true\/(.*)/,
        pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        he = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        me = ee(C).appendChild(C.createElement("div"));

    function ge(e, t) {
        var n, i, r = 0,
            o = typeof e.getElementsByTagName !== P ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== P ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || T.nodeName(i, t) ? o.push(i) : T.merge(o, ge(i, t));
        return void 0 === t || t && T.nodeName(e, t) ? T.merge([e], o) : o
    }

    function ve(e) {
        U.test(e.type) && (e.defaultChecked = e.checked)
    }

    function ye(e, t) {
        return T.nodeName(e, "table") && T.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function be(e) {
        return e.type = (null !== T.find.attr(e, "type")) + "/" + e.type, e
    }

    function we(e) {
        var t = fe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function xe(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) T._data(n, "globalEval", !t || T._data(t[i], "globalEval"))
    }

    function Ce(e, t) {
        if (1 === t.nodeType && T.hasData(e)) {
            var n, i, r, o = T._data(e),
                a = T._data(t, o),
                s = o.events;
            if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (i = 0, r = s[n].length; i < r; i++) T.event.add(t, n, s[n][i]);
            a.data && (a.data = T.extend({}, a.data))
        }
    }

    function Te(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !v.noCloneEvent && t[T.expando]) {
                for (i in (r = T._data(t)).events) T.removeEvent(t, i, r.handle);
                t.removeAttribute(T.expando)
            }
            "script" === n && t.text !== e.text ? (be(t).text = e.text, we(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), v.html5Clone && e.innerHTML && !T.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && U.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    he.optgroup = he.option, he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, T.extend({
        clone: function (e, t, n) {
            var i, r, o, a, s, l = T.contains(e.ownerDocument, e);
            if (v.html5Clone || T.isXMLDoc(e) || !ie.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (me.innerHTML = e.outerHTML, me.removeChild(o = me.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (i = ge(o), s = ge(e), a = 0; null != (r = s[a]); ++a) i[a] && Te(r, i[a]);
            if (t)
                if (n)
                    for (s = s || ge(e), i = i || ge(o), a = 0; null != (r = s[a]); a++) Ce(r, i[a]);
                else Ce(e, o);
            return 0 < (i = ge(o, "script")).length && xe(i, !l && ge(e, "script")), i = s = r = null, o
        },
        buildFragment: function (e, t, n, i) {
            for (var r, o, a, s, l, c, u, d = e.length, f = ee(t), p = [], h = 0; h < d; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === T.type(o)) T.merge(p, o.nodeType ? [o] : o);
                    else if (le.test(o)) {
                        for (s = s || f.appendChild(t.createElement("div")), l = (ae.exec(o) || ["", ""])[1].toLowerCase(), u = he[l] || he._default, s.innerHTML = u[1] + o.replace(oe, "<$1></$2>") + u[2], r = u[0]; r--;) s = s.lastChild;
                        if (!v.leadingWhitespace && re.test(o) && p.push(t.createTextNode(re.exec(o)[0])), !v.tbody)
                            for (r = (o = "table" !== l || se.test(o) ? "<table>" !== u[1] || se.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; r--;) T.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                        for (T.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), v.appendChecked || T.grep(ge(p, "input"), ve), h = 0; o = p[h++];)
                if ((!i || -1 === T.inArray(o, i)) && (a = T.contains(o.ownerDocument, o), s = ge(f.appendChild(o), "script"), a && xe(s), n))
                    for (r = 0; o = s[r++];) de.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function (e, t) {
            for (var n, i, r, o, a = 0, s = T.expando, l = T.cache, c = v.deleteExpando, u = T.event.special; null != (n = e[a]); a++)
                if ((t || T.acceptData(n)) && (o = (r = n[s]) && l[r])) {
                    if (o.events)
                        for (i in o.events) u[i] ? T.event.remove(n, i) : T.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], c ? delete n[s] : typeof n.removeAttribute !== P ? n.removeAttribute(s) : n[s] = null, d.push(r))
                }
        }
    }), T.fn.extend({
        text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? T.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ye(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ye(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, i = e ? T.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || T.cleanData(ge(n)), n.parentNode && (t && T.contains(n.ownerDocument, n) && xe(ge(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && T.cleanData(ge(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && T.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return T.clone(this, e, t)
            })
        },
        html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ne, "") : void 0;
                if ("string" == typeof e && !ce.test(e) && (v.htmlSerialize || !ie.test(e)) && (v.leadingWhitespace || !re.test(e)) && !he[(ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(oe, "<$1></$2>");
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(ge(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, T.cleanData(ge(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (n, i) {
            n = m.apply([], n);
            var e, t, r, o, a, s, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                f = n[0],
                p = T.isFunction(f);
            if (p || 1 < c && "string" == typeof f && !v.checkClone && ue.test(f)) return this.each(function (e) {
                var t = u.eq(e);
                p && (n[0] = f.call(this, e, t.html())), t.domManip(n, i)
            });
            if (c && (e = (s = T.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === s.childNodes.length && (s = e), e)) {
                for (r = (o = T.map(ge(s, "script"), be)).length; l < c; l++) t = s, l !== d && (t = T.clone(t, !0, !0), r && T.merge(o, ge(t, "script"))), i.call(this[l], t, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, T.map(o, we), l = 0; l < r; l++) t = o[l], de.test(t.type || "") && !T._data(t, "globalEval") && T.contains(a, t) && (t.src ? T._evalUrl && T._evalUrl(t.src) : T.globalEval((t.text || t.textContent || t.innerHTML || "").replace(pe, "")));
                s = e = null
            }
            return this
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        T.fn[e] = function (e) {
            for (var t, n = 0, i = [], r = T(e), o = r.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), T(r[n])[a](t), s.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var Ee, ke, _e = {};

    function je(e, t) {
        var n, i = T(t.createElement(e)).appendTo(t.body),
            r = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(i[0])) ? n.display : T.css(i[0], "display");
        return i.detach(), r
    }

    function Se(e) {
        var t = C,
            n = _e[e];
        return n || ("none" !== (n = je(e, t)) && n || ((t = ((Ee = (Ee || T("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ee[0].contentDocument).document).write(), t.close(), n = je(e, t), Ee.detach()), _e[e] = n), n
    }

    v.shrinkWrapBlocks = function () {
        return null != ke ? ke : (ke = !1, (t = C.getElementsByTagName("body")[0]) && t.style ? (e = C.createElement("div"), (n = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom !== P && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(C.createElement("div")).style.width = "5px", ke = 3 !== e.offsetWidth), t.removeChild(n), ke) : void 0);
        var e, t, n
    };
    var qe, Ne, Ae = /^margin/,
        $e = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i"),
        De = /^(top|right|bottom|left)$/;

    function Pe(t, n) {
        return {
            get: function () {
                var e = t();
                if (null != e) {
                    if (!e) return (this.get = n).apply(this, arguments);
                    delete this.get
                }
            }
        }
    }

    h.getComputedStyle ? (qe = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, Ne = function (e, t, n) {
        var i, r, o, a, s = e.style;
        return a = (n = n || qe(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || T.contains(e.ownerDocument, e) || (a = T.style(e, t)), $e.test(a) && Ae.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : C.documentElement.currentStyle && (qe = function (e) {
        return e.currentStyle
    }, Ne = function (e, t, n) {
        var i, r, o, a, s = e.style;
        return null == (a = (n = n || qe(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), $e.test(a) && !De.test(t) && (i = s.left, (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    }),
        function () {
            var e, t, n, r, o, a, s;

            function i() {
                var e, t, n, i;
                (t = C.getElementsByTagName("body")[0]) && t.style && (e = C.createElement("div"), (n = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = o = !1, s = !0, h.getComputedStyle && (r = "1%" !== (h.getComputedStyle(e, null) || {}).top, o = "4px" === (h.getComputedStyle(e, null) || {width: "4px"}).width, (i = e.appendChild(C.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", e.style.width = "1px", s = !parseFloat((h.getComputedStyle(i, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (i = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === i[0].offsetHeight) && (i[0].style.display = "", i[1].style.display = "none", a = 0 === i[0].offsetHeight), t.removeChild(n))
            }

            (e = C.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", (t = (n = e.getElementsByTagName("a")[0]) && n.style) && (t.cssText = "float:left;opacity:.5", v.opacity = "0.5" === t.opacity, v.cssFloat = !!t.cssFloat, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === e.style.backgroundClip, v.boxSizing = "" === t.boxSizing || "" === t.MozBoxSizing || "" === t.WebkitBoxSizing, T.extend(v, {
                reliableHiddenOffsets: function () {
                    return null == a && i(), a
                }, boxSizingReliable: function () {
                    return null == o && i(), o
                }, pixelPosition: function () {
                    return null == r && i(), r
                }, reliableMarginRight: function () {
                    return null == s && i(), s
                }
            }))
        }(), T.swap = function (e, t, n, i) {
        var r, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
        return r
    };
    var Le = /alpha\([^)]*\)/i,
        Oe = /opacity\s*=\s*([^)]*)/,
        Me = /^(none|table(?!-c[ea]).+)/,
        He = new RegExp("^(" + B + ")(.*)$", "i"),
        Fe = new RegExp("^([+-])=(" + B + ")", "i"),
        Re = {position: "absolute", visibility: "hidden", display: "block"},
        Be = {letterSpacing: "0", fontWeight: "400"},
        We = ["Webkit", "O", "Moz", "ms"];

    function Ie(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = We.length; r--;)
            if ((t = We[r] + n) in e) return t;
        return i
    }

    function ze(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++) (i = e[a]).style && (o[a] = T._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && I(i) && (o[a] = T._data(i, "olddisplay", Se(i.nodeName)))) : (r = I(i), (n && "none" !== n || !r) && T._data(i, "olddisplay", r ? n : T.css(i, "display"))));
        for (a = 0; a < s; a++) (i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function Ue(e, t, n) {
        var i = He.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function Xe(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += T.css(e, n + W[o], !0, r)), i ? ("content" === n && (a -= T.css(e, "padding" + W[o], !0, r)), "margin" !== n && (a -= T.css(e, "border" + W[o] + "Width", !0, r))) : (a += T.css(e, "padding" + W[o], !0, r), "padding" !== n && (a += T.css(e, "border" + W[o] + "Width", !0, r)));
        return a
    }

    function Ge(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = qe(e),
            a = v.boxSizing && "border-box" === T.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = Ne(e, t, o)) < 0 || null == r) && (r = e.style[t]), $e.test(r)) return r;
            i = a && (v.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + Xe(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function Ve(e, t, n, i, r) {
        return new Ve.prototype.init(e, t, n, i, r)
    }

    T.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ne(e, "opacity");
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
        cssProps: {float: v.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = T.camelCase(t),
                    l = e.style;
                if (t = T.cssProps[s] || (T.cssProps[s] = Ie(l, s)), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                if ("string" === (o = typeof n) && (r = Fe.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(T.css(e, t)), o = "number"), null != n && n == n && ("number" !== o || T.cssNumber[s] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                    l[t] = n
                } catch (e) {
                }
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = T.camelCase(t);
            return t = T.cssProps[s] || (T.cssProps[s] = Ie(e.style, s)), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ne(e, t, i)), "normal" === o && t in Be && (o = Be[t]), "" === n || n ? (r = parseFloat(o), !0 === n || T.isNumeric(r) ? r || 0 : o) : o
        }
    }), T.each(["height", "width"], function (e, r) {
        T.cssHooks[r] = {
            get: function (e, t, n) {
                if (t) return Me.test(T.css(e, "display")) && 0 === e.offsetWidth ? T.swap(e, Re, function () {
                    return Ge(e, r, n)
                }) : Ge(e, r, n)
            }, set: function (e, t, n) {
                var i = n && qe(e);
                return Ue(0, t, n ? Xe(e, r, n, v.boxSizing && "border-box" === T.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), v.opacity || (T.cssHooks.opacity = {
        get: function (e, t) {
            return Oe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = T.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === T.trim(o.replace(Le, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = Le.test(o) ? o.replace(Le, r) : o + " " + r)
        }
    }), T.cssHooks.marginRight = Pe(v.reliableMarginRight, function (e, t) {
        if (t) return T.swap(e, {display: "inline-block"}, Ne, [e, "marginRight"])
    }), T.each({margin: "", padding: "", border: "Width"}, function (r, o) {
        T.cssHooks[r + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + W[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, Ae.test(r) || (T.cssHooks[r + o].set = Ue)
    }), T.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (T.isArray(t)) {
                    for (i = qe(e), r = t.length; a < r; a++) o[t[a]] = T.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function () {
            return ze(this, !0)
        },
        hide: function () {
            return ze(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                I(this) ? T(this).show() : T(this).hide()
            })
        }
    }), ((T.Tween = Ve).prototype = {
        constructor: Ve, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Ve.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ve.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Ve.propHooks[this.prop];
            return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ve.propHooks._default.set(this), this
        }
    }).init.prototype = Ve.prototype, (Ve.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            }, set: function (e) {
                T.fx.step[e.prop] ? T.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[T.cssProps[e.prop]] || T.cssHooks[e.prop]) ? T.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = Ve.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, T.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, T.fx = Ve.prototype.init, T.fx.step = {};
    var Je, Qe, Ye, Ke, Ze, et, tt, nt = /^(?:toggle|show|hide)$/,
        it = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
        rt = /queueHooks$/,
        ot = [function (t, e, n) {
            var i, r, o, a, s, l, c, u = this,
                d = {},
                f = t.style,
                p = t.nodeType && I(t),
                h = T._data(t, "fxshow");
            n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, u.always(function () {
                u.always(function () {
                    s.unqueued--, T.queue(t, "fx").length || s.empty.fire()
                })
            }));
            1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = T.css(t, "display"), "inline" === ("none" === c ? T._data(t, "olddisplay") || Se(t.nodeName) : c) && "none" === T.css(t, "float") && (v.inlineBlockNeedsLayout && "inline" !== Se(t.nodeName) ? f.zoom = 1 : f.display = "inline-block"));
            n.overflow && (f.overflow = "hidden", v.shrinkWrapBlocks() || u.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], nt.exec(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !h || void 0 === h[i]) continue;
                        p = !0
                    }
                    d[i] = h && h[i] || T.style(t, i)
                } else c = void 0;
            if (T.isEmptyObject(d)) "inline" === ("none" === c ? Se(t.nodeName) : c) && (f.display = c);
            else
                for (i in h ? "hidden" in h && (p = h.hidden) : h = T._data(t, "fxshow", {}), o && (h.hidden = !p), p ? T(t).show() : u.done(function () {
                    T(t).hide()
                }), u.done(function () {
                    var e;
                    for (e in T._removeData(t, "fxshow"), d) T.style(t, e, d[e])
                }), d) a = ct(p ? h[i] : 0, i, u), i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }],
        at = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = it.exec(t),
                    o = r && r[3] || (T.cssNumber[e] ? "" : "px"),
                    a = (T.cssNumber[e] || "px" !== o && +i) && it.exec(T.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o)
                    for (o = o || a[3], r = r || [], a = +i || 1; a /= s = s || ".5", T.style(n.elem, e, a + o), s !== (s = n.cur() / i) && 1 !== s && --l;) ;
                return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };

    function st() {
        return setTimeout(function () {
            Je = void 0
        }), Je = T.now()
    }

    function lt(e, t) {
        var n, i = {height: e},
            r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = W[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var i, r = (at[t] || []).concat(at["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function ut(o, e, t) {
        var n, a, i = 0,
            r = ot.length,
            s = T.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (a) return !1;
                for (var e = Je || st(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
                return s.notifyWith(o, [c, n, t]), n < 1 && r ? t : (s.resolveWith(o, [c]), !1)
            },
            c = s.promise({
                elem: o,
                props: T.extend({}, e),
                opts: T.extend(!0, {specialEasing: {}}, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Je || st(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = T.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? s.resolveWith(o, [c, e]) : s.rejectWith(o, [c, e]), this
                }
            }),
            u = c.props;
        for (!function (e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (r = t[i = T.camelCase(n)], o = e[n], T.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = T.cssHooks[i]) && "expand" in a)
                    for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                else t[i] = r
        }(u, c.opts.specialEasing); i < r; i++)
            if (n = ot[i].call(c, o, u, c.opts)) return n;
        return T.map(u, ct, c), T.isFunction(c.opts.start) && c.opts.start.call(o, c), T.fx.timer(T.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    T.Animation = T.extend(ut, {
        tweener: function (e, t) {
            for (var n, i = 0, r = (e = T.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; i < r; i++) n = e[i], at[n] = at[n] || [], at[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? ot.unshift(e) : ot.push(e)
        }
    }), T.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? T.extend({}, e) : {
            complete: n || !n && t || T.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !T.isFunction(t) && t
        };
        return i.duration = T.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in T.fx.speeds ? T.fx.speeds[i.duration] : T.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            T.isFunction(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
        }, i
    }, T.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(I).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        },
        animate: function (t, e, n, i) {
            var r = T.isEmptyObject(t),
                o = T.speed(e, n, i),
                a = function () {
                    var e = ut(this, T.extend({}, t), o);
                    (r || T._data(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (r, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = T.timers,
                    i = T._data(this);
                if (t) i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && rt.test(t) && a(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || T.dequeue(this, r)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = T._data(this),
                    n = t[a + "queue"],
                    i = t[a + "queueHooks"],
                    r = T.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, T.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), T.each(["toggle", "show", "hide"], function (e, i) {
        var r = T.fn[i];
        T.fn[i] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(lt(i, !0), e, t, n)
        }
    }), T.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, i) {
        T.fn[e] = function (e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), T.timers = [], T.fx.tick = function () {
        var e, t = T.timers,
            n = 0;
        for (Je = T.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || T.fx.stop(), Je = void 0
    }, T.fx.timer = function (e) {
        T.timers.push(e), e() ? T.fx.start() : T.timers.pop()
    }, T.fx.interval = 13, T.fx.start = function () {
        Qe || (Qe = setInterval(T.fx.tick, T.fx.interval))
    }, T.fx.stop = function () {
        clearInterval(Qe), Qe = null
    }, T.fx.speeds = {slow: 600, fast: 200, _default: 400}, T.fn.delay = function (i, e) {
        return i = T.fx && T.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
            var n = setTimeout(e, i);
            t.stop = function () {
                clearTimeout(n)
            }
        })
    }, (Ke = C.createElement("div")).setAttribute("className", "t"), Ke.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", et = Ke.getElementsByTagName("a")[0], tt = (Ze = C.createElement("select")).appendChild(C.createElement("option")), Ye = Ke.getElementsByTagName("input")[0], et.style.cssText = "top:1px", v.getSetAttribute = "t" !== Ke.className, v.style = /top/.test(et.getAttribute("style")), v.hrefNormalized = "/a" === et.getAttribute("href"), v.checkOn = !!Ye.value, v.optSelected = tt.selected, v.enctype = !!C.createElement("form").enctype, Ze.disabled = !0, v.optDisabled = !tt.disabled, (Ye = C.createElement("input")).setAttribute("value", ""), v.input = "" === Ye.getAttribute("value"), Ye.value = "t", Ye.setAttribute("type", "radio"), v.radioValue = "t" === Ye.value;
    var dt = /\r/g;
    T.fn.extend({
        val: function (n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = T.isFunction(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : T.isArray(t) && (t = T.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(dt, "") : null == e ? "" : e : void 0
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : T.trim(T.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                        if (((n = i[l]).selected || l === r) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !T.nodeName(n.parentNode, "optgroup"))) {
                            if (t = T(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = T.makeArray(t), a = r.length; a--;)
                        if (i = r[a], 0 <= T.inArray(T.valHooks.option.get(i), o)) try {
                            i.selected = n = !0
                        } catch (e) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), T.each(["radio", "checkbox"], function () {
        T.valHooks[this] = {
            set: function (e, t) {
                if (T.isArray(t)) return e.checked = 0 <= T.inArray(T(e).val(), t)
            }
        }, v.checkOn || (T.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ft, pt, ht = T.expr.attrHandle,
        mt = /^(?:checked|selected)$/i,
        gt = v.getSetAttribute,
        vt = v.input;
    T.fn.extend({
        attr: function (e, t) {
            return z(this, T.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                T.removeAttr(this, e)
            })
        }
    }), T.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === P ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (t = t.toLowerCase(), i = T.attrHooks[t] || (T.expr.match.bool.test(t) ? pt : ft)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void T.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var n, i, r = 0,
                o = t && t.match(q);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = T.propFix[n] || n, T.expr.match.bool.test(n) ? vt && gt || !mt.test(n) ? e[i] = !1 : e[T.camelCase("default-" + n)] = e[i] = !1 : T.attr(e, n, ""), e.removeAttribute(gt ? n : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!v.radioValue && "radio" === t && T.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), pt = {
        set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : vt && gt || !mt.test(n) ? e.setAttribute(!gt && T.propFix[n] || n, n) : e[T.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var o = ht[t] || T.find.attr;
        ht[t] = vt && gt || !mt.test(t) ? function (e, t, n) {
            var i, r;
            return n || (r = ht[t], ht[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, ht[t] = r), i
        } : function (e, t, n) {
            if (!n) return e[T.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), vt && gt || (T.attrHooks.value = {
        set: function (e, t, n) {
            if (!T.nodeName(e, "input")) return ft && ft.set(e, t, n);
            e.defaultValue = t
        }
    }), gt || (ft = {
        set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, ht.id = ht.name = ht.coords = function (e, t, n) {
        var i;
        if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, T.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        }, set: ft.set
    }, T.attrHooks.contenteditable = {
        set: function (e, t, n) {
            ft.set(e, "" !== t && t, n)
        }
    }, T.each(["width", "height"], function (e, n) {
        T.attrHooks[n] = {
            set: function (e, t) {
                if ("" === t) return e.setAttribute(n, "auto"), t
            }
        }
    })), v.style || (T.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var yt = /^(?:input|select|textarea|button|object)$/i,
        bt = /^(?:a|area)$/i;
    T.fn.extend({
        prop: function (e, t) {
            return z(this, T.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return e = T.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {
                }
            })
        }
    }), T.extend({
        propFix: {for: "htmlFor", class: "className"}, prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !T.isXMLDoc(e)) && (t = T.propFix[t] || t, r = T.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = T.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), v.hrefNormalized || T.each(["href", "src"], function (e, t) {
        T.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), v.optSelected || (T.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        T.propFix[this.toLowerCase()] = this
    }), v.enctype || (T.propFix.enctype = "encoding");
    var wt = /[\t\r\n\f]/g;
    T.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, a, s = 0,
                l = this.length,
                c = "string" == typeof t && t;
            if (T.isFunction(t)) return this.each(function (e) {
                T(this).addClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(q) || []; s < l; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) {
                        for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = T.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, a, s = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof t && t;
            if (T.isFunction(t)) return this.each(function (e) {
                T(this).removeClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(q) || []; s < l; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; 0 <= i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        a = t ? T.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function (r, t) {
            var o = typeof r;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : T.isFunction(r) ? this.each(function (e) {
                T(this).toggleClass(r.call(this, e, this.className, t), t)
            }) : this.each(function () {
                if ("string" === o)
                    for (var e, t = 0, n = T(this), i = r.match(q) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else o !== P && "boolean" !== o || (this.className && T._data(this, "__className__", this.className), this.className = this.className || !1 === r ? "" : T._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(wt, " ").indexOf(t)) return !0;
            return !1
        }
    }), T.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
        T.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), T.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var xt = T.now(),
        Ct = /\?/,
        Tt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    T.parseJSON = function (e) {
        if (h.JSON && h.JSON.parse) return h.JSON.parse(e + "");
        var r, o = null,
            t = T.trim(e + "");
        return t && !T.trim(t.replace(Tt, function (e, t, n, i) {
            return r && t && (o = 0), 0 === o ? e : (r = n || t, o += !i - !n, "")
        })) ? Function("return " + t)() : T.error("Invalid JSON: " + e)
    }, T.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            h.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (e) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
    };
    var Et, kt, _t = /#.*$/,
        jt = /([?&])_=[^&]*/,
        St = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        qt = /^(?:GET|HEAD)$/,
        Nt = /^\/\//,
        At = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        $t = {},
        Dt = {},
        Pt = "*/".concat("*");
    try {
        kt = location.href
    } catch (e) {
        (kt = C.createElement("a")).href = "", kt = kt.href
    }

    function Lt(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(q) || [];
            if (T.isFunction(t))
                for (; n = r[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Ot(t, r, o, a) {
        var s = {},
            l = t === Dt;

        function c(e) {
            var i;
            return s[e] = !0, T.each(t[e] || [], function (e, t) {
                var n = t(r, o, a);
                return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
            }), i
        }

        return c(r.dataTypes[0]) || !s["*"] && c("*")
    }

    function Mt(e, t) {
        var n, i, r = T.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && T.extend(!0, e, n), e
    }

    Et = At.exec(kt.toLowerCase()) || [], T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Pt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": T.parseJSON, "text xml": T.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Mt(Mt(e, T.ajaxSettings), t) : Mt(T.ajaxSettings, e)
        },
        ajaxPrefilter: Lt($t),
        ajaxTransport: Lt(Dt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, i, u, d, f, p, h, r, m = T.ajaxSetup({}, t),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? T(g) : T.event,
                y = T.Deferred(),
                b = T.Callbacks("once memory"),
                w = m.statusCode || {},
                o = {},
                a = {},
                x = 0,
                s = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!r)
                                for (r = {}; t = St.exec(d);) r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? d : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = a[n] = a[n] || e, o[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (m.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e) w[t] = [w[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || s;
                        return h && h.abort(t), l(0, t), this
                    }
                };
            if (y.promise(C).complete = b.add, C.success = C.done, C.error = C.fail, m.url = ((e || m.url || kt) + "").replace(_t, "").replace(Nt, Et[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = T.trim(m.dataType || "*").toLowerCase().match(q) || [""], null == m.crossDomain && (n = At.exec(m.url.toLowerCase()), m.crossDomain = !(!n || n[1] === Et[1] && n[2] === Et[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Et[3] || ("http:" === Et[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = T.param(m.data, m.traditional)), Ot($t, m, t, C), 2 === x) return C;
            for (i in (p = m.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qt.test(m.type), u = m.url, m.hasContent || (m.data && (u = m.url += (Ct.test(u) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = jt.test(u) ? u.replace(jt, "$1_=" + xt++) : u + (Ct.test(u) ? "&" : "?") + "_=" + xt++)), m.ifModified && (T.lastModified[u] && C.setRequestHeader("If-Modified-Since", T.lastModified[u]), T.etag[u] && C.setRequestHeader("If-None-Match", T.etag[u])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && C.setRequestHeader("Content-Type", m.contentType), C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : m.accepts["*"]), m.headers) C.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, C, m) || 2 === x)) return C.abort();
            for (i in s = "abort", {success: 1, error: 1, complete: 1}) C[i](m[i]);
            if (h = Ot(Dt, m, t, C)) {
                C.readyState = 1, p && v.trigger("ajaxSend", [C, m]), m.async && 0 < m.timeout && (f = setTimeout(function () {
                    C.abort("timeout")
                }, m.timeout));
                try {
                    x = 1, h.send(o, l)
                } catch (e) {
                    if (!(x < 2)) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, i) {
                var r, o, a, s, l, c = t;
                2 !== x && (x = 2, f && clearTimeout(f), h = void 0, d = i || "", C.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                         "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (a in s)
                            if (s[a] && s[a].test(r)) {
                                l.unshift(a);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (a in n) {
                            if (!l[0] || e.converters[a + " " + l[0]]) {
                                o = a;
                                break
                            }
                            i || (i = a)
                        }
                        o = o || i
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(m, C, n)), s = function (e, t, n, i) {
                    var r, o, a, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(a = c[l + " " + o] || c["* " + o]))
                                    for (r in c)
                                        if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                            !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + l + " to " + o
                                        }
                                    }
                            }
                    return {state: "success", data: t}
                }(m, s, C, r), r ? (m.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (T.lastModified[u] = l), (l = C.getResponseHeader("etag")) && (T.etag[u] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state, o = s.data, r = !(a = s.error))) : (a = c, !e && c || (c = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || c) + "", r ? y.resolveWith(g, [o, c, C]) : y.rejectWith(g, [C, c, a]), C.statusCode(w), w = void 0, p && v.trigger(r ? "ajaxSuccess" : "ajaxError", [C, m, r ? o : a]), b.fireWith(g, [C, c]), p && (v.trigger("ajaxComplete", [C, m]), --T.active || T.event.trigger("ajaxStop")))
            }

            return C
        },
        getJSON: function (e, t, n) {
            return T.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return T.get(e, void 0, t, "script")
        }
    }), T.each(["get", "post"], function (e, r) {
        T[r] = function (e, t, n, i) {
            return T.isFunction(t) && (i = i || n, n = t, t = void 0), T.ajax({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            })
        }
    }), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        T.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), T._evalUrl = function (e) {
        return T.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }, T.fn.extend({
        wrapAll: function (t) {
            if (T.isFunction(t)) return this.each(function (e) {
                T(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = T(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (n) {
            return T.isFunction(n) ? this.each(function (e) {
                T(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = T(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = T.isFunction(t);
            return this.each(function (e) {
                T(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                T.nodeName(this, "body") || T(this).replaceWith(this.childNodes)
            }).end()
        }
    }), T.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !v.reliableHiddenOffsets() && "none" === (e.style && e.style.display || T.css(e, "display"))
    }, T.expr.filters.visible = function (e) {
        return !T.expr.filters.hidden(e)
    };
    var Ht = /%20/g,
        Ft = /\[\]$/,
        Rt = /\r?\n/g,
        Bt = /^(?:submit|button|image|reset|file)$/i,
        Wt = /^(?:input|select|textarea|keygen)/i;

    function It(n, e, i, r) {
        var t;
        if (T.isArray(e)) T.each(e, function (e, t) {
            i || Ft.test(n) ? r(n, t) : It(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== T.type(e)) r(n, e);
        else
            for (t in e) It(n + "[" + t + "]", e[t], i, r)
    }

    T.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                t = T.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = T.ajaxSettings && T.ajaxSettings.traditional), T.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (n in e) It(n, e[n], t, r);
        return i.join("&").replace(Ht, "+")
    }, T.fn.extend({
        serialize: function () {
            return T.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = T.prop(this, "elements");
                return e ? T.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !T(this).is(":disabled") && Wt.test(this.nodeName) && !Bt.test(e) && (this.checked || !U.test(e))
            }).map(function (e, t) {
                var n = T(this).val();
                return null == n ? null : T.isArray(n) ? T.map(n, function (e) {
                    return {name: t.name, value: e.replace(Rt, "\r\n")}
                }) : {name: t.name, value: n.replace(Rt, "\r\n")}
            }).get()
        }
    }), T.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Gt() || function () {
            try {
                return new h.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }()
    } : Gt;
    var zt = 0,
        Ut = {},
        Xt = T.ajaxSettings.xhr();

    function Gt() {
        try {
            return new h.XMLHttpRequest
        } catch (e) {
        }
    }

    h.ActiveXObject && T(h).on("unload", function () {
        for (var e in Ut) Ut[e](void 0, !0)
    }), v.cors = !!Xt && "withCredentials" in Xt, (Xt = v.ajax = !!Xt) && T.ajaxTransport(function (l) {
        var c;
        if (!l.crossDomain || v.cors) return {
            send: function (e, o) {
                var t, a = l.xhr(),
                    s = ++zt;
                if (a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                    for (t in l.xhrFields) a[t] = l.xhrFields[t];
                for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                a.send(l.hasContent && l.data || null), c = function (e, t) {
                    var n, i, r;
                    if (c && (t || 4 === a.readyState))
                        if (delete Ut[s], c = void 0, a.onreadystatechange = T.noop, t) 4 !== a.readyState && a.abort();
                        else {
                            r = {}, n = a.status, "string" == typeof a.responseText && (r.text = a.responseText);
                            try {
                                i = a.statusText
                            } catch (e) {
                                i = ""
                            }
                            n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404
                        }
                    r && o(n, i, r, a.getAllResponseHeaders())
                }, l.async ? 4 === a.readyState ? setTimeout(c) : a.onreadystatechange = Ut[s] = c : c()
            },
            abort: function () {
                c && c(void 0, !0)
            }
        }
    }), T.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return T.globalEval(e), e
            }
        }
    }), T.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), T.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var i, r = C.head || T("head")[0] || C.documentElement;
            return {
                send: function (e, n) {
                    (i = C.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function (e, t) {
                        (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
                    }, r.insertBefore(i, r.firstChild)
                },
                abort: function () {
                    i && i.onload(void 0, !0)
                }
            }
        }
    });
    var Vt = [],
        Jt = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Vt.pop() || T.expando + "_" + xt++;
            return this[e] = !0, e
        }
    }), T.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i, r, o,
            a = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = T.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Jt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return o || T.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = h[i], h[i] = function () {
            o = arguments
        }, n.always(function () {
            h[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Vt.push(i)), o && T.isFunction(r) && r(o[0]), o = r = void 0
        }), "script"
    }), T.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || C;
        var i = y.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = T.buildFragment([e], t, r), r && r.length && T(r).remove(), T.merge([], i.childNodes))
    };
    var Qt = T.fn.load;
    T.fn.load = function (e, t, n) {
        if ("string" != typeof e && Qt) return Qt.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return 0 <= s && (i = T.trim(e.slice(s, e.length)), e = e.slice(0, s)), T.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && T.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, a.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
            a.each(n, r || [e.responseText, t, e])
        }), this
    }, T.expr.filters.animated = function (t) {
        return T.grep(T.timers, function (e) {
            return t === e.elem
        }).length
    };
    var Yt = h.document.documentElement;

    function Kt(e) {
        return T.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    T.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, l, c = T.css(e, "position"),
                u = T(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = T.css(e, "top"), l = T.css(e, "left"), r = ("absolute" === c || "fixed" === c) && -1 < T.inArray("auto", [o, l]) ? (a = (i = u.position()).top, i.left) : (a = parseFloat(o) || 0, parseFloat(l) || 0), T.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, T.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                T.offset.setOffset(this, t, e)
            });
            var e, n, i = {top: 0, left: 0},
                r = this[0],
                o = r && r.ownerDocument;
            return o ? (e = o.documentElement, T.contains(e, r) ? (typeof r.getBoundingClientRect !== P && (i = r.getBoundingClientRect()), n = Kt(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0},
                    i = this[0];
                return "fixed" === T.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), T.nodeName(e[0], "html") || (n = e.offset()), n.top += T.css(e[0], "borderTopWidth", !0), n.left += T.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - T.css(i, "marginTop", !0),
                    left: t.left - n.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Yt; e && !T.nodeName(e, "html") && "static" === T.css(e, "position");) e = e.offsetParent;
                return e || Yt
            })
        }
    }), T.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, r) {
        var o = /Y/.test(r);
        T.fn[t] = function (e) {
            return z(this, function (e, t, n) {
                var i = Kt(e);
                if (void 0 === n) return i ? r in i ? i[r] : i.document.documentElement[t] : e[t];
                i ? i.scrollTo(o ? T(i).scrollLeft() : n, o ? n : T(i).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }), T.each(["top", "left"], function (e, n) {
        T.cssHooks[n] = Pe(v.pixelPosition, function (e, t) {
            if (t) return t = Ne(e, n), $e.test(t) ? T(e).position()[n] + "px" : t
        })
    }), T.each({Height: "height", Width: "width"}, function (o, a) {
        T.each({padding: "inner" + o, content: a, "": "outer" + o}, function (i, e) {
            T.fn[e] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return z(this, function (e, t, n) {
                    var i;
                    return T.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? T.css(e, t, r) : T.style(e, t, n, r)
                }, a, n ? e : void 0, n, null)
            }
        })
    }), T.fn.size = function () {
        return this.length
    }, T.fn.andSelf = T.fn.addBack, "function" == typeof define && define.zqamd && define("jquery", [], function () {
        return T
    });
    var Zt = h.jQuery,
        en = h.$;
    return T.noConflict = function (e) {
        return h.$ === T && (h.$ = en), e && h.jQuery === T && (h.jQuery = Zt), T
    }, typeof e === P && (h.jQuery = h.$ = T), T
}), $(function () {
    window.crosswiseMalposition && window.crosswiseMalposition(), $(".main").find(".w_sfbox-001 .p_wrapbox").show(), writeBFP()
}), $(window).load(function () {
    window.pageLoad = !0
}), isFrontEnv() && $(window).load(function () {
    var e = window.globalObj.isOpenSSL ? "https://" : "http://",
        t = e + "md.yun300.cn/set-sail-sdk/pc/clickstream.js",
        n = e + "md.yun300.cn/set-sail-sdk/pc/streamCollect.js";
    require([e + "md.yun300.cn/set-sail-sdk/pc/jquery.md5.js"], function (e) {
        require([t], function (e) {
            require([n], function (e) {
            })
        })
    })
}), isFrontEnv() && $(window).load(function () {
    var e = window.globalObj.isOpenSSL ? "https://" : "http://",
        t = e + "md.yun300.cn/set-sail-sdk/pc/clickstream.js",
        n = e + "md.yun300.cn/set-sail-sdk/pc/streamCollect.js";
    require([e + "md.yun300.cn/set-sail-sdk/pc/jquery.md5.js"], function (e) {
        require([t], function (e) {
            require([n], function (e) {
            })
        })
    })
}), function () {
    var e = (navigator.browserLanguage || navigator.language).toLowerCase();
    try {
        if (1 <= foreignList.length && !getParentWindow().VisualManager && !sendLevel.test(window.location.hostname)) {
            var t = e.substring(0, 2);
            "zh" == t && (t = "zh-cn" == e || "zh_cn" == e ? "zh_CN" : "zh_HN")
        }
    } catch (e) {
    }
}(), null == getCookie(noredirectCookieName) && !getParentWindow().VisualManager && (window.userAgent = navigator.userAgent, window.mobileAgentReg = /(.*Android|.*iPhone|.*X11.{1}.*Linux*)/, mobileAgentReg.test(userAgent) && 6 == tenant.mobileStatus)) {
    var path = window.location.pathname,
        mobileTarget = getSettingMobileUrl();
    try {
        null != mobileTarget || "/" != path || null == tenant.mobileDomain || 8 == tenant.mobileStatus && 9 == tenant.mobileStatus || sendLevel.test(window.location.hostname) || (mobileTarget = window.globalObj.getProtocol() + tenant.mobileDomain)
    } catch (e) {
    }
    null != mobileTarget && mobileFoward(mobileTarget)
}
"100001" == window.tenant.unittype && (11 != tenant.status || getCookie("_nofirst") || (setCookie("_nofirst", "true"), window.location.href = "/toUpgradeOnline.jsp"), 7 == tenant.status && (window.location.href = "/pauseing.jsp")), window.compLoaded = !1, window.needRestCurrentComp = {}, window.addResetCompListener = function (e) {
    $("#" + e).attr("comreset", "false"), needRestCurrentComp[e] = !0
};
try {
    function maxComp(e, t) {
        var r = 0;
        return e.each(function (e, t) {
            var n = (t = $(t)).offset().top;
            "fixed" == t.css("position") && (n = 0);
            var i = t.outerHeight(!0) + n;
            r < i && (r = i)
        }), r
    }

    function maxW(e, t) {
        var r = 0;
        return e.each(function (e, t) {
            var n = (t = $(t)).offset().top;
            "fixed" == t.css("position") && (n = 0);
            var i = t.outerHeight(!0) + n;
            r < i && (r = i)
        }), r
    }

    function setHeight() {
        for (var e in needRestCurrentComp) adjustInnerHeight(e);
        var t = maxComp($("body").find(".pagebox").children("div[id^='c_']")),
            n = maxW($("body").find(".pagebox").children("div[id^='w_']")),
            i = n < t ? t : n,
            r = $(".newyear_img .p_headBox").height() || 0;
        r < i && (i -= r), $(".pagebox").css("height", 0 < i ? i : $(document).height() - r)
    }

    function adjustInnerHeight(e) {
        if (compLoaded) {
            var t = $("#" + e);
            if ("true" != t.attr("comreset")) {
                var n = t.find("div[id^='c_'],div[id^='w_']");
                n.removeClass("actives"), n.each(function (e, t) {
                    $(t).parent().hasClass("active") ? ($(t).parent().css("height", t.scrollHeight), $(t).css("height", t.scrollHeight), $(t).addClass("actives"), $(t).parent().trigger("FR_CHANGECOMPHEIGHT")) : $(t).parent().hasClass("p_box003") || $(t).parent().css("height", "0")
                }), t.attr("comreset")
            }
        }
    }

    $(function () {
        $.isAbsStyle() && setInterval(setHeight, 300), $("div").on("FR_CHANGECOMPHEIGHT", function () {
            var e = $(this);
            if ("absolute" == e.css("position"))
                if (null != e.attr("id"))
                    if (0 != !e.attr("id").indexOf("c_") || 0 != !e.attr("id").indexOf("w_")) {
                        var t = maxW(e.find("div[id^='w_'],div[id^='c_']").filter(".actives")) - (e.outerHeight(!0) + e.offset().top);
                        e.css("height", e.outerHeight(!0) + t), e.attr("comreset", "true"), e.parent().trigger("FR_CHANGECOMPHEIGHT"), e.parent().trigger("FR_CHANGECOMPHEIGHT")
                    } else e.parent().trigger("FR_CHANGECOMPHEIGHT");
                else e.parent().trigger("FR_CHANGECOMPHEIGHT");
            else e.parent().trigger("FR_CHANGECOMPHEIGHT")
        })
    })
} catch (e) {
    console.error(e)
}

function openNoPerDialog() {
    require(["jquery.dialogMgr"], function () {
        window.$.dialogMgr.create({url: "/public/html/auth/no_oper-dialog.html"})
    })
}

!function () {
    var e, t = !1,
        n = !($.isFlowStyle = function () {
            return !1 === t && (e = $("body").attr("data-layout"), t = !0), "flow_noResponsive" == e
        });
    $.isAbsStyle = function () {
        return !1 === n && (absLayout = $("body").attr("data-layout"), n = !0), void 0 === absLayout
    }
}(), $(function () {
    e = navigator.userAgent, t = /(?:Windows Phone)/.test(e), n = /(?:SymbianOS)/.test(e) || t, i = /(?:Android)/.test(e), r = /(?:Firefox)/.test(e), /(?:Chrome|CriOS)/.test(e), o = /(?:iPad|PlayBook)/.test(e) || i && !/(?:Mobile)/.test(e) || r && /(?:Tablet)/.test(e), a = /(?:iPhone)/.test(e) && !o;
    for (var e, t, n, i, r, o, a, s = !1, l = 0; l < $("script").length; l++) /widgets_pageTurning\.min\.js$/.test($("script").eq(l).attr("src")) && (s = !0);

    function c() {
        isFrontEnv() || window.siteIsPc ? window.outerWidth == $(window).width() && $("div[id^=w_sfbox-]").width(window.outerWidth).filter(function () {
            return "fixed" != $(this).css("position")
        }).css("left", -$(".pagebox").offset().left) : $("div[id^=w_sfbox-]").width(640).filter(function () {
            return "fixed" != $(this).css("position")
        }).css("left", 0)
    }

    function u() {
        if (window.siteIsPc) {
            var e = $("div[id^=w_sfbox-]").width() ? window.innerWidth : $(window).width();
            $("div[id^=w_wbox-],div[id^=w_cbox-],div[id^=w_bbox-],div[id^=w_fbox-]").width(e).filter(function () {
                return "fixed" != $(this).css("position")
            }).css("left", -$(".pagebox").offset().left)
        }
    }

    $("div[id^=w_fbox-]").length && (s = !0), $("div[id^=w_sfbox-]").length && (s = !0),
        function () {
            if (s) {
                var e = $("body").css("overflow");
                $("body").css("overflow", "hidden"), u(), c(), $("body").css("overflow", e)
            } else u(), c()
        }(), $(window).on("resize.fullPageResize", function () {
        u(), c()
    }), $("[id^=w_relationbtntab-]").each(function (e, t) {
        var n = $(this).find(".p_relationbtntab.active").parent().index(".e_link"),
            i = $(this).find(".p_box002>div").eq(n).css("overflow"),
            r = $(this).attr("id");
        "hidden" == i && addResetCompListener(r)
    }), $("body").on("click touchstart", ".w_relationbtntab>.p_box001>.e_link", function (e) {
        var t = $t = $(this),
            n = $(this).closest(".w_relationbtntab"),
            i = n.find(">.p_box001>.e_link"),
            r = n.find(">.p_box002>.e_box");
        t.siblings().find(".e_relationbtn").removeClass("active"), t.find(".e_relationbtn").addClass("active"), r.removeClass("active"), r.eq(i.index(t)).addClass("active"), $(this).trigger("tabEvent", r.eq(i.index(t)));
        var o = $(this).index(".e_link"),
            a = $(this).closest(".w_relationbtntab").find(".p_box002>div").eq(o),
            s = $(this).closest(".w_relationbtntab").parent().attr("id");
        "hidden" == a.css("overflow") && addResetCompListener(s)
    }).on("mouseenter", ".w_relationbtntab>.p_box001>.e_link", function (e) {
        $(this).parent().attr("data-mouseovertoggle") && $(this).trigger("click")
    }), $("body").on("mouseover", '.w_relationbtntab>.p_box001[data-mouseovertoggle="true"]>.e_link', function (e) {
        var t = $t = $(this),
            n = $(this).closest(".w_relationbtntab"),
            i = n.find(">.p_box001>.e_link"),
            r = n.find(">.p_box002>.e_box");
        t.siblings().find(".e_relationbtn").removeClass("active"), t.find(".e_relationbtn").addClass("active"), r.removeClass("active"), r.eq(i.index(t)).addClass("active"), $(this).trigger("tabEvent", r.eq(i.index(t)));
        var o = $(this).index(".e_link"),
            a = $(this).closest(".w_relationbtntab").find(".p_box002>div").eq(o),
            s = $(this).closest(".w_relationbtntab").parent().attr("id");
        "hidden" == a.css("overflow") && addResetCompListener(s)
    }), $("body").on("click", ".w_relationbtnbar>.e_link", function (e) {
        var t = $(this);
        t.siblings().find(".e_relationbtn").removeClass("active"), t.find(".e_relationbtn").addClass("active")
    }), $(".p_cbox").each(function () {
        $(this).attr("gScrolled", $(window).scrollTop())
    }), $(window).on("scroll", function () {
        $(".p_cbox").each(function () {
            var e, t, n, i, r;
            e = $(this), $(window), t = e.attr("speed"), n = e.attr("flag"), i = $(window).scrollTop(), r = (i - parseFloat(e.attr("gScrolled"))) * t, e.find(">div").each(function () {
                if ($(window).height() + $(window).scrollTop() > $(this).offset().top) {
                    var e = parseFloat($(this).css("background-position-y"));
                    "opposite" == n ? $(this).css("background-position-y", e - r) : "same" == n && $(this).css("background-position-y", e + r)
                } else $(this).css("background-position", "center center")
            }), e.attr("gScrolled", i)
        })
    })
});