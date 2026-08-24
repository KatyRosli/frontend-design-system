//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n));
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function l(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = l(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function u() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = l(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var d = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, f = (e, t) => ({
	classGroupId: e,
	validator: t
}), p = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), m = "-", h = [], g = "arbitrary..", _ = (e) => {
	let t = b(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return y(e);
			let n = e.split(m);
			return v(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? d(i, t) : t : i || h;
			}
			return n[e] || h;
		}
	};
}, v = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = v(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(m) : e.slice(t).join(m), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, y = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? g + r : void 0;
})(), b = (e) => {
	let { theme: t, classGroups: n } = e;
	return x(n, t);
}, x = (e, t) => {
	let n = p();
	for (let r in e) {
		let i = e[r];
		S(i, n, r, t);
	}
	return n;
}, S = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		C(i, t, n, r);
	}
}, C = (e, t, n, r) => {
	if (typeof e == "string") {
		w(e, t, n);
		return;
	}
	if (typeof e == "function") {
		T(e, t, n, r);
		return;
	}
	E(e, t, n, r);
}, w = (e, t, n) => {
	let r = e === "" ? t : D(t, e);
	r.classGroupId = n;
}, T = (e, t, n, r) => {
	if (O(e)) {
		S(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(f(n, e));
}, E = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		S(o, D(t, a), n, r);
	}
}, D = (e, t) => {
	let n = e, r = t.split(m), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = p(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, O = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, k = (e) => {
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
}, A = "!", j = ":", M = [], N = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), P = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === j) {
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
		s.endsWith(A) ? (c = s.slice(0, -1), l = !0) : s.startsWith(A) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return N(t, l, c, u);
	};
	if (t) {
		let e = t + j, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : N(M, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, F = (e) => {
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
	cache: k(e.cacheSize),
	parseClassName: P(e),
	sortModifiers: F(e),
	postfixLookupClassGroupIds: ee(e),
	..._(e)
}), ee = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, te = /\s+/, ne = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(te), l = "";
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
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + A : _, y = v + g;
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
}, re = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = L(n)) && (i && (i += " "), i += r);
	return i;
}, L = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = L(e[r])) && (n && (n += " "), n += t);
	return n;
}, R = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = I(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = ne(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(re(...e));
}, ie = [], z = (e) => {
	let t = (t) => t[e] || ie;
	return t.isThemeGetter = !0, t;
}, ae = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, B = /^\((?:(\w[\w-]*):)?(.+)\)$/i, oe = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, se = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ce = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, le = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ue = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, de = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, V = (e) => oe.test(e), H = (e) => !!e && !Number.isNaN(Number(e)), fe = (e) => !!e && Number.isInteger(Number(e)), U = (e) => e.endsWith("%") && H(e.slice(0, -1)), pe = (e) => se.test(e), me = () => !0, he = (e) => ce.test(e) && !le.test(e), ge = () => !1, _e = (e) => ue.test(e), ve = (e) => de.test(e), ye = (e) => !W(e) && !G(e), be = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), xe = (e) => Ie(e, Be, ge), W = (e) => ae.test(e), Se = (e) => Ie(e, Ve, he), Ce = (e) => Ie(e, He, H), we = (e) => Ie(e, We, me), Te = (e) => Ie(e, Ue, ge), Ee = (e) => Ie(e, Re, ge), De = (e) => Ie(e, ze, ve), Oe = (e) => Ie(e, Ge, _e), G = (e) => B.test(e), ke = (e) => Le(e, Ve), Ae = (e) => Le(e, Ue), je = (e) => Le(e, Re), Me = (e) => Le(e, Be), Ne = (e) => Le(e, ze), Pe = (e) => Le(e, Ge, !0), Fe = (e) => Le(e, We, !0), Ie = (e, t, n) => {
	let r = ae.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Le = (e, t, n = !1) => {
	let r = B.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Re = (e) => e === "position" || e === "percentage", ze = (e) => e === "image" || e === "url", Be = (e) => e === "length" || e === "size" || e === "bg-size", Ve = (e) => e === "length", He = (e) => e === "number", Ue = (e) => e === "family-name", We = (e) => e === "number" || e === "weight", Ge = (e) => e === "shadow", Ke = /*#__PURE__*/ R(() => {
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
		G,
		W
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
		G,
		W,
		c
	], T = () => [
		V,
		"full",
		"auto",
		...w()
	], E = () => [
		fe,
		"none",
		"subgrid",
		G,
		W
	], D = () => [
		"auto",
		{ span: [
			"full",
			fe,
			G,
			W
		] },
		fe,
		G,
		W
	], O = () => [
		fe,
		"auto",
		G,
		W
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		G,
		W
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
		V,
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
		V,
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
		V,
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
		G,
		W
	], ee = () => [
		...b(),
		je,
		Ee,
		{ position: [G, W] }
	], te = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], ne = () => [
		"auto",
		"cover",
		"contain",
		Me,
		xe,
		{ size: [G, W] }
	], re = () => [
		U,
		ke,
		Se
	], L = () => [
		"",
		"none",
		"full",
		l,
		G,
		W
	], R = () => [
		"",
		H,
		ke,
		Se
	], ie = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ae = () => [
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
	], B = () => [
		H,
		U,
		je,
		Ee
	], oe = () => [
		"",
		"none",
		m,
		G,
		W
	], se = () => [
		"none",
		H,
		G,
		W
	], ce = () => [
		"none",
		H,
		G,
		W
	], le = () => [
		H,
		G,
		W
	], ue = () => [
		V,
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
			blur: [pe],
			breakpoint: [pe],
			color: [me],
			container: [pe],
			"drop-shadow": [pe],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [ye],
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
			"inset-shadow": [pe],
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
			radius: [pe],
			shadow: [pe],
			spacing: ["px", H],
			text: [pe],
			"text-shadow": [pe],
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
				V,
				W,
				G,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				G,
				W
			] }],
			"container-named": [be],
			columns: [{ columns: [
				H,
				W,
				G,
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
				fe,
				"auto",
				G,
				W
			] }],
			basis: [{ basis: [
				V,
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
				H,
				V,
				"auto",
				"initial",
				"none",
				W
			] }],
			grow: [{ grow: [
				"",
				H,
				G,
				W
			] }],
			shrink: [{ shrink: [
				"",
				H,
				G,
				W
			] }],
			order: [{ order: [
				fe,
				"first",
				"last",
				"none",
				G,
				W
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
				ke,
				Se
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Fe,
				we
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
				U,
				W
			] }],
			"font-family": [{ font: [
				Ae,
				Te,
				t
			] }],
			"font-features": [{ "font-features": [W] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				G,
				W
			] }],
			"line-clamp": [{ "line-clamp": [
				H,
				"none",
				G,
				Ce
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				G,
				W
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				G,
				W
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
			"text-decoration-style": [{ decoration: [...ie(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				H,
				"from-font",
				"auto",
				G,
				Se
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				H,
				"auto",
				G,
				W
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
				fe,
				G,
				W
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
				G,
				W
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
				G,
				W
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
			"bg-position": [{ bg: ee() }],
			"bg-repeat": [{ bg: te() }],
			"bg-size": [{ bg: ne() }],
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
						fe,
						G,
						W
					],
					radial: [
						"",
						G,
						W
					],
					conic: [
						fe,
						G,
						W
					]
				},
				Ne,
				De
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: re() }],
			"gradient-via-pos": [{ via: re() }],
			"gradient-to-pos": [{ to: re() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
			rounded: [{ rounded: L() }],
			"rounded-s": [{ "rounded-s": L() }],
			"rounded-e": [{ "rounded-e": L() }],
			"rounded-t": [{ "rounded-t": L() }],
			"rounded-r": [{ "rounded-r": L() }],
			"rounded-b": [{ "rounded-b": L() }],
			"rounded-l": [{ "rounded-l": L() }],
			"rounded-ss": [{ "rounded-ss": L() }],
			"rounded-se": [{ "rounded-se": L() }],
			"rounded-ee": [{ "rounded-ee": L() }],
			"rounded-es": [{ "rounded-es": L() }],
			"rounded-tl": [{ "rounded-tl": L() }],
			"rounded-tr": [{ "rounded-tr": L() }],
			"rounded-br": [{ "rounded-br": L() }],
			"rounded-bl": [{ "rounded-bl": L() }],
			"border-w": [{ border: R() }],
			"border-w-x": [{ "border-x": R() }],
			"border-w-y": [{ "border-y": R() }],
			"border-w-s": [{ "border-s": R() }],
			"border-w-e": [{ "border-e": R() }],
			"border-w-bs": [{ "border-bs": R() }],
			"border-w-be": [{ "border-be": R() }],
			"border-w-t": [{ "border-t": R() }],
			"border-w-r": [{ "border-r": R() }],
			"border-w-b": [{ "border-b": R() }],
			"border-w-l": [{ "border-l": R() }],
			"divide-x": [{ "divide-x": R() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": R() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...ie(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...ie(),
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
				...ie(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				H,
				G,
				W
			] }],
			"outline-w": [{ outline: [
				"",
				H,
				ke,
				Se
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Pe,
				Oe
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Pe,
				Oe
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: R() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [H, Se] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": R() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Pe,
				Oe
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				H,
				G,
				W
			] }],
			"mix-blend": [{ "mix-blend": [
				...ae(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ae() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [H] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": B() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": B() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": B() }],
			"mask-image-t-to-pos": [{ "mask-t-to": B() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": B() }],
			"mask-image-r-to-pos": [{ "mask-r-to": B() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": B() }],
			"mask-image-b-to-pos": [{ "mask-b-to": B() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": B() }],
			"mask-image-l-to-pos": [{ "mask-l-to": B() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": B() }],
			"mask-image-x-to-pos": [{ "mask-x-to": B() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": B() }],
			"mask-image-y-to-pos": [{ "mask-y-to": B() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [G, W] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": B() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": B() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [H] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": B() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": B() }],
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
			"mask-position": [{ mask: ee() }],
			"mask-repeat": [{ mask: te() }],
			"mask-size": [{ mask: ne() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				G,
				W
			] }],
			filter: [{ filter: [
				"",
				"none",
				G,
				W
			] }],
			blur: [{ blur: oe() }],
			brightness: [{ brightness: [
				H,
				G,
				W
			] }],
			contrast: [{ contrast: [
				H,
				G,
				W
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Pe,
				Oe
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				H,
				G,
				W
			] }],
			"hue-rotate": [{ "hue-rotate": [
				H,
				G,
				W
			] }],
			invert: [{ invert: [
				"",
				H,
				G,
				W
			] }],
			saturate: [{ saturate: [
				H,
				G,
				W
			] }],
			sepia: [{ sepia: [
				"",
				H,
				G,
				W
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				G,
				W
			] }],
			"backdrop-blur": [{ "backdrop-blur": oe() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				H,
				G,
				W
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				H,
				G,
				W
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				H,
				G,
				W
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				H,
				G,
				W
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				H,
				G,
				W
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				H,
				G,
				W
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				H,
				G,
				W
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				H,
				G,
				W
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
				G,
				W
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				H,
				"initial",
				G,
				W
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				G,
				W
			] }],
			delay: [{ delay: [
				H,
				G,
				W
			] }],
			animate: [{ animate: [
				"none",
				v,
				G,
				W
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				G,
				W
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: se() }],
			"rotate-x": [{ "rotate-x": se() }],
			"rotate-y": [{ "rotate-y": se() }],
			"rotate-z": [{ "rotate-z": se() }],
			scale: [{ scale: ce() }],
			"scale-x": [{ "scale-x": ce() }],
			"scale-y": [{ "scale-y": ce() }],
			"scale-z": [{ "scale-z": ce() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: le() }],
			"skew-x": [{ "skew-x": le() }],
			"skew-y": [{ "skew-y": le() }],
			transform: [{ transform: [
				G,
				W,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ue() }],
			"translate-x": [{ "translate-x": ue() }],
			"translate-y": [{ "translate-y": ue() }],
			"translate-z": [{ "translate-z": ue() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				fe,
				G,
				W
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
				G,
				W
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
				G,
				W
			] }],
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				H,
				ke,
				Se,
				Ce
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
function K(...e) {
	return Ke(u(e));
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
var qe = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Je = u, Ye = (e, t) => (n) => {
	if (t?.variants == null) return Je(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = qe(t) || qe(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Je(e, a, t?.compoundVariants?.reduce((e, t) => {
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
}, Xe = Ye(["antialiased", "text-foreground"], {
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
}), Ze = /* @__PURE__ */ o(((e) => {
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
})), Qe = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.iterator;
	function m(e) {
		return typeof e != "object" || !e ? null : (e = p && e[p] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var h = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, g = Object.assign, _ = {};
	function v(e, t, n) {
		this.props = e, this.context = t, this.refs = _, this.updater = n || h;
	}
	v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, v.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function y() {}
	y.prototype = v.prototype;
	function b(e, t, n) {
		this.props = e, this.context = t, this.refs = _, this.updater = n || h;
	}
	var x = b.prototype = new y();
	x.constructor = b, g(x, v.prototype), x.isPureReactComponent = !0;
	var S = Array.isArray;
	function C() {}
	var w = {
		H: null,
		A: null,
		T: null,
		S: null
	}, T = Object.prototype.hasOwnProperty;
	function E(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function D(e, t) {
		return E(e.type, t, e.props);
	}
	function O(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function k(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var A = /\/+/g;
	function j(e, t) {
		return typeof e == "object" && e && e.key != null ? k("" + e.key) : t.toString(36);
	}
	function M(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(C, C) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function N(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, N(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + j(e, 0) : a, S(o) ? (i = "", c != null && (i = c.replace(A, "$&/") + "/"), N(o, r, i, "", function(e) {
			return e;
		})) : o != null && (O(o) && (o = D(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(A, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (S(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + j(a, u), c += N(a, r, i, s, o);
		else if (u = m(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + j(a, u++), c += N(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return N(M(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function P(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return N(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function F(e) {
		if (e._status === -1) {
			var t = e._result;
			t = t(), t.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
			}), e._status === -1 && (e._status = 0, e._result = t);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var I = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, ee = {
		map: P,
		forEach: function(e, t, n) {
			P(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return P(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return P(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!O(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = ee, e.Component = v, e.Fragment = r, e.Profiler = a, e.PureComponent = b, e.StrictMode = i, e.Suspense = l, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return w.H.useMemoCache(e);
		}
	}, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = g({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !T.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return E(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) T.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return E(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = O, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: F
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = w.T, n = {};
		w.T = n;
		try {
			var r = e(), i = w.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(C, I);
		} catch (e) {
			I(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), w.T = t;
		}
	}, e.unstable_useCacheRefresh = function() {
		return w.H.useCacheRefresh();
	}, e.use = function(e) {
		return w.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return w.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return w.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return w.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return w.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return w.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return w.H.useEffectEvent(e);
	}, e.useId = function() {
		return w.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return w.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return w.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return w.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return w.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return w.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return w.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return w.H.useRef(e);
	}, e.useState = function(e) {
		return w.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return w.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return w.H.useTransition();
	}, e.version = "19.2.4";
})), $e = /* @__PURE__ */ o(((e, t) => {
	process.env.NODE_ENV !== "production" && (function() {
		function n(e, t) {
			Object.defineProperty(a.prototype, e, { get: function() {
				console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
			} });
		}
		function r(e) {
			return typeof e != "object" || !e ? null : (e = se && e[se] || e["@@iterator"], typeof e == "function" ? e : null);
		}
		function i(e, t) {
			e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
			var n = e + "." + t;
			ce[n] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, e), ce[n] = !0);
		}
		function a(e, t, n) {
			this.props = e, this.context = t, this.refs = de, this.updater = n || le;
		}
		function o() {}
		function s(e, t, n) {
			this.props = e, this.context = t, this.refs = de, this.updater = n || le;
		}
		function c() {}
		function l(e) {
			return "" + e;
		}
		function u(e) {
			try {
				l(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var n = t.error, r = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", r), l(e);
			}
		}
		function d(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === fe ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case ee: return "Fragment";
				case ne: return "Profiler";
				case te: return "StrictMode";
				case ie: return "Suspense";
				case z: return "SuspenseList";
				case oe: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case I: return "Portal";
				case L: return e.displayName || "Context";
				case re: return (e._context.displayName || "Context") + ".Consumer";
				case R:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case ae: return t = e.displayName || null, t === null ? d(e.type) || "Memo" : t;
				case B:
					t = e._payload, e = e._init;
					try {
						return d(e(t));
					} catch {}
			}
			return null;
		}
		function f(e) {
			if (e === ee) return "<>";
			if (typeof e == "object" && e && e.$$typeof === B) return "<...>";
			try {
				var t = d(e);
				return t ? "<" + t + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function p() {
			var e = U.A;
			return e === null ? null : e.getOwner();
		}
		function m() {
			return Error("react-stack-top-frame");
		}
		function h(e) {
			if (pe.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function g(e, t) {
			function n() {
				he || (he = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function _() {
			var e = d(this.type);
			return _e[e] || (_e[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function v(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: F,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: _
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
		function y(e, t) {
			return t = v(e.type, t, e.props, e._owner, e._debugStack, e._debugTask), e._store && (t._store.validated = e._store.validated), t;
		}
		function b(e) {
			x(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === B && (e._payload.status === "fulfilled" ? x(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function x(e) {
			return typeof e == "object" && !!e && e.$$typeof === F;
		}
		function S(e) {
			var t = {
				"=": "=0",
				":": "=2"
			};
			return "$" + e.replace(/[=:]/g, function(e) {
				return t[e];
			});
		}
		function C(e, t) {
			return typeof e == "object" && e && e.key != null ? (u(e.key), S("" + e.key)) : t.toString(36);
		}
		function w(e) {
			switch (e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
				default: switch (typeof e.status == "string" ? e.then(c, c) : (e.status = "pending", e.then(function(t) {
					e.status === "pending" && (e.status = "fulfilled", e.value = t);
				}, function(t) {
					e.status === "pending" && (e.status = "rejected", e.reason = t);
				})), e.status) {
					case "fulfilled": return e.value;
					case "rejected": throw e.reason;
				}
			}
			throw e;
		}
		function T(e, t, n, i, a) {
			var o = typeof e;
			(o === "undefined" || o === "boolean") && (e = null);
			var s = !1;
			if (e === null) s = !0;
			else switch (o) {
				case "bigint":
				case "string":
				case "number":
					s = !0;
					break;
				case "object": switch (e.$$typeof) {
					case F:
					case I:
						s = !0;
						break;
					case B: return s = e._init, T(s(e._payload), t, n, i, a);
				}
			}
			if (s) {
				s = e, a = a(s);
				var c = i === "" ? "." + C(s, 0) : i;
				return H(a) ? (n = "", c != null && (n = c.replace(xe, "$&/") + "/"), T(a, t, n, "", function(e) {
					return e;
				})) : a != null && (x(a) && (a.key != null && (s && s.key === a.key || u(a.key)), n = y(a, n + (a.key == null || s && s.key === a.key ? "" : ("" + a.key).replace(xe, "$&/") + "/") + c), i !== "" && s != null && x(s) && s.key == null && s._store && !s._store.validated && (n._store.validated = 2), a = n), t.push(a)), 1;
			}
			if (s = 0, c = i === "" ? "." : i + ":", H(e)) for (var l = 0; l < e.length; l++) i = e[l], o = c + C(i, l), s += T(i, t, n, o, a);
			else if (l = r(e), typeof l == "function") for (l === e.entries && (be || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), be = !0), e = l.call(e), l = 0; !(i = e.next()).done;) i = i.value, o = c + C(i, l++), s += T(i, t, n, o, a);
			else if (o === "object") {
				if (typeof e.then == "function") return T(w(e), t, n, i, a);
				throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
			}
			return s;
		}
		function E(e, t, n) {
			if (e == null) return e;
			var r = [], i = 0;
			return T(e, r, "", "", function(e) {
				return t.call(n, e, i++);
			}), r;
		}
		function D(e) {
			if (e._status === -1) {
				var t = e._ioInfo;
				t != null && (t.start = t.end = performance.now()), t = e._result;
				var n = t();
				if (n.then(function(t) {
					if (e._status === 0 || e._status === -1) {
						e._status = 1, e._result = t;
						var r = e._ioInfo;
						r != null && (r.end = performance.now()), n.status === void 0 && (n.status = "fulfilled", n.value = t);
					}
				}, function(t) {
					if (e._status === 0 || e._status === -1) {
						e._status = 2, e._result = t;
						var r = e._ioInfo;
						r != null && (r.end = performance.now()), n.status === void 0 && (n.status = "rejected", n.reason = t);
					}
				}), t = e._ioInfo, t != null) {
					t.value = n;
					var r = n.displayName;
					typeof r == "string" && (t.name = r);
				}
				e._status === -1 && (e._status = 0, e._result = n);
			}
			if (e._status === 1) return t = e._result, t === void 0 && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", t), "default" in t || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", t), t.default;
			throw e._result;
		}
		function O() {
			var e = U.H;
			return e === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), e;
		}
		function k() {
			U.asyncTransitions--;
		}
		function A(e) {
			if (Ce === null) try {
				var n = ("require" + Math.random()).slice(0, 7);
				Ce = (t && t[n]).call(t, "timers").setImmediate;
			} catch {
				Ce = function(e) {
					!1 === Se && (Se = !0, typeof MessageChannel > "u" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
					var t = new MessageChannel();
					t.port1.onmessage = e, t.port2.postMessage(void 0);
				};
			}
			return Ce(e);
		}
		function j(e) {
			return 1 < e.length && typeof AggregateError == "function" ? AggregateError(e) : e[0];
		}
		function M(e, t) {
			t !== we - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), we = t;
		}
		function N(e, t, n) {
			var r = U.actQueue;
			if (r !== null) if (r.length !== 0) try {
				P(r), A(function() {
					return N(e, t, n);
				});
				return;
			} catch (e) {
				U.thrownErrors.push(e);
			}
			else U.actQueue = null;
			0 < U.thrownErrors.length ? (r = j(U.thrownErrors), U.thrownErrors.length = 0, n(r)) : t(e);
		}
		function P(e) {
			if (!Ee) {
				Ee = !0;
				var t = 0;
				try {
					for (; t < e.length; t++) {
						var n = e[t];
						do {
							U.didUsePromise = !1;
							var r = n(!1);
							if (r !== null) {
								if (U.didUsePromise) {
									e[t] = n, e.splice(0, t);
									return;
								}
								n = r;
							} else break;
						} while (1);
					}
					e.length = 0;
				} catch (n) {
					e.splice(0, t + 1), U.thrownErrors.push(n);
				} finally {
					Ee = !1;
				}
			}
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var F = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), re = Symbol.for("react.consumer"), L = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), se = Symbol.iterator, ce = {}, le = {
			isMounted: function() {
				return !1;
			},
			enqueueForceUpdate: function(e) {
				i(e, "forceUpdate");
			},
			enqueueReplaceState: function(e) {
				i(e, "replaceState");
			},
			enqueueSetState: function(e) {
				i(e, "setState");
			}
		}, ue = Object.assign, de = {};
		Object.freeze(de), a.prototype.isReactComponent = {}, a.prototype.setState = function(e, t) {
			if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
			this.updater.enqueueSetState(this, e, t, "setState");
		}, a.prototype.forceUpdate = function(e) {
			this.updater.enqueueForceUpdate(this, e, "forceUpdate");
		};
		var V = {
			isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
			replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
		};
		for (Oe in V) V.hasOwnProperty(Oe) && n(Oe, V[Oe]);
		o.prototype = a.prototype, V = s.prototype = new o(), V.constructor = s, ue(V, a.prototype), V.isPureReactComponent = !0;
		var H = Array.isArray, fe = Symbol.for("react.client.reference"), U = {
			H: null,
			A: null,
			T: null,
			S: null,
			actQueue: null,
			asyncTransitions: 0,
			isBatchingLegacy: !1,
			didScheduleLegacyUpdate: !1,
			didUsePromise: !1,
			thrownErrors: [],
			getCurrentStack: null,
			recentlyCreatedOwnerStacks: 0
		}, pe = Object.prototype.hasOwnProperty, me = console.createTask ? console.createTask : function() {
			return null;
		};
		V = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var he, ge, _e = {}, ve = V.react_stack_bottom_frame.bind(V, m)(), ye = me(f(m)), be = !1, xe = /\/+/g, W = typeof reportError == "function" ? reportError : function(e) {
			if (typeof window == "object" && typeof window.ErrorEvent == "function") {
				var t = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
					error: e
				});
				if (!window.dispatchEvent(t)) return;
			} else if (typeof process == "object" && typeof process.emit == "function") {
				process.emit("uncaughtException", e);
				return;
			}
			console.error(e);
		}, Se = !1, Ce = null, we = 0, Te = !1, Ee = !1, De = typeof queueMicrotask == "function" ? function(e) {
			queueMicrotask(function() {
				return queueMicrotask(e);
			});
		} : A;
		V = Object.freeze({
			__proto__: null,
			c: function(e) {
				return O().useMemoCache(e);
			}
		});
		var Oe = {
			map: E,
			forEach: function(e, t, n) {
				E(e, function() {
					t.apply(this, arguments);
				}, n);
			},
			count: function(e) {
				var t = 0;
				return E(e, function() {
					t++;
				}), t;
			},
			toArray: function(e) {
				return E(e, function(e) {
					return e;
				}) || [];
			},
			only: function(e) {
				if (!x(e)) throw Error("React.Children.only expected to receive a single React element child.");
				return e;
			}
		};
		e.Activity = oe, e.Children = Oe, e.Component = a, e.Fragment = ee, e.Profiler = ne, e.PureComponent = s, e.StrictMode = te, e.Suspense = ie, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, e.__COMPILER_RUNTIME = V, e.act = function(e) {
			var t = U.actQueue, n = we;
			we++;
			var r = U.actQueue = t === null ? [] : t, i = !1;
			try {
				var a = e();
			} catch (e) {
				U.thrownErrors.push(e);
			}
			if (0 < U.thrownErrors.length) throw M(t, n), e = j(U.thrownErrors), U.thrownErrors.length = 0, e;
			if (typeof a == "object" && a && typeof a.then == "function") {
				var o = a;
				return De(function() {
					i || Te || (Te = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
				}), { then: function(e, a) {
					i = !0, o.then(function(i) {
						if (M(t, n), n === 0) {
							try {
								P(r), A(function() {
									return N(i, e, a);
								});
							} catch (e) {
								U.thrownErrors.push(e);
							}
							if (0 < U.thrownErrors.length) {
								var o = j(U.thrownErrors);
								U.thrownErrors.length = 0, a(o);
							}
						} else e(i);
					}, function(e) {
						M(t, n), 0 < U.thrownErrors.length ? (e = j(U.thrownErrors), U.thrownErrors.length = 0, a(e)) : a(e);
					});
				} };
			}
			var s = a;
			if (M(t, n), n === 0 && (P(r), r.length !== 0 && De(function() {
				i || Te || (Te = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
			}), U.actQueue = null), 0 < U.thrownErrors.length) throw e = j(U.thrownErrors), U.thrownErrors.length = 0, e;
			return { then: function(e, t) {
				i = !0, n === 0 ? (U.actQueue = r, A(function() {
					return N(s, e, t);
				})) : e(s);
			} };
		}, e.cache = function(e) {
			return function() {
				return e.apply(null, arguments);
			};
		}, e.cacheSignal = function() {
			return null;
		}, e.captureOwnerStack = function() {
			var e = U.getCurrentStack;
			return e === null ? null : e();
		}, e.cloneElement = function(e, t, n) {
			if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
			var r = ue({}, e.props), i = e.key, a = e._owner;
			if (t != null) {
				var o;
				a: {
					if (pe.call(t, "ref") && (o = Object.getOwnPropertyDescriptor(t, "ref").get) && o.isReactWarning) {
						o = !1;
						break a;
					}
					o = t.ref !== void 0;
				}
				for (s in o && (a = p()), h(t) && (u(t.key), i = "" + t.key), t) !pe.call(t, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && t.ref === void 0 || (r[s] = t[s]);
			}
			var s = arguments.length - 2;
			if (s === 1) r.children = n;
			else if (1 < s) {
				o = Array(s);
				for (var c = 0; c < s; c++) o[c] = arguments[c + 2];
				r.children = o;
			}
			for (r = v(e.type, i, r, a, e._debugStack, e._debugTask), i = 2; i < arguments.length; i++) b(arguments[i]);
			return r;
		}, e.createContext = function(e) {
			return e = {
				$$typeof: L,
				_currentValue: e,
				_currentValue2: e,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			}, e.Provider = e, e.Consumer = {
				$$typeof: re,
				_context: e
			}, e._currentRenderer = null, e._currentRenderer2 = null, e;
		}, e.createElement = function(e, t, n) {
			for (var r = 2; r < arguments.length; r++) b(arguments[r]);
			r = {};
			var i = null;
			if (t != null) for (c in ge || !("__self" in t) || "key" in t || (ge = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), h(t) && (u(t.key), i = "" + t.key), t) pe.call(t, c) && c !== "key" && c !== "__self" && c !== "__source" && (r[c] = t[c]);
			var a = arguments.length - 2;
			if (a === 1) r.children = n;
			else if (1 < a) {
				for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
				Object.freeze && Object.freeze(o), r.children = o;
			}
			if (e && e.defaultProps) for (c in a = e.defaultProps, a) r[c] === void 0 && (r[c] = a[c]);
			i && g(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e);
			var c = 1e4 > U.recentlyCreatedOwnerStacks++;
			return v(e, i, r, p(), c ? Error("react-stack-top-frame") : ve, c ? me(f(e)) : ye);
		}, e.createRef = function() {
			var e = { current: null };
			return Object.seal(e), e;
		}, e.forwardRef = function(e) {
			e != null && e.$$typeof === ae ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e == "function" ? e.length !== 0 && e.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.") : console.error("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e), e != null && e.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
			var t = {
				$$typeof: R,
				render: e
			}, n;
			return Object.defineProperty(t, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return n;
				},
				set: function(t) {
					n = t, e.name || e.displayName || (Object.defineProperty(e, "name", { value: t }), e.displayName = t);
				}
			}), t;
		}, e.isValidElement = x, e.lazy = function(e) {
			e = {
				_status: -1,
				_result: e
			};
			var t = {
				$$typeof: B,
				_payload: e,
				_init: D
			}, n = {
				name: "lazy",
				start: -1,
				end: -1,
				value: null,
				owner: null,
				debugStack: Error("react-stack-top-frame"),
				debugTask: console.createTask ? console.createTask("lazy()") : null
			};
			return e._ioInfo = n, t._debugInfo = [{ awaited: n }], t;
		}, e.memo = function(e, t) {
			e ?? console.error("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e), t = {
				$$typeof: ae,
				type: e,
				compare: t === void 0 ? null : t
			};
			var n;
			return Object.defineProperty(t, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return n;
				},
				set: function(t) {
					n = t, e.name || e.displayName || (Object.defineProperty(e, "name", { value: t }), e.displayName = t);
				}
			}), t;
		}, e.startTransition = function(e) {
			var t = U.T, n = {};
			n._updatedFibers = /* @__PURE__ */ new Set(), U.T = n;
			try {
				var r = e(), i = U.S;
				i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && (U.asyncTransitions++, r.then(k, k), r.then(c, W));
			} catch (e) {
				W(e);
			} finally {
				t === null && n._updatedFibers && (e = n._updatedFibers.size, n._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), t !== null && n.types !== null && (t.types !== null && t.types !== n.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), t.types = n.types), U.T = t;
			}
		}, e.unstable_useCacheRefresh = function() {
			return O().useCacheRefresh();
		}, e.use = function(e) {
			return O().use(e);
		}, e.useActionState = function(e, t, n) {
			return O().useActionState(e, t, n);
		}, e.useCallback = function(e, t) {
			return O().useCallback(e, t);
		}, e.useContext = function(e) {
			var t = O();
			return e.$$typeof === re && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"), t.useContext(e);
		}, e.useDebugValue = function(e, t) {
			return O().useDebugValue(e, t);
		}, e.useDeferredValue = function(e, t) {
			return O().useDeferredValue(e, t);
		}, e.useEffect = function(e, t) {
			return e ?? console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"), O().useEffect(e, t);
		}, e.useEffectEvent = function(e) {
			return O().useEffectEvent(e);
		}, e.useId = function() {
			return O().useId();
		}, e.useImperativeHandle = function(e, t, n) {
			return O().useImperativeHandle(e, t, n);
		}, e.useInsertionEffect = function(e, t) {
			return e ?? console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"), O().useInsertionEffect(e, t);
		}, e.useLayoutEffect = function(e, t) {
			return e ?? console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"), O().useLayoutEffect(e, t);
		}, e.useMemo = function(e, t) {
			return O().useMemo(e, t);
		}, e.useOptimistic = function(e, t) {
			return O().useOptimistic(e, t);
		}, e.useReducer = function(e, t, n) {
			return O().useReducer(e, t, n);
		}, e.useRef = function(e) {
			return O().useRef(e);
		}, e.useState = function(e) {
			return O().useState(e);
		}, e.useSyncExternalStore = function(e, t, n) {
			return O().useSyncExternalStore(e, t, n);
		}, e.useTransition = function() {
			return O().useTransition();
		}, e.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), et = /* @__PURE__ */ o(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Qe() : t.exports = $e();
})), tt = /* @__PURE__ */ o(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === O ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case _: return "Fragment";
				case y: return "Profiler";
				case v: return "StrictMode";
				case C: return "Suspense";
				case w: return "SuspenseList";
				case D: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case g: return "Portal";
				case x: return e.displayName || "Context";
				case b: return (e._context.displayName || "Context") + ".Consumer";
				case S:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case T: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case E:
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
			if (typeof e == "object" && e && e.$$typeof === E) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			var e = k.A;
			return e === null ? null : e.getOwner();
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function s(e) {
			if (A.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function c(e, t) {
			function n() {
				N || (N = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function l() {
			var e = t(this.type);
			return P[e] || (P[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
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
			if (p !== void 0) if (o) if (j(p)) {
				for (o = 0; o < p.length; o++) f(p[o]);
				Object.freeze && Object.freeze(p);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else f(p);
			if (A.call(n, "key")) {
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
			p(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === E && (e._payload.status === "fulfilled" ? p(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function p(e) {
			return typeof e == "object" && !!e && e.$$typeof === h;
		}
		var m = et(), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), k = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, j = Array.isArray, M = console.createTask ? console.createTask : function() {
			return null;
		};
		m = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var N, P = {}, F = m.react_stack_bottom_frame.bind(m, o)(), I = M(i(o)), ee = {};
		e.Fragment = _, e.jsx = function(e, t, n) {
			var r = 1e4 > k.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !1, r ? Error("react-stack-top-frame") : F, r ? M(i(e)) : I);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > k.recentlyCreatedOwnerStacks++;
			return d(e, t, n, !0, r ? Error("react-stack-top-frame") : F, r ? M(i(e)) : I);
		};
	})();
})), q = (/* @__PURE__ */ o(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Ze() : t.exports = tt();
})))();
function J({ children: e, variant: t = "bodyMd", as: n = "p", className: r, ...i }) {
	return /* @__PURE__ */ (0, q.jsx)(n, {
		className: K(Xe({ variant: t }), r),
		...i,
		children: e
	});
}
//#endregion
//#region src/foundations/icon/icon.constants.ts
var nt = {
	xs: "size-3",
	sm: "size-4",
	md: "size-5",
	lg: "size-6",
	xl: "size-8"
};
//#endregion
//#region src/foundations/icon/icon.tsx
function rt({ icon: e, size: t = "md", className: n, ariaHidden: r = !0 }) {
	return /* @__PURE__ */ (0, q.jsx)(e, {
		className: K(nt[t], "shrink-0", n),
		strokeWidth: 2,
		"aria-hidden": r
	});
}
//#endregion
//#region src/foundations/theme/theme.constants.ts
var it = [
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
function at() {
	return /* @__PURE__ */ (0, q.jsx)("div", {
		className: "space-y-12",
		children: it.map((e) => /* @__PURE__ */ (0, q.jsxs)("section", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, q.jsx)("h2", {
				className: "\n            text-xl\n            font-semibold\n            font-heading\n          ",
				children: e.name
			}), /* @__PURE__ */ (0, q.jsx)("div", {
				className: "\n            grid\n            grid-cols-1\n            md:grid-cols-2\n            gap-4\n          ",
				children: e.tokens.map((e) => /* @__PURE__ */ (0, q.jsxs)("div", {
					className: "\n                  border\n                  rounded-lg\n                  overflow-hidden\n                  bg-background\n                ",
					children: [/* @__PURE__ */ (0, q.jsx)("div", { className: `
                    h-20
                    ${e.className}
                  ` }), /* @__PURE__ */ (0, q.jsxs)("div", {
						className: "\n                  p-4\n                  space-y-1\n                ",
						children: [/* @__PURE__ */ (0, q.jsx)("p", {
							className: "\n                    font-medium\n                  ",
							children: e.name
						}), /* @__PURE__ */ (0, q.jsx)("code", {
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
var ot = [
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
], st = [
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
function ct() {
	return /* @__PURE__ */ (0, q.jsxs)("div", {
		className: "space-y-10",
		children: [/* @__PURE__ */ (0, q.jsxs)("section", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, q.jsx)("h2", {
				className: "text-xl font-semibold",
				children: "Duration"
			}), ot.map((e) => /* @__PURE__ */ (0, q.jsxs)("div", {
				className: "\n                flex\n                items-center\n                gap-6\n              ",
				children: [/* @__PURE__ */ (0, q.jsx)("div", {
					className: "\n                  size-12\n                  rounded-md\n                  bg-primary\n                  animate-pulse\n                ",
					style: { animationDuration: e.value }
				}), /* @__PURE__ */ (0, q.jsxs)("div", { children: [
					/* @__PURE__ */ (0, q.jsx)("p", {
						className: "font-medium",
						children: e.name
					}),
					/* @__PURE__ */ (0, q.jsx)("p", {
						className: "\n                  text-sm\n                  text-text-secondary\n                ",
						children: e.value
					}),
					/* @__PURE__ */ (0, q.jsx)("p", {
						className: "\n                  text-sm\n                  text-text-secondary\n                ",
						children: e.usage
					})
				] })]
			}, e.name))]
		}), /* @__PURE__ */ (0, q.jsxs)("section", {
			className: "space-y-6",
			children: [/* @__PURE__ */ (0, q.jsx)("h2", {
				className: "text-xl font-semibold",
				children: "Easing"
			}), st.map((e) => /* @__PURE__ */ (0, q.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, q.jsx)("p", {
						className: "font-medium",
						children: e.name
					}),
					/* @__PURE__ */ (0, q.jsx)("p", {
						className: "\n                text-sm\n                text-text-secondary\n              ",
						children: e.value
					}),
					/* @__PURE__ */ (0, q.jsx)("p", {
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
var lt = [
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
function ut() {
	return /* @__PURE__ */ (0, q.jsx)("div", {
		className: "\n      space-y-8\n    ",
		children: lt.map((e) => /* @__PURE__ */ (0, q.jsxs)("div", {
			className: "\n            space-y-3\n          ",
			children: [/* @__PURE__ */ (0, q.jsxs)("div", {
				className: "\n            flex\n            items-center\n            gap-6\n          ",
				children: [/* @__PURE__ */ (0, q.jsx)("div", { className: `
                size-24
                bg-primary
                ${e.className}
              ` }), /* @__PURE__ */ (0, q.jsxs)("div", { children: [/* @__PURE__ */ (0, q.jsx)("p", {
					className: "\n                font-medium\n              ",
					children: e.name
				}), /* @__PURE__ */ (0, q.jsx)("p", {
					className: "\n                text-sm\n                text-text-secondary\n              ",
					children: e.value
				})] })]
			}), /* @__PURE__ */ (0, q.jsx)("p", {
				className: "\n            text-sm\n            text-text-secondary\n          ",
				children: e.usage
			})]
		}, e.name))
	});
}
//#endregion
//#region src/foundations/spacing/spacing.constants.ts
var dt = [
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
function ft() {
	return /* @__PURE__ */ (0, q.jsx)("div", {
		className: "space-y-8",
		children: dt.map((e) => /* @__PURE__ */ (0, q.jsxs)("div", {
			className: "\n            space-y-3\n          ",
			children: [/* @__PURE__ */ (0, q.jsxs)("div", {
				className: "\n            flex\n            items-center\n            gap-4\n          ",
				children: [/* @__PURE__ */ (0, q.jsx)("div", {
					className: `
                ${e.className}
                bg-primary
                rounded-md
              `,
					children: /* @__PURE__ */ (0, q.jsx)("div", { className: "\n                  size-8\n                  bg-primary\n                  rounded-md\n                " })
				}), /* @__PURE__ */ (0, q.jsxs)("div", { children: [/* @__PURE__ */ (0, q.jsx)("p", {
					className: "\n                font-medium\n              ",
					children: e.name
				}), /* @__PURE__ */ (0, q.jsx)("p", {
					className: "\n                text-sm\n                text-text-secondary\n              ",
					children: e.value
				})] })]
			}), /* @__PURE__ */ (0, q.jsx)("p", {
				className: "\n            text-sm\n            text-text-secondary\n          ",
				children: e.usage
			})]
		}, e.name))
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs
var pt = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), mt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ht = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), gt = (e) => {
	let t = ht(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, _t = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, vt = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, Y = /* @__PURE__ */ c(et(), 1), yt = (0, Y.createContext)({}), bt = () => (0, Y.useContext)(yt), xt = (0, Y.forwardRef)(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: o, ...s }, c) => {
	let { size: l = 24, strokeWidth: u = 2, absoluteStrokeWidth: d = !1, color: f = "currentColor", className: p = "" } = bt() ?? {}, m = r ?? d ? Number(n ?? u) * 24 / Number(t ?? l) : n ?? u;
	return (0, Y.createElement)("svg", {
		ref: c,
		..._t,
		width: t ?? l ?? _t.width,
		height: t ?? l ?? _t.height,
		stroke: e ?? f,
		strokeWidth: m,
		className: pt("lucide", p, i),
		...!a && !vt(s) && { "aria-hidden": "true" },
		...s
	}, [...o.map(([e, t]) => (0, Y.createElement)(e, t)), ...Array.isArray(a) ? a : [a]]);
}), St = (e, t) => {
	let n = (0, Y.forwardRef)(({ className: n, ...r }, i) => (0, Y.createElement)(xt, {
		ref: i,
		iconNode: t,
		className: pt(`lucide-${mt(gt(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = gt(e), n;
}, Ct = St("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), wt = St("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), Tt = St("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), Et = St("eye-off", [
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
]), Dt = St("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), Ot = St("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), kt = St("user-round", [["circle", {
	cx: "12",
	cy: "8",
	r: "5",
	key: "1hypcn"
}], ["path", {
	d: "M20 21a8 8 0 0 0-16 0",
	key: "rfgkzh"
}]]), At = {
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
}, jt = {
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
}, Mt = Ye([
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
		sm: At.sm.avatar,
		md: At.md.avatar,
		lg: At.lg.avatar,
		xl: At.xl.avatar
	} },
	defaultVariants: { size: "md" }
}), Nt = Ye([
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
function Pt(e) {
	return e ? e.split(" ").map((e) => e[0]).join("").slice(0, 2).toUpperCase() : null;
}
var Ft = (0, Y.forwardRef)(({ size: e = "md", src: t, alt: n = "Avatar", name: r, fallback: i, status: a, className: o, ...s }, c) => {
	let l = Pt(r);
	return /* @__PURE__ */ (0, q.jsxs)("div", {
		ref: c,
		className: "relative inline-flex",
		...s,
		children: [/* @__PURE__ */ (0, q.jsx)("div", {
			className: K(Mt({ size: e }), o),
			children: t ? /* @__PURE__ */ (0, q.jsx)("img", {
				src: t,
				alt: n,
				className: "size-full object-cover"
			}) : l ? /* @__PURE__ */ (0, q.jsx)(J, {
				as: "span",
				variant: "labelMd",
				children: l
			}) : i || /* @__PURE__ */ (0, q.jsx)(kt, {
				"aria-hidden": "true",
				className: "size-1/2"
			})
		}), a && /* @__PURE__ */ (0, q.jsx)("span", {
			"aria-label": jt[a].label,
			className: K(Nt({ status: a }), At[e ?? "md"].indicator)
		})]
	});
});
Ft.displayName = "Avatar";
//#endregion
//#region src/components/atoms/button/button.constants.ts
var It = {
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
}, Lt = Ye([
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
}), Rt = ({ className: e, size: t = "md", variant: n = "default", ariaLabel: r = "Loading", ...i }) => /* @__PURE__ */ (0, q.jsx)("div", {
	role: "status",
	"aria-live": "polite",
	className: K(Lt({
		size: t,
		variant: n
	}), e),
	...i,
	children: /* @__PURE__ */ (0, q.jsx)("span", {
		className: "sr-only",
		children: r
	})
}), zt = Ye([
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

					${It.sm.height}

					${It.sm.padding}

					[&_svg]:${It.sm.icon}

				`,
			lg: `

					${It.lg.height}

					${It.lg.padding}

					[&_svg]:${It.lg.icon}

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
function Bt({ variant: e, size: t = "lg", width: n, icon: r, iconOnly: i, iconPosition: a = "left", loading: o = !1, children: s, className: c, disabled: l, ...u }) {
	let d = t === "lg" ? "labelLg" : "labelMd";
	return /* @__PURE__ */ (0, q.jsxs)("button", {
		className: K(zt({
			variant: e,
			size: t,
			width: n
		}), c),
		disabled: l || o,
		"aria-busy": o,
		...u,
		children: [o && /* @__PURE__ */ (0, q.jsx)(Rt, {
			size: "sm",
			variant: e === "primary" ? "inverse" : "default"
		}), i ? r : /* @__PURE__ */ (0, q.jsxs)(q.Fragment, { children: [
			r && a === "left" && r,
			/* @__PURE__ */ (0, q.jsx)(J, {
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
var Vt = {
	box: "size-5",
	icon: "size-4",
	gap: "gap-spacing-md",
	hitArea: "min-h-11 min-w-11"
}, Ht = Ye([
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
function Ut({ label: e, description: t, required: n, errorMessage: r, indeterminate: i = !1, variant: a, className: o, disabled: s, ...c }) {
	let l = (0, Y.useRef)(null);
	return (0, Y.useEffect)(() => {
		l.current && (l.current.indeterminate = i);
	}, [i]), /* @__PURE__ */ (0, q.jsxs)("label", {
		"aria-disabled": s,
		className: K("flex", t ? "items-start" : "items-center", "select-none", "cursor-pointer", Vt.gap, s && "cursor-not-allowed"),
		children: [/* @__PURE__ */ (0, q.jsxs)("div", {
			className: K("relative", "flex", "items-center", "justify-center", Vt.hitArea),
			children: [
				/* @__PURE__ */ (0, q.jsx)("input", {
					ref: l,
					type: "checkbox",
					className: K(Ht({ variant: a }), Vt.box, o),
					disabled: s,
					...c
				}),
				/* @__PURE__ */ (0, q.jsx)(rt, {
					icon: Ct,
					size: "sm",
					className: K("absolute", "hidden", "pointer-events-none", "text-primary-foreground", Vt.icon, "peer-checked:block")
				}),
				/* @__PURE__ */ (0, q.jsx)(rt, {
					icon: Ot,
					size: "sm",
					className: K("absolute", "hidden", "pointer-events-none", "text-primary-foreground", Vt.icon, "peer-indeterminate:block")
				})
			]
		}), /* @__PURE__ */ (0, q.jsxs)("div", {
			className: "flex flex-col gap-spacing-xs",
			children: [
				e && /* @__PURE__ */ (0, q.jsxs)(J, {
					as: "span",
					variant: "labelMd",
					className: "text-text-primary",
					children: [e, n && /* @__PURE__ */ (0, q.jsx)(J, {
						as: "span",
						variant: "labelMd",
						className: "text-danger spacing-xs",
						children: "*"
					})]
				}),
				t && /* @__PURE__ */ (0, q.jsx)(J, {
					as: "p",
					variant: "bodySm",
					className: "text-text-secondary",
					children: t
				}),
				r && /* @__PURE__ */ (0, q.jsx)(J, {
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
//#region node_modules/react-dom/cjs/react-dom.production.js
var Wt = /* @__PURE__ */ o(((e) => {
	var t = et();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal");
	function o(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function c(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return o(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = s.T, n = i.p;
		try {
			if (s.T = null, i.p = 2, e) return e();
		} finally {
			s.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = c(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") if (typeof t == "object" && t) {
			if (t.as == null || t.as === "script") {
				var n = c(t.as, t.crossOrigin);
				i.d.M(e, {
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0
				});
			}
		} else t ?? i.d.M(e);
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = c(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") if (t) {
			var n = c(t.as, t.crossOrigin);
			i.d.m(e, {
				as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0
			});
		} else i.d.m(e);
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return s.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return s.H.useHostTransitionStatus();
	}, e.version = "19.2.4";
})), Gt = /* @__PURE__ */ o(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t() {}
		function n(e) {
			return "" + e;
		}
		function r(e, t, r) {
			var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
			try {
				n(i);
				var a = !1;
			} catch {
				a = !0;
			}
			return a && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object"), n(i)), {
				$$typeof: u,
				key: i == null ? null : "" + i,
				children: e,
				containerInfo: t,
				implementation: r
			};
		}
		function i(e, t) {
			if (e === "font") return "";
			if (typeof t == "string") return t === "use-credentials" ? t : "";
		}
		function a(e) {
			return e === null ? "`null`" : e === void 0 ? "`undefined`" : e === "" ? "an empty string" : "something with type \"" + typeof e + "\"";
		}
		function o(e) {
			return e === null ? "`null`" : e === void 0 ? "`undefined`" : e === "" ? "an empty string" : typeof e == "string" ? JSON.stringify(e) : typeof e == "number" ? "`" + e + "`" : "something with type \"" + typeof e + "\"";
		}
		function s() {
			var e = d.H;
			return e === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), e;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var c = et(), l = {
			d: {
				f: t,
				r: function() {
					throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
				},
				D: t,
				C: t,
				L: t,
				m: t,
				X: t,
				S: t,
				M: t
			},
			p: 0,
			findDOMNode: null
		}, u = Symbol.for("react.portal"), d = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, e.createPortal = function(e, t) {
			var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error("Target container is not a DOM element.");
			return r(e, t, null, n);
		}, e.flushSync = function(e) {
			var t = d.T, n = l.p;
			try {
				if (d.T = null, l.p = 2, e) return e();
			} finally {
				d.T = t, l.p = n, l.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
			}
		}, e.preconnect = function(e, t) {
			typeof e == "string" && e ? t != null && typeof t != "object" ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", o(t)) : t != null && typeof t.crossOrigin != "string" && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", a(t.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", a(e)), typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, l.d.C(e, t));
		}, e.prefetchDNS = function(e) {
			if (typeof e != "string" || !e) console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", a(e));
			else if (1 < arguments.length) {
				var t = arguments[1];
				typeof t == "object" && t.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", o(t)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", o(t));
			}
			typeof e == "string" && l.d.D(e);
		}, e.preinit = function(e, t) {
			if (typeof e == "string" && e ? typeof t != "object" || !t ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", o(t)) : t.as !== "style" && t.as !== "script" && console.error("ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are \"style\" and \"script\".", o(t.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", a(e)), typeof e == "string" && t && typeof t.as == "string") {
				var n = t.as, r = i(n, t.crossOrigin), s = typeof t.integrity == "string" ? t.integrity : void 0, c = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
				n === "style" ? l.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
					crossOrigin: r,
					integrity: s,
					fetchPriority: c
				}) : n === "script" && l.d.X(e, {
					crossOrigin: r,
					integrity: s,
					fetchPriority: c,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0
				});
			}
		}, e.preinitModule = function(e, t) {
			var n = "";
			if (typeof e == "string" && e || (n += " The `href` argument encountered was " + a(e) + "."), t !== void 0 && typeof t != "object" ? n += " The `options` argument encountered was " + a(t) + "." : t && "as" in t && t.as !== "script" && (n += " The `as` option encountered was " + o(t.as) + "."), n) console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", n);
			else switch (n = t && typeof t.as == "string" ? t.as : "script", n) {
				case "script": break;
				default: n = o(n), console.error("ReactDOM.preinitModule(): Currently the only supported \"as\" type for this function is \"script\" but received \"%s\" instead. This warning was generated for `href` \"%s\". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)", n, e);
			}
			typeof e == "string" && (typeof t == "object" && t ? (t.as == null || t.as === "script") && (n = i(t.as, t.crossOrigin), l.d.M(e, {
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			})) : t ?? l.d.M(e));
		}, e.preload = function(e, t) {
			var n = "";
			if (typeof e == "string" && e || (n += " The `href` argument encountered was " + a(e) + "."), typeof t != "object" || !t ? n += " The `options` argument encountered was " + a(t) + "." : typeof t.as == "string" && t.as || (n += " The `as` option encountered was " + a(t.as) + "."), n && console.error("ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel=\"preload\" as=\"...\" />` tag.%s", n), typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
				n = t.as;
				var r = i(n, t.crossOrigin);
				l.d.L(e, n, {
					crossOrigin: r,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					type: typeof t.type == "string" ? t.type : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
					referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
					imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
					imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
					media: typeof t.media == "string" ? t.media : void 0
				});
			}
		}, e.preloadModule = function(e, t) {
			var n = "";
			typeof e == "string" && e || (n += " The `href` argument encountered was " + a(e) + "."), t !== void 0 && typeof t != "object" ? n += " The `options` argument encountered was " + a(t) + "." : t && "as" in t && typeof t.as != "string" && (n += " The `as` option encountered was " + a(t.as) + "."), n && console.error("ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel=\"modulepreload\" as=\"...\" />` tag.%s", n), typeof e == "string" && (t ? (n = i(t.as, t.crossOrigin), l.d.m(e, {
				as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0
			})) : l.d.m(e));
		}, e.requestFormReset = function(e) {
			l.d.r(e);
		}, e.unstable_batchedUpdates = function(e, t) {
			return e(t);
		}, e.useFormState = function(e, t, n) {
			return s().useFormState(e, t, n);
		}, e.useFormStatus = function() {
			return s().useHostTransitionStatus();
		}, e.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Kt = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
			if (process.env.NODE_ENV !== "production") throw Error("^_^");
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
			} catch (e) {
				console.error(e);
			}
		}
	}
	process.env.NODE_ENV === "production" ? (n(), t.exports = Wt()) : t.exports = Gt();
})), qt = Object.defineProperty, Jt = (e, t) => qt(e, "name", {
	value: t,
	configurable: !0
});
function Yt(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
Jt(Yt, "clamp");
//#endregion
//#region node_modules/@radix-ui/primitive/dist/index.mjs
var Xt = Object.defineProperty, Zt = (e, t) => Xt(e, "name", {
	value: t,
	configurable: !0
}), Qt = !!(typeof window < "u" && window.document && window.document.createElement);
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ Zt(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
Zt(X, "composeEventHandlers");
function $t(e) {
	if (!Qt) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
Zt($t, "getOwnerWindow");
function en(e) {
	if (!Qt) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
Zt(en, "getOwnerDocument");
function tn(e, t = !1) {
	let { activeElement: n } = en(e);
	if (!n?.nodeName) return null;
	if (nn(n) && n.contentDocument) return tn(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = en(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
Zt(tn, "getActiveElement");
function nn(e) {
	return e.tagName === "IFRAME";
}
Zt(nn, "isFrame");
//#endregion
//#region node_modules/@radix-ui/react-context/dist/index.mjs
var rn = Object.defineProperty, an = (e, t) => rn(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function on(e, t) {
	let n = Y.createContext(t);
	n.displayName = e + "Context";
	let r = /* @__PURE__ */ an((e) => {
		let { children: t, ...r } = e, i = Y.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ (0, q.jsx)(n.Provider, {
			value: i,
			children: t
		});
	}, "Provider");
	r.displayName = e + "Provider";
	function i(r, i = {}) {
		let { optional: a = !1 } = i, o = Y.useContext(n);
		if (o) return o;
		if (t !== void 0) return t;
		if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return an(i, "useContext"), [r, i];
}
an(on, "createContext");
// @__NO_SIDE_EFFECTS__
function sn(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = Y.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = /* @__PURE__ */ an((t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = Y.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ (0, q.jsx)(s.Provider, {
				value: c,
				children: r
			});
		}, "Provider");
		o.displayName = t + "Provider";
		function s(n, o, s = {}) {
			let { optional: c = !1 } = s, l = o?.[e]?.[a] || i, u = Y.useContext(l);
			if (u) return u;
			if (r !== void 0) return r;
			if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return an(s, "useContext"), [o, s];
	}
	an(r, "createContext");
	let i = /* @__PURE__ */ an(() => {
		let t = n.map((e) => Y.createContext(e));
		return /* @__PURE__ */ an(function(n) {
			let r = n?.[e] || t;
			return Y.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		}, "useScope");
	}, "createScope");
	return i.scopeName = e, [r, cn(i, ...t)];
}
an(sn, "createContextScope");
function cn(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = /* @__PURE__ */ an(() => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ an(function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return Y.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		}, "useComposedScopes");
	}, "createScope");
	return n.scopeName = t.scopeName, n;
}
an(cn, "composeContextScopes");
//#endregion
//#region node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var ln = Object.defineProperty, un = (e, t) => ln(e, "name", {
	value: t,
	configurable: !0
});
function dn(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
un(dn, "setRef");
function fn(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = dn(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : dn(e[t], null);
			}
		};
	};
}
un(fn, "composeRefs");
function Z(...e) {
	return Y.useCallback(fn(...e), e);
}
un(Z, "useComposedRefs");
//#endregion
//#region node_modules/@radix-ui/react-slot/dist/index.mjs
var pn = Object.defineProperty, mn = (e, t) => pn(e, "name", {
	value: t,
	configurable: !0
}), hn = /* @__PURE__ */ mn(((e, t) => {
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
		} : r === "className" ? n[r] = [i, a].filter(Boolean).join(" ") : r === "aria-describedby" && (n[r] = gn(a, i));
	}
	return {
		...e,
		...n
	};
}), "mergeProps");
function gn(...e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) if (typeof n == "string") for (let e of String(n).trim().split(/\s+/)) e && t.add(e);
	return t.size > 0 ? Array.from(t).join(" ") : void 0;
}
mn(gn, "concatAriaDescribedby");
var _n = Y.createContext(hn);
_n.displayName = "SlotContext";
// @__NO_SIDE_EFFECTS__
function vn(e) {
	let t = Y.forwardRef((t, n) => {
		let r = Y.useContext(_n), { children: i, mergeProps: a = r, ...o } = t, s = null, c = !1, l = [];
		Tn(i) && typeof kn == "function" && (i = kn(i._payload)), Y.Children.forEach(i, (e) => {
			if (Cn(e)) {
				c = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				Tn(n) && typeof kn == "function" && (n = kn(n._payload)), s = xn(t, n), l.push(s?.props?.children);
			} else l.push(e);
		}), s ? s = Y.cloneElement(s, void 0, l) : !c && Y.Children.count(i) === 1 && Y.isValidElement(i) && (s = i);
		let u = s ? Sn(s) : void 0, d = Z(n, u);
		if (!s) {
			if (i || i === 0) throw Error(c ? On(e) : Dn(e));
			return i;
		}
		let f = a(o, s.props ?? {});
		return s.type !== Y.Fragment && (f.ref = n ? d : u), Y.cloneElement(s, f);
	});
	return t.displayName = `${e}.Slot`, t;
}
mn(vn, "createSlot");
var yn = Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function bn(e) {
	let t = /* @__PURE__ */ mn((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = yn, t;
}
mn(bn, "createSlottable");
var xn = /* @__PURE__ */ mn((e, t) => {
	if ("child" in e.props) {
		let t = e.props.child;
		return Y.isValidElement(t) ? Y.cloneElement(t, void 0, e.props.children(t.props.children)) : null;
	}
	return Y.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Sn(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
mn(Sn, "getElementRef");
function Cn(e) {
	return Y.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === yn;
}
mn(Cn, "isSlottable");
var wn = Symbol.for("react.lazy");
function Tn(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === wn && "_payload" in e && En(e._payload);
}
mn(Tn, "isLazyComponent");
function En(e) {
	return typeof e == "object" && !!e && "then" in e;
}
mn(En, "isPromiseLike");
var Dn = /* @__PURE__ */ mn((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), On = /* @__PURE__ */ mn((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), kn = Y.use, An = Object.defineProperty, jn = (e, t) => An(e, "name", {
	value: t,
	configurable: !0
});
// @__NO_SIDE_EFFECTS__
function Mn(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ sn(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = /* @__PURE__ */ jn((e) => {
		let { scope: t, children: n } = e, r = Y.useRef(null), a = Y.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, q.jsx)(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	}, "CollectionProvider");
	o.displayName = t;
	let s = e + "CollectionSlot", c = /* @__PURE__ */ vn(s), l = Y.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = Z(t, a(s, n).collectionRef);
		return /* @__PURE__ */ (0, q.jsx)(c, {
			ref: i,
			children: r
		});
	});
	l.displayName = s;
	let u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ vn(u), p = Y.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = Y.useRef(null), s = Z(t, o), c = a(u, n);
		return Y.useEffect(() => (c.itemMap.set(o, {
			ref: o,
			...i
		}), () => void c.itemMap.delete(o))), /* @__PURE__ */ (0, q.jsx)(f, {
			[d]: "",
			ref: s,
			children: r
		});
	});
	p.displayName = u;
	function m(t) {
		let n = a(e + "CollectionConsumer", t);
		return Y.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${d}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return jn(m, "useCollection"), [
		{
			Provider: o,
			Slot: l,
			ItemSlot: p
		},
		m,
		r
	];
}
jn(Mn, "createCollection");
var Nn = /* @__PURE__ */ new WeakMap(), Pn = class e extends Map {
	static {
		jn(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], Nn.set(this, !0);
	}
	set(e, t) {
		return Nn.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = Ln(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
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
		let t = Fn(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = Fn(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return Fn(this.#e, e);
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
function Fn(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = In(e, t);
	return n === -1 ? void 0 : e[n];
}
jn(Fn, "at");
function In(e, t) {
	let n = e.length, r = Ln(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
jn(In, "toSafeIndex");
function Ln(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
jn(Ln, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Rn(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ sn(t), [i, a] = n(t, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new Pn(),
		setItemMap: /* @__PURE__ */ jn(() => void 0, "setItemMap")
	}), o = /* @__PURE__ */ jn(({ state: e, ...t }) => e ? /* @__PURE__ */ (0, q.jsx)(c, {
		...t,
		state: e
	}) : /* @__PURE__ */ (0, q.jsx)(s, { ...t }), "CollectionProvider");
	o.displayName = t;
	let s = /* @__PURE__ */ jn((e) => {
		let t = h();
		return /* @__PURE__ */ (0, q.jsx)(c, {
			...e,
			state: t
		});
	}, "CollectionInit");
	s.displayName = t + "Init";
	let c = /* @__PURE__ */ jn((e) => {
		let { scope: t, children: n, state: r } = e, a = Y.useRef(null), [o, s] = Y.useState(null), c = Z(a, s), [l, u] = r;
		return Y.useEffect(() => {
			if (!o) return;
			let e = Hn(() => {});
			return e.observe(o, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [o]), /* @__PURE__ */ (0, q.jsx)(i, {
			scope: t,
			itemMap: l,
			setItemMap: u,
			collectionRef: c,
			collectionRefObject: a,
			collectionElement: o,
			children: n
		});
	}, "CollectionProviderImpl");
	c.displayName = t + "Impl";
	let l = e + "CollectionSlot", u = /* @__PURE__ */ vn(l), d = Y.forwardRef((e, t) => {
		let { scope: n, children: r } = e, i = Z(t, a(l, n).collectionRef);
		return /* @__PURE__ */ (0, q.jsx)(u, {
			ref: i,
			children: r
		});
	});
	d.displayName = l;
	let f = e + "CollectionItemSlot", p = /* @__PURE__ */ vn(f), m = Y.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = Y.useRef(null), [s, c] = Y.useState(null), l = Z(t, o, c), { setItemMap: u } = a(f, n), d = Y.useRef(i);
		zn(d.current, i) || (d.current = i);
		let m = d.current;
		return Y.useEffect(() => {
			let e = m;
			return u((t) => s ? t.has(s) ? t.set(s, {
				...e,
				element: s
			}).toSorted(Vn) : (t.set(s, {
				...e,
				element: s
			}), t.toSorted(Vn)) : t), () => {
				u((e) => !s || !e.has(s) ? e : (e.delete(s), new Pn(e)));
			};
		}, [
			s,
			m,
			u
		]), /* @__PURE__ */ (0, q.jsx)(p, {
			"data-radix-collection-item": "",
			ref: l,
			children: r
		});
	});
	m.displayName = f;
	function h() {
		return Y.useState(new Pn());
	}
	jn(h, "useInitCollection");
	function g(t) {
		let { itemMap: n } = a(e + "CollectionConsumer", t);
		return n;
	}
	return jn(g, "useCollection"), [{
		Provider: o,
		Slot: d,
		ItemSlot: m
	}, {
		createCollectionScope: r,
		useCollection: g,
		useInitCollection: h
	}];
}
jn(Rn, "createCollection");
function zn(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
jn(zn, "shallowEqual");
function Bn(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
jn(Bn, "isElementPreceding");
function Vn(e, t) {
	return !e[1].element || !t[1].element ? 0 : Bn(e[1].element, t[1].element) ? -1 : 1;
}
jn(Vn, "sortByDocumentPosition");
function Hn(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
jn(Hn, "getChildListObserver");
//#endregion
//#region node_modules/@radix-ui/react-direction/dist/index.mjs
var Un = Object.defineProperty, Wn = (e, t) => Un(e, "name", {
	value: t,
	configurable: !0
}), Gn = Y.createContext(void 0);
function Kn(e) {
	let t = Y.useContext(Gn);
	return e || t || "ltr";
}
Wn(Kn, "useDirection");
//#endregion
//#region node_modules/@radix-ui/react-primitive/dist/index.mjs
var qn = /* @__PURE__ */ c(Kt(), 1), Jn = Object.defineProperty, Yn = (e, t) => Jn(e, "name", {
	value: t,
	configurable: !0
}), Xn = [
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
].reduce((e, t) => {
	let n = /* @__PURE__ */ vn(`Primitive.${t}`), r = Y.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, q.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function Zn(e, t) {
	e && qn.flushSync(() => e.dispatchEvent(t));
}
Yn(Zn, "dispatchDiscreteCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var Qn = Object.defineProperty, $n = (e, t) => Qn(e, "name", {
	value: t,
	configurable: !0
});
function er(e) {
	let t = Y.useRef(e);
	return Y.useEffect(() => {
		t.current = e;
	}), Y.useMemo(() => ((...e) => t.current?.(...e)), []);
}
$n(er, "useCallbackRef");
//#endregion
//#region node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var tr = Object.defineProperty, nr = (e, t) => tr(e, "name", {
	value: t,
	configurable: !0
}), rr = "dismissableLayer.update", ir = "dismissableLayer.pointerDownOutside", ar = "dismissableLayer.focusOutside", or, sr = Y.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), cr = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ nr(function(e, t) {
	let { disableOutsidePointerEvents: n = !1, deferPointerDownOutside: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = e, u = Y.useContext(sr), [d, f] = Y.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = Y.useState({}), h = Z(t, f), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = _ ? g.indexOf(_) : -1, y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = Y.useRef(!1), C = dr((e) => {
		a?.(e), s?.(e), e.defaultPrevented || c?.();
	}, {
		ownerDocument: p,
		deferPointerDownOutside: r,
		isDeferredPointerDownOutsideRef: S,
		dismissableSurfaces: u.dismissableSurfaces,
		shouldHandlePointerDownOutside: Y.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...u.branches].some((t) => t.contains(e));
			return x && !t;
		}, [u.branches, x])
	}), w = fr((e) => {
		if (r && S.current) return;
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), T = d ? y === g.length - 1 : !1, E = er((e) => {
		e.key === "Escape" && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	});
	return Y.useEffect(() => {
		if (T) return p.addEventListener("keydown", E, { capture: !0 }), () => p.removeEventListener("keydown", E, { capture: !0 });
	}, [
		p,
		T,
		E
	]), Y.useEffect(() => {
		if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (or = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), pr(), () => {
			n && (u.layersWithOutsidePointerEventsDisabled.delete(d), u.layersWithOutsidePointerEventsDisabled.size === 0 && (p.body.style.pointerEvents = or));
		};
	}, [
		d,
		p,
		n,
		u
	]), Y.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), pr());
	}, [d, u]), Y.useEffect(() => {
		let e = /* @__PURE__ */ nr(() => m({}), "handleUpdate");
		return document.addEventListener(rr, e), () => document.removeEventListener(rr, e);
	}, []), /* @__PURE__ */ (0, q.jsx)(Xn.div, {
		...l,
		ref: h,
		style: {
			pointerEvents: b ? x ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: X(e.onFocusCapture, w.onFocusCapture),
		onBlurCapture: X(e.onBlurCapture, w.onBlurCapture),
		onPointerDownCapture: X(e.onPointerDownCapture, C.onPointerDownCapture)
	});
}, "DismissableLayer"));
function lr() {
	let e = Y.useContext(sr), [t, n] = Y.useState(null);
	return Y.useEffect(() => {
		if (t) return e.dismissableSurfaces.add(t), () => {
			e.dismissableSurfaces.delete(t);
		};
	}, [t, e.dismissableSurfaces]), n;
}
nr(lr, "useDismissableLayerSurface");
var ur = /* @__PURE__ */ nr(() => !0, "IS_TRUE");
function dr(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: o = ur } = t, s = er(e), c = Y.useRef(!1), l = Y.useRef(!1), u = Y.useRef(/* @__PURE__ */ new Map()), d = Y.useRef(() => {});
	return Y.useEffect(() => {
		function e() {
			l.current = !1, i.current = !1, u.current.clear();
		}
		nr(e, "resetOutsideInteraction");
		function t() {
			return Array.from(u.current.values()).some(Boolean);
		}
		nr(t, "isOutsideInteractionIntercepted");
		function f(e) {
			if (!l.current) return;
			let t = e.target;
			t instanceof Node && [...a].some((e) => e.contains(t)) || u.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				l.current && d.current();
			}, 0);
		}
		nr(f, "handleInteractionCapture");
		function p(e) {
			l.current && u.current.set(e.type, !1);
		}
		nr(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ nr((a) => {
			if (a.target && !c.current) {
				let f = function() {
					n.removeEventListener("click", d.current);
					let r = t();
					e(), r || mr(ir, s, p, { discrete: !0 });
				};
				if (nr(f, "handleAndDispatchPointerDownOutsideEvent"), !o(a.target)) {
					n.removeEventListener("click", d.current), e(), c.current = !1;
					return;
				}
				let p = { originalEvent: a };
				l.current = !0, i.current = r && a.button === 0, u.current.clear(), !r || a.button !== 0 ? f() : (n.removeEventListener("click", d.current), d.current = f, n.addEventListener("click", d.current, { once: !0 }));
			} else n.removeEventListener("click", d.current), e();
			c.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) n.addEventListener(e, f, !0), n.addEventListener(e, p);
		let g = window.setTimeout(() => {
			n.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), n.removeEventListener("pointerdown", m), n.removeEventListener("click", d.current);
			for (let e of h) n.removeEventListener(e, f, !0), n.removeEventListener(e, p);
		};
	}, [
		n,
		s,
		r,
		i,
		a,
		o
	]), { onPointerDownCapture: /* @__PURE__ */ nr(() => c.current = !0, "onPointerDownCapture") };
}
nr(dr, "usePointerDownOutside");
function fr(e, t = globalThis?.document) {
	let n = er(e), r = Y.useRef(!1);
	return Y.useEffect(() => {
		let e = /* @__PURE__ */ nr((e) => {
			e.target && !r.current && mr(ar, n, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: /* @__PURE__ */ nr(() => r.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ nr(() => r.current = !1, "onBlurCapture")
	};
}
nr(fr, "useFocusOutside");
function pr() {
	let e = new CustomEvent(rr);
	document.dispatchEvent(e);
}
nr(pr, "dispatchUpdate");
function mr(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? Zn(i, a) : i.dispatchEvent(a);
}
nr(mr, "handleAndDispatchCustomEvent");
//#endregion
//#region node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var hr = Object.defineProperty, gr = (e, t) => hr(e, "name", {
	value: t,
	configurable: !0
}), _r = 0, vr = null;
function yr(e) {
	return br(), e.children;
}
gr(yr, "FocusGuards");
function br() {
	Y.useEffect(() => {
		vr ||= {
			start: xr(),
			end: xr()
		};
		let { start: e, end: t } = vr;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), _r++, () => {
			_r === 1 && (vr?.start.remove(), vr?.end.remove(), vr = null), _r = Math.max(0, _r - 1);
		};
	}, []);
}
gr(br, "useFocusGuards");
function xr() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
gr(xr, "createFocusGuard");
//#endregion
//#region node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Sr = Object.defineProperty, Q = (e, t) => Sr(e, "name", {
	value: t,
	configurable: !0
}), Cr = "focusScope.autoFocusOnMount", wr = "focusScope.autoFocusOnUnmount", Tr = {
	bubbles: !1,
	cancelable: !0
}, Er = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ Q(function(e, t) {
	let { loop: n = !1, trapped: r = !1, branches: i, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = e, [c, l] = Y.useState(null), u = er(a), d = er(o), f = Y.useRef(null), p = Z(t, l), m = Y.useRef(i);
	Y.useEffect(() => {
		m.current = i;
	});
	let h = Y.useCallback((e) => e ? c?.contains(e) ? !0 : !!m.current?.some((t) => t.contains(e)) : !1, [c]), g = Y.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	Y.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (g.paused || !c) return;
				let t = e.target;
				h(t) ? f.current = t : Ir(f.current, { select: !0 });
			}, t = function(e) {
				if (g.paused || !c) return;
				let t = e.relatedTarget;
				t !== null && (h(t) || Ir(f.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Ir(c);
			};
			Q(e, "handleFocusIn"), Q(t, "handleFocusOut"), Q(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return c && r.observe(c, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		c,
		g.paused,
		h
	]), Y.useEffect(() => {
		if (c) {
			Lr.add(g);
			let e = document.activeElement;
			if (!c.contains(e)) {
				let t = new CustomEvent(Cr, Tr);
				c.addEventListener(Cr, u), c.dispatchEvent(t), t.defaultPrevented || (Ar(Br(Mr(c)), { select: !0 }), document.activeElement === e && Ir(c));
			}
			return () => {
				c.removeEventListener(Cr, u), setTimeout(() => {
					let t = new CustomEvent(wr, Tr);
					c.addEventListener(wr, d), c.dispatchEvent(t), t.defaultPrevented || Ir(e ?? document.body, { select: !0 }), c.removeEventListener(wr, d), Lr.remove(g);
				}, 0);
			};
		}
	}, [
		c,
		u,
		d,
		g
	]);
	let _ = Y.useCallback((e) => {
		if (!n && !r || g.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = jr(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && Ir(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && Ir(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		g.paused
	]);
	return /* @__PURE__ */ (0, q.jsx)(Xn.div, {
		tabIndex: -1,
		...s,
		ref: p,
		onKeyDown: _
	});
}, "FocusScope")), Dr = Y.createContext(null);
Dr.Provider;
function Or() {
	let [e, t] = Y.useState([]);
	return {
		nodes: e,
		registry: Y.useMemo(() => ({
			add: /* @__PURE__ */ Q((e) => t((t) => t.includes(e) ? t : [...t, e]), "add"),
			remove: /* @__PURE__ */ Q((e) => t((t) => t.filter((t) => t !== e)), "remove")
		}), [])
	};
}
Q(Or, "useFocusScopeBranchRegistry");
function kr(e) {
	let t = Y.useContext(Dr);
	Y.useEffect(() => {
		if (!(!e || !t)) return t.add(e), () => t.remove(e);
	}, [e, t]);
}
Q(kr, "useFocusScopeBranch");
function Ar(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Ir(r, { select: t }), document.activeElement !== n) return;
}
Q(Ar, "focusFirst");
function jr(e) {
	let t = Mr(e);
	return [Nr(t, e), Nr(t.reverse(), e)];
}
Q(jr, "getTabbableEdges");
function Mr(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ Q((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
Q(Mr, "getTabbableCandidates");
function Nr(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Pr(r, { upTo: t }))) return r;
}
Q(Nr, "findVisible");
function Pr(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
Q(Pr, "isHidden");
function Fr(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
Q(Fr, "isSelectableInput");
function Ir(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Fr(e) && t && e.select();
	}
}
Q(Ir, "focus");
var Lr = Rr();
function Rr() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = zr(e, t), e.unshift(t);
		},
		remove(t) {
			e = zr(e, t), e[0]?.resume();
		}
	};
}
Q(Rr, "createFocusScopesStack");
function zr(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
Q(zr, "arrayRemove");
function Br(e) {
	return e.filter((e) => e.tagName !== "A");
}
Q(Br, "removeLinks");
//#endregion
//#region node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var Vr = globalThis?.document ? Y.useLayoutEffect : () => {}, Hr = Object.defineProperty, Ur = (e, t) => Hr(e, "name", {
	value: t,
	configurable: !0
}), Wr = Y.useId || (() => void 0), Gr = 0;
function Kr(e) {
	let [t, n] = Y.useState(Wr());
	return Vr(() => {
		e || n((e) => e ?? String(Gr++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
Ur(Kr, "useId");
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var qr = [
	"top",
	"right",
	"bottom",
	"left"
], Jr = Math.min, Yr = Math.max, Xr = Math.round, Zr = Math.floor, Qr = (e) => ({
	x: e,
	y: e
}), $r = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function ei(e, t, n) {
	return Yr(e, Jr(t, n));
}
function ti(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function ni(e) {
	return e.split("-")[0];
}
function ri(e) {
	return e.split("-")[1];
}
function ii(e) {
	return e === "x" ? "y" : "x";
}
function ai(e) {
	return e === "y" ? "height" : "width";
}
function oi(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function si(e) {
	return ii(oi(e));
}
function ci(e, t, n) {
	n === void 0 && (n = !1);
	let r = ri(e), i = si(e), a = ai(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = _i(o)), [o, _i(o)];
}
function li(e) {
	let t = _i(e);
	return [
		ui(e),
		t,
		ui(t)
	];
}
function ui(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var di = ["left", "right"], fi = ["right", "left"], pi = ["top", "bottom"], mi = ["bottom", "top"];
function hi(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? fi : di : t ? di : fi;
		case "left":
		case "right": return t ? pi : mi;
		default: return [];
	}
}
function gi(e, t, n, r) {
	let i = ri(e), a = hi(ni(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(ui)))), a;
}
function _i(e) {
	let t = ni(e);
	return $r[t] + e.slice(t.length);
}
function vi(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function yi(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : vi(e);
}
function bi(e) {
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
function xi(e, t, n) {
	let { reference: r, floating: i } = e, a = oi(t), o = si(t), s = ai(o), c = ni(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	let m = ri(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function Si(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ti(t, e), p = yi(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = bi(await i.getClippingRect({
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
	}, y = bi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Ci = 50, wi = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Si
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = xi(l, r, c), f = r, p = 0, m = {};
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
		}, x && p < Ci && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = xi(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Ti = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = ti(e, t) || {};
		if (l == null) return {};
		let d = yi(u), f = {
			x: n,
			y: r
		}, p = si(i), m = ai(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Jr(d[_], T), D = Jr(d[v], T), O = C - h[m] - D, k = C / 2 - h[m] / 2 + w, A = ei(E, k, O), j = !c.arrow && ri(i) != null && k !== A && a.reference[m] / 2 - (k < E ? E : D) - h[m] / 2 < 0, M = j ? k < E ? k - E : k - O : 0;
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
}), Ei = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = ti(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = ni(r), _ = oi(o), v = ni(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [_i(o)] : li(o)), x = p !== "none";
			!d && x && b.push(...gi(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = ci(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== oi(t)) || T.every((e) => oi(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = oi(e.placement);
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
function Di(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Oi(e) {
	return qr.some((t) => e[t] >= 0);
}
var ki = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = ti(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Di(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Oi(e)
					} };
				}
				case "escaped": {
					let e = Di(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Oi(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Ai = /*#__PURE__*/ new Set(["left", "top"]);
async function ji(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = ni(n), s = ri(n), c = oi(n) === "y", l = Ai.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = ti(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Mi = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await ji(t, e);
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
}, Ni = function(e) {
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
			} }, ...l } = ti(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = oi(i), p = ii(f), m = u[p], h = u[f], g = (e, t) => ei(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
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
}, Pi = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = ti(e, t), u = {
				x: n,
				y: r
			}, d = oi(i), f = ii(d), p = u[f], m = u[d], h = ti(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = Ai.has(ni(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Fi = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = ti(e, t), c = await i.detectOverflow(t, s), l = ni(n), u = ri(n), d = oi(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = Jr(p - c[m], g), y = Jr(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * Yr(c.left, c.right) : S = p - 2 * Yr(c.top, c.bottom)), await o({
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
function Ii() {
	return typeof window < "u";
}
function Li(e) {
	return Bi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ri(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zi(e) {
	return ((Bi(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Bi(e) {
	return Ii() ? e instanceof Node || e instanceof Ri(e).Node : !1;
}
function Vi(e) {
	return Ii() ? e instanceof Element || e instanceof Ri(e).Element : !1;
}
function Hi(e) {
	return Ii() ? e instanceof HTMLElement || e instanceof Ri(e).HTMLElement : !1;
}
function Ui(e) {
	return !Ii() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ri(e).ShadowRoot;
}
function Wi(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = ta(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Gi(e) {
	return /^(table|td|th)$/.test(Li(e));
}
function Ki(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var qi = /transform|translate|scale|rotate|perspective|filter/, Ji = /paint|layout|strict|content/, Yi = (e) => !!e && e !== "none", Xi;
function Zi(e) {
	let t = Vi(e) ? ta(e) : e;
	return Yi(t.transform) || Yi(t.translate) || Yi(t.scale) || Yi(t.rotate) || Yi(t.perspective) || !$i() && (Yi(t.backdropFilter) || Yi(t.filter)) || qi.test(t.willChange || "") || Ji.test(t.contain || "");
}
function Qi(e) {
	let t = ra(e);
	for (; Hi(t) && !ea(t);) {
		if (Zi(t)) return t;
		if (Ki(t)) return null;
		t = ra(t);
	}
	return null;
}
function $i() {
	return Xi ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Xi;
}
function ea(e) {
	return /^(html|body|#document)$/.test(Li(e));
}
function ta(e) {
	return Ri(e).getComputedStyle(e);
}
function na(e) {
	return Vi(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function ra(e) {
	if (Li(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Ui(e) && e.host || zi(e);
	return Ui(t) ? t.host : t;
}
function ia(e) {
	let t = ra(e);
	return ea(t) ? (e.ownerDocument || e).body : Hi(t) && Wi(t) ? t : ia(t);
}
function aa(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = ia(e), i = r === e.ownerDocument?.body, a = Ri(r);
	if (i) {
		let e = oa(a);
		return t.concat(a, a.visualViewport || [], Wi(r) ? r : [], e && n ? aa(e) : []);
	} else return t.concat(r, aa(r, [], n));
}
function oa(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function sa(e) {
	let t = ta(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Hi(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Xr(n) !== a || Xr(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function ca(e) {
	return Vi(e) ? e : e.contextElement;
}
function la(e) {
	let t = ca(e);
	if (!Hi(t)) return Qr(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = sa(t), o = (a ? Xr(n.width) : n.width) / r, s = (a ? Xr(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ua = /*#__PURE__*/ Qr(0);
function da(e) {
	let t = Ri(e);
	return !$i() || !t.visualViewport ? ua : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function fa(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === Ri(e);
}
function pa(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = ca(e), o = Qr(1);
	t && (r ? Vi(r) && (o = la(r)) : o = la(e));
	let s = fa(a, n, r) ? da(a) : Qr(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = Ri(a), t = Vi(r) ? Ri(r) : r, n = e, i = oa(n);
		for (; i && t !== n;) {
			let e = la(i), t = i.getBoundingClientRect(), r = ta(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Ri(i), i = oa(n);
		}
	}
	return bi({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function ma(e, t) {
	let n = na(e).scrollLeft;
	return t ? t.left + n : pa(zi(e)).left + n;
}
function ha(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - ma(e, n),
		y: n.top + t.scrollTop
	};
}
function ga(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = zi(r), s = t ? Ki(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = Qr(1), u = Qr(0), d = Hi(r);
	if ((d || !a) && ((Li(r) !== "body" || Wi(o)) && (c = na(r)), d)) {
		let e = pa(r);
		l = la(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? ha(o, c) : Qr(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function _a(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function va(e) {
	let t = na(e), n = e.ownerDocument.body, r = Yr(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Yr(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + ma(e), o = -t.scrollTop;
	return ta(n).direction === "rtl" && (a += Yr(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var ya = 25;
function ba(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = Ri(e), a = zi(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !$i() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (ma(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= ya && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function xa(e, t) {
	let n = pa(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = la(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Sa(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = ba(e, n, t);
	else if (t === "document") r = va(zi(e));
	else if (Vi(t)) r = xa(t, n);
	else {
		let n = da(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return bi(r);
}
function Ca(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = aa(e, [], !1).filter((e) => Vi(e) && Li(e) !== "body"), i = null, a = ta(e).position === "fixed", o = a ? ra(e) : e;
	for (; Vi(o) && !ea(o);) {
		let e = ta(o), t = Zi(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = ra(o);
	}
	return t.set(e, r), r;
}
function wa(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Ki(t) ? [] : Ca(t, this._c) : [].concat(n), r], o = Sa(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Sa(t, a[e], i);
		s = Yr(n.top, s), c = Jr(n.right, c), l = Jr(n.bottom, l), u = Yr(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Ta(e) {
	let { width: t, height: n } = sa(e);
	return {
		width: t,
		height: n
	};
}
function Ea(e, t, n) {
	let r = Hi(t), i = zi(t), a = n === "fixed", o = pa(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = Qr(0);
	if ((r || !a) && ((Li(t) !== "body" || Wi(i)) && (s = na(t)), r)) {
		let e = pa(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = ma(i));
	let l = i && !r && !a ? ha(i, s) : Qr(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function Da(e) {
	return ta(e).position === "static";
}
function Oa(e, t) {
	if (!Hi(e) || ta(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return zi(e) === n && (n = n.ownerDocument.body), n;
}
function ka(e, t) {
	let n = Ri(e);
	if (Ki(e)) return n;
	if (!Hi(e)) {
		let t = ra(e);
		for (; t && !ea(t);) {
			if (Vi(t) && !Da(t)) return t;
			t = ra(t);
		}
		return n;
	}
	let r = Oa(e, t);
	for (; r && Gi(r) && Da(r);) r = Oa(r, t);
	return r && ea(r) && Da(r) && !Zi(r) ? n : r || Qi(e) || n;
}
var Aa = async function(e) {
	let t = this.getOffsetParent || ka, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: Ea(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function ja(e) {
	return ta(e).direction === "rtl";
}
var Ma = {
	convertOffsetParentRelativeRectToViewportRelativeRect: ga,
	getDocumentElement: zi,
	getClippingRect: wa,
	getOffsetParent: ka,
	getElementRects: Aa,
	getClientRects: _a,
	getDimensions: Ta,
	getScale: la,
	isElement: Vi,
	isRTL: ja
};
function Na(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Pa(e, t, n) {
	let r = null, i, a = zi(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Zr(d), h = Zr(a.clientWidth - (u + f)), g = Zr(a.clientHeight - (d + p)), _ = Zr(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Yr(0, Jr(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Na(l, e.getBoundingClientRect())) return s();
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
	let c = Ri(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function Fa(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = ca(e), u = i || a ? [...l ? aa(l) : [], ...t ? aa(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Pa(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? pa(e) : null;
	c && g();
	function g() {
		let t = pa(e);
		h && !Na(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Ia = Mi, La = Ni, Ra = Ei, za = Fi, Ba = ki, Va = Ti, Ha = Pi, Ua = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Ma,
		...i.platform,
		_c: r
	};
	return wi(e, t, {
		...i,
		platform: a
	});
}, Wa = typeof document < "u" ? Y.useLayoutEffect : function() {};
function Ga(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Ga(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Ga(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Ka(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qa(e, t) {
	let n = Ka(e);
	return Math.round(t * n) / n;
}
function Ja(e) {
	let t = Y.useRef(e);
	return Wa(() => {
		t.current = e;
	}), t;
}
function Ya(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = Y.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = Y.useState(r);
	Ga(f, r) || p(r);
	let [m, h] = Y.useState(null), [g, _] = Y.useState(null), v = Y.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = Y.useCallback((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = Y.useRef(null), C = Y.useRef(null), w = Y.useRef(u), T = c != null, E = Ja(c), D = Ja(i), O = Ja(l), k = Y.useCallback(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		D.current && (e.platform = D.current), Ua(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: O.current !== !1
			};
			A.current && !Ga(w.current, t) && (w.current = t, qn.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		D,
		O
	]);
	Wa(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let A = Y.useRef(!1);
	Wa(() => (A.current = !0, () => {
		A.current = !1;
	}), []), Wa(() => {
		if (b && (S.current = b), x && (C.current = x), b && x) {
			if (E.current) return E.current(b, x, k);
			k();
		}
	}, [
		b,
		x,
		k,
		E,
		T
	]);
	let j = Y.useMemo(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), M = Y.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), N = Y.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!M.floating) return e;
		let t = qa(M.floating, u.x), r = qa(M.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...Ka(M.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		M.floating,
		u.x,
		u.y
	]);
	return Y.useMemo(() => ({
		...u,
		update: k,
		refs: j,
		elements: M,
		floatingStyles: N
	}), [
		u,
		k,
		j,
		M,
		N
	]);
}
var Xa = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Va({
				element: r.current,
				padding: i
			}).fn(n) : r ? Va({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Za = (e, t) => {
	let n = Ia(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Qa = (e, t) => {
	let n = La(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, $a = (e, t) => ({
	fn: Ha(e).fn,
	options: [e, t]
}), eo = (e, t) => {
	let n = Ra(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, to = (e, t) => {
	let n = za(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, no = (e, t) => {
	let n = Ba(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, ro = (e, t) => {
	let n = Xa(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, io = Object.defineProperty, ao = (e, t) => io(e, "name", {
	value: t,
	configurable: !0
});
function oo(e) {
	let [t, n] = Y.useState(void 0);
	return Vr(() => {
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
		} else n(void 0);
	}, [e]), t;
}
ao(oo, "useSize");
//#endregion
//#region node_modules/@radix-ui/react-popper/dist/index.mjs
var so = Object.defineProperty, co = (e, t) => so(e, "name", {
	value: t,
	configurable: !0
}), lo = {
	Partial: "partial",
	Always: "always"
}, uo = {
	Optimized: "optimized",
	Always: "always"
}, fo = "Popper", [po, mo] = /* @__PURE__ */ sn(fo), [ho, go] = po(fo), _o = /* @__PURE__ */ co((e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = Y.useState(null), [a, o] = Y.useState(void 0);
	return /* @__PURE__ */ (0, q.jsx)(ho, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		placementState: a,
		setPlacementState: o,
		children: n
	});
}, "Popper"), vo = "PopperAnchor", yo = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ co(function(e, t) {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = go(vo, n), o = Y.useRef(null), s = a.onAnchorChange, c = Z(t, Y.useCallback((e) => {
		o.current = e, e && s(e);
	}, [s])), l = Y.useRef(null);
	Y.useEffect(() => {
		if (!r) return;
		let e = l.current;
		l.current = r.current, e !== l.current && s(l.current);
	});
	let u = a.placementState && Eo(a.placementState), d = u?.[0], f = u?.[1];
	return r ? null : /* @__PURE__ */ (0, q.jsx)(Xn.div, {
		"data-radix-popper-side": d,
		"data-radix-popper-align": f,
		...i,
		ref: c
	});
}, "PopperAnchor")), bo = "PopperContent", [xo, So] = po(bo), Co = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ co(function(e, t) {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: d = lo.Partial, hideWhenDetached: f = !1, updatePositionStrategy: p = uo.Optimized, onPlaced: m, ...h } = e, g = go(bo, n), [_, v] = Y.useState(null), y = Z(t, v), [b, x] = Y.useState(null), S = oo(b), C = S?.width ?? 0, w = S?.height ?? 0, T = r + (a === "center" ? "" : "-" + a), E = typeof u == "number" ? u : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...u
	}, D = Array.isArray(l) ? l : [l], O = D.length > 0, k = {
		padding: E,
		boundary: D.filter(wo),
		altBoundary: O
	}, { refs: A, floatingStyles: j, placement: M, isPositioned: N, middlewareData: P } = Ya({
		strategy: "fixed",
		placement: T,
		whileElementsMounted: /* @__PURE__ */ co((...e) => Fa(...e, { animationFrame: p === uo.Always }), "whileElementsMounted"),
		elements: { reference: g.anchor },
		middleware: [
			Za({
				mainAxis: i + w,
				alignmentAxis: o
			}),
			c && Qa({
				mainAxis: !0,
				crossAxis: !1,
				limiter: d === lo.Partial ? $a() : void 0,
				...k
			}),
			c && eo({ ...k }),
			to({
				...k,
				apply: /* @__PURE__ */ co(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			b && ro({
				element: b,
				padding: s
			}),
			To({
				arrowWidth: C,
				arrowHeight: w
			}),
			f && no({
				strategy: "referenceHidden",
				...k,
				boundary: O ? k.boundary : void 0
			})
		]
	}), F = g.setPlacementState;
	Vr(() => (F(M), () => {
		F(void 0);
	}), [M, F]);
	let [I, ee] = Eo(M), te = er(m);
	Vr(() => {
		N && te?.();
	}, [N, te]);
	let ne = P.arrow?.x, re = P.arrow?.y, L = P.arrow?.centerOffset !== 0, [R, ie] = Y.useState();
	return Vr(() => {
		_ && ie(window.getComputedStyle(_).zIndex);
	}, [_]), /* @__PURE__ */ (0, q.jsx)("div", {
		ref: A.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...j,
			transform: N ? j.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: R,
			"--radix-popper-transform-origin": [P.transformOrigin?.x, P.transformOrigin?.y].join(" "),
			...P.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ (0, q.jsx)(xo, {
			scope: n,
			placedSide: I,
			placedAlign: ee,
			onArrowChange: x,
			arrowX: ne,
			arrowY: re,
			shouldHideArrow: L,
			children: /* @__PURE__ */ (0, q.jsx)(Xn.div, {
				"data-side": I,
				"data-align": ee,
				...h,
				ref: y,
				style: {
					...h.style,
					animation: N ? h.style?.animation : "none"
				}
			})
		})
	});
}, "PopperContent"));
function wo(e) {
	return e !== null;
}
co(wo, "isNotNull");
var To = /* @__PURE__ */ co((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Eo(n), u = {
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
function Eo(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
co(Eo, "getSideAndAlignFromPlacement");
//#endregion
//#region node_modules/@radix-ui/react-portal/dist/index.mjs
var Do = Object.defineProperty, Oo = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ ((e, t) => Do(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	let { container: n, ...r } = e, [i, a] = Y.useState(!1);
	Vr(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? qn.createPortal(/* @__PURE__ */ (0, q.jsx)(Xn.div, {
		...r,
		ref: t
	}), o) : null;
}, "Portal")), ko = Object.defineProperty, Ao = (e, t) => ko(e, "name", {
	value: t,
	configurable: !0
});
function jo(e, t) {
	return Y.useReducer((e, n) => t[e][n] ?? e, e);
}
Ao(jo, "useStateMachine");
var Mo = /* @__PURE__ */ Ao((e) => {
	let { present: t, children: n } = e, r = No(t), i = typeof n == "function" ? n({ present: r.isPresent }) : Y.Children.only(n), a = Fo(r.ref, Lo(i));
	return typeof n == "function" || r.isPresent ? Y.cloneElement(i, { ref: a }) : null;
}, "Presence");
function No(e) {
	let [t, n] = Y.useState(), r = Y.useRef(null), i = Y.useRef(e), a = Y.useRef("none"), o = Y.useRef(void 0), [s, c] = jo(e ? "mounted" : "unmounted", {
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
	return Y.useEffect(() => {
		s === "mounted" ? (a.current = o.current ?? Io(r.current), o.current = void 0) : a.current = "none";
	}, [s]), Vr(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, s = Io(t);
			e ? (o.current = s, c("MOUNT")) : s === "none" || t?.display === "none" ? c("UNMOUNT") : c(n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, c]), Vr(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = /* @__PURE__ */ Ao((a) => {
				let o = Io(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (c("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ Ao((e) => {
				e.target === t && (a.current = Io(r.current));
			}, "handleAnimationStart");
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		} else c("ANIMATION_END");
	}, [t, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: Y.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				r.current = t, o.current = Io(t);
			} else r.current = null;
			n(e);
		}, [])
	};
}
Ao(No, "usePresence");
function Po(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Ao(Po, "setRef");
function Fo(...e) {
	let t = Y.useRef(e);
	return t.current = e, Y.useCallback((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = Po(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "function" ? t() : Po(n[e], null);
			}
		};
	}, []);
}
Ao(Fo, "useStableComposedRefs");
function Io(e) {
	return e?.animationName || "none";
}
Ao(Io, "getAnimationName");
function Lo(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Ao(Lo, "getElementRef");
//#endregion
//#region node_modules/@radix-ui/react-use-effect-event/dist/index.mjs
var Ro = Object.defineProperty, zo = (e, t) => Ro(e, "name", {
	value: t,
	configurable: !0
}), Bo = Y.useEffectEvent, Vo = Y.useInsertionEffect;
function Ho(e) {
	if (typeof Bo == "function") return Bo(e);
	let t = Y.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof Vo == "function" ? Vo(() => {
		t.current = e;
	}) : Vr(() => {
		t.current = e;
	}), Y.useMemo(() => ((...e) => t.current?.(...e)), []);
}
zo(Ho, "useEffectEvent");
//#endregion
//#region node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Uo = Object.defineProperty, Wo = (e, t) => Uo(e, "name", {
	value: t,
	configurable: !0
}), Go = Y.useInsertionEffect || Vr;
function Ko({ prop: e, defaultProp: t, onChange: n = /* @__PURE__ */ Wo(() => {}, "onChange"), caller: r }) {
	let [i, a, o] = qo({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0;
	return [s ? e : i, Y.useCallback((t) => {
		if (s) {
			let n = Jo(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
Wo(Ko, "useControllableState");
function qo({ defaultProp: e, onChange: t }) {
	let [n, r] = Y.useState(e), i = Y.useRef(n), a = Y.useRef(t);
	return Go(() => {
		a.current = t;
	}, [t]), Y.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
Wo(qo, "useUncontrolledState");
function Jo(e) {
	return typeof e == "function";
}
Wo(Jo, "isFunction");
var Yo = Symbol("RADIX:SYNC_STATE");
function Xo(e, t, n, r) {
	let { prop: i, defaultProp: a, onChange: o, caller: s } = t, c = i !== void 0, l = Ho(o), u = [{
		...n,
		state: a
	}];
	r && u.push(r);
	let [d, f] = Y.useReducer((t, n) => {
		if (n.type === Yo) return {
			...t,
			state: n.state
		};
		let r = e(t, n);
		return c && !Object.is(r.state, t.state) && l(r.state), r;
	}, ...u), p = d.state, m = Y.useRef(p);
	Y.useEffect(() => {
		m.current !== p && (m.current = p, c || l(p));
	}, [
		p,
		m,
		c
	]);
	let h = Y.useMemo(() => i === void 0 ? d : {
		...d,
		state: i
	}, [d, i]);
	return Y.useEffect(() => {
		c && !Object.is(i, d.state) && f({
			type: Yo,
			state: i
		});
	}, [
		i,
		d.state,
		c
	]), [h, f];
}
Wo(Xo, "useControllableStateReducer");
//#endregion
//#region node_modules/@radix-ui/react-use-previous/dist/index.mjs
var Zo = Object.defineProperty, Qo = (e, t) => Zo(e, "name", {
	value: t,
	configurable: !0
});
function $o(e) {
	let t = Y.useRef({
		value: e,
		previous: e
	});
	return Y.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
Qo($o, "usePrevious");
//#endregion
//#region node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var es = Object.freeze({
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
}), ts = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, ns = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), is = {}, as = 0, os = function(e) {
	return e && (e.host || os(e.parentNode));
}, ss = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = os(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, cs = function(e, t, n, r) {
	var i = ss(t, Array.isArray(e) ? e : [e]);
	is[n] || (is[n] = /* @__PURE__ */ new WeakMap());
	var a = is[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (ns.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				ns.set(e, c), a.set(e, l), o.push(e), c === 1 && i && rs.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), as++, function() {
		o.forEach(function(e) {
			var t = ns.get(e) - 1, i = a.get(e) - 1;
			ns.set(e, t), a.set(e, i), t || (rs.has(e) || e.removeAttribute(r), rs.delete(e)), i || e.removeAttribute(n);
		}), as--, as || (ns = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), is = {});
	};
}, ls = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || ts(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), cs(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, us = function() {
	return us = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, us.apply(this, arguments);
};
function ds(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function fs(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var ps = "right-scroll-bar-position", ms = "width-before-scroll-bar", hs = "with-scroll-bars-hidden", gs = "--removed-body-scroll-bar-size";
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/assignRef.js
function _s(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region node_modules/use-callback-ref/dist/es2015/useRef.js
function vs(e, t) {
	var n = (0, Y.useState)(function() {
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
var ys = typeof window < "u" ? Y.useLayoutEffect : Y.useEffect, bs = /* @__PURE__ */ new WeakMap();
function xs(e, t) {
	var n = vs(t || null, function(t) {
		return e.forEach(function(e) {
			return _s(e, t);
		});
	});
	return ys(function() {
		var t = bs.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || _s(e, null);
			}), i.forEach(function(e) {
				r.has(e) || _s(e, a);
			});
		}
		bs.set(n, e);
	}, [e]), n;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/medium.js
function Ss(e) {
	return e;
}
function Cs(e, t) {
	t === void 0 && (t = Ss);
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
function ws(e) {
	e === void 0 && (e = {});
	var t = Cs(null);
	return t.options = us({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region node_modules/use-sidecar/dist/es2015/exports.js
var Ts = function(e) {
	var t = e.sideCar, n = ds(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return Y.createElement(r, us({}, n));
};
Ts.isSideCarExport = !0;
function Es(e, t) {
	return e.useMedium(t), Ts;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/medium.js
var Ds = ws(), Os = function() {}, ks = Y.forwardRef(function(e, t) {
	var n = Y.useRef(null), r = Y.useState({
		onScrollCapture: Os,
		onWheelCapture: Os,
		onTouchMoveCapture: Os
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = ds(e, [
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
	]), x = f, S = xs([n, t]), C = us(us({}, b), i);
	return Y.createElement(Y.Fragment, null, u && Y.createElement(x, {
		sideCar: Ds,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? Y.cloneElement(Y.Children.only(s), us(us({}, C), { ref: S })) : Y.createElement(v, us({}, C, {
		className: c,
		ref: S
	}), s));
});
ks.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, ks.classNames = {
	fullWidth: ms,
	zeroRight: ps
};
//#endregion
//#region node_modules/get-nonce/dist/es2015/index.js
var As, js = function() {
	if (As) return As;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region node_modules/react-style-singleton/dist/es2015/singleton.js
function Ms() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = js();
	return t && e.setAttribute("nonce", t), e;
}
function Ns(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ps(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Fs = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Ms()) && (Ns(t, n), Ps(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Is = function() {
	var e = Fs();
	return function(t, n) {
		Y.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Ls = function() {
	var e = Is();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Rs = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, zs = function(e) {
	return parseInt(e || "", 10) || 0;
}, Bs = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		zs(n),
		zs(r),
		zs(i)
	];
}, Vs = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Rs;
	var t = Bs(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Hs = Ls(), Us = "data-scroll-locked", Ws = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${hs} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Us}] {
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
  
  .${ps} {
    right: ${s}px ${r};
  }
  
  .${ms} {
    margin-right: ${s}px ${r};
  }
  
  .${ps} .${ps} {
    right: 0 ${r};
  }
  
  .${ms} .${ms} {
    margin-right: 0 ${r};
  }
  
  body[${Us}] {
    ${gs}: ${s}px;
  }
`;
}, Gs = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Ks = function() {
	Y.useEffect(function() {
		return document.body.setAttribute(Us, (Gs() + 1).toString()), function() {
			var e = Gs() - 1;
			e <= 0 ? document.body.removeAttribute(Us) : document.body.setAttribute(Us, e.toString());
		};
	}, []);
}, qs = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Ks();
	var a = Y.useMemo(function() {
		return Vs(i);
	}, [i]);
	return Y.createElement(Hs, { styles: Ws(a, !t, i, n ? "" : "!important") });
}, Js = !1;
if (typeof window < "u") try {
	var Ys = Object.defineProperty({}, "passive", { get: function() {
		return Js = !0, !0;
	} });
	window.addEventListener("test", Ys, Ys), window.removeEventListener("test", Ys, Ys);
} catch {
	Js = !1;
}
var Xs = Js ? { passive: !1 } : !1, Zs = function(e) {
	return e.tagName === "TEXTAREA";
}, Qs = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Zs(e) && n[t] === "visible");
}, $s = function(e) {
	return Qs(e, "overflowY");
}, ec = function(e) {
	return Qs(e, "overflowX");
}, tc = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), ic(e, r)) {
			var i = ac(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, nc = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, rc = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, ic = function(e, t) {
	return e === "v" ? $s(t) : ec(t);
}, ac = function(e, t) {
	return e === "v" ? nc(t) : rc(t);
}, oc = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, sc = function(e, t, n, r, i) {
	var a = oc(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = ac(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && ic(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, cc = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, lc = function(e) {
	return [e.deltaX, e.deltaY];
}, uc = function(e) {
	return e && "current" in e ? e.current : e;
}, dc = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, fc = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, pc = 0, mc = [];
function hc(e) {
	var t = Y.useRef([]), n = Y.useRef([0, 0]), r = Y.useRef(), i = Y.useState(pc++)[0], a = Y.useState(Ls)[0], o = Y.useRef(e);
	Y.useEffect(function() {
		o.current = e;
	}, [e]), Y.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = fs([e.lockRef.current], (e.shards || []).map(uc), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = Y.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = cc(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = tc(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = tc(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return sc(h, t, e, h === "h" ? s : c, !0);
	}, []), c = Y.useCallback(function(e) {
		var n = e;
		if (!(!mc.length || mc[mc.length - 1] !== a)) {
			var r = "deltaY" in n ? lc(n) : cc(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && dc(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(uc).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = Y.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: gc(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = Y.useCallback(function(e) {
		n.current = cc(e), r.current = void 0;
	}, []), d = Y.useCallback(function(t) {
		l(t.type, lc(t), t.target, s(t, e.lockRef.current));
	}, []), f = Y.useCallback(function(t) {
		l(t.type, cc(t), t.target, s(t, e.lockRef.current));
	}, []);
	Y.useEffect(function() {
		return mc.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, Xs), document.addEventListener("touchmove", c, Xs), document.addEventListener("touchstart", u, Xs), function() {
			mc = mc.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, Xs), document.removeEventListener("touchmove", c, Xs), document.removeEventListener("touchstart", u, Xs);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return Y.createElement(Y.Fragment, null, m ? Y.createElement(a, { styles: fc(i) }) : null, p ? Y.createElement(qs, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function gc(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region node_modules/react-remove-scroll/dist/es2015/sidecar.js
var _c = Es(Ds, hc), vc = Y.forwardRef(function(e, t) {
	return Y.createElement(ks, us({}, e, {
		ref: t,
		sideCar: _c
	}));
});
vc.classNames = ks.classNames;
//#endregion
//#region node_modules/@radix-ui/react-select/dist/index.mjs
var yc = Object.defineProperty, $ = (e, t) => yc(e, "name", {
	value: t,
	configurable: !0
}), bc = {
	ItemAligned: "item-aligned",
	Popper: "popper"
}, xc = {
	LTR: "ltr",
	RTL: "rtl"
}, Sc = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], Cc = [" ", "Enter"], wc = "Select", [Tc, Ec, Dc] = /* @__PURE__ */ Mn(wc), [Oc, kc] = /* @__PURE__ */ sn(wc, [Dc, mo]), Ac = mo(), [jc, Mc] = Oc(wc), [Nc, Pc] = Oc(wc);
function Fc(e) {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: p, form: m, internal_do_not_use_render: h } = e, g = Ac(t), [_, v] = Y.useState(null), [y, b] = Y.useState(null), [x, S] = Y.useState(!1), C = Kn(l), [w, T] = Ko({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: wc
	}), [E, D] = Ko({
		prop: o,
		defaultProp: s,
		onChange: c,
		caller: wc
	}), O = Y.useRef(null), k = Y.useRef(E);
	Y.useEffect(() => {
		let e = m ? _?.ownerDocument.getElementById(m) : _?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ $(() => D(k.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		m,
		_,
		D
	]);
	let A = !_ || !!m || !!_.closest("form"), [j, M] = Y.useState(/* @__PURE__ */ new Set()), N = Kr(), P = Array.from(j).map((e) => e.props.value).join(";"), F = Y.useCallback((e) => {
		M((t) => new Set(t).add(e));
	}, []), I = Y.useCallback((e) => {
		M((t) => {
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), ee = {
		required: p,
		trigger: _,
		onTriggerChange: v,
		valueNode: y,
		onValueNodeChange: b,
		valueNodeHasChildren: x,
		onValueNodeHasChildrenChange: S,
		contentId: N,
		value: E,
		onValueChange: D,
		open: w,
		onOpenChange: T,
		dir: C,
		triggerPointerDownPosRef: O,
		disabled: f,
		name: u,
		autoComplete: d,
		form: m,
		nativeOptions: j,
		nativeSelectKey: P,
		isFormControl: A
	};
	return /* @__PURE__ */ (0, q.jsx)(_o, {
		...g,
		children: /* @__PURE__ */ (0, q.jsx)(jc, {
			scope: t,
			...ee,
			children: /* @__PURE__ */ (0, q.jsx)(Tc.Provider, {
				scope: t,
				children: /* @__PURE__ */ (0, q.jsx)(Nc, {
					scope: t,
					onNativeOptionAdd: F,
					onNativeOptionRemove: I,
					children: Sl(h) ? h(ee) : n
				})
			})
		})
	});
}
$(Fc, "SelectProvider");
var Ic = /* @__PURE__ */ $((e) => {
	let { __scopeSelect: t, children: n, ...r } = e;
	return /* @__PURE__ */ (0, q.jsx)(Fc, {
		__scopeSelect: t,
		...r,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, q.jsxs)(q.Fragment, { children: [n, e ? /* @__PURE__ */ (0, q.jsx)(xl, { __scopeSelect: t }) : null] })
	});
}, "Select"), Lc = "SelectTrigger", Rc = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, disabled: r = !1, ...i } = e, a = Ac(n), o = Mc(Lc, n), s = o.disabled || r, c = Z(t, o.onTriggerChange), l = Ec(n), u = Y.useRef("touch"), [d, f, p] = wl((e) => {
		let t = l().filter((e) => !e.disabled), n = Tl(t, e, t.find((e) => e.value === o.value));
		n !== void 0 && o.onValueChange(n.value);
	}), m = /* @__PURE__ */ $((e) => {
		s || (o.onOpenChange(!0), p()), e && (o.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	}, "handleOpen");
	return /* @__PURE__ */ (0, q.jsx)(yo, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ (0, q.jsx)(Xn.button, {
			type: "button",
			role: "combobox",
			"aria-controls": o.open ? o.contentId : void 0,
			"aria-expanded": o.open,
			"aria-required": o.required,
			"aria-autocomplete": "none",
			dir: o.dir,
			"data-state": o.open ? "open" : "closed",
			disabled: s,
			"data-disabled": s ? "" : void 0,
			"data-placeholder": Cl(o.value) ? "" : void 0,
			...i,
			ref: c,
			onClick: X(i.onClick, (e) => {
				e.currentTarget.focus(), u.current !== "mouse" && m(e);
			}),
			onPointerDown: X(i.onPointerDown, (e) => {
				u.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (m(e), e.preventDefault());
			}),
			onKeyDown: X(i.onKeyDown, (e) => {
				let t = d.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && f(e.key), !(t && e.key === " ") && Sc.includes(e.key) && (m(), e.preventDefault());
			})
		})
	});
}, "SelectTrigger")), zc = "SelectValue", Bc = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, className: r, style: i, children: a, placeholder: o = "", ...s } = e, c = Mc(zc, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = Z(t, c.onValueNodeChange);
	Vr(() => {
		l(u);
	}, [l, u]);
	let f = Cl(c.value);
	return /* @__PURE__ */ (0, q.jsx)(Xn.span, {
		...s,
		asChild: !f && s.asChild,
		ref: d,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, q.jsx)(Y.Fragment, { children: f ? o : a }, f ? "placeholder" : "value")
	});
}, "SelectValue")), Vc = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ (0, q.jsx)(Xn.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
}, "SelectIcon")), [Hc, Uc] = Oc("SelectPortal", { forceMount: void 0 }), Wc = /* @__PURE__ */ $((e) => {
	let { __scopeSelect: t, forceMount: n, ...r } = e;
	return /* @__PURE__ */ (0, q.jsx)(Hc, {
		scope: e.__scopeSelect,
		forceMount: n,
		children: /* @__PURE__ */ (0, q.jsx)(Oo, {
			asChild: !0,
			...r
		})
	});
}, "SelectPortal"), Gc = "SelectContent", Kc = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let n = Uc(Gc, e.__scopeSelect), { forceMount: r = n.forceMount, ...i } = e, a = Mc(Gc, e.__scopeSelect), [o, s] = Y.useState();
	return Vr(() => {
		s(new DocumentFragment());
	}, []), /* @__PURE__ */ (0, q.jsx)(Mo, {
		present: r || a.open,
		children: ({ present: e }) => e ? /* @__PURE__ */ (0, q.jsx)(Qc, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, q.jsx)(qc, {
			...i,
			fragment: o
		})
	});
}, "SelectContent")), qc = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, children: r, fragment: i } = e;
	return i ? qn.createPortal(/* @__PURE__ */ (0, q.jsx)(Yc, {
		scope: n,
		children: /* @__PURE__ */ (0, q.jsx)(Tc.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, q.jsx)("div", {
				ref: t,
				children: r
			})
		})
	}), i) : null;
}, "SelectContentFragment")), Jc = 10, [Yc, Xc] = Oc(Gc), Zc = /* @__PURE__ */ vn("SelectContent.RemoveScroll"), Qc = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n } = e, { position: r = bc.ItemAligned, onCloseAutoFocus: i, onEscapeKeyDown: a, onPointerDownOutside: o, side: s, sideOffset: c, align: l, alignOffset: u, arrowPadding: d, collisionBoundary: f, collisionPadding: p, sticky: m, hideWhenDetached: h, avoidCollisions: g, ..._ } = e, v = Mc(Gc, n), [y, b] = Y.useState(null), [x, S] = Y.useState(null), C = Z(t, b), [w, T] = Y.useState(null), [E, D] = Y.useState(null), O = Ec(n), [k, A] = Y.useState(!1), j = Y.useRef(!1);
	Y.useEffect(() => {
		if (y) return ls(y);
	}, [y]), br();
	let M = Y.useCallback((e) => {
		let [t, ...n] = O().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && x && (x.scrollTop = 0), n === r && x && (x.scrollTop = x.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [O, x]), N = Y.useCallback(() => M([w, y]), [
		M,
		w,
		y
	]);
	Y.useEffect(() => {
		k && N();
	}, [k, N]);
	let { onOpenChange: P, triggerPointerDownPosRef: F } = v;
	Y.useEffect(() => {
		if (y) {
			let e = {
				x: 0,
				y: 0
			}, t = /* @__PURE__ */ $((t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (F.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (F.current?.y ?? 0))
				};
			}, "handlePointerMove"), n = /* @__PURE__ */ $((n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : n.composedPath().includes(y) || P(!1), document.removeEventListener("pointermove", t), F.current = null;
			}, "handlePointerUp");
			return F.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		y,
		P,
		F
	]), Y.useEffect(() => {
		let e = /* @__PURE__ */ $(() => P(!1), "close");
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [P]);
	let [I, ee] = wl((e) => {
		let t = O().filter((e) => !e.disabled), n = Tl(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current?.focus());
	}), te = Y.useCallback((e, t, n) => {
		let r = !j.current && !n;
		(v.value !== void 0 && v.value === t || r) && (T(e), r && (j.current = !0));
	}, [v.value]), ne = Y.useCallback(() => y?.focus(), [y]), re = Y.useCallback((e, t, n) => {
		let r = !j.current && !n;
		(v.value !== void 0 && v.value === t || r) && D(e);
	}, [v.value]), L = r === bc.Popper ? el : $c, R = L === el ? {
		side: s,
		sideOffset: c,
		align: l,
		alignOffset: u,
		arrowPadding: d,
		collisionBoundary: f,
		collisionPadding: p,
		sticky: m,
		hideWhenDetached: h,
		avoidCollisions: g
	} : {};
	return /* @__PURE__ */ (0, q.jsx)(Yc, {
		scope: n,
		content: y,
		viewport: x,
		onViewportChange: S,
		itemRefCallback: te,
		selectedItem: w,
		onItemLeave: ne,
		itemTextRefCallback: re,
		focusSelectedItem: N,
		selectedItemText: E,
		position: r,
		isPositioned: k,
		searchRef: I,
		children: /* @__PURE__ */ (0, q.jsx)(vc, {
			as: Zc,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ (0, q.jsx)(Er, {
				asChild: !0,
				trapped: v.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: X(i, (e) => {
					v.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ (0, q.jsx)(cr, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: a,
					onPointerDownOutside: o,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => v.onOpenChange(!1),
					children: /* @__PURE__ */ (0, q.jsx)(L, {
						role: "listbox",
						id: v.contentId,
						"data-state": v.open ? "open" : "closed",
						dir: v.dir,
						onContextMenu: (e) => e.preventDefault(),
						..._,
						...R,
						onPlaced: () => A(!0),
						ref: C,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							..._.style
						},
						onKeyDown: X(_.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && ee(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = O().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => M(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
}, "SelectContentImpl")), $c = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, onPlaced: r, ...i } = e, a = Mc(Gc, n), o = Xc(Gc, n), [s, c] = Y.useState(null), [l, u] = Y.useState(null), d = Z(t, u), f = Ec(n), p = Y.useRef(!1), m = Y.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: _, focusSelectedItem: v } = o, y = Y.useCallback(() => {
		if (a.trigger && a.valueNode && s && l && h && g && _) {
			let e = a.trigger.getBoundingClientRect(), t = l.getBoundingClientRect(), n = a.valueNode.getBoundingClientRect(), i = _.getBoundingClientRect();
			if (a.dir !== xc.RTL) {
				let r = i.left - t.left, a = n.left - r, o = e.left - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - Jc, d = Yt(a, [Jc, Math.max(Jc, u - l)]);
				s.style.minWidth = c + "px", s.style.left = d + "px";
			} else {
				let r = t.right - i.right, a = window.innerWidth - n.right - r, o = window.innerWidth - e.right - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - Jc, d = Yt(a, [Jc, Math.max(Jc, u - l)]);
				s.style.minWidth = c + "px", s.style.right = d + "px";
			}
			let o = f(), c = window.innerHeight - Jc * 2, u = h.scrollHeight, d = window.getComputedStyle(l), m = parseInt(d.borderTopWidth, 10), v = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = m + v + u + b + y, S = Math.min(g.offsetHeight * 5, x), C = window.getComputedStyle(h), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - Jc, D = c - E, O = g.offsetHeight / 2, k = g.offsetTop + O, A = m + v + k, j = x - A;
			if (A <= E) {
				let e = o.length > 0 && g === o[o.length - 1].ref.current;
				s.style.bottom = "0px";
				let t = l.clientHeight - h.offsetTop - h.offsetHeight, n = A + Math.max(D, O + (e ? T : 0) + t + y);
				s.style.height = n + "px";
			} else {
				let e = o.length > 0 && g === o[0].ref.current;
				s.style.top = "0px";
				let t = Math.max(E, m + h.offsetTop + (e ? w : 0) + O) + j;
				s.style.height = t + "px", h.scrollTop = A - E + h.offsetTop;
			}
			s.style.margin = `${Jc}px 0`, s.style.minHeight = S + "px", s.style.maxHeight = c + "px", r?.(), requestAnimationFrame(() => p.current = !0);
		}
	}, [
		f,
		a.trigger,
		a.valueNode,
		s,
		l,
		h,
		g,
		_,
		a.dir,
		r
	]);
	Vr(() => y(), [y]);
	let [b, x] = Y.useState();
	return Vr(() => {
		l && x(window.getComputedStyle(l).zIndex);
	}, [l]), /* @__PURE__ */ (0, q.jsx)(tl, {
		scope: n,
		contentWrapper: s,
		shouldExpandOnScrollRef: p,
		onScrollButtonChange: Y.useCallback((e) => {
			e && m.current === !0 && (y(), v?.(), m.current = !1);
		}, [y, v]),
		children: /* @__PURE__ */ (0, q.jsx)("div", {
			ref: c,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: b
			},
			children: /* @__PURE__ */ (0, q.jsx)(Xn.div, {
				...i,
				ref: d,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...i.style
				}
			})
		})
	});
}, "SelectItemAlignedPosition")), el = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = Jc, ...a } = e, o = Ac(n);
	return /* @__PURE__ */ (0, q.jsx)(Co, {
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
}, "SelectPopperPosition")), [tl, nl] = Oc(Gc, {}), rl = "SelectViewport", il = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, nonce: r, ...i } = e, a = Xc(rl, n), o = nl(rl, n), s = Z(t, a.onViewportChange), c = Y.useRef(0);
	return /* @__PURE__ */ (0, q.jsxs)(q.Fragment, { children: [/* @__PURE__ */ (0, q.jsx)("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: r
	}), /* @__PURE__ */ (0, q.jsx)(Tc.Slot, {
		scope: n,
		children: /* @__PURE__ */ (0, q.jsx)(Xn.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...i,
			ref: s,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...i.style
			},
			onScroll: X(i.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = o;
				if (r?.current && n) {
					let e = Math.abs(c.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - Jc * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				c.current = t.scrollTop;
			})
		})
	})] });
}, "SelectViewport")), [al, ol] = Oc("SelectGroup"), sl = "SelectItem", [cl, ll] = Oc(sl), ul = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, value: r, disabled: i = !1, textValue: a, ...o } = e, s = Mc(sl, n), c = Xc(sl, n), l = s.value === r, [u, d] = Y.useState(a ?? ""), [f, p] = Y.useState(!1), m = Z(t, er((e) => c.itemRefCallback?.(e, r, i))), h = Kr(), g = Y.useRef("touch"), _ = /* @__PURE__ */ $(() => {
		s.onValueChange(r), s.onOpenChange(!1);
	}, "handleSelect");
	return /* @__PURE__ */ (0, q.jsx)(cl, {
		scope: n,
		value: r,
		disabled: i,
		textId: h,
		isSelected: l,
		onItemTextChange: Y.useCallback((e) => {
			d((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, q.jsx)(Tc.ItemSlot, {
			scope: n,
			value: r,
			disabled: i,
			textValue: u,
			children: /* @__PURE__ */ (0, q.jsx)(Xn.div, {
				role: "option",
				"aria-labelledby": h,
				"data-highlighted": f ? "" : void 0,
				"aria-selected": l && f,
				"data-state": l ? "checked" : "unchecked",
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				tabIndex: i ? void 0 : -1,
				...o,
				ref: m,
				onFocus: X(o.onFocus, () => p(!0)),
				onBlur: X(o.onBlur, () => p(!1)),
				onClick: X(o.onClick, () => {
					i || g.current !== "mouse" && _();
				}),
				onPointerUp: X(o.onPointerUp, () => {
					i || g.current === "mouse" && _();
				}),
				onPointerDown: X(o.onPointerDown, (e) => {
					g.current = e.pointerType;
				}),
				onPointerMove: X(o.onPointerMove, (e) => {
					g.current = e.pointerType, i ? c.onItemLeave?.() : g.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: X(o.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && c.onItemLeave?.();
				}),
				onKeyDown: X(o.onKeyDown, (e) => {
					i || e.target !== e.currentTarget || c.searchRef?.current !== "" && e.key === " " || (Cc.includes(e.key) && _(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
}, "SelectItem")), dl = "SelectItemText", fl = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, className: r, style: i, ...a } = e, o = Mc(dl, n), s = Xc(dl, n), c = ll(dl, n), l = Pc(dl, n), [u, d] = Y.useState(null), f = er((e) => s.itemTextRefCallback?.(e, c.value, c.disabled)), p = Z(t, d, c.onItemTextChange, f), m = u?.textContent, h = Y.useMemo(() => /* @__PURE__ */ (0, q.jsx)("option", {
		value: c.value,
		disabled: c.disabled,
		children: m
	}, c.value), [
		c.disabled,
		c.value,
		m
	]), { onNativeOptionAdd: g, onNativeOptionRemove: _ } = l;
	return Vr(() => (g(h), () => _(h)), [
		g,
		_,
		h
	]), /* @__PURE__ */ (0, q.jsxs)(q.Fragment, { children: [/* @__PURE__ */ (0, q.jsx)(Xn.span, {
		id: c.textId,
		...a,
		ref: p
	}), c.isSelected && o.valueNode && !o.valueNodeHasChildren && !Cl(o.value) ? qn.createPortal(a.children, o.valueNode) : null] });
}, "SelectItemText")), pl = "SelectItemIndicator", ml = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, ...r } = e;
	return ll(pl, n).isSelected ? /* @__PURE__ */ (0, q.jsx)(Xn.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
}, "SelectItemIndicator")), hl = "SelectScrollUpButton", gl = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let n = Xc(hl, e.__scopeSelect), r = nl(hl, e.__scopeSelect), [i, a] = Y.useState(!1), o = Z(t, r.onScrollButtonChange);
	return Vr(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollTop > 0;
				a(e);
			};
			$(e, "handleScroll");
			let t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ (0, q.jsx)(yl, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
}, "SelectScrollUpButton")), _l = "SelectScrollDownButton", vl = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let n = Xc(_l, e.__scopeSelect), r = nl(_l, e.__scopeSelect), [i, a] = Y.useState(!1), o = Z(t, r.onScrollButtonChange);
	return Vr(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight, n = Math.ceil(t.scrollTop) < e;
				a(n);
			};
			$(e, "handleScroll");
			let t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ (0, q.jsx)(yl, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
}, "SelectScrollDownButton")), yl = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function(e, t) {
	let { __scopeSelect: n, onAutoScroll: r, ...i } = e, a = Xc("SelectScrollButton", n), o = Y.useRef(null), s = Ec(n), c = Y.useCallback(() => {
		o.current !== null && (window.clearInterval(o.current), o.current = null);
	}, []);
	return Y.useEffect(() => () => c(), [c]), Vr(() => {
		s().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [s]), /* @__PURE__ */ (0, q.jsx)(Xn.div, {
		"aria-hidden": !0,
		...i,
		ref: t,
		style: {
			flexShrink: 0,
			...i.style
		},
		onPointerDown: X(i.onPointerDown, () => {
			o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerMove: X(i.onPointerMove, () => {
			a.onItemLeave?.(), o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerLeave: X(i.onPointerLeave, () => {
			c();
		})
	});
}, "SelectScrollButtonImpl")), bl = "SelectBubbleInput", xl = /* @__PURE__ */ Y.forwardRef(/* @__PURE__ */ $(function({ __scopeSelect: e, ...t }, n) {
	let r = Mc(bl, e), { value: i, onValueChange: a, required: o, disabled: s, name: c, autoComplete: l, form: u } = r, { nativeOptions: d, nativeSelectKey: f } = r, p = Y.useRef(null), m = Z(n, p), h = i ?? "", g = $o(h), _ = Array.from(d).some((e) => (e.props.value ?? "") === "");
	return Y.useEffect(() => {
		let e = p.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (g !== h && n) {
			let t = new Event("change", { bubbles: !0 });
			n.call(e, h), e.dispatchEvent(t);
		}
	}, [g, h]), /* @__PURE__ */ (0, q.jsxs)(Xn.select, {
		"aria-hidden": !0,
		required: o,
		tabIndex: -1,
		name: c,
		autoComplete: l,
		disabled: s,
		form: u,
		onChange: (e) => a(e.target.value),
		...t,
		style: {
			...es,
			...t.style
		},
		ref: m,
		defaultValue: h,
		children: [Cl(i) && !_ ? /* @__PURE__ */ (0, q.jsx)("option", { value: "" }) : null, Array.from(d)]
	}, f);
}, "SelectBubbleInput"));
function Sl(e) {
	return typeof e == "function";
}
$(Sl, "isFunction");
function Cl(e) {
	return e === "" || e === void 0;
}
$(Cl, "shouldShowPlaceholder");
function wl(e) {
	let t = er(e), n = Y.useRef(""), r = Y.useRef(0), i = Y.useCallback((e) => {
		let i = n.current + e;
		t(i), (/* @__PURE__ */ $((function e(t) {
			n.current = t, window.clearTimeout(r.current), t !== "" && (r.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(i);
	}, [t]), a = Y.useCallback(() => {
		n.current = "", window.clearTimeout(r.current);
	}, []);
	return Y.useEffect(() => () => window.clearTimeout(r.current), []), [
		n,
		i,
		a
	];
}
$(wl, "useTypeaheadSearch");
function Tl(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = El(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
$(Tl, "findNextItem");
function El(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
$(El, "wrapArray");
//#endregion
//#region src/components/atoms/dropdown/dropdown.constants.ts
var Dl = Ye([
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
}), Ol = Ye([
	"z-50",
	"overflow-hidden",
	"rounded-md",
	"border",
	"bg-popover",
	"shadow-md",
	"w-[var(--radix-select-trigger-width)]"
]), kl = Y.forwardRef(({ className: e, size: t, state: n, children: r, ...i }, a) => /* @__PURE__ */ (0, q.jsxs)(Rc, {
	ref: a,
	className: K(Dl({
		size: t,
		state: n
	}), e),
	...i,
	children: [/* @__PURE__ */ (0, q.jsx)(J, {
		as: "span",
		variant: "bodyMd",
		children: r
	}), /* @__PURE__ */ (0, q.jsx)(Vc, {
		asChild: !0,
		children: /* @__PURE__ */ (0, q.jsx)(rt, {
			icon: wt,
			size: "sm"
		})
	})]
}));
kl.displayName = Rc.displayName;
//#endregion
//#region src/components/atoms/dropdown/dropdownContent.tsx
var Al = Y.forwardRef(({ className: e, children: t, size: n, ...r }, i) => /* @__PURE__ */ (0, q.jsx)(Wc, { children: /* @__PURE__ */ (0, q.jsxs)(Kc, {
	ref: i,
	position: "popper",
	side: "bottom",
	align: "start",
	sideOffset: 8,
	className: K(Ol({}), e),
	...r,
	children: [
		/* @__PURE__ */ (0, q.jsx)(gl, {
			className: "flex justify-center py-1",
			children: /* @__PURE__ */ (0, q.jsx)(rt, {
				icon: Tt,
				size: "sm"
			})
		}),
		/* @__PURE__ */ (0, q.jsx)(il, {
			className: "p-1",
			children: t
		}),
		/* @__PURE__ */ (0, q.jsx)(vl, {
			className: "flex justify-center py-1",
			children: /* @__PURE__ */ (0, q.jsx)(rt, {
				icon: wt,
				size: "sm"
			})
		})
	]
}) }));
Al.displayName = Kc.displayName;
//#endregion
//#region src/components/atoms/dropdown/dropdownItem.tsx
var jl = Y.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, q.jsxs)(ul, {
	ref: r,
	className: K("flex w-full cursor-default items-center rounded-md px-3 py-2", "outline-none", "focus:bg-accent", "data-disabled:pointer-events-none data-disabled:opacity-50", e),
	...n,
	children: [/* @__PURE__ */ (0, q.jsx)(ml, {
		className: "mr-2 flex h-4 w-4",
		children: /* @__PURE__ */ (0, q.jsx)(rt, {
			icon: Ct,
			size: "sm"
		})
	}), /* @__PURE__ */ (0, q.jsx)(fl, {
		asChild: !0,
		children: /* @__PURE__ */ (0, q.jsx)(J, {
			as: "span",
			variant: "bodyMd",
			className: "text-text-primary",
			children: t
		})
	})]
}));
jl.displayName = ul.displayName;
//#endregion
//#region src/components/atoms/dropdown/dropdown.tsx
var Ml = ({ label: e, placeholder: t = "Select option", helperText: n, errorMessage: r, required: i = !1, size: a = "md", state: o = "default", children: s, ...c }) => {
	let l = o === "error";
	return /* @__PURE__ */ (0, q.jsxs)("div", {
		className: "flex w-full flex-col gap-2",
		children: [
			e && /* @__PURE__ */ (0, q.jsxs)(J, {
				as: "label",
				variant: "labelMd",
				className: "text-text-primary",
				children: [e, i && /* @__PURE__ */ (0, q.jsx)(J, {
					as: "label",
					variant: "labelMd",
					className: "ml-1 text-danger",
					children: "*"
				})]
			}),
			/* @__PURE__ */ (0, q.jsxs)(Ic, {
				...c,
				children: [/* @__PURE__ */ (0, q.jsx)(kl, {
					size: a,
					state: l ? "error" : "default",
					children: /* @__PURE__ */ (0, q.jsx)(Bc, {
						className: "font-inherit",
						placeholder: t
					})
				}), /* @__PURE__ */ (0, q.jsx)(Al, {
					size: a,
					children: s
				})]
			}),
			l && r ? /* @__PURE__ */ (0, q.jsx)(J, {
				as: "p",
				variant: "bodySm",
				className: "text-danger",
				children: r
			}) : n ? /* @__PURE__ */ (0, q.jsx)(J, {
				as: "p",
				variant: "bodySm",
				className: "text-text-secondary",
				children: n
			}) : null
		]
	});
};
Ml.Item = jl;
//#endregion
//#region src/components/atoms/input/input.constants.ts
var Nl = Ye([
	Xe({ variant: "bodyMd" }),
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
}), Pl = (0, Y.forwardRef)(({ className: e, label: t, helperText: n, errorMessage: r, size: i = "lg", state: a = "default", type: o = "text", startAdornment: s, endAdornment: c, ...l }, u) => {
	let d = a === "error", f = K(Nl({
		size: i,
		state: a
	}), s && "pl-10", c && "pr-10", e);
	return /* @__PURE__ */ (0, q.jsxs)("div", {
		className: "flex w-full flex-col gap-2",
		children: [
			t && /* @__PURE__ */ (0, q.jsx)(J, {
				as: "label",
				variant: "labelMd",
				className: "text-text-primary",
				children: t
			}),
			/* @__PURE__ */ (0, q.jsxs)("div", {
				className: "relative flex w-full items-center",
				children: [
					s && /* @__PURE__ */ (0, q.jsx)("div", {
						className: " absolute left-3 flex items-center text-text-secondary",
						children: s
					}),
					/* @__PURE__ */ (0, q.jsx)("input", {
						ref: u,
						type: o,
						className: f,
						...l
					}),
					c && /* @__PURE__ */ (0, q.jsx)("div", {
						className: " absolute right-3 flex items-center text-text-secondary",
						children: c
					})
				]
			}),
			d && r ? /* @__PURE__ */ (0, q.jsx)(J, {
				as: "p",
				variant: "bodySm",
				className: "text-danger",
				children: r
			}) : n ? /* @__PURE__ */ (0, q.jsx)(J, {
				as: "p",
				variant: "bodySm",
				className: "text-text-secondary",
				children: n
			}) : null
		]
	});
});
Pl.displayName = "Input";
//#endregion
//#region src/components/atoms/skeleton/skeleton.constants.ts
var Fl = {
	text: "text",
	circle: "circle",
	rectangle: "rectangle"
}, Il = {
	text: "rounded-md",
	circle: "rounded-full aspect-square",
	rectangle: "rounded-lg"
}, Ll = (0, Y.forwardRef)(({ className: e, variant: t = Fl.rectangle, ...n }, r) => /* @__PURE__ */ (0, q.jsx)("div", {
	ref: r,
	"aria-hidden": "true",
	className: K("animate-pulse bg-skeleton", Il[t], e),
	...n
}));
Ll.displayName = "Skeleton";
//#endregion
//#region src/components/molecules/emptyState/emptyState.constants.ts
var Rl = Ye([
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
}), zl = Ye([
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
}), Bl = ({ className: e, icon: t, title: n, description: r, action: i, size: a = "md", ...o }) => /* @__PURE__ */ (0, q.jsxs)("div", {
	className: K(Rl({ size: a }), e),
	...o,
	children: [
		t && /* @__PURE__ */ (0, q.jsx)("div", {
			className: zl({ size: a }),
			children: t
		}),
		/* @__PURE__ */ (0, q.jsxs)("div", {
			className: "flex flex-col gap-1 items-center",
			children: [/* @__PURE__ */ (0, q.jsx)(J, {
				as: "h3",
				variant: "h3",
				children: n
			}), r && /* @__PURE__ */ (0, q.jsx)(J, {
				as: "p",
				variant: "bodySm",
				className: "text-text-disabled",
				children: r
			})]
		}),
		i && /* @__PURE__ */ (0, q.jsx)("div", {
			className: "mt-2",
			children: i
		})
	]
}), Vl = Ye([
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
}), Hl = Ye(["text-sm"], {
	variants: { state: {
		default: "text-text-secondary",
		error: "text-danger"
	} },
	defaultVariants: { state: "default" }
}), Ul = ({ className: e, label: t, required: n = !1, description: r, errorMessage: i, children: a, spacing: o = "md", ...s }) => {
	let c = !!i;
	return /* @__PURE__ */ (0, q.jsxs)("div", {
		className: K(Vl({ spacing: o }), e),
		...s,
		children: [
			t && /* @__PURE__ */ (0, q.jsxs)(J, {
				as: "label",
				variant: "bodySm",
				className: "text-text-primary",
				children: [t, n && /* @__PURE__ */ (0, q.jsx)(J, {
					as: "span",
					variant: "bodySm",
					className: "text-danger",
					children: "*"
				})]
			}),
			a,
			c ? /* @__PURE__ */ (0, q.jsx)(J, {
				as: "p",
				variant: "bodySm",
				className: Hl({ state: "error" }),
				children: i
			}) : r ? /* @__PURE__ */ (0, q.jsx)(J, {
				as: "p",
				variant: "bodySm",
				className: Hl({ state: "default" }),
				children: r
			}) : null
		]
	});
}, Wl = (0, Y.forwardRef)(({ className: e, toggleLabel: t = "Show password", iconSize: n = "lg", ...r }, i) => {
	let [a, o] = (0, Y.useState)(!1);
	return /* @__PURE__ */ (0, q.jsx)(Pl, {
		ref: i,
		type: a ? "text" : "password",
		className: K(e),
		endAdornment: /* @__PURE__ */ (0, q.jsx)(Bt, {
			type: "button",
			variant: "text",
			iconOnly: !0,
			icon: /* @__PURE__ */ (0, q.jsx)(rt, {
				icon: a ? Dt : Et,
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
Wl.displayName = "PasswordField";
//#endregion
//#region src/components/organisms/loginForm/loginForm.tsx
var Gl = ({ email: e = "", password: t = "", emailError: n, passwordError: r, loading: i = !1, onEmailChange: a, onPasswordChange: o, onSubmit: s }) => /* @__PURE__ */ (0, q.jsxs)("form", {
	onSubmit: s,
	className: "flex w-full flex-col gap-6",
	children: [
		/* @__PURE__ */ (0, q.jsx)(Ul, {
			label: "Email",
			required: !0,
			errorMessage: n,
			children: /* @__PURE__ */ (0, q.jsx)(Pl, {
				type: "email",
				value: e,
				onChange: (e) => a(e.target.value),
				placeholder: "name@email.com"
			})
		}),
		/* @__PURE__ */ (0, q.jsx)(Ul, {
			label: "Password",
			required: !0,
			errorMessage: r,
			children: /* @__PURE__ */ (0, q.jsx)(Wl, {
				value: t,
				onChange: (e) => o?.(e.target.value),
				placeholder: "Enter password"
			})
		}),
		/* @__PURE__ */ (0, q.jsx)(Bt, {
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
export { Ft as Avatar, Bt as Button, Ut as Checkbox, Ml as Dropdown, Bl as EmptyState, Ul as FormField, rt as Icon, Pl as Input, Gl as LoginForm, ct as Motion, Wl as PasswordField, ut as Radius, Ll as Skeleton, ft as Spacing, Rt as Spinner, at as Theme, J as Typography };

//# sourceMappingURL=index.js.map