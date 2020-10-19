(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/Sidenav"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidenav.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidenav.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_sidebar_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-sidebar-menu */ "./node_modules/vue-sidebar-menu/dist/vue-sidebar-menu.js");
/* harmony import */ var vue_sidebar_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_sidebar_menu__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {//console.log('Component mounted.')
  },
  components: {
    SidebarMenu: vue_sidebar_menu__WEBPACK_IMPORTED_MODULE_0__["SidebarMenu"]
  },
  data: function data() {
    return {
      sideNavIsCollapsed: false,
      sideNavWidth: '350px',
      sideNavRelative: false,
      sideNavMenu: [{
        header: true,
        title: 'Main Navigation',
        hiddenOnCollapse: true
      }, {
        href: {
          path: '/about'
        },

        /*href: '/about',*/
        title: 'About',
        icon: 'fa fa-user'
      }, {
        href: '/charts',
        title: 'Charts',
        icon: 'fa fa-chart-area',
        child: [{
          href: '/charts/sublink',
          title: 'Sub Link'
        }]
      }]
    };
  },
  methods: {
    onToggleCollapse: function onToggleCollapse(collapsed) {
      //console.log(collapsed);
      if (collapsed) {
        this.sideNavIsCollapsed = true;
      } else {
        this.sideNavIsCollapsed = false;
      }
    }
  },
  props: {
    relative: {
      type: Boolean,
      "default": false
    },
    width: {
      type: String,
      "default": '350px'
    },
    widthCollapsed: {
      type: String,
      "default": '50px'
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        staticClass: "main-sidenav",
        class: { collapsed: _vm.sideNavIsCollapsed }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("sidebar-menu", {
          attrs: {
            width: _vm.sideNavWidth,
            relative: _vm.sideNavRelative,
            menu: _vm.sideNavMenu
          },
          on: { "toggle-collapse": _vm.onToggleCollapse }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("h1", [_vm._v("ssdasddsadadsds")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Sidenav.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidenav.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidenav.vue?vue&type=template&id=3a054bd1& */ "./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1&");
/* harmony import */ var _Sidenav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidenav.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidenav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidenav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sidenav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sidenav.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Sidenav.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidenav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidenav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidenav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidenav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidenav.vue?vue&type=template&id=3a054bd1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidenav.vue?vue&type=template&id=3a054bd1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidenav_vue_vue_type_template_id_3a054bd1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);