// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"47LOG":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "1293bae57ac04db4";
module.bundle.HMR_BUNDLE_ID = "17c5d162d46fb629";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"cnwwq":[function(require,module,exports) {
var _alerts = require("./alerts");
var _form = require("./form");
var _week = require("./week");
var _weekManager = require("./week_manager");
var _litHtml = require("lit-html");
var displaceHeader = function() {
    var target;
    var limit;
    var flag = false;
    function popp() {
        if (window.scrollY >= limit && !flag) target.classList.add("displaced");
        else if (window.scrollY <= limit) target.classList.remove("displaced");
    }
    return {
        init: function(item) {
            target = document.getElementById(item);
            limit = target.offsetHeight;
            window.addEventListener("scroll", popp);
        }
    };
}();
class Main {
    constructor(){
        this.formToggleBtn = document.getElementById("fab");
        this.formEnclosure = document.createElement("div");
        this.fm = new _form.FormHandler();
        this.am = new _alerts.AlertHandler(document.getElementById('alert'));
        this.wm = new _weekManager.WeekManager(this.am);
        this.formOpen = false;
        let weeks = document.getElementById("weeks");
        weeks.parentNode.insertBefore(this.formEnclosure, weeks);
        this.addListeners();
        //render(templateFunc(week), htmlcontainer);
        displaceHeader.init("nav");
    }
    async run() {
        let trial = ()=>{
            let ww = JSON.parse(`{"id":"1","name":"1","factor":0.05,"solvableTime":5,"solvable":{"activities":{"total":1,"left":0},"tutorials":{"total":1,"left":0},"assignments":{"total":2,"left":1}},"videos":[{"m":33,"s":3,"seen":true}, {"m":3,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":33,"s":23,"seen":true},{"m":12,"s":12,"seen":true}],"lastChangeTime":1634845763686}`);
            ww.hidden = false;
            let w2 = new _week.Week(ww);
            this.wm.registerWeek(w2);
            ww.id = "2";
            ww.name = "2";
            ww.hidden = true;
            let w3 = new _week.Week(ww);
            this.wm.registerWeek(w3);
            ww.id = "3";
            ww.name = "3";
            ww.hidden = true;
            let w4 = new _week.Week(ww);
            this.wm.registerWeek(w4);
            ww.id = "4";
            ww.name = "4";
            ww.hidden = true;
            let w5 = new _week.Week(ww);
            this.wm.registerWeek(w5);
        };
        if (window.__TAURI__) ;
        else trial();
        if (window.__TAURI__) try {
            let exists = await _weekManager.WeekManager.ensureFileExists();
            console.log(exists);
            this.wm.loadLocal();
        } catch (error) {
            console.log(error);
            this.am.show("error", error, 1000);
        }
    }
    addListeners() {
        this.formToggleBtn.addEventListener("click", (e)=>{
            if (!window.__TAURI__ && this.formOpen) e.preventDefault(); // don't scroll up if form is closed
            this.formOpen = !this.formOpen;
            _litHtml.render(_form.formTemplate(this.formOpen), this.formEnclosure);
            if (this.formOpen) {
                this.formToggleBtn.classList.remove("open");
                this.formToggleBtn.classList.add("close");
            } else {
                this.formToggleBtn.classList.remove("close");
                this.formToggleBtn.classList.add("open");
            }
            if (this.formOpen) {
                let form = document.getElementById("add-form");
                form.addEventListener("submit", this.submitHandler.bind(this));
            }
        });
    }
    submitHandler(e) {
        e.preventDefault();
        let errors = this.fm.validate();
        if (errors.length > 0) this.am.show("error", errors.join("\n"), 10000);
        else {
            let weekInput = this.fm.submit();
            let form = e.target;
            form.reset();
            let week = this.wm.createNewWeek(weekInput);
            console.log(_week.Week.Validate(JSON.parse(JSON.stringify(week))));
        }
    }
}
window.onload = async function() {
    let m = new Main();
    await m.run();
};

},{"./alerts":"6WbrG","./form":"27H3o","./week":"4JigK","./week_manager":"aE7be","lit-html":"03dEp"}],"6WbrG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlertHandler", ()=>AlertHandler
);
var _litHtml = require("lit-html");
var _classMap = require("lit-html/directives/class-map");
const CSS = {
    'ok': {
        'heading': {
            'text-lime-500': true
        },
        'bg': {
            'bg-lime-500': true
        }
    },
    'error': {
        'heading': {
            'text-red-500': true
        },
        'bg': {
            'bg-red-500': true
        }
    },
    'warning': {
        'heading': {
            'text-amber-500': true
        },
        'bg': {
            'bg-amber-500': true
        }
    },
    'info': {
        'heading': {
            'text-blue-500': true
        },
        'bg': {
            'bg-blue-500': true
        }
    }
};
class AlertHandler {
    constructor(container){
        this.container = container;
        this.visible = false;
    }
    render() {
        if (!this.visible) return _litHtml.html``;
        return _litHtml.html`
    <div id="alert" class="alert-container">
      <div class="alert-inner-container">
        <div class="alert-logo-container ${_classMap.classMap(CSS[this.type].bg)}">
          <svg ?hidden=${this.type != 'ok'}      class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" /></svg>
          <svg ?hidden=${this.type != 'error'}   class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" /></svg>
          <svg ?hidden=${this.type != 'warning'} class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" /></svg>
          <svg ?hidden=${this.type != 'info'}    class="alert-logo" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" /></svg>
        </div>
        <div class="px-4 py-2 text-left">
          <span class="alert-heading ${_classMap.classMap(CSS[this.type].heading)}">${this.type.charAt(0).toUpperCase() + this.type.substr(1)}</span>
          <p class="alert-text actual-text">${this.message}</p>
        </div>
      </div>
    </div>
    `;
    }
    show(type, message, timeout) {
        this.type = type;
        this.message = message;
        this.visible = true;
        _litHtml.render(this.render(), this.container);
        setTimeout(()=>{
            this.hide();
        }, timeout);
    }
    hide() {
        this.visible = false;
        _litHtml.render(this.render(), this.container);
    }
}

},{"lit-html":"03dEp","lit-html/directives/class-map":"10PCA","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"03dEp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>L
);
parcelHelpers.export(exports, "html", ()=>p1
);
parcelHelpers.export(exports, "noChange", ()=>b
);
parcelHelpers.export(exports, "nothing", ()=>T
);
parcelHelpers.export(exports, "render", ()=>w
);
parcelHelpers.export(exports, "svg", ()=>y1
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var t1;
const i1 = globalThis.trustedTypes, s1 = i1 ? i1.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, e1 = `lit$${(Math.random() + "").slice(9)}$`, o1 = "?" + e1, n1 = `<${o1}>`, l1 = document, h1 = (t = "")=>l1.createComment(t)
, r1 = (t)=>null === t || "object" != typeof t && "function" != typeof t
, d1 = Array.isArray, u1 = (t)=>{
    var i;
    return d1(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
}, c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a = />/g, f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _ = /'/g, m = /"/g, g = /^(?:script|style|textarea)$/i, $1 = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        })
, p1 = $1(1), y1 = $1(2), b = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), x = new WeakMap, w = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new N(i.insertBefore(h1(), t), t, void 0, null != s ? s : {
        });
    }
    return l._$AI(t), l;
}, A = l1.createTreeWalker(l1, 129, null, !1), C = (t, i)=>{
    const o = t.length - 1, l = [];
    let h, r = 2 === i ? "<svg>" : "", d = c;
    for(let i2 = 0; i2 < o; i2++){
        const s = t[i2];
        let o, u, $ = -1, p = 0;
        for(; p < s.length && (d.lastIndex = p, u = d.exec(s), null !== u);)p = d.lastIndex, d === c ? "!--" === u[1] ? d = v : void 0 !== u[1] ? d = a : void 0 !== u[2] ? (g.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = f) : void 0 !== u[3] && (d = f) : d === f ? ">" === u[0] ? (d = null != h ? h : c, $ = -1) : void 0 === u[1] ? $ = -2 : ($ = d.lastIndex - u[2].length, o = u[1], d = void 0 === u[3] ? f : '"' === u[3] ? m : _) : d === m || d === _ ? d = f : d === v || d === a ? d = c : (d = f, h = void 0);
        const y = d === f && t[i2 + 1].startsWith("/>") ? " " : "";
        r += d === c ? s + n1 : $ >= 0 ? (l.push(o), s.slice(0, $) + "$lit$" + s.slice($) + e1 + y) : s + e1 + (-2 === $ ? (l.push(void 0), i2) : y);
    }
    const u = r + (t[o] || "<?>") + (2 === i ? "</svg>" : "");
    return [
        void 0 !== s1 ? s1.createHTML(u) : u,
        l
    ];
};
class P {
    constructor({ strings: t3 , _$litType$: s2  }, n2){
        let l;
        this.parts = [];
        let r = 0, d = 0;
        const u = t3.length - 1, c = this.parts, [v, a] = C(t3, s2);
        if (this.el = P.createElement(v, n2), A.currentNode = this.el.content, 2 === s2) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (l = A.nextNode()) && c.length < u;){
            if (1 === l.nodeType) {
                if (l.hasAttributes()) {
                    const t = [];
                    for (const i of l.getAttributeNames())if (i.endsWith("$lit$") || i.startsWith(e1)) {
                        const s = a[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = l.getAttribute(s.toLowerCase() + "$lit$").split(e1), i = /([.?@])?(.*)/.exec(s);
                            c.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? M : "?" === i[1] ? k : "@" === i[1] ? H : S
                            });
                        } else c.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i3 of t)l.removeAttribute(i3);
                }
                if (g.test(l.tagName)) {
                    const t = l.textContent.split(e1), s = t.length - 1;
                    if (s > 0) {
                        l.textContent = i1 ? i1.emptyScript : "";
                        for(let i = 0; i < s; i++)l.append(t[i], h1()), A.nextNode(), c.push({
                            type: 2,
                            index: ++r
                        });
                        l.append(t[s], h1());
                    }
                }
            } else if (8 === l.nodeType) {
                if (l.data === o1) c.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = l.data.indexOf(e1, t + 1));)c.push({
                        type: 7,
                        index: r
                    }), t += e1.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t2, i4) {
        const s = l1.createElement("template");
        return s.innerHTML = t2, s;
    }
}
function V(t, i, s = t, e) {
    var o, n, l, h;
    if (i === b) return i;
    let d = void 0 !== e ? null === (o = s._$Cl) || void 0 === o ? void 0 : o[e] : s._$Cu;
    const u = r1(i) ? void 0 : i._$litDirective$;
    return (null == d ? void 0 : d.constructor) !== u && (null === (n = null == d ? void 0 : d._$AO) || void 0 === n || n.call(d, !1), void 0 === u ? d = void 0 : (d = new u(t), d._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Cl) && void 0 !== l ? l : h._$Cl = [])[e] = d : s._$Cu = d), void 0 !== d && (i = V(t, d._$AS(t, i.values), d, e)), i;
}
class E {
    constructor(t, i){
        this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    p(t4) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t4 ? void 0 : t4.creationScope) && void 0 !== i ? i : l1).importNode(s, !0);
        A.currentNode = o;
        let n = A.nextNode(), h = 0, r = 0, d = e[0];
        for(; void 0 !== d;){
            if (h === d.index) {
                let i;
                2 === d.type ? i = new N(n, n.nextSibling, this, t4) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t4) : 6 === d.type && (i = new I(n, this, t4)), this.v.push(i), d = e[++r];
            }
            h !== (null == d ? void 0 : d.index) && (n = A.nextNode(), h++);
        }
        return o;
    }
    m(t5) {
        let i = 0;
        for (const s of this.v)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t5, s, i), i += s.strings.length - 2) : s._$AI(t5[i])), i++;
    }
}
class N {
    constructor(t6, i5, s, e){
        var o;
        this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t6, this._$AB = i5, this._$AM = s, this.options = e, this._$Cg = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cg;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t7, i6 = this) {
        t7 = V(this, t7, i6), r1(t7) ? t7 === T || null == t7 || "" === t7 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t7 !== this._$AH && t7 !== b && this.$(t7) : void 0 !== t7._$litType$ ? this.T(t7) : void 0 !== t7.nodeType ? this.S(t7) : u1(t7) ? this.M(t7) : this.$(t7);
    }
    A(t8, i7 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t8, i7);
    }
    S(t9) {
        this._$AH !== t9 && (this._$AR(), this._$AH = this.A(t9));
    }
    $(t10) {
        this._$AH !== T && r1(this._$AH) ? this._$AA.nextSibling.data = t10 : this.S(l1.createTextNode(t10)), this._$AH = t10;
    }
    T(t11) {
        var i;
        const { values: s , _$litType$: e  } = t11, o = "number" == typeof e ? this._$AC(t11) : (void 0 === e.el && (e.el = P.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s);
        else {
            const t = new E(o, this), i = t.p(this.options);
            t.m(s), this.S(i), this._$AH = t;
        }
    }
    _$AC(t12) {
        let i = x.get(t12.strings);
        return void 0 === i && x.set(t12.strings, i = new P(t12)), i;
    }
    M(t13) {
        d1(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t13)e === i.length ? i.push(s = new N(this.A(h1()), this.A(h1()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t14 = this._$AA.nextSibling, i8) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i8); t14 && t14 !== this._$AB;){
            const i = t14.nextSibling;
            t14.remove(), t14 = i;
        }
    }
    setConnected(t15) {
        var i;
        void 0 === this._$AM && (this._$Cg = t15, null === (i = this._$AP) || void 0 === i || i.call(this, t15));
    }
}
class S {
    constructor(t16, i9, s3, e2, o){
        this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t16, this.name = i9, this._$AM = e2, this.options = o, s3.length > 2 || "" !== s3[0] || "" !== s3[1] ? (this._$AH = Array(s3.length - 1).fill(new String), this.strings = s3) : this._$AH = T;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t17, i10 = this, s4, e3) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t17 = V(this, t17, i10, 0), n = !r1(t17) || t17 !== this._$AH && t17 !== b, n && (this._$AH = t17);
        else {
            const e = t17;
            let l, h;
            for(t17 = o[0], l = 0; l < o.length - 1; l++)h = V(this, e[s4 + l], i10, l), h === b && (h = this._$AH[l]), n || (n = !r1(h) || h !== this._$AH[l]), h === T ? t17 = T : t17 !== T && (t17 += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e3 && this.k(t17);
    }
    k(t18) {
        t18 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t18 ? t18 : "");
    }
}
class M extends S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    k(t19) {
        this.element[this.name] = t19 === T ? void 0 : t19;
    }
}
class k extends S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    k(t20) {
        t20 && t20 !== T ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
    }
}
class H extends S {
    constructor(t21, i11, s5, e4, o2){
        super(t21, i11, s5, e4, o2), this.type = 5;
    }
    _$AI(t22, i12 = this) {
        var s;
        if ((t22 = null !== (s = V(this, t22, i12, 0)) && void 0 !== s ? s : T) === b) return;
        const e = this._$AH, o = t22 === T && e !== T || t22.capture !== e.capture || t22.once !== e.once || t22.passive !== e.passive, n = t22 !== T && (e === T || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t22), this._$AH = t22;
    }
    handleEvent(t23) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t23) : this._$AH.handleEvent(t23);
    }
}
class I {
    constructor(t24, i13, s6){
        this.element = t24, this.type = 6, this._$AN = void 0, this._$AM = i13, this.options = s6;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t25) {
        V(this, t25);
    }
}
const L = {
    P: "$lit$",
    V: e1,
    L: o1,
    I: 1,
    N: C,
    R: E,
    D: u1,
    j: V,
    H: N,
    O: S,
    F: k,
    B: H,
    W: M,
    Z: I
}, R = window.litHtmlPolyfillSupport;
null == R || R(P, N), (null !== (t1 = globalThis.litHtmlVersions) && void 0 !== t1 ? t1 : globalThis.litHtmlVersions = []).push("2.0.1");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"hL6mY":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"10PCA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classMap", ()=>o1
);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const o1 = _directiveJs.directive(class extends _directiveJs.Directive {
    constructor(t4){
        var i;
        if (super(t4), t4.type !== _directiveJs.PartType.ATTRIBUTE || "class" !== t4.name || (null === (i = t4.strings) || void 0 === i ? void 0 : i.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t1) {
        return " " + Object.keys(t1).filter((i)=>t1[i]
        ).join(" ") + " ";
    }
    update(i, [s]) {
        var r, o;
        if (void 0 === this.st) {
            this.st = new Set, void 0 !== i.strings && (this.et = new Set(i.strings.join(" ").split(/\s/).filter((t)=>"" !== t
            )));
            for(const t2 in s)s[t2] && !(null === (r = this.et) || void 0 === r ? void 0 : r.has(t2)) && this.st.add(t2);
            return this.render(s);
        }
        const e = i.element.classList;
        this.st.forEach((t)=>{
            t in s || (e.remove(t), this.st.delete(t));
        });
        for(const t3 in s){
            const i = !!s[t3];
            i === this.st.has(t3) || (null === (o = this.et) || void 0 === o ? void 0 : o.has(t3)) || (i ? (e.add(t3), this.st.add(t3)) : (e.remove(t3), this.st.delete(t3)));
        }
        return _litHtmlJs.noChange;
    }
});

},{"../lit-html.js":"03dEp","../directive.js":"bE3MM","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"bE3MM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Directive", ()=>i
);
parcelHelpers.export(exports, "PartType", ()=>t1
);
parcelHelpers.export(exports, "directive", ()=>e1
);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const t1 = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, e1 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        })
;
class i {
    constructor(t){
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t2, e, i1) {
        this._$Ct = t2, this._$AM = e, this._$Ci = i1;
    }
    _$AS(t3, e2) {
        return this.update(t3, e2);
    }
    update(t4, e3) {
        return this.render(...e3);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"27H3o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormHandler", ()=>FormHandler
);
parcelHelpers.export(exports, "formTemplate", ()=>formTemplate
);
var _litHtml = require("lit-html");
const minuteSeconds = /^\d+:[0-5]\d$/;
class FormHandler {
    constructor(){
    }
    validate() {
        this.titleInput = document.getElementById("input-title");
        this.activities = document.getElementById("input-activities");
        this.tutorials = document.getElementById("input-tutorials");
        this.assignments = document.getElementById("input-assignments");
        this.factor = document.getElementById("input-factor");
        this.assignmentTime = document.getElementById("input-assignment-time");
        this.videos = document.getElementById("input-videos");
        console.log(this.titleInput, this.activities, this.tutorials, this.assignments, this.factor, this.videos);
        let errors = [];
        console.log("titleInput", this.titleInput.value);
        console.log("activities", this.activities.value);
        console.log("tutorials", this.tutorials.value);
        console.log("assignments", this.assignments.value);
        console.log("factor", this.factor.value);
        console.log("videos", this.videos.value);
        console.log("assignmentTime", this.assignmentTime.value);
        [
            this.titleInput
        ].forEach((ele)=>{
            let title = ele.value;
            if (title.trim().length == 0) errors.push(`- Title is required`);
        });
        [
            this.activities,
            this.tutorials,
            this.assignments,
            this.assignmentTime
        ].forEach((ele)=>{
            let val = parseInt(ele.value, 10);
            if (Number.isInteger(val) && val >= 0) ;
            else errors.push(`- '${ele.dataset.name}' should be a non-negative integer`);
        });
        [
            this.factor
        ].forEach((ele)=>{
            let val = parseFloat(ele.value);
            if (Number.isFinite(val) && val >= 0) ;
            else errors.push(`- '${ele.dataset.name}' should be a non-negative number`);
        });
        let value = this.videos.value;
        let arr = value.trim().split(/\s/ig);
        for(let i = 0; i < arr.length; i++)if (arr[i].length > 0 && !arr[i].match(minuteSeconds)) errors.push(`- '${arr[i]}' is not a valid video time`);
        return errors;
    }
    /**
    name = "Sample Week 1";
    factor = 1;
    solvableTime = 20;

    solvable = {
      activities: { total: 3, left: 3 },
      tutorials: { total: 2, left: 2 },
      practice: { total: 1, left: 1 },
      graded: { total: 1, left: 1 },
    };

    videos = [{ m: 40, s: 10, seen: false }];
   */ submit() {
        let input = {
            name: this.titleInput.value.trim(),
            factor: parseFloat(this.factor.value),
            solvableTime: parseInt(this.assignmentTime.value, 10),
            solvable: {
                activities: {
                    total: parseInt(this.activities.value, 10),
                    left: 3
                },
                tutorials: {
                    total: parseInt(this.tutorials.value, 10),
                    left: 2
                },
                assignments: {
                    total: parseInt(this.assignments.value, 10),
                    left: 1
                }
            },
            videos: []
        };
        Object.keys(input.solvable).forEach((key)=>{
            input.solvable[key].left = input.solvable[key].total;
        });
        let value = this.videos.value;
        let arr = value.trim().split(/\s/ig);
        for(let i = 0; i < arr.length; i++){
            if (arr[i].length === 0) continue;
            let split = arr[i].split(':');
            input.videos.push({
                m: parseInt(split[0], 10),
                s: parseInt(split[1], 10),
                seen: false
            });
        }
        return input;
    }
}
function formTemplate(visible) {
    return _litHtml.html`
    <div ?hidden=${!visible} id="form-enclosure" class="container items-center bg-white my-5 better-shadow">
    <div class="rounded-lg">

      <div class="py-4 px-5 mx-auto border-b-2 border-gray-600">
        <h2 class="text-2xl font-bold text-black lg:text-x lg:mr-8">Add a new week</h2>
      </div>

      <form id="add-form" class="w-full px-10 pt-2">
        <div class="w-full p-4 pb-6 mx-auto">
          <div class="flex flex-wrap -mx-3">
            <div class="w-full px-3 mb-3">
              <label class="basic-label tracking-wide text-left" for="input-title">
                Title
              </label>
              <input id='input-title' required class="mb-3 basic-input" type="text" placeholder="Maths Week 1">
            </div>
          </div>

          <div class="flex justify-evenly mb-6 flex-wrap">
            <div class="px-1 w-1/3">
              <label class="basic-label text-center" for="input-activities">
                Activities
              </label>
              <input id='input-activities' data-name='Activities' required class="text-center basic-input"
                id="grid-first-name" type="number" min="0" step="1" placeholder="1">
            </div>

            <div class="px-1 w-1/3">
              <label class="basic-label text-center" for="input-tutorials">
                Tutorials
              </label>
              <input id='input-tutorials' data-name='Tutorials' required class="text-center basic-input"
                id="grid-first-name" type="number" min="0" step="1" placeholder="1">
            </div>

            <div class="px-1 w-1/3">
              <label class="basic-label text-center" for="input-assignments">
                Assignments
              </label>
              <input id='input-assignments' data-name='Assignments' required class="text-center basic-input"
                id="grid-first-name" type="number" min="0" step="1" placeholder="2">
            </div>

            <div class="px-1 w-1/2">
              <label class="basic-label text-center" for="input-factor">
                Factor
              </label>
              <input id='input-factor' data-name='Factor' required class="text-center basic-input" id="grid-first-name"
                type="number" min="0.05" step="0.05" placeholder="0.75">
            </div>

            <div class="px-1 w-1/2">
              <label class="basic-label text-center" for="input-assignment-time">
                Time per Assignment
              </label>
              <input id='input-assignment-time' data-name='Assignment Time' required class="text-center basic-input"
                id="grid-first-name" type="number" min="0" step="5" placeholder="30">
            </div>
          </div>

          <label>
            <span class="block mb-2 text-xd font-bold tracking-wide text-gray-700 uppercase">Video Lengths</span>
            <textarea id='input-videos' class="basic-input mt-1 mb-3 form-textarea" rows="4"
              placeholder="10:59  12:22"></textarea>
          </label>

          <div class="text-center">
            <button type="submit"
              class="w-full px-6 py-3 text-base font-medium leading-6 text-white bg-lime-500 better-button">
              Add
            </button>
          </div>
        </div>

      </form>
    </div>
  </div>
  `;
}

},{"lit-html":"03dEp","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"4JigK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Week", ()=>Week
);
parcelHelpers.export(exports, "templateFunc", ()=>templateFunc
);
var _litHtml = require("lit-html");
var _classMap = require("lit-html/directives/class-map");
var _uuid = require("uuid");
const progress = [
    "bg-red-500",
    "bg-red-400",
    "bg-red-300",
    "bg-red-200",
    "bg-amber-400",
    "bg-amber-300",
    "bg-amber-200",
    "bg-lime-200",
    "bg-lime-300",
    "bg-lime-400",
    "bg-lime-500"
];
class Week {
    constructor(input){
        this.id = 'uuid';
        this.name = "Sample Week 1";
        this.factor = 1;
        this.solvableTime = 20;
        this.solvable = {
            activities: {
                total: 3,
                left: 3
            },
            tutorials: {
                total: 2,
                left: 2
            },
            assignments: {
                total: 1,
                left: 1
            }
        };
        this.videos = [
            {
                m: 40,
                s: 10,
                seen: false
            }
        ];
        this.lastChangeTime = 123123;
        this.id = input.hasOwnProperty('id') ? input.id : _uuid.v4();
        this.name = input.name;
        this.factor = parseFloat(input.factor);
        this.solvableTime = input.solvableTime;
        this.videos = [];
        this.videos = input.videos.map((video)=>{
            return {
                m: parseInt(video.m, 10),
                s: parseInt(video.s, 10),
                seen: Boolean(video.seen)
            };
        });
        this.solvable = {
            activities: {
                total: parseInt(input.solvable.activities.total, 10),
                left: parseInt(input.solvable.activities.left, 10)
            },
            tutorials: {
                total: parseInt(input.solvable.tutorials.total, 10),
                left: parseInt(input.solvable.tutorials.left, 10)
            },
            assignments: {
                total: parseInt(input.solvable.assignments.total, 10),
                left: parseInt(input.solvable.assignments.left, 10)
            }
        };
        this.hidden = input.hasOwnProperty('hidden') ? input.hidden : false;
        this.locked = input.hasOwnProperty('locked') ? input.locked : false;
        this.deleted = input.hasOwnProperty('deleted') ? input.deleted : false;
        this.menuVisible = false;
        this.updateLastChangeTime(false);
        console.log(this);
    }
    setUpdateFunction(fn) {
        this.updateMe = fn;
    }
    setAlertFunction(fn1) {
        this.alertUser = fn1;
    }
    setDeleteFunction(fn2) {
        this.deleteMe = fn2;
    }
    updateLastChangeTime(someProgress) {
        this.lastChangeTime = Date.now();
        if (this.updateMe) this.updateMe(someProgress && this.isDone());
    }
    flipVideo(i3) {
        if (this.videos[i3].seen) this.markVideoLeft(i3);
        else this.markVideoSeen(i3);
    }
    markVideoSeen(i1) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (this.videos[i1].seen) {
            this.alertUser('error', "Already done");
            return;
        }
        this.videos[i1].seen = true;
        this.updateLastChangeTime(true);
    }
    markVideoLeft(i2) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (!this.videos[i2].seen) {
            this.alertUser('error', "Already done");
            return;
        }
        this.videos[i2].seen = false;
        this.updateLastChangeTime(false);
    }
    markSolvableDone(type2) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (this.solvable[type2].left <= 0) {
            this.alertUser('error', "Already done");
            return;
        }
        this.solvable[type2].left -= 1;
        this.updateLastChangeTime(true);
    }
    markSolvableNotDone(type1) {
        if (this.locked) {
            this.alertUser('error', "Please unlock before making any changes");
            return;
        }
        if (this.solvable[type1].left + 1 > this.solvable[type1].total) {
            this.alertUser('error', "Already done");
            return;
        }
        this.solvable[type1].left += 1;
        this.updateLastChangeTime(false);
    }
    validateSelf() {
    }
    getTotalMinutes() {
        let m = 0;
        let s = 0;
        this.videos.forEach((video)=>{
            m += video.m;
            s += video.s;
        });
        m += s / 60;
        let solvableCount = Object.entries(this.solvable).reduce((prev, [_key, data])=>{
            return prev + data.total;
        }, 0);
        m += this.solvableTime * solvableCount;
        m /= this.factor * 60;
        return m;
    }
    getElapsedMinutes() {
        let m = 0;
        let s = 0;
        this.videos.forEach((video)=>{
            if (video.seen) {
                m += video.m;
                s += video.s;
            }
        });
        m += s / 60;
        let solvableCount = Object.entries(this.solvable).reduce((prev, [_key, data])=>{
            return prev + (data.total - data.left);
        }, 0);
        m += this.solvableTime * solvableCount;
        m /= this.factor * 60;
        return m;
    }
    getPercentage(total1, left1) {
        return 100 * left1 / total1;
    }
    isDone() {
        let _projected = this.getTotalMinutes();
        let _elasped = this.getElapsedMinutes();
        let _percentage = this.getPercentage(_projected, _elasped);
        return Math.floor(_percentage / 10) == 10;
    }
    addEventListeners() {
        let titles = [
            'Activities',
            'Tutorials',
            'Assignments'
        ];
        titles.forEach((type)=>{
            let ttype = type.toLowerCase();
            if (this.solvable[ttype].total == 0) return;
            let downBtn = document.getElementById(`${this.id}-${ttype}-minus`);
            let upBtn = document.getElementById(`${this.id}-${ttype}-plus`);
            upBtn.addEventListener('click', ()=>{
                this.markSolvableDone(ttype);
            });
            downBtn.addEventListener('click', ()=>{
                this.markSolvableNotDone(ttype);
            });
        });
        document.getElementById(`${this.id}-menu`).addEventListener('click', ()=>{
            clearTimeout(this.hideMenuTimer);
            this.menuVisible = !this.menuVisible;
            this.updateLastChangeTime(false);
            if (this.menuVisible) this.hideMenuTimer = setTimeout(()=>{
                this.menuVisible = !this.menuVisible;
                this.updateLastChangeTime(false);
            }, 5000);
        });
        document.getElementById(`${this.id}-hide`).addEventListener('click', ()=>{
            clearTimeout(this.hideMenuTimer);
            this.menuVisible = !this.menuVisible;
            this.hidden = !this.hidden;
            this.updateLastChangeTime(false);
        });
        document.getElementById(`${this.id}-lock`).addEventListener('click', ()=>{
            clearTimeout(this.hideMenuTimer);
            this.menuVisible = !this.menuVisible;
            this.locked = !this.locked;
            this.updateLastChangeTime(false);
        });
        document.getElementById(`${this.id}-delete`).addEventListener('click', async ()=>{
            clearTimeout(this.hideMenuTimer);
            this.menuVisible = !this.menuVisible;
            if (this.locked) {
                this.alertUser('error', "Please unlock before making any changes");
                return;
            }
            let promise = window.confirm("Do you really want to delete this ?");
            let confirmed = await promise;
            if (confirmed) {
                this.deleted = true;
                this.deleteMe();
            } else this.alertUser('warning', "Please be careful");
        });
        this.videos.forEach((_video, i)=>{
            let btn = document.getElementById(`${this.id}-video-${i}`);
            btn.addEventListener('click', ()=>{
                this.flipVideo(i);
            });
        });
    }
    static Validate(input1) {
        if (!input1.id || !input1.name) throw new Error(`${input1.id} ${input1.name}`);
        if (!Number.isFinite(input1.factor) || !Number.isInteger(input1.solvableTime)) throw new Error();
        input1.videos.forEach((video)=>{
            if (!Number.isInteger(video.m) || !Number.isInteger(video.s)) throw new Error();
            if (video.s < 0 || video.s >= 60) throw new Error();
            if (video.m < 0) throw new Error();
        });
        [
            "activities",
            "tutorials",
            "assignments"
        ].forEach((key)=>{
            let total = input1.solvable[key].total;
            let left = input1.solvable[key].left;
            if (!Number.isInteger(total) || !Number.isInteger(left)) throw new Error();
            if (total < 0 || left < 0 || left > total) throw new Error();
        });
    }
    static Parse(input2) {
        try {
            Week.Validate(input2);
            return new Week(input2);
        } catch (e) {
            return null;
        }
    }
}
function templateFunc(week) {
    if (week.deleted) return _litHtml.html``;
    let id = week.id;
    let _projected = week.getTotalMinutes();
    let _elasped = week.getElapsedMinutes();
    let _percentage = week.getPercentage(_projected, _elasped);
    let videos = [];
    week.videos.forEach((video, i)=>{
        const btnClass = {
            'btnDown-valid': video.seen,
            'btnUp-valid': !video.seen
        };
        const inProgress = {
            'in-progress': !video.seen,
            'done': video.seen
        };
        videos.push(_litHtml.html`
    <div class="video-time px-0">
      <p class="video-text better-shadow ${_classMap.classMap(inProgress)}">${video.m.toFixed(0).padStart(2, "0")}:${video.s.toFixed(0).padStart(2, "0")}</p>
      <button class="video-btn ${_classMap.classMap(btnClass)}" id="${id}-video-${i}">${video.seen ? '-' : '+'}</button>
    </div>
  `);
    });
    let _solvable = week.solvable;
    let solvableData = [];
    solvableData.push({
        title: 'Activities',
        done: _solvable.activities.total - _solvable.activities.left,
        total: _solvable.activities.total
    });
    solvableData.push({
        title: 'Tutorials',
        done: _solvable.tutorials.total - _solvable.tutorials.left,
        total: _solvable.tutorials.total
    });
    solvableData.push({
        title: 'Assignments',
        done: _solvable.assignments.total - _solvable.assignments.left,
        total: _solvable.assignments.total
    });
    let solvables = [];
    solvableData.forEach((data)=>{
        if (data.total == 0) return;
        const btnUpValid = data.total > data.done;
        const btnDownValid = data.done > 0;
        const btnUp = {
            [btnUpValid ? 'btnUp-valid' : 'btnUp-invalid']: true
        };
        const btnDown = {
            [btnDownValid ? 'btnDown-valid' : 'btnDown-invalid']: true
        };
        const inProgress = {
            'in-progress': btnUpValid,
            'done': !btnUpValid && btnDownValid
        };
        solvables.push(_litHtml.html`
    <div class="video-time act-time w-1/5">
      <h2 class="act-text ${_classMap.classMap(inProgress)}">${data.title} : ${data.done}/${data.total}</h2>
      <div class="flex justify-around mt-0.5">
        <button ?hidden=${!btnUpValid} class="solvable-btn mr-0.5 ${_classMap.classMap(btnUp)}" id="${id}-${data.title.toLowerCase()}-plus">+</button>
        <button ?hidden=${!btnDownValid} class="solvable-btn ml-0.5 ${_classMap.classMap(btnDown)}" id="${id}-${data.title.toLowerCase()}-minus">-</button>
      </div>
    </div>


    <div class="video-time act-time w-1/5">
    <p class="dispay-container">
      <span class="dispay-label">${data.title}: </span>
      <span class="dispay-data">${data.done}/${data.total}</span>
    </p>
    <div class="flex justify-around mt-0.5">
      <button ?hidden=${!btnUpValid} class="solvable-btn mr-0.5 ${_classMap.classMap(btnUp)}" id="${id}-2-${data.title.toLowerCase()}-plus">+</button>
      <button ?hidden=${!btnDownValid} class="solvable-btn ml-0.5 ${_classMap.classMap(btnDown)}" id="${id}-2-${data.title.toLowerCase()}-minus">-</button>
    </div>
  </div>
  `);
    });
    let progressColor = {
        [progress[Math.floor(_percentage / 10)]]: true
    };
    const animatedBorderClassMap = {
        'gradient-border': Math.floor(_percentage / 10) == 10
    };
    return _litHtml.html`
  <div class="container items-center bg-white my-4 better-shadow week-overall ${_classMap.classMap(animatedBorderClassMap)}">
    <div class="rounded-lg">

      <!-- Heading -->
      <div class="week-heading-draggable pt-2 px-5 mx-auto md:items-center md:flex-row justify-between bg-gray-800">
        <div class="week-heading-draggable w-full border-b-2 border-white justify-between inline-flex">
          <div class="week-heading-draggable inline-flex items-center">
            <h2 class="week-heading-draggable pb-1 text-2xl font-bold text-white lg:text-x lg:mr-8">
              ${week.name}
            </h2>
          </div>
          <div class="week-heading-draggable inline-flex items-center move-up">
            <button class="week-heading-draggable rounded-button bg-white" id="${id}-menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="4-6 w-4" fill="none" viewBox="0 0 24 24" stroke="black">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>

            <div ?hidden=${!week.menuVisible}>
              <div class="dropdown-menu absolute w-60 shadow-lg bg-white divide-x divide-gray-100 right-10 grid grid-cols-3">
                <a class="text-gray-900 bg-white" id="${id}-lock"> ${week.locked ? 'Unlock' : 'Lock'} </a>
                <a class="text-gray-900 bg-white" id="${id}-hide"> ${week.hidden ? 'Unhide' : 'Hide'} </a>
                <a class="text-white bg-red-800" id="${id}-delete">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div ?hidden=${week.hidden} class="pt-2 px-10 mx-auto md:items-center md:flex-row justify-between ${_classMap.classMap(progressColor)}">
        <div class="pb-1 flex justify-between items-center border-b-2 border-gray-600">
          <p class="dispay-container">
            <span class="dispay-label justify-start">Projected:</span>
            <span class="dispay-data">${_projected.toFixed(1)}h</span>
          </p>

          <p class="dispay-container justify-center">
            <span class="dispay-label">Elapsed:</span>
            <span class="dispay-data">${_elasped.toFixed(1)}h</span>
          </p>

          <p class="dispay-container justify-end">
            <span class="dispay-label">Done:</span>
            <span class="dispay-data">${_percentage.toFixed(2)}%</span>
          </p>
        </div>
      </div>

      <!-- Videos -->
      <div ?hidden=${week.hidden} class="pt-2 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="w-full border-b-2 border-gray-600">
          <h2 class="text-xl font-bold text-black lg:text-x lg:mr-8">
            Videos
          </h2>
          <div class="flex justify-evenly flex-wrap pb-3">
            ${videos}
          </div>
        </div>
      </div>

      <!-- Solvable -->
      <div ?hidden=${week.hidden} class="pt-2 pb-3 bt-5 px-5 mx-auto md:items-center md:flex-row justify-between">
        <div class="w-full">
          <h2 class="text-xl font-bold text-black lg:text-x lg:mr-8">
            Solvable
          </h2>

          <div class="flex justify-around px-5">
            ${solvables}
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

},{"lit-html":"03dEp","lit-html/directives/class-map":"10PCA","uuid":"71Yup","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"71Yup":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>_v1JsDefault.default
);
parcelHelpers.export(exports, "v3", ()=>_v3JsDefault.default
);
parcelHelpers.export(exports, "v4", ()=>_v4JsDefault.default
);
parcelHelpers.export(exports, "v5", ()=>_v5JsDefault.default
);
parcelHelpers.export(exports, "NIL", ()=>_nilJsDefault.default
);
parcelHelpers.export(exports, "version", ()=>_versionJsDefault.default
);
parcelHelpers.export(exports, "validate", ()=>_validateJsDefault.default
);
parcelHelpers.export(exports, "stringify", ()=>_stringifyJsDefault.default
);
parcelHelpers.export(exports, "parse", ()=>_parseJsDefault.default
);
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":"e8ylU","./v3.js":"frZxN","./v4.js":"5E6JL","./v5.js":"6bM6p","./nil.js":"9LNgv","./version.js":"3WakS","./validate.js":"dHvqT","./stringify.js":"daxio","./parse.js":"3yr8P","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"e8ylU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js"); // **`v1()` - Generate time-based UUID**
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;
var _clockseq; // Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || new Array(16);
    options = options || {
    };
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        var seedBytes = options.random || (options.rng || _rngJsDefault.default)();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 1,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 16383;
     // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
     // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    var tl = ((msecs & 268435455) * 10000 + nsecs) % 4294967296;
    b[i++] = tl >>> 24 & 255;
    b[i++] = tl >>> 16 & 255;
    b[i++] = tl >>> 8 & 255;
    b[i++] = tl & 255; // `time_mid`
    var tmh = msecs / 4294967296 * 10000 & 268435455;
    b[i++] = tmh >>> 8 & 255;
    b[i++] = tmh & 255; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 15 | 16; // include version
    b[i++] = tmh >>> 16 & 255; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 128; // `clock_seq_low`
    b[i++] = clockseq & 255; // `node`
    for(var n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || _stringifyJsDefault.default(b);
}
exports.default = v1;

},{"./rng.js":"g4zJs","./stringify.js":"daxio","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"g4zJs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
        if (!getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return getRandomValues(rnds8);
}
exports.default = rng;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"daxio":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex.push((i + 256).toString(16).substr(1));
function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!_validateJsDefault.default(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"dHvqT","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"dHvqT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === 'string' && _regexJsDefault.default.test(uuid);
}
exports.default = validate;

},{"./regex.js":"dFv1m","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"dFv1m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"frZxN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _md5Js = require("./md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
var v3 = _v35JsDefault.default('v3', 48, _md5JsDefault.default);
exports.default = v3;

},{"./v35.js":"gKKu1","./md5.js":"aPg0I","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"gKKu1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS
);
parcelHelpers.export(exports, "URL", ()=>URL
);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    var bytes = [];
    for(var i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.default = function(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        if (typeof value === 'string') value = stringToBytes(value);
        if (typeof namespace === 'string') namespace = _parseJsDefault.default(namespace);
        if (namespace.length !== 16) throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        var bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 15 | version;
        bytes[8] = bytes[8] & 63 | 128;
        if (buf) {
            offset = offset || 0;
            for(var i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return _stringifyJsDefault.default(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {
    } // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
};

},{"./stringify.js":"daxio","./parse.js":"3yr8P","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"3yr8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!_validateJsDefault.default(uuid)) throw TypeError('Invalid UUID');
    var v;
    var arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 255;
    arr[2] = v >>> 8 & 255;
    arr[3] = v & 255; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 255; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 255; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 255; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
    arr[11] = v / 4294967296 & 255;
    arr[12] = v >>> 24 & 255;
    arr[13] = v >>> 16 & 255;
    arr[14] = v >>> 8 & 255;
    arr[15] = v & 255;
    return arr;
}
exports.default = parse;

},{"./validate.js":"dHvqT","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"aPg0I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ function md5(bytes) {
    if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(var i = 0; i < msg.length; ++i)bytes[i] = msg.charCodeAt(i);
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    var output = [];
    var length32 = input.length * 32;
    var hexTab = '0123456789abcdef';
    for(var i = 0; i < length32; i += 8){
        var x = input[i >> 5] >>> i % 32 & 255;
        var hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 128 << len % 32;
    x[getOutputLength(len) - 1] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for(var i = 0; i < x.length; i += 16){
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) return [];
    var length8 = input.length * 8;
    var output = new Uint32Array(getOutputLength(length8));
    for(var i = 0; i < length8; i += 8)output[i >> 5] |= (input[i / 8] & 255) << i % 32;
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    var lsw = (x & 65535) + (y & 65535);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports.default = md5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"5E6JL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
function v4(options, buf, offset) {
    options = options || {
    };
    var rnds = options.random || (options.rng || _rngJsDefault.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(var i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return _stringifyJsDefault.default(rnds);
}
exports.default = v4;

},{"./rng.js":"g4zJs","./stringify.js":"daxio","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"6bM6p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
var v5 = _v35JsDefault.default('v5', 80, _sha1JsDefault.default);
exports.default = v5;

},{"./v35.js":"gKKu1","./sha1.js":"iPKMU","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"iPKMU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    var K = [
        1518500249,
        1859775393,
        2400959708,
        3395469782
    ];
    var H = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
    ];
    if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(var i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(128);
    var l = bytes.length / 4 + 2;
    var N = Math.ceil(l / 16);
    var M = new Array(N);
    for(var _i = 0; _i < N; ++_i){
        var arr = new Uint32Array(16);
        for(var j = 0; j < 16; ++j)arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
        M[_i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
    for(var _i2 = 0; _i2 < N; ++_i2){
        var W = new Uint32Array(80);
        for(var t = 0; t < 16; ++t)W[t] = M[_i2][t];
        for(var _t = 16; _t < 80; ++_t)W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        for(var _t2 = 0; _t2 < 80; ++_t2){
            var s = Math.floor(_t2 / 20);
            var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 255,
        H[0] >> 16 & 255,
        H[0] >> 8 & 255,
        H[0] & 255,
        H[1] >> 24 & 255,
        H[1] >> 16 & 255,
        H[1] >> 8 & 255,
        H[1] & 255,
        H[2] >> 24 & 255,
        H[2] >> 16 & 255,
        H[2] >> 8 & 255,
        H[2] & 255,
        H[3] >> 24 & 255,
        H[3] >> 16 & 255,
        H[3] >> 8 & 255,
        H[3] & 255,
        H[4] >> 24 & 255,
        H[4] >> 16 & 255,
        H[4] >> 8 & 255,
        H[4] & 255
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"9LNgv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = '00000000-0000-0000-0000-000000000000';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"3WakS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function version(uuid) {
    if (!_validateJsDefault.default(uuid)) throw TypeError('Invalid UUID');
    return parseInt(uuid.substr(14, 1), 16);
}
exports.default = version;

},{"./validate.js":"dHvqT","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"aE7be":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WeekManager", ()=>WeekManager
);
var _fs = require("@tauri-apps/api/fs");
var _path = require("@tauri-apps/api/path");
var _litHtml = require("lit-html");
var _week = require("./week");
var _dragula = require("dragula");
var _dragulaDefault = parcelHelpers.interopDefault(_dragula);
var _canvasConfetti = require("canvas-confetti");
var _canvasConfettiDefault = parcelHelpers.interopDefault(_canvasConfetti);
const BASE_DIR = ".tauri_progres";
const DATA_FILE_NAME = BASE_DIR + "/data.json";
class WeekManager {
    constructor(alerts){
        this.weeksContainer = document.getElementById("weeks");
        this.weeks = [];
        this.htmlWeeks = [];
        this.alerts = alerts;
        this.lastSaveTime = Date.now();
        this.lastUpdateTime = this.lastSaveTime;
        setInterval(async ()=>{
            if (this.lastUpdateTime > this.lastSaveTime) {
                this.alerts.show('info', "Saving file", 10000);
                await this.saveFile();
                this.lastSaveTime = Date.now();
                this.alerts.hide();
            }
        }, 5000);
        this.registerDraggable();
    }
    registerWeek(week1) {
        let htmlcontainer = document.createElement('div');
        htmlcontainer.id = week1.id;
        this.htmlWeeks.unshift(htmlcontainer);
        this.weeks.unshift(week1);
        this.weeksContainer.prepend(htmlcontainer);
        let updateFunction = (done)=>{
            console.log('rstart', Date.now());
            if (done) this.launchConfetti();
            _litHtml.render(_week.templateFunc(week1), htmlcontainer);
            this.lastUpdateTime = Date.now();
            console.log('rend', Date.now());
        };
        let alertFunction = (type, message)=>{
            this.alerts.show(type, message, 5000);
        };
        let deleteFucntion = ()=>{
            updateFunction(false);
            this.weeksContainer.removeChild(htmlcontainer);
        };
        updateFunction(false);
        week1.addEventListeners();
        week1.setUpdateFunction(updateFunction);
        week1.setAlertFunction(alertFunction);
        week1.setDeleteFunction(deleteFucntion);
    }
    createNewWeek(input) {
        if (input.deleted) return null;
        let week = new _week.Week(input);
        this.registerWeek(week);
        return week;
    }
    launchConfetti() {
        let randCord = ()=>Math.random() * (1.1 - -0.1) + -0.1
        ;
        let duration = 5000;
        let animationEnd = Date.now() + duration;
        let defaults = {
            startVelocity: 50,
            spread: 120,
            zIndex: 0
        };
        let interval = setInterval(function() {
            let timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            let particleCount = 100 * (timeLeft / duration);
            _canvasConfettiDefault.default(Object.assign({
            }, defaults, {
                particleCount,
                origin: {
                    x: randCord(),
                    y: 0.1 + randCord()
                }
            }));
            _canvasConfettiDefault.default(Object.assign({
            }, defaults, {
                particleCount,
                origin: {
                    x: randCord(),
                    y: 0.1 + randCord()
                }
            }));
        }, 250);
    }
    registerDraggable() {
        let drake = _dragulaDefault.default([
            this.weeksContainer
        ], {
            copy: false,
            removeOnSpill: false,
            slideFactorY: 25,
            moves: (_el, _target, source, _sibling)=>{
                return source.classList.contains("week-heading-draggable");
            }
        });
        drake.on("drop", (el, _target, _source, sibling)=>{
            let weekThatWasMovedIndex = this.weeks.findIndex((week, index)=>{
                return week.id == el.id;
            });
            let weekThatWasMoved = this.weeks[weekThatWasMovedIndex];
            this.weeks.splice(weekThatWasMovedIndex, 1);
            if (sibling == null) this.weeks.push(weekThatWasMoved);
            else {
                let weekThatComesAfterThis = this.weeks.findIndex((week, index)=>{
                    return week.id == sibling.id;
                });
                this.weeks.splice(weekThatComesAfterThis, 0, weekThatWasMoved);
            }
            this.saveFile();
        });
    }
    async saveFile() {
        try {
            let homeDir = await _path.homeDir();
            let path = homeDir + DATA_FILE_NAME;
            let text = await _fs.writeFile({
                contents: JSON.stringify(this.weeks, null, 2),
                path
            });
        } catch (e) {
            console.log(e);
        }
    }
    async loadLocal() {
        let text;
        try {
            let homeDir = await _path.homeDir();
            let file = homeDir + DATA_FILE_NAME;
            text = await _fs.readTextFile(file);
            console.log(text);
        } catch (e) {
            throw e;
        }
        let weeks = JSON.parse(text);
        console.log("weeks", weeks);
        for(let i = weeks.length - 1; i > -1; i--){
            console.log("week", weeks[i]);
            this.createNewWeek(weeks[i]);
        }
    }
    static async ensureFileExists() {
        // Create or read folder
        let homeDir;
        try {
            homeDir = await _path.homeDir();
            let dataDir = homeDir + BASE_DIR;
            let created = await _fs.createDir(dataDir);
            console.log("Created", created);
        } catch (e) {
            console.log(e);
            if (typeof e == 'string' && e.includes("os error 17")) ;
            else throw e;
        }
        // Folder now exists
        try {
            let homeDir = await _path.homeDir();
            let file = homeDir + DATA_FILE_NAME;
            let text = await _fs.readTextFile(file);
            console.log(text);
        } catch (e1) {
            console.log(e1);
            if (typeof e1 == 'string' && e1.includes("os error 2")) // no file exists, create now
            try {
                let homeDir = await _path.homeDir();
                let path = homeDir + DATA_FILE_NAME;
                let text = await _fs.writeFile({
                    contents: "{}",
                    path
                });
                console.log(">>>>>>>>>>>>>>>", "EXISTING", text);
            } catch (error) {
                throw error;
            }
            else throw e1;
        }
    }
}

},{"@tauri-apps/api/fs":"hVrp3","@tauri-apps/api/path":"iruOM","lit-html":"03dEp","./week":"4JigK","dragula":"gc2y9","canvas-confetti":"kWyKR","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"hVrp3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseDirectory", ()=>BaseDirectory1
);
parcelHelpers.export(exports, "Dir", ()=>BaseDirectory1
);
parcelHelpers.export(exports, "readTextFile", ()=>readTextFile
);
parcelHelpers.export(exports, "readBinaryFile", ()=>readBinaryFile
);
parcelHelpers.export(exports, "writeFile", ()=>writeFile
);
parcelHelpers.export(exports, "writeBinaryFile", ()=>writeBinaryFile
);
parcelHelpers.export(exports, "readDir", ()=>readDir
);
parcelHelpers.export(exports, "createDir", ()=>createDir
);
parcelHelpers.export(exports, "removeDir", ()=>removeDir
);
parcelHelpers.export(exports, "copyFile", ()=>copyFile
);
parcelHelpers.export(exports, "removeFile", ()=>removeFile
);
parcelHelpers.export(exports, "renameFile", ()=>renameFile
);
// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/**
 * Access the file system.
 *
 * This package is also accessible with `window.__TAURI__.fs` when `tauri.conf.json > build > withGlobalTauri` is set to true.
 *
 * The APIs must be allowlisted on `tauri.conf.json`:
 * ```json
 * {
 *   "tauri": {
 *     "allowlist": {
 *       "fs": {
 *         "all": true, // enable all FS APIs
 *         "readTextFile": true,
 *         "readBinaryFile": true,
 *         "writeFile": true,
 *         "writeBinaryFile": true,
 *         "readDir": true,
 *         "copyFile": true,
 *         "createDir": true,
 *         "removeDir": true,
 *         "removeFile": true,
 *         "renameFile": true
 *       }
 *     }
 *   }
 * }
 * ```
 * It is recommended to allowlist only the APIs you use for optimal bundle size and security.
 * @module
 */ var _tauri = require("./helpers/tauri");
var BaseDirectory1;
(function(BaseDirectory) {
    BaseDirectory[BaseDirectory["Audio"] = 1] = "Audio";
    BaseDirectory[BaseDirectory["Cache"] = 2] = "Cache";
    BaseDirectory[BaseDirectory["Config"] = 3] = "Config";
    BaseDirectory[BaseDirectory["Data"] = 4] = "Data";
    BaseDirectory[BaseDirectory["LocalData"] = 5] = "LocalData";
    BaseDirectory[BaseDirectory["Desktop"] = 6] = "Desktop";
    BaseDirectory[BaseDirectory["Document"] = 7] = "Document";
    BaseDirectory[BaseDirectory["Download"] = 8] = "Download";
    BaseDirectory[BaseDirectory["Executable"] = 9] = "Executable";
    BaseDirectory[BaseDirectory["Font"] = 10] = "Font";
    BaseDirectory[BaseDirectory["Home"] = 11] = "Home";
    BaseDirectory[BaseDirectory["Picture"] = 12] = "Picture";
    BaseDirectory[BaseDirectory["Public"] = 13] = "Public";
    BaseDirectory[BaseDirectory["Runtime"] = 14] = "Runtime";
    BaseDirectory[BaseDirectory["Template"] = 15] = "Template";
    BaseDirectory[BaseDirectory["Video"] = 16] = "Video";
    BaseDirectory[BaseDirectory["Resource"] = 17] = "Resource";
    BaseDirectory[BaseDirectory["App"] = 18] = "App";
    BaseDirectory[BaseDirectory["Current"] = 19] = "Current";
})(BaseDirectory1 || (BaseDirectory1 = {
}));
/**
 * Reads a file as UTF-8 encoded string.
 *
 * @param filePath Path to the file.
 * @param options Configuration object.
 * @returns A promise resolving to the file content as a UTF-8 encoded string.
 */ async function readTextFile(filePath, options = {
}) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Fs',
        message: {
            cmd: 'readTextFile',
            path: filePath,
            options
        }
    });
}
/**
 * Reads a file as byte array.
 *
 * @param filePath Path to the file.
 * @param options Configuration object.
 * @returns A promise resolving to the file bytes array.
 */ async function readBinaryFile(filePath, options = {
}) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Fs',
        message: {
            cmd: 'readBinaryFile',
            path: filePath,
            options
        }
    });
}
/**
 * Writes a text file.
 *
 * @param file File configuration object.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function writeFile(file, options = {
}) {
    if (typeof options === 'object') Object.freeze(options);
    if (typeof file === 'object') Object.freeze(file);
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Fs',
        message: {
            cmd: 'writeFile',
            path: file.path,
            contents: file.contents,
            options
        }
    });
}
/** @ignore */ const CHUNK_SIZE = 65536;
/**
 * Convert an Uint8Array to ascii string.
 *
 * @ignore
 * @param arr
 * @returns An ASCII string.
 */ function uint8ArrayToString(arr) {
    if (arr.length < CHUNK_SIZE) return String.fromCharCode.apply(null, Array.from(arr));
    let result = '';
    const arrLen = arr.length;
    for(let i = 0; i < arrLen; i++){
        const chunk = arr.subarray(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
        result += String.fromCharCode.apply(null, Array.from(chunk));
    }
    return result;
}
/**
 * Convert an ArrayBuffer to base64 encoded string.
 *
 * @ignore
 * @param buffer
 * @returns A base64 encoded string.
 */ function arrayBufferToBase64(buffer) {
    const str = uint8ArrayToString(new Uint8Array(buffer));
    return btoa(str);
}
/**
 * Writes a binary file.
 *
 * @param file Write configuration object.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function writeBinaryFile(file, options = {
}) {
    if (typeof options === 'object') Object.freeze(options);
    if (typeof file === 'object') Object.freeze(file);
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Fs',
        message: {
            cmd: 'writeBinaryFile',
            path: file.path,
            contents: arrayBufferToBase64(file.contents),
            options
        }
    });
}
/**
 * List directory files.
 *
 * @param dir Path to the directory to read.
 * @param options Configuration object.
 * @returns A promise resolving to the directory entries.
 */ async function readDir(dir, options = {
}) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Fs',
        message: {
            cmd: 'readDir',
            path: dir,
            options
        }
    });
}
/**
 * Creates a directory.
 * If one of the path's parent components doesn't exist
 * and the `recursive` option isn't set to true, the promise will be rejected.
 *
 * @param dir Path to the directory to create.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function createDir(dir, options = {
}) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Fs',
        message: {
            cmd: 'createDir',
            path: dir,
            options
        }
    });
}
/**
 * Removes a directory.
 * If the directory is not empty and the `recursive` option isn't set to true, the promise will be rejected.
 *
 * @param dir Path to the directory to remove.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function removeDir(dir, options = {
}) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Fs',
        message: {
            cmd: 'removeDir',
            path: dir,
            options
        }
    });
}
/**
 * Copys a file to a destination.
 *
 * @param source A path of the file to copy.
 * @param destination A path for the destination file.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function copyFile(source, destination, options = {
}) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Fs',
        message: {
            cmd: 'copyFile',
            source,
            destination,
            options
        }
    });
}
/**
 * Removes a file.
 *
 * @param file Path to the file to remove.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function removeFile(file, options = {
}) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Fs',
        message: {
            cmd: 'removeFile',
            path: file,
            options: options
        }
    });
}
/**
 * Renames a file.
 *
 * @param oldPath A path of the file to rename.
 * @param newPath A path of the new file name.
 * @param options Configuration object.
 * @returns A promise indicating the success or failure of the operation.
 */ async function renameFile(oldPath, newPath, options = {
}) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Fs',
        message: {
            cmd: 'renameFile',
            oldPath,
            newPath,
            options
        }
    });
}

},{"./helpers/tauri":"6af8J","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"6af8J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invokeTauriCommand", ()=>invokeTauriCommand
);
// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/** @ignore */ var _tauri = require("../tauri");
async function invokeTauriCommand(command) {
    return _tauri.invoke('tauri', command);
}

},{"../tauri":"38VRS","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"38VRS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformCallback", ()=>transformCallback
);
parcelHelpers.export(exports, "invoke", ()=>invoke
);
parcelHelpers.export(exports, "convertFileSrc", ()=>convertFileSrc
);
/** @ignore */ function uid() {
    const length = new Int8Array(1);
    window.crypto.getRandomValues(length);
    const array = new Uint8Array(Math.max(16, Math.abs(length[0])));
    window.crypto.getRandomValues(array);
    return array.join('');
}
/**
 * Transforms a callback function to a string identifier that can be passed to the backend.
 * The backend uses the identifier to `eval()` the callback.
 *
 * @return A unique identifier associated with the callback function.
 */ function transformCallback(callback, once = false) {
    const identifier = uid();
    Object.defineProperty(window, identifier, {
        value: (result)=>{
            if (once) Reflect.deleteProperty(window, identifier);
            return callback?.(result);
        },
        writable: false,
        configurable: true
    });
    return identifier;
}
/**
 * Sends a message to the backend.
 *
 * @param cmd The command name.
 * @param args The optional arguments to pass to the command.
 * @return A promise resolving or rejecting to the backend response.
 */ async function invoke(cmd, args = {
}) {
    return new Promise((resolve, reject)=>{
        const callback = transformCallback((e)=>{
            resolve(e);
            Reflect.deleteProperty(window, error);
        }, true);
        const error = transformCallback((e)=>{
            reject(e);
            Reflect.deleteProperty(window, callback);
        }, true);
        window.rpc.notify(cmd, {
            __invokeKey: __TAURI_INVOKE_KEY__,
            callback,
            error,
            ...args
        });
    });
}
/**
 * Convert a device file path to an URL that can be loaded by the webview.
 * Note that `asset:` must be allowed on the `csp` value configured on `tauri.conf.json`.
 *
 * @param  filePath the file path. On Windows, the drive name must be omitted, i.e. using `/Users/user/file.png` instead of `C:/Users/user/file.png`.
 *
 * @return the URL that can be used as source on the webview
 */ function convertFileSrc(filePath) {
    return navigator.userAgent.includes('Windows') ? `https://asset.localhost/${filePath}` : `asset://${filePath}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"iruOM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "appDir", ()=>appDir
);
parcelHelpers.export(exports, "audioDir", ()=>audioDir
);
parcelHelpers.export(exports, "cacheDir", ()=>cacheDir
);
parcelHelpers.export(exports, "configDir", ()=>configDir
);
parcelHelpers.export(exports, "dataDir", ()=>dataDir
);
parcelHelpers.export(exports, "desktopDir", ()=>desktopDir
);
parcelHelpers.export(exports, "documentDir", ()=>documentDir
);
parcelHelpers.export(exports, "downloadDir", ()=>downloadDir
);
parcelHelpers.export(exports, "executableDir", ()=>executableDir
);
parcelHelpers.export(exports, "fontDir", ()=>fontDir
);
parcelHelpers.export(exports, "homeDir", ()=>homeDir
);
parcelHelpers.export(exports, "localDataDir", ()=>localDataDir
);
parcelHelpers.export(exports, "pictureDir", ()=>pictureDir
);
parcelHelpers.export(exports, "publicDir", ()=>publicDir
);
parcelHelpers.export(exports, "resourceDir", ()=>resourceDir
);
parcelHelpers.export(exports, "runtimeDir", ()=>runtimeDir
);
parcelHelpers.export(exports, "templateDir", ()=>templateDir
);
parcelHelpers.export(exports, "videoDir", ()=>videoDir
);
parcelHelpers.export(exports, "currentDir", ()=>currentDir
);
parcelHelpers.export(exports, "BaseDirectory", ()=>_fs.BaseDirectory
);
parcelHelpers.export(exports, "sep", ()=>sep
);
parcelHelpers.export(exports, "delimiter", ()=>delimiter
);
parcelHelpers.export(exports, "resolve", ()=>resolve
);
parcelHelpers.export(exports, "normalize", ()=>normalize
);
parcelHelpers.export(exports, "join", ()=>join
);
parcelHelpers.export(exports, "dirname", ()=>dirname
);
parcelHelpers.export(exports, "extname", ()=>extname
);
parcelHelpers.export(exports, "basename", ()=>basename
);
parcelHelpers.export(exports, "isAbsolute", ()=>isAbsolute
);
// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
var _tauri = require("./helpers/tauri");
var _fs = require("./fs");
var _osCheck = require("./helpers/os-check");
/**
 * The path module provides utilities for working with file and directory paths.
 *
 * This package is also accessible with `window.__TAURI__.path` when `tauri.conf.json > build > withGlobalTauri` is set to true.
 *
 * The APIs must be allowlisted on `tauri.conf.json`:
 * ```json
 * {
 *   "tauri": {
 *     "allowlist": {
 *       "path": {
 *         "all": true, // enable all Path APIs
 *       }
 *     }
 *   }
 * }
 * ```
 * It is recommended to allowlist only the APIs you use for optimal bundle size and security.
 * @module
 */ /**
 * Returns the path to the suggested directory for your app config files.
 * Resolves to `${configDir}/${bundleIdentifier}`, where `bundleIdentifier` is the value configured on `tauri.conf.json > tauri > bundle > identifier`.
 *
 * @returns
 */ async function appDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.App
        }
    });
}
/**
 * Returns the path to the user's audio directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_MUSIC_DIR`.
 * - **macOS:** Resolves to `$HOME/Music`.
 * - **Windows:** Resolves to `{FOLDERID_Music}`.
 *
 * @returns
 */ async function audioDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Audio
        }
    });
}
/**
 * Returns the path to the user's cache directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_CACHE_HOME` or `$HOME/.cache`.
 * - **macOS:** Resolves to `$HOME/Library/Caches`.
 * - **Windows:** Resolves to `{FOLDERID_LocalAppData}`.
 *
 * @returns
 */ async function cacheDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Cache
        }
    });
}
/**
 * Returns the path to the user's config directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_CONFIG_HOME` or `$HOME/.config`.
 * - **macOS:** Resolves to `$HOME/Library/Application Support`.
 * - **Windows:** Resolves to `{FOLDERID_LocalAppData}`.
 *
 * @returns
 */ async function configDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Config
        }
    });
}
/**
 * Returns the path to the user's data directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
 * - **macOS:** Resolves to `$HOME/Library/Application Support`.
 * - **Windows:** Resolves to `{FOLDERID_RoamingAppData}`.
 *
 * @returns
 */ async function dataDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Data
        }
    });
}
/**
 * Returns the path to the user's desktop directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_DESKTOP_DIR`.
 * - **macOS:** Resolves to `$HOME/Library/Desktop`.
 * - **Windows:** Resolves to `{FOLDERID_Desktop}`.

 * @returns
 */ async function desktopDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Desktop
        }
    });
}
/**
 * Returns the path to the user's document directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_DOCUMENTS_DIR`.
 * - **macOS:** Resolves to `$HOME/Documents`.
 * - **Windows:** Resolves to `{FOLDERID_Documents}`.
 *
 * @returns
 */ async function documentDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Document
        }
    });
}
/**
 * Returns the path to the user's download directory.
 *
 * ## Platform-specific
 *
 * - **Linux**: Resolves to `$XDG_DOWNLOAD_DIR`.
 * - **macOS**: Resolves to `$HOME/Downloads`.
 * - **Windows**: Resolves to `{FOLDERID_Downloads}`.
 *
 * @returns
 */ async function downloadDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Download
        }
    });
}
/**
 * Returns the path to the user's executable directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_BIN_HOME/../bin` or `$XDG_DATA_HOME/../bin` or `$HOME/.local/bin`.
 * - **macOS:** Not supported.
 * - **Windows:** Not supported.
 *
 * @returns
 */ async function executableDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Executable
        }
    });
}
/**
 * Returns the path to the user's font directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_DATA_HOME/fonts` or `$HOME/.local/share/fonts`.
 * - **macOS:** Resolves to `$HOME/Library/Fonts`.
 * - **Windows:** Not supported.
 *
 * @returns
 */ async function fontDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Font
        }
    });
}
/**
 * Returns the path to the user's home directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$HOME`.
 * - **macOS:** Resolves to `$HOME`.
 * - **Windows:** Resolves to `{FOLDERID_Profile}`.
 *
 * @returns
 */ async function homeDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Home
        }
    });
}
/**
 * Returns the path to the user's local data directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_DATA_HOME` or `$HOME/.local/share`.
 * - **macOS:** Resolves to `$HOME/Library/Application Support`.
 * - **Windows:** Resolves to `{FOLDERID_LocalAppData}`.
 *
 * @returns
 */ async function localDataDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.LocalData
        }
    });
}
/**
 * Returns the path to the user's picture directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_PICTURES_DIR`.
 * - **macOS:** Resolves to `$HOME/Pictures`.
 * - **Windows:** Resolves to `{FOLDERID_Pictures}`.
 *
 * @returns
 */ async function pictureDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Picture
        }
    });
}
/**
 * Returns the path to the user's public directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_PUBLICSHARE_DIR`.
 * - **macOS:** Resolves to `$HOME/Public`.
 * - **Windows:** Resolves to `{FOLDERID_Public}`.
 *
 * @returns
 */ async function publicDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Public
        }
    });
}
/**
 * Returns the path to the user's resource directory.
 *
 * @returns
 */ async function resourceDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Resource
        }
    });
}
/**
 * Returns the path to the user's runtime directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_RUNTIME_DIR`.
 * - **macOS:** Not supported.
 * - **Windows:** Not supported.
 *
 * @returns
 */ async function runtimeDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Runtime
        }
    });
}
/**
 * Returns the path to the user's template directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_TEMPLATES_DIR`.
 * - **macOS:** Not supported.
 * - **Windows:** Resolves to `{FOLDERID_Templates}`.
 *
 * @returns
 */ async function templateDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Template
        }
    });
}
/**
 * Returns the path to the user's video directory.
 *
 * ## Platform-specific
 *
 * - **Linux:** Resolves to `$XDG_VIDEOS_DIR`.
 * - **macOS:** Resolves to `$HOME/Movies`.
 * - **Windows:** Resolves to `{FOLDERID_Videos}`.
 *
 * @returns
 */ async function videoDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Video
        }
    });
}
/**
 * Returns the path to the current working directory.
 *
 * @returns
 */ async function currentDir() {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolvePath',
            path: '',
            directory: _fs.BaseDirectory.Current
        }
    });
}
/**
 * Provides the platform-specific path segment separator:
 * - `\` on Windows
 * - `/` on POSIX
 */ const sep = _osCheck.isWindows() ? '\\' : '/';
