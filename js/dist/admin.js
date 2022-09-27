/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/components/SettingsListItem.js":
/*!**************************************************!*\
  !*** ./src/admin/components/SettingsListItem.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsListItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/withAttr */ "flarum/common/utils/withAttr");
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _WebhookEditModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WebhookEditModal */ "./src/admin/components/WebhookEditModal.js");











var SettingsListItem = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsListItem, _Component);

  function SettingsListItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SettingsListItem.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.webhook = this.attrs.webhook;
    this.services = this.attrs.services;
    this.url = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.webhook.url());
    this.service = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.webhook.service());
    this.events = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.webhook.events());
    this.error = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.webhook.error());
    this.loading = {};
  };

  _proto.view = function view() {
    var _this = this;

    var webhook = this.webhook,
        services = this.services;
    var service = webhook.service();
    var errors = [webhook.error && webhook.error()];

    if (!services[service]) {
      errors.push(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.errors.service_not_found', {
        service: service
      }));
    } else if (!webhook.isValid()) {
      errors.push(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.errors.url_invalid'));
    } else if (!webhook.tag() && webhook.attribute('tag_id')) {
      errors.push(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.errors.tag_invalid'));
    }

    var tagIcon = __webpack_require__(/*! flarum/tags/common/helpers/tagIcon */ "flarum/tags/common/helpers/tagIcon");

    var tag = webhook.tag();
    var tagIdLoading = !!this.loading['tag_id'];
    return m("div", {
      className: "Webhooks--row",
      "data-webhook-id": webhook.id()
    }, m("div", {
      className: "Webhook-input"
    }, m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_5___default()), {
      options: services,
      value: service,
      onchange: this.update('service'),
      disabled: this.loading['service']
    }), m("input", {
      className: "FormControl Webhook-url",
      type: "url",
      value: this.url(),
      onchange: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_8___default()('value', this.update('url')),
      disabled: this.loading['url'],
      placeholder: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.help.url')
    }), tagIcon && m((flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
      buttonClassName: "Button",
      label: tag ? m("span", null, !tagIdLoading && tagIcon(tag, {
        className: 'Button-icon'
      }), " ", tag.name()) : flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.item.tag_any_label'),
      icon: tagIdLoading ? 'fas fa-spinner fa-spin' : tag ? true : 'fas fa-tag',
      caretIcon: null
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      icon: 'fas fa-tag',
      onclick: function onclick() {
        return _this.update('tag_id')(null);
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.item.tag_any_label')), m("hr", null), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('tags').map(function (tag) {
      return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
        icon: true,
        onclick: function onclick() {
          return _this.update('tag_id')(tag.id());
        }
      }, tagIcon(tag, {
        className: 'Button-icon'
      }), " ", tag.name());
    })), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      type: "button",
      className: "Button Webhook-button",
      icon: "fas fa-edit",
      onclick: function onclick() {
        return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_WebhookEditModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
          webhook: webhook,
          updateWebhook: _this.update('events')
        });
      }
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      type: "button",
      className: "Button Button--warning Webhook-button",
      icon: "fas fa-times",
      onclick: this["delete"].bind(this)
    })), !this.events().length && m((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_6___default()), {
      className: "Webhook-error",
      dismissible: false
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.help.disabled')), errors.filter(Boolean).map(function (error) {
      return m((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_6___default()), {
        className: "Webhook-error",
        type: "error",
        dismissible: false
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans(error));
    }));
  };

  _proto.update = function update(field) {
    var _this2 = this;

    return function (value) {
      var _this2$webhook$save;

      _this2.loading[field] = true;
      return _this2.webhook.save((_this2$webhook$save = {}, _this2$webhook$save[field] = value, _this2$webhook$save))["catch"](function () {}).then(function () {
        _this2.loading[field] = false;
        if (_this2[field]) _this2[field](value);
        m.redraw();
      });
    };
  };

  _proto["delete"] = function _delete() {
    return this.webhook["delete"]().then(function () {
      return m.redraw();
    });
  };

  return SettingsListItem;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "./src/admin/components/WebhookEditModal.js":
