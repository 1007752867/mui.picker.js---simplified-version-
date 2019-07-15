
//mui change  in 2019/5/27

/*!
 * =====================================================
 * Mui v3.3.0 (http://dev.dcloud.net.cn/mui)
 * =====================================================
 */
var mui = function(a, b) {
	var c = /complete|loaded|interactive/,
		d = /^#([\w-]+)$/,
		e = /^\.([\w-]+)$/,
		f = /^[\w-]+$/,
		g = /translate(?:3d)?\((.+?)\)/,
		h = /matrix(3d)?\((.+?)\)/,
		i = function(b, c) {
			if(c = c || a, !b) return j();
			if("object" == typeof b) return i.isArrayLike(b) ? j(i.slice.call(b), null) : j([b], null);
			if("function" == typeof b) return i.ready(b);
			if("string" == typeof b) try {
				if(b = b.trim(), d.test(b)) {
					var e = a.getElementById(RegExp.$1);
					return j(e ? [e] : [])
				}
				return j(i.qsa(b, c), b)
			} catch(f) {}
			return j()
		},
		j = function(a, b) {
			return a = a || [], Object.setPrototypeOf(a, i.fn), a.selector = b || "", a
		};
	i.uuid = 0, i.data = {}, i.extend = function() {
		var a, c, d, e, f, g, h = arguments[0] || {},
			j = 1,
			k = arguments.length,
			l = !1;
		for("boolean" == typeof h && (l = h, h = arguments[j] || {}, j++), "object" == typeof h || i.isFunction(h) || (h = {}), j === k && (h = this, j--); k > j; j++)
			if(null != (a = arguments[j]))
				for(c in a) d = h[c], e = a[c], h !== e && (l && e && (i.isPlainObject(e) || (f = i.isArray(e))) ? (f ? (f = !1, g = d && i.isArray(d) ? d : []) : g = d && i.isPlainObject(d) ? d : {}, h[c] = i.extend(l, g, e)) : e !== b && (h[c] = e));
		return h
	}, i.noop = function() {}, i.slice = [].slice, i.filter = [].filter, i.type = function(a) {
		return null == a ? String(a) : k[{}.toString.call(a)] || "object"
	}, i.isArray = Array.isArray || function(a) {
		return a instanceof Array
	}, i.isArrayLike = function(a) {
		var b = !!a && "length" in a && a.length,
			c = i.type(a);
		return "function" === c || i.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}, i.isWindow = function(a) {
		return null != a && a === a.window
	}, i.isObject = function(a) {
		return "object" === i.type(a)
	}, i.isPlainObject = function(a) {
		return i.isObject(a) && !i.isWindow(a) && Object.getPrototypeOf(a) === Object.prototype
	}, i.isEmptyObject = function(a) {
		for(var c in a)
			if(c !== b) return !1;
		return !0
	}, i.isFunction = function(a) {
		return "function" === i.type(a)
	}, i.qsa = function(b, c) {
		return c = c || a, i.slice.call(e.test(b) ? c.getElementsByClassName(RegExp.$1) : f.test(b) ? c.getElementsByTagName(b) : c.querySelectorAll(b))
	}, i.ready = function(b) {
		return c.test(a.readyState) ? b(i) : a.addEventListener("DOMContentLoaded", function() {
			b(i)
		}, !1), this
	}, i.buffer = function(a, b, c) {
		function d() {
			e && (e.cancel(), e = 0), f = i.now(), a.apply(c || this, arguments), g = i.now()
		}
		var e, f = 0,
			g = 0,
			b = b || 150;
		return i.extend(function() {
			!f || g >= f && i.now() - g > b || f > g && i.now() - f > 8 * b ? d() : (e && e.cancel(), e = i.later(d, b, null, arguments))
		}, {
			stop: function() {
				e && (e.cancel(), e = 0)
			}
		})
	}, i.each = function(a, b, c) {
		if(!a) return this;
		if("number" == typeof a.length)[].every.call(a, function(a, c) {
			return b.call(a, c, a) !== !1
		});
		else
			for(var d in a)
				if(c) {
					if(a.hasOwnProperty(d) && b.call(a[d], d, a[d]) === !1) return a
				} else if(b.call(a[d], d, a[d]) === !1) return a;
		return this
	}, i.focus = function(a) {
		i.os.ios ? setTimeout(function() {
			a.focus()
		}, 10) : a.focus()
	}, i.trigger = function(a, b, c) {
		return a.dispatchEvent(new CustomEvent(b, {
			detail: c,
			bubbles: !0,
			cancelable: !0
		})), this
	}, i.getStyles = function(a, b) {
		var c = a.ownerDocument.defaultView.getComputedStyle(a, null);
		return b ? c.getPropertyValue(b) || c[b] : c
	}, i.parseTranslate = function(a, b) {
		var c = a.match(g || "");
		return c && c[1] || (c = ["", "0,0,0"]), c = c[1].split(","), c = {
			x: parseFloat(c[0]),
			y: parseFloat(c[1]),
			z: parseFloat(c[2])
		}, b && c.hasOwnProperty(b) ? c[b] : c
	}, i.parseTranslateMatrix = function(a, b) {
		var c = a.match(h),
			d = c && c[1];
		c ? (c = c[2].split(","), "3d" === d ? c = c.slice(12, 15) : (c.push(0), c = c.slice(4, 7))) : c = [0, 0, 0];
		var e = {
			x: parseFloat(c[0]),
			y: parseFloat(c[1]),
			z: parseFloat(c[2])
		};
		return b && e.hasOwnProperty(b) ? e[b] : e
	}, i.hooks = {}, i.addAction = function(a, b) {
		var c = i.hooks[a];
		return c || (c = []), b.index = b.index || 1e3, c.push(b), c.sort(function(a, b) {
			return a.index - b.index
		}), i.hooks[a] = c, i.hooks[a]
	}, i.doAction = function(a, b) {
		i.isFunction(b) ? i.each(i.hooks[a], b) : i.each(i.hooks[a], function(a, b) {
			return !b.handle()
		})
	}, i.later = function(a, b, c, d) {
		b = b || 0;
		var e, f, g = a,
			h = d;
		return "string" == typeof a && (g = c[a]), e = function() {
			g.apply(c, i.isArray(h) ? h : [h])
		}, f = setTimeout(e, b), {
			id: f,
			cancel: function() {
				clearTimeout(f)
			}
		}
	}, i.now = Date.now || function() {
		return +new Date
	};
	var k = {};
	return i.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"], function(a, b) {
		k["[object " + b + "]"] = b.toLowerCase()
	}), window.JSON && (i.parseJSON = JSON.parse), i.fn = {
		each: function(a) {
			return [].every.call(this, function(b, c) {
				return a.call(b, c, b) !== !1
			}), this
		}
	}, "function" == typeof define && define.amd && define("mui", [], function() {
		return i
	}), i
}(document);
! function(a, b) {
	"ontouchstart" in window ? (a.isTouchable = !0, a.EVENT_START = "touchstart", a.EVENT_MOVE = "touchmove", a.EVENT_END = "touchend") : (a.isTouchable = !1, a.EVENT_START = "mousedown", a.EVENT_MOVE = "mousemove", a.EVENT_END = "mouseup"), a.EVENT_CANCEL = "touchcancel", a.EVENT_CLICK = "click";
	function c(c) {
		this.os = {};
		var d = [function() {
			var a = c.match(/(MicroMessenger)\/([\d\.]+)/i);
			return a && (this.os.wechat = {
				version: a[2].replace(/_/g, ".")
			}), !1
		}, function() {
			var a = c.match(/(Android);?[\s\/]+([\d.]+)?/);
			return a && (this.os.android = !0, this.os.version = a[2], this.os.isBadAndroid = !/Chrome\/\d/.test(b.navigator.appVersion)), this.os.android === !0
		}, function() {
			var a = c.match(/(iPhone\sOS)\s([\d_]+)/);
			if(a) this.os.ios = this.os.iphone = !0, this.os.version = a[2].replace(/_/g, ".");
			else {
				var b = c.match(/(iPad).*OS\s([\d_]+)/);
				b && (this.os.ios = this.os.ipad = !0, this.os.version = b[2].replace(/_/g, "."))
			}
			return this.os.ios === !0
		}];
		[].every.call(d, function(b) {
			return !b.call(a)
		})
	}
	c.call(a, navigator.userAgent)
}(mui, window),
function(a, b, c) {
	a.targets = {}, a.targetHandles = [], a.registerTarget = function(b) {
		return b.index = b.index || 1e3, a.targetHandles.push(b), a.targetHandles.sort(function(a, b) {
			return a.index - b.index
		}), a.targetHandles
	}, b.addEventListener(a.EVENT_START, function(b) {
		for(var d = b.target, e = {}; d && d !== c; d = d.parentNode) {
			var f = !1;
			if(a.each(a.targetHandles, function(c, g) {
					var h = g.name;
					f || e[h] || !g.hasOwnProperty("handle") ? e[h] || g.isReset !== !1 && (a.targets[h] = !1) : (a.targets[h] = g.handle(b, d), a.targets[h] && (e[h] = !0, g.isContinue !== !0 && (f = !0)))
				}), f) break
		}
	}), b.addEventListener("click", function(b) {
		for(var d = b.target, e = !1; d && d !== c && ("A" !== d.tagName || (a.each(a.targetHandles, function(a, c) {
				c.name;
				return c.hasOwnProperty("handle") && c.handle(b, d) ? (e = !0, b.preventDefault(), !1) : void 0
			}), !e)); d = d.parentNode);
	})
}(mui, window, document),
function(a) {
	a.namespace = "mui", a.classNamePrefix = a.namespace + "-", a.classSelectorPrefix = "." + a.classNamePrefix, a.className = function(b) {
		return a.classNamePrefix + b
	}, a.classSelector = function(b) {
		return b.replace(/\./g, a.classSelectorPrefix)
	}, a.eventName = function(b, c) {
		return b + (a.namespace ? "." + a.namespace : "") + (c ? "." + c : "")
	}
}(mui),
function(a, b) {
	a.gestures = {
		session: {}
	}, a.preventDefault = function(a) {
		a.preventDefault()
	}, a.stopPropagation = function(a) {
		a.stopPropagation()
	}, a.addGesture = function(b) {
		return a.addAction("gestures", b)
	};
	var c = Math.round,
		d = Math.abs,
		e = Math.sqrt,
		f = (Math.atan, Math.atan2),
		g = function(a, b, c) {
			c || (c = ["x", "y"]);
			var d = b[c[0]] - a[c[0]],
				f = b[c[1]] - a[c[1]];
			return e(d * d + f * f)
		},
		h = function(a, b) {
			if(a.length >= 2 && b.length >= 2) {
				var c = ["pageX", "pageY"];
				return g(b[1], b[0], c) / g(a[1], a[0], c)
			}
			return 1
		},
		i = function(a, b, c) {
			c || (c = ["x", "y"]);
			var d = b[c[0]] - a[c[0]],
				e = b[c[1]] - a[c[1]];
			return 180 * f(e, d) / Math.PI
		},
		j = function(a, b) {
			return a === b ? "" : d(a) >= d(b) ? a > 0 ? "left" : "right" : b > 0 ? "up" : "down"
		},
		k = function(a, b) {
			var c = ["pageX", "pageY"];
			return i(b[1], b[0], c) - i(a[1], a[0], c)
		},
		l = function(a, b, c) {
			return {
				x: b / a || 0,
				y: c / a || 0
			}
		},
		m = function(b, c) {
			a.gestures.stoped || a.doAction("gestures", function(d, e) {
				a.gestures.stoped || a.options.gestureConfig[e.name] !== !1 && e.handle(b, c)
			})
		},
		n = function(a, b) {
			for(; a;) {
				if(a == b) return !0;
				a = a.parentNode
			}
			return !1
		},
		o = function(a, b, c) {
			for(var d = [], e = [], f = 0; f < a.length;) {
				var g = b ? a[f][b] : a[f];
				e.indexOf(g) < 0 && d.push(a[f]), e[f] = g, f++
			}
			return c && (d = b ? d.sort(function(a, c) {
				return a[b] > c[b]
			}) : d.sort()), d
		},
		p = function(a) {
			var b = a.length;
			if(1 === b) return {
				x: c(a[0].pageX),
				y: c(a[0].pageY)
			};
			for(var d = 0, e = 0, f = 0; b > f;) d += a[f].pageX, e += a[f].pageY, f++;
			return {
				x: c(d / b),
				y: c(e / b)
			}
		},
		q = function() {
			return a.options.gestureConfig.pinch
		},
		r = function(b) {
			for(var d = [], e = 0; e < b.touches.length;) d[e] = {
				pageX: c(b.touches[e].pageX),
				pageY: c(b.touches[e].pageY)
			}, e++;
			return {
				timestamp: a.now(),
				gesture: b.gesture,
				touches: d,
				center: p(b.touches),
				deltaX: b.deltaX,
				deltaY: b.deltaY
			}
		},
		s = function(b) {
			var c = a.gestures.session,
				d = b.center,
				e = c.offsetDelta || {},
				f = c.prevDelta || {},
				g = c.prevTouch || {};
			(b.gesture.type === a.EVENT_START || b.gesture.type === a.EVENT_END) && (f = c.prevDelta = {
				x: g.deltaX || 0,
				y: g.deltaY || 0
			}, e = c.offsetDelta = {
				x: d.x,
				y: d.y
			}), b.deltaX = f.x + (d.x - e.x), b.deltaY = f.y + (d.y - e.y)
		},
		t = function(b) {
			var c = a.gestures.session,
				d = b.touches,
				e = d.length;
			c.firstTouch || (c.firstTouch = r(b)), q() && e > 1 && !c.firstMultiTouch ? c.firstMultiTouch = r(b) : 1 === e && (c.firstMultiTouch = !1);
			var f = c.firstTouch,
				l = c.firstMultiTouch,
				m = l ? l.center : f.center,
				n = b.center = p(d);
			b.timestamp = a.now(), b.deltaTime = b.timestamp - f.timestamp, b.angle = i(m, n), b.distance = g(m, n), s(b), b.offsetDirection = j(b.deltaX, b.deltaY), b.scale = l ? h(l.touches, d) : 1, b.rotation = l ? k(l.touches, d) : 0, v(b)
		},
		u = 25,
		v = function(b) {
			var c, e, f, g, h = a.gestures.session,
				i = h.lastInterval || b,
				k = b.timestamp - i.timestamp;
			if(b.gesture.type != a.EVENT_CANCEL && (k > u || void 0 === i.velocity)) {
				var m = i.deltaX - b.deltaX,
					n = i.deltaY - b.deltaY,
					o = l(k, m, n);
				e = o.x, f = o.y, c = d(o.x) > d(o.y) ? o.x : o.y, g = j(m, n) || i.direction, h.lastInterval = b
			} else c = i.velocity, e = i.velocityX, f = i.velocityY, g = i.direction;
			b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
		},
		w = {},
		x = function(a) {
			for(var b = 0; b < a.length; b++) !a.identifier && (a.identifier = 0);
			return a
		},
		y = function(b, c) {
			var d = x(a.slice.call(b.touches || [b])),
				e = b.type,
				f = [],
				g = [];
			if(e !== a.EVENT_START && e !== a.EVENT_MOVE || 1 !== d.length) {
				var h = 0,
					f = [],
					g = [],
					i = x(a.slice.call(b.changedTouches || [b]));
				c.target = b.target;
				var j = a.gestures.session.target || b.target;
				if(f = d.filter(function(a) {
						return n(a.target, j)
					}), e === a.EVENT_START)
					for(h = 0; h < f.length;) w[f[h].identifier] = !0, h++;
				for(h = 0; h < i.length;) w[i[h].identifier] && g.push(i[h]), (e === a.EVENT_END || e === a.EVENT_CANCEL) && delete w[i[h].identifier], h++;
				if(!g.length) return !1
			} else w[d[0].identifier] = !0, f = d, g = d, c.target = b.target;
			f = o(f.concat(g), "identifier", !0);
			var k = f.length,
				l = g.length;
			return e === a.EVENT_START && k - l === 0 && (c.isFirst = !0, a.gestures.touch = a.gestures.session = {
				target: b.target
			}), c.isFinal = (e === a.EVENT_END || e === a.EVENT_CANCEL) && k - l === 0, c.touches = f, c.changedTouches = g, !0
		},
		z = function(b) {
			var c = {
					gesture: b
				},
				d = y(b, c);
			d && (t(c), m(b, c), a.gestures.session.prevTouch = c, b.type !== a.EVENT_END || a.isTouchable || (a.gestures.touch = a.gestures.session = {}))
		};
	b.addEventListener(a.EVENT_START, z), b.addEventListener(a.EVENT_MOVE, z), b.addEventListener(a.EVENT_END, z), b.addEventListener(a.EVENT_CANCEL, z), b.addEventListener(a.EVENT_CLICK, function(b) {
		(a.os.android || a.os.ios) && (a.targets.popover && b.target === a.targets.popover || a.targets.tab || a.targets.offcanvas || a.targets.modal) && b.preventDefault()
	}, !0), a.isScrolling = !1;
	var A = null;
	b.addEventListener("scroll", function() {
		a.isScrolling = !0, A && clearTimeout(A), A = setTimeout(function() {
			a.isScrolling = !1
		}, 250)
	})
}(mui, window),

