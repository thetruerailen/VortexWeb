/*! For license information please see index.js.LICENSE.txt */
(() => {
   var e, n, t = {
         894: (e, n, t) => {
            "use strict";
            t.d(n, {
               Z: () => s
            });
            var r = t(272),
               a = t.n(r),
               i = t(609),
               o = t.n(i)()(a());
            o.push([e.id, ":root {\n    --ruffle-blue: #000;\n    --ruffle-orange: #ffad33;\n    --splash-screen-background: #1c1c1b;\n}\n\nbody {\n    position: absolute;\n    inset: 0;\n    padding: 0;\n    margin: 0;\n    font-family: Lato, sans-serif;\n    display: flex;\n    flex-flow: column;\n    background: black;\n}\n\n#main {\n    position: relative;\n    flex: 1;\n}\n\n#overlay {\n    position: absolute;\n    inset: 0;\n    z-index: 1;\n    pointer-events: none;\n    border: 8px dashed var(--ruffle-orange);\n    border-radius: 30px;\n    opacity: 0;\n    transition: opacity 0.3s ease-in;\n    margin: 10px 5px;\n}\n\n#overlay.drag {\n    opacity: 1;\n    transition-timing-function: ease-out;\n}\n\n#player {\n    position: absolute;\n    inset: 0;\n    width: auto;\n    height: auto;\n    margin: 10px 0;\n}\n\n#nav {\n    width: 100%;\n    background: var(--ruffle-blue);\n    box-shadow: 0 3px 6px 5px var(--ruffle-blue);\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    color: white;\n    padding: 10px 0 5px;\n    margin-bottom: 5px;\n}\n\n#title {\n    transition: opacity 0.5s;\n}\n\n#title:hover {\n    opacity: 0.5;\n}\n\n#title img {\n    height: 32px;left: -100vw;position: relative;\n}\n\n#file-picker select,\n#file-picker input,\n#author {\n    margin-left: 5px;\n}\n\n#local-file-container,\n#sample-swfs-container {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n#local-file {\n    width: 0;\n    opacity: 0;\n    position: absolute;\n}\n\n#local-file-label {\n    color: var(--ruffle-blue);\n    padding: 3px 10px;\n    margin: 5px 2px;\n    cursor: pointer;\n    border-radius: 50px;\n    background-color: white;\n}\n\n#local-file-name {\n    min-width: 150px;\n    display: inline-block;\n    font-size: smaller;\n}\n\n#sample-swfs {\n    background-color: white;\n    color: var(--ruffle-blue);\n    border: 1px solid white;\n    border-radius: 5px;\n}\n\n#author-container {\n    font-size: small;\n}\n\n#author {\n    color: var(--ruffle-orange);\n}\n\n.hidden {\n    display: none !important;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.modal-content {\n    background-color: var(--ruffle-blue);\n    margin: 15vh auto;\n    padding: 20px;\n    border: 2px solid white;\n    width: 300px;\n    height: 270px;\n    overflow: auto;\n}\n\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n#open-modal,\n#reload-swf {\n    vertical-align: middle;\n    cursor: pointer;\n}\n\n#metadata {\n    margin: 0 auto;\n}\n\n#metadata td {\n    padding: 2px 1px;\n    border: 1px solid #ddd;\n    color: var(--ruffle-orange);\n}\n\n#metadata tr td:nth-child(1) {\n    font-weight: bold;\n    padding: 0 10px;\n}\n\n@media only screen and (width <= 800px) {\n    #local-file-container,\n    #sample-swfs-container {\n        display: block;\n    }\n\n    #local-file-container {\n        margin-bottom: 10px;\n    }\n}\n\n@media only screen and (width <= 600px) {\n    #local-file-static-label,\n    #sample-swfs-label {\n        display: block;\n        margin-bottom: 5px;\n    }\n\n    #author-container {\n        font-size: 12px;\n        text-align: center;\n    }\n\n    #nav {\n        flex-flow: column;\n    }\n}\n", "", {
               version: 3,
               sources: ["webpack://./www/index.css"],
               names: [],
               mappings: "AAAA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,SAAS;IACT,6BAA6B;IAC7B,aAAa;IACb,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,OAAO;AACX;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,oBAAoB;IACpB,uCAAuC;IACvC,mBAAmB;IACnB,UAAU;IACV,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,8BAA8B;IAC9B,4CAA4C;IAC5C,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;;;IAGI,gBAAgB;AACpB;;AAEA;;IAEI,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,QAAQ;IACR,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI;;QAEI,cAAc;IAClB;;IAEA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;;QAEI,cAAc;QACd,kBAAkB;IACtB;;IAEA;QACI,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;IACrB;AACJ",
               sourcesContent: [":root {\n    --ruffle-blue: #000;\n    --ruffle-orange: #ffad33;\n    --splash-screen-background: #31497d;\n}\n\nbody {\n    position: absolute;\n    inset: 0;\n    padding: 0;\n    margin: 0;\n    font-family: Lato, sans-serif;\n    display: flex;\n    flex-flow: column;\n    background: black;\n}\n\n#main {\n    position: relative;\n    flex: 1;\n}\n\n#overlay {\n    position: absolute;\n    inset: 0;\n    z-index: 1;\n    pointer-events: none;\n    border: 8px dashed var(--ruffle-orange);\n    border-radius: 30px;\n    opacity: 0;\n    transition: opacity 0.3s ease-in;\n    margin: 10px 5px;\n}\n\n#overlay.drag {\n    opacity: 1;\n    transition-timing-function: ease-out;\n}\n\n#player {\n    position: absolute;\n    inset: 0;\n    width: auto;\n    height: auto;\n    margin: 10px 0;\n}\n\n#nav {\n    width: 100%;\n    background: var(--ruffle-blue);\n    box-shadow: 0 3px 6px 5px var(--ruffle-blue);\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    color: white;\n    padding: 10px 0 5px;\n    margin-bottom: 5px;\n}\n\n#title {\n    transition: opacity 0.5s;\n}\n\n#title:hover {\n    opacity: 0.5;\n}\n\n#title img {\n    height: 32px;\n}\n\n#file-picker select,\n#file-picker input,\n#author {\n    margin-left: 5px;\n}\n\n#local-file-container,\n#sample-swfs-container {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n#local-file {\n    width: 0;\n    opacity: 0;\n    position: absolute;\n}\n\n#local-file-label {\n    color: var(--ruffle-blue);\n    padding: 3px 10px;\n    margin: 5px 2px;\n    cursor: pointer;\n    border-radius: 50px;\n    background-color: white;\n}\n\n#local-file-name {\n    min-width: 150px;\n    display: inline-block;\n    font-size: smaller;\n}\n\n#sample-swfs {\n    background-color: white;\n    color: var(--ruffle-blue);\n    border: 1px solid white;\n    border-radius: 5px;\n}\n\n#author-container {\n    font-size: small;\n}\n\n#author {\n    color: var(--ruffle-orange);\n}\n\n.hidden {\n    display: none !important;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.modal-content {\n    background-color: var(--ruffle-blue);\n    margin: 15vh auto;\n    padding: 20px;\n    border: 2px solid white;\n    width: 300px;\n    height: 270px;\n    overflow: auto;\n}\n\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n#open-modal,\n#reload-swf {\n    vertical-align: middle;\n    cursor: pointer;\n}\n\n#metadata {\n    margin: 0 auto;\n}\n\n#metadata td {\n    padding: 2px 1px;\n    border: 1px solid #ddd;\n    color: var(--ruffle-orange);\n}\n\n#metadata tr td:nth-child(1) {\n    font-weight: bold;\n    padding: 0 10px;\n}\n\n@media only screen and (width <= 800px) {\n    #local-file-container,\n    #sample-swfs-container {\n        display: block;\n    }\n\n    #local-file-container {\n        margin-bottom: 10px;\n    }\n}\n\n@media only screen and (width <= 600px) {\n    #local-file-static-label,\n    #sample-swfs-label {\n        display: block;\n        margin-bottom: 5px;\n    }\n\n    #author-container {\n        font-size: 12px;\n        text-align: center;\n    }\n\n    #nav {\n        flex-flow: column;\n    }\n}\n"],
               sourceRoot: ""
            }]);
            const s = o
         },
         609: e => {
            "use strict";
            e.exports = function (e) {
               var n = [];
               return n.toString = function () {
                  return this.map((function (n) {
                     var t = "",
                        r = void 0 !== n[5];
                     return n[4] && (t += "@supports (".concat(n[4], ") {")), n[2] && (t += "@media ".concat(n[2], " {")), r && (t += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), t += e(n), r && (t += "}"), n[2] && (t += "}"), n[4] && (t += "}"), t
                  })).join("")
               }, n.i = function (e, t, r, a, i) {
                  "string" == typeof e && (e = [
                     [null, e, void 0]
                  ]);
                  var o = {};
                  if (r)
                     for (var s = 0; s < this.length; s++) {
                        var l = this[s][0];
                        null != l && (o[l] = !0)
                     }
                  for (var u = 0; u < e.length; u++) {
                     var c = [].concat(e[u]);
                     r && o[c[0]] || (void 0 !== i && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = i), t && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = t) : c[2] = t), a && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = a) : c[4] = "".concat(a)), n.push(c))
                  }
               }, n
            }
         },
         272: e => {
            "use strict";
            e.exports = function (e) {
               var n = e[1],
                  t = e[3];
               if (!t) return n;
               if ("function" == typeof btoa) {
                  var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                     a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
                     i = "/*# ".concat(a, " */");
                  return [n].concat([i]).join("\n")
               }
               return [n].join("\n")
            }
         },
         297: (e, n, t) => {
            e.exports = function e(n, t, r) {
               function a(o, s) {
                  if (!t[o]) {
                     if (!n[o]) {
                        if (i) return i(o, !0);
                        var l = new Error("Cannot find module '" + o + "'");
                        throw l.code = "MODULE_NOT_FOUND", l
                     }
                     var u = t[o] = {
                        exports: {}
                     };
                     n[o][0].call(u.exports, (function (e) {
                        return a(n[o][1][e] || e)
                     }), u, u.exports, e, n, t, r)
                  }
                  return t[o].exports
               }
               for (var i = void 0, o = 0; o < r.length; o++) a(r[o]);
               return a
            }({
               1: [function (e, n, t) {
                  "use strict";
                  var r = e("./utils"),
                     a = e("./support"),
                     i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                  t.encode = function (e) {
                     for (var n, t, a, o, s, l, u, c = [], d = 0, f = e.length, h = f, m = "string" !== r.getTypeOf(e); d < e.length;) h = f - d, a = m ? (n = e[d++], t = d < f ? e[d++] : 0, d < f ? e[d++] : 0) : (n = e.charCodeAt(d++), t = d < f ? e.charCodeAt(d++) : 0, d < f ? e.charCodeAt(d++) : 0), o = n >> 2, s = (3 & n) << 4 | t >> 4, l = 1 < h ? (15 & t) << 2 | a >> 6 : 64, u = 2 < h ? 63 & a : 64, c.push(i.charAt(o) + i.charAt(s) + i.charAt(l) + i.charAt(u));
                     return c.join("")
                  }, t.decode = function (e) {
                     var n, t, r, o, s, l, u = 0,
                        c = 0,
                        d = "data:";
                     if (e.substr(0, 5) === d) throw new Error("Invalid base64 input, it looks like a data url.");
                     var f, h = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
                     if (e.charAt(e.length - 1) === i.charAt(64) && h--, e.charAt(e.length - 2) === i.charAt(64) && h--, h % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
                     for (f = a.uint8array ? new Uint8Array(0 | h) : new Array(0 | h); u < e.length;) n = i.indexOf(e.charAt(u++)) << 2 | (o = i.indexOf(e.charAt(u++))) >> 4, t = (15 & o) << 4 | (s = i.indexOf(e.charAt(u++))) >> 2, r = (3 & s) << 6 | (l = i.indexOf(e.charAt(u++))), f[c++] = n, 64 !== s && (f[c++] = t), 64 !== l && (f[c++] = r);
                     return f
                  }
               }, {
                  "./support": 30,
                  "./utils": 32
               }],
               2: [function (e, n, t) {
                  "use strict";
                  var r = e("./external"),
                     a = e("./stream/DataWorker"),
                     i = e("./stream/Crc32Probe"),
                     o = e("./stream/DataLengthProbe");

                  function s(e, n, t, r, a) {
                     this.compressedSize = e, this.uncompressedSize = n, this.crc32 = t, this.compression = r, this.compressedContent = a
                  }
                  s.prototype = {
                     getContentWorker: function () {
                        var e = new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")),
                           n = this;
                        return e.on("end", (function () {
                           if (this.streamInfo.data_length !== n.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch")
                        })), e
                     },
                     getCompressedWorker: function () {
                        return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression)
                     }
                  }, s.createWorkerFrom = function (e, n, t) {
                     return e.pipe(new i).pipe(new o("uncompressedSize")).pipe(n.compressWorker(t)).pipe(new o("compressedSize")).withStreamInfo("compression", n)
                  }, n.exports = s
               }, {
                  "./external": 6,
                  "./stream/Crc32Probe": 25,
                  "./stream/DataLengthProbe": 26,
                  "./stream/DataWorker": 27
               }],
               3: [function (e, n, t) {
                  "use strict";
                  var r = e("./stream/GenericWorker");
                  t.STORE = {
                     magic: "\0\0",
                     compressWorker: function () {
                        return new r("STORE compression")
                     },
                     uncompressWorker: function () {
                        return new r("STORE decompression")
                     }
                  }, t.DEFLATE = e("./flate")
               }, {
                  "./flate": 7,
                  "./stream/GenericWorker": 28
               }],
               4: [function (e, n, t) {
                  "use strict";
                  var r = e("./utils"),
                     a = function () {
                        for (var e, n = [], t = 0; t < 256; t++) {
                           e = t;
                           for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                           n[t] = e
                        }
                        return n
                     }();
                  n.exports = function (e, n) {
                     return void 0 !== e && e.length ? "string" !== r.getTypeOf(e) ? function (e, n, t, r) {
                        var i = a,
                           o = 0 + t;
                        e ^= -1;
                        for (var s = 0; s < o; s++) e = e >>> 8 ^ i[255 & (e ^ n[s])];
                        return -1 ^ e
                     }(0 | n, e, e.length) : function (e, n, t, r) {
                        var i = a,
                           o = 0 + t;
                        e ^= -1;
                        for (var s = 0; s < o; s++) e = e >>> 8 ^ i[255 & (e ^ n.charCodeAt(s))];
                        return -1 ^ e
                     }(0 | n, e, e.length) : 0
                  }
               }, {
                  "./utils": 32
               }],
               5: [function (e, n, t) {
                  "use strict";
                  t.base64 = !1, t.binary = !1, t.dir = !1, t.createFolders = !0, t.date = null, t.compression = null, t.compressionOptions = null, t.comment = null, t.unixPermissions = null, t.dosPermissions = null
               }, {}],
               6: [function (e, n, t) {
                  "use strict";
                  var r;
                  r = "undefined" != typeof Promise ? Promise : e("lie"), n.exports = {
                     Promise: r
                  }
               }, {
                  lie: 37
               }],
               7: [function (e, n, t) {
                  "use strict";
                  var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
                     a = e("pako"),
                     i = e("./utils"),
                     o = e("./stream/GenericWorker"),
                     s = r ? "uint8array" : "array";

                  function l(e, n) {
                     o.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = n, this.meta = {}
                  }
                  t.magic = "\b\0", i.inherits(l, o), l.prototype.processChunk = function (e) {
                     this.meta = e.meta, null === this._pako && this._createPako(), this._pako.push(i.transformTo(s, e.data), !1)
                  }, l.prototype.flush = function () {
                     o.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0)
                  }, l.prototype.cleanUp = function () {
                     o.prototype.cleanUp.call(this), this._pako = null
                  }, l.prototype._createPako = function () {
                     this._pako = new a[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1
                     });
                     var e = this;
                     this._pako.onData = function (n) {
                        e.push({
                           data: n,
                           meta: e.meta
                        })
                     }
                  }, t.compressWorker = function (e) {
                     return new l("Deflate", e)
                  }, t.uncompressWorker = function () {
                     return new l("Inflate", {})
                  }
               }, {
                  "./stream/GenericWorker": 28,
                  "./utils": 32,
                  pako: 38
               }],
               8: [function (e, n, t) {
                  "use strict";

                  function r(e, n) {
                     var t, r = "";
                     for (t = 0; t < n; t++) r += String.fromCharCode(255 & e), e >>>= 8;
                     return r
                  }

                  function a(e, n, t, a, o, c) {
                     var d, f, h = e.file,
                        m = e.compression,
                        p = c !== s.utf8encode,
                        v = i.transformTo("string", c(h.name)),
                        g = i.transformTo("string", s.utf8encode(h.name)),
                        b = h.comment,
                        w = i.transformTo("string", c(b)),
                        k = i.transformTo("string", s.utf8encode(b)),
                        y = g.length !== h.name.length,
                        x = k.length !== b.length,
                        A = "",
                        _ = "",
                        R = "",
                        S = h.dir,
                        z = h.date,
                        C = {
                           crc32: 0,
                           compressedSize: 0,
                           uncompressedSize: 0
                        };
                     n && !t || (C.crc32 = e.crc32, C.compressedSize = e.compressedSize, C.uncompressedSize = e.uncompressedSize);
                     var E = 0;
                     n && (E |= 8), p || !y && !x || (E |= 2048);
                     var I = 0,
                        j = 0;
                     S && (I |= 16), "UNIX" === o ? (j = 798, I |= function (e, n) {
                        var t = e;
                        return e || (t = n ? 16893 : 33204), (65535 & t) << 16
                     }(h.unixPermissions, S)) : (j = 20, I |= function (e) {
                        return 63 & (e || 0)
                     }(h.dosPermissions)), d = z.getUTCHours(), d <<= 6, d |= z.getUTCMinutes(), d <<= 5, d |= z.getUTCSeconds() / 2, f = z.getUTCFullYear() - 1980, f <<= 4, f |= z.getUTCMonth() + 1, f <<= 5, f |= z.getUTCDate(), y && (_ = r(1, 1) + r(l(v), 4) + g, A += "up" + r(_.length, 2) + _), x && (R = r(1, 1) + r(l(w), 4) + k, A += "uc" + r(R.length, 2) + R);
                     var B = "";
                     return B += "\n\0", B += r(E, 2), B += m.magic, B += r(d, 2), B += r(f, 2), B += r(C.crc32, 4), B += r(C.compressedSize, 4), B += r(C.uncompressedSize, 4), B += r(v.length, 2), B += r(A.length, 2), {
                        fileRecord: u.LOCAL_FILE_HEADER + B + v + A,
                        dirRecord: u.CENTRAL_FILE_HEADER + r(j, 2) + B + r(w.length, 2) + "\0\0\0\0" + r(I, 4) + r(a, 4) + v + A + w
                     }
                  }
                  var i = e("../utils"),
                     o = e("../stream/GenericWorker"),
                     s = e("../utf8"),
                     l = e("../crc32"),
                     u = e("../signature");

                  function c(e, n, t, r) {
                     o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = n, this.zipPlatform = t, this.encodeFileName = r, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = []
                  }
                  i.inherits(c, o), c.prototype.push = function (e) {
                     var n = e.meta.percent || 0,
                        t = this.entriesCount,
                        r = this._sources.length;
                     this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, o.prototype.push.call(this, {
                        data: e.data,
                        meta: {
                           currentFile: this.currentFile,
                           percent: t ? (n + 100 * (t - r - 1)) / t : 100
                        }
                     }))
                  }, c.prototype.openedSource = function (e) {
                     this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
                     var n = this.streamFiles && !e.file.dir;
                     if (n) {
                        var t = a(e, n, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                        this.push({
                           data: t.fileRecord,
                           meta: {
                              percent: 0
                           }
                        })
                     } else this.accumulate = !0
                  }, c.prototype.closedSource = function (e) {
                     this.accumulate = !1;
                     var n = this.streamFiles && !e.file.dir,
                        t = a(e, n, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                     if (this.dirRecords.push(t.dirRecord), n) this.push({
                        data: function (e) {
                           return u.DATA_DESCRIPTOR + r(e.crc32, 4) + r(e.compressedSize, 4) + r(e.uncompressedSize, 4)
                        }(e),
                        meta: {
                           percent: 100
                        }
                     });
                     else
                        for (this.push({
                              data: t.fileRecord,
                              meta: {
                                 percent: 0
                              }
                           }); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
                     this.currentFile = null
                  }, c.prototype.flush = function () {
                     for (var e = this.bytesWritten, n = 0; n < this.dirRecords.length; n++) this.push({
                        data: this.dirRecords[n],
                        meta: {
                           percent: 100
                        }
                     });
                     var t = this.bytesWritten - e,
                        a = function (e, n, t, a, o) {
                           var s = i.transformTo("string", o(a));
                           return u.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(e, 2) + r(e, 2) + r(n, 4) + r(t, 4) + r(s.length, 2) + s
                        }(this.dirRecords.length, t, e, this.zipComment, this.encodeFileName);
                     this.push({
                        data: a,
                        meta: {
                           percent: 100
                        }
                     })
                  }, c.prototype.prepareNextSource = function () {
                     this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume()
                  }, c.prototype.registerPrevious = function (e) {
                     this._sources.push(e);
                     var n = this;
                     return e.on("data", (function (e) {
                        n.processChunk(e)
                     })), e.on("end", (function () {
                        n.closedSource(n.previous.streamInfo), n._sources.length ? n.prepareNextSource() : n.end()
                     })), e.on("error", (function (e) {
                        n.error(e)
                     })), this
                  }, c.prototype.resume = function () {
                     return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0))
                  }, c.prototype.error = function (e) {
                     var n = this._sources;
                     if (!o.prototype.error.call(this, e)) return !1;
                     for (var t = 0; t < n.length; t++) try {
                        n[t].error(e)
                     } catch (e) {}
                     return !0
                  }, c.prototype.lock = function () {
                     o.prototype.lock.call(this);
                     for (var e = this._sources, n = 0; n < e.length; n++) e[n].lock()
                  }, n.exports = c
               }, {
                  "../crc32": 4,
                  "../signature": 23,
                  "../stream/GenericWorker": 28,
                  "../utf8": 31,
                  "../utils": 32
               }],
               9: [function (e, n, t) {
                  "use strict";
                  var r = e("../compressions"),
                     a = e("./ZipFileWorker");
                  t.generateWorker = function (e, n, t) {
                     var i = new a(n.streamFiles, t, n.platform, n.encodeFileName),
                        o = 0;
                     try {
                        e.forEach((function (e, t) {
                           o++;
                           var a = function (e, n) {
                                 var t = e || n,
                                    a = r[t];
                                 if (!a) throw new Error(t + " is not a valid compression method !");
                                 return a
                              }(t.options.compression, n.compression),
                              s = t.options.compressionOptions || n.compressionOptions || {},
                              l = t.dir,
                              u = t.date;
                           t._compressWorker(a, s).withStreamInfo("file", {
                              name: e,
                              dir: l,
                              date: u,
                              comment: t.comment || "",
                              unixPermissions: t.unixPermissions,
                              dosPermissions: t.dosPermissions
                           }).pipe(i)
                        })), i.entriesCount = o
                     } catch (e) {
                        i.error(e)
                     }
                     return i
                  }
               }, {
                  "../compressions": 3,
                  "./ZipFileWorker": 8
               }],
               10: [function (e, n, t) {
                  "use strict";

                  function r() {
                     if (!(this instanceof r)) return new r;
                     if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                     this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function () {
                        var e = new r;
                        for (var n in this) "function" != typeof this[n] && (e[n] = this[n]);
                        return e
                     }
                  }(r.prototype = e("./object")).loadAsync = e("./load"), r.support = e("./support"), r.defaults = e("./defaults"), r.version = "3.10.1", r.loadAsync = function (e, n) {
                     return (new r).loadAsync(e, n)
                  }, r.external = e("./external"), n.exports = r
               }, {
                  "./defaults": 5,
                  "./external": 6,
                  "./load": 11,
                  "./object": 15,
                  "./support": 30
               }],
               11: [function (e, n, t) {
                  "use strict";
                  var r = e("./utils"),
                     a = e("./external"),
                     i = e("./utf8"),
                     o = e("./zipEntries"),
                     s = e("./stream/Crc32Probe"),
                     l = e("./nodejsUtils");

                  function u(e) {
                     return new a.Promise((function (n, t) {
                        var r = e.decompressed.getContentWorker().pipe(new s);
                        r.on("error", (function (e) {
                           t(e)
                        })).on("end", (function () {
                           r.streamInfo.crc32 !== e.decompressed.crc32 ? t(new Error("Corrupted zip : CRC32 mismatch")) : n()
                        })).resume()
                     }))
                  }
                  n.exports = function (e, n) {
                     var t = this;
                     return n = r.extend(n || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: i.utf8decode
                     }), l.isNode && l.isStream(e) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", e, !0, n.optimizedBinaryString, n.base64).then((function (e) {
                        var t = new o(n);
                        return t.load(e), t
                     })).then((function (e) {
                        var t = [a.Promise.resolve(e)],
                           r = e.files;
                        if (n.checkCRC32)
                           for (var i = 0; i < r.length; i++) t.push(u(r[i]));
                        return a.Promise.all(t)
                     })).then((function (e) {
                        for (var a = e.shift(), i = a.files, o = 0; o < i.length; o++) {
                           var s = i[o],
                              l = s.fileNameStr,
                              u = r.resolve(s.fileNameStr);
                           t.file(u, s.decompressed, {
                              binary: !0,
                              optimizedBinaryString: !0,
                              date: s.date,
                              dir: s.dir,
                              comment: s.fileCommentStr.length ? s.fileCommentStr : null,
                              unixPermissions: s.unixPermissions,
                              dosPermissions: s.dosPermissions,
                              createFolders: n.createFolders
                           }), s.dir || (t.file(u).unsafeOriginalName = l)
                        }
                        return a.zipComment.length && (t.comment = a.zipComment), t
                     }))
                  }
               }, {
                  "./external": 6,
                  "./nodejsUtils": 14,
                  "./stream/Crc32Probe": 25,
                  "./utf8": 31,
                  "./utils": 32,
                  "./zipEntries": 33
               }],
               12: [function (e, n, t) {
                  "use strict";
                  var r = e("../utils"),
                     a = e("../stream/GenericWorker");

                  function i(e, n) {
                     a.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(n)
                  }
                  r.inherits(i, a), i.prototype._bindStream = function (e) {
                     var n = this;
                     (this._stream = e).pause(), e.on("data", (function (e) {
                        n.push({
                           data: e,
                           meta: {
                              percent: 0
                           }
                        })
                     })).on("error", (function (e) {
                        n.isPaused ? this.generatedError = e : n.error(e)
                     })).on("end", (function () {
                        n.isPaused ? n._upstreamEnded = !0 : n.end()
                     }))
                  }, i.prototype.pause = function () {
                     return !!a.prototype.pause.call(this) && (this._stream.pause(), !0)
                  }, i.prototype.resume = function () {
                     return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
                  }, n.exports = i
               }, {
                  "../stream/GenericWorker": 28,
                  "../utils": 32
               }],
               13: [function (e, n, t) {
                  "use strict";
                  var r = e("readable-stream").Readable;

                  function a(e, n, t) {
                     r.call(this, n), this._helper = e;
                     var a = this;
                     e.on("data", (function (e, n) {
                        a.push(e) || a._helper.pause(), t && t(n)
                     })).on("error", (function (e) {
                        a.emit("error", e)
                     })).on("end", (function () {
                        a.push(null)
                     }))
                  }
                  e("../utils").inherits(a, r), a.prototype._read = function () {
                     this._helper.resume()
                  }, n.exports = a
               }, {
                  "../utils": 32,
                  "readable-stream": 16
               }],
               14: [function (e, n, t) {
                  "use strict";
                  n.exports = {
                     isNode: "undefined" != typeof Buffer,
                     newBufferFrom: function (e, n) {
                        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, n);
                        if ("number" == typeof e) throw new Error('The "data" argument must not be a number');
                        return new Buffer(e, n)
                     },
                     allocBuffer: function (e) {
                        if (Buffer.alloc) return Buffer.alloc(e);
                        var n = new Buffer(e);
                        return n.fill(0), n
                     },
                     isBuffer: function (e) {
                        return Buffer.isBuffer(e)
                     },
                     isStream: function (e) {
                        return e && "function" == typeof e.on && "function" == typeof e.pause && "function" == typeof e.resume
                     }
                  }
               }, {}],
               15: [function (e, n, t) {
                  "use strict";

                  function r(e, n, t) {
                     var r, a = i.getTypeOf(n),
                        s = i.extend(t || {}, l);
                     s.date = s.date || new Date, null !== s.compression && (s.compression = s.compression.toUpperCase()), "string" == typeof s.unixPermissions && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (e = p(e)), s.createFolders && (r = m(e)) && v.call(this, r, !0);
                     var d = "string" === a && !1 === s.binary && !1 === s.base64;
                     t && void 0 !== t.binary || (s.binary = !d), (n instanceof u && 0 === n.uncompressedSize || s.dir || !n || 0 === n.length) && (s.base64 = !1, s.binary = !0, n = "", s.compression = "STORE", a = "string");
                     var g;
                     g = n instanceof u || n instanceof o ? n : f.isNode && f.isStream(n) ? new h(e, n) : i.prepareContent(e, n, s.binary, s.optimizedBinaryString, s.base64);
                     var b = new c(e, g, s);
                     this.files[e] = b
                  }
                  var a = e("./utf8"),
                     i = e("./utils"),
                     o = e("./stream/GenericWorker"),
                     s = e("./stream/StreamHelper"),
                     l = e("./defaults"),
                     u = e("./compressedObject"),
                     c = e("./zipObject"),
                     d = e("./generate"),
                     f = e("./nodejsUtils"),
                     h = e("./nodejs/NodejsStreamInputAdapter"),
                     m = function (e) {
                        "/" === e.slice(-1) && (e = e.substring(0, e.length - 1));
                        var n = e.lastIndexOf("/");
                        return 0 < n ? e.substring(0, n) : ""
                     },
                     p = function (e) {
                        return "/" !== e.slice(-1) && (e += "/"), e
                     },
                     v = function (e, n) {
                        return n = void 0 !== n ? n : l.createFolders, e = p(e), this.files[e] || r.call(this, e, null, {
                           dir: !0,
                           createFolders: n
                        }), this.files[e]
                     };

                  function g(e) {
                     return "[object RegExp]" === Object.prototype.toString.call(e)
                  }
                  var b = {
                     load: function () {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                     },
                     forEach: function (e) {
                        var n, t, r;
                        for (n in this.files) r = this.files[n], (t = n.slice(this.root.length, n.length)) && n.slice(0, this.root.length) === this.root && e(t, r)
                     },
                     filter: function (e) {
                        var n = [];
                        return this.forEach((function (t, r) {
                           e(t, r) && n.push(r)
                        })), n
                     },
                     file: function (e, n, t) {
                        if (1 !== arguments.length) return e = this.root + e, r.call(this, e, n, t), this;
                        if (g(e)) {
                           var a = e;
                           return this.filter((function (e, n) {
                              return !n.dir && a.test(e)
                           }))
                        }
                        var i = this.files[this.root + e];
                        return i && !i.dir ? i : null
                     },
                     folder: function (e) {
                        if (!e) return this;
                        if (g(e)) return this.filter((function (n, t) {
                           return t.dir && e.test(n)
                        }));
                        var n = this.root + e,
                           t = v.call(this, n),
                           r = this.clone();
                        return r.root = t.name, r
                     },
                     remove: function (e) {
                        e = this.root + e;
                        var n = this.files[e];
                        if (n || ("/" !== e.slice(-1) && (e += "/"), n = this.files[e]), n && !n.dir) delete this.files[e];
                        else
                           for (var t = this.filter((function (n, t) {
                                 return t.name.slice(0, e.length) === e
                              })), r = 0; r < t.length; r++) delete this.files[t[r].name];
                        return this
                     },
                     generate: function () {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                     },
                     generateInternalStream: function (e) {
                        var n, t = {};
                        try {
                           if ((t = i.extend(e || {}, {
                                 streamFiles: !1,
                                 compression: "STORE",
                                 compressionOptions: null,
                                 type: "",
                                 platform: "DOS",
                                 comment: null,
                                 mimeType: "application/zip",
                                 encodeFileName: a.utf8encode
                              })).type = t.type.toLowerCase(), t.compression = t.compression.toUpperCase(), "binarystring" === t.type && (t.type = "string"), !t.type) throw new Error("No output type specified.");
                           i.checkSupport(t.type), "darwin" !== t.platform && "freebsd" !== t.platform && "linux" !== t.platform && "sunos" !== t.platform || (t.platform = "UNIX"), "win32" === t.platform && (t.platform = "DOS");
                           var r = t.comment || this.comment || "";
                           n = d.generateWorker(this, t, r)
                        } catch (e) {
                           (n = new o("error")).error(e)
                        }
                        return new s(n, t.type || "string", t.mimeType)
                     },
                     generateAsync: function (e, n) {
                        return this.generateInternalStream(e).accumulate(n)
                     },
                     generateNodeStream: function (e, n) {
                        return (e = e || {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(n)
                     }
                  };
                  n.exports = b
               }, {
                  "./compressedObject": 2,
                  "./defaults": 5,
                  "./generate": 9,
                  "./nodejs/NodejsStreamInputAdapter": 12,
                  "./nodejsUtils": 14,
                  "./stream/GenericWorker": 28,
                  "./stream/StreamHelper": 29,
                  "./utf8": 31,
                  "./utils": 32,
                  "./zipObject": 35
               }],
               16: [function (e, n, t) {
                  "use strict";
                  n.exports = e("stream")
               }, {
                  stream: void 0
               }],
               17: [function (e, n, t) {
                  "use strict";
                  var r = e("./DataReader");

                  function a(e) {
                     r.call(this, e);
                     for (var n = 0; n < this.data.length; n++) e[n] = 255 & e[n]
                  }
                  e("../utils").inherits(a, r), a.prototype.byteAt = function (e) {
                     return this.data[this.zero + e]
                  }, a.prototype.lastIndexOfSignature = function (e) {
                     for (var n = e.charCodeAt(0), t = e.charCodeAt(1), r = e.charCodeAt(2), a = e.charCodeAt(3), i = this.length - 4; 0 <= i; --i)
                        if (this.data[i] === n && this.data[i + 1] === t && this.data[i + 2] === r && this.data[i + 3] === a) return i - this.zero;
                     return -1
                  }, a.prototype.readAndCheckSignature = function (e) {
                     var n = e.charCodeAt(0),
                        t = e.charCodeAt(1),
                        r = e.charCodeAt(2),
                        a = e.charCodeAt(3),
                        i = this.readData(4);
                     return n === i[0] && t === i[1] && r === i[2] && a === i[3]
                  }, a.prototype.readData = function (e) {
                     if (this.checkOffset(e), 0 === e) return [];
                     var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                     return this.index += e, n
                  }, n.exports = a
               }, {
                  "../utils": 32,
                  "./DataReader": 18
               }],
               18: [function (e, n, t) {
                  "use strict";
                  var r = e("../utils");

                  function a(e) {
                     this.data = e, this.length = e.length, this.index = 0, this.zero = 0
                  }
                  a.prototype = {
                     checkOffset: function (e) {
                        this.checkIndex(this.index + e)
                     },
                     checkIndex: function (e) {
                        if (this.length < this.zero + e || e < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?")
                     },
                     setIndex: function (e) {
                        this.checkIndex(e), this.index = e
                     },
                     skip: function (e) {
                        this.setIndex(this.index + e)
                     },
                     byteAt: function () {},
                     readInt: function (e) {
                        var n, t = 0;
                        for (this.checkOffset(e), n = this.index + e - 1; n >= this.index; n--) t = (t << 8) + this.byteAt(n);
                        return this.index += e, t
                     },
                     readString: function (e) {
                        return r.transformTo("string", this.readData(e))
                     },
                     readData: function () {},
                     lastIndexOfSignature: function () {},
                     readAndCheckSignature: function () {},
                     readDate: function () {
                        var e = this.readInt(4);
                        return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1))
                     }
                  }, n.exports = a
               }, {
                  "../utils": 32
               }],
               19: [function (e, n, t) {
                  "use strict";
                  var r = e("./Uint8ArrayReader");

                  function a(e) {
                     r.call(this, e)
                  }
                  e("../utils").inherits(a, r), a.prototype.readData = function (e) {
                     this.checkOffset(e);
                     var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                     return this.index += e, n
                  }, n.exports = a
               }, {
                  "../utils": 32,
                  "./Uint8ArrayReader": 21
               }],
               20: [function (e, n, t) {
                  "use strict";
                  var r = e("./DataReader");

                  function a(e) {
                     r.call(this, e)
                  }
                  e("../utils").inherits(a, r), a.prototype.byteAt = function (e) {
                     return this.data.charCodeAt(this.zero + e)
                  }, a.prototype.lastIndexOfSignature = function (e) {
                     return this.data.lastIndexOf(e) - this.zero
                  }, a.prototype.readAndCheckSignature = function (e) {
                     return e === this.readData(4)
                  }, a.prototype.readData = function (e) {
                     this.checkOffset(e);
                     var n = this.data.slice(this.zero + this.index, this.zero + this.index + e);
                     return this.index += e, n
                  }, n.exports = a
               }, {
                  "../utils": 32,
                  "./DataReader": 18
               }],
               21: [function (e, n, t) {
                  "use strict";
                  var r = e("./ArrayReader");

                  function a(e) {
                     r.call(this, e)
                  }
                  e("../utils").inherits(a, r), a.prototype.readData = function (e) {
                     if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
                     var n = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
                     return this.index += e, n
                  }, n.exports = a
               }, {
                  "../utils": 32,
                  "./ArrayReader": 17
               }],
               22: [function (e, n, t) {
                  "use strict";
                  var r = e("../utils"),
                     a = e("../support"),
                     i = e("./ArrayReader"),
                     o = e("./StringReader"),
                     s = e("./NodeBufferReader"),
                     l = e("./Uint8ArrayReader");
                  n.exports = function (e) {
                     var n = r.getTypeOf(e);
                     return r.checkSupport(n), "string" !== n || a.uint8array ? "nodebuffer" === n ? new s(e) : a.uint8array ? new l(r.transformTo("uint8array", e)) : new i(r.transformTo("array", e)) : new o(e)
                  }
               }, {
                  "../support": 30,
                  "../utils": 32,
                  "./ArrayReader": 17,
                  "./NodeBufferReader": 19,
                  "./StringReader": 20,
                  "./Uint8ArrayReader": 21
               }],
               23: [function (e, n, t) {
                  "use strict";
                  t.LOCAL_FILE_HEADER = "PK", t.CENTRAL_FILE_HEADER = "PK", t.CENTRAL_DIRECTORY_END = "PK", t.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", t.ZIP64_CENTRAL_DIRECTORY_END = "PK", t.DATA_DESCRIPTOR = "PK\b"
               }, {}],
               24: [function (e, n, t) {
                  "use strict";
                  var r = e("./GenericWorker"),
                     a = e("../utils");

                  function i(e) {
                     r.call(this, "ConvertWorker to " + e), this.destType = e
                  }
                  a.inherits(i, r), i.prototype.processChunk = function (e) {
                     this.push({
                        data: a.transformTo(this.destType, e.data),
                        meta: e.meta
                     })
                  }, n.exports = i
               }, {
                  "../utils": 32,
                  "./GenericWorker": 28
               }],
               25: [function (e, n, t) {
                  "use strict";
                  var r = e("./GenericWorker"),
                     a = e("../crc32");

                  function i() {
                     r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0)
                  }
                  e("../utils").inherits(i, r), i.prototype.processChunk = function (e) {
                     this.streamInfo.crc32 = a(e.data, this.streamInfo.crc32 || 0), this.push(e)
                  }, n.exports = i
               }, {
                  "../crc32": 4,
                  "../utils": 32,
                  "./GenericWorker": 28
               }],
               26: [function (e, n, t) {
                  "use strict";
                  var r = e("../utils"),
                     a = e("./GenericWorker");

                  function i(e) {
                     a.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0)
                  }
                  r.inherits(i, a), i.prototype.processChunk = function (e) {
                     if (e) {
                        var n = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = n + e.data.length
                     }
                     a.prototype.processChunk.call(this, e)
                  }, n.exports = i
               }, {
                  "../utils": 32,
                  "./GenericWorker": 28
               }],
               27: [function (e, n, t) {
                  "use strict";
                  var r = e("../utils"),
                     a = e("./GenericWorker");

                  function i(e) {
                     a.call(this, "DataWorker");
                     var n = this;
                     this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then((function (e) {
                        n.dataIsReady = !0, n.data = e, n.max = e && e.length || 0, n.type = r.getTypeOf(e), n.isPaused || n._tickAndRepeat()
                     }), (function (e) {
                        n.error(e)
                     }))
                  }
                  r.inherits(i, a), i.prototype.cleanUp = function () {
                     a.prototype.cleanUp.call(this), this.data = null
                  }, i.prototype.resume = function () {
                     return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, r.delay(this._tickAndRepeat, [], this)), !0)
                  }, i.prototype._tickAndRepeat = function () {
                     this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (r.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0))
                  }, i.prototype._tick = function () {
                     if (this.isPaused || this.isFinished) return !1;
                     var e = null,
                        n = Math.min(this.max, this.index + 16384);
                     if (this.index >= this.max) return this.end();
                     switch (this.type) {
                        case "string":
                           e = this.data.substring(this.index, n);
                           break;
                        case "uint8array":
                           e = this.data.subarray(this.index, n);
                           break;
                        case "array":
                        case "nodebuffer":
                           e = this.data.slice(this.index, n)
                     }
                     return this.index = n, this.push({
                        data: e,
                        meta: {
                           percent: this.max ? this.index / this.max * 100 : 0
                        }
                     })
                  }, n.exports = i
               }, {
                  "../utils": 32,
                  "./GenericWorker": 28
               }],
               28: [function (e, n, t) {
                  "use strict";

                  function r(e) {
                     this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
                        data: [],
                        end: [],
                        error: []
                     }, this.previous = null
                  }
                  r.prototype = {
                     push: function (e) {
                        this.emit("data", e)
                     },
                     end: function () {
                        if (this.isFinished) return !1;
                        this.flush();
                        try {
                           this.emit("end"), this.cleanUp(), this.isFinished = !0
                        } catch (e) {
                           this.emit("error", e)
                        }
                        return !0
                     },
                     error: function (e) {
                        return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0)
                     },
                     on: function (e, n) {
                        return this._listeners[e].push(n), this
                     },
                     cleanUp: function () {
                        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = []
                     },
                     emit: function (e, n) {
                        if (this._listeners[e])
                           for (var t = 0; t < this._listeners[e].length; t++) this._listeners[e][t].call(this, n)
                     },
                     pipe: function (e) {
                        return e.registerPrevious(this)
                     },
                     registerPrevious: function (e) {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
                        var n = this;
                        return e.on("data", (function (e) {
                           n.processChunk(e)
                        })), e.on("end", (function () {
                           n.end()
                        })), e.on("error", (function (e) {
                           n.error(e)
                        })), this
                     },
                     pause: function () {
                        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0)
                     },
                     resume: function () {
                        if (!this.isPaused || this.isFinished) return !1;
                        var e = this.isPaused = !1;
                        return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e
                     },
                     flush: function () {},
                     processChunk: function (e) {
                        this.push(e)
                     },
                     withStreamInfo: function (e, n) {
                        return this.extraStreamInfo[e] = n, this.mergeStreamInfo(), this
                     },
                     mergeStreamInfo: function () {
                        for (var e in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e])
                     },
                     lock: function () {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.isLocked = !0, this.previous && this.previous.lock()
                     },
                     toString: function () {
                        var e = "Worker " + this.name;
                        return this.previous ? this.previous + " -> " + e : e
                     }
                  }, n.exports = r
               }, {}],
               29: [function (e, n, t) {
                  "use strict";
                  var r = e("../utils"),
                     a = e("./ConvertWorker"),
                     i = e("./GenericWorker"),
                     o = e("../base64"),
                     s = e("../support"),
                     l = e("../external"),
                     u = null;
                  if (s.nodestream) try {
                     u = e("../nodejs/NodejsStreamOutputAdapter")
                  } catch (e) {}

                  function c(e, n, t) {
                     var o = n;
                     switch (n) {
                        case "blob":
                        case "arraybuffer":
                           o = "uint8array";
                           break;
                        case "base64":
                           o = "string"
                     }
                     try {
                        this._internalType = o, this._outputType = n, this._mimeType = t, r.checkSupport(o), this._worker = e.pipe(new a(o)), e.lock()
                     } catch (e) {
                        this._worker = new i("error"), this._worker.error(e)
                     }
                  }
                  c.prototype = {
                     accumulate: function (e) {
                        return function (e, n) {
                           return new l.Promise((function (t, a) {
                              var i = [],
                                 s = e._internalType,
                                 l = e._outputType,
                                 u = e._mimeType;
                              e.on("data", (function (e, t) {
                                 i.push(e), n && n(t)
                              })).on("error", (function (e) {
                                 i = [], a(e)
                              })).on("end", (function () {
                                 try {
                                    var e = function (e, n, t) {
                                       switch (e) {
                                          case "blob":
                                             return r.newBlob(r.transformTo("arraybuffer", n), t);
                                          case "base64":
                                             return o.encode(n);
                                          default:
                                             return r.transformTo(e, n)
                                       }
                                    }(l, function (e, n) {
                                       var t, r = 0,
                                          a = null,
                                          i = 0;
                                       for (t = 0; t < n.length; t++) i += n[t].length;
                                       switch (e) {
                                          case "string":
                                             return n.join("");
                                          case "array":
                                             return Array.prototype.concat.apply([], n);
                                          case "uint8array":
                                             for (a = new Uint8Array(i), t = 0; t < n.length; t++) a.set(n[t], r), r += n[t].length;
                                             return a;
                                          case "nodebuffer":
                                             return Buffer.concat(n);
                                          default:
                                             throw new Error("concat : unsupported type '" + e + "'")
                                       }
                                    }(s, i), u);
                                    t(e)
                                 } catch (e) {
                                    a(e)
                                 }
                                 i = []
                              })).resume()
                           }))
                        }(this, e)
                     },
                     on: function (e, n) {
                        var t = this;
                        return "data" === e ? this._worker.on(e, (function (e) {
                           n.call(t, e.data, e.meta)
                        })) : this._worker.on(e, (function () {
                           r.delay(n, arguments, t)
                        })), this
                     },
                     resume: function () {
                        return r.delay(this._worker.resume, [], this._worker), this
                     },
                     pause: function () {
                        return this._worker.pause(), this
                     },
                     toNodejsStream: function (e) {
                        if (r.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
                        return new u(this, {
                           objectMode: "nodebuffer" !== this._outputType
                        }, e)
                     }
                  }, n.exports = c
               }, {
                  "../base64": 1,
                  "../external": 6,
                  "../nodejs/NodejsStreamOutputAdapter": 13,
                  "../support": 30,
                  "../utils": 32,
                  "./ConvertWorker": 24,
                  "./GenericWorker": 28
               }],
               30: [function (e, n, t) {
                  "use strict";
                  if (t.base64 = !0, t.array = !0, t.string = !0, t.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, t.nodebuffer = "undefined" != typeof Buffer, t.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) t.blob = !1;
                  else {
                     var r = new ArrayBuffer(0);
                     try {
                        t.blob = 0 === new Blob([r], {
                           type: "application/zip"
                        }).size
                     } catch (e) {
                        try {
                           var a = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                           a.append(r), t.blob = 0 === a.getBlob("application/zip").size
                        } catch (e) {
                           t.blob = !1
                        }
                     }
                  }
                  try {
                     t.nodestream = !!e("readable-stream").Readable
                  } catch (e) {
                     t.nodestream = !1
                  }
               }, {
                  "readable-stream": 16
               }],
               31: [function (e, n, t) {
                  "use strict";
                  for (var r = e("./utils"), a = e("./support"), i = e("./nodejsUtils"), o = e("./stream/GenericWorker"), s = new Array(256), l = 0; l < 256; l++) s[l] = 252 <= l ? 6 : 248 <= l ? 5 : 240 <= l ? 4 : 224 <= l ? 3 : 192 <= l ? 2 : 1;

                  function u() {
                     o.call(this, "utf-8 decode"), this.leftOver = null
                  }

                  function c() {
                     o.call(this, "utf-8 encode")
                  }
                  s[254] = s[254] = 1, t.utf8encode = function (e) {
                     return a.nodebuffer ? i.newBufferFrom(e, "utf-8") : function (e) {
                        var n, t, r, i, o, s = e.length,
                           l = 0;
                        for (i = 0; i < s; i++) 55296 == (64512 & (t = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (r = e.charCodeAt(i + 1))) && (t = 65536 + (t - 55296 << 10) + (r - 56320), i++), l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                        for (n = a.uint8array ? new Uint8Array(l) : new Array(l), i = o = 0; o < l; i++) 55296 == (64512 & (t = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (r = e.charCodeAt(i + 1))) && (t = 65536 + (t - 55296 << 10) + (r - 56320), i++), t < 128 ? n[o++] = t : (t < 2048 ? n[o++] = 192 | t >>> 6 : (t < 65536 ? n[o++] = 224 | t >>> 12 : (n[o++] = 240 | t >>> 18, n[o++] = 128 | t >>> 12 & 63), n[o++] = 128 | t >>> 6 & 63), n[o++] = 128 | 63 & t);
                        return n
                     }(e)
                  }, t.utf8decode = function (e) {
                     return a.nodebuffer ? r.transformTo("nodebuffer", e).toString("utf-8") : function (e) {
                        var n, t, a, i, o = e.length,
                           l = new Array(2 * o);
                        for (n = t = 0; n < o;)
                           if ((a = e[n++]) < 128) l[t++] = a;
                           else if (4 < (i = s[a])) l[t++] = 65533, n += i - 1;
                        else {
                           for (a &= 2 === i ? 31 : 3 === i ? 15 : 7; 1 < i && n < o;) a = a << 6 | 63 & e[n++], i--;
                           1 < i ? l[t++] = 65533 : a < 65536 ? l[t++] = a : (a -= 65536, l[t++] = 55296 | a >> 10 & 1023, l[t++] = 56320 | 1023 & a)
                        }
                        return l.length !== t && (l.subarray ? l = l.subarray(0, t) : l.length = t), r.applyFromCharCode(l)
                     }(e = r.transformTo(a.uint8array ? "uint8array" : "array", e))
                  }, r.inherits(u, o), u.prototype.processChunk = function (e) {
                     var n = r.transformTo(a.uint8array ? "uint8array" : "array", e.data);
                     if (this.leftOver && this.leftOver.length) {
                        if (a.uint8array) {
                           var i = n;
                           (n = new Uint8Array(i.length + this.leftOver.length)).set(this.leftOver, 0), n.set(i, this.leftOver.length)
                        } else n = this.leftOver.concat(n);
                        this.leftOver = null
                     }
                     var o = function (e, n) {
                           var t;
                           for ((n = n || e.length) > e.length && (n = e.length), t = n - 1; 0 <= t && 128 == (192 & e[t]);) t--;
                           return t < 0 || 0 === t ? n : t + s[e[t]] > n ? t : n
                        }(n),
                        l = n;
                     o !== n.length && (a.uint8array ? (l = n.subarray(0, o), this.leftOver = n.subarray(o, n.length)) : (l = n.slice(0, o), this.leftOver = n.slice(o, n.length))), this.push({
                        data: t.utf8decode(l),
                        meta: e.meta
                     })
                  }, u.prototype.flush = function () {
                     this.leftOver && this.leftOver.length && (this.push({
                        data: t.utf8decode(this.leftOver),
                        meta: {}
                     }), this.leftOver = null)
                  }, t.Utf8DecodeWorker = u, r.inherits(c, o), c.prototype.processChunk = function (e) {
                     this.push({
                        data: t.utf8encode(e.data),
                        meta: e.meta
                     })
                  }, t.Utf8EncodeWorker = c
               }, {
                  "./nodejsUtils": 14,
                  "./stream/GenericWorker": 28,
                  "./support": 30,
                  "./utils": 32
               }],
               32: [function (e, n, t) {
                  "use strict";
                  var r = e("./support"),
                     a = e("./base64"),
                     i = e("./nodejsUtils"),
                     o = e("./external");

                  function s(e) {
                     return e
                  }

                  function l(e, n) {
                     for (var t = 0; t < e.length; ++t) n[t] = 255 & e.charCodeAt(t);
                     return n
                  }
                  e("setimmediate"), t.newBlob = function (e, n) {
                     t.checkSupport("blob");
                     try {
                        return new Blob([e], {
                           type: n
                        })
                     } catch (t) {
                        try {
                           var r = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                           return r.append(e), r.getBlob(n)
                        } catch (e) {
                           throw new Error("Bug : can't construct the Blob.")
                        }
                     }
                  };
                  var u = {
                     stringifyByChunk: function (e, n, t) {
                        var r = [],
                           a = 0,
                           i = e.length;
                        if (i <= t) return String.fromCharCode.apply(null, e);
                        for (; a < i;) "array" === n || "nodebuffer" === n ? r.push(String.fromCharCode.apply(null, e.slice(a, Math.min(a + t, i)))) : r.push(String.fromCharCode.apply(null, e.subarray(a, Math.min(a + t, i)))), a += t;
                        return r.join("")
                     },
                     stringifyByChar: function (e) {
                        for (var n = "", t = 0; t < e.length; t++) n += String.fromCharCode(e[t]);
                        return n
                     },
                     applyCanBeUsed: {
                        uint8array: function () {
                           try {
                              return r.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length
                           } catch (e) {
                              return !1
                           }
                        }(),
                        nodebuffer: function () {
                           try {
                              return r.nodebuffer && 1 === String.fromCharCode.apply(null, i.allocBuffer(1)).length
                           } catch (e) {
                              return !1
                           }
                        }()
                     }
                  };

                  function c(e) {
                     var n = 65536,
                        r = t.getTypeOf(e),
                        a = !0;
                     if ("uint8array" === r ? a = u.applyCanBeUsed.uint8array : "nodebuffer" === r && (a = u.applyCanBeUsed.nodebuffer), a)
                        for (; 1 < n;) try {
                           return u.stringifyByChunk(e, r, n)
                        } catch (e) {
                           n = Math.floor(n / 2)
                        }
                     return u.stringifyByChar(e)
                  }

                  function d(e, n) {
                     for (var t = 0; t < e.length; t++) n[t] = e[t];
                     return n
                  }
                  t.applyFromCharCode = c;
                  var f = {};
                  f.string = {
                     string: s,
                     array: function (e) {
                        return l(e, new Array(e.length))
                     },
                     arraybuffer: function (e) {
                        return f.string.uint8array(e).buffer
                     },
                     uint8array: function (e) {
                        return l(e, new Uint8Array(e.length))
                     },
                     nodebuffer: function (e) {
                        return l(e, i.allocBuffer(e.length))
                     }
                  }, f.array = {
                     string: c,
                     array: s,
                     arraybuffer: function (e) {
                        return new Uint8Array(e).buffer
                     },
                     uint8array: function (e) {
                        return new Uint8Array(e)
                     },
                     nodebuffer: function (e) {
                        return i.newBufferFrom(e)
                     }
                  }, f.arraybuffer = {
                     string: function (e) {
                        return c(new Uint8Array(e))
                     },
                     array: function (e) {
                        return d(new Uint8Array(e), new Array(e.byteLength))
                     },
                     arraybuffer: s,
                     uint8array: function (e) {
                        return new Uint8Array(e)
                     },
                     nodebuffer: function (e) {
                        return i.newBufferFrom(new Uint8Array(e))
                     }
                  }, f.uint8array = {
                     string: c,
                     array: function (e) {
                        return d(e, new Array(e.length))
                     },
                     arraybuffer: function (e) {
                        return e.buffer
                     },
                     uint8array: s,
                     nodebuffer: function (e) {
                        return i.newBufferFrom(e)
                     }
                  }, f.nodebuffer = {
                     string: c,
                     array: function (e) {
                        return d(e, new Array(e.length))
                     },
                     arraybuffer: function (e) {
                        return f.nodebuffer.uint8array(e).buffer
                     },
                     uint8array: function (e) {
                        return d(e, new Uint8Array(e.length))
                     },
                     nodebuffer: s
                  }, t.transformTo = function (e, n) {
                     if (n = n || "", !e) return n;
                     t.checkSupport(e);
                     var r = t.getTypeOf(n);
                     return f[r][e](n)
                  }, t.resolve = function (e) {
                     for (var n = e.split("/"), t = [], r = 0; r < n.length; r++) {
                        var a = n[r];
                        "." === a || "" === a && 0 !== r && r !== n.length - 1 || (".." === a ? t.pop() : t.push(a))
                     }
                     return t.join("/")
                  }, t.getTypeOf = function (e) {
                     return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : r.nodebuffer && i.isBuffer(e) ? "nodebuffer" : r.uint8array && e instanceof Uint8Array ? "uint8array" : r.arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0
                  }, t.checkSupport = function (e) {
                     if (!r[e.toLowerCase()]) throw new Error(e + " is not supported by this platform")
                  }, t.MAX_VALUE_16BITS = 65535, t.MAX_VALUE_32BITS = -1, t.pretty = function (e) {
                     var n, t, r = "";
                     for (t = 0; t < (e || "").length; t++) r += "\\x" + ((n = e.charCodeAt(t)) < 16 ? "0" : "") + n.toString(16).toUpperCase();
                     return r
                  }, t.delay = function (e, n, t) {
                     setImmediate((function () {
                        e.apply(t || null, n || [])
                     }))
                  }, t.inherits = function (e, n) {
                     function t() {}
                     t.prototype = n.prototype, e.prototype = new t
                  }, t.extend = function () {
                     var e, n, t = {};
                     for (e = 0; e < arguments.length; e++)
                        for (n in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], n) && void 0 === t[n] && (t[n] = arguments[e][n]);
                     return t
                  }, t.prepareContent = function (e, n, i, s, u) {
                     return o.Promise.resolve(n).then((function (e) {
                        return r.blob && (e instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(e))) && "undefined" != typeof FileReader ? new o.Promise((function (n, t) {
                           var r = new FileReader;
                           r.onload = function (e) {
                              n(e.target.result)
                           }, r.onerror = function (e) {
                              t(e.target.error)
                           }, r.readAsArrayBuffer(e)
                        })) : e
                     })).then((function (n) {
                        var c = t.getTypeOf(n);
                        return c ? ("arraybuffer" === c ? n = t.transformTo("uint8array", n) : "string" === c && (u ? n = a.decode(n) : i && !0 !== s && (n = function (e) {
                           return l(e, r.uint8array ? new Uint8Array(e.length) : new Array(e.length))
                        }(n))), n) : o.Promise.reject(new Error("Can't read the data of '" + e + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))
                     }))
                  }
               }, {
                  "./base64": 1,
                  "./external": 6,
                  "./nodejsUtils": 14,
                  "./support": 30,
                  setimmediate: 54
               }],
               33: [function (e, n, t) {
                  "use strict";
                  var r = e("./reader/readerFor"),
                     a = e("./utils"),
                     i = e("./signature"),
                     o = e("./zipEntry"),
                     s = e("./support");

                  function l(e) {
                     this.files = [], this.loadOptions = e
                  }
                  l.prototype = {
                     checkSignature: function (e) {
                        if (!this.reader.readAndCheckSignature(e)) {
                           this.reader.index -= 4;
                           var n = this.reader.readString(4);
                           throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(n) + ", expected " + a.pretty(e) + ")")
                        }
                     },
                     isSignature: function (e, n) {
                        var t = this.reader.index;
                        this.reader.setIndex(e);
                        var r = this.reader.readString(4) === n;
                        return this.reader.setIndex(t), r
                     },
                     readBlockEndOfCentral: function () {
                        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                        var e = this.reader.readData(this.zipCommentLength),
                           n = s.uint8array ? "uint8array" : "array",
                           t = a.transformTo(n, e);
                        this.zipComment = this.loadOptions.decodeFileName(t)
                     },
                     readBlockZip64EndOfCentral: function () {
                        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                        for (var e, n, t, r = this.zip64EndOfCentralSize - 44; 0 < r;) e = this.reader.readInt(2), n = this.reader.readInt(4), t = this.reader.readData(n), this.zip64ExtensibleData[e] = {
                           id: e,
                           length: n,
                           value: t
                        }
                     },
                     readBlockZip64EndOfCentralLocator: function () {
                        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported")
                     },
                     readLocalFiles: function () {
                        var e, n;
                        for (e = 0; e < this.files.length; e++) n = this.files[e], this.reader.setIndex(n.localHeaderOffset), this.checkSignature(i.LOCAL_FILE_HEADER), n.readLocalPart(this.reader), n.handleUTF8(), n.processAttributes()
                     },
                     readCentralDir: function () {
                        var e;
                        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER);)(e = new o({
                           zip64: this.zip64
                        }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
                        if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length)
                     },
                     readEndOfCentral: function () {
                        var e = this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);
                        if (e < 0) throw this.isSignature(0, i.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
                        this.reader.setIndex(e);
                        var n = e;
                        if (this.checkSignature(i.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
                           if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                           if (this.reader.setIndex(e), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, i.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                           this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral()
                        }
                        var t = this.centralDirOffset + this.centralDirSize;
                        this.zip64 && (t += 20, t += 12 + this.zip64EndOfCentralSize);
                        var r = n - t;
                        if (0 < r) this.isSignature(n, i.CENTRAL_FILE_HEADER) || (this.reader.zero = r);
                        else if (r < 0) throw new Error("Corrupted zip: missing " + Math.abs(r) + " bytes.")
                     },
                     prepareReader: function (e) {
                        this.reader = r(e)
                     },
                     load: function (e) {
                        this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles()
                     }
                  }, n.exports = l
               }, {
                  "./reader/readerFor": 22,
                  "./signature": 23,
                  "./support": 30,
                  "./utils": 32,
                  "./zipEntry": 34
               }],
               34: [function (e, n, t) {
                  "use strict";
                  var r = e("./reader/readerFor"),
                     a = e("./utils"),
                     i = e("./compressedObject"),
                     o = e("./crc32"),
                     s = e("./utf8"),
                     l = e("./compressions"),
                     u = e("./support");

                  function c(e, n) {
                     this.options = e, this.loadOptions = n
                  }
                  c.prototype = {
                     isEncrypted: function () {
                        return 1 == (1 & this.bitFlag)
                     },
                     useUTF8: function () {
                        return 2048 == (2048 & this.bitFlag)
                     },
                     readLocalPart: function (e) {
                        var n, t;
                        if (e.skip(22), this.fileNameLength = e.readInt(2), t = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(t), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                        if (null === (n = function (e) {
                              for (var n in l)
                                 if (Object.prototype.hasOwnProperty.call(l, n) && l[n].magic === e) return l[n];
                              return null
                           }(this.compressionMethod))) throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
                        this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, n, e.readData(this.compressedSize))
                     },
                     readCentralPart: function (e) {
                        this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
                        var n = e.readInt(2);
                        if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                        e.skip(n), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength)
                     },
                     processAttributes: function () {
                        this.unixPermissions = null, this.dosPermissions = null;
                        var e = this.versionMadeBy >> 8;
                        this.dir = !!(16 & this.externalFileAttributes), 0 == e && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0)
                     },
                     parseZIP64ExtraField: function () {
                        if (this.extraFields[1]) {
                           var e = r(this.extraFields[1].value);
                           this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4))
                        }
                     },
                     readExtraFields: function (e) {
                        var n, t, r, a = e.index + this.extraFieldsLength;
                        for (this.extraFields || (this.extraFields = {}); e.index + 4 < a;) n = e.readInt(2), t = e.readInt(2), r = e.readData(t), this.extraFields[n] = {
                           id: n,
                           length: t,
                           value: r
                        };
                        e.setIndex(a)
                     },
                     handleUTF8: function () {
                        var e = u.uint8array ? "uint8array" : "array";
                        if (this.useUTF8()) this.fileNameStr = s.utf8decode(this.fileName), this.fileCommentStr = s.utf8decode(this.fileComment);
                        else {
                           var n = this.findExtraFieldUnicodePath();
                           if (null !== n) this.fileNameStr = n;
                           else {
                              var t = a.transformTo(e, this.fileName);
                              this.fileNameStr = this.loadOptions.decodeFileName(t)
                           }
                           var r = this.findExtraFieldUnicodeComment();
                           if (null !== r) this.fileCommentStr = r;
                           else {
                              var i = a.transformTo(e, this.fileComment);
                              this.fileCommentStr = this.loadOptions.decodeFileName(i)
                           }
                        }
                     },
                     findExtraFieldUnicodePath: function () {
                        var e = this.extraFields[28789];
                        if (e) {
                           var n = r(e.value);
                           return 1 !== n.readInt(1) || o(this.fileName) !== n.readInt(4) ? null : s.utf8decode(n.readData(e.length - 5))
                        }
                        return null
                     },
                     findExtraFieldUnicodeComment: function () {
                        var e = this.extraFields[25461];
                        if (e) {
                           var n = r(e.value);
                           return 1 !== n.readInt(1) || o(this.fileComment) !== n.readInt(4) ? null : s.utf8decode(n.readData(e.length - 5))
                        }
                        return null
                     }
                  }, n.exports = c
               }, {
                  "./compressedObject": 2,
                  "./compressions": 3,
                  "./crc32": 4,
                  "./reader/readerFor": 22,
                  "./support": 30,
                  "./utf8": 31,
                  "./utils": 32
               }],
               35: [function (e, n, t) {
                  "use strict";

                  function r(e, n, t) {
                     this.name = e, this.dir = t.dir, this.date = t.date, this.comment = t.comment, this.unixPermissions = t.unixPermissions, this.dosPermissions = t.dosPermissions, this._data = n, this._dataBinary = t.binary, this.options = {
                        compression: t.compression,
                        compressionOptions: t.compressionOptions
                     }
                  }
                  var a = e("./stream/StreamHelper"),
                     i = e("./stream/DataWorker"),
                     o = e("./utf8"),
                     s = e("./compressedObject"),
                     l = e("./stream/GenericWorker");
                  r.prototype = {
                     internalStream: function (e) {
                        var n = null,
                           t = "string";
                        try {
                           if (!e) throw new Error("No output type specified.");
                           var r = "string" === (t = e.toLowerCase()) || "text" === t;
                           "binarystring" !== t && "text" !== t || (t = "string"), n = this._decompressWorker();
                           var i = !this._dataBinary;
                           i && !r && (n = n.pipe(new o.Utf8EncodeWorker)), !i && r && (n = n.pipe(new o.Utf8DecodeWorker))
                        } catch (e) {
                           (n = new l("error")).error(e)
                        }
                        return new a(n, t, "")
                     },
                     async: function (e, n) {
                        return this.internalStream(e).accumulate(n)
                     },
                     nodeStream: function (e, n) {
                        return this.internalStream(e || "nodebuffer").toNodejsStream(n)
                     },
                     _compressWorker: function (e, n) {
                        if (this._data instanceof s && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
                        var t = this._decompressWorker();
                        return this._dataBinary || (t = t.pipe(new o.Utf8EncodeWorker)), s.createWorkerFrom(t, e, n)
                     },
                     _decompressWorker: function () {
                        return this._data instanceof s ? this._data.getContentWorker() : this._data instanceof l ? this._data : new i(this._data)
                     }
                  };
                  for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], c = function () {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                     }, d = 0; d < u.length; d++) r.prototype[u[d]] = c;
                  n.exports = r
               }, {
                  "./compressedObject": 2,
                  "./stream/DataWorker": 27,
                  "./stream/GenericWorker": 28,
                  "./stream/StreamHelper": 29,
                  "./utf8": 31
               }],
               36: [function (e, n, r) {
                  (function (e) {
                     "use strict";
                     var t, r, a = e.MutationObserver || e.WebKitMutationObserver;
                     if (a) {
                        var i = 0,
                           o = new a(c),
                           s = e.document.createTextNode("");
                        o.observe(s, {
                           characterData: !0
                        }), t = function () {
                           s.data = i = ++i % 2
                        }
                     } else if (e.setImmediate || void 0 === e.MessageChannel) t = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function () {
                        var n = e.document.createElement("script");
                        n.onreadystatechange = function () {
                           c(), n.onreadystatechange = null, n.parentNode.removeChild(n), n = null
                        }, e.document.documentElement.appendChild(n)
                     } : function () {
                        setTimeout(c, 0)
                     };
                     else {
                        var l = new e.MessageChannel;
                        l.port1.onmessage = c, t = function () {
                           l.port2.postMessage(0)
                        }
                     }
                     var u = [];

                     function c() {
                        var e, n;
                        r = !0;
                        for (var t = u.length; t;) {
                           for (n = u, u = [], e = -1; ++e < t;) n[e]();
                           t = u.length
                        }
                        r = !1
                     }
                     n.exports = function (e) {
                        1 !== u.push(e) || r || t()
                     }
                  }).call(this, void 0 !== t.g ? t.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
               }, {}],
               37: [function (e, n, t) {
                  "use strict";
                  var r = e("immediate");

                  function a() {}
                  var i = {},
                     o = ["REJECTED"],
                     s = ["FULFILLED"],
                     l = ["PENDING"];

                  function u(e) {
                     if ("function" != typeof e) throw new TypeError("resolver must be a function");
                     this.state = l, this.queue = [], this.outcome = void 0, e !== a && h(this, e)
                  }

                  function c(e, n, t) {
                     this.promise = e, "function" == typeof n && (this.onFulfilled = n, this.callFulfilled = this.otherCallFulfilled), "function" == typeof t && (this.onRejected = t, this.callRejected = this.otherCallRejected)
                  }

                  function d(e, n, t) {
                     r((function () {
                        var r;
                        try {
                           r = n(t)
                        } catch (r) {
                           return i.reject(e, r)
                        }
                        r === e ? i.reject(e, new TypeError("Cannot resolve promise with itself")) : i.resolve(e, r)
                     }))
                  }

                  function f(e) {
                     var n = e && e.then;
                     if (e && ("object" == typeof e || "function" == typeof e) && "function" == typeof n) return function () {
                        n.apply(e, arguments)
                     }
                  }

                  function h(e, n) {
                     var t = !1;

                     function r(n) {
                        t || (t = !0, i.reject(e, n))
                     }

                     function a(n) {
                        t || (t = !0, i.resolve(e, n))
                     }
                     var o = m((function () {
                        n(a, r)
                     }));
                     "error" === o.status && r(o.value)
                  }

                  function m(e, n) {
                     var t = {};
                     try {
                        t.value = e(n), t.status = "success"
                     } catch (e) {
                        t.status = "error", t.value = e
                     }
                     return t
                  }(n.exports = u).prototype.finally = function (e) {
                     if ("function" != typeof e) return this;
                     var n = this.constructor;
                     return this.then((function (t) {
                        return n.resolve(e()).then((function () {
                           return t
                        }))
                     }), (function (t) {
                        return n.resolve(e()).then((function () {
                           throw t
                        }))
                     }))
                  }, u.prototype.catch = function (e) {
                     return this.then(null, e)
                  }, u.prototype.then = function (e, n) {
                     if ("function" != typeof e && this.state === s || "function" != typeof n && this.state === o) return this;
                     var t = new this.constructor(a);
                     return this.state !== l ? d(t, this.state === s ? e : n, this.outcome) : this.queue.push(new c(t, e, n)), t
                  }, c.prototype.callFulfilled = function (e) {
                     i.resolve(this.promise, e)
                  }, c.prototype.otherCallFulfilled = function (e) {
                     d(this.promise, this.onFulfilled, e)
                  }, c.prototype.callRejected = function (e) {
                     i.reject(this.promise, e)
                  }, c.prototype.otherCallRejected = function (e) {
                     d(this.promise, this.onRejected, e)
                  }, i.resolve = function (e, n) {
                     var t = m(f, n);
                     if ("error" === t.status) return i.reject(e, t.value);
                     var r = t.value;
                     if (r) h(e, r);
                     else {
                        e.state = s, e.outcome = n;
                        for (var a = -1, o = e.queue.length; ++a < o;) e.queue[a].callFulfilled(n)
                     }
                     return e
                  }, i.reject = function (e, n) {
                     e.state = o, e.outcome = n;
                     for (var t = -1, r = e.queue.length; ++t < r;) e.queue[t].callRejected(n);
                     return e
                  }, u.resolve = function (e) {
                     return e instanceof this ? e : i.resolve(new this(a), e)
                  }, u.reject = function (e) {
                     var n = new this(a);
                     return i.reject(n, e)
                  }, u.all = function (e) {
                     var n = this;
                     if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                     var t = e.length,
                        r = !1;
                     if (!t) return this.resolve([]);
                     for (var o = new Array(t), s = 0, l = -1, u = new this(a); ++l < t;) c(e[l], l);
                     return u;

                     function c(e, a) {
                        n.resolve(e).then((function (e) {
                           o[a] = e, ++s !== t || r || (r = !0, i.resolve(u, o))
                        }), (function (e) {
                           r || (r = !0, i.reject(u, e))
                        }))
                     }
                  }, u.race = function (e) {
                     if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                     var n = e.length,
                        t = !1;
                     if (!n) return this.resolve([]);
                     for (var r, o = -1, s = new this(a); ++o < n;) r = e[o], this.resolve(r).then((function (e) {
                        t || (t = !0, i.resolve(s, e))
                     }), (function (e) {
                        t || (t = !0, i.reject(s, e))
                     }));
                     return s
                  }
               }, {
                  immediate: 36
               }],
               38: [function (e, n, t) {
                  "use strict";
                  var r = {};
                  (0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), n.exports = r
               }, {
                  "./lib/deflate": 39,
                  "./lib/inflate": 40,
                  "./lib/utils/common": 41,
                  "./lib/zlib/constants": 44
               }],
               39: [function (e, n, t) {
                  "use strict";
                  var r = e("./zlib/deflate"),
                     a = e("./utils/common"),
                     i = e("./utils/strings"),
                     o = e("./zlib/messages"),
                     s = e("./zlib/zstream"),
                     l = Object.prototype.toString,
                     u = 0,
                     c = -1,
                     d = 0,
                     f = 8;

                  function h(e) {
                     if (!(this instanceof h)) return new h(e);
                     this.options = a.assign({
                        level: c,
                        method: f,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: d,
                        to: ""
                     }, e || {});
                     var n = this.options;
                     n.raw && 0 < n.windowBits ? n.windowBits = -n.windowBits : n.gzip && 0 < n.windowBits && n.windowBits < 16 && (n.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s, this.strm.avail_out = 0;
                     var t = r.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
                     if (t !== u) throw new Error(o[t]);
                     if (n.header && r.deflateSetHeader(this.strm, n.header), n.dictionary) {
                        var m;
                        if (m = "string" == typeof n.dictionary ? i.string2buf(n.dictionary) : "[object ArrayBuffer]" === l.call(n.dictionary) ? new Uint8Array(n.dictionary) : n.dictionary, (t = r.deflateSetDictionary(this.strm, m)) !== u) throw new Error(o[t]);
                        this._dict_set = !0
                     }
                  }

                  function m(e, n) {
                     var t = new h(n);
                     if (t.push(e, !0), t.err) throw t.msg || o[t.err];
                     return t.result
                  }
                  h.prototype.push = function (e, n) {
                     var t, o, s = this.strm,
                        c = this.options.chunkSize;
                     if (this.ended) return !1;
                     o = n === ~~n ? n : !0 === n ? 4 : 0, "string" == typeof e ? s.input = i.string2buf(e) : "[object ArrayBuffer]" === l.call(e) ? s.input = new Uint8Array(e) : s.input = e, s.next_in = 0, s.avail_in = s.input.length;
                     do {
                        if (0 === s.avail_out && (s.output = new a.Buf8(c), s.next_out = 0, s.avail_out = c), 1 !== (t = r.deflate(s, o)) && t !== u) return this.onEnd(t), !(this.ended = !0);
                        0 !== s.avail_out && (0 !== s.avail_in || 4 !== o && 2 !== o) || ("string" === this.options.to ? this.onData(i.buf2binstring(a.shrinkBuf(s.output, s.next_out))) : this.onData(a.shrinkBuf(s.output, s.next_out)))
                     } while ((0 < s.avail_in || 0 === s.avail_out) && 1 !== t);
                     return 4 === o ? (t = r.deflateEnd(this.strm), this.onEnd(t), this.ended = !0, t === u) : 2 !== o || (this.onEnd(u), !(s.avail_out = 0))
                  }, h.prototype.onData = function (e) {
                     this.chunks.push(e)
                  }, h.prototype.onEnd = function (e) {
                     e === u && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
                  }, t.Deflate = h, t.deflate = m, t.deflateRaw = function (e, n) {
                     return (n = n || {}).raw = !0, m(e, n)
                  }, t.gzip = function (e, n) {
                     return (n = n || {}).gzip = !0, m(e, n)
                  }
               }, {
                  "./utils/common": 41,
                  "./utils/strings": 42,
                  "./zlib/deflate": 46,
                  "./zlib/messages": 51,
                  "./zlib/zstream": 53
               }],
               40: [function (e, n, t) {
                  "use strict";
                  var r = e("./zlib/inflate"),
                     a = e("./utils/common"),
                     i = e("./utils/strings"),
                     o = e("./zlib/constants"),
                     s = e("./zlib/messages"),
                     l = e("./zlib/zstream"),
                     u = e("./zlib/gzheader"),
                     c = Object.prototype.toString;

                  function d(e) {
                     if (!(this instanceof d)) return new d(e);
                     this.options = a.assign({
                        chunkSize: 16384,
                        windowBits: 0,
                        to: ""
                     }, e || {});
                     var n = this.options;
                     n.raw && 0 <= n.windowBits && n.windowBits < 16 && (n.windowBits = -n.windowBits, 0 === n.windowBits && (n.windowBits = -15)), !(0 <= n.windowBits && n.windowBits < 16) || e && e.windowBits || (n.windowBits += 32), 15 < n.windowBits && n.windowBits < 48 && 0 == (15 & n.windowBits) && (n.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l, this.strm.avail_out = 0;
                     var t = r.inflateInit2(this.strm, n.windowBits);
                     if (t !== o.Z_OK) throw new Error(s[t]);
                     this.header = new u, r.inflateGetHeader(this.strm, this.header)
                  }

                  function f(e, n) {
                     var t = new d(n);
                     if (t.push(e, !0), t.err) throw t.msg || s[t.err];
                     return t.result
                  }
                  d.prototype.push = function (e, n) {
                     var t, s, l, u, d, f, h = this.strm,
                        m = this.options.chunkSize,
                        p = this.options.dictionary,
                        v = !1;
                     if (this.ended) return !1;
                     s = n === ~~n ? n : !0 === n ? o.Z_FINISH : o.Z_NO_FLUSH, "string" == typeof e ? h.input = i.binstring2buf(e) : "[object ArrayBuffer]" === c.call(e) ? h.input = new Uint8Array(e) : h.input = e, h.next_in = 0, h.avail_in = h.input.length;
                     do {
                        if (0 === h.avail_out && (h.output = new a.Buf8(m), h.next_out = 0, h.avail_out = m), (t = r.inflate(h, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && p && (f = "string" == typeof p ? i.string2buf(p) : "[object ArrayBuffer]" === c.call(p) ? new Uint8Array(p) : p, t = r.inflateSetDictionary(this.strm, f)), t === o.Z_BUF_ERROR && !0 === v && (t = o.Z_OK, v = !1), t !== o.Z_STREAM_END && t !== o.Z_OK) return this.onEnd(t), !(this.ended = !0);
                        h.next_out && (0 !== h.avail_out && t !== o.Z_STREAM_END && (0 !== h.avail_in || s !== o.Z_FINISH && s !== o.Z_SYNC_FLUSH) || ("string" === this.options.to ? (l = i.utf8border(h.output, h.next_out), u = h.next_out - l, d = i.buf2string(h.output, l), h.next_out = u, h.avail_out = m - u, u && a.arraySet(h.output, h.output, l, u, 0), this.onData(d)) : this.onData(a.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (v = !0)
                     } while ((0 < h.avail_in || 0 === h.avail_out) && t !== o.Z_STREAM_END);
                     return t === o.Z_STREAM_END && (s = o.Z_FINISH), s === o.Z_FINISH ? (t = r.inflateEnd(this.strm), this.onEnd(t), this.ended = !0, t === o.Z_OK) : s !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(h.avail_out = 0))
                  }, d.prototype.onData = function (e) {
                     this.chunks.push(e)
                  }, d.prototype.onEnd = function (e) {
                     e === o.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
                  }, t.Inflate = d, t.inflate = f, t.inflateRaw = function (e, n) {
                     return (n = n || {}).raw = !0, f(e, n)
                  }, t.ungzip = f
               }, {
                  "./utils/common": 41,
                  "./utils/strings": 42,
                  "./zlib/constants": 44,
                  "./zlib/gzheader": 47,
                  "./zlib/inflate": 49,
                  "./zlib/messages": 51,
                  "./zlib/zstream": 53
               }],
               41: [function (e, n, t) {
                  "use strict";
                  var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
                  t.assign = function (e) {
                     for (var n = Array.prototype.slice.call(arguments, 1); n.length;) {
                        var t = n.shift();
                        if (t) {
                           if ("object" != typeof t) throw new TypeError(t + "must be non-object");
                           for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                        }
                     }
                     return e
                  }, t.shrinkBuf = function (e, n) {
                     return e.length === n ? e : e.subarray ? e.subarray(0, n) : (e.length = n, e)
                  };
                  var a = {
                        arraySet: function (e, n, t, r, a) {
                           if (n.subarray && e.subarray) e.set(n.subarray(t, t + r), a);
                           else
                              for (var i = 0; i < r; i++) e[a + i] = n[t + i]
                        },
                        flattenChunks: function (e) {
                           var n, t, r, a, i, o;
                           for (n = r = 0, t = e.length; n < t; n++) r += e[n].length;
                           for (o = new Uint8Array(r), n = a = 0, t = e.length; n < t; n++) i = e[n], o.set(i, a), a += i.length;
                           return o
                        }
                     },
                     i = {
                        arraySet: function (e, n, t, r, a) {
                           for (var i = 0; i < r; i++) e[a + i] = n[t + i]
                        },
                        flattenChunks: function (e) {
                           return [].concat.apply([], e)
                        }
                     };
                  t.setTyped = function (e) {
                     e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, a)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, i))
                  }, t.setTyped(r)
               }, {}],
               42: [function (e, n, t) {
                  "use strict";
                  var r = e("./common"),
                     a = !0,
                     i = !0;
                  try {
                     String.fromCharCode.apply(null, [0])
                  } catch (e) {
                     a = !1
                  }
                  try {
                     String.fromCharCode.apply(null, new Uint8Array(1))
                  } catch (e) {
                     i = !1
                  }
                  for (var o = new r.Buf8(256), s = 0; s < 256; s++) o[s] = 252 <= s ? 6 : 248 <= s ? 5 : 240 <= s ? 4 : 224 <= s ? 3 : 192 <= s ? 2 : 1;

                  function l(e, n) {
                     if (n < 65537 && (e.subarray && i || !e.subarray && a)) return String.fromCharCode.apply(null, r.shrinkBuf(e, n));
                     for (var t = "", o = 0; o < n; o++) t += String.fromCharCode(e[o]);
                     return t
                  }
                  o[254] = o[254] = 1, t.string2buf = function (e) {
                     var n, t, a, i, o, s = e.length,
                        l = 0;
                     for (i = 0; i < s; i++) 55296 == (64512 & (t = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (a = e.charCodeAt(i + 1))) && (t = 65536 + (t - 55296 << 10) + (a - 56320), i++), l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                     for (n = new r.Buf8(l), i = o = 0; o < l; i++) 55296 == (64512 & (t = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (a = e.charCodeAt(i + 1))) && (t = 65536 + (t - 55296 << 10) + (a - 56320), i++), t < 128 ? n[o++] = t : (t < 2048 ? n[o++] = 192 | t >>> 6 : (t < 65536 ? n[o++] = 224 | t >>> 12 : (n[o++] = 240 | t >>> 18, n[o++] = 128 | t >>> 12 & 63), n[o++] = 128 | t >>> 6 & 63), n[o++] = 128 | 63 & t);
                     return n
                  }, t.buf2binstring = function (e) {
                     return l(e, e.length)
                  }, t.binstring2buf = function (e) {
                     for (var n = new r.Buf8(e.length), t = 0, a = n.length; t < a; t++) n[t] = e.charCodeAt(t);
                     return n
                  }, t.buf2string = function (e, n) {
                     var t, r, a, i, s = n || e.length,
                        u = new Array(2 * s);
                     for (t = r = 0; t < s;)
                        if ((a = e[t++]) < 128) u[r++] = a;
                        else if (4 < (i = o[a])) u[r++] = 65533, t += i - 1;
                     else {
                        for (a &= 2 === i ? 31 : 3 === i ? 15 : 7; 1 < i && t < s;) a = a << 6 | 63 & e[t++], i--;
                        1 < i ? u[r++] = 65533 : a < 65536 ? u[r++] = a : (a -= 65536, u[r++] = 55296 | a >> 10 & 1023, u[r++] = 56320 | 1023 & a)
                     }
                     return l(u, r)
                  }, t.utf8border = function (e, n) {
                     var t;
                     for ((n = n || e.length) > e.length && (n = e.length), t = n - 1; 0 <= t && 128 == (192 & e[t]);) t--;
                     return t < 0 || 0 === t ? n : t + o[e[t]] > n ? t : n
                  }
               }, {
                  "./common": 41
               }],
               43: [function (e, n, t) {
                  "use strict";
                  n.exports = function (e, n, t, r) {
                     for (var a = 65535 & e | 0, i = e >>> 16 & 65535 | 0, o = 0; 0 !== t;) {
                        for (t -= o = 2e3 < t ? 2e3 : t; i = i + (a = a + n[r++] | 0) | 0, --o;);
                        a %= 65521, i %= 65521
                     }
                     return a | i << 16 | 0
                  }
               }, {}],
               44: [function (e, n, t) {
                  "use strict";
                  n.exports = {
                     Z_NO_FLUSH: 0,
                     Z_PARTIAL_FLUSH: 1,
                     Z_SYNC_FLUSH: 2,
                     Z_FULL_FLUSH: 3,
                     Z_FINISH: 4,
                     Z_BLOCK: 5,
                     Z_TREES: 6,
                     Z_OK: 0,
                     Z_STREAM_END: 1,
                     Z_NEED_DICT: 2,
                     Z_ERRNO: -1,
                     Z_STREAM_ERROR: -2,
                     Z_DATA_ERROR: -3,
                     Z_BUF_ERROR: -5,
                     Z_NO_COMPRESSION: 0,
                     Z_BEST_SPEED: 1,
                     Z_BEST_COMPRESSION: 9,
                     Z_DEFAULT_COMPRESSION: -1,
                     Z_FILTERED: 1,
                     Z_HUFFMAN_ONLY: 2,
                     Z_RLE: 3,
                     Z_FIXED: 4,
                     Z_DEFAULT_STRATEGY: 0,
                     Z_BINARY: 0,
                     Z_TEXT: 1,
                     Z_UNKNOWN: 2,
                     Z_DEFLATED: 8
                  }
               }, {}],
               45: [function (e, n, t) {
                  "use strict";
                  var r = function () {
                     for (var e, n = [], t = 0; t < 256; t++) {
                        e = t;
                        for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                        n[t] = e
                     }
                     return n
                  }();
                  n.exports = function (e, n, t, a) {
                     var i = r,
                        o = a + t;
                     e ^= -1;
                     for (var s = a; s < o; s++) e = e >>> 8 ^ i[255 & (e ^ n[s])];
                     return -1 ^ e
                  }
               }, {}],
               46: [function (e, n, t) {
                  "use strict";
                  var r, a = e("../utils/common"),
                     i = e("./trees"),
                     o = e("./adler32"),
                     s = e("./crc32"),
                     l = e("./messages"),
                     u = 0,
                     c = 0,
                     d = -2,
                     f = 2,
                     h = 8,
                     m = 286,
                     p = 30,
                     v = 19,
                     g = 2 * m + 1,
                     b = 15,
                     w = 3,
                     k = 258,
                     y = k + w + 1,
                     x = 42,
                     A = 113;

                  function _(e, n) {
                     return e.msg = l[n], n
                  }

                  function R(e) {
                     return (e << 1) - (4 < e ? 9 : 0)
                  }

                  function S(e) {
                     for (var n = e.length; 0 <= --n;) e[n] = 0
                  }

                  function z(e) {
                     var n = e.state,
                        t = n.pending;
                     t > e.avail_out && (t = e.avail_out), 0 !== t && (a.arraySet(e.output, n.pending_buf, n.pending_out, t, e.next_out), e.next_out += t, n.pending_out += t, e.total_out += t, e.avail_out -= t, n.pending -= t, 0 === n.pending && (n.pending_out = 0))
                  }

                  function C(e, n) {
                     i._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, n), e.block_start = e.strstart, z(e.strm)
                  }

                  function E(e, n) {
                     e.pending_buf[e.pending++] = n
                  }

                  function I(e, n) {
                     e.pending_buf[e.pending++] = n >>> 8 & 255, e.pending_buf[e.pending++] = 255 & n
                  }

                  function j(e, n) {
                     var t, r, a = e.max_chain_length,
                        i = e.strstart,
                        o = e.prev_length,
                        s = e.nice_match,
                        l = e.strstart > e.w_size - y ? e.strstart - (e.w_size - y) : 0,
                        u = e.window,
                        c = e.w_mask,
                        d = e.prev,
                        f = e.strstart + k,
                        h = u[i + o - 1],
                        m = u[i + o];
                     e.prev_length >= e.good_match && (a >>= 2), s > e.lookahead && (s = e.lookahead);
                     do {
                        if (u[(t = n) + o] === m && u[t + o - 1] === h && u[t] === u[i] && u[++t] === u[i + 1]) {
                           i += 2, t++;
                           do {} while (u[++i] === u[++t] && u[++i] === u[++t] && u[++i] === u[++t] && u[++i] === u[++t] && u[++i] === u[++t] && u[++i] === u[++t] && u[++i] === u[++t] && u[++i] === u[++t] && i < f);
                           if (r = k - (f - i), i = f - k, o < r) {
                              if (e.match_start = n, s <= (o = r)) break;
                              h = u[i + o - 1], m = u[i + o]
                           }
                        }
                     } while ((n = d[n & c]) > l && 0 != --a);
                     return o <= e.lookahead ? o : e.lookahead
                  }

                  function B(e) {
                     var n, t, r, i, l, u, c, d, f, h, m = e.w_size;
                     do {
                        if (i = e.window_size - e.lookahead - e.strstart, e.strstart >= m + (m - y)) {
                           for (a.arraySet(e.window, e.window, m, m, 0), e.match_start -= m, e.strstart -= m, e.block_start -= m, n = t = e.hash_size; r = e.head[--n], e.head[n] = m <= r ? r - m : 0, --t;);
                           for (n = t = m; r = e.prev[--n], e.prev[n] = m <= r ? r - m : 0, --t;);
                           i += m
                        }
                        if (0 === e.strm.avail_in) break;
                        if (u = e.strm, c = e.window, d = e.strstart + e.lookahead, h = void 0, (f = i) < (h = u.avail_in) && (h = f), t = 0 === h ? 0 : (u.avail_in -= h, a.arraySet(c, u.input, u.next_in, h, d), 1 === u.state.wrap ? u.adler = o(u.adler, c, h, d) : 2 === u.state.wrap && (u.adler = s(u.adler, c, h, d)), u.next_in += h, u.total_in += h, h), e.lookahead += t, e.lookahead + e.insert >= w)
                           for (l = e.strstart - e.insert, e.ins_h = e.window[l], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[l + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[l + w - 1]) & e.hash_mask, e.prev[l & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = l, l++, e.insert--, !(e.lookahead + e.insert < w)););
                     } while (e.lookahead < y && 0 !== e.strm.avail_in)
                  }

                  function O(e, n) {
                     for (var t, r;;) {
                        if (e.lookahead < y) {
                           if (B(e), e.lookahead < y && n === u) return 1;
                           if (0 === e.lookahead) break
                        }
                        if (t = 0, e.lookahead >= w && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + w - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 !== t && e.strstart - t <= e.w_size - y && (e.match_length = j(e, t)), e.match_length >= w)
                           if (r = i._tr_tally(e, e.strstart - e.match_start, e.match_length - w), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= w) {
                              for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + w - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, 0 != --e.match_length;);
                              e.strstart++
                           } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                        else r = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
                        if (r && (C(e, !1), 0 === e.strm.avail_out)) return 1
                     }
                     return e.insert = e.strstart < w - 1 ? e.strstart : w - 1, 4 === n ? (C(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (C(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                  }

                  function F(e, n) {
                     for (var t, r, a;;) {
                        if (e.lookahead < y) {
                           if (B(e), e.lookahead < y && n === u) return 1;
                           if (0 === e.lookahead) break
                        }
                        if (t = 0, e.lookahead >= w && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + w - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = w - 1, 0 !== t && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - y && (e.match_length = j(e, t), e.match_length <= 5 && (1 === e.strategy || e.match_length === w && 4096 < e.strstart - e.match_start) && (e.match_length = w - 1)), e.prev_length >= w && e.match_length <= e.prev_length) {
                           for (a = e.strstart + e.lookahead - w, r = i._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - w), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= a && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + w - 1]) & e.hash_mask, t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), 0 != --e.prev_length;);
                           if (e.match_available = 0, e.match_length = w - 1, e.strstart++, r && (C(e, !1), 0 === e.strm.avail_out)) return 1
                        } else if (e.match_available) {
                           if ((r = i._tr_tally(e, 0, e.window[e.strstart - 1])) && C(e, !1), e.strstart++, e.lookahead--, 0 === e.strm.avail_out) return 1
                        } else e.match_available = 1, e.strstart++, e.lookahead--
                     }
                     return e.match_available && (r = i._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < w - 1 ? e.strstart : w - 1, 4 === n ? (C(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (C(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                  }

                  function D(e, n, t, r, a) {
                     this.good_length = e, this.max_lazy = n, this.nice_length = t, this.max_chain = r, this.func = a
                  }

                  function P() {
                     this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = h, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * g), this.dyn_dtree = new a.Buf16(2 * (2 * p + 1)), this.bl_tree = new a.Buf16(2 * (2 * v + 1)), S(this.dyn_ltree), S(this.dyn_dtree), S(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(b + 1), this.heap = new a.Buf16(2 * m + 1), S(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * m + 1), S(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
                  }

                  function T(e) {
                     var n;
                     return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = f, (n = e.state).pending = 0, n.pending_out = 0, n.wrap < 0 && (n.wrap = -n.wrap), n.status = n.wrap ? x : A, e.adler = 2 === n.wrap ? 0 : 1, n.last_flush = u, i._tr_init(n), c) : _(e, d)
                  }

                  function L(e) {
                     var n = T(e);
                     return n === c && function (e) {
                        e.window_size = 2 * e.w_size, S(e.head), e.max_lazy_match = r[e.level].max_lazy, e.good_match = r[e.level].good_length, e.nice_match = r[e.level].nice_length, e.max_chain_length = r[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = w - 1, e.match_available = 0, e.ins_h = 0
                     }(e.state), n
                  }

                  function M(e, n, t, r, i, o) {
                     if (!e) return d;
                     var s = 1;
                     if (-1 === n && (n = 6), r < 0 ? (s = 0, r = -r) : 15 < r && (s = 2, r -= 16), i < 1 || 9 < i || t !== h || r < 8 || 15 < r || n < 0 || 9 < n || o < 0 || 4 < o) return _(e, d);
                     8 === r && (r = 9);
                     var l = new P;
                     return (e.state = l).strm = e, l.wrap = s, l.gzhead = null, l.w_bits = r, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = i + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + w - 1) / w), l.window = new a.Buf8(2 * l.w_size), l.head = new a.Buf16(l.hash_size), l.prev = new a.Buf16(l.w_size), l.lit_bufsize = 1 << i + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new a.Buf8(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = n, l.strategy = o, l.method = t, L(e)
                  }
                  r = [new D(0, 0, 0, 0, (function (e, n) {
                     var t = 65535;
                     for (t > e.pending_buf_size - 5 && (t = e.pending_buf_size - 5);;) {
                        if (e.lookahead <= 1) {
                           if (B(e), 0 === e.lookahead && n === u) return 1;
                           if (0 === e.lookahead) break
                        }
                        e.strstart += e.lookahead, e.lookahead = 0;
                        var r = e.block_start + t;
                        if ((0 === e.strstart || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, C(e, !1), 0 === e.strm.avail_out)) return 1;
                        if (e.strstart - e.block_start >= e.w_size - y && (C(e, !1), 0 === e.strm.avail_out)) return 1
                     }
                     return e.insert = 0, 4 === n ? (C(e, !0), 0 === e.strm.avail_out ? 3 : 4) : (e.strstart > e.block_start && (C(e, !1), e.strm.avail_out), 1)
                  })), new D(4, 4, 8, 4, O), new D(4, 5, 16, 8, O), new D(4, 6, 32, 32, O), new D(4, 4, 16, 16, F), new D(8, 16, 32, 32, F), new D(8, 16, 128, 128, F), new D(8, 32, 128, 256, F), new D(32, 128, 258, 1024, F), new D(32, 258, 258, 4096, F)], t.deflateInit = function (e, n) {
                     return M(e, n, h, 15, 8, 0)
                  }, t.deflateInit2 = M, t.deflateReset = L, t.deflateResetKeep = T, t.deflateSetHeader = function (e, n) {
                     return e && e.state ? 2 !== e.state.wrap ? d : (e.state.gzhead = n, c) : d
                  }, t.deflate = function (e, n) {
                     var t, a, o, l;
                     if (!e || !e.state || 5 < n || n < 0) return e ? _(e, d) : d;
                     if (a = e.state, !e.output || !e.input && 0 !== e.avail_in || 666 === a.status && 4 !== n) return _(e, 0 === e.avail_out ? -5 : d);
                     if (a.strm = e, t = a.last_flush, a.last_flush = n, a.status === x)
                        if (2 === a.wrap) e.adler = 0, E(a, 31), E(a, 139), E(a, 8), a.gzhead ? (E(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), E(a, 255 & a.gzhead.time), E(a, a.gzhead.time >> 8 & 255), E(a, a.gzhead.time >> 16 & 255), E(a, a.gzhead.time >> 24 & 255), E(a, 9 === a.level ? 2 : 2 <= a.strategy || a.level < 2 ? 4 : 0), E(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (E(a, 255 & a.gzhead.extra.length), E(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (e.adler = s(e.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = 69) : (E(a, 0), E(a, 0), E(a, 0), E(a, 0), E(a, 0), E(a, 9 === a.level ? 2 : 2 <= a.strategy || a.level < 2 ? 4 : 0), E(a, 3), a.status = A);
                        else {
                           var f = h + (a.w_bits - 8 << 4) << 8;
                           f |= (2 <= a.strategy || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3) << 6, 0 !== a.strstart && (f |= 32), f += 31 - f % 31, a.status = A, I(a, f), 0 !== a.strstart && (I(a, e.adler >>> 16), I(a, 65535 & e.adler)), e.adler = 1
                        } if (69 === a.status)
                        if (a.gzhead.extra) {
                           for (o = a.pending; a.gzindex < (65535 & a.gzhead.extra.length) && (a.pending !== a.pending_buf_size || (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), z(e), o = a.pending, a.pending !== a.pending_buf_size));) E(a, 255 & a.gzhead.extra[a.gzindex]), a.gzindex++;
                           a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), a.gzindex === a.gzhead.extra.length && (a.gzindex = 0, a.status = 73)
                        } else a.status = 73;
                     if (73 === a.status)
                        if (a.gzhead.name) {
                           o = a.pending;
                           do {
                              if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), z(e), o = a.pending, a.pending === a.pending_buf_size)) {
                                 l = 1;
                                 break
                              }
                              l = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0, E(a, l)
                           } while (0 !== l);
                           a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), 0 === l && (a.gzindex = 0, a.status = 91)
                        } else a.status = 91;
                     if (91 === a.status)
                        if (a.gzhead.comment) {
                           o = a.pending;
                           do {
                              if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), z(e), o = a.pending, a.pending === a.pending_buf_size)) {
                                 l = 1;
                                 break
                              }
                              l = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0, E(a, l)
                           } while (0 !== l);
                           a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)), 0 === l && (a.status = 103)
                        } else a.status = 103;
                     if (103 === a.status && (a.gzhead.hcrc ? (a.pending + 2 > a.pending_buf_size && z(e), a.pending + 2 <= a.pending_buf_size && (E(a, 255 & e.adler), E(a, e.adler >> 8 & 255), e.adler = 0, a.status = A)) : a.status = A), 0 !== a.pending) {
                        if (z(e), 0 === e.avail_out) return a.last_flush = -1, c
                     } else if (0 === e.avail_in && R(n) <= R(t) && 4 !== n) return _(e, -5);
                     if (666 === a.status && 0 !== e.avail_in) return _(e, -5);
                     if (0 !== e.avail_in || 0 !== a.lookahead || n !== u && 666 !== a.status) {
                        var m = 2 === a.strategy ? function (e, n) {
                           for (var t;;) {
                              if (0 === e.lookahead && (B(e), 0 === e.lookahead)) {
                                 if (n === u) return 1;
                                 break
                              }
                              if (e.match_length = 0, t = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, t && (C(e, !1), 0 === e.strm.avail_out)) return 1
                           }
                           return e.insert = 0, 4 === n ? (C(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (C(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                        }(a, n) : 3 === a.strategy ? function (e, n) {
                           for (var t, r, a, o, s = e.window;;) {
                              if (e.lookahead <= k) {
                                 if (B(e), e.lookahead <= k && n === u) return 1;
                                 if (0 === e.lookahead) break
                              }
                              if (e.match_length = 0, e.lookahead >= w && 0 < e.strstart && (r = s[a = e.strstart - 1]) === s[++a] && r === s[++a] && r === s[++a]) {
                                 o = e.strstart + k;
                                 do {} while (r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && a < o);
                                 e.match_length = k - (o - a), e.match_length > e.lookahead && (e.match_length = e.lookahead)
                              }
                              if (e.match_length >= w ? (t = i._tr_tally(e, 1, e.match_length - w), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (t = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), t && (C(e, !1), 0 === e.strm.avail_out)) return 1
                           }
                           return e.insert = 0, 4 === n ? (C(e, !0), 0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (C(e, !1), 0 === e.strm.avail_out) ? 1 : 2
                        }(a, n) : r[a.level].func(a, n);
                        if (3 !== m && 4 !== m || (a.status = 666), 1 === m || 3 === m) return 0 === e.avail_out && (a.last_flush = -1), c;
                        if (2 === m && (1 === n ? i._tr_align(a) : 5 !== n && (i._tr_stored_block(a, 0, 0, !1), 3 === n && (S(a.head), 0 === a.lookahead && (a.strstart = 0, a.block_start = 0, a.insert = 0))), z(e), 0 === e.avail_out)) return a.last_flush = -1, c
                     }
                     return 4 !== n ? c : a.wrap <= 0 ? 1 : (2 === a.wrap ? (E(a, 255 & e.adler), E(a, e.adler >> 8 & 255), E(a, e.adler >> 16 & 255), E(a, e.adler >> 24 & 255), E(a, 255 & e.total_in), E(a, e.total_in >> 8 & 255), E(a, e.total_in >> 16 & 255), E(a, e.total_in >> 24 & 255)) : (I(a, e.adler >>> 16), I(a, 65535 & e.adler)), z(e), 0 < a.wrap && (a.wrap = -a.wrap), 0 !== a.pending ? c : 1)
                  }, t.deflateEnd = function (e) {
                     var n;
                     return e && e.state ? (n = e.state.status) !== x && 69 !== n && 73 !== n && 91 !== n && 103 !== n && n !== A && 666 !== n ? _(e, d) : (e.state = null, n === A ? _(e, -3) : c) : d
                  }, t.deflateSetDictionary = function (e, n) {
                     var t, r, i, s, l, u, f, h, m = n.length;
                     if (!e || !e.state) return d;
                     if (2 === (s = (t = e.state).wrap) || 1 === s && t.status !== x || t.lookahead) return d;
                     for (1 === s && (e.adler = o(e.adler, n, m, 0)), t.wrap = 0, m >= t.w_size && (0 === s && (S(t.head), t.strstart = 0, t.block_start = 0, t.insert = 0), h = new a.Buf8(t.w_size), a.arraySet(h, n, m - t.w_size, t.w_size, 0), n = h, m = t.w_size), l = e.avail_in, u = e.next_in, f = e.input, e.avail_in = m, e.next_in = 0, e.input = n, B(t); t.lookahead >= w;) {
                        for (r = t.strstart, i = t.lookahead - (w - 1); t.ins_h = (t.ins_h << t.hash_shift ^ t.window[r + w - 1]) & t.hash_mask, t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, --i;);
                        t.strstart = r, t.lookahead = w - 1, B(t)
                     }
                     return t.strstart += t.lookahead, t.block_start = t.strstart, t.insert = t.lookahead, t.lookahead = 0, t.match_length = t.prev_length = w - 1, t.match_available = 0, e.next_in = u, e.input = f, e.avail_in = l, t.wrap = s, c
                  }, t.deflateInfo = "pako deflate (from Nodeca project)"
               }, {
                  "../utils/common": 41,
                  "./adler32": 43,
                  "./crc32": 45,
                  "./messages": 51,
                  "./trees": 52
               }],
               47: [function (e, n, t) {
                  "use strict";
                  n.exports = function () {
                     this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
                  }
               }, {}],
               48: [function (e, n, t) {
                  "use strict";
                  n.exports = function (e, n) {
                     var t, r, a, i, o, s, l, u, c, d, f, h, m, p, v, g, b, w, k, y, x, A, _, R, S;
                     t = e.state, r = e.next_in, R = e.input, a = r + (e.avail_in - 5), i = e.next_out, S = e.output, o = i - (n - e.avail_out), s = i + (e.avail_out - 257), l = t.dmax, u = t.wsize, c = t.whave, d = t.wnext, f = t.window, h = t.hold, m = t.bits, p = t.lencode, v = t.distcode, g = (1 << t.lenbits) - 1, b = (1 << t.distbits) - 1;
                     e: do {
                        m < 15 && (h += R[r++] << m, m += 8, h += R[r++] << m, m += 8), w = p[h & g];
                        n: for (;;) {
                           if (h >>>= k = w >>> 24, m -= k, 0 == (k = w >>> 16 & 255)) S[i++] = 65535 & w;
                           else {
                              if (!(16 & k)) {
                                 if (0 == (64 & k)) {
                                    w = p[(65535 & w) + (h & (1 << k) - 1)];
                                    continue n
                                 }
                                 if (32 & k) {
                                    t.mode = 12;
                                    break e
                                 }
                                 e.msg = "invalid literal/length code", t.mode = 30;
                                 break e
                              }
                              y = 65535 & w, (k &= 15) && (m < k && (h += R[r++] << m, m += 8), y += h & (1 << k) - 1, h >>>= k, m -= k), m < 15 && (h += R[r++] << m, m += 8, h += R[r++] << m, m += 8), w = v[h & b];
                              t: for (;;) {
                                 if (h >>>= k = w >>> 24, m -= k, !(16 & (k = w >>> 16 & 255))) {
                                    if (0 == (64 & k)) {
                                       w = v[(65535 & w) + (h & (1 << k) - 1)];
                                       continue t
                                    }
                                    e.msg = "invalid distance code", t.mode = 30;
                                    break e
                                 }
                                 if (x = 65535 & w, m < (k &= 15) && (h += R[r++] << m, (m += 8) < k && (h += R[r++] << m, m += 8)), l < (x += h & (1 << k) - 1)) {
                                    e.msg = "invalid distance too far back", t.mode = 30;
                                    break e
                                 }
                                 if (h >>>= k, m -= k, (k = i - o) < x) {
                                    if (c < (k = x - k) && t.sane) {
                                       e.msg = "invalid distance too far back", t.mode = 30;
                                       break e
                                    }
                                    if (_ = f, (A = 0) === d) {
                                       if (A += u - k, k < y) {
                                          for (y -= k; S[i++] = f[A++], --k;);
                                          A = i - x, _ = S
                                       }
                                    } else if (d < k) {
                                       if (A += u + d - k, (k -= d) < y) {
                                          for (y -= k; S[i++] = f[A++], --k;);
                                          if (A = 0, d < y) {
                                             for (y -= k = d; S[i++] = f[A++], --k;);
                                             A = i - x, _ = S
                                          }
                                       }
                                    } else if (A += d - k, k < y) {
                                       for (y -= k; S[i++] = f[A++], --k;);
                                       A = i - x, _ = S
                                    }
                                    for (; 2 < y;) S[i++] = _[A++], S[i++] = _[A++], S[i++] = _[A++], y -= 3;
                                    y && (S[i++] = _[A++], 1 < y && (S[i++] = _[A++]))
                                 } else {
                                    for (A = i - x; S[i++] = S[A++], S[i++] = S[A++], S[i++] = S[A++], 2 < (y -= 3););
                                    y && (S[i++] = S[A++], 1 < y && (S[i++] = S[A++]))
                                 }
                                 break
                              }
                           }
                           break
                        }
                     } while (r < a && i < s);
                     r -= y = m >> 3, h &= (1 << (m -= y << 3)) - 1, e.next_in = r, e.next_out = i, e.avail_in = r < a ? a - r + 5 : 5 - (r - a), e.avail_out = i < s ? s - i + 257 : 257 - (i - s), t.hold = h, t.bits = m
                  }
               }, {}],
               49: [function (e, n, t) {
                  "use strict";
                  var r = e("../utils/common"),
                     a = e("./adler32"),
                     i = e("./crc32"),
                     o = e("./inffast"),
                     s = e("./inftrees"),
                     l = 0,
                     u = -2,
                     c = 1,
                     d = 852,
                     f = 592;

                  function h(e) {
                     return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
                  }

                  function m() {
                     this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
                  }

                  function p(e) {
                     var n;
                     return e && e.state ? (n = e.state, e.total_in = e.total_out = n.total = 0, e.msg = "", n.wrap && (e.adler = 1 & n.wrap), n.mode = c, n.last = 0, n.havedict = 0, n.dmax = 32768, n.head = null, n.hold = 0, n.bits = 0, n.lencode = n.lendyn = new r.Buf32(d), n.distcode = n.distdyn = new r.Buf32(f), n.sane = 1, n.back = -1, l) : u
                  }

                  function v(e) {
                     var n;
                     return e && e.state ? ((n = e.state).wsize = 0, n.whave = 0, n.wnext = 0, p(e)) : u
                  }

                  function g(e, n) {
                     var t, r;
                     return e && e.state ? (r = e.state, n < 0 ? (t = 0, n = -n) : (t = 1 + (n >> 4), n < 48 && (n &= 15)), n && (n < 8 || 15 < n) ? u : (null !== r.window && r.wbits !== n && (r.window = null), r.wrap = t, r.wbits = n, v(e))) : u
                  }

                  function b(e, n) {
                     var t, r;
                     return e ? (r = new m, (e.state = r).window = null, (t = g(e, n)) !== l && (e.state = null), t) : u
                  }
                  var w, k, y = !0;

                  function x(e) {
                     if (y) {
                        var n;
                        for (w = new r.Buf32(512), k = new r.Buf32(32), n = 0; n < 144;) e.lens[n++] = 8;
                        for (; n < 256;) e.lens[n++] = 9;
                        for (; n < 280;) e.lens[n++] = 7;
                        for (; n < 288;) e.lens[n++] = 8;
                        for (s(1, e.lens, 0, 288, w, 0, e.work, {
                              bits: 9
                           }), n = 0; n < 32;) e.lens[n++] = 5;
                        s(2, e.lens, 0, 32, k, 0, e.work, {
                           bits: 5
                        }), y = !1
                     }
                     e.lencode = w, e.lenbits = 9, e.distcode = k, e.distbits = 5
                  }

                  function A(e, n, t, a) {
                     var i, o = e.state;
                     return null === o.window && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new r.Buf8(o.wsize)), a >= o.wsize ? (r.arraySet(o.window, n, t - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : (a < (i = o.wsize - o.wnext) && (i = a), r.arraySet(o.window, n, t - a, i, o.wnext), (a -= i) ? (r.arraySet(o.window, n, t - a, a, 0), o.wnext = a, o.whave = o.wsize) : (o.wnext += i, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += i))), 0
                  }
                  t.inflateReset = v, t.inflateReset2 = g, t.inflateResetKeep = p, t.inflateInit = function (e) {
                     return b(e, 15)
                  }, t.inflateInit2 = b, t.inflate = function (e, n) {
                     var t, d, f, m, p, v, g, b, w, k, y, _, R, S, z, C, E, I, j, B, O, F, D, P, T = 0,
                        L = new r.Buf8(4),
                        M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                     if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return u;
                     12 === (t = e.state).mode && (t.mode = 13), p = e.next_out, f = e.output, g = e.avail_out, m = e.next_in, d = e.input, v = e.avail_in, b = t.hold, w = t.bits, k = v, y = g, F = l;
                     e: for (;;) switch (t.mode) {
                        case c:
                           if (0 === t.wrap) {
                              t.mode = 13;
                              break
                           }
                           for (; w < 16;) {
                              if (0 === v) break e;
                              v--, b += d[m++] << w, w += 8
                           }
                           if (2 & t.wrap && 35615 === b) {
                              L[t.check = 0] = 255 & b, L[1] = b >>> 8 & 255, t.check = i(t.check, L, 2, 0), w = b = 0, t.mode = 2;
                              break
                           }
                           if (t.flags = 0, t.head && (t.head.done = !1), !(1 & t.wrap) || (((255 & b) << 8) + (b >> 8)) % 31) {
                              e.msg = "incorrect header check", t.mode = 30;
                              break
                           }
                           if (8 != (15 & b)) {
                              e.msg = "unknown compression method", t.mode = 30;
                              break
                           }
                           if (w -= 4, O = 8 + (15 & (b >>>= 4)), 0 === t.wbits) t.wbits = O;
                           else if (O > t.wbits) {
                              e.msg = "invalid window size", t.mode = 30;
                              break
                           }
                           t.dmax = 1 << O, e.adler = t.check = 1, t.mode = 512 & b ? 10 : 12, w = b = 0;
                           break;
                        case 2:
                           for (; w < 16;) {
                              if (0 === v) break e;
                              v--, b += d[m++] << w, w += 8
                           }
                           if (t.flags = b, 8 != (255 & t.flags)) {
                              e.msg = "unknown compression method", t.mode = 30;
                              break
                           }
                           if (57344 & t.flags) {
                              e.msg = "unknown header flags set", t.mode = 30;
                              break
                           }
                           t.head && (t.head.text = b >> 8 & 1), 512 & t.flags && (L[0] = 255 & b, L[1] = b >>> 8 & 255, t.check = i(t.check, L, 2, 0)), w = b = 0, t.mode = 3;
                        case 3:
                           for (; w < 32;) {
                              if (0 === v) break e;
                              v--, b += d[m++] << w, w += 8
                           }
                           t.head && (t.head.time = b), 512 & t.flags && (L[0] = 255 & b, L[1] = b >>> 8 & 255, L[2] = b >>> 16 & 255, L[3] = b >>> 24 & 255, t.check = i(t.check, L, 4, 0)), w = b = 0, t.mode = 4;
                        case 4:
                           for (; w < 16;) {
                              if (0 === v) break e;
                              v--, b += d[m++] << w, w += 8
                           }
                           t.head && (t.head.xflags = 255 & b, t.head.os = b >> 8), 512 & t.flags && (L[0] = 255 & b, L[1] = b >>> 8 & 255, t.check = i(t.check, L, 2, 0)), w = b = 0, t.mode = 5;
                        case 5:
                           if (1024 & t.flags) {
                              for (; w < 16;) {
                                 if (0 === v) break e;
                                 v--, b += d[m++] << w, w += 8
                              }
                              t.length = b, t.head && (t.head.extra_len = b), 512 & t.flags && (L[0] = 255 & b, L[1] = b >>> 8 & 255, t.check = i(t.check, L, 2, 0)), w = b = 0
                           } else t.head && (t.head.extra = null);
                           t.mode = 6;
                        case 6:
                           if (1024 & t.flags && (v < (_ = t.length) && (_ = v), _ && (t.head && (O = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Array(t.head.extra_len)), r.arraySet(t.head.extra, d, m, _, O)), 512 & t.flags && (t.check = i(t.check, d, _, m)), v -= _, m += _, t.length -= _), t.length)) break e;
                           t.length = 0, t.mode = 7;
                        case 7:
                           if (2048 & t.flags) {
                              if (0 === v) break e;
                              for (_ = 0; O = d[m + _++], t.head && O && t.length < 65536 && (t.head.name += String.fromCharCode(O)), O && _ < v;);
                              if (512 & t.flags && (t.check = i(t.check, d, _, m)), v -= _, m += _, O) break e
                           } else t.head && (t.head.name = null);
                           t.length = 0, t.mode = 8;
                        case 8:
                           if (4096 & t.flags) {
                              if (0 === v) break e;
                              for (_ = 0; O = d[m + _++], t.head && O && t.length < 65536 && (t.head.comment += String.fromCharCode(O)), O && _ < v;);
                              if (512 & t.flags && (t.check = i(t.check, d, _, m)), v -= _, m += _, O) break e
                           } else t.head && (t.head.comment = null);
                           t.mode = 9;
                        case 9:
                           if (512 & t.flags) {
                              for (; w < 16;) {
                                 if (0 === v) break e;
                                 v--, b += d[m++] << w, w += 8
                              }
                              if (b !== (65535 & t.check)) {
                                 e.msg = "header crc mismatch", t.mode = 30;
                                 break
                              }
                              w = b = 0
                           }
                           t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), e.adler = t.check = 0, t.mode = 12;
                           break;
                        case 10:
                           for (; w < 32;) {
                              if (0 === v) break e;
                              v--, b += d[m++] << w, w += 8
                           }
                           e.adler = t.check = h(b), w = b = 0, t.mode = 11;
                        case 11:
                           if (0 === t.havedict) return e.next_out = p, e.avail_out = g, e.next_in = m, e.avail_in = v, t.hold = b, t.bits = w, 2;
                           e.adler = t.check = 1, t.mode = 12;
                        case 12:
                           if (5 === n || 6 === n) break e;
                        case 13:
                           if (t.last) {
                              b >>>= 7 & w, w -= 7 & w, t.mode = 27;
                              break
                           }
                           for (; w < 3;) {
                              if (0 === v) break e;
                              v--, b += d[m++] << w, w += 8
                           }
                           switch (t.last = 1 & b, w -= 1, 3 & (b >>>= 1)) {
                              case 0:
                                 t.mode = 14;
                                 break;
                              case 1:
                                 if (x(t), t.mode = 20, 6 !== n) break;
                                 b >>>= 2, w -= 2;
                                 break e;
                              case 2:
                                 t.mode = 17;
                                 break;
                              case 3:
                                 e.msg = "invalid block type", t.mode = 30
                           }
                           b >>>= 2, w -= 2;
                           break;
                        case 14:
                           for (b >>>= 7 & w, w -= 7 & w; w < 32;) {
                              if (0 === v) break e;
                              v--, b += d[m++] << w, w += 8
                           }
                           if ((65535 & b) != (b >>> 16 ^ 65535)) {
                              e.msg = "invalid stored block lengths", t.mode = 30;
                              break
                           }
                           if (t.length = 65535 & b, w = b = 0, t.mode = 15, 6 === n) break e;
                        case 15:
                           t.mode = 16;
                        case 16:
                           if (_ = t.length) {
                              if (v < _ && (_ = v), g < _ && (_ = g), 0 === _) break e;
                              r.arraySet(f, d, m, _, p), v -= _, m += _, g -= _, p += _, t.length -= _;
                              break
                           }
                           t.mode = 12;
                           break;
                        case 17:
                           for (; w < 14;) {
                              if (0 === v) break e;
                              v--, b += d[m++] << w, w += 8
                           }
                           if (t.nlen = 257 + (31 & b), b >>>= 5, w -= 5, t.ndist = 1 + (31 & b), b >>>= 5, w -= 5, t.ncode = 4 + (15 & b), b >>>= 4, w -= 4, 286 < t.nlen || 30 < t.ndist) {
                              e.msg = "too many length or distance symbols", t.mode = 30;
                              break
                           }
                           t.have = 0, t.mode = 18;
                        case 18:
                           for (; t.have < t.ncode;) {
                              for (; w < 3;) {
                                 if (0 === v) break e;
                                 v--, b += d[m++] << w, w += 8
                              }
                              t.lens[M[t.have++]] = 7 & b, b >>>= 3, w -= 3
                           }
                           for (; t.have < 19;) t.lens[M[t.have++]] = 0;
                           if (t.lencode = t.lendyn, t.lenbits = 7, D = {
                                 bits: t.lenbits
                              }, F = s(0, t.lens, 0, 19, t.lencode, 0, t.work, D), t.lenbits = D.bits, F) {
                              e.msg = "invalid code lengths set", t.mode = 30;
                              break
                           }
                           t.have = 0, t.mode = 19;
                        case 19:
                           for (; t.have < t.nlen + t.ndist;) {
                              for (; C = (T = t.lencode[b & (1 << t.lenbits) - 1]) >>> 16 & 255, E = 65535 & T, !((z = T >>> 24) <= w);) {
                                 if (0 === v) break e;
                                 v--, b += d[m++] << w, w += 8
                              }
                              if (E < 16) b >>>= z, w -= z, t.lens[t.have++] = E;
                              else {
                                 if (16 === E) {
                                    for (P = z + 2; w < P;) {
                                       if (0 === v) break e;
                                       v--, b += d[m++] << w, w += 8
                                    }
                                    if (b >>>= z, w -= z, 0 === t.have) {
                                       e.msg = "invalid bit length repeat", t.mode = 30;
                                       break
                                    }
                                    O = t.lens[t.have - 1], _ = 3 + (3 & b), b >>>= 2, w -= 2
                                 } else if (17 === E) {
                                    for (P = z + 3; w < P;) {
                                       if (0 === v) break e;
                                       v--, b += d[m++] << w, w += 8
                                    }
                                    w -= z, O = 0, _ = 3 + (7 & (b >>>= z)), b >>>= 3, w -= 3
                                 } else {
                                    for (P = z + 7; w < P;) {
                                       if (0 === v) break e;
                                       v--, b += d[m++] << w, w += 8
                                    }
                                    w -= z, O = 0, _ = 11 + (127 & (b >>>= z)), b >>>= 7, w -= 7
                                 }
                                 if (t.have + _ > t.nlen + t.ndist) {
                                    e.msg = "invalid bit length repeat", t.mode = 30;
                                    break
                                 }
                                 for (; _--;) t.lens[t.have++] = O
                              }
                           }
                           if (30 === t.mode) break;
                           if (0 === t.lens[256]) {
                              e.msg = "invalid code -- missing end-of-block", t.mode = 30;
                              break
                           }
                           if (t.lenbits = 9, D = {
                                 bits: t.lenbits
                              }, F = s(1, t.lens, 0, t.nlen, t.lencode, 0, t.work, D), t.lenbits = D.bits, F) {
                              e.msg = "invalid literal/lengths set", t.mode = 30;
                              break
                           }
                           if (t.distbits = 6, t.distcode = t.distdyn, D = {
                                 bits: t.distbits
                              }, F = s(2, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, D), t.distbits = D.bits, F) {
                              e.msg = "invalid distances set", t.mode = 30;
                              break
                           }
                           if (t.mode = 20, 6 === n) break e;
                        case 20:
                           t.mode = 21;
                        case 21:
                           if (6 <= v && 258 <= g) {
                              e.next_out = p, e.avail_out = g, e.next_in = m, e.avail_in = v, t.hold = b, t.bits = w, o(e, y), p = e.next_out, f = e.output, g = e.avail_out, m = e.next_in, d = e.input, v = e.avail_in, b = t.hold, w = t.bits, 12 === t.mode && (t.back = -1);
                              break
                           }
                           for (t.back = 0; C = (T = t.lencode[b & (1 << t.lenbits) - 1]) >>> 16 & 255, E = 65535 & T, !((z = T >>> 24) <= w);) {
                              if (0 === v) break e;
                              v--, b += d[m++] << w, w += 8
                           }
                           if (C && 0 == (240 & C)) {
                              for (I = z, j = C, B = E; C = (T = t.lencode[B + ((b & (1 << I + j) - 1) >> I)]) >>> 16 & 255, E = 65535 & T, !(I + (z = T >>> 24) <= w);) {
                                 if (0 === v) break e;
                                 v--, b += d[m++] << w, w += 8
                              }
                              b >>>= I, w -= I, t.back += I
                           }
                           if (b >>>= z, w -= z, t.back += z, t.length = E, 0 === C) {
                              t.mode = 26;
                              break
                           }
                           if (32 & C) {
                              t.back = -1, t.mode = 12;
                              break
                           }
                           if (64 & C) {
                              e.msg = "invalid literal/length code", t.mode = 30;
                              break
                           }
                           t.extra = 15 & C, t.mode = 22;
                        case 22:
                           if (t.extra) {
                              for (P = t.extra; w < P;) {
                                 if (0 === v) break e;
                                 v--, b += d[m++] << w, w += 8
                              }
                              t.length += b & (1 << t.extra) - 1, b >>>= t.extra, w -= t.extra, t.back += t.extra
                           }
                           t.was = t.length, t.mode = 23;
                        case 23:
                           for (; C = (T = t.distcode[b & (1 << t.distbits) - 1]) >>> 16 & 255, E = 65535 & T, !((z = T >>> 24) <= w);) {
                              if (0 === v) break e;
                              v--, b += d[m++] << w, w += 8
                           }
                           if (0 == (240 & C)) {
                              for (I = z, j = C, B = E; C = (T = t.distcode[B + ((b & (1 << I + j) - 1) >> I)]) >>> 16 & 255, E = 65535 & T, !(I + (z = T >>> 24) <= w);) {
                                 if (0 === v) break e;
                                 v--, b += d[m++] << w, w += 8
                              }
                              b >>>= I, w -= I, t.back += I
                           }
                           if (b >>>= z, w -= z, t.back += z, 64 & C) {
                              e.msg = "invalid distance code", t.mode = 30;
                              break
                           }
                           t.offset = E, t.extra = 15 & C, t.mode = 24;
                        case 24:
                           if (t.extra) {
                              for (P = t.extra; w < P;) {
                                 if (0 === v) break e;
                                 v--, b += d[m++] << w, w += 8
                              }
                              t.offset += b & (1 << t.extra) - 1, b >>>= t.extra, w -= t.extra, t.back += t.extra
                           }
                           if (t.offset > t.dmax) {
                              e.msg = "invalid distance too far back", t.mode = 30;
                              break
                           }
                           t.mode = 25;
                        case 25:
                           if (0 === g) break e;
                           if (_ = y - g, t.offset > _) {
                              if ((_ = t.offset - _) > t.whave && t.sane) {
                                 e.msg = "invalid distance too far back", t.mode = 30;
                                 break
                              }
                              R = _ > t.wnext ? (_ -= t.wnext, t.wsize - _) : t.wnext - _, _ > t.length && (_ = t.length), S = t.window
                           } else S = f, R = p - t.offset, _ = t.length;
                           for (g < _ && (_ = g), g -= _, t.length -= _; f[p++] = S[R++], --_;);
                           0 === t.length && (t.mode = 21);
                           break;
                        case 26:
                           if (0 === g) break e;
                           f[p++] = t.length, g--, t.mode = 21;
                           break;
                        case 27:
                           if (t.wrap) {
                              for (; w < 32;) {
                                 if (0 === v) break e;
                                 v--, b |= d[m++] << w, w += 8
                              }
                              if (y -= g, e.total_out += y, t.total += y, y && (e.adler = t.check = t.flags ? i(t.check, f, y, p - y) : a(t.check, f, y, p - y)), y = g, (t.flags ? b : h(b)) !== t.check) {
                                 e.msg = "incorrect data check", t.mode = 30;
                                 break
                              }
                              w = b = 0
                           }
                           t.mode = 28;
                        case 28:
                           if (t.wrap && t.flags) {
                              for (; w < 32;) {
                                 if (0 === v) break e;
                                 v--, b += d[m++] << w, w += 8
                              }
                              if (b !== (4294967295 & t.total)) {
                                 e.msg = "incorrect length check", t.mode = 30;
                                 break
                              }
                              w = b = 0
                           }
                           t.mode = 29;
                        case 29:
                           F = 1;
                           break e;
                        case 30:
                           F = -3;
                           break e;
                        case 31:
                           return -4;
                        default:
                           return u
                     }
                     return e.next_out = p, e.avail_out = g, e.next_in = m, e.avail_in = v, t.hold = b, t.bits = w, (t.wsize || y !== e.avail_out && t.mode < 30 && (t.mode < 27 || 4 !== n)) && A(e, e.output, e.next_out, y - e.avail_out) ? (t.mode = 31, -4) : (k -= e.avail_in, y -= e.avail_out, e.total_in += k, e.total_out += y, t.total += y, t.wrap && y && (e.adler = t.check = t.flags ? i(t.check, f, y, e.next_out - y) : a(t.check, f, y, e.next_out - y)), e.data_type = t.bits + (t.last ? 64 : 0) + (12 === t.mode ? 128 : 0) + (20 === t.mode || 15 === t.mode ? 256 : 0), (0 == k && 0 === y || 4 === n) && F === l && (F = -5), F)
                  }, t.inflateEnd = function (e) {
                     if (!e || !e.state) return u;
                     var n = e.state;
                     return n.window && (n.window = null), e.state = null, l
                  }, t.inflateGetHeader = function (e, n) {
                     var t;
                     return e && e.state ? 0 == (2 & (t = e.state).wrap) ? u : ((t.head = n).done = !1, l) : u
                  }, t.inflateSetDictionary = function (e, n) {
                     var t, r = n.length;
                     return e && e.state ? 0 !== (t = e.state).wrap && 11 !== t.mode ? u : 11 === t.mode && a(1, n, r, 0) !== t.check ? -3 : A(e, n, r, r) ? (t.mode = 31, -4) : (t.havedict = 1, l) : u
                  }, t.inflateInfo = "pako inflate (from Nodeca project)"
               }, {
                  "../utils/common": 41,
                  "./adler32": 43,
                  "./crc32": 45,
                  "./inffast": 48,
                  "./inftrees": 50
               }],
               50: [function (e, n, t) {
                  "use strict";
                  var r = e("../utils/common"),
                     a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                     i = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                     o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                     s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                  n.exports = function (e, n, t, l, u, c, d, f) {
                     var h, m, p, v, g, b, w, k, y, x = f.bits,
                        A = 0,
                        _ = 0,
                        R = 0,
                        S = 0,
                        z = 0,
                        C = 0,
                        E = 0,
                        I = 0,
                        j = 0,
                        B = 0,
                        O = null,
                        F = 0,
                        D = new r.Buf16(16),
                        P = new r.Buf16(16),
                        T = null,
                        L = 0;
                     for (A = 0; A <= 15; A++) D[A] = 0;
                     for (_ = 0; _ < l; _++) D[n[t + _]]++;
                     for (z = x, S = 15; 1 <= S && 0 === D[S]; S--);
                     if (S < z && (z = S), 0 === S) return u[c++] = 20971520, u[c++] = 20971520, f.bits = 1, 0;
                     for (R = 1; R < S && 0 === D[R]; R++);
                     for (z < R && (z = R), A = I = 1; A <= 15; A++)
                        if (I <<= 1, (I -= D[A]) < 0) return -1;
                     if (0 < I && (0 === e || 1 !== S)) return -1;
                     for (P[1] = 0, A = 1; A < 15; A++) P[A + 1] = P[A] + D[A];
                     for (_ = 0; _ < l; _++) 0 !== n[t + _] && (d[P[n[t + _]]++] = _);
                     if (b = 0 === e ? (O = T = d, 19) : 1 === e ? (O = a, F -= 257, T = i, L -= 257, 256) : (O = o, T = s, -1), A = R, g = c, E = _ = B = 0, p = -1, v = (j = 1 << (C = z)) - 1, 1 === e && 852 < j || 2 === e && 592 < j) return 1;
                     for (;;) {
                        for (w = A - E, y = d[_] < b ? (k = 0, d[_]) : d[_] > b ? (k = T[L + d[_]], O[F + d[_]]) : (k = 96, 0), h = 1 << A - E, R = m = 1 << C; u[g + (B >> E) + (m -= h)] = w << 24 | k << 16 | y | 0, 0 !== m;);
                        for (h = 1 << A - 1; B & h;) h >>= 1;
                        if (0 !== h ? (B &= h - 1, B += h) : B = 0, _++, 0 == --D[A]) {
                           if (A === S) break;
                           A = n[t + d[_]]
                        }
                        if (z < A && (B & v) !== p) {
                           for (0 === E && (E = z), g += R, I = 1 << (C = A - E); C + E < S && !((I -= D[C + E]) <= 0);) C++, I <<= 1;
                           if (j += 1 << C, 1 === e && 852 < j || 2 === e && 592 < j) return 1;
                           u[p = B & v] = z << 24 | C << 16 | g - c | 0
                        }
                     }
                     return 0 !== B && (u[g + B] = A - E << 24 | 64 << 16 | 0), f.bits = z, 0
                  }
               }, {
                  "../utils/common": 41
               }],
               51: [function (e, n, t) {
                  "use strict";
                  n.exports = {
                     2: "need dictionary",
                     1: "stream end",
                     0: "",
                     "-1": "file error",
                     "-2": "stream error",
                     "-3": "data error",
                     "-4": "insufficient memory",
                     "-5": "buffer error",
                     "-6": "incompatible version"
                  }
               }, {}],
               52: [function (e, n, t) {
                  "use strict";
                  var r = e("../utils/common");

                  function a(e) {
                     for (var n = e.length; 0 <= --n;) e[n] = 0
                  }
                  var i = 256,
                     o = 286,
                     s = 30,
                     l = 15,
                     u = 16,
                     c = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                     d = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                     f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                     h = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                     m = new Array(576);
                  a(m);
                  var p = new Array(60);
                  a(p);
                  var v = new Array(512);
                  a(v);
                  var g = new Array(256);
                  a(g);
                  var b = new Array(29);
                  a(b);
                  var w, k, y, x = new Array(s);

                  function A(e, n, t, r, a) {
                     this.static_tree = e, this.extra_bits = n, this.extra_base = t, this.elems = r, this.max_length = a, this.has_stree = e && e.length
                  }

                  function _(e, n) {
                     this.dyn_tree = e, this.max_code = 0, this.stat_desc = n
                  }

                  function R(e) {
                     return e < 256 ? v[e] : v[256 + (e >>> 7)]
                  }

                  function S(e, n) {
                     e.pending_buf[e.pending++] = 255 & n, e.pending_buf[e.pending++] = n >>> 8 & 255
                  }

                  function z(e, n, t) {
                     e.bi_valid > u - t ? (e.bi_buf |= n << e.bi_valid & 65535, S(e, e.bi_buf), e.bi_buf = n >> u - e.bi_valid, e.bi_valid += t - u) : (e.bi_buf |= n << e.bi_valid & 65535, e.bi_valid += t)
                  }

                  function C(e, n, t) {
                     z(e, t[2 * n], t[2 * n + 1])
                  }

                  function E(e, n) {
                     for (var t = 0; t |= 1 & e, e >>>= 1, t <<= 1, 0 < --n;);
                     return t >>> 1
                  }

                  function I(e, n, t) {
                     var r, a, i = new Array(l + 1),
                        o = 0;
                     for (r = 1; r <= l; r++) i[r] = o = o + t[r - 1] << 1;
                     for (a = 0; a <= n; a++) {
                        var s = e[2 * a + 1];
                        0 !== s && (e[2 * a] = E(i[s]++, s))
                     }
                  }

                  function j(e) {
                     var n;
                     for (n = 0; n < o; n++) e.dyn_ltree[2 * n] = 0;
                     for (n = 0; n < s; n++) e.dyn_dtree[2 * n] = 0;
                     for (n = 0; n < 19; n++) e.bl_tree[2 * n] = 0;
                     e.dyn_ltree[512] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
                  }

                  function B(e) {
                     8 < e.bi_valid ? S(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
                  }

                  function O(e, n, t, r) {
                     var a = 2 * n,
                        i = 2 * t;
                     return e[a] < e[i] || e[a] === e[i] && r[n] <= r[t]
                  }

                  function F(e, n, t) {
                     for (var r = e.heap[t], a = t << 1; a <= e.heap_len && (a < e.heap_len && O(n, e.heap[a + 1], e.heap[a], e.depth) && a++, !O(n, r, e.heap[a], e.depth));) e.heap[t] = e.heap[a], t = a, a <<= 1;
                     e.heap[t] = r
                  }

                  function D(e, n, t) {
                     var r, a, o, s, l = 0;
                     if (0 !== e.last_lit)
                        for (; r = e.pending_buf[e.d_buf + 2 * l] << 8 | e.pending_buf[e.d_buf + 2 * l + 1], a = e.pending_buf[e.l_buf + l], l++, 0 === r ? C(e, a, n) : (C(e, (o = g[a]) + i + 1, n), 0 !== (s = c[o]) && z(e, a -= b[o], s), C(e, o = R(--r), t), 0 !== (s = d[o]) && z(e, r -= x[o], s)), l < e.last_lit;);
                     C(e, 256, n)
                  }

                  function P(e, n) {
                     var t, r, a, i = n.dyn_tree,
                        o = n.stat_desc.static_tree,
                        s = n.stat_desc.has_stree,
                        u = n.stat_desc.elems,
                        c = -1;
                     for (e.heap_len = 0, e.heap_max = 573, t = 0; t < u; t++) 0 !== i[2 * t] ? (e.heap[++e.heap_len] = c = t, e.depth[t] = 0) : i[2 * t + 1] = 0;
                     for (; e.heap_len < 2;) i[2 * (a = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1, e.depth[a] = 0, e.opt_len--, s && (e.static_len -= o[2 * a + 1]);
                     for (n.max_code = c, t = e.heap_len >> 1; 1 <= t; t--) F(e, i, t);
                     for (a = u; t = e.heap[1], e.heap[1] = e.heap[e.heap_len--], F(e, i, 1), r = e.heap[1], e.heap[--e.heap_max] = t, e.heap[--e.heap_max] = r, i[2 * a] = i[2 * t] + i[2 * r], e.depth[a] = (e.depth[t] >= e.depth[r] ? e.depth[t] : e.depth[r]) + 1, i[2 * t + 1] = i[2 * r + 1] = a, e.heap[1] = a++, F(e, i, 1), 2 <= e.heap_len;);
                     e.heap[--e.heap_max] = e.heap[1],
                        function (e, n) {
                           var t, r, a, i, o, s, u = n.dyn_tree,
                              c = n.max_code,
                              d = n.stat_desc.static_tree,
                              f = n.stat_desc.has_stree,
                              h = n.stat_desc.extra_bits,
                              m = n.stat_desc.extra_base,
                              p = n.stat_desc.max_length,
                              v = 0;
                           for (i = 0; i <= l; i++) e.bl_count[i] = 0;
                           for (u[2 * e.heap[e.heap_max] + 1] = 0, t = e.heap_max + 1; t < 573; t++) p < (i = u[2 * u[2 * (r = e.heap[t]) + 1] + 1] + 1) && (i = p, v++), u[2 * r + 1] = i, c < r || (e.bl_count[i]++, o = 0, m <= r && (o = h[r - m]), s = u[2 * r], e.opt_len += s * (i + o), f && (e.static_len += s * (d[2 * r + 1] + o)));
                           if (0 !== v) {
                              do {
                                 for (i = p - 1; 0 === e.bl_count[i];) i--;
                                 e.bl_count[i]--, e.bl_count[i + 1] += 2, e.bl_count[p]--, v -= 2
                              } while (0 < v);
                              for (i = p; 0 !== i; i--)
                                 for (r = e.bl_count[i]; 0 !== r;) c < (a = e.heap[--t]) || (u[2 * a + 1] !== i && (e.opt_len += (i - u[2 * a + 1]) * u[2 * a], u[2 * a + 1] = i), r--)
                           }
                        }(e, n), I(i, c, e.bl_count)
                  }

                  function T(e, n, t) {
                     var r, a, i = -1,
                        o = n[1],
                        s = 0,
                        l = 7,
                        u = 4;
                     for (0 === o && (l = 138, u = 3), n[2 * (t + 1) + 1] = 65535, r = 0; r <= t; r++) a = o, o = n[2 * (r + 1) + 1], ++s < l && a === o || (s < u ? e.bl_tree[2 * a] += s : 0 !== a ? (a !== i && e.bl_tree[2 * a]++, e.bl_tree[32]++) : s <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++, i = a, u = (s = 0) === o ? (l = 138, 3) : a === o ? (l = 6, 3) : (l = 7, 4))
                  }

                  function L(e, n, t) {
                     var r, a, i = -1,
                        o = n[1],
                        s = 0,
                        l = 7,
                        u = 4;
                     for (0 === o && (l = 138, u = 3), r = 0; r <= t; r++)
                        if (a = o, o = n[2 * (r + 1) + 1], !(++s < l && a === o)) {
                           if (s < u)
                              for (; C(e, a, e.bl_tree), 0 != --s;);
                           else 0 !== a ? (a !== i && (C(e, a, e.bl_tree), s--), C(e, 16, e.bl_tree), z(e, s - 3, 2)) : s <= 10 ? (C(e, 17, e.bl_tree), z(e, s - 3, 3)) : (C(e, 18, e.bl_tree), z(e, s - 11, 7));
                           i = a, u = (s = 0) === o ? (l = 138, 3) : a === o ? (l = 6, 3) : (l = 7, 4)
                        }
                  }
                  a(x);
                  var M = !1;

                  function W(e, n, t, a) {
                     z(e, 0 + (a ? 1 : 0), 3),
                        function (e, n, t, a) {
                           B(e), S(e, t), S(e, ~t), r.arraySet(e.pending_buf, e.window, n, t, e.pending), e.pending += t
                        }(e, n, t)
                  }
                  t._tr_init = function (e) {
                     M || (function () {
                        var e, n, t, r, a, i = new Array(l + 1);
                        for (r = t = 0; r < 28; r++)
                           for (b[r] = t, e = 0; e < 1 << c[r]; e++) g[t++] = r;
                        for (g[t - 1] = r, r = a = 0; r < 16; r++)
                           for (x[r] = a, e = 0; e < 1 << d[r]; e++) v[a++] = r;
                        for (a >>= 7; r < s; r++)
                           for (x[r] = a << 7, e = 0; e < 1 << d[r] - 7; e++) v[256 + a++] = r;
                        for (n = 0; n <= l; n++) i[n] = 0;
                        for (e = 0; e <= 143;) m[2 * e + 1] = 8, e++, i[8]++;
                        for (; e <= 255;) m[2 * e + 1] = 9, e++, i[9]++;
                        for (; e <= 279;) m[2 * e + 1] = 7, e++, i[7]++;
                        for (; e <= 287;) m[2 * e + 1] = 8, e++, i[8]++;
                        for (I(m, 287, i), e = 0; e < s; e++) p[2 * e + 1] = 5, p[2 * e] = E(e, 5);
                        w = new A(m, c, 257, o, l), k = new A(p, d, 0, s, l), y = new A(new Array(0), f, 0, 19, 7)
                     }(), M = !0), e.l_desc = new _(e.dyn_ltree, w), e.d_desc = new _(e.dyn_dtree, k), e.bl_desc = new _(e.bl_tree, y), e.bi_buf = 0, e.bi_valid = 0, j(e)
                  }, t._tr_stored_block = W, t._tr_flush_block = function (e, n, t, r) {
                     var a, o, s = 0;
                     0 < e.level ? (2 === e.strm.data_type && (e.strm.data_type = function (e) {
                        var n, t = 4093624447;
                        for (n = 0; n <= 31; n++, t >>>= 1)
                           if (1 & t && 0 !== e.dyn_ltree[2 * n]) return 0;
                        if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return 1;
                        for (n = 32; n < i; n++)
                           if (0 !== e.dyn_ltree[2 * n]) return 1;
                        return 0
                     }(e)), P(e, e.l_desc), P(e, e.d_desc), s = function (e) {
                        var n;
                        for (T(e, e.dyn_ltree, e.l_desc.max_code), T(e, e.dyn_dtree, e.d_desc.max_code), P(e, e.bl_desc), n = 18; 3 <= n && 0 === e.bl_tree[2 * h[n] + 1]; n--);
                        return e.opt_len += 3 * (n + 1) + 5 + 5 + 4, n
                     }(e), a = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= a && (a = o)) : a = o = t + 5, t + 4 <= a && -1 !== n ? W(e, n, t, r) : 4 === e.strategy || o === a ? (z(e, 2 + (r ? 1 : 0), 3), D(e, m, p)) : (z(e, 4 + (r ? 1 : 0), 3), function (e, n, t, r) {
                        var a;
                        for (z(e, n - 257, 5), z(e, t - 1, 5), z(e, r - 4, 4), a = 0; a < r; a++) z(e, e.bl_tree[2 * h[a] + 1], 3);
                        L(e, e.dyn_ltree, n - 1), L(e, e.dyn_dtree, t - 1)
                     }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), D(e, e.dyn_ltree, e.dyn_dtree)), j(e), r && B(e)
                  }, t._tr_tally = function (e, n, t) {
                     return e.pending_buf[e.d_buf + 2 * e.last_lit] = n >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & n, e.pending_buf[e.l_buf + e.last_lit] = 255 & t, e.last_lit++, 0 === n ? e.dyn_ltree[2 * t]++ : (e.matches++, n--, e.dyn_ltree[2 * (g[t] + i + 1)]++, e.dyn_dtree[2 * R(n)]++), e.last_lit === e.lit_bufsize - 1
                  }, t._tr_align = function (e) {
                     z(e, 2, 3), C(e, 256, m),
                        function (e) {
                           16 === e.bi_valid ? (S(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
                        }(e)
                  }
               }, {
                  "../utils/common": 41
               }],
               53: [function (e, n, t) {
                  "use strict";
                  n.exports = function () {
                     this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
                  }
               }, {}],
               54: [function (e, n, r) {
                  (function (e) {
                     ! function (e, n) {
                        "use strict";
                        if (!e.setImmediate) {
                           var t, r, a, i, o = 1,
                              s = {},
                              l = !1,
                              u = e.document,
                              c = Object.getPrototypeOf && Object.getPrototypeOf(e);
                           c = c && c.setTimeout ? c : e, t = "[object process]" === {}.toString.call(e.process) ? function (e) {
                              process.nextTick((function () {
                                 f(e)
                              }))
                           } : function () {
                              if (e.postMessage && !e.importScripts) {
                                 var n = !0,
                                    t = e.onmessage;
                                 return e.onmessage = function () {
                                    n = !1
                                 }, e.postMessage("", "*"), e.onmessage = t, n
                              }
                           }() ? (i = "setImmediate$" + Math.random() + "$", e.addEventListener ? e.addEventListener("message", h, !1) : e.attachEvent("onmessage", h), function (n) {
                              e.postMessage(i + n, "*")
                           }) : e.MessageChannel ? ((a = new MessageChannel).port1.onmessage = function (e) {
                              f(e.data)
                           }, function (e) {
                              a.port2.postMessage(e)
                           }) : u && "onreadystatechange" in u.createElement("script") ? (r = u.documentElement, function (e) {
                              var n = u.createElement("script");
                              n.onreadystatechange = function () {
                                 f(e), n.onreadystatechange = null, r.removeChild(n), n = null
                              }, r.appendChild(n)
                           }) : function (e) {
                              setTimeout(f, 0, e)
                           }, c.setImmediate = function (e) {
                              "function" != typeof e && (e = new Function("" + e));
                              for (var n = new Array(arguments.length - 1), r = 0; r < n.length; r++) n[r] = arguments[r + 1];
                              var a = {
                                 callback: e,
                                 args: n
                              };
                              return s[o] = a, t(o), o++
                           }, c.clearImmediate = d
                        }

                        function d(e) {
                           delete s[e]
                        }

                        function f(e) {
                           if (l) setTimeout(f, 0, e);
                           else {
                              var t = s[e];
                              if (t) {
                                 l = !0;
                                 try {
                                    ! function (e) {
                                       var t = e.callback,
                                          r = e.args;
                                       switch (r.length) {
                                          case 0:
                                             t();
                                             break;
                                          case 1:
                                             t(r[0]);
                                             break;
                                          case 2:
                                             t(r[0], r[1]);
                                             break;
                                          case 3:
                                             t(r[0], r[1], r[2]);
                                             break;
                                          default:
                                             t.apply(n, r)
                                       }
                                    }(t)
                                 } finally {
                                    d(e), l = !1
                                 }
                              }
                           }
                        }

                        function h(n) {
                           n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(i) && f(+n.data.slice(i.length))
                        }
                     }("undefined" == typeof self ? void 0 === e ? this : e : self)
                  }).call(this, void 0 !== t.g ? t.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
               }, {}]
            }, {}, [10])(10)
         },
         62: e => {
            "use strict";
            var n = [];

            function t(e) {
               for (var t = -1, r = 0; r < n.length; r++)
                  if (n[r].identifier === e) {
                     t = r;
                     break
                  } return t
            }

            function r(e, r) {
               for (var i = {}, o = [], s = 0; s < e.length; s++) {
                  var l = e[s],
                     u = r.base ? l[0] + r.base : l[0],
                     c = i[u] || 0,
                     d = "".concat(u, " ").concat(c);
                  i[u] = c + 1;
                  var f = t(d),
                     h = {
                        css: l[1],
                        media: l[2],
                        sourceMap: l[3],
                        supports: l[4],
                        layer: l[5]
                     };
                  if (-1 !== f) n[f].references++, n[f].updater(h);
                  else {
                     var m = a(h, r);
                     r.byIndex = s, n.splice(s, 0, {
                        identifier: d,
                        updater: m,
                        references: 1
                     })
                  }
                  o.push(d)
               }
               return o
            }

            function a(e, n) {
               var t = n.domAPI(n);
               return t.update(e),
                  function (n) {
                     if (n) {
                        if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return;
                        t.update(e = n)
                     } else t.remove()
                  }
            }
            e.exports = function (e, a) {
               var i = r(e = e || [], a = a || {});
               return function (e) {
                  e = e || [];
                  for (var o = 0; o < i.length; o++) {
                     var s = t(i[o]);
                     n[s].references--
                  }
                  for (var l = r(e, a), u = 0; u < i.length; u++) {
                     var c = t(i[u]);
                     0 === n[c].references && (n[c].updater(), n.splice(c, 1))
                  }
                  i = l
               }
            }
         },
         793: e => {
            "use strict";
            var n = {};
            e.exports = function (e, t) {
               var r = function (e) {
                  if (void 0 === n[e]) {
                     var t = document.querySelector(e);
                     if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head
                     } catch (e) {
                        t = null
                     }
                     n[e] = t
                  }
                  return n[e]
               }(e);
               if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
               r.appendChild(t)
            }
         },
         173: e => {
            "use strict";
            e.exports = function (e) {
               var n = document.createElement("style");
               return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
            }
         },
         892: (e, n, t) => {
            "use strict";
            e.exports = function (e) {
               var n = t.nc;
               n && e.setAttribute("nonce", n)
            }
         },
         36: e => {
            "use strict";
            e.exports = function (e) {
               if ("undefined" == typeof document) return {
                  update: function () {},
                  remove: function () {}
               };
               var n = e.insertStyleElement(e);
               return {
                  update: function (t) {
                     ! function (e, n, t) {
                        var r = "";
                        t.supports && (r += "@supports (".concat(t.supports, ") {")), t.media && (r += "@media ".concat(t.media, " {"));
                        var a = void 0 !== t.layer;
                        a && (r += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), r += t.css, a && (r += "}"), t.media && (r += "}"), t.supports && (r += "}");
                        var i = t.sourceMap;
                        i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), n.styleTagTransform(r, e, n.options)
                     }(n, e, t)
                  },
                  remove: function () {
                     ! function (e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e)
                     }(n)
                  }
               }
            }
         },
         464: e => {
            "use strict";
            e.exports = function (e, n) {
               if (n.styleSheet) n.styleSheet.cssText = e;
               else {
                  for (; n.firstChild;) n.removeChild(n.firstChild);
                  n.appendChild(document.createTextNode(e))
               }
            }
         },
         899: (e, n, t) => {
            "use strict";
            e.exports = t.p + "6a842d2e726efcf6d858.wasm"
         },
         878: (e, n, t) => {
            "use strict";
            e.exports = t.p + "570666ea80120318b43d.wasm"
         }
      },
      r = {};

   function a(e) {
      var n = r[e];
      if (void 0 !== n) return n.exports;
      var i = r[e] = {
         id: e,
         loaded: !1,
         exports: {}
      };
      return t[e](i, i.exports, a), i.loaded = !0, i.exports
   }
   a.m = t, a.n = e => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return a.d(n, {
         a: n
      }), n
   }, a.d = (e, n) => {
      for (var t in n) a.o(n, t) && !a.o(e, t) && Object.defineProperty(e, t, {
         enumerable: !0,
         get: n[t]
      })
   }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce(((n, t) => (a.f[t](e, n), n)), [])), a.u = e => e + ".index.js", a.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
         return this || new Function("return this")()
      } catch (e) {
         if ("object" == typeof window) return window
      }
   }(), a.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
      enumerable: !0,
      set: () => {
         throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
      }
   }), e), a.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), e = {}, n = "ruffle-demo:", a.l = (t, r, i, o) => {
      if (e[t]) e[t].push(r);
      else {
         var s, l;
         if (void 0 !== i)
            for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
               var d = u[c];
               if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == n + i) {
                  s = d;
                  break
               }
            }
         s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", n + i), s.src = t), e[t] = [r];
         var f = (n, r) => {
               s.onerror = s.onload = null, clearTimeout(h);
               var a = e[t];
               if (delete e[t], s.parentNode && s.parentNode.removeChild(s), a && a.forEach((e => e(r))), n) return n(r)
            },
            h = setTimeout(f.bind(null, void 0, {
               type: "timeout",
               target: s
            }), 12e4);
         s.onerror = f.bind(null, s.onerror), s.onload = f.bind(null, s.onload), l && document.head.appendChild(s)
      }
   }, a.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
         value: "Module"
      }), Object.defineProperty(e, "__esModule", {
         value: !0
      })
   }, a.p = "", (() => {
      a.b = document.baseURI || self.location.href;
      var e = {
         179: 0
      };
      a.f.j = (n, t) => {
         var r = a.o(e, n) ? e[n] : void 0;
         if (0 !== r)
            if (r) t.push(r[2]);
            else {
               var i = new Promise(((t, a) => r = e[n] = [t, a]));
               t.push(r[2] = i);
               var o = a.p + a.u(n),
                  s = new Error;
               a.l(o, (t => {
                  if (a.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0), r)) {
                     var i = t && ("load" === t.type ? "missing" : t.type),
                        o = t && t.target && t.target.src;
                     s.message = "Loading chunk " + n + " failed.\n(" + i + ": " + o + ")", s.name = "ChunkLoadError", s.type = i, s.request = o, r[1](s)
                  }
               }), "chunk-" + n, n)
            }
      };
      var n = (n, t) => {
            var r, i, [o, s, l] = t,
               u = 0;
            if (o.some((n => 0 !== e[n]))) {
               for (r in s) a.o(s, r) && (a.m[r] = s[r]);
               l && l(a)
            }
            for (n && n(t); u < o.length; u++) i = o[u], a.o(e, i) && e[i] && e[i][0](), e[i] = 0
         },
         t = self.webpackChunkruffle_demo = self.webpackChunkruffle_demo || [];
      t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
   })(), a.nc = void 0, (() => {
      "use strict";
      var e = a(62),
         n = a.n(e),
         t = a(36),
         r = a.n(t),
         i = a(793),
         o = a.n(i),
         s = a(892),
         l = a.n(s),
         u = a(173),
         c = a.n(u),
         d = a(464),
         f = a.n(d),
         h = a(894),
         m = {};
      m.styleTagTransform = f(), m.setAttributes = l(), m.insert = o().bind(null, "head"), m.domAPI = r(), m.insertStyleElement = c(), n()(h.Z, m), h.Z && h.Z.locals && h.Z.locals;
      class p {
         constructor(e, n, t, r, a) {
            this.major = e, this.minor = n, this.patch = t, this.prIdent = r, this.buildIdent = a
         }
         static fromSemver(e) {
            const n = e.split("+"),
               t = n[0].split("-"),
               r = t[0].split("."),
               a = parseInt(r[0], 10);
            let i = 0,
               o = 0,
               s = null,
               l = null;
            return void 0 !== r[1] && (i = parseInt(r[1], 10)), void 0 !== r[2] && (o = parseInt(r[2], 10)), void 0 !== t[1] && (s = t[1].split(".")), void 0 !== n[1] && (l = n[1].split(".")), new p(a, i, o, s, l)
         }
         isCompatibleWith(e) {
            return 0 !== this.major && this.major === e.major || 0 === this.major && 0 === e.major && 0 !== this.minor && this.minor === e.minor || 0 === this.major && 0 === e.major && 0 === this.minor && 0 === e.minor && 0 !== this.patch && this.patch === e.patch
         }
         hasPrecedenceOver(e) {
            if (this.major > e.major) return !0;
            if (this.major < e.major) return !1;
            if (this.minor > e.minor) return !0;
            if (this.minor < e.minor) return !1;
            if (this.patch > e.patch) return !0;
            if (this.patch < e.patch) return !1;
            if (null === this.prIdent && null !== e.prIdent) return !0;
            if (null !== this.prIdent && null === e.prIdent) return !1;
            if (null !== this.prIdent && null !== e.prIdent) {
               const n = /^[0-9]*$/;
               for (let t = 0; t < this.prIdent.length && t < e.prIdent.length; t += 1) {
                  const r = n.test(e.prIdent[t]),
                     a = n.test(this.prIdent[t]);
                  if (!a && r) return !0;
                  if (a && r) {
                     const n = parseInt(this.prIdent[t], 10),
                        r = parseInt(e.prIdent[t], 10);
                     if (n > r) return !0;
                     if (n < r) return !1
                  } else {
                     if (a && !r) return !1;
                     if (!a && !r) {
                        if (this.prIdent[t] > e.prIdent[t]) return !0;
                        if (this.prIdent[t] < e.prIdent[t]) return !1
                     }
                  }
               }
               if (this.prIdent.length > e.prIdent.length) return !0;
               if (this.prIdent.length < e.prIdent.length) return !1
            }
            if (null !== this.buildIdent && null === e.buildIdent) return !0;
            if (null === this.buildIdent && null !== e.buildIdent) return !1;
            if (null !== this.buildIdent && null !== e.buildIdent) {
               const n = /^[0-9]*$/;
               for (let t = 0; t < this.buildIdent.length && t < e.buildIdent.length; t += 1) {
                  const r = n.test(this.buildIdent[t]),
                     a = n.test(e.buildIdent[t]);
                  if (!r && a) return !0;
                  if (r && a) {
                     const n = parseInt(this.buildIdent[t], 10),
                        r = parseInt(e.buildIdent[t], 10);
                     if (n > r) return !0;
                     if (n < r) return !1
                  } else {
                     if (r && !a) return !1;
                     if (!r && !a) {
                        if (this.buildIdent[t] > e.buildIdent[t]) return !0;
                        if (this.buildIdent[t] < e.buildIdent[t]) return !1
                     }
                  }
               }
               return this.buildIdent.length > e.buildIdent.length
            }
            return !1
         }
         isEqual(e) {
            return this.major === e.major && this.minor === e.minor && this.patch === e.patch
         }
         isStableOrCompatiblePrerelease(e) {
            return null === e.prIdent || this.major === e.major && this.minor === e.minor && this.patch === e.patch
         }
      }
      class v {
         constructor(e) {
            this.requirements = e
         }
         satisfiedBy(e) {
            for (const n of this.requirements) {
               let t = !0;
               for (const {
                     comparator: r,
                     version: a
                  } of n) t = t && a.isStableOrCompatiblePrerelease(e), "" === r || "=" === r ? t = t && a.isEqual(e) : ">" === r ? t = t && e.hasPrecedenceOver(a) : ">=" === r ? t = t && (e.hasPrecedenceOver(a) || a.isEqual(e)) : "<" === r ? t = t && a.hasPrecedenceOver(e) : "<=" === r ? t = t && (a.hasPrecedenceOver(e) || a.isEqual(e)) : "^" === r && (t = t && a.isCompatibleWith(e));
               if (t) return !0
            }
            return !1
         }
         static fromRequirementString(e) {
            const n = e.split(" ");
            let t = [];
            const r = [];
            for (const e of n)
               if ("||" === e) t.length > 0 && (r.push(t), t = []);
               else if (e.length > 0) {
               const n = /[0-9]/.exec(e);
               if (n) {
                  const r = e.slice(0, n.index).trim(),
                     a = p.fromSemver(e.slice(n.index).trim());
                  t.push({
                     comparator: r,
                     version: a
                  })
               }
            }
            return t.length > 0 && r.push(t), new v(r)
         }
      }
      const g = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11])), b = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 7, 1, 5, 0, 208, 112, 26, 11])), w = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 12, 1, 10, 0, 67, 0, 0, 0, 0, 252, 0, 26, 11])), k = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0, 192, 26, 11])), y = async () => WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11]));

      function x(e) {
         const n = "function" == typeof Function.prototype.toString ? Function.prototype.toString() : null;
         return "string" == typeof n && n.indexOf("[native code]") >= 0 && Function.prototype.toString.call(e).indexOf("[native code]") >= 0
      }
      let A = null,
         _ = !1;
      try {
         if (void 0 !== document.currentScript && null !== document.currentScript && "src" in document.currentScript && "" !== document.currentScript.src) {
            let e = document.currentScript.src;
            e.endsWith(".js") || e.endsWith("/") || (e += "/"), A = new URL(".", e), _ = A.protocol.includes("extension")
         }
      } catch (e) {
         console.warn("Unable to get currentScript URL")
      }

      function R(e) {
         var n;
         let t = null !== (n = null == A ? void 0 : A.href) && void 0 !== n ? n : "";
         return !_ && "publicPath" in e && null !== e.publicPath && void 0 !== e.publicPath && (t = e.publicPath), "" === t || t.endsWith("/") || (t += "/"), t
      }
      let S = null;

      function z(e, n) {
         return null === S && (S = async function (e, n) {
            var t;
            "function" == typeof Array.prototype.reduce && x(Array.prototype.reduce) || Object.defineProperty(Array.prototype, "reduce", {
               value(...e) {
                  if (0 === e.length && window.Prototype && window.Prototype.Version && window.Prototype.Version < "1.6.1") return this.length > 1 ? this : this[0];
                  const n = e[0];
                  if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                  if ("function" != typeof n) throw new TypeError(`${n} is not a function`);
                  const t = Object(this),
                     r = t.length >>> 0;
                  let a, i = 0;
                  if (e.length >= 2) a = e[1];
                  else {
                     for (; i < r && !(i in t);) i++;
                     if (i >= r) throw new TypeError("Reduce of empty array with no initial value");
                     a = t[i++]
                  }
                  for (; i < r;) i in t && (a = n(a, t[i], i, t)), i++;
                  return a
               }
            }), "function" == typeof Window && x(Window) || "function" == typeof window.constructor && x(window.constructor) && (window.Window = window.constructor), void 0 !== window.Reflect && null !== window.Reflect || (window.Reflect = {}), "function" != typeof Reflect.get && Object.defineProperty(Reflect, "get", {
               value: (e, n) => e[n]
            }), "function" != typeof Reflect.set && Object.defineProperty(Reflect, "set", {
               value(e, n, t) {
                  e[n] = t
               }
            }), "function" != typeof Reflect.has && Object.defineProperty(Reflect, "has", {
               value: (e, n) => n in e
            }), "function" != typeof Reflect.ownKeys && Object.defineProperty(Reflect, "ownKeys", {
               value: e => [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)]
            });
            const r = (await Promise.all([g(), y(), w(), k(), b()])).every(Boolean);
            r || console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module"), a.p = R(e);
            const {
               default: i,
               Ruffle: o
            } = await (r ? a.e(339).then(a.bind(a, 339)) : a.e(159).then(a.bind(a, 159)));
            let s;
            const l = r ? new URL(a(899), a.b) : new URL(a(878), a.b),
               u = await fetch(l),
               c = "function" == typeof ReadableStream;
            if (n && c) {
               const e = (null === (t = null == u ? void 0 : u.headers) || void 0 === t ? void 0 : t.get("content-length")) || "";
               let r = 0;
               const a = parseInt(e);
               s = new Response(new ReadableStream({
                  async start(e) {
                     var t;
                     const i = null === (t = u.body) || void 0 === t ? void 0 : t.getReader();
                     if (!i) throw "Response had no body";
                     for (n(r, a);;) {
                        const {
                           done: t,
                           value: o
                        } = await i.read();
                        if (t) break;
                        (null == o ? void 0 : o.byteLength) && (r += null == o ? void 0 : o.byteLength), e.enqueue(o), n(r, a)
                     }
                     e.close()
                  }
               }), u)
            } else s = u;
            return await i(s), o
         }(e, n)), S
      }
      class C {
         constructor(e) {
            this.value = e
         }
         valueOf() {
            return this.value
         }
      }
      class E extends C {
         constructor(e = "???") {
            super(e)
         }
         toString(e) {
            return `{${this.value}}`
         }
      }
      class I extends C {
         constructor(e, n = {}) {
            super(e), this.opts = n
         }
         toString(e) {
            try {
               return e.memoizeIntlObject(Intl.NumberFormat, this.opts).format(this.value)
            } catch (n) {
               return e.reportError(n), this.value.toString(10)
            }
         }
      }
      class j extends C {
         constructor(e, n = {}) {
            super(e), this.opts = n
         }
         toString(e) {
            try {
               return e.memoizeIntlObject(Intl.DateTimeFormat, this.opts).format(this.value)
            } catch (n) {
               return e.reportError(n), new Date(this.value).toISOString()
            }
         }
      }
      const B = 100,
         O = "⁨",
         F = "⁩";

      function D(e, n, t) {
         return t === n || (t instanceof I && n instanceof I && t.value === n.value || n instanceof I && "string" == typeof t && t === e.memoizeIntlObject(Intl.PluralRules, n.opts).select(n.value))
      }

      function P(e, n, t) {
         return n[t] ? W(e, n[t].value) : (e.reportError(new RangeError("No default")), new E)
      }

      function T(e, n) {
         const t = [],
            r = Object.create(null);
         for (const a of n) "narg" === a.type ? r[a.name] = L(e, a.value) : t.push(L(e, a));
         return {
            positional: t,
            named: r
         }
      }

      function L(e, n) {
         switch (n.type) {
            case "str":
               return n.value;
            case "num":
               return new I(n.value, {
                  minimumFractionDigits: n.precision
               });
            case "var":
               return function (e, {
                  name: n
               }) {
                  let t;
                  if (e.params) {
                     if (!Object.prototype.hasOwnProperty.call(e.params, n)) return new E(`$${n}`);
                     t = e.params[n]
                  } else {
                     if (!e.args || !Object.prototype.hasOwnProperty.call(e.args, n)) return e.reportError(new ReferenceError(`Unknown variable: $${n}`)), new E(`$${n}`);
                     t = e.args[n]
                  }
                  if (t instanceof C) return t;
                  switch (typeof t) {
                     case "string":
                        return t;
                     case "number":
                        return new I(t);
                     case "object":
                        if (t instanceof Date) return new j(t.getTime());
                     default:
                        return e.reportError(new TypeError(`Variable type not supported: $${n}, ${typeof t}`)), new E(`$${n}`)
                  }
               }(e, n);
            case "mesg":
               return function (e, {
                  name: n,
                  attr: t
               }) {
                  const r = e.bundle._messages.get(n);
                  if (!r) return e.reportError(new ReferenceError(`Unknown message: ${n}`)), new E(n);
                  if (t) {
                     const a = r.attributes[t];
                     return a ? W(e, a) : (e.reportError(new ReferenceError(`Unknown attribute: ${t}`)), new E(`${n}.${t}`))
                  }
                  return r.value ? W(e, r.value) : (e.reportError(new ReferenceError(`No value: ${n}`)), new E(n))
               }(e, n);
            case "term":
               return function (e, {
                  name: n,
                  attr: t,
                  args: r
               }) {
                  const a = `-${n}`,
                     i = e.bundle._terms.get(a);
                  if (!i) return e.reportError(new ReferenceError(`Unknown term: ${a}`)), new E(a);
                  if (t) {
                     const n = i.attributes[t];
                     if (n) {
                        e.params = T(e, r).named;
                        const t = W(e, n);
                        return e.params = null, t
                     }
                     return e.reportError(new ReferenceError(`Unknown attribute: ${t}`)), new E(`${a}.${t}`)
                  }
                  e.params = T(e, r).named;
                  const o = W(e, i.value);
                  return e.params = null, o
               }(e, n);
            case "func":
               return function (e, {
                  name: n,
                  args: t
               }) {
                  let r = e.bundle._functions[n];
                  if (!r) return e.reportError(new ReferenceError(`Unknown function: ${n}()`)), new E(`${n}()`);
                  if ("function" != typeof r) return e.reportError(new TypeError(`Function ${n}() is not callable`)), new E(`${n}()`);
                  try {
                     let n = T(e, t);
                     return r(n.positional, n.named)
                  } catch (t) {
                     return e.reportError(t), new E(`${n}()`)
                  }
               }(e, n);
            case "select":
               return function (e, {
                  selector: n,
                  variants: t,
                  star: r
               }) {
                  let a = L(e, n);
                  if (a instanceof E) return P(e, t, r);
                  for (const n of t)
                     if (D(e, a, L(e, n.key))) return W(e, n.value);
                  return P(e, t, r)
               }(e, n);
            default:
               return new E
         }
      }

      function M(e, n) {
         if (e.dirty.has(n)) return e.reportError(new RangeError("Cyclic reference")), new E;
         e.dirty.add(n);
         const t = [],
            r = e.bundle._useIsolating && n.length > 1;
         for (const a of n)
            if ("string" != typeof a) {
               if (e.placeables++, e.placeables > B) throw e.dirty.delete(n), new RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${B}`);
               r && t.push(O), t.push(L(e, a).toString(e)), r && t.push(F)
            } else t.push(e.bundle._transform(a));
         return e.dirty.delete(n), t.join("")
      }

      function W(e, n) {
         return "string" == typeof n ? e.bundle._transform(n) : M(e, n)
      }
      class N {
         constructor(e, n, t) {
            this.dirty = new WeakSet, this.params = null, this.placeables = 0, this.bundle = e, this.errors = n, this.args = t
         }
         reportError(e) {
            if (!(this.errors && e instanceof Error)) throw e;
            this.errors.push(e)
         }
         memoizeIntlObject(e, n) {
            let t = this.bundle._intls.get(e);
            t || (t = {}, this.bundle._intls.set(e, t));
            let r = JSON.stringify(n);
            return t[r] || (t[r] = new e(this.bundle.locales, n)), t[r]
         }
      }

      function U(e, n) {
         const t = Object.create(null);
         for (const [r, a] of Object.entries(e)) n.includes(r) && (t[r] = a.valueOf());
         return t
      }
      const $ = ["unitDisplay", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"];

      function q(e, n) {
         let t = e[0];
         if (t instanceof E) return new E(`NUMBER(${t.valueOf()})`);
         if (t instanceof I) return new I(t.valueOf(), {
            ...t.opts,
            ...U(n, $)
         });
         if (t instanceof j) return new I(t.valueOf(), {
            ...U(n, $)
         });
         throw new TypeError("Invalid argument to NUMBER")
      }
      const Z = ["dateStyle", "timeStyle", "fractionalSecondDigits", "dayPeriod", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];

      function H(e, n) {
         let t = e[0];
         if (t instanceof E) return new E(`DATETIME(${t.valueOf()})`);
         if (t instanceof j) return new j(t.valueOf(), {
            ...t.opts,
            ...U(n, Z)
         });
         if (t instanceof I) return new j(t.valueOf(), {
            ...U(n, Z)
         });
         throw new TypeError("Invalid argument to DATETIME")
      }
      const V = new Map;
      class J {
         constructor(e, {
            functions: n,
            useIsolating: t = !0,
            transform: r = (e => e)
         } = {}) {
            this._terms = new Map, this._messages = new Map, this.locales = Array.isArray(e) ? e : [e], this._functions = {
               NUMBER: q,
               DATETIME: H,
               ...n
            }, this._useIsolating = t, this._transform = r, this._intls = function (e) {
               const n = Array.isArray(e) ? e.join(" ") : e;
               let t = V.get(n);
               return void 0 === t && (t = new Map, V.set(n, t)), t
            }(e)
         }
         hasMessage(e) {
            return this._messages.has(e)
         }
         getMessage(e) {
            return this._messages.get(e)
         }
         addResource(e, {
            allowOverrides: n = !1
         } = {}) {
            const t = [];
            for (let r = 0; r < e.body.length; r++) {
               let a = e.body[r];
               if (a.id.startsWith("-")) {
                  if (!1 === n && this._terms.has(a.id)) {
                     t.push(new Error(`Attempt to override an existing term: "${a.id}"`));
                     continue
                  }
                  this._terms.set(a.id, a)
               } else {
                  if (!1 === n && this._messages.has(a.id)) {
                     t.push(new Error(`Attempt to override an existing message: "${a.id}"`));
                     continue
                  }
                  this._messages.set(a.id, a)
               }
            }
            return t
         }
         formatPattern(e, n = null, t = null) {
            if ("string" == typeof e) return this._transform(e);
            let r = new N(this, t, n);
            try {
               return M(r, e).toString(r)
            } catch (e) {
               if (r.errors && e instanceof Error) return r.errors.push(e), (new E).toString(r);
               throw e
            }
         }
      }
      const K = /^(-?[a-zA-Z][\w-]*) *= */gm,
         G = /\.([a-zA-Z][\w-]*) *= */y,
         Y = /\*?\[/y,
         Q = /(-?[0-9]+(?:\.([0-9]+))?)/y,
         X = /([a-zA-Z][\w-]*)/y,
         ee = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,
         ne = /^[A-Z][A-Z0-9_-]*$/,
         te = /([^{}\n\r]+)/y,
         re = /([^\\"\n\r]*)/y,
         ae = /\\([\\"])/y,
         ie = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,
         oe = /^\n+/,
         se = / +$/,
         le = / *\r?\n/g,
         ue = /( *)$/,
         ce = /{\s*/y,
         de = /\s*}/y,
         fe = /\[\s*/y,
         he = /\s*] */y,
         me = /\s*\(\s*/y,
         pe = /\s*->\s*/y,
         ve = /\s*:\s*/y,
         ge = /\s*,?\s*/y,
         be = /\s+/y;
      class we {
         constructor(e) {
            this.body = [], K.lastIndex = 0;
            let n = 0;
            for (;;) {
               let t = K.exec(e);
               if (null === t) break;
               n = K.lastIndex;
               try {
                  this.body.push(s(t[1]))
               } catch (e) {
                  if (e instanceof SyntaxError) continue;
                  throw e
               }
            }

            function t(t) {
               return t.lastIndex = n, t.test(e)
            }

            function r(t, r) {
               if (e[n] === t) return n++, !0;
               if (r) throw new r(`Expected ${t}`);
               return !1
            }

            function a(e, r) {
               if (t(e)) return n = e.lastIndex, !0;
               if (r) throw new r(`Expected ${e.toString()}`);
               return !1
            }

            function i(t) {
               t.lastIndex = n;
               let r = t.exec(e);
               if (null === r) throw new SyntaxError(`Expected ${t.toString()}`);
               return n = t.lastIndex, r
            }

            function o(e) {
               return i(e)[1]
            }

            function s(e) {
               let n = l(),
                  r = function () {
                     let e = Object.create(null);
                     for (; t(G);) {
                        let n = o(G),
                           t = l();
                        if (null === t) throw new SyntaxError("Expected attribute value");
                        e[n] = t
                     }
                     return e
                  }();
               if (null === n && 0 === Object.keys(r).length) throw new SyntaxError("Expected message value or attributes");
               return {
                  id: e,
                  value: n,
                  attributes: r
               }
            }

            function l() {
               let r;
               if (t(te) && (r = o(te)), "{" === e[n] || "}" === e[n]) return u(r ? [r] : [], 1 / 0);
               let a = g();
               return a ? r ? u([r, a], a.length) : (a.value = b(a.value, oe), u([a], a.length)) : r ? b(r, se) : null
            }

            function u(r = [], a) {
               for (;;) {
                  if (t(te)) {
                     r.push(o(te));
                     continue
                  }
                  if ("{" === e[n]) {
                     r.push(c());
                     continue
                  }
                  if ("}" === e[n]) throw new SyntaxError("Unbalanced closing brace");
                  let i = g();
                  if (!i) break;
                  r.push(i), a = Math.min(a, i.length)
               }
               let i = r.length - 1,
                  s = r[i];
               "string" == typeof s && (r[i] = b(s, se));
               let l = [];
               for (let e of r) e instanceof ke && (e = e.value.slice(0, e.value.length - a)), e && l.push(e);
               return l
            }

            function c() {
               a(ce, SyntaxError);
               let e = d();
               if (a(de)) return e;
               if (a(pe)) {
                  let n = function () {
                     let e, n = [],
                        a = 0;
                     for (; t(Y);) {
                        r("*") && (e = a);
                        let t = h(),
                           i = l();
                        if (null === i) throw new SyntaxError("Expected variant value");
                        n[a++] = {
                           key: t,
                           value: i
                        }
                     }
                     if (0 === a) return null;
                     if (void 0 === e) throw new SyntaxError("Expected default variant");
                     return {
                        variants: n,
                        star: e
                     }
                  }();
                  return a(de, SyntaxError), {
                     type: "select",
                     selector: e,
                     ...n
                  }
               }
               throw new SyntaxError("Unclosed placeable")
            }

            function d() {
               if ("{" === e[n]) return c();
               if (t(ee)) {
                  let [, t, r, o = null] = i(ee);
                  if ("$" === t) return {
                     type: "var",
                     name: r
                  };
                  if (a(me)) {
                     let i = function () {
                        let t = [];
                        for (;;) {
                           switch (e[n]) {
                              case ")":
                                 return n++, t;
                              case void 0:
                                 throw new SyntaxError("Unclosed argument list")
                           }
                           t.push(f()), a(ge)
                        }
                     }();
                     if ("-" === t) return {
                        type: "term",
                        name: r,
                        attr: o,
                        args: i
                     };
                     if (ne.test(r)) return {
                        type: "func",
                        name: r,
                        args: i
                     };
                     throw new SyntaxError("Function names must be all upper-case")
                  }
                  return "-" === t ? {
                     type: "term",
                     name: r,
                     attr: o,
                     args: []
                  } : {
                     type: "mesg",
                     name: r,
                     attr: o
                  }
               }
               return m()
            }

            function f() {
               let e = d();
               return "mesg" !== e.type ? e : a(ve) ? {
                  type: "narg",
                  name: e.name,
                  value: m()
               } : e
            }

            function h() {
               let e;
               return a(fe, SyntaxError), e = t(Q) ? p() : {
                  type: "str",
                  value: o(X)
               }, a(he, SyntaxError), e
            }

            function m() {
               if (t(Q)) return p();
               if ('"' === e[n]) return function () {
                  r('"', SyntaxError);
                  let t = "";
                  for (;;) {
                     if (t += o(re), "\\" !== e[n]) {
                        if (r('"')) return {
                           type: "str",
                           value: t
                        };
                        throw new SyntaxError("Unclosed string literal")
                     }
                     t += v()
                  }
               }();
               throw new SyntaxError("Invalid expression")
            }

            function p() {
               let [, e, n = ""] = i(Q), t = n.length;
               return {
                  type: "num",
                  value: parseFloat(e),
                  precision: t
               }
            }

            function v() {
               if (t(ae)) return o(ae);
               if (t(ie)) {
                  let [, e, n] = i(ie), t = parseInt(e || n, 16);
                  return t <= 55295 || 57344 <= t ? String.fromCodePoint(t) : "�"
               }
               throw new SyntaxError("Unknown escape sequence")
            }

            function g() {
               let t = n;
               switch (a(be), e[n]) {
                  case ".":
                  case "[":
                  case "*":
                  case "}":
                  case void 0:
                     return !1;
                  case "{":
                     return w(e.slice(t, n))
               }
               return " " === e[n - 1] && w(e.slice(t, n))
            }

            function b(e, n) {
               return e.replace(n, "")
            }

            function w(e) {
               let n = e.replace(le, "\n"),
                  t = ue.exec(e)[1].length;
               return new ke(n, t)
            }
         }
      }
      class ke {
         constructor(e, n) {
            this.value = e, this.length = n
         }
      }
      const ye = new RegExp("^([a-z]{2,3}|\\*)(?:-([a-z]{4}|\\*))?(?:-([a-z]{2}|\\*))?(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))?$", "i");
      class xe {
         constructor(e) {
            const n = ye.exec(e.replace(/_/g, "-"));
            if (!n) return void(this.isWellFormed = !1);
            let [, t, r, a, i] = n;
            t && (this.language = t.toLowerCase()), r && (this.script = r[0].toUpperCase() + r.slice(1)), a && (this.region = a.toUpperCase()), this.variant = i, this.isWellFormed = !0
         }
         isEqual(e) {
            return this.language === e.language && this.script === e.script && this.region === e.region && this.variant === e.variant
         }
         matches(e, n = !1, t = !1) {
            return (this.language === e.language || n && void 0 === this.language || t && void 0 === e.language) && (this.script === e.script || n && void 0 === this.script || t && void 0 === e.script) && (this.region === e.region || n && void 0 === this.region || t && void 0 === e.region) && (this.variant === e.variant || n && void 0 === this.variant || t && void 0 === e.variant)
         }
         toString() {
            return [this.language, this.script, this.region, this.variant].filter((e => void 0 !== e)).join("-")
         }
         clearVariants() {
            this.variant = void 0
         }
         clearRegion() {
            this.region = void 0
         }
         addLikelySubtags() {
            const e = function (e) {
               if (Object.prototype.hasOwnProperty.call(Ae, e)) return new xe(Ae[e]);
               const n = new xe(e);
               return n.language && _e.includes(n.language) ? (n.region = n.language.toUpperCase(), n) : null
            }(this.toString().toLowerCase());
            return !!e && (this.language = e.language, this.script = e.script, this.region = e.region, this.variant = e.variant, !0)
         }
      }
      const Ae = {
            ar: "ar-arab-eg",
            "az-arab": "az-arab-ir",
            "az-ir": "az-arab-ir",
            be: "be-cyrl-by",
            da: "da-latn-dk",
            el: "el-grek-gr",
            en: "en-latn-us",
            fa: "fa-arab-ir",
            ja: "ja-jpan-jp",
            ko: "ko-kore-kr",
            pt: "pt-latn-br",
            sr: "sr-cyrl-rs",
            "sr-ru": "sr-latn-ru",
            sv: "sv-latn-se",
            ta: "ta-taml-in",
            uk: "uk-cyrl-ua",
            zh: "zh-hans-cn",
            "zh-hant": "zh-hant-tw",
            "zh-hk": "zh-hant-hk",
            "zh-mo": "zh-hant-mo",
            "zh-tw": "zh-hant-tw",
            "zh-gb": "zh-hant-gb",
            "zh-us": "zh-hant-us"
         },
         _e = ["az", "bg", "cs", "de", "es", "fi", "fr", "hu", "it", "lt", "lv", "nl", "pl", "ro", "ru"];
      const Re = {
            "ar-SA": {
               "context_menu.ftl": "context-menu-download-swf = تحميل .swf\ncontext-menu-copy-debug-info = نسخ معلومات التصحيح\ncontext-menu-open-save-manager = فتح مدير الحفظ\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] حول ملحق رفل ({ $version })\n       *[other] حول رفل ({ $version })\n    }\ncontext-menu-hide = إخفاء هذه القائمة\ncontext-menu-exit-fullscreen = الخروج من وضعية الشاشة الكاملة\ncontext-menu-enter-fullscreen = تفعيل وضعية الشاشة الكاملة\n",
               "messages.ftl": 'message-cant-embed =\n    لم تكن رفل قادرة على تشغيل الفلاش المضمنة في هذه الصفحة.\n    يمكنك محاولة فتح الملف في علامة تبويب منفصلة، لتجاوز هذه المشكلة.\npanic-title = لقد حدث خطأ ما :(\nmore-info = معلومات أكثر\nrun-anyway = التشغيل على أي حال\ncontinue = الاستمرار\nreport-bug = إبلاغ عن خلل\nupdate-ruffle = تحديث رفل\nruffle-demo = ويب التجريبي\nruffle-desktop = برنامج سطح المكتب\nruffle-wiki = عرض رفل ويكي\nview-error-details = عرض تفاصيل الخطأ\nopen-in-new-tab = فتح في علامة تبويب جديدة\nclick-to-unmute = انقر لإلغاء الكتم\nerror-file-protocol =\n    يبدو أنك تقوم بتشغيل رفل على بروتوكول "الملف:".\n    هذا لن يعمل لأن المتصفحات تمنع العديد من الميزات من العمل لأسباب أمنية.\n    بدلاً من ذلك، ندعوك إلى إعداد خادم محلي أو استخدام عرض الويب أو تطبيق سطح المكتب.\nerror-javascript-config =\n    تعرض رفل إلى مشكلة رئيسية بسبب الإعدادات الخاطئة للجافا سكريبت.\n    إذا كنت مسؤول الخادم، نحن ندعوك إلى التحقق من تفاصيل الخطأ لمعرفة سبب المشكلة.\n    يمكنك أيضا الرجوع إلى رفل ويكي للحصول على المساعدة.\nerror-wasm-not-found =\n    فشل رفل في تحميل مكون الملف ".wasm" المطلوب.\n    إذا كنت مسؤول الخادم، الرجاء التأكد من أن الملف قد تم تحميله بشكل صحيح.\n    إذا استمرت المشكلة، قد تحتاج إلى استخدام إعدادات "المسار العام": الرجاء مراجعة رفل ويكي للحصول على المساعدة.\nerror-wasm-mime-type =\n    واجهت رفل مشكلة رئيسية أثناء محاولة التهيئة.\n    خادم الويب هذا لا يخدم ملفات ". wasm" مع نوع MIME الصحيح.\n    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.\nerror-swf-fetch =\n    فشل رفل في تحميل ملف فلاش SWF.\n    السبب الأكثر احتمالا هو أن الملف لم يعد موجودا، لذلك لا يوجد شيء ليحمله رفل.\n    حاول الاتصال بمسؤول الموقع للحصول على المساعدة.\nerror-swf-cors =\n    فشل الروفل في تحميل ملف فلاش SWF.\n    من المحتمل أن تم حظر الوصول إلى المنال بواسطة سياسة CORS.\n    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.\nerror-wasm-cors =\n    فشل رفل في تحميل مكون ملف ".wasm" المطلوب.\n    من المحتمل أن تم حظر الوصول إلى المنال بواسطة سياسة CORS.\n    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.\nerror-wasm-invalid =\n    واجهت رفل مشكلة رئيسية أثناء محاولة التهيئة.\n    خادم الويب هذا لا يخدم ملفات ". wasm" مع نوع MIME الصحيح.\n    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.\nerror-wasm-download =\n    واجهت رفل مشكلة رئيسية أثناء محاولتها التهيئة.\n    هذا يمكن أن يحل نفسه في كثير من الأحيان، لذلك يمكنك محاولة إعادة تحميل الصفحة.\n    خلاف ذلك، يرجى الاتصال بمدير الموقع.\nerror-wasm-disabled-on-edge =\n    فشل رفل في تحميل مكون الملف ".wasm" المطلوب.\n    لإصلاح هذه المشكلة، حاول فتح إعدادات المتصفح الخاص بك، انقر فوق "الخصوصية، البحث، الخدمات"، والتمرير لأسفل، وإيقاف "تعزيز أمانك على الويب".\n    هذا سيسمح للمتصفح الخاص بك بتحميل الملفات ".wasm" المطلوبة.\n    إذا استمرت المشكلة، قد تحتاج إلى استخدام متصفح أخر.\nerror-javascript-conflict =\n    واجهت رفل مشكلة رئيسية أثناء محاولة التهيئة.\n    يبدو أن هذه الصفحة تستخدم كود جافا سكريبت الذي يتعارض مع رفل.\n    إذا كنت مسؤول الخادم، فإننا ندعوك إلى محاولة تحميل الملف على صفحة فارغة.\nerror-javascript-conflict-outdated = يمكنك أيضًا محاولة تحميل نسخة أحدث من رفل التي قد تحل المشكلة (النسخة الحالية قديمة: { $buildDate }).\nerror-csp-conflict =\n    واجهت رفل مشكلة رئيسية أثناء محاولة التهيئة.\n    لا تسمح سياسة أمان المحتوى لخادم الويب هذا بتشغيل مكون ".wasm" المطلوب.\n    إذا كنت مسؤول الخادم، يرجى الرجوع إلى رفل ويكي للحصول على المساعدة.\nerror-unknown =\n    واجهت رول مشكلة رئيسية أثناء محاولة عرض محتوى الفلاش هذا.\n    { $outdated ->\n        [true] إذا كنت مسؤول الخادم، الرجاء محاولة تحميل إصدار أحدث من رفل (النسخة الحالية قديمة: { $buildDate }).\n       *[false] ليس من المفترض أن يحدث هذا، لذلك نحن نقدر حقًا إذا قمت بالتبليغ عن الخطأ!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = هل أنت متأكد أنك تريد حذف ملف حفظ اللعبة هذا؟\nsave-reload-prompt =\n    الطريقة الوحيدة لـ { $action ->\n        [delete] حذف\n       *[replace] استبدال\n    } هذا الملف الحفظ دون تضارب محتمل هي إعادة تحميل هذا المحتوى. هل ترغب في المتابعة على أي حال؟\nsave-download = تحميل\nsave-replace = استبدال\nsave-delete = حذف\nsave-backup-all = تحميل جميع الملفات المحفوظة\n",
               "volume-controls.ftl": ""
            },
            "ca-ES": {
               "context_menu.ftl": "context-menu-download-swf = Baixa el fitxer .swf\ncontext-menu-copy-debug-info = Copia la informació de depuració\ncontext-menu-open-save-manager = Obre el gestor d'emmagatzematge\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Quant a l'extensió de Ruffle ({ $version })\n       *[other] Quant a Ruffle ({ $version })\n    }\ncontext-menu-hide = Amaga aquest menú\ncontext-menu-exit-fullscreen = Surt de la pantalla completa\ncontext-menu-enter-fullscreen = Pantalla completa\n",
               "messages.ftl": "panic-title = Alguna cosa ha fallat :(\nmore-info = Més informació\nrun-anyway = Reprodueix igualment\ncontinue = Continua\nreport-bug = Informa d'un error\nupdate-ruffle = Actualitza Ruffle\nruffle-demo = Demostració web\nruffle-desktop = Aplicació d'escriptori\nruffle-wiki = Obre la wiki de Ruffle\nview-error-details = Mostra detalls de l'error\nopen-in-new-tab = Obre en una pestanya nova\nclick-to-unmute = Feu clic per activar el so\n",
               "save-manager.ftl": "",
               "volume-controls.ftl": ""
            },
            "cs-CZ": {
               "context_menu.ftl": "context-menu-download-swf = Stáhnout .swf\ncontext-menu-copy-debug-info = Zkopírovat debug info\ncontext-menu-open-save-manager = Otevřít správce uložení\ncontext-menu-about-ruffle =\n    { $flavor ->\n         [extension] O Ruffle rozšíření ({ $version })\n        *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = Skrýt menu\ncontext-menu-exit-fullscreen = Ukončit režim celé obrazovky\ncontext-menu-enter-fullscreen = Přejít do režimu celé obrazovky\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle nemohl spustit Flash vložený na této stránce.\n    Můžete se pokusit otevřít soubor na samostatné kartě, abyste se vyhnuli tomuto problému.\npanic-title = Něco se pokazilo :(\nmore-info = Další informace\nrun-anyway = Přesto spustit\ncontinue = Pokračovat\nreport-bug = Nahlásit chybu\nupdate-ruffle = Aktualizovat Ruffle\nruffle-demo = Web Demo\nruffle-desktop = Desktopová aplikace\nruffle-wiki = Zobrazit Ruffle Wiki\nview-error-details = Zobrazit podrobnosti o chybě\nopen-in-new-tab = Otevřít na nové kartě\nclick-to-unmute = Kliknutím zrušíte ztlumení\nerror-file-protocol =\n    Zdá se, že používáte Ruffle na protokolu "file:".\n    To není možné, protože prohlížeče blokují fungování mnoha funkcí z bezpečnostních důvodů.\n    Namísto toho vám doporučujeme nastavit lokální server nebo použít web demo či desktopovou aplikaci.\nerror-javascript-config =\n    Ruffle narazil na problém v důsledku nesprávné konfigurace JavaScriptu.\n    Pokud jste správcem serveru, doporučujeme vám zkontrolovat podrobnosti o chybě, abyste zjistili, který parametr je vadný.\n    Pomoc můžete získat také na wiki Ruffle.\nerror-wasm-not-found =\n    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.\n    Pokud jste správcem serveru, zkontrolujte, zda byl soubor správně nahrán.\n    Pokud problém přetrvává, možná budete muset použít nastavení „publicPath“: pomoc naleznete na wiki Ruffle.\nerror-wasm-mime-type =\n    Ruffle narazil na problém při pokusu o inicializaci.\n    Tento webový server neposkytuje soubory „.wasm“ se správným typem MIME.\n    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.\nerror-swf-fetch =\n    Ruffle se nepodařilo načíst SWF soubor Flash.\n    Nejpravděpodobnějším důvodem je, že soubor již neexistuje, takže Ruffle nemá co načíst.\n    Zkuste požádat o pomoc správce webu.\nerror-swf-cors =\n    Ruffle se nepodařilo načíst SWF soubor Flash.\n    Přístup k načítání byl pravděpodobně zablokován politikou CORS.\n    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.\nerror-wasm-cors =\n    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.\n    Přístup k načítání byl pravděpodobně zablokován politikou CORS.\n    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.\nerror-wasm-invalid =\n    Ruffle narazil na problém při pokusu o inicializaci.\n    Zdá se, že na této stránce chybí nebo jsou neplatné soubory ke spuštění Ruffle.\n    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.\nerror-wasm-download =\n    Ruffle narazil na problém při pokusu o inicializaci.\n    Problém se může vyřešit i sám, takže můžete zkusit stránku načíst znovu.\n    V opačném případě kontaktujte administrátora stránky.\nerror-wasm-disabled-on-edge =\n    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.\n    Chcete-li tento problém vyřešit, zkuste otevřít nastavení prohlížeče, klikněte na položku „Ochrana osobních údajů, vyhledávání a služby“, přejděte dolů a vypněte možnost „Zvyšte svou bezpečnost na webu“.\n    Vašemu prohlížeči to umožní načíst požadované soubory „.wasm“.\n    Pokud problém přetrvává, budete možná muset použít jiný prohlížeč.\nerror-javascript-conflict =\n    Ruffle narazil na problém při pokusu o inicializaci.\n    Zdá se, že tato stránka používá kód JavaScript, který je v konfliktu s Ruffle.\n    Pokud jste správcem serveru, doporučujeme vám zkusit načíst soubor na prázdnou stránku.\nerror-javascript-conflict-outdated = Můžete se také pokusit nahrát novější verzi Ruffle, která může daný problém vyřešit (aktuální build je zastaralý: { $buildDate }).\nerror-csp-conflict =\n    Ruffle narazil na problém při pokusu o inicializaci.\n    Zásady zabezpečení obsahu tohoto webového serveru nepovolují spuštění požadované komponenty „.wasm“.\n    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.\nerror-unknown =\n    Ruffle narazil na problém při pokusu zobrazit tento Flash obsah.\n    { $outdated ->\n          [true] Pokud jste správcem serveru, zkuste nahrát novější verzi Ruffle (aktuální build je zastaralý: { $buildDate }).\n         *[false] Toto by se nemělo stát, takže bychom opravdu ocenili, kdybyste mohli nahlásit chybu!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Opravdu chcete odstranit tento soubor s uloženými pozicemi?\nsave-reload-prompt =\n    Jediný způsob, jak { $action ->\n          [delete] vymazat\n         *[replace] nahradit\n    } tento soubor s uloženými pozicemi bez potenciálního konfliktu je opětovné načtení tohoto obsahu. Chcete přesto pokračovat?\nsave-download = Stáhnout\nsave-replace = Nahradit\nsave-delete = Vymazat\nsave-backup-all = Stáhnout všechny soubory s uloženými pozicemi\n",
               "volume-controls.ftl": ""
            },
            "de-DE": {
               "context_menu.ftl": "context-menu-download-swf = .swf herunterladen\ncontext-menu-copy-debug-info = Debug-Info kopieren\ncontext-menu-open-save-manager = Dateimanager öffnen\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Über Ruffle Erweiterung ({ $version })\n       *[other] Über Ruffle ({ $version })\n    }\ncontext-menu-hide = Menü ausblenden\ncontext-menu-exit-fullscreen = Vollbild verlassen\ncontext-menu-enter-fullscreen = Vollbildmodus aktivieren\ncontext-menu-volume-controls = Lautstärke einstellen\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle konnte den Flash in dieser Seite nicht ausführen.\n    Du kannst versuchen, die Datei in einem separaten Tab zu öffnen, um dieses Problem zu umgehen.\npanic-title = Etwas ist schief gelaufen\nmore-info = Weitere Informationen\nrun-anyway = Trotzdem ausführen\ncontinue = Fortfahren\nreport-bug = Fehler melden\nupdate-ruffle = Ruffle aktuallisieren\nruffle-demo = Web-Demo\nruffle-desktop = Desktop-Anwendung\nruffle-wiki = Ruffle-Wiki anzeigen\nview-error-details = Fehlerdetails anzeigen\nopen-in-new-tab = In einem neuen Tab öffnen\nclick-to-unmute = Klicke zum Entmuten\nerror-file-protocol =\n    Es scheint, dass Sie Ruffle auf dem "file:"-Protokoll ausführen.\n    Dies funktioniert nicht so, als Browser viele Funktionen aus Sicherheitsgründen blockieren.\n    Stattdessen laden wir Sie ein, einen lokalen Server einzurichten oder entweder die Webdemo oder die Desktop-Anwendung zu verwenden.\nerror-javascript-config =\n    Ruffle ist aufgrund einer falschen JavaScript-Konfiguration auf ein großes Problem gestoßen.\n    Wenn du der Server-Administrator bist, laden wir dich ein, die Fehlerdetails zu überprüfen, um herauszufinden, welcher Parameter fehlerhaft ist.\n    Sie können auch das Ruffle-Wiki für Hilfe konsultieren.\nerror-wasm-not-found =\n    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.\n    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.\n    Wenn das Problem weiterhin besteht, müssen Sie unter Umständen die "publicPath"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki für Hilfe.\nerror-wasm-mime-type =\n    Ruffle ist auf ein großes Problem beim Initialisieren gestoßen.\n    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.\nerror-swf-fetch =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr existiert, so dass Ruffle nicht geladen werden kann.\n    Kontaktieren Sie den Website-Administrator für Hilfe.\nerror-swf-cors =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.\nerror-wasm-cors =\n    Ruffle konnte die Flash-SWF-Datei nicht laden.\n    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.\nerror-wasm-invalid =\n    Ruffle ist auf ein großes Problem beim Initialisieren gestoßen.\n    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.\nerror-wasm-download =\n    Ruffle ist auf ein großes Problem gestoßen, während er versucht hat zu initialisieren.\n    Dies kann sich oft selbst beheben, so dass Sie versuchen können, die Seite neu zu laden.\n    Andernfalls kontaktieren Sie bitte den Website-Administrator.\nerror-wasm-disabled-on-edge =\n    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.\n    Um dies zu beheben, versuche die Einstellungen deines Browsers zu öffnen, klicke auf "Privatsphäre, Suche und Dienste", scrollen nach unten und schalte "Verbessere deine Sicherheit im Web" aus.\n    Dies erlaubt Ihrem Browser die erforderlichen ".wasm"-Dateien zu laden.\n    Wenn das Problem weiterhin besteht, müssen Sie möglicherweise einen anderen Browser verwenden.\nerror-javascript-conflict =\n    Ruffle ist auf ein großes Problem beim Initialisieren gestoßen.\n    Es scheint, als ob diese Seite JavaScript-Code verwendet, der mit Ruffle kollidiert.\n    Wenn Sie der Server-Administrator sind, laden wir Sie ein, die Datei auf einer leeren Seite zu laden.\nerror-javascript-conflict-outdated = Du kannst auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem umgehen könnte (aktuelle Version ist veraltet: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ist auf ein großes Problem beim Initialisieren gestoßen.\n    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.\n    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.\nerror-unknown =\n    Bei dem Versuch, diesen Flash-Inhalt anzuzeigen, ist Ruffle auf ein großes Problem gestoßen.\n    { $outdated ->\n        [true] Wenn Sie der Server-Administrator sind, Bitte versuchen Sie, eine neuere Version von Ruffle hochzuladen (aktuelle Version ist veraltet: { $buildDate }).\n       *[false] Dies soll nicht passieren, deshalb würden wir uns sehr darüber freuen, wenn Sie einen Fehler melden könnten!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei löschen möchten?\nsave-reload-prompt =\n    Der einzige Weg zu { $action ->\n        [delete] löschen\n       *[replace] ersetzen\n    } diese Speicherdatei ohne möglichen Konflikt ist das erneute Laden dieses Inhalts. Möchten Sie trotzdem fortfahren?\nsave-download = Herunterladen\nsave-replace = Ersetzen\nsave-delete = Löschen\nsave-backup-all = Alle gespeicherten Dateien herunterladen\n",
               "volume-controls.ftl": "volume-controls = Lautstärkeeinstellungen\nvolume-controls-mute = Stummschalten\nvolume-controls-volume = Lautstärke\n"
            },
            "en-US": {
               "context_menu.ftl": "context-menu-download-swf = Download .swf\ncontext-menu-copy-debug-info = Copy debug info\ncontext-menu-open-save-manager = Open Save Manager\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] About Ruffle Extension ({$version})\n        *[other] About Ruffle ({$version})\n    }\ncontext-menu-hide = Hide this menu\ncontext-menu-exit-fullscreen = Exit fullscreen\ncontext-menu-enter-fullscreen = Enter fullscreen\ncontext-menu-volume-controls = Volume controls\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle wasn\'t able to run the Flash embedded in this page.\n    You can try to open the file in a separate tab, to sidestep this issue.\npanic-title = Something went wrong :(\nmore-info = More info\nrun-anyway = Run anyway\ncontinue = Continue\nreport-bug = Report Bug\nupdate-ruffle = Update Ruffle\nruffle-demo = Web Demo\nruffle-desktop = Desktop Application\nruffle-wiki = View Ruffle Wiki\nenable-hardware-acceleration = It looks like hardware acceleration is not enabled. While Ruffle may work, it could be unreasonably slow. You can find out how to enable hardware acceleration by following this link.\nview-error-details = View Error Details\nopen-in-new-tab = Open in a new tab\nclick-to-unmute = Click to unmute\nerror-file-protocol =\n    It appears you are running Ruffle on the "file:" protocol.\n    This doesn\'t work as browsers block many features from working for security reasons.\n    Instead, we invite you to setup a local server or either use the web demo or the desktop application.\nerror-javascript-config =\n    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.\n    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.\n    You can also consult the Ruffle wiki for help.\nerror-wasm-not-found =\n    Ruffle failed to load the required ".wasm" file component.\n    If you are the server administrator, please ensure the file has correctly been uploaded.\n    If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.\nerror-wasm-mime-type =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This web server is not serving ".wasm" files with the correct MIME type.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-swf-fetch =\n    Ruffle failed to load the Flash SWF file.\n    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.\n    Try contacting the website administrator for help.\nerror-swf-cors =\n    Ruffle failed to load the Flash SWF file.\n    Access to fetch has likely been blocked by CORS policy.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-cors =\n    Ruffle failed to load the required ".wasm" file component.\n    Access to fetch has likely been blocked by CORS policy.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-invalid =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    It seems like this page has missing or invalid files for running Ruffle.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-wasm-download =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This can often resolve itself, so you can try reloading the page.\n    Otherwise, please contact the website administrator.\nerror-wasm-disabled-on-edge =\n    Ruffle failed to load the required ".wasm" file component.\n    To fix this, try opening your browser\'s settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".\n    This will allow your browser to load the required ".wasm" files.\n    If the issue persists, you might have to use a different browser.\nerror-javascript-conflict =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    It seems like this page uses JavaScript code that conflicts with Ruffle.\n    If you are the server administrator, we invite you to try loading the file on a blank page.\nerror-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).\nerror-csp-conflict =\n    Ruffle has encountered a major issue whilst trying to initialize.\n    This web server\'s Content Security Policy does not allow the required ".wasm" component to run.\n    If you are the server administrator, please consult the Ruffle wiki for help.\nerror-unknown =\n    Ruffle has encountered a major issue whilst trying to display this Flash content.\n    {$outdated ->\n        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).\n        *[false] This isn\'t supposed to happen, so we\'d really appreciate if you could file a bug!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Are you sure you want to delete this save file?\nsave-reload-prompt =\n    The only way to {$action ->\n    [delete] delete\n    *[replace] replace\n    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?\nsave-download = Download\nsave-replace = Replace\nsave-delete = Delete\nsave-backup-all = Download all save files",
               "volume-controls.ftl": "volume-controls = Volume controls\nvolume-controls-mute = Mute\nvolume-controls-volume = Volume\n"
            },
            "es-ES": {
               "context_menu.ftl": "context-menu-download-swf = Descargar .swf\ncontext-menu-copy-debug-info = Copiar Información de depuración\ncontext-menu-open-save-manager = Abrir gestor de guardado\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre la extensión de Ruffle ({ $version })\n       *[other] Sobre Ruffle ({ $version })\n    }\ncontext-menu-hide = Ocultar este menú\ncontext-menu-exit-fullscreen = Salir de pantalla completa\ncontext-menu-enter-fullscreen = Entrar a pantalla completa\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle no pudo ejecutar el Flash incrustado en esta página.\n    Puedes intentar abrir el archivo en una pestaña aparte, para evitar este problema.\npanic-title = Algo salió mal :(\nmore-info = Más info\nrun-anyway = Ejecutar de todos modos\ncontinue = Continuar\nreport-bug = Reportar un Error\nupdate-ruffle = Actualizar Ruffle\nruffle-demo = Demostración de web\nruffle-desktop = Aplicación de Desktop\nruffle-wiki = Ver la página wiki\nview-error-details = Ver los detalles del error\nopen-in-new-tab = Abrir en una pestaña nueva\nclick-to-unmute = Haz clic para dejar de silenciar\nerror-file-protocol =\n    Parece que está ejecutando Ruffle en el protocolo "archivo:".\n    Esto no funciona porque los navegadores bloquean que muchas características funcionen por razones de seguridad.\n    En su lugar, le invitamos a configurar un servidor local o bien usar la demostración web o la aplicación de desktop.\nerror-javascript-config =\n    Ruffle ha encontrado un problema crítico debido a una configuración JavaScript incorrecta.\n    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar qué parámetro está en falta.\n    También puedes consultar la wiki de Ruffle para obtener ayuda.\nerror-wasm-not-found =\n    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.\n    Si usted es el administrador del servidor, asegúrese de que el archivo ha sido subido correctamente.\n    Si el problema persiste, puede que necesite usar la configuración "publicPath": por favor consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-mime-type =\n    Ruffle ha encontrado un problema crítico al intentar inicializar.\n    Este servidor web no está sirviendo archivos wasm" con el tipo MIME correcto.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-swf-fetch =\n    Ruffle no pudo cargar el archivo Flash SWF.\n    La razón más probable es que el archivo ya no existe, así que no hay nada para cargar Ruffle.\n    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.\nerror-swf-cors =\n    Ruffle no pudo cargar el archivo Flash SWF.\n    Es probable que el acceso a la búsqueda haya sido bloqueado por la política CORS.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-cors =\n    Ruffle no pudo cargar el archivo ".wasm."\n    Es probable que el acceso a la búsqueda o la llamada a la función fetch haya sido bloqueado por la política CORS.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-invalid =\n    Ruffle ha encontrado un problema crítico al intentar inicializar.\n    Este servidor web no está sirviendo archivos wasm" con el tipo Mime correcto.\n    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.\nerror-wasm-download =\n    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.\n    Esto a menudo puede resolverse por sí mismo, así que puede intentar recargar la página.\n    De lo contrario, póngase en contacto con el administrador del sitio web.\nerror-wasm-disabled-on-edge =\n    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.\n    Para solucionar esto, intenta abrir la configuración de tu navegador, haciendo clic en "Privacidad, búsqueda y servicios", desplazándote y apagando "Mejore su seguridad en la web".\n    Esto permitirá a su navegador cargar los archivos ".wasm" necesarios.\n    Si el problema persiste, puede que tenga que utilizar un navegador diferente.\nerror-javascript-conflict =\n    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.\n    Parece que esta página utiliza código JavaScript que entra en conflicto con Ruffle.\n    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una página en blanco.\nerror-javascript-conflict-outdated = También puedes intentar subir una versión más reciente de Ruffle que puede eludir el problema (la versión actual está desactualizada: { $buildDate }).\nerror-csp-conflict =\n    Ruffle encontró un problema al intentar inicializarse.\n    La Política de Seguridad de Contenido de este servidor web no permite el componente requerido ".wasm". \n    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.\nerror-unknown =\n    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.\n    { $outdated ->\n        [true] Si usted es el administrador del servidor, intenta cargar una version más reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).\n       *[false] Esto no deberia suceder! apreciariamos que reportes el error!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = ¿Está seguro de querer eliminar este archivo de guardado?\nsave-reload-prompt =\n    La única forma de { $action ->\n        [delete] eliminar\n       *[replace] sobreescribir\n    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. ¿Desea continuar de todos modos?\nsave-download = Descargar\nsave-replace = Sobreescribir\nsave-delete = Borrar\nsave-backup-all = Borrar todos los archivos de guardado\n",
               "volume-controls.ftl": ""
            },
            "fr-FR": {
               "context_menu.ftl": "context-menu-download-swf = Télécharger en tant que .swf\ncontext-menu-copy-debug-info = Copier les infos de débogage\ncontext-menu-open-save-manager = Ouvrir le gestionnaire de stockage\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] À propos de Ruffle Extension ({ $version })\n       *[other] À propos de Ruffle ({ $version })\n    }\ncontext-menu-hide = Masquer ce menu\ncontext-menu-exit-fullscreen = Sortir du mode plein écran\ncontext-menu-enter-fullscreen = Afficher en plein écran\n",
               "messages.ftl": "message-cant-embed =\n    Ruffle n'a pas été en mesure de lire le fichier Flash intégré dans cette page.\n    Vous pouvez essayer d'ouvrir le fichier dans un onglet isolé, pour contourner le problème.\npanic-title = Une erreur est survenue :(\nmore-info = Plus d'infos\nrun-anyway = Exécuter quand même\ncontinue = Continuer\nreport-bug = Signaler le bug\nupdate-ruffle = Mettre à jour Ruffle\nruffle-demo = Démo en ligne\nruffle-desktop = Application de bureau\nruffle-wiki = Wiki de Ruffle\nview-error-details = Détails de l'erreur\nopen-in-new-tab = Ouvrir dans un nouvel onglet\nclick-to-unmute = Cliquez pour activer le son\nerror-file-protocol =\n    Il semblerait que vous exécutiez Ruffle sur le protocole \"file:\".\n    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalités pour des raisons de sécurité.\n    Nous vous invitons soit à configurer un serveur local, soit à utiliser la démo en ligne ou l'application de bureau.\nerror-javascript-config =\n    Ruffle a rencontré un problème majeur en raison d'une configuration JavaScript incorrecte.\n    Si vous êtes l'administrateur du serveur, nous vous invitons à vérifier les détails de l'erreur pour savoir quel est le paramètre en cause.\n    Vous pouvez également consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-not-found =\n    Ruffle n'a pas réussi à charger son fichier \".wasm\".\n    Si vous êtes l'administrateur du serveur, veuillez vous assurer que ce fichier a bien été mis en ligne.\n    Si le problème persiste, il vous faudra peut-être utiliser le paramètre \"publicPath\" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-mime-type =\n    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.\n    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers \".wasm\".\n    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-swf-fetch =\n    Ruffle n'a pas réussi à charger le fichier Flash.\n    La raison la plus probable est que le fichier n'existe pas ou plus.\n    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.\nerror-swf-cors =\n    Ruffle n'a pas réussi à charger le fichier Flash.\n    La requête a probablement été rejetée en raison de la configuration du CORS.\n    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-cors =\n    Ruffle n'a pas réussi à charger son fichier \".wasm\".\n    La requête a probablement été rejetée en raison de la configuration du CORS.\n    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-invalid =\n    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.\n    Il semblerait que cette page comporte des fichiers manquants ou invalides pour exécuter Ruffle.\n    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-wasm-download =\n    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.\n    Le problème détecté peut souvent se résoudre de lui-même, donc vous pouvez essayer de recharger la page.\n    Si le problème persiste, veuillez prendre contact avec l'administrateur du site.\nerror-wasm-disabled-on-edge =\n    Ruffle n'a pas réussi à charger son fichier \".wasm\".\n    Pour résoudre ce problème, essayez d'ouvrir les paramètres de votre navigateur et de cliquer sur \"Confidentialité, recherche et services\". Puis, vers le bas de la page, désactivez l'option \"Améliorez votre sécurité sur le web\".\n    Cela permettra à votre navigateur de charger les fichiers \".wasm\".\n    Si le problème persiste, vous devrez peut-être utiliser un autre navigateur.\nerror-javascript-conflict =\n    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.\n    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.\n    Si vous êtes l'administrateur du serveur, nous vous invitons à essayer de charger le fichier dans une page vide.\nerror-javascript-conflict-outdated = Vous pouvez également essayer de mettre en ligne une version plus récente de Ruffle qui pourrait avoir corrigé le problème (la version que vous utilisez est obsolète : { $buildDate }).\nerror-csp-conflict =\n    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.\n    La stratégie de sécurité du contenu (CSP) de ce serveur web n'autorise pas l'exécution de fichiers \".wasm\".\n    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.\nerror-unknown =\n    Ruffle a rencontré un problème majeur durant l'exécution de ce contenu Flash.\n    { $outdated ->\n        [true] Si vous êtes l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus récente de Ruffle (la version que vous utilisez est obsolète : { $buildDate }).\n       *[false] Cela n'est pas censé se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !\n    }\n",
               "save-manager.ftl": "save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?\nsave-reload-prompt =\n    La seule façon de { $action ->\n        [delete] supprimer\n       *[replace] remplacer\n    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand même continuer ?\nsave-download = Télécharger\nsave-replace = Remplacer\nsave-delete = Supprimer\nsave-backup-all = Télécharger tous les fichiers de sauvegarde\n",
               "volume-controls.ftl": ""
            },
            "he-IL": {
               "context_menu.ftl": "context-menu-download-swf = הורדת קובץ הswf.\ncontext-menu-copy-debug-info = העתקת נתוני ניפוי שגיאות\ncontext-menu-open-save-manager = פתח את מנהל השמירות\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] אודות התוסף Ruffle ({ $version })\n       *[other] אודות Ruffle ({ $version })\n    }\ncontext-menu-hide = הסתר תפריט זה\ncontext-menu-exit-fullscreen = יציאה ממסך מלא\ncontext-menu-enter-fullscreen = מסך מלא\ncontext-menu-volume-controls = בקרת עוצמת קול\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle לא הצליח להריץ את תוכן הפלאש המוטמע בדף זה.\n    אתה יכול לפתוח את הקובץ בלשונית נפרדת, על מנת לעקוף בעיה זו.\npanic-title = משהו השתבש :(\nmore-info = מידע נוסף\nrun-anyway = הפעל בכל זאת\ncontinue = המשך\nreport-bug = דווח על תקלה\nupdate-ruffle = עדכן את Ruffle\nruffle-demo = הדגמה\nruffle-desktop = אפליקציית שולחן עבודה\nruffle-wiki = ראה את Ruffle wiki\nview-error-details = ראה פרטי שגיאה\nopen-in-new-tab = פתח בכרטיסייה חדשה\nclick-to-unmute = לחץ על מנת לבטל השתקה\nerror-file-protocol =\n    נדמה שאתה מריץ את Ruffle תחת פרוטוקול "file:".\n    זה לא יעבוד מכיוון שדפדפנים חוסמים אפשרויות רבות מלעבוד עקב סיבות אבטחה.\n    במקום זה, אנו מזמינים אותך לאחסן אתר זה תחת שרת מקומי או הדגמה ברשת או דרך אפליקציית שולחן העבודה.\nerror-javascript-config =\n    Ruffle נתקל בתקלה חמורה עקב הגדרת JavaScript שגויה.\n    אם אתה מנהל האתר, אנו מזמינים אותך לבדוק את פרטי השגיאה על מנת למצוא איזה פרמטר הוא שגוי.\n    אתה יכול לעיין ולהועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-wasm-not-found =\n    Ruffle נכשל לטעון את קובץ ה"wasm." הדרוש.\n    אם אתה מנהל האתר, אנא וודא כי הקובץ הועלה כשורה.\n    אם הבעיה ממשיכה, ייתכן ותצטרך להשתמש בהגדרת "publicPath": אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-wasm-mime-type =\n    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.\n    שרתו של אתר זה לא משייך קבצי ".wasm" עם סוג הMIME הנכון.\n    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-swf-fetch =\n    Ruffle נכשל לטעון את קובץ הפלאש/swf. .\n    זה נובע ככל הנראה מכיוון והקובץ לא קיים יותר, אז אין לRuffle מה לטעון.\n    נסה ליצור קשר עם מנהל האתר על מנת לקבל עזרה.\nerror-swf-cors =\n    Ruffle נכשל לטעון את קובץ הפלאש/swf. .\n    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.\n    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-wasm-cors =\n    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.\n    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.\n    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-wasm-invalid =\n    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.\n    נדמה כי בדף זה חסרים או לא עובדים כראוי קבצים אשר משמשים את Ruffle כדי לפעול\n    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-wasm-download =\n    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.\n    לעיתים בעיה זו יכולה לפתור את עצמה, אז אתה יכול לנסות לטעון מחדש את הדף זה.\n    אם לא, אנא פנה למנהל האתר.\nerror-wasm-disabled-on-edge =\n    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.\n    על מנת לתקן בעיה זו, נסה לפתוח את הגדרות הדפדפן שלך, לחץ על "אבטחה, חיפוש ושירות",\n    גלול מטה, וכבה את "הגבר את האבטחה שלך ברשת".\n    זה יאפשר לדפדפן שלך לטעון את קובץ ה".wasm" הדרוש.\n    אם הבעיה ממשיכה, ייתכן ועליך להשתמש בדפדפן אחר.\nerror-javascript-conflict =\n    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.\n    נדמה כי דף זה משתמש בקוד JavaScript אשר מתנגש עם Ruffle.\n    אם אתה מנהל האתר, אנו מזמינים אותך לנסות לטעון את הדף תחת עמוד ריק.\nerror-javascript-conflict-outdated = בנוסף, אתה יכול לנסות ולהעלות גרסאות עדכניות של Ruffle אשר עלולים לעקוף בעיה זו (גרסה זו הינה מיושנת : { $buildDate }).\nerror-csp-conflict =\n    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.\n    מדיניות אבטחת התוכן של שרתו של אתר זה אינה מאפשרת לקובץ ה"wasm." הדרוש לפעול.\n    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.\nerror-unknown =\n    Ruffle נתקל בבעיה חמורה בניסיון להציג את תוכן פלאש זה.\n    { $outdated ->\n        [true] אם אתה מנהל האתר, אנא נסה להעלות גרסה עדכנית יותר של Ruffle (גרסה זו הינה מיושנת:  { $buildDate }).\n       *[false] זה לא אמור לקרות, נשמח אם תוכל לשתף תקלה זו!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = האם אתה בטוח שברצונך למחוק את קובץ שמירה זה?\nsave-reload-prompt =\n    הדרך היחידה { $action ->\n        [delete] למחוק\n       *[replace] להחליף\n    } את קובץ השמירה הזה מבלי לגרום לו להתנגש היא לטעון מחדש את תוכן זה. האם אתה רוצה להמשיך בכל זאת?\nsave-download = הורדה\nsave-replace = החלפה\nsave-delete = מחיקה\nsave-backup-all = הורדת כל קבצי השמירה\n",
               "volume-controls.ftl": "volume-controls = בקרת עוצמת קול\nvolume-controls-mute = השתק\nvolume-controls-volume = עוצמת קול\n"
            },
            "hu-HU": {
               "context_menu.ftl": "context-menu-download-swf = .swf fájl letöltése\ncontext-menu-copy-debug-info = Hibakeresési információk másolása\ncontext-menu-open-save-manager = Mentéskezelő megnyitása\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] A Ruffle kiegészítő ({ $version }) névjegye\n       *[other] A Ruffle ({ $version }) névjegye\n    }\ncontext-menu-hide = Ezen menü elrejtése\ncontext-menu-exit-fullscreen = Kilépés a teljes képernyőből\ncontext-menu-enter-fullscreen = Váltás teljes képernyőre\ncontext-menu-volume-controls = Hangerőszabályzó\n",
               "messages.ftl": 'message-cant-embed =\n    A Ruffle nem tudta futtatni az oldalba ágyazott Flash tartalmat.\n    A probléma kikerüléséhez megpróbálhatod megnyitni a fájlt egy külön lapon.\npanic-title = Valami baj történt :(\nmore-info = További információ\nrun-anyway = Futtatás mégis\ncontinue = Folytatás\nreport-bug = Hiba jelentése\nupdate-ruffle = Ruffle frissítése\nruffle-demo = Webes demó\nruffle-desktop = Asztali alkalmazás\nruffle-wiki = Ruffle Wiki megnyitása\nview-error-details = Hiba részletei\nopen-in-new-tab = Megnyitás új lapon\nclick-to-unmute = Kattints a némítás feloldásához\nerror-file-protocol =\n    Úgy tűnik, a Ruffle-t a "file:" protokollon futtatod.\n    Ez nem működik, mivel így a böngészők biztonsági okokból számos funkció működését letiltják.\n    Ehelyett azt ajánljuk hogy indíts egy helyi kiszolgálót, vagy használd a webes demót vagy az asztali alkalmazást.\nerror-javascript-config =\n    A Ruffle komoly problémába ütközött egy helytelen JavaScript-konfiguráció miatt.\n    Ha a szerver rendszergazdája vagy, kérjük, ellenőrizd a hiba részleteit, hogy megtudd, melyik paraméter a hibás.\n    A Ruffle wikiben is találhatsz ehhez segítséget.\nerror-wasm-not-found =\n    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.\n    Ha a szerver rendszergazdája vagy, kérjük ellenőrizd, hogy a fájl megfelelően lett-e feltöltve.\n    Ha a probléma továbbra is fennáll, előfordulhat, hogy a "publicPath" beállítást kell használnod: segítségért keresd fel a Ruffle wikit.\nerror-wasm-mime-type =\n    A Ruffle komoly problémába ütközött az inicializálás során.\n    Ez a webszerver a ".wasm" fájlokat nem a megfelelő MIME-típussal szolgálja ki.\n    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.\nerror-swf-fetch =\n    A Ruffle nem tudta betölteni a Flash SWF fájlt.\n    A legvalószínűbb ok az, hogy a fájl már nem létezik, így a Ruffle számára nincs mit betölteni.\n    Próbáld meg felvenni a kapcsolatot a webhely rendszergazdájával segítségért.\nerror-swf-cors =\n    A Ruffle nem tudta betölteni a Flash SWF fájlt.\n    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.\n    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.\nerror-wasm-cors =\n    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.\n    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.\n    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.\nerror-wasm-invalid =\n    A Ruffle komoly problémába ütközött az inicializálás során.\n    Úgy tűnik, hogy ezen az oldalon hiányoznak vagy hibásak a Ruffle futtatásához szükséges fájlok.\n    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.\nerror-wasm-download =\n    A Ruffle komoly problémába ütközött az inicializálás során.\n    Ez gyakran magától megoldódik, ezért megpróbálhatod újratölteni az oldalt.\n    Ellenkező esetben fordulj a webhely rendszergazdájához.\nerror-wasm-disabled-on-edge =\n    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.\n    A probléma megoldásához nyisd meg a böngésző beállításait, kattints az „Adatvédelem, keresés és szolgáltatások” elemre, görgess le, és kapcsold ki a „Fokozott biztonság a weben” opciót.\n    Ez lehetővé teszi a böngésző számára, hogy betöltse a szükséges ".wasm" fájlokat.\n    Ha a probléma továbbra is fennáll, lehet, hogy másik böngészőt kell használnod.\nerror-javascript-conflict =\n    A Ruffle komoly problémába ütközött az inicializálás során.\n    Úgy tűnik, ez az oldal olyan JavaScript-kódot használ, amely ütközik a Ruffle-lel.\n    Ha a kiszolgáló rendszergazdája vagy, kérjük, próbáld meg a fájlt egy üres oldalon betölteni.\nerror-javascript-conflict-outdated = Megpróbálhatod továbbá feltölteni a Ruffle egy újabb verzióját is, amely megkerülheti a problémát (a jelenlegi elavult: { $buildDate }).\nerror-csp-conflict =\n    A Ruffle komoly problémába ütközött az inicializálás során.\n    A kiszolgáló tartalombiztonsági házirendje nem teszi lehetővé a szükséges „.wasm” összetevők futtatását.\n    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.\nerror-unknown =\n    A Ruffle komoly problémába ütközött, miközben megpróbálta megjeleníteni ezt a Flash-tartalmat.\n    { $outdated ->\n        [true] Ha a szerver rendszergazdája vagy, kérjük, próbáld meg feltölteni a Ruffle egy újabb verzióját (a jelenlegi elavult: { $buildDate }).\n       *[false] Ennek nem lett volna szabad megtörténnie, ezért nagyon hálásak lennénk, ha jeleznéd a hibát!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Biztosan törölni akarod ezt a mentést?\nsave-reload-prompt =\n    Ennek a mentésnek az esetleges konfliktus nélküli { $action ->\n        [delete] törléséhez\n       *[replace] cseréjéhez\n    } újra kell tölteni a tartalmat. Mégis szeretnéd folytatni?\nsave-download = Letöltés\nsave-replace = Csere\nsave-delete = Törlés\nsave-backup-all = Az összes fájl letöltése\n",
               "volume-controls.ftl": "volume-controls = Hangerőszabályzó\nvolume-controls-mute = Némítás\nvolume-controls-volume = Hangerő\n"
            },
            "id-ID": {
               "context_menu.ftl": "context-menu-download-swf = Unduh .swf\ncontext-menu-copy-debug-info = Salin info debug\ncontext-menu-open-save-manager = Buka Manager Save\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Tentang Ekstensi Ruffle ({ $version })\n       *[other] Tentang Ruffle ({ $version })\n    }\ncontext-menu-hide = Sembunyikan Menu ini\ncontext-menu-exit-fullscreen = Keluar dari layar penuh\ncontext-menu-enter-fullscreen = Masuk mode layar penuh\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.\n    Anda dapat mencoba membuka file di tab terpisah, untuk menghindari masalah ini.\npanic-title = Terjadi kesalahan :(\nmore-info = Info lebih lanjut\nrun-anyway = Jalankan\ncontinue = Lanjutkan\nreport-bug = Laporkan Bug\nupdate-ruffle = Perbarui Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Aplikasi Desktop\nruffle-wiki = Kunjungi Wiki Ruffle\nview-error-details = Tunjukan Detail Error\nopen-in-new-tab = Buka di Tab Baru\nclick-to-unmute = Tekan untuk menyalakan suara\nerror-file-protocol =\n    Sepertinya anda menjalankan Ruffle di protokol "file:". \n    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.\n    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.\nerror-javascript-config =\n    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.\n    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.\n    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-not-found =\n    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.\n    Jika Anda adalah administrator server ini, pastikan file telah diunggah dengan benar.\n    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan "publicPath": silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-mime-type =\n    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.\n    Server web ini tidak melayani file ".wasm" dengan tipe MIME yang benar.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-swf-fetch =\n    Ruffle gagal memuat file SWF Flash.\n    Kemungkinan file tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.\n    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.\nerror-swf-cors =\n    Ruffle gagal memuat file SWF Flash.\n    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-cors =\n    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.\n    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-invalid =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Sepertinya halaman ini memiliki file yang hilang atau tidak valid untuk menjalankan Ruffle.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-wasm-download =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.\n    Jika tidak, silakan hubungi administrator situs web ini.\nerror-wasm-disabled-on-edge =\n    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.\n    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik "Privasi, pencarian, dan layanan", turun ke bawah, dan matikan "Tingkatkan keamanan Anda di web".\n    Ini akan memungkinkan browser Anda memuat file ".wasm" yang diperlukan.\n    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.\nerror-javascript-conflict =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.\n    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat file pada halaman kosong.\nerror-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).\nerror-csp-conflict =\n    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.\n    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen ".wasm" yang diperlukan untuk dijalankan.\n    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.\nerror-unknown =\n    Ruffle telah mengalami masalah besar saat menampilkan konten Flash ini.\n    { $outdated ->\n        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).\n       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Anda yakin ingin menghapus berkas ini?\nsave-reload-prompt =\n    Satu-satunya cara untuk { $action ->\n        [delete] menghapus\n       *[replace] mengganti\n    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?\nsave-download = Unduh\nsave-replace = Ganti\nsave-delete = Hapus\nsave-backup-all = Unduh semua berkas penyimpanan\n",
               "volume-controls.ftl": ""
            },
            "it-IT": {
               "context_menu.ftl": "context-menu-download-swf = Scarica .swf\ncontext-menu-copy-debug-info = Copia informazioni di debug\ncontext-menu-open-save-manager = Apri Gestione salvataggi\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Informazioni su Ruffle Extension ({ $version })\n       *[other] Informazioni su Ruffle ({ $version })\n    }\ncontext-menu-hide = Nascondi questo menu\ncontext-menu-exit-fullscreen = Esci dallo schermo intero\ncontext-menu-enter-fullscreen = Entra a schermo intero\n",
               "messages.ftl": "message-cant-embed =\n    Ruffle non è stato in grado di eseguire il Flash incorporato in questa pagina.\n    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.\npanic-title = Qualcosa è andato storto :(\nmore-info = Maggiori informazioni\nrun-anyway = Esegui comunque\ncontinue = Continua\nreport-bug = Segnala Un Bug\nupdate-ruffle = Aggiorna Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Applicazione Desktop\nruffle-wiki = Visualizza Ruffle Wiki\nview-error-details = Visualizza Dettagli Errore\nopen-in-new-tab = Apri in una nuova scheda\nclick-to-unmute = Clicca per riattivare l'audio\nerror-file-protocol =\n    Sembra che tu stia eseguendo Ruffle sul protocollo \"file:\".\n    Questo non funziona come browser blocca molte funzionalità di lavoro per motivi di sicurezza.\n    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.\nerror-javascript-config =\n    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.\n    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro è in errore.\n    Puoi anche consultare il wiki Ruffle per aiuto.\nerror-wasm-not-found =\n    Ruffle non è riuscito a caricare il componente di file \".wasm\".\n    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.\n    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione \"publicPath\": si prega di consultare il wiki Ruffle per aiuto.\nerror-wasm-mime-type =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Questo server web non serve \". asm\" file con il tipo MIME corretto.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per aiuto.\nerror-swf-fetch =\n    Ruffle non è riuscito a caricare il file Flash SWF.\n    La ragione più probabile è che il file non esiste più, quindi non c'è nulla che Ruffle possa caricare.\n    Prova a contattare l'amministratore del sito web per aiuto.\nerror-swf-cors =\n    Ruffle non è riuscito a caricare il file SWF Flash.\n    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-cors =\n    Ruffle non è riuscito a caricare il componente di file \".wasm\".\n    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-invalid =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.\n    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.\nerror-wasm-download =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.\n    Questo può spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.\n    Altrimenti, contatta l'amministratore del sito.\nerror-wasm-disabled-on-edge =\n    Ruffle non ha caricato il componente di file \".wasm\" richiesto.\n    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su \"Privacy, search, and services\", scorrendo verso il basso e disattivando \"Migliora la tua sicurezza sul web\".\n    Questo permetterà al tuo browser di caricare i file \".wasm\" richiesti.\n    Se il problema persiste, potresti dover usare un browser diverso.\nerror-javascript-conflict =\n    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.\n    Sembra che questa pagina utilizzi il codice JavaScript che è in conflitto con Ruffle.\n    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.\nerror-javascript-conflict-outdated = Puoi anche provare a caricare una versione più recente di Ruffle che potrebbe aggirare il problema (l'attuale build è obsoleta: { $buildDate }).\nerror-csp-conflict =\n    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.\n    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta\". asm\" componente da eseguire.\n    Se sei l'amministratore del server, consulta la Ruffle wiki per aiuto.\nerror-unknown =\n    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.\n    { $outdated ->\n        [true] Se sei l'amministratore del server, prova a caricare una versione più recente di Ruffle (la versione attuale è obsoleta: { $buildDate }).\n       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!\n    }\n",
               "save-manager.ftl": "save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?\nsave-reload-prompt =\n    L'unico modo per { $action ->\n        [delete] delete\n       *[replace] replace\n    } questo salvataggio file senza potenziali conflitti è quello di ricaricare questo contenuto. Volete continuare comunque?\nsave-download = Scarica\nsave-replace = Sostituisci\nsave-delete = Elimina\nsave-backup-all = Scarica tutti i file di salvataggio\n",
               "volume-controls.ftl": ""
            },
            "ja-JP": {
               "context_menu.ftl": "context-menu-download-swf = .swfをダウンロード\ncontext-menu-copy-debug-info = デバッグ情報をコピー\ncontext-menu-open-save-manager = セーブマネージャーを開く\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffle拡張機能について ({ $version })\n       *[other] Ruffleについて ({ $version })\n    }\ncontext-menu-hide = メニューを隠す\ncontext-menu-exit-fullscreen = フルスクリーンを終了\ncontext-menu-enter-fullscreen = フルスクリーンにする\ncontext-menu-volume-controls = 音量調節\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffleはこのページに埋め込まれた Flash を実行できませんでした。\n    別のタブでファイルを開くことで、この問題を解決できるかもしれません。\npanic-title = エラーが発生しました :(\nmore-info = 詳細情報\nrun-anyway = とにかく実行する\ncontinue = 続行\nreport-bug = バグを報告\nupdate-ruffle = Ruffleを更新\nruffle-demo = Webデモ\nruffle-desktop = デスクトップアプリケーション\nruffle-wiki = Ruffle Wikiを表示\nview-error-details = エラーの詳細を表示\nopen-in-new-tab = 新しいタブで開く\nclick-to-unmute = クリックでミュートを解除\nerror-file-protocol =\n    Ruffleを"file:"プロトコルで使用しているようです。\n    ブラウザはセキュリティ上の理由から殆どの機能を制限しているため、正しく動作しません。\n    ローカルサーバーをセットアップするか、ウェブデモまたはデスクトップアプリをご利用ください。\nerror-javascript-config =\n    JavaScriptの設定が正しくないため、Ruffleで問題が発生しました。\n    サーバー管理者の方は、エラーの詳細から、どのパラメーターに問題があるのかを確認してください。\n    Ruffleのwikiを参照することで、解決方法が見つかるかもしれません。\nerror-wasm-not-found =\n    Ruffleの初期化時に重大な問題が発生しました。\n    このWebサーバーのコンテンツセキュリティポリシーが、実行に必要となる「.wasm」コンポーネントの実行を許可していません。サーバーの管理者の場合は、ファイルが正しくアップロードされているか確認をしてください。この問題が解決しない場合は、「publicPath」の設定を使用する必要があります。\n    サーバーの管理者は、Ruffleのwikiを参照してください。\nerror-wasm-mime-type =\n    Ruffleの初期化に失敗する大きな問題が発生しました。\n    このWebサーバーは正しいMIMEタイプの「.wasm」ファイルを提供していません。\n    サーバーの管理者は、Ruffleのwikiを参照してください。\nerror-swf-fetch =\n    RuffleがFlash SWFファイルの読み込みに失敗しました。\n    最も考えられる原因は、SWFファイルが既に存在しない事でRuffleが読み込みに失敗するという問題です。\n    Webサイトの管理者にお問い合わせください。\nerror-swf-cors =\n    RuffleはSWFファイルの読み込みに失敗しました。\n    CORSポリシーの設定により、fetchへのアクセスがブロックされている可能性があります。\n    サーバー管理者の方は、Ruffleのwikiを参照してください。\nerror-wasm-cors =\n    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。\n    CORSポリシーによってfetchへのアクセスがブロックされている可能性があります。\n    サーバーの管理者は、Ruffle wikiを参照してください。\nerror-wasm-invalid =\n    Ruffleの初期化時に重大な問題が発生しました。\n    このページにはRuffleを実行するためのファイルが存在しないか、無効なファイルがあるかもしれません。\n    サーバーの管理者は、Ruffleのwikiを参照してください。\nerror-wasm-download =\n    Ruffleの初期化時に重大な問題が発生しました。\n    この問題はページを再読み込みする事で大抵は解決するはずなので行なってみてください。\n    もしも解決しない場合は、Webサイトの管理者にお問い合わせください。\nerror-wasm-disabled-on-edge =\n    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。\n    この問題を解決するにはブラウザーの設定を開き、「プライバシー、検索、サービス」をクリックし、下にスクロールで「Web上のセキュリティを強化する」をオフにしてみてください。\n    これで必要となる「.wasm」ファイルが読み込まれるようになります。\n    それでも問題が解決しない場合、別のブラウザーを使用する必要があるかもしれません。\nerror-javascript-conflict =\n    Ruffleの初期化時に重大な問題が発生しました。\n    このページではRuffleと競合するJavaScriptコードが使用されているかもしれません。\n    サーバーの管理者は、空白のページでファイルを読み込みし直してみてください。\nerror-javascript-conflict-outdated = 新しいバージョンのRuffleをアップロードすることで、この問題を回避できる可能性があります。(現在のビルドは古い物です:{ $buildDate })\nerror-csp-conflict =\n    Ruffleの初期化時に重大な問題が発生しました。\n    このWebサーバーのコンテンツセキュリティポリシーが実行に必要となる「.wasm」コンポーネントの実行を許可していません。\n    サーバーの管理者は、Ruffleのwikiを参照してください。\nerror-unknown =\n    Flashコンテンツを表示する際にRuffleで問題が発生しました。\n    { $outdated ->\n        [true] 現在使用しているビルドは最新ではないため、サーバー管理者の方は、最新版のRuffleに更新してみてください(現在利用中のビルド: { $buildDate })。\n       *[false] 想定外の問題なので、バグとして報告していただけると嬉しいです!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = このセーブファイルを削除してもよろしいですか?\nsave-reload-prompt =\n    セーブファイルを競合の可能性なく { $action ->\n        [delete] 削除する\n       *[replace] 置き換える\n    } ために、このコンテンツを再読み込みすることを推奨します。続行しますか？\nsave-download = ダウンロード\nsave-replace = 置き換え\nsave-delete = 削除\nsave-backup-all = すべてのセーブファイルをダウンロード\n",
               "volume-controls.ftl": "volume-controls = 音量調節\nvolume-controls-mute = 消音\nvolume-controls-volume = 音量\n"
            },
            "ko-KR": {
               "context_menu.ftl": "context-menu-download-swf = .swf 다운로드\ncontext-menu-copy-debug-info = 디버그 정보 복사\ncontext-menu-open-save-manager = 저장 관리자 열기\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffle 확장 프로그램 정보 ({ $version })\n       *[other] Ruffle 정보 ({ $version })\n    }\ncontext-menu-hide = 이 메뉴 숨기기\ncontext-menu-exit-fullscreen = 전체화면 나가기\ncontext-menu-enter-fullscreen = 전체화면으로 열기\ncontext-menu-volume-controls = 음량 조절\n",
               "messages.ftl": 'message-cant-embed = Ruffle이 이 페이지에 포함된 플래시를 실행할 수 없었습니다. 별도의 탭에서 파일을 열어봄으로서 이 문제를 해결할 수 있습니다.\npanic-title = 문제가 발생했습니다 :(\nmore-info = 추가 정보\nrun-anyway = 그래도 실행하기\ncontinue = 계속하기\nreport-bug = 버그 제보\nupdate-ruffle = Ruffle 업데이트\nruffle-demo = 웹 데모\nruffle-desktop = 데스크톱 애플리케이션\nruffle-wiki = Ruffle 위키 보기\nenable-hardware-acceleration = 하드웨어 가속이 활성화되지 않은 것 같습니다. Ruffle은 계속 작동하지만 실행 속도가 매우 느릴 수 있습니다. 하드웨어 가속을 활성화하는 방법을 알아보려면 다음 링크를 참고해보세요.\nview-error-details = 오류 세부 정보 보기\nopen-in-new-tab = 새 탭에서 열기\nclick-to-unmute = 클릭하여 음소거 해제\nerror-file-protocol =\n    Ruffle을 "file:" 프로토콜에서 실행하고 있는 것으로 보입니다.\n    브라우저에서는 이 프로토콜을 보안상의 이유로 많은 기능을 작동하지 않게 차단하므로 이 방법은 작동하지 않습니다.\n    대신, 로컬 서버를 직접 열어서 설정하거나 웹 데모 또는 데스크톱 애플리케이션을 사용하시기 바랍니다.\nerror-javascript-config =\n    잘못된 자바스크립트 설정으로 인해 Ruffle에서 중대한 문제가 발생했습니다.\n    만약 당신이 서버 관리자인 경우, 오류 세부사항을 확인하여 어떤 매개변수가 잘못되었는지 알아보세요.\n    또는 Ruffle 위키를 통해 도움을 받아 볼 수도 있습니다.\nerror-wasm-not-found =\n    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.\n    만약 당신이 서버 관리자라면 파일이 올바르게 업로드되었는지 확인하세요.\n    문제가 지속된다면 "publicPath" 옵션을 사용해야 할 수도 있습니다: Ruffle 위키를 참조하여 도움을 받으세요.\nerror-wasm-mime-type =\n    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.\n    이 웹 서버는 올바른 MIME 유형의 ".wasm" 파일을 제공하지 않습니다.\n    만약 당신이 서버 관리자라면 Ruffle 위키를 통해 도움을 받으세요.\nerror-swf-fetch =\n    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.\n    이는 주로 파일이 더 이상 존재하지 않아 Ruffle이 로드할 수 있는 것이 없을 가능성이 높습니다.\n    웹사이트 관리자에게 문의하여 도움을 받아보세요.\nerror-swf-cors =\n    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.\n    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.\n    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.\nerror-wasm-cors =\n    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.\n    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.\n    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.\nerror-wasm-invalid =\n    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.\n    이 페이지에 Ruffle을 실행하기 위한 파일이 누락되었거나 잘못된 것 같습니다.\n    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.\nerror-wasm-download =\n    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.\n    이 문제는 때때로 바로 해결될 수 있으므로 페이지를 새로고침하여 다시 시도해보세요.\n    그래도 문제가 지속된다면, 웹사이트 관리자에게 문의해주세요.\nerror-wasm-disabled-on-edge =\n    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.\n    이를 해결하려면 브라우저 설정에서 "개인 정보, 검색 및 서비스"를 클릭한 후, 하단으로 스크롤하여 "웹에서 보안 강화" 기능을 꺼야 합니다.\n    이는 필요한 ".wasm" 파일을 브라우저에서 로드할 수 있도록 허용합니다.\n    이 문제가 지속될 경우 다른 브라우저를 사용해야 할 수 있습니다.\nerror-javascript-conflict =\n    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.\n    이 페이지에서 사용되는 자바스크립트 코드가 Ruffle과 충돌하는 것으로 보입니다.\n    만약 당신이 서버 관리자라면 빈 페이지에서 파일을 로드해보세요.\nerror-javascript-conflict-outdated = 또한 Ruffle의 최신 버전을 업로드하는 것을 시도하여 문제를 우회해볼 수 있습니다. (현재 빌드가 오래되었습니다: { $buildDate }).\nerror-csp-conflict =\n    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.\n    이 웹 서버의 CSP(Content Security Policy) 정책이 ".wasm" 필수 구성요소를 실행하는 것을 허용하지 않습니다.\n    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.\nerror-unknown =\n    Ruffle이 플래시 콘텐츠를 표시하려고 시도하는 동안 중대한 문제가 발생했습니다.\n    { $outdated ->\n        [true] 만약 당신이 서버 관리자라면, Ruffle의 최신 버전을 업로드하여 다시 시도해보세요. (현재 빌드가 오래되었습니다: { $buildDate }).\n       *[false] 이런 현상이 발생해서는 안되므로, 버그를 제보해주신다면 감사하겠습니다!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = 정말로 이 세이브 파일을 삭제하시겠습니까?\nsave-reload-prompt =\n    \b이 파일을 잠재적인 충돌 없이 { $action ->\n        [delete] 삭제\n       *[replace] 교체\n    }하려면 콘텐츠를 다시 로드해야 합니다. 그래도 계속하시겠습니까?\nsave-download = 다운로드\nsave-replace = 교체\nsave-delete = 삭제\nsave-backup-all = 모든 저장 파일 다운로드\n",
               "volume-controls.ftl": "volume-controls = 음량 조절\nvolume-controls-mute = 음소거\nvolume-controls-volume = 음량\n"
            },
            "nl-NL": {
               "context_menu.ftl": "context-menu-download-swf = .swf downloaden\ncontext-menu-copy-debug-info = Kopieer debuginformatie\ncontext-menu-open-save-manager = Open opgeslagen-data-manager\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Over Ruffle Uitbreiding ({ $version })\n       *[other] Over Ruffle ({ $version })\n    }\ncontext-menu-hide = Verberg dit menu\ncontext-menu-exit-fullscreen = Verlaat volledig scherm\ncontext-menu-enter-fullscreen = Naar volledig scherm\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle kon de Flash-inhoud op de pagina niet draaien.\n    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.\npanic-title = Er ging iets mis :(\nmore-info = Meer informatie\nrun-anyway = Toch starten\ncontinue = Doorgaan\nreport-bug = Bug rapporteren\nupdate-ruffle = Ruffle updaten\nruffle-demo = Web Demo\nruffle-desktop = Desktopapplicatie\nruffle-wiki = Bekijk de Ruffle Wiki\nview-error-details = Foutdetails tonen\nopen-in-new-tab = Openen in een nieuw tabblad\nclick-to-unmute = Klik om te ontdempen\nerror-file-protocol =\n    Het lijkt erop dat je Ruffle gebruikt met het "file" protocol.\n    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.\n    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.\nerror-javascript-config =\n    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.\n    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.\n    Je kan ook in de Ruffle wiki kijken voor hulp.\nerror-wasm-not-found =\n    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.\n    Als je de serverbeheerder bent, controleer dan of het bestaand juist is geüpload.\n    Mocht het probleem blijven voordoen, moet je misschien de "publicPath" instelling gebruiken: zie ook de Ruffle wiki voor hulp.\nerror-wasm-mime-type =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Deze webserver serveert ".wasm" bestanden niet met het juiste MIME type.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-swf-fetch =\n    Ruffle kon het Flash SWF bestand niet inladen.\n    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.\n    Probeer contact op te nemen met de websitebeheerder voor hulp.\nerror-swf-cors =\n    Ruffle kon het Flash SWD bestand niet inladen.\n    Toegang is waarschijnlijk geblokeerd door het CORS beleid.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-cors =\n    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.\n    Toegang is waarschijnlijk geblokeerd door het CORS beleid.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-invalid =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-wasm-download =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.\n    Zo niet, neem dan contact op met de websitebeheerder.\nerror-wasm-disabled-on-edge =\n    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.\n    Om dit op te lossen, ga naar je browserinstellingen, klik op "Privacy, zoeken en diensten", scroll omlaag, en schakel "Verbeter je veiligheid op he web" uit.\n    Dan kan je browser wel de vereiste ".wasm" bestanden inladen.\n    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.\nerror-javascript-conflict =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.\n    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.\nerror-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).\nerror-csp-conflict =\n    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.\n    Het CSP-beleid staat niet toe dat het vereiste ".wasm" component kan draaien.\n    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.\nerror-unknown =\n    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.\n    { $outdated ->\n        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).\n       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?\nsave-reload-prompt =\n    De enige manier om deze opgeslagen data te { $action ->\n        [delete] verwijderen\n       *[replace] vervangen\n    } zonder potentiële problemen is door de inhoud opnieuw te laden. Toch doorgaan?\nsave-download = Downloaden\nsave-replace = Vervangen\nsave-delete = Verwijderen\nsave-backup-all = Download alle opgeslagen data\n",
               "volume-controls.ftl": ""
            },
            "pl-PL": {
               "context_menu.ftl": "context-menu-download-swf = Pobierz .swf\ncontext-menu-copy-debug-info = Kopiuj informacje debugowania\ncontext-menu-open-save-manager = Otwórz Menadżer Zapisów\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] O Rozszerzeniu Ruffle ({ $version })\n       *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = Ukryj to menu\ncontext-menu-exit-fullscreen = Zamknij pełny ekran\ncontext-menu-enter-fullscreen = Pełny ekran\ncontext-menu-volume-controls = Sterowanie głośnością\n",
               "messages.ftl": "message-cant-embed =\n    Ruffle nie było w stanie uruchomić zawartości Flash w tej stronie.\n    Możesz spróbować otworzyć plik w nowej karcie, aby uniknąć tego problemu.\npanic-title = Coś poszło nie tak :(\nmore-info = Więcej informacji\nrun-anyway = Uruchom mimo tego\ncontinue = Kontynuuj\nreport-bug = Zgłoś błąd\nupdate-ruffle = Zaktualizuj Ruffle\nruffle-desktop = Aplikacja na komputer\nruffle-wiki = Zobacz Wiki Ruffle\nview-error-details = Zobacz szczegóły błędu\nopen-in-new-tab = Otwórz w nowej karcie\nclick-to-unmute = Kliknij aby wyłączyć wyciszenie\n",
               "save-manager.ftl": "save-delete-prompt = Czy na pewno chcesz skasować ten plik zapisu?\nsave-reload-prompt =\n    Jedyną opcją, aby { $action ->\n        [delete] usunąć\n       *[replace] zamienić\n    } ten plik zapisu bez potencjalnych konfliktów jest przeładowanie zawartości. Czy chcesz kontynuować?\nsave-download = Pobierz\nsave-replace = Zamień\nsave-delete = Usuń\nsave-backup-all = Pobierz wszystkie pliki zapisu\n",
               "volume-controls.ftl": "volume-controls = Sterowanie głośnością\nvolume-controls-mute = Wycisz\nvolume-controls-volume = Głośność\n"
            },
            "pt-BR": {
               "context_menu.ftl": "context-menu-download-swf = Baixar .swf\ncontext-menu-copy-debug-info = Copiar informação de depuração\ncontext-menu-open-save-manager = Abrir o Gerenciador de Salvamento\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre a extensão do Ruffle ({ $version })\n       *[other] Sobre o Ruffle ({ $version })\n    }\ncontext-menu-hide = Esconder este menu\ncontext-menu-exit-fullscreen = Sair da tela cheia\ncontext-menu-enter-fullscreen = Entrar em tela cheia\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle não conseguiu executar o Flash incorporado nesta página.\n    Você pode tentar abrir o arquivo em uma guia separada para evitar esse problema.\npanic-title = Algo deu errado :(\nmore-info = Mais informação\nrun-anyway = Executar mesmo assim\ncontinue = Continuar\nreport-bug = Reportar Bug\nupdate-ruffle = Atualizar Ruffle\nruffle-demo = Demo Web\nruffle-desktop = Aplicativo de Desktop\nruffle-wiki = Ver Wiki do Ruffle\nview-error-details = Ver detalhes do erro\nopen-in-new-tab = Abrir em uma nova guia\nclick-to-unmute = Clique para ativar o som\nerror-file-protocol =\n    Parece que você está executando o Ruffle no protocolo "file:".\n    Isto não funciona como navegadores bloqueiam muitos recursos de funcionar por razões de segurança.\n    Ao invés disso, convidamos você a configurar um servidor local ou a usar a demonstração da web, ou o aplicativo de desktop.\nerror-javascript-config =\n    O Ruffle encontrou um grande problema devido a uma configuração incorreta do JavaScript.\n    Se você for o administrador do servidor, convidamos você a verificar os detalhes do erro para descobrir qual parâmetro está com falha.\n    Você também pode consultar o wiki do Ruffle para obter ajuda.\nerror-wasm-not-found =\n    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.\n    Se você é o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.\n    Se o problema persistir, você pode precisar usar a configuração "publicPath": por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-mime-type =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Este servidor de web não está servindo ".wasm" arquivos com o tipo MIME correto.\n    Se você é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-swf-fetch =\n    Ruffle falhou ao carregar o arquivo Flash SWF.\n    A razão provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.\n    Tente contatar o administrador do site para obter ajuda.\nerror-swf-cors =\n    Ruffle falhou ao carregar o arquivo Flash SWF.\n    O acesso para fetch provavelmente foi bloqueado pela política CORS.\n    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-wasm-cors =\n    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.\n    O acesso para fetch foi provavelmente bloqueado pela política CORS.\n    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-invalid =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta página tem arquivos ausentes ou inválidos para executar o Ruffle.\n    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-wasm-download =\n    O Ruffle encontrou um grande problema ao tentar inicializar.\n    Muitas vezes isso pode se resolver sozinho, então você pode tentar recarregar a página.\n    Caso contrário, contate o administrador do site.\nerror-wasm-disabled-on-edge =\n    O Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.\n    Para corrigir isso, tente abrir configurações do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore sua segurança na web".\n    Isso permitirá que seu navegador carregue os arquivos ".wasm" necessários.\n    Se o problema persistir, talvez seja necessário usar um navegador diferente.\nerror-javascript-conflict =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.\n    Se você for o administrador do servidor, convidamos você a tentar carregar o arquivo em uma página em branco.\nerror-javascript-conflict-outdated = Você também pode tentar fazer o upload de uma versão mais recente do Ruffle que pode contornar o problema (a compilação atual está desatualizada: { $buildDate }).\nerror-csp-conflict =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    A política de segurança de conteúdo deste servidor da web não permite a execução do componente ".wasm" necessário.\n    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.\nerror-unknown =\n    O Ruffle encontrou um grande problema enquanto tentava exibir este conteúdo em Flash.\n    { $outdated ->\n        [true] Se você é o administrador do servidor, por favor tente fazer o upload de uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).\n       *[false] Isso não deveria acontecer, então apreciaríamos muito se você pudesse arquivar um bug!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?\nsave-reload-prompt =\n    A única maneira de { $action ->\n        [delete] excluir\n       *[replace] substituir\n    } este arquivo sem potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?\nsave-download = Baixar\nsave-replace = Substituir\nsave-delete = Excluir\nsave-backup-all = Baixar todos os arquivos de salvamento\n",
               "volume-controls.ftl": ""
            },
            "pt-PT": {
               "context_menu.ftl": "context-menu-download-swf = Descarga.swf\ncontext-menu-copy-debug-info = Copiar informações de depuração\ncontext-menu-open-save-manager = Abrir Gestor de Gravações\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Sobre a extensão do Ruffle ({ $version })\n       *[other] Sobre o Ruffle ({ $version })\n    }\ncontext-menu-hide = Esconder este menu\ncontext-menu-exit-fullscreen = Fechar Ecrã Inteiro\ncontext-menu-enter-fullscreen = Abrir Ecrã Inteiro\n",
               "messages.ftl": 'message-cant-embed =\n    O Ruffle não conseguiu abrir o Flash integrado nesta página.\n    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.\npanic-title = Algo correu mal :(\nmore-info = Mais informações\nrun-anyway = Executar mesmo assim\ncontinue = Continuar\nreport-bug = Reportar falha\nupdate-ruffle = Atualizar o Ruffle\nruffle-demo = Demonstração na Web\nruffle-desktop = Aplicação para Desktop\nruffle-wiki = Ver a Wiki do Ruffle\nview-error-details = Ver detalhes do erro\nopen-in-new-tab = Abrir num novo separador\nclick-to-unmute = Clique para ativar o som\nerror-file-protocol =\n    Parece que executa o Ruffle no protocolo "file:".\n    Isto não funciona, já que os navegadores bloqueiam muitas funcionalidades por razões de segurança.\n    Em vez disto, recomendados configurar um servidor local ou usar a demonstração na web, ou a aplicação para desktop.\nerror-javascript-config =\n    O Ruffle encontrou um problema maior devido a uma configuração de JavaScript incorreta.\n    Se é o administrador do servidor, convidamo-lo a verificar os detalhes do erro para descobrir o parâmetro problemático.\n    Pode ainda consultar a wiki do Ruffle para obter ajuda.\nerror-wasm-not-found =\n    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.\n    Se é o administrador do servidor, por favor certifique-se de que o ficheiro foi devidamente carregado.\n    Se o problema persistir, poderá querer usar a configuração "publicPath": consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-mime-type =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Este servidor de web não suporta ficheiros ".wasm" com o tipo MIME correto.\n    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-swf-fetch =\n    Ruffle falhou ao carregar o arquivo SWF do Flash\n    A razão mais provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.\n    Tente contactar o administrador do site para obter ajuda.\nerror-swf-cors =\n    O Ruffle falhou ao carregar o ficheiro Flash SWF.\n    Acesso a buscar foi provavelmente bloqueado pela política de CORS.\n    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-cors =\n    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.\n    O acesso a buscar foi provavelmente bloqueado pela política CORS.\n    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-invalid =\n    Ruffle encontrou um grande problema ao tentar inicializar.\n    Parece que esta página está ausente ou arquivos inválidos para executar o Ruffle.\n    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.\nerror-wasm-download =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Isto frequentemente resolve-se sozinho, portanto experimente recarregar a página.\n    Caso contrário, por favor contacte o administrador do site.\nerror-wasm-disabled-on-edge =\n    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.\n    Para corrigir isso, tente abrir as opções do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore a sua segurança na web".\n    Isto permitirá ao seu navegador carregar os ficheiros ".wasm" necessários.\n    Se o problema persistir, talvez seja necessário usar um navegador diferente.\nerror-javascript-conflict =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.\n    Se é o administrador do servidor, convidamo-lo a tentar carregar o ficheiro em numa página em branco.\nerror-javascript-conflict-outdated = Pode ainda tentar carregar uma versão mais recente do Ruffle que talvez contorne o problema (a compilação atual está desatualizada: { $buildDate }).\nerror-csp-conflict =\n    O Ruffle encontrou um problema maior ao tentar inicializar.\n    A Política de Segurança de Conteúdo deste servidor não permite que o componente ".wasm" necessário seja executado.\n    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.\nerror-unknown =\n    O Ruffle encontrou um problema maior enquanto tentava mostrar este conteúdo em Flash.\n    { $outdated ->\n        [true] Se é o administrador do servidor, por favor tente carregar uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).\n       *[false] Não era suposto isto ter acontecido, por isso agradeceríamos muito se pudesse reportar a falha!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Tem a certeza de que quer apagar esta gravação?\nsave-reload-prompt =\n    A única forma de { $action ->\n        [delete] apagar\n       *[replace] substituir\n    } esta gravação sem um potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?\nsave-download = Descarregar\nsave-replace = Substituir\nsave-delete = Apagar\nsave-backup-all = Descarregar todas as gravações\n",
               "volume-controls.ftl": ""
            },
            "ro-RO": {
               "context_menu.ftl": "context-menu-download-swf = Descarcă .swf\ncontext-menu-copy-debug-info = Copiază informațiile de depanare\ncontext-menu-open-save-manager = Deschide managerul de salvări\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Despre extensia Ruffle ({ $version })\n       *[other] Despre Ruffle ({ $version })\n    }\ncontext-menu-hide = Ascunde acest meniu\ncontext-menu-exit-fullscreen = Ieși din ecranul complet\ncontext-menu-enter-fullscreen = Intră în ecran complet\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle nu a putut rula Flash încorporat în această pagină.\n    Puteți încerca să deschideți fișierul într-o filă separată, pentru a evita această problemă.\npanic-title = Ceva a mers prost :(\nmore-info = Mai multe informații\nrun-anyway = Rulează oricum\ncontinue = Continuă\nreport-bug = Raportează un bug\nupdate-ruffle = Actualizează Ruffle\nruffle-demo = Demo web\nruffle-desktop = Aplicație desktop\nruffle-wiki = Vezi wikiul Ruffle\nview-error-details = Vezi detaliile erorii\nopen-in-new-tab = Deschide într-o filă nouă\nclick-to-unmute = Dă click pentru a dezmuți\nerror-file-protocol =\n    Se pare că rulezi Ruffle pe protocolul „file:”.\n    Acesta nu funcționează, deoarece browserele blochează funcționarea multor funcții din motive de securitate.\n    În schimb, te invităm să configurezi un server local sau să folosești fie demoul web, fie aplicația desktop.\nerror-javascript-config =\n    Ruffle a întâmpinat o problemă majoră din cauza unei configurări incorecte a JavaScript.\n    Dacă sunteți administratorul serverului, vă invităm să verificați detaliile de eroare pentru a afla care parametru este defect.\n    Puteți consulta și Ruffle wiki pentru ajutor.\nerror-wasm-not-found =\n    Ruffle a eșuat la încărcarea componentei de fișier ".wasm".\n    Dacă sunteți administratorul serverului, vă rugăm să vă asigurați că fișierul a fost încărcat corect.\n    Dacă problema persistă, poate fi necesar să utilizaţi setarea "publicPath": vă rugăm să consultaţi Ruffle wiki pentru ajutor.\nerror-wasm-mime-type =\n    Ruffle a întâmpinat o problemă majoră în timp ce se încerca inițializarea.\n    Acest server web nu servește ". asm" fișiere cu tipul corect MIME.\n    Dacă sunteți administrator de server, vă rugăm să consultați Ruffle wiki pentru ajutor.\nerror-swf-fetch =\n    Ruffle a eșuat la încărcarea fișierului Flash SWF.\n    Motivul cel mai probabil este că fişierul nu mai există, deci nu există nimic pentru Ruffle să se încarce.\n    Încercați să contactați administratorul site-ului web pentru ajutor.\nerror-swf-cors =\n    Ruffle a eșuat la încărcarea fișierului Flash SWF.\n    Accesul la preluare a fost probabil blocat de politica CORS.\n    Dacă sunteţi administratorul serverului, vă rugăm să consultaţi Ruffle wiki pentru ajutor.\nerror-wasm-cors =\n    Ruffle a eșuat în încărcarea componentei de fișier ".wasm".\n    Accesul la preluare a fost probabil blocat de politica CORS.\n    Dacă sunteţi administratorul serverului, vă rugăm să consultaţi Ruffle wiki pentru ajutor.\nerror-wasm-invalid =\n    Ruffle a întâmpinat o problemă majoră în timp ce se încearcă inițializarea.\n    Se pare că această pagină are fișiere lipsă sau invalide pentru rularea Ruffle.\n    Dacă sunteţi administratorul serverului, vă rugăm să consultaţi Ruffle wiki pentru ajutor.\nerror-wasm-download =\n    Ruffle a întâmpinat o problemă majoră în timp ce încerca să inițializeze.\n    Acest lucru se poate rezolva adesea, astfel încât puteţi încerca să reîncărcaţi pagina.\n    Altfel, vă rugăm să contactaţi administratorul site-ului.\nerror-wasm-disabled-on-edge =\n    Ruffle nu a putut încărca componenta de fișier ".wasm".\n    Pentru a remedia acest lucru, încercați să deschideți setările browser-ului dvs., apăsând pe "Confidențialitate, căutare și servicii", derulând în jos și închizând "Îmbunătățește-ți securitatea pe web".\n    Acest lucru va permite browser-ului să încarce fișierele ".wasm" necesare.\n    Dacă problema persistă, ar putea fi necesar să folosiți un browser diferit.\nerror-javascript-conflict =\n    Ruffle a întâmpinat o problemă majoră în timp ce încerca să inițializeze.\n    Se pare că această pagină folosește codul JavaScript care intră în conflict cu Ruffle.\n    Dacă sunteţi administratorul serverului, vă invităm să încărcaţi fişierul pe o pagină goală.\nerror-javascript-conflict-outdated = De asemenea, poți încerca să încarci o versiune mai recentă de Ruffle care poate ocoli problema (versiunea curentă este expirată: { $buildDate }).\nerror-csp-conflict =\n    Ruffle a întâmpinat o problemă majoră în timp ce se încerca inițializarea.\n    Politica de securitate a conținutului acestui server web nu permite serviciul necesar". asm" componentă pentru a rula.\n    Dacă sunteți administratorul de server, consultați Ruffle wiki pentru ajutor.\nerror-unknown =\n    Ruffle a întâmpinat o problemă majoră în timp ce încerca să afișeze acest conținut Flash.\n    { $outdated ->\n        [true] Dacă ești administratorul serverului, te rugăm să încerci să încarci o versiune mai recentă de Ruffle (versiunea actuală este depăşită: { $buildDate }).\n       *[false] Acest lucru nu ar trebui să se întâmple, așa că am aprecia foarte mult dacă ai putea trimite un bug!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Sigur vrei să ștergi acest fișier de salvare?\nsave-reload-prompt =\n    Singura cale de a { $action ->\n        [delete] șterge\n       *[replace] înlocui\n    } acest fișier de salvare fără un conflict potențial este de a reîncărca acest conținut. Dorești să continui oricum?\nsave-download = Descarcă\nsave-replace = Înlocuiește\nsave-delete = Șterge\n",
               "volume-controls.ftl": "volume-controls = Comenzi pentru volum\n"
            },
            "ru-RU": {
               "context_menu.ftl": "context-menu-download-swf = Скачать .swf\ncontext-menu-copy-debug-info = Копировать отладочную информацию\ncontext-menu-open-save-manager = Менеджер сохранений\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] О расширении Ruffle ({ $version })\n       *[other] О Ruffle ({ $version })\n    }\ncontext-menu-hide = Скрыть это меню\ncontext-menu-exit-fullscreen = Оконный режим\ncontext-menu-enter-fullscreen = Полноэкранный режим\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle не смог запустить Flash, используемый на этой странице.\n    Чтобы обойти эту проблему, вы можете попробовать открыть файл в отдельной вкладке.\npanic-title = Что-то пошло не так :(\nmore-info = Подробнее\nrun-anyway = Всё равно запустить\ncontinue = Продолжить\nreport-bug = Сообщить об ошибке\nupdate-ruffle = Обновить Ruffle\nruffle-demo = Веб-демо\nruffle-desktop = Настольное приложение\nruffle-wiki = Открыть вики Ruffle\nview-error-details = Сведения об ошибке\nopen-in-new-tab = Открыть в новой вкладке\nclick-to-unmute = Включить звук\nerror-file-protocol =\n    Похоже, что вы запускаете Ruffle по протоколу "file:".\n    Это не работает, поскольку браузеры блокируют работу многих функций по соображениям безопасности.\n    Вместо этого мы предлагаем вам использовать настольное приложение, веб-демо или настроить локальный сервер.\nerror-javascript-config =\n    Возникла серьёзная ошибка из-за неправильной конфигурации JavaScript.\n    Если вы являетесь администратором сервера, мы предлагаем вам проверить детали ошибки, чтобы выяснить, какой параметр дал сбой.\n    Вы также можете обратиться за помощью к вики Ruffle.\nerror-wasm-not-found =\n    Ruffle не удалось запустить необходимый компонент файла ".wasm".\n    Если вы администратор сервера, пожалуйста, убедитесь, что файл был загружен правильно.\n    Если проблема не устраняется, вам может потребоваться использовать настройку "publicPath": обратитесь к вики Ruffle.\nerror-wasm-mime-type =\n    Ruffle столкнулся с серьёзной проблемой во время инициализации.\n    Этот веб-сервер не предоставляет файлы ".wasm" с правильным типом MIME.\n    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.\nerror-swf-fetch =\n    Ruffle не удалось запустить SWF-файл Flash.\n    Вероятнее всего, файл больше не существует, поэтому Ruffle нечего загружать.\n    Попробуйте связаться с администратором сайта для получения помощи.\nerror-swf-cors =\n    Ruffle не удалось запустить SWF-файл Flash.\n    Скорее всего, доступ к файлу был заблокирован политикой CORS.\n    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.\nerror-wasm-cors =\n    Ruffle не удалось загрузить необходимый компонент файла ".wasm".\n    Скорее всего, доступ к файлу был заблокирован политикой CORS.\n    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.\nerror-wasm-invalid =\n    Ruffle столкнулся с серьёзной проблемой во время инициализации.\n    Похоже, что на этой странице отсутствуют файлы для запуска Ruffle или они недействительны.\n    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.\nerror-wasm-download =\n    Ruffle столкнулся с серьёзной проблемой во время инициализации.\n    Чаще всего эта проблема устраняется сама собою, поэтому вы можете просто перезагрузить страницу.\n    Если ошибка продолжает появляться, свяжитесь с администратором сайта.\nerror-wasm-disabled-on-edge =\n    Ruffle не удалось загрузить необходимый компонент файла ".wasm".\n    Чтобы исправить эту ошибку, попробуйте отключить в настройках браузера дополнительную конфиденциальность. Это позволит браузеру загрузить необходимые WASM-файлы.\n    Если проблема осталась, вам может потребоваться другой браузер.\nerror-javascript-conflict =\n    Ruffle столкнулся с серьёзной проблемой во время инициализации.\n    Похоже, что эта страница использует конфликтующий с Ruffle код JavaScript.\n    Если вы являетесь администратором сервера, мы предлагаем вам попробовать запустить файл на пустой странице.\nerror-javascript-conflict-outdated = Вы также можете попробовать загрузить последнюю версию Ruffle, которая может обойти проблему (текущая версия устарела: { $buildDate }).\nerror-csp-conflict =\n    Ruffle столкнулся с серьёзной проблемой во время инициализации.\n    Политика безопасности содержимого этого веб-сервера не позволяет использовать требуемые компоненты для запуска ".wasm".\n    Если вы являетесь администратором сервера, обратитесь за помощью к вики Ruffle.\nerror-unknown =\n    Ruffle столкнулся с серьёзной проблемой при попытке отобразить этот Flash-контент.\n    { $outdated ->\n        [true] Если вы администратор сервера, попробуйте загрузить более новую версию Ruffle (текущая версия устарела: { $buildDate }).\n       *[false] Этого не должно происходить, поэтому мы будем очень признательны, если вы сообщите нам об ошибке!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Удалить этот файл сохранения?\nsave-reload-prompt =\n    Единственный способ { $action ->\n        [delete] удалить\n       *[replace] заменить\n    } этот файл сохранения без потенциального конфликта – перезапустить запущенный контент. Всё равно продолжить?\nsave-download = Скачать\nsave-replace = Заменить\nsave-delete = Удалить\nsave-backup-all = Скачать все сохранения\n",
               "volume-controls.ftl": ""
            },
            "sk-SK": {
               "context_menu.ftl": "context-menu-download-swf = Stiahnuť .swf\ncontext-menu-copy-debug-info = Skopírovať debug info\ncontext-menu-open-save-manager = Otvoriť správcu uložení\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] O Ruffle rozšírení ({ $version })\n       *[other] O Ruffle ({ $version })\n    }\ncontext-menu-hide = Skryť menu\ncontext-menu-exit-fullscreen = Ukončiť režim celej obrazovky\ncontext-menu-enter-fullscreen = Prejsť do režimu celej obrazovky\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle nemohol spustiť Flash vložený na tejto stránke.\n    Môžete sa pokúsiť otvoriť súbor na samostatnej karte, aby ste sa vyhli tomuto problému.\npanic-title = Niečo sa pokazilo :(\nmore-info = Viac informácií\nrun-anyway = Spustiť aj tak\ncontinue = Pokračovať\nreport-bug = Nahlásiť chybu\nupdate-ruffle = Aktualizovať Ruffle\nruffle-demo = Web Demo\nruffle-desktop = Desktopová aplikácia\nruffle-wiki = Zobraziť Ruffle Wiki\nview-error-details = Zobraziť podrobnosti o chybe\nopen-in-new-tab = Otvoriť na novej karte\nclick-to-unmute = Kliknutím zapnete zvuk\nerror-file-protocol =\n    Zdá sa, že používate Ruffle na protokole "file:".\n    To nie je možné, pretože prehliadače blokujú fungovanie mnohých funkcií z bezpečnostných dôvodov.\n    Namiesto toho vám odporúčame nastaviť lokálny server alebo použiť web demo či desktopovú aplikáciu.\nerror-javascript-config =\n    Ruffle narazil na problém v dôsledku nesprávnej konfigurácie JavaScriptu.\n    Ak ste správcom servera, odporúčame vám skontrolovať podrobnosti o chybe, aby ste zistili, ktorý parameter je chybný.\n    Pomoc môžete získať aj na wiki Ruffle.\nerror-wasm-not-found =\n    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.\n    Ak ste správcom servera, skontrolujte, či bol súbor správne nahraný.\n    Ak problém pretrváva, možno budete musieť použiť nastavenie „publicPath“: pomoc nájdete na wiki Ruffle.\nerror-wasm-mime-type =\n    Ruffle narazil na problém pri pokuse o inicializáciu.\n    Tento webový server neposkytuje súbory „.wasm“ so správnym typom MIME.\n    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.\nerror-swf-fetch =\n    Ruffle sa nepodarilo načítať SWF súbor Flash.\n    Najpravdepodobnejším dôvodom je, že súbor už neexistuje, takže Ruffle nemá čo načítať.\n    Skúste požiadať o pomoc správcu webovej lokality.\nerror-swf-cors =\n    Ruffle sa nepodarilo načítať SWF súbor Flash.\n    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.\n    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.\nerror-wasm-cors =\n    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.\n    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.\n    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.\nerror-wasm-invalid =\n    Ruffle narazil na problém pri pokuse o inicializáciu.\n    Zdá sa, že na tejto stránke chýbajú alebo sú neplatné súbory na spustenie Ruffle.\n    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.\nerror-wasm-download =\n    Ruffle narazil na problém pri pokuse o inicializáciu.\n    Problém sa môže vyriešiť aj sám, takže môžete skúsiť stránku načítať znova.\n    V opačnom prípade kontaktujte administrátora stránky.\nerror-wasm-disabled-on-edge =\n    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.\n    Ak chcete tento problém vyriešiť, skúste otvoriť nastavenia prehliadača, kliknite na položku „Ochrana osobných údajov, vyhľadávanie a služby“, prejdite nadol a vypnite možnosť „Zvýšte svoju bezpečnosť na webe“.\n    Vášmu prehliadaču to umožní načítať požadované súbory „.wasm“.\n    Ak problém pretrváva, možno budete musieť použiť iný prehliadač.\nerror-javascript-conflict =\n    Ruffle narazil na problém pri pokuse o inicializáciu.\n    Zdá sa, že táto stránka používa kód JavaScript, ktorý je v konflikte s Ruffle.\n    Ak ste správcom servera, odporúčame vám skúsiť načítať súbor na prázdnu stránku.\nerror-javascript-conflict-outdated = Môžete sa tiež pokúsiť nahrať novšiu verziu Ruffle, ktorá môže daný problém vyriešiť (aktuálny build je zastaraný: { $buildDate }).\nerror-csp-conflict =\n    Ruffle narazil na problém pri pokuse o inicializáciu.\n    Zásady zabezpečenia obsahu tohto webového servera nepovoľujú spustenie požadovaného komponentu „.wasm“.\n    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.\nerror-unknown =\n    Ruffle narazil na problém pri pokuse zobraziť tento Flash obsah.\n    { $outdated ->\n         [true] Ak ste správcom servera, skúste nahrať novšiu verziu Ruffle (aktuálny build je zastaraný: { $buildDate }).\n        *[false] Toto by sa nemalo stať, takže by sme naozaj ocenili, keby ste mohli nahlásiť chybu!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Naozaj chcete odstrániť tento súbor s uloženými pozíciami?\nsave-reload-prompt =\n    Jediný spôsob, ako { $action ->\n         [delete] vymazať\n        *[replace] nahradiť\n    } tento súbor s uloženými pozíciami bez potenciálneho konfliktu je opätovné načítanie tohto obsahu. Chcete napriek tomu pokračovať?\nsave-download = Stiahnuť\nsave-replace = Nahradiť\nsave-delete = Vymazať\nsave-backup-all = Stiahnuť všetky súbory s uloženými pozíciami\n",
               "volume-controls.ftl": ""
            },
            "sv-SE": {
               "context_menu.ftl": "context-menu-download-swf = Ladda ner .swf\ncontext-menu-copy-debug-info = Kopiera felsökningsinfo\ncontext-menu-open-save-manager = Öppna Sparhanteraren\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Om Ruffletillägget ({ $version })\n       *[other] Om Ruffle ({ $version })\n    }\ncontext-menu-hide = Dölj denna meny\ncontext-menu-exit-fullscreen = Avsluta helskärm\ncontext-menu-enter-fullscreen = Helskärm\ncontext-menu-volume-controls = Ljudkontroller\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle kunde inte köra Flashinnehållet som är inbäddad på denna sida.\n    Du kan försöka öppna filen i en separat flik för att kringgå problemet.\npanic-title = Något gick fel :(\nmore-info = Mer info\nrun-anyway = Kör ändå\ncontinue = Fortsätt\nreport-bug = Rapportera Bugg\nupdate-ruffle = Uppdatera Ruffle\nruffle-demo = Webbdemo\nruffle-desktop = Skrivbordsprogram\nruffle-wiki = Se Rufflewiki\nenable-hardware-acceleration = Det verkar som att hårdvaruacceleration inte är på. Ruffle kan fortfarande fungera men kan vara orimligt långsam. Du kan ta reda på hur man sätter på hårdvaruacceleration genom att följa denna länk.\nview-error-details = Visa Felinformation\nopen-in-new-tab = Öppna i ny flik\nclick-to-unmute = Klicka för ljud\nerror-file-protocol =\n    Det verkar som att du kör Ruffle på "fil:"-protokollet.\n    Detta fungerar inte eftersom webbläsare blockerar många funktioner från att fungera av säkerhetsskäl.\n    Istället bjuder vi in dig att sätta upp en lokal server eller antingen använda webbdemon eller skrivbordsprogrammet.\nerror-javascript-config =\n    Ruffle har stött på ett stort fel på grund av en felaktig JavaScript-konfiguration.\n    Om du är serveradministratören bjuder vi in dig att kontrollera feldetaljerna för att ta reda på vilken parameter som är felaktig.\n    Du kan också konsultera Rufflewikin för hjälp.\nerror-wasm-not-found =\n    Ruffle misslyckades ladda ".wasm"-filkomponenten.\n    Om du är serveradministratören se till att filen har laddats upp korrekt.\n    Om problemet kvarstår kan du behöva använda inställningen "publicPath": konsultera vänligen Rufflewikin för hjälp.\nerror-wasm-mime-type =\n    Ruffle har stött på ett stort fel under initialiseringen.\n    Denna webbserver serverar inte ".wasm"-filer med korrekt MIME-typ.\n    Om du är serveradministratören konsultera vänligen Rufflewikin för hjälp.\nerror-swf-fetch =\n    Ruffle misslyckades ladda SWF-filen.\n    Det mest sannolika skälet är att filen inte längre existerar, så det finns inget för Ruffle att köra.\n    Försök att kontakta webbplatsadministratören för hjälp.\nerror-swf-cors =\n    Ruffle misslyckades ladda SWF-filen.\n    Åtkomst att hämta har sannolikt blockerats av CORS-policy.\n    Om du är serveradministratören konsultera vänligen Rufflewikin för hjälp.\nerror-wasm-cors =\n    Ruffle misslyckades ladda ".wasm"-filkomponenten.\n    Åtkomst att hämta har sannolikt blockerats av CORS-policy.\n    Om du är serveradministratören konsultera vänligen Rufflewikin för hjälp.\nerror-wasm-invalid =\n    Ruffle har stött på ett stort fel under initialiseringen.\n    Det verkar som att den här sidan har saknade eller ogiltiga filer för att köra Ruffle.\n    Om du är serveradministratören konsultera vänligen Rufflewikin för hjälp.\nerror-wasm-download =\n    Ruffle har stött på ett stort fel under initialiseringen.\n    Detta kan ofta lösas av sig själv så du kan prova att ladda om sidan.\n    Kontakta annars vänligen webbplatsens administratör.\nerror-wasm-disabled-on-edge =\n    Ruffle misslyckades ladda ".wasm"-filkomponenten.\n    För att åtgärda detta försök att öppna webbläsarens inställningar, klicka på "Sekretess, sökning och tjänster", bläddra ner och stäng av "Förbättra säkerheten på webben".\n    Detta tillåter din webbläsare ladda ".wasm"-filerna.\n    Om problemet kvarstår kan du behöva använda en annan webbläsare.\nerror-javascript-conflict =\n    Ruffle har stött på ett stort fel under initialiseringen.\n    Det verkar som att den här sidan använder JavaScript-kod som stör Ruffle.\n    Om du är serveradministratören bjuder vi in dig att försöka ladda filen på en blank sida.\nerror-javascript-conflict-outdated = Du kan också försöka ladda upp en nyare version av Ruffle, vilket kan kringgå problemet (nuvarande version är utdaterad: { $buildDate }).\nerror-csp-conflict =\n    Ruffle har stött på ett stort fel under initialiseringen.\n    Denna webbservers Content Security Policy tillåter inte ".wasm"-komponenten att köra.\n    Om du är serveradministratören konsultera vänligen Rufflewikin för hjälp.\nerror-unknown =\n    Ruffle har stött på ett stort fel medan den försökte visa Flashinnehållet.\n    { $outdated ->\n        [true] Om du är serveradministratören försök att ladda upp en nyare version av Ruffle (nuvarande version är utdaterad: { $buildDate }).\n       *[false] Detta är inte tänkt att hända så vi skulle verkligen uppskatta om du kunde rapportera in en bugg!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Är du säker på att du vill radera sparfilen?\nsave-reload-prompt =\n    Det enda sättet att { $action ->\n        [delete] radera\n       *[replace] ersätta\n    } denna sparfil utan potentiell konflikt är att ladda om innehållet. Vill du fortsätta ändå?\nsave-download = Ladda ner\nsave-replace = Ersätt\nsave-delete = Radera\nsave-backup-all = Ladda ner alla sparfiler\n",
               "volume-controls.ftl": "volume-controls = Ljudkontroller\nvolume-controls-mute = Stäng av ljud\nvolume-controls-volume = Volym\n"
            },
            "tr-TR": {
               "context_menu.ftl": "context-menu-download-swf = İndir .swf\ncontext-menu-copy-debug-info = Hata ayıklama bilgisini kopyala\ncontext-menu-open-save-manager = Kayıt Yöneticisini Aç\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] Ruffle Uzantısı Hakkında ({ $version })\n       *[other] Ruffle Hakkında ({ $version })\n    }\ncontext-menu-hide = Bu menüyü gizle\ncontext-menu-exit-fullscreen = Tam ekrandan çık\ncontext-menu-enter-fullscreen = Tam ekran yap\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle, bu sayfaya gömülü Flash\'ı çalıştıramadı.\n    Bu sorunu ortadan kaldırmak için dosyayı ayrı bir sekmede açmayı deneyebilirsiniz.\npanic-title = Bir şeyler yanlış gitti :(\nmore-info = Daha fazla bilgi\nrun-anyway = Yine de çalıştır\ncontinue = Devam et\nreport-bug = Hata Bildir\nupdate-ruffle = Ruffle\'ı Güncelle\nruffle-demo = Ağ Demosu\nruffle-desktop = Masaüstü Uygulaması\nruffle-wiki = Ruffle Wiki\'yi Görüntüle\nview-error-details = Hata Ayrıntılarını Görüntüle\nopen-in-new-tab = Yeni sekmede aç\nclick-to-unmute = Sesi açmak için tıklayın\nerror-file-protocol =\n    Görünüşe göre Ruffle\'ı "dosya:" protokolünde çalıştırıyorsunuz.\n    Tarayıcılar güvenlik nedenleriyle birçok özelliğin çalışmasını engellediğinden bu işe yaramaz.\n    Bunun yerine, sizi yerel bir sunucu kurmaya veya ağın demosunu ya da masaüstü uygulamasını kullanmaya davet ediyoruz.\nerror-javascript-config =\n    Ruffle, yanlış bir JavaScript yapılandırması nedeniyle önemli bir sorunla karşılaştı.\n    Sunucu yöneticisiyseniz, hangi parametrenin hatalı olduğunu bulmak için sizi hata ayrıntılarını kontrol etmeye davet ediyoruz.\n    Yardım için Ruffle wiki\'sine de başvurabilirsiniz.\nerror-wasm-not-found =\n    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.\n    Sunucu yöneticisi iseniz, lütfen dosyanın doğru bir şekilde yüklendiğinden emin olun.\n    Sorun devam ederse, "publicPath" ayarını kullanmanız gerekebilir: yardım için lütfen Ruffle wiki\'sine başvurun.\nerror-wasm-mime-type =\n    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.\n    Bu web sunucusu, doğru MIME tipinde ".wasm" dosyaları sunmuyor.\n    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki\'sine başvurun.\nerror-swf-fetch =\n    Ruffle, Flash SWF dosyasını yükleyemedi.\n    Bunun en olası nedeni, dosyanın artık mevcut olmaması ve bu nedenle Ruffle\'ın yükleyeceği hiçbir şeyin olmamasıdır.\n    Yardım için web sitesi yöneticisiyle iletişime geçmeyi deneyin.\nerror-swf-cors =\n    Ruffle, Flash SWF dosyasını yükleyemedi.\n    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.\n    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki\'sine başvurun.\nerror-wasm-cors =\n    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.\n    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.\n    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki\'sine başvurun.\nerror-wasm-invalid =\n    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.\n    Görünüşe göre bu sayfada Ruffle\'ı çalıştırmak için eksik veya geçersiz dosyalar var.\n    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki\'sine başvurun.\nerror-wasm-download =\n    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.\n    Bu genellikle kendi kendine çözülebilir, bu nedenle sayfayı yeniden yüklemeyi deneyebilirsiniz.\n    Aksi takdirde, lütfen site yöneticisiyle iletişime geçin.\nerror-wasm-disabled-on-edge =\n    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.\n    Bunu düzeltmek için tarayıcınızın ayarlarını açın, "Gizlilik, arama ve hizmetler"i tıklayın, aşağı kaydırın ve "Web\'de güvenliğinizi artırın"ı kapatmayı deneyin.\n    Bu, tarayıcınızın gerekli ".wasm" dosyalarını yüklemesine izin verecektir.\n    Sorun devam ederse, farklı bir tarayıcı kullanmanız gerekebilir.\nerror-javascript-conflict =\n    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.\n    Görünüşe göre bu sayfa, Ruffle ile çakışan JavaScript kodu kullanıyor.\n    Sunucu yöneticisiyseniz, sizi dosyayı boş bir sayfaya yüklemeyi denemeye davet ediyoruz.\nerror-javascript-conflict-outdated = Ayrıca sorunu giderebilecek daha yeni bir Ruffle sürümü yüklemeyi de deneyebilirsiniz (mevcut yapım eskimiş: { $buildDate }).\nerror-csp-conflict =\n    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.\n    Bu web sunucusunun İçerik Güvenliği Politikası, gerekli ".wasm" bileşeninin çalışmasına izin vermiyor.\n    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki\'sine bakın.\nerror-unknown =\n    Ruffle, bu Flash içeriğini görüntülemeye çalışırken önemli bir sorunla karşılaştı.\n    { $outdated ->\n        [true] Sunucu yöneticisiyseniz, lütfen Ruffle\'ın daha yeni bir sürümünü yüklemeyi deneyin (mevcut yapım eskimiş: { $buildDate }).\n       *[false] Bunun olmaması gerekiyor, bu yüzden bir hata bildirebilirseniz çok memnun oluruz!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = Bu kayıt dosyasını silmek istediğinize emin misiniz?\nsave-reload-prompt =\n    Bu kaydetme dosyasını potansiyel çakışma olmadan { $action ->\n        [delete] silmenin\n       *[replace] değiştirmenin\n    } tek yolu, bu içeriği yeniden yüklemektir. Yine de devam etmek istiyor musunuz?\nsave-download = İndir\nsave-replace = Değiştir\nsave-delete = Sil\nsave-backup-all = Tüm kayıt dosyalarını indir\n",
               "volume-controls.ftl": ""
            },
            "zh-CN": {
               "context_menu.ftl": "context-menu-download-swf = 下载 .swf\ncontext-menu-copy-debug-info = 复制调试信息\ncontext-menu-open-save-manager = 打开存档管理器\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] 关于 Ruffle 扩展 ({ $version })\n       *[other] 关于 Ruffle ({ $version })\n    }\ncontext-menu-hide = 隐藏此菜单\ncontext-menu-exit-fullscreen = 退出全屏\ncontext-menu-enter-fullscreen = 进入全屏\ncontext-menu-volume-controls = 音量控制\n",
               "messages.ftl": 'message-cant-embed =\n    Ruffle 无法运行嵌入在此页面中的 Flash。\n    您可以尝试在单独的标签页中打开该文件，以回避此问题。\npanic-title = 出了些问题 :(\nmore-info = 更多信息\nrun-anyway = 仍然运行\ncontinue = 继续\nreport-bug = 反馈问题\nupdate-ruffle = 更新 Ruffle\nruffle-demo = 网页演示\nruffle-desktop = 桌面应用程序\nruffle-wiki = 查看 Ruffle Wiki\nenable-hardware-acceleration = 看起来硬件加速未启用。虽然 Ruffle 可能运行，但可能会非常慢。您可以通过此链接了解启用硬件加速的方法。\nview-error-details = 查看错误详情\nopen-in-new-tab = 在新标签页中打开\nclick-to-unmute = 点击取消静音\nerror-file-protocol =\n    看来您正在 "file:" 协议上使用 Ruffle。\n    由于浏览器以安全原因阻止许多功能，因此这不起作用。\n    相反我们邀请您设置本地服务器或使用网页演示或桌面应用程序。\nerror-javascript-config =\n    由于错误的 JavaScript 配置，Ruffle 遇到了一个重大问题。\n    如果您是服务器管理员，我们邀请您检查错误详细信息，以找出哪个参数有故障。\n    您也可以查阅 Ruffle 的 Wiki 获取帮助。\nerror-wasm-not-found =\n    Ruffle 无法加载所需的 “.wasm” 文件组件。\n    如果您是服务器管理员，请确保文件已正确上传。\n    如果问题仍然存在，您可能需要使用 “publicPath” 设置：请查看 Ruffle 的 Wiki 获取帮助。\nerror-wasm-mime-type =\n    Ruffle 在试图初始化时遇到了一个重大问题。\n    该网站服务器没有提供 ".asm” 文件正确的 MIME 类型。\n    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。\nerror-swf-fetch =\n    Ruffle 无法加载 Flash SWF 文件。\n    最可能的原因是文件不再存在所以 Ruffle 没有要加载的内容。\n    请尝试联系网站管理员寻求帮助。\nerror-swf-cors =\n    Ruffle 无法加载 Flash SWF 文件。\n    获取权限可能被 CORS 策略阻止。\n    如果您是服务器管理员，请参考 Ruffle Wiki 获取帮助。\nerror-wasm-cors =\n    Ruffle 无法加载所需的“.wasm”文件组件。\n    获取权限可能被 CORS 策略阻止。\n    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。\nerror-wasm-invalid =\n    Ruffle 在试图初始化时遇到了一个重大问题。\n    这个页面似乎缺少文件来运行 Curl。\n    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。\nerror-wasm-download =\n    Ruffle 在试图初始化时遇到了一个重大问题。\n    这通常可以自行解决，因此您可以尝试重新加载页面。\n    否则请联系网站管理员。\nerror-wasm-disabled-on-edge =\n    Ruffle 无法加载所需的 “.wasm” 文件组件。\n    要解决这个问题，请尝试打开您的浏览器设置，单击"隐私、搜索和服务"，向下滚动并关闭"增强您的网络安全"。\n    这将允许您的浏览器加载所需的 “.wasm” 文件。\n    如果问题仍然存在，您可能必须使用不同的浏览器。\nerror-javascript-conflict =\n    Ruffle 在试图初始化时遇到了一个重大问题。\n    这个页面似乎使用了与 Ruffle 冲突的 JavaScript 代码。\n    如果您是服务器管理员，我们建议您尝试在空白页面上加载文件。\nerror-javascript-conflict-outdated = 您还可以尝试上传可能规避该问题的最新版本的 (当前构建已过时: { $buildDate })。\nerror-csp-conflict =\n    Ruffle 在试图初始化时遇到了一个重大问题。\n    该网站服务器的内容安全策略不允许运行所需的 “.wasm” 组件。\n    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。\nerror-unknown =\n    Ruffle 在试图显示此 Flash 内容时遇到了一个重大问题。\n    { $outdated ->\n        [true] 如果您是服务器管理员，请尝试上传更新的 Ruffle 版本 (当前版本已过时: { $buildDate }).\n       *[false] 这不应该发生，因此如果您可以报告错误，我们将非常感谢！\n    }\n',
               "save-manager.ftl": "save-delete-prompt = 确定要删除此存档吗？\nsave-reload-prompt =\n    为了避免潜在的冲突，{ $action ->\n        [delete] 删除\n       *[replace] 替换\n    } 此存档文件需要重新加载当前内容。是否仍然继续？\nsave-download = 下载\nsave-replace = 替换\nsave-delete = 删除\nsave-backup-all = 下载所有存档文件\n",
               "volume-controls.ftl": "volume-controls = 音量控制\nvolume-controls-mute = 静音\nvolume-controls-volume = 音量\n"
            },
            "zh-TW": {
               "context_menu.ftl": "context-menu-download-swf = 下載SWF檔案\ncontext-menu-copy-debug-info = 複製除錯資訊\ncontext-menu-open-save-manager = 打開存檔管理器\ncontext-menu-about-ruffle =\n    { $flavor ->\n        [extension] 關於Ruffle擴充功能 ({ $version })\n       *[other] 關於Ruffle ({ $version })\n    }\ncontext-menu-hide = 隱藏菜單\ncontext-menu-exit-fullscreen = 退出全螢幕\ncontext-menu-enter-fullscreen = 進入全螢幕\ncontext-menu-volume-controls = 音量控制\n",
               "messages.ftl": 'message-cant-embed =\n    目前Ruffle沒辦法執行嵌入式Flash。\n    你可以在新分頁中開啟來解決這個問題。\npanic-title = 完蛋，出問題了 :(\nmore-info = 更多資訊\nrun-anyway = 直接執行\ncontinue = 繼續\nreport-bug = 回報BUG\nupdate-ruffle = 更新Ruffle\nruffle-demo = 網頁展示\nruffle-desktop = 桌面應用程式\nruffle-wiki = 查看Ruffle Wiki\nview-error-details = 檢視錯誤詳細資料\nopen-in-new-tab = 開啟新增分頁\nclick-to-unmute = 點擊以取消靜音\nerror-file-protocol =\n    看起來你想要用Ruffle來執行"file:"的協議。\n    因為瀏覽器禁了很多功能以資安的理由來講。\n    我們建議你建立本地伺服器或著直接使用網頁展示或桌面應用程式。\nerror-javascript-config =\n    目前Ruffle遇到不正確的JavaScript配置。\n    如果你是伺服器管理員，我們建議你檢查哪個環節出錯。\n    或著你可以查詢Ruffle wiki得到需求幫助。\nerror-wasm-not-found =\n    目前Ruffle找不到".wasm"檔案。\n    如果你是伺服器管理員，確保檔案是否放對位置。\n    如果還是有問題的話，你要用"publicPath"來設定: 或著查詢Ruffle wiki得到需求幫助。\nerror-wasm-mime-type =\n    目前Ruffle初始化時遇到重大問題。\n    這網頁伺服器並沒有服務".wasm"檔案或正確的網際網路媒體類型。\n    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。\nerror-swf-fetch =\n    目前Ruffle無法讀取Flash的SWF檔案。\n    很有可能要讀取的檔案不存在，所以Ruffle讀不到東西。\n    請嘗試溝通伺服器管理員得到需求幫助。\nerror-swf-cors =\n    目前Ruffle無法讀取Flash的SWF檔案。\n    看起來是使用權被跨來源資源共用機制被擋到了。\n    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。\nerror-wasm-cors =\n    目前Ruffle無法讀取".wasm"檔案。\n    看起來是使用權被跨來源資源共用機制被擋到了。\n    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。\nerror-wasm-invalid =\n    目前Ruffle初始化時遇到重大問題。\n    看起來這網頁有缺失檔案導致Ruffle無法運行。\n    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。\nerror-wasm-download =\n    目前Ruffle初始化時遇到重大問題。\n    這可以你自己解決，你只要重新整理就好了。\n    否則，請嘗試溝通伺服器管理員得到需求幫助。\nerror-wasm-disabled-on-edge =\n    目前Ruffle無法讀取".wasm"檔案。\n    要修正的話，打開你的瀏覽器設定，點選"隱私權、搜尋與服務"，把"防止追蹤"給關掉。\n    這樣一來你的瀏覽器會讀取需要的".wasm"檔案。\n    如果問題一直還在的話，你必須要換瀏覽器了。\nerror-javascript-conflict =\n    目前Ruffle初始化時遇到重大問題。\n    看起來這網頁使用的JavaScript會跟Ruffle起衝突。\n    如果你是伺服器管理員，我們建議你開個空白頁來測試。\nerror-javascript-conflict-outdated = 你也可以上傳最新版的Ruffle，說不定你要說的的問題已經不見了(現在使用的版本已經過時: { $buildDate })。\nerror-csp-conflict =\n    目前Ruffle初始化時遇到重大問題。\n    這網頁伺服器被跨來源資源共用機制禁止讀取".wasm"檔案。\n    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。\nerror-unknown =\n    目前Ruffle初始化要讀取Flash內容時遇到重大問題\n    { $outdated ->\n        [true] 如果你是伺服器管理員， 請上傳最新版的Ruffle(現在使用的版本已經過時: { $buildDate }).\n       *[false] 這不應該發生的，我們也很高興你告知bug!\n    }\n',
               "save-manager.ftl": "save-delete-prompt = 你確定要刪除這個存檔嗎？\nsave-reload-prompt =\n    唯一方法只有 { $action ->\n        [delete] 刪除\n       *[replace] 取代\n    } 這個存檔不會完全取代直到重新啟動. 你需要繼續嗎?\nsave-download = 下載\nsave-replace = 取代\nsave-delete = 刪除\nsave-backup-all = 下載所有存檔檔案。\n",
               "volume-controls.ftl": "volume-controls = 音量控制\nvolume-controls-mute = 靜音\nvolume-controls-volume = 音量\n"
            }
         },
         Se = {};
      for (const [e, n] of Object.entries(Re)) {
         const t = new J(e);
         if (n)
            for (const [r, a] of Object.entries(n))
               if (a)
                  for (const n of t.addResource(new we(a))) console.error(`Error in text for ${e} ${r}: ${n}`);
         Se[e] = t
      }

      function ze(e, n, t) {
         const r = Se[e];
         if (void 0 !== r) {
            const e = r.getMessage(n);
            if (void 0 !== e && e.value) return r.formatPattern(e.value, t)
         }
         return null
      }

      function Ce(e, n) {
         const t = function (e, n, {
            strategy: t = "filtering",
            defaultLocale: r
         } = {}) {
            const a = function (e, n, t) {
               const r = new Set,
                  a = new Map;
               for (let e of n) new xe(e).isWellFormed && a.set(e, new xe(e));
               e: for (const n of e) {
                  const e = n.toLowerCase(),
                     i = new xe(e);
                  if (void 0 !== i.language) {
                     for (const n of a.keys())
                        if (e === n.toLowerCase()) {
                           if (r.add(n), a.delete(n), "lookup" === t) return Array.from(r);
                           if ("filtering" === t) continue;
                           continue e
                        } for (const [e, n] of a.entries())
                        if (n.matches(i, !0, !1)) {
                           if (r.add(e), a.delete(e), "lookup" === t) return Array.from(r);
                           if ("filtering" === t) continue;
                           continue e
                        } if (i.addLikelySubtags())
                        for (const [e, n] of a.entries())
                           if (n.matches(i, !0, !1)) {
                              if (r.add(e), a.delete(e), "lookup" === t) return Array.from(r);
                              if ("filtering" === t) continue;
                              continue e
                           } i.clearVariants();
                     for (const [e, n] of a.entries())
                        if (n.matches(i, !0, !0)) {
                           if (r.add(e), a.delete(e), "lookup" === t) return Array.from(r);
                           if ("filtering" === t) continue;
                           continue e
                        } if (i.clearRegion(), i.addLikelySubtags())
                        for (const [e, n] of a.entries())
                           if (n.matches(i, !0, !1)) {
                              if (r.add(e), a.delete(e), "lookup" === t) return Array.from(r);
                              if ("filtering" === t) continue;
                              continue e
                           } i.clearRegion();
                     for (const [e, n] of a.entries())
                        if (n.matches(i, !0, !0)) {
                           if (r.add(e), a.delete(e), "lookup" === t) return Array.from(r);
                           if ("filtering" === t) continue;
                           continue e
                        }
                  }
               }
               return Array.from(r)
            }(Array.from(null != e ? e : []).map(String), Array.from(null != n ? n : []).map(String), t);
            if ("lookup" === t) {
               if (void 0 === r) throw new Error("defaultLocale cannot be undefined for strategy `lookup`");
               0 === a.length && a.push(r)
            } else r && !a.includes(r) && a.push(r);
            return a
         }(navigator.languages, Object.keys(Se), {
            defaultLocale: "en-US"
         });
         for (const r in t) {
            const a = ze(t[r], e, n);
            if (a) return a
         }
         return console.error(`Unknown text key '${e}'`), e
      }

      function Ee(e, n) {
         const t = document.createElement("div");
         return Ce(e, n).split("\n").forEach((e => {
            const n = document.createElement("p");
            n.innerText = e, t.appendChild(n)
         })), t
      }

      function Ie(e, n, t, r, a) {
         const i = a ? document.createElementNS(a, e) : document.createElement(e);
         if (n && (i.id = n), t && a ? i.classList.add(t) : t && (i.className = t), r)
            for (const [e, n] of Object.entries(r)) i.setAttribute(e, n);
         return i
      }

      function je(e, n, t, r, a) {
         const i = Ie("input", n);
         return i.type = e, t && (i.min = t), r && (i.max = r), a && (i.step = a), i
      }

      function Be(e, n) {
         const t = Ie("label", e);
         return t.htmlFor = n, t
      }

      function Oe(e, n) {
         e.appendChild(n)
      }
      const Fe = document.createElement("template"),
         De = "http://www.w3.org/2000/svg",
         Pe = Ie("style", "static-styles"),
         Te = Ie("style", "dynamic-styles"),
         Le = Ie("div", "container"),
         Me = Ie("div", "play-button"),
         We = Ie("div", void 0, "icon"),
         Ne = Ie("svg", void 0, void 0, {
            xmlns: De,
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            preserveAspectRatio: "xMidYMid",
            viewBox: "0 0 250 250",
            width: "100%",
            height: "100%"
         }, De),
         Ue = Ie("defs", void 0, void 0, void 0, De),
         $e = Ie("linearGradient", "a", void 0, {
            gradientUnits: "userSpaceOnUse",
            x1: "125",
            y1: "0",
            x2: "125",
            y2: "250",
            spreadMethod: "pad"
         }, De),
         qe = Ie("stop", void 0, void 0, {
            offset: "0%",
            "stop-color": "#FDA138"
         }, De),
         Ze = Ie("stop", void 0, void 0, {
            offset: "100%",
            "stop-color": "#FD3A40"
         }, De),
         He = Ie("g", "b", void 0, void 0, De),
         Ve = Ie("path", void 0, void 0, {
            fill: "url(#a)",
            d: "M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"
         }, De),
         Je = Ie("path", void 0, void 0, {
            fill: "#FFF",
            d: "M87 55v140l100-70L87 55z"
         }, De),
         Ke = document.createElementNS(De, "use");
      Ke.href.baseVal = "#b";
      const Ge = Ie("div", "unmute-overlay"),
         Ye = Ie("div", void 0, "background"),
         Qe = Ie("div", void 0, "icon"),
         Xe = Ie("svg", "unmute-overlay-svg", void 0, {
            xmlns: De,
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            preserveAspectRatio: "xMidYMid",
            viewBox: "0 0 512 584",
            width: "100%",
            height: "100%",
            scale: "0.8"
         }, De),
         en = Ie("path", void 0, void 0, {
            fill: "#FFF",
            stroke: "#FFF",
            d: "m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"
         }, De),
         nn = Ie("path", void 0, void 0, {
            fill: "#FFF",
            stroke: "#FFF",
            d: "m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"
         }, De),
         tn = Ie("path", void 0, void 0, {
            fill: "#FFF",
            stroke: "#FFF",
            d: "m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"
         }, De),
         rn = Ie("text", "unmute-text", void 0, {
            x: "256",
            y: "560",
            "text-anchor": "middle",
            "font-size": "60px",
            fill: "#FFF",
            stroke: "#FFF"
         }, De),
         an = Ie("input", "virtual-keyboard", void 0, {
            type: "text",
            autocapitalize: "off",
            autocomplete: "off",
            autocorrect: "off"
         }),
         on = Ie("div", "splash-screen", "hidden"),
         sn = Ie("svg", void 0, "logo", {
            xmlns: De,
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            preserveAspectRatio: "xMidYMid",
            viewBox: "0 0 380 150"
         }, De),
         ln = Ie("g", void 0, void 0, void 0, De),
         un = Ie("path", void 0, void 0, {
            fill: "#966214",
            d: "M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"
         }, De),
         cn = Ie("path", void 0, void 0, {
            fill: "var(--ruffle-orange)",
            d: "M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"
         }, De),
         dn = Ie("svg", void 0, "loading-animation", {
            xmlns: De,
            viewBox: "0 0 66 66"
         }, De),
         fn = Ie("circle", void 0, "spinner", {
            fill: "none",
            "stroke-width": "6",
            "stroke-linecap": "round",
            cx: "33",
            cy: "33",
            r: "30"
         }, De),
         hn = Ie("div", void 0, "loadbar"),
         mn = Ie("div", void 0, "loadbar-inner"),
         pn = Ie("div", "save-manager", "modal hidden"),
         vn = Ie("div", "modal-area", "modal-area"),
         gn = Ie("span", void 0, "close-modal");
      gn.textContent = "×";
      const bn = Ie("div", void 0, "general-save-options"),
         wn = Ie("span", "backup-saves", "save-option"),
         kn = Ie("table", "local-saves"),
         yn = Ie("div", "volume-controls-modal", "modal hidden"),
         xn = Ie("div", void 0, "modal-area"),
         An = Ie("span", void 0, "close-modal");
      An.textContent = "×";
      const _n = Ie("div", "volume-controls"),
         Rn = Ie("h2", "volume-controls-heading"),
         Sn = Be("mute-checkbox-label", "mute-checkbox"),
         zn = je("checkbox", "mute-checkbox"),
         Cn = Ie("div", void 0, "slider-container"),
         En = Be("volume-slider-label", "volume-slider"),
         In = je("range", "volume-slider", "0", "100", "1"),
         jn = Ie("span", "volume-slider-text"),
         Bn = Ie("div", "video-modal", "modal hidden"),
         On = Ie("div", void 0, "modal-area"),
         Fn = Ie("span", void 0, "close-modal");
      Fn.textContent = "×";
      const Dn = Ie("div", "video-holder"),
         Pn = Ie("div", "hardware-acceleration-modal", "modal hidden"),
         Tn = Ie("div", void 0, "modal-area"),
         Ln = Ie("span", void 0, "close-modal");
      Ln.textContent = "×";
      const Mn = document.createElement("a");
      Mn.href = "https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration", Mn.target = "_blank", Mn.className = "acceleration-link", Mn.textContent = Ce("enable-hardware-acceleration");
      const Wn = Ie("div", "context-menu-overlay", "hidden"),
         Nn = Ie("ul", "context-menu");
      Oe(Fe.content, Pe), Oe(Fe.content, Te), Oe(Fe.content, Le), Oe(Le, Me), Oe(Me, We), Oe(We, Ne), Oe(Ne, Ue), Oe(Ue, $e), Oe($e, qe), Oe($e, Ze), Oe(Ue, He), Oe(He, Ve), Oe(He, Je), Oe(Ne, Ke), Oe(Le, Ge), Oe(Ge, Ye), Oe(Ge, Qe), Oe(Qe, Xe), Oe(Xe, en), Oe(Xe, nn), Oe(Xe, tn), Oe(Xe, rn), Oe(Le, an), Oe(Fe.content, on), Oe(on, sn), Oe(sn, ln), Oe(ln, un), Oe(ln, cn), Oe(on, dn), Oe(dn, fn), Oe(on, hn), Oe(hn, mn), Oe(Fe.content, pn), Oe(pn, vn), Oe(vn, gn), Oe(vn, bn), Oe(bn, wn), Oe(vn, kn), Oe(Fe.content, yn), Oe(yn, xn), Oe(xn, An), Oe(xn, _n), Oe(_n, Rn), Oe(_n, Sn), Oe(_n, zn), Oe(_n, Cn), Oe(Cn, En), Oe(Cn, In), Oe(Cn, jn), Oe(Fe.content, Bn), Oe(Bn, On), Oe(On, Fn), Oe(On, Dn), Oe(Fe.content, Pn), Oe(Pn, Tn), Oe(Tn, Ln), Oe(Tn, Mn), Oe(Fe.content, Wn), Oe(Wn, Nn);
      const Un = {};

      function $n(e, n) {
         const t = Un[e];
         if (void 0 !== t) {
            if (t.class !== n) throw new Error("Internal naming conflict on " + e);
            return t.name
         }
         let r = 0;
         if (void 0 !== window.customElements)
            for (; r < 999;) {
               let t = e;
               if (r > 0 && (t = t + "-" + r), void 0 === window.customElements.get(t)) return window.customElements.define(t, n), Un[e] = {
                  class: n,
                  name: t,
                  internalName: e
               }, t;
               r += 1
            }
         throw new Error("Failed to assign custom element " + e)
      }
      var qn, Zn, Hn, Vn, Jn, Kn, Gn, Yn, Qn;
      ! function (e) {
         e.On = "on", e.Off = "off", e.Auto = "auto"
      }(qn || (qn = {})),
      function (e) {
         e.Off = "off", e.Fullscreen = "fullscreen", e.On = "on"
      }(Zn || (Zn = {})),
      function (e) {
         e.Visible = "visible", e.Hidden = "hidden"
      }(Hn || (Hn = {})),
      function (e) {
         e.Error = "error", e.Warn = "warn", e.Info = "info", e.Debug = "debug", e.Trace = "trace"
      }(Vn || (Vn = {})),
      function (e) {
         e.Window = "window", e.Opaque = "opaque", e.Transparent = "transparent", e.Direct = "direct", e.Gpu = "gpu"
      }(Jn || (Jn = {})),
      function (e) {
         e.WebGpu = "webgpu", e.WgpuWebgl = "wgpu-webgl", e.Webgl = "webgl", e.Canvas = "canvas"
      }(Kn || (Kn = {})),
      function (e) {
         e.On = "on", e.RightClickOnly = "rightClickOnly", e.Off = "off"
      }(Gn || (Gn = {})),
      function (e) {
         e.Allow = "allow", e.Confirm = "confirm", e.Deny = "deny"
      }(Yn || (Yn = {})),
      function (e) {
         e.All = "all", e.Internal = "internal", e.None = "none"
      }(Qn || (Qn = {}));
      const Xn = {
            allowScriptAccess: !1,
            parameters: {},
            autoplay: qn.Auto,
            backgroundColor: null,
            letterbox: Zn.Fullscreen,
            unmuteOverlay: Hn.Visible,
            upgradeToHttps: !0,
            compatibilityRules: !0,
            favorFlash: !0,
            warnOnUnsupportedContent: !0,
            logLevel: Vn.Error,
            showSwfDownload: !1,
            contextMenu: Gn.On,
            preloader: !0,
            splashScreen: !0,
            maxExecutionDuration: 15,
            base: null,
            menu: !0,
            salign: "",
            forceAlign: !1,
            quality: "high",
            scale: "showAll",
            forceScale: !1,
            frameRate: null,
            wmode: Jn.Opaque,
            publicPath: null,
            polyfills: !0,
            playerVersion: null,
            preferredRenderer: null,
            openUrlMode: Yn.Allow,
            allowNetworking: Qn.All,
            openInNewTab: null
         },
         et = "application/x-shockwave-flash",
         nt = "application/futuresplash",
         tt = "application/x-shockwave-flash2-preview",
         rt = "application/vnd.adobe.flash.movie";

      function at(e, n) {
         const t = function (e) {
            let n = "";
            try {
               n = new URL(e, "https://example.com").pathname
            } catch (e) {}
            if (n && n.length >= 4) {
               const e = n.slice(-4).toLowerCase();
               if (".swf" === e || ".spl" === e) return !0
            }
            return !1
         }(e);
         return n ? function (e, n) {
            switch (e = e.toLowerCase()) {
               case et.toLowerCase():
               case nt.toLowerCase():
               case tt.toLowerCase():
               case rt.toLowerCase():
                  return !0;
               default:
                  if (n) switch (e) {
                     case "application/octet-stream":
                     case "binary/octet-stream":
                        return !0
                  }
            }
            return !1
         }(n, t) : t
      }
      const it = {
         versionNumber: "0.1.0",
         versionName: "nightly 2023-10-06",
         versionChannel: "nightly",
         buildDate: "2023-10-06T00:24:22.107Z",
         commitHash: "3a658f5dec872218032a9545ae985dcbadd5c3d4"
      };
      var ot = a(297),
         st = a.n(ot);
      const lt = "https://ruffle.rs",
         ut = /^\s*(\d+(\.\d+)?(%)?)/;
      let ct = !1;
      var dt, ft;

      function ht(e) {
         if (null == e) return {};
         e instanceof URLSearchParams || (e = new URLSearchParams(e));
         const n = {};
         for (const [t, r] of e) n[t] = r.toString();
         return n
      }! function (e) {
         e[e.Unknown = 0] = "Unknown", e[e.CSPConflict = 1] = "CSPConflict", e[e.FileProtocol = 2] = "FileProtocol", e[e.InvalidWasm = 3] = "InvalidWasm", e[e.JavascriptConfiguration = 4] = "JavascriptConfiguration", e[e.JavascriptConflict = 5] = "JavascriptConflict", e[e.WasmCors = 6] = "WasmCors", e[e.WasmDownload = 7] = "WasmDownload", e[e.WasmMimeType = 8] = "WasmMimeType", e[e.WasmNotFound = 9] = "WasmNotFound", e[e.WasmDisabledMicrosoftEdge = 10] = "WasmDisabledMicrosoftEdge", e[e.SwfFetchError = 11] = "SwfFetchError", e[e.SwfCors = 12] = "SwfCors"
      }(dt || (dt = {}));
      class mt {
         constructor(e, n) {
            this.x = e, this.y = n
         }
         distanceTo(e) {
            const n = e.x - this.x,
               t = e.y - this.y;
            return Math.sqrt(n * n + t * t)
         }
      }
      class pt {
         constructor(e = "#", n = Ce("view-error-details")) {
            this.url = e, this.label = n
         }
      }
      class vt extends HTMLElement {
         get readyState() {
            return this._readyState
         }
         get metadata() {
            return this._metadata
         }
         constructor() {
            super(), this.contextMenuForceDisabled = !1, this.isTouch = !1, this.contextMenuSupported = !1, this.panicked = !1, this.rendererDebugInfo = "", this.longPressTimer = null, this.pointerDownPosition = null, this.pointerMoveMaxDistance = 0, this.config = {}, this.shadow = this.attachShadow({
               mode: "open"
            }), this.shadow.appendChild(Fe.content.cloneNode(!0)), this.dynamicStyles = this.shadow.getElementById("dynamic-styles"), this.staticStyles = this.shadow.getElementById("static-styles"), this.container = this.shadow.getElementById("container"), this.playButton = this.shadow.getElementById("play-button"), this.playButton.addEventListener("click", (() => this.play())), this.unmuteOverlay = this.shadow.getElementById("unmute-overlay"), this.splashScreen = this.shadow.getElementById("splash-screen"), this.virtualKeyboard = this.shadow.getElementById("virtual-keyboard"), this.virtualKeyboard.addEventListener("input", this.virtualKeyboardInput.bind(this)), this.saveManager = this.shadow.getElementById("save-manager"), this.videoModal = this.shadow.getElementById("video-modal"), this.hardwareAccelerationModal = this.shadow.getElementById("hardware-acceleration-modal"), this.volumeControls = this.shadow.getElementById("volume-controls-modal"), this.addModalJavaScript(this.saveManager), this.addModalJavaScript(this.volumeControls), this.addModalJavaScript(this.videoModal), this.addModalJavaScript(this.hardwareAccelerationModal), this.volumeSettings = new xt(!1, 100), this.addVolumeControlsJavaScript(this.volumeControls);
            const e = this.saveManager.querySelector("#backup-saves");
            e && (e.addEventListener("click", this.backupSaves.bind(this)), e.innerText = Ce("save-backup-all"));
            const n = this.unmuteOverlay.querySelector("#unmute-overlay-svg");
            n && (n.querySelector("#unmute-text").textContent = Ce("click-to-unmute")), this.contextMenuOverlay = this.shadow.getElementById("context-menu-overlay"), this.contextMenuElement = this.shadow.getElementById("context-menu"), window.addEventListener("pointerdown", this.checkIfTouch.bind(this)), this.addEventListener("contextmenu", this.showContextMenu.bind(this)), this.container.addEventListener("pointerdown", this.pointerDown.bind(this)), this.container.addEventListener("pointermove", this.checkLongPressMovement.bind(this)), this.container.addEventListener("pointerup", this.checkLongPress.bind(this)), this.container.addEventListener("pointercancel", this.clearLongPressTimer.bind(this)), this.addEventListener("fullscreenchange", this.fullScreenChange.bind(this)), this.addEventListener("webkitfullscreenchange", this.fullScreenChange.bind(this)), this.instance = null, this.onFSCommand = null, this._readyState = ft.HaveNothing, this._metadata = null, this.lastActivePlayingState = !1, this.setupPauseOnTabHidden()
         }
         addModalJavaScript(e) {
            const n = e.querySelector("#video-holder");
            this.container.addEventListener("click", (() => {
               e.classList.add("hidden"), n && (n.textContent = "")
            }));
            const t = e.querySelector(".modal-area");
            t && t.addEventListener("click", (e => e.stopPropagation()));
            const r = e.querySelector(".close-modal");
            r && r.addEventListener("click", (() => {
               e.classList.add("hidden"), n && (n.textContent = "")
            }))
         }
         addVolumeControlsJavaScript(e) {
            const n = e.querySelector("#mute-checkbox"),
               t = e.querySelector("#volume-slider"),
               r = e.querySelector("#volume-slider-text"),
               a = e.querySelector("#volume-controls-heading"),
               i = e.querySelector("#mute-checkbox-label"),
               o = e.querySelector("#volume-slider-label");
            a.textContent = Ce("volume-controls"), i.textContent = Ce("volume-controls-mute"), o.textContent = Ce("volume-controls-volume"), n.checked = this.volumeSettings.isMuted, t.disabled = n.checked, t.valueAsNumber = this.volumeSettings.volume, o.style.color = n.checked ? "grey" : "black", r.style.color = n.checked ? "grey" : "black", r.textContent = String(this.volumeSettings.volume), n.addEventListener("change", (() => {
               var e;
               t.disabled = n.checked, o.style.color = n.checked ? "grey" : "black", r.style.color = n.checked ? "grey" : "black", this.volumeSettings.isMuted = n.checked, null === (e = this.instance) || void 0 === e || e.set_volume(this.volumeSettings.get_volume())
            })), t.addEventListener("input", (() => {
               var e;
               r.textContent = t.value, this.volumeSettings.volume = t.valueAsNumber, null === (e = this.instance) || void 0 === e || e.set_volume(this.volumeSettings.get_volume())
            }))
         }
         setupPauseOnTabHidden() {
            document.addEventListener("visibilitychange", (() => {
               this.instance && (document.hidden && (this.lastActivePlayingState = this.instance.is_playing(), this.instance.pause()), document.hidden || !0 !== this.lastActivePlayingState || this.instance.play())
            }), !1)
         }
         get height() {
            return this.getAttribute("height") || ""
         }
         set height(e) {
            this.setAttribute("height", e)
         }
         get width() {
            return this.getAttribute("width") || ""
         }
         set width(e) {
            this.setAttribute("width", e)
         }
         get type() {
            return this.getAttribute("type") || ""
         }
         set type(e) {
            this.setAttribute("type", e)
         }
         connectedCallback() {
            this.updateStyles(),
               function (e) {
                  if (!e.sheet) return;
                  ! function (e, n) {
                     for (const t of n) try {
                        e.insertRule(t)
                     } catch (e) {}
                  }(e.sheet, [":host {\n            all: initial;\n\n            --ruffle-blue: #37528c;\n            --ruffle-orange: #ffad33;\n\n            display: inline-block;\n            position: relative;\n            /* Default width/height; this will get overridden by user styles/attributes. */\n            width: 550px;\n            height: 400px;\n            font-family: Arial, sans-serif;\n            letter-spacing: 0.4px;\n            touch-action: none;\n            user-select: none;\n            -webkit-user-select: none;\n            -webkit-tap-highlight-color: transparent;\n        }", ":host(:-webkit-full-screen) {\n            display: block;\n            width: 100% !important;\n            height: 100% !important;\n        }", ".hidden {\n            display: none !important;\n        }", "#container,\n        #play-button,\n        #unmute-overlay,\n        #unmute-overlay .background,\n        #panic,\n        #splash-screen,\n        #message-overlay {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n        }", "#container {\n            overflow: hidden;\n        }", "#container canvas {\n            width: 100%;\n            height: 100%;\n        }", "#play-button,\n        #unmute-overlay {\n            cursor: pointer;\n            display: none;\n        }", "#unmute-overlay .background {\n            background: black;\n            opacity: 0.7;\n        }", "#play-button .icon,\n        #unmute-overlay .icon {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 50%;\n            height: 50%;\n            max-width: 384px;\n            max-height: 384px;\n            transform: translate(-50%, -50%);\n            opacity: 0.8;\n        }", "#play-button:hover .icon,\n        #unmute-overlay:hover .icon {\n            opacity: 1;\n        }", "#panic {\n            font-size: 20px;\n            text-align: center;\n            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);\n            color: white;\n            display: flex;\n            flex-flow: column;\n            justify-content: space-around;\n        }", "#panic a {\n            color: var(--ruffle-blue);\n            font-weight: bold;\n        }", "#panic-title {\n            font-size: xxx-large;\n            font-weight: bold;\n        }", "#panic-body.details {\n            flex: 0.9;\n            margin: 0 10px;\n        }", "#panic-body textarea {\n            width: 100%;\n            height: 100%;\n            resize: none;\n        }", "#panic ul {\n            padding: 0;\n            display: flex;\n            list-style-type: none;\n            justify-content: space-evenly;\n        }", "#message-overlay {\n            position: absolute;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            opacity: 1;\n            z-index: 2;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            overflow: auto;\n        }", "#message-overlay .message {\n            text-align: center;\n            max-height: 100%;\n            max-width: 100%;\n            padding: 5%;\n            font-size: 20px;\n        }", "#message-overlay p {\n            margin: 0.5em 0;\n        }", "#message-overlay .message div {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            column-gap: 1em;\n        }", "#message-overlay a, #message-overlay button {\n            cursor: pointer;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            border: 2px solid var(--ruffle-orange);\n            font-weight: bold;\n            font-size: 1.25em;\n            border-radius: 0.6em;\n            padding: 10px;\n            text-decoration: none;\n            margin: 2% 0;\n        }", "#message-overlay a:hover, #message-overlay button:hover {\n            background: #ffffff4c;\n        }", "#continue-btn {\n             cursor: pointer;\n             background: var(--ruffle-blue);\n             color: var(--ruffle-orange);\n             border: 2px solid var(--ruffle-orange);\n             font-weight: bold;\n             font-size: 20px;\n             border-radius: 20px;\n             padding: 10px;\n        }", "#continue-btn:hover {\n            background: #ffffff4c;\n        }", "#context-menu-overlay {\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n            position: absolute;\n        }", "#context-menu {\n            color: black;\n            background: #fafafa;\n            border: 1px solid gray;\n            box-shadow: 0px 5px 10px -5px black;\n            position: absolute;\n            font-size: 14px;\n            text-align: left;\n            list-style: none;\n            padding: 0;\n            margin: 0;\n        }", "#context-menu .menu-item {\n            padding: 5px 10px;\n            cursor: pointer;\n            color: black;\n        }", "#context-menu .menu-item.disabled {\n            cursor: default;\n            color: gray;\n        }", "#context-menu .menu-item:not(.disabled):hover {\n            background: lightgray;\n        }", "#context-menu .menu-separator hr {\n            border: none;\n            border-bottom: 1px solid lightgray;\n            margin: 2px;\n        }", "#splash-screen {\n            display: flex;\n            flex-direction: column;\n            background: var(--splash-screen-background, var(--preloader-background, var(--ruffle-blue)));\n            align-items: center;\n            justify-content: center;\n        }", ".loadbar {\n            width: 100%;\n            max-width: 316px;\n            max-height: 10px;\n            height: 20%;\n            background: #253559;\n        }", ".loadbar-inner {\n            width: 0px;\n            max-width: 100%;\n            height: 100%;\n            background: var(--ruffle-orange);\n        }", ".logo {\n            display: var(--logo-display, block);\n            max-width: 380px;\n            max-height: 150px;\n        }", ".loading-animation {\n            max-width: 28px;\n            max-height: 28px;\n            margin-bottom: 2%;\n            width: 10%;\n            aspect-ratio: 1;\n        }", ".spinner {\n            stroke-dasharray: 180;\n            stroke-dashoffset: 135;\n            stroke: var(--ruffle-orange);\n            transform-origin: 50% 50%;\n            animation: rotate 1.5s linear infinite;\n        }", "@keyframes rotate {\n            to {\n                transform: rotate(360deg);\n            }\n        }", "#virtual-keyboard {\n            position: absolute;\n            opacity: 0;\n            top: -100px;\n            width: 1px;\n            height: 1px;\n        }", ".modal {\n            height: inherit;\n            user-select: text;\n        }", ".modal-area {\n            position: sticky;\n            background: white;\n            width: fit-content;\n            padding: 16px 28px 16px 16px;\n            border: 3px solid black;\n            margin: auto;\n        }", "#modal-area {\n            height: 500px;\n            max-height: calc(100% - 38px);\n            min-height: 80px;\n        }", "#restore-save {\n            display: none;\n        }", ".replace-save {\n            display: none;\n        }", ".save-option {\n            display: inline-block;\n            padding: 3px 10px;\n            margin: 5px 2px;\n            cursor: pointer;\n            border-radius: 50px;\n            background-color: var(--ruffle-blue);\n            color: white;\n        }", ".close-modal {\n            position: absolute;\n            top: 5px;\n            right: 10px;\n            cursor: pointer;\n            font-size: x-large;\n        }", ".general-save-options {\n            text-align: center;\n            padding-bottom: 8px;\n            border-bottom: 2px solid #888;\n        }", "#local-saves {\n            border-collapse: collapse;\n            overflow-y: auto;\n            display: block;\n            padding-right: 16px;\n            height: calc(100% - 45px);\n            min-height: 30px;\n        }", "#local-saves td {\n            border-bottom: 1px solid #bbb;\n            height: 30px;\n        }", "#local-saves tr td:nth-child(1) {\n            padding-right: 1em;\n            word-break: break-all;\n        }", "#local-saves tr:nth-child(even) {\n            background-color: #f2f2f2;\n        }", "#video-holder {\n            padding-top: 20px;\n        }", ".slider-container {\n            margin-top: 10px;\n            display: flex;\n            align-items: center;\n        }", "#volume-slider {\n            margin-left: 10px;\n            margin-right: 10px;\n        }", "#volume-slider-text {\n            text-align: right;\n            width: 28px;\n        }", ".acceleration-link {\n            color: var(--ruffle-blue);\n            text-decoration: none;\n        }", ".acceleration-link:hover {\n            text-decoration: underline;\n        }"])
               }(this.staticStyles)
         }
         static get observedAttributes() {
            return ["width", "height"]
         }
         attributeChangedCallback(e, n, t) {
            "width" !== e && "height" !== e || this.updateStyles()
         }
         disconnectedCallback() {
            this.destroy()
         }
         updateStyles() {
            if (this.dynamicStyles.sheet) {
               if (this.dynamicStyles.sheet.cssRules)
                  for (let e = this.dynamicStyles.sheet.cssRules.length - 1; e >= 0; e--) this.dynamicStyles.sheet.deleteRule(e);
               const e = this.attributes.getNamedItem("width");
               if (null != e) {
                  const n = vt.htmlDimensionToCssDimension(e.value);
                  null !== n && this.dynamicStyles.sheet.insertRule(`:host { width: ${n}; }`)
               }
               const n = this.attributes.getNamedItem("height");
               if (null != n) {
                  const e = vt.htmlDimensionToCssDimension(n.value);
                  null !== e && this.dynamicStyles.sheet.insertRule(`:host { height: ${e}; }`)
               }
            }
         }
         isUnusedFallbackObject() {
            const e = function (e) {
               const n = Un[e];
               return void 0 !== n ? {
                  internalName: e,
                  name: n.name,
                  class: n.class
               } : null
            }("ruffle-object");
            if (null !== e) {
               let n = this.parentNode;
               for (; n !== document && null !== n;) {
                  if (n.nodeName === e.name) return !0;
                  n = n.parentNode
               }
            }
            return !1
         }
         async ensureFreshInstance() {
            var e;
            this.destroy(), this.loadedConfig && !1 !== this.loadedConfig.splashScreen && !1 !== this.loadedConfig.preloader && this.showSplashScreen(), this.loadedConfig && !1 === this.loadedConfig.preloader && console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."), this.loadedConfig && this.loadedConfig.maxExecutionDuration && "number" != typeof this.loadedConfig.maxExecutionDuration && console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."), this.loadedConfig && "boolean" == typeof this.loadedConfig.contextMenu && console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');
            const n = await z(this.loadedConfig || {}, this.onRuffleDownloadProgress.bind(this)).catch((e => {
               if (console.error(`Serious error loading Ruffle: ${e}`), "file:" === window.location.protocol) e.ruffleIndexError = dt.FileProtocol;
               else {
                  e.ruffleIndexError = dt.WasmNotFound;
                  const n = String(e.message).toLowerCase();
                  n.includes("mime") ? e.ruffleIndexError = dt.WasmMimeType : n.includes("networkerror") || n.includes("failed to fetch") ? e.ruffleIndexError = dt.WasmCors : n.includes("disallowed by embedder") ? e.ruffleIndexError = dt.CSPConflict : "CompileError" === e.name ? e.ruffleIndexError = dt.InvalidWasm : n.includes("could not download wasm module") && "TypeError" === e.name ? e.ruffleIndexError = dt.WasmDownload : "TypeError" === e.name ? e.ruffleIndexError = dt.JavascriptConflict : navigator.userAgent.includes("Edg") && n.includes("webassembly is not defined") && (e.ruffleIndexError = dt.WasmDisabledMicrosoftEdge)
               }
               throw this.panic(e), e
            }));
            this.instance = await new n(this.container, this, this.loadedConfig), this.instance.set_volume(this.volumeSettings.get_volume()), this.rendererDebugInfo = this.instance.renderer_debug_info(), this.rendererDebugInfo.includes("Adapter Device Type: Cpu") && this.container.addEventListener("mouseover", this.openHardwareAccelerationModal.bind(this), {
               once: !0
            });
            const t = this.instance.renderer_name();
            if (console.log("%cNew Ruffle instance created (Version: " + it.versionName + " | WebAssembly extensions: " + (n.is_wasm_simd_used() ? "ON" : "OFF") + " | Used renderer: " + (null != t ? t : "") + ")", "background: #37528C; color: #FFAD33"), "running" !== this.audioState() && (this.container.style.visibility = "hidden", await new Promise((e => {
                  window.setTimeout((() => {
                     e()
                  }), 200)
               })), this.container.style.visibility = ""), this.unmuteAudioContext(), navigator.userAgent.toLowerCase().includes("android") && this.container.addEventListener("click", (() => this.virtualKeyboard.blur())), !this.loadedConfig || this.loadedConfig.autoplay === qn.On || this.loadedConfig.autoplay !== qn.Off && "running" === this.audioState()) {
               if (this.play(), "running" !== this.audioState()) {
                  this.loadedConfig && this.loadedConfig.unmuteOverlay === Hn.Hidden || (this.unmuteOverlay.style.display = "block"), this.container.addEventListener("click", this.unmuteOverlayClicked.bind(this), {
                     once: !0
                  });
                  const n = null === (e = this.instance) || void 0 === e ? void 0 : e.audio_context();
                  n && (n.onstatechange = () => {
                     "running" === n.state && this.unmuteOverlayClicked(), n.onstatechange = null
                  })
               }
            } else this.playButton.style.display = "block"
         }
         onRuffleDownloadProgress(e, n) {
            const t = this.splashScreen.querySelector(".loadbar-inner"),
               r = this.splashScreen.querySelector(".loadbar");
            Number.isNaN(n) ? r && (r.style.display = "none") : t.style.width = e / n * 100 + "%"
         }
         destroy() {
            this.instance && (this.instance.destroy(), this.instance = null, this._metadata = null, this._readyState = ft.HaveNothing, console.log("Ruffle instance destroyed."))
         }
         checkOptions(e) {
            if ("string" == typeof e) return {
               url: e
            };
            const n = (e, n) => {
               if (!e) {
                  const e = new TypeError(n);
                  throw e.ruffleIndexError = dt.JavascriptConfiguration, this.panic(e), e
               }
            };
            return n(null !== e && "object" == typeof e, "Argument 0 must be a string or object"), n("url" in e || "data" in e, "Argument 0 must contain a `url` or `data` key"), n(!("url" in e) || "string" == typeof e.url, "`url` must be a string"), e
         }
         async reload() {
            if (!this.loadedConfig) throw new Error("Cannot reload if load wasn't first called");
            await this.load(this.loadedConfig)
         }
         async load(e) {
            var n, t;
            if (e = this.checkOptions(e), this.isConnected && !this.isUnusedFallbackObject()) {
               if (!yt(this)) try {
                  this.loadedConfig = Object.assign(Object.assign(Object.assign(Object.assign({}, Xn), null !== (t = null === (n = window.RufflePlayer) || void 0 === n ? void 0 : n.config) && void 0 !== t ? t : {}), this.config), e), this.loadedConfig.backgroundColor && this.loadedConfig.wmode !== Jn.Transparent && (this.container.style.backgroundColor = this.loadedConfig.backgroundColor), await this.ensureFreshInstance(), "url" in e ? (console.log(`Loading SWF file ${e.url}`), this.swfUrl = new URL(e.url, document.baseURI), this.instance.stream_from(this.swfUrl.href, ht(e.parameters))) : "data" in e && (console.log("Loading SWF data"), this.instance.load_data(new Uint8Array(e.data), ht(e.parameters), e.swfFileName || "movie.swf"))
               } catch (e) {
                  console.error(`Serious error occurred loading SWF file: ${e}`);
                  const n = new Error(e);
                  throw n.message.includes("Error parsing config") && (n.ruffleIndexError = dt.JavascriptConfiguration), this.panic(n), n
               }
            } else console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element")
         }
         play() {
            this.instance && (this.instance.play(), this.playButton.style.display = "none")
         }
         get isPlaying() {
            return !!this.instance && this.instance.is_playing()
         }
         get volume() {
            return this.instance ? this.instance.volume() : 1
         }
         set volume(e) {
            this.instance && this.instance.set_volume(e)
         }
         get fullscreenEnabled() {
            return !(!document.fullscreenEnabled && !document.webkitFullscreenEnabled)
         }
         get isFullscreen() {
            return (document.fullscreenElement || document.webkitFullscreenElement) === this
         }
         setFullscreen(e) {
            this.fullscreenEnabled && e !== this.isFullscreen && (e ? this.enterFullscreen() : this.exitFullscreen())
         }
         enterFullscreen() {
            const e = {
               navigationUI: "hide"
            };
            this.requestFullscreen ? this.requestFullscreen(e) : this.webkitRequestFullscreen ? this.webkitRequestFullscreen(e) : this.webkitRequestFullScreen && this.webkitRequestFullScreen(e)
         }
         exitFullscreen() {
            document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
         }
         fullScreenChange() {
            var e;
            null === (e = this.instance) || void 0 === e || e.set_fullscreen(this.isFullscreen)
         }
         saveFile(e, n) {
            const t = URL.createObjectURL(e),
               r = document.createElement("a");
            r.href = t, r.style.display = "none", r.download = n, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(t)
         }
         checkIfTouch(e) {
            this.isTouch = "touch" === e.pointerType || "pen" === e.pointerType
         }
         base64ToBlob(e, n) {
            const t = atob(e),
               r = new ArrayBuffer(t.length),
               a = new Uint8Array(r);
            for (let e = 0; e < t.length; e++) a[e] = t.charCodeAt(e);
            return new Blob([r], {
               type: n
            })
         }
         isB64SOL(e) {
            try {
               return "TCSO" === atob(e).slice(6, 10)
            } catch (e) {
               return !1
            }
         }
         confirmReloadSave(e, n, t) {
            if (this.isB64SOL(n) && localStorage[e]) {
               if (!t && !confirm(Ce("save-delete-prompt"))) return;
               const r = this.swfUrl ? this.swfUrl.pathname : "",
                  a = this.swfUrl ? this.swfUrl.hostname : document.location.hostname,
                  i = e.split("/").slice(1, -1).join("/");
               if (r.includes(i) && e.startsWith(a)) return void(confirm(Ce("save-reload-prompt", {
                  action: t ? "replace" : "delete"
               })) && this.loadedConfig && (this.destroy(), t ? localStorage.setItem(e, n) : localStorage.removeItem(e), this.reload(), this.populateSaves(), this.saveManager.classList.add("hidden")));
               t ? localStorage.setItem(e, n) : localStorage.removeItem(e), this.populateSaves(), this.saveManager.classList.add("hidden")
            }
         }
         replaceSOL(e, n) {
            const t = e.target,
               r = new FileReader;
            r.addEventListener("load", (() => {
               if (r.result && "string" == typeof r.result) {
                  const e = new RegExp("data:.*;base64,"),
                     t = r.result.replace(e, "");
                  this.confirmReloadSave(n, t, !0)
               }
            })), t && t.files && t.files.length > 0 && t.files[0] && r.readAsDataURL(t.files[0])
         }
         deleteSave(e) {
            const n = localStorage.getItem(e);
            n && this.confirmReloadSave(e, n, !1)
         }
         populateSaves() {
            const e = this.saveManager.querySelector("#local-saves");
            if (e) {
               try {
                  if (null === localStorage) return
               } catch (e) {
                  return
               }
               e.textContent = "", Object.keys(localStorage).forEach((n => {
                  const t = n.split("/").pop(),
                     r = localStorage.getItem(n);
                  if (t && r && this.isB64SOL(r)) {
                     const a = document.createElement("TR"),
                        i = document.createElement("TD");
                     i.textContent = t, i.title = n;
                     const o = document.createElement("TD"),
                        s = document.createElement("SPAN");
                     s.textContent = Ce("save-download"), s.className = "save-option", s.addEventListener("click", (() => {
                        const e = this.base64ToBlob(r, "application/octet-stream");
                        this.saveFile(e, t + ".sol")
                     })), o.appendChild(s);
                     const l = document.createElement("TD"),
                        u = document.createElement("INPUT");
                     u.type = "file", u.accept = ".sol", u.className = "replace-save", u.id = "replace-save-" + n;
                     const c = document.createElement("LABEL");
                     c.htmlFor = "replace-save-" + n, c.textContent = Ce("save-replace"), c.className = "save-option", u.addEventListener("change", (e => this.replaceSOL(e, n))), l.appendChild(u), l.appendChild(c);
                     const d = document.createElement("TD"),
                        f = document.createElement("SPAN");
                     f.textContent = Ce("save-delete"), f.className = "save-option", f.addEventListener("click", (() => this.deleteSave(n))), d.appendChild(f), a.appendChild(i), a.appendChild(o), a.appendChild(l), a.appendChild(d), e.appendChild(a)
                  }
               }))
            }
         }
         async backupSaves() {
            const e = new(st()),
               n = [];
            Object.keys(localStorage).forEach((t => {
               let r = String(t.split("/").pop());
               const a = localStorage.getItem(t);
               if (a && this.isB64SOL(a)) {
                  const t = this.base64ToBlob(a, "application/octet-stream"),
                     i = n.filter((e => e === r)).length;
                  n.push(r), i > 0 && (r += ` (${i+1})`), e.file(r + ".sol", t)
               }
            }));
            const t = await e.generateAsync({
               type: "blob"
            });
            this.saveFile(t, "saves.zip")
         }
         openHardwareAccelerationModal() {
            this.hardwareAccelerationModal.classList.remove("hidden")
         }
         openSaveManager() {
            this.saveManager.classList.remove("hidden")
         }
         openVolumeControls() {
            this.volumeControls.classList.remove("hidden")
         }
         async downloadSwf() {
            try {
               if (this.swfUrl) {
                  console.log("Downloading SWF: " + this.swfUrl);
                  const e = await fetch(this.swfUrl.href);
                  if (!e.ok) return void console.error("SWF download failed");
                  const n = await e.blob();
                  this.saveFile(n, function (e) {
                     const n = e.pathname;
                     return n.substring(n.lastIndexOf("/") + 1)
                  }(this.swfUrl))
               } else console.error("SWF download failed")
            } catch (e) {
               console.error("SWF download failed")
            }
         }
         virtualKeyboardInput() {
            const e = this.virtualKeyboard,
               n = e.value;
            for (const e of n)
               for (const n of ["keydown", "keyup"]) this.dispatchEvent(new KeyboardEvent(n, {
                  key: e,
                  bubbles: !0
               }));
            e.value = ""
         }
         openVirtualKeyboard() {
            navigator.userAgent.toLowerCase().includes("android") ? setTimeout((() => {
               this.virtualKeyboard.focus({
                  preventScroll: !0
               })
            }), 100) : this.virtualKeyboard.focus({
               preventScroll: !0
            })
         }
         isVirtualKeyboardFocused() {
            return this.shadow.activeElement === this.virtualKeyboard
         }
         contextMenuItems() {
            const e = String.fromCharCode(10003),
               n = [],
               t = () => {
                  n.length > 0 && null !== n[n.length - 1] && n.push(null)
               };
            this.instance && this.isPlaying && (this.instance.prepare_context_menu().forEach(((r, a) => {
               r.separatorBefore && t(), n.push({
                  text: r.caption + (r.checked ? ` (${e})` : ""),
                  onClick: () => {
                     var e;
                     return null === (e = this.instance) || void 0 === e ? void 0 : e.run_context_menu_callback(a)
                  },
                  enabled: r.enabled
               })
            })), t()), this.fullscreenEnabled && (this.isFullscreen ? n.push({
               text: Ce("context-menu-exit-fullscreen"),
               onClick: () => {
                  var e;
                  return null === (e = this.instance) || void 0 === e ? void 0 : e.set_fullscreen(!1)
               }
            }) : n.push({
               text: Ce("context-menu-enter-fullscreen"),
               onClick: () => {
                  var e;
                  return null === (e = this.instance) || void 0 === e ? void 0 : e.set_fullscreen(!0)
               }
            })), n.push({
               text: Ce("context-menu-volume-controls"),
               onClick: () => {
                  this.openVolumeControls()
               }
            }), this.instance && this.swfUrl && this.loadedConfig && !0 === this.loadedConfig.showSwfDownload && (t(), n.push({
               text: Ce("context-menu-download-swf"),
               onClick: this.downloadSwf.bind(this)
            })), window.isSecureContext && n.push({
               text: Ce("context-menu-copy-debug-info"),
               onClick: () => navigator.clipboard.writeText(this.getPanicData())
            }), this.populateSaves();
            const r = this.saveManager.querySelector("#local-saves");
            return r && "" !== r.textContent && n.push({
               text: Ce("context-menu-open-save-manager"),
               onClick: this.openSaveManager.bind(this)
            }), t(), n.push({
               text: Ce("context-menu-about-ruffle", {
                  flavor: _ ? "extension" : "",
                  version: it.versionName
               }),
               onClick() {
                  window.open(lt, "_blank")
               }
            }), this.isTouch && (t(), n.push({
               text: Ce("context-menu-hide"),
               onClick: () => this.contextMenuForceDisabled = !0
            })), n
         }
         pointerDown(e) {
            this.pointerDownPosition = new mt(e.pageX, e.pageY), this.pointerMoveMaxDistance = 0, this.startLongPressTimer()
         }
         clearLongPressTimer() {
            this.longPressTimer && (clearTimeout(this.longPressTimer), this.longPressTimer = null)
         }
         startLongPressTimer() {
            this.clearLongPressTimer(), this.longPressTimer = setTimeout((() => this.clearLongPressTimer()), 800)
         }
         checkLongPressMovement(e) {
            if (null !== this.pointerDownPosition) {
               const n = new mt(e.pageX, e.pageY),
                  t = this.pointerDownPosition.distanceTo(n);
               t > this.pointerMoveMaxDistance && (this.pointerMoveMaxDistance = t)
            }
         }
         checkLongPress(e) {
            this.longPressTimer ? this.clearLongPressTimer() : !this.contextMenuSupported && "mouse" !== e.pointerType && this.pointerMoveMaxDistance < 15 && this.showContextMenu(e)
         }
         showContextMenu(e) {
            var n, t, r;
            const a = Array.from(this.shadow.querySelectorAll(".modal")).some((e => !e.classList.contains("hidden")));
            if (this.panicked || a) return;
            if (e.preventDefault(), "contextmenu" === e.type ? (this.contextMenuSupported = !0, window.addEventListener("click", this.hideContextMenu.bind(this), {
                  once: !0
               })) : (window.addEventListener("pointerup", this.hideContextMenu.bind(this), {
                  once: !0
               }), e.stopPropagation()), [!1, Gn.Off].includes(null !== (t = null === (n = this.loadedConfig) || void 0 === n ? void 0 : n.contextMenu) && void 0 !== t ? t : Gn.On) || this.isTouch && (null === (r = this.loadedConfig) || void 0 === r ? void 0 : r.contextMenu) === Gn.RightClickOnly || this.contextMenuForceDisabled) return;
            for (; this.contextMenuElement.firstChild;) this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);
            for (const e of this.contextMenuItems())
               if (null === e) {
                  const e = document.createElement("li");
                  e.className = "menu-separator";
                  const n = document.createElement("hr");
                  e.appendChild(n), this.contextMenuElement.appendChild(e)
               } else {
                  const {
                     text: n,
                     onClick: t,
                     enabled: r
                  } = e, a = document.createElement("li");
                  a.className = "menu-item", a.textContent = n, this.contextMenuElement.appendChild(a), !1 !== r ? a.addEventListener(this.contextMenuSupported ? "click" : "pointerup", t) : a.classList.add("disabled")
               } this.contextMenuElement.style.left = "0", this.contextMenuElement.style.top = "0", this.contextMenuOverlay.classList.remove("hidden");
            const i = this.getBoundingClientRect(),
               o = e.clientX - i.x,
               s = e.clientY - i.y,
               l = i.width - this.contextMenuElement.clientWidth - 1,
               u = i.height - this.contextMenuElement.clientHeight - 1;
            this.contextMenuElement.style.left = Math.floor(Math.min(o, l)) + "px", this.contextMenuElement.style.top = Math.floor(Math.min(s, u)) + "px"
         }
         hideContextMenu() {
            var e;
            null === (e = this.instance) || void 0 === e || e.clear_custom_menu_items(), this.contextMenuOverlay.classList.add("hidden")
         }
         pause() {
            this.instance && (this.instance.pause(), this.playButton.style.display = "block")
         }
         audioState() {
            if (this.instance) {
               const e = this.instance.audio_context();
               return e && e.state || "running"
            }
            return "suspended"
         }
         unmuteOverlayClicked() {
            if (this.instance) {
               if ("running" !== this.audioState()) {
                  const e = this.instance.audio_context();
                  e && e.resume()
               }
               this.unmuteOverlay.style.display = "none"
            }
         }
         unmuteAudioContext() {
            ct || (navigator.maxTouchPoints < 1 ? ct = !0 : this.container.addEventListener("click", (() => {
               var e;
               if (ct) return;
               const n = null === (e = this.instance) || void 0 === e ? void 0 : e.audio_context();
               if (!n) return;
               const t = new Audio;
               t.src = (() => {
                  const e = new ArrayBuffer(10),
                     t = new DataView(e),
                     r = n.sampleRate;
                  return t.setUint32(0, r, !0), t.setUint32(4, r, !0), t.setUint16(8, 1, !0), `data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(e))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`
               })(), t.load(), t.play().then((() => {
                  ct = !0
               })).catch((e => {
                  console.warn(`Failed to play dummy sound: ${e}`)
               }))
            }), {
               once: !0
            }))
         }
         copyElement(e) {
            if (e) {
               for (const n of e.attributes)
                  if (n.specified) {
                     if ("title" === n.name && "Adobe Flash Player" === n.value) continue;
                     try {
                        this.setAttribute(n.name, n.value)
                     } catch (e) {
                        console.warn(`Unable to set attribute ${n.name} on Ruffle instance`)
                     }
                  } for (const n of Array.from(e.children)) this.appendChild(n)
            }
         }
         static htmlDimensionToCssDimension(e) {
            if (e) {
               const n = e.match(ut);
               if (n) {
                  let e = n[1];
                  return n[3] || (e += "px"), e
               }
            }
            return null
         }
         onCallbackAvailable(e) {
            const n = this.instance;
            this[e] = (...t) => null == n ? void 0 : n.call_exposed_callback(e, t)
         }
         set traceObserver(e) {
            var n;
            null === (n = this.instance) || void 0 === n || n.set_trace_observer(e)
         }
         getPanicData() {
            let e = "\n# Player Info\n";
            if (e += `Allows script access: ${!!this.loadedConfig&&this.loadedConfig.allowScriptAccess}\n`, e += `${this.rendererDebugInfo}\n`, e += this.debugPlayerInfo(), e += "\n# Page Info\n", e += `Page URL: ${document.location.href}\n`, this.swfUrl && (e += `SWF URL: ${this.swfUrl}\n`), e += "\n# Browser Info\n", e += `User Agent: ${window.navigator.userAgent}\n`, e += `Platform: ${window.navigator.platform}\n`, e += `Has touch support: ${window.navigator.maxTouchPoints>0}\n`, e += "\n# Ruffle Info\n", e += `Version: ${it.versionNumber}\n`, e += `Name: ${it.versionName}\n`, e += `Channel: ${it.versionChannel}\n`, e += `Built: ${it.buildDate}\n`, e += `Commit: ${it.commitHash}\n`, e += `Is extension: ${_}\n`, e += "\n# Metadata\n", this.metadata)
               for (const [n, t] of Object.entries(this.metadata)) e += `${n}: ${t}\n`;
            return e
         }
         createErrorFooter(e) {
            const n = document.createElement("ul");
            for (const t of e) {
               const e = document.createElement("li"),
                  r = document.createElement("a");
               r.href = t.url, r.textContent = t.label, "#" === t.url ? r.id = "panic-view-details" : r.target = "_top", e.appendChild(r), n.appendChild(e)
            }
            return n
         }
         panic(e) {
            var n;
            if (this.panicked) return;
            if (this.panicked = !0, this.hideSplashScreen(), e instanceof Error && ("AbortError" === e.name || e.message.includes("AbortError"))) return;
            const t = null !== (n = null == e ? void 0 : e.ruffleIndexError) && void 0 !== n ? n : dt.Unknown,
               r = Object.assign([], {
                  stackIndex: -1,
                  avmStackIndex: -1
               });
            if (r.push("# Error Info\n"), e instanceof Error) {
               if (r.push(`Error name: ${e.name}\n`), r.push(`Error message: ${e.message}\n`), e.stack) {
                  const n = r.push(`Error stack:\n\`\`\`\n${e.stack}\n\`\`\`\n`) - 1;
                  if (e.avmStack) {
                     const n = r.push(`AVM2 stack:\n\`\`\`\n    ${e.avmStack.trim().replace(/\t/g,"    ")}\n\`\`\`\n`) - 1;
                     r.avmStackIndex = n
                  }
                  r.stackIndex = n
               }
            } else r.push(`Error: ${e}\n`);
            r.push(this.getPanicData());
            const a = r.join(""),
               i = new Date(it.buildDate),
               o = new Date;
            o.setMonth(o.getMonth() - 6);
            const s = o > i;
            let l, u, c;
            if (s) l = new pt(lt + "#downloads", Ce("update-ruffle"));
            else {
               let e;
               e = document.location.protocol.includes("extension") ? this.swfUrl.href : document.location.href, e = e.split(/[?#]/, 1)[0];
               let n = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(`Error on ${e}`)}&template=error_report.md&labels=error-report&body=`,
                  t = encodeURIComponent(a);
               r.stackIndex > -1 && String(n + t).length > 8195 && (r[r.stackIndex] = null, r.avmStackIndex > -1 && (r[r.avmStackIndex] = null), t = encodeURIComponent(r.join(""))), n += t, l = new pt(n, Ce("report-bug"))
            }
            switch (t) {
               case dt.FileProtocol:
                  u = Ee("error-file-protocol"), c = this.createErrorFooter([new pt(lt + "/demo", Ce("ruffle-demo")), new pt(lt + "#downloads", Ce("ruffle-desktop"))]);
                  break;
               case dt.JavascriptConfiguration:
                  u = Ee("error-javascript-config"), c = this.createErrorFooter([new pt("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api", Ce("ruffle-wiki")), new pt]);
                  break;
               case dt.WasmNotFound:
                  u = Ee("error-wasm-not-found"), c = this.createErrorFooter([new pt("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options", Ce("ruffle-wiki")), new pt]);
                  break;
               case dt.WasmMimeType:
                  u = Ee("error-wasm-mime-type"), c = this.createErrorFooter([new pt("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type", Ce("ruffle-wiki")), new pt]);
                  break;
               case dt.SwfFetchError:
                  u = Ee("error-swf-fetch"), c = this.createErrorFooter([new pt]);
                  break;
               case dt.SwfCors:
                  u = Ee("error-swf-cors"), c = this.createErrorFooter([new pt("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header", Ce("ruffle-wiki")), new pt]);
                  break;
               case dt.WasmCors:
                  u = Ee("error-wasm-cors"), c = this.createErrorFooter([new pt("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header", Ce("ruffle-wiki")), new pt]);
                  break;
               case dt.InvalidWasm:
                  u = Ee("error-wasm-invalid"), c = this.createErrorFooter([new pt("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror", Ce("ruffle-wiki")), new pt]);
                  break;
               case dt.WasmDownload:
                  u = Ee("error-wasm-download"), c = this.createErrorFooter([new pt]);
                  break;
               case dt.WasmDisabledMicrosoftEdge:
                  u = Ee("error-wasm-disabled-on-edge"), c = this.createErrorFooter([new pt("https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#edge-webassembly-error", Ce("more-info")), new pt]);
                  break;
               case dt.JavascriptConflict:
                  u = Ee("error-javascript-conflict"), s && u.appendChild(Ee("error-javascript-conflict-outdated", {
                     buildDate: it.buildDate
                  })), c = this.createErrorFooter([l, new pt]);
                  break;
               case dt.CSPConflict:
                  u = Ee("error-csp-conflict"), c = this.createErrorFooter([new pt("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp", Ce("ruffle-wiki")), new pt]);
                  break;
               default:
                  u = Ee("error-unknown", {
                     buildDate: it.buildDate,
                     outdated: String(s)
                  }), c = this.createErrorFooter([l, new pt])
            }
            const d = document.createElement("div");
            d.id = "panic";
            const f = document.createElement("div");
            f.id = "panic-title", f.textContent = Ce("panic-title"), d.appendChild(f);
            const h = document.createElement("div");
            h.id = "panic-body", h.appendChild(u), d.appendChild(h);
            const m = document.createElement("div");
            m.id = "panic-footer", m.appendChild(c), d.appendChild(m), this.container.textContent = "", this.container.appendChild(d);
            const p = this.container.querySelector("#panic-view-details");
            p && (p.onclick = () => {
               const e = this.container.querySelector("#panic-body");
               e.classList.add("details");
               const n = document.createElement("textarea");
               return n.readOnly = !0, n.value = a, e.replaceChildren(n), !1
            }), this.destroy()
         }
         displayRootMovieDownloadFailedMessage() {
            var e, n, t;
            const r = null === (e = this.loadedConfig) || void 0 === e ? void 0 : e.openInNewTab;
            if (r && window.location.origin !== this.swfUrl.origin) {
               const e = new URL(this.swfUrl);
               if (null === (n = this.loadedConfig) || void 0 === n ? void 0 : n.parameters) {
                  const n = ht(null === (t = this.loadedConfig) || void 0 === t ? void 0 : t.parameters);
                  Object.entries(n).forEach((([n, t]) => {
                     e.searchParams.set(n, t)
                  }))
               }
               this.hideSplashScreen();
               const a = document.createElement("div");
               a.id = "message-overlay";
               const i = document.createElement("div");
               i.className = "message", i.appendChild(Ee("message-cant-embed"));
               const o = document.createElement("div"),
                  s = document.createElement("a");
               s.innerText = Ce("open-in-new-tab"), s.onclick = () => r(e), o.appendChild(s), i.appendChild(o), a.appendChild(i), this.container.prepend(a)
            } else {
               const e = new Error("Failed to fetch: " + this.swfUrl);
               this.swfUrl.protocol.includes("http") ? window.location.origin === this.swfUrl.origin || window.location.protocol.includes("extension") ? e.ruffleIndexError = dt.SwfFetchError : e.ruffleIndexError = dt.SwfCors : e.ruffleIndexError = dt.FileProtocol, this.panic(e)
            }
         }
         displayMessage(e) {
            const n = document.createElement("div");
            n.id = "message-overlay";
            const t = document.createElement("div");
            t.className = "message";
            const r = document.createElement("p");
            r.textContent = e, t.appendChild(r);
            const a = document.createElement("div"),
               i = document.createElement("button");
            i.id = "continue-btn", i.textContent = Ce("continue"), a.appendChild(i), t.appendChild(a), n.appendChild(t), this.container.prepend(n), this.container.querySelector("#continue-btn").onclick = () => {
               n.parentNode.removeChild(n)
            }
         }
         displayUnsupportedVideo(e) {
            const n = this.videoModal.querySelector("#video-holder");
            if (n) {
               const t = document.createElement("video");
               t.addEventListener("contextmenu", (e => e.stopPropagation())), t.src = e, t.autoplay = !0, t.controls = !0, n.textContent = "", n.appendChild(t), this.videoModal.classList.remove("hidden")
            }
         }
         debugPlayerInfo() {
            return ""
         }
         hideSplashScreen() {
            this.splashScreen.classList.add("hidden"), this.container.classList.remove("hidden")
         }
         showSplashScreen() {
            this.splashScreen.classList.remove("hidden"), this.container.classList.add("hidden")
         }
         setMetadata(e) {
            this._metadata = e, this._readyState = ft.Loaded, this.hideSplashScreen(), this.dispatchEvent(new Event(vt.LOADED_METADATA)), this.dispatchEvent(new Event(vt.LOADED_DATA))
         }
      }

      function gt(e, n) {
         switch (e || (e = "sameDomain"), e.toLowerCase()) {
            case "always":
               return !0;
            case "never":
               return !1;
            default:
               try {
                  return new URL(window.location.href).origin === new URL(n, window.location.href).origin
               } catch (e) {
                  return !1
               }
         }
      }

      function bt(e) {
         return null === e || "true" === e.toLowerCase()
      }

      function wt(e) {
         if (e) {
            let n = "",
               t = "";
            try {
               const r = new URL(e, lt);
               n = r.pathname, t = r.hostname
            } catch (e) {}
            if (n.startsWith("/v/") && /^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(t)) return !0
         }
         return !1
      }

      function kt(e, n) {
         var t, r;
         const a = e.getAttribute(n),
            i = null !== (r = null === (t = window.RufflePlayer) || void 0 === t ? void 0 : t.config) && void 0 !== r ? r : {};
         if (a) try {
            const t = new URL(a);
            "http:" !== t.protocol || "https:" !== window.location.protocol || "upgradeToHttps" in i && !1 === i.upgradeToHttps || (t.protocol = "https:", e.setAttribute(n, t.toString()))
         } catch (e) {}
      }

      function yt(e) {
         let n = e.parentElement;
         for (; null !== n;) {
            switch (n.tagName) {
               case "AUDIO":
               case "VIDEO":
                  return !0
            }
            n = n.parentElement
         }
         return !1
      }
      vt.LOADED_METADATA = "loadedmetadata", vt.LOADED_DATA = "loadeddata",
         function (e) {
            e[e.HaveNothing = 0] = "HaveNothing", e[e.Loading = 1] = "Loading", e[e.Loaded = 2] = "Loaded"
         }(ft || (ft = {}));
      class xt {
         constructor(e, n) {
            this.isMuted = e, this.volume = n
         }
         get_volume() {
            return this.isMuted ? 0 : this.volume / 100
         }
      }
      class At extends vt {
         constructor() {
            super()
         }
         connectedCallback() {
            var e, n, t, r, a, i, o, s, l, u, c, d, f, h, m, p, v, g, b, w;
            super.connectedCallback();
            const k = this.attributes.getNamedItem("src");
            if (k) {
               const y = null !== (n = null === (e = this.attributes.getNamedItem("allowScriptAccess")) || void 0 === e ? void 0 : e.value) && void 0 !== n ? n : null,
                  x = null !== (r = null === (t = this.attributes.getNamedItem("menu")) || void 0 === t ? void 0 : t.value) && void 0 !== r ? r : null;
               this.load({
                  url: k.value,
                  allowScriptAccess: gt(y, k.value),
                  parameters: null !== (i = null === (a = this.attributes.getNamedItem("flashvars")) || void 0 === a ? void 0 : a.value) && void 0 !== i ? i : null,
                  backgroundColor: null !== (s = null === (o = this.attributes.getNamedItem("bgcolor")) || void 0 === o ? void 0 : o.value) && void 0 !== s ? s : null,
                  base: null !== (u = null === (l = this.attributes.getNamedItem("base")) || void 0 === l ? void 0 : l.value) && void 0 !== u ? u : null,
                  menu: bt(x),
                  salign: null !== (d = null === (c = this.attributes.getNamedItem("salign")) || void 0 === c ? void 0 : c.value) && void 0 !== d ? d : "",
                  quality: null !== (h = null === (f = this.attributes.getNamedItem("quality")) || void 0 === f ? void 0 : f.value) && void 0 !== h ? h : "high",
                  scale: null !== (p = null === (m = this.attributes.getNamedItem("scale")) || void 0 === m ? void 0 : m.value) && void 0 !== p ? p : "showAll",
                  wmode: null !== (g = null === (v = this.attributes.getNamedItem("wmode")) || void 0 === v ? void 0 : v.value) && void 0 !== g ? g : Jn.Window,
                  allowNetworking: null !== (w = null === (b = this.attributes.getNamedItem("allowNetworking")) || void 0 === b ? void 0 : b.value) && void 0 !== w ? w : Qn.All
               })
            }
         }
         get src() {
            var e;
            return null === (e = this.attributes.getNamedItem("src")) || void 0 === e ? void 0 : e.value
         }
         set src(e) {
            if (e) {
               const n = document.createAttribute("src");
               n.value = e, this.attributes.setNamedItem(n)
            } else this.attributes.removeNamedItem("src")
         }
         static get observedAttributes() {
            return ["src", "width", "height"]
         }
         attributeChangedCallback(e, n, t) {
            var r, a, i, o;
            if (super.attributeChangedCallback(e, n, t), this.isConnected && "src" === e) {
               const e = this.attributes.getNamedItem("src");
               e && this.load({
                  url: e.value,
                  parameters: null !== (a = null === (r = this.attributes.getNamedItem("flashvars")) || void 0 === r ? void 0 : r.value) && void 0 !== a ? a : null,
                  base: null !== (o = null === (i = this.attributes.getNamedItem("base")) || void 0 === i ? void 0 : i.value) && void 0 !== o ? o : null
               })
            }
         }
         static isInterdictable(e) {
            const n = e.getAttribute("src"),
               t = e.getAttribute("type");
            return !!n && !yt(e) && (wt(n) ? (kt(e, "src"), !1) : at(n, t))
         }
         static fromNativeEmbedElement(e) {
            const n = $n("ruffle-embed", At),
               t = document.createElement(n);
            return t.copyElement(e), t
         }
      }

      function _t(e, n, t) {
         n = n.toLowerCase();
         for (const [t, r] of Object.entries(e))
            if (t.toLowerCase() === n) return r;
         return t
      }

      function Rt(e) {
         var n, t;
         const r = {};
         for (const a of e.children)
            if (a instanceof HTMLParamElement) {
               const e = null === (n = a.attributes.getNamedItem("name")) || void 0 === n ? void 0 : n.value,
                  i = null === (t = a.attributes.getNamedItem("value")) || void 0 === t ? void 0 : t.value;
               e && i && (r[e] = i)
            } return r
      }
      class St extends vt {
         constructor() {
            super(), this.params = {}
         }
         connectedCallback() {
            var e;
            super.connectedCallback(), this.params = Rt(this);
            let n = null;
            this.attributes.getNamedItem("data") ? n = null === (e = this.attributes.getNamedItem("data")) || void 0 === e ? void 0 : e.value : this.params.movie && (n = this.params.movie);
            const t = _t(this.params, "allowScriptAccess", null),
               r = _t(this.params, "flashvars", this.getAttribute("flashvars")),
               a = _t(this.params, "bgcolor", this.getAttribute("bgcolor")),
               i = _t(this.params, "allowNetworking", this.getAttribute("allowNetworking")),
               o = _t(this.params, "base", this.getAttribute("base")),
               s = _t(this.params, "menu", null),
               l = _t(this.params, "salign", ""),
               u = _t(this.params, "quality", "high"),
               c = _t(this.params, "scale", "showAll"),
               d = _t(this.params, "wmode", "window");
            if (n) {
               const e = {
                  url: n
               };
               e.allowScriptAccess = gt(t, n), r && (e.parameters = r), a && (e.backgroundColor = a), o && (e.base = o), e.menu = bt(s), l && (e.salign = l), u && (e.quality = u), c && (e.scale = c), d && (e.wmode = d), i && (e.allowNetworking = i), this.load(e)
            }
         }
         debugPlayerInfo() {
            var e;
            let n = "Player type: Object\n",
               t = null;
            return this.attributes.getNamedItem("data") ? t = null === (e = this.attributes.getNamedItem("data")) || void 0 === e ? void 0 : e.value : this.params.movie && (t = this.params.movie), n += `SWF URL: ${t}\n`, Object.keys(this.params).forEach((e => {
               n += `Param ${e}: ${this.params[e]}\n`
            })), Object.keys(this.attributes).forEach((e => {
               var t;
               n += `Attribute ${e}: ${null===(t=this.attributes.getNamedItem(e))||void 0===t?void 0:t.value}\n`
            })), n
         }
         get data() {
            return this.getAttribute("data")
         }
         set data(e) {
            if (e) {
               const n = document.createAttribute("data");
               n.value = e, this.attributes.setNamedItem(n)
            } else this.attributes.removeNamedItem("data")
         }
         static isInterdictable(e) {
            var n, t, r, a;
            if (yt(e)) return !1;
            if (e.getElementsByTagName("ruffle-object").length > 0 || e.getElementsByTagName("ruffle-embed").length > 0) return !1;
            const i = null === (n = e.attributes.getNamedItem("data")) || void 0 === n ? void 0 : n.value.toLowerCase(),
               o = null !== (r = null === (t = e.attributes.getNamedItem("type")) || void 0 === t ? void 0 : t.value) && void 0 !== r ? r : null,
               s = Rt(e);
            let l;
            if (i) {
               if (wt(i)) return kt(e, "data"), !1;
               l = i
            } else {
               if (!s || !s.movie) return !1;
               if (wt(s.movie)) {
                  const n = e.querySelector("param[name='movie']");
                  if (n) {
                     kt(n, "value");
                     const t = n.getAttribute("value");
                     t && e.setAttribute("data", t)
                  }
                  return !1
               }
               l = s.movie
            }
            const u = null === (a = e.attributes.getNamedItem("classid")) || void 0 === a ? void 0 : a.value.toLowerCase();
            return u === "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000".toLowerCase() ? !Array.from(e.getElementsByTagName("object")).some(St.isInterdictable) && !Array.from(e.getElementsByTagName("embed")).some(At.isInterdictable) : !u && at(l, o)
         }
         static fromNativeObjectElement(e) {
            const n = $n("ruffle-object", St),
               t = document.createElement(n);
            for (const n of Array.from(e.getElementsByTagName("embed"))) At.isInterdictable(n) && n.remove();
            for (const n of Array.from(e.getElementsByTagName("object"))) St.isInterdictable(n) && n.remove();
            return t.copyElement(e), t
         }
      }
      class zt {
         constructor(e) {
            if (this.__mimeTypes = [], this.__namedMimeTypes = {}, e)
               for (let n = 0; n < e.length; n++) this.install(e[n])
         }
         install(e) {
            const n = this.__mimeTypes.length;
            this.__mimeTypes.push(e), this.__namedMimeTypes[e.type] = e, this[e.type] = e, this[n] = e
         }
         item(e) {
            return this.__mimeTypes[e >>> 0]
         }
         namedItem(e) {
            return this.__namedMimeTypes[e]
         }
         get length() {
            return this.__mimeTypes.length
         } [Symbol.iterator]() {
            return this.__mimeTypes[Symbol.iterator]()
         }
      }
      class Ct {
         constructor(e) {
            this.__plugins = [], this.__namedPlugins = {};
            for (let n = 0; n < e.length; n++) this.install(e[n])
         }
         install(e) {
            const n = this.__plugins.length;
            this.__plugins.push(e), this.__namedPlugins[e.name] = e, this[e.name] = e, this[n] = e
         }
         item(e) {
            return this.__plugins[e >>> 0]
         }
         namedItem(e) {
            return this.__namedPlugins[e]
         }
         refresh() {} [Symbol.iterator]() {
            return this.__plugins[Symbol.iterator]()
         }
         get length() {
            return this.__plugins.length
         }
      }
      const Et = new class extends zt {
         constructor(e, n, t) {
            super(), this.name = e, this.description = n, this.filename = t
         }
      }("Shockwave Flash", "Shockwave Flash 32.0 r0", "ruffle.js");
      var It, jt;
      Et.install({
         type: nt,
         description: "Shockwave Flash",
         suffixes: "spl",
         enabledPlugin: Et
      }), Et.install({
         type: et,
         description: "Shockwave Flash",
         suffixes: "swf",
         enabledPlugin: Et
      }), Et.install({
         type: tt,
         description: "Shockwave Flash",
         suffixes: "swf",
         enabledPlugin: Et
      }), Et.install({
         type: rt,
         description: "Shockwave Flash",
         suffixes: "swf",
         enabledPlugin: Et
      });
      const Bt = null !== (jt = null === (It = window.RufflePlayer) || void 0 === It ? void 0 : It.config) && void 0 !== jt ? jt : {},
         Ot = R(Bt) + "ruffle.js";
      let Ft, Dt, Pt, Tt;

      function Lt() {
         var e, n;
         return (!("favorFlash" in Bt) || !1 !== Bt.favorFlash) && "ruffle.js" !== (null !== (n = null === (e = navigator.plugins.namedItem("Shockwave Flash")) || void 0 === e ? void 0 : e.filename) && void 0 !== n ? n : "ruffle.js")
      }

      function Mt() {
         try {
            Ft = null != Ft ? Ft : document.getElementsByTagName("object"), Dt = null != Dt ? Dt : document.getElementsByTagName("embed");
            for (const e of Array.from(Ft))
               if (St.isInterdictable(e)) {
                  const n = St.fromNativeObjectElement(e);
                  e.replaceWith(n)
               } for (const e of Array.from(Dt))
               if (At.isInterdictable(e)) {
                  const n = At.fromNativeEmbedElement(e);
                  e.replaceWith(n)
               }
         } catch (e) {
            console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)
         }
      }

      function Wt() {
         Pt = null != Pt ? Pt : document.getElementsByTagName("iframe"), Tt = null != Tt ? Tt : document.getElementsByTagName("frame"), [Pt, Tt].forEach((e => {
            for (const n of e) {
               if (void 0 !== n.dataset.rufflePolyfilled) continue;
               n.dataset.rufflePolyfilled = "";
               const e = n.contentWindow,
                  t = `Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;
               try {
                  "complete" === e.document.readyState && Nt(e, t)
               } catch (e) {
                  _ || console.warn(t + e)
               }
               n.addEventListener("load", (() => {
                  Nt(e, t)
               }), !1)
            }
         }))
      }
      async function Nt(e, n) {
         var t;
         let r;
         await new Promise((e => {
            window.setTimeout((() => {
               e()
            }), 100)
         }));
         try {
            if (r = e.document, !r) return
         } catch (e) {
            return void(_ || console.warn(n + e))
         }
         if (_ || void 0 === r.documentElement.dataset.ruffleOptout)
            if (_) e.RufflePlayer || (e.RufflePlayer = {}), e.RufflePlayer.config = Object.assign(Object.assign({}, Bt), null !== (t = e.RufflePlayer.config) && void 0 !== t ? t : {});
            else if (!e.RufflePlayer) {
            const n = r.createElement("script");
            n.setAttribute("src", Ot), n.onload = () => {
               e.RufflePlayer = {}, e.RufflePlayer.config = Bt
            }, r.head.appendChild(n)
         }
      }
      const Ut = {
         version: it.versionNumber + "+" + it.buildDate.substring(0, 10),
         polyfill() {
            Lt() || (Mt(), Wt(), new MutationObserver((function (e) {
               e.some((e => Array.from(e.addedNodes).some((e => ["EMBED", "OBJECT"].includes(e.nodeName) || e instanceof Element && null !== e.querySelector("embed, object"))))) && (Mt(), Wt())
            })).observe(document, {
               childList: !0,
               subtree: !0
            }))
         },
         pluginPolyfill() {
            Lt() || function (e) {
               "install" in navigator.plugins && navigator.plugins.install || Object.defineProperty(navigator, "plugins", {
                  value: new Ct(navigator.plugins),
                  writable: !1
               }), navigator.plugins.install(e), !(e.length > 0) || "install" in navigator.mimeTypes && navigator.mimeTypes.install || Object.defineProperty(navigator, "mimeTypes", {
                  value: new zt(navigator.mimeTypes),
                  writable: !1
               });
               const n = navigator.mimeTypes;
               for (let t = 0; t < e.length; t += 1) n.install(e[t])
            }(Et)
         },
         createPlayer() {
            const e = $n("ruffle-player", vt);
            return document.createElement(e)
         }
      };
      class $t {
         constructor(e) {
            var n;
            this.sources = (null == e ? void 0 : e.sources) || {}, this.config = (null == e ? void 0 : e.config) || {}, this.invoked = (null == e ? void 0 : e.invoked) || !1, this.newestName = (null == e ? void 0 : e.newestName) || null, null === (n = null == e ? void 0 : e.superseded) || void 0 === n || n.call(e), "loading" === document.readyState ? document.addEventListener("readystatechange", this.init.bind(this)) : window.setTimeout(this.init.bind(this), 0)
         }
         get version() {
            return "0.1.0"
         }
         registerSource(e) {
            this.sources[e] = Ut
         }
         newestSourceName() {
            let e = null,
               n = p.fromSemver("0.0.0");
            for (const t in this.sources)
               if (Object.prototype.hasOwnProperty.call(this.sources, t)) {
                  const r = p.fromSemver(this.sources[t].version);
                  r.hasPrecedenceOver(n) && (e = t, n = r)
               } return e
         }
         init() {
            if (!this.invoked) {
               if (this.invoked = !0, this.newestName = this.newestSourceName(), null === this.newestName) throw new Error("No registered Ruffle source!");
               !1 !== (!("polyfills" in this.config) || this.config.polyfills) && this.sources[this.newestName].polyfill()
            }
         }
         newest() {
            const e = this.newestSourceName();
            return null !== e ? this.sources[e] : null
         }
         satisfying(e) {
            const n = v.fromRequirementString(e);
            let t = null;
            for (const e in this.sources)
               if (Object.prototype.hasOwnProperty.call(this.sources, e)) {
                  const r = p.fromSemver(this.sources[e].version);
                  n.satisfiedBy(r) && (t = this.sources[e])
               } return t
         }
         localCompatible() {
            return void 0 !== this.sources.local ? this.satisfying("^" + this.sources.local.version) : this.newest()
         }
         local() {
            return void 0 !== this.sources.local ? this.satisfying("=" + this.sources.local.version) : this.newest()
         }
         superseded() {
            this.invoked = !0
         }
         static negotiate(e, n) {
            let t;
            return t = e instanceof $t ? e : new $t(e), void 0 !== n && (t.registerSource(n), !1 !== (!("polyfills" in t.config) || t.config.polyfills) && Ut.pluginPolyfill()), t
         }
      }
      window.RufflePlayer = $t.negotiate(window.RufflePlayer, "local");
      const qt = window.RufflePlayer.newest();
      let Zt;
      const Ht = document.getElementById("main"),
         Vt = document.getElementById("overlay"),
         Jt = document.getElementById("author-container"),
         Kt = document.getElementById("author"),
         Gt = document.getElementById("sample-swfs-container"),
         Yt = document.getElementById("local-file"),
         Qt = document.getElementById("sample-swfs"),
         Xt = document.getElementById("local-file-name"),
         er = document.getElementById("close-modal"),
         nr = document.getElementById("open-modal"),
         tr = document.getElementById("reload-swf"),
         rr = document.getElementById("metadata-modal"),
         ar = {
            Animation: document.getElementById("anim-optgroup"),
            Game: document.getElementById("games-optgroup")
         },
         ir = {
            letterbox: "on",
            logLevel: "warn",
            forceScale: !0,
            forceAlign: !0
         },
         or = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9.0",
            10: "10.0/10.1",
            11: "10.2",
            12: "10.3",
            13: "11.0",
            14: "11.1",
            15: "11.2",
            16: "11.3",
            17: "11.4",
            18: "11.5",
            19: "11.6",
            20: "11.7",
            21: "11.8",
            22: "11.9",
            23: "12",
            24: "13",
            25: "14",
            26: "15",
            27: "16",
            28: "17",
            29: "18",
            30: "19",
            31: "20",
            32: "21",
            33: "22",
            34: "23",
            35: "24",
            36: "25",
            37: "26",
            38: "27",
            39: "28",
            40: "29",
            41: "30",
            42: "31",
            43: "32"
         };

      function sr() {
         Zt && (Zt.remove(), document.querySelectorAll("span.metadata").forEach((e => {
            e.textContent = "Loading"
         })), document.getElementById("backgroundColor").value = "#FFFFFF")
      }

      function lr(e) {
         sr(), Zt = qt.createPlayer(), Zt.id = "player", Ht.append(Zt), Zt.load(e), Zt.addEventListener("loadedmetadata", (function () {
            if (this.metadata)
               for (const [e, n] of Object.entries(this.metadata)) {
                  const t = document.getElementById(e);
                  if (t) switch (e) {
                     case "backgroundColor":
                        t.value = n ?? "#FFFFFF";
                        break;
                     case "uncompressedLength":
                        t.textContent = (n >> 10) + "Kb";
                        break;
                     case "swfVersion":
                        document.getElementById("flashVersion").textContent = or[n];
                     default:
                        t.textContent = n
                  }
               }
         }))
      }

      function ur() {
         Qt.selectedIndex = -1, Jt.classList.add("hidden"), Kt.textContent = "", Kt.href = ""
      }
      async function cr(e) {
         e && (e.name && (Xt.textContent = e.name), ur(), lr({
            data: await new Response(e).arrayBuffer(),
            swfFileName: e.name,
            ...ir
         }))
      }

      function dr() {
         const e = Qt[Qt.selectedIndex].swfData;
         if (Xt.textContent = "No file selected.", e) {
            ! function (e) {
               Jt.classList.remove("hidden"), Kt.textContent = e.author, Kt.href = e.authorLink, Yt.value = null
            }(e);
            const n = e.config || ir;
            lr({
               url: e.location,
               ...n
            })
         } else ur(), sr()
      }
      Yt.addEventListener("change", (e => {
         cr(e.target.files[0])
      })), Qt.addEventListener("change", (() => dr())), Ht.addEventListener("dragenter", (e => {
         e.stopPropagation(), e.preventDefault()
      })), Ht.addEventListener("dragleave", (e => {
         e.stopPropagation(), e.preventDefault(), Vt.classList.remove("drag")
      })), Ht.addEventListener("dragover", (e => {
         e.stopPropagation(), e.preventDefault(), Vt.classList.add("drag")
      })), Ht.addEventListener("drop", (e => {
         e.stopPropagation(), e.preventDefault(), Vt.classList.remove("drag"), Yt.files = e.dataTransfer.files, cr(e.dataTransfer.files[0])
      })), Yt.addEventListener("dragleave", (e => {
         e.stopPropagation(), e.preventDefault(), Vt.classList.remove("drag")
      })), Yt.addEventListener("dragover", (e => {
         e.stopPropagation(), e.preventDefault(), Vt.classList.add("drag")
      })), Yt.addEventListener("drop", (e => {
         e.stopPropagation(), e.preventDefault(), Vt.classList.remove("drag"), Yt.files = e.dataTransfer.files, cr(e.dataTransfer.files[0])
      })), er.addEventListener("click", (() => {
         rr.style.display = "none"
      })), nr.addEventListener("click", (() => {
         rr.style.display = "block"
      })), tr.addEventListener("click", (() => {
         Zt && confirm("Reload the current SWF?") && Zt.reload()
      })), window.addEventListener("load", (() => {
         (navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) && Yt.removeAttribute("accept"), Vt.classList.remove("hidden")
      })), window.onclick = e => {
         e.target === rr && (rr.style.display = "none")
      }, (async () => {
         const e = await fetch("swfs.json");
         if (e.ok) {
            const n = await e.json();
            for (const e of n.swfs) {
               const n = document.createElement("option");
               n.textContent = e.title, n.value = e.location, n.swfData = e, e.type ? ar[e.type].append(n) : Qt.insertBefore(n, Qt.firstChild)
            }
            Gt.classList.remove("hidden")
         }
         Qt.selectedIndex = 0;
         const n = new URL(window.location).searchParams.get("file");
         if (n) {
            const e = Array.from(Qt.options);
            Qt.selectedIndex = Math.max(e.findIndex((e => e.value.endsWith(n))), 0)
         }
         dr()
      })()
   })()
})();
//# sourceMappingURL=index.js.map