/*!**************************************************!*\
  !*** ./src/admin/components/WebhookEditModal.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebhookEditModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/models/Group */ "flarum/common/models/Group");
/* harmony import */ var flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8__);










var sortByProp = function sortByProp(prop) {
  return function (a, b) {
    var propA = a[prop].toUpperCase(); // ignore upper and lowercase

    var propB = b[prop].toUpperCase(); // ignore upper and lowercase

    return propA < propB ? -1 : propA > propB ? 1 : 0;
  };
};

var groupBy = function groupBy(obj, fn) {
  var keys = Object.keys(obj);
  var vals = Object.values(obj);
  return keys.map(typeof fn === 'function' ? fn : function (val) {
    return val[fn];
  }).reduce(function (acc, val, i) {
    if (!acc[val]) acc[val] = {};
    acc[val][keys[i]] = vals[i];
    return acc;
  }, {});
};

var WebhookEditModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WebhookEditModal, _Modal);

  function WebhookEditModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = WebhookEditModal.prototype;

  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);

    this.webhook = this.attrs.webhook;
    var events = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data["fof-webhooks.events"]);
    this.groupId = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()(this.webhook.groupId() || (flarum_common_models_Group__WEBPACK_IMPORTED_MODULE_6___default().GUEST_ID));
    this.extraText = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()(this.webhook.extraText() || '');
    this.usePlainText = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()(this.webhook.usePlainText());
    this.maxPostContentLength = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_8___default()(this.webhook.maxPostContentLength());
    this.events = groupBy(events.reduce(function (obj, evt) {
      var m = /((?:[a-z]+\\?)+?)\\Events?\\([a-z]+)/i.exec(evt);

      if (!m) {
        obj.other.push({
          full: evt,
          name: evt
        });
        obj.other = obj.other.sort();
        return obj;
      }

      var group = m[1].toLowerCase().replace('\\', '.');
      if (!obj[group]) obj[group] = [];
      obj[group] = obj[group].concat({
        full: evt,
        name: m[2]
      }).sort();
      return obj;
    }, {
      other: []
    }), function (key) {
      return key.split('.')[0];
    });
  };

  _proto.className = function className() {
    return 'Modal--medium';
  };

  _proto.title = function title() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.modal.title');
  };

  _proto.content = function content() {
    var _this = this;

    var icons = {
      2: 'fas fa-globe',
      3: 'fas fa-user'
    };
    var group = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.getById('groups', this.groupId());
    return m("div", {
      className: "FofWebhooksModal Modal-body"
    }, m("form", {
      className: "Form",
      onsubmit: this.onsubmit.bind(this)
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2___default()), {
      state: this.usePlainText(),
      onchange: this.usePlainText
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.modal.use_plain_text_label')), m("div", {
      className: "Form-group"
    }, m("label", {
      className: "label"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.modal.max_post_content_length_label')), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.modal.max_post_content_length_help')), m("input", {
      type: "number",
      min: "0",
      className: "FormControl",
      bidi: this.maxPostContentLength,
      onkeypress: this.onkeypress.bind(this)
    })), m("div", {
      className: "Form-group hasLoading"
    }, m("label", {
      className: "label"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.modal.extra_text_label')), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.modal.extra_text_help')), m("input", {
      type: "text",
      className: "FormControl",
      bidi: this.extraText,
      onkeypress: this.onkeypress.bind(this)
    })), m("div", {
      className: "Form-group"
    }, m("label", {
      className: "label"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.modal.group_label')), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.modal.group_help')), m((flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default()), {
      label: [flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()(group.icon() || icons[group.id()]), group.namePlural()],
      buttonClassName: "Button Button--danger"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('groups').filter(function (g) {
      return ['1', '2'].includes(g.id());
    }).map(function (g) {
      return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        active: group.id() === g.id(),
        disabled: group.id() === g.id(),
        icon: g.icon() || icons[g.id()],
        onclick: function onclick() {
          return _this.groupId(g.id());
        }
      }, g.namePlural());
    }))), m("div", {
      className: "Form-group Webhook-events"
    }, m("label", {
      className: "label"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.modal.events_label')), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.modal.description'), Object.entries(this.events).map(function (_ref) {
      var events = _ref[1];
      return m("div", null, Object.entries(events).sort(sortByProp(0)).map(function (_ref2) {
        var group = _ref2[0],
            events = _ref2[1];
        return events.length ? m("div", null, m("h3", null, _this.translate(group)), events.map(function (event) {
          return m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_2___default()), {
            state: _this.webhook.events().includes(event.full),
            onchange: _this.onchange.bind(_this, event.full)
          }, _this.translate(group, event.name.toLowerCase()));
        })) : null;
      }));
    })), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      type: "submit",
      className: "Button Button--primary",
      loading: this.loading,
      disabled: !this.isDirty()
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.admin.settings.submit_button')))));
  };

  _proto.translate = function translate(group, key) {
    if (key === void 0) {
      key = 'title';
    }

    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("fof-webhooks.admin.settings.actions." + group + "." + key);
  };

  _proto.isDirty = function isDirty() {
    return this.extraText() != this.webhook.extraText() || this.groupId() !== this.webhook.groupId() || this.usePlainText() !== this.webhook.usePlainText() || this.maxPostContentLength() != this.webhook.maxPostContentLength();
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    e.preventDefault();
    this.loading = true;
    return this.webhook.save({
      extraText: this.extraText(),
      group_id: this.groupId(),
      use_plain_text: this.usePlainText(),
      max_post_content_length: this.maxPostContentLength() || 0
    }).then(function () {
      _this2.loading = false;
      m.redraw();
    })["catch"](function () {
      _this2.loading = false;
      m.redraw();
    });
  };

  _proto.onkeypress = function onkeypress(e) {
    if (e.key === 'Enter') {
      this.onsubmit(e);
    }
  };

  _proto.onchange = function onchange(event, checked, component) {
    component.loading = true;
    var events = this.webhook.events();

    if (checked) {
      events.push(event);
    } else {
      events.splice(events.indexOf(event), 1);
    }

    return this.attrs.updateWebhook(events).then(function () {
      component.loading = false;
      m.redraw();
    });
  };

  return WebhookEditModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_7___default()));



