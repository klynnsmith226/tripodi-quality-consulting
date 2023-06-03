var dummy =
uianimJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _popupBase = __webpack_require__(19);

var _popupBase2 = _interopRequireDefault(_popupBase);

var _close = __webpack_require__(22);

var _close2 = _interopRequireDefault(_close);

var _uicoreMiniToggle = __webpack_require__(24);

var _uicoreMiniToggle2 = _interopRequireDefault(_uicoreMiniToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
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

// ensure elemnt delet after applaying animation
// fix render issue with not re rendering the element and just adding the animation class without removing the old one


exports.default = {
  name: "App",
  components: {
    uibase: _popupBase2.default,
    toggle: _uicoreMiniToggle2.default,
    close: _close2.default
  },
  data: function data() {
    return {
      active: true,
      group: false,
      stagger: false,
      apply: false,

      widgetModels: {},
      split: 0,
      currentModelCid: 0,
      selectedAnimation: "fadeIn",
      selectedDuration: "",
      inputDelay: "200",
      inputStagger: "200",
      animations: window.uicore_animations_list,
      durations: [{ text: "Slow", value: "slow" }, { text: "Normal", value: "" }, { text: "Fast", value: "fast" }],
      selectedSplit: "default",
      selectedSplitBy: "chars",
      selectedSplitAnimation: "fadeIn",
      inputSplitDelay: "200",
      inputSplitStagger: "20",
      inputSplitSpeed: "1200",
      splitTypes: [{ text: "Chars", value: "chars" }, { text: "Words", value: "words" }, { text: "Lines", value: "lines" }],
      splitAnimations: [{ text: "Fade In Up", value: "fadeInUp" }, { text: "Fade In Down", value: "fadeInDown" }, { text: "Fade In Left", value: "fadeInLeft" }, { text: "Fade In Right", value: "fadeInRight" }, { text: "Fade In Up Alt", value: "fadeInUpAlt" }, { text: "Fade In", value: "fadeIn" }, { text: "Zoom In", value: "zoomIn" }, { text: "Roll In", value: "rollIn" }],
      dragging: null,
      keys: []
    };
  },
  mounted: function mounted() {
    var self = this;
    elementor.hooks.addAction("panel/open_editor/widget", function (panel, model) {
      self.setModel(model);
      self.toggleActive();
    });
    jQuery(function () {
      jQuery(".uicore-base").draggable({
        handle: ".uicore-base_title"
      });
    });
    // console.log("mounted");
  },


  methods: {
    clearList: function clearList() {
      this.widgetModels = {};
      this.keys = [];
      this.currentModelCid = 0;
    },
    dragStart: function dragStart(key) {
      // console.log("dragStart", key);
      this.dragging = key;
    },
    dragOver: function dragOver(event) {
      event.preventDefault();
    },
    drop: function drop(key) {
      //   console.log("dropped ", this.dragging);
      //   console.log("at ", key);
      var item = this.widgetModels[this.dragging];
      var keys = [].concat(_toConsumableArray(this.keys));
      var widgetModels = Object.assign({}, this.widgetModels);

      keys.splice(keys.indexOf(this.dragging), 1);
      keys.splice(keys.indexOf(key), 0, this.dragging);

      var newWidgetModels = {};
      keys.forEach(function (k) {
        newWidgetModels[k] = widgetModels[k];
      });

      this.keys = keys;
      this.widgetModels = newWidgetModels;
      this.dragging = null;
    },
    remove: function remove(key) {
      //clone widgets and keys
      var widgetModels = Object.assign({}, this.widgetModels);
      var keys = [].concat(_toConsumableArray(this.keys));

      //remove the widget
      delete widgetModels[key];
      keys.splice(keys.indexOf(key), 1);

      this.keys = keys;
      this.widgetModels = widgetModels;
      if (this.currentModelCid == key) {
        if (this.keys.length > 0) {
          this.currentModelCid = this.keys[0];
        } else {
          this.currentModelCid = 0;
        }
      }
      this.changeActiveModel(this.currentModelCid);
    },
    changeActiveModel: function changeActiveModel(widgetId) {
      // console.log("changeActiveModel", widgetId);
      var context = elementor.documents.getCurrent().$element;
      // Get the widget element by its ID
      var widgetElement = context.find(".elementor-element-" + widgetId);
      // Click the widget to open the editor
      widgetElement.click();
      elementor.helpers.scrollToView(elementor.getCurrentElement().$el, 100);
    },
    toggleActive: function toggleActive() {
      this.active = true;
    },
    reset: function reset() {
      this.selectedAnimation = "";
      this.selectedDuration = "";
      this.inputDelay = "200";
      this.inputStagger = "200";
      this.selectedSplit = "default";
      this.selectedSplitBy = "chars";
      this.selectedSplitAnimation = "fadeIn";
      this.inputSplitDelay = "200";
      this.inputSplitStagger = "20";
      this.inputSplitSpeed = "1200";
    },
    setModel: function setModel(model) {
      // console.log("setting model");
      // console.log(model);
      if (this.active) {
        //Stop updateing the model when setting the props by fiering the watcher
        var localApply = this.apply;
        var self = this;
        this.apply = false;
        // console.log("apply is false");
        this.currentModelCid = model.cid;
        var widgetId = model.cid;
        if (!this.group) {
          this.split = 0;
          this.widgetModels = {};
          this.keys = [];
          this.selectedAnimation = model.attributes.settings.attributes._animation + "";
          this.selectedDuration = model.attributes.settings.attributes.animation_duration + "";
          this.inputDelay = model.attributes.settings.attributes._animation_delay + "";

          // if(model.attributes.settings.attributes.hasOwnProperty('ui_animate_split')){
          //     this.selectedSplit = model.attributes.settings.attributes.ui_animate_split == 'ui-split-animate' ? true : false
          //     this.selectedSplitBy = model.attributes.settings.attributes.ui_animate_split_by + ''
          //     this.selectedSplitAnimation = model.attributes.settings.attributes.ui_animate_split_style + ''
          //     this.inputSplitDelay = model.attributes.settings.attributes.ui_animate_split_delay.size + ''
          //     this.inputSplitSpeed = model.attributes.settings.attributes.ui_animate_split_speed.size + ''
          //     this.inputSplitStagger = model.attributes.settings.attributes.ui_animate_split_stager.size + ''
          // }
        }
        // if(model.attributes.settings.attributes.hasOwnProperty('ui_animate_split') && this.split != -1){
        //     this.split = 1
        // }else{
        //     this.split = -1
        // }

        this.keys.push(widgetId);
        this.widgetModels[widgetId] = {};
        this.widgetModels[widgetId]["uianim_id"] = model.id;
        this.widgetModels[widgetId]["uianim_name"] = model.attributes.settings.attributes._title || model.attributes.widgetType;

        setTimeout(function () {
          self.apply = localApply;
        }, 300);
      }
    },
    change: function change() {
      // console.log("change");
      var i = 0;
      for (var cid in this.widgetModels) {
        i++;
        this.update(cid, i);
      }
    },
    update: function update(cid, index) {
      // console.log("update");
      var widgetId = this.widgetModels[cid].uianim_id;
      var widget = elementor.getContainer(widgetId);
      var settings = {}; //JSON.parse(JSON.stringify(widget.settings.attributes));
      var oldAnimation = widget.settings.attributes._animation + "";
      // console.log(oldAnimation);
      settings._animation = this.selectedAnimation + "";
      settings.animation_duration = this.selectedDuration + "";
      var delay = isNaN(parseInt(this.inputDelay)) ? 0 : parseInt(this.inputDelay);
      // console.log(delay);
      settings._animation_delay = this.stagger ? delay + this.inputStagger * index : this.inputDelay + "";
      if (this.split == 1 && this.selectedSplit) {
        settings.ui_animate_split = this.selectedSplit ? "ui-split-animate" : "";
        settings.ui_animate_split_by = this.selectedSplitBy;
        settings.ui_animate_split_style = this.selectedSplitAnimation;
        settings.ui_animate_split_delay = widget.settings.attributes.ui_animate_split_delay;
        settings.ui_animate_split_delay.size = this.stagger ? parseInt(this.inputSplitDelay) + this.inputStagger * index : this.inputSplitDelay;
        settings.ui_animate_split_speed = widget.settings.attributes.ui_animate_split_speed;
        settings.ui_animate_split_speed.size = this.inputSplitSpeed;
        settings.ui_animate_split_stager = widget.settings.attributes.ui_animate_split_stager;
        settings.ui_animate_split_stager.size = this.inputSplitStagger;
      }
      this.applyPasteStyleData([widget], [settings], oldAnimation);
    },
    applyPasteStyleData: function applyPasteStyleData(containers, data, toRemove) {
      var _this = this;

      containers.forEach(function (targetContainer) {
        var targetSettings = targetContainer.settings,
            targetSettingsAttributes = targetSettings.attributes,
            targetControls = targetSettings.controls,
            diffSettings = {};

        data.forEach(function (sourceSettingsData) {
          var sourceSettings = sourceSettingsData;

          Object.entries(targetControls).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                controlName = _ref2[0],
                control = _ref2[1];

            var controlSourceValue = sourceSettings[controlName];
            var controlTargetValue = targetSettingsAttributes[controlName];

            if (!_this.validateControls(controlSourceValue, controlTargetValue)) {
              return;
            }

            if (!elementor.getControlView(control.type).onPasteStyle(control, controlSourceValue)) {
              return;
            }

            diffSettings[controlName] = controlSourceValue;
          });

          // console.log(diffSettings);
          window.top.$e.run("document/elements/settings", {
            container: targetContainer,
            settings: diffSettings,
            options: {
              external: true,
              render: false
            }
          });
          targetContainer.view.$el.removeClass(toRemove);
          targetContainer.view.$el.addClass(_this.selectedAnimation);
          // targetContainer.render();
          // panel.getCurrentPageView().model.refresh();
          elementorFrontend.elementsHandler.runReadyTrigger(targetContainer.view.el);
        });
      });
    },
    validateControls: function validateControls(source, target) {
      var result = true;

      // Cannot use `_.isEmpty()` does not pass paste style test.
      if (null === source || null === target || undefined === source || undefined === target || "object" === (typeof source === "undefined" ? "undefined" : _typeof(source)) ^ "object" === (typeof target === "undefined" ? "undefined" : _typeof(target))) {
        result = false;
      }

      return result;
    }
  },

  watch: {
    selectedAnimation: function selectedAnimation(val, oldVal) {
      if (this.apply) {
        this.change();
      }
    },
    selectedDuration: function selectedDuration(val) {
      if (this.apply) {
        this.change();
      }
    },
    inputDelay: function inputDelay(val) {
      if (this.apply) {
        this.change();
      }
    },
    selectedSplit: function selectedSplit(val) {
      if (this.apply) {
        this.change();
      }
    },
    selectedSplitBy: function selectedSplitBy(val) {
      if (this.apply) {
        this.change();
      }
    },
    selectedSplitAnimation: function selectedSplitAnimation(val) {
      if (this.apply) {
        this.change();
      }
    },
    inputSplitDelay: function inputSplitDelay(val) {
      if (this.apply) {
        this.change();
      }
    },
    inputSplitStagger: function inputSplitStagger(val) {
      if (this.apply) {
        this.change();
      }
    },
    inputSplitSpeed: function inputSplitSpeed(val) {
      if (this.apply) {
        this.change();
      }
    },
    stagger: function stagger(val) {
      if (this.apply) {
        this.change();
      }
    }
  }
};

