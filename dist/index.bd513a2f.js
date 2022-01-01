function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $a51c7802bfe1890e$var$t;
const $a51c7802bfe1890e$var$i = globalThis.trustedTypes, $a51c7802bfe1890e$var$s = $a51c7802bfe1890e$var$i ? $a51c7802bfe1890e$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $a51c7802bfe1890e$var$e = `lit$${(Math.random() + "").slice(9)}$`, $a51c7802bfe1890e$var$o = "?" + $a51c7802bfe1890e$var$e, $a51c7802bfe1890e$var$n = `<${$a51c7802bfe1890e$var$o}>`, $a51c7802bfe1890e$var$l = document, $a51c7802bfe1890e$var$h = (t = "")=>$a51c7802bfe1890e$var$l.createComment(t)
, $a51c7802bfe1890e$var$r = (t)=>null === t || "object" != typeof t && "function" != typeof t
, $a51c7802bfe1890e$var$d = Array.isArray, $a51c7802bfe1890e$var$u = (t)=>{
    var i;
    return $a51c7802bfe1890e$var$d(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
}, $a51c7802bfe1890e$var$c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $a51c7802bfe1890e$var$v = /-->/g, $a51c7802bfe1890e$var$a = />/g, $a51c7802bfe1890e$var$f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, $a51c7802bfe1890e$var$_ = /'/g, $a51c7802bfe1890e$var$m = /"/g, $a51c7802bfe1890e$var$g = /^(?:script|style|textarea)$/i, $a51c7802bfe1890e$var$$ = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        })
, $a51c7802bfe1890e$export$c0bb0b647f701bb5 = $a51c7802bfe1890e$var$$(1), $a51c7802bfe1890e$export$7ed1367e7fa1ad68 = $a51c7802bfe1890e$var$$(2), $a51c7802bfe1890e$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $a51c7802bfe1890e$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $a51c7802bfe1890e$var$x = new WeakMap, $a51c7802bfe1890e$export$b3890eb0ae9dca99 = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new $a51c7802bfe1890e$var$N(i.insertBefore($a51c7802bfe1890e$var$h(), t), t, void 0, null != s ? s : {
        });
    }
    return l._$AI(t), l;
}, $a51c7802bfe1890e$var$A = $a51c7802bfe1890e$var$l.createTreeWalker($a51c7802bfe1890e$var$l, 129, null, !1), $a51c7802bfe1890e$var$C = (t, i)=>{
    const o = t.length - 1, l = [];
    let h, r = 2 === i ? "<svg>" : "", d = $a51c7802bfe1890e$var$c;
    for(let i1 = 0; i1 < o; i1++){
        const s = t[i1];
        let o, u, $ = -1, p = 0;
        for(; p < s.length && (d.lastIndex = p, u = d.exec(s), null !== u);)p = d.lastIndex, d === $a51c7802bfe1890e$var$c ? "!--" === u[1] ? d = $a51c7802bfe1890e$var$v : void 0 !== u[1] ? d = $a51c7802bfe1890e$var$a : void 0 !== u[2] ? ($a51c7802bfe1890e$var$g.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = $a51c7802bfe1890e$var$f) : void 0 !== u[3] && (d = $a51c7802bfe1890e$var$f) : d === $a51c7802bfe1890e$var$f ? ">" === u[0] ? (d = null != h ? h : $a51c7802bfe1890e$var$c, $ = -1) : void 0 === u[1] ? $ = -2 : ($ = d.lastIndex - u[2].length, o = u[1], d = void 0 === u[3] ? $a51c7802bfe1890e$var$f : '"' === u[3] ? $a51c7802bfe1890e$var$m : $a51c7802bfe1890e$var$_) : d === $a51c7802bfe1890e$var$m || d === $a51c7802bfe1890e$var$_ ? d = $a51c7802bfe1890e$var$f : d === $a51c7802bfe1890e$var$v || d === $a51c7802bfe1890e$var$a ? d = $a51c7802bfe1890e$var$c : (d = $a51c7802bfe1890e$var$f, h = void 0);
        const y = d === $a51c7802bfe1890e$var$f && t[i1 + 1].startsWith("/>") ? " " : "";
        r += d === $a51c7802bfe1890e$var$c ? s + $a51c7802bfe1890e$var$n : $ >= 0 ? (l.push(o), s.slice(0, $) + "$lit$" + s.slice($) + $a51c7802bfe1890e$var$e + y) : s + $a51c7802bfe1890e$var$e + (-2 === $ ? (l.push(void 0), i1) : y);
    }
    const u = r + (t[o] || "<?>") + (2 === i ? "</svg>" : "");
    return [
        void 0 !== $a51c7802bfe1890e$var$s ? $a51c7802bfe1890e$var$s.createHTML(u) : u,
        l
    ];
};
class $a51c7802bfe1890e$var$P {
    constructor({ strings: t2 , _$litType$: s1  }, n1){
        let l;
        this.parts = [];
        let r = 0, d = 0;
        const u = t2.length - 1, c = this.parts, [v, a] = $a51c7802bfe1890e$var$C(t2, s1);
        if (this.el = $a51c7802bfe1890e$var$P.createElement(v, n1), $a51c7802bfe1890e$var$A.currentNode = this.el.content, 2 === s1) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (l = $a51c7802bfe1890e$var$A.nextNode()) && c.length < u;){
            if (1 === l.nodeType) {
                if (l.hasAttributes()) {
                    const t = [];
                    for (const i of l.getAttributeNames())if (i.endsWith("$lit$") || i.startsWith($a51c7802bfe1890e$var$e)) {
                        const s = a[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = l.getAttribute(s.toLowerCase() + "$lit$").split($a51c7802bfe1890e$var$e), i = /([.?@])?(.*)/.exec(s);
                            c.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? $a51c7802bfe1890e$var$M : "?" === i[1] ? $a51c7802bfe1890e$var$H : "@" === i[1] ? $a51c7802bfe1890e$var$I : $a51c7802bfe1890e$var$S
                            });
                        } else c.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i2 of t)l.removeAttribute(i2);
                }
                if ($a51c7802bfe1890e$var$g.test(l.tagName)) {
                    const t = l.textContent.split($a51c7802bfe1890e$var$e), s = t.length - 1;
                    if (s > 0) {
                        l.textContent = $a51c7802bfe1890e$var$i ? $a51c7802bfe1890e$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)l.append(t[i], $a51c7802bfe1890e$var$h()), $a51c7802bfe1890e$var$A.nextNode(), c.push({
                            type: 2,
                            index: ++r
                        });
                        l.append(t[s], $a51c7802bfe1890e$var$h());
                    }
                }
            } else if (8 === l.nodeType) {
                if (l.data === $a51c7802bfe1890e$var$o) c.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = l.data.indexOf($a51c7802bfe1890e$var$e, t + 1));)c.push({
                        type: 7,
                        index: r
                    }), t += $a51c7802bfe1890e$var$e.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t1, i3) {
        const s = $a51c7802bfe1890e$var$l.createElement("template");
        return s.innerHTML = t1, s;
    }
}
function $a51c7802bfe1890e$var$V(t, i, s = t, e) {
    var o, n, l, h;
    if (i === $a51c7802bfe1890e$export$9c068ae9cc5db4e8) return i;
    let d = void 0 !== e ? null === (o = s._$Cl) || void 0 === o ? void 0 : o[e] : s._$Cu;
    const u = $a51c7802bfe1890e$var$r(i) ? void 0 : i._$litDirective$;
    return (null == d ? void 0 : d.constructor) !== u && (null === (n = null == d ? void 0 : d._$AO) || void 0 === n || n.call(d, !1), void 0 === u ? d = void 0 : (d = new u(t), d._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Cl) && void 0 !== l ? l : h._$Cl = [])[e] = d : s._$Cu = d), void 0 !== d && (i = $a51c7802bfe1890e$var$V(t, d._$AS(t, i.values), d, e)), i;
}
class $a51c7802bfe1890e$var$E {
    constructor(t, i){
        this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    p(t3) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t3 ? void 0 : t3.creationScope) && void 0 !== i ? i : $a51c7802bfe1890e$var$l).importNode(s, !0);
        $a51c7802bfe1890e$var$A.currentNode = o;
        let n = $a51c7802bfe1890e$var$A.nextNode(), h = 0, r = 0, d = e[0];
        for(; void 0 !== d;){
            if (h === d.index) {
                let i;
                2 === d.type ? i = new $a51c7802bfe1890e$var$N(n, n.nextSibling, this, t3) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t3) : 6 === d.type && (i = new $a51c7802bfe1890e$var$L(n, this, t3)), this.v.push(i), d = e[++r];
            }
            h !== (null == d ? void 0 : d.index) && (n = $a51c7802bfe1890e$var$A.nextNode(), h++);
        }
        return o;
    }
    m(t4) {
        let i = 0;
        for (const s of this.v)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t4, s, i), i += s.strings.length - 2) : s._$AI(t4[i])), i++;
    }
}
class $a51c7802bfe1890e$var$N {
    constructor(t5, i4, s, e){
        var o;
        this.type = 2, this._$AH = $a51c7802bfe1890e$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t5, this._$AB = i4, this._$AM = s, this.options = e, this._$Cg = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cg;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t6, i5 = this) {
        t6 = $a51c7802bfe1890e$var$V(this, t6, i5), $a51c7802bfe1890e$var$r(t6) ? t6 === $a51c7802bfe1890e$export$45b790e32b2810ee || null == t6 || "" === t6 ? (this._$AH !== $a51c7802bfe1890e$export$45b790e32b2810ee && this._$AR(), this._$AH = $a51c7802bfe1890e$export$45b790e32b2810ee) : t6 !== this._$AH && t6 !== $a51c7802bfe1890e$export$9c068ae9cc5db4e8 && this.$(t6) : void 0 !== t6._$litType$ ? this.T(t6) : void 0 !== t6.nodeType ? this.S(t6) : $a51c7802bfe1890e$var$u(t6) ? this.M(t6) : this.$(t6);
    }
    A(t7, i6 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t7, i6);
    }
    S(t8) {
        this._$AH !== t8 && (this._$AR(), this._$AH = this.A(t8));
    }
    $(t9) {
        this._$AH !== $a51c7802bfe1890e$export$45b790e32b2810ee && $a51c7802bfe1890e$var$r(this._$AH) ? this._$AA.nextSibling.data = t9 : this.S($a51c7802bfe1890e$var$l.createTextNode(t9)), this._$AH = t9;
    }
    T(t10) {
        var i;
        const { values: s , _$litType$: e  } = t10, o = "number" == typeof e ? this._$AC(t10) : (void 0 === e.el && (e.el = $a51c7802bfe1890e$var$P.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s);
        else {
            const t = new $a51c7802bfe1890e$var$E(o, this), i = t.p(this.options);
            t.m(s), this.S(i), this._$AH = t;
        }
    }
    _$AC(t11) {
        let i = $a51c7802bfe1890e$var$x.get(t11.strings);
        return void 0 === i && $a51c7802bfe1890e$var$x.set(t11.strings, i = new $a51c7802bfe1890e$var$P(t11)), i;
    }
    M(t12) {
        $a51c7802bfe1890e$var$d(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t12)e === i.length ? i.push(s = new $a51c7802bfe1890e$var$N(this.A($a51c7802bfe1890e$var$h()), this.A($a51c7802bfe1890e$var$h()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t13 = this._$AA.nextSibling, i7) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i7); t13 && t13 !== this._$AB;){
            const i = t13.nextSibling;
            t13.remove(), t13 = i;
        }
    }
    setConnected(t14) {
        var i;
        void 0 === this._$AM && (this._$Cg = t14, null === (i = this._$AP) || void 0 === i || i.call(this, t14));
    }
}
class $a51c7802bfe1890e$var$S {
    constructor(t15, i8, s2, e1, o){
        this.type = 1, this._$AH = $a51c7802bfe1890e$export$45b790e32b2810ee, this._$AN = void 0, this.element = t15, this.name = i8, this._$AM = e1, this.options = o, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String), this.strings = s2) : this._$AH = $a51c7802bfe1890e$export$45b790e32b2810ee;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t16, i9 = this, s3, e2) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t16 = $a51c7802bfe1890e$var$V(this, t16, i9, 0), n = !$a51c7802bfe1890e$var$r(t16) || t16 !== this._$AH && t16 !== $a51c7802bfe1890e$export$9c068ae9cc5db4e8, n && (this._$AH = t16);
        else {
            const e = t16;
            let l, h;
            for(t16 = o[0], l = 0; l < o.length - 1; l++)h = $a51c7802bfe1890e$var$V(this, e[s3 + l], i9, l), h === $a51c7802bfe1890e$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$a51c7802bfe1890e$var$r(h) || h !== this._$AH[l]), h === $a51c7802bfe1890e$export$45b790e32b2810ee ? t16 = $a51c7802bfe1890e$export$45b790e32b2810ee : t16 !== $a51c7802bfe1890e$export$45b790e32b2810ee && (t16 += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e2 && this.k(t16);
    }
    k(t17) {
        t17 === $a51c7802bfe1890e$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t17 ? t17 : "");
    }
}
class $a51c7802bfe1890e$var$M extends $a51c7802bfe1890e$var$S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    k(t18) {
        this.element[this.name] = t18 === $a51c7802bfe1890e$export$45b790e32b2810ee ? void 0 : t18;
    }
}
const $a51c7802bfe1890e$var$k = $a51c7802bfe1890e$var$i ? $a51c7802bfe1890e$var$i.emptyScript : "";
class $a51c7802bfe1890e$var$H extends $a51c7802bfe1890e$var$S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    k(t19) {
        t19 && t19 !== $a51c7802bfe1890e$export$45b790e32b2810ee ? this.element.setAttribute(this.name, $a51c7802bfe1890e$var$k) : this.element.removeAttribute(this.name);
    }
}
class $a51c7802bfe1890e$var$I extends $a51c7802bfe1890e$var$S {
    constructor(t20, i10, s4, e3, o1){
        super(t20, i10, s4, e3, o1), this.type = 5;
    }
    _$AI(t21, i11 = this) {
        var s;
        if ((t21 = null !== (s = $a51c7802bfe1890e$var$V(this, t21, i11, 0)) && void 0 !== s ? s : $a51c7802bfe1890e$export$45b790e32b2810ee) === $a51c7802bfe1890e$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t21 === $a51c7802bfe1890e$export$45b790e32b2810ee && e !== $a51c7802bfe1890e$export$45b790e32b2810ee || t21.capture !== e.capture || t21.once !== e.once || t21.passive !== e.passive, n = t21 !== $a51c7802bfe1890e$export$45b790e32b2810ee && (e === $a51c7802bfe1890e$export$45b790e32b2810ee || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t21), this._$AH = t21;
    }
    handleEvent(t22) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t22) : this._$AH.handleEvent(t22);
    }
}
class $a51c7802bfe1890e$var$L {
    constructor(t23, i12, s5){
        this.element = t23, this.type = 6, this._$AN = void 0, this._$AM = i12, this.options = s5;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t24) {
        $a51c7802bfe1890e$var$V(this, t24);
    }
}
const $a51c7802bfe1890e$export$8613d1ca9052b22e = {
    P: "$lit$",
    V: $a51c7802bfe1890e$var$e,
    L: $a51c7802bfe1890e$var$o,
    I: 1,
    N: $a51c7802bfe1890e$var$C,
    R: $a51c7802bfe1890e$var$E,
    D: $a51c7802bfe1890e$var$u,
    j: $a51c7802bfe1890e$var$V,
    H: $a51c7802bfe1890e$var$N,
    O: $a51c7802bfe1890e$var$S,
    F: $a51c7802bfe1890e$var$H,
    B: $a51c7802bfe1890e$var$I,
    W: $a51c7802bfe1890e$var$M,
    Z: $a51c7802bfe1890e$var$L
}, $a51c7802bfe1890e$var$z = window.litHtmlPolyfillSupport;
null == $a51c7802bfe1890e$var$z || $a51c7802bfe1890e$var$z($a51c7802bfe1890e$var$P, $a51c7802bfe1890e$var$N), (null !== ($a51c7802bfe1890e$var$t = globalThis.litHtmlVersions) && void 0 !== $a51c7802bfe1890e$var$t ? $a51c7802bfe1890e$var$t : globalThis.litHtmlVersions = []).push("2.0.2");



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $d71bce45553af777$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $d71bce45553af777$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        })
;
class $d71bce45553af777$export$befdefbdce210f91 {
    constructor(t){
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t1, e, i) {
        this._$Ct = t1, this._$AM = e, this._$Ci = i;
    }
    _$AS(t2, e1) {
        return this.update(t2, e1);
    }
    update(t3, e2) {
        return this.render(...e2);
    }
}