/***/ }),

/***/ "./src/admin/components/WebhooksPage.js":
/*!**********************************************!*\
  !*** ./src/admin/components/WebhooksPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebhooksPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/withAttr */ "flarum/common/utils/withAttr");
/* harmony import */ var flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _SettingsListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SettingsListItem */ "./src/admin/components/SettingsListItem.js");










var WebhooksPage = /*#__PURE__*/function (_ExtensionPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WebhooksPage, _ExtensionPage);

  function WebhooksPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = WebhooksPage.prototype;

  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);

    this.values = {};
    this.services = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data["fof-webhooks.services"].reduce(function (o, service) {
      o[service] = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("fof-webhooks.admin.settings.services." + service);
      return o;
    }, {});
    this.newWebhook = {
      service: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()('discord'),
      url: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(''),
      loading: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_3___default()(false)
    };
    this.loadingTags = this.isTagsEnabled();
  };

  _proto.oncreate = function oncreate(vnode) {
    var _this = this;

    _ExtensionPage.prototype.oncreate.call(this, vnode);

    if (this.loadingTags) {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.find('tags').then(function () {
        _this.loadingTags = false;
        m.redraw();
      });
    }
  };

  _proto.content = function content() {
    var _this2 = this;

    var webhooks = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('webhooks');

    if (this.loadingTags) {
      return m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7___default()), null);
    }

    return m("div", {
      className: "WebhookContent"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "Form-group"
    }, this.buildSettingComponent({
      type: 'boolean',
      setting: 'fof-webhooks.debug',
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.debug_label'),
      help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.debug_help'),
      loading: this.loading,
      onchange: this.updateDebug.bind(this)
    })), m("hr", null), m("form", null, m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.help.general')), m("fieldset", null, m("div", {
      className: "Webhooks--Container"
    }, webhooks.map(function (webhook) {
      return m(_SettingsListItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
        webhook: webhook,
        services: _this2.services
      });
    }), m("div", {
      className: "Webhooks--row"
    }, m("div", {
      className: "Webhook-input"
    }, m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_6___default()), {
      options: this.services,
      value: this.newWebhook.service(),
      onchange: this.newWebhook.service
    }), m("input", {
      className: "FormControl Webhook-url",
      type: "url",
      placeholder: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('fof-webhooks.admin.settings.help.url'),
      onchange: flarum_common_utils_withAttr__WEBPACK_IMPORTED_MODULE_4___default()('value', this.newWebhook.url),
      onkeypress: this.onkeypress.bind(this)
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      type: "button",
      loading: this.newWebhook.loading(),
      className: "Button Button--warning Webhook-button",
      icon: "fas fa-plus",
      onclick: this.addWebhook.bind(this)
    }))))))));
  };

  _proto.addWebhook = function addWebhook() {
    var _this3 = this;

    if (this.newWebhook.loading()) return;
    this.newWebhook.loading(true);
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.createRecord('webhooks').save({
      service: this.newWebhook.service(),
      url: this.newWebhook.url()
    }).then(function () {
      _this3.newWebhook.service('discord');

      _this3.newWebhook.url('');

      _this3.newWebhook.loading(false);

      m.redraw();
    })["catch"](function () {
      _this3.newWebhook.loading(false);

      m.redraw();
    });
  };

  _proto.onkeypress = function onkeypress(e) {
    if (e.key === 'Enter') {
      this.addWebhook();
    }
  }
  /**
   * @returns boolean
   */
  ;

  _proto.changed = function changed() {
    var _this4 = this;

    return this.fields.some(function (key) {
      return _this4.values[key]() !== ((flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data.settings)[_this4.addPrefix(key)] || '');
    });
  };

  _proto.isTagsEnabled = function isTagsEnabled() {
    return !!flarum.extensions['flarum-tags'];
  };

  _proto.updateDebug = function updateDebug(state) {
    this.setting('fof-webhooks.debug')(state);
    return this.saveSettings(new Event(null));
  };

  return WebhooksPage;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/models/Forum */ "flarum/common/models/Forum");
