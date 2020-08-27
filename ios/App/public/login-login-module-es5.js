function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
    \*************************************************************************/

  /*! exports provided: NgOtpInputModule, ɵa, ɵb, ɵc */

  /***/
  function node_modulesNgOtpInput__ivy_ngcc__Fesm2015NgOtpInputJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgOtpInputModule", function () {
      return NgOtpInputModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NgOtpInputComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return KeysPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return NumberOnlyDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.onKeyDown($event);
        })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var i_r3 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.onKeyUp($event, i_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("disabledNumberOnly", !ctx_r1.config.allowNumbersOnly)("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
      }
    }

    function NgOtpInputComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r0.config.containerClass, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
      }
    }

    var KeysPipe = /*#__PURE__*/function () {
      function KeysPipe() {
        _classCallCheck(this, KeysPipe);
      }

      _createClass(KeysPipe, [{
        key: "transform",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function transform(value) {
          return Object.keys(value);
        }
      }]);

      return KeysPipe;
    }();

    KeysPipe.ɵfac = function KeysPipe_Factory(t) {
      return new (t || KeysPipe)();
    };

    KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "keys",
      type: KeysPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'keys'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Config = function Config() {
      _classCallCheck(this, Config);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgOtpInputComponent = /*#__PURE__*/function () {
      /**
       * @param {?} keysPipe
       */
      function NgOtpInputComponent(keysPipe) {
        _classCallCheck(this, NgOtpInputComponent);

        this.keysPipe = keysPipe;
        this.config = {
          length: 4
        }; // tslint:disable-next-line: no-output-on-prefix

        this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputControls = new Array(this.config.length);
        this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
      }
      /**
       * @return {?}
       */


      _createClass(NgOtpInputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});

          for (var index = 0; index < this.config.length; index++) {
            this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
          }

          this.inputType = this.getInputType();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          if (!this.config.disableAutoFocus) {
            /** @type {?} */
            var containerItem = document.getElementById("c_".concat(this.componentKey));

            if (containerItem) {
              containerItem.addEventListener('paste',
              /**
              * @param {?} evt
              * @return {?}
              */
              function (evt) {
                return _this.handlePaste(evt);
              });
              /** @type {?} */

              var ele = containerItem.getElementsByClassName('otp-input')[0];

              if (ele && ele.focus) {
                ele.focus();
              }
            }
          }
        }
        /**
         * @private
         * @param {?} idx
         * @return {?}
         */

      }, {
        key: "getControlName",
        value: function getControlName(idx) {
          return "ctrl_".concat(idx);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "ifLeftArrow",
        value: function ifLeftArrow(event) {
          return this.ifKeyCode(event, 37);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "ifRightArrow",
        value: function ifRightArrow(event) {
          return this.ifKeyCode(event, 39);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "ifBackspaceOrDelete",
        value: function ifBackspaceOrDelete(event) {
          return event.key === 'Backspace' || event.key === 'Delete' || this.ifKeyCode(event, 8) || this.ifKeyCode(event, 46);
        }
        /**
         * @param {?} event
         * @param {?} targetCode
         * @return {?}
         */

      }, {
        key: "ifKeyCode",
        value: function ifKeyCode(event, targetCode) {
          /** @type {?} */
          var key = event.keyCode || event.charCode; // tslint:disable-next-line: triple-equals

          return key == targetCode ? true : false;
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onKeyDown",
        value: function onKeyDown($event) {
          /** @type {?} */
          var isSpace = this.ifKeyCode($event, 32);

          if (isSpace) {
            // prevent space
            return false;
          }
        }
        /**
         * @param {?} $event
         * @param {?} inputIdx
         * @return {?}
         */

      }, {
        key: "onKeyUp",
        value: function onKeyUp($event, inputIdx) {
          /** @type {?} */
          var nextInputId = this.appendKey("otp_".concat(inputIdx + 1));
          /** @type {?} */

          var prevInputId = this.appendKey("otp_".concat(inputIdx - 1));

          if (this.ifRightArrow($event)) {
            this.setSelected(nextInputId);
            return;
          }

          if (this.ifLeftArrow($event)) {
            this.setSelected(prevInputId);
            return;
          }
          /** @type {?} */


          var isBackspace = this.ifBackspaceOrDelete($event);

          if (isBackspace && !$event.target.value) {
            this.setSelected(prevInputId);
            this.rebuildValue();
            return;
          }

          if (!$event.target.value) {
            return;
          }

          if (this.ifValidEntry($event)) {
            this.setSelected(nextInputId);
          }

          this.rebuildValue();
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "appendKey",
        value: function appendKey(id) {
          return "".concat(id, "_").concat(this.componentKey);
        }
        /**
         * @param {?} eleId
         * @return {?}
         */

      }, {
        key: "setSelected",
        value: function setSelected(eleId) {
          this.focusTo(eleId);
          /** @type {?} */

          var ele = document.getElementById(eleId);

          if (ele && ele.setSelectionRange) {
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              ele.setSelectionRange(0, 1);
            }, 0);
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "ifValidEntry",
        value: function ifValidEntry(event) {
          /** @type {?} */
          var inp = String.fromCharCode(event.keyCode);
          /** @type {?} */

          var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          return isMobile || /[a-zA-Z0-9-_]/.test(inp) || this.config.allowKeyCodes && this.config.allowKeyCodes.includes(event.keyCode) || event.keyCode >= 96 && event.keyCode <= 105;
        }
        /**
         * @param {?} eleId
         * @return {?}
         */

      }, {
        key: "focusTo",
        value: function focusTo(eleId) {
          /** @type {?} */
          var ele = document.getElementById(eleId);

          if (ele) {
            ele.focus();
          }
        } // method to set component value

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          var _this2 = this;

          if (this.config.allowNumbersOnly && isNaN(value)) {
            return;
          }

          this.otpForm.reset();

          if (!value) {
            this.rebuildValue();
            return;
          }

          value = value.toString().replace(/\s/g, ''); // remove whitespace

          Array.from(value).forEach(
          /**
          * @param {?} c
          * @param {?} idx
          * @return {?}
          */
          function (c, idx) {
            if (_this2.otpForm.get(_this2.getControlName(idx))) {
              _this2.otpForm.get(_this2.getControlName(idx)).setValue(c);
            }
          });

          if (!this.config.disableAutoFocus) {
            /** @type {?} */
            var containerItem = document.getElementById("c_".concat(this.componentKey));
            /** @type {?} */

            var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
            /** @type {?} */

            var ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];

            if (ele && ele.focus) {
              ele.focus();
            }
          }

          this.rebuildValue();
        }
        /**
         * @return {?}
         */

      }, {
        key: "rebuildValue",
        value: function rebuildValue() {
          var _this3 = this;

          /** @type {?} */
          var val = '';
          this.keysPipe.transform(this.otpForm.controls).forEach(
          /**
          * @param {?} k
          * @return {?}
          */
          function (k) {
            if (_this3.otpForm.controls[k].value) {
              val += _this3.otpForm.controls[k].value;
            }
          });
          this.onInputChange.emit(val);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getInputType",
        value: function getInputType() {
          return this.config.isPasswordInput ? 'password' : this.config.allowNumbersOnly ? 'tel' : 'text';
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "handlePaste",
        value: function handlePaste(e) {
          // Get pasted data via clipboard API

          /** @type {?} */
          var clipboardData = e.clipboardData || window['clipboardData'];

          if (clipboardData) {
            /** @type {?} */
            var pastedData = clipboardData.getData('Text');
          } // Stop data actually being pasted into div


          e.stopPropagation();
          e.preventDefault();

          if (!pastedData) {
            return;
          }

          this.setValue(pastedData);
        }
      }]);

      return NgOtpInputComponent;
    }();

    NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) {
      return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe));
    };

    NgOtpInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgOtpInputComponent,
      selectors: [["ng-otp-input"]],
      inputs: {
        config: "config"
      },
      outputs: {
        onInputChange: "onInputChange"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "maxlength", "1", "autocomplete", "off", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]],
      template: function NgOtpInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]];
      },
      pipes: function pipes() {
        return [KeysPipe];
      },
      styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
    });
    /** @nocollapse */

    NgOtpInputComponent.ctorParameters = function () {
      return [{
        type: KeysPipe
      }];
    };

    NgOtpInputComponent.propDecorators = {
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onInputChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'ng-otp-input',
          template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" maxlength=\"1\"\r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"off\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
          styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input{width:30px;font-size:18px;height:30px}}"]
        }]
      }], function () {
        return [{
          type: KeysPipe
        }];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onInputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NumberOnlyDirective = /*#__PURE__*/function () {
      /**
       * @param {?} _elRef
       * @param {?} _renderer
       */
      function NumberOnlyDirective(_elRef, _renderer) {
        _classCallCheck(this, NumberOnlyDirective);

        this._elRef = _elRef;
        this._renderer = _renderer;
      }
      /**
       * @return {?}
       */


      _createClass(NumberOnlyDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.disabledNumberOnly) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
          }
        }
      }]);

      return NumberOnlyDirective;
    }();

    NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) {
      return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    NumberOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NumberOnlyDirective,
      selectors: [["", "numberOnly", ""]],
      inputs: {
        disabledNumberOnly: "disabledNumberOnly"
      }
    });
    /** @nocollapse */

    NumberOnlyDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    NumberOnlyDirective.propDecorators = {
      disabledNumberOnly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[numberOnly]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        disabledNumberOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgOtpInputModule = function NgOtpInputModule() {
      _classCallCheck(this, NgOtpInputModule);
    };

    NgOtpInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgOtpInputModule
    });
    NgOtpInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgOtpInputModule_Factory(t) {
        return new (t || NgOtpInputModule)();
      },
      providers: [KeysPipe],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgOtpInputModule, {
        declarations: function declarations() {
          return [NgOtpInputComponent, KeysPipe, NumberOnlyDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]];
        },
        exports: function exports() {
          return [NgOtpInputComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
          declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
          exports: [NgOtpInputComponent],
          providers: [KeysPipe]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-otp-input.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-progress-bar type=\"indeterminate\" *ngIf=\"hideNshowProgressBar\"></ion-progress-bar>\n  <ion-item lines =\"none\" style=\"margin-top: 40px; \">\n    <ion-thumbnail slot=\"start\" class=\"img-center\">\n      <img src=\"assets/icon/Rent2Trust.jpeg\" style=\"width: 45%;\">\n    </ion-thumbnail>\n  </ion-item>\n\n  <ion-card *ngIf=\"selectedFrom == 'loginForm'\" style=\"text-align: center;\">\n    <ion-card-content>\n      <div>\n        <ion-icon style=\"font-size: 50px;color: #339929;\" name=\"phone-portrait\"></ion-icon>\n      </div>\n      <h6>\n          <b>Enter your mobile number</b>\n      </h6>\n      <h6 style=\"padding: 13px;\">\n          We will send a 6-digit verification code to this mobile number\n      </h6>\n      <p>\n        <!-- <hr style=\"box-sizing: border-box;border-width: 1px;border-color: #fff;\"> -->\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-select placeholder=\"Select\" interface=\"action-sheet\" [(ngModel)]=\"countryCode\">\n              <ion-select-option value=\"+91\">+91</ion-select-option>\n              <ion-select-option value=\"+1\">+1</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"9\" style=\" padding-left: 0px;\">\n            <ion-input  type=\"tel\"  maxlength=\"10\" [(ngModel)]=\"mobileNumber\" placeholder=\"Enter mobile number\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <!-- <hr style=\"box-sizing: border-box;border-width: 1px;border-color: #fff;\"> -->\n      </p>\n      <p>\n        <ion-button expand=\"full\" color=\"primary\" id=\"sendCodeBtn\" (click)=\"sendVarificationCode()\">\n            Send Code\n        </ion-button>\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"selectedFrom == 'loginOtpForm'\">\n    <ion-card-content style=\"text-align: center\">\n      <div>\n        <ion-icon style=\"font-size: 50px;color: #339929;\" name=\"key\"></ion-icon>\n      </div>\n      <h6>\n        <b>Verify your number</b>\n      </h6>\n      <h6 style=\"padding: 13px 13px 0;\">\n        Enter the 6-digit Verification Code send to <b>{{mobileNumber}}</b> over SMS\n      </h6>\n      <!-- <p style=\"color: #d00c0f;\" (click)=\"resetNumberAlert()\">\n        RESET <b>{{mobileNumber}}</b> NUMBER\n      </p> -->\n      <!-- <p> -->\n      <ng-otp-input (onInputChange)=\"onOtpChange($event)\" [config]=\"config\"></ng-otp-input>\n      <h6 style=\"color: #d00c0f;\" (click)=\"sendCode(phoneNumberWithCode)\">\n          Resend Verification Code\n      </h6>\n      <!-- </p>  -->\n      <p>\n        <ion-button expand=\"full\" color=\"primary\" id=\"verifyNumberBtn\" [disabled]=\"!verifyDisable\" (click)=\"verifyNumber()\">\n            Verify Number\n        </ion-button>\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div style=\"margin-top: 0px; opacity: 0;position: absolute;\n    bottom: 0px;\" id=\"recaptcha-container\">\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");
    /* harmony import */


    var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-otp-input */
    "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".img-center {\n  width: 100%;\n  margin: 20px auto;\n  text-align: center;\n  height: 100px;\n}\n\n.icon-radius {\n  margin-left: 50px;\n  border-radius: 50%;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRzpcXHVzZXJzXFxrZXNoYXZcXGdpdFxcUmVudDJUcnVzdC1EZWxpdmVyeS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY2VudGVyIHtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIG1hcmdpbjogMjBweCBhdXRvOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5pY29uLXJhZGl1cyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDsgICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufSIsIi5pbWctY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5pY29uLXJhZGl1cyB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/database.service */
    "./src/app/services/database.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, toastCtrl, alertCtrl, databaseService) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.databaseService = databaseService;
        this.otp = "";
        this.verificationId = "";
        this.mobileNumber = "";
        this.hideNshowProgressBar = false;
        this.verifyDisable = true;
        this.selectedFrom = "loginForm";
        this.progressNumber = 0;
        this.config = {
          allowNumbersOnly: true,
          length: 6,
          isPasswordInput: false
        };
        this.fireAuth = firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]();
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var self = this;
          self.windowRef = window;
          self.windowRef.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].RecaptchaVerifier('recaptcha-container', {
            //'type' : 'image',
            'size': 'invisible',
            //'badge': 'inline',
            'callback': function callback(response) {// reCAPTCHA solved, allow signInWithPhoneNumber.
            }
          }); // render the rapchaVerifier. 

          self.windowRef.recaptchaVerifier.render().then(function (widgetId) {
            self.windowRef.recaptchaWidgetId = widgetId;
          });
        } //otp change input value

      }, {
        key: "onOtpChange",
        value: function onOtpChange(event) {
          //console.log(event);
          this.otp = event;
        } //send verification code

      }, {
        key: "sendCode",
        value: function sendCode(mobileNumber) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var self, appVerifier, credential;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    self = this; //set progress bar value

                    self.hideNshowProgressBar = true;
                    _context.prev = 2;
                    appVerifier = this.windowRef.recaptchaVerifier;
                    _context.next = 6;
                    return this.fireAuth.signInWithPhoneNumber(mobileNumber, appVerifier);

                  case 6:
                    credential = _context.sent;

                    if (credential) {
                      //hide progress bar loader
                      self.progressNumber = 1;
                      this.hideNshowProgressBar = false; //switched to otp form

                      this.selectedFrom = 'loginOtpForm';
                      this.showToast('OTP Sent Successfully!'); //this.showVerify = true;

                      this.otp = ""; //In case of iOS credential is VerificationId

                      this.verificationId = credential.verificationId; //this.smsRetrieverFunction();
                    } else {
                      //hide progress bar loader
                      self.progressNumber = 0;
                      this.hideNshowProgressBar = false; //clearInterval(timerInterval);
                    }

                    this.windowRef.confirmationResult = credential;
                    _context.next = 16;
                    break;

                  case 11:
                    _context.prev = 11;
                    _context.t0 = _context["catch"](2);
                    //hide progress bar loader
                    self.progressNumber = 0;
                    this.hideNshowProgressBar = false;
                    this.showAlert("", _context.t0);

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[2, 11]]);
          }));
        } // send verification code to mobile no

      }, {
        key: "sendVarificationCode",
        value: function sendVarificationCode() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var self, isPhoneNumberValid;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    self = this;
                    _context2.prev = 1;

                    if (!(self.mobileNumber == "" || self.mobileNumber == undefined)) {
                      _context2.next = 5;
                      break;
                    }

                    self.showErrorToast("Please enter mobile number");
                    return _context2.abrupt("return");

                  case 5:
                    if (!(self.countryCode == "" || self.countryCode == undefined)) {
                      _context2.next = 8;
                      break;
                    }

                    self.showErrorToast("Please select countryCode");
                    return _context2.abrupt("return");

                  case 8:
                    //show progress bar loade
                    self.hideNshowProgressBar = true;
                    _context2.next = 11;
                    return this.checkMobileNoLengthFunc(self, self.mobileNumber);

                  case 11:
                    isPhoneNumberValid = _context2.sent;

                    if (isPhoneNumberValid) {
                      self.phoneNumberWithCode = "+91" + this.mobileNumber;
                      self.sendCode(self.phoneNumberWithCode);
                    } else {
                      //hide progress bar loader
                      self.hideNshowProgressBar = false;
                    }

                    _context2.next = 19;
                    break;

                  case 15:
                    _context2.prev = 15;
                    _context2.t0 = _context2["catch"](1);
                    self.hideNshowProgressBar = false;
                    self.showAlert("INFORMATION", "Phone number is not registered Please Signup");

                  case 19:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 15]]);
          }));
        } //check Mobile No Length

      }, {
        key: "checkMobileNoLengthFunc",
        value: function checkMobileNoLengthFunc(self, number) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var mobileNo, mobileSNo, integer, object, data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    mobileNo = Number(number);
                    mobileSNo = String(number);
                    integer = Number.isInteger(mobileNo);

                    if (!(mobileSNo.trim() == '')) {
                      _context3.next = 8;
                      break;
                    }

                    self.showToast("Number required");
                    return _context3.abrupt("return", false);

                  case 8:
                    if (!(integer == false && mobileSNo.length < 11)) {
                      _context3.next = 13;
                      break;
                    }

                    self.showToast("Number is not valid");
                    return _context3.abrupt("return", false);

                  case 13:
                    if (!(mobileNo == 0 || mobileNo.toString().length != mobileSNo.length)) {
                      _context3.next = 18;
                      break;
                    }

                    self.showToast("Number is not valid");
                    return _context3.abrupt("return", false);

                  case 18:
                    object = {
                      type: 'phone',
                      countryCode: this.countryCode,
                      data: mobileNo
                    };
                    _context3.next = 21;
                    return self.databaseService.checkEmailOrNumberExistGCP(object);

                  case 21:
                    data = _context3.sent;

                    if (!data) {
                      _context3.next = 26;
                      break;
                    }

                    return _context3.abrupt("return", true);

                  case 26:
                    //self.showToast("Phone number is not registerd.");
                    self.showAlert("INFORMATION", "Phone number is not registered Please Signup");
                    return _context3.abrupt("return", false);

                  case 28:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } //

      }, {
        key: "verifyNumber",
        value: function verifyNumber() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var self, toast, verificationId, signInCredential, userObject, userId, userData, userDataDetails;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    self = this; // disable button

                    self.verifyDisable = false; //set progress bar value

                    self.hideNshowProgressBar = true;
                    self.progressNumber = 0;
                    _context4.prev = 4;

                    if (!(!self.otp || self.otp.length == 0)) {
                      _context4.next = 14;
                      break;
                    }

                    _context4.next = 8;
                    return self.toastCtrl.create({
                      message: 'OTP required',
                      duration: 1500,
                      position: 'bottom'
                    });

                  case 8:
                    toast = _context4.sent;
                    _context4.next = 11;
                    return toast.present();

                  case 11:
                    //set verify number btn Enable
                    self.verifyDisable = true; //set progress bar value

                    self.hideNshowProgressBar = false;
                    return _context4.abrupt("return");

                  case 14:
                    verificationId = self.verificationId;
                    _context4.next = 17;
                    return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].PhoneAuthProvider.credential(verificationId, self.otp);

                  case 17:
                    signInCredential = _context4.sent;
                    _context4.next = 20;
                    return firebase__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithCredential(signInCredential);

                  case 20:
                    userObject = _context4.sent;

                    if (!(userObject && userObject['user'] && userObject['user'].uid)) {
                      _context4.next = 29;
                      break;
                    }

                    userId = userObject['user'].uid;
                    _context4.next = 25;
                    return this.databaseService.getUserDataByPhoneNo(self.phoneNumberWithCode);

                  case 25:
                    userData = _context4.sent;

                    if (userData.isSuccess) {
                      //set verify number btn Enable
                      self.verifyDisable = true; //set progress bar value

                      self.progressNumber = 1;
                      self.hideNshowProgressBar = false;
                      userDataDetails = userData.data[0]; //for client user

                      if (userDataDetails) {
                        localStorage.setItem("name", userDataDetails.FullName);
                        localStorage.setItem("phoneNumber", userDataDetails.phoneNumber);
                        localStorage.setItem("email", userDataDetails.email);
                        localStorage.setItem("userId", userDataDetails.userId);
                        localStorage.setItem("isloggedIn", "true"); //set login form page

                        self.selectedFrom = "loginForm"; //navigate to home page for all use

                        this.router.navigateByUrl("home");
                      } else {
                        //set verify number btn Enable
                        self.verifyDisable = true; //set progress bar value

                        self.progressNumber = 0;
                        self.hideNshowProgressBar = false;
                        self.showAlert("INFORMATION", "You don't have the permission to access the application");
                      }
                    } else {
                      //set verify number btn Enable
                      self.verifyDisable = true; //set progress bar value

                      self.progressNumber = 0;
                      self.hideNshowProgressBar = false;
                      self.showToast("User not found with ".concat(self.phoneNumberWithCode, " number"));
                    }

                    _context4.next = 33;
                    break;

                  case 29:
                    //set verify number btn Enable
                    self.verifyDisable = true; //set progress bar value

                    self.progressNumber = 0;
                    self.hideNshowProgressBar = false;
                    self.showToast("User not found with ".concat(self.phoneNumberWithCode, " number"));

                  case 33:
                    _context4.next = 41;
                    break;

                  case 35:
                    _context4.prev = 35;
                    _context4.t0 = _context4["catch"](4);
                    //set verify number btn Enable
                    self.verifyDisable = true; //set progress bar value

                    self.progressNumber = 0;
                    self.hideNshowProgressBar = false;
                    self.showToast(_context4.t0.message);

                  case 41:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[4, 35]]);
          }));
        }
      }, {
        key: "changeNumber",
        value: function changeNumber() {
          //this.showVerify = false;
          this.otp = "";
        } //show alert

      }, {
        key: "showAlert",
        value: function showAlert(title, message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var self, alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    self = this;
                    _context5.next = 3;
                    return this.alertCtrl.create({
                      header: title,
                      message: message,
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Ok',
                        cssClass: "success-color",
                        handler: function handler() {
                          //navigate to signup page for all use
                          self.router.navigateByUrl("signup");
                        }
                      }]
                    });

                  case 3:
                    alert = _context5.sent;
                    _context5.next = 6;
                    return alert.present();

                  case 6:
                    return _context5.abrupt("return", _context5.sent);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } //show toast

      }, {
        key: "showToast",
        value: function showToast(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var toast;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 1500,
                      position: 'bottom'
                    });

                  case 2:
                    toast = _context6.sent;
                    _context6.next = 5;
                    return toast.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        } //showErrorToast function for error

      }, {
        key: "showErrorToast",
        value: function showErrorToast(messages) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var self, toast;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    self = this;
                    _context7.next = 3;
                    return self.toastCtrl.create({
                      message: messages,
                      duration: 2000,
                      position: 'bottom',
                      cssClass: "cmnToastColor"
                    });

                  case 3:
                    toast = _context7.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map