/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $6197f1f1b7c083f0$export$56cc687933817664 = $d71bce45553af777$export$99b43ad1ed32e735(class extends $d71bce45553af777$export$befdefbdce210f91 {
    constructor(t4){
        var i;
        if (super(t4), t4.type !== $d71bce45553af777$export$9ba3b3f20a85bfa.ATTRIBUTE || "class" !== t4.name || (null === (i = t4.strings) || void 0 === i ? void 0 : i.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t1) {
        return " " + Object.keys(t1).filter((i)=>t1[i]
        ).join(" ") + " ";
    }
    update(i, [s]) {
        var r, o;
        if (void 0 === this.st) {
            this.st = new Set, void 0 !== i.strings && (this.et = new Set(i.strings.join(" ").split(/\s/).filter((t)=>"" !== t
            )));
            for(const t2 in s)s[t2] && !(null === (r = this.et) || void 0 === r ? void 0 : r.has(t2)) && this.st.add(t2);
            return this.render(s);
        }
        const e = i.element.classList;
        this.st.forEach((t)=>{
            t in s || (e.remove(t), this.st.delete(t));
        });
        for(const t3 in s){
            const i = !!s[t3];
            i === this.st.has(t3) || (null === (o = this.et) || void 0 === o ? void 0 : o.has(t3)) || (i ? (e.add(t3), this.st.add(t3)) : (e.remove(t3), this.st.delete(t3)));
        }
        return $a51c7802bfe1890e$export$9c068ae9cc5db4e8;
    }
});


const $3c13b93cfbb34482$var$CSS = {
    'ok': {
        'heading': {
            'text-lime-500': true
        },
        'bg': {
            'bg-lime-500': true
        }
    },
    'error': {
        'heading': {
            'text-red-500': true
        },
        'bg': {
            'bg-red-500': true
        }
    },
    'warning': {
        'heading': {
            'text-amber-500': true
        },
        'bg': {
            'bg-amber-500': true
        }
    },
    'info': {
        'heading': {
            'text-blue-500': true
        },
        'bg': {
            'bg-blue-500': true
        }
    }
};
class $3c13b93cfbb34482$export$a99aab2a736cea3e {
    constructor(container){
        this.container = container;
        this.visible = false;
    }
    render() {
        if (!this.visible) return $a51c7802bfe1890e$export$c0bb0b647f701bb5``;
        return $a51c7802bfe1890e$export$c0bb0b647f701bb5`
    <div id="alert" class="alert-container">
      <div class="alert-inner-container">
        <div class="alert-logo-container ${$6197f1f1b7c083f0$export$56cc687933817664($3c13b93cfbb34482$var$CSS[this.type].bg)}">
          <svg ?hidden=${this.type != 'ok'}      class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" /></svg>
          <svg ?hidden=${this.type != 'error'}   class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" /></svg>
          <svg ?hidden=${this.type != 'warning'} class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" /></svg>
          <svg ?hidden=${this.type != 'info'}    class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" /></svg>
        </div>
        <div class="px-4 py-2 text-left">
          <span class="alert-heading ${$6197f1f1b7c083f0$export$56cc687933817664($3c13b93cfbb34482$var$CSS[this.type].heading)}">${this.type.charAt(0).toUpperCase() + this.type.substr(1)}</span>
          <p class="alert-text actual-text">${this.message}</p>
        </div>
      </div>
    </div>
    `;
    }
    show(type, message, timeout) {
        this.type = type;
        this.message = message;
        this.visible = true;
        $a51c7802bfe1890e$export$b3890eb0ae9dca99(this.render(), this.container);
        setTimeout(()=>{
            this.hide();
        }, timeout);
    }
    hide() {
        this.visible = false;
        $a51c7802bfe1890e$export$b3890eb0ae9dca99(this.render(), this.container);
    }
}



const $9fdc79397460abda$var$minuteSeconds = /^\d+:[0-5]\d$/;
class $9fdc79397460abda$export$ca95ea95faa89f36 {
    constructor(){
    }
    validate() {
        this.titleInput = document.getElementById("input-title");
        this.activities = document.getElementById("input-activities");
        this.tutorials = document.getElementById("input-tutorials");
        this.assignments = document.getElementById("input-assignments");
        this.factor = document.getElementById("input-factor");
        this.assignmentTime = document.getElementById("input-assignment-time");
        this.videos = document.getElementById("input-videos");
        this.hasProgrammable = document.getElementById("input-hasProgrammable");
        this.programmingGraded = document.getElementById("input-programming-graded");
        this.programmingPractice = document.getElementById("input-programming-practice");
        this.programmingTime = document.getElementById("input-programming-time");
        console.log(this.titleInput, this.activities, this.tutorials, this.assignments, this.factor, this.videos, this.hasProgrammable, this.programmingGraded, this.programmingPractice, this.programmingTime);
        let errors = [];
        console.log("titleInput", this.titleInput.value);
        console.log("activities", this.activities.value);
        console.log("tutorials", this.tutorials.value);
        console.log("assignments", this.assignments.value);
        console.log("factor", this.factor.value);
        console.log("videos", this.videos.value);
        console.log("assignmentTime", this.assignmentTime.value);
        console.log("hasProgrammable", this.hasProgrammable.checked);
        console.log("programmingGraded", this.programmingGraded.value);
        console.log("programmingPractice", this.programmingPractice.value);
        console.log("programmingTime", this.programmingTime.value);
        [
            this.titleInput
        ].forEach((ele)=>{
            let title = ele.value;
            if (title.trim().length == 0) errors.push(`- Title is required`);
        });
        [
            this.activities,
            this.tutorials,
            this.assignments,
            this.assignmentTime
        ].forEach((ele)=>{
            let val = parseInt(ele.value, 10);
            if (Number.isInteger(val) && val >= 0) ;
            else errors.push(`- '${ele.dataset.name}' should be a non-negative integer`);
        });
        [
            this.factor
        ].forEach((ele)=>{
            let val = parseFloat(ele.value);
            if (Number.isFinite(val) && val >= 0) ;
            else errors.push(`- '${ele.dataset.name}' should be a non-negative number`);
        });
        if (this.hasProgrammable.checked) [
            this.programmingGraded,
            this.programmingPractice,
            this.programmingTime
        ].forEach((ele)=>{
            let val = parseInt(ele.value, 10);
            if (Number.isInteger(val) && val >= 0) ;
            else errors.push(`- '${ele.dataset.name}' should be a non-negative integer`);
        });
        let value = this.videos.value;
        let arr = value.trim().split(/\s/ig);
        for(let i = 0; i < arr.length; i++)if (arr[i].length > 0 && !arr[i].match($9fdc79397460abda$var$minuteSeconds)) errors.push(`- '${arr[i]}' is not a valid video time`);
        return errors;
    }
    /**
    name = "Sample Week 1";
    factor = 1;
    solvableTime = 20;

    solvable = {
      activities: { total: 3, left: 3 },
      tutorials: { total: 2, left: 2 },
      practice: { total: 1, left: 1 },
      graded: { total: 1, left: 1 },
    };

    programmable = {
      practice: { total: 1, left: 1 },
      graded: { total: 1, left: 1 },
    };

    hasProgrammable = true;
    programmingTime = 20;

    videos = [{ m: 40, s: 10, seen: false }];
   */ submit() {
        let input = {
            name: this.titleInput.value.trim(),
            factor: parseFloat(this.factor.value),
            solvableTime: parseInt(this.assignmentTime.value, 10),
            solvable: {
                activities: {
                    total: parseInt(this.activities.value, 10),
                    left: 3
                },
                tutorials: {
                    total: parseInt(this.tutorials.value, 10),
                    left: 2
                },
                assignments: {
                    total: parseInt(this.assignments.value, 10),
                    left: 1
                }
            },
            programmable: {
                graded: {
                    total: parseInt(this.programmingGraded.value, 10),
                    left: 3
                },
                practice: {
                    total: parseInt(this.programmingPractice.value, 10),
                    left: 2
                }
            },
            videos: [],
            hasProgrammable: false,
            programmableTime: 0
        };
        Object.keys(input.solvable).forEach((key)=>{
            input.solvable[key].left = input.solvable[key].total;
        });
        if (this.hasProgrammable.checked) {
            input.hasProgrammable = true;
            input.programmableTime = parseInt(this.programmingTime.value, 10);
            Object.keys(input.programmable).forEach((key)=>{
                input.programmable[key].left = input.programmable[key].total;
            });
        }
        let value = this.videos.value;
        let arr = value.trim().split(/\s/ig);
        for(let i = 0; i < arr.length; i++){
            if (arr[i].length === 0) continue;
            let split = arr[i].split(':');
            input.videos.push({
                m: parseInt(split[0], 10),
                s: parseInt(split[1], 10),
                seen: false
            });
        }
        return input;
    }
}
function $9fdc79397460abda$export$2cbce0dece413a39(visible) {
    return $a51c7802bfe1890e$export$c0bb0b647f701bb5`
    <div ?hidden=${!visible} id="form-enclosure" class="container items-center bg-white my-4 better-shadow">
    <div class="rounded-lg">

      <div class="py-2 px-5 mx-auto border-b-2 border-gray-600">
        <h2 class="text-2xl font-bold text-black">Add a new week</h2>
      </div>

      <form id="add-form" class="w-full px-12 pt-4 pb-5">
        <div class="w-full mx-auto">

          <div class="flex flex-wrap mb-2 p-4">

            <div class="px-1 w-4/5">
              <label class="basic-label tracking-wide text-left" for="input-title">
                Title
              </label>
              <input id='input-title' required class="basic-input" type="text" placeholder="Maths Week 1">
            </div>

            <div class="px-1 w-1/5">
              <label class="basic-label text-center" for="input-factor">
                Factor
              </label>
              <input id='input-factor' data-name='Factor' required class="text-center basic-input"
                type="number" min="0.05" step="0.05" placeholder="0.75">
            </div>

          </div>

          <div class="flex justify-between flex-wrap mb-2 p-4">

            <div class="px-1 w-1/5">
              <label class="basic-label text-center" for="input-activities">
                Activities
              </label>
              <input id='input-activities' data-name='Activities' required class="text-center basic-input"
                type="number" min="0" step="1" placeholder="1">
            </div>

            <div class="px-1 w-1/5">
              <label class="basic-label text-center" for="input-tutorials">
                Tutorials
              </label>
              <input id='input-tutorials' data-name='Tutorials' required class="text-center basic-input"
                type="number" min="0" step="1" placeholder="1">
            </div>

            <div class="px-1 w-1/5">
              <label class="basic-label text-center" for="input-assignments">
                Assignments
              </label>
              <input id='input-assignments' data-name='Assignments' required class="text-center basic-input"
                type="number" min="0" step="1" placeholder="2">
            </div>

            <div class="px-1 w-2/5">
              <label class="basic-label text-center" for="input-assignment-time">
                Time per Assignment
              </label>
              <input id='input-assignment-time' data-name='Assignment Time' required class="text-center basic-input"
                type="number" min="0" step="5" placeholder="30">
            </div>

          </div>

          <div class="flex justify-between flex-wrap mb-2 p-4">

            <div class="px-1 w-1/5">
              <label class="basic-label text-center" for="input-hasProgrammable">
                Programming
              </label>
              <div class="w-full h-4"></div>
              <input id="input-hasProgrammable" type="checkbox" class="mx-auto w-1/5 block" />
            </div>

            <div class="px-1 w-1/5">
              <label class="basic-label text-center" for="input-programming-practice">
                Practice
              </label>
              <input id='input-programming-practice' data-name='Programming Practice' required class="text-center basic-input"
                type="number" min="0" step="1" placeholder="2">
            </div>

            <div class="px-1 w-1/5">
              <label class="basic-label text-center" for="input-programming-graded">
                Graded
              </label>
              <input id='input-programming-graded' data-name='Programming Graded' required class="text-center basic-input"
                type="number" min="0" step="1" placeholder="2">
            </div>

            <div class="px-1 w-2/5">
              <label class="basic-label text-center" for="input-programming-time">
                Time per program
              </label>
              <input id='input-programming-time' data-name='Programming Time' required class="text-center basic-input"
                type="number" min="0" step="5" placeholder="30">
            </div>

          </div>

          <div class="p-4">
            <label class="basic-label">
              Video Lengths
            </label>
              <textarea id='input-videos' class="basic-input" rows="4"
                placeholder="10:59  12:22"></textarea>
          </div>

          <div class="mt-4 shadow-md">
            <button type="submit"
              class="w-full py-3 font-semibold leading-none text-white bg-lime-500 text-xl">
              ADD
            </button>
          </div>
        </div>

      </form>
    </div>
  </div>
  `;
}




// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var $0ecd02ab43ca5860$var$getRandomValues;
var $0ecd02ab43ca5860$var$rnds8 = new Uint8Array(16);
function $0ecd02ab43ca5860$export$2e2bcd8739ae039() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!$0ecd02ab43ca5860$var$getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        $0ecd02ab43ca5860$var$getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
        if (!$0ecd02ab43ca5860$var$getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return $0ecd02ab43ca5860$var$getRandomValues($0ecd02ab43ca5860$var$rnds8);
}


var $62199fa2dd5b7127$export$2e2bcd8739ae039 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;


function $573f36ad48eeb240$var$validate(uuid) {
    return typeof uuid === 'string' && $62199fa2dd5b7127$export$2e2bcd8739ae039.test(uuid);
}
var $573f36ad48eeb240$export$2e2bcd8739ae039 = $573f36ad48eeb240$var$validate;


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var $24cec342d7cb7658$var$byteToHex = [];
for(var $24cec342d7cb7658$var$i = 0; $24cec342d7cb7658$var$i < 256; ++$24cec342d7cb7658$var$i)$24cec342d7cb7658$var$byteToHex.push(($24cec342d7cb7658$var$i + 256).toString(16).substr(1));
function $24cec342d7cb7658$var$stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    var uuid = ($24cec342d7cb7658$var$byteToHex[arr[offset + 0]] + $24cec342d7cb7658$var$byteToHex[arr[offset + 1]] + $24cec342d7cb7658$var$byteToHex[arr[offset + 2]] + $24cec342d7cb7658$var$byteToHex[arr[offset + 3]] + '-' + $24cec342d7cb7658$var$byteToHex[arr[offset + 4]] + $24cec342d7cb7658$var$byteToHex[arr[offset + 5]] + '-' + $24cec342d7cb7658$var$byteToHex[arr[offset + 6]] + $24cec342d7cb7658$var$byteToHex[arr[offset + 7]] + '-' + $24cec342d7cb7658$var$byteToHex[arr[offset + 8]] + $24cec342d7cb7658$var$byteToHex[arr[offset + 9]] + '-' + $24cec342d7cb7658$var$byteToHex[arr[offset + 10]] + $24cec342d7cb7658$var$byteToHex[arr[offset + 11]] + $24cec342d7cb7658$var$byteToHex[arr[offset + 12]] + $24cec342d7cb7658$var$byteToHex[arr[offset + 13]] + $24cec342d7cb7658$var$byteToHex[arr[offset + 14]] + $24cec342d7cb7658$var$byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!$573f36ad48eeb240$export$2e2bcd8739ae039(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
var $24cec342d7cb7658$export$2e2bcd8739ae039 = $24cec342d7cb7658$var$stringify;


function $300e172487e56da3$var$v4(options, buf, offset) {
    options = options || {
    };
    var rnds = options.random || (options.rng || $0ecd02ab43ca5860$export$2e2bcd8739ae039)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(var i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return $24cec342d7cb7658$export$2e2bcd8739ae039(rnds);
}
var $300e172487e56da3$export$2e2bcd8739ae039 = $300e172487e56da3$var$v4;



/** @ignore */ function $58a29a379dbc9264$var$uid() {
    const length = new Int8Array(1);
    window.crypto.getRandomValues(length);
    const array = new Uint8Array(Math.max(16, Math.abs(length[0])));
    window.crypto.getRandomValues(array);
    return array.join('');
}
/**
 * Transforms a callback function to a string identifier that can be passed to the backend.
 * The backend uses the identifier to `eval()` the callback.
 *
 * @return A unique identifier associated with the callback function.
 */ function $58a29a379dbc9264$export$4bb129cdd1bfa196(callback, once = false) {
    const identifier = $58a29a379dbc9264$var$uid();
    Object.defineProperty(window, identifier, {
        value: (result)=>{
            if (once) Reflect.deleteProperty(window, identifier);
            return callback?.(result);
        },
        writable: false,
        configurable: true
    });
    return identifier;
}
/**
 * Sends a message to the backend.
 *
 * @param cmd The command name.
 * @param args The optional arguments to pass to the command.
 * @return A promise resolving or rejecting to the backend response.
 */ async function $58a29a379dbc9264$export$468cda29b159ee5d(cmd, args = {
}) {
    return new Promise((resolve, reject)=>{
        const callback = $58a29a379dbc9264$export$4bb129cdd1bfa196((e)=>{
            resolve(e);
            Reflect.deleteProperty(window, error);
        }, true);
        const error = $58a29a379dbc9264$export$4bb129cdd1bfa196((e)=>{
            reject(e);
            Reflect.deleteProperty(window, callback);
        }, true);
        window.rpc.notify(cmd, {
            __invokeKey: __TAURI_INVOKE_KEY__,
            callback: callback,
            error: error,
            ...args
        });
    });
}
/**
 * Convert a device file path to an URL that can be loaded by the webview.
 * Note that `asset:` must be allowed on the `csp` value configured on `tauri.conf.json`.
 *
 * @param  filePath the file path. On Windows, the drive name must be omitted, i.e. using `/Users/user/file.png` instead of `C:/Users/user/file.png`.
 *
 * @return the URL that can be used as source on the webview
 */ function $58a29a379dbc9264$export$ff8d5d24eb9a44cb(filePath) {
    return navigator.userAgent.includes('Windows') ? `https://asset.localhost/${filePath}` : `asset://${filePath}`;
}


async function $ba486902928da365$export$cb94bbae4adf94e4(command) {
    return $58a29a379dbc9264$export$468cda29b159ee5d('tauri', command);
}


var $61d50d698abff50d$export$935a0db531ce0305;
(function(BaseDirectory) {
    BaseDirectory[BaseDirectory["Audio"] = 1] = "Audio";
    BaseDirectory[BaseDirectory["Cache"] = 2] = "Cache";
    BaseDirectory[BaseDirectory["Config"] = 3] = "Config";
    BaseDirectory[BaseDirectory["Data"] = 4] = "Data";
    BaseDirectory[BaseDirectory["LocalData"] = 5] = "LocalData";
    BaseDirectory[BaseDirectory["Desktop"] = 6] = "Desktop";
    BaseDirectory[BaseDirectory["Document"] = 7] = "Document";
    BaseDirectory[BaseDirectory["Download"] = 8] = "Download";
    BaseDirectory[BaseDirectory["Executable"] = 9] = "Executable";
    BaseDirectory[BaseDirectory["Font"] = 10] = "Font";
    BaseDirectory[BaseDirectory["Home"] = 11] = "Home";
    BaseDirectory[BaseDirectory["Picture"] = 12] = "Picture";
    BaseDirectory[BaseDirectory["Public"] = 13] = "Public";
    BaseDirectory[BaseDirectory["Runtime"] = 14] = "Runtime";
    BaseDirectory[BaseDirectory["Template"] = 15] = "Template";
    BaseDirectory[BaseDirectory["Video"] = 16] = "Video";
    BaseDirectory[BaseDirectory["Resource"] = 17] = "Resource";
    BaseDirectory[BaseDirectory["App"] = 18] = "App";
    BaseDirectory[BaseDirectory["Current"] = 19] = "Current";
})($61d50d698abff50d$export$935a0db531ce0305 || ($61d50d698abff50d$export$935a0db531ce0305 = {
}));
/**
 * Reads a file as UTF-8 encoded string.
 *
 * @param filePath Path to the file.
 * @param options Configuration object.
 * @returns A promise resolving to the file content as a UTF-8 encoded string.
 */ async function $61d50d698abff50d$export$177308921a610223(filePath, options = {
}) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Fs',
        message: {
            cmd: 'readTextFile',
            path: filePath,
            options: options
        }
    });
}
/**
 * Reads a file as byte array.
 *
 * @param filePath Path to the file.
 * @param options Configuration object.
 * @returns A promise resolving to the file bytes array.
 */ async function $61d50d698abff50d$export$8cd2d0b72833f623(filePath, options = {
}) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Fs',
        message: {
            cmd: 'readBinaryFile',
            path: filePath,
            options: options
        }
    });
}
/**
 * Writes a text file.
 *
 * @param file File configuration object.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function $61d50d698abff50d$export$552bfb764b5cd2b4(file, options = {
}) {
    if (typeof options === 'object') Object.freeze(options);
    if (typeof file === 'object') Object.freeze(file);
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Fs',
        message: {
            cmd: 'writeFile',
            path: file.path,
            contents: file.contents,
            options: options
        }
    });
}
/** @ignore */ const $61d50d698abff50d$var$CHUNK_SIZE = 65536;
/**
 * Convert an Uint8Array to ascii string.
 *
 * @ignore
 * @param arr
 * @returns An ASCII string.
 */ function $61d50d698abff50d$var$uint8ArrayToString(arr) {
    if (arr.length < $61d50d698abff50d$var$CHUNK_SIZE) return String.fromCharCode.apply(null, Array.from(arr));
    let result = '';
    const arrLen = arr.length;
    for(let i = 0; i < arrLen; i++){
        const chunk = arr.subarray(i * $61d50d698abff50d$var$CHUNK_SIZE, (i + 1) * $61d50d698abff50d$var$CHUNK_SIZE);
        result += String.fromCharCode.apply(null, Array.from(chunk));
    }
    return result;
}
/**
 * Convert an ArrayBuffer to base64 encoded string.
 *
 * @ignore
 * @param buffer
 * @returns A base64 encoded string.
 */ function $61d50d698abff50d$var$arrayBufferToBase64(buffer) {
    const str = $61d50d698abff50d$var$uint8ArrayToString(new Uint8Array(buffer));
    return btoa(str);
}
/**
 * Writes a binary file.
 *
 * @param file Write configuration object.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function $61d50d698abff50d$export$be8585a11be8d850(file, options = {
}) {
    if (typeof options === 'object') Object.freeze(options);
    if (typeof file === 'object') Object.freeze(file);
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Fs',
        message: {
            cmd: 'writeBinaryFile',
            path: file.path,
            contents: $61d50d698abff50d$var$arrayBufferToBase64(file.contents),
            options: options
        }
    });
}
/**
 * List directory files.
 *
 * @param dir Path to the directory to read.
 * @param options Configuration object.
 * @returns A promise resolving to the directory entries.
 */ async function $61d50d698abff50d$export$2cab79cede1f94ef(dir, options = {
}) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Fs',
        message: {
            cmd: 'readDir',
            path: dir,
            options: options
        }
    });
}
/**
 * Creates a directory.
 * If one of the path's parent components doesn't exist
 * and the `recursive` option isn't set to true, the promise will be rejected.
 *
 * @param dir Path to the directory to create.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function $61d50d698abff50d$export$8ffa162de829532c(dir, options = {
}) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Fs',
        message: {
            cmd: 'createDir',
            path: dir,
            options: options
        }
    });
}
/**
 * Removes a directory.
 * If the directory is not empty and the `recursive` option isn't set to true, the promise will be rejected.
 *
 * @param dir Path to the directory to remove.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function $61d50d698abff50d$export$75426ec8836e4c8(dir, options = {
}) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Fs',
        message: {
            cmd: 'removeDir',
            path: dir,
            options: options
        }
    });
}
/**
 * Copys a file to a destination.
 *
 * @param source A path of the file to copy.
 * @param destination A path for the destination file.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function $61d50d698abff50d$export$c763efb2c06e223f(source, destination, options = {
}) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Fs',
        message: {
            cmd: 'copyFile',
            source: source,
            destination: destination,
            options: options
        }
    });
}
/**
 * Removes a file.
 *
 * @param file Path to the file to remove.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function $61d50d698abff50d$export$f9daa85ef05b41c1(file, options = {
}) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Fs',
        message: {
            cmd: 'removeFile',
            path: file,
            options: options
        }
    });
}
/**
 * Renames a file.
 *
 * @param oldPath A path of the file to rename.
 * @param newPath A path of the new file name.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function $61d50d698abff50d$export$35956cb5939e0c69(oldPath, newPath, options = {
}) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Fs',
        message: {
            cmd: 'renameFile',
            oldPath: oldPath,
            newPath: newPath,
            options: options
        }
    });
}




// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/** @ignore */ function $ef35292e2d1574b0$export$a10d59b01729022b() {
    return navigator.appVersion.includes('Linux');
}
function $ef35292e2d1574b0$export$f993c945890e93ba() {
    return navigator.appVersion.includes('Win');
}
function $ef35292e2d1574b0$export$6159e43e50a41987() {
    return navigator.appVersion.includes('Mac');
}


