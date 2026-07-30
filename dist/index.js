import * as e from "react";
import t, { createContext as n, createElement as r, forwardRef as i, useContext as a, useEffect as o, useLayoutEffect as s, useRef as c, useState as l } from "react";
import * as u from "react-dom";
//#region \0rolldown/runtime.js
var d = Object.create, f = Object.defineProperty, p = Object.getOwnPropertyDescriptor, m = Object.getOwnPropertyNames, h = Object.getPrototypeOf, g = Object.prototype.hasOwnProperty, _ = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), v = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = m(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !g.call(e, s) && s !== n && f(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = p(t, s)) || r.enumerable
	});
	return e;
}, y = (e, t, n) => (n = e == null ? {} : d(h(e)), v(t || !e || !e.__esModule ? f(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), b = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function x(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = x(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function S() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = x(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var C = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, w = (e, t) => ({
	classGroupId: e,
	validator: t
}), T = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), E = "-", D = [], O = "arbitrary..", k = (e) => {
	let t = M(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return j(e);
			let n = e.split(E);
			return A(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? C(i, t) : t : i || D;
			}
			return n[e] || D;
		}
	};
}, A = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = A(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(E) : e.slice(t).join(E), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, j = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? O + r : void 0;
})(), M = (e) => {
	let { theme: t, classGroups: n } = e;
	return N(n, t);
}, N = (e, t) => {
	let n = T();
	for (let r in e) {
		let i = e[r];
		P(i, n, r, t);
	}
	return n;
}, P = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		F(i, t, n, r);
	}
}, F = (e, t, n, r) => {
	if (typeof e == "string") {
		I(e, t, n);
		return;
	}
	if (typeof e == "function") {
		L(e, t, n, r);
		return;
	}
	ee(e, t, n, r);
}, I = (e, t, n) => {
	let r = e === "" ? t : R(t, e);
	r.classGroupId = n;
}, L = (e, t, n, r) => {
	if (z(e)) {
		P(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(w(n, e));
}, ee = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		P(o, R(t, a), n, r);
	}
}, R = (e, t) => {
	let n = e, r = t.split(E), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = T(), n.nextPart.set(t, i)), n = i;
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
}, V = "!", H = ":", te = [], U = (e, t, n, r, i) => ({
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
		return U(t, l, c, u);
	};
	if (t) {
		let e = t + H, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : U(te, !1, t, void 0, !0);
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
}, ne = (e) => ({
	cache: B(e.cacheSize),
	parseClassName: W(e),
	sortModifiers: G(e),
	postfixLookupClassGroupIds: re(e),
	...k(e)
}), re = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, ie = /\s+/, K = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(ie), l = "";
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
}, ae = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = oe(n)) && (i && (i += " "), i += r);
	return i;
}, oe = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = oe(e[r])) && (n && (n += " "), n += t);
	return n;
}, se = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = ne(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = K(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(ae(...e));
}, ce = [], q = (e) => {
	let t = (t) => t[e] || ce;
	return t.isThemeGetter = !0, t;
}, le = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ue = /^\((?:(\w[\w-]*):)?(.+)\)$/i, de = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, fe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, pe = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, me = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, he = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ge = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _e = (e) => de.test(e), J = (e) => !!e && !Number.isNaN(Number(e)), ve = (e) => !!e && Number.isInteger(Number(e)), ye = (e) => e.endsWith("%") && J(e.slice(0, -1)), be = (e) => fe.test(e), xe = () => !0, Se = (e) => pe.test(e) && !me.test(e), Ce = () => !1, we = (e) => he.test(e), Te = (e) => ge.test(e), Ee = (e) => !Y(e) && !X(e), De = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Oe = (e) => Ue(e, qe, Ce), Y = (e) => le.test(e), ke = (e) => Ue(e, Je, Se), Ae = (e) => Ue(e, Ye, J), je = (e) => Ue(e, Ze, xe), Me = (e) => Ue(e, Xe, Ce), Ne = (e) => Ue(e, Ge, Ce), Pe = (e) => Ue(e, Ke, Te), Fe = (e) => Ue(e, Qe, we), X = (e) => ue.test(e), Ie = (e) => We(e, Je), Le = (e) => We(e, Xe), Re = (e) => We(e, Ge), ze = (e) => We(e, qe), Be = (e) => We(e, Ke), Ve = (e) => We(e, Qe, !0), He = (e) => We(e, Ze, !0), Ue = (e, t, n) => {
	let r = le.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, We = (e, t, n = !1) => {
	let r = ue.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Ge = (e) => e === "position" || e === "percentage", Ke = (e) => e === "image" || e === "url", qe = (e) => e === "length" || e === "size" || e === "bg-size", Je = (e) => e === "length", Ye = (e) => e === "number", Xe = (e) => e === "family-name", Ze = (e) => e === "number" || e === "weight", Qe = (e) => e === "shadow", $e = /*#__PURE__*/ se(() => {
	let e = q("color"), t = q("font"), n = q("text"), r = q("font-weight"), i = q("tracking"), a = q("leading"), o = q("breakpoint"), s = q("container"), c = q("spacing"), l = q("radius"), u = q("shadow"), d = q("inset-shadow"), f = q("text-shadow"), p = q("drop-shadow"), m = q("blur"), h = q("perspective"), g = q("aspect"), _ = q("ease"), v = q("animate"), y = () => [
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
		X,
		Y
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
		X,
		Y,
		c
	], T = () => [
		_e,
		"full",
		"auto",
		...w()
	], E = () => [
		ve,
		"none",
		"subgrid",
		X,
		Y
	], D = () => [
		"auto",
		{ span: [
			"full",
			ve,
			X,
			Y
		] },
		ve,
		X,
		Y
	], O = () => [
		ve,
		"auto",
		X,
		Y
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		X,
		Y
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
		_e,
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
		_e,
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
		_e,
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
		X,
		Y
	], L = () => [
		...b(),
		Re,
		Ne,
		{ position: [X, Y] }
	], ee = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], R = () => [
		"auto",
		"cover",
		"contain",
		ze,
		Oe,
		{ size: [X, Y] }
	], z = () => [
		ye,
		Ie,
		ke
	], B = () => [
		"",
		"none",
		"full",
		l,
		X,
		Y
	], V = () => [
		"",
		J,
		Ie,
		ke
	], H = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], te = () => [
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
	], U = () => [
		J,
		ye,
		Re,
		Ne
	], W = () => [
		"",
		"none",
		m,
		X,
		Y
	], G = () => [
		"none",
		J,
		X,
		Y
	], ne = () => [
		"none",
		J,
		X,
		Y
	], re = () => [
		J,
		X,
		Y
	], ie = () => [
		_e,
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
			blur: [be],
			breakpoint: [be],
			color: [xe],
			container: [be],
			"drop-shadow": [be],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Ee],
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
			"inset-shadow": [be],
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
			radius: [be],
			shadow: [be],
			spacing: ["px", J],
			text: [be],
			"text-shadow": [be],
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
				_e,
				Y,
				X,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				X,
				Y
			] }],
			"container-named": [De],
			columns: [{ columns: [
				J,
				Y,
				X,
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
				ve,
				"auto",
				X,
				Y
			] }],
			basis: [{ basis: [
				_e,
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
				J,
				_e,
				"auto",
				"initial",
				"none",
				Y
			] }],
			grow: [{ grow: [
				"",
				J,
				X,
				Y
			] }],
			shrink: [{ shrink: [
				"",
				J,
				X,
				Y
			] }],
			order: [{ order: [
				ve,
				"first",
				"last",
				"none",
				X,
				Y
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
				Ie,
				ke
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				He,
				je
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
				ye,
				Y
			] }],
			"font-family": [{ font: [
				Le,
				Me,
				t
			] }],
			"font-features": [{ "font-features": [Y] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				X,
				Y
			] }],
			"line-clamp": [{ "line-clamp": [
				J,
				"none",
				X,
				Ae
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				X,
				Y
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				X,
				Y
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
			"text-decoration-style": [{ decoration: [...H(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				J,
				"from-font",
				"auto",
				X,
				ke
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				J,
				"auto",
				X,
				Y
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
				ve,
				X,
				Y
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
				X,
				Y
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
				X,
				Y
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
			"bg-repeat": [{ bg: ee() }],
			"bg-size": [{ bg: R() }],
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
						ve,
						X,
						Y
					],
					radial: [
						"",
						X,
						Y
					],
					conic: [
						ve,
						X,
						Y
					]
				},
				Be,
				Pe
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: z() }],
			"gradient-via-pos": [{ via: z() }],
			"gradient-to-pos": [{ to: z() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: B() }],
			"rounded-s": [{ "rounded-s": B() }],
			"rounded-e": [{ "rounded-e": B() }],
			"rounded-t": [{ "rounded-t": B() }],
			"rounded-r": [{ "rounded-r": B() }],
			"rounded-b": [{ "rounded-b": B() }],
			"rounded-l": [{ "rounded-l": B() }],
			"rounded-ss": [{ "rounded-ss": B() }],
			"rounded-se": [{ "rounded-se": B() }],
			"rounded-ee": [{ "rounded-ee": B() }],
			"rounded-es": [{ "rounded-es": B() }],
			"rounded-tl": [{ "rounded-tl": B() }],
			"rounded-tr": [{ "rounded-tr": B() }],
			"rounded-br": [{ "rounded-br": B() }],
			"rounded-bl": [{ "rounded-bl": B() }],
			"border-w": [{ border: V() }],
			"border-w-x": [{ "border-x": V() }],
			"border-w-y": [{ "border-y": V() }],
			"border-w-s": [{ "border-s": V() }],
			"border-w-e": [{ "border-e": V() }],
			"border-w-bs": [{ "border-bs": V() }],
			"border-w-be": [{ "border-be": V() }],
			"border-w-t": [{ "border-t": V() }],
			"border-w-r": [{ "border-r": V() }],
			"border-w-b": [{ "border-b": V() }],
			"border-w-l": [{ "border-l": V() }],
			"divide-x": [{ "divide-x": V() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": V() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...H(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...H(),
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
				...H(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				J,
				X,
				Y
			] }],
			"outline-w": [{ outline: [
				"",
				J,
				Ie,
				ke
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Ve,
				Fe
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Ve,
				Fe
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: V() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [J, ke] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": V() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Ve,
				Fe
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				J,
				X,
				Y
			] }],
			"mix-blend": [{ "mix-blend": [
				...te(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": te() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [J] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": U() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": U() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": U() }],
			"mask-image-t-to-pos": [{ "mask-t-to": U() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": U() }],
			"mask-image-r-to-pos": [{ "mask-r-to": U() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": U() }],
			"mask-image-b-to-pos": [{ "mask-b-to": U() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": U() }],
			"mask-image-l-to-pos": [{ "mask-l-to": U() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": U() }],
			"mask-image-x-to-pos": [{ "mask-x-to": U() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": U() }],
			"mask-image-y-to-pos": [{ "mask-y-to": U() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [X, Y] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": U() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": U() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [J] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": U() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": U() }],
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
			"mask-repeat": [{ mask: ee() }],
			"mask-size": [{ mask: R() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				X,
				Y
			] }],
			filter: [{ filter: [
				"",
				"none",
				X,
				Y
			] }],
			blur: [{ blur: W() }],
			brightness: [{ brightness: [
				J,
				X,
				Y
			] }],
			contrast: [{ contrast: [
				J,
				X,
				Y
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Ve,
				Fe
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				J,
				X,
				Y
			] }],
			"hue-rotate": [{ "hue-rotate": [
				J,
				X,
				Y
			] }],
			invert: [{ invert: [
				"",
				J,
				X,
				Y
			] }],
			saturate: [{ saturate: [
				J,
				X,
				Y
			] }],
			sepia: [{ sepia: [
				"",
				J,
				X,
				Y
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				X,
				Y
			] }],
			"backdrop-blur": [{ "backdrop-blur": W() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				J,
				X,
				Y
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				J,
				X,
				Y
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				J,
				X,
				Y
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				J,
				X,
				Y
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				J,
				X,
				Y
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				J,
				X,
				Y
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				J,
				X,
				Y
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				J,
				X,
				Y
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
				X,
				Y
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				J,
				"initial",
				X,
				Y
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				X,
				Y
			] }],
			delay: [{ delay: [
				J,
				X,
				Y
			] }],
			animate: [{ animate: [
				"none",
				v,
				X,
				Y
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				X,
				Y
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: G() }],
			"rotate-x": [{ "rotate-x": G() }],
			"rotate-y": [{ "rotate-y": G() }],
			"rotate-z": [{ "rotate-z": G() }],
			scale: [{ scale: ne() }],
			"scale-x": [{ "scale-x": ne() }],
			"scale-y": [{ "scale-y": ne() }],
			"scale-z": [{ "scale-z": ne() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: re() }],
			"skew-x": [{ "skew-x": re() }],
			"skew-y": [{ "skew-y": re() }],
			transform: [{ transform: [
				X,
				Y,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ie() }],
			"translate-x": [{ "translate-x": ie() }],
			"translate-y": [{ "translate-y": ie() }],
			"translate-z": [{ "translate-z": ie() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				ve,
				X,
				Y
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
				X,
				Y
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
				X,
				Y
			] }],
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				J,
				Ie,
				ke,
				Ae
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
function et(...e) {
	return $e(S(e));
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var tt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, nt = S, rt = (e, t) => (n) => {
	if (t?.variants == null) return nt(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = tt(t) || tt(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return nt(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}, it = rt(["antialiased", "text-foreground"], {
	variants: { variant: {
		display: "[font-family:var(--font-heading)] text-5xl font-bold leading-tight tracking-tight",
		h1: "[font-family:var(--font-heading)] text-4xl font-bold leading-tight tracking-tight",
		h2: "[font-family:var(--font-heading)] text-3xl font-semibold leading-tight tracking-tight",
		h3: "[font-family:var(--font-heading)] text-2xl font-semibold leading-snug",
		h4: "[font-family:var(--font-heading)] text-xl font-semibold leading-snug",
		h5: "[font-family:var(--font-heading)] text-lg font-medium leading-snug",
		h6: "[font-family:var(--font-heading)] text-base font-medium leading-snug",
		bodyLg: "[font-family:var(--font-body)] text-lg font-normal leading-8",
		bodyMd: "[font-family:var(--font-body)] text-base font-normal leading-7",
		bodySm: "[font-family:var(--font-body)] text-sm font-normal leading-6",
		labelLg: "[font-family:var(--font-body)] text-base font-semibold leading-6",
		labelMd: "[font-family:var(--font-body)] text-sm font-semibold leading-5",
		labelSm: "[font-family:var(--font-body)] text-xs font-semibold leading-4",
		caption: "[font-family:var(--font-body)] text-xs font-normal leading-5",
		overline: "[font-family:var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em]"
	} },
	defaultVariants: { variant: "bodyMd" }
}), at = /* @__PURE__ */ _(((e) => {
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
})), ot = /* @__PURE__ */ _(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case _: return "Fragment";
				case y: return "Profiler";
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
				o = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", ee[p + o] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", o, p, m, p), ee[p + o] = !0);
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
		var m = b("react"), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = m.react_stack_bottom_frame.bind(m, o)(), L = N(i(o)), ee = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		};
	})();
})), st = /* @__PURE__ */ _(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = at() : t.exports = ot();
})), Z = st();
function Q({ children: e, variant: t = "bodyMd", as: n = "p", className: r, ...i }) {
	return /* @__PURE__ */ (0, Z.jsx)(n, {
		className: et(it({ variant: t }), r),
		...i,
		children: e
	});
}
//#endregion
//#region src/foundations/icon/icon.constants.ts
var ct = {
	xs: "size-3",
	sm: "size-4",
	md: "size-5",
	lg: "size-6",
	xl: "size-8"
};
//#endregion
//#region src/foundations/icon/icon.tsx
function lt({ icon: e, size: t = "md", className: n, ariaHidden: r = !0 }) {
	return /* @__PURE__ */ (0, Z.jsx)(e, {
		className: et(ct[t], "shrink-0", n),
		strokeWidth: 2,
		"aria-hidden": r
	});
}
//#endregion
//#region src/foundations/theme/theme.constants.ts
var ut = [
	{
		name: "Brand",
		tokens: [
			{
				name: "Primary",
				variable: "--primary",
				className: "bg-primary"
			},
			{
				name: "Primary Foreground",
				variable: "--primary-foreground",
				className: "bg-primary-foreground"
			},
			{
				name: "Secondary",
				variable: "--secondary",
				className: "bg-secondary"
			},
			{
				name: "Secondary Foreground",
				variable: "--secondary-foreground",
				className: "bg-secondary-foreground"
			}
		]
	},
	{
		name: "Surface",
		tokens: [
			{
				name: "Background",
				variable: "--background",
				className: "bg-background"
			},
			{
				name: "Surface",
				variable: "--surface",
				className: "bg-surface"
			},
			{
				name: "Surface Elevated",
				variable: "--surface-elevated",
				className: "bg-surface-elevated"
			},
			{
				name: "Surface Subtle",
				variable: "--surface-subtle",
				className: "bg-surface-subtle"
			},
			{
				name: "Skeleton",
				variable: "--skeleton",
				className: "bg-skeleton"
			}
		]
	},
	{
		name: "Text",
		tokens: [
			{
				name: "Foreground",
				variable: "--foreground",
				className: "bg-foreground"
			},
			{
				name: "Text Primary",
				variable: "--text-primary",
				className: "bg-text-primary"
			},
			{
				name: "Text Secondary",
				variable: "--text-secondary",
				className: "bg-text-secondary"
			},
			{
				name: "Text Disabled",
				variable: "--text-disabled",
				className: "bg-text-disabled"
			}
		]
	},
	{
		name: "Feedback",
		tokens: [
			{
				name: "Success",
				variable: "--success",
				className: "bg-success"
			},
			{
				name: "Warning",
				variable: "--warning",
				className: "bg-warning"
			},
			{
				name: "Info",
				variable: "--info",
				className: "bg-info"
			},
			{
				name: "Danger",
				variable: "--danger",
				className: "bg-danger"
			}
		]
	},
	{
		name: "Border",
		tokens: [{
			name: "Border",
			variable: "--border",
			className: "bg-border"
		}]
	}
];
//#endregion
//#region src/foundations/theme/theme.tsx
function dt() {
	return /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "space-y-12",
		children: ut.map((e) => /* @__PURE__ */ (0, Z.jsxs)("section", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, Z.jsx)("h2", {
				className: "\n            text-xl\n            font-semibold\n            font-heading\n          ",
				children: e.name
			}), /* @__PURE__ */ (0, Z.jsx)("div", {
				className: "\n            grid\n            grid-cols-1\n            md:grid-cols-2\n            gap-4\n          ",
				children: e.tokens.map((e) => /* @__PURE__ */ (0, Z.jsxs)("div", {
					className: "\n                  border\n                  rounded-lg\n                  overflow-hidden\n                  bg-background\n                ",
					children: [/* @__PURE__ */ (0, Z.jsx)("div", { className: `
                    h-20
                    ${e.className}
                  ` }), /* @__PURE__ */ (0, Z.jsxs)("div", {
						className: "\n                  p-4\n                  space-y-1\n                ",
						children: [/* @__PURE__ */ (0, Z.jsx)("p", {
							className: "\n                    font-medium\n                  ",
							children: e.name
						}), /* @__PURE__ */ (0, Z.jsx)("code", {
							className: "\n                    text-sm\n                    text-text-secondary\n                  ",
							children: e.variable
						})]
					})]
				}, e.variable))
			})]
		}, e.name))
	});
}
//#endregion
//#region src/foundations/motion/motion.constants.ts
var ft = [
	{
		name: "duration-instant",
		value: "100ms",
		usage: "Micro interactions such as icon feedback and state changes."
	},
	{
		name: "duration-fast",
		value: "150ms",
		usage: "Hover states, focus states, and small component transitions."
	},
	{
		name: "duration-normal",
		value: "250ms",
		usage: "Default transition duration for most components."
	},
	{
		name: "duration-slow",
		value: "400ms",
		usage: "Large transitions such as drawers and modal movement."
	}
], pt = [
	{
		name: "ease-standard",
		value: "cubic-bezier(0.2, 0, 0, 1)",
		usage: "Default motion curve for interface transitions."
	},
	{
		name: "ease-in",
		value: "cubic-bezier(0.4, 0, 1, 1)",
		usage: "Used when elements leave the interface."
	},
	{
		name: "ease-out",
		value: "cubic-bezier(0, 0, 0.2, 1)",
		usage: "Used when elements enter the interface."
	}
];
//#endregion
//#region src/foundations/motion/motion.tsx
function mt() {
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "space-y-10",
		children: [/* @__PURE__ */ (0, Z.jsxs)("section", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, Z.jsx)("h2", {
				className: "text-xl font-semibold",
				children: "Duration"
			}), ft.map((e) => /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "\n                flex\n                items-center\n                gap-6\n              ",
				children: [/* @__PURE__ */ (0, Z.jsx)("div", {
					className: "\n                  size-12\n                  rounded-md\n                  bg-primary\n                  animate-pulse\n                ",
					style: { animationDuration: e.value }
				}), /* @__PURE__ */ (0, Z.jsxs)("div", { children: [
					/* @__PURE__ */ (0, Z.jsx)("p", {
						className: "font-medium",
						children: e.name
					}),
					/* @__PURE__ */ (0, Z.jsx)("p", {
						className: "\n                  text-sm\n                  text-text-secondary\n                ",
						children: e.value
					}),
					/* @__PURE__ */ (0, Z.jsx)("p", {
						className: "\n                  text-sm\n                  text-text-secondary\n                ",
						children: e.usage
					})
				] })]
			}, e.name))]
		}), /* @__PURE__ */ (0, Z.jsxs)("section", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, Z.jsx)("h2", {
				className: "text-xl font-semibold",
				children: "Easing"
			}), pt.map((e) => /* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, Z.jsx)("p", {
						className: "font-medium",
						children: e.name
					}),
					/* @__PURE__ */ (0, Z.jsx)("p", {
						className: "\n                text-sm\n                text-text-secondary\n              ",
						children: e.value
					}),
					/* @__PURE__ */ (0, Z.jsx)("p", {
						className: "\n                text-sm\n                text-text-secondary\n              ",
						children: e.usage
					})
				]
			}, e.name))]
		})]
	});
}
//#endregion
//#region src/foundations/radius/radius.constants.ts
var ht = [
	{
		name: "radius-sm",
		value: "4px",
		className: "rounded-sm",
		usage: "Small elements such as badges, tags, and compact controls."
	},
	{
		name: "radius-md",
		value: "8px",
		className: "rounded-md",
		usage: "Default radius used for buttons, inputs, and components."
	},
	{
		name: "radius-lg",
		value: "12px",
		className: "rounded-lg",
		usage: "Cards, dialogs, dropdowns, and elevated surfaces."
	},
	{
		name: "radius-xl",
		value: "16px",
		className: "rounded-xl",
		usage: "Large containers and prominent UI sections."
	},
	{
		name: "radius-full",
		value: "9999px",
		className: "rounded-full",
		usage: "Circular elements and pill-shaped components."
	}
];
//#endregion
//#region src/foundations/radius/radius.tsx
function gt() {
	return /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "\n      space-y-8\n    ",
		children: ht.map((e) => /* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "\n            space-y-3\n          ",
			children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "\n            flex\n            items-center\n            gap-6\n          ",
				children: [/* @__PURE__ */ (0, Z.jsx)("div", { className: `
                size-24
                bg-primary
                ${e.className}
              ` }), /* @__PURE__ */ (0, Z.jsxs)("div", { children: [/* @__PURE__ */ (0, Z.jsx)("p", {
					className: "\n                font-medium\n              ",
					children: e.name
				}), /* @__PURE__ */ (0, Z.jsx)("p", {
					className: "\n                text-sm\n                text-text-secondary\n              ",
					children: e.value
				})] })]
			}), /* @__PURE__ */ (0, Z.jsx)("p", {
				className: "\n            text-sm\n            text-text-secondary\n          ",
				children: e.usage
			})]
		}, e.name))
	});
}
//#endregion
//#region src/foundations/spacing/spacing.constants.ts
var _t = [
	{
		name: "spacing-xs",
		value: "4px",
		className: "p-[4px]",
		usage: "Small gaps between icons, labels, and compact UI elements."
	},
	{
		name: "spacing-sm",
		value: "8px",
		className: "p-[8px]",
		usage: "Spacing between closely related elements."
	},
	{
		name: "spacing-md",
		value: "16px",
		className: "p-[16px]",
		usage: "Default spacing used across components."
	},
	{
		name: "spacing-lg",
		value: "24px",
		className: "p-[24px]",
		usage: "Spacing between component groups and sections."
	},
	{
		name: "spacing-xl",
		value: "32px",
		className: "p-[32px]",
		usage: "Large layout spacing and page sections."
	}
];
//#endregion
//#region src/foundations/spacing/spacing.tsx
function vt() {
	return /* @__PURE__ */ (0, Z.jsx)("div", {
		className: "space-y-8",
		children: _t.map((e) => /* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "\n            space-y-3\n          ",
			children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "\n            flex\n            items-center\n            gap-4\n          ",
				children: [/* @__PURE__ */ (0, Z.jsx)("div", {
					className: `
                ${e.className}
                bg-primary
                rounded-md
              `,
					children: /* @__PURE__ */ (0, Z.jsx)("div", { className: "\n                  size-8\n                  bg-primary\n                  rounded-md\n                " })
				}), /* @__PURE__ */ (0, Z.jsxs)("div", { children: [/* @__PURE__ */ (0, Z.jsx)("p", {
					className: "\n                font-medium\n              ",
					children: e.name
				}), /* @__PURE__ */ (0, Z.jsx)("p", {
					className: "\n                text-sm\n                text-text-secondary\n              ",
					children: e.value
				})] })]
			}), /* @__PURE__ */ (0, Z.jsx)("p", {
				className: "\n            text-sm\n            text-text-secondary\n          ",
				children: e.usage
			})]
		}, e.name))
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var yt = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), bt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xt = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), St = (e) => {
	let t = xt(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, Ct = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, wt = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, Tt = n({}), Et = () => a(Tt), Dt = i(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: i, className: a = "", children: o, iconNode: s, ...c }, l) => {
	let { size: u = 24, strokeWidth: d = 2, absoluteStrokeWidth: f = !1, color: p = "currentColor", className: m = "" } = Et() ?? {}, h = i ?? f ? Number(n ?? d) * 24 / Number(t ?? u) : n ?? d;
	return r("svg", {
		ref: l,
		...Ct,
		width: t ?? u ?? Ct.width,
		height: t ?? u ?? Ct.height,
		stroke: e ?? p,
		strokeWidth: h,
		className: yt("lucide", m, a),
		...!o && !wt(c) && { "aria-hidden": "true" },
		...c
	}, [...s.map(([e, t]) => r(e, t)), ...Array.isArray(o) ? o : [o]]);
}), Ot = (e, t) => {
	let n = i(({ className: n, ...i }, a) => r(Dt, {
		ref: a,
		iconNode: t,
		className: yt(`lucide-${bt(St(e))}`, `lucide-${e}`, n),
		...i
	}));
	return n.displayName = St(e), n;
}, kt = Ot("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), At = Ot("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), jt = Ot("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), Mt = Ot("eye-off", [
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
]), Nt = Ot("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), Pt = Ot("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), Ft = Ot("user-round", [["circle", {
	cx: "12",
	cy: "8",
	r: "5",
	key: "1hypcn"
}], ["path", {
	d: "M20 21a8 8 0 0 0-16 0",
	key: "rfgkzh"
}]]), It = /* @__PURE__ */ _(((e) => {
	function t(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e._ = t;
})), Lt = /* @__PURE__ */ _(((e) => {
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
})), Rt = /* @__PURE__ */ _(((e, t) => {
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
})), zt = /* @__PURE__ */ _(((e) => {
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
})), Bt = /* @__PURE__ */ _(((e, t) => {
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
})), Vt = /* @__PURE__ */ _(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "getImgProps", {
		enumerable: !0,
		get: function() {
			return h;
		}
	});
	var t = Lt(), n = Rt(), r = zt(), i = Bt(), a = [
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
		let { imgConf: L, showAltText: ee, blurComplete: R, defaultLoader: z } = I, B, V = L || i.imageConfigDefault;
		if ("allSizes" in V) B = V;
		else {
			let e = [...V.deviceSizes, ...V.imageSizes].sort((e, t) => e - t), t = V.deviceSizes.sort((e, t) => e - t), n = V.qualities?.sort((e, t) => e - t);
			B = {
				...V,
				allSizes: e,
				deviceSizes: t,
				qualities: n
			};
		}
		if (z === void 0) throw Object.defineProperty(/* @__PURE__ */ Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
			value: "E163",
			enumerable: !1,
			configurable: !0
		});
		let H = F.loader || z;
		delete F.loader, delete F.srcSet;
		let te = "__next_img_default" in H;
		if (te) {
			if (B.loader === "custom") throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
				value: "E252",
				enumerable: !1,
				configurable: !0
			});
		} else {
			let e = H;
			H = (t) => {
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
		let U = "", W = f(y), G = f(b), ne, re;
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
			if (ne = t.blurWidth, re = t.blurHeight, D ||= t.blurDataURL, U = t.src, !x) {
				if (!W && !G) W = t.width, G = t.height;
				else if (W && !G) {
					let e = W / t.width;
					G = Math.round(t.height * e);
				} else if (!W && G) {
					let e = G / t.height;
					W = Math.round(t.width * e);
				}
			}
		}
		e = typeof e == "string" ? e : U;
		let ie = !p && !h && (g === "lazy" || g === void 0);
		(!e || e.startsWith("data:") || e.startsWith("blob:")) && (c = !0, ie = !1), B.unoptimized && (c = !0), te && !B.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (c = !0);
		let K = f(v);
		if (process.env.NODE_ENV !== "production") {
			if (B.output === "export" && te && !c) throw Object.defineProperty(/* @__PURE__ */ Error("Image Optimization using the default loader is not compatible with `{ output: 'export' }`.\n  Possible solutions:\n    - Remove `{ output: 'export' }` and run \"next start\" to run server mode including the Image Optimization API.\n    - Configure `{ images: { unoptimized: true } }` in `next.config.js` to disable the Image Optimization API.\n  Read more: https://nextjs.org/docs/messages/export-image-api"), "__NEXT_ERROR_CODE", {
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
				if (W === void 0) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
					value: "E451",
					enumerable: !1,
					configurable: !0
				});
				if (isNaN(W)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has invalid "width" property. Expected a numeric value in pixels but received "${y}".`), "__NEXT_ERROR_CODE", {
					value: "E66",
					enumerable: !1,
					configurable: !0
				});
				if (G === void 0) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
					value: "E397",
					enumerable: !1,
					configurable: !0
				});
				if (isNaN(G)) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has invalid "height" property. Expected a numeric value in pixels but received "${b}".`), "__NEXT_ERROR_CODE", {
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
			if (E !== "empty" && W && G && W * G < 1600 && (0, t.warnOnce)(`Image with src "${e}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`), K && B.qualities && !B.qualities.includes(K) && (0, t.warnOnce)(`Image with src "${e}" is using quality "${K}" which is not configured in images.qualities [${B.qualities.join(", ")}]. Please update your config to [${[...B.qualities, K].sort().join(", ")}].\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`), E === "blur" && !D) throw Object.defineProperty(/* @__PURE__ */ Error(`Image with src "${e}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
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
			if ("ref" in F && (0, t.warnOnce)(`Image with src "${e}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`), !c && !te) {
				let n = H({
					config: B,
					src: e,
					width: W || 400,
					quality: K || 75
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
		let ae = Object.assign(x ? {
			position: "absolute",
			height: "100%",
			width: "100%",
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			objectFit: j,
			objectPosition: M
		} : {}, ee ? {} : { color: "transparent" }, S), oe = !R && E !== "empty" ? E === "blur" ? `url("data:image/svg+xml;charset=utf-8,${(0, r.getImageBlurSvg)({
			widthInt: W,
			heightInt: G,
			blurWidth: ne,
			blurHeight: re,
			blurDataURL: D || "",
			objectFit: ae.objectFit
		})}")` : `url("${E}")` : null, se = o.includes(ae.objectFit) ? ae.objectFit === "fill" ? "100% 100%" : "cover" : ae.objectFit, ce = oe ? {
			backgroundSize: se,
			backgroundPosition: ae.objectPosition || "50% 50%",
			backgroundRepeat: "no-repeat",
			backgroundImage: oe
		} : {};
		process.env.NODE_ENV === "development" && ce.backgroundImage && E === "blur" && D?.startsWith("/") && (ce.backgroundImage = `url("${D}")`);
		let q = m({
			config: B,
			src: e,
			unoptimized: c,
			width: W,
			quality: K,
			sizes: n,
			loader: H
		}), le = ie ? "lazy" : g;
		if (process.env.NODE_ENV !== "production" && typeof window < "u") {
			let t;
			try {
				t = new URL(q.src);
			} catch {
				t = new URL(q.src, window.location.href);
			}
			u.set(t.href, {
				src: e,
				loading: le,
				placeholder: E
			});
		}
		return {
			props: {
				...F,
				loading: le,
				fetchPriority: O,
				width: W,
				height: G,
				decoding: k,
				className: _,
				style: {
					...ae,
					...ce
				},
				sizes: q.sizes,
				srcSet: q.srcSet,
				src: C || q.src
			},
			meta: {
				unoptimized: c,
				preload: h || p,
				placeholder: E,
				fill: x
			}
		};
	}
})), Ht = /* @__PURE__ */ _(((e) => {
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
})), Ut = /* @__PURE__ */ _(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "default", {
		enumerable: !0,
		get: function() {
			return a;
		}
	});
	var t = b("react"), n = typeof window > "u", r = n ? () => {} : t.useLayoutEffect, i = n ? () => {} : t.useEffect;
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
})), Wt = /* @__PURE__ */ _(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "HeadManagerContext", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (/* @__PURE__ */ It()._(b("react"))).default.createContext({});
	process.env.NODE_ENV !== "production" && (t.displayName = "HeadManagerContext");
})), Gt = /* @__PURE__ */ _(((e, t) => {
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
	var r = It(), i = Ht(), a = st(), o = /*#__PURE__*/ i._(b("react")), s = /*#__PURE__*/ r._(Ut()), c = Wt(), l = Lt();
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
})), Kt = /* @__PURE__ */ _(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "ImageConfigContext", {
		enumerable: !0,
		get: function() {
			return r;
		}
	});
	var t = /*#__PURE__*/ It()._(b("react")), n = Bt(), r = t.default.createContext(n.imageConfigDefault);
	process.env.NODE_ENV !== "production" && (r.displayName = "ImageConfigContext");
})), qt = /* @__PURE__ */ _(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "RouterContext", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (/* @__PURE__ */ It()._(b("react"))).default.createContext(null);
	process.env.NODE_ENV !== "production" && (t.displayName = "RouterContext");
})), Jt = /* @__PURE__ */ _(((e) => {
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
})), Yt = /* @__PURE__ */ _(((e, t) => {
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
					let L = [], ee = [], R = [], z = h, B, V = () => I.index === m - 1, H = I.peek = (t = 1) => e[I.index + t], te = I.advance = () => e[++I.index] || "", U = () => e.slice(I.index + 1), W = (e = "", t = 0) => {
						I.consumed += e, I.index += t;
					}, G = (e) => {
						I.output += e.output == null ? e.value : e.output, W(e.value);
					}, ne = () => {
						let e = 1;
						for (; H() === "!" && (H(2) !== "(" || H(3) === "?");) te(), I.start++, e++;
						return e % 2 == 0 ? !1 : (I.negated = !0, I.start++, !0);
					}, re = (e) => {
						I[e]++, R.push(e);
					}, ie = (e) => {
						I[e]--, R.pop();
					}, K = (e) => {
						if (z.type === "globstar") {
							let t = I.braces > 0 && (e.type === "comma" || e.type === "brace"), n = e.extglob === !0 || L.length && (e.type === "pipe" || e.type === "paren");
							e.type !== "slash" && e.type !== "paren" && !t && !n && (I.output = I.output.slice(0, -z.output.length), z.type = "star", z.value = "*", z.output = F, I.output += z.output);
						}
						if (L.length && e.type !== "paren" && (L[L.length - 1].inner += e.value), (e.value || e.output) && G(e), z && z.type === "text" && e.type === "text") {
							z.output = (z.output || z.value) + e.value, z.value += e.value;
							return;
						}
						e.prev = z, g.push(e), z = e;
					}, ae = (e, t) => {
						let r = {
							...y[t],
							conditions: 1,
							inner: ""
						};
						r.prev = z, r.parens = I.parens, r.output = I.output;
						let i = (n.capture ? "(" : "") + r.open;
						re("parens"), K({
							type: e,
							value: t,
							output: I.output ? "" : C
						}), K({
							type: "paren",
							extglob: !0,
							value: te(),
							output: i
						}), L.push(r);
					}, oe = (e) => {
						let r = e.close + (n.capture ? ")" : ""), i;
						if (e.type === "negate") {
							let a = F;
							e.inner && e.inner.length > 1 && e.inner.includes("/") && (a = M(n)), (a !== F || V() || /^\)+$/.test(U())) && (r = e.close = `)$))${a}`), e.inner.includes("*") && (i = U()) && /^\.[^\\/.]+$/.test(i) && (r = e.close = `)${f(i, {
								...t,
								fastpaths: !1
							}).output})${a})`), e.prev.type === "bos" && (I.negatedExtglob = !0);
						}
						K({
							type: "paren",
							extglob: !0,
							value: B,
							output: r
						}), ie("parens");
					};
					if (n.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(e)) {
						let r = !1, a = e.replace(c, ((e, t, n, i, a, o) => i === "\\" ? (r = !0, e) : i === "?" ? t ? t + i + (a ? O.repeat(a.length) : "") : o === 0 ? P + (a ? O.repeat(a.length) : "") : O.repeat(n.length) : i === "." ? b.repeat(n.length) : i === "*" ? t ? t + i + (a ? F : "") : F : t ? e : `\\${e}`));
						return r === !0 && (a = n.unescape === !0 ? a.replace(/\\/g, "") : a.replace(/\\+/g, ((e) => e.length % 2 == 0 ? "\\\\" : e ? "\\" : ""))), a === e && n.contains === !0 ? (I.output = e, I) : (I.output = i.wrapOutput(a, I, t), I);
					}
					for (; !V();) {
						if (B = te(), B === "\0") continue;
						if (B === "\\") {
							let e = H();
							if (e === "/" && n.bash !== !0 || e === "." || e === ";") continue;
							if (!e) {
								B += "\\", K({
									type: "text",
									value: B
								});
								continue;
							}
							let t = /^\\+/.exec(U()), r = 0;
							if (t && t[0].length > 2 && (r = t[0].length, I.index += r, r % 2 != 0 && (B += "\\")), n.unescape === !0 ? B = te() : B += te(), I.brackets === 0) {
								K({
									type: "text",
									value: B
								});
								continue;
							}
						}
						if (I.brackets > 0 && (B !== "]" || z.value === "[" || z.value === "[^")) {
							if (n.posix !== !1 && B === ":") {
								let e = z.value.slice(1);
								if (e.includes("[") && (z.posix = !0, e.includes(":"))) {
									let e = z.value.lastIndexOf("["), t = z.value.slice(0, e), n = z.value.slice(e + 2), r = o[n];
									if (r) {
										z.value = t + r, I.backtrack = !0, te(), !h.output && g.indexOf(z) === 1 && (h.output = C);
										continue;
									}
								}
							}
							(B === "[" && H() !== ":" || B === "-" && H() === "]") && (B = `\\${B}`), B === "]" && (z.value === "[" || z.value === "[^") && (B = `\\${B}`), n.posix === !0 && B === "!" && z.value === "[" && (B = "^"), z.value += B, G({ value: B });
							continue;
						}
						if (I.quotes === 1 && B !== "\"") {
							B = i.escapeRegex(B), z.value += B, G({ value: B });
							continue;
						}
						if (B === "\"") {
							I.quotes = I.quotes === 1 ? 0 : 1, n.keepQuotes === !0 && K({
								type: "text",
								value: B
							});
							continue;
						}
						if (B === "(") {
							re("parens"), K({
								type: "paren",
								value: B
							});
							continue;
						}
						if (B === ")") {
							if (I.parens === 0 && n.strictBrackets === !0) throw SyntaxError(d("opening", "("));
							let e = L[L.length - 1];
							if (e && I.parens === e.parens + 1) {
								oe(L.pop());
								continue;
							}
							K({
								type: "paren",
								value: B,
								output: I.parens ? ")" : "\\)"
							}), ie("parens");
							continue;
						}
						if (B === "[") {
							if (n.nobracket === !0 || !U().includes("]")) {
								if (n.nobracket !== !0 && n.strictBrackets === !0) throw SyntaxError(d("closing", "]"));
								B = `\\${B}`;
							} else re("brackets");
							K({
								type: "bracket",
								value: B
							});
							continue;
						}
						if (B === "]") {
							if (n.nobracket === !0 || z && z.type === "bracket" && z.value.length === 1) {
								K({
									type: "text",
									value: B,
									output: `\\${B}`
								});
								continue;
							}
							if (I.brackets === 0) {
								if (n.strictBrackets === !0) throw SyntaxError(d("opening", "["));
								K({
									type: "text",
									value: B,
									output: `\\${B}`
								});
								continue;
							}
							ie("brackets");
							let e = z.value.slice(1);
							if (z.posix !== !0 && e[0] === "^" && !e.includes("/") && (B = `/${B}`), z.value += B, G({ value: B }), n.literalBrackets === !1 || i.hasRegexChars(e)) continue;
							let t = i.escapeRegex(z.value);
							if (I.output = I.output.slice(0, -z.value.length), n.literalBrackets === !0) {
								I.output += t, z.value = t;
								continue;
							}
							z.value = `(${_}${t}|${z.value})`, I.output += z.value;
							continue;
						}
						if (B === "{" && n.nobrace !== !0) {
							re("braces");
							let e = {
								type: "brace",
								value: B,
								output: "(",
								outputIndex: I.output.length,
								tokensIndex: I.tokens.length
							};
							ee.push(e), K(e);
							continue;
						}
						if (B === "}") {
							let e = ee[ee.length - 1];
							if (n.nobrace === !0 || !e) {
								K({
									type: "text",
									value: B,
									output: B
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
								e.value = e.output = "\\{", B = t = "\\}", I.output = n;
								for (let e of r) I.output += e.output || e.value;
							}
							K({
								type: "brace",
								value: B,
								output: t
							}), ie("braces"), ee.pop();
							continue;
						}
						if (B === "|") {
							L.length > 0 && L[L.length - 1].conditions++, K({
								type: "text",
								value: B
							});
							continue;
						}
						if (B === ",") {
							let e = B, t = ee[ee.length - 1];
							t && R[R.length - 1] === "braces" && (t.comma = !0, e = "|"), K({
								type: "comma",
								value: B,
								output: e
							});
							continue;
						}
						if (B === "/") {
							if (z.type === "dot" && I.index === I.start + 1) {
								I.start = I.index + 1, I.consumed = "", I.output = "", g.pop(), z = h;
								continue;
							}
							K({
								type: "slash",
								value: B,
								output: S
							});
							continue;
						}
						if (B === ".") {
							if (I.braces > 0 && z.type === "dot") {
								z.value === "." && (z.output = b);
								let e = ee[ee.length - 1];
								z.type = "dots", z.output += B, z.value += B, e.dots = !0;
								continue;
							}
							if (I.braces + I.parens === 0 && z.type !== "bos" && z.type !== "slash") {
								K({
									type: "text",
									value: B,
									output: b
								});
								continue;
							}
							K({
								type: "dot",
								value: B,
								output: b
							});
							continue;
						}
						if (B === "?") {
							if (!(z && z.value === "(") && n.noextglob !== !0 && H() === "(" && H(2) !== "?") {
								ae("qmark", B);
								continue;
							}
							if (z && z.type === "paren") {
								let e = H(), t = B;
								(z.value === "(" && !/[!=<:]/.test(e) || e === "<" && !/<([!=]|\w+>)/.test(U())) && (t = `\\${B}`), K({
									type: "text",
									value: B,
									output: t
								});
								continue;
							}
							if (n.dot !== !0 && (z.type === "slash" || z.type === "bos")) {
								K({
									type: "qmark",
									value: B,
									output: k
								});
								continue;
							}
							K({
								type: "qmark",
								value: B,
								output: O
							});
							continue;
						}
						if (B === "!") {
							if (n.noextglob !== !0 && H() === "(" && (H(2) !== "?" || !/[!=<:]/.test(H(3)))) {
								ae("negate", B);
								continue;
							}
							if (n.nonegate !== !0 && I.index === 0) {
								ne();
								continue;
							}
						}
						if (B === "+") {
							if (n.noextglob !== !0 && H() === "(" && H(2) !== "?") {
								ae("plus", B);
								continue;
							}
							if (z && z.value === "(" || n.regex === !1) {
								K({
									type: "plus",
									value: B,
									output: x
								});
								continue;
							}
							if (z && (z.type === "bracket" || z.type === "paren" || z.type === "brace") || I.parens > 0) {
								K({
									type: "plus",
									value: B
								});
								continue;
							}
							K({
								type: "plus",
								value: x
							});
							continue;
						}
						if (B === "@") {
							if (n.noextglob !== !0 && H() === "(" && H(2) !== "?") {
								K({
									type: "at",
									extglob: !0,
									value: B,
									output: ""
								});
								continue;
							}
							K({
								type: "text",
								value: B
							});
							continue;
						}
						if (B !== "*") {
							(B === "$" || B === "^") && (B = `\\${B}`);
							let e = s.exec(U());
							e && (B += e[0], I.index += e[0].length), K({
								type: "text",
								value: B
							});
							continue;
						}
						if (z && (z.type === "globstar" || z.star === !0)) {
							z.type = "star", z.star = !0, z.value += B, z.output = F, I.backtrack = !0, I.globstar = !0, W(B);
							continue;
						}
						let t = U();
						if (n.noextglob !== !0 && /^\([^?]/.test(t)) {
							ae("star", B);
							continue;
						}
						if (z.type === "star") {
							if (n.noglobstar === !0) {
								W(B);
								continue;
							}
							let r = z.prev, i = r.prev, a = r.type === "slash" || r.type === "bos", o = i && (i.type === "star" || i.type === "globstar");
							if (n.bash === !0 && (!a || t[0] && t[0] !== "/")) {
								K({
									type: "star",
									value: B,
									output: ""
								});
								continue;
							}
							let s = I.braces > 0 && (r.type === "comma" || r.type === "brace"), c = L.length && (r.type === "pipe" || r.type === "paren");
							if (!a && r.type !== "paren" && !s && !c) {
								K({
									type: "star",
									value: B,
									output: ""
								});
								continue;
							}
							for (; t.slice(0, 3) === "/**";) {
								let n = e[I.index + 4];
								if (n && n !== "/") break;
								t = t.slice(3), W("/**", 3);
							}
							if (r.type === "bos" && V()) {
								z.type = "globstar", z.value += B, z.output = M(n), I.output = z.output, I.globstar = !0, W(B);
								continue;
							}
							if (r.type === "slash" && r.prev.type !== "bos" && !o && V()) {
								I.output = I.output.slice(0, -(r.output + z.output).length), r.output = `(?:${r.output}`, z.type = "globstar", z.output = M(n) + (n.strictSlashes ? ")" : "|$)"), z.value += B, I.globstar = !0, I.output += r.output + z.output, W(B);
								continue;
							}
							if (r.type === "slash" && r.prev.type !== "bos" && t[0] === "/") {
								let e = t[1] === void 0 ? "" : "|$";
								I.output = I.output.slice(0, -(r.output + z.output).length), r.output = `(?:${r.output}`, z.type = "globstar", z.output = `${M(n)}${S}|${S}${e})`, z.value += B, I.output += r.output + z.output, I.globstar = !0, W(B + te()), K({
									type: "slash",
									value: "/",
									output: ""
								});
								continue;
							}
							if (r.type === "bos" && t[0] === "/") {
								z.type = "globstar", z.value += B, z.output = `(?:^|${S}|${M(n)}${S})`, I.output = z.output, I.globstar = !0, W(B + te()), K({
									type: "slash",
									value: "/",
									output: ""
								});
								continue;
							}
							I.output = I.output.slice(0, -z.output.length), z.type = "globstar", z.output = M(n), z.value += B, I.output += z.output, I.globstar = !0, W(B);
							continue;
						}
						let r = {
							type: "star",
							value: B,
							output: F
						};
						if (n.bash === !0) {
							r.output = ".*?", (z.type === "bos" || z.type === "slash") && (r.output = N + r.output), K(r);
							continue;
						}
						if (z && (z.type === "bracket" || z.type === "paren") && n.regex === !0) {
							r.output = B, K(r);
							continue;
						}
						(I.index === I.start || z.type === "slash" || z.type === "dot") && (z.type === "dot" ? (I.output += E, z.output += E) : n.dot === !0 ? (I.output += D, z.output += D) : (I.output += N, z.output += N), H() !== "*" && (I.output += C, z.output += C)), K(r);
					}
					for (; I.brackets > 0;) {
						if (n.strictBrackets === !0) throw SyntaxError(d("closing", "]"));
						I.output = i.escapeLast(I.output, "["), ie("brackets");
					}
					for (; I.parens > 0;) {
						if (n.strictBrackets === !0) throw SyntaxError(d("closing", ")"));
						I.output = i.escapeLast(I.output, "("), ie("parens");
					}
					for (; I.braces > 0;) {
						if (n.strictBrackets === !0) throw SyntaxError(d("closing", "}"));
						I.output = i.escapeLast(I.output, "{"), ie("braces");
					}
					if (n.strictSlashes !== !0 && (z.type === "star" || z.type === "bracket") && K({
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
					let n = t || {}, x = e.length - 1, S = n.parts === !0 || n.scanToEnd === !0, C = [], w = [], T = [], E = e, D = -1, O = 0, k = 0, A = !1, j = !1, M = !1, N = !1, P = !1, F = !1, I = !1, L = !1, ee = !1, R = !1, z = 0, B, V, H = {
						value: "",
						depth: 0,
						isGlob: !1
					}, te = () => D >= x, U = () => E.charCodeAt(D + 1), W = () => (B = V, E.charCodeAt(++D));
					for (; D < x;) {
						V = W();
						let e;
						if (V === o) {
							I = H.backslashes = !0, V = W(), V === d && (F = !0);
							continue;
						}
						if (F === !0 || V === d) {
							for (z++; te() !== !0 && (V = W());) {
								if (V === o) {
									I = H.backslashes = !0, W();
									continue;
								}
								if (V === d) {
									z++;
									continue;
								}
								if (F !== !0 && V === c && (V = W()) === c) {
									if (A = H.isBrace = !0, M = H.isGlob = !0, R = !0, S === !0) continue;
									break;
								}
								if (F !== !0 && V === s) {
									if (A = H.isBrace = !0, M = H.isGlob = !0, R = !0, S === !0) continue;
									break;
								}
								if (V === g && (z--, z === 0)) {
									F = !1, A = H.isBrace = !0, R = !0;
									break;
								}
							}
							if (S === !0) continue;
							break;
						}
						if (V === u) {
							if (C.push(D), w.push(H), H = {
								value: "",
								depth: 0,
								isGlob: !1
							}, R === !0) continue;
							if (B === c && D === O + 1) {
								O += 2;
								continue;
							}
							k = D + 1;
							continue;
						}
						if (n.noext !== !0 && (V === m || V === a || V === i || V === h || V === l) && U() === f) {
							if (M = H.isGlob = !0, N = H.isExtglob = !0, R = !0, V === l && D === O && (ee = !0), S === !0) {
								for (; te() !== !0 && (V = W());) {
									if (V === o) {
										I = H.backslashes = !0, V = W();
										continue;
									}
									if (V === _) {
										M = H.isGlob = !0, R = !0;
										break;
									}
								}
								continue;
							}
							break;
						}
						if (V === i) {
							if (B === i && (P = H.isGlobstar = !0), M = H.isGlob = !0, R = !0, S === !0) continue;
							break;
						}
						if (V === h) {
							if (M = H.isGlob = !0, R = !0, S === !0) continue;
							break;
						}
						if (V === p) {
							for (; te() !== !0 && (e = W());) {
								if (e === o) {
									I = H.backslashes = !0, W();
									continue;
								}
								if (e === v) {
									j = H.isBracket = !0, M = H.isGlob = !0, R = !0;
									break;
								}
							}
							if (S === !0) continue;
							break;
						}
						if (n.nonegate !== !0 && V === l && D === O) {
							L = H.negated = !0, O++;
							continue;
						}
						if (n.noparen !== !0 && V === f) {
							if (M = H.isGlob = !0, S === !0) {
								for (; te() !== !0 && (V = W());) {
									if (V === f) {
										I = H.backslashes = !0, V = W();
										continue;
									}
									if (V === _) {
										R = !0;
										break;
									}
								}
								continue;
							}
							break;
						}
						if (M === !0) {
							if (R = !0, S === !0) continue;
							break;
						}
					}
					n.noext === !0 && (N = !1, M = !1);
					let G = E, ne = "", re = "";
					O > 0 && (ne = E.slice(0, O), E = E.slice(O), k -= O), G && M === !0 && k > 0 ? (G = E.slice(0, k), re = E.slice(k)) : M === !0 ? (G = "", re = E) : G = E, G && G !== "" && G !== "/" && G !== E && y(G.charCodeAt(G.length - 1)) && (G = G.slice(0, -1)), n.unescape === !0 && (re &&= r.removeBackslashes(re), G && I === !0 && (G = r.removeBackslashes(G)));
					let ie = {
						prefix: ne,
						input: e,
						start: O,
						base: G,
						glob: re,
						isBrace: A,
						isBracket: j,
						isGlob: M,
						isExtglob: N,
						isGlobstar: P,
						negated: L,
						negatedExtglob: ee
					};
					if (n.tokens === !0 && (ie.maxDepth = 0, y(V) || w.push(H), ie.tokens = w), n.parts === !0 || n.tokens === !0) {
						let t;
						for (let r = 0; r < C.length; r++) {
							let i = t ? t + 1 : O, a = C[r], o = e.slice(i, a);
							n.tokens && (r === 0 && O !== 0 ? (w[r].isPrefix = !0, w[r].value = ne) : w[r].value = o, b(w[r]), ie.maxDepth += w[r].depth), (r !== 0 || o !== "") && T.push(o), t = a;
						}
						if (t && t + 1 < e.length) {
							let r = e.slice(t + 1);
							T.push(r), n.tokens && (w[w.length - 1].value = r, b(w[w.length - 1]), ie.maxDepth += w[w.length - 1].depth);
						}
						ie.slashes = C, ie.parts = T;
					}
					return ie;
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
})), Xt = /* @__PURE__ */ _(((e, t) => {
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
	var r = Yt();
	function i(e, t) {
		return !(e.search !== void 0 && e.search !== t.search || !(0, r.makeRe)(e.pathname ?? "**", { dot: !0 }).test(t.pathname));
	}
	function a(e, t) {
		if (!e) return !0;
		let n = new URL(t, "http://n");
		return e.some((e) => i(e, n));
	}
})), Zt = /* @__PURE__ */ _(((e, t) => {
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
	var r = Yt();
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
})), Qt = /* @__PURE__ */ _(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "default", {
		enumerable: !0,
		get: function() {
			return i;
		}
	});
	var t = Jt(), n = Rt();
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
				let { hasLocalMatch: t } = Xt();
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
					let { hasRemoteMatch: n } = Zt();
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
})), $t = /* @__PURE__ */ _(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "useMergedRef", {
		enumerable: !0,
		get: function() {
			return r;
		}
	});
	var n = b("react");
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
})), en = /* @__PURE__ */ _(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "Image", {
		enumerable: !0,
		get: function() {
			return x;
		}
	});
	var n = It(), r = Ht(), i = st(), a = /*#__PURE__*/ r._(b("react")), o = /*#__PURE__*/ n._(b("react-dom")), s = /*#__PURE__*/ n._(Gt()), c = Vt(), l = Bt(), u = Kt(), d = Lt(), f = qt(), p = /*#__PURE__*/ n._(Qt()), m = $t(), h = process.env.__NEXT_IMAGE_OPTS;
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
	function y({ isAppRouter: e, imgAttributes: t }) {
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
		let [_, b] = (0, a.useState)(!1), [x, S] = (0, a.useState)(!1), { props: C, meta: w } = (0, c.getImgProps)(e, {
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
			setBlurComplete: b,
			setShowAltText: S,
			sizesInput: e.sizes,
			ref: t
		}), w.preload ? /*#__PURE__*/ (0, i.jsx)(y, {
			isAppRouter: n,
			imgAttributes: C
		}) : null] });
	});
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), tn = /* @__PURE__ */ _(((e, t) => {
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
	var r = It(), i = Vt(), a = en(), o = /*#__PURE__*/ r._(Qt());
	function s(e) {
		let { props: t } = (0, i.getImgProps)(e, {
			defaultLoader: o.default,
			imgConf: process.env.__NEXT_IMAGE_OPTS
		});
		for (let [e, n] of Object.entries(t)) n === void 0 && delete t[e];
		return { props: t };
	}
	var c = a.Image;
})), nn = /* @__PURE__ */ _(((e, t) => {
	t.exports = tn();
})), rn = {
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
}, an = {
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
		className: "bg-danger"
	},
	offline: {
		label: "Offline",
		className: "bg-text-disabled"
	}
}, on = /* @__PURE__ */ y(nn(), 1), sn = rt([
	"relative",
	"flex",
	"items-center",
	"justify-center",
	"overflow-hidden",
	"rounded-full",
	"bg-surface-subtle",
	"text-text-secondary"
], {
	variants: { size: {
		sm: rn.sm.avatar,
		md: rn.md.avatar,
		lg: rn.lg.avatar,
		xl: rn.xl.avatar
	} },
	defaultVariants: { size: "md" }
}), cn = rt([
	"absolute",
	"bottom-0",
	"right-0",
	"rounded-full",
	"border-2",
	"border-background"
], { variants: { status: {
	online: "bg-success",
	away: "bg-warning",
	busy: "bg-danger",
	offline: "bg-text-disabled"
} } });
function ln(e) {
	return e ? e.split(" ").map((e) => e[0]).join("").slice(0, 2).toUpperCase() : null;
}
var un = i(({ size: e = "md", src: t, alt: n = "Avatar", name: r, fallback: i, status: a, className: o, ...s }, c) => {
	let l = ln(r);
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		ref: c,
		className: "relative inline-flex",
		...s,
		children: [/* @__PURE__ */ (0, Z.jsx)("div", {
			className: et(sn({ size: e }), o),
			children: t ? /* @__PURE__ */ (0, Z.jsx)(on.default, {
				src: t,
				alt: n,
				className: "size-full object-cover"
			}) : l ? /* @__PURE__ */ (0, Z.jsx)(Q, {
				as: "span",
				variant: "labelMd",
				children: l
			}) : i || /* @__PURE__ */ (0, Z.jsx)(Ft, {
				"aria-hidden": "true",
				className: "size-1/2"
			})
		}), a && /* @__PURE__ */ (0, Z.jsx)("span", {
			"aria-label": an[a].label,
			className: et(cn({ status: a }), rn[e ?? "md"].indicator)
		})]
	});
});
un.displayName = "Avatar";
//#endregion
//#region src/components/atoms/button/button.constants.ts
var dn = {
	sm: {
		height: "h-10",
		padding: "px-4",
		label: "labelMd",
		icon: "size-4"
	},
	lg: {
		height: "h-12",
		padding: "px-6",
		label: "labelLg",
		icon: "size-5"
	}
}, fn = rt([
	"animate-spin",
	"rounded-full",
	"border-2",
	"border-current",
	"border-t-transparent"
], {
	variants: {
		size: {
			sm: "size-4",
			md: "size-6",
			lg: "size-10"
		},
		variant: {
			default: "text-primary",
			muted: "text-text-disabled",
			inverse: "text-foreground"
		}
	},
	defaultVariants: {
		size: "md",
		variant: "default"
	}
}), pn = ({ className: e, size: t = "md", variant: n = "default", ariaLabel: r = "Loading", ...i }) => /* @__PURE__ */ (0, Z.jsx)("div", {
	role: "status",
	"aria-live": "polite",
	className: et(fn({
		size: t,
		variant: n
	}), e),
	...i,
	children: /* @__PURE__ */ (0, Z.jsx)("span", {
		className: "sr-only",
		children: r
	})
}), mn = rt([
	"cursor-pointer",
	"transition-colors",
	"duration-200",
	"ease-out",
	"inline-flex",
	"items-center",
	"justify-center",
	"gap-2",
	"rounded-md",
	"transition-all",
	"focus-visible:outline",
	"focus-visible:outline-2",
	"focus-visible:outline-primary",
	"focus-visible:outline-offset-2",
	"disabled:pointer-events-none",
	"disabled:opacity-50",
	"active:scale-95"
], {
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
			success: "bg-success text-success-foreground hover:bg-success-hover",
			danger: "bg-danger text-danger-foreground hover:bg-danger-hover",
			text: "text-text-primary hover:bg-surface-subtle",
			link: "text-primary underline underline-offset-4"
		},
		size: {
			sm: `

					${dn.sm.height}

					${dn.sm.padding}

					[&_svg]:${dn.sm.icon}

				`,
			lg: `

					${dn.lg.height}

					${dn.lg.padding}

					[&_svg]:${dn.lg.icon}

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
function hn({ variant: e, size: t = "lg", width: n, icon: r, iconOnly: i, iconPosition: a = "left", loading: o = !1, children: s, className: c, disabled: l, ...u }) {
	let d = t === "lg" ? "labelLg" : "labelMd";
	return /* @__PURE__ */ (0, Z.jsxs)("button", {
		className: et(mn({
			variant: e,
			size: t,
			width: n
		}), c),
		disabled: l || o,
		"aria-busy": o,
		...u,
		children: [o && /* @__PURE__ */ (0, Z.jsx)(pn, {
			size: "sm",
			variant: e === "primary" ? "inverse" : "default"
		}), i ? r : /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [
			r && a === "left" && r,
			/* @__PURE__ */ (0, Z.jsx)(Q, {
				as: "span",
				variant: d,
				className: "text-inherit",
				children: s
			}),
			r && a === "right" && r
		] })]
	});
}
//#endregion
//#region src/components/atoms/checkbox/checkbox.constants.ts
var gn = {
	box: "size-5",
	icon: "size-4",
	gap: "gap-spacing-md",
	hitArea: "min-h-11 min-w-11"
}, _n = rt([
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
	"disabled:bg-surface-subtle",
	"disabled:border-border",
	"disabled:text-text-disabled"
], {
	variants: { variant: {
		default: "border-border",
		error: "border-danger"
	} },
	defaultVariants: { variant: "default" }
});
function vn({ label: e, description: t, required: n, errorMessage: r, indeterminate: i = !1, variant: a, className: s, disabled: l, ...u }) {
	let d = c(null);
	return o(() => {
		d.current && (d.current.indeterminate = i);
	}, [i]), /* @__PURE__ */ (0, Z.jsxs)("label", {
		"aria-disabled": l,
		className: et("flex", t ? "items-start" : "items-center", "select-none", "cursor-pointer", gn.gap, l && "cursor-not-allowed"),
		children: [/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: et("relative", "flex", "items-center", "justify-center", gn.hitArea),
			children: [
				/* @__PURE__ */ (0, Z.jsx)("input", {
					ref: d,
					type: "checkbox",
					className: et(_n({ variant: a }), gn.box, s),
					disabled: l,
					...u
				}),
				/* @__PURE__ */ (0, Z.jsx)(lt, {
					icon: kt,
					size: "sm",
					className: et("absolute", "hidden", "pointer-events-none", "text-primary-foreground", gn.icon, "peer-checked:block")
				}),
				/* @__PURE__ */ (0, Z.jsx)(lt, {
					icon: Pt,
					size: "sm",
					className: et("absolute", "hidden", "pointer-events-none", "text-primary-foreground", gn.icon, "peer-indeterminate:block")
				})
			]
		}), /* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "flex flex-col gap-spacing-xs",
			children: [
				e && /* @__PURE__ */ (0, Z.jsxs)(Q, {
					as: "span",
					variant: "labelMd",
					className: "text-text-primary",
					children: [e, n && /* @__PURE__ */ (0, Z.jsx)(Q, {
						as: "span",
						variant: "labelMd",
						className: "text-danger spacing-xs",
						children: "*"
					})]
				}),
				t && /* @__PURE__ */ (0, Z.jsx)(Q, {
					as: "p",
					variant: "bodySm",
					className: "text-text-secondary",
					children: t
				}),
				r && /* @__PURE__ */ (0, Z.jsx)(Q, {
					as: "p",
					variant: "bodySm",
					className: "text-danger",
					children: r
				})
			]
		})]
	});
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
var yn = Object.defineProperty, bn = (e, t) => yn(e, "name", {
	value: t,
	configurable: !0
});
function xn(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
bn(xn, "clamp");
//#endregion
//#region node_modules/@radix-ui/primitive/dist/index.mjs
var Sn = Object.defineProperty, Cn = (e, t) => Sn(e, "name", {
	value: t,
	configurable: !0
}), wn = !!(typeof window < "u" && window.document && window.document.createElement);
function Tn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ Cn(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
Cn(Tn, "composeEventHandlers");
function En(e) {
	if (!wn) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
Cn(En, "getOwnerWindow");
function Dn(e) {
	if (!wn) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
Cn(Dn, "getOwnerDocument");
function On(e, t = !1) {
	let { activeElement: n } = Dn(e);
	if (!n?.nodeName) return null;
	if (kn(n) && n.contentDocument) return On(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = Dn(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
Cn(On, "getActiveElement");
function kn(e) {
	return e.tagName === "IFRAME";
}
Cn(kn, "isFrame");
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
var An = Object.defineProperty, jn = (e, t) => An(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Mn(t, n) {
	let r = e.createContext(n);
	r.displayName = t + "Context";
	let i = /* @__PURE__ */ jn((t) => {
		let { children: n, ...i } = t, a = e.useMemo(() => i, Object.values(i));
		return /* @__PURE__ */ (0, Z.jsx)(r.Provider, {
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
	return jn(a, "useContext"), [i, a];
}
jn(Mn, "createContext");
// @__NO_SIDE_EFFECTS__
function Nn(t, n = []) {
	let r = [];
	function i(n, i) {
		let a = e.createContext(i);
		a.displayName = n + "Context";
		let o = r.length;
		r = [...r, i];
		let s = /* @__PURE__ */ jn((n) => {
			let { scope: r, children: i, ...s } = n, c = r?.[t]?.[o] || a, l = e.useMemo(() => s, Object.values(s));
			return /* @__PURE__ */ (0, Z.jsx)(c.Provider, {
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
		return jn(c, "useContext"), [s, c];
	}
	jn(i, "createContext");
	let a = /* @__PURE__ */ jn(() => {
		let n = r.map((t) => e.createContext(t));
		return /* @__PURE__ */ jn(function(r) {
			let i = r?.[t] || n;
			return e.useMemo(() => ({ [`__scope${t}`]: {
				...r,
				[t]: i
			} }), [r, i]);
		}, "useScope");
	}, "createScope");
	return a.scopeName = t, [i, Pn(a, ...n)];
}
jn(Nn, "createContextScope");
function Pn(...t) {
	let n = t[0];
	if (t.length === 1) return n;
	let r = /* @__PURE__ */ jn(() => {
		let r = t.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ jn(function(t) {
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
jn(Pn, "composeContextScopes");
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var Fn = Object.defineProperty, In = (e, t) => Fn(e, "name", {
	value: t,
	configurable: !0
});
function Ln(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
In(Ln, "setRef");
function Rn(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Ln(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Ln(e[t], null);
			}
		};
	};
}
In(Rn, "composeRefs");
function zn(...t) {
	return e.useCallback(Rn(...t), t);
}
In(zn, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
var Bn = Object.defineProperty, Vn = (e, t) => Bn(e, "name", {
	value: t,
	configurable: !0
}), Hn = /* @__PURE__ */ Vn(((e, t) => {
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
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = Un(a, i));
	}
	return {
		...e,
		...n
	};
}), "mergeProps");
function Un(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
Vn(Un, "concatAriaDescribedby");
var Wn = e.createContext(Hn);
Wn.displayName = "SlotContext";
// @__NO_SIDE_EFFECTS__
function Gn(t) {
	let n = e.forwardRef((n, r) => {
		let i = e.useContext(Wn), { children: a, mergeProps: o = i, ...s } = n, c = null, l = !1, u = [];
		Qn(a) && typeof nr == "function" && (a = nr(a._payload)), e.Children.forEach(a, (e) => {
			if (Xn(e)) {
				l = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				Qn(n) && typeof nr == "function" && (n = nr(n._payload)), c = Jn(t, n), u.push(c?.props?.children);
			} else u.push(e);
		}), c ? c = e.cloneElement(c, void 0, u) : !l && e.Children.count(a) === 1 && e.isValidElement(a) && (c = a);
		let d = c ? Yn(c) : void 0, f = zn(r, d);
		if (!c) {
			if (a || a === 0) throw Error(l ? tr(t) : er(t));
			return a;
		}
		let p = o(s, c.props ?? {});
		return c.type !== e.Fragment && (p.ref = r ? f : d), e.cloneElement(c, p);
	});
	return n.displayName = `${t}.Slot`, n;
}
Vn(Gn, "createSlot");
var Kn = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function qn(e) {
	let t = /* @__PURE__ */ Vn((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = Kn, t;
}
Vn(qn, "createSlottable");
var Jn = /* @__PURE__ */ Vn((t, n) => {
	if ("child" in t.props) {
		let n = t.props.child;
		return e.isValidElement(n) ? e.cloneElement(n, void 0, t.props.children(n.props.children)) : null;
	}
	return e.isValidElement(n) ? n : null;
}, "getSlottableElementFromSlottable");
function Yn(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Vn(Yn, "getElementRef");
function Xn(t) {
	return e.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Kn;
}
Vn(Xn, "isSlottable");
var Zn = Symbol.for("react.lazy");
function Qn(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === Zn && "_payload" in e && $n(e._payload);
}
Vn(Qn, "isLazyComponent");
function $n(e) {
	return typeof e == "object" && !!e && "then" in e;
}
Vn($n, "isPromiseLike");
var er = /* @__PURE__ */ Vn((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), tr = /* @__PURE__ */ Vn((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), nr = e.use, rr = Object.defineProperty, ir = (e, t) => rr(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function ar(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ Nn(n), [a, o] = r(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = /* @__PURE__ */ ir((t) => {
		let { scope: n, children: r } = t, i = e.useRef(null), o = e.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, Z.jsx)(a, {
			scope: n,
			itemMap: o,
			collectionRef: i,
			children: r
		});
	}, "CollectionProvider");
	s.displayName = n;
	let c = t + "CollectionSlot", l = /* @__PURE__ */ Gn(c), u = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = zn(t, o(c, n).collectionRef);
		return /* @__PURE__ */ (0, Z.jsx)(l, {
			ref: i,
			children: r
		});
	});
	u.displayName = c;
	let d = t + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ Gn(d), m = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), c = zn(n, s), l = o(d, r);
		return e.useEffect(() => (l.itemMap.set(s, {
			ref: s,
			...a
		}), () => void l.itemMap.delete(s))), /* @__PURE__ */ (0, Z.jsx)(p, {
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
	return ir(h, "useCollection"), [
		{
			Provider: s,
			Slot: u,
			ItemSlot: m
		},
		h,
		i
	];
}
ir(ar, "createCollection");
var or = /* @__PURE__ */ new WeakMap(), sr = class e extends Map {
	static {
		ir(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], or.set(this, !0);
	}
	set(e, t) {
		return or.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = ur(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
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
		let t = cr(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = cr(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return cr(this.#e, e);
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
function cr(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = lr(e, t);
	return n === -1 ? void 0 : e[n];
}
ir(cr, "at");
function lr(e, t) {
	let n = e.length, r = ur(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
ir(lr, "toSafeIndex");
function ur(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
ir(ur, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function dr(t) {
	let n = t + "CollectionProvider", [r, i] = /* @__PURE__ */ Nn(n), [a, o] = r(n, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new sr(),
		setItemMap: /* @__PURE__ */ ir(() => void 0, "setItemMap")
	}), s = /* @__PURE__ */ ir(({ state: e, ...t }) => e ? /* @__PURE__ */ (0, Z.jsx)(l, {
		...t,
		state: e
	}) : /* @__PURE__ */ (0, Z.jsx)(c, { ...t }), "CollectionProvider");
	s.displayName = n;
	let c = /* @__PURE__ */ ir((e) => {
		let t = g();
		return /* @__PURE__ */ (0, Z.jsx)(l, {
			...e,
			state: t
		});
	}, "CollectionInit");
	c.displayName = n + "Init";
	let l = /* @__PURE__ */ ir((t) => {
		let { scope: n, children: r, state: i } = t, o = e.useRef(null), [s, c] = e.useState(null), l = zn(o, c), [u, d] = i;
		return e.useEffect(() => {
			if (!s) return;
			let e = hr(() => {});
			return e.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [s]), /* @__PURE__ */ (0, Z.jsx)(a, {
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
	let u = t + "CollectionSlot", d = /* @__PURE__ */ Gn(u), f = e.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = zn(t, o(u, n).collectionRef);
		return /* @__PURE__ */ (0, Z.jsx)(d, {
			ref: i,
			children: r
		});
	});
	f.displayName = u;
	let p = t + "CollectionItemSlot", m = /* @__PURE__ */ Gn(p), h = e.forwardRef((t, n) => {
		let { scope: r, children: i, ...a } = t, s = e.useRef(null), [c, l] = e.useState(null), u = zn(n, s, l), { setItemMap: d } = o(p, r), f = e.useRef(a);
		fr(f.current, a) || (f.current = a);
		let h = f.current;
		return e.useEffect(() => {
			let e = h;
			return d((t) => c ? t.has(c) ? t.set(c, {
				...e,
				element: c
			}).toSorted(mr) : (t.set(c, {
				...e,
				element: c
			}), t.toSorted(mr)) : t), () => {
				d((e) => !c || !e.has(c) ? e : (e.delete(c), new sr(e)));
			};
		}, [
			c,
			h,
			d
		]), /* @__PURE__ */ (0, Z.jsx)(m, {
			"data-radix-collection-item": "",
			ref: u,
			children: i
		});
	});
	h.displayName = p;
	function g() {
		return e.useState(new sr());
	}
	ir(g, "useInitCollection");
	function _(e) {
		let { itemMap: n } = o(t + "CollectionConsumer", e);
		return n;
	}
	return ir(_, "useCollection"), [{
		Provider: s,
		Slot: f,
		ItemSlot: h
	}, {
		createCollectionScope: i,
		useCollection: _,
		useInitCollection: g
	}];
}
ir(dr, "createCollection");
function fr(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
ir(fr, "shallowEqual");
function pr(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
ir(pr, "isElementPreceding");
function mr(e, t) {
	return !e[1].element || !t[1].element ? 0 : pr(e[1].element, t[1].element) ? -1 : 1;
}
ir(mr, "sortByDocumentPosition");
function hr(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
ir(hr, "getChildListObserver");
//#endregion
//#region node_modules/@radix-ui/react-direction/dist/index.mjs
var gr = Object.defineProperty, _r = (e, t) => gr(e, "name", {
	value: t,
	configurable: !0
}), vr = e.createContext(void 0);
function yr(t) {
	let n = e.useContext(vr);
	return t || n || "ltr";
}
_r(yr, "useDirection");
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var br = Object.defineProperty, xr = (e, t) => br(e, "name", {
	value: t,
	configurable: !0
}), Sr = [
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
	let r = /* @__PURE__ */ Gn(`Primitive.${n}`), i = e.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, Z.jsx)(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...t,
		[n]: i
	};
}, {});
function Cr(e, t) {
	e && u.flushSync(() => e.dispatchEvent(t));
}
xr(Cr, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var wr = Object.defineProperty, Tr = (e, t) => wr(e, "name", {
	value: t,
	configurable: !0
});
function Er(t) {
	let n = e.useRef(t);
	return e.useEffect(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
Tr(Er, "useCallbackRef");
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var Dr = Object.defineProperty, Or = (e, t) => Dr(e, "name", {
	value: t,
	configurable: !0
}), kr = "dismissableLayer.update", Ar = "dismissableLayer.pointerDownOutside", jr = "dismissableLayer.focusOutside", Mr, Nr = e.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), Pr = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Or(function(t, n) {
	let { disableOutsidePointerEvents: r = !1, deferPointerDownOutside: i = !1, onEscapeKeyDown: a, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...u } = t, d = e.useContext(Nr), [f, p] = e.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = e.useState({}), g = zn(n, p), _ = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = v ? _.indexOf(v) : -1, b = f ? _.indexOf(f) : -1, x = d.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= y, C = e.useRef(!1), w = Lr((e) => {
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
	}), T = Rr((e) => {
		if (i && C.current) return;
		let t = e.target;
		[...d.branches].some((e) => e.contains(t)) || (s?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m), E = f ? b === _.length - 1 : !1, D = Er((e) => {
		e.key === "Escape" && (a?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
	});
	return e.useEffect(() => {
		if (E) return m.addEventListener("keydown", D, { capture: !0 }), () => m.removeEventListener("keydown", D, { capture: !0 });
	}, [
		m,
		E,
		D
	]), e.useEffect(() => {
		if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Mr = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), zr(), () => {
			r && (d.layersWithOutsidePointerEventsDisabled.delete(f), d.layersWithOutsidePointerEventsDisabled.size === 0 && (m.body.style.pointerEvents = Mr));
		};
	}, [
		f,
		m,
		r,
		d
	]), e.useEffect(() => () => {
		f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), zr());
	}, [f, d]), e.useEffect(() => {
		let e = /* @__PURE__ */ Or(() => h({}), "handleUpdate");
		return document.addEventListener(kr, e), () => document.removeEventListener(kr, e);
	}, []), /* @__PURE__ */ (0, Z.jsx)(Sr.div, {
		...u,
		ref: g,
		style: {
			pointerEvents: x ? S ? "auto" : "none" : void 0,
			...t.style
		},
		onFocusCapture: Tn(t.onFocusCapture, T.onFocusCapture),
		onBlurCapture: Tn(t.onBlurCapture, T.onBlurCapture),
		onPointerDownCapture: Tn(t.onPointerDownCapture, w.onPointerDownCapture)
	});
}, "DismissableLayer"));
function Fr() {
	let t = e.useContext(Nr), [n, r] = e.useState(null);
	return e.useEffect(() => {
		if (n) return t.dismissableSurfaces.add(n), () => {
			t.dismissableSurfaces.delete(n);
		};
	}, [n, t.dismissableSurfaces]), r;
}
Or(Fr, "useDismissableLayerSurface");
var Ir = /* @__PURE__ */ Or(() => !0, "IS_TRUE");
function Lr(t, n) {
	let { ownerDocument: r = globalThis?.document, deferPointerDownOutside: i = !1, isDeferredPointerDownOutsideRef: a, dismissableSurfaces: o, shouldHandlePointerDownOutside: s = Ir } = n, c = Er(t), l = e.useRef(!1), u = e.useRef(!1), d = e.useRef(/* @__PURE__ */ new Map()), f = e.useRef(() => {});
	return e.useEffect(() => {
		function e() {
			u.current = !1, a.current = !1, d.current.clear();
		}
		Or(e, "resetOutsideInteraction");
		function t() {
			return Array.from(d.current.values()).some(Boolean);
		}
		Or(t, "isOutsideInteractionIntercepted");
		function n(e) {
			if (!u.current) return;
			let t = e.target;
			t instanceof Node && [...o].some((e) => e.contains(t)) || d.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				u.current && f.current();
			}, 0);
		}
		Or(n, "handleInteractionCapture");
		function p(e) {
			u.current && d.current.set(e.type, !1);
		}
		Or(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ Or((n) => {
			if (n.target && !l.current) {
				let o = function() {
					r.removeEventListener("click", f.current);
					let n = t();
					e(), n || Br(Ar, c, p, { discrete: !0 });
				};
				if (Or(o, "handleAndDispatchPointerDownOutsideEvent"), !s(n.target)) {
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
	]), { onPointerDownCapture: /* @__PURE__ */ Or(() => l.current = !0, "onPointerDownCapture") };
}
Or(Lr, "usePointerDownOutside");
function Rr(t, n = globalThis?.document) {
	let r = Er(t), i = e.useRef(!1);
	return e.useEffect(() => {
		let e = /* @__PURE__ */ Or((e) => {
			e.target && !i.current && Br(jr, r, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: /* @__PURE__ */ Or(() => i.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ Or(() => i.current = !1, "onBlurCapture")
	};
}
Or(Rr, "useFocusOutside");
function zr() {
	let e = new CustomEvent(kr);
	document.dispatchEvent(e);
}
Or(zr, "dispatchUpdate");
function Br(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? Cr(i, a) : i.dispatchEvent(a);
}
Or(Br, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var Vr = Object.defineProperty, Hr = (e, t) => Vr(e, "name", {
	value: t,
	configurable: !0
}), Ur = 0, Wr = null;
function Gr(e) {
	return Kr(), e.children;
}
Hr(Gr, "FocusGuards");
function Kr() {
	e.useEffect(() => {
		Wr ||= {
			start: qr(),
			end: qr()
		};
		let { start: e, end: t } = Wr;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Ur++, () => {
			Ur === 1 && (Wr?.start.remove(), Wr?.end.remove(), Wr = null), Ur = Math.max(0, Ur - 1);
		};
	}, []);
}
Hr(Kr, "useFocusGuards");
function qr() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Hr(qr, "createFocusGuard");
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Jr = Object.defineProperty, Yr = (e, t) => Jr(e, "name", {
	value: t,
	configurable: !0
}), Xr = "focusScope.autoFocusOnMount", Zr = "focusScope.autoFocusOnUnmount", Qr = {
	bubbles: !1,
	cancelable: !0
}, $r = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Yr(function(t, n) {
	let { loop: r = !1, trapped: i = !1, branches: a, onMountAutoFocus: o, onUnmountAutoFocus: s, ...c } = t, [l, u] = e.useState(null), d = Er(o), f = Er(s), p = e.useRef(null), m = zn(n, u), h = e.useRef(a);
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
				g(t) ? p.current = t : li(p.current, { select: !0 });
			}, t = function(e) {
				if (_.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (g(t) || li(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && li(l);
			};
			Yr(e, "handleFocusIn"), Yr(t, "handleFocusOut"), Yr(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
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
			ui.add(_);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(Xr, Qr);
				l.addEventListener(Xr, d), l.dispatchEvent(t), t.defaultPrevented || (ri(pi(ai(l)), { select: !0 }), document.activeElement === e && li(l));
			}
			return () => {
				l.removeEventListener(Xr, d), setTimeout(() => {
					let t = new CustomEvent(Zr, Qr);
					l.addEventListener(Zr, f), l.dispatchEvent(t), t.defaultPrevented || li(e ?? document.body, { select: !0 }), l.removeEventListener(Zr, f), ui.remove(_);
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
			let t = e.currentTarget, [i, a] = ii(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && li(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && li(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		_.paused
	]);
	return /* @__PURE__ */ (0, Z.jsx)(Sr.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: v
	});
}, "FocusScope")), ei = e.createContext(null);
ei.Provider;
function ti() {
	let [t, n] = e.useState([]);
	return {
		nodes: t,
		registry: e.useMemo(() => ({
			add: /* @__PURE__ */ Yr((e) => n((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ Yr((e) => n((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
Yr(ti, "useFocusScopeBranchRegistry");
function ni(t) {
	let n = e.useContext(ei);
	e.useEffect(() => {
		if (!(!t || !n)) return n.add(t), () => n.remove(t);
	}, [t, n]);
}
Yr(ni, "useFocusScopeBranch");
function ri(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (li(r, { select: t }), document.activeElement !== n) return;
}
Yr(ri, "focusFirst");
function ii(e) {
	let t = ai(e);
	return [oi(t, e), oi(t.reverse(), e)];
}
Yr(ii, "getTabbableEdges");
function ai(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ Yr((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
Yr(ai, "getTabbableCandidates");
function oi(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : si(r, { upTo: t }))) return r;
}
Yr(oi, "findVisible");
function si(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
Yr(si, "isHidden");
function ci(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
Yr(ci, "isSelectableInput");
function li(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && ci(e) && t && e.select();
	}
}
Yr(li, "focus");
var ui = di();
function di() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = fi(e, t), e.unshift(t);
		},
		remove(t) {
			e = fi(e, t), e[0]?.resume();
		}
	};
}
Yr(di, "createFocusScopesStack");
function fi(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
Yr(fi, "arrayRemove");
function pi(e) {
	return e.filter((e) => e.tagName !== "A");
}
Yr(pi, "removeLinks");
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var mi = globalThis?.document ? e.useLayoutEffect : () => {}, hi = Object.defineProperty, gi = (e, t) => hi(e, "name", {
	value: t,
	configurable: !0
}), _i = e.useId || (() => void 0), vi = 0;
function yi(t) {
	let [n, r] = e.useState(_i());
	return mi(() => {
		t || r((e) => e ?? String(vi++));
	}, [t]), t || (n ? `radix-${n}` : "");
}
gi(yi, "useId");
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var bi = [
	"top",
	"right",
	"bottom",
	"left"
], xi = Math.min, Si = Math.max, Ci = Math.round, wi = Math.floor, Ti = (e) => ({
	x: e,
	y: e
}), Ei = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Di(e, t, n) {
	return Si(e, xi(t, n));
}
function Oi(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ki(e) {
	return e.split("-")[0];
}
function Ai(e) {
	return e.split("-")[1];
}
function ji(e) {
	return e === "x" ? "y" : "x";
}
function Mi(e) {
	return e === "y" ? "height" : "width";
}
function Ni(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Pi(e) {
	return ji(Ni(e));
}
function Fi(e, t, n) {
	n === void 0 && (n = !1);
	let r = Ai(e), i = Pi(e), a = Mi(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Wi(o)), [o, Wi(o)];
}
function Ii(e) {
	let t = Wi(e);
	return [
		Li(e),
		t,
		Li(t)
	];
}
function Li(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Ri = ["left", "right"], zi = ["right", "left"], Bi = ["top", "bottom"], Vi = ["bottom", "top"];
function Hi(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? zi : Ri : t ? Ri : zi;
		case "left":
		case "right": return t ? Bi : Vi;
		default: return [];
	}
}
function Ui(e, t, n, r) {
	let i = Ai(e), a = Hi(ki(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Li)))), a;
}
function Wi(e) {
	let t = ki(e);
	return Ei[t] + e.slice(t.length);
}
function Gi(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function Ki(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Gi(e);
}
function qi(e) {
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
function Ji(e, t, n) {
	let { reference: r, floating: i } = e, a = Ni(t), o = Pi(t), s = Mi(o), c = ki(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = Ai(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Yi(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Oi(t, e), p = Ki(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = qi(await i.getClippingRect({
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
	}, y = qi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Xi = 50, Zi = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Yi
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Ji(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Xi && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Ji(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Qi = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Oi(e, t) || {};
		if (l == null) return {};
		let d = Ki(u), f = {
			x: n,
			y: r
		}, p = Pi(i), m = Mi(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = xi(d[_], T), D = xi(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = Di(E, k, O), j = !c.arrow && Ai(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), $i = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Oi(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = ki(r), _ = Ni(o), v = ki(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Wi(o)] : Ii(o)), x = p !== "none";
			!d && x && b.push(...Ui(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Fi(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== Ni(t)) || T.every((e) => Ni(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = Ni(e.placement);
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
function ea(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function ta(e) {
	return bi.some((t) => e[t] >= 0);
}
var na = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Oi(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = ea(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: ta(e)
					} };
				}
				case "escaped": {
					let e = ea(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: ta(e)
					} };
				}
				default: return {};
			}
		}
	};
}, ra = /*#__PURE__*/ new Set(["left", "top"]);
async function ia(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = ki(n), s = Ai(n), c = Ni(n) === "y", l = ra.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Oi(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var aa = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await ia(t, e);
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
}, oa = function(e) {
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
			} }, ...l } = Oi(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = Ni(i), p = ji(f), m = u[p], h = u[f], g = (e, t) => Di(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
}, sa = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Oi(e, t), u = {
				x: n,
				y: r
			}, d = Ni(i), f = ji(d), p = u[f], m = u[d], h = Oi(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = ra.has(ki(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, ca = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = Oi(e, t), c = await i.detectOverflow(t, s), l = ki(n), u = Ai(n), d = Ni(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = xi(p - c[m], g), y = xi(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * Si(c.left, c.right) : S = p - 2 * Si(c.top, c.bottom)), await o({
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
function la() {
	return typeof window < "u";
}
function ua(e) {
	return pa(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function da(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fa(e) {
	return ((pa(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function pa(e) {
	return la() ? e instanceof Node || e instanceof da(e).Node : !1;
}
function ma(e) {
	return la() ? e instanceof Element || e instanceof da(e).Element : !1;
}
function ha(e) {
	return la() ? e instanceof HTMLElement || e instanceof da(e).HTMLElement : !1;
}
function ga(e) {
	return !la() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof da(e).ShadowRoot;
}
function _a(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Oa(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function va(e) {
	return /^(table|td|th)$/.test(ua(e));
}
function ya(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var ba = /transform|translate|scale|rotate|perspective|filter/, xa = /paint|layout|strict|content/, Sa = (e) => !!e && e !== "none", Ca;
function wa(e) {
	let t = ma(e) ? Oa(e) : e;
	return Sa(t.transform) || Sa(t.translate) || Sa(t.scale) || Sa(t.rotate) || Sa(t.perspective) || !Ea() && (Sa(t.backdropFilter) || Sa(t.filter)) || ba.test(t.willChange || "") || xa.test(t.contain || "");
}
function Ta(e) {
	let t = Aa(e);
	for (; ha(t) && !Da(t);) {
		if (wa(t)) return t;
		if (ya(t)) return null;
		t = Aa(t);
	}
	return null;
}
function Ea() {
	return Ca ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Ca;
}
function Da(e) {
	return /^(html|body|#document)$/.test(ua(e));
}
function Oa(e) {
	return da(e).getComputedStyle(e);
}
function ka(e) {
	return ma(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Aa(e) {
	if (ua(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ga(e) && e.host || fa(e);
	return ga(t) ? t.host : t;
}
function ja(e) {
	let t = Aa(e);
	return Da(t) ? (e.ownerDocument || e).body : ha(t) && _a(t) ? t : ja(t);
}
function Ma(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = ja(e), i = r === e.ownerDocument?.body, a = da(r);
	if (i) {
		let e = Na(a);
		return t.concat(a, a.visualViewport || [], _a(r) ? r : [], e && n ? Ma(e) : []);
	} else return t.concat(r, Ma(r, [], n));
}
function Na(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Pa(e) {
	let t = Oa(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = ha(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Ci(n) !== a || Ci(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Fa(e) {
	return ma(e) ? e : e.contextElement;
}
function Ia(e) {
	let t = Fa(e);
	if (!ha(t)) return Ti(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Pa(t), o = (a ? Ci(n.width) : n.width) / r, s = (a ? Ci(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var La = /*#__PURE__*/ Ti(0);
function Ra(e) {
	let t = da(e);
	return !Ea() || !t.visualViewport ? La : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function za(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === da(e);
}
function Ba(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Fa(e), o = Ti(1);
	t && (r ? ma(r) && (o = Ia(r)) : o = Ia(e));
	let s = za(a, n, r) ? Ra(a) : Ti(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = da(a), t = ma(r) ? da(r) : r, n = e, i = Na(n);
		for (; i && t !== n;) {
			let e = Ia(i), t = i.getBoundingClientRect(), r = Oa(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = da(i), i = Na(n);
		}
	}
	return qi({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Va(e, t) {
	let n = ka(e).scrollLeft;
	return t ? t.left + n : Ba(fa(e)).left + n;
}
function Ha(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Va(e, n),
		y: n.top + t.scrollTop
	};
}
function Ua(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = fa(r), s = t ? ya(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Ti(1), u = Ti(0), d = ha(r);
	if ((d || !a) && ((ua(r) !== "body" || _a(o)) && (c = ka(r)), d)) {
		let e = Ba(r);
		l = Ia(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Ha(o, c) : Ti(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Wa(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function Ga(e) {
	let t = ka(e), n = e.ownerDocument.body, r = Si(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Si(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + Va(e), o = -t.scrollTop;
	return Oa(n).direction === "rtl" && (a += Si(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var Ka = 25;
function qa(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = da(e), a = fa(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Ea() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (Va(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= Ka && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function Ja(e, t) {
	let n = Ba(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Ia(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Ya(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = qa(e, n, t);
	else if (t === "document") r = Ga(fa(e));
	else if (ma(t)) r = Ja(t, n);
	else {
		let n = Ra(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return qi(r);
}
function Xa(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Ma(e, [], !1).filter((e) => ma(e) && ua(e) !== "body"), i = null, a = Oa(e).position === "fixed", o = a ? Aa(e) : e;
	for (; ma(o) && !Da(o);) {
		let e = Oa(o), t = wa(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = Aa(o);
	}
	return t.set(e, r), r;
}
function Za(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? ya(t) ? [] : Xa(t, this._c) : [].concat(n), r], o = Ya(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Ya(t, a[e], i);
		s = Si(n.top, s), c = xi(n.right, c), l = xi(n.bottom, l), u = Si(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Qa(e) {
	let { width: t, height: n } = Pa(e);
	return {
		width: t,
		height: n
	};
}
function $a(e, t, n) {
	let r = ha(t), i = fa(t), a = n === "fixed", o = Ba(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Ti(0);
	if ((r || !a) && ((ua(t) !== "body" || _a(i)) && (s = ka(t)), r)) {
		let e = Ba(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = Va(i));
	let l = i && !r && !a ? Ha(i, s) : Ti(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function eo(e) {
	return Oa(e).position === "static";
}
function to(e, t) {
	if (!ha(e) || Oa(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return fa(e) === n && (n = n.ownerDocument.body), n;
}
function no(e, t) {
	let n = da(e);
	if (ya(e)) return n;
	if (!ha(e)) {
		let t = Aa(e);
		for (; t && !Da(t);) {
			if (ma(t) && !eo(t)) return t;
			t = Aa(t);
		}
		return n;
	}
	let r = to(e, t);
	for (; r && va(r) && eo(r);) r = to(r, t);
	return r && Da(r) && eo(r) && !wa(r) ? n : r || Ta(e) || n;
}
var ro = async function(e) {
	let t = this.getOffsetParent || no, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: $a(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function io(e) {
	return Oa(e).direction === "rtl";
}
var ao = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Ua,
	getDocumentElement: fa,
	getClippingRect: Za,
	getOffsetParent: no,
	getElementRects: ro,
	getClientRects: Wa,
	getDimensions: Qa,
	getScale: Ia,
	isElement: ma,
	isRTL: io
};
function oo(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function so(e, t, n) {
	let r = null, i, a = fa(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = wi(d), h = wi(a.clientWidth - (u + f)), g = wi(a.clientHeight - (d + p)), _ = wi(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Si(0, xi(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!oo(l, e.getBoundingClientRect())) return s();
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
	let c = da(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function co(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Fa(e), u = i || a ? [...l ? Ma(l) : [], ...t ? Ma(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? so(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Ba(e) : null;
	c && g();
	function g() {
		let t = Ba(e);
		h && !oo(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var lo = aa, uo = oa, fo = $i, po = ca, mo = na, ho = Qi, go = sa, _o = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...ao,
		...i.platform,
		_c: r
	};
	return Zi(e, t, {
		...i,
		platform: a
	});
}, vo = typeof document < "u" ? s : function() {};
function yo(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!yo(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !yo(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function bo(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xo(e, t) {
	let n = bo(e);
	return Math.round(t * n) / n;
}
function So(t) {
	let n = e.useRef(t);
	return vo(() => {
		n.current = t;
	}), n;
}
function Co(t) {
	t === void 0 && (t = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: d } = t, [f, p] = e.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [m, h] = e.useState(i);
	yo(m, i) || h(i);
	let [g, _] = e.useState(null), [v, y] = e.useState(null), b = e.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), x = e.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = o || g, C = s || v, w = e.useRef(null), T = e.useRef(null), E = e.useRef(f), D = l != null, O = So(l), k = So(a), A = So(d), j = e.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: m
		};
		k.current && (e.platform = k.current), _o(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !yo(E.current, t) && (E.current = t, u.flushSync(() => {
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
	vo(() => {
		d === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [d]);
	let M = e.useRef(!1);
	vo(() => (M.current = !0, () => {
		M.current = !1;
	}), []), vo(() => {
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
		let t = xo(P.floating, f.x), n = xo(P.floating, f.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...bo(P.floating) >= 1.5 && { willChange: "transform" }
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
var wo = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : ho({
				element: r.current,
				padding: i
			}).fn(n) : r ? ho({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, To = (e, t) => {
	let n = lo(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Eo = (e, t) => {
	let n = uo(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Do = (e, t) => ({
	fn: go(e).fn,
	options: [e, t]
}), Oo = (e, t) => {
	let n = fo(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, ko = (e, t) => {
	let n = po(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ao = (e, t) => {
	let n = mo(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, jo = (e, t) => {
	let n = wo(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Mo = Object.defineProperty, No = (e, t) => Mo(e, "name", {
	value: t,
	configurable: !0
});
function Po(t) {
	let [n, r] = e.useState(void 0);
	return mi(() => {
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
No(Po, "useSize");
//#endregion
//#region node_modules/@radix-ui/react-popper/dist/index.mjs
var Fo = Object.defineProperty, Io = (e, t) => Fo(e, "name", {
	value: t,
	configurable: !0
}), Lo = {
	Partial: "partial",
	Always: "always"
}, Ro = {
	Optimized: "optimized",
	Always: "always"
}, zo = "Popper", [Bo, Vo] = /* @__PURE__ */ Nn(zo), [Ho, Uo] = Bo(zo), Wo = /* @__PURE__ */ Io((t) => {
	let { __scopePopper: n, children: r } = t, [i, a] = e.useState(null), [o, s] = e.useState(void 0);
	return /* @__PURE__ */ (0, Z.jsx)(Ho, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		placementState: o,
		setPlacementState: s,
		children: r
	});
}, "Popper"), Go = "PopperAnchor", Ko = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Io(function(t, n) {
	let { __scopePopper: r, virtualRef: i, ...a } = t, o = Uo(Go, r), s = e.useRef(null), c = o.onAnchorChange, l = zn(n, e.useCallback((e) => {
		s.current = e, e && c(e);
	}, [c])), u = e.useRef(null);
	e.useEffect(() => {
		if (!i) return;
		let e = u.current;
		u.current = i.current, e !== u.current && c(u.current);
	});
	let d = o.placementState && $o(o.placementState), f = d?.[0], p = d?.[1];
	return i ? null : /* @__PURE__ */ (0, Z.jsx)(Sr.div, {
		"data-radix-popper-side": f,
		"data-radix-popper-align": p,
		...a,
		ref: l
	});
}, "PopperAnchor")), qo = "PopperContent", [Jo, Yo] = Bo(qo), Xo = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ Io(function(t, n) {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: l = !0, collisionBoundary: u = [], collisionPadding: d = 0, sticky: f = Lo.Partial, hideWhenDetached: p = !1, updatePositionStrategy: m = Ro.Optimized, onPlaced: h, ...g } = t, _ = Uo(qo, r), [v, y] = e.useState(null), b = zn(n, y), [x, S] = e.useState(null), C = Po(x), w = C?.width ?? 0, T = C?.height ?? 0, E = i + (o === "center" ? "" : "-" + o), D = typeof d == "number" ? d : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...d
	}, O = Array.isArray(u) ? u : [u], k = O.length > 0, A = {
		padding: D,
		boundary: O.filter(Zo),
		altBoundary: k
	}, { refs: j, floatingStyles: M, placement: N, isPositioned: P, middlewareData: F } = Co({
		strategy: "fixed",
		placement: E,
		whileElementsMounted: /* @__PURE__ */ Io((...e) => co(...e, { animationFrame: m === Ro.Always }), "whileElementsMounted"),
		elements: { reference: _.anchor },
		middleware: [
			To({
				mainAxis: a + T,
				alignmentAxis: s
			}),
			l && Eo({
				mainAxis: !0,
				crossAxis: !1,
				limiter: f === Lo.Partial ? Do() : void 0,
				...A
			}),
			l && Oo({ ...A }),
			ko({
				...A,
				apply: /* @__PURE__ */ Io(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			x && jo({
				element: x,
				padding: c
			}),
			Qo({
				arrowWidth: w,
				arrowHeight: T
			}),
			p && Ao({
				strategy: "referenceHidden",
				...A,
				boundary: k ? A.boundary : void 0
			})
		]
	}), I = _.setPlacementState;
	mi(() => (I(N), () => {
		I(void 0);
	}), [N, I]);
	let [L, ee] = $o(N), R = Er(h);
	mi(() => {
		P && R?.();
	}, [P, R]);
	let z = F.arrow?.x, B = F.arrow?.y, V = F.arrow?.centerOffset !== 0, [H, te] = e.useState();
	return mi(() => {
		v && te(window.getComputedStyle(v).zIndex);
	}, [v]), /* @__PURE__ */ (0, Z.jsx)("div", {
		ref: j.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...M,
			transform: P ? M.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: H,
			"--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(" "),
			...F.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: t.dir,
		children: /* @__PURE__ */ (0, Z.jsx)(Jo, {
			scope: r,
			placedSide: L,
			placedAlign: ee,
			onArrowChange: S,
			arrowX: z,
			arrowY: B,
			shouldHideArrow: V,
			children: /* @__PURE__ */ (0, Z.jsx)(Sr.div, {
				"data-side": L,
				"data-align": ee,
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
function Zo(e) {
	return e !== null;
}
Io(Zo, "isNotNull");
var Qo = /* @__PURE__ */ Io((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = $o(n), u = {
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
function $o(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
Io($o, "getSideAndAlignFromPlacement");
//#endregion
//#region node_modules/@radix-ui/react-portal/dist/index.mjs
var es = Object.defineProperty, ts = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ ((e, t) => es(e, "name", {
	value: t,
	configurable: !0
}))(function(t, n) {
	let { container: r, ...i } = t, [a, o] = e.useState(!1);
	mi(() => o(!0), []);
	let s = r || a && globalThis?.document?.body;
	return s ? u.createPortal(/* @__PURE__ */ (0, Z.jsx)(Sr.div, {
		...i,
		ref: n
	}), s) : null;
}, "Portal")), ns = Object.defineProperty, rs = (e, t) => ns(e, "name", {
	value: t,
	configurable: !0
});
function is(t, n) {
	return e.useReducer((e, t) => n[e][t] ?? e, t);
}
rs(is, "useStateMachine");
var as = /* @__PURE__ */ rs((t) => {
	let { present: n, children: r } = t, i = os(n), a = typeof r == "function" ? r({ present: i.isPresent }) : e.Children.only(r), o = cs(i.ref, us(a));
	return typeof r == "function" || i.isPresent ? e.cloneElement(a, { ref: o }) : null;
}, "Presence");
function os(t) {
	let [n, r] = e.useState(), i = e.useRef(null), a = e.useRef(t), o = e.useRef("none"), s = e.useRef(void 0), [c, l] = is(t ? "mounted" : "unmounted", {
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
		c === "mounted" ? (o.current = s.current ?? ls(i.current), s.current = void 0) : o.current = "none";
	}, [c]), mi(() => {
		let e = i.current, n = a.current;
		if (n !== t) {
			let r = o.current, i = ls(e);
			t ? (s.current = i, l("MOUNT")) : i === "none" || e?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = t;
		}
	}, [t, l]), mi(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = /* @__PURE__ */ rs((r) => {
				let o = ls(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (l("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ rs((e) => {
				e.target === n && (o.current = ls(i.current));
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
				i.current = t, s.current = ls(t);
			} else i.current = null;
			r(e);
		}, [])
	};
}
rs(os, "usePresence");
function ss(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
rs(ss, "setRef");
function cs(...t) {
	let n = e.useRef(t);
	return n.current = t, e.useCallback((e) => {
		let t = n.current, r = !1, i = t.map((t) => {
			let n = ss(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				typeof n == "function" ? n() : ss(t[e], null);
			}
		};
	}, []);
}
rs(cs, "useStableComposedRefs");
function ls(e) {
	return e?.animationName || "none";
}
rs(ls, "getAnimationName");
function us(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
rs(us, "getElementRef");
//#endregion
//#region node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var ds = Object.defineProperty, fs = (e, t) => ds(e, "name", {
	value: t,
	configurable: !0
}), ps = e.useEffectEvent, ms = e.useInsertionEffect;
function hs(t) {
	if (typeof ps == "function") return ps(t);
	let n = e.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof ms == "function" ? ms(() => {
		n.current = t;
	}) : mi(() => {
		n.current = t;
	}), e.useMemo(() => ((...e) => n.current?.(...e)), []);
}
fs(hs, "useEffectEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var gs = Object.defineProperty, _s = (e, t) => gs(e, "name", {
	value: t,
	configurable: !0
}), vs = e.useInsertionEffect || mi;
function ys({ prop: t, defaultProp: n, onChange: r = /* @__PURE__ */ _s(() => {}, "onChange"), caller: i }) {
	let [a, o, s] = bs({
		defaultProp: n,
		onChange: r
	}), c = t !== void 0;
	return [c ? t : a, e.useCallback((e) => {
		if (c) {
			let n = xs(e) ? e(t) : e;
			n !== t && s.current?.(n);
		} else o(e);
	}, [
		c,
		t,
		o,
		s
	])];
}
_s(ys, "useControllableState");
function bs({ defaultProp: t, onChange: n }) {
	let [r, i] = e.useState(t), a = e.useRef(r), o = e.useRef(n);
	return vs(() => {
		o.current = n;
	}, [n]), e.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
_s(bs, "useUncontrolledState");
function xs(e) {
	return typeof e == "function";
}
_s(xs, "isFunction");
var Ss = Symbol("RADIX:SYNC_STATE");
function Cs(t, n, r, i) {
	let { prop: a, defaultProp: o, onChange: s, caller: c } = n, l = a !== void 0, u = hs(s), d = [{
		...r,
		state: o
	}];
	i && d.push(i);
	let [f, p] = e.useReducer((e, n) => {
		if (n.type === Ss) return {
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
			type: Ss,
			state: a
		});
	}, [
		a,
		f.state,
		l
	]), [g, p];
}
_s(Cs, "useControllableStateReducer");
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
var ws = Object.defineProperty, Ts = (e, t) => ws(e, "name", {
	value: t,
	configurable: !0
});
function Es(t) {
	let n = e.useRef({
		value: t,
		previous: t
	});
	return e.useMemo(() => (n.current.value !== t && (n.current.previous = n.current.value, n.current.value = t), n.current.previous), [t]);
}
Ts(Es, "usePrevious");
//#endregion
//#region node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Ds = Object.freeze({
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
}), Os = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, ks = /* @__PURE__ */ new WeakMap(), As = /* @__PURE__ */ new WeakMap(), js = {}, Ms = 0, Ns = function(e) {
	return e && (e.host || Ns(e.parentNode));
}, Ps = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = Ns(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, Fs = function(e, t, n, r) {
	var i = Ps(t, Array.isArray(e) ? e : [e]);
	js[n] || (js[n] = /* @__PURE__ */ new WeakMap());
	var a = js[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (ks.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				ks.set(e, c), a.set(e, l), o.push(e), c === 1 && i && As.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), Ms++, function() {
		o.forEach(function(e) {
			var t = ks.get(e) - 1, i = a.get(e) - 1;
			ks.set(e, t), a.set(e, i), t || (As.has(e) || e.removeAttribute(r), As.delete(e)), i || e.removeAttribute(n);
		}), Ms--, Ms || (ks = /* @__PURE__ */ new WeakMap(), ks = /* @__PURE__ */ new WeakMap(), As = /* @__PURE__ */ new WeakMap(), js = {});
	};
}, Is = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Os(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Fs(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, Ls = function() {
	return Ls = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, Ls.apply(this, arguments);
};
function Rs(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function zs(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var Bs = "right-scroll-bar-position", Vs = "width-before-scroll-bar", Hs = "with-scroll-bars-hidden", Us = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
function Ws(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
function Gs(e, t) {
	var n = l(function() {
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
var Ks = typeof window < "u" ? e.useLayoutEffect : e.useEffect, qs = /* @__PURE__ */ new WeakMap();
function Js(e, t) {
	var n = Gs(t || null, function(t) {
		return e.forEach(function(e) {
			return Ws(e, t);
		});
	});
	return Ks(function() {
		var t = qs.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || Ws(e, null);
			}), i.forEach(function(e) {
				r.has(e) || Ws(e, a);
			});
		}
		qs.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function Ys(e) {
	return e;
}
function Xs(e, t) {
	t === void 0 && (t = Ys);
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
function Zs(e) {
	e === void 0 && (e = {});
	var t = Xs(null);
	return t.options = Ls({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var Qs = function(t) {
	var n = t.sideCar, r = Rs(t, ["sideCar"]);
	if (!n) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = n.read();
	if (!i) throw Error("Sidecar medium not found");
	return e.createElement(i, Ls({}, r));
};
Qs.isSideCarExport = !0;
function $s(e, t) {
	return e.useMedium(t), Qs;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var ec = Zs(), tc = function() {}, nc = e.forwardRef(function(t, n) {
	var r = e.useRef(null), i = e.useState({
		onScrollCapture: tc,
		onWheelCapture: tc,
		onTouchMoveCapture: tc
	}), a = i[0], o = i[1], s = t.forwardProps, c = t.children, l = t.className, u = t.removeScrollBar, d = t.enabled, f = t.shards, p = t.sideCar, m = t.noRelative, h = t.noIsolation, g = t.inert, _ = t.allowPinchZoom, v = t.as, y = v === void 0 ? "div" : v, b = t.gapMode, x = Rs(t, [
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
	]), S = p, C = Js([r, n]), w = Ls(Ls({}, x), a);
	return e.createElement(e.Fragment, null, d && e.createElement(S, {
		sideCar: ec,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: r,
		gapMode: b
	}), s ? e.cloneElement(e.Children.only(c), Ls(Ls({}, w), { ref: C })) : e.createElement(y, Ls({}, w, {
		className: l,
		ref: C
	}), c));
});
nc.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, nc.classNames = {
	fullWidth: Vs,
	zeroRight: Bs
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var rc, ic = function() {
	if (rc) return rc;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function ac() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = ic();
	return t && e.setAttribute("nonce", t), e;
}
function oc(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function sc(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var cc = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = ac()) && (oc(t, n), sc(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, lc = function() {
	var t = cc();
	return function(n, r) {
		e.useEffect(function() {
			return t.add(n), function() {
				t.remove();
			};
		}, [n && r]);
	};
}, uc = function() {
	var e = lc();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, dc = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, fc = function(e) {
	return parseInt(e || "", 10) || 0;
}, pc = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		fc(n),
		fc(r),
		fc(i)
	];
}, mc = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return dc;
	var t = pc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, hc = uc(), gc = "data-scroll-locked", _c = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${Hs} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${gc}] {
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
  
  .${Bs} {
    right: ${s}px ${r};
  }
  
  .${Vs} {
    margin-right: ${s}px ${r};
  }
  
  .${Bs} .${Bs} {
    right: 0 ${r};
  }
  
  .${Vs} .${Vs} {
    margin-right: 0 ${r};
  }
  
  body[${gc}] {
    ${Us}: ${s}px;
  }
`;
}, vc = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, yc = function() {
	e.useEffect(function() {
		return document.body.setAttribute(gc, (vc() + 1).toString()), function() {
			var e = vc() - 1;
			e <= 0 ? document.body.removeAttribute(gc) : document.body.setAttribute(gc, e.toString());
		};
	}, []);
}, bc = function(t) {
	var n = t.noRelative, r = t.noImportant, i = t.gapMode, a = i === void 0 ? "margin" : i;
	yc();
	var o = e.useMemo(function() {
		return mc(a);
	}, [a]);
	return e.createElement(hc, { styles: _c(o, !n, a, r ? "" : "!important") });
}, xc = !1;
if (typeof window < "u") try {
	var Sc = Object.defineProperty({}, "passive", { get: function() {
		return xc = !0, !0;
	} });
	window.addEventListener("test", Sc, Sc), window.removeEventListener("test", Sc, Sc);
} catch {
	xc = !1;
}
var Cc = xc ? { passive: !1 } : !1, wc = function(e) {
	return e.tagName === "TEXTAREA";
}, Tc = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !wc(e) && n[t] === "visible");
}, Ec = function(e) {
	return Tc(e, "overflowY");
}, Dc = function(e) {
	return Tc(e, "overflowX");
}, Oc = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), jc(e, r)) {
			var i = Mc(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, kc = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Ac = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, jc = function(e, t) {
	return e === "v" ? Ec(t) : Dc(t);
}, Mc = function(e, t) {
	return e === "v" ? kc(t) : Ac(t);
}, Nc = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Pc = function(e, t, n, r, i) {
	var a = Nc(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Mc(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && jc(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Fc = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ic = function(e) {
	return [e.deltaX, e.deltaY];
}, Lc = function(e) {
	return e && "current" in e ? e.current : e;
}, Rc = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, zc = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, Bc = 0, Vc = [];
function Hc(t) {
	var n = e.useRef([]), r = e.useRef([0, 0]), i = e.useRef(), a = e.useState(Bc++)[0], o = e.useState(uc)[0], s = e.useRef(t);
	e.useEffect(function() {
		s.current = t;
	}, [t]), e.useEffect(function() {
		if (t.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var e = zs([t.lockRef.current], (t.shards || []).map(Lc), !0).filter(Boolean);
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
		var n = Fc(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], c = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Oc(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Oc(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return Pc(h, t, e, h === "h" ? o : c, !0);
	}, []), l = e.useCallback(function(e) {
		var t = e;
		if (!(!Vc.length || Vc[Vc.length - 1] !== o)) {
			var r = "deltaY" in t ? Ic(t) : Fc(t), i = n.current.filter(function(e) {
				return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && Rc(e.delta, r);
			})[0];
			if (i && i.should) {
				t.cancelable && t.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(Lc).filter(Boolean).filter(function(e) {
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
			shadowParent: Uc(r)
		};
		n.current.push(a), setTimeout(function() {
			n.current = n.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = e.useCallback(function(e) {
		r.current = Fc(e), i.current = void 0;
	}, []), f = e.useCallback(function(e) {
		u(e.type, Ic(e), e.target, c(e, t.lockRef.current));
	}, []), p = e.useCallback(function(e) {
		u(e.type, Fc(e), e.target, c(e, t.lockRef.current));
	}, []);
	e.useEffect(function() {
		return Vc.push(o), t.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, Cc), document.addEventListener("touchmove", l, Cc), document.addEventListener("touchstart", d, Cc), function() {
			Vc = Vc.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, Cc), document.removeEventListener("touchmove", l, Cc), document.removeEventListener("touchstart", d, Cc);
		};
	}, []);
	var m = t.removeScrollBar, h = t.inert;
	return e.createElement(e.Fragment, null, h ? e.createElement(o, { styles: zc(a) }) : null, m ? e.createElement(bc, {
		noRelative: t.noRelative,
		gapMode: t.gapMode
	}) : null);
}
function Uc(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var Wc = $s(ec, Hc), Gc = e.forwardRef(function(t, n) {
	return e.createElement(nc, Ls({}, t, {
		ref: n,
		sideCar: Wc
	}));
});
Gc.classNames = nc.classNames;
//#endregion
//#region node_modules/@radix-ui/react-select/dist/index.mjs
var Kc = Object.defineProperty, $ = (e, t) => Kc(e, "name", {
	value: t,
	configurable: !0
}), qc = {
	ItemAligned: "item-aligned",
	Popper: "popper"
}, Jc = {
	LTR: "ltr",
	RTL: "rtl"
}, Yc = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], Xc = [" ", "Enter"], Zc = "Select", [Qc, $c, el] = /* @__PURE__ */ ar(Zc), [tl, nl] = /* @__PURE__ */ Nn(Zc, [el, Vo]), rl = Vo(), [il, al] = tl(Zc), [ol, sl] = tl(Zc);
function cl(t) {
	let { __scopeSelect: n, children: r, open: i, defaultOpen: a, onOpenChange: o, value: s, defaultValue: c, onValueChange: l, dir: u, name: d, autoComplete: f, disabled: p, required: m, form: h, internal_do_not_use_render: g } = t, _ = rl(n), [v, y] = e.useState(null), [b, x] = e.useState(null), [S, C] = e.useState(!1), w = yr(u), [T, E] = ys({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: Zc
	}), [D, O] = ys({
		prop: s,
		defaultProp: c,
		onChange: l,
		caller: Zc
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
	let j = !v || !!h || !!v.closest("form"), [M, N] = e.useState(/* @__PURE__ */ new Set()), P = yi(), F = Array.from(M).map((e) => e.props.value).join(";"), I = e.useCallback((e) => {
		N((t) => new Set(t).add(e));
	}, []), L = e.useCallback((e) => {
		N((t) => {
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), ee = {
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
	return /* @__PURE__ */ (0, Z.jsx)(Wo, {
		..._,
		children: /* @__PURE__ */ (0, Z.jsx)(il, {
			scope: n,
			...ee,
			children: /* @__PURE__ */ (0, Z.jsx)(Qc.Provider, {
				scope: n,
				children: /* @__PURE__ */ (0, Z.jsx)(ol, {
					scope: n,
					onNativeOptionAdd: I,
					onNativeOptionRemove: L,
					children: Yl(g) ? g(ee) : r
				})
			})
		})
	});
}
$(cl, "SelectProvider");
var ll = /* @__PURE__ */ $((e) => {
	let { __scopeSelect: t, children: n, ...r } = e;
	return /* @__PURE__ */ (0, Z.jsx)(cl, {
		__scopeSelect: t,
		...r,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [n, e ? /* @__PURE__ */ (0, Z.jsx)(Jl, { __scopeSelect: t }) : null] })
	});
}, "Select"), ul = "SelectTrigger", dl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, disabled: i = !1, ...a } = t, o = rl(r), s = al(ul, r), c = s.disabled || i, l = zn(n, s.onTriggerChange), u = $c(r), d = e.useRef("touch"), [f, p, m] = Zl((e) => {
		let t = u().filter((e) => !e.disabled), n = Ql(t, e, t.find((e) => e.value === s.value));
		n !== void 0 && s.onValueChange(n.value);
	}), h = /* @__PURE__ */ $((e) => {
		c || (s.onOpenChange(!0), m()), e && (s.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	}, "handleOpen");
	return /* @__PURE__ */ (0, Z.jsx)(Ko, {
		asChild: !0,
		...o,
		children: /* @__PURE__ */ (0, Z.jsx)(Sr.button, {
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
			"data-placeholder": Xl(s.value) ? "" : void 0,
			...a,
			ref: l,
			onClick: Tn(a.onClick, (e) => {
				e.currentTarget.focus(), d.current !== "mouse" && h(e);
			}),
			onPointerDown: Tn(a.onPointerDown, (e) => {
				d.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (h(e), e.preventDefault());
			}),
			onKeyDown: Tn(a.onKeyDown, (e) => {
				let t = f.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && p(e.key), !(t && e.key === " ") && Yc.includes(e.key) && (h(), e.preventDefault());
			})
		})
	});
}, "SelectTrigger")), fl = "SelectValue", pl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, className: i, style: a, children: o, placeholder: s = "", ...c } = t, l = al(fl, r), { onValueNodeHasChildrenChange: u } = l, d = o !== void 0, f = zn(n, l.onValueNodeChange);
	mi(() => {
		u(d);
	}, [u, d]);
	let p = Xl(l.value);
	return /* @__PURE__ */ (0, Z.jsx)(Sr.span, {
		...c,
		asChild: !p && c.asChild,
		ref: f,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, Z.jsx)(e.Fragment, { children: p ? s : o }, p ? "placeholder" : "value")
	});
}, "SelectValue")), ml = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ (0, Z.jsx)(Sr.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
}, "SelectIcon")), [hl, gl] = tl("SelectPortal", { forceMount: void 0 }), _l = /* @__PURE__ */ $((e) => {
	let { __scopeSelect: t, forceMount: n, ...r } = e;
	return /* @__PURE__ */ (0, Z.jsx)(hl, {
		scope: e.__scopeSelect,
		forceMount: n,
		children: /* @__PURE__ */ (0, Z.jsx)(ts, {
			asChild: !0,
			...r
		})
	});
}, "SelectPortal"), vl = "SelectContent", yl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let r = gl(vl, t.__scopeSelect), { forceMount: i = r.forceMount, ...a } = t, o = al(vl, t.__scopeSelect), [s, c] = e.useState();
	return mi(() => {
		c(new DocumentFragment());
	}, []), /* @__PURE__ */ (0, Z.jsx)(as, {
		present: i || o.open,
		children: ({ present: e }) => e ? /* @__PURE__ */ (0, Z.jsx)(Tl, {
			...a,
			ref: n
		}) : /* @__PURE__ */ (0, Z.jsx)(bl, {
			...a,
			fragment: s
		})
	});
}, "SelectContent")), bl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, children: r, fragment: i } = e;
	return i ? u.createPortal(/* @__PURE__ */ (0, Z.jsx)(Sl, {
		scope: n,
		children: /* @__PURE__ */ (0, Z.jsx)(Qc.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, Z.jsx)("div", {
				ref: t,
				children: r
			})
		})
	}), i) : null;
}, "SelectContentFragment")), xl = 10, [Sl, Cl] = tl(vl), wl = /* @__PURE__ */ Gn("SelectContent.RemoveScroll"), Tl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r } = t, { position: i = qc.ItemAligned, onCloseAutoFocus: a, onEscapeKeyDown: o, onPointerDownOutside: s, side: c, sideOffset: l, align: u, alignOffset: d, arrowPadding: f, collisionBoundary: p, collisionPadding: m, sticky: h, hideWhenDetached: g, avoidCollisions: _, ...v } = t, y = al(vl, r), [b, x] = e.useState(null), [S, C] = e.useState(null), w = zn(n, x), [T, E] = e.useState(null), [D, O] = e.useState(null), k = $c(r), [A, j] = e.useState(!1), M = e.useRef(!1);
	e.useEffect(() => {
		if (b) return Is(b);
	}, [b]), Kr();
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
	let [L, ee] = Zl((e) => {
		let t = k().filter((e) => !e.disabled), n = Ql(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current?.focus());
	}), R = e.useCallback((e, t, n) => {
		let r = !M.current && !n;
		(y.value !== void 0 && y.value === t || r) && (E(e), r && (M.current = !0));
	}, [y.value]), z = e.useCallback(() => b?.focus(), [b]), B = e.useCallback((e, t, n) => {
		let r = !M.current && !n;
		(y.value !== void 0 && y.value === t || r) && O(e);
	}, [y.value]), V = i === qc.Popper ? Dl : El, H = V === Dl ? {
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
	return /* @__PURE__ */ (0, Z.jsx)(Sl, {
		scope: r,
		content: b,
		viewport: S,
		onViewportChange: C,
		itemRefCallback: R,
		selectedItem: T,
		onItemLeave: z,
		itemTextRefCallback: B,
		focusSelectedItem: P,
		selectedItemText: D,
		position: i,
		isPositioned: A,
		searchRef: L,
		children: /* @__PURE__ */ (0, Z.jsx)(Gc, {
			as: wl,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ (0, Z.jsx)($r, {
				asChild: !0,
				trapped: y.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: Tn(a, (e) => {
					y.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ (0, Z.jsx)(Pr, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: o,
					onPointerDownOutside: s,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => y.onOpenChange(!1),
					children: /* @__PURE__ */ (0, Z.jsx)(V, {
						role: "listbox",
						id: y.contentId,
						"data-state": y.open ? "open" : "closed",
						dir: y.dir,
						onContextMenu: (e) => e.preventDefault(),
						...v,
						...H,
						onPlaced: () => j(!0),
						ref: w,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...v.style
						},
						onKeyDown: Tn(v.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && ee(e.key), [
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
}, "SelectContentImpl")), El = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, onPlaced: i, ...a } = t, o = al(vl, r), s = Cl(vl, r), [c, l] = e.useState(null), [u, d] = e.useState(null), f = zn(n, d), p = $c(r), m = e.useRef(!1), h = e.useRef(!0), { viewport: g, selectedItem: _, selectedItemText: v, focusSelectedItem: y } = s, b = e.useCallback(() => {
		if (o.trigger && o.valueNode && c && u && g && _ && v) {
			let e = o.trigger.getBoundingClientRect(), t = u.getBoundingClientRect(), n = o.valueNode.getBoundingClientRect(), r = v.getBoundingClientRect();
			if (o.dir !== Jc.RTL) {
				let i = r.left - t.left, a = n.left - i, o = e.left - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - xl, d = xn(a, [xl, Math.max(xl, u - l)]);
				c.style.minWidth = s + "px", c.style.left = d + "px";
			} else {
				let i = t.right - r.right, a = window.innerWidth - n.right - i, o = window.innerWidth - e.right - a, s = e.width + o, l = Math.max(s, t.width), u = window.innerWidth - xl, d = xn(a, [xl, Math.max(xl, u - l)]);
				c.style.minWidth = s + "px", c.style.right = d + "px";
			}
			let a = p(), s = window.innerHeight - xl * 2, l = g.scrollHeight, d = window.getComputedStyle(u), f = parseInt(d.borderTopWidth, 10), h = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = f + h + l + b + y, S = Math.min(_.offsetHeight * 5, x), C = window.getComputedStyle(g), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - xl, D = s - E, O = _.offsetHeight / 2, k = _.offsetTop + O, A = f + h + k, j = x - A;
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
			c.style.margin = `${xl}px 0`, c.style.minHeight = S + "px", c.style.maxHeight = s + "px", i?.(), requestAnimationFrame(() => m.current = !0);
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
	mi(() => b(), [b]);
	let [x, S] = e.useState();
	return mi(() => {
		u && S(window.getComputedStyle(u).zIndex);
	}, [u]), /* @__PURE__ */ (0, Z.jsx)(Ol, {
		scope: r,
		contentWrapper: c,
		shouldExpandOnScrollRef: m,
		onScrollButtonChange: e.useCallback((e) => {
			e && h.current === !0 && (b(), y?.(), h.current = !1);
		}, [b, y]),
		children: /* @__PURE__ */ (0, Z.jsx)("div", {
			ref: l,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: x
			},
			children: /* @__PURE__ */ (0, Z.jsx)(Sr.div, {
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
}, "SelectItemAlignedPosition")), Dl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = xl, ...a } = e, o = rl(n);
	return /* @__PURE__ */ (0, Z.jsx)(Xo, {
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
}, "SelectPopperPosition")), [Ol, kl] = tl(vl, {}), Al = "SelectViewport", jl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, nonce: i, ...a } = t, o = Cl(Al, r), s = kl(Al, r), c = zn(n, o.onViewportChange), l = e.useRef(0);
	return /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: i
	}), /* @__PURE__ */ (0, Z.jsx)(Qc.Slot, {
		scope: r,
		children: /* @__PURE__ */ (0, Z.jsx)(Sr.div, {
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
			onScroll: Tn(a.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = s;
				if (r?.current && n) {
					let e = Math.abs(l.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - xl * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
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
}, "SelectViewport")), [Ml, Nl] = tl("SelectGroup"), Pl = "SelectItem", [Fl, Il] = tl(Pl), Ll = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, value: i, disabled: a = !1, textValue: o, ...s } = t, c = al(Pl, r), l = Cl(Pl, r), u = c.value === i, [d, f] = e.useState(o ?? ""), [p, m] = e.useState(!1), h = zn(n, Er((e) => l.itemRefCallback?.(e, i, a))), g = yi(), _ = e.useRef("touch"), v = /* @__PURE__ */ $(() => {
		c.onValueChange(i), c.onOpenChange(!1);
	}, "handleSelect");
	return /* @__PURE__ */ (0, Z.jsx)(Fl, {
		scope: r,
		value: i,
		disabled: a,
		textId: g,
		isSelected: u,
		onItemTextChange: e.useCallback((e) => {
			f((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, Z.jsx)(Qc.ItemSlot, {
			scope: r,
			value: i,
			disabled: a,
			textValue: d,
			children: /* @__PURE__ */ (0, Z.jsx)(Sr.div, {
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
				onFocus: Tn(s.onFocus, () => m(!0)),
				onBlur: Tn(s.onBlur, () => m(!1)),
				onClick: Tn(s.onClick, () => {
					a || _.current !== "mouse" && v();
				}),
				onPointerUp: Tn(s.onPointerUp, () => {
					a || _.current === "mouse" && v();
				}),
				onPointerDown: Tn(s.onPointerDown, (e) => {
					_.current = e.pointerType;
				}),
				onPointerMove: Tn(s.onPointerMove, (e) => {
					_.current = e.pointerType, a ? l.onItemLeave?.() : _.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: Tn(s.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && l.onItemLeave?.();
				}),
				onKeyDown: Tn(s.onKeyDown, (e) => {
					a || e.target !== e.currentTarget || l.searchRef?.current !== "" && e.key === " " || (Xc.includes(e.key) && v(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
}, "SelectItem")), Rl = "SelectItemText", zl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, className: i, style: a, ...o } = t, s = al(Rl, r), c = Cl(Rl, r), l = Il(Rl, r), d = sl(Rl, r), [f, p] = e.useState(null), m = Er((e) => c.itemTextRefCallback?.(e, l.value, l.disabled)), h = zn(n, p, l.onItemTextChange, m), g = f?.textContent, _ = e.useMemo(() => /* @__PURE__ */ (0, Z.jsx)("option", {
		value: l.value,
		disabled: l.disabled,
		children: g
	}, l.value), [
		l.disabled,
		l.value,
		g
	]), { onNativeOptionAdd: v, onNativeOptionRemove: y } = d;
	return mi(() => (v(_), () => y(_)), [
		v,
		y,
		_
	]), /* @__PURE__ */ (0, Z.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Z.jsx)(Sr.span, {
		id: l.textId,
		...o,
		ref: h
	}), l.isSelected && s.valueNode && !s.valueNodeHasChildren && !Xl(s.value) ? u.createPortal(o.children, s.valueNode) : null] });
}, "SelectItemText")), Bl = "SelectItemIndicator", Vl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, ...r } = e;
	return Il(Bl, n).isSelected ? /* @__PURE__ */ (0, Z.jsx)(Sr.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
}, "SelectItemIndicator")), Hl = "SelectScrollUpButton", Ul = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let r = Cl(Hl, t.__scopeSelect), i = kl(Hl, t.__scopeSelect), [a, o] = e.useState(!1), s = zn(n, i.onScrollButtonChange);
	return mi(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				let e = t.scrollTop > 0;
				o(e);
			};
			$(e, "handleScroll");
			let t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ (0, Z.jsx)(Kl, {
		...t,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
}, "SelectScrollUpButton")), Wl = "SelectScrollDownButton", Gl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let r = Cl(Wl, t.__scopeSelect), i = kl(Wl, t.__scopeSelect), [a, o] = e.useState(!1), s = zn(n, i.onScrollButtonChange);
	return mi(() => {
		if (r.viewport && r.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight, n = Math.ceil(t.scrollTop) < e;
				o(n);
			};
			$(e, "handleScroll");
			let t = r.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [r.viewport, r.isPositioned]), a ? /* @__PURE__ */ (0, Z.jsx)(Kl, {
		...t,
		ref: s,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = r;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
}, "SelectScrollDownButton")), Kl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function(t, n) {
	let { __scopeSelect: r, onAutoScroll: i, ...a } = t, o = Cl("SelectScrollButton", r), s = e.useRef(null), c = $c(r), l = e.useCallback(() => {
		s.current !== null && (window.clearInterval(s.current), s.current = null);
	}, []);
	return e.useEffect(() => () => l(), [l]), mi(() => {
		c().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [c]), /* @__PURE__ */ (0, Z.jsx)(Sr.div, {
		"aria-hidden": !0,
		...a,
		ref: n,
		style: {
			flexShrink: 0,
			...a.style
		},
		onPointerDown: Tn(a.onPointerDown, () => {
			s.current === null && (s.current = window.setInterval(i, 50));
		}),
		onPointerMove: Tn(a.onPointerMove, () => {
			o.onItemLeave?.(), s.current === null && (s.current = window.setInterval(i, 50));
		}),
		onPointerLeave: Tn(a.onPointerLeave, () => {
			l();
		})
	});
}, "SelectScrollButtonImpl")), ql = "SelectBubbleInput", Jl = /* @__PURE__ */ e.forwardRef(/* @__PURE__ */ $(function({ __scopeSelect: t, ...n }, r) {
	let i = al(ql, t), { value: a, onValueChange: o, required: s, disabled: c, name: l, autoComplete: u, form: d } = i, { nativeOptions: f, nativeSelectKey: p } = i, m = e.useRef(null), h = zn(r, m), g = a ?? "", _ = Es(g), v = Array.from(f).some((e) => (e.props.value ?? "") === "");
	return e.useEffect(() => {
		let e = m.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (_ !== g && n) {
			let t = new Event("change", { bubbles: !0 });
			n.call(e, g), e.dispatchEvent(t);
		}
	}, [_, g]), /* @__PURE__ */ (0, Z.jsxs)(Sr.select, {
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
			...Ds,
			...n.style
		},
		ref: h,
		defaultValue: g,
		children: [Xl(a) && !v ? /* @__PURE__ */ (0, Z.jsx)("option", { value: "" }) : null, Array.from(f)]
	}, p);
}, "SelectBubbleInput"));
function Yl(e) {
	return typeof e == "function";
}
$(Yl, "isFunction");
function Xl(e) {
	return e === "" || e === void 0;
}
$(Xl, "shouldShowPlaceholder");
function Zl(t) {
	let n = Er(t), r = e.useRef(""), i = e.useRef(0), a = e.useCallback((e) => {
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
$(Zl, "useTypeaheadSearch");
function Ql(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = $l(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
$(Ql, "findNextItem");
function $l(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
$($l, "wrapArray");
//#endregion
//#region src/components/atoms/dropdown/dropdown.constants.ts
var eu = rt([
	"flex w-full items-center justify-between",
	"rounded-md border",
	"bg-background text-text-primary",
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
			sm: "h-9 px-3",
			md: "h-11 px-4"
		},
		state: {
			default: "border-input hover:border-primary",
			error: "border-danger focus-visible:ring-danger"
		}
	},
	defaultVariants: {
		size: "md",
		state: "default"
	}
}), tu = rt([
	"z-50",
	"overflow-hidden",
	"rounded-md",
	"border",
	"bg-popover",
	"shadow-md",
	"w-[var(--radix-select-trigger-width)]"
]), nu = t.forwardRef(({ className: e, size: t, state: n, children: r, ...i }, a) => /* @__PURE__ */ (0, Z.jsxs)(dl, {
	ref: a,
	className: et(eu({
		size: t,
		state: n
	}), e),
	...i,
	children: [/* @__PURE__ */ (0, Z.jsx)(Q, {
		as: "span",
		variant: "bodyMd",
		children: r
	}), /* @__PURE__ */ (0, Z.jsx)(ml, {
		asChild: !0,
		children: /* @__PURE__ */ (0, Z.jsx)(lt, {
			icon: At,
			size: "sm"
		})
	})]
}));
nu.displayName = dl.displayName;
//#endregion
//#region src/components/atoms/dropdown/dropdownContent.tsx
var ru = t.forwardRef(({ className: e, children: t, size: n, ...r }, i) => /* @__PURE__ */ (0, Z.jsx)(_l, { children: /* @__PURE__ */ (0, Z.jsxs)(yl, {
	ref: i,
	position: "popper",
	side: "bottom",
	align: "start",
	sideOffset: 8,
	className: et(tu({}), e),
	...r,
	children: [
		/* @__PURE__ */ (0, Z.jsx)(Ul, {
			className: "flex justify-center py-1",
			children: /* @__PURE__ */ (0, Z.jsx)(lt, {
				icon: jt,
				size: "sm"
			})
		}),
		/* @__PURE__ */ (0, Z.jsx)(jl, {
			className: "p-1",
			children: t
		}),
		/* @__PURE__ */ (0, Z.jsx)(Gl, {
			className: "flex justify-center py-1",
			children: /* @__PURE__ */ (0, Z.jsx)(lt, {
				icon: At,
				size: "sm"
			})
		})
	]
}) }));
ru.displayName = yl.displayName;
//#endregion
//#region src/components/atoms/dropdown/dropdownItem.tsx
var iu = t.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, Z.jsxs)(Ll, {
	ref: r,
	className: et("flex w-full cursor-default items-center rounded-md px-3 py-2", "outline-none", "focus:bg-accent", "data-disabled:pointer-events-none data-disabled:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, Z.jsx)(Vl, {
		className: "mr-2 flex h-4 w-4",
		children: /* @__PURE__ */ (0, Z.jsx)(lt, {
			icon: kt,
			size: "sm"
		})
	}), /* @__PURE__ */ (0, Z.jsx)(zl, {
		asChild: !0,
		children: /* @__PURE__ */ (0, Z.jsx)(Q, {
			as: "span",
			variant: "bodyMd",
			className: "text-text-primary",
			children: t
		})
	})]
}));
iu.displayName = Ll.displayName;
//#endregion
//#region src/components/atoms/dropdown/dropdown.tsx
var au = ({ label: e, placeholder: t = "Select option", helperText: n, errorMessage: r, required: i = !1, size: a = "md", state: o = "default", children: s, ...c }) => {
	let l = o === "error";
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "flex w-full flex-col gap-2",
		children: [
			e && /* @__PURE__ */ (0, Z.jsxs)(Q, {
				as: "label",
				variant: "labelMd",
				className: "text-text-primary",
				children: [e, i && /* @__PURE__ */ (0, Z.jsx)(Q, {
					as: "label",
					variant: "labelMd",
					className: "ml-1 text-danger",
					children: "*"
				})]
			}),
			/* @__PURE__ */ (0, Z.jsxs)(ll, {
				...c,
				children: [/* @__PURE__ */ (0, Z.jsx)(nu, {
					size: a,
					state: l ? "error" : "default",
					children: /* @__PURE__ */ (0, Z.jsx)(pl, {
						className: "font-inherit",
						placeholder: t
					})
				}), /* @__PURE__ */ (0, Z.jsx)(ru, {
					size: a,
					children: s
				})]
			}),
			l && r ? /* @__PURE__ */ (0, Z.jsx)(Q, {
				as: "p",
				variant: "bodySm",
				className: "text-danger",
				children: r
			}) : n ? /* @__PURE__ */ (0, Z.jsx)(Q, {
				as: "p",
				variant: "bodySm",
				className: "text-text-secondary",
				children: n
			}) : null
		]
	});
};
au.Item = iu;
//#endregion
//#region src/components/atoms/input/input.constants.ts
var ou = rt([
	it({ variant: "bodyMd" }),
	"flex w-full",
	"rounded-md",
	"border",
	"bg-background",
	"text-text-primary",
	"placeholder:text-text-secondary",
	"transition-colors",
	"outline-none",
	"focus-visible:ring-2",
	"disabled:pointer-events-none",
	"disabled:opacity-50"
], {
	variants: {
		size: {
			sm: "h-9 px-3",
			lg: "h-11 px-4"
		},
		state: {
			default: "border-input hover:border-primary",
			error: "border-danger focus-visible:ring-danger"
		}
	},
	defaultVariants: {
		size: "lg",
		state: "default"
	}
}), su = i(({ className: e, label: t, helperText: n, errorMessage: r, size: i = "lg", state: a = "default", type: o = "text", startAdornment: s, endAdornment: c, ...l }, u) => {
	let d = a === "error", f = et(ou({
		size: i,
		state: a
	}), s && "pl-10", c && "pr-10", e);
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: "flex w-full flex-col gap-2",
		children: [
			t && /* @__PURE__ */ (0, Z.jsx)(Q, {
				as: "label",
				variant: "labelMd",
				className: "text-text-primary",
				children: t
			}),
			/* @__PURE__ */ (0, Z.jsxs)("div", {
				className: "relative flex w-full items-center",
				children: [
					s && /* @__PURE__ */ (0, Z.jsx)("div", {
						className: " absolute left-3 flex items-center text-text-secondary",
						children: s
					}),
					/* @__PURE__ */ (0, Z.jsx)("input", {
						ref: u,
						type: o,
						className: f,
						...l
					}),
					c && /* @__PURE__ */ (0, Z.jsx)("div", {
						className: " absolute right-3 flex items-center text-text-secondary",
						children: c
					})
				]
			}),
			d && r ? /* @__PURE__ */ (0, Z.jsx)(Q, {
				as: "p",
				variant: "bodySm",
				className: "text-danger",
				children: r
			}) : n ? /* @__PURE__ */ (0, Z.jsx)(Q, {
				as: "p",
				variant: "bodySm",
				className: "text-text-secondary",
				children: n
			}) : null
		]
	});
});
su.displayName = "Input";
//#endregion
//#region src/components/atoms/skeleton/skeleton.constants.ts
var cu = {
	text: "text",
	circle: "circle",
	rectangle: "rectangle"
}, lu = {
	text: "rounded-md",
	circle: "rounded-full aspect-square",
	rectangle: "rounded-lg"
}, uu = i(({ className: e, variant: t = cu.rectangle, ...n }, r) => /* @__PURE__ */ (0, Z.jsx)("div", {
	ref: r,
	"aria-hidden": "true",
	className: et("animate-pulse bg-skeleton", lu[t], e),
	...n
}));
uu.displayName = "Skeleton";
//#endregion
//#region src/components/molecules/emptyState/emptyState.constants.ts
var du = rt([
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
}), fu = rt([
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
}), pu = ({ className: e, icon: t, title: n, description: r, action: i, size: a = "md", ...o }) => /* @__PURE__ */ (0, Z.jsxs)("div", {
	className: et(du({ size: a }), e),
	...o,
	children: [
		t && /* @__PURE__ */ (0, Z.jsx)("div", {
			className: fu({ size: a }),
			children: t
		}),
		/* @__PURE__ */ (0, Z.jsxs)("div", {
			className: "flex flex-col gap-1 items-center",
			children: [/* @__PURE__ */ (0, Z.jsx)(Q, {
				as: "h3",
				variant: "h3",
				children: n
			}), r && /* @__PURE__ */ (0, Z.jsx)(Q, {
				as: "p",
				variant: "bodySm",
				className: "text-text-disabled",
				children: r
			})]
		}),
		i && /* @__PURE__ */ (0, Z.jsx)("div", {
			className: "mt-2",
			children: i
		})
	]
}), mu = rt([
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
}), hu = rt(["text-sm"], {
	variants: { state: {
		default: "text-text-secondary",
		error: "text-danger"
	} },
	defaultVariants: { state: "default" }
}), gu = ({ className: e, label: t, required: n = !1, description: r, errorMessage: i, children: a, spacing: o = "md", ...s }) => {
	let c = !!i;
	return /* @__PURE__ */ (0, Z.jsxs)("div", {
		className: et(mu({ spacing: o }), e),
		...s,
		children: [
			t && /* @__PURE__ */ (0, Z.jsxs)(Q, {
				as: "label",
				variant: "bodySm",
				className: "text-text-primary",
				children: [t, n && /* @__PURE__ */ (0, Z.jsx)(Q, {
					as: "span",
					variant: "bodySm",
					className: "text-danger",
					children: "*"
				})]
			}),
			a,
			c ? /* @__PURE__ */ (0, Z.jsx)(Q, {
				as: "p",
				variant: "bodySm",
				className: hu({ state: "error" }),
				children: i
			}) : r ? /* @__PURE__ */ (0, Z.jsx)(Q, {
				as: "p",
				variant: "bodySm",
				className: hu({ state: "default" }),
				children: r
			}) : null
		]
	});
}, _u = i(({ className: e, toggleLabel: t = "Show password", iconSize: n = "lg", ...r }, i) => {
	let [a, o] = l(!1);
	return /* @__PURE__ */ (0, Z.jsx)(su, {
		ref: i,
		type: a ? "text" : "password",
		className: et(e),
		endAdornment: /* @__PURE__ */ (0, Z.jsx)(hn, {
			type: "button",
			variant: "text",
			iconOnly: !0,
			icon: /* @__PURE__ */ (0, Z.jsx)(lt, {
				icon: a ? Nt : Mt,
				size: n
			}),
			onClick: () => {
				o((e) => !e);
			},
			"aria-label": a ? "Hide password" : t,
			"aria-pressed": a
		}),
		...r
	});
});
_u.displayName = "PasswordField";
//#endregion
//#region src/components/organisms/loginForm/loginForm.tsx
var vu = ({ email: e = "", password: t = "", emailError: n, passwordError: r, loading: i = !1, onEmailChange: a, onPasswordChange: o, onSubmit: s }) => /* @__PURE__ */ (0, Z.jsxs)("form", {
	onSubmit: s,
	className: "flex w-full flex-col gap-6",
	children: [
		/* @__PURE__ */ (0, Z.jsx)(gu, {
			label: "Email",
			required: !0,
			errorMessage: n,
			children: /* @__PURE__ */ (0, Z.jsx)(su, {
				type: "email",
				value: e,
				onChange: (e) => a(e.target.value),
				placeholder: "name@email.com"
			})
		}),
		/* @__PURE__ */ (0, Z.jsx)(gu, {
			label: "Password",
			required: !0,
			errorMessage: r,
			children: /* @__PURE__ */ (0, Z.jsx)(_u, {
				value: t,
				onChange: (e) => o?.(e.target.value),
				placeholder: "Enter password"
			})
		}),
		/* @__PURE__ */ (0, Z.jsx)(hn, {
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
export { un as Avatar, hn as Button, vn as Checkbox, au as Dropdown, pu as EmptyState, gu as FormField, lt as Icon, su as Input, vu as LoginForm, mt as Motion, _u as PasswordField, gt as Radius, uu as Skeleton, vt as Spacing, pn as Spinner, dt as Theme, Q as Typography };

//# sourceMappingURL=index.js.map