/**
 * Provides the platform-specific path segment delimiter:
 * - `;` on Windows
 * - `:` on POSIX
 */ const delimiter = _osCheck.isWindows() ? ';' : ':';
/**
 * Resolves a sequence of `paths` or `path` segments into an absolute path.
 *
 * @param paths A sequence of paths or path segments.
 */ async function resolve(...paths) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'resolve',
            paths
        }
    });
}
/**
 * Normalizes the given `path`, resolving `'..'` and `'.'` segments and resolve symolic links.
 */ async function normalize(path) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'normalize',
            path
        }
    });
}
/**
 *  Joins all given `path` segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
 *
 * @param paths A sequence of path segments.
 */ async function join(...paths) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'join',
            paths
        }
    });
}
/**
 * Returns the directory name of a `path`. Trailing directory separators are ignored.
 */ async function dirname(path) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'dirname',
            path
        }
    });
}
/**
 * Returns the extension of the `path`.
 */ async function extname(path) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'extname',
            path
        }
    });
}
/**
 *  Returns the last portion of a `path`. Trailing directory separators are ignored.
 *
 * @param ext An optional file extension to be removed from the returned path.
 */ async function basename(path, ext) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'basename',
            path,
            ext
        }
    });
}
async function isAbsolute(path) {
    return _tauri.invokeTauriCommand({
        __tauriModule: 'Path',
        message: {
            cmd: 'isAbsolute',
            path
        }
    });
}

},{"./helpers/tauri":"6af8J","./fs":"hVrp3","./helpers/os-check":"gO72X","@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"gO72X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isLinux", ()=>isLinux
);
parcelHelpers.export(exports, "isWindows", ()=>isWindows
);
parcelHelpers.export(exports, "isMacOS", ()=>isMacOS
);
// Copyright 2019-2021 Tauri Programme within The Commons Conservancy
// SPDX-License-Identifier: Apache-2.0
// SPDX-License-Identifier: MIT
/** @ignore */ function isLinux() {
    return navigator.appVersion.includes('Linux');
}
function isWindows() {
    return navigator.appVersion.includes('Win');
}
function isMacOS() {
    return navigator.appVersion.includes('Mac');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}],"gc2y9":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var emitter = require('contra/emitter');
