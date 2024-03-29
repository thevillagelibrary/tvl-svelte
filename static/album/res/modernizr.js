/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-animation-audio-backgroundsize-cookies-cssanimations-csspointerevents-csstransforms-csstransitions-fullscreen-hashchange-history-inlinesvg-localstorage-rgba-sessionstorage-svg-touchevents-video-webworkers-domprefixes-prefixes-setclasses-shiv !*/
!(function (e, t, n) {
	function r(e, t) {
		return typeof e === t;
	}
	function o() {
		var e, t, n, o, a, i, s;
		for (var c in T)
			if (T.hasOwnProperty(c)) {
				if (
					((e = []),
					(t = T[c]),
					t.name &&
						(e.push(t.name.toLowerCase()),
						t.options && t.options.aliases && t.options.aliases.length))
				)
					for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
				for (o = r(t.fn, 'function') ? t.fn() : t.fn, a = 0; a < e.length; a++)
					(i = e[a]),
						(s = i.split('.')),
						1 === s.length
							? (Modernizr[s[0]] = o)
							: (!Modernizr[s[0]] ||
									Modernizr[s[0]] instanceof Boolean ||
									(Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
								(Modernizr[s[0]][s[1]] = o)),
						y.push((o ? '' : 'no-') + s.join('-'));
			}
	}
	function a(e) {
		var t = x.class,
			n = Modernizr._config.classPrefix || '';
		if ((S && (t = t.baseVal), Modernizr._config.enableJSClass)) {
			var r = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)');
			t = t.replace(r, '$1' + n + 'js$2');
		}
		Modernizr._config.enableClasses &&
			((t += ' ' + n + e.join(' ' + n)), S ? (x.class.baseVal = t) : (x.class = t));
	}
	function i() {
		return 'function' != typeof t.createElement
			? t.createElement(arguments[0])
			: S
				? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0])
				: t.createElement.apply(t, arguments);
	}
	function s(e) {
		return e
			.replace(/([a-z])-([a-z])/g, function (e, t, n) {
				return t + n.toUpperCase();
			})
			.replace(/^-/, '');
	}
	function c() {
		var e = t.body;
		return e || ((e = i(S ? 'svg' : 'body')), (e.fake = !0)), e;
	}
	function l(e, n, r, o) {
		var a,
			s,
			l,
			u,
			d = 'modernizr',
			f = i('div'),
			p = c();
		if (parseInt(r, 10))
			for (; r--; ) (l = i('div')), (l.id = o ? o[r] : d + (r + 1)), f.appendChild(l);
		return (
			(a = i('style')),
			(a.type = 'text/css'),
			(a.id = 's' + d),
			(p.fake ? p : f).appendChild(a),
			p.appendChild(f),
			a.styleSheet ? (a.styleSheet.cssText = e) : a.appendChild(t.createTextNode(e)),
			(f.id = d),
			p.fake &&
				((p.style.background = ''),
				(p.style.overflow = 'hidden'),
				(u = x.style.overflow),
				(x.style.overflow = 'hidden'),
				x.appendChild(p)),
			(s = n(f, e)),
			p.fake
				? (p.parentNode.removeChild(p), (x.style.overflow = u), x.offsetHeight)
				: f.parentNode.removeChild(f),
			!!s
		);
	}
	function u(e, t) {
		return !!~('' + e).indexOf(t);
	}
	function d(e, t) {
		return function () {
			return e.apply(t, arguments);
		};
	}
	function f(e, t, n) {
		var o;
		for (var a in e)
			if (e[a] in t) return n === !1 ? e[a] : ((o = t[e[a]]), r(o, 'function') ? d(o, n || t) : o);
		return !1;
	}
	function p(e) {
		return e
			.replace(/([A-Z])/g, function (e, t) {
				return '-' + t.toLowerCase();
			})
			.replace(/^ms-/, '-ms-');
	}
	function m(t, r) {
		var o = t.length;
		if ('CSS' in e && 'supports' in e.CSS) {
			for (; o--; ) if (e.CSS.supports(p(t[o]), r)) return !0;
			return !1;
		}
		if ('CSSSupportsRule' in e) {
			for (var a = []; o--; ) a.push('(' + p(t[o]) + ':' + r + ')');
			return (
				(a = a.join(' or ')),
				l('@supports (' + a + ') { #modernizr { position: absolute; } }', function (e) {
					return 'absolute' == getComputedStyle(e, null).position;
				})
			);
		}
		return n;
	}
	function v(e, t, o, a) {
		function c() {
			d && (delete $.style, delete $.modElem);
		}
		if (((a = r(a, 'undefined') ? !1 : a), !r(o, 'undefined'))) {
			var l = m(e, o);
			if (!r(l, 'undefined')) return l;
		}
		for (var d, f, p, v, h, g = ['modernizr', 'tspan', 'samp']; !$.style && g.length; )
			(d = !0), ($.modElem = i(g.shift())), ($.style = $.modElem.style);
		for (p = e.length, f = 0; p > f; f++)
			if (((v = e[f]), (h = $.style[v]), u(v, '-') && (v = s(v)), $.style[v] !== n)) {
				if (a || r(o, 'undefined')) return c(), 'pfx' == t ? v : !0;
				try {
					$.style[v] = o;
				} catch (y) {}
				if ($.style[v] != h) return c(), 'pfx' == t ? v : !0;
			}
		return c(), !1;
	}
	function h(e, t, n, o, a) {
		var i = e.charAt(0).toUpperCase() + e.slice(1),
			s = (e + ' ' + k.join(i + ' ') + i).split(' ');
		return r(t, 'string') || r(t, 'undefined')
			? v(s, t, o, a)
			: ((s = (e + ' ' + E.join(i + ' ') + i).split(' ')), f(s, t, n));
	}
	function g(e, t, r) {
		return h(e, n, n, t, r);
	}
	var y = [],
		T = [],
		b = {
			_version: '3.3.1',
			_config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
			_q: [],
			on: function (e, t) {
				var n = this;
				setTimeout(function () {
					t(n[e]);
				}, 0);
			},
			addTest: function (e, t, n) {
				T.push({ name: e, fn: t, options: n });
			},
			addAsyncTest: function (e) {
				T.push({ name: null, fn: e });
			}
		},
		Modernizr = function () {};
	(Modernizr.prototype = b),
		(Modernizr = new Modernizr()),
		Modernizr.addTest('cookies', function () {
			try {
				t.cookie = 'cookietest=1';
				var e = -1 != t.cookie.indexOf('cookietest=');
				return (t.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT'), e;
			} catch (n) {
				return !1;
			}
		}),
		Modernizr.addTest('history', function () {
			var t = navigator.userAgent;
			return (-1 === t.indexOf('Android 2.') && -1 === t.indexOf('Android 4.0')) ||
				-1 === t.indexOf('Mobile Safari') ||
				-1 !== t.indexOf('Chrome') ||
				-1 !== t.indexOf('Windows Phone')
				? e.history && 'pushState' in e.history
				: !1;
		}),
		Modernizr.addTest(
			'svg',
			!!t.createElementNS && !!t.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
		),
		Modernizr.addTest('sessionstorage', function () {
			var e = 'modernizr';
			try {
				return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
			} catch (t) {
				return !1;
			}
		}),
		Modernizr.addTest('webworkers', 'Worker' in e);
	var w = b._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['', ''];
	b._prefixes = w;
	var x = t.documentElement,
		S = 'svg' === x.nodeName.toLowerCase();
	S ||
		!(function (e, t) {
			function n(e, t) {
				var n = e.createElement('p'),
					r = e.getElementsByTagName('head')[0] || e.documentElement;
				return (
					(n.innerHTML = 'x<style>' + t + '</style>'), r.insertBefore(n.lastChild, r.firstChild)
				);
			}
			function r() {
				var e = T.elements;
				return 'string' == typeof e ? e.split(' ') : e;
			}
			function o(e, t) {
				var n = T.elements;
				'string' != typeof n && (n = n.join(' ')),
					'string' != typeof e && (e = e.join(' ')),
					(T.elements = n + ' ' + e),
					l(t);
			}
			function a(e) {
				var t = y[e[h]];
				return t || ((t = {}), g++, (e[h] = g), (y[g] = t)), t;
			}
			function i(e, n, r) {
				if ((n || (n = t), d)) return n.createElement(e);
				r || (r = a(n));
				var o;
				return (
					(o = r.cache[e]
						? r.cache[e].cloneNode()
						: v.test(e)
							? (r.cache[e] = r.createElem(e)).cloneNode()
							: r.createElem(e)),
					!o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
				);
			}
			function s(e, n) {
				if ((e || (e = t), d)) return e.createDocumentFragment();
				n = n || a(e);
				for (var o = n.frag.cloneNode(), i = 0, s = r(), c = s.length; c > i; i++)
					o.createElement(s[i]);
				return o;
			}
			function c(e, t) {
				t.cache ||
					((t.cache = {}),
					(t.createElem = e.createElement),
					(t.createFrag = e.createDocumentFragment),
					(t.frag = t.createFrag())),
					(e.createElement = function (n) {
						return T.shivMethods ? i(n, e, t) : t.createElem(n);
					}),
					(e.createDocumentFragment = Function(
						'h,f',
						'return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(' +
							r()
								.join()
								.replace(/[\w\-:]+/g, function (e) {
									return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
								}) +
							');return n}'
					)(T, t.frag));
			}
			function l(e) {
				e || (e = t);
				var r = a(e);
				return (
					!T.shivCSS ||
						u ||
						r.hasCSS ||
						(r.hasCSS = !!n(
							e,
							'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}'
						)),
					d || c(e, r),
					e
				);
			}
			var u,
				d,
				f = '3.7.3',
				p = e.html5 || {},
				m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
				v =
					/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
				h = '_html5shiv',
				g = 0,
				y = {};
			!(function () {
				try {
					var e = t.createElement('a');
					(e.innerHTML = '<xyz></xyz>'),
						(u = 'hidden' in e),
						(d =
							1 == e.childNodes.length ||
							(function () {
								t.createElement('a');
								var e = t.createDocumentFragment();
								return (
									'undefined' == typeof e.cloneNode ||
									'undefined' == typeof e.createDocumentFragment ||
									'undefined' == typeof e.createElement
								);
							})());
				} catch (n) {
					(u = !0), (d = !0);
				}
			})();
			var T = {
				elements:
					p.elements ||
					'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
				version: f,
				shivCSS: p.shivCSS !== !1,
				supportsUnknownElements: d,
				shivMethods: p.shivMethods !== !1,
				type: 'default',
				shivDocument: l,
				createElement: i,
				createDocumentFragment: s,
				addElements: o
			};
			(e.html5 = T), l(t), 'object' == typeof module && module.exports && (module.exports = T);
		})('undefined' != typeof e ? e : this, t);
	var C = 'Moz O ms Webkit',
		E = b._config.usePrefixes ? C.toLowerCase().split(' ') : [];
	(b._domPrefixes = E),
		Modernizr.addTest('audio', function () {
			var e = i('audio'),
				t = !1;
			try {
				(t = !!e.canPlayType) &&
					((t = new Boolean(t)),
					(t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '')),
					(t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, '')),
					(t.opus =
						e.canPlayType('audio/ogg; codecs="opus"') ||
						e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, '')),
					(t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')),
					(t.m4a = (e.canPlayType('audio/x-m4a;') || e.canPlayType('audio/aac;')).replace(
						/^no$/,
						''
					)));
			} catch (n) {}
			return t;
		}),
		Modernizr.addTest('video', function () {
			var e = i('video'),
				t = !1;
			try {
				(t = !!e.canPlayType) &&
					((t = new Boolean(t)),
					(t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '')),
					(t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '')),
					(t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '')),
					(t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, '')),
					(t.hls = e
						.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"')
						.replace(/^no$/, '')));
			} catch (n) {}
			return t;
		}),
		Modernizr.addTest('webanimations', 'animate' in i('div')),
		Modernizr.addTest('csspointerevents', function () {
			var e = i('a').style;
			return (e.cssText = 'pointer-events:auto'), 'auto' === e.pointerEvents;
		}),
		Modernizr.addTest('rgba', function () {
			var e = i('a').style;
			return (
				(e.cssText = 'background-color:rgba(150,255,150,.5)'),
				('' + e.backgroundColor).indexOf('rgba') > -1
			);
		}),
		Modernizr.addTest('inlinesvg', function () {
			var e = i('div');
			return (
				(e.innerHTML = '<svg/>'),
				'http://www.w3.org/2000/svg' ==
					('undefined' != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
			);
		});
	var P = (function () {
		function e(e, t) {
			var o;
			return e
				? ((t && 'string' != typeof t) || (t = i(t || 'div')),
					(e = 'on' + e),
					(o = e in t),
					!o &&
						r &&
						(t.setAttribute || (t = i('div')),
						t.setAttribute(e, ''),
						(o = 'function' == typeof t[e]),
						t[e] !== n && (t[e] = n),
						t.removeAttribute(e)),
					o)
				: !1;
		}
		var r = !('onblur' in t.documentElement);
		return e;
	})();
	(b.hasEvent = P),
		Modernizr.addTest('hashchange', function () {
			return P('hashchange', e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7;
		});
	var k = b._config.usePrefixes ? C.split(' ') : [];
	b._cssomPrefixes = k;
	var _ = function (t) {
		var r,
			o = w.length,
			a = e.CSSRule;
		if ('undefined' == typeof a) return n;
		if (!t) return !1;
		if (((t = t.replace(/^@/, '')), (r = t.replace(/-/g, '_').toUpperCase() + '_RULE'), r in a))
			return '@' + t;
		for (var i = 0; o > i; i++) {
			var s = w[i],
				c = s.toUpperCase() + '_' + r;
			if (c in a) return '@-' + s.toLowerCase() + '-' + t;
		}
		return !1;
	};
	b.atRule = _;
	var N = (b.testStyles = l);
	Modernizr.addTest('touchevents', function () {
		var n;
		if ('ontouchstart' in e || (e.DocumentTouch && t instanceof DocumentTouch)) n = !0;
		else {
			var r = [
				'@media (',
				w.join('touch-enabled),('),
				'heartz',
				')',
				'{#modernizr{top:9px;position:absolute}}'
			].join('');
			N(r, function (e) {
				n = 9 === e.offsetTop;
			});
		}
		return n;
	});
	var z = { elem: i('modernizr') };
	Modernizr._q.push(function () {
		delete z.elem;
	});
	var $ = { style: z.elem.style };
	Modernizr._q.unshift(function () {
		delete $.style;
	}),
		(b.testAllProps = h);
	var j = (b.prefixed = function (e, t, n) {
		return 0 === e.indexOf('@')
			? _(e)
			: (-1 != e.indexOf('-') && (e = s(e)), t ? h(e, t, n) : h(e, 'pfx'));
	});
	Modernizr.addTest('fullscreen', !(!j('exitFullscreen', t, !1) && !j('cancelFullScreen', t, !1))),
		(b.testAllProps = g),
		Modernizr.addTest('cssanimations', g('animationName', 'a', !0)),
		Modernizr.addTest('backgroundsize', g('backgroundSize', '100%', !0)),
		Modernizr.addTest('csstransforms', function () {
			return -1 === navigator.userAgent.indexOf('Android 2.') && g('transform', 'scale(1)', !0);
		}),
		Modernizr.addTest('csstransitions', g('transition', 'all', !0)),
		Modernizr.addTest('localstorage', function () {
			var e = 'modernizr';
			try {
				return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
			} catch (t) {
				return !1;
			}
		}),
		o(),
		a(y),
		delete b.addTest,
		delete b.addAsyncTest;
	for (var A = 0; A < Modernizr._q.length; A++) Modernizr._q[A]();
	e.Modernizr = Modernizr;
})(window, document);
