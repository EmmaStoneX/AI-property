var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// api/sites.js
var DEFAULT_SITES = [
  { domain: "ai.zxvmax.com", name: "\u955C\u50CF\u7AD9\u7EDF\u4E00\u5165\u53E3", desc: "Claude \u548C Grok \u955C\u50CF\u7AD9\u7EDF\u4E00\u5165\u53E3\uFF0C\u652F\u6301\u591A\u79CD\u767B\u5F55\u65B9\u5F0F", url: "https://ai.zxvmax.com", accessible: true, tags: ["\u6A21\u578B\u955C\u50CF", "\u5F00\u7BB1\u5373\u7528", "Serverless"] },
  { domain: "api.zxvmax.com", name: "LLM \u4E2D\u8F6C\u7AD9", desc: "\u652F\u6301\u56FD\u5185\u5916\u4E3B\u6D41\u5927\u8BED\u8A00\u6A21\u578B\u7684 API \u4E2D\u8F6C\u670D\u52A1", url: "https://api.zxvmax.com", accessible: true, tags: ["API \u670D\u52A1", "\u5F00\u7BB1\u5373\u7528", "Docker", "\u540E\u7AEF\u670D\u52A1"] },
  { domain: "chat.zxvmax.com", name: "\u53E3\u888B\u52A9\u624B", desc: "\u4E3B\u804A\u5929\u5DE5\u5177\uFF0C\u652F\u6301\u591A\u6A21\u578B\u5BF9\u8BDD\u548C\u56FE\u50CF\u4E0A\u4F20", url: "https://chat.zxvmax.com", accessible: true, tags: ["\u804A\u5929\u52A9\u624B", "BYOK", "Serverless"] },
  { domain: "deep-research.zxvmax.com", name: "\u6DF1\u5EA6\u7814\u7A76", desc: "AI \u9A71\u52A8\u7684\u6DF1\u5EA6\u7814\u7A76\u4E0E\u5206\u6790\u5DE5\u5177", url: "https://deep-research.zxvmax.com", accessible: true, tags: ["\u7814\u7A76\u5DE5\u5177", "BYOK", "Serverless"] },
  { domain: "dify.zxvmax.com", name: "Dify \u5E73\u53F0", desc: "Dify \u79C1\u6709\u5316\u90E8\u7F72\uFF0CAI \u5E94\u7528\u5F00\u53D1\u5E73\u53F0", url: "https://dify.zxvmax.com", accessible: true, tags: ["AI \u5E73\u53F0", "\u5F00\u7BB1\u5373\u7528", "Docker"] },
  { domain: "img.zxvmax.com", name: "AI \u751F\u56FE", desc: "AI \u56FE\u50CF\u751F\u6210\u5DE5\u5177\uFF0C\u5BF9\u63A5\u5927\u9999\u85492\u6A21\u578B", url: "https://img.zxvmax.com", accessible: true, tags: ["\u521B\u610F\u5DE5\u5177", "\u5F00\u7BB1\u5373\u7528", "Serverless"] },
  { domain: "nano-kit.zxvmax.com", name: "Nano Kit", desc: "AI \u7ED8\u56FE\u5DE5\u4F5C\u53F0\uFF0C\u7ED8\u56FE\u5DE5\u5177\u5957\u4EF6", url: "https://nano-kit.zxvmax.com", accessible: true, tags: ["\u521B\u610F\u5DE5\u5177", "\u5F00\u7BB1\u5373\u7528", "Serverless"] },
  { domain: "netpulse.zxvmax.com", name: "NetPulse", desc: "AI \u4E92\u8054\u7F51\u4E8B\u4EF6\u5B9E\u65F6\u5206\u6790\u5668\uFF08\u5F00\u6E90\u9879\u76EE\uFF09", url: "https://netpulse.zxvmax.com", accessible: true, tags: ["\u7814\u7A76\u5DE5\u5177", "\u5F00\u7BB1\u5373\u7528", "Serverless"] },
  { domain: "ui-prompt.zxvmax.com", name: "UI Style Prompt", desc: "AI UI \u8BBE\u8BA1\u98CE\u683C\u63D0\u793A\u8BCD\u5E93", url: "https://ui-prompt.zxvmax.com", accessible: true, tags: ["\u5F00\u53D1\u5DE5\u5177", "\u5F00\u7BB1\u5373\u7528", "Serverless"] },
  { domain: "waoo.zxvmax.com", name: "Waoo Studio", desc: "AI \u5F71\u89C6/\u52A8\u6F2B\u5236\u4F5C\u5E73\u53F0\uFF0C\u652F\u6301\u6CE8\u518C\u4F7F\u7528", url: "https://waoo.zxvmax.com", accessible: true, tags: ["\u521B\u610F\u5DE5\u5177", "BYOK", "Docker"] },
  { domain: "backend-ai.zxvmax.com", name: "AI \u540E\u7AEF", desc: "Claude \u955C\u50CF\u7AD9\u540E\u7AEF\u670D\u52A1", url: null, accessible: false, tags: ["API \u670D\u52A1", "\u540E\u7AEF\u670D\u52A1", "Serverless"] },
  { domain: "claude.zxvmax.com", name: "Claude \u955C\u50CF", desc: "Claude \u955C\u50CF\u7AD9\u4E3B\u7AD9\uFF0C\u4ECE AI \u5165\u53E3\u8DF3\u8F6C", url: null, accessible: false, tags: ["\u6A21\u578B\u955C\u50CF", "\u540E\u7AEF\u670D\u52A1", "Docker"] },
  { domain: "grok.zxvmax.com", name: "Grok \u955C\u50CF", desc: "Grok \u955C\u50CF\u7AD9\u4E3B\u7AD9\uFF0C\u4ECE AI \u5165\u53E3\u8DF3\u8F6C", url: null, accessible: false, tags: ["\u6A21\u578B\u955C\u50CF", "\u540E\u7AEF\u670D\u52A1", "Docker"] },
  { domain: "grok2api.zxvmax.com", name: "Grok2API", desc: "Grok \u6A21\u578B API \u4EE3\u7406\u670D\u52A1", url: "https://grok.zxvmax.com/lyy0709", accessible: true, tags: ["API \u670D\u52A1", "\u540E\u7AEF\u670D\u52A1", "Serverless"] },
  { domain: "kagi2api.zxvmax.com", name: "Kagi2API", desc: "Kagi \u641C\u7D22 API \u4EE3\u7406\u670D\u52A1", url: null, accessible: false, tags: ["API \u670D\u52A1", "\u540E\u7AEF\u670D\u52A1", "Serverless"] },
  { domain: "cpa.zxvmax.com", name: "CLI Proxy", desc: "CLI \u4EE3\u7406\uFF0C\u4E2D\u8F6C GPT \u6A21\u578B", url: "https://cpa.zxvmax.site/management.html", accessible: true, tags: ["API \u670D\u52A1", "\u540E\u7AEF\u670D\u52A1", "Docker"] },
  { domain: "spark.us.ci", name: "Spark Mail", desc: "\u4E34\u65F6\u90AE\u7BB1\u670D\u52A1", url: "https://spark.us.ci", accessible: true, tags: ["\u5DE5\u5177", "\u5F00\u7BB1\u5373\u7528", "Serverless"] }
];
var CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};
function json(data, status = 200) {
  return Response.json(data, { status, headers: CORS });
}
__name(json, "json");
async function getSites(env) {
  const raw = await env.SITES_KV.get("sites");
  return raw ? JSON.parse(raw) : DEFAULT_SITES;
}
__name(getSites, "getSites");
async function saveSites(env, sites) {
  await env.SITES_KV.put("sites", JSON.stringify(sites));
}
__name(saveSites, "saveSites");
function checkPassword(env, password) {
  return password === env.ADMIN_PASSWORD;
}
__name(checkPassword, "checkPassword");
async function onRequest(context) {
  const { request, env } = context;
  const method = request.method;
  if (method === "OPTIONS") {
    return new Response(null, { headers: CORS });
  }
  if (method === "GET") {
    const sites = await getSites(env);
    return json(sites);
  }
  if (method === "POST") {
    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "\u65E0\u6548 JSON" }, 400);
    }
    const { password, site } = body;
    if (!checkPassword(env, password)) {
      return json({ error: "\u5BC6\u7801\u9519\u8BEF" }, 401);
    }
    if (!site || !site.domain || !site.name) {
      return json({ error: "\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5\uFF1Adomain\u3001name" }, 400);
    }
    const sites = await getSites(env);
    if (sites.some((s) => s.domain === site.domain)) {
      return json({ error: `\u57DF\u540D ${site.domain} \u5DF2\u5B58\u5728` }, 409);
    }
    sites.push({
      domain: site.domain,
      name: site.name,
      desc: site.desc || "",
      url: site.url || null,
      accessible: Boolean(site.accessible),
      tags: Array.isArray(site.tags) ? site.tags : []
    });
    await saveSites(env, sites);
    return json({ ok: true });
  }
  if (method === "DELETE") {
    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "\u65E0\u6548 JSON" }, 400);
    }
    const { password, domain } = body;
    if (!checkPassword(env, password)) {
      return json({ error: "\u5BC6\u7801\u9519\u8BEF" }, 401);
    }
    if (domain === "__verify__") {
      return json({ ok: true });
    }
    const sites = await getSites(env);
    const filtered = sites.filter((s) => s.domain !== domain);
    await saveSites(env, filtered);
    return json({ ok: true });
  }
  return new Response("Method Not Allowed", { status: 405, headers: CORS });
}
__name(onRequest, "onRequest");

// ../.wrangler/tmp/pages-740lZC/functionsRoutes-0.07038078166137551.mjs
var routes = [
  {
    routePath: "/api/sites",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest]
  }
];

// C:/Users/Administrator/AppData/Roaming/npm/node_modules/wrangler/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// C:/Users/Administrator/AppData/Roaming/npm/node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");

// C:/Users/Administrator/AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// C:/Users/Administrator/AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// ../.wrangler/tmp/bundle-aGHsKi/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;

// C:/Users/Administrator/AppData/Roaming/npm/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// ../.wrangler/tmp/bundle-aGHsKi/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=functionsWorker-0.8047295066006324.mjs.map
