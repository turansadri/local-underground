!(function(e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, i) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 60));
})([
  function(e, t) {
    var n = (e.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
        ? self
        : Function('return this')());
    'number' == typeof __g && (__g = n);
  },
  function(e, t, n) {
    var i = n(29)('wks'),
      o = n(21),
      a = n(0).Symbol,
      r = 'function' == typeof a;
    (e.exports = function(e) {
      return i[e] || (i[e] = (r && a[e]) || (r ? a : o)('Symbol.' + e));
    }).store = i;
  },
  function(e, t) {
    var n = (e.exports = { version: '2.6.5' });
    'number' == typeof __e && (__e = n);
  },
  function(e, t, n) {
    'use strict';
    t.__esModule = !0;
    var i = r(n(69)),
      o = r(n(82)),
      a =
        'function' == typeof o.default && 'symbol' == typeof i.default
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof o.default &&
                e.constructor === o.default &&
                e !== o.default.prototype
                ? 'symbol'
                : typeof e;
            };
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default =
      'function' == typeof o.default && 'symbol' === a(i.default)
        ? function(e) {
            return void 0 === e ? 'undefined' : a(e);
          }
        : function(e) {
            return e &&
              'function' == typeof o.default &&
              e.constructor === o.default &&
              e !== o.default.prototype
              ? 'symbol'
              : void 0 === e
              ? 'undefined'
              : a(e);
          };
  },
  function(e, t, n) {
    var i = n(5),
      o = n(35),
      a = n(24),
      r = Object.defineProperty;
    t.f = n(6)
      ? Object.defineProperty
      : function(e, t, n) {
          if ((i(e), (t = a(t, !0)), i(n), o))
            try {
              return r(e, t, n);
            } catch (e) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported!');
          return 'value' in n && (e[t] = n.value), e;
        };
  },
  function(e, t, n) {
    var i = n(8);
    e.exports = function(e) {
      if (!i(e)) throw TypeError(e + ' is not an object!');
      return e;
    };
  },
  function(e, t, n) {
    e.exports = !n(19)(function() {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function() {
            return 7;
          },
        }).a
      );
    });
  },
  function(e, t, n) {
    var i = n(4),
      o = n(20);
    e.exports = n(6)
      ? function(e, t, n) {
          return i.f(e, t, o(1, n));
        }
      : function(e, t, n) {
          return (e[t] = n), e;
        };
  },
  function(e, t) {
    e.exports = function(e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e;
    };
  },
  function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return n.call(e, t);
    };
  },
  function(e, t, n) {
    var i = n(0),
      o = n(2),
      a = n(17),
      r = n(7),
      s = n(9),
      c = function(e, t, n) {
        var l,
          p,
          d,
          m = e & c.F,
          u = e & c.G,
          _ = e & c.S,
          h = e & c.P,
          g = e & c.B,
          f = e & c.W,
          b = u ? o : o[t] || (o[t] = {}),
          w = b.prototype,
          v = u ? i : _ ? i[t] : (i[t] || {}).prototype;
        for (l in (u && (n = t), n))
          ((p = !m && v && void 0 !== v[l]) && s(b, l)) ||
            ((d = p ? v[l] : n[l]),
            (b[l] =
              u && 'function' != typeof v[l]
                ? n[l]
                : g && p
                ? a(d, i)
                : f && v[l] == d
                ? (function(e) {
                    var t = function(t, n, i) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(t);
                          case 2:
                            return new e(t, n);
                        }
                        return new e(t, n, i);
                      }
                      return e.apply(this, arguments);
                    };
                    return (t.prototype = e.prototype), t;
                  })(d)
                : h && 'function' == typeof d
                ? a(Function.call, d)
                : d),
            h &&
              (((b.virtual || (b.virtual = {}))[l] = d),
              e & c.R && w && !w[l] && r(w, l, d)));
      };
    (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c);
  },
  function(e, t, n) {
    var i = n(74),
      o = n(26);
    e.exports = function(e) {
      return i(o(e));
    };
  },
  function(e, t, n) {
    'use strict';
    (t.__esModule = !0),
      (t.default = function(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      });
  },
  function(e, t, n) {
    'use strict';
    t.__esModule = !0;
    var i = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(62));
    t.default = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            (0, i.default)(e, o.key, o);
        }
      }
      return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      };
    })();
  },
  function(e, t) {
    e.exports = !0;
  },
  function(e, t) {
    e.exports = {};
  },
  function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
      return n.call(e).slice(8, -1);
    };
  },
  function(e, t, n) {
    var i = n(18);
    e.exports = function(e, t, n) {
      if ((i(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function(n) {
            return e.call(t, n);
          };
        case 2:
          return function(n, i) {
            return e.call(t, n, i);
          };
        case 3:
          return function(n, i, o) {
            return e.call(t, n, i, o);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      if ('function' != typeof e) throw TypeError(e + ' is not a function!');
      return e;
    };
  },
  function(e, t) {
    e.exports = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function(e, t) {
    var n = 0,
      i = Math.random();
    e.exports = function(e) {
      return 'Symbol('.concat(
        void 0 === e ? '' : e,
        ')_',
        (++n + i).toString(36),
      );
    };
  },
  function(e, t, n) {
    var i = n(4).f,
      o = n(9),
      a = n(1)('toStringTag');
    e.exports = function(e, t, n) {
      e &&
        !o((e = n ? e : e.prototype), a) &&
        i(e, a, { configurable: !0, value: t });
    };
  },
  function(e, t, n) {
    var i = n(8),
      o = n(0).document,
      a = i(o) && i(o.createElement);
    e.exports = function(e) {
      return a ? o.createElement(e) : {};
    };
  },
  function(e, t, n) {
    var i = n(8);
    e.exports = function(e, t) {
      if (!i(e)) return e;
      var n, o;
      if (t && 'function' == typeof (n = e.toString) && !i((o = n.call(e))))
        return o;
      if ('function' == typeof (n = e.valueOf) && !i((o = n.call(e)))) return o;
      if (!t && 'function' == typeof (n = e.toString) && !i((o = n.call(e))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(e, t) {
    var n = Math.ceil,
      i = Math.floor;
    e.exports = function(e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
    };
  },
  function(e, t) {
    e.exports = function(e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function(e, t, n) {
    var i = n(41),
      o = n(30);
    e.exports =
      Object.keys ||
      function(e) {
        return i(e, o);
      };
  },
  function(e, t, n) {
    var i = n(29)('keys'),
      o = n(21);
    e.exports = function(e) {
      return i[e] || (i[e] = o(e));
    };
  },
  function(e, t, n) {
    var i = n(2),
      o = n(0),
      a = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
    (e.exports = function(e, t) {
      return a[e] || (a[e] = void 0 !== t ? t : {});
    })('versions', []).push({
      version: i.version,
      mode: n(14) ? 'pure' : 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
    });
  },
  function(e, t) {
    e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
      ',',
    );
  },
  function(e, t, n) {
    t.f = n(1);
  },
  function(e, t, n) {
    var i = n(0),
      o = n(2),
      a = n(14),
      r = n(31),
      s = n(4).f;
    e.exports = function(e) {
      var t = o.Symbol || (o.Symbol = a ? {} : i.Symbol || {});
      '_' == e.charAt(0) || e in t || s(t, e, { value: r.f(e) });
    };
  },
  function(e, t) {
    t.f = {}.propertyIsEnumerable;
  },
  function(e, t, n) {
    'use strict';
    var i = n(18);
    e.exports.f = function(e) {
      return new (function(e) {
        var t, n;
        (this.promise = new e(function(e, i) {
          if (void 0 !== t || void 0 !== n)
            throw TypeError('Bad Promise constructor');
          (t = e), (n = i);
        })),
          (this.resolve = i(t)),
          (this.reject = i(n));
      })(e);
    };
  },
  function(e, t, n) {
    e.exports =
      !n(6) &&
      !n(19)(function() {
        return (
          7 !=
          Object.defineProperty(n(23)('div'), 'a', {
            get: function() {
              return 7;
            },
          }).a
        );
      });
  },
  function(e, t, n) {
    e.exports = n(67);
  },
  function(e, t, n) {
    'use strict';
    var i = n(71)(!0);
    n(38)(
      String,
      'String',
      function(e) {
        (this._t = String(e)), (this._i = 0);
      },
      function() {
        var e,
          t = this._t,
          n = this._i;
        return n >= t.length
          ? { value: void 0, done: !0 }
          : ((e = i(t, n)), (this._i += e.length), { value: e, done: !1 });
      },
    );
  },
  function(e, t, n) {
    'use strict';
    var i = n(14),
      o = n(10),
      a = n(39),
      r = n(7),
      s = n(15),
      c = n(72),
      l = n(22),
      p = n(77),
      d = n(1)('iterator'),
      m = !([].keys && 'next' in [].keys()),
      u = function() {
        return this;
      };
    e.exports = function(e, t, n, _, h, g, f) {
      c(n, t, _);
      var b,
        w,
        v,
        y = function(e) {
          if (!m && e in S) return S[e];
          switch (e) {
            case 'keys':
            case 'values':
              return function() {
                return new n(this, e);
              };
          }
          return function() {
            return new n(this, e);
          };
        },
        x = t + ' Iterator',
        k = 'values' == h,
        j = !1,
        S = e.prototype,
        T = S[d] || S['@@iterator'] || (h && S[h]),
        $ = T || y(h),
        C = h ? (k ? y('entries') : $) : void 0,
        F = ('Array' == t && S.entries) || T;
      if (
        (F &&
          (v = p(F.call(new e()))) !== Object.prototype &&
          v.next &&
          (l(v, x, !0), i || 'function' == typeof v[d] || r(v, d, u)),
        k &&
          T &&
          'values' !== T.name &&
          ((j = !0),
          ($ = function() {
            return T.call(this);
          })),
        (i && !f) || (!m && !j && S[d]) || r(S, d, $),
        (s[t] = $),
        (s[x] = u),
        h)
      )
        if (
          ((b = {
            values: k ? $ : y('values'),
            keys: g ? $ : y('keys'),
            entries: C,
          }),
          f)
        )
          for (w in b) w in S || a(S, w, b[w]);
        else o(o.P + o.F * (m || j), t, b);
      return b;
    };
  },
  function(e, t, n) {
    e.exports = n(7);
  },
  function(e, t, n) {
    var i = n(5),
      o = n(73),
      a = n(30),
      r = n(28)('IE_PROTO'),
      s = function() {},
      c = function() {
        var e,
          t = n(23)('iframe'),
          i = a.length;
        for (
          t.style.display = 'none',
            n(43).appendChild(t),
            t.src = 'javascript:',
            (e = t.contentWindow.document).open(),
            e.write('<script>document.F=Object</script>'),
            e.close(),
            c = e.F;
          i--;

        )
          delete c.prototype[a[i]];
        return c();
      };
    e.exports =
      Object.create ||
      function(e, t) {
        var n;
        return (
          null !== e
            ? ((s.prototype = i(e)),
              (n = new s()),
              (s.prototype = null),
              (n[r] = e))
            : (n = c()),
          void 0 === t ? n : o(n, t)
        );
      };
  },
  function(e, t, n) {
    var i = n(9),
      o = n(11),
      a = n(75)(!1),
      r = n(28)('IE_PROTO');
    e.exports = function(e, t) {
      var n,
        s = o(e),
        c = 0,
        l = [];
      for (n in s) n != r && i(s, n) && l.push(n);
      for (; t.length > c; ) i(s, (n = t[c++])) && (~a(l, n) || l.push(n));
      return l;
    };
  },
  function(e, t, n) {
    var i = n(25),
      o = Math.min;
    e.exports = function(e) {
      return e > 0 ? o(i(e), 9007199254740991) : 0;
    };
  },
  function(e, t, n) {
    var i = n(0).document;
    e.exports = i && i.documentElement;
  },
  function(e, t, n) {
    n(79);
    for (
      var i = n(0),
        o = n(7),
        a = n(15),
        r = n(1)('toStringTag'),
        s = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
          ',',
        ),
        c = 0;
      c < s.length;
      c++
    ) {
      var l = s[c],
        p = i[l],
        d = p && p.prototype;
      d && !d[r] && o(d, r, l), (a[l] = a.Array);
    }
  },
  function(e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function(e, t, n) {
    var i = n(41),
      o = n(30).concat('length', 'prototype');
    t.f =
      Object.getOwnPropertyNames ||
      function(e) {
        return i(e, o);
      };
  },
  function(e, t) {},
  function(e, t, n) {
    'use strict';
    t.__esModule = !0;
    var i = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(92));
    t.default = function(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new i.default(function(e, n) {
          return (function o(a, r) {
            try {
              var s = t[a](r),
                c = s.value;
            } catch (e) {
              return void n(e);
            }
            if (!s.done)
              return i.default.resolve(c).then(
                function(e) {
                  o('next', e);
                },
                function(e) {
                  o('throw', e);
                },
              );
            e(c);
          })('next');
        });
      };
    };
  },
  function(e, t, n) {
    var i = n(16),
      o = n(1)('toStringTag'),
      a =
        'Arguments' ==
        i(
          (function() {
            return arguments;
          })(),
        );
    e.exports = function(e) {
      var t, n, r;
      return void 0 === e
        ? 'Undefined'
        : null === e
        ? 'Null'
        : 'string' ==
          typeof (n = (function(e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), o))
        ? n
        : a
        ? i(t)
        : 'Object' == (r = i(t)) && 'function' == typeof t.callee
        ? 'Arguments'
        : r;
    };
  },
  function(e, t, n) {
    var i = n(5),
      o = n(18),
      a = n(1)('species');
    e.exports = function(e, t) {
      var n,
        r = i(e).constructor;
      return void 0 === r || void 0 == (n = i(r)[a]) ? t : o(n);
    };
  },
  function(e, t, n) {
    var i,
      o,
      a,
      r = n(17),
      s = n(100),
      c = n(43),
      l = n(23),
      p = n(0),
      d = p.process,
      m = p.setImmediate,
      u = p.clearImmediate,
      _ = p.MessageChannel,
      h = p.Dispatch,
      g = 0,
      f = {},
      b = function() {
        var e = +this;
        if (f.hasOwnProperty(e)) {
          var t = f[e];
          delete f[e], t();
        }
      },
      w = function(e) {
        b.call(e.data);
      };
    (m && u) ||
      ((m = function(e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return (
          (f[++g] = function() {
            s('function' == typeof e ? e : Function(e), t);
          }),
          i(g),
          g
        );
      }),
      (u = function(e) {
        delete f[e];
      }),
      'process' == n(16)(d)
        ? (i = function(e) {
            d.nextTick(r(b, e, 1));
          })
        : h && h.now
        ? (i = function(e) {
            h.now(r(b, e, 1));
          })
        : _
        ? ((a = (o = new _()).port2),
          (o.port1.onmessage = w),
          (i = r(a.postMessage, a, 1)))
        : p.addEventListener &&
          'function' == typeof postMessage &&
          !p.importScripts
        ? ((i = function(e) {
            p.postMessage(e + '', '*');
          }),
          p.addEventListener('message', w, !1))
        : (i =
            'onreadystatechange' in l('script')
              ? function(e) {
                  c.appendChild(l('script')).onreadystatechange = function() {
                    c.removeChild(this), b.call(e);
                  };
                }
              : function(e) {
                  setTimeout(r(b, e, 1), 0);
                })),
      (e.exports = { set: m, clear: u });
  },
  function(e, t) {
    e.exports = function(e) {
      try {
        return { e: !1, v: e() };
      } catch (e) {
        return { e: !0, v: e };
      }
    };
  },
  function(e, t, n) {
    var i = n(5),
      o = n(8),
      a = n(34);
    e.exports = function(e, t) {
      if ((i(e), o(t) && t.constructor === e)) return t;
      var n = a.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.handleAjaxError = function(e, t) {
      var n =
        '\n\t\t\t<p>' +
        wpmdb_strings.ajax_php_errors +
        ':</p>\n\t\t\t<p>' +
        t.message +
        '</p>\n\t';
      wpmdb.current_migration.setState(e, n, 'error'),
        (wpmdb.common.migration_error = !0),
        wpmdb.functions.migration_complete_events(),
        console.error('🚨 🚒', t);
    }),
      (t.throwMDBError = function(e) {
        var t = void 0;
        throw (void 0 !== e.body &&
          ((wpmdb.common.non_fatal_errors += e.body), (t = e.body)),
        void 0 !== e.msg && (t = e.msg),
        new Error(t));
      }),
      (t.jQueryAjaxError = function(e, t) {
        return (
          void 0 !== t.responseText && '' !== t.responseText
            ? (e = t.responseText)
            : void 0 !== t.statusText && (e = t.statusText),
          console.error(t),
          wpmdb.current_migration.setState(
            wpmdb_strings.migration_failed,
            e,
            'error',
          ),
          (wpmdb.common.migration_error = !0),
          wpmdb.functions.migration_complete_events(),
          e
        );
      }),
      (t.doNextStep = function(e, t, n) {
        return (
          (wpmdb.common.next_step_in_migration = { fn: e, args: t }),
          wpmdb.functions.execute_next_step(n)
        );
      });
  },
  function(e, t, n) {
    'use strict';
    var i = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(3));
    var o = n(56),
      a = jQuery,
      r = Backbone.Model.extend({
        defaults: {
          _initialStages: null,
          stages: null,
          activeStageName: null,
          stageModels: null,
          localTableRows: null,
          localTableSizes: null,
          remoteTableRows: null,
          remoteTableSizes: null,
          migrationStatus: 'active',
          migrationIntent: 'savefile',
        },
        initialize: function() {
          this.set('stageModels', {}),
            this.set('_initialStages', this.get('stages')),
            this.set('stages', []),
            _.each(
              this.get('_initialStages'),
              function(e, t, n) {
                this.addStage(e.name, t, n);
              },
              this,
            );
        },
        addStage: function(e, t, n, o) {
          var r,
            s = [];
          return (
            _.each(
              t,
              function(e) {
                var t, i;
                'remote' === n
                  ? ((t = this.get('remoteTableSizes')[e]),
                    (i = this.get('remoteTableRows')[e]))
                  : ((t = this.get('localTableSizes')[e]),
                    (i = this.get('localTableRows')[e])),
                  s.push({ name: e, size: t, rows: i });
              },
              this,
            ),
            (r = { name: e, items: s, dataType: n }),
            'object' === (void 0 === o ? 'undefined' : (0, i.default)(o)) &&
              (r = a.extend(r, o)),
            this.addStageModel(r),
            this.trigger('stage:added', this.get('stageModels')[e]),
            this.get('stageModels')[e].on(
              'change',
              function() {
                this.trigger('change');
              },
              this,
            ),
            this.getStageModel(r.name)
          );
        },
        addStageItem: function(e, t, n, i) {
          var o =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '';
          this.getStageModel(e).addItem(t, n, i, o);
        },
        addStageModel: function(e) {
          var t = this.get('stages'),
            n = this.get('stageModels'),
            i = new o(e);
          t.push(e),
            (n[e.name] = i),
            this.set('stages', t),
            this.set('stageModels', n);
        },
        getStageModel: function(e) {
          return this.get('stageModels')[e];
        },
        getStageItems: function(e, t) {
          var n = this.getStageModel(e).get('items');
          return void 0 === t
            ? n
            : n.map(function(e) {
                return e[t];
              });
        },
        setActiveStage: function(e) {
          this.setStageComplete(),
            this.set('activeStageName', e),
            this.getStageModel(e).set('status', 'active'),
            this.trigger('change:activeStage');
        },
        setStageComplete: function(e) {
          e || (e = this.get('activeStageName')),
            null !== e && this.getStageModel(e).set('status', 'complete'),
            (wpmdb.current_migration.currentStageNum =
              wpmdb.current_migration.currentStageNum + 1);
        },
        setMigrationComplete: function() {
          var e = this.getStageModel(this.get('activeStageName'));
          this.setStageComplete(),
            this.trigger('migrationComplete'),
            this.set('migrationStatus', 'complete'),
            e.activateTab();
        },
      });
    e.exports = r;
  },
  function(e, t, n) {
    'use strict';
    var i = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(3));
    var o = jQuery,
      a = Backbone.Model.extend({
        defaults: {
          status: 'queued',
          _initialItems: null,
          items: null,
          names: null,
          lookupItems: null,
          totalSize: 0,
          totalTransferred: 0,
          dataType: 'local',
          name: '',
          itemsComplete: 0,
          itemsCompleteArr: [],
          strings: null,
        },
        initialize: function() {
          this.initStrings(),
            this.set('_initialItems', this.get('items').slice()),
            this.set('items', []),
            this.set('names', []),
            this.set('lookupItems', {}),
            this.set('itemsCompleteArr', []),
            _.each(
              this.get('_initialItems'),
              function(e) {
                this.addItem(e.name, e.size, e.rows);
              },
              this,
            ),
            this.on('view:initialized', this.triggerItemViewInit),
            this.on('change', function() {
              wpmdb.current_migration.updateTitleElem();
            });
        },
        initStrings: function() {
          var e = {
              stage_title: this.get('name'),
              migrated: wpmdb_strings.migrated,
              queued: wpmdb_strings.queued,
              active: wpmdb_strings.running,
              complete: wpmdb_strings.complete,
              hide: wpmdb_strings.hide,
              show: wpmdb_strings.show,
              itemsName: wpmdb_strings.tables,
            },
            t = this.get('strings');
          (t =
            'object' === (void 0 === t ? 'undefined' : (0, i.default)(t))
              ? t
              : {}),
            ((t = o.extend(e, t)).items_migrated =
              t.itemsName + ' ' + t.migrated),
            (t.hide_items = t.hide + ' ' + t.itemsName),
            (t.show_items = t.show + ' ' + t.itemsName),
            this.set('strings', t);
        },
        addItem: function(e, t, n, i) {
          var a = this.get('items'),
            r = this.get('names');
          if (!~r.indexOf(e)) {
            r.push(e);
            var s = {
              name: e,
              size: t,
              rows: n || t,
              stageName: this.get('name'),
              transferred: 0,
              rowsTransferred: 0,
              complete: !1,
              title: null,
              get $title() {
                return this.title || this.createTitleElem();
              },
              set $title(e) {
                this.title = e;
              },
              createTitleElem: function() {
                return (
                  (this.title = o('<p>')
                    .addClass('item-info')
                    .append(
                      o('<span class="name" />').text(
                        this.displayName || this.name,
                      ),
                    )
                    .append(' ')
                    .append(
                      o('<span class="size" />').text(
                        '(' +
                          wpmdb.functions.convertKBSizeToHRFixed(s.size) +
                          ')',
                      ),
                    )),
                  this.title
                );
              },
              progress: null,
              get $progress() {
                return this.progress || this.createProgElem();
              },
              set $progress(e) {
                this.progress = e;
              },
              createProgElem: function() {
                return (
                  (this.progress = o('<div class="progress-bar"/>').css(
                    'width',
                    '0%',
                  )),
                  this.progress
                );
              },
              el: null,
              get $el() {
                return this.el || this.createMainElem();
              },
              set $el(e) {
                this.el = e;
              },
              createMainElem: function() {
                return (
                  (this.el = o('<div class="item-progress" />')),
                  this.el.append(this.$title),
                  this.el.append(this.$progress),
                  this.el.append('<span class="dashicons dashicons-yes"/>'),
                  this.el.attr('id', 'item-' + this.name),
                  this.el.attr('data-stage', this.stageName),
                  this.el
                );
              },
              updateProgress: function(e) {
                var t = this.$progress;
                window.requestAnimationFrame(
                  function() {
                    t.css('width', e + '%');
                  }.bind(this),
                );
              },
            };
            void 0 !== i && i.length && (s.displayName = i),
              a.push(s),
              (this.get('lookupItems')[e] = a.length - 1),
              this.set(
                'totalSize',
                parseFloat(this.get('totalSize')) + parseFloat(t),
              ),
              this.trigger('item:added', s);
          }
        },
        triggerItemViewInit: function() {
          var e = this.get('items'),
            t = this;
          _.each(e, function(e) {
            t.trigger('item:added', e);
          });
        },
        getTotalSizeTransferred: function() {
          return this.get('totalTransferred');
        },
        countItemsComplete: function() {
          return this.get('itemsComplete');
        },
        getTotalProgressPercent: function() {
          var e = this.getTotalSizeTransferred(),
            t = this.get('totalSize');
          return 0 >= e || 0 >= t
            ? 0
            : Math.min(100, Math.round((e / t) * 100));
        },
        activateTab: function() {
          this.trigger('activateTab'),
            wpmdb.current_migration.model.trigger('change:activeStage');
        },
        setItemComplete: function(e) {
          var t = this.get('itemsCompleteArr');
          if (!~t.indexOf(e)) {
            t.push(e);
            var n = this.getItemByName(e),
              i = this.get('totalTransferred'),
              o = this.get('itemsComplete');
            this.set('itemsComplete', ++o),
              (i += n.size - n.transferred),
              this.set('totalTransferred', i),
              (n.transferred = n.size),
              (n.complete = !0),
              (n.rowsTransferred = n.rows),
              this.trigger('change change:items', n);
          }
        },
        setItemPercentTransferred: function(e, t, n, i) {
          var o = this.getItemByName(e),
            a = n / 1e3;
          if (1 === t) {
            (o.complete = !0), (o.transferred = a);
            var r = this.get('itemsComplete');
            this.set('itemsComplete', ++r),
              this.trigger('change change:items', o);
          }
          (o.transferred = i / 1e3), (o.exactPercent = t);
          var s = this.get('totalTransferred');
          (s += a),
            this.set('totalTransferred', s),
            this.trigger('change change:items', o);
        },
        setItemRowsTransferred: function(e, t) {
          var n,
            i,
            o = this.getItemByName(e),
            a = this.get('totalTransferred');
          1 !== (n = -1 === parseInt(t) ? 1 : Math.min(1, t / o.rows))
            ? ((a += (i = o.size * n) - o.transferred),
              this.set('totalTransferred', a),
              (o.transferred = i),
              (o.rowsTransferred = t),
              this.trigger('change change:items', o))
            : this.setItemComplete(e);
        },
        getItemByName: function(e) {
          var t = this.get('items')[this.get('lookupItems')[e]] || {};
          return e === t.name ? t : this.determineItemByName(e);
        },
        determineItemByName: function(e) {
          for (var t = this.get('items'), n = 0; n < t.length; n++) {
            var i = t[n];
            if (e === i.name) return (this.get('lookupItems').itemName = n), i;
          }
        },
      });
    e.exports = a;
  },
  function(e, t, n) {
    'use strict';
    var i = n(58),
      o = (jQuery,
      Backbone.View.extend({
        tagName: 'div',
        className: 'migration-progress-stages',
        id: 'migration-progress-stages',
        self: void 0,
        initialize: function() {
          this.$el.empty(),
            this.model.on(
              'stage:added',
              function(e) {
                this.addStageView(e);
              },
              this,
            ),
            _.each(this.model.get('stageModels'), this.addStageView, this);
        },
        addStageView: function(e) {
          var t = new i({ model: e });
          e.trigger('view:initialized', t),
            this.$el.append(t.$el),
            this.$el
              .parent()
              .find('.stage-tabs')
              .append(t.$tabElem);
        },
      }));
    e.exports = o;
  },
  function(e, t, n) {
    'use strict';
    var i = jQuery,
      o = Backbone.View.extend({
        tagName: 'div',
        className: 'migration-progress-stage-container hide-tables',
        $totalProgressElem: null,
        $tabElem: null,
        $showHideTablesElem: null,
        $pauseBeforeFinalizeElem: null,
        $pauseBeforeFinalizeCheckbox: null,
        $itemsContainer: null,
        itemViews: null,
        maxDomNodes: 140,
        visibleDomNodes: 0,
        itemCount: 0,
        percentDone: 0,
        sizeDone: 0,
        tablesDone: 0,
        queuedElements: null,
        $truncationNotice: null,
        $truncationNoticeHiddenItems: null,
        shouldHideItemProgress: !1,
        initialize: function() {
          this.$el.empty(),
            this.$el
              .attr('data-stage', this.model.get('name'))
              .addClass('queued ' + this.model.get('name')),
            (this.queuedElements = []),
            this.initTotalProgressElem(),
            wpmdb.current_migration.view.$el
              .parent()
              .find('.stage-tabs')
              .after(this.$totalProgressElem),
            (this.$itemsContainer = i('<div class=progress-items />')),
            this.$el.append(this.$itemsContainer),
            this.initTabElem(),
            this.model.on('item:added', this.maybeAddElementToView, this),
            _.each(
              this.model.get('itemModels'),
              this.maybeAddElementToView,
              this,
            ),
            this.model.on(
              'change',
              function() {
                this.updateProgressElem(), this.updateStageTotals();
              },
              this,
            ),
            this.model.on(
              'change:status',
              function(e) {
                this.$el
                  .removeClass('queued active')
                  .addClass(this.model.get('status')),
                  this.$totalProgressElem
                    .removeClass('queued active')
                    .addClass(this.model.get('status')),
                  this.$tabElem
                    .removeClass('queued active')
                    .addClass(this.model.get('status'))
                    .find('.stage-status')
                    .text(this.model.get('strings')[this.model.get('status')]);
              },
              this,
            ),
            this.model.on(
              'change:items',
              function(e) {
                e.name && this.setItemProgress(e);
              },
              this,
            ),
            this.model.on(
              'activateTab',
              function() {
                'complete' ===
                  wpmdb.current_migration.model.get('migrationStatus') &&
                  (this.$totalProgressElem
                    .addClass('active')
                    .siblings()
                    .removeClass('active'),
                  this.$tabElem
                    .addClass('active')
                    .siblings()
                    .removeClass('active'),
                  this.$el
                    .addClass('active')
                    .siblings()
                    .removeClass('active'));
              },
              this,
            );
        },
        initTotalProgressElem: function() {
          this.initShowHideTablesElem(),
            this.initPauseBeforeFinalizeElem(),
            (this.$totalProgressElem = i(
              '<div class="stage-progress ' + this.model.get('name') + '" />',
            )
              .append(
                '<span class=percent-complete>0</span>% ' +
                  this.model.get('strings').complete +
                  ' ',
              )
              .append(
                '<span class="size-complete-wrap">(<span class=size-complete>0 MB</span> / <span class=size-total>0 MB</span>) </span>',
              )
              .append(
                '<span class="items-complete-wrap"><span class=items-complete>0</span> <span class=lowercase >of</span> <span class=items-total>0</span> ' +
                  this.model.get('strings').items_migrated +
                  '</span>',
              )
              .append(this.$showHideTablesElem)
              .append(
                '<div class=progress-bar-wrapper><div class=progress-bar /></div>',
              )),
            this.updateStageTotals();
        },
        initShowHideTablesElem: function() {
          this.$showHideTablesElem = i('<a class=show-hide-tables/>').text(
            this.model.get('strings').show_items,
          );
          var e = this;
          this.$showHideTablesElem.on(
            'click show-hide-progress-tables',
            function() {
              var t;
              e.$el.hasClass('hide-tables')
                ? ((t = !1),
                  e.$el.add(e.$el.siblings()).removeClass('hide-tables'),
                  e.$showHideTablesElem.text(e.model.get('strings').hide_items))
                : ((t = !0),
                  e.$el.add(e.$el.siblings()).addClass('hide-tables'),
                  e.$showHideTablesElem.text(
                    e.model.get('strings').show_items,
                  )),
                Boolean(t) !== Boolean(wpmdb_data.prog_tables_hidden) &&
                  ((wpmdb_data.prog_tables_visibility_changed = !0),
                  (wpmdb_data.prog_tables_hidden = t));
            },
          ),
            wpmdb_data.prog_tables_hidden ||
              this.$showHideTablesElem.triggerHandler(
                'show-hide-progress-tables',
              ),
            this.model.on('change:status activateTab', function() {
              wpmdb_data.prog_tables_hidden
                ? e.$showHideTablesElem.text(e.model.get('strings').show_items)
                : e.$showHideTablesElem.text(e.model.get('strings').hide_items);
            });
        },
        initPauseBeforeFinalizeElem: function() {
          (this.$pauseBeforeFinalizeElem = i('.pause-before-finalize')),
            (this.$pauseBeforeFinalizeCheckbox = this.$pauseBeforeFinalizeElem.find(
              'input[type=checkbox]',
            ));
          var e = this,
            t = !1,
            n = wpmdb.current_migration.model.get('migrationIntent');
          wpmdb_data.pause_before_finalize && (t = !0),
            this.$pauseBeforeFinalizeCheckbox.prop('checked', t),
            -1 !== i.inArray(n, ['push', 'pull', 'find_replace', 'import'])
              ? ('find_replace' === n &&
                  i('#pause-before-finalize-label').text(
                    wpmdb_strings.pause_before_finalize_find_replace,
                  ),
                this.$pauseBeforeFinalizeElem.show())
              : this.$pauseBeforeFinalizeElem.hide(),
            wpmdb.current_migration.model.on('change:activeStage', function() {
              -1 !==
                i.inArray(
                  wpmdb.current_migration.model.get('activeStageName'),
                  ['media', 'themes', 'plugins'],
                ) && e.$pauseBeforeFinalizeElem.hide();
            }),
            this.$pauseBeforeFinalizeElem.on('click', function() {
              var t = Boolean(e.$pauseBeforeFinalizeCheckbox.is(':checked'));
              t !== Boolean(wpmdb_data.pause_before_finalize) &&
                ((wpmdb_data.pause_before_finalize_changed = !0),
                (wpmdb_data.pause_before_finalize = t));
            });
        },
        initTabElem: function() {
          var e = this;
          this.$tabElem = i('<a class=stage-tab>')
            .append(
              '<span class=stage-title>' +
                this.model.get('strings').stage_title +
                '</span> ',
            )
            .append(
              '<span class=stage-status>' +
                this.model.get('strings').queued +
                '</span> ',
            )
            .on('click', function() {
              e.model.activateTab();
            });
        },
        updateProgressElem: function() {
          var e = Math.max(0, this.model.getTotalProgressPercent()),
            t = wpmdb.functions.convertKBSizeToHRFixed(
              Math.min(
                this.model.getTotalSizeTransferred(),
                this.model.get('totalSize'),
              ),
            ),
            n = Math.min(
              this.model.countItemsComplete(),
              this.model.get('items').length,
            );
          'complete' === this.model.get('status') &&
            0 === this.model.get('totalSize') &&
            ((e = 100), this.$showHideTablesElem.fadeOut()),
            e !== this.percentDone &&
              ((this.percentDone = e),
              this.$totalProgressElem.find('.percent-complete').text(e),
              this.$totalProgressElem
                .find('.progress-bar-wrapper .progress-bar')
                .css({ width: e + '%' })),
            t != this.sizeDone &&
              ((this.sizeDone = t),
              this.$totalProgressElem.find('.size-complete').text(t)),
            n != this.tablesDone &&
              ((this.tablesDone = n),
              this.$totalProgressElem
                .find('.items-complete')
                .text(wpmdb.functions.wpmdb_add_commas(n)));
        },
        updateStageTotals: function(e) {
          if (
            (e = e || this.model.get('items').length) !== this.itemCount &&
            ((this.itemCount = e),
            this.$totalProgressElem
              .find('.items-total')
              .text(wpmdb.functions.wpmdb_add_commas(e)),
            this.$totalProgressElem
              .find('.size-total')
              .text(
                wpmdb.functions.convertKBSizeToHRFixed(
                  this.model.get('totalSize'),
                ),
              ),
            !this.shouldHideItemProgress && 500 < e)
          ) {
            var t = this.model.get('name').toLowerCase();
            ('themes' != t && 'plugins' !== t) || this.hideItemProgress();
          }
        },
        hideItemProgress: function() {
          this.shouldHideItemProgress ||
            ((this.shouldHideItemProgress = !0),
            this.$itemsContainer.empty(),
            this.$showHideTablesElem && this.$showHideTablesElem.hide());
        },
        maybeAddElementToView: function(e) {
          var t = this.shouldHideItemProgress ? 0 : this.maxDomNodes;
          this.visibleDomNodes < t
            ? (++this.visibleDomNodes, this.$itemsContainer.append(e.$el))
            : (this.queuedElements.push(e),
              this.$truncationNotice
                ? this.updateTruncationNotice()
                : this.showTruncationNotice());
        },
        showTruncationNotice: function() {
          if (!this.$truncationNotice) {
            var e = this.shouldHideItemProgress
              ? this.model.get('items').length
              : this.queuedElements.length;
            (this.$truncationNotice = i(
              '<div class="truncation-notice" >' +
                wpmdb_strings.progress_items_truncated_msg.replace(
                  '%1$s',
                  '<span class="hidden-items">' +
                    wpmdb.functions.wpmdb_add_commas(e) +
                    '</span>',
                ) +
                '</div>',
            )),
              (this.$truncationNoticeHiddenItems = this.$truncationNotice.find(
                '.hidden-items',
              )),
              this.$itemsContainer.after(this.$truncationNotice);
          }
        },
        updateTruncationNotice: function() {
          var e = this.shouldHideItemProgress
            ? this.model.get('items').length
            : this.queuedElements.length;
          this.$truncationNoticeHiddenItems.text(
            wpmdb.functions.wpmdb_add_commas(e),
          );
        },
        getNextElementForView: function(e) {
          var t;
          return (
            !this.shouldHideItemProgress &&
            (this.queuedElements.length &&
              (e && this.queuedElements.push(e),
              (e = (t = this.queuedElements.shift()) instanceof i ? t : t.$el)),
            e)
          );
        },
        setItemProgress: function(e) {
          var t = Math.min(100, Math.ceil((e.transferred / e.size) * 100));
          e.hasOwnProperty('exactPercent') && (t = 100 * e.exactPercent),
            0 === e.size && (t = 100),
            e.updateProgress(t),
            (100 <= t || 0 === e.size) && this.elemComplete(e);
        },
        elemComplete: function(e) {
          if (!this.shouldHideItemProgress) {
            var t = e.$el.addClass('complete');
            if (1 !== this.model.get('items').length) {
              var n = this.getNextElementForView(t),
                i = t.height(),
                o = t.css('margin-bottom'),
                a = !1;
              n === t &&
                (a = n
                  .clone()
                  .css({ height: 0, marginBottom: 0, display: 'block' })
                  .addClass('clone complete')).appendTo(this.$itemsContainer),
                t.css({ height: i, marginBottom: o }),
                setTimeout(
                  function() {
                    t.css({ height: 0, marginBottom: 0 });
                    var e = 0;
                    a &&
                      ((e = 250),
                      a.css({ height: i, marginBottom: o }),
                      a
                        .find('.progress-bar')
                        .addClass('progress-bar-no-transition')
                        .css({ width: '100%' })),
                      setTimeout(
                        function() {
                          t.css({ display: 'none' }),
                            t.remove(),
                            a && a.remove(),
                            this.$itemsContainer
                              .find('.item-progress:not(.clone)')
                              .last()
                              .after(
                                n.css({
                                  height: 'auto',
                                  marginBottom: o,
                                  display: 'block',
                                }),
                              );
                        }.bind(this),
                        e,
                      );
                  }.bind(this),
                  1e3,
                );
            }
          }
        },
      });
    e.exports = o;
  },
  function(e, t, n) {
    'use strict';
    var i = jQuery;
    e.exports = {
      updateProgTableVisibilitySetting: function() {
        wpmdb_data.prog_tables_visibility_changed &&
          ((wpmdb_data.prog_tables_visibility_changed = !1),
          i.ajax({
            url: ajaxurl,
            type: 'POST',
            dataType: 'text',
            cache: !1,
            data: {
              action: 'wpmdb_save_setting',
              nonce: wpmdb_data.nonces.save_setting,
              setting: 'prog_tables_hidden',
              checked: Boolean(wpmdb_data.prog_tables_hidden),
            },
            error: function(e, t, n) {
              console.log('Could not save progress item visibility setting', n);
            },
          }));
      },
      updatePauseBeforeFinalizeSetting: function() {
        wpmdb_data.pause_before_finalize_changed &&
          ((wpmdb_data.pause_before_finalize_changed = !1),
          i.ajax({
            url: ajaxurl,
            type: 'POST',
            dataType: 'text',
            cache: !1,
            data: {
              action: 'wpmdb_save_setting',
              nonce: wpmdb_data.nonces.save_setting,
              setting: 'pause_before_finalize',
              checked: Boolean(wpmdb_data.pause_before_finalize),
            },
            error: function(e, t, n) {
              console.log('Could not save pause before finalize setting', n);
            },
          }));
      },
    };
  },
  function(e, t, n) {
    'use strict';
    var i = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(61));
    (window.wpmdb = {
      functions: {},
      common: {
        hooks: [],
        call_stack: [],
        non_fatal_errors: '',
        migration_error: !1,
      },
    }),
      (wpmdb.functions = new i.default()),
      (function(e) {
        e.keys().forEach(function(t) {
          -1 === t.indexOf('wpmdbCommon.js') &&
            -1 === t.indexOf('./js/modules/') &&
            e(t);
        });
      })(n(65));
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = a(n(12)),
      o = a(n(13));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var r = (function() {
      function e() {
        (0, i.default)(this, e);
      }
      return (
        (0, o.default)(e, [
          {
            key: 'wpmdb_toggle_migration_action_text',
            value: function() {
              jQuery('.action-text').hide(),
                jQuery(
                  '.action-text.' + jQuery('input[name=action]:checked').val(),
                ).show();
            },
          },
          {
            key: 'wpmdb_migration_type',
            value: function() {
              var e = jQuery('input[name=action]:checked');
              return 0 === e.length ? '' : e.val();
            },
          },
          {
            key: 'wpmdb_call_next_hook',
            value: function() {
              var e = window.wpmdb;
              e.common.call_stack.length ||
                (e.common.call_stack = e.common.hooks);
              var t = e.common.call_stack[0];
              e.common.call_stack.shift(), t.call(this);
            },
          },
          {
            key: 'wpmdb_add_commas',
            value: function(e) {
              for (
                var t = (e += '').split('.'),
                  n = t[0],
                  i = 1 < t.length ? '.' + t[1] : '',
                  o = /(\d+)(\d{3})/;
                o.test(n);

              )
                n = n.replace(o, '$1,$2');
              return n + i;
            },
          },
          {
            key: 'wpmdb_parse_json',
            value: function(e) {
              var t = {};
              try {
                t = jQuery.parseJSON(e);
              } catch (e) {
                return !1;
              }
              return t;
            },
          },
          {
            key: 'wpmdbGetAjaxErrors',
            value: function(e, t, n, i) {
              var o = !1,
                a = '';
              if (!1 === this.wpmdb_parse_json(n)) {
                (o = !0), (e = wpmdb_strings.ajax_json_message), (t = '(#144)');
                var r = n;
                (n = wpmdb_strings.ajax_json_errors + ' ' + t),
                  (n +=
                    '<br><a class="show-errors-toggle" href="#">' +
                    wpmdb_strings.view_error_messages +
                    '</a> '),
                  (n += '<div class="migration-php-errors">' + r + '</div>');
              }
              return (
                (o || 'undefined' !== i) &&
                  (a += '<strong>' + e + '</strong> &mdash; '),
                o ||
                  'undefined' === i ||
                  ((a +=
                    wpmdb_strings.status +
                    ': ' +
                    i.status +
                    ' ' +
                    i.statusText),
                  (a += '<br /><br />' + wpmdb_strings.response + ':<br />')),
                o || (n += ' ' + t),
                (a += n)
              );
            },
          },
          {
            key: 'preg_quote',
            value: function(e, t) {
              return String(e).replace(
                new RegExp(
                  '[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (t || '') + '-]',
                  'g',
                ),
                '\\$&',
              );
            },
          },
          {
            key: 'table_is',
            value: function(e, t, n) {
              if ((e + t).toLowerCase() === n.toLowerCase()) return !0;
              var i = this.preg_quote(n);
              return null !== new RegExp(e + '([0-9]+)_' + t, 'i').exec(i);
            },
          },
          {
            key: 'subsite_for_table',
            value: function(e, t) {
              var n = this.preg_quote(t),
                i = new RegExp(e + '([0-9]+)_', 'i').exec(n);
              return null === i ? 1 : i[1];
            },
          },
          {
            key: 'convertKBSizeToHR',
            value: function(e, t, n, i) {
              var o, a;
              if (
                ((n = n || 1e3), (t = t || 2), (e = parseFloat(e)) < 1 && e > 0)
              )
                o = [(e * n).toFixed(0), 'B'];
              else if (n > Math.abs(e)) o = [e.toFixed(0), 'KB'];
              else {
                a = ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                var r = -1;
                do {
                  (e /= n), ++r;
                } while (Math.abs(e) >= n && r < a.length - 1);
                o = [Math.round(e * Math.pow(10, t)) / Math.pow(10, t), a[r]];
              }
              return i || (o = o[0] + ' ' + o[1]), o;
            },
          },
          {
            key: 'convertKBSizeToHRFixed',
            value: function(e, t, n) {
              t = t || 2;
              var i = this.convertKBSizeToHR(e, t, n, !0);
              return 'MB' == i[1]
                ? i[0].toFixed(2) + ' ' + i[1]
                : i[0] + ' ' + i[1];
            },
          },
          {
            key: 'ajax_handle_dismissible_notice',
            value: function(e, t, n) {
              jQuery.ajax({
                url: ajaxurl,
                type: 'POST',
                dataType: 'text',
                cache: !1,
                data: {
                  action: 'wpmdb_process_notice_link',
                  nonce: e,
                  notice: jQuery(n).data('notice'),
                  type: jQuery(n).data('type'),
                  reminder: jQuery(n).data('reminder'),
                },
                beforeSend: t(n),
              });
            },
          },
          {
            key: 'get_spinner_url',
            value: function() {
              var e =
                ajaxurl.replace('/admin-ajax.php', '') + '/images/spinner';
              return 2 < window.devicePixelRatio && (e += '-2x'), (e += '.gif');
            },
          },
          {
            key: 'exclude_post_types_warning',
            value: function() {
              var e = $('#select-post-types').val(),
                t = '',
                n = $('.exclude-post-types-warning');
              e
                ? ((t = '<code>' + e.join('</code>, <code>') + '</code>'),
                  $('.excluded-post-types').html(t),
                  '0' === n.css('opacity') &&
                    n
                      .css({ opacity: 0 })
                      .slideDown(200)
                      .animate({ opacity: 1 }))
                : n
                    .css({ opacity: 0 })
                    .slideUp(200)
                    .animate({ opacity: 0 });
            },
          },
        ]),
        e
      );
    })();
    t.default = r;
  },
  function(e, t, n) {
    e.exports = { default: n(63), __esModule: !0 };
  },
  function(e, t, n) {
    n(64);
    var i = n(2).Object;
    e.exports = function(e, t, n) {
      return i.defineProperty(e, t, n);
    };
  },
  function(e, t, n) {
    var i = n(10);
    i(i.S + i.F * !n(6), 'Object', { defineProperty: n(4).f });
  },
  function(e, t, n) {
    var i = {
      './js/backups.js': 66,
      './js/dismissable-notices.js': 108,
      './js/helpers/events.js': 109,
      './js/helpers/utils.js': 110,
      './js/helpers/wpmdbCommon.js': 111,
      './js/helpers/wpmdbGlobals.js': 112,
      './js/hook.js': 113,
      './js/import.js': 114,
      './js/localStorage.js': 115,
      './js/modules/MigrationProgress-controller.js': 116,
      './js/modules/MigrationProgress-model.js': 117,
      './js/modules/MigrationProgress-utils.js': 118,
      './js/modules/MigrationProgress-view.js': 119,
      './js/modules/MigrationProgressStage-model.js': 120,
      './js/modules/MigrationProgressStage-view.js': 121,
      './js/multisite.js': 122,
      './js/plugin-update.js': 123,
      './js/script.js': 124,
      './js/usage-tracking-notice.js': 127,
      './js/usage-tracking.js': 128,
      './sass/_migration-progress.scss': 129,
      './sass/_progress-upgrade.scss': 130,
      './sass/backups.scss': 131,
      './sass/disabled.scss': 132,
      './sass/plugin-update-styles.scss': 133,
      './sass/styles.scss': 134,
    };
    function o(e) {
      return n(a(e));
    }
    function a(e) {
      var t = i[e];
      if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
      return t;
    }
    (o.keys = function() {
      return Object.keys(i);
    }),
      (o.resolve = a),
      (e.exports = o),
      (o.id = 65);
  },
  function(e, t, n) {
    var i = window.jQuery;
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = l(n(36)),
      a = l(n(3)),
      r = l(n(48)),
      s = l(n(12)),
      c = l(n(13));
    n(54);
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    i = window.jQuery;
    var p = window.wpmdb,
      d = window.ajaxurl,
      m = window._,
      u = (function() {
        function e() {
          var t = this;
          (0, s.default)(this, e),
            (this.ajax_spinner =
              '<img src="' +
              p.functions.get_spinner_url() +
              '" alt="" class="ajax-spinner general-spinner" />'),
            (this.locationHashChanged = (0, r.default)(
              o.default.mark(function e() {
                var n;
                return o.default.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('#backups' !== window.location.hash) {
                            e.next = 6;
                            break;
                          }
                          return (
                            m.isEmpty(t.backups_list) &&
                              (document.getElementById(
                                'wpmdb-backups-container',
                              ).innerHTML =
                                wpmdb_strings.loading_backups + t.ajax_spinner),
                            (e.next = 4),
                            t.getBackups()
                          );
                        case 4:
                          (n = e.sent) &&
                            'object' ===
                              (void 0 === n
                                ? 'undefined'
                                : (0, a.default)(n)) &&
                            t.displayBackups(n);
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  t,
                );
              }),
            )),
            (this.backups_list = {}),
            (this.backups_rendered = !1);
        }
        return (
          (0, c.default)(e, [
            {
              key: 'setup',
              value: function() {
                var e = this;
                if ('false' === wpmdb_data.is_pro) return !1;
                document.addEventListener('DOMContentLoaded', function() {
                  '#backups' === window.location.hash &&
                    e.locationHashChanged();
                }),
                  navigator.userAgent.match(/Trident.*rv:11\./) &&
                    i('body').addClass('ie11'),
                  (window.onhashchange = this.locationHashChanged);
              },
            },
            {
              key: 'doAJAX',
              value: (function() {
                var e = (0, r.default)(
                  o.default.mark(function e(t) {
                    var n, a;
                    return o.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                i.ajax({
                                  url: d,
                                  type: 'POST',
                                  cache: !1,
                                  data: t,
                                })
                              );
                            case 2:
                              return (
                                (n = e.sent),
                                (a = JSON.parse(n)),
                                e.abrupt('return', a)
                              );
                            case 5:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                return function(t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'getBackups',
              value: (function() {
                var e = (0, r.default)(
                  o.default.mark(function e() {
                    var t, n;
                    return o.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = {
                                  action: 'wpmdb_get_backups',
                                  nonce: wpmdb_data.nonces.get_backups,
                                }),
                                (e.prev = 1),
                                m.isEmpty(this.backups_list))
                              ) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt('return', this.backups_list);
                            case 4:
                              return (e.next = 6), this.doAJAX(t);
                            case 6:
                              if (void 0 === (n = e.sent).status) {
                                e.next = 11;
                                break;
                              }
                              return (
                                (document.getElementById(
                                  'wpmdb-backups-container',
                                ).innerHTML = n.status),
                                (this.backups_list = n.status),
                                e.abrupt('return')
                              );
                            case 11:
                              if (void 0 === n.wpmdb_error) {
                                e.next = 13;
                                break;
                              }
                              throw new Error(n.error_msg);
                            case 13:
                              return (
                                (this.backups_list = n), e.abrupt('return', n)
                              );
                            case 17:
                              (e.prev = 17),
                                (e.t0 = e.catch(1)),
                                (document.getElementById(
                                  'wpmdb-backups-container',
                                ).innerHTML = ''),
                                this.ajaxError(
                                  wpmdb_strings.error_getting_backups,
                                  e.t0,
                                );
                            case 21:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 17]],
                    );
                  }),
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'ajaxError',
              value: function(e, t) {
                var n = document.getElementById('wpmdb-backups-messages'),
                  i =
                    '\n\t\t\t<p><strong>' +
                    e +
                    '</strong></p>\n\t\t\t<p>' +
                    t +
                    '</p>\n\t\t';
                n.classList.contains('visible') || n.classList.add('visible'),
                  (n.innerHTML = i),
                  console.error(t);
              },
            },
            {
              key: 'render',
              value: function(e) {
                return (
                  '\n\t\t<ul class="backups-row" id="' +
                  e.raw_name.replace(/\.sql/, '') +
                  '">\n\t\t\t<li>' +
                  e.modified +
                  '</li>\n\t\t\t<li>' +
                  e.name +
                  '</li>\n\t\t\t<li><a href="#backups" class="download-backup">' +
                  wpmdb_strings.download +
                  '</a> <a href="#backups" class="delete-backup"></a></li>\n\t\t</ul>'
                );
              },
            },
            {
              key: 'displayBackups',
              value: function(e) {
                if (!this.backups_rendered) {
                  var t = '' + e.map(this.render).join('');
                  (document.getElementById(
                    'wpmdb-backups-container',
                  ).innerHTML = t),
                    this.addListener(
                      '.download-backup',
                      this.ajaxGetDownloadFile,
                    ),
                    this.addListener('.delete-backup', this.ajaxDeleteBackup),
                    (this.backups_rendered = !0);
                }
              },
            },
            {
              key: 'addListener',
              value: (function() {
                var e = (0, r.default)(
                  o.default.mark(function e(t, n) {
                    var i = this;
                    return o.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              document.querySelectorAll(t).forEach(function(e) {
                                e.addEventListener(
                                  'click',
                                  (function() {
                                    var e = (0, r.default)(
                                      o.default.mark(function e(t) {
                                        var a;
                                        return o.default.wrap(
                                          function(e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    t.preventDefault(),
                                                    (a =
                                                      t.target.parentNode
                                                        .parentNode.id),
                                                    (e.next = 4),
                                                    n.call(i, a)
                                                  );
                                                case 4:
                                                  return e.abrupt('return', !1);
                                                case 5:
                                                case 'end':
                                                  return e.stop();
                                              }
                                          },
                                          e,
                                          i,
                                        );
                                      }),
                                    );
                                    return function(t) {
                                      return e.apply(this, arguments);
                                    };
                                  })(),
                                );
                              });
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                return function(t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'ajaxGetDownloadFile',
              value: (function() {
                var e = (0, r.default)(
                  o.default.mark(function e(t, n) {
                    var i, a;
                    return o.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = {
                                  action: 'wpmdb_get_backup',
                                  path: t,
                                  nonce: wpmdb_data.nonces.get_backup,
                                }),
                                (e.prev = 1),
                                (e.next = 4),
                                this.doAJAX(i)
                              );
                            case 4:
                              if (void 0 === (a = e.sent).wpmdb_error) {
                                e.next = 7;
                                break;
                              }
                              throw new Error(a.error_msg);
                            case 7:
                              return (
                                'success' === a.status &&
                                  (location.href = a.redirect),
                                e.abrupt('return', a)
                              );
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(1)),
                                this.ajaxError(
                                  wpmdb_strings.error_downloading_backup,
                                  e.t0,
                                );
                            case 14:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 11]],
                    );
                  }),
                );
                return function(t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'ajaxDeleteBackup',
              value: (function() {
                var e = (0, r.default)(
                  o.default.mark(function e(t, n) {
                    var i, a, r;
                    return o.default.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                window.confirm(
                                  wpmdb_strings.confirm_delete_backup,
                                )
                              ) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt('return');
                            case 2:
                              return (
                                (i = {
                                  action: 'wpmdb_delete_backup',
                                  path: t,
                                  nonce: wpmdb_data.nonces.delete_backup,
                                }),
                                (e.prev = 3),
                                (e.next = 6),
                                this.doAJAX(i)
                              );
                            case 6:
                              if (void 0 === (a = e.sent).wpmdb_error) {
                                e.next = 9;
                                break;
                              }
                              throw new Error(a.error_msg);
                            case 9:
                              return (
                                'deleted' === a.status &&
                                  ((r = document.querySelector(
                                    '#' + t,
                                  )).classList.add('wpmdb-backup-deleted'),
                                  setTimeout(function() {
                                    r.parentNode.removeChild(r);
                                  }, 1100)),
                                e.abrupt('return', a)
                              );
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(3)),
                                this.ajaxError(
                                  wpmdb_strings.error_deleting_backup,
                                  e.t0,
                                );
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[3, 13]],
                    );
                  }),
                );
                return function(t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
    (t.default = u), new u().setup();
  },
  function(e, t, n) {
    var i =
        (function() {
          return this;
        })() || Function('return this')(),
      o =
        i.regeneratorRuntime &&
        Object.getOwnPropertyNames(i).indexOf('regeneratorRuntime') >= 0,
      a = o && i.regeneratorRuntime;
    if (((i.regeneratorRuntime = void 0), (e.exports = n(68)), o))
      i.regeneratorRuntime = a;
    else
      try {
        delete i.regeneratorRuntime;
      } catch (e) {
        i.regeneratorRuntime = void 0;
      }
  },
  function(e, t) {
    !(function(t) {
      'use strict';
      var n,
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = 'function' == typeof Symbol ? Symbol : {},
        r = a.iterator || '@@iterator',
        s = a.asyncIterator || '@@asyncIterator',
        c = a.toStringTag || '@@toStringTag',
        l = 'object' == typeof e,
        p = t.regeneratorRuntime;
      if (p) l && (e.exports = p);
      else {
        (p = t.regeneratorRuntime = l ? e.exports : {}).wrap = v;
        var d = 'suspendedStart',
          m = 'suspendedYield',
          u = 'executing',
          _ = 'completed',
          h = {},
          g = {};
        g[r] = function() {
          return this;
        };
        var f = Object.getPrototypeOf,
          b = f && f(f(z([])));
        b && b !== i && o.call(b, r) && (g = b);
        var w = (j.prototype = x.prototype = Object.create(g));
        (k.prototype = w.constructor = j),
          (j.constructor = k),
          (j[c] = k.displayName = 'GeneratorFunction'),
          (p.isGeneratorFunction = function(e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === k || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (p.mark = function(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, j)
                : ((e.__proto__ = j), c in e || (e[c] = 'GeneratorFunction')),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (p.awrap = function(e) {
            return { __await: e };
          }),
          S(T.prototype),
          (T.prototype[s] = function() {
            return this;
          }),
          (p.AsyncIterator = T),
          (p.async = function(e, t, n, i) {
            var o = new T(v(e, t, n, i));
            return p.isGeneratorFunction(t)
              ? o
              : o.next().then(function(e) {
                  return e.done ? e.value : o.next();
                });
          }),
          S(w),
          (w[c] = 'Generator'),
          (w[r] = function() {
            return this;
          }),
          (w.toString = function() {
            return '[object Generator]';
          }),
          (p.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var i = t.pop();
                  if (i in e) return (n.value = i), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (p.values = z),
          (E.prototype = {
            constructor: E,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = n),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = n),
                this.tryEntries.forEach(F),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    o.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = n);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function i(i, o) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (t.next = i),
                  o && ((t.method = 'next'), (t.arg = n)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var r = this.tryEntries[a],
                  s = r.completion;
                if ('root' === r.tryLoc) return i('end');
                if (r.tryLoc <= this.prev) {
                  var c = o.call(r, 'catchLoc'),
                    l = o.call(r, 'finallyLoc');
                  if (c && l) {
                    if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                    if (this.prev < r.finallyLoc) return i(r.finallyLoc);
                  } else if (c) {
                    if (this.prev < r.catchLoc) return i(r.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < r.finallyLoc) return i(r.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n];
                if (
                  i.tryLoc <= this.prev &&
                  o.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var a = i;
                  break;
                }
              }
              a &&
                ('break' === e || 'continue' === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var r = a ? a.completion : {};
              return (
                (r.type = e),
                (r.arg = t),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), h)
                  : this.complete(r)
              );
            },
            complete: function(e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                h
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), F(n), h;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var i = n.completion;
                  if ('throw' === i.type) {
                    var o = i.arg;
                    F(n);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function(e, t, i) {
              return (
                (this.delegate = { iterator: z(e), resultName: t, nextLoc: i }),
                'next' === this.method && (this.arg = n),
                h
              );
            },
          });
      }
      function v(e, t, n, i) {
        var o = t && t.prototype instanceof x ? t : x,
          a = Object.create(o.prototype),
          r = new E(i || []);
        return (
          (a._invoke = (function(e, t, n) {
            var i = d;
            return function(o, a) {
              if (i === u) throw new Error('Generator is already running');
              if (i === _) {
                if ('throw' === o) throw a;
                return P();
              }
              for (n.method = o, n.arg = a; ; ) {
                var r = n.delegate;
                if (r) {
                  var s = $(r, n);
                  if (s) {
                    if (s === h) continue;
                    return s;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if (i === d) throw ((i = _), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                i = u;
                var c = y(e, t, n);
                if ('normal' === c.type) {
                  if (((i = n.done ? _ : m), c.arg === h)) continue;
                  return { value: c.arg, done: n.done };
                }
                'throw' === c.type &&
                  ((i = _), (n.method = 'throw'), (n.arg = c.arg));
              }
            };
          })(e, n, r)),
          a
        );
      }
      function y(e, t, n) {
        try {
          return { type: 'normal', arg: e.call(t, n) };
        } catch (e) {
          return { type: 'throw', arg: e };
        }
      }
      function x() {}
      function k() {}
      function j() {}
      function S(e) {
        ['next', 'throw', 'return'].forEach(function(t) {
          e[t] = function(e) {
            return this._invoke(t, e);
          };
        });
      }
      function T(e) {
        var t;
        this._invoke = function(n, i) {
          function a() {
            return new Promise(function(t, a) {
              !(function t(n, i, a, r) {
                var s = y(e[n], e, i);
                if ('throw' !== s.type) {
                  var c = s.arg,
                    l = c.value;
                  return l && 'object' == typeof l && o.call(l, '__await')
                    ? Promise.resolve(l.__await).then(
                        function(e) {
                          t('next', e, a, r);
                        },
                        function(e) {
                          t('throw', e, a, r);
                        },
                      )
                    : Promise.resolve(l).then(function(e) {
                        (c.value = e), a(c);
                      }, r);
                }
                r(s.arg);
              })(n, i, t, a);
            });
          }
          return (t = t ? t.then(a, a) : a());
        };
      }
      function $(e, t) {
        var i = e.iterator[t.method];
        if (i === n) {
          if (((t.delegate = null), 'throw' === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = 'return'),
              (t.arg = n),
              $(e, t),
              'throw' === t.method)
            )
              return h;
            (t.method = 'throw'),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method",
              ));
          }
          return h;
        }
        var o = y(i, e.iterator, t.arg);
        if ('throw' === o.type)
          return (t.method = 'throw'), (t.arg = o.arg), (t.delegate = null), h;
        var a = o.arg;
        return a
          ? a.done
            ? ((t[e.resultName] = a.value),
              (t.next = e.nextLoc),
              'return' !== t.method && ((t.method = 'next'), (t.arg = n)),
              (t.delegate = null),
              h)
            : a
          : ((t.method = 'throw'),
            (t.arg = new TypeError('iterator result is not an object')),
            (t.delegate = null),
            h);
      }
      function C(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function F(e) {
        var t = e.completion || {};
        (t.type = 'normal'), delete t.arg, (e.completion = t);
      }
      function E(e) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
          e.forEach(C, this),
          this.reset(!0);
      }
      function z(e) {
        if (e) {
          var t = e[r];
          if (t) return t.call(e);
          if ('function' == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var i = -1,
              a = function t() {
                for (; ++i < e.length; )
                  if (o.call(e, i)) return (t.value = e[i]), (t.done = !1), t;
                return (t.value = n), (t.done = !0), t;
              };
            return (a.next = a);
          }
        }
        return { next: P };
      }
      function P() {
        return { value: n, done: !0 };
      }
    })(
      (function() {
        return this;
      })() || Function('return this')(),
    );
  },
  function(e, t, n) {
    e.exports = { default: n(70), __esModule: !0 };
  },
  function(e, t, n) {
    n(37), n(44), (e.exports = n(31).f('iterator'));
  },
  function(e, t, n) {
    var i = n(25),
      o = n(26);
    e.exports = function(e) {
      return function(t, n) {
        var a,
          r,
          s = String(o(t)),
          c = i(n),
          l = s.length;
        return c < 0 || c >= l
          ? e
            ? ''
            : void 0
          : (a = s.charCodeAt(c)) < 55296 ||
            a > 56319 ||
            c + 1 === l ||
            (r = s.charCodeAt(c + 1)) < 56320 ||
            r > 57343
          ? e
            ? s.charAt(c)
            : a
          : e
          ? s.slice(c, c + 2)
          : r - 56320 + ((a - 55296) << 10) + 65536;
      };
    };
  },
  function(e, t, n) {
    'use strict';
    var i = n(40),
      o = n(20),
      a = n(22),
      r = {};
    n(7)(r, n(1)('iterator'), function() {
      return this;
    }),
      (e.exports = function(e, t, n) {
        (e.prototype = i(r, { next: o(1, n) })), a(e, t + ' Iterator');
      });
  },
  function(e, t, n) {
    var i = n(4),
      o = n(5),
      a = n(27);
    e.exports = n(6)
      ? Object.defineProperties
      : function(e, t) {
          o(e);
          for (var n, r = a(t), s = r.length, c = 0; s > c; )
            i.f(e, (n = r[c++]), t[n]);
          return e;
        };
  },
  function(e, t, n) {
    var i = n(16);
    e.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(e) {
          return 'String' == i(e) ? e.split('') : Object(e);
        };
  },
  function(e, t, n) {
    var i = n(11),
      o = n(42),
      a = n(76);
    e.exports = function(e) {
      return function(t, n, r) {
        var s,
          c = i(t),
          l = o(c.length),
          p = a(r, l);
        if (e && n != n) {
          for (; l > p; ) if ((s = c[p++]) != s) return !0;
        } else
          for (; l > p; p++)
            if ((e || p in c) && c[p] === n) return e || p || 0;
        return !e && -1;
      };
    };
  },
  function(e, t, n) {
    var i = n(25),
      o = Math.max,
      a = Math.min;
    e.exports = function(e, t) {
      return (e = i(e)) < 0 ? o(e + t, 0) : a(e, t);
    };
  },
  function(e, t, n) {
    var i = n(9),
      o = n(78),
      a = n(28)('IE_PROTO'),
      r = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function(e) {
        return (
          (e = o(e)),
          i(e, a)
            ? e[a]
            : 'function' == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? r
            : null
        );
      };
  },
  function(e, t, n) {
    var i = n(26);
    e.exports = function(e) {
      return Object(i(e));
    };
  },
  function(e, t, n) {
    'use strict';
    var i = n(80),
      o = n(81),
      a = n(15),
      r = n(11);
    (e.exports = n(38)(
      Array,
      'Array',
      function(e, t) {
        (this._t = r(e)), (this._i = 0), (this._k = t);
      },
      function() {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length
          ? ((this._t = void 0), o(1))
          : o(0, 'keys' == t ? n : 'values' == t ? e[n] : [n, e[n]]);
      },
      'values',
    )),
      (a.Arguments = a.Array),
      i('keys'),
      i('values'),
      i('entries');
  },
  function(e, t) {
    e.exports = function() {};
  },
  function(e, t) {
    e.exports = function(e, t) {
      return { value: t, done: !!e };
    };
  },
  function(e, t, n) {
    e.exports = { default: n(83), __esModule: !0 };
  },
  function(e, t, n) {
    n(84), n(47), n(90), n(91), (e.exports = n(2).Symbol);
  },
  function(e, t, n) {
    'use strict';
    var i = n(0),
      o = n(9),
      a = n(6),
      r = n(10),
      s = n(39),
      c = n(85).KEY,
      l = n(19),
      p = n(29),
      d = n(22),
      m = n(21),
      u = n(1),
      _ = n(31),
      h = n(32),
      g = n(86),
      f = n(87),
      b = n(5),
      w = n(8),
      v = n(11),
      y = n(24),
      x = n(20),
      k = n(40),
      j = n(88),
      S = n(89),
      T = n(4),
      $ = n(27),
      C = S.f,
      F = T.f,
      E = j.f,
      z = i.Symbol,
      P = i.JSON,
      I = P && P.stringify,
      O = u('_hidden'),
      M = u('toPrimitive'),
      A = {}.propertyIsEnumerable,
      D = p('symbol-registry'),
      N = p('symbols'),
      q = p('op-symbols'),
      B = Object.prototype,
      Q = 'function' == typeof z,
      L = i.QObject,
      R = !L || !L.prototype || !L.prototype.findChild,
      H =
        a &&
        l(function() {
          return (
            7 !=
            k(
              F({}, 'a', {
                get: function() {
                  return F(this, 'a', { value: 7 }).a;
                },
              }),
            ).a
          );
        })
          ? function(e, t, n) {
              var i = C(B, t);
              i && delete B[t], F(e, t, n), i && e !== B && F(B, t, i);
            }
          : F,
      V = function(e) {
        var t = (N[e] = k(z.prototype));
        return (t._k = e), t;
      },
      U =
        Q && 'symbol' == typeof z.iterator
          ? function(e) {
              return 'symbol' == typeof e;
            }
          : function(e) {
              return e instanceof z;
            },
      G = function(e, t, n) {
        return (
          e === B && G(q, t, n),
          b(e),
          (t = y(t, !0)),
          b(n),
          o(N, t)
            ? (n.enumerable
                ? (o(e, O) && e[O][t] && (e[O][t] = !1),
                  (n = k(n, { enumerable: x(0, !1) })))
                : (o(e, O) || F(e, O, x(1, {})), (e[O][t] = !0)),
              H(e, t, n))
            : F(e, t, n)
        );
      },
      W = function(e, t) {
        b(e);
        for (var n, i = g((t = v(t))), o = 0, a = i.length; a > o; )
          G(e, (n = i[o++]), t[n]);
        return e;
      },
      K = function(e) {
        var t = A.call(this, (e = y(e, !0)));
        return (
          !(this === B && o(N, e) && !o(q, e)) &&
          (!(t || !o(this, e) || !o(N, e) || (o(this, O) && this[O][e])) || t)
        );
      },
      J = function(e, t) {
        if (((e = v(e)), (t = y(t, !0)), e !== B || !o(N, t) || o(q, t))) {
          var n = C(e, t);
          return (
            !n || !o(N, t) || (o(e, O) && e[O][t]) || (n.enumerable = !0), n
          );
        }
      },
      Y = function(e) {
        for (var t, n = E(v(e)), i = [], a = 0; n.length > a; )
          o(N, (t = n[a++])) || t == O || t == c || i.push(t);
        return i;
      },
      X = function(e) {
        for (
          var t, n = e === B, i = E(n ? q : v(e)), a = [], r = 0;
          i.length > r;

        )
          !o(N, (t = i[r++])) || (n && !o(B, t)) || a.push(N[t]);
        return a;
      };
    Q ||
      (s(
        (z = function() {
          if (this instanceof z)
            throw TypeError('Symbol is not a constructor!');
          var e = m(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
              this === B && t.call(q, n),
                o(this, O) && o(this[O], e) && (this[O][e] = !1),
                H(this, e, x(1, n));
            };
          return a && R && H(B, e, { configurable: !0, set: t }), V(e);
        }).prototype,
        'toString',
        function() {
          return this._k;
        },
      ),
      (S.f = J),
      (T.f = G),
      (n(46).f = j.f = Y),
      (n(33).f = K),
      (n(45).f = X),
      a && !n(14) && s(B, 'propertyIsEnumerable', K, !0),
      (_.f = function(e) {
        return V(u(e));
      })),
      r(r.G + r.W + r.F * !Q, { Symbol: z });
    for (
      var Z = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
          ',',
        ),
        ee = 0;
      Z.length > ee;

    )
      u(Z[ee++]);
    for (var te = $(u.store), ne = 0; te.length > ne; ) h(te[ne++]);
    r(r.S + r.F * !Q, 'Symbol', {
      for: function(e) {
        return o(D, (e += '')) ? D[e] : (D[e] = z(e));
      },
      keyFor: function(e) {
        if (!U(e)) throw TypeError(e + ' is not a symbol!');
        for (var t in D) if (D[t] === e) return t;
      },
      useSetter: function() {
        R = !0;
      },
      useSimple: function() {
        R = !1;
      },
    }),
      r(r.S + r.F * !Q, 'Object', {
        create: function(e, t) {
          return void 0 === t ? k(e) : W(k(e), t);
        },
        defineProperty: G,
        defineProperties: W,
        getOwnPropertyDescriptor: J,
        getOwnPropertyNames: Y,
        getOwnPropertySymbols: X,
      }),
      P &&
        r(
          r.S +
            r.F *
              (!Q ||
                l(function() {
                  var e = z();
                  return (
                    '[null]' != I([e]) ||
                    '{}' != I({ a: e }) ||
                    '{}' != I(Object(e))
                  );
                })),
          'JSON',
          {
            stringify: function(e) {
              for (var t, n, i = [e], o = 1; arguments.length > o; )
                i.push(arguments[o++]);
              if (((n = t = i[1]), (w(t) || void 0 !== e) && !U(e)))
                return (
                  f(t) ||
                    (t = function(e, t) {
                      if (
                        ('function' == typeof n && (t = n.call(this, e, t)),
                        !U(t))
                      )
                        return t;
                    }),
                  (i[1] = t),
                  I.apply(P, i)
                );
            },
          },
        ),
      z.prototype[M] || n(7)(z.prototype, M, z.prototype.valueOf),
      d(z, 'Symbol'),
      d(Math, 'Math', !0),
      d(i.JSON, 'JSON', !0);
  },
  function(e, t, n) {
    var i = n(21)('meta'),
      o = n(8),
      a = n(9),
      r = n(4).f,
      s = 0,
      c =
        Object.isExtensible ||
        function() {
          return !0;
        },
      l = !n(19)(function() {
        return c(Object.preventExtensions({}));
      }),
      p = function(e) {
        r(e, i, { value: { i: 'O' + ++s, w: {} } });
      },
      d = (e.exports = {
        KEY: i,
        NEED: !1,
        fastKey: function(e, t) {
          if (!o(e))
            return 'symbol' == typeof e
              ? e
              : ('string' == typeof e ? 'S' : 'P') + e;
          if (!a(e, i)) {
            if (!c(e)) return 'F';
            if (!t) return 'E';
            p(e);
          }
          return e[i].i;
        },
        getWeak: function(e, t) {
          if (!a(e, i)) {
            if (!c(e)) return !0;
            if (!t) return !1;
            p(e);
          }
          return e[i].w;
        },
        onFreeze: function(e) {
          return l && d.NEED && c(e) && !a(e, i) && p(e), e;
        },
      });
  },
  function(e, t, n) {
    var i = n(27),
      o = n(45),
      a = n(33);
    e.exports = function(e) {
      var t = i(e),
        n = o.f;
      if (n)
        for (var r, s = n(e), c = a.f, l = 0; s.length > l; )
          c.call(e, (r = s[l++])) && t.push(r);
      return t;
    };
  },
  function(e, t, n) {
    var i = n(16);
    e.exports =
      Array.isArray ||
      function(e) {
        return 'Array' == i(e);
      };
  },
  function(e, t, n) {
    var i = n(11),
      o = n(46).f,
      a = {}.toString,
      r =
        'object' == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    e.exports.f = function(e) {
      return r && '[object Window]' == a.call(e)
        ? (function(e) {
            try {
              return o(e);
            } catch (e) {
              return r.slice();
            }
          })(e)
        : o(i(e));
    };
  },
  function(e, t, n) {
    var i = n(33),
      o = n(20),
      a = n(11),
      r = n(24),
      s = n(9),
      c = n(35),
      l = Object.getOwnPropertyDescriptor;
    t.f = n(6)
      ? l
      : function(e, t) {
          if (((e = a(e)), (t = r(t, !0)), c))
            try {
              return l(e, t);
            } catch (e) {}
          if (s(e, t)) return o(!i.f.call(e, t), e[t]);
        };
  },
  function(e, t, n) {
    n(32)('asyncIterator');
  },
  function(e, t, n) {
    n(32)('observable');
  },
  function(e, t, n) {
    e.exports = { default: n(93), __esModule: !0 };
  },
  function(e, t, n) {
    n(47), n(37), n(44), n(94), n(106), n(107), (e.exports = n(2).Promise);
  },
  function(e, t, n) {
    'use strict';
    var i,
      o,
      a,
      r,
      s = n(14),
      c = n(0),
      l = n(17),
      p = n(49),
      d = n(10),
      m = n(8),
      u = n(18),
      _ = n(95),
      h = n(96),
      g = n(50),
      f = n(51).set,
      b = n(101)(),
      w = n(34),
      v = n(52),
      y = n(102),
      x = n(53),
      k = c.TypeError,
      j = c.process,
      S = j && j.versions,
      T = (S && S.v8) || '',
      $ = c.Promise,
      C = 'process' == p(j),
      F = function() {},
      E = (o = w.f),
      z = !!(function() {
        try {
          var e = $.resolve(1),
            t = ((e.constructor = {})[n(1)('species')] = function(e) {
              e(F, F);
            });
          return (
            (C || 'function' == typeof PromiseRejectionEvent) &&
            e.then(F) instanceof t &&
            0 !== T.indexOf('6.6') &&
            -1 === y.indexOf('Chrome/66')
          );
        } catch (e) {}
      })(),
      P = function(e) {
        var t;
        return !(!m(e) || 'function' != typeof (t = e.then)) && t;
      },
      I = function(e, t) {
        if (!e._n) {
          e._n = !0;
          var n = e._c;
          b(function() {
            for (
              var i = e._v,
                o = 1 == e._s,
                a = 0,
                r = function(t) {
                  var n,
                    a,
                    r,
                    s = o ? t.ok : t.fail,
                    c = t.resolve,
                    l = t.reject,
                    p = t.domain;
                  try {
                    s
                      ? (o || (2 == e._h && A(e), (e._h = 1)),
                        !0 === s
                          ? (n = i)
                          : (p && p.enter(),
                            (n = s(i)),
                            p && (p.exit(), (r = !0))),
                        n === t.promise
                          ? l(k('Promise-chain cycle'))
                          : (a = P(n))
                          ? a.call(n, c, l)
                          : c(n))
                      : l(i);
                  } catch (e) {
                    p && !r && p.exit(), l(e);
                  }
                };
              n.length > a;

            )
              r(n[a++]);
            (e._c = []), (e._n = !1), t && !e._h && O(e);
          });
        }
      },
      O = function(e) {
        f.call(c, function() {
          var t,
            n,
            i,
            o = e._v,
            a = M(e);
          if (
            (a &&
              ((t = v(function() {
                C
                  ? j.emit('unhandledRejection', o, e)
                  : (n = c.onunhandledrejection)
                  ? n({ promise: e, reason: o })
                  : (i = c.console) &&
                    i.error &&
                    i.error('Unhandled promise rejection', o);
              })),
              (e._h = C || M(e) ? 2 : 1)),
            (e._a = void 0),
            a && t.e)
          )
            throw t.v;
        });
      },
      M = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length;
      },
      A = function(e) {
        f.call(c, function() {
          var t;
          C
            ? j.emit('rejectionHandled', e)
            : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
      D = function(e) {
        var t = this;
        t._d ||
          ((t._d = !0),
          ((t = t._w || t)._v = e),
          (t._s = 2),
          t._a || (t._a = t._c.slice()),
          I(t, !0));
      },
      N = function(e) {
        var t,
          n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === e) throw k("Promise can't be resolved itself");
            (t = P(e))
              ? b(function() {
                  var i = { _w: n, _d: !1 };
                  try {
                    t.call(e, l(N, i, 1), l(D, i, 1));
                  } catch (e) {
                    D.call(i, e);
                  }
                })
              : ((n._v = e), (n._s = 1), I(n, !1));
          } catch (e) {
            D.call({ _w: n, _d: !1 }, e);
          }
        }
      };
    z ||
      (($ = function(e) {
        _(this, $, 'Promise', '_h'), u(e), i.call(this);
        try {
          e(l(N, this, 1), l(D, this, 1));
        } catch (e) {
          D.call(this, e);
        }
      }),
      ((i = function(e) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = n(103)($.prototype, {
        then: function(e, t) {
          var n = E(g(this, $));
          return (
            (n.ok = 'function' != typeof e || e),
            (n.fail = 'function' == typeof t && t),
            (n.domain = C ? j.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && I(this, !1),
            n.promise
          );
        },
        catch: function(e) {
          return this.then(void 0, e);
        },
      })),
      (a = function() {
        var e = new i();
        (this.promise = e),
          (this.resolve = l(N, e, 1)),
          (this.reject = l(D, e, 1));
      }),
      (w.f = E = function(e) {
        return e === $ || e === r ? new a(e) : o(e);
      })),
      d(d.G + d.W + d.F * !z, { Promise: $ }),
      n(22)($, 'Promise'),
      n(104)('Promise'),
      (r = n(2).Promise),
      d(d.S + d.F * !z, 'Promise', {
        reject: function(e) {
          var t = E(this);
          return (0, t.reject)(e), t.promise;
        },
      }),
      d(d.S + d.F * (s || !z), 'Promise', {
        resolve: function(e) {
          return x(s && this === r ? $ : this, e);
        },
      }),
      d(
        d.S +
          d.F *
            !(
              z &&
              n(105)(function(e) {
                $.all(e).catch(F);
              })
            ),
        'Promise',
        {
          all: function(e) {
            var t = this,
              n = E(t),
              i = n.resolve,
              o = n.reject,
              a = v(function() {
                var n = [],
                  a = 0,
                  r = 1;
                h(e, !1, function(e) {
                  var s = a++,
                    c = !1;
                  n.push(void 0),
                    r++,
                    t.resolve(e).then(function(e) {
                      c || ((c = !0), (n[s] = e), --r || i(n));
                    }, o);
                }),
                  --r || i(n);
              });
            return a.e && o(a.v), n.promise;
          },
          race: function(e) {
            var t = this,
              n = E(t),
              i = n.reject,
              o = v(function() {
                h(e, !1, function(e) {
                  t.resolve(e).then(n.resolve, i);
                });
              });
            return o.e && i(o.v), n.promise;
          },
        },
      );
  },
  function(e, t) {
    e.exports = function(e, t, n, i) {
      if (!(e instanceof t) || (void 0 !== i && i in e))
        throw TypeError(n + ': incorrect invocation!');
      return e;
    };
  },
  function(e, t, n) {
    var i = n(17),
      o = n(97),
      a = n(98),
      r = n(5),
      s = n(42),
      c = n(99),
      l = {},
      p = {};
    ((t = e.exports = function(e, t, n, d, m) {
      var u,
        _,
        h,
        g,
        f = m
          ? function() {
              return e;
            }
          : c(e),
        b = i(n, d, t ? 2 : 1),
        w = 0;
      if ('function' != typeof f) throw TypeError(e + ' is not iterable!');
      if (a(f)) {
        for (u = s(e.length); u > w; w++)
          if ((g = t ? b(r((_ = e[w]))[0], _[1]) : b(e[w])) === l || g === p)
            return g;
      } else
        for (h = f.call(e); !(_ = h.next()).done; )
          if ((g = o(h, b, _.value, t)) === l || g === p) return g;
    }).BREAK = l),
      (t.RETURN = p);
  },
  function(e, t, n) {
    var i = n(5);
    e.exports = function(e, t, n, o) {
      try {
        return o ? t(i(n)[0], n[1]) : t(n);
      } catch (t) {
        var a = e.return;
        throw (void 0 !== a && i(a.call(e)), t);
      }
    };
  },
  function(e, t, n) {
    var i = n(15),
      o = n(1)('iterator'),
      a = Array.prototype;
    e.exports = function(e) {
      return void 0 !== e && (i.Array === e || a[o] === e);
    };
  },
  function(e, t, n) {
    var i = n(49),
      o = n(1)('iterator'),
      a = n(15);
    e.exports = n(2).getIteratorMethod = function(e) {
      if (void 0 != e) return e[o] || e['@@iterator'] || a[i(e)];
    };
  },
  function(e, t) {
    e.exports = function(e, t, n) {
      var i = void 0 === n;
      switch (t.length) {
        case 0:
          return i ? e() : e.call(n);
        case 1:
          return i ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return i
            ? e(t[0], t[1], t[2], t[3])
            : e.call(n, t[0], t[1], t[2], t[3]);
      }
      return e.apply(n, t);
    };
  },
  function(e, t, n) {
    var i = n(0),
      o = n(51).set,
      a = i.MutationObserver || i.WebKitMutationObserver,
      r = i.process,
      s = i.Promise,
      c = 'process' == n(16)(r);
    e.exports = function() {
      var e,
        t,
        n,
        l = function() {
          var i, o;
          for (c && (i = r.domain) && i.exit(); e; ) {
            (o = e.fn), (e = e.next);
            try {
              o();
            } catch (i) {
              throw (e ? n() : (t = void 0), i);
            }
          }
          (t = void 0), i && i.enter();
        };
      if (c)
        n = function() {
          r.nextTick(l);
        };
      else if (!a || (i.navigator && i.navigator.standalone))
        if (s && s.resolve) {
          var p = s.resolve(void 0);
          n = function() {
            p.then(l);
          };
        } else
          n = function() {
            o.call(i, l);
          };
      else {
        var d = !0,
          m = document.createTextNode('');
        new a(l).observe(m, { characterData: !0 }),
          (n = function() {
            m.data = d = !d;
          });
      }
      return function(i) {
        var o = { fn: i, next: void 0 };
        t && (t.next = o), e || ((e = o), n()), (t = o);
      };
    };
  },
  function(e, t, n) {
    var i = n(0).navigator;
    e.exports = (i && i.userAgent) || '';
  },
  function(e, t, n) {
    var i = n(7);
    e.exports = function(e, t, n) {
      for (var o in t) n && e[o] ? (e[o] = t[o]) : i(e, o, t[o]);
      return e;
    };
  },
  function(e, t, n) {
    'use strict';
    var i = n(0),
      o = n(2),
      a = n(4),
      r = n(6),
      s = n(1)('species');
    e.exports = function(e) {
      var t = 'function' == typeof o[e] ? o[e] : i[e];
      r &&
        t &&
        !t[s] &&
        a.f(t, s, {
          configurable: !0,
          get: function() {
            return this;
          },
        });
    };
  },
  function(e, t, n) {
    var i = n(1)('iterator'),
      o = !1;
    try {
      var a = [7][i]();
      (a.return = function() {
        o = !0;
      }),
        Array.from(a, function() {
          throw 2;
        });
    } catch (e) {}
    e.exports = function(e, t) {
      if (!t && !o) return !1;
      var n = !1;
      try {
        var a = [7],
          r = a[i]();
        (r.next = function() {
          return { done: (n = !0) };
        }),
          (a[i] = function() {
            return r;
          }),
          e(a);
      } catch (e) {}
      return n;
    };
  },
  function(e, t, n) {
    'use strict';
    var i = n(10),
      o = n(2),
      a = n(0),
      r = n(50),
      s = n(53);
    i(i.P + i.R, 'Promise', {
      finally: function(e) {
        var t = r(this, o.Promise || a.Promise),
          n = 'function' == typeof e;
        return this.then(
          n
            ? function(n) {
                return s(t, e()).then(function() {
                  return n;
                });
              }
            : e,
          n
            ? function(n) {
                return s(t, e()).then(function() {
                  throw n;
                });
              }
            : e,
        );
      },
    });
  },
  function(e, t, n) {
    'use strict';
    var i = n(10),
      o = n(34),
      a = n(52);
    i(i.S, 'Promise', {
      try: function(e) {
        var t = o.f(this),
          n = a(e);
        return (n.e ? t.reject : t.resolve)(n.v), t.promise;
      },
    });
  },
  function(e, t) {
    window.jQuery;
    !(function(e) {
      0 < e('.wpmdb-compat-plugin-row-error').length &&
        e('[data-slug="wp-migrate-db-pro"]').addClass('wpmdbpro-has-message'),
        e('.wpmdbpro-custom')
          .prev()
          .addClass('update'),
        e('.notice-link-plugins-page').click(function(t) {
          t.preventDefault();
          var n = jQuery(this);
          wpmdb.functions.ajax_handle_dismissible_notice(
            wpmdb_nonces.process_notice_link,
            function(t) {
              e(t)
                .closest('.wpmdbpro-custom')
                .hide(),
                e(t)
                  .closest('tr')
                  .siblings('tr.wpmdbpro-has-message')
                  .removeClass('wpmdbpro-has-message');
            },
            n,
          ),
            e('.wpmdbpro-custom')
              .prev()
              .removeClass('update');
        });
    })(jQuery);
  },
  function(e, t) {
    var n = window.jQuery;
    (n.fn.bindFirst = function(e, t) {
      this.bindNth(e, t, 0);
    }),
      (n.fn.bindNth = function(e, t, n) {
        this.bind(e, t), this.changeEventOrder(e, n);
      }),
      (n.fn.changeEventOrder = function(e, t) {
        var i = this;
        n.each(e.split(' '), function(e, o) {
          i.each(function() {
            var e = n._data(this, 'events')[o.split('.')[0]];
            (t = Math.min(t, e.length - 1)), e.splice(t, 0, e.pop());
          });
        });
      });
  },
  function(e, t) {
    window.jQuery;
    Object.defineProperty(t, '__esModule', { value: !0 });
    (t.handleAjaxError = function(e, t) {
      var n =
        '\n\t\t\t<p>' +
        wpmdb_strings.ajax_php_errors +
        ':</p>\n\t\t\t<p>' +
        t.message +
        '</p>\n\t';
      wpmdb.current_migration.setState(e, n, 'error'),
        (wpmdb.common.migration_error = !0),
        wpmdb.functions.migration_complete_events(),
        console.error('🚨 🚒', t);
    }),
      (t.throwMDBError = function(e) {
        var t = void 0;
        throw (void 0 !== e.body &&
          ((wpmdb.common.non_fatal_errors += e.body), (t = e.body)),
        void 0 !== e.msg && (t = e.msg),
        new Error(t));
      }),
      (t.jQueryAjaxError = function(e, t) {
        return (
          void 0 !== t.responseText && '' !== t.responseText
            ? (e = t.responseText)
            : void 0 !== t.statusText && (e = t.statusText),
          console.error(t),
          wpmdb.current_migration.setState(
            wpmdb_strings.migration_failed,
            e,
            'error',
          ),
          (wpmdb.common.migration_error = !0),
          wpmdb.functions.migration_complete_events(),
          e
        );
      }),
      (t.doNextStep = function(e, t, n) {
        return (
          (wpmdb.common.next_step_in_migration = { fn: e, args: t }),
          wpmdb.functions.execute_next_step(n)
        );
      });
  },
  function(e, t, n) {
    var i = window.jQuery;
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = r(n(12)),
      a = r(n(13));
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (function() {
      function e() {
        (0, o.default)(this, e);
      }
      return (
        (0, a.default)(e, [
          {
            key: 'wpmdb_toggle_migration_action_text',
            value: function() {
              jQuery('.action-text').hide(),
                jQuery(
                  '.action-text.' + jQuery('input[name=action]:checked').val(),
                ).show();
            },
          },
          {
            key: 'wpmdb_migration_type',
            value: function() {
              var e = jQuery('input[name=action]:checked');
              return 0 === e.length ? '' : e.val();
            },
          },
          {
            key: 'wpmdb_call_next_hook',
            value: function() {
              var e = window.wpmdb;
              e.common.call_stack.length ||
                (e.common.call_stack = e.common.hooks);
              var t = e.common.call_stack[0];
              e.common.call_stack.shift(), t.call(this);
            },
          },
          {
            key: 'wpmdb_add_commas',
            value: function(e) {
              for (
                var t = (e += '').split('.'),
                  n = t[0],
                  i = 1 < t.length ? '.' + t[1] : '',
                  o = /(\d+)(\d{3})/;
                o.test(n);

              )
                n = n.replace(o, '$1,$2');
              return n + i;
            },
          },
          {
            key: 'wpmdb_parse_json',
            value: function(e) {
              var t = {};
              try {
                t = jQuery.parseJSON(e);
              } catch (e) {
                return !1;
              }
              return t;
            },
          },
          {
            key: 'wpmdbGetAjaxErrors',
            value: function(e, t, n, i) {
              var o = !1,
                a = '';
              if (!1 === this.wpmdb_parse_json(n)) {
                (o = !0), (e = wpmdb_strings.ajax_json_message), (t = '(#144)');
                var r = n;
                (n = wpmdb_strings.ajax_json_errors + ' ' + t),
                  (n +=
                    '<br><a class="show-errors-toggle" href="#">' +
                    wpmdb_strings.view_error_messages +
                    '</a> '),
                  (n += '<div class="migration-php-errors">' + r + '</div>');
              }
              return (
                (o || 'undefined' !== i) &&
                  (a += '<strong>' + e + '</strong> &mdash; '),
                o ||
                  'undefined' === i ||
                  ((a +=
                    wpmdb_strings.status +
                    ': ' +
                    i.status +
                    ' ' +
                    i.statusText),
                  (a += '<br /><br />' + wpmdb_strings.response + ':<br />')),
                o || (n += ' ' + t),
                (a += n)
              );
            },
          },
          {
            key: 'preg_quote',
            value: function(e, t) {
              return String(e).replace(
                new RegExp(
                  '[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (t || '') + '-]',
                  'g',
                ),
                '\\$&',
              );
            },
          },
          {
            key: 'table_is',
            value: function(e, t, n) {
              if ((e + t).toLowerCase() === n.toLowerCase()) return !0;
              var i = this.preg_quote(n);
              return null !== new RegExp(e + '([0-9]+)_' + t, 'i').exec(i);
            },
          },
          {
            key: 'subsite_for_table',
            value: function(e, t) {
              var n = this.preg_quote(t),
                i = new RegExp(e + '([0-9]+)_', 'i').exec(n);
              return null === i ? 1 : i[1];
            },
          },
          {
            key: 'convertKBSizeToHR',
            value: function(e, t, n, i) {
              var o, a;
              if (
                ((n = n || 1e3), (t = t || 2), (e = parseFloat(e)) < 1 && e > 0)
              )
                o = [(e * n).toFixed(0), 'B'];
              else if (n > Math.abs(e)) o = [e.toFixed(0), 'KB'];
              else {
                a = ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                var r = -1;
                do {
                  (e /= n), ++r;
                } while (Math.abs(e) >= n && r < a.length - 1);
                o = [Math.round(e * Math.pow(10, t)) / Math.pow(10, t), a[r]];
              }
              return i || (o = o[0] + ' ' + o[1]), o;
            },
          },
          {
            key: 'convertKBSizeToHRFixed',
            value: function(e, t, n) {
              t = t || 2;
              var i = this.convertKBSizeToHR(e, t, n, !0);
              return 'MB' == i[1]
                ? i[0].toFixed(2) + ' ' + i[1]
                : i[0] + ' ' + i[1];
            },
          },
          {
            key: 'ajax_handle_dismissible_notice',
            value: function(e, t, n) {
              jQuery.ajax({
                url: ajaxurl,
                type: 'POST',
                dataType: 'text',
                cache: !1,
                data: {
                  action: 'wpmdb_process_notice_link',
                  nonce: e,
                  notice: jQuery(n).data('notice'),
                  type: jQuery(n).data('type'),
                  reminder: jQuery(n).data('reminder'),
                },
                beforeSend: t(n),
              });
            },
          },
          {
            key: 'get_spinner_url',
            value: function() {
              var e =
                ajaxurl.replace('/admin-ajax.php', '') + '/images/spinner';
              return 2 < window.devicePixelRatio && (e += '-2x'), (e += '.gif');
            },
          },
          {
            key: 'exclude_post_types_warning',
            value: function() {
              var e = i('#select-post-types').val(),
                t = '',
                n = i('.exclude-post-types-warning');
              e
                ? ((t = '<code>' + e.join('</code>, <code>') + '</code>'),
                  i('.excluded-post-types').html(t),
                  '0' === n.css('opacity') &&
                    n
                      .css({ opacity: 0 })
                      .slideDown(200)
                      .animate({ opacity: 1 }))
                : n
                    .css({ opacity: 0 })
                    .slideUp(200)
                    .animate({ opacity: 0 });
            },
          },
        ]),
        e
      );
    })();
    t.default = s;
  },
  function(e, t, n) {
    var i = window.jQuery;
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = s(n(3)),
      a = s(n(12)),
      r = s(n(13));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    i = window.jQuery;
    var c = window.ajaxurl,
      l = window.wpmdb_strings,
      p = window.wpmdb_data,
      d = (function() {
        function e() {
          (0, a.default)(this, e),
            (this.show_ssl_notice = !1),
            (this.doing_save_profile = !1),
            (this.doing_ajax = !1),
            (this.profile_name_edited = !1),
            (this.migration_intent = null),
            (this.doing_licence_registration_ajax = !1),
            (this.migration_paused = !1),
            (this.last_replace_switch = wpmdb.functions.wpmdb_migration_type()),
            (this.connection_established = !1),
            (this.profile_name_edited = !1),
            (this.checked_licence = !1),
            (this.show_prefix_notice = !1),
            (this.show_ssl_notice = !1),
            (this.force_reconnect = !1),
            (this.migration_selection = ''),
            (this.show_version_notice = !1),
            (this.migration_completed = !1),
            (this.currently_migrating = !1),
            (this.dump_filename = ''),
            (this.dump_path = ''),
            (this.migration_intent = ''),
            (this.remote_site = null),
            (this.secret_key = null),
            (this.form_data = null),
            (this.stage = null),
            (this.elapsed_interval = null),
            (this.completed_msg = null),
            (this.tables_to_migrate = []),
            (this.migration_paused = !1),
            (this.previous_progress_title = ''),
            (this.previous_progress_text_primary = ''),
            (this.previous_progress_text_secondary = ''),
            (this.cancelling_text = ''),
            (this.paused_text = ''),
            (this.migration_cancelled = !1),
            (this.flag_skip_delay = !1),
            (this.delay_between_requests = 0),
            (this.fade_duration = 400),
            (this.pause_before_finalize = !1),
            (this.is_auto_pause_before_finalize = !1),
            (this.$connection_info_box = i('.connection-info-wrapper')),
            (this.$push_select = window.wpmdb.$push_select = i(
              '#select-tables',
            ).clone()),
            (this.$pull_select = window.wpmdb.$pull_select = i(
              '#select-tables',
            ).clone()),
            (this.$push_post_type_select = i('#select-post-types').clone()),
            (this.$pull_post_type_select = i('#select-post-types').clone()),
            (this.$push_select_backup = i('#select-backup').clone()),
            (this.$pull_select_backup = i('#select-backup').clone()),
            (this.spinner_url = window.spinner_url = wpmdb.functions.get_spinner_url()),
            (this.ajax_spinner = window.ajax_spinner =
              '<img src="' +
              this.spinner_url +
              '" alt="" class="ajax-spinner general-spinner" />');
        }
        return (
          (0, r.default)(e, [
            {
              key: 'pad',
              value: function(e, t, n) {
                return (
                  (n = n || '0'),
                  (e += '').length >= t
                    ? e
                    : new Array(t - e.length + 1).join(n) + e
                );
              },
            },
            {
              key: 'is_int',
              value: function(e) {
                return 'number' == typeof (e = parseInt(e)) && 0 == e % 1;
              },
            },
            {
              key: 'get_intersect',
              value: function(e, t) {
                var n,
                  i,
                  o = [],
                  a = {},
                  r = t.length;
                for (n = 0; n < r; n++) a[t[n]] = !0;
                for (r = e.length, n = 0; n < r; n++)
                  (i = e[n]) in a && o.push(i);
                return o;
              },
            },
            {
              key: 'pin_replace_url',
              value: function(e) {
                !0 === e &&
                  1 > i('.replace-row.pin').length &&
                  1 === i('#old-url').length &&
                  i('#old-url')
                    .parents('.replace-row')
                    .addClass('pin'),
                  !1 === e &&
                    0 < i('.replace-row.pin').length &&
                    i('.replace-row.pin').removeClass('pin');
              },
            },
            {
              key: 'get_ajax_errors',
              value: function(e, t, n) {
                return wpmdb.functions.wpmdbGetAjaxErrors(
                  l.connection_local_server_problem,
                  t,
                  e,
                  n,
                );
              },
            },
            {
              key: 'refresh_debug_log',
              value: function() {
                i.ajax({
                  url: c,
                  type: 'POST',
                  dataType: 'text',
                  cache: !1,
                  data: { action: 'wpmdb_get_log', nonce: p.nonces.get_log },
                  error: function(e, t, n) {
                    alert(l.update_log_problem);
                  },
                  success: function(e) {
                    i('.debug-log-textarea').val(e);
                  },
                });
              },
            },
            {
              key: 'get_query_var',
              value: function(e) {
                e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(
                  location.search,
                );
                return null === t
                  ? ''
                  : decodeURIComponent(t[1].replace(/\+/g, ' '));
              },
            },
            {
              key: 'maybe_show_ssl_warning',
              value: function(e, t, n) {
                var o = e.substr(0, e.indexOf(':')),
                  a = i('.ssl-notice');
                if (
                  (this.show_ssl_notice || a.hide(),
                  n !== o && -1 !== e.indexOf('https'))
                )
                  return (
                    a.show(),
                    (this.show_ssl_notice = !0),
                    (e = e.replace('https', 'http')),
                    void i('.pull-push-connection-info').val(e + '\n' + t)
                  );
                this.show_ssl_notice = !1;
              },
            },
            {
              key: 'validate_url',
              value: function(e) {
                return /^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                  e,
                );
              },
            },
            {
              key: 'refresh_table_selects',
              value: function() {
                void 0 !== p &&
                  void 0 !== p.this_tables &&
                  void 0 !== p.this_table_sizes_hr &&
                  (this.$push_select = this.create_table_select(
                    p.this_tables,
                    p.this_table_sizes_hr,
                    i(wpmdb.$push_select).val(),
                  )),
                  void 0 !== wpmdb.common.connection_data &&
                    void 0 !== wpmdb.common.connection_data.tables &&
                    void 0 !== wpmdb.common.connection_data.table_sizes_hr &&
                    (this.$pull_select = this.create_table_select(
                      wpmdb.common.connection_data.tables,
                      wpmdb.common.connection_data.table_sizes_hr,
                      i(wpmdb.$pull_select).val(),
                    ));
              },
            },
            {
              key: 'save_active_profile',
              value: function() {
                var e,
                  t = this;
                if (
                  (i('.save-settings-button').blur(),
                  !this.doing_save_profile &&
                    !0 !== this.maybe_show_select_table_notice())
                ) {
                  var n = !1;
                  i('#create_new').is(':checked') && (n = !0);
                  var o = i('.create-new-profile').val();
                  (this.doing_save_profile = !0),
                    (e = i(i('#migrate-form')[0].elements)
                      .not('.auth-credentials')
                      .serialize()),
                    i('.save-settings-button')
                      .attr('disabled', 'disabled')
                      .after(
                        '<img src="' +
                          this.spinner_url +
                          '" alt="" class="save-profile-ajax-spinner general-spinner" />',
                      ),
                    (this.doing_ajax = !0),
                    i.ajax({
                      url: c,
                      type: 'POST',
                      dataType: 'text',
                      cache: !1,
                      data: {
                        action: 'wpmdb_save_profile',
                        profile: e,
                        nonce: p.nonces.save_profile,
                      },
                      error: function(e, n, o) {
                        (t.doing_ajax = !1),
                          alert(l.save_profile_problem),
                          i('.save-settings-button').removeAttr('disabled'),
                          i('.save-profile-ajax-spinner').remove(),
                          i('.save-settings-button').after(
                            '<span class="ajax-success-msg">' +
                              l.saved +
                              '</span>',
                          ),
                          i('.ajax-success-msg').fadeOut(2e3, function() {
                            i(this).remove();
                          }),
                          (t.doing_save_profile = !1);
                      },
                      success: function(e) {
                        var a =
                          parseInt(
                            i(
                              '#migrate-form input[name=save_migration_profile_option]:checked',
                            ).val(),
                            10,
                          ) + 1;
                        if (
                          ((t.doing_ajax = !1),
                          i('.save-settings-button').removeAttr('disabled'),
                          i('.save-profile-ajax-spinner').remove(),
                          i('.save-settings-button').after(
                            '<span class="ajax-success-msg">' +
                              l.saved +
                              '</span>',
                          ),
                          i('.ajax-success-msg').fadeOut(2e3, function() {
                            i(this).remove();
                          }),
                          (t.doing_save_profile = !1),
                          i('.create-new-profile').val(''),
                          n)
                        ) {
                          var r = parseInt(e, 10),
                            s = r + 1,
                            c = i(
                              '<li><span class="delete-profile" data-profile-id="' +
                                s +
                                '"></span><label for="profile-' +
                                s +
                                '"><input id="profile-' +
                                s +
                                '" value="' +
                                r +
                                '" name="save_migration_profile_option" type="radio"></label></li>',
                            );
                          c
                            .find('label')
                            .append(document.createTextNode(' ' + o)),
                            (a = s),
                            i('#create_new')
                              .parents('li')
                              .before(c),
                            i('#profile-' + s).attr('checked', 'checked');
                        }
                        var d =
                            window.location.href
                              .replace('#migrate', '')
                              .replace(/&wpmdb-profile=-?\d+/, '') +
                            '&wpmdb-profile=' +
                            a,
                          m = i(
                            '#migrate-form input[name=save_migration_profile_option]:checked',
                          )
                            .parent()
                            .text()
                            .trim();
                        if ('function' == typeof window.history.pushState) {
                          if (i('#migrate-form .crumbs').length)
                            i('#migrate-form .crumbs .crumb:last').text(m);
                          else {
                            var u = i('<div class="crumbs" />')
                              .append(
                                '<a class="crumb" href="' +
                                  p.this_plugin_base +
                                  '"> Saved Profiles </a>',
                              )
                              .append('<span class="crumb">' + m + '</span>');
                            i('#migrate-form').prepend(u);
                          }
                          window.history.pushState(
                            { updated_profile_id: a },
                            null,
                            d,
                          );
                        }
                      },
                    });
                }
              },
            },
            {
              key: 'cancel_migration',
              value: function(e) {
                (this.migration_cancelled = !0),
                  (this.cancelling_text = l.cancelling_migration),
                  i('.migration-controls').css({ visibility: 'hidden' }),
                  'find_replace' === this.migration_intent &&
                    (this.cancelling_text = l.cancelling_find_replace),
                  wpmdb.current_migration.setState(
                    this.cancelling_text,
                    l.completing_current_request,
                    'cancelling',
                  ),
                  !0 === this.migration_paused &&
                    ((this.migration_paused = !1),
                    wpmdb.functions.execute_next_step());
              },
            },
            {
              key: 'set_checkbox',
              value: function(e) {
                var t = i('#' + e),
                  n = t.find('input[type=checkbox]');
                t.toggleClass('on')
                  .find('span')
                  .toggleClass('checked');
                var o = t.find('span.on').hasClass('checked');
                n.attr('checked', o).trigger('change');
              },
            },
            {
              key: 'move_connection_info_box',
              value: function() {
                var e,
                  t,
                  n,
                  o,
                  a,
                  r,
                  s = i('.connection-status'),
                  c = i('.directory-permission-notice'),
                  l = i('.compatibility-older-mysql'),
                  d = i('.mst-required'),
                  m = i('.keep-active-plugins'),
                  u = i('.step-two'),
                  _ = i('.backup-options'),
                  h = wpmdb.functions.wpmdb_migration_type();
                if (
                  (s.hide(),
                  c.hide(),
                  u.show(),
                  _.show(),
                  m.show(),
                  l.hide(),
                  d.hide(),
                  wpmdb.functions.wpmdb_toggle_migration_action_text(),
                  i('.migrate-tab')
                    .attr('class', 'migrate-tab content-tab')
                    .addClass(wpmdb.functions.wpmdb_migration_type()),
                  i.wpmdb.do_action('move_connection_info_box', {
                    migration_type: h,
                    last_migration_type: this.last_replace_switch,
                  }),
                  -1 !== i.inArray(h, ['push', 'pull']))
                ) {
                  var g = i('.pull-push-connection-info'),
                    f = i.trim(g.val()).split('\n'),
                    b = i('.' + h + '-list li');
                  if (
                    (b.append(this.$connection_info_box),
                    this.$connection_info_box.show(function() {
                      var e = i(this).find('.pull-push-connection-info');
                      e.val() || e.focus();
                    }),
                    h !== this.last_replace_switch && 2 === f.length)
                  )
                    return (
                      (wpmdb.force_reconnect = !0),
                      b.append(this.$connection_info_box),
                      g
                        .removeClass('temp-disabled')
                        .attr('readonly', 'readonly'),
                      i('.connect-button').hide(),
                      void wpmdb.functions.connection_box_changed()
                    );
                  this.connection_established
                    ? (s.hide(),
                      u.show(),
                      wpmdb.functions.wpmdb_toggle_migration_action_text(),
                      'pull' === h
                        ? ((t = wpmdb.common.connection_data.prefix),
                          (n = p.site_details.prefix),
                          (o = p.this_uploads_dir),
                          (a = p.this_upload_dir_long),
                          (r = p.write_permission))
                        : ((t = p.this_prefix),
                          (n = wpmdb.common.connection_data.prefix),
                          (o = wpmdb.common.connection_data.uploads_dir),
                          (a = wpmdb.common.connection_data.upload_dir_long),
                          (r = wpmdb.common.connection_data.write_permissions)),
                      i('.table_prefix').html(t),
                      i('.backup-table-prefix').html(n),
                      i('.uploads-dir').html(o),
                      this.maybe_show_backup_disabled_msg(a, r),
                      !1 === this.profile_name_edited &&
                        ((e = this.get_domain_name(
                          wpmdb.common.connection_data.url,
                        )),
                        i('.create-new-profile').val(e)))
                    : (s.show(), u.hide());
                } else if (-1 !== i.inArray(h, ['find_replace', 'savefile']))
                  if (
                    (s.hide(),
                    u.show(),
                    i('.table-prefix').html(p.this_prefix),
                    !1 === this.profile_name_edited &&
                      i('.create-new-profile').val(''),
                    m.hide(),
                    'savefile' === h)
                  )
                    _.hide(),
                      l.show(),
                      'false' === p.write_permission && (c.show(), u.hide());
                  else {
                    if ('true' === p.is_multisite) {
                      var w = i('.old-replace-col').eq(1);
                      w
                        .parent()
                        .removeClass('pin')
                        .find('.replace-remove-row')
                        .show(),
                        w.find('input').removeAttr('readonly');
                    }
                    this.maybe_show_backup_disabled_msg(
                      p.this_upload_dir_long,
                      p.write_permission,
                    );
                  }
                this.maybe_show_mixed_cased_table_name_warning();
              },
            },
            {
              key: 'maybe_show_backup_disabled_msg',
              value: function(e, t) {
                var n = i('#create-backup'),
                  o = i('#create-backup-label'),
                  a = i('.backup-option-disabled');
                n.removeAttr('disabled'),
                  o.removeClass('disabled'),
                  a.hide(),
                  'false' === t &&
                    (n.prop('checked', !1),
                    n.attr('disabled', 'disabled'),
                    o.addClass('disabled'),
                    a.show(),
                    i('.upload-directory-location').html(e));
              },
            },
            {
              key: 'change_replace_values',
              value: function() {
                var e = null,
                  t = null,
                  n = this;
                null !== wpmdb.common.previous_connection_data &&
                  'object' ===
                    (0, o.default)(wpmdb.common.previous_connection_data) &&
                  wpmdb.common.previous_connection_data.url !==
                    wpmdb.common.connection_data.url &&
                  ((e = this.remove_protocol(
                    wpmdb.common.previous_connection_data.url,
                  )),
                  (t = wpmdb.common.previous_connection_data.path)),
                  'push' === wpmdb.functions.wpmdb_migration_type() ||
                  'savefile' === wpmdb.functions.wpmdb_migration_type()
                    ? ('pull' === this.last_replace_switch
                        ? i('.replace-row').each(function() {
                            var e = i('.old-replace-col input', this).val();
                            i('.old-replace-col input', this).val(
                              i('.replace-right-col input', this).val(),
                            ),
                              i('.replace-right-col input', this).val(e);
                          })
                        : 'push' === this.last_replace_switch &&
                          'push' === wpmdb.functions.wpmdb_migration_type() &&
                          null !== e &&
                          null !== t &&
                          i('.replace-row').each(function() {
                            var o = i('.replace-right-col input', this).val();
                            o === t &&
                              i('.replace-right-col input', this).val(
                                wpmdb.common.connection_data.path,
                              ),
                              o === e &&
                                i('.replace-right-col input', this).val(
                                  n.remove_protocol(
                                    wpmdb.common.connection_data.url,
                                  ),
                                );
                          }),
                      i.wpmdb.do_action('wpmdb_update_push_table_select'),
                      i('#select-post-types').remove(),
                      i('.exclude-post-types-warning').after(
                        this.$push_post_type_select,
                      ),
                      wpmdb.functions.exclude_post_types_warning(),
                      i('#select-backup').remove(),
                      i('.backup-tables-wrap').prepend(
                        this.$push_select_backup,
                      ))
                    : 'pull' === wpmdb.functions.wpmdb_migration_type() &&
                      ('' === this.last_replace_switch ||
                      'push' === this.last_replace_switch ||
                      'savefile' === this.last_replace_switch
                        ? i('.replace-row').each(function() {
                            var e = i('.old-replace-col input', this).val();
                            i('.old-replace-col input', this).val(
                              i('.replace-right-col input', this).val(),
                            ),
                              i('.replace-right-col input', this).val(e);
                          })
                        : 'pull' === this.last_replace_switch &&
                          'pull' === wpmdb.functions.wpmdb_migration_type() &&
                          null !== e &&
                          null !== t &&
                          i('.replace-row').each(function() {
                            var o = i('.old-replace-col input', this).val();
                            o === t &&
                              i('.old-replace-col input', this).val(
                                wpmdb.common.connection_data.path,
                              ),
                              o === e &&
                                i('.old-replace-col input', this).val(
                                  n.remove_protocol(
                                    wpmdb.common.connection_data.url,
                                  ),
                                );
                          }),
                      i.wpmdb.do_action('wpmdb_update_pull_table_select'),
                      i('#select-post-types').remove(),
                      i('.exclude-post-types-warning').after(
                        this.$pull_post_type_select,
                      ),
                      wpmdb.functions.exclude_post_types_warning(),
                      i('#select-backup').remove(),
                      i('.backup-tables-wrap').prepend(
                        this.$pull_select_backup,
                      )),
                  (this.last_replace_switch = wpmdb.functions.wpmdb_migration_type());
              },
            },
            {
              key: 'switch_to_plugin_tab',
              value: function(e, t) {
                i('.nav-tab').removeClass('nav-tab-active'),
                  i('.nav-tab.' + e).addClass('nav-tab-active'),
                  i('.content-tab').hide(),
                  i('.' + e + '-tab').show(),
                  'settings' === e &&
                    !0 === this.should_check_licence() &&
                    (i('p.licence-status')
                      .append('Checking License... ')
                      .append(this.ajax_spinner),
                    this.check_licence()),
                  'help' === e &&
                    (this.refresh_debug_log(),
                    !0 === this.should_check_licence() &&
                      (i('.support-content p').append(this.ajax_spinner),
                      this.check_licence())),
                  'addons' === e &&
                    !0 !== t &&
                    !0 === this.should_check_licence() &&
                    (i('.addons-content p').append(this.ajax_spinner),
                    this.check_licence());
              },
            },
            {
              key: 'hide_overlay',
              value: function() {
                i('#overlay')
                  .removeClass('show')
                  .addClass('hide'),
                  i('#overlay > div')
                    .removeClass('show')
                    .addClass('hide'),
                  wpmdb.current_migration.$proVersion.find('iframe').remove(),
                  setTimeout(function() {
                    i('#overlay').remove();
                  }, 500),
                  (this.migration_completed = !1);
              },
            },
            {
              key: 'check_licence',
              value: function(e) {
                var t = !this.doing_licence_registration_ajax;
                this.checked_licence = !0;
                var n = this;
                i.ajax({
                  url: c,
                  type: 'POST',
                  dataType: 'json',
                  cache: !1,
                  data: {
                    action: 'wpmdb_check_licence',
                    licence: e,
                    context: 'all',
                    nonce: p.nonces.check_licence,
                  },
                  error: function(e, t, n) {
                    alert(l.license_check_problem);
                  },
                  success: function(e) {
                    var o,
                      a,
                      r,
                      s = i('.support-content'),
                      c = i('.addons-content'),
                      l = i('.licence-status:not(.notification-message)');
                    if (void 0 !== e.dbrains_api_down)
                      (a = e.dbrains_api_down + e.message),
                        (r = e.dbrains_api_down);
                    else if (void 0 !== e.errors) {
                      if (void 0 !== e.errors.subscription_expired)
                        (o = e.errors.subscription_expired.licence),
                          (a = e.errors.subscription_expired.support),
                          (r = e.errors.subscription_expired.addons);
                      else {
                        var p = '';
                        for (var d in e.errors) p += e.errors[d];
                        (a = p), (r = p);
                      }
                      void 0 !== e.addon_content &&
                        (r += '\n' + e.addon_content);
                    } else (a = e.message), (r = e.addon_content);
                    t &&
                      l.stop().fadeOut(n.fade_duration, function() {
                        void 0 === o &&
                          (i(this)
                            .css({ visibility: 'hidden', display: 'block' })
                            .slideUp(),
                          (o = '')),
                          i(this)
                            .empty()
                            .html(o)
                            .stop()
                            .fadeIn(n.fade_duration);
                      }),
                      s.stop().fadeOut(n.fade_duration, function() {
                        i(this)
                          .empty()
                          .html(a)
                          .stop()
                          .fadeIn(n.fade_duration);
                      }),
                      c.stop().fadeOut(n.fade_duration, function() {
                        i(this)
                          .empty()
                          .html(r)
                          .stop()
                          .fadeIn(n.fade_duration);
                      }),
                      i('#plugin-compatibility').is(':not(:checked)') &&
                        i('#compatibility-header').click();
                  },
                });
              },
            },
            {
              key: 'should_check_licence',
              value: function() {
                return (
                  !1 === this.checked_licence &&
                  '1' === p.has_licence &&
                  'true' === p.is_pro
                );
              },
            },
            {
              key: 'maybe_show_mixed_cased_table_name_warning',
              value: function() {
                if (
                  void 0 !== wpmdb.common.connection_data &&
                  !1 !== wpmdb.common.connection_data
                ) {
                  var e = wpmdb.functions.wpmdb_migration_type(),
                    t = wpmdb.functions.get_tables_to_migrate(null, null);
                  i('.mixed-case-table-name-notice').hide(),
                    null !== t &&
                      (t = t.join('')) !== t.toLowerCase() &&
                      ('1' ===
                        wpmdb.common.connection_data.lower_case_table_names ||
                        ('push' !== e && 'savefile' !== e)) &&
                      (('1' !== p.lower_case_table_names && 'pull' === e) ||
                        ('push' === e || 'savefile' === e
                          ? i('.mixed-case-table-name-notice.push').show()
                          : i('.mixed-case-table-name-notice.pull').show()));
                }
              },
            },
            {
              key: 'enable_pro_licence',
              value: function(e, t) {
                i('.licence-input, .register-licence').remove(),
                  i('.licence-not-entered').prepend(e.masked_licence),
                  i('.support-content')
                    .empty()
                    .html(
                      '<p>' +
                        l.fetching_license +
                        '<img src="' +
                        this.spinner_url +
                        '" alt="" class="ajax-spinner general-spinner" /></p>',
                    ),
                  this.check_licence(t),
                  i('.migrate-selection label').removeClass('disabled'),
                  i('.migrate-selection input').removeAttr('disabled');
              },
            },
            {
              key: 'get_domain_name',
              value: function(e) {
                return e
                  .replace(/\/\/(.*)@/, '//')
                  .replace('http://', '')
                  .replace('https://', '')
                  .replace('www.', '');
              },
            },
            {
              key: 'update_domain_placeholder',
              value: function(e, t, n) {
                var i = this.get_domain_name(t);
                return 'completed' === n
                  ? e.replace(
                      /\%s\s?/,
                      '<span class=domain-label>' + i + '</span>&nbsp;',
                    )
                  : e.replace(
                      /\%s(\S*)\s?/,
                      '<span class=domain-label>' + i + '$1</span>&nbsp;',
                    );
              },
            },
            {
              key: 'get_migration_status_label',
              value: function(e, t, n) {
                var o = '',
                  a = '';
                switch (t) {
                  case 'push':
                    (o = l.push_migration_label_migrating),
                      (a = l.push_migration_label_completed);
                    break;
                  case 'pull':
                    (o = l.pull_migration_label_migrating),
                      (a = l.pull_migration_label_completed);
                    break;
                  case 'find_replace':
                    (o = l.find_replace_label_migrating),
                      (a = l.find_replace_label_completed);
                    break;
                  case 'savefile':
                    (o = l.exporting_please_wait), (a = l.exporting_complete);
                }
                var r = o;
                return (
                  'completed' === n && (r = a),
                  ('push' !== t && 'pull' !== t) ||
                    (r = this.update_domain_placeholder(r, e, n)),
                  (r = i.wpmdb.apply_filters(
                    'wpmdb_get_migration_status_label',
                    r,
                    { intent: t, stage: n },
                  ))
                );
              },
            },
            {
              key: 'disable_export_type_controls',
              value: function() {
                i('.option-group').each(function(e) {
                  i('input', this).attr('disabled', 'disabled'),
                    i('label', this).css('cursor', 'default');
                });
              },
            },
            {
              key: 'enable_export_type_controls',
              value: function() {
                i('.option-group').each(function(e) {
                  i('input', this).removeAttr('disabled'),
                    i('label', this).css('cursor', 'pointer');
                });
              },
            },
            {
              key: 'set_slider_value',
              value: function(e, t, n, o) {
                var a = t;
                void 0 !== o && (a = o),
                  i('.slider', e).slider('value', parseInt(t)),
                  i('.amount', e).html(
                    wpmdb.functions.wpmdb_add_commas(a) + ' ' + n,
                  );
              },
            },
            {
              key: 'set_pause_resume_button',
              value: function(e, t) {
                !0 === this.migration_paused
                  ? ((this.migration_paused = !1),
                    (this.doing_ajax = !0),
                    wpmdb.current_migration.setState(
                      this.previous_progress_title,
                      this.previous_progress_text_primary,
                      'active',
                    ),
                    i('.pause-resume').html(l.pause),
                    wpmdb.current_migration.resumeTimer(),
                    wpmdb.functions.execute_next_step(t))
                  : ((this.migration_paused = !0),
                    (this.doing_ajax = !1),
                    (this.paused_text = l.migration_paused),
                    (this.previous_progress_title = i(
                      '.progress-title',
                    ).html()),
                    (this.previous_progress_text_primary = i(
                      '.progress-text',
                      '.progress-wrapper-primary',
                    ).html()),
                    (this.previous_progress_text_secondary = i(
                      '.progress-text',
                      '.progress-wrapper-secondary ',
                    ).html()),
                    'find_replace' === this.migration_intent &&
                      (this.paused_text = l.find_replace_paused),
                    wpmdb.current_migration.setState(
                      this.paused_text,
                      l.completing_current_request,
                      null,
                    ),
                    i('body').off('click', '.pause-resume'),
                    i('body').off('click', '.cancel'));
              },
            },
            {
              key: 'filter_temp_tables',
              value: function(e, t) {
                var n = p.this_temp_prefix;
                return (
                  'pull' === wpmdb.functions.wpmdb_migration_type() &&
                    void 0 !== wpmdb.common.connection_data &&
                    void 0 !== wpmdb.common.connection_data.temp_prefix &&
                    (n = wpmdb.common.connection_data.temp_prefix),
                  n === t.substring(0, n.length) || e
                );
              },
            },
            {
              key: 'get_table_prefix',
              value: function(e, t) {
                return i('.table-select-wrap .table-prefix').text();
              },
            },
            {
              key: 'lock_replace_url',
              value: function(e) {
                !0 === e
                  ? (i(
                      '.replace-row.pin .replace-right-col input[type="text"]',
                    ).attr('readonly', 'readonly'),
                    i('.replace-row.pin .arrow-col').addClass('disabled'))
                  : (i(
                      '.replace-row.pin .replace-right-col input[type="text"]',
                    ).removeAttr('readonly'),
                    i('.replace-row.pin .arrow-col').removeClass('disabled'));
              },
            },
            {
              key: 'set_connection_data',
              value: function(e) {
                (window.wpmdb.common.previous_connection_data =
                  wpmdb.common.connection_data),
                  (window.wpmdb.common.connection_data = e),
                  i.wpmdb.do_action('wpmdb_connection_data_updated', e);
              },
            },
            {
              key: 'get_max_request_display_info',
              value: function(e) {
                var t = { unit: 'MB' };
                return (t.amount = (e / 1024).toFixed(2)), t;
              },
            },
            {
              key: 'establish_remote_connection_from_saved_profile',
              value: function() {
                var e = wpmdb.functions.wpmdb_migration_type(),
                  t = i.trim(i('.pull-push-connection-info').val()).split('\n');
                if (
                  'undefined' != typeof wpmdb_default_profile &&
                  !0 !== wpmdb_default_profile &&
                  'savefile' !== e &&
                  'find_replace' !== e &&
                  'import' !== e &&
                  !this.doing_ajax &&
                  p.is_pro
                ) {
                  (this.doing_ajax = !0),
                    this.disable_export_type_controls(),
                    i('.connection-status').html(
                      l.establishing_remote_connection,
                    ),
                    i('.connection-status').removeClass(
                      'notification-message error-notice migration-error',
                    ),
                    i('.connection-status').append(this.ajax_spinner);
                  var n = wpmdb.functions.wpmdb_migration_type(),
                    o = this;
                  i.ajax({
                    url: c,
                    type: 'POST',
                    dataType: 'json',
                    cache: !1,
                    data: {
                      action: 'wpmdb_verify_connection_to_remote_site',
                      url: t[0],
                      key: t[1],
                      intent: n,
                      nonce: p.nonces.verify_connection_to_remote_site,
                      convert_post_type_selection: wpmdb_convert_post_type_selection,
                      profile: p.profile,
                    },
                    error: function(e, t, n) {
                      i('.connection-status').html(
                        o.get_ajax_errors(e.responseText, '(#102)', e),
                      ),
                        i('.connection-status').addClass(
                          'notification-message error-notice migration-error',
                        ),
                        i('.ajax-spinner').remove(),
                        (o.doing_ajax = !1),
                        o.enable_export_type_controls();
                    },
                    success: function(e) {
                      if (
                        (i('.ajax-spinner').remove(),
                        (o.doing_ajax = !1),
                        o.enable_export_type_controls(),
                        void 0 !== e.wpmdb_error && 1 === e.wpmdb_error)
                      )
                        return (
                          i('.connection-status').html(e.body),
                          i('.connection-status').addClass(
                            'notification-message error-notice migration-error',
                          ),
                          void (
                            e.body.indexOf('401 Unauthorized') > -1 &&
                            i('.basic-access-auth-wrapper').show()
                          )
                        );
                      if (!0 !== wpmdb.functions.maybe_show_mst_warning(e)) {
                        o.maybe_show_ssl_warning(t[0], t[1], e.scheme),
                          wpmdb.functions.maybe_show_prefix_notice(e.prefix),
                          i('.pull-push-connection-info').addClass(
                            'temp-disabled',
                          ),
                          i('.pull-push-connection-info').attr(
                            'readonly',
                            'readonly',
                          ),
                          i('.connect-button').hide(),
                          i('.connection-status').hide(),
                          i('.step-two').show(),
                          (o.connection_established = !0),
                          o.set_connection_data(e),
                          o.move_connection_info_box(),
                          o.maybe_show_mixed_cased_table_name_warning();
                        var n = '';
                        !1 === wpmdb_default_profile &&
                          'undefined' != typeof wpmdb_loaded_tables &&
                          (n = wpmdb_loaded_tables),
                          (o.$pull_select = wpmdb.functions.create_table_select(
                            wpmdb.common.connection_data.tables,
                            wpmdb.common.connection_data.table_sizes_hr,
                            n,
                          ));
                        var a = '';
                        !1 === wpmdb_default_profile &&
                          'undefined' != typeof wpmdb_loaded_post_types &&
                          (void 0 !== e.select_post_types
                            ? (i('#exclude-post-types').attr(
                                'checked',
                                'checked',
                              ),
                              i('.post-type-select-wrap').show(),
                              (a = e.select_post_types))
                            : (a = wpmdb_loaded_post_types));
                        var r = document.createElement('select');
                        i(r).attr({
                          multiple: 'multiple',
                          name: 'select_post_types[]',
                          id: 'select-post-types',
                          class: 'multiselect',
                        }),
                          i.each(
                            wpmdb.common.connection_data.post_types,
                            function(e, t) {
                              var n = i.inArray(t, a);
                              (n =
                                -1 !== n ||
                                (!0 === wpmdb_convert_exclude_revisions &&
                                  'revision' !== t)
                                  ? ' selected="selected" '
                                  : ' '),
                                i(r).append(
                                  '<option' +
                                    n +
                                    'value="' +
                                    t +
                                    '">' +
                                    t +
                                    '</option>',
                                );
                            },
                          ),
                          (o.$pull_post_type_select = r);
                        var s = '';
                        !1 === wpmdb_default_profile &&
                          'undefined' != typeof wpmdb_loaded_tables_backup &&
                          (s = wpmdb_loaded_tables_backup);
                        var c = document.createElement('select');
                        i(c).attr({
                          multiple: 'multiple',
                          name: 'select_backup[]',
                          id: 'select-backup',
                          class: 'multiselect',
                        }),
                          i.each(wpmdb.common.connection_data.tables, function(
                            e,
                            t,
                          ) {
                            var n = i.inArray(t, s);
                            (n = -1 !== n ? ' selected="selected" ' : ' '),
                              i(c).append(
                                '<option' +
                                  n +
                                  'value="' +
                                  t +
                                  '">' +
                                  t +
                                  ' (' +
                                  wpmdb.common.connection_data.table_sizes_hr[
                                    t
                                  ] +
                                  ')</option>',
                              );
                          }),
                          (o.$push_select_backup = c),
                          'pull' === wpmdb.functions.wpmdb_migration_type()
                            ? (i.wpmdb.do_action(
                                'wpmdb_update_pull_table_select',
                              ),
                              i('#select-post-types').remove(),
                              i('.exclude-post-types-warning').after(
                                o.$pull_post_type_select,
                              ),
                              i('#select-backup').remove(),
                              i('.backup-tables-wrap').prepend(
                                o.$pull_select_backup,
                              ),
                              i('.table-prefix').html(e.prefix),
                              i('.uploads-dir').html(p.this_uploads_dir))
                            : (i('#select-backup').remove(),
                              i('.backup-tables-wrap').prepend(
                                o.$push_select_backup,
                              )),
                          i.wpmdb.do_action(
                            'verify_connection_to_remote_site',
                            wpmdb.common.connection_data,
                          );
                      } else i('.connection-status').hide();
                    },
                  });
                }
              },
            },
            {
              key: 'migrate_table_recursive',
              value: function(e, t, n) {
                var o = this,
                  a = n || 0;
                if (a >= this.tables_to_migrate.length)
                  if (
                    'upload' === this.stage &&
                    wpmdb.current_migration.model.getStageItems('find_replace')
                      .length
                  )
                    (this.stage = 'find_replace'),
                      (this.tables_to_migrate = wpmdb.current_migration.model.getStageItems(
                        'find_replace',
                        'name',
                      )),
                      (this.tables_to_migrate = this.tables_to_migrate.map(
                        function(e) {
                          return '_mig_' + e;
                        },
                      )),
                      (a = 0);
                  else {
                    if ('backup' !== this.stage)
                      return (
                        i('.progress-label').removeClass('label-visible'),
                        (wpmdb.common.hooks = i.wpmdb.apply_filters(
                          'wpmdb_before_migration_complete_hooks',
                          wpmdb.common.hooks,
                        )),
                        wpmdb.common.hooks.push(
                          wpmdb.functions.migration_complete,
                        ),
                        wpmdb.common.hooks.push(wpmdb.functions.wpmdb_flush),
                        (wpmdb.common.hooks = i.wpmdb.apply_filters(
                          'wpmdb_after_migration_complete_hooks',
                          wpmdb.common.hooks,
                        )),
                        wpmdb.common.hooks.push(
                          wpmdb.functions.migration_complete_events,
                        ),
                        (wpmdb.common.next_step_in_migration = {
                          fn: wpmdb.functions.wpmdb_call_next_hook,
                        }),
                        void wpmdb.functions.execute_next_step()
                      );
                    if (
                      (-1 !== i.inArray(this.migration_intent, ['push', 'pull'])
                        ? (this.stage = 'migrate')
                        : 'import' === this.migration_intent
                        ? (this.stage = 'upload')
                        : (this.stage = this.migration_intent),
                      wpmdb.current_migration.model.setActiveStage(this.stage),
                      'find_replace' !== this.stage && 'migrate' !== this.stage)
                    )
                      return void wpmdb.functions.wpmdb_call_next_hook();
                    (a = 0),
                      (this.tables_to_migrate = wpmdb.functions.get_tables_to_migrate(
                        null,
                        null,
                      ));
                  }
                var r = 0;
                a === this.tables_to_migrate.length - 1 && (r = 1);
                var s = 0;
                -1 !== i.inArray(this.migration_intent, ['push', 'pull']) &&
                  1 === parseInt(wpmdb.common.connection_data.gzip) &&
                  (s = 1);
                var d = {
                  action: 'wpmdb_migrate_table',
                  migration_state_id: wpmdb.migration_state_id,
                  table: this.tables_to_migrate[a],
                  stage: this.stage,
                  current_row: e,
                  last_table: r,
                  primary_keys: t,
                  gzip: s,
                  nonce: p.nonces.migrate_table,
                };
                -1 !== i.inArray(this.migration_intent, ['push', 'pull']) &&
                  ((d.bottleneck = wpmdb.common.connection_data.bottleneck),
                  (d.prefix = wpmdb.common.connection_data.prefix)),
                  wpmdb.common.connection_data &&
                    wpmdb.common.connection_data.path_current_site &&
                    wpmdb.common.connection_data.domain &&
                    ((d.path_current_site =
                      wpmdb.common.connection_data.path_current_site),
                    (d.domain_current_site =
                      wpmdb.common.connection_data.domain)),
                  (this.doing_ajax = !0),
                  i.ajax({
                    url: c,
                    type: 'POST',
                    dataType: 'text',
                    cache: !1,
                    timeout: 0,
                    data: d,
                    error: function(e, t, n) {
                      var i =
                        l.table_process_problem +
                        ' ' +
                        o.tables_to_migrate[a] +
                        '<br /><br />' +
                        l.status +
                        ': ' +
                        e.status +
                        ' ' +
                        e.statusText +
                        '<br /><br />' +
                        l.response +
                        ':<br />' +
                        e.responseText;
                      wpmdb.current_migration.setState(
                        l.migration_failed,
                        i,
                        'error',
                      ),
                        (o.doing_ajax = !1),
                        console.log(e),
                        console.log(t),
                        console.log(n),
                        (wpmdb.common.migration_error = !0),
                        wpmdb.functions.migration_complete_events();
                    },
                    success: function(e) {
                      (o.doing_ajax = !1), (e = i.trim(e));
                      var t = wpmdb.functions.wpmdb_parse_json(e),
                        n = '';
                      if (!1 === t || null === t)
                        return (
                          (n =
                            '' === e || null === e
                              ? l.table_process_problem_empty_response +
                                ' ' +
                                o.tables_to_migrate[a]
                              : o.get_ajax_errors(e, null, null)),
                          wpmdb.current_migration.setState(
                            l.migration_failed,
                            n,
                            'error',
                          ),
                          (wpmdb.common.migration_error = !0),
                          void wpmdb.functions.migration_complete_events()
                        );
                      if (void 0 !== t.wpmdb_error && 1 === t.wpmdb_error)
                        return (
                          wpmdb.current_migration.setState(
                            l.migration_failed,
                            t.body,
                            'error',
                          ),
                          (wpmdb.common.migration_error = !0),
                          void wpmdb.functions.migration_complete_events()
                        );
                      var s = o.tables_to_migrate[a];
                      'import' === o.migration_intent &&
                        'find_replace' === o.stage &&
                        (s = s.replace(p.this_temp_prefix, '')),
                        wpmdb.current_migration.setText(),
                        wpmdb.current_migration.model
                          .getStageModel(o.stage)
                          .setItemRowsTransferred(s, t.current_row),
                        1 === r &&
                          'savefile' === o.migration_intent &&
                          (void 0 !== t.dump_filename &&
                            (o.dump_filename = t.dump_filename),
                          void 0 !== t.dump_path &&
                            (o.dump_path = t.dump_path)),
                        -1 === parseInt(t.current_row) &&
                          (a++, (t.current_row = ''), (t.primary_keys = '')),
                        (wpmdb.common.next_step_in_migration = {
                          fn: wpmdb.functions.migrate_table_recursive,
                          args: [t.current_row, t.primary_keys, a],
                        }),
                        wpmdb.functions.execute_next_step();
                    },
                  });
              },
            },
            {
              key: 'migration_complete_events',
              value: function() {
                if (!1 === wpmdb.common.migration_error)
                  if ('' === wpmdb.common.non_fatal_errors)
                    if (
                      ('savefile' !== this.migration_intent &&
                        !0 === i('#save_computer').is(':checked') &&
                        wpmdb.current_migration.setText(),
                      (this.completed_msg =
                        this.completed_msg +
                        '&nbsp;<div class="dashicons dashicons-yes"></div>'),
                      !0 === this.migration_cancelled)
                    ) {
                      var e = l.migration_cancelled_success;
                      'find_replace' === this.migration_intent &&
                        (e = l.find_replace_cancelled_success),
                        wpmdb.current_migration.setState(
                          this.completed_msg,
                          e,
                          'cancelled',
                        );
                    } else
                      wpmdb.current_migration.setState(
                        this.completed_msg,
                        '',
                        'complete',
                      );
                  else
                    wpmdb.current_migration.setState(
                      l.completed_with_some_errors,
                      wpmdb.common.non_fatal_errors,
                      'error',
                    );
                i('.migration-controls').addClass('hidden'),
                  (wpmdb.common.hooks = []),
                  (wpmdb.common.call_stack = []),
                  (wpmdb.common.migration_error = !1),
                  (this.currently_migrating = !1),
                  (this.migration_completed = !0),
                  (this.migration_paused = !1),
                  (this.migration_cancelled = !1),
                  (this.doing_ajax = !1),
                  (wpmdb.common.non_fatal_errors = ''),
                  (this.tables_to_migrate = []),
                  i('.progress-label').remove(),
                  i('.migration-progress-ajax-spinner').remove(),
                  i('.close-progress-content').show(),
                  i('#overlay').css('cursor', 'pointer'),
                  wpmdb.current_migration.model.setMigrationComplete();
              },
            },
            {
              key: 'migration_complete',
              value: function() {
                var e = this;
                if (
                  (i('.migration-controls').addClass('hidden'),
                  'savefile' === this.migration_intent)
                ) {
                  this.currently_migrating = !1;
                  var t = l.migration_complete;
                  if (i('#save_computer').is(':checked')) {
                    var n =
                      p.this_download_url +
                      encodeURIComponent(this.dump_filename);
                    i('#gzip_file').is(':checked') && (n += '&gzip=1'),
                      (window.location = n);
                  } else t = l.completed_dump_located_at + ' ' + this.dump_path;
                  !1 === wpmdb.common.migration_error &&
                    (wpmdb.functions.migration_complete_events(),
                    wpmdb.current_migration.setState(
                      this.completed_msg,
                      t,
                      'complete',
                    ));
                } else {
                  wpmdb.current_migration.setState(
                    null,
                    l.finalizing_migration,
                    'finalizing',
                  );
                  var o = {
                    action: 'wpmdb_finalize_migration',
                    migration_state_id: wpmdb.migration_state_id,
                    tables: this.tables_to_migrate.join(','),
                    nonce: p.nonces.finalize_migration,
                  };
                  -1 !== i.inArray(this.migration_intent, ['push', 'pull']) &&
                    (o.prefix = wpmdb.common.connection_data.prefix),
                    (this.doing_ajax = !0),
                    i.ajax({
                      url: c,
                      type: 'POST',
                      dataType: 'text',
                      cache: !1,
                      data: o,
                      error: function(t, n, i) {
                        (e.doing_ajax = !1),
                          wpmdb.current_migration.setState(
                            l.migration_failed,
                            l.finalize_tables_problem,
                            'error',
                          ),
                          alert(t + ' : ' + n + ' : ' + i),
                          (wpmdb.common.migration_error = !0),
                          wpmdb.functions.migration_complete_events();
                      },
                      success: function(t) {
                        if (((e.doing_ajax = !1), '1' !== i.trim(t)))
                          return (
                            wpmdb.current_migration.setState(
                              l.migration_failed,
                              t,
                              'error',
                            ),
                            (wpmdb.common.migration_error = !0),
                            void wpmdb.functions.migration_complete_events()
                          );
                        (wpmdb.common.next_step_in_migration = {
                          fn: wpmdb.functions.wpmdb_call_next_hook,
                        }),
                          wpmdb.functions.execute_next_step();
                      },
                    });
                }
              },
            },
            {
              key: 'wpmdb_flush',
              value: function() {
                var e = this;
                'savefile' !== this.migration_intent &&
                  (wpmdb.current_migration.setText(l.flushing),
                  (this.doing_ajax = !0),
                  i.ajax({
                    url: c,
                    type: 'POST',
                    dataType: 'text',
                    cache: !1,
                    data: {
                      action: 'wpmdb_flush',
                      migration_state_id: wpmdb.migration_state_id,
                      nonce: p.nonces.flush,
                    },
                    error: function(t, n, i) {
                      (e.doing_ajax = !1),
                        wpmdb.current_migration.setState(
                          l.migration_failed,
                          l.flush_problem,
                          'error',
                        ),
                        alert(t + ' : ' + n + ' : ' + i),
                        (wpmdb.common.migration_error = !0),
                        wpmdb.functions.migration_complete_events();
                    },
                    success: function(t) {
                      if (((e.doing_ajax = !1), '1' !== i.trim(t)))
                        return (
                          wpmdb.current_migration.setState(
                            l.migration_failed,
                            t,
                            'error',
                          ),
                          (wpmdb.common.migration_error = !0),
                          void wpmdb.functions.migration_complete_events()
                        );
                      (wpmdb.common.next_step_in_migration = {
                        fn: wpmdb.functions.wpmdb_call_next_hook,
                      }),
                        wpmdb.functions.execute_next_step();
                    },
                  }));
              },
            },
            {
              key: 'execute_next_step',
              value: function() {
                var e = this;
                if (
                  0 < this.delay_between_requests &&
                  !1 === this.flag_skip_delay
                )
                  setTimeout(function() {
                    (this.flag_skip_delay = !0),
                      wpmdb.functions.execute_next_step();
                  }, this.delay_between_requests);
                else if (
                  ((this.flag_skip_delay = !1), !0 === this.migration_paused)
                ) {
                  i('.migration-progress-ajax-spinner').hide(),
                    wpmdb.current_migration.pauseTimer();
                  var t = '';
                  !0 === this.is_auto_pause_before_finalize
                    ? ((t = l.paused_before_finalize),
                      (this.is_auto_pause_before_finalize = !1),
                      'find_replace' ===
                        wpmdb.functions.wpmdb_migration_type() &&
                        (t = l.find_replace_paused_before_finalize))
                    : (t = l.paused),
                    wpmdb.current_migration.setState(null, t, 'paused'),
                    i('body').on('click', '.pause-resume', function(e) {
                      this.set_pause_resume_button(e);
                    }),
                    i('body').on('click', '.cancel', function(e) {
                      this.cancel_migration(e);
                    }),
                    i('.pause-resume').html(l.resume);
                } else if (!0 === this.migration_cancelled) {
                  var n;
                  (this.migration_intent = wpmdb.functions.wpmdb_migration_type()),
                    'savefile' === this.migration_intent
                      ? (n = l.removing_local_sql)
                      : 'pull' === this.migration_intent
                      ? (n =
                          'backup' === this.stage
                            ? l.removing_local_backup
                            : l.removing_local_temp_tables)
                      : 'push' === this.migration_intent &&
                        (n =
                          'backup' === this.stage
                            ? l.removing_remote_sql
                            : l.removing_remote_temp_tables),
                    wpmdb.current_migration.setText(n);
                  var o = {
                    action: 'wpmdb_cancel_migration',
                    migration_state_id: wpmdb.migration_state_id,
                    nonce: p.nonces.cancel_migration,
                  };
                  (this.doing_ajax = !0),
                    i.ajax({
                      url: c,
                      type: 'POST',
                      dataType: 'text',
                      cache: !1,
                      data: o,
                      error: function(t, n, i) {
                        wpmdb.current_migration.setState(
                          l.migration_cancellation_failed,
                          l.manually_remove_temp_files +
                            '<br /><br />' +
                            l.status +
                            ': ' +
                            t.status +
                            ' ' +
                            t.statusText +
                            '<br /><br />' +
                            l.response +
                            ':<br />' +
                            t.responseText,
                          'error',
                        ),
                          console.log(t),
                          console.log(n),
                          console.log(i),
                          (e.doing_ajax = !1),
                          (wpmdb.common.migration_error = !0),
                          wpmdb.functions.migration_complete_events();
                      },
                      success: function(t) {
                        if (
                          ((e.doing_ajax = !1),
                          (t = i.trim(t)),
                          ('push' === e.migration_intent && '1' !== t) ||
                            ('push' !== e.migration_intent && '' !== t))
                        )
                          return (
                            void 0 !== t &&
                              void 0 !== t.wpmdb_error &&
                              1 === t.wpmdb_error &&
                              (t = t.wpmdb_error),
                            wpmdb.current_migration.setState(
                              l.migration_cancellation_failed,
                              t,
                              'error',
                            ),
                            (wpmdb.common.migration_error = !0),
                            void wpmdb.functions.migration_complete_events()
                          );
                        (e.completed_msg = l.migration_cancelled),
                          'find_replace' === e.migration_intent &&
                            (e.completed_msg = l.find_replace_cancelled),
                          wpmdb.functions.migration_complete_events(),
                          wpmdb.current_migration.setStatus('cancelled');
                      },
                    });
                } else
                  wpmdb.common.next_step_in_migration.fn.apply(
                    null,
                    wpmdb.common.next_step_in_migration.args,
                  );
              },
            },
            {
              key: 'maybe_show_prefix_notice',
              value: function(e) {
                var t = i('.prefix-notice');
                t.hide(),
                  e !== p.this_prefix &&
                    (i('.remote-prefix').html(e),
                    (this.show_prefix_notice = !0),
                    t.show());
              },
            },
            {
              key: 'maybe_show_select_table_notice',
              value: function() {
                if (
                  i('#migrate-selected').is(':checked') &&
                  null === i('#select-tables').val()
                ) {
                  if ('import' !== wpmdb.functions.wpmdb_migration_type())
                    return alert(l.please_select_one_table), !0;
                  if (
                    i('#import-find-replace').is(':checked') &&
                    i('#select-tables').is(':visible')
                  )
                    return alert(l.please_select_one_table_import), !0;
                }
                return (
                  !(
                    'savefile' === wpmdb.functions.wpmdb_migration_type() ||
                    !i('#backup-manual-select').is(':checked') ||
                    null !== i('#select-backup').val()
                  ) && (alert(l.please_select_one_table_backup), !0)
                );
              },
            },
            {
              key: 'remove_protocol',
              value: function(e) {
                return e.replace(/^https?:/i, '');
              },
            },
            {
              key: 'create_table_select',
              value: function(e, t, n) {
                var o = document.createElement('select');
                return (
                  i(o).attr({
                    multiple: 'multiple',
                    name: 'select_tables[]',
                    id: 'select-tables',
                    class: 'multiselect',
                  }),
                  0 < e.length &&
                    i.each(e, function(e, a) {
                      if (
                        !i.wpmdb.apply_filters('wpmdb_exclude_table', !1, a)
                      ) {
                        var r = ' ';
                        void 0 !== n &&
                          null !== n &&
                          0 < n.length &&
                          -1 !== i.inArray(a, n) &&
                          (r = ' selected="selected" ');
                        var s = '';
                        0 !== t.length && (s = ' (' + t[a] + ')'),
                          i(o).append(
                            '<option' +
                              r +
                              'value="' +
                              a +
                              '">' +
                              a +
                              s +
                              '</option>',
                          );
                      }
                    }),
                  o
                );
              },
            },
            {
              key: 'get_tables_to_migrate',
              value: function() {
                var e = [],
                  t = wpmdb.functions.wpmdb_migration_type();
                return (
                  'migrate_select' ===
                  i('input[name=table_migrate_option]:checked').val()
                    ? (e = i('#select-tables').val())
                    : 'pull' !== t && void 0 !== p.this_prefixed_tables
                    ? (e = p.this_prefixed_tables)
                    : 'pull' === t &&
                      void 0 !== wpmdb.common.connection_data &&
                      void 0 !== wpmdb.common.connection_data.prefixed_tables &&
                      (e = wpmdb.common.connection_data.prefixed_tables),
                  e
                );
              },
            },
            {
              key: 'update_migrate_button_text',
              value: function() {
                var e = wpmdb.functions.wpmdb_migration_type(),
                  t = i('#save-migration-profile').is(':checked')
                    ? '_save'
                    : '',
                  n = 'migrate_button_' + ('savefile' === e ? 'export' : e) + t;
                i('.migrate-db .button-primary').val(l[n]);
              },
            },
            {
              key: 'connection_box_changed',
              value: function() {
                var e = this,
                  t = i('.pull-push-connection-info');
                if (
                  -1 !==
                    i.inArray(wpmdb.functions.wpmdb_migration_type(), [
                      'push',
                      'pull',
                    ]) &&
                  ((!this.doing_ajax && !i(t).hasClass('temp-disabled')) ||
                    !1 !== wpmdb.force_reconnect)
                ) {
                  wpmdb.force_reconnect = !1;
                  var n = i('.pull-push-connection-info').val(),
                    o = i.trim(n).split('\n'),
                    a = !1,
                    r = '';
                  if (
                    ('' === o && ((a = !0), (r = l.connection_info_missing)),
                    1 === o.length && !a)
                  ) {
                    var s = i.trim(n).split(' ');
                    2 === s.length && (o = s);
                  }
                  2 === o.length ||
                    a ||
                    ((a = !0), (r = l.connection_info_incorrect)),
                    a ||
                      this.validate_url(o[0]) ||
                      ((a = !0), (r = l.connection_info_url_invalid));
                  var d = 0;
                  if (
                    (void 0 !== o[1] && (d = o[1].length),
                    a ||
                      32 === d ||
                      40 === d ||
                      ((a = !0), (r = l.connection_info_key_invalid)),
                    a ||
                      o[0] !== p.connection_info[0] ||
                      ((a = !0), (r = l.connection_info_local_url)),
                    a ||
                      o[1] !== p.connection_info[1] ||
                      ((a = !0), (r = l.connection_info_local_key)),
                    a)
                  )
                    return (
                      i('.connection-status').html(r),
                      void i('.connection-status').addClass(
                        'notification-message error-notice migration-error',
                      )
                    );
                  var m = o[0] + '\n' + o[1];
                  1 === i.trim(n).split('\n').length &&
                    i('.pull-push-connection-info').val(m),
                    !1 === p.openssl_available &&
                      ((o[0] = o[0].replace('https://', 'http://')),
                      (m = o[0] + '\n' + o[1]),
                      i('.pull-push-connection-info').val(m)),
                    (this.show_prefix_notice = !1),
                    (this.doing_ajax = !0),
                    this.disable_export_type_controls(),
                    i('.basic-access-auth-wrapper').is(':visible') &&
                      ((o[0] = o[0].replace(/\/\/(.*)@/, '//')),
                      (o[0] = o[0].replace(
                        '//',
                        '//' +
                          encodeURIComponent(
                            i.trim(i('.auth-username').val()),
                          ) +
                          ':' +
                          encodeURIComponent(
                            i.trim(i('.auth-password').val()),
                          ) +
                          '@',
                      )),
                      (m = o[0] + '\n' + o[1]),
                      i('.pull-push-connection-info').val(m),
                      i('.basic-access-auth-wrapper').hide()),
                    i('.step-two').hide(),
                    i('.ssl-notice').hide(),
                    i('.prefix-notice').hide(),
                    i('.connection-status').show(),
                    i('.connection-status').html(
                      l.establishing_remote_connection,
                    ),
                    i('.connection-status').removeClass(
                      'notification-message error-notice migration-error',
                    ),
                    i('.connection-status').append(this.ajax_spinner);
                  var u = wpmdb.functions.wpmdb_migration_type();
                  return (
                    (this.profile_name_edited = !1),
                    i.ajax({
                      url: c,
                      type: 'POST',
                      dataType: 'json',
                      cache: !1,
                      data: {
                        action: 'wpmdb_verify_connection_to_remote_site',
                        url: o[0],
                        key: o[1],
                        intent: u,
                        nonce: p.nonces.verify_connection_to_remote_site,
                      },
                      error: function(t, n, o) {
                        i('.connection-status').html(
                          e.get_ajax_errors(t.responseText, '(#100)', t),
                        ),
                          i('.connection-status').addClass(
                            'notification-message error-notice migration-error',
                          ),
                          i('.ajax-spinner').remove(),
                          (e.doing_ajax = !1),
                          e.enable_export_type_controls();
                      },
                      success: function(t) {
                        if (
                          (i('.ajax-spinner').remove(),
                          (e.doing_ajax = !1),
                          e.enable_export_type_controls(),
                          void 0 !== t.wpmdb_error && 1 === t.wpmdb_error)
                        )
                          return (
                            i('.connection-status').html(t.body),
                            i('.connection-status').addClass(
                              'notification-message error-notice migration-error',
                            ),
                            t.body.indexOf('401 Unauthorized') > -1 &&
                              i('.basic-access-auth-wrapper').show(),
                            void (
                              i('.pull-push-connection-info').hasClass(
                                'temp-disabled',
                              ) ||
                              i('.connect-button').is(':visible') ||
                              (i('.pull-push-connection-info').removeAttr(
                                'readonly',
                              ),
                              i('.connect-button').show())
                            )
                          );
                        if (!0 !== wpmdb.functions.maybe_show_mst_warning(t)) {
                          e.maybe_show_ssl_warning(o[0], o[1], t.scheme);
                          var n = e.get_domain_name(t.url);
                          i('.create-new-profile').val(n),
                            i('.pull-push-connection-info').addClass(
                              'temp-disabled',
                            ),
                            i('.pull-push-connection-info').attr(
                              'readonly',
                              'readonly',
                            ),
                            i('.connect-button').hide(),
                            i('.connection-status').hide(),
                            i('.step-two').show(),
                            wpmdb.functions.maybe_show_prefix_notice(t.prefix),
                            (e.connection_established = !0),
                            e.set_connection_data(t),
                            e.move_connection_info_box(),
                            e.change_replace_values(),
                            e.maybe_show_mixed_cased_table_name_warning(),
                            e.refresh_table_selects(null, null, e),
                            (e.$push_select_backup = i(e.$pull_select).clone()),
                            i(e.$push_select_backup).attr({
                              name: 'select_backup[]',
                              id: 'select-backup',
                            });
                          var a = document.createElement('select');
                          i(a).attr({
                            multiple: 'multiple',
                            name: 'select_post_types[]',
                            id: 'select-post-types',
                            class: 'multiselect',
                          }),
                            i.each(
                              wpmdb.common.connection_data.post_types,
                              function(e, t) {
                                i(a).append(
                                  '<option value="' +
                                    t +
                                    '">' +
                                    t +
                                    '</option>',
                                );
                              },
                            ),
                            (e.$pull_post_type_select = a),
                            i(
                              '#new-path-missing-warning, #new-url-missing-warning',
                            ).hide(),
                            'pull' === wpmdb.functions.wpmdb_migration_type()
                              ? (i('#new-url').val(
                                  e.remove_protocol(p.this_url),
                                ),
                                i('#new-path').val(p.this_path),
                                'true' === p.is_multisite &&
                                  (i('#new-domain').val(p.this_domain),
                                  i(
                                    '.replace-row.pin .old-replace-col input[type="text"]',
                                  ).val(e.remove_protocol(t.url))),
                                i('#old-url').val(e.remove_protocol(t.url)),
                                i('#old-path').val(t.path),
                                i.wpmdb.do_action(
                                  'wpmdb_update_pull_table_select',
                                ),
                                i('#select-post-types').remove(),
                                i('.exclude-post-types-warning').after(
                                  e.$pull_post_type_select,
                                ),
                                wpmdb.functions.exclude_post_types_warning(),
                                i('.table-prefix').html(t.prefix),
                                i('.backup-table-prefix').html(
                                  p.site_details.prefix,
                                ),
                                i('.uploads-dir').html(p.this_uploads_dir))
                              : (i('#new-url').val(e.remove_protocol(t.url)),
                                i('#new-path').val(t.path),
                                'true' === p.is_multisite &&
                                  i(
                                    '.replace-row.pin .old-replace-col input[type="text"]',
                                  ).val(e.remove_protocol(p.this_url)),
                                i.wpmdb.do_action(
                                  'wpmdb_update_push_table_select',
                                ),
                                i('#select-backup').remove(),
                                i('.backup-tables-wrap').prepend(
                                  e.$push_select_backup,
                                )),
                            (wpmdb.common.next_step_in_migration = {
                              fn: i.wpmdb.do_action,
                              args: [
                                'verify_connection_to_remote_site',
                                wpmdb.common.connection_data,
                              ],
                            }),
                            wpmdb.functions.execute_next_step();
                        } else i('.connection-status').hide();
                      },
                    })
                  );
                }
              },
            },
          ]),
          e
        );
      })();
    t.default = d;
  },
  function(e, t) {
    window.jQuery;
    jQuery.wpmdb = {
      hooks: { action: {}, filter: {} },
      add_action: function(e, t, n, i) {
        jQuery.wpmdb.add_hook('action', e, t, n, i);
      },
      add_filter: function(e, t, n, i) {
        jQuery.wpmdb.add_hook('filter', e, t, n, i);
      },
      do_action: function(e, t) {
        jQuery.wpmdb.do_hook('action', e, null, t);
      },
      apply_filters: function(e, t, n) {
        return jQuery.wpmdb.do_hook('filter', e, t, n);
      },
      remove_action: function(e, t) {
        jQuery.wpmdb.remove_hook('action', e, t);
      },
      remove_filter: function(e, t) {
        jQuery.wpmdb.remove_hook('filter', e, t);
      },
      add_hook: function(e, t, n, i, o) {
        void 0 === jQuery.wpmdb.hooks[e][t] && (jQuery.wpmdb.hooks[e][t] = []);
        var a = jQuery.wpmdb.hooks[e][t];
        void 0 === i && (i = t + '_' + a.length),
          jQuery.wpmdb.hooks[e][t].push({ tag: i, callable: n, instance: o });
      },
      do_hook: function(e, t, n, i) {
        if (void 0 !== jQuery.wpmdb.hooks[e][t])
          for (var o = jQuery.wpmdb.hooks[e][t], a = 0; a < o.length; a++)
            'action' === e
              ? o[a].callable.call(o[a].instance, i, o[a].instance)
              : (n = o[a].callable.call(o[a].instance, n, i, o[a].instance));
        if ('filter' === e) return n;
      },
      remove_hook: function(e, t, n) {
        if (void 0 !== jQuery.wpmdb.hooks[e][t])
          for (var i = jQuery.wpmdb.hooks[e][t], o = i.length - 1; 0 < o; o--)
            (void 0 !== n && n !== i[o].tag) || i.splice(o, 1);
      },
    };
  },
  function(e, t) {
    window.jQuery;
    !(function(e, t) {
      var n = !1,
        i = e('#select-tables').clone(),
        o = [],
        a = [],
        r = !1,
        s = '',
        c = {},
        l =
          '<img src="' +
          t.functions.get_spinner_url() +
          '" alt="" class="ajax-spinner general-spinner" />';
      function p() {
        var t = e('.find-replace-rows');
        return e('#import-find-replace').is(':checked') ? t.show() : t.hide();
      }
      e.wpmdb.add_filter('wpmdb_get_migration_status_label', function(e, t) {
        return (
          'import' === t.intent &&
            (e =
              'completed' === t.stage
                ? wpmdb_strings.import_label_completed
                : wpmdb_strings.import_label_migrating),
          e
        );
      }),
        e.wpmdb.add_action('move_connection_info_box', function(t) {
          var i = e('.import-file-status');
          'import' === t.migration_type
            ? (n
                ? r && e('.unrecognized-import-file-notice').show()
                : (e('.step-two').hide(),
                  i.hasClass('profile-loaded')
                    ? (i.attr(
                        'class',
                        'import-file-status profile-loaded notification-message success-notice',
                      ),
                      i.html(wpmdb_strings.import_profile_loaded))
                    : i.html(wpmdb_strings.please_select_sql_file),
                  i.show()),
              p(),
              e('.mst-options').hide(),
              e(
                '.import-find-replace-option, .import-active-plugin-option',
              ).show())
            : (e(
                '.find-replace-rows, .table-options, .advanced-options, .exclude-post-types-options, label[for="backup-selected"]',
              ).show(),
              e(
                '.import-find-replace-option, .find-replace-options, .import-file-status, .import-active-plugin-option, .unrecognized-import-file-notice',
              ).hide(),
              'search_all_imported' ===
                e('input[name=table_migrate_option]:checked').val() &&
                e(
                  'input[name=table_migrate_option][value=migrate_only_with_prefix]',
                ).prop('checked', !0));
        }),
        e.wpmdb.add_action('wpmdb_migration_initiated', function(e) {
          'import' === t.functions.wpmdb_migration_type() &&
            ('backup' === e &&
              t.common.hooks.push(t.functions.migrate_table_recursive),
            t.common.hooks.push(t.functions.upload_file_recursive),
            (t.common.next_step_in_migration = {
              fn: t.functions.wpmdb_call_next_hook,
            }),
            t.functions.execute_next_step());
        }),
        e.wpmdb.add_action('wpmdb_update_import_table_select', function() {
          e('#select-tables').remove(),
            e('.select-tables-wrap').prepend(i),
            e('#select-tables').change();
        }),
        e.wpmdb.add_filter('wpmdb_backup_selected_tables', function(e) {
          return 'import' === t.functions.wpmdb_migration_type() && (e = a), e;
        }),
        e.wpmdb.add_action('wpmdb_add_migration_stages', function(n) {
          'import' === t.functions.wpmdb_migration_type() &&
            (t.current_migration.model.addStage('upload', [], 'local', {
              strings: { stage_title: wpmdb_strings.upload },
            }),
            t.current_migration.model.addStage('import', [], 'local', {
              strings: { stage_title: wpmdb_strings.migrate_button_import },
            }),
            e('#import-find-replace').is(':checked') &&
              ((o = n.tables_to_migrate),
              t.current_migration.model.addStage('find_replace', [], 'local', {
                strings: {
                  migrated: wpmdb_strings.searched,
                  stage_title: wpmdb_strings.migrate_button_find_replace,
                },
              })));
        }),
        e.wpmdb.add_filter('wpmdb_initiate_migration_request_data', function(
          e,
        ) {
          return (
            'import' === t.functions.wpmdb_migration_type() &&
              (e.import_info = c),
            e
          );
        }),
        e('#import-file').on('change', function(o) {
          var d = o.target.files,
            m = d[0],
            u = new FileReader(),
            _ = e('.import-file-status'),
            h = e('label[for="backup-selected"]'),
            g = e('.prefix-notice'),
            f = e('.unrecognized-import-file-notice'),
            b = e('.step-two'),
            w = e('#old-url'),
            v = e('#old-path'),
            y = e('#new-url'),
            x = e('#new-path');
          if (
            (_.hide().attr('class', 'import-file-status'),
            g.hide(),
            f.hide(),
            b.hide(),
            e('.mst-required ').hide(),
            d.length)
          ) {
            if ('.sql' !== m.name.slice(-4) && '.sql.gz' !== m.name.slice(-7))
              return (
                _.addClass('notification-message error-notice migration-error')
                  .text(wpmdb_strings.invalid_sql_file)
                  .show(),
                void b.hide()
              );
            (n = !0),
              (s = ''),
              _.text(wpmdb_strings.parsing_sql_file)
                .append(l)
                .show(),
              (u.onloadend = function(n) {
                n.target.readyState === FileReader.DONE &&
                  e.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    dataType: 'json',
                    cache: !1,
                    data: {
                      action: 'wpmdb_get_import_info',
                      file_data: n.target.result,
                      nonce: wpmdb_data.nonces.import_file,
                    },
                    error: function(e, t, n) {
                      console.log(e, t, n);
                    },
                    success: function(n) {
                      if (
                        (e('.ajax-spinner').remove(),
                        _.hide(),
                        !0 !== t.functions.maybe_show_mst_warning(n))
                      )
                        if (
                          (b.show(),
                          void 0 !== n.wpmdb_error && 1 === n.wpmdb_error)
                        )
                          _.text(n.body)
                            .addClass(
                              'notification-message error-notice migration-error',
                            )
                            .show(),
                            b.hide();
                        else {
                          var o = t.functions.get_localStorage_form_data();
                          if (
                            ((c = n),
                            void 0 !== n.prefix &&
                              ((s = n.prefix),
                              e('.table-prefix').text(n.prefix),
                              t.functions.maybe_show_prefix_notice(n.prefix)),
                            void 0 !== n.tables)
                          ) {
                            (a = n.tables),
                              h.show(),
                              o ||
                                (w.val(t.functions.remove_protocol(n.URL)),
                                v.val(n.path),
                                y.val(
                                  t.functions.remove_protocol(
                                    wpmdb_data.this_url,
                                  ),
                                ),
                                x.val(wpmdb_data.this_path));
                            var l = [],
                              d = [];
                            if (
                              (o
                                ? ((l = o.select_tables),
                                  (d = o.select_post_types),
                                  t.functions.remove_localStorage_form_data())
                                : 'migrate_only_with_prefix' !==
                                    e(
                                      'input[name=table_migrate_option]:checked',
                                    ).val() ||
                                  _.hasClass('profile-loaded') ||
                                  e(
                                    'input[name=table_migrate_option][value=search_all_imported]',
                                  ).prop('checked', !0),
                              !1 === wpmdb_default_profile &&
                                'undefined' != typeof wpmdb_loaded_tables &&
                                ((l = wpmdb_loaded_tables),
                                (d = wpmdb_loaded_post_types)),
                              (i = t.functions.create_table_select(
                                n.tables,
                                [],
                                l,
                              )),
                              e.wpmdb.do_action(
                                'wpmdb_update_import_table_select',
                              ),
                              void 0 !== n.post_types)
                            ) {
                              var m = document.createElement('select');
                              e(m).attr({
                                multiple: 'multiple',
                                name: 'select_post_types[]',
                                id: 'select-post-types',
                                class: 'multiselect',
                              }),
                                e.each(n.post_types, function(t, n) {
                                  var i = e.inArray(n, d);
                                  i =
                                    -1 !== i ||
                                    (!0 === wpmdb_convert_exclude_revisions &&
                                      'revision' !== n);
                                  var o = document.createElement('option');
                                  (o.value = n),
                                    (o.text = n),
                                    (o.selected = i),
                                    m.add(o, null);
                                }),
                                e('#select-post-types').remove(),
                                e('.exclude-post-types-warning').after(m);
                            }
                            r && ((r = !1), p());
                          } else
                            f.show(),
                              h.hide(),
                              e('.table-options').hide(),
                              (r = !0),
                              y.val(w.val()),
                              x.val(v.val()),
                              w.val(''),
                              v.val('');
                        }
                    },
                  });
              });
            var k = m.slice(0, 1024e3);
            u.readAsDataURL(k);
          } else n && (b.hide(), _.text(wpmdb_strings.please_select_sql_file).show(), (n = !1));
        }),
        e('#import-find-replace').on('click', p),
        e('.find-replace-options-toggle').on('click', function() {
          r &&
            setTimeout(function() {
              e('.find-replace-options-toggle .expand-collapse-arrow').hasClass(
                'collapsed',
              ) || e('.table-options').hide();
            }, 1);
        }),
        e('input[name=keep_active_plugins]').on('click', function() {
          e('input[name=keep_active_plugins]').prop(
            'checked',
            e(this).is(':checked'),
          );
        }),
        (t.functions.upload_file_recursive = function(n) {
          n = void 0 === n ? 0 : n;
          var i = document.getElementById('import-file').files[0],
            o = n + 1024e3 + 1,
            a = new FileReader();
          0 === n &&
            t.current_migration.model.addStageItem(
              'upload',
              i.name,
              i.size / 1e3,
              Math.ceil(i.size / 1024e3),
            ),
            (a.onloadend = function(a) {
              a.target.readyState === FileReader.DONE &&
                e.ajax({
                  url: ajaxurl,
                  type: 'POST',
                  dataType: 'json',
                  cache: !1,
                  data: {
                    action: 'wpmdb_upload_file',
                    file_data: a.target.result,
                    file: i.name,
                    file_type: i.type,
                    migration_state_id: t.migration_state_id,
                    stage: 'import',
                    import_info: c,
                    nonce: wpmdb_data.nonces.import_file,
                  },
                  error: function(e, n, i) {
                    console.log(e, n, i),
                      (t.common.migration_error = !0),
                      t.functions.migration_complete_events();
                  },
                  success: function(e) {
                    if (
                      (t.current_migration.setText(),
                      void 0 !== e.wpmdb_error && 1 === e.wpmdb_error)
                    )
                      return (
                        (t.common.migration_error = !0),
                        t.functions.migration_complete_events(),
                        void t.current_migration.setState(
                          wpmdb_strings.migration_failed,
                          e.body,
                          'error',
                        )
                      );
                    var a = n + 1024e3;
                    t.current_migration.setText(
                      wpmdb_strings.uploading_file_to_server,
                    ),
                      t.current_migration.model
                        .getStageModel('upload')
                        .setItemRowsTransferred(i.name, Math.ceil(a / 1024e3)),
                      o < i.size
                        ? (t.common.next_step_in_migration = {
                            fn: t.functions.upload_file_recursive,
                            args: [o],
                          })
                        : (t.common.next_step_in_migration = {
                            fn: t.functions.upload_import_successful,
                            args: [i],
                          }),
                      t.functions.execute_next_step();
                  },
                });
            });
          var r = i.slice(n, o);
          a.readAsDataURL(r);
        }),
        (t.functions.upload_import_successful = function(n) {
          e.ajax({
            type: 'POST',
            url: ajaxurl,
            data: {
              action: 'wpmdb_prepare_import_file',
              migration_state_id: t.migration_state_id,
              nonce: wpmdb_data.nonces.import_file,
            },
            dataType: 'json',
            error: function(e, n, i) {
              console.log(e, n, i),
                (t.common.migration_error = !0),
                t.functions.migration_complete_events();
            },
            success: function(e) {
              var i = n.name,
                o = wpmdb_strings.importing_file_to_db;
              '.gz' === i.slice(-3) && (i = n.name.slice(0, -3)),
                (o = o.replace(/\%s\s?/, i)),
                t.current_migration.setText(o),
                t.current_migration.model.addStageItem(
                  'import',
                  i,
                  e.import_size / 1e3,
                  e.num_chunks,
                ),
                t.current_migration.model.setActiveStage('import'),
                (t.common.next_step_in_migration = {
                  fn: t.functions.import_file_recursive,
                  args: [
                    {
                      import_filename: e.import_file,
                      item_name: i,
                      chunk: 0,
                      current_query: '',
                    },
                  ],
                }),
                t.functions.execute_next_step();
            },
          });
        }),
        (t.functions.import_file_recursive = function(n) {
          e.ajax({
            type: 'POST',
            url: ajaxurl,
            data: {
              action: 'wpmdb_import_file',
              migration_state_id: t.migration_state_id,
              chunk: n.chunk,
              current_query: n.current_query,
              import_file: n.import_filename,
              nonce: wpmdb_data.nonces.import_file,
            },
            dataType: 'json',
            error: function(e, n, i) {
              console.log(e, n, i),
                (t.common.migration_error = !0),
                t.functions.migration_complete_events();
            },
            success: function(i) {
              if (void 0 !== i.wpmdb_error && 1 === i.wpmdb_error)
                return (
                  (t.common.migration_error = !0),
                  t.functions.migration_complete_events(),
                  void t.current_migration.setState(
                    wpmdb_strings.migration_failed,
                    i.body,
                    'error',
                  )
                );
              if (
                (t.current_migration.model
                  .getStageModel('import')
                  .setItemRowsTransferred(n.item_name, i.chunk),
                i.chunk >= i.num_chunks)
              ) {
                if (
                  (t.current_migration.model
                    .getStageModel('import')
                    .setItemRowsTransferred(n.item_name, ++i.chunk),
                  e('#import-find-replace').is(':checked'))
                ) {
                  if (r)
                    e.each(i.table_sizes, function(e, n) {
                      if (
                        e.startsWith(wpmdb_data.this_temp_prefix) &&
                        wpmdb_data.alter_table_name !== e
                      ) {
                        var o = e.replace(wpmdb_data.this_temp_prefix, '');
                        t.current_migration.model.addStageItem(
                          'find_replace',
                          o,
                          i.table_sizes[e],
                          i.table_rows[e],
                        );
                      }
                    });
                  else {
                    var c = e('input[name=table_migrate_option]:checked').val();
                    'migrate_only_with_prefix' === c
                      ? (o = a.filter(function(e) {
                          return s === e.substring(0, s.length);
                        }))
                      : 'search_all_imported' === c && (o = a),
                      e.each(o, function(e, n) {
                        var o = wpmdb_data.this_temp_prefix + n;
                        i.table_sizes.hasOwnProperty(o) &&
                          t.current_migration.model.addStageItem(
                            'find_replace',
                            n,
                            i.table_sizes[o],
                            i.table_rows[o],
                          );
                      });
                  }
                  (o = []),
                    t.current_migration.model.setActiveStage('find_replace');
                  var l = t.functions.get_tables_to_migrate();
                  return (
                    (t.common.next_step_in_migration = {
                      fn: t.functions.migrate_table_recursive,
                      args: ['-1', '', l.length],
                    }),
                    void t.functions.execute_next_step()
                  );
                }
                e('.progress-label').removeClass('label-visible'),
                  (t.common.hooks = e.wpmdb.apply_filters(
                    'wpmdb_before_migration_complete_hooks',
                    t.common.hooks,
                  )),
                  t.common.hooks.push(t.functions.migration_complete),
                  t.common.hooks.push(t.functions.wpmdb_flush),
                  (t.common.hooks = e.wpmdb.apply_filters(
                    'wpmdb_after_migration_complete_hooks',
                    t.common.hooks,
                  )),
                  t.common.hooks.push(t.functions.migration_complete_events),
                  (t.common.next_step_in_migration = {
                    fn: t.functions.wpmdb_call_next_hook,
                  });
              } else
                t.common.next_step_in_migration = {
                  fn: t.functions.import_file_recursive,
                  args: [
                    {
                      import_filename: n.import_filename,
                      item_name: n.item_name,
                      chunk: i.chunk,
                      current_query: i.current_query,
                    },
                  ],
                };
              t.functions.execute_next_step();
            },
          });
        }),
        (t.functions.get_tables_to_import = function() {
          return a;
        });
    })(jQuery, wpmdb);
  },
  function(e, t) {
    window.jQuery;
    !(function(e, t) {
      e(document).ready(function() {
        (t.functions.localStorage_available = function() {
          try {
            return (
              localStorage.setItem('wpmdb_test', 'wpmdb_test'),
              localStorage.removeItem('wpmdb_test', 'wpmdb_test'),
              !0
            );
          } catch (e) {
            return !1;
          }
        }),
          (t.functions.maybe_reload_page = function() {
            var n = t.functions.wpmdb_migration_type();
            if (
              t.functions.localStorage_available() &&
              'cancelled' !== t.current_migration.status &&
              !0 !== t.common.migration_error &&
              !e('.progress-overlay-container').hasClass('wpmdb-error') &&
              -1 !== e.inArray(n, ['pull', 'import', 'find_replace']) &&
              ('true' !== wpmdb_data.is_multisite ||
                !e('#mst-select-subsite').is(':checked') ||
                wpmdb_data.this_domain ===
                  e('#mst-selected-subsite option:selected').text())
            ) {
              var i = t.functions.get_tables_to_migrate();
              'import' === n && (i = t.functions.get_tables_to_import()),
                (-1 === e.inArray(wpmdb_data.this_prefix + 'options', i) &&
                  -1 === e.inArray(wpmdb_data.this_prefix + 'usermeta', i)) ||
                  (t.functions.set_localStorage_form_data(), location.reload());
            }
          }),
          (t.functions.set_localStorage_form_data = function() {
            var t = {};
            e.each(e('#migrate-form').serializeArray(), function(e, n) {
              if ('[]' === n.name.substr(-2)) {
                var i = n.name.slice(0, -2);
                void 0 === t[i] && (t[i] = []), t[i].push(n.value);
              } else t[n.name] = n.value;
            }),
              localStorage.setItem('wpmdb_migrate_form', JSON.stringify(t));
          }),
          (t.functions.get_localStorage_form_data = function() {
            var e = localStorage.getItem('wpmdb_migrate_form');
            if (null === e) return !1;
            try {
              e = JSON.parse(e);
            } catch (e) {
              return !1;
            }
            return e;
          }),
          (t.functions.remove_localStorage_form_data = function() {
            localStorage.removeItem('wpmdb_migrate_form');
          }),
          (t.functions.load_data_from_localStorage = function() {
            var n = t.functions.get_localStorage_form_data();
            n &&
              (e.each(n, function(n, i) {
                var o = e('[name="' + n + '"]'),
                  a = o.attr('type');
                'action' === n
                  ? ((t.migration_selection = i),
                    e('#' + i).prop('checked', !0))
                  : 'radio' === a
                  ? e('[name="' + n + '"][value="' + i + '"]').prop(
                      'checked',
                      !0,
                    )
                  : 'checkbox' === a
                  ? (o.prop('checked', !0),
                    o.parent().hasClass('checkbox-label') &&
                      o
                        .parent()
                        .next()
                        .show())
                  : o.val(i);
              }),
              e('.option-group input[type=radio]').change(),
              e('.' + t.migration_selection + '-list ul').show(),
              e.when(t.functions.connection_box_changed()).done(function() {
                if (
                  ('migrate_select' ===
                  e('input[name=table_migrate_option]:checked').val()
                    ? (void 0 !== n.select_tables &&
                        e('#select-tables').val(n.select_tables),
                      e(
                        '.table-options .expandable-content, .select-tables-wrap',
                      ).show(),
                      e('.table-options .expand-collapse-arrow').removeClass(
                        'collapsed',
                      ))
                    : e('.select-tables-wrap').hide(),
                  'backup_manual_select' ===
                    e('input[name=backup_option]:checked').val() &&
                    (void 0 !== n.select_backup &&
                      e('#select-backup').val(n.select_backup),
                    e('.backup-tables-wrap').show()),
                  void 0 !== n.select_post_types &&
                    (e('#select-post-types').val(n.select_post_types),
                    t.functions.exclude_post_types_warning()),
                  void 0 !== n.replace_old)
                ) {
                  e('.replace-row')
                    .not('.original-repeatable-field')
                    .remove();
                  var i = 1;
                  e.each(n.replace_old, function(t, o) {
                    e('.replace-row:nth-child(' + i + ')').length ||
                      e('.replace-row')
                        .last()
                        .after(
                          e('.original-repeatable-field')
                            .clone()
                            .removeClass('original-repeatable-field'),
                        ),
                      e(
                        '.replace-row:nth-child(' +
                          i +
                          ') [name="replace_old[]"]',
                      ).val(o),
                      e(
                        '.replace-row:nth-child(' +
                          i +
                          ') [name="replace_new[]"]',
                      ).val(n.replace_new[t]),
                      i++;
                  });
                }
              }),
              t.functions.update_migrate_button_text(),
              'import' !== t.functions.wpmdb_migration_type() &&
                t.functions.remove_localStorage_form_data());
          }),
          t.functions.load_data_from_localStorage();
      });
    })(jQuery, wpmdb);
  },
  function(e, t, n) {
    var i = window.jQuery,
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(3));
    i = jQuery;
    var a = n(55),
      r = n(57),
      s = i('<div id="overlay" class="hide"></div>'),
      c = i('.progress-content')
        .clone()
        .addClass('hide'),
      l = i('.pro-version').addClass('hide');
    s.append(l);
    var p = {
      migration: {
        model: {},
        view: {},
        $progress: {},
        $wrapper: {},
        $overlay: {},
        status: 'active',
        title: '',
        text: '',
        timerCount: 0,
        timerStart: 0,
        elapsedInterval: 0,
        currentStageNum: 0,
        counterDisplay: !1,
        originalTitle: document.title,
        setTitle: function(e) {
          this.$progress.find('.progress-title').html(e), (this.title = e);
        },
        setStatus: function(e) {
          this.$progress
            .removeClass(this.status)
            .addClass('error' === e ? 'wpmdb-error' : e),
            'error' === e &&
              this.$progress.find('.progress-text').addClass('migration-error'),
            (this.status = e),
            this.updateTitleElem();
        },
        setText: function(e) {
          'string' != typeof e && (e = ''),
            0 >= e.indexOf('wpmdb_error') && (e = this.decodeErrorObject(e)),
            this.$progress.find('.progress-text').html(e),
            (this.text = e);
        },
        setState: function(e, t, n) {
          null !== e && this.setTitle(e),
            null !== t && this.setText(t),
            null !== n && this.setStatus(n);
        },
        startTimer: function() {
          (this.timerStart = Date.now()),
            (this.timerCount = 0),
            (this.counterDisplay = i('.timer')),
            (this.elapsedInterval = setInterval(
              this.incrementTimer.bind(this),
              1e3,
            ));
        },
        getTimerCountInSeconds: function() {
          return Math.floor((Date.now() - this.timerStart) / 1e3);
        },
        pauseTimer: function() {
          (this.pausedAt = Date.now()), clearInterval(this.elapsedInterval);
        },
        resumeTimer: function() {
          (this.timerStart += Date.now() - this.pausedAt),
            (this.elapsedInterval = setInterval(
              this.incrementTimer.bind(this),
              1e3,
            ));
        },
        incrementTimer: function() {
          (this.timerCount = this.getTimerCountInSeconds()),
            this.displayCount();
        },
        displayCount: function() {
          var e = Math.floor(this.timerCount / 3600) % 24,
            t = Math.floor(this.timerCount / 60) % 60,
            n = this.timerCount % 60,
            i =
              this.pad(e, 2, 0) +
              ':' +
              this.pad(t, 2, 0) +
              ':' +
              this.pad(n, 2, 0);
          this.counterDisplay.html(i);
        },
        updateTitleElem: function() {
          var e = this.model.get('activeStageName'),
            t = this.model.getStageModel(e),
            n = Math.max(0, t.getTotalProgressPercent()),
            i = this.model.get('stages').length,
            o = this.currentStageNum,
            a = this.status,
            r = wpmdb_strings.title_progress;
          'complete' === t.get('status') &&
            0 === t.get('totalSize') &&
            (n = 100),
            (r = (r = (r = r.replace('%1$s', n + '%')).replace(
              '%2$s',
              o,
            )).replace('%3$s', i)),
            1 === i && (r = n + '%'),
            wpmdb_strings['title_' + a] && (r = wpmdb_strings['title_' + a]),
            (r = r + ' - ' + this.originalTitle),
            (document.title = r);
        },
        restoreTitleElem: function() {
          document.title = this.originalTitle;
        },
        pad: function(e, t, n) {
          return (
            (n = n || '0'),
            (e += '').length >= t ? e : new Array(t - e.length + 1).join(n) + e
          );
        },
        decodeErrorObject: function(e) {
          var t = e
            .replace(/\{&quot;/g, '{#q!#')
            .replace(/\&quot;}/g, '#q!#}')
            .replace(/,&quot;/g, ',#q!#')
            .replace(/&quot;:/g, '#q!#:')
            .replace(/:&quot;/g, ':#q!#')
            .replace(/&quot;/g, '\\"')
            .replace(/#q!#/g, '"')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<');
          try {
            t = JSON.parse(t);
          } catch (t) {
            return e;
          }
          return 'object' ===
            (void 0 === t ? 'undefined' : (0, o.default)(t)) &&
            void 0 !== t.body
            ? t
            : e;
        },
        fixProgressStageWidthForScrollBar: function() {
          var e = Math.abs(
              this.$wrapper[0].offsetWidth - this.$wrapper[0].clientWidth,
            ),
            t = this.$wrapper.find('.active .progress-items'),
            n = parseInt(t.css('padding-left'), 10),
            i = parseInt(t.css('padding-right'), 10);
          (0 !== e || (0 === e && i !== n)) &&
            t.css('padding-right', n - e + 'px');
        },
      },
      newMigration: function(e) {
        i('#overlay').remove(),
          i('.progress-content').remove(),
          (this.migration.$overlay = s.clone()),
          i('#wpwrap').append(this.migration.$overlay),
          (this.migration.model = new a(e)),
          (this.migration.view = new r({ model: this.migration.model })),
          (this.migration.$progress = c.clone()),
          (this.migration.$wrapper = this.migration.view.$el),
          this.migration.$progress
            .find('.migration-progress-stages')
            .replaceWith(this.migration.$wrapper),
          (this.migration.$proVersion = this.migration.$overlay.find(
            '.pro-version',
          ));
        var t = this.migration.$proVersion
          .find('iframe')
          .remove()
          .clone();
        this.migration.$overlay.prepend(this.migration.$progress);
        var n = this;
        return (
          setTimeout(function() {
            n.migration.$overlay
              .add(n.migration.$progress)
              .add(n.migration.$proVersion)
              .removeClass('hide')
              .addClass('show'),
              n.migration.$proVersion.length &&
                setTimeout(function() {
                  n.migration.$proVersion.find('.iframe').append(t);
                }, 500);
          }, 0),
          (this.migration.currentStageNum = 0),
          this.migration.$proVersion.on(
            'click',
            '.close-pro-version',
            function() {
              n.migration.$proVersion.find('iframe').remove(),
                n.migration.$proVersion.addClass('hide remove'),
                setTimeout(function() {
                  n.migration.$proVersion.remove();
                }, 500);
            },
          ),
          this.migration.model.on('migrationComplete', function() {
            n.utils.updateProgTableVisibilitySetting(),
              n.utils.updatePauseBeforeFinalizeSetting(),
              n.migration.pauseTimer();
          }),
          i(window).on(
            'resize',
            _.debounce(
              this.migration.fixProgressStageWidthForScrollBar.bind(
                this.migration,
              ),
              100,
            ),
          ),
          this.migration.model.on(
            'change:activeStage',
            this.migration.fixProgressStageWidthForScrollBar.bind(
              this.migration,
            ),
          ),
          this.migration
        );
      },
      utils: n(59),
    };
    e.exports = p;
  },
  function(e, t, n) {
    var i = window.jQuery,
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(3));
    var a = n(56),
      r = ((i = jQuery),
      Backbone.Model.extend({
        defaults: {
          _initialStages: null,
          stages: null,
          activeStageName: null,
          stageModels: null,
          localTableRows: null,
          localTableSizes: null,
          remoteTableRows: null,
          remoteTableSizes: null,
          migrationStatus: 'active',
          migrationIntent: 'savefile',
        },
        initialize: function() {
          this.set('stageModels', {}),
            this.set('_initialStages', this.get('stages')),
            this.set('stages', []),
            _.each(
              this.get('_initialStages'),
              function(e, t, n) {
                this.addStage(e.name, t, n);
              },
              this,
            );
        },
        addStage: function(e, t, n, a) {
          var r,
            s = [];
          return (
            _.each(
              t,
              function(e) {
                var t, i;
                'remote' === n
                  ? ((t = this.get('remoteTableSizes')[e]),
                    (i = this.get('remoteTableRows')[e]))
                  : ((t = this.get('localTableSizes')[e]),
                    (i = this.get('localTableRows')[e])),
                  s.push({ name: e, size: t, rows: i });
              },
              this,
            ),
            (r = { name: e, items: s, dataType: n }),
            'object' === (void 0 === a ? 'undefined' : (0, o.default)(a)) &&
              (r = i.extend(r, a)),
            this.addStageModel(r),
            this.trigger('stage:added', this.get('stageModels')[e]),
            this.get('stageModels')[e].on(
              'change',
              function() {
                this.trigger('change');
              },
              this,
            ),
            this.getStageModel(r.name)
          );
        },
        addStageItem: function(e, t, n, i) {
          var o =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '';
          this.getStageModel(e).addItem(t, n, i, o);
        },
        addStageModel: function(e) {
          var t = this.get('stages'),
            n = this.get('stageModels'),
            i = new a(e);
          t.push(e),
            (n[e.name] = i),
            this.set('stages', t),
            this.set('stageModels', n);
        },
        getStageModel: function(e) {
          return this.get('stageModels')[e];
        },
        getStageItems: function(e, t) {
          var n = this.getStageModel(e).get('items');
          return void 0 === t
            ? n
            : n.map(function(e) {
                return e[t];
              });
        },
        setActiveStage: function(e) {
          this.setStageComplete(),
            this.set('activeStageName', e),
            this.getStageModel(e).set('status', 'active'),
            this.trigger('change:activeStage');
        },
        setStageComplete: function(e) {
          e || (e = this.get('activeStageName')),
            null !== e && this.getStageModel(e).set('status', 'complete'),
            (wpmdb.current_migration.currentStageNum =
              wpmdb.current_migration.currentStageNum + 1);
        },
        setMigrationComplete: function() {
          var e = this.getStageModel(this.get('activeStageName'));
          this.setStageComplete(),
            this.trigger('migrationComplete'),
            this.set('migrationStatus', 'complete'),
            e.activateTab();
        },
      }));
    e.exports = r;
  },
  function(e, t) {
    var n = window.jQuery;
    n = jQuery;
    e.exports = {
      updateProgTableVisibilitySetting: function() {
        wpmdb_data.prog_tables_visibility_changed &&
          ((wpmdb_data.prog_tables_visibility_changed = !1),
          n.ajax({
            url: ajaxurl,
            type: 'POST',
            dataType: 'text',
            cache: !1,
            data: {
              action: 'wpmdb_save_setting',
              nonce: wpmdb_data.nonces.save_setting,
              setting: 'prog_tables_hidden',
              checked: Boolean(wpmdb_data.prog_tables_hidden),
            },
            error: function(e, t, n) {
              console.log('Could not save progress item visibility setting', n);
            },
          }));
      },
      updatePauseBeforeFinalizeSetting: function() {
        wpmdb_data.pause_before_finalize_changed &&
          ((wpmdb_data.pause_before_finalize_changed = !1),
          n.ajax({
            url: ajaxurl,
            type: 'POST',
            dataType: 'text',
            cache: !1,
            data: {
              action: 'wpmdb_save_setting',
              nonce: wpmdb_data.nonces.save_setting,
              setting: 'pause_before_finalize',
              checked: Boolean(wpmdb_data.pause_before_finalize),
            },
            error: function(e, t, n) {
              console.log('Could not save pause before finalize setting', n);
            },
          }));
      },
    };
  },
  function(e, t, n) {
    window.jQuery;
    var i = n(58),
      o = (jQuery,
      Backbone.View.extend({
        tagName: 'div',
        className: 'migration-progress-stages',
        id: 'migration-progress-stages',
        self: void 0,
        initialize: function() {
          this.$el.empty(),
            this.model.on(
              'stage:added',
              function(e) {
                this.addStageView(e);
              },
              this,
            ),
            _.each(this.model.get('stageModels'), this.addStageView, this);
        },
        addStageView: function(e) {
          var t = new i({ model: e });
          e.trigger('view:initialized', t),
            this.$el.append(t.$el),
            this.$el
              .parent()
              .find('.stage-tabs')
              .append(t.$tabElem);
        },
      }));
    e.exports = o;
  },
  function(e, t, n) {
    var i = window.jQuery,
      o = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(3));
    i = jQuery;
    var a = Backbone.Model.extend({
      defaults: {
        status: 'queued',
        _initialItems: null,
        items: null,
        names: null,
        lookupItems: null,
        totalSize: 0,
        totalTransferred: 0,
        dataType: 'local',
        name: '',
        itemsComplete: 0,
        itemsCompleteArr: [],
        strings: null,
      },
      initialize: function() {
        this.initStrings(),
          this.set('_initialItems', this.get('items').slice()),
          this.set('items', []),
          this.set('names', []),
          this.set('lookupItems', {}),
          this.set('itemsCompleteArr', []),
          _.each(
            this.get('_initialItems'),
            function(e) {
              this.addItem(e.name, e.size, e.rows);
            },
            this,
          ),
          this.on('view:initialized', this.triggerItemViewInit),
          this.on('change', function() {
            wpmdb.current_migration.updateTitleElem();
          });
      },
      initStrings: function() {
        var e = {
            stage_title: this.get('name'),
            migrated: wpmdb_strings.migrated,
            queued: wpmdb_strings.queued,
            active: wpmdb_strings.running,
            complete: wpmdb_strings.complete,
            hide: wpmdb_strings.hide,
            show: wpmdb_strings.show,
            itemsName: wpmdb_strings.tables,
          },
          t = this.get('strings');
        (t =
          'object' === (void 0 === t ? 'undefined' : (0, o.default)(t))
            ? t
            : {}),
          ((t = i.extend(e, t)).items_migrated =
            t.itemsName + ' ' + t.migrated),
          (t.hide_items = t.hide + ' ' + t.itemsName),
          (t.show_items = t.show + ' ' + t.itemsName),
          this.set('strings', t);
      },
      addItem: function(e, t, n, o) {
        var a = this.get('items'),
          r = this.get('names');
        if (!~r.indexOf(e)) {
          r.push(e);
          var s = {
            name: e,
            size: t,
            rows: n || t,
            stageName: this.get('name'),
            transferred: 0,
            rowsTransferred: 0,
            complete: !1,
            title: null,
            get $title() {
              return this.title || this.createTitleElem();
            },
            set $title(e) {
              this.title = e;
            },
            createTitleElem: function() {
              return (
                (this.title = i('<p>')
                  .addClass('item-info')
                  .append(
                    i('<span class="name" />').text(
                      this.displayName || this.name,
                    ),
                  )
                  .append(' ')
                  .append(
                    i('<span class="size" />').text(
                      '(' +
                        wpmdb.functions.convertKBSizeToHRFixed(s.size) +
                        ')',
                    ),
                  )),
                this.title
              );
            },
            progress: null,
            get $progress() {
              return this.progress || this.createProgElem();
            },
            set $progress(e) {
              this.progress = e;
            },
            createProgElem: function() {
              return (
                (this.progress = i('<div class="progress-bar"/>').css(
                  'width',
                  '0%',
                )),
                this.progress
              );
            },
            el: null,
            get $el() {
              return this.el || this.createMainElem();
            },
            set $el(e) {
              this.el = e;
            },
            createMainElem: function() {
              return (
                (this.el = i('<div class="item-progress" />')),
                this.el.append(this.$title),
                this.el.append(this.$progress),
                this.el.append('<span class="dashicons dashicons-yes"/>'),
                this.el.attr('id', 'item-' + this.name),
                this.el.attr('data-stage', this.stageName),
                this.el
              );
            },
            updateProgress: function(e) {
              var t = this.$progress;
              window.requestAnimationFrame(
                function() {
                  t.css('width', e + '%');
                }.bind(this),
              );
            },
          };
          void 0 !== o && o.length && (s.displayName = o),
            a.push(s),
            (this.get('lookupItems')[e] = a.length - 1),
            this.set(
              'totalSize',
              parseFloat(this.get('totalSize')) + parseFloat(t),
            ),
            this.trigger('item:added', s);
        }
      },
      triggerItemViewInit: function() {
        var e = this.get('items'),
          t = this;
        _.each(e, function(e) {
          t.trigger('item:added', e);
        });
      },
      getTotalSizeTransferred: function() {
        return this.get('totalTransferred');
      },
      countItemsComplete: function() {
        return this.get('itemsComplete');
      },
      getTotalProgressPercent: function() {
        var e = this.getTotalSizeTransferred(),
          t = this.get('totalSize');
        return 0 >= e || 0 >= t ? 0 : Math.min(100, Math.round((e / t) * 100));
      },
      activateTab: function() {
        this.trigger('activateTab'),
          wpmdb.current_migration.model.trigger('change:activeStage');
      },
      setItemComplete: function(e) {
        var t = this.get('itemsCompleteArr');
        if (!~t.indexOf(e)) {
          t.push(e);
          var n = this.getItemByName(e),
            i = this.get('totalTransferred'),
            o = this.get('itemsComplete');
          this.set('itemsComplete', ++o),
            (i += n.size - n.transferred),
            this.set('totalTransferred', i),
            (n.transferred = n.size),
            (n.complete = !0),
            (n.rowsTransferred = n.rows),
            this.trigger('change change:items', n);
        }
      },
      setItemPercentTransferred: function(e, t, n, i) {
        var o = this.getItemByName(e),
          a = n / 1e3;
        if (1 === t) {
          (o.complete = !0), (o.transferred = a);
          var r = this.get('itemsComplete');
          this.set('itemsComplete', ++r),
            this.trigger('change change:items', o);
        }
        (o.transferred = i / 1e3), (o.exactPercent = t);
        var s = this.get('totalTransferred');
        (s += a),
          this.set('totalTransferred', s),
          this.trigger('change change:items', o);
      },
      setItemRowsTransferred: function(e, t) {
        var n,
          i,
          o = this.getItemByName(e),
          a = this.get('totalTransferred');
        1 !== (n = -1 === parseInt(t) ? 1 : Math.min(1, t / o.rows))
          ? ((a += (i = o.size * n) - o.transferred),
            this.set('totalTransferred', a),
            (o.transferred = i),
            (o.rowsTransferred = t),
            this.trigger('change change:items', o))
          : this.setItemComplete(e);
      },
      getItemByName: function(e) {
        var t = this.get('items')[this.get('lookupItems')[e]] || {};
        return e === t.name ? t : this.determineItemByName(e);
      },
      determineItemByName: function(e) {
        for (var t = this.get('items'), n = 0; n < t.length; n++) {
          var i = t[n];
          if (e === i.name) return (this.get('lookupItems').itemName = n), i;
        }
      },
    });
    e.exports = a;
  },
  function(e, t) {
    var n = window.jQuery,
      i = ((n = jQuery),
      Backbone.View.extend({
        tagName: 'div',
        className: 'migration-progress-stage-container hide-tables',
        $totalProgressElem: null,
        $tabElem: null,
        $showHideTablesElem: null,
        $pauseBeforeFinalizeElem: null,
        $pauseBeforeFinalizeCheckbox: null,
        $itemsContainer: null,
        itemViews: null,
        maxDomNodes: 140,
        visibleDomNodes: 0,
        itemCount: 0,
        percentDone: 0,
        sizeDone: 0,
        tablesDone: 0,
        queuedElements: null,
        $truncationNotice: null,
        $truncationNoticeHiddenItems: null,
        shouldHideItemProgress: !1,
        initialize: function() {
          this.$el.empty(),
            this.$el
              .attr('data-stage', this.model.get('name'))
              .addClass('queued ' + this.model.get('name')),
            (this.queuedElements = []),
            this.initTotalProgressElem(),
            wpmdb.current_migration.view.$el
              .parent()
              .find('.stage-tabs')
              .after(this.$totalProgressElem),
            (this.$itemsContainer = n('<div class=progress-items />')),
            this.$el.append(this.$itemsContainer),
            this.initTabElem(),
            this.model.on('item:added', this.maybeAddElementToView, this),
            _.each(
              this.model.get('itemModels'),
              this.maybeAddElementToView,
              this,
            ),
            this.model.on(
              'change',
              function() {
                this.updateProgressElem(), this.updateStageTotals();
              },
              this,
            ),
            this.model.on(
              'change:status',
              function(e) {
                this.$el
                  .removeClass('queued active')
                  .addClass(this.model.get('status')),
                  this.$totalProgressElem
                    .removeClass('queued active')
                    .addClass(this.model.get('status')),
                  this.$tabElem
                    .removeClass('queued active')
                    .addClass(this.model.get('status'))
                    .find('.stage-status')
                    .text(this.model.get('strings')[this.model.get('status')]);
              },
              this,
            ),
            this.model.on(
              'change:items',
              function(e) {
                e.name && this.setItemProgress(e);
              },
              this,
            ),
            this.model.on(
              'activateTab',
              function() {
                'complete' ===
                  wpmdb.current_migration.model.get('migrationStatus') &&
                  (this.$totalProgressElem
                    .addClass('active')
                    .siblings()
                    .removeClass('active'),
                  this.$tabElem
                    .addClass('active')
                    .siblings()
                    .removeClass('active'),
                  this.$el
                    .addClass('active')
                    .siblings()
                    .removeClass('active'));
              },
              this,
            );
        },
        initTotalProgressElem: function() {
          this.initShowHideTablesElem(),
            this.initPauseBeforeFinalizeElem(),
            (this.$totalProgressElem = n(
              '<div class="stage-progress ' + this.model.get('name') + '" />',
            )
              .append(
                '<span class=percent-complete>0</span>% ' +
                  this.model.get('strings').complete +
                  ' ',
              )
              .append(
                '<span class="size-complete-wrap">(<span class=size-complete>0 MB</span> / <span class=size-total>0 MB</span>) </span>',
              )
              .append(
                '<span class="items-complete-wrap"><span class=items-complete>0</span> <span class=lowercase >of</span> <span class=items-total>0</span> ' +
                  this.model.get('strings').items_migrated +
                  '</span>',
              )
              .append(this.$showHideTablesElem)
              .append(
                '<div class=progress-bar-wrapper><div class=progress-bar /></div>',
              )),
            this.updateStageTotals();
        },
        initShowHideTablesElem: function() {
          this.$showHideTablesElem = n('<a class=show-hide-tables/>').text(
            this.model.get('strings').show_items,
          );
          var e = this;
          this.$showHideTablesElem.on(
            'click show-hide-progress-tables',
            function() {
              var t;
              e.$el.hasClass('hide-tables')
                ? ((t = !1),
                  e.$el.add(e.$el.siblings()).removeClass('hide-tables'),
                  e.$showHideTablesElem.text(e.model.get('strings').hide_items))
                : ((t = !0),
                  e.$el.add(e.$el.siblings()).addClass('hide-tables'),
                  e.$showHideTablesElem.text(
                    e.model.get('strings').show_items,
                  )),
                Boolean(t) !== Boolean(wpmdb_data.prog_tables_hidden) &&
                  ((wpmdb_data.prog_tables_visibility_changed = !0),
                  (wpmdb_data.prog_tables_hidden = t));
            },
          ),
            wpmdb_data.prog_tables_hidden ||
              this.$showHideTablesElem.triggerHandler(
                'show-hide-progress-tables',
              ),
            this.model.on('change:status activateTab', function() {
              wpmdb_data.prog_tables_hidden
                ? e.$showHideTablesElem.text(e.model.get('strings').show_items)
                : e.$showHideTablesElem.text(e.model.get('strings').hide_items);
            });
        },
        initPauseBeforeFinalizeElem: function() {
          (this.$pauseBeforeFinalizeElem = n('.pause-before-finalize')),
            (this.$pauseBeforeFinalizeCheckbox = this.$pauseBeforeFinalizeElem.find(
              'input[type=checkbox]',
            ));
          var e = this,
            t = !1,
            i = wpmdb.current_migration.model.get('migrationIntent');
          wpmdb_data.pause_before_finalize && (t = !0),
            this.$pauseBeforeFinalizeCheckbox.prop('checked', t),
            -1 !== n.inArray(i, ['push', 'pull', 'find_replace', 'import'])
              ? ('find_replace' === i &&
                  n('#pause-before-finalize-label').text(
                    wpmdb_strings.pause_before_finalize_find_replace,
                  ),
                this.$pauseBeforeFinalizeElem.show())
              : this.$pauseBeforeFinalizeElem.hide(),
            wpmdb.current_migration.model.on('change:activeStage', function() {
              -1 !==
                n.inArray(
                  wpmdb.current_migration.model.get('activeStageName'),
                  ['media', 'themes', 'plugins'],
                ) && e.$pauseBeforeFinalizeElem.hide();
            }),
            this.$pauseBeforeFinalizeElem.on('click', function() {
              var t = Boolean(e.$pauseBeforeFinalizeCheckbox.is(':checked'));
              t !== Boolean(wpmdb_data.pause_before_finalize) &&
                ((wpmdb_data.pause_before_finalize_changed = !0),
                (wpmdb_data.pause_before_finalize = t));
            });
        },
        initTabElem: function() {
          var e = this;
          this.$tabElem = n('<a class=stage-tab>')
            .append(
              '<span class=stage-title>' +
                this.model.get('strings').stage_title +
                '</span> ',
            )
            .append(
              '<span class=stage-status>' +
                this.model.get('strings').queued +
                '</span> ',
            )
            .on('click', function() {
              e.model.activateTab();
            });
        },
        updateProgressElem: function() {
          var e = Math.max(0, this.model.getTotalProgressPercent()),
            t = wpmdb.functions.convertKBSizeToHRFixed(
              Math.min(
                this.model.getTotalSizeTransferred(),
                this.model.get('totalSize'),
              ),
            ),
            n = Math.min(
              this.model.countItemsComplete(),
              this.model.get('items').length,
            );
          'complete' === this.model.get('status') &&
            0 === this.model.get('totalSize') &&
            ((e = 100), this.$showHideTablesElem.fadeOut()),
            e !== this.percentDone &&
              ((this.percentDone = e),
              this.$totalProgressElem.find('.percent-complete').text(e),
              this.$totalProgressElem
                .find('.progress-bar-wrapper .progress-bar')
                .css({ width: e + '%' })),
            t != this.sizeDone &&
              ((this.sizeDone = t),
              this.$totalProgressElem.find('.size-complete').text(t)),
            n != this.tablesDone &&
              ((this.tablesDone = n),
              this.$totalProgressElem
                .find('.items-complete')
                .text(wpmdb.functions.wpmdb_add_commas(n)));
        },
        updateStageTotals: function(e) {
          if (
            (e = e || this.model.get('items').length) !== this.itemCount &&
            ((this.itemCount = e),
            this.$totalProgressElem
              .find('.items-total')
              .text(wpmdb.functions.wpmdb_add_commas(e)),
            this.$totalProgressElem
              .find('.size-total')
              .text(
                wpmdb.functions.convertKBSizeToHRFixed(
                  this.model.get('totalSize'),
                ),
              ),
            !this.shouldHideItemProgress && 500 < e)
          ) {
            var t = this.model.get('name').toLowerCase();
            ('themes' != t && 'plugins' !== t) || this.hideItemProgress();
          }
        },
        hideItemProgress: function() {
          this.shouldHideItemProgress ||
            ((this.shouldHideItemProgress = !0),
            this.$itemsContainer.empty(),
            this.$showHideTablesElem && this.$showHideTablesElem.hide());
        },
        maybeAddElementToView: function(e) {
          var t = this.shouldHideItemProgress ? 0 : this.maxDomNodes;
          this.visibleDomNodes < t
            ? (++this.visibleDomNodes, this.$itemsContainer.append(e.$el))
            : (this.queuedElements.push(e),
              this.$truncationNotice
                ? this.updateTruncationNotice()
                : this.showTruncationNotice());
        },
        showTruncationNotice: function() {
          if (!this.$truncationNotice) {
            var e = this.shouldHideItemProgress
              ? this.model.get('items').length
              : this.queuedElements.length;
            (this.$truncationNotice = n(
              '<div class="truncation-notice" >' +
                wpmdb_strings.progress_items_truncated_msg.replace(
                  '%1$s',
                  '<span class="hidden-items">' +
                    wpmdb.functions.wpmdb_add_commas(e) +
                    '</span>',
                ) +
                '</div>',
            )),
              (this.$truncationNoticeHiddenItems = this.$truncationNotice.find(
                '.hidden-items',
              )),
              this.$itemsContainer.after(this.$truncationNotice);
          }
        },
        updateTruncationNotice: function() {
          var e = this.shouldHideItemProgress
            ? this.model.get('items').length
            : this.queuedElements.length;
          this.$truncationNoticeHiddenItems.text(
            wpmdb.functions.wpmdb_add_commas(e),
          );
        },
        getNextElementForView: function(e) {
          var t;
          return (
            !this.shouldHideItemProgress &&
            (this.queuedElements.length &&
              (e && this.queuedElements.push(e),
              (e = (t = this.queuedElements.shift()) instanceof n ? t : t.$el)),
            e)
          );
        },
        setItemProgress: function(e) {
          var t = Math.min(100, Math.ceil((e.transferred / e.size) * 100));
          e.hasOwnProperty('exactPercent') && (t = 100 * e.exactPercent),
            0 === e.size && (t = 100),
            e.updateProgress(t),
            (100 <= t || 0 === e.size) && this.elemComplete(e);
        },
        elemComplete: function(e) {
          if (!this.shouldHideItemProgress) {
            var t = e.$el.addClass('complete');
            if (1 !== this.model.get('items').length) {
              var n = this.getNextElementForView(t),
                i = t.height(),
                o = t.css('margin-bottom'),
                a = !1;
              n === t &&
                (a = n
                  .clone()
                  .css({ height: 0, marginBottom: 0, display: 'block' })
                  .addClass('clone complete')).appendTo(this.$itemsContainer),
                t.css({ height: i, marginBottom: o }),
                setTimeout(
                  function() {
                    t.css({ height: 0, marginBottom: 0 });
                    var e = 0;
                    a &&
                      ((e = 250),
                      a.css({ height: i, marginBottom: o }),
                      a
                        .find('.progress-bar')
                        .addClass('progress-bar-no-transition')
                        .css({ width: '100%' })),
                      setTimeout(
                        function() {
                          t.css({ display: 'none' }),
                            t.remove(),
                            a && a.remove(),
                            this.$itemsContainer
                              .find('.item-progress:not(.clone)')
                              .last()
                              .after(
                                n.css({
                                  height: 'auto',
                                  marginBottom: o,
                                  display: 'block',
                                }),
                              );
                        }.bind(this),
                        e,
                      );
                  }.bind(this),
                  1e3,
                );
            }
          }
        },
      }));
    e.exports = i;
  },
  function(e, t) {
    window.jQuery;
    !(function(e, t) {
      t.functions.update_multiselect = function(n, i, o) {
        if ((e(n).empty(), 0 < Object.keys(i).length)) {
          var a = e.wpmdb.apply_filters('wpmdb_get_table_prefix', null, null),
            r = !1;
          e.each(i, function(t, i) {
            if (!e.wpmdb.apply_filters('wpmdb_exclude_subsite', !1, t)) {
              var s = ' ';
              (void 0 === o ||
                null === o ||
                0 === o.length ||
                (void 0 !== o &&
                  null !== o &&
                  0 < o.length &&
                  -1 !== e.inArray(t, o))) &&
                ((s = ' selected="selected" '), (r = !0)),
                (i += ' (' + a + ('1' !== t ? t + '_' : '') + ')'),
                e(n).append(
                  '<option' + s + 'value="' + t + '">' + i + '</option>',
                );
            }
          }),
            !1 === r && t.functions.update_multiselect(n, i, []);
        }
      };
    })(jQuery, wpmdb);
  },
  function(e, t) {
    window.jQuery;
    !(function(e) {
      var t,
        n = !1,
        i = ajaxurl.replace('/admin-ajax.php', '') + '/images/spinner';
      2 < window.devicePixelRatio && (i += '-2x'),
        (t = e(
          '<img src="' +
            (i += '.gif') +
            '" alt="" class="check-licence-spinner" />',
        )),
        e(document).ready(function() {
          e('body').on('click', '.check-my-licence-again', function(i) {
            if ((i.preventDefault(), e(this).blur(), n)) return !1;
            (n = !0), e(this).hide(), t.insertAfter(this);
            var o =
              ' <a class="check-my-licence-again" href="#">' +
              wpmdb_update_strings.check_license_again +
              '</a>';
            e.ajax({
              url: ajaxurl,
              type: 'POST',
              dataType: 'json',
              cache: !1,
              data: {
                action: 'wpmdb_check_licence',
                nonce: wpmdb_nonces.check_licence,
                context: 'update',
              },
              error: function(t, i, a) {
                (n = !1),
                  e('.wpmdb-licence-error-notice').fadeOut(650, function() {
                    e('.wpmdb-licence-error-notice')
                      .empty()
                      .html(wpmdb_update_strings.license_check_problem + o)
                      .fadeIn(650);
                  });
              },
              success: function(t) {
                if (((n = !1), void 0 !== t.errors)) {
                  var i = '';
                  for (var o in t.errors) i += t.errors[o];
                  e('.wpmdb-licence-error-notice').fadeOut(650, function() {
                    e('.check-licence-spinner').remove(),
                      e('.wpmdb-licence-error-notice')
                        .empty()
                        .html(i)
                        .fadeIn(650);
                  });
                } else
                  e('.wpmdbpro-custom-visible').fadeOut(650, function() {
                    e('.check-licence-spinner').remove(),
                      e('.wpmdbpro-custom-visible')
                        .empty()
                        .html(e('.wpmdb-original-update-row').html())
                        .fadeIn(650);
                  });
              },
            });
          }),
            e('.wpmdbpro-custom')
              .prev()
              .addClass('wpmdbpro-has-message');
        });
    })(jQuery);
  },
  function(e, t, n) {
    window.jQuery;
    var i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(125)),
      o = n(54);
    var a = new i.default(),
      r = window.wpmdb || {};
    !(function(e, t) {
      (t.migration_progress_controller = n(126)),
        (t.current_migration = null),
        (t.migration_selection = t.functions.wpmdb_migration_type()),
        (window.onbeforeunload = function(n) {
          if (
            ('import' !== t.functions.wpmdb_migration_type() ||
              e('.step-two').is(':visible') ||
              t.functions.remove_localStorage_form_data(),
            a.currently_migrating)
          )
            return (
              (n = n || window.event) && (n.returnValue = wpmdb_strings.sure),
              wpmdb_strings.sure
            );
        }),
        (t.functions.exclude_post_types_warning = function() {
          var t = e('#select-post-types').val(),
            n = '',
            i = e('.exclude-post-types-warning');
          t
            ? ((n = '<code>' + t.join('</code>, <code>') + '</code>'),
              e('.excluded-post-types').html(n),
              '0' === i.css('opacity') &&
                i
                  .css({ opacity: 0 })
                  .slideDown(200)
                  .animate({ opacity: 1 }))
            : i
                .css({ opacity: 0 })
                .slideUp(200)
                .animate({ opacity: 0 });
        }),
        (t.functions.migrate_table_recursive = function(n, i, o) {
          var r = o || 0;
          if (r >= a.tables_to_migrate.length)
            if (
              'upload' === a.stage &&
              t.current_migration.model.getStageItems('find_replace').length
            )
              (a.stage = 'find_replace'),
                (a.tables_to_migrate = t.current_migration.model.getStageItems(
                  'find_replace',
                  'name',
                )),
                (a.tables_to_migrate = a.tables_to_migrate.map(function(e) {
                  return '_mig_' + e;
                })),
                (r = 0);
            else {
              if ('backup' !== a.stage)
                return (
                  e('.progress-label').removeClass('label-visible'),
                  (t.common.hooks = e.wpmdb.apply_filters(
                    'wpmdb_before_migration_complete_hooks',
                    t.common.hooks,
                  )),
                  t.common.hooks.push(t.functions.migration_complete),
                  t.common.hooks.push(t.functions.wpmdb_flush),
                  (t.common.hooks = e.wpmdb.apply_filters(
                    'wpmdb_after_migration_complete_hooks',
                    t.common.hooks,
                  )),
                  t.common.hooks.push(t.functions.migration_complete_events),
                  (t.common.next_step_in_migration = {
                    fn: t.functions.wpmdb_call_next_hook,
                  }),
                  void t.functions.execute_next_step()
                );
              if (
                (-1 !== e.inArray(a.migration_intent, ['push', 'pull'])
                  ? (a.stage = 'migrate')
                  : 'import' === a.migration_intent
                  ? (a.stage = 'upload')
                  : (a.stage = a.migration_intent),
                t.current_migration.model.setActiveStage(a.stage),
                'find_replace' !== a.stage && 'migrate' !== a.stage)
              )
                return void t.functions.wpmdb_call_next_hook();
              (r = 0),
                (a.tables_to_migrate = t.functions.get_tables_to_migrate(
                  null,
                  null,
                ));
            }
          var s = 0;
          r === a.tables_to_migrate.length - 1 && (s = 1);
          var c = 0;
          -1 !== e.inArray(a.migration_intent, ['push', 'pull']) &&
            1 === parseInt(t.common.connection_data.gzip) &&
            (c = 1);
          var l = {
            action: 'wpmdb_migrate_table',
            migration_state_id: t.migration_state_id,
            table: a.tables_to_migrate[r],
            stage: a.stage,
            current_row: n,
            last_table: s,
            primary_keys: i,
            gzip: c,
            nonce: wpmdb_data.nonces.migrate_table,
          };
          -1 !== e.inArray(a.migration_intent, ['push', 'pull']) &&
            ((l.bottleneck = t.common.connection_data.bottleneck),
            (l.prefix = t.common.connection_data.prefix)),
            t.common.connection_data &&
              t.common.connection_data.path_current_site &&
              t.common.connection_data.domain &&
              ((l.path_current_site =
                t.common.connection_data.path_current_site),
              (l.domain_current_site = t.common.connection_data.domain)),
            (a.doing_ajax = !0),
            e.ajax({
              url: ajaxurl,
              type: 'POST',
              dataType: 'text',
              cache: !1,
              timeout: 0,
              data: l,
              error: function(e, n, i) {
                var o =
                  wpmdb_strings.table_process_problem +
                  ' ' +
                  a.tables_to_migrate[r] +
                  '<br /><br />' +
                  wpmdb_strings.status +
                  ': ' +
                  e.status +
                  ' ' +
                  e.statusText +
                  '<br /><br />' +
                  wpmdb_strings.response +
                  ':<br />' +
                  e.responseText;
                t.current_migration.setState(
                  wpmdb_strings.migration_failed,
                  o,
                  'error',
                ),
                  (a.doing_ajax = !1),
                  console.log(e),
                  console.log(n),
                  console.log(i),
                  (t.common.migration_error = !0),
                  t.functions.migration_complete_events();
              },
              success: function(n) {
                (a.doing_ajax = !1), (n = e.trim(n));
                var i = t.functions.wpmdb_parse_json(n),
                  o = '';
                if (!1 === i || null === i)
                  return (
                    (o =
                      '' === n || null === n
                        ? wpmdb_strings.table_process_problem_empty_response +
                          ' ' +
                          a.tables_to_migrate[r]
                        : a.get_ajax_errors(n, null, null)),
                    t.current_migration.setState(
                      wpmdb_strings.migration_failed,
                      o,
                      'error',
                    ),
                    (t.common.migration_error = !0),
                    void t.functions.migration_complete_events()
                  );
                if (void 0 !== i.wpmdb_error && 1 === i.wpmdb_error)
                  return (
                    t.current_migration.setState(
                      wpmdb_strings.migration_failed,
                      i.body,
                      'error',
                    ),
                    (t.common.migration_error = !0),
                    void t.functions.migration_complete_events()
                  );
                var c = a.tables_to_migrate[r];
                'import' === a.migration_intent &&
                  'find_replace' === a.stage &&
                  (c = c.replace(wpmdb_data.this_temp_prefix, '')),
                  t.current_migration.setText(),
                  t.current_migration.model
                    .getStageModel(a.stage)
                    .setItemRowsTransferred(c, i.current_row),
                  1 === s &&
                    'savefile' === a.migration_intent &&
                    (void 0 !== i.dump_filename &&
                      (a.dump_filename = i.dump_filename),
                    void 0 !== i.dump_path && (a.dump_path = i.dump_path)),
                  -1 === parseInt(i.current_row) &&
                    (r++, (i.current_row = ''), (i.primary_keys = '')),
                  (t.common.next_step_in_migration = {
                    fn: t.functions.migrate_table_recursive,
                    args: [i.current_row, i.primary_keys, r],
                  }),
                  t.functions.execute_next_step();
              },
            });
        }),
        (t.functions.migration_complete_events = function() {
          if (!1 === t.common.migration_error)
            if ('' === t.common.non_fatal_errors)
              if (
                ('savefile' !== a.migration_intent &&
                  !0 === e('#save_computer').is(':checked') &&
                  t.current_migration.setText(),
                (a.completed_msg =
                  a.completed_msg +
                  '&nbsp;<div class="dashicons dashicons-yes"></div>'),
                !0 === a.migration_cancelled)
              ) {
                var n = wpmdb_strings.migration_cancelled_success;
                'find_replace' === a.migration_intent &&
                  (n = wpmdb_strings.find_replace_cancelled_success),
                  t.current_migration.setState(a.completed_msg, n, 'cancelled');
              } else
                t.current_migration.setState(a.completed_msg, '', 'complete');
            else
              t.current_migration.setState(
                wpmdb_strings.completed_with_some_errors,
                t.common.non_fatal_errors,
                'error',
              );
          e('.migration-controls').addClass('hidden'),
            (t.common.hooks = []),
            (t.common.call_stack = []),
            (t.common.migration_error = !1),
            (a.currently_migrating = !1),
            (a.migration_completed = !0),
            (a.migration_paused = !1),
            (a.migration_cancelled = !1),
            (a.doing_ajax = !1),
            (t.common.non_fatal_errors = ''),
            (a.tables_to_migrate = []),
            e('.progress-label').remove(),
            e('.migration-progress-ajax-spinner').remove(),
            e('.close-progress-content').show(),
            e('#overlay').css('cursor', 'pointer'),
            t.current_migration.model.setMigrationComplete();
        }),
        (t.functions.migration_complete = function() {
          if (
            (e('.migration-controls').addClass('hidden'),
            'savefile' === a.migration_intent)
          ) {
            a.currently_migrating = !1;
            var n = wpmdb_strings.migration_complete;
            if (e('#save_computer').is(':checked')) {
              var i =
                wpmdb_data.this_download_url +
                encodeURIComponent(a.dump_filename);
              e('#gzip_file').is(':checked') && (i += '&gzip=1'),
                e('body').trigger('wpmdb_done'),
                (window.location = i);
            } else
              e('body').trigger('wpmdb_done'),
                (n =
                  wpmdb_strings.completed_dump_located_at + ' ' + a.dump_path);
            !1 === t.common.migration_error &&
              (t.functions.migration_complete_events(),
              t.current_migration.setState(a.completed_msg, n, 'complete'));
          } else {
            t.current_migration.setState(
              null,
              wpmdb_strings.finalizing_migration,
              'finalizing',
            );
            var r = {
              action: 'wpmdb_finalize_migration',
              migration_state_id: t.migration_state_id,
              tables: a.tables_to_migrate.join(','),
              nonce: wpmdb_data.nonces.finalize_migration,
            };
            -1 !== e.inArray(a.migration_intent, ['push', 'pull']) &&
              (r.prefix = t.common.connection_data.prefix),
              (a.doing_ajax = !0),
              e.ajax({
                url: ajaxurl,
                type: 'POST',
                dataType: 'json',
                cache: !1,
                data: r,
                error: function(e) {
                  a.doing_ajax = !1;
                  var t = wpmdb_strings.finalize_tables_problem;
                  (0, o.jQueryAjaxError)(t, e);
                },
                success: function(e) {
                  if (
                    ((a.doing_ajax = !1),
                    void 0 !== e &&
                      void 0 !== e.wpmdb_error &&
                      1 === e.wpmdb_error)
                  )
                    return (
                      (t.common.migration_error = !0),
                      t.functions.migration_complete_events(),
                      void t.current_migration.setState(
                        wpmdb_strings.migration_failed,
                        e.body,
                        'error',
                      )
                    );
                  (t.common.next_step_in_migration = {
                    fn: t.functions.wpmdb_call_next_hook,
                  }),
                    t.functions.execute_next_step();
                },
              });
          }
        }),
        (t.functions.wpmdb_flush = function() {
          'savefile' !== a.migration_intent &&
            (t.current_migration.setText(wpmdb_strings.flushing),
            (a.doing_ajax = !0),
            e.ajax({
              url: ajaxurl,
              type: 'POST',
              dataType: 'text',
              cache: !1,
              data: {
                action: 'wpmdb_flush',
                migration_state_id: t.migration_state_id,
                nonce: wpmdb_data.nonces.flush,
              },
              error: function(e, n, i) {
                (a.doing_ajax = !1),
                  t.current_migration.setState(
                    wpmdb_strings.migration_failed,
                    wpmdb_strings.flush_problem,
                    'error',
                  ),
                  alert(e + ' : ' + n + ' : ' + i),
                  (t.common.migration_error = !0),
                  t.functions.migration_complete_events();
              },
              success: function(n) {
                if (((a.doing_ajax = !1), '1' !== e.trim(n)))
                  return (
                    t.current_migration.setState(
                      wpmdb_strings.migration_failed,
                      n,
                      'error',
                    ),
                    (t.common.migration_error = !0),
                    void t.functions.migration_complete_events()
                  );
                e('body').trigger('wpmdb_done'),
                  (t.common.next_step_in_migration = {
                    fn: t.functions.wpmdb_call_next_hook,
                  }),
                  t.functions.execute_next_step();
              },
            }));
        }),
        (t.functions.execute_next_step = function() {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            i =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
          if (0 < a.delay_between_requests && !1 === a.flag_skip_delay)
            setTimeout(function() {
              (a.flag_skip_delay = !0), t.functions.execute_next_step(n);
            }, a.delay_between_requests);
          else if (((a.flag_skip_delay = !1), !0 === a.migration_paused)) {
            e('.migration-progress-ajax-spinner').hide(),
              t.current_migration.pauseTimer();
            var o = '';
            !0 === a.is_auto_pause_before_finalize
              ? ((o = wpmdb_strings.paused_before_finalize),
                (a.is_auto_pause_before_finalize = !1),
                'find_replace' === t.functions.wpmdb_migration_type() &&
                  (o = wpmdb_strings.find_replace_paused_before_finalize))
              : (o = wpmdb_strings.paused),
              t.current_migration.setState(null, o, 'paused'),
              e('body').on('click', '.pause-resume', function(e) {
                a.set_pause_resume_button(e, n);
              }),
              e('body').on('click', '.cancel', function(e) {
                a.cancel_migration(e);
              }),
              e('.pause-resume').html(wpmdb_strings.resume);
          } else if (!0 === a.migration_cancelled) {
            var r;
            (a.migration_intent = t.functions.wpmdb_migration_type()),
              'savefile' === a.migration_intent
                ? (r = wpmdb_strings.removing_local_sql)
                : 'pull' === a.migration_intent
                ? (r =
                    'backup' === a.stage
                      ? wpmdb_strings.removing_local_backup
                      : wpmdb_strings.removing_local_temp_tables)
                : 'push' === a.migration_intent &&
                  (r =
                    'backup' === a.stage
                      ? wpmdb_strings.removing_remote_sql
                      : wpmdb_strings.removing_remote_temp_tables),
              t.current_migration.setText(r);
            var s = {
              action: 'wpmdb_cancel_migration',
              migration_state_id: t.migration_state_id,
              nonce: wpmdb_data.nonces.cancel_migration,
            };
            (a.doing_ajax = !0),
              e.ajax({
                url: ajaxurl,
                type: 'POST',
                dataType: 'text',
                cache: !1,
                data: s,
                error: function(e, n, i) {
                  t.current_migration.setState(
                    wpmdb_strings.migration_cancellation_failed,
                    wpmdb_strings.manually_remove_temp_files +
                      '<br /><br />' +
                      wpmdb_strings.status +
                      ': ' +
                      e.status +
                      ' ' +
                      e.statusText +
                      '<br /><br />' +
                      wpmdb_strings.response +
                      ':<br />' +
                      e.responseText,
                    'error',
                  ),
                    console.log(e),
                    console.log(n),
                    console.log(i),
                    (a.doing_ajax = !1),
                    (t.common.migration_error = !0),
                    t.functions.migration_complete_events();
                },
                success: function(n) {
                  if (
                    ((a.doing_ajax = !1),
                    (n = e.trim(n)),
                    ('push' === a.migration_intent && '1' !== n) ||
                      ('push' !== a.migration_intent && '' !== n))
                  )
                    return (
                      void 0 !== n &&
                        void 0 !== n.wpmdb_error &&
                        1 === n.wpmdb_error &&
                        (n = n.wpmdb_error),
                      t.current_migration.setState(
                        wpmdb_strings.migration_cancellation_failed,
                        n,
                        'error',
                      ),
                      (t.common.migration_error = !0),
                      void t.functions.migration_complete_events()
                    );
                  (a.completed_msg = wpmdb_strings.migration_cancelled),
                    'find_replace' === a.migration_intent &&
                      (a.completed_msg = wpmdb_strings.find_replace_cancelled),
                    t.functions.migration_complete_events(),
                    t.current_migration.setStatus('cancelled');
                },
              });
          } else
            i &&
              t.common.next_step_in_migration.fn.apply(
                n,
                t.common.next_step_in_migration.args,
              );
        }),
        (t.functions.maybe_show_prefix_notice = function(t) {
          var n = e('.prefix-notice');
          n.hide(),
            t !== wpmdb_data.this_prefix &&
              (e('.remote-prefix').html(t),
              (a.show_prefix_notice = !0),
              n.show());
        }),
        (t.functions.maybe_show_mst_warning = function(n) {
          var i = t.functions.wpmdb_migration_type(),
            o = !1;
          return (
            -1 !== e.inArray(i, ['push', 'pull']) && void 0 !== n.site_details
              ? wpmdb_data.site_details.is_multisite !==
                  n.site_details.is_multisite &&
                ((void 0 !== t.mst &&
                  void 0 !== n.mst_available &&
                  '1' === n.mst_available) ||
                  (o = !0))
              : 'import' === i &&
                void 0 !== n.multisite &&
                void 0 !== n.subsite_export &&
                (('false' === wpmdb_data.site_details.is_multisite &&
                  'true' === n.multisite &&
                  'true' !== n.subsite_export) ||
                  ('true' === wpmdb_data.site_details.is_multisite &&
                    'false' === n.multisite)) &&
                (o = !0),
            (o = e.wpmdb.apply_filters('wpmdb_show_mst_warning', o)) &&
              e('.mst-required').show(),
            o
          );
        }),
        (t.functions.maybe_show_select_table_notice = function() {
          if (
            e('#migrate-selected').is(':checked') &&
            null === e('#select-tables').val()
          ) {
            if ('import' !== t.functions.wpmdb_migration_type())
              return alert(wpmdb_strings.please_select_one_table), !0;
            if (
              e('#import-find-replace').is(':checked') &&
              e('#select-tables').is(':visible')
            )
              return alert(wpmdb_strings.please_select_one_table_import), !0;
          }
          return (
            !(
              'savefile' === t.functions.wpmdb_migration_type() ||
              !e('#backup-manual-select').is(':checked') ||
              null !== e('#select-backup').val()
            ) && (alert(wpmdb_strings.please_select_one_table_backup), !0)
          );
        }),
        (t.functions.remove_protocol = function(e) {
          return e.replace(/^https?:/i, '');
        }),
        (t.functions.create_table_select = function(t, n, i) {
          var o = document.createElement('select');
          return (
            e(o).attr({
              multiple: 'multiple',
              name: 'select_tables[]',
              id: 'select-tables',
              class: 'multiselect',
            }),
            0 < t.length &&
              e.each(t, function(t, a) {
                if (!e.wpmdb.apply_filters('wpmdb_exclude_table', !1, a)) {
                  var r = ' ';
                  void 0 !== i &&
                    null !== i &&
                    0 < i.length &&
                    -1 !== e.inArray(a, i) &&
                    (r = ' selected="selected" ');
                  var s = '';
                  0 !== n.length && (s = ' (' + n[a] + ')'),
                    e(o).append(
                      '<option' +
                        r +
                        'value="' +
                        a +
                        '">' +
                        a +
                        s +
                        '</option>',
                    );
                }
              }),
            o
          );
        }),
        (t.functions.get_tables_to_migrate = function() {
          var n = [],
            i = t.functions.wpmdb_migration_type();
          return (
            'migrate_select' ===
            e('input[name=table_migrate_option]:checked').val()
              ? (n = e('#select-tables').val())
              : 'pull' !== i && void 0 !== wpmdb_data.this_prefixed_tables
              ? (n = wpmdb_data.this_prefixed_tables)
              : 'pull' === i &&
                void 0 !== t.common.connection_data &&
                void 0 !== t.common.connection_data.prefixed_tables &&
                (n = t.common.connection_data.prefixed_tables),
            n
          );
        }),
        (t.functions.update_migrate_button_text = function() {
          var n = t.functions.wpmdb_migration_type(),
            i = e('#save-migration-profile').is(':checked') ? '_save' : '',
            o = 'migrate_button_' + ('savefile' === n ? 'export' : n) + i;
          e('.migrate-db .button-primary').val(wpmdb_strings[o]);
        }),
        (t.functions.connection_box_changed = function() {
          var n = e('.pull-push-connection-info');
          if (
            -1 !==
              e.inArray(t.functions.wpmdb_migration_type(), ['push', 'pull']) &&
            ((!a.doing_ajax && !e(n).hasClass('temp-disabled')) ||
              !1 !== t.force_reconnect)
          ) {
            t.force_reconnect = !1;
            var i = e('.pull-push-connection-info').val(),
              o = e.trim(i).split('\n'),
              r = !1,
              s = '';
            if (
              ('' === o &&
                ((r = !0), (s = wpmdb_strings.connection_info_missing)),
              1 === o.length && !r)
            ) {
              var c = e.trim(i).split(' ');
              2 === c.length && (o = c);
            }
            2 === o.length ||
              r ||
              ((r = !0), (s = wpmdb_strings.connection_info_incorrect)),
              r ||
                a.validate_url(o[0]) ||
                ((r = !0), (s = wpmdb_strings.connection_info_url_invalid));
            var l = 0;
            if (
              (void 0 !== o[1] && (l = o[1].length),
              r ||
                32 === l ||
                40 === l ||
                ((r = !0), (s = wpmdb_strings.connection_info_key_invalid)),
              r ||
                o[0] !== wpmdb_data.connection_info[0] ||
                ((r = !0), (s = wpmdb_strings.connection_info_local_url)),
              r ||
                o[1] !== wpmdb_data.connection_info[1] ||
                ((r = !0), (s = wpmdb_strings.connection_info_local_key)),
              r)
            )
              return (
                e('.connection-status').html(s),
                void e('.connection-status').addClass(
                  'notification-message error-notice migration-error',
                )
              );
            var p = o[0] + '\n' + o[1];
            1 === e.trim(i).split('\n').length &&
              e('.pull-push-connection-info').val(p),
              !1 === wpmdb_data.openssl_available &&
                ((o[0] = o[0].replace('https://', 'http://')),
                (p = o[0] + '\n' + o[1]),
                e('.pull-push-connection-info').val(p)),
              (a.show_prefix_notice = !1),
              (a.doing_ajax = !0),
              a.disable_export_type_controls(),
              e('.basic-access-auth-wrapper').is(':visible') &&
                ((o[0] = o[0].replace(/\/\/(.*)@/, '//')),
                (o[0] = o[0].replace(
                  '//',
                  '//' +
                    encodeURIComponent(e.trim(e('.auth-username').val())) +
                    ':' +
                    encodeURIComponent(e.trim(e('.auth-password').val())) +
                    '@',
                )),
                (p = o[0] + '\n' + o[1]),
                e('.pull-push-connection-info').val(p),
                e('.basic-access-auth-wrapper').hide()),
              e('.step-two').hide(),
              e('.ssl-notice').hide(),
              e('.prefix-notice').hide(),
              e('.connection-status').show(),
              e('.connection-status').html(
                wpmdb_strings.establishing_remote_connection,
              ),
              e('.connection-status').removeClass(
                'notification-message error-notice migration-error',
              ),
              e('.connection-status').append(a.ajax_spinner);
            var d = t.functions.wpmdb_migration_type();
            return (
              (a.profile_name_edited = !1),
              e.ajax({
                url: ajaxurl,
                type: 'POST',
                dataType: 'json',
                cache: !1,
                data: {
                  action: 'wpmdb_verify_connection_to_remote_site',
                  url: o[0],
                  key: o[1],
                  intent: d,
                  nonce: wpmdb_data.nonces.verify_connection_to_remote_site,
                },
                error: function(t, n, i) {
                  e('.connection-status').html(
                    a.get_ajax_errors(t.responseText, '(#100)', t),
                  ),
                    e('.connection-status').addClass(
                      'notification-message error-notice migration-error',
                    ),
                    e('.ajax-spinner').remove(),
                    (a.doing_ajax = !1),
                    a.enable_export_type_controls();
                },
                success: function(n) {
                  if (
                    (e('.ajax-spinner').remove(),
                    (a.doing_ajax = !1),
                    a.enable_export_type_controls(),
                    void 0 !== n.wpmdb_error && 1 === n.wpmdb_error)
                  )
                    return (
                      e('.connection-status').html(n.body),
                      e('.connection-status').addClass(
                        'notification-message error-notice migration-error',
                      ),
                      n.body.indexOf('401 Unauthorized') > -1 &&
                        e('.basic-access-auth-wrapper').show(),
                      void (
                        e('.pull-push-connection-info').hasClass(
                          'temp-disabled',
                        ) ||
                        e('.connect-button').is(':visible') ||
                        (e('.pull-push-connection-info').removeAttr('readonly'),
                        e('.connect-button').show())
                      )
                    );
                  if (!0 !== t.functions.maybe_show_mst_warning(n)) {
                    a.maybe_show_ssl_warning(o[0], o[1], n.scheme);
                    var i = a.get_domain_name(n.url);
                    e('.create-new-profile').val(i),
                      e('.pull-push-connection-info').addClass('temp-disabled'),
                      e('.pull-push-connection-info').attr(
                        'readonly',
                        'readonly',
                      ),
                      e('.connect-button').hide(),
                      e('.connection-status').hide(),
                      e('.step-two').show(),
                      t.functions.maybe_show_prefix_notice(n.prefix),
                      (a.connection_established = !0),
                      a.set_connection_data(n),
                      a.move_connection_info_box(),
                      a.change_replace_values(),
                      a.maybe_show_mixed_cased_table_name_warning(),
                      a.refresh_table_selects(null, null, this),
                      (a.$push_select_backup = e(a.$pull_select).clone()),
                      e(a.$push_select_backup).attr({
                        name: 'select_backup[]',
                        id: 'select-backup',
                      });
                    var r = document.createElement('select');
                    e(r).attr({
                      multiple: 'multiple',
                      name: 'select_post_types[]',
                      id: 'select-post-types',
                      class: 'multiselect',
                    }),
                      e.each(t.common.connection_data.post_types, function(
                        t,
                        n,
                      ) {
                        e(r).append(
                          '<option value="' + n + '">' + n + '</option>',
                        );
                      }),
                      (a.$pull_post_type_select = r),
                      e(
                        '#new-path-missing-warning, #new-url-missing-warning',
                      ).hide(),
                      'pull' === t.functions.wpmdb_migration_type()
                        ? (e('#new-url').val(
                            t.functions.remove_protocol(wpmdb_data.this_url),
                          ),
                          e('#new-path').val(wpmdb_data.this_path),
                          'true' === wpmdb_data.is_multisite &&
                            (e('#new-domain').val(wpmdb_data.this_domain),
                            e(
                              '.replace-row.pin .old-replace-col input[type="text"]',
                            ).val(t.functions.remove_protocol(n.url))),
                          e('#old-url').val(t.functions.remove_protocol(n.url)),
                          e('#old-path').val(n.path),
                          e.wpmdb.do_action('wpmdb_update_pull_table_select'),
                          e('#select-post-types').remove(),
                          e('.exclude-post-types-warning').after(
                            a.$pull_post_type_select,
                          ),
                          t.functions.exclude_post_types_warning(),
                          e('.table-prefix').html(n.prefix),
                          e('.backup-table-prefix').html(
                            wpmdb_data.site_details.prefix,
                          ),
                          e('.uploads-dir').html(wpmdb_data.this_uploads_dir))
                        : (e('#new-url').val(
                            t.functions.remove_protocol(n.url),
                          ),
                          e('#new-path').val(n.path),
                          'true' === wpmdb_data.is_multisite &&
                            e(
                              '.replace-row.pin .old-replace-col input[type="text"]',
                            ).val(
                              t.functions.remove_protocol(wpmdb_data.this_url),
                            ),
                          e.wpmdb.do_action('wpmdb_update_push_table_select'),
                          e('#select-backup').remove(),
                          e('.backup-tables-wrap').prepend(
                            a.$push_select_backup,
                          )),
                      e('body').trigger('wpmdb_connection_fired'),
                      (t.common.next_step_in_migration = {
                        fn: e.wpmdb.do_action,
                        args: [
                          'verify_connection_to_remote_site',
                          t.common.connection_data,
                        ],
                      }),
                      t.functions.execute_next_step();
                  } else e('.connection-status').hide();
                },
              })
            );
          }
        }),
        e(document).ready(function() {
          (t.migration_state_id = ''),
            e('#plugin-compatibility').change(function(t) {
              var n = '1',
                i = e(this)
                  .closest('td')
                  .next('td')
                  .find('.setting-status');
              e(this).is(':checked') || (n = '0'),
                e('.plugin-compatibility-wrap').toggle(),
                i.find('.ajax-success-msg').remove(),
                i.append(a.ajax_spinner),
                e('#plugin-compatibility').attr('disabled', 'disabled'),
                e('.plugin-compatibility').addClass('disabled'),
                e.ajax({
                  url: ajaxurl,
                  type: 'POST',
                  dataType: 'text',
                  cache: !1,
                  data: {
                    action: 'wpmdb_plugin_compatibility',
                    install: n,
                    nonce: wpmdb_data.nonces.plugin_compatibility,
                  },
                  error: function(t, n, i) {
                    alert(
                      wpmdb_strings.plugin_compatibility_settings_problem +
                        '\r\n\r\n' +
                        wpmdb_strings.status +
                        ' ' +
                        t.status +
                        ' ' +
                        t.statusText +
                        '\r\n\r\n' +
                        wpmdb_strings.response +
                        '\r\n' +
                        t.responseText,
                    ),
                      e('.ajax-spinner').remove(),
                      e('#plugin-compatibility').removeAttr('disabled'),
                      e('.plugin-compatibility').removeClass('disabled');
                  },
                  success: function(t) {
                    '' !== e.trim(t)
                      ? alert(t)
                      : (i.append(
                          '<span class="ajax-success-msg">' +
                            wpmdb_strings.saved +
                            '</span>',
                        ),
                        e('.ajax-success-msg').fadeOut(2e3, function() {
                          e(this).remove();
                        })),
                      e('.ajax-spinner').remove(),
                      e('#plugin-compatibility').removeAttr('disabled'),
                      e('.plugin-compatibility').removeClass('disabled');
                  },
                });
            }),
            e('#plugin-compatibility').is(':checked') &&
              e('.plugin-compatibility-wrap').show(),
            (0 <= navigator.userAgent.indexOf('MSIE') ||
              0 <= navigator.userAgent.indexOf('Trident')) &&
              e('.ie-warning').show(),
            0 <= navigator.userAgent.indexOf('Edge') &&
              e('.edge-warning').show(),
            0 === wpmdb_data.valid_licence &&
              e('#savefile').prop('checked', !0);
          var n = e('.max-request-size'),
            i = e('.slider', n);
          i.slider({
            range: 'min',
            value: parseInt(wpmdb_data.max_request / 1024),
            min: 512,
            max: parseInt(wpmdb_data.bottleneck / 1024),
            step: 256,
            create: function(e, t) {
              var i = a.get_max_request_display_info(
                wpmdb_data.max_request / 1024,
              );
              a.set_slider_value(
                n,
                wpmdb_data.max_request / 1024,
                i.unit,
                i.amount,
              );
            },
            slide: function(e, t) {
              var i = a.get_max_request_display_info(t.value);
              a.set_slider_value(n, t.value, i.unit, i.amount);
            },
            stop: function(t, o) {
              e('.slider-success-msg').remove(),
                e('.amount', n).after(
                  '<img src="' +
                    a.spinner_url +
                    '" alt="" class="slider-spinner general-spinner" />',
                ),
                i.slider('disable'),
                e.ajax({
                  url: ajaxurl,
                  type: 'POST',
                  cache: !1,
                  data: {
                    action: 'wpmdb_update_max_request_size',
                    max_request_size: parseInt(o.value),
                    nonce: wpmdb_data.nonces.update_max_request_size,
                  },
                  error: function(t, o, r) {
                    i.slider('enable'),
                      e('.slider-spinner', n).remove(),
                      alert(wpmdb_strings.max_request_size_problem);
                    var s = a.get_max_request_display_info(
                      wpmdb_data.max_request / 1024,
                    );
                    a.set_slider_value(
                      n,
                      wpmdb_data.max_request / 1024,
                      s.unit,
                      s.amount,
                    ),
                      i.slider('enable');
                  },
                  success: function() {
                    i.slider('enable'),
                      e('.slider-label-wrapper', n).append(
                        '<span class="slider-success-msg">' +
                          wpmdb_strings.saved +
                          '</span>',
                      ),
                      e('.slider-success-msg', n).fadeOut(2e3, function() {
                        e(this).remove();
                      }),
                      e('.slider-spinner', n).remove();
                  },
                });
            },
          });
          var o = e('.delay-between-requests'),
            r = e('.slider', o);
          r.slider({
            range: 'min',
            value: parseInt(wpmdb_data.delay_between_requests / 1e3),
            min: 0,
            max: 10,
            step: 1,
            create: function(e, t) {
              a.set_slider_value(
                o,
                wpmdb_data.delay_between_requests / 1e3,
                's',
              );
            },
            slide: function(e, t) {
              a.set_slider_value(o, t.value, 's');
            },
            stop: function(t, n) {
              e('.slider-success-msg').remove(),
                e('.amount', o).after(
                  '<img src="' +
                    a.spinner_url +
                    '" alt="" class="slider-spinner general-spinner" />',
                ),
                r.slider('disable'),
                e.ajax({
                  url: ajaxurl,
                  type: 'POST',
                  cache: !1,
                  data: {
                    action: 'wpmdb_update_delay_between_requests',
                    delay_between_requests: parseInt(1e3 * n.value),
                    nonce: wpmdb_data.nonces.update_delay_between_requests,
                  },
                  error: function(t, n, i) {
                    r.slider('enable'),
                      e('.slider-spinner', o).remove(),
                      alert(wpmdb_strings.delay_between_requests_problem),
                      a.set_slider_value(
                        o,
                        wpmdb_data.delay_between_requests / 1e3,
                        's',
                      ),
                      r.slider('enable');
                  },
                  success: function() {
                    (wpmdb_data.delay_between_requests = parseInt(
                      1e3 * n.value,
                    )),
                      r.slider('enable'),
                      e('.slider-label-wrapper', o).append(
                        '<span class="slider-success-msg">' +
                          wpmdb_strings.saved +
                          '</span>',
                      ),
                      e('.slider-success-msg', o).fadeOut(2e3, function() {
                        e(this).remove();
                      }),
                      e('.slider-spinner', o).remove();
                  },
                });
            },
          }),
            e('.help-tab .video').each(function() {
              var t = e(this),
                n = e('.video-viewer');
              e('a', this).click(function(i) {
                i.preventDefault(),
                  n.attr(
                    'src',
                    '//www.youtube.com/embed/' +
                      t.data('video-id') +
                      '?autoplay=1',
                  ),
                  n.show();
                var o = n.offset();
                e(window).scrollTop(o.top - 50);
              });
            }),
            e('.backup-options').show(),
            e('.keep-active-plugins').show(),
            'savefile' === t.functions.wpmdb_migration_type() &&
              (e('.backup-options').hide(), e('.keep-active-plugins').hide()),
            (a.last_replace_switch = t.functions.wpmdb_migration_type()),
            e('.content-tab').on('click', '.check-my-licence-again', function(
              t,
            ) {
              t.preventDefault(),
                (a.checked_licence = !1),
                e(t.target).replaceWith('Checking... ' + a.ajax_spinner),
                a.check_licence(null, 'all');
            }),
            e.wpmdb.add_action(
              'wpmdb_refresh_table_selects',
              a.refresh_table_selects,
              '',
              a,
            ),
            e.wpmdb.add_action('wpmdb_update_push_table_select', function() {
              e('#select-tables').remove(),
                e('.select-tables-wrap').prepend(a.$push_select),
                e('#select-tables').change();
            }),
            e.wpmdb.add_action('wpmdb_update_pull_table_select', function() {
              e('#select-tables').remove(),
                e('.select-tables-wrap').prepend(a.$pull_select),
                e('#select-tables').change();
            }),
            e.wpmdb.add_action(
              'wpmdb_disable_table_migration_options',
              function() {
                e('#migrate-selected')
                  .parents('.option-section')
                  .children('.header-expand-collapse')
                  .children('.expand-collapse-arrow')
                  .removeClass('collapsed'),
                  e('.table-select-wrap').show(),
                  e('#migrate-only-with-prefix').prop('checked', !1),
                  e('#migrate-selected').prop('checked', !0),
                  e('.table-migrate-options').hide(),
                  e('.select-tables-wrap').show();
              },
            ),
            e.wpmdb.add_action(
              'wpmdb_enable_table_migration_options',
              function() {
                e('.table-migrate-options').show();
              },
            ),
            e.wpmdb.add_action('wpmdb_select_all_tables', function() {
              e('#select-tables')
                .children('option')
                .prop('selected', !0),
                e('#select-tables').change();
            }),
            e.wpmdb.add_filter('wpmdb_base_old_url', function(e, t) {
              return a.remove_protocol(wpmdb_data.this_url);
            }),
            a.establish_remote_connection_from_saved_profile(),
            e('body').on('click', '.js-action-link', function(t) {
              t.preventDefault(), e(this).blur();
            }),
            e('.licence-input').keypress(function(t) {
              13 === t.which &&
                (t.preventDefault(), e('.register-licence').click());
            }),
            e('body').on('click', '.register-licence', function(t) {
              if ((t.preventDefault(), !a.doing_licence_registration_ajax)) {
                var n = e.trim(e('.licence-input').val()),
                  i = e('.licence-status');
                i.removeClass(
                  'notification-message error-notice success-notice',
                ),
                  '' !== n
                    ? (i.empty().removeClass('success'),
                      (a.doing_licence_registration_ajax = !0),
                      e('.button.register-licence').after(
                        '<img src="' +
                          a.spinner_url +
                          '" alt="" class="register-licence-ajax-spinner general-spinner" />',
                      ),
                      e.ajax({
                        url: ajaxurl,
                        type: 'POST',
                        dataType: 'JSON',
                        cache: !1,
                        data: {
                          action: 'wpmdb_activate_licence',
                          licence_key: n,
                          nonce: wpmdb_data.nonces.activate_licence,
                          context: 'licence',
                        },
                        error: function(t, n, o) {
                          (a.doing_licence_registration_ajax = !1),
                            e('.register-licence-ajax-spinner').remove(),
                            i.html(wpmdb_strings.register_license_problem);
                        },
                        success: function(t) {
                          if (
                            (e('.register-licence-ajax-spinner').remove(),
                            void 0 !== t.errors)
                          ) {
                            var o = '';
                            for (var r in t.errors) o += t.errors[r];
                            i.html(o),
                              void 0 !== t.masked_licence &&
                                (a.enable_pro_licence(t, n),
                                e('.migrate-tab .invalid-licence').hide());
                          } else
                            void 0 !== t.wpmdb_error && void 0 !== t.body
                              ? i.html(t.body)
                              : (1 === Number(t.is_first_activation) &&
                                  ((wpmdb_strings.welcome_text = wpmdb_strings.welcome_text.replace(
                                    '%1$s',
                                    'https://deliciousbrains.com/wp-migrate-db-pro/doc/quick-start-guide/?utm_campaign=support%2Bdocs&utm_source=MDB%2BPaid&utm_medium=insideplugin',
                                  )),
                                  (wpmdb_strings.welcome_text = wpmdb_strings.welcome_text.replace(
                                    '%2$s',
                                    'https://deliciousbrains.com/wp-migrate-db-pro/videos/?utm_campaign=support%2Bdocs&utm_source=MDB%2BPaid&utm_medium=insideplugin',
                                  )),
                                  i.after(
                                    '<div id="welcome-wrap"><img id="welcome-img" src="' +
                                      wpmdb_data.this_plugin_url +
                                      'asset/build/img/mdb-banner.svg" /><div class="welcome-text"><h3>' +
                                      wpmdb_strings.welcome_title +
                                      '</h3><p>' +
                                      wpmdb_strings.welcome_text +
                                      '</p></div></div>',
                                  )),
                                i
                                  .html(wpmdb_strings.license_registered)
                                  .delay(5e3)
                                  .fadeOut(1e3, function() {
                                    e(this)
                                      .css({
                                        visibility: 'hidden',
                                        display: 'block',
                                      })
                                      .slideUp();
                                  }),
                                i.addClass(
                                  'success notification-message success-notice',
                                ),
                                a.enable_pro_licence(t, n),
                                e('.invalid-licence').hide());
                          a.doing_licence_registration_ajax = !1;
                        },
                      }))
                    : i.html(
                        '<div class="notification-message error-notice">' +
                          wpmdb_strings.enter_license_key +
                          '</div>',
                      );
              }
            }),
            e('.clear-log').click(function() {
              e('.ajax-spinner, .ajax-success-msg').remove(),
                e(this).after(a.ajax_spinner),
                e('.debug-log-textarea').val(''),
                e.ajax({
                  url: ajaxurl,
                  type: 'POST',
                  dataType: 'text',
                  cache: !1,
                  data: {
                    action: 'wpmdb_clear_log',
                    nonce: wpmdb_data.nonces.clear_log,
                  },
                  error: function(t, n, i) {
                    e('.ajax-spinner').remove(),
                      alert(wpmdb_strings.clear_log_problem);
                  },
                  success: function(t) {
                    e('.ajax-spinner, .ajax-success-msg').remove(),
                      a.refresh_debug_log(),
                      e('.clear-log').after(
                        '<span class="ajax-success-msg">' +
                          wpmdb_strings.clear_error_log +
                          '</span>',
                      ),
                      e('.ajax-success-msg').fadeOut(2e3, function() {
                        e(this).remove();
                      });
                  },
                });
            }),
            e('.multiselect-select-all').click(function() {
              var t = e(this)
                .parents('.select-wrap')
                .children('.multiselect');
              e('option', t).prop('selected', 1),
                e(t)
                  .focus()
                  .trigger('change');
            }),
            e('.multiselect-deselect-all').click(function() {
              var t = e(this)
                .parents('.select-wrap')
                .children('.multiselect');
              e('option', t).removeAttr('selected'),
                e(t)
                  .focus()
                  .trigger('change');
            }),
            e('.multiselect-invert-selection').click(function() {
              var t = e(this)
                .parents('.select-wrap')
                .children('.multiselect');
              e('option', t).each(function() {
                e(this).attr('selected', !e(this).attr('selected'));
              }),
                e(t)
                  .focus()
                  .trigger('change');
            }),
            e('.option-group input[type=radio]').change(function() {
              var t = e(this).closest('.option-group');
              e('ul', t).hide();
              var n = e(this).closest('li');
              e('ul', n).show();
            }),
            e('.option-group').each(function() {
              e('.option-group input[type=radio]').each(function() {
                if (e(this).is(':checked')) {
                  var t = e(this).closest('li');
                  e('ul', t).show();
                }
              });
            }),
            e('.header-expand-collapse').click(function() {
              var t = null;
              void 0 !== e(this).data('next') && (t = e(this).data('next')),
                e('.expand-collapse-arrow', this).hasClass('collapsed')
                  ? (e('.expand-collapse-arrow', this).removeClass('collapsed'),
                    t
                      ? e(t).show()
                      : e(this)
                          .next()
                          .show())
                  : (e('.expand-collapse-arrow', this).addClass('collapsed'),
                    t
                      ? e(t).hide()
                      : e(this)
                          .next()
                          .hide());
            }),
            e('.checkbox-label input[type=checkbox]').change(function() {
              e(this).is(':checked')
                ? e(this)
                    .parent()
                    .next()
                    .show()
                : e(this)
                    .parent()
                    .next()
                    .hide();
            }),
            e('.select-post-types-wrap').on(
              'change',
              '#select-post-types',
              function() {
                t.functions.exclude_post_types_warning();
              },
            ),
            e('#exclude-post-types').is(':checked') &&
              e('#select-post-types').val() &&
              e('.exclude-post-types-warning').css({
                display: 'block',
                opacity: 1,
              }),
            e('#save-migration-profile').change(function() {
              t.functions.update_migrate_button_text(),
                e(this).is(':checked')
                  ? e('.save-settings-button').show()
                  : e('.save-settings-button').hide();
            }),
            e('#save-migration-profile').is(':checked') &&
              e('.save-settings-button').show(),
            e('.create-new-profile').focus(function() {
              e('#create_new').prop('checked', !0);
            }),
            e('.checkbox-label input[type=checkbox]').each(function() {
              e(this).is(':checked') &&
                e(this)
                  .parent()
                  .next()
                  .show();
            }),
            e('.migrate-db-button').click(function(n) {
              if (
                (e(this).blur(),
                n.preventDefault(),
                (t.migration_state_id = ''),
                !1 !==
                  e.wpmdb.apply_filters('wpmdb_migration_profile_ready', !0) &&
                  !0 !== t.functions.maybe_show_select_table_notice())
              ) {
                var i = !1,
                  o = !1;
                if (
                  (e('#new-url').length &&
                    !e('#new-url').val() &&
                    (e('#new-url-missing-warning').show(),
                    e('#new-url').focus(),
                    e('html,body').scrollTop(0),
                    (i = !0)),
                  e('#new-path').length &&
                    !e('#new-path').val() &&
                    (e('#new-path-missing-warning').show(),
                    !1 === i &&
                      (e('#new-path').focus(), e('html,body').scrollTop(0)),
                    (o = !0)),
                  !0 === i || !0 === o)
                ) {
                  if ('import' !== t.functions.wpmdb_migration_type()) return;
                  if (e('#import-find-replace').is(':checked')) return;
                }
                e('#save-migration-profile').is(':checked') &&
                  a.save_active_profile(),
                  (a.form_data = e(e('#migrate-form')[0].elements)
                    .not('.auth-credentials')
                    .serialize()),
                  (a.migration_intent = t.functions.wpmdb_migration_type()),
                  (a.stage = 'backup'),
                  'savefile' === a.migration_intent && (a.stage = 'migrate'),
                  !1 === e('#create-backup').is(':checked') &&
                    (-1 !==
                    e.inArray(a.migration_intent, ['savefile', 'push', 'pull'])
                      ? (a.stage = 'migrate')
                      : 'import' === a.migration_intent
                      ? (a.stage = 'upload')
                      : (a.stage = a.migration_intent)),
                  (t.current_migration = t.migration_progress_controller.newMigration(
                    {
                      localTableSizes: wpmdb_data.this_table_sizes,
                      localTableRows: wpmdb_data.this_table_rows,
                      remoteTableSizes:
                        void 0 !== t.common.connection_data
                          ? t.common.connection_data.table_sizes
                          : null,
                      remoteTableRows:
                        void 0 !== t.common.connection_data
                          ? t.common.connection_data.table_rows
                          : null,
                      migrationIntent: t.functions.wpmdb_migration_type(),
                    },
                  ));
                var r = e('input[name=backup_option]:checked').val(),
                  s = e('input[name=table_migrate_option]:checked').val(),
                  c = '',
                  l = '';
                'backup' === a.stage &&
                  ('migrate_only_with_prefix' === s &&
                    'backup_selected' === r &&
                    'import' !== a.migration_intent &&
                    (r = 'backup_only_with_prefix'),
                  'push' === a.migration_intent
                    ? ((l = 'remote'),
                      'backup_only_with_prefix' === r
                        ? (a.tables_to_migrate =
                            t.common.connection_data.prefixed_tables)
                        : 'backup_selected' === r
                        ? ((c = e('#select-tables').val()),
                          (c = e.wpmdb.apply_filters(
                            'wpmdb_backup_selected_tables',
                            c,
                          )),
                          (a.tables_to_migrate = a.get_intersect(
                            c,
                            t.common.connection_data.tables,
                          )))
                        : 'backup_manual_select' === r &&
                          (a.tables_to_migrate = e('#select-backup').val()))
                    : ((l = 'local'),
                      'backup_only_with_prefix' === r
                        ? (a.tables_to_migrate =
                            wpmdb_data.this_prefixed_tables)
                        : 'backup_selected' === r
                        ? ((c = e('#select-tables').val()),
                          (c = e.wpmdb.apply_filters(
                            'wpmdb_backup_selected_tables',
                            c,
                          )),
                          (a.tables_to_migrate = a.get_intersect(
                            c,
                            wpmdb_data.this_tables,
                          )))
                        : 'backup_manual_select' === r &&
                          (a.tables_to_migrate = e('#select-backup').val())),
                  t.current_migration.model.addStage(
                    'backup',
                    a.tables_to_migrate,
                    l,
                    { strings: { migrated: wpmdb_strings.backed_up } },
                  )),
                  (l = 'pull' === a.migration_intent ? 'remote' : 'local'),
                  'find_replace' === a.migration_intent
                    ? t.current_migration.model.addStage(
                        'find_replace',
                        t.functions.get_tables_to_migrate(null, null),
                        l,
                        {
                          strings: {
                            migrated: wpmdb_strings.searched,
                            stage_title:
                              wpmdb_strings.migrate_button_find_replace,
                          },
                        },
                      )
                    : -1 !==
                        e.inArray(a.migration_intent, [
                          'savefile',
                          'push',
                          'pull',
                        ]) &&
                      t.current_migration.model.addStage(
                        'migrate',
                        t.functions.get_tables_to_migrate(null, null),
                        l,
                      ),
                  e.wpmdb.do_action('wpmdb_add_migration_stages', {
                    data_type: l,
                    tables_to_migrate: t.functions.get_tables_to_migrate(
                      null,
                      null,
                    ),
                  });
                e('input[name=table_migrate_option]:checked').val();
                var p = e
                  .trim(e('.pull-push-connection-info').val())
                  .split('\n');
                (a.remote_site = p[0]), (a.secret_key = p[1]);
                var d = a.get_migration_status_label(
                  a.remote_site,
                  a.migration_intent,
                  'migrating',
                );
                (a.completed_msg = a.get_migration_status_label(
                  a.remote_site,
                  a.migration_intent,
                  'completed',
                )),
                  -1 !==
                    e.inArray(a.stage, ['find_replace', 'backup', 'migrate']) &&
                    (a.tables_to_migrate = t.current_migration.model.getStageItems(
                      a.stage,
                      'name',
                    )),
                  t.current_migration.model.setActiveStage(a.stage),
                  t.current_migration.setTitle(d),
                  t.current_migration.startTimer(),
                  (a.currently_migrating = !0),
                  t.current_migration.setStatus('active');
                var m = {
                  action: 'wpmdb_initiate_migration',
                  intent: a.migration_intent,
                  url: a.remote_site,
                  key: a.secret_key,
                  form_data: a.form_data,
                  stage: a.stage,
                  nonce: wpmdb_data.nonces.initiate_migration,
                };
                (m.site_details = { local: wpmdb_data.site_details }),
                  -1 !== e.inArray(a.migration_intent, ['push', 'pull']) &&
                    ((m.temp_prefix = t.common.connection_data.temp_prefix),
                    (m.site_details.remote =
                      t.common.connection_data.site_details)),
                  (m.site_details = JSON.stringify(m.site_details)),
                  (m = e.wpmdb.apply_filters(
                    'wpmdb_initiate_migration_request_data',
                    m,
                    m,
                  )),
                  (a.doing_ajax = !0),
                  e.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    dataType: 'json',
                    cache: !1,
                    data: m,
                    error: function(e, n, i) {
                      t.current_migration.setState(
                        wpmdb_strings.migration_failed,
                        a.get_ajax_errors(e.responseText, '(#112)', e),
                        'error',
                      ),
                        console.log(e),
                        console.log(n),
                        console.log(i),
                        (a.doing_ajax = !1),
                        (t.common.migration_error = !0),
                        t.functions.migration_complete_events();
                    },
                    success: function(n) {
                      if (
                        ((a.doing_ajax = !1),
                        void 0 !== n &&
                          void 0 !== n.wpmdb_error &&
                          1 === n.wpmdb_error)
                      )
                        return (
                          (t.common.migration_error = !0),
                          t.functions.migration_complete_events(),
                          void t.current_migration.setState(
                            wpmdb_strings.migration_failed,
                            n.body,
                            'error',
                          )
                        );
                      t.migration_state_id = n.migration_state_id;
                      (a.delay_between_requests = 0),
                        (('savefile' !== a.migration_intent &&
                          void 0 !== t.common.connection_data &&
                          void 0 !==
                            t.common.connection_data.delay_between_requests) ||
                          'import' === a.migration_intent) &&
                          ('import' === a.migration_intent
                            ? (a.delay_between_requests =
                                wpmdb_data.delay_between_requests)
                            : (a.delay_between_requests = Math.max(
                                parseInt(wpmdb_data.delay_between_requests),
                                parseInt(
                                  t.common.connection_data
                                    .delay_between_requests,
                                ),
                              ))),
                        -1 !==
                          e.inArray(a.migration_intent, [
                            'savefile',
                            'push',
                            'pull',
                            'find_replace',
                          ]) &&
                          ((t.common.next_step_in_migration = {
                            fn: t.functions.migrate_table_recursive,
                            args: ['-1', ''],
                          }),
                          t.functions.execute_next_step()),
                        e.wpmdb.do_action('wpmdb_migration_initiated', a.stage);
                    },
                  });
              }
            }),
            a.update_migrate_button_text(),
            e('body').on('click', '.close-progress-content-button', function(
              e,
            ) {
              a.hide_overlay(),
                t.current_migration.restoreTitleElem(),
                t.functions.maybe_reload_page();
            }),
            e('body').on('click', '#overlay', function(e) {
              !0 === a.migration_completed &&
                e.target === this &&
                (a.hide_overlay(),
                t.current_migration.restoreTitleElem(),
                t.functions.maybe_reload_page());
            }),
            e('.save-settings-button').click(function(t) {
              if (
                (t.preventDefault(),
                '' === e.trim(e('.create-new-profile').val()) &&
                  e('#create_new').is(':checked'))
              )
                return (
                  alert(wpmdb_strings.enter_name_for_profile),
                  void e('.create-new-profile').focus()
                );
              a.save_active_profile();
            }),
            a.move_connection_info_box(),
            e('.migrate-selection.option-group input[type=radio]').change(
              function() {
                a.move_connection_info_box(),
                  (t.migration_selection = t.functions.wpmdb_migration_type()),
                  a.connection_established && a.change_replace_values(),
                  t.functions.update_migrate_button_text();
              },
            ),
            ('pull' !== t.functions.wpmdb_migration_type() &&
              'push' !== t.functions.wpmdb_migration_type()) ||
              a.connection_established ||
              (e('.step-two').hide(), e('.connection-status').show()),
            e('.general-helper').click(function(t) {
              t.preventDefault();
              var n = e(this),
                i = e(this).next();
              e('.helper-message')
                .not(i)
                .hide();
              var o = n.position();
              if (i.hasClass('bottom')) {
                var a = 1;
                !0 === i.hasClass('compatibility-help')
                  ? (a = 6)
                  : e(this).is(':first-child') && (a = 3),
                  i.css({
                    left: o.left - i.width() / 2 - a + 'px',
                    top: o.top + n.height() + 9 + 'px',
                  });
              } else i.css({ left: o.left + n.width() + 9 + 'px', top: o.top + n.height() / 2 - 18 + 'px' });
              i.toggle(), t.stopPropagation();
            }),
            e('body').click(function() {
              e('.helper-message').hide();
            }),
            e('.helper-message').click(function(e) {
              e.stopPropagation();
            }),
            e('body').on('click', '.show-errors-toggle', function(t) {
              t.preventDefault(),
                e(this)
                  .next('.migration-php-errors')
                  .toggle();
            }),
            e('.nav-tab').click(function() {
              var t = e(this).attr('data-div-name');
              (t = t.replace('-tab', '')),
                (window.location.hash = t),
                a.switch_to_plugin_tab(t, !1);
            }),
            e('body').on('click', 'a[href^="#"]', function(t) {
              var n = e(t.target)
                .attr('href')
                .substr(1);
              if (n) {
                var i = e('.' + n);
                1 === i.length && (i.trigger('click'), t.preventDefault());
              }
            }),
            e('body').on('click', '.add-row', function() {
              var t = e(this).parents('tr');
              t.before(
                e('.original-repeatable-field')
                  .clone()
                  .removeClass('original-repeatable-field'),
              ),
                t
                  .prev()
                  .find('.old-replace-col input')
                  .focus();
            }),
            e('body').on('click', '.replace-remove-row', function() {
              e(this)
                .parents('tr')
                .remove(),
                2 >= e('.replace-row').length &&
                  e('.no-replaces-message').show();
              var t = e(this)
                .prev()
                .attr('id');
              ('new-url' !== t && 'new-path' !== t) ||
                e('#' + t + '-missing-warning').hide();
            }),
            e('body')
              .on('change', '#new-url', function() {
                e('#new-url-missing-warning').hide();
              })
              .on('change', '#new-path', function() {
                e('#new-path-missing-warning').hide();
              }),
            e('body').on('click', '.arrow-col', function() {
              if (!e(this).hasClass('disabled')) {
                var t = e(this)
                    .prev('td')
                    .find('input')
                    .val(),
                  n = e(this)
                    .next('td')
                    .find('input');
                n.val(t),
                  'new-url' === n.prop('id')
                    ? e('#new-url-missing-warning').hide()
                    : 'new-path' === n.prop('id') &&
                      e('#new-path-missing-warning').hide();
              }
            }),
            e('.add-replace').click(function() {
              e('.replace-fields').prepend(
                e('.original-repeatable-field')
                  .clone()
                  .removeClass('original-repeatable-field'),
              ),
                e('.no-replaces-message').hide();
            }),
            e('#find-and-replace-sort tbody').sortable({
              items: '> tr:not(.pin)',
              handle: 'td:first',
              start: function() {
                e('.sort-handle').css('cursor', '-webkit-grabbing'),
                  e('.sort-handle').css('cursor', '-moz-grabbing');
              },
              stop: function() {
                e('.sort-handle').css('cursor', '-webkit-grab'),
                  e('.sort-handle').css('cursor', '-moz-grab');
              },
            });
          var s = '';
          window.location.hash &&
            ((s = window.location.hash.substring(1)),
            a.switch_to_plugin_tab(s, !1)),
            '' !== a.get_query_var('install-plugin') &&
              ((s = 'addons'),
              (a.checked_licence = !0),
              a.switch_to_plugin_tab(s, !0)),
            e('.notice-link').click(function(n) {
              n.preventDefault(),
                t.functions.ajax_handle_dismissible_notice(
                  wpmdb_data.nonces.process_notice_link,
                  function(t) {
                    e(t)
                      .closest('.inline-message')
                      .hide();
                  },
                  e(this),
                );
            }),
            e('#connection_info').on('copy', function(t) {
              var n = e(this)
                .val()
                .split('\n');
              if (2 === n.length)
                try {
                  t.originalEvent.clipboardData.setData(
                    'text/plain',
                    n.join(' '),
                  ),
                    t.preventDefault();
                } catch (e) {}
            }),
            e('.reset-api-key').click(function() {
              confirm(wpmdb_strings.reset_api_key) &&
                !a.doing_reset_api_key_ajax &&
                ((a.doing_reset_api_key_ajax = !0),
                e('.reset-api-key').after(
                  '<img src="' +
                    a.spinner_url +
                    '" alt="" class="reset-api-key-ajax-spinner general-spinner" />',
                ),
                e.ajax({
                  url: ajaxurl,
                  type: 'POST',
                  dataType: 'text',
                  cache: !1,
                  data: {
                    action: 'wpmdb_reset_api_key',
                    nonce: wpmdb_data.nonces.reset_api_key,
                  },
                  error: function(t, n, i) {
                    alert(wpmdb_strings.reset_api_key_problem),
                      e('.reset-api-key-ajax-spinner').remove(),
                      (a.doing_reset_api_key_ajax = !1);
                  },
                  success: function(t) {
                    e('.reset-api-key-ajax-spinner').remove(),
                      (a.doing_reset_api_key_ajax = !1),
                      e('.connection-info').val(t),
                      (wpmdb_data.connection_info = e.trim(t).split('\n'));
                  },
                }));
            }),
            e('.copy-api-key').click(function() {
              var t = e(this),
                n = e('#connection_info'),
                i = n.val(),
                o = i.replace('\n', ' ');
              n.val(o), n.select();
              try {
                document.execCommand('copy'),
                  n.blur(),
                  t.css('color', 'transparent');
                var a = e('.copy-api-key-confirmation').show();
                setTimeout(function() {
                  a.fadeOut('fast'),
                    setTimeout(function() {
                      t.css('color', '');
                    }, 200);
                }, 1e3);
              } catch (e) {
                alert('please press Ctrl/Cmd+C to copy');
              }
              n.val(i);
            }),
            e('input[name=table_migrate_option]').change(function() {
              e('.select-tables-wrap').hide(),
                'migrate_select' === e(this).val() &&
                  e('.select-tables-wrap').show();
            }),
            e('.show-multiselect').each(function() {
              e(this).is(':checked') &&
                (e(this)
                  .parents('.option-section')
                  .children('.header-expand-collapse')
                  .children('.expand-collapse-arrow')
                  .removeClass('collapsed'),
                e(this)
                  .parents('.expandable-content')
                  .show(),
                e(this)
                  .parents('.expandable-content')
                  .children('.select-wrap')
                  .toggle());
            }),
            e('input[name=backup_option]').change(function() {
              e('.backup-tables-wrap').hide(),
                'backup_manual_select' === e(this).val() &&
                  e('.backup-tables-wrap').show();
            }),
            e('#backup-manual-select').is(':checked') &&
              e('.backup-tables-wrap').show(),
            e('.plugin-compatibility-save').click(function() {
              if (!a.doing_plugin_compatibility_ajax) {
                e(this).addClass('disabled');
                var t = e('#selected-plugins');
                e(t).attr('disabled', 'disabled'),
                  e('.plugin-compatibility-success-msg').remove(),
                  (a.doing_plugin_compatibility_ajax = !0),
                  e(this).after(
                    '<img src="' +
                      a.spinner_url +
                      '" alt="" class="plugin-compatibility-spinner general-spinner" />',
                  ),
                  e.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    dataType: 'text',
                    cache: !1,
                    data: {
                      action: 'wpmdb_whitelist_plugins',
                      whitelist_plugins: e(t).val(),
                      nonce: wpmdb_data.nonces.whitelist_plugins,
                    },
                    error: function(n, i, o) {
                      alert(
                        wpmdb_strings.blacklist_problem +
                          '\r\n\r\n' +
                          wpmdb_strings.status +
                          ' ' +
                          n.status +
                          ' ' +
                          n.statusText +
                          '\r\n\r\n' +
                          wpmdb_strings.response +
                          '\r\n' +
                          n.responseText,
                      ),
                        e(t).removeAttr('disabled'),
                        e('.plugin-compatibility-save').removeClass('disabled'),
                        (a.doing_plugin_compatibility_ajax = !1),
                        e('.plugin-compatibility-spinner').remove();
                    },
                    success: function(n) {
                      '' !== e.trim(n) && alert(n),
                        e(t).removeAttr('disabled'),
                        e('.plugin-compatibility-save').removeClass('disabled'),
                        (a.doing_plugin_compatibility_ajax = !1),
                        e('.plugin-compatibility-spinner').remove(),
                        e('.plugin-compatibility-save').after(
                          '<span class="plugin-compatibility-success-msg">' +
                            wpmdb_strings.saved +
                            '</span>',
                        ),
                        e('.plugin-compatibility-success-msg').fadeOut(2e3);
                    },
                  });
              }
            }),
            e('body').on('click', '.delete-profile', function() {
              var t = e(this)
                .next()
                .clone();
              if (
                (e('input', t).remove(),
                (t = e.trim(e(t).html())),
                confirm(wpmdb_strings.remove_profile.replace('{{profile}}', t)))
              ) {
                var n = e(this).parent();
                if (n.find('input:checked').length) {
                  var i = n.siblings().last();
                  if (
                    (i.find('input[type=radio]').prop('checked', 'checked'),
                    i.find('input[type=text]').focus(),
                    e('#migrate-form .crumbs .crumb:last').text('New Profile'),
                    'function' == typeof window.history.pushState)
                  ) {
                    var o =
                      window.location.href
                        .replace('#migrate', '')
                        .replace(/&wpmdb-profile=-?\d+/, '') +
                      '&wpmdb-profile=-1';
                    window.history.pushState(
                      { updated_profile_id: -1 },
                      null,
                      o,
                    );
                  }
                }
                n.fadeOut(500),
                  e.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    dataType: 'text',
                    cache: !1,
                    data: {
                      action: 'wpmdb_delete_migration_profile',
                      profile_id: e(this).attr('data-profile-id'),
                      nonce: wpmdb_data.nonces.delete_migration_profile,
                    },
                    error: function(e, t, n) {
                      alert(wpmdb_strings.remove_profile_problem);
                    },
                    success: function(e) {
                      '-1' === e &&
                        alert(wpmdb_strings.remove_profile_not_found);
                    },
                  });
              }
            }),
            e('.main-list-delete-profile-link').click(function() {
              var t = e(this)
                .prev()
                .html();
              confirm(wpmdb_strings.remove_profile.replace('{{profile}}', t)) &&
                (e(this)
                  .parent()
                  .fadeOut(500),
                e.ajax({
                  url: ajaxurl,
                  type: 'POST',
                  dataType: 'text',
                  cache: !1,
                  data: {
                    action: 'wpmdb_delete_migration_profile',
                    profile_id: e(this).attr('data-profile-id'),
                    nonce: wpmdb_data.nonces.delete_migration_profile,
                  },
                  error: function(e, t, n) {
                    alert(wpmdb_strings.remove_profile_problem);
                  },
                }));
            }),
            e('body').on('click', '.temp-disabled', function() {
              confirm(wpmdb_strings.change_connection_info) &&
                (e('.ssl-notice').hide(),
                e('.different-plugin-version-notice').hide(),
                e('.migrate-db-button').show(),
                e('.temp-disabled').removeAttr('readonly'),
                e('.temp-disabled').removeClass('temp-disabled'),
                e('.connect-button').show(),
                e('.step-two').hide(),
                e('.connection-status')
                  .show()
                  .html(wpmdb_strings.enter_connection_info),
                (a.connection_established = !1));
            }),
            e('.settings-tab input[type=checkbox]').change(function() {
              if ('plugin-compatibility' !== e(this).attr('id')) {
                var t = e(this).is(':checked'),
                  n = e(this).attr('id'),
                  i = e(this)
                    .closest('td')
                    .next('td')
                    .find('.setting-status');
                'allow_tracking' === e(this).attr('id') &&
                  (wpmdb_data.allow_tracking = t ? '1' : ''),
                  e('.ajax-success-msg').remove(),
                  i.after(a.ajax_spinner),
                  e.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    dataType: 'text',
                    cache: !1,
                    data: {
                      action: 'wpmdb_save_setting',
                      checked: t,
                      setting: n,
                      nonce: wpmdb_data.nonces.save_setting,
                    },
                    error: function(t, n, i) {
                      alert(wpmdb_strings.save_settings_problem),
                        e('.ajax-spinner').remove();
                    },
                    success: function(t) {
                      e('.ajax-spinner').remove(),
                        i.append(
                          '<span class="ajax-success-msg">' +
                            wpmdb_strings.saved +
                            '</span>',
                        ),
                        e('.ajax-success-msg').fadeOut(2e3, function() {
                          e(this).remove();
                        });
                    },
                  });
              }
            }),
            e('.migrate-form').submit(function(e) {
              e.preventDefault();
            }),
            e('.connect-button').click(function(n) {
              n.preventDefault(),
                e(this).blur(),
                t.functions.connection_box_changed();
            }),
            e('.pull-push-connection-info').bind('paste', function(e) {
              setTimeout(function() {
                t.functions.connection_box_changed();
              }, 0);
            }),
            e('body').on('click', '.try-again', function() {
              e('.pull-push-connection-info').removeClass('temp-disabled'),
                t.functions.connection_box_changed();
            }),
            e('body').on('click', '.try-http', function() {
              var n = e.trim(e('.pull-push-connection-info').val()).split('\n'),
                i = n[0].replace('https', 'http') + '\n' + n[1];
              e('.pull-push-connection-info').val(i),
                t.functions.connection_box_changed();
            }),
            e('.create-new-profile').change(function() {
              a.profile_name_edited = !0;
            }),
            e('body').on('click', '.temporarily-disable-ssl', function() {
              var t = '';
              window.location.hash && (t = window.location.hash.substring(1)),
                e(this).attr('href', e(this).attr('href') + '&hash=' + t);
            }),
            e('body').on('click', '.pause-resume', function(e) {
              a.set_pause_resume_button(e);
            }),
            e('body').on('click', '.cancel', function(e) {
              a.cancel_migration(e);
            }),
            e('.enter-licence').click(function() {
              e('.settings').click(), e('.licence-input').focus();
            }),
            e('body').on('click', '.copy-licence-to-remote-site', function() {
              e('.connection-status').html(wpmdb_strings.copying_license),
                e('.connection-status').removeClass(
                  'notification-message error-notice migration-error',
                ),
                e('.connection-status').append(a.ajax_spinner);
              var n = e.trim(e('.pull-push-connection-info').val()).split('\n');
              (a.doing_ajax = !0),
                a.disable_export_type_controls(),
                e.ajax({
                  url: ajaxurl,
                  type: 'POST',
                  dataType: 'json',
                  cache: !1,
                  data: {
                    action: 'wpmdb_copy_licence_to_remote_site',
                    url: n[0],
                    key: n[1],
                    nonce: wpmdb_data.nonces.copy_licence_to_remote_site,
                  },
                  error: function(t, n, i) {
                    e('.connection-status').html(
                      a.get_ajax_errors(t.responseText, '(#143)', t),
                    ),
                      e('.connection-status').addClass(
                        'notification-message error-notice migration-error',
                      ),
                      e('.ajax-spinner').remove(),
                      (a.doing_ajax = !1),
                      a.enable_export_type_controls();
                  },
                  success: function(n) {
                    if (
                      (e('.ajax-spinner').remove(),
                      (a.doing_ajax = !1),
                      a.enable_export_type_controls(),
                      void 0 !== n.wpmdb_error && 1 === n.wpmdb_error)
                    )
                      return (
                        e('.connection-status').html(n.body),
                        e('.connection-status').addClass(
                          'notification-message error-notice migration-error',
                        ),
                        void (
                          n.body.indexOf('401 Unauthorized') > -1 &&
                          e('.basic-access-auth-wrapper').show()
                        )
                      );
                    t.functions.connection_box_changed();
                  },
                });
            }),
            e('body').on('click', '.reactivate-licence', function(t) {
              (a.doing_ajax = !0),
                e('.invalid-licence')
                  .empty()
                  .html(wpmdb_strings.attempting_to_activate_licence),
                e('.invalid-licence').append(a.ajax_spinner),
                e.ajax({
                  url: ajaxurl,
                  type: 'POST',
                  dataType: 'json',
                  cache: !1,
                  data: {
                    action: 'wpmdb_reactivate_licence',
                    nonce: wpmdb_data.nonces.reactivate_licence,
                  },
                  error: function(t, n, i) {
                    e('.invalid-licence').html(
                      wpmdb_strings.activate_licence_problem,
                    ),
                      e('.invalid-licence').append(
                        '<br /><br />' +
                          wpmdb_strings.status +
                          ': ' +
                          t.status +
                          ' ' +
                          t.statusText +
                          '<br /><br />' +
                          wpmdb_strings.response +
                          '<br />' +
                          t.responseText,
                      ),
                      e('.ajax-spinner').remove(),
                      (a.doing_ajax = !1);
                  },
                  success: function(t) {
                    if (
                      (e('.ajax-spinner').remove(),
                      (a.doing_ajax = !1),
                      void 0 === t.wpmdb_error || 1 !== t.wpmdb_error)
                    ) {
                      if (
                        void 0 !== t.wpmdb_dbrains_api_down &&
                        1 === t.wpmdb_dbrains_api_down
                      )
                        return (
                          e('.invalid-licence').html(
                            wpmdb_strings.temporarily_activated_licence,
                          ),
                          void e('.invalid-licence').append(t.body)
                        );
                      e('.invalid-licence')
                        .empty()
                        .html(wpmdb_strings.licence_reactivated),
                        location.reload();
                    } else e('.invalid-licence').html(t.body);
                  },
                });
            }),
            e('input[name=table_migrate_option]').change(function() {
              a.maybe_show_mixed_cased_table_name_warning(),
                e.wpmdb.do_action('wpmdb_tables_to_migrate_changed');
            }),
            e('body').on('change', '#select-tables', function() {
              a.maybe_show_mixed_cased_table_name_warning(),
                e.wpmdb.do_action('wpmdb_tables_to_migrate_changed');
            }),
            e.wpmdb.add_filter('wpmdb_get_table_prefix', a.get_table_prefix),
            e.wpmdb.add_filter(
              'wpmdb_get_tables_to_migrate',
              t.functions.get_tables_to_migrate,
            ),
            e.wpmdb.add_action('wpmdb_lock_replace_url', a.lock_replace_url),
            e.wpmdb.add_action('wpmdb_pin_replace_url', a.pin_replace_url),
            e.wpmdb.add_action(
              'move_connection_info_box',
              t.functions.exclude_post_types_warning,
            ),
            e.wpmdb.add_filter(
              'wpmdb_before_migration_complete_hooks',
              function(t) {
                return (
                  (a.pause_before_finalize = !!e(
                    'input[name=pause_before_finalize]:checked',
                  ).length),
                  !0 === a.pause_before_finalize &&
                    'savefile' !== a.migration_intent &&
                    (a.set_pause_resume_button(null),
                    (window.is_auto_pause_before_finalize = !0)),
                  t
                );
              },
            ),
            e('.wpmdb-switch').on('click', function(t) {
              e(this).hasClass('disabled') ||
                a.set_checkbox(e(this).attr('id'));
            }),
            e('#beta_optin-wrap').on('click', function(t) {
              e(this)
                .find('span.on')
                .hasClass('checked') ||
                (wpmdb_data.is_beta_plugins_installed &&
                  confirm(wpmdb_strings.rollback_beta_to_stable) &&
                  (window.location = wpmdb_data.rollback_to_stable_url));
            });
        });
    })(jQuery, r);
  },
  function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var i = r(n(3)),
      o = r(n(12)),
      a = r(n(13));
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = window.jQuery,
      c = window.ajaxurl,
      l = window.wpmdb_strings,
      p = window.wpmdb_data,
      d = (function() {
        function e() {
          (0, o.default)(this, e),
            (this.show_ssl_notice = !1),
            (this.doing_save_profile = !1),
            (this.doing_ajax = !1),
            (this.profile_name_edited = !1),
            (this.migration_intent = null),
            (this.doing_licence_registration_ajax = !1),
            (this.migration_paused = !1),
            (this.last_replace_switch = wpmdb.functions.wpmdb_migration_type()),
            (this.connection_established = !1),
            (this.profile_name_edited = !1),
            (this.checked_licence = !1),
            (this.show_prefix_notice = !1),
            (this.show_ssl_notice = !1),
            (this.force_reconnect = !1),
            (this.migration_selection = ''),
            (this.show_version_notice = !1),
            (this.migration_completed = !1),
            (this.currently_migrating = !1),
            (this.dump_filename = ''),
            (this.dump_path = ''),
            (this.migration_intent = ''),
            (this.remote_site = null),
            (this.secret_key = null),
            (this.form_data = null),
            (this.stage = null),
            (this.elapsed_interval = null),
            (this.completed_msg = null),
            (this.tables_to_migrate = []),
            (this.migration_paused = !1),
            (this.previous_progress_title = ''),
            (this.previous_progress_text_primary = ''),
            (this.previous_progress_text_secondary = ''),
            (this.cancelling_text = ''),
            (this.paused_text = ''),
            (this.migration_cancelled = !1),
            (this.flag_skip_delay = !1),
            (this.delay_between_requests = 0),
            (this.fade_duration = 400),
            (this.pause_before_finalize = !1),
            (this.is_auto_pause_before_finalize = !1),
            (this.$connection_info_box = s('.connection-info-wrapper')),
            (this.$push_select = window.wpmdb.$push_select = s(
              '#select-tables',
            ).clone()),
            (this.$pull_select = window.wpmdb.$pull_select = s(
              '#select-tables',
            ).clone()),
            (this.$push_post_type_select = s('#select-post-types').clone()),
            (this.$pull_post_type_select = s('#select-post-types').clone()),
            (this.$push_select_backup = s('#select-backup').clone()),
            (this.$pull_select_backup = s('#select-backup').clone()),
            (this.spinner_url = window.spinner_url = wpmdb.functions.get_spinner_url()),
            (this.ajax_spinner = window.ajax_spinner =
              '<img src="' +
              this.spinner_url +
              '" alt="" class="ajax-spinner general-spinner" />');
        }
        return (
          (0, a.default)(e, [
            {
              key: 'pad',
              value: function(e, t, n) {
                return (
                  (n = n || '0'),
                  (e += '').length >= t
                    ? e
                    : new Array(t - e.length + 1).join(n) + e
                );
              },
            },
            {
              key: 'is_int',
              value: function(e) {
                return 'number' == typeof (e = parseInt(e)) && 0 == e % 1;
              },
            },
            {
              key: 'get_intersect',
              value: function(e, t) {
                var n,
                  i,
                  o = [],
                  a = {},
                  r = t.length;
                for (n = 0; n < r; n++) a[t[n]] = !0;
                for (r = e.length, n = 0; n < r; n++)
                  (i = e[n]) in a && o.push(i);
                return o;
              },
            },
            {
              key: 'pin_replace_url',
              value: function(e) {
                !0 === e &&
                  1 > s('.replace-row.pin').length &&
                  1 === s('#old-url').length &&
                  s('#old-url')
                    .parents('.replace-row')
                    .addClass('pin'),
                  !1 === e &&
                    0 < s('.replace-row.pin').length &&
                    s('.replace-row.pin').removeClass('pin');
              },
            },
            {
              key: 'get_ajax_errors',
              value: function(e, t, n) {
                return wpmdb.functions.wpmdbGetAjaxErrors(
                  l.connection_local_server_problem,
                  t,
                  e,
                  n,
                );
              },
            },
            {
              key: 'refresh_debug_log',
              value: function() {
                s.ajax({
                  url: c,
                  type: 'POST',
                  dataType: 'text',
                  cache: !1,
                  data: { action: 'wpmdb_get_log', nonce: p.nonces.get_log },
                  error: function(e, t, n) {
                    alert(l.update_log_problem);
                  },
                  success: function(e) {
                    s('.debug-log-textarea').val(e);
                  },
                });
              },
            },
            {
              key: 'get_query_var',
              value: function(e) {
                e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(
                  location.search,
                );
                return null === t
                  ? ''
                  : decodeURIComponent(t[1].replace(/\+/g, ' '));
              },
            },
            {
              key: 'maybe_show_ssl_warning',
              value: function(e, t, n) {
                var i = e.substr(0, e.indexOf(':')),
                  o = s('.ssl-notice');
                if (
                  (this.show_ssl_notice || o.hide(),
                  n !== i && -1 !== e.indexOf('https'))
                )
                  return (
                    o.show(),
                    (this.show_ssl_notice = !0),
                    (e = e.replace('https', 'http')),
                    void s('.pull-push-connection-info').val(e + '\n' + t)
                  );
                this.show_ssl_notice = !1;
              },
            },
            {
              key: 'validate_url',
              value: function(e) {
                return /^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                  e,
                );
              },
            },
            {
              key: 'refresh_table_selects',
              value: function() {
                void 0 !== p &&
                  void 0 !== p.this_tables &&
                  void 0 !== p.this_table_sizes_hr &&
                  (this.$push_select = this.create_table_select(
                    p.this_tables,
                    p.this_table_sizes_hr,
                    s(wpmdb.$push_select).val(),
                  )),
                  void 0 !== wpmdb.common.connection_data &&
                    void 0 !== wpmdb.common.connection_data.tables &&
                    void 0 !== wpmdb.common.connection_data.table_sizes_hr &&
                    (this.$pull_select = this.create_table_select(
                      wpmdb.common.connection_data.tables,
                      wpmdb.common.connection_data.table_sizes_hr,
                      s(wpmdb.$pull_select).val(),
                    ));
              },
            },
            {
              key: 'save_active_profile',
              value: function() {
                var e,
                  t = this;
                if (
                  (s('.save-settings-button').blur(),
                  !this.doing_save_profile &&
                    !0 !== this.maybe_show_select_table_notice())
                ) {
                  var n = !1;
                  s('#create_new').is(':checked') && (n = !0);
                  var i = s('.create-new-profile').val();
                  (this.doing_save_profile = !0),
                    (e = s(s('#migrate-form')[0].elements)
                      .not('.auth-credentials')
                      .serialize()),
                    s('.save-settings-button')
                      .attr('disabled', 'disabled')
                      .after(
                        '<img src="' +
                          this.spinner_url +
                          '" alt="" class="save-profile-ajax-spinner general-spinner" />',
                      ),
                    (this.doing_ajax = !0),
                    s.ajax({
                      url: c,
                      type: 'POST',
                      dataType: 'text',
                      cache: !1,
                      data: {
                        action: 'wpmdb_save_profile',
                        profile: e,
                        nonce: p.nonces.save_profile,
                      },
                      error: function(e, n, i) {
                        (t.doing_ajax = !1),
                          alert(l.save_profile_problem),
                          s('.save-settings-button').removeAttr('disabled'),
                          s('.save-profile-ajax-spinner').remove(),
                          s('.save-settings-button').after(
                            '<span class="ajax-success-msg">' +
                              l.saved +
                              '</span>',
                          ),
                          s('.ajax-success-msg').fadeOut(2e3, function() {
                            s(this).remove();
                          }),
                          (t.doing_save_profile = !1);
                      },
                      success: function(e) {
                        var o =
                          parseInt(
                            s(
                              '#migrate-form input[name=save_migration_profile_option]:checked',
                            ).val(),
                            10,
                          ) + 1;
                        if (
                          ((t.doing_ajax = !1),
                          s('.save-settings-button').removeAttr('disabled'),
                          s('.save-profile-ajax-spinner').remove(),
                          s('.save-settings-button').after(
                            '<span class="ajax-success-msg">' +
                              l.saved +
                              '</span>',
                          ),
                          s('.ajax-success-msg').fadeOut(2e3, function() {
                            s(this).remove();
                          }),
                          (t.doing_save_profile = !1),
                          s('.create-new-profile').val(''),
                          n)
                        ) {
                          var a = parseInt(e, 10),
                            r = a + 1,
                            c = s(
                              '<li><span class="delete-profile" data-profile-id="' +
                                r +
                                '"></span><label for="profile-' +
                                r +
                                '"><input id="profile-' +
                                r +
                                '" value="' +
                                a +
                                '" name="save_migration_profile_option" type="radio"></label></li>',
                            );
                          c
                            .find('label')
                            .append(document.createTextNode(' ' + i)),
                            (o = r),
                            s('#create_new')
                              .parents('li')
                              .before(c),
                            s('#profile-' + r).attr('checked', 'checked');
                        }
                        var d =
                            window.location.href
                              .replace('#migrate', '')
                              .replace(/&wpmdb-profile=-?\d+/, '') +
                            '&wpmdb-profile=' +
                            o,
                          m = s(
                            '#migrate-form input[name=save_migration_profile_option]:checked',
                          )
                            .parent()
                            .text()
                            .trim();
                        if ('function' == typeof window.history.pushState) {
                          if (s('#migrate-form .crumbs').length)
                            s('#migrate-form .crumbs .crumb:last').text(m);
                          else {
                            var u = s('<div class="crumbs" />')
                              .append(
                                '<a class="crumb" href="' +
                                  p.this_plugin_base +
                                  '"> Saved Profiles </a>',
                              )
                              .append('<span class="crumb">' + m + '</span>');
                            s('#migrate-form').prepend(u);
                          }
                          window.history.pushState(
                            { updated_profile_id: o },
                            null,
                            d,
                          );
                        }
                      },
                    });
                }
              },
            },
            {
              key: 'cancel_migration',
              value: function(e) {
                (this.migration_cancelled = !0),
                  (this.cancelling_text = l.cancelling_migration),
                  s('.migration-controls').css({ visibility: 'hidden' }),
                  'find_replace' === this.migration_intent &&
                    (this.cancelling_text = l.cancelling_find_replace),
                  wpmdb.current_migration.setState(
                    this.cancelling_text,
                    l.completing_current_request,
                    'cancelling',
                  ),
                  !0 === this.migration_paused &&
                    ((this.migration_paused = !1),
                    wpmdb.functions.execute_next_step());
              },
            },
            {
              key: 'set_checkbox',
              value: function(e) {
                var t = s('#' + e),
                  n = t.find('input[type=checkbox]');
                t.toggleClass('on')
                  .find('span')
                  .toggleClass('checked');
                var i = t.find('span.on').hasClass('checked');
                n.attr('checked', i).trigger('change');
              },
            },
            {
              key: 'move_connection_info_box',
              value: function() {
                var e,
                  t,
                  n,
                  i,
                  o,
                  a,
                  r = s('.connection-status'),
                  c = s('.directory-permission-notice'),
                  l = s('.compatibility-older-mysql'),
                  d = s('.mst-required'),
                  m = s('.keep-active-plugins'),
                  u = s('.step-two'),
                  _ = s('.backup-options'),
                  h = wpmdb.functions.wpmdb_migration_type();
                if (
                  (r.hide(),
                  c.hide(),
                  u.show(),
                  _.show(),
                  m.show(),
                  l.hide(),
                  d.hide(),
                  wpmdb.functions.wpmdb_toggle_migration_action_text(),
                  s('.migrate-tab')
                    .attr('class', 'migrate-tab content-tab')
                    .addClass(wpmdb.functions.wpmdb_migration_type()),
                  s.wpmdb.do_action('move_connection_info_box', {
                    migration_type: h,
                    last_migration_type: this.last_replace_switch,
                  }),
                  -1 !== s.inArray(h, ['push', 'pull']))
                ) {
                  var g = s('.pull-push-connection-info'),
                    f = s.trim(g.val()).split('\n'),
                    b = s('.' + h + '-list li');
                  if (
                    (b.append(this.$connection_info_box),
                    this.$connection_info_box.show(function() {
                      var e = s(this).find('.pull-push-connection-info');
                      e.val() || e.focus();
                    }),
                    h !== this.last_replace_switch && 2 === f.length)
                  )
                    return (
                      (wpmdb.force_reconnect = !0),
                      b.append(this.$connection_info_box),
                      g
                        .removeClass('temp-disabled')
                        .attr('readonly', 'readonly'),
                      s('.connect-button').hide(),
                      void wpmdb.functions.connection_box_changed()
                    );
                  this.connection_established
                    ? (r.hide(),
                      u.show(),
                      wpmdb.functions.wpmdb_toggle_migration_action_text(),
                      'pull' === h
                        ? ((t = wpmdb.common.connection_data.prefix),
                          (n = p.site_details.prefix),
                          (i = p.this_uploads_dir),
                          (o = p.this_upload_dir_long),
                          (a = p.write_permission))
                        : ((t = p.this_prefix),
                          (n = wpmdb.common.connection_data.prefix),
                          (i = wpmdb.common.connection_data.uploads_dir),
                          (o = wpmdb.common.connection_data.upload_dir_long),
                          (a = wpmdb.common.connection_data.write_permissions)),
                      s('.table_prefix').html(t),
                      s('.backup-table-prefix').html(n),
                      s('.uploads-dir').html(i),
                      this.maybe_show_backup_disabled_msg(o, a),
                      !1 === this.profile_name_edited &&
                        ((e = this.get_domain_name(
                          wpmdb.common.connection_data.url,
                        )),
                        s('.create-new-profile').val(e)))
                    : (r.show(), u.hide());
                } else if (-1 !== s.inArray(h, ['find_replace', 'savefile']))
                  if (
                    (r.hide(),
                    u.show(),
                    s('.table-prefix').html(p.this_prefix),
                    !1 === this.profile_name_edited &&
                      s('.create-new-profile').val(''),
                    m.hide(),
                    'savefile' === h)
                  )
                    _.hide(),
                      l.show(),
                      'false' === p.write_permission && (c.show(), u.hide());
                  else {
                    if ('true' === p.is_multisite) {
                      var w = s('.old-replace-col').eq(1);
                      w
                        .parent()
                        .removeClass('pin')
                        .find('.replace-remove-row')
                        .show(),
                        w.find('input').removeAttr('readonly');
                    }
                    this.maybe_show_backup_disabled_msg(
                      p.this_upload_dir_long,
                      p.write_permission,
                    );
                  }
                this.maybe_show_mixed_cased_table_name_warning();
              },
            },
            {
              key: 'maybe_show_backup_disabled_msg',
              value: function(e, t) {
                var n = s('#create-backup'),
                  i = s('#create-backup-label'),
                  o = s('.backup-option-disabled');
                n.removeAttr('disabled'),
                  i.removeClass('disabled'),
                  o.hide(),
                  'false' === t &&
                    (n.prop('checked', !1),
                    n.attr('disabled', 'disabled'),
                    i.addClass('disabled'),
                    o.show(),
                    s('.upload-directory-location').html(e));
              },
            },
            {
              key: 'change_replace_values',
              value: function() {
                var e = null,
                  t = null,
                  n = this;
                null !== wpmdb.common.previous_connection_data &&
                  'object' ===
                    (0, i.default)(wpmdb.common.previous_connection_data) &&
                  wpmdb.common.previous_connection_data.url !==
                    wpmdb.common.connection_data.url &&
                  ((e = this.remove_protocol(
                    wpmdb.common.previous_connection_data.url,
                  )),
                  (t = wpmdb.common.previous_connection_data.path)),
                  'push' === wpmdb.functions.wpmdb_migration_type() ||
                  'savefile' === wpmdb.functions.wpmdb_migration_type()
                    ? ('pull' === this.last_replace_switch
                        ? s('.replace-row').each(function() {
                            var e = s('.old-replace-col input', this).val();
                            s('.old-replace-col input', this).val(
                              s('.replace-right-col input', this).val(),
                            ),
                              s('.replace-right-col input', this).val(e);
                          })
                        : 'push' === this.last_replace_switch &&
                          'push' === wpmdb.functions.wpmdb_migration_type() &&
                          null !== e &&
                          null !== t &&
                          s('.replace-row').each(function() {
                            var i = s('.replace-right-col input', this).val();
                            i === t &&
                              s('.replace-right-col input', this).val(
                                wpmdb.common.connection_data.path,
                              ),
                              i === e &&
                                s('.replace-right-col input', this).val(
                                  n.remove_protocol(
                                    wpmdb.common.connection_data.url,
                                  ),
                                );
                          }),
                      s.wpmdb.do_action('wpmdb_update_push_table_select'),
                      s('#select-post-types').remove(),
                      s('.exclude-post-types-warning').after(
                        this.$push_post_type_select,
                      ),
                      wpmdb.functions.exclude_post_types_warning(),
                      s('#select-backup').remove(),
                      s('.backup-tables-wrap').prepend(
                        this.$push_select_backup,
                      ))
                    : 'pull' === wpmdb.functions.wpmdb_migration_type() &&
                      ('' === this.last_replace_switch ||
                      'push' === this.last_replace_switch ||
                      'savefile' === this.last_replace_switch
                        ? s('.replace-row').each(function() {
                            var e = s('.old-replace-col input', this).val();
                            s('.old-replace-col input', this).val(
                              s('.replace-right-col input', this).val(),
                            ),
                              s('.replace-right-col input', this).val(e);
                          })
                        : 'pull' === this.last_replace_switch &&
                          'pull' === wpmdb.functions.wpmdb_migration_type() &&
                          null !== e &&
                          null !== t &&
                          s('.replace-row').each(function() {
                            var i = s('.old-replace-col input', this).val();
                            i === t &&
                              s('.old-replace-col input', this).val(
                                wpmdb.common.connection_data.path,
                              ),
                              i === e &&
                                s('.old-replace-col input', this).val(
                                  n.remove_protocol(
                                    wpmdb.common.connection_data.url,
                                  ),
                                );
                          }),
                      s.wpmdb.do_action('wpmdb_update_pull_table_select'),
                      s('#select-post-types').remove(),
                      s('.exclude-post-types-warning').after(
                        this.$pull_post_type_select,
                      ),
                      wpmdb.functions.exclude_post_types_warning(),
                      s('#select-backup').remove(),
                      s('.backup-tables-wrap').prepend(
                        this.$pull_select_backup,
                      )),
                  (this.last_replace_switch = wpmdb.functions.wpmdb_migration_type());
              },
            },
            {
              key: 'switch_to_plugin_tab',
              value: function(e, t) {
                s('.nav-tab').removeClass('nav-tab-active'),
                  s('.nav-tab.' + e).addClass('nav-tab-active'),
                  s('.content-tab').hide(),
                  s('.' + e + '-tab').show(),
                  'settings' === e &&
                    !0 === this.should_check_licence() &&
                    (s('p.licence-status')
                      .append('Checking License... ')
                      .append(this.ajax_spinner),
                    this.check_licence()),
                  'help' === e &&
                    (this.refresh_debug_log(),
                    !0 === this.should_check_licence() &&
                      (s('.support-content p').append(this.ajax_spinner),
                      this.check_licence())),
                  'addons' === e &&
                    !0 !== t &&
                    !0 === this.should_check_licence() &&
                    (s('.addons-content p').append(this.ajax_spinner),
                    this.check_licence());
              },
            },
            {
              key: 'hide_overlay',
              value: function() {
                s('#overlay')
                  .removeClass('show')
                  .addClass('hide'),
                  s('#overlay > div')
                    .removeClass('show')
                    .addClass('hide'),
                  wpmdb.current_migration.$proVersion.find('iframe').remove(),
                  setTimeout(function() {
                    s('#overlay').remove();
                  }, 500),
                  (this.migration_completed = !1);
              },
            },
            {
              key: 'check_licence',
              value: function(e) {
                var t = !this.doing_licence_registration_ajax;
                this.checked_licence = !0;
                var n = this;
                s.ajax({
                  url: c,
                  type: 'POST',
                  dataType: 'json',
                  cache: !1,
                  data: {
                    action: 'wpmdb_check_licence',
                    licence: e,
                    context: 'all',
                    nonce: p.nonces.check_licence,
                  },
                  error: function(e, t, n) {
                    alert(l.license_check_problem);
                  },
                  success: function(e) {
                    var i,
                      o,
                      a,
                      r = s('.support-content'),
                      c = s('.addons-content'),
                      l = s('.licence-status:not(.notification-message)');
                    if (void 0 !== e.dbrains_api_down)
                      (o = e.dbrains_api_down + e.message),
                        (a = e.dbrains_api_down);
                    else if (void 0 !== e.errors) {
                      if (void 0 !== e.errors.subscription_expired)
                        (i = e.errors.subscription_expired.licence),
                          (o = e.errors.subscription_expired.support),
                          (a = e.errors.subscription_expired.addons);
                      else {
                        var p = '';
                        for (var d in e.errors) p += e.errors[d];
                        (o = p), (a = p);
                      }
                      void 0 !== e.addon_content &&
                        (a += '\n' + e.addon_content);
                    } else (o = e.message), (a = e.addon_content);
                    t &&
                      l.stop().fadeOut(n.fade_duration, function() {
                        void 0 === i &&
                          (s(this)
                            .css({ visibility: 'hidden', display: 'block' })
                            .slideUp(),
                          (i = '')),
                          s(this)
                            .empty()
                            .html(i)
                            .stop()
                            .fadeIn(n.fade_duration);
                      }),
                      r.stop().fadeOut(n.fade_duration, function() {
                        s(this)
                          .empty()
                          .html(o)
                          .stop()
                          .fadeIn(n.fade_duration);
                      }),
                      c.stop().fadeOut(n.fade_duration, function() {
                        s(this)
                          .empty()
                          .html(a)
                          .stop()
                          .fadeIn(n.fade_duration);
                      }),
                      s('#plugin-compatibility').is(':not(:checked)') &&
                        s('#compatibility-header').click();
                  },
                });
              },
            },
            {
              key: 'should_check_licence',
              value: function() {
                return (
                  !1 === this.checked_licence &&
                  '1' === p.has_licence &&
                  'true' === p.is_pro
                );
              },
            },
            {
              key: 'maybe_show_mixed_cased_table_name_warning',
              value: function() {
                if (
                  void 0 !== wpmdb.common.connection_data &&
                  !1 !== wpmdb.common.connection_data
                ) {
                  var e = wpmdb.functions.wpmdb_migration_type(),
                    t = wpmdb.functions.get_tables_to_migrate(null, null);
                  s('.mixed-case-table-name-notice').hide(),
                    null !== t &&
                      (t = t.join('')) !== t.toLowerCase() &&
                      ('1' ===
                        wpmdb.common.connection_data.lower_case_table_names ||
                        ('push' !== e && 'savefile' !== e)) &&
                      (('1' !== p.lower_case_table_names && 'pull' === e) ||
                        ('push' === e || 'savefile' === e
                          ? s('.mixed-case-table-name-notice.push').show()
                          : s('.mixed-case-table-name-notice.pull').show()));
                }
              },
            },
            {
              key: 'enable_pro_licence',
              value: function(e, t) {
                s('.licence-input, .register-licence').remove(),
                  s('.licence-not-entered').prepend(e.masked_licence),
                  s('.support-content')
                    .empty()
                    .html(
                      '<p>' +
                        l.fetching_license +
                        '<img src="' +
                        this.spinner_url +
                        '" alt="" class="ajax-spinner general-spinner" /></p>',
                    ),
                  this.check_licence(t),
                  s('.migrate-selection label').removeClass('disabled'),
                  s('.migrate-selection input').removeAttr('disabled');
              },
            },
            {
              key: 'get_domain_name',
              value: function(e) {
                return e
                  .replace(/\/\/(.*)@/, '//')
                  .replace('http://', '')
                  .replace('https://', '')
                  .replace('www.', '');
              },
            },
            {
              key: 'update_domain_placeholder',
              value: function(e, t, n) {
                var i = this.get_domain_name(t);
                return 'completed' === n
                  ? e.replace(
                      /\%s\s?/,
                      '<span class=domain-label>' + i + '</span>&nbsp;',
                    )
                  : e.replace(
                      /\%s(\S*)\s?/,
                      '<span class=domain-label>' + i + '$1</span>&nbsp;',
                    );
              },
            },
            {
              key: 'get_migration_status_label',
              value: function(e, t, n) {
                var i = '',
                  o = '';
                switch (t) {
                  case 'push':
                    (i = l.push_migration_label_migrating),
                      (o = l.push_migration_label_completed);
                    break;
                  case 'pull':
                    (i = l.pull_migration_label_migrating),
                      (o = l.pull_migration_label_completed);
                    break;
                  case 'find_replace':
                    (i = l.find_replace_label_migrating),
                      (o = l.find_replace_label_completed);
                    break;
                  case 'savefile':
                    (i = l.exporting_please_wait), (o = l.exporting_complete);
                }
                var a = i;
                return (
                  'completed' === n && (a = o),
                  ('push' !== t && 'pull' !== t) ||
                    (a = this.update_domain_placeholder(a, e, n)),
                  (a = s.wpmdb.apply_filters(
                    'wpmdb_get_migration_status_label',
                    a,
                    { intent: t, stage: n },
                  ))
                );
              },
            },
            {
              key: 'disable_export_type_controls',
              value: function() {
                s('.option-group').each(function(e) {
                  s('input', this).attr('disabled', 'disabled'),
                    s('label', this).css('cursor', 'default');
                });
              },
            },
            {
              key: 'enable_export_type_controls',
              value: function() {
                s('.option-group').each(function(e) {
                  s('input', this).removeAttr('disabled'),
                    s('label', this).css('cursor', 'pointer');
                });
              },
            },
            {
              key: 'set_slider_value',
              value: function(e, t, n, i) {
                var o = t;
                void 0 !== i && (o = i),
                  s('.slider', e).slider('value', parseInt(t)),
                  s('.amount', e).html(
                    wpmdb.functions.wpmdb_add_commas(o) + ' ' + n,
                  );
              },
            },
            {
              key: 'set_pause_resume_button',
              value: function(e, t) {
                !0 === this.migration_paused
                  ? ((this.migration_paused = !1),
                    (this.doing_ajax = !0),
                    wpmdb.current_migration.setState(
                      this.previous_progress_title,
                      this.previous_progress_text_primary,
                      'active',
                    ),
                    s('.pause-resume').html(l.pause),
                    wpmdb.current_migration.resumeTimer(),
                    wpmdb.functions.execute_next_step(t))
                  : ((this.migration_paused = !0),
                    (this.doing_ajax = !1),
                    (this.paused_text = l.migration_paused),
                    (this.previous_progress_title = s(
                      '.progress-title',
                    ).html()),
                    (this.previous_progress_text_primary = s(
                      '.progress-text',
                      '.progress-wrapper-primary',
                    ).html()),
                    (this.previous_progress_text_secondary = s(
                      '.progress-text',
                      '.progress-wrapper-secondary ',
                    ).html()),
                    'find_replace' === this.migration_intent &&
                      (this.paused_text = l.find_replace_paused),
                    wpmdb.current_migration.setState(
                      this.paused_text,
                      l.completing_current_request,
                      null,
                    ),
                    s('body').off('click', '.pause-resume'),
                    s('body').off('click', '.cancel'));
              },
            },
            {
              key: 'filter_temp_tables',
              value: function(e, t) {
                var n = p.this_temp_prefix;
                return (
                  'pull' === wpmdb.functions.wpmdb_migration_type() &&
                    void 0 !== wpmdb.common.connection_data &&
                    void 0 !== wpmdb.common.connection_data.temp_prefix &&
                    (n = wpmdb.common.connection_data.temp_prefix),
                  n === t.substring(0, n.length) || e
                );
              },
            },
            {
              key: 'get_table_prefix',
              value: function(e, t) {
                return s('.table-select-wrap .table-prefix').text();
              },
            },
            {
              key: 'lock_replace_url',
              value: function(e) {
                !0 === e
                  ? (s(
                      '.replace-row.pin .replace-right-col input[type="text"]',
                    ).attr('readonly', 'readonly'),
                    s('.replace-row.pin .arrow-col').addClass('disabled'))
                  : (s(
                      '.replace-row.pin .replace-right-col input[type="text"]',
                    ).removeAttr('readonly'),
                    s('.replace-row.pin .arrow-col').removeClass('disabled'));
              },
            },
            {
              key: 'set_connection_data',
              value: function(e) {
                (window.wpmdb.common.previous_connection_data =
                  wpmdb.common.connection_data),
                  (window.wpmdb.common.connection_data = e),
                  s.wpmdb.do_action('wpmdb_connection_data_updated', e);
              },
            },
            {
              key: 'get_max_request_display_info',
              value: function(e) {
                var t = { unit: 'MB' };
                return (t.amount = (e / 1024).toFixed(2)), t;
              },
            },
            {
              key: 'establish_remote_connection_from_saved_profile',
              value: function() {
                var e = wpmdb.functions.wpmdb_migration_type(),
                  t = s.trim(s('.pull-push-connection-info').val()).split('\n');
                if (
                  'undefined' != typeof wpmdb_default_profile &&
                  !0 !== wpmdb_default_profile &&
                  'savefile' !== e &&
                  'find_replace' !== e &&
                  'import' !== e &&
                  !this.doing_ajax &&
                  p.is_pro
                ) {
                  (this.doing_ajax = !0),
                    this.disable_export_type_controls(),
                    s('.connection-status').html(
                      l.establishing_remote_connection,
                    ),
                    s('.connection-status').removeClass(
                      'notification-message error-notice migration-error',
                    ),
                    s('.connection-status').append(this.ajax_spinner);
                  var n = wpmdb.functions.wpmdb_migration_type(),
                    i = this;
                  s.ajax({
                    url: c,
                    type: 'POST',
                    dataType: 'json',
                    cache: !1,
                    data: {
                      action: 'wpmdb_verify_connection_to_remote_site',
                      url: t[0],
                      key: t[1],
                      intent: n,
                      nonce: p.nonces.verify_connection_to_remote_site,
                      convert_post_type_selection: wpmdb_convert_post_type_selection,
                      profile: p.profile,
                    },
                    error: function(e, t, n) {
                      s('.connection-status').html(
                        i.get_ajax_errors(e.responseText, '(#102)', e),
                      ),
                        s('.connection-status').addClass(
                          'notification-message error-notice migration-error',
                        ),
                        s('.ajax-spinner').remove(),
                        (i.doing_ajax = !1),
                        i.enable_export_type_controls();
                    },
                    success: function(e) {
                      if (
                        (s('.ajax-spinner').remove(),
                        (i.doing_ajax = !1),
                        i.enable_export_type_controls(),
                        void 0 !== e.wpmdb_error && 1 === e.wpmdb_error)
                      )
                        return (
                          s('.connection-status').html(e.body),
                          s('.connection-status').addClass(
                            'notification-message error-notice migration-error',
                          ),
                          void (
                            e.body.indexOf('401 Unauthorized') > -1 &&
                            s('.basic-access-auth-wrapper').show()
                          )
                        );
                      if (!0 !== wpmdb.functions.maybe_show_mst_warning(e)) {
                        i.maybe_show_ssl_warning(t[0], t[1], e.scheme),
                          wpmdb.functions.maybe_show_prefix_notice(e.prefix),
                          s('.pull-push-connection-info').addClass(
                            'temp-disabled',
                          ),
                          s('.pull-push-connection-info').attr(
                            'readonly',
                            'readonly',
                          ),
                          s('.connect-button').hide(),
                          s('.connection-status').hide(),
                          s('.step-two').show(),
                          (i.connection_established = !0),
                          i.set_connection_data(e),
                          i.move_connection_info_box(),
                          i.maybe_show_mixed_cased_table_name_warning();
                        var n = '';
                        !1 === wpmdb_default_profile &&
                          'undefined' != typeof wpmdb_loaded_tables &&
                          (n = wpmdb_loaded_tables),
                          (i.$pull_select = wpmdb.functions.create_table_select(
                            wpmdb.common.connection_data.tables,
                            wpmdb.common.connection_data.table_sizes_hr,
                            n,
                          ));
                        var o = '';
                        !1 === wpmdb_default_profile &&
                          'undefined' != typeof wpmdb_loaded_post_types &&
                          (void 0 !== e.select_post_types
                            ? (s('#exclude-post-types').attr(
                                'checked',
                                'checked',
                              ),
                              s('.post-type-select-wrap').show(),
                              (o = e.select_post_types))
                            : (o = wpmdb_loaded_post_types));
                        var a = document.createElement('select');
                        s(a).attr({
                          multiple: 'multiple',
                          name: 'select_post_types[]',
                          id: 'select-post-types',
                          class: 'multiselect',
                        }),
                          s.each(
                            wpmdb.common.connection_data.post_types,
                            function(e, t) {
                              var n = s.inArray(t, o);
                              (n =
                                -1 !== n ||
                                (!0 === wpmdb_convert_exclude_revisions &&
                                  'revision' !== t)
                                  ? ' selected="selected" '
                                  : ' '),
                                s(a).append(
                                  '<option' +
                                    n +
                                    'value="' +
                                    t +
                                    '">' +
                                    t +
                                    '</option>',
                                );
                            },
                          ),
                          (i.$pull_post_type_select = a);
                        var r = '';
                        !1 === wpmdb_default_profile &&
                          'undefined' != typeof wpmdb_loaded_tables_backup &&
                          (r = wpmdb_loaded_tables_backup);
                        var c = document.createElement('select');
                        s(c).attr({
                          multiple: 'multiple',
                          name: 'select_backup[]',
                          id: 'select-backup',
                          class: 'multiselect',
                        }),
                          s.each(wpmdb.common.connection_data.tables, function(
                            e,
                            t,
                          ) {
                            var n = s.inArray(t, r);
                            (n = -1 !== n ? ' selected="selected" ' : ' '),
                              s(c).append(
                                '<option' +
                                  n +
                                  'value="' +
                                  t +
                                  '">' +
                                  t +
                                  ' (' +
                                  wpmdb.common.connection_data.table_sizes_hr[
                                    t
                                  ] +
                                  ')</option>',
                              );
                          }),
                          (i.$push_select_backup = c),
                          'pull' === wpmdb.functions.wpmdb_migration_type()
                            ? (s.wpmdb.do_action(
                                'wpmdb_update_pull_table_select',
                              ),
                              s('#select-post-types').remove(),
                              s('.exclude-post-types-warning').after(
                                i.$pull_post_type_select,
                              ),
                              s('#select-backup').remove(),
                              s('.backup-tables-wrap').prepend(
                                i.$pull_select_backup,
                              ),
                              s('.table-prefix').html(e.prefix),
                              s('.uploads-dir').html(p.this_uploads_dir))
                            : (s('#select-backup').remove(),
                              s('.backup-tables-wrap').prepend(
                                i.$push_select_backup,
                              )),
                          s.wpmdb.do_action(
                            'verify_connection_to_remote_site',
                            wpmdb.common.connection_data,
                          );
                      } else s('.connection-status').hide();
                    },
                  });
                }
              },
            },
            {
              key: 'migrate_table_recursive',
              value: function(e, t, n) {
                var i = this,
                  o = n || 0;
                if (o >= this.tables_to_migrate.length)
                  if (
                    'upload' === this.stage &&
                    wpmdb.current_migration.model.getStageItems('find_replace')
                      .length
                  )
                    (this.stage = 'find_replace'),
                      (this.tables_to_migrate = wpmdb.current_migration.model.getStageItems(
                        'find_replace',
                        'name',
                      )),
                      (this.tables_to_migrate = this.tables_to_migrate.map(
                        function(e) {
                          return '_mig_' + e;
                        },
                      )),
                      (o = 0);
                  else {
                    if ('backup' !== this.stage)
                      return (
                        s('.progress-label').removeClass('label-visible'),
                        (wpmdb.common.hooks = s.wpmdb.apply_filters(
                          'wpmdb_before_migration_complete_hooks',
                          wpmdb.common.hooks,
                        )),
                        wpmdb.common.hooks.push(
                          wpmdb.functions.migration_complete,
                        ),
                        wpmdb.common.hooks.push(wpmdb.functions.wpmdb_flush),
                        (wpmdb.common.hooks = s.wpmdb.apply_filters(
                          'wpmdb_after_migration_complete_hooks',
                          wpmdb.common.hooks,
                        )),
                        wpmdb.common.hooks.push(
                          wpmdb.functions.migration_complete_events,
                        ),
                        (wpmdb.common.next_step_in_migration = {
                          fn: wpmdb.functions.wpmdb_call_next_hook,
                        }),
                        void wpmdb.functions.execute_next_step()
                      );
                    if (
                      (-1 !== s.inArray(this.migration_intent, ['push', 'pull'])
                        ? (this.stage = 'migrate')
                        : 'import' === this.migration_intent
                        ? (this.stage = 'upload')
                        : (this.stage = this.migration_intent),
                      wpmdb.current_migration.model.setActiveStage(this.stage),
                      'find_replace' !== this.stage && 'migrate' !== this.stage)
                    )
                      return void wpmdb.functions.wpmdb_call_next_hook();
                    (o = 0),
                      (this.tables_to_migrate = wpmdb.functions.get_tables_to_migrate(
                        null,
                        null,
                      ));
                  }
                var a = 0;
                o === this.tables_to_migrate.length - 1 && (a = 1);
                var r = 0;
                -1 !== s.inArray(this.migration_intent, ['push', 'pull']) &&
                  1 === parseInt(wpmdb.common.connection_data.gzip) &&
                  (r = 1);
                var d = {
                  action: 'wpmdb_migrate_table',
                  migration_state_id: wpmdb.migration_state_id,
                  table: this.tables_to_migrate[o],
                  stage: this.stage,
                  current_row: e,
                  last_table: a,
                  primary_keys: t,
                  gzip: r,
                  nonce: p.nonces.migrate_table,
                };
                -1 !== s.inArray(this.migration_intent, ['push', 'pull']) &&
                  ((d.bottleneck = wpmdb.common.connection_data.bottleneck),
                  (d.prefix = wpmdb.common.connection_data.prefix)),
                  wpmdb.common.connection_data &&
                    wpmdb.common.connection_data.path_current_site &&
                    wpmdb.common.connection_data.domain &&
                    ((d.path_current_site =
                      wpmdb.common.connection_data.path_current_site),
                    (d.domain_current_site =
                      wpmdb.common.connection_data.domain)),
                  (this.doing_ajax = !0),
                  s.ajax({
                    url: c,
                    type: 'POST',
                    dataType: 'text',
                    cache: !1,
                    timeout: 0,
                    data: d,
                    error: function(e, t, n) {
                      var a =
                        l.table_process_problem +
                        ' ' +
                        i.tables_to_migrate[o] +
                        '<br /><br />' +
                        l.status +
                        ': ' +
                        e.status +
                        ' ' +
                        e.statusText +
                        '<br /><br />' +
                        l.response +
                        ':<br />' +
                        e.responseText;
                      wpmdb.current_migration.setState(
                        l.migration_failed,
                        a,
                        'error',
                      ),
                        (i.doing_ajax = !1),
                        console.log(e),
                        console.log(t),
                        console.log(n),
                        (wpmdb.common.migration_error = !0),
                        wpmdb.functions.migration_complete_events();
                    },
                    success: function(e) {
                      (i.doing_ajax = !1), (e = s.trim(e));
                      var t = wpmdb.functions.wpmdb_parse_json(e),
                        n = '';
                      if (!1 === t || null === t)
                        return (
                          (n =
                            '' === e || null === e
                              ? l.table_process_problem_empty_response +
                                ' ' +
                                i.tables_to_migrate[o]
                              : i.get_ajax_errors(e, null, null)),
                          wpmdb.current_migration.setState(
                            l.migration_failed,
                            n,
                            'error',
                          ),
                          (wpmdb.common.migration_error = !0),
                          void wpmdb.functions.migration_complete_events()
                        );
                      if (void 0 !== t.wpmdb_error && 1 === t.wpmdb_error)
                        return (
                          wpmdb.current_migration.setState(
                            l.migration_failed,
                            t.body,
                            'error',
                          ),
                          (wpmdb.common.migration_error = !0),
                          void wpmdb.functions.migration_complete_events()
                        );
                      var r = i.tables_to_migrate[o];
                      'import' === i.migration_intent &&
                        'find_replace' === i.stage &&
                        (r = r.replace(p.this_temp_prefix, '')),
                        wpmdb.current_migration.setText(),
                        wpmdb.current_migration.model
                          .getStageModel(i.stage)
                          .setItemRowsTransferred(r, t.current_row),
                        1 === a &&
                          'savefile' === i.migration_intent &&
                          (void 0 !== t.dump_filename &&
                            (i.dump_filename = t.dump_filename),
                          void 0 !== t.dump_path &&
                            (i.dump_path = t.dump_path)),
                        -1 === parseInt(t.current_row) &&
                          (o++, (t.current_row = ''), (t.primary_keys = '')),
                        (wpmdb.common.next_step_in_migration = {
                          fn: wpmdb.functions.migrate_table_recursive,
                          args: [t.current_row, t.primary_keys, o],
                        }),
                        wpmdb.functions.execute_next_step();
                    },
                  });
              },
            },
            {
              key: 'migration_complete_events',
              value: function() {
                if (!1 === wpmdb.common.migration_error)
                  if ('' === wpmdb.common.non_fatal_errors)
                    if (
                      ('savefile' !== this.migration_intent &&
                        !0 === s('#save_computer').is(':checked') &&
                        wpmdb.current_migration.setText(),
                      (this.completed_msg =
                        this.completed_msg +
                        '&nbsp;<div class="dashicons dashicons-yes"></div>'),
                      !0 === this.migration_cancelled)
                    ) {
                      var e = l.migration_cancelled_success;
                      'find_replace' === this.migration_intent &&
                        (e = l.find_replace_cancelled_success),
                        wpmdb.current_migration.setState(
                          this.completed_msg,
                          e,
                          'cancelled',
                        );
                    } else
                      wpmdb.current_migration.setState(
                        this.completed_msg,
                        '',
                        'complete',
                      );
                  else
                    wpmdb.current_migration.setState(
                      l.completed_with_some_errors,
                      wpmdb.common.non_fatal_errors,
                      'error',
                    );
                s('.migration-controls').addClass('hidden'),
                  (wpmdb.common.hooks = []),
                  (wpmdb.common.call_stack = []),
                  (wpmdb.common.migration_error = !1),
                  (this.currently_migrating = !1),
                  (this.migration_completed = !0),
                  (this.migration_paused = !1),
                  (this.migration_cancelled = !1),
                  (this.doing_ajax = !1),
                  (wpmdb.common.non_fatal_errors = ''),
                  (this.tables_to_migrate = []),
                  s('.progress-label').remove(),
                  s('.migration-progress-ajax-spinner').remove(),
                  s('.close-progress-content').show(),
                  s('#overlay').css('cursor', 'pointer'),
                  wpmdb.current_migration.model.setMigrationComplete();
              },
            },
            {
              key: 'migration_complete',
              value: function() {
                var e = this;
                if (
                  (s('.migration-controls').addClass('hidden'),
                  'savefile' === this.migration_intent)
                ) {
                  this.currently_migrating = !1;
                  var t = l.migration_complete;
                  if (s('#save_computer').is(':checked')) {
                    var n =
                      p.this_download_url +
                      encodeURIComponent(this.dump_filename);
                    s('#gzip_file').is(':checked') && (n += '&gzip=1'),
                      (window.location = n);
                  } else t = l.completed_dump_located_at + ' ' + this.dump_path;
                  !1 === wpmdb.common.migration_error &&
                    (wpmdb.functions.migration_complete_events(),
                    wpmdb.current_migration.setState(
                      this.completed_msg,
                      t,
                      'complete',
                    ));
                } else {
                  wpmdb.current_migration.setState(
                    null,
                    l.finalizing_migration,
                    'finalizing',
                  );
                  var i = {
                    action: 'wpmdb_finalize_migration',
                    migration_state_id: wpmdb.migration_state_id,
                    tables: this.tables_to_migrate.join(','),
                    nonce: p.nonces.finalize_migration,
                  };
                  -1 !== s.inArray(this.migration_intent, ['push', 'pull']) &&
                    (i.prefix = wpmdb.common.connection_data.prefix),
                    (this.doing_ajax = !0),
                    s.ajax({
                      url: c,
                      type: 'POST',
                      dataType: 'text',
                      cache: !1,
                      data: i,
                      error: function(t, n, i) {
                        (e.doing_ajax = !1),
                          wpmdb.current_migration.setState(
                            l.migration_failed,
                            l.finalize_tables_problem,
                            'error',
                          ),
                          alert(t + ' : ' + n + ' : ' + i),
                          (wpmdb.common.migration_error = !0),
                          wpmdb.functions.migration_complete_events();
                      },
                      success: function(t) {
                        if (((e.doing_ajax = !1), '1' !== s.trim(t)))
                          return (
                            wpmdb.current_migration.setState(
                              l.migration_failed,
                              t,
                              'error',
                            ),
                            (wpmdb.common.migration_error = !0),
                            void wpmdb.functions.migration_complete_events()
                          );
                        (wpmdb.common.next_step_in_migration = {
                          fn: wpmdb.functions.wpmdb_call_next_hook,
                        }),
                          wpmdb.functions.execute_next_step();
                      },
                    });
                }
              },
            },
            {
              key: 'wpmdb_flush',
              value: function() {
                var e = this;
                'savefile' !== this.migration_intent &&
                  (wpmdb.current_migration.setText(l.flushing),
                  (this.doing_ajax = !0),
                  s.ajax({
                    url: c,
                    type: 'POST',
                    dataType: 'text',
                    cache: !1,
                    data: {
                      action: 'wpmdb_flush',
                      migration_state_id: wpmdb.migration_state_id,
                      nonce: p.nonces.flush,
                    },
                    error: function(t, n, i) {
                      (e.doing_ajax = !1),
                        wpmdb.current_migration.setState(
                          l.migration_failed,
                          l.flush_problem,
                          'error',
                        ),
                        alert(t + ' : ' + n + ' : ' + i),
                        (wpmdb.common.migration_error = !0),
                        wpmdb.functions.migration_complete_events();
                    },
                    success: function(t) {
                      if (((e.doing_ajax = !1), '1' !== s.trim(t)))
                        return (
                          wpmdb.current_migration.setState(
                            l.migration_failed,
                            t,
                            'error',
                          ),
                          (wpmdb.common.migration_error = !0),
                          void wpmdb.functions.migration_complete_events()
                        );
                      (wpmdb.common.next_step_in_migration = {
                        fn: wpmdb.functions.wpmdb_call_next_hook,
                      }),
                        wpmdb.functions.execute_next_step();
                    },
                  }));
              },
            },
            {
              key: 'execute_next_step',
              value: function() {
                var e = this;
                if (
                  0 < this.delay_between_requests &&
                  !1 === this.flag_skip_delay
                )
                  setTimeout(function() {
                    (this.flag_skip_delay = !0),
                      wpmdb.functions.execute_next_step();
                  }, this.delay_between_requests);
                else if (
                  ((this.flag_skip_delay = !1), !0 === this.migration_paused)
                ) {
                  s('.migration-progress-ajax-spinner').hide(),
                    wpmdb.current_migration.pauseTimer();
                  var t = '';
                  !0 === this.is_auto_pause_before_finalize
                    ? ((t = l.paused_before_finalize),
                      (this.is_auto_pause_before_finalize = !1),
                      'find_replace' ===
                        wpmdb.functions.wpmdb_migration_type() &&
                        (t = l.find_replace_paused_before_finalize))
                    : (t = l.paused),
                    wpmdb.current_migration.setState(null, t, 'paused'),
                    s('body').on('click', '.pause-resume', function(e) {
                      this.set_pause_resume_button(e);
                    }),
                    s('body').on('click', '.cancel', function(e) {
                      this.cancel_migration(e);
                    }),
                    s('.pause-resume').html(l.resume);
                } else if (!0 === this.migration_cancelled) {
                  var n;
                  (this.migration_intent = wpmdb.functions.wpmdb_migration_type()),
                    'savefile' === this.migration_intent
                      ? (n = l.removing_local_sql)
                      : 'pull' === this.migration_intent
                      ? (n =
                          'backup' === this.stage
                            ? l.removing_local_backup
                            : l.removing_local_temp_tables)
                      : 'push' === this.migration_intent &&
                        (n =
                          'backup' === this.stage
                            ? l.removing_remote_sql
                            : l.removing_remote_temp_tables),
                    wpmdb.current_migration.setText(n);
                  var i = {
                    action: 'wpmdb_cancel_migration',
                    migration_state_id: wpmdb.migration_state_id,
                    nonce: p.nonces.cancel_migration,
                  };
                  (this.doing_ajax = !0),
                    s.ajax({
                      url: c,
                      type: 'POST',
                      dataType: 'text',
                      cache: !1,
                      data: i,
                      error: function(t, n, i) {
                        wpmdb.current_migration.setState(
                          l.migration_cancellation_failed,
                          l.manually_remove_temp_files +
                            '<br /><br />' +
                            l.status +
                            ': ' +
                            t.status +
                            ' ' +
                            t.statusText +
                            '<br /><br />' +
                            l.response +
                            ':<br />' +
                            t.responseText,
                          'error',
                        ),
                          console.log(t),
                          console.log(n),
                          console.log(i),
                          (e.doing_ajax = !1),
                          (wpmdb.common.migration_error = !0),
                          wpmdb.functions.migration_complete_events();
                      },
                      success: function(t) {
                        if (
                          ((e.doing_ajax = !1),
                          (t = s.trim(t)),
                          ('push' === e.migration_intent && '1' !== t) ||
                            ('push' !== e.migration_intent && '' !== t))
                        )
                          return (
                            void 0 !== t &&
                              void 0 !== t.wpmdb_error &&
                              1 === t.wpmdb_error &&
                              (t = t.wpmdb_error),
                            wpmdb.current_migration.setState(
                              l.migration_cancellation_failed,
                              t,
                              'error',
                            ),
                            (wpmdb.common.migration_error = !0),
                            void wpmdb.functions.migration_complete_events()
                          );
                        (e.completed_msg = l.migration_cancelled),
                          'find_replace' === e.migration_intent &&
                            (e.completed_msg = l.find_replace_cancelled),
                          wpmdb.functions.migration_complete_events(),
                          wpmdb.current_migration.setStatus('cancelled');
                      },
                    });
                } else
                  wpmdb.common.next_step_in_migration.fn.apply(
                    null,
                    wpmdb.common.next_step_in_migration.args,
                  );
              },
            },
            {
              key: 'maybe_show_prefix_notice',
              value: function(e) {
                var t = s('.prefix-notice');
                t.hide(),
                  e !== p.this_prefix &&
                    (s('.remote-prefix').html(e),
                    (this.show_prefix_notice = !0),
                    t.show());
              },
            },
            {
              key: 'maybe_show_select_table_notice',
              value: function() {
                if (
                  s('#migrate-selected').is(':checked') &&
                  null === s('#select-tables').val()
                ) {
                  if ('import' !== wpmdb.functions.wpmdb_migration_type())
                    return alert(l.please_select_one_table), !0;
                  if (
                    s('#import-find-replace').is(':checked') &&
                    s('#select-tables').is(':visible')
                  )
                    return alert(l.please_select_one_table_import), !0;
                }
                return (
                  !(
                    'savefile' === wpmdb.functions.wpmdb_migration_type() ||
                    !s('#backup-manual-select').is(':checked') ||
                    null !== s('#select-backup').val()
                  ) && (alert(l.please_select_one_table_backup), !0)
                );
              },
            },
            {
              key: 'remove_protocol',
              value: function(e) {
                return e.replace(/^https?:/i, '');
              },
            },
            {
              key: 'create_table_select',
              value: function(e, t, n) {
                var i = document.createElement('select');
                return (
                  s(i).attr({
                    multiple: 'multiple',
                    name: 'select_tables[]',
                    id: 'select-tables',
                    class: 'multiselect',
                  }),
                  0 < e.length &&
                    s.each(e, function(e, o) {
                      if (
                        !s.wpmdb.apply_filters('wpmdb_exclude_table', !1, o)
                      ) {
                        var a = ' ';
                        void 0 !== n &&
                          null !== n &&
                          0 < n.length &&
                          -1 !== s.inArray(o, n) &&
                          (a = ' selected="selected" ');
                        var r = '';
                        0 !== t.length && (r = ' (' + t[o] + ')'),
                          s(i).append(
                            '<option' +
                              a +
                              'value="' +
                              o +
                              '">' +
                              o +
                              r +
                              '</option>',
                          );
                      }
                    }),
                  i
                );
              },
            },
            {
              key: 'get_tables_to_migrate',
              value: function() {
                var e = [],
                  t = wpmdb.functions.wpmdb_migration_type();
                return (
                  'migrate_select' ===
                  s('input[name=table_migrate_option]:checked').val()
                    ? (e = s('#select-tables').val())
                    : 'pull' !== t && void 0 !== p.this_prefixed_tables
                    ? (e = p.this_prefixed_tables)
                    : 'pull' === t &&
                      void 0 !== wpmdb.common.connection_data &&
                      void 0 !== wpmdb.common.connection_data.prefixed_tables &&
                      (e = wpmdb.common.connection_data.prefixed_tables),
                  e
                );
              },
            },
            {
              key: 'update_migrate_button_text',
              value: function() {
                var e = wpmdb.functions.wpmdb_migration_type(),
                  t = s('#save-migration-profile').is(':checked')
                    ? '_save'
                    : '',
                  n = 'migrate_button_' + ('savefile' === e ? 'export' : e) + t;
                s('.migrate-db .button-primary').val(l[n]);
              },
            },
            {
              key: 'connection_box_changed',
              value: function() {
                var e = this,
                  t = s('.pull-push-connection-info');
                if (
                  -1 !==
                    s.inArray(wpmdb.functions.wpmdb_migration_type(), [
                      'push',
                      'pull',
                    ]) &&
                  ((!this.doing_ajax && !s(t).hasClass('temp-disabled')) ||
                    !1 !== wpmdb.force_reconnect)
                ) {
                  wpmdb.force_reconnect = !1;
                  var n = s('.pull-push-connection-info').val(),
                    i = s.trim(n).split('\n'),
                    o = !1,
                    a = '';
                  if (
                    ('' === i && ((o = !0), (a = l.connection_info_missing)),
                    1 === i.length && !o)
                  ) {
                    var r = s.trim(n).split(' ');
                    2 === r.length && (i = r);
                  }
                  2 === i.length ||
                    o ||
                    ((o = !0), (a = l.connection_info_incorrect)),
                    o ||
                      this.validate_url(i[0]) ||
                      ((o = !0), (a = l.connection_info_url_invalid));
                  var d = 0;
                  if (
                    (void 0 !== i[1] && (d = i[1].length),
                    o ||
                      32 === d ||
                      40 === d ||
                      ((o = !0), (a = l.connection_info_key_invalid)),
                    o ||
                      i[0] !== p.connection_info[0] ||
                      ((o = !0), (a = l.connection_info_local_url)),
                    o ||
                      i[1] !== p.connection_info[1] ||
                      ((o = !0), (a = l.connection_info_local_key)),
                    o)
                  )
                    return (
                      s('.connection-status').html(a),
                      void s('.connection-status').addClass(
                        'notification-message error-notice migration-error',
                      )
                    );
                  var m = i[0] + '\n' + i[1];
                  1 === s.trim(n).split('\n').length &&
                    s('.pull-push-connection-info').val(m),
                    !1 === p.openssl_available &&
                      ((i[0] = i[0].replace('https://', 'http://')),
                      (m = i[0] + '\n' + i[1]),
                      s('.pull-push-connection-info').val(m)),
                    (this.show_prefix_notice = !1),
                    (this.doing_ajax = !0),
                    this.disable_export_type_controls(),
                    s('.basic-access-auth-wrapper').is(':visible') &&
                      ((i[0] = i[0].replace(/\/\/(.*)@/, '//')),
                      (i[0] = i[0].replace(
                        '//',
                        '//' +
                          encodeURIComponent(
                            s.trim(s('.auth-username').val()),
                          ) +
                          ':' +
                          encodeURIComponent(
                            s.trim(s('.auth-password').val()),
                          ) +
                          '@',
                      )),
                      (m = i[0] + '\n' + i[1]),
                      s('.pull-push-connection-info').val(m),
                      s('.basic-access-auth-wrapper').hide()),
                    s('.step-two').hide(),
                    s('.ssl-notice').hide(),
                    s('.prefix-notice').hide(),
                    s('.connection-status').show(),
                    s('.connection-status').html(
                      l.establishing_remote_connection,
                    ),
                    s('.connection-status').removeClass(
                      'notification-message error-notice migration-error',
                    ),
                    s('.connection-status').append(this.ajax_spinner);
                  var u = wpmdb.functions.wpmdb_migration_type();
                  return (
                    (this.profile_name_edited = !1),
                    s.ajax({
                      url: c,
                      type: 'POST',
                      dataType: 'json',
                      cache: !1,
                      data: {
                        action: 'wpmdb_verify_connection_to_remote_site',
                        url: i[0],
                        key: i[1],
                        intent: u,
                        nonce: p.nonces.verify_connection_to_remote_site,
                      },
                      error: function(t, n, i) {
                        s('.connection-status').html(
                          e.get_ajax_errors(t.responseText, '(#100)', t),
                        ),
                          s('.connection-status').addClass(
                            'notification-message error-notice migration-error',
                          ),
                          s('.ajax-spinner').remove(),
                          (e.doing_ajax = !1),
                          e.enable_export_type_controls();
                      },
                      success: function(t) {
                        if (
                          (s('.ajax-spinner').remove(),
                          (e.doing_ajax = !1),
                          e.enable_export_type_controls(),
                          void 0 !== t.wpmdb_error && 1 === t.wpmdb_error)
                        )
                          return (
                            s('.connection-status').html(t.body),
                            s('.connection-status').addClass(
                              'notification-message error-notice migration-error',
                            ),
                            t.body.indexOf('401 Unauthorized') > -1 &&
                              s('.basic-access-auth-wrapper').show(),
                            void (
                              s('.pull-push-connection-info').hasClass(
                                'temp-disabled',
                              ) ||
                              s('.connect-button').is(':visible') ||
                              (s('.pull-push-connection-info').removeAttr(
                                'readonly',
                              ),
                              s('.connect-button').show())
                            )
                          );
                        if (!0 !== wpmdb.functions.maybe_show_mst_warning(t)) {
                          e.maybe_show_ssl_warning(i[0], i[1], t.scheme);
                          var n = e.get_domain_name(t.url);
                          s('.create-new-profile').val(n),
                            s('.pull-push-connection-info').addClass(
                              'temp-disabled',
                            ),
                            s('.pull-push-connection-info').attr(
                              'readonly',
                              'readonly',
                            ),
                            s('.connect-button').hide(),
                            s('.connection-status').hide(),
                            s('.step-two').show(),
                            wpmdb.functions.maybe_show_prefix_notice(t.prefix),
                            (e.connection_established = !0),
                            e.set_connection_data(t),
                            e.move_connection_info_box(),
                            e.change_replace_values(),
                            e.maybe_show_mixed_cased_table_name_warning(),
                            e.refresh_table_selects(null, null, e),
                            (e.$push_select_backup = s(e.$pull_select).clone()),
                            s(e.$push_select_backup).attr({
                              name: 'select_backup[]',
                              id: 'select-backup',
                            });
                          var o = document.createElement('select');
                          s(o).attr({
                            multiple: 'multiple',
                            name: 'select_post_types[]',
                            id: 'select-post-types',
                            class: 'multiselect',
                          }),
                            s.each(
                              wpmdb.common.connection_data.post_types,
                              function(e, t) {
                                s(o).append(
                                  '<option value="' +
                                    t +
                                    '">' +
                                    t +
                                    '</option>',
                                );
                              },
                            ),
                            (e.$pull_post_type_select = o),
                            s(
                              '#new-path-missing-warning, #new-url-missing-warning',
                            ).hide(),
                            'pull' === wpmdb.functions.wpmdb_migration_type()
                              ? (s('#new-url').val(
                                  e.remove_protocol(p.this_url),
                                ),
                                s('#new-path').val(p.this_path),
                                'true' === p.is_multisite &&
                                  (s('#new-domain').val(p.this_domain),
                                  s(
                                    '.replace-row.pin .old-replace-col input[type="text"]',
                                  ).val(e.remove_protocol(t.url))),
                                s('#old-url').val(e.remove_protocol(t.url)),
                                s('#old-path').val(t.path),
                                s.wpmdb.do_action(
                                  'wpmdb_update_pull_table_select',
                                ),
                                s('#select-post-types').remove(),
                                s('.exclude-post-types-warning').after(
                                  e.$pull_post_type_select,
                                ),
                                wpmdb.functions.exclude_post_types_warning(),
                                s('.table-prefix').html(t.prefix),
                                s('.backup-table-prefix').html(
                                  p.site_details.prefix,
                                ),
                                s('.uploads-dir').html(p.this_uploads_dir))
                              : (s('#new-url').val(e.remove_protocol(t.url)),
                                s('#new-path').val(t.path),
                                'true' === p.is_multisite &&
                                  s(
                                    '.replace-row.pin .old-replace-col input[type="text"]',
                                  ).val(e.remove_protocol(p.this_url)),
                                s.wpmdb.do_action(
                                  'wpmdb_update_push_table_select',
                                ),
                                s('#select-backup').remove(),
                                s('.backup-tables-wrap').prepend(
                                  e.$push_select_backup,
                                )),
                            (wpmdb.common.next_step_in_migration = {
                              fn: s.wpmdb.do_action,
                              args: [
                                'verify_connection_to_remote_site',
                                wpmdb.common.connection_data,
                              ],
                            }),
                            wpmdb.functions.execute_next_step();
                        } else s('.connection-status').hide();
                      },
                    })
                  );
                }
              },
            },
          ]),
          e
        );
      })();
    t.default = d;
  },
  function(e, t, n) {
    'use strict';
    var i = (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(3));
    var o = jQuery,
      a = n(55),
      r = n(57),
      s = o('<div id="overlay" class="hide"></div>'),
      c = o('.progress-content')
        .clone()
        .addClass('hide'),
      l = o('.pro-version').addClass('hide');
    s.append(l);
    var p = {
      migration: {
        model: {},
        view: {},
        $progress: {},
        $wrapper: {},
        $overlay: {},
        status: 'active',
        title: '',
        text: '',
        timerCount: 0,
        timerStart: 0,
        elapsedInterval: 0,
        currentStageNum: 0,
        counterDisplay: !1,
        originalTitle: document.title,
        setTitle: function(e) {
          this.$progress.find('.progress-title').html(e), (this.title = e);
        },
        setStatus: function(e) {
          this.$progress
            .removeClass(this.status)
            .addClass('error' === e ? 'wpmdb-error' : e),
            'error' === e &&
              this.$progress.find('.progress-text').addClass('migration-error'),
            (this.status = e),
            this.updateTitleElem();
        },
        setText: function(e) {
          'string' != typeof e && (e = ''),
            0 >= e.indexOf('wpmdb_error') && (e = this.decodeErrorObject(e)),
            this.$progress.find('.progress-text').html(e),
            (this.text = e);
        },
        setState: function(e, t, n) {
          null !== e && this.setTitle(e),
            null !== t && this.setText(t),
            null !== n && this.setStatus(n);
        },
        startTimer: function() {
          (this.timerStart = Date.now()),
            (this.timerCount = 0),
            (this.counterDisplay = o('.timer')),
            (this.elapsedInterval = setInterval(
              this.incrementTimer.bind(this),
              1e3,
            ));
        },
        getTimerCountInSeconds: function() {
          return Math.floor((Date.now() - this.timerStart) / 1e3);
        },
        pauseTimer: function() {
          (this.pausedAt = Date.now()), clearInterval(this.elapsedInterval);
        },
        resumeTimer: function() {
          (this.timerStart += Date.now() - this.pausedAt),
            (this.elapsedInterval = setInterval(
              this.incrementTimer.bind(this),
              1e3,
            ));
        },
        incrementTimer: function() {
          (this.timerCount = this.getTimerCountInSeconds()),
            this.displayCount();
        },
        displayCount: function() {
          var e = Math.floor(this.timerCount / 3600) % 24,
            t = Math.floor(this.timerCount / 60) % 60,
            n = this.timerCount % 60,
            i =
              this.pad(e, 2, 0) +
              ':' +
              this.pad(t, 2, 0) +
              ':' +
              this.pad(n, 2, 0);
          this.counterDisplay.html(i);
        },
        updateTitleElem: function() {
          var e = this.model.get('activeStageName'),
            t = this.model.getStageModel(e),
            n = Math.max(0, t.getTotalProgressPercent()),
            i = this.model.get('stages').length,
            o = this.currentStageNum,
            a = this.status,
            r = wpmdb_strings.title_progress;
          'complete' === t.get('status') &&
            0 === t.get('totalSize') &&
            (n = 100),
            (r = (r = (r = r.replace('%1$s', n + '%')).replace(
              '%2$s',
              o,
            )).replace('%3$s', i)),
            1 === i && (r = n + '%'),
            wpmdb_strings['title_' + a] && (r = wpmdb_strings['title_' + a]),
            (r = r + ' - ' + this.originalTitle),
            (document.title = r);
        },
        restoreTitleElem: function() {
          document.title = this.originalTitle;
        },
        pad: function(e, t, n) {
          return (
            (n = n || '0'),
            (e += '').length >= t ? e : new Array(t - e.length + 1).join(n) + e
          );
        },
        decodeErrorObject: function(e) {
          var t = e
            .replace(/\{&quot;/g, '{#q!#')
            .replace(/\&quot;}/g, '#q!#}')
            .replace(/,&quot;/g, ',#q!#')
            .replace(/&quot;:/g, '#q!#:')
            .replace(/:&quot;/g, ':#q!#')
            .replace(/&quot;/g, '\\"')
            .replace(/#q!#/g, '"')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<');
          try {
            t = JSON.parse(t);
          } catch (t) {
            return e;
          }
          return 'object' ===
            (void 0 === t ? 'undefined' : (0, i.default)(t)) &&
            void 0 !== t.body
            ? t
            : e;
        },
        fixProgressStageWidthForScrollBar: function() {
          var e = Math.abs(
              this.$wrapper[0].offsetWidth - this.$wrapper[0].clientWidth,
            ),
            t = this.$wrapper.find('.active .progress-items'),
            n = parseInt(t.css('padding-left'), 10),
            i = parseInt(t.css('padding-right'), 10);
          (0 !== e || (0 === e && i !== n)) &&
            t.css('padding-right', n - e + 'px');
        },
      },
      newMigration: function(e) {
        o('#overlay').remove(),
          o('.progress-content').remove(),
          (this.migration.$overlay = s.clone()),
          o('#wpwrap').append(this.migration.$overlay),
          (this.migration.model = new a(e)),
          (this.migration.view = new r({ model: this.migration.model })),
          (this.migration.$progress = c.clone()),
          (this.migration.$wrapper = this.migration.view.$el),
          this.migration.$progress
            .find('.migration-progress-stages')
            .replaceWith(this.migration.$wrapper),
          (this.migration.$proVersion = this.migration.$overlay.find(
            '.pro-version',
          ));
        var t = this.migration.$proVersion
          .find('iframe')
          .remove()
          .clone();
        this.migration.$overlay.prepend(this.migration.$progress);
        var n = this;
        return (
          setTimeout(function() {
            n.migration.$overlay
              .add(n.migration.$progress)
              .add(n.migration.$proVersion)
              .removeClass('hide')
              .addClass('show'),
              n.migration.$proVersion.length &&
                setTimeout(function() {
                  n.migration.$proVersion.find('.iframe').append(t);
                }, 500);
          }, 0),
          (this.migration.currentStageNum = 0),
          this.migration.$proVersion.on(
            'click',
            '.close-pro-version',
            function() {
              n.migration.$proVersion.find('iframe').remove(),
                n.migration.$proVersion.addClass('hide remove'),
                setTimeout(function() {
                  n.migration.$proVersion.remove();
                }, 500);
            },
          ),
          this.migration.model.on('migrationComplete', function() {
            n.utils.updateProgTableVisibilitySetting(),
              n.utils.updatePauseBeforeFinalizeSetting(),
              n.migration.pauseTimer();
          }),
          o(window).on(
            'resize',
            _.debounce(
              this.migration.fixProgressStageWidthForScrollBar.bind(
                this.migration,
              ),
              100,
            ),
          ),
          this.migration.model.on(
            'change:activeStage',
            this.migration.fixProgressStageWidthForScrollBar.bind(
              this.migration,
            ),
          ),
          this.migration
        );
      },
      utils: n(59),
    };
    e.exports = p;
  },
  function(e, t) {
    window.jQuery;
    jQuery(function() {
      jQuery('.wpmdb-opt-usage-tracking').on('click', function(e) {
        e.preventDefault();
        var t = !!e.target.classList.contains('opt-yes');
        jQuery('.wpmdb-usage-tracking-notice .links').text(
          t ? 'Thanks!' : 'Done.',
        ),
          jQuery('.wpmdb-usage-tracking-notice')
            .delay(1e3)
            .fadeOut(200);
        var n = jQuery('#allow_tracking-wrap');
        if (t) {
          if (!n.hasClass('on')) return void n.trigger('click');
        } else if (n.hasClass('on')) return void n.trigger('click');
        n.find('input[type=checkbox]').trigger('change');
      });
    });
  },
  function(e, t, n) {
    var i = window.jQuery,
      o = r(n(36)),
      a = r(n(48));
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    i = window.jQuery;
    var s = window.wpmdb,
      c = window.ajaxurl;
    window._;
    i(function() {
      i('body').on(
        'wpmdb_done',
        (0, a.default)(
          o.default.mark(function e() {
            var t;
            return o.default.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ('1' === wpmdb_data.allow_tracking) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt('return', !1);
                    case 2:
                      return (
                        (t = {
                          action: 'wpmdb_track_migration_complete',
                          nonce: wpmdb_data.nonces.send_migration_complete,
                          migration_state_id: s.migration_state_id,
                        }),
                        (e.prev = 3),
                        (e.next = 6),
                        i.ajax({ url: c, type: 'POST', cache: !1, data: t })
                      );
                    case 6:
                      e.sent, (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9), (e.t0 = e.catch(3)), console.error(e.t0);
                    case 12:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              this,
              [[3, 9]],
            );
          }),
        ),
      ),
        i.wpmdb.add_action(
          'wpmdb_migration_initiated',
          (0, a.default)(
            o.default.mark(function e() {
              var t;
              return o.default.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ('1' === wpmdb_data.allow_tracking) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt('return', !1);
                      case 2:
                        return (
                          (t = {
                            action: 'wpmdb_maybe_collect_data',
                            nonce: wpmdb_data.nonces.track_usage,
                            migration_state_id: s.migration_state_id,
                          }),
                          (e.prev = 3),
                          (e.next = 6),
                          i.ajax({ url: c, type: 'POST', cache: !1, data: t })
                        );
                      case 6:
                        e.sent, (e.next = 12);
                        break;
                      case 9:
                        (e.prev = 9), (e.t0 = e.catch(3)), console.error(e.t0);
                      case 12:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this,
                [[3, 9]],
              );
            }),
          ),
        );
    });
  },
  function(e, t) {
    window.jQuery;
  },
  function(e, t) {
    window.jQuery;
  },
  function(e, t) {
    window.jQuery;
  },
  function(e, t) {
    window.jQuery;
  },
  function(e, t) {
    window.jQuery;
  },
  function(e, t) {
    window.jQuery;
  },
]);
//# sourceMappingURL=bundle-1011.js.map