function(a, b) {
	var c, d, e = function(e, f) {
		var g = a.gestures.session,
			h = this.options;
		switch(e.type) {
			case a.EVENT_END:
				if(!f.isFinal) return;
				var i = g.target;
				if(!i || i.disabled || i.classList && i.classList.contains("mui-disabled")) return;
				if(f.distance < h.tapMaxDistance && f.deltaTime < h.tapMaxTime) {
					if(a.options.gestureConfig.doubletap && c && c === i && d && f.timestamp - d < h.tapMaxInterval) return a.trigger(i, "doubletap", f), d = a.now(), void(c = i);
					a.trigger(i, b, f), d = a.now(), c = i
				}
		}
	};
	a.addGesture({
		name: b,
		index: 30,
		handle: e,
		options: {
			fingers: 1,
			tapMaxInterval: 300,
			tapMaxDistance: 5,
			tapMaxTime: 250
		}
	})
}(mui, "tap"),
function(a) {
	function b(a, b) {
		var c = "MUI_SCROLL_POSITION_" + document.location.href + "_" + b.src,
			d = parseFloat(localStorage.getItem(c)) || 0;
		d && ! function(a) {
			b.onload = function() {
				window.scrollTo(0, a)
			}
		}(d), setInterval(function() {
			var a = window.scrollY;
			d !== a && (localStorage.setItem(c, a + ""), d = a)
		}, 100)
	}
	a.global = a.options = {
		gestureConfig: {
			tap: !0,
			doubletap: !1,
			longtap: !1,
			hold: !1,
			flick: !0,
			swipe: !0,
			drag: !0,
			pinch: !1
		}
	}, a.initGlobal = function(b) {
		return a.options = a.extend(!0, a.global, b), this
	};
	var c = {},
		d = !1;
	a.init = function(b) {
		return d = !0, a.options = a.extend(!0, a.global, b || {}), a.ready(function() {
			a.doAction("inits", function(b, d) {
				var e = !(c[d.name] && !d.repeat);
				e && (d.handle.call(a), c[d.name] = !0)
			})
		}), this
	};
}(mui),
function(a) {
	var b = !1,
		c = /xyz/.test(function() {
			xyz
		}) ? /\b_super\b/ : /.*/,
		d = function() {};
	d.extend = function(a) {
		function d() {
			!b && this.init && this.init.apply(this, arguments)
		}
		var e = this.prototype;
		b = !0;
		var f = new this;
		b = !1;
		for(var g in a) f[g] = "function" == typeof a[g] && "function" == typeof e[g] && c.test(a[g]) ? function(a, b) {
			return function() {
				var c = this._super;
				this._super = e[a];
				var d = b.apply(this, arguments);
				return this._super = c, d
			}
		}(g, a[g]) : a[g];
		return d.prototype = f, d.prototype.constructor = d, d.extend = arguments.callee, d
	}, a.Class = d
}(mui),

