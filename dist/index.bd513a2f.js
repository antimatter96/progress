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
    constructor({ strings: t , _$litType$: s  }, n){
        let l;
        this.parts = [];
        let r = 0, d = 0;
        const u = t.length - 1, c = this.parts, [v, a] = $a51c7802bfe1890e$var$C(t, s);
        if (this.el = $a51c7802bfe1890e$var$P.createElement(v, n), $a51c7802bfe1890e$var$A.currentNode = this.el.content, 2 === s) {
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
                                ctor: "." === i[1] ? $a51c7802bfe1890e$var$M : "?" === i[1] ? $a51c7802bfe1890e$var$k : "@" === i[1] ? $a51c7802bfe1890e$var$H : $a51c7802bfe1890e$var$S
                            });
                        } else c.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i1 of t)l.removeAttribute(i1);
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
    static createElement(t, i) {
        const s = $a51c7802bfe1890e$var$l.createElement("template");
        return s.innerHTML = t, s;
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
    p(t) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : $a51c7802bfe1890e$var$l).importNode(s, !0);
        $a51c7802bfe1890e$var$A.currentNode = o;
        let n = $a51c7802bfe1890e$var$A.nextNode(), h = 0, r = 0, d = e[0];
        for(; void 0 !== d;){
            if (h === d.index) {
                let i;
                2 === d.type ? i = new $a51c7802bfe1890e$var$N(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new $a51c7802bfe1890e$var$I(n, this, t)), this.v.push(i), d = e[++r];
            }
            h !== (null == d ? void 0 : d.index) && (n = $a51c7802bfe1890e$var$A.nextNode(), h++);
        }
        return o;
    }
    m(t) {
        let i = 0;
        for (const s of this.v)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $a51c7802bfe1890e$var$N {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = $a51c7802bfe1890e$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cg = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
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
    _$AI(t, i = this) {
        t = $a51c7802bfe1890e$var$V(this, t, i), $a51c7802bfe1890e$var$r(t) ? t === $a51c7802bfe1890e$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $a51c7802bfe1890e$export$45b790e32b2810ee && this._$AR(), this._$AH = $a51c7802bfe1890e$export$45b790e32b2810ee) : t !== this._$AH && t !== $a51c7802bfe1890e$export$9c068ae9cc5db4e8 && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.S(t) : $a51c7802bfe1890e$var$u(t) ? this.M(t) : this.$(t);
    }
    A(t, i = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, i);
    }
    S(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.A(t));
    }
    $(t) {
        this._$AH !== $a51c7802bfe1890e$export$45b790e32b2810ee && $a51c7802bfe1890e$var$r(this._$AH) ? this._$AA.nextSibling.data = t : this.S($a51c7802bfe1890e$var$l.createTextNode(t)), this._$AH = t;
    }
    T(t) {
        var i;
        const { values: s , _$litType$: e  } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = $a51c7802bfe1890e$var$P.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s);
        else {
            const t = new $a51c7802bfe1890e$var$E(o, this), i = t.p(this.options);
            t.m(s), this.S(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $a51c7802bfe1890e$var$x.get(t.strings);
        return void 0 === i && $a51c7802bfe1890e$var$x.set(t.strings, i = new $a51c7802bfe1890e$var$P(t)), i;
    }
    M(t) {
        $a51c7802bfe1890e$var$d(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new $a51c7802bfe1890e$var$N(this.A($a51c7802bfe1890e$var$h()), this.A($a51c7802bfe1890e$var$h()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cg = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class $a51c7802bfe1890e$var$S {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = $a51c7802bfe1890e$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $a51c7802bfe1890e$export$45b790e32b2810ee;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = $a51c7802bfe1890e$var$V(this, t, i, 0), n = !$a51c7802bfe1890e$var$r(t) || t !== this._$AH && t !== $a51c7802bfe1890e$export$9c068ae9cc5db4e8, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = $a51c7802bfe1890e$var$V(this, e[s + l], i, l), h === $a51c7802bfe1890e$export$9c068ae9cc5db4e8 && (h = this._$AH[l]), n || (n = !$a51c7802bfe1890e$var$r(h) || h !== this._$AH[l]), h === $a51c7802bfe1890e$export$45b790e32b2810ee ? t = $a51c7802bfe1890e$export$45b790e32b2810ee : t !== $a51c7802bfe1890e$export$45b790e32b2810ee && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.k(t);
    }
    k(t) {
        t === $a51c7802bfe1890e$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class $a51c7802bfe1890e$var$M extends $a51c7802bfe1890e$var$S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    k(t) {
        this.element[this.name] = t === $a51c7802bfe1890e$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $a51c7802bfe1890e$var$k extends $a51c7802bfe1890e$var$S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    k(t) {
        t && t !== $a51c7802bfe1890e$export$45b790e32b2810ee ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
    }
}
class $a51c7802bfe1890e$var$H extends $a51c7802bfe1890e$var$S {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = $a51c7802bfe1890e$var$V(this, t, i, 0)) && void 0 !== s ? s : $a51c7802bfe1890e$export$45b790e32b2810ee) === $a51c7802bfe1890e$export$9c068ae9cc5db4e8) return;
        const e = this._$AH, o = t === $a51c7802bfe1890e$export$45b790e32b2810ee && e !== $a51c7802bfe1890e$export$45b790e32b2810ee || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== $a51c7802bfe1890e$export$45b790e32b2810ee && (e === $a51c7802bfe1890e$export$45b790e32b2810ee || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class $a51c7802bfe1890e$var$I {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $a51c7802bfe1890e$var$V(this, t);
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
    F: $a51c7802bfe1890e$var$k,
    B: $a51c7802bfe1890e$var$H,
    W: $a51c7802bfe1890e$var$M,
    Z: $a51c7802bfe1890e$var$I
}, $a51c7802bfe1890e$var$R = window.litHtmlPolyfillSupport;
null == $a51c7802bfe1890e$var$R || $a51c7802bfe1890e$var$R($a51c7802bfe1890e$var$P, $a51c7802bfe1890e$var$N), (null !== ($a51c7802bfe1890e$var$t = globalThis.litHtmlVersions) && void 0 !== $a51c7802bfe1890e$var$t ? $a51c7802bfe1890e$var$t : globalThis.litHtmlVersions = []).push("2.0.1");



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
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}


/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $6197f1f1b7c083f0$export$56cc687933817664 = $d71bce45553af777$export$99b43ad1ed32e735(class extends $d71bce45553af777$export$befdefbdce210f91 {
    constructor(t){
        var i;
        if (super(t), t.type !== $d71bce45553af777$export$9ba3b3f20a85bfa.ATTRIBUTE || "class" !== t.name || (null === (i = t.strings) || void 0 === i ? void 0 : i.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return " " + Object.keys(t).filter((i)=>t[i]
        ).join(" ") + " ";
    }
    update(i, [s]) {
        var r, o;
        if (void 0 === this.st) {
            this.st = new Set, void 0 !== i.strings && (this.et = new Set(i.strings.join(" ").split(/\s/).filter((t)=>"" !== t
            )));
            for(const t in s)s[t] && !(null === (r = this.et) || void 0 === r ? void 0 : r.has(t)) && this.st.add(t);
            return this.render(s);
        }
        const e = i.element.classList;
        this.st.forEach((t)=>{
            t in s || (e.remove(t), this.st.delete(t));
        });
        for(const t in s){
            const i = !!s[t];
            i === this.st.has(t) || (null === (o = this.et) || void 0 === o ? void 0 : o.has(t)) || (i ? (e.add(t), this.st.add(t)) : (e.remove(t), this.st.delete(t)));
        }
        return $a51c7802bfe1890e$export$9c068ae9cc5db4e8;
    }
});


const $3c13b93cfbb34482$var$CSS = {
    'ok': {
        'heading': {
            'text-green-500': true
        },
        'bg': {
            'bg-green-500': true
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
            'text-yellow-500': true
        },
        'bg': {
            'bg-yellow-500': true
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
          <svg ?hidden=${this.type != 'ok'}     class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" /></svg>
          <svg ?hidden=${this.type != 'error'}  class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" /></svg>
          <svg ?hidden=${this.type != 'warning'} class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" /></svg>
          <svg ?hidden=${this.type != 'info'}   class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" /></svg>
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
        this.titleInput = document.getElementById("input-title");
        this.activities = document.getElementById("input-activities");
        this.tutorials = document.getElementById("input-tutorials");
        this.assignments = document.getElementById("input-assignments");
        this.factor = document.getElementById("input-factor");
        this.assignmentTime = document.getElementById("input-assignment-time");
        this.videos = document.getElementById("input-videos");
        console.log(this.titleInput, this.activities, this.tutorials, this.assignments, this.factor, this.videos);
    }
    validate() {
        let errors = [];
        console.log("titleInput", this.titleInput.value);
        console.log("activities", this.activities.value);
        console.log("tutorials", this.tutorials.value);
        console.log("assignments", this.assignments.value);
        console.log("factor", this.factor.value);
        console.log("videos", this.videos.value);
        console.log("assignmentTime", this.assignmentTime.value);
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
            videos: []
        };
        Object.keys(input.solvable).forEach((key)=>{
            input.solvable[key].left = input.solvable[key].total;
        });
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



const $850e48264ea38c74$var$progress = [
    "bg-red-500",
    "bg-red-400",
    "bg-red-300",
    "bg-red-200",
    "bg-amber-400",
    "bg-amber-300",
    "bg-amber-200",
    "bg-lime-200",
    "bg-lime-300",
    "bg-lime-400",
    "bg-lime-500"
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
        this.hidden = input.hasOwnProperty('hidden') ? input.hidden : false;
        this.locked = input.hasOwnProperty('locked') ? input.locked : false;
        this.menuVisible = false;
        this.deleted = input.hasOwnProperty('deleted') ? input.deleted : false;
        this.updateLastChangeTime();
        console.log(this);
    }
    setUpdateFunction(fn) {
        this.updateMe = fn;
    }
    setAlertFunction(fn) {
        this.alertUser = fn;
    }
    setDeleteFunction(fn) {
        this.deleteMe = fn;
    }
    updateLastChangeTime() {
        this.lastChangeTime = Date.now();
        if (this.updateMe) this.updateMe();
    }
    flipVideo(i) {
        if (this.videos[i].seen) this.markVideoLeft(i);
        else this.markVideoSeen(i);
    }
    markVideoSeen(i) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (this.videos[i].seen) {
            this.alertUser('error', "Already done");
            return;
        }
        this.videos[i].seen = true;
        this.updateLastChangeTime();
    }
    markVideoLeft(i) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (!this.videos[i].seen) {
            this.alertUser('error', "Already done");
            return;
        }
        this.videos[i].seen = false;
        this.updateLastChangeTime();
    }
    markSolvableDone(type) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (this.solvable[type].left <= 0) {
            this.alertUser('error', "Already done");
            return;
        }
        this.solvable[type].left -= 1;
        this.updateLastChangeTime();
    }
    markSolvableNotDone(type) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (this.solvable[type].left + 1 > this.solvable[type].total) {
            this.alertUser('error', "Already done");
            return;
        }
        this.solvable[type].left += 1;
        this.updateLastChangeTime();
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
        m += this.solvableTime * solvableCount;
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
        m += this.solvableTime * solvableCount;
        m /= this.factor * 60;
        return m;
    }
    getPercentage(total, left) {
        return 100 * left / total;
    }
    _increment(e) {
        console.log(e);
    }
    _decrement(e) {
        console.log(e);
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
            let downBtn = document.getElementById(`${this.id}-${ttype}-minus`);
            let upBtn = document.getElementById(`${this.id}-${ttype}-plus`);
            upBtn.addEventListener('click', ()=>{
                this.markSolvableDone(ttype);
            });
            downBtn.addEventListener('click', ()=>{
                this.markSolvableNotDone(ttype);
            });
        });
        document.getElementById(`${this.id}-menu`).addEventListener('click', ()=>{
            this.menuVisible = !this.menuVisible;
            this.updateLastChangeTime();
        });
        document.getElementById(`${this.id}-hide`).addEventListener('click', ()=>{
            this.menuVisible = !this.menuVisible;
            this.hidden = !this.hidden;
            this.updateLastChangeTime();
        });
        document.getElementById(`${this.id}-lock`).addEventListener('click', ()=>{
            this.menuVisible = !this.menuVisible;
            this.locked = !this.locked;
            this.updateLastChangeTime();
        });
        document.getElementById(`${this.id}-delete`).addEventListener('click', async ()=>{
            this.menuVisible = !this.menuVisible;
            if (this.locked) {
                this.alertUser('error', "Please unlock before making any changes");
                return;
            }
            let promise = window.confirm("Do you really want to delete this ?");
            let confirmed = await promise;
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
    static Validate(input) {
        if (!input.id || !input.name) throw new Error(`${input.id} ${input.name}`);
        if (!Number.isFinite(input.factor) || !Number.isInteger(input.solvableTime)) throw new Error();
        input.videos.forEach((video)=>{
            if (!Number.isInteger(video.m) || !Number.isInteger(video.s)) throw new Error();
            if (video.s < 0 || video.s >= 60) throw new Error();
            if (video.m < 0) throw new Error();
        });
        [
            "activities",
            "tutorials",
            "assignments"
        ].forEach((key)=>{
            let total = input.solvable[key].total;
            let left = input.solvable[key].left;
            if (!Number.isInteger(total) || !Number.isInteger(left)) throw new Error();
            if (total < 0 || left < 0 || left > total) throw new Error();
        });
    }
    static Parse(input) {
        try {
            $850e48264ea38c74$export$fca4f8121099df57.Validate(input);
            return new $850e48264ea38c74$export$fca4f8121099df57(input);
        } catch (e) {
            return null;
        }
    }
}
function $850e48264ea38c74$export$b93cec6dd11b1714(week) {
    if (week.deleted) return $a51c7802bfe1890e$export$c0bb0b647f701bb5``;
    let _projected = week.getTotalMinutes();
    let _elasped = week.getElapsedMinutes();
    let _percentage = week.getPercentage(_projected, _elasped);
    let videos = [];
    week.videos.forEach((video, i)=>{
        const textClass = {
            'bg-red-500': !video.seen,
            'bg-lime-500': video.seen
        };
        const btnClass = {
            'btnDown-valid': video.seen,
            'btnUp-valid': !video.seen
        };
        videos.push($a51c7802bfe1890e$export$c0bb0b647f701bb5`
    <div class="video-time px-0">
      <p class="video-text better-shadow ${$6197f1f1b7c083f0$export$56cc687933817664(textClass)}">${video.m}:${video.s}</p>
      <button class="video-btn ${$6197f1f1b7c083f0$export$56cc687933817664(btnClass)}" id="${week.id}-video-${i}">${video.seen ? '-' : '+'}</button>
    </div>
  `);
    });
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
    let solvables = [];
    solvableData.forEach((data)=>{
        if (data.total == 0) return;
        const btnUp = data.total > data.done ? {
            'btnUp-valid': true
        } : {
            'btnUp-invalid': true
        };
        const btnDown = data.done > 0 ? {
            'btnDown-valid': true
        } : {
            'btnDown-invalid': true
        };
        const inProgress = {
            'in-progress': data.total > data.done,
            'done': data.total == data.done
        };
        solvables.push($a51c7802bfe1890e$export$c0bb0b647f701bb5`
    <div class="video-time act-time w-1/5">
      <h2 class="act-text ${$6197f1f1b7c083f0$export$56cc687933817664(inProgress)}"><span class="tracking-tight">${data.title}</span> : ${data.done}/${data.total}</h2>
      <div class="flex justify-around mt-0.5">
        <button class="solvable-btn mr-0.5 ${$6197f1f1b7c083f0$export$56cc687933817664(btnUp)}" id="${week.id}-${data.title.toLowerCase()}-plus">+</button>
        <button class="solvable-btn ml-0.5 ${$6197f1f1b7c083f0$export$56cc687933817664(btnDown)}" id="${week.id}-${data.title.toLowerCase()}-minus">-</button>
      </div>
    </div>
  `);
    });
    let progressColor = {
        [$850e48264ea38c74$var$progress[Math.floor(_percentage / 10)]]: true
    };
    const animatedBorderClassMap = {
        'gradient-border': Math.floor(_percentage / 10) == 10
    };
    return $a51c7802bfe1890e$export$c0bb0b647f701bb5`
  <div class="container items-center bg-white my-4 better-shadow week-overall ${$6197f1f1b7c083f0$export$56cc687933817664(animatedBorderClassMap)}">
    <div class="text-blueGray-700 rounded-lg">

      <!-- Heading -->
      <div class="pt-2 px-5 mx-auto md:items-center md:flex-row justify-between bg-blueGray-900">
        <div class="w-full border-b-2 border-white justify-between inline-flex">
          <div class="inline-flex items-center">
            <h2 class="pb-2 text-2xl font-bold text-white lg:text-x lg:mr-8">
              ${week.name}
            </h2>
          </div>
          <div class="inline-flex items-center move-up">
            <button class="rounded-button bg-white" id="${week.id}-menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="4-6 w-4" fill="none" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>

            <div ?hidden=${!week.menuVisible} class="origin-top-right absolute top-0 right-10 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <a class="rounded-t-md text-gray-900 block px-4 py-2 text-sm hover:opacity-50" role="menuitem" tabindex="-1" id="${week.id}-lock"> ${week.locked ? 'Unlock' : 'Lock'}  </a>
              <a class="text-gray-900 block px-4 py-2 text-sm hover:opacity-50" role="menuitem" tabindex="-1" id="${week.id}-hide"> ${week.hidden ? 'Unhide' : 'Hide'} </a>
              <a class="rounded-b-md text-white bg-red-800 block px-4 py-2 text-sm hover:opacity-50" role="menuitem" tabindex="-1" id="${week.id}-delete">Delete</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div ?hidden=${week.hidden} class="pt-1 px-5 mx-auto md:items-center md:flex-row justify-between ${$6197f1f1b7c083f0$export$56cc687933817664(progressColor)}">
        <div class="pb-2 flex justify-between items-center border-b-2 border-gray-600">
          <p class="dispay-container">
            <span class="dispay-label">Projected:</span>
            <span class="dispay-data">${_projected.toFixed(1)}h</span>
          </p>

          <p class="dispay-container">
            <span class="dispay-label">Elapsed:</span>
            <span class="dispay-data">${_elasped.toFixed(1)}h</span>
          </p>

          <p class="dispay-container">
            <span class="dispay-label">Done:</span>
            <span class="dispay-data">${_percentage.toFixed(2)}%</span>
          </p>
        </div>
      </div>

      <!-- Videos -->
      <div ?hidden=${week.hidden} class="pt-3 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="w-full border-b-2 border-gray-600">
          <h2 class="pb-1 text-xl font-bold text-black lg:text-x lg:mr-8">
            Videos
          </h2>
          <div class="flex justify-evenly flex-wrap">
            ${videos}
          </div>
        </div>
      </div>

      <!-- Solvable -->
      <div ?hidden=${week.hidden} class="pt-3 pb-3 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="w-full">
          <h2 class="pb-1 text-xl font-bold text-black lg:text-x lg:mr-8">
            Solvable
          </h2>

          <div class="flex justify-around px-5">
            ${solvables}
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}


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
        }, 10000);
    }
    registerWeek(week) {
        let htmlcontainer = document.createElement('div');
        htmlcontainer.id = week.id;
        this.htmlWeeks.unshift(htmlcontainer);
        this.weeks.unshift(week);
        this.weeksContainer.prepend(htmlcontainer);
        let updateFunction = ()=>{
            $a51c7802bfe1890e$export$b3890eb0ae9dca99($850e48264ea38c74$export$b93cec6dd11b1714(week), htmlcontainer);
            this.lastUpdateTime = Date.now();
        };
        let alertFunction = (type, message)=>{
            this.alerts.show(type, message, 5000);
        };
        let deleteFucntion = ()=>{
            updateFunction();
            this.weeksContainer.removeChild(htmlcontainer);
        };
        updateFunction();
        week.addEventListeners();
        week.setUpdateFunction(updateFunction);
        week.setAlertFunction(alertFunction);
        week.setDeleteFunction(deleteFucntion);
    }
    createNewWeek(input) {
        if (input.deleted) return null;
        let week = new $850e48264ea38c74$export$fca4f8121099df57(input);
        this.registerWeek(week);
        return week;
    }
    async saveFile() {
        try {
            let homeDir = await $877b126e36883e53$export$e401803eb3bf9d2f();
            let path = homeDir + ".tauri_progres/data.json";
            let text = await $61d50d698abff50d$export$552bfb764b5cd2b4({
                contents: JSON.stringify(this.weeks, null, 2),
                path: path
            });
        } catch (e) {
            console.log(e);
        }
    }
    async loadLocal() {
        let text;
        try {
            let homeDir = await $877b126e36883e53$export$e401803eb3bf9d2f();
            let file = homeDir + ".tauri_progres/data.json";
            text = await $61d50d698abff50d$export$177308921a610223(file);
            console.log(text);
        } catch (e) {
            throw e;
        }
        let weeks = JSON.parse(text);
        console.log("weeks", weeks);
        for(let i = weeks.length - 1; i > -1; i--){
            console.log("week", weeks[i]);
            this.createNewWeek(weeks[i]);
        }
    }
    static async ensureFileExists() {
        // Create or read folder
        let homeDir;
        try {
            homeDir = await $877b126e36883e53$export$e401803eb3bf9d2f();
            let dataDir = homeDir + ".tauri_progres";
            let created = await $61d50d698abff50d$export$8ffa162de829532c(dataDir);
            console.log("Created", created);
        } catch (e) {
            console.log(e);
            if (typeof e == 'string' && e.includes("os error 17")) ;
            else throw e;
        }
        // Folder now exists
        try {
            let homeDir1 = await $877b126e36883e53$export$e401803eb3bf9d2f();
            let file = homeDir1 + ".tauri_progres/data.json";
            let text = await $61d50d698abff50d$export$177308921a610223(file);
            console.log(text);
        } catch (e1) {
            console.log(e1);
            if (typeof e1 == 'string' && e1.includes("os error 2")) // no file exists, create now
            try {
                let homeDir = await $877b126e36883e53$export$e401803eb3bf9d2f();
                let path = homeDir + ".tauri_progres/data.json";
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


class $b437cb7ddfb16b51$var$Main {
    constructor(){
        this.formOpenBtn = document.getElementById("open-form");
        this.formCloseBtn = document.getElementById("close-form");
        this.formEnclosure = document.getElementById("form-enclosure");
        this.fm = new $9fdc79397460abda$export$ca95ea95faa89f36();
        this.am = new $3c13b93cfbb34482$export$a99aab2a736cea3e(document.getElementById('alert'));
        this.wm = new $2f25b22e70662204$export$f160779312cf57d5(this.am);
        this.addListeners();
    }
    async run() {
        // let ww = JSON.parse(`{"id":"763405e5-405c-4fc1-872d-48ce24e87fc5","name":"Maths Week 1","factor":0.05,"solvableTime":5,"solvable":{"activities":{"total":1,"left":1},"tutorials":{"total":1,"left":1},"assignments":{"total":2,"left":2}},"videos":[{"m":33,"s":23,"seen":true}, {"m":33,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":12,"s":12,"seen":false}],"lastChangeTime":1634845763686}`)
        // ww.hidden = true;
        // let w2 = new Week(ww);
        // this.wm.registerWeek(w2);
        // ww.id = "asdasdasdasdasd"
        // ww.hidden = false;
        // let w3 = new Week(ww);
        // this.wm.registerWeek(w3);
        try {
            let exists = await $2f25b22e70662204$export$f160779312cf57d5.ensureFileExists();
            console.log(exists);
            this.wm.loadLocal();
        } catch (error) {
            console.log(error);
            this.am.show("error", error, 1000);
        }
    }
    addListeners() {
        this.formOpenBtn.addEventListener("click", ()=>{
            this.formEnclosure.style.display = "flex";
        });
        this.formCloseBtn.addEventListener("click", ()=>{
            this.formEnclosure.style.display = "none";
        });
        const form = document.getElementById("add-form");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            let errors = this.fm.validate();
            if (errors.length > 0) this.am.show("error", errors.join("\n"), 10000);
            else {
                let weekInput = this.fm.submit();
                let week = this.wm.createNewWeek(weekInput);
                console.log($850e48264ea38c74$export$fca4f8121099df57.Validate(JSON.parse(JSON.stringify(week))));
            }
        });
    }
}
window.onload = async function() {
    let m = new $b437cb7ddfb16b51$var$Main();
    m.run();
};


