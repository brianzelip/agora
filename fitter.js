!(function(t) {
  if ('object' == typeof exports) module.exports = t();
  else if ('function' == typeof define && define.amd) define(t);
  else {
    var e;
    'undefined' != typeof window
      ? (e = window)
      : 'undefined' != typeof global
        ? (e = global)
        : 'undefined' != typeof self && (e = self),
      (e.fitterHappierText = t());
  }
})(function() {
  return (function t(e, i, r) {
    function n(u, f) {
      if (!i[u]) {
        if (!e[u]) {
          var s = 'function' == typeof require && require;
          if (!f && s) return s(u, !0);
          if (o) return o(u, !0);
          throw new Error("Cannot find module '" + u + "'");
        }
        var d = (i[u] = { exports: {} });
        e[u][0].call(
          d.exports,
          function(t) {
            var i = e[u][1][t];
            return n(i ? i : t);
          },
          d,
          d.exports,
          t,
          e,
          i,
          r
        );
      }
      return i[u].exports;
    }
    for (
      var o = 'function' == typeof require && require, u = 0;
      u < r.length;
      u++
    )
      n(r[u]);
    return n;
  })(
    {
      1: [
        function(t, e, i) {
          e.exports = function(t, e) {
            for (
              var e = e || {},
                i = e.baseline || 16,
                r = e.paddingY || 0,
                n = e.doc || document,
                o =
                  'function' ==
                  typeof n.createElementNS('http://www.w3.org/2000/svg', 'svg')
                    .getBoundingClientRect,
                u = 0;
              u < t.length;
              u++
            ) {
              var f,
                s = t[u].textContent,
                d = n.createElementNS('http://www.w3.org/2000/svg', 'svg'),
                l = n.createElementNS('http://www.w3.org/2000/svg', 'text');
              (l.textContent = s),
                l.setAttribute('x', '50%'),
                l.setAttribute('y', i),
                l.setAttribute('font-family', 'inherit'),
                l.setAttribute('font-size', '1rem'),
                l.setAttribute('font-weight', 'inherit'),
                l.setAttribute('style', 'text-anchor:middle');
              for (var a = 0; a < t[u].attributes.length; a++)
                d.setAttribute(
                  t[u].attributes[a].name,
                  t[u].attributes[a].value
                );
              d.setAttribute('width', '100%'),
                d.setAttribute('style', 'max-height:100%'),
                d.setAttribute('fill', 'currentcolor'),
                d.setAttribute('overflow', 'visible'),
                d.appendChild(l),
                t[u].parentNode.replaceChild(d, t[u]),
                (f = o ? l.getBoundingClientRect() : {}),
                (f.width =
                  f.width || l.offsetWidth || l.getComputedTextLength()),
                (f.height = f.height || l.offsetHeight || 24),
                d.setAttribute(
                  'viewBox',
                  '0 0 ' +
                    Math.round(f.width) +
                    ' ' +
                    (Math.round(f.height) + r)
                );
            }
          };
        },
        {}
      ]
    },
    {},
    [1]
  )(1);
});