function(a, b, c, d) {
	var h = "mui-backdrop";
	a.createMask = function(b) {
		var d = c.createElement("div");
		d.classList.add(h), d.addEventListener(a.EVENT_MOVE, a.preventDefault), d.addEventListener("tap", function() {
			e.close()
		});
		var e = [d];
		return e._show = !1, e.show = function() {
			return e._show = !0, d.setAttribute("style", "opacity:1"), c.body.appendChild(d), e
		}, e._remove = function() {
			return e._show && (e._show = !1, d.setAttribute("style", "opacity:0"), a.later(function() {
				var a = c.body;
				d.parentNode === a && a.removeChild(d)
			}, 350)), e
		}, e.close = function() {
			b ? b() !== !1 && e._remove() : e._remove()
		}, e
	}
}(mui, window, document, "popover");

/**
 * 选择列表插件
 * varstion 2.0.0
 * by Houfeng
 * Houfeng@DCloud.io
 **/
! function(e, t, i, a) {
	var n = 30,
		r = 90,
		s = 40,
		c = 10,
		l = e.rad2deg = function(e) {
			return e / (Math.PI / 180)
		},
		o = (e.deg2rad = function(e) {
			return e * (Math.PI / 180)
		}, navigator.platform.toLowerCase()),
		d = navigator.userAgent.toLowerCase(),
		u = (d.indexOf("iphone") > -1 || d.indexOf("ipad") > -1 || d.indexOf("ipod") > -1) && (o.indexOf("iphone") > -1 || o.indexOf("ipad") > -1 || o.indexOf("ipod") > -1),
		p = e.Picker = function(e, t) {
			var i = this;
			i.holder = e, i.options = t || {}, i.init(), i.initInertiaParams(), i.calcElementItemPostion(!0), i.bindEvent()
		};
	p.prototype.findElementItems = function() {
		var e = this;
		return e.elementItems = [].slice.call(e.holder.querySelectorAll("li")), e.elementItems
	}, p.prototype.init = function() {
		var e = this;
		e.list = e.holder.querySelector("ul"), e.findElementItems(), e.height = e.holder.offsetHeight, e.r = e.height / 2 - c, e.d = 2 * e.r, e.itemHeight = e.elementItems.length > 0 ? e.elementItems[0].offsetHeight : s, e.itemAngle = parseInt(e.calcAngle(.8 * e.itemHeight)), e.hightlightRange = e.itemAngle / 2, e.visibleRange = r, e.beginAngle = 0, e.beginExceed = e.beginAngle - n, e.list.angle = e.beginAngle, u && (e.list.style.webkitTransformOrigin = "center center " + e.r + "px")
	}, p.prototype.calcElementItemPostion = function(e) {
		var t = this;
		e && (t.items = []), t.elementItems.forEach(function(i) {
			var a = t.elementItems.indexOf(i);
			if(t.endAngle = t.itemAngle * a, i.angle = t.endAngle, i.style.webkitTransformOrigin = "center center -" + t.r + "px", i.style.webkitTransform = "translateZ(" + t.r + "px) rotateX(" + -t.endAngle + "deg)", e) {
				var n = {};
				n.text = i.innerHTML || "", n.value = i.getAttribute("data-value") || n.text, t.items.push(n)
			}
		}), t.endExceed = t.endAngle + n, t.calcElementItemVisibility(t.beginAngle)
	}, p.prototype.calcAngle = function(e) {
		var t = this,
			i = b = parseFloat(t.r);
		e = Math.abs(e);
		var a = 180 * parseInt(e / t.d);
		e %= t.d;
		var n = (i * i + b * b - e * e) / (2 * i * b),
			r = a + l(Math.acos(n));
		return r
	}, p.prototype.calcElementItemVisibility = function(e) {
		var t = this;
		t.elementItems.forEach(function(i) {
			var a = Math.abs(i.angle - e);
			a < t.hightlightRange ? i.classList.add("highlight") : a < t.visibleRange ? (i.classList.add("visible"), i.classList.remove("highlight")) : (i.classList.remove("highlight"), i.classList.remove("visible"))
		})
	}, p.prototype.setAngle = function(e) {
		var t = this;
		t.list.angle = e, t.list.style.webkitTransform = "perspective(1000px) rotateY(0deg) rotateX(" + e + "deg)", t.calcElementItemVisibility(e)
	}, p.prototype.bindEvent = function() {
		var e = this,
			t = 0,
			i = null;
		e.holder.addEventListener("touchstart", function(a) {
			a.preventDefault(), e.list.style.webkitTransition = "", i = (a.changedTouches ? a.changedTouches[0] : a).pageY, t = e.list.angle, e.updateInertiaParams(a, !0)
		}, !1), e.holder.addEventListener("touchend", function(t) {
			t.preventDefault(), e.startInertiaScroll(t)
		}, !1), e.holder.addEventListener("touchcancel", function(t) {
			t.preventDefault(), e.startInertiaScroll(t)
		}, !1), e.holder.addEventListener("touchmove", function(a) {
			a.preventDefault();
			var n = (a.changedTouches ? a.changedTouches[0] : a).pageY,
				r = n - i,
				s = e.calcAngle(r),
				c = r > 0 ? t - s : t + s;
			c > e.endExceed && (c = e.endExceed), c < e.beginExceed && (c = e.beginExceed), e.setAngle(c), e.updateInertiaParams(a)
		}, !1), e.list.addEventListener("tap", function(t) {
			elementItem = t.target, "LI" == elementItem.tagName && e.setSelectedIndex(e.elementItems.indexOf(elementItem), 200)
		}, !1)
	}, p.prototype.initInertiaParams = function() {
		var e = this;
		e.lastMoveTime = 0, e.lastMoveStart = 0, e.stopInertiaMove = !1
	}, p.prototype.updateInertiaParams = function(e, t) {
		var i = this,
			a = e.changedTouches ? e.changedTouches[0] : e;
		if(t) i.lastMoveStart = a.pageY, i.lastMoveTime = e.timeStamp || Date.now(), i.startAngle = i.list.angle;
		else {
			var n = e.timeStamp || Date.now();
			n - i.lastMoveTime > 300 && (i.lastMoveTime = n, i.lastMoveStart = a.pageY)
		}
		i.stopInertiaMove = !0
	}, p.prototype.startInertiaScroll = function(e) {
		var t = this,
			i = e.changedTouches ? e.changedTouches[0] : e,
			a = e.timeStamp || Date.now(),
			n = (i.pageY - t.lastMoveStart) / (a - t.lastMoveTime),
			r = n > 0 ? -1 : 1,
			s = 6e-4 * r * -1,
			c = Math.abs(n / s),
			l = n * c / 2,
			o = t.list.angle,
			d = t.calcAngle(l) * r,
			u = d;
		return o + d < t.beginExceed && (d = t.beginExceed - o, c = c * (d / u) * .6), o + d > t.endExceed && (d = t.endExceed - o, c = c * (d / u) * .6), 0 == d ? void t.endScroll() : void t.scrollDistAngle(a, o, d, c)
	}, p.prototype.scrollDistAngle = function(e, t, i, a) {
		var n = this;
		n.stopInertiaMove = !1,
			function(e, t, i, a) {
				var r = 13,
					s = a / r,
					c = 0;
				! function l() {
					if(!n.stopInertiaMove) {
						var e = n.quartEaseOut(c, t, i, s);
						return n.setAngle(e), c++, c > s - 1 || e < n.beginExceed || e > n.endExceed ? void n.endScroll() : void setTimeout(l, r)
					}
				}()
			}(e, t, i, a)
	}, p.prototype.quartEaseOut = function(e, t, i, a) {
		return -i * ((e = e / a - 1) * e * e * e - 1) + t
	}, p.prototype.endScroll = function() {
		var e = this;
		if(e.list.angle < e.beginAngle) e.list.style.webkitTransition = "150ms ease-out", e.setAngle(e.beginAngle);
		else if(e.list.angle > e.endAngle) e.list.style.webkitTransition = "150ms ease-out", e.setAngle(e.endAngle);
		else {
			var t = parseInt((e.list.angle / e.itemAngle).toFixed(0));
			e.list.style.webkitTransition = "100ms ease-out", e.setAngle(e.itemAngle * t)
		}
		e.triggerChange()
	}, p.prototype.triggerChange = function(t) {
		var i = this;
		setTimeout(function() {
			var a = i.getSelectedIndex(),
				n = i.items[a];
			e.trigger && (a != i.lastIndex || t) && e.trigger(i.holder, "change", {
				index: a,
				item: n
			}), i.lastIndex = a
		}, 0)
	}, p.prototype.correctAngle = function(e) {
		var t = this;
		return e < t.beginAngle ? t.beginAngle : e > t.endAngle ? t.endAngle : e
	}, p.prototype.setItems = function(e) {
		var t = this;
		t.items = e || [];
		var i = [];
		t.items.forEach(function(e) {
			null !== e && e !== a && i.push("<li>" + (e.text || e) + "</li>")
		}), t.list.innerHTML = i.join(""), t.findElementItems(), t.calcElementItemPostion(), t.setAngle(t.correctAngle(t.list.angle)), t.triggerChange(!0)
	}, p.prototype.getItems = function() {
		var e = this;
		return e.items
	}, p.prototype.getSelectedIndex = function() {
		var e = this;
		return parseInt((e.list.angle / e.itemAngle).toFixed(0))
	}, p.prototype.setSelectedIndex = function(e, t) {
		var i = this;
		i.list.style.webkitTransition = "";
		var a = i.correctAngle(i.itemAngle * e);
		if(t && t > 0) {
			var n = a - i.list.angle;
			i.scrollDistAngle(Date.now(), i.list.angle, n, t)
		} else i.setAngle(a);
		i.triggerChange()
	}, p.prototype.getSelectedItem = function() {
		var e = this;
		return e.items[e.getSelectedIndex()]
	}, p.prototype.getSelectedValue = function() {
		var e = this;
		return(e.items[e.getSelectedIndex()] || {}).value
	}, p.prototype.getSelectedText = function() {
		var e = this;
		return(e.items[e.getSelectedIndex()] || {}).text
	}, p.prototype.setSelectedValue = function(e, t) {
		var i = this;
		for(var a in i.items) {
			var n = i.items[a];
			if(n.value == e) return void i.setSelectedIndex(a, t)
		}
	}, e.fn && (e.fn.picker = function(e) {
		return this.each(function(t, i) {
			if(!i.picker)
				if(e) i.picker = new p(i, e);
				else {
					var a = i.getAttribute("data-picker-options"),
						n = a ? JSON.parse(a) : {};
					i.picker = new p(i, n)
				}
		}), this[0] ? this[0].picker : null
	}, e.ready(function() {
		e(".mui-picker").picker()
	}))
}(window.mui || window, window, document, void 0),
function(e, t) {
	e.dom = function(i) {
		return "string" != typeof i ? i instanceof Array || i[0] && i.length ? [].slice.call(i) : [i] : (e.__create_dom_div__ || (e.__create_dom_div__ = t.createElement("div")), e.__create_dom_div__.innerHTML = i, [].slice.call(e.__create_dom_div__.childNodes))
	};
	var i = '<div class="mui-poppicker">		<div class="mui-poppicker-header">			<button class="mui-btn mui-poppicker-btn-cancel">取消</button>			<button class="mui-btn mui-btn-blue mui-poppicker-btn-ok">确定</button>			<div class="mui-poppicker-clear"></div>		</div>		<div class="mui-poppicker-body">		</div>	</div>',
		a = '<div class="mui-picker">		<div class="mui-picker-inner">			<div class="mui-pciker-rule mui-pciker-rule-ft"></div>			<ul class="mui-pciker-list">			</ul>			<div class="mui-pciker-rule mui-pciker-rule-bg"></div>		</div>	</div>';
	e.PopPicker = e.Class.extend({
		init: function(a) {
			var n = this;
			n.options = a || {}, n.options.buttons = n.options.buttons || ["取消", "确定"], n.panel = e.dom(i)[0], t.body.appendChild(n.panel), n.ok = n.panel.querySelector(".mui-poppicker-btn-ok"), n.cancel = n.panel.querySelector(".mui-poppicker-btn-cancel"), n.body = n.panel.querySelector(".mui-poppicker-body"), n.mask = e.createMask(), n.cancel.innerText = n.options.buttons[0], n.ok.innerText = n.options.buttons[1], n.cancel.addEventListener("tap", function(e) {
				n.hide()
			}, !1), n.ok.addEventListener("tap", function(e) {
				if(n.callback) {
					var t = n.callback(n.getSelectedItems());
					t !== !1 && n.hide()
				}
			}, !1), n.mask[0].addEventListener("tap", function() {
				n.hide()
			}, !1), n._createPicker(), n.panel.addEventListener("touchstart", function(e) {
				e.preventDefault()
			}, !1), n.panel.addEventListener("touchmove", function(e) {
				e.preventDefault()
			}, !1)
		},
		_createPicker: function() {
			var t = this,
				i = t.options.layer || 1,
				n = 100 / i + "%";
			t.pickers = [];
			for(var r = 1; i >= r; r++) {
				var s = e.dom(a)[0];
				s.style.width = n, t.body.appendChild(s);
				var c = e(s).picker();
				t.pickers.push(c), s.addEventListener("change", function(e) {
					var t = this.nextSibling;
					if(t && t.picker) {
						var i = e.detail || {},
							a = i.item || {};
						t.picker.setItems(a.children)
					}
				}, !1)
			}
		},
		setData: function(e) {
			var t = this;
			e = e || [], t.pickers[0].setItems(e)
		},
		getSelectedItems: function() {
			var e = this,
				t = [];
			for(var i in e.pickers) {
				var a = e.pickers[i];
				t.push(a.getSelectedItem() || {})
			}
			return t
		},
		show: function(i) {
			var a = this;
			a.callback = i, a.mask.show(), t.body.classList.add(e.className("poppicker-active-for-page")), a.panel.classList.add(e.className("active")), a.__back = e.back, e.back = function() {
				a.hide()
			}
		},
		hide: function() {
			var i = this;
			i.disposed || (i.panel.classList.remove(e.className("active")), i.mask.close(), t.body.classList.remove(e.className("poppicker-active-for-page")), e.back = i.__back)
		},
		dispose: function() {
			var e = this;
			e.hide(), setTimeout(function() {
				e.panel.parentNode.removeChild(e.panel);
				for(var t in e) e[t] = null, delete e[t];
				e.disposed = !0
			}, 300)
		}
	})
}(mui, document),
function(e, t) {
	e.dom = function(i) {
		return "string" != typeof i ? i instanceof Array || i[0] && i.length ? [].slice.call(i) : [i] : (e.__create_dom_div__ || (e.__create_dom_div__ = t.createElement("div")), e.__create_dom_div__.innerHTML = i, [].slice.call(e.__create_dom_div__.childNodes))
	};
	var i = '<div class="mui-dtpicker" data-type="datetime">		<div class="mui-dtpicker-header">			<button data-id="btn-cancel" class="mui-btn">取消</button>			<button data-id="btn-ok" class="mui-btn mui-btn-blue">确定</button>		</div>		<div class="mui-dtpicker-title"><h5 data-id="title-y">年</h5><h5 data-id="title-m">月</h5><h5 data-id="title-d">日</h5><h5 data-id="title-h">时</h5><h5 data-id="title-i">分</h5></div>		<div class="mui-dtpicker-body">			<div data-id="picker-y" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-m" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-d" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-h" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>			<div data-id="picker-i" class="mui-picker">				<div class="mui-picker-inner">					<div class="mui-pciker-rule mui-pciker-rule-ft"></div>					<ul class="mui-pciker-list">					</ul>					<div class="mui-pciker-rule mui-pciker-rule-bg"></div>				</div>			</div>		</div>	</div>';
	e.DtPicker = e.Class.extend({
		init: function(a) {
			var n = this,
				r = e.dom(i)[0];
			t.body.appendChild(r), e('[data-id*="picker"]', r).picker();
			var s = n.ui = {
				picker: r,
				mask: e.createMask(),
				ok: e('[data-id="btn-ok"]', r)[0],
				cancel: e('[data-id="btn-cancel"]', r)[0],
				y: e('[data-id="picker-y"]', r)[0],
				m: e('[data-id="picker-m"]', r)[0],
				d: e('[data-id="picker-d"]', r)[0],
				h: e('[data-id="picker-h"]', r)[0],
				i: e('[data-id="picker-i"]', r)[0],
				labels: e('[data-id*="title-"]', r)
			};
			s.cancel.addEventListener("tap", function() {
				n.hide()
			}, !1), s.ok.addEventListener("tap", function() {
				var e = n.callback(n.getSelected());
				e !== !1 && n.hide()
			}, !1), s.y.addEventListener("change", function() {
				n._createDay()
			}, !1), s.m.addEventListener("change", function() {
				n._createDay()
			}, !1), s.mask[0].addEventListener("tap", function() {
				n.hide()
			}, !1), n._create(a), n.ui.picker.addEventListener("touchstart", function(e) {
				e.preventDefault()
			}, !1), n.ui.picker.addEventListener("touchmove", function(e) {
				e.preventDefault()
			}, !1)
		},
		getSelected: function() {
			var e = this,
				t = e.ui,
				i = e.options.type,
				a = {
					type: i,
					y: t.y.picker.getSelectedItem(),
					m: t.m.picker.getSelectedItem(),
					d: t.d.picker.getSelectedItem(),
					h: t.h.picker.getSelectedItem(),
					i: t.i.picker.getSelectedItem(),
					toString: function() {
						return this.value
					}
				};
			switch(i) {
				case "datetime":
					a.value = a.y.value + "-" + a.m.value + "-" + a.d.value + " " + a.h.value + ":" + a.i.value, a.text = a.y.text + "-" + a.m.text + "-" + a.d.text + " " + a.h.text + ":" + a.i.text;
					break;
				case "date":
					a.value = a.y.value + "-" + a.m.value + "-" + a.d.value, a.text = a.y.text + "-" + a.m.text + "-" + a.d.text;
					break;
				case "time":
					a.value = a.h.value + ":" + a.i.value, a.text = a.h.text + ":" + a.i.text;
					break;
				case "month":
					a.value = a.y.value + "-" + a.m.value, a.text = a.y.text + "-" + a.m.text;
					break;
				case "hour":
					a.value = a.y.value + "-" + a.m.value + "-" + a.d.value + " " + a.h.value, a.text = a.y.text + "-" + a.m.text + "-" + a.d.text + " " + a.h.text
			}
			return a
		},
		setSelectedValue: function(e) {
			var t = this,
				i = t.ui,
				a = t._parseValue(e);
			i.y.picker.setSelectedValue(a.y, 0), i.m.picker.setSelectedValue(a.m, 0), i.d.picker.setSelectedValue(a.d, 0), i.h.picker.setSelectedValue(a.h, 0), i.i.picker.setSelectedValue(a.i, 0)
		},
		isLeapYear: function(e) {
			return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
		},
		_inArray: function(e, t) {
			for(var i in e) {
				var a = e[i];
				if(a === t) return !0
			}
			return !1
		},
		getDayNum: function(e, t) {
			var i = this;
			return i._inArray([1, 3, 5, 7, 8, 10, 12], t) ? 31 : i._inArray([4, 6, 9, 11], t) ? 30 : i.isLeapYear(e) ? 29 : 28
		},
		_fill: function(e) {
			return e = e.toString(), e.length < 2 && (e = 0 + e), e
		},
		_createYear: function(e) {
			var t = this,
				i = t.options,
				a = t.ui,
				n = [];
			if(i.customData.y) n = i.customData.y;
			else
				for(var r = i.beginYear, s = i.endYear, c = r; s >= c; c++) n.push({
					text: c + "",
					value: c
				});
			a.y.picker.setItems(n)
		},
		_createMonth: function(e) {
			var t = this,
				i = t.options,
				a = t.ui,
				n = [];
			if(i.customData.m) n = i.customData.m;
			else
				for(var r = 1; 12 >= r; r++) {
					var s = t._fill(r);
					n.push({
						text: s,
						value: s
					})
				}
			a.m.picker.setItems(n)
		},
		_createDay: function(e) {
			var t = this,
				i = t.options,
				a = t.ui,
				n = [];
			if(i.customData.d) n = i.customData.d;
			else
				for(var r = t.getDayNum(parseInt(a.y.picker.getSelectedValue()), parseInt(a.m.picker.getSelectedValue())), s = 1; r >= s; s++) {
					var c = t._fill(s);
					n.push({
						text: c,
						value: c
					})
				}
			a.d.picker.setItems(n), e = e || a.d.picker.getSelectedValue()
		},
		_createHours: function(e) {
			var t = this,
				i = t.options,
				a = t.ui,
				n = [];
			if(i.customData.h) n = i.customData.h;
			else
				for(var r = 0; 23 >= r; r++) {
					var s = t._fill(r);
					n.push({
						text: s,
						value: s
					})
				}
			a.h.picker.setItems(n)
		},
		_createMinutes: function(e) {
			var t = this,
				i = t.options,
				a = t.ui,
				n = [];
			if(i.customData.i) n = i.customData.i;
			else
				for(var r = 0; 59 >= r; r++) {
					var s = t._fill(r);
					n.push({
						text: s,
						value: s
					})
				}
			a.i.picker.setItems(n)
		},
		_setLabels: function() {
			var e = this,
				t = e.options,
				i = e.ui;
			i.labels.each(function(e, i) {
				i.innerText = t.labels[e]
			})
		},
		_setButtons: function() {
			var e = this,
				t = e.options,
				i = e.ui;
			i.cancel.innerText = t.buttons[0], i.ok.innerText = t.buttons[1]
		},
		_parseValue: function(e) {
			var t = {};
			if(e) {
				var i = e.replace(":", "-").replace(" ", "-").split("-");
				t.y = i[0], t.m = i[1], t.d = i[2], t.h = i[3], t.i = i[4]
			} else {
				var a = new Date;
				t.y = a.getFullYear(), t.m = a.getMonth() + 1, t.d = a.getDate(), t.h = a.getHours(), t.i = a.getMinutes()
			}
			return t
		},
		_create: function(e) {
			var t = this;
			e = e || {}, e.labels = e.labels || ["年", "月", "日", "时", "分"], e.buttons = e.buttons || ["取消", "确定"], e.type = e.type || "datetime", e.customData = e.customData || {}, t.options = e;
			var i = new Date;
			e.beginYear = e.beginYear || i.getFullYear() - 5, e.endYear = e.endYear || i.getFullYear() + 5;
			var a = t.ui;
			t._setLabels(), t._setButtons(), a.picker.setAttribute("data-type", e.type), t._createYear(), t._createMonth(), t._createDay(), t._createHours(), t._createMinutes(), t.setSelectedValue(e.value)
		},
		show: function(i) {
			var a = this,
				n = a.ui;
			a.callback = i || e.noop, n.mask.show(), t.body.classList.add(e.className("dtpicker-active-for-page")), n.picker.classList.add(e.className("active")), a.__back = e.back, e.back = function() {
				a.hide()
			}
		},
		hide: function() {
			var i = this;
			if(!i.disposed) {
				var a = i.ui;
				a.picker.classList.remove(e.className("active")), a.mask.close(), t.body.classList.remove(e.className("dtpicker-active-for-page")), e.back = i.__back
			}
		},
		dispose: function() {
			var e = this;
			e.hide(), setTimeout(function() {
				e.ui.picker.parentNode.removeChild(e.ui.picker);
				for(var t in e) e[t] = null, delete e[t];
				e.disposed = !0
			}, 300)
		}
	})
}(mui, document),
function(a) {
	var b = "ontouchstart" in document,
		c = b ? "tap" : "click",
		d = "change",
		e = "mui-numbox",
		f = ".mui-btn-numbox-plus,.mui-numbox-btn-plus",
		g = ".mui-btn-numbox-minus,.mui-numbox-btn-minus",
		h = ".mui-input-numbox,.mui-numbox-input",
		i = a.Numbox = a.Class.extend({
			init: function(b, c) {
				var d = this;
				if(!b) throw "构造 numbox 时缺少容器元素";
				d.holder = b, c = c || {}, c.step = parseInt(c.step || 1), d.options = c, d.input = a.qsa(h, d.holder)[0], d.plus = a.qsa(f, d.holder)[0], d.minus = a.qsa(g, d.holder)[0], d.checkValue(), d.initEvent()
			},
			initEvent: function() {
				var b = this;
				b.plus.addEventListener(c, function(c) {
					var e = parseInt(b.input.value) + b.options.step;
					b.input.value = e.toString(), a.trigger(b.input, d, null)
				}), b.minus.addEventListener(c, function(c) {
					var e = parseInt(b.input.value) - b.options.step;
					b.input.value = e.toString(), a.trigger(b.input, d, null)
				}), b.input.addEventListener(d, function(c) {
					b.checkValue();
					var e = parseInt(b.input.value);
					a.trigger(b.holder, d, {
						value: e
					})
				})
			},
			getValue: function() {
				var a = this;
				return parseInt(a.input.value)
			},
			checkValue: function() {
				var a = this,
					b = a.input.value;
				if(null == b || "" == b || isNaN(b)) a.input.value = a.options.min || 0, a.minus.disabled = null != a.options.min;
				else {
					var b = parseInt(b);
					null != a.options.max && !isNaN(a.options.max) && b >= parseInt(a.options.max) ? (b = a.options.max, a.plus.disabled = !0) : a.plus.disabled = !1, null != a.options.min && !isNaN(a.options.min) && b <= parseInt(a.options.min) ? (b = a.options.min, a.minus.disabled = !0) : a.minus.disabled = !1, a.input.value = b
				}
			},
			setOption: function(a, b) {
				var c = this;
				c.options[a] = b
			}
		});
	a.fn.numbox = function(a) {
		return this.each(function(a, b) {
			if(!b.numbox)
				if(d) b.numbox = new i(b, d);
				else {
					var c = b.getAttribute("data-numbox-options"),
						d = c ? JSON.parse(c) : {};
					d.step = b.getAttribute("data-numbox-step") || d.step, d.min = b.getAttribute("data-numbox-min") || d.min, d.max = b.getAttribute("data-numbox-max") || d.max, b.numbox = new i(b, d)
				}
		}), this[0] ? this[0].numbox : null
	}, a.ready(function() {
		a("." + e).numbox()
	})
}(mui),