/***/ }),
/* 6 */
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

exports.default = {
    name: 'uibase',
    props: ['title', 'scroll'],
    methods: {
        close: function close() {
            this.$emit('close');
        }
    }

};

/***/ }),
/* 7 */
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

exports.default = {};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var DEFAULT_COLOR_CHECKED = 'var(--uicore-primary,#532df5)';
var DEFAULT_COLOR_UNCHECKED = 'var(--uicore-base-input-focus-bg)';
var DEFAULT_LABEL_CHECKED = 'on';
var DEFAULT_LABEL_UNCHECKED = 'off';
var DEFAULT_SWITCH_COLOR = '#fff';

var contains = function contains(object, title) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.hasOwnProperty(title);
};

var px = function px(v) {
    return v + 'px';
};

var translate3d = function translate3d(x, y) {
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0px';

    return 'translate3d(' + x + ', ' + y + ', ' + z + ')';
};

exports.default = {
    name: 'ToggleButton',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        sync: {
            type: Boolean,
            default: false
        },
        speed: {
            type: Number,
            default: 300
        },
        color: {
            type: [String, Object],
            validator: function validator(value) {
                return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.checked || value.unchecked || value.disabled : typeof value === 'string';
            }
        },
        switchColor: {
            type: [String, Object],
            validator: function validator(value) {
                return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.checked || value.unchecked : typeof value === 'string';
            }
        },
        cssColors: {
            type: Boolean,
            default: false
        },
        labels: {
            type: [Boolean, Object],
            default: false,
            validator: function validator(value) {
                return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.checked || value.unchecked : typeof value === 'boolean';
            }
        },
        height: {
            type: Number,
            default: 22
        },
        width: {
            type: Number,
            default: 50
        },
        margin: {
            type: Number,
            default: 3
        },
        fontSize: {
            type: Number
        }
    },
    computed: {
        className: function className() {
            var toggled = this.toggled,
                disabled = this.disabled;


            return ['vue-js-switch', { toggled: toggled, disabled: disabled }];
        },
        coreStyle: function coreStyle() {
            return {
                width: px(this.width),
                height: px(this.height),
                backgroundColor: this.cssColors ? null : this.disabled ? this.colorDisabled : this.colorCurrent,
                borderRadius: px(Math.round(this.height / 2))
            };
        },
        buttonRadius: function buttonRadius() {
            return this.height - this.margin * 2;
        },
        distance: function distance() {
            return px(this.width - this.height + this.margin);
        },
        buttonStyle: function buttonStyle() {
            var transition = 'transform ' + this.speed + 'ms';
            var margin = px(this.margin);

            var transform = this.toggled ? translate3d(this.distance, margin) : translate3d(margin, margin);

            var background = this.switchColor ? this.switchColorCurrent : null;

            return {
                width: px(this.buttonRadius),
                height: px(this.buttonRadius),
                transition: transition,
                transform: transform,
                background: background
            };
        },
        labelStyle: function labelStyle() {
            return {
                lineHeight: px(this.height),
                fontSize: this.fontSize ? px(this.fontSize) : null
            };
        },
        colorChecked: function colorChecked() {
            var color = this.color;


            if ((typeof color === 'undefined' ? 'undefined' : _typeof(color)) !== 'object') {
                return color || DEFAULT_COLOR_CHECKED;
            }

            return contains(color, 'checked') ? color.checked : DEFAULT_COLOR_CHECKED;
        },
        colorUnchecked: function colorUnchecked() {
            var color = this.color;


            return contains(color, 'unchecked') ? color.unchecked : DEFAULT_COLOR_UNCHECKED;
        },
        colorDisabled: function colorDisabled() {
            var color = this.color;


            return contains(color, 'disabled') ? color.disabled : this.colorCurrent;
        },
        colorCurrent: function colorCurrent() {
            return this.toggled ? this.colorChecked : this.colorUnchecked;
        },
        labelChecked: function labelChecked() {
            var labels = this.labels;


            return contains(labels, 'checked') ? labels.checked : DEFAULT_LABEL_CHECKED;
        },
        labelUnchecked: function labelUnchecked() {
            var labels = this.labels;


            return contains(labels, 'unchecked') ? labels.unchecked : DEFAULT_LABEL_UNCHECKED;
        },
        switchColorChecked: function switchColorChecked() {
            var switchColor = this.switchColor;


            return contains(switchColor, 'checked') ? switchColor.checked : DEFAULT_SWITCH_COLOR;
        },
        switchColorUnchecked: function switchColorUnchecked() {
            var switchColor = this.switchColor;


            return contains(switchColor, 'unchecked') ? switchColor.unchecked : DEFAULT_SWITCH_COLOR;
        },
        switchColorCurrent: function switchColorCurrent() {
            var switchColor = this.switchColor;


            if ((typeof switchColor === 'undefined' ? 'undefined' : _typeof(switchColor)) !== 'object') {
                return switchColor || DEFAULT_SWITCH_COLOR;
            }

            return this.toggled ? this.switchColorChecked : this.switchColorUnchecked;
        },


        toggled: {
            set: function set(val) {
                // if (val) {
                //     this.value === 'true';
                // } else {
                //     this.value === 'false';
                // }
                return val;
            },
            get: function get() {
                // if (this.value === 'true') {
                //     return true;
                // } else if (this.value === 'false') {
                //     return false;
                // }
                return this.value;
            }
        }
    },
    methods: {
        toggle: function toggle() {
            this.toggled = !this.toggled;
            if (!this.toggled) {
                this.$emit('input', true);
            } else {
                this.$emit('input', false);
            }
        },
        set: function set() {
            if (this.value === true) {
                this.toggled = true;
            } else {
                this.toggled = false;
            }
        }
    }
};

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(17);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import router from './router'

