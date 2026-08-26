"use client";
import { Fragment as e, jsx as t, jsxs as n } from "react/jsx-runtime";
import * as r from "react";
import i, { createContext as a, createElement as o, forwardRef as s, useContext as c, useEffect as l, useLayoutEffect as u, useRef as d, useState as f } from "react";
import * as p from "react-dom";
//#region node_modules/clsx/dist/clsx.mjs
function m(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = m(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function h() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = m(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var g = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, _ = (e, t) => ({
	classGroupId: e,
	validator: t
}), v = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), y = "-", b = [], x = "arbitrary..", S = (e) => {
	let t = T(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return w(e);
			let n = e.split(y);
			return C(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? g(i, t) : t : i || b;
			}
			return n[e] || b;
		}
	};
}, C = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = C(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(y) : e.slice(t).join(y), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, w = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? x + r : void 0;
})(), T = (e) => {
	let { theme: t, classGroups: n } = e;
	return E(n, t);
}, E = (e, t) => {
	let n = v();
	for (let r in e) {
		let i = e[r];
		ee(i, n, r, t);
	}
	return n;
}, ee = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		D(i, t, n, r);
	}
}, D = (e, t, n, r) => {
	if (typeof e == "string") {
		O(e, t, n);
		return;
	}
	if (typeof e == "function") {
		k(e, t, n, r);
		return;
	}
	A(e, t, n, r);
}, O = (e, t, n) => {
	let r = e === "" ? t : j(t, e);
	r.classGroupId = n;
}, k = (e, t, n, r) => {
	if (M(e)) {
		ee(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(_(n, e));
}, A = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		ee(o, j(t, a), n, r);
	}
}, j = (e, t) => {
	let n = e, r = t.split(y), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = v(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, M = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, N = (e) => {
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
}, P = "!", F = ":", te = [], ne = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), re = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === F) {
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
		s.endsWith(P) ? (c = s.slice(0, -1), l = !0) : s.startsWith(P) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return ne(t, l, c, u);
	};
	if (t) {
		let e = t + F, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : ne(te, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, ie = (e) => {
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
}, I = (e) => ({
	cache: N(e.cacheSize),
	parseClassName: re(e),
	sortModifiers: ie(e),
	postfixLookupClassGroupIds: L(e),
	...S(e)
}), L = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, ae = /\s+/, oe = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(ae), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + P : _, y = v + g;
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
}, R = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = se(n)) && (i && (i += " "), i += r);
	return i;
}, se = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = se(e[r])) && (n && (n += " "), n += t);
	return n;
}, ce = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = I(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = oe(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(R(...e));
}, le = [], z = (e) => {
	let t = (t) => t[e] || le;
	return t.isThemeGetter = !0, t;
}, ue = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, de = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fe = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, pe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, me = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, he = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ge = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _e = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ve = (e) => fe.test(e), B = (e) => !!e && !Number.isNaN(Number(e)), ye = (e) => !!e && Number.isInteger(Number(e)), be = (e) => e.endsWith("%") && B(e.slice(0, -1)), xe = (e) => pe.test(e), Se = () => !0, Ce = (e) => me.test(e) && !he.test(e), we = () => !1, Te = (e) => ge.test(e), Ee = (e) => _e.test(e), De = (e) => !V(e) && !H(e), Oe = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), ke = (e) => We(e, Je, we), V = (e) => ue.test(e), Ae = (e) => We(e, Ye, Ce), je = (e) => We(e, Xe, B), Me = (e) => We(e, Qe, Se), Ne = (e) => We(e, Ze, we), Pe = (e) => We(e, Ke, we), Fe = (e) => We(e, qe, Ee), Ie = (e) => We(e, $e, Te), H = (e) => de.test(e), Le = (e) => Ge(e, Ye), Re = (e) => Ge(e, Ze), ze = (e) => Ge(e, Ke), Be = (e) => Ge(e, Je), Ve = (e) => Ge(e, qe), He = (e) => Ge(e, $e, !0), Ue = (e) => Ge(e, Qe, !0), We = (e, t, n) => {
	let r = ue.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Ge = (e, t, n = !1) => {
	let r = de.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Ke = (e) => e === "position" || e === "percentage", qe = (e) => e === "image" || e === "url", Je = (e) => e === "length" || e === "size" || e === "bg-size", Ye = (e) => e === "length", Xe = (e) => e === "number", Ze = (e) => e === "family-name", Qe = (e) => e === "number" || e === "weight", $e = (e) => e === "shadow", et = /*#__PURE__*/ ce(() => {
	let e = z("color"), t = z("font"), n = z("text"), r = z("font-weight"), i = z("tracking"), a = z("leading"), o = z("breakpoint"), s = z("container"), c = z("spacing"), l = z("radius"), u = z("shadow"), d = z("inset-shadow"), f = z("text-shadow"), p = z("drop-shadow"), m = z("blur"), h = z("perspective"), g = z("aspect"), _ = z("ease"), v = z("animate"), y = () => [
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
		H,
		V
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
		H,
		V,
		c
	], T = () => [
		ve,
		"full",
		"auto",
		...w()
	], E = () => [
		ye,
		"none",
		"subgrid",
		H,
		V
	], ee = () => [
		"auto",
		{ span: [
			"full",
			ye,
			H,
			V
		] },
		ye,
		H,
		V
	], D = () => [
		ye,
		"auto",
		H,
		V
	], O = () => [
		"auto",
		"min",
		"max",
		"fr",
		H,
		V
	], k = () => [
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
	], A = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], j = () => ["auto", ...w()], M = () => [
		ve,
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
	], N = () => [
		ve,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], P = () => [
		ve,
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
	], F = () => [
		e,
		H,
		V
	], te = () => [
		...b(),
		ze,
		Pe,
		{ position: [H, V] }
	], ne = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], re = () => [
		"auto",
		"cover",
		"contain",
		Be,
		ke,
		{ size: [H, V] }
	], ie = () => [
		be,
		Le,
		Ae
	], I = () => [
		"",
		"none",
		"full",
		l,
		H,
		V
	], L = () => [
		"",
		B,
		Le,
		Ae
	], ae = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], oe = () => [
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
	], R = () => [
		B,
		be,
		ze,
		Pe
	], se = () => [
		"",
		"none",
		m,
		H,
		V
	], ce = () => [
		"none",
		B,
		H,
		V
	], le = () => [
		"none",
		B,
		H,
		V
	], ue = () => [
		B,
		H,
		V
	], de = () => [
		ve,
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
			blur: [xe],
			breakpoint: [xe],
			color: [Se],
			container: [xe],
			"drop-shadow": [xe],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [De],
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
			"inset-shadow": [xe],
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
			radius: [xe],
			shadow: [xe],
			spacing: ["px", B],
			text: [xe],
			"text-shadow": [xe],
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
				ve,
				V,
				H,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				H,
				V
			] }],
			"container-named": [Oe],
			columns: [{ columns: [
				B,
				V,
				H,
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
				ye,
				"auto",
				H,
				V
			] }],
			basis: [{ basis: [
				ve,
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
				B,
				ve,
				"auto",
				"initial",
				"none",
				V
			] }],
			grow: [{ grow: [
				"",
				B,
				H,
				V
			] }],
			shrink: [{ shrink: [
				"",
				B,
				H,
				V
			] }],
			order: [{ order: [
				ye,
				"first",
				"last",
				"none",
				H,
				V
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: ee() }],
			"col-start": [{ "col-start": D() }],
			"col-end": [{ "col-end": D() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: ee() }],
			"row-start": [{ "row-start": D() }],
			"row-end": [{ "row-end": D() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": O() }],
			"auto-rows": [{ "auto-rows": O() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...k(), "normal"] }],
			"justify-items": [{ "justify-items": [...A(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...A()] }],
			"align-content": [{ content: ["normal", ...k()] }],
			"align-items": [{ items: [...A(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...A(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": k() }],
			"place-items": [{ "place-items": [...A(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...A()] }],
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
			m: [{ m: j() }],
			mx: [{ mx: j() }],
			my: [{ my: j() }],
			ms: [{ ms: j() }],
			me: [{ me: j() }],
			mbs: [{ mbs: j() }],
			mbe: [{ mbe: j() }],
			mt: [{ mt: j() }],
			mr: [{ mr: j() }],
			mb: [{ mb: j() }],
			ml: [{ ml: j() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: M() }],
			"inline-size": [{ inline: ["auto", ...N()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...N()] }],
			"max-inline-size": [{ "max-inline": ["none", ...N()] }],
			"block-size": [{ block: ["auto", ...P()] }],
			"min-block-size": [{ "min-block": ["auto", ...P()] }],
			"max-block-size": [{ "max-block": ["none", ...P()] }],
			w: [{ w: [
				s,
				"screen",
				...M()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...M()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...M()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...M()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...M()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...M()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Le,
				Ae
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Ue,
				Me
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
				be,
				V
			] }],
			"font-family": [{ font: [
				Re,
				Ne,
				t
			] }],
			"font-features": [{ "font-features": [V] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				H,
				V
			] }],
			"line-clamp": [{ "line-clamp": [
				B,
				"none",
				H,
				je
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				H,
				V
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				H,
				V
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: F() }],
			"text-color": [{ text: F() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...ae(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				B,
				"from-font",
				"auto",
				H,
				Ae
			] }],
			"text-decoration-color": [{ decoration: F() }],
			"underline-offset": [{ "underline-offset": [
				B,
				"auto",
				H,
				V
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
				ye,
				H,
				V
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
				H,
				V
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
				H,
				V
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
			"bg-position": [{ bg: te() }],
			"bg-repeat": [{ bg: ne() }],
			"bg-size": [{ bg: re() }],
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
						ye,
						H,
						V
					],
					radial: [
						"",
						H,
						V
					],
					conic: [
						ye,
						H,
						V
					]
				},
				Ve,
				Fe
			] }],
			"bg-color": [{ bg: F() }],
			"gradient-from-pos": [{ from: ie() }],
			"gradient-via-pos": [{ via: ie() }],
			"gradient-to-pos": [{ to: ie() }],
			"gradient-from": [{ from: F() }],
			"gradient-via": [{ via: F() }],
			"gradient-to": [{ to: F() }],
			rounded: [{ rounded: I() }],
			"rounded-s": [{ "rounded-s": I() }],
			"rounded-e": [{ "rounded-e": I() }],
			"rounded-t": [{ "rounded-t": I() }],
			"rounded-r": [{ "rounded-r": I() }],
			"rounded-b": [{ "rounded-b": I() }],
			"rounded-l": [{ "rounded-l": I() }],
			"rounded-ss": [{ "rounded-ss": I() }],
			"rounded-se": [{ "rounded-se": I() }],
			"rounded-ee": [{ "rounded-ee": I() }],
			"rounded-es": [{ "rounded-es": I() }],
			"rounded-tl": [{ "rounded-tl": I() }],
			"rounded-tr": [{ "rounded-tr": I() }],
			"rounded-br": [{ "rounded-br": I() }],
			"rounded-bl": [{ "rounded-bl": I() }],
			"border-w": [{ border: L() }],
			"border-w-x": [{ "border-x": L() }],
			"border-w-y": [{ "border-y": L() }],
			"border-w-s": [{ "border-s": L() }],
			"border-w-e": [{ "border-e": L() }],
			"border-w-bs": [{ "border-bs": L() }],
			"border-w-be": [{ "border-be": L() }],
			"border-w-t": [{ "border-t": L() }],
			"border-w-r": [{ "border-r": L() }],
			"border-w-b": [{ "border-b": L() }],
			"border-w-l": [{ "border-l": L() }],
			"divide-x": [{ "divide-x": L() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": L() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...ae(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...ae(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: F() }],
			"border-color-x": [{ "border-x": F() }],
			"border-color-y": [{ "border-y": F() }],
			"border-color-s": [{ "border-s": F() }],
			"border-color-e": [{ "border-e": F() }],
			"border-color-bs": [{ "border-bs": F() }],
			"border-color-be": [{ "border-be": F() }],
			"border-color-t": [{ "border-t": F() }],
			"border-color-r": [{ "border-r": F() }],
			"border-color-b": [{ "border-b": F() }],
			"border-color-l": [{ "border-l": F() }],
			"divide-color": [{ divide: F() }],
			"outline-style": [{ outline: [
				...ae(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				B,
				H,
				V
			] }],
			"outline-w": [{ outline: [
				"",
				B,
				Le,
				Ae
			] }],
			"outline-color": [{ outline: F() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				He,
				Ie
			] }],
			"shadow-color": [{ shadow: F() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				He,
				Ie
			] }],
			"inset-shadow-color": [{ "inset-shadow": F() }],
			"ring-w": [{ ring: L() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: F() }],
			"ring-offset-w": [{ "ring-offset": [B, Ae] }],
			"ring-offset-color": [{ "ring-offset": F() }],
			"inset-ring-w": [{ "inset-ring": L() }],
			"inset-ring-color": [{ "inset-ring": F() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				He,
				Ie
			] }],
			"text-shadow-color": [{ "text-shadow": F() }],
			opacity: [{ opacity: [
				B,
				H,
				V
			] }],
			"mix-blend": [{ "mix-blend": [
				...oe(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": oe() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [B] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": R() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": R() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": F() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": F() }],
			"mask-image-t-from-pos": [{ "mask-t-from": R() }],
			"mask-image-t-to-pos": [{ "mask-t-to": R() }],
			"mask-image-t-from-color": [{ "mask-t-from": F() }],
			"mask-image-t-to-color": [{ "mask-t-to": F() }],
			"mask-image-r-from-pos": [{ "mask-r-from": R() }],
			"mask-image-r-to-pos": [{ "mask-r-to": R() }],
			"mask-image-r-from-color": [{ "mask-r-from": F() }],
			"mask-image-r-to-color": [{ "mask-r-to": F() }],
			"mask-image-b-from-pos": [{ "mask-b-from": R() }],
			"mask-image-b-to-pos": [{ "mask-b-to": R() }],
			"mask-image-b-from-color": [{ "mask-b-from": F() }],
			"mask-image-b-to-color": [{ "mask-b-to": F() }],
			"mask-image-l-from-pos": [{ "mask-l-from": R() }],
			"mask-image-l-to-pos": [{ "mask-l-to": R() }],
			"mask-image-l-from-color": [{ "mask-l-from": F() }],
			"mask-image-l-to-color": [{ "mask-l-to": F() }],
			"mask-image-x-from-pos": [{ "mask-x-from": R() }],
			"mask-image-x-to-pos": [{ "mask-x-to": R() }],
			"mask-image-x-from-color": [{ "mask-x-from": F() }],
			"mask-image-x-to-color": [{ "mask-x-to": F() }],
			"mask-image-y-from-pos": [{ "mask-y-from": R() }],
			"mask-image-y-to-pos": [{ "mask-y-to": R() }],
			"mask-image-y-from-color": [{ "mask-y-from": F() }],
			"mask-image-y-to-color": [{ "mask-y-to": F() }],
			"mask-image-radial": [{ "mask-radial": [H, V] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": R() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": R() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": F() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": F() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [B] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": R() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": R() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": F() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": F() }],
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
			"mask-position": [{ mask: te() }],
			"mask-repeat": [{ mask: ne() }],
			"mask-size": [{ mask: re() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				H,
				V
			] }],
			filter: [{ filter: [
				"",
				"none",
				H,
				V
			] }],
			blur: [{ blur: se() }],
			brightness: [{ brightness: [
				B,
				H,
				V
			] }],
			contrast: [{ contrast: [
				B,
				H,
				V
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				He,
				Ie
			] }],
			"drop-shadow-color": [{ "drop-shadow": F() }],
			grayscale: [{ grayscale: [
				"",
				B,
				H,
				V
			] }],
			"hue-rotate": [{ "hue-rotate": [
				B,
				H,
				V
			] }],
			invert: [{ invert: [
				"",
				B,
				H,
				V
			] }],
			saturate: [{ saturate: [
				B,
				H,
				V
			] }],
			sepia: [{ sepia: [
				"",
				B,
				H,
				V
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				H,
				V
			] }],
			"backdrop-blur": [{ "backdrop-blur": se() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				B,
				H,
				V
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				B,
				H,
				V
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				B,
				H,
				V
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				B,
				H,
				V
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				B,
				H,
				V
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				B,
				H,
				V
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				B,
				H,
				V
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				B,
				H,
				V
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
				H,
				V
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				B,
				"initial",
				H,
				V
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				H,
				V
			] }],
			delay: [{ delay: [
				B,
				H,
				V
			] }],
			animate: [{ animate: [
				"none",
				v,
				H,
				V
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				H,
				V
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: ce() }],
			"rotate-x": [{ "rotate-x": ce() }],
			"rotate-y": [{ "rotate-y": ce() }],
			"rotate-z": [{ "rotate-z": ce() }],
			scale: [{ scale: le() }],
			"scale-x": [{ "scale-x": le() }],
			"scale-y": [{ "scale-y": le() }],
			"scale-z": [{ "scale-z": le() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ue() }],
			"skew-x": [{ "skew-x": ue() }],
			"skew-y": [{ "skew-y": ue() }],
			transform: [{ transform: [
				H,
				V,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: de() }],
			"translate-x": [{ "translate-x": de() }],
			"translate-y": [{ "translate-y": de() }],
			"translate-z": [{ "translate-z": de() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				ye,
				H,
				V
			] }],
			accent: [{ accent: F() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: F() }],
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
				H,
				V
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
			"scrollbar-thumb-color": [{ "scrollbar-thumb": F() }],
			"scrollbar-track-color": [{ "scrollbar-track": F() }],
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
				H,
				V
			] }],
			fill: [{ fill: ["none", ...F()] }],
			"stroke-w": [{ stroke: [
				B,
				Le,
				Ae,
				je
			] }],
			stroke: [{ stroke: ["none", ...F()] }],
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
function U(...e) {
	return et(h(e));
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var tt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, nt = h, rt = (e, t) => (n) => {
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
});
//#endregion
//#region src/foundations/typography/typography.tsx
function W({ children: e, variant: n = "bodyMd", as: r = "p", className: i, ...a }) {
	return /* @__PURE__ */ t(r, {
		className: U(it({ variant: n }), i),
		...a,
		children: e
	});
}
//#endregion
//#region src/foundations/icon/icon.constants.ts
var at = {
	xs: "size-3",
	sm: "size-4",
	md: "size-5",
	lg: "size-6",
	xl: "size-8"
};
//#endregion
//#region src/foundations/icon/icon.tsx
function ot({ icon: e, size: n = "md", className: r, ariaHidden: i = !0 }) {
	return /* @__PURE__ */ t(e, {
		className: U(at[n], "shrink-0", r),
		strokeWidth: 2,
		"aria-hidden": i
	});
}
//#endregion
//#region src/foundations/theme/theme.constants.ts
var st = [
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
function ct() {
	return /* @__PURE__ */ t("div", {
		className: "space-y-12",
		children: st.map((e) => /* @__PURE__ */ n("section", {
			className: "space-y-4",
			children: [/* @__PURE__ */ t("h2", {
				className: "\n            text-xl\n            font-semibold\n            font-heading\n          ",
				children: e.name
			}), /* @__PURE__ */ t("div", {
				className: "\n            grid\n            grid-cols-1\n            md:grid-cols-2\n            gap-4\n          ",
				children: e.tokens.map((e) => /* @__PURE__ */ n("div", {
					className: "\n                  border\n                  rounded-lg\n                  overflow-hidden\n                  bg-background\n                ",
					children: [/* @__PURE__ */ t("div", { className: `
                    h-20
                    ${e.className}
                  ` }), /* @__PURE__ */ n("div", {
						className: "\n                  p-4\n                  space-y-1\n                ",
						children: [/* @__PURE__ */ t("p", {
							className: "\n                    font-medium\n                  ",
							children: e.name
						}), /* @__PURE__ */ t("code", {
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
var lt = [
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
], ut = [
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
function dt() {
	return /* @__PURE__ */ n("div", {
		className: "space-y-10",
		children: [/* @__PURE__ */ n("section", {
			className: "space-y-6",
			children: [/* @__PURE__ */ t("h2", {
				className: "text-xl font-semibold",
				children: "Duration"
			}), lt.map((e) => /* @__PURE__ */ n("div", {
				className: "\n                flex\n                items-center\n                gap-6\n              ",
				children: [/* @__PURE__ */ t("div", {
					className: "\n                  size-12\n                  rounded-md\n                  bg-primary\n                  animate-pulse\n                ",
					style: { animationDuration: e.value }
				}), /* @__PURE__ */ n("div", { children: [
					/* @__PURE__ */ t("p", {
						className: "font-medium",
						children: e.name
					}),
					/* @__PURE__ */ t("p", {
						className: "\n                  text-sm\n                  text-text-secondary\n                ",
						children: e.value
					}),
					/* @__PURE__ */ t("p", {
						className: "\n                  text-sm\n                  text-text-secondary\n                ",
						children: e.usage
					})
				] })]
			}, e.name))]
		}), /* @__PURE__ */ n("section", {
			className: "space-y-6",
			children: [/* @__PURE__ */ t("h2", {
				className: "text-xl font-semibold",
				children: "Easing"
			}), ut.map((e) => /* @__PURE__ */ n("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ t("p", {
						className: "font-medium",
						children: e.name
					}),
					/* @__PURE__ */ t("p", {
						className: "\n                text-sm\n                text-text-secondary\n              ",
						children: e.value
					}),
					/* @__PURE__ */ t("p", {
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
var ft = [
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
function pt() {
	return /* @__PURE__ */ t("div", {
		className: "\n      space-y-8\n    ",
		children: ft.map((e) => /* @__PURE__ */ n("div", {
			className: "\n            space-y-3\n          ",
			children: [/* @__PURE__ */ n("div", {
				className: "\n            flex\n            items-center\n            gap-6\n          ",
				children: [/* @__PURE__ */ t("div", { className: `
                size-24
                bg-primary
                ${e.className}
              ` }), /* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("p", {
					className: "\n                font-medium\n              ",
					children: e.name
				}), /* @__PURE__ */ t("p", {
					className: "\n                text-sm\n                text-text-secondary\n              ",
					children: e.value
				})] })]
			}), /* @__PURE__ */ t("p", {
				className: "\n            text-sm\n            text-text-secondary\n          ",
				children: e.usage
			})]
		}, e.name))
	});
}
//#endregion
//#region src/foundations/spacing/spacing.constants.ts
var mt = [
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
function ht() {
	return /* @__PURE__ */ t("div", {
		className: "space-y-8",
		children: mt.map((e) => /* @__PURE__ */ n("div", {
			className: "\n            space-y-3\n          ",
			children: [/* @__PURE__ */ n("div", {
				className: "\n            flex\n            items-center\n            gap-4\n          ",
				children: [/* @__PURE__ */ t("div", {
					className: `
                ${e.className}
                bg-primary
                rounded-md
              `,
					children: /* @__PURE__ */ t("div", { className: "\n                  size-8\n                  bg-primary\n                  rounded-md\n                " })
				}), /* @__PURE__ */ n("div", { children: [/* @__PURE__ */ t("p", {
					className: "\n                font-medium\n              ",
					children: e.name
				}), /* @__PURE__ */ t("p", {
					className: "\n                text-sm\n                text-text-secondary\n              ",
					children: e.value
				})] })]
			}), /* @__PURE__ */ t("p", {
				className: "\n            text-sm\n            text-text-secondary\n          ",
				children: e.usage
			})]
		}, e.name))
	});
}
//#endregion
//#region src/providers/themeProvider/themeProvider.tsx
var gt = a(void 0), _t = ({ children: e }) => {
	let [n, r] = f("light");
	l(() => {
		let e = localStorage.getItem("bina-theme"), t = e === "dark" || e === "light" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		r(t), document.documentElement.classList.toggle("dark", t === "dark");
	}, []);
	let i = (e) => {
		r(e), localStorage.setItem("bina-theme", e), document.documentElement.classList.toggle("dark", e === "dark");
	};
	return /* @__PURE__ */ t(gt.Provider, {
		value: {
			theme: n,
			setTheme: i,
			toggleTheme: () => {
				i(n === "dark" ? "light" : "dark");
			}
		},
		children: e
	});
}, vt = () => {
	let e = c(gt);
	if (!e) throw Error("useTheme must be used within a ThemeProvider");
	return e;
}, yt = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), bt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), xt = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), St = (e) => {
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
}, Tt = a({}), Et = () => c(Tt), Dt = s(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: s, ...c }, l) => {
	let { size: u = 24, strokeWidth: d = 2, absoluteStrokeWidth: f = !1, color: p = "currentColor", className: m = "" } = Et() ?? {}, h = r ?? f ? Number(n ?? d) * 24 / Number(t ?? u) : n ?? d;
	return o("svg", {
		ref: l,
		...Ct,
		width: t ?? u ?? Ct.width,
		height: t ?? u ?? Ct.height,
		stroke: e ?? p,
		strokeWidth: h,
		className: yt("lucide", m, i),
		...!a && !wt(c) && { "aria-hidden": "true" },
		...c
	}, [...s.map(([e, t]) => o(e, t)), ...Array.isArray(a) ? a : [a]]);
}), Ot = (e, t) => {
	let n = s(({ className: n, ...r }, i) => o(Dt, {
		ref: i,
		iconNode: t,
		className: yt(`lucide-${bt(St(e))}`, `lucide-${e}`, n),
		...r
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
}]]), Ft = Ot("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]), It = Ot("sun", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "m17.66 17.66 1.41 1.41",
		key: "ptbguv"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "m6.34 17.66-1.41 1.41",
		key: "1m8zz5"
	}],
	["path", {
		d: "m19.07 4.93-1.41 1.41",
		key: "1shlcs"
	}]
]), Lt = Ot("user-round", [["circle", {
	cx: "12",
	cy: "8",
	r: "5",
	key: "1hypcn"
}], ["path", {
	d: "M20 21a8 8 0 0 0-16 0",
	key: "rfgkzh"
}]]), Rt = {
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
}, zt = {
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
}, Bt = rt([
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
		sm: Rt.sm.avatar,
		md: Rt.md.avatar,
		lg: Rt.lg.avatar,
		xl: Rt.xl.avatar
	} },
	defaultVariants: { size: "md" }
}), Vt = rt([
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
function Ht(e) {
	return e ? e.split(" ").map((e) => e[0]).join("").slice(0, 2).toUpperCase() : null;
}
var Ut = s(({ size: e = "md", src: r, alt: i = "Avatar", name: a, fallback: o, status: s, className: c, ...l }, u) => {
	let d = Ht(a);
	return /* @__PURE__ */ n("div", {
		ref: u,
		className: "relative inline-flex",
		...l,
		children: [/* @__PURE__ */ t("div", {
			className: U(Bt({ size: e }), c),
			children: r ? /* @__PURE__ */ t("img", {
				src: r,
				alt: i,
				className: "size-full object-cover"
			}) : d ? /* @__PURE__ */ t(W, {
				as: "span",
				variant: "labelMd",
				children: d
			}) : o || /* @__PURE__ */ t(Lt, {
				"aria-hidden": "true",
				className: "size-1/2"
			})
		}), s && /* @__PURE__ */ t("span", {
			"aria-label": zt[s].label,
			className: U(Vt({ status: s }), Rt[e ?? "md"].indicator)
		})]
	});
});
Ut.displayName = "Avatar";
//#endregion
//#region src/components/atoms/button/button.constants.ts
var Wt = {
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
}, Gt = rt([
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
}), Kt = ({ className: e, size: n = "md", variant: r = "default", ariaLabel: i = "Loading", ...a }) => /* @__PURE__ */ t("div", {
	role: "status",
	"aria-live": "polite",
	className: U(Gt({
		size: n,
		variant: r
	}), e),
	...a,
	children: /* @__PURE__ */ t("span", {
		className: "sr-only",
		children: i
	})
}), qt = rt([
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
			tertiary: "bg-tertiary text-tertiary-foreground hover:bg-tertiary-hover",
			outline: "border border-border bg-transparent text-text-primary hover:bg-surface-subtle",
			success: "bg-success text-success-foreground hover:bg-success-hover",
			danger: "bg-danger text-danger-foreground hover:bg-danger-hover",
			text: "text-text-primary hover:bg-surface-subtle",
			link: "text-primary underline underline-offset-4"
		},
		size: {
			sm: `

					${Wt.sm.height}

					${Wt.sm.padding}

					[&_svg]:${Wt.sm.icon}

				`,
			lg: `

					${Wt.lg.height}

					${Wt.lg.padding}

					[&_svg]:${Wt.lg.icon}

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
function Jt({ variant: r, size: i = "lg", width: a, icon: o, iconOnly: s, iconPosition: c = "left", loading: l = !1, children: u, className: d, disabled: f, ...p }) {
	let m = i === "lg" ? "labelLg" : "labelMd";
	return /* @__PURE__ */ n("button", {
		className: U(qt({
			variant: r,
			size: i,
			width: a
		}), d),
		disabled: f || l,
		"aria-busy": l,
		...p,
		children: [l && /* @__PURE__ */ t(Kt, {
			size: "sm",
			variant: r === "primary" ? "inverse" : "default"
		}), s ? o : /* @__PURE__ */ n(e, { children: [
			o && c === "left" && o,
			/* @__PURE__ */ t(W, {
				as: "span",
				variant: m,
				className: "text-inherit",
				children: u
			}),
			o && c === "right" && o
		] })]
	});
}
//#endregion
//#region src/components/atoms/card/card.constants.ts
var Yt = {
	default: "default",
	outlined: "outlined",
	elevated: "elevated"
}, Xt = {
	default: "bg-card",
	outlined: "bg-card border border-border",
	elevated: "bg-card border border-border shadow-md"
}, Zt = s(({ className: e, variant: n = Yt.default, ...r }, i) => /* @__PURE__ */ t("div", {
	ref: i,
	className: U("rounded-xl", Xt[n], e),
	...r
}));
Zt.displayName = "Card";
//#endregion
//#region src/components/atoms/checkbox/checkbox.constants.ts
var Qt = {
	box: "size-5",
	icon: "size-4",
	gap: "gap-spacing-md",
	hitArea: "min-h-11 min-w-11"
}, $t = rt([
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
function en({ label: e, description: r, required: i, errorMessage: a, indeterminate: o = !1, variant: s, className: c, disabled: u, ...f }) {
	let p = d(null);
	return l(() => {
		p.current && (p.current.indeterminate = o);
	}, [o]), /* @__PURE__ */ n("label", {
		"aria-disabled": u,
		className: U("flex", r ? "items-start" : "items-center", "select-none", "cursor-pointer", Qt.gap, u && "cursor-not-allowed"),
		children: [/* @__PURE__ */ n("div", {
			className: U("relative", "flex", "items-center", "justify-center", Qt.hitArea),
			children: [
				/* @__PURE__ */ t("input", {
					ref: p,
					type: "checkbox",
					className: U($t({ variant: s }), Qt.box, c),
					disabled: u,
					...f
				}),
				/* @__PURE__ */ t(ot, {
					icon: kt,
					size: "sm",
					className: U("absolute", "hidden", "pointer-events-none", "text-text-primary", Qt.icon, "peer-checked:block")
				}),
				/* @__PURE__ */ t(ot, {
					icon: Pt,
					size: "sm",
					className: U("absolute", "hidden", "pointer-events-none", "text-text-primary", Qt.icon, "peer-indeterminate:block")
				})
			]
		}), /* @__PURE__ */ n("div", {
			className: "flex flex-col gap-spacing-xs",
			children: [
				e && /* @__PURE__ */ n(W, {
					as: "span",
					variant: "labelMd",
					className: "text-text-primary",
					children: [e, i && /* @__PURE__ */ t(W, {
						as: "span",
						variant: "labelMd",
						className: "text-danger spacing-xs",
						children: "*"
					})]
				}),
				r && /* @__PURE__ */ t(W, {
					as: "p",
					variant: "bodySm",
					className: "text-text-secondary",
					children: r
				}),
				a && /* @__PURE__ */ t(W, {
					as: "p",
					variant: "bodySm",
					className: "text-danger",
					children: a
				})
			]
		})]
	});
}
//#endregion
//#region node_modules/@radix-ui/number/dist/index.mjs
var tn = Object.defineProperty, nn = (e, t) => tn(e, "name", {
	value: t,
	configurable: !0
});
function rn(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
nn(rn, "clamp");
//#endregion
//#region node_modules/@radix-ui/primitive/dist/index.mjs
var an = Object.defineProperty, on = (e, t) => an(e, "name", {
	value: t,
	configurable: !0
}), sn = !!(typeof window < "u" && window.document && window.document.createElement);
function G(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ on(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
on(G, "composeEventHandlers");
function cn(e) {
	if (!sn) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
on(cn, "getOwnerWindow");
function ln(e) {
	if (!sn) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
on(ln, "getOwnerDocument");
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
on(un, "getActiveElement");
function dn(e) {
	return e.tagName === "IFRAME";
}
on(dn, "isFrame");
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
var fn = Object.defineProperty, pn = (e, t) => fn(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function mn(e, n) {
	let i = r.createContext(n);
	i.displayName = e + "Context";
	let a = /* @__PURE__ */ pn((e) => {
		let { children: n, ...a } = e, o = r.useMemo(() => a, Object.values(a));
		return /* @__PURE__ */ t(i.Provider, {
			value: o,
			children: n
		});
	}, "Provider");
	a.displayName = e + "Provider";
	function o(t, a = {}) {
		let { optional: o = !1 } = a, s = r.useContext(i);
		if (s) return s;
		if (n !== void 0) return n;
		if (!o) throw Error(`\`${t}\` must be used within \`${e}\``);
	}
	return pn(o, "useContext"), [a, o];
}
pn(mn, "createContext");
// @__NO_SIDE_EFFECTS__
function hn(e, n = []) {
	let i = [];
	function a(n, a) {
		let o = r.createContext(a);
		o.displayName = n + "Context";
		let s = i.length;
		i = [...i, a];
		let c = /* @__PURE__ */ pn((n) => {
			let { scope: i, children: a, ...c } = n, l = i?.[e]?.[s] || o, u = r.useMemo(() => c, Object.values(c));
			return /* @__PURE__ */ t(l.Provider, {
				value: u,
				children: a
			});
		}, "Provider");
		c.displayName = n + "Provider";
		function l(t, i, c = {}) {
			let { optional: l = !1 } = c, u = i?.[e]?.[s] || o, d = r.useContext(u);
			if (d) return d;
			if (a !== void 0) return a;
			if (!l) throw Error(`\`${t}\` must be used within \`${n}\``);
		}
		return pn(l, "useContext"), [c, l];
	}
	pn(a, "createContext");
	let o = /* @__PURE__ */ pn(() => {
		let t = i.map((e) => r.createContext(e));
		return /* @__PURE__ */ pn(function(n) {
			let i = n?.[e] || t;
			return r.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: i
			} }), [n, i]);
		}, "useScope");
	}, "createScope");
	return o.scopeName = e, [a, gn(o, ...n)];
}
pn(hn, "createContextScope");
function gn(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = /* @__PURE__ */ pn(() => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ pn(function(e) {
			let i = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return r.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
		}, "useComposedScopes");
	}, "createScope");
	return n.scopeName = t.scopeName, n;
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
function K(...e) {
	return r.useCallback(bn(...e), e);
}
vn(K, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
var xn = Object.defineProperty, Sn = (e, t) => xn(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Cn(e) {
	let t = r.forwardRef((t, n) => {
		let { children: i, ...a } = t, o = null, s = !1, c = [];
		jn(i) && typeof Fn == "function" && (i = Fn(i._payload)), r.Children.forEach(i, (e) => {
			if (kn(e)) {
				s = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				jn(n) && typeof Fn == "function" && (n = Fn(n._payload)), o = En(t, n), c.push(o?.props?.children);
			} else c.push(e);
		}), o ? o = r.cloneElement(o, void 0, c) : !s && r.Children.count(i) === 1 && r.isValidElement(i) && (o = i);
		let l = o ? On(o) : void 0, u = K(n, l);
		if (!o) {
			if (i || i === 0) throw Error(s ? Pn(e) : Nn(e));
			return i;
		}
		let d = Dn(a, o.props ?? {});
		return o.type !== r.Fragment && (d.ref = n ? u : l), r.cloneElement(o, d);
	});
	return t.displayName = `${e}.Slot`, t;
}
Sn(Cn, "createSlot");
var wn = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Tn(e) {
	let t = /* @__PURE__ */ Sn((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = wn, t;
}
Sn(Tn, "createSlottable");
var En = /* @__PURE__ */ Sn((e, t) => {
	if ("child" in e.props) {
		let t = e.props.child;
		return r.isValidElement(t) ? r.cloneElement(t, void 0, e.props.children(t.props.children)) : null;
	}
	return r.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Dn(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
Sn(Dn, "mergeProps");
function On(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Sn(On, "getElementRef");
function kn(e) {
	return r.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === wn;
}
Sn(kn, "isSlottable");
var An = Symbol.for("react.lazy");
function jn(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === An && "_payload" in e && Mn(e._payload);
}
Sn(jn, "isLazyComponent");
function Mn(e) {
	return typeof e == "object" && !!e && "then" in e;
}
Sn(Mn, "isPromiseLike");
var Nn = /* @__PURE__ */ Sn((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Pn = /* @__PURE__ */ Sn((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Fn = r.use, In = Object.defineProperty, q = (e, t) => In(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Ln(e) {
	let n = e + "CollectionProvider", [i, a] = /* @__PURE__ */ hn(n), [o, s] = i(n, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), c = /* @__PURE__ */ q((e) => {
		let { scope: n, children: i } = e, a = r.useRef(null), s = r.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ t(o, {
			scope: n,
			itemMap: s,
			collectionRef: a,
			children: i
		});
	}, "CollectionProvider");
	c.displayName = n;
	let l = e + "CollectionSlot", u = /* @__PURE__ */ Cn(l), d = r.forwardRef((e, n) => {
		let { scope: r, children: i } = e, a = K(n, s(l, r).collectionRef);
		return /* @__PURE__ */ t(u, {
			ref: a,
			children: i
		});
	});
	d.displayName = l;
	let f = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ Cn(f), h = r.forwardRef((e, n) => {
		let { scope: i, children: a, ...o } = e, c = r.useRef(null), l = K(n, c), u = s(f, i);
		return r.useEffect(() => (u.itemMap.set(c, {
			ref: c,
			...o
		}), () => void u.itemMap.delete(c))), /* @__PURE__ */ t(m, {
			[p]: "",
			ref: l,
			children: a
		});
	});
	h.displayName = f;
	function g(t) {
		let n = s(e + "CollectionConsumer", t);
		return r.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${p}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return q(g, "useCollection"), [
		{
			Provider: c,
			Slot: d,
			ItemSlot: h
		},
		g,
		a
	];
}
q(Ln, "createCollection");
var Rn = /* @__PURE__ */ new WeakMap(), zn = class e extends Map {
	static {
		q(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], Rn.set(this, !0);
	}
	set(e, t) {
		return Rn.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = Hn(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
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
		let t = Bn(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = Bn(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return Bn(this.#e, e);
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
function Bn(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = Vn(e, t);
	return n === -1 ? void 0 : e[n];
}
q(Bn, "at");
function Vn(e, t) {
	let n = e.length, r = Hn(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
q(Vn, "toSafeIndex");
function Hn(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
q(Hn, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Un(e) {
	let n = e + "CollectionProvider", [i, a] = /* @__PURE__ */ hn(n), [o, s] = i(n, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new zn(),
		setItemMap: /* @__PURE__ */ q(() => void 0, "setItemMap")
	}), c = /* @__PURE__ */ q(({ state: e, ...n }) => e ? /* @__PURE__ */ t(u, {
		...n,
		state: e
	}) : /* @__PURE__ */ t(l, { ...n }), "CollectionProvider");
	c.displayName = n;
	let l = /* @__PURE__ */ q((e) => {
		let n = _();
		return /* @__PURE__ */ t(u, {
			...e,
			state: n
		});
	}, "CollectionInit");
	l.displayName = n + "Init";
	let u = /* @__PURE__ */ q((e) => {
		let { scope: n, children: i, state: a } = e, s = r.useRef(null), [c, l] = r.useState(null), u = K(s, l), [d, f] = a;
		return r.useEffect(() => {
			if (!c) return;
			let e = qn(() => {});
			return e.observe(c, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [c]), /* @__PURE__ */ t(o, {
			scope: n,
			itemMap: d,
			setItemMap: f,
			collectionRef: u,
			collectionRefObject: s,
			collectionElement: c,
			children: i
		});
	}, "CollectionProviderImpl");
	u.displayName = n + "Impl";
	let d = e + "CollectionSlot", f = /* @__PURE__ */ Cn(d), p = r.forwardRef((e, n) => {
		let { scope: r, children: i } = e, a = K(n, s(d, r).collectionRef);
		return /* @__PURE__ */ t(f, {
			ref: a,
			children: i
		});
	});
	p.displayName = d;
	let m = e + "CollectionItemSlot", h = /* @__PURE__ */ Cn(m), g = r.forwardRef((e, n) => {
		let { scope: i, children: a, ...o } = e, c = r.useRef(null), [l, u] = r.useState(null), d = K(n, c, u), { setItemMap: f } = s(m, i), p = r.useRef(o);
		Wn(p.current, o) || (p.current = o);
		let g = p.current;
		return r.useEffect(() => {
			let e = g;
			return f((t) => l ? t.has(l) ? t.set(l, {
				...e,
				element: l
			}).toSorted(Kn) : (t.set(l, {
				...e,
				element: l
			}), t.toSorted(Kn)) : t), () => {
				f((e) => !l || !e.has(l) ? e : (e.delete(l), new zn(e)));
			};
		}, [
			l,
			g,
			f
		]), /* @__PURE__ */ t(h, {
			"data-radix-collection-item": "",
			ref: d,
			children: a
		});
	});
	g.displayName = m;
	function _() {
		return r.useState(new zn());
	}
	q(_, "useInitCollection");
	function v(t) {
		let { itemMap: n } = s(e + "CollectionConsumer", t);
		return n;
	}
	return q(v, "useCollection"), [{
		Provider: c,
		Slot: p,
		ItemSlot: g
	}, {
		createCollectionScope: a,
		useCollection: v,
		useInitCollection: _
	}];
}
q(Un, "createCollection");
function Wn(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
q(Wn, "shallowEqual");
function Gn(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
q(Gn, "isElementPreceding");
function Kn(e, t) {
	return !e[1].element || !t[1].element ? 0 : Gn(e[1].element, t[1].element) ? -1 : 1;
}
q(Kn, "sortByDocumentPosition");
function qn(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
q(qn, "getChildListObserver");
//#endregion
//#region node_modules/@radix-ui/react-direction/dist/index.mjs
var Jn = Object.defineProperty, Yn = (e, t) => Jn(e, "name", {
	value: t,
	configurable: !0
}), Xn = r.createContext(void 0);
function Zn(e) {
	let t = r.useContext(Xn);
	return e || t || "ltr";
}
Yn(Zn, "useDirection");
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var Qn = Object.defineProperty, $n = (e, t) => Qn(e, "name", {
	value: t,
	configurable: !0
}), J = [
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
].reduce((e, n) => {
	let i = /* @__PURE__ */ Cn(`Primitive.${n}`), a = r.forwardRef((e, r) => {
		let { asChild: a, ...o } = e, s = a ? i : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ t(s, {
			...o,
			ref: r
		});
	});
	return a.displayName = `Primitive.${n}`, {
		...e,
		[n]: a
	};
}, {});
function er(e, t) {
	e && p.flushSync(() => e.dispatchEvent(t));
}
$n(er, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var tr = Object.defineProperty, nr = (e, t) => tr(e, "name", {
	value: t,
	configurable: !0
});
function rr(e) {
	let t = r.useRef(e);
	return r.useEffect(() => {
		t.current = e;
	}), r.useMemo(() => ((...e) => t.current?.(...e)), []);
}
nr(rr, "useCallbackRef");
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var ir = Object.defineProperty, Y = (e, t) => ir(e, "name", {
	value: t,
	configurable: !0
}), ar = "dismissableLayer.update", or = "dismissableLayer.pointerDownOutside", sr = "dismissableLayer.focusOutside", cr, lr = r.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), ur = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ Y(function(e, n) {
	let { disableOutsidePointerEvents: i = !1, deferPointerDownOutside: a = !1, onEscapeKeyDown: o, onPointerDownOutside: s, onFocusOutside: c, onInteractOutside: l, onDismiss: u, ...d } = e, f = r.useContext(lr), [p, m] = r.useState(null), h = p?.ownerDocument ?? globalThis?.document, [, g] = r.useState({}), _ = K(n, m), v = Array.from(f.layers), [y] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), b = y ? v.indexOf(y) : -1, x = p ? v.indexOf(p) : -1, S = f.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= b, w = r.useRef(!1), T = pr((e) => {
		s?.(e), l?.(e), e.defaultPrevented || u?.();
	}, {
		ownerDocument: h,
		deferPointerDownOutside: a,
		isDeferredPointerDownOutsideRef: w,
		dismissableSurfaces: f.dismissableSurfaces,
		shouldHandlePointerDownOutside: r.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...f.branches].some((t) => t.contains(e));
			return C && !t;
		}, [f.branches, C])
	}), E = mr((e) => {
		if (a && w.current) return;
		let t = e.target;
		[...f.branches].some((e) => e.contains(t)) || (c?.(e), l?.(e), e.defaultPrevented || u?.());
	}, h), ee = p ? x === v.length - 1 : !1, D = rr((e) => {
		e.key === "Escape" && (o?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()));
	});
	return r.useEffect(() => {
		if (ee) return h.addEventListener("keydown", D, { capture: !0 }), () => h.removeEventListener("keydown", D, { capture: !0 });
	}, [
		h,
		ee,
		D
	]), r.useEffect(() => {
		if (p) return i && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (cr = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), hr(), () => {
			i && (f.layersWithOutsidePointerEventsDisabled.delete(p), f.layersWithOutsidePointerEventsDisabled.size === 0 && (h.body.style.pointerEvents = cr));
		};
	}, [
		p,
		h,
		i,
		f
	]), r.useEffect(() => () => {
		p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), hr());
	}, [p, f]), r.useEffect(() => {
		let e = /* @__PURE__ */ Y(() => g({}), "handleUpdate");
		return document.addEventListener(ar, e), () => document.removeEventListener(ar, e);
	}, []), /* @__PURE__ */ t(J.div, {
		...d,
		ref: _,
		style: {
			pointerEvents: S ? C ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: G(e.onFocusCapture, E.onFocusCapture),
		onBlurCapture: G(e.onBlurCapture, E.onBlurCapture),
		onPointerDownCapture: G(e.onPointerDownCapture, T.onPointerDownCapture)
	});
}, "DismissableLayer"));
function dr() {
	let e = r.useContext(lr), [t, n] = r.useState(null);
	return r.useEffect(() => {
		if (t) return e.dismissableSurfaces.add(t), () => {
			e.dismissableSurfaces.delete(t);
		};
	}, [t, e.dismissableSurfaces]), n;
}
Y(dr, "useDismissableLayerSurface");
var fr = /* @__PURE__ */ Y(() => !0, "IS_TRUE");
function pr(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: i = !1, isDeferredPointerDownOutsideRef: a, dismissableSurfaces: o, shouldHandlePointerDownOutside: s = fr } = t, c = rr(e), l = r.useRef(!1), u = r.useRef(!1), d = r.useRef(/* @__PURE__ */ new Map()), f = r.useRef(() => {});
	return r.useEffect(() => {
		function e() {
			u.current = !1, a.current = !1, d.current.clear();
		}
		Y(e, "resetOutsideInteraction");
		function t() {
			return Array.from(d.current.values()).some(Boolean);
		}
		Y(t, "isOutsideInteractionIntercepted");
		function r(e) {
			if (!u.current) return;
			let t = e.target;
			t instanceof Node && [...o].some((e) => e.contains(t)) || d.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				u.current && f.current();
			}, 0);
		}
		Y(r, "handleInteractionCapture");
		function p(e) {
			u.current && d.current.set(e.type, !1);
		}
		Y(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ Y((r) => {
			if (r.target && !l.current) {
				let o = function() {
					n.removeEventListener("click", f.current);
					let r = t();
					e(), r || gr(or, c, p, { discrete: !0 });
				};
				if (Y(o, "handleAndDispatchPointerDownOutsideEvent"), !s(r.target)) {
					n.removeEventListener("click", f.current), e(), l.current = !1;
					return;
				}
				let p = { originalEvent: r };
				u.current = !0, a.current = i && r.button === 0, d.current.clear(), !i || r.button !== 0 ? o() : (n.removeEventListener("click", f.current), f.current = o, n.addEventListener("click", f.current, { once: !0 }));
			} else n.removeEventListener("click", f.current), e();
			l.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) n.addEventListener(e, r, !0), n.addEventListener(e, p);
		let g = window.setTimeout(() => {
			n.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), n.removeEventListener("pointerdown", m), n.removeEventListener("click", f.current);
			for (let e of h) n.removeEventListener(e, r, !0), n.removeEventListener(e, p);
		};
	}, [
		n,
		c,
		i,
		a,
		o,
		s
	]), { onPointerDownCapture: /* @__PURE__ */ Y(() => l.current = !0, "onPointerDownCapture") };
}
Y(pr, "usePointerDownOutside");
function mr(e, t = globalThis?.document) {
	let n = rr(e), i = r.useRef(!1);
	return r.useEffect(() => {
		let e = /* @__PURE__ */ Y((e) => {
			e.target && !i.current && gr(sr, n, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: /* @__PURE__ */ Y(() => i.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ Y(() => i.current = !1, "onBlurCapture")
	};
}
Y(mr, "useFocusOutside");
function hr() {
	let e = new CustomEvent(ar);
	document.dispatchEvent(e);
}
Y(hr, "dispatchUpdate");
function gr(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? er(i, a) : i.dispatchEvent(a);
}
Y(gr, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var _r = Object.defineProperty, vr = (e, t) => _r(e, "name", {
	value: t,
	configurable: !0
}), yr = 0, br = null;
function xr(e) {
	return Sr(), e.children;
}
vr(xr, "FocusGuards");
function Sr() {
	r.useEffect(() => {
		br ||= {
			start: Cr(),
			end: Cr()
		};
		let { start: e, end: t } = br;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), yr++, () => {
			yr === 1 && (br?.start.remove(), br?.end.remove(), br = null), yr = Math.max(0, yr - 1);
		};
	}, []);
}
vr(Sr, "useFocusGuards");
function Cr() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
vr(Cr, "createFocusGuard");
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var wr = Object.defineProperty, X = (e, t) => wr(e, "name", {
	value: t,
	configurable: !0
}), Tr = "focusScope.autoFocusOnMount", Er = "focusScope.autoFocusOnUnmount", Dr = {
	bubbles: !1,
	cancelable: !0
}, Or = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ X(function(e, n) {
	let { loop: i = !1, trapped: a = !1, onMountAutoFocus: o, onUnmountAutoFocus: s, ...c } = e, [l, u] = r.useState(null), d = rr(o), f = rr(s), p = r.useRef(null), m = K(n, u), h = r.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	r.useEffect(() => {
		if (a) {
			let e = function(e) {
				if (h.paused || !l) return;
				let t = e.target;
				l.contains(t) ? p.current = t : Fr(p.current, { select: !0 });
			}, t = function(e) {
				if (h.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (l.contains(t) || Fr(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Fr(l);
			};
			X(e, "handleFocusIn"), X(t, "handleFocusOut"), X(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return l && r.observe(l, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		a,
		l,
		h.paused
	]), r.useEffect(() => {
		if (l) {
			Ir.add(h);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(Tr, Dr);
				l.addEventListener(Tr, d), l.dispatchEvent(t), t.defaultPrevented || (kr(zr(jr(l)), { select: !0 }), document.activeElement === e && Fr(l));
			}
			return () => {
				l.removeEventListener(Tr, d), setTimeout(() => {
					let t = new CustomEvent(Er, Dr);
					l.addEventListener(Er, f), l.dispatchEvent(t), t.defaultPrevented || Fr(e ?? document.body, { select: !0 }), l.removeEventListener(Er, f), Ir.remove(h);
				}, 0);
			};
		}
	}, [
		l,
		d,
		f,
		h
	]);
	let g = r.useCallback((e) => {
		if (!i && !a || h.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [r, a] = Ar(t);
			r && a ? !e.shiftKey && n === a ? (e.preventDefault(), i && Fr(r, { select: !0 })) : e.shiftKey && n === r && (e.preventDefault(), i && Fr(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		i,
		a,
		h.paused
	]);
	return /* @__PURE__ */ t(J.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: g
	});
}, "FocusScope"));
function kr(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Fr(r, { select: t }), document.activeElement !== n) return;
}
X(kr, "focusFirst");
function Ar(e) {
	let t = jr(e);
	return [Mr(t, e), Mr(t.reverse(), e)];
}
X(Ar, "getTabbableEdges");
function jr(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ X((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
X(jr, "getTabbableCandidates");
function Mr(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Nr(r, { upTo: t }))) return r;
}
X(Mr, "findVisible");
function Nr(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
X(Nr, "isHidden");
function Pr(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
X(Pr, "isSelectableInput");
function Fr(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Pr(e) && t && e.select();
	}
}
X(Fr, "focus");
var Ir = Lr();
function Lr() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Rr(e, t), e.unshift(t);
		},
		remove(t) {
			e = Rr(e, t), e[0]?.resume();
		}
	};
}
X(Lr, "createFocusScopesStack");
function Rr(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
X(Rr, "arrayRemove");
function zr(e) {
	return e.filter((e) => e.tagName !== "A");
}
X(zr, "removeLinks");
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Z = globalThis?.document ? r.useLayoutEffect : () => {}, Br = Object.defineProperty, Vr = (e, t) => Br(e, "name", {
	value: t,
	configurable: !0
}), Hr = r.useId || (() => void 0), Ur = 0;
function Wr(e) {
	let [t, n] = r.useState(Hr());
	return Z(() => {
		e || n((e) => e ?? String(Ur++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
Vr(Wr, "useId");
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Gr = [
	"top",
	"right",
	"bottom",
	"left"
], Kr = Math.min, qr = Math.max, Jr = Math.round, Yr = Math.floor, Xr = (e) => ({
	x: e,
	y: e
}), Zr = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Qr(e, t, n) {
	return qr(e, Kr(t, n));
}
function $r(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ei(e) {
	return e.split("-")[0];
}
function ti(e) {
	return e.split("-")[1];
}
function ni(e) {
	return e === "x" ? "y" : "x";
}
function ri(e) {
	return e === "y" ? "height" : "width";
}
function ii(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function ai(e) {
	return ni(ii(e));
}
function oi(e, t, n) {
	n === void 0 && (n = !1);
	let r = ti(e), i = ai(e), a = ri(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = hi(o)), [o, hi(o)];
}
function si(e) {
	let t = hi(e);
	return [
		ci(e),
		t,
		ci(t)
	];
}
function ci(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var li = ["left", "right"], ui = ["right", "left"], di = ["top", "bottom"], fi = ["bottom", "top"];
function pi(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? ui : li : t ? li : ui;
		case "left":
		case "right": return t ? di : fi;
		default: return [];
	}
}
function mi(e, t, n, r) {
	let i = ti(e), a = pi(ei(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(ci)))), a;
}
function hi(e) {
	let t = ei(e);
	return Zr[t] + e.slice(t.length);
}
function gi(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function _i(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : gi(e);
}
function vi(e) {
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
function yi(e, t, n) {
	let { reference: r, floating: i } = e, a = ii(t), o = ai(t), s = ri(o), c = ei(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = ti(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function bi(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = $r(t, e), p = _i(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = vi(await i.getClippingRect({
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
	}, y = vi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var xi = 50, Si = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: bi
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = yi(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < xi && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = yi(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Ci = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = $r(e, t) || {};
		if (l == null) return {};
		let d = _i(u), f = {
			x: n,
			y: r
		}, p = ai(i), m = ri(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Kr(d[_], T), ee = Kr(d[v], T), D = C - h[m] - ee, O = C / 2 - h[m] / 2 + w, k = Qr(E, O, D), A = !c.arrow && ti(i) != null && O !== k && a.reference[m] / 2 - (O < E ? E : ee) - h[m] / 2 < 0, j = A ? O < E ? O - E : O - D : 0;
		return {
			[p]: f[p] + j,
			data: {
				[p]: k,
				centerOffset: O - k - j,
				...A && { alignmentOffset: j }
			},
			reset: A
		};
	}
}), wi = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = $r(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = ei(r), _ = ii(o), v = ei(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [hi(o)] : si(o)), x = p !== "none";
			!d && x && b.push(...mi(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = oi(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === ii(t) || T.every((e) => ii(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = ii(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = o;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function Ti(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Ei(e) {
	return Gr.some((t) => e[t] >= 0);
}
var Di = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = $r(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Ti(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Ei(e)
					} };
				}
				case "escaped": {
					let e = Ti(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Ei(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Oi = /*#__PURE__*/ new Set(["left", "top"]);
async function ki(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = ei(n), s = ti(n), c = ii(n) === "y", l = Oi.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = $r(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Ai = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await ki(t, e);
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
}, ji = function(e) {
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
			} }, ...l } = $r(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = ii(i), p = ni(f), m = u[p], h = u[f], g = (e, t) => Qr(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
}, Mi = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = $r(e, t), u = {
				x: n,
				y: r
			}, d = ii(i), f = ni(d), p = u[f], m = u[d], h = $r(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = Oi.has(ei(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Ni = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = $r(e, t), c = await i.detectOverflow(t, s), l = ei(n), u = ti(n), d = ii(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = Kr(p - c[m], g), y = Kr(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * qr(c.left, c.right) : S = p - 2 * qr(c.top, c.bottom)), await o({
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
function Pi() {
	return typeof window < "u";
}
function Fi(e) {
	return Li(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Q(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ii(e) {
	return ((Li(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Li(e) {
	return Pi() ? e instanceof Node || e instanceof Q(e).Node : !1;
}
function Ri(e) {
	return Pi() ? e instanceof Element || e instanceof Q(e).Element : !1;
}
function zi(e) {
	return Pi() ? e instanceof HTMLElement || e instanceof Q(e).HTMLElement : !1;
}
function Bi(e) {
	return !Pi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Q(e).ShadowRoot;
}
function Vi(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Qi(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Hi(e) {
	return /^(table|td|th)$/.test(Fi(e));
}
function Ui(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Wi = /transform|translate|scale|rotate|perspective|filter/, Gi = /paint|layout|strict|content/, Ki = (e) => !!e && e !== "none", qi;
function Ji(e) {
	let t = Ri(e) ? Qi(e) : e;
	return Ki(t.transform) || Ki(t.translate) || Ki(t.scale) || Ki(t.rotate) || Ki(t.perspective) || !Xi() && (Ki(t.backdropFilter) || Ki(t.filter)) || Wi.test(t.willChange || "") || Gi.test(t.contain || "");
}
function Yi(e) {
	let t = ea(e);
	for (; zi(t) && !Zi(t);) {
		if (Ji(t)) return t;
		if (Ui(t)) return null;
		t = ea(t);
	}
	return null;
}
function Xi() {
	return qi ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), qi;
}
function Zi(e) {
	return /^(html|body|#document)$/.test(Fi(e));
}
function Qi(e) {
	return Q(e).getComputedStyle(e);
}
function $i(e) {
	return Ri(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function ea(e) {
	if (Fi(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Bi(e) && e.host || Ii(e);
	return Bi(t) ? t.host : t;
}
function ta(e) {
	let t = ea(e);
	return Zi(t) ? (e.ownerDocument || e).body : zi(t) && Vi(t) ? t : ta(t);
}
function na(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = ta(e), i = r === e.ownerDocument?.body, a = Q(r);
	if (i) {
		let e = ra(a);
		return t.concat(a, a.visualViewport || [], Vi(r) ? r : [], e && n ? na(e) : []);
	}
	return t.concat(r, na(r, [], n));
}
function ra(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function ia(e) {
	let t = Qi(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = zi(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Jr(n) !== a || Jr(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function aa(e) {
	return Ri(e) ? e : e.contextElement;
}
function oa(e) {
	let t = aa(e);
	if (!zi(t)) return Xr(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = ia(t), o = (a ? Jr(n.width) : n.width) / r, s = (a ? Jr(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var sa = /*#__PURE__*/ Xr(0);
function ca(e) {
	let t = Q(e);
	return !Xi() || !t.visualViewport ? sa : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function la(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === Q(e);
}
function ua(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = aa(e), o = Xr(1);
	t && (r ? Ri(r) && (o = oa(r)) : o = oa(e));
	let s = la(a, n, r) ? ca(a) : Xr(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = Q(a), t = Ri(r) ? Q(r) : r, n = e, i = ra(n);
		for (; i && t !== n;) {
			let e = oa(i), t = i.getBoundingClientRect(), r = Qi(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Q(i), i = ra(n);
		}
	}
	return vi({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function da(e, t) {
	let n = $i(e).scrollLeft;
	return t ? t.left + n : ua(Ii(e)).left + n;
}
function fa(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - da(e, n),
		y: n.top + t.scrollTop
	};
}
function pa(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Ii(r), s = t ? Ui(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Xr(1), u = Xr(0), d = zi(r);
	if ((d || !a) && ((Fi(r) !== "body" || Vi(o)) && (c = $i(r)), d)) {
		let e = ua(r);
		l = oa(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? fa(o, c) : Xr(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function ma(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function ha(e) {
	let t = $i(e), n = e.ownerDocument.body, r = qr(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = qr(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + da(e), o = -t.scrollTop;
	return Qi(n).direction === "rtl" && (a += qr(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var ga = 25;
function _a(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = Q(e), a = Ii(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Xi() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (da(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= ga && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function va(e, t) {
	let n = ua(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = oa(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function ya(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = _a(e, n, t);
	else if (t === "document") r = ha(Ii(e));
	else if (Ri(t)) r = va(t, n);
	else {
		let n = ca(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return vi(r);
}
function ba(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = na(e, [], !1).filter((e) => Ri(e) && Fi(e) !== "body"), i = null, a = Qi(e).position === "fixed", o = a ? ea(e) : e;
	for (; Ri(o) && !Zi(o);) {
		let e = Qi(o), t = Ji(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = ea(o);
	}
	return t.set(e, r), r;
}
function xa(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Ui(t) ? [] : ba(t, this._c) : [].concat(n), r], o = ya(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = ya(t, a[e], i);
		s = qr(n.top, s), c = Kr(n.right, c), l = Kr(n.bottom, l), u = qr(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Sa(e) {
	let { width: t, height: n } = ia(e);
	return {
		width: t,
		height: n
	};
}
function Ca(e, t, n) {
	let r = zi(t), i = Ii(t), a = n === "fixed", o = ua(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Xr(0);
	if ((r || !a) && ((Fi(t) !== "body" || Vi(i)) && (s = $i(t)), r)) {
		let e = ua(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = da(i));
	let l = i && !r && !a ? fa(i, s) : Xr(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function wa(e) {
	return Qi(e).position === "static";
}
function Ta(e, t) {
	if (!zi(e) || Qi(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Ii(e) === n && (n = n.ownerDocument.body), n;
}
function Ea(e, t) {
	let n = Q(e);
	if (Ui(e)) return n;
	if (!zi(e)) {
		let t = ea(e);
		for (; t && !Zi(t);) {
			if (Ri(t) && !wa(t)) return t;
			t = ea(t);
		}
		return n;
	}
	let r = Ta(e, t);
	for (; r && Hi(r) && wa(r);) r = Ta(r, t);
	return r && Zi(r) && wa(r) && !Ji(r) ? n : r || Yi(e) || n;
}
var Da = async function(e) {
	let t = this.getOffsetParent || Ea, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Ca(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Oa(e) {
	return Qi(e).direction === "rtl";
}
var ka = {
	convertOffsetParentRelativeRectToViewportRelativeRect: pa,
	getDocumentElement: Ii,
	getClippingRect: xa,
	getOffsetParent: Ea,
	getElementRects: Da,
	getClientRects: ma,
	getDimensions: Sa,
	getScale: oa,
	isElement: Ri,
	isRTL: Oa
};
function Aa(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ja(e, t, n) {
	let r = null, i, a = Ii(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Yr(d), h = Yr(a.clientWidth - (u + f)), g = Yr(a.clientHeight - (d + p)), _ = Yr(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: qr(0, Kr(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Aa(l, e.getBoundingClientRect())) return s();
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
	let c = Q(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Ma(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = aa(e), u = i || a ? [...l ? na(l) : [], ...t ? na(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? ja(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? ua(e) : null;
	c && g();
	function g() {
		let t = ua(e);
		h && !Aa(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Na = Ai, Pa = ji, Fa = wi, Ia = Ni, La = Di, Ra = Ci, za = Mi, Ba = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...ka,
		...i.platform,
		_c: r
	};
	return Si(e, t, {
		...i,
		platform: a
	});
}, Va = typeof document < "u" ? u : function() {};
function Ha(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Ha(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Ha(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Ua(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wa(e, t) {
	let n = Ua(e);
	return Math.round(t * n) / n;
}
function Ga(e) {
	let t = r.useRef(e);
	return Va(() => {
		t.current = e;
	}), t;
}
function Ka(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: i = [], platform: a, elements: { reference: o, floating: s } = {}, transform: c = !0, whileElementsMounted: l, open: u } = e, [d, f] = r.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [m, h] = r.useState(i);
	Ha(m, i) || h(i);
	let [g, _] = r.useState(null), [v, y] = r.useState(null), b = r.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), x = r.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = o || g, C = s || v, w = r.useRef(null), T = r.useRef(null), E = r.useRef(d), ee = l != null, D = Ga(l), O = Ga(a), k = Ga(u), A = r.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: m
		};
		O.current && (e.platform = O.current), Ba(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: k.current !== !1
			};
			j.current && !Ha(E.current, t) && (E.current = t, p.flushSync(() => {
				f(t);
			}));
		});
	}, [
		m,
		t,
		n,
		O,
		k
	]);
	Va(() => {
		u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [u]);
	let j = r.useRef(!1);
	Va(() => (j.current = !0, () => {
		j.current = !1;
	}), []), Va(() => {
		if (S && (w.current = S), C && (T.current = C), S && C) {
			if (D.current) return D.current(S, C, A);
			A();
		}
	}, [
		S,
		C,
		A,
		D,
		ee
	]);
	let M = r.useMemo(() => ({
		reference: w,
		floating: T,
		setReference: b,
		setFloating: x
	}), [b, x]), N = r.useMemo(() => ({
		reference: S,
		floating: C
	}), [S, C]), P = r.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!N.floating) return e;
		let t = Wa(N.floating, d.x), r = Wa(N.floating, d.y);
		return c ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...Ua(N.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		c,
		N.floating,
		d.x,
		d.y
	]);
	return r.useMemo(() => ({
		...d,
		update: A,
		refs: M,
		elements: N,
		floatingStyles: P
	}), [
		d,
		A,
		M,
		N,
		P
	]);
}
var qa = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Ra({
				element: r.current,
				padding: i
			}).fn(n) : r ? Ra({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Ja = (e, t) => {
	let n = Na(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ya = (e, t) => {
	let n = Pa(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Xa = (e, t) => ({
	fn: za(e).fn,
	options: [e, t]
}), Za = (e, t) => {
	let n = Fa(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Qa = (e, t) => {
	let n = Ia(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, $a = (e, t) => {
	let n = La(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, eo = (e, t) => {
	let n = qa(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, to = Object.defineProperty, no = (e, t) => to(e, "name", {
	value: t,
	configurable: !0
});
function ro(e) {
	let [t, n] = r.useState(void 0);
	return Z(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let r = t[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				n({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		}
		n(void 0);
	}, [e]), t;
}
no(ro, "useSize");
//#endregion
//#region node_modules/@radix-ui/react-popper/dist/index.mjs
var io = Object.defineProperty, ao = (e, t) => io(e, "name", {
	value: t,
	configurable: !0
}), oo = "Popper", [so, co] = /* @__PURE__ */ hn(oo), [lo, uo] = so(oo), fo = /* @__PURE__ */ ao((e) => {
	let { __scopePopper: n, children: i } = e, [a, o] = r.useState(null), [s, c] = r.useState(void 0);
	return /* @__PURE__ */ t(lo, {
		scope: n,
		anchor: a,
		onAnchorChange: o,
		placementState: s,
		setPlacementState: c,
		children: i
	});
}, "Popper"), po = "PopperAnchor", mo = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ ao(function(e, n) {
	let { __scopePopper: i, virtualRef: a, ...o } = e, s = uo(po, i), c = r.useRef(null), l = s.onAnchorChange, u = K(n, r.useCallback((e) => {
		c.current = e, e && l(e);
	}, [l])), d = r.useRef(null);
	r.useEffect(() => {
		if (!a) return;
		let e = d.current;
		d.current = a.current, e !== d.current && l(d.current);
	});
	let f = s.placementState && xo(s.placementState), p = f?.[0], m = f?.[1];
	return a ? null : /* @__PURE__ */ t(J.div, {
		"data-radix-popper-side": p,
		"data-radix-popper-align": m,
		...o,
		ref: u
	});
}, "PopperAnchor")), ho = "PopperContent", [go, _o] = so(ho), vo = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ ao(function(e, n) {
	let { __scopePopper: i, side: a = "bottom", sideOffset: o = 0, align: s = "center", alignOffset: c = 0, arrowPadding: l = 0, avoidCollisions: u = !0, collisionBoundary: d = [], collisionPadding: f = 0, sticky: p = "partial", hideWhenDetached: m = !1, updatePositionStrategy: h = "optimized", onPlaced: g, ..._ } = e, v = uo(ho, i), [y, b] = r.useState(null), x = K(n, b), [S, C] = r.useState(null), w = ro(S), T = w?.width ?? 0, E = w?.height ?? 0, ee = a + (s === "center" ? "" : "-" + s), D = typeof f == "number" ? f : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...f
	}, O = Array.isArray(d) ? d : [d], k = O.length > 0, A = {
		padding: D,
		boundary: O.filter(yo),
		altBoundary: k
	}, { refs: j, floatingStyles: M, placement: N, isPositioned: P, middlewareData: F } = Ka({
		strategy: "fixed",
		placement: ee,
		whileElementsMounted: /* @__PURE__ */ ao((...e) => Ma(...e, { animationFrame: h === "always" }), "whileElementsMounted"),
		elements: { reference: v.anchor },
		middleware: [
			Ja({
				mainAxis: o + E,
				alignmentAxis: c
			}),
			u && Ya({
				mainAxis: !0,
				crossAxis: !1,
				limiter: p === "partial" ? Xa() : void 0,
				...A
			}),
			u && Za({ ...A }),
			Qa({
				...A,
				apply: /* @__PURE__ */ ao(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			S && eo({
				element: S,
				padding: l
			}),
			bo({
				arrowWidth: T,
				arrowHeight: E
			}),
			m && $a({
				strategy: "referenceHidden",
				...A,
				boundary: k ? A.boundary : void 0
			})
		]
	}), te = v.setPlacementState;
	Z(() => (te(N), () => {
		te(void 0);
	}), [N, te]);
	let [ne, re] = xo(N), ie = rr(g);
	Z(() => {
		P && ie?.();
	}, [P, ie]);
	let I = F.arrow?.x, L = F.arrow?.y, ae = F.arrow?.centerOffset !== 0, [oe, R] = r.useState();
	return Z(() => {
		y && R(window.getComputedStyle(y).zIndex);
	}, [y]), /* @__PURE__ */ t("div", {
		ref: j.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...M,
			transform: P ? M.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: oe,
			"--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(" "),
			...F.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ t(go, {
			scope: i,
			placedSide: ne,
			placedAlign: re,
			onArrowChange: C,
			arrowX: I,
			arrowY: L,
			shouldHideArrow: ae,
			children: /* @__PURE__ */ t(J.div, {
				"data-side": ne,
				"data-align": re,
				..._,
				ref: x,
				style: {
					..._.style,
					animation: P ? _.style?.animation : "none"
				}
			})
		})
	});
}, "PopperContent"));
function yo(e) {
	return e !== null;
}
ao(yo, "isNotNull");
var bo = /* @__PURE__ */ ao((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = xo(n), u = {
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
function xo(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
ao(xo, "getSideAndAlignFromPlacement");
var So = fo, Co = mo, wo = vo, To = Object.defineProperty, Eo = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ ((e, t) => To(e, "name", {
	value: t,
	configurable: !0
}))(function(e, n) {
	let { container: i, ...a } = e, [o, s] = r.useState(!1);
	Z(() => s(!0), []);
	let c = i || o && globalThis?.document?.body;
	return c ? p.createPortal(/* @__PURE__ */ t(J.div, {
		...a,
		ref: n
	}), c) : null;
}, "Portal")), Do = Object.defineProperty, Oo = (e, t) => Do(e, "name", {
	value: t,
	configurable: !0
});
function ko(e, t) {
	return r.useReducer((e, n) => t[e][n] ?? e, e);
}
Oo(ko, "useStateMachine");
var Ao = /* @__PURE__ */ Oo((e) => {
	let { present: t, children: n } = e, i = jo(t), a = typeof n == "function" ? n({ present: i.isPresent }) : r.Children.only(n), o = No(i.ref, Fo(a));
	return typeof n == "function" || i.isPresent ? r.cloneElement(a, { ref: o }) : null;
}, "Presence");
function jo(e) {
	let [t, n] = r.useState(), i = r.useRef(null), a = r.useRef(e), o = r.useRef("none"), s = r.useRef(void 0), [c, l] = ko(e ? "mounted" : "unmounted", {
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
	return r.useEffect(() => {
		c === "mounted" ? (o.current = s.current ?? Po(i.current), s.current = void 0) : o.current = "none";
	}, [c]), Z(() => {
		let t = i.current, n = a.current;
		if (n !== e) {
			let r = o.current, i = Po(t);
			e ? (s.current = i, l("MOUNT")) : i === "none" || t?.display === "none" ? l("UNMOUNT") : l(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
		}
	}, [e, l]), Z(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, r = /* @__PURE__ */ Oo((r) => {
				let o = Po(i.current).includes(CSS.escape(r.animationName));
				if (r.target === t && o && (l("ANIMATION_END"), !a.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ Oo((e) => {
				e.target === t && (o.current = Po(i.current));
			}, "handleAnimationStart");
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r);
			};
		}
		l("ANIMATION_END");
	}, [t, l]), {
		isPresent: ["mounted", "unmountSuspended"].includes(c),
		ref: r.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				i.current = t, s.current = Po(t);
			} else i.current = null;
			n(e);
		}, [])
	};
}
Oo(jo, "usePresence");
function Mo(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Oo(Mo, "setRef");
function No(...e) {
	let t = r.useRef(e);
	return t.current = e, r.useCallback((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = Mo(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "function" ? t() : Mo(n[e], null);
			}
		};
	}, []);
}
Oo(No, "useStableComposedRefs");
function Po(e) {
	return e?.animationName || "none";
}
Oo(Po, "getAnimationName");
function Fo(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Oo(Fo, "getElementRef");
//#endregion
//#region node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var Io = Object.defineProperty, Lo = (e, t) => Io(e, "name", {
	value: t,
	configurable: !0
}), Ro = r.useEffectEvent, zo = r.useInsertionEffect;
function Bo(e) {
	if (typeof Ro == "function") return Ro(e);
	let t = r.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof zo == "function" ? zo(() => {
		t.current = e;
	}) : Z(() => {
		t.current = e;
	}), r.useMemo(() => ((...e) => t.current?.(...e)), []);
}
Lo(Bo, "useEffectEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Vo = Object.defineProperty, Ho = (e, t) => Vo(e, "name", {
	value: t,
	configurable: !0
}), Uo = r.useInsertionEffect || Z;
function Wo({ prop: e, defaultProp: t, onChange: n = /* @__PURE__ */ Ho(() => {}, "onChange"), caller: i }) {
	let [a, o, s] = Go({
		defaultProp: t,
		onChange: n
	}), c = e !== void 0;
	return [c ? e : a, r.useCallback((t) => {
		if (c) {
			let n = Ko(t) ? t(e) : t;
			n !== e && s.current?.(n);
		} else o(t);
	}, [
		c,
		e,
		o,
		s
	])];
}
Ho(Wo, "useControllableState");
function Go({ defaultProp: e, onChange: t }) {
	let [n, i] = r.useState(e), a = r.useRef(n), o = r.useRef(t);
	return Uo(() => {
		o.current = t;
	}, [t]), r.useEffect(() => {
		a.current !== n && (o.current?.(n), a.current = n);
	}, [n, a]), [
		n,
		i,
		o
	];
}
Ho(Go, "useUncontrolledState");
function Ko(e) {
	return typeof e == "function";
}
Ho(Ko, "isFunction");
var qo = Symbol("RADIX:SYNC_STATE");
function Jo(e, t, n, i) {
	let { prop: a, defaultProp: o, onChange: s, caller: c } = t, l = a !== void 0, u = Bo(s), d = [{
		...n,
		state: o
	}];
	i && d.push(i);
	let [f, p] = r.useReducer((t, n) => {
		if (n.type === qo) return {
			...t,
			state: n.state
		};
		let r = e(t, n);
		return l && !Object.is(r.state, t.state) && u(r.state), r;
	}, ...d), m = f.state, h = r.useRef(m);
	r.useEffect(() => {
		h.current !== m && (h.current = m, l || u(m));
	}, [
		m,
		h,
		l
	]);
	let g = r.useMemo(() => a === void 0 ? f : {
		...f,
		state: a
	}, [f, a]);
	return r.useEffect(() => {
		l && !Object.is(a, f.state) && p({
			type: qo,
			state: a
		});
	}, [
		a,
		f.state,
		l
	]), [g, p];
}
Ho(Jo, "useControllableStateReducer");
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
var Yo = Object.defineProperty, Xo = (e, t) => Yo(e, "name", {
	value: t,
	configurable: !0
});
function Zo(e) {
	let t = r.useRef({
		value: e,
		previous: e
	});
	return r.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
Xo(Zo, "usePrevious");
//#endregion
//#region node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Qo = Object.freeze({
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
}), $o = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, es = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap(), ns = {}, rs = 0, is = function(e) {
	return e && (e.host || is(e.parentNode));
}, as = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = is(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, os = function(e, t, n, r) {
	var i = as(t, Array.isArray(e) ? e : [e]);
	ns[n] || (ns[n] = /* @__PURE__ */ new WeakMap());
	var a = ns[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (es.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				es.set(e, c), a.set(e, l), o.push(e), c === 1 && i && ts.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), rs++, function() {
		o.forEach(function(e) {
			var t = es.get(e) - 1, i = a.get(e) - 1;
			es.set(e, t), a.set(e, i), t || (ts.has(e) || e.removeAttribute(r), ts.delete(e)), i || e.removeAttribute(n);
		}), rs--, rs || (es = /* @__PURE__ */ new WeakMap(), es = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap(), ns = {});
	};
}, ss = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || $o(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), os(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, cs = function() {
	return cs = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, cs.apply(this, arguments);
};
function ls(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function us(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var ds = "right-scroll-bar-position", fs = "width-before-scroll-bar", ps = "with-scroll-bars-hidden", ms = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
function hs(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
function gs(e, t) {
	var n = f(function() {
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
var _s = typeof window < "u" ? r.useLayoutEffect : r.useEffect, vs = /* @__PURE__ */ new WeakMap();
function ys(e, t) {
	var n = gs(t || null, function(t) {
		return e.forEach(function(e) {
			return hs(e, t);
		});
	});
	return _s(function() {
		var t = vs.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || hs(e, null);
			}), i.forEach(function(e) {
				r.has(e) || hs(e, a);
			});
		}
		vs.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function bs(e) {
	return e;
}
function xs(e, t) {
	t === void 0 && (t = bs);
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
function Ss(e) {
	e === void 0 && (e = {});
	var t = xs(null);
	return t.options = cs({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var Cs = function(e) {
	var t = e.sideCar, n = ls(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var i = t.read();
	if (!i) throw Error("Sidecar medium not found");
	return r.createElement(i, cs({}, n));
};
Cs.isSideCarExport = !0;
function ws(e, t) {
	return e.useMedium(t), Cs;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var Ts = Ss(), Es = function() {}, Ds = r.forwardRef(function(e, t) {
	var n = r.useRef(null), i = r.useState({
		onScrollCapture: Es,
		onWheelCapture: Es,
		onTouchMoveCapture: Es
	}), a = i[0], o = i[1], s = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noRelative, h = e.noIsolation, g = e.inert, _ = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, b = e.gapMode, x = ls(e, [
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
	]), S = p, C = ys([n, t]), w = cs(cs({}, x), a);
	return r.createElement(r.Fragment, null, d && r.createElement(S, {
		sideCar: Ts,
		removeScrollBar: u,
		shards: f,
		noRelative: m,
		noIsolation: h,
		inert: g,
		setCallbacks: o,
		allowPinchZoom: !!_,
		lockRef: n,
		gapMode: b
	}), s ? r.cloneElement(r.Children.only(c), cs(cs({}, w), { ref: C })) : r.createElement(y, cs({}, w, {
		className: l,
		ref: C
	}), c));
});
Ds.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Ds.classNames = {
	fullWidth: fs,
	zeroRight: ds
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var Os = function() {
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function ks() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = Os();
	return t && e.setAttribute("nonce", t), e;
}
function As(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function js(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Ms = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = ks()) && (As(t, n), js(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Ns = function() {
	var e = Ms();
	return function(t, n) {
		r.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Ps = function() {
	var e = Ns();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Fs = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Is = function(e) {
	return parseInt(e || "", 10) || 0;
}, Ls = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Is(n),
		Is(r),
		Is(i)
	];
}, Rs = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Fs;
	var t = Ls(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, zs = Ps(), Bs = "data-scroll-locked", Vs = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${ps} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Bs}] {
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
  
  .${ds} {
    right: ${s}px ${r};
  }
  
  .${fs} {
    margin-right: ${s}px ${r};
  }
  
  .${ds} .${ds} {
    right: 0 ${r};
  }
  
  .${fs} .${fs} {
    margin-right: 0 ${r};
  }
  
  body[${Bs}] {
    ${ms}: ${s}px;
  }
`;
}, Hs = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Us = function() {
	r.useEffect(function() {
		return document.body.setAttribute(Bs, (Hs() + 1).toString()), function() {
			var e = Hs() - 1;
			e <= 0 ? document.body.removeAttribute(Bs) : document.body.setAttribute(Bs, e.toString());
		};
	}, []);
}, Ws = function(e) {
	var t = e.noRelative, n = e.noImportant, i = e.gapMode, a = i === void 0 ? "margin" : i;
	Us();
	var o = r.useMemo(function() {
		return Rs(a);
	}, [a]);
	return r.createElement(zs, { styles: Vs(o, !t, a, n ? "" : "!important") });
}, Gs = !1;
if (typeof window < "u") try {
	var Ks = Object.defineProperty({}, "passive", { get: function() {
		return Gs = !0, !0;
	} });
	window.addEventListener("test", Ks, Ks), window.removeEventListener("test", Ks, Ks);
} catch {
	Gs = !1;
}
var qs = Gs ? { passive: !1 } : !1, Js = function(e) {
	return e.tagName === "TEXTAREA";
}, Ys = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Js(e) && n[t] === "visible");
}, Xs = function(e) {
	return Ys(e, "overflowY");
}, Zs = function(e) {
	return Ys(e, "overflowX");
}, Qs = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), tc(e, r)) {
			var i = nc(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, $s = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, ec = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, tc = function(e, t) {
	return e === "v" ? Xs(t) : Zs(t);
}, nc = function(e, t) {
	return e === "v" ? $s(t) : ec(t);
}, rc = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, ic = function(e, t, n, r, i) {
	var a = rc(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = nc(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && tc(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, ac = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, oc = function(e) {
	return [e.deltaX, e.deltaY];
}, sc = function(e) {
	return e && "current" in e ? e.current : e;
}, cc = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, lc = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, uc = 0, dc = [];
function fc(e) {
	var t = r.useRef([]), n = r.useRef([0, 0]), i = r.useRef(), a = r.useState(uc++)[0], o = r.useState(Ps)[0], s = r.useRef(e);
	r.useEffect(function() {
		s.current = e;
	}, [e]), r.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var t = us([e.lockRef.current], (e.shards || []).map(sc), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var c = r.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !s.current.allowPinchZoom;
		var r = ac(e), a = n.current, o = "deltaX" in e ? e.deltaX : a[0] - r[0], c = "deltaY" in e ? e.deltaY : a[1] - r[1], l, u = e.target, d = Math.abs(o) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Qs(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Qs(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || c) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return ic(h, t, e, h === "h" ? o : c, !0);
	}, []), l = r.useCallback(function(e) {
		var n = e;
		if (!(!dc.length || dc[dc.length - 1] !== o)) {
			var r = "deltaY" in n ? oc(n) : ac(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && cc(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var a = (s.current.shards || []).map(sc).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(a.length > 0 ? c(n, a[0]) : !s.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), u = r.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: pc(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), d = r.useCallback(function(e) {
		n.current = ac(e), i.current = void 0;
	}, []), f = r.useCallback(function(t) {
		u(t.type, oc(t), t.target, c(t, e.lockRef.current));
	}, []), p = r.useCallback(function(t) {
		u(t.type, ac(t), t.target, c(t, e.lockRef.current));
	}, []);
	r.useEffect(function() {
		return dc.push(o), e.setCallbacks({
			onScrollCapture: f,
			onWheelCapture: f,
			onTouchMoveCapture: p
		}), document.addEventListener("wheel", l, qs), document.addEventListener("touchmove", l, qs), document.addEventListener("touchstart", d, qs), function() {
			dc = dc.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", l, qs), document.removeEventListener("touchmove", l, qs), document.removeEventListener("touchstart", d, qs);
		};
	}, []);
	var m = e.removeScrollBar, h = e.inert;
	return r.createElement(r.Fragment, null, h ? r.createElement(o, { styles: lc(a) }) : null, m ? r.createElement(Ws, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function pc(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var mc = ws(Ts, fc), hc = r.forwardRef(function(e, t) {
	return r.createElement(Ds, cs({}, e, {
		ref: t,
		sideCar: mc
	}));
});
hc.classNames = Ds.classNames;
//#endregion
//#region node_modules/@radix-ui/react-select/dist/index.mjs
var gc = Object.defineProperty, $ = (e, t) => gc(e, "name", {
	value: t,
	configurable: !0
}), _c = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], vc = [" ", "Enter"], yc = "Select", [bc, xc, Sc] = /* @__PURE__ */ Ln(yc), [Cc, wc] = /* @__PURE__ */ hn(yc, [Sc, co]), Tc = co(), [Ec, Dc] = Cc(yc), [Oc, kc] = Cc(yc);
function Ac(e) {
	let { __scopeSelect: n, children: i, open: a, defaultOpen: o, onOpenChange: s, value: c, defaultValue: l, onValueChange: u, dir: d, name: f, autoComplete: p, disabled: m, required: h, form: g, internal_do_not_use_render: _ } = e, v = Tc(n), [y, b] = r.useState(null), [x, S] = r.useState(null), [C, w] = r.useState(!1), T = Zn(d), [E, ee] = Wo({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: yc
	}), [D, O] = Wo({
		prop: c,
		defaultProp: l,
		onChange: u,
		caller: yc
	}), k = r.useRef(null), A = r.useRef(D);
	r.useEffect(() => {
		let e = g ? y?.ownerDocument.getElementById(g) : y?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ $(() => O(A.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		g,
		y,
		O
	]);
	let j = !y || !!g || !!y.closest("form"), [M, N] = r.useState(/* @__PURE__ */ new Set()), P = Wr(), F = Array.from(M).map((e) => e.props.value).join(";"), te = r.useCallback((e) => {
		N((t) => new Set(t).add(e));
	}, []), ne = r.useCallback((e) => {
		N((t) => {
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), re = {
		required: h,
		trigger: y,
		onTriggerChange: b,
		valueNode: x,
		onValueNodeChange: S,
		valueNodeHasChildren: C,
		onValueNodeHasChildrenChange: w,
		contentId: P,
		value: D,
		onValueChange: O,
		open: E,
		onOpenChange: ee,
		dir: T,
		triggerPointerDownPosRef: k,
		disabled: m,
		name: f,
		autoComplete: p,
		form: g,
		nativeOptions: M,
		nativeSelectKey: F,
		isFormControl: j
	};
	return /* @__PURE__ */ t(So, {
		...v,
		children: /* @__PURE__ */ t(Ec, {
			scope: n,
			...re,
			children: /* @__PURE__ */ t(bc.Provider, {
				scope: n,
				children: /* @__PURE__ */ t(Oc, {
					scope: n,
					onNativeOptionAdd: te,
					onNativeOptionRemove: ne,
					children: _l(_) ? _(re) : i
				})
			})
		})
	});
}
$(Ac, "SelectProvider");
var jc = /* @__PURE__ */ $((r) => {
	let { __scopeSelect: i, children: a, ...o } = r;
	return /* @__PURE__ */ t(Ac, {
		__scopeSelect: i,
		...o,
		internal_do_not_use_render: ({ isFormControl: r }) => /* @__PURE__ */ n(e, { children: [a, r ? /* @__PURE__ */ t(gl, { __scopeSelect: i }) : null] })
	});
}, "Select"), Mc = "SelectTrigger", Nc = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let { __scopeSelect: i, disabled: a = !1, ...o } = e, s = Tc(i), c = Dc(Mc, i), l = c.disabled || a, u = K(n, c.onTriggerChange), d = xc(i), f = r.useRef("touch"), [p, m, h] = yl((e) => {
		let t = d().filter((e) => !e.disabled), n = bl(t, e, t.find((e) => e.value === c.value));
		n !== void 0 && c.onValueChange(n.value);
	}), g = /* @__PURE__ */ $((e) => {
		l || (c.onOpenChange(!0), h()), e && (c.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	}, "handleOpen");
	return /* @__PURE__ */ t(Co, {
		asChild: !0,
		...s,
		children: /* @__PURE__ */ t(J.button, {
			type: "button",
			role: "combobox",
			"aria-controls": c.open ? c.contentId : void 0,
			"aria-expanded": c.open,
			"aria-required": c.required,
			"aria-autocomplete": "none",
			dir: c.dir,
			"data-state": c.open ? "open" : "closed",
			disabled: l,
			"data-disabled": l ? "" : void 0,
			"data-placeholder": vl(c.value) ? "" : void 0,
			...o,
			ref: u,
			onClick: G(o.onClick, (e) => {
				e.currentTarget.focus(), f.current !== "mouse" && g(e);
			}),
			onPointerDown: G(o.onPointerDown, (e) => {
				f.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (g(e), e.preventDefault());
			}),
			onKeyDown: G(o.onKeyDown, (e) => {
				let t = p.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && m(e.key), !(t && e.key === " ") && _c.includes(e.key) && (g(), e.preventDefault());
			})
		})
	});
}, "SelectTrigger")), Pc = "SelectValue", Fc = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let { __scopeSelect: i, className: a, style: o, children: s, placeholder: c = "", ...l } = e, u = Dc(Pc, i), { onValueNodeHasChildrenChange: d } = u, f = s !== void 0, p = K(n, u.onValueNodeChange);
	Z(() => {
		d(f);
	}, [d, f]);
	let m = vl(u.value);
	return /* @__PURE__ */ t(J.span, {
		...l,
		asChild: !m && l.asChild,
		ref: p,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ t(r.Fragment, { children: m ? c : s }, m ? "placeholder" : "value")
	});
}, "SelectValue")), Ic = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let { __scopeSelect: r, children: i, ...a } = e;
	return /* @__PURE__ */ t(J.span, {
		"aria-hidden": !0,
		...a,
		ref: n,
		children: i || "▼"
	});
}, "SelectIcon")), [Lc, Rc] = Cc("SelectPortal", { forceMount: void 0 }), zc = /* @__PURE__ */ $((e) => {
	let { __scopeSelect: n, forceMount: r, ...i } = e;
	return /* @__PURE__ */ t(Lc, {
		scope: e.__scopeSelect,
		forceMount: r,
		children: /* @__PURE__ */ t(Eo, {
			asChild: !0,
			...i
		})
	});
}, "SelectPortal"), Bc = "SelectContent", Vc = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let i = Rc(Bc, e.__scopeSelect), { forceMount: a = i.forceMount, ...o } = e, s = Dc(Bc, e.__scopeSelect), [c, l] = r.useState();
	return Z(() => {
		l(new DocumentFragment());
	}, []), /* @__PURE__ */ t(Ao, {
		present: a || s.open,
		children: ({ present: e }) => e ? /* @__PURE__ */ t(qc, {
			...o,
			ref: n
		}) : /* @__PURE__ */ t(Hc, {
			...o,
			fragment: c
		})
	});
}, "SelectContent")), Hc = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let { __scopeSelect: r, children: i, fragment: a } = e;
	return a ? p.createPortal(/* @__PURE__ */ t(Wc, {
		scope: r,
		children: /* @__PURE__ */ t(bc.Slot, {
			scope: r,
			children: /* @__PURE__ */ t("div", {
				ref: n,
				children: i
			})
		})
	}), a) : null;
}, "SelectContentFragment")), Uc = 10, [Wc, Gc] = Cc(Bc), Kc = /* @__PURE__ */ Cn("SelectContent.RemoveScroll"), qc = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let { __scopeSelect: i } = e, { position: a = "item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: s, onPointerDownOutside: c, side: l, sideOffset: u, align: d, alignOffset: f, arrowPadding: p, collisionBoundary: m, collisionPadding: h, sticky: g, hideWhenDetached: _, avoidCollisions: v, ...y } = e, b = Dc(Bc, i), [x, S] = r.useState(null), [C, w] = r.useState(null), T = K(n, S), [E, ee] = r.useState(null), [D, O] = r.useState(null), k = xc(i), [A, j] = r.useState(!1), M = r.useRef(!1);
	r.useEffect(() => {
		if (x) return ss(x);
	}, [x]), Sr();
	let N = r.useCallback((e) => {
		let [t, ...n] = k().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && C && (C.scrollTop = 0), n === r && C && (C.scrollTop = C.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [k, C]), P = r.useCallback(() => N([E, x]), [
		N,
		E,
		x
	]);
	r.useEffect(() => {
		A && P();
	}, [A, P]);
	let { onOpenChange: F, triggerPointerDownPosRef: te } = b;
	r.useEffect(() => {
		if (x) {
			let e = {
				x: 0,
				y: 0
			}, t = /* @__PURE__ */ $((t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (te.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (te.current?.y ?? 0))
				};
			}, "handlePointerMove"), n = /* @__PURE__ */ $((n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : n.composedPath().includes(x) || F(!1), document.removeEventListener("pointermove", t), te.current = null;
			}, "handlePointerUp");
			return te.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		x,
		F,
		te
	]), r.useEffect(() => {
		let e = /* @__PURE__ */ $(() => F(!1), "close");
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [F]);
	let [ne, re] = yl((e) => {
		let t = k().filter((e) => !e.disabled), n = bl(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current?.focus());
	}), ie = r.useCallback((e, t, n) => {
		let r = !M.current && !n;
		(b.value !== void 0 && b.value === t || r) && (ee(e), r && (M.current = !0));
	}, [b.value]), I = r.useCallback(() => x?.focus(), [x]), L = r.useCallback((e, t, n) => {
		let r = !M.current && !n;
		(b.value !== void 0 && b.value === t || r) && O(e);
	}, [b.value]), ae = a === "popper" ? Yc : Jc, oe = ae === Yc ? {
		side: l,
		sideOffset: u,
		align: d,
		alignOffset: f,
		arrowPadding: p,
		collisionBoundary: m,
		collisionPadding: h,
		sticky: g,
		hideWhenDetached: _,
		avoidCollisions: v
	} : {};
	return /* @__PURE__ */ t(Wc, {
		scope: i,
		content: x,
		viewport: C,
		onViewportChange: w,
		itemRefCallback: ie,
		selectedItem: E,
		onItemLeave: I,
		itemTextRefCallback: L,
		focusSelectedItem: P,
		selectedItemText: D,
		position: a,
		isPositioned: A,
		searchRef: ne,
		children: /* @__PURE__ */ t(hc, {
			as: Kc,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ t(Or, {
				asChild: !0,
				trapped: b.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: G(o, (e) => {
					b.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ t(ur, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: s,
					onPointerDownOutside: c,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => b.onOpenChange(!1),
					children: /* @__PURE__ */ t(ae, {
						role: "listbox",
						id: b.contentId,
						"data-state": b.open ? "open" : "closed",
						dir: b.dir,
						onContextMenu: (e) => e.preventDefault(),
						...y,
						...oe,
						onPlaced: () => j(!0),
						ref: T,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...y.style
						},
						onKeyDown: G(y.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && re(e.key), [
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
}, "SelectContentImpl")), Jc = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let { __scopeSelect: i, onPlaced: a, ...o } = e, s = Dc(Bc, i), c = Gc(Bc, i), [l, u] = r.useState(null), [d, f] = r.useState(null), p = K(n, f), m = xc(i), h = r.useRef(!1), g = r.useRef(!0), { viewport: _, selectedItem: v, selectedItemText: y, focusSelectedItem: b } = c, x = r.useCallback(() => {
		if (s.trigger && s.valueNode && l && d && _ && v && y) {
			let e = s.trigger.getBoundingClientRect(), t = d.getBoundingClientRect(), n = s.valueNode.getBoundingClientRect(), r = y.getBoundingClientRect();
			if (s.dir !== "rtl") {
				let i = r.left - t.left, a = n.left - i, o = e.left - a, s = e.width + o, c = Math.max(s, t.width), u = window.innerWidth - Uc, d = rn(a, [Uc, Math.max(Uc, u - c)]);
				l.style.minWidth = s + "px", l.style.left = d + "px";
			} else {
				let i = t.right - r.right, a = window.innerWidth - n.right - i, o = window.innerWidth - e.right - a, s = e.width + o, c = Math.max(s, t.width), u = window.innerWidth - Uc, d = rn(a, [Uc, Math.max(Uc, u - c)]);
				l.style.minWidth = s + "px", l.style.right = d + "px";
			}
			let i = m(), o = window.innerHeight - Uc * 2, c = _.scrollHeight, u = window.getComputedStyle(d), f = parseInt(u.borderTopWidth, 10), p = parseInt(u.paddingTop, 10), g = parseInt(u.borderBottomWidth, 10), b = parseInt(u.paddingBottom, 10), x = f + p + c + b + g, S = Math.min(v.offsetHeight * 5, x), C = window.getComputedStyle(_), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - Uc, ee = o - E, D = v.offsetHeight / 2, O = v.offsetTop + D, k = f + p + O, A = x - k;
			if (k <= E) {
				let e = i.length > 0 && v === i[i.length - 1].ref.current;
				l.style.bottom = "0px";
				let t = d.clientHeight - _.offsetTop - _.offsetHeight, n = k + Math.max(ee, D + (e ? T : 0) + t + g);
				l.style.height = n + "px";
			} else {
				let e = i.length > 0 && v === i[0].ref.current;
				l.style.top = "0px";
				let t = Math.max(E, f + _.offsetTop + (e ? w : 0) + D) + A;
				l.style.height = t + "px", _.scrollTop = k - E + _.offsetTop;
			}
			l.style.margin = `${Uc}px 0`, l.style.minHeight = S + "px", l.style.maxHeight = o + "px", a?.(), requestAnimationFrame(() => h.current = !0);
		}
	}, [
		m,
		s.trigger,
		s.valueNode,
		l,
		d,
		_,
		v,
		y,
		s.dir,
		a
	]);
	Z(() => x(), [x]);
	let [S, C] = r.useState();
	Z(() => {
		d && C(window.getComputedStyle(d).zIndex);
	}, [d]);
	let w = r.useCallback((e) => {
		e && g.current === !0 && (x(), b?.(), g.current = !1);
	}, [x, b]);
	return /* @__PURE__ */ t(Xc, {
		scope: i,
		contentWrapper: l,
		shouldExpandOnScrollRef: h,
		onScrollButtonChange: w,
		children: /* @__PURE__ */ t("div", {
			ref: u,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: S
			},
			children: /* @__PURE__ */ t(J.div, {
				...o,
				ref: p,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...o.style
				}
			})
		})
	});
}, "SelectItemAlignedPosition")), Yc = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let { __scopeSelect: r, align: i = "start", collisionPadding: a = Uc, ...o } = e, s = Tc(r);
	return /* @__PURE__ */ t(wo, {
		...s,
		...o,
		ref: n,
		align: i,
		collisionPadding: a,
		style: {
			boxSizing: "border-box",
			...o.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "SelectPopperPosition")), [Xc, Zc] = Cc(Bc, {}), Qc = "SelectViewport", $c = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(i, a) {
	let { __scopeSelect: o, nonce: s, ...c } = i, l = Gc(Qc, o), u = Zc(Qc, o), d = K(a, l.onViewportChange), f = r.useRef(0);
	return /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: s
	}), /* @__PURE__ */ t(bc.Slot, {
		scope: o,
		children: /* @__PURE__ */ t(J.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...c,
			ref: d,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...c.style
			},
			onScroll: G(c.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = u;
				if (r?.current && n) {
					let e = Math.abs(f.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - Uc * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				f.current = t.scrollTop;
			})
		})
	})] });
}, "SelectViewport")), [el, tl] = Cc("SelectGroup"), nl = "SelectItem", [rl, il] = Cc(nl), al = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let { __scopeSelect: i, value: a, disabled: o = !1, textValue: s, ...c } = e, l = Dc(nl, i), u = Gc(nl, i), d = l.value === a, [f, p] = r.useState(s ?? ""), [m, h] = r.useState(!1), g = K(n, rr((e) => u.itemRefCallback?.(e, a, o))), _ = Wr(), v = r.useRef("touch"), y = /* @__PURE__ */ $(() => {
		o || (l.onValueChange(a), l.onOpenChange(!1));
	}, "handleSelect");
	return /* @__PURE__ */ t(rl, {
		scope: i,
		value: a,
		disabled: o,
		textId: _,
		isSelected: d,
		onItemTextChange: r.useCallback((e) => {
			p((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ t(bc.ItemSlot, {
			scope: i,
			value: a,
			disabled: o,
			textValue: f,
			children: /* @__PURE__ */ t(J.div, {
				role: "option",
				"aria-labelledby": _,
				"data-highlighted": m ? "" : void 0,
				"aria-selected": d && m,
				"data-state": d ? "checked" : "unchecked",
				"aria-disabled": o || void 0,
				"data-disabled": o ? "" : void 0,
				tabIndex: o ? void 0 : -1,
				...c,
				ref: g,
				onFocus: G(c.onFocus, () => h(!0)),
				onBlur: G(c.onBlur, () => h(!1)),
				onClick: G(c.onClick, () => {
					v.current !== "mouse" && y();
				}),
				onPointerUp: G(c.onPointerUp, () => {
					v.current === "mouse" && y();
				}),
				onPointerDown: G(c.onPointerDown, (e) => {
					v.current = e.pointerType;
				}),
				onPointerMove: G(c.onPointerMove, (e) => {
					v.current = e.pointerType, o ? u.onItemLeave?.() : v.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: G(c.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && u.onItemLeave?.();
				}),
				onKeyDown: G(c.onKeyDown, (e) => {
					o || e.target !== e.currentTarget || (u.searchRef?.current === "" || e.key !== " ") && (vc.includes(e.key) && y(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
}, "SelectItem")), ol = "SelectItemText", sl = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(i, a) {
	let { __scopeSelect: o, className: s, style: c, ...l } = i, u = Dc(ol, o), d = Gc(ol, o), f = il(ol, o), m = kc(ol, o), [h, g] = r.useState(null), _ = rr((e) => d.itemTextRefCallback?.(e, f.value, f.disabled)), v = K(a, g, f.onItemTextChange, _), y = h?.textContent, b = r.useMemo(() => /* @__PURE__ */ t("option", {
		value: f.value,
		disabled: f.disabled,
		children: y
	}, f.value), [
		f.disabled,
		f.value,
		y
	]), { onNativeOptionAdd: x, onNativeOptionRemove: S } = m;
	return Z(() => (x(b), () => S(b)), [
		x,
		S,
		b
	]), /* @__PURE__ */ n(e, { children: [/* @__PURE__ */ t(J.span, {
		id: f.textId,
		...l,
		ref: v
	}), f.isSelected && u.valueNode && !u.valueNodeHasChildren && !vl(u.value) ? p.createPortal(l.children, u.valueNode) : null] });
}, "SelectItemText")), cl = "SelectItemIndicator", ll = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let { __scopeSelect: r, ...i } = e;
	return il(cl, r).isSelected ? /* @__PURE__ */ t(J.span, {
		"aria-hidden": !0,
		...i,
		ref: n
	}) : null;
}, "SelectItemIndicator")), ul = "SelectScrollUpButton", dl = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let i = Gc(ul, e.__scopeSelect), a = Zc(ul, e.__scopeSelect), [o, s] = r.useState(!1), c = K(n, a.onScrollButtonChange);
	return Z(() => {
		if (i.viewport && i.isPositioned) {
			let e = function() {
				let e = t.scrollTop > 0;
				s(e);
			};
			$(e, "handleScroll");
			let t = i.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [i.viewport, i.isPositioned]), o ? /* @__PURE__ */ t(ml, {
		...e,
		ref: c,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = i;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
}, "SelectScrollUpButton")), fl = "SelectScrollDownButton", pl = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let i = Gc(fl, e.__scopeSelect), a = Zc(fl, e.__scopeSelect), [o, s] = r.useState(!1), c = K(n, a.onScrollButtonChange);
	return Z(() => {
		if (i.viewport && i.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight, n = Math.ceil(t.scrollTop) < e;
				s(n);
			};
			$(e, "handleScroll");
			let t = i.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [i.viewport, i.isPositioned]), o ? /* @__PURE__ */ t(ml, {
		...e,
		ref: c,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = i;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
}, "SelectScrollDownButton")), ml = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function(e, n) {
	let { __scopeSelect: i, onAutoScroll: a, ...o } = e, s = Gc("SelectScrollButton", i), c = r.useRef(null), l = xc(i), u = r.useCallback(() => {
		c.current !== null && (window.clearInterval(c.current), c.current = null);
	}, []);
	return r.useEffect(() => () => u(), [u]), Z(() => {
		l().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [l]), /* @__PURE__ */ t(J.div, {
		"aria-hidden": !0,
		...o,
		ref: n,
		style: {
			flexShrink: 0,
			...o.style
		},
		onPointerDown: G(o.onPointerDown, () => {
			c.current === null && (c.current = window.setInterval(a, 50));
		}),
		onPointerMove: G(o.onPointerMove, () => {
			s.onItemLeave?.(), c.current === null && (c.current = window.setInterval(a, 50));
		}),
		onPointerLeave: G(o.onPointerLeave, () => {
			u();
		})
	});
}, "SelectScrollButtonImpl")), hl = "SelectBubbleInput", gl = /* @__PURE__ */ r.forwardRef(/* @__PURE__ */ $(function({ __scopeSelect: e, ...i }, a) {
	let o = Dc(hl, e), { value: s, onValueChange: c, required: l, disabled: u, name: d, autoComplete: f, form: p } = o, { nativeOptions: m, nativeSelectKey: h } = o, g = r.useRef(null), _ = K(a, g), v = s ?? "", y = Zo(v), b = Array.from(m).some((e) => (e.props.value ?? "") === "");
	return r.useEffect(() => {
		let e = g.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (y !== v && n) {
			let t = new Event("change", { bubbles: !0 });
			n.call(e, v), e.dispatchEvent(t);
		}
	}, [y, v]), /* @__PURE__ */ n(J.select, {
		"aria-hidden": !0,
		required: l,
		tabIndex: -1,
		name: d,
		autoComplete: f,
		disabled: u,
		form: p,
		onChange: (e) => c(e.target.value),
		...i,
		style: {
			...Qo,
			...i.style
		},
		ref: _,
		defaultValue: v,
		children: [vl(s) && !b ? /* @__PURE__ */ t("option", { value: "" }) : null, Array.from(m)]
	}, h);
}, "SelectBubbleInput"));
function _l(e) {
	return typeof e == "function";
}
$(_l, "isFunction");
function vl(e) {
	return e === "" || e === void 0;
}
$(vl, "shouldShowPlaceholder");
function yl(e) {
	let t = rr(e), n = r.useRef(""), i = r.useRef(0), a = r.useCallback((e) => {
		let r = n.current + e;
		t(r), (/* @__PURE__ */ $((function e(t) {
			n.current = t, window.clearTimeout(i.current), t !== "" && (i.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(r);
	}, [t]), o = r.useCallback(() => {
		n.current = "", window.clearTimeout(i.current);
	}, []);
	return r.useEffect(() => () => window.clearTimeout(i.current), []), [
		n,
		a,
		o
	];
}
$(yl, "useTypeaheadSearch");
function bl(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = xl(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
$(bl, "findNextItem");
function xl(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
$(xl, "wrapArray");
//#endregion
//#region src/components/atoms/dropdown/dropdown.constants.ts
var Sl = rt([
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
}), Cl = rt([
	"z-50",
	"overflow-hidden",
	"rounded-md",
	"border",
	"bg-popover",
	"shadow-md",
	"w-[var(--radix-select-trigger-width)]"
]), wl = i.forwardRef(({ className: e, size: r, state: i, children: a, ...o }, s) => /* @__PURE__ */ n(Nc, {
	ref: s,
	className: U(Sl({
		size: r,
		state: i
	}), e),
	...o,
	children: [/* @__PURE__ */ t(W, {
		as: "span",
		variant: "bodyMd",
		children: a
	}), /* @__PURE__ */ t(Ic, {
		asChild: !0,
		children: /* @__PURE__ */ t(ot, {
			icon: At,
			size: "sm"
		})
	})]
}));
wl.displayName = Nc.displayName;
//#endregion
//#region src/components/atoms/dropdown/dropdownContent.tsx
var Tl = i.forwardRef(({ className: e, children: r, size: i, ...a }, o) => /* @__PURE__ */ t(zc, { children: /* @__PURE__ */ n(Vc, {
	ref: o,
	position: "popper",
	side: "bottom",
	align: "start",
	sideOffset: 8,
	className: U(Cl({}), e),
	...a,
	children: [
		/* @__PURE__ */ t(dl, {
			className: "flex justify-center py-1",
			children: /* @__PURE__ */ t(ot, {
				icon: jt,
				size: "sm"
			})
		}),
		/* @__PURE__ */ t($c, {
			className: "p-1",
			children: r
		}),
		/* @__PURE__ */ t(pl, {
			className: "flex justify-center py-1",
			children: /* @__PURE__ */ t(ot, {
				icon: At,
				size: "sm"
			})
		})
	]
}) }));
Tl.displayName = Vc.displayName;
//#endregion
//#region src/components/atoms/dropdown/dropdownItem.tsx
var El = i.forwardRef(({ className: e, children: r, ...i }, a) => /* @__PURE__ */ n(al, {
	ref: a,
	className: U("flex w-full cursor-default items-center rounded-md px-3 py-2", "outline-none", "focus:bg-accent", "data-disabled:pointer-events-none data-disabled:opacity-50", e),
	...i,
	children: [/* @__PURE__ */ t(ll, {
		className: "mr-2 flex h-4 w-4",
		children: /* @__PURE__ */ t(ot, {
			icon: kt,
			size: "sm"
		})
	}), /* @__PURE__ */ t(sl, {
		asChild: !0,
		children: /* @__PURE__ */ t(W, {
			as: "span",
			variant: "bodyMd",
			className: "text-text-primary",
			children: r
		})
	})]
}));
El.displayName = al.displayName;
//#endregion
//#region src/components/atoms/dropdown/dropdown.tsx
var Dl = ({ label: e, placeholder: r = "Select option", helperText: i, errorMessage: a, required: o = !1, size: s = "md", state: c = "default", children: l, ...u }) => {
	let d = c === "error";
	return /* @__PURE__ */ n("div", {
		className: "flex w-full flex-col gap-2",
		children: [
			e && /* @__PURE__ */ n(W, {
				as: "label",
				variant: "labelMd",
				className: "text-text-primary",
				children: [e, o && /* @__PURE__ */ t(W, {
					as: "label",
					variant: "labelMd",
					className: "ml-1 text-danger",
					children: "*"
				})]
			}),
			/* @__PURE__ */ n(jc, {
				...u,
				children: [/* @__PURE__ */ t(wl, {
					size: s,
					state: d ? "error" : "default",
					children: /* @__PURE__ */ t(Fc, {
						className: "font-inherit",
						placeholder: r
					})
				}), /* @__PURE__ */ t(Tl, {
					size: s,
					children: l
				})]
			}),
			d && a ? /* @__PURE__ */ t(W, {
				as: "p",
				variant: "bodySm",
				className: "text-danger",
				children: a
			}) : i ? /* @__PURE__ */ t(W, {
				as: "p",
				variant: "bodySm",
				className: "text-text-secondary",
				children: i
			}) : null
		]
	});
};
Dl.Item = El;
//#endregion
//#region src/components/atoms/input/input.constants.ts
var Ol = rt([
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
}), kl = s(({ className: e, label: r, helperText: i, errorMessage: a, size: o = "lg", state: s = "default", type: c = "text", startAdornment: l, endAdornment: u, ...d }, f) => {
	let p = s === "error", m = U(Ol({
		size: o,
		state: s
	}), l && "pl-10", u && "pr-10", e);
	return /* @__PURE__ */ n("div", {
		className: "flex w-full flex-col gap-2",
		children: [
			r && /* @__PURE__ */ t(W, {
				as: "label",
				variant: "labelMd",
				className: "text-text-primary",
				children: r
			}),
			/* @__PURE__ */ n("div", {
				className: "relative flex w-full items-center",
				children: [
					l && /* @__PURE__ */ t("div", {
						className: " absolute left-3 flex items-center text-text-secondary",
						children: l
					}),
					/* @__PURE__ */ t("input", {
						ref: f,
						type: c,
						className: m,
						...d
					}),
					u && /* @__PURE__ */ t("div", {
						className: " absolute right-3 flex items-center text-text-secondary",
						children: u
					})
				]
			}),
			p && a ? /* @__PURE__ */ t(W, {
				as: "p",
				variant: "bodySm",
				className: "text-danger",
				children: a
			}) : i ? /* @__PURE__ */ t(W, {
				as: "p",
				variant: "bodySm",
				className: "text-text-secondary",
				children: i
			}) : null
		]
	});
});
kl.displayName = "Input";
//#endregion
//#region src/components/atoms/skeleton/skeleton.constants.ts
var Al = {
	text: "text",
	circle: "circle",
	rectangle: "rectangle"
}, jl = {
	text: "rounded-md",
	circle: "rounded-full aspect-square",
	rectangle: "rounded-lg"
}, Ml = s(({ className: e, variant: n = Al.rectangle, ...r }, i) => /* @__PURE__ */ t("div", {
	ref: i,
	"aria-hidden": "true",
	className: U("animate-pulse bg-skeleton", jl[n], e),
	...r
}));
Ml.displayName = "Skeleton";
//#endregion
//#region src/components/molecules/appearanceToggle/appearanceToggle.tsx
var Nl = ({ appearance: e, onAppearanceChange: n, size: r = "sm" }) => {
	let i = e === "dark" ? "light" : "dark";
	return /* @__PURE__ */ t(Jt, {
		variant: "outline",
		size: "sm",
		iconOnly: !0,
		icon: /* @__PURE__ */ t(ot, {
			icon: e === "dark" ? It : Ft,
			size: "sm"
		}),
		onClick: () => n(i),
		"aria-label": e === "dark" ? "Switch to light mode" : "Switch to dark mode"
	});
}, Pl = rt([
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
}), Fl = rt([
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
}), Il = ({ className: e, icon: r, title: i, description: a, action: o, size: s = "md", ...c }) => /* @__PURE__ */ n("div", {
	className: U(Pl({ size: s }), e),
	...c,
	children: [
		r && /* @__PURE__ */ t("div", {
			className: Fl({ size: s }),
			children: r
		}),
		/* @__PURE__ */ n("div", {
			className: "flex flex-col gap-1 items-center",
			children: [/* @__PURE__ */ t(W, {
				as: "h3",
				variant: "h3",
				children: i
			}), a && /* @__PURE__ */ t(W, {
				as: "p",
				variant: "bodySm",
				className: "text-text-disabled",
				children: a
			})]
		}),
		o && /* @__PURE__ */ t("div", {
			className: "mt-2",
			children: o
		})
	]
}), Ll = rt([
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
}), Rl = rt(["text-sm"], {
	variants: { state: {
		default: "text-text-secondary",
		error: "text-danger"
	} },
	defaultVariants: { state: "default" }
}), zl = ({ className: e, label: r, required: i = !1, description: a, errorMessage: o, children: s, spacing: c = "md", ...l }) => {
	let u = !!o;
	return /* @__PURE__ */ n("div", {
		className: U(Ll({ spacing: c }), e),
		...l,
		children: [
			r && /* @__PURE__ */ n(W, {
				as: "label",
				variant: "bodySm",
				className: "text-text-primary",
				children: [r, i && /* @__PURE__ */ t(W, {
					as: "span",
					variant: "bodySm",
					className: "text-danger",
					children: "*"
				})]
			}),
			s,
			u ? /* @__PURE__ */ t(W, {
				as: "p",
				variant: "bodySm",
				className: Rl({ state: "error" }),
				children: o
			}) : a ? /* @__PURE__ */ t(W, {
				as: "p",
				variant: "bodySm",
				className: Rl({ state: "default" }),
				children: a
			}) : null
		]
	});
}, Bl = s(({ className: e, toggleLabel: n = "Show password", iconSize: r = "lg", ...i }, a) => {
	let [o, s] = f(!1);
	return /* @__PURE__ */ t(kl, {
		ref: a,
		type: o ? "text" : "password",
		className: U(e),
		endAdornment: /* @__PURE__ */ t(Jt, {
			type: "button",
			variant: "text",
			iconOnly: !0,
			icon: /* @__PURE__ */ t(ot, {
				icon: o ? Nt : Mt,
				size: r
			}),
			onClick: () => {
				s((e) => !e);
			},
			"aria-label": o ? "Hide password" : n,
			"aria-pressed": o
		}),
		...i
	});
});
Bl.displayName = "PasswordField";
//#endregion
//#region src/components/organisms/loginForm/loginForm.tsx
var Vl = ({ email: e = "", password: r = "", emailError: i, passwordError: a, loading: o = !1, onEmailChange: s, onPasswordChange: c, onSubmit: l }) => /* @__PURE__ */ n("form", {
	onSubmit: l,
	className: "flex w-full flex-col gap-6",
	children: [
		/* @__PURE__ */ t(zl, {
			label: "Email",
			required: !0,
			errorMessage: i,
			children: /* @__PURE__ */ t(kl, {
				type: "email",
				value: e,
				onChange: (e) => s(e.target.value),
				placeholder: "name@email.com"
			})
		}),
		/* @__PURE__ */ t(zl, {
			label: "Password",
			required: !0,
			errorMessage: a,
			children: /* @__PURE__ */ t(Bl, {
				value: r,
				onChange: (e) => c?.(e.target.value),
				placeholder: "Enter password"
			})
		}),
		/* @__PURE__ */ t(Jt, {
			type: "submit",
			variant: "primary",
			size: "lg",
			width: "full",
			className: "w-full",
			loading: o,
			children: o ? "Logging in..." : "Login"
		})
	]
});
//#endregion
export { Nl as AppearanceToggle, Ut as Avatar, Jt as Button, Zt as Card, en as Checkbox, Dl as Dropdown, Il as EmptyState, zl as FormField, ot as Icon, kl as Input, Vl as LoginForm, dt as Motion, Bl as PasswordField, pt as Radius, Ml as Skeleton, ht as Spacing, Kt as Spinner, ct as Theme, _t as ThemeProvider, W as Typography, vt as useTheme };

//# sourceMappingURL=index.js.map