var crossvent = require('crossvent');
var classes = require('./classes');
var doc = document;
var documentElement = doc.documentElement;
function dragula(initialContainers, options) {
    var len1 = arguments.length;
    if (len1 === 1 && Array.isArray(initialContainers) === false) {
        options = initialContainers;
        initialContainers = [];
    }
    var _mirror; // mirror image
    var _source; // source container
    var _item; // item being dragged
    var _offsetX; // reference x
    var _offsetY; // reference y
    var _moveX; // reference move x
    var _moveY; // reference move y
    var _initialSibling; // reference sibling when grabbed
    var _currentSibling; // reference sibling now
    var _copy; // item used for copying
    var _renderTimer; // timer for setTimeout renderMirrorImage
    var _lastDropTarget = null; // last container item was over
    var _grabbed; // holds mousedown context until first mousemove
    var o = options || {
    };
    if (o.moves === void 0) o.moves = always;
    if (o.accepts === void 0) o.accepts = always;
    if (o.invalid === void 0) o.invalid = invalidTarget;
    if (o.containers === void 0) o.containers = initialContainers || [];
    if (o.isContainer === void 0) o.isContainer = never;
    if (o.copy === void 0) o.copy = false;
    if (o.copySortSource === void 0) o.copySortSource = false;
    if (o.revertOnSpill === void 0) o.revertOnSpill = false;
    if (o.removeOnSpill === void 0) o.removeOnSpill = false;
    if (o.direction === void 0) o.direction = 'vertical';
    if (o.ignoreInputTextSelection === void 0) o.ignoreInputTextSelection = true;
    if (o.mirrorContainer === void 0) o.mirrorContainer = doc.body;
    var drake = emitter({
        containers: o.containers,
        start: manualStart,
        end: end,
        cancel: cancel,
        remove: remove1,
        destroy: destroy,
        canMove: canMove,
        dragging: false
    });
    if (o.removeOnSpill === true) drake.on('over', spillOver).on('out', spillOut);
    events();
    function isContainer(el) {
        return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
    }
    function events(remove) {
        var op = remove ? 'remove' : 'add';
        touchy(documentElement, op, 'mousedown', grab);
        touchy(documentElement, op, 'mouseup', release);
    }
    function eventualMovements(remove) {
        var op = remove ? 'remove' : 'add';
        touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
    }
    function movements(remove) {
        var op = remove ? 'remove' : 'add';
        crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
        crossvent[op](documentElement, 'click', preventGrabbed);
    }
    function destroy() {
        events(true);
        release({
        });
    }
    function preventGrabbed(e) {
        if (_grabbed) {
            e.preventDefault();
        }
    }
    function grab(e) {
        _moveX = e.clientX;
        _moveY = e.clientY;
        var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
        if (ignore) {
            return; // we only care about honest-to-god left clicks and touch events
        }
        var item = e.target;
        var context = canStart(item);
        if (!context) {
            return;
        }
        _grabbed = context;
        eventualMovements();
        if (e.type === 'mousedown') {
            if (isInput(item)) {
                item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
            } else {
                e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
            }
        }
    }
    function startBecauseMouseMoved(e) {
        if (!_grabbed) {
            return;
        }
        if (whichMouseButton(e) === 0) {
            release({
            });
            return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
        }
        // truthy check fixes #239, equality fixes #207, fixes #501
        if (e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0) && e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0)) {
            return;
        }
        if (o.ignoreInputTextSelection) {
            var clientX = getCoord('clientX', e) || 0;
            var clientY = getCoord('clientY', e) || 0;
            var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
            if (isInput(elementBehindCursor)) {
                return;
            }
        }
        var grabbed = _grabbed; // call to end() unsets _grabbed
        eventualMovements(true);
        movements();
        end();
        start(grabbed);
        var offset = getOffset(_item);
        _offsetX = getCoord('pageX', e) - offset.left;
        _offsetY = getCoord('pageY', e) - offset.top;
        classes.add(_copy || _item, 'gu-transit');
        renderMirrorImage();
        drag(e);
    }
    function canStart(item) {
        if (drake.dragging && _mirror) {
            return;
        }
        if (isContainer(item)) {
            return; // don't drag container itself
        }
        var handle = item;
        while(getParent(item) && isContainer(getParent(item)) === false){
            if (o.invalid(item, handle)) {
                return;
            }
            item = getParent(item); // drag target should be a top element
            if (!item) {
                return;
            }
        }
        var source = getParent(item);
        if (!source) {
            return;
        }
        if (o.invalid(item, handle)) {
            return;
        }
        var movable = o.moves(item, source, handle, nextEl(item));
        if (!movable) {
            return;
        }
        return {
            item: item,
            source: source
        };
    }
    function canMove(item) {
        return !!canStart(item);
    }
    function manualStart(item) {
        var context = canStart(item);
        if (context) {
            start(context);
        }
    }
    function start(context) {
        if (isCopy(context.item, context.source)) {
            _copy = context.item.cloneNode(true);
            drake.emit('cloned', _copy, context.item, 'copy');
        }
        _source = context.source;
        _item = context.item;
        _initialSibling = _currentSibling = nextEl(context.item);
        drake.dragging = true;
        drake.emit('drag', _item, _source);
    }
    function invalidTarget() {
        return false;
    }
    function end() {
        if (!drake.dragging) {
            return;
        }
        var item = _copy || _item;
        drop(item, getParent(item));
    }
    function ungrab() {
        _grabbed = false;
        eventualMovements(true);
        movements(true);
    }
    function release(e) {
        ungrab();
        if (!drake.dragging) {
            return;
        }
        var item = _copy || _item;
        var clientX = getCoord('clientX', e) || 0;
        var clientY = getCoord('clientY', e) || 0;
        var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
        var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
        if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
            drop(item, dropTarget);
        } else if (o.removeOnSpill) {
            remove1();
        } else {
            cancel();
        }
    }
    function drop(item, target) {
        var parent = getParent(item);
        if (_copy && o.copySortSource && target === _source) {
            parent.removeChild(_item);
        }
        if (isInitialPlacement(target)) {
            drake.emit('cancel', item, _source, _source);
        } else {
            drake.emit('drop', item, target, _source, _currentSibling);
        }
        cleanup();
    }
    function remove1() {
        if (!drake.dragging) {
            return;
        }
        var item = _copy || _item;
        var parent = getParent(item);
        if (parent) {
            parent.removeChild(item);
        }
        drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
        cleanup();
    }
    function cancel(revert) {
        if (!drake.dragging) {
            return;
        }
        var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
        var item = _copy || _item;
        var parent = getParent(item);
        var initial = isInitialPlacement(parent);
        if (initial === false && reverts) {
            if (_copy) {
                if (parent) {
                    parent.removeChild(_copy);
                }
            } else {
                _source.insertBefore(item, _initialSibling);
            }
        }
        if (initial || reverts) {
            drake.emit('cancel', item, _source, _source);
        } else {
            drake.emit('drop', item, parent, _source, _currentSibling);
        }
        cleanup();
    }
    function cleanup() {
        var item = _copy || _item;
        ungrab();
        removeMirrorImage();
        if (item) {
            classes.rm(item, 'gu-transit');
        }
        if (_renderTimer) {
            clearTimeout(_renderTimer);
        }
        drake.dragging = false;
        if (_lastDropTarget) {
            drake.emit('out', item, _lastDropTarget, _source);
        }
        drake.emit('dragend', item);
        _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
    }
    function isInitialPlacement(target, s) {
        var sibling;
        if (s !== void 0) {
            sibling = s;
        } else if (_mirror) {
            sibling = _currentSibling;
        } else {
            sibling = nextEl(_copy || _item);
        }
        return target === _source && sibling === _initialSibling;
    }
    function findDropTarget(elementBehindCursor, clientX, clientY) {
        var target = elementBehindCursor;
        while(target && !accepted()){
            target = getParent(target);
        }
        return target;
        function accepted() {
            var droppable = isContainer(target);
            if (droppable === false) {
                return false;
            }
            var immediate = getImmediateChild(target, elementBehindCursor);
            var reference = getReference(target, immediate, clientX, clientY);
            var initial = isInitialPlacement(target, reference);
            if (initial) {
                return true; // should always be able to drop it right back where it was
            }
            return o.accepts(_item, target, _source, reference);
        }
    }
    function drag(e) {
        if (!_mirror) {
            return;
        }
        e.preventDefault();
        var clientX = getCoord('clientX', e) || 0;
        var clientY = getCoord('clientY', e) || 0;
        var x = clientX - _offsetX;
        var y = clientY - _offsetY;
        _mirror.style.left = x + 'px';
        _mirror.style.top = y + 'px';
        var item = _copy || _item;
        var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
        var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
        var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
        if (changed || dropTarget === null) {
            out();
            _lastDropTarget = dropTarget;
            over();
        }
        var parent = getParent(item);
        if (dropTarget === _source && _copy && !o.copySortSource) {
            if (parent) {
                parent.removeChild(item);
            }
            return;
        }
        var reference;
        var immediate = getImmediateChild(dropTarget, elementBehindCursor);
        if (immediate !== null) {
            reference = getReference(dropTarget, immediate, clientX, clientY);
        } else if (o.revertOnSpill === true && !_copy) {
            reference = _initialSibling;
            dropTarget = _source;
        } else {
            if (_copy && parent) {
                parent.removeChild(item);
            }
            return;
        }
        if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
            _currentSibling = reference;
            dropTarget.insertBefore(item, reference);
            drake.emit('shadow', item, dropTarget, _source);
        }
        function moved(type) {
            drake.emit(type, item, _lastDropTarget, _source);
        }
        function over() {
            if (changed) {
                moved('over');
            }
        }
        function out() {
            if (_lastDropTarget) {
                moved('out');
            }
        }
    }
    function spillOver(el) {
        classes.rm(el, 'gu-hide');
    }
    function spillOut(el) {
        if (drake.dragging) {
            classes.add(el, 'gu-hide');
        }
    }
    function renderMirrorImage() {
        if (_mirror) {
            return;
        }
        var rect = _item.getBoundingClientRect();
        _mirror = _item.cloneNode(true);
        _mirror.style.width = getRectWidth(rect) + 'px';
        _mirror.style.height = getRectHeight(rect) + 'px';
        classes.rm(_mirror, 'gu-transit');
        classes.add(_mirror, 'gu-mirror');
        o.mirrorContainer.appendChild(_mirror);
        touchy(documentElement, 'add', 'mousemove', drag);
        classes.add(o.mirrorContainer, 'gu-unselectable');
        drake.emit('cloned', _mirror, _item, 'mirror');
    }
    function removeMirrorImage() {
        if (_mirror) {
            classes.rm(o.mirrorContainer, 'gu-unselectable');
            touchy(documentElement, 'remove', 'mousemove', drag);
            getParent(_mirror).removeChild(_mirror);
            _mirror = null;
        }
    }
    function getImmediateChild(dropTarget, target) {
        var immediate = target;
        while(immediate !== dropTarget && getParent(immediate) !== dropTarget){
            immediate = getParent(immediate);
        }
        if (immediate === documentElement) {
            return null;
        }
        return immediate;
    }
    function getReference(dropTarget, target, x, y) {
        var horizontal = o.direction === 'horizontal';
        var reference = target !== dropTarget ? inside() : outside();
        return reference;
        function outside() {
            var len = dropTarget.children.length;
            var i;
            var el;
            var rect;
            for(i = 0; i < len; i++){
                el = dropTarget.children[i];
                rect = el.getBoundingClientRect();
                if (horizontal && rect.left + rect.width / 2 > x) {
                    return el;
                }
                if (!horizontal && rect.top + rect.height / 2 > y) {
                    return el;
                }
            }
            return null;
        }
        function inside() {
            var rect = target.getBoundingClientRect();
            if (horizontal) {
                return resolve(x > rect.left + getRectWidth(rect) / 2);
            }
            return resolve(y > rect.top + getRectHeight(rect) / 2);
        }
        function resolve(after) {
            return after ? nextEl(target) : target;
        }
    }
    function isCopy(item, container) {
        return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
    }
    return drake;
}
function touchy(el, op, type, fn) {
    var touch = {
        mouseup: 'touchend',
        mousedown: 'touchstart',
        mousemove: 'touchmove'
    };
    var pointers = {
        mouseup: 'pointerup',
        mousedown: 'pointerdown',
        mousemove: 'pointermove'
    };
    var microsoft = {
        mouseup: 'MSPointerUp',
        mousedown: 'MSPointerDown',
        mousemove: 'MSPointerMove'
    };
    if (global.navigator.pointerEnabled) crossvent[op](el, pointers[type], fn);
    else if (global.navigator.msPointerEnabled) crossvent[op](el, microsoft[type], fn);
    else {
        crossvent[op](el, touch[type], fn);
        crossvent[op](el, type, fn);
    }
}
function whichMouseButton(e) {
    if (e.touches !== void 0) return e.touches.length;
    if (e.which !== void 0 && e.which !== 0) return e.which;
     // see https://github.com/bevacqua/dragula/issues/261
    if (e.buttons !== void 0) return e.buttons;
    var button = e.button;
    if (button !== void 0) return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
}
function getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
        top: rect.top + getScroll('scrollTop', 'pageYOffset')
    };
}
function getScroll(scrollProp, offsetProp) {
    if (typeof global[offsetProp] !== 'undefined') return global[offsetProp];
    if (documentElement.clientHeight) return documentElement[scrollProp];
    return doc.body[scrollProp];
}
function getElementBehindPoint(point, x, y) {
    point = point || {
    };
    var state = point.className || '';
    var el;
    point.className += ' gu-hide';
    el = doc.elementFromPoint(x, y);
    point.className = state;
    return el;
}
function never() {
    return false;
}
function always() {
    return true;
}
function getRectWidth(rect) {
    return rect.width || rect.right - rect.left;
}
function getRectHeight(rect) {
    return rect.height || rect.bottom - rect.top;
}
function getParent(el) {
    return el.parentNode === doc ? null : el.parentNode;
}
function isInput(el) {
    return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
}
function isEditable(el) {
    if (!el) return false;
     // no parents were editable
    if (el.contentEditable === 'false') return false;
     // stop the lookup
    if (el.contentEditable === 'true') return true;
     // found a contentEditable element in the chain
    return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}