/* harmony import */ var flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Webhook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Webhook */ "./src/admin/models/Webhook.js");
/* harmony import */ var _components_WebhooksPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/WebhooksPage */ "./src/admin/components/WebhooksPage.js");





flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('fof/webhooks', function () {
  (flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().store.models.webhooks) = _models_Webhook__WEBPACK_IMPORTED_MODULE_3__["default"];
  (flarum_common_models_Forum__WEBPACK_IMPORTED_MODULE_2___default().prototype.webhooks) = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasMany('webhooks');
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('fof-webhooks').registerPage(_components_WebhooksPage__WEBPACK_IMPORTED_MODULE_4__["default"]);
});

/***/ }),

/***/ "./src/admin/models/Webhook.js":
/*!*************************************!*\
  !*** ./src/admin/models/Webhook.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Webhook)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_2__);




var Webhook = /*#__PURE__*/function (_Model) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Webhook, _Model);

  function Webhook() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.id = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('id');
    _this.service = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('service');
    _this.url = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('url');
    _this.error = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('error');
    _this.events = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('events');
    _this.tagId = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('tag_id');
    _this.groupId = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('group_id');
    _this.extraText = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('extra_text');
    _this.isValid = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('is_valid', Boolean);
    _this.usePlainText = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('use_plain_text', Boolean);
    _this.maxPostContentLength = flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default().attribute('max_post_content_length');
    return _this;
  }

  var _proto = Webhook.prototype;

  _proto.apiEndpoint = function apiEndpoint() {
    return "/fof/webhooks" + (this.exists ? "/" + this.data.id : '');
  };

  _proto.tag = function tag() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().store.getById('tags', this.tagId());
  };

  return Webhook;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_2___default()));



/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/models/Forum":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/models/Forum']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Forum'];

/***/ }),

/***/ "flarum/common/models/Group":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/models/Group']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Group'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/withAttr":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/withAttr']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/withAttr'];

/***/ }),

/***/ "flarum/tags/common/helpers/tagIcon":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['tags/common/helpers/tagIcon']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['tags/common/helpers/tagIcon'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map