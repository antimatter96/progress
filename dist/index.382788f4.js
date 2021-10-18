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


class $086d5838aee8ae00$export$a99aab2a736cea3e {
    constructor(){
        this.ok = document.getElementById("alert-ok");
        this.info = document.getElementById("alert-info");
        this.warning = document.getElementById("alert-warning");
        this.error = document.getElementById("alert-error");
        console.log(this.ok, this.info, this.warning, this.error);
        this.all = [
            this.ok,
            this.info,
            this.warning,
            this.error
        ];
    }
    hideAll() {
        this.all.forEach((ele)=>{
            ele.style.display = "none";
        });
    }
    show(type, message, timeout) {
        let target = this[type];
        console.log(target);
        target.style.display = "flex";
        target.getElementsByClassName("actual-text")[0].innerText = message;
        setTimeout(()=>{
            this.hideAll();
        }, timeout);
    }
}


const $7b79fc2448b3b35e$var$minuteSeconds = /^\d+:[0-5]\d$/;
class $7b79fc2448b3b35e$export$ca95ea95faa89f36 {
    constructor(){
        this.titleInput = document.getElementById("input-title");
        this.activities = document.getElementById("input-activities");
        this.tutorials = document.getElementById("input-tutorials");
        this.assignments = document.getElementById("input-assignments");
        this.factor = document.getElementById("input-factor");
        this.assignmentTime = document.getElementById("input-assignment-time");
        this.videos = document.getElementById("input-videos");
        console.log(this.titleInput);
        console.log(this.titleInput, this.activities, this.tutorials, this.assignments, this.videos);
        console.log(this.factor);
        console.log(this.videos);
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
            let val = parseFloat(ele.value, 10);
            if (Number.isFinite(val) && val >= 0) ;
            else errors.push(`- '${ele.dataset.name}' should be a non-negative number`);
        });
        let value = this.videos.value;
        let arr = value.trim().split(/\s/ig);
        for(let i = 0; i < arr.length; i++)if (arr[i].length > 0 && !arr[i].match($7b79fc2448b3b35e$var$minuteSeconds)) errors.push(`- '${arr[i]}' is not a valid video time`);
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
            factor: parseFloat(this.factor.value, 10),
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
                practice: {
                    total: 0,
                    left: 0
                },
                graded: {
                    total: parseInt(this.assignments.value, 10),
                    left: 1
                }
            },
            videos: []
        };
        if (parseInt(this.assignments.value, 10) > 1) input.solvable.practice.total = parseInt(this.assignments.value, 10) - 1;
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
        this.id = input.id ? input.id : $300e172487e56da3$export$2e2bcd8739ae039();
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
            practice: {
                total: parseInt(input.solvable.practice.total, 10),
                left: parseInt(input.solvable.practice.left, 10)
            },
            graded: {
                total: parseInt(input.solvable.graded.total, 10),
                left: parseInt(input.solvable.graded.left, 10)
            }
        };
        this.lastChangeTime = Date.now();
    }
    updateLastChangeTime() {
        this.lastChangeTime = Date.now();
    }
    markVideoSeen(i) {
        this.videos[i].seen = true;
        this.updateLastChangeTime();
    }
    markVideoLeft(i) {
        this.videos[i].seen = false;
        this.updateLastChangeTime();
    }
    markSolvableDone(type) {
        if (this.solvable[type].left <= 0) throw new Error("Already done");
        this.solvable[type].left -= 1;
        this.updateLastChangeTime();
    }
    markSolvableNotDone(type) {
        if (this.solvable[type].left + 1 > this.solvable[type].total) throw new Error("Already done");
        this.solvable[type].left += 1;
        this.updateLastChangeTime();
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
    validateSelf() {
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
            "practice",
            "graded"
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
    let _projected = week.getTotalMinutes();
    let _elasped = week.getElapsedMinutes();
    let _percentage = week.getPercentage(_projected, _elasped);
    let videos = [];
    week.videos.forEach((video, i)=>{
        const textClass = {
            'bg-red-500': i % 2 == 0,
            'bg-lime-500': i % 2 != 0
        };
        const btnClass = {
            'bg-red-500': video.seen,
            'bg-lime-500': !video.seen
        };
        videos.push($a51c7802bfe1890e$export$c0bb0b647f701bb5`
    <div class="video-time px-0">
      <p class="video-text ${$6197f1f1b7c083f0$export$56cc687933817664(textClass)}">${video.m}:${video.s}</p> <!-- Add color -->
      <button class="video-btn ${$6197f1f1b7c083f0$export$56cc687933817664(btnClass)}">${video.seen ? '-' : '+'}</button> <!-- Add color -->
    </div>
  `);
    });
    let _solvable = week.solvable;
    let solvableData = [];
    solvableData.push({
        title: 'Actvities',
        done: _solvable.activities.total - _solvable.activities.left,
        total: _solvable.activities.total
    });
    solvableData.push({
        title: 'Tutorials',
        done: _solvable.tutorials.total - _solvable.tutorials.left,
        total: _solvable.tutorials.total
    });
    solvableData.push({
        title: 'Graded',
        done: _solvable.practice.total + _solvable.graded.total - _solvable.practice.left - _solvable.graded.left,
        total: _solvable.practice.total + _solvable.graded.total
    });
    let solvables = [];
    solvableData.forEach((data)=>{
        // TODO : Arpit
        // if (solvable.activities.left > 0) {
        //   activitiesText.getElementsByClassName('btn-activities-plus')[0].classList.add('');
        //   activitiesText.getElementsByClassName('btn-activities-minus')[0].classList.add('');
        // }
        solvables.push($a51c7802bfe1890e$export$c0bb0b647f701bb5`
    <div class="video-time act-time">
      <p class="act-text">${data.title} : ${data.done}/${data.total}</p>
      <div class="flex justify-around border-t-2">
        <button class="solvable-btn bg-lime-500">+</button>
        <button class="solvable-btn bg-red-500">-</button>
      </div>
    </div>
  `);
    });
    return $a51c7802bfe1890e$export$c0bb0b647f701bb5`
  <div class="container items-center bg-white my-5 better-shadow">
    <div class="text-blueGray-700 rounded-lg">

      <!-- Heading -->
      <div class="pt-3 px-5 mx-auto md:items-center md:flex-row justify-between bg-amber-400">
        <div class="w-full border-b-2">
          <h2 class="pb-2 text-2xl font-bold text-black lg:text-x lg:mr-8">
            ${week.name}
          </h2>
        </div>
      </div>

      <!-- Summary -->
      <div class="pt-1 px-5 mx-auto md:items-center md:flex-row justify-between bg-sky-300">
        <div class="pb-2 flex justify-between items-center border-b-2">
          <p class="dispay-container">
            <span class="dispay-label">Projected:</span>
            <span class="dispay-data template-projected">${_projected.toFixed(1)}h</span>
          </p>

          <p class="dispay-container">
            <span class="dispay-label">Elapsed:</span>
            <span class="dispay-data template-elapsed">${_elasped.toFixed(1)}h</span>
          </p>

          <p class="dispay-container">
            <span class="dispay-label">Done:</span>
            <span class="dispay-data template-done">${_percentage.toFixed(2)}%</span>
          </p>
        </div>
      </div>

      <!-- Videos -->
      <div class="pt-5 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="w-full border-b-2">
          <h2 class="pb-2 mb-1 text-xl font-bold text-black lg:text-x lg:mr-8">
            Videos
          </h2>
          <div class="flex justify-evenly flex-wrap template-video-container">
            ${videos}
          </div>
        </div>
      </div>

      <!-- Solvable -->
      <div class="pt-5 pb-5 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="w-full">
          <h2 class="pb-2 mb-1 text-xl font-bold text-black lg:text-x lg:mr-8">
            Solvable
          </h2>

          <div class="flex justify-around">
            ${solvables}
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var $51cbcdbd1737bc6e$var$t = function(n, e) {
    return ($51cbcdbd1737bc6e$var$t = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        for(var e in n)Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
    })(n, e);
};
function $51cbcdbd1737bc6e$export$4368d992c4eafac0(n, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    function r() {
        this.constructor = n;
    }
    $51cbcdbd1737bc6e$var$t(n, e), n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
}
var $51cbcdbd1737bc6e$export$8b22cf2602fb60ce = function() {
    return ($51cbcdbd1737bc6e$export$8b22cf2602fb60ce = Object.assign || function(t) {
        for(var n, e = 1, r = arguments.length; e < r; e++)for(var o in n = arguments[e])Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        return t;
    }).apply(this, arguments);
};
function $51cbcdbd1737bc6e$export$71511d61b312f219(t, n, e, r) {
    return new (e || (e = Promise))(function(o, a) {
        function i(t) {
            try {
                u(r.next(t));
            } catch (t1) {
                a(t1);
            }
        }
        function c(t) {
            try {
                u(r.throw(t));
            } catch (t1) {
                a(t1);
            }
        }
        function u(t) {
            var n;
            t.done ? o(t.value) : (n = t.value, n instanceof e ? n : new e(function(t) {
                t(n);
            })).then(i, c);
        }
        u((r = r.apply(t, n || [])).next());
    });
}
function $51cbcdbd1737bc6e$export$407448d2b89b1813(t, n) {
    var e, r, o, a, i = {
        label: 0,
        sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1];
        },
        trys: [],
        ops: []
    };
    function c(a) {
        return function(c) {
            return (function(a) {
                if (e) throw new TypeError("Generator is already executing.");
                for(; i;)try {
                    if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                    switch(r = 0, o && (a = [
                        2 & a[0],
                        o.value
                    ]), a[0]){
                        case 0:
                        case 1:
                            o = a;
                            break;
                        case 4:
                            return i.label++, {
                                value: a[1],
                                done: !1
                            };
                        case 5:
                            i.label++, r = a[1], a = [
                                0
                            ];
                            continue;
                        case 7:
                            a = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                i = 0;
                                continue;
                            }
                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                i.label = a[1];
                                break;
                            }
                            if (6 === a[0] && i.label < o[1]) {
                                i.label = o[1], o = a;
                                break;
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(a);
                                break;
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue;
                    }
                    a = n.call(t, i);
                } catch (t1) {
                    a = [
                        6,
                        t1
                    ], r = 0;
                } finally{
                    e = o = 0;
                }
                if (5 & a[0]) throw a[1];
                return {
                    value: a[0] ? a[1] : void 0,
                    done: !0
                };
            })([
                a,
                c
            ]);
        };
    }
    return a = {
        next: c(0),
        throw: c(1),
        return: c(2)
    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
    }), a;
}
function $51cbcdbd1737bc6e$export$625550452a3fa3ec(t, n) {
    void 0 === n && (n = !1);
    var e = function() {
        var t = new Int8Array(1);
        window.crypto.getRandomValues(t);
        var n = new Uint8Array(Math.max(16, Math.abs(t[0])));
        return window.crypto.getRandomValues(n), n.join("");
    }();
    return Object.defineProperty(window, e, {
        value: function(r) {
            return n && Reflect.deleteProperty(window, e), null == t ? void 0 : t(r);
        },
        writable: !1,
        configurable: !0
    }), e;
}
function $51cbcdbd1737bc6e$export$23f2a1d2818174ef(t, n) {
    return void 0 === n && (n = {
    }), $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(r) {
            return [
                2,
                new Promise(function(r, o) {
                    var i = $51cbcdbd1737bc6e$export$625550452a3fa3ec(function(t) {
                        r(t), Reflect.deleteProperty(window, c);
                    }, !0), c = $51cbcdbd1737bc6e$export$625550452a3fa3ec(function(t) {
                        o(t), Reflect.deleteProperty(window, i);
                    }, !0);
                    window.rpc.notify(t, $51cbcdbd1737bc6e$export$8b22cf2602fb60ce({
                        __invokeKey: __TAURI_INVOKE_KEY__,
                        callback: i,
                        error: c
                    }, n));
                })
            ];
        });
    });
}
function $51cbcdbd1737bc6e$export$f1e1789686576879(t) {
    return navigator.userAgent.includes("Windows") ? "https://asset.localhost/" + t : "asset://" + t;
}
var $51cbcdbd1737bc6e$export$db3b6bfb95261072 = Object.freeze({
    __proto__: null,
    transformCallback: $51cbcdbd1737bc6e$export$625550452a3fa3ec,
    invoke: $51cbcdbd1737bc6e$export$23f2a1d2818174ef,
    convertFileSrc: $51cbcdbd1737bc6e$export$f1e1789686576879
});



function $758353a1ec5abd94$export$23f2a1d2818174ef(n) {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(i) {
            return [
                2,
                $51cbcdbd1737bc6e$export$23f2a1d2818174ef("tauri", n)
            ];
        });
    });
}




var $b2e3b9fd017c80e7$export$ef35774e6d314e91;
function $b2e3b9fd017c80e7$export$43caf9889c228507(r, o) {
    return void 0 === o && (o = {
    }), $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Fs",
                    message: {
                        cmd: "readTextFile",
                        path: r,
                        options: o
                    }
                })
            ];
        });
    });
}
function $b2e3b9fd017c80e7$export$407448d2b89b1813(r, o) {
    return void 0 === o && (o = {
    }), $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Fs",
                    message: {
                        cmd: "readBinaryFile",
                        path: r,
                        options: o
                    }
                })
            ];
        });
    });
}
function $b2e3b9fd017c80e7$export$efccba1c4a2ef57b(r, o) {
    return void 0 === o && (o = {
    }), $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return "object" == typeof o && Object.freeze(o), "object" == typeof r && Object.freeze(r), [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Fs",
                    message: {
                        cmd: "writeFile",
                        path: r.path,
                        contents: r.contents,
                        options: o
                    }
                })
            ];
        });
    });
}
!function(t) {
    t[t.Audio = 1] = "Audio", t[t.Cache = 2] = "Cache", t[t.Config = 3] = "Config", t[t.Data = 4] = "Data", t[t.LocalData = 5] = "LocalData", t[t.Desktop = 6] = "Desktop", t[t.Document = 7] = "Document", t[t.Download = 8] = "Download", t[t.Executable = 9] = "Executable", t[t.Font = 10] = "Font", t[t.Home = 11] = "Home", t[t.Picture = 12] = "Picture", t[t.Public = 13] = "Public", t[t.Runtime = 14] = "Runtime", t[t.Template = 15] = "Template", t[t.Video = 16] = "Video", t[t.Resource = 17] = "Resource", t[t.App = 18] = "App", t[t.Current = 19] = "Current";
}($b2e3b9fd017c80e7$export$ef35774e6d314e91 || ($b2e3b9fd017c80e7$export$ef35774e6d314e91 = {
}));
function $b2e3b9fd017c80e7$var$a(t) {
    var e = function(t) {
        if (t.length < 65536) return String.fromCharCode.apply(null, Array.from(t));
        for(var e = "", i = t.length, r = 0; r < i; r++){
            var o = t.subarray(65536 * r, 65536 * (r + 1));
            e += String.fromCharCode.apply(null, Array.from(o));
        }
        return e;
    }(new Uint8Array(t));
    return btoa(e);
}
function $b2e3b9fd017c80e7$export$8b22cf2602fb60ce(r, o) {
    return void 0 === o && (o = {
    }), $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return "object" == typeof o && Object.freeze(o), "object" == typeof r && Object.freeze(r), [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Fs",
                    message: {
                        cmd: "writeBinaryFile",
                        path: r.path,
                        contents: $b2e3b9fd017c80e7$var$a(r.contents),
                        options: o
                    }
                })
            ];
        });
    });
}
function $b2e3b9fd017c80e7$export$db3b6bfb95261072(r, o) {
    return void 0 === o && (o = {
    }), $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Fs",
                    message: {
                        cmd: "readDir",
                        path: r,
                        options: o
                    }
                })
            ];
        });
    });
}
function $b2e3b9fd017c80e7$export$4368d992c4eafac0(r, o) {
    return void 0 === o && (o = {
    }), $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Fs",
                    message: {
                        cmd: "createDir",
                        path: r,
                        options: o
                    }
                })
            ];
        });
    });
}
function $b2e3b9fd017c80e7$export$f1e1789686576879(r, o) {
    return void 0 === o && (o = {
    }), $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Fs",
                    message: {
                        cmd: "removeDir",
                        path: r,
                        options: o
                    }
                })
            ];
        });
    });
}
function $b2e3b9fd017c80e7$export$39b482c5e57630a8(r, o, n) {
    return void 0 === n && (n = {
    }), $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Fs",
                    message: {
                        cmd: "copyFile",
                        source: r,
                        destination: o,
                        options: n
                    }
                })
            ];
        });
    });
}
function $b2e3b9fd017c80e7$export$dda1d9f60106f0e9(r, o) {
    return void 0 === o && (o = {
    }), $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Fs",
                    message: {
                        cmd: "removeFile",
                        path: r,
                        options: o
                    }
                })
            ];
        });
    });
}
function $b2e3b9fd017c80e7$export$23f2a1d2818174ef(r, o, n) {
    return void 0 === n && (n = {
    }), $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Fs",
                    message: {
                        cmd: "renameFile",
                        oldPath: r,
                        newPath: o,
                        options: n
                    }
                })
            ];
        });
    });
}
var $b2e3b9fd017c80e7$export$2d1720544b23b823 = Object.freeze({
    __proto__: null,
    get BaseDirectory () {
        return $b2e3b9fd017c80e7$export$ef35774e6d314e91;
    },
    get Dir () {
        return $b2e3b9fd017c80e7$export$ef35774e6d314e91;
    },
    readTextFile: $b2e3b9fd017c80e7$export$43caf9889c228507,
    readBinaryFile: $b2e3b9fd017c80e7$export$407448d2b89b1813,
    writeFile: $b2e3b9fd017c80e7$export$efccba1c4a2ef57b,
    writeBinaryFile: $b2e3b9fd017c80e7$export$8b22cf2602fb60ce,
    readDir: $b2e3b9fd017c80e7$export$db3b6bfb95261072,
    createDir: $b2e3b9fd017c80e7$export$4368d992c4eafac0,
    removeDir: $b2e3b9fd017c80e7$export$f1e1789686576879,
    copyFile: $b2e3b9fd017c80e7$export$39b482c5e57630a8,
    removeFile: $b2e3b9fd017c80e7$export$dda1d9f60106f0e9,
    renameFile: $b2e3b9fd017c80e7$export$23f2a1d2818174ef
});







function $6bb1bd938cd7d248$export$23f2a1d2818174ef() {
    return navigator.appVersion.includes("Win");
}






function $836f855d1b318ba1$export$407448d2b89b1813() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.App
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$8b22cf2602fb60ce() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Audio
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$db3b6bfb95261072() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Cache
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$4368d992c4eafac0() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Config
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$f1e1789686576879() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Data
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$2d1720544b23b823() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Desktop
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$39b482c5e57630a8() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Document
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$dda1d9f60106f0e9() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Download
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$23f2a1d2818174ef() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Executable
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$35e795649ee09318() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Font
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$342063e11d6c3cad() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Home
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$882b5998b3b9117c() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.LocalData
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$953cecd6e717a553() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Picture
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$7ccc53e8f1e7dfc5() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Public
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$43caf9889c228507() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Resource
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$ae1af26003f05816() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Runtime
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$625550452a3fa3ec() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Template
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$90a7f3efeed30595() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Video
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$9e5f44173e64f162() {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolvePath",
                        path: "",
                        directory: $b2e3b9fd017c80e7$export$ef35774e6d314e91.Current
                    }
                })
            ];
        });
    });
}
var $836f855d1b318ba1$export$2408f22a0fab9ae5 = $6bb1bd938cd7d248$export$23f2a1d2818174ef() ? "\\" : "/", $836f855d1b318ba1$export$3b14a55fb2447963 = $6bb1bd938cd7d248$export$23f2a1d2818174ef() ? ";" : ":";
function $836f855d1b318ba1$export$efccba1c4a2ef57b() {
    for(var i = [], n = 0; n < arguments.length; n++)i[n] = arguments[n];
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "resolve",
                        paths: i
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$d141bba7fdc215a3(i) {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "normalize",
                        path: i
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$4a5767248b18ef41() {
    for(var i = [], n = 0; n < arguments.length; n++)i[n] = arguments[n];
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "join",
                        paths: i
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$df995fae86a55f06(i) {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "dirname",
                        path: i
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$ebd11618f299a286(i) {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "extname",
                        path: i
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$ef35774e6d314e91(i, n) {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "basename",
                        path: i,
                        ext: n
                    }
                })
            ];
        });
    });
}
function $836f855d1b318ba1$export$e7094788287c5e9b(i) {
    return $51cbcdbd1737bc6e$export$71511d61b312f219(this, void 0, void 0, function() {
        return $51cbcdbd1737bc6e$export$407448d2b89b1813(this, function(t) {
            return [
                2,
                $758353a1ec5abd94$export$23f2a1d2818174ef({
                    __tauriModule: "Path",
                    message: {
                        cmd: "isAbsolute",
                        path: i
                    }
                })
            ];
        });
    });
}
var $836f855d1b318ba1$export$ffb5f4729a158638 = Object.freeze({
    __proto__: null,
    appDir: $836f855d1b318ba1$export$407448d2b89b1813,
    audioDir: $836f855d1b318ba1$export$8b22cf2602fb60ce,
    cacheDir: $836f855d1b318ba1$export$db3b6bfb95261072,
    configDir: $836f855d1b318ba1$export$4368d992c4eafac0,
    dataDir: $836f855d1b318ba1$export$f1e1789686576879,
    desktopDir: $836f855d1b318ba1$export$2d1720544b23b823,
    documentDir: $836f855d1b318ba1$export$39b482c5e57630a8,
    downloadDir: $836f855d1b318ba1$export$dda1d9f60106f0e9,
    executableDir: $836f855d1b318ba1$export$23f2a1d2818174ef,
    fontDir: $836f855d1b318ba1$export$35e795649ee09318,
    homeDir: $836f855d1b318ba1$export$342063e11d6c3cad,
    localDataDir: $836f855d1b318ba1$export$882b5998b3b9117c,
    pictureDir: $836f855d1b318ba1$export$953cecd6e717a553,
    publicDir: $836f855d1b318ba1$export$7ccc53e8f1e7dfc5,
    resourceDir: $836f855d1b318ba1$export$43caf9889c228507,
    runtimeDir: $836f855d1b318ba1$export$ae1af26003f05816,
    templateDir: $836f855d1b318ba1$export$625550452a3fa3ec,
    videoDir: $836f855d1b318ba1$export$90a7f3efeed30595,
    currentDir: $836f855d1b318ba1$export$9e5f44173e64f162,
    get BaseDirectory () {
        return $b2e3b9fd017c80e7$export$ef35774e6d314e91;
    },
    sep: $836f855d1b318ba1$export$2408f22a0fab9ae5,
    delimiter: $836f855d1b318ba1$export$3b14a55fb2447963,
    resolve: $836f855d1b318ba1$export$efccba1c4a2ef57b,
    normalize: $836f855d1b318ba1$export$d141bba7fdc215a3,
    join: $836f855d1b318ba1$export$4a5767248b18ef41,
    dirname: $836f855d1b318ba1$export$df995fae86a55f06,
    extname: $836f855d1b318ba1$export$ebd11618f299a286,
    basename: $836f855d1b318ba1$export$ef35774e6d314e91,
    isAbsolute: $836f855d1b318ba1$export$e7094788287c5e9b
});




class $2dbb63a87f5e4f55$export$f160779312cf57d5 {
    constructor(){
    }
    async loadLocal() {
        try {
            let homeDir = await $836f855d1b318ba1$export$342063e11d6c3cad();
            let file = homeDir + ".tauri_progres/data.json";
            let text = await $b2e3b9fd017c80e7$export$43caf9889c228507(file);
            console.log(text);
        } catch (e) {
            throw e;
        }
    }
    static async ensureFileExists() {
        // Create or read folder
        let homeDir;
        try {
            homeDir = await $836f855d1b318ba1$export$342063e11d6c3cad();
            let dataDir = homeDir + ".tauri_progres";
            let created = await $b2e3b9fd017c80e7$export$4368d992c4eafac0(dataDir);
            console.log("Created", created);
        } catch (e) {
            console.log(e);
            if (typeof e == 'string' && e.includes("os error 17")) ;
            else throw e;
        }
        // Folder now exists
        try {
            let homeDir1 = await $836f855d1b318ba1$export$342063e11d6c3cad();
            let file = homeDir1 + ".tauri_progres/data.json";
            let text = await $b2e3b9fd017c80e7$export$43caf9889c228507(file);
            console.log(text);
        } catch (e1) {
            console.log(e1);
            if (typeof e1 == 'string' && e1.includes("os error 2")) // no file exists, create now
            try {
                let homeDir = await $836f855d1b318ba1$export$342063e11d6c3cad();
                let path = homeDir + ".tauri_progres/data.json";
                let text = await $b2e3b9fd017c80e7$export$efccba1c4a2ef57b({
                    contents: "",
                    path: path
                });
            } catch (error) {
                throw error;
            }
            else throw e1;
        }
    }
}


window.onload = async function() {
    let formOpenBtn = document.getElementById("open-form");
    let formCloseBtn = document.getElementById("close-form");
    let formEnclosure = document.getElementById("form-enclosure");
    console.log(formOpenBtn, formCloseBtn, formEnclosure);
    formOpenBtn.addEventListener("click", ()=>{
        formEnclosure.style.display = "flex";
    });
    formCloseBtn.addEventListener("click", ()=>{
        formEnclosure.style.display = "none";
    });
    let f = new $7b79fc2448b3b35e$export$ca95ea95faa89f36();
    let alerts = new $086d5838aee8ae00$export$a99aab2a736cea3e();
    alerts.hideAll();
    const form = document.getElementById("add-form");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let errors = f.validate();
        if (errors.length > 0) alerts.show('error', errors.join('\n'), 60000);
        else {
            let weeks = document.getElementById("weeks");
            let weekInput = f.submit();
            console.log(weekInput);
            let w = new $850e48264ea38c74$export$fca4f8121099df57(weekInput);
            console.log(w);
            let htmlcontainer = document.createElement('div');
            htmlcontainer.id = w.id;
            weeks.prepend(htmlcontainer);
            $a51c7802bfe1890e$export$b3890eb0ae9dca99($850e48264ea38c74$export$b93cec6dd11b1714(w), htmlcontainer);
            setTimeout(()=>{
                w.markSolvableDone('activities');
                $a51c7802bfe1890e$export$b3890eb0ae9dca99($850e48264ea38c74$export$b93cec6dd11b1714(w), htmlcontainer);
            }, 5000);
            let sss = JSON.stringify(w);
            console.log(sss);
            let w2 = new $850e48264ea38c74$export$fca4f8121099df57(JSON.parse(sss));
            w2.name = "Arpit Jain 2";
            console.log(w2);
            //weeks.prepend(w2.getHTML());
            console.log($850e48264ea38c74$export$fca4f8121099df57.Validate(JSON.parse(sss)));
        }
    });
    try {
        let exists = await $2dbb63a87f5e4f55$export$f160779312cf57d5.ensureFileExists();
        console.log(exists);
    } catch (error) {
        console.log(console.error());
        alerts.show('error', error, 1000);
    }
};