function nextEl(el) {
    function manually() {
        var sibling = el;
        do {
            sibling = sibling.nextSibling;
        }while (sibling && sibling.nodeType !== 1)
        return sibling;
    }
    return el.nextElementSibling || manually();
}
function getEventHost(e) {
    // on touchend event, we have to use `e.changedTouches`
    // see http://stackoverflow.com/questions/7192563/touchend-event-properties
    // see https://github.com/bevacqua/dragula/issues/34
    if (e.targetTouches && e.targetTouches.length) return e.targetTouches[0];
    if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0];
    return e;
}
function getCoord(coord, e) {
    var host = getEventHost(e);
    var missMap = {
        pageX: 'clientX',
        pageY: 'clientY' // IE8
    };
    if (coord in missMap && !(coord in host) && missMap[coord] in host) coord = missMap[coord];
    return host[coord];
}
module.exports = dragula;

},{"contra/emitter":"iSDWS","crossvent":"9XbkS","./classes":"dtt4Z"}],"iSDWS":[function(require,module,exports) {
'use strict';
var atoa = require('atoa');
var debounce = require('./debounce');
module.exports = function emitter(thing, options) {
    var opts = options || {
    };
    var evt = {
    };
    if (thing === undefined) thing = {
    };
    thing.on = function(type, fn) {
        if (!evt[type]) evt[type] = [
            fn
        ];
        else evt[type].push(fn);
        return thing;
    };
    thing.once = function(type, fn) {
        fn._once = true; // thing.off(fn) still works!
        thing.on(type, fn);
        return thing;
    };
    thing.off = function(type, fn) {
        var c = arguments.length;
        if (c === 1) delete evt[type];
        else if (c === 0) evt = {
        };
        else {
            var et = evt[type];
            if (!et) return thing;
            et.splice(et.indexOf(fn), 1);
        }
        return thing;
    };
    thing.emit = function() {
        var args = atoa(arguments);
        return thing.emitterSnapshot(args.shift()).apply(this, args);
    };
    thing.emitterSnapshot = function(type) {
        var et = (evt[type] || []).slice(0);
        return function() {
            var args = atoa(arguments);
            var ctx = this || thing;
            if (type === 'error' && opts.throws !== false && !et.length) throw args.length === 1 ? args[0] : args;
            et.forEach(function emitter(listen) {
                if (opts.async) debounce(listen, args, ctx);
                else listen.apply(ctx, args);
                if (listen._once) thing.off(type, listen);
            });
            return thing;
        };
    };
    return thing;
};

},{"atoa":"9QF2C","./debounce":"3d0PP"}],"9QF2C":[function(require,module,exports) {
module.exports = function atoa(a, n) {
    return Array.prototype.slice.call(a, n);
};

},{}],"3d0PP":[function(require,module,exports) {
'use strict';
var ticky = require('ticky');
module.exports = function debounce(fn, args, ctx) {
    if (!fn) return;
    ticky(function run() {
        fn.apply(ctx || null, args || []);
    });
};

},{"ticky":"9xv0t"}],"9xv0t":[function(require,module,exports) {
var si = typeof setImmediate === 'function', tick;
if (si) tick = function(fn) {
    setImmediate(fn);
};
else tick = function(fn) {
    setTimeout(fn, 0);
};
module.exports = tick;

},{}],"9XbkS":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var customEvent = require('custom-event');
var eventmap = require('./eventmap');
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];
if (!global.addEventListener) {
    addEvent = addEventHard;
    removeEvent = removeEventHard;
}
module.exports = {
    add: addEvent,
    remove: removeEvent,
    fabricate: fabricateEvent
};
function addEventEasy(el, type, fn, capturing) {
    return el.addEventListener(type, fn, capturing);
}
function addEventHard(el, type, fn) {
    return el.attachEvent('on' + type, wrap(el, type, fn));
}
function removeEventEasy(el, type, fn, capturing) {
    return el.removeEventListener(type, fn, capturing);
}
function removeEventHard(el, type, fn) {
    var listener = unwrap(el, type, fn);
    if (listener) return el.detachEvent('on' + type, listener);
}
function fabricateEvent(el, type, model) {
    var e1 = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
    if (el.dispatchEvent) el.dispatchEvent(e1);
    else el.fireEvent('on' + type, e1);
    function makeClassicEvent() {
        var e;
        if (doc.createEvent) {
            e = doc.createEvent('Event');
            e.initEvent(type, true, true);
        } else if (doc.createEventObject) e = doc.createEventObject();
        return e;
    }
    function makeCustomEvent() {
        return new customEvent(type, {
            detail: model
        });
    }
}
function wrapperFactory(el, type, fn) {
    return function wrapper(originalEvent) {
        var e = originalEvent || global.event;
        e.target = e.target || e.srcElement;
        e.preventDefault = e.preventDefault || function preventDefault() {
            e.returnValue = false;
        };
        e.stopPropagation = e.stopPropagation || function stopPropagation() {
            e.cancelBubble = true;
        };
        e.which = e.which || e.keyCode;
        fn.call(el, e);
    };
}
function wrap(el, type, fn) {
    var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
    hardCache.push({
        wrapper: wrapper,
        element: el,
        type: type,
        fn: fn
    });
    return wrapper;
}
function unwrap(el, type, fn) {
    var i = find(el, type, fn);
    if (i) {
        var wrapper = hardCache[i].wrapper;
        hardCache.splice(i, 1); // free up a tad of memory
        return wrapper;
    }
}
function find(el, type, fn) {
    var i, item;
    for(i = 0; i < hardCache.length; i++){
        item = hardCache[i];
        if (item.element === el && item.type === type && item.fn === fn) return i;
    }
}

},{"custom-event":"lDt7C","./eventmap":"9MDFx"}],"lDt7C":[function(require,module,exports) {
var global = arguments[3];
var NativeCustomEvent = global.CustomEvent;
function useNative() {
    try {
        var p = new NativeCustomEvent('cat', {
            detail: {
                foo: 'bar'
            }
        });
        return 'cat' === p.type && 'bar' === p.detail.foo;
    } catch (e) {
    }
    return false;
}
/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */ module.exports = useNative() ? NativeCustomEvent : // IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent(type, params) {
    var e = document.createEvent('CustomEvent');
    if (params) e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
    else e.initCustomEvent(type, false, false, void 0);
    return e;
} : // IE <= 8
function CustomEvent(type, params) {
    var e = document.createEventObject();
    e.type = type;
    if (params) {
        e.bubbles = Boolean(params.bubbles);
        e.cancelable = Boolean(params.cancelable);
        e.detail = params.detail;
    } else {
        e.bubbles = false;
        e.cancelable = false;
        e.detail = void 0;
    }
    return e;
};

},{}],"9MDFx":[function(require,module,exports) {
var global = arguments[3];
'use strict';
var eventmap = [];
var eventname = '';
var ron = /^on/;
for(eventname in global)if (ron.test(eventname)) eventmap.push(eventname.slice(2));
module.exports = eventmap;

},{}],"dtt4Z":[function(require,module,exports) {
'use strict';
var cache = {
};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';
function lookupClass(className) {
    var cached = cache[className];
    if (cached) cached.lastIndex = 0;
    else cache[className] = cached = new RegExp(start + className + end, 'g');
    return cached;
}
function addClass(el, className) {
    var current = el.className;
    if (!current.length) el.className = className;
    else if (!lookupClass(className).test(current)) el.className += ' ' + className;
}
function rmClass(el, className) {
    el.className = el.className.replace(lookupClass(className), ' ').trim();
}
module.exports = {
    add: addClass,
    rm: rmClass
};

},{}],"kWyKR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create
);
// canvas-confetti v1.4.0 built on 2021-03-10T12:32:33.488Z
var module1 = {
};
(function main(global, module, isWorker, workerSize) {
    var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
    function noop() {
    }
    // create a promise if it exists, otherwise, just
    // call the function directly
    function promise(func) {
        var ModulePromise = module.exports.Promise;
        var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
        if (typeof Prom === 'function') return new Prom(func);
        func(noop, noop);
        return null;
    }
    var raf = function() {
        var TIME = Math.floor(1000 / 60);
        var frame, cancel;
        var frames = {
        };
        var lastFrameTime = 0;
        if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
            frame = function(cb) {
                var id = Math.random();
                frames[id] = requestAnimationFrame(function onFrame(time) {
                    if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
                        lastFrameTime = time;
                        delete frames[id];
                        cb();
                    } else frames[id] = requestAnimationFrame(onFrame);
                });
                return id;
            };
            cancel = function(id) {
                if (frames[id]) cancelAnimationFrame(frames[id]);
            };
        } else {
            frame = function(cb) {
                return setTimeout(cb, TIME);
            };
            cancel = function(timer) {
                return clearTimeout(timer);
            };
        }
        return {
            frame: frame,
            cancel: cancel
        };
    }();
    var getWorker = function() {
        var worker1;
        var prom;
        var resolves = {
        };
        function decorate(worker) {
            function execute(options, callback) {
                worker.postMessage({
                    options: options || {
                    },
                    callback: callback
                });
            }
            worker.init = function initWorker(canvas) {
                var offscreen = canvas.transferControlToOffscreen();
                worker.postMessage({
                    canvas: offscreen
                }, [
                    offscreen
                ]);
            };
            worker.fire = function fireWorker(options, size, done) {
                if (prom) {
                    execute(options, null);
                    return prom;
                }
                var id = Math.random().toString(36).slice(2);
                prom = promise(function(resolve) {
                    function workerDone(msg) {
                        if (msg.data.callback !== id) return;
                        delete resolves[id];
                        worker.removeEventListener('message', workerDone);
                        prom = null;
                        done();
                        resolve();
                    }
                    worker.addEventListener('message', workerDone);
                    execute(options, id);
                    resolves[id] = workerDone.bind(null, {
                        data: {
                            callback: id
                        }
                    });
                });
                return prom;
            };
            worker.reset = function resetWorker() {
                worker.postMessage({
                    reset: true
                });
                for(var id in resolves){
                    resolves[id]();
                    delete resolves[id];
                }
            };
        }
        return function() {
            if (worker1) return worker1;
            if (!isWorker && canUseWorker) {
                var code = [
                    'var CONFETTI, SIZE = {}, module = {};',
                    '(' + main.toString() + ')(this, module, true, SIZE);',
                    'onmessage = function(msg) {',
                    '  if (msg.data.options) {',
                    '    CONFETTI(msg.data.options).then(function () {',
                    '      if (msg.data.callback) {',
                    '        postMessage({ callback: msg.data.callback });',
                    '      }',
                    '    });',
                    '  } else if (msg.data.reset) {',
                    '    CONFETTI.reset();',
                    '  } else if (msg.data.resize) {',
                    '    SIZE.width = msg.data.resize.width;',
                    '    SIZE.height = msg.data.resize.height;',
                    '  } else if (msg.data.canvas) {',
                    '    SIZE.width = msg.data.canvas.width;',
                    '    SIZE.height = msg.data.canvas.height;',
                    '    CONFETTI = module.exports.create(msg.data.canvas);',
                    '  }',
                    '}', 
                ].join('\n');
                try {
                    worker1 = new Worker(URL.createObjectURL(new Blob([
                        code
                    ])));
                } catch (e) {
                    // eslint-disable-next-line no-console
                    typeof console.warn === 'function' && console.warn('🎊 Could not load worker', e);
                    return null;
                }
                decorate(worker1);
            }
            return worker1;
        };
    }();
    var defaults = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: [
            'square',
            'circle'
        ],
        zIndex: 100,
        colors: [
            '#26ccff',
            '#a25afd',
            '#ff5e7e',
            '#88ff5a',
            '#fcff42',
            '#ffa62d',
            '#ff36ff'
        ],
        // probably should be true, but back-compat
        disableForReducedMotion: false,
        scalar: 1
    };
    function convert(val, transform) {
        return transform ? transform(val) : val;
    }
    function isOk(val) {
        return !(val === null || val === undefined);
    }
    function prop(options, name, transform) {
        return convert(options && isOk(options[name]) ? options[name] : defaults[name], transform);
    }
    function onlyPositiveInt(number) {
        return number < 0 ? 0 : Math.floor(number);
    }
    function randomInt(min, max) {
        // [min, max)
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function toDecimal(str) {
        return parseInt(str, 16);
    }
    function colorsToRgb(colors) {
        return colors.map(hexToRgb);
    }
    function hexToRgb(str) {
        var val = String(str).replace(/[^0-9a-f]/gi, '');
        if (val.length < 6) val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
        return {
            r: toDecimal(val.substring(0, 2)),
            g: toDecimal(val.substring(2, 4)),
            b: toDecimal(val.substring(4, 6))
        };
    }
    function getOrigin(options) {
        var origin = prop(options, 'origin', Object);
        origin.x = prop(origin, 'x', Number);
        origin.y = prop(origin, 'y', Number);
        return origin;
    }
    function setCanvasWindowSize(canvas) {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    }
    function setCanvasRectSize(canvas) {
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    function getCanvas(zIndex) {
        var canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0px';
        canvas.style.left = '0px';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = zIndex;
        return canvas;
    }
    function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
        context.save();
        context.translate(x, y);
        context.rotate(rotation);
        context.scale(radiusX, radiusY);
        context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
        context.restore();
    }
    function randomPhysics(opts) {
        var radAngle = opts.angle * (Math.PI / 180);
        var radSpread = opts.spread * (Math.PI / 180);
        return {
            x: opts.x,
            y: opts.y,
            wobble: Math.random() * 10,
            velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
            angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
            tiltAngle: Math.random() * Math.PI,
            color: opts.color,
            shape: opts.shape,
            tick: 0,
            totalTicks: opts.ticks,
            decay: opts.decay,
            drift: opts.drift,
            random: Math.random() + 5,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: opts.gravity * 3,
            ovalScalar: 0.6,
            scalar: opts.scalar
        };
    }
    function updateFetti(context, fetti) {
        fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
        fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
        fetti.wobble += 0.1;
        fetti.velocity *= fetti.decay;
        fetti.tiltAngle += 0.1;
        fetti.tiltSin = Math.sin(fetti.tiltAngle);
        fetti.tiltCos = Math.cos(fetti.tiltAngle);
        fetti.random = Math.random() + 5;
        fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
        fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
        var progress = (fetti.tick++) / fetti.totalTicks;
        var x1 = fetti.x + fetti.random * fetti.tiltCos;
        var y1 = fetti.y + fetti.random * fetti.tiltSin;
        var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
        var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
        context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';
        context.beginPath();
        if (fetti.shape === 'circle') context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
        else {
            context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
            context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
            context.lineTo(Math.floor(x2), Math.floor(y2));
            context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
        }
        context.closePath();
        context.fill();
        return fetti.tick < fetti.totalTicks;
    }
    function animate(canvas, fettis1, resizer, size, done) {
        var animatingFettis = fettis1.slice();
        var context = canvas.getContext('2d');
        var animationFrame;
        var destroy;
        var prom = promise(function(resolve) {
            function onDone() {
                animationFrame = destroy = null;
                context.clearRect(0, 0, size.width, size.height);
                done();
                resolve();
            }
            function update() {
                if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
                    size.width = canvas.width = workerSize.width;
                    size.height = canvas.height = workerSize.height;
                }
                if (!size.width && !size.height) {
                    resizer(canvas);
                    size.width = canvas.width;
                    size.height = canvas.height;
                }
                context.clearRect(0, 0, size.width, size.height);
                animatingFettis = animatingFettis.filter(function(fetti) {
                    return updateFetti(context, fetti);
                });
                if (animatingFettis.length) animationFrame = raf.frame(update);
                else onDone();
            }
            animationFrame = raf.frame(update);
            destroy = onDone;
        });
        return {
            addFettis: function(fettis) {
                animatingFettis = animatingFettis.concat(fettis);
                return prom;
            },
            canvas: canvas,
            promise: prom,
            reset: function() {
                if (animationFrame) raf.cancel(animationFrame);
                if (destroy) destroy();
            }
        };
    }
    function confettiCannon(canvas, globalOpts) {
        var isLibCanvas = !canvas;
        var allowResize = !!prop(globalOpts || {
        }, 'resize');
        var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
        var shouldUseWorker = canUseWorker && !!prop(globalOpts || {
        }, 'useWorker');
        var worker = shouldUseWorker ? getWorker() : null;
        var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
        var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
        var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
        var animationObj;
        function fireLocal(options, size, done) {
            var particleCount = prop(options, 'particleCount', onlyPositiveInt);
            var angle = prop(options, 'angle', Number);
            var spread = prop(options, 'spread', Number);
            var startVelocity = prop(options, 'startVelocity', Number);
            var decay = prop(options, 'decay', Number);
            var gravity = prop(options, 'gravity', Number);
            var drift = prop(options, 'drift', Number);
            var colors = prop(options, 'colors', colorsToRgb);
            var ticks = prop(options, 'ticks', Number);
            var shapes = prop(options, 'shapes');
            var scalar = prop(options, 'scalar');
            var origin = getOrigin(options);
            var temp = particleCount;
            var fettis = [];
            var startX = canvas.width * origin.x;
            var startY = canvas.height * origin.y;
            while(temp--)fettis.push(randomPhysics({
                x: startX,
                y: startY,
                angle: angle,
                spread: spread,
                startVelocity: startVelocity,
                color: colors[temp % colors.length],
                shape: shapes[randomInt(0, shapes.length)],
                ticks: ticks,
                decay: decay,
                gravity: gravity,
                drift: drift,
                scalar: scalar
            }));
            // if we have a previous canvas already animating,
            // add to it
            if (animationObj) return animationObj.addFettis(fettis);
            animationObj = animate(canvas, fettis, resizer, size, done);
            return animationObj.promise;
        }
        function fire(options) {
            var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
            var zIndex = prop(options, 'zIndex', Number);
            if (disableForReducedMotion && preferLessMotion) return promise(function(resolve) {
                resolve();
            });
            if (isLibCanvas && animationObj) // use existing canvas from in-progress animation
            canvas = animationObj.canvas;
            else if (isLibCanvas && !canvas) {
                // create and initialize a new canvas
                canvas = getCanvas(zIndex);
                document.body.appendChild(canvas);
            }
            if (allowResize && !initialized) // initialize the size of a user-supplied canvas
            resizer(canvas);
            var size = {
                width: canvas.width,
                height: canvas.height
            };
            if (worker && !initialized) worker.init(canvas);
            initialized = true;
            if (worker) canvas.__confetti_initialized = true;
            function onResize() {
                if (worker) {
                    // TODO this really shouldn't be immediate, because it is expensive
                    var obj = {
                        getBoundingClientRect: function() {
                            if (!isLibCanvas) return canvas.getBoundingClientRect();
                        }
                    };
                    resizer(obj);
                    worker.postMessage({
                        resize: {
                            width: obj.width,
                            height: obj.height
                        }
                    });
                    return;
                }
                // don't actually query the size here, since this
                // can execute frequently and rapidly
                size.width = size.height = null;
            }
            function done() {
                animationObj = null;
                if (allowResize) global.removeEventListener('resize', onResize);
                if (isLibCanvas && canvas) {
                    document.body.removeChild(canvas);
                    canvas = null;
                    initialized = false;
                }
            }
            if (allowResize) global.addEventListener('resize', onResize, false);
            if (worker) return worker.fire(options, size, done);
            return fireLocal(options, size, done);
        }
        fire.reset = function() {
            if (worker) worker.reset();
            if (animationObj) animationObj.reset();
        };
        return fire;
    }
    module.exports = confettiCannon(null, {
        useWorker: true,
        resize: true
    });
    module.exports.create = confettiCannon;
})(function() {
    if (typeof window !== 'undefined') return window;
    if (typeof self !== 'undefined') return self;
    return this || {
    };
}(), module1, false);
exports.default = module1.exports;
var create = module1.exports.create;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hL6mY"}]},["47LOG","cnwwq"], "cnwwq", "parcelRequire1222")