/**
 * The path module provides utilities for working with file and directory paths.
 *
 * This package is also accessible with `window.__TAURI__.path` when `tauri.conf.json > build > withGlobalTauri` is set to true.
 *
 * The APIs must be allowlisted on `tauri.conf.json`:
 * ```json
 * {
 *   "tauri": {
 *     "allowlist": {
 *       "path": {
 *         "all": true, // enable all Path APIs
 *       }
 *     }
 *   }
 * }
 * ```
 * It is recommended to allowlist only the APIs you use for optimal bundle size and security.
 * @module
 */ /**
 * Returns the path to the suggested directory for your app config files.
 * Resolves to `${configDir}/${bundleIdentifier}`, where `bundleIdentifier` is the value configured on `tauri.conf.json > tauri > bundle > identifier`.
 *
 * @returns
 */ async function $877b126e36883e53$export$56ea8a400e2932d4() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.App
        }
    });
}
/**
 * Returns the path to the user's audio directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_MUSIC_DIR`.
 * - **macOS:** Resolves to `$HOME/Music`.
 * - **Windows:** Resolves to `{FOLDERID_Music}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$80972f2b714ec89a() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Audio
        }
    });
}
/**
 * Returns the path to the user's cache directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_CACHE_HOME` or `$HOME/.cache`.
 * - **macOS:** Resolves to `$HOME/Library/Caches`.
 * - **Windows:** Resolves to `{FOLDERID_LocalAppData}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$212994f9616d6a96() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Cache
        }
    });
}
/**
 * Returns the path to the user's config directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_CONFIG_HOME` or `$HOME/.config`.
 * - **macOS:** Resolves to `$HOME/Library/Application Support`.
 * - **Windows:** Resolves to `{FOLDERID_LocalAppData}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$9001346227a6fc19() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Config
        }
    });
}
/**
 * Returns the path to the user's data directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
 * - **macOS:** Resolves to `$HOME/Library/Application Support`.
 * - **Windows:** Resolves to `{FOLDERID_RoamingAppData}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$fbc2f06101237695() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Data
        }
    });
}
/**
 * Returns the path to the user's desktop directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_DESKTOP_DIR`.
 * - **macOS:** Resolves to `$HOME/Library/Desktop`.
 * - **Windows:** Resolves to `{FOLDERID_Desktop}`.

 * @returns
 */ async function $877b126e36883e53$export$a50bd16b0c43ad2f() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Desktop
        }
    });
}
/**
 * Returns the path to the user's document directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_DOCUMENTS_DIR`.
 * - **macOS:** Resolves to `$HOME/Documents`.
 * - **Windows:** Resolves to `{FOLDERID_Documents}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$a429a5561f1dc3d6() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Document
        }
    });
}
/**
 * Returns the path to the user's download directory.
 *
 * ## Platform-specific
 *
 * - **Linux**: Resolves to `$XDG_DOWNLOAD_DIR`.
 * - **macOS**: Resolves to `$HOME/Downloads`.
 * - **Windows**: Resolves to `{FOLDERID_Downloads}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$9e45585b4bee89a1() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Download
        }
    });
}
/**
 * Returns the path to the user's executable directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_BIN_HOME/../bin` or `$XDG_DATA_HOME/../bin` or `$HOME/.local/bin`.
 * - **macOS:** Not supported.
 * - **Windows:** Not supported.
 *
 * @returns
 */ async function $877b126e36883e53$export$e93cc8051516ab6e() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Executable
        }
    });
}
/**
 * Returns the path to the user's font directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_DATA_HOME/fonts` or `$HOME/.local/share/fonts`.
 * - **macOS:** Resolves to `$HOME/Library/Fonts`.
 * - **Windows:** Not supported.
 *
 * @returns
 */ async function $877b126e36883e53$export$3fb5697a1989111() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Font
        }
    });
}
/**
 * Returns the path to the user's home directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$HOME`.
 * - **macOS:** Resolves to `$HOME`.
 * - **Windows:** Resolves to `{FOLDERID_Profile}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$e401803eb3bf9d2f() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Home
        }
    });
}
/**
 * Returns the path to the user's local data directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
 * - **macOS:** Resolves to `$HOME/Library/Application Support`.
 * - **Windows:** Resolves to `{FOLDERID_LocalAppData}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$121e57f1d2014b17() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.LocalData
        }
    });
}
/**
 * Returns the path to the user's picture directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_PICTURES_DIR`.
 * - **macOS:** Resolves to `$HOME/Pictures`.
 * - **Windows:** Resolves to `{FOLDERID_Pictures}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$c6dd1bb2709cdc52() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Picture
        }
    });
}
/**
 * Returns the path to the user's public directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_PUBLICSHARE_DIR`.
 * - **macOS:** Resolves to `$HOME/Public`.
 * - **Windows:** Resolves to `{FOLDERID_Public}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$6c70c65865fc400f() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Public
        }
    });
}
/**
 * Returns the path to the user's resource directory.
 *
 * @returns
 */ async function $877b126e36883e53$export$461fb6e53e44bc85() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Resource
        }
    });
}
/**
 * Returns the path to the user's runtime directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_RUNTIME_DIR`.
 * - **macOS:** Not supported.
 * - **Windows:** Not supported.
 *
 * @returns
 */ async function $877b126e36883e53$export$73803a3ab9861602() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Runtime
        }
    });
}
/**
 * Returns the path to the user's template directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_TEMPLATES_DIR`.
 * - **macOS:** Not supported.
 * - **Windows:** Resolves to `{FOLDERID_Templates}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$9ca3efa71cee2d47() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Template
        }
    });
}
/**
 * Returns the path to the user's video directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_VIDEOS_DIR`.
 * - **macOS:** Resolves to `$HOME/Movies`.
 * - **Windows:** Resolves to `{FOLDERID_Videos}`.
 *
 * @returns
 */ async function $877b126e36883e53$export$5de685dcef85f37c() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Video
        }
    });
}
/**
 * Returns the path to the current working directory.
 *
 * @returns
 */ async function $877b126e36883e53$export$3290e8ab7509f3a9() {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: $61d50d698abff50d$export$935a0db531ce0305.Current
        }
    });
}
/**
 * Provides the platform-specific path segment separator:
 * - `\` on Windows
 * - `/` on POSIX
 */ const $877b126e36883e53$export$5aee1a5bd9743d8f = $ef35292e2d1574b0$export$f993c945890e93ba() ? '\\' : '/';
