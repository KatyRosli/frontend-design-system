import * as e from "react";
import { createContext as t, createElement as n, forwardRef as r, useContext as i, useEffect as a, useLayoutEffect as o, useRef as s, useState as c } from "react";
import * as l from "react-dom";
//#region \0rolldown/runtime.js
var u = Object.create, d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, p = Object.getOwnPropertyNames, m = Object.getPrototypeOf, h = Object.prototype.hasOwnProperty, g = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), _ = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = p(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !h.call(e, s) && s !== n && d(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = f(t, s)) || r.enumerable
	});
	return e;
}, v = (e, t, n) => (n = e == null ? {} : u(m(e)), _(t || !e || !e.__esModule ? d(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), y = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function b(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = b(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function x() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = b(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var S = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, C = (e, t) => ({
	classGroupId: e,
	validator: t
}), w = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), T = "-", E = [], D = "arbitrary..", O = (e) => {
	let t = j(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return A(e);
			let n = e.split(T);
			return k(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? S(i, t) : t : i || E;
			}
			return n[e] || E;
		}
	};
}, k = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = k(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(T) : e.slice(t).join(T), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, A = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? D + r : void 0;
})(), j = (e) => {
	let { theme: t, classGroups: n } = e;
	return M(n, t);
}, M = (e, t) => {
	let n = w();
	for (let r in e) {
		let i = e[r];
		N(i, n, r, t);
	}
	return n;
}, N = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		P(i, t, n, r);
	}
}, P = (e, t, n, r) => {
	if (typeof e == "string") {
		F(e, t, n);
		return;
	}
	if (typeof e == "function") {
		I(e, t, n, r);
		return;
	}
	L(e, t, n, r);
}, F = (e, t, n) => {
	let r = e === "" ? t : R(t, e);
	r.classGroupId = n;
}, I = (e, t, n, r) => {
	if (z(e)) {
		N(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(C(n, e));
}, L = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		N(o, R(t, a), n, r);
	}
}, R = (e, t) => {
	let n = e, r = t.split(T), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = w(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, z = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, B = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, V = "!", H = ":", U = [], ee = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), W = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === H) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(V) ? (c = s.slice(0, -1), l = !0) : s.startsWith(V) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return ee(t, l, c, u);
	};
	if (t) {
		let e = t + H, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : ee(U, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, G = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, K = (e) => ({
	cache: B(e.cacheSize),
	parseClassName: W(e),
	sortModifiers: G(e),
	postfixLookupClassGroupIds: te(e),
	...O(e)
}), te = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, ne = /\s+/, re = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(ne), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + V : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, q = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = ie(n)) && (i && (i += " "), i += r);
	return i;
}, ie = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = ie(e[r])) && (n && (n += " "), n += t);
	return n;
}, ae = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = K(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = re(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(q(...e));
}, oe = [], J = (e) => {
	let t = (t) => t[e] || oe;
	return t.isThemeGetter = !0, t;
}, se = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ce = /^\((?:(\w[\w-]*):)?(.+)\)$/i, le = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ue = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, de = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, fe = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, pe = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, me = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, he = (e) => le.test(e), Y = (e) => !!e && !Number.isNaN(Number(e)), ge = (e) => !!e && Number.isInteger(Number(e)), _e = (e) => e.endsWith("%") && Y(e.slice(0, -1)), ve = (e) => ue.test(e), ye = () => !0, be = (e) => de.test(e) && !fe.test(e), xe = () => !1, Se = (e) => pe.test(e), Ce = (e) => me.test(e), we = (e) => !X(e) && !Z(e), Te = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Ee = (e) => Ve(e, Ge, xe), X = (e) => se.test(e), De = (e) => Ve(e, Ke, be), Oe = (e) => Ve(e, qe, Y), ke = (e) => Ve(e, Ye, ye), Ae = (e) => Ve(e, Je, xe), je = (e) => Ve(e, Ue, xe), Me = (e) => Ve(e, We, Ce), Ne = (e) => Ve(e, Xe, Se), Z = (e) => ce.test(e), Pe = (e) => He(e, Ke), Fe = (e) => He(e, Je), Ie = (e) => He(e, Ue), Le = (e) => He(e, Ge), Re = (e) => He(e, We), ze = (e) => He(e, Xe, !0), Be = (e) => He(e, Ye, !0), Ve = (e, t, n) => {
	let r = se.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, He = (e, t, n = !1) => {
	let r = ce.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Ue = (e) => e === "position" || e === "percentage", We = (e) => e === "image" || e === "url", Ge = (e) => e === "length" || e === "size" || e === "bg-size", Ke = (e) => e === "length", qe = (e) => e === "number", Je = (e) => e === "family-name", Ye = (e) => e === "number" || e === "weight", Xe = (e) => e === "shadow", Ze = /*#__PURE__*/ ae(() => {
	let e = J("color"), t = J("font"), n = J("text"), r = J("font-weight"), i = J("tracking"), a = J("leading"), o = J("breakpoint"), s = J("container"), c = J("spacing"), l = J("radius"), u = J("shadow"), d = J("inset-shadow"), f = J("text-shadow"), p = J("drop-shadow"), m = J("blur"), h = J("perspective"), g = J("aspect"), _ = J("ease"), v = J("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		Z,
		X
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		Z,
		X,
		c
	], T = () => [
		he,
		"full",
		"auto",
		...w()
	], E = () => [
		ge,
		"none",
		"subgrid",
		Z,
		X
	], D = () => [
		"auto",
		{ span: [
			"full",
			ge,
			Z,
			X
		] },
		ge,
		Z,
		X
	], O = () => [
		ge,
		"auto",
		Z,
		X
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		Z,
		X
	], A = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], j = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], M = () => ["auto", ...w()], N = () => [
		he,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], P = () => [
		he,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], F = () => [
		he,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], I = () => [
		e,
		Z,
		X
	], L = () => [
		...b(),
		Ie,
		je,
		{ position: [Z, X] }
	], R = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], z = () => [
		"auto",
		"cover",
		"contain",
		Le,
		Ee,
		{ size: [Z, X] }
	], B = () => [
		_e,
		Pe,
		De
	], V = () => [
		"",
		"none",
		"full",
		l,
		Z,
		X
	], H = () => [
		"",
		Y,
		Pe,
		De
	], U = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ee = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], W = () => [
		Y,
		_e,
		Ie,
		je
	], G = () => [
		"",
		"none",
		m,
		Z,
		X
	], K = () => [
		"none",
		Y,
		Z,
		X
	], te = () => [
		"none",
		Y,
		Z,
		X
	], ne = () => [
		Y,
		Z,
		X
	], re = () => [
		he,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [ve],
			breakpoint: [ve],
			color: [ye],
			container: [ve],
			"drop-shadow": [ve],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [we],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [ve],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [ve],
			shadow: [ve],
			spacing: ["px", Y],
			text: [ve],
			"text-shadow": [ve],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				he,
				X,
				Z,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				Z,
				X
			] }],
			"container-named": [Te],
			columns: [{ columns: [
				Y,
				X,
				Z,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				ge,
				"auto",
				Z,
				X
			] }],
			basis: [{ basis: [
				he,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				Y,
				he,
				"auto",
				"initial",
				"none",
				X
			] }],
			grow: [{ grow: [
				"",
				Y,
				Z,
				X
			] }],
			shrink: [{ shrink: [
				"",
				Y,
				Z,
				X
			] }],
			order: [{ order: [
				ge,
				"first",
				"last",
				"none",
				Z,
				X
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": k() }],
			"auto-rows": [{ "auto-rows": k() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...A(), "normal"] }],
			"justify-items": [{ "justify-items": [...j(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...j()] }],
			"align-content": [{ content: ["normal", ...A()] }],
			"align-items": [{ items: [...j(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...j(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": A() }],
			"place-items": [{ "place-items": [...j(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...j()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: M() }],
			mx: [{ mx: M() }],
			my: [{ my: M() }],
			ms: [{ ms: M() }],
			me: [{ me: M() }],
			mbs: [{ mbs: M() }],
			mbe: [{ mbe: M() }],
			mt: [{ mt: M() }],
			mr: [{ mr: M() }],
			mb: [{ mb: M() }],
			ml: [{ ml: M() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: N() }],
			"inline-size": [{ inline: ["auto", ...P()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...P()] }],
			"max-inline-size": [{ "max-inline": ["none", ...P()] }],
			"block-size": [{ block: ["auto", ...F()] }],
			"min-block-size": [{ "min-block": ["auto", ...F()] }],
			"max-block-size": [{ "max-block": ["none", ...F()] }],
			w: [{ w: [
				s,
				"screen",
				...N()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...N()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...N()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...N()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...N()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Pe,
				De
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Be,
				ke
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				_e,
				X
			] }],
			"font-family": [{ font: [
				Fe,
				Ae,
				t
			] }],
			"font-features": [{ "font-features": [X] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Z,
				X
			] }],
			"line-clamp": [{ "line-clamp": [
				Y,
				"none",
				Z,
				Oe
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				Z,
				X
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Z,
				X
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: I() }],
			"text-color": [{ text: I() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...U(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				Y,
				"from-font",
				"auto",
				Z,
				De
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				Y,
				"auto",
				Z,
				X
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				ge,
				Z,
				X
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				Z,
				X
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				Z,
				X
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: L() }],
			"bg-repeat": [{ bg: R() }],
			"bg-size": [{ bg: z() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						ge,
						Z,
						X
					],
					radial: [
						"",
						Z,
						X
					],
					conic: [
						ge,
						Z,
						X
					]
				},
				Re,
				Me
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: B() }],
			"gradient-via-pos": [{ via: B() }],
			"gradient-to-pos": [{ to: B() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: V() }],
			"rounded-s": [{ "rounded-s": V() }],
			"rounded-e": [{ "rounded-e": V() }],
			"rounded-t": [{ "rounded-t": V() }],
			"rounded-r": [{ "rounded-r": V() }],
			"rounded-b": [{ "rounded-b": V() }],
			"rounded-l": [{ "rounded-l": V() }],
			"rounded-ss": [{ "rounded-ss": V() }],
			"rounded-se": [{ "rounded-se": V() }],
			"rounded-ee": [{ "rounded-ee": V() }],
			"rounded-es": [{ "rounded-es": V() }],
			"rounded-tl": [{ "rounded-tl": V() }],
			"rounded-tr": [{ "rounded-tr": V() }],
			"rounded-br": [{ "rounded-br": V() }],
			"rounded-bl": [{ "rounded-bl": V() }],
			"border-w": [{ border: H() }],
			"border-w-x": [{ "border-x": H() }],
			"border-w-y": [{ "border-y": H() }],
			"border-w-s": [{ "border-s": H() }],
			"border-w-e": [{ "border-e": H() }],
			"border-w-bs": [{ "border-bs": H() }],
			"border-w-be": [{ "border-be": H() }],
			"border-w-t": [{ "border-t": H() }],
			"border-w-r": [{ "border-r": H() }],
			"border-w-b": [{ "border-b": H() }],
			"border-w-l": [{ "border-l": H() }],
			"divide-x": [{ "divide-x": H() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": H() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...U(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...U(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: I() }],
			"border-color-x": [{ "border-x": I() }],
			"border-color-y": [{ "border-y": I() }],
			"border-color-s": [{ "border-s": I() }],
			"border-color-e": [{ "border-e": I() }],
			"border-color-bs": [{ "border-bs": I() }],
			"border-color-be": [{ "border-be": I() }],
			"border-color-t": [{ "border-t": I() }],
			"border-color-r": [{ "border-r": I() }],
			"border-color-b": [{ "border-b": I() }],
			"border-color-l": [{ "border-l": I() }],
			"divide-color": [{ divide: I() }],
			"outline-style": [{ outline: [
				...U(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				Y,
				Z,
				X
			] }],
			"outline-w": [{ outline: [
				"",
				Y,
				Pe,
				De
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				ze,
				Ne
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				ze,
				Ne
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: H() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [Y, De] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": H() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				ze,
				Ne
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				Y,
				Z,
				X
			] }],
			"mix-blend": [{ "mix-blend": [
				...ee(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ee() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [Y] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": W() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": W() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": W() }],
			"mask-image-t-to-pos": [{ "mask-t-to": W() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": W() }],
			"mask-image-r-to-pos": [{ "mask-r-to": W() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": W() }],
			"mask-image-b-to-pos": [{ "mask-b-to": W() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": W() }],
			"mask-image-l-to-pos": [{ "mask-l-to": W() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": W() }],
			"mask-image-x-to-pos": [{ "mask-x-to": W() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": W() }],
			"mask-image-y-to-pos": [{ "mask-y-to": W() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [Z, X] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": W() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": W() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [Y] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": W() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": W() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": I() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": I() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: L() }],
			"mask-repeat": [{ mask: R() }],
			"mask-size": [{ mask: z() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				Z,
				X
			] }],
			filter: [{ filter: [
				"",
				"none",
				Z,
				X
			] }],
			blur: [{ blur: G() }],
			brightness: [{ brightness: [
				Y,
				Z,
				X
			] }],
			contrast: [{ contrast: [
				Y,
				Z,
				X
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				ze,
				Ne
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				Y,
				Z,
				X
			] }],
			"hue-rotate": [{ "hue-rotate": [
				Y,
				Z,
				X
			] }],
			invert: [{ invert: [
				"",
				Y,
				Z,
				X
			] }],
			saturate: [{ saturate: [
				Y,
				Z,
				X
			] }],
			sepia: [{ sepia: [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Z,
				X
			] }],
			"backdrop-blur": [{ "backdrop-blur": G() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				Y,
				Z,
				X
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				Y,
				Z,
				X
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				Y,
				Z,
				X
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				Y,
				Z,
				X
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				Y,
				Z,
				X
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				Y,
				Z,
				X
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				Z,
				X
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				Y,
				"initial",
				Z,
				X
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				Z,
				X
			] }],
			delay: [{ delay: [
				Y,
				Z,
				X
			] }],
			animate: [{ animate: [
				"none",
				v,
				Z,
				X
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				Z,
				X
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: K() }],
			"rotate-x": [{ "rotate-x": K() }],
			"rotate-y": [{ "rotate-y": K() }],
			"rotate-z": [{ "rotate-z": K() }],
			scale: [{ scale: te() }],
			"scale-x": [{ "scale-x": te() }],
			"scale-y": [{ "scale-y": te() }],
			"scale-z": [{ "scale-z": te() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ne() }],
			"skew-x": [{ "skew-x": ne() }],
			"skew-y": [{ "skew-y": ne() }],
			transform: [{ transform: [
				Z,
				X,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: re() }],
			"translate-x": [{ "translate-x": re() }],
			"translate-y": [{ "translate-y": re() }],
			"translate-z": [{ "translate-z": re() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				ge,
				Z,
				X
			] }],
			accent: [{ accent: I() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: I() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				Z,
				X
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": I() }],
			"scrollbar-track-color": [{ "scrollbar-track": I() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				Z,
				X
			] }],
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				Y,
				Pe,
				De,
				Oe
			] }],
			stroke: [{ stroke: ["none", ...I()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/lib/utils.ts
function Qe(...e) {
	return Ze(x(e));
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var $e = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, et = x, tt = (e, t) => (n) => {
	if (t?.variants == null) return et(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = $e(t) || $e(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return et(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, nt = /* @__PURE__ */ g(((e) => {
	function t(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e._ = t;
})), rt = /* @__PURE__ */ g(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "warnOnce", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (e) => {};
	if (process.env.NODE_ENV !== "production") {
		let e = /* @__PURE__ */ new Set();
		t = (t) => {
			e.has(t) || console.warn(t), e.add(t);
		};
	}
})), it = /* @__PURE__ */ g(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), 0 && (t.exports = {
		getAssetToken: null,
		getAssetTokenQuery: null,
		getDeploymentId: null,
		getDeploymentIdQuery: null
	});
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		getAssetToken: function() {
			return o;
		},
		getAssetTokenQuery: function() {
			return s;
		},
		getDeploymentId: function() {
			return i;
		},
		getDeploymentIdQuery: function() {
			return a;
		}
	});
	var r;
	typeof window < "u" ? (r = document.documentElement.dataset.dplId, delete document.documentElement.dataset.dplId) : r = process.env.NEXT_DEPLOYMENT_ID || void 0;
	function i() {
		return r;
	}
	function a(e = !1) {
		let t = i();
		return t ? `${e ? "&" : "?"}dpl=${t}` : "";
	}
	function o() {
		return process.env.NEXT_IMMUTABLE_ASSET_TOKEN || process.env.NEXT_DEPLOYMENT_ID;
	}
	function s(e = !1) {
		let t = o();
		return t ? `${e ? "&" : "?"}dpl=${t}` : "";
	}
})), at = /* @__PURE__ */ g(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "getImageBlurSvg", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	function t({ widthInt: e, heightInt: t, blurWidth: n, blurHeight: r, blurDataURL: i, objectFit: a }) {
		let o = n ? n * 40 : e, s = r ? r * 40 : t, c = o && s ? `viewBox='0 0 ${o} ${s}'` : "";
		return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c ? "none" : a === "contain" ? "xMidYMid" : a === "cover" ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`;
	}
})), ot = /* @__PURE__ */ g(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), 0 && (t.exports = {
		VALID_LOADERS: null,
		imageConfigDefault: null
	});
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		VALID_LOADERS: function() {
			return r;
		},
		imageConfigDefault: function() {
			return i;
		}
	});
	var r = [
		"default",
		"imgix",
		"cloudinary",
		"akamai",
		"custom"
	], i = {
		deviceSizes: [
			640,
			750,
			828,
			1080,
			1200,
			1920,
			2048,
			3840
		],
		imageSizes: [
			32,
			48,
			64,
			96,
			128,
			256,
			384
		],
		path: "/_next/image",
		loader: "default",
		loaderFile: "",
		domains: [],
		disableStaticImages: !1,
		minimumCacheTTL: 14400,
		formats: ["image/webp"],
		maximumDiskCacheSize: void 0,
		maximumRedirects: 3,
		maximumResponseBody: 5e7,
		dangerouslyAllowLocalIP: !1,
		dangerouslyAllowSVG: !1,
		contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
		contentDispositionType: "attachment",
		localPatterns: void 0,
		remotePatterns: [],
		qualities: [75],
		unoptimized: !1,
		customCacheHandler: !1
	};
})), st = /* @__PURE__ */ g(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "getImgProps", {
		enumerable: !0,
		get: function() {
			return h;
		}
	});
	var t = rt(), n = it(), r = at(), i = ot(), a = [
		"lazy",
		"eager",
		void 0
	], o = [
		"-moz-initial",
		"fill",
		"none",
		"scale-down",
		void 0
	];
	function s(e) {
		return e.default !== void 0;
	}
	function c(e) {
		return e.src !== void 0;
	}
	function l(e) {
		return !!e && typeof e == "object" && (s(e) || c(e));
	}
	var u = /* @__PURE__ */ new Map(), d;
	function f(e) {
		return e === void 0 ? e : typeof e == "number" ? Number.isFinite(e) ? e : NaN : typeof e == "string" && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN;
	}
	function p({ deviceSizes: e, allSizes: t }, n, r) {
		if (r) {
			let n = /(^|\s)(1?\d?\d)vw/g, i = [];
			for (let e; e = n.exec(r);) i.push(parseInt(e[2]));
			if (i.length) {
				let n = Math.min(...i) * .01;
				return {
					widths: t.filter((t) => t >= e[0] * n),
					kind: "w"
				};
			}
			return {
				widths: t,
				kind: "w"
			};
		}
		return typeof n == "number" ? {
			widths: [...new Set([n, n * 2].map((e) => t.find((t) => t >= e) || t[t.length - 1]))],
			kind: "x"
		} : {
			widths: e,
			kind: "w"
		};
	}
	function m({ config: e, src: t, unoptimized: r, width: i, quality: a, sizes: o, loader: s }) {
		if (r) {
			if (t.startsWith("/") && !t.startsWith("//")) {
				let e = (0, n.getDeploymentId)();
				if (e) {
					let n = t.indexOf("?");
					if (n !== -1) {
						let r = new URLSearchParams(t.slice(n + 1));
						r.get("dpl") || (r.append("dpl", e), t = t.slice(0, n) + "?" + r.toString());
					} else t += `?dpl=${e}`;
				}
			}
			return {
				src: t,
				srcSet: void 0,
				sizes: void 0
			};
		}
		let { widths: c, kind: l } = p(e, i, o), u = c.length - 1;
		return {
			sizes: !o && l === "w" ? "100vw" : o,
			srcSet: c.map((n, r) => `${s({
				config: e,
				src: t,
				quality: a,
				width: n
			})} ${l === "w" ? n : r + 1}${l}`).join(", "),
			src: s({
				config: e,
				src: t,
				quality: a,
				width: c[u]
			})
		};
	}
	function h({ src: e, sizes: n, unoptimized: c = !1, priority: p = !1, preload: h = !1, loading: g, className: _, quality: v, width: y, height: b, fill: x = !1, style: S, overrideSrc: C, onLoad: w, onLoadingComplete: T, placeholder: E = "empty", blurDataURL: D, fetchPriority: O, decoding: k = "async", layout: A, objectFit: j, objectPosition: M, lazyBoundary: N, lazyRoot: P, ...F }, I) {
		let { imgConf: L, showAltText: R, blurComplete: z, defaultLoader: B } = I, V, H = L || i.imageConfigDefault;
		if ("allSizes" in H) V = H;
		else {
			let e = [...H.deviceSizes, ...H.imageSizes].sort((e, t) => e - t), t = H.deviceSizes.sort((e, t) => e - t), n = H.qualities?.sort((e, t) => e - t);
			V = {
				...H,
				allSizes: e,
				deviceSizes: t,
				qualities: n
			};
		}
		if (B === void 0) throw Object.defineProperty(/* @__PURE__ */ Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
			value: "E163",
			enumerable: !1,
			configurable: !0
		});
		let U = F.loader || B;
		delete F.loader, delete F.srcSet;
		let ee = "__next_img_default" in U;
		if (ee) {
			if (V.loader === "custom") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
				value: "E252",
				enumerable: !1,
				configurable: !0
			});
		} else {
			let e = U;
			U = (t) => {
				let { config: n, ...r } = t;
				return e(r);
			};
		}
		if (A) {
			A === "fill" && (x = !0);
			let e = {
				intrinsic: {
					maxWidth: "100%",
					height: "auto"
				},
				responsive: {
					width: "100%",
					height: "auto"
				}
			}, t = {
				responsive: "100vw",
				fill: "100vw"
			}, r = e[A];
			r && (S = {
				...S,
				...r
			});
			let i = t[A];
			i && !n && (n = i);
		}
		let W = "", G = f(y), K = f(b), te, ne;
		if (l(e)) {
			let t = s(e) ? e.default : e;
			if (!t.src) throw Object.defineProperty(/* @__PURE__ */ Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
				value: "E460",
				enumerable: !1,
				configurable: !0
			});
			if (!t.height || !t.width) throw Object.defineProperty(/* @__PURE__ */ Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
				value: "E48",
				enumerable: !1,
				configurable: !0
			});
			if (te = t.blurWidth, ne = t.blurHeight, D ||= t.blurDataURL, W = t.src, !x) {
				if (!G && !K) G = t.width, K = t.height;
				else if (G && !K) {
					let e = G / t.width;
					K = Math.round(t.height * e);
				} else if (!G && K) {
					let e = K / t.height;
					G = Math.round(t.width * e);
				}
			}
		}
		e = typeof e == "string" ? e : W;
		let re = !p && !h && (g === "lazy" || g === void 0);
		(!e || e.startsWith("data:") || e.startsWith("blob:")) && (c = !0, re = !1), V.unoptimized && (c = !0), ee && !V.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (c = !0);
		let q = f(v);
		if (process.env.NODE_ENV !== "production") {
			if (V.output === "export" && ee && !c) throw Object.defineProperty(/* @__PURE__ */ Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api"), "__NEXT_ERROR_CODE", {
				value: "E500",
				enumerable: !1,
				configurable: !0
			});
			if (!e) c = !0;
			else if (x) {
				if (y) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
					value: "E96",
					enumerable: !1,
					configurable: !0
				});
				if (b) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
					value: "E115",
					enumerable: !1,
					configurable: !0
				});
				if (S?.position && S.position !== "absolute") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
					value: "E216",
					enumerable: !1,
					configurable: !0
				});
				if (S?.width && S.width !== "100%") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
					value: "E73",
					enumerable: !1,
					configurable: !0
				});
				if (S?.height && S.height !== "100%") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
					value: "E404",
					enumerable: !1,
					configurable: !0
				});
			} else {
				if (G === void 0) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
					value: "E451",
					enumerable: !1,
					configurable: !0
				});
				if (isNaN(G)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has invalid "width" property. Expected a numeric value in pixels but received "${y}".`), "__NEXT_ERROR_CODE", {
					value: "E66",
					enumerable: !1,
					configurable: !0
				});
				if (K === void 0) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
					value: "E397",
					enumerable: !1,
					configurable: !0
				});
				if (isNaN(K)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has invalid "height" property. Expected a numeric value in pixels but received "${b}".`), "__NEXT_ERROR_CODE", {
					value: "E444",
					enumerable: !1,
					configurable: !0
				});
				if (/^[\x00-\x20]/.test(e)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
					value: "E176",
					enumerable: !1,
					configurable: !0
				});
				if (/[\x00-\x20]$/.test(e)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
					value: "E21",
					enumerable: !1,
					configurable: !0
				});
			}
			if (!a.includes(g)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has invalid "loading" property. Provided "${g}" should be one of ${a.map(String).join(",")}.`), "__NEXT_ERROR_CODE", {
				value: "E357",
				enumerable: !1,
				configurable: !0
			});
			if (p && g === "lazy") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
				value: "E218",
				enumerable: !1,
				configurable: !0
			});
			if (h && g === "lazy") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
				value: "E803",
				enumerable: !1,
				configurable: !0
			});
			if (h && p) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
				value: "E802",
				enumerable: !1,
				configurable: !0
			});
			if (E !== "empty" && E !== "blur" && !E.startsWith("data:image/")) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has invalid "placeholder" property "${E}".`), "__NEXT_ERROR_CODE", {
				value: "E431",
				enumerable: !1,
				configurable: !0
			});
			if (E !== "empty" && G && K && G * K < 1600 && (0, t.warnOnce)(`Image with src "${e}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`), q && V.qualities && !V.qualities.includes(q) && (0, t.warnOnce)(`Image with src "${e}" is using quality "${q}" which is not configured in images.qualities [${V.qualities.join(", ")}]. Please update your config to [${[...V.qualities, q].sort().join(", ")}].\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`), E === "blur" && !D) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${[
				"jpeg",
				"png",
				"webp",
				"avif"
			].join(",")} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
				value: "E371",
				enumerable: !1,
				configurable: !0
			});
			if ("ref" in F && (0, t.warnOnce)(`Image with src "${e}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`), !c && !ee) {
				let n = U({
					config: V,
					src: e,
					width: G || 400,
					quality: q || 75
				}), r;
				try {
					r = new URL(n);
				} catch {}
				(n === e || r && r.pathname === e && !r.search) && (0, t.warnOnce)(`Image with src "${e}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
			}
			T && (0, t.warnOnce)(`Image with src "${e}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
			for (let [n, r] of Object.entries({
				layout: A,
				objectFit: j,
				objectPosition: M,
				lazyBoundary: N,
				lazyRoot: P
			})) r && (0, t.warnOnce)(`Image with src "${e}" has legacy prop "${n}". Did you forget to run the codemod?\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
			if (typeof window < "u" && !d && window.PerformanceObserver) {
				d = new PerformanceObserver((e) => {
					for (let n of e.getEntries()) {
						let e = n?.element?.src || "", r = u.get(e);
						r && r.loading === "lazy" && r.placeholder === "empty" && !r.src.startsWith("data:") && !r.src.startsWith("blob:") && (0, t.warnOnce)(`Image with src "${r.src}" was detected as the Largest Contentful Paint (LCP). Please add the \`loading="eager"\` property if this image is above the fold.\nRead more: https://nextjs.org/docs/app/api-reference/components/image#loading`);
					}
				});
				try {
					d.observe({
						type: "largest-contentful-paint",
						buffered: !0
					});
				} catch (e) {
					console.error(e);
				}
			}
		}
		let ie = Object.assign(x ? {
			position: "absolute",
			height: "100%",
			width: "100%",
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			objectFit: j,
			objectPosition: M
		} : {}, R ? {} : { color: "transparent" }, S), ae = !z && E !== "empty" ? E === "blur" ? `url("data:image/svg+xml;charset=utf-8,${(0, r.getImageBlurSvg)({
			widthInt: G,
			heightInt: K,
			blurWidth: te,
			blurHeight: ne,
			blurDataURL: D || "",
			objectFit: ie.objectFit
		})}")` : `url("${E}")` : null, oe = o.includes(ie.objectFit) ? ie.objectFit === "fill" ? "100% 100%" : "cover" : ie.objectFit, J = ae ? {
			backgroundSize: oe,
			backgroundPosition: ie.objectPosition || "50% 50%",
			backgroundRepeat: "no-repeat",
			backgroundImage: ae
		} : {};
		process.env.NODE_ENV === "development" && J.backgroundImage && E === "blur" && D?.startsWith("/") && (J.backgroundImage = `url("${D}")`);
		let se = m({
			config: V,
			src: e,
			unoptimized: c,
			width: G,
			quality: q,
			sizes: n,
			loader: U
		}), ce = re ? "lazy" : g;
		if (process.env.NODE_ENV !== "production" && typeof window < "u") {
			let t;
			try {
				t = new URL(se.src);
			} catch {
				t = new URL(se.src, window.location.href);
			}
			u.set(t.href, {
				src: e,
				loading: ce,
				placeholder: E
			});
		}
		return {
			props: {
				...F,
				loading: ce,
				fetchPriority: O,
				width: G,
				height: K,
				decoding: k,
				className: _,
				style: {
					...ie,
					...J
				},
				sizes: se.sizes,
				srcSet: se.srcSet,
				src: C || se.src
			},
			meta: {
				unoptimized: c,
				preload: h || p,
				placeholder: E,
				fill: x
			}
		};
	}
})), ct = /* @__PURE__ */ g(((e) => {
	function t(e) {
		if (typeof WeakMap != "function") return null;
		var n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
		return (t = function(e) {
			return e ? r : n;
		})(e);
	}
	function n(e, n) {
		if (!n && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var r = t(n);
		if (r && r.has(e)) return r.get(e);
		var i = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var o in e) if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
			var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
			s && (s.get || s.set) ? Object.defineProperty(i, o, s) : i[o] = e[o];
		}
		return i.default = e, r && r.set(e, i), i;
	}
	e._ = n;
})), lt = /* @__PURE__ */ g(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), ut = /* @__PURE__ */ g(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case _: return "Fragment";
				case b: return "Profiler";
				case v: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case g: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === _) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function u(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: h,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: l
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function d(e, n, i, o, l, d) {
			var p = n.children;
			if (p !== void 0) if (o) if (M(p)) {
				for (o = 0; o < p.length; o++) f(p[o]);
				Object.freeze && Object.freeze(p);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else f(p);
			if (j.call(n, "key")) {
				p = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[p + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, p, m, p), R[p + o] = !0);
			}
			if (p = null, i !== void 0 && (r(i), p = "" + i), s(n) && (r(n.key), p = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return p && c(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), u(e, p, i, a(), l, d);
		}
		function f(e) {
			p(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? p(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function p(e) {
			return typeof e == "object" && !!e && e.$$typeof === h;
		}
		var m = y("react"), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = m.react_stack_bottom_frame.bind(m, o)(), L = N(i(o)), R = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		};
	})();
})), dt = /* @__PURE__ */ g(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = lt() : t.exports = ut();
})), ft = /* @__PURE__ */ g(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "default", {
		enumerable: !0,
		get: function() {
			return a;
		}
	});
	var t = y("react"), n = typeof window > "u", r = n ? () => {} : t.useLayoutEffect, i = n ? () => {} : t.useEffect;
	function a(e) {
		let { headManager: a, reduceComponentsToState: o } = e;
		function s() {
			if (a && a.mountedInstances) {
				let e = t.Children.toArray(Array.from(a.mountedInstances).filter(Boolean));
				a.updateHead(o(e));
			}
		}
		return n && (a?.mountedInstances?.add(e.children), s()), r(() => (a?.mountedInstances?.add(e.children), () => {
			a?.mountedInstances?.delete(e.children);
		})), r(() => (a && (a._pendingUpdate = s), () => {
			a && (a._pendingUpdate = s);
		})), i(() => (a && a._pendingUpdate && (a._pendingUpdate(), a._pendingUpdate = null), () => {
			a && a._pendingUpdate && (a._pendingUpdate(), a._pendingUpdate = null);
		})), null;
	}
})), pt = /* @__PURE__ */ g(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "HeadManagerContext", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (/* @__PURE__ */ nt()._(y("react"))).default.createContext({});
	process.env.NODE_ENV !== "production" && (t.displayName = "HeadManagerContext");
})), mt = /* @__PURE__ */ g(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), 0 && (t.exports = {
		default: null,
		defaultHead: null
	});
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		default: function() {
			return g;
		},
		defaultHead: function() {
			return u;
		}
	});
	var r = nt(), i = ct(), a = dt(), o = /*#__PURE__*/ i._(y("react")), s = /*#__PURE__*/ r._(ft()), c = pt(), l = rt();
	function u() {
		return [/*#__PURE__*/ (0, a.jsx)("meta", { charSet: "utf-8" }, "charset"), /*#__PURE__*/ (0, a.jsx)("meta", {
			name: "viewport",
			content: "width=device-width"
		}, "viewport")];
	}
	function d(e, t) {
		return typeof t == "string" || typeof t == "number" ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((e, t) => typeof t == "string" || typeof t == "number" ? e : e.concat(t), [])) : e.concat(t);
	}
	var f = [
		"name",
		"httpEquiv",
		"charSet",
		"itemProp"
	];
	function p() {
		let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = {};
		return (i) => {
			let a = !0, o = !1;
			if (i.key && typeof i.key != "number" && i.key.indexOf("$") > 0) {
				o = !0;
				let t = i.key.slice(i.key.indexOf("$") + 1);
				e.has(t) ? a = !1 : e.add(t);
			}
			switch (i.type) {
				case "title":
				case "base":
					t.has(i.type) ? a = !1 : t.add(i.type);
					break;
				case "meta":
					for (let e = 0, t = f.length; e < t; e++) {
						let t = f[e];
						if (i.props.hasOwnProperty(t)) if (t === "charSet") n.has(t) ? a = !1 : n.add(t);
						else {
							let e = i.props[t], n = r[t] || /* @__PURE__ */ new Set();
							(t !== "name" || !o) && n.has(e) ? a = !1 : (n.add(e), r[t] = n);
						}
					}
					break;
			}
			return a;
		};
	}
	function m(e) {
		return e.reduce(d, []).reverse().concat(u().reverse()).filter(p()).reverse().map((e, t) => {
			let n = e.key || t;
			if (process.env.NODE_ENV === "development") if (e.type === "script" && e.props.type !== "application/ld+json") {
				let t = e.props.src ? `<script> tag with src="${e.props.src}"` : "inline <script>";
				(0, l.warnOnce)(`Do not add <script> tags using next/head (see ${t}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
			} else e.type === "link" && e.props.rel === "stylesheet" && (0, l.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${e.props.href}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
			return /*#__PURE__*/ o.default.cloneElement(e, { key: n });
		});
	}
	function h({ children: e }) {
		let t = (0, o.useContext)(c.HeadManagerContext);
		return /*#__PURE__*/ (0, a.jsx)(s.default, {
			reduceComponentsToState: m,
			headManager: t,
			children: e
		});
	}
	var g = h;
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), ht = /* @__PURE__ */ g(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "ImageConfigContext", {
		enumerable: !0,
		get: function() {
			return r;
		}
	});
	var t = /*#__PURE__*/ nt()._(y("react")), n = ot(), r = t.default.createContext(n.imageConfigDefault);
	process.env.NODE_ENV !== "production" && (r.displayName = "ImageConfigContext");
})), gt = /* @__PURE__ */ g(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "RouterContext", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (/* @__PURE__ */ nt()._(y("react"))).default.createContext(null);
	process.env.NODE_ENV !== "production" && (t.displayName = "RouterContext");
})), _t = /* @__PURE__ */ g(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "findClosestQuality", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	function t(e, t) {
		let n = e || 75;
		return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - n) < Math.abs(e - n) ? t : e, t.qualities[0]) : n;
	}
})), vt = /* @__PURE__ */ g(((e, t) => {
	(() => {
		var e = {
			170: (e, t, n) => {
				let r = n(510), i = () => {
					if (typeof navigator < "u" && navigator.platform) {
						let e = navigator.platform.toLowerCase();
						return e === "win32" || e === "windows";
					}
					return typeof process < "u" && process.platform ? process.platform === "win32" : !1;
				};
				function a(e, t, n = !1) {
					return t && (t.windows === null || t.windows === void 0) && (t = {
						...t,
						windows: i()
					}), r(e, t, n);
				}
				Object.assign(a, r), e.exports = a;
			},
			154: (e) => {
				let t = "[^\\\\/]", n = "[^/]", r = "(?:\\/|$)", i = "(?:^|\\/)", a = `\\.{1,2}${r}`, o = {
					DOT_LITERAL: "\\.",
					PLUS_LITERAL: "\\+",
					QMARK_LITERAL: "\\?",
					SLASH_LITERAL: "\\/",
					ONE_CHAR: "(?=.)",
					QMARK: n,
					END_ANCHOR: r,
					DOTS_SLASH: a,
					NO_DOT: "(?!\\.)",
					NO_DOTS: `(?!${i}${a})`,
					NO_DOT_SLASH: `(?!\\.{0,1}${r})`,
					NO_DOTS_SLASH: `(?!${a})`,
					QMARK_NO_DOT: "[^.\\/]",
					STAR: `${n}*?`,
					START_ANCHOR: i,
					SEP: "/"
				}, s = {
					...o,
					SLASH_LITERAL: "[\\\\/]",
					QMARK: t,
					STAR: `${t}*?`,
					DOTS_SLASH: "\\.{1,2}(?:[\\\\/]|$)",
					NO_DOT: "(?!\\.)",
					NO_DOTS: "(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",
					NO_DOT_SLASH: "(?!\\.{0,1}(?:[\\\\/]|$))",
					NO_DOTS_SLASH: "(?!\\.{1,2}(?:[\\\\/]|$))",
					QMARK_NO_DOT: "[^.\\\\/]",
					START_ANCHOR: "(?:^|[\\\\/])",
					END_ANCHOR: "(?:[\\\\/]|$)",
					SEP: "\\"
				};
				e.exports = {
					MAX_LENGTH: 1024 * 64,
					POSIX_REGEX_SOURCE: {
						alnum: "a-zA-Z0-9",
						alpha: "a-zA-Z",
						ascii: "\\x00-\\x7F",
						blank: " \\t",
						cntrl: "\\x00-\\x1F\\x7F",
						digit: "0-9",
						graph: "\\x21-\\x7E",
						lower: "a-z",
						print: "\\x20-\\x7E ",
						punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
						space: " \\t\\r\\n\\v\\f",
						upper: "A-Z",
						word: "A-Za-z0-9_",
						xdigit: "A-Fa-f0-9"
					},
					REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
					REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
					REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
					REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
					REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
					REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
					REPLACEMENTS: {
						"***": "*",
						"**/**": "**",
						"**/**/**": "**"
					},
					CHAR_0: 48,
					CHAR_9: 57,
					CHAR_UPPERCASE_A: 65,
					CHAR_LOWERCASE_A: 97,
					CHAR_UPPERCASE_Z: 90,
					CHAR_LOWERCASE_Z: 122,
					CHAR_LEFT_PARENTHESES: 40,
					CHAR_RIGHT_PARENTHESES: 41,
					CHAR_ASTERISK: 42,
					CHAR_AMPERSAND: 38,
					CHAR_AT: 64,
					CHAR_BACKWARD_SLASH: 92,
					CHAR_CARRIAGE_RETURN: 13,
					CHAR_CIRCUMFLEX_ACCENT: 94,
					CHAR_COLON: 58,
					CHAR_COMMA: 44,
					CHAR_DOT: 46,
					CHAR_DOUBLE_QUOTE: 34,
					CHAR_EQUAL: 61,
					CHAR_EXCLAMATION_MARK: 33,
					CHAR_FORM_FEED: 12,
					CHAR_FORWARD_SLASH: 47,
					CHAR_GRAVE_ACCENT: 96,
					CHAR_HASH: 35,
					CHAR_HYPHEN_MINUS: 45,
					CHAR_LEFT_ANGLE_BRACKET: 60,
					CHAR_LEFT_CURLY_BRACE: 123,
					CHAR_LEFT_SQUARE_BRACKET: 91,
					CHAR_LINE_FEED: 10,
					CHAR_NO_BREAK_SPACE: 160,
					CHAR_PERCENT: 37,
					CHAR_PLUS: 43,
					CHAR_QUESTION_MARK: 63,
					CHAR_RIGHT_ANGLE_BRACKET: 62,
					CHAR_RIGHT_CURLY_BRACE: 125,
					CHAR_RIGHT_SQUARE_BRACKET: 93,
					CHAR_SEMICOLON: 59,
					CHAR_SINGLE_QUOTE: 39,
					CHAR_SPACE: 32,
					CHAR_TAB: 9,
					CHAR_UNDERSCORE: 95,
					CHAR_VERTICAL_LINE: 124,
					CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
					extglobChars(e) {
						return {
							"!": {
								type: "negate",
								open: "(?:(?!(?:",
								close: `))${e.STAR})`
							},
							"?": {
								type: "qmark",
								open: "(?:",
								close: ")?"
							},
							"+": {
								type: "plus",
								open: "(?:",
								close: ")+"
							},
							"*": {
								type: "star",
								open: "(?:",
								close: ")*"
							},
							"@": {
								type: "at",
								open: "(?:",
								close: ")"
							}
						};
					},
					globChars(e) {
						return e === !0 ? s : o;
					}
				};
			},
			697: (e, t, n) => {
				let r = n(154), i = n(96), { MAX_LENGTH: a, POSIX_REGEX_SOURCE: o, REGEX_NON_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_BACKREF: c, REPLACEMENTS: l } = r, u = (e, t) => {
					if (typeof t.expandRange == "function") return t.expandRange(...e, t);
					e.sort();
					let n = `[${e.join("-")}]`;
					try {
						new RegExp(n);
					} catch {
						return e.map(((e) => i.escapeRegex(e))).join("..");
					}
					return n;
				}, d = (e, t) => `Missing ${e}: "${t}" - use "\\\\${t}" to match literal characters`, f = (e, t) => {
					if (typeof e != "string") throw TypeError("Expected a string");
					e = l[e] || e;
					let n = { ...t }, p = typeof n.maxLength == "number" ? Math.min(a, n.maxLength) : a, m = e.length;
					if (m > p) throw SyntaxError(`Input length: ${m}, exceeds maximum allowed length: ${p}`);
					let h = {
						type: "bos",
						value: "",
						output: n.prepend || ""
					}, g = [h], _ = n.capture ? "" : "?:", v = r.globChars(n.windows), y = r.extglobChars(v), { DOT_LITERAL: b, PLUS_LITERAL: x, SLASH_LITERAL: S, ONE_CHAR: C, DOTS_SLASH: w, NO_DOT: T, NO_DOT_SLASH: E, NO_DOTS_SLASH: D, QMARK: O, QMARK_NO_DOT: k, STAR: A, START_ANCHOR: j } = v, M = (e) => `(${_}(?:(?!${j}${e.dot ? w : b}).)*?)`, N = n.dot ? "" : T, P = n.dot ? O : k, F = n.bash === !0 ? M(n) : A;
					n.capture && (F = `(${F})`), typeof n.noext == "boolean" && (n.noextglob = n.noext);
					let I = {
						input: e,
						index: -1,
						start: 0,
						dot: n.dot === !0,
						consumed: "",
						output: "",
						prefix: "",
						backtrack: !1,
						negated: !1,
						brackets: 0,
						braces: 0,
						parens: 0,
						quotes: 0,
						globstar: !1,
						tokens: g
					};
					e = i.removePrefix(e, I), m = e.length;
					let L = [], R = [], z = [], B = h, V, H = () => I.index === m - 1, U = I.peek = (t = 1) => e[I.index + t], ee = I.advance = () => e[++I.index] || "", W = () => e.slice(I.index + 1), G = (e = "", t = 0) => {
						I.consumed += e, I.index += t;
					}, K = (e) => {
						I.output += e.output == null ? e.value : e.output, G(e.value);
					}, te = () => {
						let e = 1;
						for (; U() === "!" && (U(2) !== "(" || U(3) === "?");) ee(), I.start++, e++;
						return e % 2 == 0 ? !1 : (I.negated = !0, I.start++, !0);
					}, ne = (e) => {
						I[e]++, z.push(e);
					}, re = (e) => {
						I[e]--, z.pop();
					}, q = (e) => {
						if (B.type === "globstar") {
							let t = I.braces > 0 && (e.type === "comma" || e.type === "brace"), n = e.extglob === !0 || L.length && (e.type === "pipe" || e.type === "paren");
							e.type !== "slash" && e.type !== "paren" && !t && !n && (I.output = I.output.slice(0, -B.output.length), B.type = "star", B.value = "*", B.output = F, I.output += B.output);
						}
						if (L.length && e.type !== "paren" && (L[L.length - 1].inner += e.value), (e.value || e.output) && K(e), B && B.type === "text" && e.type === "text") {
							B.output = (B.output || B.value) + e.value, B.value += e.value;
							return;
						}
						e.prev = B, g.push(e), B = e;
					}, ie = (e, t) => {
						let r = {
							...y[t],
							conditions: 1,
							inner: ""
						};
						r.prev = B, r.parens = I.parens, r.output = I.output;
						let i = (n.capture ? "(" : "") + r.open;
						ne("parens"), q({
							type: e,
							value: t,
							output: I.output ? "" : C
						}), q({
							type: "paren",
							extglob: !0,
							value: ee(),
							output: i
						}), L.push(r);
					}, ae = (e) => {
						let r = e.close + (n.capture ? ")" : ""), i;
						if (e.type === "negate") {
							let a = F;
							e.inner && e.inner.length > 1 && e.inner.includes("/") && (a = M(n)), (a !== F || H() || /^\)+$/.test(W())) && (r = e.close = `)$))${a}`), e.inner.includes("*") && (i = W()) && /^\.[^\\/.]+$/.test(i) && (r = e.close = `)${f(i, {
								...t,
								fastpaths: !1
							}).output})${a})`), e.prev.type === "bos" && (I.negatedExtglob = !0);
						}
						q({
							type: "paren",
							extglob: !0,
							value: V,
							output: r
						}), re("parens");
					};
					if (n.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(e)) {
						let r = !1, a = e.replace(c, ((e, t, n, i, a, o) => i === "\\" ? (r = !0, e) : i === "?" ? t ? t + i + (a ? O.repeat(a.length) : "") : o === 0 ? P + (a ? O.repeat(a.length) : "") : O.repeat(n.length) : i === "." ? b.repeat(n.length) : i === "*" ? t ? t + i + (a ? F : "") : F : t ? e : `\\${e}`));
						return r === !0 && (a = n.unescape === !0 ? a.replace(/\\/g, "") : a.replace(/\\+/g, ((e) => e.length % 2 == 0 ? "\\\\" : e ? "\\" : ""))), a === e && n.contains === !0 ? (I.output = e, I) : (I.output = i.wrapOutput(a, I, t), I);
					}
					for (; !H();) {
						if (V = ee(), V === "\0") continue;
						if (V === "\\") {
							let e = U();
							if (e === "/" && n.bash !== !0 || e === "." || e === ";") continue;
							if (!e) {
								V += "\\", q({
									type: "text",
									value: V
								});
								continue;
							}
							let t = /^\\+/.exec(W()), r = 0;
							if (t && t[0].length > 2 && (r = t[0].length, I.index += r, r % 2 != 0 && (V += "\\")), n.unescape === !0 ? V = ee() : V += ee(), I.brackets === 0) {
								q({
									type: "text",
									value: V
								});
								continue;
							}
						}
						if (I.brackets > 0 && (V !== "]" || B.value === "[" || B.value === "[^")) {
							if (n.posix !== !1 && V === ":") {
								let e = B.value.slice(1);
								if (e.includes("[") && (B.posix = !0, e.includes(":"))) {
									let e = B.value.lastIndexOf("["), t = B.value.slice(0, e), n = B.value.slice(e + 2), r = o[n];
									if (r) {
										B.value = t + r, I.backtrack = !0, ee(), !h.output && g.indexOf(B) === 1 && (h.output = C);
										continue;
									}
								}
							}
							(V === "[" && U() !== ":" || V === "-" && U() === "]") && (V = `\\${V}`), V === "]" && (B.value === "[" || B.value === "[^") && (V = `\\${V}`), n.posix === !0 && V === "!" && B.value === "[" && (V = "^"), B.value += V, K({ value: V });
							continue;
						}
						if (I.quotes === 1 && V !== "\"") {
							V = i.escapeRegex(V), B.value += V, K({ value: V });
							continue;
						}
						if (V === "\"") {
							I.quotes = I.quotes === 1 ? 0 : 1, n.keepQuotes === !0 && q({
								type: "text",
								value: V
							});
							continue;
						}
						if (V === "(") {
							ne("parens"), q({
								type: "paren",
								value: V
							});
							continue;
						}
						if (V === ")") {
							if (I.parens === 0 && n.strictBrackets === !0) throw SyntaxError(d("opening", "("));
							let e = L[L.length - 1];
							if (e && I.parens === e.parens + 1) {
								ae(L.pop());
								continue;
							}
							q({
								type: "paren",
								value: V,
								output: I.parens ? ")" : "\\)"
							}), re("parens");
							continue;
						}
						if (V === "[") {
							if (n.nobracket === !0 || !W().includes("]")) {
								if (n.nobracket !== !0 && n.strictBrackets === !0) throw SyntaxError(d("closing", "]"));
								V = `\\${V}`;
							} else ne("brackets");
							q({
								type: "bracket",
								value: V
							});
							continue;
						}
						if (V === "]") {
							if (n.nobracket === !0 || B && B.type === "bracket" && B.value.length === 1) {
								q({
									type: "text",
									value: V,
									output: `\\${V}`
								});
								continue;
							}
							if (I.brackets === 0) {
								if (n.strictBrackets === !0) throw SyntaxError(d("opening", "["));
								q({
									type: "text",
									value: V,
									output: `\\${V}`
								});
								continue;
							}
							re("brackets");
							let e = B.value.slice(1);
							if (B.posix !== !0 && e[0] === "^" && !e.includes("/") && (V = `/${V}`), B.value += V, K({ value: V }), n.literalBrackets === !1 || i.hasRegexChars(e)) continue;
							let t = i.escapeRegex(B.value);
							if (I.output = I.output.slice(0, -B.value.length), n.literalBrackets === !0) {
								I.output += t, B.value = t;
								continue;
							}
							B.value = `(${_}${t}|${B.value})`, I.output += B.value;
							continue;
						}
						if (V === "{" && n.nobrace !== !0) {
							ne("braces");
							let e = {
								type: "brace",
								value: V,
								output: "(",
								outputIndex: I.output.length,
								tokensIndex: I.tokens.length
							};
							R.push(e), q(e);
							continue;
						}
						if (V === "}") {
							let e = R[R.length - 1];
							if (n.nobrace === !0 || !e) {
								q({
									type: "text",
									value: V,
									output: V
								});
								continue;
							}
							let t = ")";
							if (e.dots === !0) {
								let e = g.slice(), r = [];
								for (let t = e.length - 1; t >= 0 && (g.pop(), e[t].type !== "brace"); t--) e[t].type !== "dots" && r.unshift(e[t].value);
								t = u(r, n), I.backtrack = !0;
							}
							if (e.comma !== !0 && e.dots !== !0) {
								let n = I.output.slice(0, e.outputIndex), r = I.tokens.slice(e.tokensIndex);
								e.value = e.output = "\\{", V = t = "\\}", I.output = n;
								for (let e of r) I.output += e.output || e.value;
							}
							q({
								type: "brace",
								value: V,
								output: t
							}), re("braces"), R.pop();
							continue;
						}
						if (V === "|") {
							L.length > 0 && L[L.length - 1].conditions++, q({
								type: "text",
								value: V
							});
							continue;
						}
						if (V === ",") {
							let e = V, t = R[R.length - 1];
							t && z[z.length - 1] === "braces" && (t.comma = !0, e = "|"), q({
								type: "comma",
								value: V,
								output: e
							});
							continue;
						}
						if (V === "/") {
							if (B.type === "dot" && I.index === I.start + 1) {
								I.start = I.index + 1, I.consumed = "", I.output = "", g.pop(), B = h;
								continue;
							}
							q({
								type: "slash",
								value: V,
								output: S
							});
							continue;
						}
						if (V === ".") {
							if (I.braces > 0 && B.type === "dot") {
								B.value === "." && (B.output = b);
								let e = R[R.length - 1];
								B.type = "dots", B.output += V, B.value += V, e.dots = !0;
								continue;
							}
							if (I.braces + I.parens === 0 && B.type !== "bos" && B.type !== "slash") {
								q({
									type: "text",
									value: V,
									output: b
								});
								continue;
							}
							q({
								type: "dot",
								value: V,
								output: b
							});
							continue;
						}
						if (V === "?") {
							if (!(B && B.value === "(") && n.noextglob !== !0 && U() === "(" && U(2) !== "?") {
								ie("qmark", V);
								continue;
							}
							if (B && B.type === "paren") {
								let e = U(), t = V;
								(B.value === "(" && !/[!=<:]/.test(e) || e === "<" && !/<([!=]|\w+>)/.test(W())) && (t = `\\${V}`), q({
									type: "text",
									value: V,
									output: t
								});
								continue;
							}
							if (n.dot !== !0 && (B.type === "slash" || B.type === "bos")) {
								q({
									type: "qmark",
									value: V,
									output: k
								});
								continue;
							}
							q({
								type: "qmark",
								value: V,
								output: O
							});
							continue;
						}
						if (V === "!") {
							if (n.noextglob !== !0 && U() === "(" && (U(2) !== "?" || !/[!=<:]/.test(U(3)))) {
								ie("negate", V);
								continue;
							}
							if (n.nonegate !== !0 && I.index === 0) {
								te();
								continue;
							}
						}
						if (V === "+") {
							if (n.noextglob !== !0 && U() === "(" && U(2) !== "?") {
								ie("plus", V);
								continue;
							}
							if (B && B.value === "(" || n.regex === !1) {
								q({
									type: "plus",
									value: V,
									output: x
								});
								continue;
							}
							if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || I.parens > 0) {
								q({
									type: "plus",
									value: V
								});
								continue;
							}
							q({
								type: "plus",
								value: x
							});
							continue;
						}
						if (V === "@") {
							if (n.noextglob !== !0 && U() === "(" && U(2) !== "?") {
								q({
									type: "at",
									extglob: !0,
									value: V,
									output: ""
								});
								continue;
							}
							q({
								type: "text",
								value: V
							});
							continue;
						}
						if (V !== "*") {
							(V === "$" || V === "^") && (V = `\\${V}`);
							let e = s.exec(W());
							e && (V += e[0], I.index += e[0].length), q({
								type: "text",
								value: V
							});
							continue;
						}
						if (B && (B.type === "globstar" || B.star === !0)) {
							B.type = "star", B.star = !0, B.value += V, B.output = F, I.backtrack = !0, I.globstar = !0, G(V);
							continue;
						}
						let t = W();
						if (n.noextglob !== !0 && /^\([^?]/.test(t)) {
							ie("star", V);
							continue;
						}
						if (B.type === "star") {
							if (n.noglobstar === !0) {
								G(V);
								continue;
							}
							let r = B.prev, i = r.prev, a = r.type === "slash" || r.type === "bos", o = i && (i.type === "star" || i.type === "globstar");
							if (n.bash === !0 && (!a || t[0] && t[0] !== "/")) {
								q({
									type: "star",
									value: V,
									output: ""
								});
								continue;
							}
							let s = I.braces > 0 && (r.type === "comma" || r.type === "brace"), c = L.length && (r.type === "pipe" || r.type === "paren");
							if (!a && r.type !== "paren" && !s && !c) {
								q({
									type: "star",
									value: V,
									output: ""
								});
								continue;
							}
							for (; t.slice(0, 3) === "/**";) {
								let n = e[I.index + 4];
								if (n && n !== "/") break;
								t = t.slice(3), G("/**", 3);
							}
							if (r.type === "bos" && H()) {
								B.type = "globstar", B.value += V, B.output = M(n), I.output = B.output, I.globstar = !0, G(V);
								continue;
							}
							if (r.type === "slash" && r.prev.type !== "bos" && !o && H()) {
								I.output = I.output.slice(0, -(r.output + B.output).length), r.output = `(?:${r.output}`, B.type = "globstar", B.output = M(n) + (n.strictSlashes ? ")" : "|$)"), B.value += V, I.globstar = !0, I.output += r.output + B.output, G(V);
								continue;
							}
							if (r.type === "slash" && r.prev.type !== "bos" && t[0] === "/") {
								let e = t[1] === void 0 ? "" : "|$";
								I.output = I.output.slice(0, -(r.output + B.output).length), r.output = `(?:${r.output}`, B.type = "globstar", B.output = `${M(n)}${S}|${S}${e})`, B.value += V, I.output += r.output + B.output, I.globstar = !0, G(V + ee()), q({
									type: "slash",
									value: "/",
									output: ""
								});
								continue;
							}
							if (r.type === "bos" && t[0] === "/") {
								B.type = "globstar", B.value += V, B.output = `(?:^|${S}|${M(n)}${S})`, I.output = B.output, I.globstar = !0, G(V + ee()), q({
									type: "slash",
									value: "/",
									output: ""
								});
								continue;
							}
							I.output = I.output.slice(0, -B.output.length), B.type = "globstar", B.output = M(n), B.value += V, I.output += B.output, I.globstar = !0, G(V);
							continue;
						}
						let r = {
							type: "star",
							value: V,
							output: F
						};
						if (n.bash === !0) {
							r.output = ".*?", (B.type === "bos" || B.type === "slash") && (r.output = N + r.output), q(r);
							continue;
						}
						if (B && (B.type === "bracket" || B.type === "paren") && n.regex === !0) {
							r.output = V, q(r);
							continue;
						}
						(I.index === I.start || B.type === "slash" || B.type === "dot") && (B.type === "dot" ? (I.output += E, B.output += E) : n.dot === !0 ? (I.output += D, B.output += D) : (I.output += N, B.output += N), U() !== "*" && (I.output += C, B.output += C)), q(r);
					}
					for (; I.brackets > 0;) {
						if (n.strictBrackets === !0) throw SyntaxError(d("closing", "]"));
						I.output = i.escapeLast(I.output, "["), re("brackets");
					}
					for (; I.parens > 0;) {
						if (n.strictBrackets === !0) throw SyntaxError(d("closing", ")"));
						I.output = i.escapeLast(I.output, "("), re("parens");
					}
					for (; I.braces > 0;) {
						if (n.strictBrackets === !0) throw SyntaxError(d("closing", "}"));
						I.output = i.escapeLast(I.output, "{"), re("braces");
					}
					if (n.strictSlashes !== !0 && (B.type === "star" || B.type === "bracket") && q({
						type: "maybe_slash",
						value: "",
						output: `${S}?`
					}), I.backtrack === !0) {
						I.output = "";
						for (let e of I.tokens) I.output += e.output == null ? e.value : e.output, e.suffix && (I.output += e.suffix);
					}
					return I;
				};
				f.fastpaths = (e, t) => {
					let n = { ...t }, o = typeof n.maxLength == "number" ? Math.min(a, n.maxLength) : a, s = e.length;
					if (s > o) throw SyntaxError(`Input length: ${s}, exceeds maximum allowed length: ${o}`);
					e = l[e] || e;
					let { DOT_LITERAL: c, SLASH_LITERAL: u, ONE_CHAR: d, DOTS_SLASH: f, NO_DOT: p, NO_DOTS: m, NO_DOTS_SLASH: h, STAR: g, START_ANCHOR: _ } = r.globChars(n.windows), v = n.dot ? m : p, y = n.dot ? h : p, b = n.capture ? "" : "?:", x = {
						negated: !1,
						prefix: ""
					}, S = n.bash === !0 ? ".*?" : g;
					n.capture && (S = `(${S})`);
					let C = (e) => e.noglobstar === !0 ? S : `(${b}(?:(?!${_}${e.dot ? f : c}).)*?)`, w = (e) => {
						switch (e) {
							case "*": return `${v}${d}${S}`;
							case ".*": return `${c}${d}${S}`;
							case "*.*": return `${v}${S}${c}${d}${S}`;
							case "*/*": return `${v}${S}${u}${d}${y}${S}`;
							case "**": return v + C(n);
							case "**/*": return `(?:${v}${C(n)}${u})?${y}${d}${S}`;
							case "**/*.*": return `(?:${v}${C(n)}${u})?${y}${S}${c}${d}${S}`;
							case "**/.*": return `(?:${v}${C(n)}${u})?${c}${d}${S}`;
							default: {
								let t = /^(.*?)\.(\w+)$/.exec(e);
								if (!t) return;
								let n = w(t[1]);
								return n ? n + c + t[2] : void 0;
							}
						}
					}, T = w(i.removePrefix(e, x));
					return T && n.strictSlashes !== !0 && (T += `${u}?`), T;
				}, e.exports = f;
			},
			510: (e, t, n) => {
				let r = n(716), i = n(697), a = n(96), o = n(154), s = (e) => e && typeof e == "object" && !Array.isArray(e), c = (e, t, n = !1) => {
					if (Array.isArray(e)) {
						let r = e.map(((e) => c(e, t, n)));
						return (e) => {
							for (let t of r) {
								let n = t(e);
								if (n) return n;
							}
							return !1;
						};
					}
					let r = s(e) && e.tokens && e.input;
					if (e === "" || typeof e != "string" && !r) throw TypeError("Expected pattern to be a non-empty string");
					let i = t || {}, a = i.windows, o = r ? c.compileRe(e, t) : c.makeRe(e, t, !1, !0), l = o.state;
					delete o.state;
					let u = () => !1;
					if (i.ignore) {
						let e = {
							...t,
							ignore: null,
							onMatch: null,
							onResult: null
						};
						u = c(i.ignore, e, n);
					}
					let d = (n, r = !1) => {
						let { isMatch: s, match: d, output: f } = c.test(n, o, t, {
							glob: e,
							posix: a
						}), p = {
							glob: e,
							state: l,
							regex: o,
							posix: a,
							input: n,
							output: f,
							match: d,
							isMatch: s
						};
						return typeof i.onResult == "function" && i.onResult(p), s === !1 ? (p.isMatch = !1, r ? p : !1) : u(n) ? (typeof i.onIgnore == "function" && i.onIgnore(p), p.isMatch = !1, r ? p : !1) : (typeof i.onMatch == "function" && i.onMatch(p), !r || p);
					};
					return n && (d.state = l), d;
				};
				c.test = (e, t, n, { glob: r, posix: i } = {}) => {
					if (typeof e != "string") throw TypeError("Expected input to be a string");
					if (e === "") return {
						isMatch: !1,
						output: ""
					};
					let o = n || {}, s = o.format || (i ? a.toPosixSlashes : null), l = e === r, u = l && s ? s(e) : e;
					return l === !1 && (u = s ? s(e) : e, l = u === r), (l === !1 || o.capture === !0) && (l = o.matchBase === !0 || o.basename === !0 ? c.matchBase(e, t, n, i) : t.exec(u)), {
						isMatch: !!l,
						match: l,
						output: u
					};
				}, c.matchBase = (e, t, n) => (t instanceof RegExp ? t : c.makeRe(t, n)).test(a.basename(e)), c.isMatch = (e, t, n) => c(t, n)(e), c.parse = (e, t) => Array.isArray(e) ? e.map(((e) => c.parse(e, t))) : i(e, {
					...t,
					fastpaths: !1
				}), c.scan = (e, t) => r(e, t), c.compileRe = (e, t, n = !1, r = !1) => {
					if (n === !0) return e.output;
					let i = t || {}, a = i.contains ? "" : "^", o = i.contains ? "" : "$", s = `${a}(?:${e.output})${o}`;
					e && e.negated === !0 && (s = `^(?!${s}).*$`);
					let l = c.toRegex(s, t);
					return r === !0 && (l.state = e), l;
				}, c.makeRe = (e, t = {}, n = !1, r = !1) => {
					if (!e || typeof e != "string") throw TypeError("Expected a non-empty string");
					let a = {
						negated: !1,
						fastpaths: !0
					};
					return t.fastpaths !== !1 && (e[0] === "." || e[0] === "*") && (a.output = i.fastpaths(e, t)), a.output || (a = i(e, t)), c.compileRe(a, t, n, r);
				}, c.toRegex = (e, t) => {
					try {
						let n = t || {};
						return new RegExp(e, n.flags || (n.nocase ? "i" : ""));
					} catch (e) {
						if (t && t.debug === !0) throw e;
						return /$^/;
					}
				}, c.constants = o, e.exports = c;
			},
			716: (e, t, n) => {
				let r = n(96), { CHAR_ASTERISK: i, CHAR_AT: a, CHAR_BACKWARD_SLASH: o, CHAR_COMMA: s, CHAR_DOT: c, CHAR_EXCLAMATION_MARK: l, CHAR_FORWARD_SLASH: u, CHAR_LEFT_CURLY_BRACE: d, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: p, CHAR_PLUS: m, CHAR_QUESTION_MARK: h, CHAR_RIGHT_CURLY_BRACE: g, CHAR_RIGHT_PARENTHESES: _, CHAR_RIGHT_SQUARE_BRACKET: v } = n(154), y = (e) => e === u || e === o, b = (e) => {
					e.isPrefix !== !0 && (e.depth = e.isGlobstar ? Infinity : 1);
				};
				e.exports = (e, t) => {
					let n = t || {}, x = e.length - 1, S = n.parts === !0 || n.scanToEnd === !0, C = [], w = [], T = [], E = e, D = -1, O = 0, k = 0, A = !1, j = !1, M = !1, N = !1, P = !1, F = !1, I = !1, L = !1, R = !1, z = !1, B = 0, V, H, U = {
						value: "",
						depth: 0,
						isGlob: !1
					}, ee = () => D >= x, W = () => E.charCodeAt(D + 1), G = () => (V = H, E.charCodeAt(++D));
					for (; D < x;) {
						H = G();
						let e;
						if (H === o) {
							I = U.backslashes = !0, H = G(), H === d && (F = !0);
							continue;
						}
						if (F === !0 || H === d) {
							for (B++; ee() !== !0 && (H = G());) {
								if (H === o) {
									I = U.backslashes = !0, G();
									continue;
								}
								if (H === d) {
									B++;
									continue;
								}
								if (F !== !0 && H === c && (H = G()) === c) {
									if (A = U.isBrace = !0, M = U.isGlob = !0, z = !0, S === !0) continue;
									break;
								}
								if (F !== !0 && H === s) {
									if (A = U.isBrace = !0, M = U.isGlob = !0, z = !0, S === !0) continue;
									break;
								}
								if (H === g && (B--, B === 0)) {
									F = !1, A = U.isBrace = !0, z = !0;
									break;
								}
							}
							if (S === !0) continue;
							break;
						}
						if (H === u) {
							if (C.push(D), w.push(U), U = {
								value: "",
								depth: 0,
								isGlob: !1
							}, z === !0) continue;
							if (V === c && D === O + 1) {
								O += 2;
								continue;
							}
							k = D + 1;
							continue;
						}
						if (n.noext !== !0 && (H === m || H === a || H === i || H === h || H === l) && W() === f) {
							if (M = U.isGlob = !0, N = U.isExtglob = !0, z = !0, H === l && D === O && (R = !0), S === !0) {
								for (; ee() !== !0 && (H = G());) {
									if (H === o) {
										I = U.backslashes = !0, H = G();
										continue;
									}
									if (H === _) {
										M = U.isGlob = !0, z = !0;
										break;
									}
								}
								continue;
							}
							break;
						}
						if (H === i) {
							if (V === i && (P = U.isGlobstar = !0), M = U.isGlob = !0, z = !0, S === !0) continue;
							break;
						}
						if (H === h) {
							if (M = U.isGlob = !0, z = !0, S === !0) continue;
							break;
						}
						if (H === p) {
							for (; ee() !== !0 && (e = G());) {
								if (e === o) {
									I = U.backslashes = !0, G();
									continue;
								}
								if (e === v) {
									j = U.isBracket = !0, M = U.isGlob = !0, z = !0;
									break;
								}
							}
							if (S === !0) continue;
							break;
						}
						if (n.nonegate !== !0 && H === l && D === O) {
							L = U.negated = !0, O++;
							continue;
						}
						if (n.noparen !== !0 && H === f) {
							if (M = U.isGlob = !0, S === !0) {
								for (; ee() !== !0 && (H = G());) {
									if (H === f) {
										I = U.backslashes = !0, H = G();
										continue;
									}
									if (H === _) {
										z = !0;
										break;
									}
								}
								continue;
							}
							break;
						}
						if (M === !0) {
							if (z = !0, S === !0) continue;
							break;
						}
					}
					n.noext === !0 && (N = !1, M = !1);
					let K = E, te = "", ne = "";
					O > 0 && (te = E.slice(0, O), E = E.slice(O), k -= O), K && M === !0 && k > 0 ? (K = E.slice(0, k), ne = E.slice(k)) : M === !0 ? (K = "", ne = E) : K = E, K && K !== "" && K !== "/" && K !== E && y(K.charCodeAt(K.length - 1)) && (K = K.slice(0, -1)), n.unescape === !0 && (ne &&= r.removeBackslashes(ne), K && I === !0 && (K = r.removeBackslashes(K)));
					let re = {
						prefix: te,
						input: e,
						start: O,
						base: K,
						glob: ne,
						isBrace: A,
						isBracket: j,
						isGlob: M,
						isExtglob: N,
						isGlobstar: P,
						negated: L,
						negatedExtglob: R
					};
					if (n.tokens === !0 && (re.maxDepth = 0, y(H) || w.push(U), re.tokens = w), n.parts === !0 || n.tokens === !0) {
						let t;
						for (let r = 0; r < C.length; r++) {
							let i = t ? t + 1 : O, a = C[r], o = e.slice(i, a);
							n.tokens && (r === 0 && O !== 0 ? (w[r].isPrefix = !0, w[r].value = te) : w[r].value = o, b(w[r]), re.maxDepth += w[r].depth), (r !== 0 || o !== "") && T.push(o), t = a;
						}
						if (t && t + 1 < e.length) {
							let r = e.slice(t + 1);
							T.push(r), n.tokens && (w[w.length - 1].value = r, b(w[w.length - 1]), re.maxDepth += w[w.length - 1].depth);
						}
						re.slashes = C, re.parts = T;
					}
					return re;
				};
			},
			96: (e, t, n) => {
				let { REGEX_BACKSLASH: r, REGEX_REMOVE_BACKSLASH: i, REGEX_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_GLOBAL: o } = n(154);
				t.isObject = (e) => typeof e == "object" && !!e && !Array.isArray(e), t.hasRegexChars = (e) => a.test(e), t.isRegexChar = (e) => e.length === 1 && t.hasRegexChars(e), t.escapeRegex = (e) => e.replace(o, "\\$1"), t.toPosixSlashes = (e) => e.replace(r, "/"), t.removeBackslashes = (e) => e.replace(i, ((e) => e === "\\" ? "" : e)), t.escapeLast = (e, n, r) => {
					let i = e.lastIndexOf(n, r);
					return i === -1 ? e : e[i - 1] === "\\" ? t.escapeLast(e, n, i - 1) : `${e.slice(0, i)}\\${e.slice(i)}`;
				}, t.removePrefix = (e, t = {}) => {
					let n = e;
					return n.startsWith("./") && (n = n.slice(2), t.prefix = "./"), n;
				}, t.wrapOutput = (e, t = {}, n = {}) => {
					let r = `${n.contains ? "" : "^"}(?:${e})${n.contains ? "" : "$"}`;
					return t.negated === !0 && (r = `(?:^(?!${r}).*$)`), r;
				}, t.basename = (e, { windows: t } = {}) => {
					let n = e.split(t ? /[\\/]/ : "/"), r = n[n.length - 1];
					return r === "" ? n[n.length - 2] : r;
				};
			}
		}, n = {};
		function r(t) {
			var i = n[t];
			if (i !== void 0) return i.exports;
			var a = n[t] = { exports: {} }, o = !0;
			try {
				e[t](a, a.exports, r), o = !1;
			} finally {
				o && delete n[t];
			}
			return a.exports;
		}
		r !== void 0 && (r.ab = __dirname + "/"), t.exports = r(170);
	})();
})), yt = /* @__PURE__ */ g(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), 0 && (t.exports = {
		hasLocalMatch: null,
		matchLocalPattern: null
	});
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		hasLocalMatch: function() {
			return a;
		},
		matchLocalPattern: function() {
			return i;
		}
	});
	var r = vt();
	function i(e, t) {
		return !(e.search !== void 0 && e.search !== t.search || !(0, r.makeRe)(e.pathname ?? "**", { dot: !0 }).test(t.pathname));
	}
	function a(e, t) {
		if (!e) return !0;
		let n = new URL(t, "http://n");
		return e.some((e) => i(e, n));
	}
})), bt = /* @__PURE__ */ g(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), 0 && (t.exports = {
		hasRemoteMatch: null,
		matchRemotePattern: null
	});
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		hasRemoteMatch: function() {
			return a;
		},
		matchRemotePattern: function() {
			return i;
		}
	});
	var r = vt();
	function i(e, t) {
		if (e.protocol !== void 0 && e.protocol.replace(/:$/, "") !== t.protocol.replace(/:$/, "") || e.port !== void 0 && e.port !== t.port) return !1;
		if (e.hostname === void 0) throw Object.defineProperty(/* @__PURE__ */ Error(`Pattern should define hostname but found\n${JSON.stringify(e)}`), "__NEXT_ERROR_CODE", {
			value: "E410",
			enumerable: !1,
			configurable: !0
		});
		return !(!(0, r.makeRe)(e.hostname).test(t.hostname) || e.search !== void 0 && e.search !== t.search || !(0, r.makeRe)(e.pathname ?? "**", { dot: !0 }).test(t.pathname));
	}
	function a(e, t, n) {
		return e.some((e) => n.hostname === e) || t.some((e) => i(e, n));
	}
})), xt = /* @__PURE__ */ g(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "default", {
		enumerable: !0,
		get: function() {
			return i;
		}
	});
	var t = _t(), n = it();
	function r({ config: e, src: r, width: i, quality: a }) {
		if (process.env.NODE_ENV !== "production") {
			let e = [];
			if (r || e.push("src"), i || e.push("width"), e.length > 0) throw Object.defineProperty(/* @__PURE__ */ Error(`Next Image Optimization requires ${e.join(", ")} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
				src: r,
				width: i,
				quality: a
			})}`), "__NEXT_ERROR_CODE", {
				value: "E188",
				enumerable: !1,
				configurable: !0
			});
		}
		let o = (0, n.getDeploymentId)();
		if (r.startsWith("/") && !r.startsWith("//")) {
			let e = r.indexOf("?");
			if (e !== -1) {
				let t = new URLSearchParams(r.slice(e + 1)), n = t.get("dpl");
				if (n) {
					o = n, t.delete("dpl");
					let i = t.toString();
					r = r.slice(0, e) + (i ? "?" + i : "");
				}
			}
		}
		if (r.startsWith("/") && r.includes("?") && e.localPatterns?.length === 1 && e.localPatterns[0].pathname === "**" && e.localPatterns[0].search === "") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${r}" is using a query string which is not configured in images.localPatterns.\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
			value: "E871",
			enumerable: !1,
			configurable: !0
		});
		if (process.env.NODE_ENV !== "production") {
			if (r.startsWith("//")) throw Object.defineProperty(/* @__PURE__ */ Error(`Failed to parse src "${r}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
				value: "E360",
				enumerable: !1,
				configurable: !0
			});
			if (r.startsWith("/") && e.localPatterns && process.env.NODE_ENV !== "test" && process.env.NEXT_RUNTIME !== "edge") {
				let { hasLocalMatch: t } = yt();
				if (!t(e.localPatterns, r)) throw Object.defineProperty(/* @__PURE__ */ Error(`Invalid src prop (${r}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
					value: "E426",
					enumerable: !1,
					configurable: !0
				});
			}
			if (!r.startsWith("/") && (e.domains || e.remotePatterns)) {
				let t;
				try {
					t = new URL(r);
				} catch (e) {
					throw console.error(e), Object.defineProperty(/* @__PURE__ */ Error(`Failed to parse src "${r}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
						value: "E63",
						enumerable: !1,
						configurable: !0
					});
				}
				if (process.env.NODE_ENV !== "test" && process.env.NEXT_RUNTIME !== "edge") {
					let { hasRemoteMatch: n } = bt();
					if (!n(e.domains, e.remotePatterns, t)) throw Object.defineProperty(/* @__PURE__ */ Error(`Invalid src prop (${r}) on \`next/image\`, hostname "${t.hostname}" is not configured under images in your \`next.config.js\`\nSee more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
						value: "E231",
						enumerable: !1,
						configurable: !0
					});
				}
			}
		}
		let s = (0, t.findClosestQuality)(a, e);
		return `${e.path}?url=${encodeURIComponent(r)}&w=${i}&q=${s}${r.startsWith("/") && o ? `&dpl=${o}` : ""}`;
	}
	r.__next_img_default = !0;
	var i = r;
})), St = /* @__PURE__ */ g(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "useMergedRef", {
		enumerable: !0,
		get: function() {
			return r;
		}
	});
	var n = y("react");
	function r(e, t) {
		let r = (0, n.useRef)(null), a = (0, n.useRef)(null);
		return (0, n.useCallback)((n) => {
			if (n === null) {
				let e = r.current;
				e && (r.current = null, e());
				let t = a.current;
				t && (a.current = null, t());
			} else e && (r.current = i(e, n)), t && (a.current = i(t, n));
		}, [e, t]);
	}
	function i(e, t) {
		if (typeof e == "function") {
			let n = e(t);
			return typeof n == "function" ? n : () => e(null);
		} else return e.current = t, () => {
			e.current = null;
		};
	}
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), Ct = /* @__PURE__ */ g(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "Image", {
		enumerable: !0,
		get: function() {
			return x;
		}
	});
	var n = nt(), r = ct(), i = dt(), a = /*#__PURE__*/ r._(y("react")), o = /*#__PURE__*/ n._(y("react-dom")), s = /*#__PURE__*/ n._(mt()), c = st(), l = ot(), u = ht(), d = rt(), f = gt(), p = /*#__PURE__*/ n._(xt()), m = St(), h = process.env.__NEXT_IMAGE_OPTS;
	typeof window > "u" && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
	function g(e, t, n, r, i, a, o) {
		let s = e?.src;
		!e || e["data-loaded-src"] === s || (e["data-loaded-src"] = s, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
			if (!(!e.parentElement || !e.isConnected)) {
				if (t !== "empty" && i(!0), n?.current) {
					let t = new Event("load");
					Object.defineProperty(t, "target", {
						writable: !1,
						value: e
					});
					let r = !1, i = !1;
					n.current({
						...t,
						nativeEvent: t,
						currentTarget: e,
						target: e,
						isDefaultPrevented: () => r,
						isPropagationStopped: () => i,
						persist: () => {},
						preventDefault: () => {
							r = !0, t.preventDefault();
						},
						stopPropagation: () => {
							i = !0, t.stopPropagation();
						}
					});
				}
				if (r?.current && r.current(e), process.env.NODE_ENV !== "production") {
					let t = new URL(s, "http://n").searchParams.get("url") || s;
					if (e.getAttribute("data-nimg") === "fill") {
						if (!a && (!o || o === "100vw") && e.getBoundingClientRect().width / window.innerWidth < .6 && (o === "100vw" ? (0, d.warnOnce)(`Image with src "${t}" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`) : (0, d.warnOnce)(`Image with src "${t}" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`)), e.parentElement) {
							let { position: n } = window.getComputedStyle(e.parentElement), r = [
								"absolute",
								"fixed",
								"relative"
							];
							r.includes(n) || (0, d.warnOnce)(`Image with src "${t}" has "fill" and parent element with invalid "position". Provided "${n}" should be one of ${r.map(String).join(",")}.`);
						}
						e.height === 0 && (0, d.warnOnce)(`Image with src "${t}" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.`);
					}
					let n = e.height.toString() !== e.getAttribute("height"), r = e.width.toString() !== e.getAttribute("width");
					(n && !r || !n && r) && (0, d.warnOnce)(`Image with src "${t}" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
				}
			}
		}));
	}
	function _(e) {
		return a.use ? { fetchPriority: e } : { fetchpriority: e };
	}
	var v = /*#__PURE__*/ (0, a.forwardRef)(({ src: e, srcSet: t, sizes: n, height: r, width: o, decoding: s, className: c, style: l, fetchPriority: u, placeholder: d, loading: f, unoptimized: p, fill: h, onLoadRef: v, onLoadingCompleteRef: y, setBlurComplete: b, setShowAltText: x, sizesInput: S, onLoad: C, onError: w, ...T }, E) => {
		let D = (0, a.useCallback)((t) => {
			t && (w && (t.src = t.src), process.env.NODE_ENV !== "production" && (e || console.error("Image is missing required \"src\" property:", t), t.getAttribute("alt") === null && console.error("Image is missing required \"alt\" property. Please add Alternative Text to describe the image for screen readers and search engines.")), t.complete && g(t, d, v, y, b, p, S));
		}, [
			e,
			d,
			v,
			y,
			b,
			w,
			p,
			S
		]), O = (0, m.useMergedRef)(E, D);
		return /*#__PURE__*/ (0, i.jsx)("img", {
			...T,
			..._(u),
			loading: f,
			width: o,
			height: r,
			decoding: s,
			"data-nimg": h ? "fill" : "1",
			className: c,
			style: l,
			sizes: n,
			srcSet: t,
			src: e,
			ref: O,
			onLoad: (e) => {
				let t = e.currentTarget;
				g(t, d, v, y, b, p, S);
			},
			onError: (e) => {
				x(!0), d !== "empty" && b(!0), w && w(e);
			}
		});
	});
	function b({ isAppRouter: e, imgAttributes: t }) {
		let n = {
			as: "image",
			imageSrcSet: t.srcSet,
			imageSizes: t.sizes,
			crossOrigin: t.crossOrigin,
			referrerPolicy: t.referrerPolicy,
			..._(t.fetchPriority)
		};
		return e && o.default.preload ? (o.default.preload(t.src, n), null) : /*#__PURE__*/ (0, i.jsx)(s.default, { children: /*#__PURE__*/ (0, i.jsx)("link", {
			rel: "preload",
			href: t.srcSet ? void 0 : t.src,
			...n
		}, "__nimg-" + t.src + t.srcSet + t.sizes) });
	}
	var x = /*#__PURE__*/ (0, a.forwardRef)((e, t) => {
		let n = !(0, a.useContext)(f.RouterContext), r = (0, a.useContext)(u.ImageConfigContext), o = (0, a.useMemo)(() => {
			let e = h || r || l.imageConfigDefault, t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t), n = e.deviceSizes.sort((e, t) => e - t), i = e.qualities?.sort((e, t) => e - t);
			return {
				...e,
				allSizes: t,
				deviceSizes: n,
				qualities: i,
				localPatterns: typeof window > "u" ? r?.localPatterns : e.localPatterns
			};
		}, [r]), { onLoad: s, onLoadingComplete: d } = e, m = (0, a.useRef)(s);
		(0, a.useEffect)(() => {
			m.current = s;
		}, [s]);
		let g = (0, a.useRef)(d);
		(0, a.useEffect)(() => {
			g.current = d;
		}, [d]);
		let [_, y] = (0, a.useState)(!1), [x, S] = (0, a.useState)(!1), { props: C, meta: w } = (0, c.getImgProps)(e, {
			defaultLoader: p.default,
			imgConf: o,
			blurComplete: _,
			showAltText: x
		});
		return /*#__PURE__*/ (0, i.jsxs)(i.Fragment, { children: [/*#__PURE__*/ (0, i.jsx)(v, {
			...C,
			unoptimized: w.unoptimized,
			placeholder: w.placeholder,
			fill: w.fill,
			onLoadRef: m,
			onLoadingCompleteRef: g,
			setBlurComplete: y,
			setShowAltText: S,
			sizesInput: e.sizes,
			ref: t
		}), w.preload ? /*#__PURE__*/ (0, i.jsx)(b, {
			isAppRouter: n,
			imgAttributes: C
		}) : null] });
	});
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), wt = /* @__PURE__ */ g(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), 0 && (t.exports = {
		default: null,
		getImageProps: null
	});
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		default: function() {
			return c;
		},
		getImageProps: function() {
			return s;
		}
	});
	var r = nt(), i = st(), a = Ct(), o = /*#__PURE__*/ r._(xt());
	function s(e) {
		let { props: t } = (0, i.getImgProps)(e, {
			defaultLoader: o.default,
			imgConf: process.env.__NEXT_IMAGE_OPTS
		});
		for (let [e, n] of Object.entries(t)) n === void 0 && delete t[e];
		return { props: t };
	}
	var c = a.Image;
})), Tt = /* @__PURE__ */ v((/* @__PURE__ */ g(((e, t) => {
	t.exports = wt();
})))(), 1), Et = {
	sm: {
		avatar: "size-7",
		indicator: "size-2"
	},
	md: {
		avatar: "size-8",
		indicator: "size-2"
	},
	lg: {
		avatar: "size-9",
		indicator: "size-3"
	},
	xl: {
		avatar: "size-10",
		indicator: "size-3"
	}
}, Dt = {
	online: {
		label: "Online",
		className: "bg-success"
	},
	away: {
		label: "Away",
		className: "bg-warning"
	},
	busy: {
		label: "Busy",
		className: "bg-destructive"
	},
	offline: {
		label: "Offline",
		className: "bg-offline"
	}
}, Q = dt(), Ot = tt("block overflow-hidden rounded-full bg-muted", {
	variants: { size: {
		sm: Et.sm.avatar,
		md: Et.md.avatar,
		lg: Et.lg.avatar,
		xl: Et.xl.avatar
	} },
	defaultVariants: { size: "md" }
}), kt = r(({ size: e = "md", status: t, src: n, alt: r = "Avatar", fallback: i, className: a, children: o, ...s }, c) => {
	let l = e ?? "md";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		ref: c,
		className: "relative inline-block size-fit",
		...s,
		children: [/* @__PURE__ */ (0, Q.jsx)("div", {
			className: Qe("relative", Ot({ size: e }), a),
			children: n ? /* @__PURE__ */ (0, Q.jsx)(Tt.default, {
				src: n,
				alt: r,
				fill: !0,
				sizes: "100%",
				className: "object-cover"
			}) : i ?? /* @__PURE__ */ (0, Q.jsx)(Tt.default, {
				src: "https://avatars.githubusercontent.com/u/96566968?s=400&u=10a4cfb65e5de63911ba0362bda8096f1bbfeb63&v=4",
				alt: "Avatar placeholder",
				fill: !0,
				sizes: "100%",
				className: "object-cover"
			})
		}), t && /* @__PURE__ */ (0, Q.jsx)("span", {
			"aria-label": Dt[t].label,
			className: Qe("absolute bottom-0 right-0", "rounded-full", "border-2 border-background", Dt[t].className, Et[l].indicator)
		})]
	});
});
kt.displayName = "Avatar";
//#endregion
//#region src/components/atoms/button/button.constants.ts
var At = {
	sm: {
		height: "h-11 md:h-10",
		padding: "px-4 md:px-4 lg:px-5",
		text: "text-sm",
		icon: "size-4"
	},
	lg: {
		height: "h-12 md:h-11",
		padding: "px-5 md:px-5 lg:px-6",
		text: "text-sm md:text-base",
		icon: "size-5"
	}
}, jt = tt([
	"animate-spin",
	"rounded-full",
	"border-2",
	"border-current",
	"border-t-transparent"
], {
	variants: {
		size: {
			sm: "h-4 w-4",
			md: "h-6 w-6",
			lg: "h-10 w-10"
		},
		variant: {
			default: "text-primary",
			muted: "text-muted-foreground",
			inverse: "text-primary-foreground"
		}
	},
	defaultVariants: {
		size: "md",
		variant: "default"
	}
}), Mt = ({ className: e, size: t = "md", variant: n = "default", ariaLabel: r = "Loading", ...i }) => /* @__PURE__ */ (0, Q.jsx)("div", {
	role: "status",
	"aria-label": r,
	className: Qe(jt({
		size: t,
		variant: n
	}), e),
	...i
}), Nt = tt([
	"inline-flex",
	"items-center",
	"justify-center",
	"gap-2",
	"font-medium",
	"tracking-normal",
	"rounded-md",
	"transition-all",
	"shrink-0",
	"cursor-pointer",
	"focus-visible:outline",
	"focus-visible:outline-2",
	"focus-visible:outline-primary",
	"focus-visible:outline-offset-2",
	"disabled:pointer-events-none",
	"disabled:opacity-50",
	"not-disabled:hover:brightness-95",
	"not-disabled:active:scale-95"
], {
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground shadow-md",
			secondary: "bg-secondary text-secondary-foreground shadow-md",
			text: "bg-transparent text-foreground hover:bg-muted",
			link: "bg-transparent p-0 h-auto text-primary underline"
		},
		size: {
			sm: `
					${At.sm.height}
					${At.sm.padding}
					${At.sm.text}
					[&_svg]:${At.sm.icon}
				`,
			lg: `
					${At.lg.height}
					${At.lg.padding}
					${At.lg.text}
					[&_svg]:${At.lg.icon}
				`
		},
		width: {
			auto: "w-auto",
			full: "w-full"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "lg",
		width: "auto"
	}
});
function Pt({ variant: e, size: t, width: n, loading: r = !1, icon: i, iconPosition: a = "left", children: o, className: s, disabled: c, ...l }) {
	return /* @__PURE__ */ (0, Q.jsxs)("button", {
		className: Qe(Nt({
			variant: e,
			size: t,
			width: n
		}), s),
		disabled: c || r,
		"aria-busy": r,
		...l,
		children: [r && /* @__PURE__ */ (0, Q.jsx)(Mt, {
			size: "sm",
			variant: e === "primary" ? "inverse" : "default"
		}), /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			i && a === "left" && i,
			o,
			i && a === "right" && i
		] })]
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var Ft = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), It = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Lt = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), Rt = (e) => {
	let t = Lt(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, zt = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, Bt = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, Vt = t({}), Ht = () => i(Vt), Ut = r(({ color: e, size: t, strokeWidth: r, absoluteStrokeWidth: i, className: a = "", children: o, iconNode: s, ...c }, l) => {
	let { size: u = 24, strokeWidth: d = 2, absoluteStrokeWidth: f = !1, color: p = "currentColor", className: m = "" } = Ht() ?? {}, h = i ?? f ? Number(r ?? d) * 24 / Number(t ?? u) : r ?? d;
	return n("svg", {
		ref: l,
		...zt,
		width: t ?? u ?? zt.width,
		height: t ?? u ?? zt.height,
		stroke: e ?? p,
		strokeWidth: h,
		className: Ft("lucide", m, a),
		...!o && !Bt(c) && { "aria-hidden": "true" },
		...c
	}, [...s.map(([e, t]) => n(e, t)), ...Array.isArray(o) ? o : [o]]);
}), Wt = (e, t) => {
	let i = r(({ className: r, ...i }, a) => n(Ut, {
		ref: a,
		iconNode: t,
		className: Ft(`lucide-${It(Rt(e))}`, `lucide-${e}`, r),
		...i
	}));
	return i.displayName = Rt(e), i;
}, Gt = Wt("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), Kt = Wt("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), qt = Wt("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), Jt = Wt("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]), Yt = Wt("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), Xt = Wt("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), Zt = {
	box: "size-5",
	icon: "size-4",
	text: "text-sm",
	description: "text-sm",
	gap: "gap-3",
	hitArea: "min-h-11 min-w-11"
}, Qt = tt([
	"peer",
	"appearance-none",
	"rounded-sm",
	"border",
	"transition-colors",
	"cursor-pointer",
	"focus-visible:outline",
	"focus-visible:outline-2",
	"focus-visible:outline-primary",
	"focus-visible:outline-offset-2",
	"checked:bg-primary",
	"checked:border-primary",
	"disabled:bg-muted",
	"disabled:border-muted-foreground/30",
	"disabled:cursor-not-allowed"
], {
	variants: { variant: {
		default: "border-input",
		error: "border-destructive"
	} },
	defaultVariants: { variant: "default" }
});
function $t({ label: e, description: t, required: n, errorMessage: r, indeterminate: i = !1, variant: o, className: c, disabled: l, ...u }) {
	let d = s(null);
	return a(() => {
		d.current && (d.current.indeterminate = i);
	}, [i]), /* @__PURE__ */ (0, Q.jsxs)("label", {
		"aria-disabled": l,
		className: Qe("flex", t ? "items-start" : "items-center", "select-none", "cursor-pointer", Zt.gap, l && "cursor-not-allowed"),
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: Qe("relative", "flex", "items-center", "justify-center", Zt.hitArea),
			children: [
				/* @__PURE__ */ (0, Q.jsx)("input", {
					ref: d,
					type: "checkbox",
					className: Qe(Qt({ variant: o }), Zt.box, c),
					disabled: l,
					...u
				}),
				/* @__PURE__ */ (0, Q.jsx)(Gt, { className: Qe("absolute", "hidden", "pointer-events-none", "text-primary-foreground", Zt.icon, "peer-checked:block") }),
				/* @__PURE__ */ (0, Q.jsx)(Xt, { className: Qe("absolute", "hidden", "pointer-events-none", "text-primary-foreground", Zt.icon, "peer-indeterminate:block") })
			]
		}), /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex flex-col",
			children: [
				e && /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: Qe("font-medium", "text-foreground", Zt.text),
					children: [e, n && /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "ml-1 text-destructive",
						children: "*"
					})]
				}),
				t && /* @__PURE__ */ (0, Q.jsx)("span", {
					className: Qe("text-muted-foreground", Zt.description),
					children: t
				}),
				r && /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-sm text-destructive",
					children: r
				})
			]
		})]
	});
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
var en = Object.defineProperty, tn = (e, t) => en(e, "name", {
	value: t,
	configurable: !0
});
function nn(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
tn(nn, "clamp");
//#endregion
//#region node_modules/@radix-ui/primitive/dist/index.mjs
var rn = Object.defineProperty, an = (e, t) => rn(e, "name", {
	value: t,
	configurable: !0
}), on = !!(typeof window < "u" && window.document && window.document.createElement);
function sn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ an(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
an(sn, "composeEventHandlers");
function cn(e) {
	if (!on) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
an(cn, "getOwnerWindow");
function ln(e) {
	if (!on) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
an(ln, "getOwnerDocument");
function un(e, t = !1) {
	let { activeElement: n } = ln(e);
	if (!n?.nodeName) return null;
	if (dn(n) && n.contentDocument) return un(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = ln(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
an(un, "getActiveElement");
function dn(e) {
	return e.tagName === "IFRAME";
}
an(dn, "isFrame");
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
var fn = Object.defineProperty, pn = (e, t) => fn(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function mn(t, n) {
	let r = e.createContext(n);
	r.displayName = t + "Context";
	let i = /* @__PURE__ */ pn((t) => {
		let { children: n, ...i } = t, a = e.useMemo(() => i, Object.values(i));
		return /* @__PURE__ */ (0, Q.jsx)(r.Provider, {
			value: a,
			children: n
		});
	}, "Provider");
	i.displayName = t + "Provider";
	function a(i, a = {}) {
		let { optional: o = !1 } = a, s = e.useContext(r);
		if (s) return s;
		if (n !== void 0) return n;
		if (!o) throw Error(`\`${i}\` must be used within \`${t}\``);
	}
	return pn(a, "useContext"), [i, a];
}
pn(mn, "createContext");
// @__NO_SIDE_EFFECTS__
function hn(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i);
		a.displayName = n + "Context";
		let o = r.length;
		r = [...r, i];
		let s = /* @__PURE__ */ pn((n) => {
			let { scope: r, children: i, ...s } = n, c = r?.[t]?.[o] || a, l = e.useMemo(() => s, Object.values(s));
			return /* @__PURE__ */ (0, Q.jsx)(c.Provider, {
				value: l,
				children: i
			});
		}, "Provider");
		s.displayName = n + "Provider";
		function c(r, s, c = {}) {
			let { optional: l = !1 } = c, u = s?.[t]?.[o] || a, d = e.useContext(u);
			if (d) return d;
			if (i !== void 0) return i;
			if (!l) throw Error(`\`${r}\` must be used within \`${n}\``);
		}
		return pn(c, "useContext"), [s, c];
	}
	pn(i, "createContext");
	let a = /* @__PURE__ */ pn(() => {
		let n = r.map((t) => e.createContext(t));
		return /* @__PURE__ */ pn(function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		}, "useScope");
	}, "createScope");
	return a.scopeName = t, [i, gn(a, ...n)];
}
pn(hn, "createContextScope");
function gn(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = /* @__PURE__ */ pn(() => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ pn(function(t) {
			let i = r.reduce((e, { useScope: n, scopeName: r }) => {
				let i = n(t)[`__scope${r}`];
				return {
					...e,
					...i
				};
			}, {});
			return e.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		}, "useComposedScopes");
	}, "createScope");
	return r.scopeName = n.scopeName, r;
}
pn(gn, "composeContextScopes");
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var _n = Object.defineProperty, vn = (e, t) => _n(e, "name", {
	value: t,
	configurable: !0
});
function yn(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
vn(yn, "setRef");
function bn(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = yn(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : yn(e[t], null);
			}
		};
	};
}
vn(bn, "composeRefs");
function xn(...t) {
	return e.useCallback(bn(...t), t);
}
vn(xn, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
var Sn = Object.defineProperty, Cn = (e, t) => Sn(e, "name", {
	value: t,
	configurable: !0
}), wn = /* @__PURE__ */ Cn(((e, t) => {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		if (/^on[A-Z]/.test(r)) if (i && a) {
			let e = typeof i == "function", t = typeof a == "function";
			n[r] = (...n) => {
				let r = t ? a(...n) : void 0;
				return e && i(...n), r;
			};
		} else i && (n[r] = i);
		else r === "style" ? n[r] = {
			...typeof i == "object" ? i : null,
			...typeof a == "object" ? a : null
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = Tn(a, i));
	}
	return {
		...e,
		...n
	};
}), "mergeProps");
function Tn(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
Cn(Tn, "concatAriaDescribedby");
var En = e.createContext(wn);
En.displayName = "SlotContext";
// @__NO_SIDE_EFFECTS__
function Dn(t) {
	let n = e.forwardRef((n, r) => {
		let i = e.useContext(En), { children: a, mergeProps: o = i, ...s } = n, c = null, l = !1, u = [];
		Pn(a) && typeof Rn == "function" && (a = Rn(a._payload)), e.Children.forEach(a, (e) => {
			if (Mn(e)) {
				l = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				Pn(n) && typeof Rn == "function" && (n = Rn(n._payload)), c = An(t, n), u.push(c?.props?.children);
			} else u.push(e);
		}), c ? c = e.cloneElement(c, void 0, u) : !l && e.Children.count(a) === 1 && e.isValidElement(a) && (c = a);
		let d = c ? jn(c) : void 0, f = xn(r, d);
		if (!c) {
			if (a || a === 0) throw Error(l ? Ln(t) : In(t));
			return a;
		}
		let p = o(s, c.props ?? {});
		return c.type !== e.Fragment && (p.ref = r ? f : d), e.cloneElement(c, p);
	});
	return n.displayName = `${t}.Slot`, n;
}
Cn(Dn, "createSlot");
var On = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function kn(e) {
	let t = /* @__PURE__ */ Cn((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = On, t;
}
Cn(kn, "createSlottable");
var An = /* @__PURE__ */ Cn((t, n) => {
	if ("child" in t.props) {
		let n = t.props.child;
		return e.isValidElement(n) ? e.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
	}
	return e.isValidElement(n) ? n : null;
}, "getSlottableElementFromSlottable");
function jn(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Cn(jn, "getElementRef");
function Mn(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === On;
}
Cn(Mn, "isSlottable");
var Nn = Symbol.for("react.lazy");
function Pn(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === Nn && "_payload" in e && Fn(e._payload);
}
Cn(Pn, "isLazyComponent");
function Fn(e) {
	return typeof e == "object" && !!e && "then" in e;
}
Cn(Fn, "isPromiseLike");
var In = /* @__PURE__ */ Cn((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Ln = /* @__PURE__ */ Cn((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Rn = e.use, zn = Object.defineProperty, Bn = (e, t) => zn(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Vn(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ hn(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = /* @__PURE__ */ Bn((t) => {
		let { scope: n, children: r } = t, i = e.useRef(null), o = e.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, Q.jsx)(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	}, "CollectionProvider");
	s.displayName = n;
	let c = t + "CollectionSlot", l = /* @__PURE__ */ Dn(c), u = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = xn(t, o(c, n).collectionRef);
		return /* @__PURE__ */ (0, Q.jsx)(l, {
			ref: i,
			children: r
		});
	});
	u.displayName = c;
	let d = t + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ Dn(d), m = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), c = xn(n, s), l = o(d, r);
		return e.useEffect(() => (l.itemMap.set(s, {
			ref: s,
			...a
		}), () => void l.itemMap.delete(s))), /* @__PURE__ */ (0, Q.jsx)(p, {
			[f]: "",
			ref: c,
			children: i
		});
	});
	m.displayName = d;
	function h(n) {
		let r = o(t + "CollectionConsumer", n);
		return e.useCallback(() => {
			let e = r.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${f}]`));
			return Array.from(r.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [r.collectionRef, r.itemMap]);
	}
	return Bn(h, "useCollection"), [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
Bn(Vn, "createCollection");
var Hn = /* @__PURE__ */ new WeakMap(), Un = class e extends Map {
	static {
		Bn(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], Hn.set(this, !0);
	}
	set(e, t) {
		return Hn.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = Kn(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
		if (s === this.size || r && s === this.size - 1 || s === -1) return this.set(t, n), this;
		let c = this.size + +!r;
		a < 0 && o++;
		let l = [...this.#e], u, d = !1;
		for (let e = o; e < c; e++) if (o === e) {
			let i = l[e];
			l[e] === t && (i = l[e + 1]), r && this.delete(t), u = this.get(i), this.set(t, n);
		} else {
			!d && l[e - 1] === t && (d = !0);
			let n = l[d ? e : e - 1], r = u;
			u = this.get(n), this.delete(n), this.set(n, r);
		}
		return this;
	}
	with(t, n, r) {
		let i = new e(this);
		return i.insert(t, n, r), i;
	}
	before(e) {
		let t = this.#e.indexOf(e) - 1;
		if (!(t < 0)) return this.entryAt(t);
	}
	setBefore(e, t, n) {
		let r = this.#e.indexOf(e);
		return r === -1 ? this : this.insert(r, t, n);
	}
	after(e) {
		let t = this.#e.indexOf(e);
		if (t = t === -1 || t === this.size - 1 ? -1 : t + 1, t !== -1) return this.entryAt(t);
	}
	setAfter(e, t, n) {
		let r = this.#e.indexOf(e);
		return r === -1 ? this : this.insert(r + 1, t, n);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		return this.#e = [], super.clear();
	}
	delete(e) {
		let t = super.delete(e);
		return t && this.#e.splice(this.#e.indexOf(e), 1), t;
	}
	deleteAt(e) {
		let t = this.keyAt(e);
		return t !== void 0 && this.delete(t);
	}
	at(e) {
		let t = Wn(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = Wn(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return Wn(this.#e, e);
	}
	from(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r);
	}
	keyFrom(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r);
	}
	find(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return r;
			n++;
		}
	}
	findIndex(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return n;
			n++;
		}
		return -1;
	}
	filter(t, n) {
		let r = [], i = 0;
		for (let e of this) Reflect.apply(t, n, [
			e,
			i,
			this
		]) && r.push(e), i++;
		return new e(r);
	}
	map(t, n) {
		let r = [], i = 0;
		for (let e of this) r.push([e[0], Reflect.apply(t, n, [
			e,
			i,
			this
		])]), i++;
		return new e(r);
	}
	reduce(...e) {
		let [t, n] = e, r = 0, i = n ?? this.at(0);
		for (let n of this) i = r === 0 && e.length === 1 ? n : Reflect.apply(t, this, [
			i,
			n,
			r,
			this
		]), r++;
		return i;
	}
	reduceRight(...e) {
		let [t, n] = e, r = n ?? this.at(-1);
		for (let n = this.size - 1; n >= 0; n--) {
			let i = this.at(n);
			r = n === this.size - 1 && e.length === 1 ? i : Reflect.apply(t, this, [
				r,
				i,
				n,
				this
			]);
		}
		return r;
	}
	toSorted(t) {
		let n = [...this.entries()].sort(t);
		return new e(n);
	}
	toReversed() {
		let t = new e();
		for (let e = this.size - 1; e >= 0; e--) {
			let n = this.keyAt(e), r = this.get(n);
			t.set(n, r);
		}
		return t;
	}
	toSpliced(...t) {
		let n = [...this.entries()];
		return n.splice(...t), new e(n);
	}
	slice(t, n) {
		let r = new e(), i = this.size - 1;
		if (t === void 0) return r;
		t < 0 && (t += this.size), n !== void 0 && n > 0 && (i = n - 1);
		for (let e = t; e <= i; e++) {
			let t = this.keyAt(e), n = this.get(t);
			r.set(t, n);
		}
		return r;
	}
	every(e, t) {
		let n = 0;
		for (let r of this) {
			if (!Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !1;
			n++;
		}
		return !0;
	}
	some(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !0;
			n++;
		}
		return !1;
	}
};
function Wn(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = Gn(e, t);
	return n === -1 ? void 0 : e[n];
}
Bn(Wn, "at");
function Gn(e, t) {
	let n = e.length, r = Kn(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
Bn(Gn, "toSafeIndex");
function Kn(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
Bn(Kn, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function qn(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ hn(n), [a, o] = r(n, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new Un(),
		setItemMap: /* @__PURE__ */ Bn(() => void 0, "setItemMap")
	}), s = /* @__PURE__ */ Bn(({ state: e, ...t }) => e ? /* @__PURE__ */ (0, Q.jsx)(l, {
		...t,
		state: e
	}) : /* @__PURE__ */ (0, Q.jsx)(c, { ...t }), "CollectionProvider");
	s.displayName = n;
	let c = /* @__PURE__ */ Bn((e) => {
		let t = g();
		return /* @__PURE__ */ (0, Q.jsx)(l, {
			...e,
			state: t
		});
	}, "CollectionInit");
	c.displayName = n + "Init";
	let l = /* @__PURE__ */ Bn((t) => {
		let { scope: n, children: r, state: i } = t, o = e.useRef(null), [s, c] = e.useState(null), l = xn(o, c), [u, d] = i;
		return e.useEffect(() => {
			if (!s) return;
			let e = Zn(() => {});
			return e.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [s]), /* @__PURE__ */ (0, Q.jsx)(a, {
			scope: n,
			itemMap: u,
			setItemMap: d,
			collectionRef: l,
			collectionRefObject: o,
			collectionElement: s,
			children: r
		});
	}, "CollectionProviderImpl");
	l.displayName = n + "Impl";
	let u = t + "CollectionSlot", d = /* @__PURE__ */ Dn(u), f = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = xn(t, o(u, n).collectionRef);
		return /* @__PURE__ */ (0, Q.jsx)(d, {
			ref: i,
			children: r
		});
	});
	f.displayName = u;
	let p = t + "CollectionItemSlot", m = /* @__PURE__ */ Dn(p), h = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), [c, l] = e.useState(null), u = xn(n, s, l), { setItemMap: d } = o(p, r), f = e.useRef(a);
		Jn(f.current, a) || (f.current = a);
		let h = f.current;
		return e.useEffect(() => {
			let e = h;
			return d((t) => c ? t.has(c) ? t.set(c, {
				...e,
				element: c
			}).toSorted(Xn) : (t.set(c, {
				...e,
				element: c
			}), t.toSorted(Xn)) : t), () => {
				d((e) => !c || !e.has(c) ? e : (e.delete(c), new Un(e)));
			};
		}, [
			c,
			h,
			d
		]), /* @__PURE__ */ (0, Q.jsx)(m, {
			"data-radix-collection-item": "",
			ref: u,
			children: i
		});
	});
	h.displayName = p;
	function g() {
		return e.useState(new Un());
	}
	Bn(g, "useInitCollection");
	function _(e) {
		let { itemMap: n } = o(t + "CollectionConsumer", e);
		return n;
	}
	return Bn(_, "useCollection"), [{
		Provider: s,
		Slot: f,
		ItemSlot: h
	}, {
		createCollectionScope: i,
		useCollection: _,
		useInitCollection: g
	}];
}
Bn(qn, "createCollection");
function Jn(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
Bn(Jn, "shallowEqual");
function Yn(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
Bn(Yn, "isElementPreceding");
function Xn(e, t) {
	return !e[1].element || !t[1].element ? 0 : Yn(e[1].element, t[1].element) ? -1 : 1;
}
Bn(Xn, "sortByDocumentPosition");
function Zn(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
Bn(Zn, "getChildListObserver");
//#endregion
//#region node_modules/@radix-ui/react-direction/dist/index.mjs
var Qn = Object.defineProperty, $n = (e, t) => Qn(e, "name", {
	value: t,
	configurable: !0
}), er = e.createContext(void 0);
function tr(t) {
	let n = e.useContext(er);
	return t || n || "ltr";
}
$n(tr, "useDirection");
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var nr = Object.defineProperty, rr = (e, t) => nr(e, "name", {
	value: t,
	configurable: !0
}), ir = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((t, n) => {
	let r = /* @__PURE__ */ Dn(`Primitive.${n}`), i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, Q.jsx)(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {});
function ar(e, t) {
	e && l.flushSync(() => e.dispatchEvent(t));
}
rr(ar, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var or = Object.defineProperty, sr = (e, t) => or(e, "name", {
	value: t,
	configurable: !0
});
function cr(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
sr(cr, "useCallbackRef");
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var lr = Object.defineProperty, ur = (e, t) => lr(e, "name", {
	value: t,
	configurable: !0
}), dr = "dismissableLayer.update", fr = "dismissableLayer.pointerDownOutside", pr = "dismissableLayer.focusOutside", mr, hr = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), gr = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ur(function(t, n) {
	let { disableOutsidePointerEvents: r = !1, deferPointerDownOutside: i = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...u } = t, d = e.useContext(hr), [f, p] = e.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = e.useState({}), g = xn(n, p), _ = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = v ? _.indexOf(v) : -1, b = f ? _.indexOf(f) : -1, x = d.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= y, C = e.useRef(!1), w = yr((e) => {
		o?.(e), c?.(e), e.defaultPrevented || l?.();
	}, {
		ownerDocument: m,
		deferPointerDownOutside: i,
		isDeferredPointerDownOutsideRef: C,
		dismissableSurfaces: d.dismissableSurfaces,
		shouldHandlePointerDownOutside: e.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...d.branches].some((t) => t.contains(e));
			return S && !t;
		}, [d.branches, S])
	}), T = br((e) => {
		if (i && C.current) return;
		let t = e.target;
		[...d.branches].some((e) => e.contains(t)) || (s?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m), E = f ? b === _.length - 1 : !1, D = cr((e) => {
		e.key === "Escape" && (a?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
	});
	return e.useEffect(() => {
		if (E) return m.addEventListener("keydown", D, { capture: !0 }), () => m.removeEventListener("keydown", D, { capture: !0 });
	}, [
		m,
		E,
		D
	]), e.useEffect(() => {
		if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (mr = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), xr(), () => {
			r && (d.layersWithOutsidePointerEventsDisabled.delete(f), d.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = mr));
		};
	}, [
		f,
		m,
		r,
		d
	]), e.useEffect(() => () => {
		f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), xr());
	}, [f, d]), e.useEffect(() => {
		let e = /* @__PURE__ */ ur(() => h({}), "handleUpdate");
		return document.addEventListener(dr, e), () => document.removeEventListener(dr, e);
	}, []), /* @__PURE__ */ (0, Q.jsx)(ir.div, {
		...u,
		ref: g,
		style: {
			pointerEvents: x ? S ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: sn(t.onFocusCapture, T.onFocusCapture),
		onBlurCapture: sn(t.onBlurCapture, T.onBlurCapture),
		onPointerDownCapture: sn(t.onPointerDownCapture, w.onPointerDownCapture)
	});
}, "DismissableLayer"));
function _r() {
	let t = e.useContext(hr), [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (n) return t.dismissableSurfaces.add(n), () => {
			t.dismissableSurfaces.delete(n);
		};
	}, [n, t.dismissableSurfaces]), r;
}
ur(_r, "useDismissableLayerSurface");
var vr = /* @__PURE__ */ ur(() => !0, "IS_TRUE");
function yr(t, n) {
	let { ownerDocument: r = globalThis?.document, deferPointerDownOutside: i = !1, isDeferredPointerDownOutsideRef: a, dismissableSurfaces: o, shouldHandlePointerDownOutside: s = vr } = n, c = cr(t), l = e.useRef(!1), u = e.useRef(!1), d = e.useRef(/* @__PURE__ */ new Map()), f = e.useRef(() => {});
	return e.useEffect(() => {
		function e() {
			u.current = !1, a.current = !1, d.current.clear();
		}
		ur(e, "resetOutsideInteraction");
		function t() {
			return Array.from(d.current.values()).some(Boolean);
		}
		ur(t, "isOutsideInteractionIntercepted");
		function n(e) {
			if (!u.current) return;
			let t = e.target;
			t instanceof Node && [...o].some((e) => e.contains(t)) || d.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				u.current && f.current();
			}, 0);
		}
		ur(n, "handleInteractionCapture");
		function p(e) {
			u.current && d.current.set(e.type, !1);
		}
		ur(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ ur((n) => {
			if (n.target && !l.current) {
				let o = function() {
					r.removeEventListener("click", f.current);
					let n = t();
					e(), n || Sr(fr, c, p, { discrete: !0 });
				};
				if (ur(o, "handleAndDispatchPointerDownOutsideEvent"), !s(n.target)) {
					r.removeEventListener("click", f.current), e(), l.current = !1;
					return;
				}
				let p = { originalEvent: n };
				u.current = !0, a.current = i && n.button === 0, d.current.clear(), !i || n.button !== 0 ? o() : (r.removeEventListener("click", f.current), f.current = o, r.addEventListener("click", f.current, { once: !0 }));
			} else r.removeEventListener("click", f.current), e();
			l.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) r.addEventListener(e, n, !0), r.addEventListener(e, p);
		let g = window.setTimeout(() => {
			r.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), r.removeEventListener("pointerdown", m), r.removeEventListener("click", f.current);
			for (let e of h) r.removeEventListener(e, n, !0), r.removeEventListener(e, p);
		};
	}, [
		r,
		c,
		i,
		a,
		o,
		s
	]), { onPointerDownCapture: /* @__PURE__ */ ur(() => l.current = !0, "onPointerDownCapture") };
}
ur(yr, "usePointerDownOutside");
function br(t, n = globalThis?.document) {
	let r = cr(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ ur((e) => {
			e.target && !i.current && Sr(pr, r, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: /* @__PURE__ */ ur(() => i.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ ur(() => i.current = !1, "onBlurCapture")
	};
}
ur(br, "useFocusOutside");
function xr() {
	let e = new CustomEvent(dr);
	document.dispatchEvent(e);
}
ur(xr, "dispatchUpdate");
function Sr(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? ar(i, a) : i.dispatchEvent(a);
}
ur(Sr, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Cr = Object.defineProperty, wr = (e, t) => Cr(e, "name", {
	value: t,
	configurable: !0
}), Tr = 0, Er = null;
function Dr(e) {
	return Or(), e.children;
}
wr(Dr, "FocusGuards");
function Or() {
	e.useEffect(() => {
		Er ||= {
			start: kr(),
			end: kr()
		};
		let { start: e, end: t } = Er;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Tr++, () => {
			Tr === 1 && (Er?.start.remove(), Er?.end.remove(), Er = null), Tr = Math.max(0, Tr - 1);
		};
	}, []);
}
wr(Or, "useFocusGuards");
function kr() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
wr(kr, "createFocusGuard");
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Ar = Object.defineProperty, jr = (e, t) => Ar(e, "name", {
	value: t,
	configurable: !0
}), Mr = "focusScope.autoFocusOnMount", Nr = "focusScope.autoFocusOnUnmount", Pr = {
	bubbles: !1,
	cancelable: !0
}, Fr = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ jr(function(t, n) {
	let { loop: r = !1, trapped: i = !1, branches: a, onMountAutoFocus: o, onUnmountAutoFocus: s, ...c } = t, [l, u] = e.useState(null), d = cr(o), f = cr(s), p = e.useRef(null), m = xn(n, u), h = e.useRef(a);
	e.useEffect(() => {
		h.current = a;
	});
	let g = e.useCallback((e) => e ? l?.contains(e) ? !0 : !!h.current?.some((t) => t.contains(e)) : !1, [l]), _ = e.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	e.useEffect(() => {
		if (i) {
			let e = function(e) {
				if (_.paused || !l) return;
				let t = e.target;
				g(t) ? p.current = t : Gr(p.current, { select: !0 });
			}, t = function(e) {
				if (_.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (g(t) || Gr(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Gr(l);
			};
			jr(e, "handleFocusIn"), jr(t, "handleFocusOut"), jr(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return l && r.observe(l, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		i,
		l,
		_.paused,
		g
	]), e.useEffect(() => {
		if (l) {
			Kr.add(_);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(Mr, Pr);
				l.addEventListener(Mr, d), l.dispatchEvent(t), t.defaultPrevented || (zr(Yr(Vr(l)), { select: !0 }), document.activeElement === e && Gr(l));
			}
			return () => {
				l.removeEventListener(Mr, d), setTimeout(() => {
					let t = new CustomEvent(Nr, Pr);
					l.addEventListener(Nr, f), l.dispatchEvent(t), t.defaultPrevented || Gr(e ?? document.body, { select: !0 }), l.removeEventListener(Nr, f), Kr.remove(_);
				}, 0);
			};
		}
	}, [
		l,
		d,
		f,
		_
	]);
	let v = e.useCallback((e) => {
		if (!r && !i || _.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = Br(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && Gr(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && Gr(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		_.paused
	]);
	return /* @__PURE__ */ (0, Q.jsx)(ir.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: v
	});
}, "FocusScope")), Ir = e.createContext(null);
Ir.Provider;
function Lr() {
	let [t, n] = e.useState([]);
	return {
		nodes: t,
		registry: e.useMemo(() => ({
			add: /* @__PURE__ */ jr((e) => n((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ jr((e) => n((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
jr(Lr, "useFocusScopeBranchRegistry");
function Rr(t) {
	let n = e.useContext(Ir);
	e.useEffect(() => {
		if (!(!t || !n)) return n.add(t), () => n.remove(t);
	}, [t, n]);
}
jr(Rr, "useFocusScopeBranch");
function zr(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Gr(r, { select: t }), document.activeElement !== n) return;
}
jr(zr, "focusFirst");
function Br(e) {
	let t = Vr(e);
	return [Hr(t, e), Hr(t.reverse(), e)];
}
jr(Br, "getTabbableEdges");
function Vr(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ jr((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
jr(Vr, "getTabbableCandidates");
function Hr(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Ur(r, { upTo: t }))) return r;
}
jr(Hr, "findVisible");
function Ur(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
jr(Ur, "isHidden");
function Wr(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
jr(Wr, "isSelectableInput");
function Gr(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Wr(e) && t && e.select();
	}
}
jr(Gr, "focus");
var Kr = qr();
function qr() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Jr(e, t), e.unshift(t);
		},
		remove(t) {
			e = Jr(e, t), e[0]?.resume();
		}
	};
}
jr(qr, "createFocusScopesStack");
function Jr(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
jr(Jr, "arrayRemove");
function Yr(e) {
	return e.filter((e) => e.tagName !== "A");
}
jr(Yr, "removeLinks");
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Xr = globalThis?.document ? e.useLayoutEffect : () => {}, Zr = Object.defineProperty, Qr = (e, t) => Zr(e, "name", {
	value: t,
	configurable: !0
}), $r = e.useId || (() => void 0), ei = 0;
function ti(t) {
	let [n, r] = e.useState($r());
	return Xr(() => {
		t || r((e) => e ?? String(ei++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
Qr(ti, "useId");
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var ni = [
	"top",
	"right",
	"bottom",
	"left"
], ri = Math.min, ii = Math.max, ai = Math.round, oi = Math.floor, si = (e) => ({
	x: e,
	y: e
}), ci = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function li(e, t, n) {
	return ii(e, ri(t, n));
}
function ui(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function di(e) {
	return e.split("-")[0];
}
function fi(e) {
	return e.split("-")[1];
}
function pi(e) {
	return e === "x" ? "y" : "x";
}
function mi(e) {
	return e === "y" ? "height" : "width";
}
function hi(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function gi(e) {
	return pi(hi(e));
}
function _i(e, t, n) {
	n === void 0 && (n = !1);
	let r = fi(e), i = gi(e), a = mi(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Ei(o)), [o, Ei(o)];
}
function vi(e) {
	let t = Ei(e);
	return [
		yi(e),
		t,
		yi(t)
	];
}
function yi(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var bi = ["left", "right"], xi = ["right", "left"], Si = ["top", "bottom"], Ci = ["bottom", "top"];
function wi(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? xi : bi : t ? bi : xi;
		case "left":
		case "right": return t ? Si : Ci;
		default: return [];
	}
}
function Ti(e, t, n, r) {
	let i = fi(e), a = wi(di(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(yi)))), a;
}
function Ei(e) {
	let t = di(e);
	return ci[t] + e.slice(t.length);
}
function Di(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Oi(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Di(e);
}
function ki(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function Ai(e, t, n) {
	let { reference: r, floating: i } = e, a = hi(t), o = gi(t), s = mi(o), c = di(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = fi(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function ji(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ui(t, e), p = Oi(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = ki(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = ki(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Mi = 50, Ni = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: ji
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Ai(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < Mi && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Ai(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Pi = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = ui(e, t) || {};
		if (l == null) return {};
		let d = Oi(u), f = {
			x: n,
			y: r
		}, p = gi(i), m = mi(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = ri(d[_], T), D = ri(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = li(E, k, O), j = !c.arrow && fi(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
		return {
			[p]: f[p] + M,
			data: {
				[p]: A,
				centerOffset: k - A - M,
				...j && { alignmentOffset: M }
			},
			reset: j
		};
	}
}), Fi = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = ui(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = di(r), _ = hi(o), v = di(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Ei(o)] : vi(o)), x = p !== "none";
			!d && x && b.push(...Ti(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = _i(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== hi(t)) || T.every((e) => hi(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = hi(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function Ii(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Li(e) {
	return ni.some((t) => e[t] >= 0);
}
var Ri = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = ui(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Ii(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Li(e)
					} };
				}
				case "escaped": {
					let e = Ii(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Li(e)
					} };
				}
				default: return {};
			}
		}
	};
}, zi = /*#__PURE__*/ new Set(["left", "top"]);
async function Bi(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = di(n), s = fi(n), c = hi(n) === "y", l = zi.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = ui(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Vi = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Bi(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Hi = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = ui(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = hi(i), p = pi(f), m = u[p], h = u[f], g = (e, t) => li(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, Ui = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = ui(e, t), u = {
				x: n,
				y: r
			}, d = hi(i), f = pi(d), p = u[f], m = u[d], h = ui(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: h.mainAxis ?? 0,
				crossAxis: h.crossAxis ?? 0
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = zi.has(di(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Wi = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = ui(e, t), c = await i.detectOverflow(t, s), l = di(n), u = fi(n), d = hi(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = ri(p - c[m], g), y = ri(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * ii(c.left, c.right) : S = p - 2 * ii(c.top, c.bottom)), await o({
				...t,
				availableWidth: C,
				availableHeight: S
			});
			let w = await i.getDimensions(a.floating);
			return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Gi() {
	return typeof window < "u";
}
function Ki(e) {
	return Yi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qi(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ji(e) {
	return ((Yi(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Yi(e) {
	return Gi() ? e instanceof Node || e instanceof qi(e).Node : !1;
}
function Xi(e) {
	return Gi() ? e instanceof Element || e instanceof qi(e).Element : !1;
}
function Zi(e) {
	return Gi() ? e instanceof HTMLElement || e instanceof qi(e).HTMLElement : !1;
}
function Qi(e) {
	return !Gi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qi(e).ShadowRoot;
}
function $i(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = ua(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function ea(e) {
	return /^(table|td|th)$/.test(Ki(e));
}
function ta(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var na = /transform|translate|scale|rotate|perspective|filter/, ra = /paint|layout|strict|content/, ia = (e) => !!e && e !== "none", aa;
function oa(e) {
	let t = Xi(e) ? ua(e) : e;
	return ia(t.transform) || ia(t.translate) || ia(t.scale) || ia(t.rotate) || ia(t.perspective) || !ca() && (ia(t.backdropFilter) || ia(t.filter)) || na.test(t.willChange || "") || ra.test(t.contain || "");
}
function sa(e) {
	let t = fa(e);
	for (; Zi(t) && !la(t);) {
		if (oa(t)) return t;
		if (ta(t)) return null;
		t = fa(t);
	}
	return null;
}
function ca() {
	return aa ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), aa;
}
function la(e) {
	return /^(html|body|#document)$/.test(Ki(e));
}
function ua(e) {
	return qi(e).getComputedStyle(e);
}
function da(e) {
	return Xi(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function fa(e) {
	if (Ki(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Qi(e) && e.host || Ji(e);
	return Qi(t) ? t.host : t;
}
function pa(e) {
	let t = fa(e);
	return la(t) ? (e.ownerDocument || e).body : Zi(t) && $i(t) ? t : pa(t);
}
function ma(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = pa(e), i = r === e.ownerDocument?.body, a = qi(r);
	if (i) {
		let e = ha(a);
		return t.concat(a, a.visualViewport || [], $i(r) ? r : [], e && n ? ma(e) : []);
	} else return t.concat(r, ma(r, [], n));
}
function ha(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function ga(e) {
	let t = ua(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Zi(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = ai(n) !== a || ai(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function _a(e) {
	return Xi(e) ? e : e.contextElement;
}
function va(e) {
	let t = _a(e);
	if (!Zi(t)) return si(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = ga(t), o = (a ? ai(n.width) : n.width) / r, s = (a ? ai(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ya = /*#__PURE__*/ si(0);
function ba(e) {
	let t = qi(e);
	return !ca() || !t.visualViewport ? ya : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function xa(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === qi(e);
}
function Sa(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = _a(e), o = si(1);
	t && (r ? Xi(r) && (o = va(r)) : o = va(e));
	let s = xa(a, n, r) ? ba(a) : si(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = qi(a), t = Xi(r) ? qi(r) : r, n = e, i = ha(n);
		for (; i && t !== n;) {
			let e = va(i), t = i.getBoundingClientRect(), r = ua(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = qi(i), i = ha(n);
		}
	}
	return ki({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Ca(e, t) {
	let n = da(e).scrollLeft;
	return t ? t.left + n : Sa(Ji(e)).left + n;
}
function wa(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Ca(e, n),
		y: n.top + t.scrollTop
	};
}
function Ta(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Ji(r), s = t ? ta(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = si(1), u = si(0), d = Zi(r);
	if ((d || !a) && ((Ki(r) !== "body" || $i(o)) && (c = da(r)), d)) {
		let e = Sa(r);
		l = va(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? wa(o, c) : si(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Ea(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Da(e) {
	let t = da(e), n = e.ownerDocument.body, r = ii(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = ii(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Ca(e), o = -t.scrollTop;
	return ua(n).direction === "rtl" && (a += ii(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var Oa = 25;
function ka(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = qi(e), a = Ji(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !ca() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Ca(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= Oa && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Aa(e, t) {
	let n = Sa(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = va(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function ja(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = ka(e, n, t);
	else if (t === "document") r = Da(Ji(e));
	else if (Xi(t)) r = Aa(t, n);
	else {
		let n = ba(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return ki(r);
}
function Ma(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = ma(e, [], !1).filter((e) => Xi(e) && Ki(e) !== "body"), i = null, a = ua(e).position === "fixed", o = a ? fa(e) : e;
	for (; Xi(o) && !la(o);) {
		let e = ua(o), t = oa(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = fa(o);
	}
	return t.set(e, r), r;
}
function Na(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? ta(t) ? [] : Ma(t, this._c) : [].concat(n), r], o = ja(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = ja(t, a[e], i);
		s = ii(n.top, s), c = ri(n.right, c), l = ri(n.bottom, l), u = ii(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Pa(e) {
	let { width: t, height: n } = ga(e);
	return {
		width: t,
		height: n
	};
}
function Fa(e, t, n) {
	let r = Zi(t), i = Ji(t), a = n === "fixed", o = Sa(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = si(0);
	if ((r || !a) && ((Ki(t) !== "body" || $i(i)) && (s = da(t)), r)) {
		let e = Sa(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Ca(i));
	let l = i && !r && !a ? wa(i, s) : si(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Ia(e) {
	return ua(e).position === "static";
}
function La(e, t) {
	if (!Zi(e) || ua(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Ji(e) === n && (n = n.ownerDocument.body), n;
}
function Ra(e, t) {
	let n = qi(e);
	if (ta(e)) return n;
	if (!Zi(e)) {
		let t = fa(e);
		for (; t && !la(t);) {
			if (Xi(t) && !Ia(t)) return t;
			t = fa(t);
		}
		return n;
	}
	let r = La(e, t);
	for (; r && ea(r) && Ia(r);) r = La(r, t);
	return r && la(r) && Ia(r) && !oa(r) ? n : r || sa(e) || n;
}
var za = async function(e) {
	let t = this.getOffsetParent || Ra, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Fa(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Ba(e) {
	return ua(e).direction === "rtl";
}
var Va = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Ta,
	getDocumentElement: Ji,
	getClippingRect: Na,
	getOffsetParent: Ra,
	getElementRects: za,
	getClientRects: Ea,
	getDimensions: Pa,
	getScale: va,
	isElement: Xi,
	isRTL: Ba
};
function Ha(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Ua(e, t, n) {
	let r = null, i, a = Ji(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = oi(d), h = oi(a.clientWidth - (u + f)), g = oi(a.clientHeight - (d + p)), _ = oi(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: ii(0, ri(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Ha(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = qi(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Wa(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = _a(e), u = i || a ? [...l ? ma(l) : [], ...t ? ma(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Ua(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Sa(e) : null;
	c && g();
	function g() {
		let t = Sa(e);
		h && !Ha(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Ga = Vi, Ka = Hi, qa = Fi, Ja = Wi, Ya = Ri, Xa = Pi, Za = Ui, Qa = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Va,
		...i.platform,
		_c: r
	};
	return Ni(e, t, {
		...i,
		platform: a
	});
}, $a = typeof document < "u" ? o : function() {};
function eo(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!eo(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !eo(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function to(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function no(e, t) {
	let n = to(e);
	return Math.round(t * n) / n;
}
function ro(t) {
	let n = e.useRef(t);
	return $a(() => {
		n.current = t;
	}), n;
}
function io(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: u, open: d } = t, [f, p] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [m, h] = e.useState(i);
	eo(m, i) || h(i);
	let [g, _] = e.useState(null), [v, y] = e.useState(null), b = e.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = o || g, C = s || v, w = e.useRef(null), T = e.useRef(null), E = e.useRef(f), D = u != null, O = ro(u), k = ro(a), A = ro(d), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: m
		};
		k.current && (e.platform = k.current), Qa(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !eo(E.current, t) && (E.current = t, l.flushSync(() => {
				p(t);
			}));
		});
	}, [
		m,
		n,
		r,
		k,
		A
	]);
	$a(() => {
		d === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [d]);
	let M = e.useRef(!1);
	$a(() => (M.current = !0, () => {
		M.current = !1;
	}), []), $a(() => {
		if (S && (w.current = S), C && (T.current = C), S && C) {
			if (O.current) return O.current(S, C, j);
			j();
		}
	}, [
		S,
		C,
		j,
		O,
		D
	]);
	let N = e.useMemo(() => ({
		reference: w,
		floating: T,
		setReference: b,
		setFloating: x
	}), [b, x]), P = e.useMemo(() => ({
		reference: S,
		floating: C
	}), [S, C]), F = e.useMemo(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!P.floating) return e;
		let t = no(P.floating, f.x), n = no(P.floating, f.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...to(P.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: r,
			left: t,
			top: n
		};
	}, [
		r,
		c,
		P.floating,
		f.x,
		f.y
	]);
	return e.useMemo(() => ({
		...f,
		update: j,
		refs: N,
		elements: P,
		floatingStyles: F
	}), [
		f,
		j,
		N,
		P,
		F
	]);
}
var ao = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Xa({
				element: r.current,
				padding: i
			}).fn(n) : r ? Xa({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, oo = (e, t) => {
	let n = Ga(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, so = (e, t) => {
	let n = Ka(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, co = (e, t) => ({
	fn: Za(e).fn,
	options: [e, t]
}), lo = (e, t) => {
	let n = qa(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, uo = (e, t) => {
	let n = Ja(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, fo = (e, t) => {
	let n = Ya(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, po = (e, t) => {
	let n = ao(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, mo = Object.defineProperty, ho = (e, t) => mo(e, "name", {
	value: t,
	configurable: !0
});
function go(t) {
	let [n, r] = e.useState(void 0);
	return Xr(() => {
		if (t) {
			r({
				width: t.offsetWidth,
				height: t.offsetHeight
			});
			let e = new ResizeObserver((e) => {
				if (!Array.isArray(e) || !e.length) return;
				let n = e[0], i, a;
				if ("borderBoxSize" in n) {
					let e = n.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = t.offsetWidth, a = t.offsetHeight;
				r({
					width: i,
					height: a
				});
			});
			return e.observe(t, { box: "border-box" }), () => e.unobserve(t);
		} else r(void 0);
	}, [t]), n;
}
ho(go, "useSize");
//#endregion
//#region node_modules/@radix-ui/react-popper/dist/index.mjs
var _o = Object.defineProperty, vo = (e, t) => _o(e, "name", {
	value: t,
	configurable: !0
}), yo = {
	Partial: "partial",
	Always: "always"
}, bo = {
	Optimized: "optimized",
	Always: "always"
}, xo = "Popper", [So, Co] = /* @__PURE__ */ hn(xo), [wo, To] = So(xo), Eo = /* @__PURE__ */ vo((t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null), [o, s] = e.useState(void 0);
	return /* @__PURE__ */ (0, Q.jsx)(wo, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		placementState: o,
		setPlacementState: s,
		children: r
	});
}, "Popper"), Do = "PopperAnchor", Oo = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ vo(function(t, n) {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = To(Do, r), s = e.useRef(null), c = o.onAnchorChange, l = xn(n, e.useCallback((e) => {
		s.current = e, e && c(e);
	}, [c])), u = e.useRef(null);
	e.useEffect(() => {
		if (!i) return;
		let e = u.current;
		u.current = i.current, e !== u.current && c(u.current);
	});
	let d = o.placementState && Fo(o.placementState), f = d?.[0], p = d?.[1];
	return i ? null : /* @__PURE__ */ (0, Q.jsx)(ir.div, {
		"data-radix-popper-side": f,
		"data-radix-popper-align": p,
		...a,
		ref: l
	});
}, "PopperAnchor")), ko = "PopperContent", [Ao, jo] = So(ko), Mo = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ vo(function(t, n) {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = yo.Partial, hideWhenDetached: p = !1, updatePositionStrategy: m = bo.Optimized, onPlaced: h, ...g } = t, _ = To(ko, r), [v, y] = e.useState(null), b = xn(n, y), [x, S] = e.useState(null), C = go(x), w = C?.width ?? 0, T = C?.height ?? 0, E = i + (o === "center" ? "" : "-" + o), D = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, O = Array.isArray(u) ? u : [u], k = O.length > 0, A = {
		padding: D,
		boundary: O.filter(No),
		altBoundary: k
	}, { refs: j, floatingStyles: M, placement: N, isPositioned: P, middlewareData: F } = io({
		strategy: "fixed",
		placement: E,
		whileElementsMounted: /* @__PURE__ */ vo((...e) => Wa(...e, { animationFrame: m === bo.Always }), "whileElementsMounted"),
		elements: { reference: _.anchor },
		middleware: [
			oo({
				mainAxis: a + T,
				alignmentAxis: s
			}),
			l && so({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === yo.Partial ? co() : void 0,
				...A
			}),
			l && lo({ ...A }),
			uo({
				...A,
				apply: /* @__PURE__ */ vo(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			x && po({
				element: x,
				padding: c
			}),
			Po({
				arrowWidth: w,
				arrowHeight: T
			}),
			p && fo({
				strategy: "referenceHidden",
				...A,
				boundary: k ? A.boundary : void 0
			})
		]
	}), I = _.setPlacementState;
	Xr(() => (I(N), () => {
		I(void 0);
	}), [N, I]);
	let [L, R] = Fo(N), z = cr(h);
	Xr(() => {
		P && z?.();
	}, [P, z]);
	let B = F.arrow?.x, V = F.arrow?.y, H = F.arrow?.centerOffset !== 0, [U, ee] = e.useState();
	return Xr(() => {
		v && ee(window.getComputedStyle(v).zIndex);
	}, [v]), /* @__PURE__ */ (0, Q.jsx)("div", {
		ref: j.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...M,
			transform: P ? M.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: U,
			"--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(" "),
			...F.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ (0, Q.jsx)(Ao, {
			scope: r,
			placedSide: L,
			placedAlign: R,
			onArrowChange: S,
			arrowX: B,
			arrowY: V,
			shouldHideArrow: H,
			children: /* @__PURE__ */ (0, Q.jsx)(ir.div, {
				"data-side": L,
				"data-align": R,
				...g,
				ref: b,
				style: {
					...g.style,
					animation: P ? g.style?.animation : "none"
				}
			})
		})
	});
}, "PopperContent"));
function No(e) {
	return e !== null;
}
vo(No, "isNotNull");
var Po = /* @__PURE__ */ vo((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Fo(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
}), "transformOrigin");
function Fo(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
vo(Fo, "getSideAndAlignFromPlacement");
//#endregion
//#region node_modules/@radix-ui/react-portal/dist/index.mjs
var Io = Object.defineProperty, Lo = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => Io(e, "name", {
	value: t,
	configurable: !0
}))(function(t, n) {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	Xr(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? l.createPortal(/* @__PURE__ */ (0, Q.jsx)(ir.div, {
		...i,
		ref: n
	}), s) : null;
}, "Portal")), Ro = Object.defineProperty, zo = (e, t) => Ro(e, "name", {
	value: t,
	configurable: !0
});
function Bo(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
zo(Bo, "useStateMachine");
var Vo = /* @__PURE__ */ zo((t) => {
	let { present: n, children: r } = t, i = Ho(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = Wo(i.ref, Ko(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
}, "Presence");
function Ho(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), s = e.useRef(void 0), [c, l] = Bo(t ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return e.useEffect(() => {
		c === "mounted" ? (o.current = s.current ?? Go(i.current), s.current = void 0) : o.current = "none";
	}, [c]), Xr(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = Go(e);
			t ? (s.current = i, l("MOUNT")) : i === "none" || e?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, l]), Xr(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = /* @__PURE__ */ zo((r) => {
				let o = Go(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (l("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ zo((e) => {
				e.target === n && (o.current = Go(i.current));
			}, "handleAnimationStart");
			return n.addEventListener("animationstart", s), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
				t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r);
			};
		} else l("ANIMATION_END");
	}, [n, l]), {
		isPresent: ["mounted", "unmountSuspended"].includes(c),
		ref: e.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				i.current = t, s.current = Go(t);
			} else i.current = null;
			r(e);
		}, [])
	};
}
zo(Ho, "usePresence");
function Uo(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
zo(Uo, "setRef");
function Wo(...t) {
	let n = e.useRef(t);
	return n.current = t, e.useCallback((e) => {
		let t = n.current, r = !1, i = t.map((t) => {
			let n = Uo(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				typeof n == "function" ? n() : Uo(t[e], null);
			}
		};
	}, []);
}
zo(Wo, "useStableComposedRefs");
function Go(e) {
	return e?.animationName || "none";
}
zo(Go, "getAnimationName");
function Ko(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
zo(Ko, "getElementRef");
//#endregion
//#region node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var qo = Object.defineProperty, Jo = (e, t) => qo(e, "name", {
	value: t,
	configurable: !0
}), Yo = e.useEffectEvent, Xo = e.useInsertionEffect;
function Zo(t) {
	if (typeof Yo == "function") return Yo(t);
	let n = e.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof Xo == "function" ? Xo(() => {
		n.current = t;
	}) : Xr(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
Jo(Zo, "useEffectEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Qo = Object.defineProperty, $o = (e, t) => Qo(e, "name", {
	value: t,
	configurable: !0
}), es = e.useInsertionEffect || Xr;
function ts({ prop: t, defaultProp: n, onChange: r = /* @__PURE__ */ $o(() => {}, "onChange"), caller: i }) {
	let [a, o, s] = ns({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0;
	return [c ? t : a, e.useCallback((e) => {
		if (c) {
			let n = rs(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
$o(ts, "useControllableState");
function ns({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return es(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
$o(ns, "useUncontrolledState");
function rs(e) {
	return typeof e == "function";
}
$o(rs, "isFunction");
var is = Symbol("RADIX:SYNC_STATE");
function as(t, n, r, i) {
	let { prop: a, defaultProp: o, onChange: s, caller: c } = n, l = a !== void 0, u = Zo(s), d = [{
		...r,
		state: o
	}];
	i && d.push(i);
	let [f, p] = e.useReducer((e, n) => {
		if (n.type === is) return {
			...e,
			state: n.state
		};
		let r = t(e, n);
		return l && !Object.is(r.state, e.state) && u(r.state), r;
	}, ...d), m = f.state, h = e.useRef(m);
	e.useEffect(() => {
		h.current !== m && (h.current = m, l || u(m));
	}, [
		m,
		h,
		l
	]);
	let g = e.useMemo(() => a === void 0 ? f : {
		...f,
		state: a
	}, [f, a]);
	return e.useEffect(() => {
		l && !Object.is(a, f.state) && p({
			type: is,
			state: a
		});
	}, [
		a,
		f.state,
		l
	]), [g, p];
}
$o(as, "useControllableStateReducer");
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
var os = Object.defineProperty, ss = (e, t) => os(e, "name", {
	value: t,
	configurable: !0
});
function cs(t) {
	let n = e.useRef({
		value: t,
		previous: t
	});
	return e.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
ss(cs, "usePrevious");
//#endregion
//#region node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var ls = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), us = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, ds = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), ps = {}, ms = 0, hs = function(e) {
	return e && (e.host || hs(e.parentNode));
}, gs = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = hs(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, _s = function(e, t, n, r) {
	var i = gs(t, Array.isArray(e) ? e : [e]);
	ps[n] || (ps[n] = /* @__PURE__ */ new WeakMap());
	var a = ps[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (ds.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				ds.set(e, c), a.set(e, l), o.push(e), c === 1 && i && fs.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), ms++, function() {
		o.forEach(function(e) {
			var t = ds.get(e) - 1, i = a.get(e) - 1;
			ds.set(e, t), a.set(e, i), t || (fs.has(e) || e.removeAttribute(r), fs.delete(e)), i || e.removeAttribute(n);
		}), ms--, ms || (ds = /* @__PURE__ */ new WeakMap(), ds = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), ps = {});
	};
}, vs = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || us(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), _s(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, ys = function() {
	return ys = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, ys.apply(this, arguments);
};
function bs(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function xs(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Ss = "right-scroll-bar-position", Cs = "width-before-scroll-bar", ws = "with-scroll-bars-hidden", Ts = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
function Es(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
function Ds(e, t) {
	var n = c(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var Os = typeof window < "u" ? e.useLayoutEffect : e.useEffect, ks = /* @__PURE__ */ new WeakMap();
function As(e, t) {
	var n = Ds(t || null, function(t) {
		return e.forEach(function(e) {
			return Es(e, t);
		});
	});
	return Os(function() {
		var t = ks.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Es(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Es(e, a);
			});
		}
		ks.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function js(e) {
	return e;
}
function Ms(e, t) {
	t === void 0 && (t = js);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function Ns(e) {
	e === void 0 && (e = {});
	var t = Ms(null);
	return t.options = ys({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var Ps = function(t) {
	var n = t.sideCar, r = bs(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, ys({}, r));
};
Ps.isSideCarExport = !0;
function Fs(e, t) {
	return e.useMedium(t), Ps;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var Is = Ns(), Ls = function() {}, Rs = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: Ls,
		onWheelCapture: Ls,
		onTouchMoveCapture: Ls
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = bs(t, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), S = p, C = As([r, n]), w = ys(ys({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: Is,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), ys(ys({}, w), { ref: C })) : e.createElement(y, ys({}, w, {
		className: l,
		ref: C
	}), c));
});
Rs.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Rs.classNames = {
	fullWidth: Cs,
	zeroRight: Ss
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var zs, Bs = function() {
	if (zs) return zs;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function Vs() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Bs();
	return t && e.setAttribute("nonce", t), e;
}
function Hs(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Us(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Ws = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Vs()) && (Hs(t, n), Us(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Gs = function() {
	var t = Ws();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, Ks = function() {
	var e = Gs();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, qs = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Js = function(e) {
	return parseInt(e || "", 10) || 0;
}, Ys = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Js(n),
		Js(r),
		Js(i)
	];
}, Xs = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return qs;
	var t = Ys(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Zs = Ks(), Qs = "data-scroll-locked", $s = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${ws} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Qs}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${Ss} {
    right: ${s}px ${r};
  }
  
  .${Cs} {
    margin-right: ${s}px ${r};
  }
  
  .${Ss} .${Ss} {
    right: 0 ${r};
  }
  
  .${Cs} .${Cs} {
    margin-right: 0 ${r};
  }
  
  body[${Qs}] {
    ${Ts}: ${s}px;
  }
`;
}, ec = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, tc = function() {
	e.useEffect(function() {
		return document.body.setAttribute(Qs, (ec() + 1).toString()), function() {
			var e = ec() - 1;
			e <= 0 ? document.body.removeAttribute(Qs) : document.body.setAttribute(Qs, e.toString());
		};
	}, []);
}, nc = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	tc();
	var o = e.useMemo(function() {
		return Xs(a);
	}, [a]);
	return e.createElement(Zs, { styles: $s(o, !n, a, r ? "" : "!important") });
}, rc = !1;
if (typeof window < "u") try {
	var ic = Object.defineProperty({}, "passive", { get: function() {
		return rc = !0, !0;
	} });
	window.addEventListener("test", ic, ic), window.removeEventListener("test", ic, ic);
} catch {
	rc = !1;
}
var ac = rc ? { passive: !1 } : !1, oc = function(e) {
	return e.tagName === "TEXTAREA";
}, sc = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !oc(e) && n[t] === "visible");
}, cc = function(e) {
	return sc(e, "overflowY");
}, lc = function(e) {
	return sc(e, "overflowX");
}, uc = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), pc(e, r)) {
			var i = mc(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, dc = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, fc = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, pc = function(e, t) {
	return e === "v" ? cc(t) : lc(t);
}, mc = function(e, t) {
	return e === "v" ? dc(t) : fc(t);
}, hc = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, gc = function(e, t, n, r, i) {
	var a = hc(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = mc(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && pc(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, _c = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, vc = function(e) {
	return [e.deltaX, e.deltaY];
}, yc = function(e) {
	return e && "current" in e ? e.current : e;
}, bc = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, xc = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Sc = 0, Cc = [];
function wc(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(Sc++)[0], o = e.useState(Ks)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = xs([t.lockRef.current], (t.shards || []).map(yc), !0).filter(Boolean);
			return e.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), e.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		t.inert,
		t.lockRef.current,
		t.shards
	]);
	var c = e.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var n = _c(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = uc(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = uc(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return gc(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (!(!Cc.length || Cc[Cc.length - 1] !== o)) {
			var r = "deltaY" in t ? vc(t) : _c(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && bc(e.delta, r);
			})[0];
			if (i && i.should) {
				t.cancelable && t.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(yc).filter(Boolean).filter(function(e) {
					return e.contains(t.target);
				});
				(a.length > 0 ? c(t, a[0]) : !s.current.noIsolation) && t.cancelable && t.preventDefault();
			}
		}
	}, []), u = e.useCallback(function(e, t, r, i) {
		var a = {
			name: e,
			delta: t,
			target: r,
			should: i,
			shadowParent: Tc(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = _c(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, vc(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, _c(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return Cc.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, ac), document.addEventListener("touchmove", l, ac), document.addEventListener("touchstart", d, ac), function() {
			Cc = Cc.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, ac), document.removeEventListener("touchmove", l, ac), document.removeEventListener("touchstart", d, ac);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: xc(a) }) : null, m ? e.createElement(nc, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function Tc(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Ec = Fs(Is, wc), Dc = e.forwardRef(function(t, n) {
	return e.createElement(Rs, ys({}, t, {
		ref: n,
		sideCar: Ec
	}));
});
Dc.classNames = Rs.classNames;
//#endregion
//#region node_modules/@radix-ui/react-select/dist/index.mjs
var Oc = Object.defineProperty, $ = (e, t) => Oc(e, "name", {
	value: t,
	configurable: !0
}), kc = {
	ItemAligned: "item-aligned",
	Popper: "popper"
}, Ac = {
	LTR: "ltr",
	RTL: "rtl"
}, jc = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], Mc = [" ", "Enter"], Nc = "Select", [Pc, Fc, Ic] = /* @__PURE__ */ Vn(Nc), [Lc, Rc] = /* @__PURE__ */ hn(Nc, [Ic, Co]), zc = Co(), [Bc, Vc] = Lc(Nc), [Hc, Uc] = Lc(Nc);
function Wc(t) {
	let { __scopeSelect: n, children: r, open: i, defaultOpen: a, onOpenChange: o, value: s, defaultValue: c, onValueChange: l, dir: u, name: d, autoComplete: f, disabled: p, required: m, form: h, internal_do_not_use_render: g } = t, _ = zc(n), [v, y] = e.useState(null), [b, x] = e.useState(null), [S, C] = e.useState(!1), w = tr(u), [T, E] = ts({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Nc
	}), [D, O] = ts({
		prop: s,
		defaultProp: c,
		onChange: l,
		caller: Nc
	}), k = e.useRef(null), A = e.useRef(D);
	e.useEffect(() => {
		let e = h ? v?.ownerDocument.getElementById(h) : v?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ $(() => O(A.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		h,
		v,
		O
	]);
	let j = !v || !!h || !!v.closest("form"), [M, N] = e.useState(/* @__PURE__ */ new Set()), P = ti(), F = Array.from(M).map((e) => e.props.value).join(";"), I = e.useCallback((e) => {
		N((t) => new Set(t).add(e));
	}, []), L = e.useCallback((e) => {
		N((t) => {
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), R = {
		required: m,
		trigger: v,
		onTriggerChange: y,
		valueNode: b,
		onValueNodeChange: x,
		valueNodeHasChildren: S,
		onValueNodeHasChildrenChange: C,
		contentId: P,
		value: D,
		onValueChange: O,
		open: T,
		onOpenChange: E,
		dir: w,
		triggerPointerDownPosRef: k,
		disabled: p,
		name: d,
		autoComplete: f,
		form: h,
		nativeOptions: M,
		nativeSelectKey: F,
		isFormControl: j
	};
	return /* @__PURE__ */ (0, Q.jsx)(Eo, {
		..._,
		children: /* @__PURE__ */ (0, Q.jsx)(Bc, {
			scope: n,
			...R,
			children: /* @__PURE__ */ (0, Q.jsx)(Pc.Provider, {
				scope: n,
				children: /* @__PURE__ */ (0, Q.jsx)(Hc, {
					scope: n,
					onNativeOptionAdd: I,
					onNativeOptionRemove: L,
					children: jl(g) ? g(R) : r
				})
			})
		})
	});
}
$(Wc, "SelectProvider");
var Gc = /* @__PURE__ */ $((e) => {
	let { __scopeSelect: t, children: n, ...r } = e;
	return /* @__PURE__ */ (0, Q.jsx)(Wc, {
		__scopeSelect: t,
		...r,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [n, e ? /* @__PURE__ */ (0, Q.jsx)(Al, { __scopeSelect: t }) : null] })
	});
}, "Select"), Kc = "SelectTrigger", qc = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, disabled: i = !1, ...a } = t, o = zc(r), s = Vc(Kc, r), c = s.disabled || i, l = xn(n, s.onTriggerChange), u = Fc(r), d = e.useRef("touch"), [f, p, m] = Nl((e) => {
		let t = u().filter((e) => !e.disabled), n = Pl(t, e, t.find((e) => e.value === s.value));
		n !== void 0 && s.onValueChange(n.value);
	}), h = /* @__PURE__ */ $((e) => {
		c || (s.onOpenChange(!0), m()), e && (s.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	}, "handleOpen");
	return /* @__PURE__ */ (0, Q.jsx)(Oo, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, Q.jsx)(ir.button, {
			type: "button",
			role: "combobox",
			"aria-controls": s.open ? s.contentId : void 0,
			"aria-expanded": s.open,
			"aria-required": s.required,
			"aria-autocomplete": "none",
			dir: s.dir,
			"data-state": s.open ? "open" : "closed",
			disabled: c,
			"data-disabled": c ? "" : void 0,
			"data-placeholder": Ml(s.value) ? "" : void 0,
			...a,
			ref: l,
			onClick: sn(a.onClick, (e) => {
				e.currentTarget.focus(), d.current !== "mouse" && h(e);
			}),
			onPointerDown: sn(a.onPointerDown, (e) => {
				d.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (h(e), e.preventDefault());
			}),
			onKeyDown: sn(a.onKeyDown, (e) => {
				let t = f.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && p(e.key), !(t && e.key === " ") && jc.includes(e.key) && (h(), e.preventDefault());
			})
		})
	});
}, "SelectTrigger")), Jc = "SelectValue", Yc = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, className: i, style: a, children: o, placeholder: s = "", ...c } = t, l = Vc(Jc, r), { onValueNodeHasChildrenChange: u } = l, d = o !== void 0, f = xn(n, l.onValueNodeChange);
	Xr(() => {
		u(d);
	}, [u, d]);
	let p = Ml(l.value);
	return /* @__PURE__ */ (0, Q.jsx)(ir.span, {
		...c,
		asChild: !p && c.asChild,
		ref: f,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, Q.jsx)(e.Fragment, { children: p ? s : o }, p ? "placeholder" : "value")
	});
}, "SelectValue")), Xc = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ (0, Q.jsx)(ir.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
}, "SelectIcon")), [Zc, Qc] = Lc("SelectPortal", { forceMount: void 0 }), $c = /* @__PURE__ */ $((e) => {
	let { __scopeSelect: t, forceMount: n, ...r } = e;
	return /* @__PURE__ */ (0, Q.jsx)(Zc, {
		scope: e.__scopeSelect,
		forceMount: n,
		children: /* @__PURE__ */ (0, Q.jsx)(Lo, {
			asChild: !0,
			...r
		})
	});
}, "SelectPortal"), el = "SelectContent", tl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let r = Qc(el, t.__scopeSelect), { forceMount: i = r.forceMount, ...a } = t, o = Vc(el, t.__scopeSelect), [s, c] = e.useState();
	return Xr(() => {
		c(new DocumentFragment());
	}, []), /* @__PURE__ */ (0, Q.jsx)(Vo, {
		present: i || o.open,
		children: ({ present: e }) => e ? /* @__PURE__ */ (0, Q.jsx)(sl, {
			...a,
			ref: n
		}) : /* @__PURE__ */ (0, Q.jsx)(nl, {
			...a,
			fragment: s
		})
	});
}, "SelectContent")), nl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, children: r, fragment: i } = e;
	return i ? l.createPortal(/* @__PURE__ */ (0, Q.jsx)(il, {
		scope: n,
		children: /* @__PURE__ */ (0, Q.jsx)(Pc.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				ref: t,
				children: r
			})
		})
	}), i) : null;
}, "SelectContentFragment")), rl = 10, [il, al] = Lc(el), ol = /* @__PURE__ */ Dn("SelectContent.RemoveScroll"), sl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r } = t, { position: i = kc.ItemAligned, onCloseAutoFocus: a, onEscapeKeyDown: o, onPointerDownOutside: s, side: c, sideOffset: l, align: u, alignOffset: d, arrowPadding: f, collisionBoundary: p, collisionPadding: m, sticky: h, hideWhenDetached: g, avoidCollisions: _, ...v } = t, y = Vc(el, r), [b, x] = e.useState(null), [S, C] = e.useState(null), w = xn(n, x), [T, E] = e.useState(null), [D, O] = e.useState(null), k = Fc(r), [A, j] = e.useState(!1), M = e.useRef(!1);
	e.useEffect(() => {
		if (b) return vs(b);
	}, [b]), Or();
	let N = e.useCallback((e) => {
		let [t, ...n] = k().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && S && (S.scrollTop = 0), n === r && S && (S.scrollTop = S.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [k, S]), P = e.useCallback(() => N([T, b]), [
		N,
		T,
		b
	]);
	e.useEffect(() => {
		A && P();
	}, [A, P]);
	let { onOpenChange: F, triggerPointerDownPosRef: I } = y;
	e.useEffect(() => {
		if (b) {
			let e = {
				x: 0,
				y: 0
			}, t = /* @__PURE__ */ $((t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (I.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (I.current?.y ?? 0))
				};
			}, "handlePointerMove"), n = /* @__PURE__ */ $((n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : n.composedPath().includes(b) || F(!1), document.removeEventListener("pointermove", t), I.current = null;
			}, "handlePointerUp");
			return I.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		b,
		F,
		I
	]), e.useEffect(() => {
		let e = /* @__PURE__ */ $(() => F(!1), "close");
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [F]);
	let [L, R] = Nl((e) => {
		let t = k().filter((e) => !e.disabled), n = Pl(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current?.focus());
	}), z = e.useCallback((e, t, n) => {
		let r = !M.current && !n;
		(y.value !== void 0 && y.value === t || r) && (E(e), r && (M.current = !0));
	}, [y.value]), B = e.useCallback(() => b?.focus(), [b]), V = e.useCallback((e, t, n) => {
		let r = !M.current && !n;
		(y.value !== void 0 && y.value === t || r) && O(e);
	}, [y.value]), H = i === kc.Popper ? ll : cl, U = H === ll ? {
		side: c,
		sideOffset: l,
		align: u,
		alignOffset: d,
		arrowPadding: f,
		collisionBoundary: p,
		collisionPadding: m,
		sticky: h,
		hideWhenDetached: g,
		avoidCollisions: _
	} : {};
	return /* @__PURE__ */ (0, Q.jsx)(il, {
		scope: r,
		content: b,
		viewport: S,
		onViewportChange: C,
		itemRefCallback: z,
		selectedItem: T,
		onItemLeave: B,
		itemTextRefCallback: V,
		focusSelectedItem: P,
		selectedItemText: D,
		position: i,
		isPositioned: A,
		searchRef: L,
		children: /* @__PURE__ */ (0, Q.jsx)(Dc, {
			as: ol,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(Fr, {
				asChild: !0,
				trapped: y.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: sn(a, (e) => {
					y.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ (0, Q.jsx)(gr, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: o,
					onPointerDownOutside: s,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => y.onOpenChange(!1),
					children: /* @__PURE__ */ (0, Q.jsx)(H, {
						role: "listbox",
						id: y.contentId,
						"data-state": y.open ? "open" : "closed",
						dir: y.dir,
						onContextMenu: (e) => e.preventDefault(),
						...v,
						...U,
						onPlaced: () => j(!0),
						ref: w,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...v.style
						},
						onKeyDown: sn(v.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && R(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = k().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => N(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
}, "SelectContentImpl")), cl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, onPlaced: i, ...a } = t, o = Vc(el, r), s = al(el, r), [c, l] = e.useState(null), [u, d] = e.useState(null), f = xn(n, d), p = Fc(r), m = e.useRef(!1), h = e.useRef(!0), { viewport: g, selectedItem: _, selectedItemText: v, focusSelectedItem: y } = s, b = e.useCallback(() => {
		if (o.trigger && o.valueNode && c && u && g && _ && v) {
			let e = o.trigger.getBoundingClientRect(), t = u.getBoundingClientRect(), n = o.valueNode.getBoundingClientRect(), r = v.getBoundingClientRect();
			if (o.dir !== Ac.RTL) {
				let i = r.left - t.left, a = n.left - i, o = e.left - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - rl, d = nn(a, [rl, Math.max(rl, u - l)]);
				c.style.minWidth = s + "px", c.style.left = d + "px";
			} else {
				let i = t.right - r.right, a = window.innerWidth - n.right - i, o = window.innerWidth - e.right - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - rl, d = nn(a, [rl, Math.max(rl, u - l)]);
				c.style.minWidth = s + "px", c.style.right = d + "px";
			}
			let a = p(), s = window.innerHeight - rl * 2, l = g.scrollHeight, d = window.getComputedStyle(u), f = parseInt(d.borderTopWidth, 10), h = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = f + h + l + b + y, S = Math.min(_.offsetHeight * 5, x), C = window.getComputedStyle(g), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - rl, D = s - E, O = _.offsetHeight / 2, k = _.offsetTop + O, A = f + h + k, j = x - A;
			if (A <= E) {
				let e = a.length > 0 && _ === a[a.length - 1].ref.current;
				c.style.bottom = "0px";
				let t = u.clientHeight - g.offsetTop - g.offsetHeight, n = A + Math.max(D, O + (e ? T : 0) + t + y);
				c.style.height = n + "px";
			} else {
				let e = a.length > 0 && _ === a[0].ref.current;
				c.style.top = "0px";
				let t = Math.max(E, f + g.offsetTop + (e ? w : 0) + O) + j;
				c.style.height = t + "px", g.scrollTop = A - E + g.offsetTop;
			}
			c.style.margin = `${rl}px 0`, c.style.minHeight = S + "px", c.style.maxHeight = s + "px", i?.(), requestAnimationFrame(() => m.current = !0);
		}
	}, [
		p,
		o.trigger,
		o.valueNode,
		c,
		u,
		g,
		_,
		v,
		o.dir,
		i
	]);
	Xr(() => b(), [b]);
	let [x, S] = e.useState();
	return Xr(() => {
		u && S(window.getComputedStyle(u).zIndex);
	}, [u]), /* @__PURE__ */ (0, Q.jsx)(ul, {
		scope: r,
		contentWrapper: c,
		shouldExpandOnScrollRef: m,
		onScrollButtonChange: e.useCallback((e) => {
			e && h.current === !0 && (b(), y?.(), h.current = !1);
		}, [b, y]),
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			ref: l,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: x
			},
			children: /* @__PURE__ */ (0, Q.jsx)(ir.div, {
				...a,
				ref: f,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...a.style
				}
			})
		})
	});
}, "SelectItemAlignedPosition")), ll = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = rl, ...a } = e, o = zc(n);
	return /* @__PURE__ */ (0, Q.jsx)(Mo, {
		...o,
		...a,
		ref: t,
		align: r,
		collisionPadding: i,
		style: {
			boxSizing: "border-box",
			...a.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "SelectPopperPosition")), [ul, dl] = Lc(el, {}), fl = "SelectViewport", pl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, nonce: i, ...a } = t, o = al(fl, r), s = dl(fl, r), c = xn(n, o.onViewportChange), l = e.useRef(0);
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: i
	}), /* @__PURE__ */ (0, Q.jsx)(Pc.Slot, {
		scope: r,
		children: /* @__PURE__ */ (0, Q.jsx)(ir.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...a,
			ref: c,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...a.style
			},
			onScroll: sn(a.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
				if (r?.current && n) {
					let e = Math.abs(l.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - rl * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				l.current = t.scrollTop;
			})
		})
	})] });
}, "SelectViewport")), [ml, hl] = Lc("SelectGroup"), gl = "SelectItem", [_l, vl] = Lc(gl), yl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, value: i, disabled: a = !1, textValue: o, ...s } = t, c = Vc(gl, r), l = al(gl, r), u = c.value === i, [d, f] = e.useState(o ?? ""), [p, m] = e.useState(!1), h = xn(n, cr((e) => l.itemRefCallback?.(e, i, a))), g = ti(), _ = e.useRef("touch"), v = /* @__PURE__ */ $(() => {
		c.onValueChange(i), c.onOpenChange(!1);
	}, "handleSelect");
	return /* @__PURE__ */ (0, Q.jsx)(_l, {
		scope: r,
		value: i,
		disabled: a,
		textId: g,
		isSelected: u,
		onItemTextChange: e.useCallback((e) => {
			f((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, Q.jsx)(Pc.ItemSlot, {
			scope: r,
			value: i,
			disabled: a,
			textValue: d,
			children: /* @__PURE__ */ (0, Q.jsx)(ir.div, {
				role: "option",
				"aria-labelledby": g,
				"data-highlighted": p ? "" : void 0,
				"aria-selected": u && p,
				"data-state": u ? "checked" : "unchecked",
				"aria-disabled": a || void 0,
				"data-disabled": a ? "" : void 0,
				tabIndex: a ? void 0 : -1,
				...s,
				ref: h,
				onFocus: sn(s.onFocus, () => m(!0)),
				onBlur: sn(s.onBlur, () => m(!1)),
				onClick: sn(s.onClick, () => {
					a || _.current !== "mouse" && v();
				}),
				onPointerUp: sn(s.onPointerUp, () => {
					a || _.current === "mouse" && v();
				}),
				onPointerDown: sn(s.onPointerDown, (e) => {
					_.current = e.pointerType;
				}),
				onPointerMove: sn(s.onPointerMove, (e) => {
					_.current = e.pointerType, a ? l.onItemLeave?.() : _.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: sn(s.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && l.onItemLeave?.();
				}),
				onKeyDown: sn(s.onKeyDown, (e) => {
					a || e.target !== e.currentTarget || l.searchRef?.current !== "" && e.key === " " || (Mc.includes(e.key) && v(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
}, "SelectItem")), bl = "SelectItemText", xl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, className: i, style: a, ...o } = t, s = Vc(bl, r), c = al(bl, r), u = vl(bl, r), d = Uc(bl, r), [f, p] = e.useState(null), m = cr((e) => c.itemTextRefCallback?.(e, u.value, u.disabled)), h = xn(n, p, u.onItemTextChange, m), g = f?.textContent, _ = e.useMemo(() => /* @__PURE__ */ (0, Q.jsx)("option", {
		value: u.value,
		disabled: u.disabled,
		children: g
	}, u.value), [
		u.disabled,
		u.value,
		g
	]), { onNativeOptionAdd: v, onNativeOptionRemove: y } = d;
	return Xr(() => (v(_), () => y(_)), [
		v,
		y,
		_
	]), /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(ir.span, {
		id: u.textId,
		...o,
		ref: h
	}), u.isSelected && s.valueNode && !s.valueNodeHasChildren && !Ml(s.value) ? l.createPortal(o.children, s.valueNode) : null] });
}, "SelectItemText")), Sl = "SelectItemIndicator", Cl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, ...r } = e;
	return vl(Sl, n).isSelected ? /* @__PURE__ */ (0, Q.jsx)(ir.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
}, "SelectItemIndicator")), wl = "SelectScrollUpButton", Tl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let r = al(wl, t.__scopeSelect), i = dl(wl, t.__scopeSelect), [a, o] = e.useState(!1), s = xn(n, i.onScrollButtonChange);
	return Xr(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				let e = t.scrollTop > 0;
				o(e);
			};
			$(e, "handleScroll");
			let t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ (0, Q.jsx)(Ol, {
		...t,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
}, "SelectScrollUpButton")), El = "SelectScrollDownButton", Dl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let r = al(El, t.__scopeSelect), i = dl(El, t.__scopeSelect), [a, o] = e.useState(!1), s = xn(n, i.onScrollButtonChange);
	return Xr(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight, n = Math.ceil(t.scrollTop) < e;
				o(n);
			};
			$(e, "handleScroll");
			let t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ (0, Q.jsx)(Ol, {
		...t,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
}, "SelectScrollDownButton")), Ol = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, onAutoScroll: i, ...a } = t, o = al("SelectScrollButton", r), s = e.useRef(null), c = Fc(r), l = e.useCallback(() => {
		s.current !== null && (window.clearInterval(s.current), s.current = null);
	}, []);
	return e.useEffect(() => () => l(), [l]), Xr(() => {
		c().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [c]), /* @__PURE__ */ (0, Q.jsx)(ir.div, {
		"aria-hidden": !0,
		...a,
		ref: n,
		style: {
			flexShrink: 0,
			...a.style
		},
		onPointerDown: sn(a.onPointerDown, () => {
			s.current === null && (s.current = window.setInterval(i, 50));
		}),
		onPointerMove: sn(a.onPointerMove, () => {
			o.onItemLeave?.(), s.current === null && (s.current = window.setInterval(i, 50));
		}),
		onPointerLeave: sn(a.onPointerLeave, () => {
			l();
		})
	});
}, "SelectScrollButtonImpl")), kl = "SelectBubbleInput", Al = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function({ __scopeSelect: t, ...n }, r) {
	let i = Vc(kl, t), { value: a, onValueChange: o, required: s, disabled: c, name: l, autoComplete: u, form: d } = i, { nativeOptions: f, nativeSelectKey: p } = i, m = e.useRef(null), h = xn(r, m), g = a ?? "", _ = cs(g), v = Array.from(f).some((e) => (e.props.value ?? "") === "");
	return e.useEffect(() => {
		let e = m.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (_ !== g && n) {
			let t = new Event("change", { bubbles: !0 });
			n.call(e, g), e.dispatchEvent(t);
		}
	}, [_, g]), /* @__PURE__ */ (0, Q.jsxs)(ir.select, {
		"aria-hidden": !0,
		required: s,
		tabIndex: -1,
		name: l,
		autoComplete: u,
		disabled: c,
		form: d,
		onChange: (e) => o(e.target.value),
		...n,
		style: {
			...ls,
			...n.style
		},
		ref: h,
		defaultValue: g,
		children: [Ml(a) && !v ? /* @__PURE__ */ (0, Q.jsx)("option", { value: "" }) : null, Array.from(f)]
	}, p);
}, "SelectBubbleInput"));
function jl(e) {
	return typeof e == "function";
}
$(jl, "isFunction");
function Ml(e) {
	return e === "" || e === void 0;
}
$(Ml, "shouldShowPlaceholder");
function Nl(t) {
	let n = cr(t), r = e.useRef(""), i = e.useRef(0), a = e.useCallback((e) => {
		let t = r.current + e;
		n(t), (/* @__PURE__ */ $((function e(t) {
			r.current = t, window.clearTimeout(i.current), t !== "" && (i.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(t);
	}, [n]), o = e.useCallback(() => {
		r.current = "", window.clearTimeout(i.current);
	}, []);
	return e.useEffect(() => () => window.clearTimeout(i.current), []), [
		r,
		a,
		o
	];
}
$(Nl, "useTypeaheadSearch");
function Pl(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Fl(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
$(Pl, "findNextItem");
function Fl(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
$(Fl, "wrapArray");
//#endregion
//#region src/components/atoms/dropdown/dropdown.constants.ts
var Il = tt([
	"flex w-full items-center justify-between",
	"rounded-md border",
	"bg-background text-foreground",
	"transition-colors",
	"outline-none",
	"focus-visible:ring-2",
	"focus-visible:ring-ring",
	"focus-visible:ring-offset-2",
	"disabled:pointer-events-none",
	"disabled:cursor-not-allowed",
	"disabled:opacity-50"
], {
	variants: {
		size: {
			sm: "h-9 px-3 text-sm",
			md: "h-11 px-4 text-sm"
		},
		state: {
			default: "border-input hover:border-primary",
			error: "border-destructive focus-visible:ring-destructive"
		}
	},
	defaultVariants: {
		size: "md",
		state: "default"
	}
}), Ll = tt([
	"z-50",
	"overflow-hidden",
	"rounded-md",
	"border",
	"bg-popover",
	"text-popover-foreground",
	"shadow-md"
], {
	variants: { size: {
		sm: "text-sm",
		md: "text-sm"
	} },
	defaultVariants: { size: "md" }
}), Rl = ({ label: e, placeholder: t = "Select option", helperText: n, errorMessage: r, required: i, size: a = "md", state: o = "default", children: s, ...c }) => {
	let l = o === "error";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex w-full flex-col gap-2",
		children: [
			e && /* @__PURE__ */ (0, Q.jsxs)("label", {
				className: "text-sm font-medium text-foreground",
				children: [e, i && /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "ml-1 text-destructive",
					children: "*"
				})]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(Gc, {
				...c,
				children: [/* @__PURE__ */ (0, Q.jsx)(zl, {
					size: a,
					state: l ? "error" : "default",
					children: /* @__PURE__ */ (0, Q.jsx)(Yc, { placeholder: t })
				}), /* @__PURE__ */ (0, Q.jsx)(Bl, {
					size: a,
					children: s
				})]
			}),
			l && r ? /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-sm text-destructive",
				children: r
			}) : n ? /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: n
			}) : null
		]
	});
}, zl = e.forwardRef(({ className: e, size: t, state: n, children: r, ...i }, a) => /* @__PURE__ */ (0, Q.jsxs)(qc, {
	ref: a,
	className: Qe(Il({
		size: t,
		state: n
	}), e),
	...i,
	children: [r, /* @__PURE__ */ (0, Q.jsx)(Xc, {
		asChild: !0,
		children: /* @__PURE__ */ (0, Q.jsx)(Kt, { className: "h-4 w-4 opacity-50" })
	})]
}));
zl.displayName = qc.displayName;
var Bl = e.forwardRef(({ className: e, children: t, size: n, ...r }, i) => /* @__PURE__ */ (0, Q.jsx)($c, { children: /* @__PURE__ */ (0, Q.jsxs)(tl, {
	ref: i,
	className: Qe(Ll({ size: n }), e),
	...r,
	children: [
		/* @__PURE__ */ (0, Q.jsx)(Tl, {
			className: "flex justify-center py-1",
			children: /* @__PURE__ */ (0, Q.jsx)(qt, { className: "h-4 w-4" })
		}),
		/* @__PURE__ */ (0, Q.jsx)(pl, {
			className: "p-1",
			children: t
		}),
		/* @__PURE__ */ (0, Q.jsx)(Dl, {
			className: "flex justify-center py-1",
			children: /* @__PURE__ */ (0, Q.jsx)(Kt, { className: "h-4 w-4" })
		})
	]
}) }));
Bl.displayName = tl.displayName;
var Vl = e.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, Q.jsxs)(yl, {
	ref: r,
	className: Qe("relative flex cursor-default select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none", "focus:bg-accent focus:text-accent-foreground", "data-disabled:pointer-events-none data-disabled:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, Q.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, Q.jsx)(Cl, { children: /* @__PURE__ */ (0, Q.jsx)(Gt, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, Q.jsx)(xl, { children: t })]
}));
Vl.displayName = yl.displayName, Rl.Item = Vl;
//#endregion
//#region src/components/atoms/input/input.constants.ts
var Hl = tt([
	"flex w-full",
	"rounded-md",
	"border",
	"bg-background",
	"text-foreground",
	"placeholder:text-muted-foreground",
	"transition-colors",
	"outline-none",
	"focus-visible:ring-2",
	"focus-visible:ring-ring",
	"focus-visible:ring-offset-2",
	"disabled:pointer-events-none",
	"disabled:cursor-not-allowed",
	"disabled:opacity-50"
], {
	variants: {
		size: {
			sm: "\n					h-9\n					px-3\n					text-sm\n				",
			lg: "\n					h-11\n					px-4\n					text-sm\n				"
		},
		state: {
			default: "border-input hover:border-primary",
			error: "border-destructive focus-visible:ring-destructive"
		}
	},
	defaultVariants: {
		size: "lg",
		state: "default"
	}
}), Ul = r(({ className: e, size: t = "lg", state: n = "default", type: r = "text", startAdornment: i, endAdornment: a, ...o }, s) => {
	let c = Qe(Hl({
		size: t,
		state: n
	}), i && "pl-10", a && "pr-10", e);
	return !i && !a ? /* @__PURE__ */ (0, Q.jsx)("input", {
		ref: s,
		type: r,
		className: c,
		...o
	}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "relative flex w-full items-center",
		children: [
			i && /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "\n						pointer-events-none\n						absolute\n						left-3\n						flex\n						items-center\n						text-muted-foreground\n					",
				children: i
			}),
			/* @__PURE__ */ (0, Q.jsx)("input", {
				ref: s,
				type: r,
				className: c,
				...o
			}),
			a && /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "\n						absolute\n						right-3\n						flex\n						items-center\n					",
				children: a
			})
		]
	});
});
Ul.displayName = "Input";
//#endregion
//#region src/components/atoms/skeleton/skeleton.constants.ts
var Wl = {
	text: "text",
	circle: "circle",
	rectangle: "rectangle"
}, Gl = {
	text: "rounded-md",
	circle: "rounded-full aspect-square",
	rectangle: "rounded-lg"
}, Kl = r(({ className: e, variant: t = Wl.rectangle, ...n }, r) => /* @__PURE__ */ (0, Q.jsx)("div", {
	ref: r,
	"aria-hidden": "true",
	className: Qe("animate-pulse bg-muted", Gl[t], e),
	...n
}));
Kl.displayName = "Skeleton";
//#endregion
//#region src/components/molecules/emptyState/emptyState.constants.ts
var ql = tt([
	"flex",
	"w-full",
	"flex-col",
	"items-center",
	"text-center"
], {
	variants: { size: {
		sm: ["gap-3", "py-6"],
		md: ["gap-4", "py-10"],
		lg: ["gap-6", "py-16"]
	} },
	defaultVariants: { size: "md" }
}), Jl = tt([
	"flex",
	"items-center",
	"justify-center",
	"rounded-full",
	"text-muted-foreground"
], {
	variants: { size: {
		sm: ["h-10", "w-10"],
		md: ["h-14", "w-14"],
		lg: ["h-20", "w-20"]
	} },
	defaultVariants: { size: "md" }
}), Yl = ({ className: e, icon: t, title: n, description: r, action: i, size: a = "md", ...o }) => /* @__PURE__ */ (0, Q.jsxs)("div", {
	className: Qe(ql({ size: a }), e),
	...o,
	children: [
		t && /* @__PURE__ */ (0, Q.jsx)("div", {
			className: Jl({ size: a }),
			children: t
		}),
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "\n					flex\n					flex-col\n					gap-1\n          items-center\n				",
			children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "\n						text-lg\n						font-semibold\n						text-foreground\n					",
				children: n
			}), r && /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "\n							max-w-sm\n							text-sm\n							text-muted-foreground\n						",
				children: r
			})]
		}),
		i && /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "mt-2",
			children: i
		})
	]
}), Xl = tt([
	"flex",
	"w-full",
	"flex-col",
	"gap-2"
], {
	variants: { spacing: {
		sm: "gap-1.5",
		md: "gap-2"
	} },
	defaultVariants: { spacing: "md" }
}), Zl = tt(["text-sm"], {
	variants: { state: {
		default: "text-muted-foreground",
		error: "text-destructive"
	} },
	defaultVariants: { state: "default" }
}), Ql = ({ className: e, label: t, required: n = !1, description: r, errorMessage: i, children: a, spacing: o = "md", ...s }) => {
	let c = !!i;
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: Qe(Xl({ spacing: o }), e),
		...s,
		children: [
			t && /* @__PURE__ */ (0, Q.jsxs)("label", {
				className: "\n						text-sm\n						font-medium\n						text-foreground\n					",
				children: [t, n && /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "ml-1 text-destructive",
					children: "*"
				})]
			}),
			a,
			c ? /* @__PURE__ */ (0, Q.jsx)("p", {
				className: Zl({ state: "error" }),
				children: i
			}) : r ? /* @__PURE__ */ (0, Q.jsx)("p", {
				className: Zl({ state: "default" }),
				children: r
			}) : null
		]
	});
}, $l = tt([
	"inline-flex",
	"items-center",
	"justify-center",
	"rounded-md",
	"transition-colors",
	"cursor-pointer",
	"hover:text-foreground",
	"focus-visible:outline-none",
	"focus-visible:ring-2",
	"focus-visible:ring-ring",
	"focus-visible:ring-offset-2",
	"disabled:pointer-events-none",
	"disabled:opacity-50"
], {
	variants: { size: {
		sm: "h-4 w-4",
		lg: "h-5 w-5"
	} },
	defaultVariants: { size: "lg" }
}), eu = r(({ className: e, toggleLabel: t = "Show password", iconSize: n = "lg", ...r }, i) => {
	let [a, o] = c(!1);
	return /* @__PURE__ */ (0, Q.jsx)(Ul, {
		ref: i,
		type: a ? "text" : "password",
		className: Qe(e),
		endAdornment: /* @__PURE__ */ (0, Q.jsx)("button", {
			type: "button",
			onClick: () => {
				o((e) => !e);
			},
			className: $l({ size: n }),
			"aria-label": a ? "Hide password" : t,
			"aria-pressed": a,
			children: a ? /* @__PURE__ */ (0, Q.jsx)(Yt, {}) : /* @__PURE__ */ (0, Q.jsx)(Jt, {})
		}),
		...r
	});
});
eu.displayName = "PasswordField";
//#endregion
//#region src/components/organisms/loginForm/loginForm.tsx
var tu = ({ email: e = "", password: t = "", emailError: n, passwordError: r, loading: i = !1, onEmailChange: a, onPasswordChange: o, onSubmit: s }) => /* @__PURE__ */ (0, Q.jsxs)("form", {
	onSubmit: s,
	className: "flex w-full flex-col gap-6",
	children: [
		/* @__PURE__ */ (0, Q.jsx)(Ql, {
			label: "Email",
			required: !0,
			errorMessage: n,
			children: /* @__PURE__ */ (0, Q.jsx)(Ul, {
				type: "email",
				value: e,
				onChange: (e) => a(e.target.value),
				placeholder: "name@email.com"
			})
		}),
		/* @__PURE__ */ (0, Q.jsx)(Ql, {
			label: "Password",
			required: !0,
			errorMessage: r,
			children: /* @__PURE__ */ (0, Q.jsx)(eu, {
				value: t,
				onChange: (e) => o?.(e.target.value),
				placeholder: "Enter password"
			})
		}),
		/* @__PURE__ */ (0, Q.jsx)(Pt, {
			type: "submit",
			variant: "primary",
			size: "lg",
			width: "full",
			className: "w-full",
			loading: i,
			children: i ? "Logging in..." : "Login"
		})
	]
});
//#endregion
export { kt as Avatar, Pt as Button, $t as Checkbox, Rl as Dropdown, Ql as FormField, Ul as Input, tu as LoginForm, eu as PasswordField, Kl as Skeleton, Mt as Spinner, Yl as emptyState };
