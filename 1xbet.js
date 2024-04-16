(function(modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }

    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;

    return module.exports;
  }

  __webpack_require__.m = modules;

  __webpack_require__.c = installedModules;

  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter });
    }
  };

  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };

  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  __webpack_require__.n = function(module) {
    var getter = module && module.__esModule ? function getDefault() {
      return module['default'];
    } : function getModuleExports() {
      return module;
    };
    __webpack_require__.d(getter, 'a', getter);
    return getter;
  };

  __webpack_require__.h = function() {
    var currentScript = document.currentScript;
    if (!currentScript) {
      try {
        throw new Error();
      } catch (err) {
        currentScript = err.stack.split(/\n/)[1].match(/([^\\/]+\.js):\d+:\d+/)[1];
      }
    }
    return currentScript;
  };

  __webpack_require__.u = function(module) {
    Object.keys(module).forEach(function(key) {
      __webpack_require__.d(module, key, function(exports) {
        var ret = module[key];
        if (typeof ret === 'function') {
          module[key] = function() {
            var args = Array.prototype.slice.call(arguments, 0);
            args.unshift(module.exports);
            return ret.apply(null, args);
          };
        }
        return ret;
      });
    });
  };

  var module = __webpack_require__(__webpack_require__.s = 0);

  if (module.exports) {
    console.warn("To load an ES module, set \"type\": \"module\" in the script tag.");
  }
})([
  /* 0 */
  function(module, exports, __webpack_require__) {
    var global = __webpack_require__(1);
    var self = __webpack_require__(2);
    var DOMTokenList = __webpack_require__(3);

    __webpack_require__.u(global);
    __webpack_require__.u(self);
    __webpack_require__.u(DOMTokenList);
  },
  /* 1 */
  function(module, exports) {
    module.exports = self;
  },
  /* 2 */
  function(module, exports) {
    module.exports = self;
  },
  /* 3 */
  function(module, exports, __webpack_require__) {
    var global = __webpack_require__(1);
    var DOMTokenList = global.DOMTokenList;
    var DOMTokenListProto = DOMTokenList && DOMTokenList.prototype;

    module.exports = DOMTokenList;

    if (false) {
      if (typeof window === 'object' && window && window.Object === Object && window.document) {
        if (!DOMTokenList) {
          DOMTokenList = function DOMTokenList() {
            throw new TypeError('Illegal constructor');
          };
        }

        if (!DOMTokenListProto.forEach) {
          DOMTokenListProto.forEach = function(callback) {
            var args = arguments;
            this.forEach(function(token) {
              callback.apply(this, args);
            });
          };
        }

        if (!DOMTokenListProto.includes) {
          DOMTokenListProto.includes = function(token) {
            return this.contains(token);
          };
        }
      }
    }
  }
]);