/**
 * Provides the platform-specific path segment delimiter:
 * - `;` on Windows
 * - `:` on POSIX
 */ const $877b126e36883e53$export$c889f2fcc19dbf12 = $ef35292e2d1574b0$export$f993c945890e93ba() ? ';' : ':';
/**
 * Resolves a sequence of `paths` or `path` segments into an absolute path.
 *
 * @param paths A sequence of paths or path segments.
 */ async function $877b126e36883e53$export$f7ad0328861e2f03(...paths) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolve',
            paths: paths
        }
    });
}
/**
 * Normalizes the given `path`, resolving `'..'` and `'.'` segments and resolve symolic links.
 */ async function $877b126e36883e53$export$a3295358bff77e(path) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'normalize',
            path: path
        }
    });
}
/**
 *  Joins all given `path` segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
 *
 * @param paths A sequence of path segments.
 */ async function $877b126e36883e53$export$f7e2c8231c57a8bd(...paths) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'join',
            paths: paths
        }
    });
}
/**
 * Returns the directory name of a `path`. Trailing directory separators are ignored.
 */ async function $877b126e36883e53$export$7f7b8152cc673abe(path) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'dirname',
            path: path
        }
    });
}
/**
 * Returns the extension of the `path`.
 */ async function $877b126e36883e53$export$d0e86f3a75393fa3(path) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'extname',
            path: path
        }
    });
}
/**
 *  Returns the last portion of a `path`. Trailing directory separators are ignored.
 *
 * @param ext An optional file extension to be removed from the returned path.
 */ async function $877b126e36883e53$export$9bf319d8f74f51d1(path, ext) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'basename',
            path: path,
            ext: ext
        }
    });
}
async function $877b126e36883e53$export$e434c7255acda994(path) {
    return $ba486902928da365$export$cb94bbae4adf94e4({
        __tauriModule: 'Path',
        message: {
            cmd: 'isAbsolute',
            path: path
        }
    });
}


async function $4b2c437b8a34aefc$export$5e650096d9f7c4ee(message) {
    if (window.__TAURI__) return window.confirm("Do you really want to delete this ?");
    else if (window.go) return window.go.main.App.ConfirmDelete();
    else return confirm("Do you really want to delete this ?");
}
async function $4b2c437b8a34aefc$export$e620933a198f7bc(data) {
    if (window.__TAURI__) try {
        let homeDir = await $877b126e36883e53$export$e401803eb3bf9d2f();
        let path = homeDir + $4b2c437b8a34aefc$var$DATA_FILE_NAME;
        let text = await $61d50d698abff50d$export$552bfb764b5cd2b4({
            contents: JSON.stringify(data, null, 2),
            path: path
        });
    } catch (e) {
        console.log(e);
    }
}
async function $4b2c437b8a34aefc$export$9f183916f445c495() {
    if (window.__TAURI__) {
        let text;
        try {
            let homeDir = await $877b126e36883e53$export$e401803eb3bf9d2f();
            let file = homeDir + $4b2c437b8a34aefc$var$DATA_FILE_NAME;
            text = await $61d50d698abff50d$export$177308921a610223(file);
            console.log(text);
        } catch (e) {
            throw e;
        }
        return text;
    }
}
const $4b2c437b8a34aefc$var$TAURI_BASE_DIR = ".tauri_progres";
const $4b2c437b8a34aefc$var$DATA_FILE_NAME = $4b2c437b8a34aefc$var$TAURI_BASE_DIR + "/data.json";
async function $4b2c437b8a34aefc$export$39989cb38ffcc5d7() {
    if (window.__TAURI__) {
        let homeDir;
        try {
            homeDir = await $877b126e36883e53$export$e401803eb3bf9d2f();
            let dataDir = homeDir + $4b2c437b8a34aefc$var$TAURI_BASE_DIR;
            let created = await $61d50d698abff50d$export$8ffa162de829532c(dataDir);
            console.log("Created", created);
        } catch (e) {
            console.log(e);
            if (typeof e == 'string' && e.includes("os error 17")) ;
            else throw e;
        }
        // Folder now exists
        try {
            let homeDir = await $877b126e36883e53$export$e401803eb3bf9d2f();
            let file = homeDir + $4b2c437b8a34aefc$var$DATA_FILE_NAME;
            let text = await $61d50d698abff50d$export$177308921a610223(file);
            console.log(text);
        } catch (e1) {
            console.log(e1);
            if (typeof e1 == 'string' && e1.includes("os error 2")) // no file exists, create now
            try {
                let homeDir = await $877b126e36883e53$export$e401803eb3bf9d2f();
                let path = homeDir + $4b2c437b8a34aefc$var$DATA_FILE_NAME;
                let text = await $61d50d698abff50d$export$552bfb764b5cd2b4({
                    contents: "{}",
                    path: path
                });
                console.log(">>>>>>>>>>>>>>>", "EXISTING", text);
            } catch (error) {
                throw error;
            }
            else throw e1;
        }
    }
}


const $850e48264ea38c74$var$progress = [
    "text-red-500",
    "text-orange-700",
    "text-orange-500",
    "text-amber-600",
    "text-amber-500",
    "text-amber-500",
    "text-amber-400",
    "text-yellow-500",
    "text-yellow-400",
    "text-lime-400",
    "text-lime-500"
];
const $850e48264ea38c74$var$progress_bg = [
    "bg-red-500",
    "bg-red-400",
    "bg-red-400",
    "bg-red-300",
    "bg-red-300",
    "bg-yellow-400",
    "bg-yellow-400",
    "bg-amber-300",
    "bg-amber-300",
    "bg-lime-400",
    "bg-lime-500", 
];
class $850e48264ea38c74$export$fca4f8121099df57 {
    constructor(input){
        this.id = 'uuid';
        this.name = "Sample Week 1";
        this.factor = 1;
        this.solvableTime = 20;
        this.solvable = {
            activities: {
                total: 3,
                left: 3
            },
            tutorials: {
                total: 2,
                left: 2
            },
            assignments: {
                total: 1,
                left: 1
            }
        };
        this.hasProgrammable = false;
        this.programmableTime = 0;
        this.programmable = {
            practice: {
                total: 1,
                left: 1
            },
            graded: {
                total: 1,
                left: 1
            }
        };
        this.videos = [
            {
                m: 40,
                s: 10,
                seen: false
            }
        ];
        this.lastChangeTime = 123123;
        this.id = input.hasOwnProperty('id') ? input.id : $300e172487e56da3$export$2e2bcd8739ae039();
        this.name = input.name;
        this.factor = parseFloat(input.factor);
        this.solvableTime = input.solvableTime;
        this.videos = [];
        this.videos = input.videos.map((video)=>{
            return {
                m: parseInt(video.m, 10),
                s: parseInt(video.s, 10),
                seen: Boolean(video.seen)
            };
        });
        this.solvable = {
            activities: {
                total: parseInt(input.solvable.activities.total, 10),
                left: parseInt(input.solvable.activities.left, 10)
            },
            tutorials: {
                total: parseInt(input.solvable.tutorials.total, 10),
                left: parseInt(input.solvable.tutorials.left, 10)
            },
            assignments: {
                total: parseInt(input.solvable.assignments.total, 10),
                left: parseInt(input.solvable.assignments.left, 10)
            }
        };
        if (input.hasProgrammable) {
            this.hasProgrammable = input.hasProgrammable;
            this.programmableTime = input.programmableTime;
            this.programmable = {
                practice: {
                    total: parseInt(input.programmable.practice.total, 10),
                    left: parseInt(input.programmable.practice.left, 10)
                },
                graded: {
                    total: parseInt(input.programmable.graded.total, 10),
                    left: parseInt(input.programmable.graded.left, 10)
                }
            };
        }
        this.hidden = input.hasOwnProperty('hidden') ? input.hidden : false;
        this.locked = input.hasOwnProperty('locked') ? input.locked : false;
        this.deleted = input.hasOwnProperty('deleted') ? input.deleted : false;
        this.menuVisible = false;
        this.updateLastChangeTime(false);
        console.log(this);
    }
    setUpdateFunction(fn) {
        this.updateMe = fn;
    }
    setAlertFunction(fn1) {
        this.alertUser = fn1;
    }
    setDeleteFunction(fn2) {
        this.deleteMe = fn2;
    }
    updateLastChangeTime(someProgress) {
        this.lastChangeTime = Date.now();
        if (this.updateMe) this.updateMe(someProgress && this.isDone());
    }
    flipVideo(i3) {
        if (this.videos[i3].seen) this.markVideoLeft(i3);
        else this.markVideoSeen(i3);
    }
    markVideoSeen(i1) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (this.videos[i1].seen) {
            this.alertUser('error', "Already done");
            return;
        }
        this.videos[i1].seen = true;
        this.updateLastChangeTime(true);
    }
    markVideoLeft(i2) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (!this.videos[i2].seen) {
            this.alertUser('error', "Already done");
            return;
        }
        this.videos[i2].seen = false;
        this.updateLastChangeTime(false);
    }
    markSolvableDone(type4) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (this.solvable[type4].left <= 0) {
            this.alertUser('error', "Already done");
            return;
        }
        this.solvable[type4].left -= 1;
        this.updateLastChangeTime(true);
    }
    markSolvableNotDone(type1) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (this.solvable[type1].left + 1 > this.solvable[type1].total) {
            this.alertUser('error', "Already done");
            return;
        }
        this.solvable[type1].left += 1;
        this.updateLastChangeTime(false);
    }
    markProgrammableDone(type2) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (this.programmable[type2].left <= 0) {
            this.alertUser('error', "Already done");
            return;
        }
        this.programmable[type2].left -= 1;
        this.updateLastChangeTime(true);
    }
    markProgrammableNotDone(type3) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (this.programmable[type3].left + 1 > this.programmable[type3].total) {
            this.alertUser('error', "Already done");
            return;
        }
        this.programmable[type3].left += 1;
        this.updateLastChangeTime(false);
    }
    validateSelf() {
    }
    getTotalMinutes() {
        let m = 0;
        let s = 0;
        this.videos.forEach((video)=>{
            m += video.m;
            s += video.s;
        });
        m += s / 60;
        let solvableCount = Object.entries(this.solvable).reduce((prev, [_key, data])=>{
            return prev + data.total;
        }, 0);
        let programmableCount = 0;
        if (this.hasProgrammable) programmableCount = Object.entries(this.programmable).reduce((prev, [_key, data])=>{
            return prev + data.total;
        }, 0);
        m += this.solvableTime * solvableCount;
        m += this.programmableTime * programmableCount;
        m /= this.factor * 60;
        return m;
    }
    getElapsedMinutes() {
        let m = 0;
        let s = 0;
        this.videos.forEach((video)=>{
            if (video.seen) {
                m += video.m;
                s += video.s;
            }
        });
        m += s / 60;
        let solvableCount = Object.entries(this.solvable).reduce((prev, [_key, data])=>{
            return prev + (data.total - data.left);
        }, 0);
        let programmableCount = 0;
        if (this.hasProgrammable) programmableCount = Object.entries(this.programmable).reduce((prev, [_key, data])=>{
            return prev + (data.total - data.left);
        }, 0);
        m += this.solvableTime * solvableCount;
        m += this.programmableTime * programmableCount;
        m /= this.factor * 60;
        return m;
    }
    getPercentage(total1, left1) {
        return Math.min(Math.ceil(100 * left1 / total1), 100);
    }
    isDone() {
        let _projected = this.getTotalMinutes();
        let _elasped = this.getElapsedMinutes();
        let _percentage = this.getPercentage(_projected, _elasped);
        return Math.floor(_percentage / 10) == 10;
    }
    addEventListeners() {
        let titles = [
            'Activities',
            'Tutorials',
            'Assignments'
        ];
        titles.forEach((type)=>{
            let ttype = type.toLowerCase();
            if (this.solvable[ttype].total == 0) return;
            let downBtn = document.getElementById(`${this.id}-solvables-${ttype}-minus`);
            let upBtn = document.getElementById(`${this.id}-solvables-${ttype}-plus`);
            upBtn.addEventListener('click', ()=>{
                this.markSolvableDone(ttype);
            });
            downBtn.addEventListener('click', ()=>{
                this.markSolvableNotDone(ttype);
            });
        });
        titles = [
            'Graded',
            'Practice'
        ];
        titles.forEach((type)=>{
            let ttype = type.toLowerCase();
            if (this.programmable[ttype].total == 0) return;
            let downBtn = document.getElementById(`${this.id}-programmables-${ttype}-minus`);
            let upBtn = document.getElementById(`${this.id}-programmables-${ttype}-plus`);
            upBtn.addEventListener('click', ()=>{
                this.markProgrammableDone(ttype);
            });
            downBtn.addEventListener('click', ()=>{
                this.markProgrammableNotDone(ttype);
            });
        });
        document.getElementById(`${this.id}-menu`).addEventListener('click', ()=>{
            clearTimeout(this.hideMenuTimer);
            this.menuVisible = !this.menuVisible;
            this.updateLastChangeTime(false);
            if (this.menuVisible) this.hideMenuTimer = setTimeout(()=>{
                this.menuVisible = !this.menuVisible;
                this.updateLastChangeTime(false);
            }, 5000);
        });
        document.getElementById(`${this.id}-hide`).addEventListener('click', ()=>{
            clearTimeout(this.hideMenuTimer);
            this.menuVisible = !this.menuVisible;
            this.hidden = !this.hidden;
            this.updateLastChangeTime(false);
        });
        document.getElementById(`${this.id}-lock`).addEventListener('click', ()=>{
            clearTimeout(this.hideMenuTimer);
            this.menuVisible = !this.menuVisible;
            this.locked = !this.locked;
            this.updateLastChangeTime(false);
        });
        document.getElementById(`${this.id}-delete`).addEventListener('click', async ()=>{
            clearTimeout(this.hideMenuTimer);
            this.menuVisible = !this.menuVisible;
            if (this.locked) {
                this.alertUser('error', "Please unlock before making any changes");
                return;
            }
            let confirmed = await $4b2c437b8a34aefc$export$5e650096d9f7c4ee("Do you really want to delete this ?");
            if (confirmed) {
                this.deleted = true;
                this.deleteMe();
            } else this.alertUser('warning', "Please be careful");
        });
        this.videos.forEach((_video, i)=>{
            let btn = document.getElementById(`${this.id}-video-${i}`);
            btn.addEventListener('click', ()=>{
                this.flipVideo(i);
            });
        });
    }
    static Validate(input1) {
        if (!input1.id || !input1.name) throw new Error(`${input1.id} ${input1.name}`);
        if (!Number.isFinite(input1.factor) || !Number.isInteger(input1.solvableTime)) throw new Error();
        input1.videos.forEach((video)=>{
            if (!Number.isInteger(video.m) || !Number.isInteger(video.s)) throw new Error();
            if (video.s < 0 || video.s >= 60) throw new Error();
            if (video.m < 0) throw new Error();
        });
        [
            "activities",
            "tutorials",
            "assignments"
        ].forEach((key)=>{
            let total = input1.solvable[key].total;
            let left = input1.solvable[key].left;
            if (!Number.isInteger(total) || !Number.isInteger(left)) throw new Error();
            if (total < 0 || left < 0 || left > total) throw new Error();
        });
        if (input1.hasProgrammable) [
            "graded",
            "practice"
        ].forEach((key)=>{
            let total = input1.programmable[key].total;
            let left = input1.programmable[key].left;
            if (!Number.isInteger(total) || !Number.isInteger(left)) throw new Error();
            if (total < 0 || left < 0 || left > total) throw new Error();
        });
    }
    static Parse(input2) {
        try {
            $850e48264ea38c74$export$fca4f8121099df57.Validate(input2);
            return new $850e48264ea38c74$export$fca4f8121099df57(input2);
        } catch (e) {
            return null;
        }
    }
}
function $850e48264ea38c74$export$b93cec6dd11b1714(week) {
    if (week.deleted) return $a51c7802bfe1890e$export$c0bb0b647f701bb5``;
    let id = week.id;
    let _projected = week.getTotalMinutes();
    let _elasped = week.getElapsedMinutes();
    let _percentage = week.getPercentage(_projected, _elasped);
    const max_in_row = 6;
    let videos = [];
    week.videos.forEach((video, i)=>{
        const firstVideoMargin = {
            'mb-4': i == 0 && week.videos.length > max_in_row
        };
        const btnClass = {
            'btn-checked': video.seen,
            'btn-unchecked': !video.seen
        };
        const inProgress = {
            'in-progress': !video.seen,
            'done': video.seen
        };
        videos.push($a51c7802bfe1890e$export$c0bb0b647f701bb5`
    <div class="video px-0 ${$6197f1f1b7c083f0$export$56cc687933817664(firstVideoMargin)}">
      <p class="video-text ${$6197f1f1b7c083f0$export$56cc687933817664(inProgress)}">${video.m.toFixed(0).padStart(2, "0")}:${video.s.toFixed(0).padStart(2, "0")}</p>
      <input type="checkbox" ? .checked=${video.seen} class="video-btn ${$6197f1f1b7c083f0$export$56cc687933817664(btnClass)}" id="${id}-video-${i}"></button>
    </div>
  `);
    });
    let solvables = [];
    let _solvable = week.solvable;
    let solvableData = [];
    solvableData.push({
        title: 'Activities',
        done: _solvable.activities.total - _solvable.activities.left,
        total: _solvable.activities.total
    });
    solvableData.push({
        title: 'Tutorials',
        done: _solvable.tutorials.total - _solvable.tutorials.left,
        total: _solvable.tutorials.total
    });
    solvableData.push({
        title: 'Assignments',
        done: _solvable.assignments.total - _solvable.assignments.left,
        total: _solvable.assignments.total
    });
    solvableData.forEach((data)=>{
        if (data.total == 0) return;
        const btnUpValid = data.total > data.done;
        const btnDownValid = data.done > 0;
        const inProgress = {
            'in-progress': btnUpValid,
            'done': !btnUpValid && btnDownValid
        };
        solvables.push($a51c7802bfe1890e$export$c0bb0b647f701bb5`
    <div class="act-time w-1/5">
      <h2 class="act-text ${$6197f1f1b7c083f0$export$56cc687933817664(inProgress)}"><span class="act-time-label">${data.title} : </span><br><span class="act-time-data">${data.done}/${data.total}</span></h2>
      <div class="act-btn-parent">
        <button ?hidden=${!btnUpValid} class="solvable-btn btn-up" id="${id}-solvables-${data.title.toLowerCase()}-plus"></button>
        <button ?hidden=${!btnDownValid} class="solvable-btn btn-down" id="${id}-solvables-${data.title.toLowerCase()}-minus"></button>
      </div>
    </div>
  `);
    });
    let programmables = [];
    if (week.hasProgrammable) {
        let _programmable = week.programmable;
        let programmableData = [];
        programmableData.push({
            title: 'Practice',
            done: _programmable.practice.total - _programmable.practice.left,
            total: _programmable.practice.total
        });
        programmableData.push({
            title: 'Graded',
            done: _programmable.graded.total - _programmable.graded.left,
            total: _programmable.graded.total
        });
        programmableData.forEach((data)=>{
            if (data.total == 0) return;
            const btnUpValid = data.total > data.done;
            const btnDownValid = data.done > 0;
            const inProgress = {
                'in-progress': btnUpValid,
                'done': !btnUpValid && btnDownValid
            };
            programmables.push($a51c7802bfe1890e$export$c0bb0b647f701bb5`
      <div class="act-time w-1/5">
        <h2 class="act-text ${$6197f1f1b7c083f0$export$56cc687933817664(inProgress)}"><span class="act-time-label">${data.title} : </span><br><span class="act-time-data">${data.done}/${data.total}</span></h2>
        <div class="act-btn-parent">
          <button ?hidden=${!btnUpValid} class="solvable-btn btn-up" id="${id}-programmables-${data.title.toLowerCase()}-plus"></button>
          <button ?hidden=${!btnDownValid} class="solvable-btn btn-down" id="${id}-programmables-${data.title.toLowerCase()}-minus"></button>
        </div>
      </div>
    `);
        });
    }
    // consider max 12 videos overall
    if (videos.length > max_in_row) // divide into two
    videos.splice(Math.ceil(videos.length / 2), 0, $a51c7802bfe1890e$export$c0bb0b647f701bb5`<div class="w-full"></div>`);
    let progressColorBg = {
        [$850e48264ea38c74$var$progress_bg[Math.floor(_percentage / 10)]]: true
    };
    const animatedBorderClassMap = {
        'gradient-border': Math.floor(_percentage / 10) == 10
    };
    let solvableHeading = "Solvable";
    if (solvables.length > 0 && solvables.length < 3 && programmables.length > 0 && programmables.length < 3) {
        solvableHeading = "Solvable + Programming";
        solvables.push(programmables.shift(), programmables.shift());
    }
    let videosContainerClass = {
        'pb-3': videos.length > 0,
        'pb-0': videos.length == 0
    };
    let solvableContainerBorderBottom = {
        'border-b-2': programmables.length > 0,
        'border-gray-600': programmables.length > 0
    };
    return $a51c7802bfe1890e$export$c0bb0b647f701bb5`
  <div class="container items-center bg-white my-4 better-shadow week-overall ${$6197f1f1b7c083f0$export$56cc687933817664(animatedBorderClassMap)}">
    <div>

      <!-- Heading -->
      <div class="week-heading-draggable pt-2 px-5 mx-auto justify-between bg-gray-800">
        <div class="week-heading-draggable w-full border-b-2 border-white justify-between inline-flex">
          <div class="week-heading-draggable inline-flex items-center">
            <h2 class="week-heading-draggable pb-1 text-2xl font-bold text-white">
              ${week.name}
            </h2>
          </div>
          <div class="week-heading-draggable inline-flex items-center move-up">
            <button class="week-heading-draggable rounded-button bg-white" id="${id}-menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>

            <div ?hidden=${!week.menuVisible}>
              <div class="dropdown-menu absolute w-60 shadow-lg bg-white divide-x divide-gray-100 right-10 grid grid-cols-3">
                <a class="text-gray-900 bg-white" id="${id}-lock"> ${week.locked ? 'Unlock' : 'Lock'} </a>
                <a class="text-gray-900 bg-white" id="${id}-hide"> ${week.hidden ? 'Unhide' : 'Hide'} </a>
                <a class="text-white bg-red-600" id="${id}-delete">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div ?hidden=${week.hidden} class="pt-1 px-5 mx-auto justify-between ${$6197f1f1b7c083f0$export$56cc687933817664(progressColorBg)}">
        <div class="pb-1 px-10 flex justify-between items-center border-b-2 border-gray-600">
          <p class="dispay-container">
            <span class="dispay-label justify-start">Projected:</span>
            <span class="dispay-data">${_projected.toFixed(1)}h</span>
          </p>

          <p class="dispay-container justify-center">
            <span class="dispay-label">Elapsed:</span>
            <span class="dispay-data">${_elasped.toFixed(1)}h</span>
          </p>

          <p class="dispay-container justify-end">
            <span class="dispay-label">Done:</span>
            <span class="dispay-data">${_percentage.toFixed(2)}%</span>
          </p>
        </div>
      </div>

      <!-- Videos -->
      <div ?hidden=${week.hidden} class="pt-2 bt-5 px-5 mx-auto justify-between">
        <div class="w-full border-b-2 border-gray-600">
          <h2 class="text-xl font-extrabold mb-2 text-black">
            Videos
          </h2>
          <div class="video-container flex justify-evenly flex-wrap ${$6197f1f1b7c083f0$export$56cc687933817664(videosContainerClass)}">
            ${videos}
          </div>
        </div>
      </div>

      <!-- Solvable -->
      <div ?hidden=${solvables.length == 0 || week.hidden} class="pt-2 bt-5 px-5 mx-auto justify-between">
        <div class="w-full ${$6197f1f1b7c083f0$export$56cc687933817664(solvableContainerBorderBottom)}">
          <h2 class="text-xl font-extrabold mb-2 text-black">
            ${solvableHeading}
          </h2>

          <div class="flex justify-around px-5 ${$6197f1f1b7c083f0$export$56cc687933817664({
        "pb-3": programmables.length > 0,
        "pb-4": programmables.length == 0
    })}">
            ${solvables}
          </div>
        </div>
      </div>

      <div ?hidden=${programmables.length == 0 || week.hidden} class="pt-2 pb-3 bt-5 px-5 mx-auto justify-between">
        <div class="w-full">
          <h2 class="text-xl font-extrabold mb-2 text-black">
            Programming
          </h2>

          <div class="flex justify-around px-5">
            ${programmables}
          </div>
        </div>
      </div>


    </div>
  </div>
  `;
}






