var dummy =
uianimJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: 'App',
    data: function data() {
        return {
            disable: window.uianim.disable,
            style: window.uianim.style,
            connect: 'da',
            notification: '',
            isError: false,
            styleList: [{
                name: 'Default',
                value: ''
            }, {
                name: 'Creative',
                value: 'style1'
            }, {
                name: 'Snappy',
                value: 'style2'
            }, {
                name: 'Soft',
                value: 'style3'
            }, {
                name: 'Laser',
                value: 'style4'
            }, {
                name: 'Elastic',
                value: 'style5'
            }, {
                name: 'Linear',
                value: 'style6'
            }, {
                name: 'Magic',
                value: 'style7'
            }, {
                name: 'SCI-FI',
                value: 'style8'
            }]
        };
    },

    watch: {
        disable: function disable(val) {
            this.updateSettings('disable', val);
        },
        style: function style(val) {
            this.updateSettings('style', val);
        }
    },
    methods: {
        updateSettings: function updateSettings(setName, setVal) {
            var _this = this;

            this.notification = 'Your settings are being saved...';
            var requestData = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': uianim.nonce
                },
                method: 'POST',
                body: JSON.stringify({
                    name: setName,
                    value: setVal
                })
            };

            fetch(uianim.rest, requestData).then(function (res) {
                return res.json();
            }).then(function (res) {
                _this.notification = '';
                _this.notification = res.message;
                if (!res.success) {
                    _this.isError = true;
                }
                setTimeout(function () {
                    _this.notification = '';
                    _this.isError = false;
                }, 5000);
            }).catch(function (err) {
                _this.notification = '';
                _this.notification = 'Something went wrong!';
                _this.isError = true;
                setTimeout(function () {
                    _this.notification = '';
                }, 5000);
            });
        },
        connectToUiCoreAnimate: function connectToUiCoreAnimate() {
            window.location.href = 'https://my.uicore.co/connect/?ui_connect=true&ui_connect_url=' + uianim.root + '&ui_free_prod=Animate';
        }
    }
};

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import router from './router'

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
    el: '#uianim-settings',
    render: function render(h) {
        return h(_App2.default);
    }
});

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6acfb55b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(15);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(13)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6acfb55b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\settings\\App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6acfb55b", Component.options)
  } else {
    hotAPI.reload("data-v-6acfb55b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "uicore-animate" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.notification,
            expression: "notification"
          }
        ],
        staticClass: "uianim-notification",
        class: [{ "uianim-error": _vm.isError }]
      },
      [_vm._v("\n        " + _vm._s(_vm.notification) + "\n    ")]
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm.connect === "none"
      ? _c("div", [
          _c("h5", [_vm._v("Connect to UiCore Animate")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Connect to UiCore Animate to get access to all the features."
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "uianim-btn",
              on: { click: _vm.connectToUiCoreAnimate }
            },
            [_vm._v("\n            Connect\n        ")]
          )
        ])
      : _c("div", { staticClass: "uianim-settings" }, [
          _c("label", { attrs: { for: "uianim_split_type" } }, [
            _vm._v("Animation style")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.style,
                  expression: "style"
                }
              ],
              attrs: { id: "uianim_split_type" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.style = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            _vm._l(_vm.styleList, function(styleType) {
              return _c(
                "option",
                { key: styleType.value, domProps: { value: styleType.value } },
                [_vm._v(_vm._s(styleType.name))]
              )
            })
          ),
          _vm._v(" "),
          _c("label", { staticClass: "uianim-checkbox" }, [
            _vm._v(
              "\n            Disable UiCore Animate from Editor \n            "
            ),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.disable,
                  expression: "disable"
                }
              ],
              attrs: { type: "checkbox", id: "disable" },
              domProps: {
                checked: Array.isArray(_vm.disable)
                  ? _vm._i(_vm.disable, null) > -1
                  : _vm.disable
              },
              on: {
                change: function($event) {
                  var $$a = _vm.disable,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.disable = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.disable = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.disable = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "uianim-check" })
          ])
        ]),
    _vm._v(" "),
    _c("h3", [_vm._v("Faq")]),
    _vm._v(" "),
    _c("p", { staticStyle: { "margin-bottom": "20px" } }, [
      _vm._v(
        "If you can’t find what you’re looking for, please don’t hesitate to contact our customer support team. We’re always here to help."
      )
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "Not at all. The plugin only replaces the CSS animations from Elementor so it has zero impact on performance."
      )
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "Yes, you can use it with any theme that supports Elementor Page Builder."
      )
    ]),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("p", [_vm._v("No. You cannot use UiCore Animate without Elementor.")]),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c("p", [_vm._v("Yes, absolutely.")]),
    _vm._v(" "),
    _vm._m(5),
    _vm._v(" "),
    _c("p", { staticStyle: { "margin-bottom": "0" } }, [
      _vm._v(
        "No. This is a lightweight plugin and the chances of affecting the site are minimal."
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uianim-header-title" }, [
      _c("h2", [_vm._v("UiCore Animate")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "UiCore Animate is a plugin that allows you to add animation to your website."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("Does UiCore Animate affect my website performance?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("Can I use UiCore Animate with any theme?")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("b", [_vm._v("Is this a standalone plugin?")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("b", [_vm._v("Does it work with Elementor PRO?")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("b", [_vm._v("Will UiCore Animate break my site after an update?")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6acfb55b", esExports)
  }
}

/***/ })
],[9]);