_vue2.default.config.productionTip = false;

document.addEventListener("DOMContentLoaded", function () {
    /* eslint-disable no-new */
    // Create a div element
    var div = document.createElement('div');

    // SVG Markup
    var svg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 15C3 19.9706 7.02944 24 12 24C16.9706 24 21 19.9706 21 15L21 10C21 9.48893 20.9574 8.98781 20.8756 8.49999C20.1614 12.7566 16.4595 16 12 16C7.54051 16 3.83855 12.7566 3.12444 8.5C3.0426 8.98781 3 9.48893 3 10L3 15Z" fill="black" fill-opacity="0.1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12L21 10C21 9.65181 20.9802 9.30825 20.9417 8.97036C20.4628 12.931 17.0898 16 13 16L11 16C6.91018 16 3.53715 12.931 3.05825 8.97036C3.01977 9.30825 3 9.65182 3 10L3 12Z" fill="black" fill-opacity="0.2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9ZM12 18C7.02944 18 3 13.9706 3 9C3 4.02944 7.02944 0 12 0C16.9706 0 21 4.02944 21 9C21 13.9706 16.9706 18 12 18ZM11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V8.6301L13.2526 8.91426C13.6195 9.32704 14.2516 9.3642 14.6644 8.99727C15.0772 8.63034 15.1143 7.99827 14.7474 7.5855L12.7474 5.33562C12.5576 5.12214 12.2856 5 12 5C11.7144 5 11.4424 5.12214 11.2526 5.33562L9.25261 7.5855C8.88568 7.99827 8.92284 8.63035 9.33562 8.99727C9.74839 9.3642 10.3805 9.32704 10.7474 8.91427L11 8.6301V12Z" fill="black"/></svg>';

    // Append the SVG element to the div
    div.innerHTML = svg;

    // Add a class to the div
    div.classList.add('uianim-start');

    // Append the div to the body
    document.getElementById('elementor-preview').appendChild(div);

    console.log('div added');
    // Add a click event listener to the div
    div.addEventListener("click", function () {

        div.hidden = true;
        // Create a new Vue instance
        var vue = new _vue2.default({
            el: '#uianim-app',
            // router,
            destroyed: function destroyed() {
                console.log('done');
                // this.$el.innerHTML = '<p>done</p>';
            },
            render: function render(h) {
                return h(_App2.default);
            }
        });

        // Add a click event listener to the close button
        setTimeout(function () {
            document.querySelector('.uicore-base_close').addEventListener("click", function () {
                console.log('destroying vue instance');
                console.log(vue);
                vue.$destroy();
                div.hidden = false;
                document.getElementById('uianim-wrapp').innerHTML = '<div id="uianim-app"></div>';
            });
        }, 400);
    });
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_200a6b1e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(27);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_200a6b1e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-200a6b1e", Component.options)
  } else {
    hotAPI.reload("data-v-200a6b1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popup_base_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popup_base_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popup_base_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popup_base_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popup_base_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e08ca8dc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popup_base_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_popup_base_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e08ca8dc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_popup_base_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\popup-base.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e08ca8dc", Component.options)
  } else {
    hotAPI.reload("data-v-e08ca8dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "uicore-base" }, [
    _c("div", { staticClass: "uicore-base_header" }, [
      _c("div", {
        staticClass: "uicore-base_title",
        domProps: { innerHTML: _vm._s(_vm.title) }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "uicore-base_close", on: { click: _vm.close } },
        [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none"
              }
            },
            [
              _c("path", {
                attrs: {
                  d: "M18 6L6 18",
                  stroke: "#0F172A",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }
              }),
              _vm._v(" "),
              _c("path", {
                attrs: {
                  d: "M6 6L18 18",
                  stroke: "#0F172A",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }
              })
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "uicore-base_content" },
      [
        _vm.scroll
          ? _c("perfect-scrollbar", [_vm._t("default")], 2)
          : _vm._t("default")
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e08ca8dc", esExports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6749abf2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_close_vue__ = __webpack_require__(23);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_close_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6749abf2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_close_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\components\\close.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6749abf2", Component.options)
  } else {
    hotAPI.reload("data-v-6749abf2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      on: {
        click: function($event) {
          _vm.$emit("action")
        }
      }
    },
    [
      _c(
        "svg",
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none"
          }
        },
        [
          _c("path", {
            attrs: {
              d: "M18 6L6 18",
              stroke: "#0F172A",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }
          }),
          _vm._v(" "),
          _c("path", {
            attrs: {
              d: "M6 6L18 18",
              stroke: "#0F172A",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6749abf2", esExports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_uicore_mini_toggle_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_uicore_mini_toggle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_uicore_mini_toggle_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_uicore_mini_toggle_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_uicore_mini_toggle_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0653b430_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_uicore_mini_toggle_vue__ = __webpack_require__(26);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0653b430"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_uicore_mini_toggle_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0653b430_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_uicore_mini_toggle_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\admin\\uicore-mini-toggle.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0653b430", Component.options)
  } else {
    hotAPI.reload("data-v-0653b430", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    { class: _vm.className },
    [
      _c("input", {
        staticClass: "v-switch-input",
        attrs: { type: "checkbox", name: _vm.name, disabled: _vm.disabled },
        domProps: { checked: _vm.toggled },
        on: {
          change: function($event) {
            $event.stopPropagation()
            _vm.toggle($event)
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "v-switch-core", style: _vm.coreStyle }, [
        _c("div", { staticClass: "v-switch-button", style: _vm.buttonStyle })
      ]),
      _vm._v(" "),
      _vm.labels
        ? [
            _vm.toggled
              ? _c(
                  "span",
                  {
                    staticClass: "v-switch-label v-left",
                    style: _vm.labelStyle
                  },
                  [_vm._t("checked", [[_vm._v(_vm._s(_vm.labelChecked))]])],
                  2
                )
              : _c(
                  "span",
                  {
                    staticClass: "v-switch-label v-right",
                    style: _vm.labelStyle
                  },
                  [_vm._t("unchecked", [[_vm._v(_vm._s(_vm.labelUnchecked))]])],
                  2
                )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0653b430", esExports)
  }
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ui-animate" },
    [
      _c(
        "uibase",
        {
          attrs: {
            title:
              "<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n  <path class='fill' fill-rule='evenodd' clip-rule='evenodd' d='M5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12ZM5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7C5.44772 7 5 7.44772 5 8ZM6 5C5.44772 5 5 4.55229 5 4C5 3.44771 5.44772 3 6 3C6.55228 3 7 3.44771 7 4C7 4.55229 6.55228 5 6 5ZM9 12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12ZM9 8C9 8.55228 9.44772 9 10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8ZM10 5C9.44772 5 9 4.55229 9 4C9 3.44771 9.44772 3 10 3C10.5523 3 11 3.44771 11 4C11 4.55229 10.5523 5 10 5Z' fill='%23303036'></path>\n</svg>\nUiCore Animate",
            scroll: false
          }
        },
        [
          _vm.currentModelCid != 0 && _vm.active
            ? _c("div", { staticClass: "uianim-content" }, [
                _c(
                  "ul",
                  { staticClass: "uianim-widgets" },
                  [
                    _vm._l(_vm.widgetModels, function(model, cid) {
                      return _c(
                        "li",
                        {
                          key: model.uianim_id,
                          class: {
                            "uianim-is-active": cid == _vm.currentModelCid
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "uianim-widget",
                              attrs: { draggable: "true" },
                              on: {
                                dragover: _vm.dragOver,
                                drop: function($event) {
                                  _vm.drop(cid)
                                },
                                dragstart: function($event) {
                                  _vm.dragStart(cid)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(model.uianim_name) +
                                  "\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("close", {
                            on: {
                              action: function($event) {
                                _vm.remove(cid)
                              }
                            }
                          })
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _vm.keys.length > 1
                      ? _c(
                          "span",
                          {
                            staticClass: "uianim-remove",
                            on: {
                              click: function($event) {
                                _vm.clearList()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n            Remove All Widgets\n          "
                            )
                          ]
                        )
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "uicore-core-setting" },
                  [
                    _c("label", { staticClass: "uicore_h2" }, [
                      _vm._v(" Auto Apply ")
                    ]),
                    _vm._v(" "),
                    _c("toggle", {
                      attrs: {
                        height: 16,
                        width: 28,
                        "switch-color": {
                          checked: "#ffffff",
                          unchecked: "#2E3546"
                        }
                      },
                      model: {
                        value: _vm.apply,
                        callback: function($$v) {
                          _vm.apply = $$v
                        },
                        expression: "apply"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "uicore-core-setting" },
                  [
                    _c("label", { staticClass: "uicore_h2" }, [
                      _vm._v("Animate Multiple Widgets")
                    ]),
                    _vm._v(" "),
                    _c("toggle", {
                      attrs: {
                        height: 16,
                        width: 28,
                        "switch-color": {
                          checked: "#ffffff",
                          unchecked: "#2E3546"
                        }
                      },
                      model: {
                        value: _vm.group,
                        callback: function($$v) {
                          _vm.group = $$v
                        },
                        expression: "group"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.group
                  ? _c(
                      "div",
                      { staticClass: "uicore-core-setting" },
                      [
                        _c("label", { staticClass: "uicore_h2" }, [
                          _vm._v("Delay Between Widgets")
                        ]),
                        _vm._v(" "),
                        _c("toggle", {
                          attrs: {
                            height: 16,
                            width: 28,
                            "switch-color": {
                              checked: "#ffffff",
                              unchecked: "#2E3546"
                            }
                          },
                          model: {
                            value: _vm.stagger,
                            callback: function($$v) {
                              _vm.stagger = $$v
                            },
                            expression: "stagger"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.stagger && _vm.group
                  ? _c("div", { staticClass: "uicore-core-setting" }, [
                      _c("label", { staticClass: "uicore_h2" }, [
                        _vm._v("Items Delay")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inputStagger,
                            expression: "inputStagger"
                          }
                        ],
                        attrs: { type: "text" },
                        domProps: { value: _vm.inputStagger },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.inputStagger = $event.target.value
                          }
                        }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "uicore-core-setting" }, [
                  _c(
                    "label",
                    {
                      staticClass: "uicore_h2",
                      attrs: { for: "uianim_animation" }
                    },
                    [_vm._v("Animation")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.selectedAnimation,
                          expression: "selectedAnimation"
                        }
                      ],
                      attrs: { id: "uianim_animation" },
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
                          _vm.selectedAnimation = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [_vm._v("None")]),
                      _vm._v(" "),
                      _vm._l(_vm.animations, function(group, groupName) {
                        return _c(
                          "optgroup",
                          { key: groupName, attrs: { label: groupName } },
                          _vm._l(group, function(animation, animationName) {
                            return _c(
                              "option",
                              {
                                key: animationName,
                                domProps: { value: animationName }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(animation) +
                                    "\n              "
                                )
                              ]
                            )
                          })
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _vm.selectedAnimation != ""
                  ? _c("div", [
                      _c(
                        "div",
                        { staticClass: "uicore-core-setting uicore-sub" },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "uicore_h2",
                              attrs: { for: "uianim_duration" }
                            },
                            [_vm._v("Duration")]
                          ),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selectedDuration,
                                  expression: "selectedDuration"
                                }
                              ],
                              attrs: { id: "uianim_duration" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.selectedDuration = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                }
                              }
                            },
                            _vm._l(_vm.durations, function(duration) {
                              return _c(
                                "option",
                                {
                                  key: duration.value,
                                  domProps: { value: duration.value }
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(duration.text) +
                                      "\n              "
                                  )
                                ]
                              )
                            })
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "uicore-core-setting uicore-sub" },
                        [
                          _c(
                            "label",
                            {
                              staticClass: "uicore_h2",
                              attrs: { for: "uianim_delay" }
                            },
                            [_vm._v("Delay")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.inputDelay,
                                expression: "inputDelay"
                              }
                            ],
                            attrs: { id: "uianim_delay", type: "text" },
                            domProps: { value: _vm.inputDelay },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.inputDelay = $event.target.value
                              }
                            }
                          })
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.split == 1
                  ? _c(
                      "div",
                      { staticClass: "uicore-core-setting" },
                      [
                        _c("label", { staticClass: "uicore_h2" }, [
                          _vm._v(" Split Text Animation")
                        ]),
                        _vm._v(" "),
                        _c("toggle", {
                          attrs: {
                            height: 16,
                            width: 28,
                            "switch-color": {
                              checked: "#ffffff",
                              unchecked: "#2E3546"
                            },
                            color: {
                              checked: "var(--uicore-primary)",
                              unchecked: "var(--uicore-base-input-focus-bg)"
                            }
                          },
                          model: {
                            value: _vm.selectedSplit,
                            callback: function($$v) {
                              _vm.selectedSplit = $$v
                            },
                            expression: "selectedSplit"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.split == 1 && _vm.selectedSplit
                  ? _c("div", [
                      _c("div", { staticClass: "uicore-core-setting" }, [
                        _c(
                          "label",
                          {
                            staticClass: "uicore_h2",
                            attrs: { for: "uianim_split_type" }
                          },
                          [_vm._v("Split By")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.selectedSplitBy,
                                expression: "selectedSplitBy"
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
                                _vm.selectedSplitBy = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          _vm._l(_vm.splitTypes, function(splitType) {
                            return _c(
                              "option",
                              {
                                key: splitType.value,
                                domProps: { value: splitType.value }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(splitType.text) +
                                    "\n              "
                                )
                              ]
                            )
                          })
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uicore-core-setting" }, [
                        _c(
                          "label",
                          {
                            staticClass: "uicore_h2",
                            attrs: { for: "uianim_split_animation" }
                          },
                          [_vm._v("Animation")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.selectedSplitAnimation,
                                expression: "selectedSplitAnimation"
                              }
                            ],
                            attrs: { id: "uianim_split_animation" },
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
                                _vm.selectedSplitAnimation = $event.target
                                  .multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          _vm._l(_vm.splitAnimations, function(animation) {
                            return _c(
                              "option",
                              {
                                key: animation.value,
                                domProps: { value: animation.value }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(animation.text) +
                                    "\n              "
                                )
                              ]
                            )
                          })
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uicore-core-setting" }, [
                        _c(
                          "label",
                          {
                            staticClass: "uicore_h2",
                            attrs: { for: "uianim_split_duration" }
                          },
                          [_vm._v("Duration")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputSplitSpeed,
                              expression: "inputSplitSpeed"
                            }
                          ],
                          attrs: { id: "uianim_split_duration", type: "text" },
                          domProps: { value: _vm.inputSplitSpeed },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.inputSplitSpeed = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uicore-core-setting" }, [
                        _c(
                          "label",
                          {
                            staticClass: "uicore_h2",
                            attrs: { for: "uianim_split_delay" }
                          },
                          [_vm._v("Delay")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputSplitDelay,
                              expression: "inputSplitDelay"
                            }
                          ],
                          attrs: { id: "uianim_split_delay", type: "text" },
                          domProps: { value: _vm.inputSplitDelay },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.inputSplitDelay = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uicore-core-setting" }, [
                        _c(
                          "label",
                          {
                            staticClass: "uicore_h2",
                            attrs: { for: "uianim_split_stagger" }
                          },
                          [
                            _vm._v(
                              "Stagger (between " +
                                _vm._s(_vm.selectedSplitBy) +
                                ")"
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inputSplitStagger,
                              expression: "inputSplitStagger"
                            }
                          ],
                          attrs: { id: "uianim_split_stagger", type: "text" },
                          domProps: { value: _vm.inputSplitStagger },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.inputSplitStagger = $event.target.value
                            }
                          }
                        })
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "uianim-actions" }, [
                  _c(
                    "div",
                    { staticClass: "uianim-btn", on: { click: _vm.change } },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(!_vm.apply ? "Apply" : "Play Again") +
                          "\n          "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "uianim-btn uianim-second",
                      on: { click: _vm.reset }
                    },
                    [_vm._v("\n            Reset Animation\n          ")]
                  )
                ])
              ])
            : _c("div", { staticClass: "uianim-content" }, [
                _c("div", { staticClass: "uianim-content__empty" }, [
                  !_vm.active
                    ? _c(
                        "div",
                        {
                          staticClass: "uianim-btn",
                          on: {
                            click: function($event) {
                              _vm.toggleActive()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n            Enable Animation Controls\n          "
                          )
                        ]
                      )
                    : _c(
                        "div",
                        { staticClass: "uianim-content__empty__title" },
                        [
                          _c(
                            "svg",
                            {
                              attrs: {
                                width: "84",
                                height: "91",
                                viewBox: "0 0 84 91",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M42.3304 4.25454L42.333 4.25648C44.3274 5.76925 46.2025 7.26779 47.8159 8.89858L47.8114 8.90051C46.4734 9.46731 44.6511 9.87614 42.324 9.87614C40.0032 9.87614 38.1842 9.47184 36.8474 8.90632L36.8436 8.90503C38.4563 7.26266 40.3328 5.77189 42.3252 4.25072L42.3304 4.25454ZM42.3259 17.9958H42.3265C44.1101 17.9958 45.5557 19.4421 45.5557 21.2263C45.5557 23.0111 44.1087 24.4582 42.3239 24.4582C40.539 24.4582 39.092 23.0112 39.092 21.2263C39.092 19.4415 40.539 17.9958 42.3239 17.9958H42.3259ZM42.322 14.6575H42.3213C38.6941 14.6575 35.7538 17.5984 35.7538 21.2263C35.7538 24.8547 38.6955 27.7965 42.324 27.7965C45.9525 27.7965 48.8942 24.8549 48.8942 21.2263C48.8942 17.5978 45.9519 14.6575 42.3233 14.6575H42.322ZM42.322 29.2518H42.3213C41.4005 29.2518 40.6551 29.9992 40.6551 30.9199V42.9802C40.6551 43.9016 41.4018 44.6489 42.3238 44.6489C43.2453 44.6489 43.9926 43.9016 43.9926 42.9802V30.9199C43.9926 29.9978 43.2452 29.2518 42.3232 29.2518H42.322ZM29.4157 33.8455L29.417 33.852C29.791 35.8336 30.225 37.8564 30.6776 39.8817L30.6738 39.8849C29.5911 40.8245 28.3762 42.0742 27.8029 44.1654L27.8023 44.166C27.623 44.8205 27.5102 45.555 27.4431 46.3333C26.8299 45.1636 26.3675 44.0551 26.1315 43.0021V43.0001C25.6144 40.6587 26.2166 38.4747 27.2007 36.717V36.7157C27.8191 35.6111 28.567 34.7104 29.4143 33.8404L29.4157 33.8455ZM55.2303 33.8455L55.2335 33.8488C56.0827 34.7083 56.8288 35.6124 57.4478 36.7203L57.4485 36.7209C58.4318 38.4793 59.036 40.6692 58.5182 42.9964L58.5176 42.9984C58.2822 44.0533 57.8179 45.1656 57.2015 46.3398C57.1351 45.5609 57.0229 44.8271 56.8436 44.1726V44.1719C56.2703 42.0781 55.0555 40.8253 53.9721 39.8844L53.9728 39.8812C54.4254 37.8454 54.8504 35.8297 55.225 33.8404L55.2303 33.8455ZM50.0568 11.5289L50.0594 11.5322C51.3342 13.2925 52.2821 15.2774 52.7689 17.6284L52.7696 17.6297C54.1031 24.0703 52.0525 33.4086 49.7383 43.3749L47.5626 44.003C47.2092 44.1055 46.8997 44.3222 46.6817 44.6182L45.3276 46.4624L39.3114 46.4611L37.9573 44.6162C37.74 44.3196 37.4305 44.1036 37.0771 44.001L34.9021 43.373C32.593 33.411 30.5475 24.0773 31.8785 17.6377L31.8792 17.6364C32.366 15.2743 33.3178 13.2954 34.5907 11.5259L34.5952 11.5285C36.8251 12.6511 39.6822 13.2154 42.3241 13.2154C44.9679 13.2154 47.8271 12.6493 50.0523 11.5234L50.0568 11.5289ZM42.3266 0.484375H42.3247C41.9313 0.484375 41.5419 0.624303 41.2343 0.891914L41.231 0.895138C36.0312 4.83253 30.222 9.194 28.613 16.9443V16.9456C27.8437 20.652 28.0571 25.0975 28.749 29.8486C28.72 29.8705 28.7084 29.8815 28.7084 29.8815L28.7078 29.8821C27.2331 31.2627 25.554 32.8238 24.2882 35.084V35.0846C23.0276 37.3345 22.1267 40.369 22.8702 43.7136V43.7143C23.5808 46.912 25.8068 50.2534 27.7606 53.2235L27.7612 53.2241C28.074 53.7 28.6034 53.976 29.156 53.976C29.3172 53.976 29.4797 53.9528 29.6396 53.9044C30.3425 53.6916 30.8197 53.0462 30.8255 52.3201L30.8235 52.2253C30.6797 49.2326 30.5766 46.6759 31.0221 45.0496C31.1543 44.5673 31.3375 44.1668 31.5709 43.8064L31.5715 43.8096C31.6695 44.2326 31.7727 44.6543 31.8707 45.0767C32.0074 45.6654 32.4511 46.1336 33.0314 46.3019L35.6016 47.0486L37.1221 49.1204C37.4362 49.5486 37.9365 49.802 38.4679 49.802L46.1703 49.8046C46.701 49.8033 47.2008 49.5505 47.5154 49.1224L49.0366 47.0512L51.6075 46.3058C52.1871 46.1381 52.6314 45.6693 52.7681 45.0812C52.8668 44.6563 52.9661 44.2307 53.0654 43.8038L53.068 43.807C53.3033 44.1675 53.4903 44.5667 53.6232 45.0522V45.0529C54.0688 46.6791 53.9643 49.2379 53.8192 52.2304L53.8173 52.3122C53.8166 53.0435 54.2951 53.6954 55.0018 53.9095C55.1624 53.9579 55.3255 53.9817 55.4861 53.9817C56.0613 53.9817 56.612 53.6844 56.9195 53.1718L56.9202 53.1712C58.8656 50.2153 61.0684 46.8983 61.7764 43.7226V43.7206C62.5212 40.3759 61.6216 37.3432 60.3623 35.0928L60.3616 35.0915C59.0971 32.8308 57.418 31.2696 55.9439 29.8883L55.9426 29.887C55.929 29.8747 55.8987 29.8522 55.8987 29.8522C56.5906 25.0934 56.8047 20.653 56.038 16.9512V16.9499C54.4324 9.19907 48.6265 4.83298 43.4284 0.892452C43.3678 0.845379 43.3387 0.823456 43.3387 0.823456L43.3375 0.822166C43.0357 0.59068 42.6817 0.484272 42.3302 0.484272L42.3266 0.484375ZM37.061 51.6711H37.0597C36.1396 51.6711 35.3935 52.4178 35.3935 53.3387V58.7552C35.3935 59.6766 36.1408 60.4239 37.0622 60.4239C37.9843 60.4239 38.7316 59.6766 38.7316 58.7552V53.3387C38.7316 52.4166 37.983 51.6711 37.0616 51.6711H37.061ZM47.5839 51.6711H47.5833C46.6625 51.6711 45.9164 52.4178 45.9164 53.3387V58.7552C45.9164 59.6766 46.6637 60.4239 47.5858 60.4239C48.5072 60.4239 49.2545 59.6766 49.2545 58.7552V53.3387C49.2545 52.4166 48.5065 51.6711 47.5845 51.6711H47.5839ZM42.3222 55.9688H42.3215C41.4007 55.9688 40.6552 56.7155 40.6552 57.6364V63.0529C40.6552 63.975 41.4019 64.7217 42.324 64.7217C43.2454 64.7217 43.9927 63.975 43.9927 63.0529V57.6364C43.9927 56.715 43.2454 55.9688 42.324 55.9688H42.3222ZM15.2051 64.9062H15.2045C8.66981 64.9062 3.37319 70.2048 3.37319 76.7395C3.37319 76.8214 3.37383 76.9027 3.37577 76.9846V76.9858C1.72121 78.429 0.675293 80.5536 0.675293 82.9228C0.675293 87.2747 4.20379 90.8032 8.55568 90.8032C9.6764 90.8032 10.7436 90.5717 11.7083 90.1513L11.7135 90.1493C12.2957 89.8843 12.7013 89.3001 12.7013 88.6205V88.6192C12.7013 87.6977 11.954 86.9504 11.0326 86.9504C10.7631 86.9504 10.5077 87.013 10.282 87.1264L10.2775 87.129C9.7468 87.345 9.16516 87.465 8.55575 87.465C6.04742 87.465 4.01352 85.4313 4.01352 82.9228C4.01352 82.3643 4.11476 81.8298 4.29854 81.3358L4.29919 81.3352C4.7525 80.1178 5.71201 79.1499 6.92753 78.6837L6.92881 78.6831C7.43372 78.4851 7.98246 78.3807 8.55572 78.3807C8.76078 78.3807 8.96326 78.3942 9.16122 78.4207L9.16573 78.422C9.2573 78.4361 9.34177 78.4445 9.43784 78.4445C10.3599 78.4445 11.1073 77.6972 11.1073 76.7751V76.7738C11.1073 75.9336 10.4856 75.2378 9.67766 75.1217L9.66735 75.1205C9.30367 75.0663 8.93354 75.0424 8.55566 75.0424C7.96822 75.0424 7.39627 75.1069 6.84564 75.2288C7.55882 71.2567 11.0311 68.2434 15.2071 68.2434C18.9619 68.2434 22.1473 70.679 23.2707 74.0579L23.2668 74.0598C22.2332 74.6389 21.3221 75.4146 20.605 76.3445L20.6024 76.3477C20.4979 76.4812 20.396 76.6185 20.3 76.761L20.2987 76.7623C20.1155 77.0286 20.0079 77.3536 20.0079 77.7031V77.7044C20.0079 78.6259 20.7552 79.3732 21.6766 79.3732C22.255 79.3732 22.7638 79.0798 23.0636 78.6335L23.0817 78.6078C23.2416 78.3801 23.4151 78.1641 23.6117 77.9649L23.6162 77.961C24.4977 77.0453 25.6912 76.4328 27.0325 76.2954H27.0331C27.2188 76.2767 27.4078 76.267 27.5987 76.267C29.3397 76.267 30.8944 77.0692 31.908 78.3311L31.9093 78.3324C32.1775 78.6664 32.4083 79.032 32.5947 79.4247L32.5953 79.4267C32.8668 79.978 33.4362 80.3585 34.0939 80.3585C34.533 80.3585 34.9406 80.196 35.2385 79.9187L35.2404 79.9167C35.5209 79.6511 35.7885 79.3719 36.0426 79.0798L36.0439 79.0778C37.79 77.0518 38.8424 74.4124 38.8424 71.5289C38.8424 69.8801 38.4974 68.3126 37.8758 66.8939L37.8745 66.8907C37.6469 66.2388 37.0234 65.7758 36.2947 65.7758C35.3732 65.7758 34.6259 66.5231 34.6259 67.4452V67.4465C34.6259 67.6844 34.6756 67.9108 34.7652 68.1152L34.7659 68.1165C35.2405 69.1546 35.5042 70.3108 35.5042 71.5289C35.5042 73.1416 35.0406 74.646 34.239 75.9183L34.2378 75.9196C32.6134 74.0851 30.2411 72.9289 27.5986 72.9289C27.2039 72.9289 26.8151 72.9547 26.4398 73.0063L26.4392 73.005C24.8755 68.299 20.4378 64.9065 15.2069 64.9065L15.2051 64.9062ZM69.4326 64.9094H69.4319C64.205 64.9094 59.7717 68.3019 58.2087 73.0046L58.2081 73.004C57.8328 72.953 57.4446 72.9285 57.05 72.9285C54.4075 72.9285 52.0358 74.0853 50.4108 75.9185L50.4102 75.9192C49.6086 74.645 49.1444 73.1413 49.1444 71.5285C49.1444 70.3143 49.4075 69.162 49.8795 68.1245L49.8827 68.1167C49.971 67.9039 50.0226 67.6815 50.0226 67.4461V67.4448C50.0226 66.5227 49.2753 65.7754 48.3539 65.7754C47.6246 65.7754 47.001 66.241 46.7734 66.8922L46.7721 66.8955C46.1511 68.3128 45.8061 69.8804 45.8061 71.5285C45.8061 74.4122 46.8591 77.0527 48.6053 79.0781L48.606 79.0793C48.86 79.3714 49.1276 79.6507 49.4081 79.9163L49.4114 79.9196C49.7093 80.1955 50.1155 80.358 50.5547 80.358C51.2124 80.358 51.7824 79.9789 52.0539 79.4256C52.2402 79.0316 52.4717 78.6692 52.7406 78.3352L52.7419 78.3339C53.7556 77.0713 55.3083 76.2667 57.0501 76.2667C57.2409 76.2667 57.4292 76.277 57.6149 76.2957H57.6156C58.9562 76.433 60.1485 77.0482 61.0307 77.9638L61.0339 77.967C61.2074 78.143 61.4943 78.5177 61.562 78.6067L61.5897 78.6434C61.9063 79.0651 62.397 79.3727 62.9722 79.3727C63.8937 79.3727 64.641 78.6254 64.641 77.704V77.7027C64.641 77.3525 64.5333 77.0282 64.3495 76.76L64.3489 76.7587C64.2522 76.6155 64.1503 76.4807 64.0465 76.3473L64.0445 76.3453C63.3275 75.4148 62.4144 74.6411 61.3814 74.0613L61.3788 74.0594C62.5027 70.678 65.6881 68.2431 69.4417 68.2431C73.6183 68.2431 77.0907 71.2571 77.8032 75.2285L77.8038 75.2298C77.2531 75.1066 76.6805 75.0421 76.0931 75.0421C75.714 75.0421 75.3406 75.0692 74.9763 75.1208H74.9757C74.1645 75.2336 73.5416 75.9313 73.5416 76.7735V76.7748C73.5416 77.6969 74.2889 78.4442 75.2103 78.4442C75.3025 78.4442 75.3947 78.4384 75.4824 78.4242L75.4844 78.4236C75.6836 78.3946 75.8867 78.3804 76.0931 78.3804C78.6014 78.3804 80.6353 80.4141 80.6353 82.9226C80.6353 85.4311 78.6016 87.4648 76.0931 87.4648C75.4837 87.4648 74.9021 87.3449 74.3713 87.1276L74.3694 87.1263C74.1469 87.0173 73.8858 86.9503 73.6162 86.9503C72.6948 86.9503 71.9475 87.6976 71.9475 88.619V88.6203C71.9475 89.3019 72.355 89.8893 72.9405 90.1486L72.9412 90.1492C73.9065 90.569 74.9724 90.8031 76.0931 90.8031C80.445 90.8031 83.9735 87.2746 83.9735 82.9227C83.9735 80.5555 82.9282 78.4352 81.2755 76.9902L81.2729 76.9882C81.2749 76.9025 81.2755 76.8212 81.2755 76.7393C81.2755 70.2033 75.9744 64.9093 69.4384 64.9093L69.4326 64.9094Z",
                                  fill: "#B9B9C6"
                                }
                              })
                            ]
                          ),
                          _vm._v("\n            Make your widgets pop! "),
                          _c("br"),
                          _vm._v("Select one to begin animating.\n          ")
                        ]
                      )
                ])
              ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-200a6b1e", esExports)
  }
}

/***/ })
],[16]);