var $09f30e741db80808$exports = {};
'use strict';
var $4eac73c568364dc5$exports = {};
'use strict';
var $4c46a2b84c6fbefa$exports = {};
$4c46a2b84c6fbefa$exports = function atoa(a, n) {
    return Array.prototype.slice.call(a, n);
};


var $402e721010f624ec$exports = {};
'use strict';
var $59172cb9d7f751f2$exports = {};
var $59172cb9d7f751f2$var$si = typeof setImmediate === 'function', $59172cb9d7f751f2$var$tick;
if ($59172cb9d7f751f2$var$si) $59172cb9d7f751f2$var$tick = function(fn) {
    setImmediate(fn);
};
else $59172cb9d7f751f2$var$tick = function(fn) {
    setTimeout(fn, 0);
};
$59172cb9d7f751f2$exports = $59172cb9d7f751f2$var$tick;


$402e721010f624ec$exports = function debounce(fn, args, ctx) {
    if (!fn) return;
    $59172cb9d7f751f2$exports(function run() {
        fn.apply(ctx || null, args || []);
    });
};


$4eac73c568364dc5$exports = function emitter(thing, options) {
    var opts = options || {
    };
    var evt = {
    };
    if (thing === undefined) thing = {
    };
    thing.on = function(type, fn) {
        if (!evt[type]) evt[type] = [
            fn
        ];
        else evt[type].push(fn);
        return thing;
    };
    thing.once = function(type, fn) {
        fn._once = true; // thing.off(fn) still works!
        thing.on(type, fn);
        return thing;
    };
    thing.off = function(type, fn) {
        var c = arguments.length;
        if (c === 1) delete evt[type];
        else if (c === 0) evt = {
        };
        else {
            var et = evt[type];
            if (!et) return thing;
            et.splice(et.indexOf(fn), 1);
        }
        return thing;
    };
    thing.emit = function() {
        var args = $4c46a2b84c6fbefa$exports(arguments);
        return thing.emitterSnapshot(args.shift()).apply(this, args);
    };
    thing.emitterSnapshot = function(type) {
        var et = (evt[type] || []).slice(0);
        return function() {
            var args = $4c46a2b84c6fbefa$exports(arguments);
            var ctx = this || thing;
            if (type === 'error' && opts.throws !== false && !et.length) throw args.length === 1 ? args[0] : args;
            et.forEach(function emitter(listen) {
                if (opts.async) $402e721010f624ec$exports(listen, args, ctx);
                else listen.apply(ctx, args);
                if (listen._once) thing.off(type, listen);
            });
            return thing;
        };
    };
    return thing;
};


var $ececc6f691b03e13$exports = {};
'use strict';
var $33907575323dc26e$exports = {};
var $33907575323dc26e$var$NativeCustomEvent = $parcel$global.CustomEvent;
function $33907575323dc26e$var$useNative() {
    try {
        var p = new $33907575323dc26e$var$NativeCustomEvent('cat', {
            detail: {
                foo: 'bar'
            }
        });
        return 'cat' === p.type && 'bar' === p.detail.foo;
    } catch (e) {
    }
    return false;
}
/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */ $33907575323dc26e$exports = $33907575323dc26e$var$useNative() ? $33907575323dc26e$var$NativeCustomEvent : // IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent(type, params) {
    var e = document.createEvent('CustomEvent');
    if (params) e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
    else e.initCustomEvent(type, false, false, void 0);
    return e;
} : // IE <= 8
function CustomEvent(type, params) {
    var e = document.createEventObject();
    e.type = type;
    if (params) {
        e.bubbles = Boolean(params.bubbles);
        e.cancelable = Boolean(params.cancelable);
        e.detail = params.detail;
    } else {
        e.bubbles = false;
        e.cancelable = false;
        e.detail = void 0;
    }
    return e;
};


var $ff6f9a541bed0afd$exports = {};
'use strict';
var $ff6f9a541bed0afd$var$eventmap = [];
var $ff6f9a541bed0afd$var$eventname = '';
var $ff6f9a541bed0afd$var$ron = /^on/;
for($ff6f9a541bed0afd$var$eventname in $parcel$global)if ($ff6f9a541bed0afd$var$ron.test($ff6f9a541bed0afd$var$eventname)) $ff6f9a541bed0afd$var$eventmap.push($ff6f9a541bed0afd$var$eventname.slice(2));
$ff6f9a541bed0afd$exports = $ff6f9a541bed0afd$var$eventmap;


