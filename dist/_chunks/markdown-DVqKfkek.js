"use strict";
const _commonjsHelpers = require("./_commonjsHelpers-DHfMLFPC.js");
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var markdown$2 = { exports: {} };
(function(module2, exports2) {
  (function(n) {
    function e() {
      var i = n();
      return i.default || i;
    }
    module2.exports = e();
  })(function() {
    var cl = Object.create;
    var kr = Object.defineProperty;
    var ll = Object.getOwnPropertyDescriptor;
    var fl = Object.getOwnPropertyNames;
    var Dl = Object.getPrototypeOf, pl = Object.prototype.hasOwnProperty;
    var Un = (e) => {
      throw TypeError(e);
    };
    var C = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), Mn = (e, r) => {
      for (var t in r) kr(e, t, { get: r[t], enumerable: true });
    }, zn = (e, r, t, n) => {
      if (r && typeof r == "object" || typeof r == "function") for (let a of fl(r)) !pl.call(e, a) && a !== t && kr(e, a, { get: () => r[a], enumerable: !(n = ll(r, a)) || n.enumerable });
      return e;
    };
    var Ue = (e, r, t) => (t = e != null ? cl(Dl(e)) : {}, zn(kr(t, "default", { value: e, enumerable: true }), e)), hl = (e) => zn(kr({}, "__esModule", { value: true }), e);
    var Yn = (e, r, t) => r.has(e) || Un("Cannot " + t);
    var ce = (e, r, t) => (Yn(e, r, "read from private field"), r.get(e)), Gn = (e, r, t) => r.has(e) ? Un("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), Vn = (e, r, t, n) => (Yn(e, r, "write to private field"), r.set(e, t), t);
    var Br = C((Gm, jn) => {
      jn.exports = Fl;
      function Fl(e) {
        return String(e).replace(/\s+/g, " ");
      }
    });
    var Gi = C((yv, Yi) => {
      Yi.exports = xf;
      var Dr = 9, zr = 10, je = 32, Cf = 33, bf = 58, $e = 91, yf = 92, qt = 93, pr = 94, Yr = 96, Gr = 4, Af = 1024;
      function xf(e) {
        var r = this.Parser, t = this.Compiler;
        wf(r) && Bf(r, e), kf(t) && Tf(t);
      }
      function wf(e) {
        return !!(e && e.prototype && e.prototype.blockTokenizers);
      }
      function kf(e) {
        return !!(e && e.prototype && e.prototype.visitors);
      }
      function Bf(e, r) {
        for (var t = r || {}, n = e.prototype, a = n.blockTokenizers, u = n.inlineTokenizers, i = n.blockMethods, o = n.inlineMethods, s = a.definition, l = u.reference, c = [], f = -1, p = i.length, d; ++f < p; ) d = i[f], !(d === "newline" || d === "indentedCode" || d === "paragraph" || d === "footnoteDefinition") && c.push([d]);
        c.push(["footnoteDefinition"]), t.inlineNotes && (_t(o, "reference", "inlineNote"), u.inlineNote = m), _t(i, "definition", "footnoteDefinition"), _t(o, "reference", "footnoteCall"), a.definition = y, a.footnoteDefinition = D, u.footnoteCall = h, u.reference = F, n.interruptFootnoteDefinition = c, F.locator = l.locator, h.locator = E, m.locator = B;
        function D(b, g, A) {
          for (var x = this, v = x.interruptFootnoteDefinition, w = x.offset, k = g.length + 1, T = 0, q = [], R, O, S, _, L, Be, j, I, ee, Z, ve, Ee, M; T < k && (_ = g.charCodeAt(T), !(_ !== Dr && _ !== je)); ) T++;
          if (g.charCodeAt(T++) === $e && g.charCodeAt(T++) === pr) {
            for (O = T; T < k; ) {
              if (_ = g.charCodeAt(T), _ !== _ || _ === zr || _ === Dr || _ === je) return;
              if (_ === qt) {
                S = T, T++;
                break;
              }
              T++;
            }
            if (!(S === void 0 || O === S || g.charCodeAt(T++) !== bf)) {
              if (A) return true;
              for (R = g.slice(O, S), L = b.now(), ee = 0, Z = 0, ve = T, Ee = []; T < k; ) {
                if (_ = g.charCodeAt(T), _ !== _ || _ === zr) M = { start: ee, contentStart: ve || T, contentEnd: T, end: T }, Ee.push(M), _ === zr && (ee = T + 1, Z = 0, ve = void 0, M.end = ee);
                else if (Z !== void 0) if (_ === je || _ === Dr) Z += _ === je ? 1 : Gr - Z % Gr, Z > Gr && (Z = void 0, ve = T);
                else {
                  if (Z < Gr && M && (M.contentStart === M.contentEnd || qf(v, a, x, [b, g.slice(T, Af), true]))) break;
                  Z = void 0, ve = T;
                }
                T++;
              }
              for (T = -1, k = Ee.length; k > 0 && (M = Ee[k - 1], M.contentStart === M.contentEnd); ) k--;
              for (Be = b(g.slice(0, M.contentEnd)); ++T < k; ) M = Ee[T], w[L.line + T] = (w[L.line + T] || 0) + (M.contentStart - M.start), q.push(g.slice(M.contentStart, M.end));
              return j = x.enterBlock(), I = x.tokenizeBlock(q.join(""), L), j(), Be({ type: "footnoteDefinition", identifier: R.toLowerCase(), label: R, children: I });
            }
          }
        }
        function h(b, g, A) {
          var x = g.length + 1, v = 0, w, k, T, q;
          if (g.charCodeAt(v++) === $e && g.charCodeAt(v++) === pr) {
            for (k = v; v < x; ) {
              if (q = g.charCodeAt(v), q !== q || q === zr || q === Dr || q === je) return;
              if (q === qt) {
                T = v, v++;
                break;
              }
              v++;
            }
            if (!(T === void 0 || k === T)) return A ? true : (w = g.slice(k, T), b(g.slice(0, v))({ type: "footnoteReference", identifier: w.toLowerCase(), label: w }));
          }
        }
        function m(b, g, A) {
          var x = this, v = g.length + 1, w = 0, k = 0, T, q, R, O, S, _, L;
          if (g.charCodeAt(w++) === pr && g.charCodeAt(w++) === $e) {
            for (R = w; w < v; ) {
              if (q = g.charCodeAt(w), q !== q) return;
              if (_ === void 0) if (q === yf) w += 2;
              else if (q === $e) k++, w++;
              else if (q === qt) if (k === 0) {
                O = w, w++;
                break;
              } else k--, w++;
              else if (q === Yr) {
                for (S = w, _ = 1; g.charCodeAt(S + _) === Yr; ) _++;
                w += _;
              } else w++;
              else if (q === Yr) {
                for (S = w, L = 1; g.charCodeAt(S + L) === Yr; ) L++;
                w += L, _ === L && (_ = void 0), L = void 0;
              } else w++;
            }
            if (O !== void 0) return A ? true : (T = b.now(), T.column += 2, T.offset += 2, b(g.slice(0, w))({ type: "footnote", children: x.tokenizeInline(g.slice(R, O), T) }));
          }
        }
        function F(b, g, A) {
          var x = 0;
          if (g.charCodeAt(x) === Cf && x++, g.charCodeAt(x) === $e && g.charCodeAt(x + 1) !== pr) return l.call(this, b, g, A);
        }
        function y(b, g, A) {
          for (var x = 0, v = g.charCodeAt(x); v === je || v === Dr; ) v = g.charCodeAt(++x);
          if (v === $e && g.charCodeAt(x + 1) !== pr) return s.call(this, b, g, A);
        }
        function E(b, g) {
          return b.indexOf("[", g);
        }
        function B(b, g) {
          return b.indexOf("^[", g);
        }
      }
      function Tf(e) {
        var r = e.prototype.visitors, t = "    ";
        r.footnote = n, r.footnoteReference = a, r.footnoteDefinition = u;
        function n(i) {
          return "^[" + this.all(i).join("") + "]";
        }
        function a(i) {
          return "[^" + (i.label || i.identifier) + "]";
        }
        function u(i) {
          for (var o = this.all(i).join(`

`).split(`
`), s = 0, l = o.length, c; ++s < l; ) c = o[s], c !== "" && (o[s] = t + c);
          return "[^" + (i.label || i.identifier) + "]: " + o.join(`
`);
        }
      }
      function _t(e, r, t) {
        e.splice(e.indexOf(r), 0, t);
      }
      function qf(e, r, t, n) {
        for (var a = e.length, u = -1; ++u < a; ) if (r[e[u][0]].apply(t, n)) return true;
        return false;
      }
    });
    var Ot = C((St) => {
      St.isRemarkParser = _f;
      St.isRemarkCompiler = Sf;
      function _f(e) {
        return !!(e && e.prototype && e.prototype.blockTokenizers);
      }
      function Sf(e) {
        return !!(e && e.prototype && e.prototype.visitors);
      }
    });
    var Ji = C((xv, Ki) => {
      var Vi = Ot();
      Ki.exports = If;
      var ji = 9, $i = 32, Vr = 36, Of = 48, Lf = 57, Wi = 92, Pf = ["math", "math-inline"], Hi = "math-display";
      function If(e) {
        let r = this.Parser, t = this.Compiler;
        Vi.isRemarkParser(r) && Nf(r, e), Vi.isRemarkCompiler(t) && Rf(t);
      }
      function Nf(e, r) {
        let t = e.prototype, n = t.inlineMethods;
        u.locator = a, t.inlineTokenizers.math = u, n.splice(n.indexOf("text"), 0, "math");
        function a(i, o) {
          return i.indexOf("$", o);
        }
        function u(i, o, s) {
          let l = o.length, c = false, f = false, p = 0, d, D, h, m, F, y, E;
          if (o.charCodeAt(p) === Wi && (f = true, p++), o.charCodeAt(p) === Vr) {
            if (p++, f) return s ? true : i(o.slice(0, p))({ type: "text", value: "$" });
            if (o.charCodeAt(p) === Vr && (c = true, p++), h = o.charCodeAt(p), !(h === $i || h === ji)) {
              for (m = p; p < l; ) {
                if (D = h, h = o.charCodeAt(p + 1), D === Vr) {
                  if (d = o.charCodeAt(p - 1), d !== $i && d !== ji && (h !== h || h < Of || h > Lf) && (!c || h === Vr)) {
                    F = p - 1, p++, c && p++, y = p;
                    break;
                  }
                } else D === Wi && (p++, h = o.charCodeAt(p + 1));
                p++;
              }
              if (y !== void 0) return s ? true : (E = o.slice(m, F + 1), i(o.slice(0, y))({ type: "inlineMath", value: E, data: { hName: "span", hProperties: { className: Pf.concat(c && r.inlineMathDouble ? [Hi] : []) }, hChildren: [{ type: "text", value: E }] } }));
            }
          }
        }
      }
      function Rf(e) {
        let r = e.prototype;
        r.visitors.inlineMath = t;
        function t(n) {
          let a = "$";
          return (n.data && n.data.hProperties && n.data.hProperties.className || []).includes(Hi) && (a = "$$"), a + n.value + a;
        }
      }
    });
    var ru = C((wv, eu) => {
      var Xi = Ot();
      eu.exports = Yf;
      var Qi = 10, hr = 32, Lt = 36, Zi = `
`, Uf = "$", Mf = 2, zf = ["math", "math-display"];
      function Yf() {
        let e = this.Parser, r = this.Compiler;
        Xi.isRemarkParser(e) && Gf(e), Xi.isRemarkCompiler(r) && Vf(r);
      }
      function Gf(e) {
        let r = e.prototype, t = r.blockMethods, n = r.interruptParagraph, a = r.interruptList, u = r.interruptBlockquote;
        r.blockTokenizers.math = i, t.splice(t.indexOf("fencedCode") + 1, 0, "math"), n.splice(n.indexOf("fencedCode") + 1, 0, ["math"]), a.splice(a.indexOf("fencedCode") + 1, 0, ["math"]), u.splice(u.indexOf("fencedCode") + 1, 0, ["math"]);
        function i(o, s, l) {
          var c = s.length, f = 0;
          let p, d, D, h, m, F, y, E, B, b, g;
          for (; f < c && s.charCodeAt(f) === hr; ) f++;
          for (m = f; f < c && s.charCodeAt(f) === Lt; ) f++;
          if (F = f - m, !(F < Mf)) {
            for (; f < c && s.charCodeAt(f) === hr; ) f++;
            for (y = f; f < c; ) {
              if (p = s.charCodeAt(f), p === Lt) return;
              if (p === Qi) break;
              f++;
            }
            if (s.charCodeAt(f) === Qi) {
              if (l) return true;
              for (d = [], y !== f && d.push(s.slice(y, f)), f++, D = s.indexOf(Zi, f + 1), D = D === -1 ? c : D; f < c; ) {
                for (E = false, b = f, g = D, h = D, B = 0; h > b && s.charCodeAt(h - 1) === hr; ) h--;
                for (; h > b && s.charCodeAt(h - 1) === Lt; ) B++, h--;
                for (F <= B && s.indexOf(Uf, b) === h && (E = true, g = h); b <= g && b - f < m && s.charCodeAt(b) === hr; ) b++;
                if (E) for (; g > b && s.charCodeAt(g - 1) === hr; ) g--;
                if ((!E || b !== g) && d.push(s.slice(b, g)), E) break;
                f = D + 1, D = s.indexOf(Zi, f + 1), D = D === -1 ? c : D;
              }
              return d = d.join(`
`), o(s.slice(0, D))({ type: "math", value: d, data: { hName: "div", hProperties: { className: zf.concat() }, hChildren: [{ type: "text", value: d }] } });
            }
          }
        }
      }
      function Vf(e) {
        let r = e.prototype;
        r.visitors.math = t;
        function t(n) {
          return `$$
` + n.value + `
$$`;
        }
      }
    });
    var nu = C((kv, tu) => {
      var jf = Ji(), $f = ru();
      tu.exports = Wf;
      function Wf(e) {
        var r = e || {};
        $f.call(this, r), jf.call(this, r);
      }
    });
    var Ie = C((Bv, iu) => {
      iu.exports = Kf;
      var Hf = Object.prototype.hasOwnProperty;
      function Kf() {
        for (var e = {}, r = 0; r < arguments.length; r++) {
          var t = arguments[r];
          for (var n in t) Hf.call(t, n) && (e[n] = t[n]);
        }
        return e;
      }
    });
    var uu = C((Tv, Pt) => {
      typeof Object.create == "function" ? Pt.exports = function(r, t) {
        t && (r.super_ = t, r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: false, writable: true, configurable: true } }));
      } : Pt.exports = function(r, t) {
        if (t) {
          r.super_ = t;
          var n = function() {
          };
          n.prototype = t.prototype, r.prototype = new n(), r.prototype.constructor = r;
        }
      };
    });
    var su = C((qv, ou) => {
      var Jf = Ie(), au = uu();
      ou.exports = Xf;
      function Xf(e) {
        var r, t, n;
        au(u, e), au(a, u), r = u.prototype;
        for (t in r) n = r[t], n && typeof n == "object" && (r[t] = "concat" in n ? n.concat() : Jf(n));
        return u;
        function a(i) {
          return e.apply(this, i);
        }
        function u() {
          return this instanceof u ? e.apply(this, arguments) : new a(arguments);
        }
      }
    });
    var lu = C((_v, cu) => {
      cu.exports = Qf;
      function Qf(e, r, t) {
        return n;
        function n() {
          var a = t || this, u = a[e];
          return a[e] = !r, i;
          function i() {
            a[e] = u;
          }
        }
      }
    });
    var Du = C((Sv, fu) => {
      fu.exports = Zf;
      function Zf(e) {
        for (var r = String(e), t = [], n = /\r?\n|\r/g; n.exec(r); ) t.push(n.lastIndex);
        return t.push(r.length + 1), { toPoint: a, toPosition: a, toOffset: u };
        function a(i) {
          var o = -1;
          if (i > -1 && i < t[t.length - 1]) {
            for (; ++o < t.length; ) if (t[o] > i) return { line: o + 1, column: i - (t[o - 1] || 0) + 1, offset: i };
          }
          return {};
        }
        function u(i) {
          var o = i && i.line, s = i && i.column, l;
          return !isNaN(o) && !isNaN(s) && o - 1 in t && (l = (t[o - 2] || 0) + s - 1 || 0), l > -1 && l < t[t.length - 1] ? l : -1;
        }
      }
    });
    var hu = C((Ov, pu) => {
      pu.exports = eD;
      var It = "\\";
      function eD(e, r) {
        return t;
        function t(n) {
          for (var a = 0, u = n.indexOf(It), i = e[r], o = [], s; u !== -1; ) o.push(n.slice(a, u)), a = u + 1, s = n.charAt(a), (!s || i.indexOf(s) === -1) && o.push(It), u = n.indexOf(It, a + 1);
          return o.push(n.slice(a)), o.join("");
        }
      }
    });
    var du = C((Lv, rD) => {
      rD.exports = { AElig: "Æ", AMP: "&", Aacute: "Á", Acirc: "Â", Agrave: "À", Aring: "Å", Atilde: "Ã", Auml: "Ä", COPY: "©", Ccedil: "Ç", ETH: "Ð", Eacute: "É", Ecirc: "Ê", Egrave: "È", Euml: "Ë", GT: ">", Iacute: "Í", Icirc: "Î", Igrave: "Ì", Iuml: "Ï", LT: "<", Ntilde: "Ñ", Oacute: "Ó", Ocirc: "Ô", Ograve: "Ò", Oslash: "Ø", Otilde: "Õ", Ouml: "Ö", QUOT: '"', REG: "®", THORN: "Þ", Uacute: "Ú", Ucirc: "Û", Ugrave: "Ù", Uuml: "Ü", Yacute: "Ý", aacute: "á", acirc: "â", acute: "´", aelig: "æ", agrave: "à", amp: "&", aring: "å", atilde: "ã", auml: "ä", brvbar: "¦", ccedil: "ç", cedil: "¸", cent: "¢", copy: "©", curren: "¤", deg: "°", divide: "÷", eacute: "é", ecirc: "ê", egrave: "è", eth: "ð", euml: "ë", frac12: "½", frac14: "¼", frac34: "¾", gt: ">", iacute: "í", icirc: "î", iexcl: "¡", igrave: "ì", iquest: "¿", iuml: "ï", laquo: "«", lt: "<", macr: "¯", micro: "µ", middot: "·", nbsp: " ", not: "¬", ntilde: "ñ", oacute: "ó", ocirc: "ô", ograve: "ò", ordf: "ª", ordm: "º", oslash: "ø", otilde: "õ", ouml: "ö", para: "¶", plusmn: "±", pound: "£", quot: '"', raquo: "»", reg: "®", sect: "§", shy: "­", sup1: "¹", sup2: "²", sup3: "³", szlig: "ß", thorn: "þ", times: "×", uacute: "ú", ucirc: "û", ugrave: "ù", uml: "¨", uuml: "ü", yacute: "ý", yen: "¥", yuml: "ÿ" };
    });
    var mu = C((Pv, tD) => {
      tD.exports = { "0": "�", "128": "€", "130": "‚", "131": "ƒ", "132": "„", "133": "…", "134": "†", "135": "‡", "136": "ˆ", "137": "‰", "138": "Š", "139": "‹", "140": "Œ", "142": "Ž", "145": "‘", "146": "’", "147": "“", "148": "”", "149": "•", "150": "–", "151": "—", "152": "˜", "153": "™", "154": "š", "155": "›", "156": "œ", "158": "ž", "159": "Ÿ" };
    });
    var Ne = C((Iv, Fu) => {
      Fu.exports = nD;
      function nD(e) {
        var r = typeof e == "string" ? e.charCodeAt(0) : e;
        return r >= 48 && r <= 57;
      }
    });
    var vu = C((Nv, gu) => {
      gu.exports = iD;
      function iD(e) {
        var r = typeof e == "string" ? e.charCodeAt(0) : e;
        return r >= 97 && r <= 102 || r >= 65 && r <= 70 || r >= 48 && r <= 57;
      }
    });
    var We = C((Rv, Eu) => {
      Eu.exports = uD;
      function uD(e) {
        var r = typeof e == "string" ? e.charCodeAt(0) : e;
        return r >= 97 && r <= 122 || r >= 65 && r <= 90;
      }
    });
    var bu = C((Uv, Cu) => {
      var aD = We(), oD = Ne();
      Cu.exports = sD;
      function sD(e) {
        return aD(e) || oD(e);
      }
    });
    var yu = C((Mv, cD) => {
      cD.exports = { AEli: "Æ", AElig: "Æ", AM: "&", AMP: "&", Aacut: "Á", Aacute: "Á", Abreve: "Ă", Acir: "Â", Acirc: "Â", Acy: "А", Afr: "𝔄", Agrav: "À", Agrave: "À", Alpha: "Α", Amacr: "Ā", And: "⩓", Aogon: "Ą", Aopf: "𝔸", ApplyFunction: "⁡", Arin: "Å", Aring: "Å", Ascr: "𝒜", Assign: "≔", Atild: "Ã", Atilde: "Ã", Aum: "Ä", Auml: "Ä", Backslash: "∖", Barv: "⫧", Barwed: "⌆", Bcy: "Б", Because: "∵", Bernoullis: "ℬ", Beta: "Β", Bfr: "𝔅", Bopf: "𝔹", Breve: "˘", Bscr: "ℬ", Bumpeq: "≎", CHcy: "Ч", COP: "©", COPY: "©", Cacute: "Ć", Cap: "⋒", CapitalDifferentialD: "ⅅ", Cayleys: "ℭ", Ccaron: "Č", Ccedi: "Ç", Ccedil: "Ç", Ccirc: "Ĉ", Cconint: "∰", Cdot: "Ċ", Cedilla: "¸", CenterDot: "·", Cfr: "ℭ", Chi: "Χ", CircleDot: "⊙", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", Colon: "∷", Colone: "⩴", Congruent: "≡", Conint: "∯", ContourIntegral: "∮", Copf: "ℂ", Coproduct: "∐", CounterClockwiseContourIntegral: "∳", Cross: "⨯", Cscr: "𝒞", Cup: "⋓", CupCap: "≍", DD: "ⅅ", DDotrahd: "⤑", DJcy: "Ђ", DScy: "Ѕ", DZcy: "Џ", Dagger: "‡", Darr: "↡", Dashv: "⫤", Dcaron: "Ď", Dcy: "Д", Del: "∇", Delta: "Δ", Dfr: "𝔇", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", Diamond: "⋄", DifferentialD: "ⅆ", Dopf: "𝔻", Dot: "¨", DotDot: "⃜", DotEqual: "≐", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", Downarrow: "⇓", Dscr: "𝒟", Dstrok: "Đ", ENG: "Ŋ", ET: "Ð", ETH: "Ð", Eacut: "É", Eacute: "É", Ecaron: "Ě", Ecir: "Ê", Ecirc: "Ê", Ecy: "Э", Edot: "Ė", Efr: "𝔈", Egrav: "È", Egrave: "È", Element: "∈", Emacr: "Ē", EmptySmallSquare: "◻", EmptyVerySmallSquare: "▫", Eogon: "Ę", Eopf: "𝔼", Epsilon: "Ε", Equal: "⩵", EqualTilde: "≂", Equilibrium: "⇌", Escr: "ℰ", Esim: "⩳", Eta: "Η", Eum: "Ë", Euml: "Ë", Exists: "∃", ExponentialE: "ⅇ", Fcy: "Ф", Ffr: "𝔉", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", Fopf: "𝔽", ForAll: "∀", Fouriertrf: "ℱ", Fscr: "ℱ", GJcy: "Ѓ", G: ">", GT: ">", Gamma: "Γ", Gammad: "Ϝ", Gbreve: "Ğ", Gcedil: "Ģ", Gcirc: "Ĝ", Gcy: "Г", Gdot: "Ġ", Gfr: "𝔊", Gg: "⋙", Gopf: "𝔾", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", Gt: "≫", HARDcy: "Ъ", Hacek: "ˇ", Hat: "^", Hcirc: "Ĥ", Hfr: "ℌ", HilbertSpace: "ℋ", Hopf: "ℍ", HorizontalLine: "─", Hscr: "ℋ", Hstrok: "Ħ", HumpDownHump: "≎", HumpEqual: "≏", IEcy: "Е", IJlig: "Ĳ", IOcy: "Ё", Iacut: "Í", Iacute: "Í", Icir: "Î", Icirc: "Î", Icy: "И", Idot: "İ", Ifr: "ℑ", Igrav: "Ì", Igrave: "Ì", Im: "ℑ", Imacr: "Ī", ImaginaryI: "ⅈ", Implies: "⇒", Int: "∬", Integral: "∫", Intersection: "⋂", InvisibleComma: "⁣", InvisibleTimes: "⁢", Iogon: "Į", Iopf: "𝕀", Iota: "Ι", Iscr: "ℐ", Itilde: "Ĩ", Iukcy: "І", Ium: "Ï", Iuml: "Ï", Jcirc: "Ĵ", Jcy: "Й", Jfr: "𝔍", Jopf: "𝕁", Jscr: "𝒥", Jsercy: "Ј", Jukcy: "Є", KHcy: "Х", KJcy: "Ќ", Kappa: "Κ", Kcedil: "Ķ", Kcy: "К", Kfr: "𝔎", Kopf: "𝕂", Kscr: "𝒦", LJcy: "Љ", L: "<", LT: "<", Lacute: "Ĺ", Lambda: "Λ", Lang: "⟪", Laplacetrf: "ℒ", Larr: "↞", Lcaron: "Ľ", Lcedil: "Ļ", Lcy: "Л", LeftAngleBracket: "⟨", LeftArrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", LeftRightArrow: "↔", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", Leftarrow: "⇐", Leftrightarrow: "⇔", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", LessLess: "⪡", LessSlantEqual: "⩽", LessTilde: "≲", Lfr: "𝔏", Ll: "⋘", Lleftarrow: "⇚", Lmidot: "Ŀ", LongLeftArrow: "⟵", LongLeftRightArrow: "⟷", LongRightArrow: "⟶", Longleftarrow: "⟸", Longleftrightarrow: "⟺", Longrightarrow: "⟹", Lopf: "𝕃", LowerLeftArrow: "↙", LowerRightArrow: "↘", Lscr: "ℒ", Lsh: "↰", Lstrok: "Ł", Lt: "≪", Map: "⤅", Mcy: "М", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", MinusPlus: "∓", Mopf: "𝕄", Mscr: "ℳ", Mu: "Μ", NJcy: "Њ", Nacute: "Ń", Ncaron: "Ň", Ncedil: "Ņ", Ncy: "Н", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, Nfr: "𝔑", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", Not: "⫬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", Nscr: "𝒩", Ntild: "Ñ", Ntilde: "Ñ", Nu: "Ν", OElig: "Œ", Oacut: "Ó", Oacute: "Ó", Ocir: "Ô", Ocirc: "Ô", Ocy: "О", Odblac: "Ő", Ofr: "𝔒", Ograv: "Ò", Ograve: "Ò", Omacr: "Ō", Omega: "Ω", Omicron: "Ο", Oopf: "𝕆", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", Or: "⩔", Oscr: "𝒪", Oslas: "Ø", Oslash: "Ø", Otild: "Õ", Otilde: "Õ", Otimes: "⨷", Oum: "Ö", Ouml: "Ö", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", PartialD: "∂", Pcy: "П", Pfr: "𝔓", Phi: "Φ", Pi: "Π", PlusMinus: "±", Poincareplane: "ℌ", Popf: "ℙ", Pr: "⪻", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", Prime: "″", Product: "∏", Proportion: "∷", Proportional: "∝", Pscr: "𝒫", Psi: "Ψ", QUO: '"', QUOT: '"', Qfr: "𝔔", Qopf: "ℚ", Qscr: "𝒬", RBarr: "⤐", RE: "®", REG: "®", Racute: "Ŕ", Rang: "⟫", Rarr: "↠", Rarrtl: "⤖", Rcaron: "Ř", Rcedil: "Ŗ", Rcy: "Р", Re: "ℜ", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", Rfr: "ℜ", Rho: "Ρ", RightAngleBracket: "⟩", RightArrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", Rightarrow: "⇒", Ropf: "ℝ", RoundImplies: "⥰", Rrightarrow: "⇛", Rscr: "ℛ", Rsh: "↱", RuleDelayed: "⧴", SHCHcy: "Щ", SHcy: "Ш", SOFTcy: "Ь", Sacute: "Ś", Sc: "⪼", Scaron: "Š", Scedil: "Ş", Scirc: "Ŝ", Scy: "С", Sfr: "𝔖", ShortDownArrow: "↓", ShortLeftArrow: "←", ShortRightArrow: "→", ShortUpArrow: "↑", Sigma: "Σ", SmallCircle: "∘", Sopf: "𝕊", Sqrt: "√", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", Sscr: "𝒮", Star: "⋆", Sub: "⋐", Subset: "⋐", SubsetEqual: "⊆", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", SuchThat: "∋", Sum: "∑", Sup: "⋑", Superset: "⊃", SupersetEqual: "⊇", Supset: "⋑", THOR: "Þ", THORN: "Þ", TRADE: "™", TSHcy: "Ћ", TScy: "Ц", Tab: "	", Tau: "Τ", Tcaron: "Ť", Tcedil: "Ţ", Tcy: "Т", Tfr: "𝔗", Therefore: "∴", Theta: "Θ", ThickSpace: "  ", ThinSpace: " ", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", Topf: "𝕋", TripleDot: "⃛", Tscr: "𝒯", Tstrok: "Ŧ", Uacut: "Ú", Uacute: "Ú", Uarr: "↟", Uarrocir: "⥉", Ubrcy: "Ў", Ubreve: "Ŭ", Ucir: "Û", Ucirc: "Û", Ucy: "У", Udblac: "Ű", Ufr: "𝔘", Ugrav: "Ù", Ugrave: "Ù", Umacr: "Ū", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", Uopf: "𝕌", UpArrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", UpEquilibrium: "⥮", UpTee: "⊥", UpTeeArrow: "↥", Uparrow: "⇑", Updownarrow: "⇕", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", Upsilon: "Υ", Uring: "Ů", Uscr: "𝒰", Utilde: "Ũ", Uum: "Ü", Uuml: "Ü", VDash: "⊫", Vbar: "⫫", Vcy: "В", Vdash: "⊩", Vdashl: "⫦", Vee: "⋁", Verbar: "‖", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", Vopf: "𝕍", Vscr: "𝒱", Vvdash: "⊪", Wcirc: "Ŵ", Wedge: "⋀", Wfr: "𝔚", Wopf: "𝕎", Wscr: "𝒲", Xfr: "𝔛", Xi: "Ξ", Xopf: "𝕏", Xscr: "𝒳", YAcy: "Я", YIcy: "Ї", YUcy: "Ю", Yacut: "Ý", Yacute: "Ý", Ycirc: "Ŷ", Ycy: "Ы", Yfr: "𝔜", Yopf: "𝕐", Yscr: "𝒴", Yuml: "Ÿ", ZHcy: "Ж", Zacute: "Ź", Zcaron: "Ž", Zcy: "З", Zdot: "Ż", ZeroWidthSpace: "​", Zeta: "Ζ", Zfr: "ℨ", Zopf: "ℤ", Zscr: "𝒵", aacut: "á", aacute: "á", abreve: "ă", ac: "∾", acE: "∾̳", acd: "∿", acir: "â", acirc: "â", acut: "´", acute: "´", acy: "а", aeli: "æ", aelig: "æ", af: "⁡", afr: "𝔞", agrav: "à", agrave: "à", alefsym: "ℵ", aleph: "ℵ", alpha: "α", amacr: "ā", amalg: "⨿", am: "&", amp: "&", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", aogon: "ą", aopf: "𝕒", ap: "≈", apE: "⩰", apacir: "⩯", ape: "≊", apid: "≋", apos: "'", approx: "≈", approxeq: "≊", arin: "å", aring: "å", ascr: "𝒶", ast: "*", asymp: "≈", asympeq: "≍", atild: "ã", atilde: "ã", aum: "ä", auml: "ä", awconint: "∳", awint: "⨑", bNot: "⫭", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", barvee: "⊽", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", beta: "β", beth: "ℶ", between: "≬", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bnot: "⌐", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxDL: "╗", boxDR: "╔", boxDl: "╖", boxDr: "╓", boxH: "═", boxHD: "╦", boxHU: "╩", boxHd: "╤", boxHu: "╧", boxUL: "╝", boxUR: "╚", boxUl: "╜", boxUr: "╙", boxV: "║", boxVH: "╬", boxVL: "╣", boxVR: "╠", boxVh: "╫", boxVl: "╢", boxVr: "╟", boxbox: "⧉", boxdL: "╕", boxdR: "╒", boxdl: "┐", boxdr: "┌", boxh: "─", boxhD: "╥", boxhU: "╨", boxhd: "┬", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxuL: "╛", boxuR: "╘", boxul: "┘", boxur: "└", boxv: "│", boxvH: "╪", boxvL: "╡", boxvR: "╞", boxvh: "┼", boxvl: "┤", boxvr: "├", bprime: "‵", breve: "˘", brvba: "¦", brvbar: "¦", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", bumpeq: "≏", cacute: "ć", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", caps: "∩︀", caret: "⁁", caron: "ˇ", ccaps: "⩍", ccaron: "č", ccedi: "ç", ccedil: "ç", ccirc: "ĉ", ccups: "⩌", ccupssm: "⩐", cdot: "ċ", cedi: "¸", cedil: "¸", cemptyv: "⦲", cen: "¢", cent: "¢", centerdot: "·", cfr: "𝔠", chcy: "ч", check: "✓", checkmark: "✓", chi: "χ", cir: "○", cirE: "⧃", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledR: "®", circledS: "Ⓢ", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", clubs: "♣", clubsuit: "♣", colon: ":", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", conint: "∮", copf: "𝕔", coprod: "∐", cop: "©", copy: "©", copysr: "℗", crarr: "↵", cross: "✗", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cup: "∪", cupbrcap: "⩈", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curre: "¤", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dArr: "⇓", dHar: "⥥", dagger: "†", daleth: "ℸ", darr: "↓", dash: "‐", dashv: "⊣", dbkarow: "⤏", dblac: "˝", dcaron: "ď", dcy: "д", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", ddotseq: "⩷", de: "°", deg: "°", delta: "δ", demptyv: "⦱", dfisht: "⥿", dfr: "𝔡", dharl: "⇃", dharr: "⇂", diam: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", digamma: "ϝ", disin: "⋲", div: "÷", divid: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", dopf: "𝕕", dot: "˙", doteq: "≐", doteqdot: "≑", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", downarrow: "↓", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", dscr: "𝒹", dscy: "ѕ", dsol: "⧶", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", dzcy: "џ", dzigrarr: "⟿", eDDot: "⩷", eDot: "≑", eacut: "é", eacute: "é", easter: "⩮", ecaron: "ě", ecir: "ê", ecirc: "ê", ecolon: "≕", ecy: "э", edot: "ė", ee: "ⅇ", efDot: "≒", efr: "𝔢", eg: "⪚", egrav: "è", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", emacr: "ē", empty: "∅", emptyset: "∅", emptyv: "∅", emsp13: " ", emsp14: " ", emsp: " ", eng: "ŋ", ensp: " ", eogon: "ę", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", equals: "=", equest: "≟", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erDot: "≓", erarr: "⥱", escr: "ℯ", esdot: "≐", esim: "≂", eta: "η", et: "ð", eth: "ð", eum: "ë", euml: "ë", euro: "€", excl: "!", exist: "∃", expectation: "ℰ", exponentiale: "ⅇ", fallingdotseq: "≒", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", ffr: "𝔣", filig: "ﬁ", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", fopf: "𝕗", forall: "∀", fork: "⋔", forkv: "⫙", fpartint: "⨍", frac1: "¼", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac3: "¾", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", gE: "≧", gEl: "⪌", gacute: "ǵ", gamma: "γ", gammad: "ϝ", gap: "⪆", gbreve: "ğ", gcirc: "ĝ", gcy: "г", gdot: "ġ", ge: "≥", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", gfr: "𝔤", gg: "≫", ggg: "⋙", gimel: "ℷ", gjcy: "ѓ", gl: "≷", glE: "⪒", gla: "⪥", glj: "⪤", gnE: "≩", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", gopf: "𝕘", grave: "`", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", g: ">", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", hArr: "⇔", hairsp: " ", half: "½", hamilt: "ℋ", hardcy: "ъ", harr: "↔", harrcir: "⥈", harrw: "↭", hbar: "ℏ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", horbar: "―", hscr: "𝒽", hslash: "ℏ", hstrok: "ħ", hybull: "⁃", hyphen: "‐", iacut: "í", iacute: "í", ic: "⁣", icir: "î", icirc: "î", icy: "и", iecy: "е", iexc: "¡", iexcl: "¡", iff: "⇔", ifr: "𝔦", igrav: "ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", ijlig: "ĳ", imacr: "ī", image: "ℑ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", int: "∫", intcal: "⊺", integers: "ℤ", intercal: "⊺", intlarhk: "⨗", intprod: "⨼", iocy: "ё", iogon: "į", iopf: "𝕚", iota: "ι", iprod: "⨼", iques: "¿", iquest: "¿", iscr: "𝒾", isin: "∈", isinE: "⋹", isindot: "⋵", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", itilde: "ĩ", iukcy: "і", ium: "ï", iuml: "ï", jcirc: "ĵ", jcy: "й", jfr: "𝔧", jmath: "ȷ", jopf: "𝕛", jscr: "𝒿", jsercy: "ј", jukcy: "є", kappa: "κ", kappav: "ϰ", kcedil: "ķ", kcy: "к", kfr: "𝔨", kgreen: "ĸ", khcy: "х", kjcy: "ќ", kopf: "𝕜", kscr: "𝓀", lAarr: "⇚", lArr: "⇐", lAtail: "⤛", lBarr: "⤎", lE: "≦", lEg: "⪋", lHar: "⥢", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", lambda: "λ", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", laqu: "«", laquo: "«", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", latail: "⤙", late: "⪭", lates: "⪭︀", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", lcaron: "ľ", lcedil: "ļ", lceil: "⌈", lcub: "{", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", leftarrow: "←", leftarrowtail: "↢", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", leftthreetimes: "⋋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", lessgtr: "≶", lesssim: "≲", lfisht: "⥼", lfloor: "⌊", lfr: "𝔩", lg: "≶", lgE: "⪑", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", ljcy: "љ", ll: "≪", llarr: "⇇", llcorner: "⌞", llhard: "⥫", lltri: "◺", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnE: "≨", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", longleftrightarrow: "⟷", longmapsto: "⟼", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", lstrok: "ł", l: "<", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltrPar: "⦖", ltri: "◃", ltrie: "⊴", ltrif: "◂", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", mDDot: "∺", mac: "¯", macr: "¯", male: "♂", malt: "✠", maltese: "✠", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", mcy: "м", mdash: "—", measuredangle: "∡", mfr: "𝔪", mho: "℧", micr: "µ", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middo: "·", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", mopf: "𝕞", mp: "∓", mscr: "𝓂", mstpos: "∾", mu: "μ", multimap: "⊸", mumap: "⊸", nGg: "⋙̸", nGt: "≫⃒", nGtv: "≫̸", nLeftarrow: "⇍", nLeftrightarrow: "⇎", nLl: "⋘̸", nLt: "≪⃒", nLtv: "≪̸", nRightarrow: "⇏", nVDash: "⊯", nVdash: "⊮", nabla: "∇", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbs: " ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", ncaron: "ň", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", ncy: "н", ndash: "–", ne: "≠", neArr: "⇗", nearhk: "⤤", nearr: "↗", nearrow: "↗", nedot: "≐̸", nequiv: "≢", nesear: "⤨", nesim: "≂̸", nexist: "∄", nexists: "∄", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", ngsim: "≵", ngt: "≯", ngtr: "≯", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", njcy: "њ", nlArr: "⇍", nlE: "≦̸", nlarr: "↚", nldr: "‥", nle: "≰", nleftarrow: "↚", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nlsim: "≴", nlt: "≮", nltri: "⋪", nltrie: "⋬", nmid: "∤", nopf: "𝕟", no: "¬", not: "¬", notin: "∉", notinE: "⋹̸", notindot: "⋵̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", ntild: "ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", nu: "ν", num: "#", numero: "№", numsp: " ", nvDash: "⊭", nvHarr: "⤄", nvap: "≍⃒", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwArr: "⇖", nwarhk: "⤣", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", oS: "Ⓢ", oacut: "ó", oacute: "ó", oast: "⊛", ocir: "ô", ocirc: "ô", ocy: "о", odash: "⊝", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", oelig: "œ", ofcir: "⦿", ofr: "𝔬", ogon: "˛", ograv: "ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", omacr: "ō", omega: "ω", omicron: "ο", omid: "⦶", ominus: "⊖", oopf: "𝕠", opar: "⦷", operp: "⦹", oplus: "⊕", or: "∨", orarr: "↻", ord: "º", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oscr: "ℴ", oslas: "ø", oslash: "ø", osol: "⊘", otild: "õ", otilde: "õ", otimes: "⊗", otimesas: "⨶", oum: "ö", ouml: "ö", ovbar: "⌽", par: "¶", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", pfr: "𝔭", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", plusm: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", pointint: "⨕", popf: "𝕡", poun: "£", pound: "£", pr: "≺", prE: "⪳", prap: "⪷", prcue: "≼", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", prime: "′", primes: "ℙ", prnE: "⪵", prnap: "⪹", prnsim: "⋨", prod: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", propto: "∝", prsim: "≾", prurel: "⊰", pscr: "𝓅", psi: "ψ", puncsp: " ", qfr: "𝔮", qint: "⨌", qopf: "𝕢", qprime: "⁗", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quo: '"', quot: '"', rAarr: "⇛", rArr: "⇒", rAtail: "⤜", rBarr: "⤏", rHar: "⥤", race: "∽̱", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raqu: "»", raquo: "»", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", rarrtl: "↣", rarrw: "↝", ratail: "⤚", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", rcaron: "ř", rcedil: "ŗ", rceil: "⌉", rcub: "}", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", re: "®", reg: "®", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", rhard: "⇁", rharu: "⇀", rharul: "⥬", rho: "ρ", rhov: "ϱ", rightarrow: "→", rightarrowtail: "↣", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", rightthreetimes: "⋌", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", rsaquo: "›", rscr: "𝓇", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", ruluhar: "⥨", rx: "℞", sacute: "ś", sbquo: "‚", sc: "≻", scE: "⪴", scap: "⪸", scaron: "š", sccue: "≽", sce: "⪰", scedil: "ş", scirc: "ŝ", scnE: "⪶", scnap: "⪺", scnsim: "⋩", scpolint: "⨓", scsim: "≿", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", seArr: "⇘", searhk: "⤥", searr: "↘", searrow: "↘", sec: "§", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", sfr: "𝔰", sfrown: "⌢", sharp: "♯", shchcy: "щ", shcy: "ш", shortmid: "∣", shortparallel: "∥", sh: "­", shy: "­", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", square: "□", squarf: "▪", squf: "▪", srarr: "→", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", subE: "⫅", subdot: "⪽", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", sum: "∑", sung: "♪", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supE: "⫆", supdot: "⪾", supdsub: "⫘", supe: "⊇", supedot: "⫄", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swArr: "⇙", swarhk: "⤦", swarr: "↙", swarrow: "↙", swnwar: "⤪", szli: "ß", szlig: "ß", target: "⌖", tau: "τ", tbrk: "⎴", tcaron: "ť", tcedil: "ţ", tcy: "т", tdot: "⃛", telrec: "⌕", tfr: "𝔱", there4: "∴", therefore: "∴", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", thinsp: " ", thkap: "≈", thksim: "∼", thor: "þ", thorn: "þ", tilde: "˜", time: "×", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", tscr: "𝓉", tscy: "ц", tshcy: "ћ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", uArr: "⇑", uHar: "⥣", uacut: "ú", uacute: "ú", uarr: "↑", ubrcy: "ў", ubreve: "ŭ", ucir: "û", ucirc: "û", ucy: "у", udarr: "⇅", udblac: "ű", udhar: "⥮", ufisht: "⥾", ufr: "𝔲", ugrav: "ù", ugrave: "ù", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", umacr: "ū", um: "¨", uml: "¨", uogon: "ų", uopf: "𝕦", uparrow: "↑", updownarrow: "↕", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", upsi: "υ", upsih: "ϒ", upsilon: "υ", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", uring: "ů", urtri: "◹", uscr: "𝓊", utdot: "⋰", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", uum: "ü", uuml: "ü", uwangle: "⦧", vArr: "⇕", vBar: "⫨", vBarv: "⫩", vDash: "⊨", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vcy: "в", vdash: "⊢", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", verbar: "|", vert: "|", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", vopf: "𝕧", vprop: "∝", vrtri: "⊳", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", vzigzag: "⦚", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", wedgeq: "≙", weierp: "℘", wfr: "𝔴", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", yacut: "ý", yacute: "ý", yacy: "я", ycirc: "ŷ", ycy: "ы", ye: "¥", yen: "¥", yfr: "𝔶", yicy: "ї", yopf: "𝕪", yscr: "𝓎", yucy: "ю", yum: "ÿ", yuml: "ÿ", zacute: "ź", zcaron: "ž", zcy: "з", zdot: "ż", zeetrf: "ℨ", zeta: "ζ", zfr: "𝔷", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
    });
    var wu = C((zv, xu) => {
      var Au = yu();
      xu.exports = fD;
      var lD = {}.hasOwnProperty;
      function fD(e) {
        return lD.call(Au, e) ? Au[e] : false;
      }
    });
    var dr = C((Yv, Uu) => {
      var ku = du(), Bu = mu(), DD = Ne(), pD = vu(), Su = bu(), hD = wu();
      Uu.exports = kD;
      var dD = {}.hasOwnProperty, He = String.fromCharCode, mD = Function.prototype, Tu = { warning: null, reference: null, text: null, warningContext: null, referenceContext: null, textContext: null, position: {}, additional: null, attribute: false, nonTerminated: true }, FD = 9, qu = 10, gD = 12, vD = 32, _u = 38, ED = 59, CD = 60, bD = 61, yD = 35, AD = 88, xD = 120, wD = 65533, Ke = "named", Rt = "hexadecimal", Ut = "decimal", Mt = {};
      Mt[Rt] = 16;
      Mt[Ut] = 10;
      var jr = {};
      jr[Ke] = Su;
      jr[Ut] = DD;
      jr[Rt] = pD;
      var Ou = 1, Lu = 2, Pu = 3, Iu = 4, Nu = 5, Nt = 6, Ru = 7, xe = {};
      xe[Ou] = "Named character references must be terminated by a semicolon";
      xe[Lu] = "Numeric character references must be terminated by a semicolon";
      xe[Pu] = "Named character references cannot be empty";
      xe[Iu] = "Numeric character references cannot be empty";
      xe[Nu] = "Named character references must be known";
      xe[Nt] = "Numeric character references cannot be disallowed";
      xe[Ru] = "Numeric character references cannot be outside the permissible Unicode range";
      function kD(e, r) {
        var t = {}, n, a;
        r || (r = {});
        for (a in Tu) n = r[a], t[a] = n ?? Tu[a];
        return (t.position.indent || t.position.start) && (t.indent = t.position.indent || [], t.position = t.position.start), BD(e, t);
      }
      function BD(e, r) {
        var t = r.additional, n = r.nonTerminated, a = r.text, u = r.reference, i = r.warning, o = r.textContext, s = r.referenceContext, l = r.warningContext, c = r.position, f = r.indent || [], p = e.length, d = 0, D = -1, h = c.column || 1, m = c.line || 1, F = "", y = [], E, B, b, g, A, x, v, w, k, T, q, R, O, S, _, L, Be, j, I;
        for (typeof t == "string" && (t = t.charCodeAt(0)), L = ee(), w = i ? Z : mD, d--, p++; ++d < p; ) if (A === qu && (h = f[D] || 1), A = e.charCodeAt(d), A === _u) {
          if (v = e.charCodeAt(d + 1), v === FD || v === qu || v === gD || v === vD || v === _u || v === CD || v !== v || t && v === t) {
            F += He(A), h++;
            continue;
          }
          for (O = d + 1, R = O, I = O, v === yD ? (I = ++R, v = e.charCodeAt(I), v === AD || v === xD ? (S = Rt, I = ++R) : S = Ut) : S = Ke, E = "", q = "", g = "", _ = jr[S], I--; ++I < p && (v = e.charCodeAt(I), !!_(v)); ) g += He(v), S === Ke && dD.call(ku, g) && (E = g, q = ku[g]);
          b = e.charCodeAt(I) === ED, b && (I++, B = S === Ke ? hD(g) : false, B && (E = g, q = B)), j = 1 + I - O, !b && !n || (g ? S === Ke ? (b && !q ? w(Nu, 1) : (E !== g && (I = R + E.length, j = 1 + I - R, b = false), b || (k = E ? Ou : Pu, r.attribute ? (v = e.charCodeAt(I), v === bD ? (w(k, j), q = null) : Su(v) ? q = null : w(k, j)) : w(k, j))), x = q) : (b || w(Lu, j), x = parseInt(g, Mt[S]), TD(x) ? (w(Ru, j), x = He(wD)) : x in Bu ? (w(Nt, j), x = Bu[x]) : (T = "", qD(x) && w(Nt, j), x > 65535 && (x -= 65536, T += He(x >>> 10 | 55296), x = 56320 | x & 1023), x = T + He(x))) : S !== Ke && w(Iu, j)), x ? (ve(), L = ee(), d = I - 1, h += I - O + 1, y.push(x), Be = ee(), Be.offset++, u && u.call(s, x, { start: L, end: Be }, e.slice(O - 1, I)), L = Be) : (g = e.slice(O - 1, I), F += g, h += g.length, d = I - 1);
        } else A === 10 && (m++, D++, h = 0), A === A ? (F += He(A), h++) : ve();
        return y.join("");
        function ee() {
          return { line: m, column: h, offset: d + (c.offset || 0) };
        }
        function Z(Ee, M) {
          var pt = ee();
          pt.column += M, pt.offset += M, i.call(l, xe[Ee], pt, Ee);
        }
        function ve() {
          F && (y.push(F), a && a.call(o, F, { start: L, end: ee() }), F = "");
        }
      }
      function TD(e) {
        return e >= 55296 && e <= 57343 || e > 1114111;
      }
      function qD(e) {
        return e >= 1 && e <= 8 || e === 11 || e >= 13 && e <= 31 || e >= 127 && e <= 159 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534;
      }
    });
    var Yu = C((Gv, zu) => {
      var _D = Ie(), Mu = dr();
      zu.exports = SD;
      function SD(e) {
        return t.raw = n, t;
        function r(u) {
          for (var i = e.offset, o = u.line, s = []; ++o && o in i; ) s.push((i[o] || 0) + 1);
          return { start: u, indent: s };
        }
        function t(u, i, o) {
          Mu(u, { position: r(i), warning: a, text: o, reference: o, textContext: e, referenceContext: e });
        }
        function n(u, i, o) {
          return Mu(u, _D(o, { position: r(i), warning: a }));
        }
        function a(u, i, o) {
          o !== 3 && e.file.message(u, i);
        }
      }
    });
    var ju = C((Vv, Vu) => {
      Vu.exports = OD;
      function OD(e) {
        return r;
        function r(t, n) {
          var a = this, u = a.offset, i = [], o = a[e + "Methods"], s = a[e + "Tokenizers"], l = n.line, c = n.column, f, p, d, D, h, m;
          if (!t) return i;
          for (x.now = E, x.file = a.file, F(""); t; ) {
            for (f = -1, p = o.length, h = false; ++f < p && (D = o[f], d = s[D], !(d && (!d.onlyAtStart || a.atStart) && (!d.notInList || !a.inList) && (!d.notInBlock || !a.inBlock) && (!d.notInLink || !a.inLink) && (m = t.length, d.apply(a, [x, t]), h = m !== t.length, h))); ) ;
            h || a.file.fail(new Error("Infinite loop"), x.now());
          }
          return a.eof = E(), i;
          function F(v) {
            for (var w = -1, k = v.indexOf(`
`); k !== -1; ) l++, w = k, k = v.indexOf(`
`, k + 1);
            w === -1 ? c += v.length : c = v.length - w, l in u && (w !== -1 ? c += u[l] : c <= u[l] && (c = u[l] + 1));
          }
          function y() {
            var v = [], w = l + 1;
            return function() {
              for (var k = l + 1; w < k; ) v.push((u[w] || 0) + 1), w++;
              return v;
            };
          }
          function E() {
            var v = { line: l, column: c };
            return v.offset = a.toOffset(v), v;
          }
          function B(v) {
            this.start = v, this.end = E();
          }
          function b(v) {
            t.slice(0, v.length) !== v && a.file.fail(new Error("Incorrectly eaten value: please report this warning on https://git.io/vg5Ft"), E());
          }
          function g() {
            var v = E();
            return w;
            function w(k, T) {
              var q = k.position, R = q ? q.start : v, O = [], S = q && q.end.line, _ = v.line;
              if (k.position = new B(R), q && T && q.indent) {
                if (O = q.indent, S < _) {
                  for (; ++S < _; ) O.push((u[S] || 0) + 1);
                  O.push(v.column);
                }
                T = O.concat(T);
              }
              return k.position.indent = T || [], k;
            }
          }
          function A(v, w) {
            var k = w ? w.children : i, T = k[k.length - 1], q;
            return T && v.type === T.type && (v.type === "text" || v.type === "blockquote") && Gu(T) && Gu(v) && (q = v.type === "text" ? LD : PD, v = q.call(a, T, v)), v !== T && k.push(v), a.atStart && i.length !== 0 && a.exitStart(), v;
          }
          function x(v) {
            var w = y(), k = g(), T = E();
            return b(v), q.reset = R, R.test = O, q.test = O, t = t.slice(v.length), F(v), w = w(), q;
            function q(S, _) {
              return k(A(k(S), _), w);
            }
            function R() {
              var S = q.apply(null, arguments);
              return l = T.line, c = T.column, t = v + t, S;
            }
            function O() {
              var S = k({});
              return l = T.line, c = T.column, t = v + t, S.position;
            }
          }
        }
      }
      function Gu(e) {
        var r, t;
        return e.type !== "text" || !e.position ? true : (r = e.position.start, t = e.position.end, r.line !== t.line || t.column - r.column === e.value.length);
      }
      function LD(e, r) {
        return e.value += r.value, e;
      }
      function PD(e, r) {
        return this.options.commonmark || this.options.gfm ? r : (e.children = e.children.concat(r.children), e);
      }
    });
    var Hu = C((jv, Wu) => {
      Wu.exports = $r;
      var zt = ["\\", "`", "*", "{", "}", "[", "]", "(", ")", "#", "+", "-", ".", "!", "_", ">"], Yt = zt.concat(["~", "|"]), $u = Yt.concat([`
`, '"', "$", "%", "&", "'", ",", "/", ":", ";", "<", "=", "?", "@", "^"]);
      $r.default = zt;
      $r.gfm = Yt;
      $r.commonmark = $u;
      function $r(e) {
        var r = e || {};
        return r.commonmark ? $u : r.gfm ? Yt : zt;
      }
    });
    var Ju = C(($v, Ku) => {
      Ku.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "pre", "section", "source", "title", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
    });
    var Gt = C((Wv, Xu) => {
      Xu.exports = { position: true, gfm: true, commonmark: false, pedantic: false, blocks: Ju() };
    });
    var Zu = C((Hv, Qu) => {
      var ID = Ie(), ND = Hu(), RD = Gt();
      Qu.exports = UD;
      function UD(e) {
        var r = this, t = r.options, n, a;
        if (e == null) e = {};
        else if (typeof e == "object") e = ID(e);
        else throw new Error("Invalid value `" + e + "` for setting `options`");
        for (n in RD) {
          if (a = e[n], a == null && (a = t[n]), n !== "blocks" && typeof a != "boolean" || n === "blocks" && typeof a != "object") throw new Error("Invalid value `" + a + "` for setting `options." + n + "`");
          e[n] = a;
        }
        return r.options = e, r.escape = ND(e), r;
      }
    });
    var ta = C((Kv, ra) => {
      ra.exports = ea;
      function ea(e) {
        if (e == null) return GD;
        if (typeof e == "string") return YD(e);
        if (typeof e == "object") return "length" in e ? zD(e) : MD(e);
        if (typeof e == "function") return e;
        throw new Error("Expected function, string, or object as test");
      }
      function MD(e) {
        return r;
        function r(t) {
          var n;
          for (n in e) if (t[n] !== e[n]) return false;
          return true;
        }
      }
      function zD(e) {
        for (var r = [], t = -1; ++t < e.length; ) r[t] = ea(e[t]);
        return n;
        function n() {
          for (var a = -1; ++a < r.length; ) if (r[a].apply(this, arguments)) return true;
          return false;
        }
      }
      function YD(e) {
        return r;
        function r(t) {
          return !!(t && t.type === e);
        }
      }
      function GD() {
        return true;
      }
    });
    var ia = C((Jv, na) => {
      na.exports = VD;
      function VD(e) {
        return e;
      }
    });
    var sa = C((Xv, oa) => {
      oa.exports = Wr;
      var jD = ta(), $D = ia(), ua = true, aa = "skip", Vt = false;
      Wr.CONTINUE = ua;
      Wr.SKIP = aa;
      Wr.EXIT = Vt;
      function Wr(e, r, t, n) {
        var a, u;
        typeof r == "function" && typeof t != "function" && (n = t, t = r, r = null), u = jD(r), a = n ? -1 : 1, i(e, null, [])();
        function i(o, s, l) {
          var c = typeof o == "object" && o !== null ? o : {}, f;
          return typeof c.type == "string" && (f = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0, p.displayName = "node (" + $D(c.type + (f ? "<" + f + ">" : "")) + ")"), p;
          function p() {
            var d = l.concat(o), D = [], h, m;
            if ((!r || u(o, s, l[l.length - 1] || null)) && (D = WD(t(o, l)), D[0] === Vt)) return D;
            if (o.children && D[0] !== aa) for (m = (n ? o.children.length : -1) + a; m > -1 && m < o.children.length; ) {
              if (h = i(o.children[m], m, d)(), h[0] === Vt) return h;
              m = typeof h[1] == "number" ? h[1] : m + a;
            }
            return D;
          }
        }
      }
      function WD(e) {
        return e !== null && typeof e == "object" && "length" in e ? e : typeof e == "number" ? [ua, e] : [e];
      }
    });
    var la = C((Qv, ca) => {
      ca.exports = Kr;
      var Hr = sa(), HD = Hr.CONTINUE, KD = Hr.SKIP, JD = Hr.EXIT;
      Kr.CONTINUE = HD;
      Kr.SKIP = KD;
      Kr.EXIT = JD;
      function Kr(e, r, t, n) {
        typeof r == "function" && typeof t != "function" && (n = t, t = r, r = null), Hr(e, r, a, n);
        function a(u, i) {
          var o = i[i.length - 1], s = o ? o.children.indexOf(u) : null;
          return t(u, s, o);
        }
      }
    });
    var Da = C((Zv, fa) => {
      var XD = la();
      fa.exports = QD;
      function QD(e, r) {
        return XD(e, r ? ZD : ep), e;
      }
      function ZD(e) {
        delete e.position;
      }
      function ep(e) {
        e.position = void 0;
      }
    });
    var da = C((eE, ha) => {
      var pa = Ie(), rp = Da();
      ha.exports = ip;
      var tp = `
`, np = /\r\n|\r/g;
      function ip() {
        var e = this, r = String(e.file), t = { line: 1, column: 1, offset: 0 }, n = pa(t), a;
        return r = r.replace(np, tp), r.charCodeAt(0) === 65279 && (r = r.slice(1), n.column++, n.offset++), a = { type: "root", children: e.tokenizeBlock(r, n), position: { start: t, end: e.eof || pa(t) } }, e.options.position || rp(a, true), a;
      }
    });
    var Fa = C((rE, ma) => {
      var up = /^[ \t]*(\n|$)/;
      ma.exports = ap;
      function ap(e, r, t) {
        for (var n, a = "", u = 0, i = r.length; u < i && (n = up.exec(r.slice(u)), n != null); ) u += n[0].length, a += n[0];
        if (a !== "") {
          if (t) return true;
          e(a);
        }
      }
    });
    var Jr = C((tE, ga) => {
      var me = "", jt;
      ga.exports = op;
      function op(e, r) {
        if (typeof e != "string") throw new TypeError("expected a string");
        if (r === 1) return e;
        if (r === 2) return e + e;
        var t = e.length * r;
        if (jt !== e || typeof jt > "u") jt = e, me = "";
        else if (me.length >= t) return me.substr(0, t);
        for (; t > me.length && r > 1; ) r & 1 && (me += e), r >>= 1, e += e;
        return me += e, me = me.substr(0, t), me;
      }
    });
    var $t = C((nE, va) => {
      va.exports = sp;
      function sp(e) {
        return String(e).replace(/\n+$/, "");
      }
    });
    var ba = C((iE, Ca) => {
      var cp = Jr(), lp = $t();
      Ca.exports = pp;
      var Wt = `
`, Ea = "	", Ht = " ", fp = 4, Dp = cp(Ht, fp);
      function pp(e, r, t) {
        for (var n = -1, a = r.length, u = "", i = "", o = "", s = "", l, c, f; ++n < a; ) if (l = r.charAt(n), f) if (f = false, u += o, i += s, o = "", s = "", l === Wt) o = l, s = l;
        else for (u += l, i += l; ++n < a; ) {
          if (l = r.charAt(n), !l || l === Wt) {
            s = l, o = l;
            break;
          }
          u += l, i += l;
        }
        else if (l === Ht && r.charAt(n + 1) === l && r.charAt(n + 2) === l && r.charAt(n + 3) === l) o += Dp, n += 3, f = true;
        else if (l === Ea) o += l, f = true;
        else {
          for (c = ""; l === Ea || l === Ht; ) c += l, l = r.charAt(++n);
          if (l !== Wt) break;
          o += c + l, s += l;
        }
        if (i) return t ? true : e(u)({ type: "code", lang: null, meta: null, value: lp(i) });
      }
    });
    var xa = C((uE, Aa) => {
      Aa.exports = Fp;
      var Xr = `
`, mr = "	", Je = " ", hp = "~", ya = "`", dp = 3, mp = 4;
      function Fp(e, r, t) {
        var n = this, a = n.options.gfm, u = r.length + 1, i = 0, o = "", s, l, c, f, p, d, D, h, m, F, y, E, B;
        if (a) {
          for (; i < u && (c = r.charAt(i), !(c !== Je && c !== mr)); ) o += c, i++;
          if (E = i, c = r.charAt(i), !(c !== hp && c !== ya)) {
            for (i++, l = c, s = 1, o += c; i < u && (c = r.charAt(i), c === l); ) o += c, s++, i++;
            if (!(s < dp)) {
              for (; i < u && (c = r.charAt(i), !(c !== Je && c !== mr)); ) o += c, i++;
              for (f = "", D = ""; i < u && (c = r.charAt(i), !(c === Xr || l === ya && c === l)); ) c === Je || c === mr ? D += c : (f += D + c, D = ""), i++;
              if (c = r.charAt(i), !(c && c !== Xr)) {
                if (t) return true;
                B = e.now(), B.column += o.length, B.offset += o.length, o += f, f = n.decode.raw(n.unescape(f), B), D && (o += D), D = "", F = "", y = "", h = "", m = "";
                for (var b = true; i < u; ) {
                  if (c = r.charAt(i), h += F, m += y, F = "", y = "", c !== Xr) {
                    h += c, y += c, i++;
                    continue;
                  }
                  for (b ? (o += c, b = false) : (F += c, y += c), D = "", i++; i < u && (c = r.charAt(i), c === Je); ) D += c, i++;
                  if (F += D, y += D.slice(E), !(D.length >= mp)) {
                    for (D = ""; i < u && (c = r.charAt(i), c === l); ) D += c, i++;
                    if (F += D, y += D, !(D.length < s)) {
                      for (D = ""; i < u && (c = r.charAt(i), !(c !== Je && c !== mr)); ) F += c, y += c, i++;
                      if (!c || c === Xr) break;
                    }
                  }
                }
                for (o += h + F, i = -1, u = f.length; ++i < u; ) if (c = f.charAt(i), c === Je || c === mr) p || (p = f.slice(0, i));
                else if (p) {
                  d = f.slice(i);
                  break;
                }
                return e(o)({ type: "code", lang: p || f || null, meta: d || null, value: m });
              }
            }
          }
        }
      }
    });
    var Re = C((Xe, wa) => {
      Xe = wa.exports = gp;
      function gp(e) {
        return e.trim ? e.trim() : Xe.right(Xe.left(e));
      }
      Xe.left = function(e) {
        return e.trimLeft ? e.trimLeft() : e.replace(/^\s\s*/, "");
      };
      Xe.right = function(e) {
        if (e.trimRight) return e.trimRight();
        for (var r = /\s/, t = e.length; r.test(e.charAt(--t)); ) ;
        return e.slice(0, t + 1);
      };
    });
    var Qr = C((aE, ka) => {
      ka.exports = vp;
      function vp(e, r, t, n) {
        for (var a = e.length, u = -1, i, o; ++u < a; ) if (i = e[u], o = i[1] || {}, !(o.pedantic !== void 0 && o.pedantic !== t.options.pedantic) && !(o.commonmark !== void 0 && o.commonmark !== t.options.commonmark) && r[i[0]].apply(t, n)) return true;
        return false;
      }
    });
    var _a = C((oE, qa) => {
      var Ep = Re(), Cp = Qr();
      qa.exports = bp;
      var Kt = `
`, Ba = "	", Jt = " ", Ta = ">";
      function bp(e, r, t) {
        for (var n = this, a = n.offset, u = n.blockTokenizers, i = n.interruptBlockquote, o = e.now(), s = o.line, l = r.length, c = [], f = [], p = [], d, D = 0, h, m, F, y, E, B, b, g; D < l && (h = r.charAt(D), !(h !== Jt && h !== Ba)); ) D++;
        if (r.charAt(D) === Ta) {
          if (t) return true;
          for (D = 0; D < l; ) {
            for (F = r.indexOf(Kt, D), B = D, b = false, F === -1 && (F = l); D < l && (h = r.charAt(D), !(h !== Jt && h !== Ba)); ) D++;
            if (r.charAt(D) === Ta ? (D++, b = true, r.charAt(D) === Jt && D++) : D = B, y = r.slice(D, F), !b && !Ep(y)) {
              D = B;
              break;
            }
            if (!b && (m = r.slice(D), Cp(i, u, n, [e, m, true]))) break;
            E = B === D ? y : r.slice(B, F), p.push(D - B), c.push(E), f.push(y), D = F + 1;
          }
          for (D = -1, l = p.length, d = e(c.join(Kt)); ++D < l; ) a[s] = (a[s] || 0) + p[D], s++;
          return g = n.enterBlock(), f = n.tokenizeBlock(f.join(Kt), o), g(), d({ type: "blockquote", children: f });
        }
      }
    });
    var La = C((sE, Oa) => {
      Oa.exports = Ap;
      var Sa = `
`, Fr = "	", gr = " ", vr = "#", yp = 6;
      function Ap(e, r, t) {
        for (var n = this, a = n.options.pedantic, u = r.length + 1, i = -1, o = e.now(), s = "", l = "", c, f, p; ++i < u; ) {
          if (c = r.charAt(i), c !== gr && c !== Fr) {
            i--;
            break;
          }
          s += c;
        }
        for (p = 0; ++i <= u; ) {
          if (c = r.charAt(i), c !== vr) {
            i--;
            break;
          }
          s += c, p++;
        }
        if (!(p > yp) && !(!p || !a && r.charAt(i + 1) === vr)) {
          for (u = r.length + 1, f = ""; ++i < u; ) {
            if (c = r.charAt(i), c !== gr && c !== Fr) {
              i--;
              break;
            }
            f += c;
          }
          if (!(!a && f.length === 0 && c && c !== Sa)) {
            if (t) return true;
            for (s += f, f = "", l = ""; ++i < u && (c = r.charAt(i), !(!c || c === Sa)); ) {
              if (c !== gr && c !== Fr && c !== vr) {
                l += f + c, f = "";
                continue;
              }
              for (; c === gr || c === Fr; ) f += c, c = r.charAt(++i);
              if (!a && l && !f && c === vr) {
                l += c;
                continue;
              }
              for (; c === vr; ) f += c, c = r.charAt(++i);
              for (; c === gr || c === Fr; ) f += c, c = r.charAt(++i);
              i--;
            }
            return o.column += s.length, o.offset += s.length, s += l + f, e(s)({ type: "heading", depth: p, children: n.tokenizeInline(l, o) });
          }
        }
      }
    });
    var Na = C((cE, Ia) => {
      Ia.exports = _p;
      var xp = "	", wp = `
`, Pa = " ", kp = "*", Bp = "-", Tp = "_", qp = 3;
      function _p(e, r, t) {
        for (var n = -1, a = r.length + 1, u = "", i, o, s, l; ++n < a && (i = r.charAt(n), !(i !== xp && i !== Pa)); ) u += i;
        if (!(i !== kp && i !== Bp && i !== Tp)) for (o = i, u += i, s = 1, l = ""; ++n < a; ) if (i = r.charAt(n), i === o) s++, u += l + o, l = "";
        else if (i === Pa) l += i;
        else return s >= qp && (!i || i === wp) ? (u += l, t ? true : e(u)({ type: "thematicBreak" })) : void 0;
      }
    });
    var Xt = C((lE, Ua) => {
      Ua.exports = Pp;
      var Ra = "	", Sp = " ", Op = 1, Lp = 4;
      function Pp(e) {
        for (var r = 0, t = 0, n = e.charAt(r), a = {}, u, i = 0; n === Ra || n === Sp; ) {
          for (u = n === Ra ? Lp : Op, t += u, u > 1 && (t = Math.floor(t / u) * u); i < t; ) a[++i] = r;
          n = e.charAt(++r);
        }
        return { indent: t, stops: a };
      }
    });
    var Ya = C((fE, za) => {
      var Ip = Re(), Np = Jr(), Rp = Xt();
      za.exports = zp;
      var Ma = `
`, Up = " ", Mp = "!";
      function zp(e, r) {
        var t = e.split(Ma), n = t.length + 1, a = 1 / 0, u = [], i, o, s;
        for (t.unshift(Np(Up, r) + Mp); n--; ) if (o = Rp(t[n]), u[n] = o.stops, Ip(t[n]).length !== 0) if (o.indent) o.indent > 0 && o.indent < a && (a = o.indent);
        else {
          a = 1 / 0;
          break;
        }
        if (a !== 1 / 0) for (n = t.length; n--; ) {
          for (s = u[n], i = a; i && !(i in s); ) i--;
          t[n] = t[n].slice(s[i] + 1);
        }
        return t.shift(), t.join(Ma);
      }
    });
    var Ha = C((DE, Wa) => {
      var Yp = Re(), Gp = Jr(), Ga = Ne(), Vp = Xt(), jp = Ya(), $p = Qr();
      Wa.exports = eh;
      var Qt = "*", Wp = "_", Va = "+", Zt = "-", ja = ".", Fe = " ", ae = `
`, Zr = "	", $a = ")", Hp = "x", we = 4, Kp = /\n\n(?!\s*$)/, Jp = /^\[([ X\tx])][ \t]/, Xp = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/, Qp = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/, Zp = /^( {1,4}|\t)?/gm;
      function eh(e, r, t) {
        for (var n = this, a = n.options.commonmark, u = n.options.pedantic, i = n.blockTokenizers, o = n.interruptList, s = 0, l = r.length, c = null, f, p, d, D, h, m, F, y, E, B, b, g, A, x, v, w, k, T, q, R = false, O, S, _, L; s < l && (D = r.charAt(s), !(D !== Zr && D !== Fe)); ) s++;
        if (D = r.charAt(s), D === Qt || D === Va || D === Zt) h = D, d = false;
        else {
          for (d = true, p = ""; s < l && (D = r.charAt(s), !!Ga(D)); ) p += D, s++;
          if (D = r.charAt(s), !p || !(D === ja || a && D === $a) || t && p !== "1") return;
          c = parseInt(p, 10), h = D;
        }
        if (D = r.charAt(++s), !(D !== Fe && D !== Zr && (u || D !== ae && D !== ""))) {
          if (t) return true;
          for (s = 0, x = [], v = [], w = []; s < l; ) {
            for (m = r.indexOf(ae, s), F = s, y = false, L = false, m === -1 && (m = l), f = 0; s < l; ) {
              if (D = r.charAt(s), D === Zr) f += we - f % we;
              else if (D === Fe) f++;
              else break;
              s++;
            }
            if (k && f >= k.indent && (L = true), D = r.charAt(s), E = null, !L) {
              if (D === Qt || D === Va || D === Zt) E = D, s++, f++;
              else {
                for (p = ""; s < l && (D = r.charAt(s), !!Ga(D)); ) p += D, s++;
                D = r.charAt(s), s++, p && (D === ja || a && D === $a) && (E = D, f += p.length + 1);
              }
              if (E) if (D = r.charAt(s), D === Zr) f += we - f % we, s++;
              else if (D === Fe) {
                for (_ = s + we; s < _ && r.charAt(s) === Fe; ) s++, f++;
                s === _ && r.charAt(s) === Fe && (s -= we - 1, f -= we - 1);
              } else D !== ae && D !== "" && (E = null);
            }
            if (E) {
              if (!u && h !== E) break;
              y = true;
            } else !a && !L && r.charAt(F) === Fe ? L = true : a && k && (L = f >= k.indent || f > we), y = false, s = F;
            if (b = r.slice(F, m), B = F === s ? b : r.slice(s, m), (E === Qt || E === Wp || E === Zt) && i.thematicBreak.call(n, e, b, true)) break;
            if (g = A, A = !y && !Yp(B).length, L && k) k.value = k.value.concat(w, b), v = v.concat(w, b), w = [];
            else if (y) w.length !== 0 && (R = true, k.value.push(""), k.trail = w.concat()), k = { value: [b], indent: f, trail: [] }, x.push(k), v = v.concat(w, b), w = [];
            else if (A) {
              if (g && !a) break;
              w.push(b);
            } else {
              if (g || $p(o, i, n, [e, b, true])) break;
              k.value = k.value.concat(w, b), v = v.concat(w, b), w = [];
            }
            s = m + 1;
          }
          for (O = e(v.join(ae)).reset({ type: "list", ordered: d, start: c, spread: R, children: [] }), T = n.enterList(), q = n.enterBlock(), s = -1, l = x.length; ++s < l; ) k = x[s].value.join(ae), S = e.now(), e(k)(rh(n, k, S), O), k = x[s].trail.join(ae), s !== l - 1 && (k += ae), e(k);
          return T(), q(), O;
        }
      }
      function rh(e, r, t) {
        var n = e.offset, a = e.options.pedantic ? th : nh, u = null, i, o;
        return r = a.apply(null, arguments), e.options.gfm && (i = r.match(Jp), i && (o = i[0].length, u = i[1].toLowerCase() === Hp, n[t.line] += o, r = r.slice(o))), { type: "listItem", spread: Kp.test(r), checked: u, children: e.tokenizeBlock(r, t) };
      }
      function th(e, r, t) {
        var n = e.offset, a = t.line;
        return r = r.replace(Qp, u), a = t.line, r.replace(Zp, u);
        function u(i) {
          return n[a] = (n[a] || 0) + i.length, a++, "";
        }
      }
      function nh(e, r, t) {
        var n = e.offset, a = t.line, u, i, o, s, l, c, f;
        for (r = r.replace(Xp, p), s = r.split(ae), l = jp(r, Vp(u).indent).split(ae), l[0] = o, n[a] = (n[a] || 0) + i.length, a++, c = 0, f = s.length; ++c < f; ) n[a] = (n[a] || 0) + s[c].length - l[c].length, a++;
        return l.join(ae);
        function p(d, D, h, m, F) {
          return i = D + h + m, o = F, Number(h) < 10 && i.length % 2 === 1 && (h = Fe + h), u = D + Gp(Fe, h.length) + m, u + o;
        }
      }
    });
    var Qa = C((pE, Xa) => {
      Xa.exports = ch;
      var en = `
`, ih = "	", Ka = " ", Ja = "=", uh = "-", ah = 3, oh = 1, sh = 2;
      function ch(e, r, t) {
        for (var n = this, a = e.now(), u = r.length, i = -1, o = "", s, l, c, f, p; ++i < u; ) {
          if (c = r.charAt(i), c !== Ka || i >= ah) {
            i--;
            break;
          }
          o += c;
        }
        for (s = "", l = ""; ++i < u; ) {
          if (c = r.charAt(i), c === en) {
            i--;
            break;
          }
          c === Ka || c === ih ? l += c : (s += l + c, l = "");
        }
        if (a.column += o.length, a.offset += o.length, o += s + l, c = r.charAt(++i), f = r.charAt(++i), !(c !== en || f !== Ja && f !== uh)) {
          for (o += c, l = f, p = f === Ja ? oh : sh; ++i < u; ) {
            if (c = r.charAt(i), c !== f) {
              if (c !== en) return;
              i--;
              break;
            }
            l += c;
          }
          return t ? true : e(o + l)({ type: "heading", depth: p, children: n.tokenizeInline(s, a) });
        }
      }
    });
    var tn = C((rn) => {
      var lh = "[a-zA-Z_:][a-zA-Z0-9:._-]*", fh = "[^\"'=<>`\\u0000-\\u0020]+", Dh = "'[^']*'", ph = '"[^"]*"', hh = "(?:" + fh + "|" + Dh + "|" + ph + ")", dh = "(?:\\s+" + lh + "(?:\\s*=\\s*" + hh + ")?)", Za = "<[A-Za-z][A-Za-z0-9\\-]*" + dh + "*\\s*\\/?>", eo = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", mh = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", Fh = "<[?].*?[?]>", gh = "<![A-Za-z]+\\s+[^>]*>", vh = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
      rn.openCloseTag = new RegExp("^(?:" + Za + "|" + eo + ")");
      rn.tag = new RegExp("^(?:" + Za + "|" + eo + "|" + mh + "|" + Fh + "|" + gh + "|" + vh + ")");
    });
    var io = C((dE, no) => {
      var Eh = tn().openCloseTag;
      no.exports = Ph;
      var Ch = "	", bh = " ", ro = `
`, yh = "<", Ah = /^<(script|pre|style)(?=(\s|>|$))/i, xh = /<\/(script|pre|style)>/i, wh = /^<!--/, kh = /-->/, Bh = /^<\?/, Th = /\?>/, qh = /^<![A-Za-z]/, _h = />/, Sh = /^<!\[CDATA\[/, Oh = /]]>/, to = /^$/, Lh = new RegExp(Eh.source + "\\s*$");
      function Ph(e, r, t) {
        for (var n = this, a = n.options.blocks.join("|"), u = new RegExp("^</?(" + a + ")(?=(\\s|/?>|$))", "i"), i = r.length, o = 0, s, l, c, f, p, d, D, h = [[Ah, xh, true], [wh, kh, true], [Bh, Th, true], [qh, _h, true], [Sh, Oh, true], [u, to, true], [Lh, to, false]]; o < i && (f = r.charAt(o), !(f !== Ch && f !== bh)); ) o++;
        if (r.charAt(o) === yh) {
          for (s = r.indexOf(ro, o + 1), s = s === -1 ? i : s, l = r.slice(o, s), c = -1, p = h.length; ++c < p; ) if (h[c][0].test(l)) {
            d = h[c];
            break;
          }
          if (d) {
            if (t) return d[2];
            if (o = s, !d[1].test(l)) for (; o < i; ) {
              if (s = r.indexOf(ro, o + 1), s = s === -1 ? i : s, l = r.slice(o + 1, s), d[1].test(l)) {
                l && (o = s);
                break;
              }
              o = s;
            }
            return D = r.slice(0, o), e(D)({ type: "html", value: D });
          }
        }
      }
    });
    var oe = C((mE, uo) => {
      uo.exports = Rh;
      var Ih = String.fromCharCode, Nh = /\s/;
      function Rh(e) {
        return Nh.test(typeof e == "number" ? Ih(e) : e.charAt(0));
      }
    });
    var nn = C((FE, ao) => {
      var Uh = Br();
      ao.exports = Mh;
      function Mh(e) {
        return Uh(e).toLowerCase();
      }
    });
    var po = C((gE, Do) => {
      var zh = oe(), Yh = nn();
      Do.exports = $h;
      var oo = '"', so = "'", Gh = "\\", Qe = `
`, et = "	", rt = " ", an = "[", Er = "]", Vh = "(", jh = ")", co = ":", lo = "<", fo = ">";
      function $h(e, r, t) {
        for (var n = this, a = n.options.commonmark, u = 0, i = r.length, o = "", s, l, c, f, p, d, D, h; u < i && (f = r.charAt(u), !(f !== rt && f !== et)); ) o += f, u++;
        if (f = r.charAt(u), f === an) {
          for (u++, o += f, c = ""; u < i && (f = r.charAt(u), f !== Er); ) f === Gh && (c += f, u++, f = r.charAt(u)), c += f, u++;
          if (!(!c || r.charAt(u) !== Er || r.charAt(u + 1) !== co)) {
            for (d = c, o += c + Er + co, u = o.length, c = ""; u < i && (f = r.charAt(u), !(f !== et && f !== rt && f !== Qe)); ) o += f, u++;
            if (f = r.charAt(u), c = "", s = o, f === lo) {
              for (u++; u < i && (f = r.charAt(u), !!un(f)); ) c += f, u++;
              if (f = r.charAt(u), f === un.delimiter) o += lo + c + f, u++;
              else {
                if (a) return;
                u -= c.length + 1, c = "";
              }
            }
            if (!c) {
              for (; u < i && (f = r.charAt(u), !!Wh(f)); ) c += f, u++;
              o += c;
            }
            if (c) {
              for (D = c, c = ""; u < i && (f = r.charAt(u), !(f !== et && f !== rt && f !== Qe)); ) c += f, u++;
              if (f = r.charAt(u), p = null, f === oo ? p = oo : f === so ? p = so : f === Vh && (p = jh), !p) c = "", u = o.length;
              else if (c) {
                for (o += c + f, u = o.length, c = ""; u < i && (f = r.charAt(u), f !== p); ) {
                  if (f === Qe) {
                    if (u++, f = r.charAt(u), f === Qe || f === p) return;
                    c += Qe;
                  }
                  c += f, u++;
                }
                if (f = r.charAt(u), f !== p) return;
                l = o, o += c + f, u++, h = c, c = "";
              } else return;
              for (; u < i && (f = r.charAt(u), !(f !== et && f !== rt)); ) o += f, u++;
              if (f = r.charAt(u), !f || f === Qe) return t ? true : (s = e(s).test().end, D = n.decode.raw(n.unescape(D), s, { nonTerminated: false }), h && (l = e(l).test().end, h = n.decode.raw(n.unescape(h), l)), e(o)({ type: "definition", identifier: Yh(d), label: d, title: h || null, url: D }));
            }
          }
        }
      }
      function un(e) {
        return e !== fo && e !== an && e !== Er;
      }
      un.delimiter = fo;
      function Wh(e) {
        return e !== an && e !== Er && !zh(e);
      }
    });
    var Fo = C((vE, mo) => {
      var Hh = oe();
      mo.exports = id;
      var Kh = "	", tt = `
`, Jh = " ", Xh = "-", Qh = ":", Zh = "\\", on = "|", ed = 1, rd = 2, ho = "left", td = "center", nd = "right";
      function id(e, r, t) {
        var n = this, a, u, i, o, s, l, c, f, p, d, D, h, m, F, y, E, B, b, g, A, x, v;
        if (n.options.gfm) {
          for (a = 0, E = 0, l = r.length + 1, c = []; a < l; ) {
            if (A = r.indexOf(tt, a), x = r.indexOf(on, a + 1), A === -1 && (A = r.length), x === -1 || x > A) {
              if (E < rd) return;
              break;
            }
            c.push(r.slice(a, A)), E++, a = A + 1;
          }
          for (o = c.join(tt), u = c.splice(1, 1)[0] || [], a = 0, l = u.length, E--, i = false, D = []; a < l; ) {
            if (p = u.charAt(a), p === on) {
              if (d = null, i === false) {
                if (v === false) return;
              } else D.push(i), i = false;
              v = false;
            } else if (p === Xh) d = true, i = i || null;
            else if (p === Qh) i === ho ? i = td : d && i === null ? i = nd : i = ho;
            else if (!Hh(p)) return;
            a++;
          }
          if (i !== false && D.push(i), !(D.length < ed)) {
            if (t) return true;
            for (y = -1, b = [], g = e(o).reset({ type: "table", align: D, children: b }); ++y < E; ) {
              for (B = c[y], s = { type: "tableRow", children: [] }, y && e(tt), e(B).reset(s, g), l = B.length + 1, a = 0, f = "", h = "", m = true; a < l; ) {
                if (p = B.charAt(a), p === Kh || p === Jh) {
                  h ? f += p : e(p), a++;
                  continue;
                }
                p === "" || p === on ? m ? e(p) : ((h || p) && !m && (o = h, f.length > 1 && (p ? (o += f.slice(0, -1), f = f.charAt(f.length - 1)) : (o += f, f = "")), F = e.now(), e(o)({ type: "tableCell", children: n.tokenizeInline(h, F) }, s)), e(f + p), f = "", h = "") : (f && (h += f, f = ""), h += p, p === Zh && a !== l - 2 && (h += B.charAt(a + 1), a++)), m = false, a++;
              }
              y || e(tt + u);
            }
            return g;
          }
        }
      }
    });
    var Eo = C((EE, vo) => {
      var ud = Re(), ad = $t(), od = Qr();
      vo.exports = ld;
      var sd = "	", Cr = `
`, cd = " ", go = 4;
      function ld(e, r, t) {
        for (var n = this, a = n.options, u = a.commonmark, i = n.blockTokenizers, o = n.interruptParagraph, s = r.indexOf(Cr), l = r.length, c, f, p, d, D; s < l; ) {
          if (s === -1) {
            s = l;
            break;
          }
          if (r.charAt(s + 1) === Cr) break;
          if (u) {
            for (d = 0, c = s + 1; c < l; ) {
              if (p = r.charAt(c), p === sd) {
                d = go;
                break;
              } else if (p === cd) d++;
              else break;
              c++;
            }
            if (d >= go && p !== Cr) {
              s = r.indexOf(Cr, s + 1);
              continue;
            }
          }
          if (f = r.slice(s + 1), od(o, i, n, [e, f, true])) break;
          if (c = s, s = r.indexOf(Cr, s + 1), s !== -1 && ud(r.slice(c, s)) === "") {
            s = c;
            break;
          }
        }
        return f = r.slice(0, s), t ? true : (D = e.now(), f = ad(f), e(f)({ type: "paragraph", children: n.tokenizeInline(f, D) }));
      }
    });
    var bo = C((CE, Co) => {
      Co.exports = fd;
      function fd(e, r) {
        return e.indexOf("\\", r);
      }
    });
    var wo = C((bE, xo) => {
      var Dd = bo();
      xo.exports = Ao;
      Ao.locator = Dd;
      var pd = `
`, yo = "\\";
      function Ao(e, r, t) {
        var n = this, a, u;
        if (r.charAt(0) === yo && (a = r.charAt(1), n.escape.indexOf(a) !== -1)) return t ? true : (a === pd ? u = { type: "break" } : u = { type: "text", value: a }, e(yo + a)(u));
      }
    });
    var sn = C((yE, ko) => {
      ko.exports = hd;
      function hd(e, r) {
        return e.indexOf("<", r);
      }
    });
    var So = C((AE, _o) => {
      var Bo = oe(), dd = dr(), md = sn();
      _o.exports = Dn;
      Dn.locator = md;
      Dn.notInLink = true;
      var To = "<", cn = ">", qo = "@", ln = "/", fn = "mailto:", nt = fn.length;
      function Dn(e, r, t) {
        var n = this, a = "", u = r.length, i = 0, o = "", s = false, l = "", c, f, p, d, D;
        if (r.charAt(0) === To) {
          for (i++, a = To; i < u && (c = r.charAt(i), !(Bo(c) || c === cn || c === qo || c === ":" && r.charAt(i + 1) === ln)); ) o += c, i++;
          if (o) {
            if (l += o, o = "", c = r.charAt(i), l += c, i++, c === qo) s = true;
            else {
              if (c !== ":" || r.charAt(i + 1) !== ln) return;
              l += ln, i++;
            }
            for (; i < u && (c = r.charAt(i), !(Bo(c) || c === cn)); ) o += c, i++;
            if (c = r.charAt(i), !(!o || c !== cn)) return t ? true : (l += o, p = l, a += l + c, f = e.now(), f.column++, f.offset++, s && (l.slice(0, nt).toLowerCase() === fn ? (p = p.slice(nt), f.column += nt, f.offset += nt) : l = fn + l), d = n.inlineTokenizers, n.inlineTokenizers = { text: d.text }, D = n.enterLink(), p = n.tokenizeInline(p, f), n.inlineTokenizers = d, D(), e(a)({ type: "link", title: null, url: dd(l, { nonTerminated: false }), children: p }));
          }
        }
      }
    });
    var Lo = C((xE, Oo) => {
      Oo.exports = Fd;
      function Fd(e, r) {
        var t = String(e), n = 0, a;
        if (typeof r != "string") throw new Error("Expected character");
        for (a = t.indexOf(r); a !== -1; ) n++, a = t.indexOf(r, a + r.length);
        return n;
      }
    });
    var No = C((wE, Io) => {
      Io.exports = gd;
      var Po = ["www.", "http://", "https://"];
      function gd(e, r) {
        var t = -1, n, a, u;
        if (!this.options.gfm) return t;
        for (a = Po.length, n = -1; ++n < a; ) u = e.indexOf(Po[n], r), u !== -1 && (t === -1 || u < t) && (t = u);
        return t;
      }
    });
    var Yo = C((kE, zo) => {
      var Ro = Lo(), vd = dr(), Ed = Ne(), pn = We(), Cd = oe(), bd = No();
      zo.exports = dn;
      dn.locator = bd;
      dn.notInLink = true;
      var yd = 33, Ad = 38, xd = 41, wd = 42, kd = 44, Bd = 45, hn = 46, Td = 58, qd = 59, _d = 63, Sd = 60, Uo = 95, Od = 126, Ld = "(", Mo = ")";
      function dn(e, r, t) {
        var n = this, a = n.options.gfm, u = n.inlineTokenizers, i = r.length, o = -1, s = false, l, c, f, p, d, D, h, m, F, y, E, B, b, g;
        if (a) {
          if (r.slice(0, 4) === "www.") s = true, p = 4;
          else if (r.slice(0, 7).toLowerCase() === "http://") p = 7;
          else if (r.slice(0, 8).toLowerCase() === "https://") p = 8;
          else return;
          for (o = p - 1, f = p, l = []; p < i; ) {
            if (h = r.charCodeAt(p), h === hn) {
              if (o === p - 1) break;
              l.push(p), o = p, p++;
              continue;
            }
            if (Ed(h) || pn(h) || h === Bd || h === Uo) {
              p++;
              continue;
            }
            break;
          }
          if (h === hn && (l.pop(), p--), l[0] !== void 0 && (c = l.length < 2 ? f : l[l.length - 2] + 1, r.slice(c, p).indexOf("_") === -1)) {
            if (t) return true;
            for (m = p, d = p; p < i && (h = r.charCodeAt(p), !(Cd(h) || h === Sd)); ) p++, h === yd || h === wd || h === kd || h === hn || h === Td || h === _d || h === Uo || h === Od || (m = p);
            if (p = m, r.charCodeAt(p - 1) === xd) for (D = r.slice(d, p), F = Ro(D, Ld), y = Ro(D, Mo); y > F; ) p = d + D.lastIndexOf(Mo), D = r.slice(d, p), y--;
            if (r.charCodeAt(p - 1) === qd && (p--, pn(r.charCodeAt(p - 1)))) {
              for (m = p - 2; pn(r.charCodeAt(m)); ) m--;
              r.charCodeAt(m) === Ad && (p = m);
            }
            return E = r.slice(0, p), b = vd(E, { nonTerminated: false }), s && (b = "http://" + b), g = n.enterLink(), n.inlineTokenizers = { text: u.text }, B = n.tokenizeInline(E, e.now()), n.inlineTokenizers = u, g(), e(E)({ type: "link", title: null, url: b, children: B });
          }
        }
      }
    });
    var $o = C((BE, jo) => {
      var Pd = Ne(), Id = We(), Nd = 43, Rd = 45, Ud = 46, Md = 95;
      jo.exports = Vo;
      function Vo(e, r) {
        var t = this, n, a;
        if (!this.options.gfm || (n = e.indexOf("@", r), n === -1)) return -1;
        if (a = n, a === r || !Go(e.charCodeAt(a - 1))) return Vo.call(t, e, n + 1);
        for (; a > r && Go(e.charCodeAt(a - 1)); ) a--;
        return a;
      }
      function Go(e) {
        return Pd(e) || Id(e) || e === Nd || e === Rd || e === Ud || e === Md;
      }
    });
    var Jo = C((TE, Ko) => {
      var zd = dr(), Wo = Ne(), Ho = We(), Yd = $o();
      Ko.exports = gn;
      gn.locator = Yd;
      gn.notInLink = true;
      var Gd = 43, mn = 45, it = 46, Vd = 64, Fn = 95;
      function gn(e, r, t) {
        var n = this, a = n.options.gfm, u = n.inlineTokenizers, i = 0, o = r.length, s = -1, l, c, f, p;
        if (a) {
          for (l = r.charCodeAt(i); Wo(l) || Ho(l) || l === Gd || l === mn || l === it || l === Fn; ) l = r.charCodeAt(++i);
          if (i !== 0 && l === Vd) {
            for (i++; i < o; ) {
              if (l = r.charCodeAt(i), Wo(l) || Ho(l) || l === mn || l === it || l === Fn) {
                i++, s === -1 && l === it && (s = i);
                continue;
              }
              break;
            }
            if (!(s === -1 || s === i || l === mn || l === Fn)) return l === it && i--, c = r.slice(0, i), t ? true : (p = n.enterLink(), n.inlineTokenizers = { text: u.text }, f = n.tokenizeInline(c, e.now()), n.inlineTokenizers = u, p(), e(c)({ type: "link", title: null, url: "mailto:" + zd(c, { nonTerminated: false }), children: f }));
          }
        }
      }
    });
    var Zo = C((qE, Qo) => {
      var jd = We(), $d = sn(), Wd = tn().tag;
      Qo.exports = Xo;
      Xo.locator = $d;
      var Hd = "<", Kd = "?", Jd = "!", Xd = "/", Qd = /^<a /i, Zd = /^<\/a>/i;
      function Xo(e, r, t) {
        var n = this, a = r.length, u, i;
        if (!(r.charAt(0) !== Hd || a < 3) && (u = r.charAt(1), !(!jd(u) && u !== Kd && u !== Jd && u !== Xd) && (i = r.match(Wd), !!i))) return t ? true : (i = i[0], !n.inLink && Qd.test(i) ? n.inLink = true : n.inLink && Zd.test(i) && (n.inLink = false), e(i)({ type: "html", value: i }));
      }
    });
    var vn = C((_E, es) => {
      es.exports = e0;
      function e0(e, r) {
        var t = e.indexOf("[", r), n = e.indexOf("![", r);
        return n === -1 || t < n ? t : n;
      }
    });
    var os = C((SE, as) => {
      var br = oe(), r0 = vn();
      as.exports = us;
      us.locator = r0;
      var t0 = `
`, n0 = "!", rs = '"', ts = "'", Ze = "(", yr = ")", En = "<", Cn = ">", ns = "[", Ar = "\\", i0 = "]", is = "`";
      function us(e, r, t) {
        var n = this, a = "", u = 0, i = r.charAt(0), o = n.options.pedantic, s = n.options.commonmark, l = n.options.gfm, c, f, p, d, D, h, m, F, y, E, B, b, g, A, x, v, w, k;
        if (i === n0 && (F = true, a = i, i = r.charAt(++u)), i === ns && !(!F && n.inLink)) {
          for (a += i, A = "", u++, B = r.length, v = e.now(), g = 0, v.column += u, v.offset += u; u < B; ) {
            if (i = r.charAt(u), h = i, i === is) {
              for (f = 1; r.charAt(u + 1) === is; ) h += i, u++, f++;
              p ? f >= p && (p = 0) : p = f;
            } else if (i === Ar) u++, h += r.charAt(u);
            else if ((!p || l) && i === ns) g++;
            else if ((!p || l) && i === i0) if (g) g--;
            else {
              if (r.charAt(u + 1) !== Ze) return;
              h += Ze, c = true, u++;
              break;
            }
            A += h, h = "", u++;
          }
          if (c) {
            for (y = A, a += A + h, u++; u < B && (i = r.charAt(u), !!br(i)); ) a += i, u++;
            if (i = r.charAt(u), A = "", d = a, i === En) {
              for (u++, d += En; u < B && (i = r.charAt(u), i !== Cn); ) {
                if (s && i === t0) return;
                A += i, u++;
              }
              if (r.charAt(u) !== Cn) return;
              a += En + A + Cn, x = A, u++;
            } else {
              for (i = null, h = ""; u < B && (i = r.charAt(u), !(h && (i === rs || i === ts || s && i === Ze))); ) {
                if (br(i)) {
                  if (!o) break;
                  h += i;
                } else {
                  if (i === Ze) g++;
                  else if (i === yr) {
                    if (g === 0) break;
                    g--;
                  }
                  A += h, h = "", i === Ar && (A += Ar, i = r.charAt(++u)), A += i;
                }
                u++;
              }
              a += A, x = A, u = a.length;
            }
            for (A = ""; u < B && (i = r.charAt(u), !!br(i)); ) A += i, u++;
            if (i = r.charAt(u), a += A, A && (i === rs || i === ts || s && i === Ze)) if (u++, a += i, A = "", E = i === Ze ? yr : i, D = a, s) {
              for (; u < B && (i = r.charAt(u), i !== E); ) i === Ar && (A += Ar, i = r.charAt(++u)), u++, A += i;
              if (i = r.charAt(u), i !== E) return;
              for (b = A, a += A + i, u++; u < B && (i = r.charAt(u), !!br(i)); ) a += i, u++;
            } else for (h = ""; u < B; ) {
              if (i = r.charAt(u), i === E) m && (A += E + h, h = ""), m = true;
              else if (!m) A += i;
              else if (i === yr) {
                a += A + E + h, b = A;
                break;
              } else br(i) ? h += i : (A += E + h + i, h = "", m = false);
              u++;
            }
            if (r.charAt(u) === yr) return t ? true : (a += yr, x = n.decode.raw(n.unescape(x), e(d).test().end, { nonTerminated: false }), b && (D = e(D).test().end, b = n.decode.raw(n.unescape(b), D)), k = { type: F ? "image" : "link", title: b || null, url: x }, F ? k.alt = n.decode.raw(n.unescape(y), v) || null : (w = n.enterLink(), k.children = n.tokenizeInline(y, v), w()), e(a)(k));
          }
        }
      }
    });
    var ls = C((OE, cs) => {
      var u0 = oe(), a0 = vn(), o0 = nn();
      cs.exports = ss;
      ss.locator = a0;
      var bn = "link", s0 = "image", c0 = "shortcut", l0 = "collapsed", yn = "full", f0 = "!", ut = "[", at = "\\", ot = "]";
      function ss(e, r, t) {
        var n = this, a = n.options.commonmark, u = r.charAt(0), i = 0, o = r.length, s = "", l = "", c = bn, f = c0, p, d, D, h, m, F, y, E;
        if (u === f0 && (c = s0, l = u, u = r.charAt(++i)), u === ut) {
          for (i++, l += u, F = "", E = 0; i < o; ) {
            if (u = r.charAt(i), u === ut) y = true, E++;
            else if (u === ot) {
              if (!E) break;
              E--;
            }
            u === at && (F += at, u = r.charAt(++i)), F += u, i++;
          }
          if (s = F, p = F, u = r.charAt(i), u === ot) {
            if (i++, s += u, F = "", !a) for (; i < o && (u = r.charAt(i), !!u0(u)); ) F += u, i++;
            if (u = r.charAt(i), u === ut) {
              for (d = "", F += u, i++; i < o && (u = r.charAt(i), !(u === ut || u === ot)); ) u === at && (d += at, u = r.charAt(++i)), d += u, i++;
              u = r.charAt(i), u === ot ? (f = d ? yn : l0, F += d + u, i++) : d = "", s += F, F = "";
            } else {
              if (!p) return;
              d = p;
            }
            if (!(f !== yn && y)) return s = l + s, c === bn && n.inLink ? null : t ? true : (D = e.now(), D.column += l.length, D.offset += l.length, d = f === yn ? d : p, h = { type: c + "Reference", identifier: o0(d), label: d, referenceType: f }, c === bn ? (m = n.enterLink(), h.children = n.tokenizeInline(p, D), m()) : h.alt = n.decode.raw(n.unescape(p), D) || null, e(s)(h));
          }
        }
      }
    });
    var Ds = C((LE, fs) => {
      fs.exports = D0;
      function D0(e, r) {
        var t = e.indexOf("**", r), n = e.indexOf("__", r);
        return n === -1 ? t : t === -1 || n < t ? n : t;
      }
    });
    var ms = C((PE, ds) => {
      var p0 = Re(), ps = oe(), h0 = Ds();
      ds.exports = hs;
      hs.locator = h0;
      var d0 = "\\", m0 = "*", F0 = "_";
      function hs(e, r, t) {
        var n = this, a = 0, u = r.charAt(a), i, o, s, l, c, f, p;
        if (!(u !== m0 && u !== F0 || r.charAt(++a) !== u) && (o = n.options.pedantic, s = u, c = s + s, f = r.length, a++, l = "", u = "", !(o && ps(r.charAt(a))))) for (; a < f; ) {
          if (p = u, u = r.charAt(a), u === s && r.charAt(a + 1) === s && (!o || !ps(p)) && (u = r.charAt(a + 2), u !== s)) return p0(l) ? t ? true : (i = e.now(), i.column += 2, i.offset += 2, e(c + l + c)({ type: "strong", children: n.tokenizeInline(l, i) })) : void 0;
          !o && u === d0 && (l += u, u = r.charAt(++a)), l += u, a++;
        }
      }
    });
    var gs = C((IE, Fs) => {
      Fs.exports = E0;
      var g0 = String.fromCharCode, v0 = /\w/;
      function E0(e) {
        return v0.test(typeof e == "number" ? g0(e) : e.charAt(0));
      }
    });
    var Es = C((NE, vs) => {
      vs.exports = C0;
      function C0(e, r) {
        var t = e.indexOf("*", r), n = e.indexOf("_", r);
        return n === -1 ? t : t === -1 || n < t ? n : t;
      }
    });
    var xs = C((RE, As) => {
      var b0 = Re(), y0 = gs(), Cs = oe(), A0 = Es();
      As.exports = ys;
      ys.locator = A0;
      var x0 = "*", bs = "_", w0 = "\\";
      function ys(e, r, t) {
        var n = this, a = 0, u = r.charAt(a), i, o, s, l, c, f, p;
        if (!(u !== x0 && u !== bs) && (o = n.options.pedantic, c = u, s = u, f = r.length, a++, l = "", u = "", !(o && Cs(r.charAt(a))))) for (; a < f; ) {
          if (p = u, u = r.charAt(a), u === s && (!o || !Cs(p))) {
            if (u = r.charAt(++a), u !== s) {
              if (!b0(l) || p === s) return;
              if (!o && s === bs && y0(u)) {
                l += s;
                continue;
              }
              return t ? true : (i = e.now(), i.column++, i.offset++, e(c + l + s)({ type: "emphasis", children: n.tokenizeInline(l, i) }));
            }
            l += s;
          }
          !o && u === w0 && (l += u, u = r.charAt(++a)), l += u, a++;
        }
      }
    });
    var ks = C((UE, ws) => {
      ws.exports = k0;
      function k0(e, r) {
        return e.indexOf("~~", r);
      }
    });
    var Ss = C((ME, _s) => {
      var Bs = oe(), B0 = ks();
      _s.exports = qs;
      qs.locator = B0;
      var st = "~", Ts = "~~";
      function qs(e, r, t) {
        var n = this, a = "", u = "", i = "", o = "", s, l, c;
        if (!(!n.options.gfm || r.charAt(0) !== st || r.charAt(1) !== st || Bs(r.charAt(2)))) for (s = 1, l = r.length, c = e.now(), c.column += 2, c.offset += 2; ++s < l; ) {
          if (a = r.charAt(s), a === st && u === st && (!i || !Bs(i))) return t ? true : e(Ts + o + Ts)({ type: "delete", children: n.tokenizeInline(o, c) });
          o += u, i = u, u = a;
        }
      }
    });
    var Ls = C((zE, Os) => {
      Os.exports = T0;
      function T0(e, r) {
        return e.indexOf("`", r);
      }
    });
    var Ns = C((YE, Is) => {
      var q0 = Ls();
      Is.exports = Ps;
      Ps.locator = q0;
      var An = 10, xn = 32, wn = 96;
      function Ps(e, r, t) {
        for (var n = r.length, a = 0, u, i, o, s, l, c; a < n && r.charCodeAt(a) === wn; ) a++;
        if (!(a === 0 || a === n)) {
          for (u = a, l = r.charCodeAt(a); a < n; ) {
            if (s = l, l = r.charCodeAt(a + 1), s === wn) {
              if (i === void 0 && (i = a), o = a + 1, l !== wn && o - i === u) {
                c = true;
                break;
              }
            } else i !== void 0 && (i = void 0, o = void 0);
            a++;
          }
          if (c) {
            if (t) return true;
            if (a = u, n = i, s = r.charCodeAt(a), l = r.charCodeAt(n - 1), c = false, n - a > 2 && (s === xn || s === An) && (l === xn || l === An)) {
              for (a++, n--; a < n; ) {
                if (s = r.charCodeAt(a), s !== xn && s !== An) {
                  c = true;
                  break;
                }
                a++;
              }
              c === true && (u++, i--);
            }
            return e(r.slice(0, o))({ type: "inlineCode", value: r.slice(u, i) });
          }
        }
      }
    });
    var Us = C((GE, Rs) => {
      Rs.exports = _0;
      function _0(e, r) {
        for (var t = e.indexOf(`
`, r); t > r && e.charAt(t - 1) === " "; ) t--;
        return t;
      }
    });
    var Ys = C((VE, zs) => {
      var S0 = Us();
      zs.exports = Ms;
      Ms.locator = S0;
      var O0 = " ", L0 = `
`, P0 = 2;
      function Ms(e, r, t) {
        for (var n = r.length, a = -1, u = "", i; ++a < n; ) {
          if (i = r.charAt(a), i === L0) return a < P0 ? void 0 : t ? true : (u += i, e(u)({ type: "break" }));
          if (i !== O0) return;
          u += i;
        }
      }
    });
    var Vs = C((jE, Gs) => {
      Gs.exports = I0;
      function I0(e, r, t) {
        var n = this, a, u, i, o, s, l, c, f, p, d;
        if (t) return true;
        for (a = n.inlineMethods, o = a.length, u = n.inlineTokenizers, i = -1, p = r.length; ++i < o; ) f = a[i], !(f === "text" || !u[f]) && (c = u[f].locator, c || e.file.fail("Missing locator: `" + f + "`"), l = c.call(n, r, 1), l !== -1 && l < p && (p = l));
        s = r.slice(0, p), d = e.now(), n.decode(s, d, D);
        function D(h, m, F) {
          e(F || h)({ type: "text", value: h });
        }
      }
    });
    var Hs = C(($E, Ws) => {
      var N0 = Ie(), ct = lu(), R0 = Du(), U0 = hu(), M0 = Yu(), kn = ju();
      Ws.exports = js;
      function js(e, r) {
        this.file = r, this.offset = {}, this.options = N0(this.options), this.setOptions({}), this.inList = false, this.inBlock = false, this.inLink = false, this.atStart = true, this.toOffset = R0(r).toOffset, this.unescape = U0(this, "escape"), this.decode = M0(this);
      }
      var U = js.prototype;
      U.setOptions = Zu();
      U.parse = da();
      U.options = Gt();
      U.exitStart = ct("atStart", true);
      U.enterList = ct("inList", false);
      U.enterLink = ct("inLink", false);
      U.enterBlock = ct("inBlock", false);
      U.interruptParagraph = [["thematicBreak"], ["list"], ["atxHeading"], ["fencedCode"], ["blockquote"], ["html"], ["setextHeading", { commonmark: false }], ["definition", { commonmark: false }]];
      U.interruptList = [["atxHeading", { pedantic: false }], ["fencedCode", { pedantic: false }], ["thematicBreak", { pedantic: false }], ["definition", { commonmark: false }]];
      U.interruptBlockquote = [["indentedCode", { commonmark: true }], ["fencedCode", { commonmark: true }], ["atxHeading", { commonmark: true }], ["setextHeading", { commonmark: true }], ["thematicBreak", { commonmark: true }], ["html", { commonmark: true }], ["list", { commonmark: true }], ["definition", { commonmark: false }]];
      U.blockTokenizers = { blankLine: Fa(), indentedCode: ba(), fencedCode: xa(), blockquote: _a(), atxHeading: La(), thematicBreak: Na(), list: Ha(), setextHeading: Qa(), html: io(), definition: po(), table: Fo(), paragraph: Eo() };
      U.inlineTokenizers = { escape: wo(), autoLink: So(), url: Yo(), email: Jo(), html: Zo(), link: os(), reference: ls(), strong: ms(), emphasis: xs(), deletion: Ss(), code: Ns(), break: Ys(), text: Vs() };
      U.blockMethods = $s(U.blockTokenizers);
      U.inlineMethods = $s(U.inlineTokenizers);
      U.tokenizeBlock = kn("block");
      U.tokenizeInline = kn("inline");
      U.tokenizeFactory = kn;
      function $s(e) {
        var r = [], t;
        for (t in e) r.push(t);
        return r;
      }
    });
    var Qs = C((WE, Xs) => {
      var z0 = su(), Y0 = Ie(), Ks = Hs();
      Xs.exports = Js;
      Js.Parser = Ks;
      function Js(e) {
        var r = this.data("settings"), t = z0(Ks);
        t.prototype.options = Y0(t.prototype.options, r, e), this.Parser = t;
      }
    });
    var ec = C((HE, Zs) => {
      Zs.exports = G0;
      function G0(e) {
        if (e) throw e;
      }
    });
    var Bn = C((KE, rc) => {
      rc.exports = function(r) {
        return r != null && r.constructor != null && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
      };
    });
    var lc = C((JE, cc) => {
      var lt = Object.prototype.hasOwnProperty, sc = Object.prototype.toString, tc = Object.defineProperty, nc = Object.getOwnPropertyDescriptor, ic = function(r) {
        return typeof Array.isArray == "function" ? Array.isArray(r) : sc.call(r) === "[object Array]";
      }, uc = function(r) {
        if (!r || sc.call(r) !== "[object Object]") return false;
        var t = lt.call(r, "constructor"), n = r.constructor && r.constructor.prototype && lt.call(r.constructor.prototype, "isPrototypeOf");
        if (r.constructor && !t && !n) return false;
        var a;
        for (a in r) ;
        return typeof a > "u" || lt.call(r, a);
      }, ac = function(r, t) {
        tc && t.name === "__proto__" ? tc(r, t.name, { enumerable: true, configurable: true, value: t.newValue, writable: true }) : r[t.name] = t.newValue;
      }, oc = function(r, t) {
        if (t === "__proto__") if (lt.call(r, t)) {
          if (nc) return nc(r, t).value;
        } else return;
        return r[t];
      };
      cc.exports = function e() {
        var r, t, n, a, u, i, o = arguments[0], s = 1, l = arguments.length, c = false;
        for (typeof o == "boolean" && (c = o, o = arguments[1] || {}, s = 2), (o == null || typeof o != "object" && typeof o != "function") && (o = {}); s < l; ++s) if (r = arguments[s], r != null) for (t in r) n = oc(o, t), a = oc(r, t), o !== a && (c && a && (uc(a) || (u = ic(a))) ? (u ? (u = false, i = n && ic(n) ? n : []) : i = n && uc(n) ? n : {}, ac(o, { name: t, newValue: e(c, i, a) })) : typeof a < "u" && ac(o, { name: t, newValue: a }));
        return o;
      };
    });
    var Dc = C((XE, fc) => {
      fc.exports = (e) => {
        if (Object.prototype.toString.call(e) !== "[object Object]") return false;
        let r = Object.getPrototypeOf(e);
        return r === null || r === Object.prototype;
      };
    });
    var hc = C((QE, pc) => {
      var V0 = [].slice;
      pc.exports = j0;
      function j0(e, r) {
        var t;
        return n;
        function n() {
          var i = V0.call(arguments, 0), o = e.length > i.length, s;
          o && i.push(a);
          try {
            s = e.apply(null, i);
          } catch (l) {
            if (o && t) throw l;
            return a(l);
          }
          o || (s && typeof s.then == "function" ? s.then(u, a) : s instanceof Error ? a(s) : u(s));
        }
        function a() {
          t || (t = true, r.apply(null, arguments));
        }
        function u(i) {
          a(null, i);
        }
      }
    });
    var vc = C((ZE, gc) => {
      var mc = hc();
      gc.exports = Fc;
      Fc.wrap = mc;
      var dc = [].slice;
      function Fc() {
        var e = [], r = {};
        return r.run = t, r.use = n, r;
        function t() {
          var a = -1, u = dc.call(arguments, 0, -1), i = arguments[arguments.length - 1];
          if (typeof i != "function") throw new Error("Expected function as last argument, not " + i);
          o.apply(null, [null].concat(u));
          function o(s) {
            var l = e[++a], c = dc.call(arguments, 0), f = c.slice(1), p = u.length, d = -1;
            if (s) {
              i(s);
              return;
            }
            for (; ++d < p; ) (f[d] === null || f[d] === void 0) && (f[d] = u[d]);
            u = f, l ? mc(l, o).apply(null, u) : i.apply(null, [null].concat(u));
          }
        }
        function n(a) {
          if (typeof a != "function") throw new Error("Expected `fn` to be a function, not " + a);
          return e.push(a), r;
        }
      }
    });
    var yc = C((eC, bc) => {
      var er = {}.hasOwnProperty;
      bc.exports = $0;
      function $0(e) {
        return !e || typeof e != "object" ? "" : er.call(e, "position") || er.call(e, "type") ? Ec(e.position) : er.call(e, "start") || er.call(e, "end") ? Ec(e) : er.call(e, "line") || er.call(e, "column") ? Tn(e) : "";
      }
      function Tn(e) {
        return (!e || typeof e != "object") && (e = {}), Cc(e.line) + ":" + Cc(e.column);
      }
      function Ec(e) {
        return (!e || typeof e != "object") && (e = {}), Tn(e.start) + "-" + Tn(e.end);
      }
      function Cc(e) {
        return e && typeof e == "number" ? e : 1;
      }
    });
    var wc = C((rC, xc) => {
      var W0 = yc();
      xc.exports = qn;
      function Ac() {
      }
      Ac.prototype = Error.prototype;
      qn.prototype = new Ac();
      var ke = qn.prototype;
      ke.file = "";
      ke.name = "";
      ke.reason = "";
      ke.message = "";
      ke.stack = "";
      ke.fatal = null;
      ke.column = null;
      ke.line = null;
      function qn(e, r, t) {
        var n, a, u;
        typeof r == "string" && (t = r, r = null), n = H0(t), a = W0(r) || "1:1", u = { start: { line: null, column: null }, end: { line: null, column: null } }, r && r.position && (r = r.position), r && (r.start ? (u = r, r = r.start) : u.start = r), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = a, this.reason = e, this.line = r ? r.line : null, this.column = r ? r.column : null, this.location = u, this.source = n[0], this.ruleId = n[1];
      }
      function H0(e) {
        var r = [null, null], t;
        return typeof e == "string" && (t = e.indexOf(":"), t === -1 ? r[1] = e : (r[0] = e.slice(0, t), r[1] = e.slice(t + 1))), r;
      }
    });
    var kc = C((rr) => {
      rr.basename = K0;
      rr.dirname = J0;
      rr.extname = X0;
      rr.join = Q0;
      rr.sep = "/";
      function K0(e, r) {
        var t = 0, n = -1, a, u, i, o;
        if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
        if (xr(e), a = e.length, r === void 0 || !r.length || r.length > e.length) {
          for (; a--; ) if (e.charCodeAt(a) === 47) {
            if (i) {
              t = a + 1;
              break;
            }
          } else n < 0 && (i = true, n = a + 1);
          return n < 0 ? "" : e.slice(t, n);
        }
        if (r === e) return "";
        for (u = -1, o = r.length - 1; a--; ) if (e.charCodeAt(a) === 47) {
          if (i) {
            t = a + 1;
            break;
          }
        } else u < 0 && (i = true, u = a + 1), o > -1 && (e.charCodeAt(a) === r.charCodeAt(o--) ? o < 0 && (n = a) : (o = -1, n = u));
        return t === n ? n = u : n < 0 && (n = e.length), e.slice(t, n);
      }
      function J0(e) {
        var r, t, n;
        if (xr(e), !e.length) return ".";
        for (r = -1, n = e.length; --n; ) if (e.charCodeAt(n) === 47) {
          if (t) {
            r = n;
            break;
          }
        } else t || (t = true);
        return r < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : r === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, r);
      }
      function X0(e) {
        var r = -1, t = 0, n = -1, a = 0, u, i, o;
        for (xr(e), o = e.length; o--; ) {
          if (i = e.charCodeAt(o), i === 47) {
            if (u) {
              t = o + 1;
              break;
            }
            continue;
          }
          n < 0 && (u = true, n = o + 1), i === 46 ? r < 0 ? r = o : a !== 1 && (a = 1) : r > -1 && (a = -1);
        }
        return r < 0 || n < 0 || a === 0 || a === 1 && r === n - 1 && r === t + 1 ? "" : e.slice(r, n);
      }
      function Q0() {
        for (var e = -1, r; ++e < arguments.length; ) xr(arguments[e]), arguments[e] && (r = r === void 0 ? arguments[e] : r + "/" + arguments[e]);
        return r === void 0 ? "." : Z0(r);
      }
      function Z0(e) {
        var r, t;
        return xr(e), r = e.charCodeAt(0) === 47, t = em(e, !r), !t.length && !r && (t = "."), t.length && e.charCodeAt(e.length - 1) === 47 && (t += "/"), r ? "/" + t : t;
      }
      function em(e, r) {
        for (var t = "", n = 0, a = -1, u = 0, i = -1, o, s; ++i <= e.length; ) {
          if (i < e.length) o = e.charCodeAt(i);
          else {
            if (o === 47) break;
            o = 47;
          }
          if (o === 47) {
            if (!(a === i - 1 || u === 1)) if (a !== i - 1 && u === 2) {
              if (t.length < 2 || n !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
                if (t.length > 2) {
                  if (s = t.lastIndexOf("/"), s !== t.length - 1) {
                    s < 0 ? (t = "", n = 0) : (t = t.slice(0, s), n = t.length - 1 - t.lastIndexOf("/")), a = i, u = 0;
                    continue;
                  }
                } else if (t.length) {
                  t = "", n = 0, a = i, u = 0;
                  continue;
                }
              }
              r && (t = t.length ? t + "/.." : "..", n = 2);
            } else t.length ? t += "/" + e.slice(a + 1, i) : t = e.slice(a + 1, i), n = i - a - 1;
            a = i, u = 0;
          } else o === 46 && u > -1 ? u++ : u = -1;
        }
        return t;
      }
      function xr(e) {
        if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
      }
    });
    var Tc = C((Bc) => {
      Bc.cwd = rm;
      function rm() {
        return "/";
      }
    });
    var Sc = C((iC, _c) => {
      var se = kc(), tm = Tc(), nm = Bn();
      _c.exports = ge;
      var im = {}.hasOwnProperty, _n = ["history", "path", "basename", "stem", "extname", "dirname"];
      ge.prototype.toString = dm;
      Object.defineProperty(ge.prototype, "path", { get: um, set: am });
      Object.defineProperty(ge.prototype, "dirname", { get: om, set: sm });
      Object.defineProperty(ge.prototype, "basename", { get: cm, set: lm });
      Object.defineProperty(ge.prototype, "extname", { get: fm, set: Dm });
      Object.defineProperty(ge.prototype, "stem", { get: pm, set: hm });
      function ge(e) {
        var r, t;
        if (!e) e = {};
        else if (typeof e == "string" || nm(e)) e = { contents: e };
        else if ("message" in e && "messages" in e) return e;
        if (!(this instanceof ge)) return new ge(e);
        for (this.data = {}, this.messages = [], this.history = [], this.cwd = tm.cwd(), t = -1; ++t < _n.length; ) r = _n[t], im.call(e, r) && (this[r] = e[r]);
        for (r in e) _n.indexOf(r) < 0 && (this[r] = e[r]);
      }
      function um() {
        return this.history[this.history.length - 1];
      }
      function am(e) {
        On(e, "path"), this.path !== e && this.history.push(e);
      }
      function om() {
        return typeof this.path == "string" ? se.dirname(this.path) : void 0;
      }
      function sm(e) {
        qc(this.path, "dirname"), this.path = se.join(e || "", this.basename);
      }
      function cm() {
        return typeof this.path == "string" ? se.basename(this.path) : void 0;
      }
      function lm(e) {
        On(e, "basename"), Sn(e, "basename"), this.path = se.join(this.dirname || "", e);
      }
      function fm() {
        return typeof this.path == "string" ? se.extname(this.path) : void 0;
      }
      function Dm(e) {
        if (Sn(e, "extname"), qc(this.path, "extname"), e) {
          if (e.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
          if (e.indexOf(".", 1) > -1) throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = se.join(this.dirname, this.stem + (e || ""));
      }
      function pm() {
        return typeof this.path == "string" ? se.basename(this.path, this.extname) : void 0;
      }
      function hm(e) {
        On(e, "stem"), Sn(e, "stem"), this.path = se.join(this.dirname || "", e + (this.extname || ""));
      }
      function dm(e) {
        return (this.contents || "").toString(e);
      }
      function Sn(e, r) {
        if (e && e.indexOf(se.sep) > -1) throw new Error("`" + r + "` cannot be a path: did not expect `" + se.sep + "`");
      }
      function On(e, r) {
        if (!e) throw new Error("`" + r + "` cannot be empty");
      }
      function qc(e, r) {
        if (!e) throw new Error("Setting `" + r + "` requires `path` to be set too");
      }
    });
    var Lc = C((uC, Oc) => {
      var mm = wc(), ft = Sc();
      Oc.exports = ft;
      ft.prototype.message = Fm;
      ft.prototype.info = vm;
      ft.prototype.fail = gm;
      function Fm(e, r, t) {
        var n = new mm(e, r, t);
        return this.path && (n.name = this.path + ":" + n.name, n.file = this.path), n.fatal = false, this.messages.push(n), n;
      }
      function gm() {
        var e = this.message.apply(this, arguments);
        throw e.fatal = true, e;
      }
      function vm() {
        var e = this.message.apply(this, arguments);
        return e.fatal = null, e;
      }
    });
    var Ic = C((aC, Pc) => {
      Pc.exports = Lc();
    });
    var jc = C((oC, Vc) => {
      var Nc = ec(), Em = Bn(), Dt = lc(), Rc = Dc(), Yc = vc(), wr = Ic();
      Vc.exports = Gc().freeze();
      var Cm = [].slice, bm = {}.hasOwnProperty, ym = Yc().use(Am).use(xm).use(wm);
      function Am(e, r) {
        r.tree = e.parse(r.file);
      }
      function xm(e, r, t) {
        e.run(r.tree, r.file, n);
        function n(a, u, i) {
          a ? t(a) : (r.tree = u, r.file = i, t());
        }
      }
      function wm(e, r) {
        var t = e.stringify(r.tree, r.file);
        t == null || (typeof t == "string" || Em(t) ? ("value" in r.file && (r.file.value = t), r.file.contents = t) : r.file.result = t);
      }
      function Gc() {
        var e = [], r = Yc(), t = {}, n = -1, a;
        return u.data = o, u.freeze = i, u.attachers = e, u.use = s, u.parse = c, u.stringify = d, u.run = f, u.runSync = p, u.process = D, u.processSync = h, u;
        function u() {
          for (var m = Gc(), F = -1; ++F < e.length; ) m.use.apply(null, e[F]);
          return m.data(Dt(true, {}, t)), m;
        }
        function i() {
          var m, F;
          if (a) return u;
          for (; ++n < e.length; ) m = e[n], m[1] !== false && (m[1] === true && (m[1] = void 0), F = m[0].apply(u, m.slice(1)), typeof F == "function" && r.use(F));
          return a = true, n = 1 / 0, u;
        }
        function o(m, F) {
          return typeof m == "string" ? arguments.length === 2 ? (In("data", a), t[m] = F, u) : bm.call(t, m) && t[m] || null : m ? (In("data", a), t = m, u) : t;
        }
        function s(m) {
          var F;
          if (In("use", a), m != null) if (typeof m == "function") b.apply(null, arguments);
          else if (typeof m == "object") "length" in m ? B(m) : y(m);
          else throw new Error("Expected usable value, not `" + m + "`");
          return F && (t.settings = Dt(t.settings || {}, F)), u;
          function y(g) {
            B(g.plugins), g.settings && (F = Dt(F || {}, g.settings));
          }
          function E(g) {
            if (typeof g == "function") b(g);
            else if (typeof g == "object") "length" in g ? b.apply(null, g) : y(g);
            else throw new Error("Expected usable value, not `" + g + "`");
          }
          function B(g) {
            var A = -1;
            if (g != null) if (typeof g == "object" && "length" in g) for (; ++A < g.length; ) E(g[A]);
            else throw new Error("Expected a list of plugins, not `" + g + "`");
          }
          function b(g, A) {
            var x = l(g);
            x ? (Rc(x[1]) && Rc(A) && (A = Dt(true, x[1], A)), x[1] = A) : e.push(Cm.call(arguments));
          }
        }
        function l(m) {
          for (var F = -1; ++F < e.length; ) if (e[F][0] === m) return e[F];
        }
        function c(m) {
          var F = wr(m), y;
          return i(), y = u.Parser, Ln("parse", y), Uc(y, "parse") ? new y(String(F), F).parse() : y(String(F), F);
        }
        function f(m, F, y) {
          if (Mc(m), i(), !y && typeof F == "function" && (y = F, F = null), !y) return new Promise(E);
          E(null, y);
          function E(B, b) {
            r.run(m, wr(F), g);
            function g(A, x, v) {
              x = x || m, A ? b(A) : B ? B(x) : y(null, x, v);
            }
          }
        }
        function p(m, F) {
          var y, E;
          return f(m, F, B), zc("runSync", "run", E), y;
          function B(b, g) {
            E = true, y = g, Nc(b);
          }
        }
        function d(m, F) {
          var y = wr(F), E;
          return i(), E = u.Compiler, Pn("stringify", E), Mc(m), Uc(E, "compile") ? new E(m, y).compile() : E(m, y);
        }
        function D(m, F) {
          if (i(), Ln("process", u.Parser), Pn("process", u.Compiler), !F) return new Promise(y);
          y(null, F);
          function y(E, B) {
            var b = wr(m);
            ym.run(u, { file: b }, g);
            function g(A) {
              A ? B(A) : E ? E(b) : F(null, b);
            }
          }
        }
        function h(m) {
          var F, y;
          return i(), Ln("processSync", u.Parser), Pn("processSync", u.Compiler), F = wr(m), D(F, E), zc("processSync", "process", y), F;
          function E(B) {
            y = true, Nc(B);
          }
        }
      }
      function Uc(e, r) {
        return typeof e == "function" && e.prototype && (km(e.prototype) || r in e.prototype);
      }
      function km(e) {
        var r;
        for (r in e) return true;
        return false;
      }
      function Ln(e, r) {
        if (typeof r != "function") throw new Error("Cannot `" + e + "` without `Parser`");
      }
      function Pn(e, r) {
        if (typeof r != "function") throw new Error("Cannot `" + e + "` without `Compiler`");
      }
      function In(e, r) {
        if (r) throw new Error("Cannot invoke `" + e + "` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.");
      }
      function Mc(e) {
        if (!e || typeof e.type != "string") throw new Error("Expected node, got `" + e + "`");
      }
      function zc(e, r, t) {
        if (!t) throw new Error("`" + e + "` finished async. Use `" + r + "` instead");
      }
    });
    var Um = {};
    Mn(Um, { languages: () => Mi, options: () => zi, parsers: () => Rn, printers: () => Rm });
    var dl = (e, r, t, n) => {
      if (!(e && r == null)) return r.replaceAll ? r.replaceAll(t, n) : t.global ? r.replace(t, n) : r.split(t).join(n);
    }, N = dl;
    var ml = (e, r, t) => {
      if (!(e && r == null)) return Array.isArray(r) || typeof r == "string" ? r[t < 0 ? r.length + t : t] : r.at(t);
    }, z = ml;
    var Ri = Ue(Br());
    function le(e) {
      if (typeof e != "string") throw new TypeError("Expected a string");
      return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
    }
    var $ = "string", W = "array", Ce = "cursor", re = "indent", te = "align", fe = "trim", K = "group", J = "fill", X = "if-break", De = "indent-if-break", pe = "line-suffix", he = "line-suffix-boundary", H = "line", de = "label", ne = "break-parent", Tr = /* @__PURE__ */ new Set([Ce, re, te, fe, K, J, X, De, pe, he, H, de, ne]);
    function gl(e) {
      if (typeof e == "string") return $;
      if (Array.isArray(e)) return W;
      if (!e) return;
      let { type: r } = e;
      if (Tr.has(r)) return r;
    }
    var Y = gl;
    var vl = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
    function El(e) {
      let r = e === null ? "null" : typeof e;
      if (r !== "string" && r !== "object") return `Unexpected doc '${r}', 
Expected it to be 'string' or 'object'.`;
      if (Y(e)) throw new Error("doc is valid.");
      let t = Object.prototype.toString.call(e);
      if (t !== "[object Object]") return `Unexpected doc '${t}'.`;
      let n = vl([...Tr].map((a) => `'${a}'`));
      return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
    }
    var ht = class extends Error {
      name = "InvalidDocError";
      constructor(r) {
        super(El(r)), this.doc = r;
      }
    }, Te = ht;
    var $n = {};
    function Cl(e, r, t, n) {
      let a = [e];
      for (; a.length > 0; ) {
        let u = a.pop();
        if (u === $n) {
          t(a.pop());
          continue;
        }
        t && a.push(u, $n);
        let i = Y(u);
        if (!i) throw new Te(u);
        if ((r == null ? void 0 : r(u)) !== false) switch (i) {
          case W:
          case J: {
            let o = i === W ? u : u.parts;
            for (let s = o.length, l = s - 1; l >= 0; --l) a.push(o[l]);
            break;
          }
          case X:
            a.push(u.flatContents, u.breakContents);
            break;
          case K:
            if (n && u.expandedStates) for (let o = u.expandedStates.length, s = o - 1; s >= 0; --s) a.push(u.expandedStates[s]);
            else a.push(u.contents);
            break;
          case te:
          case re:
          case De:
          case de:
          case pe:
            a.push(u.contents);
            break;
          case $:
          case Ce:
          case fe:
          case he:
          case H:
          case ne:
            break;
          default:
            throw new Te(u);
        }
      }
    }
    var Wn = Cl;
    var Hn = () => {
    }, qr = Hn;
    function tr(e) {
      return { type: re, contents: e };
    }
    function be(e, r) {
      return { type: te, contents: r, n: e };
    }
    function Me(e, r = {}) {
      return qr(r.expandedStates), { type: K, id: r.id, contents: e, break: !!r.shouldBreak, expandedStates: r.expandedStates };
    }
    function _e(e) {
      return be({ type: "root" }, e);
    }
    function ze(e) {
      return { type: J, parts: e };
    }
    function Kn(e, r = "", t = {}) {
      return { type: X, breakContents: e, flatContents: r, groupId: t.groupId };
    }
    var nr = { type: ne };
    var ir = { type: H, hard: true }, bl = { type: H, hard: true, literal: true }, _r = { type: H }, Sr = { type: H, soft: true }, P = [ir, nr], ur = [bl, nr];
    function Or(e, r) {
      let t = [];
      for (let n = 0; n < r.length; n++) n !== 0 && t.push(e), t.push(r[n]);
      return t;
    }
    function yl(e, r) {
      if (typeof e == "string") return r(e);
      let t = /* @__PURE__ */ new Map();
      return n(e);
      function n(u) {
        if (t.has(u)) return t.get(u);
        let i = a(u);
        return t.set(u, i), i;
      }
      function a(u) {
        switch (Y(u)) {
          case W:
            return r(u.map(n));
          case J:
            return r({ ...u, parts: u.parts.map(n) });
          case X:
            return r({ ...u, breakContents: n(u.breakContents), flatContents: n(u.flatContents) });
          case K: {
            let { expandedStates: i, contents: o } = u;
            return i ? (i = i.map(n), o = i[0]) : o = n(o), r({ ...u, contents: o, expandedStates: i });
          }
          case te:
          case re:
          case De:
          case de:
          case pe:
            return r({ ...u, contents: n(u.contents) });
          case $:
          case Ce:
          case fe:
          case he:
          case H:
          case ne:
            return r(u);
          default:
            throw new Te(u);
        }
      }
    }
    function Jn(e) {
      if (e.length > 0) {
        let r = z(false, e, -1);
        !r.expandedStates && !r.break && (r.break = "propagated");
      }
      return null;
    }
    function Xn(e) {
      let r = /* @__PURE__ */ new Set(), t = [];
      function n(u) {
        if (u.type === ne && Jn(t), u.type === K) {
          if (t.push(u), r.has(u)) return false;
          r.add(u);
        }
      }
      function a(u) {
        u.type === K && t.pop().break && Jn(t);
      }
      Wn(e, n, a, true);
    }
    function ye(e, r = ur) {
      return yl(e, (t) => typeof t == "string" ? Or(r, t.split(`
`)) : t);
    }
    function Al(e, r) {
      let t = e.match(new RegExp(`(${le(r)})+`, "gu"));
      return t === null ? 0 : t.reduce((n, a) => Math.max(n, a.length / r.length), 0);
    }
    var Lr = Al;
    function xl(e, r) {
      let t = e.match(new RegExp(`(${le(r)})+`, "gu"));
      if (t === null) return 0;
      let n = /* @__PURE__ */ new Map(), a = 0;
      for (let u of t) {
        let i = u.length / r.length;
        n.set(i, true), i > a && (a = i);
      }
      for (let u = 1; u < a; u++) if (!n.get(u)) return u;
      return a + 1;
    }
    var Qn = xl;
    var Pr = "'", Zn = '"';
    function wl(e, r) {
      let t = r === true || r === Pr ? Pr : Zn, n = t === Pr ? Zn : Pr, a = 0, u = 0;
      for (let i of e) i === t ? a++ : i === n && u++;
      return a > u ? n : t;
    }
    var ei = wl;
    var dt = class extends Error {
      name = "UnexpectedNodeError";
      constructor(r, t, n = "type") {
        super(`Unexpected ${t} node ${n}: ${JSON.stringify(r[n])}.`), this.node = r;
      }
    }, ri = dt;
    var ai = Ue(Br());
    function kl(e) {
      return (e == null ? void 0 : e.type) === "front-matter";
    }
    var ti = kl;
    var ar = 3;
    function Bl(e) {
      let r = e.slice(0, ar);
      if (r !== "---" && r !== "+++") return;
      let t = e.indexOf(`
`, ar);
      if (t === -1) return;
      let n = e.slice(ar, t).trim(), a = e.indexOf(`
${r}`, t), u = n;
      if (u || (u = r === "+++" ? "toml" : "yaml"), a === -1 && r === "---" && u === "yaml" && (a = e.indexOf(`
...`, t)), a === -1) return;
      let i = a + 1 + ar, o = e.charAt(i + 1);
      if (!/\s?/u.test(o)) return;
      let s = e.slice(0, i);
      return { type: "front-matter", language: u, explicitLanguage: n, value: e.slice(t + 1, a), startDelimiter: r, endDelimiter: s.slice(-3), raw: s };
    }
    function Tl(e) {
      let r = Bl(e);
      if (!r) return { content: e };
      let { raw: t } = r;
      return { frontMatter: r, content: N(false, t, /[^\n]/gu, " ") + e.slice(t.length) };
    }
    var or = Tl;
    var ni = ["format", "prettier"];
    function mt(e) {
      let r = `@(${ni.join("|")})`, t = new RegExp([`<!--\\s*${r}\\s*-->`, `\\{\\s*\\/\\*\\s*${r}\\s*\\*\\/\\s*\\}`, `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${r}[^\\S
]*($|
)[\\s\\S]*
.*-->`].join("|"), "mu"), n = e.match(t);
      return (n == null ? void 0 : n.index) === 0;
    }
    var ii = (e) => mt(or(e).content.trimStart()), ui = (e) => {
      let r = or(e), t = `<!-- @${ni[0]} -->`;
      return r.frontMatter ? `${r.frontMatter.raw}

${t}

${r.content}` : `${t}

${r.content}`;
    };
    var ql = /* @__PURE__ */ new Set(["position", "raw"]);
    function oi(e, r, t) {
      if ((e.type === "front-matter" || e.type === "code" || e.type === "yaml" || e.type === "import" || e.type === "export" || e.type === "jsx") && delete r.value, e.type === "list" && delete r.isAligned, (e.type === "list" || e.type === "listItem") && delete r.spread, e.type === "text") return null;
      if (e.type === "inlineCode" && (r.value = N(false, e.value, `
`, " ")), e.type === "wikiLink" && (r.value = N(false, e.value.trim(), /[\t\n]+/gu, " ")), (e.type === "definition" || e.type === "linkReference" || e.type === "imageReference") && (r.label = (0, ai.default)(e.label)), (e.type === "link" || e.type === "image") && e.url && e.url.includes("(")) for (let n of "<>") r.url = N(false, e.url, n, encodeURIComponent(n));
      if ((e.type === "definition" || e.type === "link" || e.type === "image") && e.title && (r.title = N(false, e.title, /\\(?=["')])/gu, "")), (t == null ? void 0 : t.type) === "root" && t.children.length > 0 && (t.children[0] === e || ti(t.children[0]) && t.children[1] === e) && e.type === "html" && mt(e.value)) return null;
    }
    oi.ignoredProperties = ql;
    var si = oi;
    var ci = /(?:[\u{2ea}-\u{2eb}\u{1100}-\u{11ff}\u{2e80}-\u{2e99}\u{2e9b}-\u{2ef3}\u{2f00}-\u{2fd5}\u{2ff0}-\u{303f}\u{3041}-\u{3096}\u{3099}-\u{30ff}\u{3105}-\u{312f}\u{3131}-\u{318e}\u{3190}-\u{4dbf}\u{4e00}-\u{9fff}\u{a700}-\u{a707}\u{a960}-\u{a97c}\u{ac00}-\u{d7a3}\u{d7b0}-\u{d7c6}\u{d7cb}-\u{d7fb}\u{f900}-\u{fa6d}\u{fa70}-\u{fad9}\u{fe10}-\u{fe1f}\u{fe30}-\u{fe6f}\u{ff00}-\u{ffef}\u{16fe3}\u{1aff0}-\u{1aff3}\u{1aff5}-\u{1affb}\u{1affd}-\u{1affe}\u{1b000}-\u{1b122}\u{1b132}\u{1b150}-\u{1b152}\u{1b155}\u{1b164}-\u{1b167}\u{1f200}\u{1f250}-\u{1f251}\u{20000}-\u{2a6df}\u{2a700}-\u{2b739}\u{2b740}-\u{2b81d}\u{2b820}-\u{2cea1}\u{2ceb0}-\u{2ebe0}\u{2f800}-\u{2fa1d}\u{30000}-\u{3134a}\u{31350}-\u{323af}])(?:[\u{fe00}-\u{fe0f}\u{e0100}-\u{e01ef}])?/u, Se = /(?:[\u{21}-\u{2f}\u{3a}-\u{40}\u{5b}-\u{60}\u{7b}-\u{7e}]|\p{General_Category=Connector_Punctuation}|\p{General_Category=Dash_Punctuation}|\p{General_Category=Close_Punctuation}|\p{General_Category=Final_Punctuation}|\p{General_Category=Initial_Punctuation}|\p{General_Category=Other_Punctuation}|\p{General_Category=Open_Punctuation})/u;
    async function _l(e, r) {
      if (e.language === "yaml") {
        let t = e.value.trim(), n = t ? await r(t, { parser: "yaml" }) : "";
        return _e([e.startDelimiter, e.explicitLanguage, P, n, n ? P : "", e.endDelimiter]);
      }
    }
    var li = _l;
    var Sl = (e) => String(e).split(/[/\\]/u).pop();
    function fi(e, r) {
      if (!r) return;
      let t = Sl(r).toLowerCase();
      return e.find(({ filenames: n }) => n == null ? void 0 : n.some((a) => a.toLowerCase() === t)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.some((a) => t.endsWith(a)));
    }
    function Ol(e, r) {
      if (r) return e.find(({ name: t }) => t.toLowerCase() === r) ?? e.find(({ aliases: t }) => t == null ? void 0 : t.includes(r)) ?? e.find(({ extensions: t }) => t == null ? void 0 : t.includes(`.${r}`));
    }
    function Ll(e, r) {
      let t = e.plugins.flatMap((a) => a.languages ?? []), n = Ol(t, r.language) ?? fi(t, r.physicalFile) ?? fi(t, r.file) ?? (r.physicalFile, void 0);
      return n == null ? void 0 : n.parsers[0];
    }
    var Di = Ll;
    var Pl = new Proxy(() => {
    }, { get: () => Pl });
    function Oe(e) {
      return e.position.start.offset;
    }
    function Le(e) {
      return e.position.end.offset;
    }
    var Ft = /* @__PURE__ */ new Set(["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"]), Ir = /* @__PURE__ */ new Set([...Ft, "tableCell", "paragraph", "heading"]), Ge = "non-cjk", ie = "cj-letter", Pe = "k-letter", sr = "cjk-punctuation", Il = /\p{Script_Extensions=Hangul}/u;
    function Nr(e) {
      let r = [], t = e.split(/([\t\n ]+)/u);
      for (let [a, u] of t.entries()) {
        if (a % 2 === 1) {
          r.push({ type: "whitespace", value: /\n/u.test(u) ? `
` : " " });
          continue;
        }
        if ((a === 0 || a === t.length - 1) && u === "") continue;
        let i = u.split(new RegExp(`(${ci.source})`, "u"));
        for (let [o, s] of i.entries()) if (!((o === 0 || o === i.length - 1) && s === "")) {
          if (o % 2 === 0) {
            s !== "" && n({ type: "word", value: s, kind: Ge, isCJ: false, hasLeadingPunctuation: Se.test(s[0]), hasTrailingPunctuation: Se.test(z(false, s, -1)) });
            continue;
          }
          if (Se.test(s)) {
            n({ type: "word", value: s, kind: sr, isCJ: true, hasLeadingPunctuation: true, hasTrailingPunctuation: true });
            continue;
          }
          if (Il.test(s)) {
            n({ type: "word", value: s, kind: Pe, isCJ: false, hasLeadingPunctuation: false, hasTrailingPunctuation: false });
            continue;
          }
          n({ type: "word", value: s, kind: ie, isCJ: true, hasLeadingPunctuation: false, hasTrailingPunctuation: false });
        }
      }
      return r;
      function n(a) {
        let u = z(false, r, -1);
        (u == null ? void 0 : u.type) === "word" && !i(Ge, sr) && ![u.value, a.value].some((o) => /\u3000/u.test(o)) && r.push({ type: "whitespace", value: "" }), r.push(a);
        function i(o, s) {
          return u.kind === o && a.kind === s || u.kind === s && a.kind === o;
        }
      }
    }
    function Ye(e, r) {
      let t = r.originalText.slice(e.position.start.offset, e.position.end.offset), { numberText: n, leadingSpaces: a } = t.match(/^\s*(?<numberText>\d+)(\.|\))(?<leadingSpaces>\s*)/u).groups;
      return { number: Number(n), leadingSpaces: a };
    }
    function pi(e, r) {
      return !e.ordered || e.children.length < 2 || Ye(e.children[1], r).number !== 1 ? false : Ye(e.children[0], r).number !== 0 ? true : e.children.length > 2 && Ye(e.children[2], r).number === 1;
    }
    function Rr(e, r) {
      let { value: t } = e;
      return e.position.end.offset === r.length && t.endsWith(`
`) && r.endsWith(`
`) ? t.slice(0, -1) : t;
    }
    function Ae(e, r) {
      return function t(n, a, u) {
        let i = { ...r(n, a, u) };
        return i.children && (i.children = i.children.map((o, s) => t(o, s, [i, ...u]))), i;
      }(e, null, []);
    }
    function gt(e) {
      if ((e == null ? void 0 : e.type) !== "link" || e.children.length !== 1) return false;
      let [r] = e.children;
      return Oe(e) === Oe(r) && Le(e) === Le(r);
    }
    function Nl(e, r) {
      let { node: t } = e;
      if (t.type === "code" && t.lang !== null) {
        let n = Di(r, { language: t.lang });
        if (n) return async (a) => {
          let u = r.__inJsTemplate ? "~" : "`", i = u.repeat(Math.max(3, Lr(t.value, u) + 1)), o = { parser: n };
          t.lang === "ts" || t.lang === "typescript" ? o.filepath = "dummy.ts" : t.lang === "tsx" && (o.filepath = "dummy.tsx");
          let s = await a(Rr(t, r.originalText), o);
          return _e([i, t.lang, t.meta ? " " + t.meta : "", P, ye(s), P, i]);
        };
      }
      switch (t.type) {
        case "front-matter":
          return (n) => li(t, n);
        case "import":
        case "export":
          return (n) => n(t.value, { parser: "babel" });
        case "jsx":
          return (n) => n(`<$>${t.value}</$>`, { parser: "__js_expression", rootMarker: "mdx" });
      }
      return null;
    }
    var hi = Nl;
    var cr = null;
    function lr(e) {
      if (cr !== null && typeof cr.property) {
        let r = cr;
        return cr = lr.prototype = null, r;
      }
      return cr = lr.prototype = e ?? /* @__PURE__ */ Object.create(null), new lr();
    }
    var Rl = 10;
    for (let e = 0; e <= Rl; e++) lr();
    function vt(e) {
      return lr(e);
    }
    function Ul(e, r = "type") {
      vt(e);
      function t(n) {
        let a = n[r], u = e[a];
        if (!Array.isArray(u)) throw Object.assign(new Error(`Missing visitor keys for '${a}'.`), { node: n });
        return u;
      }
      return t;
    }
    var di = Ul;
    var Ml = { "front-matter": [], root: ["children"], paragraph: ["children"], sentence: ["children"], word: [], whitespace: [], emphasis: ["children"], strong: ["children"], delete: ["children"], inlineCode: [], wikiLink: [], link: ["children"], image: [], blockquote: ["children"], heading: ["children"], code: [], html: [], list: ["children"], thematicBreak: [], linkReference: ["children"], imageReference: [], definition: [], footnote: ["children"], footnoteReference: [], footnoteDefinition: ["children"], table: ["children"], tableCell: ["children"], break: [], liquidNode: [], import: [], export: [], esComment: [], jsx: [], math: [], inlineMath: [], tableRow: ["children"], listItem: ["children"], text: [] }, mi = Ml;
    var zl = di(mi), Fi = zl;
    function gi(e) {
      switch (e) {
        case "cr":
          return "\r";
        case "crlf":
          return `\r
`;
        default:
          return `
`;
      }
    }
    var vi = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
    function Ei(e) {
      return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
    }
    function Ci(e) {
      return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
    }
    var bi = (e) => !(Ei(e) || Ci(e));
    var Yl = /[^\x20-\x7F]/u;
    function Gl(e) {
      if (!e) return 0;
      if (!Yl.test(e)) return e.length;
      e = e.replace(vi(), "  ");
      let r = 0;
      for (let t of e) {
        let n = t.codePointAt(0);
        n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (r += bi(n) ? 1 : 2);
      }
      return r;
    }
    var fr = Gl;
    var G = Symbol("MODE_BREAK"), ue = Symbol("MODE_FLAT"), Ve = Symbol("cursor"), Et = Symbol("DOC_FILL_PRINTED_LENGTH");
    function yi() {
      return { value: "", length: 0, queue: [] };
    }
    function Vl(e, r) {
      return Ct(e, { type: "indent" }, r);
    }
    function jl(e, r, t) {
      return r === Number.NEGATIVE_INFINITY ? e.root || yi() : r < 0 ? Ct(e, { type: "dedent" }, t) : r ? r.type === "root" ? { ...e, root: e } : Ct(e, { type: typeof r == "string" ? "stringAlign" : "numberAlign", n: r }, t) : e;
    }
    function Ct(e, r, t) {
      let n = r.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, r], a = "", u = 0, i = 0, o = 0;
      for (let D of n) switch (D.type) {
        case "indent":
          c(), t.useTabs ? s(1) : l(t.tabWidth);
          break;
        case "stringAlign":
          c(), a += D.n, u += D.n.length;
          break;
        case "numberAlign":
          i += 1, o += D.n;
          break;
        default:
          throw new Error(`Unexpected type '${D.type}'`);
      }
      return p(), { ...e, value: a, length: u, queue: n };
      function s(D) {
        a += "	".repeat(D), u += t.tabWidth * D;
      }
      function l(D) {
        a += " ".repeat(D), u += D;
      }
      function c() {
        t.useTabs ? f() : p();
      }
      function f() {
        i > 0 && s(i), d();
      }
      function p() {
        o > 0 && l(o), d();
      }
      function d() {
        i = 0, o = 0;
      }
    }
    function bt(e) {
      let r = 0, t = 0, n = e.length;
      e: for (; n--; ) {
        let a = e[n];
        if (a === Ve) {
          t++;
          continue;
        }
        for (let u = a.length - 1; u >= 0; u--) {
          let i = a[u];
          if (i === " " || i === "	") r++;
          else {
            e[n] = a.slice(0, u + 1);
            break e;
          }
        }
      }
      if (r > 0 || t > 0) for (e.length = n + 1; t-- > 0; ) e.push(Ve);
      return r;
    }
    function Ur(e, r, t, n, a, u) {
      if (t === Number.POSITIVE_INFINITY) return true;
      let i = r.length, o = [e], s = [];
      for (; t >= 0; ) {
        if (o.length === 0) {
          if (i === 0) return true;
          o.push(r[--i]);
          continue;
        }
        let { mode: l, doc: c } = o.pop(), f = Y(c);
        switch (f) {
          case $:
            s.push(c), t -= fr(c);
            break;
          case W:
          case J: {
            let p = f === W ? c : c.parts, d = c[Et] ?? 0;
            for (let D = p.length - 1; D >= d; D--) o.push({ mode: l, doc: p[D] });
            break;
          }
          case re:
          case te:
          case De:
          case de:
            o.push({ mode: l, doc: c.contents });
            break;
          case fe:
            t += bt(s);
            break;
          case K: {
            if (u && c.break) return false;
            let p = c.break ? G : l, d = c.expandedStates && p === G ? z(false, c.expandedStates, -1) : c.contents;
            o.push({ mode: p, doc: d });
            break;
          }
          case X: {
            let d = (c.groupId ? a[c.groupId] || ue : l) === G ? c.breakContents : c.flatContents;
            d && o.push({ mode: l, doc: d });
            break;
          }
          case H:
            if (l === G || c.hard) return true;
            c.soft || (s.push(" "), t--);
            break;
          case pe:
            n = true;
            break;
          case he:
            if (n) return false;
            break;
        }
      }
      return false;
    }
    function Ai(e, r) {
      let t = {}, n = r.printWidth, a = gi(r.endOfLine), u = 0, i = [{ ind: yi(), mode: G, doc: e }], o = [], s = false, l = [], c = 0;
      for (Xn(e); i.length > 0; ) {
        let { ind: p, mode: d, doc: D } = i.pop();
        switch (Y(D)) {
          case $: {
            let h = a !== `
` ? N(false, D, `
`, a) : D;
            o.push(h), i.length > 0 && (u += fr(h));
            break;
          }
          case W:
            for (let h = D.length - 1; h >= 0; h--) i.push({ ind: p, mode: d, doc: D[h] });
            break;
          case Ce:
            if (c >= 2) throw new Error("There are too many 'cursor' in doc.");
            o.push(Ve), c++;
            break;
          case re:
            i.push({ ind: Vl(p, r), mode: d, doc: D.contents });
            break;
          case te:
            i.push({ ind: jl(p, D.n, r), mode: d, doc: D.contents });
            break;
          case fe:
            u -= bt(o);
            break;
          case K:
            switch (d) {
              case ue:
                if (!s) {
                  i.push({ ind: p, mode: D.break ? G : ue, doc: D.contents });
                  break;
                }
              case G: {
                s = false;
                let h = { ind: p, mode: ue, doc: D.contents }, m = n - u, F = l.length > 0;
                if (!D.break && Ur(h, i, m, F, t)) i.push(h);
                else if (D.expandedStates) {
                  let y = z(false, D.expandedStates, -1);
                  if (D.break) {
                    i.push({ ind: p, mode: G, doc: y });
                    break;
                  } else for (let E = 1; E < D.expandedStates.length + 1; E++) if (E >= D.expandedStates.length) {
                    i.push({ ind: p, mode: G, doc: y });
                    break;
                  } else {
                    let B = D.expandedStates[E], b = { ind: p, mode: ue, doc: B };
                    if (Ur(b, i, m, F, t)) {
                      i.push(b);
                      break;
                    }
                  }
                } else i.push({ ind: p, mode: G, doc: D.contents });
                break;
              }
            }
            D.id && (t[D.id] = z(false, i, -1).mode);
            break;
          case J: {
            let h = n - u, m = D[Et] ?? 0, { parts: F } = D, y = F.length - m;
            if (y === 0) break;
            let E = F[m + 0], B = F[m + 1], b = { ind: p, mode: ue, doc: E }, g = { ind: p, mode: G, doc: E }, A = Ur(b, [], h, l.length > 0, t, true);
            if (y === 1) {
              A ? i.push(b) : i.push(g);
              break;
            }
            let x = { ind: p, mode: ue, doc: B }, v = { ind: p, mode: G, doc: B };
            if (y === 2) {
              A ? i.push(x, b) : i.push(v, g);
              break;
            }
            let w = F[m + 2], k = { ind: p, mode: d, doc: { ...D, [Et]: m + 2 } };
            Ur({ ind: p, mode: ue, doc: [E, B, w] }, [], h, l.length > 0, t, true) ? i.push(k, x, b) : A ? i.push(k, v, b) : i.push(k, v, g);
            break;
          }
          case X:
          case De: {
            let h = D.groupId ? t[D.groupId] : d;
            if (h === G) {
              let m = D.type === X ? D.breakContents : D.negate ? D.contents : tr(D.contents);
              m && i.push({ ind: p, mode: d, doc: m });
            }
            if (h === ue) {
              let m = D.type === X ? D.flatContents : D.negate ? tr(D.contents) : D.contents;
              m && i.push({ ind: p, mode: d, doc: m });
            }
            break;
          }
          case pe:
            l.push({ ind: p, mode: d, doc: D.contents });
            break;
          case he:
            l.length > 0 && i.push({ ind: p, mode: d, doc: ir });
            break;
          case H:
            switch (d) {
              case ue:
                if (D.hard) s = true;
                else {
                  D.soft || (o.push(" "), u += 1);
                  break;
                }
              case G:
                if (l.length > 0) {
                  i.push({ ind: p, mode: d, doc: D }, ...l.reverse()), l.length = 0;
                  break;
                }
                D.literal ? p.root ? (o.push(a, p.root.value), u = p.root.length) : (o.push(a), u = 0) : (u -= bt(o), o.push(a + p.value), u = p.length);
                break;
            }
            break;
          case de:
            i.push({ ind: p, mode: d, doc: D.contents });
            break;
          case ne:
            break;
          default:
            throw new Te(D);
        }
        i.length === 0 && l.length > 0 && (i.push(...l.reverse()), l.length = 0);
      }
      let f = o.indexOf(Ve);
      if (f !== -1) {
        let p = o.indexOf(Ve, f + 1);
        if (p === -1) return { formatted: o.filter((m) => m !== Ve).join("") };
        let d = o.slice(0, f).join(""), D = o.slice(f + 1, p).join(""), h = o.slice(p + 1).join("");
        return { formatted: d + D + h, cursorNodeStart: d.length, cursorNodeText: D };
      }
      return { formatted: o.join("") };
    }
    function xi(e, r, t) {
      let { node: n } = e, a = [], u = e.map(() => e.map(({ index: f }) => {
        let p = Ai(t(), r).formatted, d = fr(p);
        return a[f] = Math.max(a[f] ?? 3, d), { text: p, width: d };
      }, "children"), "children"), i = s(false);
      if (r.proseWrap !== "never") return [nr, i];
      let o = s(true);
      return [nr, Me(Kn(o, i))];
      function s(f) {
        return Or(ir, [c(u[0], f), l(f), ...u.slice(1).map((p) => c(p, f))].map((p) => `| ${p.join(" | ")} |`));
      }
      function l(f) {
        return a.map((p, d) => {
          let D = n.align[d], h = D === "center" || D === "left" ? ":" : "-", m = D === "center" || D === "right" ? ":" : "-", F = f ? "-" : "-".repeat(p - 2);
          return `${h}${F}${m}`;
        });
      }
      function c(f, p) {
        return f.map(({ text: d, width: D }, h) => {
          if (p) return d;
          let m = a[h] - D, F = n.align[h], y = 0;
          F === "right" ? y = m : F === "center" && (y = Math.floor(m / 2));
          let E = m - y;
          return `${" ".repeat(y)}${d}${" ".repeat(E)}`;
        });
      }
    }
    function wi(e, r, t) {
      let n = e.map(t, "children");
      return $l(n);
    }
    function $l(e) {
      let r = [""];
      return function t(n) {
        for (let a of n) {
          let u = Y(a);
          if (u === W) {
            t(a);
            continue;
          }
          let i = a, o = [];
          u === J && ([i, ...o] = a.parts), r.push([r.pop(), i], ...o);
        }
      }(e), ze(r);
    }
    var Q, yt = class {
      constructor(r) {
        Gn(this, Q);
        Vn(this, Q, new Set(r));
      }
      getLeadingWhitespaceCount(r) {
        let t = ce(this, Q), n = 0;
        for (let a = 0; a < r.length && t.has(r.charAt(a)); a++) n++;
        return n;
      }
      getTrailingWhitespaceCount(r) {
        let t = ce(this, Q), n = 0;
        for (let a = r.length - 1; a >= 0 && t.has(r.charAt(a)); a--) n++;
        return n;
      }
      getLeadingWhitespace(r) {
        let t = this.getLeadingWhitespaceCount(r);
        return r.slice(0, t);
      }
      getTrailingWhitespace(r) {
        let t = this.getTrailingWhitespaceCount(r);
        return r.slice(r.length - t);
      }
      hasLeadingWhitespace(r) {
        return ce(this, Q).has(r.charAt(0));
      }
      hasTrailingWhitespace(r) {
        return ce(this, Q).has(z(false, r, -1));
      }
      trimStart(r) {
        let t = this.getLeadingWhitespaceCount(r);
        return r.slice(t);
      }
      trimEnd(r) {
        let t = this.getTrailingWhitespaceCount(r);
        return r.slice(0, r.length - t);
      }
      trim(r) {
        return this.trimEnd(this.trimStart(r));
      }
      split(r, t = false) {
        let n = `[${le([...ce(this, Q)].join(""))}]+`, a = new RegExp(t ? `(${n})` : n, "u");
        return r.split(a);
      }
      hasWhitespaceCharacter(r) {
        let t = ce(this, Q);
        return Array.prototype.some.call(r, (n) => t.has(n));
      }
      hasNonWhitespaceCharacter(r) {
        let t = ce(this, Q);
        return Array.prototype.some.call(r, (n) => !t.has(n));
      }
      isWhitespaceOnly(r) {
        let t = ce(this, Q);
        return Array.prototype.every.call(r, (n) => t.has(n));
      }
    };
    Q = /* @__PURE__ */ new WeakMap();
    var ki = yt;
    var Wl = ["	", `
`, "\f", "\r", " "], Hl = new ki(Wl), At = Hl;
    var Kl = /^.$/su;
    function Jl(e, r) {
      return e = Xl(e, r), e = Zl(e), e = rf(e, r), e = tf(e, r), e = ef(e), e;
    }
    function Xl(e, r) {
      return Ae(e, (t) => t.type !== "text" || t.value === "*" || t.value === "_" || !Kl.test(t.value) || t.position.end.offset - t.position.start.offset === t.value.length ? t : { ...t, value: r.originalText.slice(t.position.start.offset, t.position.end.offset) });
    }
    function Ql(e, r, t) {
      return Ae(e, (n) => {
        if (!n.children) return n;
        let a = n.children.reduce((u, i) => {
          let o = z(false, u, -1);
          return o && r(o, i) ? u.splice(-1, 1, t(o, i)) : u.push(i), u;
        }, []);
        return { ...n, children: a };
      });
    }
    function Zl(e) {
      return Ql(e, (r, t) => r.type === "text" && t.type === "text", (r, t) => ({ type: "text", value: r.value + t.value, position: { start: r.position.start, end: t.position.end } }));
    }
    function ef(e) {
      return Ae(e, (r, t, [n]) => {
        if (r.type !== "text") return r;
        let { value: a } = r;
        return n.type === "paragraph" && (t === 0 && (a = At.trimStart(a)), t === n.children.length - 1 && (a = At.trimEnd(a))), { type: "sentence", position: r.position, children: Nr(a) };
      });
    }
    function rf(e, r) {
      return Ae(e, (t, n, a) => {
        if (t.type === "code") {
          let u = /^\n?(?: {4,}|\t)/u.test(r.originalText.slice(t.position.start.offset, t.position.end.offset));
          if (t.isIndented = u, u) for (let i = 0; i < a.length; i++) {
            let o = a[i];
            if (o.hasIndentedCodeblock) break;
            o.type === "list" && (o.hasIndentedCodeblock = true);
          }
        }
        return t;
      });
    }
    function tf(e, r) {
      return Ae(e, (a, u, i) => {
        if (a.type === "list" && a.children.length > 0) {
          for (let o = 0; o < i.length; o++) {
            let s = i[o];
            if (s.type === "list" && !s.isAligned) return a.isAligned = false, a;
          }
          a.isAligned = n(a);
        }
        return a;
      });
      function t(a) {
        return a.children.length === 0 ? -1 : a.children[0].position.start.column - 1;
      }
      function n(a) {
        if (!a.ordered) return true;
        let [u, i] = a.children;
        if (Ye(u, r).leadingSpaces.length > 1) return true;
        let s = t(u);
        if (s === -1) return false;
        if (a.children.length === 1) return s % r.tabWidth === 0;
        let l = t(i);
        return s !== l ? false : s % r.tabWidth === 0 ? true : Ye(i, r).leadingSpaces.length > 1;
      }
    }
    var Bi = Jl;
    function Ti(e, r) {
      let t = [""];
      return e.each(() => {
        let { node: n } = e, a = r();
        switch (n.type) {
          case "whitespace":
            if (Y(a) !== $) {
              t.push(a, "");
              break;
            }
          default:
            t.push([t.pop(), a]);
        }
      }, "children"), ze(t);
    }
    var nf = /* @__PURE__ */ new Set(["heading", "tableCell", "link", "wikiLink"]), qi = new Set("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
    function uf({ parent: e }) {
      if (e.usesCJSpaces === void 0) {
        let r = { " ": 0, "": 0 }, { children: t } = e;
        for (let n = 1; n < t.length - 1; ++n) {
          let a = t[n];
          if (a.type === "whitespace" && (a.value === " " || a.value === "")) {
            let u = t[n - 1].kind, i = t[n + 1].kind;
            (u === ie && i === Ge || u === Ge && i === ie) && ++r[a.value];
          }
        }
        e.usesCJSpaces = r[" "] > r[""];
      }
      return e.usesCJSpaces;
    }
    function af(e, r) {
      if (r) return true;
      let { previous: t, next: n } = e;
      if (!t || !n) return true;
      let a = t.kind, u = n.kind;
      return _i(a) && _i(u) || a === Pe && u === ie || u === Pe && a === ie ? true : a === sr || u === sr || a === ie && u === ie ? false : qi.has(n.value[0]) || qi.has(z(false, t.value, -1)) ? true : t.hasTrailingPunctuation || n.hasLeadingPunctuation ? false : uf(e);
    }
    function _i(e) {
      return e === Ge || e === Pe;
    }
    function of(e, r, t, n) {
      if (t !== "always" || e.hasAncestor((i) => nf.has(i.type))) return false;
      if (n) return r !== "";
      let { previous: a, next: u } = e;
      return !a || !u ? true : r === "" ? false : a.kind === Pe && u.kind === ie || u.kind === Pe && a.kind === ie ? true : !(a.isCJ || u.isCJ);
    }
    function xt(e, r, t, n) {
      if (t === "preserve" && r === `
`) return P;
      let a = r === " " || r === `
` && af(e, n);
      return of(e, r, t, n) ? a ? _r : Sr : a ? " " : "";
    }
    var sf = /* @__PURE__ */ new Set(["listItem", "definition"]);
    function cf(e, r, t) {
      var a, u;
      let { node: n } = e;
      if (df(e)) {
        let i = [""], o = Nr(r.originalText.slice(n.position.start.offset, n.position.end.offset));
        for (let s of o) {
          if (s.type === "word") {
            i.push([i.pop(), s.value]);
            continue;
          }
          let l = xt(e, s.value, r.proseWrap, true);
          if (Y(l) === $) {
            i.push([i.pop(), l]);
            continue;
          }
          i.push(l, "");
        }
        return ze(i);
      }
      switch (n.type) {
        case "front-matter":
          return r.originalText.slice(n.position.start.offset, n.position.end.offset);
        case "root":
          return n.children.length === 0 ? "" : [Df(e, r, t), P];
        case "paragraph":
          return wi(e, r, t);
        case "sentence":
          return Ti(e, t);
        case "word": {
          let i = N(false, N(false, n.value, "*", String.raw`\*`), new RegExp([`(^|${Se.source})(_+)`, `(_+)(${Se.source}|$)`].join("|"), "gu"), (l, c, f, p, d) => N(false, f ? `${c}${f}` : `${p}${d}`, "_", String.raw`\_`)), o = (l, c, f) => l.type === "sentence" && f === 0, s = (l, c, f) => gt(l.children[f - 1]);
          return i !== n.value && (e.match(void 0, o, s) || e.match(void 0, o, (l, c, f) => l.type === "emphasis" && f === 0, s)) && (i = i.replace(/^(\\?[*_])+/u, (l) => N(false, l, "\\", ""))), i;
        }
        case "whitespace": {
          let { next: i } = e, o = i && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/u.test(i.value) ? "never" : r.proseWrap;
          return xt(e, n.value, o);
        }
        case "emphasis": {
          let i;
          if (gt(n.children[0])) i = r.originalText[n.position.start.offset];
          else {
            let { previous: o, next: s } = e;
            i = (o == null ? void 0 : o.type) === "sentence" && ((a = z(false, o.children, -1)) == null ? void 0 : a.type) === "word" && !z(false, o.children, -1).hasTrailingPunctuation || (s == null ? void 0 : s.type) === "sentence" && ((u = s.children[0]) == null ? void 0 : u.type) === "word" && !s.children[0].hasLeadingPunctuation || e.hasAncestor((c) => c.type === "emphasis") ? "*" : "_";
          }
          return [i, V(e, r, t), i];
        }
        case "strong":
          return ["**", V(e, r, t), "**"];
        case "delete":
          return ["~~", V(e, r, t), "~~"];
        case "inlineCode": {
          let i = r.proseWrap === "preserve" ? n.value : N(false, n.value, `
`, " "), o = Qn(i, "`"), s = "`".repeat(o || 1), l = i.startsWith("`") || i.endsWith("`") || /^[\n ]/u.test(i) && /[\n ]$/u.test(i) && /[^\n ]/u.test(i) ? " " : "";
          return [s, l, i, l, s];
        }
        case "wikiLink": {
          let i = "";
          return r.proseWrap === "preserve" ? i = n.value : i = N(false, n.value, /[\t\n]+/gu, " "), ["[[", i, "]]"];
        }
        case "link":
          switch (r.originalText[n.position.start.offset]) {
            case "<": {
              let i = "mailto:";
              return ["<", n.url.startsWith(i) && r.originalText.slice(n.position.start.offset + 1, n.position.start.offset + 1 + i.length) !== i ? n.url.slice(i.length) : n.url, ">"];
            }
            case "[":
              return ["[", V(e, r, t), "](", wt(n.url, ")"), Mr(n.title, r), ")"];
            default:
              return r.originalText.slice(n.position.start.offset, n.position.end.offset);
          }
        case "image":
          return ["![", n.alt || "", "](", wt(n.url, ")"), Mr(n.title, r), ")"];
        case "blockquote":
          return ["> ", be("> ", V(e, r, t))];
        case "heading":
          return ["#".repeat(n.depth) + " ", V(e, r, t)];
        case "code": {
          if (n.isIndented) {
            let s = " ".repeat(4);
            return be(s, [s, ye(n.value, P)]);
          }
          let i = r.__inJsTemplate ? "~" : "`", o = i.repeat(Math.max(3, Lr(n.value, i) + 1));
          return [o, n.lang || "", n.meta ? " " + n.meta : "", P, ye(Rr(n, r.originalText), P), P, o];
        }
        case "html": {
          let { parent: i, isLast: o } = e, s = i.type === "root" && o ? n.value.trimEnd() : n.value, l = /^<!--.*-->$/su.test(s);
          return ye(s, l ? P : _e(ur));
        }
        case "list": {
          let i = Oi(n, e.parent), o = pi(n, r);
          return V(e, r, t, { processor(s) {
            let l = f(), c = s.node;
            if (c.children.length === 2 && c.children[1].type === "html" && c.children[0].position.start.column !== c.children[1].position.start.column) return [l, Si(s, r, t, l)];
            return [l, be(" ".repeat(l.length), Si(s, r, t, l))];
            function f() {
              let p = n.ordered ? (s.isFirst ? n.start : o ? 1 : n.start + s.index) + (i % 2 === 0 ? ". " : ") ") : i % 2 === 0 ? "- " : "* ";
              return (n.isAligned || n.hasIndentedCodeblock) && n.ordered ? lf(p, r) : p;
            }
          } });
        }
        case "thematicBreak": {
          let { ancestors: i } = e, o = i.findIndex((l) => l.type === "list");
          return o === -1 ? "---" : Oi(i[o], i[o + 1]) % 2 === 0 ? "***" : "---";
        }
        case "linkReference":
          return ["[", V(e, r, t), "]", n.referenceType === "full" ? kt(n) : n.referenceType === "collapsed" ? "[]" : ""];
        case "imageReference":
          switch (n.referenceType) {
            case "full":
              return ["![", n.alt || "", "]", kt(n)];
            default:
              return ["![", n.alt, "]", n.referenceType === "collapsed" ? "[]" : ""];
          }
        case "definition": {
          let i = r.proseWrap === "always" ? _r : " ";
          return Me([kt(n), ":", tr([i, wt(n.url), n.title === null ? "" : [i, Mr(n.title, r, false)]])]);
        }
        case "footnote":
          return ["[^", V(e, r, t), "]"];
        case "footnoteReference":
          return Ni(n);
        case "footnoteDefinition": {
          let i = n.children.length === 1 && n.children[0].type === "paragraph" && (r.proseWrap === "never" || r.proseWrap === "preserve" && n.children[0].position.start.line === n.children[0].position.end.line);
          return [Ni(n), ": ", i ? V(e, r, t) : Me([be(" ".repeat(4), V(e, r, t, { processor: ({ isFirst: o }) => o ? Me([Sr, t()]) : t() }))])];
        }
        case "table":
          return xi(e, r, t);
        case "tableCell":
          return V(e, r, t);
        case "break":
          return /\s/u.test(r.originalText[n.position.start.offset]) ? ["  ", _e(ur)] : ["\\", P];
        case "liquidNode":
          return ye(n.value, P);
        case "import":
        case "export":
        case "jsx":
          return n.value;
        case "esComment":
          return ["{/* ", n.value, " */}"];
        case "math":
          return ["$$", P, n.value ? [ye(n.value, P), P] : "", "$$"];
        case "inlineMath":
          return r.originalText.slice(Oe(n), Le(n));
        case "tableRow":
        case "listItem":
        case "text":
        default:
          throw new ri(n, "Markdown");
      }
    }
    function Si(e, r, t, n) {
      let { node: a } = e, u = a.checked === null ? "" : a.checked ? "[x] " : "[ ] ";
      return [u, V(e, r, t, { processor({ node: i, isFirst: o }) {
        if (o && i.type !== "list") return be(" ".repeat(u.length), t());
        let s = " ".repeat(Ff(r.tabWidth - n.length, 0, 3));
        return [s, be(s, t())];
      } })];
    }
    function lf(e, r) {
      let t = n();
      return e + " ".repeat(t >= 4 ? 0 : t);
      function n() {
        let a = e.length % r.tabWidth;
        return a === 0 ? 0 : r.tabWidth - a;
      }
    }
    function Oi(e, r) {
      return ff(e, r, (t) => t.ordered === e.ordered);
    }
    function ff(e, r, t) {
      let n = -1;
      for (let a of r.children) if (a.type === e.type && t(a) ? n++ : n = -1, a === e) return n;
    }
    function Df(e, r, t) {
      let n = [], a = null, { children: u } = e.node;
      for (let [i, o] of u.entries()) switch (Bt(o)) {
        case "start":
          a === null && (a = { index: i, offset: o.position.end.offset });
          break;
        case "end":
          a !== null && (n.push({ start: a, end: { index: i, offset: o.position.start.offset } }), a = null);
          break;
      }
      return V(e, r, t, { processor({ index: i }) {
        if (n.length > 0) {
          let o = n[0];
          if (i === o.start.index) return [Li(u[o.start.index]), r.originalText.slice(o.start.offset, o.end.offset), Li(u[o.end.index])];
          if (o.start.index < i && i < o.end.index) return false;
          if (i === o.end.index) return n.shift(), false;
        }
        return t();
      } });
    }
    function V(e, r, t, n = {}) {
      let { processor: a = t } = n, u = [];
      return e.each(() => {
        let i = a(e);
        i !== false && (u.length > 0 && pf(e) && (u.push(P), (hf(e, r) || Ii(e)) && u.push(P), Ii(e) && u.push(P)), u.push(i));
      }, "children"), u;
    }
    function Li(e) {
      if (e.type === "html") return e.value;
      if (e.type === "paragraph" && Array.isArray(e.children) && e.children.length === 1 && e.children[0].type === "esComment") return ["{/* ", e.children[0].value, " */}"];
    }
    function Bt(e) {
      let r;
      if (e.type === "html") r = e.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/u);
      else {
        let t;
        e.type === "esComment" ? t = e : e.type === "paragraph" && e.children.length === 1 && e.children[0].type === "esComment" && (t = e.children[0]), t && (r = t.value.match(/^prettier-ignore(?:-(start|end))?$/u));
      }
      return r ? r[1] || "next" : false;
    }
    function pf({ node: e, parent: r }) {
      let t = Ft.has(e.type), n = e.type === "html" && Ir.has(r.type);
      return !t && !n;
    }
    function Pi(e, r) {
      return e.type === "listItem" && (e.spread || r.originalText.charAt(e.position.end.offset - 1) === `
`);
    }
    function hf({ node: e, previous: r, parent: t }, n) {
      if (Pi(r, n)) return true;
      let i = r.type === e.type && sf.has(e.type), o = t.type === "listItem" && !Pi(t, n), s = Bt(r) === "next", l = e.type === "html" && r.type === "html" && r.position.end.line + 1 === e.position.start.line, c = e.type === "html" && t.type === "listItem" && r.type === "paragraph" && r.position.end.line + 1 === e.position.start.line;
      return !(i || o || s || l || c);
    }
    function Ii({ node: e, previous: r }) {
      let t = r.type === "list", n = e.type === "code" && e.isIndented;
      return t && n;
    }
    function df(e) {
      let r = e.findAncestor((t) => t.type === "linkReference" || t.type === "imageReference");
      return r && (r.type !== "linkReference" || r.referenceType !== "full");
    }
    var mf = (e, r) => {
      for (let t of r) e = N(false, e, t, encodeURIComponent(t));
      return e;
    };
    function wt(e, r = []) {
      let t = [" ", ...Array.isArray(r) ? r : [r]];
      return new RegExp(t.map((n) => le(n)).join("|"), "u").test(e) ? `<${mf(e, "<>")}>` : e;
    }
    function Mr(e, r, t = true) {
      if (!e) return "";
      if (t) return " " + Mr(e, r, false);
      if (e = N(false, e, /\\(?=["')])/gu, ""), e.includes('"') && e.includes("'") && !e.includes(")")) return `(${e})`;
      let n = ei(e, r.singleQuote);
      return e = N(false, e, "\\", "\\\\"), e = N(false, e, n, `\\${n}`), `${n}${e}${n}`;
    }
    function Ff(e, r, t) {
      return Math.max(r, Math.min(e, t));
    }
    function gf(e) {
      return e.index > 0 && Bt(e.previous) === "next";
    }
    function kt(e) {
      return `[${(0, Ri.default)(e.label)}]`;
    }
    function Ni(e) {
      return `[^${e.label}]`;
    }
    var vf = { preprocess: Bi, print: cf, embed: hi, massageAstNode: si, hasPrettierIgnore: gf, insertPragma: ui, getVisitorKeys: Fi }, Ui = vf;
    var Mi = [{ linguistLanguageId: 222, name: "Markdown", type: "prose", color: "#083fa1", aliases: ["md", "pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr", "README"], tmScope: "text.md", parsers: ["markdown"], vscodeLanguageIds: ["markdown"] }, { linguistLanguageId: 222, name: "MDX", type: "prose", color: "#083fa1", aliases: ["md", "pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: [".mdx"], filenames: [], tmScope: "text.md", parsers: ["mdx"], vscodeLanguageIds: ["mdx"] }];
    var Tt = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
    var Ef = { proseWrap: Tt.proseWrap, singleQuote: Tt.singleQuote }, zi = Ef;
    var Rn = {};
    Mn(Rn, { markdown: () => Im, mdx: () => Nm, remark: () => Im });
    var nl = Ue(Gi()), il = Ue(nu()), ul = Ue(Qs()), al = Ue(jc());
    var Bm = /^import\s/u, Tm = /^export\s/u, $c = String.raw`[a-z][a-z0-9]*(\.[a-z][a-z0-9]*)*|`, Wc = /<!---->|<!---?[^>-](?:-?[^-])*-->/u, qm = /^\{\s*\/\*(.*)\*\/\s*\}/u, _m = `

`, Hc = (e) => Bm.test(e), Nn = (e) => Tm.test(e), Kc = (e, r) => {
      let t = r.indexOf(_m), n = r.slice(0, t);
      if (Nn(n) || Hc(n)) return e(n)({ type: Nn(n) ? "export" : "import", value: n });
    }, Jc = (e, r) => {
      let t = qm.exec(r);
      if (t) return e(t[0])({ type: "esComment", value: t[1].trim() });
    };
    Kc.locator = (e) => Nn(e) || Hc(e) ? -1 : 1;
    Jc.locator = (e, r) => e.indexOf("{", r);
    var Xc = function() {
      let { Parser: e } = this, { blockTokenizers: r, blockMethods: t, inlineTokenizers: n, inlineMethods: a } = e.prototype;
      r.esSyntax = Kc, n.esComment = Jc, t.splice(t.indexOf("paragraph"), 0, "esSyntax"), a.splice(a.indexOf("text"), 0, "esComment");
    };
    var Sm = function() {
      let e = this.Parser.prototype;
      e.blockMethods = ["frontMatter", ...e.blockMethods], e.blockTokenizers.frontMatter = r;
      function r(t, n) {
        let a = or(n);
        if (a.frontMatter) return t(a.frontMatter.raw)(a.frontMatter);
      }
      r.onlyAtStart = true;
    }, Qc = Sm;
    function Om() {
      return (e) => Ae(e, (r, t, [n]) => r.type !== "html" || Wc.test(r.value) || Ir.has(n.type) ? r : { ...r, type: "jsx" });
    }
    var Zc = Om;
    var Lm = function() {
      let e = this.Parser.prototype, r = e.inlineMethods;
      r.splice(r.indexOf("text"), 0, "liquid"), e.inlineTokenizers.liquid = t;
      function t(n, a) {
        let u = a.match(/^(\{%.*?%\}|\{\{.*?\}\})/su);
        if (u) return n(u[0])({ type: "liquidNode", value: u[0] });
      }
      t.locator = function(n, a) {
        return n.indexOf("{", a);
      };
    }, el = Lm;
    var Pm = function() {
      let e = "wikiLink", r = /^\[\[(?<linkContents>.+?)\]\]/su, t = this.Parser.prototype, n = t.inlineMethods;
      n.splice(n.indexOf("link"), 0, e), t.inlineTokenizers.wikiLink = a;
      function a(u, i) {
        let o = r.exec(i);
        if (o) {
          let s = o.groups.linkContents.trim();
          return u(o[0])({ type: e, value: s });
        }
      }
      a.locator = function(u, i) {
        return u.indexOf("[", i);
      };
    }, rl = Pm;
    function ol({ isMDX: e }) {
      return (r) => {
        let t = (0, al.default)().use(ul.default, { commonmark: true, ...e && { blocks: [$c] } }).use(nl.default).use(Qc).use(il.default).use(e ? Xc : tl).use(el).use(e ? Zc : tl).use(rl);
        return t.run(t.parse(r));
      };
    }
    function tl() {
    }
    var sl = { astFormat: "mdast", hasPragma: ii, locStart: Oe, locEnd: Le }, Im = { ...sl, parse: ol({ isMDX: false }) }, Nm = { ...sl, parse: ol({ isMDX: true }) };
    var Rm = { mdast: Ui };
    return hl(Um);
  });
})(markdown$2);
var markdownExports = markdown$2.exports;
const markdown = /* @__PURE__ */ _commonjsHelpers.getDefaultExportFromCjs(markdownExports);
const markdown$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: markdown
}, [markdownExports]);
exports.markdown = markdown$1;
