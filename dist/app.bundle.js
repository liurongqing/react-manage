(() => { var l; console.log("2..."); var o = { b: 123 }; console.log(null == o || null === (l = o.b) || void 0 === l ? void 0 : l.c) })();