var $ececc6f691b03e13$var$doc = $parcel$global.document;
var $ececc6f691b03e13$var$addEvent = $ececc6f691b03e13$var$addEventEasy;
var $ececc6f691b03e13$var$removeEvent = $ececc6f691b03e13$var$removeEventEasy;
var $ececc6f691b03e13$var$hardCache = [];
if (!$parcel$global.addEventListener) {
    $ececc6f691b03e13$var$addEvent = $ececc6f691b03e13$var$addEventHard;
    $ececc6f691b03e13$var$removeEvent = $ececc6f691b03e13$var$removeEventHard;
}
$ececc6f691b03e13$exports = {
    add: $ececc6f691b03e13$var$addEvent,
    remove: $ececc6f691b03e13$var$removeEvent,
    fabricate: $ececc6f691b03e13$var$fabricateEvent
};
function $ececc6f691b03e13$var$addEventEasy(el, type, fn, capturing) {
    return el.addEventListener(type, fn, capturing);
}
function $ececc6f691b03e13$var$addEventHard(el, type, fn) {
    return el.attachEvent('on' + type, $ececc6f691b03e13$var$wrap(el, type, fn));
}
function $ececc6f691b03e13$var$removeEventEasy(el, type, fn, capturing) {
    return el.removeEventListener(type, fn, capturing);
}
function $ececc6f691b03e13$var$removeEventHard(el, type, fn) {
    var listener = $ececc6f691b03e13$var$unwrap(el, type, fn);
    if (listener) return el.detachEvent('on' + type, listener);
}
function $ececc6f691b03e13$var$fabricateEvent(el, type, model) {
    var e1 = $ff6f9a541bed0afd$exports.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
    if (el.dispatchEvent) el.dispatchEvent(e1);
    else el.fireEvent('on' + type, e1);
    function makeClassicEvent() {
        var e;
        if ($ececc6f691b03e13$var$doc.createEvent) {
            e = $ececc6f691b03e13$var$doc.createEvent('Event');
            e.initEvent(type, true, true);
        } else if ($ececc6f691b03e13$var$doc.createEventObject) e = $ececc6f691b03e13$var$doc.createEventObject();
        return e;
    }
    function makeCustomEvent() {
        return new $33907575323dc26e$exports(type, {
            detail: model
        });
    }
}
function $ececc6f691b03e13$var$wrapperFactory(el, type, fn) {
    return function wrapper(originalEvent) {
        var e = originalEvent || $parcel$global.event;
        e.target = e.target || e.srcElement;
        e.preventDefault = e.preventDefault || function preventDefault() {
            e.returnValue = false;
        };
        e.stopPropagation = e.stopPropagation || function stopPropagation() {
            e.cancelBubble = true;
        };
        e.which = e.which || e.keyCode;
        fn.call(el, e);
    };
}
function $ececc6f691b03e13$var$wrap(el, type, fn) {
    var wrapper = $ececc6f691b03e13$var$unwrap(el, type, fn) || $ececc6f691b03e13$var$wrapperFactory(el, type, fn);
    $ececc6f691b03e13$var$hardCache.push({
        wrapper: wrapper,
        element: el,
        type: type,
        fn: fn
    });
    return wrapper;
}
function $ececc6f691b03e13$var$unwrap(el, type, fn) {
    var i = $ececc6f691b03e13$var$find(el, type, fn);
    if (i) {
        var wrapper = $ececc6f691b03e13$var$hardCache[i].wrapper;
        $ececc6f691b03e13$var$hardCache.splice(i, 1); // free up a tad of memory
        return wrapper;
    }
}
function $ececc6f691b03e13$var$find(el, type, fn) {
    var i, item;
    for(i = 0; i < $ececc6f691b03e13$var$hardCache.length; i++){
        item = $ececc6f691b03e13$var$hardCache[i];
        if (item.element === el && item.type === type && item.fn === fn) return i;
    }
}


var $b91e76632f4b3a1d$exports = {};
'use strict';
var $b91e76632f4b3a1d$var$cache = {
};
var $b91e76632f4b3a1d$var$start = '(?:^|\\s)';
var $b91e76632f4b3a1d$var$end = '(?:\\s|$)';
function $b91e76632f4b3a1d$var$lookupClass(className) {
    var cached = $b91e76632f4b3a1d$var$cache[className];
    if (cached) cached.lastIndex = 0;
    else $b91e76632f4b3a1d$var$cache[className] = cached = new RegExp($b91e76632f4b3a1d$var$start + className + $b91e76632f4b3a1d$var$end, 'g');
    return cached;
}
function $b91e76632f4b3a1d$var$addClass(el, className) {
    var current = el.className;
    if (!current.length) el.className = className;
    else if (!$b91e76632f4b3a1d$var$lookupClass(className).test(current)) el.className += ' ' + className;
}
function $b91e76632f4b3a1d$var$rmClass(el, className) {
    el.className = el.className.replace($b91e76632f4b3a1d$var$lookupClass(className), ' ').trim();
}
$b91e76632f4b3a1d$exports = {
    add: $b91e76632f4b3a1d$var$addClass,
    rm: $b91e76632f4b3a1d$var$rmClass
};


var $09f30e741db80808$var$doc = document;
var $09f30e741db80808$var$documentElement = $09f30e741db80808$var$doc.documentElement;
function $09f30e741db80808$var$dragula(initialContainers, options) {
    var len1 = arguments.length;
    if (len1 === 1 && Array.isArray(initialContainers) === false) {
        options = initialContainers;
        initialContainers = [];
    }
    var _mirror; // mirror image
    var _source; // source container
    var _item; // item being dragged
    var _offsetX; // reference x
    var _offsetY; // reference y
    var _moveX; // reference move x
    var _moveY; // reference move y
    var _initialSibling; // reference sibling when grabbed
    var _currentSibling; // reference sibling now
    var _copy; // item used for copying
    var _renderTimer; // timer for setTimeout renderMirrorImage
    var _lastDropTarget = null; // last container item was over
    var _grabbed; // holds mousedown context until first mousemove
    var o = options || {
    };
    if (o.moves === void 0) o.moves = $09f30e741db80808$var$always;
    if (o.accepts === void 0) o.accepts = $09f30e741db80808$var$always;
    if (o.invalid === void 0) o.invalid = invalidTarget;
    if (o.containers === void 0) o.containers = initialContainers || [];
    if (o.isContainer === void 0) o.isContainer = $09f30e741db80808$var$never;
    if (o.copy === void 0) o.copy = false;
    if (o.copySortSource === void 0) o.copySortSource = false;
    if (o.revertOnSpill === void 0) o.revertOnSpill = false;
    if (o.removeOnSpill === void 0) o.removeOnSpill = false;
    if (o.direction === void 0) o.direction = 'vertical';
    if (o.ignoreInputTextSelection === void 0) o.ignoreInputTextSelection = true;
    if (o.mirrorContainer === void 0) o.mirrorContainer = $09f30e741db80808$var$doc.body;
    var drake = $4eac73c568364dc5$exports({
        containers: o.containers,
        start: manualStart,
        end: end,
        cancel: cancel,
        remove: remove1,
        destroy: destroy,
        canMove: canMove,
        dragging: false
    });
    if (o.removeOnSpill === true) drake.on('over', spillOver).on('out', spillOut);
    events();
    function isContainer(el) {
        return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
    }
    function events(remove) {
        var op = remove ? 'remove' : 'add';
        $09f30e741db80808$var$touchy($09f30e741db80808$var$documentElement, op, 'mousedown', grab);
        $09f30e741db80808$var$touchy($09f30e741db80808$var$documentElement, op, 'mouseup', release);
    }
    function eventualMovements(remove) {
        var op = remove ? 'remove' : 'add';
        $09f30e741db80808$var$touchy($09f30e741db80808$var$documentElement, op, 'mousemove', startBecauseMouseMoved);
    }
    function movements(remove) {
        var op = remove ? 'remove' : 'add';
        $ececc6f691b03e13$exports[op]($09f30e741db80808$var$documentElement, 'selectstart', preventGrabbed); // IE8
        $ececc6f691b03e13$exports[op]($09f30e741db80808$var$documentElement, 'click', preventGrabbed);
    }
    function destroy() {
        events(true);
        release({
        });
    }
    function preventGrabbed(e) {
        if (_grabbed) {
            e.preventDefault();
        }
    }
    function grab(e) {
        _moveX = e.clientX;
        _moveY = e.clientY;
        var ignore = $09f30e741db80808$var$whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
        if (ignore) {
            return; // we only care about honest-to-god left clicks and touch events
        }
        var item = e.target;
        var context = canStart(item);
        if (!context) {
            return;
        }
        _grabbed = context;
        eventualMovements();
        if (e.type === 'mousedown') {
            if ($09f30e741db80808$var$isInput(item)) {
                item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
            } else {
                e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
            }
        }
    }
    function startBecauseMouseMoved(e) {
        if (!_grabbed) {
            return;
        }
        if ($09f30e741db80808$var$whichMouseButton(e) === 0) {
            release({
            });
            return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
        }
        // truthy check fixes #239, equality fixes #207, fixes #501
        if (e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0) && e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0)) {
            return;
        }
        if (o.ignoreInputTextSelection) {
            var clientX = $09f30e741db80808$var$getCoord('clientX', e) || 0;
            var clientY = $09f30e741db80808$var$getCoord('clientY', e) || 0;
            var elementBehindCursor = $09f30e741db80808$var$doc.elementFromPoint(clientX, clientY);
            if ($09f30e741db80808$var$isInput(elementBehindCursor)) {
                return;
            }
        }
        var grabbed = _grabbed; // call to end() unsets _grabbed
        eventualMovements(true);
        movements();
        end();
        start(grabbed);
        var offset = $09f30e741db80808$var$getOffset(_item);
        _offsetX = $09f30e741db80808$var$getCoord('pageX', e) - offset.left;
        _offsetY = $09f30e741db80808$var$getCoord('pageY', e) - offset.top;
        $b91e76632f4b3a1d$exports.add(_copy || _item, 'gu-transit');
        renderMirrorImage();
        drag(e);
    }
    function canStart(item) {
        if (drake.dragging && _mirror) {
            return;
        }
        if (isContainer(item)) {
            return; // don't drag container itself
        }
        var handle = item;
        while($09f30e741db80808$var$getParent(item) && isContainer($09f30e741db80808$var$getParent(item)) === false){
            if (o.invalid(item, handle)) {
                return;
            }
            item = $09f30e741db80808$var$getParent(item); // drag target should be a top element
            if (!item) {
                return;
            }
        }
        var source = $09f30e741db80808$var$getParent(item);
        if (!source) {
            return;
        }
        if (o.invalid(item, handle)) {
            return;
        }
        var movable = o.moves(item, source, handle, $09f30e741db80808$var$nextEl(item));
        if (!movable) {
            return;
        }
        return {
            item: item,
            source: source
        };
    }
    function canMove(item) {
        return !!canStart(item);
    }
    function manualStart(item) {
        var context = canStart(item);
        if (context) {
            start(context);
        }
    }
    function start(context) {
        if (isCopy(context.item, context.source)) {
            _copy = context.item.cloneNode(true);
            drake.emit('cloned', _copy, context.item, 'copy');
        }
        _source = context.source;
        _item = context.item;
        _initialSibling = _currentSibling = $09f30e741db80808$var$nextEl(context.item);
        drake.dragging = true;
        drake.emit('drag', _item, _source);
    }
    function invalidTarget() {
        return false;
    }
    function end() {
        if (!drake.dragging) {
            return;
        }
        var item = _copy || _item;
        drop(item, $09f30e741db80808$var$getParent(item));
    }
    function ungrab() {
        _grabbed = false;
        eventualMovements(true);
        movements(true);
    }
    function release(e) {
        ungrab();
        if (!drake.dragging) {
            return;
        }
        var item = _copy || _item;
        var clientX = $09f30e741db80808$var$getCoord('clientX', e) || 0;
        var clientY = $09f30e741db80808$var$getCoord('clientY', e) || 0;
        var elementBehindCursor = $09f30e741db80808$var$getElementBehindPoint(_mirror, clientX, clientY);
        var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
        if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
            drop(item, dropTarget);
        } else if (o.removeOnSpill) {
            remove1();
        } else {
            cancel();
        }
    }
    function drop(item, target) {
        var parent = $09f30e741db80808$var$getParent(item);
        if (_copy && o.copySortSource && target === _source) {
            parent.removeChild(_item);
        }
        if (isInitialPlacement(target)) {
            drake.emit('cancel', item, _source, _source);
        } else {
            drake.emit('drop', item, target, _source, _currentSibling);
        }
        cleanup();
    }
    function remove1() {
        if (!drake.dragging) {
            return;
        }
        var item = _copy || _item;
        var parent = $09f30e741db80808$var$getParent(item);
        if (parent) {
            parent.removeChild(item);
        }
        drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
        cleanup();
    }
    function cancel(revert) {
        if (!drake.dragging) {
            return;
        }
        var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
        var item = _copy || _item;
        var parent = $09f30e741db80808$var$getParent(item);
        var initial = isInitialPlacement(parent);
        if (initial === false && reverts) {
            if (_copy) {
                if (parent) {
                    parent.removeChild(_copy);
                }
            } else {
                _source.insertBefore(item, _initialSibling);
            }
        }
        if (initial || reverts) {
            drake.emit('cancel', item, _source, _source);
        } else {
            drake.emit('drop', item, parent, _source, _currentSibling);
        }
        cleanup();
    }
    function cleanup() {
        var item = _copy || _item;
        ungrab();
        removeMirrorImage();
        if (item) {
            $b91e76632f4b3a1d$exports.rm(item, 'gu-transit');
        }
        if (_renderTimer) {
            clearTimeout(_renderTimer);
        }
        drake.dragging = false;
        if (_lastDropTarget) {
            drake.emit('out', item, _lastDropTarget, _source);
        }
        drake.emit('dragend', item);
        _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
    }
    function isInitialPlacement(target, s) {
        var sibling;
        if (s !== void 0) {
            sibling = s;
        } else if (_mirror) {
            sibling = _currentSibling;
        } else {
            sibling = $09f30e741db80808$var$nextEl(_copy || _item);
        }
        return target === _source && sibling === _initialSibling;
    }
    function findDropTarget(elementBehindCursor, clientX, clientY) {
        var target = elementBehindCursor;
        while(target && !accepted()){
            target = $09f30e741db80808$var$getParent(target);
        }
        return target;
        function accepted() {
            var droppable = isContainer(target);
            if (droppable === false) {
                return false;
            }
            var immediate = getImmediateChild(target, elementBehindCursor);
            var reference = getReference(target, immediate, clientX, clientY);
            var initial = isInitialPlacement(target, reference);
            if (initial) {
                return true; // should always be able to drop it right back where it was
            }
            return o.accepts(_item, target, _source, reference);
        }
    }
    function drag(e) {
        if (!_mirror) {
            return;
        }
        e.preventDefault();
        var clientX = $09f30e741db80808$var$getCoord('clientX', e) || 0;
        var clientY = $09f30e741db80808$var$getCoord('clientY', e) || 0;
        var x = clientX - _offsetX;
        var y = clientY - _offsetY;
        _mirror.style.left = x + 'px';
        _mirror.style.top = y + 'px';
        var item = _copy || _item;
        var elementBehindCursor = $09f30e741db80808$var$getElementBehindPoint(_mirror, clientX, clientY);
        var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
        var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
        if (changed || dropTarget === null) {
            out();
            _lastDropTarget = dropTarget;
            over();
        }
        var parent = $09f30e741db80808$var$getParent(item);
        if (dropTarget === _source && _copy && !o.copySortSource) {
            if (parent) {
                parent.removeChild(item);
            }
            return;
        }
        var reference;
        var immediate = getImmediateChild(dropTarget, elementBehindCursor);
        if (immediate !== null) {
            reference = getReference(dropTarget, immediate, clientX, clientY);
        } else if (o.revertOnSpill === true && !_copy) {
            reference = _initialSibling;
            dropTarget = _source;
        } else {
            if (_copy && parent) {
                parent.removeChild(item);
            }
            return;
        }
        if (reference === null && changed || reference !== item && reference !== $09f30e741db80808$var$nextEl(item)) {
            _currentSibling = reference;
            dropTarget.insertBefore(item, reference);
            drake.emit('shadow', item, dropTarget, _source);
        }
        function moved(type) {
            drake.emit(type, item, _lastDropTarget, _source);
        }
        function over() {
            if (changed) {
                moved('over');
            }
        }
        function out() {
            if (_lastDropTarget) {
                moved('out');
            }
        }
    }
    function spillOver(el) {
        $b91e76632f4b3a1d$exports.rm(el, 'gu-hide');
    }
    function spillOut(el) {
        if (drake.dragging) {
            $b91e76632f4b3a1d$exports.add(el, 'gu-hide');
        }
    }
    function renderMirrorImage() {
        if (_mirror) {
            return;
        }
        var rect = _item.getBoundingClientRect();
        _mirror = _item.cloneNode(true);
        _mirror.style.width = $09f30e741db80808$var$getRectWidth(rect) + 'px';
        _mirror.style.height = $09f30e741db80808$var$getRectHeight(rect) + 'px';
        $b91e76632f4b3a1d$exports.rm(_mirror, 'gu-transit');
        $b91e76632f4b3a1d$exports.add(_mirror, 'gu-mirror');
        o.mirrorContainer.appendChild(_mirror);
        $09f30e741db80808$var$touchy($09f30e741db80808$var$documentElement, 'add', 'mousemove', drag);
        $b91e76632f4b3a1d$exports.add(o.mirrorContainer, 'gu-unselectable');
        drake.emit('cloned', _mirror, _item, 'mirror');
    }
    function removeMirrorImage() {
        if (_mirror) {
            $b91e76632f4b3a1d$exports.rm(o.mirrorContainer, 'gu-unselectable');
            $09f30e741db80808$var$touchy($09f30e741db80808$var$documentElement, 'remove', 'mousemove', drag);
            $09f30e741db80808$var$getParent(_mirror).removeChild(_mirror);
            _mirror = null;
        }
    }
    function getImmediateChild(dropTarget, target) {
        var immediate = target;
        while(immediate !== dropTarget && $09f30e741db80808$var$getParent(immediate) !== dropTarget){
            immediate = $09f30e741db80808$var$getParent(immediate);
        }
        if (immediate === $09f30e741db80808$var$documentElement) {
            return null;
        }
        return immediate;
    }
    function getReference(dropTarget, target, x, y) {
        var horizontal = o.direction === 'horizontal';
        var reference = target !== dropTarget ? inside() : outside();
        return reference;
        function outside() {
            var len = dropTarget.children.length;
            var i;
            var el;
            var rect;
            for(i = 0; i < len; i++){
                el = dropTarget.children[i];
                rect = el.getBoundingClientRect();
                if (horizontal && rect.left + rect.width / 2 > x) {
                    return el;
                }
                if (!horizontal && rect.top + rect.height / 2 > y) {
                    return el;
                }
            }
            return null;
        }
        function inside() {
            var rect = target.getBoundingClientRect();
            if (horizontal) {
                return resolve(x > rect.left + $09f30e741db80808$var$getRectWidth(rect) / 2);
            }
            return resolve(y > rect.top + $09f30e741db80808$var$getRectHeight(rect) / 2);
        }
        function resolve(after) {
            return after ? $09f30e741db80808$var$nextEl(target) : target;
        }
    }
    function isCopy(item, container) {
        return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
    }
    return drake;
}
function $09f30e741db80808$var$touchy(el, op, type, fn) {
    var touch = {
        mouseup: 'touchend',
        mousedown: 'touchstart',
        mousemove: 'touchmove'
    };
    var pointers = {
        mouseup: 'pointerup',
        mousedown: 'pointerdown',
        mousemove: 'pointermove'
    };
    var microsoft = {
        mouseup: 'MSPointerUp',
        mousedown: 'MSPointerDown',
        mousemove: 'MSPointerMove'
    };
    if ($parcel$global.navigator.pointerEnabled) $ececc6f691b03e13$exports[op](el, pointers[type], fn);
    else if ($parcel$global.navigator.msPointerEnabled) $ececc6f691b03e13$exports[op](el, microsoft[type], fn);
    else {
        $ececc6f691b03e13$exports[op](el, touch[type], fn);
        $ececc6f691b03e13$exports[op](el, type, fn);
    }
}
function $09f30e741db80808$var$whichMouseButton(e) {
    if (e.touches !== void 0) return e.touches.length;
    if (e.which !== void 0 && e.which !== 0) return e.which;
     // see https://github.com/bevacqua/dragula/issues/261
    if (e.buttons !== void 0) return e.buttons;
    var button = e.button;
    if (button !== void 0) return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
}
function $09f30e741db80808$var$getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + $09f30e741db80808$var$getScroll('scrollLeft', 'pageXOffset'),
        top: rect.top + $09f30e741db80808$var$getScroll('scrollTop', 'pageYOffset')
    };
}
function $09f30e741db80808$var$getScroll(scrollProp, offsetProp) {
    if (typeof $parcel$global[offsetProp] !== 'undefined') return $parcel$global[offsetProp];
    if ($09f30e741db80808$var$documentElement.clientHeight) return $09f30e741db80808$var$documentElement[scrollProp];
    return $09f30e741db80808$var$doc.body[scrollProp];
}
function $09f30e741db80808$var$getElementBehindPoint(point, x, y) {
    point = point || {
    };
    var state = point.className || '';
    var el;
    point.className += ' gu-hide';
    el = $09f30e741db80808$var$doc.elementFromPoint(x, y);
    point.className = state;
    return el;
}
function $09f30e741db80808$var$never() {
    return false;
}
function $09f30e741db80808$var$always() {
    return true;
}
function $09f30e741db80808$var$getRectWidth(rect) {
    return rect.width || rect.right - rect.left;
}
function $09f30e741db80808$var$getRectHeight(rect) {
    return rect.height || rect.bottom - rect.top;
}
function $09f30e741db80808$var$getParent(el) {
    return el.parentNode === $09f30e741db80808$var$doc ? null : el.parentNode;
}
function $09f30e741db80808$var$isInput(el) {
    return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || $09f30e741db80808$var$isEditable(el);
}
function $09f30e741db80808$var$isEditable(el) {
    if (!el) return false;
     // no parents were editable
    if (el.contentEditable === 'false') return false;
     // stop the lookup
    if (el.contentEditable === 'true') return true;
     // found a contentEditable element in the chain
    return $09f30e741db80808$var$isEditable($09f30e741db80808$var$getParent(el)); // contentEditable is set to 'inherit'
}
function $09f30e741db80808$var$nextEl(el) {
    function manually() {
        var sibling = el;
        do {
            sibling = sibling.nextSibling;
        }while (sibling && sibling.nodeType !== 1)
        return sibling;
    }
    return el.nextElementSibling || manually();
}
function $09f30e741db80808$var$getEventHost(e) {
    // on touchend event, we have to use `e.changedTouches`
    // see http://stackoverflow.com/questions/7192563/touchend-event-properties
    // see https://github.com/bevacqua/dragula/issues/34
    if (e.targetTouches && e.targetTouches.length) return e.targetTouches[0];
    if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0];
    return e;
}
function $09f30e741db80808$var$getCoord(coord, e) {
    var host = $09f30e741db80808$var$getEventHost(e);
    var missMap = {
        pageX: 'clientX',
        pageY: 'clientY' // IE8
    };
    if (coord in missMap && !(coord in host) && missMap[coord] in host) coord = missMap[coord];
    return host[coord];
}
$09f30e741db80808$exports = $09f30e741db80808$var$dragula;