/**
 * 弹出选择列表插件
 * 此组件依赖 listpicker ，请在页面中先引入 mui.picker.css + mui.picker.js
 * varstion 1.0.1
 * by Houfeng
 * Houfeng@DCloud.io
 */

function($, document) {

	//创建 DOM
	$.dom = function(str) {
		if(typeof(str) !== 'string') {
			if((str instanceof Array) || (str[0] && str.length)) {
				return [].slice.call(str);
			} else {
				return [str];
			}
		}
		if(!$.__create_dom_div__) {
			$.__create_dom_div__ = document.createElement('div');
		}
		$.__create_dom_div__.innerHTML = str;
		return [].slice.call($.__create_dom_div__.childNodes);
	};

	var panelBuffer = '<div class="mui-poppicker">\
		<div class="mui-poppicker-header">\
			<button class="mui-btn mui-poppicker-btn-cancel">取消</button>\
			<button class="mui-btn mui-btn-blue mui-poppicker-btn-ok">确定</button>\
			<div class="mui-poppicker-clear"></div>\
		</div>\
		<div class="mui-poppicker-body">\
		</div>\
	</div>';

	var pickerBuffer = '<div class="mui-picker">\
		<div class="mui-picker-inner">\
			<div class="mui-pciker-rule mui-pciker-rule-ft"></div>\
			<ul class="mui-pciker-list">\
			</ul>\
			<div class="mui-pciker-rule mui-pciker-rule-bg"></div>\
		</div>\
	</div>';

	//定义弹出选择器类
	var PopPicker = $.PopPicker = $.Class.extend({
		//构造函数
		init: function(options) {
			var self = this;
			self.options = options || {};
			self.options.buttons = self.options.buttons || ['取消', '确定'];
			self.panel = $.dom(panelBuffer)[0];
			document.body.appendChild(self.panel);
			self.ok = self.panel.querySelector('.mui-poppicker-btn-ok');
			self.cancel = self.panel.querySelector('.mui-poppicker-btn-cancel');
			self.body = self.panel.querySelector('.mui-poppicker-body');
			self.mask = $.createMask();
			self.cancel.innerText = self.options.buttons[0];
			self.ok.innerText = self.options.buttons[1];
			self.cancel.addEventListener('tap', function(event) {
				self.hide();
			}, false);
			self.ok.addEventListener('tap', function(event) {
				if(self.callback) {
					var rs = self.callback(self.getSelectedItems());
					if(rs !== false) {
						self.hide();
					}
				}
			}, false);
			self.mask[0].addEventListener('tap', function() {
				self.hide();
			}, false);
			self._createPicker();
			//防止滚动穿透
			self.panel.addEventListener('touchstart', function(event) {
				event.preventDefault();
			}, false);
			self.panel.addEventListener('touchmove', function(event) {
				event.preventDefault();
			}, false);
		},
		_createPicker: function() {
			var self = this;
			var layer = self.options.layer || 1;
			var width = (100 / layer) + '%';
			self.pickers = [];
			for(var i = 1; i <= layer; i++) {
				var pickerElement = $.dom(pickerBuffer)[0];
				pickerElement.style.width = width;
				self.body.appendChild(pickerElement);
				var picker = $(pickerElement).picker();
				self.pickers.push(picker);
				pickerElement.addEventListener('change', function(event) {
					var nextPickerElement = this.nextSibling;
					if(nextPickerElement && nextPickerElement.picker) {
						var eventData = event.detail || {};
						var preItem = eventData.item || {};
						nextPickerElement.picker.setItems(preItem.children);
					}
				}, false);
			}
		},
		//填充数据
		setData: function(data) {
			var self = this;
			data = data || [];
			self.pickers[0].setItems(data);
		},
		//获取选中的项（数组）
		getSelectedItems: function() {
			var self = this;
			var items = [];
			for(var i in self.pickers) {
				var picker = self.pickers[i];
				items.push(picker.getSelectedItem() || {});
			}
			return items;
		},
		//显示
		show: function(callback) {
			var self = this;
			self.callback = callback;
			self.mask.show();
			document.body.classList.add($.className('poppicker-active-for-page'));
			self.panel.classList.add($.className('active'));
			//处理物理返回键
			self.__back = $.back;
			$.back = function() {
				self.hide();
			};
		},
		//隐藏
		hide: function() {
			var self = this;
			if(self.disposed) return;
			self.panel.classList.remove($.className('active'));
			self.mask.close();
			document.body.classList.remove($.className('poppicker-active-for-page'));
			//处理物理返回键
			$.back = self.__back;
		},
		dispose: function() {
			var self = this;
			self.hide();
			setTimeout(function() {
				self.panel.parentNode.removeChild(self.panel);
				for(var name in self) {
					self[name] = null;
					delete self[name];
				};
				self.disposed = true;
			}, 300);
		}
	});

}(mui, document);