// canvas-confetti v1.4.0 built on 2021-03-10T12:32:33.488Z
var $e5681fb9ff8b31c4$var$module = {
};
(function main(global, module, isWorker, workerSize) {
    var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
    function noop() {
    }
    // create a promise if it exists, otherwise, just
    // call the function directly
    function promise(func) {
        var ModulePromise = module.exports.Promise;
        var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
        if (typeof Prom === 'function') return new Prom(func);
        func(noop, noop);
        return null;
    }
    var raf = function() {
        var TIME = Math.floor(1000 / 60);
        var frame, cancel;
        var frames = {
        };
        var lastFrameTime = 0;
        if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
            frame = function(cb) {
                var id = Math.random();
                frames[id] = requestAnimationFrame(function onFrame(time) {
                    if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
                        lastFrameTime = time;
                        delete frames[id];
                        cb();
                    } else frames[id] = requestAnimationFrame(onFrame);
                });
                return id;
            };
            cancel = function(id) {
                if (frames[id]) cancelAnimationFrame(frames[id]);
            };
        } else {
            frame = function(cb) {
                return setTimeout(cb, TIME);
            };
            cancel = function(timer) {
                return clearTimeout(timer);
            };
        }
        return {
            frame: frame,
            cancel: cancel
        };
    }();
    var getWorker = function() {
        var worker1;
        var prom;
        var resolves = {
        };
        function decorate(worker) {
            function execute(options, callback) {
                worker.postMessage({
                    options: options || {
                    },
                    callback: callback
                });
            }
            worker.init = function initWorker(canvas) {
                var offscreen = canvas.transferControlToOffscreen();
                worker.postMessage({
                    canvas: offscreen
                }, [
                    offscreen
                ]);
            };
            worker.fire = function fireWorker(options, size, done) {
                if (prom) {
                    execute(options, null);
                    return prom;
                }
                var id = Math.random().toString(36).slice(2);
                prom = promise(function(resolve) {
                    function workerDone(msg) {
                        if (msg.data.callback !== id) return;
                        delete resolves[id];
                        worker.removeEventListener('message', workerDone);
                        prom = null;
                        done();
                        resolve();
                    }
                    worker.addEventListener('message', workerDone);
                    execute(options, id);
                    resolves[id] = workerDone.bind(null, {
                        data: {
                            callback: id
                        }
                    });
                });
                return prom;
            };
            worker.reset = function resetWorker() {
                worker.postMessage({
                    reset: true
                });
                for(var id in resolves){
                    resolves[id]();
                    delete resolves[id];
                }
            };
        }
        return function() {
            if (worker1) return worker1;
            if (!isWorker && canUseWorker) {
                var code = [
                    'var CONFETTI, SIZE = {}, module = {};',
                    '(' + main.toString() + ')(this, module, true, SIZE);',
                    'onmessage = function(msg) {',
                    '  if (msg.data.options) {',
                    '    CONFETTI(msg.data.options).then(function () {',
                    '      if (msg.data.callback) {',
                    '        postMessage({ callback: msg.data.callback });',
                    '      }',
                    '    });',
                    '  } else if (msg.data.reset) {',
                    '    CONFETTI.reset();',
                    '  } else if (msg.data.resize) {',
                    '    SIZE.width = msg.data.resize.width;',
                    '    SIZE.height = msg.data.resize.height;',
                    '  } else if (msg.data.canvas) {',
                    '    SIZE.width = msg.data.canvas.width;',
                    '    SIZE.height = msg.data.canvas.height;',
                    '    CONFETTI = module.exports.create(msg.data.canvas);',
                    '  }',
                    '}', 
                ].join('\n');
                try {
                    worker1 = new Worker(URL.createObjectURL(new Blob([
                        code
                    ])));
                } catch (e) {
                    // eslint-disable-next-line no-console
                    typeof console.warn === 'function' && console.warn('🎊 Could not load worker', e);
                    return null;
                }
                decorate(worker1);
            }
            return worker1;
        };
    }();
    var defaults = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: [
            'square',
            'circle'
        ],
        zIndex: 100,
        colors: [
            '#26ccff',
            '#a25afd',
            '#ff5e7e',
            '#88ff5a',
            '#fcff42',
            '#ffa62d',
            '#ff36ff'
        ],
        // probably should be true, but back-compat
        disableForReducedMotion: false,
        scalar: 1
    };
    function convert(val, transform) {
        return transform ? transform(val) : val;
    }
    function isOk(val) {
        return !(val === null || val === undefined);
    }
    function prop(options, name, transform) {
        return convert(options && isOk(options[name]) ? options[name] : defaults[name], transform);
    }
    function onlyPositiveInt(number) {
        return number < 0 ? 0 : Math.floor(number);
    }
    function randomInt(min, max) {
        // [min, max)
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function toDecimal(str) {
        return parseInt(str, 16);
    }
    function colorsToRgb(colors) {
        return colors.map(hexToRgb);
    }
    function hexToRgb(str) {
        var val = String(str).replace(/[^0-9a-f]/gi, '');
        if (val.length < 6) val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
        return {
            r: toDecimal(val.substring(0, 2)),
            g: toDecimal(val.substring(2, 4)),
            b: toDecimal(val.substring(4, 6))
        };
    }
    function getOrigin(options) {
        var origin = prop(options, 'origin', Object);
        origin.x = prop(origin, 'x', Number);
        origin.y = prop(origin, 'y', Number);
        return origin;
    }
    function setCanvasWindowSize(canvas) {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    }
    function setCanvasRectSize(canvas) {
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    function getCanvas(zIndex) {
        var canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0px';
        canvas.style.left = '0px';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = zIndex;
        return canvas;
    }
    function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
        context.save();
        context.translate(x, y);
        context.rotate(rotation);
        context.scale(radiusX, radiusY);
        context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
        context.restore();
    }
    function randomPhysics(opts) {
        var radAngle = opts.angle * (Math.PI / 180);
        var radSpread = opts.spread * (Math.PI / 180);
        return {
            x: opts.x,
            y: opts.y,
            wobble: Math.random() * 10,
            velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
            angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
            tiltAngle: Math.random() * Math.PI,
            color: opts.color,
            shape: opts.shape,
            tick: 0,
            totalTicks: opts.ticks,
            decay: opts.decay,
            drift: opts.drift,
            random: Math.random() + 5,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: opts.gravity * 3,
            ovalScalar: 0.6,
            scalar: opts.scalar
        };
    }
    function updateFetti(context, fetti) {
        fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
        fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
        fetti.wobble += 0.1;
        fetti.velocity *= fetti.decay;
        fetti.tiltAngle += 0.1;
        fetti.tiltSin = Math.sin(fetti.tiltAngle);
        fetti.tiltCos = Math.cos(fetti.tiltAngle);
        fetti.random = Math.random() + 5;
        fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
        fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
        var progress = (fetti.tick++) / fetti.totalTicks;
        var x1 = fetti.x + fetti.random * fetti.tiltCos;
        var y1 = fetti.y + fetti.random * fetti.tiltSin;
        var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
        var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
        context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';
        context.beginPath();
        if (fetti.shape === 'circle') context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
        else {
            context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
            context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
            context.lineTo(Math.floor(x2), Math.floor(y2));
            context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
        }
        context.closePath();
        context.fill();
        return fetti.tick < fetti.totalTicks;
    }
    function animate(canvas, fettis1, resizer, size, done) {
        var animatingFettis = fettis1.slice();
        var context = canvas.getContext('2d');
        var animationFrame;
        var destroy;
        var prom = promise(function(resolve) {
            function onDone() {
                animationFrame = destroy = null;
                context.clearRect(0, 0, size.width, size.height);
                done();
                resolve();
            }
            function update() {
                if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
                    size.width = canvas.width = workerSize.width;
                    size.height = canvas.height = workerSize.height;
                }
                if (!size.width && !size.height) {
                    resizer(canvas);
                    size.width = canvas.width;
                    size.height = canvas.height;
                }
                context.clearRect(0, 0, size.width, size.height);
                animatingFettis = animatingFettis.filter(function(fetti) {
                    return updateFetti(context, fetti);
                });
                if (animatingFettis.length) animationFrame = raf.frame(update);
                else onDone();
            }
            animationFrame = raf.frame(update);
            destroy = onDone;
        });
        return {
            addFettis: function(fettis) {
                animatingFettis = animatingFettis.concat(fettis);
                return prom;
            },
            canvas: canvas,
            promise: prom,
            reset: function() {
                if (animationFrame) raf.cancel(animationFrame);
                if (destroy) destroy();
            }
        };
    }
    function confettiCannon(canvas, globalOpts) {
        var isLibCanvas = !canvas;
        var allowResize = !!prop(globalOpts || {
        }, 'resize');
        var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
        var shouldUseWorker = canUseWorker && !!prop(globalOpts || {
        }, 'useWorker');
        var worker = shouldUseWorker ? getWorker() : null;
        var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
        var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
        var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
        var animationObj;
        function fireLocal(options, size, done) {
            var particleCount = prop(options, 'particleCount', onlyPositiveInt);
            var angle = prop(options, 'angle', Number);
            var spread = prop(options, 'spread', Number);
            var startVelocity = prop(options, 'startVelocity', Number);
            var decay = prop(options, 'decay', Number);
            var gravity = prop(options, 'gravity', Number);
            var drift = prop(options, 'drift', Number);
            var colors = prop(options, 'colors', colorsToRgb);
            var ticks = prop(options, 'ticks', Number);
            var shapes = prop(options, 'shapes');
            var scalar = prop(options, 'scalar');
            var origin = getOrigin(options);
            var temp = particleCount;
            var fettis = [];
            var startX = canvas.width * origin.x;
            var startY = canvas.height * origin.y;
            while(temp--)fettis.push(randomPhysics({
                x: startX,
                y: startY,
                angle: angle,
                spread: spread,
                startVelocity: startVelocity,
                color: colors[temp % colors.length],
                shape: shapes[randomInt(0, shapes.length)],
                ticks: ticks,
                decay: decay,
                gravity: gravity,
                drift: drift,
                scalar: scalar
            }));
            // if we have a previous canvas already animating,
            // add to it
            if (animationObj) return animationObj.addFettis(fettis);
            animationObj = animate(canvas, fettis, resizer, size, done);
            return animationObj.promise;
        }
        function fire(options) {
            var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
            var zIndex = prop(options, 'zIndex', Number);
            if (disableForReducedMotion && preferLessMotion) return promise(function(resolve) {
                resolve();
            });
            if (isLibCanvas && animationObj) // use existing canvas from in-progress animation
            canvas = animationObj.canvas;
            else if (isLibCanvas && !canvas) {
                // create and initialize a new canvas
                canvas = getCanvas(zIndex);
                document.body.appendChild(canvas);
            }
            if (allowResize && !initialized) // initialize the size of a user-supplied canvas
            resizer(canvas);
            var size = {
                width: canvas.width,
                height: canvas.height
            };
            if (worker && !initialized) worker.init(canvas);
            initialized = true;
            if (worker) canvas.__confetti_initialized = true;
            function onResize() {
                if (worker) {
                    // TODO this really shouldn't be immediate, because it is expensive
                    var obj = {
                        getBoundingClientRect: function() {
                            if (!isLibCanvas) return canvas.getBoundingClientRect();
                        }
                    };
                    resizer(obj);
                    worker.postMessage({
                        resize: {
                            width: obj.width,
                            height: obj.height
                        }
                    });
                    return;
                }
                // don't actually query the size here, since this
                // can execute frequently and rapidly
                size.width = size.height = null;
            }
            function done() {
                animationObj = null;
                if (allowResize) global.removeEventListener('resize', onResize);
                if (isLibCanvas && canvas) {
                    document.body.removeChild(canvas);
                    canvas = null;
                    initialized = false;
                }
            }
            if (allowResize) global.addEventListener('resize', onResize, false);
            if (worker) return worker.fire(options, size, done);
            return fireLocal(options, size, done);
        }
        fire.reset = function() {
            if (worker) worker.reset();
            if (animationObj) animationObj.reset();
        };
        return fire;
    }
    module.exports = confettiCannon(null, {
        useWorker: true,
        resize: true
    });
    module.exports.create = confettiCannon;
})(function() {
    if (typeof window !== 'undefined') return window;
    if (typeof self !== 'undefined') return self;
    return this || {
    };
}(), $e5681fb9ff8b31c4$var$module, false);
var // end source content
$e5681fb9ff8b31c4$export$2e2bcd8739ae039 = $e5681fb9ff8b31c4$var$module.exports;
var $e5681fb9ff8b31c4$export$185802fd694ee1f5 = $e5681fb9ff8b31c4$var$module.exports.create;



const $2f25b22e70662204$var$BASE_DIR = ".tauri_progres";
const $2f25b22e70662204$var$DATA_FILE_NAME = $2f25b22e70662204$var$BASE_DIR + "/data.json";
class $2f25b22e70662204$export$f160779312cf57d5 {
    constructor(alerts){
        this.weeksContainer = document.getElementById("weeks");
        this.weeks = [];
        this.htmlWeeks = [];
        this.alerts = alerts;
        this.lastSaveTime = Date.now();
        this.lastUpdateTime = this.lastSaveTime;
        setInterval(async ()=>{
            if (this.lastUpdateTime > this.lastSaveTime) {
                this.alerts.show('info', "Saving file", 10000);
                await this.saveFile();
                this.lastSaveTime = Date.now();
                this.alerts.hide();
            }
        }, 5000);
        this.registerDraggable();
    }
    registerWeek(week1) {
        let htmlcontainer = document.createElement('div');
        htmlcontainer.id = week1.id;
        this.htmlWeeks.unshift(htmlcontainer);
        this.weeks.unshift(week1);
        this.weeksContainer.prepend(htmlcontainer);
        let updateFunction = (done)=>{
            console.log('rstart', Date.now());
            if (done) this.launchConfetti();
            $a51c7802bfe1890e$export$b3890eb0ae9dca99($850e48264ea38c74$export$b93cec6dd11b1714(week1), htmlcontainer);
            this.lastUpdateTime = Date.now();
            console.log('rend', Date.now());
        };
        let alertFunction = (type, message)=>{
            this.alerts.show(type, message, 5000);
        };
        let deleteFucntion = ()=>{
            updateFunction(false);
            this.weeksContainer.removeChild(htmlcontainer);
        };
        updateFunction(false);
        week1.addEventListeners();
        week1.setUpdateFunction(updateFunction);
        week1.setAlertFunction(alertFunction);
        week1.setDeleteFunction(deleteFucntion);
    }
    createNewWeek(input) {
        if (input.deleted) return null;
        let week = new $850e48264ea38c74$export$fca4f8121099df57(input);
        this.registerWeek(week);
        return week;
    }
    launchConfetti() {
        let randCord = ()=>Math.random() * (1.1 - -0.1) + -0.1
        ;
        let duration = 5000;
        let animationEnd = Date.now() + duration;
        let defaults = {
            startVelocity: 50,
            spread: 120,
            zIndex: 0
        };
        let interval = setInterval(function() {
            let timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            let particleCount = 100 * (timeLeft / duration);
            $e5681fb9ff8b31c4$export$2e2bcd8739ae039(Object.assign({
            }, defaults, {
                particleCount: particleCount,
                origin: {
                    x: randCord(),
                    y: 0.1 + randCord()
                }
            }));
            $e5681fb9ff8b31c4$export$2e2bcd8739ae039(Object.assign({
            }, defaults, {
                particleCount: particleCount,
                origin: {
                    x: randCord(),
                    y: 0.1 + randCord()
                }
            }));
        }, 250);
    }
    registerDraggable() {
        let drake = (/*@__PURE__*/$parcel$interopDefault($09f30e741db80808$exports))([
            this.weeksContainer
        ], {
            copy: false,
            removeOnSpill: false,
            slideFactorY: 25,
            moves: (_el, _target, source, _sibling)=>{
                return source.classList.contains("week-heading-draggable");
            }
        });
        drake.on("drop", (el, _target, _source, sibling)=>{
            let weekThatWasMovedIndex = this.weeks.findIndex((week, index)=>{
                return week.id == el.id;
            });
            let weekThatWasMoved = this.weeks[weekThatWasMovedIndex];
            this.weeks.splice(weekThatWasMovedIndex, 1);
            if (sibling == null) this.weeks.push(weekThatWasMoved);
            else {
                let weekThatComesAfterThis = this.weeks.findIndex((week, index)=>{
                    return week.id == sibling.id;
                });
                this.weeks.splice(weekThatComesAfterThis, 0, weekThatWasMoved);
            }
            this.saveFile();
        });
    }
    async saveFile() {
        try {
            let homeDir = await $877b126e36883e53$export$e401803eb3bf9d2f();
            let path = homeDir + $2f25b22e70662204$var$DATA_FILE_NAME;
            let text = await $61d50d698abff50d$export$552bfb764b5cd2b4({
                contents: JSON.stringify(this.weeks, null, 2),
                path: path
            });
        } catch (e) {
            console.log(e);
        }
    }
    async loadLocal() {
        let text = await $4b2c437b8a34aefc$export$9f183916f445c495();
        let weeks = JSON.parse(text);
        for(let i = weeks.length - 1; i > -1; i--){
            console.log("week", weeks[i]);
            this.createNewWeek(weeks[i]);
        }
    }
    static async ensureFileExists() {
        await $4b2c437b8a34aefc$export$39989cb38ffcc5d7();
    }
}



var $b437cb7ddfb16b51$var$displaceHeader = function() {
    var target;
    var limit;
    var flag = false;
    function popp() {
        if (window.scrollY >= limit && !flag) target.classList.add("displaced");
        else if (window.scrollY <= limit) target.classList.remove("displaced");
    }
    return {
        init: function(item) {
            target = document.getElementById(item);
            limit = target.offsetHeight;
            window.addEventListener("scroll", popp);
        }
    };
}();
class $b437cb7ddfb16b51$var$Main {
    constructor(){
        this.formToggleBtn = document.getElementById("fab");
        this.formEnclosure = document.createElement("div");
        this.fm = new $9fdc79397460abda$export$ca95ea95faa89f36();
        this.am = new $3c13b93cfbb34482$export$a99aab2a736cea3e(document.getElementById('alert'));
        this.wm = new $2f25b22e70662204$export$f160779312cf57d5(this.am);
        this.formOpen = false;
        let weeks = document.getElementById("weeks");
        weeks.parentNode.insertBefore(this.formEnclosure, weeks);
        this.addListeners();
        //render(templateFunc(week), htmlcontainer);
        $b437cb7ddfb16b51$var$displaceHeader.init("nav");
    }
    async run() {
        let trial1 = ()=>{
            let sampleJSON = {
                "id": "1",
                "name": "1",
                "factor": 0.7,
                "solvableTime": 10,
                "solvable": {
                    "activities": {
                        "total": 1,
                        "left": 0
                    },
                    "tutorials": {
                        "total": 1,
                        "left": 0
                    },
                    "assignments": {
                        "total": 2,
                        "left": 1
                    }
                },
                "hasProgrammable": true,
                "programmableTime": 20,
                programmable: {
                    "practice": {
                        "total": 1,
                        "left": 0
                    },
                    "graded": {
                        "total": 1,
                        "left": 0
                    }
                },
                "videos": [
                    {
                        "m": 33,
                        "s": 3,
                        "seen": true
                    },
                    {
                        "m": 3,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 33,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 33,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 33,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 33,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 12,
                        "s": 12,
                        "seen": true
                    }
                ],
                "lastChangeTime": 1634845763686
            };
            let ww = JSON.parse(JSON.stringify(sampleJSON));
            ww.hidden = false;
            let w2 = new $850e48264ea38c74$export$fca4f8121099df57(ww);
            this.wm.registerWeek(w2);
            ww.videos.push({
                "m": 3,
                "s": 23,
                "seen": false
            });
            ww.id = "2";
            ww.name = "2";
            ww.hidden = false;
            let w3 = new $850e48264ea38c74$export$fca4f8121099df57(ww);
            this.wm.registerWeek(w3);
            ww.videos.push({
                "m": 23,
                "s": 23,
                "seen": false
            });
            ww.id = "3";
            ww.name = "3";
            ww.hidden = false;
            let w4 = new $850e48264ea38c74$export$fca4f8121099df57(ww);
            this.wm.registerWeek(w4);
            ww.id = "4";
            ww.name = "4";
            ww.hidden = false;
            // let w5 = new Week(ww);
            // this.wm.registerWeek(w5);
            let trial2 = {
                "id": "102",
                "name": "102",
                "factor": 0.7,
                "solvableTime": 45,
                "solvable": {
                    "activities": {
                        "total": 0,
                        "left": 0
                    },
                    "tutorials": {
                        "total": 0,
                        "left": 0
                    },
                    "assignments": {
                        "total": 2,
                        "left": 2
                    }
                },
                "hasProgrammable": true,
                "programmableTime": 20,
                programmable: {
                    "practice": {
                        "total": 1,
                        "left": 0
                    },
                    "graded": {
                        "total": 1,
                        "left": 0
                    }
                },
                "videos": [
                    {
                        "m": 33,
                        "s": 3,
                        "seen": true
                    },
                    {
                        "m": 3,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 33,
                        "s": 23,
                        "seen": true
                    }, 
                ],
                "lastChangeTime": 1634845763686
            };
            let w7 = new $850e48264ea38c74$export$fca4f8121099df57(trial2);
            this.wm.registerWeek(w7);
            let trial = {
                "id": "101",
                "name": "101",
                "factor": 0.7,
                "solvableTime": 45,
                "solvable": {
                    "activities": {
                        "total": 0,
                        "left": 0
                    },
                    "tutorials": {
                        "total": 0,
                        "left": 1
                    },
                    "assignments": {
                        "total": 2,
                        "left": 1
                    }
                },
                "hasProgrammable": true,
                "programmableTime": 20,
                programmable: {
                    "practice": {
                        "total": 1,
                        "left": 0
                    },
                    "graded": {
                        "total": 1,
                        "left": 0
                    }
                },
                "videos": [
                    {
                        "m": 33,
                        "s": 3,
                        "seen": true
                    },
                    {
                        "m": 3,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 33,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 33,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 33,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 33,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 12,
                        "s": 12,
                        "seen": true
                    }
                ],
                "lastChangeTime": 1634845763686
            };
            let w6 = new $850e48264ea38c74$export$fca4f8121099df57(trial);
            this.wm.registerWeek(w6);
            let trial3 = {
                "id": "103",
                "name": "103",
                "factor": 0.7,
                "solvableTime": 45,
                "solvable": {
                    "activities": {
                        "total": 0,
                        "left": 0
                    },
                    "tutorials": {
                        "total": 0,
                        "left": 0
                    },
                    "assignments": {
                        "total": 2,
                        "left": 1
                    }
                },
                "hasProgrammable": true,
                "programmableTime": 20,
                programmable: {
                    "practice": {
                        "total": 2,
                        "left": 2
                    },
                    "graded": {
                        "total": 2,
                        "left": 2
                    }
                },
                "videos": [
                    {
                        "m": 33,
                        "s": 3,
                        "seen": true
                    },
                    {
                        "m": 3,
                        "s": 23,
                        "seen": true
                    },
                    {
                        "m": 33,
                        "s": 23,
                        "seen": true
                    }, 
                ],
                "lastChangeTime": 1634845763686
            };
            let w8 = new $850e48264ea38c74$export$fca4f8121099df57(trial3);
            this.wm.registerWeek(w8);
        };
        if (window.__TAURI__ || window.go) ;
        else trial1();
        if (window.__TAURI__ || window.go) try {
            let exists = await $2f25b22e70662204$export$f160779312cf57d5.ensureFileExists();
            console.log(exists);
            this.wm.loadLocal();
        } catch (error) {
            console.log(error);
            this.am.show("error", error, 1000);
        }
    }
    addListeners() {
        this.formToggleBtn.addEventListener("click", (e)=>{
            if (!window.__TAURI__ && this.formOpen) e.preventDefault(); // don't scroll up if form is closed
            this.formOpen = !this.formOpen;
            $a51c7802bfe1890e$export$b3890eb0ae9dca99($9fdc79397460abda$export$2cbce0dece413a39(this.formOpen), this.formEnclosure);
            if (this.formOpen) {
                this.formToggleBtn.classList.remove("open");
                this.formToggleBtn.classList.add("close");
            } else {
                this.formToggleBtn.classList.remove("close");
                this.formToggleBtn.classList.add("open");
            }
            if (this.formOpen) {
                let form = document.getElementById("add-form");
                form.addEventListener("submit", this.submitHandler.bind(this));
            }
        });
    }
    submitHandler(e) {
        e.preventDefault();
        let errors = this.fm.validate();
        if (errors.length > 0) this.am.show("error", errors.join("\n"), 10000);
        else {
            let weekInput = this.fm.submit();
            let form = e.target;
            form.reset();
            let week = this.wm.createNewWeek(weekInput);
            console.log($850e48264ea38c74$export$fca4f8121099df57.Validate(JSON.parse(JSON.stringify(week))));
        }
    }
}
window.onload = async function() {
    let m = new $b437cb7ddfb16b51$var$Main();
    await m.run();
};


